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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUF5SDtBQUU1RyxvQkFBWSxHQUFxQztJQUM1RCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsa0ZBQXFEO0tBQzdEO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsWUFBWTtRQUNsQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsYUFBYTtRQUNsQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzQ0FBeUI7S0FDakM7SUFDRCxVQUFVLEVBQUU7UUFDVixFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxZQUFZO1FBQ2xCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxhQUFhO1FBQ2xCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHNDQUF5QjtLQUNqQztJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsZ0ZBQW9EO0tBQzVEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxvQ0FBd0I7S0FDaEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxvQ0FBd0I7S0FDaEM7SUFDRCxVQUFVLEVBQUU7UUFDVixFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxZQUFZO1FBQ2xCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxhQUFhO1FBQ2xCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOEVBQW1EO0tBQzNEO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxvRkFBc0Q7S0FDOUQ7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxvRkFBc0Q7S0FDOUQ7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELEtBQUssRUFBRTtRQUNMLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLE9BQU87UUFDYixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELEtBQUssRUFBRTtRQUNMLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLE9BQU87UUFDYixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhDQUE2QjtLQUNyQztJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhDQUE2QjtLQUNyQztJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELFlBQVksRUFBRTtRQUNaLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHNDQUF5QjtLQUNqQztJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsc0NBQXlCO0tBQ2pDO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsWUFBWTtRQUNsQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsYUFBYTtRQUNsQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxVQUFVLEVBQUU7UUFDVixFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxZQUFZO1FBQ2xCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxhQUFhO1FBQ2xCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELEtBQUssRUFBRTtRQUNMLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLE9BQU87UUFDYixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELEtBQUssRUFBRTtRQUNMLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLE9BQU87UUFDYixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsa0ZBQXFEO0tBQzdEO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsNEVBQWtEO0tBQzFEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0RUFBa0Q7S0FDMUQ7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhDQUE2QjtLQUNyQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOENBQTZCO0tBQ3JDO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzQ0FBeUI7S0FDakM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHNDQUF5QjtLQUNqQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzRkFBdUQ7S0FDL0Q7SUFDRCxJQUFJLEVBQUU7UUFDSixFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxNQUFNO1FBQ1osVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLE9BQU87UUFDWixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRDQUE0QjtLQUNwQztJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhDQUE2QjtLQUNyQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhDQUE2QjtLQUNyQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4Q0FBNkI7S0FDckM7SUFDRCxVQUFVLEVBQUU7UUFDVixFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxZQUFZO1FBQ2xCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxhQUFhO1FBQ2xCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELFVBQVUsRUFBRTtRQUNWLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFlBQVk7UUFDbEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLGFBQWE7UUFDbEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsa0ZBQXFEO0tBQzdEO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsWUFBWTtRQUNsQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsYUFBYTtRQUNsQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxrRkFBcUQ7S0FDN0Q7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELFVBQVUsRUFBRTtRQUNWLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFlBQVk7UUFDbEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLGFBQWE7UUFDbEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsa0ZBQXFEO0tBQzdEO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsZ0ZBQW9EO0tBQzVEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxnRkFBb0Q7S0FDNUQ7SUFDRCxLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxPQUFPO1FBQ2IsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxnRkFBb0Q7S0FDNUQ7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzQ0FBeUI7S0FDakM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHNDQUF5QjtLQUNqQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzRkFBdUQ7S0FDL0Q7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHNGQUF1RDtLQUMvRDtJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLGFBQWE7UUFDbkIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLGNBQWM7UUFDbkIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsSUFBSSxFQUFFO1FBQ0osRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxPQUFPO1FBQ1osY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsNEVBQWtEO0tBQzFEO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsS0FBSztRQUNYLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxNQUFNO1FBQ1gsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRFQUFrRDtLQUMxRDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELElBQUksRUFBRTtRQUNKLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLE1BQU07UUFDWixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsT0FBTztRQUNaLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGdGQUFvRDtLQUM1RDtJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRDQUE0QjtLQUNwQztJQUNELEtBQUssRUFBRTtRQUNMLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLE9BQU87UUFDYixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRDQUE0QjtLQUNwQztJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhDQUE2QjtLQUNyQztJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOENBQTZCO0tBQ3JDO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxvRkFBc0Q7S0FDOUQ7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOENBQTZCO0tBQ3JDO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsWUFBWTtRQUNsQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsYUFBYTtRQUNsQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4Q0FBNkI7S0FDckM7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGdGQUFvRDtLQUM1RDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGdGQUFvRDtLQUM1RDtJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELFVBQVUsRUFBRTtRQUNWLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFlBQVk7UUFDbEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLGFBQWE7UUFDbEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxJQUFJLEVBQUU7UUFDSixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLE9BQU87UUFDWixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxnRkFBb0Q7S0FDNUQ7SUFDRCxVQUFVLEVBQUU7UUFDVixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxZQUFZO1FBQ2xCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxhQUFhO1FBQ2xCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhDQUE2QjtLQUNyQztJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHNDQUF5QjtLQUNqQztJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9DQUF3QjtLQUNoQztJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxrRkFBcUQ7S0FDN0Q7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0RUFBa0Q7S0FDMUQ7SUFDRCxLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxPQUFPO1FBQ2IsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxPQUFPO1FBQ2IsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhDQUE2QjtLQUNyQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHNDQUF5QjtLQUNqQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSxxQ0FBc0I7UUFDNUIsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSxxQ0FBc0I7UUFDNUIsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSxxQ0FBc0I7UUFDNUIsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLHFDQUFzQjtRQUM1QixLQUFLLEVBQUUsOEVBQW1EO0tBQzNEO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsWUFBWTtRQUNsQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsYUFBYTtRQUNsQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0scUNBQXNCO1FBQzVCLEtBQUssRUFBRSxnRkFBb0Q7S0FDNUQ7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSxrREFBNEI7UUFDbEMsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSxrREFBNEI7UUFDbEMsS0FBSyxFQUFFLHdGQUF3RDtLQUNoRTtJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSxrREFBNEI7UUFDbEMsS0FBSyxFQUFFLGdGQUFvRDtLQUM1RDtJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxvRkFBc0Q7S0FDOUQ7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0sMkNBQXlCO1FBQy9CLEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxHQUFHLEVBQUU7UUFDSCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxLQUFLO1FBQ1gsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLE1BQU07UUFDWCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0seUNBQXdCO1FBQzlCLEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxlQUFlO0lBQ2YsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsc0NBQXlCO0tBQ2pDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsc0NBQXlCO0tBQ2pDO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsWUFBWTtRQUNsQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsYUFBYTtRQUNsQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzQ0FBeUI7S0FDakM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsWUFBWTtRQUNsQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsYUFBYTtRQUNsQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOEVBQW1EO0tBQzNEO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOEVBQW1EO0tBQzNEO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzRkFBdUQ7S0FDL0Q7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzRkFBdUQ7S0FDL0Q7SUFDRCxLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxPQUFPO1FBQ2IsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4Q0FBNkI7S0FDckM7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELElBQUksRUFBRTtRQUNKLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsT0FBTztRQUNaLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHNGQUF1RDtLQUMvRDtJQUNELElBQUksRUFBRTtRQUNKLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsT0FBTztRQUNaLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHNGQUF1RDtLQUMvRDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhDQUE2QjtLQUNyQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhDQUE2QjtLQUNyQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOENBQTZCO0tBQ3JDO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsc0NBQXlCO0tBQ2pDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxrRkFBcUQ7S0FDN0Q7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsa0ZBQXFEO0tBQzdEO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxPQUFPO1FBQ2IsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxrRkFBcUQ7S0FDN0Q7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRDQUE0QjtLQUNwQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHNDQUF5QjtLQUNqQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGdGQUFvRDtLQUM1RDtJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsWUFBWTtRQUNsQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsYUFBYTtRQUNsQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRDQUE0QjtLQUNwQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRDQUE0QjtLQUNwQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRDQUE0QjtLQUNwQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRDQUE0QjtLQUNwQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRDQUE0QjtLQUNwQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRDQUE0QjtLQUNwQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRDQUE0QjtLQUNwQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRDQUE0QjtLQUNwQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRDQUE0QjtLQUNwQztJQUNELGlCQUFpQixFQUFFO1FBQ2pCLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHNGQUF1RDtLQUMvRDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9DQUF3QjtLQUNoQztJQUNELFVBQVUsRUFBRTtRQUNWLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFlBQVk7UUFDbEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLGFBQWE7UUFDbEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsNEVBQWtEO0tBQzFEO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxvRkFBc0Q7S0FDOUQ7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELGtCQUFrQixFQUFFLEVBQUU7UUFDdEIsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRFQUFrRDtLQUMxRDtJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBFQUFpRDtLQUN6RDtJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsa0ZBQXFEO0tBQzdEO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMEVBQWlEO0tBQ3pEO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHNDQUF5QjtLQUNqQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsNEVBQWtEO0tBQzFEO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOEVBQW1EO0tBQzNEO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxrRkFBcUQ7S0FDN0Q7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsNEVBQWtEO0tBQzFEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0RUFBa0Q7S0FDMUQ7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxrRkFBcUQ7S0FDN0Q7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4Q0FBNkI7S0FDckM7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhDQUE2QjtLQUNyQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsZ0ZBQW9EO0tBQzVEO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOENBQTZCO0tBQ3JDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsc0NBQXlCO0tBQ2pDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLGtEQUE0QjtRQUNsQyxLQUFLLEVBQUUsOENBQTZCO0tBQ3JDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLGtEQUE0QjtRQUNsQyxLQUFLLEVBQUUsc0NBQXlCO0tBQ2pDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLGtEQUE0QjtRQUNsQyxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxnRkFBb0Q7S0FDNUQ7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxnRkFBb0Q7S0FDNUQ7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRFQUFrRDtLQUMxRDtJQUNELEtBQUssRUFBRTtRQUNMLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLE9BQU87UUFDYixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSwyQ0FBeUI7UUFDL0Isa0JBQWtCLEVBQUUsRUFBRTtRQUN0QixLQUFLLEVBQUUsc0ZBQXVEO0tBQy9EO0lBQ0QsSUFBSSxFQUFFO1FBQ0osRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLDJDQUF5QjtRQUMvQixrQkFBa0IsRUFBRSxFQUFFO1FBQ3RCLEtBQUssRUFBRSxnRkFBb0Q7S0FDNUQ7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0seUNBQXdCO1FBQzlCLEtBQUssRUFBRSxvRkFBc0Q7S0FDOUQ7SUFDRCxlQUFlO0lBQ2YsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzQ0FBeUI7S0FDakM7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxrRkFBcUQ7S0FDN0Q7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsc0NBQXlCO0tBQ2pDO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzQ0FBeUI7S0FDakM7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9DQUF3QjtLQUNoQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9DQUF3QjtLQUNoQztJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOEVBQW1EO0tBQzNEO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0NBQXdCO0tBQ2hDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOEVBQW1EO0tBQzNEO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsZ0ZBQW9EO0tBQzVEO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsZ0ZBQW9EO0tBQzVEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxnRkFBb0Q7S0FDNUQ7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxvRkFBc0Q7S0FDOUQ7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxvRkFBc0Q7S0FDOUQ7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxrRkFBcUQ7S0FDN0Q7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELEtBQUssRUFBRTtRQUNMLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLE9BQU87UUFDYixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRDQUE0QjtLQUNwQztJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRDQUE0QjtLQUNwQztJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsNEVBQWtEO0tBQzFEO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsWUFBWTtRQUNsQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsYUFBYTtRQUNsQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHNGQUF1RDtLQUMvRDtJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOEVBQW1EO0tBQzNEO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOEVBQW1EO0tBQzNEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0RUFBa0Q7S0FDMUQ7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhDQUE2QjtLQUNyQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOENBQTZCO0tBQ3JDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzQ0FBeUI7S0FDakM7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELElBQUksRUFBRTtRQUNKLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsT0FBTztRQUNaLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMEZBQXlEO0tBQ2pFO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwRkFBeUQ7S0FDakU7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhDQUE2QjtLQUNyQztJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOENBQTZCO0tBQ3JDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOENBQTZCO0tBQ3JDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOENBQTZCO0tBQ3JDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0NBQXdCO0tBQ2hDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxvQ0FBd0I7S0FDaEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxrRkFBcUQ7S0FDN0Q7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOEVBQW1EO0tBQzNEO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxrQkFBa0IsRUFBRSxFQUFFO1FBQ3RCLEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxPQUFPO1FBQ2IsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxnRkFBb0Q7S0FDNUQ7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGdGQUFvRDtLQUM1RDtJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHNDQUF5QjtLQUNqQztJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRDQUE0QjtLQUNwQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRDQUE0QjtLQUNwQztJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxvRkFBc0Q7S0FDOUQ7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxvRkFBc0Q7S0FDOUQ7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsa0ZBQXFEO0tBQzdEO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsa0ZBQXFEO0tBQzdEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxrRkFBcUQ7S0FDN0Q7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzRkFBdUQ7S0FDL0Q7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzRkFBdUQ7S0FDL0Q7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0scUNBQXNCO1FBQzVCLEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0scUNBQXNCO1FBQzVCLEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0scUNBQXNCO1FBQzVCLEtBQUssRUFBRSwwRUFBaUQ7S0FDekQ7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0scUNBQXNCO1FBQzVCLEtBQUssRUFBRSwwRUFBaUQ7S0FDekQ7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsa0ZBQXFEO0tBQzdEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxPQUFPO1FBQ2IsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzQ0FBeUI7S0FDakM7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxvQ0FBd0I7S0FDaEM7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxvQ0FBd0I7S0FDaEM7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0RUFBa0Q7S0FDMUQ7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0RUFBa0Q7S0FDMUQ7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0RUFBa0Q7S0FDMUQ7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxPQUFPO1FBQ2IsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0sa0RBQTRCO1FBQ2xDLEtBQUssRUFBRSxzQ0FBeUI7S0FDakM7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0sa0RBQTRCO1FBQ2xDLEtBQUssRUFBRSxvQ0FBd0I7S0FDaEM7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSxrREFBNEI7UUFDbEMsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSxrREFBNEI7UUFDbEMsS0FBSyxFQUFFLHNGQUF1RDtLQUMvRDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSxrREFBNEI7UUFDbEMsS0FBSyxFQUFFLHNGQUF1RDtLQUMvRDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSwyQ0FBeUI7UUFDL0Isa0JBQWtCLEVBQUUsRUFBRTtRQUN0QixLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLDJDQUF5QjtRQUMvQixrQkFBa0IsRUFBRSxFQUFFO1FBQ3RCLEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSwyQ0FBeUI7UUFDL0Isa0JBQWtCLEVBQUUsRUFBRTtRQUN0QixLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLHlDQUF3QjtRQUM5QixLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLHlDQUF3QjtRQUM5QixLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsWUFBWSxFQUFFO1FBQ1osRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLHlDQUF3QjtRQUM5QixLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLHlDQUF3QjtRQUM5QixLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLHlDQUF3QjtRQUM5QixLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsZUFBZTtJQUNmLE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsa0ZBQXFEO0tBQzdEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzQ0FBeUI7S0FDakM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGdGQUFvRDtLQUM1RDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxvRkFBc0Q7S0FDOUQ7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxrRkFBcUQ7S0FDN0Q7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9DQUF3QjtLQUNoQztJQUNELFVBQVUsRUFBRTtRQUNWLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFlBQVk7UUFDbEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLGFBQWE7UUFDbEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0NBQXdCO0tBQ2hDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOENBQTZCO0tBQ3JDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOENBQTZCO0tBQ3JDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOENBQTZCO0tBQ3JDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsa0ZBQXFEO0tBQzdEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxrRkFBcUQ7S0FDN0Q7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSxxQ0FBc0I7UUFDNUIsS0FBSyxFQUFFLHNDQUF5QjtLQUNqQztJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLHFDQUFzQjtRQUM1QixLQUFLLEVBQUUsc0NBQXlCO0tBQ2pDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0scUNBQXNCO1FBQzVCLEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSxxQ0FBc0I7UUFDNUIsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELFdBQVcsRUFBRTtRQUNYLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLGVBQWU7UUFDckIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxvQ0FBd0I7S0FDaEM7SUFDRCxXQUFXLEVBQUU7UUFDWCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxlQUFlO1FBQ3JCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0NBQXdCO0tBQ2hDO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsZUFBZTtRQUNyQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9DQUF3QjtLQUNoQztJQUNELGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0RUFBa0Q7S0FDMUQ7SUFDRCxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOEVBQW1EO0tBQzNEO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRFQUFrRDtLQUMxRDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELGFBQWEsRUFBRTtRQUNiLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELFdBQVcsRUFBRTtRQUNYLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLGVBQWU7UUFDckIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOENBQTZCO0tBQ3JDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxZQUFZLEVBQUU7UUFDWixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxZQUFZLEVBQUU7UUFDWixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsa0ZBQXFEO0tBQzdEO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsa0ZBQXFEO0tBQzdEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxrRkFBcUQ7S0FDN0Q7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsZ0ZBQW9EO0tBQzVEO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxnRkFBb0Q7S0FDNUQ7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGdGQUFvRDtLQUM1RDtJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsc0NBQXlCO0tBQ2pDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxvRkFBc0Q7S0FDOUQ7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELEtBQUssRUFBRTtRQUNMLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLE9BQU87UUFDYixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLG9GQUFzRDtLQUM5RDtJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxPQUFPO1FBQ2IsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4Q0FBNkI7S0FDckM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzRkFBdUQ7S0FDL0Q7SUFDRCxVQUFVLEVBQUU7UUFDVixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxZQUFZO1FBQ2xCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxhQUFhO1FBQ2xCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOEVBQW1EO0tBQzNEO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsZ0ZBQW9EO0tBQzVEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3RkFBd0Q7S0FDaEU7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHdGQUF3RDtLQUNoRTtJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxrRkFBcUQ7S0FDN0Q7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw0RUFBa0Q7S0FDMUQ7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRFQUFrRDtLQUMxRDtJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBFQUFpRDtLQUN6RDtJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsc0ZBQXVEO0tBQy9EO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsWUFBWTtRQUNsQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsYUFBYTtRQUNsQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLGdGQUFvRDtLQUM1RDtJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsWUFBWTtRQUNsQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsYUFBYTtRQUNsQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4Q0FBNkI7S0FDckM7SUFDRCxTQUFTLEVBQUU7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHNDQUF5QjtLQUNqQztJQUNELFFBQVEsRUFBRTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFVBQVU7UUFDaEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOEVBQW1EO0tBQzNEO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0NBQXdCO0tBQ2hDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsb0ZBQXNEO0tBQzlEO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSw4RUFBbUQ7S0FDM0Q7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDBGQUF5RDtLQUNqRTtJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsOEVBQW1EO0tBQzNEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsVUFBVTtRQUNoQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLDRFQUFrRDtLQUMxRDtJQUNELEtBQUssRUFBRTtRQUNMLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLE9BQU87UUFDYixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHNGQUF1RDtLQUMvRDtJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLGFBQWE7UUFDbkIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzRkFBdUQ7S0FDL0Q7SUFDRCxXQUFXLEVBQUU7UUFDWCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxlQUFlO1FBQ3JCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsc0ZBQXVEO0tBQy9EO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsY0FBYztRQUNwQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsUUFBUTtRQUNiLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsS0FBSyxFQUFFLHNGQUF1RDtLQUMvRDtJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLGFBQWE7UUFDbkIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFFBQVE7UUFDYixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELEtBQUssRUFBRSxzRkFBdUQ7S0FDL0Q7SUFDRCxVQUFVLEVBQUU7UUFDVixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxjQUFjO1FBQ3BCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxLQUFLLEVBQUUsc0ZBQXVEO0tBQy9EO0lBQ0QsSUFBSSxFQUFFO1FBQ0osRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsTUFBTTtRQUNaLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxPQUFPO1FBQ1osY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLGtEQUE0QjtRQUNsQyxLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLGtEQUE0QjtRQUNsQyxLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLGtEQUE0QjtRQUNsQyxLQUFLLEVBQUUsNENBQTRCO0tBQ3BDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLDJDQUF5QjtRQUMvQixrQkFBa0IsRUFBRSxFQUFFO1FBQ3RCLEtBQUssRUFBRSxrRkFBcUQ7S0FDN0Q7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0sMkNBQXlCO1FBQy9CLGtCQUFrQixFQUFFLEVBQUU7UUFDdEIsS0FBSyxFQUFFLGtGQUFxRDtLQUM3RDtJQUNELE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsVUFBVTtRQUNmLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSwyQ0FBeUI7UUFDL0IsS0FBSyxFQUFFLDhFQUFtRDtLQUMzRDtJQUNELFNBQVMsRUFBRTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFdBQVc7UUFDakIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFlBQVk7UUFDakIsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLDJDQUF5QjtRQUMvQixrQkFBa0IsRUFBRSxFQUFFO1FBQ3RCLEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxVQUFVO1FBQ2hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSwyQ0FBeUI7UUFDL0Isa0JBQWtCLEVBQUUsRUFBRTtRQUN0QixLQUFLLEVBQUUsa0ZBQXFEO0tBQzdEO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsbUJBQW1CO1FBQ3pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSwyQ0FBeUI7UUFDL0Isa0JBQWtCLEVBQUUsRUFBRTtRQUN0QixLQUFLLEVBQUUsa0ZBQXFEO0tBQzdEO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsV0FBVztRQUNqQixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsWUFBWTtRQUNqQixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0sMkNBQXlCO1FBQy9CLEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0seUNBQXdCO1FBQzlCLEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0seUNBQXdCO1FBQzlCLEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0seUNBQXdCO1FBQzlCLEtBQUssRUFBRSxzQ0FBeUI7S0FDakM7SUFDRCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFVBQVU7UUFDZixjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0seUNBQXdCO1FBQzlCLEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxXQUFXLEVBQUU7UUFDWCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxlQUFlO1FBQ3JCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLHlDQUF3QjtRQUM5QixLQUFLLEVBQUUsa0ZBQXFEO0tBQzdEO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLHlDQUF3QjtRQUM5QixrQkFBa0IsRUFBRSxFQUFFO1FBQ3RCLEtBQUssRUFBRSwwQ0FBMkI7S0FDbkM7SUFDRCxVQUFVLEVBQUU7UUFDVixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxjQUFjO1FBQ3BCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLHlDQUF3QjtRQUM5QixrQkFBa0IsRUFBRSxFQUFFO1FBQ3RCLEtBQUssRUFBRSxvQ0FBd0I7S0FDaEM7SUFDRCxXQUFXLEVBQUU7UUFDWCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxlQUFlO1FBQ3JCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLHlDQUF3QjtRQUM5QixrQkFBa0IsRUFBRSxFQUFFO1FBQ3RCLEtBQUssRUFBRSxzQ0FBeUI7S0FDakM7SUFDRCxhQUFhLEVBQUU7UUFDYixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0seUNBQXdCO1FBQzlCLGtCQUFrQixFQUFFLEVBQUU7UUFDdEIsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELGVBQWUsRUFBRTtRQUNmLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSx5Q0FBd0I7UUFDOUIsa0JBQWtCLEVBQUUsRUFBRTtRQUN0QixLQUFLLEVBQUUsOENBQTZCO0tBQ3JDO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsbUJBQW1CO1FBQ3pCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLHlDQUF3QjtRQUM5QixrQkFBa0IsRUFBRSxFQUFFO1FBQ3RCLEtBQUssRUFBRSw4Q0FBNkI7S0FDckM7SUFDRCxXQUFXLEVBQUU7UUFDWCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxlQUFlO1FBQ3JCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLHlDQUF3QjtRQUM5QixrQkFBa0IsRUFBRSxFQUFFO1FBQ3RCLEtBQUssRUFBRSxzQ0FBeUI7S0FDakM7SUFDRCxhQUFhLEVBQUU7UUFDYixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0seUNBQXdCO1FBQzlCLGtCQUFrQixFQUFFLEVBQUU7UUFDdEIsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELFlBQVksRUFBRTtRQUNaLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSx5Q0FBd0I7UUFDOUIsa0JBQWtCLEVBQUUsRUFBRTtRQUN0QixLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0lBQ0QsWUFBWSxFQUFFO1FBQ1osRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLHlDQUF3QjtRQUM5QixrQkFBa0IsRUFBRSxFQUFFO1FBQ3RCLEtBQUssRUFBRSx3Q0FBMEI7S0FDbEM7SUFDRCxhQUFhLEVBQUU7UUFDYixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0seUNBQXdCO1FBQzlCLGtCQUFrQixFQUFFLEVBQUU7UUFDdEIsS0FBSyxFQUFFLDBDQUEyQjtLQUNuQztJQUNELFVBQVUsRUFBRTtRQUNWLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLGNBQWM7UUFDcEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0seUNBQXdCO1FBQzlCLGtCQUFrQixFQUFFLEVBQUU7UUFDdEIsS0FBSyxFQUFFLG9DQUF3QjtLQUNoQztJQUNELGFBQWEsRUFBRTtRQUNiLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSx5Q0FBd0I7UUFDOUIsa0JBQWtCLEVBQUUsRUFBRTtRQUN0QixLQUFLLEVBQUUsMENBQTJCO0tBQ25DO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLHlDQUF3QjtRQUM5QixrQkFBa0IsRUFBRSxFQUFFO1FBQ3RCLEtBQUssRUFBRSw0Q0FBNEI7S0FDcEM7SUFDRCxXQUFXLEVBQUU7UUFDWCxFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxlQUFlO1FBQ3JCLFVBQVUsRUFBRSx5QkFBaUIsQ0FBQyxJQUFJO1FBQ2xDLEdBQUcsRUFBRSxTQUFTO1FBQ2QsY0FBYyxFQUFFLHdFQUEwQztRQUMxRCxNQUFNLHlDQUF3QjtRQUM5QixrQkFBa0IsRUFBRSxFQUFFO1FBQ3RCLEtBQUssRUFBRSxzQ0FBeUI7S0FDakM7SUFDRCxZQUFZLEVBQUU7UUFDWixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsVUFBVSxFQUFFLHlCQUFpQixDQUFDLElBQUk7UUFDbEMsR0FBRyxFQUFFLFNBQVM7UUFDZCxjQUFjLEVBQUUsd0VBQTBDO1FBQzFELE1BQU0seUNBQXdCO1FBQzlCLGtCQUFrQixFQUFFLEVBQUU7UUFDdEIsS0FBSyxFQUFFLHdDQUEwQjtLQUNsQztJQUNELFlBQVksRUFBRTtRQUNaLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixVQUFVLEVBQUUseUJBQWlCLENBQUMsSUFBSTtRQUNsQyxHQUFHLEVBQUUsU0FBUztRQUNkLGNBQWMsRUFBRSx3RUFBMEM7UUFDMUQsTUFBTSx5Q0FBd0I7UUFDOUIsa0JBQWtCLEVBQUUsRUFBRTtRQUN0QixLQUFLLEVBQUUsd0NBQTBCO0tBQ2xDO0NBQ0YsQ0FBQztBQUVGLFNBQWdCLGFBQWE7SUFDM0IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFZLENBQWtCLENBQUM7QUFDcEQsQ0FBQztBQUZELHNDQUVDO0FBRUQsU0FBZ0Isc0JBQXNCLENBQUMsVUFBNkI7SUFDbEUsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUFZLENBQUM7U0FDaEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDO1NBQ3pELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFrQixDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUpELHdEQUlDO0FBRUQsU0FBZ0IsaUJBQWlCO0lBQy9CLE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUM7QUFGRCw4Q0FFQztBQUVELFNBQWdCLHNCQUFzQjtJQUNwQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFZLENBQUMsQ0FBQztJQUNyQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDOUQsT0FBTyxDQUFDLFNBQXdCLEVBQUUsb0JBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzdELENBQUM7QUFKRCx3REFJQzs7Ozs7Ozs7Ozs7Ozs7QUNuN0lELElBQVksaUJBS1g7QUFMRCxXQUFZLGlCQUFpQjtJQUN6Qix5REFBUTtJQUNSLHlEQUFRO0lBQ1IseURBQVE7SUFDUix5REFBUTtBQUNaLENBQUMsRUFMVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQUs1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkQseUdBQXFEO0FBQ3JELG9GQUFpRTtBQWtCakUsTUFBTSxLQUFLLEdBQVU7SUFDbkIsV0FBVyxFQUFFLElBQUk7SUFDakIsY0FBYyxFQUFFLEVBQUU7SUFDbEIsVUFBVSxFQUFFLFNBQVM7SUFDckIsU0FBUyxFQUFFLEtBQUs7SUFDaEIsU0FBUyxFQUFFLENBQUM7Q0FDYjtBQUVELE1BQU0sZ0JBQWdCLEdBQUcsR0FBRztBQUU1Qiw2RUFBNkU7QUFDN0UsMkVBQTJFO0FBQzNFLE1BQU0sb0JBQW9CLEdBQUcsSUFBSTtBQUVqQyxnRkFBZ0Y7QUFDaEYsa0VBQWtFO0FBQ2xFLFNBQVMsZUFBZSxDQUFDLE9BQTJCO0lBQ2xELElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixPQUFPLE1BQU07S0FDZDtJQUNELE9BQU87UUFDTCxPQUFPLENBQUMsSUFBSTtRQUNaLE9BQU8sQ0FBQyxLQUFLO1FBQ2IsT0FBTyxDQUFDLEtBQUs7UUFDYixPQUFPLENBQUMsS0FBSztRQUNiLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLEtBQUs7S0FDZCxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQsSUFBSSxxQkFBcUIsR0FBRyxFQUFFO0FBQzlCLHlFQUF5RTtBQUN6RSwwRUFBMEU7QUFDMUUsd0VBQXdFO0FBQ3hFLElBQUksYUFBYSxHQUFHLEVBQUU7QUFDdEIsTUFBTSxhQUFhLEdBQUcsRUFBRTtBQUN4QixNQUFNLGlCQUFpQixHQUFHLEVBQUUsRUFBQyxxQ0FBcUM7QUFFbEUsU0FBUyxvQkFBb0IsQ0FBQyxPQUFvQixFQUFFLE1BQU0sR0FBRyxLQUFLO0lBQ2hFLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxjQUFjO0tBQ3RCO0lBQ0QsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUk7SUFDaEMsTUFBTSxXQUFXLEdBQUcsMkJBQVksQ0FBQyxXQUFXLENBQUM7SUFFN0MsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNoQixPQUFPLGNBQWM7S0FDdEI7SUFFRCxJQUFJLFVBQVUsR0FBRyxNQUFNO0lBQ3ZCLElBQUksV0FBVyxDQUFDLFVBQVUsS0FBSyx5QkFBaUIsQ0FBQyxJQUFJLEVBQUU7UUFDckQsVUFBVSxHQUFHLE1BQU07S0FDcEI7U0FBTSxJQUFJLFdBQVcsQ0FBQyxVQUFVLEtBQUsseUJBQWlCLENBQUMsSUFBSSxFQUFFO1FBQzVELFVBQVUsR0FBRyxNQUFNO0tBQ3BCO1NBQU0sSUFBSSxXQUFXLENBQUMsVUFBVSxLQUFLLHlCQUFpQixDQUFDLElBQUksRUFBRTtRQUM1RCxVQUFVLEdBQUcsTUFBTTtLQUNwQjtJQUVELE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxLQUFLLHFDQUF1QixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVM7SUFDOUUsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxnQkFBZ0I7SUFDMUYsT0FBTyxHQUFHLFVBQVUsSUFBSSxXQUFXLElBQUksU0FBUyxFQUFFO0FBQ3BELENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUFDLFdBQW1CO0lBQzlDLE1BQU0sV0FBVyxHQUFHLDJCQUFZLENBQUMsV0FBVyxDQUFDO0lBQzdDLElBQUksWUFBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLFVBQVUsTUFBSyx5QkFBaUIsQ0FBQyxJQUFJLEVBQUU7UUFDdEQsT0FBTyxNQUFNO0tBQ2Q7U0FBTSxJQUFJLFlBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxVQUFVLE1BQUsseUJBQWlCLENBQUMsSUFBSSxFQUFFO1FBQzdELE9BQU8sTUFBTTtLQUNkO1NBQU0sSUFBSSxZQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsVUFBVSxNQUFLLHlCQUFpQixDQUFDLElBQUksRUFBRTtRQUM3RCxPQUFPLE1BQU07S0FDZDtJQUNELE9BQU8sTUFBTTtBQUNmLENBQUM7QUFFRCwyRUFBMkU7QUFDM0UsNkVBQTZFO0FBQzdFLDJFQUEyRTtBQUMzRSwyRUFBMkU7QUFDM0UsNkVBQTZFO0FBQzdFLHlFQUF5RTtBQUN6RSw0RUFBNEU7QUFDNUUsMkRBQTJEO0FBQzNELElBQUksWUFBc0M7QUFDMUMsTUFBTSxjQUFjLEdBQWdDLEVBQUU7QUFFdEQsU0FBZSxhQUFhLENBQUMsV0FBbUIsRUFBRSxHQUFpQjs7UUFDakUsTUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQztRQUMxQyxJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sTUFBTTtTQUNkO1FBQ0QsTUFBTSxPQUFPLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxXQUFXLFVBQVU7UUFDNUUsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsY0FBYyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2xFLE1BQU0sV0FBVyxHQUFHLE1BQU0sUUFBUSxDQUFDLFdBQVcsRUFBRTtRQUNoRCxNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO1FBQ3JELGNBQWMsQ0FBQyxXQUFXLENBQUMsR0FBRyxNQUFNO1FBQ3BDLE9BQU8sTUFBTTtJQUNmLENBQUM7Q0FBQTtBQUVELDRFQUE0RTtBQUM1RSxzRUFBc0U7QUFDdEUseUVBQXlFO0FBQ3pFLG1EQUFtRDtBQUNuRCxTQUFlLE9BQU8sQ0FBQyxXQUFtQjs7UUFDeEMsSUFBSTtZQUNGLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ2pCLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRTthQUNsQztZQUNELE1BQU0sR0FBRyxHQUFHLFlBQVk7WUFDeEIsSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLLFdBQVcsRUFBRTtnQkFDN0IsTUFBTSxHQUFHLENBQUMsTUFBTSxFQUFFO2FBQ25CO1lBQ0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxhQUFhLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQztZQUNwRCxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsa0JBQWtCLEVBQUU7WUFDdkMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNO1lBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUMvQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNoQjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsR0FBRyxXQUFXLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUMzRTtJQUNILENBQUM7Q0FBQTtBQUVELDBFQUEwRTtBQUMxRSxtRUFBbUU7QUFDbkUsTUFBTSxxQkFBcUIsR0FBRyxJQUFJO0FBQ2xDLElBQUksZ0JBQWdCLEdBQUcsQ0FBQztBQUV4QiwwRUFBMEU7QUFDMUUsMkVBQTJFO0FBQzNFLDBFQUEwRTtBQUMxRSw2RUFBNkU7QUFDN0UsbURBQW1EO0FBQ25ELFNBQVMsY0FBYyxDQUFDLE9BQTJCO0lBQ2pELElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7UUFDbkMsT0FBTTtLQUNQO0lBQ0QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUN0QixJQUFJLEdBQUcsR0FBRyxnQkFBZ0IsR0FBRyxxQkFBcUIsRUFBRTtRQUNsRCxPQUFNO0tBQ1A7SUFDRCxnQkFBZ0IsR0FBRyxHQUFHO0lBQ3RCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ3JCLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7QUFDbkMsQ0FBQztBQUVELFNBQVMsb0JBQW9CLENBQUMsT0FBMkI7SUFDdkQsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQXFCO0lBQ3pFLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztJQUVyRSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7UUFDcEMsT0FBTTtLQUNQO0lBRUQsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUMxQyxJQUFJLFNBQVMsS0FBSyxxQkFBcUIsRUFBRTtRQUN2QyxPQUFNO0tBQ1A7SUFDRCxxQkFBcUIsR0FBRyxTQUFTO0lBRWpDLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7UUFDbkMsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxjQUFjLGVBQWU7UUFDdkQsVUFBVSxDQUFDLEtBQUssR0FBRyxhQUFhO1FBQ2hDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsYUFBYTtRQUNqQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPO1FBQ2xDLE9BQU07S0FDUDtJQUVELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTSxJQUFJLE9BQU8sQ0FBQyxTQUFTO0lBQzVELE1BQU0sVUFBVSxHQUFHLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDeEQsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxjQUFjLElBQUksVUFBVSxFQUFFO0lBQ3hELFVBQVUsQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLEtBQUs7SUFDcEQsVUFBVSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsS0FBSztJQUNyRCxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPO0lBQ2xDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLFdBQVc7SUFDN0MseUVBQXlFO0lBQ3pFLHVFQUF1RTtJQUN2RSxtQ0FBbUM7SUFDbkMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsVUFBVSxPQUFPLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxPQUFPLENBQUMsS0FBSyxHQUFHO0lBRXhHLDJFQUEyRTtJQUMzRSx5RUFBeUU7SUFDekUsb0VBQW9FO0lBQ3BFLDJFQUEyRTtJQUMzRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsbUNBQW1DO0lBQ25DLEVBQUU7SUFDRiwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSwyRUFBMkU7SUFDM0UsNEVBQTRFO0lBQzVFLHlFQUF5RTtJQUN6RSxtQkFBbUI7SUFDbkIsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWM7UUFDdEMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxFQUFFO0lBQ04sTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsSUFBSSxTQUFTLEtBQUssYUFBYTtJQUV6RSxJQUFJLFdBQVcsRUFBRTtRQUNmLGFBQWEsR0FBRyxTQUFTO1FBRXpCLElBQUksT0FBTyxDQUFDLEtBQUsscUNBQXVCLEVBQUU7WUFDeEMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztTQUNoQztRQUVELFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxPQUFPLENBQUMsY0FBYyxHQUFHLEtBQUs7WUFDOUIsYUFBYSxHQUFHLEVBQUU7UUFDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQztLQUNUO0FBQ0gsQ0FBQztBQUVELCtFQUErRTtBQUMvRSxnRUFBZ0U7QUFDaEUsU0FBUyxnQkFBZ0IsQ0FBQyxLQUFhO0lBQ3JDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO0lBQ3BELElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFNO0tBQ1A7SUFFRCxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLEtBQUssR0FBRztJQUN6QywyRUFBMkU7SUFDM0UsdUVBQXVFO0lBQ3ZFLHlFQUF5RTtJQUN6RSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDbkMsS0FBSyxLQUFLLENBQUMsV0FBVztJQUN0QixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFFaEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNyQyxDQUFDLEVBQUUsSUFBSSxDQUFDO0FBQ1YsQ0FBQztBQUVELDJFQUEyRTtBQUMzRSxTQUFTLGtCQUFrQixDQUFDLEtBQWE7SUFDdkMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztJQUN6RCxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsT0FBTTtLQUNQO0lBRUQsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxLQUFLLEdBQUc7SUFDekMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ25DLEtBQUssS0FBSyxDQUFDLFdBQVc7SUFDdEIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBRWhDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQztBQUNWLENBQUM7QUFFRCxTQUFTLElBQUk7SUFDWCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVztJQUNqQyxJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1FBQ25DLE9BQU07S0FDUDtJQUVELDZEQUE2RDtJQUM3RCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFO1FBQ2hDLE9BQU07S0FDUDtJQUVELDBCQUEwQjtJQUMxQixJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUU7UUFDbkIsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU0sRUFBRTtZQUM1QixPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU07WUFDdEIsb0JBQW9CLENBQUMsT0FBTyxDQUFDO1NBQzlCO1FBQ0QsT0FBTTtLQUNQO0lBRUQsMERBQTBEO0lBQzFELElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO1FBQ2hELE9BQU8sQ0FBQyxLQUFLLEdBQUcsU0FBUztRQUN6QixvQkFBb0IsQ0FBQyxPQUFPLENBQUM7S0FDOUI7SUFFRCxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVztJQUM3RyxNQUFNLEtBQUssR0FBRyxDQUFDO0lBQ2YsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPO0lBQzlDLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksQ0FBQztJQUU1QyxJQUFJLFNBQVMsS0FBSyxPQUFPLEVBQUU7UUFDekIsWUFBWSxJQUFJLEtBQUs7UUFDckIsSUFBSSxZQUFZLEdBQUcsY0FBYyxHQUFHLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDckUsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNO1NBQzNCO0tBQ0Y7U0FBTTtRQUNMLFlBQVksSUFBSSxLQUFLO1FBQ3JCLElBQUksWUFBWSxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU87U0FDNUI7S0FDRjtJQUVELE9BQU8sQ0FBQyxZQUFZLEdBQUcsWUFBWTtJQUVuQyxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUM7SUFDdkUsSUFBSSxpQkFBaUIsRUFBRTtRQUNyQixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEdBQUcsWUFBWSxJQUFJO0tBQ3pEO0lBRUQsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQXFCO0lBQ3pFLElBQUksVUFBVSxFQUFFO1FBQ2QsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsVUFBVSxTQUFTLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLE9BQU8sQ0FBQyxLQUFLLEdBQUc7S0FDakc7QUFDSCxDQUFDO0FBRUQsU0FBUyxjQUFjO0lBQ3JCLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtRQUNwQixhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztLQUNoQztJQUNELEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7UUFDekMsSUFBSSxFQUFFO0lBQ1IsQ0FBQyxFQUFFLGdCQUFnQixDQUFDO0FBQ3RCLENBQUM7QUFFRCxTQUFTLGFBQWE7SUFDcEIsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO1FBQ3BCLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQy9CLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUztLQUM3QjtBQUNILENBQUM7QUFFRCwrRUFBK0U7QUFDL0UsZ0VBQWdFO0FBQ2hFLFNBQVMsc0JBQXNCO0lBQzdCLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtRQUNuQixhQUFhLEVBQUU7S0FDaEI7U0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtRQUM1QixjQUFjLEVBQUU7S0FDakI7QUFDSCxDQUFDO0FBRU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUNsQixXQUFXLEVBQ1gsY0FBYyxHQUlmLEVBQVEsRUFBRTtJQUNULEtBQUssQ0FBQyxjQUFjLEdBQUcsY0FBYztJQUNyQyxLQUFLLENBQUMsV0FBVyxHQUFHLFdBQVc7SUFFL0Isb0JBQW9CLENBQUMsV0FBVyxDQUFDO0lBQ2pDLGNBQWMsRUFBRTtJQUVoQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsc0JBQXNCLENBQUM7SUFFckUsNEJBQTRCO0lBQzVCLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO0lBQ3RELElBQUksU0FBUyxFQUFFO1FBQ2IsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7WUFDNUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJO1lBQ3RCLElBQUksS0FBSyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ3BELEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUk7Z0JBQ2xDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUM7UUFDRixTQUFTLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtZQUM1QyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUs7WUFDdkIsSUFBSSxLQUFLLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDcEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsS0FBSztnQkFDbkMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsU0FBUztnQkFDbkMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzthQUN4QztRQUNILENBQUMsQ0FBQztRQUNGLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ3ZDLGNBQWMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ25DLENBQUMsQ0FBQztLQUNIO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBUSxFQUFFOztRQUNqRCxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJO1FBQ3BDLFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxlQUFlO2dCQUNsQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ3BCLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVc7b0JBQ3BDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQztvQkFDbkIsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztpQkFDdkM7Z0JBQ0QsTUFBSztZQUVQLEtBQUssZ0JBQWdCLENBQUMsQ0FBQztnQkFDckIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNwQixNQUFNLGFBQWEsR0FBRyxpQkFBSyxDQUFDLFdBQVcsMENBQUUsS0FBSyxtQ0FBSSxDQUFDO29CQUNuRCxNQUFNLGNBQWMsbUNBQ2YsSUFBSSxDQUFDLFdBQVcsS0FDbkIsWUFBWSxFQUFFLFlBQUssQ0FBQyxXQUFXLDBDQUFFLFlBQVksS0FBSSxDQUFDLEVBQ2xELFNBQVMsRUFBRSxZQUFLLENBQUMsV0FBVywwQ0FBRSxTQUFTLEtBQUksT0FBTyxFQUNsRCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsR0FDM0I7b0JBQ0QsS0FBSyxDQUFDLFdBQVcsR0FBRyxjQUFjO29CQUVsQyxJQUFJLGNBQWMsQ0FBQyxLQUFLLEdBQUcsYUFBYSxFQUFFO3dCQUN4QyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxvQkFBb0I7cUJBQ3BEO29CQUVELG9CQUFvQixDQUFDLGNBQWMsQ0FBQztpQkFDckM7Z0JBQ0QsTUFBSzthQUNOO1NBQ0Y7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDO0FBdEVZLFdBQUcsT0FzRWY7QUFFRCxNQUFNLENBQUMsVUFBVSxHQUFHO0lBQ2xCLEdBQUcsRUFBSCxXQUFHO0NBQ0o7Ozs7Ozs7VUNqYkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRTVCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Bva2VjaGlBcHAvLi9zcmMvY29tbW9uL3Bva2Vtb24tZGF0YS50cyIsIndlYnBhY2s6Ly9wb2tlY2hpQXBwLy4vc3JjL2NvbW1vbi90eXBlcy50cyIsIndlYnBhY2s6Ly9wb2tlY2hpQXBwLy4vc3JjL3BhbmVsL21haW4udHMiLCJ3ZWJwYWNrOi8vcG9rZWNoaUFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb2tlY2hpQXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9rZWNoaUFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcG9rZWNoaUFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9rZW1vbkNvbG9yLCBQb2tlbW9uQ29uZmlnLCBQb2tlbW9uRWxlbWVudFR5cGUsIFBva2Vtb25HZW5lcmF0aW9uLCBQb2tlbW9uUmFyaXR5LCBQb2tlbW9uVHlwZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUE9LRU1PTl9EQVRBOiB7IFtrZXk6IHN0cmluZ106IFBva2Vtb25Db25maWcgfSA9IHtcclxuICBidWxiYXNhdXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogJ0J1bGJhc2F1cicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnQnVsYmFzYXVyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgaXZ5c2F1cjoge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiAnSXZ5c2F1cicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnSXZ5c2F1ciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIHZlbnVzYXVyOiB7XHJcbiAgICBpZDogMyxcclxuICAgIG5hbWU6ICdWZW51c2F1cicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnVmVudXNhdXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBjaGFybWFuZGVyOiB7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6ICdDaGFybWFuZGVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdDaGFybWFuZGVyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXHJcbiAgfSxcclxuICBjaGFybWVsZW9uOiB7XHJcbiAgICBpZDogNSxcclxuICAgIG5hbWU6ICdDaGFybWVsZW9uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdDaGFybWVsZW9uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXHJcbiAgfSxcclxuICBjaGFyaXphcmQ6IHtcclxuICAgIGlkOiA2LFxyXG4gICAgbmFtZTogJ0NoYXJpemFyZCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnQ2hhcml6YXJkIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZSwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBzcXVpcnRsZToge1xyXG4gICAgaWQ6IDcsXHJcbiAgICBuYW1lOiAnU3F1aXJ0bGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1NxdXJpdGxlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgd2FydG9ydGxlOiB7XHJcbiAgICBpZDogOCxcclxuICAgIG5hbWU6ICdXYXJ0b3J0bGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1dhcnRvcnRsZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGJsYXN0b2lzZToge1xyXG4gICAgaWQ6IDksXHJcbiAgICBuYW1lOiAnQmxhc3RvaXNlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdCbGFzdG9pc2UhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBjYXRlcnBpZToge1xyXG4gICAgaWQ6IDEwLFxyXG4gICAgbmFtZTogJ0NhdGVycGllJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdDYXRlcnBpZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1Z10sXHJcbiAgfSxcclxuICBtZXRhcG9kOiB7XHJcbiAgICBpZDogMTEsXHJcbiAgICBuYW1lOiAnTWV0YXBvZCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTWV0YXBvZCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1Z10sXHJcbiAgfSxcclxuICBidXR0ZXJmcmVlOiB7XHJcbiAgICBpZDogMTIsXHJcbiAgICBuYW1lOiAnQnV0dGVyZnJlZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnQnV0dGVyZnJlZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICB3ZWVkbGU6IHtcclxuICAgIGlkOiAxMyxcclxuICAgIG5hbWU6ICdXZWVkbGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1dlZWRsZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBrYWt1bmE6IHtcclxuICAgIGlkOiAxNCxcclxuICAgIG5hbWU6ICdLYWt1bmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0tha3VuYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBiZWVkcmlsbDoge1xyXG4gICAgaWQ6IDE1LFxyXG4gICAgbmFtZTogJ0JlZWRyaWxsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdCZWVkcmlsbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBwaWRnZXk6IHtcclxuICAgIGlkOiAxNixcclxuICAgIG5hbWU6ICdQaWRnZXknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1BpZGdleSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBwaWRnZW90dG86IHtcclxuICAgIGlkOiAxNyxcclxuICAgIG5hbWU6ICdQaWRnZW90dG8nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1BpZGdlb3R0byEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBwaWRnZW90OiB7XHJcbiAgICBpZDogMTgsXHJcbiAgICBuYW1lOiAnUGlkZ2VvdCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUGlkZ2VvdCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICByYXR0YXRhOiB7XHJcbiAgICBpZDogMTksXHJcbiAgICBuYW1lOiAnUmF0dGF0YScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUmF0dGF0YSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICByYXRpY2F0ZToge1xyXG4gICAgaWQ6IDIwLFxyXG4gICAgbmFtZTogJ1JhdGljYXRlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdSYXRpY2F0ZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBzcGVhcm93OiB7XHJcbiAgICBpZDogMjEsXHJcbiAgICBuYW1lOiAnU3BlYXJvdycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnU3BlYXJvdyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBmZWFyb3c6IHtcclxuICAgIGlkOiAyMixcclxuICAgIG5hbWU6ICdGZWFyb3cnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0ZlYXJvdyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBla2Fuczoge1xyXG4gICAgaWQ6IDIzLFxyXG4gICAgbmFtZTogJ0VrYW5zJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdFa2FucyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBhcmJvazoge1xyXG4gICAgaWQ6IDI0LFxyXG4gICAgbmFtZTogJ0FyYm9rJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdBcmJvayEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBwaWthY2h1OiB7XHJcbiAgICBpZDogMjUsXHJcbiAgICBuYW1lOiAnUGlrYWNodScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUGlrYWNodSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcclxuICB9LFxyXG4gIHJhaWNodToge1xyXG4gICAgaWQ6IDI2LFxyXG4gICAgbmFtZTogJ1JhaWNodScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUmFpY2h1IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxyXG4gIH0sXHJcbiAgc2FuZHNocmV3OiB7XHJcbiAgICBpZDogMjcsXHJcbiAgICBuYW1lOiAnU2FuZHNocmV3JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdTYW5kc2hyZXchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgc2FuZHNsYXNoOiB7XHJcbiAgICBpZDogMjgsXHJcbiAgICBuYW1lOiAnU2FuZHNsYXNoJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdTYW5kc2xhc2ghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgbmlkb3Jhbl9mZW1hbGU6IHtcclxuICAgIGlkOiAyOSxcclxuICAgIG5hbWU6ICdOaWRvcmFu4pmAJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdOaWRvcmFuIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIG5pZG9yaW5hOiB7XHJcbiAgICBpZDogMzAsXHJcbiAgICBuYW1lOiAnTmlkb3JpbmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ05pZG9yaW5hIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIG5pZG9xdWVlbjoge1xyXG4gICAgaWQ6IDMxLFxyXG4gICAgbmFtZTogJ05pZG9xdWVlbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTmlkb3F1ZWVuIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIG5pZG9yYW5fbWFsZToge1xyXG4gICAgaWQ6IDMyLFxyXG4gICAgbmFtZTogJ05pZG9yYW7imYInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ05pZG9yYW4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgbmlkb3Jpbm86IHtcclxuICAgIGlkOiAzMyxcclxuICAgIG5hbWU6ICdOaWRvcmlubycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTmlkb3Jpbm8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgbmlkb2tpbmc6IHtcclxuICAgIGlkOiAzNCxcclxuICAgIG5hbWU6ICdOaWRva2luZycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTmlkb2tpbmchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb24sIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgY2xlZmFpcnk6IHtcclxuICAgIGlkOiAzNSxcclxuICAgIG5hbWU6ICdDbGVmYWlyeScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnQ2xlZmFpcnkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgY2xlZmFibGU6IHtcclxuICAgIGlkOiAzNixcclxuICAgIG5hbWU6ICdDbGVmYWJsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnQ2xlZmFibGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgdnVscGl4OiB7XHJcbiAgICBpZDogMzcsXHJcbiAgICBuYW1lOiAnVnVscGl4JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdWdWxwaXghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIG5pbmV0YWxlczoge1xyXG4gICAgaWQ6IDM4LFxyXG4gICAgbmFtZTogJ05pbmV0YWxlcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTmluZXRhbGVzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXHJcbiAgfSxcclxuICBqaWdnbHlwdWZmOiB7XHJcbiAgICBpZDogMzksXHJcbiAgICBuYW1lOiAnSmlnZ2x5cHVmZicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnSmlnZ2x5cHVmZiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICB3aWdnbHl0dWZmOiB7XHJcbiAgICBpZDogNDAsXHJcbiAgICBuYW1lOiAnV2lnZ2x5dHVmZicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnV2lnZ2x5dHVmZiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICB6dWJhdDoge1xyXG4gICAgaWQ6IDQxLFxyXG4gICAgbmFtZTogJ1p1YmF0JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdadWJhdCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbiwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBnb2xiYXQ6IHtcclxuICAgIGlkOiA0MixcclxuICAgIG5hbWU6ICdHb2xiYXQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0dvbGJhdCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbiwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBvZGRpc2g6IHtcclxuICAgIGlkOiA0MyxcclxuICAgIG5hbWU6ICdPZGRpc2gnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ09kZGlzaCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIGdsb29tOiB7XHJcbiAgICBpZDogNDQsXHJcbiAgICBuYW1lOiAnR2xvb20nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0dsb29tIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgdmlsZXBsdW1lOiB7XHJcbiAgICBpZDogNDUsXHJcbiAgICBuYW1lOiAnVmlsZXBsdW1lJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdWaWxlcGx1bWUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBwYXJhczoge1xyXG4gICAgaWQ6IDQ2LFxyXG4gICAgbmFtZTogJ1BhcmFzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdQYXJhcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcclxuICB9LFxyXG4gIHBhcmFzZWN0OiB7XHJcbiAgICBpZDogNDcsXHJcbiAgICBuYW1lOiAnUGFyYXNlY3QnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1BhcmFzZWN0IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgdmVub25hdDoge1xyXG4gICAgaWQ6IDQ4LFxyXG4gICAgbmFtZTogJ1Zlbm9uYXQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1Zlbm9uYXQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgdmVub21vdGg6IHtcclxuICAgIGlkOiA0OSxcclxuICAgIG5hbWU6ICdWZW5vbW90aCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnVmVub21vdGghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgZGlnbGV0dDoge1xyXG4gICAgaWQ6IDUwLFxyXG4gICAgbmFtZTogJ0RpZ2xldHQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0RpZ2xldHQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgZHVndHJpbzoge1xyXG4gICAgaWQ6IDUxLFxyXG4gICAgbmFtZTogJ0R1Z3RyaW8nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0R1Z3RyaW8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgbWVvd3RoOiB7XHJcbiAgICBpZDogNTIsXHJcbiAgICBuYW1lOiAnTWVvd3RoJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNZW93dGghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgcGVyc2lhbjoge1xyXG4gICAgaWQ6IDUzLFxyXG4gICAgbmFtZTogJ1BlcnNpYW4nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1BlcnNpYW4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgcHN5ZHVjazoge1xyXG4gICAgaWQ6IDU0LFxyXG4gICAgbmFtZTogJ1BzeWR1Y2snLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1BzeWR1Y2shJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBnb2xkdWNrOiB7XHJcbiAgICBpZDogNTUsXHJcbiAgICBuYW1lOiAnR29sZHVjaycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnR29sZHVjayEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIG1hbmtleToge1xyXG4gICAgaWQ6IDU2LFxyXG4gICAgbmFtZTogJ01hbmtleScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTWFua2V5IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxyXG4gIH0sXHJcbiAgcHJpbWVhcGU6IHtcclxuICAgIGlkOiA1NyxcclxuICAgIG5hbWU6ICdQcmltZWFwZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUHJpbWVhcGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXHJcbiAgfSxcclxuICBncm93bGl0aGU6IHtcclxuICAgIGlkOiA1OCxcclxuICAgIG5hbWU6ICdHcm93bGl0aGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0dyb3dsaXRoZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxyXG4gIH0sXHJcbiAgYXJjYW5pbmU6IHtcclxuICAgIGlkOiA1OSxcclxuICAgIG5hbWU6ICdBcmNhbmluZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnQXJjYW5pbmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIHBvbGl3YWc6IHtcclxuICAgIGlkOiA2MCxcclxuICAgIG5hbWU6ICdQb2xpd2FnJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdQb2xpd2FnIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgcG9saXdoaXJsOiB7XHJcbiAgICBpZDogNjEsXHJcbiAgICBuYW1lOiAnUG9saXdoaXJsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdQb2xpd2hpcmwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBwb2xpd3JhdGg6IHtcclxuICAgIGlkOiA2MixcclxuICAgIG5hbWU6ICdQb2xpd3JhdGgnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1BvbGl3cmF0aCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxyXG4gIH0sXHJcbiAgYWJyYToge1xyXG4gICAgaWQ6IDYzLFxyXG4gICAgbmFtZTogJ0FicmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0FicmEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIGthZGFicmE6IHtcclxuICAgIGlkOiA2NCxcclxuICAgIG5hbWU6ICdLYWRhYnJhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdLYWRhYnJhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBhbGFrYXphbToge1xyXG4gICAgaWQ6IDY1LFxyXG4gICAgbmFtZTogJ0FsYWthemFtJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdBbGFrYXphbSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgbWFjaG9wOiB7XHJcbiAgICBpZDogNjYsXHJcbiAgICBuYW1lOiAnTWFjaG9wJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNYWNob3AhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXHJcbiAgfSxcclxuICBtYWNob2tlOiB7XHJcbiAgICBpZDogNjcsXHJcbiAgICBuYW1lOiAnTWFjaG9rZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTWFjaG9rZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcclxuICB9LFxyXG4gIG1hY2hhbXA6IHtcclxuICAgIGlkOiA2OCxcclxuICAgIG5hbWU6ICdNYWNoYW1wJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdBbGFrYXphbSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcclxuICB9LFxyXG4gIGJlbGxzcHJvdXQ6IHtcclxuICAgIGlkOiA2OSxcclxuICAgIG5hbWU6ICdCZWxsc3Byb3V0JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdCZWxsc3Byb3V0IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgd2VlcGluYmVsbDoge1xyXG4gICAgaWQ6IDcwLFxyXG4gICAgbmFtZTogJ1dlZXBpbmJlbGwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1dlZXBpbmJlbGwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICB2aWN0cmVlYmVsOiB7XHJcbiAgICBpZDogNzEsXHJcbiAgICBuYW1lOiAnVmljdHJlZWJlbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnVmljdHJlZWJlbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIHRlbnRhY29vbDoge1xyXG4gICAgaWQ6IDcyLFxyXG4gICAgbmFtZTogJ1RlbnRhY29vbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnVGVudGFjb29sIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgdGVudGFjcnVlbDoge1xyXG4gICAgaWQ6IDczLFxyXG4gICAgbmFtZTogJ1RlbnRhY3J1ZWwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1RlbnRhY3J1ZWwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBnZW9kdWRlOiB7XHJcbiAgICBpZDogNzQsXHJcbiAgICBuYW1lOiAnR2VvZHVkZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnR2VvZHVkZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgZ3JhdmVsZXI6IHtcclxuICAgIGlkOiA3NSxcclxuICAgIG5hbWU6ICdHcmF2ZWxlcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnR3JhdmVsZXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIGdvbGVtOiB7XHJcbiAgICBpZDogNzYsXHJcbiAgICBuYW1lOiAnR29sZW0nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0dvbGVtIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBwb255dGE6IHtcclxuICAgIGlkOiA3NyxcclxuICAgIG5hbWU6ICdQb255dGEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1Bvbnl0YSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxyXG4gIH0sXHJcbiAgcmFwaWRhc2g6IHtcclxuICAgIGlkOiA3OCxcclxuICAgIG5hbWU6ICdSYXBpZGFzaCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUmFwaWRhc2ghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIHNsb3dwb2tlOiB7XHJcbiAgICBpZDogNzksXHJcbiAgICBuYW1lOiAnU2xvd3Bva2UnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1Nsb3dwb2tlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHNsb3dicm86IHtcclxuICAgIGlkOiA4MCxcclxuICAgIG5hbWU6ICdTbG93YnJvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdTbG93YnJvIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIG1hZ25lbWl0ZToge1xyXG4gICAgaWQ6IDgxLFxyXG4gICAgbmFtZTogJ01hZ25lbWl0ZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTWFnbmVtaXRlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWMsIFBva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXHJcbiAgfSxcclxuICBtYWduZXRvbjoge1xyXG4gICAgaWQ6IDgyLFxyXG4gICAgbmFtZTogJ01hZ25ldG9uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNYWduZXRvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljLCBQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWxdLFxyXG4gIH0sXHJcbiAgZmFyZmV0Y2hkOiB7XHJcbiAgICBpZDogODMsXHJcbiAgICBuYW1lOiAnRmFyZmV0Y2hcXCdkJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdGYXJmZXRjaFxcJ2QhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgZG9kdW86IHtcclxuICAgIGlkOiA4NCxcclxuICAgIG5hbWU6ICdEb2R1bycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRG9kdW8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgZG9kcmlvOiB7XHJcbiAgICBpZDogODUsXHJcbiAgICBuYW1lOiAnRG9kcmlvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdEb2RyaW8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgc2VlbDoge1xyXG4gICAgaWQ6IDg2LFxyXG4gICAgbmFtZTogJ1NlZWwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1NlZWwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBkZXdnb25nOiB7XHJcbiAgICBpZDogODcsXHJcbiAgICBuYW1lOiAnRGV3Z29uZycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRGV3Z29uZyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuaWNlXSxcclxuICB9LFxyXG4gIGdyaW1lcjoge1xyXG4gICAgaWQ6IDg4LFxyXG4gICAgbmFtZTogJ0dyaW1lcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnR3JpbWVyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIG11azoge1xyXG4gICAgaWQ6IDg5LFxyXG4gICAgbmFtZTogJ011aycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTXVrIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIHNoZWxsZGVyOiB7XHJcbiAgICBpZDogOTAsXHJcbiAgICBuYW1lOiAnU2hlbGxkZXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1NoZWxsZGVyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgY2xveXN0ZXI6IHtcclxuICAgIGlkOiA5MSxcclxuICAgIG5hbWU6ICdDbG95c3RlcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnQ2xveXN0ZXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmljZV0sXHJcbiAgfSxcclxuICBnYXN0bHk6IHtcclxuICAgIGlkOiA5MixcclxuICAgIG5hbWU6ICdHYXN0bHknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0dhc3RseSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0LCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIGhhdW50ZXI6IHtcclxuICAgIGlkOiA5MyxcclxuICAgIG5hbWU6ICdIYXVudGVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdIYXVudGVyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3QsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgZ2VuZ2FyOiB7XHJcbiAgICBpZDogOTQsXHJcbiAgICBuYW1lOiAnR2VuZ2FyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdHZW5nYXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdCwgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBvbml4OiB7XHJcbiAgICBpZDogOTUsXHJcbiAgICBuYW1lOiAnT25peCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnT25peCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgZHJvd3plZToge1xyXG4gICAgaWQ6IDk2LFxyXG4gICAgbmFtZTogJ0Ryb3d6ZWUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0Ryb3d6ZWUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIGh5cG5vOiB7XHJcbiAgICBpZDogOTcsXHJcbiAgICBuYW1lOiAnSHlwbm8nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0h5cG5vIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBrcmFiYnk6IHtcclxuICAgIGlkOiA5OCxcclxuICAgIG5hbWU6ICdLcmFiYnknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0tyYWJieSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGtpbmdsZXI6IHtcclxuICAgIGlkOiA5OSxcclxuICAgIG5hbWU6ICdLaW5nbGVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdLaW5nbGVyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgdm9sdG9yYjoge1xyXG4gICAgaWQ6IDEwMCxcclxuICAgIG5hbWU6ICdWb2x0b3JiJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdWb2x0b3JiIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxyXG4gIH0sXHJcbiAgZWxlY3Ryb2RlOiB7XHJcbiAgICBpZDogMTAxLFxyXG4gICAgbmFtZTogJ0VsZWN0cm9kZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRWxlY3Ryb2RlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxyXG4gIH0sXHJcbiAgZXhlZ2djdXRlOiB7XHJcbiAgICBpZDogMTAyLFxyXG4gICAgbmFtZTogJ0V4ZWdnY3V0ZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRXhlZ2djdXRlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIGV4ZWdndXRvcjoge1xyXG4gICAgaWQ6IDEwMyxcclxuICAgIG5hbWU6ICdFeGVnZ3V0b3InLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0V4ZWdndXRvciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBjdWJvbmU6IHtcclxuICAgIGlkOiAxMDQsXHJcbiAgICBuYW1lOiAnQ3Vib25lJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdDdWJvbmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgbWFyb3dhazoge1xyXG4gICAgaWQ6IDEwNSxcclxuICAgIG5hbWU6ICdNYXJvd2FrJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNYXJvd2FrIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIGhpdG1vbmxlZToge1xyXG4gICAgaWQ6IDEwNixcclxuICAgIG5hbWU6ICdIaXRtb25sZWUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0hpdG1vbmxlZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcclxuICB9LFxyXG4gIGhpdG1vbmNoYW46IHtcclxuICAgIGlkOiAxMDcsXHJcbiAgICBuYW1lOiAnSGl0bW9uY2hhbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnSGl0bW9uY2hhbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcclxuICB9LFxyXG4gIGxpY2tpdHVuZzoge1xyXG4gICAgaWQ6IDEwOCxcclxuICAgIG5hbWU6ICdMaWNraXR1bmcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0xpY2tpdHVuZyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBrb2ZmaW5nOiB7XHJcbiAgICBpZDogMTA5LFxyXG4gICAgbmFtZTogJ0tvZmZpbmcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0tvZmZpbmchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgd2VlemluZzoge1xyXG4gICAgaWQ6IDExMCxcclxuICAgIG5hbWU6ICdXZWV6aW5nJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdXZWV6aW5nIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIHJoeWhvcm46IHtcclxuICAgIGlkOiAxMTEsXHJcbiAgICBuYW1lOiAnUmh5aG9ybicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUmh5aG9ybiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZCwgUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2tdLFxyXG4gIH0sXHJcbiAgcmh5ZG9uOiB7XHJcbiAgICBpZDogMTEyLFxyXG4gICAgbmFtZTogJ1JoeWRvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUmh5ZG9uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kLCBQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXHJcbiAgfSxcclxuICBjaGFuc2V5OiB7XHJcbiAgICBpZDogMTEzLFxyXG4gICAgbmFtZTogJ0NoYW5zZXknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0NoYW5zZXkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgdGFuZ2VsYToge1xyXG4gICAgaWQ6IDExNCxcclxuICAgIG5hbWU6ICdUYW5nZWxhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdUYW5nZWxhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAga2FuZ2Fza2hhbjoge1xyXG4gICAgaWQ6IDExNSxcclxuICAgIG5hbWU6ICdLYW5nYXNraGFuJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdLYW5nYXNraGFuIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIGhvcnNlYToge1xyXG4gICAgaWQ6IDExNixcclxuICAgIG5hbWU6ICdIb3JzZWEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0hvcnNlYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIHNlYWRyYToge1xyXG4gICAgaWQ6IDExNyxcclxuICAgIG5hbWU6ICdTZWFkcmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1NlYWRyYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGdvbGRlZW46IHtcclxuICAgIGlkOiAxMTgsXHJcbiAgICBuYW1lOiAnR29sZGVlbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnR29sZGVlbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIHNlYWtpbmc6IHtcclxuICAgIGlkOiAxMTksXHJcbiAgICBuYW1lOiAnU2Vha2luZycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnU2Vha2luZyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIHN0YXJ5dToge1xyXG4gICAgaWQ6IDEyMCxcclxuICAgIG5hbWU6ICdTdGFyeXUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1N0YXJ5dSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIHN0YXJtaWU6IHtcclxuICAgIGlkOiAxMjEsXHJcbiAgICBuYW1lOiAnU3Rhcm1pZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnU3Rhcm1pZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBtcm1pbWU6IHtcclxuICAgIGlkOiAxMjIsXHJcbiAgICBuYW1lOiAnTXIuIE1pbWUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ01yLiBNaW1lIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBzY3l0aGVyOiB7XHJcbiAgICBpZDogMTIzLFxyXG4gICAgbmFtZTogJ1NjeXRoZXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1NjeXRoZXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAganlueDoge1xyXG4gICAgaWQ6IDEyNCxcclxuICAgIG5hbWU6ICdKeW54JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdKeW54IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuaWNlLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBlbGVjdGFidXp6OiB7XHJcbiAgICBpZDogMTI1LFxyXG4gICAgbmFtZTogJ0VsZWN0YWJ1enonLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0VsZWN0YWJ1enohJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICBtYWdtYXI6IHtcclxuICAgIGlkOiAxMjYsXHJcbiAgICBuYW1lOiAnTWFnbWFyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNYWdtYXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIHBpbnNpcjoge1xyXG4gICAgaWQ6IDEyNyxcclxuICAgIG5hbWU6ICdQaW5zaXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1BpbnNpciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1Z10sXHJcbiAgfSxcclxuICB0YXVyb3M6IHtcclxuICAgIGlkOiAxMjgsXHJcbiAgICBuYW1lOiAnVGF1cm9zJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdUYXVyb3MhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgbWFnaWthcnA6IHtcclxuICAgIGlkOiAxMjksXHJcbiAgICBuYW1lOiAnTWFnaWthcnAnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ01hZ2lrYXJwIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgZ3lhcmFkb3M6IHtcclxuICAgIGlkOiAxMzAsXHJcbiAgICBuYW1lOiAnR3lhcmFkb3MnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0d5YXJhZG9zIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgbGFwcmFzOiB7XHJcbiAgICBpZDogMTMxLFxyXG4gICAgbmFtZTogJ0xhcHJhcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnTGFwcmFzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5pY2VdLFxyXG4gIH0sXHJcbiAgZGl0dG86IHtcclxuICAgIGlkOiAxMzIsXHJcbiAgICBuYW1lOiAnRGl0dG8nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0RpdHRvIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIGVldmVlOiB7XHJcbiAgICBpZDogMTMzLFxyXG4gICAgbmFtZTogJ0VldmVlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdFZXZlZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICB2YXBvcmVvbjoge1xyXG4gICAgaWQ6IDEzNCxcclxuICAgIG5hbWU6ICdWYXBvcmVvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnVmFwb3Jlb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBqb2x0ZW9uOiB7XHJcbiAgICBpZDogMTM1LFxyXG4gICAgbmFtZTogJ0pvbHRlb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0pvbHRlb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICBmbGFyZW9uOiB7XHJcbiAgICBpZDogMTM2LFxyXG4gICAgbmFtZTogJ0ZsYXJlb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0ZsYXJlb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIHBvcnlnb246IHtcclxuICAgIGlkOiAxMzcsXHJcbiAgICBuYW1lOiAnUG9yeWdvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnUG9yeWdvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBvbWFueXRlOiB7XHJcbiAgICBpZDogMTM4LFxyXG4gICAgbmFtZTogJ09tYW55dGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ09tYW55dGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuZm9zc2lsLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIG9tYXN0YXI6IHtcclxuICAgIGlkOiAxMzksXHJcbiAgICBuYW1lOiAnT21hc3RhcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnT21hc3RhciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5mb3NzaWwsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAga2FidXRvOiB7XHJcbiAgICBpZDogMTQwLFxyXG4gICAgbmFtZTogJ0thYnV0bycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnS2FidXRvIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmZvc3NpbCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBrYWJ1dG9wczoge1xyXG4gICAgaWQ6IDE0MSxcclxuICAgIG5hbWU6ICdLYWJ1dG9wcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnS2FidXRvcHMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuZm9zc2lsLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGFlcm9kYWN0eWw6IHtcclxuICAgIGlkOiAxNDIsXHJcbiAgICBuYW1lOiAnQWVyb2RhY3R5bCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnQWVyb2RhY3R5bCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5mb3NzaWwsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHNub3JsYXg6IHtcclxuICAgIGlkOiAxNDMsXHJcbiAgICBuYW1lOiAnU25vcmxheCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnU25vcmxheCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBhcnRpY3Vubzoge1xyXG4gICAgaWQ6IDE0NCxcclxuICAgIG5hbWU6ICdBcnRpY3VubycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnQXJ0aWN1bm8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuc3ViTGVnZW5kYXJ5LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuaWNlLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHphcGRvczoge1xyXG4gICAgaWQ6IDE0NSxcclxuICAgIG5hbWU6ICdaYXBkb3MnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ1phcGRvcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5zdWJMZWdlbmRhcnksXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpYywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBtb2x0cmVzOiB7XHJcbiAgICBpZDogMTQ2LFxyXG4gICAgbmFtZTogJ01vbHRyZXMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ01vbHRyZXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuc3ViTGVnZW5kYXJ5LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZSwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBkcmF0aW5pOiB7XHJcbiAgICBpZDogMTQ3LFxyXG4gICAgbmFtZTogJ0RyYXRpbmknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0RyYXRpbmkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kcmFnb25dLFxyXG4gIH0sXHJcbiAgZHJhZ29uYWlyOiB7XHJcbiAgICBpZDogMTQ4LFxyXG4gICAgbmFtZTogJ0RyYWdvbmFpcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4xLFxyXG4gICAgY3J5OiAnRHJhZ29uYWlyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcclxuICB9LFxyXG4gIGRyYWdvbml0ZToge1xyXG4gICAgaWQ6IDE0OSxcclxuICAgIG5hbWU6ICdEcmFnb25pdGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMSxcclxuICAgIGNyeTogJ0RyYWdvbml0ZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbiwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBtZXd0d286IHtcclxuICAgIGlkOiAxNTAsXHJcbiAgICBuYW1lOiAnTWV3dHdvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNZXd0d28hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubGVnZW5kYXJ5LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBtZXc6IHtcclxuICAgIGlkOiAxNTEsXHJcbiAgICBuYW1lOiAnTWV3JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjEsXHJcbiAgICBjcnk6ICdNZXchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIC8vIEdlbmVyYXRpb24gMlxyXG4gIGNoaWtvcml0YToge1xyXG4gICAgaWQ6IDE1MixcclxuICAgIG5hbWU6ICdDaGlrb3JpdGEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0NoaWtvcml0YSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcclxuICB9LFxyXG4gIGJheWxlZWY6IHtcclxuICAgIGlkOiAxNTMsXHJcbiAgICBuYW1lOiAnQmF5bGVlZicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnQmF5bGVlZiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcclxuICB9LFxyXG4gIG1lZ2FuaXVtOiB7XHJcbiAgICBpZDogMTU0LFxyXG4gICAgbmFtZTogJ01lZ2FuaXVtJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdNZWdhbml1bSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcclxuICB9LFxyXG4gIGN5bmRhcXVpbDoge1xyXG4gICAgaWQ6IDE1NSxcclxuICAgIG5hbWU6ICdDeW5kYXF1aWwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0N5bmRhcXVpbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxyXG4gIH0sXHJcbiAgcXVpbGF2YToge1xyXG4gICAgaWQ6IDE1NixcclxuICAgIG5hbWU6ICdRdWlsYXZhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdRdWlsYXZhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXHJcbiAgfSxcclxuICB0eXBobG9zaW9uOiB7XHJcbiAgICBpZDogMTU3LFxyXG4gICAgbmFtZTogJ1R5cGhsb3Npb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1R5cGhsb3Npb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIHRvdG9kaWxlOiB7XHJcbiAgICBpZDogMTU4LFxyXG4gICAgbmFtZTogJ1RvdG9kaWxlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdUb3RvZGlsZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGNyb2NvbmF3OiB7XHJcbiAgICBpZDogMTU5LFxyXG4gICAgbmFtZTogJ0Nyb2NvbmF3JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdDcm9jb25hdyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGZlcmFsaWdhdHI6IHtcclxuICAgIGlkOiAxNjAsXHJcbiAgICBuYW1lOiAnRmVyYWxpZ2F0cicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnRmVyYWxpZ2F0ciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIHNlbnRyZXQ6IHtcclxuICAgIGlkOiAxNjEsXHJcbiAgICBuYW1lOiAnU2VudHJldCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU2VudHJldCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBmdXJyZXQ6IHtcclxuICAgIGlkOiAxNjIsXHJcbiAgICBuYW1lOiAnRnVycmV0JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdGdXJyZXQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgaG9vdGhvb3Q6IHtcclxuICAgIGlkOiAxNjMsXHJcbiAgICBuYW1lOiAnSG9vdGhvb3QnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0hvb3Rob290IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIG5vY3Rvd2w6IHtcclxuICAgIGlkOiAxNjQsXHJcbiAgICBuYW1lOiAnTm9jdG93bCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnTm9jdG93bCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBsZWR5YmE6IHtcclxuICAgIGlkOiAxNjUsXHJcbiAgICBuYW1lOiAnTGVkeWJhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdMZWR5YmEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgbGVkaWFuOiB7XHJcbiAgICBpZDogMTY2LFxyXG4gICAgbmFtZTogJ0xlZGlhbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnTGVkaWFuIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHNwaW5hcmFrOiB7XHJcbiAgICBpZDogMTY3LFxyXG4gICAgbmFtZTogJ1NwaW5hcmFrJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdTcGluYXJhayEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBhcmlhZG9zOiB7XHJcbiAgICBpZDogMTY4LFxyXG4gICAgbmFtZTogJ0FyaWFkb3MnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0FyaWFkb3MhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgY3JvYmF0OiB7XHJcbiAgICBpZDogMTY5LFxyXG4gICAgbmFtZTogJ0Nyb2JhdCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnQ3JvYmF0IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIGNoaW5jaG91OiB7XHJcbiAgICBpZDogMTcwLFxyXG4gICAgbmFtZTogJ0NoaW5jaG91JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdDaGluY2hvdSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxyXG4gIH0sXHJcbiAgbGFudHVybjoge1xyXG4gICAgaWQ6IDE3MSxcclxuICAgIG5hbWU6ICdMYW50dXJuJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdMYW50dXJuIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICBwaWNodToge1xyXG4gICAgaWQ6IDE3MixcclxuICAgIG5hbWU6ICdQaWNodScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnUGljaHUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICBjbGVmZmE6IHtcclxuICAgIGlkOiAxNzMsXHJcbiAgICBuYW1lOiAnQ2xlZmZhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdDbGVmZmEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgaWdnbHlidWZmOiB7XHJcbiAgICBpZDogMTc0LFxyXG4gICAgbmFtZTogJ0lnZ2x5YnVmZicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnSWdnbHlidWZmIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHRvZ2VwaToge1xyXG4gICAgaWQ6IDE3NSxcclxuICAgIG5hbWU6ICdUb2dlcGknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1RvZ2VwaSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICB0b2dldGljOiB7XHJcbiAgICBpZDogMTc2LFxyXG4gICAgbmFtZTogJ1RvZ2V0aWMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1RvZ2V0aWMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgbmF0dToge1xyXG4gICAgaWQ6IDE3NyxcclxuICAgIG5hbWU6ICdOYXR1JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdOYXR1IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpYywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICB4YXR1OiB7XHJcbiAgICBpZDogMTc4LFxyXG4gICAgbmFtZTogJ1hhdHUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1hhdHUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIG1hcmVlcDoge1xyXG4gICAgaWQ6IDE3OSxcclxuICAgIG5hbWU6ICdNYXJlZXAnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ01hcmVlcCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcclxuICB9LFxyXG4gIGZsYWFmZnk6IHtcclxuICAgIGlkOiAxODAsXHJcbiAgICBuYW1lOiAnRmxhYWZmeScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnRmxhYWZmeSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcclxuICB9LFxyXG4gIGFtcGhhcm9zOiB7XHJcbiAgICBpZDogMTgxLFxyXG4gICAgbmFtZTogJ0FtcGhhcm9zJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdBbXBoYXJvcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcclxuICB9LFxyXG4gIGJlbGxvc3NvbToge1xyXG4gICAgaWQ6IDE4MixcclxuICAgIG5hbWU6ICdCZWxsb3Nzb20nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0JlbGxvc3NvbSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcclxuICB9LFxyXG4gIG1hcmlsbDoge1xyXG4gICAgaWQ6IDE4MyxcclxuICAgIG5hbWU6ICdNYXJpbGwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ01hcmlsbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGF6dW1hcmlsbDoge1xyXG4gICAgaWQ6IDE4NCxcclxuICAgIG5hbWU6ICdBenVtYXJpbGwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0F6dW1hcmlsbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIHN1ZG93b29kbzoge1xyXG4gICAgaWQ6IDE4NSxcclxuICAgIG5hbWU6ICdTdWRvd29vZG8nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1N1ZG93b29kbyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2tdLFxyXG4gIH0sXHJcbiAgcG9saXRvZWQ6IHtcclxuICAgIGlkOiAxODYsXHJcbiAgICBuYW1lOiAnUG9saXRvZWQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1BvbGl0b2VkIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgaG9wcGlwOiB7XHJcbiAgICBpZDogMTg3LFxyXG4gICAgbmFtZTogJ0hvcHBpcCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnSG9wcGlwIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgc2tpcGxvb206IHtcclxuICAgIGlkOiAxODgsXHJcbiAgICBuYW1lOiAnU2tpcGxvb20nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1NraXBsb29tIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAganVtcGx1ZmY6IHtcclxuICAgIGlkOiAxODksXHJcbiAgICBuYW1lOiAnSnVtcGx1ZmYnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0p1bXBsdWZmIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgYWlwb206IHtcclxuICAgIGlkOiAxOTAsXHJcbiAgICBuYW1lOiAnQWlwb20nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0FpcG9tIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHN1bmtlcm46IHtcclxuICAgIGlkOiAxOTEsXHJcbiAgICBuYW1lOiAnU3Vua2VybicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU3Vua2VybiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcclxuICB9LFxyXG4gIHN1bmZsb3JhOiB7XHJcbiAgICBpZDogMTkyLFxyXG4gICAgbmFtZTogJ1N1bmZsb3JhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdTdW5mbG9yYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcclxuICB9LFxyXG4gIHlhbm1hOiB7XHJcbiAgICBpZDogMTkzLFxyXG4gICAgbmFtZTogJ1lhbm1hJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdZYW5tYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICB3b29wZXI6IHtcclxuICAgIGlkOiAxOTQsXHJcbiAgICBuYW1lOiAnV29vcGVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdXb29wZXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBxdWFnc2lyZToge1xyXG4gICAgaWQ6IDE5NSxcclxuICAgIG5hbWU6ICdRdWFnc2lyZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnUXVhZ3NpcmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBlc3Blb246IHtcclxuICAgIGlkOiAxOTYsXHJcbiAgICBuYW1lOiAnRXNwZW9uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdFc3Blb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVtYnJlb246IHtcclxuICAgIGlkOiAxOTcsXHJcbiAgICBuYW1lOiAnVW1icmVvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW1icmVvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmtdLFxyXG4gIH0sXHJcbiAgbXVya3Jvdzoge1xyXG4gICAgaWQ6IDE5OCxcclxuICAgIG5hbWU6ICdNdXJrcm93JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdNdXJrcm93IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZGFyaywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBzbG93a2luZzoge1xyXG4gICAgaWQ6IDE5OSxcclxuICAgIG5hbWU6ICdTbG93a2luZycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU2xvd2tpbmchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgbWlzZHJlYXZ1czoge1xyXG4gICAgaWQ6IDIwMCxcclxuICAgIG5hbWU6ICdNaXNkcmVhdnVzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdNaXNkcmVhdnVzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxyXG4gIH0sXHJcbiAgdW5vd25fYToge1xyXG4gICAgaWQ6IDIwMSxcclxuICAgIG5hbWU6ICdVbm93biAoQSknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vub3duIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICB1bm93bl9iOiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChCKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX2M6IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKEMpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25fZDoge1xyXG4gICAgaWQ6IDIwMSxcclxuICAgIG5hbWU6ICdVbm93biAoRCknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vub3duIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICB1bm93bl9lOiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChFKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX2Y6IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKEYpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25fZzoge1xyXG4gICAgaWQ6IDIwMSxcclxuICAgIG5hbWU6ICdVbm93biAoRyknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vub3duIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICB1bm93bl9oOiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChIKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX2k6IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKEkpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25fajoge1xyXG4gICAgaWQ6IDIwMSxcclxuICAgIG5hbWU6ICdVbm93biAoSiknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vub3duIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICB1bm93bl9rOiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChLKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX2w6IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKEwpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25fbToge1xyXG4gICAgaWQ6IDIwMSxcclxuICAgIG5hbWU6ICdVbm93biAoTSknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vub3duIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICB1bm93bl9uOiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChOKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX286IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKE8pJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25fcDoge1xyXG4gICAgaWQ6IDIwMSxcclxuICAgIG5hbWU6ICdVbm93biAoUCknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vub3duIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICB1bm93bl9xOiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChRKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX3I6IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKFIpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25fczoge1xyXG4gICAgaWQ6IDIwMSxcclxuICAgIG5hbWU6ICdVbm93biAoUyknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vub3duIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICB1bm93bl90OiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChUKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX3U6IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKFUpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25fdjoge1xyXG4gICAgaWQ6IDIwMSxcclxuICAgIG5hbWU6ICdVbm93biAoViknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vub3duIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICB1bm93bl93OiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChXKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX3g6IHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBuYW1lOiAnVW5vd24gKFgpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVbm93biEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgdW5vd25feToge1xyXG4gICAgaWQ6IDIwMSxcclxuICAgIG5hbWU6ICdVbm93biAoWSknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1Vub3duIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICB1bm93bl96OiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duIChaKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX2V4Y2xhbWF0aW9uOiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duICghKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHVub3duX3F1ZXN0aW9uOiB7XHJcbiAgICBpZDogMjAxLFxyXG4gICAgbmFtZTogJ1Vub3duICg/KScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVW5vd24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHdvYmJ1ZmZldDoge1xyXG4gICAgaWQ6IDIwMixcclxuICAgIG5hbWU6ICdXb2JidWZmZXQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1dvYmJ1ZmZldCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgZ2lyYWZhcmlnOiB7XHJcbiAgICBpZDogMjAzLFxyXG4gICAgbmFtZTogJ0dpcmFmYXJpZycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnR2lyYWZhcmlnIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBwaW5lY286IHtcclxuICAgIGlkOiAyMDQsXHJcbiAgICBuYW1lOiAnUGluZWNvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdQaW5lY28hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWddLFxyXG4gIH0sXHJcbiAgZm9ycmV0cmVzczoge1xyXG4gICAgaWQ6IDIwNSxcclxuICAgIG5hbWU6ICdGb3JyZXRyZXNzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdGb3JyZXRyZXNzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWxdLFxyXG4gIH0sXHJcbiAgZHVuc3BhcmNlOiB7XHJcbiAgICBpZDogMjA2LFxyXG4gICAgbmFtZTogJ0R1bnNwYXJjZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnRHVuc3BhcmNlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIGdsaWdhcjoge1xyXG4gICAgaWQ6IDIwNyxcclxuICAgIG5hbWU6ICdHbGlnYXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0dsaWdhciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBzdGVlbGl4OiB7XHJcbiAgICBpZDogMjA4LFxyXG4gICAgbmFtZTogJ1N0ZWVsaXgnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1N0ZWVsaXghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWwsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgc251YmJ1bGw6IHtcclxuICAgIGlkOiAyMDksXHJcbiAgICBuYW1lOiAnU251YmJ1bGwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1NudWJidWxsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIGdyYW5idWxsOiB7XHJcbiAgICBpZDogMjEwLFxyXG4gICAgbmFtZTogJ0dyYW5idWxsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdHcmFuYnVsbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBxd2lsZmlzaDoge1xyXG4gICAgaWQ6IDIxMSxcclxuICAgIG5hbWU6ICdRd2lsZmlzaCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnUXdpbGZpc2ghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBzY2l6b3I6IHtcclxuICAgIGlkOiAyMTIsXHJcbiAgICBuYW1lOiAnU2Npem9yJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdTY2l6b3IhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXHJcbiAgfSxcclxuICBzaHVja2xlOiB7XHJcbiAgICBpZDogMjEzLFxyXG4gICAgbmFtZTogJ1NodWNrbGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1NodWNrbGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5yb2NrXSxcclxuICB9LFxyXG4gIGhlcmFjcm9zczoge1xyXG4gICAgaWQ6IDIxNCxcclxuICAgIG5hbWU6ICdIZXJhY3Jvc3MnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0hlcmFjcm9zcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcclxuICB9LFxyXG4gIHNuZWFzZWw6IHtcclxuICAgIGlkOiAyMTUsXHJcbiAgICBuYW1lOiAnU25lYXNlbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU25lYXNlbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmssIFBva2Vtb25FbGVtZW50VHlwZS5pY2VdLFxyXG4gIH0sXHJcbiAgdGVkZGl1cnNhOiB7XHJcbiAgICBpZDogMjE2LFxyXG4gICAgbmFtZTogJ1RlZGRpdXJzYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVGVkZGl1cnNhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHVyc2FyaW5nOiB7XHJcbiAgICBpZDogMjE3LFxyXG4gICAgbmFtZTogJ1Vyc2FyaW5nJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdVcnNhcmluZyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBzbHVnbWE6IHtcclxuICAgIGlkOiAyMTgsXHJcbiAgICBuYW1lOiAnU2x1Z21hJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdTbHVnbWEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIG1hZ2NhcmdvOiB7XHJcbiAgICBpZDogMjE5LFxyXG4gICAgbmFtZTogJ01hZ2NhcmdvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdNYWdjYXJnbyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmUsIFBva2Vtb25FbGVtZW50VHlwZS5yb2NrXSxcclxuICB9LFxyXG4gIHN3aW51Yjoge1xyXG4gICAgaWQ6IDIyMCxcclxuICAgIG5hbWU6ICdTd2ludWInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1N3aW51YiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmljZSwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBwaWxvc3dpbmU6IHtcclxuICAgIGlkOiAyMjEsXHJcbiAgICBuYW1lOiAnUGlsb3N3aW5lJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdQaWxvc3dpbmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2UsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgY29yc29sYToge1xyXG4gICAgaWQ6IDIyMixcclxuICAgIG5hbWU6ICdDb3Jzb2xhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdDb3Jzb2xhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5yb2NrXSxcclxuICB9LFxyXG4gIHJlbW9yYWlkOiB7XHJcbiAgICBpZDogMjIzLFxyXG4gICAgbmFtZTogJ1JlbW9yYWlkJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdSZW1vcmFpZCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIG9jdGlsbGVyeToge1xyXG4gICAgaWQ6IDIyNCxcclxuICAgIG5hbWU6ICdPY3RpbGxlcnknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ09jdGlsbGVyeSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGRlbGliaXJkOiB7XHJcbiAgICBpZDogMjI1LFxyXG4gICAgbmFtZTogJ0RlbGliaXJkJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdEZWxpYmlyZCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmljZSwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBtYW50aW5lOiB7XHJcbiAgICBpZDogMjI2LFxyXG4gICAgbmFtZTogJ01hbnRpbmUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ01hbnRpbmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBza2FybW9yeToge1xyXG4gICAgaWQ6IDIyNyxcclxuICAgIG5hbWU6ICdTa2FybW9yeScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU2thcm1vcnkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5zdGVlbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBob3VuZG91cjoge1xyXG4gICAgaWQ6IDIyOCxcclxuICAgIG5hbWU6ICdIb3VuZG91cicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnSG91bmRvdXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kYXJrLCBQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXHJcbiAgfSxcclxuICBob3VuZG9vbToge1xyXG4gICAgaWQ6IDIyOSxcclxuICAgIG5hbWU6ICdIb3VuZG9vbScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnSG91bmRvb20hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kYXJrLCBQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXHJcbiAgfSxcclxuICBraW5nZHJhOiB7XHJcbiAgICBpZDogMjMwLFxyXG4gICAgbmFtZTogJ0tpbmdkcmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0tpbmdkcmEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbl0sXHJcbiAgfSxcclxuICBwaGFucHk6IHtcclxuICAgIGlkOiAyMzEsXHJcbiAgICBuYW1lOiAnUGhhbnB5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdQaGFucHkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgZG9ucGhhbjoge1xyXG4gICAgaWQ6IDIzMixcclxuICAgIG5hbWU6ICdEb25waGFuJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdEb25waGFuIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIHBvcnlnb24yOiB7XHJcbiAgICBpZDogMjMzLFxyXG4gICAgbmFtZTogJ1Bvcnlnb24yJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdQb3J5Z29uMiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBzdGFudGxlcjoge1xyXG4gICAgaWQ6IDIzNCxcclxuICAgIG5hbWU6ICdTdGFudGxlcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnU3RhbnRsZXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgc21lYXJnbGU6IHtcclxuICAgIGlkOiAyMzUsXHJcbiAgICBuYW1lOiAnU21lYXJnbGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1NtZWFyZ2xlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHR5cm9ndWU6IHtcclxuICAgIGlkOiAyMzYsXHJcbiAgICBuYW1lOiAnVHlyb2d1ZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnVHlyb2d1ZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcclxuICB9LFxyXG4gIGhpdG1vbnRvcDoge1xyXG4gICAgaWQ6IDIzNyxcclxuICAgIG5hbWU6ICdIaXRtb250b3AnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0hpdG1vbnRvcCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcclxuICB9LFxyXG4gIHNtb29jaHVtOiB7XHJcbiAgICBpZDogMjM4LFxyXG4gICAgbmFtZTogJ1Ntb29jaHVtJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdTbW9vY2h1bSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmljZSwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgZWxla2lkOiB7XHJcbiAgICBpZDogMjM5LFxyXG4gICAgbmFtZTogJ0VsZWtpZCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnRWxla2lkIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxyXG4gIH0sXHJcbiAgbWFnYnk6IHtcclxuICAgIGlkOiAyNDAsXHJcbiAgICBuYW1lOiAnTWFnYnknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ01hZ2J5IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXHJcbiAgfSxcclxuICBtaWx0YW5rOiB7XHJcbiAgICBpZDogMjQxLFxyXG4gICAgbmFtZTogJ01pbHRhbmsnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ01pbHRhbmshJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgYmxpc3NleToge1xyXG4gICAgaWQ6IDI0MixcclxuICAgIG5hbWU6ICdCbGlzc2V5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdCbGlzc2V5IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHJhaWtvdToge1xyXG4gICAgaWQ6IDI0MyxcclxuICAgIG5hbWU6ICdSYWlrb3UnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1JhaWtvdSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5zdWJMZWdlbmRhcnksXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICBlbnRlaToge1xyXG4gICAgaWQ6IDI0NCxcclxuICAgIG5hbWU6ICdFbnRlaScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yLFxyXG4gICAgY3J5OiAnRW50ZWkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuc3ViTGVnZW5kYXJ5LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXHJcbiAgfSxcclxuICBzdWljdW5lOiB7XHJcbiAgICBpZDogMjQ1LFxyXG4gICAgbmFtZTogJ1N1aWN1bmUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1N1aWN1bmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuc3ViTGVnZW5kYXJ5LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgbGFydml0YXI6IHtcclxuICAgIGlkOiAyNDYsXHJcbiAgICBuYW1lOiAnTGFydml0YXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ0xhcnZpdGFyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBwdXBpdGFyOiB7XHJcbiAgICBpZDogMjQ3LFxyXG4gICAgbmFtZTogJ1B1cGl0YXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1B1cGl0YXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIHR5cmFuaXRhcjoge1xyXG4gICAgaWQ6IDI0OCxcclxuICAgIG5hbWU6ICdUeXJhbml0YXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMixcclxuICAgIGNyeTogJ1R5cmFuaXRhciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcclxuICB9LFxyXG4gIGx1Z2lhOiB7XHJcbiAgICBpZDogMjQ5LFxyXG4gICAgbmFtZTogJ0x1Z2lhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdMdWdpYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5sZWdlbmRhcnksXHJcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpYywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBob29oOiB7XHJcbiAgICBpZDogMjUwLFxyXG4gICAgbmFtZTogJ0hvLU9oJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdIby1PaCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5sZWdlbmRhcnksXHJcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZSwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBjZWxlYmk6IHtcclxuICAgIGlkOiAyNTEsXHJcbiAgICBuYW1lOiAnQ2VsZWJpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIsXHJcbiAgICBjcnk6ICdDZWxlYmkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgLy8gR2VuZXJhdGlvbiAzXHJcbiAgdHJlZWNrbzoge1xyXG4gICAgaWQ6IDI1MixcclxuICAgIG5hbWU6ICdUcmVlY2tvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdUcmVlY2tvIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgZ3JvdnlsZToge1xyXG4gICAgaWQ6IDI1MyxcclxuICAgIG5hbWU6ICdHcm92eWxlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdHcm92eWxlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgc2NlcHRpbGU6IHtcclxuICAgIGlkOiAyNTQsXHJcbiAgICBuYW1lOiAnU2NlcHRpbGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NjZXB0aWxlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgdG9yY2hpYzoge1xyXG4gICAgaWQ6IDI1NSxcclxuICAgIG5hbWU6ICdUb3JjaGljJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdUb3JjaGljIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZV0sXHJcbiAgfSxcclxuICBjb21idXNrZW46IHtcclxuICAgIGlkOiAyNTYsXHJcbiAgICBuYW1lOiAnQ29tYnVza2VuJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdDb21idXNrZW4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxyXG4gIH0sXHJcbiAgYmxhemlrZW46IHtcclxuICAgIGlkOiAyNTcsXHJcbiAgICBuYW1lOiAnQmxhemlrZW4nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0JsYXppa2VuIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZSwgUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcclxuICB9LFxyXG4gIG11ZGtpcDoge1xyXG4gICAgaWQ6IDI1OCxcclxuICAgIG5hbWU6ICdNdWRraXAnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ011ZGtpcCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIG1hcnNodG9tcDoge1xyXG4gICAgaWQ6IDI1OSxcclxuICAgIG5hbWU6ICdNYXJzaHRvbXAnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ01hcnNodG9tcCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIHN3YW1wZXJ0OiB7XHJcbiAgICBpZDogMjYwLFxyXG4gICAgbmFtZTogJ1N3YW1wZXJ0JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTd2FtcGVydCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIHBvb2NoeWVuYToge1xyXG4gICAgaWQ6IDI2MSxcclxuICAgIG5hbWU6ICdQb29jaHllbmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1Bvb2NoeWVuYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmtdLFxyXG4gIH0sXHJcbiAgbWlnaHR5ZW5hOiB7XHJcbiAgICBpZDogMjYyLFxyXG4gICAgbmFtZTogJ01pZ2h0eWVuYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTWlnaHR5ZW5hIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXHJcbiAgfSxcclxuICB6aWd6YWdvb246IHtcclxuICAgIGlkOiAyNjMsXHJcbiAgICBuYW1lOiAnWmlnemFnb29uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdaaWd6YWdvb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgbGlub29uZToge1xyXG4gICAgaWQ6IDI2NCxcclxuICAgIG5hbWU6ICdMaW5vb25lJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdMaW5vb25lIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIHd1cm1wbGU6IHtcclxuICAgIGlkOiAyNjUsXHJcbiAgICBuYW1lOiAnV3VybXBsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnV3VybXBsZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1Z10sXHJcbiAgfSxcclxuICBzaWxjb29uOiB7XHJcbiAgICBpZDogMjY2LFxyXG4gICAgbmFtZTogJ1NpbGNvb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NpbGNvb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWddLFxyXG4gIH0sXHJcbiAgYmVhdXRpZmx5OiB7XHJcbiAgICBpZDogMjY3LFxyXG4gICAgbmFtZTogJ0JlYXV0aWZseScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQmVhdXRpZmx5IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIGNhc2Nvb246IHtcclxuICAgIGlkOiAyNjgsXHJcbiAgICBuYW1lOiAnQ2FzY29vbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQ2FzY29vbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1Z10sXHJcbiAgfSxcclxuICBkdXN0b3g6IHtcclxuICAgIGlkOiAyNjksXHJcbiAgICBuYW1lOiAnRHVzdG94JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdEdXN0b3ghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgbG90YWQ6IHtcclxuICAgIGlkOiAyNzAsXHJcbiAgICBuYW1lOiAnTG90YWQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0xvdGFkIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXHJcbiAgfSxcclxuICBsb21icmU6IHtcclxuICAgIGlkOiAyNzEsXHJcbiAgICBuYW1lOiAnTG9tYnJlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdMb21icmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcclxuICB9LFxyXG4gIGx1ZGljb2xvOiB7XHJcbiAgICBpZDogMjcyLFxyXG4gICAgbmFtZTogJ0x1ZGljb2xvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdMdWRpY29sbyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgc2VlZG90OiB7XHJcbiAgICBpZDogMjczLFxyXG4gICAgbmFtZTogJ1NlZWRvdCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU2VlZG90IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgbnV6bGVhZjoge1xyXG4gICAgaWQ6IDI3NCxcclxuICAgIG5hbWU6ICdOdXpsZWFmJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdOdXpsZWFmIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcclxuICB9LFxyXG4gIHNoaWZ0cnk6IHtcclxuICAgIGlkOiAyNzUsXHJcbiAgICBuYW1lOiAnU2hpZnRyeScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU2hpZnRyeSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXHJcbiAgfSxcclxuICB0YWlsbG93OiB7XHJcbiAgICBpZDogMjc2LFxyXG4gICAgbmFtZTogJ1RhaWxsb3cnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1RhaWxsb3chJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgc3dlbGxvdzoge1xyXG4gICAgaWQ6IDI3NyxcclxuICAgIG5hbWU6ICdTd2VsbG93JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTd2VsbG93IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHdpbmd1bGw6IHtcclxuICAgIGlkOiAyNzgsXHJcbiAgICBuYW1lOiAnV2luZ3VsbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnV2luZ3VsbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHBlbGlwcGVyOiB7XHJcbiAgICBpZDogMjc5LFxyXG4gICAgbmFtZTogJ1BlbGlwcGVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdQZWxpcHBlciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHJhbHRzOiB7XHJcbiAgICBpZDogMjgwLFxyXG4gICAgbmFtZTogJ1JhbHRzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdSYWx0cyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAga2lybGlhOiB7XHJcbiAgICBpZDogMjgxLFxyXG4gICAgbmFtZTogJ0tpcmxpYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnS2lybGlhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBnYXJkZXZvaXI6IHtcclxuICAgIGlkOiAyODIsXHJcbiAgICBuYW1lOiAnR2FyZGV2b2lyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdHYXJkZXZvaXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHN1cnNraXQ6IHtcclxuICAgIGlkOiAyODMsXHJcbiAgICBuYW1lOiAnU3Vyc2tpdCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU3Vyc2tpdCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIG1hc3F1ZXJhaW46IHtcclxuICAgIGlkOiAyODQsXHJcbiAgICBuYW1lOiAnTWFzcXVlcmFpbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTWFzcXVlcmFpbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBzaHJvb21pc2g6IHtcclxuICAgIGlkOiAyODUsXHJcbiAgICBuYW1lOiAnU2hyb29taXNoJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTaHJvb21pc2ghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXHJcbiAgfSxcclxuICBicmVsb29tOiB7XHJcbiAgICBpZDogMjg2LFxyXG4gICAgbmFtZTogJ0JyZWxvb20nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0JyZWxvb20hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcclxuICB9LFxyXG4gIHNsYWtvdGg6IHtcclxuICAgIGlkOiAyODcsXHJcbiAgICBuYW1lOiAnU2xha290aCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU2xha290aCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICB2aWdvcm90aDoge1xyXG4gICAgaWQ6IDI4OCxcclxuICAgIG5hbWU6ICdWaWdvcm90aCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnVmlnb3JvdGghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgc2xha2luZzoge1xyXG4gICAgaWQ6IDI4OSxcclxuICAgIG5hbWU6ICdTbGFraW5nJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTbGFraW5nIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIG5pbmNhZGE6IHtcclxuICAgIGlkOiAyOTAsXHJcbiAgICBuYW1lOiAnTmluY2FkYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTmluY2FkYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBuaW5qYXNrOiB7XHJcbiAgICBpZDogMjkxLFxyXG4gICAgbmFtZTogJ05pbmphc2snLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ05pbmphc2shJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgc2hlZGluamE6IHtcclxuICAgIGlkOiAyOTIsXHJcbiAgICBuYW1lOiAnU2hlZGluamEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NoZWRpbmphIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxyXG4gIH0sXHJcbiAgd2hpc211cjoge1xyXG4gICAgaWQ6IDI5MyxcclxuICAgIG5hbWU6ICdXaGlzbXVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdXaGlzbXVyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIGxvdWRyZWQ6IHtcclxuICAgIGlkOiAyOTQsXHJcbiAgICBuYW1lOiAnTG91ZHJlZCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTG91ZHJlZCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBleHBsb3VkOiB7XHJcbiAgICBpZDogMjk1LFxyXG4gICAgbmFtZTogJ0V4cGxvdWQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0V4cGxvdWQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgbWFrdWhpdGE6IHtcclxuICAgIGlkOiAyOTYsXHJcbiAgICBuYW1lOiAnTWFrdWhpdGEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ01ha3VoaXRhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxyXG4gIH0sXHJcbiAgaGFyaXlhbWE6IHtcclxuICAgIGlkOiAyOTcsXHJcbiAgICBuYW1lOiAnSGFyaXlhbWEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0hhcml5YW1hIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxyXG4gIH0sXHJcbiAgYXp1cmlsbDoge1xyXG4gICAgaWQ6IDI5OCxcclxuICAgIG5hbWU6ICdBenVyaWxsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdBenVyaWxsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIG5vc2VwYXNzOiB7XHJcbiAgICBpZDogMjk5LFxyXG4gICAgbmFtZTogJ05vc2VwYXNzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdOb3NlcGFzcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2tdLFxyXG4gIH0sXHJcbiAgc2tpdHR5OiB7XHJcbiAgICBpZDogMzAwLFxyXG4gICAgbmFtZTogJ1NraXR0eScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU2tpdHR5IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIGRlbGNhdHR5OiB7XHJcbiAgICBpZDogMzAxLFxyXG4gICAgbmFtZTogJ0RlbGNhdHR5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdEZWxjYXR0eSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBzYWJsZXllOiB7XHJcbiAgICBpZDogMzAyLFxyXG4gICAgbmFtZTogJ1NhYmxleWUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NhYmxleWUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kYXJrLCBQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxyXG4gIH0sXHJcbiAgbWF3aWxlOiB7XHJcbiAgICBpZDogMzAzLFxyXG4gICAgbmFtZTogJ01hd2lsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTWF3aWxlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWxdLFxyXG4gIH0sXHJcbiAgYXJvbjoge1xyXG4gICAgaWQ6IDMwNCxcclxuICAgIG5hbWU6ICdBcm9uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdBcm9uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWwsIFBva2Vtb25FbGVtZW50VHlwZS5yb2NrXSxcclxuICB9LFxyXG4gIGxhaXJvbjoge1xyXG4gICAgaWQ6IDMwNSxcclxuICAgIG5hbWU6ICdMYWlyb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0xhaXJvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsLCBQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXHJcbiAgfSxcclxuICBhZ2dyb246IHtcclxuICAgIGlkOiAzMDYsXHJcbiAgICBuYW1lOiAnQWdncm9uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdBZ2dyb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5zdGVlbCwgUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2tdLFxyXG4gIH0sXHJcbiAgbWVkaXRpdGU6IHtcclxuICAgIGlkOiAzMDcsXHJcbiAgICBuYW1lOiAnTWVkaXRpdGUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ01lZGl0aXRlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmcsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIG1lZGljaGFtOiB7XHJcbiAgICBpZDogMzA4LFxyXG4gICAgbmFtZTogJ01lZGljaGFtJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdNZWRpY2hhbSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBlbGVjdHJpa2U6IHtcclxuICAgIGlkOiAzMDksXHJcbiAgICBuYW1lOiAnRWxlY3RyaWtlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdFbGVjdHJpa2UhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICBtYW5lY3RyaWM6IHtcclxuICAgIGlkOiAzMTAsXHJcbiAgICBuYW1lOiAnTWFuZWN0cmljJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdNYW5lY3RyaWMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICBwbHVzbGU6IHtcclxuICAgIGlkOiAzMTEsXHJcbiAgICBuYW1lOiAnUGx1c2xlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdQbHVzbGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICBtaW51bjoge1xyXG4gICAgaWQ6IDMxMixcclxuICAgIG5hbWU6ICdNaW51bicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTWludW4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICB2b2xiZWF0OiB7XHJcbiAgICBpZDogMzEzLFxyXG4gICAgbmFtZTogJ1ZvbGJlYXQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1ZvbGJlYXQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWddLFxyXG4gIH0sXHJcbiAgaWxsdW1pc2U6IHtcclxuICAgIGlkOiAzMTQsXHJcbiAgICBuYW1lOiAnSWxsdW1pc2UnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0lsbHVtaXNlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcclxuICB9LFxyXG4gIHJvc2VsaWE6IHtcclxuICAgIGlkOiAzMTUsXHJcbiAgICBuYW1lOiAnUm9zZWxpYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnUm9zZWxpYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIGd1bHBpbjoge1xyXG4gICAgaWQ6IDMxNixcclxuICAgIG5hbWU6ICdHdWxwaW4nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0d1bHBpbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBzd2Fsb3Q6IHtcclxuICAgIGlkOiAzMTcsXHJcbiAgICBuYW1lOiAnU3dhbG90JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTd2Fsb3QhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb25dLFxyXG4gIH0sXHJcbiAgY2FydmFuaGE6IHtcclxuICAgIGlkOiAzMTgsXHJcbiAgICBuYW1lOiAnQ2FydmFuaGEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0NhcnZhbmhhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcclxuICB9LFxyXG4gIHNoYXJwZWRvOiB7XHJcbiAgICBpZDogMzE5LFxyXG4gICAgbmFtZTogJ1NoYXJwZWRvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTaGFycGVkbyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXHJcbiAgfSxcclxuICB3YWlsbWVyOiB7XHJcbiAgICBpZDogMzIwLFxyXG4gICAgbmFtZTogJ1dhaWxtZXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1dhaWxtZXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICB3YWlsb3JkOiB7XHJcbiAgICBpZDogMzIxLFxyXG4gICAgbmFtZTogJ1dhaWxvcmQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1dhaWxvcmQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgbnVtZWw6IHtcclxuICAgIGlkOiAzMjIsXHJcbiAgICBuYW1lOiAnTnVtZWwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ051bWVsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlyZSwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBjYW1lcnVwdDoge1xyXG4gICAgaWQ6IDMyMyxcclxuICAgIG5hbWU6ICdDYW1lcnVwdCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQ2FtZXJ1cHQhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIHRvcmtvYWw6IHtcclxuICAgIGlkOiAzMjQsXHJcbiAgICBuYW1lOiAnVG9ya29hbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnVG9ya29hbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmVdLFxyXG4gIH0sXHJcbiAgc3BvaW5rOiB7XHJcbiAgICBpZDogMzI1LFxyXG4gICAgbmFtZTogJ1Nwb2luaycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU3BvaW5rIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBncnVtcGlnOiB7XHJcbiAgICBpZDogMzI2LFxyXG4gICAgbmFtZTogJ0dydW1waWcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0dydW1waWchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHNwaW5kYToge1xyXG4gICAgaWQ6IDMyNyxcclxuICAgIG5hbWU6ICdTcGluZGEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1NwaW5kYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICB0cmFwaW5jaDoge1xyXG4gICAgaWQ6IDMyOCxcclxuICAgIG5hbWU6ICdUcmFwaW5jaCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnVHJhcGluY2ghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgdmlicmF2YToge1xyXG4gICAgaWQ6IDMyOSxcclxuICAgIG5hbWU6ICdWaWJyYXZhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdWaWJyYXZhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kLCBQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcclxuICB9LFxyXG4gIGZseWdvbjoge1xyXG4gICAgaWQ6IDMzMCxcclxuICAgIG5hbWU6ICdGbHlnb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0ZseWdvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZCwgUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbl0sXHJcbiAgfSxcclxuICBjYWNuZWE6IHtcclxuICAgIGlkOiAzMzEsXHJcbiAgICBuYW1lOiAnQ2FjbmVhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdDYWNuZWEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXHJcbiAgfSxcclxuICBjYWN0dXJuZToge1xyXG4gICAgaWQ6IDMzMixcclxuICAgIG5hbWU6ICdDYWN0dXJuZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQ2FjdHVybmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmtdLFxyXG4gIH0sXHJcbiAgc3dhYmx1OiB7XHJcbiAgICBpZDogMzMzLFxyXG4gICAgbmFtZTogJ1N3YWJsdScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU3dhYmx1IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIGFsdGFyaWE6IHtcclxuICAgIGlkOiAzMzQsXHJcbiAgICBuYW1lOiAnQWx0YXJpYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQWx0YXJpYSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbiwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICB6YW5nb29zZToge1xyXG4gICAgaWQ6IDMzNSxcclxuICAgIG5hbWU6ICdaYW5nb29zZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnWmFuZ29vc2UhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgc2V2aXBlcjoge1xyXG4gICAgaWQ6IDMzNixcclxuICAgIG5hbWU6ICdTZXZpcGVyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTZXZpcGVyIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIGx1bmF0b25lOiB7XHJcbiAgICBpZDogMzM3LFxyXG4gICAgbmFtZTogJ0x1bmF0b25lJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdMdW5hdG9uZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIHNvbHJvY2s6IHtcclxuICAgIGlkOiAzMzgsXHJcbiAgICBuYW1lOiAnU29scm9jaycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU29scm9jayEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIGJhcmJvYWNoOiB7XHJcbiAgICBpZDogMzM5LFxyXG4gICAgbmFtZTogJ0JhcmJvYWNoJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdCYXJib2FjaCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIHdoaXNjYXNoOiB7XHJcbiAgICBpZDogMzQwLFxyXG4gICAgbmFtZTogJ1doaXNjYXNoJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdXaGlzY2FzaCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIGNvcnBoaXNoOiB7XHJcbiAgICBpZDogMzQxLFxyXG4gICAgbmFtZTogJ0NvcnBoaXNoJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdDb3JwaGlzaCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGNyYXdkYXVudDoge1xyXG4gICAgaWQ6IDM0MixcclxuICAgIG5hbWU6ICdDcmF3ZGF1bnQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0NyYXdkYXVudCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXHJcbiAgfSxcclxuICBiYWx0b3k6IHtcclxuICAgIGlkOiAzNDMsXHJcbiAgICBuYW1lOiAnQmFsdG95JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdCYWx0b3khJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmQsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIGNsYXlkb2w6IHtcclxuICAgIGlkOiAzNDQsXHJcbiAgICBuYW1lOiAnQ2xheWRvbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQ2xheWRvbCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZCwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgbGlsZWVwOiB7XHJcbiAgICBpZDogMzQ1LFxyXG4gICAgbmFtZTogJ0xpbGVlcCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTGlsZWVwIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmZvc3NpbCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXHJcbiAgfSxcclxuICBjcmFkaWx5OiB7XHJcbiAgICBpZDogMzQ2LFxyXG4gICAgbmFtZTogJ0NyYWRpbHknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0NyYWRpbHkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuZm9zc2lsLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcclxuICB9LFxyXG4gIGFub3JpdGg6IHtcclxuICAgIGlkOiAzNDcsXHJcbiAgICBuYW1lOiAnQW5vcml0aCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQW5vcml0aCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5mb3NzaWwsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcclxuICB9LFxyXG4gIGFybWFsZG86IHtcclxuICAgIGlkOiAzNDgsXHJcbiAgICBuYW1lOiAnQXJtYWxkbycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQXJtYWxkbyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5mb3NzaWwsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcclxuICB9LFxyXG4gIGZlZWJhczoge1xyXG4gICAgaWQ6IDM0OSxcclxuICAgIG5hbWU6ICdGZWViYXMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0ZlZWJhcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIG1pbG90aWM6IHtcclxuICAgIGlkOiAzNTAsXHJcbiAgICBuYW1lOiAnTWlsb3RpYycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTWlsb3RpYyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGNhc3Rmb3JtOiB7XHJcbiAgICBpZDogMzUxLFxyXG4gICAgbmFtZTogJ0Nhc3Rmb3JtJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdDYXN0Zm9ybSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBrZWNsZW9uOiB7XHJcbiAgICBpZDogMzUyLFxyXG4gICAgbmFtZTogJ0tlY2xlb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0tlY2xlb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgc2h1cHBldDoge1xyXG4gICAgaWQ6IDM1MyxcclxuICAgIG5hbWU6ICdTaHVwcGV0JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTaHVwcGV0IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxyXG4gIH0sXHJcbiAgYmFuZXR0ZToge1xyXG4gICAgaWQ6IDM1NCxcclxuICAgIG5hbWU6ICdCYW5ldHRlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdCYW5ldHRlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxyXG4gIH0sXHJcbiAgZHVza3VsbDoge1xyXG4gICAgaWQ6IDM1NSxcclxuICAgIG5hbWU6ICdEdXNrdWxsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdEdXNrdWxsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxyXG4gIH0sXHJcbiAgZHVzY2xvcHM6IHtcclxuICAgIGlkOiAzNTYsXHJcbiAgICBuYW1lOiAnRHVzY2xvcHMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0R1c2Nsb3BzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxyXG4gIH0sXHJcbiAgdHJvcGl1czoge1xyXG4gICAgaWQ6IDM1NyxcclxuICAgIG5hbWU6ICdUcm9waXVzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdUcm9waXVzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3MsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgY2hpbWVjaG86IHtcclxuICAgIGlkOiAzNTgsXHJcbiAgICBuYW1lOiAnQ2hpbWVjaG8nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0NoaW1lY2hvIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBhYnNvbDoge1xyXG4gICAgaWQ6IDM1OSxcclxuICAgIG5hbWU6ICdBYnNvbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQWJzb2whJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcclxuICB9LFxyXG4gIHd5bmF1dDoge1xyXG4gICAgaWQ6IDM2MCxcclxuICAgIG5hbWU6ICdXeW5hdXQnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1d5bmF1dCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgc25vcnVudDoge1xyXG4gICAgaWQ6IDM2MSxcclxuICAgIG5hbWU6ICdTbm9ydW50JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTbm9ydW50IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuaWNlXSxcclxuICB9LFxyXG4gIGdsYWxpZToge1xyXG4gICAgaWQ6IDM2MixcclxuICAgIG5hbWU6ICdHbGFsaWUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0dsYWxpZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmljZV0sXHJcbiAgfSxcclxuICBzcGhlYWw6IHtcclxuICAgIGlkOiAzNjMsXHJcbiAgICBuYW1lOiAnU3BoZWFsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTcGhlYWwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2UsIFBva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBzZWFsZW86IHtcclxuICAgIGlkOiAzNjQsXHJcbiAgICBuYW1lOiAnU2VhbGVvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTZWFsZW8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2UsIFBva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICB3YWxyZWluOiB7XHJcbiAgICBpZDogMzY1LFxyXG4gICAgbmFtZTogJ1dhbHJlaW4nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1dhbHJlaW4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2UsIFBva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBjbGFtcGVybDoge1xyXG4gICAgaWQ6IDM2NixcclxuICAgIG5hbWU6ICdDbGFtcGVybCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQ2xhbXBlcmwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBodW50YWlsOiB7XHJcbiAgICBpZDogMzY3LFxyXG4gICAgbmFtZTogJ0h1bnRhaWwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0h1bnRhaWwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBnb3JlYnlzczoge1xyXG4gICAgaWQ6IDM2OCxcclxuICAgIG5hbWU6ICdHb3JlYnlzcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnR29yZWJ5c3MhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICByZWxpY2FudGg6IHtcclxuICAgIGlkOiAzNjksXHJcbiAgICBuYW1lOiAnUmVsaWNhbnRoJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdSZWxpY2FudGghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlciwgUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2tdLFxyXG4gIH0sXHJcbiAgbHV2ZGlzYzoge1xyXG4gICAgaWQ6IDM3MCxcclxuICAgIG5hbWU6ICdMdXZkaXNjJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdMdXZkaXNjIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgYmFnb246IHtcclxuICAgIGlkOiAzNzEsXHJcbiAgICBuYW1lOiAnQmFnb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0JhZ29uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcclxuICB9LFxyXG4gIHNoZWxnb246IHtcclxuICAgIGlkOiAzNzIsXHJcbiAgICBuYW1lOiAnU2hlbGdvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnU2hlbGdvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbl0sXHJcbiAgfSxcclxuICBzYWxhbWVuY2U6IHtcclxuICAgIGlkOiAzNzMsXHJcbiAgICBuYW1lOiAnU2FsYW1lbmNlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdTYWxhbWVuY2UhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kcmFnb24sIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgYmVsZHVtOiB7XHJcbiAgICBpZDogMzc0LFxyXG4gICAgbmFtZTogJ0JlbGR1bScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnQmVsZHVtIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWwsIFBva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIG1ldGFuZzoge1xyXG4gICAgaWQ6IDM3NSxcclxuICAgIG5hbWU6ICdNZXRhbmcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ01ldGFuZyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBtZXRhZ3Jvc3M6IHtcclxuICAgIGlkOiAzNzYsXHJcbiAgICBuYW1lOiAnTWV0YWdyb3NzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdNZXRhZ3Jvc3MhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5zdGVlbCwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgcmVnaXJvY2s6IHtcclxuICAgIGlkOiAzNzcsXHJcbiAgICBuYW1lOiAnUmVnaXJvY2snLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ1JlZ2lyb2NrIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2tdLFxyXG4gIH0sXHJcbiAgcmVnaWNlOiB7XHJcbiAgICBpZDogMzc4LFxyXG4gICAgbmFtZTogJ1JlZ2ljZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnUmVnaWNlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmljZV0sXHJcbiAgfSxcclxuICByZWdpc3RlZWw6IHtcclxuICAgIGlkOiAzNzksXHJcbiAgICBuYW1lOiAnUmVnaXN0ZWVsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMsXHJcbiAgICBjcnk6ICdSZWdpc3RlZWwhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuc3ViTGVnZW5kYXJ5LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWxdLFxyXG4gIH0sXHJcbiAgbGF0aWFzOiB7XHJcbiAgICBpZDogMzgwLFxyXG4gICAgbmFtZTogJ0xhdGlhcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTGF0aWFzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbiwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgbGF0aW9zOiB7XHJcbiAgICBpZDogMzgxLFxyXG4gICAgbmFtZTogJ0xhdGlvcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnTGF0aW9zIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbiwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAga3lvZ3JlOiB7XHJcbiAgICBpZDogMzgyLFxyXG4gICAgbmFtZTogJ0t5b2dyZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnS3lvZ3JlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmxlZ2VuZGFyeSxcclxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBncm91ZG9uOiB7XHJcbiAgICBpZDogMzgzLFxyXG4gICAgbmFtZTogJ0dyb3Vkb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0dyb3Vkb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubGVnZW5kYXJ5LFxyXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICByYXlxdWF6YToge1xyXG4gICAgaWQ6IDM4NCxcclxuICAgIG5hbWU6ICdSYXlxdWF6YScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnUmF5cXVhemEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubGVnZW5kYXJ5LFxyXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbiwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBqaXJhY2hpOiB7XHJcbiAgICBpZDogMzg1LFxyXG4gICAgbmFtZTogJ0ppcmFjaGknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0ppcmFjaGkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5zdGVlbCwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgZGVveHlzOiB7XHJcbiAgICBpZDogMzg2LFxyXG4gICAgbmFtZTogJ0Rlb3h5cycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnRGVveHlzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBkZW94eXNfc3BlZWQ6IHtcclxuICAgIGlkOiAzODYsXHJcbiAgICBuYW1lOiAnRGVveHlzIChTcGVlZCknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0Rlb3h5cyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgZGVveHlzX2F0dGFjazoge1xyXG4gICAgaWQ6IDM4NixcclxuICAgIG5hbWU6ICdEZW94eXMgKEF0dGFjayknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuMyxcclxuICAgIGNyeTogJ0Rlb3h5cyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgZGVveHlzX2RlZmVuc2U6IHtcclxuICAgIGlkOiAzODYsXHJcbiAgICBuYW1lOiAnRGVveHlzIChEZWZlbnNlKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW4zLFxyXG4gICAgY3J5OiAnRGVveHlzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICAvLyBHZW5lcmF0aW9uIDRcclxuICB0dXJ0d2lnOiB7XHJcbiAgICBpZDogMzg3LFxyXG4gICAgbmFtZTogJ1R1cnR3aWcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ1R1cnR3aWchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXHJcbiAgfSxcclxuICBncm90bGU6IHtcclxuICAgIGlkOiAzODgsXHJcbiAgICBuYW1lOiAnR3JvdGxlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdHcm90bGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXHJcbiAgfSxcclxuICB0b3J0ZXJyYToge1xyXG4gICAgaWQ6IDM4OSxcclxuICAgIG5hbWU6ICdUb3J0ZXJyYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnVG9ydGVycmEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBjaGltY2hhcjoge1xyXG4gICAgaWQ6IDM5MCxcclxuICAgIG5hbWU6ICdDaGltY2hhcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQ2hpbWNoYXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIG1vbmZlcm5vOiB7XHJcbiAgICBpZDogMzkxLFxyXG4gICAgbmFtZTogJ01vbmZlcm5vJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdNb25mZXJubyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpcmUsIFBva2Vtb25FbGVtZW50VHlwZS5maWdodGluZ10sXHJcbiAgfSxcclxuICBpbmZlcm5hcGU6IHtcclxuICAgIGlkOiAzOTIsXHJcbiAgICBuYW1lOiAnSW5mZXJuYXBlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdJbmZlcm5hcGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxyXG4gIH0sXHJcbiAgcGlwbHVwOiB7XHJcbiAgICBpZDogMzkzLFxyXG4gICAgbmFtZTogJ1BpcGx1cCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnUGlwbHVwIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgcHJpbnBsdXA6IHtcclxuICAgIGlkOiAzOTQsXHJcbiAgICBuYW1lOiAnUHJpbnBsdXAnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ1ByaW5wbHVwIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgZW1wb2xlb246IHtcclxuICAgIGlkOiAzOTUsXHJcbiAgICBuYW1lOiAnRW1wb2xlb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0VtcG9sZW9uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXHJcbiAgfSxcclxuICBzdGFybHk6IHtcclxuICAgIGlkOiAzOTYsXHJcbiAgICBuYW1lOiAnU3Rhcmx5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdTdGFybHkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWwsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgc3RhcmF2aWE6IHtcclxuICAgIGlkOiAzOTcsXHJcbiAgICBuYW1lOiAnU3RhcmF2aWEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ1N0YXJhdmlhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHN0YXJhcHRvcjoge1xyXG4gICAgaWQ6IDM5OCxcclxuICAgIG5hbWU6ICdTdGFyYXB0b3InLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ1N0YXJhcHRvciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBiaWRvb2Y6IHtcclxuICAgIGlkOiAzOTksXHJcbiAgICBuYW1lOiAnQmlkb29mJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdCaWRvb2YhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgYmliYXJlbDoge1xyXG4gICAgaWQ6IDQwMCxcclxuICAgIG5hbWU6ICdCaWJhcmVsJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdCaWJhcmVsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAga3JpY2tldG90OiB7XHJcbiAgICBpZDogNDAxLFxyXG4gICAgbmFtZTogJ0tyaWNrZXRvdCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnS3JpY2tldG90IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcclxuICB9LFxyXG4gIGtyaWNrZXR1bmU6IHtcclxuICAgIGlkOiA0MDIsXHJcbiAgICBuYW1lOiAnS3JpY2tldHVuZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnS3JpY2tldHVuZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1Z10sXHJcbiAgfSxcclxuICBzaGlueDoge1xyXG4gICAgaWQ6IDQwMyxcclxuICAgIG5hbWU6ICdTaGlueCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnU2hpbnghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICBsdXhpbzoge1xyXG4gICAgaWQ6IDQwNCxcclxuICAgIG5hbWU6ICdMdXhpbycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnTHV4aW8hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICBsdXhyYXk6IHtcclxuICAgIGlkOiA0MDUsXHJcbiAgICBuYW1lOiAnTHV4cmF5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdMdXhyYXkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICBidWRldzoge1xyXG4gICAgaWQ6IDQwNixcclxuICAgIG5hbWU6ICdCdWRldycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQnVkZXchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICByb3NlcmFkZToge1xyXG4gICAgaWQ6IDQwNyxcclxuICAgIG5hbWU6ICdSb3NlcmFkZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnUm9zZXJhZGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbl0sXHJcbiAgfSxcclxuICBjcmFuaWRvczoge1xyXG4gICAgaWQ6IDQwOCxcclxuICAgIG5hbWU6ICdDcmFuaWRvcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQ3Jhbmlkb3MhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuZm9zc2lsLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXHJcbiAgfSxcclxuICByYW1wYXJkb3M6IHtcclxuICAgIGlkOiA0MDksXHJcbiAgICBuYW1lOiAnUmFtcGFyZG9zJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdSYW1wYXJkb3MhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuZm9zc2lsLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXHJcbiAgfSxcclxuICBzaGllbGRvbjoge1xyXG4gICAgaWQ6IDQxMCxcclxuICAgIG5hbWU6ICdTaGllbGRvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnU2hpZWxkb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkuZm9zc2lsLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9jaywgUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsXSxcclxuICB9LFxyXG4gIGJhc3Rpb2Rvbjoge1xyXG4gICAgaWQ6IDQxMSxcclxuICAgIG5hbWU6ICdCYXN0aW9kb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0Jhc3Rpb2RvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5mb3NzaWwsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrLCBQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWxdLFxyXG4gIH0sXHJcbiAgYnVybXlfcGxhbnQ6IHtcclxuICAgIGlkOiA0MTIsXHJcbiAgICBuYW1lOiAnQnVybXkgKFBsYW50KScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQnVybXkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWddLFxyXG4gIH0sXHJcbiAgYnVybXlfc2FuZHk6IHtcclxuICAgIGlkOiA0MTIsXHJcbiAgICBuYW1lOiAnQnVybXkgKFNhbmR5KScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQnVybXkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWddLFxyXG4gIH0sXHJcbiAgYnVybXlfdHJhc2g6IHtcclxuICAgIGlkOiA0MTIsXHJcbiAgICBuYW1lOiAnQnVybXkgKFRyYXNoKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQnVybXkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWddLFxyXG4gIH0sXHJcbiAgd29ybWFkYW1fcGxhbnQ6IHtcclxuICAgIGlkOiA0MTMsXHJcbiAgICBuYW1lOiAnV29ybWFkYW0gKFBsYW50KScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnV29ybWFkYW0hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXHJcbiAgfSxcclxuICB3b3JtYWRhbV9zYW5keToge1xyXG4gICAgaWQ6IDQxMyxcclxuICAgIG5hbWU6ICdXb3JtYWRhbSAoU2FuZHkpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdXb3JtYWRhbSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICB3b3JtYWRhbV90cmFzaDoge1xyXG4gICAgaWQ6IDQxMyxcclxuICAgIG5hbWU6ICdXb3JtYWRhbSAoVHJhc2gpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdXb3JtYWRhbSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsXSxcclxuICB9LFxyXG4gIG1vdGhpbToge1xyXG4gICAgaWQ6IDQxNCxcclxuICAgIG5hbWU6ICdNb3RoaW0nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ01vdGhpbSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBjb21iZWVfZmVtYWxlOiB7XHJcbiAgICBpZDogNDE1LFxyXG4gICAgbmFtZTogJ0NvbWJlZSAoRmVtYWxlKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQ29tYmVlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIGNvbWJlZV9tYWxlOiB7XHJcbiAgICBpZDogNDE1LFxyXG4gICAgbmFtZTogJ0NvbWJlZSAoTWFsZSknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0NvbWJlZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmJ1ZywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICB2ZXNwaXF1ZW46IHtcclxuICAgIGlkOiA0MTYsXHJcbiAgICBuYW1lOiAnVmVzcGlxdWVuJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdWZXNwaXF1ZW4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgcGFjaGlyaXN1OiB7XHJcbiAgICBpZDogNDE3LFxyXG4gICAgbmFtZTogJ1BhY2hpcmlzdScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnUGFjaGlyaXN1IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWNdLFxyXG4gIH0sXHJcbiAgYnVpemVsOiB7XHJcbiAgICBpZDogNDE4LFxyXG4gICAgbmFtZTogJ0J1aXplbCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQnVpemVsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgZmxvYXR6ZWw6IHtcclxuICAgIGlkOiA0MTksXHJcbiAgICBuYW1lOiAnRmxvYXR6ZWwnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0Zsb2F0emVsIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgY2hlcnViaToge1xyXG4gICAgaWQ6IDQyMCxcclxuICAgIG5hbWU6ICdDaGVydWJpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdDaGVydWJpIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgY2hlcnJpbToge1xyXG4gICAgaWQ6IDQyMSxcclxuICAgIG5hbWU6ICdDaGVycmltJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdDaGVycmltIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgc2hlbGxvc19lYXN0OiB7XHJcbiAgICBpZDogNDIyLFxyXG4gICAgbmFtZTogJ1NoZWxsb3MgKEVhc3QpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdTaGVsbG9zIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgc2hlbGxvc193ZXN0OiB7XHJcbiAgICBpZDogNDIyLFxyXG4gICAgbmFtZTogJ1NoZWxsb3MgKFdlc3QpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdTaGVsbG9zIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXJdLFxyXG4gIH0sXHJcbiAgZ2FzdHJvZG9uX2Vhc3Q6IHtcclxuICAgIGlkOiA0MjMsXHJcbiAgICBuYW1lOiAnR2FzdHJvZG9uIChFYXN0KScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnR2FzdHJvZG9uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgZ2FzdHJvZG9uX3dlc3Q6IHtcclxuICAgIGlkOiA0MjMsXHJcbiAgICBuYW1lOiAnR2FzdHJvZG9uIChXZXN0KScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnR2FzdHJvZG9uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUud2F0ZXIsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgYW1iaXBvbToge1xyXG4gICAgaWQ6IDQyNCxcclxuICAgIG5hbWU6ICdBbWJpcG9tJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdBbWJpcG9tIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIGRyaWZsb29uOiB7XHJcbiAgICBpZDogNDI1LFxyXG4gICAgbmFtZTogJ0RyaWZsb29uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdEcmlmbG9vbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0LCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIGRyaWZibGltOiB7XHJcbiAgICBpZDogNDI2LFxyXG4gICAgbmFtZTogJ0RyaWZibGltJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdEcmlmYmxpbSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0LCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIGJ1bmVhcnk6IHtcclxuICAgIGlkOiA0MjcsXHJcbiAgICBuYW1lOiAnQnVuZWFyeScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQnVuZWFyeSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbF0sXHJcbiAgfSxcclxuICBsb3B1bm55OiB7XHJcbiAgICBpZDogNDI4LFxyXG4gICAgbmFtZTogJ0xvcHVubnknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0xvcHVubnkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgbWlzbWFnaXVzOiB7XHJcbiAgICBpZDogNDI5LFxyXG4gICAgbmFtZTogJ01pc21hZ2l1cycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnTWlzbWFnaXVzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxyXG4gIH0sXHJcbiAgaG9uY2hrcm93OiB7XHJcbiAgICBpZDogNDMwLFxyXG4gICAgbmFtZTogJ0hvbmNoa3JvdycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnSG9uY2hrcm93IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZGFyaywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBnbGFtZW93OiB7XHJcbiAgICBpZDogNDMxLFxyXG4gICAgbmFtZTogJ0dsYW1lb3cnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0dsYW1lb3chJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgcHVydWdseToge1xyXG4gICAgaWQ6IDQzMixcclxuICAgIG5hbWU6ICdQdXJ1Z2x5JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdQdXJ1Z2x5IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIGNoaW5nbGluZzoge1xyXG4gICAgaWQ6IDQzMyxcclxuICAgIG5hbWU6ICdDaGluZ2xpbmcnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0NoaW5nbGluZyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgc3R1bmt5OiB7XHJcbiAgICBpZDogNDM0LFxyXG4gICAgbmFtZTogJ1N0dW5reScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnU3R1bmt5IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXHJcbiAgfSxcclxuICBza3VudGFuazoge1xyXG4gICAgaWQ6IDQzNSxcclxuICAgIG5hbWU6ICdTa3VudGFuaycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnU2t1bnRhbmshJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb24sIFBva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcclxuICB9LFxyXG4gIGJyb256b3I6IHtcclxuICAgIGlkOiA0MzYsXHJcbiAgICBuYW1lOiAnQnJvbnpvcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQnJvbnpvciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsLCBQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBicm9uem9uZzoge1xyXG4gICAgaWQ6IDQzNyxcclxuICAgIG5hbWU6ICdCcm9uem9uZycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQnJvbnpvbmchJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5zdGVlbCwgUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgYm9uc2x5OiB7XHJcbiAgICBpZDogNDM4LFxyXG4gICAgbmFtZTogJ0JvbnNseScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQm9uc2x5IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXHJcbiAgfSxcclxuICBtaW1lSnI6IHtcclxuICAgIGlkOiA0MzksXHJcbiAgICBuYW1lOiAnTWltZSBKci4nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ01pbWUgSnIuIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBoYXBwaW55OiB7XHJcbiAgICBpZDogNDQwLFxyXG4gICAgbmFtZTogJ0hhcHBpbnknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0hhcHBpbnkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgY2hhdG90OiB7XHJcbiAgICBpZDogNDQxLFxyXG4gICAgbmFtZTogJ0NoYXRvdCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQ2hhdG90IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHNwaXJpdG9tYjoge1xyXG4gICAgaWQ6IDQ0MixcclxuICAgIG5hbWU6ICdTcGlyaXRvbWInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ1NwaXJpdG9tYiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0LCBQb2tlbW9uRWxlbWVudFR5cGUuZGFya10sXHJcbiAgfSxcclxuICBnaWJsZToge1xyXG4gICAgaWQ6IDQ0MyxcclxuICAgIG5hbWU6ICdHaWJsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnR2libGUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kcmFnb24sIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgZ2FiaXRlOiB7XHJcbiAgICBpZDogNDQ0LFxyXG4gICAgbmFtZTogJ0dhYml0ZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnR2FiaXRlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uLCBQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIGdhcmNob21wOiB7XHJcbiAgICBpZDogNDQ1LFxyXG4gICAgbmFtZTogJ0dhcmNob21wJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdHYXJjaG9tcCEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbiwgUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZF0sXHJcbiAgfSxcclxuICBtdW5jaGxheDoge1xyXG4gICAgaWQ6IDQ0NixcclxuICAgIG5hbWU6ICdNdW5jaGxheCcsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnTXVuY2hsYXghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgcmlvbHU6IHtcclxuICAgIGlkOiA0NDcsXHJcbiAgICBuYW1lOiAnUmlvbHUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ1Jpb2x1IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmddLFxyXG4gIH0sXHJcbiAgbHVjYXJpbzoge1xyXG4gICAgaWQ6IDQ0OCxcclxuICAgIG5hbWU6ICdMdWNhcmlvJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdMdWNhcmlvIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmlnaHRpbmcsIFBva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXHJcbiAgfSxcclxuICBoaXBwb3BvdGFzOiB7XHJcbiAgICBpZDogNDQ5LFxyXG4gICAgbmFtZTogJ0hpcHBvcG90YXMnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0hpcHBvcG90YXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgaGlwcG93ZG9uOiB7XHJcbiAgICBpZDogNDUwLFxyXG4gICAgbmFtZTogJ0hpcHBvd2RvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnSGlwcG93ZG9uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIHNrb3J1cGk6IHtcclxuICAgIGlkOiA0NTEsXHJcbiAgICBuYW1lOiAnU2tvcnVwaScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnU2tvcnVwaSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbiwgUG9rZW1vbkVsZW1lbnRUeXBlLmJ1Z10sXHJcbiAgfSxcclxuICBkcmFwaW9uOiB7XHJcbiAgICBpZDogNDUyLFxyXG4gICAgbmFtZTogJ0RyYXBpb24nLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0RyYXBpb24hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wb2lzb24sIFBva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcclxuICB9LFxyXG4gIGNyb2FndW5rOiB7XHJcbiAgICBpZDogNDUzLFxyXG4gICAgbmFtZTogJ0Nyb2FndW5rJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdDcm9hZ3VuayEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbiwgUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcclxuICB9LFxyXG4gIHRveGljcm9hazoge1xyXG4gICAgaWQ6IDQ1NCxcclxuICAgIG5hbWU6ICdUb3hpY3JvYWsnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ1RveGljcm9hayEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBvaXNvbiwgUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcclxuICB9LFxyXG4gIGNhcm5pdmluZToge1xyXG4gICAgaWQ6IDQ1NSxcclxuICAgIG5hbWU6ICdDYXJuaXZpbmUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0Nhcm5pdmluZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcclxuICB9LFxyXG4gIGZpbm5lb246IHtcclxuICAgIGlkOiA0NTYsXHJcbiAgICBuYW1lOiAnRmlubmVvbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnRmlubmVvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIGx1bWluZW9uOiB7XHJcbiAgICBpZDogNDU3LFxyXG4gICAgbmFtZTogJ0x1bWluZW9uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdMdW1pbmVvbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG4gIG1hbnR5a2U6IHtcclxuICAgIGlkOiA0NTgsXHJcbiAgICBuYW1lOiAnTWFudHlrZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnTWFudHlrZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIHNub3Zlcjoge1xyXG4gICAgaWQ6IDQ1OSxcclxuICAgIG5hbWU6ICdTbm92ZXInLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ1Nub3ZlciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUuaWNlXSxcclxuICB9LFxyXG4gIGFib21hc25vdzoge1xyXG4gICAgaWQ6IDQ2MCxcclxuICAgIG5hbWU6ICdBYm9tYXNub3cnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0Fib21hc25vdyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzLCBQb2tlbW9uRWxlbWVudFR5cGUuaWNlXSxcclxuICB9LFxyXG4gIHdlYXZpbGU6IHtcclxuICAgIGlkOiA0NjEsXHJcbiAgICBuYW1lOiAnV2VhdmlsZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnV2VhdmlsZSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmRhcmssIFBva2Vtb25FbGVtZW50VHlwZS5pY2VdLFxyXG4gIH0sXHJcbiAgbWFnbmV6b25lOiB7XHJcbiAgICBpZDogNDYyLFxyXG4gICAgbmFtZTogJ01hZ25lem9uZScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnTWFnbmV6b25lIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWMsIFBva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXHJcbiAgfSxcclxuICBsaWNraWxpY2t5OiB7XHJcbiAgICBpZDogNDYzLFxyXG4gICAgbmFtZTogJ0xpY2tpbGlja3knLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0xpY2tpbGlja3khJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgcmh5cGVyaW9yOiB7XHJcbiAgICBpZDogNDY0LFxyXG4gICAgbmFtZTogJ1JoeXBlcmlvcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnUmh5cGVyaW9yIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kLCBQb2tlbW9uRWxlbWVudFR5cGUucm9ja10sXHJcbiAgfSxcclxuICB0YW5ncm93dGg6IHtcclxuICAgIGlkOiA0NjUsXHJcbiAgICBuYW1lOiAnVGFuZ3Jvd3RoJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdUYW5ncm93dGghJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzc10sXHJcbiAgfSxcclxuICBlbGVjdGl2aXJlOiB7XHJcbiAgICBpZDogNDY2LFxyXG4gICAgbmFtZTogJ0VsZWN0aXZpcmUnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0VsZWN0aXZpcmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpY10sXHJcbiAgfSxcclxuICBtYWdtb3J0YXI6IHtcclxuICAgIGlkOiA0NjcsXHJcbiAgICBuYW1lOiAnTWFnbW9ydGFyJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdNYWdtb3J0YXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIHRvZ2VraXNzOiB7XHJcbiAgICBpZDogNDY4LFxyXG4gICAgbmFtZTogJ1RvZ2VraXNzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdUb2dla2lzcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLm5vcm1hbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICB5YW5tZWdhOiB7XHJcbiAgICBpZDogNDY5LFxyXG4gICAgbmFtZTogJ1lhbm1lZ2EnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ1lhbm1lZ2EhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5idWcsIFBva2Vtb25FbGVtZW50VHlwZS5mbHlpbmddLFxyXG4gIH0sXHJcbiAgbGVhZmVvbjoge1xyXG4gICAgaWQ6IDQ3MCxcclxuICAgIG5hbWU6ICdMZWFmZW9uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdMZWFmZW9uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3Jhc3NdLFxyXG4gIH0sXHJcbiAgZ2xhY2Vvbjoge1xyXG4gICAgaWQ6IDQ3MSxcclxuICAgIG5hbWU6ICdHbGFjZW9uJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdHbGFjZW9uIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuaWNlXSxcclxuICB9LFxyXG4gIGdsaXNjb3I6IHtcclxuICAgIGlkOiA0NzIsXHJcbiAgICBuYW1lOiAnR2xpc2NvcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnR2xpc2NvciEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyb3VuZCwgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBtYW1vc3dpbmU6IHtcclxuICAgIGlkOiA0NzMsXHJcbiAgICBuYW1lOiAnTWFtb3N3aW5lJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdNYW1vc3dpbmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2UsIFBva2Vtb25FbGVtZW50VHlwZS5ncm91bmRdLFxyXG4gIH0sXHJcbiAgcG9yeWdvblo6IHtcclxuICAgIGlkOiA0NzQsXHJcbiAgICBuYW1lOiAnUG9yeWdvbi1aJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdQb3J5Z29uLVohJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgZ2FsbGFkZToge1xyXG4gICAgaWQ6IDQ3NSxcclxuICAgIG5hbWU6ICdHYWxsYWRlJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdHYWxsYWRlIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpYywgUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcclxuICB9LFxyXG4gIHByb2JvcGFzczoge1xyXG4gICAgaWQ6IDQ3NixcclxuICAgIG5hbWU6ICdQcm9ib3Bhc3MnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ1Byb2JvcGFzcyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnJvY2ssIFBva2Vtb25FbGVtZW50VHlwZS5zdGVlbF0sXHJcbiAgfSxcclxuICBkdXNrbm9pcjoge1xyXG4gICAgaWQ6IDQ3NyxcclxuICAgIG5hbWU6ICdEdXNrbm9pcicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnRHVza25vaXIhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdF0sXHJcbiAgfSxcclxuICBmcm9zbGFzczoge1xyXG4gICAgaWQ6IDQ3OCxcclxuICAgIG5hbWU6ICdGcm9zbGFzcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnRnJvc2xhc3MhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5pY2UsIFBva2Vtb25FbGVtZW50VHlwZS5naG9zdF0sXHJcbiAgfSxcclxuICByb3RvbToge1xyXG4gICAgaWQ6IDQ3OSxcclxuICAgIG5hbWU6ICdSb3RvbScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnUm90b20hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpYywgUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0XSxcclxuICB9LFxyXG4gIHJvdG9tX2Zhbjoge1xyXG4gICAgaWQ6IDQ3OSxcclxuICAgIG5hbWU6ICdSb3RvbSAoRmFuKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnUm90b20hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpYywgUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0XSxcclxuICB9LFxyXG4gIHJvdG9tX2Zyb3N0OiB7XHJcbiAgICBpZDogNDc5LFxyXG4gICAgbmFtZTogJ1JvdG9tIChGcm9zdCknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ1JvdG9tIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZWxlY3RyaWMsIFBva2Vtb25FbGVtZW50VHlwZS5naG9zdF0sXHJcbiAgfSxcclxuICByb3RvbV9oZWF0OiB7XHJcbiAgICBpZDogNDc5LFxyXG4gICAgbmFtZTogJ1JvdG9tIChIZWF0KScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnUm90b20hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpYywgUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0XSxcclxuICB9LFxyXG4gIHJvdG9tX21vdzoge1xyXG4gICAgaWQ6IDQ3OSxcclxuICAgIG5hbWU6ICdSb3RvbSAoTW93KScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnUm90b20hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5lbGVjdHJpYywgUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0XSxcclxuICB9LFxyXG4gIHJvdG9tX3dhc2g6IHtcclxuICAgIGlkOiA0NzksXHJcbiAgICBuYW1lOiAnUm90b20gKFdhc2gpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdSb3RvbSEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljLCBQb2tlbW9uRWxlbWVudFR5cGUuZ2hvc3RdLFxyXG4gIH0sXHJcbiAgdXhpZToge1xyXG4gICAgaWQ6IDQ4MCxcclxuICAgIG5hbWU6ICdVeGllJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdVeGllIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgbWVzcHJpdDoge1xyXG4gICAgaWQ6IDQ4MSxcclxuICAgIG5hbWU6ICdNZXNwcml0JyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdNZXNwcml0IScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgYXplbGY6IHtcclxuICAgIGlkOiA0ODIsXHJcbiAgICBuYW1lOiAnQXplbGYnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0F6ZWxmIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LnN1YkxlZ2VuZGFyeSxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnBzeWNoaWNdLFxyXG4gIH0sXHJcbiAgZGlhbGdhOiB7XHJcbiAgICBpZDogNDgzLFxyXG4gICAgbmFtZTogJ0RpYWxnYScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnRGlhbGdhIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmxlZ2VuZGFyeSxcclxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5zdGVlbCwgUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbl0sXHJcbiAgfSxcclxuICBwYWxraWE6IHtcclxuICAgIGlkOiA0ODQsXHJcbiAgICBuYW1lOiAnUGFsa2lhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdQYWxraWEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubGVnZW5kYXJ5LFxyXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyLCBQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcclxuICB9LFxyXG4gIGhlYXRyYW46IHtcclxuICAgIGlkOiA0ODUsXHJcbiAgICBuYW1lOiAnSGVhdHJhbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnSGVhdHJhbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5sZWdlbmRhcnksXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlLCBQb2tlbW9uRWxlbWVudFR5cGUuc3RlZWxdLFxyXG4gIH0sXHJcbiAgcmVnaWdpZ2FzOiB7XHJcbiAgICBpZDogNDg2LFxyXG4gICAgbmFtZTogJ1JlZ2lnaWdhcycsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnUmVnaWdpZ2FzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmxlZ2VuZGFyeSxcclxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ub3JtYWxdLFxyXG4gIH0sXHJcbiAgZ2lyYXRpbmE6IHtcclxuICAgIGlkOiA0ODcsXHJcbiAgICBuYW1lOiAnR2lyYXRpbmEnLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0dpcmF0aW5hIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmxlZ2VuZGFyeSxcclxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdCwgUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbl0sXHJcbiAgfSxcclxuICBnaXJhdGluYV9vcmlnaW46IHtcclxuICAgIGlkOiA0ODcsXHJcbiAgICBuYW1lOiAnR2lyYXRpbmEgKE9yaWdpbiknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0dpcmF0aW5hIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5LmxlZ2VuZGFyeSxcclxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5naG9zdCwgUG9rZW1vbkVsZW1lbnRUeXBlLmRyYWdvbl0sXHJcbiAgfSxcclxuICBjcmVzc2VsaWE6IHtcclxuICAgIGlkOiA0ODgsXHJcbiAgICBuYW1lOiAnQ3Jlc3NlbGlhJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdDcmVzc2VsaWEhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubGVnZW5kYXJ5LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucHN5Y2hpY10sXHJcbiAgfSxcclxuICBwaGlvbmU6IHtcclxuICAgIGlkOiA0ODksXHJcbiAgICBuYW1lOiAnUGhpb25lJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdQaGlvbmUhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBtYW5hcGh5OiB7XHJcbiAgICBpZDogNDkwLFxyXG4gICAgbmFtZTogJ01hbmFwaHknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ01hbmFwaHkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS53YXRlcl0sXHJcbiAgfSxcclxuICBkYXJrcmFpOiB7XHJcbiAgICBpZDogNDkxLFxyXG4gICAgbmFtZTogJ0RhcmtyYWknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0RhcmtyYWkhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcclxuICB9LFxyXG4gIHNoYXltaW46IHtcclxuICAgIGlkOiA0OTIsXHJcbiAgICBuYW1lOiAnU2hheW1pbicsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnU2hheW1pbiEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcclxuICB9LFxyXG4gIHNoYXltaW5fc2t5OiB7XHJcbiAgICBpZDogNDkyLFxyXG4gICAgbmFtZTogJ1NoYXltaW4gKFNreSknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ1NoYXltaW4hJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5ncmFzcywgUG9rZW1vbkVsZW1lbnRUeXBlLmZseWluZ10sXHJcbiAgfSxcclxuICBhcmNldXM6IHtcclxuICAgIGlkOiA0OTMsXHJcbiAgICBuYW1lOiAnQXJjZXVzJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdBcmNldXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXHJcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUubm9ybWFsXSxcclxuICB9LFxyXG4gIGFyY2V1c19idWc6IHtcclxuICAgIGlkOiA0OTMsXHJcbiAgICBuYW1lOiAnQXJjZXVzIChCdWcpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdBcmNldXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXHJcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuYnVnXSxcclxuICB9LFxyXG4gIGFyY2V1c19kYXJrOiB7XHJcbiAgICBpZDogNDkzLFxyXG4gICAgbmFtZTogJ0FyY2V1cyAoRGFyayknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0FyY2V1cyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcclxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5kYXJrXSxcclxuICB9LFxyXG4gIGFyY2V1c19kcmFnb246IHtcclxuICAgIGlkOiA0OTMsXHJcbiAgICBuYW1lOiAnQXJjZXVzIChEcmFnb24pJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdBcmNldXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXHJcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZHJhZ29uXSxcclxuICB9LFxyXG4gIGFyY2V1c19lbGVjdHJpYzoge1xyXG4gICAgaWQ6IDQ5MyxcclxuICAgIG5hbWU6ICdBcmNldXMgKEVsZWN0cmljKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQXJjZXVzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxyXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmVsZWN0cmljXSxcclxuICB9LFxyXG4gIGFyY2V1c19maWdodGluZzoge1xyXG4gICAgaWQ6IDQ5MyxcclxuICAgIG5hbWU6ICdBcmNldXMgKEZpZ2h0aW5nKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQXJjZXVzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxyXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmZpZ2h0aW5nXSxcclxuICB9LFxyXG4gIGFyY2V1c19maXJlOiB7XHJcbiAgICBpZDogNDkzLFxyXG4gICAgbmFtZTogJ0FyY2V1cyAoRmlyZSknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0FyY2V1cyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcclxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5maXJlXSxcclxuICB9LFxyXG4gIGFyY2V1c19mbHlpbmc6IHtcclxuICAgIGlkOiA0OTMsXHJcbiAgICBuYW1lOiAnQXJjZXVzIChGbHlpbmcpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdBcmNldXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXHJcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZmx5aW5nXSxcclxuICB9LFxyXG4gIGFyY2V1c19naG9zdDoge1xyXG4gICAgaWQ6IDQ5MyxcclxuICAgIG5hbWU6ICdBcmNldXMgKEdob3N0KScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQXJjZXVzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxyXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdob3N0XSxcclxuICB9LFxyXG4gIGFyY2V1c19ncmFzczoge1xyXG4gICAgaWQ6IDQ5MyxcclxuICAgIG5hbWU6ICdBcmNldXMgKEdyYXNzKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQXJjZXVzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxyXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLmdyYXNzXSxcclxuICB9LFxyXG4gIGFyY2V1c19ncm91bmQ6IHtcclxuICAgIGlkOiA0OTMsXHJcbiAgICBuYW1lOiAnQXJjZXVzIChHcm91bmQpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdBcmNldXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXHJcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuZ3JvdW5kXSxcclxuICB9LFxyXG4gIGFyY2V1c19pY2U6IHtcclxuICAgIGlkOiA0OTMsXHJcbiAgICBuYW1lOiAnQXJjZXVzIChJY2UpJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdBcmNldXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXHJcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUuaWNlXSxcclxuICB9LFxyXG4gIGFyY2V1c19wb2lzb246IHtcclxuICAgIGlkOiA0OTMsXHJcbiAgICBuYW1lOiAnQXJjZXVzIChQb2lzb24pJyxcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQsXHJcbiAgICBjcnk6ICdBcmNldXMhJyxcclxuICAgIHBvc3NpYmxlQ29sb3JzOiBbUG9rZW1vbkNvbG9yLmRlZmF1bHQsIFBva2Vtb25Db2xvci5zaGlueV0sXHJcbiAgICByYXJpdHk6IFBva2Vtb25SYXJpdHkubXl0aGljYWwsXHJcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU6IDY0LFxyXG4gICAgdHlwZXM6IFtQb2tlbW9uRWxlbWVudFR5cGUucG9pc29uXSxcclxuICB9LFxyXG4gIGFyY2V1c19wc3ljaGljOiB7XHJcbiAgICBpZDogNDkzLFxyXG4gICAgbmFtZTogJ0FyY2V1cyAoUHN5Y2hpYyknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0FyY2V1cyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcclxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5wc3ljaGljXSxcclxuICB9LFxyXG4gIGFyY2V1c19yb2NrOiB7XHJcbiAgICBpZDogNDkzLFxyXG4gICAgbmFtZTogJ0FyY2V1cyAoUm9jayknLFxyXG4gICAgZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24uR2VuNCxcclxuICAgIGNyeTogJ0FyY2V1cyEnLFxyXG4gICAgcG9zc2libGVDb2xvcnM6IFtQb2tlbW9uQ29sb3IuZGVmYXVsdCwgUG9rZW1vbkNvbG9yLnNoaW55XSxcclxuICAgIHJhcml0eTogUG9rZW1vblJhcml0eS5teXRoaWNhbCxcclxuICAgIG9yaWdpbmFsU3ByaXRlU2l6ZTogNjQsXHJcbiAgICB0eXBlczogW1Bva2Vtb25FbGVtZW50VHlwZS5yb2NrXSxcclxuICB9LFxyXG4gIGFyY2V1c19zdGVlbDoge1xyXG4gICAgaWQ6IDQ5MyxcclxuICAgIG5hbWU6ICdBcmNldXMgKFN0ZWVsKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQXJjZXVzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxyXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLnN0ZWVsXSxcclxuICB9LFxyXG4gIGFyY2V1c193YXRlcjoge1xyXG4gICAgaWQ6IDQ5MyxcclxuICAgIG5hbWU6ICdBcmNldXMgKFdhdGVyKScsXHJcbiAgICBnZW5lcmF0aW9uOiBQb2tlbW9uR2VuZXJhdGlvbi5HZW40LFxyXG4gICAgY3J5OiAnQXJjZXVzIScsXHJcbiAgICBwb3NzaWJsZUNvbG9yczogW1Bva2Vtb25Db2xvci5kZWZhdWx0LCBQb2tlbW9uQ29sb3Iuc2hpbnldLFxyXG4gICAgcmFyaXR5OiBQb2tlbW9uUmFyaXR5Lm15dGhpY2FsLFxyXG4gICAgb3JpZ2luYWxTcHJpdGVTaXplOiA2NCxcclxuICAgIHR5cGVzOiBbUG9rZW1vbkVsZW1lbnRUeXBlLndhdGVyXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFBva2Vtb24oKTogUG9rZW1vblR5cGVbXSB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKFBPS0VNT05fREFUQSkgYXMgUG9rZW1vblR5cGVbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBva2Vtb25CeUdlbmVyYXRpb24oZ2VuZXJhdGlvbjogUG9rZW1vbkdlbmVyYXRpb24pOiBQb2tlbW9uVHlwZVtdIHtcclxuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoUE9LRU1PTl9EQVRBKVxyXG4gICAgLmZpbHRlcigoW18sIGNvbmZpZ10pID0+IGNvbmZpZy5nZW5lcmF0aW9uID09PSBnZW5lcmF0aW9uKVxyXG4gICAgLm1hcCgoW2tleSwgX10pID0+IGtleSBhcyBQb2tlbW9uVHlwZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0UG9rZW1vbigpOiBQb2tlbW9uVHlwZSB7XHJcbiAgcmV0dXJuICdidWxiYXNhdXInO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tUG9rZW1vbkNvbmZpZygpOiBbUG9rZW1vblR5cGUsIFBva2Vtb25Db25maWddIHtcclxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKFBPS0VNT05fREFUQSk7XHJcbiAgdmFyIHJhbmRvbUtleSA9IGtleXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoga2V5cy5sZW5ndGgpXTtcclxuICByZXR1cm4gW3JhbmRvbUtleSBhcyBQb2tlbW9uVHlwZSwgUE9LRU1PTl9EQVRBW3JhbmRvbUtleV1dO1xyXG59IiwiaW1wb3J0IHsgUE9LRU1PTl9EQVRBIH0gZnJvbSBcIi4vcG9rZW1vbi1kYXRhXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBQb2tlbW9uQ29sb3Ige1xyXG4gICAgZGVmYXVsdCA9ICdkZWZhdWx0JyxcclxuICAgIHNoaW55ID0gJ3NoaW55JyxcclxuICAgIG51bGwgPSAnbnVsbCcsXHJcbn1cclxuXHJcbi8vIEFic2VudCAodW5kZWZpbmVkKSBvbiBhIFBva2Vtb25Db25maWcgbWVhbnMgY29tbW9uIC0gdGhlIHZhc3QgbWFqb3JpdHkgb2ZcclxuLy8gdGhlIGRleCAtIHNvIG9ubHkgdGhlIGhhbmRmdWwgb2YgbGVnZW5kYXJ5LXRpZXIgc3BlY2llcyBuZWVkIHRvIHNldCB0aGlzLlxyXG5leHBvcnQgY29uc3QgZW51bSBQb2tlbW9uUmFyaXR5IHtcclxuICAgIHN1YkxlZ2VuZGFyeSA9ICdzdWItbGVnZW5kYXJ5JyxcclxuICAgIGxlZ2VuZGFyeSA9ICdsZWdlbmRhcnknLFxyXG4gICAgbXl0aGljYWwgPSAnbXl0aGljYWwnLFxyXG4gICAgZm9zc2lsID0gJ2Zvc3NpbCcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBva2Vtb25HZW5lcmF0aW9uIHtcclxuICAgIEdlbjEgPSAxLFxyXG4gICAgR2VuMiA9IDIsXHJcbiAgICBHZW4zID0gMyxcclxuICAgIEdlbjQgPSA0LFxyXG59XHJcblxyXG4vLyBUeXBpbmcgYXMgaXQgc3Rvb2QgYnkgdGhlIGVuZCBvZiBHZW5lcmF0aW9uIElJSSAtIG5vIEZhaXJ5IHR5cGUsIHNpbmNlIGl0XHJcbi8vIHdhcyBub3QgaW50cm9kdWNlZCB1bnRpbCBHZW5lcmF0aW9uIFZJIChlLmcuIENsZWZhaXJ5L01yLiBNaW1lL1NudWJidWxsXHJcbi8vIHN0YXkgTm9ybWFsIGhlcmUsIG5vdCBGYWlyeSkuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFBva2Vtb25FbGVtZW50VHlwZSB7XHJcbiAgICBub3JtYWwgPSAnbm9ybWFsJyxcclxuICAgIGZpcmUgPSAnZmlyZScsXHJcbiAgICB3YXRlciA9ICd3YXRlcicsXHJcbiAgICBlbGVjdHJpYyA9ICdlbGVjdHJpYycsXHJcbiAgICBncmFzcyA9ICdncmFzcycsXHJcbiAgICBpY2UgPSAnaWNlJyxcclxuICAgIGZpZ2h0aW5nID0gJ2ZpZ2h0aW5nJyxcclxuICAgIHBvaXNvbiA9ICdwb2lzb24nLFxyXG4gICAgZ3JvdW5kID0gJ2dyb3VuZCcsXHJcbiAgICBmbHlpbmcgPSAnZmx5aW5nJyxcclxuICAgIHBzeWNoaWMgPSAncHN5Y2hpYycsXHJcbiAgICBidWcgPSAnYnVnJyxcclxuICAgIHJvY2sgPSAncm9jaycsXHJcbiAgICBnaG9zdCA9ICdnaG9zdCcsXHJcbiAgICBkcmFnb24gPSAnZHJhZ29uJyxcclxuICAgIGRhcmsgPSAnZGFyaycsXHJcbiAgICBzdGVlbCA9ICdzdGVlbCcsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFBva2Vtb25UeXBlU3RyaW5nID0gc3RyaW5nICYga2V5b2YgdHlwZW9mIFBPS0VNT05fREFUQTtcclxuXHJcbmV4cG9ydCB0eXBlIFBva2Vtb25UeXBlID0gUG9rZW1vblR5cGVTdHJpbmc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBva2Vtb25Db25maWcge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGdlbmVyYXRpb246IFBva2Vtb25HZW5lcmF0aW9uO1xyXG4gICAgY3J5OiBzdHJpbmc7XHJcbiAgICBwb3NzaWJsZUNvbG9yczogUG9rZW1vbkNvbG9yW107XHJcbiAgICBvcmlnaW5hbFNwcml0ZVNpemU/OiBudW1iZXIsXHJcbiAgICByYXJpdHk/OiBQb2tlbW9uUmFyaXR5LFxyXG4gICAgdHlwZXM6IFBva2Vtb25FbGVtZW50VHlwZVtdLFxyXG59IiwiaW1wb3J0IHsgVXNlclBva2Vtb24gfSBmcm9tICcuLi9leHRlbnNpb24vdHlwZXMnXHJcbmltcG9ydCB7IFBPS0VNT05fREFUQSB9IGZyb20gJy4uL2NvbW1vbi9wb2tlbW9uLWRhdGEnXHJcbmltcG9ydCB7IFBva2Vtb25Db2xvciwgUG9rZW1vbkdlbmVyYXRpb24gfSBmcm9tICcuLi9jb21tb24vdHlwZXMnXHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBwb2tlY2hpQXBwOiB7XHJcbiAgICAgIGFwcDogKGNvbmZpZzogeyBiYXNlUG9rZW1vblVyaTogc3RyaW5nOyB1c2VyUG9rZW1vbjogVXNlclBva2Vtb24gfCBudWxsIH0pID0+IHZvaWRcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgdXNlclBva2Vtb246IFVzZXJQb2tlbW9uIHwgbnVsbFxyXG4gIGJhc2VQb2tlbW9uVXJpOiBzdHJpbmdcclxuICBpbnRlcnZhbElkOiBudW1iZXIgfCB1bmRlZmluZWRcclxuICBpc0hvdmVyZWQ6IGJvb2xlYW5cclxuICBpZGxlVW50aWw6IG51bWJlclxyXG59XHJcblxyXG5jb25zdCBzdGF0ZTogU3RhdGUgPSB7XHJcbiAgdXNlclBva2Vtb246IG51bGwsXHJcbiAgYmFzZVBva2Vtb25Vcmk6ICcnLFxyXG4gIGludGVydmFsSWQ6IHVuZGVmaW5lZCxcclxuICBpc0hvdmVyZWQ6IGZhbHNlLFxyXG4gIGlkbGVVbnRpbDogMCxcclxufVxyXG5cclxuY29uc3QgVElDS19JTlRFUlZBTF9NUyA9IDEwMFxyXG5cclxuLy8gSG93IGxvbmcgYSBwb2tlbW9uIHN0YW5kcyBzdGlsbCBhZnRlciBoYXRjaGluZyBvciBldm9sdmluZy4gV2l0aG91dCBpdCB0aGVcclxuLy8gZmlyc3QgdGljayB3b3VsZCBzZW5kIGl0IHdhbGtpbmcgYmVmb3JlIHRoZSBpZGxlIGFuaW1hdGlvbiBpcyBldmVyIHNlZW4uXHJcbmNvbnN0IElETEVfQUZURVJfQ0hBTkdFX01TID0gMTUwMFxyXG5cclxuLy8gRXZlcnl0aGluZyB0aGF0IGRlY2lkZXMgaG93IHRoZSBzcHJpdGUgbG9va3MuIFhQIHVwZGF0ZXMgYXJyaXZlIHNldmVyYWwgdGltZXNcclxuLy8gYSBzZWNvbmQgYW5kIGNoYW5nZSBub25lIG9mIGl0LCBzbyB0aGUgRE9NIHdvcmsgY2FuIGJlIHNraXBwZWQuXHJcbmZ1bmN0aW9uIHZpc3VhbFNpZ25hdHVyZShwb2tlbW9uOiBVc2VyUG9rZW1vbiB8IG51bGwpOiBzdHJpbmcge1xyXG4gIGlmICghcG9rZW1vbikge1xyXG4gICAgcmV0dXJuICdub25lJ1xyXG4gIH1cclxuICByZXR1cm4gW1xyXG4gICAgcG9rZW1vbi50eXBlLFxyXG4gICAgcG9rZW1vbi5sZXZlbCxcclxuICAgIHBva2Vtb24uc3RhdGUsXHJcbiAgICBwb2tlbW9uLnNjYWxlLFxyXG4gICAgcG9rZW1vbi5pc0hvdmVyZWQgPyAxIDogMCxcclxuICAgIHBva2Vtb24uaXNUcmFuc2l0aW9uSW4gPyAxIDogMCxcclxuICAgIHBva2Vtb24uY29sb3IsXHJcbiAgXS5qb2luKCd8JylcclxufVxyXG5cclxubGV0IGxhc3RSZW5kZXJlZFNpZ25hdHVyZSA9ICcnXHJcbi8vIElkZW50aWZpZXMgd2hpY2ggcmV2ZWFsIGhhcyBhbHJlYWR5IHBsYXllZCBpdHMgZmxhc2gvc3BhcmtsZS9jcnksIHNvIGFcclxuLy8gaG92ZXItZHJpdmVuIHJlLXJlbmRlciB3aXRoaW4gdGhlIHNhbWUgcmV2ZWFsJ3MgMXMgd2luZG93IGlzIHJlY29nbml6ZWRcclxuLy8gYXMgdGhlIHNhbWUgcmV2ZWFsIGluc3RlYWQgb2YgcmVwbGF5aW5nIGl0LiBTZWUgdXBkYXRlUG9rZW1vbkRpc3BsYXkuXHJcbmxldCBsYXN0UmV2ZWFsS2V5ID0gJydcclxuY29uc3QgUE9LRUJBTExfU0laRSA9IDMyXHJcbmNvbnN0IFBPS0VNT05fQkFTRV9TSVpFID0gNTAgLy8gSW5jcmVhc2VkIGJ5IDIwJSAoMzIgKiAxLjIgPSAzOC40KVxyXG5cclxuZnVuY3Rpb24gZ2V0UG9rZW1vblNwcml0ZVBhdGgocG9rZW1vbjogVXNlclBva2Vtb24sIGlzSWRsZSA9IGZhbHNlKTogc3RyaW5nIHtcclxuICBpZiAocG9rZW1vbi5sZXZlbCA9PT0gMCkge1xyXG4gICAgcmV0dXJuICdwb2tlYmFsbC5naWYnXHJcbiAgfVxyXG4gIGNvbnN0IHBva2Vtb25UeXBlID0gcG9rZW1vbi50eXBlXHJcbiAgY29uc3QgcG9rZW1vbkRhdGEgPSBQT0tFTU9OX0RBVEFbcG9rZW1vblR5cGVdXHJcbiAgXHJcbiAgaWYgKCFwb2tlbW9uRGF0YSkge1xyXG4gICAgcmV0dXJuICdwb2tlYmFsbC5naWYnXHJcbiAgfVxyXG4gIFxyXG4gIGxldCBnZW5lcmF0aW9uID0gJ2dlbjEnXHJcbiAgaWYgKHBva2Vtb25EYXRhLmdlbmVyYXRpb24gPT09IFBva2Vtb25HZW5lcmF0aW9uLkdlbjIpIHtcclxuICAgIGdlbmVyYXRpb24gPSAnZ2VuMidcclxuICB9IGVsc2UgaWYgKHBva2Vtb25EYXRhLmdlbmVyYXRpb24gPT09IFBva2Vtb25HZW5lcmF0aW9uLkdlbjMpIHtcclxuICAgIGdlbmVyYXRpb24gPSAnZ2VuMydcclxuICB9IGVsc2UgaWYgKHBva2Vtb25EYXRhLmdlbmVyYXRpb24gPT09IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQpIHtcclxuICAgIGdlbmVyYXRpb24gPSAnZ2VuNCdcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbG9yUHJlZml4ID0gcG9rZW1vbi5jb2xvciA9PT0gUG9rZW1vbkNvbG9yLnNoaW55ID8gJ3NoaW55JyA6ICdkZWZhdWx0J1xyXG4gIGNvbnN0IGFuaW1hdGlvbiA9IGlzSWRsZSA/IGAke2NvbG9yUHJlZml4fV9pZGxlXzhmcHMuZ2lmYCA6IGAke2NvbG9yUHJlZml4fV93YWxrXzhmcHMuZ2lmYFxyXG4gIHJldHVybiBgJHtnZW5lcmF0aW9ufS8ke3Bva2Vtb25UeXBlfS8ke2FuaW1hdGlvbn1gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdlbmVyYXRpb25Gb2xkZXIocG9rZW1vblR5cGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgY29uc3QgcG9rZW1vbkRhdGEgPSBQT0tFTU9OX0RBVEFbcG9rZW1vblR5cGVdXHJcbiAgaWYgKHBva2Vtb25EYXRhPy5nZW5lcmF0aW9uID09PSBQb2tlbW9uR2VuZXJhdGlvbi5HZW4yKSB7XHJcbiAgICByZXR1cm4gJ2dlbjInXHJcbiAgfSBlbHNlIGlmIChwb2tlbW9uRGF0YT8uZ2VuZXJhdGlvbiA9PT0gUG9rZW1vbkdlbmVyYXRpb24uR2VuMykge1xyXG4gICAgcmV0dXJuICdnZW4zJ1xyXG4gIH0gZWxzZSBpZiAocG9rZW1vbkRhdGE/LmdlbmVyYXRpb24gPT09IFBva2Vtb25HZW5lcmF0aW9uLkdlbjQpIHtcclxuICAgIHJldHVybiAnZ2VuNCdcclxuICB9XHJcbiAgcmV0dXJuICdnZW4xJ1xyXG59XHJcblxyXG4vLyBBIGZyZXNoIEhUTUxBdWRpb0VsZW1lbnQgcmUtY2hlY2tzIHRoZSBicm93c2VyJ3MgYXV0b3BsYXkgZ2VzdHVyZSBwb2xpY3lcclxuLy8gb24gZXZlcnkgc2luZ2xlIC5wbGF5KCkgY2FsbCwgd2hpY2ggaXMgd2hhdCBtYWRlIGhhdGNoL2V2b2x2ZS9Qb2tlZGV4LXBpY2tcclxuLy8gY3JpZXMgKG5ldmVyIHRyaWdnZXJlZCBmcm9tIGEgZGlyZWN0IGNsaWNrKSB1bnJlbGlhYmxlIGV2ZW4gYWZ0ZXIgYSByZWFsXHJcbi8vIGNsaWNrIGhhZCBhbHJlYWR5IHBsYXllZCBvbmUgc3VjY2Vzc2Z1bGx5LiBBIFdlYiBBdWRpbyBBdWRpb0NvbnRleHQgb25seVxyXG4vLyBuZWVkcyB0aGF0IGdlc3R1cmUgb25jZSwgdG8gbW92ZSBvdXQgb2YgXCJzdXNwZW5kZWRcIjogb25jZSBydW5uaW5nLCBwbGF5aW5nXHJcbi8vIGEgYnVmZmVyIHRocm91Z2ggaXQgZnJvbSBhbnl3aGVyZSAtIGEgbWVzc2FnZSBoYW5kbGVyLCBhIHRpbWVyIC0gd29ya3NcclxuLy8gdGhlIHNhbWUgYXMgaWYgYSBjbGljayBoYWQgdHJpZ2dlcmVkIGl0LiBDcmVhdGVkIGxhemlseSAoY29uc3RydWN0aW5nIG9uZVxyXG4vLyBuZWVkcyBubyBnZXN0dXJlKSBhbmQgcmV1c2VkIGZvciBldmVyeSBjcnkgZnJvbSBoZXJlIG9uLlxyXG5sZXQgYXVkaW9Db250ZXh0OiBBdWRpb0NvbnRleHQgfCB1bmRlZmluZWRcclxuY29uc3QgY3J5QnVmZmVyQ2FjaGU6IFJlY29yZDxzdHJpbmcsIEF1ZGlvQnVmZmVyPiA9IHt9XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkQ3J5QnVmZmVyKHBva2Vtb25UeXBlOiBzdHJpbmcsIGN0eDogQXVkaW9Db250ZXh0KTogUHJvbWlzZTxBdWRpb0J1ZmZlcj4ge1xyXG4gIGNvbnN0IGNhY2hlZCA9IGNyeUJ1ZmZlckNhY2hlW3Bva2Vtb25UeXBlXVxyXG4gIGlmIChjYWNoZWQpIHtcclxuICAgIHJldHVybiBjYWNoZWRcclxuICB9XHJcbiAgY29uc3QgY3J5UGF0aCA9IGAke2dldEdlbmVyYXRpb25Gb2xkZXIocG9rZW1vblR5cGUpfS8ke3Bva2Vtb25UeXBlfS9jcnkubXAzYFxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7c3RhdGUuYmFzZVBva2Vtb25Vcml9LyR7Y3J5UGF0aH1gKVxyXG4gIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKVxyXG4gIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IGN0eC5kZWNvZGVBdWRpb0RhdGEoYXJyYXlCdWZmZXIpXHJcbiAgY3J5QnVmZmVyQ2FjaGVbcG9rZW1vblR5cGVdID0gYnVmZmVyXHJcbiAgcmV0dXJuIGJ1ZmZlclxyXG59XHJcblxyXG4vLyBQbGF5cyBhIGNyeSBmb3Igd2hpY2hldmVyIHNwZWNpZXMgaXMgY2xpY2tlZC4gTG9nZ2VkIHJhdGhlciB0aGFuIHNpbGVudGx5XHJcbi8vIHN3YWxsb3dlZCAtIGEgY29udGV4dCB0aGF0IGhhcyBuZXZlciBiZWVuIHJlc3VtZWQgYnkgYSBnZW51aW5lIHVzZXJcclxuLy8gZ2VzdHVyZSBhbnl3aGVyZSBpbiB0aGlzIGZyYW1lIHN0aWxsIGNhbm5vdCBwcm9kdWNlIHNvdW5kLCBhbmQgdGhpcyBpc1xyXG4vLyB0aGUgb25seSB3YXkgdG8gdGVsbCB0aGF0IGFwYXJ0IGZyb20gYSByZWFsIGJ1Zy5cclxuYXN5bmMgZnVuY3Rpb24gcGxheUNyeShwb2tlbW9uVHlwZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghYXVkaW9Db250ZXh0KSB7XHJcbiAgICAgIGF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY3R4ID0gYXVkaW9Db250ZXh0XHJcbiAgICBpZiAoY3R4LnN0YXRlID09PSAnc3VzcGVuZGVkJykge1xyXG4gICAgICBhd2FpdCBjdHgucmVzdW1lKClcclxuICAgIH1cclxuICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IGxvYWRDcnlCdWZmZXIocG9rZW1vblR5cGUsIGN0eClcclxuICAgIGNvbnN0IHNvdXJjZSA9IGN0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKVxyXG4gICAgc291cmNlLmJ1ZmZlciA9IGJ1ZmZlclxyXG4gICAgc291cmNlLmNvbm5lY3QoY3R4LmRlc3RpbmF0aW9uKVxyXG4gICAgc291cmNlLnN0YXJ0KDApXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ1twb2tlY2hpXSBjb3VsZCBub3QgcGxheSBjcnkgZm9yICcgKyBwb2tlbW9uVHlwZSArICc6JywgZXJyKVxyXG4gIH1cclxufVxyXG5cclxuLy8gSG9sZGluZyB0aGUgbW91c2UgZG93biBhbmQgY2xpY2tpbmcgcmVwZWF0ZWRseSB3b3VsZCBvdGhlcndpc2Ugc3RhY2sgdXBcclxuLy8gb25lIG92ZXJsYXBwaW5nIGNyeSBwZXIgY2xpY2sgLSB0aGlzIGNhcHMgaXQgdG8gb25lIGV2ZXJ5IDUwMG1zLlxyXG5jb25zdCBDUllfQ0xJQ0tfVEhST1RUTEVfTVMgPSAxNTAwXHJcbmxldCBsYXN0Q3J5Q2xpY2tUaW1lID0gMFxyXG5cclxuLy8gTm90IGEgUG9rZWJhbGwgd2l0aCBub3RoaW5nIGhhdGNoZWQgeWV0LCBhbmQgbm90IGEgc25hcHNob3QgYnJvdWdodCBvdXRcclxuLy8gcmVhZC1vbmx5IGZyb20gdGhlIFBva2VkZXggbWlkLXRyYW5zaXRpb24gLSBhIHBsYWluIGNsaWNrIHdoaWxlIHRoZSB3YWxrXHJcbi8vIGxvb3AgaXMgcnVubmluZyBpcyB0aGUgb25seSB0aW1lIHRoaXMgZmlyZXMuIEFsd2F5cyBwbGF5cyByZWdhcmRsZXNzIG9mXHJcbi8vIHBva2VjaGkucGxheUNyeVNvdW5kczogdGhhdCBzZXR0aW5nIG9ubHkgY292ZXJzIHRoZSBhdXRvbWF0aWMgUG9rZWRleC1waWNrXHJcbi8vIHJldmVhbCwgbm90IGEgY2xpY2sgdGhlIHVzZXIgYXNrZWQgZm9yIGRpcmVjdGx5LlxyXG5mdW5jdGlvbiBwbGF5Q3J5T25DbGljayhwb2tlbW9uOiBVc2VyUG9rZW1vbiB8IG51bGwpOiB2b2lkIHtcclxuICBpZiAoIXBva2Vtb24gfHwgcG9rZW1vbi5sZXZlbCA9PT0gMCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGNvbnN0IG5vdyA9IERhdGUubm93KClcclxuICBpZiAobm93IC0gbGFzdENyeUNsaWNrVGltZSA8IENSWV9DTElDS19USFJPVFRMRV9NUykge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGxhc3RDcnlDbGlja1RpbWUgPSBub3dcclxuICBwbGF5Q3J5KHBva2Vtb24udHlwZSlcclxuICBwbGF5U291bmRXYXZlQnVyc3QocG9rZW1vbi5zY2FsZSlcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUG9rZW1vbkRpc3BsYXkocG9rZW1vbjogVXNlclBva2Vtb24gfCBudWxsKTogdm9pZCB7XHJcbiAgY29uc3QgcG9rZW1vbkltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlbW9uJykgYXMgSFRNTEltYWdlRWxlbWVudFxyXG4gIGNvbnN0IHBva2Vtb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZW1vbi1jb250YWluZXInKVxyXG5cclxuICBpZiAoIXBva2Vtb25JbWcgfHwgIXBva2Vtb25Db250YWluZXIpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2lnbmF0dXJlID0gdmlzdWFsU2lnbmF0dXJlKHBva2Vtb24pXHJcbiAgaWYgKHNpZ25hdHVyZSA9PT0gbGFzdFJlbmRlcmVkU2lnbmF0dXJlKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgbGFzdFJlbmRlcmVkU2lnbmF0dXJlID0gc2lnbmF0dXJlXHJcblxyXG4gIGlmICghcG9rZW1vbiB8fCBwb2tlbW9uLmxldmVsID09PSAwKSB7XHJcbiAgICBwb2tlbW9uSW1nLnNyYyA9IGAke3N0YXRlLmJhc2VQb2tlbW9uVXJpfS9wb2tlYmFsbC5naWZgXHJcbiAgICBwb2tlbW9uSW1nLndpZHRoID0gUE9LRUJBTExfU0laRVxyXG4gICAgcG9rZW1vbkltZy5oZWlnaHQgPSBQT0tFQkFMTF9TSVpFXHJcbiAgICBwb2tlbW9uSW1nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGNvbnN0IGlzSWRsZSA9IHBva2Vtb24uc3RhdGUgPT09ICdpZGxlJyB8fCBwb2tlbW9uLmlzSG92ZXJlZFxyXG4gIGNvbnN0IHNwcml0ZVBhdGggPSBnZXRQb2tlbW9uU3ByaXRlUGF0aChwb2tlbW9uLCBpc0lkbGUpXHJcbiAgcG9rZW1vbkltZy5zcmMgPSBgJHtzdGF0ZS5iYXNlUG9rZW1vblVyaX0vJHtzcHJpdGVQYXRofWBcclxuICBwb2tlbW9uSW1nLndpZHRoID0gUE9LRU1PTl9CQVNFX1NJWkUgKiBwb2tlbW9uLnNjYWxlXHJcbiAgcG9rZW1vbkltZy5oZWlnaHQgPSBQT0tFTU9OX0JBU0VfU0laRSAqIHBva2Vtb24uc2NhbGVcclxuICBwb2tlbW9uSW1nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgcG9rZW1vbkltZy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9ICdwaXhlbGF0ZWQnXHJcbiAgLy8gdGljaygpIHJlLWFwcGxpZXMgdGhpcyBzYW1lIGZsaXAgb24gaXRzIG93biAxMDBtcyBjYWRlbmNlLCBidXQgc2V0dGluZ1xyXG4gIC8vIGl0IGhlcmUgdG9vIG1lYW5zIGEgcmUtcmVuZGVyIG5ldmVyIGhhcyBldmVuIGEgYnJpZWYgdW5mbGlwcGVkIGZyYW1lXHJcbiAgLy8gYmVmb3JlIHRoZSBuZXh0IHRpY2sgY2F0Y2hlcyB1cC5cclxuICBwb2tlbW9uSW1nLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZVgoJHtwb2tlbW9uLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/IDEgOiAtMX0pIHNjYWxlKCR7cG9rZW1vbi5zY2FsZX0pYFxyXG5cclxuICAvLyBpc1RyYW5zaXRpb25JbiBzdGF5cyB0cnVlIGZvciBhIGZ1bGwgc2Vjb25kIGFmdGVyIGEgcmV2ZWFsIChtYXRjaGluZyB0aGVcclxuICAvLyBzcGFya2xlIGFuaW1hdGlvbiBsZW5ndGgpIHNvIGEgc2hpbnkgaGFzIHRpbWUgdG8gc2hvdyBpdCwgYnV0IGhvdmVyaW5nXHJcbiAgLy8gZHVyaW5nIHRoYXQgd2luZG93IGNoYW5nZXMgdGhlIHNpZ25hdHVyZSBhYm92ZSB0b28gKGl0IGlzIHBhcnQgb2ZcclxuICAvLyB2aXN1YWxTaWduYXR1cmUpIGFuZCB3b3VsZCBvdGhlcndpc2UgcmUtZW50ZXIgdGhpcyBicmFuY2ggYW5kIHJlcGxheSB0aGVcclxuICAvLyBzcGFya2xlIG9uIGV2ZXJ5IG1vdXNlIGluL291dC4gcmV2ZWFsS2V5IGlkZW50aWZpZXMgdGhlIHNwZWNpZmljIHJldmVhbFxyXG4gIC8vIGluc3RlYWQgb2YganVzdCB0aGUgZmxhZywgc28gYSBob3Zlci1kcml2ZW4gcmUtcmVuZGVyIHdpdGhpbiB0aGUgc2FtZVxyXG4gIC8vIHdpbmRvdyBpcyByZWNvZ25pemVkIGFzIHRoZSBzYW1lIHJldmVhbCBhbmQgc2tpcHBlZCwgd2hpbGUgYSBnZW51aW5lbHlcclxuICAvLyBuZXcgb25lIChldmVuIG9mIHRoZSBzYW1lIHNwZWNpZXMsIG9uY2UgdGhlIHdpbmRvdyBoYXMgYWN0dWFsbHkgZWxhcHNlZFxyXG4gIC8vIGFuZCByZXNldCBpdCBiZWxvdykgc3RpbGwgcGxheXMuXHJcbiAgLy9cclxuICAvLyBUaGVyZSB1c2VkIHRvIGJlIGEgc2Vjb25kIHNwcml0ZSBsYXllcmVkIG9uIHRvcCBoZXJlIGZvciBhIGJyaWVmIGZsYXNoLFxyXG4gIC8vIHBsdXMgYSBjcnkgYW5kIGEgc291bmQtd2F2ZSByaXBwbGUsIG9uIGV2ZXJ5IHJldmVhbCAoaGF0Y2gsIGV2b2x2ZSwgYVxyXG4gIC8vIFBva2VkZXggcGljaykuIEJvdGggdHVybmVkIG91dCB0byBub3QgYmUgd29ydGgga2VlcGluZzogdHdvIGluZGVwZW5kZW50bHlcclxuICAvLyBhbmltYXRlZCA8aW1nPiBjb3BpZXMgb2YgdGhlIHNhbWUgd2Fsa2luZyBHSUYgZHJpZnQgb3V0IG9mIGZyYW1lLXN5bmNcclxuICAvLyB3aXRoIGVhY2ggb3RoZXIgYW5kIHZpc2libHkgZG91YmxlIHVwIGZvciBhcyBsb25nIGFzIHRoZSByZXZlYWwgbGFzdGVkLFxyXG4gIC8vIGFuZCB0aGUgY3J5IG5lZWRlZCBhIGRpcmVjdCBjbGljayBvbiB0aGlzIGV4YWN0IGZyYW1lIHRvIHN1cnZpdmUgdGhlXHJcbiAgLy8gYnJvd3NlcidzIGF1dG9wbGF5IHBvbGljeSwgd2hpY2ggYSBoYXRjaCBvciBldm9sdmUgdHJpZ2dlcmVkIGZyb20gdHlwaW5nXHJcbiAgLy8gaW4gdGhlIGVkaXRvciBuZXZlciBoYXMuIFBpY2tpbmcgYSBwb2tlbW9uIGZyb20gdGhlIFBva2VkZXggbm93IHBsYXlzIGl0c1xyXG4gIC8vIGNyeSBkaXJlY3RseSBmcm9tIHRoYXQgY2xpY2sgaW5zdGVhZCAoc2VlIHBva2VkZXgtcGFuZWwudHMpLCB3aGljaCBoYXNcclxuICAvLyBuZWl0aGVyIHByb2JsZW0uXHJcbiAgY29uc3QgcmV2ZWFsS2V5ID0gcG9rZW1vbi5pc1RyYW5zaXRpb25JblxyXG4gICAgPyBbcG9rZW1vbi50eXBlLCBwb2tlbW9uLmxldmVsLCBwb2tlbW9uLmNvbG9yXS5qb2luKCd8JylcclxuICAgIDogJydcclxuICBjb25zdCBpc05ld1JldmVhbCA9IHBva2Vtb24uaXNUcmFuc2l0aW9uSW4gJiYgcmV2ZWFsS2V5ICE9PSBsYXN0UmV2ZWFsS2V5XHJcblxyXG4gIGlmIChpc05ld1JldmVhbCkge1xyXG4gICAgbGFzdFJldmVhbEtleSA9IHJldmVhbEtleVxyXG5cclxuICAgIGlmIChwb2tlbW9uLmNvbG9yID09PSBQb2tlbW9uQ29sb3Iuc2hpbnkpIHtcclxuICAgICAgcGxheVNwYXJrbGVCdXJzdChwb2tlbW9uLnNjYWxlKVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBwb2tlbW9uLmlzVHJhbnNpdGlvbkluID0gZmFsc2VcclxuICAgICAgbGFzdFJldmVhbEtleSA9ICcnXHJcbiAgICB9LCAxMDAwKVxyXG4gIH1cclxufVxyXG5cclxuLy8gVHdpbmtsZXMgYSByaW5nIG9mIHNwYXJrbGVzIGFyb3VuZCB0aGUgcG9rZW1vbiBmb3IgYSBzaGlueSByZXZlYWwgKGhhdGNoaW5nLFxyXG4vLyBldm9sdmluZywgb3IgYmVpbmcgYnJvdWdodCBvdXQgb2YgdGhlIFBva2VkZXggYWxyZWFkeSBzaGlueSkuXHJcbmZ1bmN0aW9uIHBsYXlTcGFya2xlQnVyc3Qoc2NhbGU6IG51bWJlcik6IHZvaWQge1xyXG4gIGNvbnN0IGJ1cnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaW55LWJ1cnN0JylcclxuICBpZiAoIWJ1cnN0KSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGJ1cnN0LnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3NjYWxlfSlgXHJcbiAgLy8gQSByZXN0YXJ0IG5lZWRzIGEgZnJlc2ggYW5pbWF0aW9uLCBub3QganVzdCB0aGUgY2xhc3MgcmUtYWRkZWQ6IHJlbW92aW5nXHJcbiAgLy8gYW5kIHJlLWFkZGluZyBpdCBpbiB0aGUgc2FtZSB0aWNrIHdvdWxkIGJlIGEgbm8tb3AsIHNvIHRoZSByZWZsb3cgaW5cclxuICAvLyBiZXR3ZWVuIGZvcmNlcyB0aGUgYnJvd3NlciB0byBhY3R1YWxseSBub3RpY2UgdGhlIGNsYXNzIHdhcyBldmVyIGdvbmUuXHJcbiAgYnVyc3QuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcclxuICB2b2lkIGJ1cnN0Lm9mZnNldFdpZHRoXHJcbiAgYnVyc3QuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBidXJzdC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxyXG4gIH0sIDEwMDApXHJcbn1cclxuXHJcbi8vIFJpcHBsZXMgYSBmZXcgcmluZ3Mgb3V0IGZyb20gdGhlIHBva2Vtb24gd2hlbmV2ZXIgYSBjbGljayBwbGF5cyBpdHMgY3J5LlxyXG5mdW5jdGlvbiBwbGF5U291bmRXYXZlQnVyc3Qoc2NhbGU6IG51bWJlcik6IHZvaWQge1xyXG4gIGNvbnN0IGJ1cnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvdW5kLXdhdmUtYnVyc3QnKVxyXG4gIGlmICghYnVyc3QpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgYnVyc3Quc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7c2NhbGV9KWBcclxuICBidXJzdC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxyXG4gIHZvaWQgYnVyc3Qub2Zmc2V0V2lkdGhcclxuICBidXJzdC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKVxyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGJ1cnN0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXHJcbiAgfSwgMTAwMClcclxufVxyXG5cclxuZnVuY3Rpb24gdGljaygpOiB2b2lkIHtcclxuICBjb25zdCBwb2tlbW9uID0gc3RhdGUudXNlclBva2Vtb25cclxuICBpZiAoIXBva2Vtb24gfHwgcG9rZW1vbi5sZXZlbCA9PT0gMCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICAvLyBMZXQgdGhlIGlkbGUgYW5pbWF0aW9uIHBsYXkgYWZ0ZXIgYSBoYXRjaCBvciBhbiBldm9sdXRpb24uXHJcbiAgaWYgKERhdGUubm93KCkgPCBzdGF0ZS5pZGxlVW50aWwpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgLy8gSWYgaG92ZXJlZCwgZG8gbm90IG1vdmVcclxuICBpZiAoc3RhdGUuaXNIb3ZlcmVkKSB7XHJcbiAgICBpZiAocG9rZW1vbi5zdGF0ZSAhPT0gJ2lkbGUnKSB7XHJcbiAgICAgIHBva2Vtb24uc3RhdGUgPSAnaWRsZSdcclxuICAgICAgdXBkYXRlUG9rZW1vbkRpc3BsYXkocG9rZW1vbilcclxuICAgIH1cclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgLy8gSWYgaXQgd2FzIGlkbGUgYmVjYXVzZSBvZiBob3Zlciwgc3dpdGNoIGJhY2sgdG8gd2Fsa2luZ1xyXG4gIGlmIChwb2tlbW9uLnN0YXRlID09PSAnaWRsZScgJiYgIXN0YXRlLmlzSG92ZXJlZCkge1xyXG4gICAgcG9rZW1vbi5zdGF0ZSA9ICd3YWxraW5nJ1xyXG4gICAgdXBkYXRlUG9rZW1vbkRpc3BsYXkocG9rZW1vbilcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGhcclxuICBjb25zdCBzcGVlZCA9IDFcclxuICBjb25zdCBkaXJlY3Rpb24gPSBwb2tlbW9uLmRpcmVjdGlvbiB8fCAncmlnaHQnXHJcbiAgbGV0IGxlZnRQb3NpdGlvbiA9IHBva2Vtb24ubGVmdFBvc2l0aW9uIHx8IDBcclxuXHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgbGVmdFBvc2l0aW9uICs9IHNwZWVkXHJcbiAgICBpZiAobGVmdFBvc2l0aW9uID4gY29udGFpbmVyV2lkdGggLSBQT0tFTU9OX0JBU0VfU0laRSAqIHBva2Vtb24uc2NhbGUpIHtcclxuICAgICAgcG9rZW1vbi5kaXJlY3Rpb24gPSAnbGVmdCdcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgbGVmdFBvc2l0aW9uIC09IHNwZWVkXHJcbiAgICBpZiAobGVmdFBvc2l0aW9uIDwgMCkge1xyXG4gICAgICBwb2tlbW9uLmRpcmVjdGlvbiA9ICdyaWdodCdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBva2Vtb24ubGVmdFBvc2l0aW9uID0gbGVmdFBvc2l0aW9uXHJcblxyXG4gIGNvbnN0IG1vdmVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmVtZW50LWNvbnRhaW5lcicpXHJcbiAgaWYgKG1vdmVtZW50Q29udGFpbmVyKSB7XHJcbiAgICBtb3ZlbWVudENvbnRhaW5lci5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7bGVmdFBvc2l0aW9ufXB4YFxyXG4gIH1cclxuXHJcbiAgY29uc3QgcG9rZW1vbkltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlbW9uJykgYXMgSFRNTEltYWdlRWxlbWVudFxyXG4gIGlmIChwb2tlbW9uSW1nKSB7XHJcbiAgICBwb2tlbW9uSW1nLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZVgoJHtkaXJlY3Rpb24gPT09ICdyaWdodCcgPyAxIDogLTF9KSBzY2FsZSgke3Bva2Vtb24uc2NhbGV9KWBcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCk6IHZvaWQge1xyXG4gIGlmIChzdGF0ZS5pbnRlcnZhbElkKSB7XHJcbiAgICBjbGVhckludGVydmFsKHN0YXRlLmludGVydmFsSWQpXHJcbiAgfVxyXG4gIHN0YXRlLmludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgdGljaygpXHJcbiAgfSwgVElDS19JTlRFUlZBTF9NUylcclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcEFuaW1hdGlvbigpOiB2b2lkIHtcclxuICBpZiAoc3RhdGUuaW50ZXJ2YWxJZCkge1xyXG4gICAgY2xlYXJJbnRlcnZhbChzdGF0ZS5pbnRlcnZhbElkKVxyXG4gICAgc3RhdGUuaW50ZXJ2YWxJZCA9IHVuZGVmaW5lZFxyXG4gIH1cclxufVxyXG5cclxuLy8gVGhlIGV4cGxvcmVyIHZpZXcga2VlcHMgaXRzIGNvbnRleHQgd2hlbiBoaWRkZW4sIHNvIHdpdGhvdXQgdGhpcyB0aGUgd2Fsa2luZ1xyXG4vLyBsb29wIHdvdWxkIGtlZXAgcnVubmluZyBhZ2FpbnN0IGEgcGFuZWwgbm9ib2R5IGlzIGxvb2tpbmcgYXQuXHJcbmZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKTogdm9pZCB7XHJcbiAgaWYgKGRvY3VtZW50LmhpZGRlbikge1xyXG4gICAgc3RvcEFuaW1hdGlvbigpXHJcbiAgfSBlbHNlIGlmICghc3RhdGUuaW50ZXJ2YWxJZCkge1xyXG4gICAgc3RhcnRBbmltYXRpb24oKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFwcCA9ICh7XHJcbiAgdXNlclBva2Vtb24sXHJcbiAgYmFzZVBva2Vtb25VcmksXHJcbn06IHtcclxuICB1c2VyUG9rZW1vbjogVXNlclBva2Vtb24gfCBudWxsXHJcbiAgYmFzZVBva2Vtb25Vcmk6IHN0cmluZ1xyXG59KTogdm9pZCA9PiB7XHJcbiAgc3RhdGUuYmFzZVBva2Vtb25VcmkgPSBiYXNlUG9rZW1vblVyaVxyXG4gIHN0YXRlLnVzZXJQb2tlbW9uID0gdXNlclBva2Vtb25cclxuXHJcbiAgdXBkYXRlUG9rZW1vbkRpc3BsYXkodXNlclBva2Vtb24pXHJcbiAgc3RhcnRBbmltYXRpb24oKVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSlcclxuXHJcbiAgLy8gQWRkIGhvdmVyIGV2ZW50IGxpc3RlbmVyc1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKVxyXG4gIGlmIChjb250YWluZXIpIHtcclxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5pc0hvdmVyZWQgPSB0cnVlXHJcbiAgICAgIGlmIChzdGF0ZS51c2VyUG9rZW1vbiAmJiBzdGF0ZS51c2VyUG9rZW1vbi5sZXZlbCA+IDApIHtcclxuICAgICAgICBzdGF0ZS51c2VyUG9rZW1vbi5pc0hvdmVyZWQgPSB0cnVlXHJcbiAgICAgICAgdXBkYXRlUG9rZW1vbkRpc3BsYXkoc3RhdGUudXNlclBva2Vtb24pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgc3RhdGUuaXNIb3ZlcmVkID0gZmFsc2VcclxuICAgICAgaWYgKHN0YXRlLnVzZXJQb2tlbW9uICYmIHN0YXRlLnVzZXJQb2tlbW9uLmxldmVsID4gMCkge1xyXG4gICAgICAgIHN0YXRlLnVzZXJQb2tlbW9uLmlzSG92ZXJlZCA9IGZhbHNlXHJcbiAgICAgICAgc3RhdGUudXNlclBva2Vtb24uc3RhdGUgPSAnd2Fsa2luZydcclxuICAgICAgICB1cGRhdGVQb2tlbW9uRGlzcGxheShzdGF0ZS51c2VyUG9rZW1vbilcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgcGxheUNyeU9uQ2xpY2soc3RhdGUudXNlclBva2Vtb24pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IHsgY29tbWFuZCwgZGF0YSB9ID0gZXZlbnQuZGF0YVxyXG4gICAgc3dpdGNoIChjb21tYW5kKSB7XHJcbiAgICAgIGNhc2UgJ3NwYXduLXBva2Vtb24nOlxyXG4gICAgICAgIGlmIChkYXRhLnVzZXJQb2tlbW9uKSB7XHJcbiAgICAgICAgICBzdGF0ZS51c2VyUG9rZW1vbiA9IGRhdGEudXNlclBva2Vtb25cclxuICAgICAgICAgIHN0YXRlLmlkbGVVbnRpbCA9IDBcclxuICAgICAgICAgIHVwZGF0ZVBva2Vtb25EaXNwbGF5KGRhdGEudXNlclBva2Vtb24pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrXHJcblxyXG4gICAgICBjYXNlICd1cGRhdGUtcG9rZW1vbic6IHtcclxuICAgICAgICBpZiAoZGF0YS51c2VyUG9rZW1vbikge1xyXG4gICAgICAgICAgY29uc3QgcHJldmlvdXNMZXZlbCA9IHN0YXRlLnVzZXJQb2tlbW9uPy5sZXZlbCA/PyAwXHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVkUG9rZW1vbiA9IHtcclxuICAgICAgICAgICAgLi4uZGF0YS51c2VyUG9rZW1vbixcclxuICAgICAgICAgICAgbGVmdFBvc2l0aW9uOiBzdGF0ZS51c2VyUG9rZW1vbj8ubGVmdFBvc2l0aW9uIHx8IDAsXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogc3RhdGUudXNlclBva2Vtb24/LmRpcmVjdGlvbiB8fCAncmlnaHQnLFxyXG4gICAgICAgICAgICBpc0hvdmVyZWQ6IHN0YXRlLmlzSG92ZXJlZCxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0YXRlLnVzZXJQb2tlbW9uID0gdXBkYXRlZFBva2Vtb25cclxuXHJcbiAgICAgICAgICBpZiAodXBkYXRlZFBva2Vtb24ubGV2ZWwgPiBwcmV2aW91c0xldmVsKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlkbGVVbnRpbCA9IERhdGUubm93KCkgKyBJRExFX0FGVEVSX0NIQU5HRV9NU1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHVwZGF0ZVBva2Vtb25EaXNwbGF5KHVwZGF0ZWRQb2tlbW9uKVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxud2luZG93LnBva2VjaGlBcHAgPSB7XHJcbiAgYXBwLFxyXG59XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYW5lbC9tYWluLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==