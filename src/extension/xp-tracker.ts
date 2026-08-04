import * as vscode from 'vscode'
import { PokemonState } from './pokemon-state'
import { UserPokemon } from './types'
import { PokemonColor } from '../common/types'
import { POKEMON_DATA } from '../common/pokemon-data'

const XP_TEXT = 1
const XP_SAVE = 2

const THROTTLE_MS = 100
let lastTextEventTime = 0

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
          vscode.window.showInformationMessage(
            isShiny
              ? `✨ A shiny ${pokemonName} hatched from the Pokéball! ${cry}`
              : `${pokemonName} hatched from the Pokéball! ${cry}`
          )
        } else {
          vscode.window.showInformationMessage(
            isShiny
              ? `✨ Your shiny ${pokemonName} evolved! ${cry}`
              : `${pokemonName} evolved! ${cry}`
          )
        }
        
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
