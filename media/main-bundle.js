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
        types: ["rock" /* PokemonElementType.rock */, "water" /* PokemonElementType.water */],
    },
    omastar: {
        id: 139,
        name: 'Omastar',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Omastar!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */, "water" /* PokemonElementType.water */],
    },
    kabuto: {
        id: 140,
        name: 'Kabuto',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kabuto!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */, "water" /* PokemonElementType.water */],
    },
    kabutops: {
        id: 141,
        name: 'Kabutops',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Kabutops!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */, "water" /* PokemonElementType.water */],
    },
    aerodactyl: {
        id: 142,
        name: 'Aerodactyl',
        generation: types_1.PokemonGeneration.Gen1,
        cry: 'Aerodactyl!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
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
        types: ["rock" /* PokemonElementType.rock */, "grass" /* PokemonElementType.grass */],
    },
    cradily: {
        id: 346,
        name: 'Cradily',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Cradily!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */, "grass" /* PokemonElementType.grass */],
    },
    anorith: {
        id: 347,
        name: 'Anorith',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Anorith!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */, "bug" /* PokemonElementType.bug */],
    },
    armaldo: {
        id: 348,
        name: 'Armaldo',
        generation: types_1.PokemonGeneration.Gen3,
        cry: 'Armaldo!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzRkFBdUQ7S0FDL0Q7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzRkFBdUQ7S0FDL0Q7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwRUFBaUQ7S0FDekQ7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVB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Q3hDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLG9CQUFvQjtxQkFDcEQ7b0JBRUQsb0JBQW9CLENBQUMsY0FBYyxDQUFDO2lCQUNyQztnQkFDRCxNQUFLO2FBQ047U0FDRjtJQUNILENBQUMsQ0FBQztBQUNKLENBQUM7QUFuRVksV0FBRyxPQW1FZjtBQUVELE1BQU0sQ0FBQyxVQUFVLEdBQUc7SUFDbEIsR0FBRyxFQUFILFdBQUc7Q0FDSjs7Ozs7OztVQ3ZTRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFNUJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZWNoaUFwcC8uL3NyYy9jb21tb24vcG9rZW1vbi1kYXRhLnRzIiwid2VicGFjazovL3Bva2VjaGlBcHAvLi9zcmMvY29tbW9uL3R5cGVzLnRzIiwid2VicGFjazovL3Bva2VjaGlBcHAvLi9zcmMvcGFuZWwvbWFpbi50cyIsIndlYnBhY2s6Ly9wb2tlY2hpQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Bva2VjaGlBcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wb2tlY2hpQXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wb2tlY2hpQXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2tlbW9uQ29sb3IsIFBva2Vtb25Db25maWcsIFBva2Vtb25FbGVtZW50VHlwZSwgUG9rZW1vbkdlbmVyYXRpb24sIFBva2Vtb25SYXJpdHksIFBva2Vtb25UeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IFBPS0VNT05fREFUQTogeyBba2V5OiBzdHJpbmddOiBQb2tlbW9uQ29uZmlnIH0gPSB7XG4gIGJ1bGJhc2F1cjoge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6ICdCdWxiYXNhdXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnQnVsYmFzYXVyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIGl2eXNhdXI6IHtcbiAgICBpZDogMixcbiAgICBuYW1lOiAnSXZ5c2F1cicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdJdnlzYXVyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIHZlbnVzYXVyOiB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogJ1ZlbnVzYXVyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1ZlbnVzYXVyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIGNoYXJtYW5kZXI6IHtcbiAgICBpZDogNCxcbiAgICBuYW1lOiAnQ2hhcm1hbmRlcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdDaGFybWFuZGVyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcbiAgfSxcbiAgY2hhcm1lbGVvbjoge1xuICAgIGlkOiA1LFxuICAgIG5hbWU6ICdDaGFybWVsZW9uJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0NoYXJtZWxlb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxuICB9LFxuICBjaGFyaXphcmQ6IHtcbiAgICBpZDogNixcbiAgICBuYW1lOiAnQ2hhcml6YXJkJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0NoYXJpemFyZCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZSwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHNxdWlydGxlOiB7XG4gICAgaWQ6IDcsXG4gICAgbmFtZTogJ1NxdWlydGxlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1NxdXJpdGxlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIHdhcnRvcnRsZToge1xuICAgIGlkOiA4LFxuICAgIG5hbWU6ICdXYXJ0b3J0bGUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnV2FydG9ydGxlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGJsYXN0b2lzZToge1xuICAgIGlkOiA5LFxuICAgIG5hbWU6ICdCbGFzdG9pc2UnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnQmxhc3RvaXNlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGNhdGVycGllOiB7XG4gICAgaWQ6IDEwLFxuICAgIG5hbWU6ICdDYXRlcnBpZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdDYXRlcnBpZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcbiAgfSxcbiAgbWV0YXBvZDoge1xuICAgIGlkOiAxMSxcbiAgICBuYW1lOiAnTWV0YXBvZCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdNZXRhcG9kIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWddLFxuICB9LFxuICBidXR0ZXJmcmVlOiB7XG4gICAgaWQ6IDEyLFxuICAgIG5hbWU6ICdCdXR0ZXJmcmVlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0J1dHRlcmZyZWUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHdlZWRsZToge1xuICAgIGlkOiAxMyxcbiAgICBuYW1lOiAnV2VlZGxlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1dlZWRsZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAga2FrdW5hOiB7XG4gICAgaWQ6IDE0LFxuICAgIG5hbWU6ICdLYWt1bmEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnS2FrdW5hIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBiZWVkcmlsbDoge1xuICAgIGlkOiAxNSxcbiAgICBuYW1lOiAnQmVlZHJpbGwnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnQmVlZHJpbGwhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIHBpZGdleToge1xuICAgIGlkOiAxNixcbiAgICBuYW1lOiAnUGlkZ2V5JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1BpZGdleSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgcGlkZ2VvdHRvOiB7XG4gICAgaWQ6IDE3LFxuICAgIG5hbWU6ICdQaWRnZW90dG8nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnUGlkZ2VvdHRvIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBwaWRnZW90OiB7XG4gICAgaWQ6IDE4LFxuICAgIG5hbWU6ICdQaWRnZW90JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1BpZGdlb3QhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHJhdHRhdGE6IHtcbiAgICBpZDogMTksXG4gICAgbmFtZTogJ1JhdHRhdGEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnUmF0dGF0YSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgcmF0aWNhdGU6IHtcbiAgICBpZDogMjAsXG4gICAgbmFtZTogJ1JhdGljYXRlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1JhdGljYXRlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBzcGVhcm93OiB7XG4gICAgaWQ6IDIxLFxuICAgIG5hbWU6ICdTcGVhcm93JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1NwZWFyb3chJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIGZlYXJvdzoge1xuICAgIGlkOiAyMixcbiAgICBuYW1lOiAnRmVhcm93JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0ZlYXJvdyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgZWthbnM6IHtcbiAgICBpZDogMjMsXG4gICAgbmFtZTogJ0VrYW5zJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0VrYW5zIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBhcmJvazoge1xuICAgIGlkOiAyNCxcbiAgICBuYW1lOiAnQXJib2snLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnQXJib2shJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIHBpa2FjaHU6IHtcbiAgICBpZDogMjUsXG4gICAgbmFtZTogJ1Bpa2FjaHUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnUGlrYWNodSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxuICB9LFxuICByYWljaHU6IHtcbiAgICBpZDogMjYsXG4gICAgbmFtZTogJ1JhaWNodScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdSYWljaHUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcbiAgfSxcbiAgc2FuZHNocmV3OiB7XG4gICAgaWQ6IDI3LFxuICAgIG5hbWU6ICdTYW5kc2hyZXcnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnU2FuZHNocmV3IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBzYW5kc2xhc2g6IHtcbiAgICBpZDogMjgsXG4gICAgbmFtZTogJ1NhbmRzbGFzaCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdTYW5kc2xhc2ghJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIG5pZG9yYW5fZmVtYWxlOiB7XG4gICAgaWQ6IDI5LFxuICAgIG5hbWU6ICdOaWRvcmFu4pmAJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ05pZG9yYW4hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIG5pZG9yaW5hOiB7XG4gICAgaWQ6IDMwLFxuICAgIG5hbWU6ICdOaWRvcmluYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdOaWRvcmluYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgbmlkb3F1ZWVuOiB7XG4gICAgaWQ6IDMxLFxuICAgIG5hbWU6ICdOaWRvcXVlZW4nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTmlkb3F1ZWVuIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb24sIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBuaWRvcmFuX21hbGU6IHtcbiAgICBpZDogMzIsXG4gICAgbmFtZTogJ05pZG9yYW7imYInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTmlkb3JhbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgbmlkb3Jpbm86IHtcbiAgICBpZDogMzMsXG4gICAgbmFtZTogJ05pZG9yaW5vJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ05pZG9yaW5vIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBuaWRva2luZzoge1xuICAgIGlkOiAzNCxcbiAgICBuYW1lOiAnTmlkb2tpbmcnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTmlkb2tpbmchJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbiwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIGNsZWZhaXJ5OiB7XG4gICAgaWQ6IDM1LFxuICAgIG5hbWU6ICdDbGVmYWlyeScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdDbGVmYWlyeSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgY2xlZmFibGU6IHtcbiAgICBpZDogMzYsXG4gICAgbmFtZTogJ0NsZWZhYmxlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0NsZWZhYmxlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICB2dWxwaXg6IHtcbiAgICBpZDogMzcsXG4gICAgbmFtZTogJ1Z1bHBpeCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdWdWxwaXghJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxuICB9LFxuICBuaW5ldGFsZXM6IHtcbiAgICBpZDogMzgsXG4gICAgbmFtZTogJ05pbmV0YWxlcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdOaW5ldGFsZXMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxuICB9LFxuICBqaWdnbHlwdWZmOiB7XG4gICAgaWQ6IDM5LFxuICAgIG5hbWU6ICdKaWdnbHlwdWZmJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0ppZ2dseXB1ZmYhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHdpZ2dseXR1ZmY6IHtcbiAgICBpZDogNDAsXG4gICAgbmFtZTogJ1dpZ2dseXR1ZmYnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnV2lnZ2x5dHVmZiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgenViYXQ6IHtcbiAgICBpZDogNDEsXG4gICAgbmFtZTogJ1p1YmF0JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1p1YmF0IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb24sIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBnb2xiYXQ6IHtcbiAgICBpZDogNDIsXG4gICAgbmFtZTogJ0dvbGJhdCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdHb2xiYXQhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbiwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIG9kZGlzaDoge1xuICAgIGlkOiA0MyxcbiAgICBuYW1lOiAnT2RkaXNoJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ09kZGlzaCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBnbG9vbToge1xuICAgIGlkOiA0NCxcbiAgICBuYW1lOiAnR2xvb20nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnR2xvb20hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgdmlsZXBsdW1lOiB7XG4gICAgaWQ6IDQ1LFxuICAgIG5hbWU6ICdWaWxlcGx1bWUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnVmlsZXBsdW1lIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIHBhcmFzOiB7XG4gICAgaWQ6IDQ2LFxuICAgIG5hbWU6ICdQYXJhcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdQYXJhcyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxuICB9LFxuICBwYXJhc2VjdDoge1xuICAgIGlkOiA0NyxcbiAgICBuYW1lOiAnUGFyYXNlY3QnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnUGFyYXNlY3QhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgdmVub25hdDoge1xuICAgIGlkOiA0OCxcbiAgICBuYW1lOiAnVmVub25hdCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdWZW5vbmF0IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICB2ZW5vbW90aDoge1xuICAgIGlkOiA0OSxcbiAgICBuYW1lOiAnVmVub21vdGgnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnVmVub21vdGghJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIGRpZ2xldHQ6IHtcbiAgICBpZDogNTAsXG4gICAgbmFtZTogJ0RpZ2xldHQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnRGlnbGV0dCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgZHVndHJpbzoge1xuICAgIGlkOiA1MSxcbiAgICBuYW1lOiAnRHVndHJpbycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdEdWd0cmlvIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBtZW93dGg6IHtcbiAgICBpZDogNTIsXG4gICAgbmFtZTogJ01lb3d0aCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdNZW93dGghJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHBlcnNpYW46IHtcbiAgICBpZDogNTMsXG4gICAgbmFtZTogJ1BlcnNpYW4nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnUGVyc2lhbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgcHN5ZHVjazoge1xuICAgIGlkOiA1NCxcbiAgICBuYW1lOiAnUHN5ZHVjaycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdQc3lkdWNrIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGdvbGR1Y2s6IHtcbiAgICBpZDogNTUsXG4gICAgbmFtZTogJ0dvbGR1Y2snLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnR29sZHVjayEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBtYW5rZXk6IHtcbiAgICBpZDogNTYsXG4gICAgbmFtZTogJ01hbmtleScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdNYW5rZXkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcbiAgfSxcbiAgcHJpbWVhcGU6IHtcbiAgICBpZDogNTcsXG4gICAgbmFtZTogJ1ByaW1lYXBlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1ByaW1lYXBlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXG4gIH0sXG4gIGdyb3dsaXRoZToge1xuICAgIGlkOiA1OCxcbiAgICBuYW1lOiAnR3Jvd2xpdGhlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0dyb3dsaXRoZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXG4gIH0sXG4gIGFyY2FuaW5lOiB7XG4gICAgaWQ6IDU5LFxuICAgIG5hbWU6ICdBcmNhbmluZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdBcmNhbmluZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXG4gIH0sXG4gIHBvbGl3YWc6IHtcbiAgICBpZDogNjAsXG4gICAgbmFtZTogJ1BvbGl3YWcnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnUG9saXdhZyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBwb2xpd2hpcmw6IHtcbiAgICBpZDogNjEsXG4gICAgbmFtZTogJ1BvbGl3aGlybCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdQb2xpd2hpcmwhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgcG9saXdyYXRoOiB7XG4gICAgaWQ6IDYyLFxuICAgIG5hbWU6ICdQb2xpd3JhdGgnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnUG9saXdyYXRoIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcbiAgfSxcbiAgYWJyYToge1xuICAgIGlkOiA2MyxcbiAgICBuYW1lOiAnQWJyYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdBYnJhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAga2FkYWJyYToge1xuICAgIGlkOiA2NCxcbiAgICBuYW1lOiAnS2FkYWJyYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdLYWRhYnJhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgYWxha2F6YW06IHtcbiAgICBpZDogNjUsXG4gICAgbmFtZTogJ0FsYWthemFtJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0FsYWthemFtIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgbWFjaG9wOiB7XG4gICAgaWQ6IDY2LFxuICAgIG5hbWU6ICdNYWNob3AnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTWFjaG9wIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXG4gIH0sXG4gIG1hY2hva2U6IHtcbiAgICBpZDogNjcsXG4gICAgbmFtZTogJ01hY2hva2UnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTWFjaG9rZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxuICB9LFxuICBtYWNoYW1wOiB7XG4gICAgaWQ6IDY4LFxuICAgIG5hbWU6ICdNYWNoYW1wJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0FsYWthemFtIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXG4gIH0sXG4gIGJlbGxzcHJvdXQ6IHtcbiAgICBpZDogNjksXG4gICAgbmFtZTogJ0JlbGxzcHJvdXQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnQmVsbHNwcm91dCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICB3ZWVwaW5iZWxsOiB7XG4gICAgaWQ6IDcwLFxuICAgIG5hbWU6ICdXZWVwaW5iZWxsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1dlZXBpbmJlbGwhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgdmljdHJlZWJlbDoge1xuICAgIGlkOiA3MSxcbiAgICBuYW1lOiAnVmljdHJlZWJlbCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdWaWN0cmVlYmVsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIHRlbnRhY29vbDoge1xuICAgIGlkOiA3MixcbiAgICBuYW1lOiAnVGVudGFjb29sJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1RlbnRhY29vbCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICB0ZW50YWNydWVsOiB7XG4gICAgaWQ6IDczLFxuICAgIG5hbWU6ICdUZW50YWNydWVsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1RlbnRhY3J1ZWwhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgZ2VvZHVkZToge1xuICAgIGlkOiA3NCxcbiAgICBuYW1lOiAnR2VvZHVkZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdHZW9kdWRlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgZ3JhdmVsZXI6IHtcbiAgICBpZDogNzUsXG4gICAgbmFtZTogJ0dyYXZlbGVyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0dyYXZlbGVyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgZ29sZW06IHtcbiAgICBpZDogNzYsXG4gICAgbmFtZTogJ0dvbGVtJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0dvbGVtIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgcG9ueXRhOiB7XG4gICAgaWQ6IDc3LFxuICAgIG5hbWU6ICdQb255dGEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnUG9ueXRhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcbiAgfSxcbiAgcmFwaWRhc2g6IHtcbiAgICBpZDogNzgsXG4gICAgbmFtZTogJ1JhcGlkYXNoJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1JhcGlkYXNoIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcbiAgfSxcbiAgc2xvd3Bva2U6IHtcbiAgICBpZDogNzksXG4gICAgbmFtZTogJ1Nsb3dwb2tlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1Nsb3dwb2tlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBzbG93YnJvOiB7XG4gICAgaWQ6IDgwLFxuICAgIG5hbWU6ICdTbG93YnJvJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1Nsb3dicm8hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIG1hZ25lbWl0ZToge1xuICAgIGlkOiA4MSxcbiAgICBuYW1lOiAnTWFnbmVtaXRlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ01hZ25lbWl0ZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWMsIFBva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXG4gIH0sXG4gIG1hZ25ldG9uOiB7XG4gICAgaWQ6IDgyLFxuICAgIG5hbWU6ICdNYWduZXRvbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdNYWduZXRvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWMsIFBva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXG4gIH0sXG4gIGZhcmZldGNoZDoge1xuICAgIGlkOiA4MyxcbiAgICBuYW1lOiAnRmFyZmV0Y2hcXCdkJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0ZhcmZldGNoXFwnZCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgZG9kdW86IHtcbiAgICBpZDogODQsXG4gICAgbmFtZTogJ0RvZHVvJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0RvZHVvIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBkb2RyaW86IHtcbiAgICBpZDogODUsXG4gICAgbmFtZTogJ0RvZHJpbycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdEb2RyaW8hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHNlZWw6IHtcbiAgICBpZDogODYsXG4gICAgbmFtZTogJ1NlZWwnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnU2VlbCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBkZXdnb25nOiB7XG4gICAgaWQ6IDg3LFxuICAgIG5hbWU6ICdEZXdnb25nJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0Rld2dvbmchJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuaWNlXSxcbiAgfSxcbiAgZ3JpbWVyOiB7XG4gICAgaWQ6IDg4LFxuICAgIG5hbWU6ICdHcmltZXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnR3JpbWVyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBtdWs6IHtcbiAgICBpZDogODksXG4gICAgbmFtZTogJ011aycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdNdWshJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIHNoZWxsZGVyOiB7XG4gICAgaWQ6IDkwLFxuICAgIG5hbWU6ICdTaGVsbGRlcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdTaGVsbGRlciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBjbG95c3Rlcjoge1xuICAgIGlkOiA5MSxcbiAgICBuYW1lOiAnQ2xveXN0ZXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnQ2xveXN0ZXIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuaWNlXSxcbiAgfSxcbiAgZ2FzdGx5OiB7XG4gICAgaWQ6IDkyLFxuICAgIG5hbWU6ICdHYXN0bHknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnR2FzdGx5IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdCwgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIGhhdW50ZXI6IHtcbiAgICBpZDogOTMsXG4gICAgbmFtZTogJ0hhdW50ZXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnSGF1bnRlciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3QsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBnZW5nYXI6IHtcbiAgICBpZDogOTQsXG4gICAgbmFtZTogJ0dlbmdhcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdHZW5nYXIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0LCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgb25peDoge1xuICAgIGlkOiA5NSxcbiAgICBuYW1lOiAnT25peCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdPbml4IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgZHJvd3plZToge1xuICAgIGlkOiA5NixcbiAgICBuYW1lOiAnRHJvd3plZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdEcm93emVlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgaHlwbm86IHtcbiAgICBpZDogOTcsXG4gICAgbmFtZTogJ0h5cG5vJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0h5cG5vIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAga3JhYmJ5OiB7XG4gICAgaWQ6IDk4LFxuICAgIG5hbWU6ICdLcmFiYnknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnS3JhYmJ5IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGtpbmdsZXI6IHtcbiAgICBpZDogOTksXG4gICAgbmFtZTogJ0tpbmdsZXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnS2luZ2xlciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICB2b2x0b3JiOiB7XG4gICAgaWQ6IDEwMCxcbiAgICBuYW1lOiAnVm9sdG9yYicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdWb2x0b3JiIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXG4gIH0sXG4gIGVsZWN0cm9kZToge1xuICAgIGlkOiAxMDEsXG4gICAgbmFtZTogJ0VsZWN0cm9kZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdFbGVjdHJvZGUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcbiAgfSxcbiAgZXhlZ2djdXRlOiB7XG4gICAgaWQ6IDEwMixcbiAgICBuYW1lOiAnRXhlZ2djdXRlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0V4ZWdnY3V0ZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgZXhlZ2d1dG9yOiB7XG4gICAgaWQ6IDEwMyxcbiAgICBuYW1lOiAnRXhlZ2d1dG9yJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0V4ZWdndXRvciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgY3Vib25lOiB7XG4gICAgaWQ6IDEwNCxcbiAgICBuYW1lOiAnQ3Vib25lJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0N1Ym9uZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgbWFyb3dhazoge1xuICAgIGlkOiAxMDUsXG4gICAgbmFtZTogJ01hcm93YWsnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTWFyb3dhayEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgaGl0bW9ubGVlOiB7XG4gICAgaWQ6IDEwNixcbiAgICBuYW1lOiAnSGl0bW9ubGVlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0hpdG1vbmxlZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxuICB9LFxuICBoaXRtb25jaGFuOiB7XG4gICAgaWQ6IDEwNyxcbiAgICBuYW1lOiAnSGl0bW9uY2hhbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdIaXRtb25jaGFuIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXG4gIH0sXG4gIGxpY2tpdHVuZzoge1xuICAgIGlkOiAxMDgsXG4gICAgbmFtZTogJ0xpY2tpdHVuZycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdMaWNraXR1bmchJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIGtvZmZpbmc6IHtcbiAgICBpZDogMTA5LFxuICAgIG5hbWU6ICdLb2ZmaW5nJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0tvZmZpbmchJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIHdlZXppbmc6IHtcbiAgICBpZDogMTEwLFxuICAgIG5hbWU6ICdXZWV6aW5nJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1dlZXppbmchJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIHJoeWhvcm46IHtcbiAgICBpZDogMTExLFxuICAgIG5hbWU6ICdSaHlob3JuJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1JoeWhvcm4hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZCwgUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2tdLFxuICB9LFxuICByaHlkb246IHtcbiAgICBpZDogMTEyLFxuICAgIG5hbWU6ICdSaHlkb24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnUmh5ZG9uIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmQsIFBva2Vtb25FbGVtZW50VHlwZS5yb2NrXSxcbiAgfSxcbiAgY2hhbnNleToge1xuICAgIGlkOiAxMTMsXG4gICAgbmFtZTogJ0NoYW5zZXknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnQ2hhbnNleSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgdGFuZ2VsYToge1xuICAgIGlkOiAxMTQsXG4gICAgbmFtZTogJ1RhbmdlbGEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnVGFuZ2VsYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxuICB9LFxuICBrYW5nYXNraGFuOiB7XG4gICAgaWQ6IDExNSxcbiAgICBuYW1lOiAnS2FuZ2Fza2hhbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdLYW5nYXNraGFuIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBob3JzZWE6IHtcbiAgICBpZDogMTE2LFxuICAgIG5hbWU6ICdIb3JzZWEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnSG9yc2VhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIHNlYWRyYToge1xuICAgIGlkOiAxMTcsXG4gICAgbmFtZTogJ1NlYWRyYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdTZWFkcmEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgZ29sZGVlbjoge1xuICAgIGlkOiAxMTgsXG4gICAgbmFtZTogJ0dvbGRlZW4nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnR29sZGVlbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBzZWFraW5nOiB7XG4gICAgaWQ6IDExOSxcbiAgICBuYW1lOiAnU2Vha2luZycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdTZWFraW5nIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIHN0YXJ5dToge1xuICAgIGlkOiAxMjAsXG4gICAgbmFtZTogJ1N0YXJ5dScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdTdGFyeXUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgc3Rhcm1pZToge1xuICAgIGlkOiAxMjEsXG4gICAgbmFtZTogJ1N0YXJtaWUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnU3Rhcm1pZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgbXJtaW1lOiB7XG4gICAgaWQ6IDEyMixcbiAgICBuYW1lOiAnTXIuIE1pbWUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTXIuIE1pbWUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBzY3l0aGVyOiB7XG4gICAgaWQ6IDEyMyxcbiAgICBuYW1lOiAnU2N5dGhlcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdTY3l0aGVyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBqeW54OiB7XG4gICAgaWQ6IDEyNCxcbiAgICBuYW1lOiAnSnlueCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdKeW54IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2UsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgZWxlY3RhYnV6ejoge1xuICAgIGlkOiAxMjUsXG4gICAgbmFtZTogJ0VsZWN0YWJ1enonLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnRWxlY3RhYnV6eiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxuICB9LFxuICBtYWdtYXI6IHtcbiAgICBpZDogMTI2LFxuICAgIG5hbWU6ICdNYWdtYXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTWFnbWFyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcbiAgfSxcbiAgcGluc2lyOiB7XG4gICAgaWQ6IDEyNyxcbiAgICBuYW1lOiAnUGluc2lyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1BpbnNpciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcbiAgfSxcbiAgdGF1cm9zOiB7XG4gICAgaWQ6IDEyOCxcbiAgICBuYW1lOiAnVGF1cm9zJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1RhdXJvcyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgbWFnaWthcnA6IHtcbiAgICBpZDogMTI5LFxuICAgIG5hbWU6ICdNYWdpa2FycCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdNYWdpa2FycCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBneWFyYWRvczoge1xuICAgIGlkOiAxMzAsXG4gICAgbmFtZTogJ0d5YXJhZG9zJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0d5YXJhZG9zIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIGxhcHJhczoge1xuICAgIGlkOiAxMzEsXG4gICAgbmFtZTogJ0xhcHJhcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdMYXByYXMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuaWNlXSxcbiAgfSxcbiAgZGl0dG86IHtcbiAgICBpZDogMTMyLFxuICAgIG5hbWU6ICdEaXR0bycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdEaXR0byEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgZWV2ZWU6IHtcbiAgICBpZDogMTMzLFxuICAgIG5hbWU6ICdFZXZlZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdFZXZlZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgdmFwb3Jlb246IHtcbiAgICBpZDogMTM0LFxuICAgIG5hbWU6ICdWYXBvcmVvbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdWYXBvcmVvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBqb2x0ZW9uOiB7XG4gICAgaWQ6IDEzNSxcbiAgICBuYW1lOiAnSm9sdGVvbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdKb2x0ZW9uIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXG4gIH0sXG4gIGZsYXJlb246IHtcbiAgICBpZDogMTM2LFxuICAgIG5hbWU6ICdGbGFyZW9uJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0ZsYXJlb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxuICB9LFxuICBwb3J5Z29uOiB7XG4gICAgaWQ6IDEzNyxcbiAgICBuYW1lOiAnUG9yeWdvbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdQb3J5Z29uIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBvbWFueXRlOiB7XG4gICAgaWQ6IDEzOCxcbiAgICBuYW1lOiAnT21hbnl0ZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdPbWFueXRlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBvbWFzdGFyOiB7XG4gICAgaWQ6IDEzOSxcbiAgICBuYW1lOiAnT21hc3RhcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdPbWFzdGFyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBrYWJ1dG86IHtcbiAgICBpZDogMTQwLFxuICAgIG5hbWU6ICdLYWJ1dG8nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnS2FidXRvIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBrYWJ1dG9wczoge1xuICAgIGlkOiAxNDEsXG4gICAgbmFtZTogJ0thYnV0b3BzJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0thYnV0b3BzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBhZXJvZGFjdHlsOiB7XG4gICAgaWQ6IDE0MixcbiAgICBuYW1lOiAnQWVyb2RhY3R5bCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdBZXJvZGFjdHlsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgc25vcmxheDoge1xuICAgIGlkOiAxNDMsXG4gICAgbmFtZTogJ1Nub3JsYXgnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnU25vcmxheCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgYXJ0aWN1bm86IHtcbiAgICBpZDogMTQ0LFxuICAgIG5hbWU6ICdBcnRpY3VubycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdBcnRpY3VubyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2UsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICB6YXBkb3M6IHtcbiAgICBpZDogMTQ1LFxuICAgIG5hbWU6ICdaYXBkb3MnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnWmFwZG9zIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuc3ViTGVnZW5kYXJ5LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgbW9sdHJlczoge1xuICAgIGlkOiAxNDYsXG4gICAgbmFtZTogJ01vbHRyZXMnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTW9sdHJlcyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgZHJhdGluaToge1xuICAgIGlkOiAxNDcsXG4gICAgbmFtZTogJ0RyYXRpbmknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnRHJhdGluaSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcbiAgfSxcbiAgZHJhZ29uYWlyOiB7XG4gICAgaWQ6IDE0OCxcbiAgICBuYW1lOiAnRHJhZ29uYWlyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0RyYWdvbmFpciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcbiAgfSxcbiAgZHJhZ29uaXRlOiB7XG4gICAgaWQ6IDE0OSxcbiAgICBuYW1lOiAnRHJhZ29uaXRlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0RyYWdvbml0ZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgbWV3dHdvOiB7XG4gICAgaWQ6IDE1MCxcbiAgICBuYW1lOiAnTWV3dHdvJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ01ld3R3byEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmxlZ2VuZGFyeSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgbWV3OiB7XG4gICAgaWQ6IDE1MSxcbiAgICBuYW1lOiAnTWV3JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ01ldyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICAvLyBHZW5lcmF0aW9uIDJcbiAgY2hpa29yaXRhOiB7XG4gICAgaWQ6IDE1MixcbiAgICBuYW1lOiAnQ2hpa29yaXRhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0NoaWtvcml0YSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxuICB9LFxuICBiYXlsZWVmOiB7XG4gICAgaWQ6IDE1MyxcbiAgICBuYW1lOiAnQmF5bGVlZicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdCYXlsZWVmIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXG4gIH0sXG4gIG1lZ2FuaXVtOiB7XG4gICAgaWQ6IDE1NCxcbiAgICBuYW1lOiAnTWVnYW5pdW0nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnTWVnYW5pdW0hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgY3luZGFxdWlsOiB7XG4gICAgaWQ6IDE1NSxcbiAgICBuYW1lOiAnQ3luZGFxdWlsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0N5bmRhcXVpbCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXG4gIH0sXG4gIHF1aWxhdmE6IHtcbiAgICBpZDogMTU2LFxuICAgIG5hbWU6ICdRdWlsYXZhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1F1aWxhdmEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxuICB9LFxuICB0eXBobG9zaW9uOiB7XG4gICAgaWQ6IDE1NyxcbiAgICBuYW1lOiAnVHlwaGxvc2lvbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdUeXBobG9zaW9uIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcbiAgfSxcbiAgdG90b2RpbGU6IHtcbiAgICBpZDogMTU4LFxuICAgIG5hbWU6ICdUb3RvZGlsZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdUb3RvZGlsZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBjcm9jb25hdzoge1xuICAgIGlkOiAxNTksXG4gICAgbmFtZTogJ0Nyb2NvbmF3JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0Nyb2NvbmF3IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGZlcmFsaWdhdHI6IHtcbiAgICBpZDogMTYwLFxuICAgIG5hbWU6ICdGZXJhbGlnYXRyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0ZlcmFsaWdhdHIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgc2VudHJldDoge1xuICAgIGlkOiAxNjEsXG4gICAgbmFtZTogJ1NlbnRyZXQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnU2VudHJldCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgZnVycmV0OiB7XG4gICAgaWQ6IDE2MixcbiAgICBuYW1lOiAnRnVycmV0JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0Z1cnJldCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgaG9vdGhvb3Q6IHtcbiAgICBpZDogMTYzLFxuICAgIG5hbWU6ICdIb290aG9vdCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdIb290aG9vdCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgbm9jdG93bDoge1xuICAgIGlkOiAxNjQsXG4gICAgbmFtZTogJ05vY3Rvd2wnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnTm9jdG93bCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgbGVkeWJhOiB7XG4gICAgaWQ6IDE2NSxcbiAgICBuYW1lOiAnTGVkeWJhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0xlZHliYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgbGVkaWFuOiB7XG4gICAgaWQ6IDE2NixcbiAgICBuYW1lOiAnTGVkaWFuJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0xlZGlhbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgc3BpbmFyYWs6IHtcbiAgICBpZDogMTY3LFxuICAgIG5hbWU6ICdTcGluYXJhaycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdTcGluYXJhayEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgYXJpYWRvczoge1xuICAgIGlkOiAxNjgsXG4gICAgbmFtZTogJ0FyaWFkb3MnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnQXJpYWRvcyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgY3JvYmF0OiB7XG4gICAgaWQ6IDE2OSxcbiAgICBuYW1lOiAnQ3JvYmF0JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0Nyb2JhdCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgY2hpbmNob3U6IHtcbiAgICBpZDogMTcwLFxuICAgIG5hbWU6ICdDaGluY2hvdScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdDaGluY2hvdSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXG4gIH0sXG4gIGxhbnR1cm46IHtcbiAgICBpZDogMTcxLFxuICAgIG5hbWU6ICdMYW50dXJuJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0xhbnR1cm4hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxuICB9LFxuICBwaWNodToge1xuICAgIGlkOiAxNzIsXG4gICAgbmFtZTogJ1BpY2h1JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1BpY2h1IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXG4gIH0sXG4gIGNsZWZmYToge1xuICAgIGlkOiAxNzMsXG4gICAgbmFtZTogJ0NsZWZmYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdDbGVmZmEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIGlnZ2x5YnVmZjoge1xuICAgIGlkOiAxNzQsXG4gICAgbmFtZTogJ0lnZ2x5YnVmZicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdJZ2dseWJ1ZmYhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHRvZ2VwaToge1xuICAgIGlkOiAxNzUsXG4gICAgbmFtZTogJ1RvZ2VwaScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdUb2dlcGkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHRvZ2V0aWM6IHtcbiAgICBpZDogMTc2LFxuICAgIG5hbWU6ICdUb2dldGljJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1RvZ2V0aWMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIG5hdHU6IHtcbiAgICBpZDogMTc3LFxuICAgIG5hbWU6ICdOYXR1JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ05hdHUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWMsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICB4YXR1OiB7XG4gICAgaWQ6IDE3OCxcbiAgICBuYW1lOiAnWGF0dScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdYYXR1IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgbWFyZWVwOiB7XG4gICAgaWQ6IDE3OSxcbiAgICBuYW1lOiAnTWFyZWVwJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ01hcmVlcCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxuICB9LFxuICBmbGFhZmZ5OiB7XG4gICAgaWQ6IDE4MCxcbiAgICBuYW1lOiAnRmxhYWZmeScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdGbGFhZmZ5IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXG4gIH0sXG4gIGFtcGhhcm9zOiB7XG4gICAgaWQ6IDE4MSxcbiAgICBuYW1lOiAnQW1waGFyb3MnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnQW1waGFyb3MhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcbiAgfSxcbiAgYmVsbG9zc29tOiB7XG4gICAgaWQ6IDE4MixcbiAgICBuYW1lOiAnQmVsbG9zc29tJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0JlbGxvc3NvbSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxuICB9LFxuICBtYXJpbGw6IHtcbiAgICBpZDogMTgzLFxuICAgIG5hbWU6ICdNYXJpbGwnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnTWFyaWxsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGF6dW1hcmlsbDoge1xuICAgIGlkOiAxODQsXG4gICAgbmFtZTogJ0F6dW1hcmlsbCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdBenVtYXJpbGwhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgc3Vkb3dvb2RvOiB7XG4gICAgaWQ6IDE4NSxcbiAgICBuYW1lOiAnU3Vkb3dvb2RvJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1N1ZG93b29kbyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXG4gIH0sXG4gIHBvbGl0b2VkOiB7XG4gICAgaWQ6IDE4NixcbiAgICBuYW1lOiAnUG9saXRvZWQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnUG9saXRvZWQhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgaG9wcGlwOiB7XG4gICAgaWQ6IDE4NyxcbiAgICBuYW1lOiAnSG9wcGlwJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0hvcHBpcCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBza2lwbG9vbToge1xuICAgIGlkOiAxODgsXG4gICAgbmFtZTogJ1NraXBsb29tJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1NraXBsb29tIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIGp1bXBsdWZmOiB7XG4gICAgaWQ6IDE4OSxcbiAgICBuYW1lOiAnSnVtcGx1ZmYnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnSnVtcGx1ZmYhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgYWlwb206IHtcbiAgICBpZDogMTkwLFxuICAgIG5hbWU6ICdBaXBvbScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdBaXBvbSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgc3Vua2Vybjoge1xuICAgIGlkOiAxOTEsXG4gICAgbmFtZTogJ1N1bmtlcm4nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnU3Vua2VybiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxuICB9LFxuICBzdW5mbG9yYToge1xuICAgIGlkOiAxOTIsXG4gICAgbmFtZTogJ1N1bmZsb3JhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1N1bmZsb3JhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXG4gIH0sXG4gIHlhbm1hOiB7XG4gICAgaWQ6IDE5MyxcbiAgICBuYW1lOiAnWWFubWEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnWWFubWEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHdvb3Blcjoge1xuICAgIGlkOiAxOTQsXG4gICAgbmFtZTogJ1dvb3BlcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdXb29wZXIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgcXVhZ3NpcmU6IHtcbiAgICBpZDogMTk1LFxuICAgIG5hbWU6ICdRdWFnc2lyZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdRdWFnc2lyZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBlc3Blb246IHtcbiAgICBpZDogMTk2LFxuICAgIG5hbWU6ICdFc3Blb24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnRXNwZW9uIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW1icmVvbjoge1xuICAgIGlkOiAxOTcsXG4gICAgbmFtZTogJ1VtYnJlb24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW1icmVvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXG4gIH0sXG4gIG11cmtyb3c6IHtcbiAgICBpZDogMTk4LFxuICAgIG5hbWU6ICdNdXJrcm93JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ011cmtyb3chJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmssIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBzbG93a2luZzoge1xuICAgIGlkOiAxOTksXG4gICAgbmFtZTogJ1Nsb3draW5nJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Nsb3draW5nIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBtaXNkcmVhdnVzOiB7XG4gICAgaWQ6IDIwMCxcbiAgICBuYW1lOiAnTWlzZHJlYXZ1cycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdNaXNkcmVhdnVzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdF0sXG4gIH0sXG4gIHVub3duX2E6IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoQSknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl9iOiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKEIpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW5vd25fYzoge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duIChDKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX2Q6IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoRCknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl9lOiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKEUpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW5vd25fZjoge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duIChGKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX2c6IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoRyknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl9oOiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKEgpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW5vd25faToge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duIChJKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX2o6IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoSiknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl9rOiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKEspJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW5vd25fbDoge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duIChMKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX206IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoTSknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl9uOiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKE4pJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW5vd25fbzoge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duIChPKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX3A6IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoUCknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl9xOiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKFEpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW5vd25fcjoge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duIChSKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX3M6IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoUyknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl90OiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKFQpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW5vd25fdToge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duIChVKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX3Y6IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoViknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl93OiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKFcpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW5vd25feDoge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duIChYKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX3k6IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoWSknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl96OiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKFopJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW5vd25fZXhjbGFtYXRpb246IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoISknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl9xdWVzdGlvbjoge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duICg/KScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHdvYmJ1ZmZldDoge1xuICAgIGlkOiAyMDIsXG4gICAgbmFtZTogJ1dvYmJ1ZmZldCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdXb2JidWZmZXQhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBnaXJhZmFyaWc6IHtcbiAgICBpZDogMjAzLFxuICAgIG5hbWU6ICdHaXJhZmFyaWcnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnR2lyYWZhcmlnIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgcGluZWNvOiB7XG4gICAgaWQ6IDIwNCxcbiAgICBuYW1lOiAnUGluZWNvJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1BpbmVjbyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcbiAgfSxcbiAgZm9ycmV0cmVzczoge1xuICAgIGlkOiAyMDUsXG4gICAgbmFtZTogJ0ZvcnJldHJlc3MnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnRm9ycmV0cmVzcyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWxdLFxuICB9LFxuICBkdW5zcGFyY2U6IHtcbiAgICBpZDogMjA2LFxuICAgIG5hbWU6ICdEdW5zcGFyY2UnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnRHVuc3BhcmNlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBnbGlnYXI6IHtcbiAgICBpZDogMjA3LFxuICAgIG5hbWU6ICdHbGlnYXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnR2xpZ2FyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmQsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBzdGVlbGl4OiB7XG4gICAgaWQ6IDIwOCxcbiAgICBuYW1lOiAnU3RlZWxpeCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdTdGVlbGl4IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgc251YmJ1bGw6IHtcbiAgICBpZDogMjA5LFxuICAgIG5hbWU6ICdTbnViYnVsbCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdTbnViYnVsbCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgZ3JhbmJ1bGw6IHtcbiAgICBpZDogMjEwLFxuICAgIG5hbWU6ICdHcmFuYnVsbCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdHcmFuYnVsbCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgcXdpbGZpc2g6IHtcbiAgICBpZDogMjExLFxuICAgIG5hbWU6ICdRd2lsZmlzaCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdRd2lsZmlzaCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBzY2l6b3I6IHtcbiAgICBpZDogMjEyLFxuICAgIG5hbWU6ICdTY2l6b3InLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnU2Npem9yIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXG4gIH0sXG4gIHNodWNrbGU6IHtcbiAgICBpZDogMjEzLFxuICAgIG5hbWU6ICdTaHVja2xlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1NodWNrbGUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2tdLFxuICB9LFxuICBoZXJhY3Jvc3M6IHtcbiAgICBpZDogMjE0LFxuICAgIG5hbWU6ICdIZXJhY3Jvc3MnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnSGVyYWNyb3NzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXG4gIH0sXG4gIHNuZWFzZWw6IHtcbiAgICBpZDogMjE1LFxuICAgIG5hbWU6ICdTbmVhc2VsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1NuZWFzZWwhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmssIFBva2Vtb25FbGVtZW50VHlwZS5pY2VdLFxuICB9LFxuICB0ZWRkaXVyc2E6IHtcbiAgICBpZDogMjE2LFxuICAgIG5hbWU6ICdUZWRkaXVyc2EnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVGVkZGl1cnNhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICB1cnNhcmluZzoge1xuICAgIGlkOiAyMTcsXG4gICAgbmFtZTogJ1Vyc2FyaW5nJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vyc2FyaW5nIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBzbHVnbWE6IHtcbiAgICBpZDogMjE4LFxuICAgIG5hbWU6ICdTbHVnbWEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnU2x1Z21hIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcbiAgfSxcbiAgbWFnY2FyZ286IHtcbiAgICBpZDogMjE5LFxuICAgIG5hbWU6ICdNYWdjYXJnbycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdNYWdjYXJnbyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZSwgUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2tdLFxuICB9LFxuICBzd2ludWI6IHtcbiAgICBpZDogMjIwLFxuICAgIG5hbWU6ICdTd2ludWInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnU3dpbnViIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2UsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBwaWxvc3dpbmU6IHtcbiAgICBpZDogMjIxLFxuICAgIG5hbWU6ICdQaWxvc3dpbmUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnUGlsb3N3aW5lIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2UsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBjb3Jzb2xhOiB7XG4gICAgaWQ6IDIyMixcbiAgICBuYW1lOiAnQ29yc29sYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdDb3Jzb2xhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2tdLFxuICB9LFxuICByZW1vcmFpZDoge1xuICAgIGlkOiAyMjMsXG4gICAgbmFtZTogJ1JlbW9yYWlkJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1JlbW9yYWlkIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIG9jdGlsbGVyeToge1xuICAgIGlkOiAyMjQsXG4gICAgbmFtZTogJ09jdGlsbGVyeScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdPY3RpbGxlcnkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgZGVsaWJpcmQ6IHtcbiAgICBpZDogMjI1LFxuICAgIG5hbWU6ICdEZWxpYmlyZCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdEZWxpYmlyZCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuaWNlLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgbWFudGluZToge1xuICAgIGlkOiAyMjYsXG4gICAgbmFtZTogJ01hbnRpbmUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnTWFudGluZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBza2FybW9yeToge1xuICAgIGlkOiAyMjcsXG4gICAgbmFtZTogJ1NrYXJtb3J5JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1NrYXJtb3J5IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5zdGVlbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIGhvdW5kb3VyOiB7XG4gICAgaWQ6IDIyOCxcbiAgICBuYW1lOiAnSG91bmRvdXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnSG91bmRvdXIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmssIFBva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcbiAgfSxcbiAgaG91bmRvb206IHtcbiAgICBpZDogMjI5LFxuICAgIG5hbWU6ICdIb3VuZG9vbScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdIb3VuZG9vbSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZGFyaywgUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxuICB9LFxuICBraW5nZHJhOiB7XG4gICAgaWQ6IDIzMCxcbiAgICBuYW1lOiAnS2luZ2RyYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdLaW5nZHJhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbl0sXG4gIH0sXG4gIHBoYW5weToge1xuICAgIGlkOiAyMzEsXG4gICAgbmFtZTogJ1BoYW5weScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdQaGFucHkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIGRvbnBoYW46IHtcbiAgICBpZDogMjMyLFxuICAgIG5hbWU6ICdEb25waGFuJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0RvbnBoYW4hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIHBvcnlnb24yOiB7XG4gICAgaWQ6IDIzMyxcbiAgICBuYW1lOiAnUG9yeWdvbjInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnUG9yeWdvbjIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHN0YW50bGVyOiB7XG4gICAgaWQ6IDIzNCxcbiAgICBuYW1lOiAnU3RhbnRsZXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnU3RhbnRsZXIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHNtZWFyZ2xlOiB7XG4gICAgaWQ6IDIzNSxcbiAgICBuYW1lOiAnU21lYXJnbGUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnU21lYXJnbGUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHR5cm9ndWU6IHtcbiAgICBpZDogMjM2LFxuICAgIG5hbWU6ICdUeXJvZ3VlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1R5cm9ndWUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcbiAgfSxcbiAgaGl0bW9udG9wOiB7XG4gICAgaWQ6IDIzNyxcbiAgICBuYW1lOiAnSGl0bW9udG9wJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0hpdG1vbnRvcCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxuICB9LFxuICBzbW9vY2h1bToge1xuICAgIGlkOiAyMzgsXG4gICAgbmFtZTogJ1Ntb29jaHVtJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Ntb29jaHVtIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2UsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgZWxla2lkOiB7XG4gICAgaWQ6IDIzOSxcbiAgICBuYW1lOiAnRWxla2lkJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0VsZWtpZCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxuICB9LFxuICBtYWdieToge1xuICAgIGlkOiAyNDAsXG4gICAgbmFtZTogJ01hZ2J5JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ01hZ2J5IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcbiAgfSxcbiAgbWlsdGFuazoge1xuICAgIGlkOiAyNDEsXG4gICAgbmFtZTogJ01pbHRhbmsnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnTWlsdGFuayEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgYmxpc3NleToge1xuICAgIGlkOiAyNDIsXG4gICAgbmFtZTogJ0JsaXNzZXknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnQmxpc3NleSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgcmFpa291OiB7XG4gICAgaWQ6IDI0MyxcbiAgICBuYW1lOiAnUmFpa291JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1JhaWtvdSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXG4gIH0sXG4gIGVudGVpOiB7XG4gICAgaWQ6IDI0NCxcbiAgICBuYW1lOiAnRW50ZWknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnRW50ZWkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5zdWJMZWdlbmRhcnksXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXG4gIH0sXG4gIHN1aWN1bmU6IHtcbiAgICBpZDogMjQ1LFxuICAgIG5hbWU6ICdTdWljdW5lJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1N1aWN1bmUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5zdWJMZWdlbmRhcnksXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBsYXJ2aXRhcjoge1xuICAgIGlkOiAyNDYsXG4gICAgbmFtZTogJ0xhcnZpdGFyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0xhcnZpdGFyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgcHVwaXRhcjoge1xuICAgIGlkOiAyNDcsXG4gICAgbmFtZTogJ1B1cGl0YXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnUHVwaXRhciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIHR5cmFuaXRhcjoge1xuICAgIGlkOiAyNDgsXG4gICAgbmFtZTogJ1R5cmFuaXRhcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdUeXJhbml0YXIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcbiAgfSxcbiAgbHVnaWE6IHtcbiAgICBpZDogMjQ5LFxuICAgIG5hbWU6ICdMdWdpYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdMdWdpYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmxlZ2VuZGFyeSxcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWMsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBob29oOiB7XG4gICAgaWQ6IDI1MCxcbiAgICBuYW1lOiAnSG8tT2gnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnSG8tT2ghJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5sZWdlbmRhcnksXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgY2VsZWJpOiB7XG4gICAgaWQ6IDI1MSxcbiAgICBuYW1lOiAnQ2VsZWJpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0NlbGViaSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWMsIFBva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXG4gIH0sXG4gIC8vIEdlbmVyYXRpb24gM1xuICB0cmVlY2tvOiB7XG4gICAgaWQ6IDI1MixcbiAgICBuYW1lOiAnVHJlZWNrbycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdUcmVlY2tvIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXG4gIH0sXG4gIGdyb3Z5bGU6IHtcbiAgICBpZDogMjUzLFxuICAgIG5hbWU6ICdHcm92eWxlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0dyb3Z5bGUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgc2NlcHRpbGU6IHtcbiAgICBpZDogMjU0LFxuICAgIG5hbWU6ICdTY2VwdGlsZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTY2VwdGlsZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxuICB9LFxuICB0b3JjaGljOiB7XG4gICAgaWQ6IDI1NSxcbiAgICBuYW1lOiAnVG9yY2hpYycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdUb3JjaGljIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcbiAgfSxcbiAgY29tYnVza2VuOiB7XG4gICAgaWQ6IDI1NixcbiAgICBuYW1lOiAnQ29tYnVza2VuJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0NvbWJ1c2tlbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZSwgUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcbiAgfSxcbiAgYmxhemlrZW46IHtcbiAgICBpZDogMjU3LFxuICAgIG5hbWU6ICdCbGF6aWtlbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdCbGF6aWtlbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZSwgUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcbiAgfSxcbiAgbXVka2lwOiB7XG4gICAgaWQ6IDI1OCxcbiAgICBuYW1lOiAnTXVka2lwJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ011ZGtpcCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBtYXJzaHRvbXA6IHtcbiAgICBpZDogMjU5LFxuICAgIG5hbWU6ICdNYXJzaHRvbXAnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTWFyc2h0b21wIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIHN3YW1wZXJ0OiB7XG4gICAgaWQ6IDI2MCxcbiAgICBuYW1lOiAnU3dhbXBlcnQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnU3dhbXBlcnQhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgcG9vY2h5ZW5hOiB7XG4gICAgaWQ6IDI2MSxcbiAgICBuYW1lOiAnUG9vY2h5ZW5hJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1Bvb2NoeWVuYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXG4gIH0sXG4gIG1pZ2h0eWVuYToge1xuICAgIGlkOiAyNjIsXG4gICAgbmFtZTogJ01pZ2h0eWVuYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdNaWdodHllbmEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmtdLFxuICB9LFxuICB6aWd6YWdvb246IHtcbiAgICBpZDogMjYzLFxuICAgIG5hbWU6ICdaaWd6YWdvb24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnWmlnemFnb29uIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBsaW5vb25lOiB7XG4gICAgaWQ6IDI2NCxcbiAgICBuYW1lOiAnTGlub29uZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdMaW5vb25lIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICB3dXJtcGxlOiB7XG4gICAgaWQ6IDI2NSxcbiAgICBuYW1lOiAnV3VybXBsZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdXdXJtcGxlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWddLFxuICB9LFxuICBzaWxjb29uOiB7XG4gICAgaWQ6IDI2NixcbiAgICBuYW1lOiAnU2lsY29vbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTaWxjb29uIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWddLFxuICB9LFxuICBiZWF1dGlmbHk6IHtcbiAgICBpZDogMjY3LFxuICAgIG5hbWU6ICdCZWF1dGlmbHknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQmVhdXRpZmx5IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBjYXNjb29uOiB7XG4gICAgaWQ6IDI2OCxcbiAgICBuYW1lOiAnQ2FzY29vbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdDYXNjb29uIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWddLFxuICB9LFxuICBkdXN0b3g6IHtcbiAgICBpZDogMjY5LFxuICAgIG5hbWU6ICdEdXN0b3gnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnRHVzdG94IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBsb3RhZDoge1xuICAgIGlkOiAyNzAsXG4gICAgbmFtZTogJ0xvdGFkJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0xvdGFkIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgbG9tYnJlOiB7XG4gICAgaWQ6IDI3MSxcbiAgICBuYW1lOiAnTG9tYnJlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0xvbWJyZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXG4gIH0sXG4gIGx1ZGljb2xvOiB7XG4gICAgaWQ6IDI3MixcbiAgICBuYW1lOiAnTHVkaWNvbG8nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTHVkaWNvbG8hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxuICB9LFxuICBzZWVkb3Q6IHtcbiAgICBpZDogMjczLFxuICAgIG5hbWU6ICdTZWVkb3QnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnU2VlZG90IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXG4gIH0sXG4gIG51emxlYWY6IHtcbiAgICBpZDogMjc0LFxuICAgIG5hbWU6ICdOdXpsZWFmJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ051emxlYWYhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXG4gIH0sXG4gIHNoaWZ0cnk6IHtcbiAgICBpZDogMjc1LFxuICAgIG5hbWU6ICdTaGlmdHJ5JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1NoaWZ0cnkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXG4gIH0sXG4gIHRhaWxsb3c6IHtcbiAgICBpZDogMjc2LFxuICAgIG5hbWU6ICdUYWlsbG93JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1RhaWxsb3chJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHN3ZWxsb3c6IHtcbiAgICBpZDogMjc3LFxuICAgIG5hbWU6ICdTd2VsbG93JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1N3ZWxsb3chJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHdpbmd1bGw6IHtcbiAgICBpZDogMjc4LFxuICAgIG5hbWU6ICdXaW5ndWxsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1dpbmd1bGwhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgcGVsaXBwZXI6IHtcbiAgICBpZDogMjc5LFxuICAgIG5hbWU6ICdQZWxpcHBlcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdQZWxpcHBlciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICByYWx0czoge1xuICAgIGlkOiAyODAsXG4gICAgbmFtZTogJ1JhbHRzJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1JhbHRzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAga2lybGlhOiB7XG4gICAgaWQ6IDI4MSxcbiAgICBuYW1lOiAnS2lybGlhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0tpcmxpYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIGdhcmRldm9pcjoge1xuICAgIGlkOiAyODIsXG4gICAgbmFtZTogJ0dhcmRldm9pcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdHYXJkZXZvaXIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBzdXJza2l0OiB7XG4gICAgaWQ6IDI4MyxcbiAgICBuYW1lOiAnU3Vyc2tpdCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTdXJza2l0IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIG1hc3F1ZXJhaW46IHtcbiAgICBpZDogMjg0LFxuICAgIG5hbWU6ICdNYXNxdWVyYWluJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ01hc3F1ZXJhaW4hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHNocm9vbWlzaDoge1xuICAgIGlkOiAyODUsXG4gICAgbmFtZTogJ1Nocm9vbWlzaCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTaHJvb21pc2ghJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgYnJlbG9vbToge1xuICAgIGlkOiAyODYsXG4gICAgbmFtZTogJ0JyZWxvb20nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQnJlbG9vbSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXG4gIH0sXG4gIHNsYWtvdGg6IHtcbiAgICBpZDogMjg3LFxuICAgIG5hbWU6ICdTbGFrb3RoJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1NsYWtvdGghJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHZpZ29yb3RoOiB7XG4gICAgaWQ6IDI4OCxcbiAgICBuYW1lOiAnVmlnb3JvdGgnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnVmlnb3JvdGghJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHNsYWtpbmc6IHtcbiAgICBpZDogMjg5LFxuICAgIG5hbWU6ICdTbGFraW5nJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1NsYWtpbmchJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIG5pbmNhZGE6IHtcbiAgICBpZDogMjkwLFxuICAgIG5hbWU6ICdOaW5jYWRhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ05pbmNhZGEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIG5pbmphc2s6IHtcbiAgICBpZDogMjkxLFxuICAgIG5hbWU6ICdOaW5qYXNrJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ05pbmphc2shJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHNoZWRpbmphOiB7XG4gICAgaWQ6IDI5MixcbiAgICBuYW1lOiAnU2hlZGluamEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnU2hlZGluamEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0XSxcbiAgfSxcbiAgd2hpc211cjoge1xuICAgIGlkOiAyOTMsXG4gICAgbmFtZTogJ1doaXNtdXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnV2hpc211ciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgbG91ZHJlZDoge1xuICAgIGlkOiAyOTQsXG4gICAgbmFtZTogJ0xvdWRyZWQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTG91ZHJlZCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgZXhwbG91ZDoge1xuICAgIGlkOiAyOTUsXG4gICAgbmFtZTogJ0V4cGxvdWQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnRXhwbG91ZCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgbWFrdWhpdGE6IHtcbiAgICBpZDogMjk2LFxuICAgIG5hbWU6ICdNYWt1aGl0YScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdNYWt1aGl0YSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxuICB9LFxuICBoYXJpeWFtYToge1xuICAgIGlkOiAyOTcsXG4gICAgbmFtZTogJ0hhcml5YW1hJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0hhcml5YW1hIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXG4gIH0sXG4gIGF6dXJpbGw6IHtcbiAgICBpZDogMjk4LFxuICAgIG5hbWU6ICdBenVyaWxsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0F6dXJpbGwhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIG5vc2VwYXNzOiB7XG4gICAgaWQ6IDI5OSxcbiAgICBuYW1lOiAnTm9zZXBhc3MnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTm9zZXBhc3MhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2tdLFxuICB9LFxuICBza2l0dHk6IHtcbiAgICBpZDogMzAwLFxuICAgIG5hbWU6ICdTa2l0dHknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnU2tpdHR5IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBkZWxjYXR0eToge1xuICAgIGlkOiAzMDEsXG4gICAgbmFtZTogJ0RlbGNhdHR5JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0RlbGNhdHR5IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBzYWJsZXllOiB7XG4gICAgaWQ6IDMwMixcbiAgICBuYW1lOiAnU2FibGV5ZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTYWJsZXllIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kYXJrLCBQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxuICB9LFxuICBtYXdpbGU6IHtcbiAgICBpZDogMzAzLFxuICAgIG5hbWU6ICdNYXdpbGUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTWF3aWxlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXG4gIH0sXG4gIGFyb246IHtcbiAgICBpZDogMzA0LFxuICAgIG5hbWU6ICdBcm9uJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0Fyb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsLCBQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXG4gIH0sXG4gIGxhaXJvbjoge1xuICAgIGlkOiAzMDUsXG4gICAgbmFtZTogJ0xhaXJvbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdMYWlyb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsLCBQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXG4gIH0sXG4gIGFnZ3Jvbjoge1xuICAgIGlkOiAzMDYsXG4gICAgbmFtZTogJ0FnZ3JvbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdBZ2dyb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsLCBQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXG4gIH0sXG4gIG1lZGl0aXRlOiB7XG4gICAgaWQ6IDMwNyxcbiAgICBuYW1lOiAnTWVkaXRpdGUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTWVkaXRpdGUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIG1lZGljaGFtOiB7XG4gICAgaWQ6IDMwOCxcbiAgICBuYW1lOiAnTWVkaWNoYW0nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTWVkaWNoYW0hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIGVsZWN0cmlrZToge1xuICAgIGlkOiAzMDksXG4gICAgbmFtZTogJ0VsZWN0cmlrZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdFbGVjdHJpa2UhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcbiAgfSxcbiAgbWFuZWN0cmljOiB7XG4gICAgaWQ6IDMxMCxcbiAgICBuYW1lOiAnTWFuZWN0cmljJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ01hbmVjdHJpYyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxuICB9LFxuICBwbHVzbGU6IHtcbiAgICBpZDogMzExLFxuICAgIG5hbWU6ICdQbHVzbGUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnUGx1c2xlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXG4gIH0sXG4gIG1pbnVuOiB7XG4gICAgaWQ6IDMxMixcbiAgICBuYW1lOiAnTWludW4nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTWludW4hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcbiAgfSxcbiAgdm9sYmVhdDoge1xuICAgIGlkOiAzMTMsXG4gICAgbmFtZTogJ1ZvbGJlYXQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnVm9sYmVhdCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcbiAgfSxcbiAgaWxsdW1pc2U6IHtcbiAgICBpZDogMzE0LFxuICAgIG5hbWU6ICdJbGx1bWlzZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdJbGx1bWlzZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcbiAgfSxcbiAgcm9zZWxpYToge1xuICAgIGlkOiAzMTUsXG4gICAgbmFtZTogJ1Jvc2VsaWEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnUm9zZWxpYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBndWxwaW46IHtcbiAgICBpZDogMzE2LFxuICAgIG5hbWU6ICdHdWxwaW4nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnR3VscGluIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBzd2Fsb3Q6IHtcbiAgICBpZDogMzE3LFxuICAgIG5hbWU6ICdTd2Fsb3QnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnU3dhbG90IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBjYXJ2YW5oYToge1xuICAgIGlkOiAzMTgsXG4gICAgbmFtZTogJ0NhcnZhbmhhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0NhcnZhbmhhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmtdLFxuICB9LFxuICBzaGFycGVkbzoge1xuICAgIGlkOiAzMTksXG4gICAgbmFtZTogJ1NoYXJwZWRvJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1NoYXJwZWRvIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmtdLFxuICB9LFxuICB3YWlsbWVyOiB7XG4gICAgaWQ6IDMyMCxcbiAgICBuYW1lOiAnV2FpbG1lcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdXYWlsbWVyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIHdhaWxvcmQ6IHtcbiAgICBpZDogMzIxLFxuICAgIG5hbWU6ICdXYWlsb3JkJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1dhaWxvcmQhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBudW1lbDoge1xuICAgIGlkOiAzMjIsXG4gICAgbmFtZTogJ051bWVsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ051bWVsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgY2FtZXJ1cHQ6IHtcbiAgICBpZDogMzIzLFxuICAgIG5hbWU6ICdDYW1lcnVwdCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdDYW1lcnVwdCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZSwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIHRvcmtvYWw6IHtcbiAgICBpZDogMzI0LFxuICAgIG5hbWU6ICdUb3Jrb2FsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1RvcmtvYWwhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxuICB9LFxuICBzcG9pbms6IHtcbiAgICBpZDogMzI1LFxuICAgIG5hbWU6ICdTcG9pbmsnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnU3BvaW5rIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgZ3J1bXBpZzoge1xuICAgIGlkOiAzMjYsXG4gICAgbmFtZTogJ0dydW1waWcnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnR3J1bXBpZyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHNwaW5kYToge1xuICAgIGlkOiAzMjcsXG4gICAgbmFtZTogJ1NwaW5kYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTcGluZGEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHRyYXBpbmNoOiB7XG4gICAgaWQ6IDMyOCxcbiAgICBuYW1lOiAnVHJhcGluY2gnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnVHJhcGluY2ghJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIHZpYnJhdmE6IHtcbiAgICBpZDogMzI5LFxuICAgIG5hbWU6ICdWaWJyYXZhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1ZpYnJhdmEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZCwgUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbl0sXG4gIH0sXG4gIGZseWdvbjoge1xuICAgIGlkOiAzMzAsXG4gICAgbmFtZTogJ0ZseWdvbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdGbHlnb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZCwgUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbl0sXG4gIH0sXG4gIGNhY25lYToge1xuICAgIGlkOiAzMzEsXG4gICAgbmFtZTogJ0NhY25lYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdDYWNuZWEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgY2FjdHVybmU6IHtcbiAgICBpZDogMzMyLFxuICAgIG5hbWU6ICdDYWN0dXJuZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdDYWN0dXJuZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcbiAgfSxcbiAgc3dhYmx1OiB7XG4gICAgaWQ6IDMzMyxcbiAgICBuYW1lOiAnU3dhYmx1JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1N3YWJsdSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgYWx0YXJpYToge1xuICAgIGlkOiAzMzQsXG4gICAgbmFtZTogJ0FsdGFyaWEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQWx0YXJpYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgemFuZ29vc2U6IHtcbiAgICBpZDogMzM1LFxuICAgIG5hbWU6ICdaYW5nb29zZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdaYW5nb29zZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgc2V2aXBlcjoge1xuICAgIGlkOiAzMzYsXG4gICAgbmFtZTogJ1NldmlwZXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnU2V2aXBlciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgbHVuYXRvbmU6IHtcbiAgICBpZDogMzM3LFxuICAgIG5hbWU6ICdMdW5hdG9uZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdMdW5hdG9uZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBzb2xyb2NrOiB7XG4gICAgaWQ6IDMzOCxcbiAgICBuYW1lOiAnU29scm9jaycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTb2xyb2NrIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIGJhcmJvYWNoOiB7XG4gICAgaWQ6IDMzOSxcbiAgICBuYW1lOiAnQmFyYm9hY2gnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQmFyYm9hY2ghJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgd2hpc2Nhc2g6IHtcbiAgICBpZDogMzQwLFxuICAgIG5hbWU6ICdXaGlzY2FzaCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdXaGlzY2FzaCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBjb3JwaGlzaDoge1xuICAgIGlkOiAzNDEsXG4gICAgbmFtZTogJ0NvcnBoaXNoJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0NvcnBoaXNoIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGNyYXdkYXVudDoge1xuICAgIGlkOiAzNDIsXG4gICAgbmFtZTogJ0NyYXdkYXVudCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdDcmF3ZGF1bnQhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXG4gIH0sXG4gIGJhbHRveToge1xuICAgIGlkOiAzNDMsXG4gICAgbmFtZTogJ0JhbHRveScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdCYWx0b3khJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZCwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBjbGF5ZG9sOiB7XG4gICAgaWQ6IDM0NCxcbiAgICBuYW1lOiAnQ2xheWRvbCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdDbGF5ZG9sIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmQsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgbGlsZWVwOiB7XG4gICAgaWQ6IDM0NSxcbiAgICBuYW1lOiAnTGlsZWVwJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0xpbGVlcCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgY3JhZGlseToge1xuICAgIGlkOiAzNDYsXG4gICAgbmFtZTogJ0NyYWRpbHknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQ3JhZGlseSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgYW5vcml0aDoge1xuICAgIGlkOiAzNDcsXG4gICAgbmFtZTogJ0Fub3JpdGgnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQW5vcml0aCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLmJ1Z10sXG4gIH0sXG4gIGFybWFsZG86IHtcbiAgICBpZDogMzQ4LFxuICAgIG5hbWU6ICdBcm1hbGRvJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0FybWFsZG8hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5idWddLFxuICB9LFxuICBmZWViYXM6IHtcbiAgICBpZDogMzQ5LFxuICAgIG5hbWU6ICdGZWViYXMnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnRmVlYmFzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIG1pbG90aWM6IHtcbiAgICBpZDogMzUwLFxuICAgIG5hbWU6ICdNaWxvdGljJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ01pbG90aWMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgY2FzdGZvcm06IHtcbiAgICBpZDogMzUxLFxuICAgIG5hbWU6ICdDYXN0Zm9ybScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdDYXN0Zm9ybSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAga2VjbGVvbjoge1xuICAgIGlkOiAzNTIsXG4gICAgbmFtZTogJ0tlY2xlb24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnS2VjbGVvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgc2h1cHBldDoge1xuICAgIGlkOiAzNTMsXG4gICAgbmFtZTogJ1NodXBwZXQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnU2h1cHBldCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxuICB9LFxuICBiYW5ldHRlOiB7XG4gICAgaWQ6IDM1NCxcbiAgICBuYW1lOiAnQmFuZXR0ZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdCYW5ldHRlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdF0sXG4gIH0sXG4gIGR1c2t1bGw6IHtcbiAgICBpZDogMzU1LFxuICAgIG5hbWU6ICdEdXNrdWxsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0R1c2t1bGwhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0XSxcbiAgfSxcbiAgZHVzY2xvcHM6IHtcbiAgICBpZDogMzU2LFxuICAgIG5hbWU6ICdEdXNjbG9wcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdEdXNjbG9wcyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxuICB9LFxuICB0cm9waXVzOiB7XG4gICAgaWQ6IDM1NyxcbiAgICBuYW1lOiAnVHJvcGl1cycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdUcm9waXVzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIGNoaW1lY2hvOiB7XG4gICAgaWQ6IDM1OCxcbiAgICBuYW1lOiAnQ2hpbWVjaG8nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQ2hpbWVjaG8hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBhYnNvbDoge1xuICAgIGlkOiAzNTksXG4gICAgbmFtZTogJ0Fic29sJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0Fic29sIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcbiAgfSxcbiAgd3luYXV0OiB7XG4gICAgaWQ6IDM2MCxcbiAgICBuYW1lOiAnV3luYXV0JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1d5bmF1dCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHNub3J1bnQ6IHtcbiAgICBpZDogMzYxLFxuICAgIG5hbWU6ICdTbm9ydW50JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1Nub3J1bnQhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmljZV0sXG4gIH0sXG4gIGdsYWxpZToge1xuICAgIGlkOiAzNjIsXG4gICAgbmFtZTogJ0dsYWxpZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdHbGFsaWUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmljZV0sXG4gIH0sXG4gIHNwaGVhbDoge1xuICAgIGlkOiAzNjMsXG4gICAgbmFtZTogJ1NwaGVhbCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTcGhlYWwhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmljZSwgUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgc2VhbGVvOiB7XG4gICAgaWQ6IDM2NCxcbiAgICBuYW1lOiAnU2VhbGVvJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1NlYWxlbyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuaWNlLCBQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICB3YWxyZWluOiB7XG4gICAgaWQ6IDM2NSxcbiAgICBuYW1lOiAnV2FscmVpbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdXYWxyZWluIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2UsIFBva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGNsYW1wZXJsOiB7XG4gICAgaWQ6IDM2NixcbiAgICBuYW1lOiAnQ2xhbXBlcmwnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQ2xhbXBlcmwhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgaHVudGFpbDoge1xuICAgIGlkOiAzNjcsXG4gICAgbmFtZTogJ0h1bnRhaWwnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnSHVudGFpbCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBnb3JlYnlzczoge1xuICAgIGlkOiAzNjgsXG4gICAgbmFtZTogJ0dvcmVieXNzJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0dvcmVieXNzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIHJlbGljYW50aDoge1xuICAgIGlkOiAzNjksXG4gICAgbmFtZTogJ1JlbGljYW50aCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdSZWxpY2FudGghJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXG4gIH0sXG4gIGx1dmRpc2M6IHtcbiAgICBpZDogMzcwLFxuICAgIG5hbWU6ICdMdXZkaXNjJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0x1dmRpc2MhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgYmFnb246IHtcbiAgICBpZDogMzcxLFxuICAgIG5hbWU6ICdCYWdvbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdCYWdvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcbiAgfSxcbiAgc2hlbGdvbjoge1xuICAgIGlkOiAzNzIsXG4gICAgbmFtZTogJ1NoZWxnb24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnU2hlbGdvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcbiAgfSxcbiAgc2FsYW1lbmNlOiB7XG4gICAgaWQ6IDM3MyxcbiAgICBuYW1lOiAnU2FsYW1lbmNlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1NhbGFtZW5jZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgYmVsZHVtOiB7XG4gICAgaWQ6IDM3NCxcbiAgICBuYW1lOiAnQmVsZHVtJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0JlbGR1bSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWwsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgbWV0YW5nOiB7XG4gICAgaWQ6IDM3NSxcbiAgICBuYW1lOiAnTWV0YW5nJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ01ldGFuZyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWwsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgbWV0YWdyb3NzOiB7XG4gICAgaWQ6IDM3NixcbiAgICBuYW1lOiAnTWV0YWdyb3NzJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ01ldGFncm9zcyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWwsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgcmVnaXJvY2s6IHtcbiAgICBpZDogMzc3LFxuICAgIG5hbWU6ICdSZWdpcm9jaycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdSZWdpcm9jayEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrXSxcbiAgfSxcbiAgcmVnaWNlOiB7XG4gICAgaWQ6IDM3OCxcbiAgICBuYW1lOiAnUmVnaWNlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1JlZ2ljZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2VdLFxuICB9LFxuICByZWdpc3RlZWw6IHtcbiAgICBpZDogMzc5LFxuICAgIG5hbWU6ICdSZWdpc3RlZWwnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnUmVnaXN0ZWVsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuc3ViTGVnZW5kYXJ5LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsXSxcbiAgfSxcbiAgbGF0aWFzOiB7XG4gICAgaWQ6IDM4MCxcbiAgICBuYW1lOiAnTGF0aWFzJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0xhdGlhcyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kcmFnb24sIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgbGF0aW9zOiB7XG4gICAgaWQ6IDM4MSxcbiAgICBuYW1lOiAnTGF0aW9zJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0xhdGlvcyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kcmFnb24sIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAga3lvZ3JlOiB7XG4gICAgaWQ6IDM4MixcbiAgICBuYW1lOiAnS3lvZ3JlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0t5b2dyZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmxlZ2VuZGFyeSxcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgZ3JvdWRvbjoge1xuICAgIGlkOiAzODMsXG4gICAgbmFtZTogJ0dyb3Vkb24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnR3JvdWRvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmxlZ2VuZGFyeSxcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIHJheXF1YXphOiB7XG4gICAgaWQ6IDM4NCxcbiAgICBuYW1lOiAnUmF5cXVhemEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnUmF5cXVhemEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5sZWdlbmRhcnksXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kcmFnb24sIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBqaXJhY2hpOiB7XG4gICAgaWQ6IDM4NSxcbiAgICBuYW1lOiAnSmlyYWNoaScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdKaXJhY2hpIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWwsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgZGVveHlzOiB7XG4gICAgaWQ6IDM4NixcbiAgICBuYW1lOiAnRGVveHlzJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0Rlb3h5cyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBkZW94eXNfc3BlZWQ6IHtcbiAgICBpZDogMzg2LFxuICAgIG5hbWU6ICdEZW94eXMgKFNwZWVkKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdEZW94eXMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgZGVveHlzX2F0dGFjazoge1xuICAgIGlkOiAzODYsXG4gICAgbmFtZTogJ0Rlb3h5cyAoQXR0YWNrKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdEZW94eXMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgZGVveHlzX2RlZmVuc2U6IHtcbiAgICBpZDogMzg2LFxuICAgIG5hbWU6ICdEZW94eXMgKERlZmVuc2UpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0Rlb3h5cyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFBva2Vtb24oKTogUG9rZW1vblR5cGVbXSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhQT0tFTU9OX0RBVEEpIGFzIFBva2Vtb25UeXBlW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2tlbW9uQnlHZW5lcmF0aW9uKGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uKTogUG9rZW1vblR5cGVbXSB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyhQT0tFTU9OX0RBVEEpXG4gICAgLmZpbHRlcigoW18sIGNvbmZpZ10pID0+IGNvbmZpZy5nZW5lcmF0aW9uID09PSBnZW5lcmF0aW9uKVxuICAgIC5tYXAoKFtrZXksIF9dKSA9PiBrZXkgYXMgUG9rZW1vblR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFBva2Vtb24oKTogUG9rZW1vblR5cGUge1xuICByZXR1cm4gJ2J1bGJhc2F1cic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21Qb2tlbW9uQ29uZmlnKCk6IFtQb2tlbW9uVHlwZSwgUG9rZW1vbkNvbmZpZ10ge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKFBPS0VNT05fREFUQSk7XG4gIHZhciByYW5kb21LZXkgPSBrZXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGtleXMubGVuZ3RoKV07XG4gIHJldHVybiBbcmFuZG9tS2V5IGFzIFBva2Vtb25UeXBlLCBQT0tFTU9OX0RBVEFbcmFuZG9tS2V5XV07XG59IiwiaW1wb3J0IHsgUE9LRU1PTl9EQVRBIH0gZnJvbSBcIi4vcG9rZW1vbi1kYXRhXCI7XG5cbmV4cG9ydCBjb25zdCBlbnVtIFBva2Vtb25Db2xvciB7XG4gICAgZGVmYXVsdCA9ICdkZWZhdWx0JyxcbiAgICBzaGlueSA9ICdzaGlueScsXG4gICAgbnVsbCA9ICdudWxsJyxcbn1cblxuLy8gQWJzZW50ICh1bmRlZmluZWQpIG9uIGEgUG9rZW1vbkNvbmZpZyBtZWFucyBjb21tb24gLSB0aGUgdmFzdCBtYWpvcml0eSBvZlxuLy8gdGhlIGRleCAtIHNvIG9ubHkgdGhlIGhhbmRmdWwgb2YgbGVnZW5kYXJ5LXRpZXIgc3BlY2llcyBuZWVkIHRvIHNldCB0aGlzLlxuZXhwb3J0IGNvbnN0IGVudW0gUG9rZW1vblJhcml0eSB7XG4gICAgc3ViTGVnZW5kYXJ5ID0gJ3N1Yi1sZWdlbmRhcnknLFxuICAgIGxlZ2VuZGFyeSA9ICdsZWdlbmRhcnknLFxuICAgIG15dGhpY2FsID0gJ215dGhpY2FsJyxcbn1cblxuZXhwb3J0IGVudW0gUG9rZW1vbkdlbmVyYXRpb24ge1xuICAgIEdlbjEgPSAxLFxuICAgIEdlbjIgPSAyLFxuICAgIEdlbjMgPSAzLFxufVxuXG4vLyBUeXBpbmcgYXMgaXQgc3Rvb2QgYnkgdGhlIGVuZCBvZiBHZW5lcmF0aW9uIElJSSAtIG5vIEZhaXJ5IHR5cGUsIHNpbmNlIGl0XG4vLyB3YXMgbm90IGludHJvZHVjZWQgdW50aWwgR2VuZXJhdGlvbiBWSSAoZS5nLiBDbGVmYWlyeS9Nci4gTWltZS9TbnViYnVsbFxuLy8gc3RheSBOb3JtYWwgaGVyZSwgbm90IEZhaXJ5KS5cbmV4cG9ydCBjb25zdCBlbnVtIFBva2Vtb25FbGVtZW50VHlwZSB7XG4gICAgbm9ybWFsID0gJ25vcm1hbCcsXG4gICAgZmlyZSA9ICdmaXJlJyxcbiAgICB3YXRlciA9ICd3YXRlcicsXG4gICAgZWxlY3RyaWMgPSAnZWxlY3RyaWMnLFxuICAgIGdyYXNzID0gJ2dyYXNzJyxcbiAgICBpY2UgPSAnaWNlJyxcbiAgICBmaWdodGluZyA9ICdmaWdodGluZycsXG4gICAgcG9pc29uID0gJ3BvaXNvbicsXG4gICAgZ3JvdW5kID0gJ2dyb3VuZCcsXG4gICAgZmx5aW5nID0gJ2ZseWluZycsXG4gICAgcHN5Y2hpYyA9ICdwc3ljaGljJyxcbiAgICBidWcgPSAnYnVnJyxcbiAgICByb2NrID0gJ3JvY2snLFxuICAgIGdob3N0ID0gJ2dob3N0JyxcbiAgICBkcmFnb24gPSAnZHJhZ29uJyxcbiAgICBkYXJrID0gJ2RhcmsnLFxuICAgIHN0ZWVsID0gJ3N0ZWVsJyxcbn1cblxuZXhwb3J0IHR5cGUgUG9rZW1vblR5cGVTdHJpbmcgPSBzdHJpbmcgJiBrZXlvZiB0eXBlb2YgUE9LRU1PTl9EQVRBO1xuXG5leHBvcnQgdHlwZSBQb2tlbW9uVHlwZSA9IFBva2Vtb25UeXBlU3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBva2Vtb25Db25maWcge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uO1xuICAgIGNyeTogc3RyaW5nO1xuICAgIHBvc3NpYmxlQ29sb3JzOiBQb2tlbW9uQ29sb3JbXTtcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU/OiBudW1iZXIsXG4gICAgcmFyaXR5PzogUG9rZW1vblJhcml0eSxcbiAgICB0eXBlczogUG9rZW1vbkVsZW1lbnRUeXBlW10sXG59IiwiaW1wb3J0IHsgVXNlclBva2Vtb24gfSBmcm9tICcuLi9leHRlbnNpb24vdHlwZXMnXG5pbXBvcnQgeyBQT0tFTU9OX0RBVEEgfSBmcm9tICcuLi9jb21tb24vcG9rZW1vbi1kYXRhJ1xuaW1wb3J0IHsgUG9rZW1vbkNvbG9yLCBQb2tlbW9uR2VuZXJhdGlvbiB9IGZyb20gJy4uL2NvbW1vbi90eXBlcydcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBwb2tlY2hpQXBwOiB7XG4gICAgICBhcHA6IChjb25maWc6IHsgYmFzZVBva2Vtb25Vcmk6IHN0cmluZzsgdXNlclBva2Vtb246IFVzZXJQb2tlbW9uIHwgbnVsbCB9KSA9PiB2b2lkXG4gICAgfVxuICB9XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIHVzZXJQb2tlbW9uOiBVc2VyUG9rZW1vbiB8IG51bGxcbiAgYmFzZVBva2Vtb25Vcmk6IHN0cmluZ1xuICBpbnRlcnZhbElkOiBudW1iZXIgfCB1bmRlZmluZWRcbiAgaXNIb3ZlcmVkOiBib29sZWFuXG4gIGlkbGVVbnRpbDogbnVtYmVyXG59XG5cbmNvbnN0IHN0YXRlOiBTdGF0ZSA9IHtcbiAgdXNlclBva2Vtb246IG51bGwsXG4gIGJhc2VQb2tlbW9uVXJpOiAnJyxcbiAgaW50ZXJ2YWxJZDogdW5kZWZpbmVkLFxuICBpc0hvdmVyZWQ6IGZhbHNlLFxuICBpZGxlVW50aWw6IDAsXG59XG5cbmNvbnN0IFRJQ0tfSU5URVJWQUxfTVMgPSAxMDBcblxuLy8gSG93IGxvbmcgYSBwb2tlbW9uIHN0YW5kcyBzdGlsbCBhZnRlciBoYXRjaGluZyBvciBldm9sdmluZy4gV2l0aG91dCBpdCB0aGVcbi8vIGZpcnN0IHRpY2sgd291bGQgc2VuZCBpdCB3YWxraW5nIGJlZm9yZSB0aGUgaWRsZSBhbmltYXRpb24gaXMgZXZlciBzZWVuLlxuY29uc3QgSURMRV9BRlRFUl9DSEFOR0VfTVMgPSAxNTAwXG5cbi8vIEV2ZXJ5dGhpbmcgdGhhdCBkZWNpZGVzIGhvdyB0aGUgc3ByaXRlIGxvb2tzLiBYUCB1cGRhdGVzIGFycml2ZSBzZXZlcmFsIHRpbWVzXG4vLyBhIHNlY29uZCBhbmQgY2hhbmdlIG5vbmUgb2YgaXQsIHNvIHRoZSBET00gd29yayBjYW4gYmUgc2tpcHBlZC5cbmZ1bmN0aW9uIHZpc3VhbFNpZ25hdHVyZShwb2tlbW9uOiBVc2VyUG9rZW1vbiB8IG51bGwpOiBzdHJpbmcge1xuICBpZiAoIXBva2Vtb24pIHtcbiAgICByZXR1cm4gJ25vbmUnXG4gIH1cbiAgcmV0dXJuIFtcbiAgICBwb2tlbW9uLnR5cGUsXG4gICAgcG9rZW1vbi5sZXZlbCxcbiAgICBwb2tlbW9uLnN0YXRlLFxuICAgIHBva2Vtb24uc2NhbGUsXG4gICAgcG9rZW1vbi5pc0hvdmVyZWQgPyAxIDogMCxcbiAgICBwb2tlbW9uLmlzVHJhbnNpdGlvbkluID8gMSA6IDAsXG4gICAgcG9rZW1vbi5jb2xvcixcbiAgXS5qb2luKCd8Jylcbn1cblxubGV0IGxhc3RSZW5kZXJlZFNpZ25hdHVyZSA9ICcnXG5jb25zdCBQT0tFQkFMTF9TSVpFID0gMzJcbmNvbnN0IFBPS0VNT05fQkFTRV9TSVpFID0gNTAgLy8gSW5jcmVhc2VkIGJ5IDIwJSAoMzIgKiAxLjIgPSAzOC40KVxuXG5mdW5jdGlvbiBnZXRQb2tlbW9uU3ByaXRlUGF0aChwb2tlbW9uOiBVc2VyUG9rZW1vbiwgaXNJZGxlID0gZmFsc2UpOiBzdHJpbmcge1xuICBpZiAocG9rZW1vbi5sZXZlbCA9PT0gMCkge1xuICAgIHJldHVybiAncG9rZWJhbGwuZ2lmJ1xuICB9XG4gIGNvbnN0IHBva2Vtb25UeXBlID0gcG9rZW1vbi50eXBlXG4gIGNvbnN0IHBva2Vtb25EYXRhID0gUE9LRU1PTl9EQVRBW3Bva2Vtb25UeXBlXVxuICBcbiAgaWYgKCFwb2tlbW9uRGF0YSkge1xuICAgIHJldHVybiAncG9rZWJhbGwuZ2lmJ1xuICB9XG4gIFxuICBsZXQgZ2VuZXJhdGlvbiA9ICdnZW4xJ1xuICBpZiAocG9rZW1vbkRhdGEuZ2VuZXJhdGlvbiA9PT0gUG9rZW1vbkdlbmVyYXRpb24uR2VuMikge1xuICAgIGdlbmVyYXRpb24gPSAnZ2VuMidcbiAgfSBlbHNlIGlmIChwb2tlbW9uRGF0YS5nZW5lcmF0aW9uID09PSBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zKSB7XG4gICAgZ2VuZXJhdGlvbiA9ICdnZW4zJ1xuICB9XG5cbiAgY29uc3QgY29sb3JQcmVmaXggPSBwb2tlbW9uLmNvbG9yID09PSBQb2tlbW9uQ29sb3Iuc2hpbnkgPyAnc2hpbnknIDogJ2RlZmF1bHQnXG4gIGNvbnN0IGFuaW1hdGlvbiA9IGlzSWRsZSA/IGAke2NvbG9yUHJlZml4fV9pZGxlXzhmcHMuZ2lmYCA6IGAke2NvbG9yUHJlZml4fV93YWxrXzhmcHMuZ2lmYFxuICByZXR1cm4gYCR7Z2VuZXJhdGlvbn0vJHtwb2tlbW9uVHlwZX0vJHthbmltYXRpb259YFxufVxuXG5mdW5jdGlvbiB1cGRhdGVQb2tlbW9uRGlzcGxheShwb2tlbW9uOiBVc2VyUG9rZW1vbiB8IG51bGwpOiB2b2lkIHtcbiAgY29uc3QgcG9rZW1vbkltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlbW9uJykgYXMgSFRNTEltYWdlRWxlbWVudFxuICBjb25zdCB0cmFuc2l0aW9uSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zaXRpb24nKSBhcyBIVE1MSW1hZ2VFbGVtZW50XG4gIGNvbnN0IHBva2Vtb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZW1vbi1jb250YWluZXInKVxuICBjb25zdCB0cmFuc2l0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zaXRpb24tY29udGFpbmVyJylcblxuICBpZiAoIXBva2Vtb25JbWcgfHwgIXBva2Vtb25Db250YWluZXIpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHNpZ25hdHVyZSA9IHZpc3VhbFNpZ25hdHVyZShwb2tlbW9uKVxuICBpZiAoc2lnbmF0dXJlID09PSBsYXN0UmVuZGVyZWRTaWduYXR1cmUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBsYXN0UmVuZGVyZWRTaWduYXR1cmUgPSBzaWduYXR1cmVcblxuICBpZiAoIXBva2Vtb24gfHwgcG9rZW1vbi5sZXZlbCA9PT0gMCkge1xuICAgIHBva2Vtb25JbWcuc3JjID0gYCR7c3RhdGUuYmFzZVBva2Vtb25Vcml9L3Bva2ViYWxsLmdpZmBcbiAgICBwb2tlbW9uSW1nLndpZHRoID0gUE9LRUJBTExfU0laRVxuICAgIHBva2Vtb25JbWcuaGVpZ2h0ID0gUE9LRUJBTExfU0laRVxuICAgIHBva2Vtb25JbWcuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICBpZiAodHJhbnNpdGlvbkltZykge1xuICAgICAgdHJhbnNpdGlvbkltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgaXNJZGxlID0gcG9rZW1vbi5zdGF0ZSA9PT0gJ2lkbGUnIHx8IHBva2Vtb24uaXNIb3ZlcmVkXG4gIGNvbnN0IHNwcml0ZVBhdGggPSBnZXRQb2tlbW9uU3ByaXRlUGF0aChwb2tlbW9uLCBpc0lkbGUpXG4gIHBva2Vtb25JbWcuc3JjID0gYCR7c3RhdGUuYmFzZVBva2Vtb25Vcml9LyR7c3ByaXRlUGF0aH1gXG4gIHBva2Vtb25JbWcud2lkdGggPSBQT0tFTU9OX0JBU0VfU0laRSAqIHBva2Vtb24uc2NhbGVcbiAgcG9rZW1vbkltZy5oZWlnaHQgPSBQT0tFTU9OX0JBU0VfU0laRSAqIHBva2Vtb24uc2NhbGVcbiAgcG9rZW1vbkltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICBwb2tlbW9uSW1nLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJ3BpeGVsYXRlZCdcbiAgcG9rZW1vbkltZy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtwb2tlbW9uLnNjYWxlfSlgXG5cbiAgaWYgKHBva2Vtb24uaXNUcmFuc2l0aW9uSW4gJiYgdHJhbnNpdGlvbkltZyAmJiB0cmFuc2l0aW9uQ29udGFpbmVyKSB7XG4gICAgdHJhbnNpdGlvbkltZy5zcmMgPSBgJHtzdGF0ZS5iYXNlUG9rZW1vblVyaX0vJHtzcHJpdGVQYXRofWBcbiAgICB0cmFuc2l0aW9uSW1nLndpZHRoID0gUE9LRU1PTl9CQVNFX1NJWkUgKiBwb2tlbW9uLnNjYWxlXG4gICAgdHJhbnNpdGlvbkltZy5oZWlnaHQgPSBQT0tFTU9OX0JBU0VfU0laRSAqIHBva2Vtb24uc2NhbGVcbiAgICB0cmFuc2l0aW9uSW1nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgdHJhbnNpdGlvbkltZy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9ICdwaXhlbGF0ZWQnXG4gICAgdHJhbnNpdGlvbkltZy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtwb2tlbW9uLnNjYWxlfSlgXG4gICAgdHJhbnNpdGlvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodHJhbnNpdGlvbkltZykge1xuICAgICAgICB0cmFuc2l0aW9uSW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIH1cbiAgICAgIGlmICh0cmFuc2l0aW9uQ29udGFpbmVyKSB7XG4gICAgICAgIHRyYW5zaXRpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgfVxuICAgICAgcG9rZW1vbi5pc1RyYW5zaXRpb25JbiA9IGZhbHNlXG4gICAgfSwgMTAwMClcbiAgfSBlbHNlIHtcbiAgICBpZiAodHJhbnNpdGlvbkltZykge1xuICAgICAgdHJhbnNpdGlvbkltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuICAgIGlmICh0cmFuc2l0aW9uQ29udGFpbmVyKSB7XG4gICAgICB0cmFuc2l0aW9uQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGljaygpOiB2b2lkIHtcbiAgY29uc3QgcG9rZW1vbiA9IHN0YXRlLnVzZXJQb2tlbW9uXG4gIGlmICghcG9rZW1vbiB8fCBwb2tlbW9uLmxldmVsID09PSAwKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBMZXQgdGhlIGlkbGUgYW5pbWF0aW9uIHBsYXkgYWZ0ZXIgYSBoYXRjaCBvciBhbiBldm9sdXRpb24uXG4gIGlmIChEYXRlLm5vdygpIDwgc3RhdGUuaWRsZVVudGlsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBJZiBob3ZlcmVkLCBkbyBub3QgbW92ZVxuICBpZiAoc3RhdGUuaXNIb3ZlcmVkKSB7XG4gICAgaWYgKHBva2Vtb24uc3RhdGUgIT09ICdpZGxlJykge1xuICAgICAgcG9rZW1vbi5zdGF0ZSA9ICdpZGxlJ1xuICAgICAgdXBkYXRlUG9rZW1vbkRpc3BsYXkocG9rZW1vbilcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBJZiBpdCB3YXMgaWRsZSBiZWNhdXNlIG9mIGhvdmVyLCBzd2l0Y2ggYmFjayB0byB3YWxraW5nXG4gIGlmIChwb2tlbW9uLnN0YXRlID09PSAnaWRsZScgJiYgIXN0YXRlLmlzSG92ZXJlZCkge1xuICAgIHBva2Vtb24uc3RhdGUgPSAnd2Fsa2luZydcbiAgICB1cGRhdGVQb2tlbW9uRGlzcGxheShwb2tlbW9uKVxuICB9XG5cbiAgY29uc3QgY29udGFpbmVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aFxuICBjb25zdCBzcGVlZCA9IDFcbiAgY29uc3QgZGlyZWN0aW9uID0gcG9rZW1vbi5kaXJlY3Rpb24gfHwgJ3JpZ2h0J1xuICBsZXQgbGVmdFBvc2l0aW9uID0gcG9rZW1vbi5sZWZ0UG9zaXRpb24gfHwgMFxuXG4gIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICBsZWZ0UG9zaXRpb24gKz0gc3BlZWRcbiAgICBpZiAobGVmdFBvc2l0aW9uID4gY29udGFpbmVyV2lkdGggLSBQT0tFTU9OX0JBU0VfU0laRSAqIHBva2Vtb24uc2NhbGUpIHtcbiAgICAgIHBva2Vtb24uZGlyZWN0aW9uID0gJ2xlZnQnXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxlZnRQb3NpdGlvbiAtPSBzcGVlZFxuICAgIGlmIChsZWZ0UG9zaXRpb24gPCAwKSB7XG4gICAgICBwb2tlbW9uLmRpcmVjdGlvbiA9ICdyaWdodCdcbiAgICB9XG4gIH1cblxuICBwb2tlbW9uLmxlZnRQb3NpdGlvbiA9IGxlZnRQb3NpdGlvblxuXG4gIGNvbnN0IG1vdmVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmVtZW50LWNvbnRhaW5lcicpXG4gIGlmIChtb3ZlbWVudENvbnRhaW5lcikge1xuICAgIG1vdmVtZW50Q29udGFpbmVyLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHtsZWZ0UG9zaXRpb259cHhgXG4gIH1cblxuICBjb25zdCBwb2tlbW9uSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bva2Vtb24nKSBhcyBIVE1MSW1hZ2VFbGVtZW50XG4gIGlmIChwb2tlbW9uSW1nKSB7XG4gICAgcG9rZW1vbkltZy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGVYKCR7ZGlyZWN0aW9uID09PSAncmlnaHQnID8gMSA6IC0xfSkgc2NhbGUoJHtwb2tlbW9uLnNjYWxlfSlgXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKTogdm9pZCB7XG4gIGlmIChzdGF0ZS5pbnRlcnZhbElkKSB7XG4gICAgY2xlYXJJbnRlcnZhbChzdGF0ZS5pbnRlcnZhbElkKVxuICB9XG4gIHN0YXRlLmludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIHRpY2soKVxuICB9LCBUSUNLX0lOVEVSVkFMX01TKVxufVxuXG5mdW5jdGlvbiBzdG9wQW5pbWF0aW9uKCk6IHZvaWQge1xuICBpZiAoc3RhdGUuaW50ZXJ2YWxJZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoc3RhdGUuaW50ZXJ2YWxJZClcbiAgICBzdGF0ZS5pbnRlcnZhbElkID0gdW5kZWZpbmVkXG4gIH1cbn1cblxuLy8gVGhlIGV4cGxvcmVyIHZpZXcga2VlcHMgaXRzIGNvbnRleHQgd2hlbiBoaWRkZW4sIHNvIHdpdGhvdXQgdGhpcyB0aGUgd2Fsa2luZ1xuLy8gbG9vcCB3b3VsZCBrZWVwIHJ1bm5pbmcgYWdhaW5zdCBhIHBhbmVsIG5vYm9keSBpcyBsb29raW5nIGF0LlxuZnVuY3Rpb24gaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSgpOiB2b2lkIHtcbiAgaWYgKGRvY3VtZW50LmhpZGRlbikge1xuICAgIHN0b3BBbmltYXRpb24oKVxuICB9IGVsc2UgaWYgKCFzdGF0ZS5pbnRlcnZhbElkKSB7XG4gICAgc3RhcnRBbmltYXRpb24oKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhcHAgPSAoe1xuICB1c2VyUG9rZW1vbixcbiAgYmFzZVBva2Vtb25VcmksXG59OiB7XG4gIHVzZXJQb2tlbW9uOiBVc2VyUG9rZW1vbiB8IG51bGxcbiAgYmFzZVBva2Vtb25Vcmk6IHN0cmluZ1xufSk6IHZvaWQgPT4ge1xuICBzdGF0ZS5iYXNlUG9rZW1vblVyaSA9IGJhc2VQb2tlbW9uVXJpXG4gIHN0YXRlLnVzZXJQb2tlbW9uID0gdXNlclBva2Vtb25cblxuICB1cGRhdGVQb2tlbW9uRGlzcGxheSh1c2VyUG9rZW1vbilcbiAgc3RhcnRBbmltYXRpb24oKVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKVxuXG4gIC8vIEFkZCBob3ZlciBldmVudCBsaXN0ZW5lcnNcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXG4gIGlmIChjb250YWluZXIpIHtcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgIHN0YXRlLmlzSG92ZXJlZCA9IHRydWVcbiAgICAgIGlmIChzdGF0ZS51c2VyUG9rZW1vbiAmJiBzdGF0ZS51c2VyUG9rZW1vbi5sZXZlbCA+IDApIHtcbiAgICAgICAgc3RhdGUudXNlclBva2Vtb24uaXNIb3ZlcmVkID0gdHJ1ZVxuICAgICAgICB1cGRhdGVQb2tlbW9uRGlzcGxheShzdGF0ZS51c2VyUG9rZW1vbilcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgc3RhdGUuaXNIb3ZlcmVkID0gZmFsc2VcbiAgICAgIGlmIChzdGF0ZS51c2VyUG9rZW1vbiAmJiBzdGF0ZS51c2VyUG9rZW1vbi5sZXZlbCA+IDApIHtcbiAgICAgICAgc3RhdGUudXNlclBva2Vtb24uaXNIb3ZlcmVkID0gZmFsc2VcbiAgICAgICAgc3RhdGUudXNlclBva2Vtb24uc3RhdGUgPSAnd2Fsa2luZydcbiAgICAgICAgdXBkYXRlUG9rZW1vbkRpc3BsYXkoc3RhdGUudXNlclBva2Vtb24pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBjb21tYW5kLCBkYXRhIH0gPSBldmVudC5kYXRhXG4gICAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgICBjYXNlICdzcGF3bi1wb2tlbW9uJzpcbiAgICAgICAgaWYgKGRhdGEudXNlclBva2Vtb24pIHtcbiAgICAgICAgICBzdGF0ZS51c2VyUG9rZW1vbiA9IGRhdGEudXNlclBva2Vtb25cbiAgICAgICAgICBzdGF0ZS5pZGxlVW50aWwgPSAwXG4gICAgICAgICAgdXBkYXRlUG9rZW1vbkRpc3BsYXkoZGF0YS51c2VyUG9rZW1vbilcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICd1cGRhdGUtcG9rZW1vbic6IHtcbiAgICAgICAgaWYgKGRhdGEudXNlclBva2Vtb24pIHtcbiAgICAgICAgICBjb25zdCBwcmV2aW91c0xldmVsID0gc3RhdGUudXNlclBva2Vtb24/LmxldmVsID8/IDBcbiAgICAgICAgICBjb25zdCB1cGRhdGVkUG9rZW1vbiA9IHtcbiAgICAgICAgICAgIC4uLmRhdGEudXNlclBva2Vtb24sXG4gICAgICAgICAgICBsZWZ0UG9zaXRpb246IHN0YXRlLnVzZXJQb2tlbW9uPy5sZWZ0UG9zaXRpb24gfHwgMCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogc3RhdGUudXNlclBva2Vtb24/LmRpcmVjdGlvbiB8fCAncmlnaHQnLFxuICAgICAgICAgICAgaXNIb3ZlcmVkOiBzdGF0ZS5pc0hvdmVyZWQsXG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXRlLnVzZXJQb2tlbW9uID0gdXBkYXRlZFBva2Vtb25cblxuICAgICAgICAgIGlmICh1cGRhdGVkUG9rZW1vbi5sZXZlbCA+IHByZXZpb3VzTGV2ZWwpIHtcbiAgICAgICAgICAgIHN0YXRlLmlkbGVVbnRpbCA9IERhdGUubm93KCkgKyBJRExFX0FGVEVSX0NIQU5HRV9NU1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVwZGF0ZVBva2Vtb25EaXNwbGF5KHVwZGF0ZWRQb2tlbW9uKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG53aW5kb3cucG9rZWNoaUFwcCA9IHtcbiAgYXBwLFxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYW5lbC9tYWluLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==