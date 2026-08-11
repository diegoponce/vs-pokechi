// French counterpart of pokemon-info-data.ts - same species keys, same
// shape (PokemonInfoEntry), sourced the same way but with PokeAPI's
// French flavor text/move data instead of English. Stats are numbers,
// not translated text, and are identical to the English file.
import { PokemonElementType } from './types'
import { PokemonInfoEntry } from './pokemon-info-data'

export const POKEMON_INFO_DATA_FR: { [key: string]: PokemonInfoEntry } = {
  bulbasaur: {
    flavorText: 'Au matin de sa vie, la graine sur son dos lui fournit les éléments dont il a besoin pour grandir.',
    stats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'Fouet Lianes', type: PokemonElementType.grass, power: 45, description: 'Fouette l’ennemi avec de fines lianes pour infliger des dégâts.' },
      { name: 'Poudre Dodo', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand une poudre soporifique qui endort la cible.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
      { name: 'Tranch’Herbe', type: PokemonElementType.grass, power: 55, description: 'Des feuilles aiguisées comme des rasoirs entaillent l’ennemi. Taux de critiques élevé.' },
    ],
  },
  ivysaur: {
    flavorText: 'Lorsque le bourgeon sur son dos éclot, il répand un doux parfum pour célébrer sa floraison.',
    stats: { hp: 60, attack: 62, defense: 63, specialAttack: 80, specialDefense: 80, speed: 60 },
    moves: [
      { name: 'Fouet Lianes', type: PokemonElementType.grass, power: 45, description: 'Fouette l’ennemi avec de fines lianes pour infliger des dégâts.' },
      { name: 'Poudre Dodo', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand une poudre soporifique qui endort la cible.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
      { name: 'Tranch’Herbe', type: PokemonElementType.grass, power: 55, description: 'Des feuilles aiguisées comme des rasoirs entaillent l’ennemi. Taux de critiques élevé.' },
    ],
  },
  venusaur: {
    flavorText: 'Le parfum de sa fleur se fait plus pénétrant les lendemains de pluie. Cela appâte les autres Pokémon.',
    stats: { hp: 80, attack: 82, defense: 83, specialAttack: 100, specialDefense: 100, speed: 80 },
    moves: [
      { name: 'Fouet Lianes', type: PokemonElementType.grass, power: 45, description: 'Fouette l’ennemi avec de fines lianes pour infliger des dégâts.' },
      { name: 'Poudre Dodo', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand une poudre soporifique qui endort la cible.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
      { name: 'Tranch’Herbe', type: PokemonElementType.grass, power: 55, description: 'Des feuilles aiguisées comme des rasoirs entaillent l’ennemi. Taux de critiques élevé.' },
    ],
  },
  charmander: {
    flavorText: 'La flamme de sa queue symbolise sa vitalité. Elle est intense quand il est en bonne santé.',
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'Draco-Rage', type: PokemonElementType.dragon, power: null, description: 'La colère du lanceur déclenche une onde de choc destructrice qui inflige toujours 40 PV de dégâts.' },
      { name: 'Brouillard', type: PokemonElementType.normal, power: null, description: 'Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Griffe Acier', type: PokemonElementType.steel, power: 50, description: 'Attaque avec des griffes d’acier. Peut aussi augmenter l’Attaque du lanceur.' },
    ],
  },
  charmeleon: {
    flavorText: 'La nuit, la queue ardente du Reptincel brille comme une étoile dans son repaire montagneux.',
    stats: { hp: 58, attack: 64, defense: 58, specialAttack: 80, specialDefense: 65, speed: 80 },
    moves: [
      { name: 'Draco-Rage', type: PokemonElementType.dragon, power: null, description: 'La colère du lanceur déclenche une onde de choc destructrice qui inflige toujours 40 PV de dégâts.' },
      { name: 'Brouillard', type: PokemonElementType.normal, power: null, description: 'Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Griffe Acier', type: PokemonElementType.steel, power: 50, description: 'Attaque avec des griffes d’acier. Peut aussi augmenter l’Attaque du lanceur.' },
    ],
  },
  charizard: {
    flavorText: 'On raconte que la flamme du Dracaufeu s’intensifie après un combat difficile.',
    stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    moves: [
      { name: 'Draco-Rage', type: PokemonElementType.dragon, power: null, description: 'La colère du lanceur déclenche une onde de choc destructrice qui inflige toujours 40 PV de dégâts.' },
      { name: 'Brouillard', type: PokemonElementType.normal, power: null, description: 'Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi.' },
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
    ],
  },
  squirtle: {
    flavorText: 'Il se réfugie dans sa carapace et réplique en éclaboussant l’ennemi à la première occasion.',
    stats: { hp: 44, attack: 48, defense: 65, specialAttack: 50, specialDefense: 64, speed: 43 },
    moves: [
      { name: 'Repli', type: PokemonElementType.water, power: null, description: 'Le lanceur se recroqueville dans sa carapace, ce qui augmente sa Défense.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
      { name: 'Tour Rapide', type: PokemonElementType.normal, power: 50, description: 'Une attaque tournoyante pouvant aussi annuler par ex. Étreinte, Ligotage, Vampigraine ou Picots.' },
      { name: 'Coud’Krâne', type: PokemonElementType.normal, power: 130, description: 'Le lanceur baisse la tête pour augmenter sa Défense au 1er tour et percuter l’ennemi au 2è.' },
    ],
  },
  wartortle: {
    flavorText: 'On prétend qu’il vit 10 000 ans. Sa queue duveteuse est un symbole de longévité populaire.',
    stats: { hp: 59, attack: 63, defense: 80, specialAttack: 65, specialDefense: 80, speed: 58 },
    moves: [
      { name: 'Repli', type: PokemonElementType.water, power: null, description: 'Le lanceur se recroqueville dans sa carapace, ce qui augmente sa Défense.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
      { name: 'Tour Rapide', type: PokemonElementType.normal, power: 50, description: 'Une attaque tournoyante pouvant aussi annuler par ex. Étreinte, Ligotage, Vampigraine ou Picots.' },
      { name: 'Coud’Krâne', type: PokemonElementType.normal, power: 130, description: 'Le lanceur baisse la tête pour augmenter sa Défense au 1er tour et percuter l’ennemi au 2è.' },
    ],
  },
  blastoise: {
    flavorText: 'Les trombes d’eau projetées par les canons de sa carapace peuvent percer le métal le plus résistant.',
    stats: { hp: 79, attack: 83, defense: 100, specialAttack: 85, specialDefense: 105, speed: 78 },
    moves: [
      { name: 'Repli', type: PokemonElementType.water, power: null, description: 'Le lanceur se recroqueville dans sa carapace, ce qui augmente sa Défense.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
      { name: 'Tour Rapide', type: PokemonElementType.normal, power: 50, description: 'Une attaque tournoyante pouvant aussi annuler par ex. Étreinte, Ligotage, Vampigraine ou Picots.' },
      { name: 'Coud’Krâne', type: PokemonElementType.normal, power: 130, description: 'Le lanceur baisse la tête pour augmenter sa Défense au 1er tour et percuter l’ennemi au 2è.' },
    ],
  },
  caterpie: {
    flavorText: 'Ses antennes rouges libèrent une puanteur qui repousse l’ennemi. Il grandit par mues régulières.',
    stats: { hp: 45, attack: 30, defense: 35, specialAttack: 20, specialDefense: 20, speed: 45 },
    moves: [
      { name: 'Sécrétion', type: PokemonElementType.bug, power: null, description: 'Le lanceur crache de la soie pour ligoter l’ennemi et baisser sa Vitesse.' },
      { name: 'Charge', type: PokemonElementType.normal, power: 40, description: 'Le lanceur charge l’ennemi et le percute de tout son corps.' },
    ],
  },
  metapod: {
    flavorText: 'Son corps frêle est protégé par sa carapace d’acier. Il encaisse les coups durs en attendant d’évoluer.',
    stats: { hp: 50, attack: 20, defense: 55, specialAttack: 25, specialDefense: 25, speed: 30 },
    moves: [
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
    ],
  },
  butterfree: {
    flavorText: 'Il raffole du nectar des fleurs. Il est capable de repérer la plus petite quantité de pollen.',
    stats: { hp: 60, attack: 45, defense: 50, specialAttack: 90, specialDefense: 80, speed: 70 },
    moves: [
      { name: 'Poudre Dodo', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand une poudre soporifique qui endort la cible.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
      { name: 'Vent Argenté', type: PokemonElementType.bug, power: 60, description: 'Vent qui projette des écailles poudreuses sur l’ennemi. Peut aussi monter toutes les stats du lanceur.' },
      { name: 'Para-Spore', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand sur l’ennemi une poudre qui le paralyse.' },
    ],
  },
  kakuna: {
    flavorText: 'Il se cache sous les feuilles et les branches pour fuir les prédateurs en attendant d’évoluer.',
    stats: { hp: 45, attack: 25, defense: 50, specialAttack: 25, specialDefense: 25, speed: 35 },
    moves: [
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
    ],
  },
  weedle: {
    flavorText: 'Il mange chaque jour son poids en feuilles. Il utilise l’aiguillon sur sa tête pour repousser l’ennemi.',
    stats: { hp: 40, attack: 35, defense: 30, specialAttack: 20, specialDefense: 20, speed: 50 },
    moves: [
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Sécrétion', type: PokemonElementType.bug, power: null, description: 'Le lanceur crache de la soie pour ligoter l’ennemi et baisser sa Vitesse.' },
    ],
  },
  beedrill: {
    flavorText: 'Il virevolte rapidement autour de l’ennemi et frappe de son dard empoisonné avant de décamper.',
    stats: { hp: 65, attack: 90, defense: 40, specialAttack: 45, specialDefense: 80, speed: 75 },
    moves: [
      { name: 'Double Dard', type: PokemonElementType.bug, power: 25, description: 'Un double coup de dard qui transperce l’ennemi 2 fois d’affilée. Peut aussi l’empoisonner.' },
      { name: 'Dard-Nuée', type: PokemonElementType.bug, power: 25, description: 'Envoie une rafale de dards. Peut toucher de 2 à 5 fois.' },
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
      { name: 'Poursuite', type: PokemonElementType.dark, power: 40, description: 'Une attaque qui inflige deux fois plus de dégâts à un ennemi qui quitte le combat.' },
    ],
  },
  pidgey: {
    flavorText: 'Ce Pokémon docile préfère éviter le combat. Toutefois, il se montre très féroce quand on l’agresse.',
    stats: { hp: 40, attack: 45, defense: 40, specialAttack: 35, specialDefense: 35, speed: 56 },
    moves: [
      { name: 'Mimique', type: PokemonElementType.flying, power: null, description: 'Le lanceur riposte à l’attaque de l’ennemi avec la même attaque.' },
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Tornade', type: PokemonElementType.flying, power: 40, description: 'Le lanceur bat des ailes pour générer une bourrasque qui blesse l’ennemi.' },
      { name: 'Cyclone', type: PokemonElementType.normal, power: null, description: 'Éjecte le Pokémon ennemi et le remplace par un autre. Dans la nature, met fin au combat.' },
    ],
  },
  pidgeotto: {
    flavorText: 'Ce Pokémon est très endurant. Il survole en permanence son territoire pour chasser.',
    stats: { hp: 63, attack: 60, defense: 55, specialAttack: 50, specialDefense: 50, speed: 71 },
    moves: [
      { name: 'Mimique', type: PokemonElementType.flying, power: null, description: 'Le lanceur riposte à l’attaque de l’ennemi avec la même attaque.' },
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Tornade', type: PokemonElementType.flying, power: 40, description: 'Le lanceur bat des ailes pour générer une bourrasque qui blesse l’ennemi.' },
      { name: 'Cyclone', type: PokemonElementType.normal, power: null, description: 'Éjecte le Pokémon ennemi et le remplace par un autre. Dans la nature, met fin au combat.' },
    ],
  },
  pidgeot: {
    flavorText: 'En battant des ailes de toutes ses forces, Roucarnage génère une rafale à en déraciner les arbres.',
    stats: { hp: 83, attack: 80, defense: 75, specialAttack: 70, specialDefense: 70, speed: 101 },
    moves: [
      { name: 'Mimique', type: PokemonElementType.flying, power: null, description: 'Le lanceur riposte à l’attaque de l’ennemi avec la même attaque.' },
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Tornade', type: PokemonElementType.flying, power: 40, description: 'Le lanceur bat des ailes pour générer une bourrasque qui blesse l’ennemi.' },
      { name: 'Cyclone', type: PokemonElementType.normal, power: null, description: 'Éjecte le Pokémon ennemi et le remplace par un autre. Dans la nature, met fin au combat.' },
    ],
  },
  rattata: {
    flavorText: 'D’une prudence extrême, sa nature robuste lui permet de s’adapter à tous les terrains.',
    stats: { hp: 30, attack: 56, defense: 35, specialAttack: 25, specialDefense: 35, speed: 72 },
    moves: [
      { name: 'Croc de Mort', type: PokemonElementType.normal, power: 80, description: 'Le lanceur mord l’ennemi à l’aide de ses incisives aiguisées. Peut aussi apeurer l’ennemi.' },
      { name: 'Croc Fatal', type: PokemonElementType.normal, power: null, description: 'Une vilaine morsure d’incisives qui réduit de moitié les PV de l’ennemi.' },
      { name: 'Poursuite', type: PokemonElementType.dark, power: 40, description: 'Une attaque qui inflige deux fois plus de dégâts à un ennemi qui quitte le combat.' },
      { name: 'Mimi-Queue', type: PokemonElementType.normal, power: null, description: 'Le lanceur remue son adorable queue pour tromper la vigilance de l’ennemi et baisser sa Défense.' },
    ],
  },
  raticate: {
    flavorText: 'Il grignote sans cesse pour apaiser la poussée de ses crocs. Il peut transpercer un mur de parpaings.',
    stats: { hp: 55, attack: 81, defense: 60, specialAttack: 50, specialDefense: 70, speed: 97 },
    moves: [
      { name: 'Croc de Mort', type: PokemonElementType.normal, power: 80, description: 'Le lanceur mord l’ennemi à l’aide de ses incisives aiguisées. Peut aussi apeurer l’ennemi.' },
      { name: 'Croc Fatal', type: PokemonElementType.normal, power: null, description: 'Une vilaine morsure d’incisives qui réduit de moitié les PV de l’ennemi.' },
      { name: 'Poursuite', type: PokemonElementType.dark, power: 40, description: 'Une attaque qui inflige deux fois plus de dégâts à un ennemi qui quitte le combat.' },
      { name: 'Mimi-Queue', type: PokemonElementType.normal, power: null, description: 'Le lanceur remue son adorable queue pour tromper la vigilance de l’ennemi et baisser sa Défense.' },
    ],
  },
  spearow: {
    flavorText: 'Il fait battre vigoureusement ses petites ailes pour voler et cherche à manger dans l’herbe avec le bec.',
    stats: { hp: 40, attack: 60, defense: 30, specialAttack: 31, specialDefense: 31, speed: 70 },
    moves: [
      { name: 'Bec Vrille', type: PokemonElementType.flying, power: 80, description: 'Une attaque utilisant le bec comme une perceuse.' },
      { name: 'Mimique', type: PokemonElementType.flying, power: null, description: 'Le lanceur riposte à l’attaque de l’ennemi avec la même attaque.' },
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
      { name: 'Picpic', type: PokemonElementType.flying, power: 35, description: 'Frappe l’ennemi d’un bec pointu ou d’une corne pour infliger des dégâts.' },
    ],
  },
  fearow: {
    flavorText: 'Il a assez d’énergie pour voler toute la journée avec ses grandes ailes. Il frappe de son bec acéré.',
    stats: { hp: 65, attack: 90, defense: 65, specialAttack: 61, specialDefense: 61, speed: 100 },
    moves: [
      { name: 'Bec Vrille', type: PokemonElementType.flying, power: 80, description: 'Une attaque utilisant le bec comme une perceuse.' },
      { name: 'Mimique', type: PokemonElementType.flying, power: null, description: 'Le lanceur riposte à l’attaque de l’ennemi avec la même attaque.' },
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
      { name: 'Picpic', type: PokemonElementType.flying, power: 35, description: 'Frappe l’ennemi d’un bec pointu ou d’une corne pour infliger des dégâts.' },
    ],
  },
  ekans: {
    flavorText: 'Il se faufile dans l’herbe sans un bruit et frappe dans le dos quand sa proie s’y attend le moins.',
    stats: { hp: 35, attack: 60, defense: 44, specialAttack: 40, specialDefense: 54, speed: 55 },
    moves: [
      { name: 'Regard Médusant', type: PokemonElementType.normal, power: null, description: 'Le lanceur intimide l’ennemi grâce à son regard terrifiant pour le paralyser.' },
      { name: 'Acide', type: PokemonElementType.poison, power: 40, description: 'Le lanceur attaque l’ennemi avec un jet d’acide corrosif. Peut aussi baisser la Défense Spéciale de l’ennemi.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Ligotage', type: PokemonElementType.normal, power: 15, description: 'Le lanceur ligote l’ennemi avec des lianes ou son corps pour l’écraser durant 4 à 5 tours.' },
    ],
  },
  arbok: {
    flavorText: 'Il utilise la marque sur son ventre pour intimider l’ennemi. Il étouffe l’ennemi pétrifié par la peur.',
    stats: { hp: 60, attack: 95, defense: 69, specialAttack: 65, specialDefense: 79, speed: 80 },
    moves: [
      { name: 'Regard Médusant', type: PokemonElementType.normal, power: null, description: 'Le lanceur intimide l’ennemi grâce à son regard terrifiant pour le paralyser.' },
      { name: 'Acide', type: PokemonElementType.poison, power: 40, description: 'Le lanceur attaque l’ennemi avec un jet d’acide corrosif. Peut aussi baisser la Défense Spéciale de l’ennemi.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Ligotage', type: PokemonElementType.normal, power: 15, description: 'Le lanceur ligote l’ennemi avec des lianes ou son corps pour l’écraser durant 4 à 5 tours.' },
    ],
  },
  pikachu: {
    flavorText: 'Il lui arrive de remettre d’aplomb un Pikachu allié en lui envoyant une décharge électrique.',
    stats: { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
    moves: [
      { name: 'Éclair', type: PokemonElementType.electric, power: 40, description: 'Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Souplesse', type: PokemonElementType.normal, power: 80, description: 'Fouette l’ennemi avec la queue, une liane, etc. pour infliger des dégâts.' },
      { name: 'Mimi-Queue', type: PokemonElementType.normal, power: null, description: 'Le lanceur remue son adorable queue pour tromper la vigilance de l’ennemi et baisser sa Défense.' },
      { name: 'Vive-Attaque', type: PokemonElementType.normal, power: 40, description: 'Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en premier.' },
    ],
  },
  raichu: {
    flavorText: 'Il se protège des décharges grâce à sa queue qui dissipe l’électricité dans le sol.',
    stats: { hp: 60, attack: 90, defense: 55, specialAttack: 90, specialDefense: 80, speed: 110 },
    moves: [
      { name: 'Éclair', type: PokemonElementType.electric, power: 40, description: 'Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Mimi-Queue', type: PokemonElementType.normal, power: null, description: 'Le lanceur remue son adorable queue pour tromper la vigilance de l’ennemi et baisser sa Défense.' },
      { name: 'Vive-Attaque', type: PokemonElementType.normal, power: 40, description: 'Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en premier.' },
      { name: 'Tonnerre', type: PokemonElementType.electric, power: 90, description: 'Une grosse décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
    ],
  },
  sandshrew: {
    flavorText: 'Il vit sur des terres arides épargnées par la pluie. Il se roule en boule pour se protéger.',
    stats: { hp: 50, attack: 75, defense: 85, specialAttack: 20, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Tourbi-Sable', type: PokemonElementType.ground, power: 35, description: 'Le lanceur emprisonne l’ennemi dans une tempête de sable terrifiante qui dure de 4 à 5 tours.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
    ],
  },
  sandslash: {
    flavorText: 'Il se met en boule pour percuter l’ennemi. Ses épines aiguisées font beaucoup de dégâts.',
    stats: { hp: 75, attack: 100, defense: 110, specialAttack: 45, specialDefense: 55, speed: 65 },
    moves: [
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Tourbi-Sable', type: PokemonElementType.ground, power: 35, description: 'Le lanceur emprisonne l’ennemi dans une tempête de sable terrifiante qui dure de 4 à 5 tours.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
    ],
  },
  nidoran_female: {
    flavorText: 'Bien qu’il rechigne à se battre, une goutte du poison sécrété par ses piquants peut s’avérer fatale.',
    stats: { hp: 55, attack: 47, defense: 52, specialAttack: 40, specialDefense: 40, speed: 41 },
    moves: [
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Flatterie', type: PokemonElementType.dark, power: null, description: 'Rend la cible confuse, mais augmente son Attaque Spéciale.' },
      { name: 'Double Pied', type: PokemonElementType.fighting, power: 30, description: 'Deux coups de pied qui frappent l’ennemi deux fois d’affilée.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
    ],
  },
  nidorina: {
    flavorText: 'Ce Pokémon dresse ses piquants en cas de danger. Ils poussent moins vite que ceux de Nidorino.',
    stats: { hp: 70, attack: 62, defense: 67, specialAttack: 55, specialDefense: 55, speed: 56 },
    moves: [
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Flatterie', type: PokemonElementType.dark, power: null, description: 'Rend la cible confuse, mais augmente son Attaque Spéciale.' },
      { name: 'Double Pied', type: PokemonElementType.fighting, power: 30, description: 'Deux coups de pied qui frappent l’ennemi deux fois d’affilée.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
    ],
  },
  nidoqueen: {
    flavorText: 'Son corps est recouvert d’écailles solides. Il donnera sa vie pour secourir les petits de son terrier.',
    stats: { hp: 90, attack: 92, defense: 87, specialAttack: 75, specialDefense: 85, speed: 76 },
    moves: [
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Double Pied', type: PokemonElementType.fighting, power: 30, description: 'Deux coups de pied qui frappent l’ennemi deux fois d’affilée.' },
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
      { name: 'Mimi-Queue', type: PokemonElementType.normal, power: null, description: 'Le lanceur remue son adorable queue pour tromper la vigilance de l’ennemi et baisser sa Défense.' },
    ],
  },
  nidoran_male: {
    flavorText: 'Il jauge le terrain en laissant ses oreilles dépasser de l’herbe. Il se défend avec sa corne toxique.',
    stats: { hp: 46, attack: 57, defense: 40, specialAttack: 40, specialDefense: 40, speed: 50 },
    moves: [
      { name: 'Koud’Korne', type: PokemonElementType.normal, power: 65, description: 'Frappe l’ennemi d’un coup de corne pointue pour infliger des dégâts.' },
      { name: 'Empal’Korne', type: PokemonElementType.normal, power: null, description: 'Un coup de corne en vrille qui empale l’ennemi, le mettant K.O. sur le coup s’il est touché.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Flatterie', type: PokemonElementType.dark, power: null, description: 'Rend la cible confuse, mais augmente son Attaque Spéciale.' },
    ],
  },
  nidorino: {
    flavorText: 'D’un tempérament violent, il empale l’ennemi sur sa corne qui distille un poison puissant.',
    stats: { hp: 61, attack: 72, defense: 57, specialAttack: 55, specialDefense: 55, speed: 65 },
    moves: [
      { name: 'Koud’Korne', type: PokemonElementType.normal, power: 65, description: 'Frappe l’ennemi d’un coup de corne pointue pour infliger des dégâts.' },
      { name: 'Empal’Korne', type: PokemonElementType.normal, power: null, description: 'Un coup de corne en vrille qui empale l’ennemi, le mettant K.O. sur le coup s’il est touché.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Flatterie', type: PokemonElementType.dark, power: null, description: 'Rend la cible confuse, mais augmente son Attaque Spéciale.' },
    ],
  },
  nidoking: {
    flavorText: 'Un coup de sa puissante queue peut briser un poteau téléphonique comme une allumette.',
    stats: { hp: 81, attack: 102, defense: 77, specialAttack: 85, specialDefense: 75, speed: 85 },
    moves: [
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Mégacorne', type: PokemonElementType.bug, power: 120, description: 'Le lanceur utilise ses gigantesques cornes pour charger l’ennemi.' },
      { name: 'Double Pied', type: PokemonElementType.fighting, power: 30, description: 'Deux coups de pied qui frappent l’ennemi deux fois d’affilée.' },
      { name: 'Picpic', type: PokemonElementType.flying, power: 35, description: 'Frappe l’ennemi d’un bec pointu ou d’une corne pour infliger des dégâts.' },
    ],
  },
  clefairy: {
    flavorText: 'On dit que ceux qui voient danser un groupe de Mélofée sous la pleine lune connaîtront un grand bonheur.',
    stats: { hp: 70, attack: 45, defense: 48, specialAttack: 60, specialDefense: 65, speed: 35 },
    moves: [
      { name: 'Poing Météore', type: PokemonElementType.steel, power: 90, description: 'Un coup de poing lancé à la vitesse d’un météore. Peut aussi augmenter l’Attaque du lanceur.' },
      { name: 'Lilliput', type: PokemonElementType.normal, power: null, description: 'Le lanceur comprime son corps pour se faire tout petit et augmenter fortement son Esquive.' },
      { name: 'Par Ici', type: PokemonElementType.normal, power: null, description: 'Attire l’attention. Les ennemis n’attaquent que le lanceur.' },
      { name: 'Rayon Lune', type: PokemonElementType.normal, power: null, description: 'Un soin qui restaure des PV au lanceur. Son efficacité varie en fonction de la météo.' },
    ],
  },
  clefable: {
    flavorText: 'Il est très farouche et se laisse rarement approcher. De plus, il détecte les sons à plus d’1 km.',
    stats: { hp: 95, attack: 70, defense: 73, specialAttack: 95, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'Lilliput', type: PokemonElementType.normal, power: null, description: 'Le lanceur comprime son corps pour se faire tout petit et augmenter fortement son Esquive.' },
      { name: 'Torgnoles', type: PokemonElementType.normal, power: 15, description: 'Gifle rapidement l’ennemi de 2 à 5 fois d’affilée.' },
      { name: 'Berceuse', type: PokemonElementType.normal, power: null, description: 'Une berceuse plonge l’ennemi dans un profond sommeil.' },
      { name: 'Métronome', type: PokemonElementType.normal, power: null, description: 'Agite un doigt et stimule le cerveau pour utiliser presque n’importe quelle capacité au hasard.' },
    ],
  },
  vulpix: {
    flavorText: 'Il envoie des boules de feu. Avec l’âge, ses six queues en forment de nouvelles.',
    stats: { hp: 38, attack: 41, defense: 40, specialAttack: 50, specialDefense: 65, speed: 65 },
    moves: [
      { name: 'Rancune', type: PokemonElementType.ghost, power: null, description: 'Si le lanceur est mis K.O., sa rancune épuise les PP de la capacité utilisée pour le mettre K.O.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Danse Flammes', type: PokemonElementType.fire, power: 35, description: 'Un tourbillon de flammes emprisonne l’ennemi pendant 4 à 5 tours.' },
      { name: 'Mimi-Queue', type: PokemonElementType.normal, power: null, description: 'Le lanceur remue son adorable queue pour tromper la vigilance de l’ennemi et baisser sa Défense.' },
    ],
  },
  ninetales: {
    flavorText: 'On raconte que ses neuf queues détiennent un pouvoir mystique. Il peut vivre pendant mille ans.',
    stats: { hp: 73, attack: 76, defense: 75, specialAttack: 81, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Danse Flammes', type: PokemonElementType.fire, power: 35, description: 'Un tourbillon de flammes emprisonne l’ennemi pendant 4 à 5 tours.' },
      { name: 'Vive-Attaque', type: PokemonElementType.normal, power: 40, description: 'Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en premier.' },
      { name: 'Onde Folie', type: PokemonElementType.ghost, power: null, description: 'Un rayon sinistre qui plonge l’ennemi dans un état de confusion.' },
    ],
  },
  jigglypuff: {
    flavorText: 'Lorsqu’il roule ses grands yeux ronds, il entonne une berceuse qui endort son auditoire.',
    stats: { hp: 115, attack: 45, defense: 20, specialAttack: 45, specialDefense: 25, speed: 20 },
    moves: [
      { name: 'Torgnoles', type: PokemonElementType.normal, power: 15, description: 'Gifle rapidement l’ennemi de 2 à 5 fois d’affilée.' },
      { name: 'Berceuse', type: PokemonElementType.normal, power: null, description: 'Une berceuse plonge l’ennemi dans un profond sommeil.' },
      { name: 'Écras’Face', type: PokemonElementType.normal, power: 40, description: 'Écrase l’ennemi avec les pattes avant, la queue, etc.' },
      { name: 'Entrave', type: PokemonElementType.normal, power: null, description: 'Empêche l’ennemi d’employer à nouveau sa dernière attaque. Dure quatre tours.' },
    ],
  },
  wigglytuff: {
    flavorText: 'Sa fourrure est d’une douceur incomparable au toucher. Il peut gonfler en aspirant de l’air.',
    stats: { hp: 140, attack: 70, defense: 45, specialAttack: 85, specialDefense: 50, speed: 45 },
    moves: [
      { name: 'Torgnoles', type: PokemonElementType.normal, power: 15, description: 'Gifle rapidement l’ennemi de 2 à 5 fois d’affilée.' },
      { name: 'Berceuse', type: PokemonElementType.normal, power: null, description: 'Une berceuse plonge l’ennemi dans un profond sommeil.' },
      { name: 'Entrave', type: PokemonElementType.normal, power: null, description: 'Empêche l’ennemi d’employer à nouveau sa dernière attaque. Dure quatre tours.' },
      { name: 'Boul’Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur s’enroule pour cacher ses points faibles, ce qui augmente sa Défense.' },
    ],
  },
  zubat: {
    flavorText: 'Il se repère dans l’espace grâce aux ultrasons émis par sa gueule.',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 30, specialDefense: 40, speed: 55 },
    moves: [
      { name: 'Crochet Venin', type: PokemonElementType.poison, power: 50, description: 'Le lanceur mord l’ennemi de ses crocs toxiques. Peut aussi l’empoisonner gravement.' },
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Regard Noir', type: PokemonElementType.normal, power: null, description: 'Le lanceur pétrifie l’ennemi en lui lançant un regard noir. Il devient incapable de s’enfuir.' },
      { name: 'Ultrason', type: PokemonElementType.normal, power: null, description: 'Le lanceur produit d’étranges ondes sonores qui rendent confus.' },
    ],
  },
  golbat: {
    flavorText: 'Ses crocs acérés et creux peuvent pénétrer la plus épaisse des peaux et sucer le sang de la victime.',
    stats: { hp: 75, attack: 80, defense: 70, specialAttack: 65, specialDefense: 75, speed: 90 },
    moves: [
      { name: 'Crochet Venin', type: PokemonElementType.poison, power: 50, description: 'Le lanceur mord l’ennemi de ses crocs toxiques. Peut aussi l’empoisonner gravement.' },
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Regard Noir', type: PokemonElementType.normal, power: null, description: 'Le lanceur pétrifie l’ennemi en lui lançant un regard noir. Il devient incapable de s’enfuir.' },
      { name: 'Ultrason', type: PokemonElementType.normal, power: null, description: 'Le lanceur produit d’étranges ondes sonores qui rendent confus.' },
    ],
  },
  oddish: {
    flavorText: 'En journée, il plante ses pieds-racines dans le sol. La nuit, il se promène en semant des graines.',
    stats: { hp: 45, attack: 50, defense: 55, specialAttack: 75, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'Danse Fleurs', type: PokemonElementType.grass, power: 120, description: 'Le lanceur attaque en projetant des pétales pendant 2 à 3 tours avant de céder à la confusion.' },
      { name: 'Rayon Lune', type: PokemonElementType.normal, power: null, description: 'Un soin qui restaure des PV au lanceur. Son efficacité varie en fonction de la météo.' },
      { name: 'Acide', type: PokemonElementType.poison, power: 40, description: 'Le lanceur attaque l’ennemi avec un jet d’acide corrosif. Peut aussi baisser la Défense Spéciale de l’ennemi.' },
      { name: 'Poudre Dodo', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand une poudre soporifique qui endort la cible.' },
    ],
  },
  gloom: {
    flavorText: 'L’odeur du nectar de sa bouche est si répugnante qu’elle agresse les narines à deux kilomètres.',
    stats: { hp: 60, attack: 65, defense: 70, specialAttack: 85, specialDefense: 75, speed: 40 },
    moves: [
      { name: 'Danse Fleurs', type: PokemonElementType.grass, power: 120, description: 'Le lanceur attaque en projetant des pétales pendant 2 à 3 tours avant de céder à la confusion.' },
      { name: 'Rayon Lune', type: PokemonElementType.normal, power: null, description: 'Un soin qui restaure des PV au lanceur. Son efficacité varie en fonction de la météo.' },
      { name: 'Acide', type: PokemonElementType.poison, power: 40, description: 'Le lanceur attaque l’ennemi avec un jet d’acide corrosif. Peut aussi baisser la Défense Spéciale de l’ennemi.' },
      { name: 'Poudre Dodo', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand une poudre soporifique qui endort la cible.' },
    ],
  },
  vileplume: {
    flavorText: 'Ses pétales sont les plus grands du monde. Il marche en répandant un pollen extrêmement allergène.',
    stats: { hp: 75, attack: 80, defense: 85, specialAttack: 110, specialDefense: 90, speed: 50 },
    moves: [
      { name: 'Danse Fleurs', type: PokemonElementType.grass, power: 120, description: 'Le lanceur attaque en projetant des pétales pendant 2 à 3 tours avant de céder à la confusion.' },
      { name: 'Aromathérapie', type: PokemonElementType.grass, power: null, description: 'Le lanceur libère un parfum apaisant qui guérit tous les problèmes de statut de l’équipe.' },
      { name: 'Para-Spore', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand sur l’ennemi une poudre qui le paralyse.' },
      { name: 'Vole-Vie', type: PokemonElementType.grass, power: 20, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
    ],
  },
  paras: {
    flavorText: 'Des champignons appelés “tochukaso” poussent sur son dos. Ils évoluent avec le Paras hôte.',
    stats: { hp: 35, attack: 70, defense: 55, specialAttack: 45, specialDefense: 55, speed: 25 },
    moves: [
      { name: 'Spore', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand un nuage de spores qui endort.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
      { name: 'Aromathérapie', type: PokemonElementType.grass, power: null, description: 'Le lanceur libère un parfum apaisant qui guérit tous les problèmes de statut de l’équipe.' },
      { name: 'Para-Spore', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand sur l’ennemi une poudre qui le paralyse.' },
    ],
  },
  parasect: {
    flavorText: 'Un champignon parasite plus gros que Parasect contrôle son corps. Il répand des spores empoisonnées.',
    stats: { hp: 60, attack: 95, defense: 80, specialAttack: 60, specialDefense: 80, speed: 30 },
    moves: [
      { name: 'Spore', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand un nuage de spores qui endort.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
      { name: 'Aromathérapie', type: PokemonElementType.grass, power: null, description: 'Le lanceur libère un parfum apaisant qui guérit tous les problèmes de statut de l’équipe.' },
      { name: 'Para-Spore', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand sur l’ennemi une poudre qui le paralyse.' },
    ],
  },
  venonat: {
    flavorText: 'Ses grands yeux sont en fait des amas d’yeux minuscules. La nuit, il est attiré par la lumière.',
    stats: { hp: 60, attack: 55, defense: 50, specialAttack: 40, specialDefense: 55, speed: 45 },
    moves: [
      { name: 'Poudre Dodo', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand une poudre soporifique qui endort la cible.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
      { name: 'Para-Spore', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand sur l’ennemi une poudre qui le paralyse.' },
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
    ],
  },
  venomoth: {
    flavorText: 'Il répand ses écailles poudreuses en battant des ailes. Elles sont toxiques au toucher.',
    stats: { hp: 70, attack: 65, defense: 60, specialAttack: 90, specialDefense: 75, speed: 90 },
    moves: [
      { name: 'Poudre Dodo', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand une poudre soporifique qui endort la cible.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
      { name: 'Vent Argenté', type: PokemonElementType.bug, power: 60, description: 'Vent qui projette des écailles poudreuses sur l’ennemi. Peut aussi monter toutes les stats du lanceur.' },
      { name: 'Para-Spore', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand sur l’ennemi une poudre qui le paralyse.' },
    ],
  },
  diglett: {
    flavorText: 'Un Pokémon qui vit sous terre. Habitué aux souterrains, il fuit la lumière du jour.',
    stats: { hp: 10, attack: 55, defense: 25, specialAttack: 35, specialDefense: 45, speed: 95 },
    moves: [
      { name: 'Ampleur', type: PokemonElementType.ground, power: null, description: 'Un tremblement de terre d’intensité variable qui affecte tous les Pokémon alentour. L’efficacité varie.' },
      { name: 'Abîme', type: PokemonElementType.ground, power: null, description: 'Le lanceur fait tomber l’ennemi dans une crevasse. Si cette attaque réussit, elle met K.O. sur le coup.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
    ],
  },
  dugtrio: {
    flavorText: 'Ses trois têtes creusent le sol à tour de rôle. Il peut atteindre des profondeurs de 100 kilomètres.',
    stats: { hp: 35, attack: 100, defense: 50, specialAttack: 50, specialDefense: 70, speed: 120 },
    moves: [
      { name: 'Ampleur', type: PokemonElementType.ground, power: null, description: 'Un tremblement de terre d’intensité variable qui affecte tous les Pokémon alentour. L’efficacité varie.' },
      { name: 'Triplattaque', type: PokemonElementType.normal, power: 80, description: 'Le lanceur envoie trois boules d’énergie simultanément. Peut aussi paralyser, brûler ou geler l’ennemi.' },
      { name: 'Abîme', type: PokemonElementType.ground, power: null, description: 'Le lanceur fait tomber l’ennemi dans une crevasse. Si cette attaque réussit, elle met K.O. sur le coup.' },
      { name: 'Tourbi-Sable', type: PokemonElementType.ground, power: 35, description: 'Le lanceur emprisonne l’ennemi dans une tempête de sable terrifiante qui dure de 4 à 5 tours.' },
    ],
  },
  meowth: {
    flavorText: 'Son regard s’anime à la vue d’un objet brillant. C’est un Pokémon nocturne.',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 40, specialDefense: 40, speed: 90 },
    moves: [
      { name: 'Jackpot', type: PokemonElementType.normal, power: 40, description: 'Des pièces sont lancées sur l’ennemi. Permet d’obtenir de l’argent à la fin du combat.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Bluff', type: PokemonElementType.normal, power: 40, description: 'Permet de frapper en premier et apeure l’ennemi. Ne fonctionne qu’au premier tour.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
    ],
  },
  persian: {
    flavorText: 'Un Pokémon très snob. La taille du joyau qui orne son front alimente bien des débats parmi ses fans.',
    stats: { hp: 65, attack: 70, defense: 60, specialAttack: 65, specialDefense: 65, speed: 115 },
    moves: [
      { name: 'Jackpot', type: PokemonElementType.normal, power: 40, description: 'Des pièces sont lancées sur l’ennemi. Permet d’obtenir de l’argent à la fin du combat.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Bluff', type: PokemonElementType.normal, power: 40, description: 'Permet de frapper en premier et apeure l’ennemi. Ne fonctionne qu’au premier tour.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
    ],
  },
  psyduck: {
    flavorText: 'Ses pouvoirs déconcertants et mystérieux lui font subir de constantes migraines.',
    stats: { hp: 50, attack: 52, defense: 48, specialAttack: 65, specialDefense: 50, speed: 55 },
    moves: [
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
      { name: 'Entrave', type: PokemonElementType.normal, power: null, description: 'Empêche l’ennemi d’employer à nouveau sa dernière attaque. Dure quatre tours.' },
    ],
  },
  golduck: {
    flavorText: 'Ses membres palmés et son corps parfaitement adapté font de lui un nageur exceptionnel.',
    stats: { hp: 80, attack: 82, defense: 78, specialAttack: 95, specialDefense: 80, speed: 85 },
    moves: [
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
      { name: 'Entrave', type: PokemonElementType.normal, power: null, description: 'Empêche l’ennemi d’employer à nouveau sa dernière attaque. Dure quatre tours.' },
    ],
  },
  mankey: {
    flavorText: 'Ils vivent en colonies sylvestres. Quand un Férosinge s’énerve, toute la colonie suit son exemple.',
    stats: { hp: 40, attack: 80, defense: 35, specialAttack: 35, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'Poing Karaté', type: PokemonElementType.fighting, power: 50, description: 'L’ennemi est tranché violemment. Taux de critiques élevé.' },
      { name: 'Coup Croix', type: PokemonElementType.fighting, power: 100, description: 'Le lanceur délivre un coup double en croisant les avant-bras. Taux de critiques élevé.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
    ],
  },
  primeape: {
    flavorText: 'Il grogne quand on le toise, rugit quand on s’enfuit et devient fou de rage quand on le frappe.',
    stats: { hp: 65, attack: 105, defense: 60, specialAttack: 60, specialDefense: 70, speed: 95 },
    moves: [
      { name: 'Poing Karaté', type: PokemonElementType.fighting, power: 50, description: 'L’ennemi est tranché violemment. Taux de critiques élevé.' },
      { name: 'Coup Croix', type: PokemonElementType.fighting, power: 100, description: 'Le lanceur délivre un coup double en croisant les avant-bras. Taux de critiques élevé.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
    ],
  },
  growlithe: {
    flavorText: 'Un Pokémon très loyal. Il restera immobile jusqu’à ce que son Dresseur lui donne un ordre.',
    stats: { hp: 55, attack: 70, defense: 45, specialAttack: 70, specialDefense: 50, speed: 60 },
    moves: [
      { name: 'Roue de Feu', type: PokemonElementType.fire, power: 60, description: 'Le lanceur s’entoure de feu et charge l’ennemi. Peut aussi brûler l’ennemi.' },
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Lance-Flammes', type: PokemonElementType.fire, power: 90, description: 'L’ennemi reçoit un torrent de flammes. Peut aussi le brûler.' },
    ],
  },
  arcanine: {
    flavorText: 'Son port altier et son attitude fière ont depuis longtemps conquis le cœur des hommes.',
    stats: { hp: 90, attack: 110, defense: 80, specialAttack: 100, specialDefense: 80, speed: 95 },
    moves: [
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Morsure', type: PokemonElementType.dark, power: 60, description: 'L’ennemi est mordu par de tranchantes canines. Peut l’apeurer.' },
    ],
  },
  poliwag: {
    flavorText: 'Sa peau est si mince qu’on voit ses organes internes. Il tient à peine sur ses nouveaux pieds.',
    stats: { hp: 40, attack: 50, defense: 40, specialAttack: 40, specialDefense: 40, speed: 90 },
    moves: [
      { name: 'Torgnoles', type: PokemonElementType.normal, power: 15, description: 'Gifle rapidement l’ennemi de 2 à 5 fois d’affilée.' },
      { name: 'Cognobidon', type: PokemonElementType.normal, power: null, description: 'Améliore l’Attaque au maximum en sacrifiant la moitié des PV max.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
    ],
  },
  poliwhirl: {
    flavorText: 'La spirale qui orne son ventre ondule doucement. Celui qui la fixe est saisi d’une étrange torpeur.',
    stats: { hp: 65, attack: 65, defense: 65, specialAttack: 50, specialDefense: 50, speed: 90 },
    moves: [
      { name: 'Torgnoles', type: PokemonElementType.normal, power: 15, description: 'Gifle rapidement l’ennemi de 2 à 5 fois d’affilée.' },
      { name: 'Cognobidon', type: PokemonElementType.normal, power: null, description: 'Améliore l’Attaque au maximum en sacrifiant la moitié des PV max.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
    ],
  },
  poliwrath: {
    flavorText: 'Il possède de sacrés biscoteaux. Il peut parcourir sans relâche l’Océan Pacifique.',
    stats: { hp: 90, attack: 95, defense: 95, specialAttack: 70, specialDefense: 90, speed: 70 },
    moves: [
      { name: 'Lire-Esprit', type: PokemonElementType.normal, power: null, description: 'Le lanceur analyse les mouvements de l’ennemi pour être sûr de toucher au coup suivant.' },
      { name: 'Torgnoles', type: PokemonElementType.normal, power: 15, description: 'Gifle rapidement l’ennemi de 2 à 5 fois d’affilée.' },
      { name: 'Sacrifice', type: PokemonElementType.fighting, power: 80, description: 'Le lanceur agrippe l’ennemi et l’écrase au sol. Blesse aussi légèrement le lanceur.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
    ],
  },
  abra: {
    flavorText: 'L’utilisation de ses pouvoirs mentaux le fatigue tellement qu’il dort 18 heures par jour.',
    stats: { hp: 25, attack: 20, defense: 15, specialAttack: 105, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'Téléport', type: PokemonElementType.psychic, power: null, description: 'Permet de fuir un Pokémon sauvage. Permet aussi de revenir au dernier Centre Pokémon visité.' },
    ],
  },
  kadabra: {
    flavorText: 'Il fixe sa cuillère d’argent afin de concentrer son esprit et d’émettre un maximum d’ondes alpha.',
    stats: { hp: 40, attack: 35, defense: 30, specialAttack: 120, specialDefense: 70, speed: 105 },
    moves: [
      { name: 'Télékinésie', type: PokemonElementType.psychic, power: null, description: 'Le lanceur distrait l’ennemi en pliant une cuillère. Peut baisser la Précision de l’ennemi.' },
      { name: 'Téléport', type: PokemonElementType.psychic, power: null, description: 'Permet de fuir un Pokémon sauvage. Permet aussi de revenir au dernier Centre Pokémon visité.' },
      { name: 'Soin', type: PokemonElementType.normal, power: null, description: 'Un soin qui permet au lanceur de récupérer jusqu’à la moitié de ses PV max.' },
      { name: 'Entrave', type: PokemonElementType.normal, power: null, description: 'Empêche l’ennemi d’employer à nouveau sa dernière attaque. Dure quatre tours.' },
    ],
  },
  alakazam: {
    flavorText: 'On dit que les cuillères qu’il tient en permanence ont été créées par la puissance de son esprit.',
    stats: { hp: 55, attack: 50, defense: 45, specialAttack: 135, specialDefense: 95, speed: 120 },
    moves: [
      { name: 'Télékinésie', type: PokemonElementType.psychic, power: null, description: 'Le lanceur distrait l’ennemi en pliant une cuillère. Peut baisser la Précision de l’ennemi.' },
      { name: 'Téléport', type: PokemonElementType.psychic, power: null, description: 'Permet de fuir un Pokémon sauvage. Permet aussi de revenir au dernier Centre Pokémon visité.' },
      { name: 'Soin', type: PokemonElementType.normal, power: null, description: 'Un soin qui permet au lanceur de récupérer jusqu’à la moitié de ses PV max.' },
      { name: 'Entrave', type: PokemonElementType.normal, power: null, description: 'Empêche l’ennemi d’employer à nouveau sa dernière attaque. Dure quatre tours.' },
    ],
  },
  machop: {
    flavorText: 'Malgré sa petite taille, sa force lui permet de soulever plusieurs Racaillou à la fois.',
    stats: { hp: 70, attack: 80, defense: 50, specialAttack: 35, specialDefense: 35, speed: 35 },
    moves: [
      { name: 'Poing Karaté', type: PokemonElementType.fighting, power: 50, description: 'L’ennemi est tranché violemment. Taux de critiques élevé.' },
      { name: 'Corps Perdu', type: PokemonElementType.fighting, power: 70, description: 'Le lanceur porte son coup en dernier. En échange, cette capacité n’échoue jamais.' },
      { name: 'Coup Croix', type: PokemonElementType.fighting, power: 100, description: 'Le lanceur délivre un coup double en croisant les avant-bras. Taux de critiques élevé.' },
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
    ],
  },
  machoke: {
    flavorText: 'Il soulève les plus lourdes charges avec plaisir et facilité. Il donne un coup de main tout en s’entraînant!',
    stats: { hp: 80, attack: 100, defense: 70, specialAttack: 50, specialDefense: 60, speed: 45 },
    moves: [
      { name: 'Poing Karaté', type: PokemonElementType.fighting, power: 50, description: 'L’ennemi est tranché violemment. Taux de critiques élevé.' },
      { name: 'Corps Perdu', type: PokemonElementType.fighting, power: 70, description: 'Le lanceur porte son coup en dernier. En échange, cette capacité n’échoue jamais.' },
      { name: 'Coup Croix', type: PokemonElementType.fighting, power: 100, description: 'Le lanceur délivre un coup double en croisant les avant-bras. Taux de critiques élevé.' },
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
    ],
  },
  machamp: {
    flavorText: 'La puissance et la rapidité de ses quatre bras puissants font des ravages sur ses adversaires.',
    stats: { hp: 90, attack: 130, defense: 80, specialAttack: 65, specialDefense: 85, speed: 55 },
    moves: [
      { name: 'Poing Karaté', type: PokemonElementType.fighting, power: 50, description: 'L’ennemi est tranché violemment. Taux de critiques élevé.' },
      { name: 'Corps Perdu', type: PokemonElementType.fighting, power: 70, description: 'Le lanceur porte son coup en dernier. En échange, cette capacité n’échoue jamais.' },
      { name: 'Coup Croix', type: PokemonElementType.fighting, power: 100, description: 'Le lanceur délivre un coup double en croisant les avant-bras. Taux de critiques élevé.' },
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
    ],
  },
  bellsprout: {
    flavorText: 'Il préfère les climats chauds et humides. Ses lianes peuvent capturer une proie en un clin d’œil.',
    stats: { hp: 50, attack: 75, defense: 35, specialAttack: 70, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'Fouet Lianes', type: PokemonElementType.grass, power: 45, description: 'Fouette l’ennemi avec de fines lianes pour infliger des dégâts.' },
      { name: 'Acide', type: PokemonElementType.poison, power: 40, description: 'Le lanceur attaque l’ennemi avec un jet d’acide corrosif. Peut aussi baisser la Défense Spéciale de l’ennemi.' },
      { name: 'Poudre Dodo', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand une poudre soporifique qui endort la cible.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
    ],
  },
  weepinbell: {
    flavorText: 'Un Pokémon végétal. Il capture les proies étourdies en les endormant à l’aide d’une poudre toxique.',
    stats: { hp: 65, attack: 90, defense: 50, specialAttack: 85, specialDefense: 45, speed: 55 },
    moves: [
      { name: 'Fouet Lianes', type: PokemonElementType.grass, power: 45, description: 'Fouette l’ennemi avec de fines lianes pour infliger des dégâts.' },
      { name: 'Acide', type: PokemonElementType.poison, power: 40, description: 'Le lanceur attaque l’ennemi avec un jet d’acide corrosif. Peut aussi baisser la Défense Spéciale de l’ennemi.' },
      { name: 'Poudre Dodo', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand une poudre soporifique qui endort la cible.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
    ],
  },
  victreebel: {
    flavorText: 'Sa bouche sécrète un fluide à l’odeur de miel, qui s’avère être un acide extrêmement corrosif.',
    stats: { hp: 80, attack: 105, defense: 65, specialAttack: 100, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Fouet Lianes', type: PokemonElementType.grass, power: 45, description: 'Fouette l’ennemi avec de fines lianes pour infliger des dégâts.' },
      { name: 'Poudre Dodo', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand une poudre soporifique qui endort la cible.' },
      { name: 'Relâche', type: PokemonElementType.normal, power: null, description: 'Libère dans une attaque la puissance précédemment accumulée avec Stockage.' },
      { name: 'Avale', type: PokemonElementType.normal, power: null, description: 'Le lanceur absorbe la puissance accumulée avec Stockage pour restaurer ses PV.' },
    ],
  },
  tentacool: {
    flavorText: 'Presque entièrement composé d’eau, son corps a tendance à se dessécher sur la terre ferme.',
    stats: { hp: 40, attack: 40, defense: 35, specialAttack: 50, specialDefense: 100, speed: 70 },
    moves: [
      { name: 'Constriction', type: PokemonElementType.normal, power: 10, description: 'De longs tentacules ou lianes attaquent l’ennemi. Peut aussi baisser sa Vitesse.' },
      { name: 'Bouclier', type: PokemonElementType.psychic, power: null, description: 'Le lanceur érige un mur solide qui augmente fortement sa Défense.' },
      { name: 'Acide', type: PokemonElementType.poison, power: 40, description: 'Le lanceur attaque l’ennemi avec un jet d’acide corrosif. Peut aussi baisser la Défense Spéciale de l’ennemi.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
    ],
  },
  tentacruel: {
    flavorText: 'Ses 80 tentacules lui permettent d’emprisonner ses adversaires dans un redoutable filet venimeux.',
    stats: { hp: 80, attack: 70, defense: 65, specialAttack: 80, specialDefense: 120, speed: 100 },
    moves: [
      { name: 'Constriction', type: PokemonElementType.normal, power: 10, description: 'De longs tentacules ou lianes attaquent l’ennemi. Peut aussi baisser sa Vitesse.' },
      { name: 'Bouclier', type: PokemonElementType.psychic, power: null, description: 'Le lanceur érige un mur solide qui augmente fortement sa Défense.' },
      { name: 'Acide', type: PokemonElementType.poison, power: 40, description: 'Le lanceur attaque l’ennemi avec un jet d’acide corrosif. Peut aussi baisser la Défense Spéciale de l’ennemi.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
    ],
  },
  geodude: {
    flavorText: 'Au repos, rien ne le distingue d’un vulgaire caillou. Malheur à ceux qui lui marchent dessus par mégarde!',
    stats: { hp: 40, attack: 80, defense: 100, specialAttack: 30, specialDefense: 30, speed: 20 },
    moves: [
      { name: 'Ampleur', type: PokemonElementType.ground, power: null, description: 'Un tremblement de terre d’intensité variable qui affecte tous les Pokémon alentour. L’efficacité varie.' },
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Jet-Pierres', type: PokemonElementType.rock, power: 50, description: 'Le lanceur lâche une pierre sur l’ennemi.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'Le lanceur explose et inflige des dégâts à tous les Pokémon autour de lui. Met K.O. le lanceur.' },
    ],
  },
  graveler: {
    flavorText: 'Il dévale les montagnes pour se déplacer. Une fois qu’il a pris tout son élan, dur dur de l’arrêter!',
    stats: { hp: 55, attack: 95, defense: 115, specialAttack: 45, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'Ampleur', type: PokemonElementType.ground, power: null, description: 'Un tremblement de terre d’intensité variable qui affecte tous les Pokémon alentour. L’efficacité varie.' },
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Jet-Pierres', type: PokemonElementType.rock, power: 50, description: 'Le lanceur lâche une pierre sur l’ennemi.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'Le lanceur explose et inflige des dégâts à tous les Pokémon autour de lui. Met K.O. le lanceur.' },
    ],
  },
  golem: {
    flavorText: 'Aucun explosif ne pourrait entamer sa carapace de pierre. Il mue une fois par an.',
    stats: { hp: 80, attack: 120, defense: 130, specialAttack: 55, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'Ampleur', type: PokemonElementType.ground, power: null, description: 'Un tremblement de terre d’intensité variable qui affecte tous les Pokémon alentour. L’efficacité varie.' },
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Jet-Pierres', type: PokemonElementType.rock, power: 50, description: 'Le lanceur lâche une pierre sur l’ennemi.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'Le lanceur explose et inflige des dégâts à tous les Pokémon autour de lui. Met K.O. le lanceur.' },
    ],
  },
  ponyta: {
    flavorText: 'Chancelantes à la naissance, ses pattes deviennent très vite sûres et solides à force de galoper.',
    stats: { hp: 50, attack: 85, defense: 55, specialAttack: 65, specialDefense: 65, speed: 90 },
    moves: [
      { name: 'Écrasement', type: PokemonElementType.normal, power: 65, description: 'Écrase l’ennemi avec un énorme pied. Peut aussi l’apeurer.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Danse Flammes', type: PokemonElementType.fire, power: 35, description: 'Un tourbillon de flammes emprisonne l’ennemi pendant 4 à 5 tours.' },
      { name: 'Rebond', type: PokemonElementType.flying, power: 85, description: 'Le lanceur bondit très haut et plonge sur l’ennemi au 2è tour. Peut aussi paralyser l’ennemi.' },
    ],
  },
  rapidash: {
    flavorText: 'Au grand galop, sa crinière de feu disperse au vent une myriade d’étincelles ardentes.',
    stats: { hp: 65, attack: 100, defense: 70, specialAttack: 80, specialDefense: 80, speed: 105 },
    moves: [
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
      { name: 'Écrasement', type: PokemonElementType.normal, power: 65, description: 'Écrase l’ennemi avec un énorme pied. Peut aussi l’apeurer.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Danse Flammes', type: PokemonElementType.fire, power: 35, description: 'Un tourbillon de flammes emprisonne l’ennemi pendant 4 à 5 tours.' },
    ],
  },
  slowpoke: {
    flavorText: 'Bien que lent, c’est un pêcheur adroit qui utilise sa queue. Elle est insensible aux morsures.',
    stats: { hp: 90, attack: 65, defense: 65, specialAttack: 40, specialDefense: 40, speed: 15 },
    moves: [
      { name: 'Bâillement', type: PokemonElementType.normal, power: null, description: 'Fait bâiller l’ennemi qui s’endort au tour suivant.' },
      { name: 'Entrave', type: PokemonElementType.normal, power: null, description: 'Empêche l’ennemi d’employer à nouveau sa dernière attaque. Dure quatre tours.' },
      { name: 'Choc Mental', type: PokemonElementType.psychic, power: 50, description: 'Une faible vague télékinésique frappe l’ennemi. Peut aussi le plonger dans la confusion.' },
      { name: 'Amnésie', type: PokemonElementType.psychic, power: null, description: 'Le lanceur fait le vide dans son esprit pour oublier ses soucis. Augmente fortement sa Défense Spéciale.' },
    ],
  },
  slowbro: {
    flavorText: 'Ce grand benêt connaît des éclairs de lucidité lorsque le Kokiyas de sa queue se met à mordre.',
    stats: { hp: 95, attack: 75, defense: 110, specialAttack: 100, specialDefense: 80, speed: 30 },
    moves: [
      { name: 'Repli', type: PokemonElementType.water, power: null, description: 'Le lanceur se recroqueville dans sa carapace, ce qui augmente sa Défense.' },
      { name: 'Bâillement', type: PokemonElementType.normal, power: null, description: 'Fait bâiller l’ennemi qui s’endort au tour suivant.' },
      { name: 'Entrave', type: PokemonElementType.normal, power: null, description: 'Empêche l’ennemi d’employer à nouveau sa dernière attaque. Dure quatre tours.' },
      { name: 'Choc Mental', type: PokemonElementType.psychic, power: 50, description: 'Une faible vague télékinésique frappe l’ennemi. Peut aussi le plonger dans la confusion.' },
    ],
  },
  magnemite: {
    flavorText: 'Plus la rotation de ses extrémités est rapide, plus la force du champ magnétique qu’il génère est grande.',
    stats: { hp: 25, attack: 35, defense: 70, specialAttack: 95, specialDefense: 55, speed: 45 },
    moves: [
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'Une onde de choc destructrice qui inflige toujours 20 PV de dégâts.' },
      { name: 'Verrouillage', type: PokemonElementType.normal, power: null, description: 'Verrouille l’ennemi pour ne pas le rater au tour suivant.' },
      { name: 'Étincelle', type: PokemonElementType.electric, power: 65, description: 'Lance une charge électrique sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Ultrason', type: PokemonElementType.normal, power: null, description: 'Le lanceur produit d’étranges ondes sonores qui rendent confus.' },
    ],
  },
  magneton: {
    flavorText: 'Des groupes apparaissent si des taches solaires couvrent le soleil. Ils brouillent les télévisions.',
    stats: { hp: 50, attack: 60, defense: 95, specialAttack: 120, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'Une onde de choc destructrice qui inflige toujours 20 PV de dégâts.' },
      { name: 'Verrouillage', type: PokemonElementType.normal, power: null, description: 'Verrouille l’ennemi pour ne pas le rater au tour suivant.' },
      { name: 'Triplattaque', type: PokemonElementType.normal, power: 80, description: 'Le lanceur envoie trois boules d’énergie simultanément. Peut aussi paralyser, brûler ou geler l’ennemi.' },
      { name: 'Étincelle', type: PokemonElementType.electric, power: 65, description: 'Lance une charge électrique sur l’ennemi. Peut aussi le paralyser.' },
    ],
  },
  farfetchd: {
    flavorText: 'Il ne peut pas vivre sans son légume, c’est pourquoi il le protégera au péril de sa vie.',
    stats: { hp: 52, attack: 90, defense: 55, specialAttack: 58, specialDefense: 62, speed: 60 },
    moves: [
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
      { name: 'Picpic', type: PokemonElementType.flying, power: 35, description: 'Frappe l’ennemi d’un bec pointu ou d’une corne pour infliger des dégâts.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
      { name: 'Faux-Chage', type: PokemonElementType.normal, power: 40, description: 'Le lanceur retient ses coups pour que l’ennemi garde au moins 1 PV et ne tombe pas K.O.' },
    ],
  },
  doduo: {
    flavorText: 'Ses deux cerveaux semblent communiquer leurs émotions grâce à un lien télépathique.',
    stats: { hp: 35, attack: 85, defense: 45, specialAttack: 35, specialDefense: 35, speed: 75 },
    moves: [
      { name: 'Bec Vrille', type: PokemonElementType.flying, power: 80, description: 'Une attaque utilisant le bec comme une perceuse.' },
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
      { name: 'Triplattaque', type: PokemonElementType.normal, power: 80, description: 'Le lanceur envoie trois boules d’énergie simultanément. Peut aussi paralyser, brûler ou geler l’ennemi.' },
      { name: 'Picpic', type: PokemonElementType.flying, power: 35, description: 'Frappe l’ennemi d’un bec pointu ou d’une corne pour infliger des dégâts.' },
    ],
  },
  dodrio: {
    flavorText: 'Quand Doduo connaît cette étrange évolution, l’une de ses têtes se dédouble. Il atteint les 60 km/h.',
    stats: { hp: 60, attack: 110, defense: 70, specialAttack: 60, specialDefense: 60, speed: 110 },
    moves: [
      { name: 'Bec Vrille', type: PokemonElementType.flying, power: 80, description: 'Une attaque utilisant le bec comme une perceuse.' },
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
      { name: 'Triplattaque', type: PokemonElementType.normal, power: 80, description: 'Le lanceur envoie trois boules d’énergie simultanément. Peut aussi paralyser, brûler ou geler l’ennemi.' },
      { name: 'Picpic', type: PokemonElementType.flying, power: 35, description: 'Frappe l’ennemi d’un bec pointu ou d’une corne pour infliger des dégâts.' },
    ],
  },
  seel: {
    flavorText: 'Un habitant des icebergs. En mer, il utilise la corne sur sa tête pour briser la banquise.',
    stats: { hp: 65, attack: 45, defense: 55, specialAttack: 45, specialDefense: 70, speed: 45 },
    moves: [
      { name: 'Onde Boréale', type: PokemonElementType.ice, power: 65, description: 'Envoie un rayon arc-en-ciel sur l’ennemi. Peut aussi baisser son Attaque.' },
      { name: 'Rugissement', type: PokemonElementType.normal, power: null, description: 'Le lanceur pousse un cri tout mimi pour tromper la vigilance de l’ennemi et baisser son Attaque.' },
      { name: 'Laser Glace', type: PokemonElementType.ice, power: 90, description: 'Un rayon de glace frappe l’ennemi. Peut aussi le geler.' },
      { name: 'Rune Protect', type: PokemonElementType.normal, power: null, description: 'Champ protecteur empêchant tous les problèmes de statut pendant 5 tours.' },
    ],
  },
  dewgong: {
    flavorText: 'Son corps est couvert d’un grand manteau blanc qui, dans la neige, le dissimule aux yeux des prédateurs.',
    stats: { hp: 90, attack: 70, defense: 80, specialAttack: 70, specialDefense: 95, speed: 70 },
    moves: [
      { name: 'Glaciation', type: PokemonElementType.ice, power: null, description: 'Une vague de froid glacial frappe l’ennemi. S’il est touché, il est mis K.O. sur le coup.' },
      { name: 'Onde Boréale', type: PokemonElementType.ice, power: 65, description: 'Envoie un rayon arc-en-ciel sur l’ennemi. Peut aussi baisser son Attaque.' },
      { name: 'Rugissement', type: PokemonElementType.normal, power: null, description: 'Le lanceur pousse un cri tout mimi pour tromper la vigilance de l’ennemi et baisser son Attaque.' },
      { name: 'Rayon Signal', type: PokemonElementType.bug, power: 75, description: 'Le lanceur projette un rayon de lumière sinistre. Peut aussi rendre l’ennemi confus.' },
    ],
  },
  grimer: {
    flavorText: 'Il est né d’un torrent de boue exposé aux rayons X de la lune. Il vit dans les ordures.',
    stats: { hp: 80, attack: 80, defense: 50, specialAttack: 40, specialDefense: 50, speed: 25 },
    moves: [
      { name: 'Détritus', type: PokemonElementType.poison, power: 65, description: 'Des détritus toxiques sont projetés sur l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Lilliput', type: PokemonElementType.normal, power: null, description: 'Le lanceur comprime son corps pour se faire tout petit et augmenter fortement son Esquive.' },
      { name: 'Gaz Toxik', type: PokemonElementType.poison, power: null, description: 'Un nuage de gaz toxique est projeté au visage de l’ennemi. Peut l’empoisonner.' },
      { name: 'Acidarmure', type: PokemonElementType.poison, power: null, description: 'Le lanceur modifie sa structure moléculaire pour se liquéfier et augmenter fortement sa Défense.' },
    ],
  },
  muk: {
    flavorText: 'Son corps exsude un fluide toxique qui tue instantanément les plantes et les arbres au contact.',
    stats: { hp: 105, attack: 105, defense: 75, specialAttack: 65, specialDefense: 100, speed: 50 },
    moves: [
      { name: 'Détritus', type: PokemonElementType.poison, power: 65, description: 'Des détritus toxiques sont projetés sur l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Lilliput', type: PokemonElementType.normal, power: null, description: 'Le lanceur comprime son corps pour se faire tout petit et augmenter fortement son Esquive.' },
      { name: 'Gaz Toxik', type: PokemonElementType.poison, power: null, description: 'Un nuage de gaz toxique est projeté au visage de l’ennemi. Peut l’empoisonner.' },
      { name: 'Acidarmure', type: PokemonElementType.poison, power: null, description: 'Le lanceur modifie sa structure moléculaire pour se liquéfier et augmenter fortement sa Défense.' },
    ],
  },
  shellder: {
    flavorText: 'Il nage à reculons en ouvrant et en refermant ses deux coquilles. Il laisse traîner sa large langue.',
    stats: { hp: 30, attack: 65, defense: 100, specialAttack: 45, specialDefense: 25, speed: 40 },
    moves: [
      { name: 'Claquoir', type: PokemonElementType.water, power: 35, description: 'Le lanceur piège l’ennemi dans sa dure coquille et l’écrase pendant 4 à 5 tours.' },
      { name: 'Onde Boréale', type: PokemonElementType.ice, power: 65, description: 'Envoie un rayon arc-en-ciel sur l’ennemi. Peut aussi baisser son Attaque.' },
      { name: 'Repli', type: PokemonElementType.water, power: null, description: 'Le lanceur se recroqueville dans sa carapace, ce qui augmente sa Défense.' },
      { name: 'Stalactite', type: PokemonElementType.ice, power: 25, description: 'Le lanceur jette des pics de glace sur l’ennemi, de 2 à 5 fois de suite.' },
    ],
  },
  cloyster: {
    flavorText: 'Il se défend en fermant sa coquille et projette des piquants qui repoussent ses agresseurs.',
    stats: { hp: 50, attack: 95, defense: 180, specialAttack: 85, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'Picanon', type: PokemonElementType.normal, power: 20, description: 'Envoie une rafale de dards. Peut toucher de 2 à 5 fois.' },
      { name: 'Onde Boréale', type: PokemonElementType.ice, power: 65, description: 'Envoie un rayon arc-en-ciel sur l’ennemi. Peut aussi baisser son Attaque.' },
      { name: 'Repli', type: PokemonElementType.water, power: null, description: 'Le lanceur se recroqueville dans sa carapace, ce qui augmente sa Défense.' },
      { name: 'Ultrason', type: PokemonElementType.normal, power: null, description: 'Le lanceur produit d’étranges ondes sonores qui rendent confus.' },
    ],
  },
  gastly: {
    flavorText: 'Son corps composé de gaz toxique pourrait asphyxier n’importe qui en quelques secondes.',
    stats: { hp: 30, attack: 35, defense: 30, specialAttack: 100, specialDefense: 35, speed: 80 },
    moves: [
      { name: 'Léchouille', type: PokemonElementType.ghost, power: 30, description: 'Un grand coup de langue qui inflige des dégâts à l’ennemi. Peut aussi le paralyser.' },
      { name: 'Regard Noir', type: PokemonElementType.normal, power: null, description: 'Le lanceur pétrifie l’ennemi en lui lançant un regard noir. Il devient incapable de s’enfuir.' },
      { name: 'Cauchemar', type: PokemonElementType.ghost, power: null, description: 'Un cauchemar qui inflige des dégâts à chaque tour à un ennemi endormi.' },
      { name: 'Lien du Destin', type: PokemonElementType.ghost, power: null, description: 'Quand cette capacité est activée, elle met K.O. un ennemi qui porte un coup fatal au lanceur.' },
    ],
  },
  haunter: {
    flavorText: 'Il adore se tapir dans l’ombre et faire frissonner ses proies en leur touchant l’épaule.',
    stats: { hp: 45, attack: 50, defense: 45, specialAttack: 115, specialDefense: 55, speed: 95 },
    moves: [
      { name: 'Poing Ombre', type: PokemonElementType.ghost, power: 60, description: 'Le lanceur surgit des ombres et donne un coup de poing. N’échoue jamais.' },
      { name: 'Léchouille', type: PokemonElementType.ghost, power: 30, description: 'Un grand coup de langue qui inflige des dégâts à l’ennemi. Peut aussi le paralyser.' },
      { name: 'Regard Noir', type: PokemonElementType.normal, power: null, description: 'Le lanceur pétrifie l’ennemi en lui lançant un regard noir. Il devient incapable de s’enfuir.' },
      { name: 'Cauchemar', type: PokemonElementType.ghost, power: null, description: 'Un cauchemar qui inflige des dégâts à chaque tour à un ennemi endormi.' },
    ],
  },
  gengar: {
    flavorText: 'Si vous croisez un regard inquiétant qui perce la nuit, c’est sûrement un Ectoplasma.',
    stats: { hp: 60, attack: 65, defense: 60, specialAttack: 130, specialDefense: 75, speed: 110 },
    moves: [
      { name: 'Poing Ombre', type: PokemonElementType.ghost, power: 60, description: 'Le lanceur surgit des ombres et donne un coup de poing. N’échoue jamais.' },
      { name: 'Léchouille', type: PokemonElementType.ghost, power: 30, description: 'Un grand coup de langue qui inflige des dégâts à l’ennemi. Peut aussi le paralyser.' },
      { name: 'Regard Noir', type: PokemonElementType.normal, power: null, description: 'Le lanceur pétrifie l’ennemi en lui lançant un regard noir. Il devient incapable de s’enfuir.' },
      { name: 'Cauchemar', type: PokemonElementType.ghost, power: null, description: 'Un cauchemar qui inflige des dégâts à chaque tour à un ennemi endormi.' },
    ],
  },
  onix: {
    flavorText: 'Il se nourrit des pierres qu’il rencontre en creusant le sol. Il peut creuser à 80 km/h!',
    stats: { hp: 35, attack: 45, defense: 160, specialAttack: 30, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'Jet-Pierres', type: PokemonElementType.rock, power: 50, description: 'Le lanceur lâche une pierre sur l’ennemi.' },
      { name: 'Étreinte', type: PokemonElementType.normal, power: 15, description: 'Ligote l’ennemi avec les tentacules ou le corps pour l’écraser durant 4 à 5 tours.' },
      { name: 'Draco-Souffle', type: PokemonElementType.dragon, power: 60, description: 'Le lanceur souffle fort sur l’ennemi pour infliger des dégâts. Peut aussi le paralyser.' },
      { name: 'Tourbi-Sable', type: PokemonElementType.ground, power: 35, description: 'Le lanceur emprisonne l’ennemi dans une tempête de sable terrifiante qui dure de 4 à 5 tours.' },
    ],
  },
  drowzee: {
    flavorText: 'Son grand nez lui permet de lire les rêves d’autrui. Il adore les songes amusants.',
    stats: { hp: 60, attack: 48, defense: 45, specialAttack: 43, specialDefense: 90, speed: 42 },
    moves: [
      { name: 'Yoga', type: PokemonElementType.psychic, power: null, description: 'Le lanceur médite pour éveiller son pouvoir latent et augmenter son Attaque.' },
      { name: 'Gaz Toxik', type: PokemonElementType.poison, power: null, description: 'Un nuage de gaz toxique est projeté au visage de l’ennemi. Peut l’empoisonner.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
      { name: 'Écras’Face', type: PokemonElementType.normal, power: 40, description: 'Écrase l’ennemi avec les pattes avant, la queue, etc.' },
    ],
  },
  hypno: {
    flavorText: 'La vue de son pendule oscillant endort en trois secondes, même quand on vient de se réveiller.',
    stats: { hp: 85, attack: 73, defense: 70, specialAttack: 73, specialDefense: 115, speed: 67 },
    moves: [
      { name: 'Yoga', type: PokemonElementType.psychic, power: null, description: 'Le lanceur médite pour éveiller son pouvoir latent et augmenter son Attaque.' },
      { name: 'Gaz Toxik', type: PokemonElementType.poison, power: null, description: 'Un nuage de gaz toxique est projeté au visage de l’ennemi. Peut l’empoisonner.' },
      { name: 'Cauchemar', type: PokemonElementType.ghost, power: null, description: 'Un cauchemar qui inflige des dégâts à chaque tour à un ennemi endormi.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
    ],
  },
  krabby: {
    flavorText: 'Il creuse son terrier sur des plages sablonneuses. Ses pinces repoussent si on les brise.',
    stats: { hp: 30, attack: 105, defense: 90, specialAttack: 25, specialDefense: 25, speed: 50 },
    moves: [
      { name: 'Pince-Masse', type: PokemonElementType.water, power: 100, description: 'Une grande pince martèle l’ennemi. Taux de critiques élevé.' },
      { name: 'Guillotine', type: PokemonElementType.normal, power: null, description: 'De méchantes pinces lacèrent l’ennemi, le mettant K.O. sur le coup s’il est touché.' },
      { name: 'Force Poigne', type: PokemonElementType.normal, power: 55, description: 'L’ennemi est attrapé et compressé par les côtés.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
    ],
  },
  kingler: {
    flavorText: 'Sa grande pince possède une puissance de 10 000 chevaux. Son poids la rend difficile à manier.',
    stats: { hp: 55, attack: 130, defense: 115, specialAttack: 50, specialDefense: 50, speed: 75 },
    moves: [
      { name: 'Pince-Masse', type: PokemonElementType.water, power: 100, description: 'Une grande pince martèle l’ennemi. Taux de critiques élevé.' },
      { name: 'Guillotine', type: PokemonElementType.normal, power: null, description: 'De méchantes pinces lacèrent l’ennemi, le mettant K.O. sur le coup s’il est touché.' },
      { name: 'Force Poigne', type: PokemonElementType.normal, power: 55, description: 'L’ennemi est attrapé et compressé par les côtés.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
    ],
  },
  voltorb: {
    flavorText: 'Il ressemble à une Poké Ball. Ce Pokémon dangereux peut exploser ou s’électrifier au toucher.',
    stats: { hp: 40, attack: 30, defense: 50, specialAttack: 55, specialDefense: 55, speed: 100 },
    moves: [
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'Une onde de choc destructrice qui inflige toujours 20 PV de dégâts.' },
      { name: 'Voile Miroir', type: PokemonElementType.psychic, power: null, description: 'Une riposte qui contre n’importe quelle attaque spéciale en infligeant le double des dégâts subis.' },
      { name: 'Étincelle', type: PokemonElementType.electric, power: 65, description: 'Lance une charge électrique sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
    ],
  },
  electrode: {
    flavorText: 'Il se laisse porter par les vents lorsque son corps est gonflé d’électricité à en éclater.',
    stats: { hp: 60, attack: 50, defense: 70, specialAttack: 80, specialDefense: 80, speed: 150 },
    moves: [
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'Une onde de choc destructrice qui inflige toujours 20 PV de dégâts.' },
      { name: 'Voile Miroir', type: PokemonElementType.psychic, power: null, description: 'Une riposte qui contre n’importe quelle attaque spéciale en infligeant le double des dégâts subis.' },
      { name: 'Étincelle', type: PokemonElementType.electric, power: 65, description: 'Lance une charge électrique sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
    ],
  },
  exeggcute: {
    flavorText: 'Ces six œufs communiquent par télépathie. Ils peuvent se réunir rapidement si on les sépare.',
    stats: { hp: 60, attack: 40, defense: 80, specialAttack: 60, specialDefense: 45, speed: 40 },
    moves: [
      { name: 'Pilonnage', type: PokemonElementType.normal, power: 15, description: 'Projette de 2 à 5 grosses boules sur l’ennemi.' },
      { name: 'Poudre Dodo', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand une poudre soporifique qui endort la cible.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
      { name: 'Para-Spore', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand sur l’ennemi une poudre qui le paralyse.' },
    ],
  },
  exeggutor: {
    flavorText: 'On l’appelle “jungle sur pattes”. Si une tête devient trop grosse, elle tombe et produit un Noeunoeuf.',
    stats: { hp: 95, attack: 95, defense: 85, specialAttack: 125, specialDefense: 75, speed: 55 },
    moves: [
      { name: 'Pilonnage', type: PokemonElementType.normal, power: 15, description: 'Projette de 2 à 5 grosses boules sur l’ennemi.' },
      { name: 'Bombe Œuf', type: PokemonElementType.normal, power: 100, description: 'De toutes ses forces, le lanceur jette un gros œuf sur l’ennemi pour lui infliger des dégâts.' },
      { name: 'Écrasement', type: PokemonElementType.normal, power: 65, description: 'Écrase l’ennemi avec un énorme pied. Peut aussi l’apeurer.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
    ],
  },
  cubone: {
    flavorText: 'Il pleure en pensant à sa mère disparue, et ses larmes résonnent dans son crâne creux.',
    stats: { hp: 50, attack: 50, defense: 95, specialAttack: 40, specialDefense: 50, speed: 35 },
    moves: [
      { name: 'Osmerang', type: PokemonElementType.ground, power: 50, description: 'Le lanceur projette son os comme un boomerang. Cette attaque frappe à l’aller et au retour.' },
      { name: 'Massd’Os', type: PokemonElementType.ground, power: 65, description: 'Le lanceur frappe l’ennemi à grands coups d’os. Peut aussi apeurer l’ennemi.' },
      { name: 'Charge Os', type: PokemonElementType.ground, power: 25, description: 'Le lanceur frappe l’ennemi 2 à 5 fois avec un os.' },
      { name: 'Mania', type: PokemonElementType.normal, power: 120, description: 'Une attaque furieuse qui dure de 2 à 3 tours. Le lanceur devient confus.' },
    ],
  },
  marowak: {
    flavorText: 'Ce Pokémon sauvage possède des os depuis sa naissance. Il s’en sert pour combattre avec dextérité.',
    stats: { hp: 60, attack: 80, defense: 110, specialAttack: 50, specialDefense: 80, speed: 45 },
    moves: [
      { name: 'Osmerang', type: PokemonElementType.ground, power: 50, description: 'Le lanceur projette son os comme un boomerang. Cette attaque frappe à l’aller et au retour.' },
      { name: 'Massd’Os', type: PokemonElementType.ground, power: 65, description: 'Le lanceur frappe l’ennemi à grands coups d’os. Peut aussi apeurer l’ennemi.' },
      { name: 'Charge Os', type: PokemonElementType.ground, power: 25, description: 'Le lanceur frappe l’ennemi 2 à 5 fois avec un os.' },
      { name: 'Mania', type: PokemonElementType.normal, power: 120, description: 'Une attaque furieuse qui dure de 2 à 3 tours. Le lanceur devient confus.' },
    ],
  },
  hitmonlee: {
    flavorText: 'Ses pattes élastiques s’allongent, ce qui ne manque jamais de surprendre au premier combat.',
    stats: { hp: 50, attack: 120, defense: 53, specialAttack: 35, specialDefense: 110, speed: 87 },
    moves: [
      { name: 'Mawashi Geri', type: PokemonElementType.fighting, power: 60, description: 'Le lanceur effectue un coup de pied tournoyant et extrêmement rapide. Peut apeurer l’ennemi.' },
      { name: 'Pied Sauté', type: PokemonElementType.fighting, power: 100, description: 'Le lanceur s’envole pour décocher un coup de pied sauté. S’il échoue, le lanceur se blesse.' },
      { name: 'Yoga', type: PokemonElementType.psychic, power: null, description: 'Le lanceur médite pour éveiller son pouvoir latent et augmenter son Attaque.' },
      { name: 'Lire-Esprit', type: PokemonElementType.normal, power: null, description: 'Le lanceur analyse les mouvements de l’ennemi pour être sûr de toucher au coup suivant.' },
    ],
  },
  hitmonchan: {
    flavorText: 'Même le béton cède sous ses poings dévastateurs. Au combat, il s’essouffle au bout de 3 minutes.',
    stats: { hp: 50, attack: 105, defense: 79, specialAttack: 35, specialDefense: 110, speed: 76 },
    moves: [
      { name: 'Poing Comète', type: PokemonElementType.normal, power: 18, description: 'Une tornade de coups de poing qui frappe de 2 à 5 fois d’affilée.' },
      { name: 'Stratopercut', type: PokemonElementType.fighting, power: 85, description: 'Le lanceur attaque avec un uppercut. Il envoie son poing vers le ciel de toutes ses forces.' },
      { name: 'Mach Punch', type: PokemonElementType.fighting, power: 40, description: 'Coup de poing fulgurant. Frappe en premier.' },
      { name: 'Poursuite', type: PokemonElementType.dark, power: 40, description: 'Une attaque qui inflige deux fois plus de dégâts à un ennemi qui quitte le combat.' },
    ],
  },
  lickitung: {
    flavorText: 'Quand il déploie sa langue de près de deux mètres, sa queue s’agite. Elles seraient reliées entre elles.',
    stats: { hp: 90, attack: 55, defense: 75, specialAttack: 60, specialDefense: 75, speed: 30 },
    moves: [
      { name: 'Ligotage', type: PokemonElementType.normal, power: 15, description: 'Le lanceur ligote l’ennemi avec des lianes ou son corps pour l’écraser durant 4 à 5 tours.' },
      { name: 'Léchouille', type: PokemonElementType.ghost, power: 30, description: 'Un grand coup de langue qui inflige des dégâts à l’ennemi. Peut aussi le paralyser.' },
      { name: 'Régénération', type: PokemonElementType.normal, power: null, description: 'Le lanceur se repose pour guérir d’un empoisonnement, d’une brûlure ou d’une paralysie.' },
      { name: 'Écrasement', type: PokemonElementType.normal, power: 65, description: 'Écrase l’ennemi avec un énorme pied. Peut aussi l’apeurer.' },
    ],
  },
  koffing: {
    flavorText: 'Il flotte en retenant des gaz plus légers que l’air. Ceux-ci sont explosifs, en plus d’être fétides.',
    stats: { hp: 40, attack: 65, defense: 95, specialAttack: 60, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'Détritus', type: PokemonElementType.poison, power: 65, description: 'Des détritus toxiques sont projetés sur l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Gaz Toxik', type: PokemonElementType.poison, power: null, description: 'Un nuage de gaz toxique est projeté au visage de l’ennemi. Peut l’empoisonner.' },
      { name: 'Purédpois', type: PokemonElementType.poison, power: 30, description: 'Le lanceur attaque à l’aide d’une éruption de gaz répugnants. Peut aussi empoisonner l’ennemi.' },
      { name: 'Brouillard', type: PokemonElementType.normal, power: null, description: 'Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi.' },
    ],
  },
  weezing: {
    flavorText: 'Il grandit en absorbant les gaz des détritus. Des triplés existent, bien qu’ils soient fort rares.',
    stats: { hp: 65, attack: 90, defense: 120, specialAttack: 85, specialDefense: 70, speed: 60 },
    moves: [
      { name: 'Détritus', type: PokemonElementType.poison, power: 65, description: 'Des détritus toxiques sont projetés sur l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Gaz Toxik', type: PokemonElementType.poison, power: null, description: 'Un nuage de gaz toxique est projeté au visage de l’ennemi. Peut l’empoisonner.' },
      { name: 'Purédpois', type: PokemonElementType.poison, power: 30, description: 'Le lanceur attaque à l’aide d’une éruption de gaz répugnants. Peut aussi empoisonner l’ennemi.' },
      { name: 'Brouillard', type: PokemonElementType.normal, power: null, description: 'Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi.' },
    ],
  },
  rhyhorn: {
    flavorText: 'Ses puissantes charges pourraient démolir n’importe quel bâtiment. Dommage qu’il soit stupide.',
    stats: { hp: 80, attack: 85, defense: 95, specialAttack: 30, specialDefense: 30, speed: 25 },
    moves: [
      { name: 'Koud’Korne', type: PokemonElementType.normal, power: 65, description: 'Frappe l’ennemi d’un coup de corne pointue pour infliger des dégâts.' },
      { name: 'Empal’Korne', type: PokemonElementType.normal, power: null, description: 'Un coup de corne en vrille qui empale l’ennemi, le mettant K.O. sur le coup s’il est touché.' },
      { name: 'Mégacorne', type: PokemonElementType.bug, power: 120, description: 'Le lanceur utilise ses gigantesques cornes pour charger l’ennemi.' },
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
    ],
  },
  rhydon: {
    flavorText: 'La station debout a libéré ses pattes avant et l’a rendu plus intelligent, mais il est distrait.',
    stats: { hp: 105, attack: 130, defense: 120, specialAttack: 45, specialDefense: 45, speed: 40 },
    moves: [
      { name: 'Koud’Korne', type: PokemonElementType.normal, power: 65, description: 'Frappe l’ennemi d’un coup de corne pointue pour infliger des dégâts.' },
      { name: 'Empal’Korne', type: PokemonElementType.normal, power: null, description: 'Un coup de corne en vrille qui empale l’ennemi, le mettant K.O. sur le coup s’il est touché.' },
      { name: 'Mégacorne', type: PokemonElementType.bug, power: 120, description: 'Le lanceur utilise ses gigantesques cornes pour charger l’ennemi.' },
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
    ],
  },
  chansey: {
    flavorText: 'Ce Pokémon très serviable distribue ses œufs hautement nutritifs aux humains et Pokémon blessés.',
    stats: { hp: 250, attack: 5, defense: 5, specialAttack: 35, specialDefense: 105, speed: 50 },
    moves: [
      { name: 'Bombe Œuf', type: PokemonElementType.normal, power: 100, description: 'De toutes ses forces, le lanceur jette un gros œuf sur l’ennemi pour lui infliger des dégâts.' },
      { name: 'E-Coque', type: PokemonElementType.normal, power: null, description: 'Le lanceur récupère jusqu’à la moitié de ses PV max. En dehors des combats, permet de transférer des PV du lanceur à un allié.' },
      { name: 'Lilliput', type: PokemonElementType.normal, power: null, description: 'Le lanceur comprime son corps pour se faire tout petit et augmenter fortement son Esquive.' },
      { name: 'Berceuse', type: PokemonElementType.normal, power: null, description: 'Une berceuse plonge l’ennemi dans un profond sommeil.' },
    ],
  },
  tangela: {
    flavorText: 'Il se cache derrière des lianes bleues recouvertes d’un fin duvet. Il est chatouilleux.',
    stats: { hp: 65, attack: 55, defense: 115, specialAttack: 100, specialDefense: 40, speed: 60 },
    moves: [
      { name: 'Constriction', type: PokemonElementType.normal, power: 10, description: 'De longs tentacules ou lianes attaquent l’ennemi. Peut aussi baisser sa Vitesse.' },
      { name: 'Fouet Lianes', type: PokemonElementType.grass, power: 45, description: 'Fouette l’ennemi avec de fines lianes pour infliger des dégâts.' },
      { name: 'Poudre Dodo', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand une poudre soporifique qui endort la cible.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
    ],
  },
  kangaskhan: {
    flavorText: 'Il élève ses petits dans sa poche ventrale. Il attend d’être en lieu sûr pour les laisser jouer dehors.',
    stats: { hp: 105, attack: 95, defense: 80, specialAttack: 40, specialDefense: 80, speed: 90 },
    moves: [
      { name: 'Poing Comète', type: PokemonElementType.normal, power: 18, description: 'Une tornade de coups de poing qui frappe de 2 à 5 fois d’affilée.' },
      { name: 'Uppercut', type: PokemonElementType.normal, power: 70, description: 'Un enchaînement de coups de poing cadencés. Peut aussi rendre confus.' },
      { name: 'Bluff', type: PokemonElementType.normal, power: 40, description: 'Permet de frapper en premier et apeure l’ennemi. Ne fonctionne qu’au premier tour.' },
      { name: 'Mimi-Queue', type: PokemonElementType.normal, power: null, description: 'Le lanceur remue son adorable queue pour tromper la vigilance de l’ennemi et baisser sa Défense.' },
    ],
  },
  horsea: {
    flavorText: 'Il niche à l’ombre du corail. Quand il se sent menacé, il disparaît dans un nuage d’encre opaque.',
    stats: { hp: 30, attack: 40, defense: 70, specialAttack: 70, specialDefense: 25, speed: 60 },
    moves: [
      { name: 'Brouillard', type: PokemonElementType.normal, power: null, description: 'Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
      { name: 'Danse Draco', type: PokemonElementType.dragon, power: null, description: 'Une danse mystique dont le rythme effréné augmente l’Attaque et la Vitesse du lanceur.' },
      { name: 'Ouragan', type: PokemonElementType.dragon, power: 40, description: 'Déclenche un terrible ouragan sur l’ennemi. Peut aussi l’apeurer.' },
    ],
  },
  seadra: {
    flavorText: 'Son épine dorsale le protège. Ses os et ses nageoires sont très prisés en médecine traditionnelle.',
    stats: { hp: 55, attack: 65, defense: 95, specialAttack: 95, specialDefense: 45, speed: 85 },
    moves: [
      { name: 'Brouillard', type: PokemonElementType.normal, power: null, description: 'Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
      { name: 'Danse Draco', type: PokemonElementType.dragon, power: null, description: 'Une danse mystique dont le rythme effréné augmente l’Attaque et la Vitesse du lanceur.' },
      { name: 'Ouragan', type: PokemonElementType.dragon, power: 40, description: 'Déclenche un terrible ouragan sur l’ennemi. Peut aussi l’apeurer.' },
    ],
  },
  goldeen: {
    flavorText: 'Malgré son élégance quand il nage, ses coups de corne sont redoutables.',
    stats: { hp: 45, attack: 67, defense: 60, specialAttack: 35, specialDefense: 50, speed: 63 },
    moves: [
      { name: 'Koud’Korne', type: PokemonElementType.normal, power: 65, description: 'Frappe l’ennemi d’un coup de corne pointue pour infliger des dégâts.' },
      { name: 'Empal’Korne', type: PokemonElementType.normal, power: null, description: 'Un coup de corne en vrille qui empale l’ennemi, le mettant K.O. sur le coup s’il est touché.' },
      { name: 'Mégacorne', type: PokemonElementType.bug, power: 120, description: 'Le lanceur utilise ses gigantesques cornes pour charger l’ennemi.' },
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
    ],
  },
  seaking: {
    flavorText: 'En automne, à la saison des amours, il fait des réserves de graisse et arbore des couleurs chatoyantes.',
    stats: { hp: 80, attack: 92, defense: 65, specialAttack: 65, specialDefense: 80, speed: 68 },
    moves: [
      { name: 'Koud’Korne', type: PokemonElementType.normal, power: 65, description: 'Frappe l’ennemi d’un coup de corne pointue pour infliger des dégâts.' },
      { name: 'Empal’Korne', type: PokemonElementType.normal, power: null, description: 'Un coup de corne en vrille qui empale l’ennemi, le mettant K.O. sur le coup s’il est touché.' },
      { name: 'Mégacorne', type: PokemonElementType.bug, power: 120, description: 'Le lanceur utilise ses gigantesques cornes pour charger l’ennemi.' },
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
    ],
  },
  staryu: {
    flavorText: 'Même amoché, son corps se régénère tant que le noyau rouge est intact. Le noyau s’illumine à minuit.',
    stats: { hp: 30, attack: 45, defense: 55, specialAttack: 70, specialDefense: 55, speed: 85 },
    moves: [
      { name: 'Camouflage', type: PokemonElementType.normal, power: null, description: 'Modifie le type du lanceur en fonction du terrain, comme une berge, une grotte, l’herbe, etc.' },
      { name: 'Lilliput', type: PokemonElementType.normal, power: null, description: 'Le lanceur comprime son corps pour se faire tout petit et augmenter fortement son Esquive.' },
      { name: 'Force Cosmique', type: PokemonElementType.psychic, power: null, description: 'Le lanceur absorbe un pouvoir mystique spatial qui augmente sa Défense et sa Défense Spéciale.' },
      { name: 'Tour Rapide', type: PokemonElementType.normal, power: 50, description: 'Une attaque tournoyante pouvant aussi annuler par ex. Étreinte, Ligotage, Vampigraine ou Picots.' },
    ],
  },
  starmie: {
    flavorText: 'Un noyau rouge trône en son centre. Il envoie des signaux radio mystérieux vers le ciel nocturne.',
    stats: { hp: 60, attack: 75, defense: 85, specialAttack: 100, specialDefense: 85, speed: 115 },
    moves: [
      { name: 'Tour Rapide', type: PokemonElementType.normal, power: 50, description: 'Une attaque tournoyante pouvant aussi annuler par ex. Étreinte, Ligotage, Vampigraine ou Picots.' },
      { name: 'Soin', type: PokemonElementType.normal, power: null, description: 'Un soin qui permet au lanceur de récupérer jusqu’à la moitié de ses PV max.' },
      { name: 'Pistolet à O', type: PokemonElementType.water, power: 40, description: 'De l’eau est projetée sur l’ennemi en arc de cercle.' },
      { name: 'Onde Folie', type: PokemonElementType.ghost, power: null, description: 'Un rayon sinistre qui plonge l’ennemi dans un état de confusion.' },
    ],
  },
  scyther: {
    flavorText: 'À force de trancher des objets solides, les faux de ses bras sont très aiguisées.',
    stats: { hp: 70, attack: 110, defense: 80, specialAttack: 55, specialDefense: 80, speed: 105 },
    moves: [
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Poursuite', type: PokemonElementType.dark, power: 40, description: 'Une attaque qui inflige deux fois plus de dégâts à un ennemi qui quitte le combat.' },
      { name: 'Faux-Chage', type: PokemonElementType.normal, power: 40, description: 'Le lanceur retient ses coups pour que l’ennemi garde au moins 1 PV et ne tombe pas K.O.' },
      { name: 'Tranche', type: PokemonElementType.normal, power: 70, description: 'Un coup de griffe ou autre tranche l’ennemi. Taux de critiques élevé.' },
    ],
  },
  mrmime: {
    flavorText: 'En modifiant les molécules de l’air du bout de ses doigts, il parvient à créer un mur invisible devant lui.',
    stats: { hp: 40, attack: 45, defense: 65, specialAttack: 100, specialDefense: 120, speed: 90 },
    moves: [
      { name: 'Yoga', type: PokemonElementType.psychic, power: null, description: 'Le lanceur médite pour éveiller son pouvoir latent et augmenter son Attaque.' },
      { name: 'Bouclier', type: PokemonElementType.psychic, power: null, description: 'Le lanceur érige un mur solide qui augmente fortement sa Défense.' },
      { name: 'Torgnoles', type: PokemonElementType.normal, power: 15, description: 'Gifle rapidement l’ennemi de 2 à 5 fois d’affilée.' },
      { name: 'Choc Mental', type: PokemonElementType.psychic, power: 50, description: 'Une faible vague télékinésique frappe l’ennemi. Peut aussi le plonger dans la confusion.' },
    ],
  },
  electabuzz: {
    flavorText: 'Il fait tournoyer ses bras pour donner de la force à ses coups. Profitez-en pour filer!',
    stats: { hp: 65, attack: 83, defense: 57, specialAttack: 95, specialDefense: 85, speed: 105 },
    moves: [
      { name: 'Vive-Attaque', type: PokemonElementType.normal, power: 40, description: 'Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en premier.' },
      { name: 'Grincement', type: PokemonElementType.normal, power: null, description: 'Cri strident qui baisse beaucoup la Défense ennemie.' },
      { name: 'Poing Éclair', type: PokemonElementType.electric, power: 75, description: 'Un coup de poing électrique vient frapper l’ennemi. Peut le paralyser.' },
      { name: 'Groz’Yeux', type: PokemonElementType.normal, power: null, description: 'Le lanceur fait les gros yeux à l’ennemi pour l’intimider et baisser sa Défense.' },
    ],
  },
  jynx: {
    flavorText: 'Son cri ressemble à des paroles humaines. Mais nul n’est jamais parvenu à les comprendre.',
    stats: { hp: 65, attack: 50, defense: 35, specialAttack: 115, specialDefense: 95, speed: 95 },
    moves: [
      { name: 'Grobisou', type: PokemonElementType.normal, power: null, description: 'Le lanceur fait un bisou à l’ennemi en prenant une mine effrayante. Endort l’ennemi.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
      { name: 'Torgnoles', type: PokemonElementType.normal, power: 15, description: 'Gifle rapidement l’ennemi de 2 à 5 fois d’affilée.' },
      { name: 'Poudreuse', type: PokemonElementType.ice, power: 40, description: 'Le lanceur projette de la neige poudreuse. Peut aussi geler l’ennemi.' },
    ],
  },
  pinsir: {
    flavorText: 'Il serre les proies dans ses pinces pour les trancher en deux. S’il n’y arrive pas, il les jette au loin.',
    stats: { hp: 65, attack: 125, defense: 100, specialAttack: 55, specialDefense: 70, speed: 85 },
    moves: [
      { name: 'Guillotine', type: PokemonElementType.normal, power: null, description: 'De méchantes pinces lacèrent l’ennemi, le mettant K.O. sur le coup s’il est touché.' },
      { name: 'Force Poigne', type: PokemonElementType.normal, power: 55, description: 'L’ennemi est attrapé et compressé par les côtés.' },
      { name: 'Sacrifice', type: PokemonElementType.fighting, power: 80, description: 'Le lanceur agrippe l’ennemi et l’écrase au sol. Blesse aussi légèrement le lanceur.' },
      { name: 'Étreinte', type: PokemonElementType.normal, power: 15, description: 'Ligote l’ennemi avec les tentacules ou le corps pour l’écraser durant 4 à 5 tours.' },
    ],
  },
  magmar: {
    flavorText: 'Quand il respire profondément, des vagues de chaleur émanent de son corps et le rendent difficile à voir.',
    stats: { hp: 65, attack: 95, defense: 57, specialAttack: 100, specialDefense: 85, speed: 93 },
    moves: [
      { name: 'Purédpois', type: PokemonElementType.poison, power: 30, description: 'Le lanceur attaque à l’aide d’une éruption de gaz répugnants. Peut aussi empoisonner l’ennemi.' },
      { name: 'Brouillard', type: PokemonElementType.normal, power: null, description: 'Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Poing Feu', type: PokemonElementType.fire, power: 75, description: 'Un coup de poing enflammé vient frapper l’ennemi. Peut le brûler.' },
    ],
  },
  tauros: {
    flavorText: 'Après avoir choisi sa cible, il fonce dessus tête baissée. Il est réputé pour sa nature violente.',
    stats: { hp: 75, attack: 100, defense: 95, specialAttack: 40, specialDefense: 70, speed: 110 },
    moves: [
      { name: 'Koud’Korne', type: PokemonElementType.normal, power: 65, description: 'Frappe l’ennemi d’un coup de corne pointue pour infliger des dégâts.' },
      { name: 'Poursuite', type: PokemonElementType.dark, power: 40, description: 'Une attaque qui inflige deux fois plus de dégâts à un ennemi qui quitte le combat.' },
      { name: 'Mania', type: PokemonElementType.normal, power: 120, description: 'Une attaque furieuse qui dure de 2 à 3 tours. Le lanceur devient confus.' },
      { name: 'Mimi-Queue', type: PokemonElementType.normal, power: null, description: 'Le lanceur remue son adorable queue pour tromper la vigilance de l’ennemi et baisser sa Défense.' },
    ],
  },
  magikarp: {
    flavorText: 'Un vénérable Magicarpe peut franchir une montagne en utilisant Trempette. Mais c’est tout...',
    stats: { hp: 20, attack: 10, defense: 55, specialAttack: 15, specialDefense: 20, speed: 80 },
    moves: [
      { name: 'Trempette', type: PokemonElementType.normal, power: null, description: 'Le lanceur barbote et éclabousse les environs. Cette capacité n’a aucun effet.' },
      { name: 'Gigotage', type: PokemonElementType.normal, power: null, description: 'Le lanceur fait tournoyer son fléau. Plus ses PV sont bas, plus l’attaque est puissante.' },
      { name: 'Charge', type: PokemonElementType.normal, power: 40, description: 'Le lanceur charge l’ennemi et le percute de tout son corps.' },
    ],
  },
  gyarados: {
    flavorText: 'Quand il se laisse emporter par la rage, il ne se calme qu’après avoir détruit tout ce qui l’entoure.',
    stats: { hp: 95, attack: 125, defense: 79, specialAttack: 60, specialDefense: 100, speed: 81 },
    moves: [
      { name: 'Draco-Rage', type: PokemonElementType.dragon, power: null, description: 'La colère du lanceur déclenche une onde de choc destructrice qui inflige toujours 40 PV de dégâts.' },
      { name: 'Danse Draco', type: PokemonElementType.dragon, power: null, description: 'Une danse mystique dont le rythme effréné augmente l’Attaque et la Vitesse du lanceur.' },
      { name: 'Ouragan', type: PokemonElementType.dragon, power: 40, description: 'Déclenche un terrible ouragan sur l’ennemi. Peut aussi l’apeurer.' },
      { name: 'Mania', type: PokemonElementType.normal, power: 120, description: 'Une attaque furieuse qui dure de 2 à 3 tours. Le lanceur devient confus.' },
    ],
  },
  lapras: {
    flavorText: 'Il aime naviguer en portant des humains et des Pokémon sur son dos. Il comprend le langage humain.',
    stats: { hp: 130, attack: 85, defense: 80, specialAttack: 85, specialDefense: 95, speed: 60 },
    moves: [
      { name: 'Glaciation', type: PokemonElementType.ice, power: null, description: 'Une vague de froid glacial frappe l’ennemi. S’il est touché, il est mis K.O. sur le coup.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
      { name: 'Berceuse', type: PokemonElementType.normal, power: null, description: 'Une berceuse plonge l’ennemi dans un profond sommeil.' },
      { name: 'Brume', type: PokemonElementType.ice, power: null, description: 'Une brume blanche enveloppe l’équipe du lanceur et empêche la réduction des stats pour 5 tours.' },
    ],
  },
  eevee: {
    flavorText: 'Son ADN particulier lui permet de s’adapter très rapidement à son environnement.',
    stats: { hp: 55, attack: 55, defense: 50, specialAttack: 45, specialDefense: 65, speed: 55 },
    moves: [
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
      { name: 'Mimi-Queue', type: PokemonElementType.normal, power: null, description: 'Le lanceur remue son adorable queue pour tromper la vigilance de l’ennemi et baisser sa Défense.' },
      { name: 'Vive-Attaque', type: PokemonElementType.normal, power: 40, description: 'Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en premier.' },
      { name: 'Relais', type: PokemonElementType.normal, power: null, description: 'Le lanceur échange sa place et tout changement de stat avec un Pokémon de l’équipe.' },
    ],
  },
  ditto: {
    flavorText: 'Il a la capacité de modifier sa structure cellulaire pour prendre l’apparence de ce qu’il voit.',
    stats: { hp: 48, attack: 48, defense: 48, specialAttack: 48, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Morphing', type: PokemonElementType.normal, power: null, description: 'Le lanceur devient une copie de sa cible et obtient la même palette de capacités.' },
    ],
  },
  vaporeon: {
    flavorText: 'Sa composition moléculaire est proche de celle de l’eau, ce qui lui permet de se liquéfier.',
    stats: { hp: 130, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 65 },
    moves: [
      { name: 'Onde Boréale', type: PokemonElementType.ice, power: 65, description: 'Envoie un rayon arc-en-ciel sur l’ennemi. Peut aussi baisser son Attaque.' },
      { name: 'Acidarmure', type: PokemonElementType.poison, power: null, description: 'Le lanceur modifie sa structure moléculaire pour se liquéfier et augmenter fortement sa Défense.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
      { name: 'Buée Noire', type: PokemonElementType.ice, power: null, description: 'Un brouillard qui annule les changements de stats de tous les Pokémon au combat.' },
    ],
  },
  jolteon: {
    flavorText: 'Face au danger, il fait appel à l’électricité pour dresser ses poils et lancer des décharges.',
    stats: { hp: 65, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 130 },
    moves: [
      { name: 'Dard-Nuée', type: PokemonElementType.bug, power: 25, description: 'Envoie une rafale de dards. Peut toucher de 2 à 5 fois.' },
      { name: 'Double Pied', type: PokemonElementType.fighting, power: 30, description: 'Deux coups de pied qui frappent l’ennemi deux fois d’affilée.' },
      { name: 'Éclair', type: PokemonElementType.electric, power: 40, description: 'Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
    ],
  },
  flareon: {
    flavorText: 'L’air qu’il inspire est chauffé par la glande enflammée de son corps, atteignant les 1 700 °C.',
    stats: { hp: 65, attack: 130, defense: 60, specialAttack: 95, specialDefense: 110, speed: 65 },
    moves: [
      { name: 'Purédpois', type: PokemonElementType.poison, power: 30, description: 'Le lanceur attaque à l’aide d’une éruption de gaz répugnants. Peut aussi empoisonner l’ennemi.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Danse Flammes', type: PokemonElementType.fire, power: 35, description: 'Un tourbillon de flammes emprisonne l’ennemi pendant 4 à 5 tours.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
    ],
  },
  porygon: {
    flavorText: 'Ce Pokémon créé par des scientifiques peut arpenter librement le cyberespace.',
    stats: { hp: 65, attack: 60, defense: 70, specialAttack: 85, specialDefense: 75, speed: 40 },
    moves: [
      { name: 'Conversion', type: PokemonElementType.normal, power: null, description: 'Le lanceur change de type pour prendre celui de l’une de ses capacités.' },
      { name: 'Conversion 2', type: PokemonElementType.normal, power: null, description: 'Le lanceur change de type pour être résistant au type de la dernière attaque lancée par sa cible.' },
      { name: 'Affûtage', type: PokemonElementType.normal, power: null, description: 'Le lanceur réduit son nombre de polygones pour accentuer ses angles et augmenter son Attaque.' },
      { name: 'Verrouillage', type: PokemonElementType.normal, power: null, description: 'Verrouille l’ennemi pour ne pas le rater au tour suivant.' },
    ],
  },
  omanyte: {
    flavorText: 'Un Pokémon ramené à la vie par la science à partir d’un fossile. Il peuplait autrefois les mers.',
    stats: { hp: 35, attack: 40, defense: 100, specialAttack: 90, specialDefense: 55, speed: 35 },
    moves: [
      { name: 'Constriction', type: PokemonElementType.normal, power: 10, description: 'De longs tentacules ou lianes attaquent l’ennemi. Peut aussi baisser sa Vitesse.' },
      { name: 'Repli', type: PokemonElementType.water, power: null, description: 'Le lanceur se recroqueville dans sa carapace, ce qui augmente sa Défense.' },
      { name: 'Chatouille', type: PokemonElementType.normal, power: null, description: 'Le lanceur chatouille l’ennemi, ce qui baisse son Attaque et sa Défense.' },
      { name: 'Pistolet à O', type: PokemonElementType.water, power: 40, description: 'De l’eau est projetée sur l’ennemi en arc de cercle.' },
    ],
  },
  omastar: {
    flavorText: 'On pense que ce Pokémon a disparu parce que sa coquille en spirale était devenue trop grosse.',
    stats: { hp: 70, attack: 60, defense: 125, specialAttack: 115, specialDefense: 70, speed: 55 },
    moves: [
      { name: 'Picanon', type: PokemonElementType.normal, power: 20, description: 'Envoie une rafale de dards. Peut toucher de 2 à 5 fois.' },
      { name: 'Constriction', type: PokemonElementType.normal, power: 10, description: 'De longs tentacules ou lianes attaquent l’ennemi. Peut aussi baisser sa Vitesse.' },
      { name: 'Repli', type: PokemonElementType.water, power: null, description: 'Le lanceur se recroqueville dans sa carapace, ce qui augmente sa Défense.' },
      { name: 'Chatouille', type: PokemonElementType.normal, power: null, description: 'Le lanceur chatouille l’ennemi, ce qui baisse son Attaque et sa Défense.' },
    ],
  },
  kabuto: {
    flavorText: 'On pense qu’il peuplait les plages il y a 300 millions d’années. Il est protégé par une coquille robuste.',
    stats: { hp: 30, attack: 80, defense: 90, specialAttack: 55, specialDefense: 45, speed: 55 },
    moves: [
      { name: 'Strido-Son', type: PokemonElementType.steel, power: null, description: 'Un cri horrible tel un crissement métallique qui réduit fortement la Défense Spéciale de l’ennemi.' },
      { name: 'Vole-Vie', type: PokemonElementType.grass, power: 20, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
      { name: 'Méga-Sangsue', type: PokemonElementType.grass, power: 40, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
    ],
  },
  kabutops: {
    flavorText: 'On pense que ce Pokémon est venu sur la terre ferme pour suivre l’évolution de ses proies.',
    stats: { hp: 60, attack: 115, defense: 105, specialAttack: 65, specialDefense: 70, speed: 80 },
    moves: [
      { name: 'Strido-Son', type: PokemonElementType.steel, power: null, description: 'Un cri horrible tel un crissement métallique qui réduit fortement la Défense Spéciale de l’ennemi.' },
      { name: 'Vole-Vie', type: PokemonElementType.grass, power: 20, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
      { name: 'Méga-Sangsue', type: PokemonElementType.grass, power: 40, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
    ],
  },
  aerodactyl: {
    flavorText: 'Un Pokémon qui arpentait le ciel au temps des dinosaures. Ses crocs sont pareils à des scies.',
    stats: { hp: 80, attack: 105, defense: 65, specialAttack: 60, specialDefense: 75, speed: 130 },
    moves: [
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Ultrason', type: PokemonElementType.normal, power: null, description: 'Le lanceur produit d’étranges ondes sonores qui rendent confus.' },
      { name: 'Pouvoir Antique', type: PokemonElementType.rock, power: 60, description: 'Une attaque préhistorique qui peut augmenter toutes les stats du lanceur d’un seul coup.' },
      { name: 'Morsure', type: PokemonElementType.dark, power: 60, description: 'L’ennemi est mordu par de tranchantes canines. Peut l’apeurer.' },
    ],
  },
  articuno: {
    flavorText: 'Un Pokémon Oiseau légendaire. Il peut provoquer des blizzards en gelant l’humidité de l’air.',
    stats: { hp: 90, attack: 85, defense: 100, specialAttack: 95, specialDefense: 125, speed: 85 },
    moves: [
      { name: 'Lire-Esprit', type: PokemonElementType.normal, power: null, description: 'Le lanceur analyse les mouvements de l’ennemi pour être sûr de toucher au coup suivant.' },
      { name: 'Glaciation', type: PokemonElementType.ice, power: null, description: 'Une vague de froid glacial frappe l’ennemi. S’il est touché, il est mis K.O. sur le coup.' },
      { name: 'Poudreuse', type: PokemonElementType.ice, power: 40, description: 'Le lanceur projette de la neige poudreuse. Peut aussi geler l’ennemi.' },
      { name: 'Tornade', type: PokemonElementType.flying, power: 40, description: 'Le lanceur bat des ailes pour générer une bourrasque qui blesse l’ennemi.' },
    ],
  },
  zapdos: {
    flavorText: 'Un Pokémon Oiseau légendaire dont on dit qu’il vit dans les nuages d’orage. Il contrôle la foudre.',
    stats: { hp: 90, attack: 90, defense: 85, specialAttack: 125, specialDefense: 90, speed: 100 },
    moves: [
      { name: 'Bec Vrille', type: PokemonElementType.flying, power: 80, description: 'Une attaque utilisant le bec comme une perceuse.' },
      { name: 'Picpic', type: PokemonElementType.flying, power: 35, description: 'Frappe l’ennemi d’un bec pointu ou d’une corne pour infliger des dégâts.' },
      { name: 'Éclair', type: PokemonElementType.electric, power: 40, description: 'Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
    ],
  },
  snorlax: {
    flavorText: 'Une fois le ventre plein, il est trop amorphe pour lever le petit doigt. Sautez sur son ventre!',
    stats: { hp: 160, attack: 110, defense: 65, specialAttack: 65, specialDefense: 110, speed: 30 },
    moves: [
      { name: 'Cognobidon', type: PokemonElementType.normal, power: null, description: 'Améliore l’Attaque au maximum en sacrifiant la moitié des PV max.' },
      { name: 'Bâillement', type: PokemonElementType.normal, power: null, description: 'Fait bâiller l’ennemi qui s’endort au tour suivant.' },
      { name: 'Barrage', type: PokemonElementType.normal, power: null, description: 'Le lanceur bloque la route de l’ennemi pour empêcher sa fuite.' },
      { name: 'Amnésie', type: PokemonElementType.psychic, power: null, description: 'Le lanceur fait le vide dans son esprit pour oublier ses soucis. Augmente fortement sa Défense Spéciale.' },
    ],
  },
  moltres: {
    flavorText: 'L’un des Pokémon Oiseaux légendaires. On dit que sa venue annonce l’arrivée du printemps.',
    stats: { hp: 90, attack: 100, defense: 90, specialAttack: 125, specialDefense: 85, speed: 90 },
    moves: [
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Piqué', type: PokemonElementType.flying, power: 140, description: 'Une attaque en 2 tours au taux de critiques élevé. Peut aussi apeurer l’ennemi.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Danse Flammes', type: PokemonElementType.fire, power: 35, description: 'Un tourbillon de flammes emprisonne l’ennemi pendant 4 à 5 tours.' },
    ],
  },
  dratini: {
    flavorText: 'Il grandit en muant quasiment tous les jours. Sa peau est toute douce après la mue.',
    stats: { hp: 41, attack: 64, defense: 45, specialAttack: 50, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'Draco-Rage', type: PokemonElementType.dragon, power: null, description: 'La colère du lanceur déclenche une onde de choc destructrice qui inflige toujours 40 PV de dégâts.' },
      { name: 'Ligotage', type: PokemonElementType.normal, power: 15, description: 'Le lanceur ligote l’ennemi avec des lianes ou son corps pour l’écraser durant 4 à 5 tours.' },
      { name: 'Ouragan', type: PokemonElementType.dragon, power: 40, description: 'Déclenche un terrible ouragan sur l’ennemi. Peut aussi l’apeurer.' },
      { name: 'Souplesse', type: PokemonElementType.normal, power: 80, description: 'Fouette l’ennemi avec la queue, une liane, etc. pour infliger des dégâts.' },
    ],
  },
  dragonair: {
    flavorText: 'La météo change brusquement quand il est entouré d’une aura. On dit qu’il peuple les mers et les lacs.',
    stats: { hp: 61, attack: 84, defense: 65, specialAttack: 70, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Draco-Rage', type: PokemonElementType.dragon, power: null, description: 'La colère du lanceur déclenche une onde de choc destructrice qui inflige toujours 40 PV de dégâts.' },
      { name: 'Ligotage', type: PokemonElementType.normal, power: 15, description: 'Le lanceur ligote l’ennemi avec des lianes ou son corps pour l’écraser durant 4 à 5 tours.' },
      { name: 'Ouragan', type: PokemonElementType.dragon, power: 40, description: 'Déclenche un terrible ouragan sur l’ennemi. Peut aussi l’apeurer.' },
      { name: 'Souplesse', type: PokemonElementType.normal, power: 80, description: 'Fouette l’ennemi avec la queue, une liane, etc. pour infliger des dégâts.' },
    ],
  },
  dragonite: {
    flavorText: 'On raconte qu’il vit quelque part en mer. Il guide les équipages naufragés jusqu’à la terre ferme.',
    stats: { hp: 91, attack: 134, defense: 95, specialAttack: 100, specialDefense: 100, speed: 80 },
    moves: [
      { name: 'Draco-Rage', type: PokemonElementType.dragon, power: null, description: 'La colère du lanceur déclenche une onde de choc destructrice qui inflige toujours 40 PV de dégâts.' },
      { name: 'Ligotage', type: PokemonElementType.normal, power: 15, description: 'Le lanceur ligote l’ennemi avec des lianes ou son corps pour l’écraser durant 4 à 5 tours.' },
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Ouragan', type: PokemonElementType.dragon, power: 40, description: 'Déclenche un terrible ouragan sur l’ennemi. Peut aussi l’apeurer.' },
    ],
  },
  mewtwo: {
    flavorText: 'Un Pokémon conçu en réorganisant les gènes de Mew. On raconte qu’il s’agit du Pokémon le plus féroce.',
    stats: { hp: 106, attack: 110, defense: 90, specialAttack: 154, specialDefense: 90, speed: 130 },
    moves: [
      { name: 'Bouclier', type: PokemonElementType.psychic, power: null, description: 'Le lanceur érige un mur solide qui augmente fortement sa Défense.' },
      { name: 'Brume', type: PokemonElementType.ice, power: null, description: 'Une brume blanche enveloppe l’équipe du lanceur et empêche la réduction des stats pour 5 tours.' },
      { name: 'Soin', type: PokemonElementType.normal, power: null, description: 'Un soin qui permet au lanceur de récupérer jusqu’à la moitié de ses PV max.' },
      { name: 'Entrave', type: PokemonElementType.normal, power: null, description: 'Empêche l’ennemi d’employer à nouveau sa dernière attaque. Dure quatre tours.' },
    ],
  },
  mew: {
    flavorText: 'Nombre de scientifiques voient en lui l’ancêtre des Pokémon car il maîtrise toutes leurs capacités.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Morphing', type: PokemonElementType.normal, power: null, description: 'Le lanceur devient une copie de sa cible et obtient la même palette de capacités.' },
      { name: 'Écras’Face', type: PokemonElementType.normal, power: 40, description: 'Écrase l’ennemi avec les pattes avant, la queue, etc.' },
      { name: 'Métronome', type: PokemonElementType.normal, power: null, description: 'Agite un doigt et stimule le cerveau pour utiliser presque n’importe quelle capacité au hasard.' },
      { name: 'Pouvoir Antique', type: PokemonElementType.rock, power: 60, description: 'Une attaque préhistorique qui peut augmenter toutes les stats du lanceur d’un seul coup.' },
    ],
  },
  chikorita: {
    flavorText: 'Il jauge la température et l’humidité grâce à la feuille sur sa tête. Il raffole des bains de soleil.',
    stats: { hp: 45, attack: 49, defense: 65, specialAttack: 49, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
      { name: 'Aromathérapie', type: PokemonElementType.grass, power: null, description: 'Le lanceur libère un parfum apaisant qui guérit tous les problèmes de statut de l’équipe.' },
      { name: 'Tranch’Herbe', type: PokemonElementType.grass, power: 55, description: 'Des feuilles aiguisées comme des rasoirs entaillent l’ennemi. Taux de critiques élevé.' },
      { name: 'Doux Parfum', type: PokemonElementType.normal, power: null, description: 'Un doux parfum qui réduit l’Esquive de l’ennemi. Attire aussi les Pokémon sauvages.' },
    ],
  },
  bayleef: {
    flavorText: 'Le collier de bourgeons à son cou répand un arôme épicé qui vous donne du tonus.',
    stats: { hp: 60, attack: 62, defense: 80, specialAttack: 63, specialDefense: 80, speed: 60 },
    moves: [
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
      { name: 'Aromathérapie', type: PokemonElementType.grass, power: null, description: 'Le lanceur libère un parfum apaisant qui guérit tous les problèmes de statut de l’équipe.' },
      { name: 'Tranch’Herbe', type: PokemonElementType.grass, power: 55, description: 'Des feuilles aiguisées comme des rasoirs entaillent l’ennemi. Taux de critiques élevé.' },
      { name: 'Doux Parfum', type: PokemonElementType.normal, power: null, description: 'Un doux parfum qui réduit l’Esquive de l’ennemi. Attire aussi les Pokémon sauvages.' },
    ],
  },
  meganium: {
    flavorText: 'Son souffle a l’incroyable capacité de ranimer les plantes et les fleurs flétries.',
    stats: { hp: 80, attack: 82, defense: 100, specialAttack: 83, specialDefense: 100, speed: 80 },
    moves: [
      { name: 'Danse Fleurs', type: PokemonElementType.grass, power: 120, description: 'Le lanceur attaque en projetant des pétales pendant 2 à 3 tours avant de céder à la confusion.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
      { name: 'Aromathérapie', type: PokemonElementType.grass, power: null, description: 'Le lanceur libère un parfum apaisant qui guérit tous les problèmes de statut de l’équipe.' },
      { name: 'Tranch’Herbe', type: PokemonElementType.grass, power: 55, description: 'Des feuilles aiguisées comme des rasoirs entaillent l’ennemi. Taux de critiques élevé.' },
    ],
  },
  cyndaquil: {
    flavorText: 'Ce Pokémon est un grand timide. Les flammes sur son dos s’intensifient lorsqu’il prend peur.',
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'Éruption', type: PokemonElementType.fire, power: 150, description: 'Le lanceur laisse exploser sa colère. Plus ses PV sont bas et moins l’attaque est puissante.' },
      { name: 'Ébullilave', type: PokemonElementType.fire, power: 80, description: 'Des boules de feu s’abattent sur tous les Pokémon autour du lanceur. Peut aussi brûler.' },
      { name: 'Roue de Feu', type: PokemonElementType.fire, power: 60, description: 'Le lanceur s’entoure de feu et charge l’ennemi. Peut aussi brûler l’ennemi.' },
      { name: 'Brouillard', type: PokemonElementType.normal, power: null, description: 'Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi.' },
    ],
  },
  quilava: {
    flavorText: 'La chaleur de ses flammes intimide l’ennemi. Elles s’intensifient lorsqu’il se prépare à combattre.',
    stats: { hp: 58, attack: 64, defense: 58, specialAttack: 80, specialDefense: 65, speed: 80 },
    moves: [
      { name: 'Éruption', type: PokemonElementType.fire, power: 150, description: 'Le lanceur laisse exploser sa colère. Plus ses PV sont bas et moins l’attaque est puissante.' },
      { name: 'Ébullilave', type: PokemonElementType.fire, power: 80, description: 'Des boules de feu s’abattent sur tous les Pokémon autour du lanceur. Peut aussi brûler.' },
      { name: 'Roue de Feu', type: PokemonElementType.fire, power: 60, description: 'Le lanceur s’entoure de feu et charge l’ennemi. Peut aussi brûler l’ennemi.' },
      { name: 'Brouillard', type: PokemonElementType.normal, power: null, description: 'Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi.' },
    ],
  },
  typhlosion: {
    flavorText: 'Il attaque en projetant des flammes. Il se dissimule derrière les vagues de chaleur qu’il produit.',
    stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    moves: [
      { name: 'Éruption', type: PokemonElementType.fire, power: 150, description: 'Le lanceur laisse exploser sa colère. Plus ses PV sont bas et moins l’attaque est puissante.' },
      { name: 'Ébullilave', type: PokemonElementType.fire, power: 80, description: 'Des boules de feu s’abattent sur tous les Pokémon autour du lanceur. Peut aussi brûler.' },
      { name: 'Roue de Feu', type: PokemonElementType.fire, power: 60, description: 'Le lanceur s’entoure de feu et charge l’ennemi. Peut aussi brûler l’ennemi.' },
      { name: 'Brouillard', type: PokemonElementType.normal, power: null, description: 'Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi.' },
    ],
  },
  totodile: {
    flavorText: 'Il broie tout ce qu’il trouve avec ses mâchoires puissantes. Même son Dresseur doit s’en méfier.',
    stats: { hp: 50, attack: 65, defense: 64, specialAttack: 44, specialDefense: 48, speed: 43 },
    moves: [
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
      { name: 'Crocs Givre', type: PokemonElementType.ice, power: 65, description: 'Le lanceur utilise une morsure glaciale. Peut aussi geler ou apeurer l’ennemi.' },
      { name: 'Mania', type: PokemonElementType.normal, power: 120, description: 'Une attaque furieuse qui dure de 2 à 3 tours. Le lanceur devient confus.' },
      { name: 'Hydro-Queue', type: PokemonElementType.water, power: 90, description: 'Le lanceur attaque en balançant sa queue comme une lame de fond en pleine tempête.' },
    ],
  },
  feraligatr: {
    flavorText: 'Ce Pokémon à l’air pataud est capable d’attaquer à la vitesse de l’éclair pour mordre sa proie.',
    stats: { hp: 85, attack: 105, defense: 100, specialAttack: 79, specialDefense: 83, speed: 78 },
    moves: [
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
      { name: 'Crocs Givre', type: PokemonElementType.ice, power: 65, description: 'Le lanceur utilise une morsure glaciale. Peut aussi geler ou apeurer l’ennemi.' },
      { name: 'Mania', type: PokemonElementType.normal, power: 120, description: 'Une attaque furieuse qui dure de 2 à 3 tours. Le lanceur devient confus.' },
      { name: 'Hydro-Queue', type: PokemonElementType.water, power: 90, description: 'Le lanceur attaque en balançant sa queue comme une lame de fond en pleine tempête.' },
    ],
  },
  croconaw: {
    flavorText: 'Quand il mord, il ne lâche pas prise avant que ses crocs se brisent. Ils repoussent par la suite.',
    stats: { hp: 65, attack: 80, defense: 80, specialAttack: 59, specialDefense: 63, speed: 58 },
    moves: [
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
      { name: 'Crocs Givre', type: PokemonElementType.ice, power: 65, description: 'Le lanceur utilise une morsure glaciale. Peut aussi geler ou apeurer l’ennemi.' },
      { name: 'Mania', type: PokemonElementType.normal, power: 120, description: 'Une attaque furieuse qui dure de 2 à 3 tours. Le lanceur devient confus.' },
      { name: 'Hydro-Queue', type: PokemonElementType.water, power: 90, description: 'Le lanceur attaque en balançant sa queue comme une lame de fond en pleine tempête.' },
    ],
  },
  sentret: {
    flavorText: 'Ce Pokémon très nerveux prend appui sur sa queue pour observer ses alentours.',
    stats: { hp: 35, attack: 46, defense: 34, specialAttack: 35, specialDefense: 45, speed: 20 },
    moves: [
      { name: 'Par Ici', type: PokemonElementType.normal, power: null, description: 'Attire l’attention. Les ennemis n’attaquent que le lanceur.' },
      { name: 'Moi d’Abord', type: PokemonElementType.normal, power: null, description: 'Le lanceur vole la capacité prévue par l’ennemi et l’utilise en faisant plus de dégâts. Il doit frapper en premier.' },
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
    ],
  },
  furret: {
    flavorText: 'La femelle s’enroule autour des petits pour les bercer. Il accule l’ennemi grâce à sa vitesse.',
    stats: { hp: 85, attack: 76, defense: 64, specialAttack: 45, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'Par Ici', type: PokemonElementType.normal, power: null, description: 'Attire l’attention. Les ennemis n’attaquent que le lanceur.' },
      { name: 'Moi d’Abord', type: PokemonElementType.normal, power: null, description: 'Le lanceur vole la capacité prévue par l’ennemi et l’utilise en faisant plus de dégâts. Il doit frapper en premier.' },
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
    ],
  },
  hoothoot: {
    flavorText: 'Il se tient toujours sur un pied. Il en change si vite qu’on peut à peine distinguer ce mouvement.',
    stats: { hp: 60, attack: 30, defense: 30, specialAttack: 36, specialDefense: 56, speed: 50 },
    moves: [
      { name: 'Échange Psy', type: PokemonElementType.psychic, power: null, description: 'Le lanceur transfère ses problèmes de statut à l’ennemi grâce à son pouvoir de suggestion.' },
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Extrasenseur', type: PokemonElementType.psychic, power: 80, description: 'Le lanceur attaque avec un pouvoir étrange et invisible. Peut aussi apeurer l’ennemi.' },
      { name: 'Picpic', type: PokemonElementType.flying, power: 35, description: 'Frappe l’ennemi d’un bec pointu ou d’une corne pour infliger des dégâts.' },
    ],
  },
  noctowl: {
    flavorText: 'Ses yeux sont capables de voir distinctement même quand il fait très sombre.',
    stats: { hp: 100, attack: 50, defense: 50, specialAttack: 86, specialDefense: 96, speed: 70 },
    moves: [
      { name: 'Échange Psy', type: PokemonElementType.psychic, power: null, description: 'Le lanceur transfère ses problèmes de statut à l’ennemi grâce à son pouvoir de suggestion.' },
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Extrasenseur', type: PokemonElementType.psychic, power: 80, description: 'Le lanceur attaque avec un pouvoir étrange et invisible. Peut aussi apeurer l’ennemi.' },
      { name: 'Piqué', type: PokemonElementType.flying, power: 140, description: 'Une attaque en 2 tours au taux de critiques élevé. Peut aussi apeurer l’ennemi.' },
    ],
  },
  ledyba: {
    flavorText: 'Il est si timide qu’il ne se déplace qu’au milieu d’un essaim. Il exprime ses émotions par l’odeur.',
    stats: { hp: 40, attack: 20, defense: 30, specialAttack: 40, specialDefense: 80, speed: 55 },
    moves: [
      { name: 'Poing Comète', type: PokemonElementType.normal, power: 18, description: 'Une tornade de coups de poing qui frappe de 2 à 5 fois d’affilée.' },
      { name: 'Mach Punch', type: PokemonElementType.fighting, power: 40, description: 'Coup de poing fulgurant. Frappe en premier.' },
      { name: 'Vent Argenté', type: PokemonElementType.bug, power: 60, description: 'Vent qui projette des écailles poudreuses sur l’ennemi. Peut aussi monter toutes les stats du lanceur.' },
      { name: 'Bourdon', type: PokemonElementType.bug, power: 90, description: 'Le lanceur fait vibrer ses ailes pour lancer une vague sonique. Peut aussi baisser la Défense Spéciale de l’ennemi.' },
    ],
  },
  ledian: {
    flavorText: 'Il tire sa force de la lumière des étoiles. Plus il y en a et plus ses motifs dorsaux sont grands.',
    stats: { hp: 55, attack: 35, defense: 50, specialAttack: 55, specialDefense: 110, speed: 85 },
    moves: [
      { name: 'Poing Comète', type: PokemonElementType.normal, power: 18, description: 'Une tornade de coups de poing qui frappe de 2 à 5 fois d’affilée.' },
      { name: 'Mach Punch', type: PokemonElementType.fighting, power: 40, description: 'Coup de poing fulgurant. Frappe en premier.' },
      { name: 'Vent Argenté', type: PokemonElementType.bug, power: 60, description: 'Vent qui projette des écailles poudreuses sur l’ennemi. Peut aussi monter toutes les stats du lanceur.' },
      { name: 'Bourdon', type: PokemonElementType.bug, power: 90, description: 'Le lanceur fait vibrer ses ailes pour lancer une vague sonique. Peut aussi baisser la Défense Spéciale de l’ennemi.' },
    ],
  },
  spinarak: {
    flavorText: 'Il tisse une toile fine mais solide pour poser des pièges et se poste dans l’attente d’une proie.',
    stats: { hp: 40, attack: 60, defense: 40, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: 'Toile', type: PokemonElementType.bug, power: null, description: 'Le lanceur enserre l’ennemi à l’aide d’une fine soie gluante pour l’empêcher de fuir le combat.' },
      { name: 'Constriction', type: PokemonElementType.normal, power: 10, description: 'De longs tentacules ou lianes attaquent l’ennemi. Peut aussi baisser sa Vitesse.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Dard-Nuée', type: PokemonElementType.bug, power: 25, description: 'Envoie une rafale de dards. Peut toucher de 2 à 5 fois.' },
    ],
  },
  ariados: {
    flavorText: 'Il attache un fil à sa proie avant de la libérer. Il s’en servira pour la retrouver, elle et ses amis.',
    stats: { hp: 70, attack: 90, defense: 70, specialAttack: 60, specialDefense: 70, speed: 40 },
    moves: [
      { name: 'Toile', type: PokemonElementType.bug, power: null, description: 'Le lanceur enserre l’ennemi à l’aide d’une fine soie gluante pour l’empêcher de fuir le combat.' },
      { name: 'Constriction', type: PokemonElementType.normal, power: 10, description: 'De longs tentacules ou lianes attaquent l’ennemi. Peut aussi baisser sa Vitesse.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Dard-Nuée', type: PokemonElementType.bug, power: 25, description: 'Envoie une rafale de dards. Peut toucher de 2 à 5 fois.' },
    ],
  },
  crobat: {
    flavorText: 'La transformation de ses pattes en ailes a certes amélioré sa capacité à voler, mais pas à marcher.',
    stats: { hp: 85, attack: 90, defense: 80, specialAttack: 70, specialDefense: 80, speed: 130 },
    moves: [
      { name: 'Crochet Venin', type: PokemonElementType.poison, power: 50, description: 'Le lanceur mord l’ennemi de ses crocs toxiques. Peut aussi l’empoisonner gravement.' },
      { name: 'Poison Croix', type: PokemonElementType.poison, power: 70, description: 'Un coup tranchant qui peut empoisonner l’ennemi. Taux de critiques élevé.' },
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Regard Noir', type: PokemonElementType.normal, power: null, description: 'Le lanceur pétrifie l’ennemi en lui lançant un regard noir. Il devient incapable de s’enfuir.' },
    ],
  },
  chinchou: {
    flavorText: 'Il envoie des décharges électriques positives et négatives du bout des antennes pour paralyser sa proie.',
    stats: { hp: 75, attack: 38, defense: 38, specialAttack: 56, specialDefense: 56, speed: 67 },
    moves: [
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
      { name: 'Anneau Hydro', type: PokemonElementType.water, power: null, description: 'Un voile liquide enveloppe le lanceur. Il récupère des PV à chaque tour.' },
      { name: 'Étincelle', type: PokemonElementType.electric, power: 65, description: 'Lance une charge électrique sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Ultrason', type: PokemonElementType.normal, power: null, description: 'Le lanceur produit d’étranges ondes sonores qui rendent confus.' },
    ],
  },
  lanturn: {
    flavorText: 'La lumière de Lanturn surgit des profondeurs. On le surnomme “étoile des profondeurs”.',
    stats: { hp: 125, attack: 58, defense: 58, specialAttack: 76, specialDefense: 76, speed: 67 },
    moves: [
      { name: 'Relâche', type: PokemonElementType.normal, power: null, description: 'Libère dans une attaque la puissance précédemment accumulée avec Stockage.' },
      { name: 'Avale', type: PokemonElementType.normal, power: null, description: 'Le lanceur absorbe la puissance accumulée avec Stockage pour restaurer ses PV.' },
      { name: 'Stockage', type: PokemonElementType.normal, power: null, description: 'Le lanceur accumule de la puissance et augmente sa Défense et sa Défense Spéciale. Peut être utilisé 3 fois.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
    ],
  },
  pichu: {
    flavorText: 'Les poches électriques de ses joues sont encore petites, mais risquent de l’électrocuter.',
    stats: { hp: 20, attack: 40, defense: 15, specialAttack: 35, specialDefense: 35, speed: 60 },
    moves: [
      { name: 'Doux Baiser', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie un bisou si mignon et désarmant qu’il plonge l’ennemi dans la confusion.' },
      { name: 'Éclair', type: PokemonElementType.electric, power: 40, description: 'Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Mimi-Queue', type: PokemonElementType.normal, power: null, description: 'Le lanceur remue son adorable queue pour tromper la vigilance de l’ennemi et baisser sa Défense.' },
      { name: 'Machination', type: PokemonElementType.dark, power: null, description: 'Stimule l’esprit par de mauvaises pensées. Augmente fortement l’Attaque Spéciale du lanceur.' },
    ],
  },
  cleffa: {
    flavorText: 'On dit qu’il se déplace à dos d’étoile filante. Il se montre souvent quand on en voit.',
    stats: { hp: 50, attack: 25, defense: 28, specialAttack: 45, specialDefense: 55, speed: 15 },
    moves: [
      { name: 'Berceuse', type: PokemonElementType.normal, power: null, description: 'Une berceuse plonge l’ennemi dans un profond sommeil.' },
      { name: 'Doux Baiser', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie un bisou si mignon et désarmant qu’il plonge l’ennemi dans la confusion.' },
      { name: 'Photocopie', type: PokemonElementType.normal, power: null, description: 'Le lanceur imite la dernière capacité employée. Échoue si aucune capacité n’a été utilisée.' },
      { name: 'Écras’Face', type: PokemonElementType.normal, power: 40, description: 'Écrase l’ennemi avec les pattes avant, la queue, etc.' },
    ],
  },
  igglybuff: {
    flavorText: 'Son corps est doux et élastique. Quand il commence à rebondir, on ne peut plus l’arrêter.',
    stats: { hp: 90, attack: 30, defense: 15, specialAttack: 40, specialDefense: 20, speed: 15 },
    moves: [
      { name: 'Berceuse', type: PokemonElementType.normal, power: null, description: 'Une berceuse plonge l’ennemi dans un profond sommeil.' },
      { name: 'Doux Baiser', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie un bisou si mignon et désarmant qu’il plonge l’ennemi dans la confusion.' },
      { name: 'Photocopie', type: PokemonElementType.normal, power: null, description: 'Le lanceur imite la dernière capacité employée. Échoue si aucune capacité n’a été utilisée.' },
      { name: 'Écras’Face', type: PokemonElementType.normal, power: 40, description: 'Écrase l’ennemi avec les pattes avant, la queue, etc.' },
    ],
  },
  togepi: {
    flavorText: 'Il transforme les émotions positives des autres en bonheur qu’il stocke dans sa coquille.',
    stats: { hp: 35, attack: 20, defense: 65, specialAttack: 40, specialDefense: 65, speed: 20 },
    moves: [
      { name: 'Par Ici', type: PokemonElementType.normal, power: null, description: 'Attire l’attention. Les ennemis n’attaquent que le lanceur.' },
      { name: 'Doux Baiser', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie un bisou si mignon et désarmant qu’il plonge l’ennemi dans la confusion.' },
      { name: 'Vœu', type: PokemonElementType.normal, power: null, description: 'Un vœu qui permet de récupérer la moitié des PV max au tour suivant.' },
      { name: 'Bâillement', type: PokemonElementType.normal, power: null, description: 'Fait bâiller l’ennemi qui s’endort au tour suivant.' },
    ],
  },
  togetic: {
    flavorText: 'Il parcourt le monde pour distribuer de la joie aux êtres bons.',
    stats: { hp: 55, attack: 40, defense: 85, specialAttack: 80, specialDefense: 105, speed: 40 },
    moves: [
      { name: 'Par Ici', type: PokemonElementType.normal, power: null, description: 'Attire l’attention. Les ennemis n’attaquent que le lanceur.' },
      { name: 'Doux Baiser', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie un bisou si mignon et désarmant qu’il plonge l’ennemi dans la confusion.' },
      { name: 'Vœu', type: PokemonElementType.normal, power: null, description: 'Un vœu qui permet de récupérer la moitié des PV max au tour suivant.' },
      { name: 'Bâillement', type: PokemonElementType.normal, power: null, description: 'Fait bâiller l’ennemi qui s’endort au tour suivant.' },
    ],
  },
  natu: {
    flavorText: 'Il mange des cactus en prenant soin d’éviter les bourgeons et les épines. Il ne tient pas en place.',
    stats: { hp: 40, attack: 50, defense: 45, specialAttack: 70, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'Œil Miracle', type: PokemonElementType.psychic, power: null, description: 'Permet de toucher un Pokémon Ténèbres avec toute capacité et de toucher un ennemi insaisissable.' },
      { name: 'Échange Psy', type: PokemonElementType.psychic, power: null, description: 'Le lanceur transfère ses problèmes de statut à l’ennemi grâce à son pouvoir de suggestion.' },
      { name: 'Moi d’Abord', type: PokemonElementType.normal, power: null, description: 'Le lanceur vole la capacité prévue par l’ennemi et l’utilise en faisant plus de dégâts. Il doit frapper en premier.' },
      { name: 'Air Veinard', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie une incantation vers le ciel pour empêcher l’ennemi d’effectuer des coups critiques.' },
    ],
  },
  xatu: {
    flavorText: 'Cet étrange Pokémon peut voir l’avenir et le passé. Il guette sans cesse la course du soleil.',
    stats: { hp: 65, attack: 75, defense: 70, specialAttack: 95, specialDefense: 70, speed: 95 },
    moves: [
      { name: 'Œil Miracle', type: PokemonElementType.psychic, power: null, description: 'Permet de toucher un Pokémon Ténèbres avec toute capacité et de toucher un ennemi insaisissable.' },
      { name: 'Échange Psy', type: PokemonElementType.psychic, power: null, description: 'Le lanceur transfère ses problèmes de statut à l’ennemi grâce à son pouvoir de suggestion.' },
      { name: 'Moi d’Abord', type: PokemonElementType.normal, power: null, description: 'Le lanceur vole la capacité prévue par l’ennemi et l’utilise en faisant plus de dégâts. Il doit frapper en premier.' },
      { name: 'Air Veinard', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie une incantation vers le ciel pour empêcher l’ennemi d’effectuer des coups critiques.' },
    ],
  },
  mareep: {
    flavorText: 'Sa laine fournie enfle lorsqu’il accumule de l’électricité statique. Son contact peut choquer.',
    stats: { hp: 55, attack: 40, defense: 40, specialAttack: 65, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'Spore Coton', type: PokemonElementType.grass, power: null, description: 'Le lanceur libère des spores cotonneuses qui collent à l’ennemi et baissent fortement sa Vitesse.' },
      { name: 'Éclair', type: PokemonElementType.electric, power: 40, description: 'Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
      { name: 'Rayon Gemme', type: PokemonElementType.rock, power: 80, description: 'Le lanceur attaque avec un rayon de lumière qui scintille comme s’il était composé de gemmes.' },
    ],
  },
  flaaffy: {
    flavorText: 'Sa queue s’allume lorsque sa laine se charge d’électricité. Il projette des poils électrifiés.',
    stats: { hp: 70, attack: 55, defense: 55, specialAttack: 80, specialDefense: 60, speed: 45 },
    moves: [
      { name: 'Spore Coton', type: PokemonElementType.grass, power: null, description: 'Le lanceur libère des spores cotonneuses qui collent à l’ennemi et baissent fortement sa Vitesse.' },
      { name: 'Éclair', type: PokemonElementType.electric, power: 40, description: 'Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
      { name: 'Rayon Gemme', type: PokemonElementType.rock, power: 80, description: 'Le lanceur attaque avec un rayon de lumière qui scintille comme s’il était composé de gemmes.' },
    ],
  },
  ampharos: {
    flavorText: 'Le bout de sa queue brille avec intensité. Jadis, on s’en servait pour envoyer des signaux.',
    stats: { hp: 90, attack: 75, defense: 85, specialAttack: 115, specialDefense: 90, speed: 55 },
    moves: [
      { name: 'Spore Coton', type: PokemonElementType.grass, power: null, description: 'Le lanceur libère des spores cotonneuses qui collent à l’ennemi et baissent fortement sa Vitesse.' },
      { name: 'Éclair', type: PokemonElementType.electric, power: 40, description: 'Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
      { name: 'Rayon Gemme', type: PokemonElementType.rock, power: 80, description: 'Le lanceur attaque avec un rayon de lumière qui scintille comme s’il était composé de gemmes.' },
    ],
  },
  bellossom: {
    flavorText: 'À la fin de la saison des pluies, il sort danser en plein air, attiré par la chaleur du soleil.',
    stats: { hp: 75, attack: 80, defense: 95, specialAttack: 90, specialDefense: 100, speed: 50 },
    moves: [
      { name: 'Lame Feuille', type: PokemonElementType.grass, power: 90, description: 'Une feuille coupante comme une lame entaille l’ennemi. Taux de critiques élevé.' },
      { name: 'Para-Spore', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand sur l’ennemi une poudre qui le paralyse.' },
      { name: 'Doux Parfum', type: PokemonElementType.normal, power: null, description: 'Un doux parfum qui réduit l’Esquive de l’ennemi. Attire aussi les Pokémon sauvages.' },
      { name: 'Méga-Sangsue', type: PokemonElementType.grass, power: 40, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
    ],
  },
  marill: {
    flavorText: 'Sa queue à l’extrémité remplie d’huile fait office de flotteur et lui permet de ne pas couler.',
    stats: { hp: 70, attack: 20, defense: 50, specialAttack: 20, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'Anneau Hydro', type: PokemonElementType.water, power: null, description: 'Un voile liquide enveloppe le lanceur. Il récupère des PV à chaque tour.' },
      { name: 'Bulles d’O', type: PokemonElementType.water, power: 65, description: 'Des bulles sont envoyées avec puissance sur l’ennemi. Peut aussi baisser sa Vitesse.' },
      { name: 'Mimi-Queue', type: PokemonElementType.normal, power: null, description: 'Le lanceur remue son adorable queue pour tromper la vigilance de l’ennemi et baisser sa Défense.' },
      { name: 'Hydro-Queue', type: PokemonElementType.water, power: 90, description: 'Le lanceur attaque en balançant sa queue comme une lame de fond en pleine tempête.' },
    ],
  },
  azumarill: {
    flavorText: 'Ses poumons peuvent contenir assez d’air pour lui permettre de passer une journée sous l’eau.',
    stats: { hp: 100, attack: 50, defense: 80, specialAttack: 60, specialDefense: 80, speed: 50 },
    moves: [
      { name: 'Anneau Hydro', type: PokemonElementType.water, power: null, description: 'Un voile liquide enveloppe le lanceur. Il récupère des PV à chaque tour.' },
      { name: 'Bulles d’O', type: PokemonElementType.water, power: 65, description: 'Des bulles sont envoyées avec puissance sur l’ennemi. Peut aussi baisser sa Vitesse.' },
      { name: 'Mimi-Queue', type: PokemonElementType.normal, power: null, description: 'Le lanceur remue son adorable queue pour tromper la vigilance de l’ennemi et baisser sa Défense.' },
      { name: 'Hydro-Queue', type: PokemonElementType.water, power: 90, description: 'Le lanceur attaque en balançant sa queue comme une lame de fond en pleine tempête.' },
    ],
  },
  politoed: {
    flavorText: 'Il rassemble ses pairs pour les commander. Il utilise son cri pour diriger Ptitard.',
    stats: { hp: 90, attack: 75, defense: 75, specialAttack: 90, specialDefense: 100, speed: 70 },
    moves: [
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
      { name: 'Torgnoles', type: PokemonElementType.normal, power: 15, description: 'Gifle rapidement l’ennemi de 2 à 5 fois d’affilée.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
      { name: 'Bulles d’O', type: PokemonElementType.water, power: 65, description: 'Des bulles sont envoyées avec puissance sur l’ennemi. Peut aussi baisser sa Vitesse.' },
    ],
  },
  sudowoodo: {
    flavorText: 'Il prend l’apparence d’un arbre pour éviter les attaques, mais il déteste l’eau et fuit la pluie.',
    stats: { hp: 70, attack: 100, defense: 115, specialAttack: 30, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'Martobois', type: PokemonElementType.grass, power: 120, description: 'Le lanceur heurte l’ennemi de son corps robuste. Inflige de sérieux dégâts au lanceur aussi.' },
      { name: 'Jet-Pierres', type: PokemonElementType.rock, power: 50, description: 'Le lanceur lâche une pierre sur l’ennemi.' },
      { name: 'Marto-Poing', type: PokemonElementType.fighting, power: 100, description: 'Le lanceur lâche un puissant coup de poing sur l’ennemi. Réduit la vitesse du lanceur.' },
      { name: 'Photocopie', type: PokemonElementType.normal, power: null, description: 'Le lanceur imite la dernière capacité employée. Échoue si aucune capacité n’a été utilisée.' },
    ],
  },
  hoppip: {
    flavorText: 'Il dérive avec le vent. Sa présence en nombre dans les champs et les montagnes annonce le printemps.',
    stats: { hp: 35, attack: 35, defense: 40, specialAttack: 35, specialDefense: 55, speed: 50 },
    moves: [
      { name: 'Spore Coton', type: PokemonElementType.grass, power: null, description: 'Le lanceur libère des spores cotonneuses qui collent à l’ennemi et baissent fortement sa Vitesse.' },
      { name: 'Poudre Dodo', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand une poudre soporifique qui endort la cible.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
      { name: 'Trempette', type: PokemonElementType.normal, power: null, description: 'Le lanceur barbote et éclabousse les environs. Cette capacité n’a aucun effet.' },
    ],
  },
  skiploom: {
    flavorText: 'Il fleurit lorsque les températures remontent. Il flotte dans le ciel pour absorber les rayons du soleil.',
    stats: { hp: 55, attack: 45, defense: 50, specialAttack: 45, specialDefense: 65, speed: 80 },
    moves: [
      { name: 'Spore Coton', type: PokemonElementType.grass, power: null, description: 'Le lanceur libère des spores cotonneuses qui collent à l’ennemi et baissent fortement sa Vitesse.' },
      { name: 'Poudre Dodo', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand une poudre soporifique qui endort la cible.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
      { name: 'Trempette', type: PokemonElementType.normal, power: null, description: 'Le lanceur barbote et éclabousse les environs. Cette capacité n’a aucun effet.' },
    ],
  },
  jumpluff: {
    flavorText: 'Poussé par les vents saisonniers, il fait le tour du globe en semant des spores de coton.',
    stats: { hp: 75, attack: 55, defense: 70, specialAttack: 55, specialDefense: 95, speed: 110 },
    moves: [
      { name: 'Spore Coton', type: PokemonElementType.grass, power: null, description: 'Le lanceur libère des spores cotonneuses qui collent à l’ennemi et baissent fortement sa Vitesse.' },
      { name: 'Poudre Dodo', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand une poudre soporifique qui endort la cible.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
      { name: 'Trempette', type: PokemonElementType.normal, power: null, description: 'Le lanceur barbote et éclabousse les environs. Cette capacité n’a aucun effet.' },
    ],
  },
  aipom: {
    flavorText: 'Sa queue est aussi agile que ses mains. Il vit en haut des grands arbres.',
    stats: { hp: 55, attack: 70, defense: 55, specialAttack: 40, specialDefense: 55, speed: 85 },
    moves: [
      { name: 'Coup Double', type: PokemonElementType.normal, power: 35, description: 'Un coup de queue ou de liane qui frappe l’ennemi deux fois d’affilée.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Chatouille', type: PokemonElementType.normal, power: null, description: 'Le lanceur chatouille l’ennemi, ce qui baisse son Attaque et sa Défense.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
    ],
  },
  sunkern: {
    flavorText: 'Il tombe du ciel sans crier gare en matinée. On en croise énormément l’année suivant un été froid.',
    stats: { hp: 30, attack: 30, defense: 30, specialAttack: 30, specialDefense: 30, speed: 30 },
    moves: [
      { name: 'Siffl’Herbe', type: PokemonElementType.grass, power: null, description: 'Le lanceur joue une douce mélodie qui plonge l’ennemi dans un profond sommeil.' },
      { name: 'Racines', type: PokemonElementType.grass, power: null, description: 'Le lanceur plante ses racines et récupère des PV à chaque tour. Une fois enraciné, il ne peut plus fuir.' },
      { name: 'Tranch’Herbe', type: PokemonElementType.grass, power: 55, description: 'Des feuilles aiguisées comme des rasoirs entaillent l’ennemi. Taux de critiques élevé.' },
      { name: 'Croissance', type: PokemonElementType.normal, power: null, description: 'Le corps du lanceur se développe. Augmente l’Attaque et l’Attaque Spéciale.' },
    ],
  },
  yanma: {
    flavorText: 'La vitesse de ses ailes lui permet un vol stationnaire. Il surveille ainsi tout son territoire.',
    stats: { hp: 65, attack: 65, defense: 45, specialAttack: 75, specialDefense: 45, speed: 95 },
    moves: [
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'Une onde de choc destructrice qui inflige toujours 20 PV de dégâts.' },
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Bourdon', type: PokemonElementType.bug, power: 90, description: 'Le lanceur fait vibrer ses ailes pour lancer une vague sonique. Peut aussi baisser la Défense Spéciale de l’ennemi.' },
    ],
  },
  sunflora: {
    flavorText: 'Les rayons du soleil lui donnent de l’énergie. Il est connu pour migrer vers les régions ensoleillées.',
    stats: { hp: 75, attack: 75, defense: 55, specialAttack: 105, specialDefense: 85, speed: 30 },
    moves: [
      { name: 'Siffl’Herbe', type: PokemonElementType.grass, power: null, description: 'Le lanceur joue une douce mélodie qui plonge l’ennemi dans un profond sommeil.' },
      { name: 'Danse Fleurs', type: PokemonElementType.grass, power: 120, description: 'Le lanceur attaque en projetant des pétales pendant 2 à 3 tours avant de céder à la confusion.' },
      { name: 'Racines', type: PokemonElementType.grass, power: null, description: 'Le lanceur plante ses racines et récupère des PV à chaque tour. Une fois enraciné, il ne peut plus fuir.' },
      { name: 'Tranch’Herbe', type: PokemonElementType.grass, power: 55, description: 'Des feuilles aiguisées comme des rasoirs entaillent l’ennemi. Taux de critiques élevé.' },
    ],
  },
  wooper: {
    flavorText: 'Il émerge de l’eau lorsque l’air se rafraîchit pour partir chasser sur les berges.',
    stats: { hp: 55, attack: 45, defense: 45, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: 'Boue-Bombe', type: PokemonElementType.ground, power: 65, description: 'Le lanceur attaque à l’aide d’une boule de boue solidifiée. Peut aussi baisser la Précision de l’ennemi.' },
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Brume', type: PokemonElementType.ice, power: null, description: 'Une brume blanche enveloppe l’équipe du lanceur et empêche la réduction des stats pour 5 tours.' },
      { name: 'Souplesse', type: PokemonElementType.normal, power: 80, description: 'Fouette l’ennemi avec la queue, une liane, etc. pour infliger des dégâts.' },
    ],
  },
  quagsire: {
    flavorText: 'De nature placide, il a tendance à se cogner la tête contre les récifs et autres bateaux de passage.',
    stats: { hp: 95, attack: 85, defense: 85, specialAttack: 65, specialDefense: 65, speed: 35 },
    moves: [
      { name: 'Boue-Bombe', type: PokemonElementType.ground, power: 65, description: 'Le lanceur attaque à l’aide d’une boule de boue solidifiée. Peut aussi baisser la Précision de l’ennemi.' },
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Brume', type: PokemonElementType.ice, power: null, description: 'Une brume blanche enveloppe l’équipe du lanceur et empêche la réduction des stats pour 5 tours.' },
      { name: 'Souplesse', type: PokemonElementType.normal, power: 80, description: 'Fouette l’ennemi avec la queue, une liane, etc. pour infliger des dégâts.' },
    ],
  },
  espeon: {
    flavorText: 'Sa fourrure est si sensible qu’il peut détecter les vibrations de l’air et prédire le temps qu’il fera.',
    stats: { hp: 65, attack: 65, defense: 60, specialAttack: 130, specialDefense: 95, speed: 110 },
    moves: [
      { name: 'Aurore', type: PokemonElementType.normal, power: null, description: 'Un soin qui restaure des PV au lanceur. Son efficacité varie en fonction de la météo.' },
      { name: 'Permuforce', type: PokemonElementType.psychic, power: null, description: 'Pouvoir qui échange les modifications de l’Attaque Spéciale et de l’Attaque du lanceur avec la cible.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
      { name: 'Choc Mental', type: PokemonElementType.psychic, power: 50, description: 'Une faible vague télékinésique frappe l’ennemi. Peut aussi le plonger dans la confusion.' },
    ],
  },
  umbreon: {
    flavorText: 'Quand il s’expose à la lumière de la lune, ses anneaux brillent et il obtient un mystérieux pouvoir.',
    stats: { hp: 95, attack: 65, defense: 110, specialAttack: 60, specialDefense: 130, speed: 65 },
    moves: [
      { name: 'Rayon Lune', type: PokemonElementType.normal, power: null, description: 'Un soin qui restaure des PV au lanceur. Son efficacité varie en fonction de la météo.' },
      { name: 'Regard Noir', type: PokemonElementType.normal, power: null, description: 'Le lanceur pétrifie l’ennemi en lui lançant un regard noir. Il devient incapable de s’enfuir.' },
      { name: 'Permugarde', type: PokemonElementType.psychic, power: null, description: 'Pouvoir qui échange les modifications de la Défense Spéciale et de la Défense avec la cible.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
    ],
  },
  murkrow: {
    flavorText: 'Quand il est en danger, il tente de semer ses poursuivants dans les chemins montagneux.',
    stats: { hp: 60, attack: 85, defense: 42, specialAttack: 85, specialDefense: 42, speed: 91 },
    moves: [
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Regard Noir', type: PokemonElementType.normal, power: null, description: 'Le lanceur pétrifie l’ennemi en lui lançant un regard noir. Il devient incapable de s’enfuir.' },
      { name: 'Picpic', type: PokemonElementType.flying, power: 35, description: 'Frappe l’ennemi d’un bec pointu ou d’une corne pour infliger des dégâts.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
    ],
  },
  slowking: {
    flavorText: 'La morsure de Kokiyas a fait de lui un génie dont l’intelligence rivalise avec celle d’un prix Nobel.',
    stats: { hp: 95, attack: 75, defense: 80, specialAttack: 100, specialDefense: 110, speed: 30 },
    moves: [
      { name: 'Atout', type: PokemonElementType.normal, power: null, description: 'Moins cette capacité possède de PP, plus elle est puissante.' },
      { name: 'Rayon Gemme', type: PokemonElementType.rock, power: 80, description: 'Le lanceur attaque avec un rayon de lumière qui scintille comme s’il était composé de gemmes.' },
      { name: 'Bâillement', type: PokemonElementType.normal, power: null, description: 'Fait bâiller l’ennemi qui s’endort au tour suivant.' },
      { name: 'Entrave', type: PokemonElementType.normal, power: null, description: 'Empêche l’ennemi d’employer à nouveau sa dernière attaque. Dure quatre tours.' },
    ],
  },
  unown_a: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_b: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_c: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_d: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_e: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_f: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_g: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_h: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_i: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_j: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_k: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_l: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_m: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_n: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_o: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_p: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_q: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_r: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_s: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_t: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_u: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_v: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_w: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_x: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_y: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_z: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_exclamation: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  unown_question: {
    flavorText: 'Quand il est seul, il ne se passe rien... Mais en groupe, il semble habité par un mystérieux pouvoir.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
    ],
  },
  misdreavus: {
    flavorText: 'Il fait peur aux aventuriers en pleine nuit et se nourrit de leur frayeur.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 85, specialDefense: 85, speed: 85 },
    moves: [
      { name: 'Rancune', type: PokemonElementType.ghost, power: null, description: 'Si le lanceur est mis K.O., sa rancune épuise les PP de la capacité utilisée pour le mettre K.O.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
      { name: 'Regard Noir', type: PokemonElementType.normal, power: null, description: 'Le lanceur pétrifie l’ennemi en lui lançant un regard noir. Il devient incapable de s’enfuir.' },
      { name: 'Vague Psy', type: PokemonElementType.psychic, power: null, description: 'Une étrange onde d’énergie chaude frappe l’ennemi. Cette attaque est d’intensité variable.' },
    ],
  },
  wobbuffet: {
    flavorText: 'Il vit discrètement dans l’obscurité pour cacher sa queue noire. Il n’attaque jamais en premier.',
    stats: { hp: 190, attack: 33, defense: 58, specialAttack: 33, specialDefense: 58, speed: 33 },
    moves: [
      { name: 'Voile Miroir', type: PokemonElementType.psychic, power: null, description: 'Une riposte qui contre n’importe quelle attaque spéciale en infligeant le double des dégâts subis.' },
      { name: 'Lien du Destin', type: PokemonElementType.ghost, power: null, description: 'Quand cette capacité est activée, elle met K.O. un ennemi qui porte un coup fatal au lanceur.' },
      { name: 'Riposte', type: PokemonElementType.fighting, power: null, description: 'Une riposte qui répond à toute attaque physique en infligeant le double de dégâts.' },
      { name: 'Rune Protect', type: PokemonElementType.normal, power: null, description: 'Champ protecteur empêchant tous les problèmes de statut pendant 5 tours.' },
    ],
  },
  girafarig: {
    flavorText: 'La tête qu’il a sur la queue dispose de son propre cerveau et lui permet de couvrir ses arrières.',
    stats: { hp: 70, attack: 80, defense: 65, specialAttack: 90, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Écrasement', type: PokemonElementType.normal, power: 65, description: 'Écrase l’ennemi avec un énorme pied. Peut aussi l’apeurer.' },
      { name: 'Coup Double', type: PokemonElementType.normal, power: 35, description: 'Un coup de queue ou de liane qui frappe l’ennemi deux fois d’affilée.' },
      { name: 'Permuforce', type: PokemonElementType.psychic, power: null, description: 'Pouvoir qui échange les modifications de l’Attaque Spéciale et de l’Attaque du lanceur avec la cible.' },
    ],
  },
  pineco: {
    flavorText: 'Il ressemble à une pomme de pin. Sa carapace le protège des Pokémon Oiseaux qui le picorent par erreur.',
    stats: { hp: 50, attack: 65, defense: 90, specialAttack: 35, specialDefense: 35, speed: 15 },
    moves: [
      { name: 'Tour Rapide', type: PokemonElementType.normal, power: 50, description: 'Une attaque tournoyante pouvant aussi annuler par ex. Étreinte, Ligotage, Vampigraine ou Picots.' },
      { name: 'Picots', type: PokemonElementType.ground, power: null, description: 'Le lanceur disperse des piquants sur le sol pour blesser tout ennemi qui entre au combat.' },
      { name: 'Piqûre', type: PokemonElementType.bug, power: 60, description: 'Le lanceur pique l’ennemi. Si ce dernier tient une Baie, le lanceur la dévore et obtient son effet.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'Le lanceur explose et inflige des dégâts à tous les Pokémon autour de lui. Met K.O. le lanceur.' },
    ],
  },
  forretress: {
    flavorText: 'Il est prisonnier d’une coquille d’acier. Ses yeux vigilants sont la seule partie visible de son corps.',
    stats: { hp: 75, attack: 90, defense: 140, specialAttack: 60, specialDefense: 60, speed: 40 },
    moves: [
      { name: 'Miroi-Tir', type: PokemonElementType.steel, power: 65, description: 'Le corps poli du lanceur libère un éclair d’énergie. Peut aussi baisser la Précision de l’ennemi.' },
      { name: 'Tour Rapide', type: PokemonElementType.normal, power: 50, description: 'Une attaque tournoyante pouvant aussi annuler par ex. Étreinte, Ligotage, Vampigraine ou Picots.' },
      { name: 'Picots', type: PokemonElementType.ground, power: null, description: 'Le lanceur disperse des piquants sur le sol pour blesser tout ennemi qui entre au combat.' },
      { name: 'Pics Toxik', type: PokemonElementType.poison, power: null, description: 'Lance des pics autour de l’ennemi. Ils empoisonnent les ennemis qui entrent au combat.' },
    ],
  },
  dunsparce: {
    flavorText: 'Son nid est un véritable labyrinthe qu’il creuse à l’aide de sa queue. Il sait à peine voler.',
    stats: { hp: 100, attack: 70, defense: 70, specialAttack: 65, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'Regard Médusant', type: PokemonElementType.normal, power: null, description: 'Le lanceur intimide l’ennemi grâce à son regard terrifiant pour le paralyser.' },
      { name: 'Bâillement', type: PokemonElementType.normal, power: null, description: 'Fait bâiller l’ennemi qui s’endort au tour suivant.' },
      { name: 'Poursuite', type: PokemonElementType.dark, power: 40, description: 'Une attaque qui inflige deux fois plus de dégâts à un ennemi qui quitte le combat.' },
      { name: 'Atterrissage', type: PokemonElementType.flying, power: null, description: 'Le lanceur atterrit et se repose. Restaure jusqu’à la moitié de ses PV max.' },
    ],
  },
  gligar: {
    flavorText: 'Il fend l’air et fond sur sa proie pour s’agripper à son visage et la frapper avec son dard.',
    stats: { hp: 65, attack: 75, defense: 105, specialAttack: 35, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'Guillotine', type: PokemonElementType.normal, power: null, description: 'De méchantes pinces lacèrent l’ennemi, le mettant K.O. sur le coup s’il est touché.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
    ],
  },
  steelix: {
    flavorText: 'On pense que son corps s’est transformé à cause du fer contenu dans la terre dont il se nourrit.',
    stats: { hp: 75, attack: 85, defense: 200, specialAttack: 55, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Jet-Pierres', type: PokemonElementType.rock, power: 50, description: 'Le lanceur lâche une pierre sur l’ennemi.' },
      { name: 'Étreinte', type: PokemonElementType.normal, power: 15, description: 'Ligote l’ennemi avec les tentacules ou le corps pour l’écraser durant 4 à 5 tours.' },
      { name: 'Draco-Souffle', type: PokemonElementType.dragon, power: 60, description: 'Le lanceur souffle fort sur l’ennemi pour infliger des dégâts. Peut aussi le paralyser.' },
    ],
  },
  snubbull: {
    flavorText: 'Son visage horrible fait fuir les petits Pokémon. Par contre, les femmes le trouvent mignon.',
    stats: { hp: 60, attack: 80, defense: 50, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: 'Léchouille', type: PokemonElementType.ghost, power: 30, description: 'Un grand coup de langue qui inflige des dégâts à l’ennemi. Peut aussi le paralyser.' },
      { name: 'Crocs Éclair', type: PokemonElementType.electric, power: 65, description: 'Le lanceur utilise une morsure électrifiée. Peut aussi paralyser ou apeurer l’ennemi.' },
      { name: 'Crocs Givre', type: PokemonElementType.ice, power: 65, description: 'Le lanceur utilise une morsure glaciale. Peut aussi geler ou apeurer l’ennemi.' },
      { name: 'Crocs Feu', type: PokemonElementType.fire, power: 65, description: 'Le lanceur utilise une morsure enflammée. Peut aussi brûler ou apeurer l’ennemi.' },
    ],
  },
  granbull: {
    flavorText: 'En dépit des apparences, c’est un grand timide. Quand il s’énerve, il mord de ses énormes crocs.',
    stats: { hp: 90, attack: 120, defense: 75, specialAttack: 60, specialDefense: 60, speed: 45 },
    moves: [
      { name: 'Léchouille', type: PokemonElementType.ghost, power: 30, description: 'Un grand coup de langue qui inflige des dégâts à l’ennemi. Peut aussi le paralyser.' },
      { name: 'Crocs Éclair', type: PokemonElementType.electric, power: 65, description: 'Le lanceur utilise une morsure électrifiée. Peut aussi paralyser ou apeurer l’ennemi.' },
      { name: 'Crocs Givre', type: PokemonElementType.ice, power: 65, description: 'Le lanceur utilise une morsure glaciale. Peut aussi geler ou apeurer l’ennemi.' },
      { name: 'Crocs Feu', type: PokemonElementType.fire, power: 65, description: 'Le lanceur utilise une morsure enflammée. Peut aussi brûler ou apeurer l’ennemi.' },
    ],
  },
  qwilfish: {
    flavorText: 'Il envoie ses piquants empoisonnés à la ronde. Sa forme sphérique en fait un piètre nageur.',
    stats: { hp: 65, attack: 95, defense: 85, specialAttack: 55, specialDefense: 55, speed: 85 },
    moves: [
      { name: 'Lilliput', type: PokemonElementType.normal, power: null, description: 'Le lanceur comprime son corps pour se faire tout petit et augmenter fortement son Esquive.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Relâche', type: PokemonElementType.normal, power: null, description: 'Libère dans une attaque la puissance précédemment accumulée avec Stockage.' },
      { name: 'Dard-Nuée', type: PokemonElementType.bug, power: 25, description: 'Envoie une rafale de dards. Peut toucher de 2 à 5 fois.' },
    ],
  },
  scizor: {
    flavorText: 'Les yeux sur ses pinces servent à intimider l’ennemi avant de passer à l’attaque.',
    stats: { hp: 70, attack: 130, defense: 100, specialAttack: 55, specialDefense: 80, speed: 65 },
    moves: [
      { name: 'Pisto-Poing', type: PokemonElementType.steel, power: 40, description: 'Le lanceur envoie des coups de poing aussi rapides que des balles de revolver. Frappe toujours en premier.' },
      { name: 'Coupe-Vent', type: PokemonElementType.normal, power: 80, description: 'Attaque en 2 tours. Des lames de vent frappent l’ennemi au 2è tour. Taux de critiques élevé.' },
      { name: 'Coup Double', type: PokemonElementType.normal, power: 35, description: 'Un coup de queue ou de liane qui frappe l’ennemi deux fois d’affilée.' },
      { name: 'Ruse', type: PokemonElementType.normal, power: 30, description: 'Une attaque capable de toucher un ennemi qui utilise Détection ou Abri. Annule aussi leur effet.' },
    ],
  },
  shuckle: {
    flavorText: 'Il stocke des Baies sous sa carapace. Elles fermentent et produisent des jus délicieux.',
    stats: { hp: 20, attack: 10, defense: 230, specialAttack: 10, specialDefense: 230, speed: 5 },
    moves: [
      { name: 'Astuce Force', type: PokemonElementType.psychic, power: null, description: 'Le lanceur utilise ses pouvoirs psychiques pour échanger sa stat Défense et sa stat Attaque.' },
      { name: 'Constriction', type: PokemonElementType.normal, power: 10, description: 'De longs tentacules ou lianes attaquent l’ennemi. Peut aussi baisser sa Vitesse.' },
      { name: 'Repli', type: PokemonElementType.water, power: null, description: 'Le lanceur se recroqueville dans sa carapace, ce qui augmente sa Défense.' },
      { name: 'Ligotage', type: PokemonElementType.normal, power: 15, description: 'Le lanceur ligote l’ennemi avec des lianes ou son corps pour l’écraser durant 4 à 5 tours.' },
    ],
  },
  heracross: {
    flavorText: 'Il défend vaillamment sa réserve de miel personnelle à grand renfort de coups de corne.',
    stats: { hp: 80, attack: 125, defense: 75, specialAttack: 40, specialDefense: 95, speed: 85 },
    moves: [
      { name: 'Koud’Korne', type: PokemonElementType.normal, power: 65, description: 'Frappe l’ennemi d’un coup de corne pointue pour infliger des dégâts.' },
      { name: 'Mégacorne', type: PokemonElementType.bug, power: 120, description: 'Le lanceur utilise ses gigantesques cornes pour charger l’ennemi.' },
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
      { name: 'Ruse', type: PokemonElementType.normal, power: 30, description: 'Une attaque capable de toucher un ennemi qui utilise Détection ou Abri. Annule aussi leur effet.' },
    ],
  },
  sneasel: {
    flavorText: 'Ce Pokémon rusé agit parfois en équipe pour voler des œufs, l’un d’entre eux faisant diversion.',
    stats: { hp: 55, attack: 95, defense: 55, specialAttack: 35, specialDefense: 75, speed: 115 },
    moves: [
      { name: 'Éclats Glace', type: PokemonElementType.ice, power: 40, description: 'Le lanceur crée des éclats de glace qu’il envoie sur l’ennemi. Frappe toujours en premier.' },
      { name: 'Baston', type: PokemonElementType.dark, power: null, description: 'Le lanceur appelle tous les Pokémon de son équipe à attaquer. Plus ils sont nombreux, plus il y a d’attaques.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
    ],
  },
  teddiursa: {
    flavorText: 'Il baigne ses griffes dans le miel pour les lécher. Chaque paire de pattes a un goût unique.',
    stats: { hp: 60, attack: 80, defense: 50, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'Léchouille', type: PokemonElementType.ghost, power: 30, description: 'Un grand coup de langue qui inflige des dégâts à l’ennemi. Peut aussi le paralyser.' },
      { name: 'Doux Parfum', type: PokemonElementType.normal, power: null, description: 'Un doux parfum qui réduit l’Esquive de l’ennemi. Attire aussi les Pokémon sauvages.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
    ],
  },
  ursaring: {
    flavorText: 'Il marque de ses griffes les arbres de son territoire qui portent des Baies ou des fruits.',
    stats: { hp: 90, attack: 130, defense: 75, specialAttack: 75, specialDefense: 75, speed: 55 },
    moves: [
      { name: 'Léchouille', type: PokemonElementType.ghost, power: 30, description: 'Un grand coup de langue qui inflige des dégâts à l’ennemi. Peut aussi le paralyser.' },
      { name: 'Marto-Poing', type: PokemonElementType.fighting, power: 100, description: 'Le lanceur lâche un puissant coup de poing sur l’ennemi. Réduit la vitesse du lanceur.' },
      { name: 'Doux Parfum', type: PokemonElementType.normal, power: null, description: 'Un doux parfum qui réduit l’Esquive de l’ennemi. Attire aussi les Pokémon sauvages.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
    ],
  },
  slugma: {
    flavorText: 'Son corps est fait de magma. S’il cesse de bouger, il refroidit et durcit.',
    stats: { hp: 40, attack: 40, defense: 40, specialAttack: 70, specialDefense: 40, speed: 20 },
    moves: [
      { name: 'Ébullilave', type: PokemonElementType.fire, power: 80, description: 'Des boules de feu s’abattent sur tous les Pokémon autour du lanceur. Peut aussi brûler.' },
      { name: 'Purédpois', type: PokemonElementType.poison, power: 30, description: 'Le lanceur attaque à l’aide d’une éruption de gaz répugnants. Peut aussi empoisonner l’ennemi.' },
      { name: 'Jet-Pierres', type: PokemonElementType.rock, power: 50, description: 'Le lanceur lâche une pierre sur l’ennemi.' },
      { name: 'Soin', type: PokemonElementType.normal, power: null, description: 'Un soin qui permet au lanceur de récupérer jusqu’à la moitié de ses PV max.' },
    ],
  },
  magcargo: {
    flavorText: 'Sa température corporelle avoisine les 10 000 °C. Des flammes fusent des fissures de sa coquille.',
    stats: { hp: 60, attack: 50, defense: 120, specialAttack: 90, specialDefense: 80, speed: 30 },
    moves: [
      { name: 'Ébullilave', type: PokemonElementType.fire, power: 80, description: 'Des boules de feu s’abattent sur tous les Pokémon autour du lanceur. Peut aussi brûler.' },
      { name: 'Purédpois', type: PokemonElementType.poison, power: 30, description: 'Le lanceur attaque à l’aide d’une éruption de gaz répugnants. Peut aussi empoisonner l’ennemi.' },
      { name: 'Jet-Pierres', type: PokemonElementType.rock, power: 50, description: 'Le lanceur lâche une pierre sur l’ennemi.' },
      { name: 'Soin', type: PokemonElementType.normal, power: null, description: 'Un soin qui permet au lanceur de récupérer jusqu’à la moitié de ses PV max.' },
    ],
  },
  swinub: {
    flavorText: 'Son nez très sensible détecte champignons, Baies et sources chaudes enfouis sous la glace.',
    stats: { hp: 50, attack: 50, defense: 40, specialAttack: 30, specialDefense: 30, speed: 50 },
    moves: [
      { name: 'Boue-Bombe', type: PokemonElementType.ground, power: 65, description: 'Le lanceur attaque à l’aide d’une boule de boue solidifiée. Peut aussi baisser la Précision de l’ennemi.' },
      { name: 'Éclats Glace', type: PokemonElementType.ice, power: 40, description: 'Le lanceur crée des éclats de glace qu’il envoie sur l’ennemi. Frappe toujours en premier.' },
      { name: 'Poudreuse', type: PokemonElementType.ice, power: 40, description: 'Le lanceur projette de la neige poudreuse. Peut aussi geler l’ennemi.' },
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
    ],
  },
  piloswine: {
    flavorText: 'Il est protégé du froid mordant par son épais manteau de fourrure. Ses cornes sont formées de glace.',
    stats: { hp: 100, attack: 100, defense: 80, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'Boue-Bombe', type: PokemonElementType.ground, power: 65, description: 'Le lanceur attaque à l’aide d’une boule de boue solidifiée. Peut aussi baisser la Précision de l’ennemi.' },
      { name: 'Poudreuse', type: PokemonElementType.ice, power: 40, description: 'Le lanceur projette de la neige poudreuse. Peut aussi geler l’ennemi.' },
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
    ],
  },
  corsola: {
    flavorText: 'On en trouve beaucoup dans les mers claires du sud. On dirait qu’il ne peut pas vivre en eau polluée.',
    stats: { hp: 65, attack: 55, defense: 95, specialAttack: 65, specialDefense: 95, speed: 35 },
    moves: [
      { name: 'Picanon', type: PokemonElementType.normal, power: 20, description: 'Envoie une rafale de dards. Peut toucher de 2 à 5 fois.' },
      { name: 'Air Veinard', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie une incantation vers le ciel pour empêcher l’ennemi d’effectuer des coups critiques.' },
      { name: 'Régénération', type: PokemonElementType.normal, power: null, description: 'Le lanceur se repose pour guérir d’un empoisonnement, d’une brûlure ou d’une paralysie.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
    ],
  },
  remoraid: {
    flavorText: 'Son puissant jet d’eau ne manque jamais sa cible, même à 100 m de distance.',
    stats: { hp: 35, attack: 65, defense: 35, specialAttack: 65, specialDefense: 35, speed: 65 },
    moves: [
      { name: 'Verrouillage', type: PokemonElementType.normal, power: null, description: 'Verrouille l’ennemi pour ne pas le rater au tour suivant.' },
      { name: 'Onde Boréale', type: PokemonElementType.ice, power: 65, description: 'Envoie un rayon arc-en-ciel sur l’ennemi. Peut aussi baisser son Attaque.' },
      { name: 'Bulles d’O', type: PokemonElementType.water, power: 65, description: 'Des bulles sont envoyées avec puissance sur l’ennemi. Peut aussi baisser sa Vitesse.' },
      { name: 'Rafale Psy', type: PokemonElementType.psychic, power: 65, description: 'Un étrange rayon frappe l’ennemi. Peut aussi le rendre confus.' },
    ],
  },
  octillery: {
    flavorText: 'Il adore se cacher dans les fissures de la roche. Il crache parfois de l’encre sur ses proies.',
    stats: { hp: 75, attack: 105, defense: 75, specialAttack: 105, specialDefense: 75, speed: 45 },
    moves: [
      { name: 'Octazooka', type: PokemonElementType.water, power: 65, description: 'Le lanceur attaque en projetant de l’encre au visage de l’ennemi. Peut aussi baisser la Précision de l’ennemi.' },
      { name: 'Constriction', type: PokemonElementType.normal, power: 10, description: 'De longs tentacules ou lianes attaquent l’ennemi. Peut aussi baisser sa Vitesse.' },
      { name: 'Essorage', type: PokemonElementType.normal, power: null, description: 'Le lanceur essore l’ennemi. Plus l’ennemi a de PV, plus cette attaque est puissante.' },
      { name: 'Onde Boréale', type: PokemonElementType.ice, power: 65, description: 'Envoie un rayon arc-en-ciel sur l’ennemi. Peut aussi baisser son Attaque.' },
    ],
  },
  delibird: {
    flavorText: 'Il dépose sa nourriture dans sa queue enroulée. Il l’offre souvent aux gens égarés en montagne.',
    stats: { hp: 45, attack: 55, defense: 45, specialAttack: 65, specialDefense: 45, speed: 75 },
    moves: [
      { name: 'Cadeau', type: PokemonElementType.normal, power: null, description: 'Le lanceur attaque en offrant un cadeau piégé à la cible. Peut à l’inverse restaurer certains de ses PV.' },
    ],
  },
  mantine: {
    flavorText: 'Il ignore royalement les Rémoraid qui s’accrochent à ses nageoires pour manger les restes qu’il sème.',
    stats: { hp: 85, attack: 40, defense: 70, specialAttack: 80, specialDefense: 140, speed: 70 },
    moves: [
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
      { name: 'Anneau Hydro', type: PokemonElementType.water, power: null, description: 'Un voile liquide enveloppe le lanceur. Il récupère des PV à chaque tour.' },
      { name: 'Ultrason', type: PokemonElementType.normal, power: null, description: 'Le lanceur produit d’étranges ondes sonores qui rendent confus.' },
    ],
  },
  skarmory: {
    flavorText: 'Son corps est prisonnier d’une armure dure comme l’acier, mais il vole à plus de 300 km/h.',
    stats: { hp: 65, attack: 80, defense: 140, specialAttack: 40, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
      { name: 'Strido-Son', type: PokemonElementType.steel, power: null, description: 'Un cri horrible tel un crissement métallique qui réduit fortement la Défense Spéciale de l’ennemi.' },
      { name: 'Picpic', type: PokemonElementType.flying, power: 35, description: 'Frappe l’ennemi d’un bec pointu ou d’une corne pour infliger des dégâts.' },
      { name: 'Picots', type: PokemonElementType.ground, power: null, description: 'Le lanceur disperse des piquants sur le sol pour blesser tout ennemi qui entre au combat.' },
    ],
  },
  houndour: {
    flavorText: 'Il est assez évolué pour chasser en meute et communiquer par des séries de cris modulés.',
    stats: { hp: 45, attack: 60, defense: 30, specialAttack: 80, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'Purédpois', type: PokemonElementType.poison, power: 30, description: 'Le lanceur attaque à l’aide d’une éruption de gaz répugnants. Peut aussi empoisonner l’ennemi.' },
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Grondement', type: PokemonElementType.normal, power: null, description: 'Le lanceur hurle pour se rassurer, ce qui augmente son Attaque.' },
      { name: 'Baston', type: PokemonElementType.dark, power: null, description: 'Le lanceur appelle tous les Pokémon de son équipe à attaquer. Plus ils sont nombreux, plus il y a d’attaques.' },
    ],
  },
  houndoom: {
    flavorText: 'En colère, il crache des flammes contenant une toxine qui peut causer des dégâts irréversibles.',
    stats: { hp: 75, attack: 90, defense: 50, specialAttack: 110, specialDefense: 80, speed: 95 },
    moves: [
      { name: 'Purédpois', type: PokemonElementType.poison, power: 30, description: 'Le lanceur attaque à l’aide d’une éruption de gaz répugnants. Peut aussi empoisonner l’ennemi.' },
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Grondement', type: PokemonElementType.normal, power: null, description: 'Le lanceur hurle pour se rassurer, ce qui augmente son Attaque.' },
      { name: 'Baston', type: PokemonElementType.dark, power: null, description: 'Le lanceur appelle tous les Pokémon de son équipe à attaquer. Plus ils sont nombreux, plus il y a d’attaques.' },
    ],
  },
  phanpy: {
    flavorText: 'Il est fort malgré son aspect ramassé. Il n’a aucun mal à porter un humain adulte sur son dos.',
    stats: { hp: 90, attack: 60, defense: 60, specialAttack: 40, specialDefense: 40, speed: 40 },
    moves: [
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Souplesse', type: PokemonElementType.normal, power: 80, description: 'Fouette l’ennemi avec la queue, une liane, etc. pour infliger des dégâts.' },
      { name: 'Dernier Recours', type: PokemonElementType.normal, power: 140, description: 'Cette capacité ne peut être utilisée qu’après que le lanceur a utilisé toutes les autres.' },
      { name: 'Gigotage', type: PokemonElementType.normal, power: null, description: 'Le lanceur fait tournoyer son fléau. Plus ses PV sont bas, plus l’attaque est puissante.' },
    ],
  },
  kingdra: {
    flavorText: 'Chacun de ses déplacements provoque des tourbillons. Il vit dans les grottes sous-marines.',
    stats: { hp: 75, attack: 95, defense: 95, specialAttack: 95, specialDefense: 95, speed: 85 },
    moves: [
      { name: 'Brouillard', type: PokemonElementType.normal, power: null, description: 'Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
      { name: 'Danse Draco', type: PokemonElementType.dragon, power: null, description: 'Une danse mystique dont le rythme effréné augmente l’Attaque et la Vitesse du lanceur.' },
      { name: 'Ouragan', type: PokemonElementType.dragon, power: 40, description: 'Déclenche un terrible ouragan sur l’ennemi. Peut aussi l’apeurer.' },
    ],
  },
  donphan: {
    flavorText: 'Il attaque en se roulant en boule pour percuter l’ennemi. Il peut abattre une maison d’un seul coup.',
    stats: { hp: 90, attack: 120, defense: 120, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'Koud’Korne', type: PokemonElementType.normal, power: 65, description: 'Frappe l’ennemi d’un coup de corne pointue pour infliger des dégâts.' },
      { name: 'Ampleur', type: PokemonElementType.ground, power: null, description: 'Un tremblement de terre d’intensité variable qui affecte tous les Pokémon alentour. L’efficacité varie.' },
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
      { name: 'Tour Rapide', type: PokemonElementType.normal, power: 50, description: 'Une attaque tournoyante pouvant aussi annuler par ex. Étreinte, Ligotage, Vampigraine ou Picots.' },
    ],
  },
  porygon2: {
    flavorText: 'Il a subi une mise à jour censée lui permettre d’explorer d’autres planètes... C’est un échec.',
    stats: { hp: 85, attack: 80, defense: 90, specialAttack: 105, specialDefense: 95, speed: 60 },
    moves: [
      { name: 'Conversion', type: PokemonElementType.normal, power: null, description: 'Le lanceur change de type pour prendre celui de l’une de ses capacités.' },
      { name: 'Conversion 2', type: PokemonElementType.normal, power: null, description: 'Le lanceur change de type pour être résistant au type de la dernière attaque lancée par sa cible.' },
      { name: 'Verrouillage', type: PokemonElementType.normal, power: null, description: 'Verrouille l’ennemi pour ne pas le rater au tour suivant.' },
      { name: 'Triplattaque', type: PokemonElementType.normal, power: 80, description: 'Le lanceur envoie trois boules d’énergie simultanément. Peut aussi paralyser, brûler ou geler l’ennemi.' },
    ],
  },
  stantler: {
    flavorText: 'Quiconque observe ses antennes ressent une sensation étrange, comme si leur centre l’attirait.',
    stats: { hp: 73, attack: 95, defense: 62, specialAttack: 85, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'Moi d’Abord', type: PokemonElementType.normal, power: null, description: 'Le lanceur vole la capacité prévue par l’ennemi et l’utilise en faisant plus de dégâts. Il doit frapper en premier.' },
      { name: 'Écrasement', type: PokemonElementType.normal, power: 65, description: 'Écrase l’ennemi avec un énorme pied. Peut aussi l’apeurer.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
    ],
  },
  smeargle: {
    flavorText: 'Il marque son territoire en maniant sa queue comme un pinceau. On dénombre plus de 5 000 marques.',
    stats: { hp: 55, attack: 20, defense: 35, specialAttack: 20, specialDefense: 45, speed: 75 },
    moves: [
      { name: 'Gribouille', type: PokemonElementType.normal, power: null, description: 'Le lanceur apprend le dernier coup utilisé par la cible. Gribouille disparaît après utilisation.' },
    ],
  },
  tyrogue: {
    flavorText: 'Il est réputé pour sa combativité. Il se blesse toujours en défiant des ennemis plus grands.',
    stats: { hp: 35, attack: 35, defense: 35, specialAttack: 35, specialDefense: 35, speed: 35 },
    moves: [
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Bluff', type: PokemonElementType.normal, power: 40, description: 'Permet de frapper en premier et apeure l’ennemi. Ne fonctionne qu’au premier tour.' },
      { name: 'Charge', type: PokemonElementType.normal, power: 40, description: 'Le lanceur charge l’ennemi et le percute de tout son corps.' },
      { name: 'Coup d’Main', type: PokemonElementType.normal, power: null, description: 'Une capacité qui augmente la puissance d’attaque de l’allié pendant un tour.' },
    ],
  },
  hitmontop: {
    flavorText: 'Il combat en tournoyant comme une toupie. La force centrifuge décuple sa puissance destructrice.',
    stats: { hp: 50, attack: 95, defense: 95, specialAttack: 35, specialDefense: 110, speed: 70 },
    moves: [
      { name: 'Triple Pied', type: PokemonElementType.fighting, power: 10, description: 'Une salve de 1 à 3 coups de pied dont la puissance augmente à chaque coup porté.' },
      { name: 'Mawashi Geri', type: PokemonElementType.fighting, power: 60, description: 'Le lanceur effectue un coup de pied tournoyant et extrêmement rapide. Peut apeurer l’ennemi.' },
      { name: 'Tour Rapide', type: PokemonElementType.normal, power: 50, description: 'Une attaque tournoyante pouvant aussi annuler par ex. Étreinte, Ligotage, Vampigraine ou Picots.' },
      { name: 'Ruse', type: PokemonElementType.normal, power: 30, description: 'Une attaque capable de toucher un ennemi qui utilise Détection ou Abri. Annule aussi leur effet.' },
    ],
  },
  smoochum: {
    flavorText: 'Il goûte à tout du bout des lèvres. Elles gardent en mémoire ses goûts et ses dégoûts.',
    stats: { hp: 45, attack: 30, defense: 15, specialAttack: 85, specialDefense: 65, speed: 65 },
    moves: [
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
      { name: 'Air Veinard', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie une incantation vers le ciel pour empêcher l’ennemi d’effectuer des coups critiques.' },
      { name: 'Berceuse', type: PokemonElementType.normal, power: null, description: 'Une berceuse plonge l’ennemi dans un profond sommeil.' },
      { name: 'Poudreuse', type: PokemonElementType.ice, power: 40, description: 'Le lanceur projette de la neige poudreuse. Peut aussi geler l’ennemi.' },
    ],
  },
  magby: {
    flavorText: 'Son sang est chaud comme du magma et la température de son corps peut atteindre 600 °C.',
    stats: { hp: 45, attack: 75, defense: 37, specialAttack: 70, specialDefense: 55, speed: 83 },
    moves: [
      { name: 'Ébullilave', type: PokemonElementType.fire, power: 80, description: 'Des boules de feu s’abattent sur tous les Pokémon autour du lanceur. Peut aussi brûler.' },
      { name: 'Purédpois', type: PokemonElementType.poison, power: 30, description: 'Le lanceur attaque à l’aide d’une éruption de gaz répugnants. Peut aussi empoisonner l’ennemi.' },
      { name: 'Brouillard', type: PokemonElementType.normal, power: null, description: 'Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
    ],
  },
  elekid: {
    flavorText: 'Un faible courant électrique circule entre ses cornes. Attention à ne pas y mettre la main!',
    stats: { hp: 45, attack: 63, defense: 37, specialAttack: 65, specialDefense: 55, speed: 95 },
    moves: [
      { name: 'Éclair', type: PokemonElementType.electric, power: 40, description: 'Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Coup d’Jus', type: PokemonElementType.electric, power: 80, description: 'Un flamboiement d’électricité frappe tous les Pokémon autour du lanceur. Peut aussi paralyser.' },
      { name: 'Vive-Attaque', type: PokemonElementType.normal, power: 40, description: 'Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en premier.' },
      { name: 'Grincement', type: PokemonElementType.normal, power: null, description: 'Cri strident qui baisse beaucoup la Défense ennemie.' },
    ],
  },
  miltank: {
    flavorText: 'On raconte que les enfants élevés au lait d’Écrémeuh deviennent des adultes braves et robustes.',
    stats: { hp: 95, attack: 80, defense: 105, specialAttack: 40, specialDefense: 70, speed: 100 },
    moves: [
      { name: 'Lait à Boire', type: PokemonElementType.normal, power: null, description: 'Le lanceur récupère jusqu’à la moitié de ses PV max. En dehors des combats, permet de transférer des PV du lanceur à un allié.' },
      { name: 'Réveil Forcé', type: PokemonElementType.fighting, power: 70, description: 'Cette attaque inflige d’importants dégâts à un Pokémon endormi. Mais elle le réveille également.' },
      { name: 'Écrasement', type: PokemonElementType.normal, power: 65, description: 'Écrase l’ennemi avec un énorme pied. Peut aussi l’apeurer.' },
      { name: 'Glas de Soin', type: PokemonElementType.normal, power: null, description: 'Carillon apaisant qui soigne les problèmes de statut de tous les Pokémon de l’équipe.' },
    ],
  },
  blissey: {
    flavorText: 'Les œufs que pond Leuphorie sont un concentré de bonheur dont une bouchée suffit à apporter la joie.',
    stats: { hp: 255, attack: 10, defense: 10, specialAttack: 75, specialDefense: 135, speed: 55 },
    moves: [
      { name: 'Bombe Œuf', type: PokemonElementType.normal, power: 100, description: 'De toutes ses forces, le lanceur jette un gros œuf sur l’ennemi pour lui infliger des dégâts.' },
      { name: 'E-Coque', type: PokemonElementType.normal, power: null, description: 'Le lanceur récupère jusqu’à la moitié de ses PV max. En dehors des combats, permet de transférer des PV du lanceur à un allié.' },
      { name: 'Lilliput', type: PokemonElementType.normal, power: null, description: 'Le lanceur comprime son corps pour se faire tout petit et augmenter fortement son Esquive.' },
      { name: 'Vœu Soin', type: PokemonElementType.psychic, power: null, description: 'Le lanceur tombe K.O. pour soigner les PV et le statut du Pokémon qui passe après lui.' },
    ],
  },
  raikou: {
    flavorText: 'On prétend qu’il est tombé avec la foudre. Il peut lancer des éclairs grâce aux nuages sur son dos.',
    stats: { hp: 90, attack: 85, defense: 75, specialAttack: 115, specialDefense: 100, speed: 115 },
    moves: [
      { name: 'Extrasenseur', type: PokemonElementType.psychic, power: 80, description: 'Le lanceur attaque avec un pouvoir étrange et invisible. Peut aussi apeurer l’ennemi.' },
      { name: 'Étincelle', type: PokemonElementType.electric, power: 65, description: 'Lance une charge électrique sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Éclair', type: PokemonElementType.electric, power: 40, description: 'Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Coup d’Jus', type: PokemonElementType.electric, power: 80, description: 'Un flamboiement d’électricité frappe tous les Pokémon autour du lanceur. Peut aussi paralyser.' },
    ],
  },
  entei: {
    flavorText: 'On raconte qu’à chaque fois qu’il rugit, un volcan entre en éruption quelque part.',
    stats: { hp: 115, attack: 115, defense: 85, specialAttack: 90, specialDefense: 75, speed: 100 },
    moves: [
      { name: 'Éruption', type: PokemonElementType.fire, power: 150, description: 'Le lanceur laisse exploser sa colère. Plus ses PV sont bas et moins l’attaque est puissante.' },
      { name: 'Ébullilave', type: PokemonElementType.fire, power: 80, description: 'Des boules de feu s’abattent sur tous les Pokémon autour du lanceur. Peut aussi brûler.' },
      { name: 'Écrasement', type: PokemonElementType.normal, power: 65, description: 'Écrase l’ennemi avec un énorme pied. Peut aussi l’apeurer.' },
      { name: 'Extrasenseur', type: PokemonElementType.psychic, power: 80, description: 'Le lanceur attaque avec un pouvoir étrange et invisible. Peut aussi apeurer l’ennemi.' },
    ],
  },
  suicune: {
    flavorText: 'Il parcourt le vaste monde pour purifier les eaux polluées. Il accompagne le vent du nord.',
    stats: { hp: 100, attack: 75, defense: 115, specialAttack: 90, specialDefense: 115, speed: 85 },
    moves: [
      { name: 'Onde Boréale', type: PokemonElementType.ice, power: 65, description: 'Envoie un rayon arc-en-ciel sur l’ennemi. Peut aussi baisser son Attaque.' },
      { name: 'Tornade', type: PokemonElementType.flying, power: 40, description: 'Le lanceur bat des ailes pour générer une bourrasque qui blesse l’ennemi.' },
      { name: 'Voile Miroir', type: PokemonElementType.psychic, power: null, description: 'Une riposte qui contre n’importe quelle attaque spéciale en infligeant le double des dégâts subis.' },
      { name: 'Extrasenseur', type: PokemonElementType.psychic, power: 80, description: 'Le lanceur attaque avec un pouvoir étrange et invisible. Peut aussi apeurer l’ennemi.' },
    ],
  },
  larvitar: {
    flavorText: 'Un Pokémon qui se nourrit de terre. Après avoir dévoré une montagne, il s’endort pour grandir.',
    stats: { hp: 50, attack: 64, defense: 50, specialAttack: 45, specialDefense: 50, speed: 41 },
    moves: [
      { name: 'Mania', type: PokemonElementType.normal, power: 120, description: 'Une attaque furieuse qui dure de 2 à 3 tours. Le lanceur devient confus.' },
      { name: 'Vibrobscur', type: PokemonElementType.dark, power: 80, description: 'Le lanceur dégage une horrible aura chargée d’idées noires. Peut aussi apeurer l’ennemi.' },
      { name: 'Grincement', type: PokemonElementType.normal, power: null, description: 'Cri strident qui baisse beaucoup la Défense ennemie.' },
      { name: 'Morsure', type: PokemonElementType.dark, power: 60, description: 'L’ennemi est mordu par de tranchantes canines. Peut l’apeurer.' },
    ],
  },
  pupitar: {
    flavorText: 'Son corps est dur comme la pierre souterraine. Il file comme une fusée en expulsant des gaz.',
    stats: { hp: 70, attack: 84, defense: 70, specialAttack: 65, specialDefense: 70, speed: 51 },
    moves: [
      { name: 'Mania', type: PokemonElementType.normal, power: 120, description: 'Une attaque furieuse qui dure de 2 à 3 tours. Le lanceur devient confus.' },
      { name: 'Vibrobscur', type: PokemonElementType.dark, power: 80, description: 'Le lanceur dégage une horrible aura chargée d’idées noires. Peut aussi apeurer l’ennemi.' },
      { name: 'Grincement', type: PokemonElementType.normal, power: null, description: 'Cri strident qui baisse beaucoup la Défense ennemie.' },
      { name: 'Morsure', type: PokemonElementType.dark, power: 60, description: 'L’ennemi est mordu par de tranchantes canines. Peut l’apeurer.' },
    ],
  },
  tyranitar: {
    flavorText: 'Lorsqu’il est en colère, il abat des montagnes et enterre des fleuves. On doit alors modifier les cartes.',
    stats: { hp: 100, attack: 134, defense: 110, specialAttack: 95, specialDefense: 100, speed: 61 },
    moves: [
      { name: 'Crocs Éclair', type: PokemonElementType.electric, power: 65, description: 'Le lanceur utilise une morsure électrifiée. Peut aussi paralyser ou apeurer l’ennemi.' },
      { name: 'Crocs Givre', type: PokemonElementType.ice, power: 65, description: 'Le lanceur utilise une morsure glaciale. Peut aussi geler ou apeurer l’ennemi.' },
      { name: 'Mania', type: PokemonElementType.normal, power: 120, description: 'Une attaque furieuse qui dure de 2 à 3 tours. Le lanceur devient confus.' },
      { name: 'Crocs Feu', type: PokemonElementType.fire, power: 65, description: 'Le lanceur utilise une morsure enflammée. Peut aussi brûler ou apeurer l’ennemi.' },
    ],
  },
  lugia: {
    flavorText: 'Il dort dans une faille des grands fonds. Ses battements d’ailes génèrent une tempête de 40 jours.',
    stats: { hp: 106, attack: 90, defense: 130, specialAttack: 90, specialDefense: 154, speed: 110 },
    moves: [
      { name: 'Aéroblast', type: PokemonElementType.flying, power: 100, description: 'Le lanceur projette une tornade sur l’ennemi pour infliger des dégâts. Taux de critiques élevé.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Draco-Charge', type: PokemonElementType.dragon, power: 100, description: 'Le lanceur frappe l’ennemi d’un air menaçant. Peut aussi apeurer l’ennemi.' },
      { name: 'Tornade', type: PokemonElementType.flying, power: 40, description: 'Le lanceur bat des ailes pour générer une bourrasque qui blesse l’ennemi.' },
    ],
  },
  hooh: {
    flavorText: 'Ses plumes possèdent sept couleurs. On prétend que sa vue apporte la joie éternelle.',
    stats: { hp: 106, attack: 130, defense: 90, specialAttack: 110, specialDefense: 154, speed: 90 },
    moves: [
      { name: 'Feu Sacré', type: PokemonElementType.fire, power: 100, description: 'Un feu mystique d’une intensité redoutable attaque l’ennemi. Peut aussi le brûler.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Tornade', type: PokemonElementType.flying, power: 40, description: 'Le lanceur bat des ailes pour générer une bourrasque qui blesse l’ennemi.' },
      { name: 'Cyclone', type: PokemonElementType.normal, power: null, description: 'Éjecte le Pokémon ennemi et le remplace par un autre. Dans la nature, met fin au combat.' },
    ],
  },
  celebi: {
    flavorText: 'Il a le pouvoir de voyager dans le temps. Cependant, on dit qu’il n’apparaît qu’en temps de paix.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Anti-Soin', type: PokemonElementType.psychic, power: null, description: 'Le lanceur empêche l’ennemi d’utiliser ses capacités, cap. spé. ou objets tenus pour récupérer des PV pendant 5 tours.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
      { name: 'Vœu Soin', type: PokemonElementType.psychic, power: null, description: 'Le lanceur tombe K.O. pour soigner les PV et le statut du Pokémon qui passe après lui.' },
      { name: 'Soin', type: PokemonElementType.normal, power: null, description: 'Un soin qui permet au lanceur de récupérer jusqu’à la moitié de ses PV max.' },
    ],
  },
  treecko: {
    flavorText: 'Ses plantes de pieds sont couvertes d’épines lui permettant de marcher au mur et au plafond.',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 65, specialDefense: 55, speed: 70 },
    moves: [
      { name: 'Vole-Vie', type: PokemonElementType.grass, power: 20, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
      { name: 'Méga-Sangsue', type: PokemonElementType.grass, power: 40, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
      { name: 'Écras’Face', type: PokemonElementType.normal, power: 40, description: 'Écrase l’ennemi avec les pattes avant, la queue, etc.' },
      { name: 'Souplesse', type: PokemonElementType.normal, power: 80, description: 'Fouette l’ennemi avec la queue, une liane, etc. pour infliger des dégâts.' },
    ],
  },
  grovyle: {
    flavorText: 'Il vit dans les jungles denses. Il saute de branche en branche pour approcher de sa proie.',
    stats: { hp: 50, attack: 65, defense: 45, specialAttack: 85, specialDefense: 65, speed: 95 },
    moves: [
      { name: 'Lame Feuille', type: PokemonElementType.grass, power: 90, description: 'Une feuille coupante comme une lame entaille l’ennemi. Taux de critiques élevé.' },
      { name: 'Vole-Vie', type: PokemonElementType.grass, power: 20, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
      { name: 'Écras’Face', type: PokemonElementType.normal, power: 40, description: 'Écrase l’ennemi avec les pattes avant, la queue, etc.' },
      { name: 'Souplesse', type: PokemonElementType.normal, power: 80, description: 'Fouette l’ennemi avec la queue, une liane, etc. pour infliger des dégâts.' },
    ],
  },
  sceptile: {
    flavorText: 'Les feuilles sur ses bras peuvent trancher des troncs épais. C’est le meilleur combattant des jungles.',
    stats: { hp: 70, attack: 85, defense: 65, specialAttack: 105, specialDefense: 85, speed: 120 },
    moves: [
      { name: 'Lame Feuille', type: PokemonElementType.grass, power: 90, description: 'Une feuille coupante comme une lame entaille l’ennemi. Taux de critiques élevé.' },
      { name: 'Vole-Vie', type: PokemonElementType.grass, power: 20, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
      { name: 'Écras’Face', type: PokemonElementType.normal, power: 40, description: 'Écrase l’ennemi avec les pattes avant, la queue, etc.' },
      { name: 'Souplesse', type: PokemonElementType.normal, power: 80, description: 'Fouette l’ennemi avec la queue, une liane, etc. pour infliger des dégâts.' },
    ],
  },
  torchic: {
    flavorText: 'Ses câlins réchauffent car il renferme une fournaise. Il envoie des boules de feu à 1 000 °C.',
    stats: { hp: 45, attack: 60, defense: 40, specialAttack: 70, specialDefense: 50, speed: 45 },
    moves: [
      { name: 'Mimique', type: PokemonElementType.flying, power: null, description: 'Le lanceur riposte à l’attaque de l’ennemi avec la même attaque.' },
      { name: 'Picpic', type: PokemonElementType.flying, power: 35, description: 'Frappe l’ennemi d’un bec pointu ou d’une corne pour infliger des dégâts.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Danse Flammes', type: PokemonElementType.fire, power: 35, description: 'Un tourbillon de flammes emprisonne l’ennemi pendant 4 à 5 tours.' },
    ],
  },
  combusken: {
    flavorText: 'Ce maître du coup de pied peut donner 10 coups par seconde. Ses cris aigus intimident l’ennemi.',
    stats: { hp: 60, attack: 85, defense: 60, specialAttack: 85, specialDefense: 60, speed: 55 },
    moves: [
      { name: 'Stratopercut', type: PokemonElementType.fighting, power: 85, description: 'Le lanceur attaque avec un uppercut. Il envoie son poing vers le ciel de toutes ses forces.' },
      { name: 'Mimique', type: PokemonElementType.flying, power: null, description: 'Le lanceur riposte à l’attaque de l’ennemi avec la même attaque.' },
      { name: 'Double Pied', type: PokemonElementType.fighting, power: 30, description: 'Deux coups de pied qui frappent l’ennemi deux fois d’affilée.' },
      { name: 'Picpic', type: PokemonElementType.flying, power: 35, description: 'Frappe l’ennemi d’un bec pointu ou d’une corne pour infliger des dégâts.' },
    ],
  },
  blaziken: {
    flavorText: 'Des flammes fusent de ses poignets et ses coups brûlent l’ennemi.',
    stats: { hp: 80, attack: 120, defense: 70, specialAttack: 110, specialDefense: 70, speed: 80 },
    moves: [
      { name: 'Stratopercut', type: PokemonElementType.fighting, power: 85, description: 'Le lanceur attaque avec un uppercut. Il envoie son poing vers le ciel de toutes ses forces.' },
      { name: 'Pied Brûleur', type: PokemonElementType.fire, power: 85, description: 'Le lanceur envoie un coup de pied au taux de critiques élevé. Peut aussi brûler la cible.' },
      { name: 'Mimique', type: PokemonElementType.flying, power: null, description: 'Le lanceur riposte à l’attaque de l’ennemi avec la même attaque.' },
      { name: 'Double Pied', type: PokemonElementType.fighting, power: 30, description: 'Deux coups de pied qui frappent l’ennemi deux fois d’affilée.' },
    ],
  },
  marshtomp: {
    flavorText: 'Ses jambes robustes lui donnent un bon appui, même dans la boue. Il dort enfoui dans la saleté.',
    stats: { hp: 70, attack: 85, defense: 70, specialAttack: 60, specialDefense: 70, speed: 50 },
    moves: [
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Ocroupi', type: PokemonElementType.water, power: 90, description: 'Le lanceur attaque en projetant de l’eau boueuse. Peut aussi réduire la Précision de l’ennemi.' },
      { name: 'Pistolet à O', type: PokemonElementType.water, power: 40, description: 'De l’eau est projetée sur l’ennemi en arc de cercle.' },
    ],
  },
  mudkip: {
    flavorText: 'Il analyse le courant grâce à la nageoire sur sa tête. Il est assez fort pour soulever des rochers.',
    stats: { hp: 50, attack: 70, defense: 50, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Pistolet à O', type: PokemonElementType.water, power: 40, description: 'De l’eau est projetée sur l’ennemi en arc de cercle.' },
      { name: 'Siphon', type: PokemonElementType.water, power: 35, description: 'Piège l’ennemi dans une trombe d’eau pendant 4 à 5 tours.' },
    ],
  },
  swampert: {
    flavorText: 'Il peut traîner un grand bateau en nageant. Il assomme l’ennemi d’un grand coup de ses bras épais.',
    stats: { hp: 100, attack: 110, defense: 90, specialAttack: 85, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Ocroupi', type: PokemonElementType.water, power: 90, description: 'Le lanceur attaque en projetant de l’eau boueuse. Peut aussi réduire la Précision de l’ennemi.' },
      { name: 'Pistolet à O', type: PokemonElementType.water, power: 40, description: 'De l’eau est projetée sur l’ennemi en arc de cercle.' },
    ],
  },
  poochyena: {
    flavorText: 'Un Pokémon très obstiné qui poursuit sa proie jusqu’à ce qu’elle soit épuisée.',
    stats: { hp: 35, attack: 55, defense: 35, specialAttack: 30, specialDefense: 30, speed: 35 },
    moves: [
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Grondement', type: PokemonElementType.normal, power: null, description: 'Le lanceur hurle pour se rassurer, ce qui augmente son Attaque.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
      { name: 'Morsure', type: PokemonElementType.dark, power: 60, description: 'L’ennemi est mordu par de tranchantes canines. Peut l’apeurer.' },
    ],
  },
  mightyena: {
    flavorText: 'Il traque ses proies en groupe. Il ne désobéira jamais aux ordres d’un bon Dresseur.',
    stats: { hp: 70, attack: 90, defense: 70, specialAttack: 60, specialDefense: 60, speed: 70 },
    moves: [
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Grondement', type: PokemonElementType.normal, power: null, description: 'Le lanceur hurle pour se rassurer, ce qui augmente son Attaque.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
      { name: 'Morsure', type: PokemonElementType.dark, power: 60, description: 'L’ennemi est mordu par de tranchantes canines. Peut l’apeurer.' },
    ],
  },
  zigzagoon: {
    flavorText: 'Il marche en zigzaguant et n’a pas son pareil pour trouver des objets dans l’herbe ou sous terre.',
    stats: { hp: 38, attack: 30, defense: 41, specialAttack: 30, specialDefense: 41, speed: 60 },
    moves: [
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Cognobidon', type: PokemonElementType.normal, power: null, description: 'Améliore l’Attaque au maximum en sacrifiant la moitié des PV max.' },
      { name: 'Dard-Nuée', type: PokemonElementType.bug, power: 25, description: 'Envoie une rafale de dards. Peut toucher de 2 à 5 fois.' },
    ],
  },
  linoone: {
    flavorText: 'Il fonce sur sa proie à plus de 100 km/h. Mais il ne peut pas dévier sa course et loupe souvent sa cible.',
    stats: { hp: 78, attack: 70, defense: 61, specialAttack: 50, specialDefense: 61, speed: 100 },
    moves: [
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Cognobidon', type: PokemonElementType.normal, power: null, description: 'Améliore l’Attaque au maximum en sacrifiant la moitié des PV max.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
    ],
  },
  wurmple: {
    flavorText: 'Cible favorite des Pokémon Oiseaux, il tente de se protéger avec ses épines venimeuses.',
    stats: { hp: 45, attack: 45, defense: 35, specialAttack: 20, specialDefense: 30, speed: 20 },
    moves: [
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Sécrétion', type: PokemonElementType.bug, power: null, description: 'Le lanceur crache de la soie pour ligoter l’ennemi et baisser sa Vitesse.' },
      { name: 'Charge', type: PokemonElementType.normal, power: 40, description: 'Le lanceur charge l’ennemi et le percute de tout son corps.' },
    ],
  },
  silcoon: {
    flavorText: 'Il attend d’évoluer dans son cocon de soie accroché aux branches et se nourrit d’eau de pluie.',
    stats: { hp: 50, attack: 35, defense: 55, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
    ],
  },
  beautifly: {
    flavorText: 'Malgré les apparences, il est très agressif et attaque avec sa trompe quand on le dérange.',
    stats: { hp: 60, attack: 70, defense: 50, specialAttack: 100, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'Aurore', type: PokemonElementType.normal, power: null, description: 'Un soin qui restaure des PV au lanceur. Son efficacité varie en fonction de la météo.' },
      { name: 'Vent Argenté', type: PokemonElementType.bug, power: 60, description: 'Vent qui projette des écailles poudreuses sur l’ennemi. Peut aussi monter toutes les stats du lanceur.' },
      { name: 'Para-Spore', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand sur l’ennemi une poudre qui le paralyse.' },
      { name: 'Tornade', type: PokemonElementType.flying, power: 40, description: 'Le lanceur bat des ailes pour générer une bourrasque qui blesse l’ennemi.' },
    ],
  },
  cascoon: {
    flavorText: 'Rancunier, il n’oublie aucune des attaques subies dans le cocon et se venge une fois qu’il a évolué.',
    stats: { hp: 50, attack: 35, defense: 55, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
    ],
  },
  dustox: {
    flavorText: 'Il disperse un nuage de poudre toxique à chaque coup d’aile. Il aime les feuilles d’arbres urbains.',
    stats: { hp: 60, attack: 50, defense: 70, specialAttack: 50, specialDefense: 90, speed: 65 },
    moves: [
      { name: 'Rayon Lune', type: PokemonElementType.normal, power: null, description: 'Un soin qui restaure des PV au lanceur. Son efficacité varie en fonction de la météo.' },
      { name: 'Vent Argenté', type: PokemonElementType.bug, power: 60, description: 'Vent qui projette des écailles poudreuses sur l’ennemi. Peut aussi monter toutes les stats du lanceur.' },
      { name: 'Tornade', type: PokemonElementType.flying, power: 40, description: 'Le lanceur bat des ailes pour générer une bourrasque qui blesse l’ennemi.' },
      { name: 'Cyclone', type: PokemonElementType.normal, power: null, description: 'Éjecte le Pokémon ennemi et le remplace par un autre. Dans la nature, met fin au combat.' },
    ],
  },
  lotad: {
    flavorText: 'Il ressemble à une plante aquatique et fait la navette pour les Pokémon qui ne savent pas nager.',
    stats: { hp: 40, attack: 30, defense: 30, specialAttack: 40, specialDefense: 50, speed: 30 },
    moves: [
      { name: 'Brume', type: PokemonElementType.ice, power: null, description: 'Une brume blanche enveloppe l’équipe du lanceur et empêche la réduction des stats pour 5 tours.' },
      { name: 'Vole-Vie', type: PokemonElementType.grass, power: 20, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
      { name: 'Méga-Sangsue', type: PokemonElementType.grass, power: 40, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
      { name: 'Force Nature', type: PokemonElementType.normal, power: null, description: 'Une attaque qui tire sa force de la nature. Son type varie selon le terrain.' },
    ],
  },
  lombre: {
    flavorText: 'C’est un mauvais plaisantin. Quand il repère un pêcheur, il tire sur sa ligne pour le déranger.',
    stats: { hp: 60, attack: 50, defense: 50, specialAttack: 60, specialDefense: 70, speed: 50 },
    moves: [
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
      { name: 'Vole-Vie', type: PokemonElementType.grass, power: 20, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Bluff', type: PokemonElementType.normal, power: 40, description: 'Permet de frapper en premier et apeure l’ennemi. Ne fonctionne qu’au premier tour.' },
    ],
  },
  ludicolo: {
    flavorText: 'Ses muscles se tonifient au son d’une musique entraînante. Il ne peut pas s’empêcher de danser.',
    stats: { hp: 80, attack: 70, defense: 70, specialAttack: 90, specialDefense: 100, speed: 70 },
    moves: [
      { name: 'Vole-Vie', type: PokemonElementType.grass, power: 20, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
      { name: 'Force Nature', type: PokemonElementType.normal, power: null, description: 'Une attaque qui tire sa force de la nature. Son type varie selon le terrain.' },
      { name: 'Étonnement', type: PokemonElementType.ghost, power: 30, description: 'Le lanceur attaque l’ennemi en poussant un cri terrifiant. Peut aussi l’apeurer.' },
      { name: 'Rugissement', type: PokemonElementType.normal, power: null, description: 'Le lanceur pousse un cri tout mimi pour tromper la vigilance de l’ennemi et baisser son Attaque.' },
    ],
  },
  seedot: {
    flavorText: 'Il ressemble à un gland pendu à une branche. Il adore effrayer les autres Pokémon.',
    stats: { hp: 40, attack: 40, defense: 50, specialAttack: 30, specialDefense: 30, speed: 30 },
    moves: [
      { name: 'Croissance', type: PokemonElementType.normal, power: null, description: 'Le corps du lanceur se développe. Augmente l’Attaque et l’Attaque Spéciale.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
      { name: 'Synthèse', type: PokemonElementType.grass, power: null, description: 'Un soin qui restaure des PV au lanceur. Son efficacité varie en fonction de la météo.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'Le lanceur explose et inflige des dégâts à tous les Pokémon autour de lui. Met K.O. le lanceur.' },
    ],
  },
  nuzleaf: {
    flavorText: 'Le son de sa flûte d’herbe déstabilise l’auditeur. Il vit au plus profond des forêts.',
    stats: { hp: 70, attack: 70, defense: 40, specialAttack: 60, specialDefense: 40, speed: 60 },
    moves: [
      { name: 'Coupe-Vent', type: PokemonElementType.normal, power: 80, description: 'Attaque en 2 tours. Des lames de vent frappent l’ennemi au 2è tour. Taux de critiques élevé.' },
      { name: 'Extrasenseur', type: PokemonElementType.psychic, power: 80, description: 'Le lanceur attaque avec un pouvoir étrange et invisible. Peut aussi apeurer l’ennemi.' },
      { name: 'Croissance', type: PokemonElementType.normal, power: null, description: 'Le corps du lanceur se développe. Augmente l’Attaque et l’Attaque Spéciale.' },
      { name: 'Bluff', type: PokemonElementType.normal, power: 40, description: 'Permet de frapper en premier et apeure l’ennemi. Ne fonctionne qu’au premier tour.' },
    ],
  },
  shiftry: {
    flavorText: 'D’un coup de sa feuille éventail, il génère des bourrasques de 30 m/s capables de souffler une maison.',
    stats: { hp: 90, attack: 100, defense: 60, specialAttack: 90, specialDefense: 60, speed: 80 },
    moves: [
      { name: 'Croissance', type: PokemonElementType.normal, power: null, description: 'Le corps du lanceur se développe. Augmente l’Attaque et l’Attaque Spéciale.' },
      { name: 'Écras’Face', type: PokemonElementType.normal, power: 40, description: 'Écrase l’ennemi avec les pattes avant, la queue, etc.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
      { name: 'Force Nature', type: PokemonElementType.normal, power: null, description: 'Une attaque qui tire sa force de la nature. Son type varie selon le terrain.' },
    ],
  },
  taillow: {
    flavorText: 'Ce Pokémon téméraire n’a pas peur d’affronter des ennemis puissants. Il vole en quête de climats chauds.',
    stats: { hp: 40, attack: 55, defense: 30, specialAttack: 30, specialDefense: 30, speed: 85 },
    moves: [
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Picpic', type: PokemonElementType.flying, power: 35, description: 'Frappe l’ennemi d’un bec pointu ou d’une corne pour infliger des dégâts.' },
      { name: 'Puissance', type: PokemonElementType.normal, power: null, description: 'Le lanceur prend une profonde inspiration et se concentre pour augmenter son taux de critiques.' },
      { name: 'Vive-Attaque', type: PokemonElementType.normal, power: 40, description: 'Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en premier.' },
    ],
  },
  swellow: {
    flavorText: 'Il vole en cercle en quête d’une proie. Dès qu’il l’a repérée, il fond sur elle en un éclair.',
    stats: { hp: 60, attack: 85, defense: 60, specialAttack: 75, specialDefense: 50, speed: 125 },
    moves: [
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Picpic', type: PokemonElementType.flying, power: 35, description: 'Frappe l’ennemi d’un bec pointu ou d’une corne pour infliger des dégâts.' },
      { name: 'Puissance', type: PokemonElementType.normal, power: null, description: 'Le lanceur prend une profonde inspiration et se concentre pour augmenter son taux de critiques.' },
      { name: 'Vive-Attaque', type: PokemonElementType.normal, power: 40, description: 'Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en premier.' },
    ],
  },
  wingull: {
    flavorText: 'Il utilise les courants ascendants pour planer en altitude. Son bec lui sert à transporter la nourriture.',
    stats: { hp: 40, attack: 30, defense: 30, specialAttack: 55, specialDefense: 30, speed: 85 },
    moves: [
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Brume', type: PokemonElementType.ice, power: null, description: 'Une brume blanche enveloppe l’équipe du lanceur et empêche la réduction des stats pour 5 tours.' },
      { name: 'Ultrason', type: PokemonElementType.normal, power: null, description: 'Le lanceur produit d’étranges ondes sonores qui rendent confus.' },
      { name: 'Poursuite', type: PokemonElementType.dark, power: 40, description: 'Une attaque qui inflige deux fois plus de dégâts à un ennemi qui quitte le combat.' },
    ],
  },
  pelipper: {
    flavorText: 'Ce messager du ciel transporte petits Pokémon et œufs dans son bec en toute sécurité.',
    stats: { hp: 60, attack: 50, defense: 100, specialAttack: 95, specialDefense: 70, speed: 65 },
    moves: [
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
      { name: 'Relâche', type: PokemonElementType.normal, power: null, description: 'Libère dans une attaque la puissance précédemment accumulée avec Stockage.' },
      { name: 'Avale', type: PokemonElementType.normal, power: null, description: 'Le lanceur absorbe la puissance accumulée avec Stockage pour restaurer ses PV.' },
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
    ],
  },
  ralts: {
    flavorText: 'Quand ses cornes rouges captent les ondes positives d’un Pokémon ou d’un humain, tout son corps se réchauffe.',
    stats: { hp: 28, attack: 25, defense: 25, specialAttack: 45, specialDefense: 35, speed: 40 },
    moves: [
      { name: 'Téléport', type: PokemonElementType.psychic, power: null, description: 'Permet de fuir un Pokémon sauvage. Permet aussi de revenir au dernier Centre Pokémon visité.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
      { name: 'Choc Mental', type: PokemonElementType.psychic, power: 50, description: 'Une faible vague télékinésique frappe l’ennemi. Peut aussi le plonger dans la confusion.' },
      { name: 'Prescience', type: PokemonElementType.psychic, power: 120, description: 'De l’énergie psychique vient frapper l’ennemi 2 tours après l’utilisation de cette capacité.' },
    ],
  },
  kirlia: {
    flavorText: 'Quand il sent la joie de son Dresseur, il se met à danser, débordant d’énergie.',
    stats: { hp: 38, attack: 35, defense: 35, specialAttack: 65, specialDefense: 55, speed: 50 },
    moves: [
      { name: 'Téléport', type: PokemonElementType.psychic, power: null, description: 'Permet de fuir un Pokémon sauvage. Permet aussi de revenir au dernier Centre Pokémon visité.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
      { name: 'Choc Mental', type: PokemonElementType.psychic, power: 50, description: 'Une faible vague télékinésique frappe l’ennemi. Peut aussi le plonger dans la confusion.' },
      { name: 'Prescience', type: PokemonElementType.psychic, power: 120, description: 'De l’énergie psychique vient frapper l’ennemi 2 tours après l’utilisation de cette capacité.' },
    ],
  },
  gardevoir: {
    flavorText: 'Prêt à tout pour protéger son Dresseur, il peut créer un mini trou noir par sa seule force mentale.',
    stats: { hp: 68, attack: 65, defense: 65, specialAttack: 125, specialDefense: 115, speed: 80 },
    moves: [
      { name: 'Téléport', type: PokemonElementType.psychic, power: null, description: 'Permet de fuir un Pokémon sauvage. Permet aussi de revenir au dernier Centre Pokémon visité.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
      { name: 'Choc Mental', type: PokemonElementType.psychic, power: 50, description: 'Une faible vague télékinésique frappe l’ennemi. Peut aussi le plonger dans la confusion.' },
      { name: 'Prescience', type: PokemonElementType.psychic, power: 120, description: 'De l’énergie psychique vient frapper l’ennemi 2 tours après l’utilisation de cette capacité.' },
    ],
  },
  surskit: {
    flavorText: 'Il semble patiner sur l’eau. Le parfum diffusé par le sommet de sa tête sert à attirer ses proies.',
    stats: { hp: 40, attack: 30, defense: 32, specialAttack: 50, specialDefense: 52, speed: 65 },
    moves: [
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
      { name: 'Brume', type: PokemonElementType.ice, power: null, description: 'Une brume blanche enveloppe l’équipe du lanceur et empêche la réduction des stats pour 5 tours.' },
      { name: 'Doux Parfum', type: PokemonElementType.normal, power: null, description: 'Un doux parfum qui réduit l’Esquive de l’ennemi. Attire aussi les Pokémon sauvages.' },
    ],
  },
  masquerain: {
    flavorText: 'Des motifs en forme d’yeux ornent ses antennes. Ses 4 ailes l’aident à voler dans toutes les directions.',
    stats: { hp: 70, attack: 60, defense: 62, specialAttack: 100, specialDefense: 82, speed: 80 },
    moves: [
      { name: 'Vent Argenté', type: PokemonElementType.bug, power: 60, description: 'Vent qui projette des écailles poudreuses sur l’ennemi. Peut aussi monter toutes les stats du lanceur.' },
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
      { name: 'Para-Spore', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand sur l’ennemi une poudre qui le paralyse.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
    ],
  },
  shroomish: {
    flavorText: 'Le sommet de sa tête libère des spores empoisonnées. Il est dangereux de les inhaler.',
    stats: { hp: 60, attack: 40, defense: 60, specialAttack: 40, specialDefense: 60, speed: 35 },
    moves: [
      { name: 'Spore', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand un nuage de spores qui endort.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
      { name: 'Para-Spore', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand sur l’ennemi une poudre qui le paralyse.' },
      { name: 'Croissance', type: PokemonElementType.normal, power: null, description: 'Le corps du lanceur se développe. Augmente l’Attaque et l’Attaque Spéciale.' },
    ],
  },
  breloom: {
    flavorText: 'Ses petits bras s’étendent quand il donne un coup de poing. Son talent égale celui d’un boxeur pro.',
    stats: { hp: 60, attack: 130, defense: 80, specialAttack: 60, specialDefense: 60, speed: 70 },
    moves: [
      { name: 'Stratopercut', type: PokemonElementType.fighting, power: 85, description: 'Le lanceur attaque avec un uppercut. Il envoie son poing vers le ciel de toutes ses forces.' },
      { name: 'Mach Punch', type: PokemonElementType.fighting, power: 40, description: 'Coup de poing fulgurant. Frappe en premier.' },
      { name: 'Lire-Esprit', type: PokemonElementType.normal, power: null, description: 'Le lanceur analyse les mouvements de l’ennemi pour être sûr de toucher au coup suivant.' },
      { name: 'Para-Spore', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand sur l’ennemi une poudre qui le paralyse.' },
    ],
  },
  nincada: {
    flavorText: 'Il grandit sous terre et se repère grâce à ses antennes car ses yeux sont quasiment aveugles.',
    stats: { hp: 31, attack: 45, defense: 90, specialAttack: 30, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'Lire-Esprit', type: PokemonElementType.normal, power: null, description: 'Le lanceur analyse les mouvements de l’ennemi pour être sûr de toucher au coup suivant.' },
      { name: 'Vampirisme', type: PokemonElementType.bug, power: 80, description: 'Une attaque qui aspire le sang de l’ennemi. La moitié des dégâts sont convertis en PV pour le lanceur.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
    ],
  },
  slakoth: {
    flavorText: 'Il passe le plus clair de son temps affalé. Rien qu’à le voir, on a envie de bâiller.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 35, specialDefense: 35, speed: 30 },
    moves: [
      { name: 'Paresse', type: PokemonElementType.normal, power: null, description: 'Le lanceur se tourne les pouces et récupère jusqu’à la moitié de ses PV max.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
      { name: 'Bâillement', type: PokemonElementType.normal, power: null, description: 'Fait bâiller l’ennemi qui s’endort au tour suivant.' },
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
    ],
  },
  vigoroth: {
    flavorText: 'Son cœur bat dix fois plus vite que la normale, c’est pourquoi il ne tient pas en place.',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 55, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
      { name: 'Tranche', type: PokemonElementType.normal, power: 70, description: 'Un coup de griffe ou autre tranche l’ennemi. Taux de critiques élevé.' },
      { name: 'Puissance', type: PokemonElementType.normal, power: null, description: 'Le lanceur prend une profonde inspiration et se concentre pour augmenter son taux de critiques.' },
    ],
  },
  slaking: {
    flavorText: 'Le Pokémon le plus fainéant du monde. Il s’allonge pour économiser ses forces et contre-attaquer.',
    stats: { hp: 150, attack: 160, defense: 100, specialAttack: 95, specialDefense: 65, speed: 100 },
    moves: [
      { name: 'Paresse', type: PokemonElementType.normal, power: null, description: 'Le lanceur se tourne les pouces et récupère jusqu’à la moitié de ses PV max.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
      { name: 'Bâillement', type: PokemonElementType.normal, power: null, description: 'Fait bâiller l’ennemi qui s’endort au tour suivant.' },
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
    ],
  },
  ninjask: {
    flavorText: 'Il bouge si vite que l’œil a parfois du mal à le suivre. Ils se regroupent près de la sève des arbres.',
    stats: { hp: 61, attack: 90, defense: 45, specialAttack: 50, specialDefense: 50, speed: 160 },
    moves: [
      { name: 'Lire-Esprit', type: PokemonElementType.normal, power: null, description: 'Le lanceur analyse les mouvements de l’ennemi pour être sûr de toucher au coup suivant.' },
      { name: 'Vampirisme', type: PokemonElementType.bug, power: 80, description: 'Une attaque qui aspire le sang de l’ennemi. La moitié des dégâts sont convertis en PV pour le lanceur.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
    ],
  },
  shedinja: {
    flavorText: 'Une carapace d’insecte laissée à l’abandon. On dit qu’il vole l’âme de celui qui regarde à l’intérieur.',
    stats: { hp: 1, attack: 90, defense: 45, specialAttack: 30, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'Rancune', type: PokemonElementType.ghost, power: null, description: 'Si le lanceur est mis K.O., sa rancune épuise les PP de la capacité utilisée pour le mettre K.O.' },
      { name: 'Lire-Esprit', type: PokemonElementType.normal, power: null, description: 'Le lanceur analyse les mouvements de l’ennemi pour être sûr de toucher au coup suivant.' },
      { name: 'Vampirisme', type: PokemonElementType.bug, power: 80, description: 'Une attaque qui aspire le sang de l’ennemi. La moitié des dégâts sont convertis en PV pour le lanceur.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
    ],
  },
  whismur: {
    flavorText: 'En temps normal, son cri est pareil à un murmure. Effrayé, il atteint le volume d’un avion à réaction.',
    stats: { hp: 64, attack: 51, defense: 23, specialAttack: 51, specialDefense: 23, speed: 28 },
    moves: [
      { name: 'Grondement', type: PokemonElementType.normal, power: null, description: 'Le lanceur hurle pour se rassurer, ce qui augmente son Attaque.' },
      { name: 'Écrasement', type: PokemonElementType.normal, power: 65, description: 'Écrase l’ennemi avec un énorme pied. Peut aussi l’apeurer.' },
      { name: 'Ultrason', type: PokemonElementType.normal, power: null, description: 'Le lanceur produit d’étranges ondes sonores qui rendent confus.' },
      { name: 'Écras’Face', type: PokemonElementType.normal, power: 40, description: 'Écrase l’ennemi avec les pattes avant, la queue, etc.' },
    ],
  },
  loudred: {
    flavorText: 'L’onde de choc provoquée par son cri peut renverser un camion. Il trépigne pour augmenter sa force.',
    stats: { hp: 84, attack: 71, defense: 43, specialAttack: 71, specialDefense: 43, speed: 48 },
    moves: [
      { name: 'Grondement', type: PokemonElementType.normal, power: null, description: 'Le lanceur hurle pour se rassurer, ce qui augmente son Attaque.' },
      { name: 'Écrasement', type: PokemonElementType.normal, power: 65, description: 'Écrase l’ennemi avec un énorme pied. Peut aussi l’apeurer.' },
      { name: 'Ultrason', type: PokemonElementType.normal, power: null, description: 'Le lanceur produit d’étranges ondes sonores qui rendent confus.' },
      { name: 'Écras’Face', type: PokemonElementType.normal, power: 40, description: 'Écrase l’ennemi avec les pattes avant, la queue, etc.' },
    ],
  },
  exploud: {
    flavorText: 'Son hurlement s’entend à 10 km à la ronde. Ses orifices émettent toutes sortes de bruits.',
    stats: { hp: 104, attack: 91, defense: 63, specialAttack: 91, specialDefense: 73, speed: 68 },
    moves: [
      { name: 'Grondement', type: PokemonElementType.normal, power: null, description: 'Le lanceur hurle pour se rassurer, ce qui augmente son Attaque.' },
      { name: 'Écrasement', type: PokemonElementType.normal, power: 65, description: 'Écrase l’ennemi avec un énorme pied. Peut aussi l’apeurer.' },
      { name: 'Ultrason', type: PokemonElementType.normal, power: null, description: 'Le lanceur produit d’étranges ondes sonores qui rendent confus.' },
      { name: 'Écras’Face', type: PokemonElementType.normal, power: 40, description: 'Écrase l’ennemi avec les pattes avant, la queue, etc.' },
    ],
  },
  makuhita: {
    flavorText: 'Il fortifie son corps en fonçant sur des arbres épais. Son nid est entouré d’arbres abattus.',
    stats: { hp: 72, attack: 60, defense: 30, specialAttack: 20, specialDefense: 30, speed: 25 },
    moves: [
      { name: 'Cogne', type: PokemonElementType.fighting, power: 15, description: 'Un déluge de coups adressés avec la paume qui frappe de 2 à 5 fois d’affilée.' },
      { name: 'Corps Perdu', type: PokemonElementType.fighting, power: 70, description: 'Le lanceur porte son coup en dernier. En échange, cette capacité n’échoue jamais.' },
      { name: 'Stimulant', type: PokemonElementType.normal, power: 70, description: 'Cette attaque est doublement efficace sur les Pokémon paralysés, mais elle soigne leur paralysie.' },
      { name: 'Cognobidon', type: PokemonElementType.normal, power: null, description: 'Améliore l’Attaque au maximum en sacrifiant la moitié des PV max.' },
    ],
  },
  hariyama: {
    flavorText: 'Il aime mesurer sa force à celle des plus grands Pokémon. Ses coups de paume peuvent projeter un camion.',
    stats: { hp: 144, attack: 120, defense: 60, specialAttack: 40, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'Cogne', type: PokemonElementType.fighting, power: 15, description: 'Un déluge de coups adressés avec la paume qui frappe de 2 à 5 fois d’affilée.' },
      { name: 'Corps Perdu', type: PokemonElementType.fighting, power: 70, description: 'Le lanceur porte son coup en dernier. En échange, cette capacité n’échoue jamais.' },
      { name: 'Stimulant', type: PokemonElementType.normal, power: 70, description: 'Cette attaque est doublement efficace sur les Pokémon paralysés, mais elle soigne leur paralysie.' },
      { name: 'Cognobidon', type: PokemonElementType.normal, power: null, description: 'Améliore l’Attaque au maximum en sacrifiant la moitié des PV max.' },
    ],
  },
  azurill: {
    flavorText: 'Sa queue est plus rebondissante qu’une balle du même nom. C’est aussi une massue très puissante.',
    stats: { hp: 50, attack: 20, defense: 40, specialAttack: 20, specialDefense: 40, speed: 20 },
    moves: [
      { name: 'Trempette', type: PokemonElementType.normal, power: null, description: 'Le lanceur barbote et éclabousse les environs. Cette capacité n’a aucun effet.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
      { name: 'Souplesse', type: PokemonElementType.normal, power: 80, description: 'Fouette l’ennemi avec la queue, une liane, etc. pour infliger des dégâts.' },
      { name: 'Mimi-Queue', type: PokemonElementType.normal, power: null, description: 'Le lanceur remue son adorable queue pour tromper la vigilance de l’ennemi et baisser sa Défense.' },
    ],
  },
  nosepass: {
    flavorText: 'Face au danger, il se protège en augmentant son magnétisme et en attirant tout objet métallique.',
    stats: { hp: 30, attack: 45, defense: 135, specialAttack: 45, specialDefense: 90, speed: 30 },
    moves: [
      { name: 'Verrouillage', type: PokemonElementType.normal, power: null, description: 'Verrouille l’ennemi pour ne pas le rater au tour suivant.' },
      { name: 'Jet-Pierres', type: PokemonElementType.rock, power: 50, description: 'Le lanceur lâche une pierre sur l’ennemi.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
      { name: 'Élecanon', type: PokemonElementType.electric, power: 120, description: 'Un boulet de canon électrifié qui inflige des dégâts et paralyse l’ennemi.' },
    ],
  },
  delcatty: {
    flavorText: 'Les femmes Dresseurs raffolent de sa sublime fourrure. Il ne possède pas de nid.',
    stats: { hp: 70, attack: 65, defense: 65, specialAttack: 55, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'Torgnoles', type: PokemonElementType.normal, power: 15, description: 'Gifle rapidement l’ennemi de 2 à 5 fois d’affilée.' },
      { name: 'Berceuse', type: PokemonElementType.normal, power: null, description: 'Une berceuse plonge l’ennemi dans un profond sommeil.' },
      { name: 'Rugissement', type: PokemonElementType.normal, power: null, description: 'Le lanceur pousse un cri tout mimi pour tromper la vigilance de l’ennemi et baisser son Attaque.' },
      { name: 'Attraction', type: PokemonElementType.normal, power: null, description: 'Si l’ennemi est du sexe opposé, il tombe amoureux et rechigne alors à attaquer.' },
    ],
  },
  skitty: {
    flavorText: 'Il poursuit tout ce qui bouge. On le voit parfois courir en cercle, chassant sa propre queue.',
    stats: { hp: 50, attack: 45, defense: 45, specialAttack: 35, specialDefense: 35, speed: 50 },
    moves: [
      { name: 'Assistance', type: PokemonElementType.normal, power: null, description: 'Le lanceur se dépêche d’utiliser une capacité au hasard parmi celles des Pokémon de l’équipe.' },
      { name: 'Torgnoles', type: PokemonElementType.normal, power: 15, description: 'Gifle rapidement l’ennemi de 2 à 5 fois d’affilée.' },
      { name: 'Berceuse', type: PokemonElementType.normal, power: null, description: 'Une berceuse plonge l’ennemi dans un profond sommeil.' },
      { name: 'Glas de Soin', type: PokemonElementType.normal, power: null, description: 'Carillon apaisant qui soigne les problèmes de statut de tous les Pokémon de l’équipe.' },
    ],
  },
  sableye: {
    flavorText: 'À force de manger des gemmes, les yeux de ce Pokémon des grottes obscures sont devenus des joyaux.',
    stats: { hp: 50, attack: 75, defense: 75, specialAttack: 65, specialDefense: 65, speed: 50 },
    moves: [
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Regard Noir', type: PokemonElementType.normal, power: null, description: 'Le lanceur pétrifie l’ennemi en lui lançant un regard noir. Il devient incapable de s’enfuir.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Bluff', type: PokemonElementType.normal, power: 40, description: 'Permet de frapper en premier et apeure l’ennemi. Ne fonctionne qu’au premier tour.' },
    ],
  },
  mawile: {
    flavorText: 'Ses cornes forment une grande mâchoire attachée à sa tête. Elle peut broyer des barres de fer.',
    stats: { hp: 50, attack: 85, defense: 85, specialAttack: 55, specialDefense: 55, speed: 50 },
    moves: [
      { name: 'Force Poigne', type: PokemonElementType.normal, power: 55, description: 'L’ennemi est attrapé et compressé par les côtés.' },
      { name: 'Relâche', type: PokemonElementType.normal, power: null, description: 'Libère dans une attaque la puissance précédemment accumulée avec Stockage.' },
      { name: 'Avale', type: PokemonElementType.normal, power: null, description: 'Le lanceur absorbe la puissance accumulée avec Stockage pour restaurer ses PV.' },
      { name: 'Stockage', type: PokemonElementType.normal, power: null, description: 'Le lanceur accumule de la puissance et augmente sa Défense et sa Défense Spéciale. Peut être utilisé 3 fois.' },
    ],
  },
  aron: {
    flavorText: 'Il vit habituellement au cœur des montagnes. Affamé, il dévore parfois des rails et des voitures.',
    stats: { hp: 50, attack: 70, defense: 100, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: 'Strido-Son', type: PokemonElementType.steel, power: null, description: 'Un cri horrible tel un crissement métallique qui réduit fortement la Défense Spéciale de l’ennemi.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
      { name: 'Griffe Acier', type: PokemonElementType.steel, power: 50, description: 'Attaque avec des griffes d’acier. Peut aussi augmenter l’Attaque du lanceur.' },
      { name: 'Hurlement', type: PokemonElementType.normal, power: null, description: 'Effraie le Pokémon ennemi et le remplace par un autre. Dans la nature, met fin au combat.' },
    ],
  },
  lairon: {
    flavorText: 'Il se nourrit du minerai de fer qu’il fore. Il défend son territoire en chargeant avec son corps d’acier.',
    stats: { hp: 60, attack: 90, defense: 140, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'Strido-Son', type: PokemonElementType.steel, power: null, description: 'Un cri horrible tel un crissement métallique qui réduit fortement la Défense Spéciale de l’ennemi.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
      { name: 'Griffe Acier', type: PokemonElementType.steel, power: 50, description: 'Attaque avec des griffes d’acier. Peut aussi augmenter l’Attaque du lanceur.' },
      { name: 'Hurlement', type: PokemonElementType.normal, power: null, description: 'Effraie le Pokémon ennemi et le remplace par un autre. Dans la nature, met fin au combat.' },
    ],
  },
  aggron: {
    flavorText: 'Il creuse des galeries à travers la pierre avec ses cornes d’acier pour trouver le fer qu’il apprécie.',
    stats: { hp: 70, attack: 110, defense: 180, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'Strido-Son', type: PokemonElementType.steel, power: null, description: 'Un cri horrible tel un crissement métallique qui réduit fortement la Défense Spéciale de l’ennemi.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
      { name: 'Griffe Acier', type: PokemonElementType.steel, power: 50, description: 'Attaque avec des griffes d’acier. Peut aussi augmenter l’Attaque du lanceur.' },
      { name: 'Hurlement', type: PokemonElementType.normal, power: null, description: 'Effraie le Pokémon ennemi et le remplace par un autre. Dans la nature, met fin au combat.' },
    ],
  },
  meditite: {
    flavorText: 'Son entraînement d’ermite lui permet de léviter par le seul pouvoir de la méditation.',
    stats: { hp: 30, attack: 40, defense: 55, specialAttack: 40, specialDefense: 55, speed: 60 },
    moves: [
      { name: 'Yoga', type: PokemonElementType.psychic, power: null, description: 'Le lanceur médite pour éveiller son pouvoir latent et augmenter son Attaque.' },
      { name: 'Lire-Esprit', type: PokemonElementType.normal, power: null, description: 'Le lanceur analyse les mouvements de l’ennemi pour être sûr de toucher au coup suivant.' },
      { name: 'Pied Voltige', type: PokemonElementType.fighting, power: 130, description: 'Le lanceur s’élance pour effectuer un coup de genou sauté. S’il échoue, le lanceur se blesse.' },
      { name: 'Soin', type: PokemonElementType.normal, power: null, description: 'Un soin qui permet au lanceur de récupérer jusqu’à la moitié de ses PV max.' },
    ],
  },
  medicham: {
    flavorText: 'Le jeûne lui permet de concentrer son esprit au point de déceler l’aura de ses adversaires.',
    stats: { hp: 60, attack: 60, defense: 75, specialAttack: 60, specialDefense: 75, speed: 80 },
    moves: [
      { name: 'Yoga', type: PokemonElementType.psychic, power: null, description: 'Le lanceur médite pour éveiller son pouvoir latent et augmenter son Attaque.' },
      { name: 'Lire-Esprit', type: PokemonElementType.normal, power: null, description: 'Le lanceur analyse les mouvements de l’ennemi pour être sûr de toucher au coup suivant.' },
      { name: 'Pied Voltige', type: PokemonElementType.fighting, power: 130, description: 'Le lanceur s’élance pour effectuer un coup de genou sauté. S’il échoue, le lanceur se blesse.' },
      { name: 'Soin', type: PokemonElementType.normal, power: null, description: 'Un soin qui permet au lanceur de récupérer jusqu’à la moitié de ses PV max.' },
    ],
  },
  electrike: {
    flavorText: 'Il améliore ses réflexes en stimulant ses muscles grâce à l’électricité dans sa fourrure.',
    stats: { hp: 40, attack: 45, defense: 40, specialAttack: 65, specialDefense: 40, speed: 65 },
    moves: [
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Grondement', type: PokemonElementType.normal, power: null, description: 'Le lanceur hurle pour se rassurer, ce qui augmente son Attaque.' },
      { name: 'Étincelle', type: PokemonElementType.electric, power: 65, description: 'Lance une charge électrique sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
    ],
  },
  manectric: {
    flavorText: 'Il libère l’électricité par sa crinière. Il crée un nuage d’orage pour appeler la foudre.',
    stats: { hp: 70, attack: 75, defense: 60, specialAttack: 105, specialDefense: 60, speed: 105 },
    moves: [
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Grondement', type: PokemonElementType.normal, power: null, description: 'Le lanceur hurle pour se rassurer, ce qui augmente son Attaque.' },
      { name: 'Étincelle', type: PokemonElementType.electric, power: 65, description: 'Lance une charge électrique sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
    ],
  },
  plusle: {
    flavorText: 'Il absorbe l’énergie des poteaux électriques et encourage ses amis avec des pompons d’étincelles.',
    stats: { hp: 60, attack: 50, defense: 40, specialAttack: 85, specialDefense: 75, speed: 95 },
    moves: [
      { name: 'Étincelle', type: PokemonElementType.electric, power: 65, description: 'Lance une charge électrique sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
      { name: 'Croco Larme', type: PokemonElementType.dark, power: null, description: 'Le lanceur fait semblant de pleurer pour troubler l’ennemi et baisser fortement sa Défense Spéciale.' },
      { name: 'Vive-Attaque', type: PokemonElementType.normal, power: 40, description: 'Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en premier.' },
    ],
  },
  minun: {
    flavorText: 'Il encourage ses amis. Son corps produit plus d’étincelles quand il est en mauvaise posture.',
    stats: { hp: 60, attack: 40, defense: 50, specialAttack: 75, specialDefense: 85, speed: 95 },
    moves: [
      { name: 'Étincelle', type: PokemonElementType.electric, power: 65, description: 'Lance une charge électrique sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
      { name: 'Vive-Attaque', type: PokemonElementType.normal, power: 40, description: 'Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en premier.' },
      { name: 'Relais', type: PokemonElementType.normal, power: null, description: 'Le lanceur échange sa place et tout changement de stat avec un Pokémon de l’équipe.' },
    ],
  },
  illumise: {
    flavorText: 'Il utilise son doux parfum pour aider Muciole à décrire des arabesques dans le ciel nocturne.',
    stats: { hp: 65, attack: 47, defense: 75, specialAttack: 73, specialDefense: 85, speed: 85 },
    moves: [
      { name: 'Rayon Lune', type: PokemonElementType.normal, power: null, description: 'Un soin qui restaure des PV au lanceur. Son efficacité varie en fonction de la météo.' },
      { name: 'Flatterie', type: PokemonElementType.dark, power: null, description: 'Rend la cible confuse, mais augmente son Attaque Spéciale.' },
      { name: 'Vœu', type: PokemonElementType.normal, power: null, description: 'Un vœu qui permet de récupérer la moitié des PV max au tour suivant.' },
      { name: 'Doux Parfum', type: PokemonElementType.normal, power: null, description: 'Un doux parfum qui réduit l’Esquive de l’ennemi. Attire aussi les Pokémon sauvages.' },
    ],
  },
  volbeat: {
    flavorText: 'Il communique avec ses pairs en allumant son postérieur la nuit. Il adore le doux parfum de Lumivole.',
    stats: { hp: 65, attack: 73, defense: 75, specialAttack: 47, specialDefense: 85, speed: 85 },
    moves: [
      { name: 'Lumi-Queue', type: PokemonElementType.bug, power: null, description: 'Le lanceur regarde un flash lumineux fixement. Augmente considérablement son Attaque Spéciale.' },
      { name: 'Rayon Lune', type: PokemonElementType.normal, power: null, description: 'Un soin qui restaure des PV au lanceur. Son efficacité varie en fonction de la météo.' },
      { name: 'Vive-Attaque', type: PokemonElementType.normal, power: 40, description: 'Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en premier.' },
      { name: 'Onde Folie', type: PokemonElementType.ghost, power: null, description: 'Un rayon sinistre qui plonge l’ennemi dans un état de confusion.' },
    ],
  },
  roselia: {
    flavorText: 'Plus le Rosélia est en bonne santé et plus son parfum est agréable et relaxant pour son entourage.',
    stats: { hp: 50, attack: 60, defense: 45, specialAttack: 100, specialDefense: 80, speed: 65 },
    moves: [
      { name: 'Siffl’Herbe', type: PokemonElementType.grass, power: null, description: 'Le lanceur joue une douce mélodie qui plonge l’ennemi dans un profond sommeil.' },
      { name: 'Danse Fleurs', type: PokemonElementType.grass, power: 120, description: 'Le lanceur attaque en projetant des pétales pendant 2 à 3 tours avant de céder à la confusion.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Racines', type: PokemonElementType.grass, power: null, description: 'Le lanceur plante ses racines et récupère des PV à chaque tour. Une fois enraciné, il ne peut plus fuir.' },
    ],
  },
  gulpin: {
    flavorText: 'Il est principalement composé d’un estomac dont les sucs digestifs dissolvent tout ce qu’il avale.',
    stats: { hp: 70, attack: 43, defense: 53, specialAttack: 43, specialDefense: 53, speed: 40 },
    moves: [
      { name: 'Détritus', type: PokemonElementType.poison, power: 65, description: 'Des détritus toxiques sont projetés sur l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Gaz Toxik', type: PokemonElementType.poison, power: null, description: 'Un nuage de gaz toxique est projeté au visage de l’ennemi. Peut l’empoisonner.' },
      { name: 'Relâche', type: PokemonElementType.normal, power: null, description: 'Libère dans une attaque la puissance précédemment accumulée avec Stockage.' },
      { name: 'Avale', type: PokemonElementType.normal, power: null, description: 'Le lanceur absorbe la puissance accumulée avec Stockage pour restaurer ses PV.' },
    ],
  },
  swalot: {
    flavorText: 'Il avale tout en une bouchée. Ses follicules sécrètent des fluides toxiques qui endorment l’ennemi.',
    stats: { hp: 100, attack: 73, defense: 83, specialAttack: 73, specialDefense: 83, speed: 55 },
    moves: [
      { name: 'Détritus', type: PokemonElementType.poison, power: 65, description: 'Des détritus toxiques sont projetés sur l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Gaz Toxik', type: PokemonElementType.poison, power: null, description: 'Un nuage de gaz toxique est projeté au visage de l’ennemi. Peut l’empoisonner.' },
      { name: 'Relâche', type: PokemonElementType.normal, power: null, description: 'Libère dans une attaque la puissance précédemment accumulée avec Stockage.' },
      { name: 'Avale', type: PokemonElementType.normal, power: null, description: 'Le lanceur absorbe la puissance accumulée avec Stockage pour restaurer ses PV.' },
    ],
  },
  carvanha: {
    flavorText: 'Il attaque en banc quand on menace son territoire. Ses dents aiguisées peuvent couler un navire.',
    stats: { hp: 45, attack: 90, defense: 20, specialAttack: 65, specialDefense: 20, speed: 65 },
    moves: [
      { name: 'Frénésie', type: PokemonElementType.normal, power: 20, description: 'Une fois activée, cette capacité augmente l’Attaque du lanceur à mesure que celui-ci subit des attaques.' },
      { name: 'Puissance', type: PokemonElementType.normal, power: null, description: 'Le lanceur prend une profonde inspiration et se concentre pour augmenter son taux de critiques.' },
      { name: 'Grincement', type: PokemonElementType.normal, power: null, description: 'Cri strident qui baisse beaucoup la Défense ennemie.' },
      { name: 'Morsure', type: PokemonElementType.dark, power: 60, description: 'L’ennemi est mordu par de tranchantes canines. Peut l’apeurer.' },
    ],
  },
  sharpedo: {
    flavorText: 'Ses crocs lacèrent des feuilles d’acier. Il nage à 120 km/h. On l’appelle “tyran des mers”.',
    stats: { hp: 70, attack: 120, defense: 40, specialAttack: 95, specialDefense: 40, speed: 95 },
    moves: [
      { name: 'Coud’Krâne', type: PokemonElementType.normal, power: 130, description: 'Le lanceur baisse la tête pour augmenter sa Défense au 1er tour et percuter l’ennemi au 2è.' },
      { name: 'Tranche', type: PokemonElementType.normal, power: 70, description: 'Un coup de griffe ou autre tranche l’ennemi. Taux de critiques élevé.' },
      { name: 'Frénésie', type: PokemonElementType.normal, power: 20, description: 'Une fois activée, cette capacité augmente l’Attaque du lanceur à mesure que celui-ci subit des attaques.' },
      { name: 'Puissance', type: PokemonElementType.normal, power: null, description: 'Le lanceur prend une profonde inspiration et se concentre pour augmenter son taux de critiques.' },
    ],
  },
  wailmer: {
    flavorText: 'Par beau temps, il se pose sur les plages pour jouer et rebondir. Il expulse de l’eau par son évent.',
    stats: { hp: 130, attack: 70, defense: 35, specialAttack: 70, specialDefense: 35, speed: 60 },
    moves: [
      { name: 'Giclédo', type: PokemonElementType.water, power: 150, description: 'Le lanceur attaque avec un jet d’eau. Moins il a de PV et moins l’attaque est puissante.' },
      { name: 'Trempette', type: PokemonElementType.normal, power: null, description: 'Le lanceur barbote et éclabousse les environs. Cette capacité n’a aucun effet.' },
      { name: 'Brume', type: PokemonElementType.ice, power: null, description: 'Une brume blanche enveloppe l’équipe du lanceur et empêche la réduction des stats pour 5 tours.' },
      { name: 'Étonnement', type: PokemonElementType.ghost, power: 30, description: 'Le lanceur attaque l’ennemi en poussant un cri terrifiant. Peut aussi l’apeurer.' },
    ],
  },
  wailord: {
    flavorText: 'Le plus grand des Pokémon. Il peut plonger à une profondeur de 3 000 m en retenant son souffle.',
    stats: { hp: 170, attack: 90, defense: 45, specialAttack: 90, specialDefense: 45, speed: 60 },
    moves: [
      { name: 'Giclédo', type: PokemonElementType.water, power: 150, description: 'Le lanceur attaque avec un jet d’eau. Moins il a de PV et moins l’attaque est puissante.' },
      { name: 'Trempette', type: PokemonElementType.normal, power: null, description: 'Le lanceur barbote et éclabousse les environs. Cette capacité n’a aucun effet.' },
      { name: 'Brume', type: PokemonElementType.ice, power: null, description: 'Une brume blanche enveloppe l’équipe du lanceur et empêche la réduction des stats pour 5 tours.' },
      { name: 'Étonnement', type: PokemonElementType.ghost, power: 30, description: 'Le lanceur attaque l’ennemi en poussant un cri terrifiant. Peut aussi l’apeurer.' },
    ],
  },
  numel: {
    flavorText: 'Son dos bossu renferme une lave bouillonnante. Elle refroidit par temps de pluie, ce qui le ralentit.',
    stats: { hp: 60, attack: 60, defense: 40, specialAttack: 65, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'Ampleur', type: PokemonElementType.ground, power: null, description: 'Un tremblement de terre d’intensité variable qui affecte tous les Pokémon alentour. L’efficacité varie.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Amnésie', type: PokemonElementType.psychic, power: null, description: 'Le lanceur fait le vide dans son esprit pour oublier ses soucis. Augmente fortement sa Défense Spéciale.' },
      { name: 'Puissance', type: PokemonElementType.normal, power: null, description: 'Le lanceur prend une profonde inspiration et se concentre pour augmenter son taux de critiques.' },
    ],
  },
  camerupt: {
    flavorText: 'Il porte des volcans sur son dos. Quand le magma remonte, il frissonne et entre en éruption.',
    stats: { hp: 70, attack: 100, defense: 70, specialAttack: 105, specialDefense: 75, speed: 40 },
    moves: [
      { name: 'Éruption', type: PokemonElementType.fire, power: 150, description: 'Le lanceur laisse exploser sa colère. Plus ses PV sont bas et moins l’attaque est puissante.' },
      { name: 'Ampleur', type: PokemonElementType.ground, power: null, description: 'Un tremblement de terre d’intensité variable qui affecte tous les Pokémon alentour. L’efficacité varie.' },
      { name: 'Abîme', type: PokemonElementType.ground, power: null, description: 'Le lanceur fait tomber l’ennemi dans une crevasse. Si cette attaque réussit, elle met K.O. sur le coup.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
    ],
  },
  torkoal: {
    flavorText: 'Il tire son énergie du charbon qu’il brûle dans sa carapace et crache de la suie noire en cas de danger.',
    stats: { hp: 70, attack: 85, defense: 140, specialAttack: 85, specialDefense: 70, speed: 20 },
    moves: [
      { name: 'Purédpois', type: PokemonElementType.poison, power: 30, description: 'Le lanceur attaque à l’aide d’une éruption de gaz répugnants. Peut aussi empoisonner l’ennemi.' },
      { name: 'Brouillard', type: PokemonElementType.normal, power: null, description: 'Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Danse Flammes', type: PokemonElementType.fire, power: 35, description: 'Un tourbillon de flammes emprisonne l’ennemi pendant 4 à 5 tours.' },
    ],
  },
  spoink: {
    flavorText: 'Il utilise sa queue comme un ressort et bondit partout. Chaque nouveau choc fait battre son cœur.',
    stats: { hp: 60, attack: 25, defense: 35, specialAttack: 70, specialDefense: 80, speed: 60 },
    moves: [
      { name: 'Trempette', type: PokemonElementType.normal, power: null, description: 'Le lanceur barbote et éclabousse les environs. Cette capacité n’a aucun effet.' },
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Vague Psy', type: PokemonElementType.psychic, power: null, description: 'Une étrange onde d’énergie chaude frappe l’ennemi. Cette attaque est d’intensité variable.' },
      { name: 'Rebond', type: PokemonElementType.flying, power: 85, description: 'Le lanceur bondit très haut et plonge sur l’ennemi au 2è tour. Peut aussi paralyser l’ennemi.' },
    ],
  },
  grumpig: {
    flavorText: 'Les perles noires amplifient ses pouvoirs psy. Sa danse étrange lui permet de contrôler ses ennemis.',
    stats: { hp: 80, attack: 45, defense: 65, specialAttack: 90, specialDefense: 110, speed: 80 },
    moves: [
      { name: 'Trempette', type: PokemonElementType.normal, power: null, description: 'Le lanceur barbote et éclabousse les environs. Cette capacité n’a aucun effet.' },
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Vague Psy', type: PokemonElementType.psychic, power: null, description: 'Une étrange onde d’énergie chaude frappe l’ennemi. Cette attaque est d’intensité variable.' },
      { name: 'Rebond', type: PokemonElementType.flying, power: 85, description: 'Le lanceur bondit très haut et plonge sur l’ennemi au 2è tour. Peut aussi paralyser l’ennemi.' },
    ],
  },
  spinda: {
    flavorText: 'Les motifs sur leur fourrure sont propres à chaque Spinda. Son pas chancelant le rend difficile à viser.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 60, specialDefense: 60, speed: 60 },
    moves: [
      { name: 'Uppercut', type: PokemonElementType.normal, power: 70, description: 'Un enchaînement de coups de poing cadencés. Peut aussi rendre confus.' },
      { name: 'Danse Folle', type: PokemonElementType.normal, power: null, description: 'Danse qui rend confus tous les Pokémon autour du lanceur.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
    ],
  },
  trapinch: {
    flavorText: 'Il creuse un trou conique dans le sable du désert et se terre en attendant qu’une proie trébuche.',
    stats: { hp: 45, attack: 100, defense: 45, specialAttack: 45, specialDefense: 45, speed: 10 },
    moves: [
      { name: 'Tourbi-Sable', type: PokemonElementType.ground, power: 35, description: 'Le lanceur emprisonne l’ennemi dans une tempête de sable terrifiante qui dure de 4 à 5 tours.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
      { name: 'Morsure', type: PokemonElementType.dark, power: 60, description: 'L’ennemi est mordu par de tranchantes canines. Peut l’apeurer.' },
    ],
  },
  vibrava: {
    flavorText: 'Ses violents battements d’ailes génèrent des vagues d’ultrasons qui donnent mal au crâne.',
    stats: { hp: 50, attack: 70, defense: 50, specialAttack: 50, specialDefense: 50, speed: 70 },
    moves: [
      { name: 'Draco-Souffle', type: PokemonElementType.dragon, power: 60, description: 'Le lanceur souffle fort sur l’ennemi pour infliger des dégâts. Peut aussi le paralyser.' },
      { name: 'Tourbi-Sable', type: PokemonElementType.ground, power: 35, description: 'Le lanceur emprisonne l’ennemi dans une tempête de sable terrifiante qui dure de 4 à 5 tours.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
    ],
  },
  flygon: {
    flavorText: 'Son puissant battement d’ailes provoque des tempêtes de sable. On l’appelle “esprit du désert”.',
    stats: { hp: 80, attack: 100, defense: 80, specialAttack: 80, specialDefense: 80, speed: 100 },
    moves: [
      { name: 'Draco-Souffle', type: PokemonElementType.dragon, power: 60, description: 'Le lanceur souffle fort sur l’ennemi pour infliger des dégâts. Peut aussi le paralyser.' },
      { name: 'Tourbi-Sable', type: PokemonElementType.ground, power: 35, description: 'Le lanceur emprisonne l’ennemi dans une tempête de sable terrifiante qui dure de 4 à 5 tours.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
    ],
  },
  cacnea: {
    flavorText: 'En stockant l’eau dans son corps, cet habitant du désert peut survivre 30 jours sans boire.',
    stats: { hp: 50, attack: 85, defense: 40, specialAttack: 85, specialDefense: 40, speed: 35 },
    moves: [
      { name: 'Poing Dard', type: PokemonElementType.grass, power: 60, description: 'Le lanceur attaque en fouettant l’ennemi de ses bras épineux. Peut aussi l’apeurer.' },
      { name: 'Spore Coton', type: PokemonElementType.grass, power: null, description: 'Le lanceur libère des spores cotonneuses qui collent à l’ennemi et baissent fortement sa Vitesse.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Racines', type: PokemonElementType.grass, power: null, description: 'Le lanceur plante ses racines et récupère des PV à chaque tour. Une fois enraciné, il ne peut plus fuir.' },
    ],
  },
  cacturne: {
    flavorText: 'Il sort la nuit pour chasser. Il traque les proies épuisées après une journée dans le désert.',
    stats: { hp: 70, attack: 115, defense: 60, specialAttack: 115, specialDefense: 60, speed: 55 },
    moves: [
      { name: 'Poing Dard', type: PokemonElementType.grass, power: 60, description: 'Le lanceur attaque en fouettant l’ennemi de ses bras épineux. Peut aussi l’apeurer.' },
      { name: 'Spore Coton', type: PokemonElementType.grass, power: null, description: 'Le lanceur libère des spores cotonneuses qui collent à l’ennemi et baissent fortement sa Vitesse.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Racines', type: PokemonElementType.grass, power: null, description: 'Le lanceur plante ses racines et récupère des PV à chaque tour. Une fois enraciné, il ne peut plus fuir.' },
    ],
  },
  swablu: {
    flavorText: 'Il ne se sent à l’aise que dans un milieu propre et repousse la poussière avec ses ailes.',
    stats: { hp: 45, attack: 40, defense: 60, specialAttack: 40, specialDefense: 75, speed: 50 },
    moves: [
      { name: 'Mimique', type: PokemonElementType.flying, power: null, description: 'Le lanceur riposte à l’attaque de l’ennemi avec la même attaque.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
      { name: 'Berceuse', type: PokemonElementType.normal, power: null, description: 'Une berceuse plonge l’ennemi dans un profond sommeil.' },
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
    ],
  },
  altaria: {
    flavorText: 'Il aime enlacer ses amis dans ses ailes cotonneuses et ronronner.',
    stats: { hp: 75, attack: 70, defense: 90, specialAttack: 70, specialDefense: 105, speed: 80 },
    moves: [
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
      { name: 'Berceuse', type: PokemonElementType.normal, power: null, description: 'Une berceuse plonge l’ennemi dans un profond sommeil.' },
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
      { name: 'Régénération', type: PokemonElementType.normal, power: null, description: 'Le lanceur se repose pour guérir d’un empoisonnement, d’une brûlure ou d’une paralysie.' },
    ],
  },
  zangoose: {
    flavorText: 'C’est le rival de Séviper depuis des générations. Ses griffes aiguisées sont son meilleur atout.',
    stats: { hp: 73, attack: 115, defense: 60, specialAttack: 60, specialDefense: 60, speed: 90 },
    moves: [
      { name: 'Éclate Griffe', type: PokemonElementType.normal, power: 75, description: 'Lacère l’ennemi avec des griffes solides et aiguisées. Peut aussi baisser sa Défense.' },
      { name: 'Poursuite', type: PokemonElementType.dark, power: 40, description: 'Une attaque qui inflige deux fois plus de dégâts à un ennemi qui quitte le combat.' },
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
      { name: 'Faux-Chage', type: PokemonElementType.normal, power: 40, description: 'Le lanceur retient ses coups pour que l’ennemi garde au moins 1 PV et ne tombe pas K.O.' },
    ],
  },
  seviper: {
    flavorText: 'Le rival historique de Mangriff. Il affûte la lame de sa queue sur les rochers avant le combat.',
    stats: { hp: 73, attack: 100, defense: 60, specialAttack: 100, specialDefense: 60, speed: 65 },
    moves: [
      { name: 'Regard Médusant', type: PokemonElementType.normal, power: null, description: 'Le lanceur intimide l’ennemi grâce à son regard terrifiant pour le paralyser.' },
      { name: 'Crochet Venin', type: PokemonElementType.poison, power: 50, description: 'Le lanceur mord l’ennemi de ses crocs toxiques. Peut aussi l’empoisonner gravement.' },
      { name: 'Queue-Poison', type: PokemonElementType.poison, power: 50, description: 'Attaque à taux de critiques élevé. Peut aussi empoisonner l’ennemi.' },
      { name: 'Ligotage', type: PokemonElementType.normal, power: 15, description: 'Le lanceur ligote l’ennemi avec des lianes ou son corps pour l’écraser durant 4 à 5 tours.' },
    ],
  },
  lunatone: {
    flavorText: 'On suppose qu’il est lié au cycle lunaire, car il ne sort que les soirs de pleine lune.',
    stats: { hp: 90, attack: 55, defense: 65, specialAttack: 95, specialDefense: 85, speed: 70 },
    moves: [
      { name: 'Force Cosmique', type: PokemonElementType.psychic, power: null, description: 'Le lanceur absorbe un pouvoir mystique spatial qui augmente sa Défense et sa Défense Spéciale.' },
      { name: 'Vague Psy', type: PokemonElementType.psychic, power: null, description: 'Une étrange onde d’énergie chaude frappe l’ennemi. Cette attaque est d’intensité variable.' },
      { name: 'Jet-Pierres', type: PokemonElementType.rock, power: 50, description: 'Le lanceur lâche une pierre sur l’ennemi.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
    ],
  },
  solrock: {
    flavorText: 'Le bruit court que cette nouvelle espèce vient du soleil. Il produit de la lumière en tournoyant.',
    stats: { hp: 90, attack: 95, defense: 85, specialAttack: 55, specialDefense: 65, speed: 70 },
    moves: [
      { name: 'Force Cosmique', type: PokemonElementType.psychic, power: null, description: 'Le lanceur absorbe un pouvoir mystique spatial qui augmente sa Défense et sa Défense Spéciale.' },
      { name: 'Vague Psy', type: PokemonElementType.psychic, power: null, description: 'Une étrange onde d’énergie chaude frappe l’ennemi. Cette attaque est d’intensité variable.' },
      { name: 'Jet-Pierres', type: PokemonElementType.rock, power: 50, description: 'Le lanceur lâche une pierre sur l’ennemi.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
    ],
  },
  barboach: {
    flavorText: 'Son corps glissant est difficile à attraper. On dit qu’il a été créé dans de la boue solidifiée.',
    stats: { hp: 50, attack: 48, defense: 43, specialAttack: 46, specialDefense: 41, speed: 60 },
    moves: [
      { name: 'Ampleur', type: PokemonElementType.ground, power: null, description: 'Un tremblement de terre d’intensité variable qui affecte tous les Pokémon alentour. L’efficacité varie.' },
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
      { name: 'Abîme', type: PokemonElementType.ground, power: null, description: 'Le lanceur fait tomber l’ennemi dans une crevasse. Si cette attaque réussit, elle met K.O. sur le coup.' },
    ],
  },
  whiscash: {
    flavorText: 'Il défend férocement son territoire en déclenchant des secousses terribles.',
    stats: { hp: 110, attack: 78, defense: 73, specialAttack: 76, specialDefense: 71, speed: 60 },
    moves: [
      { name: 'Ampleur', type: PokemonElementType.ground, power: null, description: 'Un tremblement de terre d’intensité variable qui affecte tous les Pokémon alentour. L’efficacité varie.' },
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
      { name: 'Abîme', type: PokemonElementType.ground, power: null, description: 'Le lanceur fait tomber l’ennemi dans une crevasse. Si cette attaque réussit, elle met K.O. sur le coup.' },
    ],
  },
  corphish: {
    flavorText: 'Sa nature robuste lui permet de vivre sur n’importe quel terrain. Ses pinces ne lâchent jamais prise.',
    stats: { hp: 43, attack: 80, defense: 65, specialAttack: 50, specialDefense: 35, speed: 35 },
    moves: [
      { name: 'Pince-Masse', type: PokemonElementType.water, power: 100, description: 'Une grande pince martèle l’ennemi. Taux de critiques élevé.' },
      { name: 'Guillotine', type: PokemonElementType.normal, power: null, description: 'De méchantes pinces lacèrent l’ennemi, le mettant K.O. sur le coup s’il est touché.' },
      { name: 'Force Poigne', type: PokemonElementType.normal, power: 55, description: 'L’ennemi est attrapé et compressé par les côtés.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
    ],
  },
  crawdaunt: {
    flavorText: 'C’est un voyou qui utilise ses pinces pour chasser les autres Pokémon hors de sa mare.',
    stats: { hp: 63, attack: 120, defense: 85, specialAttack: 90, specialDefense: 55, speed: 55 },
    moves: [
      { name: 'Pince-Masse', type: PokemonElementType.water, power: 100, description: 'Une grande pince martèle l’ennemi. Taux de critiques élevé.' },
      { name: 'Guillotine', type: PokemonElementType.normal, power: null, description: 'De méchantes pinces lacèrent l’ennemi, le mettant K.O. sur le coup s’il est touché.' },
      { name: 'Force Poigne', type: PokemonElementType.normal, power: 55, description: 'L’ennemi est attrapé et compressé par les côtés.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
    ],
  },
  baltoy: {
    flavorText: 'Il se déplace en tournoyant sur son pied. Ce Pokémon rare fut découvert dans de vieilles ruines.',
    stats: { hp: 40, attack: 40, defense: 55, specialAttack: 40, specialDefense: 70, speed: 55 },
    moves: [
      { name: 'Force Cosmique', type: PokemonElementType.psychic, power: null, description: 'Le lanceur absorbe un pouvoir mystique spatial qui augmente sa Défense et sa Défense Spéciale.' },
      { name: 'Tour Rapide', type: PokemonElementType.normal, power: 50, description: 'Une attaque tournoyante pouvant aussi annuler par ex. Étreinte, Ligotage, Vampigraine ou Picots.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'Le lanceur explose et inflige des dégâts à tous les Pokémon autour de lui. Met K.O. le lanceur.' },
    ],
  },
  claydol: {
    flavorText: 'Une ancienne figurine d’argile qui s’est animée suite à son exposition à un rayon de lumière étrange.',
    stats: { hp: 60, attack: 70, defense: 105, specialAttack: 70, specialDefense: 120, speed: 75 },
    moves: [
      { name: 'Téléport', type: PokemonElementType.psychic, power: null, description: 'Permet de fuir un Pokémon sauvage. Permet aussi de revenir au dernier Centre Pokémon visité.' },
      { name: 'Force Cosmique', type: PokemonElementType.psychic, power: null, description: 'Le lanceur absorbe un pouvoir mystique spatial qui augmente sa Défense et sa Défense Spéciale.' },
      { name: 'Tour Rapide', type: PokemonElementType.normal, power: 50, description: 'Une attaque tournoyante pouvant aussi annuler par ex. Étreinte, Ligotage, Vampigraine ou Picots.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
    ],
  },
  lileep: {
    flavorText: 'Il vivait au fond de la mer il y a 100 millions d’années. La science a permis de le ressusciter.',
    stats: { hp: 66, attack: 41, defense: 77, specialAttack: 61, specialDefense: 87, speed: 23 },
    moves: [
      { name: 'Constriction', type: PokemonElementType.normal, power: 10, description: 'De longs tentacules ou lianes attaquent l’ennemi. Peut aussi baisser sa Vitesse.' },
      { name: 'Acide', type: PokemonElementType.poison, power: 40, description: 'Le lanceur attaque l’ennemi avec un jet d’acide corrosif. Peut aussi baisser la Défense Spéciale de l’ennemi.' },
      { name: 'Relâche', type: PokemonElementType.normal, power: null, description: 'Libère dans une attaque la puissance précédemment accumulée avec Stockage.' },
      { name: 'Racines', type: PokemonElementType.grass, power: null, description: 'Le lanceur plante ses racines et récupère des PV à chaque tour. Une fois enraciné, il ne peut plus fuir.' },
    ],
  },
  cradily: {
    flavorText: 'Vit dans les hauts-fonds des mers chaudes. Il déterre sa proie du sable quand la marée se retire.',
    stats: { hp: 86, attack: 81, defense: 97, specialAttack: 81, specialDefense: 107, speed: 43 },
    moves: [
      { name: 'Constriction', type: PokemonElementType.normal, power: 10, description: 'De longs tentacules ou lianes attaquent l’ennemi. Peut aussi baisser sa Vitesse.' },
      { name: 'Acide', type: PokemonElementType.poison, power: 40, description: 'Le lanceur attaque l’ennemi avec un jet d’acide corrosif. Peut aussi baisser la Défense Spéciale de l’ennemi.' },
      { name: 'Relâche', type: PokemonElementType.normal, power: null, description: 'Libère dans une attaque la puissance précédemment accumulée avec Stockage.' },
      { name: 'Racines', type: PokemonElementType.grass, power: null, description: 'Le lanceur plante ses racines et récupère des PV à chaque tour. Une fois enraciné, il ne peut plus fuir.' },
    ],
  },
  anorith: {
    flavorText: 'Un ancêtre Pokémon réanimé à partir d’un fossile. Il vivait en mer et chassait avec ses pinces.',
    stats: { hp: 45, attack: 95, defense: 50, specialAttack: 40, specialDefense: 50, speed: 75 },
    moves: [
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
      { name: 'Griffe Acier', type: PokemonElementType.steel, power: 50, description: 'Attaque avec des griffes d’acier. Peut aussi augmenter l’Attaque du lanceur.' },
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
    ],
  },
  armaldo: {
    flavorText: 'Il a gagné la côte après son évolution. Une armure robuste recouvre son corps.',
    stats: { hp: 75, attack: 125, defense: 100, specialAttack: 70, specialDefense: 80, speed: 45 },
    moves: [
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
      { name: 'Griffe Acier', type: PokemonElementType.steel, power: 50, description: 'Attaque avec des griffes d’acier. Peut aussi augmenter l’Attaque du lanceur.' },
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
    ],
  },
  feebas: {
    flavorText: 'Ce Pokémon a peut-être un physique disgracieux, mais il est robuste et peut survivre dans très peu d’eau.',
    stats: { hp: 20, attack: 15, defense: 20, specialAttack: 10, specialDefense: 55, speed: 80 },
    moves: [
      { name: 'Trempette', type: PokemonElementType.normal, power: null, description: 'Le lanceur barbote et éclabousse les environs. Cette capacité n’a aucun effet.' },
      { name: 'Gigotage', type: PokemonElementType.normal, power: null, description: 'Le lanceur fait tournoyer son fléau. Plus ses PV sont bas, plus l’attaque est puissante.' },
      { name: 'Charge', type: PokemonElementType.normal, power: 40, description: 'Le lanceur charge l’ennemi et le percute de tout son corps.' },
    ],
  },
  milotic: {
    flavorText: 'Ses splendides écailles aux couleurs de l’arc-en-ciel changent de teinte selon l’angle de vue.',
    stats: { hp: 95, attack: 60, defense: 79, specialAttack: 100, specialDefense: 125, speed: 81 },
    moves: [
      { name: 'Ligotage', type: PokemonElementType.normal, power: 15, description: 'Le lanceur ligote l’ennemi avec des lianes ou son corps pour l’écraser durant 4 à 5 tours.' },
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
      { name: 'Régénération', type: PokemonElementType.normal, power: null, description: 'Le lanceur se repose pour guérir d’un empoisonnement, d’une brûlure ou d’une paralysie.' },
      { name: 'Soin', type: PokemonElementType.normal, power: null, description: 'Un soin qui permet au lanceur de récupérer jusqu’à la moitié de ses PV max.' },
    ],
  },
  kecleon: {
    flavorText: 'Il change de couleur à volonté, mais le motif en zigzag qui orne son ventre reste le même.',
    stats: { hp: 60, attack: 90, defense: 70, specialAttack: 60, specialDefense: 120, speed: 40 },
    moves: [
      { name: 'Léchouille', type: PokemonElementType.ghost, power: 30, description: 'Un grand coup de langue qui inflige des dégâts à l’ennemi. Peut aussi le paralyser.' },
      { name: 'Étreinte', type: PokemonElementType.normal, power: 15, description: 'Ligote l’ennemi avec les tentacules ou le corps pour l’écraser durant 4 à 5 tours.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
    ],
  },
  castform: {
    flavorText: 'Son aspect change avec la météo. On a récemment découvert que ses molécules étaient pareilles à l’eau.',
    stats: { hp: 70, attack: 70, defense: 70, specialAttack: 70, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Poudreuse', type: PokemonElementType.ice, power: 40, description: 'Le lanceur projette de la neige poudreuse. Peut aussi geler l’ennemi.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Ball’Météo', type: PokemonElementType.normal, power: 50, description: 'Une attaque dont la puissance et le type varient en fonction du temps qu’il fait.' },
      { name: 'Pistolet à O', type: PokemonElementType.water, power: 40, description: 'De l’eau est projetée sur l’ennemi en arc de cercle.' },
    ],
  },
  shuppet: {
    flavorText: 'Il aime le goût de la vengeance. Ils vivent en rangs sous les gouttières des gens vindicatifs.',
    stats: { hp: 44, attack: 75, defense: 35, specialAttack: 63, specialDefense: 33, speed: 45 },
    moves: [
      { name: 'Rancune', type: PokemonElementType.ghost, power: null, description: 'Si le lanceur est mis K.O., sa rancune épuise les PP de la capacité utilisée pour le mettre K.O.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
      { name: 'Ombre Nocturne', type: PokemonElementType.ghost, power: null, description: 'Le lanceur invoque un mirage. Inflige des dégâts équivalents au niveau du lanceur.' },
      { name: 'Saisie', type: PokemonElementType.dark, power: null, description: 'Le lanceur vole l’effet des capacités de soin ou de changement de stats utilisées par la cible.' },
    ],
  },
  banette: {
    flavorText: 'Une poupée mue par la tristesse qui la ronge depuis qu’on l’a délaissée. Elle recherche son propriétaire.',
    stats: { hp: 64, attack: 115, defense: 65, specialAttack: 83, specialDefense: 63, speed: 65 },
    moves: [
      { name: 'Rancune', type: PokemonElementType.ghost, power: null, description: 'Si le lanceur est mis K.O., sa rancune épuise les PP de la capacité utilisée pour le mettre K.O.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
      { name: 'Ombre Nocturne', type: PokemonElementType.ghost, power: null, description: 'Le lanceur invoque un mirage. Inflige des dégâts équivalents au niveau du lanceur.' },
      { name: 'Saisie', type: PokemonElementType.dark, power: null, description: 'Le lanceur vole l’effet des capacités de soin ou de changement de stats utilisées par la cible.' },
    ],
  },
  duskull: {
    flavorText: 'Les cris des enfants l’amusent. Il effraie les moins sages d’entre eux en traversant les murs.',
    stats: { hp: 20, attack: 40, defense: 90, specialAttack: 30, specialDefense: 90, speed: 25 },
    moves: [
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Regard Noir', type: PokemonElementType.normal, power: null, description: 'Le lanceur pétrifie l’ennemi en lui lançant un regard noir. Il devient incapable de s’enfuir.' },
      { name: 'Poursuite', type: PokemonElementType.dark, power: 40, description: 'Une attaque qui inflige deux fois plus de dégâts à un ennemi qui quitte le combat.' },
      { name: 'Entrave', type: PokemonElementType.normal, power: null, description: 'Empêche l’ennemi d’employer à nouveau sa dernière attaque. Dure quatre tours.' },
    ],
  },
  dusclops: {
    flavorText: 'Il cherche des feux follets pour les avaler. Ce qui se passe alors dans son corps est un mystère.',
    stats: { hp: 40, attack: 70, defense: 130, specialAttack: 60, specialDefense: 130, speed: 25 },
    moves: [
      { name: 'Poing Ombre', type: PokemonElementType.ghost, power: 60, description: 'Le lanceur surgit des ombres et donne un coup de poing. N’échoue jamais.' },
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Regard Noir', type: PokemonElementType.normal, power: null, description: 'Le lanceur pétrifie l’ennemi en lui lançant un regard noir. Il devient incapable de s’enfuir.' },
      { name: 'Étreinte', type: PokemonElementType.normal, power: 15, description: 'Ligote l’ennemi avec les tentacules ou le corps pour l’écraser durant 4 à 5 tours.' },
    ],
  },
  tropius: {
    flavorText: 'À force de toujours manger le même fruit succulent, il en pousse à la base de son cou.',
    stats: { hp: 99, attack: 68, defense: 83, specialAttack: 72, specialDefense: 87, speed: 51 },
    moves: [
      { name: 'Tornade', type: PokemonElementType.flying, power: 40, description: 'Le lanceur bat des ailes pour générer une bourrasque qui blesse l’ennemi.' },
      { name: 'Cyclone', type: PokemonElementType.normal, power: null, description: 'Éjecte le Pokémon ennemi et le remplace par un autre. Dans la nature, met fin au combat.' },
      { name: 'Écrasement', type: PokemonElementType.normal, power: 65, description: 'Écrase l’ennemi avec un énorme pied. Peut aussi l’apeurer.' },
      { name: 'Tranch’Herbe', type: PokemonElementType.grass, power: 55, description: 'Des feuilles aiguisées comme des rasoirs entaillent l’ennemi. Taux de critiques élevé.' },
    ],
  },
  chimecho: {
    flavorText: 'Ses cris se répercutent dans son corps creux avant d’exploser en notes mélodieuses et saisissantes.',
    stats: { hp: 75, attack: 50, defense: 80, specialAttack: 95, specialDefense: 90, speed: 65 },
    moves: [
      { name: 'Ligotage', type: PokemonElementType.normal, power: 15, description: 'Le lanceur ligote l’ennemi avec des lianes ou son corps pour l’écraser durant 4 à 5 tours.' },
      { name: 'Vague Psy', type: PokemonElementType.psychic, power: null, description: 'Une étrange onde d’énergie chaude frappe l’ennemi. Cette attaque est d’intensité variable.' },
      { name: 'Glas de Soin', type: PokemonElementType.normal, power: null, description: 'Carillon apaisant qui soigne les problèmes de statut de tous les Pokémon de l’équipe.' },
      { name: 'Bâillement', type: PokemonElementType.normal, power: null, description: 'Fait bâiller l’ennemi qui s’endort au tour suivant.' },
    ],
  },
  absol: {
    flavorText: 'La capacité de sa corne à sentir les catastrophes ayant trop attiré l’attention sur lui, il vit reclus.',
    stats: { hp: 65, attack: 130, defense: 60, specialAttack: 75, specialDefense: 60, speed: 75 },
    moves: [
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
      { name: 'Coupe-Vent', type: PokemonElementType.normal, power: 80, description: 'Attaque en 2 tours. Des lames de vent frappent l’ennemi au 2è tour. Taux de critiques élevé.' },
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
      { name: 'Prescience', type: PokemonElementType.psychic, power: 120, description: 'De l’énergie psychique vient frapper l’ennemi 2 tours après l’utilisation de cette capacité.' },
    ],
  },
  wynaut: {
    flavorText: 'Il se muscle en bousculant ses semblables lors de mêlées. Il raffole des fruits sucrés.',
    stats: { hp: 95, attack: 23, defense: 48, specialAttack: 23, specialDefense: 48, speed: 23 },
    moves: [
      { name: 'Trempette', type: PokemonElementType.normal, power: null, description: 'Le lanceur barbote et éclabousse les environs. Cette capacité n’a aucun effet.' },
      { name: 'Voile Miroir', type: PokemonElementType.psychic, power: null, description: 'Une riposte qui contre n’importe quelle attaque spéciale en infligeant le double des dégâts subis.' },
      { name: 'Lien du Destin', type: PokemonElementType.ghost, power: null, description: 'Quand cette capacité est activée, elle met K.O. un ennemi qui porte un coup fatal au lanceur.' },
      { name: 'Encore', type: PokemonElementType.normal, power: null, description: 'Oblige l’ennemi à répéter la dernière capacité utilisée durant 3 tours.' },
    ],
  },
  snorunt: {
    flavorText: 'On dit que des groupes entiers de Stalgamin vivent en harmonie sous des feuilles gigantesques.',
    stats: { hp: 50, attack: 50, defense: 50, specialAttack: 50, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'Poudreuse', type: PokemonElementType.ice, power: 40, description: 'Le lanceur projette de la neige poudreuse. Peut aussi geler l’ennemi.' },
      { name: 'Grêle', type: PokemonElementType.ice, power: null, description: 'Invoque une tempête de grêle qui dure 5 tours. Ne blesse pas les Pokémon de type Glace.' },
      { name: 'Morsure', type: PokemonElementType.dark, power: 60, description: 'L’ennemi est mordu par de tranchantes canines. Peut l’apeurer.' },
      { name: 'Groz’Yeux', type: PokemonElementType.normal, power: null, description: 'Le lanceur fait les gros yeux à l’ennemi pour l’intimider et baisser sa Défense.' },
    ],
  },
  glalie: {
    flavorText: 'Il empêche ses proies de prendre la fuite en gelant instantanément l’humidité de l’air.',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80 },
    moves: [
      { name: 'Glaciation', type: PokemonElementType.ice, power: null, description: 'Une vague de froid glacial frappe l’ennemi. S’il est touché, il est mis K.O. sur le coup.' },
      { name: 'Poudreuse', type: PokemonElementType.ice, power: 40, description: 'Le lanceur projette de la neige poudreuse. Peut aussi geler l’ennemi.' },
      { name: 'Grêle', type: PokemonElementType.ice, power: null, description: 'Invoque une tempête de grêle qui dure 5 tours. Ne blesse pas les Pokémon de type Glace.' },
      { name: 'Morsure', type: PokemonElementType.dark, power: 60, description: 'L’ennemi est mordu par de tranchantes canines. Peut l’apeurer.' },
    ],
  },
  spheal: {
    flavorText: 'Il gagne la côte en roulant sur les blocs de glace car sa morphologie n’est pas adaptée à la nage.',
    stats: { hp: 70, attack: 40, defense: 50, specialAttack: 55, specialDefense: 50, speed: 25 },
    moves: [
      { name: 'Ball’Glace', type: PokemonElementType.ice, power: 30, description: 'Envoie une balle de glace pendant 5 tours. L’attaque gagne en puissance à chaque coup.' },
      { name: 'Glaciation', type: PokemonElementType.ice, power: null, description: 'Une vague de froid glacial frappe l’ennemi. S’il est touché, il est mis K.O. sur le coup.' },
      { name: 'Onde Boréale', type: PokemonElementType.ice, power: 65, description: 'Envoie un rayon arc-en-ciel sur l’ennemi. Peut aussi baisser son Attaque.' },
      { name: 'Poudreuse', type: PokemonElementType.ice, power: 40, description: 'Le lanceur projette de la neige poudreuse. Peut aussi geler l’ennemi.' },
    ],
  },
  sealeo: {
    flavorText: 'Il fait souvent tourner des objets sur son museau pour connaître leur odeur et leur texture.',
    stats: { hp: 90, attack: 60, defense: 70, specialAttack: 75, specialDefense: 70, speed: 45 },
    moves: [
      { name: 'Ball’Glace', type: PokemonElementType.ice, power: 30, description: 'Envoie une balle de glace pendant 5 tours. L’attaque gagne en puissance à chaque coup.' },
      { name: 'Glaciation', type: PokemonElementType.ice, power: null, description: 'Une vague de froid glacial frappe l’ennemi. S’il est touché, il est mis K.O. sur le coup.' },
      { name: 'Onde Boréale', type: PokemonElementType.ice, power: 65, description: 'Envoie un rayon arc-en-ciel sur l’ennemi. Peut aussi baisser son Attaque.' },
      { name: 'Poudreuse', type: PokemonElementType.ice, power: 40, description: 'Le lanceur projette de la neige poudreuse. Peut aussi geler l’ennemi.' },
    ],
  },
  walrein: {
    flavorText: 'Il brise la glace avec ses grosses défenses. Sa graisse le protège du froid, mais aussi des attaques.',
    stats: { hp: 110, attack: 80, defense: 90, specialAttack: 95, specialDefense: 90, speed: 65 },
    moves: [
      { name: 'Ball’Glace', type: PokemonElementType.ice, power: 30, description: 'Envoie une balle de glace pendant 5 tours. L’attaque gagne en puissance à chaque coup.' },
      { name: 'Glaciation', type: PokemonElementType.ice, power: null, description: 'Une vague de froid glacial frappe l’ennemi. S’il est touché, il est mis K.O. sur le coup.' },
      { name: 'Onde Boréale', type: PokemonElementType.ice, power: 65, description: 'Envoie un rayon arc-en-ciel sur l’ennemi. Peut aussi baisser son Attaque.' },
      { name: 'Poudreuse', type: PokemonElementType.ice, power: 40, description: 'Le lanceur projette de la neige poudreuse. Peut aussi geler l’ennemi.' },
    ],
  },
  clamperl: {
    flavorText: 'Il ne produit qu’une perle durant son existence. On raconte qu’elle amplifie les pouvoirs psychiques.',
    stats: { hp: 35, attack: 64, defense: 85, specialAttack: 74, specialDefense: 55, speed: 32 },
    moves: [
      { name: 'Claquoir', type: PokemonElementType.water, power: 35, description: 'Le lanceur piège l’ennemi dans sa dure coquille et l’écrase pendant 4 à 5 tours.' },
      { name: 'Pistolet à O', type: PokemonElementType.water, power: 40, description: 'De l’eau est projetée sur l’ennemi en arc de cercle.' },
      { name: 'Siphon', type: PokemonElementType.water, power: 35, description: 'Piège l’ennemi dans une trombe d’eau pendant 4 à 5 tours.' },
      { name: 'Mur de Fer', type: PokemonElementType.steel, power: null, description: 'L’épiderme du lanceur devient dur comme du fer, ce qui augmente considérablement sa Défense.' },
    ],
  },
  huntail: {
    flavorText: 'Il vit loin sous la mer. Il appâte les proies crédules avec sa queue qui rappelle un petit poisson.',
    stats: { hp: 55, attack: 104, defense: 105, specialAttack: 94, specialDefense: 75, speed: 52 },
    moves: [
      { name: 'Siphon', type: PokemonElementType.water, power: 35, description: 'Piège l’ennemi dans une trombe d’eau pendant 4 à 5 tours.' },
      { name: 'Hydrocanon', type: PokemonElementType.water, power: 110, description: 'Un puissant jet d’eau est dirigé sur l’ennemi.' },
      { name: 'Relais', type: PokemonElementType.normal, power: null, description: 'Le lanceur échange sa place et tout changement de stat avec un Pokémon de l’équipe.' },
      { name: 'Grincement', type: PokemonElementType.normal, power: null, description: 'Cri strident qui baisse beaucoup la Défense ennemie.' },
    ],
  },
  gorebyss: {
    flavorText: 'Au printemps, son corps rose se fait plus vif sans que l’on sache pourquoi. Il vit au fond de la mer.',
    stats: { hp: 55, attack: 84, defense: 105, specialAttack: 114, specialDefense: 75, speed: 52 },
    moves: [
      { name: 'Choc Mental', type: PokemonElementType.psychic, power: 50, description: 'Une faible vague télékinésique frappe l’ennemi. Peut aussi le plonger dans la confusion.' },
      { name: 'Amnésie', type: PokemonElementType.psychic, power: null, description: 'Le lanceur fait le vide dans son esprit pour oublier ses soucis. Augmente fortement sa Défense Spéciale.' },
      { name: 'Siphon', type: PokemonElementType.water, power: 35, description: 'Piège l’ennemi dans une trombe d’eau pendant 4 à 5 tours.' },
      { name: 'Hydrocanon', type: PokemonElementType.water, power: 110, description: 'Un puissant jet d’eau est dirigé sur l’ennemi.' },
    ],
  },
  relicanth: {
    flavorText: 'Un Pokémon rare aperçu lors d’une exploration sous-marine. Il n’a pas évolué depuis 100 millions d’années.',
    stats: { hp: 100, attack: 90, defense: 130, specialAttack: 45, specialDefense: 65, speed: 55 },
    moves: [
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
      { name: 'Bâillement', type: PokemonElementType.normal, power: null, description: 'Fait bâiller l’ennemi qui s’endort au tour suivant.' },
      { name: 'Pistolet à O', type: PokemonElementType.water, power: 40, description: 'De l’eau est projetée sur l’ennemi en arc de cercle.' },
    ],
  },
  luvdisc: {
    flavorText: 'Un habitant des mers chaudes. On dit que le couple qui tombe sur ce Pokémon connaîtra l’amour éternel.',
    stats: { hp: 43, attack: 30, defense: 55, specialAttack: 40, specialDefense: 65, speed: 97 },
    moves: [
      { name: 'Doux Baiser', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie un bisou si mignon et désarmant qu’il plonge l’ennemi dans la confusion.' },
      { name: 'Gigotage', type: PokemonElementType.normal, power: null, description: 'Le lanceur fait tournoyer son fléau. Plus ses PV sont bas, plus l’attaque est puissante.' },
      { name: 'Pistolet à O', type: PokemonElementType.water, power: 40, description: 'De l’eau est projetée sur l’ennemi en arc de cercle.' },
      { name: 'Charme', type: PokemonElementType.normal, power: null, description: 'Le lanceur fait les yeux doux pour berner l’ennemi et réduire considérablement son Attaque.' },
    ],
  },
  bagon: {
    flavorText: 'Il rêve de pouvoir voler un jour. Pour l’heure, il s’entraîne en sautant du haut des falaises.',
    stats: { hp: 45, attack: 75, defense: 60, specialAttack: 40, specialDefense: 30, speed: 50 },
    moves: [
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Draco-Souffle', type: PokemonElementType.dragon, power: 60, description: 'Le lanceur souffle fort sur l’ennemi pour infliger des dégâts. Peut aussi le paralyser.' },
      { name: 'Draco-Griffe', type: PokemonElementType.dragon, power: 80, description: 'Le lanceur lacère l’ennemi de ses grandes griffes aiguisées.' },
      { name: 'Frénésie', type: PokemonElementType.normal, power: 20, description: 'Une fois activée, cette capacité augmente l’Attaque du lanceur à mesure que celui-ci subit des attaques.' },
    ],
  },
  beldum: {
    flavorText: 'Il dialogue avec les siens par impulsions magnétiques. En bande, ils se déplacent à l’unisson.',
    stats: { hp: 40, attack: 55, defense: 80, specialAttack: 35, specialDefense: 60, speed: 30 },
    moves: [
      { name: 'Bélier', type: PokemonElementType.normal, power: 90, description: 'Une charge violente qui blesse aussi légèrement le lanceur.' },
    ],
  },
  shelgon: {
    flavorText: 'Ses cellules ont commencé à changer dans sa robuste coquille. Il la perd en évoluant.',
    stats: { hp: 65, attack: 95, defense: 100, specialAttack: 60, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Draco-Souffle', type: PokemonElementType.dragon, power: 60, description: 'Le lanceur souffle fort sur l’ennemi pour infliger des dégâts. Peut aussi le paralyser.' },
      { name: 'Draco-Griffe', type: PokemonElementType.dragon, power: 80, description: 'Le lanceur lacère l’ennemi de ses grandes griffes aiguisées.' },
      { name: 'Frénésie', type: PokemonElementType.normal, power: 20, description: 'Une fois activée, cette capacité augmente l’Attaque du lanceur à mesure que celui-ci subit des attaques.' },
    ],
  },
  salamence: {
    flavorText: 'À force de rêver de pouvoir voler, sa structure cellulaire a évolué et il s’est vu pousser des ailes.',
    stats: { hp: 95, attack: 135, defense: 80, specialAttack: 110, specialDefense: 80, speed: 100 },
    moves: [
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Draco-Souffle', type: PokemonElementType.dragon, power: 60, description: 'Le lanceur souffle fort sur l’ennemi pour infliger des dégâts. Peut aussi le paralyser.' },
      { name: 'Draco-Griffe', type: PokemonElementType.dragon, power: 80, description: 'Le lanceur lacère l’ennemi de ses grandes griffes aiguisées.' },
      { name: 'Vol', type: PokemonElementType.flying, power: 90, description: 'Le lanceur s’envole au 1er tour et frappe au 2è. Permet aussi de voler jusqu’à une ville déjà visitée.' },
    ],
  },
  metang: {
    flavorText: 'Il est formé de deux Terhal soudés. Son corps de fer résiste à un choc avec un avion à réaction.',
    stats: { hp: 60, attack: 75, defense: 100, specialAttack: 55, specialDefense: 80, speed: 50 },
    moves: [
      { name: 'Poing Météore', type: PokemonElementType.steel, power: 90, description: 'Un coup de poing lancé à la vitesse d’un météore. Peut aussi augmenter l’Attaque du lanceur.' },
      { name: 'Poursuite', type: PokemonElementType.dark, power: 40, description: 'Une attaque qui inflige deux fois plus de dégâts à un ennemi qui quitte le combat.' },
      { name: 'Griffe Acier', type: PokemonElementType.steel, power: 50, description: 'Attaque avec des griffes d’acier. Peut aussi augmenter l’Attaque du lanceur.' },
      { name: 'Choc Mental', type: PokemonElementType.psychic, power: 50, description: 'Une faible vague télékinésique frappe l’ennemi. Peut aussi le plonger dans la confusion.' },
    ],
  },
  metagross: {
    flavorText: 'Il est né de la fusion de plusieurs Métang. Ses quatre cerveaux en font l’égal d’un superordinateur.',
    stats: { hp: 80, attack: 135, defense: 130, specialAttack: 95, specialDefense: 90, speed: 70 },
    moves: [
      { name: 'Poing Météore', type: PokemonElementType.steel, power: 90, description: 'Un coup de poing lancé à la vitesse d’un météore. Peut aussi augmenter l’Attaque du lanceur.' },
      { name: 'Poursuite', type: PokemonElementType.dark, power: 40, description: 'Une attaque qui inflige deux fois plus de dégâts à un ennemi qui quitte le combat.' },
      { name: 'Griffe Acier', type: PokemonElementType.steel, power: 50, description: 'Attaque avec des griffes d’acier. Peut aussi augmenter l’Attaque du lanceur.' },
      { name: 'Choc Mental', type: PokemonElementType.psychic, power: 50, description: 'Une faible vague télékinésique frappe l’ennemi. Peut aussi le plonger dans la confusion.' },
    ],
  },
  regirock: {
    flavorText: 'Tout son corps est fait de roche. S’il s’ébrèche au combat, il utilise des pierres pour le réparer.',
    stats: { hp: 80, attack: 100, defense: 200, specialAttack: 50, specialDefense: 100, speed: 50 },
    moves: [
      { name: 'Verrouillage', type: PokemonElementType.normal, power: null, description: 'Verrouille l’ennemi pour ne pas le rater au tour suivant.' },
      { name: 'Jet-Pierres', type: PokemonElementType.rock, power: 50, description: 'Le lanceur lâche une pierre sur l’ennemi.' },
      { name: 'Élecanon', type: PokemonElementType.electric, power: 120, description: 'Un boulet de canon électrifié qui inflige des dégâts et paralyse l’ennemi.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'Le lanceur explose et inflige des dégâts à tous les Pokémon autour de lui. Met K.O. le lanceur.' },
    ],
  },
  regice: {
    flavorText: 'Son corps est fait de glace datant de l’ère glaciaire. Il contrôle un air gelé de -200 °C.',
    stats: { hp: 80, attack: 50, defense: 100, specialAttack: 100, specialDefense: 200, speed: 50 },
    moves: [
      { name: 'Verrouillage', type: PokemonElementType.normal, power: null, description: 'Verrouille l’ennemi pour ne pas le rater au tour suivant.' },
      { name: 'Élecanon', type: PokemonElementType.electric, power: 120, description: 'Un boulet de canon électrifié qui inflige des dégâts et paralyse l’ennemi.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'Le lanceur explose et inflige des dégâts à tous les Pokémon autour de lui. Met K.O. le lanceur.' },
      { name: 'Amnésie', type: PokemonElementType.psychic, power: null, description: 'Le lanceur fait le vide dans son esprit pour oublier ses soucis. Augmente fortement sa Défense Spéciale.' },
    ],
  },
  registeel: {
    flavorText: 'Son corps invulnérable fut forgé par la pression souterraine durant des dizaines de milliers d’années.',
    stats: { hp: 80, attack: 75, defense: 150, specialAttack: 75, specialDefense: 150, speed: 50 },
    moves: [
      { name: 'Verrouillage', type: PokemonElementType.normal, power: null, description: 'Verrouille l’ennemi pour ne pas le rater au tour suivant.' },
      { name: 'Élecanon', type: PokemonElementType.electric, power: 120, description: 'Un boulet de canon électrifié qui inflige des dégâts et paralyse l’ennemi.' },
      { name: 'Griffe Acier', type: PokemonElementType.steel, power: 50, description: 'Attaque avec des griffes d’acier. Peut aussi augmenter l’Attaque du lanceur.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'Le lanceur explose et inflige des dégâts à tous les Pokémon autour de lui. Met K.O. le lanceur.' },
    ],
  },
  latias: {
    flavorText: 'Son corps est recouvert d’un duvet qui reflète la lumière et le rend invisible.',
    stats: { hp: 80, attack: 80, defense: 90, specialAttack: 110, specialDefense: 130, speed: 110 },
    moves: [
      { name: 'Ball’Brume', type: PokemonElementType.psychic, power: 95, description: 'Une bulle de brume inflige des dégâts à l’ennemi. Peut aussi réduire son Attaque Spéciale.' },
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
      { name: 'Vague Psy', type: PokemonElementType.psychic, power: null, description: 'Une étrange onde d’énergie chaude frappe l’ennemi. Cette attaque est d’intensité variable.' },
      { name: 'Régénération', type: PokemonElementType.normal, power: null, description: 'Le lanceur se repose pour guérir d’un empoisonnement, d’une brûlure ou d’une paralysie.' },
    ],
  },
  kyogre: {
    flavorText: 'On dit qu’il a fait monter les eaux en causant des pluies diluviennes. Il somnolait dans une fosse marine.',
    stats: { hp: 100, attack: 100, defense: 90, specialAttack: 150, specialDefense: 140, speed: 90 },
    moves: [
      { name: 'Giclédo', type: PokemonElementType.water, power: 150, description: 'Le lanceur attaque avec un jet d’eau. Moins il a de PV et moins l’attaque est puissante.' },
      { name: 'Glaciation', type: PokemonElementType.ice, power: null, description: 'Une vague de froid glacial frappe l’ennemi. S’il est touché, il est mis K.O. sur le coup.' },
      { name: 'Pouvoir Antique', type: PokemonElementType.rock, power: 60, description: 'Une attaque préhistorique qui peut augmenter toutes les stats du lanceur d’un seul coup.' },
      { name: 'Hydrocanon', type: PokemonElementType.water, power: 110, description: 'Un puissant jet d’eau est dirigé sur l’ennemi.' },
    ],
  },
  latios: {
    flavorText: 'Un Pokémon très intelligent. Il peut voler plus vite qu’un avion à réaction en repliant ses ailes.',
    stats: { hp: 80, attack: 90, defense: 80, specialAttack: 130, specialDefense: 110, speed: 110 },
    moves: [
      { name: 'Lumi-Éclat', type: PokemonElementType.psychic, power: 95, description: 'Le lanceur libère un éclair lumineux. Peut aussi baisser la Défense Spéciale de l’ennemi.' },
      { name: 'Vague Psy', type: PokemonElementType.psychic, power: null, description: 'Une étrange onde d’énergie chaude frappe l’ennemi. Cette attaque est d’intensité variable.' },
      { name: 'Régénération', type: PokemonElementType.normal, power: null, description: 'Le lanceur se repose pour guérir d’un empoisonnement, d’une brûlure ou d’une paralysie.' },
      { name: 'Souvenir', type: PokemonElementType.dark, power: null, description: 'Le lanceur est mis K.O., mais l’Attaque et l’Attaque Spéciale de l’ennemi baissent beaucoup.' },
    ],
  },
  groudon: {
    flavorText: 'Il dormait dans le magma souterrain depuis sa lutte féroce contre Kyogre, il y a longtemps de cela.',
    stats: { hp: 100, attack: 150, defense: 140, specialAttack: 100, specialDefense: 90, speed: 90 },
    moves: [
      { name: 'Éruption', type: PokemonElementType.fire, power: 150, description: 'Le lanceur laisse exploser sa colère. Plus ses PV sont bas et moins l’attaque est puissante.' },
      { name: 'Abîme', type: PokemonElementType.ground, power: null, description: 'Le lanceur fait tomber l’ennemi dans une crevasse. Si cette attaque réussit, elle met K.O. sur le coup.' },
      { name: 'Tranche', type: PokemonElementType.normal, power: 70, description: 'Un coup de griffe ou autre tranche l’ennemi. Taux de critiques élevé.' },
      { name: 'Gonflette', type: PokemonElementType.fighting, power: null, description: 'Le lanceur tend ses muscles pour se gonfler, ce qui booste son Attaque et sa Défense.' },
    ],
  },
  rayquaza: {
    flavorText: 'Il vit dans la couche d’ozone, au dessus des nuages. Il est invisible depuis le sol.',
    stats: { hp: 105, attack: 150, defense: 90, specialAttack: 150, specialDefense: 90, speed: 95 },
    moves: [
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Danse Draco', type: PokemonElementType.dragon, power: null, description: 'Une danse mystique dont le rythme effréné augmente l’Attaque et la Vitesse du lanceur.' },
      { name: 'Ouragan', type: PokemonElementType.dragon, power: 40, description: 'Déclenche un terrible ouragan sur l’ennemi. Peut aussi l’apeurer.' },
      { name: 'Draco-Griffe', type: PokemonElementType.dragon, power: 80, description: 'Le lanceur lacère l’ennemi de ses grandes griffes aiguisées.' },
    ],
  },
  jirachi: {
    flavorText: 'On raconte qu’une fois tous les mille ans, il a la capacité d’exaucer tous les vœux durant une semaine.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Vœu Destructeur', type: PokemonElementType.steel, power: 140, description: 'Le lanceur génère une sphère lumineuse qu’il projette sur l’ennemi 2 tours plus tard.' },
      { name: 'Force Cosmique', type: PokemonElementType.psychic, power: null, description: 'Le lanceur absorbe un pouvoir mystique spatial qui augmente sa Défense et sa Défense Spéciale.' },
      { name: 'Régénération', type: PokemonElementType.normal, power: null, description: 'Le lanceur se repose pour guérir d’un empoisonnement, d’une brûlure ou d’une paralysie.' },
      { name: 'Vœu', type: PokemonElementType.normal, power: null, description: 'Un vœu qui permet de récupérer la moitié des PV max au tour suivant.' },
    ],
  },
  deoxys: {
    flavorText: 'Il vient d’un virus extraterrestre arrivé avec une météorite et ayant subi une mutation génétique.',
    stats: { hp: 50, attack: 150, defense: 50, specialAttack: 150, specialDefense: 50, speed: 150 },
    moves: [
      { name: 'Psycho-Boost', type: PokemonElementType.psychic, power: 140, description: 'Attaque l’ennemi à pleine puissance. Le contrecoup baisse énormément l’Attaque Spéciale du lanceur.' },
      { name: 'Ligotage', type: PokemonElementType.normal, power: 15, description: 'Le lanceur ligote l’ennemi avec des lianes ou son corps pour l’écraser durant 4 à 5 tours.' },
      { name: 'Téléport', type: PokemonElementType.psychic, power: null, description: 'Permet de fuir un Pokémon sauvage. Permet aussi de revenir au dernier Centre Pokémon visité.' },
      { name: 'Force Cosmique', type: PokemonElementType.psychic, power: null, description: 'Le lanceur absorbe un pouvoir mystique spatial qui augmente sa Défense et sa Défense Spéciale.' },
    ],
  },
  deoxys_speed: {
    flavorText: 'Il vient d’un virus extraterrestre arrivé avec une météorite et ayant subi une mutation génétique.',
    stats: { hp: 50, attack: 95, defense: 90, specialAttack: 95, specialDefense: 90, speed: 180 },
    moves: [
      { name: 'Psycho-Boost', type: PokemonElementType.psychic, power: 140, description: 'Attaque l’ennemi à pleine puissance. Le contrecoup baisse énormément l’Attaque Spéciale du lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Ligotage', type: PokemonElementType.normal, power: 15, description: 'Le lanceur ligote l’ennemi avec des lianes ou son corps pour l’écraser durant 4 à 5 tours.' },
      { name: 'Soin', type: PokemonElementType.normal, power: null, description: 'Un soin qui permet au lanceur de récupérer jusqu’à la moitié de ses PV max.' },
    ],
  },
  deoxys_attack: {
    flavorText: 'Il vient d’un virus extraterrestre arrivé avec une météorite et ayant subi une mutation génétique.',
    stats: { hp: 50, attack: 180, defense: 20, specialAttack: 180, specialDefense: 20, speed: 150 },
    moves: [
      { name: 'Psycho-Boost', type: PokemonElementType.psychic, power: 140, description: 'Attaque l’ennemi à pleine puissance. Le contrecoup baisse énormément l’Attaque Spéciale du lanceur.' },
      { name: 'Ligotage', type: PokemonElementType.normal, power: 15, description: 'Le lanceur ligote l’ennemi avec des lianes ou son corps pour l’écraser durant 4 à 5 tours.' },
      { name: 'Téléport', type: PokemonElementType.psychic, power: null, description: 'Permet de fuir un Pokémon sauvage. Permet aussi de revenir au dernier Centre Pokémon visité.' },
      { name: 'Force Cosmique', type: PokemonElementType.psychic, power: null, description: 'Le lanceur absorbe un pouvoir mystique spatial qui augmente sa Défense et sa Défense Spéciale.' },
    ],
  },
  deoxys_defense: {
    flavorText: 'Il vient d’un virus extraterrestre arrivé avec une météorite et ayant subi une mutation génétique.',
    stats: { hp: 50, attack: 70, defense: 160, specialAttack: 70, specialDefense: 160, speed: 90 },
    moves: [
      { name: 'Psycho-Boost', type: PokemonElementType.psychic, power: 140, description: 'Attaque l’ennemi à pleine puissance. Le contrecoup baisse énormément l’Attaque Spéciale du lanceur.' },
      { name: 'Ligotage', type: PokemonElementType.normal, power: 15, description: 'Le lanceur ligote l’ennemi avec des lianes ou son corps pour l’écraser durant 4 à 5 tours.' },
      { name: 'Téléport', type: PokemonElementType.psychic, power: null, description: 'Permet de fuir un Pokémon sauvage. Permet aussi de revenir au dernier Centre Pokémon visité.' },
      { name: 'Voile Miroir', type: PokemonElementType.psychic, power: null, description: 'Une riposte qui contre n’importe quelle attaque spéciale en infligeant le double des dégâts subis.' },
    ],
  },
  turtwig: {
    flavorText: 'La coquille sur son dos est faite de terre. Plus il est en bonne santé, plus elle est humide.',
    stats: { hp: 55, attack: 68, defense: 64, specialAttack: 45, specialDefense: 55, speed: 31 },
    moves: [
      { name: 'Repli', type: PokemonElementType.water, power: null, description: 'Le lanceur se recroqueville dans sa carapace, ce qui augmente sa Défense.' },
      { name: 'Tranch’Herbe', type: PokemonElementType.grass, power: 55, description: 'Des feuilles aiguisées comme des rasoirs entaillent l’ennemi. Taux de critiques élevé.' },
      { name: 'Vole-Vie', type: PokemonElementType.grass, power: 20, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
      { name: 'Méga-Sangsue', type: PokemonElementType.grass, power: 40, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
    ],
  },
  grotle: {
    flavorText: 'Il sait d’instinct où trouver une source d’eau pure. Il y transporte d’autres Pokémon sur son dos.',
    stats: { hp: 75, attack: 89, defense: 85, specialAttack: 55, specialDefense: 65, speed: 36 },
    moves: [
      { name: 'Repli', type: PokemonElementType.water, power: null, description: 'Le lanceur se recroqueville dans sa carapace, ce qui augmente sa Défense.' },
      { name: 'Tranch’Herbe', type: PokemonElementType.grass, power: 55, description: 'Des feuilles aiguisées comme des rasoirs entaillent l’ennemi. Taux de critiques élevé.' },
      { name: 'Vole-Vie', type: PokemonElementType.grass, power: 20, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
      { name: 'Méga-Sangsue', type: PokemonElementType.grass, power: 40, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
    ],
  },
  torterra: {
    flavorText: 'Certains petits Pokémon peuvent naître sur son dos et y passer toute leur vie.',
    stats: { hp: 95, attack: 109, defense: 105, specialAttack: 75, specialDefense: 85, speed: 56 },
    moves: [
      { name: 'Martobois', type: PokemonElementType.grass, power: 120, description: 'Le lanceur heurte l’ennemi de son corps robuste. Inflige de sérieux dégâts au lanceur aussi.' },
      { name: 'Repli', type: PokemonElementType.water, power: null, description: 'Le lanceur se recroqueville dans sa carapace, ce qui augmente sa Défense.' },
      { name: 'Tranch’Herbe', type: PokemonElementType.grass, power: 55, description: 'Des feuilles aiguisées comme des rasoirs entaillent l’ennemi. Taux de critiques élevé.' },
      { name: 'Vole-Vie', type: PokemonElementType.grass, power: 20, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
    ],
  },
  chimchar: {
    flavorText: 'Il est très agile. Il fait toujours attention d’éteindre la flamme de sa queue avant de se coucher.',
    stats: { hp: 44, attack: 58, defense: 44, specialAttack: 58, specialDefense: 44, speed: 61 },
    moves: [
      { name: 'Paresse', type: PokemonElementType.normal, power: null, description: 'Le lanceur se tourne les pouces et récupère jusqu’à la moitié de ses PV max.' },
      { name: 'Roue de Feu', type: PokemonElementType.fire, power: 60, description: 'Le lanceur s’entoure de feu et charge l’ennemi. Peut aussi brûler l’ennemi.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
    ],
  },
  monferno: {
    flavorText: 'Il contrôle habilement l’intensité de la flamme de sa queue pour tenir ses adversaires à distance.',
    stats: { hp: 64, attack: 78, defense: 52, specialAttack: 78, specialDefense: 52, speed: 81 },
    moves: [
      { name: 'Paresse', type: PokemonElementType.normal, power: null, description: 'Le lanceur se tourne les pouces et récupère jusqu’à la moitié de ses PV max.' },
      { name: 'Mach Punch', type: PokemonElementType.fighting, power: 40, description: 'Coup de poing fulgurant. Frappe en premier.' },
      { name: 'Roue de Feu', type: PokemonElementType.fire, power: 60, description: 'Le lanceur s’entoure de feu et charge l’ennemi. Peut aussi brûler l’ennemi.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
    ],
  },
  infernape: {
    flavorText: 'Ses techniques de combat inédites à base de pieds et poings enflammés sont redoutables.',
    stats: { hp: 76, attack: 104, defense: 71, specialAttack: 104, specialDefense: 71, speed: 108 },
    moves: [
      { name: 'Mach Punch', type: PokemonElementType.fighting, power: 40, description: 'Coup de poing fulgurant. Frappe en premier.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Roue de Feu', type: PokemonElementType.fire, power: 60, description: 'Le lanceur s’entoure de feu et charge l’ennemi. Peut aussi brûler l’ennemi.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
    ],
  },
  piplup: {
    flavorText: 'Malgré sa démarche maladroite et ses pertes d’équilibre, il bombe toujours fièrement le torse.',
    stats: { hp: 53, attack: 51, defense: 53, specialAttack: 61, specialDefense: 56, speed: 40 },
    moves: [
      { name: 'Bec Vrille', type: PokemonElementType.flying, power: 80, description: 'Une attaque utilisant le bec comme une perceuse.' },
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
    ],
  },
  prinplup: {
    flavorText: 'La fierté du Prinplouf est si grande qu’il lui est impossible de vivre en groupe.',
    stats: { hp: 64, attack: 66, defense: 68, specialAttack: 81, specialDefense: 76, speed: 50 },
    moves: [
      { name: 'Bec Vrille', type: PokemonElementType.flying, power: 80, description: 'Une attaque utilisant le bec comme une perceuse.' },
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
    ],
  },
  empoleon: {
    flavorText: 'S’il voit son honneur bafoué, il est capable de faire des ravages avec ses ailes tranchantes.',
    stats: { hp: 84, attack: 86, defense: 88, specialAttack: 111, specialDefense: 101, speed: 60 },
    moves: [
      { name: 'Bec Vrille', type: PokemonElementType.flying, power: 80, description: 'Une attaque utilisant le bec comme une perceuse.' },
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
      { name: 'Aqua-Jet', type: PokemonElementType.water, power: 40, description: 'Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en premier.' },
    ],
  },
  starly: {
    flavorText: 'La faiblesse des Étourmi les force à vivre en groupe, mais ils se chamaillent souvent.',
    stats: { hp: 40, attack: 55, defense: 30, specialAttack: 30, specialDefense: 30, speed: 60 },
    moves: [
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Cyclone', type: PokemonElementType.normal, power: null, description: 'Éjecte le Pokémon ennemi et le remplace par un autre. Dans la nature, met fin au combat.' },
      { name: 'Rapace', type: PokemonElementType.flying, power: 120, description: 'Le lanceur replie ses ailes et charge en rase-mottes. Le lanceur subit aussi de graves dégâts.' },
      { name: 'Vive-Attaque', type: PokemonElementType.normal, power: 40, description: 'Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en premier.' },
    ],
  },
  staravia: {
    flavorText: 'Conscient de sa propre faiblesse, il vit toujours en groupe, piaillant bruyamment quand il est seul.',
    stats: { hp: 55, attack: 75, defense: 50, specialAttack: 40, specialDefense: 40, speed: 80 },
    moves: [
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Cyclone', type: PokemonElementType.normal, power: null, description: 'Éjecte le Pokémon ennemi et le remplace par un autre. Dans la nature, met fin au combat.' },
      { name: 'Rapace', type: PokemonElementType.flying, power: 120, description: 'Le lanceur replie ses ailes et charge en rase-mottes. Le lanceur subit aussi de graves dégâts.' },
      { name: 'Vive-Attaque', type: PokemonElementType.normal, power: 40, description: 'Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en premier.' },
    ],
  },
  staraptor: {
    flavorText: 'Il combattra sans relâche, même blessé. Il prend grand soin de sa mèche.',
    stats: { hp: 85, attack: 120, defense: 70, specialAttack: 50, specialDefense: 60, speed: 100 },
    moves: [
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Cyclone', type: PokemonElementType.normal, power: null, description: 'Éjecte le Pokémon ennemi et le remplace par un autre. Dans la nature, met fin au combat.' },
      { name: 'Rapace', type: PokemonElementType.flying, power: 120, description: 'Le lanceur replie ses ailes et charge en rase-mottes. Le lanceur subit aussi de graves dégâts.' },
      { name: 'Close Combat', type: PokemonElementType.fighting, power: 120, description: 'Le lanceur combat au corps à corps sans se protéger. Baisse aussi sa Défense et sa Défense Spéciale.' },
    ],
  },
  bidoof: {
    flavorText: 'Une étude a montré que les dents du Keunotor poussaient aussi vite que celles du Rattata.',
    stats: { hp: 59, attack: 45, defense: 40, specialAttack: 35, specialDefense: 40, speed: 31 },
    moves: [
      { name: 'Croc de Mort', type: PokemonElementType.normal, power: 80, description: 'Le lanceur mord l’ennemi à l’aide de ses incisives aiguisées. Peut aussi apeurer l’ennemi.' },
      { name: 'Croc Fatal', type: PokemonElementType.normal, power: null, description: 'Une vilaine morsure d’incisives qui réduit de moitié les PV de l’ennemi.' },
      { name: 'Bâillement', type: PokemonElementType.normal, power: null, description: 'Fait bâiller l’ennemi qui s’endort au tour suivant.' },
      { name: 'Amnésie', type: PokemonElementType.psychic, power: null, description: 'Le lanceur fait le vide dans son esprit pour oublier ses soucis. Augmente fortement sa Défense Spéciale.' },
    ],
  },
  bibarel: {
    flavorText: 'Les digues insubmersibles qu’il construit font le bonheur des habitants proches.',
    stats: { hp: 79, attack: 85, defense: 60, specialAttack: 55, specialDefense: 60, speed: 71 },
    moves: [
      { name: 'Croc de Mort', type: PokemonElementType.normal, power: 80, description: 'Le lanceur mord l’ennemi à l’aide de ses incisives aiguisées. Peut aussi apeurer l’ennemi.' },
      { name: 'Croc Fatal', type: PokemonElementType.normal, power: null, description: 'Une vilaine morsure d’incisives qui réduit de moitié les PV de l’ennemi.' },
      { name: 'Bâillement', type: PokemonElementType.normal, power: null, description: 'Fait bâiller l’ennemi qui s’endort au tour suivant.' },
      { name: 'Amnésie', type: PokemonElementType.psychic, power: null, description: 'Le lanceur fait le vide dans son esprit pour oublier ses soucis. Augmente fortement sa Défense Spéciale.' },
    ],
  },
  kricketot: {
    flavorText: 'Quand il tombe du haut de ses petites pattes, ses antennes font un bruit de xylophone.',
    stats: { hp: 37, attack: 25, defense: 41, specialAttack: 25, specialDefense: 41, speed: 25 },
    moves: [
      { name: 'Piqûre', type: PokemonElementType.bug, power: 60, description: 'Le lanceur pique l’ennemi. Si ce dernier tient une Baie, le lanceur la dévore et obtient son effet.' },
      { name: 'Patience', type: PokemonElementType.normal, power: null, description: 'Le lanceur encaisse les coups durant 2 tours et réplique en infligeant le double des dégâts subis.' },
      { name: 'Rugissement', type: PokemonElementType.normal, power: null, description: 'Le lanceur pousse un cri tout mimi pour tromper la vigilance de l’ennemi et baisser son Attaque.' },
    ],
  },
  kricketune: {
    flavorText: 'Ses cris sont tellement variés qu’il existe un village où on organise des concours en leur honneur.',
    stats: { hp: 77, attack: 85, defense: 51, specialAttack: 55, specialDefense: 51, speed: 65 },
    moves: [
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
      { name: 'Berceuse', type: PokemonElementType.normal, power: null, description: 'Une berceuse plonge l’ennemi dans un profond sommeil.' },
      { name: 'Bourdon', type: PokemonElementType.bug, power: 90, description: 'Le lanceur fait vibrer ses ailes pour lancer une vague sonique. Peut aussi baisser la Défense Spéciale de l’ennemi.' },
      { name: 'Vampirisme', type: PokemonElementType.bug, power: 80, description: 'Une attaque qui aspire le sang de l’ennemi. La moitié des dégâts sont convertis en PV pour le lanceur.' },
    ],
  },
  shinx: {
    flavorText: 'Ses muscles génèrent un courant électrique lorsqu’ils travaillent. Il s’illumine en cas de danger.',
    stats: { hp: 45, attack: 65, defense: 34, specialAttack: 40, specialDefense: 34, speed: 45 },
    moves: [
      { name: 'Étincelle', type: PokemonElementType.electric, power: 65, description: 'Lance une charge électrique sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
      { name: 'Coup d’Jus', type: PokemonElementType.electric, power: 80, description: 'Un flamboiement d’électricité frappe tous les Pokémon autour du lanceur. Peut aussi paralyser.' },
      { name: 'Crocs Éclair', type: PokemonElementType.electric, power: 65, description: 'Le lanceur utilise une morsure électrifiée. Peut aussi paralyser ou apeurer l’ennemi.' },
    ],
  },
  luxio: {
    flavorText: 'Le courant qui circule à la pointe de ses griffes est capable de faire perdre connaissance à ses proies.',
    stats: { hp: 60, attack: 85, defense: 49, specialAttack: 60, specialDefense: 49, speed: 60 },
    moves: [
      { name: 'Étincelle', type: PokemonElementType.electric, power: 65, description: 'Lance une charge électrique sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
      { name: 'Coup d’Jus', type: PokemonElementType.electric, power: 80, description: 'Un flamboiement d’électricité frappe tous les Pokémon autour du lanceur. Peut aussi paralyser.' },
      { name: 'Crocs Éclair', type: PokemonElementType.electric, power: 65, description: 'Le lanceur utilise une morsure électrifiée. Peut aussi paralyser ou apeurer l’ennemi.' },
    ],
  },
  luxray: {
    flavorText: 'Il est capable de voir à travers les murs pour chasser des proies ou retrouver ses petits égarés.',
    stats: { hp: 80, attack: 120, defense: 79, specialAttack: 95, specialDefense: 79, speed: 70 },
    moves: [
      { name: 'Étincelle', type: PokemonElementType.electric, power: 65, description: 'Lance une charge électrique sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
      { name: 'Coup d’Jus', type: PokemonElementType.electric, power: 80, description: 'Un flamboiement d’électricité frappe tous les Pokémon autour du lanceur. Peut aussi paralyser.' },
      { name: 'Crocs Éclair', type: PokemonElementType.electric, power: 65, description: 'Le lanceur utilise une morsure électrifiée. Peut aussi paralyser ou apeurer l’ennemi.' },
    ],
  },
  budew: {
    flavorText: 'Il est sensible aux variations de température et on dit qu’il fleurit quand il sent la chaleur du soleil.',
    stats: { hp: 40, attack: 30, defense: 35, specialAttack: 50, specialDefense: 70, speed: 55 },
    moves: [
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
      { name: 'Para-Spore', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand sur l’ennemi une poudre qui le paralyse.' },
      { name: 'Croissance', type: PokemonElementType.normal, power: null, description: 'Le corps du lanceur se développe. Augmente l’Attaque et l’Attaque Spéciale.' },
      { name: 'Vole-Vie', type: PokemonElementType.grass, power: 20, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
    ],
  },
  roserade: {
    flavorText: 'Ses mains contenant chacune des toxines différentes sont capables d’asséner de puissants coups.',
    stats: { hp: 60, attack: 70, defense: 65, specialAttack: 125, specialDefense: 105, speed: 90 },
    moves: [
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Doux Parfum', type: PokemonElementType.normal, power: null, description: 'Un doux parfum qui réduit l’Esquive de l’ennemi. Attire aussi les Pokémon sauvages.' },
      { name: 'Méga-Sangsue', type: PokemonElementType.grass, power: 40, description: 'Une attaque qui convertit la moitié des dégâts infligés en PV.' },
      { name: 'Feuille Magik', type: PokemonElementType.grass, power: 60, description: 'Le lanceur disperse d’étranges feuilles qui poursuivent l’ennemi. N’échoue jamais.' },
    ],
  },
  cranidos: {
    flavorText: 'Il vivait dans la jungle il y a 100 millions d’années. Il abat un arbre d’un coup de tête.',
    stats: { hp: 67, attack: 125, defense: 40, specialAttack: 30, specialDefense: 30, speed: 58 },
    moves: [
      { name: 'Fracass’Tête', type: PokemonElementType.rock, power: 150, description: 'Le lanceur assène un coup de tête désespéré. Blesse aussi gravement le lanceur.' },
      { name: 'Poursuite', type: PokemonElementType.dark, power: 40, description: 'Une attaque qui inflige deux fois plus de dégâts à un ennemi qui quitte le combat.' },
      { name: 'Puissance', type: PokemonElementType.normal, power: null, description: 'Le lanceur prend une profonde inspiration et se concentre pour augmenter son taux de critiques.' },
      { name: 'Pouvoir Antique', type: PokemonElementType.rock, power: 60, description: 'Une attaque préhistorique qui peut augmenter toutes les stats du lanceur d’un seul coup.' },
    ],
  },
  rampardos: {
    flavorText: 'Quand deux Charkos se rentrent dedans, leur crâne extrêmement épais les empêche de s’assommer.',
    stats: { hp: 97, attack: 165, defense: 60, specialAttack: 65, specialDefense: 50, speed: 58 },
    moves: [
      { name: 'Fracass’Tête', type: PokemonElementType.rock, power: 150, description: 'Le lanceur assène un coup de tête désespéré. Blesse aussi gravement le lanceur.' },
      { name: 'Poursuite', type: PokemonElementType.dark, power: 40, description: 'Une attaque qui inflige deux fois plus de dégâts à un ennemi qui quitte le combat.' },
      { name: 'Puissance', type: PokemonElementType.normal, power: null, description: 'Le lanceur prend une profonde inspiration et se concentre pour augmenter son taux de critiques.' },
      { name: 'Pouvoir Antique', type: PokemonElementType.rock, power: 60, description: 'Une attaque préhistorique qui peut augmenter toutes les stats du lanceur d’un seul coup.' },
    ],
  },
  shieldon: {
    flavorText: 'Il est si bien protégé qu’il peut déguster Baies et herbe fraîche sans craindre de prédateurs.',
    stats: { hp: 30, attack: 42, defense: 118, specialAttack: 42, specialDefense: 88, speed: 30 },
    moves: [
      { name: 'Fulmifer', type: PokemonElementType.steel, power: null, description: 'Le lanceur attaque le dernier ennemi l’ayant blessé durant le même tour en frappant plus fort.' },
      { name: 'Strido-Son', type: PokemonElementType.steel, power: null, description: 'Un cri horrible tel un crissement métallique qui réduit fortement la Défense Spéciale de l’ennemi.' },
      { name: 'Pouvoir Antique', type: PokemonElementType.rock, power: 60, description: 'Une attaque préhistorique qui peut augmenter toutes les stats du lanceur d’un seul coup.' },
      { name: 'Tête de Fer', type: PokemonElementType.steel, power: 80, description: 'Le lanceur heurte l’ennemi avec sa tête dure comme de l’acier. Peut aussi apeurer l’ennemi.' },
    ],
  },
  bastiodon: {
    flavorText: 'En groupe, ils protègent leurs petits en formant autour d’eux une impénétrable muraille.',
    stats: { hp: 60, attack: 52, defense: 168, specialAttack: 47, specialDefense: 138, speed: 30 },
    moves: [
      { name: 'Fulmifer', type: PokemonElementType.steel, power: null, description: 'Le lanceur attaque le dernier ennemi l’ayant blessé durant le même tour en frappant plus fort.' },
      { name: 'Strido-Son', type: PokemonElementType.steel, power: null, description: 'Un cri horrible tel un crissement métallique qui réduit fortement la Défense Spéciale de l’ennemi.' },
      { name: 'Barrage', type: PokemonElementType.normal, power: null, description: 'Le lanceur bloque la route de l’ennemi pour empêcher sa fuite.' },
      { name: 'Pouvoir Antique', type: PokemonElementType.rock, power: 60, description: 'Une attaque préhistorique qui peut augmenter toutes les stats du lanceur d’un seul coup.' },
    ],
  },
  burmy_plant: {
    flavorText: 'Nul ne sait comment il y parvient, mais il arrive toujours à se former une cape, où qu’il soit.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: 'Piqûre', type: PokemonElementType.bug, power: 60, description: 'Le lanceur pique l’ennemi. Si ce dernier tient une Baie, le lanceur la dévore et obtient son effet.' },
      { name: 'Charge', type: PokemonElementType.normal, power: 40, description: 'Le lanceur charge l’ennemi et le percute de tout son corps.' },
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
      { name: 'Abri', type: PokemonElementType.normal, power: null, description: 'Le lanceur esquive toutes les attaques. Plus la capacité est utilisée de fois à la suite, plus elle risque d’échouer.' },
    ],
  },
  burmy_sandy: {
    flavorText: 'Nul ne sait comment il y parvient, mais il arrive toujours à se former une cape, où qu’il soit.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: 'Piqûre', type: PokemonElementType.bug, power: 60, description: 'Le lanceur pique l’ennemi. Si ce dernier tient une Baie, le lanceur la dévore et obtient son effet.' },
      { name: 'Charge', type: PokemonElementType.normal, power: 40, description: 'Le lanceur charge l’ennemi et le percute de tout son corps.' },
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
      { name: 'Abri', type: PokemonElementType.normal, power: null, description: 'Le lanceur esquive toutes les attaques. Plus la capacité est utilisée de fois à la suite, plus elle risque d’échouer.' },
    ],
  },
  burmy_trash: {
    flavorText: 'Nul ne sait comment il y parvient, mais il arrive toujours à se former une cape, où qu’il soit.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: 'Piqûre', type: PokemonElementType.bug, power: 60, description: 'Le lanceur pique l’ennemi. Si ce dernier tient une Baie, le lanceur la dévore et obtient son effet.' },
      { name: 'Charge', type: PokemonElementType.normal, power: 40, description: 'Le lanceur charge l’ennemi et le percute de tout son corps.' },
      { name: 'Puissance Cachée', type: PokemonElementType.normal, power: 60, description: 'Attaque dont la puissance et le type dépendent du Pokémon qui l’utilise.' },
      { name: 'Abri', type: PokemonElementType.normal, power: null, description: 'Le lanceur esquive toutes les attaques. Plus la capacité est utilisée de fois à la suite, plus elle risque d’échouer.' },
    ],
  },
  wormadam_plant: {
    flavorText: 'À l’évolution, son corps absorbe les matériaux à proximité et peut ainsi présenter divers aspects.',
    stats: { hp: 60, attack: 59, defense: 85, specialAttack: 79, specialDefense: 105, speed: 36 },
    moves: [
      { name: 'Tranch’Herbe', type: PokemonElementType.grass, power: 55, description: 'Des feuilles aiguisées comme des rasoirs entaillent l’ennemi. Taux de critiques élevé.' },
      { name: 'Croissance', type: PokemonElementType.normal, power: null, description: 'Le corps du lanceur se développe. Augmente l’Attaque et l’Attaque Spéciale.' },
      { name: 'Piqûre', type: PokemonElementType.bug, power: 60, description: 'Le lanceur pique l’ennemi. Si ce dernier tient une Baie, le lanceur la dévore et obtient son effet.' },
      { name: 'Tempête Verte', type: PokemonElementType.grass, power: 130, description: 'Invoque une tempête de feuilles acérées. Le contrecoup réduit fortement l’Attaque Spéciale du lanceur.' },
    ],
  },
  wormadam_sandy: {
    flavorText: 'À l’évolution, son corps absorbe les matériaux à proximité et peut ainsi présenter divers aspects.',
    stats: { hp: 60, attack: 79, defense: 105, specialAttack: 59, specialDefense: 85, speed: 36 },
    moves: [
      { name: 'Abîme', type: PokemonElementType.ground, power: null, description: 'Le lanceur fait tomber l’ennemi dans une crevasse. Si cette attaque réussit, elle met K.O. sur le coup.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
      { name: 'Piqûre', type: PokemonElementType.bug, power: 60, description: 'Le lanceur pique l’ennemi. Si ce dernier tient une Baie, le lanceur la dévore et obtient son effet.' },
      { name: 'Choc Mental', type: PokemonElementType.psychic, power: 50, description: 'Une faible vague télékinésique frappe l’ennemi. Peut aussi le plonger dans la confusion.' },
    ],
  },
  wormadam_trash: {
    flavorText: 'À l’évolution, son corps absorbe les matériaux à proximité et peut ainsi présenter divers aspects.',
    stats: { hp: 60, attack: 69, defense: 95, specialAttack: 69, specialDefense: 95, speed: 36 },
    moves: [
      { name: 'Miroi-Tir', type: PokemonElementType.steel, power: 65, description: 'Le corps poli du lanceur libère un éclair d’énergie. Peut aussi baisser la Précision de l’ennemi.' },
      { name: 'Strido-Son', type: PokemonElementType.steel, power: null, description: 'Un cri horrible tel un crissement métallique qui réduit fortement la Défense Spéciale de l’ennemi.' },
      { name: 'Piqûre', type: PokemonElementType.bug, power: 60, description: 'Le lanceur pique l’ennemi. Si ce dernier tient une Baie, le lanceur la dévore et obtient son effet.' },
      { name: 'Choc Mental', type: PokemonElementType.psychic, power: 50, description: 'Une faible vague télékinésique frappe l’ennemi. Peut aussi le plonger dans la confusion.' },
    ],
  },
  mothim: {
    flavorText: 'Il adore le nectar des fleurs mais n’en récolte pas lui-même. Il préfère en voler à un Apitrini.',
    stats: { hp: 70, attack: 94, defense: 50, specialAttack: 94, specialDefense: 50, speed: 66 },
    moves: [
      { name: 'Camouflage', type: PokemonElementType.normal, power: null, description: 'Modifie le type du lanceur en fonction du terrain, comme une berge, une grotte, l’herbe, etc.' },
      { name: 'Poudre Toxik', type: PokemonElementType.poison, power: null, description: 'Une poudre toxique empoisonne l’ennemi.' },
      { name: 'Vent Argenté', type: PokemonElementType.bug, power: 60, description: 'Vent qui projette des écailles poudreuses sur l’ennemi. Peut aussi monter toutes les stats du lanceur.' },
      { name: 'Tornade', type: PokemonElementType.flying, power: 40, description: 'Le lanceur bat des ailes pour générer une bourrasque qui blesse l’ennemi.' },
    ],
  },
  combee_female: {
    flavorText: 'Ce trio inséparable depuis la naissance récolte du miel pour satisfaire Apireine.',
    stats: { hp: 30, attack: 30, defense: 42, specialAttack: 30, specialDefense: 42, speed: 70 },
    moves: [
      { name: 'Tornade', type: PokemonElementType.flying, power: 40, description: 'Le lanceur bat des ailes pour générer une bourrasque qui blesse l’ennemi.' },
      { name: 'Doux Parfum', type: PokemonElementType.normal, power: null, description: 'Un doux parfum qui réduit l’Esquive de l’ennemi. Attire aussi les Pokémon sauvages.' },
      { name: 'Piqûre', type: PokemonElementType.bug, power: 60, description: 'Le lanceur pique l’ennemi. Si ce dernier tient une Baie, le lanceur la dévore et obtient son effet.' },
    ],
  },
  combee_male: {
    flavorText: 'Ce trio inséparable depuis la naissance récolte du miel pour satisfaire Apireine.',
    stats: { hp: 30, attack: 30, defense: 42, specialAttack: 30, specialDefense: 42, speed: 70 },
    moves: [
      { name: 'Tornade', type: PokemonElementType.flying, power: 40, description: 'Le lanceur bat des ailes pour générer une bourrasque qui blesse l’ennemi.' },
      { name: 'Doux Parfum', type: PokemonElementType.normal, power: null, description: 'Un doux parfum qui réduit l’Esquive de l’ennemi. Attire aussi les Pokémon sauvages.' },
      { name: 'Piqûre', type: PokemonElementType.bug, power: 60, description: 'Le lanceur pique l’ennemi. Si ce dernier tient une Baie, le lanceur la dévore et obtient son effet.' },
    ],
  },
  vespiquen: {
    flavorText: 'Ce Pokémon utilise des phéromones pour donner des ordres de combat aux larves dans son abdomen.',
    stats: { hp: 70, attack: 80, defense: 102, specialAttack: 80, specialDefense: 102, speed: 40 },
    moves: [
      { name: 'Appel Attaque', type: PokemonElementType.bug, power: 90, description: 'Le lanceur appelle ses sous-fifres pour frapper l’ennemi. Taux de critiques élevé.' },
      { name: 'Appel Soins', type: PokemonElementType.bug, power: null, description: 'Le lanceur appelle ses sous-fifres pour le soigner. Il récupère jusqu’à la moitié de ses PV max.' },
      { name: 'Appel Défense', type: PokemonElementType.bug, power: null, description: 'Le lanceur appelle ses sous-fifres pour former un bouclier qui augmente sa Défense et sa Défense Spéciale.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
    ],
  },
  pachirisu: {
    flavorText: 'Il arrive que deux Pachirisu se frottent les joues pour partager l’électricité qu’ils ont accumulée.',
    stats: { hp: 60, attack: 45, defense: 70, specialAttack: 45, specialDefense: 90, speed: 95 },
    moves: [
      { name: 'Doux Baiser', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie un bisou si mignon et désarmant qu’il plonge l’ennemi dans la confusion.' },
      { name: 'Étincelle', type: PokemonElementType.electric, power: 65, description: 'Lance une charge électrique sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Croc Fatal', type: PokemonElementType.normal, power: null, description: 'Une vilaine morsure d’incisives qui réduit de moitié les PV de l’ennemi.' },
      { name: 'Coup d’Jus', type: PokemonElementType.electric, power: 80, description: 'Un flamboiement d’électricité frappe tous les Pokémon autour du lanceur. Peut aussi paralyser.' },
    ],
  },
  buizel: {
    flavorText: 'Il utilise ses deux queues comme une hélice pour se propulser sous l’eau et trancher les algues.',
    stats: { hp: 55, attack: 65, defense: 35, specialAttack: 60, specialDefense: 30, speed: 85 },
    moves: [
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'Une onde de choc destructrice qui inflige toujours 20 PV de dégâts.' },
      { name: 'Coupe-Vent', type: PokemonElementType.normal, power: 80, description: 'Attaque en 2 tours. Des lames de vent frappent l’ennemi au 2è tour. Taux de critiques élevé.' },
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
      { name: 'Aqua-Jet', type: PokemonElementType.water, power: 40, description: 'Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en premier.' },
    ],
  },
  floatzel: {
    flavorText: 'Il chasse souvent près des ports de pêche où il sauve parfois les gens tombés à la mer.',
    stats: { hp: 85, attack: 105, defense: 55, specialAttack: 85, specialDefense: 50, speed: 115 },
    moves: [
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'Une onde de choc destructrice qui inflige toujours 20 PV de dégâts.' },
      { name: 'Coupe-Vent', type: PokemonElementType.normal, power: 80, description: 'Attaque en 2 tours. Des lames de vent frappent l’ennemi au 2è tour. Taux de critiques élevé.' },
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
      { name: 'Aqua-Jet', type: PokemonElementType.water, power: 40, description: 'Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en premier.' },
    ],
  },
  cherubi: {
    flavorText: 'Sa petite boule rose est nutritive et délicieuse. Les Étourmi en raffolent.',
    stats: { hp: 45, attack: 35, defense: 45, specialAttack: 62, specialDefense: 53, speed: 35 },
    moves: [
      { name: 'Air Veinard', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie une incantation vers le ciel pour empêcher l’ennemi d’effectuer des coups critiques.' },
      { name: 'Croissance', type: PokemonElementType.normal, power: null, description: 'Le corps du lanceur se développe. Augmente l’Attaque et l’Attaque Spéciale.' },
      { name: 'Vampigraine', type: PokemonElementType.grass, power: null, description: 'Une graine est semée sur l’ennemi. À chaque tour, elle lui dérobe des PV que le lanceur récupère.' },
      { name: 'Soucigraine', type: PokemonElementType.grass, power: null, description: 'Plante sur la cible une graine qui la rend soucieuse et remplace sa capacité spéciale par Insomnia, l’empêchant ainsi de dormir.' },
    ],
  },
  cherrim: {
    flavorText: 'Sous un grand soleil, il ouvre ses pétales pour en absorber les rayons.',
    stats: { hp: 70, attack: 60, defense: 70, specialAttack: 87, specialDefense: 78, speed: 85 },
    moves: [
      { name: 'Danse Fleurs', type: PokemonElementType.grass, power: 120, description: 'Le lanceur attaque en projetant des pétales pendant 2 à 3 tours avant de céder à la confusion.' },
      { name: 'Air Veinard', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie une incantation vers le ciel pour empêcher l’ennemi d’effectuer des coups critiques.' },
      { name: 'Croissance', type: PokemonElementType.normal, power: null, description: 'Le corps du lanceur se développe. Augmente l’Attaque et l’Attaque Spéciale.' },
      { name: 'Vampigraine', type: PokemonElementType.grass, power: null, description: 'Une graine est semée sur l’ennemi. À chaque tour, elle lui dérobe des PV que le lanceur récupère.' },
    ],
  },
  shellos_east: {
    flavorText: 'Un étrange liquide mauve s’échappe de son corps, ne lui appuyez pas dessus.',
    stats: { hp: 76, attack: 48, defense: 48, specialAttack: 57, specialDefense: 62, speed: 34 },
    moves: [
      { name: 'Boue-Bombe', type: PokemonElementType.ground, power: 65, description: 'Le lanceur attaque à l’aide d’une boule de boue solidifiée. Peut aussi baisser la Précision de l’ennemi.' },
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Soin', type: PokemonElementType.normal, power: null, description: 'Un soin qui permet au lanceur de récupérer jusqu’à la moitié de ses PV max.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
    ],
  },
  shellos_west: {
    flavorText: 'Un étrange liquide mauve s’échappe de son corps, ne lui appuyez pas dessus.',
    stats: { hp: 76, attack: 48, defense: 48, specialAttack: 57, specialDefense: 62, speed: 34 },
    moves: [
      { name: 'Boue-Bombe', type: PokemonElementType.ground, power: 65, description: 'Le lanceur attaque à l’aide d’une boule de boue solidifiée. Peut aussi baisser la Précision de l’ennemi.' },
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Soin', type: PokemonElementType.normal, power: null, description: 'Un soin qui permet au lanceur de récupérer jusqu’à la moitié de ses PV max.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
    ],
  },
  gastrodon_east: {
    flavorText: 'Ses gènes ont démontré qu’il avait jadis une carapace couvrant la totalité de son dos.',
    stats: { hp: 111, attack: 83, defense: 68, specialAttack: 92, specialDefense: 82, speed: 39 },
    moves: [
      { name: 'Boue-Bombe', type: PokemonElementType.ground, power: 65, description: 'Le lanceur attaque à l’aide d’une boule de boue solidifiée. Peut aussi baisser la Précision de l’ennemi.' },
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Soin', type: PokemonElementType.normal, power: null, description: 'Un soin qui permet au lanceur de récupérer jusqu’à la moitié de ses PV max.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
    ],
  },
  gastrodon_west: {
    flavorText: 'Ses gènes ont démontré qu’il avait jadis une carapace couvrant la totalité de son dos.',
    stats: { hp: 111, attack: 83, defense: 68, specialAttack: 92, specialDefense: 82, speed: 39 },
    moves: [
      { name: 'Boue-Bombe', type: PokemonElementType.ground, power: 65, description: 'Le lanceur attaque à l’aide d’une boule de boue solidifiée. Peut aussi baisser la Précision de l’ennemi.' },
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
      { name: 'Soin', type: PokemonElementType.normal, power: null, description: 'Un soin qui permet au lanceur de récupérer jusqu’à la moitié de ses PV max.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
    ],
  },
  ambipom: {
    flavorText: 'Ses queues jumelles sont si agiles et efficaces qu’il ne se sert que très rarement de ses bras.',
    stats: { hp: 75, attack: 100, defense: 66, specialAttack: 60, specialDefense: 66, speed: 115 },
    moves: [
      { name: 'Coup Double', type: PokemonElementType.normal, power: 35, description: 'Un coup de queue ou de liane qui frappe l’ennemi deux fois d’affilée.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Chatouille', type: PokemonElementType.normal, power: null, description: 'Le lanceur chatouille l’ennemi, ce qui baisse son Attaque et sa Défense.' },
      { name: 'Griffe', type: PokemonElementType.normal, power: 40, description: 'Lacère l’ennemi avec des griffes acérées pour lui infliger des dégâts.' },
    ],
  },
  drifloon: {
    flavorText: 'Sa façon de flotter sans but au gré du vent lui a valu le surnom de “bouée des esprits égarés”.',
    stats: { hp: 90, attack: 50, defense: 34, specialAttack: 60, specialDefense: 44, speed: 70 },
    moves: [
      { name: 'Constriction', type: PokemonElementType.normal, power: 10, description: 'De longs tentacules ou lianes attaquent l’ennemi. Peut aussi baisser sa Vitesse.' },
      { name: 'Lilliput', type: PokemonElementType.normal, power: null, description: 'Le lanceur comprime son corps pour se faire tout petit et augmenter fortement son Esquive.' },
      { name: 'Relâche', type: PokemonElementType.normal, power: null, description: 'Libère dans une attaque la puissance précédemment accumulée avec Stockage.' },
      { name: 'Avale', type: PokemonElementType.normal, power: null, description: 'Le lanceur absorbe la puissance accumulée avec Stockage pour restaurer ses PV.' },
    ],
  },
  drifblim: {
    flavorText: 'Des nuées de Grodrive dérivent dans le ciel au crépuscule. Ils disparaissent dès qu’on les voit.',
    stats: { hp: 150, attack: 80, defense: 44, specialAttack: 90, specialDefense: 54, speed: 80 },
    moves: [
      { name: 'Constriction', type: PokemonElementType.normal, power: 10, description: 'De longs tentacules ou lianes attaquent l’ennemi. Peut aussi baisser sa Vitesse.' },
      { name: 'Lilliput', type: PokemonElementType.normal, power: null, description: 'Le lanceur comprime son corps pour se faire tout petit et augmenter fortement son Esquive.' },
      { name: 'Relâche', type: PokemonElementType.normal, power: null, description: 'Libère dans une attaque la puissance précédemment accumulée avec Stockage.' },
      { name: 'Avale', type: PokemonElementType.normal, power: null, description: 'Le lanceur absorbe la puissance accumulée avec Stockage pour restaurer ses PV.' },
    ],
  },
  buneary: {
    flavorText: 'Ses oreilles repliées se déroulent avec une force capable de briser un gros rocher.',
    stats: { hp: 55, attack: 66, defense: 44, specialAttack: 44, specialDefense: 56, speed: 85 },
    moves: [
      { name: 'Pied Sauté', type: PokemonElementType.fighting, power: 100, description: 'Le lanceur s’envole pour décocher un coup de pied sauté. S’il échoue, le lanceur se blesse.' },
      { name: 'Uppercut', type: PokemonElementType.normal, power: 70, description: 'Un enchaînement de coups de poing cadencés. Peut aussi rendre confus.' },
      { name: 'Vœu Soin', type: PokemonElementType.psychic, power: null, description: 'Le lanceur tombe K.O. pour soigner les PV et le statut du Pokémon qui passe après lui.' },
      { name: 'Trempette', type: PokemonElementType.normal, power: null, description: 'Le lanceur barbote et éclabousse les environs. Cette capacité n’a aucun effet.' },
    ],
  },
  lopunny: {
    flavorText: 'Il est capable de décocher de puissants coups de pied si on touche à ses délicates oreilles.',
    stats: { hp: 65, attack: 76, defense: 84, specialAttack: 54, specialDefense: 96, speed: 105 },
    moves: [
      { name: 'Pied Sauté', type: PokemonElementType.fighting, power: 100, description: 'Le lanceur s’envole pour décocher un coup de pied sauté. S’il échoue, le lanceur se blesse.' },
      { name: 'Uppercut', type: PokemonElementType.normal, power: 70, description: 'Un enchaînement de coups de poing cadencés. Peut aussi rendre confus.' },
      { name: 'Vœu Soin', type: PokemonElementType.psychic, power: null, description: 'Le lanceur tombe K.O. pour soigner les PV et le statut du Pokémon qui passe après lui.' },
      { name: 'Trempette', type: PokemonElementType.normal, power: null, description: 'Le lanceur barbote et éclabousse les environs. Cette capacité n’a aucun effet.' },
    ],
  },
  mismagius: {
    flavorText: 'Pareil à une incantation magique, son cri n’est que très rarement source de joie.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 105, specialDefense: 105, speed: 105 },
    moves: [
      { name: 'Air Veinard', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie une incantation vers le ciel pour empêcher l’ennemi d’effectuer des coups critiques.' },
      { name: 'Vague Psy', type: PokemonElementType.psychic, power: null, description: 'Une étrange onde d’énergie chaude frappe l’ennemi. Cette attaque est d’intensité variable.' },
      { name: 'Feuille Magik', type: PokemonElementType.grass, power: 60, description: 'Le lanceur disperse d’étranges feuilles qui poursuivent l’ennemi. N’échoue jamais.' },
      { name: 'Étonnement', type: PokemonElementType.ghost, power: 30, description: 'Le lanceur attaque l’ennemi en poussant un cri terrifiant. Peut aussi l’apeurer.' },
    ],
  },
  honchkrow: {
    flavorText: 'Son cri profond peut invoquer une meute de Cornèbre. On l’appelle “le crieur de mauvais augure”.',
    stats: { hp: 100, attack: 125, defense: 52, specialAttack: 105, specialDefense: 52, speed: 71 },
    moves: [
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Poursuite', type: PokemonElementType.dark, power: 40, description: 'Une attaque qui inflige deux fois plus de dégâts à un ennemi qui quitte le combat.' },
      { name: 'Tranche-Nuit', type: PokemonElementType.dark, power: 70, description: 'Le lanceur lacère l’ennemi à la première occasion. Taux de critiques élevé.' },
      { name: 'Buée Noire', type: PokemonElementType.ice, power: null, description: 'Un brouillard qui annule les changements de stats de tous les Pokémon au combat.' },
    ],
  },
  glameow: {
    flavorText: 'Il a tendance à planter ses griffes dans le nez de son Dresseur s’il n’a pas été nourri à temps.',
    stats: { hp: 49, attack: 55, defense: 42, specialAttack: 42, specialDefense: 37, speed: 85 },
    moves: [
      { name: 'Assistance', type: PokemonElementType.normal, power: null, description: 'Le lanceur se dépêche d’utiliser une capacité au hasard parmi celles des Pokémon de l’équipe.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Bluff', type: PokemonElementType.normal, power: 40, description: 'Permet de frapper en premier et apeure l’ennemi. Ne fonctionne qu’au premier tour.' },
    ],
  },
  purugly: {
    flavorText: 'Il plaque ses queues contre son dos pour paraître plus grand. Il soutient un regard des heures.',
    stats: { hp: 71, attack: 82, defense: 64, specialAttack: 64, specialDefense: 59, speed: 112 },
    moves: [
      { name: 'Assistance', type: PokemonElementType.normal, power: null, description: 'Le lanceur se dépêche d’utiliser une capacité au hasard parmi celles des Pokémon de l’équipe.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Bluff', type: PokemonElementType.normal, power: 40, description: 'Permet de frapper en premier et apeure l’ennemi. Ne fonctionne qu’au premier tour.' },
    ],
  },
  chingling: {
    flavorText: 'Quand il sautille, l’orbe qu’il a dans la bouche s’agite et tinte comme une cloche.',
    stats: { hp: 45, attack: 30, defense: 50, specialAttack: 65, specialDefense: 50, speed: 45 },
    moves: [
      { name: 'Ligotage', type: PokemonElementType.normal, power: 15, description: 'Le lanceur ligote l’ennemi avec des lianes ou son corps pour l’écraser durant 4 à 5 tours.' },
      { name: 'Choc Mental', type: PokemonElementType.psychic, power: 50, description: 'Une faible vague télékinésique frappe l’ennemi. Peut aussi le plonger dans la confusion.' },
      { name: 'Étonnement', type: PokemonElementType.ghost, power: 30, description: 'Le lanceur attaque l’ennemi en poussant un cri terrifiant. Peut aussi l’apeurer.' },
      { name: 'Dernier Recours', type: PokemonElementType.normal, power: 140, description: 'Cette capacité ne peut être utilisée qu’après que le lanceur a utilisé toutes les autres.' },
    ],
  },
  stunky: {
    flavorText: 'Son derrière propulse un fluide nauséabond qui peut faire fuir les Pokémon dans un rayon de 2 km.',
    stats: { hp: 63, attack: 63, defense: 47, specialAttack: 41, specialDefense: 41, speed: 74 },
    moves: [
      { name: 'Gaz Toxik', type: PokemonElementType.poison, power: null, description: 'Un nuage de gaz toxique est projeté au visage de l’ennemi. Peut l’empoisonner.' },
      { name: 'Brouillard', type: PokemonElementType.normal, power: null, description: 'Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi.' },
      { name: 'Souvenir', type: PokemonElementType.dark, power: null, description: 'Le lanceur est mis K.O., mais l’Attaque et l’Attaque Spéciale de l’ennemi baissent beaucoup.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
    ],
  },
  skuntank: {
    flavorText: 'Il attaque en projetant un liquide fétide du bout de sa queue. Mieux vaut l’attaquer par les airs.',
    stats: { hp: 103, attack: 93, defense: 67, specialAttack: 71, specialDefense: 61, speed: 84 },
    moves: [
      { name: 'Gaz Toxik', type: PokemonElementType.poison, power: null, description: 'Un nuage de gaz toxique est projeté au visage de l’ennemi. Peut l’empoisonner.' },
      { name: 'Brouillard', type: PokemonElementType.normal, power: null, description: 'Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi.' },
      { name: 'Souvenir', type: PokemonElementType.dark, power: null, description: 'Le lanceur est mis K.O., mais l’Attaque et l’Attaque Spéciale de l’ennemi baissent beaucoup.' },
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
    ],
  },
  bronzor: {
    flavorText: 'Certains scientifiques soutiennent que ce Pokémon était jadis aussi réfléchissant qu’un miroir.',
    stats: { hp: 57, attack: 24, defense: 86, specialAttack: 24, specialDefense: 86, speed: 23 },
    moves: [
      { name: 'Anti-Soin', type: PokemonElementType.psychic, power: null, description: 'Le lanceur empêche l’ennemi d’utiliser ses capacités, cap. spé. ou objets tenus pour récupérer des PV pendant 5 tours.' },
      { name: 'Extrasenseur', type: PokemonElementType.psychic, power: 80, description: 'Le lanceur attaque avec un pouvoir étrange et invisible. Peut aussi apeurer l’ennemi.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
    ],
  },
  bronzong: {
    flavorText: 'Il apportait la pluie en créant un portail vers une autre dimension. Il était synonyme de bonne récolte.',
    stats: { hp: 67, attack: 89, defense: 116, specialAttack: 79, specialDefense: 116, speed: 33 },
    moves: [
      { name: 'Anti-Soin', type: PokemonElementType.psychic, power: null, description: 'Le lanceur empêche l’ennemi d’utiliser ses capacités, cap. spé. ou objets tenus pour récupérer des PV pendant 5 tours.' },
      { name: 'Extrasenseur', type: PokemonElementType.psychic, power: 80, description: 'Le lanceur attaque avec un pouvoir étrange et invisible. Peut aussi apeurer l’ennemi.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
    ],
  },
  bonsly: {
    flavorText: 'Adepte des climats secs, il régule son humidité en laissant couler ce qui ressemble à des larmes.',
    stats: { hp: 50, attack: 80, defense: 95, specialAttack: 10, specialDefense: 45, speed: 10 },
    moves: [
      { name: 'Jet-Pierres', type: PokemonElementType.rock, power: 50, description: 'Le lanceur lâche une pierre sur l’ennemi.' },
      { name: 'Photocopie', type: PokemonElementType.normal, power: null, description: 'Le lanceur imite la dernière capacité employée. Échoue si aucune capacité n’a été utilisée.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
      { name: 'Souplesse', type: PokemonElementType.normal, power: 80, description: 'Fouette l’ennemi avec la queue, une liane, etc. pour infliger des dégâts.' },
    ],
  },
  mimeJr: {
    flavorText: 'Il imite les mouvements et les expressions des autres pour comprendre leurs sentiments.',
    stats: { hp: 20, attack: 25, defense: 45, specialAttack: 70, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'Yoga', type: PokemonElementType.psychic, power: null, description: 'Le lanceur médite pour éveiller son pouvoir latent et augmenter son Attaque.' },
      { name: 'Bouclier', type: PokemonElementType.psychic, power: null, description: 'Le lanceur érige un mur solide qui augmente fortement sa Défense.' },
      { name: 'Torgnoles', type: PokemonElementType.normal, power: 15, description: 'Gifle rapidement l’ennemi de 2 à 5 fois d’affilée.' },
      { name: 'Photocopie', type: PokemonElementType.normal, power: null, description: 'Le lanceur imite la dernière capacité employée. Échoue si aucune capacité n’a été utilisée.' },
    ],
  },
  happiny: {
    flavorText: 'Ce Pokémon ne se sépare jamais de son petit caillou et a tendance à traîner dans les pieds des gens.',
    stats: { hp: 100, attack: 5, defense: 5, specialAttack: 15, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'Doux Baiser', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie un bisou si mignon et désarmant qu’il plonge l’ennemi dans la confusion.' },
      { name: 'Régénération', type: PokemonElementType.normal, power: null, description: 'Le lanceur se repose pour guérir d’un empoisonnement, d’une brûlure ou d’une paralysie.' },
      { name: 'Photocopie', type: PokemonElementType.normal, power: null, description: 'Le lanceur imite la dernière capacité employée. Échoue si aucune capacité n’a été utilisée.' },
      { name: 'Écras’Face', type: PokemonElementType.normal, power: 40, description: 'Écrase l’ennemi avec les pattes avant, la queue, etc.' },
    ],
  },
  chatot: {
    flavorText: 'Sa langue comparable à celle de l’homme lui permet d’imiter habilement le langage humain.',
    stats: { hp: 76, attack: 65, defense: 45, specialAttack: 92, specialDefense: 42, speed: 91 },
    moves: [
      { name: 'Babil', type: PokemonElementType.flying, power: 65, description: 'Le lanceur envoie une onde musicale en récitant des mots. Peut aussi rendre l’ennemi confus.' },
      { name: 'Mimique', type: PokemonElementType.flying, power: null, description: 'Le lanceur riposte à l’attaque de l’ennemi avec la même attaque.' },
      { name: 'Berceuse', type: PokemonElementType.normal, power: null, description: 'Une berceuse plonge l’ennemi dans un profond sommeil.' },
      { name: 'Furie', type: PokemonElementType.normal, power: 15, description: 'Frappe l’ennemi 2 à 5 fois d’affilée avec un bec ou une corne.' },
    ],
  },
  spiritomb: {
    flavorText: 'Son mauvais comportement lui a valu d’être enchaîné à une Clé de Voûte par un mystérieux sortilège.',
    stats: { hp: 50, attack: 92, defense: 108, specialAttack: 92, specialDefense: 108, speed: 35 },
    moves: [
      { name: 'Ombre Portée', type: PokemonElementType.ghost, power: 40, description: 'Le lanceur étend son ombre pour frapper par-derrière. Frappe en priorité.' },
      { name: 'Souvenir', type: PokemonElementType.dark, power: null, description: 'Le lanceur est mis K.O., mais l’Attaque et l’Attaque Spéciale de l’ennemi baissent beaucoup.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
      { name: 'Vent Mauvais', type: PokemonElementType.ghost, power: 60, description: 'Le lanceur crée une violente bourrasque. Peut aussi augmenter toutes ses stats.' },
    ],
  },
  gible: {
    flavorText: 'Malgré sa maladresse, son énorme gueule lui permet de lancer des attaques puissantes.',
    stats: { hp: 58, attack: 70, defense: 45, specialAttack: 40, specialDefense: 45, speed: 42 },
    moves: [
      { name: 'Draco-Rage', type: PokemonElementType.dragon, power: null, description: 'La colère du lanceur déclenche une onde de choc destructrice qui inflige toujours 40 PV de dégâts.' },
      { name: 'Draco-Charge', type: PokemonElementType.dragon, power: 100, description: 'Le lanceur frappe l’ennemi d’un air menaçant. Peut aussi apeurer l’ennemi.' },
      { name: 'Tourbi-Sable', type: PokemonElementType.ground, power: 35, description: 'Le lanceur emprisonne l’ennemi dans une tempête de sable terrifiante qui dure de 4 à 5 tours.' },
      { name: 'Draco-Griffe', type: PokemonElementType.dragon, power: 80, description: 'Le lanceur lacère l’ennemi de ses grandes griffes aiguisées.' },
    ],
  },
  gabite: {
    flavorText: 'Toujours à la recherche d’objets brillants, il arpente les grottes pour constituer son butin.',
    stats: { hp: 68, attack: 90, defense: 65, specialAttack: 50, specialDefense: 55, speed: 82 },
    moves: [
      { name: 'Draco-Rage', type: PokemonElementType.dragon, power: null, description: 'La colère du lanceur déclenche une onde de choc destructrice qui inflige toujours 40 PV de dégâts.' },
      { name: 'Draco-Charge', type: PokemonElementType.dragon, power: 100, description: 'Le lanceur frappe l’ennemi d’un air menaçant. Peut aussi apeurer l’ennemi.' },
      { name: 'Tourbi-Sable', type: PokemonElementType.ground, power: 35, description: 'Le lanceur emprisonne l’ennemi dans une tempête de sable terrifiante qui dure de 4 à 5 tours.' },
      { name: 'Draco-Griffe', type: PokemonElementType.dragon, power: 80, description: 'Le lanceur lacère l’ennemi de ses grandes griffes aiguisées.' },
    ],
  },
  garchomp: {
    flavorText: 'On dit que lancé à pleine vitesse, il crée des lames de vent avec ses ailes pouvant trancher un arbre.',
    stats: { hp: 108, attack: 130, defense: 95, specialAttack: 80, specialDefense: 85, speed: 102 },
    moves: [
      { name: 'Draco-Rage', type: PokemonElementType.dragon, power: null, description: 'La colère du lanceur déclenche une onde de choc destructrice qui inflige toujours 40 PV de dégâts.' },
      { name: 'Draco-Charge', type: PokemonElementType.dragon, power: 100, description: 'Le lanceur frappe l’ennemi d’un air menaçant. Peut aussi apeurer l’ennemi.' },
      { name: 'Tourbi-Sable', type: PokemonElementType.ground, power: 35, description: 'Le lanceur emprisonne l’ennemi dans une tempête de sable terrifiante qui dure de 4 à 5 tours.' },
      { name: 'Draco-Griffe', type: PokemonElementType.dragon, power: 80, description: 'Le lanceur lacère l’ennemi de ses grandes griffes aiguisées.' },
    ],
  },
  munchlax: {
    flavorText: 'Obnubilé par sa quête incessante de nourriture, il oublie parfois qu’il en a caché dans sa fourrure.',
    stats: { hp: 135, attack: 85, defense: 40, specialAttack: 40, specialDefense: 85, speed: 5 },
    moves: [
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Léchouille', type: PokemonElementType.ghost, power: 30, description: 'Un grand coup de langue qui inflige des dégâts à l’ennemi. Peut aussi le paralyser.' },
      { name: 'Avale', type: PokemonElementType.normal, power: null, description: 'Le lanceur absorbe la puissance accumulée avec Stockage pour restaurer ses PV.' },
      { name: 'Stockage', type: PokemonElementType.normal, power: null, description: 'Le lanceur accumule de la puissance et augmente sa Défense et sa Défense Spéciale. Peut être utilisé 3 fois.' },
    ],
  },
  hippopotas: {
    flavorText: 'Il peut obturer ses narines et traverser le sable comme un ver. Il vit en colonies de 10 individus.',
    stats: { hp: 68, attack: 72, defense: 78, specialAttack: 38, specialDefense: 42, speed: 32 },
    moves: [
      { name: 'Abîme', type: PokemonElementType.ground, power: null, description: 'Le lanceur fait tomber l’ennemi dans une crevasse. Si cette attaque réussit, elle met K.O. sur le coup.' },
      { name: 'Tourbi-Sable', type: PokemonElementType.ground, power: 35, description: 'Le lanceur emprisonne l’ennemi dans une tempête de sable terrifiante qui dure de 4 à 5 tours.' },
      { name: 'Bâillement', type: PokemonElementType.normal, power: null, description: 'Fait bâiller l’ennemi qui s’endort au tour suivant.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
    ],
  },
  riolu: {
    flavorText: 'Il a la faculté unique de visualiser les émotions telles que la joie ou la colère sous forme d’ondes.',
    stats: { hp: 40, attack: 70, defense: 40, specialAttack: 35, specialDefense: 40, speed: 60 },
    moves: [
      { name: 'Forte-Paume', type: PokemonElementType.fighting, power: 60, description: 'Une onde de choc frappe l’ennemi. Peut aussi paralyser la cible.' },
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Photocopie', type: PokemonElementType.normal, power: null, description: 'Le lanceur imite la dernière capacité employée. Échoue si aucune capacité n’a été utilisée.' },
      { name: 'Ruse', type: PokemonElementType.normal, power: 30, description: 'Une attaque capable de toucher un ennemi qui utilise Détection ou Abri. Annule aussi leur effet.' },
    ],
  },
  lucario: {
    flavorText: 'Un spécimen bien entraîné peut sentir et identifier les émotions de quelqu’un à plus d’un kilomètre.',
    stats: { hp: 70, attack: 110, defense: 70, specialAttack: 115, specialDefense: 70, speed: 90 },
    moves: [
      { name: 'Charge Os', type: PokemonElementType.ground, power: 25, description: 'Le lanceur frappe l’ennemi 2 à 5 fois avec un os.' },
      { name: 'Forte-Paume', type: PokemonElementType.fighting, power: 60, description: 'Une onde de choc frappe l’ennemi. Peut aussi paralyser la cible.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Moi d’Abord', type: PokemonElementType.normal, power: null, description: 'Le lanceur vole la capacité prévue par l’ennemi et l’utilise en faisant plus de dégâts. Il doit frapper en premier.' },
    ],
  },
  hippowdon: {
    flavorText: 'Facilement irritable, il ouvre ses mâchoires au maximum pour intimider ses adversaires.',
    stats: { hp: 108, attack: 112, defense: 118, specialAttack: 68, specialDefense: 72, speed: 47 },
    moves: [
      { name: 'Abîme', type: PokemonElementType.ground, power: null, description: 'Le lanceur fait tomber l’ennemi dans une crevasse. Si cette attaque réussit, elle met K.O. sur le coup.' },
      { name: 'Tourbi-Sable', type: PokemonElementType.ground, power: 35, description: 'Le lanceur emprisonne l’ennemi dans une tempête de sable terrifiante qui dure de 4 à 5 tours.' },
      { name: 'Bâillement', type: PokemonElementType.normal, power: null, description: 'Fait bâiller l’ennemi qui s’endort au tour suivant.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
    ],
  },
  skorupi: {
    flavorText: 'Il saisit sa proie avec les pinces de sa queue et lui injecte un poison. Il peut survivre un an sans manger.',
    stats: { hp: 40, attack: 50, defense: 90, specialAttack: 30, specialDefense: 55, speed: 65 },
    moves: [
      { name: 'Acupression', type: PokemonElementType.normal, power: null, description: 'Le lanceur effectue des pressions pour augmenter fortement l’une de ses stats.' },
      { name: 'Crochet Venin', type: PokemonElementType.poison, power: 50, description: 'Le lanceur mord l’ennemi de ses crocs toxiques. Peut aussi l’empoisonner gravement.' },
      { name: 'Poison Croix', type: PokemonElementType.poison, power: 70, description: 'Un coup tranchant qui peut empoisonner l’ennemi. Taux de critiques élevé.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
    ],
  },
  drapion: {
    flavorText: 'Fier et robuste, il met un point d’honneur à battre ses adversaires sans utiliser de poison.',
    stats: { hp: 70, attack: 90, defense: 110, specialAttack: 60, specialDefense: 75, speed: 95 },
    moves: [
      { name: 'Acupression', type: PokemonElementType.normal, power: null, description: 'Le lanceur effectue des pressions pour augmenter fortement l’une de ses stats.' },
      { name: 'Crochet Venin', type: PokemonElementType.poison, power: 50, description: 'Le lanceur mord l’ennemi de ses crocs toxiques. Peut aussi l’empoisonner gravement.' },
      { name: 'Poison Croix', type: PokemonElementType.poison, power: 70, description: 'Un coup tranchant qui peut empoisonner l’ennemi. Taux de critiques élevé.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
    ],
  },
  croagunk: {
    flavorText: 'Son instinct de survie le pousse à ne pas se battre dans les règles. C’est une mascotte populaire.',
    stats: { hp: 48, attack: 61, defense: 40, specialAttack: 61, specialDefense: 40, speed: 50 },
    moves: [
      { name: 'Boue-Bombe', type: PokemonElementType.ground, power: 65, description: 'Le lanceur attaque à l’aide d’une boule de boue solidifiée. Peut aussi baisser la Précision de l’ennemi.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Flatterie', type: PokemonElementType.dark, power: null, description: 'Rend la cible confuse, mais augmente son Attaque Spéciale.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
    ],
  },
  toxicroak: {
    flavorText: 'Quand il coasse, le poison stocké sous sa gorge est secoué, le rendant ainsi plus efficace.',
    stats: { hp: 83, attack: 106, defense: 65, specialAttack: 86, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'Boue-Bombe', type: PokemonElementType.ground, power: 65, description: 'Le lanceur attaque à l’aide d’une boule de boue solidifiée. Peut aussi baisser la Précision de l’ennemi.' },
      { name: 'Dard-Venin', type: PokemonElementType.poison, power: 15, description: 'Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner.' },
      { name: 'Flatterie', type: PokemonElementType.dark, power: null, description: 'Rend la cible confuse, mais augmente son Attaque Spéciale.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
    ],
  },
  carnivine: {
    flavorText: 'Il s’accroche aux arbres des marais et attire ses proies avec sa salive à l’odeur enivrante.',
    stats: { hp: 74, attack: 100, defense: 72, specialAttack: 90, specialDefense: 72, speed: 46 },
    moves: [
      { name: 'Essorage', type: PokemonElementType.normal, power: null, description: 'Le lanceur essore l’ennemi. Plus l’ennemi a de PV, plus cette attaque est puissante.' },
      { name: 'Fouet Lianes', type: PokemonElementType.grass, power: 45, description: 'Fouette l’ennemi avec de fines lianes pour infliger des dégâts.' },
      { name: 'Mégafouet', type: PokemonElementType.grass, power: 120, description: 'Le lanceur fait virevolter violemment ses lianes ou ses tentacules pour fouetter l’ennemi.' },
      { name: 'Relâche', type: PokemonElementType.normal, power: null, description: 'Libère dans une attaque la puissance précédemment accumulée avec Stockage.' },
    ],
  },
  finneon: {
    flavorText: 'La ligne qui fait le tour de son corps stocke l’énergie solaire et brille dans la nuit.',
    stats: { hp: 49, attack: 49, defense: 56, specialAttack: 49, specialDefense: 61, speed: 66 },
    moves: [
      { name: 'Vent Argenté', type: PokemonElementType.bug, power: 60, description: 'Vent qui projette des écailles poudreuses sur l’ennemi. Peut aussi monter toutes les stats du lanceur.' },
      { name: 'Anneau Hydro', type: PokemonElementType.water, power: null, description: 'Un voile liquide enveloppe le lanceur. Il récupère des PV à chaque tour.' },
      { name: 'Tornade', type: PokemonElementType.flying, power: 40, description: 'Le lanceur bat des ailes pour générer une bourrasque qui blesse l’ennemi.' },
      { name: 'Écras’Face', type: PokemonElementType.normal, power: 40, description: 'Écrase l’ennemi avec les pattes avant, la queue, etc.' },
    ],
  },
  lumineon: {
    flavorText: 'Il rampe au fond de l’océan grâce aux nageoires de son torse. Le Lanturn est son rival.',
    stats: { hp: 69, attack: 69, defense: 76, specialAttack: 69, specialDefense: 86, speed: 91 },
    moves: [
      { name: 'Vent Argenté', type: PokemonElementType.bug, power: 60, description: 'Vent qui projette des écailles poudreuses sur l’ennemi. Peut aussi monter toutes les stats du lanceur.' },
      { name: 'Anneau Hydro', type: PokemonElementType.water, power: null, description: 'Un voile liquide enveloppe le lanceur. Il récupère des PV à chaque tour.' },
      { name: 'Tornade', type: PokemonElementType.flying, power: 40, description: 'Le lanceur bat des ailes pour générer une bourrasque qui blesse l’ennemi.' },
      { name: 'Écras’Face', type: PokemonElementType.normal, power: 40, description: 'Écrase l’ennemi avec les pattes avant, la queue, etc.' },
    ],
  },
  mantyke: {
    flavorText: 'On organise des excursions pour le voir surfer sur les vagues au côté des Rémoraid.',
    stats: { hp: 45, attack: 20, defense: 50, specialAttack: 60, specialDefense: 120, speed: 50 },
    moves: [
      { name: 'Cru-Ailes', type: PokemonElementType.flying, power: 60, description: 'L’ennemi est frappé par de larges ailes déployées pour infliger des dégâts.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
      { name: 'Anneau Hydro', type: PokemonElementType.water, power: null, description: 'Un voile liquide enveloppe le lanceur. Il récupère des PV à chaque tour.' },
      { name: 'Ultrason', type: PokemonElementType.normal, power: null, description: 'Le lanceur produit d’étranges ondes sonores qui rendent confus.' },
    ],
  },
  snover: {
    flavorText: 'Curieux de rencontrer des gens, ils se rassemblent autour des traces de pas trouvées dans la montagne.',
    stats: { hp: 60, attack: 62, defense: 50, specialAttack: 62, specialDefense: 60, speed: 40 },
    moves: [
      { name: 'Siffl’Herbe', type: PokemonElementType.grass, power: null, description: 'Le lanceur joue une douce mélodie qui plonge l’ennemi dans un profond sommeil.' },
      { name: 'Glaciation', type: PokemonElementType.ice, power: null, description: 'Une vague de froid glacial frappe l’ennemi. S’il est touché, il est mis K.O. sur le coup.' },
      { name: 'Martobois', type: PokemonElementType.grass, power: 120, description: 'Le lanceur heurte l’ennemi de son corps robuste. Inflige de sérieux dégâts au lanceur aussi.' },
      { name: 'Éclats Glace', type: PokemonElementType.ice, power: 40, description: 'Le lanceur crée des éclats de glace qu’il envoie sur l’ennemi. Frappe toujours en premier.' },
    ],
  },
  abomasnow: {
    flavorText: 'Il apparaît quand les fleurs des terres enneigées fleurissent et se retire quand elles se fanent.',
    stats: { hp: 90, attack: 92, defense: 75, specialAttack: 92, specialDefense: 85, speed: 60 },
    moves: [
      { name: 'Siffl’Herbe', type: PokemonElementType.grass, power: null, description: 'Le lanceur joue une douce mélodie qui plonge l’ennemi dans un profond sommeil.' },
      { name: 'Glaciation', type: PokemonElementType.ice, power: null, description: 'Une vague de froid glacial frappe l’ennemi. S’il est touché, il est mis K.O. sur le coup.' },
      { name: 'Martobois', type: PokemonElementType.grass, power: 120, description: 'Le lanceur heurte l’ennemi de son corps robuste. Inflige de sérieux dégâts au lanceur aussi.' },
      { name: 'Éclats Glace', type: PokemonElementType.ice, power: 40, description: 'Le lanceur crée des éclats de glace qu’il envoie sur l’ennemi. Frappe toujours en premier.' },
    ],
  },
  weavile: {
    flavorText: 'L’évolution l’a rendu encore plus retors. Il communique en griffant des signes dans les pierres.',
    stats: { hp: 70, attack: 120, defense: 65, specialAttack: 45, specialDefense: 85, speed: 125 },
    moves: [
      { name: 'Combo-Griffe', type: PokemonElementType.normal, power: 18, description: 'L’ennemi est lacéré par des faux ou des griffes de 2 à 5 fois.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
      { name: 'Griffe Acier', type: PokemonElementType.steel, power: 50, description: 'Attaque avec des griffes d’acier. Peut aussi augmenter l’Attaque du lanceur.' },
      { name: 'Embargo', type: PokemonElementType.dark, power: null, description: 'Empêche l’ennemi d’utiliser un objet tenu et son Dresseur d’utiliser un objet sur lui.' },
    ],
  },
  magnezone: {
    flavorText: 'Des scientifiques ont essayé de faire évoluer un Magnézone en laboratoire, mais ce fut un échec.',
    stats: { hp: 70, attack: 70, defense: 115, specialAttack: 130, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'Bombe Aimant', type: PokemonElementType.steel, power: 60, description: 'Le lanceur projette des bombes d’acier qui collent à l’ennemi. N’échoue jamais.' },
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'Une onde de choc destructrice qui inflige toujours 20 PV de dégâts.' },
      { name: 'Miroi-Tir', type: PokemonElementType.steel, power: 65, description: 'Le corps poli du lanceur libère un éclair d’énergie. Peut aussi baisser la Précision de l’ennemi.' },
      { name: 'Verrouillage', type: PokemonElementType.normal, power: null, description: 'Verrouille l’ennemi pour ne pas le rater au tour suivant.' },
    ],
  },
  lickilicky: {
    flavorText: 'Sa longue langue est couverte en permanence d’une épaisse couche de bave anesthésiante.',
    stats: { hp: 110, attack: 85, defense: 95, specialAttack: 80, specialDefense: 95, speed: 50 },
    moves: [
      { name: 'Essorage', type: PokemonElementType.normal, power: null, description: 'Le lanceur essore l’ennemi. Plus l’ennemi a de PV, plus cette attaque est puissante.' },
      { name: 'Moi d’Abord', type: PokemonElementType.normal, power: null, description: 'Le lanceur vole la capacité prévue par l’ennemi et l’utilise en faisant plus de dégâts. Il doit frapper en premier.' },
      { name: 'Ligotage', type: PokemonElementType.normal, power: 15, description: 'Le lanceur ligote l’ennemi avec des lianes ou son corps pour l’écraser durant 4 à 5 tours.' },
      { name: 'Léchouille', type: PokemonElementType.ghost, power: 30, description: 'Un grand coup de langue qui inflige des dégâts à l’ennemi. Peut aussi le paralyser.' },
    ],
  },
  rhyperior: {
    flavorText: 'Il peut lancer des pierres à une vitesse saisissante en bandant et relâchant ses muscles en un éclair.',
    stats: { hp: 115, attack: 140, defense: 130, specialAttack: 55, specialDefense: 55, speed: 40 },
    moves: [
      { name: 'Roc-Boulet', type: PokemonElementType.rock, power: 150, description: 'Le lanceur attaque en projetant un gros rocher sur l’ennemi. Il doit se reposer au tour suivant.' },
      { name: 'Koud’Korne', type: PokemonElementType.normal, power: 65, description: 'Frappe l’ennemi d’un coup de corne pointue pour infliger des dégâts.' },
      { name: 'Empal’Korne', type: PokemonElementType.normal, power: null, description: 'Un coup de corne en vrille qui empale l’ennemi, le mettant K.O. sur le coup s’il est touché.' },
      { name: 'Mégacorne', type: PokemonElementType.bug, power: 120, description: 'Le lanceur utilise ses gigantesques cornes pour charger l’ennemi.' },
    ],
  },
  tangrowth: {
    flavorText: 'Ses bras sont en fait des plantes qui s’attachent à tout ce qu’elles touchent et peuvent repousser.',
    stats: { hp: 100, attack: 100, defense: 125, specialAttack: 110, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'Constriction', type: PokemonElementType.normal, power: 10, description: 'De longs tentacules ou lianes attaquent l’ennemi. Peut aussi baisser sa Vitesse.' },
      { name: 'Essorage', type: PokemonElementType.normal, power: null, description: 'Le lanceur essore l’ennemi. Plus l’ennemi a de PV, plus cette attaque est puissante.' },
      { name: 'Fouet Lianes', type: PokemonElementType.grass, power: 45, description: 'Fouette l’ennemi avec de fines lianes pour infliger des dégâts.' },
      { name: 'Poudre Dodo', type: PokemonElementType.grass, power: null, description: 'Le lanceur répand une poudre soporifique qui endort la cible.' },
    ],
  },
  electivire: {
    flavorText: 'Encaissant les attaques, il vient toucher l’ennemi de ses queues et lui inflige une forte décharge.',
    stats: { hp: 75, attack: 123, defense: 67, specialAttack: 95, specialDefense: 85, speed: 95 },
    moves: [
      { name: 'Éclair', type: PokemonElementType.electric, power: 40, description: 'Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Coup d’Jus', type: PokemonElementType.electric, power: 80, description: 'Un flamboiement d’électricité frappe tous les Pokémon autour du lanceur. Peut aussi paralyser.' },
      { name: 'Vive-Attaque', type: PokemonElementType.normal, power: 40, description: 'Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en premier.' },
      { name: 'Poing Feu', type: PokemonElementType.fire, power: 75, description: 'Un coup de poing enflammé vient frapper l’ennemi. Peut le brûler.' },
    ],
  },
  magmortar: {
    flavorText: 'Quand il lance des boules de feu à plus de 2 000 °C, son corps est comme chauffé à blanc.',
    stats: { hp: 75, attack: 95, defense: 67, specialAttack: 125, specialDefense: 95, speed: 83 },
    moves: [
      { name: 'Ébullilave', type: PokemonElementType.fire, power: 80, description: 'Des boules de feu s’abattent sur tous les Pokémon autour du lanceur. Peut aussi brûler.' },
      { name: 'Purédpois', type: PokemonElementType.poison, power: 30, description: 'Le lanceur attaque à l’aide d’une éruption de gaz répugnants. Peut aussi empoisonner l’ennemi.' },
      { name: 'Brouillard', type: PokemonElementType.normal, power: null, description: 'Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi.' },
      { name: 'Flammèche', type: PokemonElementType.fire, power: 40, description: 'L’ennemi est attaqué par de faibles flammes. Peut aussi le brûler.' },
    ],
  },
  togekiss: {
    flavorText: 'Il apprécie particulièrement les gens qui respectent les autres et évitent les conflits inutiles.',
    stats: { hp: 85, attack: 50, defense: 95, specialAttack: 120, specialDefense: 115, speed: 80 },
    moves: [
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Aurasphère', type: PokemonElementType.fighting, power: 80, description: 'Le lanceur dégage une aura et projette de l’énergie. N’échoue jamais.' },
      { name: 'Piqué', type: PokemonElementType.flying, power: 140, description: 'Une attaque en 2 tours au taux de critiques élevé. Peut aussi apeurer l’ennemi.' },
      { name: 'Lame d’Air', type: PokemonElementType.flying, power: 75, description: 'Le lanceur attaque avec une lame d’air qui fend tout. Peut aussi apeurer l’ennemi.' },
    ],
  },
  yanmega: {
    flavorText: 'Doté de mandibules à la force colossale, il excelle pour mordre ses ennemis en plein vol.',
    stats: { hp: 86, attack: 76, defense: 86, specialAttack: 116, specialDefense: 56, speed: 95 },
    moves: [
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'Une onde de choc destructrice qui inflige toujours 20 PV de dégâts.' },
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Bourdon', type: PokemonElementType.bug, power: 90, description: 'Le lanceur fait vibrer ses ailes pour lancer une vague sonique. Peut aussi baisser la Défense Spéciale de l’ennemi.' },
      { name: 'Ultrason', type: PokemonElementType.normal, power: null, description: 'Le lanceur produit d’étranges ondes sonores qui rendent confus.' },
    ],
  },
  leafeon: {
    flavorText: 'Il utilise la photosynthèse comme une plante et a aussi tendance à éviter le combat à tout prix.',
    stats: { hp: 65, attack: 110, defense: 130, specialAttack: 60, specialDefense: 65, speed: 95 },
    moves: [
      { name: 'Siffl’Herbe', type: PokemonElementType.grass, power: null, description: 'Le lanceur joue une douce mélodie qui plonge l’ennemi dans un profond sommeil.' },
      { name: 'Lame Feuille', type: PokemonElementType.grass, power: 90, description: 'Une feuille coupante comme une lame entaille l’ennemi. Taux de critiques élevé.' },
      { name: 'Tranch’Herbe', type: PokemonElementType.grass, power: 55, description: 'Des feuilles aiguisées comme des rasoirs entaillent l’ennemi. Taux de critiques élevé.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
    ],
  },
  glaceon: {
    flavorText: 'Il ajuste la température de son corps pour créer un vent de glace en gelant l’air qui l’entoure.',
    stats: { hp: 65, attack: 60, defense: 110, specialAttack: 130, specialDefense: 95, speed: 65 },
    moves: [
      { name: 'Bouclier', type: PokemonElementType.psychic, power: null, description: 'Le lanceur érige un mur solide qui augmente fortement sa Défense.' },
      { name: 'Éclats Glace', type: PokemonElementType.ice, power: 40, description: 'Le lanceur crée des éclats de glace qu’il envoie sur l’ennemi. Frappe toujours en premier.' },
      { name: 'Voile Miroir', type: PokemonElementType.psychic, power: null, description: 'Une riposte qui contre n’importe quelle attaque spéciale en infligeant le double des dégâts subis.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
    ],
  },
  gliscor: {
    flavorText: 'Le plus petit courant d’air peut lui donner assez d’élan pour faire le tour du monde sans un coup d’aile.',
    stats: { hp: 75, attack: 95, defense: 125, specialAttack: 45, specialDefense: 75, speed: 95 },
    moves: [
      { name: 'Guillotine', type: PokemonElementType.normal, power: null, description: 'De méchantes pinces lacèrent l’ennemi, le mettant K.O. sur le coup s’il est touché.' },
      { name: 'Armure', type: PokemonElementType.normal, power: null, description: 'Le lanceur contracte tous ses muscles pour augmenter sa Défense.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
      { name: 'Jet de Sable', type: PokemonElementType.ground, power: null, description: 'Lance du sable au visage de l’ennemi pour baisser sa Précision.' },
    ],
  },
  mamoswine: {
    flavorText: 'On a libéré un spécimen de sa prison glacée au bout de 10 000 ans. Il n’en revenait pas.',
    stats: { hp: 110, attack: 130, defense: 80, specialAttack: 70, specialDefense: 60, speed: 80 },
    moves: [
      { name: 'Boue-Bombe', type: PokemonElementType.ground, power: 65, description: 'Le lanceur attaque à l’aide d’une boule de boue solidifiée. Peut aussi baisser la Précision de l’ennemi.' },
      { name: 'Poudreuse', type: PokemonElementType.ice, power: 40, description: 'Le lanceur projette de la neige poudreuse. Peut aussi geler l’ennemi.' },
      { name: 'Flair', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Lance-Boue', type: PokemonElementType.ground, power: null, description: 'Le lanceur se couvre de boue pour affaiblir les capacités Électrik quand il combat.' },
    ],
  },
  porygonZ: {
    flavorText: 'Il a été modifié pour être capable de travailler dans des dimensions parallèles, mais c’est un échec.',
    stats: { hp: 85, attack: 80, defense: 70, specialAttack: 135, specialDefense: 75, speed: 90 },
    moves: [
      { name: 'Conversion', type: PokemonElementType.normal, power: null, description: 'Le lanceur change de type pour prendre celui de l’une de ses capacités.' },
      { name: 'Conversion 2', type: PokemonElementType.normal, power: null, description: 'Le lanceur change de type pour être résistant au type de la dernière attaque lancée par sa cible.' },
      { name: 'Verrouillage', type: PokemonElementType.normal, power: null, description: 'Verrouille l’ennemi pour ne pas le rater au tour suivant.' },
      { name: 'Triplattaque', type: PokemonElementType.normal, power: 80, description: 'Le lanceur envoie trois boules d’énergie simultanément. Peut aussi paralyser, brûler ou geler l’ennemi.' },
    ],
  },
  gallade: {
    flavorText: 'Toujours prêt à protéger son prochain, il se bat férocement avec ses coudes en forme d’épées.',
    stats: { hp: 68, attack: 125, defense: 65, specialAttack: 65, specialDefense: 115, speed: 80 },
    moves: [
      { name: 'Lame Feuille', type: PokemonElementType.grass, power: 90, description: 'Une feuille coupante comme une lame entaille l’ennemi. Taux de critiques élevé.' },
      { name: 'Téléport', type: PokemonElementType.psychic, power: null, description: 'Permet de fuir un Pokémon sauvage. Permet aussi de revenir au dernier Centre Pokémon visité.' },
      { name: 'Coupe Psycho', type: PokemonElementType.psychic, power: 70, description: 'Le lanceur entaille l’ennemi grâce à des lames faites de pouvoir psychique. Taux de critiques élevé.' },
      { name: 'Ruse', type: PokemonElementType.normal, power: 30, description: 'Une attaque capable de toucher un ennemi qui utilise Détection ou Abri. Annule aussi leur effet.' },
    ],
  },
  probopass: {
    flavorText: 'Il utilise sa force magnétique pour diriger trois petites unités appelées Mini-nez.',
    stats: { hp: 60, attack: 55, defense: 145, specialAttack: 75, specialDefense: 150, speed: 40 },
    moves: [
      { name: 'Bombe Aimant', type: PokemonElementType.steel, power: 60, description: 'Le lanceur projette des bombes d’acier qui collent à l’ennemi. N’échoue jamais.' },
      { name: 'Verrouillage', type: PokemonElementType.normal, power: null, description: 'Verrouille l’ennemi pour ne pas le rater au tour suivant.' },
      { name: 'Élecanon', type: PokemonElementType.electric, power: 120, description: 'Un boulet de canon électrifié qui inflige des dégâts et paralyse l’ennemi.' },
      { name: 'Coup d’Jus', type: PokemonElementType.electric, power: 80, description: 'Un flamboiement d’électricité frappe tous les Pokémon autour du lanceur. Peut aussi paralyser.' },
    ],
  },
  dusknoir: {
    flavorText: 'Son corps se replie sur lui-même pour emprisonner les esprits perdus et les ramener chez eux.',
    stats: { hp: 45, attack: 100, defense: 135, specialAttack: 65, specialDefense: 135, speed: 45 },
    moves: [
      { name: 'Poing Ombre', type: PokemonElementType.ghost, power: 60, description: 'Le lanceur surgit des ombres et donne un coup de poing. N’échoue jamais.' },
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Regard Noir', type: PokemonElementType.normal, power: null, description: 'Le lanceur pétrifie l’ennemi en lui lançant un regard noir. Il devient incapable de s’enfuir.' },
      { name: 'Ombre Portée', type: PokemonElementType.ghost, power: 40, description: 'Le lanceur étend son ombre pour frapper par-derrière. Frappe en priorité.' },
    ],
  },
  froslass: {
    flavorText: 'On dit que Momartik gèle ses proies grâce à son souffle à -50 °C avant de les exposer dans sa tanière.',
    stats: { hp: 70, attack: 80, defense: 70, specialAttack: 80, specialDefense: 70, speed: 110 },
    moves: [
      { name: 'Réveil Forcé', type: PokemonElementType.fighting, power: 70, description: 'Cette attaque inflige d’importants dégâts à un Pokémon endormi. Mais elle le réveille également.' },
      { name: 'Éclats Glace', type: PokemonElementType.ice, power: 40, description: 'Le lanceur crée des éclats de glace qu’il envoie sur l’ennemi. Frappe toujours en premier.' },
      { name: 'Poudreuse', type: PokemonElementType.ice, power: 40, description: 'Le lanceur projette de la neige poudreuse. Peut aussi geler l’ennemi.' },
      { name: 'Lien du Destin', type: PokemonElementType.ghost, power: null, description: 'Quand cette capacité est activée, elle met K.O. un ennemi qui porte un coup fatal au lanceur.' },
    ],
  },
  rotom: {
    flavorText: 'Son corps parcouru d’électricité lui permet de prendre le contrôle de certains appareils ménagers.',
    stats: { hp: 50, attack: 50, defense: 77, specialAttack: 95, specialDefense: 77, speed: 91 },
    moves: [
      { name: 'Éclair', type: PokemonElementType.electric, power: 40, description: 'Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
      { name: 'Vent Mauvais', type: PokemonElementType.ghost, power: 60, description: 'Le lanceur crée une violente bourrasque. Peut aussi augmenter toutes ses stats.' },
      { name: 'Coup d’Jus', type: PokemonElementType.electric, power: 80, description: 'Un flamboiement d’électricité frappe tous les Pokémon autour du lanceur. Peut aussi paralyser.' },
    ],
  },
  rotom_fan: {
    flavorText: 'Son corps parcouru d’électricité lui permet de prendre le contrôle de certains appareils ménagers.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Éclair', type: PokemonElementType.electric, power: 40, description: 'Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
      { name: 'Vent Mauvais', type: PokemonElementType.ghost, power: 60, description: 'Le lanceur crée une violente bourrasque. Peut aussi augmenter toutes ses stats.' },
      { name: 'Coup d’Jus', type: PokemonElementType.electric, power: 80, description: 'Un flamboiement d’électricité frappe tous les Pokémon autour du lanceur. Peut aussi paralyser.' },
    ],
  },
  rotom_frost: {
    flavorText: 'Son corps parcouru d’électricité lui permet de prendre le contrôle de certains appareils ménagers.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Éclair', type: PokemonElementType.electric, power: 40, description: 'Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
      { name: 'Vent Mauvais', type: PokemonElementType.ghost, power: 60, description: 'Le lanceur crée une violente bourrasque. Peut aussi augmenter toutes ses stats.' },
      { name: 'Coup d’Jus', type: PokemonElementType.electric, power: 80, description: 'Un flamboiement d’électricité frappe tous les Pokémon autour du lanceur. Peut aussi paralyser.' },
    ],
  },
  rotom_heat: {
    flavorText: 'Son corps parcouru d’électricité lui permet de prendre le contrôle de certains appareils ménagers.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Éclair', type: PokemonElementType.electric, power: 40, description: 'Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
      { name: 'Vent Mauvais', type: PokemonElementType.ghost, power: 60, description: 'Le lanceur crée une violente bourrasque. Peut aussi augmenter toutes ses stats.' },
      { name: 'Coup d’Jus', type: PokemonElementType.electric, power: 80, description: 'Un flamboiement d’électricité frappe tous les Pokémon autour du lanceur. Peut aussi paralyser.' },
    ],
  },
  rotom_mow: {
    flavorText: 'Son corps parcouru d’électricité lui permet de prendre le contrôle de certains appareils ménagers.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Éclair', type: PokemonElementType.electric, power: 40, description: 'Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
      { name: 'Vent Mauvais', type: PokemonElementType.ghost, power: 60, description: 'Le lanceur crée une violente bourrasque. Peut aussi augmenter toutes ses stats.' },
      { name: 'Coup d’Jus', type: PokemonElementType.electric, power: 80, description: 'Un flamboiement d’électricité frappe tous les Pokémon autour du lanceur. Peut aussi paralyser.' },
    ],
  },
  rotom_wash: {
    flavorText: 'Son corps parcouru d’électricité lui permet de prendre le contrôle de certains appareils ménagers.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Éclair', type: PokemonElementType.electric, power: 40, description: 'Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser.' },
      { name: 'Chargeur', type: PokemonElementType.electric, power: null, description: 'Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale.' },
      { name: 'Vent Mauvais', type: PokemonElementType.ghost, power: 60, description: 'Le lanceur crée une violente bourrasque. Peut aussi augmenter toutes ses stats.' },
      { name: 'Coup d’Jus', type: PokemonElementType.electric, power: 80, description: 'Un flamboiement d’électricité frappe tous les Pokémon autour du lanceur. Peut aussi paralyser.' },
    ],
  },
  uxie: {
    flavorText: 'Quand il prit son envol, les hommes apprirent à résoudre les problèmes. Le savoir était né.',
    stats: { hp: 75, attack: 75, defense: 130, specialAttack: 75, specialDefense: 130, speed: 95 },
    moves: [
      { name: 'Souvenir', type: PokemonElementType.dark, power: null, description: 'Le lanceur est mis K.O., mais l’Attaque et l’Attaque Spéciale de l’ennemi baissent beaucoup.' },
      { name: 'Extrasenseur', type: PokemonElementType.psychic, power: 80, description: 'Le lanceur attaque avec un pouvoir étrange et invisible. Peut aussi apeurer l’ennemi.' },
      { name: 'Bâillement', type: PokemonElementType.normal, power: null, description: 'Fait bâiller l’ennemi qui s’endort au tour suivant.' },
      { name: 'Choc Mental', type: PokemonElementType.psychic, power: 50, description: 'Une faible vague télékinésique frappe l’ennemi. Peut aussi le plonger dans la confusion.' },
    ],
  },
  mesprit: {
    flavorText: 'Quand il prit son envol, les hommes apprirent à ressentir la joie et la peine. L’émotion était née.',
    stats: { hp: 80, attack: 105, defense: 105, specialAttack: 105, specialDefense: 105, speed: 80 },
    moves: [
      { name: 'Vœu Soin', type: PokemonElementType.psychic, power: null, description: 'Le lanceur tombe K.O. pour soigner les PV et le statut du Pokémon qui passe après lui.' },
      { name: 'Air Veinard', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie une incantation vers le ciel pour empêcher l’ennemi d’effectuer des coups critiques.' },
      { name: 'Extrasenseur', type: PokemonElementType.psychic, power: 80, description: 'Le lanceur attaque avec un pouvoir étrange et invisible. Peut aussi apeurer l’ennemi.' },
      { name: 'Photocopie', type: PokemonElementType.normal, power: null, description: 'Le lanceur imite la dernière capacité employée. Échoue si aucune capacité n’a été utilisée.' },
    ],
  },
  azelf: {
    flavorText: 'Quand il prit son envol, les hommes acquirent la détermination. La volonté était née.',
    stats: { hp: 75, attack: 125, defense: 70, specialAttack: 125, specialDefense: 70, speed: 115 },
    moves: [
      { name: 'Extrasenseur', type: PokemonElementType.psychic, power: 80, description: 'Le lanceur attaque avec un pouvoir étrange et invisible. Peut aussi apeurer l’ennemi.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'Le lanceur explose et inflige des dégâts à tous les Pokémon autour de lui. Met K.O. le lanceur.' },
      { name: 'Choc Mental', type: PokemonElementType.psychic, power: 50, description: 'Une faible vague télékinésique frappe l’ennemi. Peut aussi le plonger dans la confusion.' },
      { name: 'Prescience', type: PokemonElementType.psychic, power: 120, description: 'De l’énergie psychique vient frapper l’ennemi 2 tours après l’utilisation de cette capacité.' },
    ],
  },
  dialga: {
    flavorText: 'On dit que le temps s’écoule au rythme des battements de cœur de ce Pokémon légendaire de Sinnoh.',
    stats: { hp: 100, attack: 120, defense: 120, specialAttack: 150, specialDefense: 100, speed: 90 },
    moves: [
      { name: 'Hurle-Temps', type: PokemonElementType.dragon, power: 150, description: 'Le lanceur frappe si fort qu’il affecte le cours du temps. Il se repose au tour suivant.' },
      { name: 'Anti-Soin', type: PokemonElementType.psychic, power: null, description: 'Le lanceur empêche l’ennemi d’utiliser ses capacités, cap. spé. ou objets tenus pour récupérer des PV pendant 5 tours.' },
      { name: 'Aurasphère', type: PokemonElementType.fighting, power: 80, description: 'Le lanceur dégage une aura et projette de l’énergie. N’échoue jamais.' },
      { name: 'Draco-Souffle', type: PokemonElementType.dragon, power: 60, description: 'Le lanceur souffle fort sur l’ennemi pour infliger des dégâts. Peut aussi le paralyser.' },
    ],
  },
  palkia: {
    flavorText: 'On dit que la stabilité de l’espace est maintenue par le souffle de ce Pokémon légendaire de Sinnoh.',
    stats: { hp: 90, attack: 120, defense: 100, specialAttack: 150, specialDefense: 120, speed: 100 },
    moves: [
      { name: 'Spatio-Rift', type: PokemonElementType.dragon, power: 100, description: 'Le lanceur déchire l’ennemi et l’espace autour de lui. Taux de critiques élevé.' },
      { name: 'Anti-Soin', type: PokemonElementType.psychic, power: null, description: 'Le lanceur empêche l’ennemi d’utiliser ses capacités, cap. spé. ou objets tenus pour récupérer des PV pendant 5 tours.' },
      { name: 'Aurasphère', type: PokemonElementType.fighting, power: 80, description: 'Le lanceur dégage une aura et projette de l’énergie. N’échoue jamais.' },
      { name: 'Draco-Souffle', type: PokemonElementType.dragon, power: 60, description: 'Le lanceur souffle fort sur l’ennemi pour infliger des dégâts. Peut aussi le paralyser.' },
    ],
  },
  heatran: {
    flavorText: 'Son corps est composé d’acier brut dont certaines parties ont fondu à cause de sa propre chaleur.',
    stats: { hp: 91, attack: 90, defense: 106, specialAttack: 130, specialDefense: 106, speed: 77 },
    moves: [
      { name: 'Vortex Magma', type: PokemonElementType.fire, power: 100, description: 'L’ennemi est pris dans un tourbillon de feu qui dure de 4 à 5 tours.' },
      { name: 'Ébullilave', type: PokemonElementType.fire, power: 80, description: 'Des boules de feu s’abattent sur tous les Pokémon autour du lanceur. Peut aussi brûler.' },
      { name: 'Strido-Son', type: PokemonElementType.steel, power: null, description: 'Un cri horrible tel un crissement métallique qui réduit fortement la Défense Spéciale de l’ennemi.' },
      { name: 'Danse Flammes', type: PokemonElementType.fire, power: 35, description: 'Un tourbillon de flammes emprisonne l’ennemi pendant 4 à 5 tours.' },
    ],
  },
  regigigas: {
    flavorText: 'On dit qu’il a créé des Pokémon à son image à partir de glace, de roche et de magma.',
    stats: { hp: 110, attack: 160, defense: 110, specialAttack: 80, specialDefense: 110, speed: 100 },
    moves: [
      { name: 'Presse', type: PokemonElementType.normal, power: null, description: 'Une force puissante écrase l’ennemi. Plus il lui reste de PV et plus l’attaque est puissante.' },
      { name: 'Uppercut', type: PokemonElementType.normal, power: 70, description: 'Un enchaînement de coups de poing cadencés. Peut aussi rendre confus.' },
      { name: 'Clairvoyance', type: PokemonElementType.normal, power: null, description: 'Permet de toucher un Pokémon Spectre avec n’importe quelle capacité et de toucher un ennemi insaisissable.' },
      { name: 'Vendetta', type: PokemonElementType.fighting, power: 60, description: 'Une attaque deux fois plus puissante si le lanceur a été blessé par l’ennemi durant ce tour.' },
    ],
  },
  giratina: {
    flavorText: 'Sa grande violence lui a valu d’être banni. Il observe les hommes en silence depuis le Monde Distorsion.',
    stats: { hp: 150, attack: 100, defense: 120, specialAttack: 100, specialDefense: 120, speed: 90 },
    moves: [
      { name: 'Revenant', type: PokemonElementType.ghost, power: 120, description: 'Le lanceur disparaît et frappe l’ennemi au second tour. Fonctionne même si l’ennemi se protège.' },
      { name: 'Anti-Soin', type: PokemonElementType.psychic, power: null, description: 'Le lanceur empêche l’ennemi d’utiliser ses capacités, cap. spé. ou objets tenus pour récupérer des PV pendant 5 tours.' },
      { name: 'Aurasphère', type: PokemonElementType.fighting, power: 80, description: 'Le lanceur dégage une aura et projette de l’énergie. N’échoue jamais.' },
      { name: 'Draco-Souffle', type: PokemonElementType.dragon, power: 60, description: 'Le lanceur souffle fort sur l’ennemi pour infliger des dégâts. Peut aussi le paralyser.' },
    ],
  },
  giratina_origin: {
    flavorText: 'Sa grande violence lui a valu d’être banni. Il observe les hommes en silence depuis le Monde Distorsion.',
    stats: { hp: 150, attack: 120, defense: 100, specialAttack: 120, specialDefense: 100, speed: 90 },
    moves: [
      { name: 'Revenant', type: PokemonElementType.ghost, power: 120, description: 'Le lanceur disparaît et frappe l’ennemi au second tour. Fonctionne même si l’ennemi se protège.' },
      { name: 'Anti-Soin', type: PokemonElementType.psychic, power: null, description: 'Le lanceur empêche l’ennemi d’utiliser ses capacités, cap. spé. ou objets tenus pour récupérer des PV pendant 5 tours.' },
      { name: 'Aurasphère', type: PokemonElementType.fighting, power: 80, description: 'Le lanceur dégage une aura et projette de l’énergie. N’échoue jamais.' },
      { name: 'Draco-Souffle', type: PokemonElementType.dragon, power: 60, description: 'Le lanceur souffle fort sur l’ennemi pour infliger des dégâts. Peut aussi le paralyser.' },
    ],
  },
  cresselia: {
    flavorText: 'Les nuits où le premier croissant de lune est visible, l’arc de sa queue se déploie de façon superbe.',
    stats: { hp: 120, attack: 70, defense: 110, specialAttack: 75, specialDefense: 120, speed: 85 },
    moves: [
      { name: 'Danse Lune', type: PokemonElementType.psychic, power: null, description: 'Le lanceur tombe K.O. pour soigner le statut et les PV du Pokémon qui prendra sa place au combat.' },
      { name: 'Échange Psy', type: PokemonElementType.psychic, power: null, description: 'Le lanceur transfère ses problèmes de statut à l’ennemi grâce à son pouvoir de suggestion.' },
      { name: 'Rayon Lune', type: PokemonElementType.normal, power: null, description: 'Un soin qui restaure des PV au lanceur. Son efficacité varie en fonction de la météo.' },
      { name: 'Onde Boréale', type: PokemonElementType.ice, power: 65, description: 'Envoie un rayon arc-en-ciel sur l’ennemi. Peut aussi baisser son Attaque.' },
    ],
  },
  phione: {
    flavorText: 'Ce Pokémon des mers chaudes revient toujours à son lieu de naissance, peu importe la distance.',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80 },
    moves: [
      { name: 'Acidarmure', type: PokemonElementType.poison, power: null, description: 'Le lanceur modifie sa structure moléculaire pour se liquéfier et augmenter fortement sa Défense.' },
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
      { name: 'Écume', type: PokemonElementType.water, power: 40, description: 'Des bulles frappent l’ennemi. Peut réduire sa Vitesse.' },
      { name: 'Anneau Hydro', type: PokemonElementType.water, power: null, description: 'Un voile liquide enveloppe le lanceur. Il récupère des PV à chaque tour.' },
    ],
  },
  manaphy: {
    flavorText: 'Il est né avec le pouvoir incroyable de créer des liens avec n’importe quel Pokémon.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Permucœur', type: PokemonElementType.psychic, power: null, description: 'Le lanceur utilise un pouvoir psychique pour échanger ses changements de stats avec la cible.' },
      { name: 'Lumi-Queue', type: PokemonElementType.bug, power: null, description: 'Le lanceur regarde un flash lumineux fixement. Augmente considérablement son Attaque Spéciale.' },
      { name: 'Acidarmure', type: PokemonElementType.poison, power: null, description: 'Le lanceur modifie sa structure moléculaire pour se liquéfier et augmenter fortement sa Défense.' },
      { name: 'Tourniquet', type: PokemonElementType.water, power: null, description: 'Le lanceur s’asperge d’eau. Affaiblit les capacités Feu quand le lanceur est au combat.' },
    ],
  },
  darkrai: {
    flavorText: 'Menacé, ce Pokémon se protège en créant des cauchemars dans l’esprit de ses ennemis.',
    stats: { hp: 70, attack: 90, defense: 90, specialAttack: 135, specialDefense: 90, speed: 125 },
    moves: [
      { name: 'Trou Noir', type: PokemonElementType.dark, power: null, description: 'L’ennemi est plongé dans les ténèbres. Il tombe dans un profond sommeil.' },
      { name: 'Cauchemar', type: PokemonElementType.ghost, power: null, description: 'Un cauchemar qui inflige des dégâts à chaque tour à un ennemi endormi.' },
      { name: 'Hypnose', type: PokemonElementType.psychic, power: null, description: 'Le lanceur hypnotise l’ennemi pour le plonger dans un profond sommeil.' },
      { name: 'Feinte', type: PokemonElementType.dark, power: 60, description: 'Le lanceur s’approche l’air de rien avant de frapper par surprise. N’échoue jamais.' },
    ],
  },
  shaymin: {
    flavorText: 'Les fleurs qui couvrent son corps s’ouvrent quand il est câliné avec amour et perçoit de la gratitude.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Fulmigraine', type: PokemonElementType.grass, power: 120, description: 'Le corps du lanceur émet une onde de choc. Peut aussi baisser grandement la Défense Spéciale de la cible.' },
      { name: 'Vœu Soin', type: PokemonElementType.psychic, power: null, description: 'Le lanceur tombe K.O. pour soigner les PV et le statut du Pokémon qui passe après lui.' },
      { name: 'Doux Baiser', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie un bisou si mignon et désarmant qu’il plonge l’ennemi dans la confusion.' },
      { name: 'Aromathérapie', type: PokemonElementType.grass, power: null, description: 'Le lanceur libère un parfum apaisant qui guérit tous les problèmes de statut de l’équipe.' },
    ],
  },
  shaymin_sky: {
    flavorText: 'Les fleurs qui couvrent son corps s’ouvrent quand il est câliné avec amour et perçoit de la gratitude.',
    stats: { hp: 100, attack: 103, defense: 75, specialAttack: 120, specialDefense: 75, speed: 127 },
    moves: [
      { name: 'Fulmigraine', type: PokemonElementType.grass, power: 120, description: 'Le corps du lanceur émet une onde de choc. Peut aussi baisser grandement la Défense Spéciale de la cible.' },
      { name: 'Doux Baiser', type: PokemonElementType.normal, power: null, description: 'Le lanceur envoie un bisou si mignon et désarmant qu’il plonge l’ennemi dans la confusion.' },
      { name: 'Croissance', type: PokemonElementType.normal, power: null, description: 'Le corps du lanceur se développe. Augmente l’Attaque et l’Attaque Spéciale.' },
      { name: 'Doux Parfum', type: PokemonElementType.normal, power: null, description: 'Un doux parfum qui réduit l’Esquive de l’ennemi. Attire aussi les Pokémon sauvages.' },
    ],
  },
  arceus: {
    flavorText: 'On dit que son œuf a éclos dans le néant et qu’il est à l’origine de la création du monde.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Jugement', type: PokemonElementType.normal, power: 100, description: 'Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
    ],
  },
  arceus_bug: {
    flavorText: 'On dit que son œuf a éclos dans le néant et qu’il est à l’origine de la création du monde.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Jugement', type: PokemonElementType.normal, power: 100, description: 'Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
    ],
  },
  arceus_dark: {
    flavorText: 'On dit que son œuf a éclos dans le néant et qu’il est à l’origine de la création du monde.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Jugement', type: PokemonElementType.normal, power: 100, description: 'Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
    ],
  },
  arceus_dragon: {
    flavorText: 'On dit que son œuf a éclos dans le néant et qu’il est à l’origine de la création du monde.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Jugement', type: PokemonElementType.normal, power: 100, description: 'Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
    ],
  },
  arceus_electric: {
    flavorText: 'On dit que son œuf a éclos dans le néant et qu’il est à l’origine de la création du monde.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Jugement', type: PokemonElementType.normal, power: 100, description: 'Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
    ],
  },
  arceus_fighting: {
    flavorText: 'On dit que son œuf a éclos dans le néant et qu’il est à l’origine de la création du monde.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Jugement', type: PokemonElementType.normal, power: 100, description: 'Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
    ],
  },
  arceus_fire: {
    flavorText: 'On dit que son œuf a éclos dans le néant et qu’il est à l’origine de la création du monde.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Jugement', type: PokemonElementType.normal, power: 100, description: 'Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
    ],
  },
  arceus_flying: {
    flavorText: 'On dit que son œuf a éclos dans le néant et qu’il est à l’origine de la création du monde.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Jugement', type: PokemonElementType.normal, power: 100, description: 'Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
    ],
  },
  arceus_ghost: {
    flavorText: 'On dit que son œuf a éclos dans le néant et qu’il est à l’origine de la création du monde.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Jugement', type: PokemonElementType.normal, power: 100, description: 'Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
    ],
  },
  arceus_grass: {
    flavorText: 'On dit que son œuf a éclos dans le néant et qu’il est à l’origine de la création du monde.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Jugement', type: PokemonElementType.normal, power: 100, description: 'Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
    ],
  },
  arceus_ground: {
    flavorText: 'On dit que son œuf a éclos dans le néant et qu’il est à l’origine de la création du monde.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Jugement', type: PokemonElementType.normal, power: 100, description: 'Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
    ],
  },
  arceus_ice: {
    flavorText: 'On dit que son œuf a éclos dans le néant et qu’il est à l’origine de la création du monde.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Jugement', type: PokemonElementType.normal, power: 100, description: 'Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
    ],
  },
  arceus_poison: {
    flavorText: 'On dit que son œuf a éclos dans le néant et qu’il est à l’origine de la création du monde.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Jugement', type: PokemonElementType.normal, power: 100, description: 'Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
    ],
  },
  arceus_psychic: {
    flavorText: 'On dit que son œuf a éclos dans le néant et qu’il est à l’origine de la création du monde.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Jugement', type: PokemonElementType.normal, power: 100, description: 'Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
    ],
  },
  arceus_rock: {
    flavorText: 'On dit que son œuf a éclos dans le néant et qu’il est à l’origine de la création du monde.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Jugement', type: PokemonElementType.normal, power: 100, description: 'Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
    ],
  },
  arceus_steel: {
    flavorText: 'On dit que son œuf a éclos dans le néant et qu’il est à l’origine de la création du monde.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Jugement', type: PokemonElementType.normal, power: 100, description: 'Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
    ],
  },
  arceus_water: {
    flavorText: 'On dit que son œuf a éclos dans le néant et qu’il est à l’origine de la création du monde.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Jugement', type: PokemonElementType.normal, power: 100, description: 'Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur.' },
      { name: 'Vitesse Extrême', type: PokemonElementType.normal, power: 80, description: 'Le lanceur charge à une vitesse renversante. Cette attaque a toujours l’initiative.' },
      { name: 'Punition', type: PokemonElementType.dark, power: null, description: 'Plus l’ennemi a utilisé des augmentations de stats et plus cette capacité est puissante.' },
      { name: 'Requiem', type: PokemonElementType.normal, power: null, description: 'Tout Pokémon qui entend ce requiem est K.O. dans 3 tours à moins qu’il ne quitte le combat.' },
    ],
  },
}
