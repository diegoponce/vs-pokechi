import { PokemonColor, PokemonRarity, PokemonType } from './types'
import { POKEMON_DATA } from './pokemon-data'

export interface EvolutionLine {
  base: PokemonType
  evolutions: PokemonType[]
}

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
]

const TWO_STAGE_EVOLUTIONS: EvolutionLine[] = [
  { base: 'rattata', evolutions: ['raticate'] },
  { base: 'spearow', evolutions: ['fearow'] },
  { base: 'ekans', evolutions: ['arbok'] },
  { base: 'pikachu', evolutions: ['raichu'] },
  { base: 'sandshrew', evolutions: ['sandslash'] },
  { base: 'clefairy', evolutions: ['clefable'] },
  { base: 'vulpix', evolutions: ['ninetales'] },
  { base: 'jigglypuff', evolutions: ['wigglytuff'] },
  { base: 'zubat', evolutions: ['golbat'] },
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
  { base: 'magnemite', evolutions: ['magneton'] },
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
  { base: 'rhyhorn', evolutions: ['rhydon'] },
  { base: 'horsea', evolutions: ['seadra'] },
  { base: 'goldeen', evolutions: ['seaking'] },
  { base: 'staryu', evolutions: ['starmie'] },
  { base: 'magikarp', evolutions: ['gyarados'] },
  { base: 'sentret', evolutions: ['furret'] },
  { base: 'hoothoot', evolutions: ['noctowl'] },
  { base: 'ledyba', evolutions: ['ledian'] },
  { base: 'spinarak', evolutions: ['ariados'] },
  { base: 'chinchou', evolutions: ['lanturn'] },
  { base: 'togepi', evolutions: ['togetic'] },
  { base: 'natu', evolutions: ['xatu'] },
  { base: 'marill', evolutions: ['azumarill'] },
  { base: 'sunkern', evolutions: ['sunflora'] },
  { base: 'wooper', evolutions: ['quagsire'] },
  { base: 'pineco', evolutions: ['forretress'] },
  { base: 'snubbull', evolutions: ['granbull'] },
  { base: 'teddiursa', evolutions: ['ursaring'] },
  { base: 'slugma', evolutions: ['magcargo'] },
  { base: 'swinub', evolutions: ['piloswine'] },
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
  { base: 'duskull', evolutions: ['dusclops'] },
  { base: 'snorunt', evolutions: ['glalie'] },
  { base: 'clamperl', evolutions: ['huntail'] },
]

// Species that do not evolve. They can still hatch from a Pokeball so every
// entry in the Pokedex is reachable, but they never gain an evolution stage.
const SINGLE_STAGE_SPECIES: EvolutionLine[] = [
  { base: 'farfetchd', evolutions: [] },
  { base: 'onix', evolutions: [] },
  { base: 'hitmonlee', evolutions: [] },
  { base: 'hitmonchan', evolutions: [] },
  { base: 'lickitung', evolutions: [] },
  { base: 'chansey', evolutions: [] },
  { base: 'tangela', evolutions: [] },
  { base: 'kangaskhan', evolutions: [] },
  { base: 'mrmime', evolutions: [] },
  { base: 'scyther', evolutions: [] },
  { base: 'jynx', evolutions: [] },
  { base: 'electabuzz', evolutions: [] },
  { base: 'magmar', evolutions: [] },
  { base: 'pinsir', evolutions: [] },
  { base: 'tauros', evolutions: [] },
  { base: 'lapras', evolutions: [] },
  { base: 'ditto', evolutions: [] },
  { base: 'eevee', evolutions: [] },
  { base: 'vaporeon', evolutions: [] },
  { base: 'jolteon', evolutions: [] },
  { base: 'flareon', evolutions: [] },
  { base: 'porygon', evolutions: [] },
  { base: 'omanyte', evolutions: [] },
  { base: 'omastar', evolutions: [] },
  { base: 'kabuto', evolutions: [] },
  { base: 'kabutops', evolutions: [] },
  { base: 'aerodactyl', evolutions: [] },
  { base: 'snorlax', evolutions: [] },
  { base: 'articuno', evolutions: [] },
  { base: 'zapdos', evolutions: [] },
  { base: 'moltres', evolutions: [] },
  { base: 'mewtwo', evolutions: [] },
  { base: 'mew', evolutions: [] },
  { base: 'crobat', evolutions: [] },
  { base: 'pichu', evolutions: [] },
  { base: 'cleffa', evolutions: [] },
  { base: 'igglybuff', evolutions: [] },
  { base: 'bellossom', evolutions: [] },
  { base: 'sudowoodo', evolutions: [] },
  { base: 'politoed', evolutions: [] },
  { base: 'aipom', evolutions: [] },
  { base: 'yanma', evolutions: [] },
  { base: 'espeon', evolutions: [] },
  { base: 'umbreon', evolutions: [] },
  { base: 'murkrow', evolutions: [] },
  { base: 'slowking', evolutions: [] },
  { base: 'misdreavus', evolutions: [] },
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
  { base: 'wobbuffet', evolutions: [] },
  { base: 'girafarig', evolutions: [] },
  { base: 'dunsparce', evolutions: [] },
  { base: 'gligar', evolutions: [] },
  { base: 'steelix', evolutions: [] },
  { base: 'qwilfish', evolutions: [] },
  { base: 'scizor', evolutions: [] },
  { base: 'shuckle', evolutions: [] },
  { base: 'heracross', evolutions: [] },
  { base: 'sneasel', evolutions: [] },
  { base: 'corsola', evolutions: [] },
  { base: 'delibird', evolutions: [] },
  { base: 'mantine', evolutions: [] },
  { base: 'skarmory', evolutions: [] },
  { base: 'houndour', evolutions: [] },
  { base: 'houndoom', evolutions: [] },
  { base: 'kingdra', evolutions: [] },
  { base: 'phanpy', evolutions: [] },
  { base: 'donphan', evolutions: [] },
  { base: 'porygon2', evolutions: [] },
  { base: 'stantler', evolutions: [] },
  { base: 'smeargle', evolutions: [] },
  { base: 'tyrogue', evolutions: [] },
  { base: 'hitmontop', evolutions: [] },
  { base: 'smoochum', evolutions: [] },
  { base: 'elekid', evolutions: [] },
  { base: 'magby', evolutions: [] },
  { base: 'miltank', evolutions: [] },
  { base: 'blissey', evolutions: [] },
  { base: 'raikou', evolutions: [] },
  { base: 'entei', evolutions: [] },
  { base: 'suicune', evolutions: [] },
  { base: 'lugia', evolutions: [] },
  { base: 'hooh', evolutions: [] },
  { base: 'celebi', evolutions: [] },
  { base: 'cascoon', evolutions: [] },
  { base: 'dustox', evolutions: [] },
  { base: 'nincada', evolutions: [] },
  { base: 'ninjask', evolutions: [] },
  { base: 'shedinja', evolutions: [] },
  { base: 'azurill', evolutions: [] },
  { base: 'nosepass', evolutions: [] },
  { base: 'sableye', evolutions: [] },
  { base: 'mawile', evolutions: [] },
  { base: 'plusle', evolutions: [] },
  { base: 'minun', evolutions: [] },
  { base: 'volbeat', evolutions: [] },
  { base: 'illumise', evolutions: [] },
  { base: 'roselia', evolutions: [] },
  { base: 'wailmer', evolutions: [] },
  { base: 'wailord', evolutions: [] },
  { base: 'torkoal', evolutions: [] },
  { base: 'spinda', evolutions: [] },
  { base: 'zangoose', evolutions: [] },
  { base: 'seviper', evolutions: [] },
  { base: 'lunatone', evolutions: [] },
  { base: 'solrock', evolutions: [] },
  { base: 'feebas', evolutions: [] },
  { base: 'milotic', evolutions: [] },
  { base: 'castform', evolutions: [] },
  { base: 'kecleon', evolutions: [] },
  { base: 'tropius', evolutions: [] },
  { base: 'chimecho', evolutions: [] },
  { base: 'absol', evolutions: [] },
  { base: 'wynaut', evolutions: [] },
  { base: 'gorebyss', evolutions: [] },
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

// Legendary-tier species are pulled out of the ordinary single-stage pool so
// their rarity is intentional rather than an accident of the dex being mostly
// non-evolving species. hasOwnProperty check keeps a species out of the
// common pool exactly once - not twice, and not left in by mistake.
const COMMON_SINGLE_STAGE_SPECIES = SINGLE_STAGE_SPECIES.filter(
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

function pickRandomBase(lines: EvolutionLine[]): PokemonType {
  const uniqueBases = Array.from(new Set(lines.map(line => line.base)))
  const randomIndex = Math.floor(Math.random() * uniqueBases.length)
  return uniqueBases[randomIndex]
}

// Checked rarest first, each an independent roll that falls through to the
// next, more common tier on a miss. The odds below are the chance of landing
// in that tier specifically, not the chance of clearing that roll overall:
// mythical is ~0.5% of all catches, legendary ~1%, sub-legendary ~2%.
const MYTHICAL_SPAWN_CHANCE = 0.005
const LEGENDARY_SPAWN_CHANCE = 0.01
const SUB_LEGENDARY_SPAWN_CHANCE = 0.02

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

  const pool =
    Math.random() < SINGLE_STAGE_SPAWN_CHANCE
      ? COMMON_SINGLE_STAGE_SPECIES
      : MULTI_STAGE_EVOLUTION_LINES
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

// Unlike getEvolutionLine, this matches any stage of the line, not just its base.
export function getEvolutionLineContaining(
  pokemon: PokemonType
): EvolutionLine | undefined {
  return ALL_EVOLUTION_LINES.find(
    line => line.base === pokemon || line.evolutions.indexOf(pokemon) >= 0
  )
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

