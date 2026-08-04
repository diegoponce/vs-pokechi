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
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "poison" /* PokemonElementType.poison */],
    },
    ivysaur: {
        id: 2,
        name: 'Ivysaur',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Ivysaur!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "poison" /* PokemonElementType.poison */],
    },
    venusaur: {
        id: 3,
        name: 'Venusaur',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Venusaur!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "poison" /* PokemonElementType.poison */],
    },
    charmander: {
        id: 4,
        name: 'Charmander',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Charmander!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    charmeleon: {
        id: 5,
        name: 'Charmeleon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Charmeleon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    charizard: {
        id: 6,
        name: 'Charizard',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Charizard!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */, "flying" /* PokemonElementType.flying */],
    },
    squirtle: {
        id: 7,
        name: 'Squirtle',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Squritle!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    wartortle: {
        id: 8,
        name: 'Wartortle',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Wartortle!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    blastoise: {
        id: 9,
        name: 'Blastoise',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Blastoise!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    caterpie: {
        id: 10,
        name: 'Caterpie',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Caterpie!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */],
    },
    metapod: {
        id: 11,
        name: 'Metapod',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Metapod!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */],
    },
    butterfree: {
        id: 12,
        name: 'Butterfree',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Butterfree!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "flying" /* PokemonElementType.flying */],
    },
    weedle: {
        id: 13,
        name: 'Weedle',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Weedle!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "poison" /* PokemonElementType.poison */],
    },
    kakuna: {
        id: 14,
        name: 'Kakuna',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kakuna!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "poison" /* PokemonElementType.poison */],
    },
    beedrill: {
        id: 15,
        name: 'Beedrill',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Beedrill!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "poison" /* PokemonElementType.poison */],
    },
    pidgey: {
        id: 16,
        name: 'Pidgey',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Pidgey!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    pidgeotto: {
        id: 17,
        name: 'Pidgeotto',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Pidgeotto!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    pidgeot: {
        id: 18,
        name: 'Pidgeot',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Pidgeot!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    rattata: {
        id: 19,
        name: 'Rattata',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Rattata!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    raticate: {
        id: 20,
        name: 'Raticate',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Raticate!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    spearow: {
        id: 21,
        name: 'Spearow',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Spearow!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    fearow: {
        id: 22,
        name: 'Fearow',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Fearow!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    ekans: {
        id: 23,
        name: 'Ekans',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Ekans!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */],
    },
    arbok: {
        id: 24,
        name: 'Arbok',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Arbok!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */],
    },
    pikachu: {
        id: 25,
        name: 'Pikachu',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Pikachu!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    raichu: {
        id: 26,
        name: 'Raichu',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Raichu!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    sandshrew: {
        id: 27,
        name: 'Sandshrew',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Sandshrew!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */],
    },
    sandslash: {
        id: 28,
        name: 'Sandslash',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Sandslash!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */],
    },
    nidoran_female: {
        id: 29,
        name: 'Nidoran♀',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidoran!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */],
    },
    nidorina: {
        id: 30,
        name: 'Nidorina',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidorina!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */],
    },
    nidoqueen: {
        id: 31,
        name: 'Nidoqueen',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidoqueen!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */, "ground" /* PokemonElementType.ground */],
    },
    nidoran_male: {
        id: 32,
        name: 'Nidoran♂',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidoran!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */],
    },
    nidorino: {
        id: 33,
        name: 'Nidorino',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidorino!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */],
    },
    nidoking: {
        id: 34,
        name: 'Nidoking',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Nidoking!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */, "ground" /* PokemonElementType.ground */],
    },
    clefairy: {
        id: 35,
        name: 'Clefairy',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Clefairy!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    clefable: {
        id: 36,
        name: 'Clefable',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Clefable!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    vulpix: {
        id: 37,
        name: 'Vulpix',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Vulpix!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    ninetales: {
        id: 38,
        name: 'Ninetales',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Ninetales!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    jigglypuff: {
        id: 39,
        name: 'Jigglypuff',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Jigglypuff!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    wigglytuff: {
        id: 40,
        name: 'Wigglytuff',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Wigglytuff!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    zubat: {
        id: 41,
        name: 'Zubat',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Zubat!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */, "flying" /* PokemonElementType.flying */],
    },
    golbat: {
        id: 42,
        name: 'Golbat',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Golbat!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */, "flying" /* PokemonElementType.flying */],
    },
    oddish: {
        id: 43,
        name: 'Oddish',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Oddish!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "poison" /* PokemonElementType.poison */],
    },
    gloom: {
        id: 44,
        name: 'Gloom',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Gloom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "poison" /* PokemonElementType.poison */],
    },
    vileplume: {
        id: 45,
        name: 'Vileplume',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Vileplume!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "poison" /* PokemonElementType.poison */],
    },
    paras: {
        id: 46,
        name: 'Paras',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Paras!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "grass" /* PokemonElementType.grass */],
    },
    parasect: {
        id: 47,
        name: 'Parasect',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Parasect!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "grass" /* PokemonElementType.grass */],
    },
    venonat: {
        id: 48,
        name: 'Venonat',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Venonat!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "poison" /* PokemonElementType.poison */],
    },
    venomoth: {
        id: 49,
        name: 'Venomoth',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Venomoth!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "poison" /* PokemonElementType.poison */],
    },
    diglett: {
        id: 50,
        name: 'Diglett',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Diglett!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */],
    },
    dugtrio: {
        id: 51,
        name: 'Dugtrio',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dugtrio!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */],
    },
    meowth: {
        id: 52,
        name: 'Meowth',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Meowth!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    persian: {
        id: 53,
        name: 'Persian',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Persian!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    psyduck: {
        id: 54,
        name: 'Psyduck',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Psyduck!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    golduck: {
        id: 55,
        name: 'Golduck',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Golduck!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    mankey: {
        id: 56,
        name: 'Mankey',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Mankey!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fighting" /* PokemonElementType.fighting */],
    },
    primeape: {
        id: 57,
        name: 'Primeape',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Primeape!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fighting" /* PokemonElementType.fighting */],
    },
    growlithe: {
        id: 58,
        name: 'Growlithe',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Growlithe!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    arcanine: {
        id: 59,
        name: 'Arcanine',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Arcanine!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    poliwag: {
        id: 60,
        name: 'Poliwag',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Poliwag!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    poliwhirl: {
        id: 61,
        name: 'Poliwhirl',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Poliwhirl!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    poliwrath: {
        id: 62,
        name: 'Poliwrath',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Poliwrath!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "fighting" /* PokemonElementType.fighting */],
    },
    abra: {
        id: 63,
        name: 'Abra',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Abra!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    kadabra: {
        id: 64,
        name: 'Kadabra',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kadabra!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    alakazam: {
        id: 65,
        name: 'Alakazam',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Alakazam!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    machop: {
        id: 66,
        name: 'Machop',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Machop!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fighting" /* PokemonElementType.fighting */],
    },
    machoke: {
        id: 67,
        name: 'Machoke',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Machoke!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fighting" /* PokemonElementType.fighting */],
    },
    machamp: {
        id: 68,
        name: 'Machamp',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Alakazam!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fighting" /* PokemonElementType.fighting */],
    },
    bellsprout: {
        id: 69,
        name: 'Bellsprout',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Bellsprout!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "poison" /* PokemonElementType.poison */],
    },
    weepinbell: {
        id: 70,
        name: 'Weepinbell',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Weepinbell!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "poison" /* PokemonElementType.poison */],
    },
    victreebel: {
        id: 71,
        name: 'Victreebel',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Victreebel!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "poison" /* PokemonElementType.poison */],
    },
    tentacool: {
        id: 72,
        name: 'Tentacool',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Tentacool!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "poison" /* PokemonElementType.poison */],
    },
    tentacruel: {
        id: 73,
        name: 'Tentacruel',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Tentacruel!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "poison" /* PokemonElementType.poison */],
    },
    geodude: {
        id: 74,
        name: 'Geodude',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Geodude!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */, "ground" /* PokemonElementType.ground */],
    },
    graveler: {
        id: 75,
        name: 'Graveler',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Graveler!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */, "ground" /* PokemonElementType.ground */],
    },
    golem: {
        id: 76,
        name: 'Golem',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Golem!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */, "ground" /* PokemonElementType.ground */],
    },
    ponyta: {
        id: 77,
        name: 'Ponyta',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Ponyta!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    rapidash: {
        id: 78,
        name: 'Rapidash',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Rapidash!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    slowpoke: {
        id: 79,
        name: 'Slowpoke',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Slowpoke!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "psychic" /* PokemonElementType.psychic */],
    },
    slowbro: {
        id: 80,
        name: 'Slowbro',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Slowbro!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "psychic" /* PokemonElementType.psychic */],
    },
    magnemite: {
        id: 81,
        name: 'Magnemite',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Magnemite!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */, "steel" /* PokemonElementType.steel */],
    },
    magneton: {
        id: 82,
        name: 'Magneton',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Magneton!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */, "steel" /* PokemonElementType.steel */],
    },
    farfetchd: {
        id: 83,
        name: 'Farfetch\'d',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Farfetch\'d!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    doduo: {
        id: 84,
        name: 'Doduo',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Doduo!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    dodrio: {
        id: 85,
        name: 'Dodrio',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dodrio!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    seel: {
        id: 86,
        name: 'Seel',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Seel!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    dewgong: {
        id: 87,
        name: 'Dewgong',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dewgong!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "ice" /* PokemonElementType.ice */],
    },
    grimer: {
        id: 88,
        name: 'Grimer',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Grimer!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */],
    },
    muk: {
        id: 89,
        name: 'Muk',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Muk!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */],
    },
    shellder: {
        id: 90,
        name: 'Shellder',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Shellder!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    cloyster: {
        id: 91,
        name: 'Cloyster',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Cloyster!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "ice" /* PokemonElementType.ice */],
    },
    gastly: {
        id: 92,
        name: 'Gastly',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Gastly!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ghost" /* PokemonElementType.ghost */, "poison" /* PokemonElementType.poison */],
    },
    haunter: {
        id: 93,
        name: 'Haunter',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Haunter!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ghost" /* PokemonElementType.ghost */, "poison" /* PokemonElementType.poison */],
    },
    gengar: {
        id: 94,
        name: 'Gengar',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Gengar!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ghost" /* PokemonElementType.ghost */, "poison" /* PokemonElementType.poison */],
    },
    onix: {
        id: 95,
        name: 'Onix',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Onix!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */, "ground" /* PokemonElementType.ground */],
    },
    drowzee: {
        id: 96,
        name: 'Drowzee',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Drowzee!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    hypno: {
        id: 97,
        name: 'Hypno',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Hypno!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    krabby: {
        id: 98,
        name: 'Krabby',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Krabby!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    kingler: {
        id: 99,
        name: 'Kingler',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kingler!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    voltorb: {
        id: 100,
        name: 'Voltorb',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Voltorb!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    electrode: {
        id: 101,
        name: 'Electrode',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Electrode!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    exeggcute: {
        id: 102,
        name: 'Exeggcute',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Exeggcute!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "psychic" /* PokemonElementType.psychic */],
    },
    exeggutor: {
        id: 103,
        name: 'Exeggutor',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Exeggutor!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "psychic" /* PokemonElementType.psychic */],
    },
    cubone: {
        id: 104,
        name: 'Cubone',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Cubone!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */],
    },
    marowak: {
        id: 105,
        name: 'Marowak',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Marowak!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */],
    },
    hitmonlee: {
        id: 106,
        name: 'Hitmonlee',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Hitmonlee!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fighting" /* PokemonElementType.fighting */],
    },
    hitmonchan: {
        id: 107,
        name: 'Hitmonchan',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Hitmonchan!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fighting" /* PokemonElementType.fighting */],
    },
    lickitung: {
        id: 108,
        name: 'Lickitung',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Lickitung!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    koffing: {
        id: 109,
        name: 'Koffing',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Koffing!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */],
    },
    weezing: {
        id: 110,
        name: 'Weezing',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Weezing!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */],
    },
    rhyhorn: {
        id: 111,
        name: 'Rhyhorn',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Rhyhorn!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */, "rock" /* PokemonElementType.rock */],
    },
    rhydon: {
        id: 112,
        name: 'Rhydon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Rhydon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */, "rock" /* PokemonElementType.rock */],
    },
    chansey: {
        id: 113,
        name: 'Chansey',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Chansey!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    tangela: {
        id: 114,
        name: 'Tangela',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Tangela!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    kangaskhan: {
        id: 115,
        name: 'Kangaskhan',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kangaskhan!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    horsea: {
        id: 116,
        name: 'Horsea',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Horsea!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    seadra: {
        id: 117,
        name: 'Seadra',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Seadra!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    goldeen: {
        id: 118,
        name: 'Goldeen',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Goldeen!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    seaking: {
        id: 119,
        name: 'Seaking',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Seaking!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    staryu: {
        id: 120,
        name: 'Staryu',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Staryu!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    starmie: {
        id: 121,
        name: 'Starmie',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Starmie!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "psychic" /* PokemonElementType.psychic */],
    },
    mrmime: {
        id: 122,
        name: 'Mr. Mime',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Mr. Mime!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    scyther: {
        id: 123,
        name: 'Scyther',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Scyther!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "flying" /* PokemonElementType.flying */],
    },
    jynx: {
        id: 124,
        name: 'Jynx',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Jynx!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ice" /* PokemonElementType.ice */, "psychic" /* PokemonElementType.psychic */],
    },
    electabuzz: {
        id: 125,
        name: 'Electabuzz',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Electabuzz!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    magmar: {
        id: 126,
        name: 'Magmar',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Magmar!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    pinsir: {
        id: 127,
        name: 'Pinsir',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Pinsir!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */],
    },
    tauros: {
        id: 128,
        name: 'Tauros',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Tauros!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    magikarp: {
        id: 129,
        name: 'Magikarp',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Magikarp!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    gyarados: {
        id: 130,
        name: 'Gyarados',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Gyarados!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "flying" /* PokemonElementType.flying */],
    },
    lapras: {
        id: 131,
        name: 'Lapras',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Lapras!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "ice" /* PokemonElementType.ice */],
    },
    ditto: {
        id: 132,
        name: 'Ditto',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Ditto!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    eevee: {
        id: 133,
        name: 'Eevee',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Eevee!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    vaporeon: {
        id: 134,
        name: 'Vaporeon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Vaporeon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    jolteon: {
        id: 135,
        name: 'Jolteon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Jolteon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    flareon: {
        id: 136,
        name: 'Flareon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Flareon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    porygon: {
        id: 137,
        name: 'Porygon',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Porygon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    omanyte: {
        id: 138,
        name: 'Omanyte',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Omanyte!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "fossil" /* PokemonRarity.fossil */,
        types: ["rock" /* PokemonElementType.rock */, "water" /* PokemonElementType.water */],
    },
    omastar: {
        id: 139,
        name: 'Omastar',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Omastar!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "fossil" /* PokemonRarity.fossil */,
        types: ["rock" /* PokemonElementType.rock */, "water" /* PokemonElementType.water */],
    },
    kabuto: {
        id: 140,
        name: 'Kabuto',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kabuto!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "fossil" /* PokemonRarity.fossil */,
        types: ["rock" /* PokemonElementType.rock */, "water" /* PokemonElementType.water */],
    },
    kabutops: {
        id: 141,
        name: 'Kabutops',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kabutops!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "fossil" /* PokemonRarity.fossil */,
        types: ["rock" /* PokemonElementType.rock */, "water" /* PokemonElementType.water */],
    },
    aerodactyl: {
        id: 142,
        name: 'Aerodactyl',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Aerodactyl!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "fossil" /* PokemonRarity.fossil */,
        types: ["rock" /* PokemonElementType.rock */, "flying" /* PokemonElementType.flying */],
    },
    snorlax: {
        id: 143,
        name: 'Snorlax',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Snorlax!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    articuno: {
        id: 144,
        name: 'Articuno',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Articuno!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "sub-legendary" /* PokemonRarity.subLegendary */,
        types: ["ice" /* PokemonElementType.ice */, "flying" /* PokemonElementType.flying */],
    },
    zapdos: {
        id: 145,
        name: 'Zapdos',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Zapdos!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "sub-legendary" /* PokemonRarity.subLegendary */,
        types: ["electric" /* PokemonElementType.electric */, "flying" /* PokemonElementType.flying */],
    },
    moltres: {
        id: 146,
        name: 'Moltres',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Moltres!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "sub-legendary" /* PokemonRarity.subLegendary */,
        types: ["fire" /* PokemonElementType.fire */, "flying" /* PokemonElementType.flying */],
    },
    dratini: {
        id: 147,
        name: 'Dratini',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dratini!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dragon" /* PokemonElementType.dragon */],
    },
    dragonair: {
        id: 148,
        name: 'Dragonair',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dragonair!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dragon" /* PokemonElementType.dragon */],
    },
    dragonite: {
        id: 149,
        name: 'Dragonite',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Dragonite!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dragon" /* PokemonElementType.dragon */, "flying" /* PokemonElementType.flying */],
    },
    mewtwo: {
        id: 150,
        name: 'Mewtwo',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Mewtwo!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "legendary" /* PokemonRarity.legendary */,
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    mew: {
        id: 151,
        name: 'Mew',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Mew!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    // Generation 2
    chikorita: {
        id: 152,
        name: 'Chikorita',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Chikorita!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    bayleef: {
        id: 153,
        name: 'Bayleef',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Bayleef!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    meganium: {
        id: 154,
        name: 'Meganium',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Meganium!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    cyndaquil: {
        id: 155,
        name: 'Cyndaquil',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Cyndaquil!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    quilava: {
        id: 156,
        name: 'Quilava',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Quilava!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    typhlosion: {
        id: 157,
        name: 'Typhlosion',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Typhlosion!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    totodile: {
        id: 158,
        name: 'Totodile',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Totodile!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    croconaw: {
        id: 159,
        name: 'Croconaw',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Croconaw!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    feraligatr: {
        id: 160,
        name: 'Feraligatr',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Feraligatr!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    sentret: {
        id: 161,
        name: 'Sentret',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Sentret!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    furret: {
        id: 162,
        name: 'Furret',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Furret!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    hoothoot: {
        id: 163,
        name: 'Hoothoot',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Hoothoot!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    noctowl: {
        id: 164,
        name: 'Noctowl',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Noctowl!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    ledyba: {
        id: 165,
        name: 'Ledyba',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ledyba!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "flying" /* PokemonElementType.flying */],
    },
    ledian: {
        id: 166,
        name: 'Ledian',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ledian!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "flying" /* PokemonElementType.flying */],
    },
    spinarak: {
        id: 167,
        name: 'Spinarak',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Spinarak!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "poison" /* PokemonElementType.poison */],
    },
    ariados: {
        id: 168,
        name: 'Ariados',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ariados!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "poison" /* PokemonElementType.poison */],
    },
    crobat: {
        id: 169,
        name: 'Crobat',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Crobat!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */, "flying" /* PokemonElementType.flying */],
    },
    chinchou: {
        id: 170,
        name: 'Chinchou',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Chinchou!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "electric" /* PokemonElementType.electric */],
    },
    lanturn: {
        id: 171,
        name: 'Lanturn',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Lanturn!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "electric" /* PokemonElementType.electric */],
    },
    pichu: {
        id: 172,
        name: 'Pichu',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Pichu!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    cleffa: {
        id: 173,
        name: 'Cleffa',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Cleffa!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    igglybuff: {
        id: 174,
        name: 'Igglybuff',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Igglybuff!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    togepi: {
        id: 175,
        name: 'Togepi',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Togepi!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    togetic: {
        id: 176,
        name: 'Togetic',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Togetic!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    natu: {
        id: 177,
        name: 'Natu',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Natu!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */, "flying" /* PokemonElementType.flying */],
    },
    xatu: {
        id: 178,
        name: 'Xatu',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Xatu!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */, "flying" /* PokemonElementType.flying */],
    },
    mareep: {
        id: 179,
        name: 'Mareep',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Mareep!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    flaaffy: {
        id: 180,
        name: 'Flaaffy',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Flaaffy!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    ampharos: {
        id: 181,
        name: 'Ampharos',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ampharos!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    bellossom: {
        id: 182,
        name: 'Bellossom',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Bellossom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    marill: {
        id: 183,
        name: 'Marill',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Marill!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    azumarill: {
        id: 184,
        name: 'Azumarill',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Azumarill!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    sudowoodo: {
        id: 185,
        name: 'Sudowoodo',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Sudowoodo!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */],
    },
    politoed: {
        id: 186,
        name: 'Politoed',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Politoed!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    hoppip: {
        id: 187,
        name: 'Hoppip',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Hoppip!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "flying" /* PokemonElementType.flying */],
    },
    skiploom: {
        id: 188,
        name: 'Skiploom',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Skiploom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "flying" /* PokemonElementType.flying */],
    },
    jumpluff: {
        id: 189,
        name: 'Jumpluff',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Jumpluff!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "flying" /* PokemonElementType.flying */],
    },
    aipom: {
        id: 190,
        name: 'Aipom',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Aipom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    sunkern: {
        id: 191,
        name: 'Sunkern',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Sunkern!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    sunflora: {
        id: 192,
        name: 'Sunflora',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Sunflora!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    yanma: {
        id: 193,
        name: 'Yanma',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Yanma!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "flying" /* PokemonElementType.flying */],
    },
    wooper: {
        id: 194,
        name: 'Wooper',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Wooper!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "ground" /* PokemonElementType.ground */],
    },
    quagsire: {
        id: 195,
        name: 'Quagsire',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Quagsire!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "ground" /* PokemonElementType.ground */],
    },
    espeon: {
        id: 196,
        name: 'Espeon',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Espeon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    umbreon: {
        id: 197,
        name: 'Umbreon',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Umbreon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dark" /* PokemonElementType.dark */],
    },
    murkrow: {
        id: 198,
        name: 'Murkrow',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Murkrow!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dark" /* PokemonElementType.dark */, "flying" /* PokemonElementType.flying */],
    },
    slowking: {
        id: 199,
        name: 'Slowking',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Slowking!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "psychic" /* PokemonElementType.psychic */],
    },
    misdreavus: {
        id: 200,
        name: 'Misdreavus',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Misdreavus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ghost" /* PokemonElementType.ghost */],
    },
    unown_a: {
        id: 201,
        name: 'Unown (A)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_b: {
        id: 201,
        name: 'Unown (B)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_c: {
        id: 201,
        name: 'Unown (C)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_d: {
        id: 201,
        name: 'Unown (D)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_e: {
        id: 201,
        name: 'Unown (E)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_f: {
        id: 201,
        name: 'Unown (F)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_g: {
        id: 201,
        name: 'Unown (G)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_h: {
        id: 201,
        name: 'Unown (H)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_i: {
        id: 201,
        name: 'Unown (I)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_j: {
        id: 201,
        name: 'Unown (J)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_k: {
        id: 201,
        name: 'Unown (K)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_l: {
        id: 201,
        name: 'Unown (L)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_m: {
        id: 201,
        name: 'Unown (M)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_n: {
        id: 201,
        name: 'Unown (N)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_o: {
        id: 201,
        name: 'Unown (O)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_p: {
        id: 201,
        name: 'Unown (P)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_q: {
        id: 201,
        name: 'Unown (Q)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_r: {
        id: 201,
        name: 'Unown (R)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_s: {
        id: 201,
        name: 'Unown (S)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_t: {
        id: 201,
        name: 'Unown (T)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_u: {
        id: 201,
        name: 'Unown (U)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_v: {
        id: 201,
        name: 'Unown (V)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_w: {
        id: 201,
        name: 'Unown (W)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_x: {
        id: 201,
        name: 'Unown (X)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_y: {
        id: 201,
        name: 'Unown (Y)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_z: {
        id: 201,
        name: 'Unown (Z)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_exclamation: {
        id: 201,
        name: 'Unown (!)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    unown_question: {
        id: 201,
        name: 'Unown (?)',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Unown!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    wobbuffet: {
        id: 202,
        name: 'Wobbuffet',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Wobbuffet!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    girafarig: {
        id: 203,
        name: 'Girafarig',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Girafarig!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "psychic" /* PokemonElementType.psychic */],
    },
    pineco: {
        id: 204,
        name: 'Pineco',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Pineco!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */],
    },
    forretress: {
        id: 205,
        name: 'Forretress',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Forretress!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "steel" /* PokemonElementType.steel */],
    },
    dunsparce: {
        id: 206,
        name: 'Dunsparce',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Dunsparce!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    gligar: {
        id: 207,
        name: 'Gligar',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Gligar!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */, "flying" /* PokemonElementType.flying */],
    },
    steelix: {
        id: 208,
        name: 'Steelix',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Steelix!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        originalSpriteSize: 64,
        types: ["steel" /* PokemonElementType.steel */, "ground" /* PokemonElementType.ground */],
    },
    snubbull: {
        id: 209,
        name: 'Snubbull',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Snubbull!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    granbull: {
        id: 210,
        name: 'Granbull',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Granbull!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    qwilfish: {
        id: 211,
        name: 'Qwilfish',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Qwilfish!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "poison" /* PokemonElementType.poison */],
    },
    scizor: {
        id: 212,
        name: 'Scizor',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Scizor!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "steel" /* PokemonElementType.steel */],
    },
    shuckle: {
        id: 213,
        name: 'Shuckle',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Shuckle!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "rock" /* PokemonElementType.rock */],
    },
    heracross: {
        id: 214,
        name: 'Heracross',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Heracross!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "fighting" /* PokemonElementType.fighting */],
    },
    sneasel: {
        id: 215,
        name: 'Sneasel',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Sneasel!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dark" /* PokemonElementType.dark */, "ice" /* PokemonElementType.ice */],
    },
    teddiursa: {
        id: 216,
        name: 'Teddiursa',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Teddiursa!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    ursaring: {
        id: 217,
        name: 'Ursaring',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ursaring!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    slugma: {
        id: 218,
        name: 'Slugma',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Slugma!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    magcargo: {
        id: 219,
        name: 'Magcargo',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Magcargo!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */, "rock" /* PokemonElementType.rock */],
    },
    swinub: {
        id: 220,
        name: 'Swinub',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Swinub!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ice" /* PokemonElementType.ice */, "ground" /* PokemonElementType.ground */],
    },
    piloswine: {
        id: 221,
        name: 'Piloswine',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Piloswine!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ice" /* PokemonElementType.ice */, "ground" /* PokemonElementType.ground */],
    },
    corsola: {
        id: 222,
        name: 'Corsola',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Corsola!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "rock" /* PokemonElementType.rock */],
    },
    remoraid: {
        id: 223,
        name: 'Remoraid',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Remoraid!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    octillery: {
        id: 224,
        name: 'Octillery',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Octillery!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    delibird: {
        id: 225,
        name: 'Delibird',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Delibird!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ice" /* PokemonElementType.ice */, "flying" /* PokemonElementType.flying */],
    },
    mantine: {
        id: 226,
        name: 'Mantine',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Mantine!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "flying" /* PokemonElementType.flying */],
    },
    skarmory: {
        id: 227,
        name: 'Skarmory',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Skarmory!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["steel" /* PokemonElementType.steel */, "flying" /* PokemonElementType.flying */],
    },
    houndour: {
        id: 228,
        name: 'Houndour',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Houndour!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dark" /* PokemonElementType.dark */, "fire" /* PokemonElementType.fire */],
    },
    houndoom: {
        id: 229,
        name: 'Houndoom',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Houndoom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dark" /* PokemonElementType.dark */, "fire" /* PokemonElementType.fire */],
    },
    kingdra: {
        id: 230,
        name: 'Kingdra',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Kingdra!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "dragon" /* PokemonElementType.dragon */],
    },
    phanpy: {
        id: 231,
        name: 'Phanpy',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Phanpy!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */],
    },
    donphan: {
        id: 232,
        name: 'Donphan',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Donphan!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */],
    },
    porygon2: {
        id: 233,
        name: 'Porygon2',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Porygon2!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    stantler: {
        id: 234,
        name: 'Stantler',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Stantler!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    smeargle: {
        id: 235,
        name: 'Smeargle',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Smeargle!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    tyrogue: {
        id: 236,
        name: 'Tyrogue',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Tyrogue!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fighting" /* PokemonElementType.fighting */],
    },
    hitmontop: {
        id: 237,
        name: 'Hitmontop',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Hitmontop!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fighting" /* PokemonElementType.fighting */],
    },
    smoochum: {
        id: 238,
        name: 'Smoochum',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Smoochum!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ice" /* PokemonElementType.ice */, "psychic" /* PokemonElementType.psychic */],
    },
    elekid: {
        id: 239,
        name: 'Elekid',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Elekid!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    magby: {
        id: 240,
        name: 'Magby',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Magby!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    miltank: {
        id: 241,
        name: 'Miltank',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Miltank!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    blissey: {
        id: 242,
        name: 'Blissey',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Blissey!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    raikou: {
        id: 243,
        name: 'Raikou',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Raikou!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "sub-legendary" /* PokemonRarity.subLegendary */,
        types: ["electric" /* PokemonElementType.electric */],
    },
    entei: {
        id: 244,
        name: 'Entei',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Entei!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "sub-legendary" /* PokemonRarity.subLegendary */,
        types: ["fire" /* PokemonElementType.fire */],
    },
    suicune: {
        id: 245,
        name: 'Suicune',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Suicune!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "sub-legendary" /* PokemonRarity.subLegendary */,
        types: ["water" /* PokemonElementType.water */],
    },
    larvitar: {
        id: 246,
        name: 'Larvitar',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Larvitar!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */, "ground" /* PokemonElementType.ground */],
    },
    pupitar: {
        id: 247,
        name: 'Pupitar',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Pupitar!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */, "ground" /* PokemonElementType.ground */],
    },
    tyranitar: {
        id: 248,
        name: 'Tyranitar',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Tyranitar!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */, "dark" /* PokemonElementType.dark */],
    },
    lugia: {
        id: 249,
        name: 'Lugia',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Lugia!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "legendary" /* PokemonRarity.legendary */,
        originalSpriteSize: 64,
        types: ["psychic" /* PokemonElementType.psychic */, "flying" /* PokemonElementType.flying */],
    },
    hooh: {
        id: 250,
        name: 'Ho-Oh',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Ho-Oh!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "legendary" /* PokemonRarity.legendary */,
        originalSpriteSize: 64,
        types: ["fire" /* PokemonElementType.fire */, "flying" /* PokemonElementType.flying */],
    },
    celebi: {
        id: 251,
        name: 'Celebi',
        generation: types_1.PokemonGeneration.Gen2,
        cry: 'Celebi!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        types: ["psychic" /* PokemonElementType.psychic */, "grass" /* PokemonElementType.grass */],
    },
    // Generation 3
    treecko: {
        id: 252,
        name: 'Treecko',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Treecko!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    grovyle: {
        id: 253,
        name: 'Grovyle',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Grovyle!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    sceptile: {
        id: 254,
        name: 'Sceptile',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Sceptile!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    torchic: {
        id: 255,
        name: 'Torchic',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Torchic!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    combusken: {
        id: 256,
        name: 'Combusken',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Combusken!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */, "fighting" /* PokemonElementType.fighting */],
    },
    blaziken: {
        id: 257,
        name: 'Blaziken',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Blaziken!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */, "fighting" /* PokemonElementType.fighting */],
    },
    mudkip: {
        id: 258,
        name: 'Mudkip',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Mudkip!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    marshtomp: {
        id: 259,
        name: 'Marshtomp',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Marshtomp!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "ground" /* PokemonElementType.ground */],
    },
    swampert: {
        id: 260,
        name: 'Swampert',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Swampert!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "ground" /* PokemonElementType.ground */],
    },
    poochyena: {
        id: 261,
        name: 'Poochyena',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Poochyena!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dark" /* PokemonElementType.dark */],
    },
    mightyena: {
        id: 262,
        name: 'Mightyena',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Mightyena!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dark" /* PokemonElementType.dark */],
    },
    zigzagoon: {
        id: 263,
        name: 'Zigzagoon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Zigzagoon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    linoone: {
        id: 264,
        name: 'Linoone',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Linoone!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    wurmple: {
        id: 265,
        name: 'Wurmple',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Wurmple!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */],
    },
    silcoon: {
        id: 266,
        name: 'Silcoon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Silcoon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */],
    },
    beautifly: {
        id: 267,
        name: 'Beautifly',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Beautifly!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "flying" /* PokemonElementType.flying */],
    },
    cascoon: {
        id: 268,
        name: 'Cascoon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Cascoon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */],
    },
    dustox: {
        id: 269,
        name: 'Dustox',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Dustox!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "poison" /* PokemonElementType.poison */],
    },
    lotad: {
        id: 270,
        name: 'Lotad',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Lotad!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "grass" /* PokemonElementType.grass */],
    },
    lombre: {
        id: 271,
        name: 'Lombre',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Lombre!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "grass" /* PokemonElementType.grass */],
    },
    ludicolo: {
        id: 272,
        name: 'Ludicolo',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Ludicolo!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "grass" /* PokemonElementType.grass */],
    },
    seedot: {
        id: 273,
        name: 'Seedot',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Seedot!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    nuzleaf: {
        id: 274,
        name: 'Nuzleaf',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Nuzleaf!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "dark" /* PokemonElementType.dark */],
    },
    shiftry: {
        id: 275,
        name: 'Shiftry',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Shiftry!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "dark" /* PokemonElementType.dark */],
    },
    taillow: {
        id: 276,
        name: 'Taillow',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Taillow!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    swellow: {
        id: 277,
        name: 'Swellow',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Swellow!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    wingull: {
        id: 278,
        name: 'Wingull',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Wingull!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "flying" /* PokemonElementType.flying */],
    },
    pelipper: {
        id: 279,
        name: 'Pelipper',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Pelipper!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "flying" /* PokemonElementType.flying */],
    },
    ralts: {
        id: 280,
        name: 'Ralts',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Ralts!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    kirlia: {
        id: 281,
        name: 'Kirlia',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Kirlia!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    gardevoir: {
        id: 282,
        name: 'Gardevoir',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Gardevoir!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    surskit: {
        id: 283,
        name: 'Surskit',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Surskit!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "water" /* PokemonElementType.water */],
    },
    masquerain: {
        id: 284,
        name: 'Masquerain',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Masquerain!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "flying" /* PokemonElementType.flying */],
    },
    shroomish: {
        id: 285,
        name: 'Shroomish',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Shroomish!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    breloom: {
        id: 286,
        name: 'Breloom',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Breloom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "fighting" /* PokemonElementType.fighting */],
    },
    slakoth: {
        id: 287,
        name: 'Slakoth',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Slakoth!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    vigoroth: {
        id: 288,
        name: 'Vigoroth',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Vigoroth!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    slaking: {
        id: 289,
        name: 'Slaking',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Slaking!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    nincada: {
        id: 290,
        name: 'Nincada',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Nincada!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "ground" /* PokemonElementType.ground */],
    },
    ninjask: {
        id: 291,
        name: 'Ninjask',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Ninjask!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "flying" /* PokemonElementType.flying */],
    },
    shedinja: {
        id: 292,
        name: 'Shedinja',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Shedinja!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "ghost" /* PokemonElementType.ghost */],
    },
    whismur: {
        id: 293,
        name: 'Whismur',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Whismur!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    loudred: {
        id: 294,
        name: 'Loudred',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Loudred!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    exploud: {
        id: 295,
        name: 'Exploud',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Exploud!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    makuhita: {
        id: 296,
        name: 'Makuhita',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Makuhita!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fighting" /* PokemonElementType.fighting */],
    },
    hariyama: {
        id: 297,
        name: 'Hariyama',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Hariyama!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fighting" /* PokemonElementType.fighting */],
    },
    azurill: {
        id: 298,
        name: 'Azurill',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Azurill!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    nosepass: {
        id: 299,
        name: 'Nosepass',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Nosepass!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */],
    },
    skitty: {
        id: 300,
        name: 'Skitty',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Skitty!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    delcatty: {
        id: 301,
        name: 'Delcatty',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Delcatty!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    sableye: {
        id: 302,
        name: 'Sableye',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Sableye!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dark" /* PokemonElementType.dark */, "ghost" /* PokemonElementType.ghost */],
    },
    mawile: {
        id: 303,
        name: 'Mawile',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Mawile!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["steel" /* PokemonElementType.steel */],
    },
    aron: {
        id: 304,
        name: 'Aron',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Aron!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["steel" /* PokemonElementType.steel */, "rock" /* PokemonElementType.rock */],
    },
    lairon: {
        id: 305,
        name: 'Lairon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Lairon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["steel" /* PokemonElementType.steel */, "rock" /* PokemonElementType.rock */],
    },
    aggron: {
        id: 306,
        name: 'Aggron',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Aggron!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["steel" /* PokemonElementType.steel */, "rock" /* PokemonElementType.rock */],
    },
    meditite: {
        id: 307,
        name: 'Meditite',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Meditite!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fighting" /* PokemonElementType.fighting */, "psychic" /* PokemonElementType.psychic */],
    },
    medicham: {
        id: 308,
        name: 'Medicham',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Medicham!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fighting" /* PokemonElementType.fighting */, "psychic" /* PokemonElementType.psychic */],
    },
    electrike: {
        id: 309,
        name: 'Electrike',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Electrike!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    manectric: {
        id: 310,
        name: 'Manectric',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Manectric!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    plusle: {
        id: 311,
        name: 'Plusle',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Plusle!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    minun: {
        id: 312,
        name: 'Minun',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Minun!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    volbeat: {
        id: 313,
        name: 'Volbeat',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Volbeat!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */],
    },
    illumise: {
        id: 314,
        name: 'Illumise',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Illumise!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */],
    },
    roselia: {
        id: 315,
        name: 'Roselia',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Roselia!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "poison" /* PokemonElementType.poison */],
    },
    gulpin: {
        id: 316,
        name: 'Gulpin',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Gulpin!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */],
    },
    swalot: {
        id: 317,
        name: 'Swalot',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Swalot!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */],
    },
    carvanha: {
        id: 318,
        name: 'Carvanha',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Carvanha!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "dark" /* PokemonElementType.dark */],
    },
    sharpedo: {
        id: 319,
        name: 'Sharpedo',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Sharpedo!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "dark" /* PokemonElementType.dark */],
    },
    wailmer: {
        id: 320,
        name: 'Wailmer',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Wailmer!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    wailord: {
        id: 321,
        name: 'Wailord',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Wailord!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        originalSpriteSize: 64,
        types: ["water" /* PokemonElementType.water */],
    },
    numel: {
        id: 322,
        name: 'Numel',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Numel!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */, "ground" /* PokemonElementType.ground */],
    },
    camerupt: {
        id: 323,
        name: 'Camerupt',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Camerupt!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */, "ground" /* PokemonElementType.ground */],
    },
    torkoal: {
        id: 324,
        name: 'Torkoal',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Torkoal!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    spoink: {
        id: 325,
        name: 'Spoink',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Spoink!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    grumpig: {
        id: 326,
        name: 'Grumpig',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Grumpig!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    spinda: {
        id: 327,
        name: 'Spinda',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Spinda!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    trapinch: {
        id: 328,
        name: 'Trapinch',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Trapinch!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */],
    },
    vibrava: {
        id: 329,
        name: 'Vibrava',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Vibrava!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */, "dragon" /* PokemonElementType.dragon */],
    },
    flygon: {
        id: 330,
        name: 'Flygon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Flygon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */, "dragon" /* PokemonElementType.dragon */],
    },
    cacnea: {
        id: 331,
        name: 'Cacnea',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Cacnea!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    cacturne: {
        id: 332,
        name: 'Cacturne',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Cacturne!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "dark" /* PokemonElementType.dark */],
    },
    swablu: {
        id: 333,
        name: 'Swablu',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Swablu!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    altaria: {
        id: 334,
        name: 'Altaria',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Altaria!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dragon" /* PokemonElementType.dragon */, "flying" /* PokemonElementType.flying */],
    },
    zangoose: {
        id: 335,
        name: 'Zangoose',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Zangoose!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    seviper: {
        id: 336,
        name: 'Seviper',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Seviper!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */],
    },
    lunatone: {
        id: 337,
        name: 'Lunatone',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Lunatone!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */, "psychic" /* PokemonElementType.psychic */],
    },
    solrock: {
        id: 338,
        name: 'Solrock',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Solrock!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */, "psychic" /* PokemonElementType.psychic */],
    },
    barboach: {
        id: 339,
        name: 'Barboach',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Barboach!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "ground" /* PokemonElementType.ground */],
    },
    whiscash: {
        id: 340,
        name: 'Whiscash',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Whiscash!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "ground" /* PokemonElementType.ground */],
    },
    corphish: {
        id: 341,
        name: 'Corphish',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Corphish!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    crawdaunt: {
        id: 342,
        name: 'Crawdaunt',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Crawdaunt!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "dark" /* PokemonElementType.dark */],
    },
    baltoy: {
        id: 343,
        name: 'Baltoy',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Baltoy!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */, "psychic" /* PokemonElementType.psychic */],
    },
    claydol: {
        id: 344,
        name: 'Claydol',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Claydol!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */, "psychic" /* PokemonElementType.psychic */],
    },
    lileep: {
        id: 345,
        name: 'Lileep',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Lileep!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "fossil" /* PokemonRarity.fossil */,
        types: ["rock" /* PokemonElementType.rock */, "grass" /* PokemonElementType.grass */],
    },
    cradily: {
        id: 346,
        name: 'Cradily',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Cradily!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "fossil" /* PokemonRarity.fossil */,
        types: ["rock" /* PokemonElementType.rock */, "grass" /* PokemonElementType.grass */],
    },
    anorith: {
        id: 347,
        name: 'Anorith',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Anorith!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "fossil" /* PokemonRarity.fossil */,
        types: ["rock" /* PokemonElementType.rock */, "bug" /* PokemonElementType.bug */],
    },
    armaldo: {
        id: 348,
        name: 'Armaldo',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Armaldo!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "fossil" /* PokemonRarity.fossil */,
        types: ["rock" /* PokemonElementType.rock */, "bug" /* PokemonElementType.bug */],
    },
    feebas: {
        id: 349,
        name: 'Feebas',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Feebas!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    milotic: {
        id: 350,
        name: 'Milotic',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Milotic!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    castform: {
        id: 351,
        name: 'Castform',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Castform!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    kecleon: {
        id: 352,
        name: 'Kecleon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Kecleon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    shuppet: {
        id: 353,
        name: 'Shuppet',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Shuppet!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ghost" /* PokemonElementType.ghost */],
    },
    banette: {
        id: 354,
        name: 'Banette',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Banette!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ghost" /* PokemonElementType.ghost */],
    },
    duskull: {
        id: 355,
        name: 'Duskull',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Duskull!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ghost" /* PokemonElementType.ghost */],
    },
    dusclops: {
        id: 356,
        name: 'Dusclops',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Dusclops!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ghost" /* PokemonElementType.ghost */],
    },
    tropius: {
        id: 357,
        name: 'Tropius',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Tropius!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "flying" /* PokemonElementType.flying */],
    },
    chimecho: {
        id: 358,
        name: 'Chimecho',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Chimecho!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    absol: {
        id: 359,
        name: 'Absol',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Absol!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dark" /* PokemonElementType.dark */],
    },
    wynaut: {
        id: 360,
        name: 'Wynaut',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Wynaut!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    snorunt: {
        id: 361,
        name: 'Snorunt',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Snorunt!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ice" /* PokemonElementType.ice */],
    },
    glalie: {
        id: 362,
        name: 'Glalie',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Glalie!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ice" /* PokemonElementType.ice */],
    },
    spheal: {
        id: 363,
        name: 'Spheal',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Spheal!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ice" /* PokemonElementType.ice */, "water" /* PokemonElementType.water */],
    },
    sealeo: {
        id: 364,
        name: 'Sealeo',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Sealeo!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ice" /* PokemonElementType.ice */, "water" /* PokemonElementType.water */],
    },
    walrein: {
        id: 365,
        name: 'Walrein',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Walrein!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ice" /* PokemonElementType.ice */, "water" /* PokemonElementType.water */],
    },
    clamperl: {
        id: 366,
        name: 'Clamperl',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Clamperl!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    huntail: {
        id: 367,
        name: 'Huntail',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Huntail!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    gorebyss: {
        id: 368,
        name: 'Gorebyss',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Gorebyss!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    relicanth: {
        id: 369,
        name: 'Relicanth',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Relicanth!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "rock" /* PokemonElementType.rock */],
    },
    luvdisc: {
        id: 370,
        name: 'Luvdisc',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Luvdisc!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    bagon: {
        id: 371,
        name: 'Bagon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Bagon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dragon" /* PokemonElementType.dragon */],
    },
    shelgon: {
        id: 372,
        name: 'Shelgon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Shelgon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dragon" /* PokemonElementType.dragon */],
    },
    salamence: {
        id: 373,
        name: 'Salamence',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Salamence!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dragon" /* PokemonElementType.dragon */, "flying" /* PokemonElementType.flying */],
    },
    beldum: {
        id: 374,
        name: 'Beldum',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Beldum!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["steel" /* PokemonElementType.steel */, "psychic" /* PokemonElementType.psychic */],
    },
    metang: {
        id: 375,
        name: 'Metang',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Metang!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["steel" /* PokemonElementType.steel */, "psychic" /* PokemonElementType.psychic */],
    },
    metagross: {
        id: 376,
        name: 'Metagross',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Metagross!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["steel" /* PokemonElementType.steel */, "psychic" /* PokemonElementType.psychic */],
    },
    regirock: {
        id: 377,
        name: 'Regirock',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Regirock!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "sub-legendary" /* PokemonRarity.subLegendary */,
        types: ["rock" /* PokemonElementType.rock */],
    },
    regice: {
        id: 378,
        name: 'Regice',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Regice!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "sub-legendary" /* PokemonRarity.subLegendary */,
        types: ["ice" /* PokemonElementType.ice */],
    },
    registeel: {
        id: 379,
        name: 'Registeel',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Registeel!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "sub-legendary" /* PokemonRarity.subLegendary */,
        types: ["steel" /* PokemonElementType.steel */],
    },
    latias: {
        id: 380,
        name: 'Latias',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Latias!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "sub-legendary" /* PokemonRarity.subLegendary */,
        types: ["dragon" /* PokemonElementType.dragon */, "psychic" /* PokemonElementType.psychic */],
    },
    latios: {
        id: 381,
        name: 'Latios',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Latios!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "sub-legendary" /* PokemonRarity.subLegendary */,
        types: ["dragon" /* PokemonElementType.dragon */, "psychic" /* PokemonElementType.psychic */],
    },
    kyogre: {
        id: 382,
        name: 'Kyogre',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Kyogre!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "legendary" /* PokemonRarity.legendary */,
        originalSpriteSize: 64,
        types: ["water" /* PokemonElementType.water */],
    },
    groudon: {
        id: 383,
        name: 'Groudon',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Groudon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "legendary" /* PokemonRarity.legendary */,
        originalSpriteSize: 64,
        types: ["ground" /* PokemonElementType.ground */],
    },
    rayquaza: {
        id: 384,
        name: 'Rayquaza',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Rayquaza!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "legendary" /* PokemonRarity.legendary */,
        originalSpriteSize: 64,
        types: ["dragon" /* PokemonElementType.dragon */, "flying" /* PokemonElementType.flying */],
    },
    jirachi: {
        id: 385,
        name: 'Jirachi',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Jirachi!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        types: ["steel" /* PokemonElementType.steel */, "psychic" /* PokemonElementType.psychic */],
    },
    deoxys: {
        id: 386,
        name: 'Deoxys',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Deoxys!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    deoxys_speed: {
        id: 386,
        name: 'Deoxys (Speed)',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Deoxys!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    deoxys_attack: {
        id: 386,
        name: 'Deoxys (Attack)',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Deoxys!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    deoxys_defense: {
        id: 386,
        name: 'Deoxys (Defense)',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Deoxys!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        types: ["psychic" /* PokemonElementType.psychic */],
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
        if (pokemon.color === "shiny" /* PokemonColor.shiny */) {
            playSparkleBurst(pokemon.scale);
        }
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
// Twinkles a ring of sparkles around the pokemon for a shiny reveal (hatching,
// evolving, or being brought out of the Pokedex already shiny).
function playSparkleBurst(scale) {
    const burst = document.getElementById('shiny-burst');
    if (!burst) {
        return;
    }
    burst.style.transform = `scale(${scale})`;
    // A restart needs a fresh animation, not just the class re-added: removing
    // and re-adding it in the same tick would be a no-op, so the reflow in
    // between forces the browser to actually notice the class was ever gone.
    burst.classList.remove('is-active');
    void burst.offsetWidth;
    burst.classList.add('is-active');
    setTimeout(() => {
        burst.classList.remove('is-active');
    }, 1000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFILFdBQUc7Q0FDSjs7Ozs7OztVQ2hVRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFNUJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZWNoaUFwcC8uL3NyYy9jb21tb24vcG9rZW1vbi1kYXRhLnRzIiwid2VicGFjazovL3Bva2VjaGlBcHAvLi9zcmMvY29tbW9uL3R5cGVzLnRzIiwid2VicGFjazovL3Bva2VjaGlBcHAvLi9zcmMvcGFuZWwvbWFpbi50cyIsIndlYnBhY2s6Ly9wb2tlY2hpQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Bva2VjaGlBcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wb2tlY2hpQXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wb2tlY2hpQXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2tlbW9uQ29sb3IsIFBva2Vtb25Db25maWcsIFBva2Vtb25FbGVtZW50VHlwZSwgUG9rZW1vbkdlbmVyYXRpb24sIFBva2Vtb25SYXJpdHksIFBva2Vtb25UeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQT0tFTU9OX0RBVEE6IHsgW2tleTogc3RyaW5nXTogUG9rZW1vbkNvbmZpZyB9ID0ge1xyXG4gIGJ1bGJhc2F1cjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiAnQnVsYmFzYXVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdCdWxiYXNhdXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBpdnlzYXVyOiB7XHJcbiAgICBpZDogMixcclxuICAgIG5hbWU6ICdJdnlzYXVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdJdnlzYXVyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgdmVudXNhdXI6IHtcclxuICAgIGlkOiAzLFxyXG4gICAgbmFtZTogJ1ZlbnVzYXVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdWZW51c2F1ciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIGNoYXJtYW5kZXI6IHtcclxuICAgIGlkOiA0LFxyXG4gICAgbmFtZTogJ0NoYXJtYW5kZXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0NoYXJtYW5kZXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIGNoYXJtZWxlb246IHtcclxuICAgIGlkOiA1LFxyXG4gICAgbmFtZTogJ0NoYXJtZWxlb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0NoYXJtZWxlb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIGNoYXJpemFyZDoge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBuYW1lOiAnQ2hhcml6YXJkJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdDaGFyaXphcmQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHNxdWlydGxlOiB7XHJcbiAgICBpZDogNyxcclxuICAgIG5hbWU6ICdTcXVpcnRsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnU3F1cml0bGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICB3YXJ0b3J0bGU6IHtcclxuICAgIGlkOiA4LFxyXG4gICAgbmFtZTogJ1dhcnRvcnRsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnV2FydG9ydGxlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgYmxhc3RvaXNlOiB7XHJcbiAgICBpZDogOSxcclxuICAgIG5hbWU6ICdCbGFzdG9pc2UnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0JsYXN0b2lzZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGNhdGVycGllOiB7XHJcbiAgICBpZDogMTAsXHJcbiAgICBuYW1lOiAnQ2F0ZXJwaWUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0NhdGVycGllIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcclxuICB9LFxyXG4gIG1ldGFwb2Q6IHtcclxuICAgIGlkOiAxMSxcclxuICAgIG5hbWU6ICdNZXRhcG9kJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNZXRhcG9kIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcclxuICB9LFxyXG4gIGJ1dHRlcmZyZWU6IHtcclxuICAgIGlkOiAxMixcclxuICAgIG5hbWU6ICdCdXR0ZXJmcmVlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdCdXR0ZXJmcmVlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHdlZWRsZToge1xyXG4gICAgaWQ6IDEzLFxyXG4gICAgbmFtZTogJ1dlZWRsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnV2VlZGxlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIGtha3VuYToge1xyXG4gICAgaWQ6IDE0LFxyXG4gICAgbmFtZTogJ0tha3VuYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnS2FrdW5hIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIGJlZWRyaWxsOiB7XHJcbiAgICBpZDogMTUsXHJcbiAgICBuYW1lOiAnQmVlZHJpbGwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0JlZWRyaWxsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIHBpZGdleToge1xyXG4gICAgaWQ6IDE2LFxyXG4gICAgbmFtZTogJ1BpZGdleScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUGlkZ2V5IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHBpZGdlb3R0bzoge1xyXG4gICAgaWQ6IDE3LFxyXG4gICAgbmFtZTogJ1BpZGdlb3R0bycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUGlkZ2VvdHRvIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHBpZGdlb3Q6IHtcclxuICAgIGlkOiAxOCxcclxuICAgIG5hbWU6ICdQaWRnZW90JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdQaWRnZW90IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHJhdHRhdGE6IHtcclxuICAgIGlkOiAxOSxcclxuICAgIG5hbWU6ICdSYXR0YXRhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdSYXR0YXRhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHJhdGljYXRlOiB7XHJcbiAgICBpZDogMjAsXHJcbiAgICBuYW1lOiAnUmF0aWNhdGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1JhdGljYXRlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHNwZWFyb3c6IHtcclxuICAgIGlkOiAyMSxcclxuICAgIG5hbWU6ICdTcGVhcm93JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdTcGVhcm93IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIGZlYXJvdzoge1xyXG4gICAgaWQ6IDIyLFxyXG4gICAgbmFtZTogJ0ZlYXJvdycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRmVhcm93IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIGVrYW5zOiB7XHJcbiAgICBpZDogMjMsXHJcbiAgICBuYW1lOiAnRWthbnMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0VrYW5zIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIGFyYm9rOiB7XHJcbiAgICBpZDogMjQsXHJcbiAgICBuYW1lOiAnQXJib2snLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0FyYm9rIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIHBpa2FjaHU6IHtcclxuICAgIGlkOiAyNSxcclxuICAgIG5hbWU6ICdQaWthY2h1JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdQaWthY2h1IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxyXG4gIH0sXHJcbiAgcmFpY2h1OiB7XHJcbiAgICBpZDogMjYsXHJcbiAgICBuYW1lOiAnUmFpY2h1JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdSYWljaHUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICBzYW5kc2hyZXc6IHtcclxuICAgIGlkOiAyNyxcclxuICAgIG5hbWU6ICdTYW5kc2hyZXcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1NhbmRzaHJldyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBzYW5kc2xhc2g6IHtcclxuICAgIGlkOiAyOCxcclxuICAgIG5hbWU6ICdTYW5kc2xhc2gnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1NhbmRzbGFzaCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBuaWRvcmFuX2ZlbWFsZToge1xyXG4gICAgaWQ6IDI5LFxyXG4gICAgbmFtZTogJ05pZG9yYW7imYAnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ05pZG9yYW4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgbmlkb3JpbmE6IHtcclxuICAgIGlkOiAzMCxcclxuICAgIG5hbWU6ICdOaWRvcmluYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTmlkb3JpbmEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgbmlkb3F1ZWVuOiB7XHJcbiAgICBpZDogMzEsXHJcbiAgICBuYW1lOiAnTmlkb3F1ZWVuJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdOaWRvcXVlZW4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb24sIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgbmlkb3Jhbl9tYWxlOiB7XHJcbiAgICBpZDogMzIsXHJcbiAgICBuYW1lOiAnTmlkb3JhbuKZgicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTmlkb3JhbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBuaWRvcmlubzoge1xyXG4gICAgaWQ6IDMzLFxyXG4gICAgbmFtZTogJ05pZG9yaW5vJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdOaWRvcmlubyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBuaWRva2luZzoge1xyXG4gICAgaWQ6IDM0LFxyXG4gICAgbmFtZTogJ05pZG9raW5nJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdOaWRva2luZyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbiwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBjbGVmYWlyeToge1xyXG4gICAgaWQ6IDM1LFxyXG4gICAgbmFtZTogJ0NsZWZhaXJ5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdDbGVmYWlyeSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBjbGVmYWJsZToge1xyXG4gICAgaWQ6IDM2LFxyXG4gICAgbmFtZTogJ0NsZWZhYmxlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdDbGVmYWJsZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICB2dWxwaXg6IHtcclxuICAgIGlkOiAzNyxcclxuICAgIG5hbWU6ICdWdWxwaXgnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1Z1bHBpeCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxyXG4gIH0sXHJcbiAgbmluZXRhbGVzOiB7XHJcbiAgICBpZDogMzgsXHJcbiAgICBuYW1lOiAnTmluZXRhbGVzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdOaW5ldGFsZXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIGppZ2dseXB1ZmY6IHtcclxuICAgIGlkOiAzOSxcclxuICAgIG5hbWU6ICdKaWdnbHlwdWZmJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdKaWdnbHlwdWZmIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHdpZ2dseXR1ZmY6IHtcclxuICAgIGlkOiA0MCxcclxuICAgIG5hbWU6ICdXaWdnbHl0dWZmJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdXaWdnbHl0dWZmIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHp1YmF0OiB7XHJcbiAgICBpZDogNDEsXHJcbiAgICBuYW1lOiAnWnViYXQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1p1YmF0IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIGdvbGJhdDoge1xyXG4gICAgaWQ6IDQyLFxyXG4gICAgbmFtZTogJ0dvbGJhdCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnR29sYmF0IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIG9kZGlzaDoge1xyXG4gICAgaWQ6IDQzLFxyXG4gICAgbmFtZTogJ09kZGlzaCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnT2RkaXNoIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgZ2xvb206IHtcclxuICAgIGlkOiA0NCxcclxuICAgIG5hbWU6ICdHbG9vbScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnR2xvb20hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICB2aWxlcGx1bWU6IHtcclxuICAgIGlkOiA0NSxcclxuICAgIG5hbWU6ICdWaWxlcGx1bWUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1ZpbGVwbHVtZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIHBhcmFzOiB7XHJcbiAgICBpZDogNDYsXHJcbiAgICBuYW1lOiAnUGFyYXMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1BhcmFzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgcGFyYXNlY3Q6IHtcclxuICAgIGlkOiA0NyxcclxuICAgIG5hbWU6ICdQYXJhc2VjdCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUGFyYXNlY3QhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXHJcbiAgfSxcclxuICB2ZW5vbmF0OiB7XHJcbiAgICBpZDogNDgsXHJcbiAgICBuYW1lOiAnVmVub25hdCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnVmVub25hdCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICB2ZW5vbW90aDoge1xyXG4gICAgaWQ6IDQ5LFxyXG4gICAgbmFtZTogJ1Zlbm9tb3RoJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdWZW5vbW90aCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBkaWdsZXR0OiB7XHJcbiAgICBpZDogNTAsXHJcbiAgICBuYW1lOiAnRGlnbGV0dCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRGlnbGV0dCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBkdWd0cmlvOiB7XHJcbiAgICBpZDogNTEsXHJcbiAgICBuYW1lOiAnRHVndHJpbycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRHVndHJpbyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBtZW93dGg6IHtcclxuICAgIGlkOiA1MixcclxuICAgIG5hbWU6ICdNZW93dGgnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ01lb3d0aCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBwZXJzaWFuOiB7XHJcbiAgICBpZDogNTMsXHJcbiAgICBuYW1lOiAnUGVyc2lhbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUGVyc2lhbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBwc3lkdWNrOiB7XHJcbiAgICBpZDogNTQsXHJcbiAgICBuYW1lOiAnUHN5ZHVjaycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUHN5ZHVjayEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGdvbGR1Y2s6IHtcclxuICAgIGlkOiA1NSxcclxuICAgIG5hbWU6ICdHb2xkdWNrJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdHb2xkdWNrIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgbWFua2V5OiB7XHJcbiAgICBpZDogNTYsXHJcbiAgICBuYW1lOiAnTWFua2V5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNYW5rZXkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXHJcbiAgfSxcclxuICBwcmltZWFwZToge1xyXG4gICAgaWQ6IDU3LFxyXG4gICAgbmFtZTogJ1ByaW1lYXBlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdQcmltZWFwZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcclxuICB9LFxyXG4gIGdyb3dsaXRoZToge1xyXG4gICAgaWQ6IDU4LFxyXG4gICAgbmFtZTogJ0dyb3dsaXRoZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnR3Jvd2xpdGhlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXHJcbiAgfSxcclxuICBhcmNhbmluZToge1xyXG4gICAgaWQ6IDU5LFxyXG4gICAgbmFtZTogJ0FyY2FuaW5lJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdBcmNhbmluZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxyXG4gIH0sXHJcbiAgcG9saXdhZzoge1xyXG4gICAgaWQ6IDYwLFxyXG4gICAgbmFtZTogJ1BvbGl3YWcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1BvbGl3YWchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBwb2xpd2hpcmw6IHtcclxuICAgIGlkOiA2MSxcclxuICAgIG5hbWU6ICdQb2xpd2hpcmwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1BvbGl3aGlybCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIHBvbGl3cmF0aDoge1xyXG4gICAgaWQ6IDYyLFxyXG4gICAgbmFtZTogJ1BvbGl3cmF0aCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUG9saXdyYXRoIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXHJcbiAgfSxcclxuICBhYnJhOiB7XHJcbiAgICBpZDogNjMsXHJcbiAgICBuYW1lOiAnQWJyYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnQWJyYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAga2FkYWJyYToge1xyXG4gICAgaWQ6IDY0LFxyXG4gICAgbmFtZTogJ0thZGFicmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0thZGFicmEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIGFsYWthemFtOiB7XHJcbiAgICBpZDogNjUsXHJcbiAgICBuYW1lOiAnQWxha2F6YW0nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0FsYWthemFtIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBtYWNob3A6IHtcclxuICAgIGlkOiA2NixcclxuICAgIG5hbWU6ICdNYWNob3AnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ01hY2hvcCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcclxuICB9LFxyXG4gIG1hY2hva2U6IHtcclxuICAgIGlkOiA2NyxcclxuICAgIG5hbWU6ICdNYWNob2tlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNYWNob2tlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxyXG4gIH0sXHJcbiAgbWFjaGFtcDoge1xyXG4gICAgaWQ6IDY4LFxyXG4gICAgbmFtZTogJ01hY2hhbXAnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0FsYWthemFtIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxyXG4gIH0sXHJcbiAgYmVsbHNwcm91dDoge1xyXG4gICAgaWQ6IDY5LFxyXG4gICAgbmFtZTogJ0JlbGxzcHJvdXQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0JlbGxzcHJvdXQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICB3ZWVwaW5iZWxsOiB7XHJcbiAgICBpZDogNzAsXHJcbiAgICBuYW1lOiAnV2VlcGluYmVsbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnV2VlcGluYmVsbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIHZpY3RyZWViZWw6IHtcclxuICAgIGlkOiA3MSxcclxuICAgIG5hbWU6ICdWaWN0cmVlYmVsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdWaWN0cmVlYmVsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgdGVudGFjb29sOiB7XHJcbiAgICBpZDogNzIsXHJcbiAgICBuYW1lOiAnVGVudGFjb29sJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdUZW50YWNvb2whJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICB0ZW50YWNydWVsOiB7XHJcbiAgICBpZDogNzMsXHJcbiAgICBuYW1lOiAnVGVudGFjcnVlbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnVGVudGFjcnVlbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIGdlb2R1ZGU6IHtcclxuICAgIGlkOiA3NCxcclxuICAgIG5hbWU6ICdHZW9kdWRlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdHZW9kdWRlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBncmF2ZWxlcjoge1xyXG4gICAgaWQ6IDc1LFxyXG4gICAgbmFtZTogJ0dyYXZlbGVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdHcmF2ZWxlciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgZ29sZW06IHtcclxuICAgIGlkOiA3NixcclxuICAgIG5hbWU6ICdHb2xlbScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnR29sZW0hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIHBvbnl0YToge1xyXG4gICAgaWQ6IDc3LFxyXG4gICAgbmFtZTogJ1Bvbnl0YScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUG9ueXRhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXHJcbiAgfSxcclxuICByYXBpZGFzaDoge1xyXG4gICAgaWQ6IDc4LFxyXG4gICAgbmFtZTogJ1JhcGlkYXNoJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdSYXBpZGFzaCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxyXG4gIH0sXHJcbiAgc2xvd3Bva2U6IHtcclxuICAgIGlkOiA3OSxcclxuICAgIG5hbWU6ICdTbG93cG9rZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnU2xvd3Bva2UhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgc2xvd2Jybzoge1xyXG4gICAgaWQ6IDgwLFxyXG4gICAgbmFtZTogJ1Nsb3dicm8nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1Nsb3dicm8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgbWFnbmVtaXRlOiB7XHJcbiAgICBpZDogODEsXHJcbiAgICBuYW1lOiAnTWFnbmVtaXRlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNYWduZW1pdGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpYywgUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsXSxcclxuICB9LFxyXG4gIG1hZ25ldG9uOiB7XHJcbiAgICBpZDogODIsXHJcbiAgICBuYW1lOiAnTWFnbmV0b24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ01hZ25ldG9uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWMsIFBva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXHJcbiAgfSxcclxuICBmYXJmZXRjaGQ6IHtcclxuICAgIGlkOiA4MyxcclxuICAgIG5hbWU6ICdGYXJmZXRjaFxcJ2QnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0ZhcmZldGNoXFwnZCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBkb2R1bzoge1xyXG4gICAgaWQ6IDg0LFxyXG4gICAgbmFtZTogJ0RvZHVvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdEb2R1byEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBkb2RyaW86IHtcclxuICAgIGlkOiA4NSxcclxuICAgIG5hbWU6ICdEb2RyaW8nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0RvZHJpbyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBzZWVsOiB7XHJcbiAgICBpZDogODYsXHJcbiAgICBuYW1lOiAnU2VlbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnU2VlbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGRld2dvbmc6IHtcclxuICAgIGlkOiA4NyxcclxuICAgIG5hbWU6ICdEZXdnb25nJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdEZXdnb25nIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5pY2VdLFxyXG4gIH0sXHJcbiAgZ3JpbWVyOiB7XHJcbiAgICBpZDogODgsXHJcbiAgICBuYW1lOiAnR3JpbWVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdHcmltZXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgbXVrOiB7XHJcbiAgICBpZDogODksXHJcbiAgICBuYW1lOiAnTXVrJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNdWshJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgc2hlbGxkZXI6IHtcclxuICAgIGlkOiA5MCxcclxuICAgIG5hbWU6ICdTaGVsbGRlcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnU2hlbGxkZXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBjbG95c3Rlcjoge1xyXG4gICAgaWQ6IDkxLFxyXG4gICAgbmFtZTogJ0Nsb3lzdGVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdDbG95c3RlciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuaWNlXSxcclxuICB9LFxyXG4gIGdhc3RseToge1xyXG4gICAgaWQ6IDkyLFxyXG4gICAgbmFtZTogJ0dhc3RseScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnR2FzdGx5IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3QsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgaGF1bnRlcjoge1xyXG4gICAgaWQ6IDkzLFxyXG4gICAgbmFtZTogJ0hhdW50ZXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0hhdW50ZXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdCwgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBnZW5nYXI6IHtcclxuICAgIGlkOiA5NCxcclxuICAgIG5hbWU6ICdHZW5nYXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0dlbmdhciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0LCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIG9uaXg6IHtcclxuICAgIGlkOiA5NSxcclxuICAgIG5hbWU6ICdPbml4JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdPbml4IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBkcm93emVlOiB7XHJcbiAgICBpZDogOTYsXHJcbiAgICBuYW1lOiAnRHJvd3plZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRHJvd3plZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgaHlwbm86IHtcclxuICAgIGlkOiA5NyxcclxuICAgIG5hbWU6ICdIeXBubycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnSHlwbm8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIGtyYWJieToge1xyXG4gICAgaWQ6IDk4LFxyXG4gICAgbmFtZTogJ0tyYWJieScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnS3JhYmJ5IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAga2luZ2xlcjoge1xyXG4gICAgaWQ6IDk5LFxyXG4gICAgbmFtZTogJ0tpbmdsZXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0tpbmdsZXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICB2b2x0b3JiOiB7XHJcbiAgICBpZDogMTAwLFxyXG4gICAgbmFtZTogJ1ZvbHRvcmInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1ZvbHRvcmIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICBlbGVjdHJvZGU6IHtcclxuICAgIGlkOiAxMDEsXHJcbiAgICBuYW1lOiAnRWxlY3Ryb2RlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdFbGVjdHJvZGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICBleGVnZ2N1dGU6IHtcclxuICAgIGlkOiAxMDIsXHJcbiAgICBuYW1lOiAnRXhlZ2djdXRlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdFeGVnZ2N1dGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgZXhlZ2d1dG9yOiB7XHJcbiAgICBpZDogMTAzLFxyXG4gICAgbmFtZTogJ0V4ZWdndXRvcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRXhlZ2d1dG9yIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIGN1Ym9uZToge1xyXG4gICAgaWQ6IDEwNCxcclxuICAgIG5hbWU6ICdDdWJvbmUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0N1Ym9uZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBtYXJvd2FrOiB7XHJcbiAgICBpZDogMTA1LFxyXG4gICAgbmFtZTogJ01hcm93YWsnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ01hcm93YWshJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgaGl0bW9ubGVlOiB7XHJcbiAgICBpZDogMTA2LFxyXG4gICAgbmFtZTogJ0hpdG1vbmxlZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnSGl0bW9ubGVlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxyXG4gIH0sXHJcbiAgaGl0bW9uY2hhbjoge1xyXG4gICAgaWQ6IDEwNyxcclxuICAgIG5hbWU6ICdIaXRtb25jaGFuJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdIaXRtb25jaGFuIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxyXG4gIH0sXHJcbiAgbGlja2l0dW5nOiB7XHJcbiAgICBpZDogMTA4LFxyXG4gICAgbmFtZTogJ0xpY2tpdHVuZycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTGlja2l0dW5nIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIGtvZmZpbmc6IHtcclxuICAgIGlkOiAxMDksXHJcbiAgICBuYW1lOiAnS29mZmluZycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnS29mZmluZyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICB3ZWV6aW5nOiB7XHJcbiAgICBpZDogMTEwLFxyXG4gICAgbmFtZTogJ1dlZXppbmcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1dlZXppbmchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgcmh5aG9ybjoge1xyXG4gICAgaWQ6IDExMSxcclxuICAgIG5hbWU6ICdSaHlob3JuJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdSaHlob3JuIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kLCBQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXHJcbiAgfSxcclxuICByaHlkb246IHtcclxuICAgIGlkOiAxMTIsXHJcbiAgICBuYW1lOiAnUmh5ZG9uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdSaHlkb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmQsIFBva2Vtb25FbGVtZW50VHlwZS5yb2NrXSxcclxuICB9LFxyXG4gIGNoYW5zZXk6IHtcclxuICAgIGlkOiAxMTMsXHJcbiAgICBuYW1lOiAnQ2hhbnNleScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnQ2hhbnNleSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICB0YW5nZWxhOiB7XHJcbiAgICBpZDogMTE0LFxyXG4gICAgbmFtZTogJ1RhbmdlbGEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1RhbmdlbGEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXHJcbiAgfSxcclxuICBrYW5nYXNraGFuOiB7XHJcbiAgICBpZDogMTE1LFxyXG4gICAgbmFtZTogJ0thbmdhc2toYW4nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0thbmdhc2toYW4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgaG9yc2VhOiB7XHJcbiAgICBpZDogMTE2LFxyXG4gICAgbmFtZTogJ0hvcnNlYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnSG9yc2VhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgc2VhZHJhOiB7XHJcbiAgICBpZDogMTE3LFxyXG4gICAgbmFtZTogJ1NlYWRyYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnU2VhZHJhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgZ29sZGVlbjoge1xyXG4gICAgaWQ6IDExOCxcclxuICAgIG5hbWU6ICdHb2xkZWVuJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdHb2xkZWVuIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgc2Vha2luZzoge1xyXG4gICAgaWQ6IDExOSxcclxuICAgIG5hbWU6ICdTZWFraW5nJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdTZWFraW5nIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgc3Rhcnl1OiB7XHJcbiAgICBpZDogMTIwLFxyXG4gICAgbmFtZTogJ1N0YXJ5dScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnU3Rhcnl1IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgc3Rhcm1pZToge1xyXG4gICAgaWQ6IDEyMSxcclxuICAgIG5hbWU6ICdTdGFybWllJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdTdGFybWllIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIG1ybWltZToge1xyXG4gICAgaWQ6IDEyMixcclxuICAgIG5hbWU6ICdNci4gTWltZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTXIuIE1pbWUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHNjeXRoZXI6IHtcclxuICAgIGlkOiAxMjMsXHJcbiAgICBuYW1lOiAnU2N5dGhlcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnU2N5dGhlciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBqeW54OiB7XHJcbiAgICBpZDogMTI0LFxyXG4gICAgbmFtZTogJ0p5bngnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0p5bnghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2UsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIGVsZWN0YWJ1eno6IHtcclxuICAgIGlkOiAxMjUsXHJcbiAgICBuYW1lOiAnRWxlY3RhYnV6eicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRWxlY3RhYnV6eiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcclxuICB9LFxyXG4gIG1hZ21hcjoge1xyXG4gICAgaWQ6IDEyNixcclxuICAgIG5hbWU6ICdNYWdtYXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ01hZ21hciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxyXG4gIH0sXHJcbiAgcGluc2lyOiB7XHJcbiAgICBpZDogMTI3LFxyXG4gICAgbmFtZTogJ1BpbnNpcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUGluc2lyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcclxuICB9LFxyXG4gIHRhdXJvczoge1xyXG4gICAgaWQ6IDEyOCxcclxuICAgIG5hbWU6ICdUYXVyb3MnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1RhdXJvcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBtYWdpa2FycDoge1xyXG4gICAgaWQ6IDEyOSxcclxuICAgIG5hbWU6ICdNYWdpa2FycCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTWFnaWthcnAhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBneWFyYWRvczoge1xyXG4gICAgaWQ6IDEzMCxcclxuICAgIG5hbWU6ICdHeWFyYWRvcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnR3lhcmFkb3MhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBsYXByYXM6IHtcclxuICAgIGlkOiAxMzEsXHJcbiAgICBuYW1lOiAnTGFwcmFzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdMYXByYXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmljZV0sXHJcbiAgfSxcclxuICBkaXR0bzoge1xyXG4gICAgaWQ6IDEzMixcclxuICAgIG5hbWU6ICdEaXR0bycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRGl0dG8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgZWV2ZWU6IHtcclxuICAgIGlkOiAxMzMsXHJcbiAgICBuYW1lOiAnRWV2ZWUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0VldmVlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHZhcG9yZW9uOiB7XHJcbiAgICBpZDogMTM0LFxyXG4gICAgbmFtZTogJ1ZhcG9yZW9uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdWYXBvcmVvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGpvbHRlb246IHtcclxuICAgIGlkOiAxMzUsXHJcbiAgICBuYW1lOiAnSm9sdGVvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnSm9sdGVvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcclxuICB9LFxyXG4gIGZsYXJlb246IHtcclxuICAgIGlkOiAxMzYsXHJcbiAgICBuYW1lOiAnRmxhcmVvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRmxhcmVvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxyXG4gIH0sXHJcbiAgcG9yeWdvbjoge1xyXG4gICAgaWQ6IDEzNyxcclxuICAgIG5hbWU6ICdQb3J5Z29uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdQb3J5Z29uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIG9tYW55dGU6IHtcclxuICAgIGlkOiAxMzgsXHJcbiAgICBuYW1lOiAnT21hbnl0ZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnT21hbnl0ZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5mb3NzaWwsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgb21hc3Rhcjoge1xyXG4gICAgaWQ6IDEzOSxcclxuICAgIG5hbWU6ICdPbWFzdGFyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdPbWFzdGFyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmZvc3NpbCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBrYWJ1dG86IHtcclxuICAgIGlkOiAxNDAsXHJcbiAgICBuYW1lOiAnS2FidXRvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdLYWJ1dG8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuZm9zc2lsLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGthYnV0b3BzOiB7XHJcbiAgICBpZDogMTQxLFxyXG4gICAgbmFtZTogJ0thYnV0b3BzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdLYWJ1dG9wcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5mb3NzaWwsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgYWVyb2RhY3R5bDoge1xyXG4gICAgaWQ6IDE0MixcclxuICAgIG5hbWU6ICdBZXJvZGFjdHlsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdBZXJvZGFjdHlsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmZvc3NpbCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgc25vcmxheDoge1xyXG4gICAgaWQ6IDE0MyxcclxuICAgIG5hbWU6ICdTbm9ybGF4JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdTbm9ybGF4IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIGFydGljdW5vOiB7XHJcbiAgICBpZDogMTQ0LFxyXG4gICAgbmFtZTogJ0FydGljdW5vJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdBcnRpY3VubyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5zdWJMZWdlbmRhcnksXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2UsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgemFwZG9zOiB7XHJcbiAgICBpZDogMTQ1LFxyXG4gICAgbmFtZTogJ1phcGRvcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnWmFwZG9zIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIG1vbHRyZXM6IHtcclxuICAgIGlkOiAxNDYsXHJcbiAgICBuYW1lOiAnTW9sdHJlcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTW9sdHJlcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5zdWJMZWdlbmRhcnksXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIGRyYXRpbmk6IHtcclxuICAgIGlkOiAxNDcsXHJcbiAgICBuYW1lOiAnRHJhdGluaScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRHJhdGluaSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbl0sXHJcbiAgfSxcclxuICBkcmFnb25haXI6IHtcclxuICAgIGlkOiAxNDgsXHJcbiAgICBuYW1lOiAnRHJhZ29uYWlyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdEcmFnb25haXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kcmFnb25dLFxyXG4gIH0sXHJcbiAgZHJhZ29uaXRlOiB7XHJcbiAgICBpZDogMTQ5LFxyXG4gICAgbmFtZTogJ0RyYWdvbml0ZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRHJhZ29uaXRlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIG1ld3R3bzoge1xyXG4gICAgaWQ6IDE1MCxcclxuICAgIG5hbWU6ICdNZXd0d28nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ01ld3R3byEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5sZWdlbmRhcnksXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIG1ldzoge1xyXG4gICAgaWQ6IDE1MSxcclxuICAgIG5hbWU6ICdNZXcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ01ldyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgLy8gR2VuZXJhdGlvbiAyXHJcbiAgY2hpa29yaXRhOiB7XHJcbiAgICBpZDogMTUyLFxyXG4gICAgbmFtZTogJ0NoaWtvcml0YScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnQ2hpa29yaXRhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgYmF5bGVlZjoge1xyXG4gICAgaWQ6IDE1MyxcclxuICAgIG5hbWU6ICdCYXlsZWVmJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdCYXlsZWVmIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgbWVnYW5pdW06IHtcclxuICAgIGlkOiAxNTQsXHJcbiAgICBuYW1lOiAnTWVnYW5pdW0nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ01lZ2FuaXVtIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgY3luZGFxdWlsOiB7XHJcbiAgICBpZDogMTU1LFxyXG4gICAgbmFtZTogJ0N5bmRhcXVpbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnQ3luZGFxdWlsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXHJcbiAgfSxcclxuICBxdWlsYXZhOiB7XHJcbiAgICBpZDogMTU2LFxyXG4gICAgbmFtZTogJ1F1aWxhdmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1F1aWxhdmEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIHR5cGhsb3Npb246IHtcclxuICAgIGlkOiAxNTcsXHJcbiAgICBuYW1lOiAnVHlwaGxvc2lvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVHlwaGxvc2lvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxyXG4gIH0sXHJcbiAgdG90b2RpbGU6IHtcclxuICAgIGlkOiAxNTgsXHJcbiAgICBuYW1lOiAnVG90b2RpbGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1RvdG9kaWxlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgY3JvY29uYXc6IHtcclxuICAgIGlkOiAxNTksXHJcbiAgICBuYW1lOiAnQ3JvY29uYXcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0Nyb2NvbmF3IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgZmVyYWxpZ2F0cjoge1xyXG4gICAgaWQ6IDE2MCxcclxuICAgIG5hbWU6ICdGZXJhbGlnYXRyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdGZXJhbGlnYXRyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgc2VudHJldDoge1xyXG4gICAgaWQ6IDE2MSxcclxuICAgIG5hbWU6ICdTZW50cmV0JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdTZW50cmV0IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIGZ1cnJldDoge1xyXG4gICAgaWQ6IDE2MixcclxuICAgIG5hbWU6ICdGdXJyZXQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0Z1cnJldCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBob290aG9vdDoge1xyXG4gICAgaWQ6IDE2MyxcclxuICAgIG5hbWU6ICdIb290aG9vdCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnSG9vdGhvb3QhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgbm9jdG93bDoge1xyXG4gICAgaWQ6IDE2NCxcclxuICAgIG5hbWU6ICdOb2N0b3dsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdOb2N0b3dsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIGxlZHliYToge1xyXG4gICAgaWQ6IDE2NSxcclxuICAgIG5hbWU6ICdMZWR5YmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0xlZHliYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBsZWRpYW46IHtcclxuICAgIGlkOiAxNjYsXHJcbiAgICBuYW1lOiAnTGVkaWFuJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdMZWRpYW4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgc3BpbmFyYWs6IHtcclxuICAgIGlkOiAxNjcsXHJcbiAgICBuYW1lOiAnU3BpbmFyYWsnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1NwaW5hcmFrIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIGFyaWFkb3M6IHtcclxuICAgIGlkOiAxNjgsXHJcbiAgICBuYW1lOiAnQXJpYWRvcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnQXJpYWRvcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBjcm9iYXQ6IHtcclxuICAgIGlkOiAxNjksXHJcbiAgICBuYW1lOiAnQ3JvYmF0JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdDcm9iYXQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb24sIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgY2hpbmNob3U6IHtcclxuICAgIGlkOiAxNzAsXHJcbiAgICBuYW1lOiAnQ2hpbmNob3UnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0NoaW5jaG91IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICBsYW50dXJuOiB7XHJcbiAgICBpZDogMTcxLFxyXG4gICAgbmFtZTogJ0xhbnR1cm4nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0xhbnR1cm4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcclxuICB9LFxyXG4gIHBpY2h1OiB7XHJcbiAgICBpZDogMTcyLFxyXG4gICAgbmFtZTogJ1BpY2h1JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdQaWNodSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcclxuICB9LFxyXG4gIGNsZWZmYToge1xyXG4gICAgaWQ6IDE3MyxcclxuICAgIG5hbWU6ICdDbGVmZmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0NsZWZmYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBpZ2dseWJ1ZmY6IHtcclxuICAgIGlkOiAxNzQsXHJcbiAgICBuYW1lOiAnSWdnbHlidWZmJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdJZ2dseWJ1ZmYhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgdG9nZXBpOiB7XHJcbiAgICBpZDogMTc1LFxyXG4gICAgbmFtZTogJ1RvZ2VwaScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVG9nZXBpIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHRvZ2V0aWM6IHtcclxuICAgIGlkOiAxNzYsXHJcbiAgICBuYW1lOiAnVG9nZXRpYycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVG9nZXRpYyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBuYXR1OiB7XHJcbiAgICBpZDogMTc3LFxyXG4gICAgbmFtZTogJ05hdHUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ05hdHUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHhhdHU6IHtcclxuICAgIGlkOiAxNzgsXHJcbiAgICBuYW1lOiAnWGF0dScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnWGF0dSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWMsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgbWFyZWVwOiB7XHJcbiAgICBpZDogMTc5LFxyXG4gICAgbmFtZTogJ01hcmVlcCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnTWFyZWVwIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxyXG4gIH0sXHJcbiAgZmxhYWZmeToge1xyXG4gICAgaWQ6IDE4MCxcclxuICAgIG5hbWU6ICdGbGFhZmZ5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdGbGFhZmZ5IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxyXG4gIH0sXHJcbiAgYW1waGFyb3M6IHtcclxuICAgIGlkOiAxODEsXHJcbiAgICBuYW1lOiAnQW1waGFyb3MnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0FtcGhhcm9zIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxyXG4gIH0sXHJcbiAgYmVsbG9zc29tOiB7XHJcbiAgICBpZDogMTgyLFxyXG4gICAgbmFtZTogJ0JlbGxvc3NvbScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnQmVsbG9zc29tIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgbWFyaWxsOiB7XHJcbiAgICBpZDogMTgzLFxyXG4gICAgbmFtZTogJ01hcmlsbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnTWFyaWxsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgYXp1bWFyaWxsOiB7XHJcbiAgICBpZDogMTg0LFxyXG4gICAgbmFtZTogJ0F6dW1hcmlsbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnQXp1bWFyaWxsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgc3Vkb3dvb2RvOiB7XHJcbiAgICBpZDogMTg1LFxyXG4gICAgbmFtZTogJ1N1ZG93b29kbycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU3Vkb3dvb2RvIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXHJcbiAgfSxcclxuICBwb2xpdG9lZDoge1xyXG4gICAgaWQ6IDE4NixcclxuICAgIG5hbWU6ICdQb2xpdG9lZCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnUG9saXRvZWQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBob3BwaXA6IHtcclxuICAgIGlkOiAxODcsXHJcbiAgICBuYW1lOiAnSG9wcGlwJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdIb3BwaXAhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBza2lwbG9vbToge1xyXG4gICAgaWQ6IDE4OCxcclxuICAgIG5hbWU6ICdTa2lwbG9vbScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU2tpcGxvb20hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBqdW1wbHVmZjoge1xyXG4gICAgaWQ6IDE4OSxcclxuICAgIG5hbWU6ICdKdW1wbHVmZicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnSnVtcGx1ZmYhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBhaXBvbToge1xyXG4gICAgaWQ6IDE5MCxcclxuICAgIG5hbWU6ICdBaXBvbScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnQWlwb20hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgc3Vua2Vybjoge1xyXG4gICAgaWQ6IDE5MSxcclxuICAgIG5hbWU6ICdTdW5rZXJuJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdTdW5rZXJuIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgc3VuZmxvcmE6IHtcclxuICAgIGlkOiAxOTIsXHJcbiAgICBuYW1lOiAnU3VuZmxvcmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1N1bmZsb3JhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgeWFubWE6IHtcclxuICAgIGlkOiAxOTMsXHJcbiAgICBuYW1lOiAnWWFubWEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1lhbm1hIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHdvb3Blcjoge1xyXG4gICAgaWQ6IDE5NCxcclxuICAgIG5hbWU6ICdXb29wZXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1dvb3BlciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIHF1YWdzaXJlOiB7XHJcbiAgICBpZDogMTk1LFxyXG4gICAgbmFtZTogJ1F1YWdzaXJlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdRdWFnc2lyZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIGVzcGVvbjoge1xyXG4gICAgaWQ6IDE5NixcclxuICAgIG5hbWU6ICdFc3Blb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0VzcGVvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW1icmVvbjoge1xyXG4gICAgaWQ6IDE5NyxcclxuICAgIG5hbWU6ICdVbWJyZW9uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbWJyZW9uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXHJcbiAgfSxcclxuICBtdXJrcm93OiB7XHJcbiAgICBpZDogMTk4LFxyXG4gICAgbmFtZTogJ011cmtyb3cnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ011cmtyb3chJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kYXJrLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHNsb3draW5nOiB7XHJcbiAgICBpZDogMTk5LFxyXG4gICAgbmFtZTogJ1Nsb3draW5nJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdTbG93a2luZyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBtaXNkcmVhdnVzOiB7XHJcbiAgICBpZDogMjAwLFxyXG4gICAgbmFtZTogJ01pc2RyZWF2dXMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ01pc2RyZWF2dXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdF0sXHJcbiAgfSxcclxuICB1bm93bl9hOiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChBKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX2I6IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKEIpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25fYzoge1xyXG4gICAgaWQ6IDIwMSxcclxuICAgIG5hbWU6ICdVbm93biAoQyknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vub3duIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICB1bm93bl9kOiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChEKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX2U6IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKEUpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25fZjoge1xyXG4gICAgaWQ6IDIwMSxcclxuICAgIG5hbWU6ICdVbm93biAoRiknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vub3duIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICB1bm93bl9nOiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChHKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX2g6IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKEgpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25faToge1xyXG4gICAgaWQ6IDIwMSxcclxuICAgIG5hbWU6ICdVbm93biAoSSknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vub3duIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICB1bm93bl9qOiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChKKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX2s6IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKEspJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25fbDoge1xyXG4gICAgaWQ6IDIwMSxcclxuICAgIG5hbWU6ICdVbm93biAoTCknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vub3duIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICB1bm93bl9tOiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChNKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX246IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKE4pJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25fbzoge1xyXG4gICAgaWQ6IDIwMSxcclxuICAgIG5hbWU6ICdVbm93biAoTyknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vub3duIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICB1bm93bl9wOiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChQKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX3E6IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKFEpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25fcjoge1xyXG4gICAgaWQ6IDIwMSxcclxuICAgIG5hbWU6ICdVbm93biAoUiknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vub3duIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICB1bm93bl9zOiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChTKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX3Q6IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKFQpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25fdToge1xyXG4gICAgaWQ6IDIwMSxcclxuICAgIG5hbWU6ICdVbm93biAoVSknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vub3duIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICB1bm93bl92OiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChWKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX3c6IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKFcpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25feDoge1xyXG4gICAgaWQ6IDIwMSxcclxuICAgIG5hbWU6ICdVbm93biAoWCknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vub3duIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICB1bm93bl95OiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChZKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX3o6IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKFopJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25fZXhjbGFtYXRpb246IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKCEpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25fcXVlc3Rpb246IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKD8pJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgd29iYnVmZmV0OiB7XHJcbiAgICBpZDogMjAyLFxyXG4gICAgbmFtZTogJ1dvYmJ1ZmZldCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnV29iYnVmZmV0IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBnaXJhZmFyaWc6IHtcclxuICAgIGlkOiAyMDMsXHJcbiAgICBuYW1lOiAnR2lyYWZhcmlnJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdHaXJhZmFyaWchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHBpbmVjbzoge1xyXG4gICAgaWQ6IDIwNCxcclxuICAgIG5hbWU6ICdQaW5lY28nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1BpbmVjbyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1Z10sXHJcbiAgfSxcclxuICBmb3JyZXRyZXNzOiB7XHJcbiAgICBpZDogMjA1LFxyXG4gICAgbmFtZTogJ0ZvcnJldHJlc3MnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0ZvcnJldHJlc3MhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXHJcbiAgfSxcclxuICBkdW5zcGFyY2U6IHtcclxuICAgIGlkOiAyMDYsXHJcbiAgICBuYW1lOiAnRHVuc3BhcmNlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdEdW5zcGFyY2UhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgZ2xpZ2FyOiB7XHJcbiAgICBpZDogMjA3LFxyXG4gICAgbmFtZTogJ0dsaWdhcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnR2xpZ2FyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHN0ZWVsaXg6IHtcclxuICAgIGlkOiAyMDgsXHJcbiAgICBuYW1lOiAnU3RlZWxpeCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU3RlZWxpeCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5zdGVlbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBzbnViYnVsbDoge1xyXG4gICAgaWQ6IDIwOSxcclxuICAgIG5hbWU6ICdTbnViYnVsbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU251YmJ1bGwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgZ3JhbmJ1bGw6IHtcclxuICAgIGlkOiAyMTAsXHJcbiAgICBuYW1lOiAnR3JhbmJ1bGwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0dyYW5idWxsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHF3aWxmaXNoOiB7XHJcbiAgICBpZDogMjExLFxyXG4gICAgbmFtZTogJ1F3aWxmaXNoJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdRd2lsZmlzaCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIHNjaXpvcjoge1xyXG4gICAgaWQ6IDIxMixcclxuICAgIG5hbWU6ICdTY2l6b3InLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1NjaXpvciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsXSxcclxuICB9LFxyXG4gIHNodWNrbGU6IHtcclxuICAgIGlkOiAyMTMsXHJcbiAgICBuYW1lOiAnU2h1Y2tsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU2h1Y2tsZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2tdLFxyXG4gIH0sXHJcbiAgaGVyYWNyb3NzOiB7XHJcbiAgICBpZDogMjE0LFxyXG4gICAgbmFtZTogJ0hlcmFjcm9zcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnSGVyYWNyb3NzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxyXG4gIH0sXHJcbiAgc25lYXNlbDoge1xyXG4gICAgaWQ6IDIxNSxcclxuICAgIG5hbWU6ICdTbmVhc2VsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdTbmVhc2VsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZGFyaywgUG9rZW1vbkVsZW1lbnRUeXBlLmljZV0sXHJcbiAgfSxcclxuICB0ZWRkaXVyc2E6IHtcclxuICAgIGlkOiAyMTYsXHJcbiAgICBuYW1lOiAnVGVkZGl1cnNhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdUZWRkaXVyc2EhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgdXJzYXJpbmc6IHtcclxuICAgIGlkOiAyMTcsXHJcbiAgICBuYW1lOiAnVXJzYXJpbmcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vyc2FyaW5nIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHNsdWdtYToge1xyXG4gICAgaWQ6IDIxOCxcclxuICAgIG5hbWU6ICdTbHVnbWEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1NsdWdtYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxyXG4gIH0sXHJcbiAgbWFnY2FyZ286IHtcclxuICAgIGlkOiAyMTksXHJcbiAgICBuYW1lOiAnTWFnY2FyZ28nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ01hZ2NhcmdvIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZSwgUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2tdLFxyXG4gIH0sXHJcbiAgc3dpbnViOiB7XHJcbiAgICBpZDogMjIwLFxyXG4gICAgbmFtZTogJ1N3aW51YicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU3dpbnViIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuaWNlLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIHBpbG9zd2luZToge1xyXG4gICAgaWQ6IDIyMSxcclxuICAgIG5hbWU6ICdQaWxvc3dpbmUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1BpbG9zd2luZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmljZSwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBjb3Jzb2xhOiB7XHJcbiAgICBpZDogMjIyLFxyXG4gICAgbmFtZTogJ0NvcnNvbGEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0NvcnNvbGEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2tdLFxyXG4gIH0sXHJcbiAgcmVtb3JhaWQ6IHtcclxuICAgIGlkOiAyMjMsXHJcbiAgICBuYW1lOiAnUmVtb3JhaWQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1JlbW9yYWlkIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgb2N0aWxsZXJ5OiB7XHJcbiAgICBpZDogMjI0LFxyXG4gICAgbmFtZTogJ09jdGlsbGVyeScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnT2N0aWxsZXJ5IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgZGVsaWJpcmQ6IHtcclxuICAgIGlkOiAyMjUsXHJcbiAgICBuYW1lOiAnRGVsaWJpcmQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0RlbGliaXJkIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuaWNlLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIG1hbnRpbmU6IHtcclxuICAgIGlkOiAyMjYsXHJcbiAgICBuYW1lOiAnTWFudGluZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnTWFudGluZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHNrYXJtb3J5OiB7XHJcbiAgICBpZDogMjI3LFxyXG4gICAgbmFtZTogJ1NrYXJtb3J5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdTa2FybW9yeSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIGhvdW5kb3VyOiB7XHJcbiAgICBpZDogMjI4LFxyXG4gICAgbmFtZTogJ0hvdW5kb3VyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdIb3VuZG91ciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmssIFBva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIGhvdW5kb29tOiB7XHJcbiAgICBpZDogMjI5LFxyXG4gICAgbmFtZTogJ0hvdW5kb29tJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdIb3VuZG9vbSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmssIFBva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIGtpbmdkcmE6IHtcclxuICAgIGlkOiAyMzAsXHJcbiAgICBuYW1lOiAnS2luZ2RyYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnS2luZ2RyYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcclxuICB9LFxyXG4gIHBoYW5weToge1xyXG4gICAgaWQ6IDIzMSxcclxuICAgIG5hbWU6ICdQaGFucHknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1BoYW5weSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBkb25waGFuOiB7XHJcbiAgICBpZDogMjMyLFxyXG4gICAgbmFtZTogJ0RvbnBoYW4nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0RvbnBoYW4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgcG9yeWdvbjI6IHtcclxuICAgIGlkOiAyMzMsXHJcbiAgICBuYW1lOiAnUG9yeWdvbjInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Bvcnlnb24yIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHN0YW50bGVyOiB7XHJcbiAgICBpZDogMjM0LFxyXG4gICAgbmFtZTogJ1N0YW50bGVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdTdGFudGxlciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBzbWVhcmdsZToge1xyXG4gICAgaWQ6IDIzNSxcclxuICAgIG5hbWU6ICdTbWVhcmdsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU21lYXJnbGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgdHlyb2d1ZToge1xyXG4gICAgaWQ6IDIzNixcclxuICAgIG5hbWU6ICdUeXJvZ3VlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdUeXJvZ3VlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxyXG4gIH0sXHJcbiAgaGl0bW9udG9wOiB7XHJcbiAgICBpZDogMjM3LFxyXG4gICAgbmFtZTogJ0hpdG1vbnRvcCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnSGl0bW9udG9wIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxyXG4gIH0sXHJcbiAgc21vb2NodW06IHtcclxuICAgIGlkOiAyMzgsXHJcbiAgICBuYW1lOiAnU21vb2NodW0nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Ntb29jaHVtIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuaWNlLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBlbGVraWQ6IHtcclxuICAgIGlkOiAyMzksXHJcbiAgICBuYW1lOiAnRWxla2lkJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdFbGVraWQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICBtYWdieToge1xyXG4gICAgaWQ6IDI0MCxcclxuICAgIG5hbWU6ICdNYWdieScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnTWFnYnkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIG1pbHRhbms6IHtcclxuICAgIGlkOiAyNDEsXHJcbiAgICBuYW1lOiAnTWlsdGFuaycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnTWlsdGFuayEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBibGlzc2V5OiB7XHJcbiAgICBpZDogMjQyLFxyXG4gICAgbmFtZTogJ0JsaXNzZXknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0JsaXNzZXkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgcmFpa291OiB7XHJcbiAgICBpZDogMjQzLFxyXG4gICAgbmFtZTogJ1JhaWtvdScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnUmFpa291IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcclxuICB9LFxyXG4gIGVudGVpOiB7XHJcbiAgICBpZDogMjQ0LFxyXG4gICAgbmFtZTogJ0VudGVpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdFbnRlaSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5zdWJMZWdlbmRhcnksXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIHN1aWN1bmU6IHtcclxuICAgIGlkOiAyNDUsXHJcbiAgICBuYW1lOiAnU3VpY3VuZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU3VpY3VuZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5zdWJMZWdlbmRhcnksXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBsYXJ2aXRhcjoge1xyXG4gICAgaWQ6IDI0NixcclxuICAgIG5hbWU6ICdMYXJ2aXRhcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnTGFydml0YXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIHB1cGl0YXI6IHtcclxuICAgIGlkOiAyNDcsXHJcbiAgICBuYW1lOiAnUHVwaXRhcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnUHVwaXRhciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgdHlyYW5pdGFyOiB7XHJcbiAgICBpZDogMjQ4LFxyXG4gICAgbmFtZTogJ1R5cmFuaXRhcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVHlyYW5pdGFyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmtdLFxyXG4gIH0sXHJcbiAgbHVnaWE6IHtcclxuICAgIGlkOiAyNDksXHJcbiAgICBuYW1lOiAnTHVnaWEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0x1Z2lhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmxlZ2VuZGFyeSxcclxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIGhvb2g6IHtcclxuICAgIGlkOiAyNTAsXHJcbiAgICBuYW1lOiAnSG8tT2gnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0hvLU9oIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmxlZ2VuZGFyeSxcclxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIGNlbGViaToge1xyXG4gICAgaWQ6IDI1MSxcclxuICAgIG5hbWU6ICdDZWxlYmknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0NlbGViaSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWMsIFBva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXHJcbiAgfSxcclxuICAvLyBHZW5lcmF0aW9uIDNcclxuICB0cmVlY2tvOiB7XHJcbiAgICBpZDogMjUyLFxyXG4gICAgbmFtZTogJ1RyZWVja28nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1RyZWVja28hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXHJcbiAgfSxcclxuICBncm92eWxlOiB7XHJcbiAgICBpZDogMjUzLFxyXG4gICAgbmFtZTogJ0dyb3Z5bGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0dyb3Z5bGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXHJcbiAgfSxcclxuICBzY2VwdGlsZToge1xyXG4gICAgaWQ6IDI1NCxcclxuICAgIG5hbWU6ICdTY2VwdGlsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU2NlcHRpbGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXHJcbiAgfSxcclxuICB0b3JjaGljOiB7XHJcbiAgICBpZDogMjU1LFxyXG4gICAgbmFtZTogJ1RvcmNoaWMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1RvcmNoaWMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIGNvbWJ1c2tlbjoge1xyXG4gICAgaWQ6IDI1NixcclxuICAgIG5hbWU6ICdDb21idXNrZW4nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0NvbWJ1c2tlbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmUsIFBva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXHJcbiAgfSxcclxuICBibGF6aWtlbjoge1xyXG4gICAgaWQ6IDI1NyxcclxuICAgIG5hbWU6ICdCbGF6aWtlbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQmxhemlrZW4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxyXG4gIH0sXHJcbiAgbXVka2lwOiB7XHJcbiAgICBpZDogMjU4LFxyXG4gICAgbmFtZTogJ011ZGtpcCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTXVka2lwIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgbWFyc2h0b21wOiB7XHJcbiAgICBpZDogMjU5LFxyXG4gICAgbmFtZTogJ01hcnNodG9tcCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTWFyc2h0b21wIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgc3dhbXBlcnQ6IHtcclxuICAgIGlkOiAyNjAsXHJcbiAgICBuYW1lOiAnU3dhbXBlcnQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1N3YW1wZXJ0IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgcG9vY2h5ZW5hOiB7XHJcbiAgICBpZDogMjYxLFxyXG4gICAgbmFtZTogJ1Bvb2NoeWVuYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnUG9vY2h5ZW5hIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXHJcbiAgfSxcclxuICBtaWdodHllbmE6IHtcclxuICAgIGlkOiAyNjIsXHJcbiAgICBuYW1lOiAnTWlnaHR5ZW5hJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdNaWdodHllbmEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcclxuICB9LFxyXG4gIHppZ3phZ29vbjoge1xyXG4gICAgaWQ6IDI2MyxcclxuICAgIG5hbWU6ICdaaWd6YWdvb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1ppZ3phZ29vbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBsaW5vb25lOiB7XHJcbiAgICBpZDogMjY0LFxyXG4gICAgbmFtZTogJ0xpbm9vbmUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0xpbm9vbmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgd3VybXBsZToge1xyXG4gICAgaWQ6IDI2NSxcclxuICAgIG5hbWU6ICdXdXJtcGxlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdXdXJtcGxlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcclxuICB9LFxyXG4gIHNpbGNvb246IHtcclxuICAgIGlkOiAyNjYsXHJcbiAgICBuYW1lOiAnU2lsY29vbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU2lsY29vbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1Z10sXHJcbiAgfSxcclxuICBiZWF1dGlmbHk6IHtcclxuICAgIGlkOiAyNjcsXHJcbiAgICBuYW1lOiAnQmVhdXRpZmx5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdCZWF1dGlmbHkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgY2FzY29vbjoge1xyXG4gICAgaWQ6IDI2OCxcclxuICAgIG5hbWU6ICdDYXNjb29uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdDYXNjb29uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcclxuICB9LFxyXG4gIGR1c3RveDoge1xyXG4gICAgaWQ6IDI2OSxcclxuICAgIG5hbWU6ICdEdXN0b3gnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0R1c3RveCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBsb3RhZDoge1xyXG4gICAgaWQ6IDI3MCxcclxuICAgIG5hbWU6ICdMb3RhZCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTG90YWQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcclxuICB9LFxyXG4gIGxvbWJyZToge1xyXG4gICAgaWQ6IDI3MSxcclxuICAgIG5hbWU6ICdMb21icmUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0xvbWJyZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgbHVkaWNvbG86IHtcclxuICAgIGlkOiAyNzIsXHJcbiAgICBuYW1lOiAnTHVkaWNvbG8nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0x1ZGljb2xvIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXHJcbiAgfSxcclxuICBzZWVkb3Q6IHtcclxuICAgIGlkOiAyNzMsXHJcbiAgICBuYW1lOiAnU2VlZG90JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTZWVkb3QhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXHJcbiAgfSxcclxuICBudXpsZWFmOiB7XHJcbiAgICBpZDogMjc0LFxyXG4gICAgbmFtZTogJ051emxlYWYnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ051emxlYWYhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmtdLFxyXG4gIH0sXHJcbiAgc2hpZnRyeToge1xyXG4gICAgaWQ6IDI3NSxcclxuICAgIG5hbWU6ICdTaGlmdHJ5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTaGlmdHJ5IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcclxuICB9LFxyXG4gIHRhaWxsb3c6IHtcclxuICAgIGlkOiAyNzYsXHJcbiAgICBuYW1lOiAnVGFpbGxvdycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnVGFpbGxvdyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBzd2VsbG93OiB7XHJcbiAgICBpZDogMjc3LFxyXG4gICAgbmFtZTogJ1N3ZWxsb3cnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1N3ZWxsb3chJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgd2luZ3VsbDoge1xyXG4gICAgaWQ6IDI3OCxcclxuICAgIG5hbWU6ICdXaW5ndWxsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdXaW5ndWxsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgcGVsaXBwZXI6IHtcclxuICAgIGlkOiAyNzksXHJcbiAgICBuYW1lOiAnUGVsaXBwZXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1BlbGlwcGVyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgcmFsdHM6IHtcclxuICAgIGlkOiAyODAsXHJcbiAgICBuYW1lOiAnUmFsdHMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1JhbHRzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBraXJsaWE6IHtcclxuICAgIGlkOiAyODEsXHJcbiAgICBuYW1lOiAnS2lybGlhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdLaXJsaWEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIGdhcmRldm9pcjoge1xyXG4gICAgaWQ6IDI4MixcclxuICAgIG5hbWU6ICdHYXJkZXZvaXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0dhcmRldm9pciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgc3Vyc2tpdDoge1xyXG4gICAgaWQ6IDI4MyxcclxuICAgIG5hbWU6ICdTdXJza2l0JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTdXJza2l0IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgbWFzcXVlcmFpbjoge1xyXG4gICAgaWQ6IDI4NCxcclxuICAgIG5hbWU6ICdNYXNxdWVyYWluJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdNYXNxdWVyYWluIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHNocm9vbWlzaDoge1xyXG4gICAgaWQ6IDI4NSxcclxuICAgIG5hbWU6ICdTaHJvb21pc2gnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1Nocm9vbWlzaCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcclxuICB9LFxyXG4gIGJyZWxvb206IHtcclxuICAgIGlkOiAyODYsXHJcbiAgICBuYW1lOiAnQnJlbG9vbScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQnJlbG9vbSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxyXG4gIH0sXHJcbiAgc2xha290aDoge1xyXG4gICAgaWQ6IDI4NyxcclxuICAgIG5hbWU6ICdTbGFrb3RoJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTbGFrb3RoIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHZpZ29yb3RoOiB7XHJcbiAgICBpZDogMjg4LFxyXG4gICAgbmFtZTogJ1ZpZ29yb3RoJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdWaWdvcm90aCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBzbGFraW5nOiB7XHJcbiAgICBpZDogMjg5LFxyXG4gICAgbmFtZTogJ1NsYWtpbmcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NsYWtpbmchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgbmluY2FkYToge1xyXG4gICAgaWQ6IDI5MCxcclxuICAgIG5hbWU6ICdOaW5jYWRhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdOaW5jYWRhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIG5pbmphc2s6IHtcclxuICAgIGlkOiAyOTEsXHJcbiAgICBuYW1lOiAnTmluamFzaycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTmluamFzayEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBzaGVkaW5qYToge1xyXG4gICAgaWQ6IDI5MixcclxuICAgIG5hbWU6ICdTaGVkaW5qYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU2hlZGluamEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5naG9zdF0sXHJcbiAgfSxcclxuICB3aGlzbXVyOiB7XHJcbiAgICBpZDogMjkzLFxyXG4gICAgbmFtZTogJ1doaXNtdXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1doaXNtdXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgbG91ZHJlZDoge1xyXG4gICAgaWQ6IDI5NCxcclxuICAgIG5hbWU6ICdMb3VkcmVkJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdMb3VkcmVkIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIGV4cGxvdWQ6IHtcclxuICAgIGlkOiAyOTUsXHJcbiAgICBuYW1lOiAnRXhwbG91ZCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnRXhwbG91ZCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBtYWt1aGl0YToge1xyXG4gICAgaWQ6IDI5NixcclxuICAgIG5hbWU6ICdNYWt1aGl0YScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTWFrdWhpdGEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXHJcbiAgfSxcclxuICBoYXJpeWFtYToge1xyXG4gICAgaWQ6IDI5NyxcclxuICAgIG5hbWU6ICdIYXJpeWFtYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnSGFyaXlhbWEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXHJcbiAgfSxcclxuICBhenVyaWxsOiB7XHJcbiAgICBpZDogMjk4LFxyXG4gICAgbmFtZTogJ0F6dXJpbGwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0F6dXJpbGwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgbm9zZXBhc3M6IHtcclxuICAgIGlkOiAyOTksXHJcbiAgICBuYW1lOiAnTm9zZXBhc3MnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ05vc2VwYXNzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXHJcbiAgfSxcclxuICBza2l0dHk6IHtcclxuICAgIGlkOiAzMDAsXHJcbiAgICBuYW1lOiAnU2tpdHR5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTa2l0dHkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgZGVsY2F0dHk6IHtcclxuICAgIGlkOiAzMDEsXHJcbiAgICBuYW1lOiAnRGVsY2F0dHknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0RlbGNhdHR5IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHNhYmxleWU6IHtcclxuICAgIGlkOiAzMDIsXHJcbiAgICBuYW1lOiAnU2FibGV5ZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU2FibGV5ZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmssIFBva2Vtb25FbGVtZW50VHlwZS5naG9zdF0sXHJcbiAgfSxcclxuICBtYXdpbGU6IHtcclxuICAgIGlkOiAzMDMsXHJcbiAgICBuYW1lOiAnTWF3aWxlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdNYXdpbGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXHJcbiAgfSxcclxuICBhcm9uOiB7XHJcbiAgICBpZDogMzA0LFxyXG4gICAgbmFtZTogJ0Fyb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0Fyb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5zdGVlbCwgUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2tdLFxyXG4gIH0sXHJcbiAgbGFpcm9uOiB7XHJcbiAgICBpZDogMzA1LFxyXG4gICAgbmFtZTogJ0xhaXJvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTGFpcm9uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWwsIFBva2Vtb25FbGVtZW50VHlwZS5yb2NrXSxcclxuICB9LFxyXG4gIGFnZ3Jvbjoge1xyXG4gICAgaWQ6IDMwNixcclxuICAgIG5hbWU6ICdBZ2dyb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0FnZ3JvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsLCBQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXHJcbiAgfSxcclxuICBtZWRpdGl0ZToge1xyXG4gICAgaWQ6IDMwNyxcclxuICAgIG5hbWU6ICdNZWRpdGl0ZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTWVkaXRpdGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maWdodGluZywgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgbWVkaWNoYW06IHtcclxuICAgIGlkOiAzMDgsXHJcbiAgICBuYW1lOiAnTWVkaWNoYW0nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ01lZGljaGFtIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmcsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIGVsZWN0cmlrZToge1xyXG4gICAgaWQ6IDMwOSxcclxuICAgIG5hbWU6ICdFbGVjdHJpa2UnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0VsZWN0cmlrZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcclxuICB9LFxyXG4gIG1hbmVjdHJpYzoge1xyXG4gICAgaWQ6IDMxMCxcclxuICAgIG5hbWU6ICdNYW5lY3RyaWMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ01hbmVjdHJpYyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcclxuICB9LFxyXG4gIHBsdXNsZToge1xyXG4gICAgaWQ6IDMxMSxcclxuICAgIG5hbWU6ICdQbHVzbGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1BsdXNsZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcclxuICB9LFxyXG4gIG1pbnVuOiB7XHJcbiAgICBpZDogMzEyLFxyXG4gICAgbmFtZTogJ01pbnVuJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdNaW51biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcclxuICB9LFxyXG4gIHZvbGJlYXQ6IHtcclxuICAgIGlkOiAzMTMsXHJcbiAgICBuYW1lOiAnVm9sYmVhdCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnVm9sYmVhdCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1Z10sXHJcbiAgfSxcclxuICBpbGx1bWlzZToge1xyXG4gICAgaWQ6IDMxNCxcclxuICAgIG5hbWU6ICdJbGx1bWlzZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnSWxsdW1pc2UhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWddLFxyXG4gIH0sXHJcbiAgcm9zZWxpYToge1xyXG4gICAgaWQ6IDMxNSxcclxuICAgIG5hbWU6ICdSb3NlbGlhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdSb3NlbGlhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgZ3VscGluOiB7XHJcbiAgICBpZDogMzE2LFxyXG4gICAgbmFtZTogJ0d1bHBpbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnR3VscGluIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIHN3YWxvdDoge1xyXG4gICAgaWQ6IDMxNyxcclxuICAgIG5hbWU6ICdTd2Fsb3QnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1N3YWxvdCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBjYXJ2YW5oYToge1xyXG4gICAgaWQ6IDMxOCxcclxuICAgIG5hbWU6ICdDYXJ2YW5oYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQ2FydmFuaGEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmtdLFxyXG4gIH0sXHJcbiAgc2hhcnBlZG86IHtcclxuICAgIGlkOiAzMTksXHJcbiAgICBuYW1lOiAnU2hhcnBlZG8nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NoYXJwZWRvIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcclxuICB9LFxyXG4gIHdhaWxtZXI6IHtcclxuICAgIGlkOiAzMjAsXHJcbiAgICBuYW1lOiAnV2FpbG1lcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnV2FpbG1lciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIHdhaWxvcmQ6IHtcclxuICAgIGlkOiAzMjEsXHJcbiAgICBuYW1lOiAnV2FpbG9yZCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnV2FpbG9yZCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBudW1lbDoge1xyXG4gICAgaWQ6IDMyMixcclxuICAgIG5hbWU6ICdOdW1lbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTnVtZWwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIGNhbWVydXB0OiB7XHJcbiAgICBpZDogMzIzLFxyXG4gICAgbmFtZTogJ0NhbWVydXB0JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdDYW1lcnVwdCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmUsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgdG9ya29hbDoge1xyXG4gICAgaWQ6IDMyNCxcclxuICAgIG5hbWU6ICdUb3Jrb2FsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdUb3Jrb2FsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXHJcbiAgfSxcclxuICBzcG9pbms6IHtcclxuICAgIGlkOiAzMjUsXHJcbiAgICBuYW1lOiAnU3BvaW5rJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTcG9pbmshJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIGdydW1waWc6IHtcclxuICAgIGlkOiAzMjYsXHJcbiAgICBuYW1lOiAnR3J1bXBpZycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnR3J1bXBpZyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgc3BpbmRhOiB7XHJcbiAgICBpZDogMzI3LFxyXG4gICAgbmFtZTogJ1NwaW5kYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU3BpbmRhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHRyYXBpbmNoOiB7XHJcbiAgICBpZDogMzI4LFxyXG4gICAgbmFtZTogJ1RyYXBpbmNoJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdUcmFwaW5jaCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICB2aWJyYXZhOiB7XHJcbiAgICBpZDogMzI5LFxyXG4gICAgbmFtZTogJ1ZpYnJhdmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1ZpYnJhdmEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmQsIFBva2Vtb25FbGVtZW50VHlwZS5kcmFnb25dLFxyXG4gIH0sXHJcbiAgZmx5Z29uOiB7XHJcbiAgICBpZDogMzMwLFxyXG4gICAgbmFtZTogJ0ZseWdvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnRmx5Z29uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kLCBQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcclxuICB9LFxyXG4gIGNhY25lYToge1xyXG4gICAgaWQ6IDMzMSxcclxuICAgIG5hbWU6ICdDYWNuZWEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0NhY25lYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcclxuICB9LFxyXG4gIGNhY3R1cm5lOiB7XHJcbiAgICBpZDogMzMyLFxyXG4gICAgbmFtZTogJ0NhY3R1cm5lJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdDYWN0dXJuZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXHJcbiAgfSxcclxuICBzd2FibHU6IHtcclxuICAgIGlkOiAzMzMsXHJcbiAgICBuYW1lOiAnU3dhYmx1JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTd2FibHUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgYWx0YXJpYToge1xyXG4gICAgaWQ6IDMzNCxcclxuICAgIG5hbWU6ICdBbHRhcmlhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdBbHRhcmlhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHphbmdvb3NlOiB7XHJcbiAgICBpZDogMzM1LFxyXG4gICAgbmFtZTogJ1phbmdvb3NlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdaYW5nb29zZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBzZXZpcGVyOiB7XHJcbiAgICBpZDogMzM2LFxyXG4gICAgbmFtZTogJ1NldmlwZXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NldmlwZXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgbHVuYXRvbmU6IHtcclxuICAgIGlkOiAzMzcsXHJcbiAgICBuYW1lOiAnTHVuYXRvbmUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0x1bmF0b25lIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgc29scm9jazoge1xyXG4gICAgaWQ6IDMzOCxcclxuICAgIG5hbWU6ICdTb2xyb2NrJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTb2xyb2NrIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgYmFyYm9hY2g6IHtcclxuICAgIGlkOiAzMzksXHJcbiAgICBuYW1lOiAnQmFyYm9hY2gnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0JhcmJvYWNoIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgd2hpc2Nhc2g6IHtcclxuICAgIGlkOiAzNDAsXHJcbiAgICBuYW1lOiAnV2hpc2Nhc2gnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1doaXNjYXNoIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgY29ycGhpc2g6IHtcclxuICAgIGlkOiAzNDEsXHJcbiAgICBuYW1lOiAnQ29ycGhpc2gnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0NvcnBoaXNoIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgY3Jhd2RhdW50OiB7XHJcbiAgICBpZDogMzQyLFxyXG4gICAgbmFtZTogJ0NyYXdkYXVudCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQ3Jhd2RhdW50IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcclxuICB9LFxyXG4gIGJhbHRveToge1xyXG4gICAgaWQ6IDM0MyxcclxuICAgIG5hbWU6ICdCYWx0b3knLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0JhbHRveSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZCwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgY2xheWRvbDoge1xyXG4gICAgaWQ6IDM0NCxcclxuICAgIG5hbWU6ICdDbGF5ZG9sJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdDbGF5ZG9sIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBsaWxlZXA6IHtcclxuICAgIGlkOiAzNDUsXHJcbiAgICBuYW1lOiAnTGlsZWVwJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdMaWxlZXAhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuZm9zc2lsLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcclxuICB9LFxyXG4gIGNyYWRpbHk6IHtcclxuICAgIGlkOiAzNDYsXHJcbiAgICBuYW1lOiAnQ3JhZGlseScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQ3JhZGlseSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5mb3NzaWwsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgYW5vcml0aDoge1xyXG4gICAgaWQ6IDM0NyxcclxuICAgIG5hbWU6ICdBbm9yaXRoJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdBbm9yaXRoIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmZvc3NpbCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5idWddLFxyXG4gIH0sXHJcbiAgYXJtYWxkbzoge1xyXG4gICAgaWQ6IDM0OCxcclxuICAgIG5hbWU6ICdBcm1hbGRvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdBcm1hbGRvIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmZvc3NpbCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5idWddLFxyXG4gIH0sXHJcbiAgZmVlYmFzOiB7XHJcbiAgICBpZDogMzQ5LFxyXG4gICAgbmFtZTogJ0ZlZWJhcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnRmVlYmFzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgbWlsb3RpYzoge1xyXG4gICAgaWQ6IDM1MCxcclxuICAgIG5hbWU6ICdNaWxvdGljJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdNaWxvdGljIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgY2FzdGZvcm06IHtcclxuICAgIGlkOiAzNTEsXHJcbiAgICBuYW1lOiAnQ2FzdGZvcm0nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0Nhc3Rmb3JtIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIGtlY2xlb246IHtcclxuICAgIGlkOiAzNTIsXHJcbiAgICBuYW1lOiAnS2VjbGVvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnS2VjbGVvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBzaHVwcGV0OiB7XHJcbiAgICBpZDogMzUzLFxyXG4gICAgbmFtZTogJ1NodXBwZXQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NodXBwZXQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdF0sXHJcbiAgfSxcclxuICBiYW5ldHRlOiB7XHJcbiAgICBpZDogMzU0LFxyXG4gICAgbmFtZTogJ0JhbmV0dGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0JhbmV0dGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdF0sXHJcbiAgfSxcclxuICBkdXNrdWxsOiB7XHJcbiAgICBpZDogMzU1LFxyXG4gICAgbmFtZTogJ0R1c2t1bGwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0R1c2t1bGwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdF0sXHJcbiAgfSxcclxuICBkdXNjbG9wczoge1xyXG4gICAgaWQ6IDM1NixcclxuICAgIG5hbWU6ICdEdXNjbG9wcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnRHVzY2xvcHMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdF0sXHJcbiAgfSxcclxuICB0cm9waXVzOiB7XHJcbiAgICBpZDogMzU3LFxyXG4gICAgbmFtZTogJ1Ryb3BpdXMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1Ryb3BpdXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBjaGltZWNobzoge1xyXG4gICAgaWQ6IDM1OCxcclxuICAgIG5hbWU6ICdDaGltZWNobycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQ2hpbWVjaG8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIGFic29sOiB7XHJcbiAgICBpZDogMzU5LFxyXG4gICAgbmFtZTogJ0Fic29sJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdBYnNvbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmtdLFxyXG4gIH0sXHJcbiAgd3luYXV0OiB7XHJcbiAgICBpZDogMzYwLFxyXG4gICAgbmFtZTogJ1d5bmF1dCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnV3luYXV0IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBzbm9ydW50OiB7XHJcbiAgICBpZDogMzYxLFxyXG4gICAgbmFtZTogJ1Nub3J1bnQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1Nub3J1bnQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2VdLFxyXG4gIH0sXHJcbiAgZ2xhbGllOiB7XHJcbiAgICBpZDogMzYyLFxyXG4gICAgbmFtZTogJ0dsYWxpZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnR2xhbGllIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuaWNlXSxcclxuICB9LFxyXG4gIHNwaGVhbDoge1xyXG4gICAgaWQ6IDM2MyxcclxuICAgIG5hbWU6ICdTcGhlYWwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NwaGVhbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmljZSwgUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIHNlYWxlbzoge1xyXG4gICAgaWQ6IDM2NCxcclxuICAgIG5hbWU6ICdTZWFsZW8nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NlYWxlbyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmljZSwgUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIHdhbHJlaW46IHtcclxuICAgIGlkOiAzNjUsXHJcbiAgICBuYW1lOiAnV2FscmVpbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnV2FscmVpbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmljZSwgUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGNsYW1wZXJsOiB7XHJcbiAgICBpZDogMzY2LFxyXG4gICAgbmFtZTogJ0NsYW1wZXJsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdDbGFtcGVybCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGh1bnRhaWw6IHtcclxuICAgIGlkOiAzNjcsXHJcbiAgICBuYW1lOiAnSHVudGFpbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnSHVudGFpbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGdvcmVieXNzOiB7XHJcbiAgICBpZDogMzY4LFxyXG4gICAgbmFtZTogJ0dvcmVieXNzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdHb3JlYnlzcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIHJlbGljYW50aDoge1xyXG4gICAgaWQ6IDM2OSxcclxuICAgIG5hbWU6ICdSZWxpY2FudGgnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1JlbGljYW50aCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXHJcbiAgfSxcclxuICBsdXZkaXNjOiB7XHJcbiAgICBpZDogMzcwLFxyXG4gICAgbmFtZTogJ0x1dmRpc2MnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0x1dmRpc2MhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBiYWdvbjoge1xyXG4gICAgaWQ6IDM3MSxcclxuICAgIG5hbWU6ICdCYWdvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQmFnb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kcmFnb25dLFxyXG4gIH0sXHJcbiAgc2hlbGdvbjoge1xyXG4gICAgaWQ6IDM3MixcclxuICAgIG5hbWU6ICdTaGVsZ29uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTaGVsZ29uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcclxuICB9LFxyXG4gIHNhbGFtZW5jZToge1xyXG4gICAgaWQ6IDM3MyxcclxuICAgIG5hbWU6ICdTYWxhbWVuY2UnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NhbGFtZW5jZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbiwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBiZWxkdW06IHtcclxuICAgIGlkOiAzNzQsXHJcbiAgICBuYW1lOiAnQmVsZHVtJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdCZWxkdW0hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5zdGVlbCwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgbWV0YW5nOiB7XHJcbiAgICBpZDogMzc1LFxyXG4gICAgbmFtZTogJ01ldGFuZycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTWV0YW5nIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWwsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIG1ldGFncm9zczoge1xyXG4gICAgaWQ6IDM3NixcclxuICAgIG5hbWU6ICdNZXRhZ3Jvc3MnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ01ldGFncm9zcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICByZWdpcm9jazoge1xyXG4gICAgaWQ6IDM3NyxcclxuICAgIG5hbWU6ICdSZWdpcm9jaycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnUmVnaXJvY2shJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuc3ViTGVnZW5kYXJ5LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXHJcbiAgfSxcclxuICByZWdpY2U6IHtcclxuICAgIGlkOiAzNzgsXHJcbiAgICBuYW1lOiAnUmVnaWNlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdSZWdpY2UhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuc3ViTGVnZW5kYXJ5LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuaWNlXSxcclxuICB9LFxyXG4gIHJlZ2lzdGVlbDoge1xyXG4gICAgaWQ6IDM3OSxcclxuICAgIG5hbWU6ICdSZWdpc3RlZWwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1JlZ2lzdGVlbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5zdWJMZWdlbmRhcnksXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXHJcbiAgfSxcclxuICBsYXRpYXM6IHtcclxuICAgIGlkOiAzODAsXHJcbiAgICBuYW1lOiAnTGF0aWFzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdMYXRpYXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuc3ViTGVnZW5kYXJ5LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBsYXRpb3M6IHtcclxuICAgIGlkOiAzODEsXHJcbiAgICBuYW1lOiAnTGF0aW9zJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdMYXRpb3MhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuc3ViTGVnZW5kYXJ5LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBreW9ncmU6IHtcclxuICAgIGlkOiAzODIsXHJcbiAgICBuYW1lOiAnS3lvZ3JlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdLeW9ncmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubGVnZW5kYXJ5LFxyXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGdyb3Vkb246IHtcclxuICAgIGlkOiAzODMsXHJcbiAgICBuYW1lOiAnR3JvdWRvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnR3JvdWRvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5sZWdlbmRhcnksXHJcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIHJheXF1YXphOiB7XHJcbiAgICBpZDogMzg0LFxyXG4gICAgbmFtZTogJ1JheXF1YXphJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdSYXlxdWF6YSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5sZWdlbmRhcnksXHJcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIGppcmFjaGk6IHtcclxuICAgIGlkOiAzODUsXHJcbiAgICBuYW1lOiAnSmlyYWNoaScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnSmlyYWNoaSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBkZW94eXM6IHtcclxuICAgIGlkOiAzODYsXHJcbiAgICBuYW1lOiAnRGVveHlzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdEZW94eXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIGRlb3h5c19zcGVlZDoge1xyXG4gICAgaWQ6IDM4NixcclxuICAgIG5hbWU6ICdEZW94eXMgKFNwZWVkKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnRGVveHlzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBkZW94eXNfYXR0YWNrOiB7XHJcbiAgICBpZDogMzg2LFxyXG4gICAgbmFtZTogJ0Rlb3h5cyAoQXR0YWNrKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnRGVveHlzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBkZW94eXNfZGVmZW5zZToge1xyXG4gICAgaWQ6IDM4NixcclxuICAgIG5hbWU6ICdEZW94eXMgKERlZmVuc2UpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdEZW94eXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFBva2Vtb24oKTogUG9rZW1vblR5cGVbXSB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKFBPS0VNT05fREFUQSkgYXMgUG9rZW1vblR5cGVbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBva2Vtb25CeUdlbmVyYXRpb24oZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24pOiBQb2tlbW9uVHlwZVtdIHtcclxuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoUE9LRU1PTl9EQVRBKVxyXG4gICAgLmZpbHRlcigoW18sIGNvbmZpZ10pID0+IGNvbmZpZy5nZW5lcmF0aW9uID09PSBnZW5lcmF0aW9uKVxyXG4gICAgLm1hcCgoW2tleSwgX10pID0+IGtleSBhcyBQb2tlbW9uVHlwZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0UG9rZW1vbigpOiBQb2tlbW9uVHlwZSB7XHJcbiAgcmV0dXJuICdidWxiYXNhdXInO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tUG9rZW1vbkNvbmZpZygpOiBbUG9rZW1vblR5cGUsIFBva2Vtb25Db25maWddIHtcclxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKFBPS0VNT05fREFUQSk7XHJcbiAgdmFyIHJhbmRvbUtleSA9IGtleXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoga2V5cy5sZW5ndGgpXTtcclxuICByZXR1cm4gW3JhbmRvbUtleSBhcyBQb2tlbW9uVHlwZSwgUE9LRU1PTl9EQVRBW3JhbmRvbUtleV1dO1xyXG59IiwiaW1wb3J0IHsgUE9LRU1PTl9EQVRBIH0gZnJvbSBcIi4vcG9rZW1vbi1kYXRhXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBQb2tlbW9uQ29sb3Ige1xyXG4gICAgZGVmYXVsdCA9ICdkZWZhdWx0JyxcclxuICAgIHNoaW55ID0gJ3NoaW55JyxcclxuICAgIG51bGwgPSAnbnVsbCcsXHJcbn1cclxuXHJcbi8vIEFic2VudCAodW5kZWZpbmVkKSBvbiBhIFBva2Vtb25Db25maWcgbWVhbnMgY29tbW9uIC0gdGhlIHZhc3QgbWFqb3JpdHkgb2ZcclxuLy8gdGhlIGRleCAtIHNvIG9ubHkgdGhlIGhhbmRmdWwgb2YgbGVnZW5kYXJ5LXRpZXIgc3BlY2llcyBuZWVkIHRvIHNldCB0aGlzLlxyXG5leHBvcnQgY29uc3QgZW51bSBQb2tlbW9uUmFyaXR5IHtcclxuICAgIHN1YkxlZ2VuZGFyeSA9ICdzdWItbGVnZW5kYXJ5JyxcclxuICAgIGxlZ2VuZGFyeSA9ICdsZWdlbmRhcnknLFxyXG4gICAgbXl0aGljYWwgPSAnbXl0aGljYWwnLFxyXG4gICAgZm9zc2lsID0gJ2Zvc3NpbCcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBva2Vtb25HZW5lcmF0aW9uIHtcclxuICAgIEdlbjEgPSAxLFxyXG4gICAgR2VuMiA9IDIsXHJcbiAgICBHZW4zID0gMyxcclxufVxyXG5cclxuLy8gVHlwaW5nIGFzIGl0IHN0b29kIGJ5IHRoZSBlbmQgb2YgR2VuZXJhdGlvbiBJSUkgLSBubyBGYWlyeSB0eXBlLCBzaW5jZSBpdFxyXG4vLyB3YXMgbm90IGludHJvZHVjZWQgdW50aWwgR2VuZXJhdGlvbiBWSSAoZS5nLiBDbGVmYWlyeS9Nci4gTWltZS9TbnViYnVsbFxyXG4vLyBzdGF5IE5vcm1hbCBoZXJlLCBub3QgRmFpcnkpLlxyXG5leHBvcnQgY29uc3QgZW51bSBQb2tlbW9uRWxlbWVudFR5cGUge1xyXG4gICAgbm9ybWFsID0gJ25vcm1hbCcsXHJcbiAgICBmaXJlID0gJ2ZpcmUnLFxyXG4gICAgd2F0ZXIgPSAnd2F0ZXInLFxyXG4gICAgZWxlY3RyaWMgPSAnZWxlY3RyaWMnLFxyXG4gICAgZ3Jhc3MgPSAnZ3Jhc3MnLFxyXG4gICAgaWNlID0gJ2ljZScsXHJcbiAgICBmaWdodGluZyA9ICdmaWdodGluZycsXHJcbiAgICBwb2lzb24gPSAncG9pc29uJyxcclxuICAgIGdyb3VuZCA9ICdncm91bmQnLFxyXG4gICAgZmx5aW5nID0gJ2ZseWluZycsXHJcbiAgICBwc3ljaGljID0gJ3BzeWNoaWMnLFxyXG4gICAgYnVnID0gJ2J1ZycsXHJcbiAgICByb2NrID0gJ3JvY2snLFxyXG4gICAgZ2hvc3QgPSAnZ2hvc3QnLFxyXG4gICAgZHJhZ29uID0gJ2RyYWdvbicsXHJcbiAgICBkYXJrID0gJ2RhcmsnLFxyXG4gICAgc3RlZWwgPSAnc3RlZWwnLFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBQb2tlbW9uVHlwZVN0cmluZyA9IHN0cmluZyAmIGtleW9mIHR5cGVvZiBQT0tFTU9OX0RBVEE7XHJcblxyXG5leHBvcnQgdHlwZSBQb2tlbW9uVHlwZSA9IFBva2Vtb25UeXBlU3RyaW5nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2tlbW9uQ29uZmlnIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbjtcclxuICAgIGNyeTogc3RyaW5nO1xyXG4gICAgcG9zc2libGVDb2xvcnM6IFBva2Vtb25Db2xvcltdO1xyXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplPzogbnVtYmVyLFxyXG4gICAgcmFyaXR5PzogUG9rZW1vblJhcml0eSxcclxuICAgIHR5cGVzOiBQb2tlbW9uRWxlbWVudFR5cGVbXSxcclxufSIsImltcG9ydCB7IFVzZXJQb2tlbW9uIH0gZnJvbSAnLi4vZXh0ZW5zaW9uL3R5cGVzJ1xyXG5pbXBvcnQgeyBQT0tFTU9OX0RBVEEgfSBmcm9tICcuLi9jb21tb24vcG9rZW1vbi1kYXRhJ1xyXG5pbXBvcnQgeyBQb2tlbW9uQ29sb3IsIFBva2Vtb25HZW5lcmF0aW9uIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzJ1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgcG9rZWNoaUFwcDoge1xyXG4gICAgICBhcHA6IChjb25maWc6IHsgYmFzZVBva2Vtb25Vcmk6IHN0cmluZzsgdXNlclBva2Vtb246IFVzZXJQb2tlbW9uIHwgbnVsbCB9KSA9PiB2b2lkXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIHVzZXJQb2tlbW9uOiBVc2VyUG9rZW1vbiB8IG51bGxcclxuICBiYXNlUG9rZW1vblVyaTogc3RyaW5nXHJcbiAgaW50ZXJ2YWxJZDogbnVtYmVyIHwgdW5kZWZpbmVkXHJcbiAgaXNIb3ZlcmVkOiBib29sZWFuXHJcbiAgaWRsZVVudGlsOiBudW1iZXJcclxufVxyXG5cclxuY29uc3Qgc3RhdGU6IFN0YXRlID0ge1xyXG4gIHVzZXJQb2tlbW9uOiBudWxsLFxyXG4gIGJhc2VQb2tlbW9uVXJpOiAnJyxcclxuICBpbnRlcnZhbElkOiB1bmRlZmluZWQsXHJcbiAgaXNIb3ZlcmVkOiBmYWxzZSxcclxuICBpZGxlVW50aWw6IDAsXHJcbn1cclxuXHJcbmNvbnN0IFRJQ0tfSU5URVJWQUxfTVMgPSAxMDBcclxuXHJcbi8vIEhvdyBsb25nIGEgcG9rZW1vbiBzdGFuZHMgc3RpbGwgYWZ0ZXIgaGF0Y2hpbmcgb3IgZXZvbHZpbmcuIFdpdGhvdXQgaXQgdGhlXHJcbi8vIGZpcnN0IHRpY2sgd291bGQgc2VuZCBpdCB3YWxraW5nIGJlZm9yZSB0aGUgaWRsZSBhbmltYXRpb24gaXMgZXZlciBzZWVuLlxyXG5jb25zdCBJRExFX0FGVEVSX0NIQU5HRV9NUyA9IDE1MDBcclxuXHJcbi8vIEV2ZXJ5dGhpbmcgdGhhdCBkZWNpZGVzIGhvdyB0aGUgc3ByaXRlIGxvb2tzLiBYUCB1cGRhdGVzIGFycml2ZSBzZXZlcmFsIHRpbWVzXHJcbi8vIGEgc2Vjb25kIGFuZCBjaGFuZ2Ugbm9uZSBvZiBpdCwgc28gdGhlIERPTSB3b3JrIGNhbiBiZSBza2lwcGVkLlxyXG5mdW5jdGlvbiB2aXN1YWxTaWduYXR1cmUocG9rZW1vbjogVXNlclBva2Vtb24gfCBudWxsKTogc3RyaW5nIHtcclxuICBpZiAoIXBva2Vtb24pIHtcclxuICAgIHJldHVybiAnbm9uZSdcclxuICB9XHJcbiAgcmV0dXJuIFtcclxuICAgIHBva2Vtb24udHlwZSxcclxuICAgIHBva2Vtb24ubGV2ZWwsXHJcbiAgICBwb2tlbW9uLnN0YXRlLFxyXG4gICAgcG9rZW1vbi5zY2FsZSxcclxuICAgIHBva2Vtb24uaXNIb3ZlcmVkID8gMSA6IDAsXHJcbiAgICBwb2tlbW9uLmlzVHJhbnNpdGlvbkluID8gMSA6IDAsXHJcbiAgICBwb2tlbW9uLmNvbG9yLFxyXG4gIF0uam9pbignfCcpXHJcbn1cclxuXHJcbmxldCBsYXN0UmVuZGVyZWRTaWduYXR1cmUgPSAnJ1xyXG5jb25zdCBQT0tFQkFMTF9TSVpFID0gMzJcclxuY29uc3QgUE9LRU1PTl9CQVNFX1NJWkUgPSA1MCAvLyBJbmNyZWFzZWQgYnkgMjAlICgzMiAqIDEuMiA9IDM4LjQpXHJcblxyXG5mdW5jdGlvbiBnZXRQb2tlbW9uU3ByaXRlUGF0aChwb2tlbW9uOiBVc2VyUG9rZW1vbiwgaXNJZGxlID0gZmFsc2UpOiBzdHJpbmcge1xyXG4gIGlmIChwb2tlbW9uLmxldmVsID09PSAwKSB7XHJcbiAgICByZXR1cm4gJ3Bva2ViYWxsLmdpZidcclxuICB9XHJcbiAgY29uc3QgcG9rZW1vblR5cGUgPSBwb2tlbW9uLnR5cGVcclxuICBjb25zdCBwb2tlbW9uRGF0YSA9IFBPS0VNT05fREFUQVtwb2tlbW9uVHlwZV1cclxuICBcclxuICBpZiAoIXBva2Vtb25EYXRhKSB7XHJcbiAgICByZXR1cm4gJ3Bva2ViYWxsLmdpZidcclxuICB9XHJcbiAgXHJcbiAgbGV0IGdlbmVyYXRpb24gPSAnZ2VuMSdcclxuICBpZiAocG9rZW1vbkRhdGEuZ2VuZXJhdGlvbiA9PT0gUG9rZW1vbkdlbmVyYXRpb24uR2VuMikge1xyXG4gICAgZ2VuZXJhdGlvbiA9ICdnZW4yJ1xyXG4gIH0gZWxzZSBpZiAocG9rZW1vbkRhdGEuZ2VuZXJhdGlvbiA9PT0gUG9rZW1vbkdlbmVyYXRpb24uR2VuMykge1xyXG4gICAgZ2VuZXJhdGlvbiA9ICdnZW4zJ1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29sb3JQcmVmaXggPSBwb2tlbW9uLmNvbG9yID09PSBQb2tlbW9uQ29sb3Iuc2hpbnkgPyAnc2hpbnknIDogJ2RlZmF1bHQnXHJcbiAgY29uc3QgYW5pbWF0aW9uID0gaXNJZGxlID8gYCR7Y29sb3JQcmVmaXh9X2lkbGVfOGZwcy5naWZgIDogYCR7Y29sb3JQcmVmaXh9X3dhbGtfOGZwcy5naWZgXHJcbiAgcmV0dXJuIGAke2dlbmVyYXRpb259LyR7cG9rZW1vblR5cGV9LyR7YW5pbWF0aW9ufWBcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUG9rZW1vbkRpc3BsYXkocG9rZW1vbjogVXNlclBva2Vtb24gfCBudWxsKTogdm9pZCB7XHJcbiAgY29uc3QgcG9rZW1vbkltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlbW9uJykgYXMgSFRNTEltYWdlRWxlbWVudFxyXG4gIGNvbnN0IHRyYW5zaXRpb25JbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNpdGlvbicpIGFzIEhUTUxJbWFnZUVsZW1lbnRcclxuICBjb25zdCBwb2tlbW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bva2Vtb24tY29udGFpbmVyJylcclxuICBjb25zdCB0cmFuc2l0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zaXRpb24tY29udGFpbmVyJylcclxuXHJcbiAgaWYgKCFwb2tlbW9uSW1nIHx8ICFwb2tlbW9uQ29udGFpbmVyKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGNvbnN0IHNpZ25hdHVyZSA9IHZpc3VhbFNpZ25hdHVyZShwb2tlbW9uKVxyXG4gIGlmIChzaWduYXR1cmUgPT09IGxhc3RSZW5kZXJlZFNpZ25hdHVyZSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGxhc3RSZW5kZXJlZFNpZ25hdHVyZSA9IHNpZ25hdHVyZVxyXG5cclxuICBpZiAoIXBva2Vtb24gfHwgcG9rZW1vbi5sZXZlbCA9PT0gMCkge1xyXG4gICAgcG9rZW1vbkltZy5zcmMgPSBgJHtzdGF0ZS5iYXNlUG9rZW1vblVyaX0vcG9rZWJhbGwuZ2lmYFxyXG4gICAgcG9rZW1vbkltZy53aWR0aCA9IFBPS0VCQUxMX1NJWkVcclxuICAgIHBva2Vtb25JbWcuaGVpZ2h0ID0gUE9LRUJBTExfU0laRVxyXG4gICAgcG9rZW1vbkltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgaWYgKHRyYW5zaXRpb25JbWcpIHtcclxuICAgICAgdHJhbnNpdGlvbkltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGNvbnN0IGlzSWRsZSA9IHBva2Vtb24uc3RhdGUgPT09ICdpZGxlJyB8fCBwb2tlbW9uLmlzSG92ZXJlZFxyXG4gIGNvbnN0IHNwcml0ZVBhdGggPSBnZXRQb2tlbW9uU3ByaXRlUGF0aChwb2tlbW9uLCBpc0lkbGUpXHJcbiAgcG9rZW1vbkltZy5zcmMgPSBgJHtzdGF0ZS5iYXNlUG9rZW1vblVyaX0vJHtzcHJpdGVQYXRofWBcclxuICBwb2tlbW9uSW1nLndpZHRoID0gUE9LRU1PTl9CQVNFX1NJWkUgKiBwb2tlbW9uLnNjYWxlXHJcbiAgcG9rZW1vbkltZy5oZWlnaHQgPSBQT0tFTU9OX0JBU0VfU0laRSAqIHBva2Vtb24uc2NhbGVcclxuICBwb2tlbW9uSW1nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgcG9rZW1vbkltZy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9ICdwaXhlbGF0ZWQnXHJcbiAgcG9rZW1vbkltZy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtwb2tlbW9uLnNjYWxlfSlgXHJcblxyXG4gIGlmIChwb2tlbW9uLmlzVHJhbnNpdGlvbkluICYmIHRyYW5zaXRpb25JbWcgJiYgdHJhbnNpdGlvbkNvbnRhaW5lcikge1xyXG4gICAgdHJhbnNpdGlvbkltZy5zcmMgPSBgJHtzdGF0ZS5iYXNlUG9rZW1vblVyaX0vJHtzcHJpdGVQYXRofWBcclxuICAgIHRyYW5zaXRpb25JbWcud2lkdGggPSBQT0tFTU9OX0JBU0VfU0laRSAqIHBva2Vtb24uc2NhbGVcclxuICAgIHRyYW5zaXRpb25JbWcuaGVpZ2h0ID0gUE9LRU1PTl9CQVNFX1NJWkUgKiBwb2tlbW9uLnNjYWxlXHJcbiAgICB0cmFuc2l0aW9uSW1nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICB0cmFuc2l0aW9uSW1nLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJ3BpeGVsYXRlZCdcclxuICAgIHRyYW5zaXRpb25JbWcuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7cG9rZW1vbi5zY2FsZX0pYFxyXG4gICAgdHJhbnNpdGlvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG5cclxuICAgIGlmIChwb2tlbW9uLmNvbG9yID09PSBQb2tlbW9uQ29sb3Iuc2hpbnkpIHtcclxuICAgICAgcGxheVNwYXJrbGVCdXJzdChwb2tlbW9uLnNjYWxlKVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodHJhbnNpdGlvbkltZykge1xyXG4gICAgICAgIHRyYW5zaXRpb25JbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0cmFuc2l0aW9uQ29udGFpbmVyKSB7XHJcbiAgICAgICAgdHJhbnNpdGlvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgIH1cclxuICAgICAgcG9rZW1vbi5pc1RyYW5zaXRpb25JbiA9IGZhbHNlXHJcbiAgICB9LCAxMDAwKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAodHJhbnNpdGlvbkltZykge1xyXG4gICAgICB0cmFuc2l0aW9uSW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH1cclxuICAgIGlmICh0cmFuc2l0aW9uQ29udGFpbmVyKSB7XHJcbiAgICAgIHRyYW5zaXRpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gVHdpbmtsZXMgYSByaW5nIG9mIHNwYXJrbGVzIGFyb3VuZCB0aGUgcG9rZW1vbiBmb3IgYSBzaGlueSByZXZlYWwgKGhhdGNoaW5nLFxyXG4vLyBldm9sdmluZywgb3IgYmVpbmcgYnJvdWdodCBvdXQgb2YgdGhlIFBva2VkZXggYWxyZWFkeSBzaGlueSkuXHJcbmZ1bmN0aW9uIHBsYXlTcGFya2xlQnVyc3Qoc2NhbGU6IG51bWJlcik6IHZvaWQge1xyXG4gIGNvbnN0IGJ1cnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaW55LWJ1cnN0JylcclxuICBpZiAoIWJ1cnN0KSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGJ1cnN0LnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3NjYWxlfSlgXHJcbiAgLy8gQSByZXN0YXJ0IG5lZWRzIGEgZnJlc2ggYW5pbWF0aW9uLCBub3QganVzdCB0aGUgY2xhc3MgcmUtYWRkZWQ6IHJlbW92aW5nXHJcbiAgLy8gYW5kIHJlLWFkZGluZyBpdCBpbiB0aGUgc2FtZSB0aWNrIHdvdWxkIGJlIGEgbm8tb3AsIHNvIHRoZSByZWZsb3cgaW5cclxuICAvLyBiZXR3ZWVuIGZvcmNlcyB0aGUgYnJvd3NlciB0byBhY3R1YWxseSBub3RpY2UgdGhlIGNsYXNzIHdhcyBldmVyIGdvbmUuXHJcbiAgYnVyc3QuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcclxuICB2b2lkIGJ1cnN0Lm9mZnNldFdpZHRoXHJcbiAgYnVyc3QuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBidXJzdC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxyXG4gIH0sIDEwMDApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRpY2soKTogdm9pZCB7XHJcbiAgY29uc3QgcG9rZW1vbiA9IHN0YXRlLnVzZXJQb2tlbW9uXHJcbiAgaWYgKCFwb2tlbW9uIHx8IHBva2Vtb24ubGV2ZWwgPT09IDApIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgLy8gTGV0IHRoZSBpZGxlIGFuaW1hdGlvbiBwbGF5IGFmdGVyIGEgaGF0Y2ggb3IgYW4gZXZvbHV0aW9uLlxyXG4gIGlmIChEYXRlLm5vdygpIDwgc3RhdGUuaWRsZVVudGlsKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIC8vIElmIGhvdmVyZWQsIGRvIG5vdCBtb3ZlXHJcbiAgaWYgKHN0YXRlLmlzSG92ZXJlZCkge1xyXG4gICAgaWYgKHBva2Vtb24uc3RhdGUgIT09ICdpZGxlJykge1xyXG4gICAgICBwb2tlbW9uLnN0YXRlID0gJ2lkbGUnXHJcbiAgICAgIHVwZGF0ZVBva2Vtb25EaXNwbGF5KHBva2Vtb24pXHJcbiAgICB9XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIC8vIElmIGl0IHdhcyBpZGxlIGJlY2F1c2Ugb2YgaG92ZXIsIHN3aXRjaCBiYWNrIHRvIHdhbGtpbmdcclxuICBpZiAocG9rZW1vbi5zdGF0ZSA9PT0gJ2lkbGUnICYmICFzdGF0ZS5pc0hvdmVyZWQpIHtcclxuICAgIHBva2Vtb24uc3RhdGUgPSAnd2Fsa2luZydcclxuICAgIHVwZGF0ZVBva2Vtb25EaXNwbGF5KHBva2Vtb24pXHJcbiAgfVxyXG5cclxuICBjb25zdCBjb250YWluZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoXHJcbiAgY29uc3Qgc3BlZWQgPSAxXHJcbiAgY29uc3QgZGlyZWN0aW9uID0gcG9rZW1vbi5kaXJlY3Rpb24gfHwgJ3JpZ2h0J1xyXG4gIGxldCBsZWZ0UG9zaXRpb24gPSBwb2tlbW9uLmxlZnRQb3NpdGlvbiB8fCAwXHJcblxyXG4gIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcclxuICAgIGxlZnRQb3NpdGlvbiArPSBzcGVlZFxyXG4gICAgaWYgKGxlZnRQb3NpdGlvbiA+IGNvbnRhaW5lcldpZHRoIC0gUE9LRU1PTl9CQVNFX1NJWkUgKiBwb2tlbW9uLnNjYWxlKSB7XHJcbiAgICAgIHBva2Vtb24uZGlyZWN0aW9uID0gJ2xlZnQnXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGxlZnRQb3NpdGlvbiAtPSBzcGVlZFxyXG4gICAgaWYgKGxlZnRQb3NpdGlvbiA8IDApIHtcclxuICAgICAgcG9rZW1vbi5kaXJlY3Rpb24gPSAncmlnaHQnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwb2tlbW9uLmxlZnRQb3NpdGlvbiA9IGxlZnRQb3NpdGlvblxyXG5cclxuICBjb25zdCBtb3ZlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZlbWVudC1jb250YWluZXInKVxyXG4gIGlmIChtb3ZlbWVudENvbnRhaW5lcikge1xyXG4gICAgbW92ZW1lbnRDb250YWluZXIuc3R5bGUubWFyZ2luTGVmdCA9IGAke2xlZnRQb3NpdGlvbn1weGBcclxuICB9XHJcblxyXG4gIGNvbnN0IHBva2Vtb25JbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZW1vbicpIGFzIEhUTUxJbWFnZUVsZW1lbnRcclxuICBpZiAocG9rZW1vbkltZykge1xyXG4gICAgcG9rZW1vbkltZy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGVYKCR7ZGlyZWN0aW9uID09PSAncmlnaHQnID8gMSA6IC0xfSkgc2NhbGUoJHtwb2tlbW9uLnNjYWxlfSlgXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpOiB2b2lkIHtcclxuICBpZiAoc3RhdGUuaW50ZXJ2YWxJZCkge1xyXG4gICAgY2xlYXJJbnRlcnZhbChzdGF0ZS5pbnRlcnZhbElkKVxyXG4gIH1cclxuICBzdGF0ZS5pbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgIHRpY2soKVxyXG4gIH0sIFRJQ0tfSU5URVJWQUxfTVMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3BBbmltYXRpb24oKTogdm9pZCB7XHJcbiAgaWYgKHN0YXRlLmludGVydmFsSWQpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwoc3RhdGUuaW50ZXJ2YWxJZClcclxuICAgIHN0YXRlLmludGVydmFsSWQgPSB1bmRlZmluZWRcclxuICB9XHJcbn1cclxuXHJcbi8vIFRoZSBleHBsb3JlciB2aWV3IGtlZXBzIGl0cyBjb250ZXh0IHdoZW4gaGlkZGVuLCBzbyB3aXRob3V0IHRoaXMgdGhlIHdhbGtpbmdcclxuLy8gbG9vcCB3b3VsZCBrZWVwIHJ1bm5pbmcgYWdhaW5zdCBhIHBhbmVsIG5vYm9keSBpcyBsb29raW5nIGF0LlxyXG5mdW5jdGlvbiBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKCk6IHZvaWQge1xyXG4gIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcclxuICAgIHN0b3BBbmltYXRpb24oKVxyXG4gIH0gZWxzZSBpZiAoIXN0YXRlLmludGVydmFsSWQpIHtcclxuICAgIHN0YXJ0QW5pbWF0aW9uKClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhcHAgPSAoe1xyXG4gIHVzZXJQb2tlbW9uLFxyXG4gIGJhc2VQb2tlbW9uVXJpLFxyXG59OiB7XHJcbiAgdXNlclBva2Vtb246IFVzZXJQb2tlbW9uIHwgbnVsbFxyXG4gIGJhc2VQb2tlbW9uVXJpOiBzdHJpbmdcclxufSk6IHZvaWQgPT4ge1xyXG4gIHN0YXRlLmJhc2VQb2tlbW9uVXJpID0gYmFzZVBva2Vtb25VcmlcclxuICBzdGF0ZS51c2VyUG9rZW1vbiA9IHVzZXJQb2tlbW9uXHJcblxyXG4gIHVwZGF0ZVBva2Vtb25EaXNwbGF5KHVzZXJQb2tlbW9uKVxyXG4gIHN0YXJ0QW5pbWF0aW9uKClcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpXHJcblxyXG4gIC8vIEFkZCBob3ZlciBldmVudCBsaXN0ZW5lcnNcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcclxuICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgc3RhdGUuaXNIb3ZlcmVkID0gdHJ1ZVxyXG4gICAgICBpZiAoc3RhdGUudXNlclBva2Vtb24gJiYgc3RhdGUudXNlclBva2Vtb24ubGV2ZWwgPiAwKSB7XHJcbiAgICAgICAgc3RhdGUudXNlclBva2Vtb24uaXNIb3ZlcmVkID0gdHJ1ZVxyXG4gICAgICAgIHVwZGF0ZVBva2Vtb25EaXNwbGF5KHN0YXRlLnVzZXJQb2tlbW9uKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgIHN0YXRlLmlzSG92ZXJlZCA9IGZhbHNlXHJcbiAgICAgIGlmIChzdGF0ZS51c2VyUG9rZW1vbiAmJiBzdGF0ZS51c2VyUG9rZW1vbi5sZXZlbCA+IDApIHtcclxuICAgICAgICBzdGF0ZS51c2VyUG9rZW1vbi5pc0hvdmVyZWQgPSBmYWxzZVxyXG4gICAgICAgIHN0YXRlLnVzZXJQb2tlbW9uLnN0YXRlID0gJ3dhbGtpbmcnXHJcbiAgICAgICAgdXBkYXRlUG9rZW1vbkRpc3BsYXkoc3RhdGUudXNlclBva2Vtb24pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgeyBjb21tYW5kLCBkYXRhIH0gPSBldmVudC5kYXRhXHJcbiAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcclxuICAgICAgY2FzZSAnc3Bhd24tcG9rZW1vbic6XHJcbiAgICAgICAgaWYgKGRhdGEudXNlclBva2Vtb24pIHtcclxuICAgICAgICAgIHN0YXRlLnVzZXJQb2tlbW9uID0gZGF0YS51c2VyUG9rZW1vblxyXG4gICAgICAgICAgc3RhdGUuaWRsZVVudGlsID0gMFxyXG4gICAgICAgICAgdXBkYXRlUG9rZW1vbkRpc3BsYXkoZGF0YS51c2VyUG9rZW1vbilcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWtcclxuXHJcbiAgICAgIGNhc2UgJ3VwZGF0ZS1wb2tlbW9uJzoge1xyXG4gICAgICAgIGlmIChkYXRhLnVzZXJQb2tlbW9uKSB7XHJcbiAgICAgICAgICBjb25zdCBwcmV2aW91c0xldmVsID0gc3RhdGUudXNlclBva2Vtb24/LmxldmVsID8/IDBcclxuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQb2tlbW9uID0ge1xyXG4gICAgICAgICAgICAuLi5kYXRhLnVzZXJQb2tlbW9uLFxyXG4gICAgICAgICAgICBsZWZ0UG9zaXRpb246IHN0YXRlLnVzZXJQb2tlbW9uPy5sZWZ0UG9zaXRpb24gfHwgMCxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBzdGF0ZS51c2VyUG9rZW1vbj8uZGlyZWN0aW9uIHx8ICdyaWdodCcsXHJcbiAgICAgICAgICAgIGlzSG92ZXJlZDogc3RhdGUuaXNIb3ZlcmVkLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3RhdGUudXNlclBva2Vtb24gPSB1cGRhdGVkUG9rZW1vblxyXG5cclxuICAgICAgICAgIGlmICh1cGRhdGVkUG9rZW1vbi5sZXZlbCA+IHByZXZpb3VzTGV2ZWwpIHtcclxuICAgICAgICAgICAgc3RhdGUuaWRsZVVudGlsID0gRGF0ZS5ub3coKSArIElETEVfQUZURVJfQ0hBTkdFX01TXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdXBkYXRlUG9rZW1vbkRpc3BsYXkodXBkYXRlZFBva2Vtb24pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG53aW5kb3cucG9rZWNoaUFwcCA9IHtcclxuICBhcHAsXHJcbn1cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhbmVsL21haW4udHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9