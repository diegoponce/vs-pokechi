// Flavor text, base stats and a ranked set of representative level-up
// moves for every species, sourced from PokeAPI using a fixed game
// version per origin generation (gen1 FireRed, gen2 HeartGold, gen3
// Emerald, gen4 Platinum). Moves are ranked by rarity - how few other
// species learn the same move by level-up, across every game - then by
// level, so a species' genuine signature moves surface first and an
// ordinary movepool still fills out to 4 when nothing rarer exists.
// A move with no power (status moves: stat changes, healing, and so on)
// carries power: null, shown on a card as '-' rather than a number.
import { PokemonElementType } from './types'

export interface PokemonInfoMove {
  name: string
  type: PokemonElementType
  power: number | null
  description: string
}

export interface PokemonInfoEntry {
  flavorText: string
  stats: {
    hp: number
    attack: number
    defense: number
    specialAttack: number
    specialDefense: number
    speed: number
  }
  moves: PokemonInfoMove[]
}

export const POKEMON_INFO_DATA: { [key: string]: PokemonInfoEntry } = {
  bulbasaur: {
    flavorText: 'There is a plant seed on its back right from the day this POKéMON is born. The seed slowly grows larger.',
    stats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'Vine Whip', type: PokemonElementType.grass, power: 45, description: 'The foe is struck with slender, whiplike vines.' },
      { name: 'Sleep Powder', type: PokemonElementType.grass, power: null, description: 'A sleep-inducing dust is scattered in high volume around a foe.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of toxic dust is scattered. It may poison the foe.' },
      { name: 'Razor Leaf', type: PokemonElementType.grass, power: 55, description: 'The foe is hit with a cutting leaf. It has a high critical-hit ratio.' },
    ],
  },
  ivysaur: {
    flavorText: 'There is a plant bulb on its back. When it absorbs nutrients, the bulb is said to blossom into a large flower.',
    stats: { hp: 60, attack: 62, defense: 63, specialAttack: 80, specialDefense: 80, speed: 60 },
    moves: [
      { name: 'Vine Whip', type: PokemonElementType.grass, power: 45, description: 'The foe is struck with slender, whiplike vines.' },
      { name: 'Sleep Powder', type: PokemonElementType.grass, power: null, description: 'A sleep-inducing dust is scattered in high volume around a foe.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of toxic dust is scattered. It may poison the foe.' },
      { name: 'Razor Leaf', type: PokemonElementType.grass, power: 55, description: 'The foe is hit with a cutting leaf. It has a high critical-hit ratio.' },
    ],
  },
  venusaur: {
    flavorText: 'A bewitching aroma wafts from its flower. The fragrance becalms those engaged in a battle.',
    stats: { hp: 80, attack: 82, defense: 83, specialAttack: 100, specialDefense: 100, speed: 80 },
    moves: [
      { name: 'Vine Whip', type: PokemonElementType.grass, power: 45, description: 'The foe is struck with slender, whiplike vines.' },
      { name: 'Sleep Powder', type: PokemonElementType.grass, power: null, description: 'A sleep-inducing dust is scattered in high volume around a foe.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of toxic dust is scattered. It may poison the foe.' },
      { name: 'Razor Leaf', type: PokemonElementType.grass, power: 55, description: 'The foe is hit with a cutting leaf. It has a high critical-hit ratio.' },
    ],
  },
  charmander: {
    flavorText: 'From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.',
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'Dragon Rage', type: PokemonElementType.dragon, power: null, description: 'The foe is hit with a shock wave that always inflicts 40-HP damage.' },
      { name: 'Smokescreen', type: PokemonElementType.normal, power: null, description: 'An obscuring cloud of smoke or ink reduces the foe’s accuracy.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'The foe is attacked with small flames. The foe may suffer a burn.' },
      { name: 'Metal Claw', type: PokemonElementType.steel, power: 50, description: 'The foe is attacked with steel claws. It may also raise the user’s ATTACK.' },
    ],
  },
  charmeleon: {
    flavorText: 'It lashes about with its tail to knock down its foe. It then tears up the fallen opponent with sharp claws.',
    stats: { hp: 58, attack: 64, defense: 58, specialAttack: 80, specialDefense: 65, speed: 80 },
    moves: [
      { name: 'Dragon Rage', type: PokemonElementType.dragon, power: null, description: 'The foe is hit with a shock wave that always inflicts 40-HP damage.' },
      { name: 'Smokescreen', type: PokemonElementType.normal, power: null, description: 'An obscuring cloud of smoke or ink reduces the foe’s accuracy.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'The foe is attacked with small flames. The foe may suffer a burn.' },
      { name: 'Metal Claw', type: PokemonElementType.steel, power: 50, description: 'The foe is attacked with steel claws. It may also raise the user’s ATTACK.' },
    ],
  },
  charizard: {
    flavorText: 'Its wings can carry this POKéMON close to an altitude of 4,600 feet. It blows out fire at very high temperatures.',
    stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    moves: [
      { name: 'Dragon Rage', type: PokemonElementType.dragon, power: null, description: 'The foe is hit with a shock wave that always inflicts 40-HP damage.' },
      { name: 'Smokescreen', type: PokemonElementType.normal, power: null, description: 'An obscuring cloud of smoke or ink reduces the foe’s accuracy.' },
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'The foe is attacked with small flames. The foe may suffer a burn.' },
    ],
  },
  squirtle: {
    flavorText: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    stats: { hp: 44, attack: 48, defense: 65, specialAttack: 50, specialDefense: 64, speed: 43 },
    moves: [
      { name: 'Withdraw', type: PokemonElementType.water, power: null, description: 'The user withdraws its body in its hard shell, raising its DEFENSE stat.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of bubbles hits the foe. It may lower the foe’s SPEED stat.' },
      { name: 'Rapid Spin', type: PokemonElementType.normal, power: 50, description: 'An attack that frees the user from BIND, WRAP, LEECH SEED, and SPIKES.' },
      { name: 'Skull Bash', type: PokemonElementType.normal, power: 130, description: 'The user raises its DEFENSE in the 1st turn, then attacks in the 2nd turn.' },
    ],
  },
  wartortle: {
    flavorText: 'This POKéMON is very popular as a pet. Its fur-covered tail is a symbol of its longevity.',
    stats: { hp: 59, attack: 63, defense: 80, specialAttack: 65, specialDefense: 80, speed: 58 },
    moves: [
      { name: 'Withdraw', type: PokemonElementType.water, power: null, description: 'The user withdraws its body in its hard shell, raising its DEFENSE stat.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of bubbles hits the foe. It may lower the foe’s SPEED stat.' },
      { name: 'Rapid Spin', type: PokemonElementType.normal, power: 50, description: 'An attack that frees the user from BIND, WRAP, LEECH SEED, and SPIKES.' },
      { name: 'Skull Bash', type: PokemonElementType.normal, power: 130, description: 'The user raises its DEFENSE in the 1st turn, then attacks in the 2nd turn.' },
    ],
  },
  blastoise: {
    flavorText: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    stats: { hp: 79, attack: 83, defense: 100, specialAttack: 85, specialDefense: 105, speed: 78 },
    moves: [
      { name: 'Withdraw', type: PokemonElementType.water, power: null, description: 'The user withdraws its body in its hard shell, raising its DEFENSE stat.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of bubbles hits the foe. It may lower the foe’s SPEED stat.' },
      { name: 'Rapid Spin', type: PokemonElementType.normal, power: 50, description: 'An attack that frees the user from BIND, WRAP, LEECH SEED, and SPIKES.' },
      { name: 'Skull Bash', type: PokemonElementType.normal, power: 130, description: 'The user raises its DEFENSE in the 1st turn, then attacks in the 2nd turn.' },
    ],
  },
  caterpie: {
    flavorText: 'It is covered with a green skin. When it grows, it sheds the skin, covers itself with silk, and becomes a cocoon.',
    stats: { hp: 45, attack: 30, defense: 35, specialAttack: 20, specialDefense: 20, speed: 45 },
    moves: [
      { name: 'String Shot', type: PokemonElementType.bug, power: null, description: 'The foe is bound with strings shot from the mouth to reduce its SPEED.' },
      { name: 'Tackle', type: PokemonElementType.normal, power: 40, description: 'A physical attack in which the user charges, full body, into the foe.' },
    ],
  },
  metapod: {
    flavorText: 'Even though it is encased in a sturdy shell, the body inside is tender. It can’t withstand a harsh attack.',
    stats: { hp: 50, attack: 20, defense: 55, specialAttack: 25, specialDefense: 25, speed: 30 },
    moves: [
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'The user stiffens all the muscles in its body to raise its DEFENSE stat.' },
    ],
  },
  butterfree: {
    flavorText: 'The wings are protected by rain-repellent dust. As a result, this POKéMON can fly about even in rain.',
    stats: { hp: 60, attack: 45, defense: 50, specialAttack: 90, specialDefense: 80, speed: 70 },
    moves: [
      { name: 'Sleep Powder', type: PokemonElementType.grass, power: null, description: 'A sleep-inducing dust is scattered in high volume around a foe.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of toxic dust is scattered. It may poison the foe.' },
      { name: 'Silver Wind', type: PokemonElementType.bug, power: 60, description: 'The foe is attacked with a silver dust. It may raise all the user’s stats.' },
      { name: 'Stun Spore', type: PokemonElementType.grass, power: null, description: 'Paralyzing dust is scattered wildly. It may paralyze the foe.' },
    ],
  },
  kakuna: {
    flavorText: 'This POKéMON is in a temporary stage while making its body. It is almost completely unable to move on its own.',
    stats: { hp: 45, attack: 25, defense: 50, specialAttack: 25, specialDefense: 25, speed: 35 },
    moves: [
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'The user stiffens all the muscles in its body to raise its DEFENSE stat.' },
    ],
  },
  weedle: {
    flavorText: 'Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.',
    stats: { hp: 40, attack: 35, defense: 30, specialAttack: 20, specialDefense: 20, speed: 50 },
    moves: [
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a toxic barb, etc. It may poison the foe.' },
      { name: 'String Shot', type: PokemonElementType.bug, power: null, description: 'The foe is bound with strings shot from the mouth to reduce its SPEED.' },
    ],
  },
  beedrill: {
    flavorText: 'May appear in a swarm. Flies at violent speeds, all the while stabbing with the toxic stinger on its rear.',
    stats: { hp: 65, attack: 90, defense: 40, specialAttack: 45, specialDefense: 80, speed: 75 },
    moves: [
      { name: 'Twineedle', type: PokemonElementType.bug, power: 25, description: 'The foe is stabbed twice with foreleg stingers. It may poison the foe.' },
      { name: 'Pin Missile', type: PokemonElementType.bug, power: 25, description: 'Sharp pins are shot at the foe and hit two to five times at once.' },
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'The foe is jabbed repeatedly with a horn or beak two to five times.' },
      { name: 'Pursuit', type: PokemonElementType.dark, power: 40, description: 'An attack move that works especially well on a foe that is switching out.' },
    ],
  },
  pidgey: {
    flavorText: 'Does not like to fight. It hides in tall grass and so on, foraging for food such as small bugs.',
    stats: { hp: 40, attack: 45, defense: 40, specialAttack: 35, specialDefense: 35, speed: 56 },
    moves: [
      { name: 'Mirror Move', type: PokemonElementType.flying, power: null, description: 'The user counters the move last used by the foe with the same move.' },
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide.' },
      { name: 'Gust', type: PokemonElementType.flying, power: 40, description: 'Strikes the foe with a gust of wind whipped up by wings.' },
      { name: 'Whirlwind', type: PokemonElementType.normal, power: null, description: 'The foe is made to switch out with an ally. In the wild, the battle ends.' },
    ],
  },
  pidgeotto: {
    flavorText: 'The claws on its feet are well developed. It can carry prey such as an EXEGGCUTE to its nest over 60 miles away.',
    stats: { hp: 63, attack: 60, defense: 55, specialAttack: 50, specialDefense: 50, speed: 71 },
    moves: [
      { name: 'Mirror Move', type: PokemonElementType.flying, power: null, description: 'The user counters the move last used by the foe with the same move.' },
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide.' },
      { name: 'Gust', type: PokemonElementType.flying, power: 40, description: 'Strikes the foe with a gust of wind whipped up by wings.' },
      { name: 'Whirlwind', type: PokemonElementType.normal, power: null, description: 'The foe is made to switch out with an ally. In the wild, the battle ends.' },
    ],
  },
  pidgeot: {
    flavorText: 'It spreads its gorgeous wings widely to intimidate enemies. It races through the skies at Mach-2 speed.',
    stats: { hp: 83, attack: 80, defense: 75, specialAttack: 70, specialDefense: 70, speed: 101 },
    moves: [
      { name: 'Mirror Move', type: PokemonElementType.flying, power: null, description: 'The user counters the move last used by the foe with the same move.' },
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide.' },
      { name: 'Gust', type: PokemonElementType.flying, power: 40, description: 'Strikes the foe with a gust of wind whipped up by wings.' },
      { name: 'Whirlwind', type: PokemonElementType.normal, power: null, description: 'The foe is made to switch out with an ally. In the wild, the battle ends.' },
    ],
  },
  rattata: {
    flavorText: 'Its fangs are long and very sharp. They grow continuously, so it gnaws on hard things to whittle them down.',
    stats: { hp: 30, attack: 56, defense: 35, specialAttack: 25, specialDefense: 35, speed: 72 },
    moves: [
      { name: 'Hyper Fang', type: PokemonElementType.normal, power: 80, description: 'The foe is attacked with sharp fangs. It may make the foe flinch.' },
      { name: 'Super Fang', type: PokemonElementType.normal, power: null, description: 'The user attacks with sharp fangs and halves the foe’s HP.' },
      { name: 'Pursuit', type: PokemonElementType.dark, power: 40, description: 'An attack move that works especially well on a foe that is switching out.' },
      { name: 'Tail Whip', type: PokemonElementType.normal, power: null, description: 'The user wags its tail cutely, making the foe lower its DEFENSE stat.' },
    ],
  },
  raticate: {
    flavorText: 'Its rear feet have three toes each. They are webbed, enabling it to swim across rivers.',
    stats: { hp: 55, attack: 81, defense: 60, specialAttack: 50, specialDefense: 70, speed: 97 },
    moves: [
      { name: 'Hyper Fang', type: PokemonElementType.normal, power: 80, description: 'The foe is attacked with sharp fangs. It may make the foe flinch.' },
      { name: 'Super Fang', type: PokemonElementType.normal, power: null, description: 'The user attacks with sharp fangs and halves the foe’s HP.' },
      { name: 'Pursuit', type: PokemonElementType.dark, power: 40, description: 'An attack move that works especially well on a foe that is switching out.' },
      { name: 'Tail Whip', type: PokemonElementType.normal, power: null, description: 'The user wags its tail cutely, making the foe lower its DEFENSE stat.' },
    ],
  },
  spearow: {
    flavorText: 'It busily flits around here and there. Even if it is frail, it can be a tough foe that uses MIRROR MOVE.',
    stats: { hp: 40, attack: 60, defense: 30, specialAttack: 31, specialDefense: 31, speed: 70 },
    moves: [
      { name: 'Drill Peck', type: PokemonElementType.flying, power: 80, description: 'A corkscrewing attack with the sharp beak acting as a drill.' },
      { name: 'Mirror Move', type: PokemonElementType.flying, power: null, description: 'The user counters the move last used by the foe with the same move.' },
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'The foe is jabbed repeatedly with a horn or beak two to five times.' },
      { name: 'Peck', type: PokemonElementType.flying, power: 35, description: 'The foe is jabbed with a sharply pointed beak or horn.' },
    ],
  },
  fearow: {
    flavorText: 'Its huge and magnificent wings can keep it aloft in the sky. It can remain flying a whole day without landing.',
    stats: { hp: 65, attack: 90, defense: 65, specialAttack: 61, specialDefense: 61, speed: 100 },
    moves: [
      { name: 'Drill Peck', type: PokemonElementType.flying, power: 80, description: 'A corkscrewing attack with the sharp beak acting as a drill.' },
      { name: 'Mirror Move', type: PokemonElementType.flying, power: null, description: 'The user counters the move last used by the foe with the same move.' },
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'The foe is jabbed repeatedly with a horn or beak two to five times.' },
      { name: 'Peck', type: PokemonElementType.flying, power: 35, description: 'The foe is jabbed with a sharply pointed beak or horn.' },
    ],
  },
  ekans: {
    flavorText: 'A very common sight in grassland, etc. It flicks its tongue in and out to sense danger in its surroundings.',
    stats: { hp: 35, attack: 60, defense: 44, specialAttack: 40, specialDefense: 54, speed: 55 },
    moves: [
      { name: 'Glare', type: PokemonElementType.normal, power: null, description: 'The user intimidates the foe with the design on its belly to cause paralysis.' },
      { name: 'Acid', type: PokemonElementType.poison, power: 40, description: 'The foe is sprayed with a harsh, hide-melting acid that may lower DEFENSE.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a toxic barb, etc. It may poison the foe.' },
      { name: 'Wrap', type: PokemonElementType.normal, power: 15, description: 'A long body or vines are used to wrap the foe for two to five turns.' },
    ],
  },
  arbok: {
    flavorText: 'The pattern on its belly appears to be a frightening face. Weak foes will flee just at the sight of the pattern.',
    stats: { hp: 60, attack: 95, defense: 69, specialAttack: 65, specialDefense: 79, speed: 80 },
    moves: [
      { name: 'Glare', type: PokemonElementType.normal, power: null, description: 'The user intimidates the foe with the design on its belly to cause paralysis.' },
      { name: 'Acid', type: PokemonElementType.poison, power: 40, description: 'The foe is sprayed with a harsh, hide-melting acid that may lower DEFENSE.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a toxic barb, etc. It may poison the foe.' },
      { name: 'Wrap', type: PokemonElementType.normal, power: 15, description: 'A long body or vines are used to wrap the foe for two to five turns.' },
    ],
  },
  pikachu: {
    flavorText: 'It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs.',
    stats: { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
    moves: [
      { name: 'Thunder Shock', type: PokemonElementType.electric, power: 40, description: 'An electric shock attack that may also leave the foe paralyzed.' },
      { name: 'Slam', type: PokemonElementType.normal, power: 80, description: 'The foe is struck with a long tail, vines, etc.' },
      { name: 'Tail Whip', type: PokemonElementType.normal, power: null, description: 'The user wags its tail cutely, making the foe lower its DEFENSE stat.' },
      { name: 'Quick Attack', type: PokemonElementType.normal, power: 40, description: 'An almost invisibly fast attack that is certain to strike first.' },
    ],
  },
  raichu: {
    flavorText: 'Its electric charges can reach even 100,000 volts. Careless contact can cause even an Indian elephant to faint.',
    stats: { hp: 60, attack: 90, defense: 55, specialAttack: 90, specialDefense: 80, speed: 110 },
    moves: [
      { name: 'Thunder Shock', type: PokemonElementType.electric, power: 40, description: 'An electric shock attack that may also leave the foe paralyzed.' },
      { name: 'Tail Whip', type: PokemonElementType.normal, power: null, description: 'The user wags its tail cutely, making the foe lower its DEFENSE stat.' },
      { name: 'Quick Attack', type: PokemonElementType.normal, power: 40, description: 'An almost invisibly fast attack that is certain to strike first.' },
      { name: 'Thunderbolt', type: PokemonElementType.electric, power: 90, description: 'A strong electrical attack that may also leave the foe paralyzed.' },
    ],
  },
  sandshrew: {
    flavorText: 'It burrows and lives underground. If threatened, it curls itself up into a ball for protection.',
    stats: { hp: 50, attack: 75, defense: 85, specialAttack: 20, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a toxic barb, etc. It may poison the foe.' },
      { name: 'Sand Tomb', type: PokemonElementType.ground, power: 35, description: 'The foe is trapped inside a painful sandstorm for two to five turns.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes two to five times.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'A lot of sand is hurled in the foe’s face, reducing its accuracy.' },
    ],
  },
  sandslash: {
    flavorText: 'It is adept at attacking with the spines on its back and its sharp claws while quickly scurrying about.',
    stats: { hp: 75, attack: 100, defense: 110, specialAttack: 45, specialDefense: 55, speed: 65 },
    moves: [
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a toxic barb, etc. It may poison the foe.' },
      { name: 'Sand Tomb', type: PokemonElementType.ground, power: 35, description: 'The foe is trapped inside a painful sandstorm for two to five turns.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes two to five times.' },
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Hard, pointed, and sharp claws rake the foe.' },
    ],
  },
  nidoran_female: {
    flavorText: 'Though small, it must be treated with caution because of its powerfully toxic barbs. The female has smaller horns.',
    stats: { hp: 55, attack: 47, defense: 52, specialAttack: 40, specialDefense: 40, speed: 41 },
    moves: [
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a toxic barb, etc. It may poison the foe.' },
      { name: 'Flatter', type: PokemonElementType.dark, power: null, description: 'Flattery is used to confuse the foe, but its SP. ATK also rises.' },
      { name: 'Double Kick', type: PokemonElementType.fighting, power: 30, description: 'Two legs are used to quickly kick the foe twice in one turn.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes two to five times.' },
    ],
  },
  nidorina: {
    flavorText: 'The female has a gentle temperament. It emits ultrasonic cries that have the power to befuddle foes.',
    stats: { hp: 70, attack: 62, defense: 67, specialAttack: 55, specialDefense: 55, speed: 56 },
    moves: [
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a toxic barb, etc. It may poison the foe.' },
      { name: 'Flatter', type: PokemonElementType.dark, power: null, description: 'Flattery is used to confuse the foe, but its SP. ATK also rises.' },
      { name: 'Double Kick', type: PokemonElementType.fighting, power: 30, description: 'Two legs are used to quickly kick the foe twice in one turn.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes two to five times.' },
    ],
  },
  nidoqueen: {
    flavorText: 'The body is covered by stiff, needle-like scales. If it becomes excited, the needles bristle outwards.',
    stats: { hp: 90, attack: 92, defense: 87, specialAttack: 75, specialDefense: 85, speed: 76 },
    moves: [
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a toxic barb, etc. It may poison the foe.' },
      { name: 'Double Kick', type: PokemonElementType.fighting, power: 30, description: 'Two legs are used to quickly kick the foe twice in one turn.' },
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Hard, pointed, and sharp claws rake the foe.' },
      { name: 'Tail Whip', type: PokemonElementType.normal, power: null, description: 'The user wags its tail cutely, making the foe lower its DEFENSE stat.' },
    ],
  },
  nidoran_male: {
    flavorText: 'Its large ears are flapped like wings when it is listening to distant sounds. It extends toxic barbs when angered.',
    stats: { hp: 46, attack: 57, defense: 40, specialAttack: 40, specialDefense: 40, speed: 50 },
    moves: [
      { name: 'Horn Attack', type: PokemonElementType.normal, power: 65, description: 'The foe is jabbed with a sharply pointed horn to inflict damage.' },
      { name: 'Horn Drill', type: PokemonElementType.normal, power: null, description: 'The horn is rotated like a drill to ram. The foe will faint if it hits.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a toxic barb, etc. It may poison the foe.' },
      { name: 'Flatter', type: PokemonElementType.dark, power: null, description: 'Flattery is used to confuse the foe, but its SP. ATK also rises.' },
    ],
  },
  nidorino: {
    flavorText: 'It is easily angered. By swinging its well-developed horn wildly, it can even punch through diamond.',
    stats: { hp: 61, attack: 72, defense: 57, specialAttack: 55, specialDefense: 55, speed: 65 },
    moves: [
      { name: 'Horn Attack', type: PokemonElementType.normal, power: 65, description: 'The foe is jabbed with a sharply pointed horn to inflict damage.' },
      { name: 'Horn Drill', type: PokemonElementType.normal, power: null, description: 'The horn is rotated like a drill to ram. The foe will faint if it hits.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a toxic barb, etc. It may poison the foe.' },
      { name: 'Flatter', type: PokemonElementType.dark, power: null, description: 'Flattery is used to confuse the foe, but its SP. ATK also rises.' },
    ],
  },
  nidoking: {
    flavorText: 'It is recognized by its rock-hard hide and its extended horn. Be careful with the horn as it contains venom.',
    stats: { hp: 81, attack: 102, defense: 77, specialAttack: 85, specialDefense: 75, speed: 85 },
    moves: [
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a toxic barb, etc. It may poison the foe.' },
      { name: 'Megahorn', type: PokemonElementType.bug, power: 120, description: 'A brutal ramming attack delivered with a tough and impressive horn.' },
      { name: 'Double Kick', type: PokemonElementType.fighting, power: 30, description: 'Two legs are used to quickly kick the foe twice in one turn.' },
      { name: 'Peck', type: PokemonElementType.flying, power: 35, description: 'The foe is jabbed with a sharply pointed beak or horn.' },
    ],
  },
  clefairy: {
    flavorText: 'Its adorable appearance makes it popular as a pet. However, it is rare and difficult to find.',
    stats: { hp: 70, attack: 45, defense: 48, specialAttack: 60, specialDefense: 65, speed: 35 },
    moves: [
      { name: 'Meteor Mash', type: PokemonElementType.steel, power: 90, description: 'The foe is hit with a hard, fast punch. It may also raise the user’s ATTACK.' },
      { name: 'Minimize', type: PokemonElementType.normal, power: null, description: 'The user compresses all the cells in its body to raise its evasiveness.' },
      { name: 'Follow Me', type: PokemonElementType.normal, power: null, description: 'The user draws attention to itself, making foes attack only the user.' },
      { name: 'Moonlight', type: PokemonElementType.normal, power: null, description: 'Restores the user’s HP. The amount of HP regained varies with the weather.' },
    ],
  },
  clefable: {
    flavorText: 'It has an acute sense of hearing. It can easily hear a pin being dropped nearly 1,100 yards away.',
    stats: { hp: 95, attack: 70, defense: 73, specialAttack: 95, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'Minimize', type: PokemonElementType.normal, power: null, description: 'The user compresses all the cells in its body to raise its evasiveness.' },
      { name: 'Double Slap', type: PokemonElementType.normal, power: 15, description: 'The foe is slapped repeatedly, back and forth, two to five times.' },
      { name: 'Sing', type: PokemonElementType.normal, power: null, description: 'A soothing song in a calming voice lulls the foe into a deep slumber.' },
      { name: 'Metronome', type: PokemonElementType.normal, power: null, description: 'Waggles a finger and stimulates the brain into using any move at random.' },
    ],
  },
  vulpix: {
    flavorText: 'While young, it has six gorgeous tails. When it grows, several new tails are sprouted.',
    stats: { hp: 38, attack: 41, defense: 40, specialAttack: 50, specialDefense: 65, speed: 65 },
    moves: [
      { name: 'Grudge', type: PokemonElementType.ghost, power: null, description: 'If the user faints, this move deletes the PP of the move that finished it.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'The foe is attacked with small flames. The foe may suffer a burn.' },
      { name: 'Fire Spin', type: PokemonElementType.fire, power: 35, description: 'The foe is trapped in an intense spiral of fire that rages two to five turns.' },
      { name: 'Tail Whip', type: PokemonElementType.normal, power: null, description: 'The user wags its tail cutely, making the foe lower its DEFENSE stat.' },
    ],
  },
  ninetales: {
    flavorText: 'It has nine long tails and fur that gleams gold. It is said to live for 1,000 years.',
    stats: { hp: 73, attack: 76, defense: 75, specialAttack: 81, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'The foe is attacked with small flames. The foe may suffer a burn.' },
      { name: 'Fire Spin', type: PokemonElementType.fire, power: 35, description: 'The foe is trapped in an intense spiral of fire that rages two to five turns.' },
      { name: 'Quick Attack', type: PokemonElementType.normal, power: 40, description: 'An almost invisibly fast attack that is certain to strike first.' },
      { name: 'Confuse Ray', type: PokemonElementType.ghost, power: null, description: 'The foe is exposed to a sinister ray that triggers confusion.' },
    ],
  },
  jigglypuff: {
    flavorText: 'It captivates foes with its huge, round eyes, then lulls them to sleep by singing a soothing melody.',
    stats: { hp: 115, attack: 45, defense: 20, specialAttack: 45, specialDefense: 25, speed: 20 },
    moves: [
      { name: 'Double Slap', type: PokemonElementType.normal, power: 15, description: 'The foe is slapped repeatedly, back and forth, two to five times.' },
      { name: 'Sing', type: PokemonElementType.normal, power: null, description: 'A soothing song in a calming voice lulls the foe into a deep slumber.' },
      { name: 'Pound', type: PokemonElementType.normal, power: 40, description: 'A physical attack delivered with a long tail or a foreleg, etc.' },
      { name: 'Disable', type: PokemonElementType.normal, power: null, description: 'For a few turns, it prevents the foe from using the move it last used.' },
    ],
  },
  wigglytuff: {
    flavorText: 'Its fur is extremely fine, dense, and supple. The exquisitely pleasant fur conveys an image of luxury.',
    stats: { hp: 140, attack: 70, defense: 45, specialAttack: 85, specialDefense: 50, speed: 45 },
    moves: [
      { name: 'Double Slap', type: PokemonElementType.normal, power: 15, description: 'The foe is slapped repeatedly, back and forth, two to five times.' },
      { name: 'Sing', type: PokemonElementType.normal, power: null, description: 'A soothing song in a calming voice lulls the foe into a deep slumber.' },
      { name: 'Disable', type: PokemonElementType.normal, power: null, description: 'For a few turns, it prevents the foe from using the move it last used.' },
      { name: 'Defense Curl', type: PokemonElementType.normal, power: null, description: 'The user curls up to conceal weak spots and raise its DEFENSE stat.' },
    ],
  },
  zubat: {
    flavorText: 'It has no eyes. Instead, it relies on its ultrasonic cries for echo location to flit about in darkness.',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 30, specialDefense: 40, speed: 55 },
    moves: [
      { name: 'Poison Fang', type: PokemonElementType.poison, power: 50, description: 'The foe is bitten with toxic fangs. It may also badly poison the foe.' },
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide.' },
      { name: 'Mean Look', type: PokemonElementType.normal, power: null, description: 'The foe is fixed with a mean look that prevents it from escaping.' },
      { name: 'Supersonic', type: PokemonElementType.normal, power: null, description: 'The user generates odd sound waves. It may confuse the foe.' },
    ],
  },
  golbat: {
    flavorText: 'It clamps down on its prey with needle-sharp fangs and drains over 10 ounces of blood in one gulp.',
    stats: { hp: 75, attack: 80, defense: 70, specialAttack: 65, specialDefense: 75, speed: 90 },
    moves: [
      { name: 'Poison Fang', type: PokemonElementType.poison, power: 50, description: 'The foe is bitten with toxic fangs. It may also badly poison the foe.' },
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide.' },
      { name: 'Mean Look', type: PokemonElementType.normal, power: null, description: 'The foe is fixed with a mean look that prevents it from escaping.' },
      { name: 'Supersonic', type: PokemonElementType.normal, power: null, description: 'The user generates odd sound waves. It may confuse the foe.' },
    ],
  },
  oddish: {
    flavorText: 'Its scientific name is “Oddium Wanderus.” At night, it is said to walk nearly 1,000 feet on its two roots.',
    stats: { hp: 45, attack: 50, defense: 55, specialAttack: 75, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'Petal Dance', type: PokemonElementType.grass, power: 120, description: 'The user attacks with petals for two to three turns, then gets confused.' },
      { name: 'Moonlight', type: PokemonElementType.normal, power: null, description: 'Restores the user’s HP. The amount of HP regained varies with the weather.' },
      { name: 'Acid', type: PokemonElementType.poison, power: 40, description: 'The foe is sprayed with a harsh, hide-melting acid that may lower DEFENSE.' },
      { name: 'Sleep Powder', type: PokemonElementType.grass, power: null, description: 'A sleep-inducing dust is scattered in high volume around a foe.' },
    ],
  },
  gloom: {
    flavorText: 'Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.',
    stats: { hp: 60, attack: 65, defense: 70, specialAttack: 85, specialDefense: 75, speed: 40 },
    moves: [
      { name: 'Petal Dance', type: PokemonElementType.grass, power: 120, description: 'The user attacks with petals for two to three turns, then gets confused.' },
      { name: 'Moonlight', type: PokemonElementType.normal, power: null, description: 'Restores the user’s HP. The amount of HP regained varies with the weather.' },
      { name: 'Acid', type: PokemonElementType.poison, power: 40, description: 'The foe is sprayed with a harsh, hide-melting acid that may lower DEFENSE.' },
      { name: 'Sleep Powder', type: PokemonElementType.grass, power: null, description: 'A sleep-inducing dust is scattered in high volume around a foe.' },
    ],
  },
  vileplume: {
    flavorText: 'Its petals are the largest in the world. It fiendishly scatters allergy-causing pollen from its petals.',
    stats: { hp: 75, attack: 80, defense: 85, specialAttack: 110, specialDefense: 90, speed: 50 },
    moves: [
      { name: 'Petal Dance', type: PokemonElementType.grass, power: 120, description: 'The user attacks with petals for two to three turns, then gets confused.' },
      { name: 'Aromatherapy', type: PokemonElementType.grass, power: null, description: 'A soothing scent is released to heal all status problems in the user’s party.' },
      { name: 'Stun Spore', type: PokemonElementType.grass, power: null, description: 'Paralyzing dust is scattered wildly. It may paralyze the foe.' },
      { name: 'Absorb', type: PokemonElementType.grass, power: 20, description: 'An attack that absorbs half the damage it inflicted to restore HP.' },
    ],
  },
  paras: {
    flavorText: 'Growing out of the bug’s back are mushrooms called tochukaso. The mushrooms grow with the bug host.',
    stats: { hp: 35, attack: 70, defense: 55, specialAttack: 45, specialDefense: 55, speed: 25 },
    moves: [
      { name: 'Spore', type: PokemonElementType.grass, power: null, description: 'The user scatters bursts of fine spores that induce sleep.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of toxic dust is scattered. It may poison the foe.' },
      { name: 'Aromatherapy', type: PokemonElementType.grass, power: null, description: 'A soothing scent is released to heal all status problems in the user’s party.' },
      { name: 'Stun Spore', type: PokemonElementType.grass, power: null, description: 'Paralyzing dust is scattered wildly. It may paralyze the foe.' },
    ],
  },
  parasect: {
    flavorText: 'It scatters toxic spores from the mushroom cap. In China, the spores are used as herbal medicine.',
    stats: { hp: 60, attack: 95, defense: 80, specialAttack: 60, specialDefense: 80, speed: 30 },
    moves: [
      { name: 'Spore', type: PokemonElementType.grass, power: null, description: 'The user scatters bursts of fine spores that induce sleep.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of toxic dust is scattered. It may poison the foe.' },
      { name: 'Aromatherapy', type: PokemonElementType.grass, power: null, description: 'A soothing scent is released to heal all status problems in the user’s party.' },
      { name: 'Stun Spore', type: PokemonElementType.grass, power: null, description: 'Paralyzing dust is scattered wildly. It may paralyze the foe.' },
    ],
  },
  venonat: {
    flavorText: 'Its eyes act as radar, enabling it to be active in darkness. The eyes can also shoot powerful beams.',
    stats: { hp: 60, attack: 55, defense: 50, specialAttack: 40, specialDefense: 55, speed: 45 },
    moves: [
      { name: 'Sleep Powder', type: PokemonElementType.grass, power: null, description: 'A sleep-inducing dust is scattered in high volume around a foe.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of toxic dust is scattered. It may poison the foe.' },
      { name: 'Stun Spore', type: PokemonElementType.grass, power: null, description: 'Paralyzing dust is scattered wildly. It may paralyze the foe.' },
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Completely negates the foe’s efforts to heighten its ability to evade.' },
    ],
  },
  venomoth: {
    flavorText: 'The wings are covered with dustlike scales. Every time it flaps its wings, it looses highly toxic dust.',
    stats: { hp: 70, attack: 65, defense: 60, specialAttack: 90, specialDefense: 75, speed: 90 },
    moves: [
      { name: 'Sleep Powder', type: PokemonElementType.grass, power: null, description: 'A sleep-inducing dust is scattered in high volume around a foe.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of toxic dust is scattered. It may poison the foe.' },
      { name: 'Silver Wind', type: PokemonElementType.bug, power: 60, description: 'The foe is attacked with a silver dust. It may raise all the user’s stats.' },
      { name: 'Stun Spore', type: PokemonElementType.grass, power: null, description: 'Paralyzing dust is scattered wildly. It may paralyze the foe.' },
    ],
  },
  diglett: {
    flavorText: 'It burrows through the ground at a shallow depth. It leaves raised earth in its wake, making it easy to spot.',
    stats: { hp: 10, attack: 55, defense: 25, specialAttack: 35, specialDefense: 45, speed: 95 },
    moves: [
      { name: 'Magnitude', type: PokemonElementType.ground, power: null, description: 'A ground-shaking attack against all standing POKéMON. Its power varies.' },
      { name: 'Fissure', type: PokemonElementType.ground, power: null, description: 'The foe is dropped into a fissure. The foe faints if it hits.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes two to five times.' },
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Hard, pointed, and sharp claws rake the foe.' },
    ],
  },
  dugtrio: {
    flavorText: 'In battle, it digs through the ground and strikes the unsuspecting foe from an unexpected direction.',
    stats: { hp: 35, attack: 100, defense: 50, specialAttack: 50, specialDefense: 70, speed: 120 },
    moves: [
      { name: 'Magnitude', type: PokemonElementType.ground, power: null, description: 'A ground-shaking attack against all standing POKéMON. Its power varies.' },
      { name: 'Tri Attack', type: PokemonElementType.normal, power: 80, description: 'A simultaneous 3-beam attack that may paralyze, burn, or freeze the foe.' },
      { name: 'Fissure', type: PokemonElementType.ground, power: null, description: 'The foe is dropped into a fissure. The foe faints if it hits.' },
      { name: 'Sand Tomb', type: PokemonElementType.ground, power: 35, description: 'The foe is trapped inside a painful sandstorm for two to five turns.' },
    ],
  },
  meowth: {
    flavorText: 'All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 40, specialDefense: 40, speed: 90 },
    moves: [
      { name: 'Pay Day', type: PokemonElementType.normal, power: 40, description: 'Numerous coins are hurled at the foe. Money is earned after battle.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes two to five times.' },
      { name: 'Fake Out', type: PokemonElementType.normal, power: 40, description: 'An attack that hits first and causes flinching. Usable only on 1st turn.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'The user draws up close to the foe disarmingly, then hits without fail.' },
    ],
  },
  persian: {
    flavorText: 'Has a vicious temperament. Beware if it raises its tail straight up. It is a signal that it is about to pounce and bite.',
    stats: { hp: 65, attack: 70, defense: 60, specialAttack: 65, specialDefense: 65, speed: 115 },
    moves: [
      { name: 'Pay Day', type: PokemonElementType.normal, power: 40, description: 'Numerous coins are hurled at the foe. Money is earned after battle.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes two to five times.' },
      { name: 'Fake Out', type: PokemonElementType.normal, power: 40, description: 'An attack that hits first and causes flinching. Usable only on 1st turn.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'The user draws up close to the foe disarmingly, then hits without fail.' },
    ],
  },
  psyduck: {
    flavorText: 'It is constantly wracked by a headache. When the headache turns intense, it begins using mysterious powers.',
    stats: { hp: 50, attack: 52, defense: 48, specialAttack: 65, specialDefense: 50, speed: 55 },
    moves: [
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'Weakens FIRE-type attacks while the user is in the battle.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes two to five times.' },
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Hard, pointed, and sharp claws rake the foe.' },
      { name: 'Disable', type: PokemonElementType.normal, power: null, description: 'For a few turns, it prevents the foe from using the move it last used.' },
    ],
  },
  golduck: {
    flavorText: 'The forelegs are webbed, helping to make it an adept swimmer. It can be seen swimming elegantly in lakes, etc.',
    stats: { hp: 80, attack: 82, defense: 78, specialAttack: 95, specialDefense: 80, speed: 85 },
    moves: [
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'Weakens FIRE-type attacks while the user is in the battle.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes two to five times.' },
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Hard, pointed, and sharp claws rake the foe.' },
      { name: 'Disable', type: PokemonElementType.normal, power: null, description: 'For a few turns, it prevents the foe from using the move it last used.' },
    ],
  },
  mankey: {
    flavorText: 'Light and agile on its feet, and ferocious in temperament. When angered, it flies into an uncontrollable frenzy.',
    stats: { hp: 40, attack: 80, defense: 35, specialAttack: 35, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'Karate Chop', type: PokemonElementType.fighting, power: 50, description: 'The foe is attacked with a sharp chop. It has a high critical-hit ratio.' },
      { name: 'Cross Chop', type: PokemonElementType.fighting, power: 100, description: 'The foe is hit with double chops. It has a high critical-hit ratio.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes two to five times.' },
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Hard, pointed, and sharp claws rake the foe.' },
    ],
  },
  primeape: {
    flavorText: 'It is always outrageously furious. If it gives chase, it will tenaciously track the target no matter how far.',
    stats: { hp: 65, attack: 105, defense: 60, specialAttack: 60, specialDefense: 70, speed: 95 },
    moves: [
      { name: 'Karate Chop', type: PokemonElementType.fighting, power: 50, description: 'The foe is attacked with a sharp chop. It has a high critical-hit ratio.' },
      { name: 'Cross Chop', type: PokemonElementType.fighting, power: 100, description: 'The foe is hit with double chops. It has a high critical-hit ratio.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes two to five times.' },
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Hard, pointed, and sharp claws rake the foe.' },
    ],
  },
  growlithe: {
    flavorText: 'Very friendly and faithful to people. It will try to repel enemies by barking and biting.',
    stats: { hp: 55, attack: 70, defense: 45, specialAttack: 70, specialDefense: 50, speed: 60 },
    moves: [
      { name: 'Flame Wheel', type: PokemonElementType.fire, power: 60, description: 'The user makes a fiery charge at the foe. It may cause a burn.' },
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Completely negates the foe’s efforts to heighten its ability to evade.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'The foe is attacked with small flames. The foe may suffer a burn.' },
      { name: 'Flamethrower', type: PokemonElementType.fire, power: 90, description: 'The foe is scorched with intense flames. The foe may suffer a burn.' },
    ],
  },
  arcanine: {
    flavorText: 'A POKéMON that is described in Chinese legends. It is said to race at an unbelievable speed.',
    stats: { hp: 90, attack: 110, defense: 80, specialAttack: 100, specialDefense: 80, speed: 95 },
    moves: [
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'A blindingly speedy charge attack that always goes before any other.' },
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Completely negates the foe’s efforts to heighten its ability to evade.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'The foe is attacked with small flames. The foe may suffer a burn.' },
      { name: 'Bite', type: PokemonElementType.dark, power: 60, description: 'The user bites with vicious fangs. It may make the foe flinch.' },
    ],
  },
  poliwag: {
    flavorText: 'Its slick black skin is thin and damp. A part of its internal organs can be seen through the skin as a spiral pattern.',
    stats: { hp: 40, attack: 50, defense: 40, specialAttack: 40, specialDefense: 40, speed: 90 },
    moves: [
      { name: 'Double Slap', type: PokemonElementType.normal, power: 15, description: 'The foe is slapped repeatedly, back and forth, two to five times.' },
      { name: 'Belly Drum', type: PokemonElementType.normal, power: null, description: 'The user maximizes its ATTACK stat at the cost of half its full HP.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of bubbles hits the foe. It may lower the foe’s SPEED stat.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'Hypnotic suggestion is used to make the foe fall into a deep sleep.' },
    ],
  },
  poliwhirl: {
    flavorText: 'Its two legs are well developed. Even though it can live on the ground, it prefers living in water.',
    stats: { hp: 65, attack: 65, defense: 65, specialAttack: 50, specialDefense: 50, speed: 90 },
    moves: [
      { name: 'Double Slap', type: PokemonElementType.normal, power: 15, description: 'The foe is slapped repeatedly, back and forth, two to five times.' },
      { name: 'Belly Drum', type: PokemonElementType.normal, power: null, description: 'The user maximizes its ATTACK stat at the cost of half its full HP.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of bubbles hits the foe. It may lower the foe’s SPEED stat.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'Hypnotic suggestion is used to make the foe fall into a deep sleep.' },
    ],
  },
  poliwrath: {
    flavorText: 'An adept swimmer, it knows the front crawl, butterfly, and more. It is faster than the best human swimmers.',
    stats: { hp: 90, attack: 95, defense: 95, specialAttack: 70, specialDefense: 90, speed: 70 },
    moves: [
      { name: 'Mind Reader', type: PokemonElementType.normal, power: null, description: 'The user predicts the foe’s action to ensure its next attack hits.' },
      { name: 'Double Slap', type: PokemonElementType.normal, power: 15, description: 'The foe is slapped repeatedly, back and forth, two to five times.' },
      { name: 'Submission', type: PokemonElementType.fighting, power: 80, description: 'A reckless, full-body throw attack that also hurts the user a little.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'Hypnotic suggestion is used to make the foe fall into a deep sleep.' },
    ],
  },
  abra: {
    flavorText: 'It sleeps for 18 hours a day. It uses a variety of extrasensory powers even while asleep.',
    stats: { hp: 25, attack: 20, defense: 15, specialAttack: 105, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'Teleport', type: PokemonElementType.psychic, power: null, description: 'Use it to flee from any wild POKéMON. Also warps to the last POKé CENTER.' },
    ],
  },
  kadabra: {
    flavorText: 'It happened one morning - a boy with extrasensory powers awoke in bed transformed into KADABRA.',
    stats: { hp: 40, attack: 35, defense: 30, specialAttack: 120, specialDefense: 70, speed: 105 },
    moves: [
      { name: 'Kinesis', type: PokemonElementType.psychic, power: null, description: 'The user distracts the foe by bending a spoon. It may lower accuracy.' },
      { name: 'Teleport', type: PokemonElementType.psychic, power: null, description: 'Use it to flee from any wild POKéMON. Also warps to the last POKé CENTER.' },
      { name: 'Recover', type: PokemonElementType.normal, power: null, description: 'A self-healing move that restores HP by up to half of the user’s maximum HP.' },
      { name: 'Disable', type: PokemonElementType.normal, power: null, description: 'For a few turns, it prevents the foe from using the move it last used.' },
    ],
  },
  alakazam: {
    flavorText: 'It does not like physical attacks very much. Instead, it freely uses extrasensory powers to defeat foes.',
    stats: { hp: 55, attack: 50, defense: 45, specialAttack: 135, specialDefense: 95, speed: 120 },
    moves: [
      { name: 'Kinesis', type: PokemonElementType.psychic, power: null, description: 'The user distracts the foe by bending a spoon. It may lower accuracy.' },
      { name: 'Teleport', type: PokemonElementType.psychic, power: null, description: 'Use it to flee from any wild POKéMON. Also warps to the last POKé CENTER.' },
      { name: 'Recover', type: PokemonElementType.normal, power: null, description: 'A self-healing move that restores HP by up to half of the user’s maximum HP.' },
      { name: 'Disable', type: PokemonElementType.normal, power: null, description: 'For a few turns, it prevents the foe from using the move it last used.' },
    ],
  },
  machop: {
    flavorText: 'Its whole body is composed of muscles. Even though it’s the size of a human child, it can hurl 100 grown-ups.',
    stats: { hp: 70, attack: 80, defense: 50, specialAttack: 35, specialDefense: 35, speed: 35 },
    moves: [
      { name: 'Karate Chop', type: PokemonElementType.fighting, power: 50, description: 'The foe is attacked with a sharp chop. It has a high critical-hit ratio.' },
      { name: 'Vital Throw', type: PokemonElementType.fighting, power: 70, description: 'Makes the user attack after the foe. In return, it will not miss.' },
      { name: 'Cross Chop', type: PokemonElementType.fighting, power: 100, description: 'The foe is hit with double chops. It has a high critical-hit ratio.' },
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Completely negates the foe’s efforts to heighten its ability to evade.' },
    ],
  },
  machoke: {
    flavorText: 'Its formidable body never gets tired. It helps people by doing work such as the moving of heavy goods.',
    stats: { hp: 80, attack: 100, defense: 70, specialAttack: 50, specialDefense: 60, speed: 45 },
    moves: [
      { name: 'Karate Chop', type: PokemonElementType.fighting, power: 50, description: 'The foe is attacked with a sharp chop. It has a high critical-hit ratio.' },
      { name: 'Vital Throw', type: PokemonElementType.fighting, power: 70, description: 'Makes the user attack after the foe. In return, it will not miss.' },
      { name: 'Cross Chop', type: PokemonElementType.fighting, power: 100, description: 'The foe is hit with double chops. It has a high critical-hit ratio.' },
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Completely negates the foe’s efforts to heighten its ability to evade.' },
    ],
  },
  machamp: {
    flavorText: 'Its four ruggedly developed arms can launch a flurry of 1,000 punches in just two seconds.',
    stats: { hp: 90, attack: 130, defense: 80, specialAttack: 65, specialDefense: 85, speed: 55 },
    moves: [
      { name: 'Karate Chop', type: PokemonElementType.fighting, power: 50, description: 'The foe is attacked with a sharp chop. It has a high critical-hit ratio.' },
      { name: 'Vital Throw', type: PokemonElementType.fighting, power: 70, description: 'Makes the user attack after the foe. In return, it will not miss.' },
      { name: 'Cross Chop', type: PokemonElementType.fighting, power: 100, description: 'The foe is hit with double chops. It has a high critical-hit ratio.' },
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Completely negates the foe’s efforts to heighten its ability to evade.' },
    ],
  },
  bellsprout: {
    flavorText: 'Its bud looks like a human face. Because of the bud, it is rumored to be a type of legendary mandrake plant.',
    stats: { hp: 50, attack: 75, defense: 35, specialAttack: 70, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'Vine Whip', type: PokemonElementType.grass, power: 45, description: 'The foe is struck with slender, whiplike vines.' },
      { name: 'Acid', type: PokemonElementType.poison, power: 40, description: 'The foe is sprayed with a harsh, hide-melting acid that may lower DEFENSE.' },
      { name: 'Sleep Powder', type: PokemonElementType.grass, power: null, description: 'A sleep-inducing dust is scattered in high volume around a foe.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of toxic dust is scattered. It may poison the foe.' },
    ],
  },
  weepinbell: {
    flavorText: 'The leafy parts act as cutters for slashing foes. It spits a fluid that dissolves everything.',
    stats: { hp: 65, attack: 90, defense: 50, specialAttack: 85, specialDefense: 45, speed: 55 },
    moves: [
      { name: 'Vine Whip', type: PokemonElementType.grass, power: 45, description: 'The foe is struck with slender, whiplike vines.' },
      { name: 'Acid', type: PokemonElementType.poison, power: 40, description: 'The foe is sprayed with a harsh, hide-melting acid that may lower DEFENSE.' },
      { name: 'Sleep Powder', type: PokemonElementType.grass, power: null, description: 'A sleep-inducing dust is scattered in high volume around a foe.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of toxic dust is scattered. It may poison the foe.' },
    ],
  },
  victreebel: {
    flavorText: 'Lures prey into its mouth with a honeylike aroma. The helpless prey is melted with a dissolving fluid.',
    stats: { hp: 80, attack: 105, defense: 65, specialAttack: 100, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Vine Whip', type: PokemonElementType.grass, power: 45, description: 'The foe is struck with slender, whiplike vines.' },
      { name: 'Sleep Powder', type: PokemonElementType.grass, power: null, description: 'A sleep-inducing dust is scattered in high volume around a foe.' },
      { name: 'Spit Up', type: PokemonElementType.normal, power: null, description: 'The power built using STOCKPILE is released at once for attack.' },
      { name: 'Swallow', type: PokemonElementType.normal, power: null, description: 'The energy it built using STOCKPILE is absorbed to restore HP.' },
    ],
  },
  tentacool: {
    flavorText: 'Its eyes are as transparent as crystals. From them, it shoots mysterious beams of light.',
    stats: { hp: 40, attack: 40, defense: 35, specialAttack: 50, specialDefense: 100, speed: 70 },
    moves: [
      { name: 'Constrict', type: PokemonElementType.normal, power: 10, description: 'The foe is attacked with long tentacles or vines. It may lower SPEED.' },
      { name: 'Barrier', type: PokemonElementType.psychic, power: null, description: 'The user creates a sturdy wall that sharply raises its DEFENSE stat.' },
      { name: 'Acid', type: PokemonElementType.poison, power: 40, description: 'The foe is sprayed with a harsh, hide-melting acid that may lower DEFENSE.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a toxic barb, etc. It may poison the foe.' },
    ],
  },
  tentacruel: {
    flavorText: 'It has 80 tentacles that move about freely. They can sting, causing poisoning and sharp, stabbing pain.',
    stats: { hp: 80, attack: 70, defense: 65, specialAttack: 80, specialDefense: 120, speed: 100 },
    moves: [
      { name: 'Constrict', type: PokemonElementType.normal, power: 10, description: 'The foe is attacked with long tentacles or vines. It may lower SPEED.' },
      { name: 'Barrier', type: PokemonElementType.psychic, power: null, description: 'The user creates a sturdy wall that sharply raises its DEFENSE stat.' },
      { name: 'Acid', type: PokemonElementType.poison, power: 40, description: 'The foe is sprayed with a harsh, hide-melting acid that may lower DEFENSE.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a toxic barb, etc. It may poison the foe.' },
    ],
  },
  geodude: {
    flavorText: 'Its round form makes it easy to pick up. Some people have used them to hurl at each other in a snowball fight.',
    stats: { hp: 40, attack: 80, defense: 100, specialAttack: 30, specialDefense: 30, speed: 20 },
    moves: [
      { name: 'Magnitude', type: PokemonElementType.ground, power: null, description: 'A ground-shaking attack against all standing POKéMON. Its power varies.' },
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'Weakens ELECTRIC-type attacks while the user is in the battle.' },
      { name: 'Rock Throw', type: PokemonElementType.rock, power: 50, description: 'The foe is attacked with a shower of small, easily thrown rocks.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'The user explodes to inflict terrible damage even while fainting itself.' },
    ],
  },
  graveler: {
    flavorText: 'Be careful while hiking on mountain trails. GRAVELER may come rolling down the path without slowing.',
    stats: { hp: 55, attack: 95, defense: 115, specialAttack: 45, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'Magnitude', type: PokemonElementType.ground, power: null, description: 'A ground-shaking attack against all standing POKéMON. Its power varies.' },
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'Weakens ELECTRIC-type attacks while the user is in the battle.' },
      { name: 'Rock Throw', type: PokemonElementType.rock, power: 50, description: 'The foe is attacked with a shower of small, easily thrown rocks.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'The user explodes to inflict terrible damage even while fainting itself.' },
    ],
  },
  golem: {
    flavorText: 'It is enclosed in a hard shell that is as rugged as slabs of rock. It sheds skin once a year to grow larger.',
    stats: { hp: 80, attack: 120, defense: 130, specialAttack: 55, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'Magnitude', type: PokemonElementType.ground, power: null, description: 'A ground-shaking attack against all standing POKéMON. Its power varies.' },
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'Weakens ELECTRIC-type attacks while the user is in the battle.' },
      { name: 'Rock Throw', type: PokemonElementType.rock, power: 50, description: 'The foe is attacked with a shower of small, easily thrown rocks.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'The user explodes to inflict terrible damage even while fainting itself.' },
    ],
  },
  ponyta: {
    flavorText: 'Its body is light, and its legs are incredibly powerful. It can clear Ayers Rock in one leap.',
    stats: { hp: 50, attack: 85, defense: 55, specialAttack: 65, specialDefense: 65, speed: 90 },
    moves: [
      { name: 'Stomp', type: PokemonElementType.normal, power: 65, description: 'The foe is stomped with a big foot. It may make the foe flinch.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'The foe is attacked with small flames. The foe may suffer a burn.' },
      { name: 'Fire Spin', type: PokemonElementType.fire, power: 35, description: 'The foe is trapped in an intense spiral of fire that rages two to five turns.' },
      { name: 'Bounce', type: PokemonElementType.flying, power: 85, description: 'The user bounces on the foe on the 2nd turn. It may paralyze the foe.' },
    ],
  },
  rapidash: {
    flavorText: 'It can gallop at a top speed of 150 miles per hour. It can race as fast as a bullet train while ablaze.',
    stats: { hp: 65, attack: 100, defense: 70, specialAttack: 80, specialDefense: 80, speed: 105 },
    moves: [
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'The foe is jabbed repeatedly with a horn or beak two to five times.' },
      { name: 'Stomp', type: PokemonElementType.normal, power: 65, description: 'The foe is stomped with a big foot. It may make the foe flinch.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'The foe is attacked with small flames. The foe may suffer a burn.' },
      { name: 'Fire Spin', type: PokemonElementType.fire, power: 35, description: 'The foe is trapped in an intense spiral of fire that rages two to five turns.' },
    ],
  },
  slowpoke: {
    flavorText: 'It is always vacantly lost in thought, but no one knows what it is thinking about. It is good at fishing with its tail.',
    stats: { hp: 90, attack: 65, defense: 65, specialAttack: 40, specialDefense: 40, speed: 15 },
    moves: [
      { name: 'Yawn', type: PokemonElementType.normal, power: null, description: 'A huge yawn lulls the foe into falling asleep on the next turn.' },
      { name: 'Disable', type: PokemonElementType.normal, power: null, description: 'For a few turns, it prevents the foe from using the move it last used.' },
      { name: 'Confusion', type: PokemonElementType.psychic, power: 50, description: 'A weak telekinetic attack that may also leave the foe confused.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'Forgets about something and sharply raises SP. DEF.' },
    ],
  },
  slowbro: {
    flavorText: 'When a SLOWPOKE went hunting in the sea, its tail was bitten by a SHELLDER. That made it evolve into SLOWBRO.',
    stats: { hp: 95, attack: 75, defense: 110, specialAttack: 100, specialDefense: 80, speed: 30 },
    moves: [
      { name: 'Withdraw', type: PokemonElementType.water, power: null, description: 'The user withdraws its body in its hard shell, raising its DEFENSE stat.' },
      { name: 'Yawn', type: PokemonElementType.normal, power: null, description: 'A huge yawn lulls the foe into falling asleep on the next turn.' },
      { name: 'Disable', type: PokemonElementType.normal, power: null, description: 'For a few turns, it prevents the foe from using the move it last used.' },
      { name: 'Confusion', type: PokemonElementType.psychic, power: 50, description: 'A weak telekinetic attack that may also leave the foe confused.' },
    ],
  },
  magnemite: {
    flavorText: 'It moves while constantly hovering. It discharges THUNDER WAVE and so on from the units at its sides.',
    stats: { hp: 25, attack: 35, defense: 70, specialAttack: 95, specialDefense: 55, speed: 45 },
    moves: [
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'The foe is hit with a shock wave that always inflicts 20-HP damage.' },
      { name: 'Lock On', type: PokemonElementType.normal, power: null, description: 'The user locks on to the foe, making the next move sure to hit.' },
      { name: 'Spark', type: PokemonElementType.electric, power: 65, description: 'An electrically charged tackle that may also paralyze the foe.' },
      { name: 'Supersonic', type: PokemonElementType.normal, power: null, description: 'The user generates odd sound waves. It may confuse the foe.' },
    ],
  },
  magneton: {
    flavorText: 'A linked cluster formed of several MAGNEMITE. It discharges powerful magnetic waves at high voltage.',
    stats: { hp: 50, attack: 60, defense: 95, specialAttack: 120, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'The foe is hit with a shock wave that always inflicts 20-HP damage.' },
      { name: 'Lock On', type: PokemonElementType.normal, power: null, description: 'The user locks on to the foe, making the next move sure to hit.' },
      { name: 'Tri Attack', type: PokemonElementType.normal, power: 80, description: 'A simultaneous 3-beam attack that may paralyze, burn, or freeze the foe.' },
      { name: 'Spark', type: PokemonElementType.electric, power: 65, description: 'An electrically charged tackle that may also paralyze the foe.' },
    ],
  },
  farfetchd: {
    flavorText: 'It always walks about with a plant stalk clamped in its beak. The stalk is used for building its nest.',
    stats: { hp: 52, attack: 90, defense: 55, specialAttack: 58, specialDefense: 62, speed: 60 },
    moves: [
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'The foe is jabbed repeatedly with a horn or beak two to five times.' },
      { name: 'Peck', type: PokemonElementType.flying, power: 35, description: 'The foe is jabbed with a sharply pointed beak or horn.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'A lot of sand is hurled in the foe’s face, reducing its accuracy.' },
      { name: 'False Swipe', type: PokemonElementType.normal, power: 40, description: 'A restrained attack that always leaves the foe with at least 1 HP.' },
    ],
  },
  doduo: {
    flavorText: 'A two-headed POKéMON that was discovered as a sudden mutation. It runs at a pace of over 60 miles per hour.',
    stats: { hp: 35, attack: 85, defense: 45, specialAttack: 35, specialDefense: 35, speed: 75 },
    moves: [
      { name: 'Drill Peck', type: PokemonElementType.flying, power: 80, description: 'A corkscrewing attack with the sharp beak acting as a drill.' },
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'The foe is jabbed repeatedly with a horn or beak two to five times.' },
      { name: 'Tri Attack', type: PokemonElementType.normal, power: 80, description: 'A simultaneous 3-beam attack that may paralyze, burn, or freeze the foe.' },
      { name: 'Peck', type: PokemonElementType.flying, power: 35, description: 'The foe is jabbed with a sharply pointed beak or horn.' },
    ],
  },
  dodrio: {
    flavorText: 'An odd species that is rarely found. The three heads respectively represent joy, sadness, and anger.',
    stats: { hp: 60, attack: 110, defense: 70, specialAttack: 60, specialDefense: 60, speed: 110 },
    moves: [
      { name: 'Drill Peck', type: PokemonElementType.flying, power: 80, description: 'A corkscrewing attack with the sharp beak acting as a drill.' },
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'The foe is jabbed repeatedly with a horn or beak two to five times.' },
      { name: 'Tri Attack', type: PokemonElementType.normal, power: 80, description: 'A simultaneous 3-beam attack that may paralyze, burn, or freeze the foe.' },
      { name: 'Peck', type: PokemonElementType.flying, power: 35, description: 'The foe is jabbed with a sharply pointed beak or horn.' },
    ],
  },
  seel: {
    flavorText: 'Covered with light blue fur, its hide is thick and tough. It is active in bitter cold of minus 40 degrees Fahrenheit.',
    stats: { hp: 65, attack: 45, defense: 55, specialAttack: 45, specialDefense: 70, speed: 45 },
    moves: [
      { name: 'Aurora Beam', type: PokemonElementType.ice, power: 65, description: 'A rainbow-colored attack beam. It may lower the foe’s ATTACK stat.' },
      { name: 'Growl', type: PokemonElementType.normal, power: null, description: 'The user growls in a cute way, making the foe lower its ATTACK stat.' },
      { name: 'Ice Beam', type: PokemonElementType.ice, power: 90, description: 'The foe is struck with an icy beam. It may freeze the foe solid.' },
      { name: 'Safeguard', type: PokemonElementType.normal, power: null, description: 'It protects the user’s party from all status problems for five turns.' },
    ],
  },
  dewgong: {
    flavorText: 'Its body is covered with a pure white fur. The colder the weather, the more active it becomes.',
    stats: { hp: 90, attack: 70, defense: 80, specialAttack: 70, specialDefense: 95, speed: 70 },
    moves: [
      { name: 'Sheer Cold', type: PokemonElementType.ice, power: null, description: 'The foe is attacked with ultimate cold that causes fainting if it hits.' },
      { name: 'Aurora Beam', type: PokemonElementType.ice, power: 65, description: 'A rainbow-colored attack beam. It may lower the foe’s ATTACK stat.' },
      { name: 'Growl', type: PokemonElementType.normal, power: null, description: 'The user growls in a cute way, making the foe lower its ATTACK stat.' },
      { name: 'Signal Beam', type: PokemonElementType.bug, power: 75, description: 'The foe is hit with a flashing beam that may also cause confusion.' },
    ],
  },
  grimer: {
    flavorText: 'Sludge exposed to X rays from the moon transformed into GRIMER. It loves feeding on filthy things.',
    stats: { hp: 80, attack: 80, defense: 50, specialAttack: 40, specialDefense: 50, speed: 25 },
    moves: [
      { name: 'Sludge', type: PokemonElementType.poison, power: 65, description: 'Toxic sludge is hurled at the foe. It may poison the target.' },
      { name: 'Minimize', type: PokemonElementType.normal, power: null, description: 'The user compresses all the cells in its body to raise its evasiveness.' },
      { name: 'Poison Gas', type: PokemonElementType.poison, power: null, description: 'The foe is sprayed with a cloud of toxic gas that may poison the foe.' },
      { name: 'Acid Armor', type: PokemonElementType.poison, power: null, description: 'The user alters its cells to liquefy itself and sharply raise DEFENSE.' },
    ],
  },
  muk: {
    flavorText: 'It is usually undetectable because it blends in with the ground. Touching it can cause terrible poisoning.',
    stats: { hp: 105, attack: 105, defense: 75, specialAttack: 65, specialDefense: 100, speed: 50 },
    moves: [
      { name: 'Sludge', type: PokemonElementType.poison, power: 65, description: 'Toxic sludge is hurled at the foe. It may poison the target.' },
      { name: 'Minimize', type: PokemonElementType.normal, power: null, description: 'The user compresses all the cells in its body to raise its evasiveness.' },
      { name: 'Poison Gas', type: PokemonElementType.poison, power: null, description: 'The foe is sprayed with a cloud of toxic gas that may poison the foe.' },
      { name: 'Acid Armor', type: PokemonElementType.poison, power: null, description: 'The user alters its cells to liquefy itself and sharply raise DEFENSE.' },
    ],
  },
  shellder: {
    flavorText: 'It is encased in a shell that is harder than diamond. Inside, however, it is surprisingly tender.',
    stats: { hp: 30, attack: 65, defense: 100, specialAttack: 45, specialDefense: 25, speed: 40 },
    moves: [
      { name: 'Clamp', type: PokemonElementType.water, power: 35, description: 'The foe is clamped and squeezed by the user’s shell for two to five turns.' },
      { name: 'Aurora Beam', type: PokemonElementType.ice, power: 65, description: 'A rainbow-colored attack beam. It may lower the foe’s ATTACK stat.' },
      { name: 'Withdraw', type: PokemonElementType.water, power: null, description: 'The user withdraws its body in its hard shell, raising its DEFENSE stat.' },
      { name: 'Icicle Spear', type: PokemonElementType.ice, power: 25, description: 'Sharp icicles are fired at the foe. It strikes two to five times.' },
    ],
  },
  cloyster: {
    flavorText: 'Its shell is extremely hard. It cannot be shattered, even with a bomb. The shell opens only when it is attacking.',
    stats: { hp: 50, attack: 95, defense: 180, specialAttack: 85, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'Spike Cannon', type: PokemonElementType.normal, power: 20, description: 'Sharp spikes are fired at the foe to strike two to five times.' },
      { name: 'Aurora Beam', type: PokemonElementType.ice, power: 65, description: 'A rainbow-colored attack beam. It may lower the foe’s ATTACK stat.' },
      { name: 'Withdraw', type: PokemonElementType.water, power: null, description: 'The user withdraws its body in its hard shell, raising its DEFENSE stat.' },
      { name: 'Supersonic', type: PokemonElementType.normal, power: null, description: 'The user generates odd sound waves. It may confuse the foe.' },
    ],
  },
  gastly: {
    flavorText: 'A being that exists as a thin gas. It can topple an Indian elephant by enveloping the prey in two seconds.',
    stats: { hp: 30, attack: 35, defense: 30, specialAttack: 100, specialDefense: 35, speed: 80 },
    moves: [
      { name: 'Lick', type: PokemonElementType.ghost, power: 30, description: 'The foe is licked and hit with a long tongue. It may also paralyze.' },
      { name: 'Mean Look', type: PokemonElementType.normal, power: null, description: 'The foe is fixed with a mean look that prevents it from escaping.' },
      { name: 'Nightmare', type: PokemonElementType.ghost, power: null, description: 'A sleeping foe is shown a nightmare that inflicts some damage every turn.' },
      { name: 'Destiny Bond', type: PokemonElementType.ghost, power: null, description: 'If the user faints, the foe delivering the final hit also faints.' },
    ],
  },
  haunter: {
    flavorText: 'If you get the feeling of being watched in darkness when nobody is around, HAUNTER is there.',
    stats: { hp: 45, attack: 50, defense: 45, specialAttack: 115, specialDefense: 55, speed: 95 },
    moves: [
      { name: 'Shadow Punch', type: PokemonElementType.ghost, power: 60, description: 'The user throws a punch from the shadows. It cannot be evaded.' },
      { name: 'Lick', type: PokemonElementType.ghost, power: 30, description: 'The foe is licked and hit with a long tongue. It may also paralyze.' },
      { name: 'Mean Look', type: PokemonElementType.normal, power: null, description: 'The foe is fixed with a mean look that prevents it from escaping.' },
      { name: 'Nightmare', type: PokemonElementType.ghost, power: null, description: 'A sleeping foe is shown a nightmare that inflicts some damage every turn.' },
    ],
  },
  gengar: {
    flavorText: 'It is said to emerge from darkness to steal the lives of those who become lost in mountains.',
    stats: { hp: 60, attack: 65, defense: 60, specialAttack: 130, specialDefense: 75, speed: 110 },
    moves: [
      { name: 'Shadow Punch', type: PokemonElementType.ghost, power: 60, description: 'The user throws a punch from the shadows. It cannot be evaded.' },
      { name: 'Lick', type: PokemonElementType.ghost, power: 30, description: 'The foe is licked and hit with a long tongue. It may also paralyze.' },
      { name: 'Mean Look', type: PokemonElementType.normal, power: null, description: 'The foe is fixed with a mean look that prevents it from escaping.' },
      { name: 'Nightmare', type: PokemonElementType.ghost, power: null, description: 'A sleeping foe is shown a nightmare that inflicts some damage every turn.' },
    ],
  },
  onix: {
    flavorText: 'It usually lives underground. It searches for food while boring its way through the ground at 50 miles per hour.',
    stats: { hp: 35, attack: 45, defense: 160, specialAttack: 30, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'Rock Throw', type: PokemonElementType.rock, power: 50, description: 'The foe is attacked with a shower of small, easily thrown rocks.' },
      { name: 'Bind', type: PokemonElementType.normal, power: 15, description: 'A long body or tentacles are used to bind the foe for two to five turns.' },
      { name: 'Dragon Breath', type: PokemonElementType.dragon, power: 60, description: 'The foe is hit with an incredible blast of breath that may also paralyze.' },
      { name: 'Sand Tomb', type: PokemonElementType.ground, power: 35, description: 'The foe is trapped inside a painful sandstorm for two to five turns.' },
    ],
  },
  drowzee: {
    flavorText: 'A descendent of the legendary animal baku, which is said to eat dreams. It is skilled at hypnotism.',
    stats: { hp: 60, attack: 48, defense: 45, specialAttack: 43, specialDefense: 90, speed: 42 },
    moves: [
      { name: 'Meditate', type: PokemonElementType.psychic, power: null, description: 'The user meditates to awaken its power and raise its ATTACK stat.' },
      { name: 'Poison Gas', type: PokemonElementType.poison, power: null, description: 'The foe is sprayed with a cloud of toxic gas that may poison the foe.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'Hypnotic suggestion is used to make the foe fall into a deep sleep.' },
      { name: 'Pound', type: PokemonElementType.normal, power: 40, description: 'A physical attack delivered with a long tail or a foreleg, etc.' },
    ],
  },
  hypno: {
    flavorText: 'It carries a pendulum-like device. There once was an incident in which it took away a child it hypnotized.',
    stats: { hp: 85, attack: 73, defense: 70, specialAttack: 73, specialDefense: 115, speed: 67 },
    moves: [
      { name: 'Meditate', type: PokemonElementType.psychic, power: null, description: 'The user meditates to awaken its power and raise its ATTACK stat.' },
      { name: 'Poison Gas', type: PokemonElementType.poison, power: null, description: 'The foe is sprayed with a cloud of toxic gas that may poison the foe.' },
      { name: 'Nightmare', type: PokemonElementType.ghost, power: null, description: 'A sleeping foe is shown a nightmare that inflicts some damage every turn.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'Hypnotic suggestion is used to make the foe fall into a deep sleep.' },
    ],
  },
  krabby: {
    flavorText: 'It can be found near the sea. The large pincers grow back if they are torn out of their sockets.',
    stats: { hp: 30, attack: 105, defense: 90, specialAttack: 25, specialDefense: 25, speed: 50 },
    moves: [
      { name: 'Crabhammer', type: PokemonElementType.water, power: 100, description: 'A large pincer is used to hammer the foe. It has a high critical-hit ratio.' },
      { name: 'Guillotine', type: PokemonElementType.normal, power: null, description: 'A vicious tearing attack with pincers. The foe will faint if it hits.' },
      { name: 'Vice Grip', type: PokemonElementType.normal, power: 55, description: 'Huge, impressive pincers grip and squeeze the foe.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of bubbles hits the foe. It may lower the foe’s SPEED stat.' },
    ],
  },
  kingler: {
    flavorText: 'Its large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move.',
    stats: { hp: 55, attack: 130, defense: 115, specialAttack: 50, specialDefense: 50, speed: 75 },
    moves: [
      { name: 'Crabhammer', type: PokemonElementType.water, power: 100, description: 'A large pincer is used to hammer the foe. It has a high critical-hit ratio.' },
      { name: 'Guillotine', type: PokemonElementType.normal, power: null, description: 'A vicious tearing attack with pincers. The foe will faint if it hits.' },
      { name: 'Vice Grip', type: PokemonElementType.normal, power: 55, description: 'Huge, impressive pincers grip and squeeze the foe.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of bubbles hits the foe. It may lower the foe’s SPEED stat.' },
    ],
  },
  voltorb: {
    flavorText: 'A life-form whose identity is unknown. It is said to SCREECH or suddenly SELFDESTRUCT.',
    stats: { hp: 40, attack: 30, defense: 50, specialAttack: 55, specialDefense: 55, speed: 100 },
    moves: [
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'The foe is hit with a shock wave that always inflicts 20-HP damage.' },
      { name: 'Mirror Coat', type: PokemonElementType.psychic, power: null, description: 'A retaliation move that pays back the foe’s special attack double.' },
      { name: 'Spark', type: PokemonElementType.electric, power: 65, description: 'An electrically charged tackle that may also paralyze the foe.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'The user charges power to boost the ELECTRIC move it uses next.' },
    ],
  },
  electrode: {
    flavorText: 'It explodes in response to even minor stimuli. It is feared, with the nickname of “The Bomb Ball.”',
    stats: { hp: 60, attack: 50, defense: 70, specialAttack: 80, specialDefense: 80, speed: 150 },
    moves: [
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'The foe is hit with a shock wave that always inflicts 20-HP damage.' },
      { name: 'Mirror Coat', type: PokemonElementType.psychic, power: null, description: 'A retaliation move that pays back the foe’s special attack double.' },
      { name: 'Spark', type: PokemonElementType.electric, power: 65, description: 'An electrically charged tackle that may also paralyze the foe.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'The user charges power to boost the ELECTRIC move it uses next.' },
    ],
  },
  exeggcute: {
    flavorText: 'Even though it appears to be eggs of some sort, it was discovered to be a life-form more like plant seeds.',
    stats: { hp: 60, attack: 40, defense: 80, specialAttack: 60, specialDefense: 45, speed: 40 },
    moves: [
      { name: 'Barrage', type: PokemonElementType.normal, power: 15, description: 'Round objects are hurled at the foe to strike two to five times.' },
      { name: 'Sleep Powder', type: PokemonElementType.grass, power: null, description: 'A sleep-inducing dust is scattered in high volume around a foe.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of toxic dust is scattered. It may poison the foe.' },
      { name: 'Stun Spore', type: PokemonElementType.grass, power: null, description: 'Paralyzing dust is scattered wildly. It may paralyze the foe.' },
    ],
  },
  exeggutor: {
    flavorText: 'It is called “The Walking Tropical Rainforest.” Each of the nuts has a face and a will of its own.',
    stats: { hp: 95, attack: 95, defense: 85, specialAttack: 125, specialDefense: 75, speed: 55 },
    moves: [
      { name: 'Barrage', type: PokemonElementType.normal, power: 15, description: 'Round objects are hurled at the foe to strike two to five times.' },
      { name: 'Egg Bomb', type: PokemonElementType.normal, power: 100, description: 'A large egg is hurled with great force at the foe to inflict damage.' },
      { name: 'Stomp', type: PokemonElementType.normal, power: 65, description: 'The foe is stomped with a big foot. It may make the foe flinch.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'Hypnotic suggestion is used to make the foe fall into a deep sleep.' },
    ],
  },
  cubone: {
    flavorText: 'It wears the skull of its dead mother on its head. When it becomes lonesome, it is said to cry loudly.',
    stats: { hp: 50, attack: 50, defense: 95, specialAttack: 40, specialDefense: 50, speed: 35 },
    moves: [
      { name: 'Bonemerang', type: PokemonElementType.ground, power: 50, description: 'The user throws a bone that hits the foe once, then once again on return.' },
      { name: 'Bone Club', type: PokemonElementType.ground, power: 65, description: 'The foe is clubbed with a bone held in hand. It may make the foe flinch.' },
      { name: 'Bone Rush', type: PokemonElementType.ground, power: 25, description: 'The user strikes the foe with a bone in hand two to five times.' },
      { name: 'Thrash', type: PokemonElementType.normal, power: 120, description: 'The user rampages about for two to three turns, then becomes confused.' },
    ],
  },
  marowak: {
    flavorText: 'It is small and was originally very weak. Its temperament turned ferocious when it began using bones.',
    stats: { hp: 60, attack: 80, defense: 110, specialAttack: 50, specialDefense: 80, speed: 45 },
    moves: [
      { name: 'Bonemerang', type: PokemonElementType.ground, power: 50, description: 'The user throws a bone that hits the foe once, then once again on return.' },
      { name: 'Bone Club', type: PokemonElementType.ground, power: 65, description: 'The foe is clubbed with a bone held in hand. It may make the foe flinch.' },
      { name: 'Bone Rush', type: PokemonElementType.ground, power: 25, description: 'The user strikes the foe with a bone in hand two to five times.' },
      { name: 'Thrash', type: PokemonElementType.normal, power: 120, description: 'The user rampages about for two to three turns, then becomes confused.' },
    ],
  },
  hitmonlee: {
    flavorText: 'The legs freely contract and stretch. The stretchy legs allow it to hit a distant foe with a rising kick.',
    stats: { hp: 50, attack: 120, defense: 53, specialAttack: 35, specialDefense: 110, speed: 87 },
    moves: [
      { name: 'Rolling Kick', type: PokemonElementType.fighting, power: 60, description: 'A quick kick from a rolling spin. It may make the foe flinch.' },
      { name: 'Jump Kick', type: PokemonElementType.fighting, power: 100, description: 'The user jumps up high, then kicks. If it misses, the user hurts itself.' },
      { name: 'Meditate', type: PokemonElementType.psychic, power: null, description: 'The user meditates to awaken its power and raise its ATTACK stat.' },
      { name: 'Mind Reader', type: PokemonElementType.normal, power: null, description: 'The user predicts the foe’s action to ensure its next attack hits.' },
    ],
  },
  hitmonchan: {
    flavorText: 'The spirit of a pro boxer has infused this POKéMON. It throws punches that are faster than a bullet train.',
    stats: { hp: 50, attack: 105, defense: 79, specialAttack: 35, specialDefense: 110, speed: 76 },
    moves: [
      { name: 'Comet Punch', type: PokemonElementType.normal, power: 18, description: 'The foe is hit with a flurry of punches that strike two to five times.' },
      { name: 'Sky Uppercut', type: PokemonElementType.fighting, power: 85, description: 'The user attacks with an uppercut thrown skywards with force.' },
      { name: 'Mach Punch', type: PokemonElementType.fighting, power: 40, description: 'A punch thrown at blinding speed. It is certain to strike first.' },
      { name: 'Pursuit', type: PokemonElementType.dark, power: 40, description: 'An attack move that works especially well on a foe that is switching out.' },
    ],
  },
  lickitung: {
    flavorText: 'Its tongue is twice the length of its body. It can be moved like an arm for grabbing food and attacking.',
    stats: { hp: 90, attack: 55, defense: 75, specialAttack: 60, specialDefense: 75, speed: 30 },
    moves: [
      { name: 'Wrap', type: PokemonElementType.normal, power: 15, description: 'A long body or vines are used to wrap the foe for two to five turns.' },
      { name: 'Lick', type: PokemonElementType.ghost, power: 30, description: 'The foe is licked and hit with a long tongue. It may also paralyze.' },
      { name: 'Refresh', type: PokemonElementType.normal, power: null, description: 'A self-healing move that cures the user of a poisoning, burn, or paralysis.' },
      { name: 'Stomp', type: PokemonElementType.normal, power: 65, description: 'The foe is stomped with a big foot. It may make the foe flinch.' },
    ],
  },
  koffing: {
    flavorText: 'Its thin, balloon-like body is inflated by horribly toxic gases. It reeks when it is nearby.',
    stats: { hp: 40, attack: 65, defense: 95, specialAttack: 60, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'Sludge', type: PokemonElementType.poison, power: 65, description: 'Toxic sludge is hurled at the foe. It may poison the target.' },
      { name: 'Poison Gas', type: PokemonElementType.poison, power: null, description: 'The foe is sprayed with a cloud of toxic gas that may poison the foe.' },
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'The foe is attacked with exhaust gases. It may also poison the foe.' },
      { name: 'Smokescreen', type: PokemonElementType.normal, power: null, description: 'An obscuring cloud of smoke or ink reduces the foe’s accuracy.' },
    ],
  },
  weezing: {
    flavorText: 'Very rarely, a sudden mutation can result in two small KOFFING twins becoming conjoined as a WEEZING.',
    stats: { hp: 65, attack: 90, defense: 120, specialAttack: 85, specialDefense: 70, speed: 60 },
    moves: [
      { name: 'Sludge', type: PokemonElementType.poison, power: 65, description: 'Toxic sludge is hurled at the foe. It may poison the target.' },
      { name: 'Poison Gas', type: PokemonElementType.poison, power: null, description: 'The foe is sprayed with a cloud of toxic gas that may poison the foe.' },
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'The foe is attacked with exhaust gases. It may also poison the foe.' },
      { name: 'Smokescreen', type: PokemonElementType.normal, power: null, description: 'An obscuring cloud of smoke or ink reduces the foe’s accuracy.' },
    ],
  },
  rhyhorn: {
    flavorText: 'Strong, but not too bright, this POKéMON can shatter even a skyscraper with its charging TACKLES.',
    stats: { hp: 80, attack: 85, defense: 95, specialAttack: 30, specialDefense: 30, speed: 25 },
    moves: [
      { name: 'Horn Attack', type: PokemonElementType.normal, power: 65, description: 'The foe is jabbed with a sharply pointed horn to inflict damage.' },
      { name: 'Horn Drill', type: PokemonElementType.normal, power: null, description: 'The horn is rotated like a drill to ram. The foe will faint if it hits.' },
      { name: 'Megahorn', type: PokemonElementType.bug, power: 120, description: 'A brutal ramming attack delivered with a tough and impressive horn.' },
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'The foe is jabbed repeatedly with a horn or beak two to five times.' },
    ],
  },
  rhydon: {
    flavorText: 'It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.',
    stats: { hp: 105, attack: 130, defense: 120, specialAttack: 45, specialDefense: 45, speed: 40 },
    moves: [
      { name: 'Horn Attack', type: PokemonElementType.normal, power: 65, description: 'The foe is jabbed with a sharply pointed horn to inflict damage.' },
      { name: 'Horn Drill', type: PokemonElementType.normal, power: null, description: 'The horn is rotated like a drill to ram. The foe will faint if it hits.' },
      { name: 'Megahorn', type: PokemonElementType.bug, power: 120, description: 'A brutal ramming attack delivered with a tough and impressive horn.' },
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'The foe is jabbed repeatedly with a horn or beak two to five times.' },
    ],
  },
  chansey: {
    flavorText: 'It lays several eggs a day. The eggs are apparently rich in nutrients and extremely delicious.',
    stats: { hp: 250, attack: 5, defense: 5, specialAttack: 35, specialDefense: 105, speed: 50 },
    moves: [
      { name: 'Egg Bomb', type: PokemonElementType.normal, power: 100, description: 'A large egg is hurled with great force at the foe to inflict damage.' },
      { name: 'Soft Boiled', type: PokemonElementType.normal, power: null, description: 'Heals the user by up to half its full HP. It can be used to heal an ally.' },
      { name: 'Minimize', type: PokemonElementType.normal, power: null, description: 'The user compresses all the cells in its body to raise its evasiveness.' },
      { name: 'Sing', type: PokemonElementType.normal, power: null, description: 'A soothing song in a calming voice lulls the foe into a deep slumber.' },
    ],
  },
  tangela: {
    flavorText: 'Blue plant vines cloak the POKéMON’s identity in a tangled mass. It entangles anything that gets close.',
    stats: { hp: 65, attack: 55, defense: 115, specialAttack: 100, specialDefense: 40, speed: 60 },
    moves: [
      { name: 'Constrict', type: PokemonElementType.normal, power: 10, description: 'The foe is attacked with long tentacles or vines. It may lower SPEED.' },
      { name: 'Vine Whip', type: PokemonElementType.grass, power: 45, description: 'The foe is struck with slender, whiplike vines.' },
      { name: 'Sleep Powder', type: PokemonElementType.grass, power: null, description: 'A sleep-inducing dust is scattered in high volume around a foe.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of toxic dust is scattered. It may poison the foe.' },
    ],
  },
  kangaskhan: {
    flavorText: 'The female raises its offspring in a pouch on its belly. It is skilled at attacking using COMET PUNCH.',
    stats: { hp: 105, attack: 95, defense: 80, specialAttack: 40, specialDefense: 80, speed: 90 },
    moves: [
      { name: 'Comet Punch', type: PokemonElementType.normal, power: 18, description: 'The foe is hit with a flurry of punches that strike two to five times.' },
      { name: 'Dizzy Punch', type: PokemonElementType.normal, power: 70, description: 'The foe is hit with a rhythmic punch that may leave it confused.' },
      { name: 'Fake Out', type: PokemonElementType.normal, power: 40, description: 'An attack that hits first and causes flinching. Usable only on 1st turn.' },
      { name: 'Tail Whip', type: PokemonElementType.normal, power: null, description: 'The user wags its tail cutely, making the foe lower its DEFENSE stat.' },
    ],
  },
  horsea: {
    flavorText: 'It maintains balance using its tail, which is wound up like a coil. It may spray ink from its mouth.',
    stats: { hp: 30, attack: 40, defense: 70, specialAttack: 70, specialDefense: 25, speed: 60 },
    moves: [
      { name: 'Smokescreen', type: PokemonElementType.normal, power: null, description: 'An obscuring cloud of smoke or ink reduces the foe’s accuracy.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of bubbles hits the foe. It may lower the foe’s SPEED stat.' },
      { name: 'Dragon Dance', type: PokemonElementType.dragon, power: null, description: 'A mystic, powerful dance that boosts the user’s ATTACK and SPEED stats.' },
      { name: 'Twister', type: PokemonElementType.dragon, power: 40, description: 'A vicious twister attacks the foe. It may make the foe flinch.' },
    ],
  },
  seadra: {
    flavorText: 'Its body bristles with sharp spikes. Carelessly trying to touch it could cause fainting from the spikes.',
    stats: { hp: 55, attack: 65, defense: 95, specialAttack: 95, specialDefense: 45, speed: 85 },
    moves: [
      { name: 'Smokescreen', type: PokemonElementType.normal, power: null, description: 'An obscuring cloud of smoke or ink reduces the foe’s accuracy.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of bubbles hits the foe. It may lower the foe’s SPEED stat.' },
      { name: 'Dragon Dance', type: PokemonElementType.dragon, power: null, description: 'A mystic, powerful dance that boosts the user’s ATTACK and SPEED stats.' },
      { name: 'Twister', type: PokemonElementType.dragon, power: 40, description: 'A vicious twister attacks the foe. It may make the foe flinch.' },
    ],
  },
  goldeen: {
    flavorText: 'Its dorsal and pectoral fins are strongly developed like muscles. It can swim at a speed of five knots.',
    stats: { hp: 45, attack: 67, defense: 60, specialAttack: 35, specialDefense: 50, speed: 63 },
    moves: [
      { name: 'Horn Attack', type: PokemonElementType.normal, power: 65, description: 'The foe is jabbed with a sharply pointed horn to inflict damage.' },
      { name: 'Horn Drill', type: PokemonElementType.normal, power: null, description: 'The horn is rotated like a drill to ram. The foe will faint if it hits.' },
      { name: 'Megahorn', type: PokemonElementType.bug, power: 120, description: 'A brutal ramming attack delivered with a tough and impressive horn.' },
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'Weakens FIRE-type attacks while the user is in the battle.' },
    ],
  },
  seaking: {
    flavorText: 'The horn on its head is sharp like a drill. It bores a hole in a boulder to make its nest.',
    stats: { hp: 80, attack: 92, defense: 65, specialAttack: 65, specialDefense: 80, speed: 68 },
    moves: [
      { name: 'Horn Attack', type: PokemonElementType.normal, power: 65, description: 'The foe is jabbed with a sharply pointed horn to inflict damage.' },
      { name: 'Horn Drill', type: PokemonElementType.normal, power: null, description: 'The horn is rotated like a drill to ram. The foe will faint if it hits.' },
      { name: 'Megahorn', type: PokemonElementType.bug, power: 120, description: 'A brutal ramming attack delivered with a tough and impressive horn.' },
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'Weakens FIRE-type attacks while the user is in the battle.' },
    ],
  },
  staryu: {
    flavorText: 'It appears in large numbers by seashores. At night, its central core flashes with a red light.',
    stats: { hp: 30, attack: 45, defense: 55, specialAttack: 70, specialDefense: 55, speed: 85 },
    moves: [
      { name: 'Camouflage', type: PokemonElementType.normal, power: null, description: 'Alters the user’s type depending on the location’s terrain.' },
      { name: 'Minimize', type: PokemonElementType.normal, power: null, description: 'The user compresses all the cells in its body to raise its evasiveness.' },
      { name: 'Cosmic Power', type: PokemonElementType.psychic, power: null, description: 'The user absorbs a mystic power to raise its DEFENSE and SP. DEF.' },
      { name: 'Rapid Spin', type: PokemonElementType.normal, power: 50, description: 'An attack that frees the user from BIND, WRAP, LEECH SEED, and SPIKES.' },
    ],
  },
  starmie: {
    flavorText: 'This POKéMON has a geometric body. Because of its body, the locals suspect that it is an alien creature.',
    stats: { hp: 60, attack: 75, defense: 85, specialAttack: 100, specialDefense: 85, speed: 115 },
    moves: [
      { name: 'Rapid Spin', type: PokemonElementType.normal, power: 50, description: 'An attack that frees the user from BIND, WRAP, LEECH SEED, and SPIKES.' },
      { name: 'Recover', type: PokemonElementType.normal, power: null, description: 'A self-healing move that restores HP by up to half of the user’s maximum HP.' },
      { name: 'Water Gun', type: PokemonElementType.water, power: 40, description: 'The foe is struck with a lot of water expelled forcibly from the mouth.' },
      { name: 'Confuse Ray', type: PokemonElementType.ghost, power: null, description: 'The foe is exposed to a sinister ray that triggers confusion.' },
    ],
  },
  scyther: {
    flavorText: 'It tears and shreds prey with its wickedly sharp scythes. It very rarely spreads its wings to fly.',
    stats: { hp: 70, attack: 110, defense: 80, specialAttack: 55, specialDefense: 80, speed: 105 },
    moves: [
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide.' },
      { name: 'Pursuit', type: PokemonElementType.dark, power: 40, description: 'An attack move that works especially well on a foe that is switching out.' },
      { name: 'False Swipe', type: PokemonElementType.normal, power: 40, description: 'A restrained attack that always leaves the foe with at least 1 HP.' },
      { name: 'Slash', type: PokemonElementType.normal, power: 70, description: 'The foe is slashed with claws, etc. It has a high critical-hit ratio.' },
    ],
  },
  mrmime: {
    flavorText: 'It is adept at conning people. It is said to be able to create walls out of thin air by miming.',
    stats: { hp: 40, attack: 45, defense: 65, specialAttack: 100, specialDefense: 120, speed: 90 },
    moves: [
      { name: 'Meditate', type: PokemonElementType.psychic, power: null, description: 'The user meditates to awaken its power and raise its ATTACK stat.' },
      { name: 'Barrier', type: PokemonElementType.psychic, power: null, description: 'The user creates a sturdy wall that sharply raises its DEFENSE stat.' },
      { name: 'Double Slap', type: PokemonElementType.normal, power: 15, description: 'The foe is slapped repeatedly, back and forth, two to five times.' },
      { name: 'Confusion', type: PokemonElementType.psychic, power: 50, description: 'A weak telekinetic attack that may also leave the foe confused.' },
    ],
  },
  electabuzz: {
    flavorText: 'It loves to feed on strong electricity. It occasionally appears around large power plants and so on.',
    stats: { hp: 65, attack: 83, defense: 57, specialAttack: 95, specialDefense: 85, speed: 105 },
    moves: [
      { name: 'Quick Attack', type: PokemonElementType.normal, power: 40, description: 'An almost invisibly fast attack that is certain to strike first.' },
      { name: 'Screech', type: PokemonElementType.normal, power: null, description: 'An ear-splitting screech is emitted to sharply reduce the foe’s DEFENSE.' },
      { name: 'Thunder Punch', type: PokemonElementType.electric, power: 75, description: 'The foe is punched with an electrified fist. It may leave the foe paralyzed.' },
      { name: 'Leer', type: PokemonElementType.normal, power: null, description: 'The foe is given an intimidating look that lowers its DEFENSE stat.' },
    ],
  },
  jynx: {
    flavorText: 'It speaks using a language that sounds human. Research is under way to determine what is being said.',
    stats: { hp: 65, attack: 50, defense: 35, specialAttack: 115, specialDefense: 95, speed: 95 },
    moves: [
      { name: 'Lovely Kiss', type: PokemonElementType.normal, power: null, description: 'The user forces a kiss on the foe with a scary face that induces sleep.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any battler that hears this faints in three turns unless it switches.' },
      { name: 'Double Slap', type: PokemonElementType.normal, power: 15, description: 'The foe is slapped repeatedly, back and forth, two to five times.' },
      { name: 'Powder Snow', type: PokemonElementType.ice, power: 40, description: 'Blasts the foe with a snowy gust. It may cause freezing.' },
    ],
  },
  pinsir: {
    flavorText: 'Its two long pincer horns are powerful. Once they grip an enemy, they won’t release until the foe is torn.',
    stats: { hp: 65, attack: 125, defense: 100, specialAttack: 55, specialDefense: 70, speed: 85 },
    moves: [
      { name: 'Guillotine', type: PokemonElementType.normal, power: null, description: 'A vicious tearing attack with pincers. The foe will faint if it hits.' },
      { name: 'Vice Grip', type: PokemonElementType.normal, power: 55, description: 'Huge, impressive pincers grip and squeeze the foe.' },
      { name: 'Submission', type: PokemonElementType.fighting, power: 80, description: 'A reckless, full-body throw attack that also hurts the user a little.' },
      { name: 'Bind', type: PokemonElementType.normal, power: 15, description: 'A long body or tentacles are used to bind the foe for two to five turns.' },
    ],
  },
  magmar: {
    flavorText: 'Found near the mouth of a volcano. This fire-breather’s body temperature is nearly 2,200 degrees Fahrenheit.',
    stats: { hp: 65, attack: 95, defense: 57, specialAttack: 100, specialDefense: 85, speed: 93 },
    moves: [
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'The foe is attacked with exhaust gases. It may also poison the foe.' },
      { name: 'Smokescreen', type: PokemonElementType.normal, power: null, description: 'An obscuring cloud of smoke or ink reduces the foe’s accuracy.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'The foe is attacked with small flames. The foe may suffer a burn.' },
      { name: 'Fire Punch', type: PokemonElementType.fire, power: 75, description: 'The foe is punched with a fiery fist. It may leave the foe with a burn.' },
    ],
  },
  tauros: {
    flavorText: 'When it is about to TACKLE, it whips its body repeatedly with its three long tails.',
    stats: { hp: 75, attack: 100, defense: 95, specialAttack: 40, specialDefense: 70, speed: 110 },
    moves: [
      { name: 'Horn Attack', type: PokemonElementType.normal, power: 65, description: 'The foe is jabbed with a sharply pointed horn to inflict damage.' },
      { name: 'Pursuit', type: PokemonElementType.dark, power: 40, description: 'An attack move that works especially well on a foe that is switching out.' },
      { name: 'Thrash', type: PokemonElementType.normal, power: 120, description: 'The user rampages about for two to three turns, then becomes confused.' },
      { name: 'Tail Whip', type: PokemonElementType.normal, power: null, description: 'The user wags its tail cutely, making the foe lower its DEFENSE stat.' },
    ],
  },
  magikarp: {
    flavorText: 'It is virtually worthless in terms of both power and speed. It is the most weak and pathetic POKéMON in the world.',
    stats: { hp: 20, attack: 10, defense: 55, specialAttack: 15, specialDefense: 20, speed: 80 },
    moves: [
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'The user just flops and splashes around without having any effect.' },
      { name: 'Flail', type: PokemonElementType.normal, power: null, description: 'A desperate attack that becomes more powerful the less HP the user has.' },
      { name: 'Tackle', type: PokemonElementType.normal, power: 40, description: 'A physical attack in which the user charges, full body, into the foe.' },
    ],
  },
  gyarados: {
    flavorText: 'It has an extremely aggressive nature. The HYPER BEAM it shoots from its mouth totally incinerates all targets.',
    stats: { hp: 95, attack: 125, defense: 79, specialAttack: 60, specialDefense: 100, speed: 81 },
    moves: [
      { name: 'Dragon Rage', type: PokemonElementType.dragon, power: null, description: 'The foe is hit with a shock wave that always inflicts 40-HP damage.' },
      { name: 'Dragon Dance', type: PokemonElementType.dragon, power: null, description: 'A mystic, powerful dance that boosts the user’s ATTACK and SPEED stats.' },
      { name: 'Twister', type: PokemonElementType.dragon, power: 40, description: 'A vicious twister attacks the foe. It may make the foe flinch.' },
      { name: 'Thrash', type: PokemonElementType.normal, power: 120, description: 'The user rampages about for two to three turns, then becomes confused.' },
    ],
  },
  lapras: {
    flavorText: 'Its high intelligence enables it to understand human speech. It likes to ferry people on its back.',
    stats: { hp: 130, attack: 85, defense: 80, specialAttack: 85, specialDefense: 95, speed: 60 },
    moves: [
      { name: 'Sheer Cold', type: PokemonElementType.ice, power: null, description: 'The foe is attacked with ultimate cold that causes fainting if it hits.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any battler that hears this faints in three turns unless it switches.' },
      { name: 'Sing', type: PokemonElementType.normal, power: null, description: 'A soothing song in a calming voice lulls the foe into a deep slumber.' },
      { name: 'Mist', type: PokemonElementType.ice, power: null, description: 'The ally party is protected by a mist that prevents stat reductions.' },
    ],
  },
  eevee: {
    flavorText: 'An extremely rare POKéMON that may evolve in a number of different ways depending on stimuli.',
    stats: { hp: 55, attack: 55, defense: 50, specialAttack: 45, specialDefense: 65, speed: 55 },
    moves: [
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'A lot of sand is hurled in the foe’s face, reducing its accuracy.' },
      { name: 'Tail Whip', type: PokemonElementType.normal, power: null, description: 'The user wags its tail cutely, making the foe lower its DEFENSE stat.' },
      { name: 'Quick Attack', type: PokemonElementType.normal, power: 40, description: 'An almost invisibly fast attack that is certain to strike first.' },
      { name: 'Baton Pass', type: PokemonElementType.normal, power: null, description: 'The user switches out, passing along any stat changes to the new battler.' },
    ],
  },
  ditto: {
    flavorText: 'It can freely recombine its own cellular structure to transform into other life-forms.',
    stats: { hp: 48, attack: 48, defense: 48, specialAttack: 48, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Transform', type: PokemonElementType.normal, power: null, description: 'The user transforms into a copy of the foe with even the same move set.' },
    ],
  },
  vaporeon: {
    flavorText: 'Its body’s cellular structure is similar to the molecular composition of water. It can melt invisibly in water.',
    stats: { hp: 130, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 65 },
    moves: [
      { name: 'Aurora Beam', type: PokemonElementType.ice, power: 65, description: 'A rainbow-colored attack beam. It may lower the foe’s ATTACK stat.' },
      { name: 'Acid Armor', type: PokemonElementType.poison, power: null, description: 'The user alters its cells to liquefy itself and sharply raise DEFENSE.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'A lot of sand is hurled in the foe’s face, reducing its accuracy.' },
      { name: 'Haze', type: PokemonElementType.ice, power: null, description: 'Eliminates all stat changes among all POKéMON engaged in battle.' },
    ],
  },
  jolteon: {
    flavorText: 'If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes.',
    stats: { hp: 65, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 130 },
    moves: [
      { name: 'Pin Missile', type: PokemonElementType.bug, power: 25, description: 'Sharp pins are shot at the foe and hit two to five times at once.' },
      { name: 'Double Kick', type: PokemonElementType.fighting, power: 30, description: 'Two legs are used to quickly kick the foe twice in one turn.' },
      { name: 'Thunder Shock', type: PokemonElementType.electric, power: 40, description: 'An electric shock attack that may also leave the foe paralyzed.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'A lot of sand is hurled in the foe’s face, reducing its accuracy.' },
    ],
  },
  flareon: {
    flavorText: 'It has a flame bag inside its body. After inhaling deeply, it blows out flames of nearly 3,100 degrees Fahrenheit.',
    stats: { hp: 65, attack: 130, defense: 60, specialAttack: 95, specialDefense: 110, speed: 65 },
    moves: [
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'The foe is attacked with exhaust gases. It may also poison the foe.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'The foe is attacked with small flames. The foe may suffer a burn.' },
      { name: 'Fire Spin', type: PokemonElementType.fire, power: 35, description: 'The foe is trapped in an intense spiral of fire that rages two to five turns.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'A lot of sand is hurled in the foe’s face, reducing its accuracy.' },
    ],
  },
  porygon: {
    flavorText: 'Using the most advanced technologies, scientists finally succeeded in making the first artificial POKéMON.',
    stats: { hp: 65, attack: 60, defense: 70, specialAttack: 85, specialDefense: 75, speed: 40 },
    moves: [
      { name: 'Conversion', type: PokemonElementType.normal, power: null, description: 'The user changes its type to match the type of one of its moves.' },
      { name: 'Conversion 2', type: PokemonElementType.normal, power: null, description: 'The user changes type to make itself resistant to the last attack it took.' },
      { name: 'Sharpen', type: PokemonElementType.normal, power: null, description: 'The user reduces its polygon count to sharpen edges and raise ATTACK.' },
      { name: 'Lock On', type: PokemonElementType.normal, power: null, description: 'The user locks on to the foe, making the next move sure to hit.' },
    ],
  },
  omanyte: {
    flavorText: 'A prehistoric POKéMON that lived in the primordial sea, it swims by twisting its 10 tentacles about.',
    stats: { hp: 35, attack: 40, defense: 100, specialAttack: 90, specialDefense: 55, speed: 35 },
    moves: [
      { name: 'Constrict', type: PokemonElementType.normal, power: 10, description: 'The foe is attacked with long tentacles or vines. It may lower SPEED.' },
      { name: 'Withdraw', type: PokemonElementType.water, power: null, description: 'The user withdraws its body in its hard shell, raising its DEFENSE stat.' },
      { name: 'Tickle', type: PokemonElementType.normal, power: null, description: 'The foe is made to laugh, reducing its ATTACK and DEFENSE stats.' },
      { name: 'Water Gun', type: PokemonElementType.water, power: 40, description: 'The foe is struck with a lot of water expelled forcibly from the mouth.' },
    ],
  },
  omastar: {
    flavorText: 'Its tentacles are highly developed as if they are hands and feet. As soon as it ensnares prey, it bites.',
    stats: { hp: 70, attack: 60, defense: 125, specialAttack: 115, specialDefense: 70, speed: 55 },
    moves: [
      { name: 'Spike Cannon', type: PokemonElementType.normal, power: 20, description: 'Sharp spikes are fired at the foe to strike two to five times.' },
      { name: 'Constrict', type: PokemonElementType.normal, power: 10, description: 'The foe is attacked with long tentacles or vines. It may lower SPEED.' },
      { name: 'Withdraw', type: PokemonElementType.water, power: null, description: 'The user withdraws its body in its hard shell, raising its DEFENSE stat.' },
      { name: 'Tickle', type: PokemonElementType.normal, power: null, description: 'The foe is made to laugh, reducing its ATTACK and DEFENSE stats.' },
    ],
  },
  kabuto: {
    flavorText: 'This POKéMON was regenerated from the fossil of an ancient creature. It protects itself with a hard shell.',
    stats: { hp: 30, attack: 80, defense: 90, specialAttack: 55, specialDefense: 45, speed: 55 },
    moves: [
      { name: 'Metal Sound', type: PokemonElementType.steel, power: null, description: 'A horrible metallic screech is used to sharply lower the foe’s SP. DEF.' },
      { name: 'Absorb', type: PokemonElementType.grass, power: 20, description: 'An attack that absorbs half the damage it inflicted to restore HP.' },
      { name: 'Mega Drain', type: PokemonElementType.grass, power: 40, description: 'A tough attack that drains half the damage it inflicted to restore HP.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'The user stiffens all the muscles in its body to raise its DEFENSE stat.' },
    ],
  },
  kabutops: {
    flavorText: 'It swims freely through water. It catches prey with its scythe-like arms and drains the victim’s fluids.',
    stats: { hp: 60, attack: 115, defense: 105, specialAttack: 65, specialDefense: 70, speed: 80 },
    moves: [
      { name: 'Metal Sound', type: PokemonElementType.steel, power: null, description: 'A horrible metallic screech is used to sharply lower the foe’s SP. DEF.' },
      { name: 'Absorb', type: PokemonElementType.grass, power: 20, description: 'An attack that absorbs half the damage it inflicted to restore HP.' },
      { name: 'Mega Drain', type: PokemonElementType.grass, power: 40, description: 'A tough attack that drains half the damage it inflicted to restore HP.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'The user stiffens all the muscles in its body to raise its DEFENSE stat.' },
    ],
  },
  aerodactyl: {
    flavorText: 'It was regenerated from a dinosaur’s genetic matter that was found in amber. It flies with high-pitched cries.',
    stats: { hp: 80, attack: 105, defense: 65, specialAttack: 60, specialDefense: 75, speed: 130 },
    moves: [
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide.' },
      { name: 'Supersonic', type: PokemonElementType.normal, power: null, description: 'The user generates odd sound waves. It may confuse the foe.' },
      { name: 'Ancient Power', type: PokemonElementType.rock, power: 60, description: 'An ancient power is used to attack. It may also raise all the user’s stats.' },
      { name: 'Bite', type: PokemonElementType.dark, power: 60, description: 'The user bites with vicious fangs. It may make the foe flinch.' },
    ],
  },
  articuno: {
    flavorText: 'One of the legendary bird POKéMON. With its long tail trailing behind, its flying form is magnificent.',
    stats: { hp: 90, attack: 85, defense: 100, specialAttack: 95, specialDefense: 125, speed: 85 },
    moves: [
      { name: 'Mind Reader', type: PokemonElementType.normal, power: null, description: 'The user predicts the foe’s action to ensure its next attack hits.' },
      { name: 'Sheer Cold', type: PokemonElementType.ice, power: null, description: 'The foe is attacked with ultimate cold that causes fainting if it hits.' },
      { name: 'Powder Snow', type: PokemonElementType.ice, power: 40, description: 'Blasts the foe with a snowy gust. It may cause freezing.' },
      { name: 'Gust', type: PokemonElementType.flying, power: 40, description: 'Strikes the foe with a gust of wind whipped up by wings.' },
    ],
  },
  zapdos: {
    flavorText: 'One of the legendary bird POKéMON. While it is flying, it makes crackling and snapping sounds.',
    stats: { hp: 90, attack: 90, defense: 85, specialAttack: 125, specialDefense: 90, speed: 100 },
    moves: [
      { name: 'Drill Peck', type: PokemonElementType.flying, power: 80, description: 'A corkscrewing attack with the sharp beak acting as a drill.' },
      { name: 'Peck', type: PokemonElementType.flying, power: 35, description: 'The foe is jabbed with a sharply pointed beak or horn.' },
      { name: 'Thunder Shock', type: PokemonElementType.electric, power: 40, description: 'An electric shock attack that may also leave the foe paralyzed.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'The user charges power to boost the ELECTRIC move it uses next.' },
    ],
  },
  snorlax: {
    flavorText: 'It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.',
    stats: { hp: 160, attack: 110, defense: 65, specialAttack: 65, specialDefense: 110, speed: 30 },
    moves: [
      { name: 'Belly Drum', type: PokemonElementType.normal, power: null, description: 'The user maximizes its ATTACK stat at the cost of half its full HP.' },
      { name: 'Yawn', type: PokemonElementType.normal, power: null, description: 'A huge yawn lulls the foe into falling asleep on the next turn.' },
      { name: 'Block', type: PokemonElementType.normal, power: null, description: 'The user blocks the foe’s way with arms spread wide to prevent escape.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'Forgets about something and sharply raises SP. DEF.' },
    ],
  },
  moltres: {
    flavorText: 'One of the legendary bird POKéMON. Those seeing it are overwhelmed by its orange wings that seem to be on fire.',
    stats: { hp: 90, attack: 100, defense: 90, specialAttack: 125, specialDefense: 85, speed: 90 },
    moves: [
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide.' },
      { name: 'Sky Attack', type: PokemonElementType.flying, power: 140, description: 'A 2nd-turn attack move with a high critical-hit ratio. The foe may flinch.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'The foe is attacked with small flames. The foe may suffer a burn.' },
      { name: 'Fire Spin', type: PokemonElementType.fire, power: 35, description: 'The foe is trapped in an intense spiral of fire that rages two to five turns.' },
    ],
  },
  dratini: {
    flavorText: 'Even the young can exceed 6.5 feet in length. It grows larger by repeatedly shedding skin.',
    stats: { hp: 41, attack: 64, defense: 45, specialAttack: 50, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'Dragon Rage', type: PokemonElementType.dragon, power: null, description: 'The foe is hit with a shock wave that always inflicts 40-HP damage.' },
      { name: 'Wrap', type: PokemonElementType.normal, power: 15, description: 'A long body or vines are used to wrap the foe for two to five turns.' },
      { name: 'Twister', type: PokemonElementType.dragon, power: 40, description: 'A vicious twister attacks the foe. It may make the foe flinch.' },
      { name: 'Slam', type: PokemonElementType.normal, power: 80, description: 'The foe is struck with a long tail, vines, etc.' },
    ],
  },
  dragonair: {
    flavorText: 'It is said to live in seas and lakes. Even though it has no wings, it has been seen flying occasionally.',
    stats: { hp: 61, attack: 84, defense: 65, specialAttack: 70, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Dragon Rage', type: PokemonElementType.dragon, power: null, description: 'The foe is hit with a shock wave that always inflicts 40-HP damage.' },
      { name: 'Wrap', type: PokemonElementType.normal, power: 15, description: 'A long body or vines are used to wrap the foe for two to five turns.' },
      { name: 'Twister', type: PokemonElementType.dragon, power: 40, description: 'A vicious twister attacks the foe. It may make the foe flinch.' },
      { name: 'Slam', type: PokemonElementType.normal, power: 80, description: 'The foe is struck with a long tail, vines, etc.' },
    ],
  },
  dragonite: {
    flavorText: 'It can fly in spite of its big and bulky physique. It circles the globe in just 16 hours.',
    stats: { hp: 91, attack: 134, defense: 95, specialAttack: 100, specialDefense: 100, speed: 80 },
    moves: [
      { name: 'Dragon Rage', type: PokemonElementType.dragon, power: null, description: 'The foe is hit with a shock wave that always inflicts 40-HP damage.' },
      { name: 'Wrap', type: PokemonElementType.normal, power: 15, description: 'A long body or vines are used to wrap the foe for two to five turns.' },
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide.' },
      { name: 'Twister', type: PokemonElementType.dragon, power: 40, description: 'A vicious twister attacks the foe. It may make the foe flinch.' },
    ],
  },
  mewtwo: {
    flavorText: 'A POKéMON whose genetic code was repeatedly recombined for research. It turned vicious as a result.',
    stats: { hp: 106, attack: 110, defense: 90, specialAttack: 154, specialDefense: 90, speed: 130 },
    moves: [
      { name: 'Barrier', type: PokemonElementType.psychic, power: null, description: 'The user creates a sturdy wall that sharply raises its DEFENSE stat.' },
      { name: 'Mist', type: PokemonElementType.ice, power: null, description: 'The ally party is protected by a mist that prevents stat reductions.' },
      { name: 'Recover', type: PokemonElementType.normal, power: null, description: 'A self-healing move that restores HP by up to half of the user’s maximum HP.' },
      { name: 'Disable', type: PokemonElementType.normal, power: null, description: 'For a few turns, it prevents the foe from using the move it last used.' },
    ],
  },
  mew: {
    flavorText: 'A POKéMON of South America that was thought to have been extinct. It is very intelligent and learns any move.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Transform', type: PokemonElementType.normal, power: null, description: 'The user transforms into a copy of the foe with even the same move set.' },
      { name: 'Pound', type: PokemonElementType.normal, power: 40, description: 'A physical attack delivered with a long tail or a foreleg, etc.' },
      { name: 'Metronome', type: PokemonElementType.normal, power: null, description: 'Waggles a finger and stimulates the brain into using any move at random.' },
      { name: 'Ancient Power', type: PokemonElementType.rock, power: 60, description: 'An ancient power is used to attack. It may also raise all the user’s stats.' },
    ],
  },
  chikorita: {
    flavorText: 'A sweet aroma gently wafts from the leaf on its head. It is docile and loves to soak up sunrays.',
    stats: { hp: 45, attack: 49, defense: 65, specialAttack: 49, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of poisonous dust is scattered on the foe. It may poison the target.' },
      { name: 'Aromatherapy', type: PokemonElementType.grass, power: null, description: 'The user releases a soothing scent that heals all status problems affecting the user’s party.' },
      { name: 'Razor Leaf', type: PokemonElementType.grass, power: 55, description: 'Sharp-edged leaves are launched to slash at the foe. It has a high critical-hit ratio.' },
      { name: 'Sweet Scent', type: PokemonElementType.normal, power: null, description: 'A sweet scent that lowers the foe’s evasiveness. It also lures wild Pokémon if used in grass, etc.' },
    ],
  },
  bayleef: {
    flavorText: 'The scent of spices comes from around its neck. Somehow, sniffing it makes you want to fight.',
    stats: { hp: 60, attack: 62, defense: 80, specialAttack: 63, specialDefense: 80, speed: 60 },
    moves: [
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of poisonous dust is scattered on the foe. It may poison the target.' },
      { name: 'Aromatherapy', type: PokemonElementType.grass, power: null, description: 'The user releases a soothing scent that heals all status problems affecting the user’s party.' },
      { name: 'Razor Leaf', type: PokemonElementType.grass, power: 55, description: 'Sharp-edged leaves are launched to slash at the foe. It has a high critical-hit ratio.' },
      { name: 'Sweet Scent', type: PokemonElementType.normal, power: null, description: 'A sweet scent that lowers the foe’s evasiveness. It also lures wild Pokémon if used in grass, etc.' },
    ],
  },
  meganium: {
    flavorText: 'The aroma that rises from its petals contains a substance that calms aggressive feelings.',
    stats: { hp: 80, attack: 82, defense: 100, specialAttack: 83, specialDefense: 100, speed: 80 },
    moves: [
      { name: 'Petal Dance', type: PokemonElementType.grass, power: 120, description: 'The user attacks by scattering petals for two to three turns. The user then becomes confused.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of poisonous dust is scattered on the foe. It may poison the target.' },
      { name: 'Aromatherapy', type: PokemonElementType.grass, power: null, description: 'The user releases a soothing scent that heals all status problems affecting the user’s party.' },
      { name: 'Razor Leaf', type: PokemonElementType.grass, power: 55, description: 'Sharp-edged leaves are launched to slash at the foe. It has a high critical-hit ratio.' },
    ],
  },
  cyndaquil: {
    flavorText: 'It is timid, and always curls itself up in a ball. If attacked, it flares up its back for protection.',
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'Eruption', type: PokemonElementType.fire, power: 150, description: 'The user attacks in an explosive fury. The lower the user’s HP, the less powerful this attack becomes.' },
      { name: 'Lava Plume', type: PokemonElementType.fire, power: 80, description: 'An inferno of scarlet flames washes over all Pokémon in battle. It may also inflict burns.' },
      { name: 'Flame Wheel', type: PokemonElementType.fire, power: 60, description: 'The user cloaks itself in fire and charges at the foe. It may also leave the target with a burn.' },
      { name: 'Smokescreen', type: PokemonElementType.normal, power: null, description: 'The user releases an obscuring cloud of smoke or ink. It reduces the foe’s accuracy.' },
    ],
  },
  quilava: {
    flavorText: 'Be careful if it turns its back during battle. It means that it will attack with the fire on its back.',
    stats: { hp: 58, attack: 64, defense: 58, specialAttack: 80, specialDefense: 65, speed: 80 },
    moves: [
      { name: 'Eruption', type: PokemonElementType.fire, power: 150, description: 'The user attacks in an explosive fury. The lower the user’s HP, the less powerful this attack becomes.' },
      { name: 'Lava Plume', type: PokemonElementType.fire, power: 80, description: 'An inferno of scarlet flames washes over all Pokémon in battle. It may also inflict burns.' },
      { name: 'Flame Wheel', type: PokemonElementType.fire, power: 60, description: 'The user cloaks itself in fire and charges at the foe. It may also leave the target with a burn.' },
      { name: 'Smokescreen', type: PokemonElementType.normal, power: null, description: 'The user releases an obscuring cloud of smoke or ink. It reduces the foe’s accuracy.' },
    ],
  },
  typhlosion: {
    flavorText: 'If its rage peaks, it becomes so hot that anything that touches it will instantly go up in flames.',
    stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    moves: [
      { name: 'Eruption', type: PokemonElementType.fire, power: 150, description: 'The user attacks in an explosive fury. The lower the user’s HP, the less powerful this attack becomes.' },
      { name: 'Lava Plume', type: PokemonElementType.fire, power: 80, description: 'An inferno of scarlet flames washes over all Pokémon in battle. It may also inflict burns.' },
      { name: 'Flame Wheel', type: PokemonElementType.fire, power: 60, description: 'The user cloaks itself in fire and charges at the foe. It may also leave the target with a burn.' },
      { name: 'Smokescreen', type: PokemonElementType.normal, power: null, description: 'The user releases an obscuring cloud of smoke or ink. It reduces the foe’s accuracy.' },
    ],
  },
  totodile: {
    flavorText: 'Its powerful, well-developed jaws are capable of crushing anything. Even its Trainer must be careful.',
    stats: { hp: 50, attack: 65, defense: 64, specialAttack: 44, specialDefense: 48, speed: 43 },
    moves: [
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Hard, pointed, and sharp claws rake the foe to inflict damage.' },
      { name: 'Ice Fang', type: PokemonElementType.ice, power: 65, description: 'The user bites with cold-infused fangs. It may also make the foe flinch or freeze.' },
      { name: 'Thrash', type: PokemonElementType.normal, power: 120, description: 'The user rampages and attacks for two to three turns. It then becomes confused, however.' },
      { name: 'Aqua Tail', type: PokemonElementType.water, power: 90, description: 'The user attacks by swinging its tail as if it were a vicious wave in a raging storm.' },
    ],
  },
  feraligatr: {
    flavorText: 'When it bites with its massive and powerful jaws, it shakes its head and savagely tears its victim up.',
    stats: { hp: 85, attack: 105, defense: 100, specialAttack: 79, specialDefense: 83, speed: 78 },
    moves: [
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Hard, pointed, and sharp claws rake the foe to inflict damage.' },
      { name: 'Ice Fang', type: PokemonElementType.ice, power: 65, description: 'The user bites with cold-infused fangs. It may also make the foe flinch or freeze.' },
      { name: 'Thrash', type: PokemonElementType.normal, power: 120, description: 'The user rampages and attacks for two to three turns. It then becomes confused, however.' },
      { name: 'Aqua Tail', type: PokemonElementType.water, power: 90, description: 'The user attacks by swinging its tail as if it were a vicious wave in a raging storm.' },
    ],
  },
  croconaw: {
    flavorText: 'If it loses a fang, a new one grows back in its place. There are always 48 fangs lining its mouth.',
    stats: { hp: 65, attack: 80, defense: 80, specialAttack: 59, specialDefense: 63, speed: 58 },
    moves: [
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Hard, pointed, and sharp claws rake the foe to inflict damage.' },
      { name: 'Ice Fang', type: PokemonElementType.ice, power: 65, description: 'The user bites with cold-infused fangs. It may also make the foe flinch or freeze.' },
      { name: 'Thrash', type: PokemonElementType.normal, power: 120, description: 'The user rampages and attacks for two to three turns. It then becomes confused, however.' },
      { name: 'Aqua Tail', type: PokemonElementType.water, power: 90, description: 'The user attacks by swinging its tail as if it were a vicious wave in a raging storm.' },
    ],
  },
  sentret: {
    flavorText: 'A very cautious Pokémon, it raises itself up using its tail to get a better view of its surroundings.',
    stats: { hp: 35, attack: 46, defense: 34, specialAttack: 35, specialDefense: 45, speed: 20 },
    moves: [
      { name: 'Follow Me', type: PokemonElementType.normal, power: null, description: 'The user draws attention to itself, making all foes take aim only at the user.' },
      { name: 'Me First', type: PokemonElementType.normal, power: null, description: 'The user tries to cut ahead of the foe to steal and use the foe’s intended move with greater power.' },
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes for two to five times in quick succession.' },
    ],
  },
  furret: {
    flavorText: 'It makes a nest to suit its long and skinny body. The nest is impossible for other Pokémon to enter.',
    stats: { hp: 85, attack: 76, defense: 64, specialAttack: 45, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'Follow Me', type: PokemonElementType.normal, power: null, description: 'The user draws attention to itself, making all foes take aim only at the user.' },
      { name: 'Me First', type: PokemonElementType.normal, power: null, description: 'The user tries to cut ahead of the foe to steal and use the foe’s intended move with greater power.' },
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes for two to five times in quick succession.' },
    ],
  },
  hoothoot: {
    flavorText: 'It always stands on one foot. It changes feet so fast, the movement can rarely be seen.',
    stats: { hp: 60, attack: 30, defense: 30, specialAttack: 36, specialDefense: 56, speed: 50 },
    moves: [
      { name: 'Psycho Shift', type: PokemonElementType.psychic, power: null, description: 'Using its psychic power of suggestion, the user transfers its status problems to the target.' },
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Extrasensory', type: PokemonElementType.psychic, power: 80, description: 'The user attacks with an odd, unseeable power. It may also make the foe flinch.' },
      { name: 'Peck', type: PokemonElementType.flying, power: 35, description: 'The foe is jabbed with a sharply pointed beak or horn.' },
    ],
  },
  noctowl: {
    flavorText: 'Its eyes are specially adapted. They concentrate even faint light and enable it to see in the dark.',
    stats: { hp: 100, attack: 50, defense: 50, specialAttack: 86, specialDefense: 96, speed: 70 },
    moves: [
      { name: 'Psycho Shift', type: PokemonElementType.psychic, power: null, description: 'Using its psychic power of suggestion, the user transfers its status problems to the target.' },
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Extrasensory', type: PokemonElementType.psychic, power: 80, description: 'The user attacks with an odd, unseeable power. It may also make the foe flinch.' },
      { name: 'Sky Attack', type: PokemonElementType.flying, power: 140, description: 'A second-turn attack move with a high critical-hit ratio. It may also make the target flinch.' },
    ],
  },
  ledyba: {
    flavorText: 'It is very timid. It will be afraid to move if it is alone. But it will be active if it is in a group.',
    stats: { hp: 40, attack: 20, defense: 30, specialAttack: 40, specialDefense: 80, speed: 55 },
    moves: [
      { name: 'Comet Punch', type: PokemonElementType.normal, power: 18, description: 'The foe is hit with a flurry of punches that strike two to five times in a row.' },
      { name: 'Mach Punch', type: PokemonElementType.fighting, power: 40, description: 'The user throws a punch at blinding speed. It is certain to strike first.' },
      { name: 'Silver Wind', type: PokemonElementType.bug, power: 60, description: 'The foe is attacked with powdery scales blown by wind. It may also raise all the user’s stats.' },
      { name: 'Bug Buzz', type: PokemonElementType.bug, power: 90, description: 'The user vibrates its wings to generate a damaging sound wave. It may also lower the foe’s Sp. Def stat.' },
    ],
  },
  ledian: {
    flavorText: 'When the stars flicker in the night sky, it flutters about, scattering a glowing powder.',
    stats: { hp: 55, attack: 35, defense: 50, specialAttack: 55, specialDefense: 110, speed: 85 },
    moves: [
      { name: 'Comet Punch', type: PokemonElementType.normal, power: 18, description: 'The foe is hit with a flurry of punches that strike two to five times in a row.' },
      { name: 'Mach Punch', type: PokemonElementType.fighting, power: 40, description: 'The user throws a punch at blinding speed. It is certain to strike first.' },
      { name: 'Silver Wind', type: PokemonElementType.bug, power: 60, description: 'The foe is attacked with powdery scales blown by wind. It may also raise all the user’s stats.' },
      { name: 'Bug Buzz', type: PokemonElementType.bug, power: 90, description: 'The user vibrates its wings to generate a damaging sound wave. It may also lower the foe’s Sp. Def stat.' },
    ],
  },
  spinarak: {
    flavorText: 'It lies still in the same pose for days in its web, waiting for its unsuspecting prey to wander close.',
    stats: { hp: 40, attack: 60, defense: 40, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: 'Spider Web', type: PokemonElementType.bug, power: null, description: 'The user ensnares the foe with a thin, gooey silk so it can’t flee from battle.' },
      { name: 'Constrict', type: PokemonElementType.normal, power: 10, description: 'The foe is attacked with long, creeping tentacles or vines. It may also lower the target’s Speed.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a poisonous barb of some sort. It may also poison the target.' },
      { name: 'Pin Missile', type: PokemonElementType.bug, power: 25, description: 'Sharp pins are shot at the foe in rapid succession. They hit two to five times in a row.' },
    ],
  },
  ariados: {
    flavorText: 'It spins string not only from its rear but also from its mouth. It’s hard to tell which end is which.',
    stats: { hp: 70, attack: 90, defense: 70, specialAttack: 60, specialDefense: 70, speed: 40 },
    moves: [
      { name: 'Spider Web', type: PokemonElementType.bug, power: null, description: 'The user ensnares the foe with a thin, gooey silk so it can’t flee from battle.' },
      { name: 'Constrict', type: PokemonElementType.normal, power: 10, description: 'The foe is attacked with long, creeping tentacles or vines. It may also lower the target’s Speed.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a poisonous barb of some sort. It may also poison the target.' },
      { name: 'Pin Missile', type: PokemonElementType.bug, power: 25, description: 'Sharp pins are shot at the foe in rapid succession. They hit two to five times in a row.' },
    ],
  },
  crobat: {
    flavorText: 'It flies so silently through the dark on its four wings that it may not be noticed even when nearby.',
    stats: { hp: 85, attack: 90, defense: 80, specialAttack: 70, specialDefense: 80, speed: 130 },
    moves: [
      { name: 'Poison Fang', type: PokemonElementType.poison, power: 50, description: 'The user bites the foe with toxic fangs. It may also leave the foe badly poisoned.' },
      { name: 'Cross Poison', type: PokemonElementType.poison, power: 70, description: 'A slashing attack that may also leave the target poisoned. It has a high critical-hit ratio.' },
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide to inflict damage.' },
      { name: 'Mean Look', type: PokemonElementType.normal, power: null, description: 'The user affixes the foe with a dark, arresting look. The target becomes unable to flee.' },
    ],
  },
  chinchou: {
    flavorText: 'It shoots positive and negative electricity between the tips of its two antennae and zaps its enemies.',
    stats: { hp: 75, attack: 38, defense: 38, specialAttack: 56, specialDefense: 56, speed: 67 },
    moves: [
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of countless bubbles is jetted at the foe. It may also lower the target’s Speed stat.' },
      { name: 'Aqua Ring', type: PokemonElementType.water, power: null, description: 'The user envelops itself in a veil made of water. It regains some HP on every turn.' },
      { name: 'Spark', type: PokemonElementType.electric, power: 65, description: 'The user throws an electrically charged tackle at the foe. It may also leave the target paralyzed.' },
      { name: 'Supersonic', type: PokemonElementType.normal, power: null, description: 'The user generates odd sound waves from its body. It may confuse the target.' },
    ],
  },
  lanturn: {
    flavorText: 'The light it emits is so bright that it can illuminate the sea’s surface from a depth of over three miles.',
    stats: { hp: 125, attack: 58, defense: 58, specialAttack: 76, specialDefense: 76, speed: 67 },
    moves: [
      { name: 'Spit Up', type: PokemonElementType.normal, power: null, description: 'The power stored using the move Stockpile is released at once in an attack.' },
      { name: 'Swallow', type: PokemonElementType.normal, power: null, description: 'The power stored using the move Stockpile is absorbed by the user to heal its HP.' },
      { name: 'Stockpile', type: PokemonElementType.normal, power: null, description: 'The user charges up power, and raises both its Defense and Sp. Def. The move can be used three times.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of countless bubbles is jetted at the foe. It may also lower the target’s Speed stat.' },
    ],
  },
  pichu: {
    flavorText: 'It is not yet skilled at storing electricity. It may send out a jolt if amused or startled.',
    stats: { hp: 20, attack: 40, defense: 15, specialAttack: 35, specialDefense: 35, speed: 60 },
    moves: [
      { name: 'Sweet Kiss', type: PokemonElementType.normal, power: null, description: 'The user kisses the foe with a sweet, angelic cuteness that causes confusion.' },
      { name: 'Thunder Shock', type: PokemonElementType.electric, power: 40, description: 'A jolt of electricity is hurled at the foe to inflict damage. It may also leave the foe paralyzed.' },
      { name: 'Tail Whip', type: PokemonElementType.normal, power: null, description: 'The user wags its tail cutely, making the foe less wary. The target’s Defense stat is lowered.' },
      { name: 'Nasty Plot', type: PokemonElementType.dark, power: null, description: 'The user stimulates its brain by thinking bad thoughts. It sharply raises the user’s Sp. Atk.' },
    ],
  },
  cleffa: {
    flavorText: 'Because of its unusual, starlike silhouette, people believe that it came here on a meteor.',
    stats: { hp: 50, attack: 25, defense: 28, specialAttack: 45, specialDefense: 55, speed: 15 },
    moves: [
      { name: 'Sing', type: PokemonElementType.normal, power: null, description: 'A soothing lullaby is sung in a calming voice that puts the foe into a deep slumber.' },
      { name: 'Sweet Kiss', type: PokemonElementType.normal, power: null, description: 'The user kisses the foe with a sweet, angelic cuteness that causes confusion.' },
      { name: 'Copycat', type: PokemonElementType.normal, power: null, description: 'The user mimics the move used immediately before it. The move fails if no other move has been used yet.' },
      { name: 'Pound', type: PokemonElementType.normal, power: 40, description: 'The foe is physically pounded with a long tail or a foreleg, etc.' },
    ],
  },
  igglybuff: {
    flavorText: 'It has a very soft body. If it starts to roll, it will bounce all over and be impossible to stop.',
    stats: { hp: 90, attack: 30, defense: 15, specialAttack: 40, specialDefense: 20, speed: 15 },
    moves: [
      { name: 'Sing', type: PokemonElementType.normal, power: null, description: 'A soothing lullaby is sung in a calming voice that puts the foe into a deep slumber.' },
      { name: 'Sweet Kiss', type: PokemonElementType.normal, power: null, description: 'The user kisses the foe with a sweet, angelic cuteness that causes confusion.' },
      { name: 'Copycat', type: PokemonElementType.normal, power: null, description: 'The user mimics the move used immediately before it. The move fails if no other move has been used yet.' },
      { name: 'Pound', type: PokemonElementType.normal, power: 40, description: 'The foe is physically pounded with a long tail or a foreleg, etc.' },
    ],
  },
  togepi: {
    flavorText: 'The shell seems to be filled with joy. It is said that it will share good luck when treated kindly.',
    stats: { hp: 35, attack: 20, defense: 65, specialAttack: 40, specialDefense: 65, speed: 20 },
    moves: [
      { name: 'Follow Me', type: PokemonElementType.normal, power: null, description: 'The user draws attention to itself, making all foes take aim only at the user.' },
      { name: 'Sweet Kiss', type: PokemonElementType.normal, power: null, description: 'The user kisses the foe with a sweet, angelic cuteness that causes confusion.' },
      { name: 'Wish', type: PokemonElementType.normal, power: null, description: 'A self-healing move. The user restores its own HP by up to half of its maximum HP in the next turn.' },
      { name: 'Yawn', type: PokemonElementType.normal, power: null, description: 'The user lets loose a huge yawn that lulls the foe into falling asleep on the next turn.' },
    ],
  },
  togetic: {
    flavorText: 'They say that it will appear before kindhearted, caring people and shower them with happiness.',
    stats: { hp: 55, attack: 40, defense: 85, specialAttack: 80, specialDefense: 105, speed: 40 },
    moves: [
      { name: 'Follow Me', type: PokemonElementType.normal, power: null, description: 'The user draws attention to itself, making all foes take aim only at the user.' },
      { name: 'Sweet Kiss', type: PokemonElementType.normal, power: null, description: 'The user kisses the foe with a sweet, angelic cuteness that causes confusion.' },
      { name: 'Wish', type: PokemonElementType.normal, power: null, description: 'A self-healing move. The user restores its own HP by up to half of its maximum HP in the next turn.' },
      { name: 'Yawn', type: PokemonElementType.normal, power: null, description: 'The user lets loose a huge yawn that lulls the foe into falling asleep on the next turn.' },
    ],
  },
  natu: {
    flavorText: 'Because its wings aren’t yet fully grown, it has to hop to get around. It is always staring at something.',
    stats: { hp: 40, attack: 50, defense: 45, specialAttack: 70, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'Miracle Eye', type: PokemonElementType.psychic, power: null, description: 'Enables the user to hit a Dark type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Psycho Shift', type: PokemonElementType.psychic, power: null, description: 'Using its psychic power of suggestion, the user transfers its status problems to the target.' },
      { name: 'Me First', type: PokemonElementType.normal, power: null, description: 'The user tries to cut ahead of the foe to steal and use the foe’s intended move with greater power.' },
      { name: 'Lucky Chant', type: PokemonElementType.normal, power: null, description: 'The user chants an incantation toward the sky, preventing the foe from landing critical hits.' },
    ],
  },
  xatu: {
    flavorText: 'They say that it stays still and quiet because it is seeing both the past and future at the same time.',
    stats: { hp: 65, attack: 75, defense: 70, specialAttack: 95, specialDefense: 70, speed: 95 },
    moves: [
      { name: 'Miracle Eye', type: PokemonElementType.psychic, power: null, description: 'Enables the user to hit a Dark type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Psycho Shift', type: PokemonElementType.psychic, power: null, description: 'Using its psychic power of suggestion, the user transfers its status problems to the target.' },
      { name: 'Me First', type: PokemonElementType.normal, power: null, description: 'The user tries to cut ahead of the foe to steal and use the foe’s intended move with greater power.' },
      { name: 'Lucky Chant', type: PokemonElementType.normal, power: null, description: 'The user chants an incantation toward the sky, preventing the foe from landing critical hits.' },
    ],
  },
  mareep: {
    flavorText: 'If static electricity builds in its body, its fleece doubles in volume. Touching it will shock you.',
    stats: { hp: 55, attack: 40, defense: 40, specialAttack: 65, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'Cotton Spore', type: PokemonElementType.grass, power: null, description: 'The user releases cottonlike spores that cling to the foe, sharply reducing its Speed stat.' },
      { name: 'Thunder Shock', type: PokemonElementType.electric, power: 40, description: 'A jolt of electricity is hurled at the foe to inflict damage. It may also leave the foe paralyzed.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'The user boosts the power of the Electric move it uses next. It also raises the user’s Sp. Def stat.' },
      { name: 'Power Gem', type: PokemonElementType.rock, power: 80, description: 'The user attacks with a ray of light that sparkles as if it were made of gemstones.' },
    ],
  },
  flaaffy: {
    flavorText: 'As a result of storing too much electricity, it developed patches where even downy wool won’t grow.',
    stats: { hp: 70, attack: 55, defense: 55, specialAttack: 80, specialDefense: 60, speed: 45 },
    moves: [
      { name: 'Cotton Spore', type: PokemonElementType.grass, power: null, description: 'The user releases cottonlike spores that cling to the foe, sharply reducing its Speed stat.' },
      { name: 'Thunder Shock', type: PokemonElementType.electric, power: 40, description: 'A jolt of electricity is hurled at the foe to inflict damage. It may also leave the foe paralyzed.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'The user boosts the power of the Electric move it uses next. It also raises the user’s Sp. Def stat.' },
      { name: 'Power Gem', type: PokemonElementType.rock, power: 80, description: 'The user attacks with a ray of light that sparkles as if it were made of gemstones.' },
    ],
  },
  ampharos: {
    flavorText: 'The tail’s tip shines brightly and can be seen from far away. It acts as a beacon for lost people.',
    stats: { hp: 90, attack: 75, defense: 85, specialAttack: 115, specialDefense: 90, speed: 55 },
    moves: [
      { name: 'Cotton Spore', type: PokemonElementType.grass, power: null, description: 'The user releases cottonlike spores that cling to the foe, sharply reducing its Speed stat.' },
      { name: 'Thunder Shock', type: PokemonElementType.electric, power: 40, description: 'A jolt of electricity is hurled at the foe to inflict damage. It may also leave the foe paralyzed.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'The user boosts the power of the Electric move it uses next. It also raises the user’s Sp. Def stat.' },
      { name: 'Power Gem', type: PokemonElementType.rock, power: 80, description: 'The user attacks with a ray of light that sparkles as if it were made of gemstones.' },
    ],
  },
  bellossom: {
    flavorText: 'BELLOSSOM gather at times and seem to dance. They say that the dance is a ritual to summon the sun.',
    stats: { hp: 75, attack: 80, defense: 95, specialAttack: 90, specialDefense: 100, speed: 50 },
    moves: [
      { name: 'Leaf Blade', type: PokemonElementType.grass, power: 90, description: 'The foe is slashed with a sharp leaf. It has a high critical-hit ratio.' },
      { name: 'Stun Spore', type: PokemonElementType.grass, power: null, description: 'The user scatters a cloud of paralyzing powder. It may paralyze the target.' },
      { name: 'Sweet Scent', type: PokemonElementType.normal, power: null, description: 'A sweet scent that lowers the foe’s evasiveness. It also lures wild Pokémon if used in grass, etc.' },
      { name: 'Mega Drain', type: PokemonElementType.grass, power: 40, description: 'A nutrient-draining attack. The user’s HP is restored by half the damage taken by the target.' },
    ],
  },
  marill: {
    flavorText: 'The tip of its tail, which contains oil that is lighter than water, lets it swim without drowning.',
    stats: { hp: 70, attack: 20, defense: 50, specialAttack: 20, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'Aqua Ring', type: PokemonElementType.water, power: null, description: 'The user envelops itself in a veil made of water. It regains some HP on every turn.' },
      { name: 'Bubble Beam', type: PokemonElementType.water, power: 65, description: 'A spray of bubbles is forcefully ejected at the foe. It may also lower the target’s Speed stat.' },
      { name: 'Tail Whip', type: PokemonElementType.normal, power: null, description: 'The user wags its tail cutely, making the foe less wary. The target’s Defense stat is lowered.' },
      { name: 'Aqua Tail', type: PokemonElementType.water, power: 90, description: 'The user attacks by swinging its tail as if it were a vicious wave in a raging storm.' },
    ],
  },
  azumarill: {
    flavorText: 'By keeping still and listening intently, it can tell what is in even wild, fast-moving rivers.',
    stats: { hp: 100, attack: 50, defense: 80, specialAttack: 60, specialDefense: 80, speed: 50 },
    moves: [
      { name: 'Aqua Ring', type: PokemonElementType.water, power: null, description: 'The user envelops itself in a veil made of water. It regains some HP on every turn.' },
      { name: 'Bubble Beam', type: PokemonElementType.water, power: 65, description: 'A spray of bubbles is forcefully ejected at the foe. It may also lower the target’s Speed stat.' },
      { name: 'Tail Whip', type: PokemonElementType.normal, power: null, description: 'The user wags its tail cutely, making the foe less wary. The target’s Defense stat is lowered.' },
      { name: 'Aqua Tail', type: PokemonElementType.water, power: 90, description: 'The user attacks by swinging its tail as if it were a vicious wave in a raging storm.' },
    ],
  },
  politoed: {
    flavorText: 'If POLIWAG and POLIWHIRL hear its echoing cry, they respond by gathering from far and wide.',
    stats: { hp: 90, attack: 75, defense: 75, specialAttack: 90, specialDefense: 100, speed: 70 },
    moves: [
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns, unless it switches out of battle.' },
      { name: 'Double Slap', type: PokemonElementType.normal, power: 15, description: 'The foe is slapped repeatedly, back and forth, two to five times in a row.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'The user employs hypnotic suggestion to make the target fall into a deep sleep.' },
      { name: 'Bubble Beam', type: PokemonElementType.water, power: 65, description: 'A spray of bubbles is forcefully ejected at the foe. It may also lower the target’s Speed stat.' },
    ],
  },
  sudowoodo: {
    flavorText: 'Although it always pretends to be a tree, its composition appears more similar to rock than to vegetation.',
    stats: { hp: 70, attack: 100, defense: 115, specialAttack: 30, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'Wood Hammer', type: PokemonElementType.grass, power: 120, description: 'The user slams its rugged body into the foe to attack. The user also sustains serious damage.' },
      { name: 'Rock Throw', type: PokemonElementType.rock, power: 50, description: 'The user picks up and throws a small rock at the foe to attack.' },
      { name: 'Hammer Arm', type: PokemonElementType.fighting, power: 100, description: 'The user swings and hits with its strong and heavy fist. It lowers the user’s Speed, however.' },
      { name: 'Copycat', type: PokemonElementType.normal, power: null, description: 'The user mimics the move used immediately before it. The move fails if no other move has been used yet.' },
    ],
  },
  hoppip: {
    flavorText: 'To keep from being blown away by the wind, they gather in clusters. But they do enjoy gentle breezes.',
    stats: { hp: 35, attack: 35, defense: 40, specialAttack: 35, specialDefense: 55, speed: 50 },
    moves: [
      { name: 'Cotton Spore', type: PokemonElementType.grass, power: null, description: 'The user releases cottonlike spores that cling to the foe, sharply reducing its Speed stat.' },
      { name: 'Sleep Powder', type: PokemonElementType.grass, power: null, description: 'The user scatters a big cloud of sleep-inducing dust around the foe.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of poisonous dust is scattered on the foe. It may poison the target.' },
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'The user just flops and splashes around to no effect at all...' },
    ],
  },
  skiploom: {
    flavorText: 'The bloom on top of its head opens and closes as the temperature fluctuates up and down.',
    stats: { hp: 55, attack: 45, defense: 50, specialAttack: 45, specialDefense: 65, speed: 80 },
    moves: [
      { name: 'Cotton Spore', type: PokemonElementType.grass, power: null, description: 'The user releases cottonlike spores that cling to the foe, sharply reducing its Speed stat.' },
      { name: 'Sleep Powder', type: PokemonElementType.grass, power: null, description: 'The user scatters a big cloud of sleep-inducing dust around the foe.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of poisonous dust is scattered on the foe. It may poison the target.' },
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'The user just flops and splashes around to no effect at all...' },
    ],
  },
  jumpluff: {
    flavorText: 'Once it catches the wind, it deftly controls its cotton-puff spores--it can even float around the world.',
    stats: { hp: 75, attack: 55, defense: 70, specialAttack: 55, specialDefense: 95, speed: 110 },
    moves: [
      { name: 'Cotton Spore', type: PokemonElementType.grass, power: null, description: 'The user releases cottonlike spores that cling to the foe, sharply reducing its Speed stat.' },
      { name: 'Sleep Powder', type: PokemonElementType.grass, power: null, description: 'The user scatters a big cloud of sleep-inducing dust around the foe.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of poisonous dust is scattered on the foe. It may poison the target.' },
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'The user just flops and splashes around to no effect at all...' },
    ],
  },
  aipom: {
    flavorText: 'Its tail is so powerful that it can use it to grab a tree branch and hold itself up in the air.',
    stats: { hp: 55, attack: 70, defense: 55, specialAttack: 40, specialDefense: 55, speed: 85 },
    moves: [
      { name: 'Double Hit', type: PokemonElementType.normal, power: 35, description: 'The user slams the foe with a long tail, vines, etc. The target is hit twice in a row.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes for two to five times in quick succession.' },
      { name: 'Tickle', type: PokemonElementType.normal, power: null, description: 'The user tickles the foe into laughing, reducing its Attack and Defense stats.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'Sand is hurled in the foe’s face, reducing its accuracy.' },
    ],
  },
  sunkern: {
    flavorText: 'It may plummet from the sky. If attacked by a SPEAROW, it will violently shake its leaves.',
    stats: { hp: 30, attack: 30, defense: 30, specialAttack: 30, specialDefense: 30, speed: 30 },
    moves: [
      { name: 'Grass Whistle', type: PokemonElementType.grass, power: null, description: 'The user plays a pleasant melody that lulls the foe into a deep sleep.' },
      { name: 'Ingrain', type: PokemonElementType.grass, power: null, description: 'The user lays roots that restore HP on every turn. Because it is rooted, it can’t switch out.' },
      { name: 'Razor Leaf', type: PokemonElementType.grass, power: 55, description: 'Sharp-edged leaves are launched to slash at the foe. It has a high critical-hit ratio.' },
      { name: 'Growth', type: PokemonElementType.normal, power: null, description: 'The user’s body is forced to grow all at once. It raises the Sp. Atk stat.' },
    ],
  },
  yanma: {
    flavorText: 'If it flaps its wings really fast, it can generate shock waves that will shatter windows in the area.',
    stats: { hp: 65, attack: 65, defense: 45, specialAttack: 75, specialDefense: 45, speed: 95 },
    moves: [
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'The foe is hit with a destructive shock wave that always inflicts 20 HP damage.' },
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide to inflict damage.' },
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Bug Buzz', type: PokemonElementType.bug, power: 90, description: 'The user vibrates its wings to generate a damaging sound wave. It may also lower the foe’s Sp. Def stat.' },
    ],
  },
  sunflora: {
    flavorText: 'It converts sunlight into energy. In the darkness after sunset, it closes its petals and becomes still.',
    stats: { hp: 75, attack: 75, defense: 55, specialAttack: 105, specialDefense: 85, speed: 30 },
    moves: [
      { name: 'Grass Whistle', type: PokemonElementType.grass, power: null, description: 'The user plays a pleasant melody that lulls the foe into a deep sleep.' },
      { name: 'Petal Dance', type: PokemonElementType.grass, power: 120, description: 'The user attacks by scattering petals for two to three turns. The user then becomes confused.' },
      { name: 'Ingrain', type: PokemonElementType.grass, power: null, description: 'The user lays roots that restore HP on every turn. Because it is rooted, it can’t switch out.' },
      { name: 'Razor Leaf', type: PokemonElementType.grass, power: 55, description: 'Sharp-edged leaves are launched to slash at the foe. It has a high critical-hit ratio.' },
    ],
  },
  wooper: {
    flavorText: 'This Pokémon lives in cold water. It will leave the water to search for food when it gets cold outside.',
    stats: { hp: 55, attack: 45, defense: 45, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: 'Mud Bomb', type: PokemonElementType.ground, power: 65, description: 'The user launches a hard-packed mud ball to attack. It may also lower the target’s accuracy.' },
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'The user covers itself with mud. It weakens Electric-type moves while the user is in the battle.' },
      { name: 'Mist', type: PokemonElementType.ice, power: null, description: 'The user cloaks its body with a white mist that prevents any of its stats from being cut for five turns.' },
      { name: 'Slam', type: PokemonElementType.normal, power: 80, description: 'The foe is slammed with a long tail, vines, etc., to inflict damage.' },
    ],
  },
  quagsire: {
    flavorText: 'This carefree Pokémon has an easy-going nature. While swimming, it always bumps into boat hulls.',
    stats: { hp: 95, attack: 85, defense: 85, specialAttack: 65, specialDefense: 65, speed: 35 },
    moves: [
      { name: 'Mud Bomb', type: PokemonElementType.ground, power: 65, description: 'The user launches a hard-packed mud ball to attack. It may also lower the target’s accuracy.' },
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'The user covers itself with mud. It weakens Electric-type moves while the user is in the battle.' },
      { name: 'Mist', type: PokemonElementType.ice, power: null, description: 'The user cloaks its body with a white mist that prevents any of its stats from being cut for five turns.' },
      { name: 'Slam', type: PokemonElementType.normal, power: 80, description: 'The foe is slammed with a long tail, vines, etc., to inflict damage.' },
    ],
  },
  espeon: {
    flavorText: 'It uses the fine hair that covers its body to sense air currents and predict its enemy’s actions.',
    stats: { hp: 65, attack: 65, defense: 60, specialAttack: 130, specialDefense: 95, speed: 110 },
    moves: [
      { name: 'Morning Sun', type: PokemonElementType.normal, power: null, description: 'The user restores its own HP. The amount of HP regained varies with the weather.' },
      { name: 'Power Swap', type: PokemonElementType.psychic, power: null, description: 'The user employs its psychic power to switch changes to its Attack and Sp. Atk with the foe.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'Sand is hurled in the foe’s face, reducing its accuracy.' },
      { name: 'Confusion', type: PokemonElementType.psychic, power: 50, description: 'The foe is hit by a weak telekinetic force. It may also leave the foe confused.' },
    ],
  },
  umbreon: {
    flavorText: 'When agitated, this Pokémon protects itself by spraying poisonous sweat from its pores.',
    stats: { hp: 95, attack: 65, defense: 110, specialAttack: 60, specialDefense: 130, speed: 65 },
    moves: [
      { name: 'Moonlight', type: PokemonElementType.normal, power: null, description: 'The user restores its own HP. The amount of HP regained varies with the weather.' },
      { name: 'Mean Look', type: PokemonElementType.normal, power: null, description: 'The user affixes the foe with a dark, arresting look. The target becomes unable to flee.' },
      { name: 'Guard Swap', type: PokemonElementType.psychic, power: null, description: 'The user employs its psychic power to switch changes to its Defense and Sp. Def with the foe.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'The user draws up to the foe disarmingly, then throws a sucker punch. It hits without fail.' },
    ],
  },
  murkrow: {
    flavorText: 'Feared and loathed by many, it is believed to bring misfortune to all those who see it at night.',
    stats: { hp: 60, attack: 85, defense: 42, specialAttack: 85, specialDefense: 42, speed: 91 },
    moves: [
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide to inflict damage.' },
      { name: 'Mean Look', type: PokemonElementType.normal, power: null, description: 'The user affixes the foe with a dark, arresting look. The target becomes unable to flee.' },
      { name: 'Peck', type: PokemonElementType.flying, power: 35, description: 'The foe is jabbed with a sharply pointed beak or horn.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'The user draws up to the foe disarmingly, then throws a sucker punch. It hits without fail.' },
    ],
  },
  slowking: {
    flavorText: 'It has incredible intellect and intuition. Whatever the situation, it remains calm and collected.',
    stats: { hp: 95, attack: 75, defense: 80, specialAttack: 100, specialDefense: 110, speed: 30 },
    moves: [
      { name: 'Trump Card', type: PokemonElementType.normal, power: null, description: 'The fewer PP this move has, the more power it has for attack.' },
      { name: 'Power Gem', type: PokemonElementType.rock, power: 80, description: 'The user attacks with a ray of light that sparkles as if it were made of gemstones.' },
      { name: 'Yawn', type: PokemonElementType.normal, power: null, description: 'The user lets loose a huge yawn that lulls the foe into falling asleep on the next turn.' },
      { name: 'Disable', type: PokemonElementType.normal, power: null, description: 'For several turns, this move prevents the foe from using the move it last used.' },
    ],
  },
  unown_a: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_b: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_c: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_d: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_e: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_f: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_g: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_h: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_i: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_j: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_k: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_l: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_m: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_n: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_o: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_p: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_q: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_r: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_s: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_t: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_u: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_v: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_w: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_x: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_y: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_z: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_exclamation: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  unown_question: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
    ],
  },
  misdreavus: {
    flavorText: 'It likes playing mischievous tricks, such as screaming and wailing to startle people at night.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 85, specialDefense: 85, speed: 85 },
    moves: [
      { name: 'Grudge', type: PokemonElementType.ghost, power: null, description: 'If the user faints, the user’s grudge fully depletes the PP of the foe’s move that knocked it out.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns, unless it switches out of battle.' },
      { name: 'Mean Look', type: PokemonElementType.normal, power: null, description: 'The user affixes the foe with a dark, arresting look. The target becomes unable to flee.' },
      { name: 'Psywave', type: PokemonElementType.psychic, power: null, description: 'The foe is attacked with an odd, hot energy wave. The attack varies in intensity.' },
    ],
  },
  wobbuffet: {
    flavorText: 'It hates light and shock. If attacked, it inflates its body to build up its counterstrike.',
    stats: { hp: 190, attack: 33, defense: 58, specialAttack: 33, specialDefense: 58, speed: 33 },
    moves: [
      { name: 'Mirror Coat', type: PokemonElementType.psychic, power: null, description: 'A retaliation move that counters any special attack, inflicting double the damage taken.' },
      { name: 'Destiny Bond', type: PokemonElementType.ghost, power: null, description: 'When this move is used, if the user faints, the foe that landed the knockout hit also faints.' },
      { name: 'Counter', type: PokemonElementType.fighting, power: null, description: 'A retaliation move that counters any physical attack, inflicting double the damage taken.' },
      { name: 'Safeguard', type: PokemonElementType.normal, power: null, description: 'The user creates a protective field that prevents status problems for five turns.' },
    ],
  },
  girafarig: {
    flavorText: 'Its tail has a small brain of its own. Beware! If you get close, it may react to your scent by biting.',
    stats: { hp: 70, attack: 80, defense: 65, specialAttack: 90, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Stomp', type: PokemonElementType.normal, power: 65, description: 'The foe is stomped with a big foot. It may also make the target flinch.' },
      { name: 'Double Hit', type: PokemonElementType.normal, power: 35, description: 'The user slams the foe with a long tail, vines, etc. The target is hit twice in a row.' },
      { name: 'Power Swap', type: PokemonElementType.psychic, power: null, description: 'The user employs its psychic power to switch changes to its Attack and Sp. Atk with the foe.' },
    ],
  },
  pineco: {
    flavorText: 'It likes to make its shell thicker by adding layers of tree bark. The additional weight doesn’t bother it.',
    stats: { hp: 50, attack: 65, defense: 90, specialAttack: 35, specialDefense: 35, speed: 15 },
    moves: [
      { name: 'Rapid Spin', type: PokemonElementType.normal, power: 50, description: 'A spin attack that can also eliminate such moves as Bind, Wrap, Leech Seed, and Spikes.' },
      { name: 'Spikes', type: PokemonElementType.ground, power: null, description: 'The user lays a trap of spikes at the foe’s feet. The trap hurts foes that switch into battle.' },
      { name: 'Bug Bite', type: PokemonElementType.bug, power: 60, description: 'The user bites the foe. If the foe is holding a Berry, the user eats it and gains its effect.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'The user explodes to inflict damage on all Pokémon in battle. The user faints upon using this move.' },
    ],
  },
  forretress: {
    flavorText: 'Its entire body is shielded by a steel-hard shell. What lurks inside this shell is a total mystery.',
    stats: { hp: 75, attack: 90, defense: 140, specialAttack: 60, specialDefense: 60, speed: 40 },
    moves: [
      { name: 'Mirror Shot', type: PokemonElementType.steel, power: 65, description: 'The user looses a flash of energy from its polished body. It may also lower the target’s accuracy.' },
      { name: 'Rapid Spin', type: PokemonElementType.normal, power: 50, description: 'A spin attack that can also eliminate such moves as Bind, Wrap, Leech Seed, and Spikes.' },
      { name: 'Spikes', type: PokemonElementType.ground, power: null, description: 'The user lays a trap of spikes at the foe’s feet. The trap hurts foes that switch into battle.' },
      { name: 'Toxic Spikes', type: PokemonElementType.poison, power: null, description: 'The user lays a trap of poison spikes at the foe’s feet. They poison foes that switch into battle.' },
    ],
  },
  dunsparce: {
    flavorText: 'When spotted, this Pokémon escapes backward by furiously boring into the ground with its tail.',
    stats: { hp: 100, attack: 70, defense: 70, specialAttack: 65, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'Glare', type: PokemonElementType.normal, power: null, description: 'The user intimidates the foe with the pattern on its belly to cause paralysis.' },
      { name: 'Yawn', type: PokemonElementType.normal, power: null, description: 'The user lets loose a huge yawn that lulls the foe into falling asleep on the next turn.' },
      { name: 'Pursuit', type: PokemonElementType.dark, power: 40, description: 'An attack move that inflicts double damage if used on a foe that is switching out of battle.' },
      { name: 'Roost', type: PokemonElementType.flying, power: null, description: 'The user lands and rests its body. It restores the user’s HP by up to half of its max HP.' },
    ],
  },
  gligar: {
    flavorText: 'It flies straight at its target’s face, then clamps down on the startled victim to inject poison.',
    stats: { hp: 65, attack: 75, defense: 105, specialAttack: 35, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'Guillotine', type: PokemonElementType.normal, power: null, description: 'A vicious, tearing attack with pincers. The foe will faint instantly if this attack hits.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a poisonous barb of some sort. It may also poison the target.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'The user stiffens all the muscles in its body to raise its Defense stat.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'The user draws up to the foe disarmingly, then throws a sucker punch. It hits without fail.' },
    ],
  },
  steelix: {
    flavorText: 'Its body has been compressed deep under the ground. As a result, it is even harder than a diamond.',
    stats: { hp: 75, attack: 85, defense: 200, specialAttack: 55, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'The user covers itself with mud. It weakens Electric-type moves while the user is in the battle.' },
      { name: 'Rock Throw', type: PokemonElementType.rock, power: 50, description: 'The user picks up and throws a small rock at the foe to attack.' },
      { name: 'Bind', type: PokemonElementType.normal, power: 15, description: 'A long body or tentacles are used to bind and squeeze the foe for two to five turns.' },
      { name: 'Dragon Breath', type: PokemonElementType.dragon, power: 60, description: 'The user exhales a mighty gust that inflicts damage. It may also paralyze the target.' },
    ],
  },
  snubbull: {
    flavorText: 'Although it looks frightening, it is actually kind and affectionate. It is very popular among women.',
    stats: { hp: 60, attack: 80, defense: 50, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: 'Lick', type: PokemonElementType.ghost, power: 30, description: 'The foe is licked with a long tongue, causing damage. It may also paralyze the target.' },
      { name: 'Thunder Fang', type: PokemonElementType.electric, power: 65, description: 'The user bites with electrified fangs. It may also make the foe flinch or become paralyzed.' },
      { name: 'Ice Fang', type: PokemonElementType.ice, power: 65, description: 'The user bites with cold-infused fangs. It may also make the foe flinch or freeze.' },
      { name: 'Fire Fang', type: PokemonElementType.fire, power: 65, description: 'The user bites with flame-cloaked fangs. It may also make the foe flinch or sustain a burn.' },
    ],
  },
  granbull: {
    flavorText: 'It is actually timid and easily spooked. If attacked, it flails about to fend off its attacker.',
    stats: { hp: 90, attack: 120, defense: 75, specialAttack: 60, specialDefense: 60, speed: 45 },
    moves: [
      { name: 'Lick', type: PokemonElementType.ghost, power: 30, description: 'The foe is licked with a long tongue, causing damage. It may also paralyze the target.' },
      { name: 'Thunder Fang', type: PokemonElementType.electric, power: 65, description: 'The user bites with electrified fangs. It may also make the foe flinch or become paralyzed.' },
      { name: 'Ice Fang', type: PokemonElementType.ice, power: 65, description: 'The user bites with cold-infused fangs. It may also make the foe flinch or freeze.' },
      { name: 'Fire Fang', type: PokemonElementType.fire, power: 65, description: 'The user bites with flame-cloaked fangs. It may also make the foe flinch or sustain a burn.' },
    ],
  },
  qwilfish: {
    flavorText: 'To fire its poison spikes, it must inflate its body by drinking over 2.6 gallons of water all at once.',
    stats: { hp: 65, attack: 95, defense: 85, specialAttack: 55, specialDefense: 55, speed: 85 },
    moves: [
      { name: 'Minimize', type: PokemonElementType.normal, power: null, description: 'The user compresses its body to make itself look smaller. The user’s evasion stat is boosted.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a poisonous barb of some sort. It may also poison the target.' },
      { name: 'Spit Up', type: PokemonElementType.normal, power: null, description: 'The power stored using the move Stockpile is released at once in an attack.' },
      { name: 'Pin Missile', type: PokemonElementType.bug, power: 25, description: 'Sharp pins are shot at the foe in rapid succession. They hit two to five times in a row.' },
    ],
  },
  scizor: {
    flavorText: 'It swings its eye-patterned pincers up to scare its foes. This makes it look like it has three heads.',
    stats: { hp: 70, attack: 130, defense: 100, specialAttack: 55, specialDefense: 80, speed: 65 },
    moves: [
      { name: 'Bullet Punch', type: PokemonElementType.steel, power: 40, description: 'The user strikes with a tough punch as fast as a bullet. This move always goes first.' },
      { name: 'Razor Wind', type: PokemonElementType.normal, power: 80, description: 'A two-turn attack. Blades of wind hit the foe on the second turn. It has a high critical-hit ratio.' },
      { name: 'Double Hit', type: PokemonElementType.normal, power: 35, description: 'The user slams the foe with a long tail, vines, etc. The target is hit twice in a row.' },
      { name: 'Feint', type: PokemonElementType.normal, power: 30, description: 'An attack that hits a foe using Protect or Detect. It also lifts the effects of those moves.' },
    ],
  },
  shuckle: {
    flavorText: 'The berries it stores in its vase-like shell decompose and become a gooey liquid.',
    stats: { hp: 20, attack: 10, defense: 230, specialAttack: 10, specialDefense: 230, speed: 5 },
    moves: [
      { name: 'Power Trick', type: PokemonElementType.psychic, power: null, description: 'The user employs its psychic power to switch its Attack with its Defense stat.' },
      { name: 'Constrict', type: PokemonElementType.normal, power: 10, description: 'The foe is attacked with long, creeping tentacles or vines. It may also lower the target’s Speed.' },
      { name: 'Withdraw', type: PokemonElementType.water, power: null, description: 'The user withdraws its body into its hard shell, raising its Defense stat.' },
      { name: 'Wrap', type: PokemonElementType.normal, power: 15, description: 'A long body or vines are used to wrap and squeeze the foe for two to five turns.' },
    ],
  },
  heracross: {
    flavorText: 'This powerful Pokémon thrusts its prized horn under its enemies’ bellies, then lifts and throws them.',
    stats: { hp: 80, attack: 125, defense: 75, specialAttack: 40, specialDefense: 95, speed: 85 },
    moves: [
      { name: 'Horn Attack', type: PokemonElementType.normal, power: 65, description: 'The foe is jabbed with a sharply pointed horn to inflict damage.' },
      { name: 'Megahorn', type: PokemonElementType.bug, power: 120, description: 'Using its tough and impressive horn, the user rams into the foe with no letup.' },
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'The foe is jabbed repeatedly with a horn or beak two to five times in a row.' },
      { name: 'Feint', type: PokemonElementType.normal, power: 30, description: 'An attack that hits a foe using Protect or Detect. It also lifts the effects of those moves.' },
    ],
  },
  sneasel: {
    flavorText: 'Its paws conceal sharp claws. If attacked, it suddenly extends the claws and startles its enemy.',
    stats: { hp: 55, attack: 95, defense: 55, specialAttack: 35, specialDefense: 75, speed: 115 },
    moves: [
      { name: 'Ice Shard', type: PokemonElementType.ice, power: 40, description: 'The user flash freezes chunks of ice and hurls them. This move always goes first.' },
      { name: 'Beat Up', type: PokemonElementType.dark, power: null, description: 'The user gets all the party Pokémon to attack the foe. The more party Pokémon, the more damage.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes for two to five times in quick succession.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'The user draws up to the foe disarmingly, then throws a sucker punch. It hits without fail.' },
    ],
  },
  teddiursa: {
    flavorText: 'If it finds honey, its crescent mark glows. It always licks its paws because they’re soaked with honey.',
    stats: { hp: 60, attack: 80, defense: 50, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'Lick', type: PokemonElementType.ghost, power: 30, description: 'The foe is licked with a long tongue, causing damage. It may also paralyze the target.' },
      { name: 'Sweet Scent', type: PokemonElementType.normal, power: null, description: 'A sweet scent that lowers the foe’s evasiveness. It also lures wild Pokémon if used in grass, etc.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes for two to five times in quick succession.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'The user draws up to the foe disarmingly, then throws a sucker punch. It hits without fail.' },
    ],
  },
  ursaring: {
    flavorText: 'Although it is a good climber, it prefers to snap trees with its forelegs and eat fallen berries.',
    stats: { hp: 90, attack: 130, defense: 75, specialAttack: 75, specialDefense: 75, speed: 55 },
    moves: [
      { name: 'Lick', type: PokemonElementType.ghost, power: 30, description: 'The foe is licked with a long tongue, causing damage. It may also paralyze the target.' },
      { name: 'Hammer Arm', type: PokemonElementType.fighting, power: 100, description: 'The user swings and hits with its strong and heavy fist. It lowers the user’s Speed, however.' },
      { name: 'Sweet Scent', type: PokemonElementType.normal, power: null, description: 'A sweet scent that lowers the foe’s evasiveness. It also lures wild Pokémon if used in grass, etc.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes for two to five times in quick succession.' },
    ],
  },
  slugma: {
    flavorText: 'It never sleeps. It has to keep moving because if it stopped, its magma body would cool and harden.',
    stats: { hp: 40, attack: 40, defense: 40, specialAttack: 70, specialDefense: 40, speed: 20 },
    moves: [
      { name: 'Lava Plume', type: PokemonElementType.fire, power: 80, description: 'An inferno of scarlet flames washes over all Pokémon in battle. It may also inflict burns.' },
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'The foe is attacked with a discharge of filthy gases. It may also poison the target.' },
      { name: 'Rock Throw', type: PokemonElementType.rock, power: 50, description: 'The user picks up and throws a small rock at the foe to attack.' },
      { name: 'Recover', type: PokemonElementType.normal, power: null, description: 'A self-healing move. The user restores its own HP by up to half of its max HP.' },
    ],
  },
  magcargo: {
    flavorText: 'The shell on its back is just skin that has cooled and hardened. It breaks easily with a slight touch.',
    stats: { hp: 60, attack: 50, defense: 120, specialAttack: 90, specialDefense: 80, speed: 30 },
    moves: [
      { name: 'Lava Plume', type: PokemonElementType.fire, power: 80, description: 'An inferno of scarlet flames washes over all Pokémon in battle. It may also inflict burns.' },
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'The foe is attacked with a discharge of filthy gases. It may also poison the target.' },
      { name: 'Rock Throw', type: PokemonElementType.rock, power: 50, description: 'The user picks up and throws a small rock at the foe to attack.' },
      { name: 'Recover', type: PokemonElementType.normal, power: null, description: 'A self-healing move. The user restores its own HP by up to half of its max HP.' },
    ],
  },
  swinub: {
    flavorText: 'It rubs its snout on the ground to find and dig up food. It sometimes discovers hot springs.',
    stats: { hp: 50, attack: 50, defense: 40, specialAttack: 30, specialDefense: 30, speed: 50 },
    moves: [
      { name: 'Mud Bomb', type: PokemonElementType.ground, power: 65, description: 'The user launches a hard-packed mud ball to attack. It may also lower the target’s accuracy.' },
      { name: 'Ice Shard', type: PokemonElementType.ice, power: 40, description: 'The user flash freezes chunks of ice and hurls them. This move always goes first.' },
      { name: 'Powder Snow', type: PokemonElementType.ice, power: 40, description: 'The user attacks with a chilling gust of powdery snow. It may also freeze the target.' },
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
    ],
  },
  piloswine: {
    flavorText: 'Because the long hair all over its body obscures its sight, it just keeps charging repeatedly.',
    stats: { hp: 100, attack: 100, defense: 80, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'Mud Bomb', type: PokemonElementType.ground, power: 65, description: 'The user launches a hard-packed mud ball to attack. It may also lower the target’s accuracy.' },
      { name: 'Powder Snow', type: PokemonElementType.ice, power: 40, description: 'The user attacks with a chilling gust of powdery snow. It may also freeze the target.' },
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'The user covers itself with mud. It weakens Electric-type moves while the user is in the battle.' },
    ],
  },
  corsola: {
    flavorText: 'It continuously sheds and grows. The tip of its head is prized as a treasure because of its beauty.',
    stats: { hp: 65, attack: 55, defense: 95, specialAttack: 65, specialDefense: 95, speed: 35 },
    moves: [
      { name: 'Spike Cannon', type: PokemonElementType.normal, power: 20, description: 'Sharp spikes are fired at the foe to strike two to five times in rapid succession.' },
      { name: 'Lucky Chant', type: PokemonElementType.normal, power: null, description: 'The user chants an incantation toward the sky, preventing the foe from landing critical hits.' },
      { name: 'Refresh', type: PokemonElementType.normal, power: null, description: 'The user rests to cure itself of a poisoning, burn, or paralysis.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of countless bubbles is jetted at the foe. It may also lower the target’s Speed stat.' },
    ],
  },
  remoraid: {
    flavorText: 'It has superb accuracy. The water it shoots out can strike moving prey from more than 300 feet away.',
    stats: { hp: 35, attack: 65, defense: 35, specialAttack: 65, specialDefense: 35, speed: 65 },
    moves: [
      { name: 'Lock On', type: PokemonElementType.normal, power: null, description: 'The user takes sure aim at the foe. It ensures the next attack does not fail to hit the target.' },
      { name: 'Aurora Beam', type: PokemonElementType.ice, power: 65, description: 'The foe is hit with a rainbow-colored beam. It may also lower the target’s Attack stat.' },
      { name: 'Bubble Beam', type: PokemonElementType.water, power: 65, description: 'A spray of bubbles is forcefully ejected at the foe. It may also lower the target’s Speed stat.' },
      { name: 'Psybeam', type: PokemonElementType.psychic, power: 65, description: 'The foe is attacked with a peculiar ray. It may also leave the target confused.' },
    ],
  },
  octillery: {
    flavorText: 'It traps foes with the suction cups on its tentacles, then smashes them with its rock-hard head.',
    stats: { hp: 75, attack: 105, defense: 75, specialAttack: 105, specialDefense: 75, speed: 45 },
    moves: [
      { name: 'Octazooka', type: PokemonElementType.water, power: 65, description: 'The user attacks by spraying ink in the foe’s face or eyes. It may also lower the target’s accuracy.' },
      { name: 'Constrict', type: PokemonElementType.normal, power: 10, description: 'The foe is attacked with long, creeping tentacles or vines. It may also lower the target’s Speed.' },
      { name: 'Wring Out', type: PokemonElementType.normal, power: null, description: 'The user powerfully wrings the foe. The more HP the foe has, the greater this attack’s power.' },
      { name: 'Aurora Beam', type: PokemonElementType.ice, power: 65, description: 'The foe is hit with a rainbow-colored beam. It may also lower the target’s Attack stat.' },
    ],
  },
  delibird: {
    flavorText: 'It carries food all day long. There are tales about lost people who were saved by its stored food.',
    stats: { hp: 45, attack: 55, defense: 45, specialAttack: 65, specialDefense: 45, speed: 75 },
    moves: [
      { name: 'Present', type: PokemonElementType.normal, power: null, description: 'The user attacks by giving the foe a booby-trapped gift. It restores HP sometimes, however.' },
    ],
  },
  mantine: {
    flavorText: 'As it majestically swims, it doesn’t care if REMORAID attach to it for scavenging its leftovers.',
    stats: { hp: 85, attack: 40, defense: 70, specialAttack: 80, specialDefense: 140, speed: 70 },
    moves: [
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide to inflict damage.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of countless bubbles is jetted at the foe. It may also lower the target’s Speed stat.' },
      { name: 'Aqua Ring', type: PokemonElementType.water, power: null, description: 'The user envelops itself in a veil made of water. It regains some HP on every turn.' },
      { name: 'Supersonic', type: PokemonElementType.normal, power: null, description: 'The user generates odd sound waves from its body. It may confuse the target.' },
    ],
  },
  skarmory: {
    flavorText: 'Its sturdy wings look heavy, but they are actually hollow and light, allowing it to fly freely in the sky.',
    stats: { hp: 65, attack: 80, defense: 140, specialAttack: 40, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'The foe is jabbed repeatedly with a horn or beak two to five times in a row.' },
      { name: 'Metal Sound', type: PokemonElementType.steel, power: null, description: 'A horrible sound like scraping metal is emitted to sharply reduce the foe’s Sp. Def stat.' },
      { name: 'Peck', type: PokemonElementType.flying, power: 35, description: 'The foe is jabbed with a sharply pointed beak or horn.' },
      { name: 'Spikes', type: PokemonElementType.ground, power: null, description: 'The user lays a trap of spikes at the foe’s feet. The trap hurts foes that switch into battle.' },
    ],
  },
  houndour: {
    flavorText: 'It uses different kinds of cries for communicating with others of its kind and for pursuing its prey.',
    stats: { hp: 45, attack: 60, defense: 30, specialAttack: 80, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'The foe is attacked with a discharge of filthy gases. It may also poison the target.' },
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Howl', type: PokemonElementType.normal, power: null, description: 'The user howls loudly to raise its spirit, boosting its Attack stat.' },
      { name: 'Beat Up', type: PokemonElementType.dark, power: null, description: 'The user gets all the party Pokémon to attack the foe. The more party Pokémon, the more damage.' },
    ],
  },
  houndoom: {
    flavorText: 'If you are burned by the flames it shoots from its mouth, the pain will never go away.',
    stats: { hp: 75, attack: 90, defense: 50, specialAttack: 110, specialDefense: 80, speed: 95 },
    moves: [
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'The foe is attacked with a discharge of filthy gases. It may also poison the target.' },
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Howl', type: PokemonElementType.normal, power: null, description: 'The user howls loudly to raise its spirit, boosting its Attack stat.' },
      { name: 'Beat Up', type: PokemonElementType.dark, power: null, description: 'The user gets all the party Pokémon to attack the foe. The more party Pokémon, the more damage.' },
    ],
  },
  phanpy: {
    flavorText: 'It swings its long snout around playfully, but because it is so strong, that can be dangerous.',
    stats: { hp: 90, attack: 60, defense: 60, specialAttack: 40, specialDefense: 40, speed: 40 },
    moves: [
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Slam', type: PokemonElementType.normal, power: 80, description: 'The foe is slammed with a long tail, vines, etc., to inflict damage.' },
      { name: 'Last Resort', type: PokemonElementType.normal, power: 140, description: 'This move can be used only after the user has used all the other moves it knows in the battle.' },
      { name: 'Flail', type: PokemonElementType.normal, power: null, description: 'The user flails about aimlessly to attack. It becomes more powerful the less HP the user has.' },
    ],
  },
  kingdra: {
    flavorText: 'It is said that it usually hides in underwater caves. It can create whirlpools by yawning.',
    stats: { hp: 75, attack: 95, defense: 95, specialAttack: 95, specialDefense: 95, speed: 85 },
    moves: [
      { name: 'Smokescreen', type: PokemonElementType.normal, power: null, description: 'The user releases an obscuring cloud of smoke or ink. It reduces the foe’s accuracy.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of countless bubbles is jetted at the foe. It may also lower the target’s Speed stat.' },
      { name: 'Dragon Dance', type: PokemonElementType.dragon, power: null, description: 'The user vigorously performs a mystic, powerful dance that boosts its Attack and Speed stats.' },
      { name: 'Twister', type: PokemonElementType.dragon, power: 40, description: 'The user whips up a vicious tornado to tear at the foe. It may also make the foe flinch.' },
    ],
  },
  donphan: {
    flavorText: 'It has sharp, hard tusks and a rugged hide. Its tackle is strong enough to knock down a house.',
    stats: { hp: 90, attack: 120, defense: 120, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'Horn Attack', type: PokemonElementType.normal, power: 65, description: 'The foe is jabbed with a sharply pointed horn to inflict damage.' },
      { name: 'Magnitude', type: PokemonElementType.ground, power: null, description: 'The user looses a ground-shaking quake affecting everyone in battle. Its power varies.' },
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'The foe is jabbed repeatedly with a horn or beak two to five times in a row.' },
      { name: 'Rapid Spin', type: PokemonElementType.normal, power: 50, description: 'A spin attack that can also eliminate such moves as Bind, Wrap, Leech Seed, and Spikes.' },
    ],
  },
  porygon2: {
    flavorText: 'This upgraded version of PORYGON is designed for space exploration. It can’t fly, however.',
    stats: { hp: 85, attack: 80, defense: 90, specialAttack: 105, specialDefense: 95, speed: 60 },
    moves: [
      { name: 'Conversion', type: PokemonElementType.normal, power: null, description: 'The user changes its type to become the same type as one of its moves.' },
      { name: 'Conversion 2', type: PokemonElementType.normal, power: null, description: 'The user changes its type to make itself resistant to the type of the attack it last took.' },
      { name: 'Lock On', type: PokemonElementType.normal, power: null, description: 'The user takes sure aim at the foe. It ensures the next attack does not fail to hit the target.' },
      { name: 'Tri Attack', type: PokemonElementType.normal, power: 80, description: 'The user strikes with a simultaneous three-beam attack. May also paralyze, burn, or freeze the target.' },
    ],
  },
  stantler: {
    flavorText: 'The curved antlers subtly change the flow of air to create a strange space where reality is distorted.',
    stats: { hp: 73, attack: 95, defense: 62, specialAttack: 85, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'Me First', type: PokemonElementType.normal, power: null, description: 'The user tries to cut ahead of the foe to steal and use the foe’s intended move with greater power.' },
      { name: 'Stomp', type: PokemonElementType.normal, power: 65, description: 'The foe is stomped with a big foot. It may also make the target flinch.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'The user employs hypnotic suggestion to make the target fall into a deep sleep.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'Sand is hurled in the foe’s face, reducing its accuracy.' },
    ],
  },
  smeargle: {
    flavorText: 'A special fluid oozes from the tip of its tail. It paints the fluid everywhere to mark its territory.',
    stats: { hp: 55, attack: 20, defense: 35, specialAttack: 20, specialDefense: 45, speed: 75 },
    moves: [
      { name: 'Sketch', type: PokemonElementType.normal, power: null, description: 'It enables the user to permanently learn the move last used by the foe. Once used, Sketch disappears.' },
    ],
  },
  tyrogue: {
    flavorText: 'It is always bursting with energy. To make itself stronger, it keeps on fighting even if it loses.',
    stats: { hp: 35, attack: 35, defense: 35, specialAttack: 35, specialDefense: 35, speed: 35 },
    moves: [
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Fake Out', type: PokemonElementType.normal, power: 40, description: 'An attack that hits first and makes the target flinch. It only works the first turn the user is in battle.' },
      { name: 'Tackle', type: PokemonElementType.normal, power: 40, description: 'A physical attack in which the user charges and slams into the foe with its whole body.' },
      { name: 'Helping Hand', type: PokemonElementType.normal, power: null, description: 'A move that boosts the power of the ally’s attack in a Double Battle.' },
    ],
  },
  hitmontop: {
    flavorText: 'If you are enchanted by its smooth, dance-like kicks, you may get a closer experience with one than you’d like.',
    stats: { hp: 50, attack: 95, defense: 95, specialAttack: 35, specialDefense: 110, speed: 70 },
    moves: [
      { name: 'Triple Kick', type: PokemonElementType.fighting, power: 10, description: 'A consecutive three-kick attack that becomes more powerful with each successive hit.' },
      { name: 'Rolling Kick', type: PokemonElementType.fighting, power: 60, description: 'The user lashes out with a quick, spinning kick. It may also make the target flinch.' },
      { name: 'Rapid Spin', type: PokemonElementType.normal, power: 50, description: 'A spin attack that can also eliminate such moves as Bind, Wrap, Leech Seed, and Spikes.' },
      { name: 'Feint', type: PokemonElementType.normal, power: 30, description: 'An attack that hits a foe using Protect or Detect. It also lifts the effects of those moves.' },
    ],
  },
  smoochum: {
    flavorText: 'Its lips are the most sensitive part of its body. It always uses its lips first to examine things.',
    stats: { hp: 45, attack: 30, defense: 15, specialAttack: 85, specialDefense: 65, speed: 65 },
    moves: [
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns, unless it switches out of battle.' },
      { name: 'Lucky Chant', type: PokemonElementType.normal, power: null, description: 'The user chants an incantation toward the sky, preventing the foe from landing critical hits.' },
      { name: 'Sing', type: PokemonElementType.normal, power: null, description: 'A soothing lullaby is sung in a calming voice that puts the foe into a deep slumber.' },
      { name: 'Powder Snow', type: PokemonElementType.ice, power: 40, description: 'The user attacks with a chilling gust of powdery snow. It may also freeze the target.' },
    ],
  },
  magby: {
    flavorText: 'Each and every time it inhales and exhales, hot embers dribble from its mouth and nostrils.',
    stats: { hp: 45, attack: 75, defense: 37, specialAttack: 70, specialDefense: 55, speed: 83 },
    moves: [
      { name: 'Lava Plume', type: PokemonElementType.fire, power: 80, description: 'An inferno of scarlet flames washes over all Pokémon in battle. It may also inflict burns.' },
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'The foe is attacked with a discharge of filthy gases. It may also poison the target.' },
      { name: 'Smokescreen', type: PokemonElementType.normal, power: null, description: 'The user releases an obscuring cloud of smoke or ink. It reduces the foe’s accuracy.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'The foe is attacked with small flames. The target may also be left with a burn.' },
    ],
  },
  elekid: {
    flavorText: 'It rotates its arms to generate electricity, but it tires easily, so it only charges up a little bit.',
    stats: { hp: 45, attack: 63, defense: 37, specialAttack: 65, specialDefense: 55, speed: 95 },
    moves: [
      { name: 'Thunder Shock', type: PokemonElementType.electric, power: 40, description: 'A jolt of electricity is hurled at the foe to inflict damage. It may also leave the foe paralyzed.' },
      { name: 'Discharge', type: PokemonElementType.electric, power: 80, description: 'A flare of electricity is loosed to strike all Pokémon in battle. It may also cause paralysis.' },
      { name: 'Quick Attack', type: PokemonElementType.normal, power: 40, description: 'The user lunges at the foe at a speed that makes it almost invisible. It is sure to strike first.' },
      { name: 'Screech', type: PokemonElementType.normal, power: null, description: 'An earsplitting screech is emitted to sharply reduce the foe’s Defense stat.' },
    ],
  },
  miltank: {
    flavorText: 'Its milk is packed with nutrition, making it the ultimate beverage for the sick or weary.',
    stats: { hp: 95, attack: 80, defense: 105, specialAttack: 40, specialDefense: 70, speed: 100 },
    moves: [
      { name: 'Milk Drink', type: PokemonElementType.normal, power: null, description: 'The user restores its own HP by up to half of its maximum HP. It may also be used to heal an ally’s HP.' },
      { name: 'Wake Up Slap', type: PokemonElementType.fighting, power: 70, description: 'This attack inflicts high damage on a sleeping foe. It also wakes the foe up, however.' },
      { name: 'Stomp', type: PokemonElementType.normal, power: 65, description: 'The foe is stomped with a big foot. It may also make the target flinch.' },
      { name: 'Heal Bell', type: PokemonElementType.normal, power: null, description: 'The user makes a soothing bell chime to heal the status problems of all the party Pokémon.' },
    ],
  },
  blissey: {
    flavorText: 'Anyone who takes even one taste of BLISSEY’s egg becomes unfailingly caring and pleasant to everyone.',
    stats: { hp: 255, attack: 10, defense: 10, specialAttack: 75, specialDefense: 135, speed: 55 },
    moves: [
      { name: 'Egg Bomb', type: PokemonElementType.normal, power: 100, description: 'A large egg is hurled with maximum force at the foe to inflict damage.' },
      { name: 'Soft Boiled', type: PokemonElementType.normal, power: null, description: 'The user restores its own HP by up to half of its maximum HP. It may also be used to heal an ally’s HP.' },
      { name: 'Minimize', type: PokemonElementType.normal, power: null, description: 'The user compresses its body to make itself look smaller. The user’s evasion stat is boosted.' },
      { name: 'Healing Wish', type: PokemonElementType.psychic, power: null, description: 'The user faints. In return, the Pokémon taking its place will have its HP restored and status cured.' },
    ],
  },
  raikou: {
    flavorText: 'The rain clouds it carries let it fire thunderbolts at will. They say that it descended with lightning.',
    stats: { hp: 90, attack: 85, defense: 75, specialAttack: 115, specialDefense: 100, speed: 115 },
    moves: [
      { name: 'Extrasensory', type: PokemonElementType.psychic, power: 80, description: 'The user attacks with an odd, unseeable power. It may also make the foe flinch.' },
      { name: 'Spark', type: PokemonElementType.electric, power: 65, description: 'The user throws an electrically charged tackle at the foe. It may also leave the target paralyzed.' },
      { name: 'Thunder Shock', type: PokemonElementType.electric, power: 40, description: 'A jolt of electricity is hurled at the foe to inflict damage. It may also leave the foe paralyzed.' },
      { name: 'Discharge', type: PokemonElementType.electric, power: 80, description: 'A flare of electricity is loosed to strike all Pokémon in battle. It may also cause paralysis.' },
    ],
  },
  entei: {
    flavorText: 'Volcanoes erupt when it barks. Unable to contain its sheer power, it races headlong around the land.',
    stats: { hp: 115, attack: 115, defense: 85, specialAttack: 90, specialDefense: 75, speed: 100 },
    moves: [
      { name: 'Eruption', type: PokemonElementType.fire, power: 150, description: 'The user attacks in an explosive fury. The lower the user’s HP, the less powerful this attack becomes.' },
      { name: 'Lava Plume', type: PokemonElementType.fire, power: 80, description: 'An inferno of scarlet flames washes over all Pokémon in battle. It may also inflict burns.' },
      { name: 'Stomp', type: PokemonElementType.normal, power: 65, description: 'The foe is stomped with a big foot. It may also make the target flinch.' },
      { name: 'Extrasensory', type: PokemonElementType.psychic, power: 80, description: 'The user attacks with an odd, unseeable power. It may also make the foe flinch.' },
    ],
  },
  suicune: {
    flavorText: 'Said to be the embodiment of north winds, it can instantly purify filthy, murky water.',
    stats: { hp: 100, attack: 75, defense: 115, specialAttack: 90, specialDefense: 115, speed: 85 },
    moves: [
      { name: 'Aurora Beam', type: PokemonElementType.ice, power: 65, description: 'The foe is hit with a rainbow-colored beam. It may also lower the target’s Attack stat.' },
      { name: 'Gust', type: PokemonElementType.flying, power: 40, description: 'A gust of wind is whipped up by wings and launched at the foe to inflict damage.' },
      { name: 'Mirror Coat', type: PokemonElementType.psychic, power: null, description: 'A retaliation move that counters any special attack, inflicting double the damage taken.' },
      { name: 'Extrasensory', type: PokemonElementType.psychic, power: 80, description: 'The user attacks with an odd, unseeable power. It may also make the foe flinch.' },
    ],
  },
  larvitar: {
    flavorText: 'It feeds on soil. After it has eaten a large mountain, it falls asleep so it can grow.',
    stats: { hp: 50, attack: 64, defense: 50, specialAttack: 45, specialDefense: 50, speed: 41 },
    moves: [
      { name: 'Thrash', type: PokemonElementType.normal, power: 120, description: 'The user rampages and attacks for two to three turns. It then becomes confused, however.' },
      { name: 'Dark Pulse', type: PokemonElementType.dark, power: 80, description: 'The user releases a horrible aura imbued with dark thoughts. It may also make the target flinch.' },
      { name: 'Screech', type: PokemonElementType.normal, power: null, description: 'An earsplitting screech is emitted to sharply reduce the foe’s Defense stat.' },
      { name: 'Bite', type: PokemonElementType.dark, power: 60, description: 'The foe is bitten with viciously sharp fangs. It may make the target flinch.' },
    ],
  },
  pupitar: {
    flavorText: 'Its shell is as hard as sheet rock, and it is also very strong. Its thrashing can topple a mountain.',
    stats: { hp: 70, attack: 84, defense: 70, specialAttack: 65, specialDefense: 70, speed: 51 },
    moves: [
      { name: 'Thrash', type: PokemonElementType.normal, power: 120, description: 'The user rampages and attacks for two to three turns. It then becomes confused, however.' },
      { name: 'Dark Pulse', type: PokemonElementType.dark, power: 80, description: 'The user releases a horrible aura imbued with dark thoughts. It may also make the target flinch.' },
      { name: 'Screech', type: PokemonElementType.normal, power: null, description: 'An earsplitting screech is emitted to sharply reduce the foe’s Defense stat.' },
      { name: 'Bite', type: PokemonElementType.dark, power: 60, description: 'The foe is bitten with viciously sharp fangs. It may make the target flinch.' },
    ],
  },
  tyranitar: {
    flavorText: 'Its body can’t be harmed by any sort of attack, so it is very eager to make challenges against enemies.',
    stats: { hp: 100, attack: 134, defense: 110, specialAttack: 95, specialDefense: 100, speed: 61 },
    moves: [
      { name: 'Thunder Fang', type: PokemonElementType.electric, power: 65, description: 'The user bites with electrified fangs. It may also make the foe flinch or become paralyzed.' },
      { name: 'Ice Fang', type: PokemonElementType.ice, power: 65, description: 'The user bites with cold-infused fangs. It may also make the foe flinch or freeze.' },
      { name: 'Thrash', type: PokemonElementType.normal, power: 120, description: 'The user rampages and attacks for two to three turns. It then becomes confused, however.' },
      { name: 'Fire Fang', type: PokemonElementType.fire, power: 65, description: 'The user bites with flame-cloaked fangs. It may also make the foe flinch or sustain a burn.' },
    ],
  },
  lugia: {
    flavorText: 'It is said that it quietly spends its time deep at the bottom of the sea because its powers are too strong.',
    stats: { hp: 106, attack: 90, defense: 130, specialAttack: 90, specialDefense: 154, speed: 110 },
    moves: [
      { name: 'Aeroblast', type: PokemonElementType.flying, power: 100, description: 'A vortex of air is shot at the foe to inflict damage. It has a high critical-hit ratio.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Dragon Rush', type: PokemonElementType.dragon, power: 100, description: 'The user tackles the foe while exhibiting overwhelming menace. It may also make the target flinch.' },
      { name: 'Gust', type: PokemonElementType.flying, power: 40, description: 'A gust of wind is whipped up by wings and launched at the foe to inflict damage.' },
    ],
  },
  hooh: {
    flavorText: 'Legends claim this Pokémon flies the world’s skies continuously on its magnificent, seven-colored wings.',
    stats: { hp: 106, attack: 130, defense: 90, specialAttack: 110, specialDefense: 154, speed: 90 },
    moves: [
      { name: 'Sacred Fire', type: PokemonElementType.fire, power: 100, description: 'The foe is razed with a mystical fire of great intensity. It may also leave the target with a burn.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Gust', type: PokemonElementType.flying, power: 40, description: 'A gust of wind is whipped up by wings and launched at the foe to inflict damage.' },
      { name: 'Whirlwind', type: PokemonElementType.normal, power: null, description: 'The foe is blown away, to be replaced by another Pokémon in its party. In the wild, the battle ends.' },
    ],
  },
  celebi: {
    flavorText: 'This Pokémon wanders across time. Grass and trees flourish in the forests in which it has appeared.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Heal Block', type: PokemonElementType.psychic, power: null, description: 'The user prevents the foe from using any HP-recovery moves for five turns.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns, unless it switches out of battle.' },
      { name: 'Healing Wish', type: PokemonElementType.psychic, power: null, description: 'The user faints. In return, the Pokémon taking its place will have its HP restored and status cured.' },
      { name: 'Recover', type: PokemonElementType.normal, power: null, description: 'A self-healing move. The user restores its own HP by up to half of its max HP.' },
    ],
  },
  treecko: {
    flavorText: 'It makes its nest in a giant tree in the forest. It ferociously guards against anything nearing its territory. It is said to be the protector of the forest’s trees.',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 65, specialDefense: 55, speed: 70 },
    moves: [
      { name: 'Absorb', type: PokemonElementType.grass, power: 20, description: 'An attack that absorbs half the damage inflicted.' },
      { name: 'Mega Drain', type: PokemonElementType.grass, power: 40, description: 'An attack that absorbs half the damage inflicted.' },
      { name: 'Pound', type: PokemonElementType.normal, power: 40, description: 'Pounds the foe with forelegs or tail.' },
      { name: 'Slam', type: PokemonElementType.normal, power: 80, description: 'Slams the foe with a long tail, vine, etc.' },
    ],
  },
  grovyle: {
    flavorText: 'Leaves grow out of this POKéMON’s body. They help obscure a GROVYLE from the eyes of its enemies while it is in a thickly overgrown forest.',
    stats: { hp: 50, attack: 65, defense: 45, specialAttack: 85, specialDefense: 65, speed: 95 },
    moves: [
      { name: 'Leaf Blade', type: PokemonElementType.grass, power: 90, description: 'Slashes with a sharp leaf. High critical-hit ratio.' },
      { name: 'Absorb', type: PokemonElementType.grass, power: 20, description: 'An attack that absorbs half the damage inflicted.' },
      { name: 'Pound', type: PokemonElementType.normal, power: 40, description: 'Pounds the foe with forelegs or tail.' },
      { name: 'Slam', type: PokemonElementType.normal, power: 80, description: 'Slams the foe with a long tail, vine, etc.' },
    ],
  },
  sceptile: {
    flavorText: 'In the jungle, its power is without equal. This POKéMON carefully grows trees and plants. It regulates its body temperature by basking in sunlight.',
    stats: { hp: 70, attack: 85, defense: 65, specialAttack: 105, specialDefense: 85, speed: 120 },
    moves: [
      { name: 'Leaf Blade', type: PokemonElementType.grass, power: 90, description: 'Slashes with a sharp leaf. High critical-hit ratio.' },
      { name: 'Absorb', type: PokemonElementType.grass, power: 20, description: 'An attack that absorbs half the damage inflicted.' },
      { name: 'Pound', type: PokemonElementType.normal, power: 40, description: 'Pounds the foe with forelegs or tail.' },
      { name: 'Slam', type: PokemonElementType.normal, power: 80, description: 'Slams the foe with a long tail, vine, etc.' },
    ],
  },
  torchic: {
    flavorText: 'If attacked, it strikes back by spitting balls of fire it forms in its stomach. A TORCHIC dislikes darkness because it can’t see its surroundings.',
    stats: { hp: 45, attack: 60, defense: 40, specialAttack: 70, specialDefense: 50, speed: 45 },
    moves: [
      { name: 'Mirror Move', type: PokemonElementType.flying, power: null, description: 'Counters the foe’s attack with the same move.' },
      { name: 'Peck', type: PokemonElementType.flying, power: 35, description: 'Attacks the foe with a jabbing beak, etc.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'A weak fire attack that may inflict a burn.' },
      { name: 'Fire Spin', type: PokemonElementType.fire, power: 35, description: 'Traps the foe in a ring of fire for 2 to 5 turns.' },
    ],
  },
  combusken: {
    flavorText: 'It lashes out with 10 kicks per second. Its strong fighting instinct compels it to keep up its offensive until the opponent gives up.',
    stats: { hp: 60, attack: 85, defense: 60, specialAttack: 85, specialDefense: 60, speed: 55 },
    moves: [
      { name: 'Sky Uppercut', type: PokemonElementType.fighting, power: 85, description: 'An uppercut thrown as if leaping into the sky.' },
      { name: 'Mirror Move', type: PokemonElementType.flying, power: null, description: 'Counters the foe’s attack with the same move.' },
      { name: 'Double Kick', type: PokemonElementType.fighting, power: 30, description: 'A double-kicking attack that strikes the foe twice.' },
      { name: 'Peck', type: PokemonElementType.flying, power: 35, description: 'Attacks the foe with a jabbing beak, etc.' },
    ],
  },
  blaziken: {
    flavorText: 'It learns martial arts that use punches and kicks. Every several years, its old feathers burn off, and new, supple feathers grow back in their place.',
    stats: { hp: 80, attack: 120, defense: 70, specialAttack: 110, specialDefense: 70, speed: 80 },
    moves: [
      { name: 'Sky Uppercut', type: PokemonElementType.fighting, power: 85, description: 'An uppercut thrown as if leaping into the sky.' },
      { name: 'Blaze Kick', type: PokemonElementType.fire, power: 85, description: 'A kick with a high critical-hit ratio. May cause a burn.' },
      { name: 'Mirror Move', type: PokemonElementType.flying, power: null, description: 'Counters the foe’s attack with the same move.' },
      { name: 'Double Kick', type: PokemonElementType.fighting, power: 30, description: 'A double-kicking attack that strikes the foe twice.' },
    ],
  },
  marshtomp: {
    flavorText: 'Its toughened hind legs enable it to stand upright. Because it weakens if its skin dries out, it replenishes fluids by playing in mud.',
    stats: { hp: 70, attack: 85, defense: 70, specialAttack: 60, specialDefense: 70, speed: 50 },
    moves: [
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'Covers the user in mud to raise electrical resistance.' },
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Negates the foe’s efforts to heighten evasiveness.' },
      { name: 'Muddy Water', type: PokemonElementType.water, power: 90, description: 'Attacks with muddy water. May lower accuracy.' },
      { name: 'Water Gun', type: PokemonElementType.water, power: 40, description: 'Squirts water to attack the foe.' },
    ],
  },
  mudkip: {
    flavorText: 'On land, it can powerfully lift large boulders by planting its four feet and heaving. It sleeps by burying itself in soil at the water’s edge.',
    stats: { hp: 50, attack: 70, defense: 50, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'Covers the user in mud to raise electrical resistance.' },
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Negates the foe’s efforts to heighten evasiveness.' },
      { name: 'Water Gun', type: PokemonElementType.water, power: 40, description: 'Squirts water to attack the foe.' },
      { name: 'Whirlpool', type: PokemonElementType.water, power: 35, description: 'Traps and hurts the foe in a whirlpool for 2 to 5 turns.' },
    ],
  },
  swampert: {
    flavorText: 'If it senses the approach of a storm and a tidal wave, it protects its seaside nest by piling up boulders. It swims as fast as a jet ski.',
    stats: { hp: 100, attack: 110, defense: 90, specialAttack: 85, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'Covers the user in mud to raise electrical resistance.' },
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Negates the foe’s efforts to heighten evasiveness.' },
      { name: 'Muddy Water', type: PokemonElementType.water, power: 90, description: 'Attacks with muddy water. May lower accuracy.' },
      { name: 'Water Gun', type: PokemonElementType.water, power: 40, description: 'Squirts water to attack the foe.' },
    ],
  },
  poochyena: {
    flavorText: 'It savagely threatens foes with bared fangs. It chases after fleeing targets tenaciously. It turns tail and runs, however, if the foe strikes back.',
    stats: { hp: 35, attack: 55, defense: 35, specialAttack: 30, specialDefense: 30, speed: 35 },
    moves: [
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Negates the foe’s efforts to heighten evasiveness.' },
      { name: 'Howl', type: PokemonElementType.normal, power: null, description: 'Howls to raise the spirit and boosts ATTACK.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'Reduces the foe’s accuracy by hurling sand in its face.' },
      { name: 'Bite', type: PokemonElementType.dark, power: 60, description: 'Bites with vicious fangs. May cause flinching.' },
    ],
  },
  mightyena: {
    flavorText: 'In the wild, MIGHTYENA live in a pack. They never defy their leader’s orders. They defeat foes with perfectly coordinated teamwork.',
    stats: { hp: 70, attack: 90, defense: 70, specialAttack: 60, specialDefense: 60, speed: 70 },
    moves: [
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Negates the foe’s efforts to heighten evasiveness.' },
      { name: 'Howl', type: PokemonElementType.normal, power: null, description: 'Howls to raise the spirit and boosts ATTACK.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'Reduces the foe’s accuracy by hurling sand in its face.' },
      { name: 'Bite', type: PokemonElementType.dark, power: 60, description: 'Bites with vicious fangs. May cause flinching.' },
    ],
  },
  zigzagoon: {
    flavorText: 'Rubbing its nose against the ground, it always wanders about back and forth in search of something. It is distinguished by the zigzag footprints it leaves.',
    stats: { hp: 38, attack: 30, defense: 41, specialAttack: 30, specialDefense: 41, speed: 60 },
    moves: [
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Negates the foe’s efforts to heighten evasiveness.' },
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'Covers the user in mud to raise electrical resistance.' },
      { name: 'Belly Drum', type: PokemonElementType.normal, power: null, description: 'Maximizes ATTACK while sacrificing HP.' },
      { name: 'Pin Missile', type: PokemonElementType.bug, power: 25, description: 'Sharp pins are fired to strike 2 to 5 times.' },
    ],
  },
  linoone: {
    flavorText: 'It is exceedingly fast if it only has to run in a straight line. When it spots pond-dwelling prey underwater, it quickly leaps in and catches it with its sharp claws.',
    stats: { hp: 78, attack: 70, defense: 61, specialAttack: 50, specialDefense: 61, speed: 100 },
    moves: [
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Negates the foe’s efforts to heighten evasiveness.' },
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'Covers the user in mud to raise electrical resistance.' },
      { name: 'Belly Drum', type: PokemonElementType.normal, power: null, description: 'Maximizes ATTACK while sacrificing HP.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'Rakes the foe with sharp claws, etc., 2 to 5 times.' },
    ],
  },
  wurmple: {
    flavorText: 'It sticks to tree branches and eats leaves. The thread it spits from its mouth, which becomes gooey when it touches air, slows the movement of its foes.',
    stats: { hp: 45, attack: 45, defense: 35, specialAttack: 20, specialDefense: 30, speed: 20 },
    moves: [
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'A toxic attack with barbs, etc., that may poison.' },
      { name: 'String Shot', type: PokemonElementType.bug, power: null, description: 'Binds the foe with string to reduce its SPEED.' },
      { name: 'Tackle', type: PokemonElementType.normal, power: 40, description: 'Charges the foe with a full-body tackle.' },
    ],
  },
  silcoon: {
    flavorText: 'It prepares for evolution using the energy it stored while it was a WURMPLE. It keeps watch over the surroundings with its two eyes.',
    stats: { hp: 50, attack: 35, defense: 55, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'Stiffens the body’s muscles to raise DEFENSE.' },
    ],
  },
  beautifly: {
    flavorText: 'Its colorfully patterned wings are its most prominent feature. It flies through flower-covered fields collecting pollen. It attacks ferociously when angered.',
    stats: { hp: 60, attack: 70, defense: 50, specialAttack: 100, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'Morning Sun', type: PokemonElementType.normal, power: null, description: 'Restores HP. The amount varies with the weather.' },
      { name: 'Silver Wind', type: PokemonElementType.bug, power: 60, description: 'A powdery attack that may raise abilities.' },
      { name: 'Stun Spore', type: PokemonElementType.grass, power: null, description: 'Scatters a powder that may paralyze the foe.' },
      { name: 'Gust', type: PokemonElementType.flying, power: 40, description: 'Strikes the foe with a gust of wind whipped up by wings.' },
    ],
  },
  cascoon: {
    flavorText: 'To avoid detection by its enemies, it hides motionlessly beneath large leaves and in the gaps of branches. It also attaches dead leaves to its body for camouflage.',
    stats: { hp: 50, attack: 35, defense: 55, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'Stiffens the body’s muscles to raise DEFENSE.' },
    ],
  },
  dustox: {
    flavorText: 'It is a nocturnal POKéMON that flies from fields and mountains to the attraction of streetlights at night. It looses highly toxic powder from its wings.',
    stats: { hp: 60, attack: 50, defense: 70, specialAttack: 50, specialDefense: 90, speed: 65 },
    moves: [
      { name: 'Moonlight', type: PokemonElementType.normal, power: null, description: 'Restores HP. The amount varies with the weather.' },
      { name: 'Silver Wind', type: PokemonElementType.bug, power: 60, description: 'A powdery attack that may raise abilities.' },
      { name: 'Gust', type: PokemonElementType.flying, power: 40, description: 'Strikes the foe with a gust of wind whipped up by wings.' },
      { name: 'Whirlwind', type: PokemonElementType.normal, power: null, description: 'Blows away the foe with wind and ends the battle.' },
    ],
  },
  lotad: {
    flavorText: 'This POKéMON lives in ponds with clean water. It is known to ferry small POKéMON across ponds by carrying them on the broad leaf on its head.',
    stats: { hp: 40, attack: 30, defense: 30, specialAttack: 40, specialDefense: 50, speed: 30 },
    moves: [
      { name: 'Mist', type: PokemonElementType.ice, power: null, description: 'Creates a mist that stops reduction of abilities.' },
      { name: 'Absorb', type: PokemonElementType.grass, power: 20, description: 'An attack that absorbs half the damage inflicted.' },
      { name: 'Mega Drain', type: PokemonElementType.grass, power: 40, description: 'An attack that absorbs half the damage inflicted.' },
      { name: 'Nature Power', type: PokemonElementType.normal, power: null, description: 'The type of attack varies depending on the location.' },
    ],
  },
  lombre: {
    flavorText: 'In the evening, it takes great delight in popping out of rivers and startling people. It feeds on aquatic moss that grows on rocks in the riverbed.',
    stats: { hp: 60, attack: 50, defense: 50, specialAttack: 60, specialDefense: 70, speed: 50 },
    moves: [
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'The user becomes soaked to raise resistance to fire.' },
      { name: 'Absorb', type: PokemonElementType.grass, power: 20, description: 'An attack that absorbs half the damage inflicted.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'Rakes the foe with sharp claws, etc., 2 to 5 times.' },
      { name: 'Fake Out', type: PokemonElementType.normal, power: 40, description: 'A 1st-turn, 1st-strike move that causes flinching.' },
    ],
  },
  ludicolo: {
    flavorText: 'When it hears festive music, all the cells in its body become stimulated, and it begins moving in rhythm. It does not quail even when it faces a tough opponent.',
    stats: { hp: 80, attack: 70, defense: 70, specialAttack: 90, specialDefense: 100, speed: 70 },
    moves: [
      { name: 'Absorb', type: PokemonElementType.grass, power: 20, description: 'An attack that absorbs half the damage inflicted.' },
      { name: 'Nature Power', type: PokemonElementType.normal, power: null, description: 'The type of attack varies depending on the location.' },
      { name: 'Astonish', type: PokemonElementType.ghost, power: 30, description: 'An attack that may shock the foe into flinching.' },
      { name: 'Growl', type: PokemonElementType.normal, power: null, description: 'Growls cutely to reduce the foe’s ATTACK.' },
    ],
  },
  seedot: {
    flavorText: 'It hangs off branches and absorbs nutrients. When it finishes eating, its body becomes so heavy that it drops to the ground with a thump.',
    stats: { hp: 40, attack: 40, defense: 50, specialAttack: 30, specialDefense: 30, speed: 30 },
    moves: [
      { name: 'Growth', type: PokemonElementType.normal, power: null, description: 'Forces the body to grow and heightens SP. ATK.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'Stiffens the body’s muscles to raise DEFENSE.' },
      { name: 'Synthesis', type: PokemonElementType.grass, power: null, description: 'Restores HP. The amount varies with the weather.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'Inflicts severe damage but makes the user faint.' },
    ],
  },
  nuzleaf: {
    flavorText: 'A forest-dwelling POKéMON that is skilled at climbing trees. Its long and pointed nose is its weak point. It loses power if the nose is gripped.',
    stats: { hp: 70, attack: 70, defense: 40, specialAttack: 60, specialDefense: 40, speed: 60 },
    moves: [
      { name: 'Razor Wind', type: PokemonElementType.normal, power: 80, description: 'A 2-turn move that strikes the foe on the 2nd turn.' },
      { name: 'Extrasensory', type: PokemonElementType.psychic, power: 80, description: 'Attacks with a peculiar power. May cause flinching.' },
      { name: 'Growth', type: PokemonElementType.normal, power: null, description: 'Forces the body to grow and heightens SP. ATK.' },
      { name: 'Fake Out', type: PokemonElementType.normal, power: 40, description: 'A 1st-turn, 1st-strike move that causes flinching.' },
    ],
  },
  shiftry: {
    flavorText: 'It is said to arrive on chilly, wintry winds. Feared from long ago as the guardian of forests, this POKéMON lives in a deep forest where people do not venture.',
    stats: { hp: 90, attack: 100, defense: 60, specialAttack: 90, specialDefense: 60, speed: 80 },
    moves: [
      { name: 'Growth', type: PokemonElementType.normal, power: null, description: 'Forces the body to grow and heightens SP. ATK.' },
      { name: 'Pound', type: PokemonElementType.normal, power: 40, description: 'Pounds the foe with forelegs or tail.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'Stiffens the body’s muscles to raise DEFENSE.' },
      { name: 'Nature Power', type: PokemonElementType.normal, power: null, description: 'The type of attack varies depending on the location.' },
    ],
  },
  taillow: {
    flavorText: 'Although it is small, it is very courageous. It will take on a larger SKARMORY on an equal footing. However, its will weakens if it becomes hungry.',
    stats: { hp: 40, attack: 55, defense: 30, specialAttack: 30, specialDefense: 30, speed: 85 },
    moves: [
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'Strikes the foe with wings spread wide.' },
      { name: 'Peck', type: PokemonElementType.flying, power: 35, description: 'Attacks the foe with a jabbing beak, etc.' },
      { name: 'Focus Energy', type: PokemonElementType.normal, power: null, description: 'Focuses power to raise the critical-hit ratio.' },
      { name: 'Quick Attack', type: PokemonElementType.normal, power: 40, description: 'An extremely fast attack that always strikes first.' },
    ],
  },
  swellow: {
    flavorText: 'A SWELLOW dives upon prey from far above. It never misses its targets. It takes to the skies in search of lands with a warm climate.',
    stats: { hp: 60, attack: 85, defense: 60, specialAttack: 75, specialDefense: 50, speed: 125 },
    moves: [
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'Strikes the foe with wings spread wide.' },
      { name: 'Peck', type: PokemonElementType.flying, power: 35, description: 'Attacks the foe with a jabbing beak, etc.' },
      { name: 'Focus Energy', type: PokemonElementType.normal, power: null, description: 'Focuses power to raise the critical-hit ratio.' },
      { name: 'Quick Attack', type: PokemonElementType.normal, power: 40, description: 'An extremely fast attack that always strikes first.' },
    ],
  },
  wingull: {
    flavorText: 'It makes its nest on a sheer cliff at the edge of the sea. It has trouble keeping its wings flapping in flight. Instead, it soars on updrafts.',
    stats: { hp: 40, attack: 30, defense: 30, specialAttack: 55, specialDefense: 30, speed: 85 },
    moves: [
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'Strikes the foe with wings spread wide.' },
      { name: 'Mist', type: PokemonElementType.ice, power: null, description: 'Creates a mist that stops reduction of abilities.' },
      { name: 'Supersonic', type: PokemonElementType.normal, power: null, description: 'Emits bizarre sound waves that may confuse the foe.' },
      { name: 'Pursuit', type: PokemonElementType.dark, power: 40, description: 'Inflicts bad damage if used on a foe switching out.' },
    ],
  },
  pelipper: {
    flavorText: 'It skims the tops of waves as it flies. When it spots prey, it uses its large beak to scoop up the victim with water. It protects its eggs in its beak.',
    stats: { hp: 60, attack: 50, defense: 100, specialAttack: 95, specialDefense: 70, speed: 65 },
    moves: [
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'The user becomes soaked to raise resistance to fire.' },
      { name: 'Spit Up', type: PokemonElementType.normal, power: null, description: 'Releases stockpiled power (the more the better).' },
      { name: 'Swallow', type: PokemonElementType.normal, power: null, description: 'Absorbs stockpiled power and restores HP.' },
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'Strikes the foe with wings spread wide.' },
    ],
  },
  ralts: {
    flavorText: 'A RALTS has the power to sense the emotions of people and POKéMON with the horns on its head. It takes cover if it senses any hostility.',
    stats: { hp: 28, attack: 25, defense: 25, specialAttack: 45, specialDefense: 35, speed: 40 },
    moves: [
      { name: 'Teleport', type: PokemonElementType.psychic, power: null, description: 'A psychic move for fleeing from battle instantly.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'A hypnotizing move that may induce sleep.' },
      { name: 'Confusion', type: PokemonElementType.psychic, power: 50, description: 'A psychic attack that may cause confusion.' },
      { name: 'Future Sight', type: PokemonElementType.psychic, power: 120, description: 'Heightens inner power to strike 2 turns later.' },
    ],
  },
  kirlia: {
    flavorText: 'A KIRLIA has the psychic power to create a rip in the dimensions and see into the future. It is said to dance with pleasure on sunny mornings.',
    stats: { hp: 38, attack: 35, defense: 35, specialAttack: 65, specialDefense: 55, speed: 50 },
    moves: [
      { name: 'Teleport', type: PokemonElementType.psychic, power: null, description: 'A psychic move for fleeing from battle instantly.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'A hypnotizing move that may induce sleep.' },
      { name: 'Confusion', type: PokemonElementType.psychic, power: 50, description: 'A psychic attack that may cause confusion.' },
      { name: 'Future Sight', type: PokemonElementType.psychic, power: 120, description: 'Heightens inner power to strike 2 turns later.' },
    ],
  },
  gardevoir: {
    flavorText: 'It apparently does not feel the pull of gravity because it supports itself with psychic power. It will give its life to protect its TRAINER.',
    stats: { hp: 68, attack: 65, defense: 65, specialAttack: 125, specialDefense: 115, speed: 80 },
    moves: [
      { name: 'Teleport', type: PokemonElementType.psychic, power: null, description: 'A psychic move for fleeing from battle instantly.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'A hypnotizing move that may induce sleep.' },
      { name: 'Confusion', type: PokemonElementType.psychic, power: 50, description: 'A psychic attack that may cause confusion.' },
      { name: 'Future Sight', type: PokemonElementType.psychic, power: 120, description: 'Heightens inner power to strike 2 turns later.' },
    ],
  },
  surskit: {
    flavorText: 'They gather on puddles after evening downpours, gliding across the surface of water as if sliding. It secretes honey with a sweet aroma from its head.',
    stats: { hp: 40, attack: 30, defense: 32, specialAttack: 50, specialDefense: 52, speed: 65 },
    moves: [
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'The user becomes soaked to raise resistance to fire.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'An attack using bubbles. May lower the foe’s SPEED.' },
      { name: 'Mist', type: PokemonElementType.ice, power: null, description: 'Creates a mist that stops reduction of abilities.' },
      { name: 'Sweet Scent', type: PokemonElementType.normal, power: null, description: 'Allures the foe to reduce evasiveness.' },
    ],
  },
  masquerain: {
    flavorText: 'It intimidates foes with the large eyelike patterns on its antennae. Because it can’t fly if its wings get wet, it shelters itself from rain under large trees and eaves.',
    stats: { hp: 70, attack: 60, defense: 62, specialAttack: 100, specialDefense: 82, speed: 80 },
    moves: [
      { name: 'Silver Wind', type: PokemonElementType.bug, power: 60, description: 'A powdery attack that may raise abilities.' },
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'The user becomes soaked to raise resistance to fire.' },
      { name: 'Stun Spore', type: PokemonElementType.grass, power: null, description: 'Scatters a powder that may paralyze the foe.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'An attack using bubbles. May lower the foe’s SPEED.' },
    ],
  },
  shroomish: {
    flavorText: 'It loves to eat damp, composted soil in forests. If you enter a forest after a long rain, you can see many SHROOMISH feasting on composted soil.',
    stats: { hp: 60, attack: 40, defense: 60, specialAttack: 40, specialDefense: 60, speed: 35 },
    moves: [
      { name: 'Spore', type: PokemonElementType.grass, power: null, description: 'Scatters a cloud of spores that always induce sleep.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'Scatters a toxic powder that may poison the foe.' },
      { name: 'Stun Spore', type: PokemonElementType.grass, power: null, description: 'Scatters a powder that may paralyze the foe.' },
      { name: 'Growth', type: PokemonElementType.normal, power: null, description: 'Forces the body to grow and heightens SP. ATK.' },
    ],
  },
  breloom: {
    flavorText: 'It scatters spores from holes in the cap on its head. It loves warm and humid climates. It feeds on trees and plants in fields and forests.',
    stats: { hp: 60, attack: 130, defense: 80, specialAttack: 60, specialDefense: 60, speed: 70 },
    moves: [
      { name: 'Sky Uppercut', type: PokemonElementType.fighting, power: 85, description: 'An uppercut thrown as if leaping into the sky.' },
      { name: 'Mach Punch', type: PokemonElementType.fighting, power: 40, description: 'A punch is thrown at wicked speed to strike first.' },
      { name: 'Mind Reader', type: PokemonElementType.normal, power: null, description: 'Senses the foe’s action to ensure the next move’s hit.' },
      { name: 'Stun Spore', type: PokemonElementType.grass, power: null, description: 'Scatters a powder that may paralyze the foe.' },
    ],
  },
  nincada: {
    flavorText: 'It makes its nest at the roots of a mighty tree. Using its whiskerlike antennae, it probes its surroundings in the pitch-black darkness of soil.',
    stats: { hp: 31, attack: 45, defense: 90, specialAttack: 30, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'Mind Reader', type: PokemonElementType.normal, power: null, description: 'Senses the foe’s action to ensure the next move’s hit.' },
      { name: 'Leech Life', type: PokemonElementType.bug, power: 80, description: 'An attack that steals half the damage inflicted.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'Rakes the foe with sharp claws, etc., 2 to 5 times.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'Stiffens the body’s muscles to raise DEFENSE.' },
    ],
  },
  slakoth: {
    flavorText: 'It sleeps virtually all day and night long. It doesn’t change its nest its entire life, but it sometimes travels great distances by swimming in rivers.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 35, specialDefense: 35, speed: 30 },
    moves: [
      { name: 'Slack Off', type: PokemonElementType.normal, power: null, description: 'Slacks off and restores half the maximum HP.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'Draws the foe close, then strikes without fail.' },
      { name: 'Yawn', type: PokemonElementType.normal, power: null, description: 'Lulls the foe into yawning, then sleeping next turn.' },
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Scratches the foe with sharp claws.' },
    ],
  },
  vigoroth: {
    flavorText: 'It can’t keep still because its blood boils with energy. It runs through the fields and mountains all day to calm itself. If it doesn’t, it can’t sleep at night.',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 55, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'Rakes the foe with sharp claws, etc., 2 to 5 times.' },
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Scratches the foe with sharp claws.' },
      { name: 'Slash', type: PokemonElementType.normal, power: 70, description: 'Slashes with claws, etc. Has a high critical-hit ratio.' },
      { name: 'Focus Energy', type: PokemonElementType.normal, power: null, description: 'Focuses power to raise the critical-hit ratio.' },
    ],
  },
  slaking: {
    flavorText: 'Hordes of SLAKING gather around trees when fruits come into season. They wait around patiently for ripened fruits to fall out of the trees.',
    stats: { hp: 150, attack: 160, defense: 100, specialAttack: 95, specialDefense: 65, speed: 100 },
    moves: [
      { name: 'Slack Off', type: PokemonElementType.normal, power: null, description: 'Slacks off and restores half the maximum HP.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'Draws the foe close, then strikes without fail.' },
      { name: 'Yawn', type: PokemonElementType.normal, power: null, description: 'Lulls the foe into yawning, then sleeping next turn.' },
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Scratches the foe with sharp claws.' },
    ],
  },
  ninjask: {
    flavorText: 'Because it darts about vigorously at high speed, it is very difficult to see. Hearing its distinctive cries for too long induces a headache.',
    stats: { hp: 61, attack: 90, defense: 45, specialAttack: 50, specialDefense: 50, speed: 160 },
    moves: [
      { name: 'Mind Reader', type: PokemonElementType.normal, power: null, description: 'Senses the foe’s action to ensure the next move’s hit.' },
      { name: 'Leech Life', type: PokemonElementType.bug, power: 80, description: 'An attack that steals half the damage inflicted.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'Rakes the foe with sharp claws, etc., 2 to 5 times.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'Stiffens the body’s muscles to raise DEFENSE.' },
    ],
  },
  shedinja: {
    flavorText: 'A peculiar POKéMON that floats in air even though its wings remain completely still. The inside of its body is hollow and utterly dark.',
    stats: { hp: 1, attack: 90, defense: 45, specialAttack: 30, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'Grudge', type: PokemonElementType.ghost, power: null, description: 'If the user faints, deletes all PP of foe’s last move.' },
      { name: 'Mind Reader', type: PokemonElementType.normal, power: null, description: 'Senses the foe’s action to ensure the next move’s hit.' },
      { name: 'Leech Life', type: PokemonElementType.bug, power: 80, description: 'An attack that steals half the damage inflicted.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'Rakes the foe with sharp claws, etc., 2 to 5 times.' },
    ],
  },
  whismur: {
    flavorText: 'Its cries equal a jet plane in volume. It inhales through its ear canals. Because of this system, it can cry continually without having to catch its breath.',
    stats: { hp: 64, attack: 51, defense: 23, specialAttack: 51, specialDefense: 23, speed: 28 },
    moves: [
      { name: 'Howl', type: PokemonElementType.normal, power: null, description: 'Howls to raise the spirit and boosts ATTACK.' },
      { name: 'Stomp', type: PokemonElementType.normal, power: 65, description: 'Stomps the enemy with a big foot. May cause flinching.' },
      { name: 'Supersonic', type: PokemonElementType.normal, power: null, description: 'Emits bizarre sound waves that may confuse the foe.' },
      { name: 'Pound', type: PokemonElementType.normal, power: 40, description: 'Pounds the foe with forelegs or tail.' },
    ],
  },
  loudred: {
    flavorText: 'It positions the round speakers on its head to assail foes with ultrasonic waves at massive volume. It builds power by stomping the ground.',
    stats: { hp: 84, attack: 71, defense: 43, specialAttack: 71, specialDefense: 43, speed: 48 },
    moves: [
      { name: 'Howl', type: PokemonElementType.normal, power: null, description: 'Howls to raise the spirit and boosts ATTACK.' },
      { name: 'Stomp', type: PokemonElementType.normal, power: 65, description: 'Stomps the enemy with a big foot. May cause flinching.' },
      { name: 'Supersonic', type: PokemonElementType.normal, power: null, description: 'Emits bizarre sound waves that may confuse the foe.' },
      { name: 'Pound', type: PokemonElementType.normal, power: 40, description: 'Pounds the foe with forelegs or tail.' },
    ],
  },
  exploud: {
    flavorText: 'It has sound-generating organs all over its body. It communicates with others by adjusting the tone and volume of the cries it emits.',
    stats: { hp: 104, attack: 91, defense: 63, specialAttack: 91, specialDefense: 73, speed: 68 },
    moves: [
      { name: 'Howl', type: PokemonElementType.normal, power: null, description: 'Howls to raise the spirit and boosts ATTACK.' },
      { name: 'Stomp', type: PokemonElementType.normal, power: 65, description: 'Stomps the enemy with a big foot. May cause flinching.' },
      { name: 'Supersonic', type: PokemonElementType.normal, power: null, description: 'Emits bizarre sound waves that may confuse the foe.' },
      { name: 'Pound', type: PokemonElementType.normal, power: 40, description: 'Pounds the foe with forelegs or tail.' },
    ],
  },
  makuhita: {
    flavorText: 'It loves to toughen up its body above all else. If you hear quaking rumbles in a cave, it is the sound of MAKUHITA undertaking strenuous training.',
    stats: { hp: 72, attack: 60, defense: 30, specialAttack: 20, specialDefense: 30, speed: 25 },
    moves: [
      { name: 'Arm Thrust', type: PokemonElementType.fighting, power: 15, description: 'Straight-arm punches that strike the foe 2 to 5 times.' },
      { name: 'Vital Throw', type: PokemonElementType.fighting, power: 70, description: 'Makes the user’s move last, but it never misses.' },
      { name: 'Smelling Salts', type: PokemonElementType.normal, power: 70, description: 'Powerful against paralyzed foes, but also heals them.' },
      { name: 'Belly Drum', type: PokemonElementType.normal, power: null, description: 'Maximizes ATTACK while sacrificing HP.' },
    ],
  },
  hariyama: {
    flavorText: 'It has the habit of challenging others without hesitation to tests of strength. It’s been known to stand on train tracks and stop trains using forearm thrusts.',
    stats: { hp: 144, attack: 120, defense: 60, specialAttack: 40, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'Arm Thrust', type: PokemonElementType.fighting, power: 15, description: 'Straight-arm punches that strike the foe 2 to 5 times.' },
      { name: 'Vital Throw', type: PokemonElementType.fighting, power: 70, description: 'Makes the user’s move last, but it never misses.' },
      { name: 'Smelling Salts', type: PokemonElementType.normal, power: 70, description: 'Powerful against paralyzed foes, but also heals them.' },
      { name: 'Belly Drum', type: PokemonElementType.normal, power: null, description: 'Maximizes ATTACK while sacrificing HP.' },
    ],
  },
  azurill: {
    flavorText: 'Its tail, which is packed with nutrition, is very bouncy like a rubber ball. On sunny days they gather at the edge of water and splash about for fun.',
    stats: { hp: 50, attack: 20, defense: 40, specialAttack: 20, specialDefense: 40, speed: 20 },
    moves: [
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'It’s just a splash... Has no effect whatsoever.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'An attack using bubbles. May lower the foe’s SPEED.' },
      { name: 'Slam', type: PokemonElementType.normal, power: 80, description: 'Slams the foe with a long tail, vine, etc.' },
      { name: 'Tail Whip', type: PokemonElementType.normal, power: null, description: 'Wags the tail to lower the foe’s DEFENSE.' },
    ],
  },
  nosepass: {
    flavorText: 'Its body emits a powerful magnetism. It feeds on prey that is pulled in by the force. Its magnetism is stronger in cold seasons.',
    stats: { hp: 30, attack: 45, defense: 135, specialAttack: 45, specialDefense: 90, speed: 30 },
    moves: [
      { name: 'Lock On', type: PokemonElementType.normal, power: null, description: 'Locks on to the foe to ensure the next move hits.' },
      { name: 'Rock Throw', type: PokemonElementType.rock, power: 50, description: 'Throws small rocks to strike the foe.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'Stiffens the body’s muscles to raise DEFENSE.' },
      { name: 'Zap Cannon', type: PokemonElementType.electric, power: 120, description: 'Powerful and sure to cause paralysis, but inaccurate.' },
    ],
  },
  delcatty: {
    flavorText: 'Rather than keeping a permanent lair, it habitually seeks comfortable spots and sleeps there. It is nocturnal and becomes active at dusk.',
    stats: { hp: 70, attack: 65, defense: 65, specialAttack: 55, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'Double Slap', type: PokemonElementType.normal, power: 15, description: 'Repeatedly slaps the foe 2 to 5 times.' },
      { name: 'Sing', type: PokemonElementType.normal, power: null, description: 'A soothing song lulls the foe into a deep slumber.' },
      { name: 'Growl', type: PokemonElementType.normal, power: null, description: 'Growls cutely to reduce the foe’s ATTACK.' },
      { name: 'Attract', type: PokemonElementType.normal, power: null, description: 'Makes the opposite gender less likely to attack.' },
    ],
  },
  skitty: {
    flavorText: 'A SKITTY’s adorably cute behavior makes it highly popular. In battle, it makes its tail puff out. It threatens foes with a sharp growl.',
    stats: { hp: 50, attack: 45, defense: 45, specialAttack: 35, specialDefense: 35, speed: 50 },
    moves: [
      { name: 'Assist', type: PokemonElementType.normal, power: null, description: 'Attacks randomly with one of the partner’s moves.' },
      { name: 'Double Slap', type: PokemonElementType.normal, power: 15, description: 'Repeatedly slaps the foe 2 to 5 times.' },
      { name: 'Sing', type: PokemonElementType.normal, power: null, description: 'A soothing song lulls the foe into a deep slumber.' },
      { name: 'Heal Bell', type: PokemonElementType.normal, power: null, description: 'Chimes soothingly to heal all status abnormalities.' },
    ],
  },
  sableye: {
    flavorText: 'It digs branching holes in caves using its sharp claws in search of food--raw gems. A SABLEYE lurks in darkness and is seen only rarely.',
    stats: { hp: 50, attack: 75, defense: 75, specialAttack: 65, specialDefense: 65, speed: 50 },
    moves: [
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Negates the foe’s efforts to heighten evasiveness.' },
      { name: 'Mean Look', type: PokemonElementType.normal, power: null, description: 'Fixes the foe with a mean look that prevents escape.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'Rakes the foe with sharp claws, etc., 2 to 5 times.' },
      { name: 'Fake Out', type: PokemonElementType.normal, power: 40, description: 'A 1st-turn, 1st-strike move that causes flinching.' },
    ],
  },
  mawile: {
    flavorText: 'Its giant jaws are actually steel horns that transformed. It fools foes into complacency with its adorable gestures, then chomps them with its huge jaws.',
    stats: { hp: 50, attack: 85, defense: 85, specialAttack: 55, specialDefense: 55, speed: 50 },
    moves: [
      { name: 'Vice Grip', type: PokemonElementType.normal, power: 55, description: 'Grips the foe with large and powerful pincers.' },
      { name: 'Spit Up', type: PokemonElementType.normal, power: null, description: 'Releases stockpiled power (the more the better).' },
      { name: 'Swallow', type: PokemonElementType.normal, power: null, description: 'Absorbs stockpiled power and restores HP.' },
      { name: 'Stockpile', type: PokemonElementType.normal, power: null, description: 'Charges up power for up to 3 turns.' },
    ],
  },
  aron: {
    flavorText: 'A POKéMON that is clad in steel armor. A new suit of armor is made when it evolves. The old, discarded armor is salvaged as metal for making iron products.',
    stats: { hp: 50, attack: 70, defense: 100, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: 'Metal Sound', type: PokemonElementType.steel, power: null, description: 'Emits a horrible screech that sharply lowers SP. DEF.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'Stiffens the body’s muscles to raise DEFENSE.' },
      { name: 'Metal Claw', type: PokemonElementType.steel, power: 50, description: 'A claw attack that may raise the user’s ATTACK.' },
      { name: 'Roar', type: PokemonElementType.normal, power: null, description: 'Makes the foe flee to end the battle.' },
    ],
  },
  lairon: {
    flavorText: 'When two LAIRON meet in the wild, they fight for territory by bashing into each other with their steel bodies. The sound of their collision carries for miles.',
    stats: { hp: 60, attack: 90, defense: 140, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'Metal Sound', type: PokemonElementType.steel, power: null, description: 'Emits a horrible screech that sharply lowers SP. DEF.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'Stiffens the body’s muscles to raise DEFENSE.' },
      { name: 'Metal Claw', type: PokemonElementType.steel, power: 50, description: 'A claw attack that may raise the user’s ATTACK.' },
      { name: 'Roar', type: PokemonElementType.normal, power: null, description: 'Makes the foe flee to end the battle.' },
    ],
  },
  aggron: {
    flavorText: 'Its iron horns grow longer a little at a time. They are used to determine the AGGRON’s age. The gouges in its armor are worn with pride as mementos from battles.',
    stats: { hp: 70, attack: 110, defense: 180, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'Metal Sound', type: PokemonElementType.steel, power: null, description: 'Emits a horrible screech that sharply lowers SP. DEF.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'Stiffens the body’s muscles to raise DEFENSE.' },
      { name: 'Metal Claw', type: PokemonElementType.steel, power: 50, description: 'A claw attack that may raise the user’s ATTACK.' },
      { name: 'Roar', type: PokemonElementType.normal, power: null, description: 'Makes the foe flee to end the battle.' },
    ],
  },
  meditite: {
    flavorText: 'It continually meditates for hours every day. As a result of rigorous and dedicated yoga training, it has tempered its spiritual power so much it can fly.',
    stats: { hp: 30, attack: 40, defense: 55, specialAttack: 40, specialDefense: 55, speed: 60 },
    moves: [
      { name: 'Meditate', type: PokemonElementType.psychic, power: null, description: 'Meditates in a peaceful fashion to raise ATTACK.' },
      { name: 'Mind Reader', type: PokemonElementType.normal, power: null, description: 'Senses the foe’s action to ensure the next move’s hit.' },
      { name: 'High Jump Kick', type: PokemonElementType.fighting, power: 130, description: 'A jumping knee kick. If it misses, the user is hurt.' },
      { name: 'Recover', type: PokemonElementType.normal, power: null, description: 'Recovers up to half the user’s maximum HP.' },
    ],
  },
  medicham: {
    flavorText: 'Through crushingly harsh yoga training, it gained the power to foretell its foe’s actions. It battles with elegant, dance-like movement.',
    stats: { hp: 60, attack: 60, defense: 75, specialAttack: 60, specialDefense: 75, speed: 80 },
    moves: [
      { name: 'Meditate', type: PokemonElementType.psychic, power: null, description: 'Meditates in a peaceful fashion to raise ATTACK.' },
      { name: 'Mind Reader', type: PokemonElementType.normal, power: null, description: 'Senses the foe’s action to ensure the next move’s hit.' },
      { name: 'High Jump Kick', type: PokemonElementType.fighting, power: 130, description: 'A jumping knee kick. If it misses, the user is hurt.' },
      { name: 'Recover', type: PokemonElementType.normal, power: null, description: 'Recovers up to half the user’s maximum HP.' },
    ],
  },
  electrike: {
    flavorText: 'It generates electricity using friction from the atmosphere. In seasons with especially arid air, its entire body blazes with violent showers of sparks.',
    stats: { hp: 40, attack: 45, defense: 40, specialAttack: 65, specialDefense: 40, speed: 65 },
    moves: [
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Negates the foe’s efforts to heighten evasiveness.' },
      { name: 'Howl', type: PokemonElementType.normal, power: null, description: 'Howls to raise the spirit and boosts ATTACK.' },
      { name: 'Spark', type: PokemonElementType.electric, power: 65, description: 'An electrified tackle that may paralyze the foe.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'Charges power to boost the electric move used next.' },
    ],
  },
  manectric: {
    flavorText: 'Because lightning falls in their vicinities, MANECTRIC were thought to have been born from lightning. In battle, they create thunderclouds.',
    stats: { hp: 70, attack: 75, defense: 60, specialAttack: 105, specialDefense: 60, speed: 105 },
    moves: [
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Negates the foe’s efforts to heighten evasiveness.' },
      { name: 'Howl', type: PokemonElementType.normal, power: null, description: 'Howls to raise the spirit and boosts ATTACK.' },
      { name: 'Spark', type: PokemonElementType.electric, power: 65, description: 'An electrified tackle that may paralyze the foe.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'Charges power to boost the electric move used next.' },
    ],
  },
  plusle: {
    flavorText: 'It has the trait of cheering on its fellow POKéMON. By shorting out the electricity it releases from its paws, it creates pom-poms for cheering.',
    stats: { hp: 60, attack: 50, defense: 40, specialAttack: 85, specialDefense: 75, speed: 95 },
    moves: [
      { name: 'Spark', type: PokemonElementType.electric, power: 65, description: 'An electrified tackle that may paralyze the foe.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'Charges power to boost the electric move used next.' },
      { name: 'Fake Tears', type: PokemonElementType.dark, power: null, description: 'Feigns crying to sharply lower the foe’s SP. DEF.' },
      { name: 'Quick Attack', type: PokemonElementType.normal, power: 40, description: 'An extremely fast attack that always strikes first.' },
    ],
  },
  minun: {
    flavorText: 'At a meeting of POKéMON academics, it was announced that simultaneous exposure to electricity from a PLUSLE and MINUN will promote circulation and boost vitality.',
    stats: { hp: 60, attack: 40, defense: 50, specialAttack: 75, specialDefense: 85, speed: 95 },
    moves: [
      { name: 'Spark', type: PokemonElementType.electric, power: 65, description: 'An electrified tackle that may paralyze the foe.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'Charges power to boost the electric move used next.' },
      { name: 'Quick Attack', type: PokemonElementType.normal, power: 40, description: 'An extremely fast attack that always strikes first.' },
      { name: 'Baton Pass', type: PokemonElementType.normal, power: null, description: 'Switches out the user while keeping effects in play.' },
    ],
  },
  illumise: {
    flavorText: 'A nocturnal POKéMON that becomes active upon nightfall. It leads a VOLBEAT swarm to draw patterns in the night sky. Over 200 different patterns have been confirmed.',
    stats: { hp: 65, attack: 47, defense: 75, specialAttack: 73, specialDefense: 85, speed: 85 },
    moves: [
      { name: 'Moonlight', type: PokemonElementType.normal, power: null, description: 'Restores HP. The amount varies with the weather.' },
      { name: 'Flatter', type: PokemonElementType.dark, power: null, description: 'Confuses the foe, but raises its SP. ATK.' },
      { name: 'Wish', type: PokemonElementType.normal, power: null, description: 'A wish that restores HP. It takes time to work.' },
      { name: 'Sweet Scent', type: PokemonElementType.normal, power: null, description: 'Allures the foe to reduce evasiveness.' },
    ],
  },
  volbeat: {
    flavorText: 'With their taillights lit, VOLBEAT fly in a swarm, drawing geometric designs in the night sky. They move their nests if their pond water becomes dirty.',
    stats: { hp: 65, attack: 73, defense: 75, specialAttack: 47, specialDefense: 85, speed: 85 },
    moves: [
      { name: 'Tail Glow', type: PokemonElementType.bug, power: null, description: 'Flashes a light that sharply raises SP. ATK.' },
      { name: 'Moonlight', type: PokemonElementType.normal, power: null, description: 'Restores HP. The amount varies with the weather.' },
      { name: 'Quick Attack', type: PokemonElementType.normal, power: 40, description: 'An extremely fast attack that always strikes first.' },
      { name: 'Confuse Ray', type: PokemonElementType.ghost, power: null, description: 'A sinister ray that confuses the foe.' },
    ],
  },
  roselia: {
    flavorText: 'A ROSELIA that drinks nutritionally rich springwater blooms with lovely flowers. The fragrance of its flowers has the effect of making its foes careless.',
    stats: { hp: 50, attack: 60, defense: 45, specialAttack: 100, specialDefense: 80, speed: 65 },
    moves: [
      { name: 'Grass Whistle', type: PokemonElementType.grass, power: null, description: 'Lulls the foe into sleep with a pleasant melody.' },
      { name: 'Petal Dance', type: PokemonElementType.grass, power: 120, description: 'A rampage of 2 to 3 turns that confuses the user.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'A toxic attack with barbs, etc., that may poison.' },
      { name: 'Ingrain', type: PokemonElementType.grass, power: null, description: 'Lays roots that restore HP. The user can’t switch out.' },
    ],
  },
  gulpin: {
    flavorText: 'This POKéMON’s stomach fluid can even digest scrap iron. In one gulp, it can swallow something that is as large as itself.',
    stats: { hp: 70, attack: 43, defense: 53, specialAttack: 43, specialDefense: 53, speed: 40 },
    moves: [
      { name: 'Sludge', type: PokemonElementType.poison, power: 65, description: 'Sludge is hurled to inflict damage. May also poison.' },
      { name: 'Poison Gas', type: PokemonElementType.poison, power: null, description: 'Envelops the foe in a toxic gas that may poison.' },
      { name: 'Spit Up', type: PokemonElementType.normal, power: null, description: 'Releases stockpiled power (the more the better).' },
      { name: 'Swallow', type: PokemonElementType.normal, power: null, description: 'Absorbs stockpiled power and restores HP.' },
    ],
  },
  swalot: {
    flavorText: 'Its powerful stomach acid is capable of digesting almost anything. The one thing in the whole world a SWALOT can’t digest is its own stomach.',
    stats: { hp: 100, attack: 73, defense: 83, specialAttack: 73, specialDefense: 83, speed: 55 },
    moves: [
      { name: 'Sludge', type: PokemonElementType.poison, power: 65, description: 'Sludge is hurled to inflict damage. May also poison.' },
      { name: 'Poison Gas', type: PokemonElementType.poison, power: null, description: 'Envelops the foe in a toxic gas that may poison.' },
      { name: 'Spit Up', type: PokemonElementType.normal, power: null, description: 'Releases stockpiled power (the more the better).' },
      { name: 'Swallow', type: PokemonElementType.normal, power: null, description: 'Absorbs stockpiled power and restores HP.' },
    ],
  },
  carvanha: {
    flavorText: 'CARVANHA attack ships in swarms, making them sink. Although it is said to be a very vicious POKéMON, it timidly flees as soon as it finds itself alone.',
    stats: { hp: 45, attack: 90, defense: 20, specialAttack: 65, specialDefense: 20, speed: 65 },
    moves: [
      { name: 'Rage', type: PokemonElementType.normal, power: 20, description: 'Raises the user’s ATTACK every time it is hit.' },
      { name: 'Focus Energy', type: PokemonElementType.normal, power: null, description: 'Focuses power to raise the critical-hit ratio.' },
      { name: 'Screech', type: PokemonElementType.normal, power: null, description: 'Emits a screech to sharply reduce the foe’s DEFENSE.' },
      { name: 'Bite', type: PokemonElementType.dark, power: 60, description: 'Bites with vicious fangs. May cause flinching.' },
    ],
  },
  sharpedo: {
    flavorText: 'The vicious and sly gangster of the sea. Its skin is specially textured to minimize drag in water. Its speed tops out at over 75 miles per hour.',
    stats: { hp: 70, attack: 120, defense: 40, specialAttack: 95, specialDefense: 40, speed: 95 },
    moves: [
      { name: 'Skull Bash', type: PokemonElementType.normal, power: 130, description: 'Tucks in the head, then attacks on the next turn.' },
      { name: 'Slash', type: PokemonElementType.normal, power: 70, description: 'Slashes with claws, etc. Has a high critical-hit ratio.' },
      { name: 'Rage', type: PokemonElementType.normal, power: 20, description: 'Raises the user’s ATTACK every time it is hit.' },
      { name: 'Focus Energy', type: PokemonElementType.normal, power: null, description: 'Focuses power to raise the critical-hit ratio.' },
    ],
  },
  wailmer: {
    flavorText: 'While this POKéMON usually lives in the sea, it can survive on land, although not too long. It loses vitality if its body becomes dried out.',
    stats: { hp: 130, attack: 70, defense: 35, specialAttack: 70, specialDefense: 35, speed: 60 },
    moves: [
      { name: 'Water Spout', type: PokemonElementType.water, power: 150, description: 'Inflicts more damage if the user’s HP is high.' },
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'It’s just a splash... Has no effect whatsoever.' },
      { name: 'Mist', type: PokemonElementType.ice, power: null, description: 'Creates a mist that stops reduction of abilities.' },
      { name: 'Astonish', type: PokemonElementType.ghost, power: 30, description: 'An attack that may shock the foe into flinching.' },
    ],
  },
  wailord: {
    flavorText: 'It breathes through nostrils that it raises above the sea. By inhaling to its maximum capacity, a WAILORD can dive close to 10,000 feet beneath the waves.',
    stats: { hp: 170, attack: 90, defense: 45, specialAttack: 90, specialDefense: 45, speed: 60 },
    moves: [
      { name: 'Water Spout', type: PokemonElementType.water, power: 150, description: 'Inflicts more damage if the user’s HP is high.' },
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'It’s just a splash... Has no effect whatsoever.' },
      { name: 'Mist', type: PokemonElementType.ice, power: null, description: 'Creates a mist that stops reduction of abilities.' },
      { name: 'Astonish', type: PokemonElementType.ghost, power: 30, description: 'An attack that may shock the foe into flinching.' },
    ],
  },
  numel: {
    flavorText: 'A NUMEL stores boiling magma in the hump on its back. It is a hardy POKéMON that can transport a 220-pound load. It has served humans at work since long ago.',
    stats: { hp: 60, attack: 60, defense: 40, specialAttack: 65, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'Magnitude', type: PokemonElementType.ground, power: null, description: 'A ground-shaking attack of random intensity.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'A weak fire attack that may inflict a burn.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'Forgets about something and sharply raises SP. DEF.' },
      { name: 'Focus Energy', type: PokemonElementType.normal, power: null, description: 'Focuses power to raise the critical-hit ratio.' },
    ],
  },
  camerupt: {
    flavorText: 'A POKéMON that lives in the crater of a volcano. Every 10 years, the volcanoes on its back erupt violently. Research is under way on the cause of eruption.',
    stats: { hp: 70, attack: 100, defense: 70, specialAttack: 105, specialDefense: 75, speed: 40 },
    moves: [
      { name: 'Eruption', type: PokemonElementType.fire, power: 150, description: 'The higher the user’s HP, the more damage caused.' },
      { name: 'Magnitude', type: PokemonElementType.ground, power: null, description: 'A ground-shaking attack of random intensity.' },
      { name: 'Fissure', type: PokemonElementType.ground, power: null, description: 'A one-hit KO move that drops the foe in a fissure.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'A weak fire attack that may inflict a burn.' },
    ],
  },
  torkoal: {
    flavorText: 'It battles using energy it gets from burning coal. When loosing smoke from its nostrils, it lets off a sound that is similar to a locomotive’s horn.',
    stats: { hp: 70, attack: 85, defense: 140, specialAttack: 85, specialDefense: 70, speed: 20 },
    moves: [
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'An exhaust-gas attack that may also poison.' },
      { name: 'Smokescreen', type: PokemonElementType.normal, power: null, description: 'Lowers the foe’s accuracy using smoke, ink, etc.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'A weak fire attack that may inflict a burn.' },
      { name: 'Fire Spin', type: PokemonElementType.fire, power: 35, description: 'Traps the foe in a ring of fire for 2 to 5 turns.' },
    ],
  },
  spoink: {
    flavorText: 'A POKéMON that manipulates psychic power at will. It doesn’t stop bouncing even when it is asleep. It loves eating mushrooms that grow underground.',
    stats: { hp: 60, attack: 25, defense: 35, specialAttack: 70, specialDefense: 80, speed: 60 },
    moves: [
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'It’s just a splash... Has no effect whatsoever.' },
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Negates the foe’s efforts to heighten evasiveness.' },
      { name: 'Psywave', type: PokemonElementType.psychic, power: null, description: 'Attacks with a psychic wave of varying intensity.' },
      { name: 'Bounce', type: PokemonElementType.flying, power: 85, description: 'Bounces up, then down the next turn. May paralyze.' },
    ],
  },
  grumpig: {
    flavorText: 'It stores power in the black pearls on its forehead. When it uses psychic power, it performs an odd dance step. Its style of dancing became hugely popular overseas.',
    stats: { hp: 80, attack: 45, defense: 65, specialAttack: 90, specialDefense: 110, speed: 80 },
    moves: [
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'It’s just a splash... Has no effect whatsoever.' },
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Negates the foe’s efforts to heighten evasiveness.' },
      { name: 'Psywave', type: PokemonElementType.psychic, power: null, description: 'Attacks with a psychic wave of varying intensity.' },
      { name: 'Bounce', type: PokemonElementType.flying, power: 85, description: 'Bounces up, then down the next turn. May paralyze.' },
    ],
  },
  spinda: {
    flavorText: 'It is distinguished by a pattern of spots that is always different. Its unsteady, tottering walk has the effect of fouling its foe’s aim.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 60, specialDefense: 60, speed: 60 },
    moves: [
      { name: 'Dizzy Punch', type: PokemonElementType.normal, power: 70, description: 'A rhythmic punch that may confuse the foe.' },
      { name: 'Teeter Dance', type: PokemonElementType.normal, power: null, description: 'Confuses all POKéMON on the scene.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'A hypnotizing move that may induce sleep.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'Draws the foe close, then strikes without fail.' },
    ],
  },
  trapinch: {
    flavorText: 'Its big jaws crunch through boulders. Because its head is so big, it has a hard time getting back upright if it tips over onto its back.',
    stats: { hp: 45, attack: 100, defense: 45, specialAttack: 45, specialDefense: 45, speed: 10 },
    moves: [
      { name: 'Sand Tomb', type: PokemonElementType.ground, power: 35, description: 'Traps and hurts the foe in quicksand for 2 to 5 turns.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'Draws the foe close, then strikes without fail.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'Reduces the foe’s accuracy by hurling sand in its face.' },
      { name: 'Bite', type: PokemonElementType.dark, power: 60, description: 'Bites with vicious fangs. May cause flinching.' },
    ],
  },
  vibrava: {
    flavorText: 'It looses ultrasonic waves by rubbing its wings together. Since a VIBRAVA’s wings are still in the process of growing, it can only fly short distances.',
    stats: { hp: 50, attack: 70, defense: 50, specialAttack: 50, specialDefense: 50, speed: 70 },
    moves: [
      { name: 'Dragon Breath', type: PokemonElementType.dragon, power: 60, description: 'Strikes the foe with an incredible blast of breath.' },
      { name: 'Sand Tomb', type: PokemonElementType.ground, power: 35, description: 'Traps and hurts the foe in quicksand for 2 to 5 turns.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'Draws the foe close, then strikes without fail.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'Reduces the foe’s accuracy by hurling sand in its face.' },
    ],
  },
  flygon: {
    flavorText: 'The flapping of its wings sounds like singing. To prevent detection by enemies, it hides itself by flapping up a cloud of desert sand.',
    stats: { hp: 80, attack: 100, defense: 80, specialAttack: 80, specialDefense: 80, speed: 100 },
    moves: [
      { name: 'Dragon Breath', type: PokemonElementType.dragon, power: 60, description: 'Strikes the foe with an incredible blast of breath.' },
      { name: 'Sand Tomb', type: PokemonElementType.ground, power: 35, description: 'Traps and hurts the foe in quicksand for 2 to 5 turns.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'Draws the foe close, then strikes without fail.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'Reduces the foe’s accuracy by hurling sand in its face.' },
    ],
  },
  cacnea: {
    flavorText: 'CACNEA live in deserts with virtually no rainfall. It battles by swinging its thick, spiked arms. Once a year, a yellow flower blooms.',
    stats: { hp: 50, attack: 85, defense: 40, specialAttack: 85, specialDefense: 40, speed: 35 },
    moves: [
      { name: 'Needle Arm', type: PokemonElementType.grass, power: 60, description: 'Attacks with thorny arms. May cause flinching.' },
      { name: 'Cotton Spore', type: PokemonElementType.grass, power: null, description: 'Spores cling to the foe, sharply reducing SPEED.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'A toxic attack with barbs, etc., that may poison.' },
      { name: 'Ingrain', type: PokemonElementType.grass, power: null, description: 'Lays roots that restore HP. The user can’t switch out.' },
    ],
  },
  cacturne: {
    flavorText: 'After spending thousands of years in harsh deserts, its blood transformed into the same substances as sand. It is nocturnal, so it hunts at night.',
    stats: { hp: 70, attack: 115, defense: 60, specialAttack: 115, specialDefense: 60, speed: 55 },
    moves: [
      { name: 'Needle Arm', type: PokemonElementType.grass, power: 60, description: 'Attacks with thorny arms. May cause flinching.' },
      { name: 'Cotton Spore', type: PokemonElementType.grass, power: null, description: 'Spores cling to the foe, sharply reducing SPEED.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'A toxic attack with barbs, etc., that may poison.' },
      { name: 'Ingrain', type: PokemonElementType.grass, power: null, description: 'Lays roots that restore HP. The user can’t switch out.' },
    ],
  },
  swablu: {
    flavorText: 'A POKéMON that has wings like cottony clouds. After enduring winter, in which little food is available, SWABLU flocks move closer to towns in the spring.',
    stats: { hp: 45, attack: 40, defense: 60, specialAttack: 40, specialDefense: 75, speed: 50 },
    moves: [
      { name: 'Mirror Move', type: PokemonElementType.flying, power: null, description: 'Counters the foe’s attack with the same move.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any POKéMON hearing this song faints in 3 turns.' },
      { name: 'Sing', type: PokemonElementType.normal, power: null, description: 'A soothing song lulls the foe into a deep slumber.' },
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'Jabs the foe 2 to 5 times with sharp horns, etc.' },
    ],
  },
  altaria: {
    flavorText: 'It hums in a beautiful soprano voice. It flies among white clouds in the blue sky. It launches intensely hot fireballs from its mouth.',
    stats: { hp: 75, attack: 70, defense: 90, specialAttack: 70, specialDefense: 105, speed: 80 },
    moves: [
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any POKéMON hearing this song faints in 3 turns.' },
      { name: 'Sing', type: PokemonElementType.normal, power: null, description: 'A soothing song lulls the foe into a deep slumber.' },
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'Jabs the foe 2 to 5 times with sharp horns, etc.' },
      { name: 'Refresh', type: PokemonElementType.normal, power: null, description: 'Heals poisoning, paralysis, or a burn.' },
    ],
  },
  zangoose: {
    flavorText: 'When it battles, it stands on its hind legs and attacks with its sharply clawed forelegs. Its fur bristles if it encounters any SEVIPER.',
    stats: { hp: 73, attack: 115, defense: 60, specialAttack: 60, specialDefense: 60, speed: 90 },
    moves: [
      { name: 'Crush Claw', type: PokemonElementType.normal, power: 75, description: 'Tears at the foe with sharp claws. May lower DEFENSE.' },
      { name: 'Pursuit', type: PokemonElementType.dark, power: 40, description: 'Inflicts bad damage if used on a foe switching out.' },
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Scratches the foe with sharp claws.' },
      { name: 'False Swipe', type: PokemonElementType.normal, power: 40, description: 'An attack that leaves the foe with at least 1 HP.' },
    ],
  },
  seviper: {
    flavorText: 'SEVIPER and ZANGOOSE are eternal rivals. It counters a ZANGOOSE’s dazzling agility with its swordlike tail, which also oozes a horrible poison.',
    stats: { hp: 73, attack: 100, defense: 60, specialAttack: 100, specialDefense: 60, speed: 65 },
    moves: [
      { name: 'Glare', type: PokemonElementType.normal, power: null, description: 'Intimidates and frightens the foe into paralysis.' },
      { name: 'Poison Fang', type: PokemonElementType.poison, power: 50, description: 'A sharp-fanged attack. May badly poison the foe.' },
      { name: 'Poison Tail', type: PokemonElementType.poison, power: 50, description: 'Has a high critical-hit ratio. May also poison.' },
      { name: 'Wrap', type: PokemonElementType.normal, power: 15, description: 'Wraps and squeezes the foe 2 to 5 times with vines, etc.' },
    ],
  },
  lunatone: {
    flavorText: 'It becomes very active on the night of a full moon. This POKéMON was first discovered 40 years ago at the site of a meteor strike.',
    stats: { hp: 90, attack: 55, defense: 65, specialAttack: 95, specialDefense: 85, speed: 70 },
    moves: [
      { name: 'Cosmic Power', type: PokemonElementType.psychic, power: null, description: 'Raises DEFENSE and SP. DEF with a mystic power.' },
      { name: 'Psywave', type: PokemonElementType.psychic, power: null, description: 'Attacks with a psychic wave of varying intensity.' },
      { name: 'Rock Throw', type: PokemonElementType.rock, power: 50, description: 'Throws small rocks to strike the foe.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'A hypnotizing move that may induce sleep.' },
    ],
  },
  solrock: {
    flavorText: 'Solar energy is the source of this POKéMON’s power. On sunny days, groups of SOLROCK line up facing the sun and absorb its light.',
    stats: { hp: 90, attack: 95, defense: 85, specialAttack: 55, specialDefense: 65, speed: 70 },
    moves: [
      { name: 'Cosmic Power', type: PokemonElementType.psychic, power: null, description: 'Raises DEFENSE and SP. DEF with a mystic power.' },
      { name: 'Psywave', type: PokemonElementType.psychic, power: null, description: 'Attacks with a psychic wave of varying intensity.' },
      { name: 'Rock Throw', type: PokemonElementType.rock, power: 50, description: 'Throws small rocks to strike the foe.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'Stiffens the body’s muscles to raise DEFENSE.' },
    ],
  },
  barboach: {
    flavorText: 'Its body is covered with a slimy film. The film acts as a barrier to prevent germs in muddy water from entering the BARBOACH’s body.',
    stats: { hp: 50, attack: 48, defense: 43, specialAttack: 46, specialDefense: 41, speed: 60 },
    moves: [
      { name: 'Magnitude', type: PokemonElementType.ground, power: null, description: 'A ground-shaking attack of random intensity.' },
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'Covers the user in mud to raise electrical resistance.' },
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'The user becomes soaked to raise resistance to fire.' },
      { name: 'Fissure', type: PokemonElementType.ground, power: null, description: 'A one-hit KO move that drops the foe in a fissure.' },
    ],
  },
  whiscash: {
    flavorText: 'Mysteriously, it can foretell earthquakes. In the daytime, it sleeps in mud at the bottom of a pond. When it awakens, it continually feeds throughout the night.',
    stats: { hp: 110, attack: 78, defense: 73, specialAttack: 76, specialDefense: 71, speed: 60 },
    moves: [
      { name: 'Magnitude', type: PokemonElementType.ground, power: null, description: 'A ground-shaking attack of random intensity.' },
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'Covers the user in mud to raise electrical resistance.' },
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'The user becomes soaked to raise resistance to fire.' },
      { name: 'Fissure', type: PokemonElementType.ground, power: null, description: 'A one-hit KO move that drops the foe in a fissure.' },
    ],
  },
  corphish: {
    flavorText: 'Once it grips prey with its large pincers, it will never let go, no matter what. It is a hardy POKéMON that can thrive in any environment.',
    stats: { hp: 43, attack: 80, defense: 65, specialAttack: 50, specialDefense: 35, speed: 35 },
    moves: [
      { name: 'Crabhammer', type: PokemonElementType.water, power: 100, description: 'Hammers with a pincer. Has a high critical-hit ratio.' },
      { name: 'Guillotine', type: PokemonElementType.normal, power: null, description: 'A powerful pincer attack that may cause fainting.' },
      { name: 'Vice Grip', type: PokemonElementType.normal, power: 55, description: 'Grips the foe with large and powerful pincers.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'An attack using bubbles. May lower the foe’s SPEED.' },
    ],
  },
  crawdaunt: {
    flavorText: 'A brutish POKéMON that loves to battle. A veteran CRAWDAUNT that has prevailed in hundreds of battles has giant pincers marked with countless scars.',
    stats: { hp: 63, attack: 120, defense: 85, specialAttack: 90, specialDefense: 55, speed: 55 },
    moves: [
      { name: 'Crabhammer', type: PokemonElementType.water, power: 100, description: 'Hammers with a pincer. Has a high critical-hit ratio.' },
      { name: 'Guillotine', type: PokemonElementType.normal, power: null, description: 'A powerful pincer attack that may cause fainting.' },
      { name: 'Vice Grip', type: PokemonElementType.normal, power: 55, description: 'Grips the foe with large and powerful pincers.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'An attack using bubbles. May lower the foe’s SPEED.' },
    ],
  },
  baltoy: {
    flavorText: 'A BALTOY moves by spinning on its single foot. It has been depicted in murals adorning the walls of a once-bustling city in an ancient age.',
    stats: { hp: 40, attack: 40, defense: 55, specialAttack: 40, specialDefense: 70, speed: 55 },
    moves: [
      { name: 'Cosmic Power', type: PokemonElementType.psychic, power: null, description: 'Raises DEFENSE and SP. DEF with a mystic power.' },
      { name: 'Rapid Spin', type: PokemonElementType.normal, power: 50, description: 'Spins the body at high speed to strike the foe.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'Stiffens the body’s muscles to raise DEFENSE.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'Inflicts severe damage but makes the user faint.' },
    ],
  },
  claydol: {
    flavorText: 'A CLAYDOL sleeps while hovering in midair. Its arms are separate from its body. They are kept floating by the POKéMON’s manipulation of psychic power.',
    stats: { hp: 60, attack: 70, defense: 105, specialAttack: 70, specialDefense: 120, speed: 75 },
    moves: [
      { name: 'Teleport', type: PokemonElementType.psychic, power: null, description: 'A psychic move for fleeing from battle instantly.' },
      { name: 'Cosmic Power', type: PokemonElementType.psychic, power: null, description: 'Raises DEFENSE and SP. DEF with a mystic power.' },
      { name: 'Rapid Spin', type: PokemonElementType.normal, power: 50, description: 'Spins the body at high speed to strike the foe.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'Stiffens the body’s muscles to raise DEFENSE.' },
    ],
  },
  lileep: {
    flavorText: 'It disguises itself as seaweed by making its tentacles sway. Unsuspecting prey that come too close are swallowed whole. It became extinct 100 million years ago.',
    stats: { hp: 66, attack: 41, defense: 77, specialAttack: 61, specialDefense: 87, speed: 23 },
    moves: [
      { name: 'Constrict', type: PokemonElementType.normal, power: 10, description: 'Constricts to inflict pain. May lower SPEED.' },
      { name: 'Acid', type: PokemonElementType.poison, power: 40, description: 'Sprays a hide-melting acid. May lower DEFENSE.' },
      { name: 'Spit Up', type: PokemonElementType.normal, power: null, description: 'Releases stockpiled power (the more the better).' },
      { name: 'Ingrain', type: PokemonElementType.grass, power: null, description: 'Lays roots that restore HP. The user can’t switch out.' },
    ],
  },
  cradily: {
    flavorText: 'It drags its heavy body along the seafloor. It makes its nest in the shallows of warm seas. CRADILY can be seen on beaches when the tide goes out.',
    stats: { hp: 86, attack: 81, defense: 97, specialAttack: 81, specialDefense: 107, speed: 43 },
    moves: [
      { name: 'Constrict', type: PokemonElementType.normal, power: 10, description: 'Constricts to inflict pain. May lower SPEED.' },
      { name: 'Acid', type: PokemonElementType.poison, power: 40, description: 'Sprays a hide-melting acid. May lower DEFENSE.' },
      { name: 'Spit Up', type: PokemonElementType.normal, power: null, description: 'Releases stockpiled power (the more the better).' },
      { name: 'Ingrain', type: PokemonElementType.grass, power: null, description: 'Lays roots that restore HP. The user can’t switch out.' },
    ],
  },
  anorith: {
    flavorText: 'It was resurrected from a fossil using the power of science. It swims by undulating the eight wings at its sides. They were feet that adapted to life in the sea.',
    stats: { hp: 45, attack: 95, defense: 50, specialAttack: 40, specialDefense: 50, speed: 75 },
    moves: [
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'Covers the user in mud to raise electrical resistance.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'Stiffens the body’s muscles to raise DEFENSE.' },
      { name: 'Metal Claw', type: PokemonElementType.steel, power: 50, description: 'A claw attack that may raise the user’s ATTACK.' },
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Scratches the foe with sharp claws.' },
    ],
  },
  armaldo: {
    flavorText: 'ARMALDO usually lives on land. However, when it hunts for prey, it dives beneath the ocean. It swims around using its two large wings.',
    stats: { hp: 75, attack: 125, defense: 100, specialAttack: 70, specialDefense: 80, speed: 45 },
    moves: [
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'Covers the user in mud to raise electrical resistance.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'Stiffens the body’s muscles to raise DEFENSE.' },
      { name: 'Metal Claw', type: PokemonElementType.steel, power: 50, description: 'A claw attack that may raise the user’s ATTACK.' },
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Scratches the foe with sharp claws.' },
    ],
  },
  feebas: {
    flavorText: 'FEEBAS live in ponds that are heavily infested with weeds. Because of its hopelessly shabby appearance, it seems as if few TRAINERS raise it.',
    stats: { hp: 20, attack: 15, defense: 20, specialAttack: 10, specialDefense: 55, speed: 80 },
    moves: [
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'It’s just a splash... Has no effect whatsoever.' },
      { name: 'Flail', type: PokemonElementType.normal, power: null, description: 'Inflicts more damage when the user’s HP is down.' },
      { name: 'Tackle', type: PokemonElementType.normal, power: 40, description: 'Charges the foe with a full-body tackle.' },
    ],
  },
  milotic: {
    flavorText: 'It is said to live at the bottom of large lakes. Considered to be the most beautiful of all POKéMON, it has been depicted in paintings and statues.',
    stats: { hp: 95, attack: 60, defense: 79, specialAttack: 100, specialDefense: 125, speed: 81 },
    moves: [
      { name: 'Wrap', type: PokemonElementType.normal, power: 15, description: 'Wraps and squeezes the foe 2 to 5 times with vines, etc.' },
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'The user becomes soaked to raise resistance to fire.' },
      { name: 'Refresh', type: PokemonElementType.normal, power: null, description: 'Heals poisoning, paralysis, or a burn.' },
      { name: 'Recover', type: PokemonElementType.normal, power: null, description: 'Recovers up to half the user’s maximum HP.' },
    ],
  },
  kecleon: {
    flavorText: 'A POKéMON that has the ability to alter its body colors to match its surroundings. A KECLEON reverts to its original colors if it is startled.',
    stats: { hp: 60, attack: 90, defense: 70, specialAttack: 60, specialDefense: 120, speed: 40 },
    moves: [
      { name: 'Lick', type: PokemonElementType.ghost, power: 30, description: 'Licks with a long tongue to injure. May also paralyze.' },
      { name: 'Bind', type: PokemonElementType.normal, power: 15, description: 'Binds and squeezes the foe for 2 to 5 turns.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'Rakes the foe with sharp claws, etc., 2 to 5 times.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'Draws the foe close, then strikes without fail.' },
    ],
  },
  castform: {
    flavorText: 'It alters its form depending on the weather. Changes in the climate such as the temperature and humidity appear to affect its cellular structure.',
    stats: { hp: 70, attack: 70, defense: 70, specialAttack: 70, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Powder Snow', type: PokemonElementType.ice, power: 40, description: 'Blasts the foe with a snowy gust. May cause freezing.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'A weak fire attack that may inflict a burn.' },
      { name: 'Weather Ball', type: PokemonElementType.normal, power: 50, description: 'The move’s type and power change with the weather.' },
      { name: 'Water Gun', type: PokemonElementType.water, power: 40, description: 'Squirts water to attack the foe.' },
    ],
  },
  shuppet: {
    flavorText: 'This POKéMON roams about deep in the night seeking such negative emotions as grudges and envy. It retreats to its nest when the sun begins to rise.',
    stats: { hp: 44, attack: 75, defense: 35, specialAttack: 63, specialDefense: 33, speed: 45 },
    moves: [
      { name: 'Grudge', type: PokemonElementType.ghost, power: null, description: 'If the user faints, deletes all PP of foe’s last move.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'Draws the foe close, then strikes without fail.' },
      { name: 'Night Shade', type: PokemonElementType.ghost, power: null, description: 'Inflicts damage identical to the user’s level.' },
      { name: 'Snatch', type: PokemonElementType.dark, power: null, description: 'Steals the effects of the move the target uses next.' },
    ],
  },
  banette: {
    flavorText: 'An abandoned plush doll became this POKéMON. They are said to live in garbage dumps and wander about in search of the children that threw them away.',
    stats: { hp: 64, attack: 115, defense: 65, specialAttack: 83, specialDefense: 63, speed: 65 },
    moves: [
      { name: 'Grudge', type: PokemonElementType.ghost, power: null, description: 'If the user faints, deletes all PP of foe’s last move.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'Draws the foe close, then strikes without fail.' },
      { name: 'Night Shade', type: PokemonElementType.ghost, power: null, description: 'Inflicts damage identical to the user’s level.' },
      { name: 'Snatch', type: PokemonElementType.dark, power: null, description: 'Steals the effects of the move the target uses next.' },
    ],
  },
  duskull: {
    flavorText: 'A glare from its single scarlet eye makes even burly grown-ups freeze in utter fear. It is a nocturnal POKéMON that roams about under the cloak of darkness.',
    stats: { hp: 20, attack: 40, defense: 90, specialAttack: 30, specialDefense: 90, speed: 25 },
    moves: [
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Negates the foe’s efforts to heighten evasiveness.' },
      { name: 'Mean Look', type: PokemonElementType.normal, power: null, description: 'Fixes the foe with a mean look that prevents escape.' },
      { name: 'Pursuit', type: PokemonElementType.dark, power: 40, description: 'Inflicts bad damage if used on a foe switching out.' },
      { name: 'Disable', type: PokemonElementType.normal, power: null, description: 'Psychically disables one of the foe’s moves.' },
    ],
  },
  dusclops: {
    flavorText: 'It is thought that its body is hollow with only a spectral ball of fire burning inside. However, no one has been able to confirm this theory as fact.',
    stats: { hp: 40, attack: 70, defense: 130, specialAttack: 60, specialDefense: 130, speed: 25 },
    moves: [
      { name: 'Shadow Punch', type: PokemonElementType.ghost, power: 60, description: 'An unavoidable punch that is thrown from shadows.' },
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Negates the foe’s efforts to heighten evasiveness.' },
      { name: 'Mean Look', type: PokemonElementType.normal, power: null, description: 'Fixes the foe with a mean look that prevents escape.' },
      { name: 'Bind', type: PokemonElementType.normal, power: 15, description: 'Binds and squeezes the foe for 2 to 5 turns.' },
    ],
  },
  tropius: {
    flavorText: 'It flies by flapping its broad leaves. The bunch of fruit that grows around its neck is deliciously sweet. In the spring, it scatters pollen from its neck.',
    stats: { hp: 99, attack: 68, defense: 83, specialAttack: 72, specialDefense: 87, speed: 51 },
    moves: [
      { name: 'Gust', type: PokemonElementType.flying, power: 40, description: 'Strikes the foe with a gust of wind whipped up by wings.' },
      { name: 'Whirlwind', type: PokemonElementType.normal, power: null, description: 'Blows away the foe with wind and ends the battle.' },
      { name: 'Stomp', type: PokemonElementType.normal, power: 65, description: 'Stomps the enemy with a big foot. May cause flinching.' },
      { name: 'Razor Leaf', type: PokemonElementType.grass, power: 55, description: 'Cuts the enemy with leaves. High critical-hit ratio.' },
    ],
  },
  chimecho: {
    flavorText: 'They fly about very actively when the hot season arrives. They communicate among themselves using seven different and distinguishing cries.',
    stats: { hp: 75, attack: 50, defense: 80, specialAttack: 95, specialDefense: 90, speed: 65 },
    moves: [
      { name: 'Wrap', type: PokemonElementType.normal, power: 15, description: 'Wraps and squeezes the foe 2 to 5 times with vines, etc.' },
      { name: 'Psywave', type: PokemonElementType.psychic, power: null, description: 'Attacks with a psychic wave of varying intensity.' },
      { name: 'Heal Bell', type: PokemonElementType.normal, power: null, description: 'Chimes soothingly to heal all status abnormalities.' },
      { name: 'Yawn', type: PokemonElementType.normal, power: null, description: 'Lulls the foe into yawning, then sleeping next turn.' },
    ],
  },
  absol: {
    flavorText: 'It sharply senses even subtle changes in the sky and the land to predict natural disasters. It is a long-lived POKéMON that has a life-span of 100 years.',
    stats: { hp: 65, attack: 130, defense: 60, specialAttack: 75, specialDefense: 60, speed: 75 },
    moves: [
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any POKéMON hearing this song faints in 3 turns.' },
      { name: 'Razor Wind', type: PokemonElementType.normal, power: 80, description: 'A 2-turn move that strikes the foe on the 2nd turn.' },
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Scratches the foe with sharp claws.' },
      { name: 'Future Sight', type: PokemonElementType.psychic, power: 120, description: 'Heightens inner power to strike 2 turns later.' },
    ],
  },
  wynaut: {
    flavorText: 'A WYNAUT loves to eat sweet fruits. It cleverly picks fruits using its earlike arms. They gather in fruit gardens, drawn by the fragrance.',
    stats: { hp: 95, attack: 23, defense: 48, specialAttack: 23, specialDefense: 48, speed: 23 },
    moves: [
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'It’s just a splash... Has no effect whatsoever.' },
      { name: 'Mirror Coat', type: PokemonElementType.psychic, power: null, description: 'Counters the foe’s special attack at double the power.' },
      { name: 'Destiny Bond', type: PokemonElementType.ghost, power: null, description: 'If the user faints, the foe is also made to faint.' },
      { name: 'Encore', type: PokemonElementType.normal, power: null, description: 'Makes the foe repeat its last move over 2 to 6 turns.' },
    ],
  },
  snorunt: {
    flavorText: 'They tend to move about in groups of around five SNORUNT. In snowy regions, it is said that when they are seen late at night, snowfall will arrive by morning.',
    stats: { hp: 50, attack: 50, defense: 50, specialAttack: 50, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'Powder Snow', type: PokemonElementType.ice, power: 40, description: 'Blasts the foe with a snowy gust. May cause freezing.' },
      { name: 'Hail', type: PokemonElementType.ice, power: null, description: 'Summons a hailstorm that strikes every turn.' },
      { name: 'Bite', type: PokemonElementType.dark, power: 60, description: 'Bites with vicious fangs. May cause flinching.' },
      { name: 'Leer', type: PokemonElementType.normal, power: null, description: 'Frightens the foe with a leer to lower DEFENSE.' },
    ],
  },
  glalie: {
    flavorText: 'A GLALIE has the power to instantaneously freeze moisture in the atmosphere. A dazzling cloud of diamondlike ice crystals forms around its body.',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80 },
    moves: [
      { name: 'Sheer Cold', type: PokemonElementType.ice, power: null, description: 'A chilling attack that causes fainting if it hits.' },
      { name: 'Powder Snow', type: PokemonElementType.ice, power: 40, description: 'Blasts the foe with a snowy gust. May cause freezing.' },
      { name: 'Hail', type: PokemonElementType.ice, power: null, description: 'Summons a hailstorm that strikes every turn.' },
      { name: 'Bite', type: PokemonElementType.dark, power: 60, description: 'Bites with vicious fangs. May cause flinching.' },
    ],
  },
  spheal: {
    flavorText: 'It is completely covered with plushy fur. As a result, it never feels the cold even when it is rolling about on ice floes or diving in the sea.',
    stats: { hp: 70, attack: 40, defense: 50, specialAttack: 55, specialDefense: 50, speed: 25 },
    moves: [
      { name: 'Ice Ball', type: PokemonElementType.ice, power: 30, description: 'A 5-turn attack that gains power on successive hits.' },
      { name: 'Sheer Cold', type: PokemonElementType.ice, power: null, description: 'A chilling attack that causes fainting if it hits.' },
      { name: 'Aurora Beam', type: PokemonElementType.ice, power: 65, description: 'Fires a rainbow-colored beam that may lower ATTACK.' },
      { name: 'Powder Snow', type: PokemonElementType.ice, power: 40, description: 'Blasts the foe with a snowy gust. May cause freezing.' },
    ],
  },
  sealeo: {
    flavorText: 'SEALEO live in herds on ice floes. Using its powerful flippers, it shatters ice. It dives into the sea to hunt prey five times a day.',
    stats: { hp: 90, attack: 60, defense: 70, specialAttack: 75, specialDefense: 70, speed: 45 },
    moves: [
      { name: 'Ice Ball', type: PokemonElementType.ice, power: 30, description: 'A 5-turn attack that gains power on successive hits.' },
      { name: 'Sheer Cold', type: PokemonElementType.ice, power: null, description: 'A chilling attack that causes fainting if it hits.' },
      { name: 'Aurora Beam', type: PokemonElementType.ice, power: 65, description: 'Fires a rainbow-colored beam that may lower ATTACK.' },
      { name: 'Powder Snow', type: PokemonElementType.ice, power: 40, description: 'Blasts the foe with a snowy gust. May cause freezing.' },
    ],
  },
  walrein: {
    flavorText: 'To protect its herd, the leader battles anything that invades its territory, even at the cost of its life. Its tusks may snap off in battle.',
    stats: { hp: 110, attack: 80, defense: 90, specialAttack: 95, specialDefense: 90, speed: 65 },
    moves: [
      { name: 'Ice Ball', type: PokemonElementType.ice, power: 30, description: 'A 5-turn attack that gains power on successive hits.' },
      { name: 'Sheer Cold', type: PokemonElementType.ice, power: null, description: 'A chilling attack that causes fainting if it hits.' },
      { name: 'Aurora Beam', type: PokemonElementType.ice, power: 65, description: 'Fires a rainbow-colored beam that may lower ATTACK.' },
      { name: 'Powder Snow', type: PokemonElementType.ice, power: 40, description: 'Blasts the foe with a snowy gust. May cause freezing.' },
    ],
  },
  clamperl: {
    flavorText: 'A CLAMPERL slams its shell closed on prey to prevent escape. The pearl it creates upon evolution is said to be infused with a mysterious energy.',
    stats: { hp: 35, attack: 64, defense: 85, specialAttack: 74, specialDefense: 55, speed: 32 },
    moves: [
      { name: 'Clamp', type: PokemonElementType.water, power: 35, description: 'Traps and squeezes the foe for 2 to 5 turns.' },
      { name: 'Water Gun', type: PokemonElementType.water, power: 40, description: 'Squirts water to attack the foe.' },
      { name: 'Whirlpool', type: PokemonElementType.water, power: 35, description: 'Traps and hurts the foe in a whirlpool for 2 to 5 turns.' },
      { name: 'Iron Defense', type: PokemonElementType.steel, power: null, description: 'Hardens the body’s surface to sharply raise DEFENSE.' },
    ],
  },
  huntail: {
    flavorText: 'To withstand the crushing pressure of water deep under the sea, its spine is very thick and sturdy. Its tail, which is shaped like a small fish, has eyes that light up.',
    stats: { hp: 55, attack: 104, defense: 105, specialAttack: 94, specialDefense: 75, speed: 52 },
    moves: [
      { name: 'Whirlpool', type: PokemonElementType.water, power: 35, description: 'Traps and hurts the foe in a whirlpool for 2 to 5 turns.' },
      { name: 'Hydro Pump', type: PokemonElementType.water, power: 110, description: 'Blasts water at high power to strike the foe.' },
      { name: 'Baton Pass', type: PokemonElementType.normal, power: null, description: 'Switches out the user while keeping effects in play.' },
      { name: 'Screech', type: PokemonElementType.normal, power: null, description: 'Emits a screech to sharply reduce the foe’s DEFENSE.' },
    ],
  },
  gorebyss: {
    flavorText: 'A GOREBYSS siphons the body fluids of prey through its thin, tubular mouth. Its light pink body color turns vivid when it finishes feeding.',
    stats: { hp: 55, attack: 84, defense: 105, specialAttack: 114, specialDefense: 75, speed: 52 },
    moves: [
      { name: 'Confusion', type: PokemonElementType.psychic, power: 50, description: 'A psychic attack that may cause confusion.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'Forgets about something and sharply raises SP. DEF.' },
      { name: 'Whirlpool', type: PokemonElementType.water, power: 35, description: 'Traps and hurts the foe in a whirlpool for 2 to 5 turns.' },
      { name: 'Hydro Pump', type: PokemonElementType.water, power: 110, description: 'Blasts water at high power to strike the foe.' },
    ],
  },
  relicanth: {
    flavorText: 'A POKéMON that was once believed to have been extinct. The species has not changed its form for 100 million years. It walks on the seafloor using its pectoral fins.',
    stats: { hp: 100, attack: 90, defense: 130, specialAttack: 45, specialDefense: 65, speed: 55 },
    moves: [
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'Covers the user in mud to raise electrical resistance.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'Stiffens the body’s muscles to raise DEFENSE.' },
      { name: 'Yawn', type: PokemonElementType.normal, power: null, description: 'Lulls the foe into yawning, then sleeping next turn.' },
      { name: 'Water Gun', type: PokemonElementType.water, power: 40, description: 'Squirts water to attack the foe.' },
    ],
  },
  luvdisc: {
    flavorText: 'LUVDISC make the branches of CORSOLA their nests. There is a custom from long ago of giving a LUVDISC as a gift to express one’s feelings of love.',
    stats: { hp: 43, attack: 30, defense: 55, specialAttack: 40, specialDefense: 65, speed: 97 },
    moves: [
      { name: 'Sweet Kiss', type: PokemonElementType.normal, power: null, description: 'Demands a kiss with a cute look. May cause confusion.' },
      { name: 'Flail', type: PokemonElementType.normal, power: null, description: 'Inflicts more damage when the user’s HP is down.' },
      { name: 'Water Gun', type: PokemonElementType.water, power: 40, description: 'Squirts water to attack the foe.' },
      { name: 'Charm', type: PokemonElementType.normal, power: null, description: 'Charms the foe and sharply reduces its ATTACK.' },
    ],
  },
  bagon: {
    flavorText: 'Although it is small, this POKéMON is very powerful because its body is a bundle of muscles. It launches head-butts with its ironlike skull.',
    stats: { hp: 45, attack: 75, defense: 60, specialAttack: 40, specialDefense: 30, speed: 50 },
    moves: [
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'A weak fire attack that may inflict a burn.' },
      { name: 'Dragon Breath', type: PokemonElementType.dragon, power: 60, description: 'Strikes the foe with an incredible blast of breath.' },
      { name: 'Dragon Claw', type: PokemonElementType.dragon, power: 80, description: 'Slashes the foe with sharp claws.' },
      { name: 'Rage', type: PokemonElementType.normal, power: 20, description: 'Raises the user’s ATTACK every time it is hit.' },
    ],
  },
  beldum: {
    flavorText: 'When BELDUM gather in a swarm, they move in perfect unison as if they were but one POKéMON. They communicate with each other using brain waves.',
    stats: { hp: 40, attack: 55, defense: 80, specialAttack: 35, specialDefense: 60, speed: 30 },
    moves: [
      { name: 'Take Down', type: PokemonElementType.normal, power: 90, description: 'A reckless charge attack that also hurts the user.' },
    ],
  },
  shelgon: {
    flavorText: 'It hardly eats while it awaits evolution. It becomes hardier by enduring hunger. Its shell peels off the instant it begins to evolve.',
    stats: { hp: 65, attack: 95, defense: 100, specialAttack: 60, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'A weak fire attack that may inflict a burn.' },
      { name: 'Dragon Breath', type: PokemonElementType.dragon, power: 60, description: 'Strikes the foe with an incredible blast of breath.' },
      { name: 'Dragon Claw', type: PokemonElementType.dragon, power: 80, description: 'Slashes the foe with sharp claws.' },
      { name: 'Rage', type: PokemonElementType.normal, power: 20, description: 'Raises the user’s ATTACK every time it is hit.' },
    ],
  },
  salamence: {
    flavorText: 'After many long years, its cellular structure underwent a sudden mutation to grow wings. When angered, it loses all thought and rampages out of control.',
    stats: { hp: 95, attack: 135, defense: 80, specialAttack: 110, specialDefense: 80, speed: 100 },
    moves: [
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'A weak fire attack that may inflict a burn.' },
      { name: 'Dragon Breath', type: PokemonElementType.dragon, power: 60, description: 'Strikes the foe with an incredible blast of breath.' },
      { name: 'Dragon Claw', type: PokemonElementType.dragon, power: 80, description: 'Slashes the foe with sharp claws.' },
      { name: 'Fly', type: PokemonElementType.flying, power: 90, description: 'Flies up on the first turn, then strikes the next turn.' },
    ],
  },
  metang: {
    flavorText: 'The claws tipping its arms pack the destructive power to tear through thick iron sheets as if they were silk. It flies at over 60 miles per hour.',
    stats: { hp: 60, attack: 75, defense: 100, specialAttack: 55, specialDefense: 80, speed: 50 },
    moves: [
      { name: 'Meteor Mash', type: PokemonElementType.steel, power: 90, description: 'Fires a meteor-like punch. May raise ATTACK.' },
      { name: 'Pursuit', type: PokemonElementType.dark, power: 40, description: 'Inflicts bad damage if used on a foe switching out.' },
      { name: 'Metal Claw', type: PokemonElementType.steel, power: 50, description: 'A claw attack that may raise the user’s ATTACK.' },
      { name: 'Confusion', type: PokemonElementType.psychic, power: 50, description: 'A psychic attack that may cause confusion.' },
    ],
  },
  metagross: {
    flavorText: 'METAGROSS has four brains that are joined by a complex neural network. As a result of integration, this POKéMON is smarter than a supercomputer.',
    stats: { hp: 80, attack: 135, defense: 130, specialAttack: 95, specialDefense: 90, speed: 70 },
    moves: [
      { name: 'Meteor Mash', type: PokemonElementType.steel, power: 90, description: 'Fires a meteor-like punch. May raise ATTACK.' },
      { name: 'Pursuit', type: PokemonElementType.dark, power: 40, description: 'Inflicts bad damage if used on a foe switching out.' },
      { name: 'Metal Claw', type: PokemonElementType.steel, power: 50, description: 'A claw attack that may raise the user’s ATTACK.' },
      { name: 'Confusion', type: PokemonElementType.psychic, power: 50, description: 'A psychic attack that may cause confusion.' },
    ],
  },
  regirock: {
    flavorText: 'A POKéMON that is made entirely of rocks and boulders. If parts of its body chip off in battle, REGIROCK repairs itself by adding new rocks.',
    stats: { hp: 80, attack: 100, defense: 200, specialAttack: 50, specialDefense: 100, speed: 50 },
    moves: [
      { name: 'Lock On', type: PokemonElementType.normal, power: null, description: 'Locks on to the foe to ensure the next move hits.' },
      { name: 'Rock Throw', type: PokemonElementType.rock, power: 50, description: 'Throws small rocks to strike the foe.' },
      { name: 'Zap Cannon', type: PokemonElementType.electric, power: 120, description: 'Powerful and sure to cause paralysis, but inaccurate.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'Inflicts severe damage but makes the user faint.' },
    ],
  },
  regice: {
    flavorText: 'Its entire body is made of Antarctic ice. After extensive studies, researchers believe the ice was formed during an ice age.',
    stats: { hp: 80, attack: 50, defense: 100, specialAttack: 100, specialDefense: 200, speed: 50 },
    moves: [
      { name: 'Lock On', type: PokemonElementType.normal, power: null, description: 'Locks on to the foe to ensure the next move hits.' },
      { name: 'Zap Cannon', type: PokemonElementType.electric, power: 120, description: 'Powerful and sure to cause paralysis, but inaccurate.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'Inflicts severe damage but makes the user faint.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'Forgets about something and sharply raises SP. DEF.' },
    ],
  },
  registeel: {
    flavorText: 'Its body is harder than any other kind of metal. The body metal is composed of a mysterious substance. Not only is it hard, it shrinks and stretches flexibly.',
    stats: { hp: 80, attack: 75, defense: 150, specialAttack: 75, specialDefense: 150, speed: 50 },
    moves: [
      { name: 'Lock On', type: PokemonElementType.normal, power: null, description: 'Locks on to the foe to ensure the next move hits.' },
      { name: 'Zap Cannon', type: PokemonElementType.electric, power: 120, description: 'Powerful and sure to cause paralysis, but inaccurate.' },
      { name: 'Metal Claw', type: PokemonElementType.steel, power: 50, description: 'A claw attack that may raise the user’s ATTACK.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'Inflicts severe damage but makes the user faint.' },
    ],
  },
  latias: {
    flavorText: 'They make a small herd of only several members. They rarely make contact with people or other POKéMON. They disappear if they sense enemies.',
    stats: { hp: 80, attack: 80, defense: 90, specialAttack: 110, specialDefense: 130, speed: 110 },
    moves: [
      { name: 'Mist Ball', type: PokemonElementType.psychic, power: 95, description: 'Attacks with a flurry of down. May lower SP. ATK.' },
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'The user becomes soaked to raise resistance to fire.' },
      { name: 'Psywave', type: PokemonElementType.psychic, power: null, description: 'Attacks with a psychic wave of varying intensity.' },
      { name: 'Refresh', type: PokemonElementType.normal, power: null, description: 'Heals poisoning, paralysis, or a burn.' },
    ],
  },
  kyogre: {
    flavorText: 'KYOGRE has appeared in mythology as the creator of the sea. After long years of feuding with GROUDON, it took to sleep at the bottom of the sea.',
    stats: { hp: 100, attack: 100, defense: 90, specialAttack: 150, specialDefense: 140, speed: 90 },
    moves: [
      { name: 'Water Spout', type: PokemonElementType.water, power: 150, description: 'Inflicts more damage if the user’s HP is high.' },
      { name: 'Sheer Cold', type: PokemonElementType.ice, power: null, description: 'A chilling attack that causes fainting if it hits.' },
      { name: 'Ancient Power', type: PokemonElementType.rock, power: 60, description: 'An attack that may raise all stats.' },
      { name: 'Hydro Pump', type: PokemonElementType.water, power: 110, description: 'Blasts water at high power to strike the foe.' },
    ],
  },
  latios: {
    flavorText: 'Even in hiding, it can detect the locations of others and sense their emotions since it has telepathy. Its intelligence allows it to understand human languages.',
    stats: { hp: 80, attack: 90, defense: 80, specialAttack: 130, specialDefense: 110, speed: 110 },
    moves: [
      { name: 'Luster Purge', type: PokemonElementType.psychic, power: 95, description: 'Attacks with a burst of light. May lower SP. DEF.' },
      { name: 'Psywave', type: PokemonElementType.psychic, power: null, description: 'Attacks with a psychic wave of varying intensity.' },
      { name: 'Refresh', type: PokemonElementType.normal, power: null, description: 'Heals poisoning, paralysis, or a burn.' },
      { name: 'Memento', type: PokemonElementType.dark, power: null, description: 'The user faints and lowers the foe’s abilities.' },
    ],
  },
  groudon: {
    flavorText: 'GROUDON has appeared in mythology as the creator of the land. It sleeps in magma underground and is said to make volcanoes erupt on awakening.',
    stats: { hp: 100, attack: 150, defense: 140, specialAttack: 100, specialDefense: 90, speed: 90 },
    moves: [
      { name: 'Eruption', type: PokemonElementType.fire, power: 150, description: 'The higher the user’s HP, the more damage caused.' },
      { name: 'Fissure', type: PokemonElementType.ground, power: null, description: 'A one-hit KO move that drops the foe in a fissure.' },
      { name: 'Slash', type: PokemonElementType.normal, power: 70, description: 'Slashes with claws, etc. Has a high critical-hit ratio.' },
      { name: 'Bulk Up', type: PokemonElementType.fighting, power: null, description: 'Bulks up the body to boost both ATTACK and DEFENSE.' },
    ],
  },
  rayquaza: {
    flavorText: 'A POKéMON that flies endlessly in the ozone layer. It is said it would descend to the ground if KYOGRE and GROUDON were to fight.',
    stats: { hp: 105, attack: 150, defense: 90, specialAttack: 150, specialDefense: 90, speed: 95 },
    moves: [
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'An extremely fast and powerful attack.' },
      { name: 'Dragon Dance', type: PokemonElementType.dragon, power: null, description: 'A mystical dance that ups ATTACK and SPEED.' },
      { name: 'Twister', type: PokemonElementType.dragon, power: 40, description: 'Whips up a vicious twister to tear at the foe.' },
      { name: 'Dragon Claw', type: PokemonElementType.dragon, power: 80, description: 'Slashes the foe with sharp claws.' },
    ],
  },
  jirachi: {
    flavorText: 'JIRACHI is said to make wishes come true. While it sleeps, a tough crystalline shell envelops the body to protect it from enemies.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Doom Desire', type: PokemonElementType.steel, power: 140, description: 'Summons strong sunlight to attack 2 turns later.' },
      { name: 'Cosmic Power', type: PokemonElementType.psychic, power: null, description: 'Raises DEFENSE and SP. DEF with a mystic power.' },
      { name: 'Refresh', type: PokemonElementType.normal, power: null, description: 'Heals poisoning, paralysis, or a burn.' },
      { name: 'Wish', type: PokemonElementType.normal, power: null, description: 'A wish that restores HP. It takes time to work.' },
    ],
  },
  deoxys: {
    flavorText: 'A POKéMON that mutated from an extraterrestrial virus exposed to a laser beam. Its body is configured for superior agility and speed.',
    stats: { hp: 50, attack: 150, defense: 50, specialAttack: 150, specialDefense: 50, speed: 150 },
    moves: [
      { name: 'Psycho Boost', type: PokemonElementType.psychic, power: 140, description: 'Allows a full-power attack, but sharply lowers SP. ATK.' },
      { name: 'Wrap', type: PokemonElementType.normal, power: 15, description: 'Wraps and squeezes the foe 2 to 5 times with vines, etc.' },
      { name: 'Teleport', type: PokemonElementType.psychic, power: null, description: 'A psychic move for fleeing from battle instantly.' },
      { name: 'Cosmic Power', type: PokemonElementType.psychic, power: null, description: 'Raises DEFENSE and SP. DEF with a mystic power.' },
    ],
  },
  deoxys_speed: {
    flavorText: 'A POKéMON that mutated from an extraterrestrial virus exposed to a laser beam. Its body is configured for superior agility and speed.',
    stats: { hp: 50, attack: 95, defense: 90, specialAttack: 95, specialDefense: 90, speed: 180 },
    moves: [
      { name: 'Psycho Boost', type: PokemonElementType.psychic, power: 140, description: 'Allows a full-power attack, but sharply lowers SP. ATK.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'An extremely fast and powerful attack.' },
      { name: 'Wrap', type: PokemonElementType.normal, power: 15, description: 'Wraps and squeezes the foe 2 to 5 times with vines, etc.' },
      { name: 'Recover', type: PokemonElementType.normal, power: null, description: 'Recovers up to half the user’s maximum HP.' },
    ],
  },
  deoxys_attack: {
    flavorText: 'A POKéMON that mutated from an extraterrestrial virus exposed to a laser beam. Its body is configured for superior agility and speed.',
    stats: { hp: 50, attack: 180, defense: 20, specialAttack: 180, specialDefense: 20, speed: 150 },
    moves: [
      { name: 'Psycho Boost', type: PokemonElementType.psychic, power: 140, description: 'An intense attack that also sharply reduces the user’s SP. ATK stat.' },
      { name: 'Wrap', type: PokemonElementType.normal, power: 15, description: 'A long body or vines are used to wrap the foe for two to five turns.' },
      { name: 'Teleport', type: PokemonElementType.psychic, power: null, description: 'Use it to flee from any wild POKéMON. Also warps to the last POKé CENTER.' },
      { name: 'Cosmic Power', type: PokemonElementType.psychic, power: null, description: 'The user absorbs a mystic power to raise its DEFENSE and SP. DEF.' },
    ],
  },
  deoxys_defense: {
    flavorText: 'A POKéMON that mutated from an extraterrestrial virus exposed to a laser beam. Its body is configured for superior agility and speed.',
    stats: { hp: 50, attack: 70, defense: 160, specialAttack: 70, specialDefense: 160, speed: 90 },
    moves: [
      { name: 'Psycho Boost', type: PokemonElementType.psychic, power: 140, description: 'An intense attack that also sharply reduces the user’s SP. ATK stat.' },
      { name: 'Wrap', type: PokemonElementType.normal, power: 15, description: 'A long body or vines are used to wrap the foe for two to five turns.' },
      { name: 'Teleport', type: PokemonElementType.psychic, power: null, description: 'Use it to flee from any wild POKéMON. Also warps to the last POKé CENTER.' },
      { name: 'Mirror Coat', type: PokemonElementType.psychic, power: null, description: 'A retaliation move that pays back the foe’s special attack double.' },
    ],
  },
  turtwig: {
    flavorText: 'The shell on its back is made of soil. On a very healthy TURTWIG, the shell should feel moist.',
    stats: { hp: 55, attack: 68, defense: 64, specialAttack: 45, specialDefense: 55, speed: 31 },
    moves: [
      { name: 'Withdraw', type: PokemonElementType.water, power: null, description: 'The user withdraws its body into its hard shell, raising its Defense stat.' },
      { name: 'Razor Leaf', type: PokemonElementType.grass, power: 55, description: 'Sharp-edged leaves are launched to slash at the foe. It has a high critical-hit ratio.' },
      { name: 'Absorb', type: PokemonElementType.grass, power: 20, description: 'A nutrient-draining attack. The user’s HP is restored by half the damage taken by the target.' },
      { name: 'Mega Drain', type: PokemonElementType.grass, power: 40, description: 'A nutrient-draining attack. The user’s HP is restored by half the damage taken by the target.' },
    ],
  },
  grotle: {
    flavorText: 'It knows where pure water wells up. It carries fellow Pokémon there on its back.',
    stats: { hp: 75, attack: 89, defense: 85, specialAttack: 55, specialDefense: 65, speed: 36 },
    moves: [
      { name: 'Withdraw', type: PokemonElementType.water, power: null, description: 'The user withdraws its body into its hard shell, raising its Defense stat.' },
      { name: 'Razor Leaf', type: PokemonElementType.grass, power: 55, description: 'Sharp-edged leaves are launched to slash at the foe. It has a high critical-hit ratio.' },
      { name: 'Absorb', type: PokemonElementType.grass, power: 20, description: 'A nutrient-draining attack. The user’s HP is restored by half the damage taken by the target.' },
      { name: 'Mega Drain', type: PokemonElementType.grass, power: 40, description: 'A nutrient-draining attack. The user’s HP is restored by half the damage taken by the target.' },
    ],
  },
  torterra: {
    flavorText: 'Some Pokémon are born on a TORTERRA’s back and spend their entire life there.',
    stats: { hp: 95, attack: 109, defense: 105, specialAttack: 75, specialDefense: 85, speed: 56 },
    moves: [
      { name: 'Wood Hammer', type: PokemonElementType.grass, power: 120, description: 'The user slams its rugged body into the foe to attack. The user also sustains serious damage.' },
      { name: 'Withdraw', type: PokemonElementType.water, power: null, description: 'The user withdraws its body into its hard shell, raising its Defense stat.' },
      { name: 'Razor Leaf', type: PokemonElementType.grass, power: 55, description: 'Sharp-edged leaves are launched to slash at the foe. It has a high critical-hit ratio.' },
      { name: 'Absorb', type: PokemonElementType.grass, power: 20, description: 'A nutrient-draining attack. The user’s HP is restored by half the damage taken by the target.' },
    ],
  },
  chimchar: {
    flavorText: 'It is very agile. Before going to sleep, it extinguishes the flame on its tail to prevent fires.',
    stats: { hp: 44, attack: 58, defense: 44, specialAttack: 58, specialDefense: 44, speed: 61 },
    moves: [
      { name: 'Slack Off', type: PokemonElementType.normal, power: null, description: 'The user slacks off, restoring its own HP by up to half of its maximum HP.' },
      { name: 'Flame Wheel', type: PokemonElementType.fire, power: 60, description: 'The user cloaks itself in fire and charges at the foe. It may also leave the target with a burn.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'The foe is attacked with small flames. The target may also be left with a burn.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes for two to five times in quick succession.' },
    ],
  },
  monferno: {
    flavorText: 'It skillfully controls the intensity of the fire on its tail to keep its foes at an ideal distance.',
    stats: { hp: 64, attack: 78, defense: 52, specialAttack: 78, specialDefense: 52, speed: 81 },
    moves: [
      { name: 'Slack Off', type: PokemonElementType.normal, power: null, description: 'The user slacks off, restoring its own HP by up to half of its maximum HP.' },
      { name: 'Mach Punch', type: PokemonElementType.fighting, power: 40, description: 'The user throws a punch at blinding speed. It is certain to strike first.' },
      { name: 'Flame Wheel', type: PokemonElementType.fire, power: 60, description: 'The user cloaks itself in fire and charges at the foe. It may also leave the target with a burn.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'The foe is attacked with small flames. The target may also be left with a burn.' },
    ],
  },
  infernape: {
    flavorText: 'It uses unique fighting moves with fire on its hands and feet. It will take on any opponent.',
    stats: { hp: 76, attack: 104, defense: 71, specialAttack: 104, specialDefense: 71, speed: 108 },
    moves: [
      { name: 'Mach Punch', type: PokemonElementType.fighting, power: 40, description: 'The user throws a punch at blinding speed. It is certain to strike first.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Flame Wheel', type: PokemonElementType.fire, power: 60, description: 'The user cloaks itself in fire and charges at the foe. It may also leave the target with a burn.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'The foe is attacked with small flames. The target may also be left with a burn.' },
    ],
  },
  piplup: {
    flavorText: 'A poor walker, it often falls down. However, its strong pride makes it puff up its chest without a care.',
    stats: { hp: 53, attack: 51, defense: 53, specialAttack: 61, specialDefense: 56, speed: 40 },
    moves: [
      { name: 'Drill Peck', type: PokemonElementType.flying, power: 80, description: 'A corkscrewing attack with the sharp beak acting as a drill.' },
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'The user soaks itself with water. The move weakens Fire-type moves while the user is in the battle.' },
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'The foe is jabbed repeatedly with a horn or beak two to five times in a row.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of countless bubbles is jetted at the foe. It may also lower the target’s Speed stat.' },
    ],
  },
  prinplup: {
    flavorText: 'Because every PRINPLUP considers itself to be the most important, they can never form a group.',
    stats: { hp: 64, attack: 66, defense: 68, specialAttack: 81, specialDefense: 76, speed: 50 },
    moves: [
      { name: 'Drill Peck', type: PokemonElementType.flying, power: 80, description: 'A corkscrewing attack with the sharp beak acting as a drill.' },
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'The user soaks itself with water. The move weakens Fire-type moves while the user is in the battle.' },
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'The foe is jabbed repeatedly with a horn or beak two to five times in a row.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of countless bubbles is jetted at the foe. It may also lower the target’s Speed stat.' },
    ],
  },
  empoleon: {
    flavorText: 'If anyone were to hurt its pride, it would slash them with wings that can cleave through an ice floe.',
    stats: { hp: 84, attack: 86, defense: 88, specialAttack: 111, specialDefense: 101, speed: 60 },
    moves: [
      { name: 'Drill Peck', type: PokemonElementType.flying, power: 80, description: 'A corkscrewing attack with the sharp beak acting as a drill.' },
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'The foe is jabbed repeatedly with a horn or beak two to five times in a row.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of countless bubbles is jetted at the foe. It may also lower the target’s Speed stat.' },
      { name: 'Aqua Jet', type: PokemonElementType.water, power: 40, description: 'The user lunges at the foe at a speed that makes it almost invisible. It is sure to strike first.' },
    ],
  },
  starly: {
    flavorText: 'Because they are weak individually, they form groups. However, they bicker if the group grows too big.',
    stats: { hp: 40, attack: 55, defense: 30, specialAttack: 30, specialDefense: 30, speed: 60 },
    moves: [
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide to inflict damage.' },
      { name: 'Whirlwind', type: PokemonElementType.normal, power: null, description: 'The foe is blown away, to be replaced by another Pokémon in its party. In the wild, the battle ends.' },
      { name: 'Brave Bird', type: PokemonElementType.flying, power: 120, description: 'The user tucks in its wings and charges from a low altitude. The user also takes serious damage.' },
      { name: 'Quick Attack', type: PokemonElementType.normal, power: 40, description: 'The user lunges at the foe at a speed that makes it almost invisible. It is sure to strike first.' },
    ],
  },
  staravia: {
    flavorText: 'Recognizing their own weakness, they always live in a group. When alone, a STARAVIA cries noisily.',
    stats: { hp: 55, attack: 75, defense: 50, specialAttack: 40, specialDefense: 40, speed: 80 },
    moves: [
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide to inflict damage.' },
      { name: 'Whirlwind', type: PokemonElementType.normal, power: null, description: 'The foe is blown away, to be replaced by another Pokémon in its party. In the wild, the battle ends.' },
      { name: 'Brave Bird', type: PokemonElementType.flying, power: 120, description: 'The user tucks in its wings and charges from a low altitude. The user also takes serious damage.' },
      { name: 'Quick Attack', type: PokemonElementType.normal, power: 40, description: 'The user lunges at the foe at a speed that makes it almost invisible. It is sure to strike first.' },
    ],
  },
  staraptor: {
    flavorText: 'It never stops attacking even if it is injured. It fusses over the shape of its comb.',
    stats: { hp: 85, attack: 120, defense: 70, specialAttack: 50, specialDefense: 60, speed: 100 },
    moves: [
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide to inflict damage.' },
      { name: 'Whirlwind', type: PokemonElementType.normal, power: null, description: 'The foe is blown away, to be replaced by another Pokémon in its party. In the wild, the battle ends.' },
      { name: 'Brave Bird', type: PokemonElementType.flying, power: 120, description: 'The user tucks in its wings and charges from a low altitude. The user also takes serious damage.' },
      { name: 'Close Combat', type: PokemonElementType.fighting, power: 120, description: 'The user fights the foe in close without guarding itself. It also cuts the user’s Defense and Sp. Def.' },
    ],
  },
  bidoof: {
    flavorText: 'A comparison revealed that BIDOOF’s front teeth grow at the same rate as RATTATA’s.',
    stats: { hp: 59, attack: 45, defense: 40, specialAttack: 35, specialDefense: 40, speed: 31 },
    moves: [
      { name: 'Hyper Fang', type: PokemonElementType.normal, power: 80, description: 'The user bites hard on the foe with its sharp front fangs. It may also make the target flinch.' },
      { name: 'Super Fang', type: PokemonElementType.normal, power: null, description: 'The user chomps hard on the foe with its sharp front fangs. It cuts the target’s HP to half.' },
      { name: 'Yawn', type: PokemonElementType.normal, power: null, description: 'The user lets loose a huge yawn that lulls the foe into falling asleep on the next turn.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'The user temporarily empties its mind to forget its concerns. It sharply raises the user’s Sp. Def stat.' },
    ],
  },
  bibarel: {
    flavorText: 'A river dammed by BIBAREL will never overflow its banks, which is appreciated by people nearby.',
    stats: { hp: 79, attack: 85, defense: 60, specialAttack: 55, specialDefense: 60, speed: 71 },
    moves: [
      { name: 'Hyper Fang', type: PokemonElementType.normal, power: 80, description: 'The user bites hard on the foe with its sharp front fangs. It may also make the target flinch.' },
      { name: 'Super Fang', type: PokemonElementType.normal, power: null, description: 'The user chomps hard on the foe with its sharp front fangs. It cuts the target’s HP to half.' },
      { name: 'Yawn', type: PokemonElementType.normal, power: null, description: 'The user lets loose a huge yawn that lulls the foe into falling asleep on the next turn.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'The user temporarily empties its mind to forget its concerns. It sharply raises the user’s Sp. Def stat.' },
    ],
  },
  kricketot: {
    flavorText: 'Its legs are short. Whenever it stumbles, its stiff antennae clack with a xylophone-like sound.',
    stats: { hp: 37, attack: 25, defense: 41, specialAttack: 25, specialDefense: 41, speed: 25 },
    moves: [
      { name: 'Bug Bite', type: PokemonElementType.bug, power: 60, description: 'The user bites the foe. If the foe is holding a Berry, the user eats it and gains its effect.' },
      { name: 'Bide', type: PokemonElementType.normal, power: null, description: 'The user endures attacks for two turns, then strikes back to cause double the damage taken.' },
      { name: 'Growl', type: PokemonElementType.normal, power: null, description: 'The user growls in an endearing way, making the foe less wary. The target’s Attack stat is lowered.' },
    ],
  },
  kricketune: {
    flavorText: 'There is a village that hosts a contest based on the amazingly variable cries of this Pokémon.',
    stats: { hp: 77, attack: 85, defense: 51, specialAttack: 55, specialDefense: 51, speed: 65 },
    moves: [
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
      { name: 'Sing', type: PokemonElementType.normal, power: null, description: 'A soothing lullaby is sung in a calming voice that puts the foe into a deep slumber.' },
      { name: 'Bug Buzz', type: PokemonElementType.bug, power: 90, description: 'The user vibrates its wings to generate a damaging sound wave. It may also lower the foe’s Sp. Def stat.' },
      { name: 'Leech Life', type: PokemonElementType.bug, power: 80, description: 'A blood-draining attack. The user’s HP is restored by half the damage taken by the target.' },
    ],
  },
  shinx: {
    flavorText: 'The extension and contraction of its muscles generates electricity. It glows when in trouble.',
    stats: { hp: 45, attack: 65, defense: 34, specialAttack: 40, specialDefense: 34, speed: 45 },
    moves: [
      { name: 'Spark', type: PokemonElementType.electric, power: 65, description: 'The user throws an electrically charged tackle at the foe. It may also leave the target paralyzed.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'The user boosts the power of the Electric move it uses next. It also raises the user’s Sp. Def stat.' },
      { name: 'Discharge', type: PokemonElementType.electric, power: 80, description: 'A flare of electricity is loosed to strike all Pokémon in battle. It may also cause paralysis.' },
      { name: 'Thunder Fang', type: PokemonElementType.electric, power: 65, description: 'The user bites with electrified fangs. It may also make the foe flinch or become paralyzed.' },
    ],
  },
  luxio: {
    flavorText: 'Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes.',
    stats: { hp: 60, attack: 85, defense: 49, specialAttack: 60, specialDefense: 49, speed: 60 },
    moves: [
      { name: 'Spark', type: PokemonElementType.electric, power: 65, description: 'The user throws an electrically charged tackle at the foe. It may also leave the target paralyzed.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'The user boosts the power of the Electric move it uses next. It also raises the user’s Sp. Def stat.' },
      { name: 'Discharge', type: PokemonElementType.electric, power: 80, description: 'A flare of electricity is loosed to strike all Pokémon in battle. It may also cause paralysis.' },
      { name: 'Thunder Fang', type: PokemonElementType.electric, power: 65, description: 'The user bites with electrified fangs. It may also make the foe flinch or become paralyzed.' },
    ],
  },
  luxray: {
    flavorText: 'It can see clearly through walls to track down its prey and seek its lost young.',
    stats: { hp: 80, attack: 120, defense: 79, specialAttack: 95, specialDefense: 79, speed: 70 },
    moves: [
      { name: 'Spark', type: PokemonElementType.electric, power: 65, description: 'The user throws an electrically charged tackle at the foe. It may also leave the target paralyzed.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'The user boosts the power of the Electric move it uses next. It also raises the user’s Sp. Def stat.' },
      { name: 'Discharge', type: PokemonElementType.electric, power: 80, description: 'A flare of electricity is loosed to strike all Pokémon in battle. It may also cause paralysis.' },
      { name: 'Thunder Fang', type: PokemonElementType.electric, power: 65, description: 'The user bites with electrified fangs. It may also make the foe flinch or become paralyzed.' },
    ],
  },
  budew: {
    flavorText: 'Sensitive to changing temperature, the bud is said to bloom when it feels the sun’s warm touch.',
    stats: { hp: 40, attack: 30, defense: 35, specialAttack: 50, specialDefense: 70, speed: 55 },
    moves: [
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'The user soaks itself with water. The move weakens Fire-type moves while the user is in the battle.' },
      { name: 'Stun Spore', type: PokemonElementType.grass, power: null, description: 'The user scatters a cloud of paralyzing powder. It may paralyze the target.' },
      { name: 'Growth', type: PokemonElementType.normal, power: null, description: 'The user’s body is forced to grow all at once. It raises the Sp. Atk stat.' },
      { name: 'Absorb', type: PokemonElementType.grass, power: 20, description: 'A nutrient-draining attack. The user’s HP is restored by half the damage taken by the target.' },
    ],
  },
  roserade: {
    flavorText: 'Each of its hands contains different toxins, but both hands can jab with near-fatal power.',
    stats: { hp: 60, attack: 70, defense: 65, specialAttack: 125, specialDefense: 105, speed: 90 },
    moves: [
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a poisonous barb of some sort. It may also poison the target.' },
      { name: 'Sweet Scent', type: PokemonElementType.normal, power: null, description: 'A sweet scent that lowers the foe’s evasiveness. It also lures wild Pokémon if used in grass, etc.' },
      { name: 'Mega Drain', type: PokemonElementType.grass, power: 40, description: 'A nutrient-draining attack. The user’s HP is restored by half the damage taken by the target.' },
      { name: 'Magical Leaf', type: PokemonElementType.grass, power: 60, description: 'The user scatters curious leaves that chase the foe. This attack will not miss.' },
    ],
  },
  cranidos: {
    flavorText: 'A lifelong jungle dweller from 100 million years ago, it would snap obstructing trees with head butts.',
    stats: { hp: 67, attack: 125, defense: 40, specialAttack: 30, specialDefense: 30, speed: 58 },
    moves: [
      { name: 'Head Smash', type: PokemonElementType.rock, power: 150, description: 'The user delivers a life-endangering head butt at full power. The user also takes terrible damage.' },
      { name: 'Pursuit', type: PokemonElementType.dark, power: 40, description: 'An attack move that inflicts double damage if used on a foe that is switching out of battle.' },
      { name: 'Focus Energy', type: PokemonElementType.normal, power: null, description: 'The user takes a deep breath and focuses to raise the critical-hit ratio of its attacks.' },
      { name: 'Ancient Power', type: PokemonElementType.rock, power: 60, description: 'The user attacks with a prehistoric power. It may also raise all the user’s stats at once.' },
    ],
  },
  rampardos: {
    flavorText: 'If two were to smash their heads together, their foot-thick skulls would keep them from fainting.',
    stats: { hp: 97, attack: 165, defense: 60, specialAttack: 65, specialDefense: 50, speed: 58 },
    moves: [
      { name: 'Head Smash', type: PokemonElementType.rock, power: 150, description: 'The user delivers a life-endangering head butt at full power. The user also takes terrible damage.' },
      { name: 'Pursuit', type: PokemonElementType.dark, power: 40, description: 'An attack move that inflicts double damage if used on a foe that is switching out of battle.' },
      { name: 'Focus Energy', type: PokemonElementType.normal, power: null, description: 'The user takes a deep breath and focuses to raise the critical-hit ratio of its attacks.' },
      { name: 'Ancient Power', type: PokemonElementType.rock, power: 60, description: 'The user attacks with a prehistoric power. It may also raise all the user’s stats at once.' },
    ],
  },
  shieldon: {
    flavorText: 'It is outstandingly armored. As a result, it can eat grass and berries without having to fight.',
    stats: { hp: 30, attack: 42, defense: 118, specialAttack: 42, specialDefense: 88, speed: 30 },
    moves: [
      { name: 'Metal Burst', type: PokemonElementType.steel, power: null, description: 'The user retaliates against the foe that last inflicted damage on it with much greater power.' },
      { name: 'Metal Sound', type: PokemonElementType.steel, power: null, description: 'A horrible sound like scraping metal is emitted to sharply reduce the foe’s Sp. Def stat.' },
      { name: 'Ancient Power', type: PokemonElementType.rock, power: 60, description: 'The user attacks with a prehistoric power. It may also raise all the user’s stats at once.' },
      { name: 'Iron Head', type: PokemonElementType.steel, power: 80, description: 'The foe slams the target with its steel-hard head. It may also make the target flinch.' },
    ],
  },
  bastiodon: {
    flavorText: 'When they lined up side by side, no foe could break through. They shielded their young in that way.',
    stats: { hp: 60, attack: 52, defense: 168, specialAttack: 47, specialDefense: 138, speed: 30 },
    moves: [
      { name: 'Metal Burst', type: PokemonElementType.steel, power: null, description: 'The user retaliates against the foe that last inflicted damage on it with much greater power.' },
      { name: 'Metal Sound', type: PokemonElementType.steel, power: null, description: 'A horrible sound like scraping metal is emitted to sharply reduce the foe’s Sp. Def stat.' },
      { name: 'Block', type: PokemonElementType.normal, power: null, description: 'The user blocks the foe’s way with arms spread wide to prevent escape.' },
      { name: 'Ancient Power', type: PokemonElementType.rock, power: 60, description: 'The user attacks with a prehistoric power. It may also raise all the user’s stats at once.' },
    ],
  },
  burmy_plant: {
    flavorText: 'Even if it is born where there are no cocooning materials, it somehow always ends up with a cloak.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: 'Bug Bite', type: PokemonElementType.bug, power: 60, description: 'The user bites the foe. If the foe is holding a Berry, the user eats it and gains its effect.' },
      { name: 'Tackle', type: PokemonElementType.normal, power: 40, description: 'A physical attack in which the user charges and slams into the foe with its whole body.' },
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
      { name: 'Protect', type: PokemonElementType.normal, power: null, description: 'It enables the user to evade all attacks. Its chance of failing rises if it is used in succession.' },
    ],
  },
  burmy_sandy: {
    flavorText: 'Even if it is born where there are no cocooning materials, it somehow always ends up with a cloak.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: 'Bug Bite', type: PokemonElementType.bug, power: 60, description: 'The user bites the foe. If the foe is holding a Berry, the user eats it and gains its effect.' },
      { name: 'Tackle', type: PokemonElementType.normal, power: 40, description: 'A physical attack in which the user charges and slams into the foe with its whole body.' },
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
      { name: 'Protect', type: PokemonElementType.normal, power: null, description: 'It enables the user to evade all attacks. Its chance of failing rises if it is used in succession.' },
    ],
  },
  burmy_trash: {
    flavorText: 'Even if it is born where there are no cocooning materials, it somehow always ends up with a cloak.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: 'Bug Bite', type: PokemonElementType.bug, power: 60, description: 'The user bites the foe. If the foe is holding a Berry, the user eats it and gains its effect.' },
      { name: 'Tackle', type: PokemonElementType.normal, power: 40, description: 'A physical attack in which the user charges and slams into the foe with its whole body.' },
      { name: 'Hidden Power', type: PokemonElementType.normal, power: 60, description: 'A unique attack that varies in type and intensity depending on the Pokémon using it.' },
      { name: 'Protect', type: PokemonElementType.normal, power: null, description: 'It enables the user to evade all attacks. Its chance of failing rises if it is used in succession.' },
    ],
  },
  wormadam_plant: {
    flavorText: 'When evolving, its body takes in surrounding materials. As a result, there are many body variations.',
    stats: { hp: 60, attack: 59, defense: 85, specialAttack: 79, specialDefense: 105, speed: 36 },
    moves: [
      { name: 'Razor Leaf', type: PokemonElementType.grass, power: 55, description: 'Sharp-edged leaves are launched to slash at the foe. It has a high critical-hit ratio.' },
      { name: 'Growth', type: PokemonElementType.normal, power: null, description: 'The user’s body is forced to grow all at once. It raises the Sp. Atk stat.' },
      { name: 'Bug Bite', type: PokemonElementType.bug, power: 60, description: 'The user bites the foe. If the foe is holding a Berry, the user eats it and gains its effect.' },
      { name: 'Leaf Storm', type: PokemonElementType.grass, power: 130, description: 'A storm of sharp leaves is whipped up. The attack’s recoil sharply reduces the user’s Sp. Atk stat.' },
    ],
  },
  wormadam_sandy: {
    flavorText: 'When evolving, its body takes in surrounding materials. As a result, there are many body variations.',
    stats: { hp: 60, attack: 79, defense: 105, specialAttack: 59, specialDefense: 85, speed: 36 },
    moves: [
      { name: 'Fissure', type: PokemonElementType.ground, power: null, description: 'The user opens up a fissure in the ground and drops the foe in. The target instantly faints if it hits.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'The user stiffens all the muscles in its body to raise its Defense stat.' },
      { name: 'Bug Bite', type: PokemonElementType.bug, power: 60, description: 'The user bites the foe. If the foe is holding a Berry, the user eats it and gains its effect.' },
      { name: 'Confusion', type: PokemonElementType.psychic, power: 50, description: 'The foe is hit by a weak telekinetic force. It may also leave the foe confused.' },
    ],
  },
  wormadam_trash: {
    flavorText: 'When evolving, its body takes in surrounding materials. As a result, there are many body variations.',
    stats: { hp: 60, attack: 69, defense: 95, specialAttack: 69, specialDefense: 95, speed: 36 },
    moves: [
      { name: 'Mirror Shot', type: PokemonElementType.steel, power: 65, description: 'The user looses a flash of energy from its polished body. It may also lower the target’s accuracy.' },
      { name: 'Metal Sound', type: PokemonElementType.steel, power: null, description: 'A horrible sound like scraping metal is emitted to sharply reduce the foe’s Sp. Def stat.' },
      { name: 'Bug Bite', type: PokemonElementType.bug, power: 60, description: 'The user bites the foe. If the foe is holding a Berry, the user eats it and gains its effect.' },
      { name: 'Confusion', type: PokemonElementType.psychic, power: 50, description: 'The foe is hit by a weak telekinetic force. It may also leave the foe confused.' },
    ],
  },
  mothim: {
    flavorText: 'While it loves floral honey, it won’t gather any itself. Instead, it plots to steal some from COMBEE.',
    stats: { hp: 70, attack: 94, defense: 50, specialAttack: 94, specialDefense: 50, speed: 66 },
    moves: [
      { name: 'Camouflage', type: PokemonElementType.normal, power: null, description: 'The user’s type is changed depending on its environment, such as at water’s edge, in grass, or in a cave.' },
      { name: 'Poison Powder', type: PokemonElementType.poison, power: null, description: 'A cloud of poisonous dust is scattered on the foe. It may poison the target.' },
      { name: 'Silver Wind', type: PokemonElementType.bug, power: 60, description: 'The foe is attacked with powdery scales blown by wind. It may also raise all the user’s stats.' },
      { name: 'Gust', type: PokemonElementType.flying, power: 40, description: 'A gust of wind is whipped up by wings and launched at the foe to inflict damage.' },
    ],
  },
  combee_female: {
    flavorText: 'The trio is together from birth. It constantly gathers honey from flowers to please VESPIQUEN.',
    stats: { hp: 30, attack: 30, defense: 42, specialAttack: 30, specialDefense: 42, speed: 70 },
    moves: [
      { name: 'Gust', type: PokemonElementType.flying, power: 40, description: 'A gust of wind is whipped up by wings and launched at the foe to inflict damage.' },
      { name: 'Sweet Scent', type: PokemonElementType.normal, power: null, description: 'A sweet scent that lowers the foe’s evasiveness. It also lures wild Pokémon if used in grass, etc.' },
      { name: 'Bug Bite', type: PokemonElementType.bug, power: 60, description: 'The user bites the foe. If the foe is holding a Berry, the user eats it and gains its effect.' },
    ],
  },
  combee_male: {
    flavorText: 'The trio is together from birth. It constantly gathers honey from flowers to please VESPIQUEN.',
    stats: { hp: 30, attack: 30, defense: 42, specialAttack: 30, specialDefense: 42, speed: 70 },
    moves: [
      { name: 'Gust', type: PokemonElementType.flying, power: 40, description: 'A gust of wind is whipped up by wings and launched at the foe to inflict damage.' },
      { name: 'Sweet Scent', type: PokemonElementType.normal, power: null, description: 'A sweet scent that lowers the foe’s evasiveness. It also lures wild Pokémon if used in grass, etc.' },
      { name: 'Bug Bite', type: PokemonElementType.bug, power: 60, description: 'The user bites the foe. If the foe is holding a Berry, the user eats it and gains its effect.' },
    ],
  },
  vespiquen: {
    flavorText: 'It releases various pheromones to make the grubs in its body do its bidding while fighting foes.',
    stats: { hp: 70, attack: 80, defense: 102, specialAttack: 80, specialDefense: 102, speed: 40 },
    moves: [
      { name: 'Attack Order', type: PokemonElementType.bug, power: 90, description: 'The user calls out its underlings to pummel the foe. It has a high critical-hit ratio.' },
      { name: 'Heal Order', type: PokemonElementType.bug, power: null, description: 'The user calls out its underlings to heal it. The user regains up to half of its max HP.' },
      { name: 'Defend Order', type: PokemonElementType.bug, power: null, description: 'The user calls out its underlings to shield its body, raising its Defense and Sp. Def stats.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a poisonous barb of some sort. It may also poison the target.' },
    ],
  },
  pachirisu: {
    flavorText: 'A pair may be seen rubbing their cheek pouches together in an effort to share stored electricity.',
    stats: { hp: 60, attack: 45, defense: 70, specialAttack: 45, specialDefense: 90, speed: 95 },
    moves: [
      { name: 'Sweet Kiss', type: PokemonElementType.normal, power: null, description: 'The user kisses the foe with a sweet, angelic cuteness that causes confusion.' },
      { name: 'Spark', type: PokemonElementType.electric, power: 65, description: 'The user throws an electrically charged tackle at the foe. It may also leave the target paralyzed.' },
      { name: 'Super Fang', type: PokemonElementType.normal, power: null, description: 'The user chomps hard on the foe with its sharp front fangs. It cuts the target’s HP to half.' },
      { name: 'Discharge', type: PokemonElementType.electric, power: 80, description: 'A flare of electricity is loosed to strike all Pokémon in battle. It may also cause paralysis.' },
    ],
  },
  buizel: {
    flavorText: 'It spins its two tails like a screw to propel itself through water. The tails also slice clinging seaweed.',
    stats: { hp: 55, attack: 65, defense: 35, specialAttack: 60, specialDefense: 30, speed: 85 },
    moves: [
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'The foe is hit with a destructive shock wave that always inflicts 20 HP damage.' },
      { name: 'Razor Wind', type: PokemonElementType.normal, power: 80, description: 'A two-turn attack. Blades of wind hit the foe on the second turn. It has a high critical-hit ratio.' },
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'The user soaks itself with water. The move weakens Fire-type moves while the user is in the battle.' },
      { name: 'Aqua Jet', type: PokemonElementType.water, power: 40, description: 'The user lunges at the foe at a speed that makes it almost invisible. It is sure to strike first.' },
    ],
  },
  floatzel: {
    flavorText: 'It is a common sight around fishing ports. It is known to rescue people and carry off prey.',
    stats: { hp: 85, attack: 105, defense: 55, specialAttack: 85, specialDefense: 50, speed: 115 },
    moves: [
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'The foe is hit with a destructive shock wave that always inflicts 20 HP damage.' },
      { name: 'Razor Wind', type: PokemonElementType.normal, power: 80, description: 'A two-turn attack. Blades of wind hit the foe on the second turn. It has a high critical-hit ratio.' },
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'The user soaks itself with water. The move weakens Fire-type moves while the user is in the battle.' },
      { name: 'Aqua Jet', type: PokemonElementType.water, power: 40, description: 'The user lunges at the foe at a speed that makes it almost invisible. It is sure to strike first.' },
    ],
  },
  cherubi: {
    flavorText: 'The small ball is not only filled with nutrients, it is also tasty. STARLY try to peck it off.',
    stats: { hp: 45, attack: 35, defense: 45, specialAttack: 62, specialDefense: 53, speed: 35 },
    moves: [
      { name: 'Lucky Chant', type: PokemonElementType.normal, power: null, description: 'The user chants an incantation toward the sky, preventing the foe from landing critical hits.' },
      { name: 'Growth', type: PokemonElementType.normal, power: null, description: 'The user’s body is forced to grow all at once. It raises the Sp. Atk stat.' },
      { name: 'Leech Seed', type: PokemonElementType.grass, power: null, description: 'A seed is planted on the foe. It steals some HP from the foe to heal the user on every turn.' },
      { name: 'Worry Seed', type: PokemonElementType.grass, power: null, description: 'A seed that causes worry is planted on the foe. It prevents sleep by making its ability Insomnia.' },
    ],
  },
  cherrim: {
    flavorText: 'If it senses strong sunlight, it opens its folded petals to absorb the sun’s rays with its whole body.',
    stats: { hp: 70, attack: 60, defense: 70, specialAttack: 87, specialDefense: 78, speed: 85 },
    moves: [
      { name: 'Petal Dance', type: PokemonElementType.grass, power: 120, description: 'The user attacks by scattering petals for two to three turns. The user then becomes confused.' },
      { name: 'Lucky Chant', type: PokemonElementType.normal, power: null, description: 'The user chants an incantation toward the sky, preventing the foe from landing critical hits.' },
      { name: 'Growth', type: PokemonElementType.normal, power: null, description: 'The user’s body is forced to grow all at once. It raises the Sp. Atk stat.' },
      { name: 'Leech Seed', type: PokemonElementType.grass, power: null, description: 'A seed is planted on the foe. It steals some HP from the foe to heal the user on every turn.' },
    ],
  },
  shellos_east: {
    flavorText: 'Beware of pushing strongly on its squishy body, as it makes a mysterious purple fluid ooze out.',
    stats: { hp: 76, attack: 48, defense: 48, specialAttack: 57, specialDefense: 62, speed: 34 },
    moves: [
      { name: 'Mud Bomb', type: PokemonElementType.ground, power: 65, description: 'The user launches a hard-packed mud ball to attack. It may also lower the target’s accuracy.' },
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'The user covers itself with mud. It weakens Electric-type moves while the user is in the battle.' },
      { name: 'Recover', type: PokemonElementType.normal, power: null, description: 'A self-healing move. The user restores its own HP by up to half of its max HP.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'The user stiffens all the muscles in its body to raise its Defense stat.' },
    ],
  },
  shellos_west: {
    flavorText: 'Beware of pushing strongly on its squishy body, as it makes a mysterious purple fluid ooze out.',
    stats: { hp: 76, attack: 48, defense: 48, specialAttack: 57, specialDefense: 62, speed: 34 },
    moves: [
      { name: 'Mud Bomb', type: PokemonElementType.ground, power: 65, description: 'The user launches a hard-packed mud ball to attack. It may also lower the target’s accuracy.' },
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'The user covers itself with mud. It weakens Electric-type moves while the user is in the battle.' },
      { name: 'Recover', type: PokemonElementType.normal, power: null, description: 'A self-healing move. The user restores its own HP by up to half of its max HP.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'The user stiffens all the muscles in its body to raise its Defense stat.' },
    ],
  },
  gastrodon_east: {
    flavorText: 'Long ago, its entire back was shielded with a sturdy shell. There are traces of it left in its cells.',
    stats: { hp: 111, attack: 83, defense: 68, specialAttack: 92, specialDefense: 82, speed: 39 },
    moves: [
      { name: 'Mud Bomb', type: PokemonElementType.ground, power: 65, description: 'The user launches a hard-packed mud ball to attack. It may also lower the target’s accuracy.' },
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'The user covers itself with mud. It weakens Electric-type moves while the user is in the battle.' },
      { name: 'Recover', type: PokemonElementType.normal, power: null, description: 'A self-healing move. The user restores its own HP by up to half of its max HP.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'The user stiffens all the muscles in its body to raise its Defense stat.' },
    ],
  },
  gastrodon_west: {
    flavorText: 'Long ago, its entire back was shielded with a sturdy shell. There are traces of it left in its cells.',
    stats: { hp: 111, attack: 83, defense: 68, specialAttack: 92, specialDefense: 82, speed: 39 },
    moves: [
      { name: 'Mud Bomb', type: PokemonElementType.ground, power: 65, description: 'The user launches a hard-packed mud ball to attack. It may also lower the target’s accuracy.' },
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'The user covers itself with mud. It weakens Electric-type moves while the user is in the battle.' },
      { name: 'Recover', type: PokemonElementType.normal, power: null, description: 'A self-healing move. The user restores its own HP by up to half of its max HP.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'The user stiffens all the muscles in its body to raise its Defense stat.' },
    ],
  },
  ambipom: {
    flavorText: 'Split into two, the tails are so adept at handling and doing things, AMBIPOM rarely uses its hands.',
    stats: { hp: 75, attack: 100, defense: 66, specialAttack: 60, specialDefense: 66, speed: 115 },
    moves: [
      { name: 'Double Hit', type: PokemonElementType.normal, power: 35, description: 'The user slams the foe with a tail, etc. The target is hit twice in a row.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes for two to five times in quick succession.' },
      { name: 'Tickle', type: PokemonElementType.normal, power: null, description: 'The user tickles the foe into laughing, reducing its Attack and Defense stats.' },
      { name: 'Scratch', type: PokemonElementType.normal, power: 40, description: 'Hard, pointed, and sharp claws rake the foe to inflict damage.' },
    ],
  },
  drifloon: {
    flavorText: 'Because of the way it floats aimlessly, an old folktale calls it a “Signpost for Wandering Spirits.”',
    stats: { hp: 90, attack: 50, defense: 34, specialAttack: 60, specialDefense: 44, speed: 70 },
    moves: [
      { name: 'Constrict', type: PokemonElementType.normal, power: 10, description: 'The foe is attacked with long, creeping tentacles or vines. It may also lower the target’s Speed.' },
      { name: 'Minimize', type: PokemonElementType.normal, power: null, description: 'The user compresses its body to make itself look smaller. The user’s evasion stat is boosted.' },
      { name: 'Spit Up', type: PokemonElementType.normal, power: null, description: 'The power stored using the move Stockpile is released at once in an attack.' },
      { name: 'Swallow', type: PokemonElementType.normal, power: null, description: 'The power stored using the move Stockpile is absorbed by the user to heal its HP.' },
    ],
  },
  drifblim: {
    flavorText: 'At dusk, swarms of them are carried aloft on winds. When noticed, they suddenly vanish.',
    stats: { hp: 150, attack: 80, defense: 44, specialAttack: 90, specialDefense: 54, speed: 80 },
    moves: [
      { name: 'Constrict', type: PokemonElementType.normal, power: 10, description: 'The foe is attacked with long, creeping tentacles or vines. It may also lower the target’s Speed.' },
      { name: 'Minimize', type: PokemonElementType.normal, power: null, description: 'The user compresses its body to make itself look smaller. The user’s evasion stat is boosted.' },
      { name: 'Spit Up', type: PokemonElementType.normal, power: null, description: 'The power stored using the move Stockpile is released at once in an attack.' },
      { name: 'Swallow', type: PokemonElementType.normal, power: null, description: 'The power stored using the move Stockpile is absorbed by the user to heal its HP.' },
    ],
  },
  buneary: {
    flavorText: 'Its ears are always rolled up. They can be forcefully extended to shatter even a large boulder.',
    stats: { hp: 55, attack: 66, defense: 44, specialAttack: 44, specialDefense: 56, speed: 85 },
    moves: [
      { name: 'Jump Kick', type: PokemonElementType.fighting, power: 100, description: 'The user jumps up high, then strikes with a kick. If the kick misses, the user hurts itself.' },
      { name: 'Dizzy Punch', type: PokemonElementType.normal, power: 70, description: 'The foe is hit with rhythmically launched punches that may also leave it confused.' },
      { name: 'Healing Wish', type: PokemonElementType.psychic, power: null, description: 'The user faints. In return, the Pokémon taking its place will have its HP restored and status cured.' },
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'The user just flops and splashes around to no effect at all...' },
    ],
  },
  lopunny: {
    flavorText: 'The ears appear to be delicate. If they are touched roughly, it kicks with its graceful legs.',
    stats: { hp: 65, attack: 76, defense: 84, specialAttack: 54, specialDefense: 96, speed: 105 },
    moves: [
      { name: 'Jump Kick', type: PokemonElementType.fighting, power: 100, description: 'The user jumps up high, then strikes with a kick. If the kick misses, the user hurts itself.' },
      { name: 'Dizzy Punch', type: PokemonElementType.normal, power: 70, description: 'The foe is hit with rhythmically launched punches that may also leave it confused.' },
      { name: 'Healing Wish', type: PokemonElementType.psychic, power: null, description: 'The user faints. In return, the Pokémon taking its place will have its HP restored and status cured.' },
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'The user just flops and splashes around to no effect at all...' },
    ],
  },
  mismagius: {
    flavorText: 'Its cry sounds like an incantation. It is said the cry may rarely be imbued with happiness-giving power.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 105, specialDefense: 105, speed: 105 },
    moves: [
      { name: 'Lucky Chant', type: PokemonElementType.normal, power: null, description: 'The user chants an incantation toward the sky, preventing the foe from landing critical hits.' },
      { name: 'Psywave', type: PokemonElementType.psychic, power: null, description: 'The foe is attacked with an odd, hot energy wave. The attack varies in intensity.' },
      { name: 'Magical Leaf', type: PokemonElementType.grass, power: 60, description: 'The user scatters curious leaves that chase the foe. This attack will not miss.' },
      { name: 'Astonish', type: PokemonElementType.ghost, power: 30, description: 'The user attacks the foe while shouting in a startling fashion. It may also make the target flinch.' },
    ],
  },
  honchkrow: {
    flavorText: 'If one utters a deep cry, many MURKROW gather quickly. For this, it is called “Summoner of Night.”',
    stats: { hp: 100, attack: 125, defense: 52, specialAttack: 105, specialDefense: 52, speed: 71 },
    moves: [
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide to inflict damage.' },
      { name: 'Pursuit', type: PokemonElementType.dark, power: 40, description: 'An attack move that inflicts double damage if used on a foe that is switching out of battle.' },
      { name: 'Night Slash', type: PokemonElementType.dark, power: 70, description: 'The user slashes the foe the instant an opportunity arises. It has a high critical-hit ratio.' },
      { name: 'Haze', type: PokemonElementType.ice, power: null, description: 'The user creates a haze that eliminates every stat change among all the Pokémon engaged in battle.' },
    ],
  },
  glameow: {
    flavorText: 'It hides its spiteful tendency of hooking its claws into the nose of its Trainer if it isn’t fed.',
    stats: { hp: 49, attack: 55, defense: 42, specialAttack: 42, specialDefense: 37, speed: 85 },
    moves: [
      { name: 'Assist', type: PokemonElementType.normal, power: null, description: 'The user hurriedly and randomly uses a move among those known by other Pokémon in the party.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'The user employs hypnotic suggestion to make the target fall into a deep sleep.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes for two to five times in quick succession.' },
      { name: 'Fake Out', type: PokemonElementType.normal, power: 40, description: 'An attack that hits first and makes the target flinch. This move works only on the first turn.' },
    ],
  },
  purugly: {
    flavorText: 'It binds its body with its tails to make itself look bigger. If it locks eyes, it will glare ceaselessly.',
    stats: { hp: 71, attack: 82, defense: 64, specialAttack: 64, specialDefense: 59, speed: 112 },
    moves: [
      { name: 'Assist', type: PokemonElementType.normal, power: null, description: 'The user hurriedly and randomly uses a move among those known by other Pokémon in the party.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'The user employs hypnotic suggestion to make the target fall into a deep sleep.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes for two to five times in quick succession.' },
      { name: 'Fake Out', type: PokemonElementType.normal, power: 40, description: 'An attack that hits first and makes the target flinch. This move works only on the first turn.' },
    ],
  },
  chingling: {
    flavorText: 'There is an orb inside its mouth. When it hops, the orb bounces all over and makes a ringing sound.',
    stats: { hp: 45, attack: 30, defense: 50, specialAttack: 65, specialDefense: 50, speed: 45 },
    moves: [
      { name: 'Wrap', type: PokemonElementType.normal, power: 15, description: 'A long body or vines are used to wrap and squeeze the foe for two to five turns.' },
      { name: 'Confusion', type: PokemonElementType.psychic, power: 50, description: 'The foe is hit by a weak telekinetic force. It may also leave the foe confused.' },
      { name: 'Astonish', type: PokemonElementType.ghost, power: 30, description: 'The user attacks the foe while shouting in a startling fashion. It may also make the target flinch.' },
      { name: 'Last Resort', type: PokemonElementType.normal, power: 140, description: 'This move can be used only after the user has used all the other moves it knows in the battle.' },
    ],
  },
  stunky: {
    flavorText: 'It sprays a foul fluid from its rear. Its stench spreads over a mile radius, driving Pokémon away.',
    stats: { hp: 63, attack: 63, defense: 47, specialAttack: 41, specialDefense: 41, speed: 74 },
    moves: [
      { name: 'Poison Gas', type: PokemonElementType.poison, power: null, description: 'A cloud of poison gas is sprayed in the foe’s face. It may poison the target.' },
      { name: 'Smokescreen', type: PokemonElementType.normal, power: null, description: 'The user releases an obscuring cloud of smoke or ink. It reduces the foe’s accuracy.' },
      { name: 'Memento', type: PokemonElementType.dark, power: null, description: 'The user faints upon using this move. In return, it sharply lowers the target’s Attack and Sp. Atk.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes for two to five times in quick succession.' },
    ],
  },
  skuntank: {
    flavorText: 'It attacks by spraying a horribly smelly fluid from the tip of its tail. Attacks from above confound it.',
    stats: { hp: 103, attack: 93, defense: 67, specialAttack: 71, specialDefense: 61, speed: 84 },
    moves: [
      { name: 'Poison Gas', type: PokemonElementType.poison, power: null, description: 'A cloud of poison gas is sprayed in the foe’s face. It may poison the target.' },
      { name: 'Smokescreen', type: PokemonElementType.normal, power: null, description: 'The user releases an obscuring cloud of smoke or ink. It reduces the foe’s accuracy.' },
      { name: 'Memento', type: PokemonElementType.dark, power: null, description: 'The user faints upon using this move. In return, it sharply lowers the target’s Attack and Sp. Atk.' },
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes for two to five times in quick succession.' },
    ],
  },
  bronzor: {
    flavorText: 'There are researchers who believe this Pokémon reflected like a mirror in the distant past.',
    stats: { hp: 57, attack: 24, defense: 86, specialAttack: 24, specialDefense: 86, speed: 23 },
    moves: [
      { name: 'Heal Block', type: PokemonElementType.psychic, power: null, description: 'The user prevents the foe from using any HP-recovery moves for five turns.' },
      { name: 'Extrasensory', type: PokemonElementType.psychic, power: 80, description: 'The user attacks with an odd, unseeable power. It may also make the foe flinch.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'The user employs hypnotic suggestion to make the target fall into a deep sleep.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'The user draws up to the foe disarmingly, then throws a sucker punch. It hits without fail.' },
    ],
  },
  bronzong: {
    flavorText: 'It brought rains by opening portals to another world. It was revered as a bringer of plentiful harvests.',
    stats: { hp: 67, attack: 89, defense: 116, specialAttack: 79, specialDefense: 116, speed: 33 },
    moves: [
      { name: 'Heal Block', type: PokemonElementType.psychic, power: null, description: 'The user prevents the foe from using any HP-recovery moves for five turns.' },
      { name: 'Extrasensory', type: PokemonElementType.psychic, power: 80, description: 'The user attacks with an odd, unseeable power. It may also make the foe flinch.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'The user employs hypnotic suggestion to make the target fall into a deep sleep.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'The user draws up to the foe disarmingly, then throws a sucker punch. It hits without fail.' },
    ],
  },
  bonsly: {
    flavorText: 'It prefers an arid atmosphere. It leaks water that looks like tears when adjusting its moisture level.',
    stats: { hp: 50, attack: 80, defense: 95, specialAttack: 10, specialDefense: 45, speed: 10 },
    moves: [
      { name: 'Rock Throw', type: PokemonElementType.rock, power: 50, description: 'The user picks up and throws a small rock at the foe to attack.' },
      { name: 'Copycat', type: PokemonElementType.normal, power: null, description: 'The user mimics the move used immediately before it. The move fails if no other move has been used yet.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'The user draws up to the foe disarmingly, then throws a sucker punch. It hits without fail.' },
      { name: 'Slam', type: PokemonElementType.normal, power: 80, description: 'The foe is slammed with a long tail, vines, etc., to inflict damage.' },
    ],
  },
  mimeJr: {
    flavorText: 'It mimics the expressions and motions of those it sees to understand the feelings of others.',
    stats: { hp: 20, attack: 25, defense: 45, specialAttack: 70, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'Meditate', type: PokemonElementType.psychic, power: null, description: 'The user meditates to awaken the power deep within its body and raise its Attack stat.' },
      { name: 'Barrier', type: PokemonElementType.psychic, power: null, description: 'The user throws up a sturdy wall that sharply raises its Defense stat.' },
      { name: 'Double Slap', type: PokemonElementType.normal, power: 15, description: 'The foe is slapped repeatedly, back and forth, two to five times in a row.' },
      { name: 'Copycat', type: PokemonElementType.normal, power: null, description: 'The user mimics the move used immediately before it. The move fails if no other move has been used yet.' },
    ],
  },
  happiny: {
    flavorText: 'It likes to carry around a small rock. It may wander around others’ feet and cause them to stumble.',
    stats: { hp: 100, attack: 5, defense: 5, specialAttack: 15, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'Sweet Kiss', type: PokemonElementType.normal, power: null, description: 'The user kisses the foe with a sweet, angelic cuteness that causes confusion.' },
      { name: 'Refresh', type: PokemonElementType.normal, power: null, description: 'The user rests to cure itself of a poisoning, burn, or paralysis.' },
      { name: 'Copycat', type: PokemonElementType.normal, power: null, description: 'The user mimics the move used immediately before it. The move fails if no other move has been used yet.' },
      { name: 'Pound', type: PokemonElementType.normal, power: 40, description: 'The foe is physically pounded with a long tail or a foreleg, etc.' },
    ],
  },
  chatot: {
    flavorText: 'Its tongue is just like a human’s. As a result, it can cleverly mimic human speech.',
    stats: { hp: 76, attack: 65, defense: 45, specialAttack: 92, specialDefense: 42, speed: 91 },
    moves: [
      { name: 'Chatter', type: PokemonElementType.flying, power: 65, description: 'The user attacks using a sound wave based on words it has learned. It may also confuse the foe.' },
      { name: 'Mirror Move', type: PokemonElementType.flying, power: null, description: 'The user counters the foe by mimicking the move last used by the foe.' },
      { name: 'Sing', type: PokemonElementType.normal, power: null, description: 'A soothing lullaby is sung in a calming voice that puts the foe into a deep slumber.' },
      { name: 'Fury Attack', type: PokemonElementType.normal, power: 15, description: 'The foe is jabbed repeatedly with a horn or beak two to five times in a row.' },
    ],
  },
  spiritomb: {
    flavorText: 'Its constant mischief and misdeeds resulted in it being bound to an Odd Keystone by a mysterious spell.',
    stats: { hp: 50, attack: 92, defense: 108, specialAttack: 92, specialDefense: 108, speed: 35 },
    moves: [
      { name: 'Shadow Sneak', type: PokemonElementType.ghost, power: 40, description: 'The user extends its shadow and attacks the foe from behind. This move always goes first.' },
      { name: 'Memento', type: PokemonElementType.dark, power: null, description: 'The user faints upon using this move. In return, it sharply lowers the target’s Attack and Sp. Atk.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'The user employs hypnotic suggestion to make the target fall into a deep sleep.' },
      { name: 'Ominous Wind', type: PokemonElementType.ghost, power: 60, description: 'The user creates a gust of repulsive wind. It may also raise all the user’s stats at once.' },
    ],
  },
  gible: {
    flavorText: 'It attacks using its huge mouth. While its attacks are powerful, it hurts itself out of clumsiness, too.',
    stats: { hp: 58, attack: 70, defense: 45, specialAttack: 40, specialDefense: 45, speed: 42 },
    moves: [
      { name: 'Dragon Rage', type: PokemonElementType.dragon, power: null, description: 'The foe is stricken by a shock wave. This attack always inflicts 40 HP damage.' },
      { name: 'Dragon Rush', type: PokemonElementType.dragon, power: 100, description: 'The user tackles the foe while exhibiting overwhelming menace. It may also make the target flinch.' },
      { name: 'Sand Tomb', type: PokemonElementType.ground, power: 35, description: 'The user traps the foe inside a harshly raging sandstorm for two to five turns.' },
      { name: 'Dragon Claw', type: PokemonElementType.dragon, power: 80, description: 'The user slashes the foe with huge, sharp claws.' },
    ],
  },
  gabite: {
    flavorText: 'It loves sparkly things. It seeks treasures in caves and hoards the loot in its nest.',
    stats: { hp: 68, attack: 90, defense: 65, specialAttack: 50, specialDefense: 55, speed: 82 },
    moves: [
      { name: 'Dragon Rage', type: PokemonElementType.dragon, power: null, description: 'The foe is stricken by a shock wave. This attack always inflicts 40 HP damage.' },
      { name: 'Dragon Rush', type: PokemonElementType.dragon, power: 100, description: 'The user tackles the foe while exhibiting overwhelming menace. It may also make the target flinch.' },
      { name: 'Sand Tomb', type: PokemonElementType.ground, power: 35, description: 'The user traps the foe inside a harshly raging sandstorm for two to five turns.' },
      { name: 'Dragon Claw', type: PokemonElementType.dragon, power: 80, description: 'The user slashes the foe with huge, sharp claws.' },
    ],
  },
  garchomp: {
    flavorText: 'It is said that when one runs at high speed, its wings create blades of wind that can fell nearby trees.',
    stats: { hp: 108, attack: 130, defense: 95, specialAttack: 80, specialDefense: 85, speed: 102 },
    moves: [
      { name: 'Dragon Rage', type: PokemonElementType.dragon, power: null, description: 'The foe is stricken by a shock wave. This attack always inflicts 40 HP damage.' },
      { name: 'Dragon Rush', type: PokemonElementType.dragon, power: 100, description: 'The user tackles the foe while exhibiting overwhelming menace. It may also make the target flinch.' },
      { name: 'Sand Tomb', type: PokemonElementType.ground, power: 35, description: 'The user traps the foe inside a harshly raging sandstorm for two to five turns.' },
      { name: 'Dragon Claw', type: PokemonElementType.dragon, power: 80, description: 'The user slashes the foe with huge, sharp claws.' },
    ],
  },
  munchlax: {
    flavorText: 'In its desperation to gulp down food, it forgets about the food it has hidden under its fur.',
    stats: { hp: 135, attack: 85, defense: 40, specialAttack: 40, specialDefense: 85, speed: 5 },
    moves: [
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Lick', type: PokemonElementType.ghost, power: 30, description: 'The foe is licked with a long tongue, causing damage. It may also paralyze the target.' },
      { name: 'Swallow', type: PokemonElementType.normal, power: null, description: 'The power stored using the move Stockpile is absorbed by the user to heal its HP.' },
      { name: 'Stockpile', type: PokemonElementType.normal, power: null, description: 'The user charges up power, and raises both its Defense and Sp. Def. The move can be used three times.' },
    ],
  },
  hippopotas: {
    flavorText: 'It shuts its nostrils tight then travels through sand as if walking. They form colonies of around ten.',
    stats: { hp: 68, attack: 72, defense: 78, specialAttack: 38, specialDefense: 42, speed: 32 },
    moves: [
      { name: 'Fissure', type: PokemonElementType.ground, power: null, description: 'The user opens up a fissure in the ground and drops the foe in. The target instantly faints if it hits.' },
      { name: 'Sand Tomb', type: PokemonElementType.ground, power: 35, description: 'The user traps the foe inside a harshly raging sandstorm for two to five turns.' },
      { name: 'Yawn', type: PokemonElementType.normal, power: null, description: 'The user lets loose a huge yawn that lulls the foe into falling asleep on the next turn.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'Sand is hurled in the foe’s face, reducing its accuracy.' },
    ],
  },
  riolu: {
    flavorText: 'It has the peculiar power of being able to see emotions such as joy and rage in the form of waves.',
    stats: { hp: 40, attack: 70, defense: 40, specialAttack: 35, specialDefense: 40, speed: 60 },
    moves: [
      { name: 'Force Palm', type: PokemonElementType.fighting, power: 60, description: 'The foe is attacked with a shock wave. It may also leave the target paralyzed.' },
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Copycat', type: PokemonElementType.normal, power: null, description: 'The user mimics the move used immediately before it. The move fails if no other move has been used yet.' },
      { name: 'Feint', type: PokemonElementType.normal, power: 30, description: 'An attack that hits a foe using Protect or Detect. It also lifts the effects of those moves.' },
    ],
  },
  lucario: {
    flavorText: 'A well-trained one can sense auras to identify and take in the feelings of creatures over half a mile away.',
    stats: { hp: 70, attack: 110, defense: 70, specialAttack: 115, specialDefense: 70, speed: 90 },
    moves: [
      { name: 'Bone Rush', type: PokemonElementType.ground, power: 25, description: 'The user strikes at the foe with a hard bone two to five times in a row.' },
      { name: 'Force Palm', type: PokemonElementType.fighting, power: 60, description: 'The foe is attacked with a shock wave. It may also leave the target paralyzed.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Me First', type: PokemonElementType.normal, power: null, description: 'The user tries to cut ahead of the foe to steal and use the foe’s intended move with greater power.' },
    ],
  },
  hippowdon: {
    flavorText: 'It is surprisingly quick to anger. It holds its mouth agape as a display of its strength.',
    stats: { hp: 108, attack: 112, defense: 118, specialAttack: 68, specialDefense: 72, speed: 47 },
    moves: [
      { name: 'Fissure', type: PokemonElementType.ground, power: null, description: 'The user opens up a fissure in the ground and drops the foe in. The target instantly faints if it hits.' },
      { name: 'Sand Tomb', type: PokemonElementType.ground, power: 35, description: 'The user traps the foe inside a harshly raging sandstorm for two to five turns.' },
      { name: 'Yawn', type: PokemonElementType.normal, power: null, description: 'The user lets loose a huge yawn that lulls the foe into falling asleep on the next turn.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'Sand is hurled in the foe’s face, reducing its accuracy.' },
    ],
  },
  skorupi: {
    flavorText: 'As soon as the tail claws close, its needle tips secrete poison. It can survive a year without food.',
    stats: { hp: 40, attack: 50, defense: 90, specialAttack: 30, specialDefense: 55, speed: 65 },
    moves: [
      { name: 'Acupressure', type: PokemonElementType.normal, power: null, description: 'The user applies pressure to stress points, sharply boosting one of its stats.' },
      { name: 'Poison Fang', type: PokemonElementType.poison, power: 50, description: 'The user bites the foe with toxic fangs. It may also leave the foe badly poisoned.' },
      { name: 'Cross Poison', type: PokemonElementType.poison, power: 70, description: 'A slashing attack that may also leave the target poisoned. It has a high critical-hit ratio.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a poisonous barb of some sort. It may also poison the target.' },
    ],
  },
  drapion: {
    flavorText: 'Possessing a sturdy build, it takes pride in its strength, taking down foes without using toxins.',
    stats: { hp: 70, attack: 90, defense: 110, specialAttack: 60, specialDefense: 75, speed: 95 },
    moves: [
      { name: 'Acupressure', type: PokemonElementType.normal, power: null, description: 'The user applies pressure to stress points, sharply boosting one of its stats.' },
      { name: 'Poison Fang', type: PokemonElementType.poison, power: 50, description: 'The user bites the foe with toxic fangs. It may also leave the foe badly poisoned.' },
      { name: 'Cross Poison', type: PokemonElementType.poison, power: 70, description: 'A slashing attack that may also leave the target poisoned. It has a high critical-hit ratio.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a poisonous barb of some sort. It may also poison the target.' },
    ],
  },
  croagunk: {
    flavorText: 'It rarely fights fairly, but that is strictly to ensure survival. It is popular as a mascot.',
    stats: { hp: 48, attack: 61, defense: 40, specialAttack: 61, specialDefense: 40, speed: 50 },
    moves: [
      { name: 'Mud Bomb', type: PokemonElementType.ground, power: 65, description: 'The user launches a hard-packed mud ball to attack. It may also lower the target’s accuracy.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a poisonous barb of some sort. It may also poison the target.' },
      { name: 'Flatter', type: PokemonElementType.dark, power: null, description: 'Flattery is used to confuse the foe. However, it also raises the target’s Sp. Atk stat.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'The user draws up to the foe disarmingly, then throws a sucker punch. It hits without fail.' },
    ],
  },
  toxicroak: {
    flavorText: 'It has a poison sac at its throat. When it croaks, the stored poison is churned for greater potency.',
    stats: { hp: 83, attack: 106, defense: 65, specialAttack: 86, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'Mud Bomb', type: PokemonElementType.ground, power: 65, description: 'The user launches a hard-packed mud ball to attack. It may also lower the target’s accuracy.' },
      { name: 'Poison Sting', type: PokemonElementType.poison, power: 15, description: 'The foe is stabbed with a poisonous barb of some sort. It may also poison the target.' },
      { name: 'Flatter', type: PokemonElementType.dark, power: null, description: 'Flattery is used to confuse the foe. However, it also raises the target’s Sp. Atk stat.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'The user draws up to the foe disarmingly, then throws a sucker punch. It hits without fail.' },
    ],
  },
  carnivine: {
    flavorText: 'It binds itself to trees in marshes. It attracts prey with its sweet-smelling drool and gulps them down.',
    stats: { hp: 74, attack: 100, defense: 72, specialAttack: 90, specialDefense: 72, speed: 46 },
    moves: [
      { name: 'Wring Out', type: PokemonElementType.normal, power: null, description: 'The user powerfully wrings the foe. The more HP the foe has, the greater this attack’s power.' },
      { name: 'Vine Whip', type: PokemonElementType.grass, power: 45, description: 'The foe is struck with slender, whiplike vines to inflict damage.' },
      { name: 'Power Whip', type: PokemonElementType.grass, power: 120, description: 'The user violently whirls its vines or tentacles to harshly lash the foe.' },
      { name: 'Spit Up', type: PokemonElementType.normal, power: null, description: 'The power stored using the move Stockpile is released at once in an attack.' },
    ],
  },
  finneon: {
    flavorText: 'The line running down its side can store sunlight. It shines vividly at night.',
    stats: { hp: 49, attack: 49, defense: 56, specialAttack: 49, specialDefense: 61, speed: 66 },
    moves: [
      { name: 'Silver Wind', type: PokemonElementType.bug, power: 60, description: 'The foe is attacked with powdery scales blown by wind. It may also raise all the user’s stats.' },
      { name: 'Aqua Ring', type: PokemonElementType.water, power: null, description: 'The user envelops itself in a veil made of water. It regains some HP on every turn.' },
      { name: 'Gust', type: PokemonElementType.flying, power: 40, description: 'A gust of wind is whipped up by wings and launched at the foe to inflict damage.' },
      { name: 'Pound', type: PokemonElementType.normal, power: 40, description: 'The foe is physically pounded with a long tail or a foreleg, etc.' },
    ],
  },
  lumineon: {
    flavorText: 'It crawls along the seafloor using its long front fins like legs. It competes for food with LANTURN.',
    stats: { hp: 69, attack: 69, defense: 76, specialAttack: 69, specialDefense: 86, speed: 91 },
    moves: [
      { name: 'Silver Wind', type: PokemonElementType.bug, power: 60, description: 'The foe is attacked with powdery scales blown by wind. It may also raise all the user’s stats.' },
      { name: 'Aqua Ring', type: PokemonElementType.water, power: null, description: 'The user envelops itself in a veil made of water. It regains some HP on every turn.' },
      { name: 'Gust', type: PokemonElementType.flying, power: 40, description: 'A gust of wind is whipped up by wings and launched at the foe to inflict damage.' },
      { name: 'Pound', type: PokemonElementType.normal, power: 40, description: 'The foe is physically pounded with a long tail or a foreleg, etc.' },
    ],
  },
  mantyke: {
    flavorText: 'People organize tours to see this Pokémon frolic and skim the tops of waves with REMORAID.',
    stats: { hp: 45, attack: 20, defense: 50, specialAttack: 60, specialDefense: 120, speed: 50 },
    moves: [
      { name: 'Wing Attack', type: PokemonElementType.flying, power: 60, description: 'The foe is struck with large, imposing wings spread wide to inflict damage.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of countless bubbles is jetted at the foe. It may also lower the target’s Speed stat.' },
      { name: 'Aqua Ring', type: PokemonElementType.water, power: null, description: 'The user envelops itself in a veil made of water. It regains some HP on every turn.' },
      { name: 'Supersonic', type: PokemonElementType.normal, power: null, description: 'The user generates odd sound waves from its body. It may confuse the target.' },
    ],
  },
  snover: {
    flavorText: 'Seemingly curious about people, they gather around footsteps they find on snowy mountains.',
    stats: { hp: 60, attack: 62, defense: 50, specialAttack: 62, specialDefense: 60, speed: 40 },
    moves: [
      { name: 'Grass Whistle', type: PokemonElementType.grass, power: null, description: 'The user plays a pleasant melody that lulls the foe into a deep sleep.' },
      { name: 'Sheer Cold', type: PokemonElementType.ice, power: null, description: 'The foe is attacked with a blast of absolute-zero cold. The foe instantly faints if it hits.' },
      { name: 'Wood Hammer', type: PokemonElementType.grass, power: 120, description: 'The user slams its rugged body into the foe to attack. The user also sustains serious damage.' },
      { name: 'Ice Shard', type: PokemonElementType.ice, power: 40, description: 'The user flash freezes chunks of ice and hurls them. This move always goes first.' },
    ],
  },
  abomasnow: {
    flavorText: 'They appear when the snow flowers bloom. When the petals fall, they retreat to places unknown again.',
    stats: { hp: 90, attack: 92, defense: 75, specialAttack: 92, specialDefense: 85, speed: 60 },
    moves: [
      { name: 'Grass Whistle', type: PokemonElementType.grass, power: null, description: 'The user plays a pleasant melody that lulls the foe into a deep sleep.' },
      { name: 'Sheer Cold', type: PokemonElementType.ice, power: null, description: 'The foe is attacked with a blast of absolute-zero cold. The foe instantly faints if it hits.' },
      { name: 'Wood Hammer', type: PokemonElementType.grass, power: 120, description: 'The user slams its rugged body into the foe to attack. The user also sustains serious damage.' },
      { name: 'Ice Shard', type: PokemonElementType.ice, power: 40, description: 'The user flash freezes chunks of ice and hurls them. This move always goes first.' },
    ],
  },
  weavile: {
    flavorText: 'Evolution made it even more devious. It communicates by clawing signs in boulders.',
    stats: { hp: 70, attack: 120, defense: 65, specialAttack: 45, specialDefense: 85, speed: 125 },
    moves: [
      { name: 'Fury Swipes', type: PokemonElementType.normal, power: 18, description: 'The foe is raked with sharp claws or scythes for two to five times in quick succession.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'The user draws up to the foe disarmingly, then throws a sucker punch. It hits without fail.' },
      { name: 'Metal Claw', type: PokemonElementType.steel, power: 50, description: 'The foe is raked with steel claws. It may also raise the user’s Attack stat.' },
      { name: 'Embargo', type: PokemonElementType.dark, power: null, description: 'It prevents the foe from using its held item. Its Trainer is also prevented from using items on it.' },
    ],
  },
  magnezone: {
    flavorText: 'A group tried to use scientific means to make MAGNEZONE evolve, but their efforts ended in failure.',
    stats: { hp: 70, attack: 70, defense: 115, specialAttack: 130, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'Magnet Bomb', type: PokemonElementType.steel, power: 60, description: 'The user launches a steel bomb that sticks to the target. This attack will not miss.' },
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'The foe is hit with a destructive shock wave that always inflicts 20 HP damage.' },
      { name: 'Mirror Shot', type: PokemonElementType.steel, power: 65, description: 'The user looses a flash of energy from its polished body. It may also lower the target’s accuracy.' },
      { name: 'Lock On', type: PokemonElementType.normal, power: null, description: 'The user takes sure aim at the foe. It ensures the next attack does not fail to hit the target.' },
    ],
  },
  lickilicky: {
    flavorText: 'The long tongue is always soggy with slobber. The saliva contains a solvent that causes numbness.',
    stats: { hp: 110, attack: 85, defense: 95, specialAttack: 80, specialDefense: 95, speed: 50 },
    moves: [
      { name: 'Wring Out', type: PokemonElementType.normal, power: null, description: 'The user powerfully wrings the foe. The more HP the foe has, the greater this attack’s power.' },
      { name: 'Me First', type: PokemonElementType.normal, power: null, description: 'The user tries to cut ahead of the foe to steal and use the foe’s intended move with greater power.' },
      { name: 'Wrap', type: PokemonElementType.normal, power: 15, description: 'A long body or vines are used to wrap and squeeze the foe for two to five turns.' },
      { name: 'Lick', type: PokemonElementType.ghost, power: 30, description: 'The foe is licked with a long tongue, causing damage. It may also paralyze the target.' },
    ],
  },
  rhyperior: {
    flavorText: 'It can launch a rock held in its hand like a missile by tightening then expanding muscles instantly.',
    stats: { hp: 115, attack: 140, defense: 130, specialAttack: 55, specialDefense: 55, speed: 40 },
    moves: [
      { name: 'Rock Wrecker', type: PokemonElementType.rock, power: 150, description: 'The user launches a huge boulder at the foe to attack. It must rest on the next turn, however.' },
      { name: 'Horn Attack', type: PokemonElementType.normal, power: 65, description: 'The foe is jabbed with a sharply pointed horn to inflict damage.' },
      { name: 'Horn Drill', type: PokemonElementType.normal, power: null, description: 'The foe is stabbed with a horn rotating like a drill. The foe instantly faints if it hits.' },
      { name: 'Megahorn', type: PokemonElementType.bug, power: 120, description: 'Utilizing its tough and impressive horn, the user rams into the foe with no letup.' },
    ],
  },
  tangrowth: {
    flavorText: 'Its arms are made of plants that bind themselves to things. They grow back right away if cut.',
    stats: { hp: 100, attack: 100, defense: 125, specialAttack: 110, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'Constrict', type: PokemonElementType.normal, power: 10, description: 'The foe is attacked with long, creeping tentacles or vines. It may also lower the target’s Speed.' },
      { name: 'Wring Out', type: PokemonElementType.normal, power: null, description: 'The user powerfully wrings the foe. The more HP the foe has, the greater this attack’s power.' },
      { name: 'Vine Whip', type: PokemonElementType.grass, power: 45, description: 'The foe is struck with slender, whiplike vines to inflict damage.' },
      { name: 'Sleep Powder', type: PokemonElementType.grass, power: null, description: 'The user scatters a big cloud of sleep-inducing dust around the foe.' },
    ],
  },
  electivire: {
    flavorText: 'Heedless of enemy attacks, it closes in, shoves its tails onto the foe, then looses high voltage.',
    stats: { hp: 75, attack: 123, defense: 67, specialAttack: 95, specialDefense: 85, speed: 95 },
    moves: [
      { name: 'Thunder Shock', type: PokemonElementType.electric, power: 40, description: 'A jolt of electricity is hurled at the foe to inflict damage. It may also leave the foe paralyzed.' },
      { name: 'Discharge', type: PokemonElementType.electric, power: 80, description: 'A flare of electricity is loosed to strike all Pokémon in battle. It may also cause paralysis.' },
      { name: 'Quick Attack', type: PokemonElementType.normal, power: 40, description: 'The user lunges at the foe at a speed that makes it almost invisible. It is sure to strike first.' },
      { name: 'Fire Punch', type: PokemonElementType.fire, power: 75, description: 'The foe is punched with a fiery fist. It may leave the target with a burn.' },
    ],
  },
  magmortar: {
    flavorText: 'When launching 3,600 degrees F fireballs, its body takes on a whitish hue from the intense heat.',
    stats: { hp: 75, attack: 95, defense: 67, specialAttack: 125, specialDefense: 95, speed: 83 },
    moves: [
      { name: 'Lava Plume', type: PokemonElementType.fire, power: 80, description: 'An inferno of scarlet flames washes over all Pokémon in battle. It may also inflict burns.' },
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'The foe is attacked with a discharge of filthy gases. It may also poison the target.' },
      { name: 'Smokescreen', type: PokemonElementType.normal, power: null, description: 'The user releases an obscuring cloud of smoke or ink. It reduces the foe’s accuracy.' },
      { name: 'Ember', type: PokemonElementType.fire, power: 40, description: 'The foe is attacked with small flames. The target may also be left with a burn.' },
    ],
  },
  togekiss: {
    flavorText: 'It shares many blessings with people who respect one another’s rights and avoid needless strife.',
    stats: { hp: 85, attack: 50, defense: 95, specialAttack: 120, specialDefense: 115, speed: 80 },
    moves: [
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Aura Sphere', type: PokemonElementType.fighting, power: 80, description: 'The user looses a blast of aura power from deep within its body. This move is certain to hit.' },
      { name: 'Sky Attack', type: PokemonElementType.flying, power: 140, description: 'A second-turn attack move with a high critical-hit ratio. It may also make the target flinch.' },
      { name: 'Air Slash', type: PokemonElementType.flying, power: 75, description: 'The user attacks with a blade of air that slices even the sky. It may also make the target flinch.' },
    ],
  },
  yanmega: {
    flavorText: 'Its jaw power is incredible. It is adept at biting apart foes while flying by at high speed.',
    stats: { hp: 86, attack: 76, defense: 86, specialAttack: 116, specialDefense: 56, speed: 95 },
    moves: [
      { name: 'Sonic Boom', type: PokemonElementType.normal, power: null, description: 'The foe is hit with a destructive shock wave that always inflicts 20 HP damage.' },
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Bug Buzz', type: PokemonElementType.bug, power: 90, description: 'The user vibrates its wings to generate a damaging sound wave. It may also lower the foe’s Sp. Def stat.' },
      { name: 'Supersonic', type: PokemonElementType.normal, power: null, description: 'The user generates odd sound waves from its body. It may confuse the target.' },
    ],
  },
  leafeon: {
    flavorText: 'It basically does not fight. With cells similar to those of plants, it can perform photosynthesis.',
    stats: { hp: 65, attack: 110, defense: 130, specialAttack: 60, specialDefense: 65, speed: 95 },
    moves: [
      { name: 'Grass Whistle', type: PokemonElementType.grass, power: null, description: 'The user plays a pleasant melody that lulls the foe into a deep sleep.' },
      { name: 'Leaf Blade', type: PokemonElementType.grass, power: 90, description: 'The foe is slashed with a sharp leaf. It has a high critical-hit ratio.' },
      { name: 'Razor Leaf', type: PokemonElementType.grass, power: 55, description: 'Sharp-edged leaves are launched to slash at the foe. It has a high critical-hit ratio.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'Sand is hurled in the foe’s face, reducing its accuracy.' },
    ],
  },
  glaceon: {
    flavorText: 'By controlling its body heat, it can freeze the atmosphere around it to make a diamond-dust flurry.',
    stats: { hp: 65, attack: 60, defense: 110, specialAttack: 130, specialDefense: 95, speed: 65 },
    moves: [
      { name: 'Barrier', type: PokemonElementType.psychic, power: null, description: 'The user throws up a sturdy wall that sharply raises its Defense stat.' },
      { name: 'Ice Shard', type: PokemonElementType.ice, power: 40, description: 'The user flash freezes chunks of ice and hurls them. This move always goes first.' },
      { name: 'Mirror Coat', type: PokemonElementType.psychic, power: null, description: 'A retaliation move that counters any special attack, inflicting double the damage taken.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'Sand is hurled in the foe’s face, reducing its accuracy.' },
    ],
  },
  gliscor: {
    flavorText: 'If it succeeds in catching even a faint breeze properly, it can circle the globe without flapping once.',
    stats: { hp: 75, attack: 95, defense: 125, specialAttack: 45, specialDefense: 75, speed: 95 },
    moves: [
      { name: 'Guillotine', type: PokemonElementType.normal, power: null, description: 'A vicious, tearing attack with pincers. The foe will faint instantly if this attack hits.' },
      { name: 'Harden', type: PokemonElementType.normal, power: null, description: 'The user stiffens all the muscles in its body to raise its Defense stat.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'The user draws up to the foe disarmingly, then throws a sucker punch. It hits without fail.' },
      { name: 'Sand Attack', type: PokemonElementType.ground, power: null, description: 'Sand is hurled in the foe’s face, reducing its accuracy.' },
    ],
  },
  mamoswine: {
    flavorText: 'A frozen one was dug up from soil dating back 10,000 years. It woke up to much amazement.',
    stats: { hp: 110, attack: 130, defense: 80, specialAttack: 70, specialDefense: 60, speed: 80 },
    moves: [
      { name: 'Mud Bomb', type: PokemonElementType.ground, power: 65, description: 'The user launches a hard-packed mud ball to attack. It may also lower the target’s accuracy.' },
      { name: 'Powder Snow', type: PokemonElementType.ice, power: 40, description: 'The user attacks with a chilling gust of powdery snow. It may also freeze the target.' },
      { name: 'Odor Sleuth', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Mud Sport', type: PokemonElementType.ground, power: null, description: 'The user covers itself with mud. It weakens Electric-type moves while the user is in the battle.' },
    ],
  },
  porygonZ: {
    flavorText: 'Its programming was modified to enable work in alien dimensions. It did not work as planned.',
    stats: { hp: 85, attack: 80, defense: 70, specialAttack: 135, specialDefense: 75, speed: 90 },
    moves: [
      { name: 'Conversion', type: PokemonElementType.normal, power: null, description: 'The user changes its type to become the same type as one of its moves.' },
      { name: 'Conversion 2', type: PokemonElementType.normal, power: null, description: 'The user changes its type to make itself resistant to the type of the attack it last took.' },
      { name: 'Lock On', type: PokemonElementType.normal, power: null, description: 'The user takes sure aim at the foe. It ensures the next attack does not fail to hit the target.' },
      { name: 'Tri Attack', type: PokemonElementType.normal, power: 80, description: 'The user strikes with a simultaneous three-beam attack. May also paralyze, burn, or freeze the target.' },
    ],
  },
  gallade: {
    flavorText: 'When trying to protect someone, it extends its elbows as if they were swords and fights savagely.',
    stats: { hp: 68, attack: 125, defense: 65, specialAttack: 65, specialDefense: 115, speed: 80 },
    moves: [
      { name: 'Leaf Blade', type: PokemonElementType.grass, power: 90, description: 'The foe is slashed with a sharp leaf. It has a high critical-hit ratio.' },
      { name: 'Teleport', type: PokemonElementType.psychic, power: null, description: 'Use it to flee from any wild Pokémon. It may also be used to warp to the last Poké Center visited.' },
      { name: 'Psycho Cut', type: PokemonElementType.psychic, power: 70, description: 'The user tears at the foe with blades formed by psychic power. It has a high critical-hit ratio.' },
      { name: 'Feint', type: PokemonElementType.normal, power: 30, description: 'An attack that hits a foe using Protect or Detect. It also lifts the effects of those moves.' },
    ],
  },
  probopass: {
    flavorText: 'It freely controls three small units called Mini-Noses using magnetic force.',
    stats: { hp: 60, attack: 55, defense: 145, specialAttack: 75, specialDefense: 150, speed: 40 },
    moves: [
      { name: 'Magnet Bomb', type: PokemonElementType.steel, power: 60, description: 'The user launches a steel bomb that sticks to the target. This attack will not miss.' },
      { name: 'Lock On', type: PokemonElementType.normal, power: null, description: 'The user takes sure aim at the foe. It ensures the next attack does not fail to hit the target.' },
      { name: 'Zap Cannon', type: PokemonElementType.electric, power: 120, description: 'The user fires an electric blast like a cannon to inflict damage and cause paralysis.' },
      { name: 'Discharge', type: PokemonElementType.electric, power: 80, description: 'A flare of electricity is loosed to strike all Pokémon in battle. It may also cause paralysis.' },
    ],
  },
  dusknoir: {
    flavorText: 'It is said to take lost spirits into its pliant body and guide them home.',
    stats: { hp: 45, attack: 100, defense: 135, specialAttack: 65, specialDefense: 135, speed: 45 },
    moves: [
      { name: 'Shadow Punch', type: PokemonElementType.ghost, power: 60, description: 'The user throws a punch at the foe from the shadows. The punch lands without fail.' },
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Mean Look', type: PokemonElementType.normal, power: null, description: 'The user affixes the foe with a dark, arresting look. The target becomes unable to flee.' },
      { name: 'Shadow Sneak', type: PokemonElementType.ghost, power: 40, description: 'The user extends its shadow and attacks the foe from behind. This move always goes first.' },
    ],
  },
  froslass: {
    flavorText: 'It freezes prey by blowing its -58 degrees F breath. It is said to then secretly display its prey.',
    stats: { hp: 70, attack: 80, defense: 70, specialAttack: 80, specialDefense: 70, speed: 110 },
    moves: [
      { name: 'Wake Up Slap', type: PokemonElementType.fighting, power: 70, description: 'This attack inflicts high damage on a sleeping foe. It also wakes the foe up, however.' },
      { name: 'Ice Shard', type: PokemonElementType.ice, power: 40, description: 'The user flash freezes chunks of ice and hurls them. This move always goes first.' },
      { name: 'Powder Snow', type: PokemonElementType.ice, power: 40, description: 'The user attacks with a chilling gust of powdery snow. It may also freeze the target.' },
      { name: 'Destiny Bond', type: PokemonElementType.ghost, power: null, description: 'When this move is used, if the user faints, the foe that landed the knockout hit also faints.' },
    ],
  },
  rotom: {
    flavorText: 'Its electric-like body can enter some kinds of machines and take control in order to make mischief.',
    stats: { hp: 50, attack: 50, defense: 77, specialAttack: 95, specialDefense: 77, speed: 91 },
    moves: [
      { name: 'Thunder Shock', type: PokemonElementType.electric, power: 40, description: 'A jolt of electricity is hurled at the foe to inflict damage. It may also leave the foe paralyzed.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'The user boosts the power of the Electric move it uses next. It also raises the user’s Sp. Def stat.' },
      { name: 'Ominous Wind', type: PokemonElementType.ghost, power: 60, description: 'The user creates a gust of repulsive wind. It may also raise all the user’s stats at once.' },
      { name: 'Discharge', type: PokemonElementType.electric, power: 80, description: 'A flare of electricity is loosed to strike all Pokémon in battle. It may also cause paralysis.' },
    ],
  },
  rotom_fan: {
    flavorText: 'Its electric-like body can enter some kinds of machines and take control in order to make mischief.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Thunder Shock', type: PokemonElementType.electric, power: 40, description: 'A jolt of electricity is hurled at the foe to inflict damage. It may also leave the foe paralyzed.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'The user boosts the power of the Electric move it uses next. It also raises the user’s Sp. Def stat.' },
      { name: 'Ominous Wind', type: PokemonElementType.ghost, power: 60, description: 'The user creates a gust of repulsive wind. It may also raise all the user’s stats at once.' },
      { name: 'Discharge', type: PokemonElementType.electric, power: 80, description: 'A flare of electricity is loosed to strike all Pokémon in battle. It may also cause paralysis.' },
    ],
  },
  rotom_frost: {
    flavorText: 'Its electric-like body can enter some kinds of machines and take control in order to make mischief.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Thunder Shock', type: PokemonElementType.electric, power: 40, description: 'A jolt of electricity is hurled at the foe to inflict damage. It may also leave the foe paralyzed.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'The user boosts the power of the Electric move it uses next. It also raises the user’s Sp. Def stat.' },
      { name: 'Ominous Wind', type: PokemonElementType.ghost, power: 60, description: 'The user creates a gust of repulsive wind. It may also raise all the user’s stats at once.' },
      { name: 'Discharge', type: PokemonElementType.electric, power: 80, description: 'A flare of electricity is loosed to strike all Pokémon in battle. It may also cause paralysis.' },
    ],
  },
  rotom_heat: {
    flavorText: 'Its electric-like body can enter some kinds of machines and take control in order to make mischief.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Thunder Shock', type: PokemonElementType.electric, power: 40, description: 'A jolt of electricity is hurled at the foe to inflict damage. It may also leave the foe paralyzed.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'The user boosts the power of the Electric move it uses next. It also raises the user’s Sp. Def stat.' },
      { name: 'Ominous Wind', type: PokemonElementType.ghost, power: 60, description: 'The user creates a gust of repulsive wind. It may also raise all the user’s stats at once.' },
      { name: 'Discharge', type: PokemonElementType.electric, power: 80, description: 'A flare of electricity is loosed to strike all Pokémon in battle. It may also cause paralysis.' },
    ],
  },
  rotom_mow: {
    flavorText: 'Its electric-like body can enter some kinds of machines and take control in order to make mischief.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Thunder Shock', type: PokemonElementType.electric, power: 40, description: 'A jolt of electricity is hurled at the foe to inflict damage. It may also leave the foe paralyzed.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'The user boosts the power of the Electric move it uses next. It also raises the user’s Sp. Def stat.' },
      { name: 'Ominous Wind', type: PokemonElementType.ghost, power: 60, description: 'The user creates a gust of repulsive wind. It may also raise all the user’s stats at once.' },
      { name: 'Discharge', type: PokemonElementType.electric, power: 80, description: 'A flare of electricity is loosed to strike all Pokémon in battle. It may also cause paralysis.' },
    ],
  },
  rotom_wash: {
    flavorText: 'Its electric-like body can enter some kinds of machines and take control in order to make mischief.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Thunder Shock', type: PokemonElementType.electric, power: 40, description: 'A jolt of electricity is hurled at the foe to inflict damage. It may also leave the foe paralyzed.' },
      { name: 'Charge', type: PokemonElementType.electric, power: null, description: 'The user boosts the power of the Electric move it uses next. It also raises the user’s Sp. Def stat.' },
      { name: 'Ominous Wind', type: PokemonElementType.ghost, power: 60, description: 'The user creates a gust of repulsive wind. It may also raise all the user’s stats at once.' },
      { name: 'Discharge', type: PokemonElementType.electric, power: 80, description: 'A flare of electricity is loosed to strike all Pokémon in battle. It may also cause paralysis.' },
    ],
  },
  uxie: {
    flavorText: 'When UXIE flew, people gained the ability to solve problems. It was the birth of knowledge.',
    stats: { hp: 75, attack: 75, defense: 130, specialAttack: 75, specialDefense: 130, speed: 95 },
    moves: [
      { name: 'Memento', type: PokemonElementType.dark, power: null, description: 'The user faints upon using this move. In return, it sharply lowers the target’s Attack and Sp. Atk.' },
      { name: 'Extrasensory', type: PokemonElementType.psychic, power: 80, description: 'The user attacks with an odd, unseeable power. It may also make the foe flinch.' },
      { name: 'Yawn', type: PokemonElementType.normal, power: null, description: 'The user lets loose a huge yawn that lulls the foe into falling asleep on the next turn.' },
      { name: 'Confusion', type: PokemonElementType.psychic, power: 50, description: 'The foe is hit by a weak telekinetic force. It may also leave the foe confused.' },
    ],
  },
  mesprit: {
    flavorText: 'When MESPRIT flew, people learned the joy and sadness of living. It was the birth of emotions.',
    stats: { hp: 80, attack: 105, defense: 105, specialAttack: 105, specialDefense: 105, speed: 80 },
    moves: [
      { name: 'Healing Wish', type: PokemonElementType.psychic, power: null, description: 'The user faints. In return, the Pokémon taking its place will have its HP restored and status cured.' },
      { name: 'Lucky Chant', type: PokemonElementType.normal, power: null, description: 'The user chants an incantation toward the sky, preventing the foe from landing critical hits.' },
      { name: 'Extrasensory', type: PokemonElementType.psychic, power: 80, description: 'The user attacks with an odd, unseeable power. It may also make the foe flinch.' },
      { name: 'Copycat', type: PokemonElementType.normal, power: null, description: 'The user mimics the move used immediately before it. The move fails if no other move has been used yet.' },
    ],
  },
  azelf: {
    flavorText: 'When AZELF flew, people gained the determination to do things. It was the birth of willpower.',
    stats: { hp: 75, attack: 125, defense: 70, specialAttack: 125, specialDefense: 70, speed: 115 },
    moves: [
      { name: 'Extrasensory', type: PokemonElementType.psychic, power: 80, description: 'The user attacks with an odd, unseeable power. It may also make the foe flinch.' },
      { name: 'Explosion', type: PokemonElementType.normal, power: 250, description: 'The user explodes to inflict damage on all Pokémon in battle. The user faints upon using this move.' },
      { name: 'Confusion', type: PokemonElementType.psychic, power: 50, description: 'The foe is hit by a weak telekinetic force. It may also leave the foe confused.' },
      { name: 'Future Sight', type: PokemonElementType.psychic, power: 120, description: 'Two turns after this move is used, the foe is attacked with a hunk of psychic energy.' },
    ],
  },
  dialga: {
    flavorText: 'A legendary Pokémon of Sinnoh. It is said that time flows when DIALGA’s heart beats.',
    stats: { hp: 100, attack: 120, defense: 120, specialAttack: 150, specialDefense: 100, speed: 90 },
    moves: [
      { name: 'Roar Of Time', type: PokemonElementType.dragon, power: 150, description: 'The user blasts the foe with power that distorts even time. The user must rest on the next turn.' },
      { name: 'Heal Block', type: PokemonElementType.psychic, power: null, description: 'The user prevents the foe from using any HP-recovery moves for five turns.' },
      { name: 'Aura Sphere', type: PokemonElementType.fighting, power: 80, description: 'The user looses a blast of aura power from deep within its body. This move is certain to hit.' },
      { name: 'Dragon Breath', type: PokemonElementType.dragon, power: 60, description: 'The user exhales a mighty gust that inflicts damage. It may also paralyze the target.' },
    ],
  },
  palkia: {
    flavorText: 'A legendary Pokémon of Sinnoh. It is said that space becomes more stable with PALKIA’s every breath.',
    stats: { hp: 90, attack: 120, defense: 100, specialAttack: 150, specialDefense: 120, speed: 100 },
    moves: [
      { name: 'Spacial Rend', type: PokemonElementType.dragon, power: 100, description: 'The user tears the foe along with the space around it. This move has a high critical-hit ratio.' },
      { name: 'Heal Block', type: PokemonElementType.psychic, power: null, description: 'The user prevents the foe from using any HP-recovery moves for five turns.' },
      { name: 'Aura Sphere', type: PokemonElementType.fighting, power: 80, description: 'The user looses a blast of aura power from deep within its body. This move is certain to hit.' },
      { name: 'Dragon Breath', type: PokemonElementType.dragon, power: 60, description: 'The user exhales a mighty gust that inflicts damage. It may also paralyze the target.' },
    ],
  },
  heatran: {
    flavorText: 'Its body is made of rugged steel. However, it is partially melted in spots because of its own heat.',
    stats: { hp: 91, attack: 90, defense: 106, specialAttack: 130, specialDefense: 106, speed: 77 },
    moves: [
      { name: 'Magma Storm', type: PokemonElementType.fire, power: 100, description: 'The foe becomes trapped within a maelstrom of fire that rages for two to five turns.' },
      { name: 'Lava Plume', type: PokemonElementType.fire, power: 80, description: 'An inferno of scarlet flames washes over all Pokémon in battle. It may also inflict burns.' },
      { name: 'Metal Sound', type: PokemonElementType.steel, power: null, description: 'A horrible sound like scraping metal is emitted to sharply reduce the foe’s Sp. Def stat.' },
      { name: 'Fire Spin', type: PokemonElementType.fire, power: 35, description: 'The foe becomes trapped within a fierce vortex of fire that rages for two to five turns.' },
    ],
  },
  regigigas: {
    flavorText: 'It is said to have made Pokémon that look like itself from a special ice mountain, rocks, and magma.',
    stats: { hp: 110, attack: 160, defense: 110, specialAttack: 80, specialDefense: 110, speed: 100 },
    moves: [
      { name: 'Crush Grip', type: PokemonElementType.normal, power: null, description: 'The foe is crushed with great force. The attack is more powerful the more HP the foe has left.' },
      { name: 'Dizzy Punch', type: PokemonElementType.normal, power: 70, description: 'The foe is hit with rhythmically launched punches that may also leave it confused.' },
      { name: 'Foresight', type: PokemonElementType.normal, power: null, description: 'Enables the user to hit a Ghost type with any type of move. It also enables the user to hit an evasive foe.' },
      { name: 'Revenge', type: PokemonElementType.fighting, power: 60, description: 'An attack move that inflicts double the damage if the user has been hurt by the foe in the same turn.' },
    ],
  },
  giratina: {
    flavorText: 'It was banished for its violence. It silently gazed upon the old world from the Distortion World.',
    stats: { hp: 150, attack: 100, defense: 120, specialAttack: 100, specialDefense: 120, speed: 90 },
    moves: [
      { name: 'Shadow Force', type: PokemonElementType.ghost, power: 120, description: 'The user disappears, then strikes the foe on the second turn. It hits even if the foe used Protect.' },
      { name: 'Heal Block', type: PokemonElementType.psychic, power: null, description: 'The user prevents the foe from using any HP-recovery moves for five turns.' },
      { name: 'Aura Sphere', type: PokemonElementType.fighting, power: 80, description: 'The user looses a blast of aura power from deep within its body. This move is certain to hit.' },
      { name: 'Dragon Breath', type: PokemonElementType.dragon, power: 60, description: 'The user exhales a mighty gust that inflicts damage. It may also paralyze the target.' },
    ],
  },
  giratina_origin: {
    flavorText: 'It was banished for its violence. It silently gazed upon the old world from the Distortion World.',
    stats: { hp: 150, attack: 120, defense: 100, specialAttack: 120, specialDefense: 100, speed: 90 },
    moves: [
      { name: 'Shadow Force', type: PokemonElementType.ghost, power: 120, description: 'The user disappears, then strikes the foe on the second turn. It hits even if the foe used Protect.' },
      { name: 'Heal Block', type: PokemonElementType.psychic, power: null, description: 'The user prevents the foe from using any HP-recovery moves for five turns.' },
      { name: 'Aura Sphere', type: PokemonElementType.fighting, power: 80, description: 'The user looses a blast of aura power from deep within its body. This move is certain to hit.' },
      { name: 'Dragon Breath', type: PokemonElementType.dragon, power: 60, description: 'The user exhales a mighty gust that inflicts damage. It may also paralyze the target.' },
    ],
  },
  cresselia: {
    flavorText: 'On nights around the quarter moon, the aurora from its tail extends and undulates beautifully.',
    stats: { hp: 120, attack: 70, defense: 110, specialAttack: 75, specialDefense: 120, speed: 85 },
    moves: [
      { name: 'Lunar Dance', type: PokemonElementType.psychic, power: null, description: 'The user faints. In return, the Pokémon taking its place will have its status and HP fully restored.' },
      { name: 'Psycho Shift', type: PokemonElementType.psychic, power: null, description: 'Using its psychic power of suggestion, the user transfers its status problems to the target.' },
      { name: 'Moonlight', type: PokemonElementType.normal, power: null, description: 'The user restores its own HP. The amount of HP regained varies with the weather.' },
      { name: 'Aurora Beam', type: PokemonElementType.ice, power: 65, description: 'The foe is hit with a rainbow-colored beam. It may also lower the target’s Attack stat.' },
    ],
  },
  phione: {
    flavorText: 'It drifts in warm seas. It always returns to where it was born, no matter how far it may have drifted.',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80 },
    moves: [
      { name: 'Acid Armor', type: PokemonElementType.poison, power: null, description: 'The user alters its cellular structure to liquefy itself, sharply raising its Defense stat.' },
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'The user soaks itself with water. The move weakens Fire-type moves while the user is in the battle.' },
      { name: 'Bubble', type: PokemonElementType.water, power: 40, description: 'A spray of countless bubbles is jetted at the foe. It may also lower the target’s Speed stat.' },
      { name: 'Aqua Ring', type: PokemonElementType.water, power: null, description: 'The user envelops itself in a veil made of water. It regains some HP on every turn.' },
    ],
  },
  manaphy: {
    flavorText: 'It is born with a wondrous power that lets it bond with any kind of Pokémon.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Heart Swap', type: PokemonElementType.psychic, power: null, description: 'The user employs its psychic power to switch stat changes with the foe.' },
      { name: 'Tail Glow', type: PokemonElementType.bug, power: null, description: 'The user stares at flashing lights to focus its mind, sharply raising its Sp. Atk stat.' },
      { name: 'Acid Armor', type: PokemonElementType.poison, power: null, description: 'The user alters its cellular structure to liquefy itself, sharply raising its Defense stat.' },
      { name: 'Water Sport', type: PokemonElementType.water, power: null, description: 'The user soaks itself with water. The move weakens Fire-type moves while the user is in the battle.' },
    ],
  },
  darkrai: {
    flavorText: 'To protect itself, it afflicts those around it with nightmares. However, it means no harm.',
    stats: { hp: 70, attack: 90, defense: 90, specialAttack: 135, specialDefense: 90, speed: 125 },
    moves: [
      { name: 'Dark Void', type: PokemonElementType.dark, power: null, description: 'The foe is dragged into a world of total darkness that puts it to sleep.' },
      { name: 'Nightmare', type: PokemonElementType.ghost, power: null, description: 'A sleeping foe is shown a nightmare that inflicts some damage every turn.' },
      { name: 'Hypnosis', type: PokemonElementType.psychic, power: null, description: 'The user employs hypnotic suggestion to make the target fall into a deep sleep.' },
      { name: 'Feint Attack', type: PokemonElementType.dark, power: 60, description: 'The user draws up to the foe disarmingly, then throws a sucker punch. It hits without fail.' },
    ],
  },
  shaymin: {
    flavorText: 'The flowers all over its body burst into bloom if it is lovingly hugged and senses gratitude.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Seed Flare', type: PokemonElementType.grass, power: 120, description: 'The user generates a shock wave from within its body. It may also lower the target’s Sp. Def.' },
      { name: 'Healing Wish', type: PokemonElementType.psychic, power: null, description: 'The user faints. In return, the Pokémon taking its place will have its HP restored and status cured.' },
      { name: 'Sweet Kiss', type: PokemonElementType.normal, power: null, description: 'The user kisses the foe with a sweet, angelic cuteness that causes confusion.' },
      { name: 'Aromatherapy', type: PokemonElementType.grass, power: null, description: 'The user releases a soothing scent that heals all status problems affecting the user’s party.' },
    ],
  },
  shaymin_sky: {
    flavorText: 'The flowers all over its body burst into bloom if it is lovingly hugged and senses gratitude.',
    stats: { hp: 100, attack: 103, defense: 75, specialAttack: 120, specialDefense: 75, speed: 127 },
    moves: [
      { name: 'Seed Flare', type: PokemonElementType.grass, power: 120, description: 'The user generates a shock wave from within its body. It may also lower the target’s Sp. Def.' },
      { name: 'Sweet Kiss', type: PokemonElementType.normal, power: null, description: 'The user kisses the foe with a sweet, angelic cuteness that causes confusion.' },
      { name: 'Growth', type: PokemonElementType.normal, power: null, description: 'The user’s body is forced to grow all at once. It raises the Sp. Atk stat.' },
      { name: 'Sweet Scent', type: PokemonElementType.normal, power: null, description: 'A sweet scent that lowers the foe’s evasiveness. It also lures wild Pokémon if used in grass, etc.' },
    ],
  },
  arceus: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Judgment', type: PokemonElementType.normal, power: 100, description: 'The user releases countless shots of light. Its type varies with the kind of Plate the user is holding.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
    ],
  },
  arceus_bug: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Judgment', type: PokemonElementType.normal, power: 100, description: 'The user releases countless shots of light. Its type varies with the kind of Plate the user is holding.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
    ],
  },
  arceus_dark: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Judgment', type: PokemonElementType.normal, power: 100, description: 'The user releases countless shots of light. Its type varies with the kind of Plate the user is holding.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
    ],
  },
  arceus_dragon: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Judgment', type: PokemonElementType.normal, power: 100, description: 'The user releases countless shots of light. Its type varies with the kind of Plate the user is holding.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
    ],
  },
  arceus_electric: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Judgment', type: PokemonElementType.normal, power: 100, description: 'The user releases countless shots of light. Its type varies with the kind of Plate the user is holding.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
    ],
  },
  arceus_fighting: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Judgment', type: PokemonElementType.normal, power: 100, description: 'The user releases countless shots of light. Its type varies with the kind of Plate the user is holding.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
    ],
  },
  arceus_fire: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Judgment', type: PokemonElementType.normal, power: 100, description: 'The user releases countless shots of light. Its type varies with the kind of Plate the user is holding.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
    ],
  },
  arceus_flying: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Judgment', type: PokemonElementType.normal, power: 100, description: 'The user releases countless shots of light. Its type varies with the kind of Plate the user is holding.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
    ],
  },
  arceus_ghost: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Judgment', type: PokemonElementType.normal, power: 100, description: 'The user releases countless shots of light. Its type varies with the kind of Plate the user is holding.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
    ],
  },
  arceus_grass: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Judgment', type: PokemonElementType.normal, power: 100, description: 'The user releases countless shots of light. Its type varies with the kind of Plate the user is holding.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
    ],
  },
  arceus_ground: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Judgment', type: PokemonElementType.normal, power: 100, description: 'The user releases countless shots of light. Its type varies with the kind of Plate the user is holding.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
    ],
  },
  arceus_ice: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Judgment', type: PokemonElementType.normal, power: 100, description: 'The user releases countless shots of light. Its type varies with the kind of Plate the user is holding.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
    ],
  },
  arceus_poison: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Judgment', type: PokemonElementType.normal, power: 100, description: 'The user releases countless shots of light. Its type varies with the kind of Plate the user is holding.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
    ],
  },
  arceus_psychic: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Judgment', type: PokemonElementType.normal, power: 100, description: 'The user releases countless shots of light. Its type varies with the kind of Plate the user is holding.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
    ],
  },
  arceus_rock: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Judgment', type: PokemonElementType.normal, power: 100, description: 'The user releases countless shots of light. Its type varies with the kind of Plate the user is holding.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
    ],
  },
  arceus_steel: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Judgment', type: PokemonElementType.normal, power: 100, description: 'The user releases countless shots of light. Its type varies with the kind of Plate the user is holding.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
    ],
  },
  arceus_water: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Judgment', type: PokemonElementType.normal, power: 100, description: 'The user releases countless shots of light. Its type varies with the kind of Plate the user is holding.' },
      { name: 'Extreme Speed', type: PokemonElementType.normal, power: 80, description: 'The user charges the foe at blinding speed. This attack always goes before any other move.' },
      { name: 'Punishment', type: PokemonElementType.dark, power: null, description: 'This attack’s power increases the more the foe has powered up with stat changes.' },
      { name: 'Perish Song', type: PokemonElementType.normal, power: null, description: 'Any Pokémon that hears this song faints in three turns unless it switches out of battle.' },
    ],
  },
}
