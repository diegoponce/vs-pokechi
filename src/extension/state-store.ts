import * as fs from 'node:fs'
import * as path from 'node:path'
import * as vscode from 'vscode'
import { PokemonType } from '../common/types'
import { Roster, RosterEntry, UserPokemon } from './types'

const STATE_FILE = 'state.json'

// Writing on every keystroke would hammer the disk, so changes are batched.
const WRITE_DEBOUNCE_MS = 2000

// Item id -> how many the player has. A new item (src/common/items.ts) only
// ever needs an entry in that registry plus whatever earns or spends it -
// this map does not change shape to hold one more kind.
export type ItemInventory = { [itemId: string]: number }

// Item id -> how many times it has ever been used (successfully), lifetime.
// Separate from ItemInventory: that one goes up and down as items are
// earned and spent, this one only ever goes up - it exists purely so a
// badge condition can ask "has the player used at least N of these ever".
export type ItemUsageCount = { [itemId: string]: number }

export interface PokechiState {
  pokemon?: UserPokemon
  pokedex: PokemonType[]
  shinyPokedex: PokemonType[]
  roster: Roster
  // Lifetime XP ever granted, regardless of resets on evolution or of which
  // line earned it. A vanity counter, not gameplay state.
  totalXP: number
  items: ItemInventory
  itemUsageCount: ItemUsageCount
  // Ids of badges (src/common/badges.ts) already earned. Once in this list,
  // always in it - a badge is never un-earned even if, say, the pokedex
  // were ever reset, same spirit as pokedex/shinyPokedex themselves.
  badges: string[]
}

function emptyState(): PokechiState {
  return {
    pokemon: undefined,
    pokedex: [],
    shinyPokedex: [],
    roster: {},
    totalXP: 0,
    items: {},
    itemUsageCount: {},
    badges: [],
  }
}

// Keeps every key the file already had, including any a newer version of the
// extension wrote and this one knows nothing about. Dropping them would make
// two versions sharing a machine overwrite each other's data on every save.
export function normalizeState(parsed: Partial<PokechiState>): PokechiState {
  return {
    ...parsed,
    pokemon: parsed.pokemon,
    pokedex: Array.isArray(parsed.pokedex) ? parsed.pokedex : [],
    shinyPokedex: Array.isArray(parsed.shinyPokedex) ? parsed.shinyPokedex : [],
    roster:
      parsed.roster && typeof parsed.roster === 'object' ? parsed.roster : {},
    totalXP: typeof parsed.totalXP === 'number' ? parsed.totalXP : 0,
    items: normalizeItems(parsed),
    itemUsageCount:
      parsed.itemUsageCount && typeof parsed.itemUsageCount === 'object'
        ? parsed.itemUsageCount
        : {},
    badges: Array.isArray(parsed.badges) ? parsed.badges : [],
  }
}

// Pre-1.5.0 saves kept a Rare Candy count in its own top-level rareCandy
// field, from before it was one item among others. Folded into the items
// map the first time such a save is read; the old field itself is left
// alone rather than deleted, same as any other field this version does not
// actively use but should not destroy.
function normalizeItems(parsed: Partial<PokechiState> & { rareCandy?: number }): ItemInventory {
  const items: ItemInventory =
    parsed.items && typeof parsed.items === 'object' ? { ...parsed.items } : {}

  if (typeof parsed.rareCandy === 'number' && items['rare-candy'] === undefined) {
    items['rare-candy'] = parsed.rareCandy
  }

  return items
}

// The parts worth persisting an extra write for. Deliberately excludes the
// active pokemon, whose presentational fields churn constantly.
function durableSignature(state: PokechiState): string {
  return JSON.stringify({
    pokedex: state.pokedex.slice().sort(),
    shinyPokedex: state.shinyPokedex.slice().sort(),
    roster: state.roster,
    totalXP: state.totalXP,
    items: state.items,
    itemUsageCount: state.itemUsageCount,
    badges: state.badges.slice().sort(),
  })
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

  // Unlike totalXP an item count can go down (spent), so per-item Math.max
  // is only a good guess, not a guarantee - a window that just spent one
  // right before this merge can see it come back if the other window has
  // not caught up yet. Same tradeoff the rest of this function already
  // makes for a two-window edge case rather than tracking every earn/spend
  // as its own event.
  const items: ItemInventory = { ...local.items }
  Object.keys(remote.items || {}).forEach((itemId) => {
    items[itemId] = Math.max(local.items[itemId] || 0, remote.items[itemId] || 0)
  })

  // Unlike the spendable count above, a usage count only ever grows, so
  // Math.max here is exact, not a guess - same reasoning as totalXP.
  const itemUsageCount: ItemUsageCount = { ...local.itemUsageCount }
  Object.keys(remote.itemUsageCount || {}).forEach((itemId) => {
    itemUsageCount[itemId] = Math.max(
      local.itemUsageCount[itemId] || 0,
      remote.itemUsageCount[itemId] || 0
    )
  })

  const badges = (local.badges || []).slice()
  ;(remote.badges || []).forEach((id) => {
    if (badges.indexOf(id) < 0) {
      badges.push(id)
    }
  })

  // Spreading both sides first keeps any key neither this version nor the
  // merge rules know about.
  return {
    ...local,
    ...remote,
    pokemon,
    pokedex,
    shinyPokedex,
    roster,
    totalXP,
    items,
    itemUsageCount,
    badges,
  }
}

export class StateStore {
  private state: PokechiState = emptyState()
  private filePath: string
  private writeTimer: NodeJS.Timeout | undefined
  private lastWritten = ''
  private answeredSignature: string | undefined
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
    // A real local change, so it is worth answering the other window again
    // even if it keeps sending the same thing.
    this.answeredSignature = undefined
    this.scheduleWrite()
  }

  private scheduleWrite(): void {
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
      return normalizeState(JSON.parse(raw))
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
      items: {},
      itemUsageCount: {},
      badges: [],
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

    const incoming = normalizeState(remote)
    this.state = mergeStates(this.state, incoming)

    // Write back only when the merge recovered something durable the other
    // window did not have, and only once per distinct thing it sends. An older
    // build that drops fields it does not know about would otherwise strip
    // them on every save, this one would restore them every time, and the two
    // would write to each other forever. Answering once leaves the data intact
    // here and lets it settle.
    const incomingSignature = durableSignature(incoming)
    if (
      durableSignature(this.state) !== incomingSignature &&
      this.answeredSignature !== incomingSignature
    ) {
      this.answeredSignature = incomingSignature
      this.scheduleWrite()
    }

    this.onExternalChange?.()
  }
}
