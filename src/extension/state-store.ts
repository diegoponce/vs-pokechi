import * as fs from 'node:fs'
import * as path from 'node:path'
import * as vscode from 'vscode'
import { PokemonType } from '../common/types'
import { Roster, RosterEntry, UserPokemon } from './types'

const STATE_FILE = 'state.json'

// Writing on every keystroke would hammer the disk, so changes are batched.
const WRITE_DEBOUNCE_MS = 2000

export interface PokechiState {
  pokemon?: UserPokemon
  pokedex: PokemonType[]
  shinyPokedex: PokemonType[]
  roster: Roster
  // Lifetime XP ever granted, regardless of resets on evolution or of which
  // line earned it. A vanity counter, not gameplay state.
  totalXP: number
}

function emptyState(): PokechiState {
  return { pokemon: undefined, pokedex: [], shinyPokedex: [], roster: {}, totalXP: 0 }
}

// Progress within a level only ever grows, so the further along entry wins.
function isAhead(
  left: { level: number; xp: number },
  right: { level: number; xp: number }
): boolean {
  if (left.level !== right.level) {
    return left.level > right.level
  }
  return left.xp > right.xp
}

// Two windows share one pet. Rather than letting whoever saves last overwrite
// the other, the two states are reconciled field by field.
export function mergeStates(local: PokechiState, remote: PokechiState): PokechiState {
  const pokedex = local.pokedex.slice()
  remote.pokedex.forEach((type) => {
    if (pokedex.indexOf(type) < 0) {
      pokedex.push(type)
    }
  })

  const shinyPokedex = (local.shinyPokedex || []).slice()
  ;(remote.shinyPokedex || []).forEach((type) => {
    if (shinyPokedex.indexOf(type) < 0) {
      shinyPokedex.push(type)
    }
  })

  const roster: Roster = { ...local.roster }
  Object.keys(remote.roster).forEach((base) => {
    const remoteEntry: RosterEntry = remote.roster[base]
    const localEntry = roster[base]
    if (!localEntry || isAhead(remoteEntry, localEntry)) {
      roster[base] = remoteEntry
    }
  })

  let pokemon = local.pokemon
  if (!pokemon) {
    pokemon = remote.pokemon
  } else if (remote.pokemon) {
    // Same species means both windows raised the same pet and the higher XP
    // is the real one. A different species means the other window switched,
    // and that choice is the more recent intent.
    pokemon =
      remote.pokemon.type === pokemon.type
        ? isAhead(remote.pokemon, pokemon)
          ? remote.pokemon
          : pokemon
        : remote.pokemon
  }

  // Both windows independently add to their own copy from the same shared
  // starting point, so summing would double count; the higher figure is the
  // one that has seen the most of the combined history.
  const totalXP = Math.max(local.totalXP || 0, remote.totalXP || 0)

  return { pokemon, pokedex, shinyPokedex, roster, totalXP }
}

export class StateStore {
  private state: PokechiState = emptyState()
  private filePath: string
  private writeTimer: NodeJS.Timeout | undefined
  private lastWritten = ''
  private watcher: vscode.FileSystemWatcher | undefined
  private onExternalChange: (() => void) | undefined

  constructor(private readonly context: vscode.ExtensionContext) {
    this.filePath = path.join(context.globalStorageUri.fsPath, STATE_FILE)
  }

  initialize(onExternalChange: () => void): void {
    this.onExternalChange = onExternalChange
    this.state = this.readFile() ?? this.migrateFromGlobalState()

    this.watcher = vscode.workspace.createFileSystemWatcher(
      new vscode.RelativePattern(this.context.globalStorageUri, STATE_FILE)
    )

    const handleChange = () => this.adoptExternalChange()
    this.watcher.onDidChange(handleChange)
    this.watcher.onDidCreate(handleChange)

    this.context.subscriptions.push(this.watcher)
    this.context.subscriptions.push({ dispose: () => this.dispose() })
  }

  getState(): PokechiState {
    return this.state
  }

  // Marks the in-memory state as changed. The actual write is batched.
  save(): void {
    if (this.writeTimer) {
      return
    }
    this.writeTimer = setTimeout(() => {
      this.writeTimer = undefined
      this.flush()
    }, WRITE_DEBOUNCE_MS)
  }

  flush(): void {
    if (this.writeTimer) {
      clearTimeout(this.writeTimer)
      this.writeTimer = undefined
    }

    const serialized = JSON.stringify(this.state)
    if (serialized === this.lastWritten) {
      return
    }

    try {
      fs.mkdirSync(path.dirname(this.filePath), { recursive: true })
      fs.writeFileSync(this.filePath, serialized, 'utf8')
      this.lastWritten = serialized
    } catch (error) {
      console.error('Pokechi: could not save state', error)
    }
  }

  dispose(): void {
    this.flush()
    this.watcher?.dispose()
    this.watcher = undefined
  }

  private readFile(): PokechiState | undefined {
    try {
      if (!fs.existsSync(this.filePath)) {
        return undefined
      }
      const raw = fs.readFileSync(this.filePath, 'utf8')
      this.lastWritten = raw
      const parsed = JSON.parse(raw) as PokechiState
      return {
        pokemon: parsed.pokemon,
        pokedex: Array.isArray(parsed.pokedex) ? parsed.pokedex : [],
        shinyPokedex: Array.isArray(parsed.shinyPokedex) ? parsed.shinyPokedex : [],
        roster: parsed.roster && typeof parsed.roster === 'object' ? parsed.roster : {},
        totalXP: typeof parsed.totalXP === 'number' ? parsed.totalXP : 0,
      }
    } catch (error) {
      console.error('Pokechi: could not read state, starting fresh', error)
      return undefined
    }
  }

  // Earlier versions kept everything in globalState, which is why windows could
  // not see each other. Anything stored there is carried over once.
  private migrateFromGlobalState(): PokechiState {
    const pokemon = this.context.globalState.get<UserPokemon>('pokemon')
    const pokedex = this.context.globalState.get<PokemonType[]>('pokedex')
    const roster = this.context.globalState.get<Roster>('roster')

    const migrated: PokechiState = {
      pokemon,
      pokedex: Array.isArray(pokedex) ? pokedex : [],
      shinyPokedex: [],
      roster: roster && typeof roster === 'object' ? roster : {},
      totalXP: 0,
    }

    if (migrated.pokemon || migrated.pokedex.length > 0) {
      this.state = migrated
      this.flush()
    }

    return migrated
  }

  private adoptExternalChange(): void {
    let raw: string
    try {
      raw = fs.readFileSync(this.filePath, 'utf8')
    } catch {
      return
    }

    // Our own write comes back through the watcher too.
    if (raw === this.lastWritten) {
      return
    }
    this.lastWritten = raw

    let remote: PokechiState
    try {
      remote = JSON.parse(raw) as PokechiState
    } catch {
      return
    }

    this.state = mergeStates(this.state, {
      pokemon: remote.pokemon,
      pokedex: Array.isArray(remote.pokedex) ? remote.pokedex : [],
      shinyPokedex: Array.isArray(remote.shinyPokedex) ? remote.shinyPokedex : [],
      roster: remote.roster && typeof remote.roster === 'object' ? remote.roster : {},
      totalXP: typeof remote.totalXP === 'number' ? remote.totalXP : 0,
    })

    // The merge can hold things the other window never had, a species only we
    // had discovered for instance, so hand the union back.
    if (JSON.stringify(this.state) !== raw) {
      this.save()
    }

    this.onExternalChange?.()
  }
}
