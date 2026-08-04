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
  { base: 'zubat', evolutions: ['golbat', 'crobat'] },
  { base: 'pichu', evolutions: ['pikachu', 'raichu'] },
  { base: 'cleffa', evolutions: ['clefairy', 'clefable'] },
  { base: 'igglybuff', evolutions: ['jigglypuff', 'wigglytuff'] },
  { base: 'horsea', evolutions: ['seadra', 'kingdra'] },
  { base: 'azurill', evolutions: ['marill', 'azumarill'] },
  { base: 'oddish', evolutions: ['gloom', 'bellossom'] },
  { base: 'poliwag', evolutions: ['poliwhirl', 'politoed'] },
  { base: 'wurmple', evolutions: ['cascoon', 'dustox'] },
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
  { base: 'onix', evolutions: ['steelix'] },
  { base: 'scyther', evolutions: ['scizor'] },
  { base: 'porygon', evolutions: ['porygon2'] },
  { base: 'chansey', evolutions: ['blissey'] },
  { base: 'smoochum', evolutions: ['jynx'] },
  { base: 'elekid', evolutions: ['electabuzz'] },
  { base: 'magby', evolutions: ['magmar'] },
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
  { base: 'tyrogue', evolutions: ['hitmonlee'] },
  { base: 'tyrogue', evolutions: ['hitmonchan'] },
  { base: 'tyrogue', evolutions: ['hitmontop'] },
  { base: 'omanyte', evolutions: ['omastar'] },
  { base: 'kabuto', evolutions: ['kabutops'] },
]

// Species that do not evolve. They can still hatch from a Pokeball so every
// entry in the Pokedex is reachable, but they never gain an evolution stage.
const SINGLE_STAGE_SPECIES: EvolutionLine[] = [
  { base: 'farfetchd', evolutions: [] },
  { base: 'lickitung', evolutions: [] },
  { base: 'tangela', evolutions: [] },
  { base: 'kangaskhan', evolutions: [] },
  { base: 'mrmime', evolutions: [] },
  { base: 'pinsir', evolutions: [] },
  { base: 'tauros', evolutions: [] },
  { base: 'lapras', evolutions: [] },
  { base: 'ditto', evolutions: [] },
  { base: 'aerodactyl', evolutions: [] },
  { base: 'snorlax', evolutions: [] },
  { base: 'articuno', evolutions: [] },
  { base: 'zapdos', evolutions: [] },
  { base: 'moltres', evolutions: [] },
  { base: 'mewtwo', evolutions: [] },
  { base: 'mew', evolutions: [] },
  { base: 'sudowoodo', evolutions: [] },
  { base: 'aipom', evolutions: [] },
  { base: 'yanma', evolutions: [] },
  { base: 'murkrow', evolutions: [] },
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
  { base: 'girafarig', evolutions: [] },
  { base: 'dunsparce', evolutions: [] },
  { base: 'gligar', evolutions: [] },
  { base: 'qwilfish', evolutions: [] },
  { base: 'shuckle', evolutions: [] },
  { base: 'heracross', evolutions: [] },
  { base: 'sneasel', evolutions: [] },
  { base: 'corsola', evolutions: [] },
  { base: 'delibird', evolutions: [] },
  { base: 'mantine', evolutions: [] },
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
  { base: 'nosepass', evolutions: [] },
  { base: 'sableye', evolutions: [] },
  { base: 'mawile', evolutions: [] },
  { base: 'plusle', evolutions: [] },
  { base: 'minun', evolutions: [] },
  { base: 'volbeat', evolutions: [] },
  { base: 'illumise', evolutions: [] },
  { base: 'roselia', evolutions: [] },
  { base: 'torkoal', evolutions: [] },
  { base: 'spinda', evolutions: [] },
  { base: 'zangoose', evolutions: [] },
  { base: 'seviper', evolutions: [] },
  { base: 'lunatone', evolutions: [] },
  { base: 'solrock', evolutions: [] },
  { base: 'castform', evolutions: [] },
  { base: 'kecleon', evolutions: [] },
  { base: 'tropius', evolutions: [] },
  { base: 'chimecho', evolutions: [] },
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

// Unlike getEvolutionLine, this matches any stage of the line, not just its base.
export function getEvolutionLineContaining(
  pokemon: PokemonType
): EvolutionLine | undefined {
  return ALL_EVOLUTION_LINES.find(
    line => line.base === pokemon || line.evolutions.indexOf(pokemon) >= 0
  )
}

// A branching base (Eevee, Oddish, ...) has more than one EvolutionLine
// entry sharing that base, one per possible path. Every non-base stage still
// belongs to exactly one entry, so getEvolutionLineContaining stays
// unambiguous for those; this is only needed to see every path from the base
// itself, or to pick one.
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

