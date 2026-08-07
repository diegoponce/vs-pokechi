import * as vscode from 'vscode'
import { PokemonState } from './pokemon-state'
import { UserPokemon } from './types'
import { PokemonColor } from '../common/types'
import { POKEMON_DATA } from '../common/pokemon-data'
import { ITEMS } from '../common/items'

const XP_TEXT = 1
const XP_SAVE = 2

const THROTTLE_MS = 100
let lastTextEventTime = 0

// Holding Ctrl+S down auto-repeats the save command many times a second,
// each one otherwise granting XP_SAVE on its own - effectively unlimited XP
// for as long as the key stays down.
const SAVE_THROTTLE_MS = 2000
let lastSaveEventTime = 0

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

  constructor(context: vscode.ExtensionContext) {
    this.context = context
  }

  start(): void {
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

  private addXP(amount: number): void {
    const pokemon = PokemonState.getPokemon(this.context)
    // A pokemon brought out from the Pokedex to view an earlier stage of its
    // line is a read-only snapshot: typing/saving must not grow it.
    if (!pokemon || !pokemon.canGainXP) {
      return
    }

    const previousLevel = pokemon.level
    PokemonState.addXP(pokemon, amount)
    PokemonState.addTotalXP(this.context, amount)
    PokemonState.savePokemon(this.context)

    if (PokemonState.canEvolve(pokemon)) {
      const evolved = PokemonState.evolvePokemon(this.context, pokemon)
      if (evolved) {
        // Evolving is rare and worth persisting straight away rather than
        // waiting for the batched write.
        PokemonState.flush(this.context)
        const pokemonName = pokemon.name
        const cry = getPokemonCry(pokemon)
        const isShiny = pokemon.color === PokemonColor.shiny
        if (previousLevel === 0) {
          // Every item with hatchDropChance gets its own independent roll,
          // so adding one to the registry (src/common/items.ts) is enough
          // to have it start dropping here - nothing in this file has to
          // know it exists.
          const droppedItemNames: string[] = []
          for (const item of Object.values(ITEMS)) {
            if (item.hatchDropChance && Math.random() < item.hatchDropChance) {
              PokemonState.addItem(this.context, item.id, 1)
              droppedItemNames.push(item.name)
            }
          }
          const dropNote = droppedItemNames.length
            ? ' 🎁 ' + droppedItemNames.map((name) => `${name} dropped!`).join(' ')
            : ''
          vscode.window.showInformationMessage(
            isShiny
              ? `✨ A shiny ${pokemonName} hatched from the Pokéball! ${cry}${dropNote}`
              : `${pokemonName} hatched from the Pokéball! ${cry}${dropNote}`
          )
        } else {
          vscode.window.showInformationMessage(
            isShiny
              ? `✨ Your shiny ${pokemonName} evolved! ${cry}`
              : `${pokemonName} evolved! ${cry}`
          )
        }

        // A hatch/evolve is the only way the pokedex (and so a badge
        // condition) can change during normal play, so this is the one
        // place that needs to check for a newly-earned badge.
        const newlyEarnedBadges = PokemonState.refreshBadges(this.context)
        newlyEarnedBadges.forEach((badge) => {
          vscode.window.showInformationMessage(`🏅 ${badge.name} earned!`)
        })

        // Update views and panel title
        if (updatePanelTitleCallback) {
          updatePanelTitleCallback(pokemon.level === 0 ? 'Your Pokemon' : pokemon.name)
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
