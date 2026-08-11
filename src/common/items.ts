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
  // Awarded once every N hatches (the 10th, 20th, ... lifetime hatch) - a
  // flat count instead of a probability roll. Left undefined for an item
  // that is never earned this way.
  hatchMilestone?: number
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
  'master-ball': {
    id: 'master-ball',
    name: 'Master Ball',
    spritePath: 'objects/master-ball.png',
    description: 'Reveals a random sub-legendary, legendary or mythical Pokémon from any generation.',
    // Its own independent roll, same as every other item's - both can drop
    // from the same hatch, and neither dropping affects the other's odds.
    hatchDropChance: 0.02,
  },
  'premier-ball': {
    id: 'premier-ball',
    name: 'Premier Ball',
    spritePath: 'objects/premier-ball.png',
    description: 'Reveals a random Pokémon as shiny, from any generation or rarity.',
    hatchMilestone: 10,
  },
}

export type ItemId = keyof typeof ITEMS
