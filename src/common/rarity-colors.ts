import { PokemonRarity } from './types'

// Shared with the Pokedex card borders, so a species reads as the same rarity
// everywhere it shows up.
export const RARITY_COLORS: Record<PokemonRarity, string> = {
  [PokemonRarity.subLegendary]: '#5EC8F2',
  [PokemonRarity.legendary]: '#E3A008',
  [PokemonRarity.mythical]: '#C77DFF',
  [PokemonRarity.fossil]: '#B08968',
}

// A rule per rarity for a given selector base (e.g. ".xp-container" ->
// ".xp-container.rarity-legendary { border-color: ...; }"), meant to be
// embedded inside a <style nonce="..."> block. Colors can't be applied
// through a style="" attribute under this extension's webview CSPs (no
// 'unsafe-inline' for style-src, and a nonce only covers <style>/<script>
// elements, not the style attribute), so every consumer needs an actual class.
export function getRarityBorderCssRules(selector: string): string {
  return Object.entries(RARITY_COLORS)
    .map(([rarity, color]) => `${selector}.rarity-${rarity} { border-color: ${color}; }`)
    .join('\n')
}
