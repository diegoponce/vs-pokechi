import * as vscode from 'vscode'
import { UserPokemon } from './types'
import { PokemonType } from '../common/types'
import {
  getRandomBasePokemon,
  getEvolutionLine,
  getPokemonByLevel,
} from '../common/pokemon-evolutions'
import { POKEMON_DATA } from '../common/pokemon-data'

const DEFAULT_XP_FOR_POKEBALL = 500
const DEFAULT_XP_FOR_FIRST_EVOLUTION = 1000
const DEFAULT_XP_FOR_SECOND_EVOLUTION = 2000

function getRequiredXPForLevel(level: number): number {
  if (level === 0) {
    return DEFAULT_XP_FOR_POKEBALL
  }
  if (level === 1) {
    return DEFAULT_XP_FOR_FIRST_EVOLUTION
  }
  if (level === 2) {
    return DEFAULT_XP_FOR_SECOND_EVOLUTION
  }
  // Para niveles superiores, incrementar progresivamente
  return DEFAULT_XP_FOR_SECOND_EVOLUTION + (level - 2) * 50
}

function loadFromStorage(context: vscode.ExtensionContext): UserPokemon | undefined {
  const storedPokemon = context.globalState.get<UserPokemon>('pokemon')
  return storedPokemon
}

function loadPokedexFromStorage(context: vscode.ExtensionContext): PokemonType[] {
  const storedPokedex = context.globalState.get<PokemonType[]>('pokedex')
  return Array.isArray(storedPokedex) ? storedPokedex : []
}

let _pokemon: UserPokemon | undefined
let _pokedex: PokemonType[] | undefined

export class PokemonState {
  static getPokemon(context: vscode.ExtensionContext): UserPokemon | undefined {
    if (!_pokemon) {
      _pokemon = loadFromStorage(context)
    }
    return _pokemon
  }

  static savePokemon(context: vscode.ExtensionContext): Thenable<void> {
    if (_pokemon) {
      return context.globalState.update('pokemon', _pokemon)
    }
    return Promise.resolve()
  }

  static getPokedex(context: vscode.ExtensionContext): PokemonType[] {
    if (!_pokedex) {
      _pokedex = loadPokedexFromStorage(context)
    }
    return _pokedex
  }

  static savePokedex(context: vscode.ExtensionContext): Thenable<void> {
    if (!_pokedex) {
      _pokedex = []
    }
    return context.globalState.update('pokedex', _pokedex)
  }

  static discoverPokemon(context: vscode.ExtensionContext, pokemonType: PokemonType): boolean {
    const pokedex = PokemonState.getPokedex(context)
    if (pokedex.includes(pokemonType)) {
      return false
    }

    pokedex.push(pokemonType)
    _pokedex = pokedex
    PokemonState.savePokedex(context)
    return true
  }

  static isPokemonDiscovered(context: vscode.ExtensionContext, pokemonType: PokemonType): boolean {
    return PokemonState.getPokedex(context).includes(pokemonType)
  }

  static createNewPokemon(context: vscode.ExtensionContext): UserPokemon {
    const scaleFactor = vscode.workspace
      .getConfiguration()
      .get('pokechi.scaleFactor', 1.0)

    const basePokemon = getRandomBasePokemon()
    const evolutionLine = getEvolutionLine(basePokemon)

    if (!evolutionLine) {
      throw new Error(`No evolution line found for ${basePokemon}`)
    }

    const evolutionLineArray = [basePokemon, ...evolutionLine.evolutions]

    const pokemonData = POKEMON_DATA[basePokemon]
    const pokemonName = pokemonData ? pokemonData.name : basePokemon

    const pokemon: UserPokemon = {
      type: basePokemon,
      name: pokemonName,
      level: 0,
      xp: 0,
      evolutionLine: evolutionLineArray,
      state: 'pokeball',
      scale: scaleFactor,
      isTransitionIn: true,
      leftPosition: 0,
      direction: 'right',
    }

    _pokemon = pokemon
    PokemonState.savePokemon(context)
    return pokemon
  }

  static getRequiredXP(pokemon: UserPokemon): number {
    return getRequiredXPForLevel(pokemon.level)
  }

  static canEvolve(pokemon: UserPokemon): boolean {
    const requiredXP = PokemonState.getRequiredXP(pokemon)
    if (pokemon.xp < requiredXP) {
      return false
    }

    const evolutionLine = getEvolutionLine(pokemon.evolutionLine[0] as PokemonType)
    if (!evolutionLine) {
      return false
    }

    const maxLevel = evolutionLine.evolutions.length + 1
    return pokemon.level < maxLevel
  }

  static evolvePokemon(context: vscode.ExtensionContext, pokemon: UserPokemon): boolean {
    if (!PokemonState.canEvolve(pokemon)) {
      return false
    }

    const evolutionLine = getEvolutionLine(pokemon.evolutionLine[0] as PokemonType)
    if (!evolutionLine) {
      return false
    }

    const nextLevel = pokemon.level + 1
    const nextPokemon = getPokemonByLevel(evolutionLine, nextLevel)

    // Actualizar nombre del pokemon usando POKEMON_DATA
    const nextPokemonData = POKEMON_DATA[nextPokemon]
    const nextPokemonName = nextPokemonData ? nextPokemonData.name : nextPokemon

    pokemon.type = nextPokemon
    pokemon.name = nextPokemonName
    pokemon.level = nextLevel
    pokemon.xp = 0
    pokemon.state = nextLevel === 1 ? 'idle' : 'walking'
    pokemon.isTransitionIn = true

    PokemonState.discoverPokemon(context, nextPokemon)

    return true
  }

  static addXP(pokemon: UserPokemon, amount: number): void {
    pokemon.xp += amount
    pokemon.isTransitionIn = false
  }
}

