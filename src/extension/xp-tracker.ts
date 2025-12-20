import * as vscode from 'vscode'
import { PokemonState } from './pokemon-state'
import { UserPokemon } from './types'

const XP_TEXT = 1
const XP_SAVE = 2

const THROTTLE_MS = 100
let lastTextEventTime = 0

// Callback para actualizar vistas cuando evoluciona
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

        const now = Date.now()
        if (now - lastTextEventTime < THROTTLE_MS) {
          return
        }
        lastTextEventTime = now

        this.addXP(XP_TEXT)
      })
    )

    this.disposables.push(
      vscode.workspace.onDidSaveTextDocument(() => {
        this.addXP(XP_SAVE)
      })
    )
  }

  private addXP(amount: number): void {
    const pokemon = PokemonState.getPokemon(this.context)
    if (!pokemon) {
      return
    }

    const previousLevel = pokemon.level
    PokemonState.addXP(pokemon, amount)
    PokemonState.savePokemon(this.context)

    if (PokemonState.canEvolve(pokemon)) {
      const evolved = PokemonState.evolvePokemon(pokemon)
      if (evolved) {
        PokemonState.savePokemon(this.context)
        const pokemonName = pokemon.name
        if (previousLevel === 0) {
          vscode.window.showInformationMessage(
            `${pokemonName} hatched from the Pokéball!`
          )
        } else {
          vscode.window.showInformationMessage(
            `${pokemonName} evolved!`
          )
        }
        
        // Actualizar vistas y título del panel
        if (updatePanelTitleCallback) {
          updatePanelTitleCallback(pokemon.level === 0 ? 'Your Pokemon' : pokemon.name)
        }
        if (updateViewsCallback) {
          updateViewsCallback(pokemon, false)
        }
      }
    } else {
      // Actualizar vistas para XP normal
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
