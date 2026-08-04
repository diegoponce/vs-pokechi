import * as vscode from 'vscode'
import { Roster, RosterEntry, UserPokemon } from './types'
import { PokemonColor, PokemonElementType, PokemonType } from '../common/types'
import { StateStore } from './state-store'
import {
  EvolutionLine,
  getRandomBasePokemon,
  getRandomPokemonColor,
  getEvolutionLine,
  getEvolutionLineContaining,
  getPokemonByLevel,
  getPokemonLevel,
  hasFurtherEvolution,
} from '../common/pokemon-evolutions'
import { POKEMON_DATA } from '../common/pokemon-data'

const DEFAULT_XP_FOR_POKEBALL = 500
const DEFAULT_XP_FOR_FIRST_EVOLUTION = 1000
const DEFAULT_XP_FOR_SECOND_EVOLUTION = 2000

export function getRequiredXPForLevel(level: number): number {
  if (level === 0) {
    return DEFAULT_XP_FOR_POKEBALL
  }
  if (level === 1) {
    return DEFAULT_XP_FOR_FIRST_EVOLUTION
  }
  if (level === 2) {
    return DEFAULT_XP_FOR_SECOND_EVOLUTION
  }
  // For higher levels, increase progressively
  return DEFAULT_XP_FOR_SECOND_EVOLUTION + (level - 2) * 50
}

function getPokemonId(pokemonType: PokemonType): number {
  const pokemonData = POKEMON_DATA[pokemonType]
  return pokemonData ? pokemonData.id : 0
}

function getPokemonName(pokemonType: PokemonType): string {
  const pokemonData = POKEMON_DATA[pokemonType]
  return pokemonData ? pokemonData.name : pokemonType
}

function getPokemonTypes(pokemonType: PokemonType): PokemonElementType[] {
  const pokemonData = POKEMON_DATA[pokemonType]
  return pokemonData ? pokemonData.types : []
}

function isRosterEntryAhead(left: RosterEntry, right: RosterEntry): boolean {
  if (left.level !== right.level) {
    return left.level > right.level
  }
  return left.xp > right.xp
}

// The roster is keyed by each line's base species, but evolution data can be
// restructured over time (e.g. a pre-evolution like Pichu gets added ahead of
// an existing base, or a species that used to be its own single-stage line -
// like Houndoom - becomes a later stage of a different one). A key that no
// longer names a current base holds progress that has to move somewhere, so
// this re-derives the right home from the entry's actual species (which never
// changes) and keeps whichever of the two sides - old key or new key, if both
// exist - is further along. Runs on every read; once a key is migrated it is
// gone, so later calls have nothing left to do for it.
function reconcileRoster(roster: Roster): boolean {
  let changed = false

  for (const key of Object.keys(roster)) {
    if (getEvolutionLine(key as PokemonType)) {
      continue
    }

    const entry = roster[key]
    const correctLine = getEvolutionLineContaining(entry.type)
    if (!correctLine || correctLine.base === key) {
      continue
    }

    delete roster[key]

    const migratedEntry: RosterEntry = {
      type: entry.type,
      level: getPokemonLevel(entry.type, correctLine),
      xp: entry.xp,
      color: entry.color,
    }

    const existing = roster[correctLine.base]
    if (!existing || isRosterEntryAhead(migratedEntry, existing)) {
      roster[correctLine.base] = migratedEntry
    }
    changed = true
  }

  return changed
}

let _store: StateStore | undefined

function store(context: vscode.ExtensionContext): StateStore {
  if (!_store) {
    _store = new StateStore(context)
  }
  return _store
}

export class PokemonState {
  // Loads the shared state and starts watching it, so a second window picks up
  // the progress made in the first one.
  static initialize(
    context: vscode.ExtensionContext,
    onExternalChange: () => void
  ): void {
    store(context).initialize(onExternalChange)
  }

  static flush(context: vscode.ExtensionContext): void {
    store(context).flush()
  }

  static getPokemon(context: vscode.ExtensionContext): UserPokemon | undefined {
    const pokemon = store(context).getState().pokemon
    if (pokemon && pokemon.id === undefined) {
      pokemon.id = getPokemonId(pokemon.type)
    }
    // Saves from before shiny support have neither field, so default them to
    // what those pokemon always were: a default-colored pokemon that can grow.
    if (pokemon && pokemon.color === undefined) {
      pokemon.color = PokemonColor.default
    }
    if (pokemon && pokemon.canGainXP === undefined) {
      pokemon.canGainXP = true
    }
    if (pokemon && pokemon.types === undefined) {
      pokemon.types = getPokemonTypes(pokemon.type)
    }
    // The evolution data can be restructured over time (a pre-evolution gets
    // added ahead of an existing base, or a species that used to be its own
    // single-stage line becomes a later stage of a different one). Re-deriving
    // from pokemon.type - the one thing that never changes - keeps an
    // already-saved pokemon's line and level in step with the current data,
    // instead of trusting the stale array/level captured when it was built.
    if (pokemon) {
      const evolutionLine = getEvolutionLineContaining(pokemon.type)
      if (evolutionLine) {
        pokemon.evolutionLine = [evolutionLine.base, ...evolutionLine.evolutions]
        pokemon.level = getPokemonLevel(pokemon.type, evolutionLine)
      }
    }
    return pokemon
  }

  static savePokemon(context: vscode.ExtensionContext): void {
    store(context).save()
  }

  static getPokedex(context: vscode.ExtensionContext): PokemonType[] {
    return store(context).getState().pokedex
  }

  static savePokedex(context: vscode.ExtensionContext): void {
    store(context).save()
  }

  static getShinyPokedex(context: vscode.ExtensionContext): PokemonType[] {
    return store(context).getState().shinyPokedex
  }

  // A shiny catch unlocks both its default and shiny sprite, but a default
  // catch never unlocks the shiny one.
  static discoverPokemon(
    context: vscode.ExtensionContext,
    pokemonType: PokemonType,
    color: PokemonColor = PokemonColor.default
  ): boolean {
    const state = store(context).getState()
    let discovered = false

    if (state.pokedex.indexOf(pokemonType) < 0) {
      state.pokedex.push(pokemonType)
      discovered = true
    }

    if (color === PokemonColor.shiny && state.shinyPokedex.indexOf(pokemonType) < 0) {
      state.shinyPokedex.push(pokemonType)
      discovered = true
    }

    if (discovered) {
      PokemonState.savePokedex(context)
    }
    return discovered
  }

  static isPokemonDiscovered(
    context: vscode.ExtensionContext,
    pokemonType: PokemonType
  ): boolean {
    return PokemonState.getPokedex(context).indexOf(pokemonType) >= 0
  }

  static isPokemonShinyDiscovered(
    context: vscode.ExtensionContext,
    pokemonType: PokemonType
  ): boolean {
    return PokemonState.getShinyPokedex(context).indexOf(pokemonType) >= 0
  }

  static getRoster(context: vscode.ExtensionContext): Roster {
    const roster = store(context).getState().roster
    if (reconcileRoster(roster)) {
      PokemonState.saveRoster(context)
    }
    return roster
  }

  static saveRoster(context: vscode.ExtensionContext): void {
    store(context).save()
  }

  // Stores the progress of the pokemon currently out, so switching to another
  // line and back does not lose any XP.
  static rememberActivePokemon(context: vscode.ExtensionContext): void {
    const pokemon = PokemonState.getPokemon(context)
    // A pokemon brought out from the Pokedex to view an earlier stage is not
    // real progress on the line, so it must not overwrite the roster entry.
    if (!pokemon || pokemon.level === 0 || !pokemon.canGainXP) {
      return
    }

    const basePokemon = pokemon.evolutionLine[0] as PokemonType
    if (!basePokemon) {
      return
    }

    const roster = PokemonState.getRoster(context)
    roster[basePokemon] = {
      type: pokemon.type,
      level: pokemon.level,
      xp: pokemon.xp,
      color: pokemon.color,
    }
    PokemonState.saveRoster(context)
  }

  private static buildPokemon(
    evolutionLine: EvolutionLine,
    entry: RosterEntry,
    scaleFactor: number,
    canGainXP: boolean
  ): UserPokemon {
    return {
      id: getPokemonId(entry.type),
      type: entry.type,
      name: getPokemonName(entry.type),
      level: entry.level,
      xp: entry.xp,
      types: getPokemonTypes(entry.type),
      evolutionLine: [evolutionLine.base, ...evolutionLine.evolutions],
      state: 'walking',
      scale: scaleFactor,
      isTransitionIn: false,
      leftPosition: 0,
      direction: 'right',
      color: entry.color,
      canGainXP,
    }
  }

  // Brings out a pokemon picked in the Pokedex. Picking the stage the line has
  // actually reached resumes its real progress. Picking any other stage of the
  // same line (an earlier one, since evolution only moves forward) shows that
  // exact stage as a read-only max snapshot instead of jumping to the stage
  // reached, so it neither grows nor overwrites the line's real progress.
  static selectPokemonFromPokedex(
    context: vscode.ExtensionContext,
    pokemonType: PokemonType,
    requestedColor?: PokemonColor
  ): UserPokemon | undefined {
    const evolutionLine = getEvolutionLineContaining(pokemonType)
    if (!evolutionLine) {
      return undefined
    }

    PokemonState.rememberActivePokemon(context)

    const scaleFactor = vscode.workspace
      .getConfiguration()
      .get('pokechi.scaleFactor', 1.0)

    const roster = PokemonState.getRoster(context)
    const storedEntry = roster[evolutionLine.base]
    if (storedEntry && storedEntry.color === undefined) {
      storedEntry.color = PokemonColor.default
    }

    let entry: RosterEntry
    let canGainXP: boolean

    if (!storedEntry) {
      entry = {
        type: pokemonType,
        level: getPokemonLevel(pokemonType, evolutionLine),
        xp: 0,
        color: PokemonColor.default,
      }
      canGainXP = true
    } else if (storedEntry.type === pokemonType) {
      entry = storedEntry
      canGainXP = true
    } else {
      const level = getPokemonLevel(pokemonType, evolutionLine)
      entry = {
        type: pokemonType,
        level,
        xp: getRequiredXPForLevel(level),
        color: storedEntry.color,
      }
      canGainXP = false
    }

    // The Pokedex card only offers this choice once the shiny sprite is
    // actually unlocked for the species, but the color is re-checked here
    // too rather than trusted from the message.
    if (
      requestedColor === PokemonColor.shiny &&
      !PokemonState.isPokemonShinyDiscovered(context, pokemonType)
    ) {
      requestedColor = PokemonColor.default
    }
    if (requestedColor !== undefined) {
      entry.color = requestedColor
    }

    const pokemon = PokemonState.buildPokemon(evolutionLine, entry, scaleFactor, canGainXP)

    store(context).getState().pokemon = pokemon
    if (canGainXP) {
      roster[evolutionLine.base] = entry
    }
    PokemonState.savePokemon(context)

    return pokemon
  }

  static createNewPokemon(context: vscode.ExtensionContext): UserPokemon {
    const scaleFactor = vscode.workspace
      .getConfiguration()
      .get('pokechi.scaleFactor', 1.0)

    PokemonState.rememberActivePokemon(context)

    const basePokemon = getRandomBasePokemon()
    const color = getRandomPokemonColor()
    const evolutionLine = getEvolutionLine(basePokemon)

    if (!evolutionLine) {
      throw new Error(`No evolution line found for ${basePokemon}`)
    }

    const evolutionLineArray = [basePokemon, ...evolutionLine.evolutions]

    const pokemon: UserPokemon = {
      id: getPokemonId(basePokemon),
      type: basePokemon,
      name: getPokemonName(basePokemon),
      level: 0,
      xp: 0,
      types: getPokemonTypes(basePokemon),
      evolutionLine: evolutionLineArray,
      state: 'pokeball',
      scale: scaleFactor,
      isTransitionIn: true,
      leftPosition: 0,
      direction: 'right',
      color,
      canGainXP: true,
    }

    store(context).getState().pokemon = pokemon
    PokemonState.savePokemon(context)
    return pokemon
  }

  static getRequiredXP(pokemon: UserPokemon): number {
    return getRequiredXPForLevel(pokemon.level)
  }

  // False once a pokemon has reached the last stage of its line, including
  // species that never evolve at all.
  static hasFurtherEvolution(pokemon: UserPokemon): boolean {
    const evolutionLine = getEvolutionLine(pokemon.evolutionLine[0] as PokemonType)
    if (!evolutionLine) {
      return false
    }
    return hasFurtherEvolution(evolutionLine, pokemon.level)
  }

  static canEvolve(pokemon: UserPokemon): boolean {
    const requiredXP = PokemonState.getRequiredXP(pokemon)
    if (pokemon.xp < requiredXP) {
      return false
    }

    return PokemonState.hasFurtherEvolution(pokemon)
  }

  static evolvePokemon(
    context: vscode.ExtensionContext,
    pokemon: UserPokemon
  ): boolean {
    if (!PokemonState.canEvolve(pokemon)) {
      return false
    }

    const evolutionLine = getEvolutionLine(pokemon.evolutionLine[0] as PokemonType)
    if (!evolutionLine) {
      return false
    }

    const nextLevel = pokemon.level + 1
    const nextPokemon = getPokemonByLevel(evolutionLine, nextLevel)

    pokemon.id = getPokemonId(nextPokemon)
    pokemon.type = nextPokemon
    pokemon.name = getPokemonName(nextPokemon)
    pokemon.types = getPokemonTypes(nextPokemon)
    pokemon.level = nextLevel
    pokemon.xp = 0
    pokemon.state = nextLevel === 1 ? 'idle' : 'walking'
    pokemon.isTransitionIn = true

    PokemonState.discoverPokemon(context, nextPokemon, pokemon.color)
    PokemonState.rememberActivePokemon(context)

    return true
  }

  static addXP(pokemon: UserPokemon, amount: number): void {
    pokemon.xp += amount
    pokemon.isTransitionIn = false
  }

  static getTotalXP(context: vscode.ExtensionContext): number {
    return store(context).getState().totalXP || 0
  }

  // Lifetime counter, separate from any one pokemon's XP: it keeps growing
  // across resets on evolution and across every line ever raised.
  static addTotalXP(context: vscode.ExtensionContext, amount: number): void {
    const state = store(context).getState()
    state.totalXP = (state.totalXP || 0) + amount
    store(context).save()
  }
}
