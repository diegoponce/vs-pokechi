/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/pokemon-data.ts"
/*!************************************!*\
  !*** ./src/common/pokemon-data.ts ***!
  \************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRandomPokemonConfig = exports.getDefaultPokemon = exports.getPokemonByGeneration = exports.getAllPokemon = exports.POKEMON_DATA = void 0;
const types_1 = __webpack_require__(/*! ./types */ "./src/common/types.ts");
exports.POKEMON_DATA = {
    bulbasaur: {
        id: 1,
        name: 'Bulbasaur',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Bulbasaur!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    ivysaur: {
        id: 2,
        name: 'Ivysaur',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Ivysaur!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    venusaur: {
        id: 3,
        name: 'Venusaur',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Venusaur!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    charmander: {
        id: 4,
        name: 'Charmander',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Charmander!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    charmeleon: {
        id: 5,
        name: 'Charmeleon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Charmeleon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    charizard: {
        id: 6,
        name: 'Charizard',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Charizard!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    squirtle: {
        id: 7,
        name: 'Squirtle',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Squritle!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    wartortle: {
        id: 8,
        name: 'Wartortle',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Wartortle!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    blastoise: {
        id: 9,
        name: 'Blastoise',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Blastoise!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    caterpie: {
        id: 10,
        name: 'Caterpie',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Caterpie!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    metapod: {
        id: 11,
        name: 'Metapod',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Metapod!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    butterfree: {
        id: 12,
        name: 'Butterfree',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Butterfree!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    weedle: {
        id: 13,
        name: 'Weedle',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Weedle!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    kakuna: {
        id: 14,
        name: 'Kakuna',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kakuna!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    beedrill: {
        id: 15,
        name: 'Beedrill',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Beedrill!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    pidgey: {
        id: 16,
        name: 'Pidgey',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Pidgey!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    pidgeotto: {
        id: 17,
        name: 'Pidgeotto',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Pidgeotto!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    pidgeot: {
        id: 18,
        name: 'Pidgeot',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Pidgeot!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    rattata: {
        id: 19,
        name: 'Rattata',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Rattata!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    raticate: {
        id: 20,
        name: 'Raticate',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Raticate!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    spearow: {
        id: 21,
        name: 'Spearow',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Spearow!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    fearow: {
        id: 22,
        name: 'Fearow',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Fearow!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    ekans: {
        id: 23,
        name: 'Ekans',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Ekans!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    arbok: {
        id: 24,
        name: 'Arbok',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Arbok!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    pikachu: {
        id: 25,
        name: 'Pikachu',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Pikachu!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    raichu: {
        id: 26,
        name: 'Raichu',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Raichu!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    sandshrew: {
        id: 27,
        name: 'Sandshrew',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Sandshrew!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    sandslash: {
        id: 28,
        name: 'Sandslash',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Sandslash!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    nidoran_female: {
        id: 29,
        name: 'Nidoran♀',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidoran!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    nidorina: {
        id: 30,
        name: 'Nidorina',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidorina!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    nidoqueen: {
        id: 31,
        name: 'Nidoqueen',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidoqueen!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    nidoran_male: {
        id: 32,
        name: 'Nidoran♂',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidoran!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    nidorino: {
        id: 33,
        name: 'Nidorino',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidorino!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    nidoking: {
        id: 34,
        name: 'Nidoking',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidoking!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    clefairy: {
        id: 35,
        name: 'Clefairy',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Clefairy!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    clefable: {
        id: 36,
        name: 'Clefable',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Clefable!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    vulpix: {
        id: 37,
        name: 'Vulpix',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Vulpix!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    ninetales: {
        id: 38,
        name: 'Ninetales',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Ninetales!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    jigglypuff: {
        id: 39,
        name: 'Jigglypuff',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Jigglypuff!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    wigglytuff: {
        id: 40,
        name: 'Wigglytuff',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Wigglytuff!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    zubat: {
        id: 41,
        name: 'Zubat',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Zubat!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    golbat: {
        id: 42,
        name: 'Golbat',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Golbat!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    oddish: {
        id: 43,
        name: 'Oddish',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Oddish!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    gloom: {
        id: 44,
        name: 'Gloom',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Gloom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    vileplume: {
        id: 45,
        name: 'Vileplume',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Vileplume!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    paras: {
        id: 46,
        name: 'Paras',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Paras!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    parasect: {
        id: 47,
        name: 'Parasect',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Parasect!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    venonat: {
        id: 48,
        name: 'Venonat',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Venonat!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    venomoth: {
        id: 49,
        name: 'Venomoth',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Venomoth!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    diglett: {
        id: 50,
        name: 'Diglett',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Diglett!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    dugtrio: {
        id: 51,
        name: 'Dugtrio',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dugtrio!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    meowth: {
        id: 52,
        name: 'Meowth',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Meowth!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    persian: {
        id: 53,
        name: 'Persian',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Persian!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    psyduck: {
        id: 54,
        name: 'Psyduck',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Psyduck!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    golduck: {
        id: 55,
        name: 'Golduck',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Golduck!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    mankey: {
        id: 56,
        name: 'Mankey',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Mankey!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    primeape: {
        id: 57,
        name: 'Primeape',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Primeape!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    growlithe: {
        id: 58,
        name: 'Growlithe',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Growlithe!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    arcanine: {
        id: 59,
        name: 'Arcanine',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Arcanine!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    poliwag: {
        id: 60,
        name: 'Poliwag',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Poliwag!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    poliwhirl: {
        id: 61,
        name: 'Poliwhirl',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Poliwhirl!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    poliwrath: {
        id: 62,
        name: 'Poliwrath',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Poliwrath!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    abra: {
        id: 63,
        name: 'Abra',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Abra!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    kadabra: {
        id: 64,
        name: 'Kadabra',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kadabra!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    alakazam: {
        id: 65,
        name: 'Alakazam',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Alakazam!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    machop: {
        id: 66,
        name: 'Machop',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Machop!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    machoke: {
        id: 67,
        name: 'Machoke',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Machoke!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    machamp: {
        id: 68,
        name: 'Machamp',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Alakazam!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    bellsprout: {
        id: 69,
        name: 'Bellsprout',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Bellsprout!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    weepinbell: {
        id: 70,
        name: 'Weepinbell',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Weepinbell!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    victreebel: {
        id: 71,
        name: 'Victreebel',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Victreebel!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    tentacool: {
        id: 72,
        name: 'Tentacool',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Tentacool!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    tentacruel: {
        id: 73,
        name: 'Tentacruel',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Tentacruel!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    geodude: {
        id: 74,
        name: 'Geodude',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Geodude!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    graveler: {
        id: 75,
        name: 'Graveler',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Graveler!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    golem: {
        id: 76,
        name: 'Golem',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Golem!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    ponyta: {
        id: 77,
        name: 'Ponyta',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Ponyta!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    rapidash: {
        id: 78,
        name: 'Rapidash',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Rapidash!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    slowpoke: {
        id: 79,
        name: 'Slowpoke',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Slowpoke!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    slowbro: {
        id: 80,
        name: 'Slowbro',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Slowbro!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    magnemite: {
        id: 81,
        name: 'Magnemite',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Magnemite!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    magneton: {
        id: 82,
        name: 'Magneton',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Magneton!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    farfetchd: {
        id: 83,
        name: 'Farfetch\'d',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Farfetch\'d!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    doduo: {
        id: 84,
        name: 'Doduo',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Doduo!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    dodrio: {
        id: 85,
        name: 'Dodrio',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dodrio!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    seel: {
        id: 86,
        name: 'Seel',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Seel!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    dewgong: {
        id: 87,
        name: 'Dewgong',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dewgong!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    grimer: {
        id: 88,
        name: 'Grimer',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Grimer!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    muk: {
        id: 89,
        name: 'Muk',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Muk!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    shellder: {
        id: 90,
        name: 'Shellder',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Shellder!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    cloyster: {
        id: 91,
        name: 'Cloyster',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Cloyster!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    gastly: {
        id: 92,
        name: 'Gastly',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Gastly!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    haunter: {
        id: 93,
        name: 'Haunter',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Haunter!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    gengar: {
        id: 94,
        name: 'Gengar',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Gengar!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    onix: {
        id: 95,
        name: 'Onix',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Onix!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    drowzee: {
        id: 96,
        name: 'Drowzee',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Drowzee!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    hypno: {
        id: 97,
        name: 'Hypno',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Hypno!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    krabby: {
        id: 98,
        name: 'Krabby',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Krabby!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    kingler: {
        id: 99,
        name: 'Kingler',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kingler!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    voltorb: {
        id: 100,
        name: 'Voltorb',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Voltorb!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    electrode: {
        id: 101,
        name: 'Electrode',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Electrode!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    exeggcute: {
        id: 102,
        name: 'Exeggcute',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Exeggcute!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    exeggutor: {
        id: 103,
        name: 'Exeggutor',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Exeggutor!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    cubone: {
        id: 104,
        name: 'Cubone',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Cubone!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    marowak: {
        id: 105,
        name: 'Marowak',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Marowak!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    hitmonlee: {
        id: 106,
        name: 'Hitmonlee',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Hitmonlee!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    hitmonchan: {
        id: 107,
        name: 'Hitmonchan',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Hitmonchan!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    lickitung: {
        id: 108,
        name: 'Lickitung',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Lickitung!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    koffing: {
        id: 109,
        name: 'Koffing',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Koffing!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    weezing: {
        id: 110,
        name: 'Weezing',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Weezing!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    rhyhorn: {
        id: 111,
        name: 'Rhyhorn',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Rhyhorn!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    rhydon: {
        id: 112,
        name: 'Rhydon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Rhydon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    chansey: {
        id: 113,
        name: 'Chansey',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Chansey!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    tangela: {
        id: 114,
        name: 'Tangela',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Tangela!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    kangaskhan: {
        id: 115,
        name: 'Kangaskhan',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kangaskhan!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    horsea: {
        id: 116,
        name: 'Horsea',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Horsea!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    seadra: {
        id: 117,
        name: 'Seadra',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Seadra!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    goldeen: {
        id: 118,
        name: 'Goldeen',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Goldeen!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    seaking: {
        id: 119,
        name: 'Seaking',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Seaking!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    staryu: {
        id: 120,
        name: 'Staryu',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Staryu!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    starmie: {
        id: 121,
        name: 'Starmie',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Starmie!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    mrmime: {
        id: 122,
        name: 'Mr. Mime',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Mr. Mime!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    scyther: {
        id: 123,
        name: 'Scyther',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Scyther!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    jynx: {
        id: 124,
        name: 'Jynx',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Jynx!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    electabuzz: {
        id: 125,
        name: 'Electabuzz',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Electabuzz!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    magmar: {
        id: 126,
        name: 'Magmar',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Magmar!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    pinsir: {
        id: 127,
        name: 'Pinsir',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Pinsir!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    tauros: {
        id: 128,
        name: 'Tauros',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Tauros!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    magikarp: {
        id: 129,
        name: 'Magikarp',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Magikarp!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    gyarados: {
        id: 130,
        name: 'Gyarados',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Gyarados!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    lapras: {
        id: 131,
        name: 'Lapras',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Lapras!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    ditto: {
        id: 132,
        name: 'Ditto',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Ditto!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    eevee: {
        id: 133,
        name: 'Eevee',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Eevee!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    vaporeon: {
        id: 134,
        name: 'Vaporeon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Vaporeon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    jolteon: {
        id: 135,
        name: 'Jolteon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Jolteon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    flareon: {
        id: 136,
        name: 'Flareon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Flareon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    porygon: {
        id: 137,
        name: 'Porygon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Porygon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    omanyte: {
        id: 138,
        name: 'Omanyte',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Omanyte!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    omastar: {
        id: 139,
        name: 'Omastar',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Omastar!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    kabuto: {
        id: 140,
        name: 'Kabuto',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kabuto!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    kabutops: {
        id: 141,
        name: 'Kabutops',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kabutops!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    aerodactyl: {
        id: 142,
        name: 'Aerodactyl',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Aerodactyl!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    snorlax: {
        id: 143,
        name: 'Snorlax',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Snorlax!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    articuno: {
        id: 144,
        name: 'Articuno',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Articuno!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    zapdos: {
        id: 145,
        name: 'Zapdos',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Zapdos!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    moltres: {
        id: 146,
        name: 'Moltres',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Moltres!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    dratini: {
        id: 147,
        name: 'Dratini',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dratini!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    dragonair: {
        id: 148,
        name: 'Dragonair',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dragonair!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    dragonite: {
        id: 149,
        name: 'Dragonite',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dragonite!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    mewtwo: {
        id: 150,
        name: 'Mewtwo',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Mewtwo!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    mew: {
        id: 151,
        name: 'Mew',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Mew!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    // Generation 2
    chikorita: {
        id: 152,
        name: 'Chikorita',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Chikorita!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    bayleef: {
        id: 153,
        name: 'Bayleef',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Bayleef!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    meganium: {
        id: 154,
        name: 'Meganium',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Meganium!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    cyndaquil: {
        id: 155,
        name: 'Cyndaquil',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Cyndaquil!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    quilava: {
        id: 156,
        name: 'Quilava',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Quilava!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    typhlosion: {
        id: 157,
        name: 'Typhlosion',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Typhlosion!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    totodile: {
        id: 158,
        name: 'Totodile',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Totodile!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    croconaw: {
        id: 159,
        name: 'Croconaw',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Croconaw!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    feraligatr: {
        id: 160,
        name: 'Feraligatr',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Feraligatr!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    sentret: {
        id: 161,
        name: 'Sentret',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Sentret!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    furret: {
        id: 162,
        name: 'Furret',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Furret!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    hoothoot: {
        id: 163,
        name: 'Hoothoot',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Hoothoot!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    noctowl: {
        id: 164,
        name: 'Noctowl',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Noctowl!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    ledyba: {
        id: 165,
        name: 'Ledyba',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ledyba!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    ledian: {
        id: 166,
        name: 'Ledian',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ledian!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    spinarak: {
        id: 167,
        name: 'Spinarak',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Spinarak!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    ariados: {
        id: 168,
        name: 'Ariados',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ariados!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    crobat: {
        id: 169,
        name: 'Crobat',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Crobat!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    chinchou: {
        id: 170,
        name: 'Chinchou',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Chinchou!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    lanturn: {
        id: 171,
        name: 'Lanturn',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Lanturn!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    pichu: {
        id: 172,
        name: 'Pichu',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Pichu!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    cleffa: {
        id: 173,
        name: 'Cleffa',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Cleffa!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    igglybuff: {
        id: 174,
        name: 'Igglybuff',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Igglybuff!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    togepi: {
        id: 175,
        name: 'Togepi',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Togepi!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    togetic: {
        id: 176,
        name: 'Togetic',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Togetic!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    natu: {
        id: 177,
        name: 'Natu',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Natu!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    xatu: {
        id: 178,
        name: 'Xatu',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Xatu!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    mareep: {
        id: 179,
        name: 'Mareep',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Mareep!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    flaaffy: {
        id: 180,
        name: 'Flaaffy',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Flaaffy!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    ampharos: {
        id: 181,
        name: 'Ampharos',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ampharos!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    bellossom: {
        id: 182,
        name: 'Bellossom',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Bellossom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    marill: {
        id: 183,
        name: 'Marill',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Marill!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    azumarill: {
        id: 184,
        name: 'Azumarill',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Azumarill!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    sudowoodo: {
        id: 185,
        name: 'Sudowoodo',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Sudowoodo!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    politoed: {
        id: 186,
        name: 'Politoed',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Politoed!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    hoppip: {
        id: 187,
        name: 'Hoppip',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Hoppip!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    skiploom: {
        id: 188,
        name: 'Skiploom',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Skiploom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    jumpluff: {
        id: 189,
        name: 'Jumpluff',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Jumpluff!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    aipom: {
        id: 190,
        name: 'Aipom',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Aipom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    sunkern: {
        id: 191,
        name: 'Sunkern',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Sunkern!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    sunflora: {
        id: 192,
        name: 'Sunflora',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Sunflora!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    yanma: {
        id: 193,
        name: 'Yanma',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Yanma!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    wooper: {
        id: 194,
        name: 'Wooper',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Wooper!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    quagsire: {
        id: 195,
        name: 'Quagsire',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Quagsire!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    espeon: {
        id: 196,
        name: 'Espeon',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Espeon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    umbreon: {
        id: 197,
        name: 'Umbreon',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Umbreon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    murkrow: {
        id: 198,
        name: 'Murkrow',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Murkrow!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    slowking: {
        id: 199,
        name: 'Slowking',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Slowking!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    misdreavus: {
        id: 200,
        name: 'Misdreavus',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Misdreavus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    wobbuffet: {
        id: 202,
        name: 'Wobbuffet',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Wobbuffet!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    girafarig: {
        id: 203,
        name: 'Girafarig',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Girafarig!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    pineco: {
        id: 204,
        name: 'Pineco',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Pineco!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    forretress: {
        id: 205,
        name: 'Forretress',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Forretress!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    dunsparce: {
        id: 206,
        name: 'Dunsparce',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Dunsparce!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    gligar: {
        id: 207,
        name: 'Gligar',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Gligar!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    steelix: {
        id: 208,
        name: 'Steelix',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Steelix!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        originalSpriteSize: 64,
    },
    snubbull: {
        id: 209,
        name: 'Snubbull',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Snubbull!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    granbull: {
        id: 210,
        name: 'Granbull',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Granbull!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    qwilfish: {
        id: 211,
        name: 'Qwilfish',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Qwilfish!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    scizor: {
        id: 212,
        name: 'Scizor',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Scizor!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    shuckle: {
        id: 213,
        name: 'Shuckle',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Shuckle!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    heracross: {
        id: 214,
        name: 'Heracross',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Heracross!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    sneasel: {
        id: 215,
        name: 'Sneasel',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Sneasel!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    teddiursa: {
        id: 216,
        name: 'Teddiursa',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Teddiursa!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    ursaring: {
        id: 217,
        name: 'Ursaring',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ursaring!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    slugma: {
        id: 218,
        name: 'Slugma',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Slugma!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    magcargo: {
        id: 219,
        name: 'Magcargo',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Magcargo!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    swinub: {
        id: 220,
        name: 'Swinub',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Swinub!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    piloswine: {
        id: 221,
        name: 'Piloswine',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Piloswine!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    corsola: {
        id: 222,
        name: 'Corsola',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Corsola!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    remoraid: {
        id: 223,
        name: 'Remoraid',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Remoraid!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    octillery: {
        id: 224,
        name: 'Octillery',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Octillery!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    delibird: {
        id: 225,
        name: 'Delibird',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Delibird!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    mantine: {
        id: 226,
        name: 'Mantine',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Mantine!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    skarmory: {
        id: 227,
        name: 'Skarmory',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Skarmory!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    houndour: {
        id: 228,
        name: 'Houndour',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Houndour!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    houndoom: {
        id: 229,
        name: 'Houndoom',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Houndoom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    kingdra: {
        id: 230,
        name: 'Kingdra',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Kingdra!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    phanpy: {
        id: 231,
        name: 'Phanpy',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Phanpy!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    donphan: {
        id: 232,
        name: 'Donphan',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Donphan!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    porygon2: {
        id: 233,
        name: 'Porygon2',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Porygon2!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    stantler: {
        id: 234,
        name: 'Stantler',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Stantler!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    smeargle: {
        id: 235,
        name: 'Smeargle',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Smeargle!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    tyrogue: {
        id: 236,
        name: 'Tyrogue',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Tyrogue!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    hitmontop: {
        id: 237,
        name: 'Hitmontop',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Hitmontop!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    smoochum: {
        id: 238,
        name: 'Smoochum',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Smoochum!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    elekid: {
        id: 239,
        name: 'Elekid',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Elekid!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    magby: {
        id: 240,
        name: 'Magby',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Magby!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    miltank: {
        id: 241,
        name: 'Miltank',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Miltank!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    blissey: {
        id: 242,
        name: 'Blissey',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Blissey!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    raikou: {
        id: 243,
        name: 'Raikou',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Raikou!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    entei: {
        id: 244,
        name: 'Entei',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Entei!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    suicune: {
        id: 245,
        name: 'Suicune',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Suicune!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    larvitar: {
        id: 246,
        name: 'Larvitar',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Larvitar!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    pupitar: {
        id: 247,
        name: 'Pupitar',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Pupitar!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    tyranitar: {
        id: 248,
        name: 'Tyranitar',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Tyranitar!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */]
    },
    lugia: {
        id: 249,
        name: 'Lugia',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Lugia!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        originalSpriteSize: 64
    },
    hooh: {
        id: 250,
        name: 'Ho-Oh',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ho-Oh!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        originalSpriteSize: 64,
    },
    celebi: {
        id: 251,
        name: 'Celebi',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Celebi!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    // Generation 3
    treecko: {
        id: 252,
        name: 'Treecko',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Treecko!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    grovyle: {
        id: 253,
        name: 'Grovyle',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Grovyle!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    sceptile: {
        id: 254,
        name: 'Sceptile',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Sceptile!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    torchic: {
        id: 255,
        name: 'Torchic',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Torchic!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    combusken: {
        id: 256,
        name: 'Combusken',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Combusken!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    blaziken: {
        id: 257,
        name: 'Blaziken',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Blaziken!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    mudkip: {
        id: 258,
        name: 'Mudkip',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Mudkip!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    marshtomp: {
        id: 259,
        name: 'Marshtomp',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Marshtomp!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    swampert: {
        id: 260,
        name: 'Swampert',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Swampert!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    poochyena: {
        id: 261,
        name: 'Poochyena',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Poochyena!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    mightyena: {
        id: 262,
        name: 'Mightyena',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Mightyena!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    zigzagoon: {
        id: 263,
        name: 'Zigzagoon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Zigzagoon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    linoone: {
        id: 264,
        name: 'Linoone',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Linoone!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    wurmple: {
        id: 265,
        name: 'Wurmple',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Wurmple!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    silcoon: {
        id: 266,
        name: 'Silcoon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Silcoon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    beautifly: {
        id: 267,
        name: 'Beautifly',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Beautifly!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    cascoon: {
        id: 268,
        name: 'Cascoon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Cascoon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    dustox: {
        id: 269,
        name: 'Dustox',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Dustox!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    lotad: {
        id: 270,
        name: 'Lotad',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Lotad!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    lombre: {
        id: 271,
        name: 'Lombre',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Lombre!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    ludicolo: {
        id: 272,
        name: 'Ludicolo',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Ludicolo!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    seedot: {
        id: 273,
        name: 'Seedot',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Seedot!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    nuzleaf: {
        id: 274,
        name: 'Nuzleaf',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Nuzleaf!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    shiftry: {
        id: 275,
        name: 'Shiftry',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Shiftry!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    taillow: {
        id: 276,
        name: 'Taillow',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Taillow!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    swellow: {
        id: 277,
        name: 'Swellow',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Swellow!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    wingull: {
        id: 278,
        name: 'Wingull',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Wingull!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    pelipper: {
        id: 279,
        name: 'Pelipper',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Pelipper!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    ralts: {
        id: 280,
        name: 'Ralts',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Ralts!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    kirlia: {
        id: 281,
        name: 'Kirlia',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Kirlia!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    gardevoir: {
        id: 282,
        name: 'Gardevoir',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Gardevoir!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    surskit: {
        id: 283,
        name: 'Surskit',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Surskit!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    masquerain: {
        id: 284,
        name: 'Masquerain',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Masquerain!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    shroomish: {
        id: 285,
        name: 'Shroomish',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Shroomish!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    breloom: {
        id: 286,
        name: 'Breloom',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Breloom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    slakoth: {
        id: 287,
        name: 'Slakoth',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Slakoth!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    vigoroth: {
        id: 288,
        name: 'Vigoroth',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Vigoroth!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    slaking: {
        id: 289,
        name: 'Slaking',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Slaking!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    nincada: {
        id: 290,
        name: 'Nincada',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Nincada!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    ninjask: {
        id: 291,
        name: 'Ninjask',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Ninjask!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    shedinja: {
        id: 292,
        name: 'Shedinja',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Shedinja!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    whismur: {
        id: 293,
        name: 'Whismur',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Whismur!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    loudred: {
        id: 294,
        name: 'Loudred',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Loudred!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    exploud: {
        id: 295,
        name: 'Exploud',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Exploud!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    makuhita: {
        id: 296,
        name: 'Makuhita',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Makuhita!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    hariyama: {
        id: 297,
        name: 'Hariyama',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Hariyama!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    azurill: {
        id: 298,
        name: 'Azurill',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Azurill!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    nosepass: {
        id: 299,
        name: 'Nosepass',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Nosepass!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    skitty: {
        id: 300,
        name: 'Skitty',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Skitty!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    delcatty: {
        id: 301,
        name: 'Delcatty',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Delcatty!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    sableye: {
        id: 302,
        name: 'Sableye',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Sableye!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    mawile: {
        id: 303,
        name: 'Mawile',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Mawile!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    aron: {
        id: 304,
        name: 'Aron',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Aron!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    lairon: {
        id: 305,
        name: 'Lairon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Lairon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    aggron: {
        id: 306,
        name: 'Aggron',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Aggron!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    meditite: {
        id: 307,
        name: 'Meditite',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Meditite!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    medicham: {
        id: 308,
        name: 'Medicham',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Medicham!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    electrike: {
        id: 309,
        name: 'Electrike',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Electrike!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    manectric: {
        id: 310,
        name: 'Manectric',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Manectric!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    plusle: {
        id: 311,
        name: 'Plusle',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Plusle!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    minun: {
        id: 312,
        name: 'Minun',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Minun!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    volbeat: {
        id: 313,
        name: 'Volbeat',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Volbeat!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    illumise: {
        id: 314,
        name: 'Illumise',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Illumise!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    roselia: {
        id: 315,
        name: 'Roselia',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Roselia!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    gulpin: {
        id: 316,
        name: 'Gulpin',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Gulpin!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    swalot: {
        id: 317,
        name: 'Swalot',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Swalot!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    carvanha: {
        id: 318,
        name: 'Carvanha',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Carvanha!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    sharpedo: {
        id: 319,
        name: 'Sharpedo',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Sharpedo!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    wailmer: {
        id: 320,
        name: 'Wailmer',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Wailmer!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    wailord: {
        id: 321,
        name: 'Wailord',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Wailord!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        originalSpriteSize: 64,
    },
    numel: {
        id: 322,
        name: 'Numel',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Numel!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    camerupt: {
        id: 323,
        name: 'Camerupt',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Camerupt!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    torkoal: {
        id: 324,
        name: 'Torkoal',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Torkoal!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    spoink: {
        id: 325,
        name: 'Spoink',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Spoink!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    grumpig: {
        id: 326,
        name: 'Grumpig',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Grumpig!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    spinda: {
        id: 327,
        name: 'Spinda',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Spinda!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    trapinch: {
        id: 328,
        name: 'Trapinch',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Trapinch!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    vibrava: {
        id: 329,
        name: 'Vibrava',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Vibrava!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    flygon: {
        id: 330,
        name: 'Flygon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Flygon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    cacnea: {
        id: 331,
        name: 'Cacnea',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Cacnea!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    cacturne: {
        id: 332,
        name: 'Cacturne',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Cacturne!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    swablu: {
        id: 333,
        name: 'Swablu',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Swablu!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    altaria: {
        id: 334,
        name: 'Altaria',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Altaria!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    zangoose: {
        id: 335,
        name: 'Zangoose',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Zangoose!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    seviper: {
        id: 336,
        name: 'Seviper',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Seviper!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    lunatone: {
        id: 337,
        name: 'Lunatone',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Lunatone!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    solrock: {
        id: 338,
        name: 'Solrock',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Solrock!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    barboach: {
        id: 339,
        name: 'Barboach',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Barboach!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    whiscash: {
        id: 340,
        name: 'Whiscash',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Whiscash!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    corphish: {
        id: 341,
        name: 'Corphish',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Corphish!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    crawdaunt: {
        id: 342,
        name: 'Crawdaunt',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Crawdaunt!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    baltoy: {
        id: 343,
        name: 'Baltoy',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Baltoy!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    claydol: {
        id: 344,
        name: 'Claydol',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Claydol!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    lileep: {
        id: 345,
        name: 'Lileep',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Lileep!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    cradily: {
        id: 346,
        name: 'Cradily',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Cradily!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    anorith: {
        id: 347,
        name: 'Anorith',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Anorith!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    armaldo: {
        id: 348,
        name: 'Armaldo',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Armaldo!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    feebas: {
        id: 349,
        name: 'Feebas',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Feebas!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    milotic: {
        id: 350,
        name: 'Milotic',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Milotic!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    castform: {
        id: 351,
        name: 'Castform',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Castform!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    kecleon: {
        id: 352,
        name: 'Kecleon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Kecleon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    shuppet: {
        id: 353,
        name: 'Shuppet',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Shuppet!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    banette: {
        id: 354,
        name: 'Banette',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Banette!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    duskull: {
        id: 355,
        name: 'Duskull',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Duskull!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    dusclops: {
        id: 356,
        name: 'Dusclops',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Dusclops!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    tropius: {
        id: 357,
        name: 'Tropius',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Tropius!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    chimecho: {
        id: 358,
        name: 'Chimecho',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Chimecho!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    absol: {
        id: 359,
        name: 'Absol',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Absol!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    wynaut: {
        id: 360,
        name: 'Wynaut',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Wynaut!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    snorunt: {
        id: 361,
        name: 'Snorunt',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Snorunt!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    glalie: {
        id: 362,
        name: 'Glalie',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Glalie!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    spheal: {
        id: 363,
        name: 'Spheal',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Spheal!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    sealeo: {
        id: 364,
        name: 'Sealeo',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Sealeo!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    walrein: {
        id: 365,
        name: 'Walrein',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Walrein!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    clamperl: {
        id: 366,
        name: 'Clamperl',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Clamperl!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    huntail: {
        id: 367,
        name: 'Huntail',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Huntail!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    gorebyss: {
        id: 368,
        name: 'Gorebyss',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Gorebyss!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    relicanth: {
        id: 369,
        name: 'Relicanth',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Relicanth!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    luvdisc: {
        id: 370,
        name: 'Luvdisc',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Luvdisc!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    bagon: {
        id: 371,
        name: 'Bagon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Bagon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    shelgon: {
        id: 372,
        name: 'Shelgon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Shelgon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    salamence: {
        id: 373,
        name: 'Salamence',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Salamence!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    beldum: {
        id: 374,
        name: 'Beldum',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Beldum!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    metang: {
        id: 375,
        name: 'Metang',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Metang!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    metagross: {
        id: 376,
        name: 'Metagross',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Metagross!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    regirock: {
        id: 377,
        name: 'Regirock',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Regirock!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    regice: {
        id: 378,
        name: 'Regice',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Regice!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    registeel: {
        id: 379,
        name: 'Registeel',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Registeel!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    latias: {
        id: 380,
        name: 'Latias',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Latias!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    latios: {
        id: 381,
        name: 'Latios',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Latios!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    kyogre: {
        id: 382,
        name: 'Kyogre',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Kyogre!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        originalSpriteSize: 64,
    },
    groudon: {
        id: 383,
        name: 'Groudon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Groudon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        originalSpriteSize: 64,
    },
    rayquaza: {
        id: 384,
        name: 'Rayquaza',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Rayquaza!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        originalSpriteSize: 64,
    },
    jirachi: {
        id: 385,
        name: 'Jirachi',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Jirachi!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    deoxys: {
        id: 386,
        name: 'Deoxys',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Deoxys!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    deoxys_speed: {
        id: 386,
        name: 'Deoxys (Speed)',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Deoxys!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    deoxys_attack: {
        id: 386,
        name: 'Deoxys (Attack)',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Deoxys!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
    deoxys_defense: {
        id: 386,
        name: 'Deoxys (Defense)',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Deoxys!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
    },
};
function getAllPokemon() {
    return Object.keys(exports.POKEMON_DATA);
}
exports.getAllPokemon = getAllPokemon;
function getPokemonByGeneration(generation) {
    return Object.entries(exports.POKEMON_DATA)
        .filter(([_, config]) => config.generation === generation)
        .map(([key, _]) => key);
}
exports.getPokemonByGeneration = getPokemonByGeneration;
function getDefaultPokemon() {
    return 'bulbasaur';
}
exports.getDefaultPokemon = getDefaultPokemon;
function getRandomPokemonConfig() {
    var keys = Object.keys(exports.POKEMON_DATA);
    var randomKey = keys[Math.floor(Math.random() * keys.length)];
    return [randomKey, exports.POKEMON_DATA[randomKey]];
}
exports.getRandomPokemonConfig = getRandomPokemonConfig;


/***/ },

/***/ "./src/common/types.ts"
/*!*****************************!*\
  !*** ./src/common/types.ts ***!
  \*****************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PokemonGeneration = void 0;
var PokemonGeneration;
(function (PokemonGeneration) {
    PokemonGeneration[PokemonGeneration["Gen1"] = 1] = "Gen1";
    PokemonGeneration[PokemonGeneration["Gen2"] = 2] = "Gen2";
    PokemonGeneration[PokemonGeneration["Gen3"] = 3] = "Gen3";
})(PokemonGeneration = exports.PokemonGeneration || (exports.PokemonGeneration = {}));


/***/ },

/***/ "./src/panel/main.ts"
/*!***************************!*\
  !*** ./src/panel/main.ts ***!
  \***************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.app = void 0;
const pokemon_data_1 = __webpack_require__(/*! ../common/pokemon-data */ "./src/common/pokemon-data.ts");
const types_1 = __webpack_require__(/*! ../common/types */ "./src/common/types.ts");
const state = {
    userPokemon: null,
    basePokemonUri: '',
    intervalId: undefined,
    isHovered: false,
    idleUntil: 0,
};
const TICK_INTERVAL_MS = 100;
// How long a pokemon stands still after hatching or evolving. Without it the
// first tick would send it walking before the idle animation is ever seen.
const IDLE_AFTER_CHANGE_MS = 1500;
// Everything that decides how the sprite looks. XP updates arrive several times
// a second and change none of it, so the DOM work can be skipped.
function visualSignature(pokemon) {
    if (!pokemon) {
        return 'none';
    }
    return [
        pokemon.type,
        pokemon.level,
        pokemon.state,
        pokemon.scale,
        pokemon.isHovered ? 1 : 0,
        pokemon.isTransitionIn ? 1 : 0,
        pokemon.color,
    ].join('|');
}
let lastRenderedSignature = '';
const POKEBALL_SIZE = 32;
const POKEMON_BASE_SIZE = 50; // Increased by 20% (32 * 1.2 = 38.4)
function getPokemonSpritePath(pokemon, isIdle = false) {
    if (pokemon.level === 0) {
        return 'pokeball.gif';
    }
    const pokemonType = pokemon.type;
    const pokemonData = pokemon_data_1.POKEMON_DATA[pokemonType];
    if (!pokemonData) {
        return 'pokeball.gif';
    }
    let generation = 'gen1';
    if (pokemonData.generation === types_1.PokemonGeneration.Gen2) {
        generation = 'gen2';
    }
    else if (pokemonData.generation === types_1.PokemonGeneration.Gen3) {
        generation = 'gen3';
    }
    const colorPrefix = pokemon.color === "shiny" /* PokemonColor.shiny */ ? 'shiny' : 'default';
    const animation = isIdle ? `${colorPrefix}_idle_8fps.gif` : `${colorPrefix}_walk_8fps.gif`;
    return `${generation}/${pokemonType}/${animation}`;
}
function updatePokemonDisplay(pokemon) {
    const pokemonImg = document.getElementById('pokemon');
    const transitionImg = document.getElementById('transition');
    const pokemonContainer = document.getElementById('pokemon-container');
    const transitionContainer = document.getElementById('transition-container');
    if (!pokemonImg || !pokemonContainer) {
        return;
    }
    const signature = visualSignature(pokemon);
    if (signature === lastRenderedSignature) {
        return;
    }
    lastRenderedSignature = signature;
    if (!pokemon || pokemon.level === 0) {
        pokemonImg.src = `${state.basePokemonUri}/pokeball.gif`;
        pokemonImg.width = POKEBALL_SIZE;
        pokemonImg.height = POKEBALL_SIZE;
        pokemonImg.style.display = 'block';
        if (transitionImg) {
            transitionImg.style.display = 'none';
        }
        return;
    }
    const isIdle = pokemon.state === 'idle' || pokemon.isHovered;
    const spritePath = getPokemonSpritePath(pokemon, isIdle);
    pokemonImg.src = `${state.basePokemonUri}/${spritePath}`;
    pokemonImg.width = POKEMON_BASE_SIZE * pokemon.scale;
    pokemonImg.height = POKEMON_BASE_SIZE * pokemon.scale;
    pokemonImg.style.display = 'block';
    pokemonImg.style.imageRendering = 'pixelated';
    pokemonImg.style.transform = `scale(${pokemon.scale})`;
    if (pokemon.isTransitionIn && transitionImg && transitionContainer) {
        transitionImg.src = `${state.basePokemonUri}/${spritePath}`;
        transitionImg.width = POKEMON_BASE_SIZE * pokemon.scale;
        transitionImg.height = POKEMON_BASE_SIZE * pokemon.scale;
        transitionImg.style.display = 'block';
        transitionImg.style.imageRendering = 'pixelated';
        transitionImg.style.transform = `scale(${pokemon.scale})`;
        transitionContainer.style.display = 'block';
        setTimeout(() => {
            if (transitionImg) {
                transitionImg.style.display = 'none';
            }
            if (transitionContainer) {
                transitionContainer.style.display = 'none';
            }
            pokemon.isTransitionIn = false;
        }, 1000);
    }
    else {
        if (transitionImg) {
            transitionImg.style.display = 'none';
        }
        if (transitionContainer) {
            transitionContainer.style.display = 'none';
        }
    }
}
function tick() {
    const pokemon = state.userPokemon;
    if (!pokemon || pokemon.level === 0) {
        return;
    }
    // Let the idle animation play after a hatch or an evolution.
    if (Date.now() < state.idleUntil) {
        return;
    }
    // If hovered, do not move
    if (state.isHovered) {
        if (pokemon.state !== 'idle') {
            pokemon.state = 'idle';
            updatePokemonDisplay(pokemon);
        }
        return;
    }
    // If it was idle because of hover, switch back to walking
    if (pokemon.state === 'idle' && !state.isHovered) {
        pokemon.state = 'walking';
        updatePokemonDisplay(pokemon);
    }
    const containerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const speed = 1;
    const direction = pokemon.direction || 'right';
    let leftPosition = pokemon.leftPosition || 0;
    if (direction === 'right') {
        leftPosition += speed;
        if (leftPosition > containerWidth - POKEMON_BASE_SIZE * pokemon.scale) {
            pokemon.direction = 'left';
        }
    }
    else {
        leftPosition -= speed;
        if (leftPosition < 0) {
            pokemon.direction = 'right';
        }
    }
    pokemon.leftPosition = leftPosition;
    const movementContainer = document.getElementById('movement-container');
    if (movementContainer) {
        movementContainer.style.marginLeft = `${leftPosition}px`;
    }
    const pokemonImg = document.getElementById('pokemon');
    if (pokemonImg) {
        pokemonImg.style.transform = `scaleX(${direction === 'right' ? 1 : -1}) scale(${pokemon.scale})`;
    }
}
function startAnimation() {
    if (state.intervalId) {
        clearInterval(state.intervalId);
    }
    state.intervalId = window.setInterval(() => {
        tick();
    }, TICK_INTERVAL_MS);
}
function stopAnimation() {
    if (state.intervalId) {
        clearInterval(state.intervalId);
        state.intervalId = undefined;
    }
}
// The explorer view keeps its context when hidden, so without this the walking
// loop would keep running against a panel nobody is looking at.
function handleVisibilityChange() {
    if (document.hidden) {
        stopAnimation();
    }
    else if (!state.intervalId) {
        startAnimation();
    }
}
const app = ({ userPokemon, basePokemonUri, }) => {
    state.basePokemonUri = basePokemonUri;
    state.userPokemon = userPokemon;
    updatePokemonDisplay(userPokemon);
    startAnimation();
    document.addEventListener('visibilitychange', handleVisibilityChange);
    // Add hover event listeners
    const container = document.getElementById('container');
    if (container) {
        container.addEventListener('mouseenter', () => {
            state.isHovered = true;
            if (state.userPokemon && state.userPokemon.level > 0) {
                state.userPokemon.isHovered = true;
                updatePokemonDisplay(state.userPokemon);
            }
        });
        container.addEventListener('mouseleave', () => {
            state.isHovered = false;
            if (state.userPokemon && state.userPokemon.level > 0) {
                state.userPokemon.isHovered = false;
                state.userPokemon.state = 'walking';
                updatePokemonDisplay(state.userPokemon);
            }
        });
    }
    window.addEventListener('message', (event) => {
        var _a, _b, _c, _d;
        const { command, data } = event.data;
        switch (command) {
            case 'spawn-pokemon':
                if (data.userPokemon) {
                    state.userPokemon = data.userPokemon;
                    state.idleUntil = 0;
                    updatePokemonDisplay(data.userPokemon);
                }
                break;
            case 'update-pokemon': {
                if (data.userPokemon) {
                    const previousLevel = (_b = (_a = state.userPokemon) === null || _a === void 0 ? void 0 : _a.level) !== null && _b !== void 0 ? _b : 0;
                    const updatedPokemon = Object.assign(Object.assign({}, data.userPokemon), { leftPosition: ((_c = state.userPokemon) === null || _c === void 0 ? void 0 : _c.leftPosition) || 0, direction: ((_d = state.userPokemon) === null || _d === void 0 ? void 0 : _d.direction) || 'right', isHovered: state.isHovered });
                    state.userPokemon = updatedPokemon;
                    if (updatedPokemon.level > previousLevel) {
                        state.idleUntil = Date.now() + IDLE_AFTER_CHANGE_MS;
                    }
                    updatePokemonDisplay(updatedPokemon);
                }
                break;
            }
        }
    });
};
exports.app = app;
window.pokechiApp = {
    app: exports.app,
};


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/panel/main.ts");
/******/ 	self.pokechiApp = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7Ozs7VUU1QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlY2hpQXBwLy4vc3JjL2NvbW1vbi9wb2tlbW9uLWRhdGEudHMiLCJ3ZWJwYWNrOi8vcG9rZWNoaUFwcC8uL3NyYy9jb21tb24vdHlwZXMudHMiLCJ3ZWJwYWNrOi8vcG9rZWNoaUFwcC8uL3NyYy9wYW5lbC9tYWluLnRzIiwid2VicGFjazovL3Bva2VjaGlBcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9rZWNoaUFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Bva2VjaGlBcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Bva2VjaGlBcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBva2Vtb25Db2xvciwgUG9rZW1vbkNvbmZpZywgUG9rZW1vbkdlbmVyYXRpb24sIFBva2Vtb25UeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQT0tFTU9OX0RBVEE6IHsgW2tleTogc3RyaW5nXTogUG9rZW1vbkNvbmZpZyB9ID0ge1xyXG4gIGJ1bGJhc2F1cjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiAnQnVsYmFzYXVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdCdWxiYXNhdXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGl2eXNhdXI6IHtcclxuICAgIGlkOiAyLFxyXG4gICAgbmFtZTogJ0l2eXNhdXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0l2eXNhdXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHZlbnVzYXVyOiB7XHJcbiAgICBpZDogMyxcclxuICAgIG5hbWU6ICdWZW51c2F1cicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnVmVudXNhdXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGNoYXJtYW5kZXI6IHtcclxuICAgIGlkOiA0LFxyXG4gICAgbmFtZTogJ0NoYXJtYW5kZXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0NoYXJtYW5kZXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGNoYXJtZWxlb246IHtcclxuICAgIGlkOiA1LFxyXG4gICAgbmFtZTogJ0NoYXJtZWxlb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0NoYXJtZWxlb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGNoYXJpemFyZDoge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBuYW1lOiAnQ2hhcml6YXJkJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdDaGFyaXphcmQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHNxdWlydGxlOiB7XHJcbiAgICBpZDogNyxcclxuICAgIG5hbWU6ICdTcXVpcnRsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnU3F1cml0bGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHdhcnRvcnRsZToge1xyXG4gICAgaWQ6IDgsXHJcbiAgICBuYW1lOiAnV2FydG9ydGxlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdXYXJ0b3J0bGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGJsYXN0b2lzZToge1xyXG4gICAgaWQ6IDksXHJcbiAgICBuYW1lOiAnQmxhc3RvaXNlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdCbGFzdG9pc2UhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGNhdGVycGllOiB7XHJcbiAgICBpZDogMTAsXHJcbiAgICBuYW1lOiAnQ2F0ZXJwaWUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0NhdGVycGllIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBtZXRhcG9kOiB7XHJcbiAgICBpZDogMTEsXHJcbiAgICBuYW1lOiAnTWV0YXBvZCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTWV0YXBvZCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgYnV0dGVyZnJlZToge1xyXG4gICAgaWQ6IDEyLFxyXG4gICAgbmFtZTogJ0J1dHRlcmZyZWUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0J1dHRlcmZyZWUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHdlZWRsZToge1xyXG4gICAgaWQ6IDEzLFxyXG4gICAgbmFtZTogJ1dlZWRsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnV2VlZGxlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBrYWt1bmE6IHtcclxuICAgIGlkOiAxNCxcclxuICAgIG5hbWU6ICdLYWt1bmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0tha3VuYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgYmVlZHJpbGw6IHtcclxuICAgIGlkOiAxNSxcclxuICAgIG5hbWU6ICdCZWVkcmlsbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnQmVlZHJpbGwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHBpZGdleToge1xyXG4gICAgaWQ6IDE2LFxyXG4gICAgbmFtZTogJ1BpZGdleScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUGlkZ2V5IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBwaWRnZW90dG86IHtcclxuICAgIGlkOiAxNyxcclxuICAgIG5hbWU6ICdQaWRnZW90dG8nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1BpZGdlb3R0byEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgcGlkZ2VvdDoge1xyXG4gICAgaWQ6IDE4LFxyXG4gICAgbmFtZTogJ1BpZGdlb3QnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1BpZGdlb3QhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHJhdHRhdGE6IHtcclxuICAgIGlkOiAxOSxcclxuICAgIG5hbWU6ICdSYXR0YXRhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdSYXR0YXRhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICByYXRpY2F0ZToge1xyXG4gICAgaWQ6IDIwLFxyXG4gICAgbmFtZTogJ1JhdGljYXRlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdSYXRpY2F0ZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgc3BlYXJvdzoge1xyXG4gICAgaWQ6IDIxLFxyXG4gICAgbmFtZTogJ1NwZWFyb3cnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1NwZWFyb3chJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGZlYXJvdzoge1xyXG4gICAgaWQ6IDIyLFxyXG4gICAgbmFtZTogJ0ZlYXJvdycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRmVhcm93IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBla2Fuczoge1xyXG4gICAgaWQ6IDIzLFxyXG4gICAgbmFtZTogJ0VrYW5zJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdFa2FucyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgYXJib2s6IHtcclxuICAgIGlkOiAyNCxcclxuICAgIG5hbWU6ICdBcmJvaycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnQXJib2shJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHBpa2FjaHU6IHtcclxuICAgIGlkOiAyNSxcclxuICAgIG5hbWU6ICdQaWthY2h1JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdQaWthY2h1IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICByYWljaHU6IHtcclxuICAgIGlkOiAyNixcclxuICAgIG5hbWU6ICdSYWljaHUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1JhaWNodSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgc2FuZHNocmV3OiB7XHJcbiAgICBpZDogMjcsXHJcbiAgICBuYW1lOiAnU2FuZHNocmV3JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdTYW5kc2hyZXchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHNhbmRzbGFzaDoge1xyXG4gICAgaWQ6IDI4LFxyXG4gICAgbmFtZTogJ1NhbmRzbGFzaCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnU2FuZHNsYXNoIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBuaWRvcmFuX2ZlbWFsZToge1xyXG4gICAgaWQ6IDI5LFxyXG4gICAgbmFtZTogJ05pZG9yYW7imYAnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ05pZG9yYW4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIG5pZG9yaW5hOiB7XHJcbiAgICBpZDogMzAsXHJcbiAgICBuYW1lOiAnTmlkb3JpbmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ05pZG9yaW5hIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBuaWRvcXVlZW46IHtcclxuICAgIGlkOiAzMSxcclxuICAgIG5hbWU6ICdOaWRvcXVlZW4nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ05pZG9xdWVlbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgbmlkb3Jhbl9tYWxlOiB7XHJcbiAgICBpZDogMzIsXHJcbiAgICBuYW1lOiAnTmlkb3JhbuKZgicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTmlkb3JhbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgbmlkb3Jpbm86IHtcclxuICAgIGlkOiAzMyxcclxuICAgIG5hbWU6ICdOaWRvcmlubycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTmlkb3Jpbm8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIG5pZG9raW5nOiB7XHJcbiAgICBpZDogMzQsXHJcbiAgICBuYW1lOiAnTmlkb2tpbmcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ05pZG9raW5nIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBjbGVmYWlyeToge1xyXG4gICAgaWQ6IDM1LFxyXG4gICAgbmFtZTogJ0NsZWZhaXJ5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdDbGVmYWlyeSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgY2xlZmFibGU6IHtcclxuICAgIGlkOiAzNixcclxuICAgIG5hbWU6ICdDbGVmYWJsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnQ2xlZmFibGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHZ1bHBpeDoge1xyXG4gICAgaWQ6IDM3LFxyXG4gICAgbmFtZTogJ1Z1bHBpeCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnVnVscGl4IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBuaW5ldGFsZXM6IHtcclxuICAgIGlkOiAzOCxcclxuICAgIG5hbWU6ICdOaW5ldGFsZXMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ05pbmV0YWxlcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgamlnZ2x5cHVmZjoge1xyXG4gICAgaWQ6IDM5LFxyXG4gICAgbmFtZTogJ0ppZ2dseXB1ZmYnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0ppZ2dseXB1ZmYhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHdpZ2dseXR1ZmY6IHtcclxuICAgIGlkOiA0MCxcclxuICAgIG5hbWU6ICdXaWdnbHl0dWZmJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdXaWdnbHl0dWZmIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICB6dWJhdDoge1xyXG4gICAgaWQ6IDQxLFxyXG4gICAgbmFtZTogJ1p1YmF0JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdadWJhdCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgZ29sYmF0OiB7XHJcbiAgICBpZDogNDIsXHJcbiAgICBuYW1lOiAnR29sYmF0JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdHb2xiYXQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIG9kZGlzaDoge1xyXG4gICAgaWQ6IDQzLFxyXG4gICAgbmFtZTogJ09kZGlzaCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnT2RkaXNoIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBnbG9vbToge1xyXG4gICAgaWQ6IDQ0LFxyXG4gICAgbmFtZTogJ0dsb29tJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdHbG9vbSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgdmlsZXBsdW1lOiB7XHJcbiAgICBpZDogNDUsXHJcbiAgICBuYW1lOiAnVmlsZXBsdW1lJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdWaWxlcGx1bWUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHBhcmFzOiB7XHJcbiAgICBpZDogNDYsXHJcbiAgICBuYW1lOiAnUGFyYXMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1BhcmFzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBwYXJhc2VjdDoge1xyXG4gICAgaWQ6IDQ3LFxyXG4gICAgbmFtZTogJ1BhcmFzZWN0JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdQYXJhc2VjdCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgdmVub25hdDoge1xyXG4gICAgaWQ6IDQ4LFxyXG4gICAgbmFtZTogJ1Zlbm9uYXQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1Zlbm9uYXQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHZlbm9tb3RoOiB7XHJcbiAgICBpZDogNDksXHJcbiAgICBuYW1lOiAnVmVub21vdGgnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1Zlbm9tb3RoIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBkaWdsZXR0OiB7XHJcbiAgICBpZDogNTAsXHJcbiAgICBuYW1lOiAnRGlnbGV0dCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRGlnbGV0dCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgZHVndHJpbzoge1xyXG4gICAgaWQ6IDUxLFxyXG4gICAgbmFtZTogJ0R1Z3RyaW8nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0R1Z3RyaW8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIG1lb3d0aDoge1xyXG4gICAgaWQ6IDUyLFxyXG4gICAgbmFtZTogJ01lb3d0aCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTWVvd3RoIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBwZXJzaWFuOiB7XHJcbiAgICBpZDogNTMsXHJcbiAgICBuYW1lOiAnUGVyc2lhbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUGVyc2lhbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgcHN5ZHVjazoge1xyXG4gICAgaWQ6IDU0LFxyXG4gICAgbmFtZTogJ1BzeWR1Y2snLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1BzeWR1Y2shJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGdvbGR1Y2s6IHtcclxuICAgIGlkOiA1NSxcclxuICAgIG5hbWU6ICdHb2xkdWNrJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdHb2xkdWNrIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBtYW5rZXk6IHtcclxuICAgIGlkOiA1NixcclxuICAgIG5hbWU6ICdNYW5rZXknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ01hbmtleSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgcHJpbWVhcGU6IHtcclxuICAgIGlkOiA1NyxcclxuICAgIG5hbWU6ICdQcmltZWFwZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUHJpbWVhcGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGdyb3dsaXRoZToge1xyXG4gICAgaWQ6IDU4LFxyXG4gICAgbmFtZTogJ0dyb3dsaXRoZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnR3Jvd2xpdGhlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBhcmNhbmluZToge1xyXG4gICAgaWQ6IDU5LFxyXG4gICAgbmFtZTogJ0FyY2FuaW5lJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdBcmNhbmluZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgcG9saXdhZzoge1xyXG4gICAgaWQ6IDYwLFxyXG4gICAgbmFtZTogJ1BvbGl3YWcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1BvbGl3YWchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHBvbGl3aGlybDoge1xyXG4gICAgaWQ6IDYxLFxyXG4gICAgbmFtZTogJ1BvbGl3aGlybCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUG9saXdoaXJsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBwb2xpd3JhdGg6IHtcclxuICAgIGlkOiA2MixcclxuICAgIG5hbWU6ICdQb2xpd3JhdGgnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1BvbGl3cmF0aCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgYWJyYToge1xyXG4gICAgaWQ6IDYzLFxyXG4gICAgbmFtZTogJ0FicmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0FicmEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGthZGFicmE6IHtcclxuICAgIGlkOiA2NCxcclxuICAgIG5hbWU6ICdLYWRhYnJhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdLYWRhYnJhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBhbGFrYXphbToge1xyXG4gICAgaWQ6IDY1LFxyXG4gICAgbmFtZTogJ0FsYWthemFtJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdBbGFrYXphbSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgbWFjaG9wOiB7XHJcbiAgICBpZDogNjYsXHJcbiAgICBuYW1lOiAnTWFjaG9wJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNYWNob3AhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIG1hY2hva2U6IHtcclxuICAgIGlkOiA2NyxcclxuICAgIG5hbWU6ICdNYWNob2tlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNYWNob2tlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBtYWNoYW1wOiB7XHJcbiAgICBpZDogNjgsXHJcbiAgICBuYW1lOiAnTWFjaGFtcCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnQWxha2F6YW0hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGJlbGxzcHJvdXQ6IHtcclxuICAgIGlkOiA2OSxcclxuICAgIG5hbWU6ICdCZWxsc3Byb3V0JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdCZWxsc3Byb3V0IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICB3ZWVwaW5iZWxsOiB7XHJcbiAgICBpZDogNzAsXHJcbiAgICBuYW1lOiAnV2VlcGluYmVsbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnV2VlcGluYmVsbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgdmljdHJlZWJlbDoge1xyXG4gICAgaWQ6IDcxLFxyXG4gICAgbmFtZTogJ1ZpY3RyZWViZWwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1ZpY3RyZWViZWwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHRlbnRhY29vbDoge1xyXG4gICAgaWQ6IDcyLFxyXG4gICAgbmFtZTogJ1RlbnRhY29vbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnVGVudGFjb29sIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICB0ZW50YWNydWVsOiB7XHJcbiAgICBpZDogNzMsXHJcbiAgICBuYW1lOiAnVGVudGFjcnVlbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnVGVudGFjcnVlbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgZ2VvZHVkZToge1xyXG4gICAgaWQ6IDc0LFxyXG4gICAgbmFtZTogJ0dlb2R1ZGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0dlb2R1ZGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGdyYXZlbGVyOiB7XHJcbiAgICBpZDogNzUsXHJcbiAgICBuYW1lOiAnR3JhdmVsZXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0dyYXZlbGVyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBnb2xlbToge1xyXG4gICAgaWQ6IDc2LFxyXG4gICAgbmFtZTogJ0dvbGVtJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdHb2xlbSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgcG9ueXRhOiB7XHJcbiAgICBpZDogNzcsXHJcbiAgICBuYW1lOiAnUG9ueXRhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdQb255dGEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHJhcGlkYXNoOiB7XHJcbiAgICBpZDogNzgsXHJcbiAgICBuYW1lOiAnUmFwaWRhc2gnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1JhcGlkYXNoIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBzbG93cG9rZToge1xyXG4gICAgaWQ6IDc5LFxyXG4gICAgbmFtZTogJ1Nsb3dwb2tlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdTbG93cG9rZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgc2xvd2Jybzoge1xyXG4gICAgaWQ6IDgwLFxyXG4gICAgbmFtZTogJ1Nsb3dicm8nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1Nsb3dicm8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIG1hZ25lbWl0ZToge1xyXG4gICAgaWQ6IDgxLFxyXG4gICAgbmFtZTogJ01hZ25lbWl0ZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTWFnbmVtaXRlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBtYWduZXRvbjoge1xyXG4gICAgaWQ6IDgyLFxyXG4gICAgbmFtZTogJ01hZ25ldG9uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNYWduZXRvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgZmFyZmV0Y2hkOiB7XHJcbiAgICBpZDogODMsXHJcbiAgICBuYW1lOiAnRmFyZmV0Y2hcXCdkJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdGYXJmZXRjaFxcJ2QhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGRvZHVvOiB7XHJcbiAgICBpZDogODQsXHJcbiAgICBuYW1lOiAnRG9kdW8nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0RvZHVvIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBkb2RyaW86IHtcclxuICAgIGlkOiA4NSxcclxuICAgIG5hbWU6ICdEb2RyaW8nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0RvZHJpbyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgc2VlbDoge1xyXG4gICAgaWQ6IDg2LFxyXG4gICAgbmFtZTogJ1NlZWwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1NlZWwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGRld2dvbmc6IHtcclxuICAgIGlkOiA4NyxcclxuICAgIG5hbWU6ICdEZXdnb25nJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdEZXdnb25nIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBncmltZXI6IHtcclxuICAgIGlkOiA4OCxcclxuICAgIG5hbWU6ICdHcmltZXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0dyaW1lciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgbXVrOiB7XHJcbiAgICBpZDogODksXHJcbiAgICBuYW1lOiAnTXVrJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNdWshJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHNoZWxsZGVyOiB7XHJcbiAgICBpZDogOTAsXHJcbiAgICBuYW1lOiAnU2hlbGxkZXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1NoZWxsZGVyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBjbG95c3Rlcjoge1xyXG4gICAgaWQ6IDkxLFxyXG4gICAgbmFtZTogJ0Nsb3lzdGVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdDbG95c3RlciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgZ2FzdGx5OiB7XHJcbiAgICBpZDogOTIsXHJcbiAgICBuYW1lOiAnR2FzdGx5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdHYXN0bHkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGhhdW50ZXI6IHtcclxuICAgIGlkOiA5MyxcclxuICAgIG5hbWU6ICdIYXVudGVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdIYXVudGVyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBnZW5nYXI6IHtcclxuICAgIGlkOiA5NCxcclxuICAgIG5hbWU6ICdHZW5nYXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0dlbmdhciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgb25peDoge1xyXG4gICAgaWQ6IDk1LFxyXG4gICAgbmFtZTogJ09uaXgnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ09uaXghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGRyb3d6ZWU6IHtcclxuICAgIGlkOiA5NixcclxuICAgIG5hbWU6ICdEcm93emVlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdEcm93emVlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBoeXBubzoge1xyXG4gICAgaWQ6IDk3LFxyXG4gICAgbmFtZTogJ0h5cG5vJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdIeXBubyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAga3JhYmJ5OiB7XHJcbiAgICBpZDogOTgsXHJcbiAgICBuYW1lOiAnS3JhYmJ5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdLcmFiYnkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGtpbmdsZXI6IHtcclxuICAgIGlkOiA5OSxcclxuICAgIG5hbWU6ICdLaW5nbGVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdLaW5nbGVyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICB2b2x0b3JiOiB7XHJcbiAgICBpZDogMTAwLFxyXG4gICAgbmFtZTogJ1ZvbHRvcmInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1ZvbHRvcmIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGVsZWN0cm9kZToge1xyXG4gICAgaWQ6IDEwMSxcclxuICAgIG5hbWU6ICdFbGVjdHJvZGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0VsZWN0cm9kZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgZXhlZ2djdXRlOiB7XHJcbiAgICBpZDogMTAyLFxyXG4gICAgbmFtZTogJ0V4ZWdnY3V0ZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRXhlZ2djdXRlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBleGVnZ3V0b3I6IHtcclxuICAgIGlkOiAxMDMsXHJcbiAgICBuYW1lOiAnRXhlZ2d1dG9yJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdFeGVnZ3V0b3IhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGN1Ym9uZToge1xyXG4gICAgaWQ6IDEwNCxcclxuICAgIG5hbWU6ICdDdWJvbmUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0N1Ym9uZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgbWFyb3dhazoge1xyXG4gICAgaWQ6IDEwNSxcclxuICAgIG5hbWU6ICdNYXJvd2FrJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNYXJvd2FrIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBoaXRtb25sZWU6IHtcclxuICAgIGlkOiAxMDYsXHJcbiAgICBuYW1lOiAnSGl0bW9ubGVlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdIaXRtb25sZWUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGhpdG1vbmNoYW46IHtcclxuICAgIGlkOiAxMDcsXHJcbiAgICBuYW1lOiAnSGl0bW9uY2hhbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnSGl0bW9uY2hhbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgbGlja2l0dW5nOiB7XHJcbiAgICBpZDogMTA4LFxyXG4gICAgbmFtZTogJ0xpY2tpdHVuZycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTGlja2l0dW5nIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBrb2ZmaW5nOiB7XHJcbiAgICBpZDogMTA5LFxyXG4gICAgbmFtZTogJ0tvZmZpbmcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0tvZmZpbmchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHdlZXppbmc6IHtcclxuICAgIGlkOiAxMTAsXHJcbiAgICBuYW1lOiAnV2VlemluZycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnV2VlemluZyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgcmh5aG9ybjoge1xyXG4gICAgaWQ6IDExMSxcclxuICAgIG5hbWU6ICdSaHlob3JuJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdSaHlob3JuIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICByaHlkb246IHtcclxuICAgIGlkOiAxMTIsXHJcbiAgICBuYW1lOiAnUmh5ZG9uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdSaHlkb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGNoYW5zZXk6IHtcclxuICAgIGlkOiAxMTMsXHJcbiAgICBuYW1lOiAnQ2hhbnNleScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnQ2hhbnNleSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgdGFuZ2VsYToge1xyXG4gICAgaWQ6IDExNCxcclxuICAgIG5hbWU6ICdUYW5nZWxhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdUYW5nZWxhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBrYW5nYXNraGFuOiB7XHJcbiAgICBpZDogMTE1LFxyXG4gICAgbmFtZTogJ0thbmdhc2toYW4nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0thbmdhc2toYW4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGhvcnNlYToge1xyXG4gICAgaWQ6IDExNixcclxuICAgIG5hbWU6ICdIb3JzZWEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0hvcnNlYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgc2VhZHJhOiB7XHJcbiAgICBpZDogMTE3LFxyXG4gICAgbmFtZTogJ1NlYWRyYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnU2VhZHJhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBnb2xkZWVuOiB7XHJcbiAgICBpZDogMTE4LFxyXG4gICAgbmFtZTogJ0dvbGRlZW4nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0dvbGRlZW4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHNlYWtpbmc6IHtcclxuICAgIGlkOiAxMTksXHJcbiAgICBuYW1lOiAnU2Vha2luZycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnU2Vha2luZyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgc3Rhcnl1OiB7XHJcbiAgICBpZDogMTIwLFxyXG4gICAgbmFtZTogJ1N0YXJ5dScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnU3Rhcnl1IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBzdGFybWllOiB7XHJcbiAgICBpZDogMTIxLFxyXG4gICAgbmFtZTogJ1N0YXJtaWUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1N0YXJtaWUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIG1ybWltZToge1xyXG4gICAgaWQ6IDEyMixcclxuICAgIG5hbWU6ICdNci4gTWltZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTXIuIE1pbWUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHNjeXRoZXI6IHtcclxuICAgIGlkOiAxMjMsXHJcbiAgICBuYW1lOiAnU2N5dGhlcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnU2N5dGhlciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAganlueDoge1xyXG4gICAgaWQ6IDEyNCxcclxuICAgIG5hbWU6ICdKeW54JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdKeW54IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBlbGVjdGFidXp6OiB7XHJcbiAgICBpZDogMTI1LFxyXG4gICAgbmFtZTogJ0VsZWN0YWJ1enonLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0VsZWN0YWJ1enohJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIG1hZ21hcjoge1xyXG4gICAgaWQ6IDEyNixcclxuICAgIG5hbWU6ICdNYWdtYXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ01hZ21hciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgcGluc2lyOiB7XHJcbiAgICBpZDogMTI3LFxyXG4gICAgbmFtZTogJ1BpbnNpcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUGluc2lyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICB0YXVyb3M6IHtcclxuICAgIGlkOiAxMjgsXHJcbiAgICBuYW1lOiAnVGF1cm9zJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdUYXVyb3MhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIG1hZ2lrYXJwOiB7XHJcbiAgICBpZDogMTI5LFxyXG4gICAgbmFtZTogJ01hZ2lrYXJwJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNYWdpa2FycCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgZ3lhcmFkb3M6IHtcclxuICAgIGlkOiAxMzAsXHJcbiAgICBuYW1lOiAnR3lhcmFkb3MnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0d5YXJhZG9zIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBsYXByYXM6IHtcclxuICAgIGlkOiAxMzEsXHJcbiAgICBuYW1lOiAnTGFwcmFzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdMYXByYXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGRpdHRvOiB7XHJcbiAgICBpZDogMTMyLFxyXG4gICAgbmFtZTogJ0RpdHRvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdEaXR0byEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgZWV2ZWU6IHtcclxuICAgIGlkOiAxMzMsXHJcbiAgICBuYW1lOiAnRWV2ZWUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0VldmVlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICB2YXBvcmVvbjoge1xyXG4gICAgaWQ6IDEzNCxcclxuICAgIG5hbWU6ICdWYXBvcmVvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnVmFwb3Jlb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGpvbHRlb246IHtcclxuICAgIGlkOiAxMzUsXHJcbiAgICBuYW1lOiAnSm9sdGVvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnSm9sdGVvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgZmxhcmVvbjoge1xyXG4gICAgaWQ6IDEzNixcclxuICAgIG5hbWU6ICdGbGFyZW9uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdGbGFyZW9uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBwb3J5Z29uOiB7XHJcbiAgICBpZDogMTM3LFxyXG4gICAgbmFtZTogJ1Bvcnlnb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1Bvcnlnb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIG9tYW55dGU6IHtcclxuICAgIGlkOiAxMzgsXHJcbiAgICBuYW1lOiAnT21hbnl0ZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnT21hbnl0ZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgb21hc3Rhcjoge1xyXG4gICAgaWQ6IDEzOSxcclxuICAgIG5hbWU6ICdPbWFzdGFyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdPbWFzdGFyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBrYWJ1dG86IHtcclxuICAgIGlkOiAxNDAsXHJcbiAgICBuYW1lOiAnS2FidXRvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdLYWJ1dG8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGthYnV0b3BzOiB7XHJcbiAgICBpZDogMTQxLFxyXG4gICAgbmFtZTogJ0thYnV0b3BzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdLYWJ1dG9wcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgYWVyb2RhY3R5bDoge1xyXG4gICAgaWQ6IDE0MixcclxuICAgIG5hbWU6ICdBZXJvZGFjdHlsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdBZXJvZGFjdHlsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBzbm9ybGF4OiB7XHJcbiAgICBpZDogMTQzLFxyXG4gICAgbmFtZTogJ1Nub3JsYXgnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1Nub3JsYXghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGFydGljdW5vOiB7XHJcbiAgICBpZDogMTQ0LFxyXG4gICAgbmFtZTogJ0FydGljdW5vJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdBcnRpY3VubyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgemFwZG9zOiB7XHJcbiAgICBpZDogMTQ1LFxyXG4gICAgbmFtZTogJ1phcGRvcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnWmFwZG9zIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBtb2x0cmVzOiB7XHJcbiAgICBpZDogMTQ2LFxyXG4gICAgbmFtZTogJ01vbHRyZXMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ01vbHRyZXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGRyYXRpbmk6IHtcclxuICAgIGlkOiAxNDcsXHJcbiAgICBuYW1lOiAnRHJhdGluaScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRHJhdGluaSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgZHJhZ29uYWlyOiB7XHJcbiAgICBpZDogMTQ4LFxyXG4gICAgbmFtZTogJ0RyYWdvbmFpcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRHJhZ29uYWlyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBkcmFnb25pdGU6IHtcclxuICAgIGlkOiAxNDksXHJcbiAgICBuYW1lOiAnRHJhZ29uaXRlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdEcmFnb25pdGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIG1ld3R3bzoge1xyXG4gICAgaWQ6IDE1MCxcclxuICAgIG5hbWU6ICdNZXd0d28nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ01ld3R3byEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgbWV3OiB7XHJcbiAgICBpZDogMTUxLFxyXG4gICAgbmFtZTogJ01ldycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTWV3IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICAvLyBHZW5lcmF0aW9uIDJcclxuICBjaGlrb3JpdGE6IHtcclxuICAgIGlkOiAxNTIsXHJcbiAgICBuYW1lOiAnQ2hpa29yaXRhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdDaGlrb3JpdGEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGJheWxlZWY6IHtcclxuICAgIGlkOiAxNTMsXHJcbiAgICBuYW1lOiAnQmF5bGVlZicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnQmF5bGVlZiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgbWVnYW5pdW06IHtcclxuICAgIGlkOiAxNTQsXHJcbiAgICBuYW1lOiAnTWVnYW5pdW0nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ01lZ2FuaXVtIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBjeW5kYXF1aWw6IHtcclxuICAgIGlkOiAxNTUsXHJcbiAgICBuYW1lOiAnQ3luZGFxdWlsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdDeW5kYXF1aWwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHF1aWxhdmE6IHtcclxuICAgIGlkOiAxNTYsXHJcbiAgICBuYW1lOiAnUXVpbGF2YScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnUXVpbGF2YSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgdHlwaGxvc2lvbjoge1xyXG4gICAgaWQ6IDE1NyxcclxuICAgIG5hbWU6ICdUeXBobG9zaW9uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdUeXBobG9zaW9uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICB0b3RvZGlsZToge1xyXG4gICAgaWQ6IDE1OCxcclxuICAgIG5hbWU6ICdUb3RvZGlsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVG90b2RpbGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGNyb2NvbmF3OiB7XHJcbiAgICBpZDogMTU5LFxyXG4gICAgbmFtZTogJ0Nyb2NvbmF3JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdDcm9jb25hdyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgZmVyYWxpZ2F0cjoge1xyXG4gICAgaWQ6IDE2MCxcclxuICAgIG5hbWU6ICdGZXJhbGlnYXRyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdGZXJhbGlnYXRyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBzZW50cmV0OiB7XHJcbiAgICBpZDogMTYxLFxyXG4gICAgbmFtZTogJ1NlbnRyZXQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1NlbnRyZXQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGZ1cnJldDoge1xyXG4gICAgaWQ6IDE2MixcclxuICAgIG5hbWU6ICdGdXJyZXQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0Z1cnJldCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgaG9vdGhvb3Q6IHtcclxuICAgIGlkOiAxNjMsXHJcbiAgICBuYW1lOiAnSG9vdGhvb3QnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0hvb3Rob290IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBub2N0b3dsOiB7XHJcbiAgICBpZDogMTY0LFxyXG4gICAgbmFtZTogJ05vY3Rvd2wnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ05vY3Rvd2whJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGxlZHliYToge1xyXG4gICAgaWQ6IDE2NSxcclxuICAgIG5hbWU6ICdMZWR5YmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0xlZHliYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgbGVkaWFuOiB7XHJcbiAgICBpZDogMTY2LFxyXG4gICAgbmFtZTogJ0xlZGlhbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnTGVkaWFuIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBzcGluYXJhazoge1xyXG4gICAgaWQ6IDE2NyxcclxuICAgIG5hbWU6ICdTcGluYXJhaycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU3BpbmFyYWshJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGFyaWFkb3M6IHtcclxuICAgIGlkOiAxNjgsXHJcbiAgICBuYW1lOiAnQXJpYWRvcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnQXJpYWRvcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgY3JvYmF0OiB7XHJcbiAgICBpZDogMTY5LFxyXG4gICAgbmFtZTogJ0Nyb2JhdCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnQ3JvYmF0IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBjaGluY2hvdToge1xyXG4gICAgaWQ6IDE3MCxcclxuICAgIG5hbWU6ICdDaGluY2hvdScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnQ2hpbmNob3UhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGxhbnR1cm46IHtcclxuICAgIGlkOiAxNzEsXHJcbiAgICBuYW1lOiAnTGFudHVybicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnTGFudHVybiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgcGljaHU6IHtcclxuICAgIGlkOiAxNzIsXHJcbiAgICBuYW1lOiAnUGljaHUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1BpY2h1IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBjbGVmZmE6IHtcclxuICAgIGlkOiAxNzMsXHJcbiAgICBuYW1lOiAnQ2xlZmZhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdDbGVmZmEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGlnZ2x5YnVmZjoge1xyXG4gICAgaWQ6IDE3NCxcclxuICAgIG5hbWU6ICdJZ2dseWJ1ZmYnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0lnZ2x5YnVmZiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgdG9nZXBpOiB7XHJcbiAgICBpZDogMTc1LFxyXG4gICAgbmFtZTogJ1RvZ2VwaScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVG9nZXBpIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICB0b2dldGljOiB7XHJcbiAgICBpZDogMTc2LFxyXG4gICAgbmFtZTogJ1RvZ2V0aWMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1RvZ2V0aWMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIG5hdHU6IHtcclxuICAgIGlkOiAxNzcsXHJcbiAgICBuYW1lOiAnTmF0dScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnTmF0dSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgeGF0dToge1xyXG4gICAgaWQ6IDE3OCxcclxuICAgIG5hbWU6ICdYYXR1JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdYYXR1IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBtYXJlZXA6IHtcclxuICAgIGlkOiAxNzksXHJcbiAgICBuYW1lOiAnTWFyZWVwJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdNYXJlZXAhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGZsYWFmZnk6IHtcclxuICAgIGlkOiAxODAsXHJcbiAgICBuYW1lOiAnRmxhYWZmeScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnRmxhYWZmeSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgYW1waGFyb3M6IHtcclxuICAgIGlkOiAxODEsXHJcbiAgICBuYW1lOiAnQW1waGFyb3MnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0FtcGhhcm9zIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBiZWxsb3Nzb206IHtcclxuICAgIGlkOiAxODIsXHJcbiAgICBuYW1lOiAnQmVsbG9zc29tJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdCZWxsb3Nzb20hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIG1hcmlsbDoge1xyXG4gICAgaWQ6IDE4MyxcclxuICAgIG5hbWU6ICdNYXJpbGwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ01hcmlsbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgYXp1bWFyaWxsOiB7XHJcbiAgICBpZDogMTg0LFxyXG4gICAgbmFtZTogJ0F6dW1hcmlsbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnQXp1bWFyaWxsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBzdWRvd29vZG86IHtcclxuICAgIGlkOiAxODUsXHJcbiAgICBuYW1lOiAnU3Vkb3dvb2RvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdTdWRvd29vZG8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHBvbGl0b2VkOiB7XHJcbiAgICBpZDogMTg2LFxyXG4gICAgbmFtZTogJ1BvbGl0b2VkJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdQb2xpdG9lZCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgaG9wcGlwOiB7XHJcbiAgICBpZDogMTg3LFxyXG4gICAgbmFtZTogJ0hvcHBpcCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnSG9wcGlwIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBza2lwbG9vbToge1xyXG4gICAgaWQ6IDE4OCxcclxuICAgIG5hbWU6ICdTa2lwbG9vbScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU2tpcGxvb20hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGp1bXBsdWZmOiB7XHJcbiAgICBpZDogMTg5LFxyXG4gICAgbmFtZTogJ0p1bXBsdWZmJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdKdW1wbHVmZiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgYWlwb206IHtcclxuICAgIGlkOiAxOTAsXHJcbiAgICBuYW1lOiAnQWlwb20nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0FpcG9tIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBzdW5rZXJuOiB7XHJcbiAgICBpZDogMTkxLFxyXG4gICAgbmFtZTogJ1N1bmtlcm4nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1N1bmtlcm4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHN1bmZsb3JhOiB7XHJcbiAgICBpZDogMTkyLFxyXG4gICAgbmFtZTogJ1N1bmZsb3JhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdTdW5mbG9yYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgeWFubWE6IHtcclxuICAgIGlkOiAxOTMsXHJcbiAgICBuYW1lOiAnWWFubWEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1lhbm1hIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICB3b29wZXI6IHtcclxuICAgIGlkOiAxOTQsXHJcbiAgICBuYW1lOiAnV29vcGVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdXb29wZXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHF1YWdzaXJlOiB7XHJcbiAgICBpZDogMTk1LFxyXG4gICAgbmFtZTogJ1F1YWdzaXJlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdRdWFnc2lyZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgZXNwZW9uOiB7XHJcbiAgICBpZDogMTk2LFxyXG4gICAgbmFtZTogJ0VzcGVvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnRXNwZW9uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICB1bWJyZW9uOiB7XHJcbiAgICBpZDogMTk3LFxyXG4gICAgbmFtZTogJ1VtYnJlb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1VtYnJlb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIG11cmtyb3c6IHtcclxuICAgIGlkOiAxOTgsXHJcbiAgICBuYW1lOiAnTXVya3JvdycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnTXVya3JvdyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgc2xvd2tpbmc6IHtcclxuICAgIGlkOiAxOTksXHJcbiAgICBuYW1lOiAnU2xvd2tpbmcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Nsb3draW5nIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBtaXNkcmVhdnVzOiB7XHJcbiAgICBpZDogMjAwLFxyXG4gICAgbmFtZTogJ01pc2RyZWF2dXMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ01pc2RyZWF2dXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHdvYmJ1ZmZldDoge1xyXG4gICAgaWQ6IDIwMixcclxuICAgIG5hbWU6ICdXb2JidWZmZXQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1dvYmJ1ZmZldCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgZ2lyYWZhcmlnOiB7XHJcbiAgICBpZDogMjAzLFxyXG4gICAgbmFtZTogJ0dpcmFmYXJpZycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnR2lyYWZhcmlnIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBwaW5lY286IHtcclxuICAgIGlkOiAyMDQsXHJcbiAgICBuYW1lOiAnUGluZWNvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdQaW5lY28hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGZvcnJldHJlc3M6IHtcclxuICAgIGlkOiAyMDUsXHJcbiAgICBuYW1lOiAnRm9ycmV0cmVzcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnRm9ycmV0cmVzcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgZHVuc3BhcmNlOiB7XHJcbiAgICBpZDogMjA2LFxyXG4gICAgbmFtZTogJ0R1bnNwYXJjZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnRHVuc3BhcmNlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBnbGlnYXI6IHtcclxuICAgIGlkOiAyMDcsXHJcbiAgICBuYW1lOiAnR2xpZ2FyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdHbGlnYXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHN0ZWVsaXg6IHtcclxuICAgIGlkOiAyMDgsXHJcbiAgICBuYW1lOiAnU3RlZWxpeCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU3RlZWxpeCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXHJcbiAgfSxcclxuICBzbnViYnVsbDoge1xyXG4gICAgaWQ6IDIwOSxcclxuICAgIG5hbWU6ICdTbnViYnVsbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU251YmJ1bGwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGdyYW5idWxsOiB7XHJcbiAgICBpZDogMjEwLFxyXG4gICAgbmFtZTogJ0dyYW5idWxsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdHcmFuYnVsbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgcXdpbGZpc2g6IHtcclxuICAgIGlkOiAyMTEsXHJcbiAgICBuYW1lOiAnUXdpbGZpc2gnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1F3aWxmaXNoIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBzY2l6b3I6IHtcclxuICAgIGlkOiAyMTIsXHJcbiAgICBuYW1lOiAnU2Npem9yJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdTY2l6b3IhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHNodWNrbGU6IHtcclxuICAgIGlkOiAyMTMsXHJcbiAgICBuYW1lOiAnU2h1Y2tsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU2h1Y2tsZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgaGVyYWNyb3NzOiB7XHJcbiAgICBpZDogMjE0LFxyXG4gICAgbmFtZTogJ0hlcmFjcm9zcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnSGVyYWNyb3NzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBzbmVhc2VsOiB7XHJcbiAgICBpZDogMjE1LFxyXG4gICAgbmFtZTogJ1NuZWFzZWwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1NuZWFzZWwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHRlZGRpdXJzYToge1xyXG4gICAgaWQ6IDIxNixcclxuICAgIG5hbWU6ICdUZWRkaXVyc2EnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1RlZGRpdXJzYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgdXJzYXJpbmc6IHtcclxuICAgIGlkOiAyMTcsXHJcbiAgICBuYW1lOiAnVXJzYXJpbmcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vyc2FyaW5nIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBzbHVnbWE6IHtcclxuICAgIGlkOiAyMTgsXHJcbiAgICBuYW1lOiAnU2x1Z21hJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdTbHVnbWEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIG1hZ2NhcmdvOiB7XHJcbiAgICBpZDogMjE5LFxyXG4gICAgbmFtZTogJ01hZ2NhcmdvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdNYWdjYXJnbyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgc3dpbnViOiB7XHJcbiAgICBpZDogMjIwLFxyXG4gICAgbmFtZTogJ1N3aW51YicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU3dpbnViIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBwaWxvc3dpbmU6IHtcclxuICAgIGlkOiAyMjEsXHJcbiAgICBuYW1lOiAnUGlsb3N3aW5lJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdQaWxvc3dpbmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGNvcnNvbGE6IHtcclxuICAgIGlkOiAyMjIsXHJcbiAgICBuYW1lOiAnQ29yc29sYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnQ29yc29sYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgcmVtb3JhaWQ6IHtcclxuICAgIGlkOiAyMjMsXHJcbiAgICBuYW1lOiAnUmVtb3JhaWQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1JlbW9yYWlkIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBvY3RpbGxlcnk6IHtcclxuICAgIGlkOiAyMjQsXHJcbiAgICBuYW1lOiAnT2N0aWxsZXJ5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdPY3RpbGxlcnkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGRlbGliaXJkOiB7XHJcbiAgICBpZDogMjI1LFxyXG4gICAgbmFtZTogJ0RlbGliaXJkJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdEZWxpYmlyZCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgbWFudGluZToge1xyXG4gICAgaWQ6IDIyNixcclxuICAgIG5hbWU6ICdNYW50aW5lJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdNYW50aW5lIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBza2FybW9yeToge1xyXG4gICAgaWQ6IDIyNyxcclxuICAgIG5hbWU6ICdTa2FybW9yeScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU2thcm1vcnkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGhvdW5kb3VyOiB7XHJcbiAgICBpZDogMjI4LFxyXG4gICAgbmFtZTogJ0hvdW5kb3VyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdIb3VuZG91ciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgaG91bmRvb206IHtcclxuICAgIGlkOiAyMjksXHJcbiAgICBuYW1lOiAnSG91bmRvb20nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0hvdW5kb29tIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBraW5nZHJhOiB7XHJcbiAgICBpZDogMjMwLFxyXG4gICAgbmFtZTogJ0tpbmdkcmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0tpbmdkcmEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHBoYW5weToge1xyXG4gICAgaWQ6IDIzMSxcclxuICAgIG5hbWU6ICdQaGFucHknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1BoYW5weSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgZG9ucGhhbjoge1xyXG4gICAgaWQ6IDIzMixcclxuICAgIG5hbWU6ICdEb25waGFuJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdEb25waGFuIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBwb3J5Z29uMjoge1xyXG4gICAgaWQ6IDIzMyxcclxuICAgIG5hbWU6ICdQb3J5Z29uMicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnUG9yeWdvbjIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHN0YW50bGVyOiB7XHJcbiAgICBpZDogMjM0LFxyXG4gICAgbmFtZTogJ1N0YW50bGVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdTdGFudGxlciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgc21lYXJnbGU6IHtcclxuICAgIGlkOiAyMzUsXHJcbiAgICBuYW1lOiAnU21lYXJnbGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1NtZWFyZ2xlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICB0eXJvZ3VlOiB7XHJcbiAgICBpZDogMjM2LFxyXG4gICAgbmFtZTogJ1R5cm9ndWUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1R5cm9ndWUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGhpdG1vbnRvcDoge1xyXG4gICAgaWQ6IDIzNyxcclxuICAgIG5hbWU6ICdIaXRtb250b3AnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0hpdG1vbnRvcCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgc21vb2NodW06IHtcclxuICAgIGlkOiAyMzgsXHJcbiAgICBuYW1lOiAnU21vb2NodW0nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Ntb29jaHVtIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBlbGVraWQ6IHtcclxuICAgIGlkOiAyMzksXHJcbiAgICBuYW1lOiAnRWxla2lkJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdFbGVraWQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIG1hZ2J5OiB7XHJcbiAgICBpZDogMjQwLFxyXG4gICAgbmFtZTogJ01hZ2J5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdNYWdieSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgbWlsdGFuazoge1xyXG4gICAgaWQ6IDI0MSxcclxuICAgIG5hbWU6ICdNaWx0YW5rJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdNaWx0YW5rIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBibGlzc2V5OiB7XHJcbiAgICBpZDogMjQyLFxyXG4gICAgbmFtZTogJ0JsaXNzZXknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0JsaXNzZXkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIHJhaWtvdToge1xyXG4gICAgaWQ6IDI0MyxcclxuICAgIG5hbWU6ICdSYWlrb3UnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1JhaWtvdSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgZW50ZWk6IHtcclxuICAgIGlkOiAyNDQsXHJcbiAgICBuYW1lOiAnRW50ZWknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0VudGVpIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICBzdWljdW5lOiB7XHJcbiAgICBpZDogMjQ1LFxyXG4gICAgbmFtZTogJ1N1aWN1bmUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1N1aWN1bmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGxhcnZpdGFyOiB7XHJcbiAgICBpZDogMjQ2LFxyXG4gICAgbmFtZTogJ0xhcnZpdGFyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdMYXJ2aXRhciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XVxyXG4gIH0sXHJcbiAgcHVwaXRhcjoge1xyXG4gICAgaWQ6IDI0NyxcclxuICAgIG5hbWU6ICdQdXBpdGFyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdQdXBpdGFyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldXHJcbiAgfSxcclxuICB0eXJhbml0YXI6IHtcclxuICAgIGlkOiAyNDgsXHJcbiAgICBuYW1lOiAnVHlyYW5pdGFyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdUeXJhbml0YXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV1cclxuICB9LFxyXG4gIGx1Z2lhOiB7XHJcbiAgICBpZDogMjQ5LFxyXG4gICAgbmFtZTogJ0x1Z2lhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdMdWdpYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjRcclxuICB9LFxyXG4gIGhvb2g6IHtcclxuICAgIGlkOiAyNTAsXHJcbiAgICBuYW1lOiAnSG8tT2gnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0hvLU9oIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcclxuICB9LFxyXG4gIGNlbGViaToge1xyXG4gICAgaWQ6IDI1MSxcclxuICAgIG5hbWU6ICdDZWxlYmknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0NlbGViaSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIC8vIEdlbmVyYXRpb24gM1xyXG4gIHRyZWVja286IHtcclxuICAgIGlkOiAyNTIsXHJcbiAgICBuYW1lOiAnVHJlZWNrbycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnVHJlZWNrbyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGdyb3Z5bGU6IHtcclxuICAgIGlkOiAyNTMsXHJcbiAgICBuYW1lOiAnR3JvdnlsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnR3JvdnlsZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHNjZXB0aWxlOiB7XHJcbiAgICBpZDogMjU0LFxyXG4gICAgbmFtZTogJ1NjZXB0aWxlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTY2VwdGlsZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHRvcmNoaWM6IHtcclxuICAgIGlkOiAyNTUsXHJcbiAgICBuYW1lOiAnVG9yY2hpYycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnVG9yY2hpYyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGNvbWJ1c2tlbjoge1xyXG4gICAgaWQ6IDI1NixcclxuICAgIG5hbWU6ICdDb21idXNrZW4nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0NvbWJ1c2tlbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGJsYXppa2VuOiB7XHJcbiAgICBpZDogMjU3LFxyXG4gICAgbmFtZTogJ0JsYXppa2VuJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdCbGF6aWtlbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIG11ZGtpcDoge1xyXG4gICAgaWQ6IDI1OCxcclxuICAgIG5hbWU6ICdNdWRraXAnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ011ZGtpcCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIG1hcnNodG9tcDoge1xyXG4gICAgaWQ6IDI1OSxcclxuICAgIG5hbWU6ICdNYXJzaHRvbXAnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ01hcnNodG9tcCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHN3YW1wZXJ0OiB7XHJcbiAgICBpZDogMjYwLFxyXG4gICAgbmFtZTogJ1N3YW1wZXJ0JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTd2FtcGVydCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHBvb2NoeWVuYToge1xyXG4gICAgaWQ6IDI2MSxcclxuICAgIG5hbWU6ICdQb29jaHllbmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1Bvb2NoeWVuYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIG1pZ2h0eWVuYToge1xyXG4gICAgaWQ6IDI2MixcclxuICAgIG5hbWU6ICdNaWdodHllbmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ01pZ2h0eWVuYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHppZ3phZ29vbjoge1xyXG4gICAgaWQ6IDI2MyxcclxuICAgIG5hbWU6ICdaaWd6YWdvb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1ppZ3phZ29vbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGxpbm9vbmU6IHtcclxuICAgIGlkOiAyNjQsXHJcbiAgICBuYW1lOiAnTGlub29uZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTGlub29uZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHd1cm1wbGU6IHtcclxuICAgIGlkOiAyNjUsXHJcbiAgICBuYW1lOiAnV3VybXBsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnV3VybXBsZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHNpbGNvb246IHtcclxuICAgIGlkOiAyNjYsXHJcbiAgICBuYW1lOiAnU2lsY29vbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU2lsY29vbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGJlYXV0aWZseToge1xyXG4gICAgaWQ6IDI2NyxcclxuICAgIG5hbWU6ICdCZWF1dGlmbHknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0JlYXV0aWZseSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGNhc2Nvb246IHtcclxuICAgIGlkOiAyNjgsXHJcbiAgICBuYW1lOiAnQ2FzY29vbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQ2FzY29vbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGR1c3RveDoge1xyXG4gICAgaWQ6IDI2OSxcclxuICAgIG5hbWU6ICdEdXN0b3gnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0R1c3RveCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGxvdGFkOiB7XHJcbiAgICBpZDogMjcwLFxyXG4gICAgbmFtZTogJ0xvdGFkJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdMb3RhZCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGxvbWJyZToge1xyXG4gICAgaWQ6IDI3MSxcclxuICAgIG5hbWU6ICdMb21icmUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0xvbWJyZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGx1ZGljb2xvOiB7XHJcbiAgICBpZDogMjcyLFxyXG4gICAgbmFtZTogJ0x1ZGljb2xvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdMdWRpY29sbyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHNlZWRvdDoge1xyXG4gICAgaWQ6IDI3MyxcclxuICAgIG5hbWU6ICdTZWVkb3QnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NlZWRvdCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIG51emxlYWY6IHtcclxuICAgIGlkOiAyNzQsXHJcbiAgICBuYW1lOiAnTnV6bGVhZicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTnV6bGVhZiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHNoaWZ0cnk6IHtcclxuICAgIGlkOiAyNzUsXHJcbiAgICBuYW1lOiAnU2hpZnRyeScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU2hpZnRyeSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHRhaWxsb3c6IHtcclxuICAgIGlkOiAyNzYsXHJcbiAgICBuYW1lOiAnVGFpbGxvdycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnVGFpbGxvdyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHN3ZWxsb3c6IHtcclxuICAgIGlkOiAyNzcsXHJcbiAgICBuYW1lOiAnU3dlbGxvdycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU3dlbGxvdyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHdpbmd1bGw6IHtcclxuICAgIGlkOiAyNzgsXHJcbiAgICBuYW1lOiAnV2luZ3VsbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnV2luZ3VsbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHBlbGlwcGVyOiB7XHJcbiAgICBpZDogMjc5LFxyXG4gICAgbmFtZTogJ1BlbGlwcGVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdQZWxpcHBlciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHJhbHRzOiB7XHJcbiAgICBpZDogMjgwLFxyXG4gICAgbmFtZTogJ1JhbHRzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdSYWx0cyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGtpcmxpYToge1xyXG4gICAgaWQ6IDI4MSxcclxuICAgIG5hbWU6ICdLaXJsaWEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0tpcmxpYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGdhcmRldm9pcjoge1xyXG4gICAgaWQ6IDI4MixcclxuICAgIG5hbWU6ICdHYXJkZXZvaXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0dhcmRldm9pciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHN1cnNraXQ6IHtcclxuICAgIGlkOiAyODMsXHJcbiAgICBuYW1lOiAnU3Vyc2tpdCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU3Vyc2tpdCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIG1hc3F1ZXJhaW46IHtcclxuICAgIGlkOiAyODQsXHJcbiAgICBuYW1lOiAnTWFzcXVlcmFpbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTWFzcXVlcmFpbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHNocm9vbWlzaDoge1xyXG4gICAgaWQ6IDI4NSxcclxuICAgIG5hbWU6ICdTaHJvb21pc2gnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1Nocm9vbWlzaCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGJyZWxvb206IHtcclxuICAgIGlkOiAyODYsXHJcbiAgICBuYW1lOiAnQnJlbG9vbScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQnJlbG9vbSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHNsYWtvdGg6IHtcclxuICAgIGlkOiAyODcsXHJcbiAgICBuYW1lOiAnU2xha290aCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU2xha290aCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHZpZ29yb3RoOiB7XHJcbiAgICBpZDogMjg4LFxyXG4gICAgbmFtZTogJ1ZpZ29yb3RoJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdWaWdvcm90aCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHNsYWtpbmc6IHtcclxuICAgIGlkOiAyODksXHJcbiAgICBuYW1lOiAnU2xha2luZycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU2xha2luZyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIG5pbmNhZGE6IHtcclxuICAgIGlkOiAyOTAsXHJcbiAgICBuYW1lOiAnTmluY2FkYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTmluY2FkYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIG5pbmphc2s6IHtcclxuICAgIGlkOiAyOTEsXHJcbiAgICBuYW1lOiAnTmluamFzaycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTmluamFzayEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHNoZWRpbmphOiB7XHJcbiAgICBpZDogMjkyLFxyXG4gICAgbmFtZTogJ1NoZWRpbmphJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTaGVkaW5qYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHdoaXNtdXI6IHtcclxuICAgIGlkOiAyOTMsXHJcbiAgICBuYW1lOiAnV2hpc211cicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnV2hpc211ciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGxvdWRyZWQ6IHtcclxuICAgIGlkOiAyOTQsXHJcbiAgICBuYW1lOiAnTG91ZHJlZCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTG91ZHJlZCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGV4cGxvdWQ6IHtcclxuICAgIGlkOiAyOTUsXHJcbiAgICBuYW1lOiAnRXhwbG91ZCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnRXhwbG91ZCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIG1ha3VoaXRhOiB7XHJcbiAgICBpZDogMjk2LFxyXG4gICAgbmFtZTogJ01ha3VoaXRhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdNYWt1aGl0YSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGhhcml5YW1hOiB7XHJcbiAgICBpZDogMjk3LFxyXG4gICAgbmFtZTogJ0hhcml5YW1hJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdIYXJpeWFtYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGF6dXJpbGw6IHtcclxuICAgIGlkOiAyOTgsXHJcbiAgICBuYW1lOiAnQXp1cmlsbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQXp1cmlsbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIG5vc2VwYXNzOiB7XHJcbiAgICBpZDogMjk5LFxyXG4gICAgbmFtZTogJ05vc2VwYXNzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdOb3NlcGFzcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHNraXR0eToge1xyXG4gICAgaWQ6IDMwMCxcclxuICAgIG5hbWU6ICdTa2l0dHknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NraXR0eSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGRlbGNhdHR5OiB7XHJcbiAgICBpZDogMzAxLFxyXG4gICAgbmFtZTogJ0RlbGNhdHR5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdEZWxjYXR0eSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHNhYmxleWU6IHtcclxuICAgIGlkOiAzMDIsXHJcbiAgICBuYW1lOiAnU2FibGV5ZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU2FibGV5ZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIG1hd2lsZToge1xyXG4gICAgaWQ6IDMwMyxcclxuICAgIG5hbWU6ICdNYXdpbGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ01hd2lsZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGFyb246IHtcclxuICAgIGlkOiAzMDQsXHJcbiAgICBuYW1lOiAnQXJvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQXJvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGxhaXJvbjoge1xyXG4gICAgaWQ6IDMwNSxcclxuICAgIG5hbWU6ICdMYWlyb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0xhaXJvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGFnZ3Jvbjoge1xyXG4gICAgaWQ6IDMwNixcclxuICAgIG5hbWU6ICdBZ2dyb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0FnZ3JvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIG1lZGl0aXRlOiB7XHJcbiAgICBpZDogMzA3LFxyXG4gICAgbmFtZTogJ01lZGl0aXRlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdNZWRpdGl0ZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIG1lZGljaGFtOiB7XHJcbiAgICBpZDogMzA4LFxyXG4gICAgbmFtZTogJ01lZGljaGFtJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdNZWRpY2hhbSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGVsZWN0cmlrZToge1xyXG4gICAgaWQ6IDMwOSxcclxuICAgIG5hbWU6ICdFbGVjdHJpa2UnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0VsZWN0cmlrZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIG1hbmVjdHJpYzoge1xyXG4gICAgaWQ6IDMxMCxcclxuICAgIG5hbWU6ICdNYW5lY3RyaWMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ01hbmVjdHJpYyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHBsdXNsZToge1xyXG4gICAgaWQ6IDMxMSxcclxuICAgIG5hbWU6ICdQbHVzbGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1BsdXNsZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIG1pbnVuOiB7XHJcbiAgICBpZDogMzEyLFxyXG4gICAgbmFtZTogJ01pbnVuJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdNaW51biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHZvbGJlYXQ6IHtcclxuICAgIGlkOiAzMTMsXHJcbiAgICBuYW1lOiAnVm9sYmVhdCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnVm9sYmVhdCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGlsbHVtaXNlOiB7XHJcbiAgICBpZDogMzE0LFxyXG4gICAgbmFtZTogJ0lsbHVtaXNlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdJbGx1bWlzZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHJvc2VsaWE6IHtcclxuICAgIGlkOiAzMTUsXHJcbiAgICBuYW1lOiAnUm9zZWxpYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnUm9zZWxpYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGd1bHBpbjoge1xyXG4gICAgaWQ6IDMxNixcclxuICAgIG5hbWU6ICdHdWxwaW4nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0d1bHBpbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHN3YWxvdDoge1xyXG4gICAgaWQ6IDMxNyxcclxuICAgIG5hbWU6ICdTd2Fsb3QnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1N3YWxvdCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGNhcnZhbmhhOiB7XHJcbiAgICBpZDogMzE4LFxyXG4gICAgbmFtZTogJ0NhcnZhbmhhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdDYXJ2YW5oYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHNoYXJwZWRvOiB7XHJcbiAgICBpZDogMzE5LFxyXG4gICAgbmFtZTogJ1NoYXJwZWRvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTaGFycGVkbyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHdhaWxtZXI6IHtcclxuICAgIGlkOiAzMjAsXHJcbiAgICBuYW1lOiAnV2FpbG1lcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnV2FpbG1lciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIHdhaWxvcmQ6IHtcclxuICAgIGlkOiAzMjEsXHJcbiAgICBuYW1lOiAnV2FpbG9yZCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnV2FpbG9yZCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXHJcbiAgfSxcclxuICBudW1lbDoge1xyXG4gICAgaWQ6IDMyMixcclxuICAgIG5hbWU6ICdOdW1lbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTnVtZWwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBjYW1lcnVwdDoge1xyXG4gICAgaWQ6IDMyMyxcclxuICAgIG5hbWU6ICdDYW1lcnVwdCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQ2FtZXJ1cHQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICB0b3Jrb2FsOiB7XHJcbiAgICBpZDogMzI0LFxyXG4gICAgbmFtZTogJ1RvcmtvYWwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1RvcmtvYWwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBzcG9pbms6IHtcclxuICAgIGlkOiAzMjUsXHJcbiAgICBuYW1lOiAnU3BvaW5rJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTcG9pbmshJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBncnVtcGlnOiB7XHJcbiAgICBpZDogMzI2LFxyXG4gICAgbmFtZTogJ0dydW1waWcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0dydW1waWchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBzcGluZGE6IHtcclxuICAgIGlkOiAzMjcsXHJcbiAgICBuYW1lOiAnU3BpbmRhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTcGluZGEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICB0cmFwaW5jaDoge1xyXG4gICAgaWQ6IDMyOCxcclxuICAgIG5hbWU6ICdUcmFwaW5jaCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnVHJhcGluY2ghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICB2aWJyYXZhOiB7XHJcbiAgICBpZDogMzI5LFxyXG4gICAgbmFtZTogJ1ZpYnJhdmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1ZpYnJhdmEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBmbHlnb246IHtcclxuICAgIGlkOiAzMzAsXHJcbiAgICBuYW1lOiAnRmx5Z29uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdGbHlnb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBjYWNuZWE6IHtcclxuICAgIGlkOiAzMzEsXHJcbiAgICBuYW1lOiAnQ2FjbmVhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdDYWNuZWEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBjYWN0dXJuZToge1xyXG4gICAgaWQ6IDMzMixcclxuICAgIG5hbWU6ICdDYWN0dXJuZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQ2FjdHVybmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBzd2FibHU6IHtcclxuICAgIGlkOiAzMzMsXHJcbiAgICBuYW1lOiAnU3dhYmx1JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTd2FibHUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBhbHRhcmlhOiB7XHJcbiAgICBpZDogMzM0LFxyXG4gICAgbmFtZTogJ0FsdGFyaWEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0FsdGFyaWEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICB6YW5nb29zZToge1xyXG4gICAgaWQ6IDMzNSxcclxuICAgIG5hbWU6ICdaYW5nb29zZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnWmFuZ29vc2UhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBzZXZpcGVyOiB7XHJcbiAgICBpZDogMzM2LFxyXG4gICAgbmFtZTogJ1NldmlwZXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NldmlwZXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBsdW5hdG9uZToge1xyXG4gICAgaWQ6IDMzNyxcclxuICAgIG5hbWU6ICdMdW5hdG9uZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTHVuYXRvbmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBzb2xyb2NrOiB7XHJcbiAgICBpZDogMzM4LFxyXG4gICAgbmFtZTogJ1NvbHJvY2snLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NvbHJvY2shJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBiYXJib2FjaDoge1xyXG4gICAgaWQ6IDMzOSxcclxuICAgIG5hbWU6ICdCYXJib2FjaCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQmFyYm9hY2ghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICB3aGlzY2FzaDoge1xyXG4gICAgaWQ6IDM0MCxcclxuICAgIG5hbWU6ICdXaGlzY2FzaCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnV2hpc2Nhc2ghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBjb3JwaGlzaDoge1xyXG4gICAgaWQ6IDM0MSxcclxuICAgIG5hbWU6ICdDb3JwaGlzaCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQ29ycGhpc2ghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBjcmF3ZGF1bnQ6IHtcclxuICAgIGlkOiAzNDIsXHJcbiAgICBuYW1lOiAnQ3Jhd2RhdW50JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdDcmF3ZGF1bnQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBiYWx0b3k6IHtcclxuICAgIGlkOiAzNDMsXHJcbiAgICBuYW1lOiAnQmFsdG95JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdCYWx0b3khJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBjbGF5ZG9sOiB7XHJcbiAgICBpZDogMzQ0LFxyXG4gICAgbmFtZTogJ0NsYXlkb2wnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0NsYXlkb2whJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBsaWxlZXA6IHtcclxuICAgIGlkOiAzNDUsXHJcbiAgICBuYW1lOiAnTGlsZWVwJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdMaWxlZXAhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBjcmFkaWx5OiB7XHJcbiAgICBpZDogMzQ2LFxyXG4gICAgbmFtZTogJ0NyYWRpbHknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0NyYWRpbHkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBhbm9yaXRoOiB7XHJcbiAgICBpZDogMzQ3LFxyXG4gICAgbmFtZTogJ0Fub3JpdGgnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0Fub3JpdGghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBhcm1hbGRvOiB7XHJcbiAgICBpZDogMzQ4LFxyXG4gICAgbmFtZTogJ0FybWFsZG8nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0FybWFsZG8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBmZWViYXM6IHtcclxuICAgIGlkOiAzNDksXHJcbiAgICBuYW1lOiAnRmVlYmFzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdGZWViYXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBtaWxvdGljOiB7XHJcbiAgICBpZDogMzUwLFxyXG4gICAgbmFtZTogJ01pbG90aWMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ01pbG90aWMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBjYXN0Zm9ybToge1xyXG4gICAgaWQ6IDM1MSxcclxuICAgIG5hbWU6ICdDYXN0Zm9ybScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQ2FzdGZvcm0hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBrZWNsZW9uOiB7XHJcbiAgICBpZDogMzUyLFxyXG4gICAgbmFtZTogJ0tlY2xlb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0tlY2xlb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBzaHVwcGV0OiB7XHJcbiAgICBpZDogMzUzLFxyXG4gICAgbmFtZTogJ1NodXBwZXQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NodXBwZXQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBiYW5ldHRlOiB7XHJcbiAgICBpZDogMzU0LFxyXG4gICAgbmFtZTogJ0JhbmV0dGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0JhbmV0dGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBkdXNrdWxsOiB7XHJcbiAgICBpZDogMzU1LFxyXG4gICAgbmFtZTogJ0R1c2t1bGwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0R1c2t1bGwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBkdXNjbG9wczoge1xyXG4gICAgaWQ6IDM1NixcclxuICAgIG5hbWU6ICdEdXNjbG9wcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnRHVzY2xvcHMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICB0cm9waXVzOiB7XHJcbiAgICBpZDogMzU3LFxyXG4gICAgbmFtZTogJ1Ryb3BpdXMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1Ryb3BpdXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBjaGltZWNobzoge1xyXG4gICAgaWQ6IDM1OCxcclxuICAgIG5hbWU6ICdDaGltZWNobycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQ2hpbWVjaG8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBhYnNvbDoge1xyXG4gICAgaWQ6IDM1OSxcclxuICAgIG5hbWU6ICdBYnNvbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQWJzb2whJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICB3eW5hdXQ6IHtcclxuICAgIGlkOiAzNjAsXHJcbiAgICBuYW1lOiAnV3luYXV0JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdXeW5hdXQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBzbm9ydW50OiB7XHJcbiAgICBpZDogMzYxLFxyXG4gICAgbmFtZTogJ1Nub3J1bnQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1Nub3J1bnQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBnbGFsaWU6IHtcclxuICAgIGlkOiAzNjIsXHJcbiAgICBuYW1lOiAnR2xhbGllJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdHbGFsaWUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBzcGhlYWw6IHtcclxuICAgIGlkOiAzNjMsXHJcbiAgICBuYW1lOiAnU3BoZWFsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTcGhlYWwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBzZWFsZW86IHtcclxuICAgIGlkOiAzNjQsXHJcbiAgICBuYW1lOiAnU2VhbGVvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTZWFsZW8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICB3YWxyZWluOiB7XHJcbiAgICBpZDogMzY1LFxyXG4gICAgbmFtZTogJ1dhbHJlaW4nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1dhbHJlaW4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBjbGFtcGVybDoge1xyXG4gICAgaWQ6IDM2NixcclxuICAgIG5hbWU6ICdDbGFtcGVybCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQ2xhbXBlcmwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBodW50YWlsOiB7XHJcbiAgICBpZDogMzY3LFxyXG4gICAgbmFtZTogJ0h1bnRhaWwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0h1bnRhaWwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBnb3JlYnlzczoge1xyXG4gICAgaWQ6IDM2OCxcclxuICAgIG5hbWU6ICdHb3JlYnlzcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnR29yZWJ5c3MhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICByZWxpY2FudGg6IHtcclxuICAgIGlkOiAzNjksXHJcbiAgICBuYW1lOiAnUmVsaWNhbnRoJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdSZWxpY2FudGghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBsdXZkaXNjOiB7XHJcbiAgICBpZDogMzcwLFxyXG4gICAgbmFtZTogJ0x1dmRpc2MnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0x1dmRpc2MhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBiYWdvbjoge1xyXG4gICAgaWQ6IDM3MSxcclxuICAgIG5hbWU6ICdCYWdvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQmFnb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBzaGVsZ29uOiB7XHJcbiAgICBpZDogMzcyLFxyXG4gICAgbmFtZTogJ1NoZWxnb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NoZWxnb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBzYWxhbWVuY2U6IHtcclxuICAgIGlkOiAzNzMsXHJcbiAgICBuYW1lOiAnU2FsYW1lbmNlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTYWxhbWVuY2UhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBiZWxkdW06IHtcclxuICAgIGlkOiAzNzQsXHJcbiAgICBuYW1lOiAnQmVsZHVtJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdCZWxkdW0hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBtZXRhbmc6IHtcclxuICAgIGlkOiAzNzUsXHJcbiAgICBuYW1lOiAnTWV0YW5nJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdNZXRhbmchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBtZXRhZ3Jvc3M6IHtcclxuICAgIGlkOiAzNzYsXHJcbiAgICBuYW1lOiAnTWV0YWdyb3NzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdNZXRhZ3Jvc3MhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICByZWdpcm9jazoge1xyXG4gICAgaWQ6IDM3NyxcclxuICAgIG5hbWU6ICdSZWdpcm9jaycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnUmVnaXJvY2shJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICByZWdpY2U6IHtcclxuICAgIGlkOiAzNzgsXHJcbiAgICBuYW1lOiAnUmVnaWNlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdSZWdpY2UhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICByZWdpc3RlZWw6IHtcclxuICAgIGlkOiAzNzksXHJcbiAgICBuYW1lOiAnUmVnaXN0ZWVsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdSZWdpc3RlZWwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBsYXRpYXM6IHtcclxuICAgIGlkOiAzODAsXHJcbiAgICBuYW1lOiAnTGF0aWFzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdMYXRpYXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBsYXRpb3M6IHtcclxuICAgIGlkOiAzODEsXHJcbiAgICBuYW1lOiAnTGF0aW9zJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdMYXRpb3MhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBreW9ncmU6IHtcclxuICAgIGlkOiAzODIsXHJcbiAgICBuYW1lOiAnS3lvZ3JlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdLeW9ncmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxyXG4gIH0sXHJcbiAgZ3JvdWRvbjoge1xyXG4gICAgaWQ6IDM4MyxcclxuICAgIG5hbWU6ICdHcm91ZG9uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdHcm91ZG9uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcclxuICB9LFxyXG4gIHJheXF1YXphOiB7XHJcbiAgICBpZDogMzg0LFxyXG4gICAgbmFtZTogJ1JheXF1YXphJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdSYXlxdWF6YSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXHJcbiAgfSxcclxuICBqaXJhY2hpOiB7XHJcbiAgICBpZDogMzg1LFxyXG4gICAgbmFtZTogJ0ppcmFjaGknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0ppcmFjaGkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBkZW94eXM6IHtcclxuICAgIGlkOiAzODYsXHJcbiAgICBuYW1lOiAnRGVveHlzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdEZW94eXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBkZW94eXNfc3BlZWQ6IHtcclxuICAgIGlkOiAzODYsXHJcbiAgICBuYW1lOiAnRGVveHlzIChTcGVlZCknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0Rlb3h5cyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICB9LFxyXG4gIGRlb3h5c19hdHRhY2s6IHtcclxuICAgIGlkOiAzODYsXHJcbiAgICBuYW1lOiAnRGVveHlzIChBdHRhY2spJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdEZW94eXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxuICBkZW94eXNfZGVmZW5zZToge1xyXG4gICAgaWQ6IDM4NixcclxuICAgIG5hbWU6ICdEZW94eXMgKERlZmVuc2UpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdEZW94eXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQb2tlbW9uKCk6IFBva2Vtb25UeXBlW10ge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhQT0tFTU9OX0RBVEEpIGFzIFBva2Vtb25UeXBlW107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2tlbW9uQnlHZW5lcmF0aW9uKGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uKTogUG9rZW1vblR5cGVbXSB7XHJcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKFBPS0VNT05fREFUQSlcclxuICAgIC5maWx0ZXIoKFtfLCBjb25maWddKSA9PiBjb25maWcuZ2VuZXJhdGlvbiA9PT0gZ2VuZXJhdGlvbilcclxuICAgIC5tYXAoKFtrZXksIF9dKSA9PiBrZXkgYXMgUG9rZW1vblR5cGUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFBva2Vtb24oKTogUG9rZW1vblR5cGUge1xyXG4gIHJldHVybiAnYnVsYmFzYXVyJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbVBva2Vtb25Db25maWcoKTogW1Bva2Vtb25UeXBlLCBQb2tlbW9uQ29uZmlnXSB7XHJcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhQT0tFTU9OX0RBVEEpO1xyXG4gIHZhciByYW5kb21LZXkgPSBrZXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGtleXMubGVuZ3RoKV07XHJcbiAgcmV0dXJuIFtyYW5kb21LZXkgYXMgUG9rZW1vblR5cGUsIFBPS0VNT05fREFUQVtyYW5kb21LZXldXTtcclxufSIsImltcG9ydCB7IFBPS0VNT05fREFUQSB9IGZyb20gXCIuL3Bva2Vtb24tZGF0YVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gUG9rZW1vbkNvbG9yIHtcclxuICAgIGRlZmF1bHQgPSAnZGVmYXVsdCcsXHJcbiAgICBzaGlueSA9ICdzaGlueScsXHJcbiAgICBudWxsID0gJ251bGwnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQb2tlbW9uR2VuZXJhdGlvbiB7XHJcbiAgICBHZW4xID0gMSxcclxuICAgIEdlbjIgPSAyLFxyXG4gICAgR2VuMyA9IDMsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFBva2Vtb25UeXBlU3RyaW5nID0gc3RyaW5nICYga2V5b2YgdHlwZW9mIFBPS0VNT05fREFUQTtcclxuXHJcbmV4cG9ydCB0eXBlIFBva2Vtb25UeXBlID0gUG9rZW1vblR5cGVTdHJpbmc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBva2Vtb25Db25maWcge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uO1xyXG4gICAgY3J5OiBzdHJpbmc7XHJcbiAgICBwb3NzaWJsZUNvbG9yczogUG9rZW1vbkNvbG9yW107XHJcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU/OiBudW1iZXIsXHJcbn0iLCJpbXBvcnQgeyBVc2VyUG9rZW1vbiB9IGZyb20gJy4uL2V4dGVuc2lvbi90eXBlcydcclxuaW1wb3J0IHsgUE9LRU1PTl9EQVRBIH0gZnJvbSAnLi4vY29tbW9uL3Bva2Vtb24tZGF0YSdcclxuaW1wb3J0IHsgUG9rZW1vbkNvbG9yLCBQb2tlbW9uR2VuZXJhdGlvbiB9IGZyb20gJy4uL2NvbW1vbi90eXBlcydcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgIHBva2VjaGlBcHA6IHtcclxuICAgICAgYXBwOiAoY29uZmlnOiB7IGJhc2VQb2tlbW9uVXJpOiBzdHJpbmc7IHVzZXJQb2tlbW9uOiBVc2VyUG9rZW1vbiB8IG51bGwgfSkgPT4gdm9pZFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICB1c2VyUG9rZW1vbjogVXNlclBva2Vtb24gfCBudWxsXHJcbiAgYmFzZVBva2Vtb25Vcmk6IHN0cmluZ1xyXG4gIGludGVydmFsSWQ6IG51bWJlciB8IHVuZGVmaW5lZFxyXG4gIGlzSG92ZXJlZDogYm9vbGVhblxyXG4gIGlkbGVVbnRpbDogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IHN0YXRlOiBTdGF0ZSA9IHtcclxuICB1c2VyUG9rZW1vbjogbnVsbCxcclxuICBiYXNlUG9rZW1vblVyaTogJycsXHJcbiAgaW50ZXJ2YWxJZDogdW5kZWZpbmVkLFxyXG4gIGlzSG92ZXJlZDogZmFsc2UsXHJcbiAgaWRsZVVudGlsOiAwLFxyXG59XHJcblxyXG5jb25zdCBUSUNLX0lOVEVSVkFMX01TID0gMTAwXHJcblxyXG4vLyBIb3cgbG9uZyBhIHBva2Vtb24gc3RhbmRzIHN0aWxsIGFmdGVyIGhhdGNoaW5nIG9yIGV2b2x2aW5nLiBXaXRob3V0IGl0IHRoZVxyXG4vLyBmaXJzdCB0aWNrIHdvdWxkIHNlbmQgaXQgd2Fsa2luZyBiZWZvcmUgdGhlIGlkbGUgYW5pbWF0aW9uIGlzIGV2ZXIgc2Vlbi5cclxuY29uc3QgSURMRV9BRlRFUl9DSEFOR0VfTVMgPSAxNTAwXHJcblxyXG4vLyBFdmVyeXRoaW5nIHRoYXQgZGVjaWRlcyBob3cgdGhlIHNwcml0ZSBsb29rcy4gWFAgdXBkYXRlcyBhcnJpdmUgc2V2ZXJhbCB0aW1lc1xyXG4vLyBhIHNlY29uZCBhbmQgY2hhbmdlIG5vbmUgb2YgaXQsIHNvIHRoZSBET00gd29yayBjYW4gYmUgc2tpcHBlZC5cclxuZnVuY3Rpb24gdmlzdWFsU2lnbmF0dXJlKHBva2Vtb246IFVzZXJQb2tlbW9uIHwgbnVsbCk6IHN0cmluZyB7XHJcbiAgaWYgKCFwb2tlbW9uKSB7XHJcbiAgICByZXR1cm4gJ25vbmUnXHJcbiAgfVxyXG4gIHJldHVybiBbXHJcbiAgICBwb2tlbW9uLnR5cGUsXHJcbiAgICBwb2tlbW9uLmxldmVsLFxyXG4gICAgcG9rZW1vbi5zdGF0ZSxcclxuICAgIHBva2Vtb24uc2NhbGUsXHJcbiAgICBwb2tlbW9uLmlzSG92ZXJlZCA/IDEgOiAwLFxyXG4gICAgcG9rZW1vbi5pc1RyYW5zaXRpb25JbiA/IDEgOiAwLFxyXG4gICAgcG9rZW1vbi5jb2xvcixcclxuICBdLmpvaW4oJ3wnKVxyXG59XHJcblxyXG5sZXQgbGFzdFJlbmRlcmVkU2lnbmF0dXJlID0gJydcclxuY29uc3QgUE9LRUJBTExfU0laRSA9IDMyXHJcbmNvbnN0IFBPS0VNT05fQkFTRV9TSVpFID0gNTAgLy8gSW5jcmVhc2VkIGJ5IDIwJSAoMzIgKiAxLjIgPSAzOC40KVxyXG5cclxuZnVuY3Rpb24gZ2V0UG9rZW1vblNwcml0ZVBhdGgocG9rZW1vbjogVXNlclBva2Vtb24sIGlzSWRsZSA9IGZhbHNlKTogc3RyaW5nIHtcclxuICBpZiAocG9rZW1vbi5sZXZlbCA9PT0gMCkge1xyXG4gICAgcmV0dXJuICdwb2tlYmFsbC5naWYnXHJcbiAgfVxyXG4gIGNvbnN0IHBva2Vtb25UeXBlID0gcG9rZW1vbi50eXBlXHJcbiAgY29uc3QgcG9rZW1vbkRhdGEgPSBQT0tFTU9OX0RBVEFbcG9rZW1vblR5cGVdXHJcbiAgXHJcbiAgaWYgKCFwb2tlbW9uRGF0YSkge1xyXG4gICAgcmV0dXJuICdwb2tlYmFsbC5naWYnXHJcbiAgfVxyXG4gIFxyXG4gIGxldCBnZW5lcmF0aW9uID0gJ2dlbjEnXHJcbiAgaWYgKHBva2Vtb25EYXRhLmdlbmVyYXRpb24gPT09IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIpIHtcclxuICAgIGdlbmVyYXRpb24gPSAnZ2VuMidcclxuICB9IGVsc2UgaWYgKHBva2Vtb25EYXRhLmdlbmVyYXRpb24gPT09IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMpIHtcclxuICAgIGdlbmVyYXRpb24gPSAnZ2VuMydcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbG9yUHJlZml4ID0gcG9rZW1vbi5jb2xvciA9PT0gUG9rZW1vbkNvbG9yLnNoaW55ID8gJ3NoaW55JyA6ICdkZWZhdWx0J1xyXG4gIGNvbnN0IGFuaW1hdGlvbiA9IGlzSWRsZSA/IGAke2NvbG9yUHJlZml4fV9pZGxlXzhmcHMuZ2lmYCA6IGAke2NvbG9yUHJlZml4fV93YWxrXzhmcHMuZ2lmYFxyXG4gIHJldHVybiBgJHtnZW5lcmF0aW9ufS8ke3Bva2Vtb25UeXBlfS8ke2FuaW1hdGlvbn1gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBva2Vtb25EaXNwbGF5KHBva2Vtb246IFVzZXJQb2tlbW9uIHwgbnVsbCk6IHZvaWQge1xyXG4gIGNvbnN0IHBva2Vtb25JbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZW1vbicpIGFzIEhUTUxJbWFnZUVsZW1lbnRcclxuICBjb25zdCB0cmFuc2l0aW9uSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zaXRpb24nKSBhcyBIVE1MSW1hZ2VFbGVtZW50XHJcbiAgY29uc3QgcG9rZW1vbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlbW9uLWNvbnRhaW5lcicpXHJcbiAgY29uc3QgdHJhbnNpdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2l0aW9uLWNvbnRhaW5lcicpXHJcblxyXG4gIGlmICghcG9rZW1vbkltZyB8fCAhcG9rZW1vbkNvbnRhaW5lcikge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBjb25zdCBzaWduYXR1cmUgPSB2aXN1YWxTaWduYXR1cmUocG9rZW1vbilcclxuICBpZiAoc2lnbmF0dXJlID09PSBsYXN0UmVuZGVyZWRTaWduYXR1cmUpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBsYXN0UmVuZGVyZWRTaWduYXR1cmUgPSBzaWduYXR1cmVcclxuXHJcbiAgaWYgKCFwb2tlbW9uIHx8IHBva2Vtb24ubGV2ZWwgPT09IDApIHtcclxuICAgIHBva2Vtb25JbWcuc3JjID0gYCR7c3RhdGUuYmFzZVBva2Vtb25Vcml9L3Bva2ViYWxsLmdpZmBcclxuICAgIHBva2Vtb25JbWcud2lkdGggPSBQT0tFQkFMTF9TSVpFXHJcbiAgICBwb2tlbW9uSW1nLmhlaWdodCA9IFBPS0VCQUxMX1NJWkVcclxuICAgIHBva2Vtb25JbWcuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIGlmICh0cmFuc2l0aW9uSW1nKSB7XHJcbiAgICAgIHRyYW5zaXRpb25JbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBjb25zdCBpc0lkbGUgPSBwb2tlbW9uLnN0YXRlID09PSAnaWRsZScgfHwgcG9rZW1vbi5pc0hvdmVyZWRcclxuICBjb25zdCBzcHJpdGVQYXRoID0gZ2V0UG9rZW1vblNwcml0ZVBhdGgocG9rZW1vbiwgaXNJZGxlKVxyXG4gIHBva2Vtb25JbWcuc3JjID0gYCR7c3RhdGUuYmFzZVBva2Vtb25Vcml9LyR7c3ByaXRlUGF0aH1gXHJcbiAgcG9rZW1vbkltZy53aWR0aCA9IFBPS0VNT05fQkFTRV9TSVpFICogcG9rZW1vbi5zY2FsZVxyXG4gIHBva2Vtb25JbWcuaGVpZ2h0ID0gUE9LRU1PTl9CQVNFX1NJWkUgKiBwb2tlbW9uLnNjYWxlXHJcbiAgcG9rZW1vbkltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gIHBva2Vtb25JbWcuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJ1xyXG4gIHBva2Vtb25JbWcuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7cG9rZW1vbi5zY2FsZX0pYFxyXG5cclxuICBpZiAocG9rZW1vbi5pc1RyYW5zaXRpb25JbiAmJiB0cmFuc2l0aW9uSW1nICYmIHRyYW5zaXRpb25Db250YWluZXIpIHtcclxuICAgIHRyYW5zaXRpb25JbWcuc3JjID0gYCR7c3RhdGUuYmFzZVBva2Vtb25Vcml9LyR7c3ByaXRlUGF0aH1gXHJcbiAgICB0cmFuc2l0aW9uSW1nLndpZHRoID0gUE9LRU1PTl9CQVNFX1NJWkUgKiBwb2tlbW9uLnNjYWxlXHJcbiAgICB0cmFuc2l0aW9uSW1nLmhlaWdodCA9IFBPS0VNT05fQkFTRV9TSVpFICogcG9rZW1vbi5zY2FsZVxyXG4gICAgdHJhbnNpdGlvbkltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgdHJhbnNpdGlvbkltZy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9ICdwaXhlbGF0ZWQnXHJcbiAgICB0cmFuc2l0aW9uSW1nLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3Bva2Vtb24uc2NhbGV9KWBcclxuICAgIHRyYW5zaXRpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRyYW5zaXRpb25JbWcpIHtcclxuICAgICAgICB0cmFuc2l0aW9uSW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgfVxyXG4gICAgICBpZiAodHJhbnNpdGlvbkNvbnRhaW5lcikge1xyXG4gICAgICAgIHRyYW5zaXRpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICB9XHJcbiAgICAgIHBva2Vtb24uaXNUcmFuc2l0aW9uSW4gPSBmYWxzZVxyXG4gICAgfSwgMTAwMClcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKHRyYW5zaXRpb25JbWcpIHtcclxuICAgICAgdHJhbnNpdGlvbkltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcbiAgICBpZiAodHJhbnNpdGlvbkNvbnRhaW5lcikge1xyXG4gICAgICB0cmFuc2l0aW9uQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRpY2soKTogdm9pZCB7XHJcbiAgY29uc3QgcG9rZW1vbiA9IHN0YXRlLnVzZXJQb2tlbW9uXHJcbiAgaWYgKCFwb2tlbW9uIHx8IHBva2Vtb24ubGV2ZWwgPT09IDApIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgLy8gTGV0IHRoZSBpZGxlIGFuaW1hdGlvbiBwbGF5IGFmdGVyIGEgaGF0Y2ggb3IgYW4gZXZvbHV0aW9uLlxyXG4gIGlmIChEYXRlLm5vdygpIDwgc3RhdGUuaWRsZVVudGlsKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIC8vIElmIGhvdmVyZWQsIGRvIG5vdCBtb3ZlXHJcbiAgaWYgKHN0YXRlLmlzSG92ZXJlZCkge1xyXG4gICAgaWYgKHBva2Vtb24uc3RhdGUgIT09ICdpZGxlJykge1xyXG4gICAgICBwb2tlbW9uLnN0YXRlID0gJ2lkbGUnXHJcbiAgICAgIHVwZGF0ZVBva2Vtb25EaXNwbGF5KHBva2Vtb24pXHJcbiAgICB9XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIC8vIElmIGl0IHdhcyBpZGxlIGJlY2F1c2Ugb2YgaG92ZXIsIHN3aXRjaCBiYWNrIHRvIHdhbGtpbmdcclxuICBpZiAocG9rZW1vbi5zdGF0ZSA9PT0gJ2lkbGUnICYmICFzdGF0ZS5pc0hvdmVyZWQpIHtcclxuICAgIHBva2Vtb24uc3RhdGUgPSAnd2Fsa2luZydcclxuICAgIHVwZGF0ZVBva2Vtb25EaXNwbGF5KHBva2Vtb24pXHJcbiAgfVxyXG5cclxuICBjb25zdCBjb250YWluZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoXHJcbiAgY29uc3Qgc3BlZWQgPSAxXHJcbiAgY29uc3QgZGlyZWN0aW9uID0gcG9rZW1vbi5kaXJlY3Rpb24gfHwgJ3JpZ2h0J1xyXG4gIGxldCBsZWZ0UG9zaXRpb24gPSBwb2tlbW9uLmxlZnRQb3NpdGlvbiB8fCAwXHJcblxyXG4gIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcclxuICAgIGxlZnRQb3NpdGlvbiArPSBzcGVlZFxyXG4gICAgaWYgKGxlZnRQb3NpdGlvbiA+IGNvbnRhaW5lcldpZHRoIC0gUE9LRU1PTl9CQVNFX1NJWkUgKiBwb2tlbW9uLnNjYWxlKSB7XHJcbiAgICAgIHBva2Vtb24uZGlyZWN0aW9uID0gJ2xlZnQnXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGxlZnRQb3NpdGlvbiAtPSBzcGVlZFxyXG4gICAgaWYgKGxlZnRQb3NpdGlvbiA8IDApIHtcclxuICAgICAgcG9rZW1vbi5kaXJlY3Rpb24gPSAncmlnaHQnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwb2tlbW9uLmxlZnRQb3NpdGlvbiA9IGxlZnRQb3NpdGlvblxyXG5cclxuICBjb25zdCBtb3ZlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZlbWVudC1jb250YWluZXInKVxyXG4gIGlmIChtb3ZlbWVudENvbnRhaW5lcikge1xyXG4gICAgbW92ZW1lbnRDb250YWluZXIuc3R5bGUubWFyZ2luTGVmdCA9IGAke2xlZnRQb3NpdGlvbn1weGBcclxuICB9XHJcblxyXG4gIGNvbnN0IHBva2Vtb25JbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZW1vbicpIGFzIEhUTUxJbWFnZUVsZW1lbnRcclxuICBpZiAocG9rZW1vbkltZykge1xyXG4gICAgcG9rZW1vbkltZy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGVYKCR7ZGlyZWN0aW9uID09PSAncmlnaHQnID8gMSA6IC0xfSkgc2NhbGUoJHtwb2tlbW9uLnNjYWxlfSlgXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpOiB2b2lkIHtcclxuICBpZiAoc3RhdGUuaW50ZXJ2YWxJZCkge1xyXG4gICAgY2xlYXJJbnRlcnZhbChzdGF0ZS5pbnRlcnZhbElkKVxyXG4gIH1cclxuICBzdGF0ZS5pbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgIHRpY2soKVxyXG4gIH0sIFRJQ0tfSU5URVJWQUxfTVMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3BBbmltYXRpb24oKTogdm9pZCB7XHJcbiAgaWYgKHN0YXRlLmludGVydmFsSWQpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwoc3RhdGUuaW50ZXJ2YWxJZClcclxuICAgIHN0YXRlLmludGVydmFsSWQgPSB1bmRlZmluZWRcclxuICB9XHJcbn1cclxuXHJcbi8vIFRoZSBleHBsb3JlciB2aWV3IGtlZXBzIGl0cyBjb250ZXh0IHdoZW4gaGlkZGVuLCBzbyB3aXRob3V0IHRoaXMgdGhlIHdhbGtpbmdcclxuLy8gbG9vcCB3b3VsZCBrZWVwIHJ1bm5pbmcgYWdhaW5zdCBhIHBhbmVsIG5vYm9keSBpcyBsb29raW5nIGF0LlxyXG5mdW5jdGlvbiBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKCk6IHZvaWQge1xyXG4gIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcclxuICAgIHN0b3BBbmltYXRpb24oKVxyXG4gIH0gZWxzZSBpZiAoIXN0YXRlLmludGVydmFsSWQpIHtcclxuICAgIHN0YXJ0QW5pbWF0aW9uKClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhcHAgPSAoe1xyXG4gIHVzZXJQb2tlbW9uLFxyXG4gIGJhc2VQb2tlbW9uVXJpLFxyXG59OiB7XHJcbiAgdXNlclBva2Vtb246IFVzZXJQb2tlbW9uIHwgbnVsbFxyXG4gIGJhc2VQb2tlbW9uVXJpOiBzdHJpbmdcclxufSk6IHZvaWQgPT4ge1xyXG4gIHN0YXRlLmJhc2VQb2tlbW9uVXJpID0gYmFzZVBva2Vtb25VcmlcclxuICBzdGF0ZS51c2VyUG9rZW1vbiA9IHVzZXJQb2tlbW9uXHJcblxyXG4gIHVwZGF0ZVBva2Vtb25EaXNwbGF5KHVzZXJQb2tlbW9uKVxyXG4gIHN0YXJ0QW5pbWF0aW9uKClcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpXHJcblxyXG4gIC8vIEFkZCBob3ZlciBldmVudCBsaXN0ZW5lcnNcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcclxuICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgc3RhdGUuaXNIb3ZlcmVkID0gdHJ1ZVxyXG4gICAgICBpZiAoc3RhdGUudXNlclBva2Vtb24gJiYgc3RhdGUudXNlclBva2Vtb24ubGV2ZWwgPiAwKSB7XHJcbiAgICAgICAgc3RhdGUudXNlclBva2Vtb24uaXNIb3ZlcmVkID0gdHJ1ZVxyXG4gICAgICAgIHVwZGF0ZVBva2Vtb25EaXNwbGF5KHN0YXRlLnVzZXJQb2tlbW9uKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzSG92ZXJlZCA9IGZhbHNlXHJcbiAgICAgIGlmIChzdGF0ZS51c2VyUG9rZW1vbiAmJiBzdGF0ZS51c2VyUG9rZW1vbi5sZXZlbCA+IDApIHtcclxuICAgICAgICBzdGF0ZS51c2VyUG9rZW1vbi5pc0hvdmVyZWQgPSBmYWxzZVxyXG4gICAgICAgIHN0YXRlLnVzZXJQb2tlbW9uLnN0YXRlID0gJ3dhbGtpbmcnXHJcbiAgICAgICAgdXBkYXRlUG9rZW1vbkRpc3BsYXkoc3RhdGUudXNlclBva2Vtb24pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgeyBjb21tYW5kLCBkYXRhIH0gPSBldmVudC5kYXRhXHJcbiAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcclxuICAgICAgY2FzZSAnc3Bhd24tcG9rZW1vbic6XHJcbiAgICAgICAgaWYgKGRhdGEudXNlclBva2Vtb24pIHtcclxuICAgICAgICAgIHN0YXRlLnVzZXJQb2tlbW9uID0gZGF0YS51c2VyUG9rZW1vblxyXG4gICAgICAgICAgc3RhdGUuaWRsZVVudGlsID0gMFxyXG4gICAgICAgICAgdXBkYXRlUG9rZW1vbkRpc3BsYXkoZGF0YS51c2VyUG9rZW1vbilcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWtcclxuXHJcbiAgICAgIGNhc2UgJ3VwZGF0ZS1wb2tlbW9uJzoge1xyXG4gICAgICAgIGlmIChkYXRhLnVzZXJQb2tlbW9uKSB7XHJcbiAgICAgICAgICBjb25zdCBwcmV2aW91c0xldmVsID0gc3RhdGUudXNlclBva2Vtb24/LmxldmVsID8/IDBcclxuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQb2tlbW9uID0ge1xyXG4gICAgICAgICAgICAuLi5kYXRhLnVzZXJQb2tlbW9uLFxyXG4gICAgICAgICAgICBsZWZ0UG9zaXRpb246IHN0YXRlLnVzZXJQb2tlbW9uPy5sZWZ0UG9zaXRpb24gfHwgMCxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBzdGF0ZS51c2VyUG9rZW1vbj8uZGlyZWN0aW9uIHx8ICdyaWdodCcsXHJcbiAgICAgICAgICAgIGlzSG92ZXJlZDogc3RhdGUuaXNIb3ZlcmVkLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3RhdGUudXNlclBva2Vtb24gPSB1cGRhdGVkUG9rZW1vblxyXG5cclxuICAgICAgICAgIGlmICh1cGRhdGVkUG9rZW1vbi5sZXZlbCA+IHByZXZpb3VzTGV2ZWwpIHtcclxuICAgICAgICAgICAgc3RhdGUuaWRsZVVudGlsID0gRGF0ZS5ub3coKSArIElETEVfQUZURVJfQ0hBTkdFX01TXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdXBkYXRlUG9rZW1vbkRpc3BsYXkodXBkYXRlZFBva2Vtb24pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG53aW5kb3cucG9rZWNoaUFwcCA9IHtcclxuICBhcHAsXHJcbn1cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhbmVsL21haW4udHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9