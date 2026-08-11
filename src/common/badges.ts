import { PokemonGeneration } from './types'

export interface BadgeCondition {
  minDiscovered?: number
  minShinyDiscovered?: number
  minFossilDiscovered?: number
  minSubLegendaryDiscovered?: number
  minLegendaryDiscovered?: number
  minMythicalDiscovered?: number
  minRareCandyUsed?: number
}

export interface BadgeConfig {
  id: string
  generation: PokemonGeneration
  order: number
  name: string
  spritePath: string
  condition: BadgeCondition
}

// 8 badges per generation, each condition a strict superset of the one
// before it (every threshold only ever goes up from one badge to the next),
// so meeting badge N's condition always implies badge N-1's was already
// met too - nothing extra has to check "is the previous badge earned yet".
//
// Species counts (minDiscovered) are percentages of that generation's own
// dex size, not fixed numbers, so Gen 2's 127 species is not held to the
// same absolute bar as Gen 1's 151. Sub-legendary/legendary/mythical
// targets are capped at each generation's actual totals and ramp up to
// "all of them" by badge 7 - Gen 1 and Gen 2 both have so few (1 legendary,
// 1 mythical each) that they max out already at badge 4 and just carry
// that forward from there. Johto (Gen 2) has zero fossil-tier species, so
// badge 2's fossil requirement is waived only there - every other
// requirement stays real.
export const BADGES: BadgeConfig[] = [
  {
    id: 'gen1-badge-1',
    generation: PokemonGeneration.Gen1,
    order: 1,
    name: 'Boulder Badge',
    spritePath: 'badges/gen1/boulder-badge.png',
    condition: { minDiscovered: 10 },
  },
  {
    id: 'gen1-badge-2',
    generation: PokemonGeneration.Gen1,
    order: 2,
    name: 'Cascade Badge',
    spritePath: 'badges/gen1/cascade-badge.png',
    condition: { minShinyDiscovered: 1, minFossilDiscovered: 1 },
  },
  {
    id: 'gen1-badge-3',
    generation: PokemonGeneration.Gen1,
    order: 3,
    name: 'Thunder Badge',
    spritePath: 'badges/gen1/thunder-badge.png',
    condition: { minDiscovered: 31, minShinyDiscovered: 5, minSubLegendaryDiscovered: 1 },
  },
  {
    id: 'gen1-badge-4',
    generation: PokemonGeneration.Gen1,
    order: 4,
    name: 'Rainbow Badge',
    spritePath: 'badges/gen1/rainbow-badge.png',
    condition: { minDiscovered: 61, minShinyDiscovered: 20, minSubLegendaryDiscovered: 3, minLegendaryDiscovered: 1, minMythicalDiscovered: 1, minRareCandyUsed: 1 },
  },
  {
    id: 'gen1-badge-5',
    generation: PokemonGeneration.Gen1,
    order: 5,
    name: 'Soul Badge',
    spritePath: 'badges/gen1/soul-badge.png',
    condition: { minDiscovered: 84, minShinyDiscovered: 35, minSubLegendaryDiscovered: 3, minLegendaryDiscovered: 1, minMythicalDiscovered: 1, minRareCandyUsed: 3 },
  },
  {
    id: 'gen1-badge-6',
    generation: PokemonGeneration.Gen1,
    order: 6,
    name: 'Marsh Badge',
    spritePath: 'badges/gen1/marsh-badge.png',
    condition: { minDiscovered: 106, minShinyDiscovered: 50, minSubLegendaryDiscovered: 3, minLegendaryDiscovered: 1, minMythicalDiscovered: 1, minRareCandyUsed: 5 },
  },
  {
    id: 'gen1-badge-7',
    generation: PokemonGeneration.Gen1,
    order: 7,
    name: 'Volcano Badge',
    spritePath: 'badges/gen1/volcano-badge.png',
    condition: { minDiscovered: 129, minShinyDiscovered: 70, minSubLegendaryDiscovered: 3, minLegendaryDiscovered: 1, minMythicalDiscovered: 1, minRareCandyUsed: 8 },
  },
  {
    id: 'gen1-badge-8',
    generation: PokemonGeneration.Gen1,
    order: 8,
    name: 'Earth Badge',
    spritePath: 'badges/gen1/earth-badge.png',
    condition: { minDiscovered: 151, minShinyDiscovered: 151, minSubLegendaryDiscovered: 3, minLegendaryDiscovered: 1, minMythicalDiscovered: 1 },
  },
  {
    id: 'gen2-badge-1',
    generation: PokemonGeneration.Gen2,
    order: 1,
    name: 'Zephyr Badge',
    spritePath: 'badges/gen2/zephyr-badge.png',
    condition: { minDiscovered: 10 },
  },
  {
    id: 'gen2-badge-2',
    generation: PokemonGeneration.Gen2,
    order: 2,
    name: 'Hive Badge',
    spritePath: 'badges/gen2/hive-badge.png',
    condition: { minShinyDiscovered: 1 },
  },
  {
    id: 'gen2-badge-3',
    generation: PokemonGeneration.Gen2,
    order: 3,
    name: 'Plain Badge',
    spritePath: 'badges/gen2/plain-badge.png',
    condition: { minDiscovered: 26, minShinyDiscovered: 5, minSubLegendaryDiscovered: 1 },
  },
  {
    id: 'gen2-badge-4',
    generation: PokemonGeneration.Gen2,
    order: 4,
    name: 'Fog Badge',
    spritePath: 'badges/gen2/fog-badge.png',
    condition: { minDiscovered: 51, minShinyDiscovered: 20, minSubLegendaryDiscovered: 3, minLegendaryDiscovered: 1, minMythicalDiscovered: 1, minRareCandyUsed: 1 },
  },
  {
    id: 'gen2-badge-5',
    generation: PokemonGeneration.Gen2,
    order: 5,
    name: 'Storm Badge',
    spritePath: 'badges/gen2/storm-badge.png',
    condition: { minDiscovered: 70, minShinyDiscovered: 35, minSubLegendaryDiscovered: 3, minLegendaryDiscovered: 2, minMythicalDiscovered: 1, minRareCandyUsed: 3 },
  },
  {
    id: 'gen2-badge-6',
    generation: PokemonGeneration.Gen2,
    order: 6,
    name: 'Mineral Badge',
    spritePath: 'badges/gen2/mineral-badge.png',
    condition: { minDiscovered: 89, minShinyDiscovered: 50, minSubLegendaryDiscovered: 3, minLegendaryDiscovered: 2, minMythicalDiscovered: 1, minRareCandyUsed: 5 },
  },
  {
    id: 'gen2-badge-7',
    generation: PokemonGeneration.Gen2,
    order: 7,
    name: 'Glacier Badge',
    spritePath: 'badges/gen2/glacier-badge.png',
    condition: { minDiscovered: 108, minShinyDiscovered: 70, minSubLegendaryDiscovered: 3, minLegendaryDiscovered: 2, minMythicalDiscovered: 1, minRareCandyUsed: 8 },
  },
  {
    id: 'gen2-badge-8',
    generation: PokemonGeneration.Gen2,
    order: 8,
    name: 'Rising Badge',
    spritePath: 'badges/gen2/rising-badge.png',
    condition: { minDiscovered: 127, minShinyDiscovered: 127, minSubLegendaryDiscovered: 3, minLegendaryDiscovered: 2, minMythicalDiscovered: 1 },
  },
  {
    id: 'gen3-badge-1',
    generation: PokemonGeneration.Gen3,
    order: 1,
    name: 'Stone Badge',
    spritePath: 'badges/gen3/stone-badge.png',
    condition: { minDiscovered: 10 },
  },
  {
    id: 'gen3-badge-2',
    generation: PokemonGeneration.Gen3,
    order: 2,
    name: 'Knuckle Badge',
    spritePath: 'badges/gen3/knuckle-badge.png',
    condition: { minShinyDiscovered: 1, minFossilDiscovered: 1 },
  },
  {
    id: 'gen3-badge-3',
    generation: PokemonGeneration.Gen3,
    order: 3,
    name: 'Dynamo Badge',
    spritePath: 'badges/gen3/dynamo-badge.png',
    condition: { minDiscovered: 28, minShinyDiscovered: 5, minSubLegendaryDiscovered: 1 },
  },
  {
    id: 'gen3-badge-4',
    generation: PokemonGeneration.Gen3,
    order: 4,
    name: 'Heat Badge',
    spritePath: 'badges/gen3/heat-badge.png',
    condition: { minDiscovered: 56, minShinyDiscovered: 20, minSubLegendaryDiscovered: 3, minLegendaryDiscovered: 1, minMythicalDiscovered: 1, minRareCandyUsed: 1 },
  },
  {
    id: 'gen3-badge-5',
    generation: PokemonGeneration.Gen3,
    order: 5,
    name: 'Balance Badge',
    spritePath: 'badges/gen3/balance-badge.png',
    condition: { minDiscovered: 76, minShinyDiscovered: 35, minSubLegendaryDiscovered: 4, minLegendaryDiscovered: 2, minMythicalDiscovered: 3, minRareCandyUsed: 3 },
  },
  {
    id: 'gen3-badge-6',
    generation: PokemonGeneration.Gen3,
    order: 6,
    name: 'Feather Badge',
    spritePath: 'badges/gen3/feather-badge.png',
    condition: { minDiscovered: 97, minShinyDiscovered: 50, minSubLegendaryDiscovered: 5, minLegendaryDiscovered: 3, minMythicalDiscovered: 4, minRareCandyUsed: 5 },
  },
  {
    id: 'gen3-badge-7',
    generation: PokemonGeneration.Gen3,
    order: 7,
    name: 'Mind Badge',
    spritePath: 'badges/gen3/mind-badge.png',
    condition: { minDiscovered: 118, minShinyDiscovered: 70, minSubLegendaryDiscovered: 5, minLegendaryDiscovered: 3, minMythicalDiscovered: 5, minRareCandyUsed: 8 },
  },
  {
    id: 'gen3-badge-8',
    generation: PokemonGeneration.Gen3,
    order: 8,
    name: 'Rain Badge',
    spritePath: 'badges/gen3/rain-badge.png',
    condition: { minDiscovered: 138, minShinyDiscovered: 138, minSubLegendaryDiscovered: 5, minLegendaryDiscovered: 3, minMythicalDiscovered: 5 },
  },
  {
    id: 'gen4-badge-1',
    generation: PokemonGeneration.Gen4,
    order: 1,
    name: 'Coal Badge',
    spritePath: 'badges/gen4/coal-badge.png',
    condition: { minDiscovered: 10 },
  },
  {
    id: 'gen4-badge-2',
    generation: PokemonGeneration.Gen4,
    order: 2,
    name: 'Forest Badge',
    spritePath: 'badges/gen4/forest-badge.png',
    condition: { minShinyDiscovered: 1, minFossilDiscovered: 1 },
  },
  {
    id: 'gen4-badge-3',
    generation: PokemonGeneration.Gen4,
    order: 3,
    name: 'Cobble Badge',
    spritePath: 'badges/gen4/cobble-badge.png',
    condition: { minDiscovered: 28, minShinyDiscovered: 5, minSubLegendaryDiscovered: 1 },
  },
  {
    id: 'gen4-badge-4',
    generation: PokemonGeneration.Gen4,
    order: 4,
    name: 'Fen Badge',
    spritePath: 'badges/gen4/fen-badge.png',
    condition: { minDiscovered: 55, minShinyDiscovered: 20, minSubLegendaryDiscovered: 3, minLegendaryDiscovered: 1, minMythicalDiscovered: 1, minRareCandyUsed: 1 },
  },
  {
    id: 'gen4-badge-5',
    generation: PokemonGeneration.Gen4,
    order: 5,
    name: 'Relic Badge',
    spritePath: 'badges/gen4/relic-badge.png',
    condition: { minDiscovered: 76, minShinyDiscovered: 35, minSubLegendaryDiscovered: 3, minLegendaryDiscovered: 3, minMythicalDiscovered: 8, minRareCandyUsed: 3 },
  },
  {
    id: 'gen4-badge-6',
    generation: PokemonGeneration.Gen4,
    order: 6,
    name: 'Mine Badge',
    spritePath: 'badges/gen4/mine-badge.png',
    condition: { minDiscovered: 96, minShinyDiscovered: 50, minSubLegendaryDiscovered: 3, minLegendaryDiscovered: 5, minMythicalDiscovered: 15, minRareCandyUsed: 5 },
  },
  {
    id: 'gen4-badge-7',
    generation: PokemonGeneration.Gen4,
    order: 7,
    name: 'Icicle Badge',
    spritePath: 'badges/gen4/icicle-badge.png',
    condition: { minDiscovered: 117, minShinyDiscovered: 70, minSubLegendaryDiscovered: 3, minLegendaryDiscovered: 7, minMythicalDiscovered: 22, minRareCandyUsed: 8 },
  },
  {
    id: 'gen4-badge-8',
    generation: PokemonGeneration.Gen4,
    order: 8,
    name: 'Beacon Badge',
    spritePath: 'badges/gen4/beacon-badge.png',
    condition: { minDiscovered: 137, minShinyDiscovered: 137, minSubLegendaryDiscovered: 3, minLegendaryDiscovered: 7, minMythicalDiscovered: 22 },
  },
]
