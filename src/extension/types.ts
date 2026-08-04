import { PokemonColor, PokemonType } from '../common/types'

export interface UserPokemon {
  id: number
  type: PokemonType
  name: string
  level: number
  xp: number
  evolutionLine: string[]
  state: 'pokeball' | 'idle' | 'walking'
  scale: number
  isTransitionIn: boolean
  leftPosition?: number
  direction?: 'left' | 'right'
  isHovered?: boolean
  color: PokemonColor
  // False while the pokemon is a read-only Pokedex snapshot (an earlier stage
  // of a line than the one actually being raised), so typing/saving does not
  // grow it or clobber the line's real progress.
  canGainXP: boolean
}

// Progress kept for an evolution line the user has already raised. Keyed by the
// base species so every stage of a line shares one slot.
export interface RosterEntry {
  type: PokemonType
  level: number
  xp: number
  color: PokemonColor
}

export type Roster = { [basePokemon: string]: RosterEntry }

export type Position = 'panel' | 'explorer'

