export interface ItemConfig {
  id: string
  name: string
  // Relative to media/, same convention as a species sprite path.
  spritePath: string
  description: string
  // Odds of one dropping on every hatch (Pokeball -> level 1), independent
  // of any other item's own odds and of whatever the hatch goes on to do
  // (grow normally or freeze read-only for an already-owned line). Left
  // undefined for an item that is never earned this way.
  hatchDropChance?: number
}

// Adding an item only ever needs an entry here - the inventory itself
// (state-store.ts's items map, PokemonState.getItemCount/addItem/removeItem)
// does not change shape to hold one more kind of item, and a hatchDropChance
// here is picked up by the XP tracker's drop roll automatically. What using
// an item actually does is still its own dedicated code (see
// PokemonState.useRareCandy) - that part is genuinely different per item and
// is not something a shared "use" method could do justice to in advance.
export const ITEMS: Record<string, ItemConfig> = {
  'rare-candy': {
    id: 'rare-candy',
    name: 'Rare Candy',
    spritePath: 'objects/rare-candy.png',
    description: 'Instantly evolves your current pokemon, as long as it is not already fully evolved.',
    hatchDropChance: 0.04,
  },
}

export type ItemId = keyof typeof ITEMS
