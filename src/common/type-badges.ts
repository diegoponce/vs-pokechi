import { PokemonElementType } from './types'

export interface TypeBadgeInfo {
  abbr: string
  color: string
  textColor: string
}

// The well-known type color chart reused across most fan Pokedex UIs. Text
// color is derived from perceived brightness (YIQ) rather than picked by eye
// per type, so every badge stays legible without a manual contrast pass.
export const TYPE_BADGES: Record<PokemonElementType, TypeBadgeInfo> = {
  [PokemonElementType.normal]: { abbr: 'NOR', color: '#A8A878', textColor: '#1b1b1b' },
  [PokemonElementType.fire]: { abbr: 'FIR', color: '#F08030', textColor: '#1b1b1b' },
  [PokemonElementType.water]: { abbr: 'WAT', color: '#6890F0', textColor: '#1b1b1b' },
  [PokemonElementType.electric]: { abbr: 'ELE', color: '#F8D030', textColor: '#1b1b1b' },
  [PokemonElementType.grass]: { abbr: 'GRA', color: '#78C850', textColor: '#1b1b1b' },
  [PokemonElementType.ice]: { abbr: 'ICE', color: '#98D8D8', textColor: '#1b1b1b' },
  [PokemonElementType.fighting]: { abbr: 'FIG', color: '#C03028', textColor: '#ffffff' },
  [PokemonElementType.poison]: { abbr: 'POI', color: '#A040A0', textColor: '#ffffff' },
  [PokemonElementType.ground]: { abbr: 'GRD', color: '#E0C068', textColor: '#1b1b1b' },
  [PokemonElementType.flying]: { abbr: 'FLY', color: '#A890F0', textColor: '#1b1b1b' },
  [PokemonElementType.psychic]: { abbr: 'PSY', color: '#F85888', textColor: '#1b1b1b' },
  [PokemonElementType.bug]: { abbr: 'BUG', color: '#A8B820', textColor: '#1b1b1b' },
  [PokemonElementType.rock]: { abbr: 'ROC', color: '#B8A038', textColor: '#1b1b1b' },
  [PokemonElementType.ghost]: { abbr: 'GHO', color: '#705898', textColor: '#ffffff' },
  [PokemonElementType.dragon]: { abbr: 'DRA', color: '#7038F8', textColor: '#ffffff' },
  [PokemonElementType.dark]: { abbr: 'DAK', color: '#705848', textColor: '#ffffff' },
  [PokemonElementType.steel]: { abbr: 'STE', color: '#B8B8D0', textColor: '#1b1b1b' },
}

// A CSS rule per type (".type-badge.type-fire { background: ...; color: ...; }"),
// meant to be embedded inside a <style nonce="..."> block. Colors can't be
// applied through a style="" attribute under this extension's webview CSPs
// (no 'unsafe-inline' for style-src, and a nonce only covers <style>/<script>
// elements, not the style attribute), so every consumer needs an actual class.
export function getTypeBadgeCssRules(): string {
  return Object.entries(TYPE_BADGES)
    .map(
      ([type, badge]) =>
        `.type-badge.type-${type} { background: ${badge.color}; color: ${badge.textColor}; }`
    )
    .join('\n')
}
