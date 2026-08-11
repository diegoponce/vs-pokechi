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
    // Generation 4
    turtwig: {
        id: 387,
        name: 'Turtwig',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Turtwig!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    grotle: {
        id: 388,
        name: 'Grotle',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Grotle!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    torterra: {
        id: 389,
        name: 'Torterra',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Torterra!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "ground" /* PokemonElementType.ground */],
    },
    chimchar: {
        id: 390,
        name: 'Chimchar',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Chimchar!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    monferno: {
        id: 391,
        name: 'Monferno',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Monferno!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */, "fighting" /* PokemonElementType.fighting */],
    },
    infernape: {
        id: 392,
        name: 'Infernape',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Infernape!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */, "fighting" /* PokemonElementType.fighting */],
    },
    piplup: {
        id: 393,
        name: 'Piplup',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Piplup!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    prinplup: {
        id: 394,
        name: 'Prinplup',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Prinplup!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    empoleon: {
        id: 395,
        name: 'Empoleon',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Empoleon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "steel" /* PokemonElementType.steel */],
    },
    starly: {
        id: 396,
        name: 'Starly',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Starly!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    staravia: {
        id: 397,
        name: 'Staravia',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Staravia!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    staraptor: {
        id: 398,
        name: 'Staraptor',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Staraptor!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    bidoof: {
        id: 399,
        name: 'Bidoof',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Bidoof!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    bibarel: {
        id: 400,
        name: 'Bibarel',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Bibarel!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "water" /* PokemonElementType.water */],
    },
    kricketot: {
        id: 401,
        name: 'Kricketot',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Kricketot!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */],
    },
    kricketune: {
        id: 402,
        name: 'Kricketune',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Kricketune!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */],
    },
    shinx: {
        id: 403,
        name: 'Shinx',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Shinx!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    luxio: {
        id: 404,
        name: 'Luxio',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Luxio!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    luxray: {
        id: 405,
        name: 'Luxray',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Luxray!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    budew: {
        id: 406,
        name: 'Budew',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Budew!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "poison" /* PokemonElementType.poison */],
    },
    roserade: {
        id: 407,
        name: 'Roserade',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Roserade!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "poison" /* PokemonElementType.poison */],
    },
    cranidos: {
        id: 408,
        name: 'Cranidos',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Cranidos!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "fossil" /* PokemonRarity.fossil */,
        types: ["rock" /* PokemonElementType.rock */],
    },
    rampardos: {
        id: 409,
        name: 'Rampardos',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Rampardos!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "fossil" /* PokemonRarity.fossil */,
        types: ["rock" /* PokemonElementType.rock */],
    },
    shieldon: {
        id: 410,
        name: 'Shieldon',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Shieldon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "fossil" /* PokemonRarity.fossil */,
        types: ["rock" /* PokemonElementType.rock */, "steel" /* PokemonElementType.steel */],
    },
    bastiodon: {
        id: 411,
        name: 'Bastiodon',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Bastiodon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "fossil" /* PokemonRarity.fossil */,
        types: ["rock" /* PokemonElementType.rock */, "steel" /* PokemonElementType.steel */],
    },
    burmy_plant: {
        id: 412,
        name: 'Burmy (Plant)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Burmy!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */],
    },
    burmy_sandy: {
        id: 412,
        name: 'Burmy (Sandy)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Burmy!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */],
    },
    burmy_trash: {
        id: 412,
        name: 'Burmy (Trash)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Burmy!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */],
    },
    wormadam_plant: {
        id: 413,
        name: 'Wormadam (Plant)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Wormadam!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "grass" /* PokemonElementType.grass */],
    },
    wormadam_sandy: {
        id: 413,
        name: 'Wormadam (Sandy)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Wormadam!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "ground" /* PokemonElementType.ground */],
    },
    wormadam_trash: {
        id: 413,
        name: 'Wormadam (Trash)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Wormadam!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "steel" /* PokemonElementType.steel */],
    },
    mothim: {
        id: 414,
        name: 'Mothim',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Mothim!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "flying" /* PokemonElementType.flying */],
    },
    combee_female: {
        id: 415,
        name: 'Combee (Female)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Combee!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "flying" /* PokemonElementType.flying */],
    },
    combee_male: {
        id: 415,
        name: 'Combee (Male)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Combee!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "flying" /* PokemonElementType.flying */],
    },
    vespiquen: {
        id: 416,
        name: 'Vespiquen',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Vespiquen!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "flying" /* PokemonElementType.flying */],
    },
    pachirisu: {
        id: 417,
        name: 'Pachirisu',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Pachirisu!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    buizel: {
        id: 418,
        name: 'Buizel',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Buizel!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    floatzel: {
        id: 419,
        name: 'Floatzel',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Floatzel!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    cherubi: {
        id: 420,
        name: 'Cherubi',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Cherubi!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    cherrim: {
        id: 421,
        name: 'Cherrim',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Cherrim!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    shellos_east: {
        id: 422,
        name: 'Shellos (East)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Shellos!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    shellos_west: {
        id: 422,
        name: 'Shellos (West)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Shellos!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    gastrodon_east: {
        id: 423,
        name: 'Gastrodon (East)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Gastrodon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "ground" /* PokemonElementType.ground */],
    },
    gastrodon_west: {
        id: 423,
        name: 'Gastrodon (West)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Gastrodon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "ground" /* PokemonElementType.ground */],
    },
    ambipom: {
        id: 424,
        name: 'Ambipom',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Ambipom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    drifloon: {
        id: 425,
        name: 'Drifloon',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Drifloon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ghost" /* PokemonElementType.ghost */, "flying" /* PokemonElementType.flying */],
    },
    drifblim: {
        id: 426,
        name: 'Drifblim',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Drifblim!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ghost" /* PokemonElementType.ghost */, "flying" /* PokemonElementType.flying */],
    },
    buneary: {
        id: 427,
        name: 'Buneary',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Buneary!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    lopunny: {
        id: 428,
        name: 'Lopunny',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Lopunny!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    mismagius: {
        id: 429,
        name: 'Mismagius',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Mismagius!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ghost" /* PokemonElementType.ghost */],
    },
    honchkrow: {
        id: 430,
        name: 'Honchkrow',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Honchkrow!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dark" /* PokemonElementType.dark */, "flying" /* PokemonElementType.flying */],
    },
    glameow: {
        id: 431,
        name: 'Glameow',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Glameow!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    purugly: {
        id: 432,
        name: 'Purugly',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Purugly!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    chingling: {
        id: 433,
        name: 'Chingling',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Chingling!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    stunky: {
        id: 434,
        name: 'Stunky',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Stunky!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */, "dark" /* PokemonElementType.dark */],
    },
    skuntank: {
        id: 435,
        name: 'Skuntank',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Skuntank!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */, "dark" /* PokemonElementType.dark */],
    },
    bronzor: {
        id: 436,
        name: 'Bronzor',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Bronzor!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["steel" /* PokemonElementType.steel */, "psychic" /* PokemonElementType.psychic */],
    },
    bronzong: {
        id: 437,
        name: 'Bronzong',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Bronzong!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["steel" /* PokemonElementType.steel */, "psychic" /* PokemonElementType.psychic */],
    },
    bonsly: {
        id: 438,
        name: 'Bonsly',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Bonsly!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */],
    },
    mimeJr: {
        id: 439,
        name: 'Mime Jr.',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Mime Jr.!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    happiny: {
        id: 440,
        name: 'Happiny',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Happiny!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    chatot: {
        id: 441,
        name: 'Chatot',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Chatot!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    spiritomb: {
        id: 442,
        name: 'Spiritomb',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Spiritomb!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ghost" /* PokemonElementType.ghost */, "dark" /* PokemonElementType.dark */],
    },
    gible: {
        id: 443,
        name: 'Gible',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Gible!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dragon" /* PokemonElementType.dragon */, "ground" /* PokemonElementType.ground */],
    },
    gabite: {
        id: 444,
        name: 'Gabite',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Gabite!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dragon" /* PokemonElementType.dragon */, "ground" /* PokemonElementType.ground */],
    },
    garchomp: {
        id: 445,
        name: 'Garchomp',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Garchomp!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dragon" /* PokemonElementType.dragon */, "ground" /* PokemonElementType.ground */],
    },
    munchlax: {
        id: 446,
        name: 'Munchlax',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Munchlax!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    riolu: {
        id: 447,
        name: 'Riolu',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Riolu!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fighting" /* PokemonElementType.fighting */],
    },
    lucario: {
        id: 448,
        name: 'Lucario',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Lucario!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fighting" /* PokemonElementType.fighting */, "steel" /* PokemonElementType.steel */],
    },
    hippopotas: {
        id: 449,
        name: 'Hippopotas',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Hippopotas!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */],
    },
    hippowdon: {
        id: 450,
        name: 'Hippowdon',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Hippowdon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */],
    },
    skorupi: {
        id: 451,
        name: 'Skorupi',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Skorupi!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */, "bug" /* PokemonElementType.bug */],
    },
    drapion: {
        id: 452,
        name: 'Drapion',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Drapion!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */, "dark" /* PokemonElementType.dark */],
    },
    croagunk: {
        id: 453,
        name: 'Croagunk',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Croagunk!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */, "fighting" /* PokemonElementType.fighting */],
    },
    toxicroak: {
        id: 454,
        name: 'Toxicroak',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Toxicroak!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["poison" /* PokemonElementType.poison */, "fighting" /* PokemonElementType.fighting */],
    },
    carnivine: {
        id: 455,
        name: 'Carnivine',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Carnivine!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    finneon: {
        id: 456,
        name: 'Finneon',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Finneon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    lumineon: {
        id: 457,
        name: 'Lumineon',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Lumineon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */],
    },
    mantyke: {
        id: 458,
        name: 'Mantyke',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Mantyke!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["water" /* PokemonElementType.water */, "flying" /* PokemonElementType.flying */],
    },
    snover: {
        id: 459,
        name: 'Snover',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Snover!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "ice" /* PokemonElementType.ice */],
    },
    abomasnow: {
        id: 460,
        name: 'Abomasnow',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Abomasnow!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */, "ice" /* PokemonElementType.ice */],
    },
    weavile: {
        id: 461,
        name: 'Weavile',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Weavile!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["dark" /* PokemonElementType.dark */, "ice" /* PokemonElementType.ice */],
    },
    magnezone: {
        id: 462,
        name: 'Magnezone',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Magnezone!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */, "steel" /* PokemonElementType.steel */],
    },
    lickilicky: {
        id: 463,
        name: 'Lickilicky',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Lickilicky!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    rhyperior: {
        id: 464,
        name: 'Rhyperior',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Rhyperior!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */, "rock" /* PokemonElementType.rock */],
    },
    tangrowth: {
        id: 465,
        name: 'Tangrowth',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Tangrowth!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    electivire: {
        id: 466,
        name: 'Electivire',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Electivire!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */],
    },
    magmortar: {
        id: 467,
        name: 'Magmortar',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Magmortar!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["fire" /* PokemonElementType.fire */],
    },
    togekiss: {
        id: 468,
        name: 'Togekiss',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Togekiss!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */, "flying" /* PokemonElementType.flying */],
    },
    yanmega: {
        id: 469,
        name: 'Yanmega',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Yanmega!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["bug" /* PokemonElementType.bug */, "flying" /* PokemonElementType.flying */],
    },
    leafeon: {
        id: 470,
        name: 'Leafeon',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Leafeon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["grass" /* PokemonElementType.grass */],
    },
    glaceon: {
        id: 471,
        name: 'Glaceon',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Glaceon!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ice" /* PokemonElementType.ice */],
    },
    gliscor: {
        id: 472,
        name: 'Gliscor',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Gliscor!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ground" /* PokemonElementType.ground */, "flying" /* PokemonElementType.flying */],
    },
    mamoswine: {
        id: 473,
        name: 'Mamoswine',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Mamoswine!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ice" /* PokemonElementType.ice */, "ground" /* PokemonElementType.ground */],
    },
    porygonZ: {
        id: 474,
        name: 'Porygon-Z',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Porygon-Z!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["normal" /* PokemonElementType.normal */],
    },
    gallade: {
        id: 475,
        name: 'Gallade',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Gallade!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["psychic" /* PokemonElementType.psychic */, "fighting" /* PokemonElementType.fighting */],
    },
    probopass: {
        id: 476,
        name: 'Probopass',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Probopass!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["rock" /* PokemonElementType.rock */, "steel" /* PokemonElementType.steel */],
    },
    dusknoir: {
        id: 477,
        name: 'Dusknoir',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Dusknoir!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ghost" /* PokemonElementType.ghost */],
    },
    froslass: {
        id: 478,
        name: 'Froslass',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Froslass!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["ice" /* PokemonElementType.ice */, "ghost" /* PokemonElementType.ghost */],
    },
    rotom: {
        id: 479,
        name: 'Rotom',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Rotom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */, "ghost" /* PokemonElementType.ghost */],
    },
    rotom_fan: {
        id: 479,
        name: 'Rotom (Fan)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Rotom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */, "ghost" /* PokemonElementType.ghost */],
    },
    rotom_frost: {
        id: 479,
        name: 'Rotom (Frost)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Rotom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */, "ghost" /* PokemonElementType.ghost */],
    },
    rotom_heat: {
        id: 479,
        name: 'Rotom (Heat)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Rotom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */, "ghost" /* PokemonElementType.ghost */],
    },
    rotom_mow: {
        id: 479,
        name: 'Rotom (Mow)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Rotom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */, "ghost" /* PokemonElementType.ghost */],
    },
    rotom_wash: {
        id: 479,
        name: 'Rotom (Wash)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Rotom!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        types: ["electric" /* PokemonElementType.electric */, "ghost" /* PokemonElementType.ghost */],
    },
    uxie: {
        id: 480,
        name: 'Uxie',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Uxie!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "sub-legendary" /* PokemonRarity.subLegendary */,
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    mesprit: {
        id: 481,
        name: 'Mesprit',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Mesprit!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "sub-legendary" /* PokemonRarity.subLegendary */,
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    azelf: {
        id: 482,
        name: 'Azelf',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Azelf!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "sub-legendary" /* PokemonRarity.subLegendary */,
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    dialga: {
        id: 483,
        name: 'Dialga',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Dialga!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "legendary" /* PokemonRarity.legendary */,
        originalSpriteSize: 64,
        types: ["steel" /* PokemonElementType.steel */, "dragon" /* PokemonElementType.dragon */],
    },
    palkia: {
        id: 484,
        name: 'Palkia',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Palkia!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "legendary" /* PokemonRarity.legendary */,
        originalSpriteSize: 64,
        types: ["water" /* PokemonElementType.water */, "dragon" /* PokemonElementType.dragon */],
    },
    heatran: {
        id: 485,
        name: 'Heatran',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Heatran!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "legendary" /* PokemonRarity.legendary */,
        types: ["fire" /* PokemonElementType.fire */, "steel" /* PokemonElementType.steel */],
    },
    regigigas: {
        id: 486,
        name: 'Regigigas',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Regigigas!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "legendary" /* PokemonRarity.legendary */,
        originalSpriteSize: 64,
        types: ["normal" /* PokemonElementType.normal */],
    },
    giratina: {
        id: 487,
        name: 'Giratina',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Giratina!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "legendary" /* PokemonRarity.legendary */,
        originalSpriteSize: 64,
        types: ["ghost" /* PokemonElementType.ghost */, "dragon" /* PokemonElementType.dragon */],
    },
    giratina_origin: {
        id: 487,
        name: 'Giratina (Origin)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Giratina!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "legendary" /* PokemonRarity.legendary */,
        originalSpriteSize: 64,
        types: ["ghost" /* PokemonElementType.ghost */, "dragon" /* PokemonElementType.dragon */],
    },
    cresselia: {
        id: 488,
        name: 'Cresselia',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Cresselia!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "legendary" /* PokemonRarity.legendary */,
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    phione: {
        id: 489,
        name: 'Phione',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Phione!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        types: ["water" /* PokemonElementType.water */],
    },
    manaphy: {
        id: 490,
        name: 'Manaphy',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Manaphy!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        types: ["water" /* PokemonElementType.water */],
    },
    darkrai: {
        id: 491,
        name: 'Darkrai',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Darkrai!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        types: ["dark" /* PokemonElementType.dark */],
    },
    shaymin: {
        id: 492,
        name: 'Shaymin',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Shaymin!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        types: ["grass" /* PokemonElementType.grass */],
    },
    shaymin_sky: {
        id: 492,
        name: 'Shaymin (Sky)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Shaymin!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        types: ["grass" /* PokemonElementType.grass */, "flying" /* PokemonElementType.flying */],
    },
    arceus: {
        id: 493,
        name: 'Arceus',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Arceus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        originalSpriteSize: 64,
        types: ["normal" /* PokemonElementType.normal */],
    },
    arceus_bug: {
        id: 493,
        name: 'Arceus (Bug)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Arceus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        originalSpriteSize: 64,
        types: ["bug" /* PokemonElementType.bug */],
    },
    arceus_dark: {
        id: 493,
        name: 'Arceus (Dark)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Arceus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        originalSpriteSize: 64,
        types: ["dark" /* PokemonElementType.dark */],
    },
    arceus_dragon: {
        id: 493,
        name: 'Arceus (Dragon)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Arceus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        originalSpriteSize: 64,
        types: ["dragon" /* PokemonElementType.dragon */],
    },
    arceus_electric: {
        id: 493,
        name: 'Arceus (Electric)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Arceus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        originalSpriteSize: 64,
        types: ["electric" /* PokemonElementType.electric */],
    },
    arceus_fighting: {
        id: 493,
        name: 'Arceus (Fighting)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Arceus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        originalSpriteSize: 64,
        types: ["fighting" /* PokemonElementType.fighting */],
    },
    arceus_fire: {
        id: 493,
        name: 'Arceus (Fire)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Arceus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        originalSpriteSize: 64,
        types: ["fire" /* PokemonElementType.fire */],
    },
    arceus_flying: {
        id: 493,
        name: 'Arceus (Flying)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Arceus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        originalSpriteSize: 64,
        types: ["flying" /* PokemonElementType.flying */],
    },
    arceus_ghost: {
        id: 493,
        name: 'Arceus (Ghost)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Arceus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        originalSpriteSize: 64,
        types: ["ghost" /* PokemonElementType.ghost */],
    },
    arceus_grass: {
        id: 493,
        name: 'Arceus (Grass)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Arceus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        originalSpriteSize: 64,
        types: ["grass" /* PokemonElementType.grass */],
    },
    arceus_ground: {
        id: 493,
        name: 'Arceus (Ground)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Arceus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        originalSpriteSize: 64,
        types: ["ground" /* PokemonElementType.ground */],
    },
    arceus_ice: {
        id: 493,
        name: 'Arceus (Ice)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Arceus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        originalSpriteSize: 64,
        types: ["ice" /* PokemonElementType.ice */],
    },
    arceus_poison: {
        id: 493,
        name: 'Arceus (Poison)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Arceus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        originalSpriteSize: 64,
        types: ["poison" /* PokemonElementType.poison */],
    },
    arceus_psychic: {
        id: 493,
        name: 'Arceus (Psychic)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Arceus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        originalSpriteSize: 64,
        types: ["psychic" /* PokemonElementType.psychic */],
    },
    arceus_rock: {
        id: 493,
        name: 'Arceus (Rock)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Arceus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        originalSpriteSize: 64,
        types: ["rock" /* PokemonElementType.rock */],
    },
    arceus_steel: {
        id: 493,
        name: 'Arceus (Steel)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Arceus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        originalSpriteSize: 64,
        types: ["steel" /* PokemonElementType.steel */],
    },
    arceus_water: {
        id: 493,
        name: 'Arceus (Water)',
        generation: types_1.PokemonGeneration.Gen4,
        cry: 'Arceus!',
        possibleColors: ["default" /* PokemonColor.default */, "shiny" /* PokemonColor.shiny */],
        rarity: "mythical" /* PokemonRarity.mythical */,
        originalSpriteSize: 64,
        types: ["water" /* PokemonElementType.water */],
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
    PokemonGeneration[PokemonGeneration["Gen4"] = 4] = "Gen4";
})(PokemonGeneration = exports.PokemonGeneration || (exports.PokemonGeneration = {}));


/***/ },

/***/ "./src/panel/main.ts"
/*!***************************!*\
  !*** ./src/panel/main.ts ***!
  \***************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// Identifies which reveal has already played its flash/sparkle/cry, so a
// hover-driven re-render within the same reveal's 1s window is recognized
// as the same reveal instead of replaying it. See updatePokemonDisplay.
let lastRevealKey = '';
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
    else if (pokemonData.generation === types_1.PokemonGeneration.Gen4) {
        generation = 'gen4';
    }
    const colorPrefix = pokemon.color === "shiny" /* PokemonColor.shiny */ ? 'shiny' : 'default';
    const animation = isIdle ? `${colorPrefix}_idle_8fps.gif` : `${colorPrefix}_walk_8fps.gif`;
    return `${generation}/${pokemonType}/${animation}`;
}
function getGenerationFolder(pokemonType) {
    const pokemonData = pokemon_data_1.POKEMON_DATA[pokemonType];
    if ((pokemonData === null || pokemonData === void 0 ? void 0 : pokemonData.generation) === types_1.PokemonGeneration.Gen2) {
        return 'gen2';
    }
    else if ((pokemonData === null || pokemonData === void 0 ? void 0 : pokemonData.generation) === types_1.PokemonGeneration.Gen3) {
        return 'gen3';
    }
    else if ((pokemonData === null || pokemonData === void 0 ? void 0 : pokemonData.generation) === types_1.PokemonGeneration.Gen4) {
        return 'gen4';
    }
    return 'gen1';
}
// A fresh HTMLAudioElement re-checks the browser's autoplay gesture policy
// on every single .play() call, which is what made hatch/evolve/Pokedex-pick
// cries (never triggered from a direct click) unreliable even after a real
// click had already played one successfully. A Web Audio AudioContext only
// needs that gesture once, to move out of "suspended": once running, playing
// a buffer through it from anywhere - a message handler, a timer - works
// the same as if a click had triggered it. Created lazily (constructing one
// needs no gesture) and reused for every cry from here on.
let audioContext;
const cryBufferCache = {};
function loadCryBuffer(pokemonType, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        const cached = cryBufferCache[pokemonType];
        if (cached) {
            return cached;
        }
        const cryPath = `${getGenerationFolder(pokemonType)}/${pokemonType}/cry.mp3`;
        const response = yield fetch(`${state.basePokemonUri}/${cryPath}`);
        const arrayBuffer = yield response.arrayBuffer();
        const buffer = yield ctx.decodeAudioData(arrayBuffer);
        cryBufferCache[pokemonType] = buffer;
        return buffer;
    });
}
// Plays a cry for whichever species is clicked. Logged rather than silently
// swallowed - a context that has never been resumed by a genuine user
// gesture anywhere in this frame still cannot produce sound, and this is
// the only way to tell that apart from a real bug.
function playCry(pokemonType) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!audioContext) {
                audioContext = new AudioContext();
            }
            const ctx = audioContext;
            if (ctx.state === 'suspended') {
                yield ctx.resume();
            }
            const buffer = yield loadCryBuffer(pokemonType, ctx);
            const source = ctx.createBufferSource();
            source.buffer = buffer;
            source.connect(ctx.destination);
            source.start(0);
        }
        catch (err) {
            console.warn('[pokechi] could not play cry for ' + pokemonType + ':', err);
        }
    });
}
// Holding the mouse down and clicking repeatedly would otherwise stack up
// one overlapping cry per click - this caps it to one every 500ms.
const CRY_CLICK_THROTTLE_MS = 1500;
let lastCryClickTime = 0;
// Not a Pokeball with nothing hatched yet, and not a snapshot brought out
// read-only from the Pokedex mid-transition - a plain click while the walk
// loop is running is the only time this fires. Always plays regardless of
// pokechi.playCrySounds: that setting only covers the automatic Pokedex-pick
// reveal, not a click the user asked for directly.
function playCryOnClick(pokemon) {
    if (!pokemon || pokemon.level === 0) {
        return;
    }
    const now = Date.now();
    if (now - lastCryClickTime < CRY_CLICK_THROTTLE_MS) {
        return;
    }
    lastCryClickTime = now;
    playCry(pokemon.type);
    playSoundWaveBurst(pokemon.scale);
}
function updatePokemonDisplay(pokemon) {
    const pokemonImg = document.getElementById('pokemon');
    const pokemonContainer = document.getElementById('pokemon-container');
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
        return;
    }
    const isIdle = pokemon.state === 'idle' || pokemon.isHovered;
    const spritePath = getPokemonSpritePath(pokemon, isIdle);
    pokemonImg.src = `${state.basePokemonUri}/${spritePath}`;
    pokemonImg.width = POKEMON_BASE_SIZE * pokemon.scale;
    pokemonImg.height = POKEMON_BASE_SIZE * pokemon.scale;
    pokemonImg.style.display = 'block';
    pokemonImg.style.imageRendering = 'pixelated';
    // tick() re-applies this same flip on its own 100ms cadence, but setting
    // it here too means a re-render never has even a brief unflipped frame
    // before the next tick catches up.
    pokemonImg.style.transform = `scaleX(${pokemon.direction === 'right' ? 1 : -1}) scale(${pokemon.scale})`;
    // isTransitionIn stays true for a full second after a reveal (matching the
    // sparkle animation length) so a shiny has time to show it, but hovering
    // during that window changes the signature above too (it is part of
    // visualSignature) and would otherwise re-enter this branch and replay the
    // sparkle on every mouse in/out. revealKey identifies the specific reveal
    // instead of just the flag, so a hover-driven re-render within the same
    // window is recognized as the same reveal and skipped, while a genuinely
    // new one (even of the same species, once the window has actually elapsed
    // and reset it below) still plays.
    //
    // There used to be a second sprite layered on top here for a brief flash,
    // plus a cry and a sound-wave ripple, on every reveal (hatch, evolve, a
    // Pokedex pick). Both turned out to not be worth keeping: two independently
    // animated <img> copies of the same walking GIF drift out of frame-sync
    // with each other and visibly double up for as long as the reveal lasted,
    // and the cry needed a direct click on this exact frame to survive the
    // browser's autoplay policy, which a hatch or evolve triggered from typing
    // in the editor never has. Picking a pokemon from the Pokedex now plays its
    // cry directly from that click instead (see pokedex-panel.ts), which has
    // neither problem.
    const revealKey = pokemon.isTransitionIn
        ? [pokemon.type, pokemon.level, pokemon.color].join('|')
        : '';
    const isNewReveal = pokemon.isTransitionIn && revealKey !== lastRevealKey;
    if (isNewReveal) {
        lastRevealKey = revealKey;
        if (pokemon.color === "shiny" /* PokemonColor.shiny */) {
            playSparkleBurst(pokemon.scale);
        }
        setTimeout(() => {
            pokemon.isTransitionIn = false;
            lastRevealKey = '';
        }, 1000);
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
// Ripples a few rings out from the pokemon whenever a click plays its cry.
function playSoundWaveBurst(scale) {
    const burst = document.getElementById('sound-wave-burst');
    if (!burst) {
        return;
    }
    burst.style.transform = `scale(${scale})`;
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
        container.addEventListener('click', () => {
            playCryOnClick(state.userPokemon);
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSSxDQUFDLEVBQ2xELFNBQVMsRUFBRSxZQUFLLENBQUMsV0FBVywwQ0FBRSxTQUFTLEtBQUksT0FBTyxFQUNsRCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsR0FDM0I7b0JBQ0QsS0FBSyxDQUFDLFdBQVcsR0FBRyxjQUFjO29CQUVsQyxJQUFJLGNBQWMsQ0FBQyxLQUFLLEdBQUcsYUFBYSxFQUFFO3dCQUN4QyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxvQkFBb0I7cUJBQ3BEO29CQUVELG9CQUFvQixDQUFDLGNBQWMsQ0FBQztpQkFDckM7Z0JBQ0QsTUFBSzthQUNOO1NBQ0Y7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDO0FBdEVZLFdBQUcsT0FzRWY7QUFFRCxNQUFNLENBQUMsVUFBVSxHQUFHO0lBQ2xCLEdBQUcsRUFBSCxXQUFHO0NBQ0o7Ozs7Ozs7VUNqYkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRTVCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Bva2VjaGlBcHAvLi9zcmMvY29tbW9uL3Bva2Vtb24tZGF0YS50cyIsIndlYnBhY2s6Ly9wb2tlY2hpQXBwLy4vc3JjL2NvbW1vbi90eXBlcy50cyIsIndlYnBhY2s6Ly9wb2tlY2hpQXBwLy4vc3JjL3BhbmVsL21haW4udHMiLCJ3ZWJwYWNrOi8vcG9rZWNoaUFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb2tlY2hpQXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9rZWNoaUFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9rZWNoaUFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9rZW1vbkNvbG9yLCBQb2tlbW9uQ29uZmlnLCBQb2tlbW9uRWxlbWVudFR5cGUsIFBva2Vtb25HZW5lcmF0aW9uLCBQb2tlbW9uUmFyaXR5LCBQb2tlbW9uVHlwZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBQT0tFTU9OX0RBVEE6IHsgW2tleTogc3RyaW5nXTogUG9rZW1vbkNvbmZpZyB9ID0ge1xuICBidWxiYXNhdXI6IHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiAnQnVsYmFzYXVyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0J1bGJhc2F1ciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBpdnlzYXVyOiB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogJ0l2eXNhdXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnSXZ5c2F1ciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICB2ZW51c2F1cjoge1xuICAgIGlkOiAzLFxuICAgIG5hbWU6ICdWZW51c2F1cicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdWZW51c2F1ciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBjaGFybWFuZGVyOiB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogJ0NoYXJtYW5kZXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnQ2hhcm1hbmRlciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXG4gIH0sXG4gIGNoYXJtZWxlb246IHtcbiAgICBpZDogNSxcbiAgICBuYW1lOiAnQ2hhcm1lbGVvbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdDaGFybWVsZW9uIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcbiAgfSxcbiAgY2hhcml6YXJkOiB7XG4gICAgaWQ6IDYsXG4gICAgbmFtZTogJ0NoYXJpemFyZCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdDaGFyaXphcmQhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmUsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBzcXVpcnRsZToge1xuICAgIGlkOiA3LFxuICAgIG5hbWU6ICdTcXVpcnRsZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdTcXVyaXRsZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICB3YXJ0b3J0bGU6IHtcbiAgICBpZDogOCxcbiAgICBuYW1lOiAnV2FydG9ydGxlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1dhcnRvcnRsZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBibGFzdG9pc2U6IHtcbiAgICBpZDogOSxcbiAgICBuYW1lOiAnQmxhc3RvaXNlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0JsYXN0b2lzZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBjYXRlcnBpZToge1xuICAgIGlkOiAxMCxcbiAgICBuYW1lOiAnQ2F0ZXJwaWUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnQ2F0ZXJwaWUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1Z10sXG4gIH0sXG4gIG1ldGFwb2Q6IHtcbiAgICBpZDogMTEsXG4gICAgbmFtZTogJ01ldGFwb2QnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTWV0YXBvZCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcbiAgfSxcbiAgYnV0dGVyZnJlZToge1xuICAgIGlkOiAxMixcbiAgICBuYW1lOiAnQnV0dGVyZnJlZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdCdXR0ZXJmcmVlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICB3ZWVkbGU6IHtcbiAgICBpZDogMTMsXG4gICAgbmFtZTogJ1dlZWRsZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdXZWVkbGUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIGtha3VuYToge1xuICAgIGlkOiAxNCxcbiAgICBuYW1lOiAnS2FrdW5hJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0tha3VuYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgYmVlZHJpbGw6IHtcbiAgICBpZDogMTUsXG4gICAgbmFtZTogJ0JlZWRyaWxsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0JlZWRyaWxsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBwaWRnZXk6IHtcbiAgICBpZDogMTYsXG4gICAgbmFtZTogJ1BpZGdleScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdQaWRnZXkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHBpZGdlb3R0bzoge1xuICAgIGlkOiAxNyxcbiAgICBuYW1lOiAnUGlkZ2VvdHRvJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1BpZGdlb3R0byEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgcGlkZ2VvdDoge1xuICAgIGlkOiAxOCxcbiAgICBuYW1lOiAnUGlkZ2VvdCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdQaWRnZW90IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICByYXR0YXRhOiB7XG4gICAgaWQ6IDE5LFxuICAgIG5hbWU6ICdSYXR0YXRhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1JhdHRhdGEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHJhdGljYXRlOiB7XG4gICAgaWQ6IDIwLFxuICAgIG5hbWU6ICdSYXRpY2F0ZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdSYXRpY2F0ZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgc3BlYXJvdzoge1xuICAgIGlkOiAyMSxcbiAgICBuYW1lOiAnU3BlYXJvdycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdTcGVhcm93IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBmZWFyb3c6IHtcbiAgICBpZDogMjIsXG4gICAgbmFtZTogJ0ZlYXJvdycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdGZWFyb3chJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIGVrYW5zOiB7XG4gICAgaWQ6IDIzLFxuICAgIG5hbWU6ICdFa2FucycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdFa2FucyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgYXJib2s6IHtcbiAgICBpZDogMjQsXG4gICAgbmFtZTogJ0FyYm9rJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0FyYm9rIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBwaWthY2h1OiB7XG4gICAgaWQ6IDI1LFxuICAgIG5hbWU6ICdQaWthY2h1JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1Bpa2FjaHUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcbiAgfSxcbiAgcmFpY2h1OiB7XG4gICAgaWQ6IDI2LFxuICAgIG5hbWU6ICdSYWljaHUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnUmFpY2h1IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXG4gIH0sXG4gIHNhbmRzaHJldzoge1xuICAgIGlkOiAyNyxcbiAgICBuYW1lOiAnU2FuZHNocmV3JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1NhbmRzaHJldyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgc2FuZHNsYXNoOiB7XG4gICAgaWQ6IDI4LFxuICAgIG5hbWU6ICdTYW5kc2xhc2gnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnU2FuZHNsYXNoIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBuaWRvcmFuX2ZlbWFsZToge1xuICAgIGlkOiAyOSxcbiAgICBuYW1lOiAnTmlkb3JhbuKZgCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdOaWRvcmFuIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBuaWRvcmluYToge1xuICAgIGlkOiAzMCxcbiAgICBuYW1lOiAnTmlkb3JpbmEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTmlkb3JpbmEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIG5pZG9xdWVlbjoge1xuICAgIGlkOiAzMSxcbiAgICBuYW1lOiAnTmlkb3F1ZWVuJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ05pZG9xdWVlbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgbmlkb3Jhbl9tYWxlOiB7XG4gICAgaWQ6IDMyLFxuICAgIG5hbWU6ICdOaWRvcmFu4pmCJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ05pZG9yYW4hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIG5pZG9yaW5vOiB7XG4gICAgaWQ6IDMzLFxuICAgIG5hbWU6ICdOaWRvcmlubycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdOaWRvcmlubyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgbmlkb2tpbmc6IHtcbiAgICBpZDogMzQsXG4gICAgbmFtZTogJ05pZG9raW5nJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ05pZG9raW5nIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb24sIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBjbGVmYWlyeToge1xuICAgIGlkOiAzNSxcbiAgICBuYW1lOiAnQ2xlZmFpcnknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnQ2xlZmFpcnkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIGNsZWZhYmxlOiB7XG4gICAgaWQ6IDM2LFxuICAgIG5hbWU6ICdDbGVmYWJsZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdDbGVmYWJsZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgdnVscGl4OiB7XG4gICAgaWQ6IDM3LFxuICAgIG5hbWU6ICdWdWxwaXgnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnVnVscGl4IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcbiAgfSxcbiAgbmluZXRhbGVzOiB7XG4gICAgaWQ6IDM4LFxuICAgIG5hbWU6ICdOaW5ldGFsZXMnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTmluZXRhbGVzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcbiAgfSxcbiAgamlnZ2x5cHVmZjoge1xuICAgIGlkOiAzOSxcbiAgICBuYW1lOiAnSmlnZ2x5cHVmZicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdKaWdnbHlwdWZmIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICB3aWdnbHl0dWZmOiB7XG4gICAgaWQ6IDQwLFxuICAgIG5hbWU6ICdXaWdnbHl0dWZmJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1dpZ2dseXR1ZmYhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHp1YmF0OiB7XG4gICAgaWQ6IDQxLFxuICAgIG5hbWU6ICdadWJhdCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdadWJhdCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgZ29sYmF0OiB7XG4gICAgaWQ6IDQyLFxuICAgIG5hbWU6ICdHb2xiYXQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnR29sYmF0IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb24sIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBvZGRpc2g6IHtcbiAgICBpZDogNDMsXG4gICAgbmFtZTogJ09kZGlzaCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdPZGRpc2ghJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgZ2xvb206IHtcbiAgICBpZDogNDQsXG4gICAgbmFtZTogJ0dsb29tJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0dsb29tIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIHZpbGVwbHVtZToge1xuICAgIGlkOiA0NSxcbiAgICBuYW1lOiAnVmlsZXBsdW1lJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1ZpbGVwbHVtZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBwYXJhczoge1xuICAgIGlkOiA0NixcbiAgICBuYW1lOiAnUGFyYXMnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnUGFyYXMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgcGFyYXNlY3Q6IHtcbiAgICBpZDogNDcsXG4gICAgbmFtZTogJ1BhcmFzZWN0JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1BhcmFzZWN0IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXG4gIH0sXG4gIHZlbm9uYXQ6IHtcbiAgICBpZDogNDgsXG4gICAgbmFtZTogJ1Zlbm9uYXQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnVmVub25hdCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgdmVub21vdGg6IHtcbiAgICBpZDogNDksXG4gICAgbmFtZTogJ1Zlbm9tb3RoJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1Zlbm9tb3RoIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBkaWdsZXR0OiB7XG4gICAgaWQ6IDUwLFxuICAgIG5hbWU6ICdEaWdsZXR0JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0RpZ2xldHQhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIGR1Z3RyaW86IHtcbiAgICBpZDogNTEsXG4gICAgbmFtZTogJ0R1Z3RyaW8nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnRHVndHJpbyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgbWVvd3RoOiB7XG4gICAgaWQ6IDUyLFxuICAgIG5hbWU6ICdNZW93dGgnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTWVvd3RoIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBwZXJzaWFuOiB7XG4gICAgaWQ6IDUzLFxuICAgIG5hbWU6ICdQZXJzaWFuJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1BlcnNpYW4hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHBzeWR1Y2s6IHtcbiAgICBpZDogNTQsXG4gICAgbmFtZTogJ1BzeWR1Y2snLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnUHN5ZHVjayEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBnb2xkdWNrOiB7XG4gICAgaWQ6IDU1LFxuICAgIG5hbWU6ICdHb2xkdWNrJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0dvbGR1Y2shJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgbWFua2V5OiB7XG4gICAgaWQ6IDU2LFxuICAgIG5hbWU6ICdNYW5rZXknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTWFua2V5IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXG4gIH0sXG4gIHByaW1lYXBlOiB7XG4gICAgaWQ6IDU3LFxuICAgIG5hbWU6ICdQcmltZWFwZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdQcmltZWFwZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxuICB9LFxuICBncm93bGl0aGU6IHtcbiAgICBpZDogNTgsXG4gICAgbmFtZTogJ0dyb3dsaXRoZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdHcm93bGl0aGUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxuICB9LFxuICBhcmNhbmluZToge1xuICAgIGlkOiA1OSxcbiAgICBuYW1lOiAnQXJjYW5pbmUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnQXJjYW5pbmUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxuICB9LFxuICBwb2xpd2FnOiB7XG4gICAgaWQ6IDYwLFxuICAgIG5hbWU6ICdQb2xpd2FnJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1BvbGl3YWchJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgcG9saXdoaXJsOiB7XG4gICAgaWQ6IDYxLFxuICAgIG5hbWU6ICdQb2xpd2hpcmwnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnUG9saXdoaXJsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIHBvbGl3cmF0aDoge1xuICAgIGlkOiA2MixcbiAgICBuYW1lOiAnUG9saXdyYXRoJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1BvbGl3cmF0aCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXG4gIH0sXG4gIGFicmE6IHtcbiAgICBpZDogNjMsXG4gICAgbmFtZTogJ0FicmEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnQWJyYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIGthZGFicmE6IHtcbiAgICBpZDogNjQsXG4gICAgbmFtZTogJ0thZGFicmEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnS2FkYWJyYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIGFsYWthemFtOiB7XG4gICAgaWQ6IDY1LFxuICAgIG5hbWU6ICdBbGFrYXphbScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdBbGFrYXphbSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIG1hY2hvcDoge1xuICAgIGlkOiA2NixcbiAgICBuYW1lOiAnTWFjaG9wJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ01hY2hvcCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxuICB9LFxuICBtYWNob2tlOiB7XG4gICAgaWQ6IDY3LFxuICAgIG5hbWU6ICdNYWNob2tlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ01hY2hva2UhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcbiAgfSxcbiAgbWFjaGFtcDoge1xuICAgIGlkOiA2OCxcbiAgICBuYW1lOiAnTWFjaGFtcCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdBbGFrYXphbSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxuICB9LFxuICBiZWxsc3Byb3V0OiB7XG4gICAgaWQ6IDY5LFxuICAgIG5hbWU6ICdCZWxsc3Byb3V0JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0JlbGxzcHJvdXQhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgd2VlcGluYmVsbDoge1xuICAgIGlkOiA3MCxcbiAgICBuYW1lOiAnV2VlcGluYmVsbCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdXZWVwaW5iZWxsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIHZpY3RyZWViZWw6IHtcbiAgICBpZDogNzEsXG4gICAgbmFtZTogJ1ZpY3RyZWViZWwnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnVmljdHJlZWJlbCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICB0ZW50YWNvb2w6IHtcbiAgICBpZDogNzIsXG4gICAgbmFtZTogJ1RlbnRhY29vbCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdUZW50YWNvb2whJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgdGVudGFjcnVlbDoge1xuICAgIGlkOiA3MyxcbiAgICBuYW1lOiAnVGVudGFjcnVlbCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdUZW50YWNydWVsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIGdlb2R1ZGU6IHtcbiAgICBpZDogNzQsXG4gICAgbmFtZTogJ0dlb2R1ZGUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnR2VvZHVkZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIGdyYXZlbGVyOiB7XG4gICAgaWQ6IDc1LFxuICAgIG5hbWU6ICdHcmF2ZWxlcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdHcmF2ZWxlciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIGdvbGVtOiB7XG4gICAgaWQ6IDc2LFxuICAgIG5hbWU6ICdHb2xlbScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdHb2xlbSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIHBvbnl0YToge1xuICAgIGlkOiA3NyxcbiAgICBuYW1lOiAnUG9ueXRhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1Bvbnl0YSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXG4gIH0sXG4gIHJhcGlkYXNoOiB7XG4gICAgaWQ6IDc4LFxuICAgIG5hbWU6ICdSYXBpZGFzaCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdSYXBpZGFzaCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXG4gIH0sXG4gIHNsb3dwb2tlOiB7XG4gICAgaWQ6IDc5LFxuICAgIG5hbWU6ICdTbG93cG9rZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdTbG93cG9rZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgc2xvd2Jybzoge1xuICAgIGlkOiA4MCxcbiAgICBuYW1lOiAnU2xvd2JybycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdTbG93YnJvIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBtYWduZW1pdGU6IHtcbiAgICBpZDogODEsXG4gICAgbmFtZTogJ01hZ25lbWl0ZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdNYWduZW1pdGUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljLCBQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWxdLFxuICB9LFxuICBtYWduZXRvbjoge1xuICAgIGlkOiA4MixcbiAgICBuYW1lOiAnTWFnbmV0b24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTWFnbmV0b24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljLCBQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWxdLFxuICB9LFxuICBmYXJmZXRjaGQ6IHtcbiAgICBpZDogODMsXG4gICAgbmFtZTogJ0ZhcmZldGNoXFwnZCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdGYXJmZXRjaFxcJ2QhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIGRvZHVvOiB7XG4gICAgaWQ6IDg0LFxuICAgIG5hbWU6ICdEb2R1bycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdEb2R1byEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgZG9kcmlvOiB7XG4gICAgaWQ6IDg1LFxuICAgIG5hbWU6ICdEb2RyaW8nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnRG9kcmlvIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBzZWVsOiB7XG4gICAgaWQ6IDg2LFxuICAgIG5hbWU6ICdTZWVsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1NlZWwhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgZGV3Z29uZzoge1xuICAgIGlkOiA4NyxcbiAgICBuYW1lOiAnRGV3Z29uZycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdEZXdnb25nIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmljZV0sXG4gIH0sXG4gIGdyaW1lcjoge1xuICAgIGlkOiA4OCxcbiAgICBuYW1lOiAnR3JpbWVyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0dyaW1lciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgbXVrOiB7XG4gICAgaWQ6IDg5LFxuICAgIG5hbWU6ICdNdWsnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTXVrIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBzaGVsbGRlcjoge1xuICAgIGlkOiA5MCxcbiAgICBuYW1lOiAnU2hlbGxkZXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnU2hlbGxkZXIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgY2xveXN0ZXI6IHtcbiAgICBpZDogOTEsXG4gICAgbmFtZTogJ0Nsb3lzdGVyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0Nsb3lzdGVyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmljZV0sXG4gIH0sXG4gIGdhc3RseToge1xuICAgIGlkOiA5MixcbiAgICBuYW1lOiAnR2FzdGx5JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0dhc3RseSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3QsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBoYXVudGVyOiB7XG4gICAgaWQ6IDkzLFxuICAgIG5hbWU6ICdIYXVudGVyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0hhdW50ZXIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0LCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcbiAgfSxcbiAgZ2VuZ2FyOiB7XG4gICAgaWQ6IDk0LFxuICAgIG5hbWU6ICdHZW5nYXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnR2VuZ2FyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdCwgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIG9uaXg6IHtcbiAgICBpZDogOTUsXG4gICAgbmFtZTogJ09uaXgnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnT25peCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIGRyb3d6ZWU6IHtcbiAgICBpZDogOTYsXG4gICAgbmFtZTogJ0Ryb3d6ZWUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnRHJvd3plZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIGh5cG5vOiB7XG4gICAgaWQ6IDk3LFxuICAgIG5hbWU6ICdIeXBubycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdIeXBubyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIGtyYWJieToge1xuICAgIGlkOiA5OCxcbiAgICBuYW1lOiAnS3JhYmJ5JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0tyYWJieSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBraW5nbGVyOiB7XG4gICAgaWQ6IDk5LFxuICAgIG5hbWU6ICdLaW5nbGVyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0tpbmdsZXIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgdm9sdG9yYjoge1xuICAgIGlkOiAxMDAsXG4gICAgbmFtZTogJ1ZvbHRvcmInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnVm9sdG9yYiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxuICB9LFxuICBlbGVjdHJvZGU6IHtcbiAgICBpZDogMTAxLFxuICAgIG5hbWU6ICdFbGVjdHJvZGUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnRWxlY3Ryb2RlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXG4gIH0sXG4gIGV4ZWdnY3V0ZToge1xuICAgIGlkOiAxMDIsXG4gICAgbmFtZTogJ0V4ZWdnY3V0ZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdFeGVnZ2N1dGUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIGV4ZWdndXRvcjoge1xuICAgIGlkOiAxMDMsXG4gICAgbmFtZTogJ0V4ZWdndXRvcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdFeGVnZ3V0b3IhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIGN1Ym9uZToge1xuICAgIGlkOiAxMDQsXG4gICAgbmFtZTogJ0N1Ym9uZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdDdWJvbmUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIG1hcm93YWs6IHtcbiAgICBpZDogMTA1LFxuICAgIG5hbWU6ICdNYXJvd2FrJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ01hcm93YWshJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIGhpdG1vbmxlZToge1xuICAgIGlkOiAxMDYsXG4gICAgbmFtZTogJ0hpdG1vbmxlZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdIaXRtb25sZWUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcbiAgfSxcbiAgaGl0bW9uY2hhbjoge1xuICAgIGlkOiAxMDcsXG4gICAgbmFtZTogJ0hpdG1vbmNoYW4nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnSGl0bW9uY2hhbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxuICB9LFxuICBsaWNraXR1bmc6IHtcbiAgICBpZDogMTA4LFxuICAgIG5hbWU6ICdMaWNraXR1bmcnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTGlja2l0dW5nIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBrb2ZmaW5nOiB7XG4gICAgaWQ6IDEwOSxcbiAgICBuYW1lOiAnS29mZmluZycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdLb2ZmaW5nIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICB3ZWV6aW5nOiB7XG4gICAgaWQ6IDExMCxcbiAgICBuYW1lOiAnV2VlemluZycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdXZWV6aW5nIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICByaHlob3JuOiB7XG4gICAgaWQ6IDExMSxcbiAgICBuYW1lOiAnUmh5aG9ybicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdSaHlob3JuIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmQsIFBva2Vtb25FbGVtZW50VHlwZS5yb2NrXSxcbiAgfSxcbiAgcmh5ZG9uOiB7XG4gICAgaWQ6IDExMixcbiAgICBuYW1lOiAnUmh5ZG9uJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1JoeWRvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kLCBQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXG4gIH0sXG4gIGNoYW5zZXk6IHtcbiAgICBpZDogMTEzLFxuICAgIG5hbWU6ICdDaGFuc2V5JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0NoYW5zZXkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHRhbmdlbGE6IHtcbiAgICBpZDogMTE0LFxuICAgIG5hbWU6ICdUYW5nZWxhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1RhbmdlbGEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAga2FuZ2Fza2hhbjoge1xuICAgIGlkOiAxMTUsXG4gICAgbmFtZTogJ0thbmdhc2toYW4nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnS2FuZ2Fza2hhbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgaG9yc2VhOiB7XG4gICAgaWQ6IDExNixcbiAgICBuYW1lOiAnSG9yc2VhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0hvcnNlYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBzZWFkcmE6IHtcbiAgICBpZDogMTE3LFxuICAgIG5hbWU6ICdTZWFkcmEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnU2VhZHJhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGdvbGRlZW46IHtcbiAgICBpZDogMTE4LFxuICAgIG5hbWU6ICdHb2xkZWVuJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0dvbGRlZW4hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgc2Vha2luZzoge1xuICAgIGlkOiAxMTksXG4gICAgbmFtZTogJ1NlYWtpbmcnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnU2Vha2luZyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBzdGFyeXU6IHtcbiAgICBpZDogMTIwLFxuICAgIG5hbWU6ICdTdGFyeXUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnU3Rhcnl1IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIHN0YXJtaWU6IHtcbiAgICBpZDogMTIxLFxuICAgIG5hbWU6ICdTdGFybWllJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ1N0YXJtaWUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIG1ybWltZToge1xuICAgIGlkOiAxMjIsXG4gICAgbmFtZTogJ01yLiBNaW1lJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ01yLiBNaW1lIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgc2N5dGhlcjoge1xuICAgIGlkOiAxMjMsXG4gICAgbmFtZTogJ1NjeXRoZXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnU2N5dGhlciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAganlueDoge1xuICAgIGlkOiAxMjQsXG4gICAgbmFtZTogJ0p5bngnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnSnlueCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuaWNlLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIGVsZWN0YWJ1eno6IHtcbiAgICBpZDogMTI1LFxuICAgIG5hbWU6ICdFbGVjdGFidXp6JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0VsZWN0YWJ1enohJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcbiAgfSxcbiAgbWFnbWFyOiB7XG4gICAgaWQ6IDEyNixcbiAgICBuYW1lOiAnTWFnbWFyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ01hZ21hciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXG4gIH0sXG4gIHBpbnNpcjoge1xuICAgIGlkOiAxMjcsXG4gICAgbmFtZTogJ1BpbnNpcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdQaW5zaXIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1Z10sXG4gIH0sXG4gIHRhdXJvczoge1xuICAgIGlkOiAxMjgsXG4gICAgbmFtZTogJ1RhdXJvcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdUYXVyb3MhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIG1hZ2lrYXJwOiB7XG4gICAgaWQ6IDEyOSxcbiAgICBuYW1lOiAnTWFnaWthcnAnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTWFnaWthcnAhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgZ3lhcmFkb3M6IHtcbiAgICBpZDogMTMwLFxuICAgIG5hbWU6ICdHeWFyYWRvcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdHeWFyYWRvcyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBsYXByYXM6IHtcbiAgICBpZDogMTMxLFxuICAgIG5hbWU6ICdMYXByYXMnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTGFwcmFzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmljZV0sXG4gIH0sXG4gIGRpdHRvOiB7XG4gICAgaWQ6IDEzMixcbiAgICBuYW1lOiAnRGl0dG8nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnRGl0dG8hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIGVldmVlOiB7XG4gICAgaWQ6IDEzMyxcbiAgICBuYW1lOiAnRWV2ZWUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnRWV2ZWUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHZhcG9yZW9uOiB7XG4gICAgaWQ6IDEzNCxcbiAgICBuYW1lOiAnVmFwb3Jlb24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnVmFwb3Jlb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgam9sdGVvbjoge1xuICAgIGlkOiAxMzUsXG4gICAgbmFtZTogJ0pvbHRlb24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnSm9sdGVvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxuICB9LFxuICBmbGFyZW9uOiB7XG4gICAgaWQ6IDEzNixcbiAgICBuYW1lOiAnRmxhcmVvbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdGbGFyZW9uIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcbiAgfSxcbiAgcG9yeWdvbjoge1xuICAgIGlkOiAxMzcsXG4gICAgbmFtZTogJ1Bvcnlnb24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnUG9yeWdvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgb21hbnl0ZToge1xuICAgIGlkOiAxMzgsXG4gICAgbmFtZTogJ09tYW55dGUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnT21hbnl0ZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmZvc3NpbCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBvbWFzdGFyOiB7XG4gICAgaWQ6IDEzOSxcbiAgICBuYW1lOiAnT21hc3RhcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdPbWFzdGFyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuZm9zc2lsLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGthYnV0bzoge1xuICAgIGlkOiAxNDAsXG4gICAgbmFtZTogJ0thYnV0bycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdLYWJ1dG8hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5mb3NzaWwsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAga2FidXRvcHM6IHtcbiAgICBpZDogMTQxLFxuICAgIG5hbWU6ICdLYWJ1dG9wcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdLYWJ1dG9wcyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmZvc3NpbCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBhZXJvZGFjdHlsOiB7XG4gICAgaWQ6IDE0MixcbiAgICBuYW1lOiAnQWVyb2RhY3R5bCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdBZXJvZGFjdHlsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuZm9zc2lsLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBzbm9ybGF4OiB7XG4gICAgaWQ6IDE0MyxcbiAgICBuYW1lOiAnU25vcmxheCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdTbm9ybGF4IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBhcnRpY3Vubzoge1xuICAgIGlkOiAxNDQsXG4gICAgbmFtZTogJ0FydGljdW5vJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxuICAgIGNyeTogJ0FydGljdW5vIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuc3ViTGVnZW5kYXJ5LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmljZSwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHphcGRvczoge1xuICAgIGlkOiAxNDUsXG4gICAgbmFtZTogJ1phcGRvcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdaYXBkb3MhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5zdWJMZWdlbmRhcnksXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWMsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBtb2x0cmVzOiB7XG4gICAgaWQ6IDE0NixcbiAgICBuYW1lOiAnTW9sdHJlcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdNb2x0cmVzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuc3ViTGVnZW5kYXJ5LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmUsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBkcmF0aW5pOiB7XG4gICAgaWQ6IDE0NyxcbiAgICBuYW1lOiAnRHJhdGluaScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcbiAgICBjcnk6ICdEcmF0aW5pIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kcmFnb25dLFxuICB9LFxuICBkcmFnb25haXI6IHtcbiAgICBpZDogMTQ4LFxuICAgIG5hbWU6ICdEcmFnb25haXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnRHJhZ29uYWlyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kcmFnb25dLFxuICB9LFxuICBkcmFnb25pdGU6IHtcbiAgICBpZDogMTQ5LFxuICAgIG5hbWU6ICdEcmFnb25pdGUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnRHJhZ29uaXRlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kcmFnb24sIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBtZXd0d286IHtcbiAgICBpZDogMTUwLFxuICAgIG5hbWU6ICdNZXd0d28nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTWV3dHdvIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubGVnZW5kYXJ5LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBtZXc6IHtcbiAgICBpZDogMTUxLFxuICAgIG5hbWU6ICdNZXcnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXG4gICAgY3J5OiAnTWV3IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIC8vIEdlbmVyYXRpb24gMlxuICBjaGlrb3JpdGE6IHtcbiAgICBpZDogMTUyLFxuICAgIG5hbWU6ICdDaGlrb3JpdGEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnQ2hpa29yaXRhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXG4gIH0sXG4gIGJheWxlZWY6IHtcbiAgICBpZDogMTUzLFxuICAgIG5hbWU6ICdCYXlsZWVmJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0JheWxlZWYhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgbWVnYW5pdW06IHtcbiAgICBpZDogMTU0LFxuICAgIG5hbWU6ICdNZWdhbml1bScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdNZWdhbml1bSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxuICB9LFxuICBjeW5kYXF1aWw6IHtcbiAgICBpZDogMTU1LFxuICAgIG5hbWU6ICdDeW5kYXF1aWwnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnQ3luZGFxdWlsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcbiAgfSxcbiAgcXVpbGF2YToge1xuICAgIGlkOiAxNTYsXG4gICAgbmFtZTogJ1F1aWxhdmEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnUXVpbGF2YSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXG4gIH0sXG4gIHR5cGhsb3Npb246IHtcbiAgICBpZDogMTU3LFxuICAgIG5hbWU6ICdUeXBobG9zaW9uJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1R5cGhsb3Npb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxuICB9LFxuICB0b3RvZGlsZToge1xuICAgIGlkOiAxNTgsXG4gICAgbmFtZTogJ1RvdG9kaWxlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1RvdG9kaWxlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGNyb2NvbmF3OiB7XG4gICAgaWQ6IDE1OSxcbiAgICBuYW1lOiAnQ3JvY29uYXcnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnQ3JvY29uYXchJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgZmVyYWxpZ2F0cjoge1xuICAgIGlkOiAxNjAsXG4gICAgbmFtZTogJ0ZlcmFsaWdhdHInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnRmVyYWxpZ2F0ciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBzZW50cmV0OiB7XG4gICAgaWQ6IDE2MSxcbiAgICBuYW1lOiAnU2VudHJldCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdTZW50cmV0IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBmdXJyZXQ6IHtcbiAgICBpZDogMTYyLFxuICAgIG5hbWU6ICdGdXJyZXQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnRnVycmV0IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBob290aG9vdDoge1xuICAgIGlkOiAxNjMsXG4gICAgbmFtZTogJ0hvb3Rob290JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0hvb3Rob290IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBub2N0b3dsOiB7XG4gICAgaWQ6IDE2NCxcbiAgICBuYW1lOiAnTm9jdG93bCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdOb2N0b3dsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBsZWR5YmE6IHtcbiAgICBpZDogMTY1LFxuICAgIG5hbWU6ICdMZWR5YmEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnTGVkeWJhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBsZWRpYW46IHtcbiAgICBpZDogMTY2LFxuICAgIG5hbWU6ICdMZWRpYW4nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnTGVkaWFuIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBzcGluYXJhazoge1xuICAgIGlkOiAxNjcsXG4gICAgbmFtZTogJ1NwaW5hcmFrJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1NwaW5hcmFrIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBhcmlhZG9zOiB7XG4gICAgaWQ6IDE2OCxcbiAgICBuYW1lOiAnQXJpYWRvcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdBcmlhZG9zIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBjcm9iYXQ6IHtcbiAgICBpZDogMTY5LFxuICAgIG5hbWU6ICdDcm9iYXQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnQ3JvYmF0IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb24sIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBjaGluY2hvdToge1xuICAgIGlkOiAxNzAsXG4gICAgbmFtZTogJ0NoaW5jaG91JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0NoaW5jaG91IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcbiAgfSxcbiAgbGFudHVybjoge1xuICAgIGlkOiAxNzEsXG4gICAgbmFtZTogJ0xhbnR1cm4nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnTGFudHVybiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXG4gIH0sXG4gIHBpY2h1OiB7XG4gICAgaWQ6IDE3MixcbiAgICBuYW1lOiAnUGljaHUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnUGljaHUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcbiAgfSxcbiAgY2xlZmZhOiB7XG4gICAgaWQ6IDE3MyxcbiAgICBuYW1lOiAnQ2xlZmZhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0NsZWZmYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgaWdnbHlidWZmOiB7XG4gICAgaWQ6IDE3NCxcbiAgICBuYW1lOiAnSWdnbHlidWZmJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0lnZ2x5YnVmZiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgdG9nZXBpOiB7XG4gICAgaWQ6IDE3NSxcbiAgICBuYW1lOiAnVG9nZXBpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1RvZ2VwaSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgdG9nZXRpYzoge1xuICAgIGlkOiAxNzYsXG4gICAgbmFtZTogJ1RvZ2V0aWMnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVG9nZXRpYyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgbmF0dToge1xuICAgIGlkOiAxNzcsXG4gICAgbmFtZTogJ05hdHUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnTmF0dSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpYywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHhhdHU6IHtcbiAgICBpZDogMTc4LFxuICAgIG5hbWU6ICdYYXR1JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1hhdHUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWMsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBtYXJlZXA6IHtcbiAgICBpZDogMTc5LFxuICAgIG5hbWU6ICdNYXJlZXAnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnTWFyZWVwIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXG4gIH0sXG4gIGZsYWFmZnk6IHtcbiAgICBpZDogMTgwLFxuICAgIG5hbWU6ICdGbGFhZmZ5JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0ZsYWFmZnkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcbiAgfSxcbiAgYW1waGFyb3M6IHtcbiAgICBpZDogMTgxLFxuICAgIG5hbWU6ICdBbXBoYXJvcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdBbXBoYXJvcyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxuICB9LFxuICBiZWxsb3Nzb206IHtcbiAgICBpZDogMTgyLFxuICAgIG5hbWU6ICdCZWxsb3Nzb20nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnQmVsbG9zc29tIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXG4gIH0sXG4gIG1hcmlsbDoge1xuICAgIGlkOiAxODMsXG4gICAgbmFtZTogJ01hcmlsbCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdNYXJpbGwhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgYXp1bWFyaWxsOiB7XG4gICAgaWQ6IDE4NCxcbiAgICBuYW1lOiAnQXp1bWFyaWxsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0F6dW1hcmlsbCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBzdWRvd29vZG86IHtcbiAgICBpZDogMTg1LFxuICAgIG5hbWU6ICdTdWRvd29vZG8nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnU3Vkb3dvb2RvIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrXSxcbiAgfSxcbiAgcG9saXRvZWQ6IHtcbiAgICBpZDogMTg2LFxuICAgIG5hbWU6ICdQb2xpdG9lZCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdQb2xpdG9lZCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBob3BwaXA6IHtcbiAgICBpZDogMTg3LFxuICAgIG5hbWU6ICdIb3BwaXAnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnSG9wcGlwIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHNraXBsb29tOiB7XG4gICAgaWQ6IDE4OCxcbiAgICBuYW1lOiAnU2tpcGxvb20nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnU2tpcGxvb20hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAganVtcGx1ZmY6IHtcbiAgICBpZDogMTg5LFxuICAgIG5hbWU6ICdKdW1wbHVmZicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdKdW1wbHVmZiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBhaXBvbToge1xuICAgIGlkOiAxOTAsXG4gICAgbmFtZTogJ0FpcG9tJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0FpcG9tIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBzdW5rZXJuOiB7XG4gICAgaWQ6IDE5MSxcbiAgICBuYW1lOiAnU3Vua2VybicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdTdW5rZXJuIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXG4gIH0sXG4gIHN1bmZsb3JhOiB7XG4gICAgaWQ6IDE5MixcbiAgICBuYW1lOiAnU3VuZmxvcmEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnU3VuZmxvcmEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgeWFubWE6IHtcbiAgICBpZDogMTkzLFxuICAgIG5hbWU6ICdZYW5tYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdZYW5tYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgd29vcGVyOiB7XG4gICAgaWQ6IDE5NCxcbiAgICBuYW1lOiAnV29vcGVyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1dvb3BlciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBxdWFnc2lyZToge1xuICAgIGlkOiAxOTUsXG4gICAgbmFtZTogJ1F1YWdzaXJlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1F1YWdzaXJlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIGVzcGVvbjoge1xuICAgIGlkOiAxOTYsXG4gICAgbmFtZTogJ0VzcGVvbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdFc3Blb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bWJyZW9uOiB7XG4gICAgaWQ6IDE5NyxcbiAgICBuYW1lOiAnVW1icmVvbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbWJyZW9uIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcbiAgfSxcbiAgbXVya3Jvdzoge1xuICAgIGlkOiAxOTgsXG4gICAgbmFtZTogJ011cmtyb3cnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnTXVya3JvdyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZGFyaywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHNsb3draW5nOiB7XG4gICAgaWQ6IDE5OSxcbiAgICBuYW1lOiAnU2xvd2tpbmcnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnU2xvd2tpbmchJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIG1pc2RyZWF2dXM6IHtcbiAgICBpZDogMjAwLFxuICAgIG5hbWU6ICdNaXNkcmVhdnVzJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ01pc2RyZWF2dXMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0XSxcbiAgfSxcbiAgdW5vd25fYToge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duIChBKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX2I6IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoQiknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl9jOiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKEMpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW5vd25fZDoge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duIChEKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX2U6IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoRSknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl9mOiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKEYpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW5vd25fZzoge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duIChHKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX2g6IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoSCknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl9pOiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKEkpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW5vd25fajoge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duIChKKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX2s6IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoSyknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl9sOiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKEwpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW5vd25fbToge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duIChNKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX246IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoTiknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl9vOiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKE8pJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW5vd25fcDoge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duIChQKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX3E6IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoUSknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl9yOiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKFIpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW5vd25fczoge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duIChTKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX3Q6IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoVCknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl91OiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKFUpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW5vd25fdjoge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duIChWKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX3c6IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoVyknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl94OiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKFgpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgdW5vd25feToge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duIChZKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX3o6IHtcbiAgICBpZDogMjAxLFxuICAgIG5hbWU6ICdVbm93biAoWiknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVW5vd24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICB1bm93bl9leGNsYW1hdGlvbjoge1xuICAgIGlkOiAyMDEsXG4gICAgbmFtZTogJ1Vub3duICghKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdVbm93biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHVub3duX3F1ZXN0aW9uOiB7XG4gICAgaWQ6IDIwMSxcbiAgICBuYW1lOiAnVW5vd24gKD8pJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1Vub3duIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgd29iYnVmZmV0OiB7XG4gICAgaWQ6IDIwMixcbiAgICBuYW1lOiAnV29iYnVmZmV0JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1dvYmJ1ZmZldCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIGdpcmFmYXJpZzoge1xuICAgIGlkOiAyMDMsXG4gICAgbmFtZTogJ0dpcmFmYXJpZycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdHaXJhZmFyaWchJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBwaW5lY286IHtcbiAgICBpZDogMjA0LFxuICAgIG5hbWU6ICdQaW5lY28nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnUGluZWNvIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWddLFxuICB9LFxuICBmb3JyZXRyZXNzOiB7XG4gICAgaWQ6IDIwNSxcbiAgICBuYW1lOiAnRm9ycmV0cmVzcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdGb3JyZXRyZXNzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXG4gIH0sXG4gIGR1bnNwYXJjZToge1xuICAgIGlkOiAyMDYsXG4gICAgbmFtZTogJ0R1bnNwYXJjZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdEdW5zcGFyY2UhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIGdsaWdhcjoge1xuICAgIGlkOiAyMDcsXG4gICAgbmFtZTogJ0dsaWdhcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdHbGlnYXIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHN0ZWVsaXg6IHtcbiAgICBpZDogMjA4LFxuICAgIG5hbWU6ICdTdGVlbGl4JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1N0ZWVsaXghJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWwsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBzbnViYnVsbDoge1xuICAgIGlkOiAyMDksXG4gICAgbmFtZTogJ1NudWJidWxsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1NudWJidWxsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBncmFuYnVsbDoge1xuICAgIGlkOiAyMTAsXG4gICAgbmFtZTogJ0dyYW5idWxsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0dyYW5idWxsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBxd2lsZmlzaDoge1xuICAgIGlkOiAyMTEsXG4gICAgbmFtZTogJ1F3aWxmaXNoJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1F3aWxmaXNoIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIHNjaXpvcjoge1xuICAgIGlkOiAyMTIsXG4gICAgbmFtZTogJ1NjaXpvcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdTY2l6b3IhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsXSxcbiAgfSxcbiAgc2h1Y2tsZToge1xuICAgIGlkOiAyMTMsXG4gICAgbmFtZTogJ1NodWNrbGUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnU2h1Y2tsZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXG4gIH0sXG4gIGhlcmFjcm9zczoge1xuICAgIGlkOiAyMTQsXG4gICAgbmFtZTogJ0hlcmFjcm9zcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdIZXJhY3Jvc3MhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcbiAgfSxcbiAgc25lYXNlbDoge1xuICAgIGlkOiAyMTUsXG4gICAgbmFtZTogJ1NuZWFzZWwnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnU25lYXNlbCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZGFyaywgUG9rZW1vbkVsZW1lbnRUeXBlLmljZV0sXG4gIH0sXG4gIHRlZGRpdXJzYToge1xuICAgIGlkOiAyMTYsXG4gICAgbmFtZTogJ1RlZGRpdXJzYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdUZWRkaXVyc2EhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHVyc2FyaW5nOiB7XG4gICAgaWQ6IDIxNyxcbiAgICBuYW1lOiAnVXJzYXJpbmcnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVXJzYXJpbmchJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHNsdWdtYToge1xuICAgIGlkOiAyMTgsXG4gICAgbmFtZTogJ1NsdWdtYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdTbHVnbWEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxuICB9LFxuICBtYWdjYXJnbzoge1xuICAgIGlkOiAyMTksXG4gICAgbmFtZTogJ01hZ2NhcmdvJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ01hZ2NhcmdvIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXG4gIH0sXG4gIHN3aW51Yjoge1xuICAgIGlkOiAyMjAsXG4gICAgbmFtZTogJ1N3aW51YicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdTd2ludWIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmljZSwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIHBpbG9zd2luZToge1xuICAgIGlkOiAyMjEsXG4gICAgbmFtZTogJ1BpbG9zd2luZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdQaWxvc3dpbmUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmljZSwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIGNvcnNvbGE6IHtcbiAgICBpZDogMjIyLFxuICAgIG5hbWU6ICdDb3Jzb2xhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0NvcnNvbGEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXG4gIH0sXG4gIHJlbW9yYWlkOiB7XG4gICAgaWQ6IDIyMyxcbiAgICBuYW1lOiAnUmVtb3JhaWQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnUmVtb3JhaWQhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgb2N0aWxsZXJ5OiB7XG4gICAgaWQ6IDIyNCxcbiAgICBuYW1lOiAnT2N0aWxsZXJ5JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ09jdGlsbGVyeSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBkZWxpYmlyZDoge1xuICAgIGlkOiAyMjUsXG4gICAgbmFtZTogJ0RlbGliaXJkJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0RlbGliaXJkIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2UsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBtYW50aW5lOiB7XG4gICAgaWQ6IDIyNixcbiAgICBuYW1lOiAnTWFudGluZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdNYW50aW5lIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHNrYXJtb3J5OiB7XG4gICAgaWQ6IDIyNyxcbiAgICBuYW1lOiAnU2thcm1vcnknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnU2thcm1vcnkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgaG91bmRvdXI6IHtcbiAgICBpZDogMjI4LFxuICAgIG5hbWU6ICdIb3VuZG91cicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdIb3VuZG91ciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZGFyaywgUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxuICB9LFxuICBob3VuZG9vbToge1xuICAgIGlkOiAyMjksXG4gICAgbmFtZTogJ0hvdW5kb29tJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0hvdW5kb29tIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kYXJrLCBQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXG4gIH0sXG4gIGtpbmdkcmE6IHtcbiAgICBpZDogMjMwLFxuICAgIG5hbWU6ICdLaW5nZHJhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0tpbmdkcmEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcbiAgfSxcbiAgcGhhbnB5OiB7XG4gICAgaWQ6IDIzMSxcbiAgICBuYW1lOiAnUGhhbnB5JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1BoYW5weSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgZG9ucGhhbjoge1xuICAgIGlkOiAyMzIsXG4gICAgbmFtZTogJ0RvbnBoYW4nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnRG9ucGhhbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgcG9yeWdvbjI6IHtcbiAgICBpZDogMjMzLFxuICAgIG5hbWU6ICdQb3J5Z29uMicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdQb3J5Z29uMiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgc3RhbnRsZXI6IHtcbiAgICBpZDogMjM0LFxuICAgIG5hbWU6ICdTdGFudGxlcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdTdGFudGxlciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgc21lYXJnbGU6IHtcbiAgICBpZDogMjM1LFxuICAgIG5hbWU6ICdTbWVhcmdsZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdTbWVhcmdsZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgdHlyb2d1ZToge1xuICAgIGlkOiAyMzYsXG4gICAgbmFtZTogJ1R5cm9ndWUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnVHlyb2d1ZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxuICB9LFxuICBoaXRtb250b3A6IHtcbiAgICBpZDogMjM3LFxuICAgIG5hbWU6ICdIaXRtb250b3AnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnSGl0bW9udG9wIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXG4gIH0sXG4gIHNtb29jaHVtOiB7XG4gICAgaWQ6IDIzOCxcbiAgICBuYW1lOiAnU21vb2NodW0nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnU21vb2NodW0hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmljZSwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBlbGVraWQ6IHtcbiAgICBpZDogMjM5LFxuICAgIG5hbWU6ICdFbGVraWQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnRWxla2lkIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXG4gIH0sXG4gIG1hZ2J5OiB7XG4gICAgaWQ6IDI0MCxcbiAgICBuYW1lOiAnTWFnYnknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnTWFnYnkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxuICB9LFxuICBtaWx0YW5rOiB7XG4gICAgaWQ6IDI0MSxcbiAgICBuYW1lOiAnTWlsdGFuaycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdNaWx0YW5rIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBibGlzc2V5OiB7XG4gICAgaWQ6IDI0MixcbiAgICBuYW1lOiAnQmxpc3NleScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdCbGlzc2V5IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICByYWlrb3U6IHtcbiAgICBpZDogMjQzLFxuICAgIG5hbWU6ICdSYWlrb3UnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnUmFpa291IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuc3ViTGVnZW5kYXJ5LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcbiAgfSxcbiAgZW50ZWk6IHtcbiAgICBpZDogMjQ0LFxuICAgIG5hbWU6ICdFbnRlaScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdFbnRlaSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcbiAgfSxcbiAgc3VpY3VuZToge1xuICAgIGlkOiAyNDUsXG4gICAgbmFtZTogJ1N1aWN1bmUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnU3VpY3VuZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGxhcnZpdGFyOiB7XG4gICAgaWQ6IDI0NixcbiAgICBuYW1lOiAnTGFydml0YXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnTGFydml0YXIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBwdXBpdGFyOiB7XG4gICAgaWQ6IDI0NyxcbiAgICBuYW1lOiAnUHVwaXRhcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdQdXBpdGFyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgdHlyYW5pdGFyOiB7XG4gICAgaWQ6IDI0OCxcbiAgICBuYW1lOiAnVHlyYW5pdGFyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ1R5cmFuaXRhciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmtdLFxuICB9LFxuICBsdWdpYToge1xuICAgIGlkOiAyNDksXG4gICAgbmFtZTogJ0x1Z2lhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxuICAgIGNyeTogJ0x1Z2lhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubGVnZW5kYXJ5LFxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpYywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIGhvb2g6IHtcbiAgICBpZDogMjUwLFxuICAgIG5hbWU6ICdIby1PaCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcbiAgICBjcnk6ICdIby1PaCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmxlZ2VuZGFyeSxcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmUsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBjZWxlYmk6IHtcbiAgICBpZDogMjUxLFxuICAgIG5hbWU6ICdDZWxlYmknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXG4gICAgY3J5OiAnQ2VsZWJpIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpYywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgLy8gR2VuZXJhdGlvbiAzXG4gIHRyZWVja286IHtcbiAgICBpZDogMjUyLFxuICAgIG5hbWU6ICdUcmVlY2tvJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1RyZWVja28hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgZ3JvdnlsZToge1xuICAgIGlkOiAyNTMsXG4gICAgbmFtZTogJ0dyb3Z5bGUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnR3JvdnlsZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxuICB9LFxuICBzY2VwdGlsZToge1xuICAgIGlkOiAyNTQsXG4gICAgbmFtZTogJ1NjZXB0aWxlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1NjZXB0aWxlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXG4gIH0sXG4gIHRvcmNoaWM6IHtcbiAgICBpZDogMjU1LFxuICAgIG5hbWU6ICdUb3JjaGljJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1RvcmNoaWMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxuICB9LFxuICBjb21idXNrZW46IHtcbiAgICBpZDogMjU2LFxuICAgIG5hbWU6ICdDb21idXNrZW4nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQ29tYnVza2VuIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxuICB9LFxuICBibGF6aWtlbjoge1xuICAgIGlkOiAyNTcsXG4gICAgbmFtZTogJ0JsYXppa2VuJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0JsYXppa2VuIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxuICB9LFxuICBtdWRraXA6IHtcbiAgICBpZDogMjU4LFxuICAgIG5hbWU6ICdNdWRraXAnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTXVka2lwIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIG1hcnNodG9tcDoge1xuICAgIGlkOiAyNTksXG4gICAgbmFtZTogJ01hcnNodG9tcCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdNYXJzaHRvbXAhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgc3dhbXBlcnQ6IHtcbiAgICBpZDogMjYwLFxuICAgIG5hbWU6ICdTd2FtcGVydCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTd2FtcGVydCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBwb29jaHllbmE6IHtcbiAgICBpZDogMjYxLFxuICAgIG5hbWU6ICdQb29jaHllbmEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnUG9vY2h5ZW5hIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcbiAgfSxcbiAgbWlnaHR5ZW5hOiB7XG4gICAgaWQ6IDI2MixcbiAgICBuYW1lOiAnTWlnaHR5ZW5hJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ01pZ2h0eWVuYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXG4gIH0sXG4gIHppZ3phZ29vbjoge1xuICAgIGlkOiAyNjMsXG4gICAgbmFtZTogJ1ppZ3phZ29vbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdaaWd6YWdvb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIGxpbm9vbmU6IHtcbiAgICBpZDogMjY0LFxuICAgIG5hbWU6ICdMaW5vb25lJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0xpbm9vbmUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHd1cm1wbGU6IHtcbiAgICBpZDogMjY1LFxuICAgIG5hbWU6ICdXdXJtcGxlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1d1cm1wbGUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1Z10sXG4gIH0sXG4gIHNpbGNvb246IHtcbiAgICBpZDogMjY2LFxuICAgIG5hbWU6ICdTaWxjb29uJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1NpbGNvb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1Z10sXG4gIH0sXG4gIGJlYXV0aWZseToge1xuICAgIGlkOiAyNjcsXG4gICAgbmFtZTogJ0JlYXV0aWZseScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdCZWF1dGlmbHkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIGNhc2Nvb246IHtcbiAgICBpZDogMjY4LFxuICAgIG5hbWU6ICdDYXNjb29uJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0Nhc2Nvb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1Z10sXG4gIH0sXG4gIGR1c3RveDoge1xuICAgIGlkOiAyNjksXG4gICAgbmFtZTogJ0R1c3RveCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdEdXN0b3ghJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIGxvdGFkOiB7XG4gICAgaWQ6IDI3MCxcbiAgICBuYW1lOiAnTG90YWQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTG90YWQhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxuICB9LFxuICBsb21icmU6IHtcbiAgICBpZDogMjcxLFxuICAgIG5hbWU6ICdMb21icmUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTG9tYnJlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgbHVkaWNvbG86IHtcbiAgICBpZDogMjcyLFxuICAgIG5hbWU6ICdMdWRpY29sbycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdMdWRpY29sbyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXG4gIH0sXG4gIHNlZWRvdDoge1xuICAgIGlkOiAyNzMsXG4gICAgbmFtZTogJ1NlZWRvdCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTZWVkb3QhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgbnV6bGVhZjoge1xuICAgIGlkOiAyNzQsXG4gICAgbmFtZTogJ051emxlYWYnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTnV6bGVhZiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcbiAgfSxcbiAgc2hpZnRyeToge1xuICAgIGlkOiAyNzUsXG4gICAgbmFtZTogJ1NoaWZ0cnknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnU2hpZnRyeSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcbiAgfSxcbiAgdGFpbGxvdzoge1xuICAgIGlkOiAyNzYsXG4gICAgbmFtZTogJ1RhaWxsb3cnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnVGFpbGxvdyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgc3dlbGxvdzoge1xuICAgIGlkOiAyNzcsXG4gICAgbmFtZTogJ1N3ZWxsb3cnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnU3dlbGxvdyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgd2luZ3VsbDoge1xuICAgIGlkOiAyNzgsXG4gICAgbmFtZTogJ1dpbmd1bGwnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnV2luZ3VsbCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBwZWxpcHBlcjoge1xuICAgIGlkOiAyNzksXG4gICAgbmFtZTogJ1BlbGlwcGVyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1BlbGlwcGVyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHJhbHRzOiB7XG4gICAgaWQ6IDI4MCxcbiAgICBuYW1lOiAnUmFsdHMnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnUmFsdHMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBraXJsaWE6IHtcbiAgICBpZDogMjgxLFxuICAgIG5hbWU6ICdLaXJsaWEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnS2lybGlhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgZ2FyZGV2b2lyOiB7XG4gICAgaWQ6IDI4MixcbiAgICBuYW1lOiAnR2FyZGV2b2lyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0dhcmRldm9pciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHN1cnNraXQ6IHtcbiAgICBpZDogMjgzLFxuICAgIG5hbWU6ICdTdXJza2l0JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1N1cnNraXQhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgbWFzcXVlcmFpbjoge1xuICAgIGlkOiAyODQsXG4gICAgbmFtZTogJ01hc3F1ZXJhaW4nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTWFzcXVlcmFpbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgc2hyb29taXNoOiB7XG4gICAgaWQ6IDI4NSxcbiAgICBuYW1lOiAnU2hyb29taXNoJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1Nocm9vbWlzaCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxuICB9LFxuICBicmVsb29tOiB7XG4gICAgaWQ6IDI4NixcbiAgICBuYW1lOiAnQnJlbG9vbScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdCcmVsb29tIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcbiAgfSxcbiAgc2xha290aDoge1xuICAgIGlkOiAyODcsXG4gICAgbmFtZTogJ1NsYWtvdGgnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnU2xha290aCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgdmlnb3JvdGg6IHtcbiAgICBpZDogMjg4LFxuICAgIG5hbWU6ICdWaWdvcm90aCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdWaWdvcm90aCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgc2xha2luZzoge1xuICAgIGlkOiAyODksXG4gICAgbmFtZTogJ1NsYWtpbmcnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnU2xha2luZyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgbmluY2FkYToge1xuICAgIGlkOiAyOTAsXG4gICAgbmFtZTogJ05pbmNhZGEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTmluY2FkYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgbmluamFzazoge1xuICAgIGlkOiAyOTEsXG4gICAgbmFtZTogJ05pbmphc2snLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTmluamFzayEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgc2hlZGluamE6IHtcbiAgICBpZDogMjkyLFxuICAgIG5hbWU6ICdTaGVkaW5qYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTaGVkaW5qYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxuICB9LFxuICB3aGlzbXVyOiB7XG4gICAgaWQ6IDI5MyxcbiAgICBuYW1lOiAnV2hpc211cicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdXaGlzbXVyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBsb3VkcmVkOiB7XG4gICAgaWQ6IDI5NCxcbiAgICBuYW1lOiAnTG91ZHJlZCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdMb3VkcmVkIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBleHBsb3VkOiB7XG4gICAgaWQ6IDI5NSxcbiAgICBuYW1lOiAnRXhwbG91ZCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdFeHBsb3VkIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBtYWt1aGl0YToge1xuICAgIGlkOiAyOTYsXG4gICAgbmFtZTogJ01ha3VoaXRhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ01ha3VoaXRhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXG4gIH0sXG4gIGhhcml5YW1hOiB7XG4gICAgaWQ6IDI5NyxcbiAgICBuYW1lOiAnSGFyaXlhbWEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnSGFyaXlhbWEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcbiAgfSxcbiAgYXp1cmlsbDoge1xuICAgIGlkOiAyOTgsXG4gICAgbmFtZTogJ0F6dXJpbGwnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQXp1cmlsbCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgbm9zZXBhc3M6IHtcbiAgICBpZDogMjk5LFxuICAgIG5hbWU6ICdOb3NlcGFzcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdOb3NlcGFzcyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXG4gIH0sXG4gIHNraXR0eToge1xuICAgIGlkOiAzMDAsXG4gICAgbmFtZTogJ1NraXR0eScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTa2l0dHkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIGRlbGNhdHR5OiB7XG4gICAgaWQ6IDMwMSxcbiAgICBuYW1lOiAnRGVsY2F0dHknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnRGVsY2F0dHkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHNhYmxleWU6IHtcbiAgICBpZDogMzAyLFxuICAgIG5hbWU6ICdTYWJsZXllJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1NhYmxleWUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmssIFBva2Vtb25FbGVtZW50VHlwZS5naG9zdF0sXG4gIH0sXG4gIG1hd2lsZToge1xuICAgIGlkOiAzMDMsXG4gICAgbmFtZTogJ01hd2lsZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdNYXdpbGUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsXSxcbiAgfSxcbiAgYXJvbjoge1xuICAgIGlkOiAzMDQsXG4gICAgbmFtZTogJ0Fyb24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQXJvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWwsIFBva2Vtb25FbGVtZW50VHlwZS5yb2NrXSxcbiAgfSxcbiAgbGFpcm9uOiB7XG4gICAgaWQ6IDMwNSxcbiAgICBuYW1lOiAnTGFpcm9uJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0xhaXJvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWwsIFBva2Vtb25FbGVtZW50VHlwZS5yb2NrXSxcbiAgfSxcbiAgYWdncm9uOiB7XG4gICAgaWQ6IDMwNixcbiAgICBuYW1lOiAnQWdncm9uJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0FnZ3JvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWwsIFBva2Vtb25FbGVtZW50VHlwZS5yb2NrXSxcbiAgfSxcbiAgbWVkaXRpdGU6IHtcbiAgICBpZDogMzA3LFxuICAgIG5hbWU6ICdNZWRpdGl0ZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdNZWRpdGl0ZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmcsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgbWVkaWNoYW06IHtcbiAgICBpZDogMzA4LFxuICAgIG5hbWU6ICdNZWRpY2hhbScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdNZWRpY2hhbSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmcsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgZWxlY3RyaWtlOiB7XG4gICAgaWQ6IDMwOSxcbiAgICBuYW1lOiAnRWxlY3RyaWtlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0VsZWN0cmlrZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxuICB9LFxuICBtYW5lY3RyaWM6IHtcbiAgICBpZDogMzEwLFxuICAgIG5hbWU6ICdNYW5lY3RyaWMnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTWFuZWN0cmljIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXG4gIH0sXG4gIHBsdXNsZToge1xuICAgIGlkOiAzMTEsXG4gICAgbmFtZTogJ1BsdXNsZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdQbHVzbGUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcbiAgfSxcbiAgbWludW46IHtcbiAgICBpZDogMzEyLFxuICAgIG5hbWU6ICdNaW51bicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdNaW51biEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxuICB9LFxuICB2b2xiZWF0OiB7XG4gICAgaWQ6IDMxMyxcbiAgICBuYW1lOiAnVm9sYmVhdCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdWb2xiZWF0IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWddLFxuICB9LFxuICBpbGx1bWlzZToge1xuICAgIGlkOiAzMTQsXG4gICAgbmFtZTogJ0lsbHVtaXNlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0lsbHVtaXNlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWddLFxuICB9LFxuICByb3NlbGlhOiB7XG4gICAgaWQ6IDMxNSxcbiAgICBuYW1lOiAnUm9zZWxpYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdSb3NlbGlhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIGd1bHBpbjoge1xuICAgIGlkOiAzMTYsXG4gICAgbmFtZTogJ0d1bHBpbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdHdWxwaW4hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIHN3YWxvdDoge1xuICAgIGlkOiAzMTcsXG4gICAgbmFtZTogJ1N3YWxvdCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTd2Fsb3QhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIGNhcnZhbmhhOiB7XG4gICAgaWQ6IDMxOCxcbiAgICBuYW1lOiAnQ2FydmFuaGEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQ2FydmFuaGEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXG4gIH0sXG4gIHNoYXJwZWRvOiB7XG4gICAgaWQ6IDMxOSxcbiAgICBuYW1lOiAnU2hhcnBlZG8nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnU2hhcnBlZG8hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXG4gIH0sXG4gIHdhaWxtZXI6IHtcbiAgICBpZDogMzIwLFxuICAgIG5hbWU6ICdXYWlsbWVyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1dhaWxtZXIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgd2FpbG9yZDoge1xuICAgIGlkOiAzMjEsXG4gICAgbmFtZTogJ1dhaWxvcmQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnV2FpbG9yZCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIG51bWVsOiB7XG4gICAgaWQ6IDMyMixcbiAgICBuYW1lOiAnTnVtZWwnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTnVtZWwhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmUsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBjYW1lcnVwdDoge1xuICAgIGlkOiAzMjMsXG4gICAgbmFtZTogJ0NhbWVydXB0JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0NhbWVydXB0IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgdG9ya29hbDoge1xuICAgIGlkOiAzMjQsXG4gICAgbmFtZTogJ1RvcmtvYWwnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnVG9ya29hbCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXG4gIH0sXG4gIHNwb2luazoge1xuICAgIGlkOiAzMjUsXG4gICAgbmFtZTogJ1Nwb2luaycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTcG9pbmshJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBncnVtcGlnOiB7XG4gICAgaWQ6IDMyNixcbiAgICBuYW1lOiAnR3J1bXBpZycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdHcnVtcGlnIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgc3BpbmRhOiB7XG4gICAgaWQ6IDMyNyxcbiAgICBuYW1lOiAnU3BpbmRhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1NwaW5kYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgdHJhcGluY2g6IHtcbiAgICBpZDogMzI4LFxuICAgIG5hbWU6ICdUcmFwaW5jaCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdUcmFwaW5jaCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcbiAgfSxcbiAgdmlicmF2YToge1xuICAgIGlkOiAzMjksXG4gICAgbmFtZTogJ1ZpYnJhdmEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnVmlicmF2YSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kLCBQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcbiAgfSxcbiAgZmx5Z29uOiB7XG4gICAgaWQ6IDMzMCxcbiAgICBuYW1lOiAnRmx5Z29uJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0ZseWdvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kLCBQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcbiAgfSxcbiAgY2FjbmVhOiB7XG4gICAgaWQ6IDMzMSxcbiAgICBuYW1lOiAnQ2FjbmVhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0NhY25lYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxuICB9LFxuICBjYWN0dXJuZToge1xuICAgIGlkOiAzMzIsXG4gICAgbmFtZTogJ0NhY3R1cm5lJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0NhY3R1cm5lIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmtdLFxuICB9LFxuICBzd2FibHU6IHtcbiAgICBpZDogMzMzLFxuICAgIG5hbWU6ICdTd2FibHUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnU3dhYmx1IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBhbHRhcmlhOiB7XG4gICAgaWQ6IDMzNCxcbiAgICBuYW1lOiAnQWx0YXJpYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdBbHRhcmlhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kcmFnb24sIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICB6YW5nb29zZToge1xuICAgIGlkOiAzMzUsXG4gICAgbmFtZTogJ1phbmdvb3NlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1phbmdvb3NlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBzZXZpcGVyOiB7XG4gICAgaWQ6IDMzNixcbiAgICBuYW1lOiAnU2V2aXBlcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTZXZpcGVyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICBsdW5hdG9uZToge1xuICAgIGlkOiAzMzcsXG4gICAgbmFtZTogJ0x1bmF0b25lJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0x1bmF0b25lIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHNvbHJvY2s6IHtcbiAgICBpZDogMzM4LFxuICAgIG5hbWU6ICdTb2xyb2NrJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1NvbHJvY2shJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgYmFyYm9hY2g6IHtcbiAgICBpZDogMzM5LFxuICAgIG5hbWU6ICdCYXJib2FjaCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdCYXJib2FjaCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICB3aGlzY2FzaDoge1xuICAgIGlkOiAzNDAsXG4gICAgbmFtZTogJ1doaXNjYXNoJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1doaXNjYXNoIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIGNvcnBoaXNoOiB7XG4gICAgaWQ6IDM0MSxcbiAgICBuYW1lOiAnQ29ycGhpc2gnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQ29ycGhpc2ghJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgY3Jhd2RhdW50OiB7XG4gICAgaWQ6IDM0MixcbiAgICBuYW1lOiAnQ3Jhd2RhdW50JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0NyYXdkYXVudCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcbiAgfSxcbiAgYmFsdG95OiB7XG4gICAgaWQ6IDM0MyxcbiAgICBuYW1lOiAnQmFsdG95JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0JhbHRveSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIGNsYXlkb2w6IHtcbiAgICBpZDogMzQ0LFxuICAgIG5hbWU6ICdDbGF5ZG9sJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0NsYXlkb2whJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZCwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBsaWxlZXA6IHtcbiAgICBpZDogMzQ1LFxuICAgIG5hbWU6ICdMaWxlZXAnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnTGlsZWVwIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuZm9zc2lsLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXG4gIH0sXG4gIGNyYWRpbHk6IHtcbiAgICBpZDogMzQ2LFxuICAgIG5hbWU6ICdDcmFkaWx5JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0NyYWRpbHkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5mb3NzaWwsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgYW5vcml0aDoge1xuICAgIGlkOiAzNDcsXG4gICAgbmFtZTogJ0Fub3JpdGgnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQW5vcml0aCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmZvc3NpbCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcbiAgfSxcbiAgYXJtYWxkbzoge1xuICAgIGlkOiAzNDgsXG4gICAgbmFtZTogJ0FybWFsZG8nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQXJtYWxkbyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmZvc3NpbCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcbiAgfSxcbiAgZmVlYmFzOiB7XG4gICAgaWQ6IDM0OSxcbiAgICBuYW1lOiAnRmVlYmFzJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0ZlZWJhcyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBtaWxvdGljOiB7XG4gICAgaWQ6IDM1MCxcbiAgICBuYW1lOiAnTWlsb3RpYycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdNaWxvdGljIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGNhc3Rmb3JtOiB7XG4gICAgaWQ6IDM1MSxcbiAgICBuYW1lOiAnQ2FzdGZvcm0nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQ2FzdGZvcm0hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIGtlY2xlb246IHtcbiAgICBpZDogMzUyLFxuICAgIG5hbWU6ICdLZWNsZW9uJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0tlY2xlb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIHNodXBwZXQ6IHtcbiAgICBpZDogMzUzLFxuICAgIG5hbWU6ICdTaHVwcGV0JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1NodXBwZXQhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0XSxcbiAgfSxcbiAgYmFuZXR0ZToge1xuICAgIGlkOiAzNTQsXG4gICAgbmFtZTogJ0JhbmV0dGUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQmFuZXR0ZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxuICB9LFxuICBkdXNrdWxsOiB7XG4gICAgaWQ6IDM1NSxcbiAgICBuYW1lOiAnRHVza3VsbCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdEdXNrdWxsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdF0sXG4gIH0sXG4gIGR1c2Nsb3BzOiB7XG4gICAgaWQ6IDM1NixcbiAgICBuYW1lOiAnRHVzY2xvcHMnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnRHVzY2xvcHMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0XSxcbiAgfSxcbiAgdHJvcGl1czoge1xuICAgIGlkOiAzNTcsXG4gICAgbmFtZTogJ1Ryb3BpdXMnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnVHJvcGl1cyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBjaGltZWNobzoge1xuICAgIGlkOiAzNTgsXG4gICAgbmFtZTogJ0NoaW1lY2hvJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0NoaW1lY2hvIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgYWJzb2w6IHtcbiAgICBpZDogMzU5LFxuICAgIG5hbWU6ICdBYnNvbCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdBYnNvbCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXG4gIH0sXG4gIHd5bmF1dDoge1xuICAgIGlkOiAzNjAsXG4gICAgbmFtZTogJ1d5bmF1dCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdXeW5hdXQhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBzbm9ydW50OiB7XG4gICAgaWQ6IDM2MSxcbiAgICBuYW1lOiAnU25vcnVudCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTbm9ydW50IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2VdLFxuICB9LFxuICBnbGFsaWU6IHtcbiAgICBpZDogMzYyLFxuICAgIG5hbWU6ICdHbGFsaWUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnR2xhbGllIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2VdLFxuICB9LFxuICBzcGhlYWw6IHtcbiAgICBpZDogMzYzLFxuICAgIG5hbWU6ICdTcGhlYWwnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnU3BoZWFsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2UsIFBva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIHNlYWxlbzoge1xuICAgIGlkOiAzNjQsXG4gICAgbmFtZTogJ1NlYWxlbycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTZWFsZW8hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmljZSwgUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgd2FscmVpbjoge1xuICAgIGlkOiAzNjUsXG4gICAgbmFtZTogJ1dhbHJlaW4nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnV2FscmVpbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuaWNlLCBQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBjbGFtcGVybDoge1xuICAgIGlkOiAzNjYsXG4gICAgbmFtZTogJ0NsYW1wZXJsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0NsYW1wZXJsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGh1bnRhaWw6IHtcbiAgICBpZDogMzY3LFxuICAgIG5hbWU6ICdIdW50YWlsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0h1bnRhaWwhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgZ29yZWJ5c3M6IHtcbiAgICBpZDogMzY4LFxuICAgIG5hbWU6ICdHb3JlYnlzcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdHb3JlYnlzcyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICByZWxpY2FudGg6IHtcbiAgICBpZDogMzY5LFxuICAgIG5hbWU6ICdSZWxpY2FudGgnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnUmVsaWNhbnRoIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2tdLFxuICB9LFxuICBsdXZkaXNjOiB7XG4gICAgaWQ6IDM3MCxcbiAgICBuYW1lOiAnTHV2ZGlzYycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdMdXZkaXNjIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGJhZ29uOiB7XG4gICAgaWQ6IDM3MSxcbiAgICBuYW1lOiAnQmFnb24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnQmFnb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbl0sXG4gIH0sXG4gIHNoZWxnb246IHtcbiAgICBpZDogMzcyLFxuICAgIG5hbWU6ICdTaGVsZ29uJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1NoZWxnb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbl0sXG4gIH0sXG4gIHNhbGFtZW5jZToge1xuICAgIGlkOiAzNzMsXG4gICAgbmFtZTogJ1NhbGFtZW5jZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdTYWxhbWVuY2UhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbiwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIGJlbGR1bToge1xuICAgIGlkOiAzNzQsXG4gICAgbmFtZTogJ0JlbGR1bScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdCZWxkdW0hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIG1ldGFuZzoge1xuICAgIGlkOiAzNzUsXG4gICAgbmFtZTogJ01ldGFuZycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdNZXRhbmchJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIG1ldGFncm9zczoge1xuICAgIGlkOiAzNzYsXG4gICAgbmFtZTogJ01ldGFncm9zcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdNZXRhZ3Jvc3MhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHJlZ2lyb2NrOiB7XG4gICAgaWQ6IDM3NyxcbiAgICBuYW1lOiAnUmVnaXJvY2snLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnUmVnaXJvY2shJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5zdWJMZWdlbmRhcnksXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXG4gIH0sXG4gIHJlZ2ljZToge1xuICAgIGlkOiAzNzgsXG4gICAgbmFtZTogJ1JlZ2ljZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdSZWdpY2UhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5zdWJMZWdlbmRhcnksXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuaWNlXSxcbiAgfSxcbiAgcmVnaXN0ZWVsOiB7XG4gICAgaWQ6IDM3OSxcbiAgICBuYW1lOiAnUmVnaXN0ZWVsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1JlZ2lzdGVlbCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXG4gIH0sXG4gIGxhdGlhczoge1xuICAgIGlkOiAzODAsXG4gICAgbmFtZTogJ0xhdGlhcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdMYXRpYXMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5zdWJMZWdlbmRhcnksXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIGxhdGlvczoge1xuICAgIGlkOiAzODEsXG4gICAgbmFtZTogJ0xhdGlvcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdMYXRpb3MhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5zdWJMZWdlbmRhcnksXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIGt5b2dyZToge1xuICAgIGlkOiAzODIsXG4gICAgbmFtZTogJ0t5b2dyZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdLeW9ncmUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5sZWdlbmRhcnksXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGdyb3Vkb246IHtcbiAgICBpZDogMzgzLFxuICAgIG5hbWU6ICdHcm91ZG9uJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ0dyb3Vkb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5sZWdlbmRhcnksXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICByYXlxdWF6YToge1xuICAgIGlkOiAzODQsXG4gICAgbmFtZTogJ1JheXF1YXphJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxuICAgIGNyeTogJ1JheXF1YXphIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubGVnZW5kYXJ5LFxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgamlyYWNoaToge1xuICAgIGlkOiAzODUsXG4gICAgbmFtZTogJ0ppcmFjaGknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnSmlyYWNoaSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIGRlb3h5czoge1xuICAgIGlkOiAzODYsXG4gICAgbmFtZTogJ0Rlb3h5cycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdEZW94eXMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgZGVveHlzX3NwZWVkOiB7XG4gICAgaWQ6IDM4NixcbiAgICBuYW1lOiAnRGVveHlzIChTcGVlZCknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnRGVveHlzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIGRlb3h5c19hdHRhY2s6IHtcbiAgICBpZDogMzg2LFxuICAgIG5hbWU6ICdEZW94eXMgKEF0dGFjayknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXG4gICAgY3J5OiAnRGVveHlzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIGRlb3h5c19kZWZlbnNlOiB7XG4gICAgaWQ6IDM4NixcbiAgICBuYW1lOiAnRGVveHlzIChEZWZlbnNlKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcbiAgICBjcnk6ICdEZW94eXMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgLy8gR2VuZXJhdGlvbiA0XG4gIHR1cnR3aWc6IHtcbiAgICBpZDogMzg3LFxuICAgIG5hbWU6ICdUdXJ0d2lnJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ1R1cnR3aWchJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgZ3JvdGxlOiB7XG4gICAgaWQ6IDM4OCxcbiAgICBuYW1lOiAnR3JvdGxlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0dyb3RsZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxuICB9LFxuICB0b3J0ZXJyYToge1xuICAgIGlkOiAzODksXG4gICAgbmFtZTogJ1RvcnRlcnJhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ1RvcnRlcnJhIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIGNoaW1jaGFyOiB7XG4gICAgaWQ6IDM5MCxcbiAgICBuYW1lOiAnQ2hpbWNoYXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnQ2hpbWNoYXIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxuICB9LFxuICBtb25mZXJubzoge1xuICAgIGlkOiAzOTEsXG4gICAgbmFtZTogJ01vbmZlcm5vJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ01vbmZlcm5vIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxuICB9LFxuICBpbmZlcm5hcGU6IHtcbiAgICBpZDogMzkyLFxuICAgIG5hbWU6ICdJbmZlcm5hcGUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnSW5mZXJuYXBlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxuICB9LFxuICBwaXBsdXA6IHtcbiAgICBpZDogMzkzLFxuICAgIG5hbWU6ICdQaXBsdXAnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnUGlwbHVwIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIHByaW5wbHVwOiB7XG4gICAgaWQ6IDM5NCxcbiAgICBuYW1lOiAnUHJpbnBsdXAnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnUHJpbnBsdXAhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgZW1wb2xlb246IHtcbiAgICBpZDogMzk1LFxuICAgIG5hbWU6ICdFbXBvbGVvbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdFbXBvbGVvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXG4gIH0sXG4gIHN0YXJseToge1xuICAgIGlkOiAzOTYsXG4gICAgbmFtZTogJ1N0YXJseScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdTdGFybHkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHN0YXJhdmlhOiB7XG4gICAgaWQ6IDM5NyxcbiAgICBuYW1lOiAnU3RhcmF2aWEnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnU3RhcmF2aWEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHN0YXJhcHRvcjoge1xuICAgIGlkOiAzOTgsXG4gICAgbmFtZTogJ1N0YXJhcHRvcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdTdGFyYXB0b3IhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIGJpZG9vZjoge1xuICAgIGlkOiAzOTksXG4gICAgbmFtZTogJ0JpZG9vZicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdCaWRvb2YhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIGJpYmFyZWw6IHtcbiAgICBpZDogNDAwLFxuICAgIG5hbWU6ICdCaWJhcmVsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0JpYmFyZWwhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAga3JpY2tldG90OiB7XG4gICAgaWQ6IDQwMSxcbiAgICBuYW1lOiAnS3JpY2tldG90JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0tyaWNrZXRvdCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcbiAgfSxcbiAga3JpY2tldHVuZToge1xuICAgIGlkOiA0MDIsXG4gICAgbmFtZTogJ0tyaWNrZXR1bmUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnS3JpY2tldHVuZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcbiAgfSxcbiAgc2hpbng6IHtcbiAgICBpZDogNDAzLFxuICAgIG5hbWU6ICdTaGlueCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdTaGlueCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxuICB9LFxuICBsdXhpbzoge1xuICAgIGlkOiA0MDQsXG4gICAgbmFtZTogJ0x1eGlvJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0x1eGlvIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXG4gIH0sXG4gIGx1eHJheToge1xuICAgIGlkOiA0MDUsXG4gICAgbmFtZTogJ0x1eHJheScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdMdXhyYXkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcbiAgfSxcbiAgYnVkZXc6IHtcbiAgICBpZDogNDA2LFxuICAgIG5hbWU6ICdCdWRldycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdCdWRldyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxuICB9LFxuICByb3NlcmFkZToge1xuICAgIGlkOiA0MDcsXG4gICAgbmFtZTogJ1Jvc2VyYWRlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ1Jvc2VyYWRlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIGNyYW5pZG9zOiB7XG4gICAgaWQ6IDQwOCxcbiAgICBuYW1lOiAnQ3Jhbmlkb3MnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnQ3Jhbmlkb3MhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5mb3NzaWwsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXG4gIH0sXG4gIHJhbXBhcmRvczoge1xuICAgIGlkOiA0MDksXG4gICAgbmFtZTogJ1JhbXBhcmRvcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdSYW1wYXJkb3MhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5mb3NzaWwsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXG4gIH0sXG4gIHNoaWVsZG9uOiB7XG4gICAgaWQ6IDQxMCxcbiAgICBuYW1lOiAnU2hpZWxkb24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnU2hpZWxkb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5mb3NzaWwsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsXSxcbiAgfSxcbiAgYmFzdGlvZG9uOiB7XG4gICAgaWQ6IDQxMSxcbiAgICBuYW1lOiAnQmFzdGlvZG9uJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0Jhc3Rpb2RvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmZvc3NpbCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWxdLFxuICB9LFxuICBidXJteV9wbGFudDoge1xuICAgIGlkOiA0MTIsXG4gICAgbmFtZTogJ0J1cm15IChQbGFudCknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnQnVybXkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1Z10sXG4gIH0sXG4gIGJ1cm15X3NhbmR5OiB7XG4gICAgaWQ6IDQxMixcbiAgICBuYW1lOiAnQnVybXkgKFNhbmR5KScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdCdXJteSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcbiAgfSxcbiAgYnVybXlfdHJhc2g6IHtcbiAgICBpZDogNDEyLFxuICAgIG5hbWU6ICdCdXJteSAoVHJhc2gpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0J1cm15IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWddLFxuICB9LFxuICB3b3JtYWRhbV9wbGFudDoge1xuICAgIGlkOiA0MTMsXG4gICAgbmFtZTogJ1dvcm1hZGFtIChQbGFudCknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnV29ybWFkYW0hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgd29ybWFkYW1fc2FuZHk6IHtcbiAgICBpZDogNDEzLFxuICAgIG5hbWU6ICdXb3JtYWRhbSAoU2FuZHkpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ1dvcm1hZGFtIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICB3b3JtYWRhbV90cmFzaDoge1xuICAgIGlkOiA0MTMsXG4gICAgbmFtZTogJ1dvcm1hZGFtIChUcmFzaCknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnV29ybWFkYW0hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsXSxcbiAgfSxcbiAgbW90aGltOiB7XG4gICAgaWQ6IDQxNCxcbiAgICBuYW1lOiAnTW90aGltJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ01vdGhpbSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgY29tYmVlX2ZlbWFsZToge1xuICAgIGlkOiA0MTUsXG4gICAgbmFtZTogJ0NvbWJlZSAoRmVtYWxlKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdDb21iZWUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIGNvbWJlZV9tYWxlOiB7XG4gICAgaWQ6IDQxNSxcbiAgICBuYW1lOiAnQ29tYmVlIChNYWxlKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdDb21iZWUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHZlc3BpcXVlbjoge1xuICAgIGlkOiA0MTYsXG4gICAgbmFtZTogJ1Zlc3BpcXVlbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdWZXNwaXF1ZW4hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIHBhY2hpcmlzdToge1xuICAgIGlkOiA0MTcsXG4gICAgbmFtZTogJ1BhY2hpcmlzdScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdQYWNoaXJpc3UhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcbiAgfSxcbiAgYnVpemVsOiB7XG4gICAgaWQ6IDQxOCxcbiAgICBuYW1lOiAnQnVpemVsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0J1aXplbCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBmbG9hdHplbDoge1xuICAgIGlkOiA0MTksXG4gICAgbmFtZTogJ0Zsb2F0emVsJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0Zsb2F0emVsIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGNoZXJ1Ymk6IHtcbiAgICBpZDogNDIwLFxuICAgIG5hbWU6ICdDaGVydWJpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0NoZXJ1YmkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgY2hlcnJpbToge1xuICAgIGlkOiA0MjEsXG4gICAgbmFtZTogJ0NoZXJyaW0nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnQ2hlcnJpbSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxuICB9LFxuICBzaGVsbG9zX2Vhc3Q6IHtcbiAgICBpZDogNDIyLFxuICAgIG5hbWU6ICdTaGVsbG9zIChFYXN0KScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdTaGVsbG9zIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIHNoZWxsb3Nfd2VzdDoge1xuICAgIGlkOiA0MjIsXG4gICAgbmFtZTogJ1NoZWxsb3MgKFdlc3QpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ1NoZWxsb3MhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcbiAgfSxcbiAgZ2FzdHJvZG9uX2Vhc3Q6IHtcbiAgICBpZDogNDIzLFxuICAgIG5hbWU6ICdHYXN0cm9kb24gKEVhc3QpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0dhc3Ryb2RvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBnYXN0cm9kb25fd2VzdDoge1xuICAgIGlkOiA0MjMsXG4gICAgbmFtZTogJ0dhc3Ryb2RvbiAoV2VzdCknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnR2FzdHJvZG9uIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXG4gIH0sXG4gIGFtYmlwb206IHtcbiAgICBpZDogNDI0LFxuICAgIG5hbWU6ICdBbWJpcG9tJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0FtYmlwb20hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIGRyaWZsb29uOiB7XG4gICAgaWQ6IDQyNSxcbiAgICBuYW1lOiAnRHJpZmxvb24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnRHJpZmxvb24hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0LCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgZHJpZmJsaW06IHtcbiAgICBpZDogNDI2LFxuICAgIG5hbWU6ICdEcmlmYmxpbScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdEcmlmYmxpbSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3QsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBidW5lYXJ5OiB7XG4gICAgaWQ6IDQyNyxcbiAgICBuYW1lOiAnQnVuZWFyeScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdCdW5lYXJ5IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBsb3B1bm55OiB7XG4gICAgaWQ6IDQyOCxcbiAgICBuYW1lOiAnTG9wdW5ueScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdMb3B1bm55IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBtaXNtYWdpdXM6IHtcbiAgICBpZDogNDI5LFxuICAgIG5hbWU6ICdNaXNtYWdpdXMnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnTWlzbWFnaXVzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdF0sXG4gIH0sXG4gIGhvbmNoa3Jvdzoge1xuICAgIGlkOiA0MzAsXG4gICAgbmFtZTogJ0hvbmNoa3JvdycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdIb25jaGtyb3chJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmssIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBnbGFtZW93OiB7XG4gICAgaWQ6IDQzMSxcbiAgICBuYW1lOiAnR2xhbWVvdycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdHbGFtZW93IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBwdXJ1Z2x5OiB7XG4gICAgaWQ6IDQzMixcbiAgICBuYW1lOiAnUHVydWdseScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdQdXJ1Z2x5IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBjaGluZ2xpbmc6IHtcbiAgICBpZDogNDMzLFxuICAgIG5hbWU6ICdDaGluZ2xpbmcnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnQ2hpbmdsaW5nIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgc3R1bmt5OiB7XG4gICAgaWQ6IDQzNCxcbiAgICBuYW1lOiAnU3R1bmt5JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ1N0dW5reSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXG4gIH0sXG4gIHNrdW50YW5rOiB7XG4gICAgaWQ6IDQzNSxcbiAgICBuYW1lOiAnU2t1bnRhbmsnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnU2t1bnRhbmshJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbiwgUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmtdLFxuICB9LFxuICBicm9uem9yOiB7XG4gICAgaWQ6IDQzNixcbiAgICBuYW1lOiAnQnJvbnpvcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdCcm9uem9yIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5zdGVlbCwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBicm9uem9uZzoge1xuICAgIGlkOiA0MzcsXG4gICAgbmFtZTogJ0Jyb256b25nJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0Jyb256b25nIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5zdGVlbCwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBib25zbHk6IHtcbiAgICBpZDogNDM4LFxuICAgIG5hbWU6ICdCb25zbHknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnQm9uc2x5IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrXSxcbiAgfSxcbiAgbWltZUpyOiB7XG4gICAgaWQ6IDQzOSxcbiAgICBuYW1lOiAnTWltZSBKci4nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnTWltZSBKci4hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBoYXBwaW55OiB7XG4gICAgaWQ6IDQ0MCxcbiAgICBuYW1lOiAnSGFwcGlueScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdIYXBwaW55IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICBjaGF0b3Q6IHtcbiAgICBpZDogNDQxLFxuICAgIG5hbWU6ICdDaGF0b3QnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnQ2hhdG90IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBzcGlyaXRvbWI6IHtcbiAgICBpZDogNDQyLFxuICAgIG5hbWU6ICdTcGlyaXRvbWInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnU3Bpcml0b21iIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdCwgUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmtdLFxuICB9LFxuICBnaWJsZToge1xuICAgIGlkOiA0NDMsXG4gICAgbmFtZTogJ0dpYmxlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0dpYmxlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kcmFnb24sIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBnYWJpdGU6IHtcbiAgICBpZDogNDQ0LFxuICAgIG5hbWU6ICdHYWJpdGUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnR2FiaXRlIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kcmFnb24sIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBnYXJjaG9tcDoge1xuICAgIGlkOiA0NDUsXG4gICAgbmFtZTogJ0dhcmNob21wJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0dhcmNob21wIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kcmFnb24sIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBtdW5jaGxheDoge1xuICAgIGlkOiA0NDYsXG4gICAgbmFtZTogJ011bmNobGF4JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ011bmNobGF4IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxuICB9LFxuICByaW9sdToge1xuICAgIGlkOiA0NDcsXG4gICAgbmFtZTogJ1Jpb2x1JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ1Jpb2x1IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXG4gIH0sXG4gIGx1Y2FyaW86IHtcbiAgICBpZDogNDQ4LFxuICAgIG5hbWU6ICdMdWNhcmlvJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0x1Y2FyaW8hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nLCBQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWxdLFxuICB9LFxuICBoaXBwb3BvdGFzOiB7XG4gICAgaWQ6IDQ0OSxcbiAgICBuYW1lOiAnSGlwcG9wb3RhcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdIaXBwb3BvdGFzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBoaXBwb3dkb246IHtcbiAgICBpZDogNDUwLFxuICAgIG5hbWU6ICdIaXBwb3dkb24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnSGlwcG93ZG9uIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBza29ydXBpOiB7XG4gICAgaWQ6IDQ1MSxcbiAgICBuYW1lOiAnU2tvcnVwaScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdTa29ydXBpIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb24sIFBva2Vtb25FbGVtZW50VHlwZS5idWddLFxuICB9LFxuICBkcmFwaW9uOiB7XG4gICAgaWQ6IDQ1MixcbiAgICBuYW1lOiAnRHJhcGlvbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdEcmFwaW9uIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb24sIFBva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcbiAgfSxcbiAgY3JvYWd1bms6IHtcbiAgICBpZDogNDUzLFxuICAgIG5hbWU6ICdDcm9hZ3VuaycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdDcm9hZ3VuayEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxuICB9LFxuICB0b3hpY3JvYWs6IHtcbiAgICBpZDogNDU0LFxuICAgIG5hbWU6ICdUb3hpY3JvYWsnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnVG94aWNyb2FrIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb24sIFBva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXG4gIH0sXG4gIGNhcm5pdmluZToge1xuICAgIGlkOiA0NTUsXG4gICAgbmFtZTogJ0Nhcm5pdmluZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdDYXJuaXZpbmUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgZmlubmVvbjoge1xuICAgIGlkOiA0NTYsXG4gICAgbmFtZTogJ0Zpbm5lb24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnRmlubmVvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxuICBsdW1pbmVvbjoge1xuICAgIGlkOiA0NTcsXG4gICAgbmFtZTogJ0x1bWluZW9uJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0x1bWluZW9uIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIG1hbnR5a2U6IHtcbiAgICBpZDogNDU4LFxuICAgIG5hbWU6ICdNYW50eWtlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ01hbnR5a2UhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgc25vdmVyOiB7XG4gICAgaWQ6IDQ1OSxcbiAgICBuYW1lOiAnU25vdmVyJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ1Nub3ZlciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5pY2VdLFxuICB9LFxuICBhYm9tYXNub3c6IHtcbiAgICBpZDogNDYwLFxuICAgIG5hbWU6ICdBYm9tYXNub3cnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnQWJvbWFzbm93IScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLmljZV0sXG4gIH0sXG4gIHdlYXZpbGU6IHtcbiAgICBpZDogNDYxLFxuICAgIG5hbWU6ICdXZWF2aWxlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ1dlYXZpbGUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmssIFBva2Vtb25FbGVtZW50VHlwZS5pY2VdLFxuICB9LFxuICBtYWduZXpvbmU6IHtcbiAgICBpZDogNDYyLFxuICAgIG5hbWU6ICdNYWduZXpvbmUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnTWFnbmV6b25lIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpYywgUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsXSxcbiAgfSxcbiAgbGlja2lsaWNreToge1xuICAgIGlkOiA0NjMsXG4gICAgbmFtZTogJ0xpY2tpbGlja3knLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnTGlja2lsaWNreSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgcmh5cGVyaW9yOiB7XG4gICAgaWQ6IDQ2NCxcbiAgICBuYW1lOiAnUmh5cGVyaW9yJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ1JoeXBlcmlvciEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kLCBQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXG4gIH0sXG4gIHRhbmdyb3d0aDoge1xuICAgIGlkOiA0NjUsXG4gICAgbmFtZTogJ1Rhbmdyb3d0aCcsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdUYW5ncm93dGghJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgZWxlY3RpdmlyZToge1xuICAgIGlkOiA0NjYsXG4gICAgbmFtZTogJ0VsZWN0aXZpcmUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnRWxlY3RpdmlyZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxuICB9LFxuICBtYWdtb3J0YXI6IHtcbiAgICBpZDogNDY3LFxuICAgIG5hbWU6ICdNYWdtb3J0YXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnTWFnbW9ydGFyIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcbiAgfSxcbiAgdG9nZWtpc3M6IHtcbiAgICBpZDogNDY4LFxuICAgIG5hbWU6ICdUb2dla2lzcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdUb2dla2lzcyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgeWFubWVnYToge1xuICAgIGlkOiA0NjksXG4gICAgbmFtZTogJ1lhbm1lZ2EnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnWWFubWVnYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcbiAgfSxcbiAgbGVhZmVvbjoge1xuICAgIGlkOiA0NzAsXG4gICAgbmFtZTogJ0xlYWZlb24nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnTGVhZmVvbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxuICB9LFxuICBnbGFjZW9uOiB7XG4gICAgaWQ6IDQ3MSxcbiAgICBuYW1lOiAnR2xhY2VvbicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdHbGFjZW9uIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2VdLFxuICB9LFxuICBnbGlzY29yOiB7XG4gICAgaWQ6IDQ3MixcbiAgICBuYW1lOiAnR2xpc2NvcicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdHbGlzY29yIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmQsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBtYW1vc3dpbmU6IHtcbiAgICBpZDogNDczLFxuICAgIG5hbWU6ICdNYW1vc3dpbmUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnTWFtb3N3aW5lIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2UsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBwb3J5Z29uWjoge1xuICAgIGlkOiA0NzQsXG4gICAgbmFtZTogJ1Bvcnlnb24tWicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdQb3J5Z29uLVohJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIGdhbGxhZGU6IHtcbiAgICBpZDogNDc1LFxuICAgIG5hbWU6ICdHYWxsYWRlJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0dhbGxhZGUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWMsIFBva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXG4gIH0sXG4gIHByb2JvcGFzczoge1xuICAgIGlkOiA0NzYsXG4gICAgbmFtZTogJ1Byb2JvcGFzcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdQcm9ib3Bhc3MhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXG4gIH0sXG4gIGR1c2tub2lyOiB7XG4gICAgaWQ6IDQ3NyxcbiAgICBuYW1lOiAnRHVza25vaXInLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnRHVza25vaXIhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0XSxcbiAgfSxcbiAgZnJvc2xhc3M6IHtcbiAgICBpZDogNDc4LFxuICAgIG5hbWU6ICdGcm9zbGFzcycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdGcm9zbGFzcyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuaWNlLCBQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxuICB9LFxuICByb3RvbToge1xuICAgIGlkOiA0NzksXG4gICAgbmFtZTogJ1JvdG9tJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ1JvdG9tIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpYywgUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0XSxcbiAgfSxcbiAgcm90b21fZmFuOiB7XG4gICAgaWQ6IDQ3OSxcbiAgICBuYW1lOiAnUm90b20gKEZhbiknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnUm90b20hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljLCBQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxuICB9LFxuICByb3RvbV9mcm9zdDoge1xuICAgIGlkOiA0NzksXG4gICAgbmFtZTogJ1JvdG9tIChGcm9zdCknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnUm90b20hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljLCBQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxuICB9LFxuICByb3RvbV9oZWF0OiB7XG4gICAgaWQ6IDQ3OSxcbiAgICBuYW1lOiAnUm90b20gKEhlYXQpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ1JvdG9tIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpYywgUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0XSxcbiAgfSxcbiAgcm90b21fbW93OiB7XG4gICAgaWQ6IDQ3OSxcbiAgICBuYW1lOiAnUm90b20gKE1vdyknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnUm90b20hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljLCBQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxuICB9LFxuICByb3RvbV93YXNoOiB7XG4gICAgaWQ6IDQ3OSxcbiAgICBuYW1lOiAnUm90b20gKFdhc2gpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ1JvdG9tIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpYywgUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0XSxcbiAgfSxcbiAgdXhpZToge1xuICAgIGlkOiA0ODAsXG4gICAgbmFtZTogJ1V4aWUnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnVXhpZSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgbWVzcHJpdDoge1xuICAgIGlkOiA0ODEsXG4gICAgbmFtZTogJ01lc3ByaXQnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnTWVzcHJpdCEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgYXplbGY6IHtcbiAgICBpZDogNDgyLFxuICAgIG5hbWU6ICdBemVsZicsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdBemVsZiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcbiAgfSxcbiAgZGlhbGdhOiB7XG4gICAgaWQ6IDQ4MyxcbiAgICBuYW1lOiAnRGlhbGdhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0RpYWxnYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmxlZ2VuZGFyeSxcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsLCBQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcbiAgfSxcbiAgcGFsa2lhOiB7XG4gICAgaWQ6IDQ4NCxcbiAgICBuYW1lOiAnUGFsa2lhJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ1BhbGtpYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmxlZ2VuZGFyeSxcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcbiAgfSxcbiAgaGVhdHJhbjoge1xuICAgIGlkOiA0ODUsXG4gICAgbmFtZTogJ0hlYXRyYW4nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnSGVhdHJhbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmxlZ2VuZGFyeSxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWxdLFxuICB9LFxuICByZWdpZ2lnYXM6IHtcbiAgICBpZDogNDg2LFxuICAgIG5hbWU6ICdSZWdpZ2lnYXMnLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnUmVnaWdpZ2FzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubGVnZW5kYXJ5LFxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcbiAgfSxcbiAgZ2lyYXRpbmE6IHtcbiAgICBpZDogNDg3LFxuICAgIG5hbWU6ICdHaXJhdGluYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdHaXJhdGluYSEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmxlZ2VuZGFyeSxcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0LCBQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcbiAgfSxcbiAgZ2lyYXRpbmFfb3JpZ2luOiB7XG4gICAgaWQ6IDQ4NyxcbiAgICBuYW1lOiAnR2lyYXRpbmEgKE9yaWdpbiknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnR2lyYXRpbmEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5sZWdlbmRhcnksXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdCwgUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbl0sXG4gIH0sXG4gIGNyZXNzZWxpYToge1xuICAgIGlkOiA0ODgsXG4gICAgbmFtZTogJ0NyZXNzZWxpYScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdDcmVzc2VsaWEhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5sZWdlbmRhcnksXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXG4gIH0sXG4gIHBoaW9uZToge1xuICAgIGlkOiA0ODksXG4gICAgbmFtZTogJ1BoaW9uZScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdQaGlvbmUhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIG1hbmFwaHk6IHtcbiAgICBpZDogNDkwLFxuICAgIG5hbWU6ICdNYW5hcGh5JyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ01hbmFwaHkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXG4gIH0sXG4gIGRhcmtyYWk6IHtcbiAgICBpZDogNDkxLFxuICAgIG5hbWU6ICdEYXJrcmFpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0RhcmtyYWkhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcbiAgfSxcbiAgc2hheW1pbjoge1xuICAgIGlkOiA0OTIsXG4gICAgbmFtZTogJ1NoYXltaW4nLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnU2hheW1pbiEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcbiAgfSxcbiAgc2hheW1pbl9za3k6IHtcbiAgICBpZDogNDkyLFxuICAgIG5hbWU6ICdTaGF5bWluIChTa3kpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ1NoYXltaW4hJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXG4gIH0sXG4gIGFyY2V1czoge1xuICAgIGlkOiA0OTMsXG4gICAgbmFtZTogJ0FyY2V1cycsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdBcmNldXMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXG4gIH0sXG4gIGFyY2V1c19idWc6IHtcbiAgICBpZDogNDkzLFxuICAgIG5hbWU6ICdBcmNldXMgKEJ1ZyknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnQXJjZXVzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWddLFxuICB9LFxuICBhcmNldXNfZGFyazoge1xuICAgIGlkOiA0OTMsXG4gICAgbmFtZTogJ0FyY2V1cyAoRGFyayknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnQXJjZXVzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcbiAgfSxcbiAgYXJjZXVzX2RyYWdvbjoge1xuICAgIGlkOiA0OTMsXG4gICAgbmFtZTogJ0FyY2V1cyAoRHJhZ29uKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdBcmNldXMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbl0sXG4gIH0sXG4gIGFyY2V1c19lbGVjdHJpYzoge1xuICAgIGlkOiA0OTMsXG4gICAgbmFtZTogJ0FyY2V1cyAoRWxlY3RyaWMpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0FyY2V1cyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxuICB9LFxuICBhcmNldXNfZmlnaHRpbmc6IHtcbiAgICBpZDogNDkzLFxuICAgIG5hbWU6ICdBcmNldXMgKEZpZ2h0aW5nKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdBcmNldXMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcbiAgfSxcbiAgYXJjZXVzX2ZpcmU6IHtcbiAgICBpZDogNDkzLFxuICAgIG5hbWU6ICdBcmNldXMgKEZpcmUpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0FyY2V1cyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXG4gIH0sXG4gIGFyY2V1c19mbHlpbmc6IHtcbiAgICBpZDogNDkzLFxuICAgIG5hbWU6ICdBcmNldXMgKEZseWluZyknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnQXJjZXVzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxuICB9LFxuICBhcmNldXNfZ2hvc3Q6IHtcbiAgICBpZDogNDkzLFxuICAgIG5hbWU6ICdBcmNldXMgKEdob3N0KScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdBcmNldXMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0XSxcbiAgfSxcbiAgYXJjZXVzX2dyYXNzOiB7XG4gICAgaWQ6IDQ5MyxcbiAgICBuYW1lOiAnQXJjZXVzIChHcmFzcyknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnQXJjZXVzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXG4gIH0sXG4gIGFyY2V1c19ncm91bmQ6IHtcbiAgICBpZDogNDkzLFxuICAgIG5hbWU6ICdBcmNldXMgKEdyb3VuZCknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnQXJjZXVzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxuICB9LFxuICBhcmNldXNfaWNlOiB7XG4gICAgaWQ6IDQ5MyxcbiAgICBuYW1lOiAnQXJjZXVzIChJY2UpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0FyY2V1cyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuaWNlXSxcbiAgfSxcbiAgYXJjZXVzX3BvaXNvbjoge1xuICAgIGlkOiA0OTMsXG4gICAgbmFtZTogJ0FyY2V1cyAoUG9pc29uKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdBcmNldXMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXG4gIH0sXG4gIGFyY2V1c19wc3ljaGljOiB7XG4gICAgaWQ6IDQ5MyxcbiAgICBuYW1lOiAnQXJjZXVzIChQc3ljaGljKScsXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcbiAgICBjcnk6ICdBcmNldXMhJyxcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxuICB9LFxuICBhcmNldXNfcm9jazoge1xuICAgIGlkOiA0OTMsXG4gICAgbmFtZTogJ0FyY2V1cyAoUm9jayknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnQXJjZXVzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrXSxcbiAgfSxcbiAgYXJjZXVzX3N0ZWVsOiB7XG4gICAgaWQ6IDQ5MyxcbiAgICBuYW1lOiAnQXJjZXVzIChTdGVlbCknLFxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXG4gICAgY3J5OiAnQXJjZXVzIScsXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXG4gIH0sXG4gIGFyY2V1c193YXRlcjoge1xuICAgIGlkOiA0OTMsXG4gICAgbmFtZTogJ0FyY2V1cyAoV2F0ZXIpJyxcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxuICAgIGNyeTogJ0FyY2V1cyEnLFxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxuICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFBva2Vtb24oKTogUG9rZW1vblR5cGVbXSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhQT0tFTU9OX0RBVEEpIGFzIFBva2Vtb25UeXBlW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2tlbW9uQnlHZW5lcmF0aW9uKGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uKTogUG9rZW1vblR5cGVbXSB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyhQT0tFTU9OX0RBVEEpXG4gICAgLmZpbHRlcigoW18sIGNvbmZpZ10pID0+IGNvbmZpZy5nZW5lcmF0aW9uID09PSBnZW5lcmF0aW9uKVxuICAgIC5tYXAoKFtrZXksIF9dKSA9PiBrZXkgYXMgUG9rZW1vblR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFBva2Vtb24oKTogUG9rZW1vblR5cGUge1xuICByZXR1cm4gJ2J1bGJhc2F1cic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21Qb2tlbW9uQ29uZmlnKCk6IFtQb2tlbW9uVHlwZSwgUG9rZW1vbkNvbmZpZ10ge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKFBPS0VNT05fREFUQSk7XG4gIHZhciByYW5kb21LZXkgPSBrZXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGtleXMubGVuZ3RoKV07XG4gIHJldHVybiBbcmFuZG9tS2V5IGFzIFBva2Vtb25UeXBlLCBQT0tFTU9OX0RBVEFbcmFuZG9tS2V5XV07XG59IiwiaW1wb3J0IHsgUE9LRU1PTl9EQVRBIH0gZnJvbSBcIi4vcG9rZW1vbi1kYXRhXCI7XG5cbmV4cG9ydCBjb25zdCBlbnVtIFBva2Vtb25Db2xvciB7XG4gICAgZGVmYXVsdCA9ICdkZWZhdWx0JyxcbiAgICBzaGlueSA9ICdzaGlueScsXG4gICAgbnVsbCA9ICdudWxsJyxcbn1cblxuLy8gQWJzZW50ICh1bmRlZmluZWQpIG9uIGEgUG9rZW1vbkNvbmZpZyBtZWFucyBjb21tb24gLSB0aGUgdmFzdCBtYWpvcml0eSBvZlxuLy8gdGhlIGRleCAtIHNvIG9ubHkgdGhlIGhhbmRmdWwgb2YgbGVnZW5kYXJ5LXRpZXIgc3BlY2llcyBuZWVkIHRvIHNldCB0aGlzLlxuZXhwb3J0IGNvbnN0IGVudW0gUG9rZW1vblJhcml0eSB7XG4gICAgc3ViTGVnZW5kYXJ5ID0gJ3N1Yi1sZWdlbmRhcnknLFxuICAgIGxlZ2VuZGFyeSA9ICdsZWdlbmRhcnknLFxuICAgIG15dGhpY2FsID0gJ215dGhpY2FsJyxcbiAgICBmb3NzaWwgPSAnZm9zc2lsJyxcbn1cblxuZXhwb3J0IGVudW0gUG9rZW1vbkdlbmVyYXRpb24ge1xuICAgIEdlbjEgPSAxLFxuICAgIEdlbjIgPSAyLFxuICAgIEdlbjMgPSAzLFxuICAgIEdlbjQgPSA0LFxufVxuXG4vLyBUeXBpbmcgYXMgaXQgc3Rvb2QgYnkgdGhlIGVuZCBvZiBHZW5lcmF0aW9uIElJSSAtIG5vIEZhaXJ5IHR5cGUsIHNpbmNlIGl0XG4vLyB3YXMgbm90IGludHJvZHVjZWQgdW50aWwgR2VuZXJhdGlvbiBWSSAoZS5nLiBDbGVmYWlyeS9Nci4gTWltZS9TbnViYnVsbFxuLy8gc3RheSBOb3JtYWwgaGVyZSwgbm90IEZhaXJ5KS5cbmV4cG9ydCBjb25zdCBlbnVtIFBva2Vtb25FbGVtZW50VHlwZSB7XG4gICAgbm9ybWFsID0gJ25vcm1hbCcsXG4gICAgZmlyZSA9ICdmaXJlJyxcbiAgICB3YXRlciA9ICd3YXRlcicsXG4gICAgZWxlY3RyaWMgPSAnZWxlY3RyaWMnLFxuICAgIGdyYXNzID0gJ2dyYXNzJyxcbiAgICBpY2UgPSAnaWNlJyxcbiAgICBmaWdodGluZyA9ICdmaWdodGluZycsXG4gICAgcG9pc29uID0gJ3BvaXNvbicsXG4gICAgZ3JvdW5kID0gJ2dyb3VuZCcsXG4gICAgZmx5aW5nID0gJ2ZseWluZycsXG4gICAgcHN5Y2hpYyA9ICdwc3ljaGljJyxcbiAgICBidWcgPSAnYnVnJyxcbiAgICByb2NrID0gJ3JvY2snLFxuICAgIGdob3N0ID0gJ2dob3N0JyxcbiAgICBkcmFnb24gPSAnZHJhZ29uJyxcbiAgICBkYXJrID0gJ2RhcmsnLFxuICAgIHN0ZWVsID0gJ3N0ZWVsJyxcbn1cblxuZXhwb3J0IHR5cGUgUG9rZW1vblR5cGVTdHJpbmcgPSBzdHJpbmcgJiBrZXlvZiB0eXBlb2YgUE9LRU1PTl9EQVRBO1xuXG5leHBvcnQgdHlwZSBQb2tlbW9uVHlwZSA9IFBva2Vtb25UeXBlU3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBva2Vtb25Db25maWcge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uO1xuICAgIGNyeTogc3RyaW5nO1xuICAgIHBvc3NpYmxlQ29sb3JzOiBQb2tlbW9uQ29sb3JbXTtcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU/OiBudW1iZXIsXG4gICAgcmFyaXR5PzogUG9rZW1vblJhcml0eSxcbiAgICB0eXBlczogUG9rZW1vbkVsZW1lbnRUeXBlW10sXG59IiwiaW1wb3J0IHsgVXNlclBva2Vtb24gfSBmcm9tICcuLi9leHRlbnNpb24vdHlwZXMnXG5pbXBvcnQgeyBQT0tFTU9OX0RBVEEgfSBmcm9tICcuLi9jb21tb24vcG9rZW1vbi1kYXRhJ1xuaW1wb3J0IHsgUG9rZW1vbkNvbG9yLCBQb2tlbW9uR2VuZXJhdGlvbiB9IGZyb20gJy4uL2NvbW1vbi90eXBlcydcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBwb2tlY2hpQXBwOiB7XG4gICAgICBhcHA6IChjb25maWc6IHsgYmFzZVBva2Vtb25Vcmk6IHN0cmluZzsgdXNlclBva2Vtb246IFVzZXJQb2tlbW9uIHwgbnVsbCB9KSA9PiB2b2lkXG4gICAgfVxuICB9XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIHVzZXJQb2tlbW9uOiBVc2VyUG9rZW1vbiB8IG51bGxcbiAgYmFzZVBva2Vtb25Vcmk6IHN0cmluZ1xuICBpbnRlcnZhbElkOiBudW1iZXIgfCB1bmRlZmluZWRcbiAgaXNIb3ZlcmVkOiBib29sZWFuXG4gIGlkbGVVbnRpbDogbnVtYmVyXG59XG5cbmNvbnN0IHN0YXRlOiBTdGF0ZSA9IHtcbiAgdXNlclBva2Vtb246IG51bGwsXG4gIGJhc2VQb2tlbW9uVXJpOiAnJyxcbiAgaW50ZXJ2YWxJZDogdW5kZWZpbmVkLFxuICBpc0hvdmVyZWQ6IGZhbHNlLFxuICBpZGxlVW50aWw6IDAsXG59XG5cbmNvbnN0IFRJQ0tfSU5URVJWQUxfTVMgPSAxMDBcblxuLy8gSG93IGxvbmcgYSBwb2tlbW9uIHN0YW5kcyBzdGlsbCBhZnRlciBoYXRjaGluZyBvciBldm9sdmluZy4gV2l0aG91dCBpdCB0aGVcbi8vIGZpcnN0IHRpY2sgd291bGQgc2VuZCBpdCB3YWxraW5nIGJlZm9yZSB0aGUgaWRsZSBhbmltYXRpb24gaXMgZXZlciBzZWVuLlxuY29uc3QgSURMRV9BRlRFUl9DSEFOR0VfTVMgPSAxNTAwXG5cbi8vIEV2ZXJ5dGhpbmcgdGhhdCBkZWNpZGVzIGhvdyB0aGUgc3ByaXRlIGxvb2tzLiBYUCB1cGRhdGVzIGFycml2ZSBzZXZlcmFsIHRpbWVzXG4vLyBhIHNlY29uZCBhbmQgY2hhbmdlIG5vbmUgb2YgaXQsIHNvIHRoZSBET00gd29yayBjYW4gYmUgc2tpcHBlZC5cbmZ1bmN0aW9uIHZpc3VhbFNpZ25hdHVyZShwb2tlbW9uOiBVc2VyUG9rZW1vbiB8IG51bGwpOiBzdHJpbmcge1xuICBpZiAoIXBva2Vtb24pIHtcbiAgICByZXR1cm4gJ25vbmUnXG4gIH1cbiAgcmV0dXJuIFtcbiAgICBwb2tlbW9uLnR5cGUsXG4gICAgcG9rZW1vbi5sZXZlbCxcbiAgICBwb2tlbW9uLnN0YXRlLFxuICAgIHBva2Vtb24uc2NhbGUsXG4gICAgcG9rZW1vbi5pc0hvdmVyZWQgPyAxIDogMCxcbiAgICBwb2tlbW9uLmlzVHJhbnNpdGlvbkluID8gMSA6IDAsXG4gICAgcG9rZW1vbi5jb2xvcixcbiAgXS5qb2luKCd8Jylcbn1cblxubGV0IGxhc3RSZW5kZXJlZFNpZ25hdHVyZSA9ICcnXG4vLyBJZGVudGlmaWVzIHdoaWNoIHJldmVhbCBoYXMgYWxyZWFkeSBwbGF5ZWQgaXRzIGZsYXNoL3NwYXJrbGUvY3J5LCBzbyBhXG4vLyBob3Zlci1kcml2ZW4gcmUtcmVuZGVyIHdpdGhpbiB0aGUgc2FtZSByZXZlYWwncyAxcyB3aW5kb3cgaXMgcmVjb2duaXplZFxuLy8gYXMgdGhlIHNhbWUgcmV2ZWFsIGluc3RlYWQgb2YgcmVwbGF5aW5nIGl0LiBTZWUgdXBkYXRlUG9rZW1vbkRpc3BsYXkuXG5sZXQgbGFzdFJldmVhbEtleSA9ICcnXG5jb25zdCBQT0tFQkFMTF9TSVpFID0gMzJcbmNvbnN0IFBPS0VNT05fQkFTRV9TSVpFID0gNTAgLy8gSW5jcmVhc2VkIGJ5IDIwJSAoMzIgKiAxLjIgPSAzOC40KVxuXG5mdW5jdGlvbiBnZXRQb2tlbW9uU3ByaXRlUGF0aChwb2tlbW9uOiBVc2VyUG9rZW1vbiwgaXNJZGxlID0gZmFsc2UpOiBzdHJpbmcge1xuICBpZiAocG9rZW1vbi5sZXZlbCA9PT0gMCkge1xuICAgIHJldHVybiAncG9rZWJhbGwuZ2lmJ1xuICB9XG4gIGNvbnN0IHBva2Vtb25UeXBlID0gcG9rZW1vbi50eXBlXG4gIGNvbnN0IHBva2Vtb25EYXRhID0gUE9LRU1PTl9EQVRBW3Bva2Vtb25UeXBlXVxuICBcbiAgaWYgKCFwb2tlbW9uRGF0YSkge1xuICAgIHJldHVybiAncG9rZWJhbGwuZ2lmJ1xuICB9XG4gIFxuICBsZXQgZ2VuZXJhdGlvbiA9ICdnZW4xJ1xuICBpZiAocG9rZW1vbkRhdGEuZ2VuZXJhdGlvbiA9PT0gUG9rZW1vbkdlbmVyYXRpb24uR2VuMikge1xuICAgIGdlbmVyYXRpb24gPSAnZ2VuMidcbiAgfSBlbHNlIGlmIChwb2tlbW9uRGF0YS5nZW5lcmF0aW9uID09PSBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zKSB7XG4gICAgZ2VuZXJhdGlvbiA9ICdnZW4zJ1xuICB9IGVsc2UgaWYgKHBva2Vtb25EYXRhLmdlbmVyYXRpb24gPT09IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQpIHtcbiAgICBnZW5lcmF0aW9uID0gJ2dlbjQnXG4gIH1cblxuICBjb25zdCBjb2xvclByZWZpeCA9IHBva2Vtb24uY29sb3IgPT09IFBva2Vtb25Db2xvci5zaGlueSA/ICdzaGlueScgOiAnZGVmYXVsdCdcbiAgY29uc3QgYW5pbWF0aW9uID0gaXNJZGxlID8gYCR7Y29sb3JQcmVmaXh9X2lkbGVfOGZwcy5naWZgIDogYCR7Y29sb3JQcmVmaXh9X3dhbGtfOGZwcy5naWZgXG4gIHJldHVybiBgJHtnZW5lcmF0aW9ufS8ke3Bva2Vtb25UeXBlfS8ke2FuaW1hdGlvbn1gXG59XG5cbmZ1bmN0aW9uIGdldEdlbmVyYXRpb25Gb2xkZXIocG9rZW1vblR5cGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHBva2Vtb25EYXRhID0gUE9LRU1PTl9EQVRBW3Bva2Vtb25UeXBlXVxuICBpZiAocG9rZW1vbkRhdGE/LmdlbmVyYXRpb24gPT09IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIpIHtcbiAgICByZXR1cm4gJ2dlbjInXG4gIH0gZWxzZSBpZiAocG9rZW1vbkRhdGE/LmdlbmVyYXRpb24gPT09IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMpIHtcbiAgICByZXR1cm4gJ2dlbjMnXG4gIH0gZWxzZSBpZiAocG9rZW1vbkRhdGE/LmdlbmVyYXRpb24gPT09IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQpIHtcbiAgICByZXR1cm4gJ2dlbjQnXG4gIH1cbiAgcmV0dXJuICdnZW4xJ1xufVxuXG4vLyBBIGZyZXNoIEhUTUxBdWRpb0VsZW1lbnQgcmUtY2hlY2tzIHRoZSBicm93c2VyJ3MgYXV0b3BsYXkgZ2VzdHVyZSBwb2xpY3lcbi8vIG9uIGV2ZXJ5IHNpbmdsZSAucGxheSgpIGNhbGwsIHdoaWNoIGlzIHdoYXQgbWFkZSBoYXRjaC9ldm9sdmUvUG9rZWRleC1waWNrXG4vLyBjcmllcyAobmV2ZXIgdHJpZ2dlcmVkIGZyb20gYSBkaXJlY3QgY2xpY2spIHVucmVsaWFibGUgZXZlbiBhZnRlciBhIHJlYWxcbi8vIGNsaWNrIGhhZCBhbHJlYWR5IHBsYXllZCBvbmUgc3VjY2Vzc2Z1bGx5LiBBIFdlYiBBdWRpbyBBdWRpb0NvbnRleHQgb25seVxuLy8gbmVlZHMgdGhhdCBnZXN0dXJlIG9uY2UsIHRvIG1vdmUgb3V0IG9mIFwic3VzcGVuZGVkXCI6IG9uY2UgcnVubmluZywgcGxheWluZ1xuLy8gYSBidWZmZXIgdGhyb3VnaCBpdCBmcm9tIGFueXdoZXJlIC0gYSBtZXNzYWdlIGhhbmRsZXIsIGEgdGltZXIgLSB3b3Jrc1xuLy8gdGhlIHNhbWUgYXMgaWYgYSBjbGljayBoYWQgdHJpZ2dlcmVkIGl0LiBDcmVhdGVkIGxhemlseSAoY29uc3RydWN0aW5nIG9uZVxuLy8gbmVlZHMgbm8gZ2VzdHVyZSkgYW5kIHJldXNlZCBmb3IgZXZlcnkgY3J5IGZyb20gaGVyZSBvbi5cbmxldCBhdWRpb0NvbnRleHQ6IEF1ZGlvQ29udGV4dCB8IHVuZGVmaW5lZFxuY29uc3QgY3J5QnVmZmVyQ2FjaGU6IFJlY29yZDxzdHJpbmcsIEF1ZGlvQnVmZmVyPiA9IHt9XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRDcnlCdWZmZXIocG9rZW1vblR5cGU6IHN0cmluZywgY3R4OiBBdWRpb0NvbnRleHQpOiBQcm9taXNlPEF1ZGlvQnVmZmVyPiB7XG4gIGNvbnN0IGNhY2hlZCA9IGNyeUJ1ZmZlckNhY2hlW3Bva2Vtb25UeXBlXVxuICBpZiAoY2FjaGVkKSB7XG4gICAgcmV0dXJuIGNhY2hlZFxuICB9XG4gIGNvbnN0IGNyeVBhdGggPSBgJHtnZXRHZW5lcmF0aW9uRm9sZGVyKHBva2Vtb25UeXBlKX0vJHtwb2tlbW9uVHlwZX0vY3J5Lm1wM2BcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtzdGF0ZS5iYXNlUG9rZW1vblVyaX0vJHtjcnlQYXRofWApXG4gIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKVxuICBjb25zdCBidWZmZXIgPSBhd2FpdCBjdHguZGVjb2RlQXVkaW9EYXRhKGFycmF5QnVmZmVyKVxuICBjcnlCdWZmZXJDYWNoZVtwb2tlbW9uVHlwZV0gPSBidWZmZXJcbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG4vLyBQbGF5cyBhIGNyeSBmb3Igd2hpY2hldmVyIHNwZWNpZXMgaXMgY2xpY2tlZC4gTG9nZ2VkIHJhdGhlciB0aGFuIHNpbGVudGx5XG4vLyBzd2FsbG93ZWQgLSBhIGNvbnRleHQgdGhhdCBoYXMgbmV2ZXIgYmVlbiByZXN1bWVkIGJ5IGEgZ2VudWluZSB1c2VyXG4vLyBnZXN0dXJlIGFueXdoZXJlIGluIHRoaXMgZnJhbWUgc3RpbGwgY2Fubm90IHByb2R1Y2Ugc291bmQsIGFuZCB0aGlzIGlzXG4vLyB0aGUgb25seSB3YXkgdG8gdGVsbCB0aGF0IGFwYXJ0IGZyb20gYSByZWFsIGJ1Zy5cbmFzeW5jIGZ1bmN0aW9uIHBsYXlDcnkocG9rZW1vblR5cGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICB0cnkge1xuICAgIGlmICghYXVkaW9Db250ZXh0KSB7XG4gICAgICBhdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KClcbiAgICB9XG4gICAgY29uc3QgY3R4ID0gYXVkaW9Db250ZXh0XG4gICAgaWYgKGN0eC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHtcbiAgICAgIGF3YWl0IGN0eC5yZXN1bWUoKVxuICAgIH1cbiAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBsb2FkQ3J5QnVmZmVyKHBva2Vtb25UeXBlLCBjdHgpXG4gICAgY29uc3Qgc291cmNlID0gY3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpXG4gICAgc291cmNlLmJ1ZmZlciA9IGJ1ZmZlclxuICAgIHNvdXJjZS5jb25uZWN0KGN0eC5kZXN0aW5hdGlvbilcbiAgICBzb3VyY2Uuc3RhcnQoMClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS53YXJuKCdbcG9rZWNoaV0gY291bGQgbm90IHBsYXkgY3J5IGZvciAnICsgcG9rZW1vblR5cGUgKyAnOicsIGVycilcbiAgfVxufVxuXG4vLyBIb2xkaW5nIHRoZSBtb3VzZSBkb3duIGFuZCBjbGlja2luZyByZXBlYXRlZGx5IHdvdWxkIG90aGVyd2lzZSBzdGFjayB1cFxuLy8gb25lIG92ZXJsYXBwaW5nIGNyeSBwZXIgY2xpY2sgLSB0aGlzIGNhcHMgaXQgdG8gb25lIGV2ZXJ5IDUwMG1zLlxuY29uc3QgQ1JZX0NMSUNLX1RIUk9UVExFX01TID0gMTUwMFxubGV0IGxhc3RDcnlDbGlja1RpbWUgPSAwXG5cbi8vIE5vdCBhIFBva2ViYWxsIHdpdGggbm90aGluZyBoYXRjaGVkIHlldCwgYW5kIG5vdCBhIHNuYXBzaG90IGJyb3VnaHQgb3V0XG4vLyByZWFkLW9ubHkgZnJvbSB0aGUgUG9rZWRleCBtaWQtdHJhbnNpdGlvbiAtIGEgcGxhaW4gY2xpY2sgd2hpbGUgdGhlIHdhbGtcbi8vIGxvb3AgaXMgcnVubmluZyBpcyB0aGUgb25seSB0aW1lIHRoaXMgZmlyZXMuIEFsd2F5cyBwbGF5cyByZWdhcmRsZXNzIG9mXG4vLyBwb2tlY2hpLnBsYXlDcnlTb3VuZHM6IHRoYXQgc2V0dGluZyBvbmx5IGNvdmVycyB0aGUgYXV0b21hdGljIFBva2VkZXgtcGlja1xuLy8gcmV2ZWFsLCBub3QgYSBjbGljayB0aGUgdXNlciBhc2tlZCBmb3IgZGlyZWN0bHkuXG5mdW5jdGlvbiBwbGF5Q3J5T25DbGljayhwb2tlbW9uOiBVc2VyUG9rZW1vbiB8IG51bGwpOiB2b2lkIHtcbiAgaWYgKCFwb2tlbW9uIHx8IHBva2Vtb24ubGV2ZWwgPT09IDApIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gIGlmIChub3cgLSBsYXN0Q3J5Q2xpY2tUaW1lIDwgQ1JZX0NMSUNLX1RIUk9UVExFX01TKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgbGFzdENyeUNsaWNrVGltZSA9IG5vd1xuICBwbGF5Q3J5KHBva2Vtb24udHlwZSlcbiAgcGxheVNvdW5kV2F2ZUJ1cnN0KHBva2Vtb24uc2NhbGUpXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBva2Vtb25EaXNwbGF5KHBva2Vtb246IFVzZXJQb2tlbW9uIHwgbnVsbCk6IHZvaWQge1xuICBjb25zdCBwb2tlbW9uSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bva2Vtb24nKSBhcyBIVE1MSW1hZ2VFbGVtZW50XG4gIGNvbnN0IHBva2Vtb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZW1vbi1jb250YWluZXInKVxuXG4gIGlmICghcG9rZW1vbkltZyB8fCAhcG9rZW1vbkNvbnRhaW5lcikge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3Qgc2lnbmF0dXJlID0gdmlzdWFsU2lnbmF0dXJlKHBva2Vtb24pXG4gIGlmIChzaWduYXR1cmUgPT09IGxhc3RSZW5kZXJlZFNpZ25hdHVyZSkge1xuICAgIHJldHVyblxuICB9XG4gIGxhc3RSZW5kZXJlZFNpZ25hdHVyZSA9IHNpZ25hdHVyZVxuXG4gIGlmICghcG9rZW1vbiB8fCBwb2tlbW9uLmxldmVsID09PSAwKSB7XG4gICAgcG9rZW1vbkltZy5zcmMgPSBgJHtzdGF0ZS5iYXNlUG9rZW1vblVyaX0vcG9rZWJhbGwuZ2lmYFxuICAgIHBva2Vtb25JbWcud2lkdGggPSBQT0tFQkFMTF9TSVpFXG4gICAgcG9rZW1vbkltZy5oZWlnaHQgPSBQT0tFQkFMTF9TSVpFXG4gICAgcG9rZW1vbkltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgaXNJZGxlID0gcG9rZW1vbi5zdGF0ZSA9PT0gJ2lkbGUnIHx8IHBva2Vtb24uaXNIb3ZlcmVkXG4gIGNvbnN0IHNwcml0ZVBhdGggPSBnZXRQb2tlbW9uU3ByaXRlUGF0aChwb2tlbW9uLCBpc0lkbGUpXG4gIHBva2Vtb25JbWcuc3JjID0gYCR7c3RhdGUuYmFzZVBva2Vtb25Vcml9LyR7c3ByaXRlUGF0aH1gXG4gIHBva2Vtb25JbWcud2lkdGggPSBQT0tFTU9OX0JBU0VfU0laRSAqIHBva2Vtb24uc2NhbGVcbiAgcG9rZW1vbkltZy5oZWlnaHQgPSBQT0tFTU9OX0JBU0VfU0laRSAqIHBva2Vtb24uc2NhbGVcbiAgcG9rZW1vbkltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICBwb2tlbW9uSW1nLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJ3BpeGVsYXRlZCdcbiAgLy8gdGljaygpIHJlLWFwcGxpZXMgdGhpcyBzYW1lIGZsaXAgb24gaXRzIG93biAxMDBtcyBjYWRlbmNlLCBidXQgc2V0dGluZ1xuICAvLyBpdCBoZXJlIHRvbyBtZWFucyBhIHJlLXJlbmRlciBuZXZlciBoYXMgZXZlbiBhIGJyaWVmIHVuZmxpcHBlZCBmcmFtZVxuICAvLyBiZWZvcmUgdGhlIG5leHQgdGljayBjYXRjaGVzIHVwLlxuICBwb2tlbW9uSW1nLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZVgoJHtwb2tlbW9uLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/IDEgOiAtMX0pIHNjYWxlKCR7cG9rZW1vbi5zY2FsZX0pYFxuXG4gIC8vIGlzVHJhbnNpdGlvbkluIHN0YXlzIHRydWUgZm9yIGEgZnVsbCBzZWNvbmQgYWZ0ZXIgYSByZXZlYWwgKG1hdGNoaW5nIHRoZVxuICAvLyBzcGFya2xlIGFuaW1hdGlvbiBsZW5ndGgpIHNvIGEgc2hpbnkgaGFzIHRpbWUgdG8gc2hvdyBpdCwgYnV0IGhvdmVyaW5nXG4gIC8vIGR1cmluZyB0aGF0IHdpbmRvdyBjaGFuZ2VzIHRoZSBzaWduYXR1cmUgYWJvdmUgdG9vIChpdCBpcyBwYXJ0IG9mXG4gIC8vIHZpc3VhbFNpZ25hdHVyZSkgYW5kIHdvdWxkIG90aGVyd2lzZSByZS1lbnRlciB0aGlzIGJyYW5jaCBhbmQgcmVwbGF5IHRoZVxuICAvLyBzcGFya2xlIG9uIGV2ZXJ5IG1vdXNlIGluL291dC4gcmV2ZWFsS2V5IGlkZW50aWZpZXMgdGhlIHNwZWNpZmljIHJldmVhbFxuICAvLyBpbnN0ZWFkIG9mIGp1c3QgdGhlIGZsYWcsIHNvIGEgaG92ZXItZHJpdmVuIHJlLXJlbmRlciB3aXRoaW4gdGhlIHNhbWVcbiAgLy8gd2luZG93IGlzIHJlY29nbml6ZWQgYXMgdGhlIHNhbWUgcmV2ZWFsIGFuZCBza2lwcGVkLCB3aGlsZSBhIGdlbnVpbmVseVxuICAvLyBuZXcgb25lIChldmVuIG9mIHRoZSBzYW1lIHNwZWNpZXMsIG9uY2UgdGhlIHdpbmRvdyBoYXMgYWN0dWFsbHkgZWxhcHNlZFxuICAvLyBhbmQgcmVzZXQgaXQgYmVsb3cpIHN0aWxsIHBsYXlzLlxuICAvL1xuICAvLyBUaGVyZSB1c2VkIHRvIGJlIGEgc2Vjb25kIHNwcml0ZSBsYXllcmVkIG9uIHRvcCBoZXJlIGZvciBhIGJyaWVmIGZsYXNoLFxuICAvLyBwbHVzIGEgY3J5IGFuZCBhIHNvdW5kLXdhdmUgcmlwcGxlLCBvbiBldmVyeSByZXZlYWwgKGhhdGNoLCBldm9sdmUsIGFcbiAgLy8gUG9rZWRleCBwaWNrKS4gQm90aCB0dXJuZWQgb3V0IHRvIG5vdCBiZSB3b3J0aCBrZWVwaW5nOiB0d28gaW5kZXBlbmRlbnRseVxuICAvLyBhbmltYXRlZCA8aW1nPiBjb3BpZXMgb2YgdGhlIHNhbWUgd2Fsa2luZyBHSUYgZHJpZnQgb3V0IG9mIGZyYW1lLXN5bmNcbiAgLy8gd2l0aCBlYWNoIG90aGVyIGFuZCB2aXNpYmx5IGRvdWJsZSB1cCBmb3IgYXMgbG9uZyBhcyB0aGUgcmV2ZWFsIGxhc3RlZCxcbiAgLy8gYW5kIHRoZSBjcnkgbmVlZGVkIGEgZGlyZWN0IGNsaWNrIG9uIHRoaXMgZXhhY3QgZnJhbWUgdG8gc3Vydml2ZSB0aGVcbiAgLy8gYnJvd3NlcidzIGF1dG9wbGF5IHBvbGljeSwgd2hpY2ggYSBoYXRjaCBvciBldm9sdmUgdHJpZ2dlcmVkIGZyb20gdHlwaW5nXG4gIC8vIGluIHRoZSBlZGl0b3IgbmV2ZXIgaGFzLiBQaWNraW5nIGEgcG9rZW1vbiBmcm9tIHRoZSBQb2tlZGV4IG5vdyBwbGF5cyBpdHNcbiAgLy8gY3J5IGRpcmVjdGx5IGZyb20gdGhhdCBjbGljayBpbnN0ZWFkIChzZWUgcG9rZWRleC1wYW5lbC50cyksIHdoaWNoIGhhc1xuICAvLyBuZWl0aGVyIHByb2JsZW0uXG4gIGNvbnN0IHJldmVhbEtleSA9IHBva2Vtb24uaXNUcmFuc2l0aW9uSW5cbiAgICA/IFtwb2tlbW9uLnR5cGUsIHBva2Vtb24ubGV2ZWwsIHBva2Vtb24uY29sb3JdLmpvaW4oJ3wnKVxuICAgIDogJydcbiAgY29uc3QgaXNOZXdSZXZlYWwgPSBwb2tlbW9uLmlzVHJhbnNpdGlvbkluICYmIHJldmVhbEtleSAhPT0gbGFzdFJldmVhbEtleVxuXG4gIGlmIChpc05ld1JldmVhbCkge1xuICAgIGxhc3RSZXZlYWxLZXkgPSByZXZlYWxLZXlcblxuICAgIGlmIChwb2tlbW9uLmNvbG9yID09PSBQb2tlbW9uQ29sb3Iuc2hpbnkpIHtcbiAgICAgIHBsYXlTcGFya2xlQnVyc3QocG9rZW1vbi5zY2FsZSlcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHBva2Vtb24uaXNUcmFuc2l0aW9uSW4gPSBmYWxzZVxuICAgICAgbGFzdFJldmVhbEtleSA9ICcnXG4gICAgfSwgMTAwMClcbiAgfVxufVxuXG4vLyBUd2lua2xlcyBhIHJpbmcgb2Ygc3BhcmtsZXMgYXJvdW5kIHRoZSBwb2tlbW9uIGZvciBhIHNoaW55IHJldmVhbCAoaGF0Y2hpbmcsXG4vLyBldm9sdmluZywgb3IgYmVpbmcgYnJvdWdodCBvdXQgb2YgdGhlIFBva2VkZXggYWxyZWFkeSBzaGlueSkuXG5mdW5jdGlvbiBwbGF5U3BhcmtsZUJ1cnN0KHNjYWxlOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgYnVyc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpbnktYnVyc3QnKVxuICBpZiAoIWJ1cnN0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBidXJzdC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZX0pYFxuICAvLyBBIHJlc3RhcnQgbmVlZHMgYSBmcmVzaCBhbmltYXRpb24sIG5vdCBqdXN0IHRoZSBjbGFzcyByZS1hZGRlZDogcmVtb3ZpbmdcbiAgLy8gYW5kIHJlLWFkZGluZyBpdCBpbiB0aGUgc2FtZSB0aWNrIHdvdWxkIGJlIGEgbm8tb3AsIHNvIHRoZSByZWZsb3cgaW5cbiAgLy8gYmV0d2VlbiBmb3JjZXMgdGhlIGJyb3dzZXIgdG8gYWN0dWFsbHkgbm90aWNlIHRoZSBjbGFzcyB3YXMgZXZlciBnb25lLlxuICBidXJzdC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxuICB2b2lkIGJ1cnN0Lm9mZnNldFdpZHRoXG4gIGJ1cnN0LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpXG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYnVyc3QuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcbiAgfSwgMTAwMClcbn1cblxuLy8gUmlwcGxlcyBhIGZldyByaW5ncyBvdXQgZnJvbSB0aGUgcG9rZW1vbiB3aGVuZXZlciBhIGNsaWNrIHBsYXlzIGl0cyBjcnkuXG5mdW5jdGlvbiBwbGF5U291bmRXYXZlQnVyc3Qoc2NhbGU6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBidXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3VuZC13YXZlLWJ1cnN0JylcbiAgaWYgKCFidXJzdCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgYnVyc3Quc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7c2NhbGV9KWBcbiAgYnVyc3QuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcbiAgdm9pZCBidXJzdC5vZmZzZXRXaWR0aFxuICBidXJzdC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKVxuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJ1cnN0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXG4gIH0sIDEwMDApXG59XG5cbmZ1bmN0aW9uIHRpY2soKTogdm9pZCB7XG4gIGNvbnN0IHBva2Vtb24gPSBzdGF0ZS51c2VyUG9rZW1vblxuICBpZiAoIXBva2Vtb24gfHwgcG9rZW1vbi5sZXZlbCA9PT0gMCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gTGV0IHRoZSBpZGxlIGFuaW1hdGlvbiBwbGF5IGFmdGVyIGEgaGF0Y2ggb3IgYW4gZXZvbHV0aW9uLlxuICBpZiAoRGF0ZS5ub3coKSA8IHN0YXRlLmlkbGVVbnRpbCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gSWYgaG92ZXJlZCwgZG8gbm90IG1vdmVcbiAgaWYgKHN0YXRlLmlzSG92ZXJlZCkge1xuICAgIGlmIChwb2tlbW9uLnN0YXRlICE9PSAnaWRsZScpIHtcbiAgICAgIHBva2Vtb24uc3RhdGUgPSAnaWRsZSdcbiAgICAgIHVwZGF0ZVBva2Vtb25EaXNwbGF5KHBva2Vtb24pXG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gSWYgaXQgd2FzIGlkbGUgYmVjYXVzZSBvZiBob3Zlciwgc3dpdGNoIGJhY2sgdG8gd2Fsa2luZ1xuICBpZiAocG9rZW1vbi5zdGF0ZSA9PT0gJ2lkbGUnICYmICFzdGF0ZS5pc0hvdmVyZWQpIHtcbiAgICBwb2tlbW9uLnN0YXRlID0gJ3dhbGtpbmcnXG4gICAgdXBkYXRlUG9rZW1vbkRpc3BsYXkocG9rZW1vbilcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGhcbiAgY29uc3Qgc3BlZWQgPSAxXG4gIGNvbnN0IGRpcmVjdGlvbiA9IHBva2Vtb24uZGlyZWN0aW9uIHx8ICdyaWdodCdcbiAgbGV0IGxlZnRQb3NpdGlvbiA9IHBva2Vtb24ubGVmdFBvc2l0aW9uIHx8IDBcblxuICBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgbGVmdFBvc2l0aW9uICs9IHNwZWVkXG4gICAgaWYgKGxlZnRQb3NpdGlvbiA+IGNvbnRhaW5lcldpZHRoIC0gUE9LRU1PTl9CQVNFX1NJWkUgKiBwb2tlbW9uLnNjYWxlKSB7XG4gICAgICBwb2tlbW9uLmRpcmVjdGlvbiA9ICdsZWZ0J1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZWZ0UG9zaXRpb24gLT0gc3BlZWRcbiAgICBpZiAobGVmdFBvc2l0aW9uIDwgMCkge1xuICAgICAgcG9rZW1vbi5kaXJlY3Rpb24gPSAncmlnaHQnXG4gICAgfVxuICB9XG5cbiAgcG9rZW1vbi5sZWZ0UG9zaXRpb24gPSBsZWZ0UG9zaXRpb25cblxuICBjb25zdCBtb3ZlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZlbWVudC1jb250YWluZXInKVxuICBpZiAobW92ZW1lbnRDb250YWluZXIpIHtcbiAgICBtb3ZlbWVudENvbnRhaW5lci5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7bGVmdFBvc2l0aW9ufXB4YFxuICB9XG5cbiAgY29uc3QgcG9rZW1vbkltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlbW9uJykgYXMgSFRNTEltYWdlRWxlbWVudFxuICBpZiAocG9rZW1vbkltZykge1xuICAgIHBva2Vtb25JbWcuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlWCgke2RpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/IDEgOiAtMX0pIHNjYWxlKCR7cG9rZW1vbi5zY2FsZX0pYFxuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCk6IHZvaWQge1xuICBpZiAoc3RhdGUuaW50ZXJ2YWxJZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoc3RhdGUuaW50ZXJ2YWxJZClcbiAgfVxuICBzdGF0ZS5pbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICB0aWNrKClcbiAgfSwgVElDS19JTlRFUlZBTF9NUylcbn1cblxuZnVuY3Rpb24gc3RvcEFuaW1hdGlvbigpOiB2b2lkIHtcbiAgaWYgKHN0YXRlLmludGVydmFsSWQpIHtcbiAgICBjbGVhckludGVydmFsKHN0YXRlLmludGVydmFsSWQpXG4gICAgc3RhdGUuaW50ZXJ2YWxJZCA9IHVuZGVmaW5lZFxuICB9XG59XG5cbi8vIFRoZSBleHBsb3JlciB2aWV3IGtlZXBzIGl0cyBjb250ZXh0IHdoZW4gaGlkZGVuLCBzbyB3aXRob3V0IHRoaXMgdGhlIHdhbGtpbmdcbi8vIGxvb3Agd291bGQga2VlcCBydW5uaW5nIGFnYWluc3QgYSBwYW5lbCBub2JvZHkgaXMgbG9va2luZyBhdC5cbmZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKTogdm9pZCB7XG4gIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICBzdG9wQW5pbWF0aW9uKClcbiAgfSBlbHNlIGlmICghc3RhdGUuaW50ZXJ2YWxJZCkge1xuICAgIHN0YXJ0QW5pbWF0aW9uKClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXBwID0gKHtcbiAgdXNlclBva2Vtb24sXG4gIGJhc2VQb2tlbW9uVXJpLFxufToge1xuICB1c2VyUG9rZW1vbjogVXNlclBva2Vtb24gfCBudWxsXG4gIGJhc2VQb2tlbW9uVXJpOiBzdHJpbmdcbn0pOiB2b2lkID0+IHtcbiAgc3RhdGUuYmFzZVBva2Vtb25VcmkgPSBiYXNlUG9rZW1vblVyaVxuICBzdGF0ZS51c2VyUG9rZW1vbiA9IHVzZXJQb2tlbW9uXG5cbiAgdXBkYXRlUG9rZW1vbkRpc3BsYXkodXNlclBva2Vtb24pXG4gIHN0YXJ0QW5pbWF0aW9uKClcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSlcblxuICAvLyBBZGQgaG92ZXIgZXZlbnQgbGlzdGVuZXJzXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKVxuICBpZiAoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICBzdGF0ZS5pc0hvdmVyZWQgPSB0cnVlXG4gICAgICBpZiAoc3RhdGUudXNlclBva2Vtb24gJiYgc3RhdGUudXNlclBva2Vtb24ubGV2ZWwgPiAwKSB7XG4gICAgICAgIHN0YXRlLnVzZXJQb2tlbW9uLmlzSG92ZXJlZCA9IHRydWVcbiAgICAgICAgdXBkYXRlUG9rZW1vbkRpc3BsYXkoc3RhdGUudXNlclBva2Vtb24pXG4gICAgICB9XG4gICAgfSlcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgIHN0YXRlLmlzSG92ZXJlZCA9IGZhbHNlXG4gICAgICBpZiAoc3RhdGUudXNlclBva2Vtb24gJiYgc3RhdGUudXNlclBva2Vtb24ubGV2ZWwgPiAwKSB7XG4gICAgICAgIHN0YXRlLnVzZXJQb2tlbW9uLmlzSG92ZXJlZCA9IGZhbHNlXG4gICAgICAgIHN0YXRlLnVzZXJQb2tlbW9uLnN0YXRlID0gJ3dhbGtpbmcnXG4gICAgICAgIHVwZGF0ZVBva2Vtb25EaXNwbGF5KHN0YXRlLnVzZXJQb2tlbW9uKVxuICAgICAgfVxuICAgIH0pXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcGxheUNyeU9uQ2xpY2soc3RhdGUudXNlclBva2Vtb24pXG4gICAgfSlcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBjb21tYW5kLCBkYXRhIH0gPSBldmVudC5kYXRhXG4gICAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgICBjYXNlICdzcGF3bi1wb2tlbW9uJzpcbiAgICAgICAgaWYgKGRhdGEudXNlclBva2Vtb24pIHtcbiAgICAgICAgICBzdGF0ZS51c2VyUG9rZW1vbiA9IGRhdGEudXNlclBva2Vtb25cbiAgICAgICAgICBzdGF0ZS5pZGxlVW50aWwgPSAwXG4gICAgICAgICAgdXBkYXRlUG9rZW1vbkRpc3BsYXkoZGF0YS51c2VyUG9rZW1vbilcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICd1cGRhdGUtcG9rZW1vbic6IHtcbiAgICAgICAgaWYgKGRhdGEudXNlclBva2Vtb24pIHtcbiAgICAgICAgICBjb25zdCBwcmV2aW91c0xldmVsID0gc3RhdGUudXNlclBva2Vtb24/LmxldmVsID8/IDBcbiAgICAgICAgICBjb25zdCB1cGRhdGVkUG9rZW1vbiA9IHtcbiAgICAgICAgICAgIC4uLmRhdGEudXNlclBva2Vtb24sXG4gICAgICAgICAgICBsZWZ0UG9zaXRpb246IHN0YXRlLnVzZXJQb2tlbW9uPy5sZWZ0UG9zaXRpb24gfHwgMCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogc3RhdGUudXNlclBva2Vtb24/LmRpcmVjdGlvbiB8fCAncmlnaHQnLFxuICAgICAgICAgICAgaXNIb3ZlcmVkOiBzdGF0ZS5pc0hvdmVyZWQsXG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXRlLnVzZXJQb2tlbW9uID0gdXBkYXRlZFBva2Vtb25cblxuICAgICAgICAgIGlmICh1cGRhdGVkUG9rZW1vbi5sZXZlbCA+IHByZXZpb3VzTGV2ZWwpIHtcbiAgICAgICAgICAgIHN0YXRlLmlkbGVVbnRpbCA9IERhdGUubm93KCkgKyBJRExFX0FGVEVSX0NIQU5HRV9NU1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVwZGF0ZVBva2Vtb25EaXNwbGF5KHVwZGF0ZWRQb2tlbW9uKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG53aW5kb3cucG9rZWNoaUFwcCA9IHtcbiAgYXBwLFxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYW5lbC9tYWluLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==