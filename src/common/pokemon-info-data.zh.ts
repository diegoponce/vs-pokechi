// Simplified Chinese counterpart of pokemon-info-data.ts - same species keys, same
// shape (PokemonInfoEntry), sourced the same way but with PokeAPI's
// Simplified Chinese flavor text/move data instead of English. Stats are numbers,
// not translated text, and are identical to the English file.
import { PokemonElementType } from './types'
import { PokemonInfoEntry } from './pokemon-info-data'

export const POKEMON_INFO_DATA_ZH: { [key: string]: PokemonInfoEntry } = {
  bulbasaur: {
    flavorText: '背上的种子里储存着营养， 所以即使好几天不吃东西 也可以活得好好的！',
    stats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 },
    moves: [
      { name: '藤鞭', type: PokemonElementType.grass, power: 45, description: '用如同鞭子般弯曲而细长的藤蔓 摔打对手进行攻击。' },
      { name: '催眠粉', type: PokemonElementType.grass, power: null, description: '撒出催眠粉， 从而让对手陷入睡眠状态。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
      { name: '飞叶快刀', type: PokemonElementType.grass, power: 55, description: '飞出叶片， 切斩对手进行攻击。 容易击中要害。' },
    ],
  },
  ivysaur: {
    flavorText: '它的花苞会在吸收养分后 长大。当花苞发出香味时， 就预示着它快要开花了。',
    stats: { hp: 60, attack: 62, defense: 63, specialAttack: 80, specialDefense: 80, speed: 60 },
    moves: [
      { name: '藤鞭', type: PokemonElementType.grass, power: 45, description: '用如同鞭子般弯曲而细长的藤蔓 摔打对手进行攻击。' },
      { name: '催眠粉', type: PokemonElementType.grass, power: null, description: '撒出催眠粉， 从而让对手陷入睡眠状态。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
      { name: '飞叶快刀', type: PokemonElementType.grass, power: 55, description: '飞出叶片， 切斩对手进行攻击。 容易击中要害。' },
    ],
  },
  venusaur: {
    flavorText: '它背上开出的大花 能够吸收太阳光 并将其转换为能量。',
    stats: { hp: 80, attack: 82, defense: 83, specialAttack: 100, specialDefense: 100, speed: 80 },
    moves: [
      { name: '藤鞭', type: PokemonElementType.grass, power: 45, description: '用如同鞭子般弯曲而细长的藤蔓 摔打对手进行攻击。' },
      { name: '催眠粉', type: PokemonElementType.grass, power: null, description: '撒出催眠粉， 从而让对手陷入睡眠状态。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
      { name: '飞叶快刀', type: PokemonElementType.grass, power: 55, description: '飞出叶片， 切斩对手进行攻击。 容易击中要害。' },
    ],
  },
  charmander: {
    flavorText: '要是把它带到安静的地方， 就能听到它的尾巴燃烧时 发出的微小的声音。',
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    moves: [
      { name: '龙之怒', type: PokemonElementType.dragon, power: null, description: '将愤怒的冲击波 撞向对手进行攻击。 必定会给予４０的伤害。' },
      { name: '烟幕', type: PokemonElementType.normal, power: null, description: '向对手喷出烟或墨汁等， 从而降低对手的命中率。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '金属爪', type: PokemonElementType.steel, power: 50, description: '用钢铁之爪 劈开对手进行攻击。 有时会提高自己的攻击。' },
    ],
  },
  charmeleon: {
    flavorText: '在与强敌战斗的过程中， 如果情绪变得兴奋起来， 有时会喷出青白色的烈火。',
    stats: { hp: 58, attack: 64, defense: 58, specialAttack: 80, specialDefense: 65, speed: 80 },
    moves: [
      { name: '龙之怒', type: PokemonElementType.dragon, power: null, description: '将愤怒的冲击波 撞向对手进行攻击。 必定会给予４０的伤害。' },
      { name: '烟幕', type: PokemonElementType.normal, power: null, description: '向对手喷出烟或墨汁等， 从而降低对手的命中率。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '金属爪', type: PokemonElementType.steel, power: 50, description: '用钢铁之爪 劈开对手进行攻击。 有时会提高自己的攻击。' },
    ],
  },
  charizard: {
    flavorText: '从口中喷出灼热的火焰时， 尾巴尖端的红色火焰 会燃烧得更加猛烈。',
    stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    moves: [
      { name: '龙之怒', type: PokemonElementType.dragon, power: null, description: '将愤怒的冲击波 撞向对手进行攻击。 必定会给予４０的伤害。' },
      { name: '烟幕', type: PokemonElementType.normal, power: null, description: '向对手喷出烟或墨汁等， 从而降低对手的命中率。' },
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
    ],
  },
  squirtle: {
    flavorText: '通过从水面喷水来捕食。 在危急时刻会将四肢 缩入龟壳里保护自己。',
    stats: { hp: 44, attack: 48, defense: 65, specialAttack: 50, specialDefense: 64, speed: 43 },
    moves: [
      { name: '缩入壳中', type: PokemonElementType.water, power: null, description: '缩入壳里保护身体， 从而提高自己的防御。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
      { name: '高速旋转', type: PokemonElementType.normal, power: 50, description: '通过旋转来攻击对手。 还可以摆脱绑紧、紧束、 寄生种子和撒菱等招式。' },
      { name: '火箭头锤', type: PokemonElementType.normal, power: 130, description: '第１回合把头缩进去， 从而提高防御。 第２回合攻击对手。' },
    ],
  },
  wartortle: {
    flavorText: '如果拍打它的头部，它会 把头缩进壳里，但尾巴 还是会露出来一点点。',
    stats: { hp: 59, attack: 63, defense: 80, specialAttack: 65, specialDefense: 80, speed: 58 },
    moves: [
      { name: '缩入壳中', type: PokemonElementType.water, power: null, description: '缩入壳里保护身体， 从而提高自己的防御。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
      { name: '高速旋转', type: PokemonElementType.normal, power: 50, description: '通过旋转来攻击对手。 还可以摆脱绑紧、紧束、 寄生种子和撒菱等招式。' },
      { name: '火箭头锤', type: PokemonElementType.normal, power: 130, description: '第１回合把头缩进去， 从而提高防御。 第２回合攻击对手。' },
    ],
  },
  blastoise: {
    flavorText: '一旦锁定了目标， 它会以超越了消防 水枪的力道来喷水。',
    stats: { hp: 79, attack: 83, defense: 100, specialAttack: 85, specialDefense: 105, speed: 78 },
    moves: [
      { name: '缩入壳中', type: PokemonElementType.water, power: null, description: '缩入壳里保护身体， 从而提高自己的防御。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
      { name: '高速旋转', type: PokemonElementType.normal, power: 50, description: '通过旋转来攻击对手。 还可以摆脱绑紧、紧束、 寄生种子和撒菱等招式。' },
      { name: '火箭头锤', type: PokemonElementType.normal, power: 130, description: '第１回合把头缩进去， 从而提高防御。 第２回合攻击对手。' },
    ],
  },
  caterpie: {
    flavorText: '被鸟宝可梦袭击时 会从触角中释放出臭气抵抗， 但也经常会成为鸟食。',
    stats: { hp: 45, attack: 30, defense: 35, specialAttack: 20, specialDefense: 20, speed: 45 },
    moves: [
      { name: '吐丝', type: PokemonElementType.bug, power: null, description: '用口中吐出的丝缠绕对手， 从而大幅降低对手的速度。' },
      { name: '撞击', type: PokemonElementType.normal, power: 40, description: '用整个身体 撞向对手进行攻击。' },
    ],
  },
  metapod: {
    flavorText: '壳中藏着软乎乎的身体。 几乎不动是为了防止 身体一不留神就露出来。',
    stats: { hp: 50, attack: 20, defense: 55, specialAttack: 25, specialDefense: 25, speed: 30 },
    moves: [
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
    ],
  },
  butterfree: {
    flavorText: '仔细观察那对大眼睛的话， 会发现其实是许许多多小眼睛 聚集在一起形成的。',
    stats: { hp: 60, attack: 45, defense: 50, specialAttack: 90, specialDefense: 80, speed: 70 },
    moves: [
      { name: '催眠粉', type: PokemonElementType.grass, power: null, description: '撒出催眠粉， 从而让对手陷入睡眠状态。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
      { name: '银色旋风', type: PokemonElementType.bug, power: 60, description: '在风中掺入鳞粉攻击对手。 有时会提高自己的全部能力。' },
      { name: '麻痹粉', type: PokemonElementType.grass, power: null, description: '撒出麻痹粉， 从而让对手陷入麻痹状态。' },
    ],
  },
  kakuna: {
    flavorText: '虽然几乎动也动不了， 但是如果遇到了危险， 有时似乎会竖起毒刺来反抗。',
    stats: { hp: 45, attack: 25, defense: 50, specialAttack: 25, specialDefense: 25, speed: 35 },
    moves: [
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
    ],
  },
  weedle: {
    flavorText: '头上长有尖锐的针。 它喜欢藏在森林或 草丛里大量吞食树叶。',
    stats: { hp: 40, attack: 35, defense: 30, specialAttack: 20, specialDefense: 20, speed: 50 },
    moves: [
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '吐丝', type: PokemonElementType.bug, power: null, description: '用口中吐出的丝缠绕对手， 从而大幅降低对手的速度。' },
    ],
  },
  beedrill: {
    flavorText: '它会用双手和 尾部的３根毒针 反复刺伤敌人。',
    stats: { hp: 65, attack: 90, defense: 40, specialAttack: 45, specialDefense: 80, speed: 75 },
    moves: [
      { name: '双针', type: PokemonElementType.bug, power: 25, description: '将２根针刺入对手， 连续２次给予伤害。 有时会让对手陷入中毒状态。' },
      { name: '飞弹针', type: PokemonElementType.bug, power: 25, description: '向对手发射 锐针进行攻击。 连续攻击２～５次。' },
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
      { name: '追打', type: PokemonElementType.dark, power: 40, description: '当对手替换宝可梦上场时 使出此招式的话， 能够以２倍的威力进行攻击。' },
    ],
  },
  pidgey: {
    flavorText: '性格沉着冷静，即使受到 攻击也很少反击，只会朝 对手扬起沙子保护自己。',
    stats: { hp: 40, attack: 45, defense: 40, specialAttack: 35, specialDefense: 35, speed: 56 },
    moves: [
      { name: '鹦鹉学舌', type: PokemonElementType.flying, power: null, description: '模仿对手使用的招式， 自己也使用相同招式。' },
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '起风', type: PokemonElementType.flying, power: 40, description: '用翅膀将刮起的狂风 袭向对手进行攻击。' },
      { name: '吹飞', type: PokemonElementType.normal, power: null, description: '吹飞对手，强制拉后备宝可梦上场。 如果对手为野生宝可梦， 战斗将直接结束。' },
    ],
  },
  pidgeotto: {
    flavorText: '拥有超群的体力，而且 飞翔范围广，经常飞到 很远的地方寻找食物。',
    stats: { hp: 63, attack: 60, defense: 55, specialAttack: 50, specialDefense: 50, speed: 71 },
    moves: [
      { name: '鹦鹉学舌', type: PokemonElementType.flying, power: null, description: '模仿对手使用的招式， 自己也使用相同招式。' },
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '起风', type: PokemonElementType.flying, power: 40, description: '用翅膀将刮起的狂风 袭向对手进行攻击。' },
      { name: '吹飞', type: PokemonElementType.normal, power: null, description: '吹飞对手，强制拉后备宝可梦上场。 如果对手为野生宝可梦， 战斗将直接结束。' },
    ],
  },
  pidgeot: {
    flavorText: '以２马赫的飞行速度来 觅食。它巨大的爪子是 非常令人惧怕的武器。',
    stats: { hp: 83, attack: 80, defense: 75, specialAttack: 70, specialDefense: 70, speed: 101 },
    moves: [
      { name: '鹦鹉学舌', type: PokemonElementType.flying, power: null, description: '模仿对手使用的招式， 自己也使用相同招式。' },
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '起风', type: PokemonElementType.flying, power: 40, description: '用翅膀将刮起的狂风 袭向对手进行攻击。' },
      { name: '吹飞', type: PokemonElementType.normal, power: null, description: '吹飞对手，强制拉后备宝可梦上场。 如果对手为野生宝可梦， 战斗将直接结束。' },
    ],
  },
  rattata: {
    flavorText: '门牙会终生生长，所以必须要保养。 不准备好锉刀的话，会把柱子都啃掉。',
    stats: { hp: 30, attack: 56, defense: 35, specialAttack: 25, specialDefense: 35, speed: 72 },
    moves: [
      { name: '必杀门牙', type: PokemonElementType.normal, power: 80, description: '用锋利的门牙 牢牢地咬住对手进行攻击。 有时会使对手畏缩。' },
      { name: '愤怒门牙', type: PokemonElementType.normal, power: null, description: '用锋利的门牙 猛烈地咬住对手进行攻击。 对手的ＨＰ减半。' },
      { name: '追打', type: PokemonElementType.dark, power: 40, description: '当对手替换宝可梦上场时 使出此招式的话， 能够以２倍的威力进行攻击。' },
      { name: '摇尾巴', type: PokemonElementType.normal, power: null, description: '可爱地左右摇晃尾巴， 诱使对手疏忽大意。 会降低对手的防御。' },
    ],
  },
  raticate: {
    flavorText: '游泳很在行。后脚带有小小的蹼， 会渡过河流，有时还会渡过大海。',
    stats: { hp: 55, attack: 81, defense: 60, specialAttack: 50, specialDefense: 70, speed: 97 },
    moves: [
      { name: '必杀门牙', type: PokemonElementType.normal, power: 80, description: '用锋利的门牙 牢牢地咬住对手进行攻击。 有时会使对手畏缩。' },
      { name: '愤怒门牙', type: PokemonElementType.normal, power: null, description: '用锋利的门牙 猛烈地咬住对手进行攻击。 对手的ＨＰ减半。' },
      { name: '追打', type: PokemonElementType.dark, power: 40, description: '当对手替换宝可梦上场时 使出此招式的话， 能够以２倍的威力进行攻击。' },
      { name: '摇尾巴', type: PokemonElementType.normal, power: null, description: '可爱地左右摇晃尾巴， 诱使对手疏忽大意。 会降低对手的防御。' },
    ],
  },
  spearow: {
    flavorText: '翅膀很短，飞行也不大在行。 忙忙碌碌地来回走动， 啄食草丛里的虫宝可梦。',
    stats: { hp: 40, attack: 60, defense: 30, specialAttack: 31, specialDefense: 31, speed: 70 },
    moves: [
      { name: '啄钻', type: PokemonElementType.flying, power: 80, description: '一边旋转，一边将尖喙 刺入对手进行攻击。' },
      { name: '鹦鹉学舌', type: PokemonElementType.flying, power: null, description: '模仿对手使用的招式， 自己也使用相同招式。' },
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
      { name: '啄', type: PokemonElementType.flying, power: 35, description: '用尖锐的喙或角 刺向对手进行攻击。' },
    ],
  },
  fearow: {
    flavorText: '因为很强壮而持久力优秀。 即使载着很重的货物持续 飞行一整天也平心静气。',
    stats: { hp: 65, attack: 90, defense: 65, specialAttack: 61, specialDefense: 61, speed: 100 },
    moves: [
      { name: '啄钻', type: PokemonElementType.flying, power: 80, description: '一边旋转，一边将尖喙 刺入对手进行攻击。' },
      { name: '鹦鹉学舌', type: PokemonElementType.flying, power: null, description: '模仿对手使用的招式， 自己也使用相同招式。' },
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
      { name: '啄', type: PokemonElementType.flying, power: 35, description: '用尖锐的喙或角 刺向对手进行攻击。' },
    ],
  },
  ekans: {
    flavorText: '甚至可以通过让颚脱位来 吞食比自己更大的猎物。 进食后就会蜷缩起身体进行休息。',
    stats: { hp: 35, attack: 60, defense: 44, specialAttack: 40, specialDefense: 54, speed: 55 },
    moves: [
      { name: '大蛇瞪眼', type: PokemonElementType.normal, power: null, description: '用腹部的花纹使对手害怕， 从而让其陷入麻痹状态。' },
      { name: '溶解液', type: PokemonElementType.poison, power: 40, description: '将强酸泼向对手进行攻击。 有时会降低对手的特防。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '紧束', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 紧束对手进行攻击。' },
    ],
  },
  arbok: {
    flavorText: '根据最新的研究显示， 它们腹部的花纹有着 ２０种以上不同的图案。',
    stats: { hp: 60, attack: 95, defense: 69, specialAttack: 65, specialDefense: 79, speed: 80 },
    moves: [
      { name: '大蛇瞪眼', type: PokemonElementType.normal, power: null, description: '用腹部的花纹使对手害怕， 从而让其陷入麻痹状态。' },
      { name: '溶解液', type: PokemonElementType.poison, power: 40, description: '将强酸泼向对手进行攻击。 有时会降低对手的特防。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '紧束', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 紧束对手进行攻击。' },
    ],
  },
  pikachu: {
    flavorText: '最近发表了聚集大量皮卡丘， 建造发电厂的计划。',
    stats: { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
    moves: [
      { name: '电击', type: PokemonElementType.electric, power: 40, description: '发出电流刺激对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '摔打', type: PokemonElementType.normal, power: 80, description: '使用长长的尾巴或藤蔓等 摔打对手进行攻击。' },
      { name: '摇尾巴', type: PokemonElementType.normal, power: null, description: '可爱地左右摇晃尾巴， 诱使对手疏忽大意。 会降低对手的防御。' },
      { name: '电光一闪', type: PokemonElementType.normal, power: 40, description: '以迅雷不及掩耳之势扑向对手。 必定能够先制攻击。' },
    ],
  },
  raichu: {
    flavorText: '电击有时候会达到十万伏特， 不小心碰到的话， 连印度象也会昏厥。',
    stats: { hp: 60, attack: 90, defense: 55, specialAttack: 90, specialDefense: 80, speed: 110 },
    moves: [
      { name: '电击', type: PokemonElementType.electric, power: 40, description: '发出电流刺激对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '摇尾巴', type: PokemonElementType.normal, power: null, description: '可爱地左右摇晃尾巴， 诱使对手疏忽大意。 会降低对手的防御。' },
      { name: '电光一闪', type: PokemonElementType.normal, power: 40, description: '以迅雷不及掩耳之势扑向对手。 必定能够先制攻击。' },
      { name: '十万伏特', type: PokemonElementType.electric, power: 90, description: '向对手发出 强力电击进行攻击。 有时会让对手陷入麻痹状态。' },
    ],
  },
  sandshrew: {
    flavorText: '可以蜷缩身体变成球的样子。 骨碌碌滚动着在沙漠里高速移动。',
    stats: { hp: 50, attack: 75, defense: 85, specialAttack: 20, specialDefense: 30, speed: 40 },
    moves: [
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '流沙地狱', type: PokemonElementType.ground, power: 35, description: '将对手困在 铺天盖地的沙暴中， 在４～５回合内进行攻击。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
    ],
  },
  sandslash: {
    flavorText: '用爪子爬上树，当猎物出现时， 身体就蜷缩成尖刺球从高处落下。',
    stats: { hp: 75, attack: 100, defense: 110, specialAttack: 45, specialDefense: 55, speed: 65 },
    moves: [
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '流沙地狱', type: PokemonElementType.ground, power: 35, description: '将对手困在 铺天盖地的沙暴中， 在４～５回合内进行攻击。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
    ],
  },
  nidoran_female: {
    flavorText: '虽然它性格温顺不喜欢战斗， 但由于小犄角中含有毒液， 请一定要小心提防。',
    stats: { hp: 55, attack: 47, defense: 52, specialAttack: 40, specialDefense: 40, speed: 41 },
    moves: [
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '吹捧', type: PokemonElementType.dark, power: null, description: '吹捧对手，使其混乱。 同时还会提高对手的特攻。' },
      { name: '二连踢', type: PokemonElementType.fighting, power: 30, description: '用２只脚踢飞对手进行攻击。 连续２次给予伤害。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
    ],
  },
  nidorina: {
    flavorText: '待在巢穴深处的时候， 它一定会把身上的刺收起来。 这表明它正处于放松状态。',
    stats: { hp: 70, attack: 62, defense: 67, specialAttack: 55, specialDefense: 55, speed: 56 },
    moves: [
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '吹捧', type: PokemonElementType.dark, power: null, description: '吹捧对手，使其混乱。 同时还会提高对手的特攻。' },
      { name: '二连踢', type: PokemonElementType.fighting, power: 30, description: '用２只脚踢飞对手进行攻击。 连续２次给予伤害。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
    ],
  },
  nidoqueen: {
    flavorText: '坚硬的鳞片覆盖着 强壮的身体。据说它的 鳞片会自己长出新的。',
    stats: { hp: 90, attack: 92, defense: 87, specialAttack: 75, specialDefense: 85, speed: 76 },
    moves: [
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '二连踢', type: PokemonElementType.fighting, power: 30, description: '用２只脚踢飞对手进行攻击。 连续２次给予伤害。' },
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
      { name: '摇尾巴', type: PokemonElementType.normal, power: null, description: '可爱地左右摇晃尾巴， 诱使对手疏忽大意。 会降低对手的防御。' },
    ],
  },
  nidoran_male: {
    flavorText: '一直竖起它的大耳朵 感知周围的情形。当它 察觉到危险便会使用毒针。',
    stats: { hp: 46, attack: 57, defense: 40, specialAttack: 40, specialDefense: 40, speed: 50 },
    moves: [
      { name: '角撞', type: PokemonElementType.normal, power: 65, description: '用尖锐的角攻击对手。' },
      { name: '角钻', type: PokemonElementType.normal, power: null, description: '用旋转的角 刺入对手进行攻击。 只要命中就会一击濒死。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '吹捧', type: PokemonElementType.dark, power: null, description: '吹捧对手，使其混乱。 同时还会提高对手的特攻。' },
    ],
  },
  nidorino: {
    flavorText: '头上的犄角里含有毒素， 当犄角撞穿了什么东西时， 毒素就会随着冲击而流出。',
    stats: { hp: 61, attack: 72, defense: 57, specialAttack: 55, specialDefense: 55, speed: 65 },
    moves: [
      { name: '角撞', type: PokemonElementType.normal, power: 65, description: '用尖锐的角攻击对手。' },
      { name: '角钻', type: PokemonElementType.normal, power: null, description: '用旋转的角 刺入对手进行攻击。 只要命中就会一击濒死。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '吹捧', type: PokemonElementType.dark, power: null, description: '吹捧对手，使其混乱。 同时还会提高对手的特攻。' },
    ],
  },
  nidoking: {
    flavorText: '通过活用自己钢一般坚硬的 皮肤来使出强力的撞击。它的 犄角坚硬得能够刺穿钻石。',
    stats: { hp: 81, attack: 102, defense: 77, specialAttack: 85, specialDefense: 75, speed: 85 },
    moves: [
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '超级角击', type: PokemonElementType.bug, power: 120, description: '用坚硬且华丽的角狠狠地 刺入对手进行攻击。' },
      { name: '二连踢', type: PokemonElementType.fighting, power: 30, description: '用２只脚踢飞对手进行攻击。 连续２次给予伤害。' },
      { name: '啄', type: PokemonElementType.flying, power: 35, description: '用尖锐的喙或角 刺向对手进行攻击。' },
    ],
  },
  clefairy: {
    flavorText: '因为可爱的举止和样子， 不论男女老幼都很喜欢它。 但数量稀少。',
    stats: { hp: 70, attack: 45, defense: 48, specialAttack: 60, specialDefense: 65, speed: 35 },
    moves: [
      { name: '彗星拳', type: PokemonElementType.steel, power: 90, description: '使出彗星般的拳头攻击对手。 有时会提高自己的攻击。' },
      { name: '变小', type: PokemonElementType.normal, power: null, description: '蜷缩身体显得很小， 从而大幅提高 自己的闪避率。' },
      { name: '看我嘛', type: PokemonElementType.normal, power: null, description: '引起对手的注意， 将对手的攻击 全部转移到自己身上。' },
      { name: '月光', type: PokemonElementType.normal, power: null, description: '回复自己的ＨＰ。 根据天气的不同， 回复量也会有所变化。' },
    ],
  },
  clefable: {
    flavorText: '不喜欢在人面前现身。 喜欢群居在深山里静静地生活。',
    stats: { hp: 95, attack: 70, defense: 73, specialAttack: 95, specialDefense: 90, speed: 60 },
    moves: [
      { name: '变小', type: PokemonElementType.normal, power: null, description: '蜷缩身体显得很小， 从而大幅提高 自己的闪避率。' },
      { name: '连环巴掌', type: PokemonElementType.normal, power: 15, description: '用连环巴掌 拍打对手进行攻击。 连续攻击２～５次。' },
      { name: '唱歌', type: PokemonElementType.normal, power: null, description: '让对手听舒适、 美妙的歌声， 从而陷入睡眠状态。' },
      { name: '挥指', type: PokemonElementType.normal, power: null, description: '挥动手指刺激自己的大脑， 从所有的招式中 任意使出１个。' },
    ],
  },
  vulpix: {
    flavorText: '因为毛色和尾巴非常漂亮， 所以很有人气。伴随着成长， 尾巴会分开，长得越来越多。',
    stats: { hp: 38, attack: 41, defense: 40, specialAttack: 50, specialDefense: 65, speed: 65 },
    moves: [
      { name: '怨念', type: PokemonElementType.ghost, power: null, description: '因对手的招式而陷入濒死时 给对手施加怨念， 让该招式的ＰＰ变成０。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '火焰旋涡', type: PokemonElementType.fire, power: 35, description: '将对手困在 激烈的火焰旋涡中， 在４～５回合内进行攻击。' },
      { name: '摇尾巴', type: PokemonElementType.normal, power: null, description: '可爱地左右摇晃尾巴， 诱使对手疏忽大意。 会降低对手的防御。' },
    ],
  },
  ninetales: {
    flavorText: '至今还流传着９位圣者 合体变成九尾的传说， 是充满神秘色彩的宝可梦。',
    stats: { hp: 73, attack: 76, defense: 75, specialAttack: 81, specialDefense: 100, speed: 100 },
    moves: [
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '火焰旋涡', type: PokemonElementType.fire, power: 35, description: '将对手困在 激烈的火焰旋涡中， 在４～５回合内进行攻击。' },
      { name: '电光一闪', type: PokemonElementType.normal, power: 40, description: '以迅雷不及掩耳之势扑向对手。 必定能够先制攻击。' },
      { name: '奇异之光', type: PokemonElementType.ghost, power: null, description: '显示奇怪的光， 扰乱对手。 使对手混乱。' },
    ],
  },
  jigglypuff: {
    flavorText: '把肚子鼓得大大的， 唱出神奇的旋律。 听到后就会马上昏昏欲睡。',
    stats: { hp: 115, attack: 45, defense: 20, specialAttack: 45, specialDefense: 25, speed: 20 },
    moves: [
      { name: '连环巴掌', type: PokemonElementType.normal, power: 15, description: '用连环巴掌 拍打对手进行攻击。 连续攻击２～５次。' },
      { name: '唱歌', type: PokemonElementType.normal, power: null, description: '让对手听舒适、 美妙的歌声， 从而陷入睡眠状态。' },
      { name: '拍击', type: PokemonElementType.normal, power: 40, description: '使用长长的尾巴或手等 拍打对手进行攻击。' },
      { name: '定身法', type: PokemonElementType.normal, power: null, description: '阻碍对手行动， 之前使出的招式 将在４回合内无法使用。' },
    ],
  },
  wigglytuff: {
    flavorText: '蓬松的毛发会随着季节转换 而掉落。收集这些毛发后 纺织成的毛线是高级商品。',
    stats: { hp: 140, attack: 70, defense: 45, specialAttack: 85, specialDefense: 50, speed: 45 },
    moves: [
      { name: '连环巴掌', type: PokemonElementType.normal, power: 15, description: '用连环巴掌 拍打对手进行攻击。 连续攻击２～５次。' },
      { name: '唱歌', type: PokemonElementType.normal, power: null, description: '让对手听舒适、 美妙的歌声， 从而陷入睡眠状态。' },
      { name: '定身法', type: PokemonElementType.normal, power: null, description: '阻碍对手行动， 之前使出的招式 将在４回合内无法使用。' },
      { name: '变圆', type: PokemonElementType.normal, power: null, description: '将身体蜷曲变圆， 从而提高自己的防御。' },
    ],
  },
  zubat: {
    flavorText: '白天在洞穴里睡觉。 因为没有眼睛，所以用超音波 一边探测周围，一边飞行。',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 30, specialDefense: 40, speed: 55 },
    moves: [
      { name: '剧毒牙', type: PokemonElementType.poison, power: 50, description: '用有毒的牙齿 咬住对手进行攻击。 有时会使对手中剧毒。' },
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '黑色目光', type: PokemonElementType.normal, power: null, description: '用好似要勾人心魂的黑色目光 一动不动地凝视对手， 使其不能从战斗中逃走。' },
      { name: '超音波', type: PokemonElementType.normal, power: null, description: '从身体发出 特殊的音波， 从而使对手混乱。' },
    ],
  },
  golbat: {
    flavorText: '粗粗的牙齿像吸管一样， 中间是空的，因而意想不到的脆弱。 是为了吸血而特别进化的。',
    stats: { hp: 75, attack: 80, defense: 70, specialAttack: 65, specialDefense: 75, speed: 90 },
    moves: [
      { name: '剧毒牙', type: PokemonElementType.poison, power: 50, description: '用有毒的牙齿 咬住对手进行攻击。 有时会使对手中剧毒。' },
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '黑色目光', type: PokemonElementType.normal, power: null, description: '用好似要勾人心魂的黑色目光 一动不动地凝视对手， 使其不能从战斗中逃走。' },
      { name: '超音波', type: PokemonElementType.normal, power: null, description: '从身体发出 特殊的音波， 从而使对手混乱。' },
    ],
  },
  oddish: {
    flavorText: '要是以为它是普通的草而 将它拔起，就会听到它的叫声。 这让人感到莫名的恐怖。',
    stats: { hp: 45, attack: 50, defense: 55, specialAttack: 75, specialDefense: 65, speed: 30 },
    moves: [
      { name: '花瓣舞', type: PokemonElementType.grass, power: 120, description: '在２～３回合内， 散落花瓣攻击对手。 之后自己会陷入混乱。' },
      { name: '月光', type: PokemonElementType.normal, power: null, description: '回复自己的ＨＰ。 根据天气的不同， 回复量也会有所变化。' },
      { name: '溶解液', type: PokemonElementType.poison, power: 40, description: '将强酸泼向对手进行攻击。 有时会降低对手的特防。' },
      { name: '催眠粉', type: PokemonElementType.grass, power: null, description: '撒出催眠粉， 从而让对手陷入睡眠状态。' },
    ],
  },
  gloom: {
    flavorText: '看似口水的东西其实是 甜甜的蜜。非常黏稠， 只要碰到就会一直黏住。',
    stats: { hp: 60, attack: 65, defense: 70, specialAttack: 85, specialDefense: 75, speed: 40 },
    moves: [
      { name: '花瓣舞', type: PokemonElementType.grass, power: 120, description: '在２～３回合内， 散落花瓣攻击对手。 之后自己会陷入混乱。' },
      { name: '月光', type: PokemonElementType.normal, power: null, description: '回复自己的ＨＰ。 根据天气的不同， 回复量也会有所变化。' },
      { name: '溶解液', type: PokemonElementType.poison, power: 40, description: '将强酸泼向对手进行攻击。 有时会降低对手的特防。' },
      { name: '催眠粉', type: PokemonElementType.grass, power: null, description: '撒出催眠粉， 从而让对手陷入睡眠状态。' },
    ],
  },
  vileplume: {
    flavorText: '为了散布有毒的花粉 而摇动其巨大的花瓣， 同时发出震耳的响声。',
    stats: { hp: 75, attack: 80, defense: 85, specialAttack: 110, specialDefense: 90, speed: 50 },
    moves: [
      { name: '花瓣舞', type: PokemonElementType.grass, power: 120, description: '在２～３回合内， 散落花瓣攻击对手。 之后自己会陷入混乱。' },
      { name: '芳香治疗', type: PokemonElementType.grass, power: null, description: '让同伴闻沁人心脾的香气， 从而治愈我方全员的异常状态。' },
      { name: '麻痹粉', type: PokemonElementType.grass, power: null, description: '撒出麻痹粉， 从而让对手陷入麻痹状态。' },
      { name: '吸取', type: PokemonElementType.grass, power: 20, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
    ],
  },
  paras: {
    flavorText: '即使不停地吃， 获取的营养也几乎都会被 背上生长的蘑菇夺走。',
    stats: { hp: 35, attack: 70, defense: 55, specialAttack: 45, specialDefense: 55, speed: 25 },
    moves: [
      { name: '蘑菇孢子', type: PokemonElementType.grass, power: null, description: '沙沙沙地撒满具有 催眠效果的孢子， 从而让对手陷入睡眠状态。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
      { name: '芳香治疗', type: PokemonElementType.grass, power: null, description: '让同伴闻沁人心脾的香气， 从而治愈我方全员的异常状态。' },
      { name: '麻痹粉', type: PokemonElementType.grass, power: null, description: '撒出麻痹粉， 从而让对手陷入麻痹状态。' },
    ],
  },
  parasect: {
    flavorText: '大大的蘑菇操纵着派拉斯特。 经常和灯罩夜菇争夺领地。',
    stats: { hp: 60, attack: 95, defense: 80, specialAttack: 60, specialDefense: 80, speed: 30 },
    moves: [
      { name: '蘑菇孢子', type: PokemonElementType.grass, power: null, description: '沙沙沙地撒满具有 催眠效果的孢子， 从而让对手陷入睡眠状态。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
      { name: '芳香治疗', type: PokemonElementType.grass, power: null, description: '让同伴闻沁人心脾的香气， 从而治愈我方全员的异常状态。' },
      { name: '麻痹粉', type: PokemonElementType.grass, power: null, description: '撒出麻痹粉， 从而让对手陷入麻痹状态。' },
    ],
  },
  venonat: {
    flavorText: '在明亮的地方你便能发现它 具有雷达功能的大眼其实是 由许多个小眼睛聚集而成的。',
    stats: { hp: 60, attack: 55, defense: 50, specialAttack: 40, specialDefense: 55, speed: 45 },
    moves: [
      { name: '催眠粉', type: PokemonElementType.grass, power: null, description: '撒出催眠粉， 从而让对手陷入睡眠状态。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
      { name: '麻痹粉', type: PokemonElementType.grass, power: null, description: '撒出麻痹粉， 从而让对手陷入麻痹状态。' },
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
    ],
  },
  venomoth: {
    flavorText: '如果不小心把它翅膀上的鳞粉 沾到了身上，那不但会很难去除， 更糟的是毒素也会从那里渗入。',
    stats: { hp: 70, attack: 65, defense: 60, specialAttack: 90, specialDefense: 75, speed: 90 },
    moves: [
      { name: '催眠粉', type: PokemonElementType.grass, power: null, description: '撒出催眠粉， 从而让对手陷入睡眠状态。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
      { name: '银色旋风', type: PokemonElementType.bug, power: 60, description: '在风中掺入鳞粉攻击对手。 有时会提高自己的全部能力。' },
      { name: '麻痹粉', type: PokemonElementType.grass, power: null, description: '撒出麻痹粉， 从而让对手陷入麻痹状态。' },
    ],
  },
  diglett: {
    flavorText: '在地下啃食树根。 因有些品种的蔬菜会遭其啃食， 是可能对农户造成灾害的宝可梦。',
    stats: { hp: 10, attack: 55, defense: 25, specialAttack: 35, specialDefense: 45, speed: 95 },
    moves: [
      { name: '震级', type: PokemonElementType.ground, power: null, description: '晃动地面，攻击自己 周围所有的宝可梦。 招式的威力会有各种变化。' },
      { name: '地裂', type: PokemonElementType.ground, power: null, description: '让对手掉落于地裂的 裂缝中进行攻击。 只要命中就会一击濒死。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
    ],
  },
  dugtrio: {
    flavorText: '三胞胎合作行动。 甚至连地下１００公里都能挖到， 这种力量是团队合作的成果。',
    stats: { hp: 35, attack: 100, defense: 50, specialAttack: 50, specialDefense: 70, speed: 120 },
    moves: [
      { name: '震级', type: PokemonElementType.ground, power: null, description: '晃动地面，攻击自己 周围所有的宝可梦。 招式的威力会有各种变化。' },
      { name: '三重攻击', type: PokemonElementType.normal, power: 80, description: '用３种光线进行攻击。 有时会让对手陷入 麻痹、灼伤或冰冻的状态。' },
      { name: '地裂', type: PokemonElementType.ground, power: null, description: '让对手掉落于地裂的 裂缝中进行攻击。 只要命中就会一击濒死。' },
      { name: '流沙地狱', type: PokemonElementType.ground, power: 35, description: '将对手困在 铺天盖地的沙暴中， 在４～５回合内进行攻击。' },
    ],
  },
  meowth: {
    flavorText: '白天就一直睡啊睡地度过， 太阳落山时才开始活动。 在夜晚的街道上搜寻硬币。',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 40, specialDefense: 40, speed: 90 },
    moves: [
      { name: '聚宝功', type: PokemonElementType.normal, power: 40, description: '向对手的身体 投掷小金币进行攻击。 战斗后可以拿到钱。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '击掌奇袭', type: PokemonElementType.normal, power: 40, description: '进行先制攻击，使对手畏缩。 要在出场后立刻使出才能成功。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
    ],
  },
  persian: {
    flavorText: '性情粗暴，只要视线对上就会 猛扑过来。被锐利的爪子抓到的话， 就会留下很深的伤口。',
    stats: { hp: 65, attack: 70, defense: 60, specialAttack: 65, specialDefense: 65, speed: 115 },
    moves: [
      { name: '聚宝功', type: PokemonElementType.normal, power: 40, description: '向对手的身体 投掷小金币进行攻击。 战斗后可以拿到钱。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '击掌奇袭', type: PokemonElementType.normal, power: 40, description: '进行先制攻击，使对手畏缩。 要在出场后立刻使出才能成功。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
    ],
  },
  psyduck: {
    flavorText: '不受自己控制， 时不时地会产生念力， 导致头痛流泪。',
    stats: { hp: 50, attack: 52, defense: 48, specialAttack: 65, specialDefense: 50, speed: 55 },
    moves: [
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
      { name: '定身法', type: PokemonElementType.normal, power: null, description: '阻碍对手行动， 之前使出的招式 将在４回合内无法使用。' },
    ],
  },
  golduck: {
    flavorText: '据说戴着额头红色的部分 就会被赋予神通力， 过去也曾因此被人类过度捕捉。',
    stats: { hp: 80, attack: 82, defense: 78, specialAttack: 95, specialDefense: 80, speed: 85 },
    moves: [
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
      { name: '定身法', type: PokemonElementType.normal, power: null, description: '阻碍对手行动， 之前使出的招式 将在４回合内无法使用。' },
    ],
  },
  mankey: {
    flavorText: '会没有任何征兆突然发怒。 如果大肆胡闹后谁都不在了的话， 又会因无法忍受孤独而再次发怒。',
    stats: { hp: 40, attack: 80, defense: 35, specialAttack: 35, specialDefense: 45, speed: 70 },
    moves: [
      { name: '空手劈', type: PokemonElementType.fighting, power: 50, description: '用锋利的手刀 劈向对手进行攻击。 容易击中要害。' },
      { name: '十字劈', type: PokemonElementType.fighting, power: 100, description: '用两手呈十字 劈打对手进行攻击。 容易击中要害。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
    ],
  },
  primeape: {
    flavorText: '因为太过生气以致于就这么死去， 这种事也是有的。 但死的时候表情很安详。',
    stats: { hp: 65, attack: 105, defense: 60, specialAttack: 60, specialDefense: 70, speed: 95 },
    moves: [
      { name: '空手劈', type: PokemonElementType.fighting, power: 50, description: '用锋利的手刀 劈向对手进行攻击。 容易击中要害。' },
      { name: '十字劈', type: PokemonElementType.fighting, power: 100, description: '用两手呈十字 劈打对手进行攻击。 容易击中要害。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
    ],
  },
  growlithe: {
    flavorText: '机灵而忠诚。但是对于 不认识的或是侵犯领地的， 会狂吠不停并作出威吓。',
    stats: { hp: 55, attack: 70, defense: 45, specialAttack: 70, specialDefense: 50, speed: 60 },
    moves: [
      { name: '火焰轮', type: PokemonElementType.fire, power: 60, description: '让火焰覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '喷射火焰', type: PokemonElementType.fire, power: 90, description: '向对手发射 烈焰进行攻击。 有时会让对手陷入灼伤状态。' },
    ],
  },
  arcanine: {
    flavorText: '在东方的古代传说中也会出现。 充满威严，强壮而又美丽的宝可梦。',
    stats: { hp: 90, attack: 110, defense: 80, specialAttack: 100, specialDefense: 80, speed: 95 },
    moves: [
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '咬住', type: PokemonElementType.dark, power: 60, description: '用尖锐的牙 咬住对手进行攻击。 有时会使对手畏缩。' },
    ],
  },
  poliwag: {
    flavorText: '漩涡是透明可见的内脏。 当颜色带有白色时， 说明是生什么病了。',
    stats: { hp: 40, attack: 50, defense: 40, specialAttack: 40, specialDefense: 40, speed: 90 },
    moves: [
      { name: '连环巴掌', type: PokemonElementType.normal, power: 15, description: '用连环巴掌 拍打对手进行攻击。 连续攻击２～５次。' },
      { name: '腹鼓', type: PokemonElementType.normal, power: null, description: '将自己的ＨＰ减少到 最大ＨＰ的一半， 从而最大限度提高自己的攻击。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
    ],
  },
  poliwhirl: {
    flavorText: '即使在陆地上也能正常生活， 但因为天敌的宝可梦较少， 所以更喜欢在水中生活。',
    stats: { hp: 65, attack: 65, defense: 65, specialAttack: 50, specialDefense: 50, speed: 90 },
    moves: [
      { name: '连环巴掌', type: PokemonElementType.normal, power: 15, description: '用连环巴掌 拍打对手进行攻击。 连续攻击２～５次。' },
      { name: '腹鼓', type: PokemonElementType.normal, power: null, description: '将自己的ＨＰ减少到 最大ＨＰ的一半， 从而最大限度提高自己的攻击。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
    ],
  },
  poliwrath: {
    flavorText: '阿罗拉的蚊香泳士擅长蛙泳。 模仿蚊香泳士学习游泳的孩子也很多。',
    stats: { hp: 90, attack: 95, defense: 95, specialAttack: 70, specialDefense: 90, speed: 70 },
    moves: [
      { name: '心之眼', type: PokemonElementType.normal, power: null, description: '用心感受对手的行动， 下次攻击必定 会击中对手。' },
      { name: '连环巴掌', type: PokemonElementType.normal, power: 15, description: '用连环巴掌 拍打对手进行攻击。 连续攻击２～５次。' },
      { name: '地狱翻滚', type: PokemonElementType.fighting, power: 80, description: '将对手连同自己一起 摔向地面进行攻击。 自己也会受到少许伤害。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
    ],
  },
  abra: {
    flavorText: '１天中有１８个小时在睡觉。 即使睡着，也能用瞬间移动 在树上移动，采树果吃。',
    stats: { hp: 25, attack: 20, defense: 15, specialAttack: 105, specialDefense: 55, speed: 90 },
    moves: [
      { name: '瞬间移动', type: PokemonElementType.psychic, power: null, description: '停止和野生宝可梦战斗并逃走。' },
    ],
  },
  kadabra: {
    flavorText: '用精神力量浮在空中睡觉。 会把弹力十足的 尾巴当成枕头来用。',
    stats: { hp: 40, attack: 35, defense: 30, specialAttack: 120, specialDefense: 70, speed: 105 },
    moves: [
      { name: '折弯汤匙', type: PokemonElementType.psychic, power: null, description: '折弯汤匙引开注意， 从而降低对手的命中率。' },
      { name: '瞬间移动', type: PokemonElementType.psychic, power: null, description: '停止和野生宝可梦战斗并逃走。' },
      { name: '自我再生', type: PokemonElementType.normal, power: null, description: '让细胞再生， 从而回复自己 最大ＨＰ的一半。' },
      { name: '定身法', type: PokemonElementType.normal, power: null, description: '阻碍对手行动， 之前使出的招式 将在４回合内无法使用。' },
    ],
  },
  alakazam: {
    flavorText: '智商大约有５０００。 强大的念力满溢出来， 光是呆在旁边就会头痛不已。',
    stats: { hp: 55, attack: 50, defense: 45, specialAttack: 135, specialDefense: 95, speed: 120 },
    moves: [
      { name: '折弯汤匙', type: PokemonElementType.psychic, power: null, description: '折弯汤匙引开注意， 从而降低对手的命中率。' },
      { name: '瞬间移动', type: PokemonElementType.psychic, power: null, description: '停止和野生宝可梦战斗并逃走。' },
      { name: '自我再生', type: PokemonElementType.normal, power: null, description: '让细胞再生， 从而回复自己 最大ＨＰ的一半。' },
      { name: '定身法', type: PokemonElementType.normal, power: null, description: '阻碍对手行动， 之前使出的招式 将在４回合内无法使用。' },
    ],
  },
  machop: {
    flavorText: '非常喜欢锻炼。 盯着自己每天不断增大的肌肉， 愈加勤奋地锻炼。',
    stats: { hp: 70, attack: 80, defense: 50, specialAttack: 35, specialDefense: 35, speed: 35 },
    moves: [
      { name: '空手劈', type: PokemonElementType.fighting, power: 50, description: '用锋利的手刀 劈向对手进行攻击。 容易击中要害。' },
      { name: '借力摔', type: PokemonElementType.fighting, power: 70, description: '会在对手之后进行攻击。 但是自己的攻击必定会命中。' },
      { name: '十字劈', type: PokemonElementType.fighting, power: 100, description: '用两手呈十字 劈打对手进行攻击。 容易击中要害。' },
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
    ],
  },
  machoke: {
    flavorText: '不断锻炼的结果就是 拥有了非常惊人的力量。 灵活运用这力量帮助人类工作。',
    stats: { hp: 80, attack: 100, defense: 70, specialAttack: 50, specialDefense: 60, speed: 45 },
    moves: [
      { name: '空手劈', type: PokemonElementType.fighting, power: 50, description: '用锋利的手刀 劈向对手进行攻击。 容易击中要害。' },
      { name: '借力摔', type: PokemonElementType.fighting, power: 70, description: '会在对手之后进行攻击。 但是自己的攻击必定会命中。' },
      { name: '十字劈', type: PokemonElementType.fighting, power: 100, description: '用两手呈十字 劈打对手进行攻击。 容易击中要害。' },
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
    ],
  },
  machamp: {
    flavorText: '使出百万吨级的拳击， 将阻挡的敌人击飞到 地平线的另一端。',
    stats: { hp: 90, attack: 130, defense: 80, specialAttack: 65, specialDefense: 85, speed: 55 },
    moves: [
      { name: '空手劈', type: PokemonElementType.fighting, power: 50, description: '用锋利的手刀 劈向对手进行攻击。 容易击中要害。' },
      { name: '借力摔', type: PokemonElementType.fighting, power: 70, description: '会在对手之后进行攻击。 但是自己的攻击必定会命中。' },
      { name: '十字劈', type: PokemonElementType.fighting, power: 100, description: '用两手呈十字 劈打对手进行攻击。 容易击中要害。' },
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
    ],
  },
  bellsprout: {
    flavorText: '喜欢温度高，有一定 湿度的地方。它会用 身上的藤蔓抓小虫来吃。',
    stats: { hp: 50, attack: 75, defense: 35, specialAttack: 70, specialDefense: 30, speed: 40 },
    moves: [
      { name: '藤鞭', type: PokemonElementType.grass, power: 45, description: '用如同鞭子般弯曲而细长的藤蔓 摔打对手进行攻击。' },
      { name: '溶解液', type: PokemonElementType.poison, power: 40, description: '将强酸泼向对手进行攻击。 有时会降低对手的特防。' },
      { name: '催眠粉', type: PokemonElementType.grass, power: null, description: '撒出催眠粉， 从而让对手陷入睡眠状态。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
    ],
  },
  weepinbell: {
    flavorText: '它在肚子饿的时候会 吞掉周围会动的东西， 分泌溶解液让其致命。',
    stats: { hp: 65, attack: 90, defense: 50, specialAttack: 85, specialDefense: 45, speed: 55 },
    moves: [
      { name: '藤鞭', type: PokemonElementType.grass, power: 45, description: '用如同鞭子般弯曲而细长的藤蔓 摔打对手进行攻击。' },
      { name: '溶解液', type: PokemonElementType.poison, power: 40, description: '将强酸泼向对手进行攻击。 有时会降低对手的特防。' },
      { name: '催眠粉', type: PokemonElementType.grass, power: null, description: '撒出催眠粉， 从而让对手陷入睡眠状态。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
    ],
  },
  victreebel: {
    flavorText: '用花蜜的香味引诱猎物。 据说被它吞入嘴里的东西， 只要1天就会溶解到连骨头都不剩。',
    stats: { hp: 80, attack: 105, defense: 65, specialAttack: 100, specialDefense: 70, speed: 70 },
    moves: [
      { name: '藤鞭', type: PokemonElementType.grass, power: 45, description: '用如同鞭子般弯曲而细长的藤蔓 摔打对手进行攻击。' },
      { name: '催眠粉', type: PokemonElementType.grass, power: null, description: '撒出催眠粉， 从而让对手陷入睡眠状态。' },
      { name: '喷出', type: PokemonElementType.normal, power: null, description: '将积蓄的力量 撞向对手进行攻击。 积蓄得越多，威力越大。' },
      { name: '吞下', type: PokemonElementType.normal, power: null, description: '将积蓄的力量吞下， 从而回复自己的ＨＰ。 积蓄得越多，回复越大。' },
    ],
  },
  tentacool: {
    flavorText: '在沙滩等地方晒干后， 依然能存活的情况也有很多。 泡在水里的话就会湿润复活。',
    stats: { hp: 40, attack: 40, defense: 35, specialAttack: 50, specialDefense: 100, speed: 70 },
    moves: [
      { name: '缠绕', type: PokemonElementType.normal, power: 10, description: '用触手或青藤等缠绕进行攻击。 有时会降低对手的速度。' },
      { name: '屏障', type: PokemonElementType.psychic, power: null, description: '制造坚固的壁障， 从而大幅提高自己的防御。' },
      { name: '溶解液', type: PokemonElementType.poison, power: 40, description: '将强酸泼向对手进行攻击。 有时会降低对手的特防。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
    ],
  },
  tentacruel: {
    flavorText: '有毒的触手通常是８０根。 活得越久，触手的数量就越会减少。',
    stats: { hp: 80, attack: 70, defense: 65, specialAttack: 80, specialDefense: 120, speed: 100 },
    moves: [
      { name: '缠绕', type: PokemonElementType.normal, power: 10, description: '用触手或青藤等缠绕进行攻击。 有时会降低对手的速度。' },
      { name: '屏障', type: PokemonElementType.psychic, power: null, description: '制造坚固的壁障， 从而大幅提高自己的防御。' },
      { name: '溶解液', type: PokemonElementType.poison, power: 40, description: '将强酸泼向对手进行攻击。 有时会降低对手的特防。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
    ],
  },
  geodude: {
    flavorText: '圆圆的很容易拿， 但要互相扔的话，又硬又重。 像打雪仗那样扔着玩会很危险。',
    stats: { hp: 40, attack: 80, defense: 100, specialAttack: 30, specialDefense: 30, speed: 20 },
    moves: [
      { name: '震级', type: PokemonElementType.ground, power: null, description: '晃动地面，攻击自己 周围所有的宝可梦。 招式的威力会有各种变化。' },
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '落石', type: PokemonElementType.rock, power: 50, description: '拿起小岩石， 投掷对手进行攻击。' },
      { name: '大爆炸', type: PokemonElementType.normal, power: 250, description: '引发大爆炸， 攻击自己周围所有的宝可梦。 使用后自己会陷入濒死。' },
    ],
  },
  graveler: {
    flavorText: '非常喜欢吃长有苔藓的岩石。 发着嘎吱嘎吱的声音， １天吃１吨以上。',
    stats: { hp: 55, attack: 95, defense: 115, specialAttack: 45, specialDefense: 45, speed: 35 },
    moves: [
      { name: '震级', type: PokemonElementType.ground, power: null, description: '晃动地面，攻击自己 周围所有的宝可梦。 招式的威力会有各种变化。' },
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '落石', type: PokemonElementType.rock, power: 50, description: '拿起小岩石， 投掷对手进行攻击。' },
      { name: '大爆炸', type: PokemonElementType.normal, power: 250, description: '引发大爆炸， 攻击自己周围所有的宝可梦。 使用后自己会陷入濒死。' },
    ],
  },
  golem: {
    flavorText: '即使用炸药爆破身体也毫发无伤， 但非常讨厌湿气和雨。',
    stats: { hp: 80, attack: 120, defense: 130, specialAttack: 55, specialDefense: 65, speed: 45 },
    moves: [
      { name: '震级', type: PokemonElementType.ground, power: null, description: '晃动地面，攻击自己 周围所有的宝可梦。 招式的威力会有各种变化。' },
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '落石', type: PokemonElementType.rock, power: 50, description: '拿起小岩石， 投掷对手进行攻击。' },
      { name: '大爆炸', type: PokemonElementType.normal, power: 250, description: '引发大爆炸， 攻击自己周围所有的宝可梦。 使用后自己会陷入濒死。' },
    ],
  },
  ponyta: {
    flavorText: '在用力跳跃之后，会 用蹄子和脚上的肌肉 来缓解着地时的撞击。',
    stats: { hp: 50, attack: 85, defense: 55, specialAttack: 65, specialDefense: 65, speed: 90 },
    moves: [
      { name: '踩踏', type: PokemonElementType.normal, power: 65, description: '用大脚踩踏对手进行攻击。 有时会使对手畏缩。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '火焰旋涡', type: PokemonElementType.fire, power: 35, description: '将对手困在 激烈的火焰旋涡中， 在４～５回合内进行攻击。' },
      { name: '弹跳', type: PokemonElementType.flying, power: 85, description: '弹跳到高高的空中， 第２回合攻击对手。 有时会让对手陷入麻痹状态。' },
    ],
  },
  rapidash: {
    flavorText: '总之就是喜欢跑步。如果 发现有谁跑得比自己更快， 就会用尽全力去追赶。',
    stats: { hp: 65, attack: 100, defense: 70, specialAttack: 80, specialDefense: 80, speed: 105 },
    moves: [
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
      { name: '踩踏', type: PokemonElementType.normal, power: 65, description: '用大脚踩踏对手进行攻击。 有时会使对手畏缩。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '火焰旋涡', type: PokemonElementType.fire, power: 35, description: '将对手困在 激烈的火焰旋涡中， 在４～５回合内进行攻击。' },
    ],
  },
  slowpoke: {
    flavorText: '长长的尾巴经常被揪断。 因为也不会觉得特别痛， 马上会长出来，所以并不在意。',
    stats: { hp: 90, attack: 65, defense: 65, specialAttack: 40, specialDefense: 40, speed: 15 },
    moves: [
      { name: '哈欠', type: PokemonElementType.normal, power: null, description: '打个大哈欠引起睡意。 在下一回合让对手陷入睡眠状态。' },
      { name: '定身法', type: PokemonElementType.normal, power: null, description: '阻碍对手行动， 之前使出的招式 将在４回合内无法使用。' },
      { name: '念力', type: PokemonElementType.psychic, power: 50, description: '向对手发送 微弱的念力进行攻击。 有时会使对手混乱。' },
      { name: '瞬间失忆', type: PokemonElementType.psychic, power: null, description: '将头脑清空， 瞬间忘记某事， 从而大幅提高自己的特防。' },
    ],
  },
  slowbro: {
    flavorText: '呆呆地望着大海。 因大舌贝的毒在身体中循环 而变得越来越傻乎乎。',
    stats: { hp: 95, attack: 75, defense: 110, specialAttack: 100, specialDefense: 80, speed: 30 },
    moves: [
      { name: '缩入壳中', type: PokemonElementType.water, power: null, description: '缩入壳里保护身体， 从而提高自己的防御。' },
      { name: '哈欠', type: PokemonElementType.normal, power: null, description: '打个大哈欠引起睡意。 在下一回合让对手陷入睡眠状态。' },
      { name: '定身法', type: PokemonElementType.normal, power: null, description: '阻碍对手行动， 之前使出的招式 将在４回合内无法使用。' },
      { name: '念力', type: PokemonElementType.psychic, power: 50, description: '向对手发送 微弱的念力进行攻击。 有时会使对手混乱。' },
    ],
  },
  magnemite: {
    flavorText: '聚集在有电的地方。 也会密密麻麻地贴在 输送电力的铁塔等地方。',
    stats: { hp: 25, attack: 35, defense: 70, specialAttack: 95, specialDefense: 55, speed: 45 },
    moves: [
      { name: '音爆', type: PokemonElementType.normal, power: null, description: '将冲击波 撞向对手进行攻击。 必定会给予２０的伤害。' },
      { name: '锁定', type: PokemonElementType.normal, power: null, description: '紧紧瞄准对手， 下次攻击必定会打中。' },
      { name: '电光', type: PokemonElementType.electric, power: 65, description: '让电流覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '超音波', type: PokemonElementType.normal, power: null, description: '从身体发出 特殊的音波， 从而使对手混乱。' },
    ],
  },
  magneton: {
    flavorText: '连接的时候，３只小磁怪的 脑袋也会连成一体。 但并不会变得３倍聪明。',
    stats: { hp: 50, attack: 60, defense: 95, specialAttack: 120, specialDefense: 70, speed: 70 },
    moves: [
      { name: '音爆', type: PokemonElementType.normal, power: null, description: '将冲击波 撞向对手进行攻击。 必定会给予２０的伤害。' },
      { name: '锁定', type: PokemonElementType.normal, power: null, description: '紧紧瞄准对手， 下次攻击必定会打中。' },
      { name: '三重攻击', type: PokemonElementType.normal, power: 80, description: '用３种光线进行攻击。 有时会让对手陷入 麻痹、灼伤或冰冻的状态。' },
      { name: '电光', type: PokemonElementType.electric, power: 65, description: '让电流覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入麻痹状态。' },
    ],
  },
  farfetchd: {
    flavorText: '居住在茎状植物生长的地方。 由于这种植物极为稀少而罕见， 大葱鸭的数量似乎也在减少。',
    stats: { hp: 52, attack: 90, defense: 55, specialAttack: 58, specialDefense: 62, speed: 60 },
    moves: [
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
      { name: '啄', type: PokemonElementType.flying, power: 35, description: '用尖锐的喙或角 刺向对手进行攻击。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
      { name: '点到为止', type: PokemonElementType.normal, power: 40, description: '对手的ＨＰ 至少会留下１ＨＰ， 如此般手下留情地攻击。' },
    ],
  },
  doduo: {
    flavorText: '羽毛较短所以不擅长飞行， 但是拥有发达的双脚， 能够以很快的速度奔跑。',
    stats: { hp: 35, attack: 85, defense: 45, specialAttack: 35, specialDefense: 35, speed: 75 },
    moves: [
      { name: '啄钻', type: PokemonElementType.flying, power: 80, description: '一边旋转，一边将尖喙 刺入对手进行攻击。' },
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
      { name: '三重攻击', type: PokemonElementType.normal, power: 80, description: '用３种光线进行攻击。 有时会让对手陷入 麻痹、灼伤或冰冻的状态。' },
      { name: '啄', type: PokemonElementType.flying, power: 35, description: '用尖锐的喙或角 刺向对手进行攻击。' },
    ],
  },
  dodrio: {
    flavorText: '由嘟嘟的某个头分裂 出的变种。以60千米的 时速在草原上奔跑。',
    stats: { hp: 60, attack: 110, defense: 70, specialAttack: 60, specialDefense: 60, speed: 110 },
    moves: [
      { name: '啄钻', type: PokemonElementType.flying, power: 80, description: '一边旋转，一边将尖喙 刺入对手进行攻击。' },
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
      { name: '三重攻击', type: PokemonElementType.normal, power: 80, description: '用３种光线进行攻击。 有时会让对手陷入 麻痹、灼伤或冰冻的状态。' },
      { name: '啄', type: PokemonElementType.flying, power: 35, description: '用尖锐的喙或角 刺向对手进行攻击。' },
    ],
  },
  seel: {
    flavorText: '人们一直以为它只生活在寒冷的海域。 它出现在阿罗拉的原因是个谜。',
    stats: { hp: 65, attack: 45, defense: 55, specialAttack: 45, specialDefense: 70, speed: 45 },
    moves: [
      { name: '极光束', type: PokemonElementType.ice, power: 65, description: '向对手发射 虹色光束进行攻击。 有时会降低对手的攻击。' },
      { name: '叫声', type: PokemonElementType.normal, power: null, description: '让对手听可爱的叫声， 引开注意力使其疏忽， 从而降低对手的攻击。' },
      { name: '冰冻光束', type: PokemonElementType.ice, power: 90, description: '向对手发射 冰冻光束进行攻击。 有时会让对手陷入冰冻状态。' },
      { name: '神秘守护', type: PokemonElementType.normal, power: null, description: '在５回合内 被神奇的力量守护， 从而不会陷入异常状态。' },
    ],
  },
  dewgong: {
    flavorText: '能以８节的速度在海里游动， 并搜寻能当做猎物的宝可梦。 特别喜欢吃弱丁鱼。',
    stats: { hp: 90, attack: 70, defense: 80, specialAttack: 70, specialDefense: 95, speed: 70 },
    moves: [
      { name: '绝对零度', type: PokemonElementType.ice, power: null, description: '给对手一击濒死。 如果是冰属性以外的宝可梦使用， 就会难以打中。' },
      { name: '极光束', type: PokemonElementType.ice, power: 65, description: '向对手发射 虹色光束进行攻击。 有时会降低对手的攻击。' },
      { name: '叫声', type: PokemonElementType.normal, power: null, description: '让对手听可爱的叫声， 引开注意力使其疏忽， 从而降低对手的攻击。' },
      { name: '信号光束', type: PokemonElementType.bug, power: 75, description: '发射神奇的光线进行攻击。 有时会使对手混乱。' },
    ],
  },
  grimer: {
    flavorText: '工厂排放的污泥废液 是其主要的饵料。 最近数量减少了。',
    stats: { hp: 80, attack: 80, defense: 50, specialAttack: 40, specialDefense: 50, speed: 25 },
    moves: [
      { name: '污泥攻击', type: PokemonElementType.poison, power: 65, description: '用污泥投掷对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '变小', type: PokemonElementType.normal, power: null, description: '蜷缩身体显得很小， 从而大幅提高 自己的闪避率。' },
      { name: '毒瓦斯', type: PokemonElementType.poison, power: null, description: '将毒瓦斯吹到对手的脸上， 从而让对手陷入中毒状态。' },
      { name: '溶化', type: PokemonElementType.poison, power: null, description: '通过细胞的变化进行液化， 从而大幅提高自己的防御。' },
    ],
  },
  muk: {
    flavorText: '总之就是臭得鼻子都不敢呼吸。 但是也存在着部分觉得这味道 很不错的臭臭泥爱好者。',
    stats: { hp: 105, attack: 105, defense: 75, specialAttack: 65, specialDefense: 100, speed: 50 },
    moves: [
      { name: '污泥攻击', type: PokemonElementType.poison, power: 65, description: '用污泥投掷对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '变小', type: PokemonElementType.normal, power: null, description: '蜷缩身体显得很小， 从而大幅提高 自己的闪避率。' },
      { name: '毒瓦斯', type: PokemonElementType.poison, power: null, description: '将毒瓦斯吹到对手的脸上， 从而让对手陷入中毒状态。' },
      { name: '溶化', type: PokemonElementType.poison, power: null, description: '通过细胞的变化进行液化， 从而大幅提高自己的防御。' },
    ],
  },
  shellder: {
    flavorText: '壳的硬度超过钻石。 过去，人们会收集壳来做成盾牌。',
    stats: { hp: 30, attack: 65, defense: 100, specialAttack: 45, specialDefense: 25, speed: 40 },
    moves: [
      { name: '贝壳夹击', type: PokemonElementType.water, power: 35, description: '用非常坚固且厚实的贝壳， 在４～５回合内 夹住对手进行攻击。' },
      { name: '极光束', type: PokemonElementType.ice, power: 65, description: '向对手发射 虹色光束进行攻击。 有时会降低对手的攻击。' },
      { name: '缩入壳中', type: PokemonElementType.water, power: null, description: '缩入壳里保护身体， 从而提高自己的防御。' },
      { name: '冰锥', type: PokemonElementType.ice, power: 25, description: '向对手发射 锋利的冰柱进行攻击。 连续攻击２～５次。' },
    ],
  },
  cloyster: {
    flavorText: '坚硬的外壳连燃烧弹也无法击碎。 壳中的正身至今不明。',
    stats: { hp: 50, attack: 95, defense: 180, specialAttack: 85, specialDefense: 45, speed: 70 },
    moves: [
      { name: '尖刺加农炮', type: PokemonElementType.normal, power: 20, description: '向对手发射 锐针进行攻击。 连续攻击２～５次。' },
      { name: '极光束', type: PokemonElementType.ice, power: 65, description: '向对手发射 虹色光束进行攻击。 有时会降低对手的攻击。' },
      { name: '缩入壳中', type: PokemonElementType.water, power: null, description: '缩入壳里保护身体， 从而提高自己的防御。' },
      { name: '超音波', type: PokemonElementType.normal, power: null, description: '从身体发出 特殊的音波， 从而使对手混乱。' },
    ],
  },
  gastly: {
    flavorText: '如果在已成废墟的 建筑物里亮着怪异的光， 说明那里潜藏着鬼斯。',
    stats: { hp: 30, attack: 35, defense: 30, specialAttack: 100, specialDefense: 35, speed: 80 },
    moves: [
      { name: '舌舔', type: PokemonElementType.ghost, power: 30, description: '用长长的舌头， 舔遍对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '黑色目光', type: PokemonElementType.normal, power: null, description: '用好似要勾人心魂的黑色目光 一动不动地凝视对手， 使其不能从战斗中逃走。' },
      { name: '恶梦', type: PokemonElementType.ghost, power: null, description: '让在睡眠状态下的对手做恶梦， 每回合会缓缓减少ＨＰ。' },
      { name: '同命', type: PokemonElementType.ghost, power: null, description: '使出招式后，当受到对手攻击 陷入濒死时，对手也会一同濒死。 连续使出则会失败。' },
    ],
  },
  haunter: {
    flavorText: '从阴暗处袭击人类。 如果被其冰冷的舌头舔到， 就会一天天虚弱至死。',
    stats: { hp: 45, attack: 50, defense: 45, specialAttack: 115, specialDefense: 55, speed: 95 },
    moves: [
      { name: '暗影拳', type: PokemonElementType.ghost, power: 60, description: '使出混影之拳。 攻击必定会命中。' },
      { name: '舌舔', type: PokemonElementType.ghost, power: 30, description: '用长长的舌头， 舔遍对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '黑色目光', type: PokemonElementType.normal, power: null, description: '用好似要勾人心魂的黑色目光 一动不动地凝视对手， 使其不能从战斗中逃走。' },
      { name: '恶梦', type: PokemonElementType.ghost, power: null, description: '让在睡眠状态下的对手做恶梦， 每回合会缓缓减少ＨＰ。' },
    ],
  },
  gengar: {
    flavorText: '如果突然被寒气侵袭， 那就是被耿鬼袭击的证据。 没有可逃之法，所以死心吧。',
    stats: { hp: 60, attack: 65, defense: 60, specialAttack: 130, specialDefense: 75, speed: 110 },
    moves: [
      { name: '暗影拳', type: PokemonElementType.ghost, power: 60, description: '使出混影之拳。 攻击必定会命中。' },
      { name: '舌舔', type: PokemonElementType.ghost, power: 30, description: '用长长的舌头， 舔遍对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '黑色目光', type: PokemonElementType.normal, power: null, description: '用好似要勾人心魂的黑色目光 一动不动地凝视对手， 使其不能从战斗中逃走。' },
      { name: '恶梦', type: PokemonElementType.ghost, power: null, description: '让在睡眠状态下的对手做恶梦， 每回合会缓缓减少ＨＰ。' },
    ],
  },
  onix: {
    flavorText: '以惊人之势钻地觅食。在它 通过之后形成的洞穴会 被地鼠们当作自己的住处。',
    stats: { hp: 35, attack: 45, defense: 160, specialAttack: 30, specialDefense: 45, speed: 70 },
    moves: [
      { name: '落石', type: PokemonElementType.rock, power: 50, description: '拿起小岩石， 投掷对手进行攻击。' },
      { name: '绑紧', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 绑紧对手进行攻击。' },
      { name: '龙息', type: PokemonElementType.dragon, power: 60, description: '将强烈的气息 吹向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '流沙地狱', type: PokemonElementType.ground, power: 35, description: '将对手困在 铺天盖地的沙暴中， 在４～５回合内进行攻击。' },
    ],
  },
  drowzee: {
    flavorText: '吞食梦来生存的宝可梦。 被认为与食梦梦和梦梦蚀 有着共同的祖先。',
    stats: { hp: 60, attack: 48, defense: 45, specialAttack: 43, specialDefense: 90, speed: 42 },
    moves: [
      { name: '瑜伽姿势', type: PokemonElementType.psychic, power: null, description: '唤醒身体深处 沉睡的力量， 从而提高自己的攻击。' },
      { name: '毒瓦斯', type: PokemonElementType.poison, power: null, description: '将毒瓦斯吹到对手的脸上， 从而让对手陷入中毒状态。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
      { name: '拍击', type: PokemonElementType.normal, power: 40, description: '使用长长的尾巴或手等 拍打对手进行攻击。' },
    ],
  },
  hypno: {
    flavorText: '是非常危险的宝可梦， 但祈求良好睡眠的人们 称其为救世主。',
    stats: { hp: 85, attack: 73, defense: 70, specialAttack: 73, specialDefense: 115, speed: 67 },
    moves: [
      { name: '瑜伽姿势', type: PokemonElementType.psychic, power: null, description: '唤醒身体深处 沉睡的力量， 从而提高自己的攻击。' },
      { name: '毒瓦斯', type: PokemonElementType.poison, power: null, description: '将毒瓦斯吹到对手的脸上， 从而让对手陷入中毒状态。' },
      { name: '恶梦', type: PokemonElementType.ghost, power: null, description: '让在睡眠状态下的对手做恶梦， 每回合会缓缓减少ＨＰ。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
    ],
  },
  krabby: {
    flavorText: '能在海边上找到它。 巨大的钳子即使断掉， 今后也会再长出来。',
    stats: { hp: 30, attack: 105, defense: 90, specialAttack: 25, specialDefense: 25, speed: 50 },
    moves: [
      { name: '蟹钳锤', type: PokemonElementType.water, power: 100, description: '用大钳子 敲打对手进行攻击。 容易击中要害。' },
      { name: '断头钳', type: PokemonElementType.normal, power: null, description: '用大钳子或剪刀等 夹断对手进行攻击。 只要命中就会一击濒死。' },
      { name: '夹住', type: PokemonElementType.normal, power: 55, description: '将对手从两侧夹住， 给予伤害。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
    ],
  },
  kingler: {
    flavorText: '一边的钳子很是巨大， 虽说硬如钢铁还拥有 １万马力，但还是太重了。',
    stats: { hp: 55, attack: 130, defense: 115, specialAttack: 50, specialDefense: 50, speed: 75 },
    moves: [
      { name: '蟹钳锤', type: PokemonElementType.water, power: 100, description: '用大钳子 敲打对手进行攻击。 容易击中要害。' },
      { name: '断头钳', type: PokemonElementType.normal, power: null, description: '用大钳子或剪刀等 夹断对手进行攻击。 只要命中就会一击濒死。' },
      { name: '夹住', type: PokemonElementType.normal, power: 55, description: '将对手从两侧夹住， 给予伤害。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
    ],
  },
  voltorb: {
    flavorText: '据说它与精灵球相似的外形 其实是它的保护色，但它 很容易自爆这一点也出人意料。',
    stats: { hp: 40, attack: 30, defense: 50, specialAttack: 55, specialDefense: 55, speed: 100 },
    moves: [
      { name: '音爆', type: PokemonElementType.normal, power: null, description: '将冲击波 撞向对手进行攻击。 必定会给予２０的伤害。' },
      { name: '镜面反射', type: PokemonElementType.psychic, power: null, description: '从对手那里受到 特殊攻击的伤害将以 ２倍返还给同一个对手。' },
      { name: '电光', type: PokemonElementType.electric, power: 65, description: '让电流覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
    ],
  },
  electrode: {
    flavorText: '只要受到一点撞击， 就会由于体内的 电能溢出导致爆炸。',
    stats: { hp: 60, attack: 50, defense: 70, specialAttack: 80, specialDefense: 80, speed: 150 },
    moves: [
      { name: '音爆', type: PokemonElementType.normal, power: null, description: '将冲击波 撞向对手进行攻击。 必定会给予２０的伤害。' },
      { name: '镜面反射', type: PokemonElementType.psychic, power: null, description: '从对手那里受到 特殊攻击的伤害将以 ２倍返还给同一个对手。' },
      { name: '电光', type: PokemonElementType.electric, power: 65, description: '让电流覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
    ],
  },
  exeggcute: {
    flavorText: '用心灵感应与伙伴交流。 据说兼有植物与某种别的遗传基因。',
    stats: { hp: 60, attack: 40, defense: 80, specialAttack: 60, specialDefense: 45, speed: 40 },
    moves: [
      { name: '投球', type: PokemonElementType.normal, power: 15, description: '向对手投掷 圆形物体进行攻击。 连续攻击２～５次。' },
      { name: '催眠粉', type: PokemonElementType.grass, power: null, description: '撒出催眠粉， 从而让对手陷入睡眠状态。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
      { name: '麻痹粉', type: PokemonElementType.grass, power: null, description: '撒出麻痹粉， 从而让对手陷入麻痹状态。' },
    ],
  },
  exeggutor: {
    flavorText: '各个脑袋里有各自的思想， 通过心灵感应来交谈， 决定大家要做什么。',
    stats: { hp: 95, attack: 95, defense: 85, specialAttack: 125, specialDefense: 75, speed: 55 },
    moves: [
      { name: '投球', type: PokemonElementType.normal, power: 15, description: '向对手投掷 圆形物体进行攻击。 连续攻击２～５次。' },
      { name: '炸蛋', type: PokemonElementType.normal, power: 100, description: '向对手用力投掷 大大的蛋进行攻击。' },
      { name: '踩踏', type: PokemonElementType.normal, power: 65, description: '用大脚踩踏对手进行攻击。 有时会使对手畏缩。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
    ],
  },
  cubone: {
    flavorText: '头上戴着的是死去母亲的 头盖骨。据说，当它摆脱 母亲死亡的悲痛时就会进化。',
    stats: { hp: 50, attack: 50, defense: 95, specialAttack: 40, specialDefense: 50, speed: 35 },
    moves: [
      { name: '骨头回力镖', type: PokemonElementType.ground, power: 50, description: '用手中的骨头投掷对手， 来回连续２次给予伤害。' },
      { name: '骨棒', type: PokemonElementType.ground, power: 65, description: '用手中的骨头 殴打对手进行攻击。 有时会使对手畏缩。' },
      { name: '骨棒乱打', type: PokemonElementType.ground, power: 25, description: '用坚硬的骨头 殴打对手进行攻击。 连续攻击２～５次。' },
      { name: '大闹一番', type: PokemonElementType.normal, power: 120, description: '在２～３回合内， 乱打一气地攻击对手。 大闹一番后自己会陷入混乱。' },
    ],
  },
  marowak: {
    flavorText: '原本因体弱而很胆小。 进化后变成了挥舞着骨头的粗暴性格。',
    stats: { hp: 60, attack: 80, defense: 110, specialAttack: 50, specialDefense: 80, speed: 45 },
    moves: [
      { name: '骨头回力镖', type: PokemonElementType.ground, power: 50, description: '用手中的骨头投掷对手， 来回连续２次给予伤害。' },
      { name: '骨棒', type: PokemonElementType.ground, power: 65, description: '用手中的骨头 殴打对手进行攻击。 有时会使对手畏缩。' },
      { name: '骨棒乱打', type: PokemonElementType.ground, power: 25, description: '用坚硬的骨头 殴打对手进行攻击。 连续攻击２～５次。' },
      { name: '大闹一番', type: PokemonElementType.normal, power: 120, description: '在２～３回合内， 乱打一气地攻击对手。 大闹一番后自己会陷入混乱。' },
    ],
  },
  hitmonlee: {
    flavorText: '在踢中敌人的瞬间， 脚底会变得像钻石般坚硬， 将对手踢成碎片。',
    stats: { hp: 50, attack: 120, defense: 53, specialAttack: 35, specialDefense: 110, speed: 87 },
    moves: [
      { name: '回旋踢', type: PokemonElementType.fighting, power: 60, description: '一边使身体快速旋转， 一边踢飞对手进行攻击。 有时会使对手畏缩。' },
      { name: '飞踢', type: PokemonElementType.fighting, power: 100, description: '使出高高的腾空踢攻击对手。 如果踢偏则自己会受到伤害。' },
      { name: '瑜伽姿势', type: PokemonElementType.psychic, power: null, description: '唤醒身体深处 沉睡的力量， 从而提高自己的攻击。' },
      { name: '心之眼', type: PokemonElementType.normal, power: null, description: '用心感受对手的行动， 下次攻击必定 会击中对手。' },
    ],
  },
  hitmonchan: {
    flavorText: '它的拳击好似钻头一般！ 在它的攻击之下，哪怕是 水泥墙也会被钻出洞来。',
    stats: { hp: 50, attack: 105, defense: 79, specialAttack: 35, specialDefense: 110, speed: 76 },
    moves: [
      { name: '连续拳', type: PokemonElementType.normal, power: 18, description: '用拳头怒涛般的 殴打对手进行攻击。 连续攻击２～５次。' },
      { name: '冲天拳', type: PokemonElementType.fighting, power: 85, description: '用冲向天空般高高的上勾拳 顶起对手进行攻击。' },
      { name: '音速拳', type: PokemonElementType.fighting, power: 40, description: '以迅雷不及掩耳之势出拳。 必定能够先制攻击。' },
      { name: '追打', type: PokemonElementType.dark, power: 40, description: '当对手替换宝可梦上场时 使出此招式的话， 能够以２倍的威力进行攻击。' },
    ],
  },
  lickitung: {
    flavorText: '不管是什么，都会用长舌头去舔舔看。 被舔到的部位如果放着不管 就会红肿发炎。',
    stats: { hp: 90, attack: 55, defense: 75, specialAttack: 60, specialDefense: 75, speed: 30 },
    moves: [
      { name: '紧束', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 紧束对手进行攻击。' },
      { name: '舌舔', type: PokemonElementType.ghost, power: 30, description: '用长长的舌头， 舔遍对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '焕然一新', type: PokemonElementType.normal, power: null, description: '让身体休息， 治愈自己身上所中的 毒、麻痹、灼伤的异常状态。' },
      { name: '踩踏', type: PokemonElementType.normal, power: 65, description: '用大脚踩踏对手进行攻击。 有时会使对手畏缩。' },
    ],
  },
  koffing: {
    flavorText: '在炎热的地方，它体内的 气体会由于膨胀而产生 爆炸的危险，需要注意。',
    stats: { hp: 40, attack: 65, defense: 95, specialAttack: 60, specialDefense: 45, speed: 35 },
    moves: [
      { name: '污泥攻击', type: PokemonElementType.poison, power: 65, description: '用污泥投掷对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '毒瓦斯', type: PokemonElementType.poison, power: null, description: '将毒瓦斯吹到对手的脸上， 从而让对手陷入中毒状态。' },
      { name: '浊雾', type: PokemonElementType.poison, power: 30, description: '将肮脏的浓雾 吹向对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '烟幕', type: PokemonElementType.normal, power: null, description: '向对手喷出烟或墨汁等， 从而降低对手的命中率。' },
    ],
  },
  weezing: {
    flavorText: '它要靠吸收垃圾 里的毒气、细菌和 灰尘来维持生命。',
    stats: { hp: 65, attack: 90, defense: 120, specialAttack: 85, specialDefense: 70, speed: 60 },
    moves: [
      { name: '污泥攻击', type: PokemonElementType.poison, power: 65, description: '用污泥投掷对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '毒瓦斯', type: PokemonElementType.poison, power: null, description: '将毒瓦斯吹到对手的脸上， 从而让对手陷入中毒状态。' },
      { name: '浊雾', type: PokemonElementType.poison, power: 30, description: '将肮脏的浓雾 吹向对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '烟幕', type: PokemonElementType.normal, power: null, description: '向对手喷出烟或墨汁等， 从而降低对手的命中率。' },
    ],
  },
  rhyhorn: {
    flavorText: '单细胞的脑子只能思考 一件事情。一旦它开始猛撞， 直到睡着前都不会停止。',
    stats: { hp: 80, attack: 85, defense: 95, specialAttack: 30, specialDefense: 30, speed: 25 },
    moves: [
      { name: '角撞', type: PokemonElementType.normal, power: 65, description: '用尖锐的角攻击对手。' },
      { name: '角钻', type: PokemonElementType.normal, power: null, description: '用旋转的角 刺入对手进行攻击。 只要命中就会一击濒死。' },
      { name: '超级角击', type: PokemonElementType.bug, power: 120, description: '用坚硬且华丽的角狠狠地 刺入对手进行攻击。' },
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
    ],
  },
  rhydon: {
    flavorText: '可以只用后腿行走，智力也 发达了许多。像盔甲一样的 皮肤可以抵挡住岩浆。',
    stats: { hp: 105, attack: 130, defense: 120, specialAttack: 45, specialDefense: 45, speed: 40 },
    moves: [
      { name: '角撞', type: PokemonElementType.normal, power: 65, description: '用尖锐的角攻击对手。' },
      { name: '角钻', type: PokemonElementType.normal, power: null, description: '用旋转的角 刺入对手进行攻击。 只要命中就会一击濒死。' },
      { name: '超级角击', type: PokemonElementType.bug, power: 120, description: '用坚硬且华丽的角狠狠地 刺入对手进行攻击。' },
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
    ],
  },
  chansey: {
    flavorText: '吉利蛋生下的蛋饱含丰富的营养。 是许多宝可梦非常爱吃的东西。',
    stats: { hp: 250, attack: 5, defense: 5, specialAttack: 35, specialDefense: 105, speed: 50 },
    moves: [
      { name: '炸蛋', type: PokemonElementType.normal, power: 100, description: '向对手用力投掷 大大的蛋进行攻击。' },
      { name: '生蛋', type: PokemonElementType.normal, power: null, description: '回复自己最大ＨＰ的一半。' },
      { name: '变小', type: PokemonElementType.normal, power: null, description: '蜷缩身体显得很小， 从而大幅提高 自己的闪避率。' },
      { name: '唱歌', type: PokemonElementType.normal, power: null, description: '让对手听舒适、 美妙的歌声， 从而陷入睡眠状态。' },
    ],
  },
  tangela: {
    flavorText: '全身被蓝色的蔓藤覆盖， 真面目不为人知。据说， 它的蔓藤会持续不断地生长。',
    stats: { hp: 65, attack: 55, defense: 115, specialAttack: 100, specialDefense: 40, speed: 60 },
    moves: [
      { name: '缠绕', type: PokemonElementType.normal, power: 10, description: '用触手或青藤等缠绕进行攻击。 有时会降低对手的速度。' },
      { name: '藤鞭', type: PokemonElementType.grass, power: 45, description: '用如同鞭子般弯曲而细长的藤蔓 摔打对手进行攻击。' },
      { name: '催眠粉', type: PokemonElementType.grass, power: null, description: '撒出催眠粉， 从而让对手陷入睡眠状态。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
    ],
  },
  kangaskhan: {
    flavorText: '袋兽的母爱很深。 如果是为了守护自己的孩子， 据说连死都毫不畏惧。',
    stats: { hp: 105, attack: 95, defense: 80, specialAttack: 40, specialDefense: 80, speed: 90 },
    moves: [
      { name: '连续拳', type: PokemonElementType.normal, power: 18, description: '用拳头怒涛般的 殴打对手进行攻击。 连续攻击２～５次。' },
      { name: '迷昏拳', type: PokemonElementType.normal, power: 70, description: '有节奏地出拳攻击对手。 有时会使对手混乱。' },
      { name: '击掌奇袭', type: PokemonElementType.normal, power: 40, description: '进行先制攻击，使对手畏缩。 要在出场后立刻使出才能成功。' },
      { name: '摇尾巴', type: PokemonElementType.normal, power: null, description: '可爱地左右摇晃尾巴， 诱使对手疏忽大意。 会降低对手的防御。' },
    ],
  },
  horsea: {
    flavorText: '在感到危险时会从 嘴里用力地喷出水 或者特殊的墨汁。',
    stats: { hp: 30, attack: 40, defense: 70, specialAttack: 70, specialDefense: 25, speed: 60 },
    moves: [
      { name: '烟幕', type: PokemonElementType.normal, power: null, description: '向对手喷出烟或墨汁等， 从而降低对手的命中率。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
      { name: '龙之舞', type: PokemonElementType.dragon, power: null, description: '激烈地跳起神秘 且强有力的舞蹈。 从而提高自己的攻击和速度。' },
      { name: '龙卷风', type: PokemonElementType.dragon, power: 40, description: '兴起龙卷风， 将对手卷入进行攻击。 有时会使对手畏缩。' },
    ],
  },
  seadra: {
    flavorText: '摸它的背鳍会导致麻痹。 为了避免在睡觉时被水冲走， 它会用尾巴缠住珊瑚。',
    stats: { hp: 55, attack: 65, defense: 95, specialAttack: 95, specialDefense: 45, speed: 85 },
    moves: [
      { name: '烟幕', type: PokemonElementType.normal, power: null, description: '向对手喷出烟或墨汁等， 从而降低对手的命中率。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
      { name: '龙之舞', type: PokemonElementType.dragon, power: null, description: '激烈地跳起神秘 且强有力的舞蹈。 从而提高自己的攻击和速度。' },
      { name: '龙卷风', type: PokemonElementType.dragon, power: 40, description: '兴起龙卷风， 将对手卷入进行攻击。 有时会使对手畏缩。' },
    ],
  },
  goldeen: {
    flavorText: '天气变得暖和之后， 就会成群结队溯流而上。 那画面正如告知春天的风景诗。',
    stats: { hp: 45, attack: 67, defense: 60, specialAttack: 35, specialDefense: 50, speed: 63 },
    moves: [
      { name: '角撞', type: PokemonElementType.normal, power: 65, description: '用尖锐的角攻击对手。' },
      { name: '角钻', type: PokemonElementType.normal, power: null, description: '用旋转的角 刺入对手进行攻击。 只要命中就会一击濒死。' },
      { name: '超级角击', type: PokemonElementType.bug, power: 120, description: '用坚硬且华丽的角狠狠地 刺入对手进行攻击。' },
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
    ],
  },
  seaking: {
    flavorText: '凉飕飕的时候，全身就会 晕染成鲜红色。那样子正如 令人感觉到秋意的风景诗。',
    stats: { hp: 80, attack: 92, defense: 65, specialAttack: 65, specialDefense: 80, speed: 68 },
    moves: [
      { name: '角撞', type: PokemonElementType.normal, power: 65, description: '用尖锐的角攻击对手。' },
      { name: '角钻', type: PokemonElementType.normal, power: null, description: '用旋转的角 刺入对手进行攻击。 只要命中就会一击濒死。' },
      { name: '超级角击', type: PokemonElementType.bug, power: 120, description: '用坚硬且华丽的角狠狠地 刺入对手进行攻击。' },
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
    ],
  },
  staryu: {
    flavorText: '大多在海边栖息。 夜幕降临时，身体的正中 会闪耀出怪异的红色。',
    stats: { hp: 30, attack: 45, defense: 55, specialAttack: 70, specialDefense: 55, speed: 85 },
    moves: [
      { name: '保护色', type: PokemonElementType.normal, power: null, description: '根据所在场所不同， 如水边、草丛和洞窟等， 可以改变自己的属性。' },
      { name: '变小', type: PokemonElementType.normal, power: null, description: '蜷缩身体显得很小， 从而大幅提高 自己的闪避率。' },
      { name: '宇宙力量', type: PokemonElementType.psychic, power: null, description: '汲取宇宙中神秘的力量， 从而提高自己的防御和特防。' },
      { name: '高速旋转', type: PokemonElementType.normal, power: 50, description: '通过旋转来攻击对手。 还可以摆脱绑紧、紧束、 寄生种子和撒菱等招式。' },
    ],
  },
  starmie: {
    flavorText: '据说会从闪着光的内核 收发神秘的电波。 靠近的话可能会头痛。',
    stats: { hp: 60, attack: 75, defense: 85, specialAttack: 100, specialDefense: 85, speed: 115 },
    moves: [
      { name: '高速旋转', type: PokemonElementType.normal, power: 50, description: '通过旋转来攻击对手。 还可以摆脱绑紧、紧束、 寄生种子和撒菱等招式。' },
      { name: '自我再生', type: PokemonElementType.normal, power: null, description: '让细胞再生， 从而回复自己 最大ＨＰ的一半。' },
      { name: '水枪', type: PokemonElementType.water, power: 40, description: '向对手猛烈地喷射 水流进行攻击。' },
      { name: '奇异之光', type: PokemonElementType.ghost, power: null, description: '显示奇怪的光， 扰乱对手。 使对手混乱。' },
    ],
  },
  scyther: {
    flavorText: '以忍者般敏捷的动作令猎物感到迷惑。 然后趁对方麻痹大意的一瞬间 用镰刀将其切碎。',
    stats: { hp: 70, attack: 110, defense: 80, specialAttack: 55, specialDefense: 80, speed: 105 },
    moves: [
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '追打', type: PokemonElementType.dark, power: 40, description: '当对手替换宝可梦上场时 使出此招式的话， 能够以２倍的威力进行攻击。' },
      { name: '点到为止', type: PokemonElementType.normal, power: 40, description: '对手的ＨＰ 至少会留下１ＨＰ， 如此般手下留情地攻击。' },
      { name: '劈开', type: PokemonElementType.normal, power: 70, description: '用爪子或镰刀等 劈开对手进行攻击。 容易击中要害。' },
    ],
  },
  mrmime: {
    flavorText: '有着非凡的默剧表演实力。 在你看入迷的时候，不知不觉间 就会出现一面真正的墙壁。',
    stats: { hp: 40, attack: 45, defense: 65, specialAttack: 100, specialDefense: 120, speed: 90 },
    moves: [
      { name: '瑜伽姿势', type: PokemonElementType.psychic, power: null, description: '唤醒身体深处 沉睡的力量， 从而提高自己的攻击。' },
      { name: '屏障', type: PokemonElementType.psychic, power: null, description: '制造坚固的壁障， 从而大幅提高自己的防御。' },
      { name: '连环巴掌', type: PokemonElementType.normal, power: 15, description: '用连环巴掌 拍打对手进行攻击。 连续攻击２～５次。' },
      { name: '念力', type: PokemonElementType.psychic, power: 50, description: '向对手发送 微弱的念力进行攻击。 有时会使对手混乱。' },
    ],
  },
  electabuzz: {
    flavorText: '突发的停电，有一半 是因为电击兽聚集在发电厂 胡乱吞食电力造成的。',
    stats: { hp: 65, attack: 83, defense: 57, specialAttack: 95, specialDefense: 85, speed: 105 },
    moves: [
      { name: '电光一闪', type: PokemonElementType.normal, power: 40, description: '以迅雷不及掩耳之势扑向对手。 必定能够先制攻击。' },
      { name: '刺耳声', type: PokemonElementType.normal, power: null, description: '发出不由自主想要 捂起耳朵的刺耳声， 从而大幅降低对手的防御。' },
      { name: '雷电拳', type: PokemonElementType.electric, power: 75, description: '用充满电流的拳头攻击对手。 有时会让对手陷入麻痹状态。' },
      { name: '瞪眼', type: PokemonElementType.normal, power: null, description: '用犀利的眼神使其害怕， 从而降低对手的防御。' },
    ],
  },
  jynx: {
    flavorText: '会按独特的节奏扭动腰部。 栖息在阿罗拉的迷唇姐， 那动作更是妙不可言。',
    stats: { hp: 65, attack: 50, defense: 35, specialAttack: 115, specialDefense: 95, speed: 95 },
    moves: [
      { name: '恶魔之吻', type: PokemonElementType.normal, power: null, description: '用恐怖的脸强吻对手。 让对手陷入睡眠状态。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
      { name: '连环巴掌', type: PokemonElementType.normal, power: 15, description: '用连环巴掌 拍打对手进行攻击。 连续攻击２～５次。' },
      { name: '细雪', type: PokemonElementType.ice, power: 40, description: '将冰冷的细雪 吹向对手进行攻击。 有时会让对手陷入冰冻状态。' },
    ],
  },
  pinsir: {
    flavorText: '用长长的角把对手夹住， 就这么把对方夹成两半。 非常强大，但很害怕寒冷。',
    stats: { hp: 65, attack: 125, defense: 100, specialAttack: 55, specialDefense: 70, speed: 85 },
    moves: [
      { name: '断头钳', type: PokemonElementType.normal, power: null, description: '用大钳子或剪刀等 夹断对手进行攻击。 只要命中就会一击濒死。' },
      { name: '夹住', type: PokemonElementType.normal, power: 55, description: '将对手从两侧夹住， 给予伤害。' },
      { name: '地狱翻滚', type: PokemonElementType.fighting, power: 80, description: '将对手连同自己一起 摔向地面进行攻击。 自己也会受到少许伤害。' },
      { name: '绑紧', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 绑紧对手进行攻击。' },
    ],
  },
  magmar: {
    flavorText: '感到疲劳时就跳入火山口， 浸泡在熔岩中让身体解乏。 全身以１２００度燃烧着。',
    stats: { hp: 65, attack: 95, defense: 57, specialAttack: 100, specialDefense: 85, speed: 93 },
    moves: [
      { name: '浊雾', type: PokemonElementType.poison, power: 30, description: '将肮脏的浓雾 吹向对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '烟幕', type: PokemonElementType.normal, power: null, description: '向对手喷出烟或墨汁等， 从而降低对手的命中率。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '火焰拳', type: PokemonElementType.fire, power: 75, description: '用充满火焰的拳头攻击对手。 有时会让对手陷入灼伤状态。' },
    ],
  },
  tauros: {
    flavorText: '在世界各地都有骑着肯泰罗 生活的历史，但这一切的开端 据说是在阿罗拉。',
    stats: { hp: 75, attack: 100, defense: 95, specialAttack: 40, specialDefense: 70, speed: 110 },
    moves: [
      { name: '角撞', type: PokemonElementType.normal, power: 65, description: '用尖锐的角攻击对手。' },
      { name: '追打', type: PokemonElementType.dark, power: 40, description: '当对手替换宝可梦上场时 使出此招式的话， 能够以２倍的威力进行攻击。' },
      { name: '大闹一番', type: PokemonElementType.normal, power: 120, description: '在２～３回合内， 乱打一气地攻击对手。 大闹一番后自己会陷入混乱。' },
      { name: '摇尾巴', type: PokemonElementType.normal, power: null, description: '可爱地左右摇晃尾巴， 诱使对手疏忽大意。 会降低对手的防御。' },
    ],
  },
  magikarp: {
    flavorText: '力量很弱，派不上用场， 但就只有繁殖力惊人。 多得简直要看腻了。',
    stats: { hp: 20, attack: 10, defense: 55, specialAttack: 15, specialDefense: 20, speed: 80 },
    moves: [
      { name: '跃起', type: PokemonElementType.normal, power: null, description: '也不攻击只是一蹦一蹦地跳， 什么都不会发生……' },
      { name: '抓狂', type: PokemonElementType.normal, power: null, description: '抓狂般乱打进行攻击。 自己的ＨＰ越少， 招式的威力越大。' },
      { name: '撞击', type: PokemonElementType.normal, power: 40, description: '用整个身体 撞向对手进行攻击。' },
    ],
  },
  gyarados: {
    flavorText: '据说，让暴鲤龙怒火中烧的 某个街镇在一晚上就被燃烧殆尽， 然后便消失无踪了。',
    stats: { hp: 95, attack: 125, defense: 79, specialAttack: 60, specialDefense: 100, speed: 81 },
    moves: [
      { name: '龙之怒', type: PokemonElementType.dragon, power: null, description: '将愤怒的冲击波 撞向对手进行攻击。 必定会给予４０的伤害。' },
      { name: '龙之舞', type: PokemonElementType.dragon, power: null, description: '激烈地跳起神秘 且强有力的舞蹈。 从而提高自己的攻击和速度。' },
      { name: '龙卷风', type: PokemonElementType.dragon, power: 40, description: '兴起龙卷风， 将对手卷入进行攻击。 有时会使对手畏缩。' },
      { name: '大闹一番', type: PokemonElementType.normal, power: 120, description: '在２～３回合内， 乱打一气地攻击对手。 大闹一番后自己会陷入混乱。' },
    ],
  },
  lapras: {
    flavorText: '拥有很高的智商，理解人类的语言。 心情好的时候会用美妙的声音唱歌。',
    stats: { hp: 130, attack: 85, defense: 80, specialAttack: 85, specialDefense: 95, speed: 60 },
    moves: [
      { name: '绝对零度', type: PokemonElementType.ice, power: null, description: '给对手一击濒死。 如果是冰属性以外的宝可梦使用， 就会难以打中。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
      { name: '唱歌', type: PokemonElementType.normal, power: null, description: '让对手听舒适、 美妙的歌声， 从而陷入睡眠状态。' },
      { name: '白雾', type: PokemonElementType.ice, power: null, description: '用白雾覆盖身体。 在５回合内不会让对手 降低自己的能力。' },
    ],
  },
  eevee: {
    flavorText: '拥有不平衡性外加不稳定的 遗传基因，因而蕴含着各种 各样的进化可能性。',
    stats: { hp: 55, attack: 55, defense: 50, specialAttack: 45, specialDefense: 65, speed: 55 },
    moves: [
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
      { name: '摇尾巴', type: PokemonElementType.normal, power: null, description: '可爱地左右摇晃尾巴， 诱使对手疏忽大意。 会降低对手的防御。' },
      { name: '电光一闪', type: PokemonElementType.normal, power: 40, description: '以迅雷不及掩耳之势扑向对手。 必定能够先制攻击。' },
      { name: '接棒', type: PokemonElementType.normal, power: null, description: '和后备宝可梦进行替换。 换上的宝可梦能直接继承 其能力的变化。' },
    ],
  },
  ditto: {
    flavorText: '通过重组细胞让自己样子变得 和眼前的对手一模一样。 相似度依个体而有所不同。',
    stats: { hp: 48, attack: 48, defense: 48, specialAttack: 48, specialDefense: 48, speed: 48 },
    moves: [
      { name: '变身', type: PokemonElementType.normal, power: null, description: '变身成对手宝可梦的样子， 能够使用和对手 完全相同的招式。' },
    ],
  },
  vaporeon: {
    flavorText: '细胞构造与水分子非常相似。 在水边栖息，所以有时候 会被错认为是人鱼。',
    stats: { hp: 130, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 65 },
    moves: [
      { name: '极光束', type: PokemonElementType.ice, power: 65, description: '向对手发射 虹色光束进行攻击。 有时会降低对手的攻击。' },
      { name: '溶化', type: PokemonElementType.poison, power: null, description: '通过细胞的变化进行液化， 从而大幅提高自己的防御。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
      { name: '黑雾', type: PokemonElementType.ice, power: null, description: '升起黑雾，将正在场上战斗的 全体宝可梦的能力变回原点。' },
    ],
  },
  jolteon: {
    flavorText: '喷出大约１００００伏特的电力。 因为相当神经质，所以要与它 变得亲密是非常困难的。',
    stats: { hp: 65, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 130 },
    moves: [
      { name: '飞弹针', type: PokemonElementType.bug, power: 25, description: '向对手发射 锐针进行攻击。 连续攻击２～５次。' },
      { name: '二连踢', type: PokemonElementType.fighting, power: 30, description: '用２只脚踢飞对手进行攻击。 连续２次给予伤害。' },
      { name: '电击', type: PokemonElementType.electric, power: 40, description: '发出电流刺激对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
    ],
  },
  flareon: {
    flavorText: '如果寻获树果或是捉到猎物， 就会喷出火焰将其烤至完全熟透， 之后大口大口吃掉。',
    stats: { hp: 65, attack: 130, defense: 60, specialAttack: 95, specialDefense: 110, speed: 65 },
    moves: [
      { name: '浊雾', type: PokemonElementType.poison, power: 30, description: '将肮脏的浓雾 吹向对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '火焰旋涡', type: PokemonElementType.fire, power: 35, description: '将对手困在 激烈的火焰旋涡中， 在４～５回合内进行攻击。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
    ],
  },
  porygon: {
    flavorText: '大约２０年前， 集当时的科学力量于一身， 创造出来的人工宝可梦。',
    stats: { hp: 65, attack: 60, defense: 70, specialAttack: 85, specialDefense: 75, speed: 40 },
    moves: [
      { name: '纹理', type: PokemonElementType.normal, power: null, description: '将自己的属性转换成 和已学会的招式中 第一个招式相同的属性。' },
      { name: '纹理２', type: PokemonElementType.normal, power: null, description: '为了可以抵抗对手 最后使用的招式， 从而使自己的属性发生变化。' },
      { name: '棱角化', type: PokemonElementType.normal, power: null, description: '增加身体的角， 变得棱棱角角， 从而提高自己的攻击。' },
      { name: '锁定', type: PokemonElementType.normal, power: null, description: '紧紧瞄准对手， 下次攻击必定会打中。' },
    ],
  },
  omanyte: {
    flavorText: '生活在古代海洋中的宝可梦。 好像曾是始祖大鸟的食物， 发现过带有齿痕的化石。',
    stats: { hp: 35, attack: 40, defense: 100, specialAttack: 90, specialDefense: 55, speed: 35 },
    moves: [
      { name: '缠绕', type: PokemonElementType.normal, power: 10, description: '用触手或青藤等缠绕进行攻击。 有时会降低对手的速度。' },
      { name: '缩入壳中', type: PokemonElementType.water, power: null, description: '缩入壳里保护身体， 从而提高自己的防御。' },
      { name: '挠痒', type: PokemonElementType.normal, power: null, description: '给对手挠痒，使其发笑， 从而降低对手的攻击和防御。' },
      { name: '水枪', type: PokemonElementType.water, power: 40, description: '向对手猛烈地喷射 水流进行攻击。' },
    ],
  },
  omastar: {
    flavorText: '被认为是由于身上沉重的壳 而灭绝的古代宝可梦。 好像是章鱼桶的远祖。',
    stats: { hp: 70, attack: 60, defense: 125, specialAttack: 115, specialDefense: 70, speed: 55 },
    moves: [
      { name: '尖刺加农炮', type: PokemonElementType.normal, power: 20, description: '向对手发射 锐针进行攻击。 连续攻击２～５次。' },
      { name: '缠绕', type: PokemonElementType.normal, power: 10, description: '用触手或青藤等缠绕进行攻击。 有时会降低对手的速度。' },
      { name: '缩入壳中', type: PokemonElementType.water, power: null, description: '缩入壳里保护身体， 从而提高自己的防御。' },
      { name: '挠痒', type: PokemonElementType.normal, power: null, description: '给对手挠痒，使其发笑， 从而降低对手的攻击和防御。' },
    ],
  },
  kabuto: {
    flavorText: '３亿年前繁衍兴旺的宝可梦。 据说在某些地区，至今仍能 偶尔看见活着的化石盔。',
    stats: { hp: 30, attack: 80, defense: 90, specialAttack: 55, specialDefense: 45, speed: 55 },
    moves: [
      { name: '金属音', type: PokemonElementType.steel, power: null, description: '让对手听摩擦金属般 讨厌的声音。 大幅降低对手的特防。' },
      { name: '吸取', type: PokemonElementType.grass, power: 20, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '超级吸取', type: PokemonElementType.grass, power: 40, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
    ],
  },
  kabutops: {
    flavorText: '为了在陆地上也能活动， 身体开始了演化， 但没等演化完，它就灭绝了。',
    stats: { hp: 60, attack: 115, defense: 105, specialAttack: 65, specialDefense: 70, speed: 80 },
    moves: [
      { name: '金属音', type: PokemonElementType.steel, power: null, description: '让对手听摩擦金属般 讨厌的声音。 大幅降低对手的特防。' },
      { name: '吸取', type: PokemonElementType.grass, power: 20, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '超级吸取', type: PokemonElementType.grass, power: 40, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
    ],
  },
  aerodactyl: {
    flavorText: '恐龙时代的宝可梦。 用锯子一样的牙齿 将猎物撕碎后吞食。',
    stats: { hp: 80, attack: 105, defense: 65, specialAttack: 60, specialDefense: 75, speed: 130 },
    moves: [
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '超音波', type: PokemonElementType.normal, power: null, description: '从身体发出 特殊的音波， 从而使对手混乱。' },
      { name: '原始之力', type: PokemonElementType.rock, power: 60, description: '用原始之力进行攻击。 有时会提高 自己所有的能力。' },
      { name: '咬住', type: PokemonElementType.dark, power: 60, description: '用尖锐的牙 咬住对手进行攻击。 有时会使对手畏缩。' },
    ],
  },
  articuno: {
    flavorText: '传说的鸟宝可梦。它能将 冬日空中的空气中含有的 水分冻结，降下雪花。',
    stats: { hp: 90, attack: 85, defense: 100, specialAttack: 95, specialDefense: 125, speed: 85 },
    moves: [
      { name: '心之眼', type: PokemonElementType.normal, power: null, description: '用心感受对手的行动， 下次攻击必定 会击中对手。' },
      { name: '绝对零度', type: PokemonElementType.ice, power: null, description: '给对手一击濒死。 如果是冰属性以外的宝可梦使用， 就会难以打中。' },
      { name: '细雪', type: PokemonElementType.ice, power: 40, description: '将冰冷的细雪 吹向对手进行攻击。 有时会让对手陷入冰冻状态。' },
      { name: '起风', type: PokemonElementType.flying, power: 40, description: '用翅膀将刮起的狂风 袭向对手进行攻击。' },
    ],
  },
  zapdos: {
    flavorText: '当天空黑暗，落雷 不断时，这只传说的 宝可梦就会出现。',
    stats: { hp: 90, attack: 90, defense: 85, specialAttack: 125, specialDefense: 90, speed: 100 },
    moves: [
      { name: '啄钻', type: PokemonElementType.flying, power: 80, description: '一边旋转，一边将尖喙 刺入对手进行攻击。' },
      { name: '啄', type: PokemonElementType.flying, power: 35, description: '用尖锐的喙或角 刺向对手进行攻击。' },
      { name: '电击', type: PokemonElementType.electric, power: 40, description: '发出电流刺激对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
    ],
  },
  snorlax: {
    flavorText: '据说拥有最强的胃袋。 就连臭臭泥的毒对卡比兽的 舌头来说也只是调味料而已。',
    stats: { hp: 160, attack: 110, defense: 65, specialAttack: 65, specialDefense: 110, speed: 30 },
    moves: [
      { name: '腹鼓', type: PokemonElementType.normal, power: null, description: '将自己的ＨＰ减少到 最大ＨＰ的一半， 从而最大限度提高自己的攻击。' },
      { name: '哈欠', type: PokemonElementType.normal, power: null, description: '打个大哈欠引起睡意。 在下一回合让对手陷入睡眠状态。' },
      { name: '挡路', type: PokemonElementType.normal, power: null, description: '张开双手进行阻挡， 封住对手的退路， 使其不能逃走。' },
      { name: '瞬间失忆', type: PokemonElementType.psychic, power: null, description: '将头脑清空， 瞬间忘记某事， 从而大幅提高自己的特防。' },
    ],
  },
  moltres: {
    flavorText: '传说的鸟宝可梦。当它 挥舞起剧烈燃烧着的双翅， 哪怕是夜空也会被点亮。',
    stats: { hp: 90, attack: 100, defense: 90, specialAttack: 125, specialDefense: 85, speed: 90 },
    moves: [
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '神鸟猛击', type: PokemonElementType.flying, power: 140, description: '第２回合攻击对手。 偶尔使对手畏缩。 也容易击中要害。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '火焰旋涡', type: PokemonElementType.fire, power: 35, description: '将对手困在 激烈的火焰旋涡中， 在４～５回合内进行攻击。' },
    ],
  },
  dratini: {
    flavorText: '通过反复蜕皮一点点长大。 将蜕下的皮鞣制后做成的 靴子是超高级商品。',
    stats: { hp: 41, attack: 64, defense: 45, specialAttack: 50, specialDefense: 50, speed: 50 },
    moves: [
      { name: '龙之怒', type: PokemonElementType.dragon, power: null, description: '将愤怒的冲击波 撞向对手进行攻击。 必定会给予４０的伤害。' },
      { name: '紧束', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 紧束对手进行攻击。' },
      { name: '龙卷风', type: PokemonElementType.dragon, power: 40, description: '兴起龙卷风， 将对手卷入进行攻击。 有时会使对手畏缩。' },
      { name: '摔打', type: PokemonElementType.normal, power: 80, description: '使用长长的尾巴或藤蔓等 摔打对手进行攻击。' },
    ],
  },
  dragonair: {
    flavorText: '据说，在水晶般的珠子里 蕴含着操纵天气的力量。',
    stats: { hp: 61, attack: 84, defense: 65, specialAttack: 70, specialDefense: 70, speed: 70 },
    moves: [
      { name: '龙之怒', type: PokemonElementType.dragon, power: null, description: '将愤怒的冲击波 撞向对手进行攻击。 必定会给予４０的伤害。' },
      { name: '紧束', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 紧束对手进行攻击。' },
      { name: '龙卷风', type: PokemonElementType.dragon, power: 40, description: '兴起龙卷风， 将对手卷入进行攻击。 有时会使对手畏缩。' },
      { name: '摔打', type: PokemonElementType.normal, power: 80, description: '使用长长的尾巴或藤蔓等 摔打对手进行攻击。' },
    ],
  },
  dragonite: {
    flavorText: '遇难得救的男人 被带去的那个孤岛， 是曾属于快龙的乐园。',
    stats: { hp: 91, attack: 134, defense: 95, specialAttack: 100, specialDefense: 100, speed: 80 },
    moves: [
      { name: '龙之怒', type: PokemonElementType.dragon, power: null, description: '将愤怒的冲击波 撞向对手进行攻击。 必定会给予４０的伤害。' },
      { name: '紧束', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 紧束对手进行攻击。' },
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '龙卷风', type: PokemonElementType.dragon, power: 40, description: '兴起龙卷风， 将对手卷入进行攻击。 有时会使对手畏缩。' },
    ],
  },
  mewtwo: {
    flavorText: '超梦的基因几乎和梦幻 完全一样，但是大小和 性格却迥异得让人吃惊。',
    stats: { hp: 106, attack: 110, defense: 90, specialAttack: 154, specialDefense: 90, speed: 130 },
    moves: [
      { name: '屏障', type: PokemonElementType.psychic, power: null, description: '制造坚固的壁障， 从而大幅提高自己的防御。' },
      { name: '白雾', type: PokemonElementType.ice, power: null, description: '用白雾覆盖身体。 在５回合内不会让对手 降低自己的能力。' },
      { name: '自我再生', type: PokemonElementType.normal, power: null, description: '让细胞再生， 从而回复自己 最大ＨＰ的一半。' },
      { name: '定身法', type: PokemonElementType.normal, power: null, description: '阻碍对手行动， 之前使出的招式 将在４回合内无法使用。' },
    ],
  },
  mew: {
    flavorText: '用显微镜可以看到 它身上极短极细 且密集的体毛。',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: '变身', type: PokemonElementType.normal, power: null, description: '变身成对手宝可梦的样子， 能够使用和对手 完全相同的招式。' },
      { name: '拍击', type: PokemonElementType.normal, power: 40, description: '使用长长的尾巴或手等 拍打对手进行攻击。' },
      { name: '挥指', type: PokemonElementType.normal, power: null, description: '挥动手指刺激自己的大脑， 从所有的招式中 任意使出１个。' },
      { name: '原始之力', type: PokemonElementType.rock, power: 60, description: '用原始之力进行攻击。 有时会提高 自己所有的能力。' },
    ],
  },
  chikorita: {
    flavorText: 'It uses the leaf on its head to determine the temperature and humidity. It loves to sunbathe.',
    stats: { hp: 45, attack: 49, defense: 65, specialAttack: 49, specialDefense: 65, speed: 45 },
    moves: [
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
      { name: '芳香治疗', type: PokemonElementType.grass, power: null, description: '让同伴闻沁人心脾的香气， 从而治愈我方全员的异常状态。' },
      { name: '飞叶快刀', type: PokemonElementType.grass, power: 55, description: '飞出叶片， 切斩对手进行攻击。 容易击中要害。' },
      { name: '甜甜香气', type: PokemonElementType.normal, power: null, description: '用香气大幅降低对手的闪避率。' },
    ],
  },
  bayleef: {
    flavorText: 'The scent of spices comes from around its neck. Somehow, sniffing it makes you want to fight.',
    stats: { hp: 60, attack: 62, defense: 80, specialAttack: 63, specialDefense: 80, speed: 60 },
    moves: [
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
      { name: '芳香治疗', type: PokemonElementType.grass, power: null, description: '让同伴闻沁人心脾的香气， 从而治愈我方全员的异常状态。' },
      { name: '飞叶快刀', type: PokemonElementType.grass, power: 55, description: '飞出叶片， 切斩对手进行攻击。 容易击中要害。' },
      { name: '甜甜香气', type: PokemonElementType.normal, power: null, description: '用香气大幅降低对手的闪避率。' },
    ],
  },
  meganium: {
    flavorText: 'The aroma that rises from its petals contains a substance that calms aggressive feelings.',
    stats: { hp: 80, attack: 82, defense: 100, specialAttack: 83, specialDefense: 100, speed: 80 },
    moves: [
      { name: '花瓣舞', type: PokemonElementType.grass, power: 120, description: '在２～３回合内， 散落花瓣攻击对手。 之后自己会陷入混乱。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
      { name: '芳香治疗', type: PokemonElementType.grass, power: null, description: '让同伴闻沁人心脾的香气， 从而治愈我方全员的异常状态。' },
      { name: '飞叶快刀', type: PokemonElementType.grass, power: 55, description: '飞出叶片， 切斩对手进行攻击。 容易击中要害。' },
    ],
  },
  cyndaquil: {
    flavorText: 'It is timid, and always curls itself up in a ball. If attacked, it flares up its back for protection.',
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    moves: [
      { name: '喷火', type: PokemonElementType.fire, power: 150, description: '爆发怒火攻击对手。 自己的ＨＰ越少， 招式的威力越小。' },
      { name: '喷烟', type: PokemonElementType.fire, power: 80, description: '用熊熊烈火 攻击自己周围所有的宝可梦。 有时会陷入灼伤状态。' },
      { name: '火焰轮', type: PokemonElementType.fire, power: 60, description: '让火焰覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '烟幕', type: PokemonElementType.normal, power: null, description: '向对手喷出烟或墨汁等， 从而降低对手的命中率。' },
    ],
  },
  quilava: {
    flavorText: 'Be careful if it turns its back during battle. It means that it will attack with the fire on its back.',
    stats: { hp: 58, attack: 64, defense: 58, specialAttack: 80, specialDefense: 65, speed: 80 },
    moves: [
      { name: '喷火', type: PokemonElementType.fire, power: 150, description: '爆发怒火攻击对手。 自己的ＨＰ越少， 招式的威力越小。' },
      { name: '喷烟', type: PokemonElementType.fire, power: 80, description: '用熊熊烈火 攻击自己周围所有的宝可梦。 有时会陷入灼伤状态。' },
      { name: '火焰轮', type: PokemonElementType.fire, power: 60, description: '让火焰覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '烟幕', type: PokemonElementType.normal, power: null, description: '向对手喷出烟或墨汁等， 从而降低对手的命中率。' },
    ],
  },
  typhlosion: {
    flavorText: 'If its rage peaks, it becomes so hot that anything that touches it will instantly go up in flames.',
    stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    moves: [
      { name: '喷火', type: PokemonElementType.fire, power: 150, description: '爆发怒火攻击对手。 自己的ＨＰ越少， 招式的威力越小。' },
      { name: '喷烟', type: PokemonElementType.fire, power: 80, description: '用熊熊烈火 攻击自己周围所有的宝可梦。 有时会陷入灼伤状态。' },
      { name: '火焰轮', type: PokemonElementType.fire, power: 60, description: '让火焰覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '烟幕', type: PokemonElementType.normal, power: null, description: '向对手喷出烟或墨汁等， 从而降低对手的命中率。' },
    ],
  },
  totodile: {
    flavorText: 'Its well-developed jaws are powerful and capable of crushing anything. Even its trainer must be careful.',
    stats: { hp: 50, attack: 65, defense: 64, specialAttack: 44, specialDefense: 48, speed: 43 },
    moves: [
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
      { name: '冰冻牙', type: PokemonElementType.ice, power: 65, description: '用藏有冷气的牙齿咬住对手。 有时会使对手畏缩 或陷入冰冻状态。' },
      { name: '大闹一番', type: PokemonElementType.normal, power: 120, description: '在２～３回合内， 乱打一气地攻击对手。 大闹一番后自己会陷入混乱。' },
      { name: '水流尾', type: PokemonElementType.water, power: 90, description: '如惊涛骇浪般挥动 大尾巴攻击对手。' },
    ],
  },
  feraligatr: {
    flavorText: 'When it bites with its massive and powerful jaws, it shakes its head and savagely tears its victim up.',
    stats: { hp: 85, attack: 105, defense: 100, specialAttack: 79, specialDefense: 83, speed: 78 },
    moves: [
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
      { name: '冰冻牙', type: PokemonElementType.ice, power: 65, description: '用藏有冷气的牙齿咬住对手。 有时会使对手畏缩 或陷入冰冻状态。' },
      { name: '大闹一番', type: PokemonElementType.normal, power: 120, description: '在２～３回合内， 乱打一气地攻击对手。 大闹一番后自己会陷入混乱。' },
      { name: '水流尾', type: PokemonElementType.water, power: 90, description: '如惊涛骇浪般挥动 大尾巴攻击对手。' },
    ],
  },
  croconaw: {
    flavorText: 'If it loses a fang, a new one grows back in its place. There are always 48 fangs lining its mouth.',
    stats: { hp: 65, attack: 80, defense: 80, specialAttack: 59, specialDefense: 63, speed: 58 },
    moves: [
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
      { name: '冰冻牙', type: PokemonElementType.ice, power: 65, description: '用藏有冷气的牙齿咬住对手。 有时会使对手畏缩 或陷入冰冻状态。' },
      { name: '大闹一番', type: PokemonElementType.normal, power: 120, description: '在２～３回合内， 乱打一气地攻击对手。 大闹一番后自己会陷入混乱。' },
      { name: '水流尾', type: PokemonElementType.water, power: 90, description: '如惊涛骇浪般挥动 大尾巴攻击对手。' },
    ],
  },
  sentret: {
    flavorText: 'It has a very nervous nature. It stands up high on its tail so it can scan wide areas.',
    stats: { hp: 35, attack: 46, defense: 34, specialAttack: 35, specialDefense: 45, speed: 20 },
    moves: [
      { name: '看我嘛', type: PokemonElementType.normal, power: null, description: '引起对手的注意， 将对手的攻击 全部转移到自己身上。' },
      { name: '抢先一步', type: PokemonElementType.normal, power: null, description: '提高威力，抢先使出 对手想要使出的招式。 如果不先使出则会失败。' },
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
    ],
  },
  furret: {
    flavorText: 'It makes a nest to suit its long and skinny body. The nest is impossible for other POKéMON to enter.',
    stats: { hp: 85, attack: 76, defense: 64, specialAttack: 45, specialDefense: 55, speed: 90 },
    moves: [
      { name: '看我嘛', type: PokemonElementType.normal, power: null, description: '引起对手的注意， 将对手的攻击 全部转移到自己身上。' },
      { name: '抢先一步', type: PokemonElementType.normal, power: null, description: '提高威力，抢先使出 对手想要使出的招式。 如果不先使出则会失败。' },
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
    ],
  },
  hoothoot: {
    flavorText: '每天必定会按固定的节奏倾斜脖子。 过去人们会养它来代替时钟。',
    stats: { hp: 60, attack: 30, defense: 30, specialAttack: 36, specialDefense: 56, speed: 50 },
    moves: [
      { name: '精神转移', type: PokemonElementType.psychic, power: null, description: '利用超能力施以暗示， 从而将自己受到的异常状态 转移给对手。' },
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '神通力', type: PokemonElementType.psychic, power: 80, description: '发出看不见的 神奇力量进行攻击。 有时会使对手畏缩。' },
      { name: '啄', type: PokemonElementType.flying, power: 35, description: '用尖锐的喙或角 刺向对手进行攻击。' },
    ],
  },
  noctowl: {
    flavorText: '即便是在黑暗里，它的眼睛也能 看得一清二楚，不会放过任何猎物。 所以也被称为黑夜帝王。',
    stats: { hp: 100, attack: 50, defense: 50, specialAttack: 86, specialDefense: 96, speed: 70 },
    moves: [
      { name: '精神转移', type: PokemonElementType.psychic, power: null, description: '利用超能力施以暗示， 从而将自己受到的异常状态 转移给对手。' },
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '神通力', type: PokemonElementType.psychic, power: 80, description: '发出看不见的 神奇力量进行攻击。 有时会使对手畏缩。' },
      { name: '神鸟猛击', type: PokemonElementType.flying, power: 140, description: '第２回合攻击对手。 偶尔使对手畏缩。 也容易击中要害。' },
    ],
  },
  ledyba: {
    flavorText: '因为胆小，不总是聚在一起 就会感到不安。背后的花纹 每只都会有细微的不同。',
    stats: { hp: 40, attack: 20, defense: 30, specialAttack: 40, specialDefense: 80, speed: 55 },
    moves: [
      { name: '连续拳', type: PokemonElementType.normal, power: 18, description: '用拳头怒涛般的 殴打对手进行攻击。 连续攻击２～５次。' },
      { name: '音速拳', type: PokemonElementType.fighting, power: 40, description: '以迅雷不及掩耳之势出拳。 必定能够先制攻击。' },
      { name: '银色旋风', type: PokemonElementType.bug, power: 60, description: '在风中掺入鳞粉攻击对手。 有时会提高自己的全部能力。' },
      { name: '虫鸣', type: PokemonElementType.bug, power: 90, description: '利用振动发出音波进行攻击。 有时会降低对手的特防。' },
    ],
  },
  ledian: {
    flavorText: '据说星光是它的能量， 但平时也非常喜爱吃树果。 白天就用草包裹着睡觉。',
    stats: { hp: 55, attack: 35, defense: 50, specialAttack: 55, specialDefense: 110, speed: 85 },
    moves: [
      { name: '连续拳', type: PokemonElementType.normal, power: 18, description: '用拳头怒涛般的 殴打对手进行攻击。 连续攻击２～５次。' },
      { name: '音速拳', type: PokemonElementType.fighting, power: 40, description: '以迅雷不及掩耳之势出拳。 必定能够先制攻击。' },
      { name: '银色旋风', type: PokemonElementType.bug, power: 60, description: '在风中掺入鳞粉攻击对手。 有时会提高自己的全部能力。' },
      { name: '虫鸣', type: PokemonElementType.bug, power: 90, description: '利用振动发出音波进行攻击。 有时会降低对手的特防。' },
    ],
  },
  spinarak: {
    flavorText: '一心一意地等着， 直到爱吃的萌虻落入巢中。 实在是有耐心的宝可梦。',
    stats: { hp: 40, attack: 60, defense: 40, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: '蛛网', type: PokemonElementType.bug, power: null, description: '将黏糊糊的细丝 一层一层缠住对手， 使其不能从战斗中逃走。' },
      { name: '缠绕', type: PokemonElementType.normal, power: 10, description: '用触手或青藤等缠绕进行攻击。 有时会降低对手的速度。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '飞弹针', type: PokemonElementType.bug, power: 25, description: '向对手发射 锐针进行攻击。 连续攻击２～５次。' },
    ],
  },
  ariados: {
    flavorText: '也有地区会使用 阿利多斯的丝来织布。 因布料结实而广受好评。',
    stats: { hp: 70, attack: 90, defense: 70, specialAttack: 60, specialDefense: 70, speed: 40 },
    moves: [
      { name: '蛛网', type: PokemonElementType.bug, power: null, description: '将黏糊糊的细丝 一层一层缠住对手， 使其不能从战斗中逃走。' },
      { name: '缠绕', type: PokemonElementType.normal, power: 10, description: '用触手或青藤等缠绕进行攻击。 有时会降低对手的速度。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '飞弹针', type: PokemonElementType.bug, power: 25, description: '向对手发射 锐针进行攻击。 连续攻击２～５次。' },
    ],
  },
  crobat: {
    flavorText: '用４根翅膀又快又静地飞行。 在被发现之前一口咬住猎物。 一瞬间就把血都吸掉。',
    stats: { hp: 85, attack: 90, defense: 80, specialAttack: 70, specialDefense: 80, speed: 130 },
    moves: [
      { name: '剧毒牙', type: PokemonElementType.poison, power: 50, description: '用有毒的牙齿 咬住对手进行攻击。 有时会使对手中剧毒。' },
      { name: '十字毒刃', type: PokemonElementType.poison, power: 70, description: '用毒刃劈开对手。 有时会让对手陷入中毒状态， 也容易击中要害。' },
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '黑色目光', type: PokemonElementType.normal, power: null, description: '用好似要勾人心魂的黑色目光 一动不动地凝视对手， 使其不能从战斗中逃走。' },
    ],
  },
  chinchou: {
    flavorText: '２根触手原本是鳍。 释放电力让猎物麻痹后进行袭击。',
    stats: { hp: 75, attack: 38, defense: 38, specialAttack: 56, specialDefense: 56, speed: 67 },
    moves: [
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
      { name: '水流环', type: PokemonElementType.water, power: null, description: '在自己身体的周围 覆盖用水制造的幕。 每回合回复ＨＰ。' },
      { name: '电光', type: PokemonElementType.electric, power: 65, description: '让电流覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '超音波', type: PokemonElementType.normal, power: null, description: '从身体发出 特殊的音波， 从而使对手混乱。' },
    ],
  },
  lanturn: {
    flavorText: '探头望向夜晚的海面， 如果看到犹如闪烁的星星 一样的光，那是电灯怪哦。',
    stats: { hp: 125, attack: 58, defense: 58, specialAttack: 76, specialDefense: 76, speed: 67 },
    moves: [
      { name: '喷出', type: PokemonElementType.normal, power: null, description: '将积蓄的力量 撞向对手进行攻击。 积蓄得越多，威力越大。' },
      { name: '吞下', type: PokemonElementType.normal, power: null, description: '将积蓄的力量吞下， 从而回复自己的ＨＰ。 积蓄得越多，回复越大。' },
      { name: '蓄力', type: PokemonElementType.normal, power: null, description: '积蓄力量， 提高自己的防御和特防。 最多积蓄３次。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
    ],
  },
  pichu: {
    flavorText: '运用电的水平还不够。 稍不留神就被自己的电 麻到也时有发生。',
    stats: { hp: 20, attack: 40, defense: 15, specialAttack: 35, specialDefense: 35, speed: 60 },
    moves: [
      { name: '天使之吻', type: PokemonElementType.normal, power: null, description: '像天使般可爱地亲吻对手， 从而使对手混乱。' },
      { name: '电击', type: PokemonElementType.electric, power: 40, description: '发出电流刺激对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '摇尾巴', type: PokemonElementType.normal, power: null, description: '可爱地左右摇晃尾巴， 诱使对手疏忽大意。 会降低对手的防御。' },
      { name: '诡计', type: PokemonElementType.dark, power: null, description: '谋划诡计，激活头脑。 大幅提高自己的特攻。' },
    ],
  },
  cleffa: {
    flavorText: '在流星闪耀的深夜里 凝望着天空的样子， 似乎是在怀念故乡。',
    stats: { hp: 50, attack: 25, defense: 28, specialAttack: 45, specialDefense: 55, speed: 15 },
    moves: [
      { name: '唱歌', type: PokemonElementType.normal, power: null, description: '让对手听舒适、 美妙的歌声， 从而陷入睡眠状态。' },
      { name: '天使之吻', type: PokemonElementType.normal, power: null, description: '像天使般可爱地亲吻对手， 从而使对手混乱。' },
      { name: '仿效', type: PokemonElementType.normal, power: null, description: '模仿对手刚才使出的招式， 并使出相同招式。 如果对手还没出招则会失败。' },
      { name: '拍击', type: PokemonElementType.normal, power: 40, description: '使用长长的尾巴或手等 拍打对手进行攻击。' },
    ],
  },
  igglybuff: {
    flavorText: '喜欢唱歌，但还不怎么在行。 如果能给予恰当的表扬， 就会渐渐有所提高哦。',
    stats: { hp: 90, attack: 30, defense: 15, specialAttack: 40, specialDefense: 20, speed: 15 },
    moves: [
      { name: '唱歌', type: PokemonElementType.normal, power: null, description: '让对手听舒适、 美妙的歌声， 从而陷入睡眠状态。' },
      { name: '天使之吻', type: PokemonElementType.normal, power: null, description: '像天使般可爱地亲吻对手， 从而使对手混乱。' },
      { name: '仿效', type: PokemonElementType.normal, power: null, description: '模仿对手刚才使出的招式， 并使出相同招式。 如果对手还没出招则会失败。' },
      { name: '拍击', type: PokemonElementType.normal, power: 40, description: '使用长长的尾巴或手等 拍打对手进行攻击。' },
    ],
  },
  togepi: {
    flavorText: '壳内好像塞满了很多幸福， 据说如果能温柔对待它， 它就会把幸运分给对方。',
    stats: { hp: 35, attack: 20, defense: 65, specialAttack: 40, specialDefense: 65, speed: 20 },
    moves: [
      { name: '看我嘛', type: PokemonElementType.normal, power: null, description: '引起对手的注意， 将对手的攻击 全部转移到自己身上。' },
      { name: '天使之吻', type: PokemonElementType.normal, power: null, description: '像天使般可爱地亲吻对手， 从而使对手混乱。' },
      { name: '祈愿', type: PokemonElementType.normal, power: null, description: '在下一回合回复自己或是 替换出场的宝可梦最大ＨＰ的一半。' },
      { name: '哈欠', type: PokemonElementType.normal, power: null, description: '打个大哈欠引起睡意。 在下一回合让对手陷入睡眠状态。' },
    ],
  },
  togetic: {
    flavorText: '据说它是为了将幸福带给 性格温柔的人而现身的。',
    stats: { hp: 55, attack: 40, defense: 85, specialAttack: 80, specialDefense: 105, speed: 40 },
    moves: [
      { name: '看我嘛', type: PokemonElementType.normal, power: null, description: '引起对手的注意， 将对手的攻击 全部转移到自己身上。' },
      { name: '天使之吻', type: PokemonElementType.normal, power: null, description: '像天使般可爱地亲吻对手， 从而使对手混乱。' },
      { name: '祈愿', type: PokemonElementType.normal, power: null, description: '在下一回合回复自己或是 替换出场的宝可梦最大ＨＰ的一半。' },
      { name: '哈欠', type: PokemonElementType.normal, power: null, description: '打个大哈欠引起睡意。 在下一回合让对手陷入睡眠状态。' },
    ],
  },
  natu: {
    flavorText: '虽然还无法飞行，但跳跃力超群。 能跳上很高的树枝啄食树芽。',
    stats: { hp: 40, attack: 50, defense: 45, specialAttack: 70, specialDefense: 45, speed: 70 },
    moves: [
      { name: '奇迹之眼', type: PokemonElementType.psychic, power: null, description: '对恶属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '精神转移', type: PokemonElementType.psychic, power: null, description: '利用超能力施以暗示， 从而将自己受到的异常状态 转移给对手。' },
      { name: '抢先一步', type: PokemonElementType.normal, power: null, description: '提高威力，抢先使出 对手想要使出的招式。 如果不先使出则会失败。' },
      { name: '幸运咒语', type: PokemonElementType.normal, power: null, description: '向天许愿， 从而在５回合内不会 被对手的攻击打中要害。' },
    ],
  },
  xatu: {
    flavorText: '据说该宝可梦虽然有着 能预知未来的力量， 但却没有能改变未来的力量。',
    stats: { hp: 65, attack: 75, defense: 70, specialAttack: 95, specialDefense: 70, speed: 95 },
    moves: [
      { name: '奇迹之眼', type: PokemonElementType.psychic, power: null, description: '对恶属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '精神转移', type: PokemonElementType.psychic, power: null, description: '利用超能力施以暗示， 从而将自己受到的异常状态 转移给对手。' },
      { name: '抢先一步', type: PokemonElementType.normal, power: null, description: '提高威力，抢先使出 对手想要使出的招式。 如果不先使出则会失败。' },
      { name: '幸运咒语', type: PokemonElementType.normal, power: null, description: '向天许愿， 从而在５回合内不会 被对手的攻击打中要害。' },
    ],
  },
  mareep: {
    flavorText: '用咩利羊的毛制成的 衣服容易起静电， 所以会做特殊加工。',
    stats: { hp: 55, attack: 40, defense: 40, specialAttack: 65, specialDefense: 45, speed: 35 },
    moves: [
      { name: '棉孢子', type: PokemonElementType.grass, power: null, description: '将棉花般柔软的孢子 紧贴对手， 从而大幅降低对手的速度。' },
      { name: '电击', type: PokemonElementType.electric, power: 40, description: '发出电流刺激对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
      { name: '力量宝石', type: PokemonElementType.rock, power: 80, description: '发射如宝石般 闪耀的光芒攻击对手。' },
    ],
  },
  flaaffy: {
    flavorText: '毛发不生有如橡胶一样的 皮肤不会导电， 即便触电了也很安全。',
    stats: { hp: 70, attack: 55, defense: 55, specialAttack: 80, specialDefense: 60, speed: 45 },
    moves: [
      { name: '棉孢子', type: PokemonElementType.grass, power: null, description: '将棉花般柔软的孢子 紧贴对手， 从而大幅降低对手的速度。' },
      { name: '电击', type: PokemonElementType.electric, power: 40, description: '发出电流刺激对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
      { name: '力量宝石', type: PokemonElementType.rock, power: 80, description: '发射如宝石般 闪耀的光芒攻击对手。' },
    ],
  },
  ampharos: {
    flavorText: '尾巴上的光能传至宇宙， 所以身在何处一目了然。 因此它平时不会让尾巴发光。',
    stats: { hp: 90, attack: 75, defense: 85, specialAttack: 115, specialDefense: 90, speed: 55 },
    moves: [
      { name: '棉孢子', type: PokemonElementType.grass, power: null, description: '将棉花般柔软的孢子 紧贴对手， 从而大幅降低对手的速度。' },
      { name: '电击', type: PokemonElementType.electric, power: 40, description: '发出电流刺激对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
      { name: '力量宝石', type: PokemonElementType.rock, power: 80, description: '发射如宝石般 闪耀的光芒攻击对手。' },
    ],
  },
  bellossom: {
    flavorText: '在南国大量生活着。 跳舞时花瓣会互相碰触， 发出悦耳的声音。',
    stats: { hp: 75, attack: 80, defense: 95, specialAttack: 90, specialDefense: 100, speed: 50 },
    moves: [
      { name: '叶刃', type: PokemonElementType.grass, power: 90, description: '像用剑一般操纵叶片 切斩对手进行攻击。 容易击中要害。' },
      { name: '麻痹粉', type: PokemonElementType.grass, power: null, description: '撒出麻痹粉， 从而让对手陷入麻痹状态。' },
      { name: '甜甜香气', type: PokemonElementType.normal, power: null, description: '用香气大幅降低对手的闪避率。' },
      { name: '超级吸取', type: PokemonElementType.grass, power: 40, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
    ],
  },
  marill: {
    flavorText: '圆圆的尾巴拥有 救生圈的功能。球里满是 转变为了油脂的营养。',
    stats: { hp: 70, attack: 20, defense: 50, specialAttack: 20, specialDefense: 50, speed: 40 },
    moves: [
      { name: '水流环', type: PokemonElementType.water, power: null, description: '在自己身体的周围 覆盖用水制造的幕。 每回合回复ＨＰ。' },
      { name: '泡沫光线', type: PokemonElementType.water, power: 65, description: '向对手猛烈地喷射 泡沫进行攻击。 有时会降低对手的速度。' },
      { name: '摇尾巴', type: PokemonElementType.normal, power: null, description: '可爱地左右摇晃尾巴， 诱使对手疏忽大意。 会降低对手的防御。' },
      { name: '水流尾', type: PokemonElementType.water, power: 90, description: '如惊涛骇浪般挥动 大尾巴攻击对手。' },
    ],
  },
  azumarill: {
    flavorText: '一天大部分的时间都在 水中度过。天晴时会 浮到水面上晒太阳。',
    stats: { hp: 100, attack: 50, defense: 80, specialAttack: 60, specialDefense: 80, speed: 50 },
    moves: [
      { name: '水流环', type: PokemonElementType.water, power: null, description: '在自己身体的周围 覆盖用水制造的幕。 每回合回复ＨＰ。' },
      { name: '泡沫光线', type: PokemonElementType.water, power: 65, description: '向对手猛烈地喷射 泡沫进行攻击。 有时会降低对手的速度。' },
      { name: '摇尾巴', type: PokemonElementType.normal, power: null, description: '可爱地左右摇晃尾巴， 诱使对手疏忽大意。 会降低对手的防御。' },
      { name: '水流尾', type: PokemonElementType.water, power: 90, description: '如惊涛骇浪般挥动 大尾巴攻击对手。' },
    ],
  },
  politoed: {
    flavorText: '在有月亮的夜晚聚集起来大合唱。 那鸣叫声如怒吼般，并不美妙， 但却别有韵味。',
    stats: { hp: 90, attack: 75, defense: 75, specialAttack: 90, specialDefense: 100, speed: 70 },
    moves: [
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
      { name: '连环巴掌', type: PokemonElementType.normal, power: 15, description: '用连环巴掌 拍打对手进行攻击。 连续攻击２～５次。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
      { name: '泡沫光线', type: PokemonElementType.water, power: 65, description: '向对手猛烈地喷射 泡沫进行攻击。 有时会降低对手的速度。' },
    ],
  },
  sudowoodo: {
    flavorText: '为了不被袭击而模仿成树木的样子， 但如果被讨厌的水泼到， 就会慌慌张张地逃走。',
    stats: { hp: 70, attack: 100, defense: 115, specialAttack: 30, specialDefense: 65, speed: 30 },
    moves: [
      { name: '木槌', type: PokemonElementType.grass, power: 120, description: '用坚硬的躯体 撞击对手进行攻击。 自己也会受到不小的伤害。' },
      { name: '落石', type: PokemonElementType.rock, power: 50, description: '拿起小岩石， 投掷对手进行攻击。' },
      { name: '臂锤', type: PokemonElementType.fighting, power: 100, description: '挥舞强力而沉重的拳头， 给予对手伤害。 自己的速度会降低。' },
      { name: '仿效', type: PokemonElementType.normal, power: null, description: '模仿对手刚才使出的招式， 并使出相同招式。 如果对手还没出招则会失败。' },
    ],
  },
  hoppip: {
    flavorText: 'To keep from being blown away by the wind, they gather in clusters. They do enjoy gentle breezes, though.',
    stats: { hp: 35, attack: 35, defense: 40, specialAttack: 35, specialDefense: 55, speed: 50 },
    moves: [
      { name: '棉孢子', type: PokemonElementType.grass, power: null, description: '将棉花般柔软的孢子 紧贴对手， 从而大幅降低对手的速度。' },
      { name: '催眠粉', type: PokemonElementType.grass, power: null, description: '撒出催眠粉， 从而让对手陷入睡眠状态。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
      { name: '跃起', type: PokemonElementType.normal, power: null, description: '也不攻击只是一蹦一蹦地跳， 什么都不会发生……' },
    ],
  },
  skiploom: {
    flavorText: 'The bloom on top of its head opens and closes as the temperature fluctuates up and down.',
    stats: { hp: 55, attack: 45, defense: 50, specialAttack: 45, specialDefense: 65, speed: 80 },
    moves: [
      { name: '棉孢子', type: PokemonElementType.grass, power: null, description: '将棉花般柔软的孢子 紧贴对手， 从而大幅降低对手的速度。' },
      { name: '催眠粉', type: PokemonElementType.grass, power: null, description: '撒出催眠粉， 从而让对手陷入睡眠状态。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
      { name: '跃起', type: PokemonElementType.normal, power: null, description: '也不攻击只是一蹦一蹦地跳， 什么都不会发生……' },
    ],
  },
  jumpluff: {
    flavorText: 'Blown by seasonal winds, it circles the globe, scattering cotton spores as it goes.',
    stats: { hp: 75, attack: 55, defense: 70, specialAttack: 55, specialDefense: 95, speed: 110 },
    moves: [
      { name: '棉孢子', type: PokemonElementType.grass, power: null, description: '将棉花般柔软的孢子 紧贴对手， 从而大幅降低对手的速度。' },
      { name: '催眠粉', type: PokemonElementType.grass, power: null, description: '撒出催眠粉， 从而让对手陷入睡眠状态。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
      { name: '跃起', type: PokemonElementType.normal, power: null, description: '也不攻击只是一蹦一蹦地跳， 什么都不会发生……' },
    ],
  },
  aipom: {
    flavorText: '习惯用尾巴做各种事情后， 手就变得不怎么灵活了。 会在很高的树上筑巢。',
    stats: { hp: 55, attack: 70, defense: 55, specialAttack: 40, specialDefense: 55, speed: 85 },
    moves: [
      { name: '二连击', type: PokemonElementType.normal, power: 35, description: '使用尾巴等 拍打对手进行攻击。 连续２次给予伤害。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '挠痒', type: PokemonElementType.normal, power: null, description: '给对手挠痒，使其发笑， 从而降低对手的攻击和防御。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
    ],
  },
  sunkern: {
    flavorText: 'It may drop out of the sky suddenly. If attacked by a SPEAROW, it will violently shake its leaves.',
    stats: { hp: 30, attack: 30, defense: 30, specialAttack: 30, specialDefense: 30, speed: 30 },
    moves: [
      { name: '草笛', type: PokemonElementType.grass, power: null, description: '让对手听舒适的笛声， 从而陷入睡眠状态。' },
      { name: '扎根', type: PokemonElementType.grass, power: null, description: '在大地上扎根， 每回合回复自己的ＨＰ。 因为扎根了，所以不能替换宝可梦。' },
      { name: '飞叶快刀', type: PokemonElementType.grass, power: 55, description: '飞出叶片， 切斩对手进行攻击。 容易击中要害。' },
      { name: '生长', type: PokemonElementType.normal, power: null, description: '让身体一下子长大， 从而提高攻击和特攻。' },
    ],
  },
  yanma: {
    flavorText: 'If it flaps its wings really fast, it can generate shock waves that will shatter windows in the area.',
    stats: { hp: 65, attack: 65, defense: 45, specialAttack: 75, specialDefense: 45, speed: 95 },
    moves: [
      { name: '音爆', type: PokemonElementType.normal, power: null, description: '将冲击波 撞向对手进行攻击。 必定会给予２０的伤害。' },
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '虫鸣', type: PokemonElementType.bug, power: 90, description: '利用振动发出音波进行攻击。 有时会降低对手的特防。' },
    ],
  },
  sunflora: {
    flavorText: 'It converts sunlight into energy. In the darkness after sunset, it closes its petals and becomes still.',
    stats: { hp: 75, attack: 75, defense: 55, specialAttack: 105, specialDefense: 85, speed: 30 },
    moves: [
      { name: '草笛', type: PokemonElementType.grass, power: null, description: '让对手听舒适的笛声， 从而陷入睡眠状态。' },
      { name: '花瓣舞', type: PokemonElementType.grass, power: 120, description: '在２～３回合内， 散落花瓣攻击对手。 之后自己会陷入混乱。' },
      { name: '扎根', type: PokemonElementType.grass, power: null, description: '在大地上扎根， 每回合回复自己的ＨＰ。 因为扎根了，所以不能替换宝可梦。' },
      { name: '飞叶快刀', type: PokemonElementType.grass, power: 55, description: '飞出叶片， 切斩对手进行攻击。 容易击中要害。' },
    ],
  },
  wooper: {
    flavorText: '在冰冷的水中生活。 附近天气变凉之后， 也会来到地上觅食。',
    stats: { hp: 55, attack: 45, defense: 45, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: '泥巴炸弹', type: PokemonElementType.ground, power: 65, description: '向对手发射 坚硬的泥弹进行攻击。 有时会降低对手的命中率。' },
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '白雾', type: PokemonElementType.ice, power: null, description: '用白雾覆盖身体。 在５回合内不会让对手 降低自己的能力。' },
      { name: '摔打', type: PokemonElementType.normal, power: 80, description: '使用长长的尾巴或藤蔓等 摔打对手进行攻击。' },
    ],
  },
  quagsire: {
    flavorText: '就算脑袋撞上船底或河里的岩石， 也完全不会去在意，悠然自在地 游泳的悠闲宝可梦。',
    stats: { hp: 95, attack: 85, defense: 85, specialAttack: 65, specialDefense: 65, speed: 35 },
    moves: [
      { name: '泥巴炸弹', type: PokemonElementType.ground, power: 65, description: '向对手发射 坚硬的泥弹进行攻击。 有时会降低对手的命中率。' },
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '白雾', type: PokemonElementType.ice, power: null, description: '用白雾覆盖身体。 在５回合内不会让对手 降低自己的能力。' },
      { name: '摔打', type: PokemonElementType.normal, power: 80, description: '使用长长的尾巴或藤蔓等 摔打对手进行攻击。' },
    ],
  },
  espeon: {
    flavorText: '利用又细又短的体毛， 从空气的流动中，连对手的行动 也能一瞬间就察觉。',
    stats: { hp: 65, attack: 65, defense: 60, specialAttack: 130, specialDefense: 95, speed: 110 },
    moves: [
      { name: '晨光', type: PokemonElementType.normal, power: null, description: '回复自己的ＨＰ。 根据天气的不同， 回复量也会有所变化。' },
      { name: '力量互换', type: PokemonElementType.psychic, power: null, description: '利用超能力互换 自己和对手的攻击 以及特攻的能力变化。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
      { name: '念力', type: PokemonElementType.psychic, power: 50, description: '向对手发送 微弱的念力进行攻击。 有时会使对手混乱。' },
    ],
  },
  umbreon: {
    flavorText: '发怒的时候会从全身的毛孔里 喷出混合了毒素的汗液， 袭击对手的眼睛。',
    stats: { hp: 95, attack: 65, defense: 110, specialAttack: 60, specialDefense: 130, speed: 65 },
    moves: [
      { name: '月光', type: PokemonElementType.normal, power: null, description: '回复自己的ＨＰ。 根据天气的不同， 回复量也会有所变化。' },
      { name: '黑色目光', type: PokemonElementType.normal, power: null, description: '用好似要勾人心魂的黑色目光 一动不动地凝视对手， 使其不能从战斗中逃走。' },
      { name: '防守互换', type: PokemonElementType.psychic, power: null, description: '利用超能力互换 自己和对手的防御 以及特防的能力变化。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
    ],
  },
  murkrow: {
    flavorText: '日落时醒来，夜晚飞行。 也有俗话说，黑暗鸦出窝， 赶紧要回家。',
    stats: { hp: 60, attack: 85, defense: 42, specialAttack: 85, specialDefense: 42, speed: 91 },
    moves: [
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '黑色目光', type: PokemonElementType.normal, power: null, description: '用好似要勾人心魂的黑色目光 一动不动地凝视对手， 使其不能从战斗中逃走。' },
      { name: '啄', type: PokemonElementType.flying, power: 35, description: '用尖锐的喙或角 刺向对手进行攻击。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
    ],
  },
  slowking: {
    flavorText: '受被咬到的毒素影响， 拥有天才的头脑。 能自由自在地操纵精神力量。',
    stats: { hp: 95, attack: 75, defense: 80, specialAttack: 100, specialDefense: 110, speed: 30 },
    moves: [
      { name: '王牌', type: PokemonElementType.normal, power: null, description: '王牌招式的 剩余ＰＰ越少， 招式的威力越大。' },
      { name: '力量宝石', type: PokemonElementType.rock, power: 80, description: '发射如宝石般 闪耀的光芒攻击对手。' },
      { name: '哈欠', type: PokemonElementType.normal, power: null, description: '打个大哈欠引起睡意。 在下一回合让对手陷入睡眠状态。' },
      { name: '定身法', type: PokemonElementType.normal, power: null, description: '阻碍对手行动， 之前使出的招式 将在４回合内无法使用。' },
    ],
  },
  unown_a: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_b: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_c: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_d: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_e: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_f: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_g: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_h: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_i: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_j: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_k: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_l: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_m: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_n: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_o: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_p: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_q: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_r: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_s: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_t: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_u: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_v: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_w: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_x: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_y: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_z: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_exclamation: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  unown_question: {
    flavorText: 'Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
    ],
  },
  misdreavus: {
    flavorText: '千方百计地吓唬人类， 吸取生命的能量。 吓人的练习一天也不落。',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 85, specialDefense: 85, speed: 85 },
    moves: [
      { name: '怨念', type: PokemonElementType.ghost, power: null, description: '因对手的招式而陷入濒死时 给对手施加怨念， 让该招式的ＰＰ变成０。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
      { name: '黑色目光', type: PokemonElementType.normal, power: null, description: '用好似要勾人心魂的黑色目光 一动不动地凝视对手， 使其不能从战斗中逃走。' },
      { name: '精神波', type: PokemonElementType.psychic, power: null, description: '向对手发射 神奇的念波进行攻击。 每次使用，伤害都会改变。' },
    ],
  },
  wobbuffet: {
    flavorText: '讨厌光和冲击。 受到攻击时，身体就会膨胀， 反击也会因此变强。',
    stats: { hp: 190, attack: 33, defense: 58, specialAttack: 33, specialDefense: 58, speed: 33 },
    moves: [
      { name: '镜面反射', type: PokemonElementType.psychic, power: null, description: '从对手那里受到 特殊攻击的伤害将以 ２倍返还给同一个对手。' },
      { name: '同命', type: PokemonElementType.ghost, power: null, description: '使出招式后，当受到对手攻击 陷入濒死时，对手也会一同濒死。 连续使出则会失败。' },
      { name: '双倍奉还', type: PokemonElementType.fighting, power: null, description: '从对手那里受到 物理攻击的伤害将以 ２倍返还给同一个对手。' },
      { name: '神秘守护', type: PokemonElementType.normal, power: null, description: '在５回合内 被神奇的力量守护， 从而不会陷入异常状态。' },
    ],
  },
  girafarig: {
    flavorText: 'Its tail has a small brain of its own. Beware! If you get close, it may react to your scent and bite.',
    stats: { hp: 70, attack: 80, defense: 65, specialAttack: 90, specialDefense: 65, speed: 85 },
    moves: [
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '踩踏', type: PokemonElementType.normal, power: 65, description: '用大脚踩踏对手进行攻击。 有时会使对手畏缩。' },
      { name: '二连击', type: PokemonElementType.normal, power: 35, description: '使用尾巴等 拍打对手进行攻击。 连续２次给予伤害。' },
      { name: '力量互换', type: PokemonElementType.psychic, power: null, description: '利用超能力互换 自己和对手的攻击 以及特攻的能力变化。' },
    ],
  },
  pineco: {
    flavorText: '会挂在树上静静等待作为 它猎物的虫宝可梦送上门来。 在阿罗拉，它喜欢吃的是萌虻。',
    stats: { hp: 50, attack: 65, defense: 90, specialAttack: 35, specialDefense: 35, speed: 15 },
    moves: [
      { name: '高速旋转', type: PokemonElementType.normal, power: 50, description: '通过旋转来攻击对手。 还可以摆脱绑紧、紧束、 寄生种子和撒菱等招式。' },
      { name: '撒菱', type: PokemonElementType.ground, power: null, description: '在对手的脚下扔撒菱。 对替换出场的对手的宝可梦 给予伤害。' },
      { name: '虫咬', type: PokemonElementType.bug, power: 60, description: '咬住进行攻击。 当对手携带树果时， 可以食用并获得其效果。' },
      { name: '大爆炸', type: PokemonElementType.normal, power: 250, description: '引发大爆炸， 攻击自己周围所有的宝可梦。 使用后自己会陷入濒死。' },
    ],
  },
  forretress: {
    flavorText: '只要一有东西靠近，它就会射出 钢铁外壳的碎片进行攻击。 这是一种无意识的条件反射。',
    stats: { hp: 75, attack: 90, defense: 140, specialAttack: 60, specialDefense: 60, speed: 40 },
    moves: [
      { name: '镜光射击', type: PokemonElementType.steel, power: 65, description: '抛光自己的身体， 向对手释放出闪光之力。 有时会降低对手的命中率。' },
      { name: '高速旋转', type: PokemonElementType.normal, power: 50, description: '通过旋转来攻击对手。 还可以摆脱绑紧、紧束、 寄生种子和撒菱等招式。' },
      { name: '撒菱', type: PokemonElementType.ground, power: null, description: '在对手的脚下扔撒菱。 对替换出场的对手的宝可梦 给予伤害。' },
      { name: '毒菱', type: PokemonElementType.poison, power: null, description: '在对手的脚下撒毒菱。 使对手替换出场的宝可梦中毒。' },
    ],
  },
  dunsparce: {
    flavorText: '能挖掘地面移动。 会友好地和地鼠共用各自的隧道。',
    stats: { hp: 100, attack: 70, defense: 70, specialAttack: 65, specialDefense: 65, speed: 45 },
    moves: [
      { name: '大蛇瞪眼', type: PokemonElementType.normal, power: null, description: '用腹部的花纹使对手害怕， 从而让其陷入麻痹状态。' },
      { name: '哈欠', type: PokemonElementType.normal, power: null, description: '打个大哈欠引起睡意。 在下一回合让对手陷入睡眠状态。' },
      { name: '追打', type: PokemonElementType.dark, power: 40, description: '当对手替换宝可梦上场时 使出此招式的话， 能够以２倍的威力进行攻击。' },
      { name: '羽栖', type: PokemonElementType.flying, power: null, description: '降到地面，使身体休息。 回复自己最大ＨＰ的一半。' },
    ],
  },
  gligar: {
    flavorText: 'It flies straight at its target\'s face then clamps down on the startled victim to inject poison.',
    stats: { hp: 65, attack: 75, defense: 105, specialAttack: 35, specialDefense: 65, speed: 85 },
    moves: [
      { name: '断头钳', type: PokemonElementType.normal, power: null, description: '用大钳子或剪刀等 夹断对手进行攻击。 只要命中就会一击濒死。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
    ],
  },
  steelix: {
    flavorText: '据说当大岩蛇活到了 １００年以上，身体的成分 就会变得如同钻石一般。',
    stats: { hp: 75, attack: 85, defense: 200, specialAttack: 55, specialDefense: 65, speed: 30 },
    moves: [
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '落石', type: PokemonElementType.rock, power: 50, description: '拿起小岩石， 投掷对手进行攻击。' },
      { name: '绑紧', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 绑紧对手进行攻击。' },
      { name: '龙息', type: PokemonElementType.dragon, power: 60, description: '将强烈的气息 吹向对手进行攻击。 有时会让对手陷入麻痹状态。' },
    ],
  },
  snubbull: {
    flavorText: '脸很严厉，但其实相当胆小。 拼命威吓的表情在女性中很有人气。',
    stats: { hp: 60, attack: 80, defense: 50, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: '舌舔', type: PokemonElementType.ghost, power: 30, description: '用长长的舌头， 舔遍对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '雷电牙', type: PokemonElementType.electric, power: 65, description: '用蓄满电流的牙齿咬住对手。 有时会使对手畏缩 或陷入麻痹状态。' },
      { name: '冰冻牙', type: PokemonElementType.ice, power: 65, description: '用藏有冷气的牙齿咬住对手。 有时会使对手畏缩 或陷入冰冻状态。' },
      { name: '火焰牙', type: PokemonElementType.fire, power: 65, description: '用覆盖着火焰的牙齿咬住对手。 有时会使对手畏缩 或陷入灼伤状态。' },
    ],
  },
  granbull: {
    flavorText: '发达的下颚和沉重的牙齿 是它的武器。只要不惹怒它， 很少会被咬到哦。',
    stats: { hp: 90, attack: 120, defense: 75, specialAttack: 60, specialDefense: 60, speed: 45 },
    moves: [
      { name: '舌舔', type: PokemonElementType.ghost, power: 30, description: '用长长的舌头， 舔遍对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '雷电牙', type: PokemonElementType.electric, power: 65, description: '用蓄满电流的牙齿咬住对手。 有时会使对手畏缩 或陷入麻痹状态。' },
      { name: '冰冻牙', type: PokemonElementType.ice, power: 65, description: '用藏有冷气的牙齿咬住对手。 有时会使对手畏缩 或陷入冰冻状态。' },
      { name: '火焰牙', type: PokemonElementType.fire, power: 65, description: '用覆盖着火焰的牙齿咬住对手。 有时会使对手畏缩 或陷入灼伤状态。' },
    ],
  },
  qwilfish: {
    flavorText: '对手的体型越是巨大，它就会 喝下越多的水使身体膨胀， 仿佛马上就要破裂一般。',
    stats: { hp: 65, attack: 95, defense: 85, specialAttack: 55, specialDefense: 55, speed: 85 },
    moves: [
      { name: '变小', type: PokemonElementType.normal, power: null, description: '蜷缩身体显得很小， 从而大幅提高 自己的闪避率。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '喷出', type: PokemonElementType.normal, power: null, description: '将积蓄的力量 撞向对手进行攻击。 积蓄得越多，威力越大。' },
      { name: '飞弹针', type: PokemonElementType.bug, power: 25, description: '向对手发射 锐针进行攻击。 连续攻击２～５次。' },
    ],
  },
  scizor: {
    flavorText: '为了防止战斗时变得过热， 而令金属的身体熔化， 会使用翅膀调节体温。',
    stats: { hp: 70, attack: 130, defense: 100, specialAttack: 55, specialDefense: 80, speed: 65 },
    moves: [
      { name: '子弹拳', type: PokemonElementType.steel, power: 40, description: '向对手使出如子弹般 快速而坚硬的拳头。 必定能够先制攻击。' },
      { name: '旋风刀', type: PokemonElementType.normal, power: 80, description: '制造风之刃， 于第２回合攻击对手。 容易击中要害。' },
      { name: '二连击', type: PokemonElementType.normal, power: 35, description: '使用尾巴等 拍打对手进行攻击。 连续２次给予伤害。' },
      { name: '佯攻', type: PokemonElementType.normal, power: 30, description: '能够攻击正在使用 守住或看穿等招式的对手。 解除其守护效果。' },
    ],
  },
  shuckle: {
    flavorText: '甲壳里储存着树果。 为了避免受到袭击， 它会一动不动地躲在岩石下面。',
    stats: { hp: 20, attack: 10, defense: 230, specialAttack: 10, specialDefense: 230, speed: 5 },
    moves: [
      { name: '力量戏法', type: PokemonElementType.psychic, power: null, description: '利用超能力交换 自己的攻击和 防御的力量。' },
      { name: '缠绕', type: PokemonElementType.normal, power: 10, description: '用触手或青藤等缠绕进行攻击。 有时会降低对手的速度。' },
      { name: '缩入壳中', type: PokemonElementType.water, power: null, description: '缩入壳里保护身体， 从而提高自己的防御。' },
      { name: '紧束', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 紧束对手进行攻击。' },
    ],
  },
  heracross: {
    flavorText: '粗粗的角是其骄傲。 在阿罗拉，锹农炮虫是它最大的 竞争者，双方经常大打出手。',
    stats: { hp: 80, attack: 125, defense: 75, specialAttack: 40, specialDefense: 95, speed: 85 },
    moves: [
      { name: '角撞', type: PokemonElementType.normal, power: 65, description: '用尖锐的角攻击对手。' },
      { name: '超级角击', type: PokemonElementType.bug, power: 120, description: '用坚硬且华丽的角狠狠地 刺入对手进行攻击。' },
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
      { name: '佯攻', type: PokemonElementType.normal, power: 30, description: '能够攻击正在使用 守住或看穿等招式的对手。 解除其守护效果。' },
    ],
  },
  sneasel: {
    flavorText: '狡黠凶恶的性格。 趁着双亲不在就侵入巢穴， 将蛋盗出。',
    stats: { hp: 55, attack: 95, defense: 55, specialAttack: 35, specialDefense: 75, speed: 115 },
    moves: [
      { name: '冰砾', type: PokemonElementType.ice, power: 40, description: '瞬间制作冰块， 快速地扔向对手。 必定能够先制攻击。' },
      { name: '围攻', type: PokemonElementType.dark, power: null, description: '我方全员进行攻击。 同行的宝可梦越多， 招式的攻击次数越多。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
    ],
  },
  teddiursa: {
    flavorText: 'If it finds honey, its crescent mark glows. It always licks its paws because they are soaked with honey.',
    stats: { hp: 60, attack: 80, defense: 50, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: '舌舔', type: PokemonElementType.ghost, power: 30, description: '用长长的舌头， 舔遍对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '甜甜香气', type: PokemonElementType.normal, power: null, description: '用香气大幅降低对手的闪避率。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
    ],
  },
  ursaring: {
    flavorText: 'Although it is a good climber, it prefers to snap trees with its forelegs and eat fallen BERRIES.',
    stats: { hp: 90, attack: 130, defense: 75, specialAttack: 75, specialDefense: 75, speed: 55 },
    moves: [
      { name: '舌舔', type: PokemonElementType.ghost, power: 30, description: '用长长的舌头， 舔遍对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '臂锤', type: PokemonElementType.fighting, power: 100, description: '挥舞强力而沉重的拳头， 给予对手伤害。 自己的速度会降低。' },
      { name: '甜甜香气', type: PokemonElementType.normal, power: null, description: '用香气大幅降低对手的闪避率。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
    ],
  },
  slugma: {
    flavorText: 'Its body is made of magma. If it doesn’t keep moving, its body will cool and harden.',
    stats: { hp: 40, attack: 40, defense: 40, specialAttack: 70, specialDefense: 40, speed: 20 },
    moves: [
      { name: '喷烟', type: PokemonElementType.fire, power: 80, description: '用熊熊烈火 攻击自己周围所有的宝可梦。 有时会陷入灼伤状态。' },
      { name: '浊雾', type: PokemonElementType.poison, power: 30, description: '将肮脏的浓雾 吹向对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '落石', type: PokemonElementType.rock, power: 50, description: '拿起小岩石， 投掷对手进行攻击。' },
      { name: '自我再生', type: PokemonElementType.normal, power: null, description: '让细胞再生， 从而回复自己 最大ＨＰ的一半。' },
    ],
  },
  magcargo: {
    flavorText: 'The shell on its back is just skin that has cooled and hardened. It breaks easily with a slight touch.',
    stats: { hp: 60, attack: 50, defense: 120, specialAttack: 90, specialDefense: 80, speed: 30 },
    moves: [
      { name: '喷烟', type: PokemonElementType.fire, power: 80, description: '用熊熊烈火 攻击自己周围所有的宝可梦。 有时会陷入灼伤状态。' },
      { name: '浊雾', type: PokemonElementType.poison, power: 30, description: '将肮脏的浓雾 吹向对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '落石', type: PokemonElementType.rock, power: 50, description: '拿起小岩石， 投掷对手进行攻击。' },
      { name: '自我再生', type: PokemonElementType.normal, power: null, description: '让细胞再生， 从而回复自己 最大ＨＰ的一半。' },
    ],
  },
  swinub: {
    flavorText: '为了寻找食物， 会用鼻子摩擦地面并进行挖掘。 偶尔会挖到温泉。',
    stats: { hp: 50, attack: 50, defense: 40, specialAttack: 30, specialDefense: 30, speed: 50 },
    moves: [
      { name: '泥巴炸弹', type: PokemonElementType.ground, power: 65, description: '向对手发射 坚硬的泥弹进行攻击。 有时会降低对手的命中率。' },
      { name: '冰砾', type: PokemonElementType.ice, power: 40, description: '瞬间制作冰块， 快速地扔向对手。 必定能够先制攻击。' },
      { name: '细雪', type: PokemonElementType.ice, power: 40, description: '将冰冷的细雪 吹向对手进行攻击。 有时会让对手陷入冰冻状态。' },
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
    ],
  },
  piloswine: {
    flavorText: '朝着对手冲过去时， 背上的体毛会倒竖起来。 对声音极度敏感。',
    stats: { hp: 100, attack: 100, defense: 80, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: '泥巴炸弹', type: PokemonElementType.ground, power: 65, description: '向对手发射 坚硬的泥弹进行攻击。 有时会降低对手的命中率。' },
      { name: '细雪', type: PokemonElementType.ice, power: 40, description: '将冰冷的细雪 吹向对手进行攻击。 有时会让对手陷入冰冻状态。' },
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
    ],
  },
  corsola: {
    flavorText: '头顶上长着珊瑚枝。 虽然相当容易折断， 但大约３天就能恢复哦。',
    stats: { hp: 65, attack: 55, defense: 95, specialAttack: 65, specialDefense: 95, speed: 35 },
    moves: [
      { name: '尖刺加农炮', type: PokemonElementType.normal, power: 20, description: '向对手发射 锐针进行攻击。 连续攻击２～５次。' },
      { name: '幸运咒语', type: PokemonElementType.normal, power: null, description: '向天许愿， 从而在５回合内不会 被对手的攻击打中要害。' },
      { name: '焕然一新', type: PokemonElementType.normal, power: null, description: '让身体休息， 治愈自己身上所中的 毒、麻痹、灼伤的异常状态。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
    ],
  },
  remoraid: {
    flavorText: '会粘在巨翅飞鱼身上， 吃一点残羹剩饭。如果巨翅飞鱼 受到袭击，它就会与其一同战斗。',
    stats: { hp: 35, attack: 65, defense: 35, specialAttack: 65, specialDefense: 35, speed: 65 },
    moves: [
      { name: '锁定', type: PokemonElementType.normal, power: null, description: '紧紧瞄准对手， 下次攻击必定会打中。' },
      { name: '极光束', type: PokemonElementType.ice, power: 65, description: '向对手发射 虹色光束进行攻击。 有时会降低对手的攻击。' },
      { name: '泡沫光线', type: PokemonElementType.water, power: 65, description: '向对手猛烈地喷射 泡沫进行攻击。 有时会降低对手的速度。' },
      { name: '幻象光线', type: PokemonElementType.psychic, power: 65, description: '向对手发射 神奇的光线进行攻击。 有时会使对手混乱。' },
    ],
  },
  octillery: {
    flavorText: '逃跑时吐出来的墨汁很特别。 里面有着能让嗅觉变迟钝的成分， 连鼻子灵敏的宝可梦也能迷惑。',
    stats: { hp: 75, attack: 105, defense: 75, specialAttack: 105, specialDefense: 75, speed: 45 },
    moves: [
      { name: '章鱼桶炮', type: PokemonElementType.water, power: 65, description: '向对手的脸等 喷出墨汁进行攻击。 有时会降低对手的命中率。' },
      { name: '缠绕', type: PokemonElementType.normal, power: 10, description: '用触手或青藤等缠绕进行攻击。 有时会降低对手的速度。' },
      { name: '绞紧', type: PokemonElementType.normal, power: null, description: '用力勒紧对手进行攻击。 对手的ＨＰ越多， 威力越大。' },
      { name: '极光束', type: PokemonElementType.ice, power: 65, description: '向对手发射 虹色光束进行攻击。 有时会降低对手的攻击。' },
    ],
  },
  delibird: {
    flavorText: '原本很喜欢寒冷的地方， 但是阿罗拉的信使鸟好像 即便是有点儿炎热也能忍耐。',
    stats: { hp: 45, attack: 55, defense: 45, specialAttack: 65, specialDefense: 45, speed: 75 },
    moves: [
      { name: '礼物', type: PokemonElementType.normal, power: null, description: '递给对手设有圈套的 盒子进行攻击。 也有可能回复对手ＨＰ。' },
    ],
  },
  mantine: {
    flavorText: '阿罗拉的人气特产是绘有巨翅飞鱼 在海浪上优雅跳跃的明信片及海报。',
    stats: { hp: 85, attack: 40, defense: 70, specialAttack: 80, specialDefense: 140, speed: 70 },
    moves: [
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
      { name: '水流环', type: PokemonElementType.water, power: null, description: '在自己身体的周围 覆盖用水制造的幕。 每回合回复ＨＰ。' },
      { name: '超音波', type: PokemonElementType.normal, power: null, description: '从身体发出 特殊的音波， 从而使对手混乱。' },
    ],
  },
  skarmory: {
    flavorText: '由于它身上掉落下来的羽毛 可以用来制剑，因此作为纹章 的图案也很有人气。',
    stats: { hp: 65, attack: 80, defense: 140, specialAttack: 40, specialDefense: 70, speed: 70 },
    moves: [
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
      { name: '金属音', type: PokemonElementType.steel, power: null, description: '让对手听摩擦金属般 讨厌的声音。 大幅降低对手的特防。' },
      { name: '啄', type: PokemonElementType.flying, power: 35, description: '用尖锐的喙或角 刺向对手进行攻击。' },
      { name: '撒菱', type: PokemonElementType.ground, power: null, description: '在对手的脚下扔撒菱。 对替换出场的对手的宝可梦 给予伤害。' },
    ],
  },
  houndour: {
    flavorText: '擅长与伙伴的合作。 如果成为同伴， 就会非常听从训练家的命令。',
    stats: { hp: 45, attack: 60, defense: 30, specialAttack: 80, specialDefense: 50, speed: 65 },
    moves: [
      { name: '浊雾', type: PokemonElementType.poison, power: 30, description: '将肮脏的浓雾 吹向对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '长嚎', type: PokemonElementType.normal, power: null, description: '大声吼叫提高气势， 从而提高自己的攻击。' },
      { name: '围攻', type: PokemonElementType.dark, power: null, description: '我方全员进行攻击。 同行的宝可梦越多， 招式的攻击次数越多。' },
    ],
  },
  houndoom: {
    flavorText: '能喷出混有毒素的火焰结果对手。 会和群体中的成员平分猎物。',
    stats: { hp: 75, attack: 90, defense: 50, specialAttack: 110, specialDefense: 80, speed: 95 },
    moves: [
      { name: '浊雾', type: PokemonElementType.poison, power: 30, description: '将肮脏的浓雾 吹向对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '长嚎', type: PokemonElementType.normal, power: null, description: '大声吼叫提高气势， 从而提高自己的攻击。' },
      { name: '围攻', type: PokemonElementType.dark, power: null, description: '我方全员进行攻击。 同行的宝可梦越多， 招式的攻击次数越多。' },
    ],
  },
  phanpy: {
    flavorText: 'It swings its long snout around playfully, but because it is so strong, that can be dangerous.',
    stats: { hp: 90, attack: 60, defense: 60, specialAttack: 40, specialDefense: 40, speed: 40 },
    moves: [
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '摔打', type: PokemonElementType.normal, power: 80, description: '使用长长的尾巴或藤蔓等 摔打对手进行攻击。' },
      { name: '珍藏', type: PokemonElementType.normal, power: 140, description: '当战斗中已学会的招式 全部使用过后， 才能开始使出珍藏的招式。' },
      { name: '抓狂', type: PokemonElementType.normal, power: null, description: '抓狂般乱打进行攻击。 自己的ＨＰ越少， 招式的威力越大。' },
    ],
  },
  kingdra: {
    flavorText: '会在暴风雨袭来时出现在 海面上。如果遇到快龙， 便会开始激烈的争斗。',
    stats: { hp: 75, attack: 95, defense: 95, specialAttack: 95, specialDefense: 95, speed: 85 },
    moves: [
      { name: '烟幕', type: PokemonElementType.normal, power: null, description: '向对手喷出烟或墨汁等， 从而降低对手的命中率。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
      { name: '龙之舞', type: PokemonElementType.dragon, power: null, description: '激烈地跳起神秘 且强有力的舞蹈。 从而提高自己的攻击和速度。' },
      { name: '龙卷风', type: PokemonElementType.dragon, power: 40, description: '兴起龙卷风， 将对手卷入进行攻击。 有时会使对手畏缩。' },
    ],
  },
  donphan: {
    flavorText: 'It has sharp, hard tusks and a rugged hide. Its TACKLE is strong enough to knock down a house.',
    stats: { hp: 90, attack: 120, defense: 120, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: '角撞', type: PokemonElementType.normal, power: 65, description: '用尖锐的角攻击对手。' },
      { name: '震级', type: PokemonElementType.ground, power: null, description: '晃动地面，攻击自己 周围所有的宝可梦。 招式的威力会有各种变化。' },
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
      { name: '高速旋转', type: PokemonElementType.normal, power: 50, description: '通过旋转来攻击对手。 还可以摆脱绑紧、紧束、 寄生种子和撒菱等招式。' },
    ],
  },
  porygon2: {
    flavorText: '将行星的开发纳入视野， 以当时的最新技术升级了多边兽。',
    stats: { hp: 85, attack: 80, defense: 90, specialAttack: 105, specialDefense: 95, speed: 60 },
    moves: [
      { name: '纹理', type: PokemonElementType.normal, power: null, description: '将自己的属性转换成 和已学会的招式中 第一个招式相同的属性。' },
      { name: '纹理２', type: PokemonElementType.normal, power: null, description: '为了可以抵抗对手 最后使用的招式， 从而使自己的属性发生变化。' },
      { name: '锁定', type: PokemonElementType.normal, power: null, description: '紧紧瞄准对手， 下次攻击必定会打中。' },
      { name: '三重攻击', type: PokemonElementType.normal, power: 80, description: '用３种光线进行攻击。 有时会让对手陷入 麻痹、灼伤或冰冻的状态。' },
    ],
  },
  stantler: {
    flavorText: 'The curved antlers subtly change the flow of air to create a strange space where reality is distorted.',
    stats: { hp: 73, attack: 95, defense: 62, specialAttack: 85, specialDefense: 65, speed: 85 },
    moves: [
      { name: '抢先一步', type: PokemonElementType.normal, power: null, description: '提高威力，抢先使出 对手想要使出的招式。 如果不先使出则会失败。' },
      { name: '踩踏', type: PokemonElementType.normal, power: 65, description: '用大脚踩踏对手进行攻击。 有时会使对手畏缩。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
    ],
  },
  smeargle: {
    flavorText: '用从尾巴尖尖慢慢渗出的 体液绘出独有的标记， 宣告自己的领地。',
    stats: { hp: 55, attack: 20, defense: 35, specialAttack: 20, specialDefense: 45, speed: 75 },
    moves: [
      { name: '写生', type: PokemonElementType.normal, power: null, description: '将对手使用的招式 变成自己的招式。 使用１次后写生消失。' },
    ],
  },
  tyrogue: {
    flavorText: '永远都是精力充沛的样子。 为了变强，就算输了一次又一次， 也会不断地站起来迎战对手。',
    stats: { hp: 35, attack: 35, defense: 35, specialAttack: 35, specialDefense: 35, speed: 35 },
    moves: [
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '击掌奇袭', type: PokemonElementType.normal, power: 40, description: '进行先制攻击，使对手畏缩。 要在出场后立刻使出才能成功。' },
      { name: '撞击', type: PokemonElementType.normal, power: 40, description: '用整个身体 撞向对手进行攻击。' },
      { name: '帮助', type: PokemonElementType.normal, power: null, description: '帮助伙伴。 被帮助的宝可梦， 其招式威力变得比平时大。' },
    ],
  },
  hitmontop: {
    flavorText: '会旋转身体使出踢击。 当它高速旋转身体时， 会直接钻进地底下。',
    stats: { hp: 50, attack: 95, defense: 95, specialAttack: 35, specialDefense: 110, speed: 70 },
    moves: [
      { name: '三连踢', type: PokemonElementType.fighting, power: 10, description: '连续３次踢对手进行攻击。 每踢中一次，威力就会提高。' },
      { name: '回旋踢', type: PokemonElementType.fighting, power: 60, description: '一边使身体快速旋转， 一边踢飞对手进行攻击。 有时会使对手畏缩。' },
      { name: '高速旋转', type: PokemonElementType.normal, power: 50, description: '通过旋转来攻击对手。 还可以摆脱绑紧、紧束、 寄生种子和撒菱等招式。' },
      { name: '佯攻', type: PokemonElementType.normal, power: 30, description: '能够攻击正在使用 守住或看穿等招式的对手。 解除其守护效果。' },
    ],
  },
  smoochum: {
    flavorText: '在确认某样东西时， 会先用嘴唇而不是手去触碰试试。 会经常用舌头舔去污渍。',
    stats: { hp: 45, attack: 30, defense: 15, specialAttack: 85, specialDefense: 65, speed: 65 },
    moves: [
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
      { name: '幸运咒语', type: PokemonElementType.normal, power: null, description: '向天许愿， 从而在５回合内不会 被对手的攻击打中要害。' },
      { name: '唱歌', type: PokemonElementType.normal, power: null, description: '让对手听舒适、 美妙的歌声， 从而陷入睡眠状态。' },
      { name: '细雪', type: PokemonElementType.ice, power: 40, description: '将冰冷的细雪 吹向对手进行攻击。 有时会让对手陷入冰冻状态。' },
    ],
  },
  magby: {
    flavorText: '在火山地带经常能见到。 如果冒失地给了它食物的话会很高兴， 激动地喷出６００度的火。',
    stats: { hp: 45, attack: 75, defense: 37, specialAttack: 70, specialDefense: 55, speed: 83 },
    moves: [
      { name: '喷烟', type: PokemonElementType.fire, power: 80, description: '用熊熊烈火 攻击自己周围所有的宝可梦。 有时会陷入灼伤状态。' },
      { name: '浊雾', type: PokemonElementType.poison, power: 30, description: '将肮脏的浓雾 吹向对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '烟幕', type: PokemonElementType.normal, power: null, description: '向对手喷出烟或墨汁等， 从而降低对手的命中率。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
    ],
  },
  elekid: {
    flavorText: '在家的时候，插座就相当于奶瓶。 可以从中滋滋地吸取电力哦。',
    stats: { hp: 45, attack: 63, defense: 37, specialAttack: 65, specialDefense: 55, speed: 95 },
    moves: [
      { name: '电击', type: PokemonElementType.electric, power: 40, description: '发出电流刺激对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '放电', type: PokemonElementType.electric, power: 80, description: '用耀眼的电击 攻击自己周围所有的宝可梦。 有时会陷入麻痹状态。' },
      { name: '电光一闪', type: PokemonElementType.normal, power: 40, description: '以迅雷不及掩耳之势扑向对手。 必定能够先制攻击。' },
      { name: '刺耳声', type: PokemonElementType.normal, power: null, description: '发出不由自主想要 捂起耳朵的刺耳声， 从而大幅降低对手的防御。' },
    ],
  },
  miltank: {
    flavorText: '这款牛奶营养丰富且热量很高。 所以饮用过量的话 就会变成大奶罐那样的体型。',
    stats: { hp: 95, attack: 80, defense: 105, specialAttack: 40, specialDefense: 70, speed: 100 },
    moves: [
      { name: '喝牛奶', type: PokemonElementType.normal, power: null, description: '回复自己最大ＨＰ的一半。' },
      { name: '唤醒巴掌', type: PokemonElementType.fighting, power: 70, description: '给予睡眠状态下的对手较大的伤害。 但相反对手会从睡眠中醒过来。' },
      { name: '踩踏', type: PokemonElementType.normal, power: 65, description: '用大脚踩踏对手进行攻击。 有时会使对手畏缩。' },
      { name: '治愈铃声', type: PokemonElementType.normal, power: null, description: '让同伴听舒适的铃音， 从而治愈我方全员的异常状态。' },
    ],
  },
  blissey: {
    flavorText: '如果吃了据说饱含着幸福的 幸福蛋的蛋，无论怎么 残暴的宝可梦都会变得温和。',
    stats: { hp: 255, attack: 10, defense: 10, specialAttack: 75, specialDefense: 135, speed: 55 },
    moves: [
      { name: '炸蛋', type: PokemonElementType.normal, power: 100, description: '向对手用力投掷 大大的蛋进行攻击。' },
      { name: '生蛋', type: PokemonElementType.normal, power: null, description: '回复自己最大ＨＰ的一半。' },
      { name: '变小', type: PokemonElementType.normal, power: null, description: '蜷缩身体显得很小， 从而大幅提高 自己的闪避率。' },
      { name: '治愈之愿', type: PokemonElementType.psychic, power: null, description: '虽然自己陷入濒死， 但可以治愈后备上场的 宝可梦的异常状态以及回复ＨＰ。' },
    ],
  },
  raikou: {
    flavorText: 'The rain clouds it carries let it fire thunderbolts at will. They say that it descended with lightning.',
    stats: { hp: 90, attack: 85, defense: 75, specialAttack: 115, specialDefense: 100, speed: 115 },
    moves: [
      { name: '神通力', type: PokemonElementType.psychic, power: 80, description: '发出看不见的 神奇力量进行攻击。 有时会使对手畏缩。' },
      { name: '电光', type: PokemonElementType.electric, power: 65, description: '让电流覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '电击', type: PokemonElementType.electric, power: 40, description: '发出电流刺激对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '放电', type: PokemonElementType.electric, power: 80, description: '用耀眼的电击 攻击自己周围所有的宝可梦。 有时会陷入麻痹状态。' },
    ],
  },
  entei: {
    flavorText: 'Volcanoes erupt when it barks. Unable to restrain its extreme power, it races headlong around the land.',
    stats: { hp: 115, attack: 115, defense: 85, specialAttack: 90, specialDefense: 75, speed: 100 },
    moves: [
      { name: '喷火', type: PokemonElementType.fire, power: 150, description: '爆发怒火攻击对手。 自己的ＨＰ越少， 招式的威力越小。' },
      { name: '喷烟', type: PokemonElementType.fire, power: 80, description: '用熊熊烈火 攻击自己周围所有的宝可梦。 有时会陷入灼伤状态。' },
      { name: '踩踏', type: PokemonElementType.normal, power: 65, description: '用大脚踩踏对手进行攻击。 有时会使对手畏缩。' },
      { name: '神通力', type: PokemonElementType.psychic, power: 80, description: '发出看不见的 神奇力量进行攻击。 有时会使对手畏缩。' },
    ],
  },
  suicune: {
    flavorText: 'Said to be the reincarnation of north winds, it can instantly purify filthy, murky water.',
    stats: { hp: 100, attack: 75, defense: 115, specialAttack: 90, specialDefense: 115, speed: 85 },
    moves: [
      { name: '极光束', type: PokemonElementType.ice, power: 65, description: '向对手发射 虹色光束进行攻击。 有时会降低对手的攻击。' },
      { name: '起风', type: PokemonElementType.flying, power: 40, description: '用翅膀将刮起的狂风 袭向对手进行攻击。' },
      { name: '镜面反射', type: PokemonElementType.psychic, power: null, description: '从对手那里受到 特殊攻击的伤害将以 ２倍返还给同一个对手。' },
      { name: '神通力', type: PokemonElementType.psychic, power: 80, description: '发出看不见的 神奇力量进行攻击。 有时会使对手畏缩。' },
    ],
  },
  larvitar: {
    flavorText: '诞生于地下，会一边吃着泥土， 一边朝至亲所在的地面前进。 因为光线刺眼，所以它不太能适应哦。',
    stats: { hp: 50, attack: 64, defense: 50, specialAttack: 45, specialDefense: 50, speed: 41 },
    moves: [
      { name: '大闹一番', type: PokemonElementType.normal, power: 120, description: '在２～３回合内， 乱打一气地攻击对手。 大闹一番后自己会陷入混乱。' },
      { name: '恶之波动', type: PokemonElementType.dark, power: 80, description: '从体内发出 充满恶意的恐怖气场。 有时会使对手畏缩。' },
      { name: '刺耳声', type: PokemonElementType.normal, power: null, description: '发出不由自主想要 捂起耳朵的刺耳声， 从而大幅降低对手的防御。' },
      { name: '咬住', type: PokemonElementType.dark, power: 60, description: '用尖锐的牙 咬住对手进行攻击。 有时会使对手畏缩。' },
    ],
  },
  pupitar: {
    flavorText: '它是令人头痛的宝可梦。 不等进化完成就会利用压缩气体 四处乱飞大闹来纾解压力。',
    stats: { hp: 70, attack: 84, defense: 70, specialAttack: 65, specialDefense: 70, speed: 51 },
    moves: [
      { name: '大闹一番', type: PokemonElementType.normal, power: 120, description: '在２～３回合内， 乱打一气地攻击对手。 大闹一番后自己会陷入混乱。' },
      { name: '恶之波动', type: PokemonElementType.dark, power: 80, description: '从体内发出 充满恶意的恐怖气场。 有时会使对手畏缩。' },
      { name: '刺耳声', type: PokemonElementType.normal, power: null, description: '发出不由自主想要 捂起耳朵的刺耳声， 从而大幅降低对手的防御。' },
      { name: '咬住', type: PokemonElementType.dark, power: 60, description: '用尖锐的牙 咬住对手进行攻击。 有时会使对手畏缩。' },
    ],
  },
  tyranitar: {
    flavorText: '会在山中徘徊以寻求战斗对手。 但如果遇到的是比自己弱小的对手， 它就会视若无睹地离开。',
    stats: { hp: 100, attack: 134, defense: 110, specialAttack: 95, specialDefense: 100, speed: 61 },
    moves: [
      { name: '雷电牙', type: PokemonElementType.electric, power: 65, description: '用蓄满电流的牙齿咬住对手。 有时会使对手畏缩 或陷入麻痹状态。' },
      { name: '冰冻牙', type: PokemonElementType.ice, power: 65, description: '用藏有冷气的牙齿咬住对手。 有时会使对手畏缩 或陷入冰冻状态。' },
      { name: '大闹一番', type: PokemonElementType.normal, power: 120, description: '在２～３回合内， 乱打一气地攻击对手。 大闹一番后自己会陷入混乱。' },
      { name: '火焰牙', type: PokemonElementType.fire, power: 65, description: '用覆盖着火焰的牙齿咬住对手。 有时会使对手畏缩 或陷入灼伤状态。' },
    ],
  },
  lugia: {
    flavorText: 'It is said that it quietly spends its time deep at the bottom of the sea because its powers are too strong.',
    stats: { hp: 106, attack: 90, defense: 130, specialAttack: 90, specialDefense: 154, speed: 110 },
    moves: [
      { name: '气旋攻击', type: PokemonElementType.flying, power: 100, description: '发射空气旋涡 进行攻击。 容易击中要害。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '龙之俯冲', type: PokemonElementType.dragon, power: 100, description: '释放出骇人的杀气， 一边威慑一边撞击对手。 有时会使对手畏缩。' },
      { name: '起风', type: PokemonElementType.flying, power: 40, description: '用翅膀将刮起的狂风 袭向对手进行攻击。' },
    ],
  },
  hooh: {
    flavorText: 'Legends claim this POKéMON flies the world\'s skies continuously on its magnificent seven-colored wings.',
    stats: { hp: 106, attack: 130, defense: 90, specialAttack: 110, specialDefense: 154, speed: 90 },
    moves: [
      { name: '神圣之火', type: PokemonElementType.fire, power: 100, description: '用神秘的火焰 烧尽对手进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '起风', type: PokemonElementType.flying, power: 40, description: '用翅膀将刮起的狂风 袭向对手进行攻击。' },
      { name: '吹飞', type: PokemonElementType.normal, power: null, description: '吹飞对手，强制拉后备宝可梦上场。 如果对手为野生宝可梦， 战斗将直接结束。' },
    ],
  },
  celebi: {
    flavorText: '拥有能够穿越时光的力量。 在许多时代都留下了 将它视为森林之神的记录。',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: '回复封锁', type: PokemonElementType.psychic, power: null, description: '在５回合内 无法通过招式、特性或 携带的道具来回复ＨＰ。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
      { name: '治愈之愿', type: PokemonElementType.psychic, power: null, description: '虽然自己陷入濒死， 但可以治愈后备上场的 宝可梦的异常状态以及回复ＨＰ。' },
      { name: '自我再生', type: PokemonElementType.normal, power: null, description: '让细胞再生， 从而回复自己 最大ＨＰ的一半。' },
    ],
  },
  treecko: {
    flavorText: 'TREECKO has small hooks on the bottom of its feet that enable it to scale vertical walls. This POKéMON attacks by slamming foes with its thick tail.',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 65, specialDefense: 55, speed: 70 },
    moves: [
      { name: '吸取', type: PokemonElementType.grass, power: 20, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '超级吸取', type: PokemonElementType.grass, power: 40, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '拍击', type: PokemonElementType.normal, power: 40, description: '使用长长的尾巴或手等 拍打对手进行攻击。' },
      { name: '摔打', type: PokemonElementType.normal, power: 80, description: '使用长长的尾巴或藤蔓等 摔打对手进行攻击。' },
    ],
  },
  grovyle: {
    flavorText: 'The leaves growing out of GROVYLE’s body are convenient for camouflaging it from enemies in the forest. This POKéMON is a master at climbing trees in jungles.',
    stats: { hp: 50, attack: 65, defense: 45, specialAttack: 85, specialDefense: 65, speed: 95 },
    moves: [
      { name: '叶刃', type: PokemonElementType.grass, power: 90, description: '像用剑一般操纵叶片 切斩对手进行攻击。 容易击中要害。' },
      { name: '吸取', type: PokemonElementType.grass, power: 20, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '拍击', type: PokemonElementType.normal, power: 40, description: '使用长长的尾巴或手等 拍打对手进行攻击。' },
      { name: '摔打', type: PokemonElementType.normal, power: 80, description: '使用长长的尾巴或藤蔓等 摔打对手进行攻击。' },
    ],
  },
  sceptile: {
    flavorText: 'The leaves growing on SCEPTILE’s body are very sharp edged. This POKéMON is very agile - it leaps all over the branches of trees and jumps on its foe from above or behind.',
    stats: { hp: 70, attack: 85, defense: 65, specialAttack: 105, specialDefense: 85, speed: 120 },
    moves: [
      { name: '叶刃', type: PokemonElementType.grass, power: 90, description: '像用剑一般操纵叶片 切斩对手进行攻击。 容易击中要害。' },
      { name: '吸取', type: PokemonElementType.grass, power: 20, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '拍击', type: PokemonElementType.normal, power: 40, description: '使用长长的尾巴或手等 拍打对手进行攻击。' },
      { name: '摔打', type: PokemonElementType.normal, power: 80, description: '使用长长的尾巴或藤蔓等 摔打对手进行攻击。' },
    ],
  },
  torchic: {
    flavorText: 'TORCHIC sticks with its TRAINER, following behind with unsteady steps. This POKéMON breathes fire of over 1,800 degrees F, including fireballs that leave the foe scorched black.',
    stats: { hp: 45, attack: 60, defense: 40, specialAttack: 70, specialDefense: 50, speed: 45 },
    moves: [
      { name: '鹦鹉学舌', type: PokemonElementType.flying, power: null, description: '模仿对手使用的招式， 自己也使用相同招式。' },
      { name: '啄', type: PokemonElementType.flying, power: 35, description: '用尖锐的喙或角 刺向对手进行攻击。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '火焰旋涡', type: PokemonElementType.fire, power: 35, description: '将对手困在 激烈的火焰旋涡中， 在４～５回合内进行攻击。' },
    ],
  },
  combusken: {
    flavorText: 'COMBUSKEN toughens up its legs and thighs by running through fields and mountains. This POKéMON’s legs possess both speed and power, enabling it to dole out ten kicks in one second.',
    stats: { hp: 60, attack: 85, defense: 60, specialAttack: 85, specialDefense: 60, speed: 55 },
    moves: [
      { name: '冲天拳', type: PokemonElementType.fighting, power: 85, description: '用冲向天空般高高的上勾拳 顶起对手进行攻击。' },
      { name: '鹦鹉学舌', type: PokemonElementType.flying, power: null, description: '模仿对手使用的招式， 自己也使用相同招式。' },
      { name: '二连踢', type: PokemonElementType.fighting, power: 30, description: '用２只脚踢飞对手进行攻击。 连续２次给予伤害。' },
      { name: '啄', type: PokemonElementType.flying, power: 35, description: '用尖锐的喙或角 刺向对手进行攻击。' },
    ],
  },
  blaziken: {
    flavorText: 'Flames spout from its wrists, enveloping its knuckles. Its punches scorch its foes.',
    stats: { hp: 80, attack: 120, defense: 70, specialAttack: 110, specialDefense: 70, speed: 80 },
    moves: [
      { name: '冲天拳', type: PokemonElementType.fighting, power: 85, description: '用冲向天空般高高的上勾拳 顶起对手进行攻击。' },
      { name: '火焰踢', type: PokemonElementType.fire, power: 85, description: '攻击对手后， 有时会使其陷入灼伤状态。 也容易击中要害。' },
      { name: '鹦鹉学舌', type: PokemonElementType.flying, power: null, description: '模仿对手使用的招式， 自己也使用相同招式。' },
      { name: '二连踢', type: PokemonElementType.fighting, power: 30, description: '用２只脚踢飞对手进行攻击。 连续２次给予伤害。' },
    ],
  },
  marshtomp: {
    flavorText: 'The surface of MARSHTOMP’s body is enveloped by a thin, sticky film that enables it to live on land. This POKéMON plays in mud on beaches when the ocean tide is low.',
    stats: { hp: 70, attack: 85, defense: 70, specialAttack: 60, specialDefense: 70, speed: 50 },
    moves: [
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '浊流', type: PokemonElementType.water, power: 90, description: '向对手喷射 浑浊的水进行攻击。 有时会降低对手的命中率。' },
      { name: '水枪', type: PokemonElementType.water, power: 40, description: '向对手猛烈地喷射 水流进行攻击。' },
    ],
  },
  mudkip: {
    flavorText: 'The fin on MUDKIP’s head acts as highly sensitive radar. Using this fin to sense movements of water and air, this POKéMON can determine what is taking place around it without using its eyes.',
    stats: { hp: 50, attack: 70, defense: 50, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '水枪', type: PokemonElementType.water, power: 40, description: '向对手猛烈地喷射 水流进行攻击。' },
      { name: '潮旋', type: PokemonElementType.water, power: 35, description: '将对手困在激烈的 水流旋涡中， 在４～５回合内进行攻击。' },
    ],
  },
  swampert: {
    flavorText: 'SWAMPERT is very strong. It has enough power to easily drag a boulder weighing more than a ton. This POKéMON also has powerful vision that lets it see even in murky water.',
    stats: { hp: 100, attack: 110, defense: 90, specialAttack: 85, specialDefense: 90, speed: 60 },
    moves: [
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '浊流', type: PokemonElementType.water, power: 90, description: '向对手喷射 浑浊的水进行攻击。 有时会降低对手的命中率。' },
      { name: '水枪', type: PokemonElementType.water, power: 40, description: '向对手猛烈地喷射 水流进行攻击。' },
    ],
  },
  poochyena: {
    flavorText: 'At first sight, POOCHYENA takes a bite at anything that moves. This POKéMON chases after prey until the victim becomes exhausted. However, it may turn tail if the prey strikes back.',
    stats: { hp: 35, attack: 55, defense: 35, specialAttack: 30, specialDefense: 30, speed: 35 },
    moves: [
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '长嚎', type: PokemonElementType.normal, power: null, description: '大声吼叫提高气势， 从而提高自己的攻击。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
      { name: '咬住', type: PokemonElementType.dark, power: 60, description: '用尖锐的牙 咬住对手进行攻击。 有时会使对手畏缩。' },
    ],
  },
  mightyena: {
    flavorText: 'It chases down prey in a pack. It will never disobey the commands of a skilled Trainer.',
    stats: { hp: 70, attack: 90, defense: 70, specialAttack: 60, specialDefense: 60, speed: 70 },
    moves: [
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '长嚎', type: PokemonElementType.normal, power: null, description: '大声吼叫提高气势， 从而提高自己的攻击。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
      { name: '咬住', type: PokemonElementType.dark, power: 60, description: '用尖锐的牙 咬住对手进行攻击。 有时会使对手畏缩。' },
    ],
  },
  zigzagoon: {
    flavorText: '会用背上的硬毛摩擦树木， 留下代表自己地盘的标记。 性情比伽勒尔的蛇纹熊温驯。',
    stats: { hp: 38, attack: 30, defense: 41, specialAttack: 30, specialDefense: 41, speed: 60 },
    moves: [
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '腹鼓', type: PokemonElementType.normal, power: null, description: '将自己的ＨＰ减少到 最大ＨＰ的一半， 从而最大限度提高自己的攻击。' },
      { name: '飞弹针', type: PokemonElementType.bug, power: 25, description: '向对手发射 锐针进行攻击。 连续攻击２～５次。' },
    ],
  },
  linoone: {
    flavorText: '体毛拥有良好的韧度与质感。 用它身上掉下来的毛制成的 剃须刷是最上等的高级货。',
    stats: { hp: 78, attack: 70, defense: 61, specialAttack: 50, specialDefense: 61, speed: 100 },
    moves: [
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '腹鼓', type: PokemonElementType.normal, power: null, description: '将自己的ＨＰ减少到 最大ＨＰ的一半， 从而最大限度提高自己的攻击。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
    ],
  },
  wurmple: {
    flavorText: 'Using the spikes on its rear end, WURMPLE peels the bark off trees and feeds on the sap that oozes out. This POKéMON’s feet are tipped with suction pads that allow it to cling to glass without slipping.',
    stats: { hp: 45, attack: 45, defense: 35, specialAttack: 20, specialDefense: 30, speed: 20 },
    moves: [
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '吐丝', type: PokemonElementType.bug, power: null, description: '用口中吐出的丝缠绕对手， 从而大幅降低对手的速度。' },
      { name: '撞击', type: PokemonElementType.normal, power: 40, description: '用整个身体 撞向对手进行攻击。' },
    ],
  },
  silcoon: {
    flavorText: 'SILCOON tethers itself to a tree branch using silk to keep from falling. There, this POKéMON hangs quietly while it awaits evolution. It peers out of the silk cocoon through a small hole.',
    stats: { hp: 50, attack: 35, defense: 55, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
    ],
  },
  beautifly: {
    flavorText: 'BEAUTIFLY’s favorite food is the sweet pollen of flowers. If you want to see this POKéMON, just leave a potted flower by an open window. BEAUTIFLY is sure to come looking for pollen.',
    stats: { hp: 60, attack: 70, defense: 50, specialAttack: 100, specialDefense: 50, speed: 65 },
    moves: [
      { name: '晨光', type: PokemonElementType.normal, power: null, description: '回复自己的ＨＰ。 根据天气的不同， 回复量也会有所变化。' },
      { name: '银色旋风', type: PokemonElementType.bug, power: 60, description: '在风中掺入鳞粉攻击对手。 有时会提高自己的全部能力。' },
      { name: '麻痹粉', type: PokemonElementType.grass, power: null, description: '撒出麻痹粉， 从而让对手陷入麻痹状态。' },
      { name: '起风', type: PokemonElementType.flying, power: 40, description: '用翅膀将刮起的狂风 袭向对手进行攻击。' },
    ],
  },
  cascoon: {
    flavorText: 'CASCOON makes its protective cocoon by wrapping its body entirely with a fine silk from its mouth. Once the silk goes around its body, it hardens. This POKéMON prepares for its evolution inside the cocoon.',
    stats: { hp: 50, attack: 35, defense: 55, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
    ],
  },
  dustox: {
    flavorText: 'DUSTOX is instinctively drawn to light. Swarms of this POKéMON are attracted by the bright lights of cities, where they wreak havoc by stripping the leaves off roadside trees for food.',
    stats: { hp: 60, attack: 50, defense: 70, specialAttack: 50, specialDefense: 90, speed: 65 },
    moves: [
      { name: '月光', type: PokemonElementType.normal, power: null, description: '回复自己的ＨＰ。 根据天气的不同， 回复量也会有所变化。' },
      { name: '银色旋风', type: PokemonElementType.bug, power: 60, description: '在风中掺入鳞粉攻击对手。 有时会提高自己的全部能力。' },
      { name: '起风', type: PokemonElementType.flying, power: 40, description: '用翅膀将刮起的狂风 袭向对手进行攻击。' },
      { name: '吹飞', type: PokemonElementType.normal, power: null, description: '吹飞对手，强制拉后备宝可梦上场。 如果对手为野生宝可梦， 战斗将直接结束。' },
    ],
  },
  lotad: {
    flavorText: '会走来走去寻找清水。 如果长时间不饮水的话， 头上的叶子就会枯萎。',
    stats: { hp: 40, attack: 30, defense: 30, specialAttack: 40, specialDefense: 50, speed: 30 },
    moves: [
      { name: '白雾', type: PokemonElementType.ice, power: null, description: '用白雾覆盖身体。 在５回合内不会让对手 降低自己的能力。' },
      { name: '吸取', type: PokemonElementType.grass, power: 20, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '超级吸取', type: PokemonElementType.grass, power: 40, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '自然之力', type: PokemonElementType.normal, power: null, description: '用自然之力进行攻击。 根据所使用场所的不同， 使出的招式也会有所变化。' },
    ],
  },
  lombre: {
    flavorText: '傍晚时开始活动的 夜行性宝可梦。 喜欢吃河底的水苔。',
    stats: { hp: 60, attack: 50, defense: 50, specialAttack: 60, specialDefense: 70, speed: 50 },
    moves: [
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
      { name: '吸取', type: PokemonElementType.grass, power: 20, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '击掌奇袭', type: PokemonElementType.normal, power: 40, description: '进行先制攻击，使对手畏缩。 要在出场后立刻使出才能成功。' },
    ],
  },
  ludicolo: {
    flavorText: '快乐的音乐节奏会让 乐天河童的细胞活性化， 使其发挥出强大的力量。',
    stats: { hp: 80, attack: 70, defense: 70, specialAttack: 90, specialDefense: 100, speed: 70 },
    moves: [
      { name: '吸取', type: PokemonElementType.grass, power: 20, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '自然之力', type: PokemonElementType.normal, power: null, description: '用自然之力进行攻击。 根据所使用场所的不同， 使出的招式也会有所变化。' },
      { name: '惊吓', type: PokemonElementType.ghost, power: 30, description: '用尖叫声等 突然惊吓对手进行攻击。 有时会使对手畏缩。' },
      { name: '叫声', type: PokemonElementType.normal, power: null, description: '让对手听可爱的叫声， 引开注意力使其疏忽， 从而降低对手的攻击。' },
    ],
  },
  seedot: {
    flavorText: '在它一动不动的时候， 看上去和树果没有分别。 以吓唬来啄食自己的宝可梦为乐。',
    stats: { hp: 40, attack: 40, defense: 50, specialAttack: 30, specialDefense: 30, speed: 30 },
    moves: [
      { name: '生长', type: PokemonElementType.normal, power: null, description: '让身体一下子长大， 从而提高攻击和特攻。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
      { name: '光合作用', type: PokemonElementType.grass, power: null, description: '回复自己的ＨＰ。 根据天气的不同， 回复量也会有所变化。' },
      { name: '大爆炸', type: PokemonElementType.normal, power: 250, description: '引发大爆炸， 攻击自己周围所有的宝可梦。 使用后自己会陷入濒死。' },
    ],
  },
  nuzleaf: {
    flavorText: '栖息于森林的深处。 会用头上的叶子做成笛子， 吹出令人感到不安的音色。',
    stats: { hp: 70, attack: 70, defense: 40, specialAttack: 60, specialDefense: 40, speed: 60 },
    moves: [
      { name: '旋风刀', type: PokemonElementType.normal, power: 80, description: '制造风之刃， 于第２回合攻击对手。 容易击中要害。' },
      { name: '神通力', type: PokemonElementType.psychic, power: 80, description: '发出看不见的 神奇力量进行攻击。 有时会使对手畏缩。' },
      { name: '生长', type: PokemonElementType.normal, power: null, description: '让身体一下子长大， 从而提高攻击和特攻。' },
      { name: '击掌奇袭', type: PokemonElementType.normal, power: 40, description: '进行先制攻击，使对手畏缩。 要在出场后立刻使出才能成功。' },
    ],
  },
  shiftry: {
    flavorText: '过去被敬畏为森林之神的宝可梦。 有着读取对手想法并 抢先一步行动的能力。',
    stats: { hp: 90, attack: 100, defense: 60, specialAttack: 90, specialDefense: 60, speed: 80 },
    moves: [
      { name: '生长', type: PokemonElementType.normal, power: null, description: '让身体一下子长大， 从而提高攻击和特攻。' },
      { name: '拍击', type: PokemonElementType.normal, power: 40, description: '使用长长的尾巴或手等 拍打对手进行攻击。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
      { name: '自然之力', type: PokemonElementType.normal, power: null, description: '用自然之力进行攻击。 根据所使用场所的不同， 使出的招式也会有所变化。' },
    ],
  },
  taillow: {
    flavorText: 'TAILLOW courageously stands its ground against foes, however strong they may be. This gutsy POKéMON will remain defiant even after a loss. On the other hand, it cries loudly if it becomes hungry.',
    stats: { hp: 40, attack: 55, defense: 30, specialAttack: 30, specialDefense: 30, speed: 85 },
    moves: [
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '啄', type: PokemonElementType.flying, power: 35, description: '用尖锐的喙或角 刺向对手进行攻击。' },
      { name: '聚气', type: PokemonElementType.normal, power: null, description: '深深地吸口气，集中精神。 自己的攻击 会变得容易击中要害。' },
      { name: '电光一闪', type: PokemonElementType.normal, power: 40, description: '以迅雷不及掩耳之势扑向对手。 必定能够先制攻击。' },
    ],
  },
  swellow: {
    flavorText: 'SWELLOW flies high above our heads, making graceful arcs in the sky. This POKéMON dives at a steep angle as soon as it spots its prey. The hapless prey is tightly grasped by SWELLOW’s clawed feet, preventing escape.',
    stats: { hp: 60, attack: 85, defense: 60, specialAttack: 75, specialDefense: 50, speed: 125 },
    moves: [
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '啄', type: PokemonElementType.flying, power: 35, description: '用尖锐的喙或角 刺向对手进行攻击。' },
      { name: '聚气', type: PokemonElementType.normal, power: null, description: '深深地吸口气，集中精神。 自己的攻击 会变得容易击中要害。' },
      { name: '电光一闪', type: PokemonElementType.normal, power: 40, description: '以迅雷不及掩耳之势扑向对手。 必定能够先制攻击。' },
    ],
  },
  wingull: {
    flavorText: '为了轻盈，骨骼空空的。 用大大的翅膀迎风， 向着浩瀚天空飞翔。',
    stats: { hp: 40, attack: 30, defense: 30, specialAttack: 55, specialDefense: 30, speed: 85 },
    moves: [
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '白雾', type: PokemonElementType.ice, power: null, description: '用白雾覆盖身体。 在５回合内不会让对手 降低自己的能力。' },
      { name: '超音波', type: PokemonElementType.normal, power: null, description: '从身体发出 特殊的音波， 从而使对手混乱。' },
      { name: '追打', type: PokemonElementType.dark, power: 40, description: '当对手替换宝可梦上场时 使出此招式的话， 能够以２倍的威力进行攻击。' },
    ],
  },
  pelipper: {
    flavorText: '鸟嘴鼓得大大的， 幼儿园小朋友这么大的孩子 正好能完全进入。',
    stats: { hp: 60, attack: 50, defense: 100, specialAttack: 95, specialDefense: 70, speed: 65 },
    moves: [
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
      { name: '喷出', type: PokemonElementType.normal, power: null, description: '将积蓄的力量 撞向对手进行攻击。 积蓄得越多，威力越大。' },
      { name: '吞下', type: PokemonElementType.normal, power: null, description: '将积蓄的力量吞下， 从而回复自己的ＨＰ。 积蓄得越多，回复越大。' },
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
    ],
  },
  ralts: {
    flavorText: '能敏锐地捕捉人和宝可梦的感情。 感受到敌意后就会躲进暗处。',
    stats: { hp: 28, attack: 25, defense: 25, specialAttack: 45, specialDefense: 35, speed: 40 },
    moves: [
      { name: '瞬间移动', type: PokemonElementType.psychic, power: null, description: '停止和野生宝可梦战斗并逃走。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
      { name: '念力', type: PokemonElementType.psychic, power: 50, description: '向对手发送 微弱的念力进行攻击。 有时会使对手混乱。' },
      { name: '预知未来', type: PokemonElementType.psychic, power: 120, description: '在使用招式２回合后， 向对手发送一团念力进行攻击。' },
    ],
  },
  kirlia: {
    flavorText: '当训练家高兴的时候， 奇鲁莉安会充满能量， 开心地转着圈跳舞。',
    stats: { hp: 38, attack: 35, defense: 35, specialAttack: 65, specialDefense: 55, speed: 50 },
    moves: [
      { name: '瞬间移动', type: PokemonElementType.psychic, power: null, description: '停止和野生宝可梦战斗并逃走。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
      { name: '念力', type: PokemonElementType.psychic, power: 50, description: '向对手发送 微弱的念力进行攻击。 有时会使对手混乱。' },
      { name: '预知未来', type: PokemonElementType.psychic, power: 120, description: '在使用招式２回合后， 向对手发送一团念力进行攻击。' },
    ],
  },
  gardevoir: {
    flavorText: '有着预知未来的能力。 在保护训练家的时候， 会发挥出最强的力量。',
    stats: { hp: 68, attack: 65, defense: 65, specialAttack: 125, specialDefense: 115, speed: 80 },
    moves: [
      { name: '瞬间移动', type: PokemonElementType.psychic, power: null, description: '停止和野生宝可梦战斗并逃走。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
      { name: '念力', type: PokemonElementType.psychic, power: 50, description: '向对手发送 微弱的念力进行攻击。 有时会使对手混乱。' },
      { name: '预知未来', type: PokemonElementType.psychic, power: 120, description: '在使用招式２回合后， 向对手发送一团念力进行攻击。' },
    ],
  },
  surskit: {
    flavorText: '在水面像滑行一样移动。 为了寻找食物， 几次三番和滴蛛打架。',
    stats: { hp: 40, attack: 30, defense: 32, specialAttack: 50, specialDefense: 52, speed: 65 },
    moves: [
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
      { name: '白雾', type: PokemonElementType.ice, power: null, description: '用白雾覆盖身体。 在５回合内不会让对手 降低自己的能力。' },
      { name: '甜甜香气', type: PokemonElementType.normal, power: null, description: '用香气大幅降低对手的闪避率。' },
    ],
  },
  masquerain: {
    flavorText: '用触角上的眼珠花纹威吓敌人。 用４根翅膀前后左右灵活飞行。',
    stats: { hp: 70, attack: 60, defense: 62, specialAttack: 100, specialDefense: 82, speed: 80 },
    moves: [
      { name: '银色旋风', type: PokemonElementType.bug, power: 60, description: '在风中掺入鳞粉攻击对手。 有时会提高自己的全部能力。' },
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
      { name: '麻痹粉', type: PokemonElementType.grass, power: null, description: '撒出麻痹粉， 从而让对手陷入麻痹状态。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
    ],
  },
  shroomish: {
    flavorText: 'SHROOMISH live in damp soil in the dark depths of forests. They are often found keeping still under fallen leaves. This POKéMON feeds on compost that is made up of fallen, rotted leaves.',
    stats: { hp: 60, attack: 40, defense: 60, specialAttack: 40, specialDefense: 60, speed: 35 },
    moves: [
      { name: '蘑菇孢子', type: PokemonElementType.grass, power: null, description: '沙沙沙地撒满具有 催眠效果的孢子， 从而让对手陷入睡眠状态。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
      { name: '麻痹粉', type: PokemonElementType.grass, power: null, description: '撒出麻痹粉， 从而让对手陷入麻痹状态。' },
      { name: '生长', type: PokemonElementType.normal, power: null, description: '让身体一下子长大， 从而提高攻击和特攻。' },
    ],
  },
  breloom: {
    flavorText: 'BRELOOM closes in on its foe with light and sprightly footwork, then throws punches with its stretchy arms. This POKéMON’s fighting technique puts boxers to shame.',
    stats: { hp: 60, attack: 130, defense: 80, specialAttack: 60, specialDefense: 60, speed: 70 },
    moves: [
      { name: '冲天拳', type: PokemonElementType.fighting, power: 85, description: '用冲向天空般高高的上勾拳 顶起对手进行攻击。' },
      { name: '音速拳', type: PokemonElementType.fighting, power: 40, description: '以迅雷不及掩耳之势出拳。 必定能够先制攻击。' },
      { name: '心之眼', type: PokemonElementType.normal, power: null, description: '用心感受对手的行动， 下次攻击必定 会击中对手。' },
      { name: '麻痹粉', type: PokemonElementType.grass, power: null, description: '撒出麻痹粉， 从而让对手陷入麻痹状态。' },
    ],
  },
  nincada: {
    flavorText: '因为长时间生活在地下， 所以眼睛几乎什么都看不到。 会靠触角来探察周围的情况。',
    stats: { hp: 31, attack: 45, defense: 90, specialAttack: 30, specialDefense: 30, speed: 40 },
    moves: [
      { name: '心之眼', type: PokemonElementType.normal, power: null, description: '用心感受对手的行动， 下次攻击必定 会击中对手。' },
      { name: '吸血', type: PokemonElementType.bug, power: 80, description: '吸取血液攻击对手。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
    ],
  },
  slakoth: {
    flavorText: 'SLAKOTH lolls around for over twenty hours every day. Because it moves so little, it does not need much food. This POKéMON’s sole daily meal consists of just three leaves.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 35, specialDefense: 35, speed: 30 },
    moves: [
      { name: '偷懒', type: PokemonElementType.normal, power: null, description: '偷懒休息。 回复自己最大ＨＰ的一半。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
      { name: '哈欠', type: PokemonElementType.normal, power: null, description: '打个大哈欠引起睡意。 在下一回合让对手陷入睡眠状态。' },
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
    ],
  },
  vigoroth: {
    flavorText: 'VIGOROTH is always itching and agitated to go on a wild rampage. It simply can’t tolerate sitting still for even a minute. This POKéMON’s stress level rises if it can’t be moving constantly.',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 55, specialDefense: 55, speed: 90 },
    moves: [
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
      { name: '劈开', type: PokemonElementType.normal, power: 70, description: '用爪子或镰刀等 劈开对手进行攻击。 容易击中要害。' },
      { name: '聚气', type: PokemonElementType.normal, power: null, description: '深深地吸口气，集中精神。 自己的攻击 会变得容易击中要害。' },
    ],
  },
  slaking: {
    flavorText: 'SLAKING spends all day lying down and lolling about. It eats grass growing within its reach. If it eats all the grass it can reach, this POKéMON reluctantly moves to another spot.',
    stats: { hp: 150, attack: 160, defense: 100, specialAttack: 95, specialDefense: 65, speed: 100 },
    moves: [
      { name: '偷懒', type: PokemonElementType.normal, power: null, description: '偷懒休息。 回复自己最大ＨＰ的一半。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
      { name: '哈欠', type: PokemonElementType.normal, power: null, description: '打个大哈欠引起睡意。 在下一回合让对手陷入睡眠状态。' },
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
    ],
  },
  ninjask: {
    flavorText: '如果一直听它的叫声， 就会让人头痛不止。 会以眼睛无法看清的速度移动。',
    stats: { hp: 61, attack: 90, defense: 45, specialAttack: 50, specialDefense: 50, speed: 160 },
    moves: [
      { name: '心之眼', type: PokemonElementType.normal, power: null, description: '用心感受对手的行动， 下次攻击必定 会击中对手。' },
      { name: '吸血', type: PokemonElementType.bug, power: 80, description: '吸取血液攻击对手。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
    ],
  },
  shedinja: {
    flavorText: '它是一种在土居忍士进化时， 会神不知鬼不觉地出现在 精灵球里的神奇宝可梦。',
    stats: { hp: 1, attack: 90, defense: 45, specialAttack: 30, specialDefense: 30, speed: 40 },
    moves: [
      { name: '怨念', type: PokemonElementType.ghost, power: null, description: '因对手的招式而陷入濒死时 给对手施加怨念， 让该招式的ＰＰ变成０。' },
      { name: '心之眼', type: PokemonElementType.normal, power: null, description: '用心感受对手的行动， 下次攻击必定 会击中对手。' },
      { name: '吸血', type: PokemonElementType.bug, power: 80, description: '吸取血液攻击对手。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
    ],
  },
  whismur: {
    flavorText: '叫声的音量超过了１００分贝。 如果听到它在近处大叫， 之后的一整天都会头痛不止。',
    stats: { hp: 64, attack: 51, defense: 23, specialAttack: 51, specialDefense: 23, speed: 28 },
    moves: [
      { name: '长嚎', type: PokemonElementType.normal, power: null, description: '大声吼叫提高气势， 从而提高自己的攻击。' },
      { name: '踩踏', type: PokemonElementType.normal, power: 65, description: '用大脚踩踏对手进行攻击。 有时会使对手畏缩。' },
      { name: '超音波', type: PokemonElementType.normal, power: null, description: '从身体发出 特殊的音波， 从而使对手混乱。' },
      { name: '拍击', type: PokemonElementType.normal, power: 40, description: '使用长长的尾巴或手等 拍打对手进行攻击。' },
    ],
  },
  loudred: {
    flavorText: '它的耳朵有着扬声器的功能。 会从耳朵中发射出威力足以 掀翻一整座房子的音波。',
    stats: { hp: 84, attack: 71, defense: 43, specialAttack: 71, specialDefense: 43, speed: 48 },
    moves: [
      { name: '长嚎', type: PokemonElementType.normal, power: null, description: '大声吼叫提高气势， 从而提高自己的攻击。' },
      { name: '踩踏', type: PokemonElementType.normal, power: 65, description: '用大脚踩踏对手进行攻击。 有时会使对手畏缩。' },
      { name: '超音波', type: PokemonElementType.normal, power: null, description: '从身体发出 特殊的音波， 从而使对手混乱。' },
      { name: '拍击', type: PokemonElementType.normal, power: 40, description: '使用长长的尾巴或手等 拍打对手进行攻击。' },
    ],
  },
  exploud: {
    flavorText: '以前的人们曽利用 爆音怪发出的巨响， 与相隔遥远的城镇居民联系。',
    stats: { hp: 104, attack: 91, defense: 63, specialAttack: 91, specialDefense: 73, speed: 68 },
    moves: [
      { name: '长嚎', type: PokemonElementType.normal, power: null, description: '大声吼叫提高气势， 从而提高自己的攻击。' },
      { name: '踩踏', type: PokemonElementType.normal, power: 65, description: '用大脚踩踏对手进行攻击。 有时会使对手畏缩。' },
      { name: '超音波', type: PokemonElementType.normal, power: null, description: '从身体发出 特殊的音波， 从而使对手混乱。' },
      { name: '拍击', type: PokemonElementType.normal, power: 40, description: '使用长长的尾巴或手等 拍打对手进行攻击。' },
    ],
  },
  makuhita: {
    flavorText: '最早是从其他地区被带到这儿来的， 但现在阿罗拉的幕下力士比较有名。',
    stats: { hp: 72, attack: 60, defense: 30, specialAttack: 20, specialDefense: 30, speed: 25 },
    moves: [
      { name: '猛推', type: PokemonElementType.fighting, power: 15, description: '用张开着的双手 猛推对手进行攻击。 连续攻击２～５次。' },
      { name: '借力摔', type: PokemonElementType.fighting, power: 70, description: '会在对手之后进行攻击。 但是自己的攻击必定会命中。' },
      { name: '清醒', type: PokemonElementType.normal, power: 70, description: '对于麻痹状态下的对手， 威力会变成２倍。 但相反对手的麻痹也会被治愈。' },
      { name: '腹鼓', type: PokemonElementType.normal, power: null, description: '将自己的ＨＰ减少到 最大ＨＰ的一半， 从而最大限度提高自己的攻击。' },
    ],
  },
  hariyama: {
    flavorText: '因怪力而为人所知， 但上了年纪后就会停止战斗， 转而负责训练幕下力士。',
    stats: { hp: 144, attack: 120, defense: 60, specialAttack: 40, specialDefense: 60, speed: 50 },
    moves: [
      { name: '猛推', type: PokemonElementType.fighting, power: 15, description: '用张开着的双手 猛推对手进行攻击。 连续攻击２～５次。' },
      { name: '借力摔', type: PokemonElementType.fighting, power: 70, description: '会在对手之后进行攻击。 但是自己的攻击必定会命中。' },
      { name: '清醒', type: PokemonElementType.normal, power: 70, description: '对于麻痹状态下的对手， 威力会变成２倍。 但相反对手的麻痹也会被治愈。' },
      { name: '腹鼓', type: PokemonElementType.normal, power: null, description: '将自己的ＨＰ减少到 最大ＨＰ的一半， 从而最大限度提高自己的攻击。' },
    ],
  },
  azurill: {
    flavorText: '球形的尾巴拥有如同 橡胶球一般的弹性，里面 贮满了它成长所需的营养。',
    stats: { hp: 50, attack: 20, defense: 40, specialAttack: 20, specialDefense: 40, speed: 20 },
    moves: [
      { name: '跃起', type: PokemonElementType.normal, power: null, description: '也不攻击只是一蹦一蹦地跳， 什么都不会发生……' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
      { name: '摔打', type: PokemonElementType.normal, power: 80, description: '使用长长的尾巴或藤蔓等 摔打对手进行攻击。' },
      { name: '摇尾巴', type: PokemonElementType.normal, power: null, description: '可爱地左右摇晃尾巴， 诱使对手疏忽大意。 会降低对手的防御。' },
    ],
  },
  nosepass: {
    flavorText: '朝北鼻鼻子上的磁铁绝对不会失灵， 所以是训练家旅行时的良伴。',
    stats: { hp: 30, attack: 45, defense: 135, specialAttack: 45, specialDefense: 90, speed: 30 },
    moves: [
      { name: '锁定', type: PokemonElementType.normal, power: null, description: '紧紧瞄准对手， 下次攻击必定会打中。' },
      { name: '落石', type: PokemonElementType.rock, power: 50, description: '拿起小岩石， 投掷对手进行攻击。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
      { name: '电磁炮', type: PokemonElementType.electric, power: 120, description: '发射大炮一样的 电流进行攻击。 让对手陷入麻痹状态。' },
    ],
  },
  delcatty: {
    flavorText: 'DELCATTY prefers to live an unfettered existence in which it can do as it pleases at its own pace. Because this POKéMON eats and sleeps whenever it decides, its daily routines are completely random.',
    stats: { hp: 70, attack: 65, defense: 65, specialAttack: 55, specialDefense: 55, speed: 90 },
    moves: [
      { name: '连环巴掌', type: PokemonElementType.normal, power: 15, description: '用连环巴掌 拍打对手进行攻击。 连续攻击２～５次。' },
      { name: '唱歌', type: PokemonElementType.normal, power: null, description: '让对手听舒适、 美妙的歌声， 从而陷入睡眠状态。' },
      { name: '叫声', type: PokemonElementType.normal, power: null, description: '让对手听可爱的叫声， 引开注意力使其疏忽， 从而降低对手的攻击。' },
      { name: '迷人', type: PokemonElementType.normal, power: null, description: '♂诱惑♀或♀诱惑♂， 让对手着迷。 对手将很难使出招式。' },
    ],
  },
  skitty: {
    flavorText: 'SKITTY has the habit of becoming fascinated by moving objects and chasing them around. This POKéMON is known to chase after its own tail and become dizzy.',
    stats: { hp: 50, attack: 45, defense: 45, specialAttack: 35, specialDefense: 35, speed: 50 },
    moves: [
      { name: '借助', type: PokemonElementType.normal, power: null, description: '向我方紧急求助， 从我方宝可梦已学会的 招式中随机使用１个。' },
      { name: '连环巴掌', type: PokemonElementType.normal, power: 15, description: '用连环巴掌 拍打对手进行攻击。 连续攻击２～５次。' },
      { name: '唱歌', type: PokemonElementType.normal, power: null, description: '让对手听舒适、 美妙的歌声， 从而陷入睡眠状态。' },
      { name: '治愈铃声', type: PokemonElementType.normal, power: null, description: '让同伴听舒适的铃音， 从而治愈我方全员的异常状态。' },
    ],
  },
  sableye: {
    flavorText: '非常喜欢宝石， 因此到处追着小碎钻。 但却被尖牙陆鲨半路夺走。',
    stats: { hp: 50, attack: 75, defense: 75, specialAttack: 65, specialDefense: 65, speed: 50 },
    moves: [
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '黑色目光', type: PokemonElementType.normal, power: null, description: '用好似要勾人心魂的黑色目光 一动不动地凝视对手， 使其不能从战斗中逃走。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '击掌奇袭', type: PokemonElementType.normal, power: 40, description: '进行先制攻击，使对手畏缩。 要在出场后立刻使出才能成功。' },
    ],
  },
  mawile: {
    flavorText: '狡黠而又恐怖的宝可梦。 用可爱的举止让人麻痹大意， 然后出其不意地用大颚一口吞下。',
    stats: { hp: 50, attack: 85, defense: 85, specialAttack: 55, specialDefense: 55, speed: 50 },
    moves: [
      { name: '夹住', type: PokemonElementType.normal, power: 55, description: '将对手从两侧夹住， 给予伤害。' },
      { name: '喷出', type: PokemonElementType.normal, power: null, description: '将积蓄的力量 撞向对手进行攻击。 积蓄得越多，威力越大。' },
      { name: '吞下', type: PokemonElementType.normal, power: null, description: '将积蓄的力量吞下， 从而回复自己的ＨＰ。 积蓄得越多，回复越大。' },
      { name: '蓄力', type: PokemonElementType.normal, power: null, description: '积蓄力量， 提高自己的防御和特防。 最多积蓄３次。' },
    ],
  },
  aron: {
    flavorText: '食用铁矿石，偶尔也会吃 铁路的轨道，从而打造出 保护身体的钢铁盔甲。',
    stats: { hp: 50, attack: 70, defense: 100, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: '金属音', type: PokemonElementType.steel, power: null, description: '让对手听摩擦金属般 讨厌的声音。 大幅降低对手的特防。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
      { name: '金属爪', type: PokemonElementType.steel, power: 50, description: '用钢铁之爪 劈开对手进行攻击。 有时会提高自己的攻击。' },
      { name: '吼叫', type: PokemonElementType.normal, power: null, description: '放走对手，强制拉后备宝可梦上场。 如果对手为野生宝可梦， 战斗将直接结束。' },
    ],
  },
  lairon: {
    flavorText: '由于可多拉所栖息的山上 有着丰富的泉水和铁矿石， 因此经常会与人类发生争端。',
    stats: { hp: 60, attack: 90, defense: 140, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: '金属音', type: PokemonElementType.steel, power: null, description: '让对手听摩擦金属般 讨厌的声音。 大幅降低对手的特防。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
      { name: '金属爪', type: PokemonElementType.steel, power: 50, description: '用钢铁之爪 劈开对手进行攻击。 有时会提高自己的攻击。' },
      { name: '吼叫', type: PokemonElementType.normal, power: null, description: '放走对手，强制拉后备宝可梦上场。 如果对手为野生宝可梦， 战斗将直接结束。' },
    ],
  },
  aggron: {
    flavorText: '会用能够刺穿铁板的 锐利尖角在撞击敌人的 同时攻击对方。',
    stats: { hp: 70, attack: 110, defense: 180, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: '金属音', type: PokemonElementType.steel, power: null, description: '让对手听摩擦金属般 讨厌的声音。 大幅降低对手的特防。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
      { name: '金属爪', type: PokemonElementType.steel, power: 50, description: '用钢铁之爪 劈开对手进行攻击。 有时会提高自己的攻击。' },
      { name: '吼叫', type: PokemonElementType.normal, power: null, description: '放走对手，强制拉后备宝可梦上场。 如果对手为野生宝可梦， 战斗将直接结束。' },
    ],
  },
  meditite: {
    flavorText: 'MEDITITE undertakes rigorous mental training deep in the mountains. However, whenever it meditates, this POKéMON always loses its concentration and focus. As a result, its training never ends.',
    stats: { hp: 30, attack: 40, defense: 55, specialAttack: 40, specialDefense: 55, speed: 60 },
    moves: [
      { name: '瑜伽姿势', type: PokemonElementType.psychic, power: null, description: '唤醒身体深处 沉睡的力量， 从而提高自己的攻击。' },
      { name: '心之眼', type: PokemonElementType.normal, power: null, description: '用心感受对手的行动， 下次攻击必定 会击中对手。' },
      { name: '飞膝踢', type: PokemonElementType.fighting, power: 130, description: '跳起后用膝盖撞对手进行攻击。 如果撞偏则自己会受到伤害。' },
      { name: '自我再生', type: PokemonElementType.normal, power: null, description: '让细胞再生， 从而回复自己 最大ＨＰ的一半。' },
    ],
  },
  medicham: {
    flavorText: 'It is said that through meditation, MEDICHAM heightens energy inside its body and sharpens its sixth sense. This POKéMON hides its presence by merging itself with fields and mountains.',
    stats: { hp: 60, attack: 60, defense: 75, specialAttack: 60, specialDefense: 75, speed: 80 },
    moves: [
      { name: '瑜伽姿势', type: PokemonElementType.psychic, power: null, description: '唤醒身体深处 沉睡的力量， 从而提高自己的攻击。' },
      { name: '心之眼', type: PokemonElementType.normal, power: null, description: '用心感受对手的行动， 下次攻击必定 会击中对手。' },
      { name: '飞膝踢', type: PokemonElementType.fighting, power: 130, description: '跳起后用膝盖撞对手进行攻击。 如果撞偏则自己会受到伤害。' },
      { name: '自我再生', type: PokemonElementType.normal, power: null, description: '让细胞再生， 从而回复自己 最大ＨＰ的一半。' },
    ],
  },
  electrike: {
    flavorText: '通过空气与体毛的摩擦产生静电。 落雷兽如果奔跑， 会发出噼里啪啦的声音。',
    stats: { hp: 40, attack: 45, defense: 40, specialAttack: 65, specialDefense: 40, speed: 65 },
    moves: [
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '长嚎', type: PokemonElementType.normal, power: null, description: '大声吼叫提高气势， 从而提高自己的攻击。' },
      { name: '电光', type: PokemonElementType.electric, power: 65, description: '让电流覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
    ],
  },
  manectric: {
    flavorText: '在不自然的雷云之下有着雷电兽。 听说会用和雷同等的速度奔驰。',
    stats: { hp: 70, attack: 75, defense: 60, specialAttack: 105, specialDefense: 60, speed: 105 },
    moves: [
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '长嚎', type: PokemonElementType.normal, power: null, description: '大声吼叫提高气势， 从而提高自己的攻击。' },
      { name: '电光', type: PokemonElementType.electric, power: 65, description: '让电流覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
    ],
  },
  plusle: {
    flavorText: 'PLUSLE always acts as a cheerleader for its partners. Whenever a teammate puts out a good effort in battle, this POKéMON shorts out its body to create the crackling noises of sparks to show its joy.',
    stats: { hp: 60, attack: 50, defense: 40, specialAttack: 85, specialDefense: 75, speed: 95 },
    moves: [
      { name: '电光', type: PokemonElementType.electric, power: 65, description: '让电流覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
      { name: '假哭', type: PokemonElementType.dark, power: null, description: '装哭流泪。 使对手不知所措， 从而大幅降低对手的特防。' },
      { name: '电光一闪', type: PokemonElementType.normal, power: 40, description: '以迅雷不及掩耳之势扑向对手。 必定能够先制攻击。' },
    ],
  },
  minun: {
    flavorText: 'MINUN is more concerned about cheering on its partners than its own safety. It shorts out the electricity in its body to create brilliant showers of sparks to cheer on its teammates.',
    stats: { hp: 60, attack: 40, defense: 50, specialAttack: 75, specialDefense: 85, speed: 95 },
    moves: [
      { name: '电光', type: PokemonElementType.electric, power: 65, description: '让电流覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
      { name: '电光一闪', type: PokemonElementType.normal, power: 40, description: '以迅雷不及掩耳之势扑向对手。 必定能够先制攻击。' },
      { name: '接棒', type: PokemonElementType.normal, power: null, description: '和后备宝可梦进行替换。 换上的宝可梦能直接继承 其能力的变化。' },
    ],
  },
  illumise: {
    flavorText: 'ILLUMISE attracts a swarm of VOLBEAT using a sweet fragrance. Once the VOLBEAT have gathered, this POKéMON leads the lit-up swarm in drawing geometric designs on the canvas of the night sky.',
    stats: { hp: 65, attack: 47, defense: 75, specialAttack: 73, specialDefense: 85, speed: 85 },
    moves: [
      { name: '月光', type: PokemonElementType.normal, power: null, description: '回复自己的ＨＰ。 根据天气的不同， 回复量也会有所变化。' },
      { name: '吹捧', type: PokemonElementType.dark, power: null, description: '吹捧对手，使其混乱。 同时还会提高对手的特攻。' },
      { name: '祈愿', type: PokemonElementType.normal, power: null, description: '在下一回合回复自己或是 替换出场的宝可梦最大ＨＰ的一半。' },
      { name: '甜甜香气', type: PokemonElementType.normal, power: null, description: '用香气大幅降低对手的闪避率。' },
    ],
  },
  volbeat: {
    flavorText: 'With the arrival of night, VOLBEAT emits light from its tail. It communicates with others by adjusting the intensity and flashing of its light. This POKéMON is attracted by the sweet aroma of ILLUMISE.',
    stats: { hp: 65, attack: 73, defense: 75, specialAttack: 47, specialDefense: 85, speed: 85 },
    moves: [
      { name: '萤火', type: PokemonElementType.bug, power: null, description: '凝视闪烁的光芒， 集中自己的精神， 从而巨幅提高特攻。' },
      { name: '月光', type: PokemonElementType.normal, power: null, description: '回复自己的ＨＰ。 根据天气的不同， 回复量也会有所变化。' },
      { name: '电光一闪', type: PokemonElementType.normal, power: 40, description: '以迅雷不及掩耳之势扑向对手。 必定能够先制攻击。' },
      { name: '奇异之光', type: PokemonElementType.ghost, power: null, description: '显示奇怪的光， 扰乱对手。 使对手混乱。' },
    ],
  },
  roselia: {
    flavorText: '只要闻到它的花香， 就能放松心情。浓郁的香味 是毒蔷薇有活力的证明。',
    stats: { hp: 50, attack: 60, defense: 45, specialAttack: 100, specialDefense: 80, speed: 65 },
    moves: [
      { name: '草笛', type: PokemonElementType.grass, power: null, description: '让对手听舒适的笛声， 从而陷入睡眠状态。' },
      { name: '花瓣舞', type: PokemonElementType.grass, power: 120, description: '在２～３回合内， 散落花瓣攻击对手。 之后自己会陷入混乱。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '扎根', type: PokemonElementType.grass, power: null, description: '在大地上扎根， 每回合回复自己的ＨＰ。 因为扎根了，所以不能替换宝可梦。' },
    ],
  },
  gulpin: {
    flavorText: 'It has a small heart and brain. Its stomach comprises most of its body, with enzymes to dissolve anything.',
    stats: { hp: 70, attack: 43, defense: 53, specialAttack: 43, specialDefense: 53, speed: 40 },
    moves: [
      { name: '污泥攻击', type: PokemonElementType.poison, power: 65, description: '用污泥投掷对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '毒瓦斯', type: PokemonElementType.poison, power: null, description: '将毒瓦斯吹到对手的脸上， 从而让对手陷入中毒状态。' },
      { name: '喷出', type: PokemonElementType.normal, power: null, description: '将积蓄的力量 撞向对手进行攻击。 积蓄得越多，威力越大。' },
      { name: '吞下', type: PokemonElementType.normal, power: null, description: '将积蓄的力量吞下， 从而回复自己的ＨＰ。 积蓄得越多，回复越大。' },
    ],
  },
  swalot: {
    flavorText: 'When SWALOT spots prey, it spurts out a hideously toxic fluid from its pores and sprays the target. Once the prey has weakened, this POKéMON gulps it down whole with its cavernous mouth.',
    stats: { hp: 100, attack: 73, defense: 83, specialAttack: 73, specialDefense: 83, speed: 55 },
    moves: [
      { name: '污泥攻击', type: PokemonElementType.poison, power: 65, description: '用污泥投掷对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '毒瓦斯', type: PokemonElementType.poison, power: null, description: '将毒瓦斯吹到对手的脸上， 从而让对手陷入中毒状态。' },
      { name: '喷出', type: PokemonElementType.normal, power: null, description: '将积蓄的力量 撞向对手进行攻击。 积蓄得越多，威力越大。' },
      { name: '吞下', type: PokemonElementType.normal, power: null, description: '将积蓄的力量吞下， 从而回复自己的ＨＰ。 积蓄得越多，回复越大。' },
    ],
  },
  carvanha: {
    flavorText: '每个群体都拥有自己的领地。 对于入侵者，会毫不留情地 露出牙齿发动袭击。',
    stats: { hp: 45, attack: 90, defense: 20, specialAttack: 65, specialDefense: 20, speed: 65 },
    moves: [
      { name: '愤怒', type: PokemonElementType.normal, power: 20, description: '如果在使出招式后 受到攻击的话， 会因愤怒的力量而提高攻击。' },
      { name: '聚气', type: PokemonElementType.normal, power: null, description: '深深地吸口气，集中精神。 自己的攻击 会变得容易击中要害。' },
      { name: '刺耳声', type: PokemonElementType.normal, power: null, description: '发出不由自主想要 捂起耳朵的刺耳声， 从而大幅降低对手的防御。' },
      { name: '咬住', type: PokemonElementType.dark, power: 60, description: '用尖锐的牙 咬住对手进行攻击。 有时会使对手畏缩。' },
    ],
  },
  sharpedo: {
    flavorText: '以１２０公里的时速追击猎物， 用连铁都能咬碎的牙齿捕杀。 通常称之为大海恶霸。',
    stats: { hp: 70, attack: 120, defense: 40, specialAttack: 95, specialDefense: 40, speed: 95 },
    moves: [
      { name: '火箭头锤', type: PokemonElementType.normal, power: 130, description: '第１回合把头缩进去， 从而提高防御。 第２回合攻击对手。' },
      { name: '劈开', type: PokemonElementType.normal, power: 70, description: '用爪子或镰刀等 劈开对手进行攻击。 容易击中要害。' },
      { name: '愤怒', type: PokemonElementType.normal, power: 20, description: '如果在使出招式后 受到攻击的话， 会因愤怒的力量而提高攻击。' },
      { name: '聚气', type: PokemonElementType.normal, power: null, description: '深深地吸口气，集中精神。 自己的攻击 会变得容易击中要害。' },
    ],
  },
  wailmer: {
    flavorText: '喜欢吓人。 喝入海水鼓成球一样， 弹跳着玩。',
    stats: { hp: 130, attack: 70, defense: 35, specialAttack: 70, specialDefense: 35, speed: 60 },
    moves: [
      { name: '喷水', type: PokemonElementType.water, power: 150, description: '掀起潮水进行攻击。 自己的ＨＰ越少， 招式的威力越小。' },
      { name: '跃起', type: PokemonElementType.normal, power: null, description: '也不攻击只是一蹦一蹦地跳， 什么都不会发生……' },
      { name: '白雾', type: PokemonElementType.ice, power: null, description: '用白雾覆盖身体。 在５回合内不会让对手 降低自己的能力。' },
      { name: '惊吓', type: PokemonElementType.ghost, power: 30, description: '用尖叫声等 突然惊吓对手进行攻击。 有时会使对手畏缩。' },
    ],
  },
  wailord: {
    flavorText: '有成群结队追逐猎物的习性。 用大大的嘴巴将弱丁鱼群 一口气尽数吞下。',
    stats: { hp: 170, attack: 90, defense: 45, specialAttack: 90, specialDefense: 45, speed: 60 },
    moves: [
      { name: '喷水', type: PokemonElementType.water, power: 150, description: '掀起潮水进行攻击。 自己的ＨＰ越少， 招式的威力越小。' },
      { name: '跃起', type: PokemonElementType.normal, power: null, description: '也不攻击只是一蹦一蹦地跳， 什么都不会发生……' },
      { name: '白雾', type: PokemonElementType.ice, power: null, description: '用白雾覆盖身体。 在５回合内不会让对手 降低自己的能力。' },
      { name: '惊吓', type: PokemonElementType.ghost, power: 30, description: '用尖叫声等 突然惊吓对手进行攻击。 有时会使对手畏缩。' },
    ],
  },
  numel: {
    flavorText: 'NUMEL is extremely dull witted - it doesn’t notice being hit. However, it can’t stand hunger for even a second. This POKéMON’s body is a seething cauldron of boiling magma.',
    stats: { hp: 60, attack: 60, defense: 40, specialAttack: 65, specialDefense: 45, speed: 35 },
    moves: [
      { name: '震级', type: PokemonElementType.ground, power: null, description: '晃动地面，攻击自己 周围所有的宝可梦。 招式的威力会有各种变化。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '瞬间失忆', type: PokemonElementType.psychic, power: null, description: '将头脑清空， 瞬间忘记某事， 从而大幅提高自己的特防。' },
      { name: '聚气', type: PokemonElementType.normal, power: null, description: '深深地吸口气，集中精神。 自己的攻击 会变得容易击中要害。' },
    ],
  },
  camerupt: {
    flavorText: 'CAMERUPT has a volcano inside its body. Magma of 18,000 degrees F courses through its body. Occasionally, the humps on this POKéMON’s back erupt, spewing the superheated magma.',
    stats: { hp: 70, attack: 100, defense: 70, specialAttack: 105, specialDefense: 75, speed: 40 },
    moves: [
      { name: '喷火', type: PokemonElementType.fire, power: 150, description: '爆发怒火攻击对手。 自己的ＨＰ越少， 招式的威力越小。' },
      { name: '震级', type: PokemonElementType.ground, power: null, description: '晃动地面，攻击自己 周围所有的宝可梦。 招式的威力会有各种变化。' },
      { name: '地裂', type: PokemonElementType.ground, power: null, description: '让对手掉落于地裂的 裂缝中进行攻击。 只要命中就会一击濒死。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
    ],
  },
  torkoal: {
    flavorText: '煤炭是其能量的来源。 在煤炭龟栖息着的山里， 沉睡着大量的煤炭。',
    stats: { hp: 70, attack: 85, defense: 140, specialAttack: 85, specialDefense: 70, speed: 20 },
    moves: [
      { name: '浊雾', type: PokemonElementType.poison, power: 30, description: '将肮脏的浓雾 吹向对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '烟幕', type: PokemonElementType.normal, power: null, description: '向对手喷出烟或墨汁等， 从而降低对手的命中率。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '火焰旋涡', type: PokemonElementType.fire, power: 35, description: '将对手困在 激烈的火焰旋涡中， 在４～５回合内进行攻击。' },
    ],
  },
  spoink: {
    flavorText: 'SPOINK bounces around on its tail. The shock of its bouncing makes its heart pump. As a result, this POKéMON cannot afford to stop bouncing - if it stops, its heart will stop.',
    stats: { hp: 60, attack: 25, defense: 35, specialAttack: 70, specialDefense: 80, speed: 60 },
    moves: [
      { name: '跃起', type: PokemonElementType.normal, power: null, description: '也不攻击只是一蹦一蹦地跳， 什么都不会发生……' },
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '精神波', type: PokemonElementType.psychic, power: null, description: '向对手发射 神奇的念波进行攻击。 每次使用，伤害都会改变。' },
      { name: '弹跳', type: PokemonElementType.flying, power: 85, description: '弹跳到高高的空中， 第２回合攻击对手。 有时会让对手陷入麻痹状态。' },
    ],
  },
  grumpig: {
    flavorText: 'GRUMPIG uses the black pearls on its body to amplify its psychic power waves for gaining total control over its foe. When this POKéMON uses its special power, its snorting breath grows labored.',
    stats: { hp: 80, attack: 45, defense: 65, specialAttack: 90, specialDefense: 110, speed: 80 },
    moves: [
      { name: '跃起', type: PokemonElementType.normal, power: null, description: '也不攻击只是一蹦一蹦地跳， 什么都不会发生……' },
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '精神波', type: PokemonElementType.psychic, power: null, description: '向对手发射 神奇的念波进行攻击。 每次使用，伤害都会改变。' },
      { name: '弹跳', type: PokemonElementType.flying, power: 85, description: '弹跳到高高的空中， 第２回合攻击对手。 有时会让对手陷入麻痹状态。' },
    ],
  },
  spinda: {
    flavorText: '晃晃悠悠，步伐不稳健， 但晃晃斑自己是打算要 笔直走路的哦。',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 60, specialDefense: 60, speed: 60 },
    moves: [
      { name: '迷昏拳', type: PokemonElementType.normal, power: 70, description: '有节奏地出拳攻击对手。 有时会使对手混乱。' },
      { name: '摇晃舞', type: PokemonElementType.normal, power: null, description: '摇摇晃晃地跳起舞蹈， 让自己周围的宝可梦 陷入混乱状态。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
    ],
  },
  trapinch: {
    flavorText: '一整个星期什么都不吃 也能生存。一动不动地呆在 巢穴底部等待猎物的到来。',
    stats: { hp: 45, attack: 100, defense: 45, specialAttack: 45, specialDefense: 45, speed: 10 },
    moves: [
      { name: '流沙地狱', type: PokemonElementType.ground, power: 35, description: '将对手困在 铺天盖地的沙暴中， 在４～５回合内进行攻击。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
      { name: '咬住', type: PokemonElementType.dark, power: 60, description: '用尖锐的牙 咬住对手进行攻击。 有时会使对手畏缩。' },
    ],
  },
  vibrava: {
    flavorText: '还不发达的翅膀， 比起飞行，反而更多地用于 通过摩擦产生超音波攻击敌人。',
    stats: { hp: 50, attack: 70, defense: 50, specialAttack: 50, specialDefense: 50, speed: 70 },
    moves: [
      { name: '龙息', type: PokemonElementType.dragon, power: 60, description: '将强烈的气息 吹向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '流沙地狱', type: PokemonElementType.ground, power: 35, description: '将对手困在 铺天盖地的沙暴中， 在４～５回合内进行攻击。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
    ],
  },
  flygon: {
    flavorText: '挥动翅膀的声音简直就是歌声。 凡是被这声音迷惑的， 最终会被卷入沙暴成为沙漠蜻蜓的食物。',
    stats: { hp: 80, attack: 100, defense: 80, specialAttack: 80, specialDefense: 80, speed: 100 },
    moves: [
      { name: '龙息', type: PokemonElementType.dragon, power: 60, description: '将强烈的气息 吹向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '流沙地狱', type: PokemonElementType.ground, power: 35, description: '将对手困在 铺天盖地的沙暴中， 在４～５回合内进行攻击。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
    ],
  },
  cacnea: {
    flavorText: 'CACNEA lives in arid locations such as deserts. It releases a strong aroma from its flower to attract prey. When prey comes near, this POKéMON shoots sharp thorns from its body to bring the victim down.',
    stats: { hp: 50, attack: 85, defense: 40, specialAttack: 85, specialDefense: 40, speed: 35 },
    moves: [
      { name: '尖刺臂', type: PokemonElementType.grass, power: 60, description: '用带刺的手臂 猛烈地挥舞进行攻击。 有时会使对手畏缩。' },
      { name: '棉孢子', type: PokemonElementType.grass, power: null, description: '将棉花般柔软的孢子 紧贴对手， 从而大幅降低对手的速度。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '扎根', type: PokemonElementType.grass, power: null, description: '在大地上扎根， 每回合回复自己的ＨＰ。 因为扎根了，所以不能替换宝可梦。' },
    ],
  },
  cacturne: {
    flavorText: 'During the daytime, CACTURNE remains unmoving so that it does not lose any moisture to the harsh desert sun. This POKéMON becomes active at night when the temperature drops.',
    stats: { hp: 70, attack: 115, defense: 60, specialAttack: 115, specialDefense: 60, speed: 55 },
    moves: [
      { name: '尖刺臂', type: PokemonElementType.grass, power: 60, description: '用带刺的手臂 猛烈地挥舞进行攻击。 有时会使对手畏缩。' },
      { name: '棉孢子', type: PokemonElementType.grass, power: null, description: '将棉花般柔软的孢子 紧贴对手， 从而大幅降低对手的速度。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '扎根', type: PokemonElementType.grass, power: null, description: '在大地上扎根， 每回合回复自己的ＨＰ。 因为扎根了，所以不能替换宝可梦。' },
    ],
  },
  swablu: {
    flavorText: '像丝绵一样的翅膀中含有 空气，触感蓬松。绝不会 忽视对翅膀精细地保养。',
    stats: { hp: 45, attack: 40, defense: 60, specialAttack: 40, specialDefense: 75, speed: 50 },
    moves: [
      { name: '鹦鹉学舌', type: PokemonElementType.flying, power: null, description: '模仿对手使用的招式， 自己也使用相同招式。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
      { name: '唱歌', type: PokemonElementType.normal, power: null, description: '让对手听舒适、 美妙的歌声， 从而陷入睡眠状态。' },
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
    ],
  },
  altaria: {
    flavorText: '一边舒适地在天空中飞翔， 一边发出优美的哼唱， 让听到之人都为之沉醉。',
    stats: { hp: 75, attack: 70, defense: 90, specialAttack: 70, specialDefense: 105, speed: 80 },
    moves: [
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
      { name: '唱歌', type: PokemonElementType.normal, power: null, description: '让对手听舒适、 美妙的歌声， 从而陷入睡眠状态。' },
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
      { name: '焕然一新', type: PokemonElementType.normal, power: null, description: '让身体休息， 治愈自己身上所中的 毒、麻痹、灼伤的异常状态。' },
    ],
  },
  zangoose: {
    flavorText: 'It has feuded with Seviper for many generations. Its sharp claws are its biggest weapons.',
    stats: { hp: 73, attack: 115, defense: 60, specialAttack: 60, specialDefense: 60, speed: 90 },
    moves: [
      { name: '撕裂爪', type: PokemonElementType.normal, power: 75, description: '用坚硬的锐爪 劈开对手进行攻击。 有时会降低对手的防御。' },
      { name: '追打', type: PokemonElementType.dark, power: 40, description: '当对手替换宝可梦上场时 使出此招式的话， 能够以２倍的威力进行攻击。' },
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
      { name: '点到为止', type: PokemonElementType.normal, power: 40, description: '对手的ＨＰ 至少会留下１ＨＰ， 如此般手下留情地攻击。' },
    ],
  },
  seviper: {
    flavorText: 'SEVIPER shares a generations-long feud with ZANGOOSE. The scars on its body are evidence of vicious battles. This POKéMON attacks using its sword-edged tail.',
    stats: { hp: 73, attack: 100, defense: 60, specialAttack: 100, specialDefense: 60, speed: 65 },
    moves: [
      { name: '大蛇瞪眼', type: PokemonElementType.normal, power: null, description: '用腹部的花纹使对手害怕， 从而让其陷入麻痹状态。' },
      { name: '剧毒牙', type: PokemonElementType.poison, power: 50, description: '用有毒的牙齿 咬住对手进行攻击。 有时会使对手中剧毒。' },
      { name: '毒尾', type: PokemonElementType.poison, power: 50, description: '用尾巴拍打。 有时会让对手陷入中毒状态， 也容易击中要害。' },
      { name: '紧束', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 紧束对手进行攻击。' },
    ],
  },
  lunatone: {
    flavorText: '月亮的盈缺似乎会 影响它力量的增减。 每到满月之夜就会变得活跃。',
    stats: { hp: 90, attack: 55, defense: 65, specialAttack: 95, specialDefense: 85, speed: 70 },
    moves: [
      { name: '宇宙力量', type: PokemonElementType.psychic, power: null, description: '汲取宇宙中神秘的力量， 从而提高自己的防御和特防。' },
      { name: '精神波', type: PokemonElementType.psychic, power: null, description: '向对手发射 神奇的念波进行攻击。 每次使用，伤害都会改变。' },
      { name: '落石', type: PokemonElementType.rock, power: 50, description: '拿起小岩石， 投掷对手进行攻击。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
    ],
  },
  solrock: {
    flavorText: '当它旋转自己的身体时， 会发出太阳般的光芒， 让敌人的眼睛暂时失明。',
    stats: { hp: 90, attack: 95, defense: 85, specialAttack: 55, specialDefense: 65, speed: 70 },
    moves: [
      { name: '宇宙力量', type: PokemonElementType.psychic, power: null, description: '汲取宇宙中神秘的力量， 从而提高自己的防御和特防。' },
      { name: '精神波', type: PokemonElementType.psychic, power: null, description: '向对手发射 神奇的念波进行攻击。 每次使用，伤害都会改变。' },
      { name: '落石', type: PokemonElementType.rock, power: 50, description: '拿起小岩石， 投掷对手进行攻击。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
    ],
  },
  barboach: {
    flavorText: '全身滑腻腻的。 即使被鸟宝可梦啄到， 也能哧溜一下滑着逃走。',
    stats: { hp: 50, attack: 48, defense: 43, specialAttack: 46, specialDefense: 41, speed: 60 },
    moves: [
      { name: '震级', type: PokemonElementType.ground, power: null, description: '晃动地面，攻击自己 周围所有的宝可梦。 招式的威力会有各种变化。' },
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
      { name: '地裂', type: PokemonElementType.ground, power: null, description: '让对手掉落于地裂的 裂缝中进行攻击。 只要命中就会一击濒死。' },
    ],
  },
  whiscash: {
    flavorText: '只要是动的东西，无论什么都会 咬住不放大吃特吃。平常就一直埋伏 在沼泽底部一动不动地等待着猎物。',
    stats: { hp: 110, attack: 78, defense: 73, specialAttack: 76, specialDefense: 71, speed: 60 },
    moves: [
      { name: '震级', type: PokemonElementType.ground, power: null, description: '晃动地面，攻击自己 周围所有的宝可梦。 招式的威力会有各种变化。' },
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
      { name: '地裂', type: PokemonElementType.ground, power: null, description: '让对手掉落于地裂的 裂缝中进行攻击。 只要命中就会一击濒死。' },
    ],
  },
  corphish: {
    flavorText: '被没有坚持培育的训练家放生了的 个体在增加，即使在阿罗拉也变得 时常能见到了。',
    stats: { hp: 43, attack: 80, defense: 65, specialAttack: 50, specialDefense: 35, speed: 35 },
    moves: [
      { name: '蟹钳锤', type: PokemonElementType.water, power: 100, description: '用大钳子 敲打对手进行攻击。 容易击中要害。' },
      { name: '断头钳', type: PokemonElementType.normal, power: null, description: '用大钳子或剪刀等 夹断对手进行攻击。 只要命中就会一击濒死。' },
      { name: '夹住', type: PokemonElementType.normal, power: 55, description: '将对手从两侧夹住， 给予伤害。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
    ],
  },
  crawdaunt: {
    flavorText: '性格暴躁，喜欢打架， 但如果钳子掉落，就会一下子弱下来。 在再生之前，都会提心吊胆的。',
    stats: { hp: 63, attack: 120, defense: 85, specialAttack: 90, specialDefense: 55, speed: 55 },
    moves: [
      { name: '蟹钳锤', type: PokemonElementType.water, power: 100, description: '用大钳子 敲打对手进行攻击。 容易击中要害。' },
      { name: '断头钳', type: PokemonElementType.normal, power: null, description: '用大钳子或剪刀等 夹断对手进行攻击。 只要命中就会一击濒死。' },
      { name: '夹住', type: PokemonElementType.normal, power: 55, description: '将对手从两侧夹住， 给予伤害。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
    ],
  },
  baltoy: {
    flavorText: '在原始人所居住的洞穴墙壁上， 描绘着像是天秤偶的宝可梦的样子。',
    stats: { hp: 40, attack: 40, defense: 55, specialAttack: 40, specialDefense: 70, speed: 55 },
    moves: [
      { name: '宇宙力量', type: PokemonElementType.psychic, power: null, description: '汲取宇宙中神秘的力量， 从而提高自己的防御和特防。' },
      { name: '高速旋转', type: PokemonElementType.normal, power: 50, description: '通过旋转来攻击对手。 还可以摆脱绑紧、紧束、 寄生种子和撒菱等招式。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
      { name: '大爆炸', type: PokemonElementType.normal, power: 250, description: '引发大爆炸， 攻击自己周围所有的宝可梦。 使用后自己会陷入濒死。' },
    ],
  },
  claydol: {
    flavorText: '如果淋湿，身体就会溶解掉。 所以下雨时会用精神力量 包住全身，保护自己。',
    stats: { hp: 60, attack: 70, defense: 105, specialAttack: 70, specialDefense: 120, speed: 75 },
    moves: [
      { name: '瞬间移动', type: PokemonElementType.psychic, power: null, description: '停止和野生宝可梦战斗并逃走。' },
      { name: '宇宙力量', type: PokemonElementType.psychic, power: null, description: '汲取宇宙中神秘的力量， 从而提高自己的防御和特防。' },
      { name: '高速旋转', type: PokemonElementType.normal, power: 50, description: '通过旋转来攻击对手。 还可以摆脱绑紧、紧束、 寄生种子和撒菱等招式。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
    ],
  },
  lileep: {
    flavorText: '曾生活在古代温暖的海里。 伪装成海草，埋伏着等待猎物， 等对方靠近的时候一口吞下。',
    stats: { hp: 66, attack: 41, defense: 77, specialAttack: 61, specialDefense: 87, speed: 23 },
    moves: [
      { name: '缠绕', type: PokemonElementType.normal, power: 10, description: '用触手或青藤等缠绕进行攻击。 有时会降低对手的速度。' },
      { name: '溶解液', type: PokemonElementType.poison, power: 40, description: '将强酸泼向对手进行攻击。 有时会降低对手的特防。' },
      { name: '喷出', type: PokemonElementType.normal, power: null, description: '将积蓄的力量 撞向对手进行攻击。 积蓄得越多，威力越大。' },
      { name: '扎根', type: PokemonElementType.grass, power: null, description: '在大地上扎根， 每回合回复自己的ＨＰ。 因为扎根了，所以不能替换宝可梦。' },
    ],
  },
  cradily: {
    flavorText: '平常栖息在海的浅滩底部， 退潮的时候就爬到陆地上， 四处寻找猎物。',
    stats: { hp: 86, attack: 81, defense: 97, specialAttack: 81, specialDefense: 107, speed: 43 },
    moves: [
      { name: '缠绕', type: PokemonElementType.normal, power: 10, description: '用触手或青藤等缠绕进行攻击。 有时会降低对手的速度。' },
      { name: '溶解液', type: PokemonElementType.poison, power: 40, description: '将强酸泼向对手进行攻击。 有时会降低对手的特防。' },
      { name: '喷出', type: PokemonElementType.normal, power: null, description: '将积蓄的力量 撞向对手进行攻击。 积蓄得越多，威力越大。' },
      { name: '扎根', type: PokemonElementType.grass, power: null, description: '在大地上扎根， 每回合回复自己的ＨＰ。 因为扎根了，所以不能替换宝可梦。' },
    ],
  },
  anorith: {
    flavorText: '从化石复原而来的太古羽虫 即使放到海里，也不会有精神。 因为现在的水质已和当时不同了。',
    stats: { hp: 45, attack: 95, defense: 50, specialAttack: 40, specialDefense: 50, speed: 75 },
    moves: [
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
      { name: '金属爪', type: PokemonElementType.steel, power: 50, description: '用钢铁之爪 劈开对手进行攻击。 有时会提高自己的攻击。' },
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
    ],
  },
  armaldo: {
    flavorText: '进化之后登上了陆地。 下半身得到了强化， 尾巴的攻击破坏力极强。',
    stats: { hp: 75, attack: 125, defense: 100, specialAttack: 70, specialDefense: 80, speed: 45 },
    moves: [
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
      { name: '金属爪', type: PokemonElementType.steel, power: 50, description: '用钢铁之爪 劈开对手进行攻击。 有时会提高自己的攻击。' },
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
    ],
  },
  feebas: {
    flavorText: '即使在脏水里也完全不介意的 强壮的宝可梦。但破破烂烂一副 寒酸的样子，所以不受欢迎。',
    stats: { hp: 20, attack: 15, defense: 20, specialAttack: 10, specialDefense: 55, speed: 80 },
    moves: [
      { name: '跃起', type: PokemonElementType.normal, power: null, description: '也不攻击只是一蹦一蹦地跳， 什么都不会发生……' },
      { name: '抓狂', type: PokemonElementType.normal, power: null, description: '抓狂般乱打进行攻击。 自己的ＨＰ越少， 招式的威力越大。' },
      { name: '撞击', type: PokemonElementType.normal, power: 40, description: '用整个身体 撞向对手进行攻击。' },
    ],
  },
  milotic: {
    flavorText: '也被称为最美的宝可梦， 一直给予许多艺术家灵感。',
    stats: { hp: 95, attack: 60, defense: 79, specialAttack: 100, specialDefense: 125, speed: 81 },
    moves: [
      { name: '紧束', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 紧束对手进行攻击。' },
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
      { name: '焕然一新', type: PokemonElementType.normal, power: null, description: '让身体休息， 治愈自己身上所中的 毒、麻痹、灼伤的异常状态。' },
      { name: '自我再生', type: PokemonElementType.normal, power: null, description: '让细胞再生， 从而回复自己 最大ＨＰ的一半。' },
    ],
  },
  kecleon: {
    flavorText: '能改变身体的颜色，融入周围景色中。 如果长时间不管它，就会闹别扭不现身。',
    stats: { hp: 60, attack: 90, defense: 70, specialAttack: 60, specialDefense: 120, speed: 40 },
    moves: [
      { name: '舌舔', type: PokemonElementType.ghost, power: 30, description: '用长长的舌头， 舔遍对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '绑紧', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 绑紧对手进行攻击。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
    ],
  },
  castform: {
    flavorText: '根据天气而改变样子。 听说气温和湿度的变化 对细胞有影响。',
    stats: { hp: 70, attack: 70, defense: 70, specialAttack: 70, specialDefense: 70, speed: 70 },
    moves: [
      { name: '细雪', type: PokemonElementType.ice, power: 40, description: '将冰冷的细雪 吹向对手进行攻击。 有时会让对手陷入冰冻状态。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '气象球', type: PokemonElementType.normal, power: 50, description: '根据使用时的天气， 招式属性和威力会改变。' },
      { name: '水枪', type: PokemonElementType.water, power: 40, description: '向对手猛烈地喷射 水流进行攻击。' },
    ],
  },
  shuppet: {
    flavorText: '因为会吞食类似于 怨恨、嫉妒之类的感情， 所以对于有的人来说是可贵的存在。',
    stats: { hp: 44, attack: 75, defense: 35, specialAttack: 63, specialDefense: 33, speed: 45 },
    moves: [
      { name: '怨念', type: PokemonElementType.ghost, power: null, description: '因对手的招式而陷入濒死时 给对手施加怨念， 让该招式的ＰＰ变成０。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
      { name: '黑夜魔影', type: PokemonElementType.ghost, power: null, description: '显示恐怖幻影， 只给予对手 和自己等级相同的伤害。' },
      { name: '抢夺', type: PokemonElementType.dark, power: null, description: '将对手打算使用的回复招式 或能力变化招式夺为己用。' },
    ],
  },
  banette: {
    flavorText: '怨念附在被丢弃的玩偶身上， 打算寻找丢弃自己的人来报仇。',
    stats: { hp: 64, attack: 115, defense: 65, specialAttack: 83, specialDefense: 63, speed: 65 },
    moves: [
      { name: '怨念', type: PokemonElementType.ghost, power: null, description: '因对手的招式而陷入濒死时 给对手施加怨念， 让该招式的ＰＰ变成０。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
      { name: '黑夜魔影', type: PokemonElementType.ghost, power: null, description: '显示恐怖幻影， 只给予对手 和自己等级相同的伤害。' },
      { name: '抢夺', type: PokemonElementType.dark, power: null, description: '将对手打算使用的回复招式 或能力变化招式夺为己用。' },
    ],
  },
  duskull: {
    flavorText: '据说，一旦发现不听话的孩子， 就会在深夜将其带去某个地方。',
    stats: { hp: 20, attack: 40, defense: 90, specialAttack: 30, specialDefense: 90, speed: 25 },
    moves: [
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '黑色目光', type: PokemonElementType.normal, power: null, description: '用好似要勾人心魂的黑色目光 一动不动地凝视对手， 使其不能从战斗中逃走。' },
      { name: '追打', type: PokemonElementType.dark, power: 40, description: '当对手替换宝可梦上场时 使出此招式的话， 能够以２倍的威力进行攻击。' },
      { name: '定身法', type: PokemonElementType.normal, power: null, description: '阻碍对手行动， 之前使出的招式 将在４回合内无法使用。' },
    ],
  },
  dusclops: {
    flavorText: '身体内部是空的。 只要一张开嘴就会像 黑洞一样吸入所有东西',
    stats: { hp: 40, attack: 70, defense: 130, specialAttack: 60, specialDefense: 130, speed: 25 },
    moves: [
      { name: '暗影拳', type: PokemonElementType.ghost, power: 60, description: '使出混影之拳。 攻击必定会命中。' },
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '黑色目光', type: PokemonElementType.normal, power: null, description: '用好似要勾人心魂的黑色目光 一动不动地凝视对手， 使其不能从战斗中逃走。' },
      { name: '绑紧', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 绑紧对手进行攻击。' },
    ],
  },
  tropius: {
    flavorText: '栖息在阿罗拉的热带龙 脖子里结的那串水果比其他地区的 甜得多，是最最棒的。',
    stats: { hp: 99, attack: 68, defense: 83, specialAttack: 72, specialDefense: 87, speed: 51 },
    moves: [
      { name: '起风', type: PokemonElementType.flying, power: 40, description: '用翅膀将刮起的狂风 袭向对手进行攻击。' },
      { name: '吹飞', type: PokemonElementType.normal, power: null, description: '吹飞对手，强制拉后备宝可梦上场。 如果对手为野生宝可梦， 战斗将直接结束。' },
      { name: '踩踏', type: PokemonElementType.normal, power: 65, description: '用大脚踩踏对手进行攻击。 有时会使对手畏缩。' },
      { name: '飞叶快刀', type: PokemonElementType.grass, power: 55, description: '飞出叶片， 切斩对手进行攻击。 容易击中要害。' },
    ],
  },
  chimecho: {
    flavorText: 'CHIMECHO makes its cries echo inside its hollow body. When this POKéMON becomes enraged, its cries result in ultrasonic waves that have the power to knock foes flying.',
    stats: { hp: 75, attack: 50, defense: 80, specialAttack: 95, specialDefense: 90, speed: 65 },
    moves: [
      { name: '紧束', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 紧束对手进行攻击。' },
      { name: '精神波', type: PokemonElementType.psychic, power: null, description: '向对手发射 神奇的念波进行攻击。 每次使用，伤害都会改变。' },
      { name: '治愈铃声', type: PokemonElementType.normal, power: null, description: '让同伴听舒适的铃音， 从而治愈我方全员的异常状态。' },
      { name: '哈欠', type: PokemonElementType.normal, power: null, description: '打个大哈欠引起睡意。 在下一回合让对手陷入睡眠状态。' },
    ],
  },
  absol: {
    flavorText: '在迷信盛行的过去， 因被认为会招来灾祸而遭到厌恶， 并被赶到深山中去。',
    stats: { hp: 65, attack: 130, defense: 60, specialAttack: 75, specialDefense: 60, speed: 75 },
    moves: [
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
      { name: '旋风刀', type: PokemonElementType.normal, power: 80, description: '制造风之刃， 于第２回合攻击对手。 容易击中要害。' },
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
      { name: '预知未来', type: PokemonElementType.psychic, power: 120, description: '在使用招式２回合后， 向对手发送一团念力进行攻击。' },
    ],
  },
  wynaut: {
    flavorText: '和大群伙伴一起行动， 通过和伙伴彼此推挤 来锻炼自己的忍耐力。',
    stats: { hp: 95, attack: 23, defense: 48, specialAttack: 23, specialDefense: 48, speed: 23 },
    moves: [
      { name: '跃起', type: PokemonElementType.normal, power: null, description: '也不攻击只是一蹦一蹦地跳， 什么都不会发生……' },
      { name: '镜面反射', type: PokemonElementType.psychic, power: null, description: '从对手那里受到 特殊攻击的伤害将以 ２倍返还给同一个对手。' },
      { name: '同命', type: PokemonElementType.ghost, power: null, description: '使出招式后，当受到对手攻击 陷入濒死时，对手也会一同濒死。 连续使出则会失败。' },
      { name: '再来一次', type: PokemonElementType.normal, power: null, description: '让对手接受再来一次， 连续３次使出最后使用的招式。' },
    ],
  },
  snorunt: {
    flavorText: '等发觉时，已在阿罗拉增多起来。 据说，雪童子栖息过的家庭 会子孙满堂家族繁荣。',
    stats: { hp: 50, attack: 50, defense: 50, specialAttack: 50, specialDefense: 50, speed: 50 },
    moves: [
      { name: '细雪', type: PokemonElementType.ice, power: 40, description: '将冰冷的细雪 吹向对手进行攻击。 有时会让对手陷入冰冻状态。' },
      { name: '冰雹', type: PokemonElementType.ice, power: null, description: '在５回合内一直降冰雹， 除冰属性的宝可梦以外， 给予全体宝可梦伤害。' },
      { name: '咬住', type: PokemonElementType.dark, power: 60, description: '用尖锐的牙 咬住对手进行攻击。 有时会使对手畏缩。' },
      { name: '瞪眼', type: PokemonElementType.normal, power: null, description: '用犀利的眼神使其害怕， 从而降低对手的防御。' },
    ],
  },
  glalie: {
    flavorText: '据说是即将登顶雪山， 却罹难的登山家的遗憾， 附在岩石上诞生而成。',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80 },
    moves: [
      { name: '绝对零度', type: PokemonElementType.ice, power: null, description: '给对手一击濒死。 如果是冰属性以外的宝可梦使用， 就会难以打中。' },
      { name: '细雪', type: PokemonElementType.ice, power: 40, description: '将冰冷的细雪 吹向对手进行攻击。 有时会让对手陷入冰冻状态。' },
      { name: '冰雹', type: PokemonElementType.ice, power: null, description: '在５回合内一直降冰雹， 除冰属性的宝可梦以外， 给予全体宝可梦伤害。' },
      { name: '咬住', type: PokemonElementType.dark, power: 60, description: '用尖锐的牙 咬住对手进行攻击。 有时会使对手畏缩。' },
    ],
  },
  spheal: {
    flavorText: '圆溜溜的身体 被厚厚的脂肪包裹着， 滚起来比走路要快。',
    stats: { hp: 70, attack: 40, defense: 50, specialAttack: 55, specialDefense: 50, speed: 25 },
    moves: [
      { name: '冰球', type: PokemonElementType.ice, power: 30, description: '在５回合内攻击对手。 招式每次击中，威力就会提高。' },
      { name: '绝对零度', type: PokemonElementType.ice, power: null, description: '给对手一击濒死。 如果是冰属性以外的宝可梦使用， 就会难以打中。' },
      { name: '极光束', type: PokemonElementType.ice, power: 65, description: '向对手发射 虹色光束进行攻击。 有时会降低对手的攻击。' },
      { name: '细雪', type: PokemonElementType.ice, power: 40, description: '将冰冷的细雪 吹向对手进行攻击。 有时会让对手陷入冰冻状态。' },
    ],
  },
  sealeo: {
    flavorText: '在浮冰上生活。能一边游泳 一边分辨猎物的味道，找到 对方的位置并将其捕获。',
    stats: { hp: 90, attack: 60, defense: 70, specialAttack: 75, specialDefense: 70, speed: 45 },
    moves: [
      { name: '冰球', type: PokemonElementType.ice, power: 30, description: '在５回合内攻击对手。 招式每次击中，威力就会提高。' },
      { name: '绝对零度', type: PokemonElementType.ice, power: null, description: '给对手一击濒死。 如果是冰属性以外的宝可梦使用， 就会难以打中。' },
      { name: '极光束', type: PokemonElementType.ice, power: 65, description: '向对手发射 虹色光束进行攻击。 有时会降低对手的攻击。' },
      { name: '细雪', type: PokemonElementType.ice, power: 40, description: '将冰冷的细雪 吹向对手进行攻击。 有时会让对手陷入冰冻状态。' },
    ],
  },
  walrein: {
    flavorText: '２、３０只一起群居。 受到敌人袭击时， 首领会拼命保护族群。',
    stats: { hp: 110, attack: 80, defense: 90, specialAttack: 95, specialDefense: 90, speed: 65 },
    moves: [
      { name: '冰球', type: PokemonElementType.ice, power: 30, description: '在５回合内攻击对手。 招式每次击中，威力就会提高。' },
      { name: '绝对零度', type: PokemonElementType.ice, power: null, description: '给对手一击濒死。 如果是冰属性以外的宝可梦使用， 就会难以打中。' },
      { name: '极光束', type: PokemonElementType.ice, power: 65, description: '向对手发射 虹色光束进行攻击。 有时会降低对手的攻击。' },
      { name: '细雪', type: PokemonElementType.ice, power: 40, description: '将冰冷的细雪 吹向对手进行攻击。 有时会让对手陷入冰冻状态。' },
    ],
  },
  clamperl: {
    flavorText: '别看它长这样，它可是食肉的。 用２片外壳牢牢夹住猎物， 直到完全不动了才会放开。',
    stats: { hp: 35, attack: 64, defense: 85, specialAttack: 74, specialDefense: 55, speed: 32 },
    moves: [
      { name: '贝壳夹击', type: PokemonElementType.water, power: 35, description: '用非常坚固且厚实的贝壳， 在４～５回合内 夹住对手进行攻击。' },
      { name: '水枪', type: PokemonElementType.water, power: 40, description: '向对手猛烈地喷射 水流进行攻击。' },
      { name: '潮旋', type: PokemonElementType.water, power: 35, description: '将对手困在激烈的 水流旋涡中， 在４～５回合内进行攻击。' },
      { name: '铁壁', type: PokemonElementType.steel, power: null, description: '将皮肤变得坚硬如铁， 从而大幅提高自己的防御。' },
    ],
  },
  huntail: {
    flavorText: '游泳能力不太强。 会挥动尾巴来吸引猎物， 在很接近的时候一口咬住。',
    stats: { hp: 55, attack: 104, defense: 105, specialAttack: 94, specialDefense: 75, speed: 52 },
    moves: [
      { name: '潮旋', type: PokemonElementType.water, power: 35, description: '将对手困在激烈的 水流旋涡中， 在４～５回合内进行攻击。' },
      { name: '水炮', type: PokemonElementType.water, power: 110, description: '向对手猛烈地喷射 大量水流进行攻击。' },
      { name: '接棒', type: PokemonElementType.normal, power: null, description: '和后备宝可梦进行替换。 换上的宝可梦能直接继承 其能力的变化。' },
      { name: '刺耳声', type: PokemonElementType.normal, power: null, description: '发出不由自主想要 捂起耳朵的刺耳声， 从而大幅降低对手的防御。' },
    ],
  },
  gorebyss: {
    flavorText: '身体的颜色根据水温而变化。 阿罗拉的樱花鱼呈现出 令人炫目的鲜艳色彩。',
    stats: { hp: 55, attack: 84, defense: 105, specialAttack: 114, specialDefense: 75, speed: 52 },
    moves: [
      { name: '念力', type: PokemonElementType.psychic, power: 50, description: '向对手发送 微弱的念力进行攻击。 有时会使对手混乱。' },
      { name: '瞬间失忆', type: PokemonElementType.psychic, power: null, description: '将头脑清空， 瞬间忘记某事， 从而大幅提高自己的特防。' },
      { name: '潮旋', type: PokemonElementType.water, power: 35, description: '将对手困在激烈的 水流旋涡中， 在４～５回合内进行攻击。' },
      { name: '水炮', type: PokemonElementType.water, power: 110, description: '向对手猛烈地喷射 大量水流进行攻击。' },
    ],
  },
  relicanth: {
    flavorText: '从１亿年前起就是相同的样子。 因为体内富含脂肪， 所以可以承受深海的水压。',
    stats: { hp: 100, attack: 90, defense: 130, specialAttack: 45, specialDefense: 65, speed: 55 },
    moves: [
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
      { name: '哈欠', type: PokemonElementType.normal, power: null, description: '打个大哈欠引起睡意。 在下一回合让对手陷入睡眠状态。' },
      { name: '水枪', type: PokemonElementType.water, power: 40, description: '向对手猛烈地喷射 水流进行攻击。' },
    ],
  },
  luvdisc: {
    flavorText: '变成只有独自１只的爱心鱼 无精打采地，尽是空虚。 就在那时被大嘴鸥叼走了。',
    stats: { hp: 43, attack: 30, defense: 55, specialAttack: 40, specialDefense: 65, speed: 97 },
    moves: [
      { name: '天使之吻', type: PokemonElementType.normal, power: null, description: '像天使般可爱地亲吻对手， 从而使对手混乱。' },
      { name: '抓狂', type: PokemonElementType.normal, power: null, description: '抓狂般乱打进行攻击。 自己的ＨＰ越少， 招式的威力越大。' },
      { name: '水枪', type: PokemonElementType.water, power: 40, description: '向对手猛烈地喷射 水流进行攻击。' },
      { name: '撒娇', type: PokemonElementType.normal, power: null, description: '可爱地凝视， 诱使对手疏忽大意， 从而大幅降低对手的攻击。' },
    ],
  },
  bagon: {
    flavorText: '它相信自己早晚能飞， 听说是因为受到 遗传基因中信息的影响。',
    stats: { hp: 45, attack: 75, defense: 60, specialAttack: 40, specialDefense: 30, speed: 50 },
    moves: [
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '龙息', type: PokemonElementType.dragon, power: 60, description: '将强烈的气息 吹向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '龙爪', type: PokemonElementType.dragon, power: 80, description: '用尖锐的巨爪 劈开对手进行攻击。' },
      { name: '愤怒', type: PokemonElementType.normal, power: 20, description: '如果在使出招式后 受到攻击的话， 会因愤怒的力量而提高攻击。' },
    ],
  },
  beldum: {
    flavorText: '细胞全部是磁铁。 使用磁力和伙伴之间进行交流。',
    stats: { hp: 40, attack: 55, defense: 80, specialAttack: 35, specialDefense: 60, speed: 30 },
    moves: [
      { name: '猛撞', type: PokemonElementType.normal, power: 90, description: '以惊人的气势 撞向对手进行攻击。 自己也会受到少许伤害。' },
    ],
  },
  shelgon: {
    flavorText: '细胞在壳中 以爆发般的速度变化， 为进化做准备。',
    stats: { hp: 65, attack: 95, defense: 100, specialAttack: 60, specialDefense: 50, speed: 50 },
    moves: [
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '龙息', type: PokemonElementType.dragon, power: 60, description: '将强烈的气息 吹向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '龙爪', type: PokemonElementType.dragon, power: 80, description: '用尖锐的巨爪 劈开对手进行攻击。' },
      { name: '愤怒', type: PokemonElementType.normal, power: 20, description: '如果在使出招式后 受到攻击的话， 会因愤怒的力量而提高攻击。' },
    ],
  },
  salamence: {
    flavorText: '一生气就会忘记自我，把周围 都破坏掉。破坏会持续不断， 直到暴飞龙精疲力尽。',
    stats: { hp: 95, attack: 135, defense: 80, specialAttack: 110, specialDefense: 80, speed: 100 },
    moves: [
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '龙息', type: PokemonElementType.dragon, power: 60, description: '将强烈的气息 吹向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '龙爪', type: PokemonElementType.dragon, power: 80, description: '用尖锐的巨爪 劈开对手进行攻击。' },
      { name: '飞翔', type: PokemonElementType.flying, power: 90, description: '第１回合飞上天空， 第２回合攻击对手。' },
    ],
  },
  metang: {
    flavorText: '２只铁哑铃组合起来， 精神力量也变为２倍。 但是智商并没有发生改变。',
    stats: { hp: 60, attack: 75, defense: 100, specialAttack: 55, specialDefense: 80, speed: 50 },
    moves: [
      { name: '彗星拳', type: PokemonElementType.steel, power: 90, description: '使出彗星般的拳头攻击对手。 有时会提高自己的攻击。' },
      { name: '追打', type: PokemonElementType.dark, power: 40, description: '当对手替换宝可梦上场时 使出此招式的话， 能够以２倍的威力进行攻击。' },
      { name: '金属爪', type: PokemonElementType.steel, power: 50, description: '用钢铁之爪 劈开对手进行攻击。 有时会提高自己的攻击。' },
      { name: '念力', type: PokemonElementType.psychic, power: 50, description: '向对手发送 微弱的念力进行攻击。 有时会使对手混乱。' },
    ],
  },
  metagross: {
    flavorText: '用４只爪子和庞大的身体 牢牢地按住猎物后， 用腹部的牙齿嘎嘣嘎嘣地啃咬。',
    stats: { hp: 80, attack: 135, defense: 130, specialAttack: 95, specialDefense: 90, speed: 70 },
    moves: [
      { name: '彗星拳', type: PokemonElementType.steel, power: 90, description: '使出彗星般的拳头攻击对手。 有时会提高自己的攻击。' },
      { name: '追打', type: PokemonElementType.dark, power: 40, description: '当对手替换宝可梦上场时 使出此招式的话， 能够以２倍的威力进行攻击。' },
      { name: '金属爪', type: PokemonElementType.steel, power: 50, description: '用钢铁之爪 劈开对手进行攻击。 有时会提高自己的攻击。' },
      { name: '念力', type: PokemonElementType.psychic, power: 50, description: '向对手发送 微弱的念力进行攻击。 有时会使对手混乱。' },
    ],
  },
  regirock: {
    flavorText: '身上任何一个部分都由 岩石构成。即使身体磨损了 也会自己用岩石去修补。',
    stats: { hp: 80, attack: 100, defense: 200, specialAttack: 50, specialDefense: 100, speed: 50 },
    moves: [
      { name: '锁定', type: PokemonElementType.normal, power: null, description: '紧紧瞄准对手， 下次攻击必定会打中。' },
      { name: '落石', type: PokemonElementType.rock, power: 50, description: '拿起小岩石， 投掷对手进行攻击。' },
      { name: '电磁炮', type: PokemonElementType.electric, power: 120, description: '发射大炮一样的 电流进行攻击。 让对手陷入麻痹状态。' },
      { name: '大爆炸', type: PokemonElementType.normal, power: 250, description: '引发大爆炸， 攻击自己周围所有的宝可梦。 使用后自己会陷入濒死。' },
    ],
  },
  regice: {
    flavorText: '会操控冰冷至零下２００度 的冷气，将接近自己的 家伙一下子冰镇起来。',
    stats: { hp: 80, attack: 50, defense: 100, specialAttack: 100, specialDefense: 200, speed: 50 },
    moves: [
      { name: '锁定', type: PokemonElementType.normal, power: null, description: '紧紧瞄准对手， 下次攻击必定会打中。' },
      { name: '电磁炮', type: PokemonElementType.electric, power: 120, description: '发射大炮一样的 电流进行攻击。 让对手陷入麻痹状态。' },
      { name: '大爆炸', type: PokemonElementType.normal, power: 250, description: '引发大爆炸， 攻击自己周围所有的宝可梦。 使用后自己会陷入濒死。' },
      { name: '瞬间失忆', type: PokemonElementType.psychic, power: null, description: '将头脑清空， 瞬间忘记某事， 从而大幅提高自己的特防。' },
    ],
  },
  registeel: {
    flavorText: '虽然也拥有能伸能缩的柔软性， 但它其实是由比任何金属 都要结实的神秘物质构成的。',
    stats: { hp: 80, attack: 75, defense: 150, specialAttack: 75, specialDefense: 150, speed: 50 },
    moves: [
      { name: '锁定', type: PokemonElementType.normal, power: null, description: '紧紧瞄准对手， 下次攻击必定会打中。' },
      { name: '电磁炮', type: PokemonElementType.electric, power: 120, description: '发射大炮一样的 电流进行攻击。 让对手陷入麻痹状态。' },
      { name: '金属爪', type: PokemonElementType.steel, power: 50, description: '用钢铁之爪 劈开对手进行攻击。 有时会提高自己的攻击。' },
      { name: '大爆炸', type: PokemonElementType.normal, power: 250, description: '引发大爆炸， 攻击自己周围所有的宝可梦。 使用后自己会陷入濒死。' },
    ],
  },
  latias: {
    flavorText: 'LATIAS is highly sensitive to the emotions of people. If it senses any hostility, this POKéMON ruffles the feathers all over its body and cries shrilly to intimidate the foe.',
    stats: { hp: 80, attack: 80, defense: 90, specialAttack: 110, specialDefense: 130, speed: 110 },
    moves: [
      { name: '薄雾球', type: PokemonElementType.psychic, power: 95, description: '用围绕着雾状 羽毛的球进行攻击。 有时会降低对手的特攻。' },
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
      { name: '精神波', type: PokemonElementType.psychic, power: null, description: '向对手发射 神奇的念波进行攻击。 每次使用，伤害都会改变。' },
      { name: '焕然一新', type: PokemonElementType.normal, power: null, description: '让身体休息， 治愈自己身上所中的 毒、麻痹、灼伤的异常状态。' },
    ],
  },
  kyogre: {
    flavorText: 'KYOGRE has the power to create massive rain clouds that cover the entire sky and bring about torrential downpours. This POKéMON saved people who were suffering from droughts.',
    stats: { hp: 100, attack: 100, defense: 90, specialAttack: 150, specialDefense: 140, speed: 90 },
    moves: [
      { name: '喷水', type: PokemonElementType.water, power: 150, description: '掀起潮水进行攻击。 自己的ＨＰ越少， 招式的威力越小。' },
      { name: '绝对零度', type: PokemonElementType.ice, power: null, description: '给对手一击濒死。 如果是冰属性以外的宝可梦使用， 就会难以打中。' },
      { name: '原始之力', type: PokemonElementType.rock, power: 60, description: '用原始之力进行攻击。 有时会提高 自己所有的能力。' },
      { name: '水炮', type: PokemonElementType.water, power: 110, description: '向对手猛烈地喷射 大量水流进行攻击。' },
    ],
  },
  latios: {
    flavorText: 'LATIOS has the ability to make its foe see an image of what it has seen or imagines in its head. This POKéMON is intelligent and understands human speech.',
    stats: { hp: 80, attack: 90, defense: 80, specialAttack: 130, specialDefense: 110, speed: 110 },
    moves: [
      { name: '洁净光芒', type: PokemonElementType.psychic, power: 95, description: '释放耀眼的光芒进行攻击。 有时会降低对手的特防。' },
      { name: '精神波', type: PokemonElementType.psychic, power: null, description: '向对手发射 神奇的念波进行攻击。 每次使用，伤害都会改变。' },
      { name: '焕然一新', type: PokemonElementType.normal, power: null, description: '让身体休息， 治愈自己身上所中的 毒、麻痹、灼伤的异常状态。' },
      { name: '临别礼物', type: PokemonElementType.dark, power: null, description: '虽然会使自己陷入濒死， 但是能够大幅降低 对手的攻击和特攻。' },
    ],
  },
  groudon: {
    flavorText: 'GROUDON has long been described in mythology as the POKéMON that raised lands and expanded continents. This POKéMON took to sleep after a cataclysmic battle with KYOGRE.',
    stats: { hp: 100, attack: 150, defense: 140, specialAttack: 100, specialDefense: 90, speed: 90 },
    moves: [
      { name: '喷火', type: PokemonElementType.fire, power: 150, description: '爆发怒火攻击对手。 自己的ＨＰ越少， 招式的威力越小。' },
      { name: '地裂', type: PokemonElementType.ground, power: null, description: '让对手掉落于地裂的 裂缝中进行攻击。 只要命中就会一击濒死。' },
      { name: '劈开', type: PokemonElementType.normal, power: 70, description: '用爪子或镰刀等 劈开对手进行攻击。 容易击中要害。' },
      { name: '健美', type: PokemonElementType.fighting, power: null, description: '使出全身力气绷紧肌肉， 从而提高自己的攻击和防御。' },
    ],
  },
  rayquaza: {
    flavorText: 'RAYQUAZA lived for hundreds of millions of years in the earth’s ozone layer, never descending to the ground. This POKéMON appears to feed on water and particles in the atmosphere.',
    stats: { hp: 105, attack: 150, defense: 90, specialAttack: 150, specialDefense: 90, speed: 95 },
    moves: [
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '龙之舞', type: PokemonElementType.dragon, power: null, description: '激烈地跳起神秘 且强有力的舞蹈。 从而提高自己的攻击和速度。' },
      { name: '龙卷风', type: PokemonElementType.dragon, power: 40, description: '兴起龙卷风， 将对手卷入进行攻击。 有时会使对手畏缩。' },
      { name: '龙爪', type: PokemonElementType.dragon, power: 80, description: '用尖锐的巨爪 劈开对手进行攻击。' },
    ],
  },
  jirachi: {
    flavorText: '每１０００年让它听一次 清澈的歌声，就能让它 维持７天的清醒。',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: '破灭之愿', type: PokemonElementType.steel, power: 140, description: '使用招式２回合后， 会用无数道光束攻击对手。' },
      { name: '宇宙力量', type: PokemonElementType.psychic, power: null, description: '汲取宇宙中神秘的力量， 从而提高自己的防御和特防。' },
      { name: '焕然一新', type: PokemonElementType.normal, power: null, description: '让身体休息， 治愈自己身上所中的 毒、麻痹、灼伤的异常状态。' },
      { name: '祈愿', type: PokemonElementType.normal, power: null, description: '在下一回合回复自己或是 替换出场的宝可梦最大ＨＰ的一半。' },
    ],
  },
  deoxys: {
    flavorText: 'The DNA of a space virus underwent a sudden mutation upon exposure to a laser beam and resulted in DEOXYS. The crystalline organ on this POKéMON’s chest appears to be its brain.',
    stats: { hp: 50, attack: 150, defense: 50, specialAttack: 150, specialDefense: 50, speed: 150 },
    moves: [
      { name: '精神突进', type: PokemonElementType.psychic, power: 140, description: '使出全部力量攻击对手。 使用之后会因为反作用力， 自己的特攻大幅降低。' },
      { name: '紧束', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 紧束对手进行攻击。' },
      { name: '瞬间移动', type: PokemonElementType.psychic, power: null, description: '停止和野生宝可梦战斗并逃走。' },
      { name: '宇宙力量', type: PokemonElementType.psychic, power: null, description: '汲取宇宙中神秘的力量， 从而提高自己的防御和特防。' },
    ],
  },
  deoxys_speed: {
    flavorText: 'The DNA of a space virus underwent a sudden mutation upon exposure to a laser beam and resulted in DEOXYS. The crystalline organ on this POKéMON’s chest appears to be its brain.',
    stats: { hp: 50, attack: 95, defense: 90, specialAttack: 95, specialDefense: 90, speed: 180 },
    moves: [
      { name: '精神突进', type: PokemonElementType.psychic, power: 140, description: '使出全部力量攻击对手。 使用之后会因为反作用力， 自己的特攻大幅降低。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '紧束', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 紧束对手进行攻击。' },
      { name: '自我再生', type: PokemonElementType.normal, power: null, description: '让细胞再生， 从而回复自己 最大ＨＰ的一半。' },
    ],
  },
  deoxys_attack: {
    flavorText: 'The DNA of a space virus underwent a sudden mutation upon exposure to a laser beam and resulted in DEOXYS. The crystalline organ on this POKéMON’s chest appears to be its brain.',
    stats: { hp: 50, attack: 180, defense: 20, specialAttack: 180, specialDefense: 20, speed: 150 },
    moves: [
      { name: '精神突进', type: PokemonElementType.psychic, power: 140, description: '使出全部力量攻击对手。 使用之后会因为反作用力， 自己的特攻大幅降低。' },
      { name: '紧束', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 紧束对手进行攻击。' },
      { name: '瞬间移动', type: PokemonElementType.psychic, power: null, description: '停止和野生宝可梦战斗并逃走。' },
      { name: '宇宙力量', type: PokemonElementType.psychic, power: null, description: '汲取宇宙中神秘的力量， 从而提高自己的防御和特防。' },
    ],
  },
  deoxys_defense: {
    flavorText: 'The DNA of a space virus underwent a sudden mutation upon exposure to a laser beam and resulted in DEOXYS. The crystalline organ on this POKéMON’s chest appears to be its brain.',
    stats: { hp: 50, attack: 70, defense: 160, specialAttack: 70, specialDefense: 160, speed: 90 },
    moves: [
      { name: '精神突进', type: PokemonElementType.psychic, power: 140, description: '使出全部力量攻击对手。 使用之后会因为反作用力， 自己的特攻大幅降低。' },
      { name: '紧束', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 紧束对手进行攻击。' },
      { name: '瞬间移动', type: PokemonElementType.psychic, power: null, description: '停止和野生宝可梦战斗并逃走。' },
      { name: '镜面反射', type: PokemonElementType.psychic, power: null, description: '从对手那里受到 特殊攻击的伤害将以 ２倍返还给同一个对手。' },
    ],
  },
  turtwig: {
    flavorText: 'Made from soil, the shell on its back hardens when it drinks water. It lives along lakes.',
    stats: { hp: 55, attack: 68, defense: 64, specialAttack: 45, specialDefense: 55, speed: 31 },
    moves: [
      { name: '缩入壳中', type: PokemonElementType.water, power: null, description: '缩入壳里保护身体， 从而提高自己的防御。' },
      { name: '飞叶快刀', type: PokemonElementType.grass, power: 55, description: '飞出叶片， 切斩对手进行攻击。 容易击中要害。' },
      { name: '吸取', type: PokemonElementType.grass, power: 20, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '超级吸取', type: PokemonElementType.grass, power: 40, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
    ],
  },
  grotle: {
    flavorText: 'A GROTLE that lives in the forest is said to have its own secret springwater.',
    stats: { hp: 75, attack: 89, defense: 85, specialAttack: 55, specialDefense: 65, speed: 36 },
    moves: [
      { name: '缩入壳中', type: PokemonElementType.water, power: null, description: '缩入壳里保护身体， 从而提高自己的防御。' },
      { name: '飞叶快刀', type: PokemonElementType.grass, power: 55, description: '飞出叶片， 切斩对手进行攻击。 容易击中要害。' },
      { name: '吸取', type: PokemonElementType.grass, power: 20, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '超级吸取', type: PokemonElementType.grass, power: 40, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
    ],
  },
  torterra: {
    flavorText: 'Some Pokémon are born on a Torterra’s back and spend their entire life there.',
    stats: { hp: 95, attack: 109, defense: 105, specialAttack: 75, specialDefense: 85, speed: 56 },
    moves: [
      { name: '木槌', type: PokemonElementType.grass, power: 120, description: '用坚硬的躯体 撞击对手进行攻击。 自己也会受到不小的伤害。' },
      { name: '缩入壳中', type: PokemonElementType.water, power: null, description: '缩入壳里保护身体， 从而提高自己的防御。' },
      { name: '飞叶快刀', type: PokemonElementType.grass, power: 55, description: '飞出叶片， 切斩对手进行攻击。 容易击中要害。' },
      { name: '吸取', type: PokemonElementType.grass, power: 20, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
    ],
  },
  chimchar: {
    flavorText: 'It agilely scales sheer cliffs to live atop craggy mountains. Its fire is put out when it sleeps.',
    stats: { hp: 44, attack: 58, defense: 44, specialAttack: 58, specialDefense: 44, speed: 61 },
    moves: [
      { name: '偷懒', type: PokemonElementType.normal, power: null, description: '偷懒休息。 回复自己最大ＨＰ的一半。' },
      { name: '火焰轮', type: PokemonElementType.fire, power: 60, description: '让火焰覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
    ],
  },
  monferno: {
    flavorText: 'To intimidate attackers, it stretches the fire on its tail to make itself appear bigger.',
    stats: { hp: 64, attack: 78, defense: 52, specialAttack: 78, specialDefense: 52, speed: 81 },
    moves: [
      { name: '偷懒', type: PokemonElementType.normal, power: null, description: '偷懒休息。 回复自己最大ＨＰ的一半。' },
      { name: '音速拳', type: PokemonElementType.fighting, power: 40, description: '以迅雷不及掩耳之势出拳。 必定能够先制攻击。' },
      { name: '火焰轮', type: PokemonElementType.fire, power: 60, description: '让火焰覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
    ],
  },
  infernape: {
    flavorText: 'It uses a special kind of martial arts involving all its limbs. Its fire never goes out.',
    stats: { hp: 76, attack: 104, defense: 71, specialAttack: 104, specialDefense: 71, speed: 108 },
    moves: [
      { name: '音速拳', type: PokemonElementType.fighting, power: 40, description: '以迅雷不及掩耳之势出拳。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '火焰轮', type: PokemonElementType.fire, power: 60, description: '让火焰覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入灼伤状态。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
    ],
  },
  piplup: {
    flavorText: 'Because it is very proud, it hates accepting food from people. Its thick down guards it from cold.',
    stats: { hp: 53, attack: 51, defense: 53, specialAttack: 61, specialDefense: 56, speed: 40 },
    moves: [
      { name: '啄钻', type: PokemonElementType.flying, power: 80, description: '一边旋转，一边将尖喙 刺入对手进行攻击。' },
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
    ],
  },
  prinplup: {
    flavorText: 'It lives alone, away from others. Apparently, every one of them believes it is the most important.',
    stats: { hp: 64, attack: 66, defense: 68, specialAttack: 81, specialDefense: 76, speed: 50 },
    moves: [
      { name: '啄钻', type: PokemonElementType.flying, power: 80, description: '一边旋转，一边将尖喙 刺入对手进行攻击。' },
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
    ],
  },
  empoleon: {
    flavorText: 'The three horns that extend from its beak attest to its power. The leader has the biggest horns.',
    stats: { hp: 84, attack: 86, defense: 88, specialAttack: 111, specialDefense: 101, speed: 60 },
    moves: [
      { name: '啄钻', type: PokemonElementType.flying, power: 80, description: '一边旋转，一边将尖喙 刺入对手进行攻击。' },
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
      { name: '水流喷射', type: PokemonElementType.water, power: 40, description: '以迅雷不及掩耳之势 扑向对手。 必定能够先制攻击。' },
    ],
  },
  starly: {
    flavorText: 'They flock in great numbers. Though small, they flap their wings with great power.',
    stats: { hp: 40, attack: 55, defense: 30, specialAttack: 30, specialDefense: 30, speed: 60 },
    moves: [
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '吹飞', type: PokemonElementType.normal, power: null, description: '吹飞对手，强制拉后备宝可梦上场。 如果对手为野生宝可梦， 战斗将直接结束。' },
      { name: '勇鸟猛攻', type: PokemonElementType.flying, power: 120, description: '收拢翅膀， 通过低空飞行突击对手。 自己也会受到不小的伤害。' },
      { name: '电光一闪', type: PokemonElementType.normal, power: 40, description: '以迅雷不及掩耳之势扑向对手。 必定能够先制攻击。' },
    ],
  },
  staravia: {
    flavorText: 'It flies around forests and fields in search of bug Pokémon. It stays within a huge flock.',
    stats: { hp: 55, attack: 75, defense: 50, specialAttack: 40, specialDefense: 40, speed: 80 },
    moves: [
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '吹飞', type: PokemonElementType.normal, power: null, description: '吹飞对手，强制拉后备宝可梦上场。 如果对手为野生宝可梦， 战斗将直接结束。' },
      { name: '勇鸟猛攻', type: PokemonElementType.flying, power: 120, description: '收拢翅膀， 通过低空飞行突击对手。 自己也会受到不小的伤害。' },
      { name: '电光一闪', type: PokemonElementType.normal, power: 40, description: '以迅雷不及掩耳之势扑向对手。 必定能够先制攻击。' },
    ],
  },
  staraptor: {
    flavorText: 'It has a savage nature. It will courageously challenge foes that are much larger.',
    stats: { hp: 85, attack: 120, defense: 70, specialAttack: 50, specialDefense: 60, speed: 100 },
    moves: [
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '吹飞', type: PokemonElementType.normal, power: null, description: '吹飞对手，强制拉后备宝可梦上场。 如果对手为野生宝可梦， 战斗将直接结束。' },
      { name: '勇鸟猛攻', type: PokemonElementType.flying, power: 120, description: '收拢翅膀， 通过低空飞行突击对手。 自己也会受到不小的伤害。' },
      { name: '近身战', type: PokemonElementType.fighting, power: 120, description: '放弃守护， 向对手的怀里突击。 自己的防御和特防会降低。' },
    ],
  },
  bidoof: {
    flavorText: 'A comparison revealed that Bidoof’s front teeth grow at the same rate as Rattata’s.',
    stats: { hp: 59, attack: 45, defense: 40, specialAttack: 35, specialDefense: 40, speed: 31 },
    moves: [
      { name: '必杀门牙', type: PokemonElementType.normal, power: 80, description: '用锋利的门牙 牢牢地咬住对手进行攻击。 有时会使对手畏缩。' },
      { name: '愤怒门牙', type: PokemonElementType.normal, power: null, description: '用锋利的门牙 猛烈地咬住对手进行攻击。 对手的ＨＰ减半。' },
      { name: '哈欠', type: PokemonElementType.normal, power: null, description: '打个大哈欠引起睡意。 在下一回合让对手陷入睡眠状态。' },
      { name: '瞬间失忆', type: PokemonElementType.psychic, power: null, description: '将头脑清空， 瞬间忘记某事， 从而大幅提高自己的特防。' },
    ],
  },
  bibarel: {
    flavorText: 'It makes its nest by damming streams with bark and mud. It is known as an industrious worker.',
    stats: { hp: 79, attack: 85, defense: 60, specialAttack: 55, specialDefense: 60, speed: 71 },
    moves: [
      { name: '必杀门牙', type: PokemonElementType.normal, power: 80, description: '用锋利的门牙 牢牢地咬住对手进行攻击。 有时会使对手畏缩。' },
      { name: '愤怒门牙', type: PokemonElementType.normal, power: null, description: '用锋利的门牙 猛烈地咬住对手进行攻击。 对手的ＨＰ减半。' },
      { name: '哈欠', type: PokemonElementType.normal, power: null, description: '打个大哈欠引起睡意。 在下一回合让对手陷入睡眠状态。' },
      { name: '瞬间失忆', type: PokemonElementType.psychic, power: null, description: '将头脑清空， 瞬间忘记某事， 从而大幅提高自己的特防。' },
    ],
  },
  kricketot: {
    flavorText: 'It shakes its head back to front, causing its antennae to hit each other and sound like a xylophone.',
    stats: { hp: 37, attack: 25, defense: 41, specialAttack: 25, specialDefense: 41, speed: 25 },
    moves: [
      { name: '虫咬', type: PokemonElementType.bug, power: 60, description: '咬住进行攻击。 当对手携带树果时， 可以食用并获得其效果。' },
      { name: '忍耐', type: PokemonElementType.normal, power: null, description: '在２回合内忍受攻击， 受到的伤害会 ２倍返还给对手。' },
      { name: '叫声', type: PokemonElementType.normal, power: null, description: '让对手听可爱的叫声， 引开注意力使其疏忽， 从而降低对手的攻击。' },
    ],
  },
  kricketune: {
    flavorText: 'It crosses its knifelike arms in front of its chest when it cries. It can compose melodies ad lib.',
    stats: { hp: 77, attack: 85, defense: 51, specialAttack: 55, specialDefense: 51, speed: 65 },
    moves: [
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
      { name: '唱歌', type: PokemonElementType.normal, power: null, description: '让对手听舒适、 美妙的歌声， 从而陷入睡眠状态。' },
      { name: '虫鸣', type: PokemonElementType.bug, power: 90, description: '利用振动发出音波进行攻击。 有时会降低对手的特防。' },
      { name: '吸血', type: PokemonElementType.bug, power: 80, description: '吸取血液攻击对手。 可以回复给予对手 伤害的一半ＨＰ。' },
    ],
  },
  shinx: {
    flavorText: '靠伸缩肌肉来制造电能。 如果看到它兴奋地浑身颤抖， 就说明它正在猛烈发电。',
    stats: { hp: 45, attack: 65, defense: 34, specialAttack: 40, specialDefense: 34, speed: 45 },
    moves: [
      { name: '电光', type: PokemonElementType.electric, power: 65, description: '让电流覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
      { name: '放电', type: PokemonElementType.electric, power: 80, description: '用耀眼的电击 攻击自己周围所有的宝可梦。 有时会陷入麻痹状态。' },
      { name: '雷电牙', type: PokemonElementType.electric, power: 65, description: '用蓄满电流的牙齿咬住对手。 有时会使对手畏缩 或陷入麻痹状态。' },
    ],
  },
  luxio: {
    flavorText: '当把尾巴和伙伴连接在一起时， 可以分享到对方的电能， 从而释放出更加强力的电击。',
    stats: { hp: 60, attack: 85, defense: 49, specialAttack: 60, specialDefense: 49, speed: 60 },
    moves: [
      { name: '电光', type: PokemonElementType.electric, power: 65, description: '让电流覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
      { name: '放电', type: PokemonElementType.electric, power: 80, description: '用耀眼的电击 攻击自己周围所有的宝可梦。 有时会陷入麻痹状态。' },
      { name: '雷电牙', type: PokemonElementType.electric, power: 65, description: '用蓄满电流的牙齿咬住对手。 有时会使对手畏缩 或陷入麻痹状态。' },
    ],
  },
  luxray: {
    flavorText: '拥有透视能力的宝可梦。 能够立刻发现身处于 厚厚墙壁另一侧的猎物。',
    stats: { hp: 80, attack: 120, defense: 79, specialAttack: 95, specialDefense: 79, speed: 70 },
    moves: [
      { name: '电光', type: PokemonElementType.electric, power: 65, description: '让电流覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
      { name: '放电', type: PokemonElementType.electric, power: 80, description: '用耀眼的电击 攻击自己周围所有的宝可梦。 有时会陷入麻痹状态。' },
      { name: '雷电牙', type: PokemonElementType.electric, power: 65, description: '用蓄满电流的牙齿咬住对手。 有时会使对手畏缩 或陷入麻痹状态。' },
    ],
  },
  budew: {
    flavorText: '会散布带有毒素的花粉。 培育时所用的水越干净， 所含有的毒性就越高。',
    stats: { hp: 40, attack: 30, defense: 35, specialAttack: 50, specialDefense: 70, speed: 55 },
    moves: [
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
      { name: '麻痹粉', type: PokemonElementType.grass, power: null, description: '撒出麻痹粉， 从而让对手陷入麻痹状态。' },
      { name: '生长', type: PokemonElementType.normal, power: null, description: '让身体一下子长大， 从而提高攻击和特攻。' },
      { name: '吸取', type: PokemonElementType.grass, power: 20, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
    ],
  },
  roserade: {
    flavorText: '会用馥郁芬芳的花香 迷惑敌人，并用荆棘上 的鞭子猛力抽打对方。',
    stats: { hp: 60, attack: 70, defense: 65, specialAttack: 125, specialDefense: 105, speed: 90 },
    moves: [
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '甜甜香气', type: PokemonElementType.normal, power: null, description: '用香气大幅降低对手的闪避率。' },
      { name: '超级吸取', type: PokemonElementType.grass, power: 40, description: '吸取对手的养分进行攻击。 可以回复给予对手 伤害的一半ＨＰ。' },
      { name: '魔法叶', type: PokemonElementType.grass, power: 60, description: '散落可以追踪 对手的神奇叶片。 攻击必定会命中。' },
    ],
  },
  cranidos: {
    flavorText: '生活在大约１亿年前的密林中。 用最拿手的头锤对抗化石翼龙。',
    stats: { hp: 67, attack: 125, defense: 40, specialAttack: 30, specialDefense: 30, speed: 58 },
    moves: [
      { name: '双刃头锤', type: PokemonElementType.rock, power: 150, description: '拼命使出浑身力气， 向对手进行头锤攻击。 自己也会受到非常大的伤害。' },
      { name: '追打', type: PokemonElementType.dark, power: 40, description: '当对手替换宝可梦上场时 使出此招式的话， 能够以２倍的威力进行攻击。' },
      { name: '聚气', type: PokemonElementType.normal, power: null, description: '深深地吸口气，集中精神。 自己的攻击 会变得容易击中要害。' },
      { name: '原始之力', type: PokemonElementType.rock, power: 60, description: '用原始之力进行攻击。 有时会提高 自己所有的能力。' },
    ],
  },
  rampardos: {
    flavorText: '反复使出头锤的头盖骨变得又硬又厚。 但脑子比起头盖龙有所缩减。',
    stats: { hp: 97, attack: 165, defense: 60, specialAttack: 65, specialDefense: 50, speed: 58 },
    moves: [
      { name: '双刃头锤', type: PokemonElementType.rock, power: 150, description: '拼命使出浑身力气， 向对手进行头锤攻击。 自己也会受到非常大的伤害。' },
      { name: '追打', type: PokemonElementType.dark, power: 40, description: '当对手替换宝可梦上场时 使出此招式的话， 能够以２倍的威力进行攻击。' },
      { name: '聚气', type: PokemonElementType.normal, power: null, description: '深深地吸口气，集中精神。 自己的攻击 会变得容易击中要害。' },
      { name: '原始之力', type: PokemonElementType.rock, power: 60, description: '用原始之力进行攻击。 有时会提高 自己所有的能力。' },
    ],
  },
  shieldon: {
    flavorText: '大量的化石被发现， 但是几乎没有 脸的部分有损伤或缺失的情况。',
    stats: { hp: 30, attack: 42, defense: 118, specialAttack: 42, specialDefense: 88, speed: 30 },
    moves: [
      { name: '金属爆炸', type: PokemonElementType.steel, power: null, description: '使出招式前， 将最后受到的招式的伤害 大力返还给对手。' },
      { name: '金属音', type: PokemonElementType.steel, power: null, description: '让对手听摩擦金属般 讨厌的声音。 大幅降低对手的特防。' },
      { name: '原始之力', type: PokemonElementType.rock, power: 60, description: '用原始之力进行攻击。 有时会提高 自己所有的能力。' },
      { name: '铁头', type: PokemonElementType.steel, power: 80, description: '用钢铁般 坚硬的头部进行攻击。 有时会使对手畏缩。' },
    ],
  },
  bastiodon: {
    flavorText: '如果是从正面的话， 可以防住所有的攻击， 但从后方被袭的话就束手无策了。',
    stats: { hp: 60, attack: 52, defense: 168, specialAttack: 47, specialDefense: 138, speed: 30 },
    moves: [
      { name: '金属爆炸', type: PokemonElementType.steel, power: null, description: '使出招式前， 将最后受到的招式的伤害 大力返还给对手。' },
      { name: '金属音', type: PokemonElementType.steel, power: null, description: '让对手听摩擦金属般 讨厌的声音。 大幅降低对手的特防。' },
      { name: '挡路', type: PokemonElementType.normal, power: null, description: '张开双手进行阻挡， 封住对手的退路， 使其不能逃走。' },
      { name: '原始之力', type: PokemonElementType.rock, power: 60, description: '用原始之力进行攻击。 有时会提高 自己所有的能力。' },
    ],
  },
  burmy_plant: {
    flavorText: 'To shelter itself from cold, wintry winds, it covers itself with a cloak made of twigs and leaves.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: '虫咬', type: PokemonElementType.bug, power: 60, description: '咬住进行攻击。 当对手携带树果时， 可以食用并获得其效果。' },
      { name: '撞击', type: PokemonElementType.normal, power: 40, description: '用整个身体 撞向对手进行攻击。' },
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
      { name: '守住', type: PokemonElementType.normal, power: null, description: '完全抵挡 对手的攻击。 连续使出则容易失败。' },
    ],
  },
  burmy_sandy: {
    flavorText: 'To shelter itself from cold, wintry winds, it covers itself with a cloak made of twigs and leaves.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: '虫咬', type: PokemonElementType.bug, power: 60, description: '咬住进行攻击。 当对手携带树果时， 可以食用并获得其效果。' },
      { name: '撞击', type: PokemonElementType.normal, power: 40, description: '用整个身体 撞向对手进行攻击。' },
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
      { name: '守住', type: PokemonElementType.normal, power: null, description: '完全抵挡 对手的攻击。 连续使出则容易失败。' },
    ],
  },
  burmy_trash: {
    flavorText: 'To shelter itself from cold, wintry winds, it covers itself with a cloak made of twigs and leaves.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: '虫咬', type: PokemonElementType.bug, power: 60, description: '咬住进行攻击。 当对手携带树果时， 可以食用并获得其效果。' },
      { name: '撞击', type: PokemonElementType.normal, power: 40, description: '用整个身体 撞向对手进行攻击。' },
      { name: '觉醒力量', type: PokemonElementType.normal, power: 60, description: '招式的属性会随着 使用此招式的宝可梦而改变。' },
      { name: '守住', type: PokemonElementType.normal, power: null, description: '完全抵挡 对手的攻击。 连续使出则容易失败。' },
    ],
  },
  wormadam_plant: {
    flavorText: 'When BURMY evolved, its cloak became a part of this Pokémon’s body. The cloak is never shed.',
    stats: { hp: 60, attack: 59, defense: 85, specialAttack: 79, specialDefense: 105, speed: 36 },
    moves: [
      { name: '飞叶快刀', type: PokemonElementType.grass, power: 55, description: '飞出叶片， 切斩对手进行攻击。 容易击中要害。' },
      { name: '生长', type: PokemonElementType.normal, power: null, description: '让身体一下子长大， 从而提高攻击和特攻。' },
      { name: '虫咬', type: PokemonElementType.bug, power: 60, description: '咬住进行攻击。 当对手携带树果时， 可以食用并获得其效果。' },
      { name: '飞叶风暴', type: PokemonElementType.grass, power: 130, description: '用尖尖的叶片向对手卷起风暴。 使用之后因为反作用力 自己的特攻会大幅降低。' },
    ],
  },
  wormadam_sandy: {
    flavorText: 'When BURMY evolved, its cloak became a part of this Pokémon’s body. The cloak is never shed.',
    stats: { hp: 60, attack: 79, defense: 105, specialAttack: 59, specialDefense: 85, speed: 36 },
    moves: [
      { name: '地裂', type: PokemonElementType.ground, power: null, description: '让对手掉落于地裂的 裂缝中进行攻击。 只要命中就会一击濒死。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
      { name: '虫咬', type: PokemonElementType.bug, power: 60, description: '咬住进行攻击。 当对手携带树果时， 可以食用并获得其效果。' },
      { name: '念力', type: PokemonElementType.psychic, power: 50, description: '向对手发送 微弱的念力进行攻击。 有时会使对手混乱。' },
    ],
  },
  wormadam_trash: {
    flavorText: 'When BURMY evolved, its cloak became a part of this Pokémon’s body. The cloak is never shed.',
    stats: { hp: 60, attack: 69, defense: 95, specialAttack: 69, specialDefense: 95, speed: 36 },
    moves: [
      { name: '镜光射击', type: PokemonElementType.steel, power: 65, description: '抛光自己的身体， 向对手释放出闪光之力。 有时会降低对手的命中率。' },
      { name: '金属音', type: PokemonElementType.steel, power: null, description: '让对手听摩擦金属般 讨厌的声音。 大幅降低对手的特防。' },
      { name: '虫咬', type: PokemonElementType.bug, power: 60, description: '咬住进行攻击。 当对手携带树果时， 可以食用并获得其效果。' },
      { name: '念力', type: PokemonElementType.psychic, power: 50, description: '向对手发送 微弱的念力进行攻击。 有时会使对手混乱。' },
    ],
  },
  mothim: {
    flavorText: 'It loves the honey of flowers and steals honey collected by COMBEE.',
    stats: { hp: 70, attack: 94, defense: 50, specialAttack: 94, specialDefense: 50, speed: 66 },
    moves: [
      { name: '保护色', type: PokemonElementType.normal, power: null, description: '根据所在场所不同， 如水边、草丛和洞窟等， 可以改变自己的属性。' },
      { name: '毒粉', type: PokemonElementType.poison, power: null, description: '撒出毒粉， 从而让对手陷入中毒状态。' },
      { name: '银色旋风', type: PokemonElementType.bug, power: 60, description: '在风中掺入鳞粉攻击对手。 有时会提高自己的全部能力。' },
      { name: '起风', type: PokemonElementType.flying, power: 40, description: '用翅膀将刮起的狂风 袭向对手进行攻击。' },
    ],
  },
  combee_female: {
    flavorText: '３只一直都在一起， 但每一只对花蜜的 喜好却略有不同。',
    stats: { hp: 30, attack: 30, defense: 42, specialAttack: 30, specialDefense: 42, speed: 70 },
    moves: [
      { name: '起风', type: PokemonElementType.flying, power: 40, description: '用翅膀将刮起的狂风 袭向对手进行攻击。' },
      { name: '甜甜香气', type: PokemonElementType.normal, power: null, description: '用香气大幅降低对手的闪避率。' },
      { name: '虫咬', type: PokemonElementType.bug, power: 60, description: '咬住进行攻击。 当对手携带树果时， 可以食用并获得其效果。' },
    ],
  },
  combee_male: {
    flavorText: '３只一直都在一起， 但每一只对花蜜的 喜好却略有不同。',
    stats: { hp: 30, attack: 30, defense: 42, specialAttack: 30, specialDefense: 42, speed: 70 },
    moves: [
      { name: '起风', type: PokemonElementType.flying, power: 40, description: '用翅膀将刮起的狂风 袭向对手进行攻击。' },
      { name: '甜甜香气', type: PokemonElementType.normal, power: null, description: '用香气大幅降低对手的闪避率。' },
      { name: '虫咬', type: PokemonElementType.bug, power: 60, description: '咬住进行攻击。 当对手携带树果时， 可以食用并获得其效果。' },
    ],
  },
  vespiquen: {
    flavorText: '自由自在地指挥孩子们 与敌人战斗。孩子们会 为了蜂女王而拼上性命。',
    stats: { hp: 70, attack: 80, defense: 102, specialAttack: 80, specialDefense: 102, speed: 40 },
    moves: [
      { name: '攻击指令', type: PokemonElementType.bug, power: 90, description: '召唤手下， 让其朝对手发起攻击。 容易击中要害。' },
      { name: '回复指令', type: PokemonElementType.bug, power: null, description: '召唤手下疗伤。 回复自己最大ＨＰ的一半。' },
      { name: '防御指令', type: PokemonElementType.bug, power: null, description: '召唤手下， 让其附在自己的身体上。 可以提高自己的防御和特防。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
    ],
  },
  pachirisu: {
    flavorText: 'It makes fur balls that crackle with static electricity. It stores them with berries in tree holes.',
    stats: { hp: 60, attack: 45, defense: 70, specialAttack: 45, specialDefense: 90, speed: 95 },
    moves: [
      { name: '天使之吻', type: PokemonElementType.normal, power: null, description: '像天使般可爱地亲吻对手， 从而使对手混乱。' },
      { name: '电光', type: PokemonElementType.electric, power: 65, description: '让电流覆盖全身， 猛撞向对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '愤怒门牙', type: PokemonElementType.normal, power: null, description: '用锋利的门牙 猛烈地咬住对手进行攻击。 对手的ＨＰ减半。' },
      { name: '放电', type: PokemonElementType.electric, power: 80, description: '用耀眼的电击 攻击自己周围所有的宝可梦。 有时会陷入麻痹状态。' },
    ],
  },
  buizel: {
    flavorText: 'It has a flotation sac that is like an inflatable collar. It floats on water with its head out.',
    stats: { hp: 55, attack: 65, defense: 35, specialAttack: 60, specialDefense: 30, speed: 85 },
    moves: [
      { name: '音爆', type: PokemonElementType.normal, power: null, description: '将冲击波 撞向对手进行攻击。 必定会给予２０的伤害。' },
      { name: '旋风刀', type: PokemonElementType.normal, power: 80, description: '制造风之刃， 于第２回合攻击对手。 容易击中要害。' },
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
      { name: '水流喷射', type: PokemonElementType.water, power: 40, description: '以迅雷不及掩耳之势 扑向对手。 必定能够先制攻击。' },
    ],
  },
  floatzel: {
    flavorText: 'It floats using its well-developed flotation sac. It assists in the rescues of drowning people.',
    stats: { hp: 85, attack: 105, defense: 55, specialAttack: 85, specialDefense: 50, speed: 115 },
    moves: [
      { name: '音爆', type: PokemonElementType.normal, power: null, description: '将冲击波 撞向对手进行攻击。 必定会给予２０的伤害。' },
      { name: '旋风刀', type: PokemonElementType.normal, power: 80, description: '制造风之刃， 于第２回合攻击对手。 容易击中要害。' },
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
      { name: '水流喷射', type: PokemonElementType.water, power: 40, description: '以迅雷不及掩耳之势 扑向对手。 必定能够先制攻击。' },
    ],
  },
  cherubi: {
    flavorText: '它营养丰富的小球 是鸟宝可梦的最爱。 为了不被啄到而四处逃跑。',
    stats: { hp: 45, attack: 35, defense: 45, specialAttack: 62, specialDefense: 53, speed: 35 },
    moves: [
      { name: '幸运咒语', type: PokemonElementType.normal, power: null, description: '向天许愿， 从而在５回合内不会 被对手的攻击打中要害。' },
      { name: '生长', type: PokemonElementType.normal, power: null, description: '让身体一下子长大， 从而提高攻击和特攻。' },
      { name: '寄生种子', type: PokemonElementType.grass, power: null, description: '植入寄生种子后，将在每回合 一点一点吸取对手的ＨＰ， 从而用来回复自己的ＨＰ。' },
      { name: '烦恼种子', type: PokemonElementType.grass, power: null, description: '种植心神不宁的种子。 使对手不能入眠， 并将特性变成不眠。' },
    ],
  },
  cherrim: {
    flavorText: '花苞形态时性格稳重， 几乎不会动，只是静静地 等待太阳光的出现。',
    stats: { hp: 70, attack: 60, defense: 70, specialAttack: 87, specialDefense: 78, speed: 85 },
    moves: [
      { name: '花瓣舞', type: PokemonElementType.grass, power: 120, description: '在２～３回合内， 散落花瓣攻击对手。 之后自己会陷入混乱。' },
      { name: '幸运咒语', type: PokemonElementType.normal, power: null, description: '向天许愿， 从而在５回合内不会 被对手的攻击打中要害。' },
      { name: '生长', type: PokemonElementType.normal, power: null, description: '让身体一下子长大， 从而提高攻击和特攻。' },
      { name: '寄生种子', type: PokemonElementType.grass, power: null, description: '植入寄生种子后，将在每回合 一点一点吸取对手的ＨＰ， 从而用来回复自己的ＨＰ。' },
    ],
  },
  shellos_east: {
    flavorText: '岩岸是它主要的居所。 根据栖息地的环境和食物的质地， 颜色和样子会有所不同。',
    stats: { hp: 76, attack: 48, defense: 48, specialAttack: 57, specialDefense: 62, speed: 34 },
    moves: [
      { name: '泥巴炸弹', type: PokemonElementType.ground, power: 65, description: '向对手发射 坚硬的泥弹进行攻击。 有时会降低对手的命中率。' },
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '自我再生', type: PokemonElementType.normal, power: null, description: '让细胞再生， 从而回复自己 最大ＨＰ的一半。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
    ],
  },
  shellos_west: {
    flavorText: '岩岸是它主要的居所。 根据栖息地的环境和食物的质地， 颜色和样子会有所不同。',
    stats: { hp: 76, attack: 48, defense: 48, specialAttack: 57, specialDefense: 62, speed: 34 },
    moves: [
      { name: '泥巴炸弹', type: PokemonElementType.ground, power: 65, description: '向对手发射 坚硬的泥弹进行攻击。 有时会降低对手的命中率。' },
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '自我再生', type: PokemonElementType.normal, power: null, description: '让细胞再生， 从而回复自己 最大ＨＰ的一半。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
    ],
  },
  gastrodon_east: {
    flavorText: '再生能力很高。 即使被鱼宝可梦咬断， 也会在几小时内恢复原状哦。',
    stats: { hp: 111, attack: 83, defense: 68, specialAttack: 92, specialDefense: 82, speed: 39 },
    moves: [
      { name: '泥巴炸弹', type: PokemonElementType.ground, power: 65, description: '向对手发射 坚硬的泥弹进行攻击。 有时会降低对手的命中率。' },
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '自我再生', type: PokemonElementType.normal, power: null, description: '让细胞再生， 从而回复自己 最大ＨＰ的一半。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
    ],
  },
  gastrodon_west: {
    flavorText: '再生能力很高。 即使被鱼宝可梦咬断， 也会在几小时内恢复原状哦。',
    stats: { hp: 111, attack: 83, defense: 68, specialAttack: 92, specialDefense: 82, speed: 39 },
    moves: [
      { name: '泥巴炸弹', type: PokemonElementType.ground, power: 65, description: '向对手发射 坚硬的泥弹进行攻击。 有时会降低对手的命中率。' },
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
      { name: '自我再生', type: PokemonElementType.normal, power: null, description: '让细胞再生， 从而回复自己 最大ＨＰ的一半。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
    ],
  },
  ambipom: {
    flavorText: '围绕着舒适的树木的问题， 一直在和投掷猴群体争夺领地。 但结果是五五分。',
    stats: { hp: 75, attack: 100, defense: 66, specialAttack: 60, specialDefense: 66, speed: 115 },
    moves: [
      { name: '二连击', type: PokemonElementType.normal, power: 35, description: '使用尾巴等 拍打对手进行攻击。 连续２次给予伤害。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '挠痒', type: PokemonElementType.normal, power: null, description: '给对手挠痒，使其发笑， 从而降低对手的攻击和防御。' },
      { name: '抓', type: PokemonElementType.normal, power: 40, description: '用坚硬且无比锋利的爪子 抓对手进行攻击。' },
    ],
  },
  drifloon: {
    flavorText: '据说会牵着年幼孩子的手， 将其带去另一个世界。 不喜欢身体重的孩子。',
    stats: { hp: 90, attack: 50, defense: 34, specialAttack: 60, specialDefense: 44, speed: 70 },
    moves: [
      { name: '缠绕', type: PokemonElementType.normal, power: 10, description: '用触手或青藤等缠绕进行攻击。 有时会降低对手的速度。' },
      { name: '变小', type: PokemonElementType.normal, power: null, description: '蜷缩身体显得很小， 从而大幅提高 自己的闪避率。' },
      { name: '喷出', type: PokemonElementType.normal, power: null, description: '将积蓄的力量 撞向对手进行攻击。 积蓄得越多，威力越大。' },
      { name: '吞下', type: PokemonElementType.normal, power: null, description: '将积蓄的力量吞下， 从而回复自己的ＨＰ。 积蓄得越多，回复越大。' },
    ],
  },
  drifblim: {
    flavorText: '曾经发生过乘着随风球 外出旅行的男人就这么 行踪不明的事件。',
    stats: { hp: 150, attack: 80, defense: 44, specialAttack: 90, specialDefense: 54, speed: 80 },
    moves: [
      { name: '缠绕', type: PokemonElementType.normal, power: 10, description: '用触手或青藤等缠绕进行攻击。 有时会降低对手的速度。' },
      { name: '变小', type: PokemonElementType.normal, power: null, description: '蜷缩身体显得很小， 从而大幅提高 自己的闪避率。' },
      { name: '喷出', type: PokemonElementType.normal, power: null, description: '将积蓄的力量 撞向对手进行攻击。 积蓄得越多，威力越大。' },
      { name: '吞下', type: PokemonElementType.normal, power: null, description: '将积蓄的力量吞下， 从而回复自己的ＨＰ。 积蓄得越多，回复越大。' },
    ],
  },
  buneary: {
    flavorText: '手脚的力量很弱， 但如果死命伸长紧紧卷起的耳朵， 连大岩石也能粉碎。',
    stats: { hp: 55, attack: 66, defense: 44, specialAttack: 44, specialDefense: 56, speed: 85 },
    moves: [
      { name: '飞踢', type: PokemonElementType.fighting, power: 100, description: '使出高高的腾空踢攻击对手。 如果踢偏则自己会受到伤害。' },
      { name: '迷昏拳', type: PokemonElementType.normal, power: 70, description: '有节奏地出拳攻击对手。 有时会使对手混乱。' },
      { name: '治愈之愿', type: PokemonElementType.psychic, power: null, description: '虽然自己陷入濒死， 但可以治愈后备上场的 宝可梦的异常状态以及回复ＨＰ。' },
      { name: '跃起', type: PokemonElementType.normal, power: null, description: '也不攻击只是一蹦一蹦地跳， 什么都不会发生……' },
    ],
  },
  lopunny: {
    flavorText: '一年会换２次毛。 用这个毛制作的 围巾和帽子非常温暖。',
    stats: { hp: 65, attack: 76, defense: 84, specialAttack: 54, specialDefense: 96, speed: 105 },
    moves: [
      { name: '飞踢', type: PokemonElementType.fighting, power: 100, description: '使出高高的腾空踢攻击对手。 如果踢偏则自己会受到伤害。' },
      { name: '迷昏拳', type: PokemonElementType.normal, power: 70, description: '有节奏地出拳攻击对手。 有时会使对手混乱。' },
      { name: '治愈之愿', type: PokemonElementType.psychic, power: null, description: '虽然自己陷入濒死， 但可以治愈后备上场的 宝可梦的异常状态以及回复ＨＰ。' },
      { name: '跃起', type: PokemonElementType.normal, power: null, description: '也不攻击只是一蹦一蹦地跳， 什么都不会发生……' },
    ],
  },
  mismagius: {
    flavorText: '不知从何处出现， 碎碎念着咒文，施加诅咒， 制造恐怖的幻象。',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 105, specialDefense: 105, speed: 105 },
    moves: [
      { name: '幸运咒语', type: PokemonElementType.normal, power: null, description: '向天许愿， 从而在５回合内不会 被对手的攻击打中要害。' },
      { name: '精神波', type: PokemonElementType.psychic, power: null, description: '向对手发射 神奇的念波进行攻击。 每次使用，伤害都会改变。' },
      { name: '魔法叶', type: PokemonElementType.grass, power: 60, description: '散落可以追踪 对手的神奇叶片。 攻击必定会命中。' },
      { name: '惊吓', type: PokemonElementType.ghost, power: 30, description: '用尖叫声等 突然惊吓对手进行攻击。 有时会使对手畏缩。' },
    ],
  },
  honchkrow: {
    flavorText: '夜行性。只要鸣叫一声， 就会有超过１００只的 黑暗鸦跟班聚集起来。',
    stats: { hp: 100, attack: 125, defense: 52, specialAttack: 105, specialDefense: 52, speed: 71 },
    moves: [
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '追打', type: PokemonElementType.dark, power: 40, description: '当对手替换宝可梦上场时 使出此招式的话， 能够以２倍的威力进行攻击。' },
      { name: '暗袭要害', type: PokemonElementType.dark, power: 70, description: '抓住瞬间的空隙 切斩对手。 容易击中要害。' },
      { name: '黑雾', type: PokemonElementType.ice, power: null, description: '升起黑雾，将正在场上战斗的 全体宝可梦的能力变回原点。' },
    ],
  },
  glameow: {
    flavorText: 'It claws if displeased and purrs when affectionate. Its fickleness is very popular among some.',
    stats: { hp: 49, attack: 55, defense: 42, specialAttack: 42, specialDefense: 37, speed: 85 },
    moves: [
      { name: '借助', type: PokemonElementType.normal, power: null, description: '向我方紧急求助， 从我方宝可梦已学会的 招式中随机使用１个。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '击掌奇袭', type: PokemonElementType.normal, power: 40, description: '进行先制攻击，使对手畏缩。 要在出场后立刻使出才能成功。' },
    ],
  },
  purugly: {
    flavorText: 'It is a brazen brute that barges its way into another Pokémon’s nest and claims it as its own.',
    stats: { hp: 71, attack: 82, defense: 64, specialAttack: 64, specialDefense: 59, speed: 112 },
    moves: [
      { name: '借助', type: PokemonElementType.normal, power: null, description: '向我方紧急求助， 从我方宝可梦已学会的 招式中随机使用１个。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '击掌奇袭', type: PokemonElementType.normal, power: 40, description: '进行先制攻击，使对手畏缩。 要在出场后立刻使出才能成功。' },
    ],
  },
  chingling: {
    flavorText: 'It emits cries by agitating an orb at the back of its throat. It moves with flouncing hops.',
    stats: { hp: 45, attack: 30, defense: 50, specialAttack: 65, specialDefense: 50, speed: 45 },
    moves: [
      { name: '紧束', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 紧束对手进行攻击。' },
      { name: '念力', type: PokemonElementType.psychic, power: 50, description: '向对手发送 微弱的念力进行攻击。 有时会使对手混乱。' },
      { name: '惊吓', type: PokemonElementType.ghost, power: 30, description: '用尖叫声等 突然惊吓对手进行攻击。 有时会使对手畏缩。' },
      { name: '珍藏', type: PokemonElementType.normal, power: 140, description: '当战斗中已学会的招式 全部使用过后， 才能开始使出珍藏的招式。' },
    ],
  },
  stunky: {
    flavorText: '瞄准对手的脸，从屁股 喷出奇臭无比的液体。 液体能喷到５米开外。',
    stats: { hp: 63, attack: 63, defense: 47, specialAttack: 41, specialDefense: 41, speed: 74 },
    moves: [
      { name: '毒瓦斯', type: PokemonElementType.poison, power: null, description: '将毒瓦斯吹到对手的脸上， 从而让对手陷入中毒状态。' },
      { name: '烟幕', type: PokemonElementType.normal, power: null, description: '向对手喷出烟或墨汁等， 从而降低对手的命中率。' },
      { name: '临别礼物', type: PokemonElementType.dark, power: null, description: '虽然会使自己陷入濒死， 但是能够大幅降低 对手的攻击和特攻。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
    ],
  },
  skuntank: {
    flavorText: '会在肚子里囤满臭液， 从尾巴喷出臭液攻击敌人。 臭味会因吃下的东西而不同。',
    stats: { hp: 103, attack: 93, defense: 67, specialAttack: 71, specialDefense: 61, speed: 84 },
    moves: [
      { name: '毒瓦斯', type: PokemonElementType.poison, power: null, description: '将毒瓦斯吹到对手的脸上， 从而让对手陷入中毒状态。' },
      { name: '烟幕', type: PokemonElementType.normal, power: null, description: '向对手喷出烟或墨汁等， 从而降低对手的命中率。' },
      { name: '临别礼物', type: PokemonElementType.dark, power: null, description: '虽然会使自己陷入濒死， 但是能够大幅降低 对手的攻击和特攻。' },
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
    ],
  },
  bronzor: {
    flavorText: '会在古老的遗迹出现。 身上的纹路不属于伽勒尔文化， 因此至今仍然谜团重重。',
    stats: { hp: 57, attack: 24, defense: 86, specialAttack: 24, specialDefense: 86, speed: 23 },
    moves: [
      { name: '回复封锁', type: PokemonElementType.psychic, power: null, description: '在５回合内 无法通过招式、特性或 携带的道具来回复ＨＰ。' },
      { name: '神通力', type: PokemonElementType.psychic, power: 80, description: '发出看不见的 神奇力量进行攻击。 有时会使对手畏缩。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
    ],
  },
  bronzong: {
    flavorText: '被称为能召唤雨云的神明。 生气时会用像钟声一般令人 毛骨悚然的声音来威吓对手。',
    stats: { hp: 67, attack: 89, defense: 116, specialAttack: 79, specialDefense: 116, speed: 33 },
    moves: [
      { name: '回复封锁', type: PokemonElementType.psychic, power: null, description: '在５回合内 无法通过招式、特性或 携带的道具来回复ＨＰ。' },
      { name: '神通力', type: PokemonElementType.psychic, power: 80, description: '发出看不见的 神奇力量进行攻击。 有时会使对手畏缩。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
    ],
  },
  bonsly: {
    flavorText: '很怕水，所以生活在干燥的地方。 因为周围绿色很少，所以相当醒目。',
    stats: { hp: 50, attack: 80, defense: 95, specialAttack: 10, specialDefense: 45, speed: 10 },
    moves: [
      { name: '落石', type: PokemonElementType.rock, power: 50, description: '拿起小岩石， 投掷对手进行攻击。' },
      { name: '仿效', type: PokemonElementType.normal, power: null, description: '模仿对手刚才使出的招式， 并使出相同招式。 如果对手还没出招则会失败。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
      { name: '摔打', type: PokemonElementType.normal, power: 80, description: '使用长长的尾巴或藤蔓等 摔打对手进行攻击。' },
    ],
  },
  mimeJr: {
    flavorText: '会拼命地模仿对方的动作和表情。 但还说不上模仿得很好。',
    stats: { hp: 20, attack: 25, defense: 45, specialAttack: 70, specialDefense: 90, speed: 60 },
    moves: [
      { name: '瑜伽姿势', type: PokemonElementType.psychic, power: null, description: '唤醒身体深处 沉睡的力量， 从而提高自己的攻击。' },
      { name: '屏障', type: PokemonElementType.psychic, power: null, description: '制造坚固的壁障， 从而大幅提高自己的防御。' },
      { name: '连环巴掌', type: PokemonElementType.normal, power: 15, description: '用连环巴掌 拍打对手进行攻击。 连续攻击２～５次。' },
      { name: '仿效', type: PokemonElementType.normal, power: null, description: '模仿对手刚才使出的招式， 并使出相同招式。 如果对手还没出招则会失败。' },
    ],
  },
  happiny: {
    flavorText: '因为很小，还不能生蛋。 会寻找白白的圆圆的 石头来作为替代。',
    stats: { hp: 100, attack: 5, defense: 5, specialAttack: 15, specialDefense: 65, speed: 30 },
    moves: [
      { name: '天使之吻', type: PokemonElementType.normal, power: null, description: '像天使般可爱地亲吻对手， 从而使对手混乱。' },
      { name: '焕然一新', type: PokemonElementType.normal, power: null, description: '让身体休息， 治愈自己身上所中的 毒、麻痹、灼伤的异常状态。' },
      { name: '仿效', type: PokemonElementType.normal, power: null, description: '模仿对手刚才使出的招式， 并使出相同招式。 如果对手还没出招则会失败。' },
      { name: '拍击', type: PokemonElementType.normal, power: 40, description: '使用长长的尾巴或手等 拍打对手进行攻击。' },
    ],
  },
  chatot: {
    flavorText: 'It can learn and speak human words. If they gather, they all learn the same saying.',
    stats: { hp: 76, attack: 65, defense: 45, specialAttack: 92, specialDefense: 42, speed: 91 },
    moves: [
      { name: '喋喋不休', type: PokemonElementType.flying, power: 65, description: '用非常烦人的， 喋喋不休的音波攻击对手。 使对手混乱。' },
      { name: '鹦鹉学舌', type: PokemonElementType.flying, power: null, description: '模仿对手使用的招式， 自己也使用相同招式。' },
      { name: '唱歌', type: PokemonElementType.normal, power: null, description: '让对手听舒适、 美妙的歌声， 从而陷入睡眠状态。' },
      { name: '乱击', type: PokemonElementType.normal, power: 15, description: '用角或喙 刺向对手进行攻击。 连续攻击２～５次。' },
    ],
  },
  spiritomb: {
    flavorText: '由１０８个灵魂聚在一起 变成了宝可梦，但似乎有 性格恶劣的灵魂混在里面。',
    stats: { hp: 50, attack: 92, defense: 108, specialAttack: 92, specialDefense: 108, speed: 35 },
    moves: [
      { name: '影子偷袭', type: PokemonElementType.ghost, power: 40, description: '伸长影子， 从对手的背后进行攻击。 必定能够先制攻击。' },
      { name: '临别礼物', type: PokemonElementType.dark, power: null, description: '虽然会使自己陷入濒死， 但是能够大幅降低 对手的攻击和特攻。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
      { name: '奇异之风', type: PokemonElementType.ghost, power: 60, description: '突然刮起毛骨悚然的暴风 攻击对手。有时会提高 自己的全部能力。' },
    ],
  },
  gible: {
    flavorText: '生活在因地热而温暖的洞窟里。 即便如此，一旦变冷就会和 伙伴们紧紧挨在一起。',
    stats: { hp: 58, attack: 70, defense: 45, specialAttack: 40, specialDefense: 45, speed: 42 },
    moves: [
      { name: '龙之怒', type: PokemonElementType.dragon, power: null, description: '将愤怒的冲击波 撞向对手进行攻击。 必定会给予４０的伤害。' },
      { name: '龙之俯冲', type: PokemonElementType.dragon, power: 100, description: '释放出骇人的杀气， 一边威慑一边撞击对手。 有时会使对手畏缩。' },
      { name: '流沙地狱', type: PokemonElementType.ground, power: 35, description: '将对手困在 铺天盖地的沙暴中， 在４～５回合内进行攻击。' },
      { name: '龙爪', type: PokemonElementType.dragon, power: 80, description: '用尖锐的巨爪 劈开对手进行攻击。' },
    ],
  },
  gabite: {
    flavorText: '偶尔蜕皮，鳞片会脱落。 其成分中所含的药物成分 可以让疲劳的身体活力四射。',
    stats: { hp: 68, attack: 90, defense: 65, specialAttack: 50, specialDefense: 55, speed: 82 },
    moves: [
      { name: '龙之怒', type: PokemonElementType.dragon, power: null, description: '将愤怒的冲击波 撞向对手进行攻击。 必定会给予４０的伤害。' },
      { name: '龙之俯冲', type: PokemonElementType.dragon, power: 100, description: '释放出骇人的杀气， 一边威慑一边撞击对手。 有时会使对手畏缩。' },
      { name: '流沙地狱', type: PokemonElementType.ground, power: 35, description: '将对手困在 铺天盖地的沙暴中， 在４～５回合内进行攻击。' },
      { name: '龙爪', type: PokemonElementType.dragon, power: 80, description: '用尖锐的巨爪 劈开对手进行攻击。' },
    ],
  },
  garchomp: {
    flavorText: '以媲美喷气式飞机的高速来飞行。 如果冲入鸟宝可梦的群体中， 会就这么把整个群体都吞掉。',
    stats: { hp: 108, attack: 130, defense: 95, specialAttack: 80, specialDefense: 85, speed: 102 },
    moves: [
      { name: '龙之怒', type: PokemonElementType.dragon, power: null, description: '将愤怒的冲击波 撞向对手进行攻击。 必定会给予４０的伤害。' },
      { name: '龙之俯冲', type: PokemonElementType.dragon, power: 100, description: '释放出骇人的杀气， 一边威慑一边撞击对手。 有时会使对手畏缩。' },
      { name: '流沙地狱', type: PokemonElementType.ground, power: 35, description: '将对手困在 铺天盖地的沙暴中， 在４～５回合内进行攻击。' },
      { name: '龙爪', type: PokemonElementType.dragon, power: 80, description: '用尖锐的巨爪 劈开对手进行攻击。' },
    ],
  },
  munchlax: {
    flavorText: '每天必须要吃和自重 同等分量的食物。 味道的好坏并不在意。',
    stats: { hp: 135, attack: 85, defense: 40, specialAttack: 40, specialDefense: 85, speed: 5 },
    moves: [
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '舌舔', type: PokemonElementType.ghost, power: 30, description: '用长长的舌头， 舔遍对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '吞下', type: PokemonElementType.normal, power: null, description: '将积蓄的力量吞下， 从而回复自己的ＨＰ。 积蓄得越多，回复越大。' },
      { name: '蓄力', type: PokemonElementType.normal, power: null, description: '积蓄力量， 提高自己的防御和特防。 最多积蓄３次。' },
    ],
  },
  hippopotas: {
    flavorText: '张大嘴巴移动，连同沙子 把对手一整个吞下去。 会从鼻孔把沙子喷出来丢掉。',
    stats: { hp: 68, attack: 72, defense: 78, specialAttack: 38, specialDefense: 42, speed: 32 },
    moves: [
      { name: '地裂', type: PokemonElementType.ground, power: null, description: '让对手掉落于地裂的 裂缝中进行攻击。 只要命中就会一击濒死。' },
      { name: '流沙地狱', type: PokemonElementType.ground, power: 35, description: '将对手困在 铺天盖地的沙暴中， 在４～５回合内进行攻击。' },
      { name: '哈欠', type: PokemonElementType.normal, power: null, description: '打个大哈欠引起睡意。 在下一回合让对手陷入睡眠状态。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
    ],
  },
  riolu: {
    flavorText: '以“波导”这种波的形式 观察人和宝可梦的感情， 以及自然的样子。',
    stats: { hp: 40, attack: 70, defense: 40, specialAttack: 35, specialDefense: 40, speed: 60 },
    moves: [
      { name: '发劲', type: PokemonElementType.fighting, power: 60, description: '向对手的身体 发出冲击波进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '仿效', type: PokemonElementType.normal, power: null, description: '模仿对手刚才使出的招式， 并使出相同招式。 如果对手还没出招则会失败。' },
      { name: '佯攻', type: PokemonElementType.normal, power: 30, description: '能够攻击正在使用 守住或看穿等招式的对手。 解除其守护效果。' },
    ],
  },
  lucario: {
    flavorText: '不仅仅是读取， 还获得了操控波导的能力。 也会被用于战斗。',
    stats: { hp: 70, attack: 110, defense: 70, specialAttack: 115, specialDefense: 70, speed: 90 },
    moves: [
      { name: '骨棒乱打', type: PokemonElementType.ground, power: 25, description: '用坚硬的骨头 殴打对手进行攻击。 连续攻击２～５次。' },
      { name: '发劲', type: PokemonElementType.fighting, power: 60, description: '向对手的身体 发出冲击波进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '抢先一步', type: PokemonElementType.normal, power: null, description: '提高威力，抢先使出 对手想要使出的招式。 如果不先使出则会失败。' },
    ],
  },
  hippowdon: {
    flavorText: '偶尔会有石子卡在身体的孔洞里。 因为石居蟹会帮忙把石子拿出来， 所以会用心地保护它们。',
    stats: { hp: 108, attack: 112, defense: 118, specialAttack: 68, specialDefense: 72, speed: 47 },
    moves: [
      { name: '地裂', type: PokemonElementType.ground, power: null, description: '让对手掉落于地裂的 裂缝中进行攻击。 只要命中就会一击濒死。' },
      { name: '流沙地狱', type: PokemonElementType.ground, power: 35, description: '将对手困在 铺天盖地的沙暴中， 在４～５回合内进行攻击。' },
      { name: '哈欠', type: PokemonElementType.normal, power: null, description: '打个大哈欠引起睡意。 在下一回合让对手陷入睡眠状态。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
    ],
  },
  skorupi: {
    flavorText: '将自己的身体埋在沙子里， 一声不响地等待猎物。 祖先和烧火蚣的祖先是近亲。',
    stats: { hp: 40, attack: 50, defense: 90, specialAttack: 30, specialDefense: 55, speed: 65 },
    moves: [
      { name: '点穴', type: PokemonElementType.normal, power: null, description: '通过点穴 让身体舒筋活络。 大幅提高某１项能力。' },
      { name: '剧毒牙', type: PokemonElementType.poison, power: 50, description: '用有毒的牙齿 咬住对手进行攻击。 有时会使对手中剧毒。' },
      { name: '十字毒刃', type: PokemonElementType.poison, power: 70, description: '用毒刃劈开对手。 有时会让对手陷入中毒状态， 也容易击中要害。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
    ],
  },
  drapion: {
    flavorText: '虽然拥有剧毒，但只有在 极少数的情况下才会使用。 会用能敲烂汽车的怪力乱打一通。',
    stats: { hp: 70, attack: 90, defense: 110, specialAttack: 60, specialDefense: 75, speed: 95 },
    moves: [
      { name: '点穴', type: PokemonElementType.normal, power: null, description: '通过点穴 让身体舒筋活络。 大幅提高某１项能力。' },
      { name: '剧毒牙', type: PokemonElementType.poison, power: 50, description: '用有毒的牙齿 咬住对手进行攻击。 有时会使对手中剧毒。' },
      { name: '十字毒刃', type: PokemonElementType.poison, power: 70, description: '用毒刃劈开对手。 有时会让对手陷入中毒状态， 也容易击中要害。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
    ],
  },
  croagunk: {
    flavorText: '会从自己脸颊上的毒囊 发出声音来威吓对手， 趁对手畏惧的时间使出毒击。',
    stats: { hp: 48, attack: 61, defense: 40, specialAttack: 61, specialDefense: 40, speed: 50 },
    moves: [
      { name: '泥巴炸弹', type: PokemonElementType.ground, power: 65, description: '向对手发射 坚硬的泥弹进行攻击。 有时会降低对手的命中率。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '吹捧', type: PokemonElementType.dark, power: null, description: '吹捧对手，使其混乱。 同时还会提高对手的特攻。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
    ],
  },
  toxicroak: {
    flavorText: '一跃而起接近敌人， 用有毒的爪子狠抓对方！ 光是擦伤就能将对手ＫＯ。',
    stats: { hp: 83, attack: 106, defense: 65, specialAttack: 86, specialDefense: 65, speed: 85 },
    moves: [
      { name: '泥巴炸弹', type: PokemonElementType.ground, power: 65, description: '向对手发射 坚硬的泥弹进行攻击。 有时会降低对手的命中率。' },
      { name: '毒针', type: PokemonElementType.poison, power: 15, description: '将有毒的针 刺入对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '吹捧', type: PokemonElementType.dark, power: null, description: '吹捧对手，使其混乱。 同时还会提高对手的特攻。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
    ],
  },
  carnivine: {
    flavorText: 'It attracts prey with its sweet-smelling saliva, then chomps down. It takes a whole day to eat prey.',
    stats: { hp: 74, attack: 100, defense: 72, specialAttack: 90, specialDefense: 72, speed: 46 },
    moves: [
      { name: '绞紧', type: PokemonElementType.normal, power: null, description: '用力勒紧对手进行攻击。 对手的ＨＰ越多， 威力越大。' },
      { name: '藤鞭', type: PokemonElementType.grass, power: 45, description: '用如同鞭子般弯曲而细长的藤蔓 摔打对手进行攻击。' },
      { name: '强力鞭打', type: PokemonElementType.grass, power: 120, description: '激烈地挥舞青藤或触手 摔打对手进行攻击。' },
      { name: '喷出', type: PokemonElementType.normal, power: null, description: '将积蓄的力量 撞向对手进行攻击。 积蓄得越多，威力越大。' },
    ],
  },
  finneon: {
    flavorText: '粉红色的那部分皮肤 会储存太阳光并发光。 听说是用来做保护色的。',
    stats: { hp: 49, attack: 49, defense: 56, specialAttack: 49, specialDefense: 61, speed: 66 },
    moves: [
      { name: '银色旋风', type: PokemonElementType.bug, power: 60, description: '在风中掺入鳞粉攻击对手。 有时会提高自己的全部能力。' },
      { name: '水流环', type: PokemonElementType.water, power: null, description: '在自己身体的周围 覆盖用水制造的幕。 每回合回复ＨＰ。' },
      { name: '起风', type: PokemonElementType.flying, power: 40, description: '用翅膀将刮起的狂风 袭向对手进行攻击。' },
      { name: '拍击', type: PokemonElementType.normal, power: 40, description: '使用长长的尾巴或手等 拍打对手进行攻击。' },
    ],
  },
  lumineon: {
    flavorText: '利用光来诱惑猎物靠近， 但是作为天敌的凶猛 鱼宝可梦也靠了过来。',
    stats: { hp: 69, attack: 69, defense: 76, specialAttack: 69, specialDefense: 86, speed: 91 },
    moves: [
      { name: '银色旋风', type: PokemonElementType.bug, power: 60, description: '在风中掺入鳞粉攻击对手。 有时会提高自己的全部能力。' },
      { name: '水流环', type: PokemonElementType.water, power: null, description: '在自己身体的周围 覆盖用水制造的幕。 每回合回复ＨＰ。' },
      { name: '起风', type: PokemonElementType.flying, power: 40, description: '用翅膀将刮起的狂风 袭向对手进行攻击。' },
      { name: '拍击', type: PokemonElementType.normal, power: 40, description: '使用长长的尾巴或手等 拍打对手进行攻击。' },
    ],
  },
  mantyke: {
    flavorText: '非常不认生，很容易亲近。 与小球飞鱼的互动巡游 是非常受欢迎的海滩活动。',
    stats: { hp: 45, attack: 20, defense: 50, specialAttack: 60, specialDefense: 120, speed: 50 },
    moves: [
      { name: '翅膀攻击', type: PokemonElementType.flying, power: 60, description: '大大地展开美丽的翅膀， 将其撞向对手进行攻击。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
      { name: '水流环', type: PokemonElementType.water, power: null, description: '在自己身体的周围 覆盖用水制造的幕。 每回合回复ＨＰ。' },
      { name: '超音波', type: PokemonElementType.normal, power: null, description: '从身体发出 特殊的音波， 从而使对手混乱。' },
    ],
  },
  snover: {
    flavorText: '生活在积雪深厚的山上。 会通过把脚踩进积雪中 来吸收水分和冷气。',
    stats: { hp: 60, attack: 62, defense: 50, specialAttack: 62, specialDefense: 60, speed: 40 },
    moves: [
      { name: '草笛', type: PokemonElementType.grass, power: null, description: '让对手听舒适的笛声， 从而陷入睡眠状态。' },
      { name: '绝对零度', type: PokemonElementType.ice, power: null, description: '给对手一击濒死。 如果是冰属性以外的宝可梦使用， 就会难以打中。' },
      { name: '木槌', type: PokemonElementType.grass, power: 120, description: '用坚硬的躯体 撞击对手进行攻击。 自己也会受到不小的伤害。' },
      { name: '冰砾', type: PokemonElementType.ice, power: 40, description: '瞬间制作冰块， 快速地扔向对手。 必定能够先制攻击。' },
    ],
  },
  abomasnow: {
    flavorText: '会像挥动锤子一样挥下自己 大大的手臂，赶走要袭击 雪笠怪的火红不倒翁群体。',
    stats: { hp: 90, attack: 92, defense: 75, specialAttack: 92, specialDefense: 85, speed: 60 },
    moves: [
      { name: '草笛', type: PokemonElementType.grass, power: null, description: '让对手听舒适的笛声， 从而陷入睡眠状态。' },
      { name: '绝对零度', type: PokemonElementType.ice, power: null, description: '给对手一击濒死。 如果是冰属性以外的宝可梦使用， 就会难以打中。' },
      { name: '木槌', type: PokemonElementType.grass, power: 120, description: '用坚硬的躯体 撞击对手进行攻击。 自己也会受到不小的伤害。' },
      { name: '冰砾', type: PokemonElementType.ice, power: 40, description: '瞬间制作冰块， 快速地扔向对手。 必定能够先制攻击。' },
    ],
  },
  weavile: {
    flavorText: '４～５只一组进行行动。 在岩石和树木上留下记号， 以团队合作捕杀猎物。',
    stats: { hp: 70, attack: 120, defense: 65, specialAttack: 45, specialDefense: 85, speed: 125 },
    moves: [
      { name: '乱抓', type: PokemonElementType.normal, power: 18, description: '用爪子或镰刀等 抓对手进行攻击。 连续攻击２～５次。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
      { name: '金属爪', type: PokemonElementType.steel, power: 50, description: '用钢铁之爪 劈开对手进行攻击。 有时会提高自己的攻击。' },
      { name: '查封', type: PokemonElementType.dark, power: null, description: '让对手在５回合内不能使用 宝可梦携带的道具。训练家也 不能给那只宝可梦使用道具。' },
    ],
  },
  magnezone: {
    flavorText: '从３个组件中放出磁力。 经常有把飞向夜空的自爆磁怪 错看成ＵＦＯ的报告。',
    stats: { hp: 70, attack: 70, defense: 115, specialAttack: 130, specialDefense: 90, speed: 60 },
    moves: [
      { name: '磁铁炸弹', type: PokemonElementType.steel, power: 60, description: '发射吸住对手的 钢铁炸弹。 攻击必定会命中。' },
      { name: '音爆', type: PokemonElementType.normal, power: null, description: '将冲击波 撞向对手进行攻击。 必定会给予２０的伤害。' },
      { name: '镜光射击', type: PokemonElementType.steel, power: 65, description: '抛光自己的身体， 向对手释放出闪光之力。 有时会降低对手的命中率。' },
      { name: '锁定', type: PokemonElementType.normal, power: null, description: '紧紧瞄准对手， 下次攻击必定会打中。' },
    ],
  },
  lickilicky: {
    flavorText: '会举行看谁舌头伸得远的大赛。 目前的最高纪录是２５米。',
    stats: { hp: 110, attack: 85, defense: 95, specialAttack: 80, specialDefense: 95, speed: 50 },
    moves: [
      { name: '绞紧', type: PokemonElementType.normal, power: null, description: '用力勒紧对手进行攻击。 对手的ＨＰ越多， 威力越大。' },
      { name: '抢先一步', type: PokemonElementType.normal, power: null, description: '提高威力，抢先使出 对手想要使出的招式。 如果不先使出则会失败。' },
      { name: '紧束', type: PokemonElementType.normal, power: 15, description: '使用长长的身体或藤蔓等， 在４～５回合内 紧束对手进行攻击。' },
      { name: '舌舔', type: PokemonElementType.ghost, power: 30, description: '用长长的舌头， 舔遍对手进行攻击。 有时会让对手陷入麻痹状态。' },
    ],
  },
  rhyperior: {
    flavorText: '会在手掌的洞里塞进岩石和 石丸子发射出去，每只手里 可以装填３个。',
    stats: { hp: 115, attack: 140, defense: 130, specialAttack: 55, specialDefense: 55, speed: 40 },
    moves: [
      { name: '岩石炮', type: PokemonElementType.rock, power: 150, description: '向对手发射 巨大的岩石进行攻击。 下一回合自己将无法动弹。' },
      { name: '角撞', type: PokemonElementType.normal, power: 65, description: '用尖锐的角攻击对手。' },
      { name: '角钻', type: PokemonElementType.normal, power: null, description: '用旋转的角 刺入对手进行攻击。 只要命中就会一击濒死。' },
      { name: '超级角击', type: PokemonElementType.bug, power: 120, description: '用坚硬且华丽的角狠狠地 刺入对手进行攻击。' },
    ],
  },
  tangrowth: {
    flavorText: '最近的研究表明，它那 能够自由伸长的２个手臂 其实是由藤蔓聚集而成的。',
    stats: { hp: 100, attack: 100, defense: 125, specialAttack: 110, specialDefense: 50, speed: 50 },
    moves: [
      { name: '缠绕', type: PokemonElementType.normal, power: 10, description: '用触手或青藤等缠绕进行攻击。 有时会降低对手的速度。' },
      { name: '绞紧', type: PokemonElementType.normal, power: null, description: '用力勒紧对手进行攻击。 对手的ＨＰ越多， 威力越大。' },
      { name: '藤鞭', type: PokemonElementType.grass, power: 45, description: '用如同鞭子般弯曲而细长的藤蔓 摔打对手进行攻击。' },
      { name: '催眠粉', type: PokemonElementType.grass, power: null, description: '撒出催眠粉， 从而让对手陷入睡眠状态。' },
    ],
  },
  electivire: {
    flavorText: '用尾巴尖尖按住敌人， 输入高压电流。 敌人瞬间就成黑炭了。',
    stats: { hp: 75, attack: 123, defense: 67, specialAttack: 95, specialDefense: 85, speed: 95 },
    moves: [
      { name: '电击', type: PokemonElementType.electric, power: 40, description: '发出电流刺激对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '放电', type: PokemonElementType.electric, power: 80, description: '用耀眼的电击 攻击自己周围所有的宝可梦。 有时会陷入麻痹状态。' },
      { name: '电光一闪', type: PokemonElementType.normal, power: 40, description: '以迅雷不及掩耳之势扑向对手。 必定能够先制攻击。' },
      { name: '火焰拳', type: PokemonElementType.fire, power: 75, description: '用充满火焰的拳头攻击对手。 有时会让对手陷入灼伤状态。' },
    ],
  },
  magmortar: {
    flavorText: '栖息在火山口。 据说一座火山只有一对鸭嘴炎兽。',
    stats: { hp: 75, attack: 95, defense: 67, specialAttack: 125, specialDefense: 95, speed: 83 },
    moves: [
      { name: '喷烟', type: PokemonElementType.fire, power: 80, description: '用熊熊烈火 攻击自己周围所有的宝可梦。 有时会陷入灼伤状态。' },
      { name: '浊雾', type: PokemonElementType.poison, power: 30, description: '将肮脏的浓雾 吹向对手进行攻击。 有时会让对手陷入中毒状态。' },
      { name: '烟幕', type: PokemonElementType.normal, power: null, description: '向对手喷出烟或墨汁等， 从而降低对手的命中率。' },
      { name: '火花', type: PokemonElementType.fire, power: 40, description: '向对手发射 小型火焰进行攻击。 有时会让对手陷入灼伤状态。' },
    ],
  },
  togekiss: {
    flavorText: '不会出现在发生 争端和纷乱的地方。 近来几乎见不到它的身影。',
    stats: { hp: 85, attack: 50, defense: 95, specialAttack: 120, specialDefense: 115, speed: 80 },
    moves: [
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '波导弹', type: PokemonElementType.fighting, power: 80, description: '从体内产生出波导之力， 然后向对手发出。 攻击必定会命中。' },
      { name: '神鸟猛击', type: PokemonElementType.flying, power: 140, description: '第２回合攻击对手。 偶尔使对手畏缩。 也容易击中要害。' },
      { name: '空气斩', type: PokemonElementType.flying, power: 75, description: '用连天空也能劈开的 空气之刃进行攻击。 有时会使对手畏缩。' },
    ],
  },
  yanmega: {
    flavorText: 'By churning its wings, it creates shock waves that inflict critical internal injuries to foes.',
    stats: { hp: 86, attack: 76, defense: 86, specialAttack: 116, specialDefense: 56, speed: 95 },
    moves: [
      { name: '音爆', type: PokemonElementType.normal, power: null, description: '将冲击波 撞向对手进行攻击。 必定会给予２０的伤害。' },
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '虫鸣', type: PokemonElementType.bug, power: 90, description: '利用振动发出音波进行攻击。 有时会降低对手的特防。' },
      { name: '超音波', type: PokemonElementType.normal, power: null, description: '从身体发出 特殊的音波， 从而使对手混乱。' },
    ],
  },
  leafeon: {
    flavorText: '比起动物，细胞构成 更接近植物。用光合作用， 就算不吃也能获得能量。',
    stats: { hp: 65, attack: 110, defense: 130, specialAttack: 60, specialDefense: 65, speed: 95 },
    moves: [
      { name: '草笛', type: PokemonElementType.grass, power: null, description: '让对手听舒适的笛声， 从而陷入睡眠状态。' },
      { name: '叶刃', type: PokemonElementType.grass, power: 90, description: '像用剑一般操纵叶片 切斩对手进行攻击。 容易击中要害。' },
      { name: '飞叶快刀', type: PokemonElementType.grass, power: 55, description: '飞出叶片， 切斩对手进行攻击。 容易击中要害。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
    ],
  },
  glaceon: {
    flavorText: '自由地控制体温， 让大气中的水分冻结， 卷起冰晶。',
    stats: { hp: 65, attack: 60, defense: 110, specialAttack: 130, specialDefense: 95, speed: 65 },
    moves: [
      { name: '屏障', type: PokemonElementType.psychic, power: null, description: '制造坚固的壁障， 从而大幅提高自己的防御。' },
      { name: '冰砾', type: PokemonElementType.ice, power: 40, description: '瞬间制作冰块， 快速地扔向对手。 必定能够先制攻击。' },
      { name: '镜面反射', type: PokemonElementType.psychic, power: null, description: '从对手那里受到 特殊攻击的伤害将以 ２倍返还给同一个对手。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
    ],
  },
  gliscor: {
    flavorText: 'It observes prey while hanging inverted from branches. When the chance presents itself, it swoops!',
    stats: { hp: 75, attack: 95, defense: 125, specialAttack: 45, specialDefense: 75, speed: 95 },
    moves: [
      { name: '断头钳', type: PokemonElementType.normal, power: null, description: '用大钳子或剪刀等 夹断对手进行攻击。 只要命中就会一击濒死。' },
      { name: '变硬', type: PokemonElementType.normal, power: null, description: '全身使劲，让身体变硬， 从而提高自己的防御。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
      { name: '泼沙', type: PokemonElementType.ground, power: null, description: '向对手脸上泼沙子， 从而降低命中率。' },
    ],
  },
  mamoswine: {
    flavorText: '在1万年前的壁画上也能见到 它的身影。曾有一段时期， 人们认为它已经灭绝了。',
    stats: { hp: 110, attack: 130, defense: 80, specialAttack: 70, specialDefense: 60, speed: 80 },
    moves: [
      { name: '泥巴炸弹', type: PokemonElementType.ground, power: 65, description: '向对手发射 坚硬的泥弹进行攻击。 有时会降低对手的命中率。' },
      { name: '细雪', type: PokemonElementType.ice, power: 40, description: '将冰冷的细雪 吹向对手进行攻击。 有时会让对手陷入冰冻状态。' },
      { name: '气味侦测', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '玩泥巴', type: PokemonElementType.ground, power: null, description: '一旦使用此招式， 周围就会弄得到处是泥。 在５回合内减弱电属性的招式。' },
    ],
  },
  porygonZ: {
    flavorText: '以更优秀的宝可梦为目标， 好像新追加的程序状况不佳， 动作很奇怪。',
    stats: { hp: 85, attack: 80, defense: 70, specialAttack: 135, specialDefense: 75, speed: 90 },
    moves: [
      { name: '纹理', type: PokemonElementType.normal, power: null, description: '将自己的属性转换成 和已学会的招式中 第一个招式相同的属性。' },
      { name: '纹理２', type: PokemonElementType.normal, power: null, description: '为了可以抵抗对手 最后使用的招式， 从而使自己的属性发生变化。' },
      { name: '锁定', type: PokemonElementType.normal, power: null, description: '紧紧瞄准对手， 下次攻击必定会打中。' },
      { name: '三重攻击', type: PokemonElementType.normal, power: 80, description: '用３种光线进行攻击。 有时会让对手陷入 麻痹、灼伤或冰冻的状态。' },
    ],
  },
  gallade: {
    flavorText: '被称为武神的宝可梦。 只有在为了保护什么的时候 才会去使用自己的肘刀。',
    stats: { hp: 68, attack: 125, defense: 65, specialAttack: 65, specialDefense: 115, speed: 80 },
    moves: [
      { name: '叶刃', type: PokemonElementType.grass, power: 90, description: '像用剑一般操纵叶片 切斩对手进行攻击。 容易击中要害。' },
      { name: '瞬间移动', type: PokemonElementType.psychic, power: null, description: '停止和野生宝可梦战斗并逃走。' },
      { name: '精神利刃', type: PokemonElementType.psychic, power: 70, description: '用实体化的 心之利刃劈开对手。 容易击中要害。' },
      { name: '佯攻', type: PokemonElementType.normal, power: 30, description: '能够攻击正在使用 守住或看穿等招式的对手。 解除其守护效果。' },
    ],
  },
  probopass: {
    flavorText: '因为会释放强大的磁力， 所以导致附近的电器都变得无法使用。',
    stats: { hp: 60, attack: 55, defense: 145, specialAttack: 75, specialDefense: 150, speed: 40 },
    moves: [
      { name: '磁铁炸弹', type: PokemonElementType.steel, power: 60, description: '发射吸住对手的 钢铁炸弹。 攻击必定会命中。' },
      { name: '锁定', type: PokemonElementType.normal, power: null, description: '紧紧瞄准对手， 下次攻击必定会打中。' },
      { name: '电磁炮', type: PokemonElementType.electric, power: 120, description: '发射大炮一样的 电流进行攻击。 让对手陷入麻痹状态。' },
      { name: '放电', type: PokemonElementType.electric, power: 80, description: '用耀眼的电击 攻击自己周围所有的宝可梦。 有时会陷入麻痹状态。' },
    ],
  },
  dusknoir: {
    flavorText: '没人知道它是否拥有意识。 会从来自灵界的电波中接受指示， 将人和宝可梦带走。',
    stats: { hp: 45, attack: 100, defense: 135, specialAttack: 65, specialDefense: 135, speed: 45 },
    moves: [
      { name: '暗影拳', type: PokemonElementType.ghost, power: 60, description: '使出混影之拳。 攻击必定会命中。' },
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '黑色目光', type: PokemonElementType.normal, power: null, description: '用好似要勾人心魂的黑色目光 一动不动地凝视对手， 使其不能从战斗中逃走。' },
      { name: '影子偷袭', type: PokemonElementType.ghost, power: 40, description: '伸长影子， 从对手的背后进行攻击。 必定能够先制攻击。' },
    ],
  },
  froslass: {
    flavorText: '用冷气把中意的人类 或宝可梦都冻起来。 然后带回巢穴当装饰用。',
    stats: { hp: 70, attack: 80, defense: 70, specialAttack: 80, specialDefense: 70, speed: 110 },
    moves: [
      { name: '唤醒巴掌', type: PokemonElementType.fighting, power: 70, description: '给予睡眠状态下的对手较大的伤害。 但相反对手会从睡眠中醒过来。' },
      { name: '冰砾', type: PokemonElementType.ice, power: 40, description: '瞬间制作冰块， 快速地扔向对手。 必定能够先制攻击。' },
      { name: '细雪', type: PokemonElementType.ice, power: 40, description: '将冰冷的细雪 吹向对手进行攻击。 有时会让对手陷入冰冻状态。' },
      { name: '同命', type: PokemonElementType.ghost, power: null, description: '使出招式后，当受到对手攻击 陷入濒死时，对手也会一同濒死。 连续使出则会失败。' },
    ],
  },
  rotom: {
    flavorText: '某位少年的发明 促使人们开始制造 各种活用洛托姆的机器 。',
    stats: { hp: 50, attack: 50, defense: 77, specialAttack: 95, specialDefense: 77, speed: 91 },
    moves: [
      { name: '电击', type: PokemonElementType.electric, power: 40, description: '发出电流刺激对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
      { name: '奇异之风', type: PokemonElementType.ghost, power: 60, description: '突然刮起毛骨悚然的暴风 攻击对手。有时会提高 自己的全部能力。' },
      { name: '放电', type: PokemonElementType.electric, power: 80, description: '用耀眼的电击 攻击自己周围所有的宝可梦。 有时会陷入麻痹状态。' },
    ],
  },
  rotom_fan: {
    flavorText: '某位少年的发明 促使人们开始制造 各种活用洛托姆的机器 。',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: '电击', type: PokemonElementType.electric, power: 40, description: '发出电流刺激对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
      { name: '奇异之风', type: PokemonElementType.ghost, power: 60, description: '突然刮起毛骨悚然的暴风 攻击对手。有时会提高 自己的全部能力。' },
      { name: '放电', type: PokemonElementType.electric, power: 80, description: '用耀眼的电击 攻击自己周围所有的宝可梦。 有时会陷入麻痹状态。' },
    ],
  },
  rotom_frost: {
    flavorText: '某位少年的发明 促使人们开始制造 各种活用洛托姆的机器 。',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: '电击', type: PokemonElementType.electric, power: 40, description: '发出电流刺激对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
      { name: '奇异之风', type: PokemonElementType.ghost, power: 60, description: '突然刮起毛骨悚然的暴风 攻击对手。有时会提高 自己的全部能力。' },
      { name: '放电', type: PokemonElementType.electric, power: 80, description: '用耀眼的电击 攻击自己周围所有的宝可梦。 有时会陷入麻痹状态。' },
    ],
  },
  rotom_heat: {
    flavorText: '某位少年的发明 促使人们开始制造 各种活用洛托姆的机器 。',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: '电击', type: PokemonElementType.electric, power: 40, description: '发出电流刺激对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
      { name: '奇异之风', type: PokemonElementType.ghost, power: 60, description: '突然刮起毛骨悚然的暴风 攻击对手。有时会提高 自己的全部能力。' },
      { name: '放电', type: PokemonElementType.electric, power: 80, description: '用耀眼的电击 攻击自己周围所有的宝可梦。 有时会陷入麻痹状态。' },
    ],
  },
  rotom_mow: {
    flavorText: '某位少年的发明 促使人们开始制造 各种活用洛托姆的机器 。',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: '电击', type: PokemonElementType.electric, power: 40, description: '发出电流刺激对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
      { name: '奇异之风', type: PokemonElementType.ghost, power: 60, description: '突然刮起毛骨悚然的暴风 攻击对手。有时会提高 自己的全部能力。' },
      { name: '放电', type: PokemonElementType.electric, power: 80, description: '用耀眼的电击 攻击自己周围所有的宝可梦。 有时会陷入麻痹状态。' },
    ],
  },
  rotom_wash: {
    flavorText: '某位少年的发明 促使人们开始制造 各种活用洛托姆的机器 。',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: '电击', type: PokemonElementType.electric, power: 40, description: '发出电流刺激对手进行攻击。 有时会让对手陷入麻痹状态。' },
      { name: '充电', type: PokemonElementType.electric, power: null, description: '提高下一回合使出的 电属性的招式威力。 自己的特防也会提高。' },
      { name: '奇异之风', type: PokemonElementType.ghost, power: 60, description: '突然刮起毛骨悚然的暴风 攻击对手。有时会提高 自己的全部能力。' },
      { name: '放电', type: PokemonElementType.electric, power: 80, description: '用耀眼的电击 攻击自己周围所有的宝可梦。 有时会陷入麻痹状态。' },
    ],
  },
  uxie: {
    flavorText: 'Known as “The Being of Knowledge.” It is said that it can wipe out the memory of those who see its eyes.',
    stats: { hp: 75, attack: 75, defense: 130, specialAttack: 75, specialDefense: 130, speed: 95 },
    moves: [
      { name: '临别礼物', type: PokemonElementType.dark, power: null, description: '虽然会使自己陷入濒死， 但是能够大幅降低 对手的攻击和特攻。' },
      { name: '神通力', type: PokemonElementType.psychic, power: 80, description: '发出看不见的 神奇力量进行攻击。 有时会使对手畏缩。' },
      { name: '哈欠', type: PokemonElementType.normal, power: null, description: '打个大哈欠引起睡意。 在下一回合让对手陷入睡眠状态。' },
      { name: '念力', type: PokemonElementType.psychic, power: 50, description: '向对手发送 微弱的念力进行攻击。 有时会使对手混乱。' },
    ],
  },
  mesprit: {
    flavorText: 'Known as “The Being of Emotion.” It taught humans the nobility of sorrow, pain, and joy.',
    stats: { hp: 80, attack: 105, defense: 105, specialAttack: 105, specialDefense: 105, speed: 80 },
    moves: [
      { name: '治愈之愿', type: PokemonElementType.psychic, power: null, description: '虽然自己陷入濒死， 但可以治愈后备上场的 宝可梦的异常状态以及回复ＨＰ。' },
      { name: '幸运咒语', type: PokemonElementType.normal, power: null, description: '向天许愿， 从而在５回合内不会 被对手的攻击打中要害。' },
      { name: '神通力', type: PokemonElementType.psychic, power: 80, description: '发出看不见的 神奇力量进行攻击。 有时会使对手畏缩。' },
      { name: '仿效', type: PokemonElementType.normal, power: null, description: '模仿对手刚才使出的招式， 并使出相同招式。 如果对手还没出招则会失败。' },
    ],
  },
  azelf: {
    flavorText: 'It is thought that Uxie, Mesprit, and Azelf all came from the same egg.',
    stats: { hp: 75, attack: 125, defense: 70, specialAttack: 125, specialDefense: 70, speed: 115 },
    moves: [
      { name: '神通力', type: PokemonElementType.psychic, power: 80, description: '发出看不见的 神奇力量进行攻击。 有时会使对手畏缩。' },
      { name: '大爆炸', type: PokemonElementType.normal, power: 250, description: '引发大爆炸， 攻击自己周围所有的宝可梦。 使用后自己会陷入濒死。' },
      { name: '念力', type: PokemonElementType.psychic, power: 50, description: '向对手发送 微弱的念力进行攻击。 有时会使对手混乱。' },
      { name: '预知未来', type: PokemonElementType.psychic, power: 120, description: '在使用招式２回合后， 向对手发送一团念力进行攻击。' },
    ],
  },
  dialga: {
    flavorText: 'It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.',
    stats: { hp: 100, attack: 120, defense: 120, specialAttack: 150, specialDefense: 100, speed: 90 },
    moves: [
      { name: '时光咆哮', type: PokemonElementType.dragon, power: 150, description: '释放出扭曲时间般的 强大力量攻击对手。 下一回合自己将无法动弹。' },
      { name: '回复封锁', type: PokemonElementType.psychic, power: null, description: '在５回合内 无法通过招式、特性或 携带的道具来回复ＨＰ。' },
      { name: '波导弹', type: PokemonElementType.fighting, power: 80, description: '从体内产生出波导之力， 然后向对手发出。 攻击必定会命中。' },
      { name: '龙息', type: PokemonElementType.dragon, power: 60, description: '将强烈的气息 吹向对手进行攻击。 有时会让对手陷入麻痹状态。' },
    ],
  },
  palkia: {
    flavorText: 'It has the ability to distort space. It is described as a deity in Sinnoh-region mythology.',
    stats: { hp: 90, attack: 120, defense: 100, specialAttack: 150, specialDefense: 120, speed: 100 },
    moves: [
      { name: '亚空裂斩', type: PokemonElementType.dragon, power: 100, description: '将对手连同周围的空间一起 撕裂并给予伤害。 容易击中要害。' },
      { name: '回复封锁', type: PokemonElementType.psychic, power: null, description: '在５回合内 无法通过招式、特性或 携带的道具来回复ＨＰ。' },
      { name: '波导弹', type: PokemonElementType.fighting, power: 80, description: '从体内产生出波导之力， 然后向对手发出。 攻击必定会命中。' },
      { name: '龙息', type: PokemonElementType.dragon, power: 60, description: '将强烈的气息 吹向对手进行攻击。 有时会让对手陷入麻痹状态。' },
    ],
  },
  heatran: {
    flavorText: 'It dwells in volcanic caves. It digs in with its cross-shaped feet to crawl on ceilings and walls.',
    stats: { hp: 91, attack: 90, defense: 106, specialAttack: 130, specialDefense: 106, speed: 77 },
    moves: [
      { name: '熔岩风暴', type: PokemonElementType.fire, power: 100, description: '将对手困在 熊熊燃烧的火焰中， 在４～５回合内进行攻击。' },
      { name: '喷烟', type: PokemonElementType.fire, power: 80, description: '用熊熊烈火 攻击自己周围所有的宝可梦。 有时会陷入灼伤状态。' },
      { name: '金属音', type: PokemonElementType.steel, power: null, description: '让对手听摩擦金属般 讨厌的声音。 大幅降低对手的特防。' },
      { name: '火焰旋涡', type: PokemonElementType.fire, power: 35, description: '将对手困在 激烈的火焰旋涡中， 在４～５回合内进行攻击。' },
    ],
  },
  regigigas: {
    flavorText: '在世上流传着的传说中， 它曾模仿自己的样子 创造出过宝可梦。',
    stats: { hp: 110, attack: 160, defense: 110, specialAttack: 80, specialDefense: 110, speed: 100 },
    moves: [
      { name: '捏碎', type: PokemonElementType.normal, power: null, description: '用骇人的力量捏碎对手。 对手的ＨＰ越多， 威力越大。' },
      { name: '迷昏拳', type: PokemonElementType.normal, power: 70, description: '有节奏地出拳攻击对手。 有时会使对手混乱。' },
      { name: '识破', type: PokemonElementType.normal, power: null, description: '对幽灵属性宝可梦没有效果的招式 以及闪避率高的对手， 使用后变得能够打中。' },
      { name: '报复', type: PokemonElementType.fighting, power: 60, description: '如果受到对手的招式攻击， 就能给予对手２倍的伤害。' },
    ],
  },
  giratina: {
    flavorText: 'A Pokémon that is said to live in a world on the reverse side of ours. It appears in an ancient cemetery.',
    stats: { hp: 150, attack: 100, defense: 120, specialAttack: 100, specialDefense: 120, speed: 90 },
    moves: [
      { name: '暗影潜袭', type: PokemonElementType.ghost, power: 120, description: '第１回合消失踪影， 第２回合攻击对手。 即使对手正受保护，也能击中。' },
      { name: '回复封锁', type: PokemonElementType.psychic, power: null, description: '在５回合内 无法通过招式、特性或 携带的道具来回复ＨＰ。' },
      { name: '波导弹', type: PokemonElementType.fighting, power: 80, description: '从体内产生出波导之力， 然后向对手发出。 攻击必定会命中。' },
      { name: '龙息', type: PokemonElementType.dragon, power: 60, description: '将强烈的气息 吹向对手进行攻击。 有时会让对手陷入麻痹状态。' },
    ],
  },
  giratina_origin: {
    flavorText: 'A Pokémon that is said to live in a world on the reverse side of ours. It appears in an ancient cemetery.',
    stats: { hp: 150, attack: 120, defense: 100, specialAttack: 120, specialDefense: 100, speed: 90 },
    moves: [
      { name: '暗影潜袭', type: PokemonElementType.ghost, power: 120, description: '第１回合消失踪影， 第２回合攻击对手。 即使对手正受保护，也能击中。' },
      { name: '回复封锁', type: PokemonElementType.psychic, power: null, description: '在５回合内 无法通过招式、特性或 携带的道具来回复ＨＰ。' },
      { name: '波导弹', type: PokemonElementType.fighting, power: 80, description: '从体内产生出波导之力， 然后向对手发出。 攻击必定会命中。' },
      { name: '龙息', type: PokemonElementType.dragon, power: 60, description: '将强烈的气息 吹向对手进行攻击。 有时会让对手陷入麻痹状态。' },
    ],
  },
  cresselia: {
    flavorText: 'Shiny particles are released from its wings like a veil. It is said to represent the crescent moon.',
    stats: { hp: 120, attack: 70, defense: 110, specialAttack: 75, specialDefense: 120, speed: 85 },
    moves: [
      { name: '新月舞', type: PokemonElementType.psychic, power: null, description: '虽然自己陷入濒死， 但可以治愈后备上场的 宝可梦的全部状态。' },
      { name: '精神转移', type: PokemonElementType.psychic, power: null, description: '利用超能力施以暗示， 从而将自己受到的异常状态 转移给对手。' },
      { name: '月光', type: PokemonElementType.normal, power: null, description: '回复自己的ＨＰ。 根据天气的不同， 回复量也会有所变化。' },
      { name: '极光束', type: PokemonElementType.ice, power: 65, description: '向对手发射 虹色光束进行攻击。 有时会降低对手的攻击。' },
    ],
  },
  phione: {
    flavorText: 'A Pokémon that lives in warm seas. It inflates the flotation sac on its head to drift and search for food.',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80 },
    moves: [
      { name: '溶化', type: PokemonElementType.poison, power: null, description: '通过细胞的变化进行液化， 从而大幅提高自己的防御。' },
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
      { name: '泡沫', type: PokemonElementType.water, power: 40, description: '向对手用力吹起无数泡泡进行攻击。 有时会降低对手的速度。' },
      { name: '水流环', type: PokemonElementType.water, power: null, description: '在自己身体的周围 覆盖用水制造的幕。 每回合回复ＨＰ。' },
    ],
  },
  manaphy: {
    flavorText: 'Born on a cold seafloor, it will swim great distances to return to its birthplace.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: '心灵互换', type: PokemonElementType.psychic, power: null, description: '利用超能力互换 自己和对手之间的 能力变化。' },
      { name: '萤火', type: PokemonElementType.bug, power: null, description: '凝视闪烁的光芒， 集中自己的精神， 从而巨幅提高特攻。' },
      { name: '溶化', type: PokemonElementType.poison, power: null, description: '通过细胞的变化进行液化， 从而大幅提高自己的防御。' },
      { name: '玩水', type: PokemonElementType.water, power: null, description: '用水湿透周围。 在５回合内 减弱火属性的招式。' },
    ],
  },
  darkrai: {
    flavorText: 'It can lull people to sleep and make them dream. It is active during nights of the new moon.',
    stats: { hp: 70, attack: 90, defense: 90, specialAttack: 135, specialDefense: 90, speed: 125 },
    moves: [
      { name: '暗黑洞', type: PokemonElementType.dark, power: null, description: '将对手强制拖入黑暗的世界， 从而让对手陷入睡眠状态。' },
      { name: '恶梦', type: PokemonElementType.ghost, power: null, description: '让在睡眠状态下的对手做恶梦， 每回合会缓缓减少ＨＰ。' },
      { name: '催眠术', type: PokemonElementType.psychic, power: null, description: '施以诱导睡意的暗示， 让对手陷入睡眠状态。' },
      { name: '出奇一击', type: PokemonElementType.dark, power: 60, description: '悄悄地靠近对手， 趁其不备进行殴打。 攻击必定会命中。' },
    ],
  },
  shaymin: {
    flavorText: 'It lives in flower patches and avoids detection by curling up to look like a flowering plant.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: '种子闪光', type: PokemonElementType.grass, power: 120, description: '从身体里产生冲击波。 有时会大幅降低对手的特防。' },
      { name: '治愈之愿', type: PokemonElementType.psychic, power: null, description: '虽然自己陷入濒死， 但可以治愈后备上场的 宝可梦的异常状态以及回复ＨＰ。' },
      { name: '天使之吻', type: PokemonElementType.normal, power: null, description: '像天使般可爱地亲吻对手， 从而使对手混乱。' },
      { name: '芳香治疗', type: PokemonElementType.grass, power: null, description: '让同伴闻沁人心脾的香气， 从而治愈我方全员的异常状态。' },
    ],
  },
  shaymin_sky: {
    flavorText: 'It lives in flower patches and avoids detection by curling up to look like a flowering plant.',
    stats: { hp: 100, attack: 103, defense: 75, specialAttack: 120, specialDefense: 75, speed: 127 },
    moves: [
      { name: '种子闪光', type: PokemonElementType.grass, power: 120, description: '从身体里产生冲击波。 有时会大幅降低对手的特防。' },
      { name: '天使之吻', type: PokemonElementType.normal, power: null, description: '像天使般可爱地亲吻对手， 从而使对手混乱。' },
      { name: '生长', type: PokemonElementType.normal, power: null, description: '让身体一下子长大， 从而提高攻击和特攻。' },
      { name: '甜甜香气', type: PokemonElementType.normal, power: null, description: '用香气大幅降低对手的闪避率。' },
    ],
  },
  arceus: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '制裁光砾', type: PokemonElementType.normal, power: 100, description: '向对手放出无数的光弹。 属性会根据自己 携带的石板不同而改变。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
    ],
  },
  arceus_bug: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '制裁光砾', type: PokemonElementType.normal, power: 100, description: '向对手放出无数的光弹。 属性会根据自己 携带的石板不同而改变。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
    ],
  },
  arceus_dark: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '制裁光砾', type: PokemonElementType.normal, power: 100, description: '向对手放出无数的光弹。 属性会根据自己 携带的石板不同而改变。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
    ],
  },
  arceus_dragon: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '制裁光砾', type: PokemonElementType.normal, power: 100, description: '向对手放出无数的光弹。 属性会根据自己 携带的石板不同而改变。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
    ],
  },
  arceus_electric: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '制裁光砾', type: PokemonElementType.normal, power: 100, description: '向对手放出无数的光弹。 属性会根据自己 携带的石板不同而改变。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
    ],
  },
  arceus_fighting: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '制裁光砾', type: PokemonElementType.normal, power: 100, description: '向对手放出无数的光弹。 属性会根据自己 携带的石板不同而改变。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
    ],
  },
  arceus_fire: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '制裁光砾', type: PokemonElementType.normal, power: 100, description: '向对手放出无数的光弹。 属性会根据自己 携带的石板不同而改变。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
    ],
  },
  arceus_flying: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '制裁光砾', type: PokemonElementType.normal, power: 100, description: '向对手放出无数的光弹。 属性会根据自己 携带的石板不同而改变。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
    ],
  },
  arceus_ghost: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '制裁光砾', type: PokemonElementType.normal, power: 100, description: '向对手放出无数的光弹。 属性会根据自己 携带的石板不同而改变。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
    ],
  },
  arceus_grass: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '制裁光砾', type: PokemonElementType.normal, power: 100, description: '向对手放出无数的光弹。 属性会根据自己 携带的石板不同而改变。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
    ],
  },
  arceus_ground: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '制裁光砾', type: PokemonElementType.normal, power: 100, description: '向对手放出无数的光弹。 属性会根据自己 携带的石板不同而改变。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
    ],
  },
  arceus_ice: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '制裁光砾', type: PokemonElementType.normal, power: 100, description: '向对手放出无数的光弹。 属性会根据自己 携带的石板不同而改变。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
    ],
  },
  arceus_poison: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '制裁光砾', type: PokemonElementType.normal, power: 100, description: '向对手放出无数的光弹。 属性会根据自己 携带的石板不同而改变。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
    ],
  },
  arceus_psychic: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '制裁光砾', type: PokemonElementType.normal, power: 100, description: '向对手放出无数的光弹。 属性会根据自己 携带的石板不同而改变。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
    ],
  },
  arceus_rock: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '制裁光砾', type: PokemonElementType.normal, power: 100, description: '向对手放出无数的光弹。 属性会根据自己 携带的石板不同而改变。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
    ],
  },
  arceus_steel: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '制裁光砾', type: PokemonElementType.normal, power: 100, description: '向对手放出无数的光弹。 属性会根据自己 携带的石板不同而改变。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
    ],
  },
  arceus_water: {
    flavorText: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '制裁光砾', type: PokemonElementType.normal, power: 100, description: '向对手放出无数的光弹。 属性会根据自己 携带的石板不同而改变。' },
      { name: '神速', type: PokemonElementType.normal, power: 80, description: '以迅雷不及掩耳之势 猛撞向对手进行攻击。 必定能够先制攻击。' },
      { name: '惩罚', type: PokemonElementType.dark, power: null, description: '根据能力变化， 对手提高的力量越大， 招式的威力越大。' },
      { name: '灭亡之歌', type: PokemonElementType.normal, power: null, description: '倾听歌声的宝可梦 经过３回合陷入濒死。 替换后效果消失。' },
    ],
  },
}
