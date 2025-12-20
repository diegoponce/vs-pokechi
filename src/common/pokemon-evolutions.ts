import { PokemonType } from './types'

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

export const ALL_EVOLUTION_LINES: EvolutionLine[] = [
  ...THREE_STAGE_EVOLUTIONS,
  ...TWO_STAGE_EVOLUTIONS,
]

export function getRandomBasePokemon(): PokemonType {
  const allBases = ALL_EVOLUTION_LINES.map(line => line.base)
  const uniqueBases = Array.from(new Set(allBases))
  const randomIndex = Math.floor(Math.random() * uniqueBases.length)
  return uniqueBases[randomIndex]
}

export function getEvolutionLine(basePokemon: PokemonType): EvolutionLine | undefined {
  return ALL_EVOLUTION_LINES.find(line => line.base === basePokemon)
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

