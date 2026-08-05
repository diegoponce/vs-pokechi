import { PokemonColor, PokemonRarity, PokemonType } from './types'
import { POKEMON_DATA } from './pokemon-data'

export interface EvolutionLine {
  base: PokemonType
  evolutions: PokemonType[]
}

// The starting pokemon of each generation represented in the dex, in dex
// order. A fresh install's very first Pokeball is always one of these
// instead of the fully random roll every catch after it uses.
export const STARTER_POKEMON: PokemonType[] = [
  'bulbasaur',
  'charmander',
  'squirtle',
  'chikorita',
  'cyndaquil',
  'totodile',
  'treecko',
  'torchic',
  'mudkip',
  'turtwig',
  'chimchar',
  'piplup',
]

const THREE_STAGE_EVOLUTIONS: EvolutionLine[] = [
  { base: 'bulbasaur', evolutions: ['ivysaur', 'venusaur'] },
  { base: 'charmander', evolutions: ['charmeleon', 'charizard'] },
  { base: 'squirtle', evolutions: ['wartortle', 'blastoise'] },
  { base: 'caterpie', evolutions: ['metapod', 'butterfree'] },
  { base: 'weedle', evolutions: ['kakuna', 'beedrill'] },
  { base: 'pidgey', evolutions: ['pidgeotto', 'pidgeot'] },
  { base: 'nidoran_female', evolutions: ['nidorina', 'nidoqueen'] },
  { base: 'nidoran_male', evolutions: ['nidorino', 'nidoking'] },
  { base: 'oddish', evolutions: ['gloom', 'vileplume'] },
  { base: 'poliwag', evolutions: ['poliwhirl', 'poliwrath'] },
  { base: 'abra', evolutions: ['kadabra', 'alakazam'] },
  { base: 'machop', evolutions: ['machoke', 'machamp'] },
  { base: 'bellsprout', evolutions: ['weepinbell', 'victreebel'] },
  { base: 'geodude', evolutions: ['graveler', 'golem'] },
  { base: 'gastly', evolutions: ['haunter', 'gengar'] },
  { base: 'dratini', evolutions: ['dragonair', 'dragonite'] },
  { base: 'chikorita', evolutions: ['bayleef', 'meganium'] },
  { base: 'cyndaquil', evolutions: ['quilava', 'typhlosion'] },
  { base: 'totodile', evolutions: ['croconaw', 'feraligatr'] },
  { base: 'hoppip', evolutions: ['skiploom', 'jumpluff'] },
  { base: 'mareep', evolutions: ['flaaffy', 'ampharos'] },
  { base: 'larvitar', evolutions: ['pupitar', 'tyranitar'] },
  { base: 'treecko', evolutions: ['grovyle', 'sceptile'] },
  { base: 'torchic', evolutions: ['combusken', 'blaziken'] },
  { base: 'mudkip', evolutions: ['marshtomp', 'swampert'] },
  { base: 'wurmple', evolutions: ['silcoon', 'beautifly'] },
  { base: 'lotad', evolutions: ['lombre', 'ludicolo'] },
  { base: 'seedot', evolutions: ['nuzleaf', 'shiftry'] },
  { base: 'ralts', evolutions: ['kirlia', 'gardevoir'] },
  { base: 'slakoth', evolutions: ['vigoroth', 'slaking'] },
  { base: 'whismur', evolutions: ['loudred', 'exploud'] },
  { base: 'aron', evolutions: ['lairon', 'aggron'] },
  { base: 'trapinch', evolutions: ['vibrava', 'flygon'] },
  { base: 'spheal', evolutions: ['sealeo', 'walrein'] },
  { base: 'bagon', evolutions: ['shelgon', 'salamence'] },
  { base: 'beldum', evolutions: ['metang', 'metagross'] },
  { base: 'zubat', evolutions: ['golbat', 'crobat'] },
  { base: 'pichu', evolutions: ['pikachu', 'raichu'] },
  { base: 'cleffa', evolutions: ['clefairy', 'clefable'] },
  { base: 'igglybuff', evolutions: ['jigglypuff', 'wigglytuff'] },
  { base: 'horsea', evolutions: ['seadra', 'kingdra'] },
  { base: 'azurill', evolutions: ['marill', 'azumarill'] },
  { base: 'oddish', evolutions: ['gloom', 'bellossom'] },
  { base: 'poliwag', evolutions: ['poliwhirl', 'politoed'] },
  { base: 'wurmple', evolutions: ['cascoon', 'dustox'] },
  { base: 'ralts', evolutions: ['kirlia', 'gallade'] },
  // Generation 4
  { base: 'turtwig', evolutions: ['grotle', 'torterra'] },
  { base: 'chimchar', evolutions: ['monferno', 'infernape'] },
  { base: 'piplup', evolutions: ['prinplup', 'empoleon'] },
  { base: 'starly', evolutions: ['staravia', 'staraptor'] },
  { base: 'shinx', evolutions: ['luxio', 'luxray'] },
  { base: 'budew', evolutions: ['roselia', 'roserade'] },
  { base: 'gible', evolutions: ['gabite', 'garchomp'] },
  { base: 'happiny', evolutions: ['chansey', 'blissey'] },
  // Post-evolutions added in Generation 4 to lines that were previously
  // two-stage - the base stays the same, only a third stage is appended.
  { base: 'magnemite', evolutions: ['magneton', 'magnezone'] },
  { base: 'rhyhorn', evolutions: ['rhydon', 'rhyperior'] },
  { base: 'elekid', evolutions: ['electabuzz', 'electivire'] },
  { base: 'magby', evolutions: ['magmar', 'magmortar'] },
  { base: 'togepi', evolutions: ['togetic', 'togekiss'] },
  { base: 'swinub', evolutions: ['piloswine', 'mamoswine'] },
  { base: 'duskull', evolutions: ['dusclops', 'dusknoir'] },
  { base: 'porygon', evolutions: ['porygon2', 'porygonZ'] },
]

const TWO_STAGE_EVOLUTIONS: EvolutionLine[] = [
  { base: 'rattata', evolutions: ['raticate'] },
  { base: 'spearow', evolutions: ['fearow'] },
  { base: 'ekans', evolutions: ['arbok'] },
  { base: 'sandshrew', evolutions: ['sandslash'] },
  { base: 'vulpix', evolutions: ['ninetales'] },
  { base: 'paras', evolutions: ['parasect'] },
  { base: 'venonat', evolutions: ['venomoth'] },
  { base: 'diglett', evolutions: ['dugtrio'] },
  { base: 'meowth', evolutions: ['persian'] },
  { base: 'psyduck', evolutions: ['golduck'] },
  { base: 'mankey', evolutions: ['primeape'] },
  { base: 'growlithe', evolutions: ['arcanine'] },
  { base: 'tentacool', evolutions: ['tentacruel'] },
  { base: 'ponyta', evolutions: ['rapidash'] },
  { base: 'slowpoke', evolutions: ['slowbro'] },
  { base: 'doduo', evolutions: ['dodrio'] },
  { base: 'seel', evolutions: ['dewgong'] },
  { base: 'grimer', evolutions: ['muk'] },
  { base: 'shellder', evolutions: ['cloyster'] },
  { base: 'drowzee', evolutions: ['hypno'] },
  { base: 'krabby', evolutions: ['kingler'] },
  { base: 'voltorb', evolutions: ['electrode'] },
  { base: 'exeggcute', evolutions: ['exeggutor'] },
  { base: 'cubone', evolutions: ['marowak'] },
  { base: 'koffing', evolutions: ['weezing'] },
  { base: 'goldeen', evolutions: ['seaking'] },
  { base: 'staryu', evolutions: ['starmie'] },
  { base: 'magikarp', evolutions: ['gyarados'] },
  { base: 'sentret', evolutions: ['furret'] },
  { base: 'hoothoot', evolutions: ['noctowl'] },
  { base: 'ledyba', evolutions: ['ledian'] },
  { base: 'spinarak', evolutions: ['ariados'] },
  { base: 'chinchou', evolutions: ['lanturn'] },
  { base: 'natu', evolutions: ['xatu'] },
  { base: 'sunkern', evolutions: ['sunflora'] },
  { base: 'wooper', evolutions: ['quagsire'] },
  { base: 'pineco', evolutions: ['forretress'] },
  { base: 'snubbull', evolutions: ['granbull'] },
  { base: 'teddiursa', evolutions: ['ursaring'] },
  { base: 'slugma', evolutions: ['magcargo'] },
  { base: 'remoraid', evolutions: ['octillery'] },
  { base: 'poochyena', evolutions: ['mightyena'] },
  { base: 'zigzagoon', evolutions: ['linoone'] },
  { base: 'taillow', evolutions: ['swellow'] },
  { base: 'wingull', evolutions: ['pelipper'] },
  { base: 'surskit', evolutions: ['masquerain'] },
  { base: 'shroomish', evolutions: ['breloom'] },
  { base: 'makuhita', evolutions: ['hariyama'] },
  { base: 'skitty', evolutions: ['delcatty'] },
  { base: 'meditite', evolutions: ['medicham'] },
  { base: 'electrike', evolutions: ['manectric'] },
  { base: 'gulpin', evolutions: ['swalot'] },
  { base: 'carvanha', evolutions: ['sharpedo'] },
  { base: 'numel', evolutions: ['camerupt'] },
  { base: 'spoink', evolutions: ['grumpig'] },
  { base: 'cacnea', evolutions: ['cacturne'] },
  { base: 'swablu', evolutions: ['altaria'] },
  { base: 'barboach', evolutions: ['whiscash'] },
  { base: 'corphish', evolutions: ['crawdaunt'] },
  { base: 'baltoy', evolutions: ['claydol'] },
  { base: 'lileep', evolutions: ['cradily'] },
  { base: 'anorith', evolutions: ['armaldo'] },
  { base: 'shuppet', evolutions: ['banette'] },
  { base: 'snorunt', evolutions: ['glalie'] },
  { base: 'snorunt', evolutions: ['froslass'] },
  { base: 'clamperl', evolutions: ['huntail'] },
  { base: 'onix', evolutions: ['steelix'] },
  { base: 'scyther', evolutions: ['scizor'] },
  { base: 'smoochum', evolutions: ['jynx'] },
  { base: 'wynaut', evolutions: ['wobbuffet'] },
  { base: 'houndour', evolutions: ['houndoom'] },
  { base: 'phanpy', evolutions: ['donphan'] },
  { base: 'nincada', evolutions: ['ninjask'] },
  { base: 'nincada', evolutions: ['shedinja'] },
  { base: 'wailmer', evolutions: ['wailord'] },
  { base: 'feebas', evolutions: ['milotic'] },
  { base: 'slowpoke', evolutions: ['slowking'] },
  { base: 'clamperl', evolutions: ['gorebyss'] },
  { base: 'eevee', evolutions: ['vaporeon'] },
  { base: 'eevee', evolutions: ['jolteon'] },
  { base: 'eevee', evolutions: ['flareon'] },
  { base: 'eevee', evolutions: ['espeon'] },
  { base: 'eevee', evolutions: ['umbreon'] },
  { base: 'eevee', evolutions: ['leafeon'] },
  { base: 'eevee', evolutions: ['glaceon'] },
  { base: 'tyrogue', evolutions: ['hitmonlee'] },
  { base: 'tyrogue', evolutions: ['hitmonchan'] },
  { base: 'tyrogue', evolutions: ['hitmontop'] },
  { base: 'omanyte', evolutions: ['omastar'] },
  { base: 'kabuto', evolutions: ['kabutops'] },
  // Generation 4
  { base: 'bidoof', evolutions: ['bibarel'] },
  { base: 'kricketot', evolutions: ['kricketune'] },
  { base: 'cranidos', evolutions: ['rampardos'] },
  { base: 'shieldon', evolutions: ['bastiodon'] },
  // Burmy keeps its cloak into Wormadam if it evolves female, but every male
  // Burmy becomes the same Mothim regardless of cloak - so each cloak is a
  // branching base with two possible single-step lines, same shape as the
  // Eevee/Oddish/Poliwhirl branches above.
  { base: 'burmy_plant', evolutions: ['wormadam_plant'] },
  { base: 'burmy_plant', evolutions: ['mothim'] },
  { base: 'burmy_sandy', evolutions: ['wormadam_sandy'] },
  { base: 'burmy_sandy', evolutions: ['mothim'] },
  { base: 'burmy_trash', evolutions: ['wormadam_trash'] },
  { base: 'burmy_trash', evolutions: ['mothim'] },
  // Only female Combee evolves; combee_male is single-stage instead.
  { base: 'combee_female', evolutions: ['vespiquen'] },
  { base: 'buizel', evolutions: ['floatzel'] },
  { base: 'cherubi', evolutions: ['cherrim'] },
  { base: 'shellos_east', evolutions: ['gastrodon_east'] },
  { base: 'shellos_west', evolutions: ['gastrodon_west'] },
  { base: 'aipom', evolutions: ['ambipom'] },
  { base: 'drifloon', evolutions: ['drifblim'] },
  { base: 'buneary', evolutions: ['lopunny'] },
  { base: 'misdreavus', evolutions: ['mismagius'] },
  { base: 'murkrow', evolutions: ['honchkrow'] },
  { base: 'glameow', evolutions: ['purugly'] },
  { base: 'chingling', evolutions: ['chimecho'] },
  { base: 'stunky', evolutions: ['skuntank'] },
  { base: 'bronzor', evolutions: ['bronzong'] },
  { base: 'bonsly', evolutions: ['sudowoodo'] },
  { base: 'mimeJr', evolutions: ['mrmime'] },
  { base: 'munchlax', evolutions: ['snorlax'] },
  { base: 'riolu', evolutions: ['lucario'] },
  { base: 'hippopotas', evolutions: ['hippowdon'] },
  { base: 'skorupi', evolutions: ['drapion'] },
  { base: 'croagunk', evolutions: ['toxicroak'] },
  { base: 'finneon', evolutions: ['lumineon'] },
  { base: 'mantyke', evolutions: ['mantine'] },
  { base: 'snover', evolutions: ['abomasnow'] },
  { base: 'sneasel', evolutions: ['weavile'] },
  { base: 'lickitung', evolutions: ['lickilicky'] },
  { base: 'tangela', evolutions: ['tangrowth'] },
  { base: 'yanma', evolutions: ['yanmega'] },
  { base: 'gligar', evolutions: ['gliscor'] },
  { base: 'nosepass', evolutions: ['probopass'] },
]

// Species that do not evolve. They can still hatch from a Pokeball so every
// entry in the Pokedex is reachable, but they never gain an evolution stage.
const SINGLE_STAGE_SPECIES: EvolutionLine[] = [
  { base: 'farfetchd', evolutions: [] },
  { base: 'kangaskhan', evolutions: [] },
  { base: 'pinsir', evolutions: [] },
  { base: 'tauros', evolutions: [] },
  { base: 'lapras', evolutions: [] },
  { base: 'ditto', evolutions: [] },
  { base: 'aerodactyl', evolutions: [] },
  { base: 'articuno', evolutions: [] },
  { base: 'zapdos', evolutions: [] },
  { base: 'moltres', evolutions: [] },
  { base: 'mewtwo', evolutions: [] },
  { base: 'mew', evolutions: [] },
  { base: 'unown_a', evolutions: [] },
  { base: 'unown_b', evolutions: [] },
  { base: 'unown_c', evolutions: [] },
  { base: 'unown_d', evolutions: [] },
  { base: 'unown_e', evolutions: [] },
  { base: 'unown_f', evolutions: [] },
  { base: 'unown_g', evolutions: [] },
  { base: 'unown_h', evolutions: [] },
  { base: 'unown_i', evolutions: [] },
  { base: 'unown_j', evolutions: [] },
  { base: 'unown_k', evolutions: [] },
  { base: 'unown_l', evolutions: [] },
  { base: 'unown_m', evolutions: [] },
  { base: 'unown_n', evolutions: [] },
  { base: 'unown_o', evolutions: [] },
  { base: 'unown_p', evolutions: [] },
  { base: 'unown_q', evolutions: [] },
  { base: 'unown_r', evolutions: [] },
  { base: 'unown_s', evolutions: [] },
  { base: 'unown_t', evolutions: [] },
  { base: 'unown_u', evolutions: [] },
  { base: 'unown_v', evolutions: [] },
  { base: 'unown_w', evolutions: [] },
  { base: 'unown_x', evolutions: [] },
  { base: 'unown_y', evolutions: [] },
  { base: 'unown_z', evolutions: [] },
  { base: 'unown_exclamation', evolutions: [] },
  { base: 'unown_question', evolutions: [] },
  { base: 'girafarig', evolutions: [] },
  { base: 'dunsparce', evolutions: [] },
  { base: 'qwilfish', evolutions: [] },
  { base: 'shuckle', evolutions: [] },
  { base: 'heracross', evolutions: [] },
  { base: 'corsola', evolutions: [] },
  { base: 'delibird', evolutions: [] },
  { base: 'skarmory', evolutions: [] },
  { base: 'stantler', evolutions: [] },
  { base: 'smeargle', evolutions: [] },
  { base: 'miltank', evolutions: [] },
  { base: 'raikou', evolutions: [] },
  { base: 'entei', evolutions: [] },
  { base: 'suicune', evolutions: [] },
  { base: 'lugia', evolutions: [] },
  { base: 'hooh', evolutions: [] },
  { base: 'celebi', evolutions: [] },
  { base: 'sableye', evolutions: [] },
  { base: 'mawile', evolutions: [] },
  { base: 'plusle', evolutions: [] },
  { base: 'minun', evolutions: [] },
  { base: 'volbeat', evolutions: [] },
  { base: 'illumise', evolutions: [] },
  { base: 'torkoal', evolutions: [] },
  { base: 'spinda', evolutions: [] },
  { base: 'zangoose', evolutions: [] },
  { base: 'seviper', evolutions: [] },
  { base: 'lunatone', evolutions: [] },
  { base: 'solrock', evolutions: [] },
  { base: 'castform', evolutions: [] },
  { base: 'kecleon', evolutions: [] },
  { base: 'tropius', evolutions: [] },
  { base: 'absol', evolutions: [] },
  { base: 'relicanth', evolutions: [] },
  { base: 'luvdisc', evolutions: [] },
  { base: 'regirock', evolutions: [] },
  { base: 'regice', evolutions: [] },
  { base: 'registeel', evolutions: [] },
  { base: 'latias', evolutions: [] },
  { base: 'latios', evolutions: [] },
  { base: 'kyogre', evolutions: [] },
  { base: 'groudon', evolutions: [] },
  { base: 'rayquaza', evolutions: [] },
  { base: 'jirachi', evolutions: [] },
  { base: 'deoxys', evolutions: [] },
  { base: 'deoxys_speed', evolutions: [] },
  { base: 'deoxys_attack', evolutions: [] },
  { base: 'deoxys_defense', evolutions: [] },
  // Generation 4
  { base: 'pachirisu', evolutions: [] },
  { base: 'chatot', evolutions: [] },
  { base: 'spiritomb', evolutions: [] },
  { base: 'carnivine', evolutions: [] },
  { base: 'combee_male', evolutions: [] },
  // Rotom's appliance formes are a move-triggered form change, not a level-up
  // evolution, so - same as Deoxys and Arceus - each forme is its own
  // independent, equally-weighted entry sharing Rotom's dex id.
  { base: 'rotom', evolutions: [] },
  { base: 'rotom_fan', evolutions: [] },
  { base: 'rotom_frost', evolutions: [] },
  { base: 'rotom_heat', evolutions: [] },
  { base: 'rotom_mow', evolutions: [] },
  { base: 'rotom_wash', evolutions: [] },
  { base: 'uxie', evolutions: [] },
  { base: 'mesprit', evolutions: [] },
  { base: 'azelf', evolutions: [] },
  { base: 'dialga', evolutions: [] },
  { base: 'palkia', evolutions: [] },
  { base: 'heatran', evolutions: [] },
  { base: 'regigigas', evolutions: [] },
  { base: 'giratina', evolutions: [] },
  { base: 'giratina_origin', evolutions: [] },
  { base: 'cresselia', evolutions: [] },
  // Phione has no in-game legendary/mythical encounter flag (unlike its
  // lore-adjacent parent Manaphy) and breeds normally, so it is left
  // unranked rather than tagged into a rarity tier.
  { base: 'phione', evolutions: [] },
  { base: 'manaphy', evolutions: [] },
  { base: 'darkrai', evolutions: [] },
  { base: 'shaymin', evolutions: [] },
  { base: 'shaymin_sky', evolutions: [] },
  { base: 'arceus', evolutions: [] },
  { base: 'arceus_bug', evolutions: [] },
  { base: 'arceus_dark', evolutions: [] },
  { base: 'arceus_dragon', evolutions: [] },
  { base: 'arceus_electric', evolutions: [] },
  { base: 'arceus_fighting', evolutions: [] },
  { base: 'arceus_fire', evolutions: [] },
  { base: 'arceus_flying', evolutions: [] },
  { base: 'arceus_ghost', evolutions: [] },
  { base: 'arceus_grass', evolutions: [] },
  { base: 'arceus_ground', evolutions: [] },
  { base: 'arceus_ice', evolutions: [] },
  { base: 'arceus_poison', evolutions: [] },
  { base: 'arceus_psychic', evolutions: [] },
  { base: 'arceus_rock', evolutions: [] },
  { base: 'arceus_steel', evolutions: [] },
  { base: 'arceus_water', evolutions: [] },
]

export const MULTI_STAGE_EVOLUTION_LINES: EvolutionLine[] = [
  ...THREE_STAGE_EVOLUTIONS,
  ...TWO_STAGE_EVOLUTIONS,
]

export const ALL_EVOLUTION_LINES: EvolutionLine[] = [
  ...MULTI_STAGE_EVOLUTION_LINES,
  ...SINGLE_STAGE_SPECIES,
]

// Single stage species are a large share of the Pokedex, so picking uniformly
// across every line would make most Pokeballs hatch into something that never
// evolves. Keep evolving lines as the common case.
const SINGLE_STAGE_SPAWN_CHANCE = 0.2

function getRarity(base: PokemonType): PokemonRarity | undefined {
  return POKEMON_DATA[base]?.rarity
}

// Legendary-tier species are pulled out of the ordinary spawn pools so their
// rarity is intentional rather than an accident of the dex being mostly
// non-evolving species. Sub-legendary/legendary/mythical never evolve in this
// game so they only ever live in SINGLE_STAGE_SPECIES, but fossils do (Omanyte,
// Kabuto, Lileep, Anorith), so that tier is filtered from every line instead.
const COMMON_SINGLE_STAGE_SPECIES = SINGLE_STAGE_SPECIES.filter(
  line => getRarity(line.base) === undefined
)
const COMMON_MULTI_STAGE_EVOLUTION_LINES = MULTI_STAGE_EVOLUTION_LINES.filter(
  line => getRarity(line.base) === undefined
)
const SUB_LEGENDARY_SPECIES = SINGLE_STAGE_SPECIES.filter(
  line => getRarity(line.base) === PokemonRarity.subLegendary
)
const LEGENDARY_SPECIES = SINGLE_STAGE_SPECIES.filter(
  line => getRarity(line.base) === PokemonRarity.legendary
)
const MYTHICAL_SPECIES = SINGLE_STAGE_SPECIES.filter(
  line => getRarity(line.base) === PokemonRarity.mythical
)
const FOSSIL_SPECIES = ALL_EVOLUTION_LINES.filter(
  line => getRarity(line.base) === PokemonRarity.fossil
)

function pickRandomBase(lines: EvolutionLine[]): PokemonType {
  const uniqueBases = Array.from(new Set(lines.map(line => line.base)))
  const randomIndex = Math.floor(Math.random() * uniqueBases.length)
  return uniqueBases[randomIndex]
}

// Checked rarest first, each an independent roll that falls through to the
// next, more common tier on a miss. The odds below are the chance of landing
// in that tier specifically, not the chance of clearing that roll overall:
// mythical is ~0.5% of all catches, legendary ~1%, sub-legendary ~2%,
// fossil ~5%.
const MYTHICAL_SPAWN_CHANCE = 0.005
const LEGENDARY_SPAWN_CHANCE = 0.01
const SUB_LEGENDARY_SPAWN_CHANCE = 0.02
const FOSSIL_SPAWN_CHANCE = 0.05

export function getRandomBasePokemon(): PokemonType {
  if (MYTHICAL_SPECIES.length && Math.random() < MYTHICAL_SPAWN_CHANCE) {
    return pickRandomBase(MYTHICAL_SPECIES)
  }
  if (LEGENDARY_SPECIES.length && Math.random() < LEGENDARY_SPAWN_CHANCE) {
    return pickRandomBase(LEGENDARY_SPECIES)
  }
  if (SUB_LEGENDARY_SPECIES.length && Math.random() < SUB_LEGENDARY_SPAWN_CHANCE) {
    return pickRandomBase(SUB_LEGENDARY_SPECIES)
  }
  if (FOSSIL_SPECIES.length && Math.random() < FOSSIL_SPAWN_CHANCE) {
    return pickRandomBase(FOSSIL_SPECIES)
  }

  const pool =
    Math.random() < SINGLE_STAGE_SPAWN_CHANCE
      ? COMMON_SINGLE_STAGE_SPECIES
      : COMMON_MULTI_STAGE_EVOLUTION_LINES
  return pickRandomBase(pool)
}

const SHINY_SPAWN_CHANCE = 0.05

export function getRandomPokemonColor(): PokemonColor {
  return Math.random() < SHINY_SPAWN_CHANCE
    ? PokemonColor.shiny
    : PokemonColor.default
}

export function hasFurtherEvolution(
  evolutionLine: EvolutionLine,
  level: number
): boolean {
  return level < evolutionLine.evolutions.length + 1
}

export function getEvolutionLine(basePokemon: PokemonType): EvolutionLine | undefined {
  return ALL_EVOLUTION_LINES.find(line => line.base === basePokemon)
}

// Unlike getEvolutionLine, this matches any stage of the line, not just its
// base. A stage can sit on more than one line (see getEvolutionLinesContaining),
// so this only returns the first match - use the plural form wherever picking
// the wrong one of several would matter.
export function getEvolutionLineContaining(
  pokemon: PokemonType
): EvolutionLine | undefined {
  return ALL_EVOLUTION_LINES.find(
    line => line.base === pokemon || line.evolutions.indexOf(pokemon) >= 0
  )
}

// Every line a species appears anywhere on. More than one comes up in two
// separate shapes:
//
//   - a branching base (Eevee, Oddish, ...) has one entry per path it can
//     take, all sharing that base;
//   - a few stages past the base sit on several paths at once - Gloom,
//     Poliwhirl and Kirlia are each shared by the two branches that split
//     after them, and Mothim is the shared destination of all three Burmy
//     cloaks, which are three different bases.
//
// That last shape is why "a non-base stage belongs to exactly one line" does
// not hold, and why resolving a stage against the roster (rather than taking
// the first match) matters.
export function getEvolutionLinesContaining(pokemon: PokemonType): EvolutionLine[] {
  return ALL_EVOLUTION_LINES.filter(
    line => line.base === pokemon || line.evolutions.indexOf(pokemon) >= 0
  )
}

// Every path a branching base (Eevee, Oddish, ...) can take, one entry each.
export function getEvolutionLinesForBase(base: PokemonType): EvolutionLine[] {
  return ALL_EVOLUTION_LINES.filter(line => line.base === base)
}

// Rolls which path a newly created pokemon on a branching base commits to.
// For a base with a single line this just returns it - no branch to pick.
export function pickEvolutionLineForBase(base: PokemonType): EvolutionLine | undefined {
  const lines = getEvolutionLinesForBase(base)
  if (lines.length === 0) {
    return undefined
  }
  return lines[Math.floor(Math.random() * lines.length)]
}

function flattenLine(line: EvolutionLine): PokemonType[] {
  return [line.base, ...line.evolutions]
}

function pathsEqual(a: PokemonType[], b: PokemonType[]): boolean {
  return a.length === b.length && a.every((stage, index) => stage === b[index])
}

// Finds the current line matching a previously stored, flattened path (base
// plus every stage). A branching base has several lines, indistinguishable
// by base name alone, so a pokemon's committed path has to be resolved
// against all of them rather than trusting whichever one a plain base-name
// lookup happens to find first - that could silently switch which branch a
// pokemon that has not evolved past the branch point yet is committed to.
// Returns undefined if the stored path does not match any current line,
// which is the signal that it is stale and needs re-deriving some other way.
export function resolveEvolutionLine(
  storedPath: PokemonType[]
): EvolutionLine | undefined {
  if (storedPath.length === 0) {
    return undefined
  }
  return getEvolutionLinesForBase(storedPath[0]).find(line =>
    pathsEqual(flattenLine(line), storedPath)
  )
}

// Settles a stored path onto a line that still exists. Returns it unchanged
// when it already resolves; the interesting case is when it does not, which
// means the evolution data was restructured under a save.
//
// A base that gained branches has no single right answer there: a save from
// before the branch existed never committed to one, so any choice is a fresh
// one. This rolls, exactly as a fresh catch does, instead of always handing
// out whichever branch happens to be listed first - otherwise every Eevee,
// Tyrogue and Nincada raised before 1.3.0 would come out of the migration as
// a Vaporeon, Hitmonlee and Ninjask respectively.
//
// The roll only ever considers branches this pokemon actually appears on, so
// a stage already past the split is never moved onto a line it is not part
// of. Callers persist the result: an unsettled path would otherwise be
// re-rolled on the next read.
export function repairEvolutionLine(
  storedPath: PokemonType[],
  pokemon: PokemonType
): EvolutionLine | undefined {
  const resolved = resolveEvolutionLine(storedPath)
  if (resolved) {
    return resolved
  }

  const branches = getEvolutionLinesForBase(storedPath[0]).filter(
    line => line.base === pokemon || line.evolutions.indexOf(pokemon) >= 0
  )
  if (branches.length > 1) {
    return branches[Math.floor(Math.random() * branches.length)]
  }

  // Either exactly one branch fits, or the stored base is not a base any more
  // (a pre-evolution was added ahead of it) and the species has to be looked
  // up from scratch.
  return branches[0] ?? getEvolutionLineContaining(pokemon)
}

export function getNextEvolution(
  currentPokemon: PokemonType,
  evolutionLine: EvolutionLine
): PokemonType | undefined {
  if (currentPokemon === evolutionLine.base) {
    return evolutionLine.evolutions[0]
  }
  const currentIndex = evolutionLine.evolutions.indexOf(currentPokemon)
  if (currentIndex >= 0 && currentIndex < evolutionLine.evolutions.length - 1) {
    return evolutionLine.evolutions[currentIndex + 1]
  }
  return undefined
}

export function getPokemonLevel(
  pokemon: PokemonType,
  evolutionLine: EvolutionLine
): number {
  if (pokemon === evolutionLine.base) {
    return 1
  }
  const index = evolutionLine.evolutions.indexOf(pokemon)
  if (index >= 0) {
    return index + 2
  }
  return 1
}

export function getPokemonByLevel(
  evolutionLine: EvolutionLine,
  level: number
): PokemonType {
  if (level === 0) {
    return evolutionLine.base
  }
  if (level === 1) {
    return evolutionLine.base
  }
  const evolutionIndex = level - 2
  if (evolutionIndex >= 0 && evolutionIndex < evolutionLine.evolutions.length) {
    return evolutionLine.evolutions[evolutionIndex]
  }
  return evolutionLine.evolutions[evolutionLine.evolutions.length - 1]
}

