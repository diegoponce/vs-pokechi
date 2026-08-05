import { PokemonColor, PokemonElementType, PokemonType } from '../common/types'

export interface UserPokemon {
  id: number
  type: PokemonType
  name: string
  level: number
  xp: number
  types: PokemonElementType[]
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
  // Set on a Pokeball whose committed line (the whole line for a
  // non-branching base, or the specific branch picked for one that
  // branches, e.g. Eevee) already has its final stage discovered. It still
  // has to earn the same XP as any other Pokeball; evolvePokemon reads this
  // the moment it hatches to freeze it read-only at that point instead of
  // letting it grow into something the player already owns.
  pendingAlreadyOwned?: boolean
}

// Progress kept for an evolution line the user has already raised. Keyed by the
// base species so every stage of a line shares one slot.
export interface RosterEntry {
  type: PokemonType
  level: number
  xp: number
  color: PokemonColor
  // A branching base (Eevee, Oddish, ...) has more than one possible line;
  // this is the specific one this entry committed to, so resuming it later
  // does not risk landing on a different branch than the one raised.
  evolutionLine: PokemonType[]
}

export type Roster = { [basePokemon: string]: RosterEntry }

export type Position = 'panel' | 'explorer'

