import { PokemonType } from '../common/types'

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
}

// Progress kept for an evolution line the user has already raised. Keyed by the
// base species so every stage of a line shares one slot.
export interface RosterEntry {
  type: PokemonType
  level: number
  xp: number
}

export type Roster = { [basePokemon: string]: RosterEntry }

export type Position = 'panel' | 'explorer'

