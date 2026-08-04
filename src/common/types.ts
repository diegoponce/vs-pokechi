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
    fossil = 'fossil',
}

export enum PokemonGeneration {
    Gen1 = 1,
    Gen2 = 2,
    Gen3 = 3,
    Gen4 = 4,
}

// Typing as it stood by the end of Generation III - no Fairy type, since it
// was not introduced until Generation VI (e.g. Clefairy/Mr. Mime/Snubbull
// stay Normal here, not Fairy).
export const enum PokemonElementType {
    normal = 'normal',
    fire = 'fire',
    water = 'water',
    electric = 'electric',
    grass = 'grass',
    ice = 'ice',
    fighting = 'fighting',
    poison = 'poison',
    ground = 'ground',
    flying = 'flying',
    psychic = 'psychic',
    bug = 'bug',
    rock = 'rock',
    ghost = 'ghost',
    dragon = 'dragon',
    dark = 'dark',
    steel = 'steel',
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
    types: PokemonElementType[],
}