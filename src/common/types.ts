import { POKEMON_DATA } from "./pokemon-data";

export const enum PokemonColor {
    default = 'default',
    shiny = 'shiny',
    null = 'null',
}

// Absent (undefined) on a PokemonConfig means common - the vast majority of
// the dex - so only the handful of legendary-tier species need to set this.
export const enum PokemonRarity {
    subLegendary = 'sub-legendary',
    legendary = 'legendary',
    mythical = 'mythical',
}

export enum PokemonGeneration {
    Gen1 = 1,
    Gen2 = 2,
    Gen3 = 3,
}

export type PokemonTypeString = string & keyof typeof POKEMON_DATA;

export type PokemonType = PokemonTypeString;

export interface PokemonConfig {
    id: number;
    name: string;
    generation: PokemonGeneration;
    cry: string;
    possibleColors: PokemonColor[];
    originalSpriteSize?: number,
    rarity?: PokemonRarity,
}