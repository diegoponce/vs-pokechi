import * as vscode from 'vscode'
import { PokemonState } from './pokemon-state'
import { UserPokemon } from './types'
import { PokemonColor } from '../common/types'
import { POKEMON_DATA } from '../common/pokemon-data'
import { ITEMS } from '../common/items'
import { getStrings } from '../common/i18n'
import { GitExtension, Repository } from './git-api-types'

const XP_TEXT = 1
const XP_SAVE = 2
const XP_COMMIT = 8

// Read fresh on every call rather than cached, same reasoning as everywhere
// else this setting is read - cheap, and lets a mid-session language change
// take effect on the very next notification instead of needing a reload.
function t() {
  return getStrings(
    vscode.workspace.getConfiguration('pokechi').get<string>('language', 'en')
  )
}

const THROTTLE_MS = 100
let lastTextEventTime = 0

// Holding Ctrl+S down auto-repeats the save command many times a second,
// each one otherwise granting XP_SAVE on its own - effectively unlimited XP
// for as long as the key stays down.
const SAVE_THROTTLE_MS = 2000
let lastSaveEventTime = 0

// A commit made just now (via the Source Control view or a terminal) has a
// committer date of "now". A HEAD move from pulling, fetching or checking
// out an existing branch instead lands on a commit dated whenever it was
// originally made, so checking freshness is what tells the two apart
// without trying to enumerate every git command that can move HEAD.
const COMMIT_FRESHNESS_MS = 15000

// Output channels, logs, diff views and settings editors all raise document
// change events, and none of them are the user writing code.
function isRealFile(document: vscode.TextDocument): boolean {
  return document.uri.scheme === 'file' || document.uri.scheme === 'vscode-remote'
}

function getPokemonCry(pokemon: UserPokemon): string {
  const pokemonData = POKEMON_DATA[pokemon.type]
  return pokemonData && pokemonData.cry ? pokemonData.cry : ''
}

// Callback to refresh views when a Pokémon evolves
let updateViewsCallback: ((pokemon: UserPokemon, isXPUpdate: boolean) => void) | undefined
let updatePanelTitleCallback: ((title: string) => void) | undefined

export function setUpdateCallbacks(
  updateViews: (pokemon: UserPokemon, isXPUpdate: boolean) => void,
  updateTitle: (title: string) => void
): void {
  updateViewsCallback = updateViews
  updatePanelTitleCallback = updateTitle
}

export class XPTracker {
  private context: vscode.ExtensionContext
  private disposables: vscode.Disposable[] = []
  // Last HEAD commit seen per repository (keyed by rootUri), so a state
  // change can tell "HEAD moved" from "something else about the repo
  // changed" (staging, branch list refresh, ...).
  private lastKnownHead = new Map<string, string | undefined>()
  // Commit hashes already credited, so a repository's onDidChange firing
  // more than once around the same commit does not grant XP twice.
  private creditedCommits = new Set<string>()

  constructor(context: vscode.ExtensionContext) {
    this.context = context
  }

  start(): void {
    void this.startGitTracking()
    this.disposables.push(
      vscode.workspace.onDidChangeTextDocument((event) => {
        if (event.contentChanges.length === 0) {
          return
        }
        if (event.reason !== undefined) {
          return
        }
        if (!isRealFile(event.document)) {
          return
        }

        const now = Date.now()
        if (now - lastTextEventTime < THROTTLE_MS) {
          return
        }
        lastTextEventTime = now

        this.addXP(XP_TEXT)
      })
    )

    this.disposables.push(
      vscode.workspace.onDidSaveTextDocument((document) => {
        if (!isRealFile(document)) {
          return
        }

        const now = Date.now()
        if (now - lastSaveEventTime < SAVE_THROTTLE_MS) {
          return
        }
        lastSaveEventTime = now

        this.addXP(XP_SAVE)
      })
    )
  }

  // The built-in Git extension is the supported way to reach every open
  // repository (multi-root workspaces, nested repos, worktrees) without
  // reimplementing .git discovery. It is not always active yet at this
  // point, hence the activate() below.
  private async startGitTracking(): Promise<void> {
    const gitExtension = vscode.extensions.getExtension<GitExtension>('vscode.git')
    if (!gitExtension) {
      return
    }

    let api
    try {
      const exports = gitExtension.isActive ? gitExtension.exports : await gitExtension.activate()
      api = exports.getAPI(1)
    } catch {
      // Git support disabled or unavailable - commits simply earn no XP.
      return
    }

    const watchRepository = (repository: Repository) => {
      this.lastKnownHead.set(repository.rootUri.toString(), repository.state.HEAD?.commit)
      this.disposables.push(
        repository.state.onDidChange(() => {
          void this.handleRepositoryStateChange(repository)
        })
      )
    }

    api.repositories.forEach(watchRepository)
    this.disposables.push(api.onDidOpenRepository(watchRepository))
  }

  private async handleRepositoryStateChange(repository: Repository): Promise<void> {
    const key = repository.rootUri.toString()
    const previousHead = this.lastKnownHead.get(key)
    const currentHead = repository.state.HEAD?.commit
    if (!currentHead || currentHead === previousHead) {
      return
    }
    this.lastKnownHead.set(key, currentHead)

    if (this.creditedCommits.has(currentHead)) {
      return
    }

    let commit
    try {
      commit = await repository.getCommit(currentHead)
    } catch {
      return
    }
    if (!commit.commitDate) {
      return
    }
    if (Math.abs(Date.now() - commit.commitDate.getTime()) > COMMIT_FRESHNESS_MS) {
      return
    }

    this.creditedCommits.add(currentHead)
    this.addXP(XP_COMMIT)
  }

  private addXP(amount: number): void {
    const pokemon = PokemonState.getPokemon(this.context)
    // A pokemon brought out from the Pokedex to view an earlier stage of its
    // line is a read-only snapshot: typing/saving must not grow it.
    if (!pokemon || !pokemon.canGainXP) {
      return
    }

    const previousLevel = pokemon.level
    // Read before evolvePokemon can touch the pokemon object below - a
    // Master/Premier Ball promises its species at use time, but the
    // announcement itself waits for the actual hatch, same XP wait as any
    // other catch.
    const pendingBallReveal = pokemon.pendingBallReveal
    PokemonState.addXP(pokemon, amount)
    PokemonState.addTotalXP(this.context, amount)
    PokemonState.savePokemon(this.context)

    if (PokemonState.canEvolve(pokemon)) {
      const evolved = PokemonState.evolvePokemon(this.context, pokemon)
      if (evolved) {
        // Consumed on the very hatch it was set for, same as
        // pendingAlreadyOwned.
        pokemon.pendingBallReveal = undefined
        // Evolving is rare and worth persisting straight away rather than
        // waiting for the batched write.
        PokemonState.flush(this.context)
        const pokemonName = pokemon.name
        const cry = getPokemonCry(pokemon)
        const isShiny = pokemon.color === PokemonColor.shiny
        if (previousLevel === 0) {
          // Every item with hatchDropChance gets its own independent roll,
          // and every item with hatchMilestone is checked against the new
          // lifetime hatch total, so adding either to the registry
          // (src/common/items.ts) is enough to have it start earning here -
          // nothing in this file has to know it exists.
          const hatchCount = PokemonState.incrementHatchCount(this.context)
          const strings = t()
          const droppedItemNames: string[] = []
          for (const item of Object.values(ITEMS)) {
            const wonByChance = item.hatchDropChance && Math.random() < item.hatchDropChance
            const wonByMilestone = item.hatchMilestone && hatchCount % item.hatchMilestone === 0
            if (wonByChance || wonByMilestone) {
              PokemonState.addItem(this.context, item.id, 1)
              droppedItemNames.push(strings.itemNames[item.id] ?? item.name)
            }
          }
          const dropNote = strings.itemDroppedNote(droppedItemNames)
          if (pendingBallReveal) {
            const itemName = strings.itemNames[pendingBallReveal]
            const revealMessage =
              pendingBallReveal === 'master-ball'
                ? isShiny
                  ? strings.masterBallRevealedMessageShiny(itemName, pokemonName)
                  : strings.masterBallRevealedMessage(itemName, pokemonName)
                : strings.premierBallRevealedMessage(itemName, pokemonName)
            vscode.window.showInformationMessage(`${revealMessage} ${cry}${dropNote}`)
          } else {
            vscode.window.showInformationMessage(
              isShiny
                ? strings.hatchMessageShiny(pokemonName, cry, dropNote)
                : strings.hatchMessage(pokemonName, cry, dropNote)
            )
          }
        } else {
          vscode.window.showInformationMessage(
            isShiny
              ? t().evolveMessageShiny(pokemonName, cry)
              : t().evolveMessage(pokemonName, cry)
          )
        }

        // A hatch/evolve is the only way the pokedex (and so a badge
        // condition) can change during normal play, so this is the one
        // place that needs to check for a newly-earned badge.
        const newlyEarnedBadges = PokemonState.refreshBadges(this.context)
        newlyEarnedBadges.forEach((badge) => {
          vscode.window.showInformationMessage(t().badgeEarned(badge.name))
        })

        // Update views and panel title
        if (updatePanelTitleCallback) {
          updatePanelTitleCallback(pokemon.level === 0 ? t().yourPokemonTitle : pokemon.name)
        }
        if (updateViewsCallback) {
          updateViewsCallback(pokemon, false)
        }
      }
    } else {
      // Update views for normal XP gain
      if (updateViewsCallback) {
        updateViewsCallback(pokemon, true)
      }
    }
  }

  dispose(): void {
    this.disposables.forEach((d) => d.dispose())
    this.disposables = []
  }
}
