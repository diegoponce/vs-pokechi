// Japanese counterpart of pokemon-info-data.ts - same species keys, same
// shape (PokemonInfoEntry), sourced the same way but with PokeAPI's
// Japanese flavor text/move data instead of English. Stats are numbers,
// not translated text, and are identical to the English file.
import { PokemonElementType } from './types'
import { PokemonInfoEntry } from './pokemon-info-data'

export const POKEMON_INFO_DATA_JA: { [key: string]: PokemonInfoEntry } = {
  bulbasaur: {
    flavorText: '生まれたときから 背中に 不思議な タネが 植えてあって 体と ともに 育つという。',
    stats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'つるのムチ', type: PokemonElementType.grass, power: 45, description: 'ムチのように しなる 細長い つるで 相手を たたきつけて 攻撃する。' },
      { name: 'ねむりごな', type: PokemonElementType.grass, power: null, description: '眠くなる 粉を たくさん ふりまいて 相手を 眠り状態に する。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
      { name: 'はっぱカッター', type: PokemonElementType.grass, power: 55, description: 'はっぱを とばして 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
    ],
  },
  ivysaur: {
    flavorText: 'つぼみが 背中に ついていて 養分を 吸収していくと 大きな 花が 咲くという。',
    stats: { hp: 60, attack: 62, defense: 63, specialAttack: 80, specialDefense: 80, speed: 60 },
    moves: [
      { name: 'つるのムチ', type: PokemonElementType.grass, power: 45, description: 'ムチのように しなる 細長い つるで 相手を たたきつけて 攻撃する。' },
      { name: 'ねむりごな', type: PokemonElementType.grass, power: null, description: '眠くなる 粉を たくさん ふりまいて 相手を 眠り状態に する。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
      { name: 'はっぱカッター', type: PokemonElementType.grass, power: 55, description: 'はっぱを とばして 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
    ],
  },
  venusaur: {
    flavorText: '大きな 花びらを 広げ 太陽の 光を 浴びていると 体に 元気が みなぎっていく。',
    stats: { hp: 80, attack: 82, defense: 83, specialAttack: 100, specialDefense: 100, speed: 80 },
    moves: [
      { name: 'つるのムチ', type: PokemonElementType.grass, power: 45, description: 'ムチのように しなる 細長い つるで 相手を たたきつけて 攻撃する。' },
      { name: 'ねむりごな', type: PokemonElementType.grass, power: null, description: '眠くなる 粉を たくさん ふりまいて 相手を 眠り状態に する。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
      { name: 'はっぱカッター', type: PokemonElementType.grass, power: 55, description: 'はっぱを とばして 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
    ],
  },
  charmander: {
    flavorText: '尻尾の 炎は ヒトカゲの 生命力の 証。 元気だと さかんに 燃えさかる。',
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'りゅうのいかり', type: PokemonElementType.dragon, power: null, description: '怒りの 衝撃波を 相手に ぶつけて 攻撃する。 ４０の ダメージを 決まって 与える。' },
      { name: 'えんまく', type: PokemonElementType.normal, power: null, description: '煙や 墨などを 吹きかけて 相手の 命中率を さげる。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'メタルクロー', type: PokemonElementType.steel, power: 50, description: '鋼鉄の ツメで 相手を 切り裂いて 攻撃する。 自分の 攻撃が あがることが ある。' },
    ],
  },
  charmeleon: {
    flavorText: '尻尾を 振り回して 相手を なぎ倒し 鋭い ツメで ズタズタに ひきさいてしまう。',
    stats: { hp: 58, attack: 64, defense: 58, specialAttack: 80, specialDefense: 65, speed: 80 },
    moves: [
      { name: 'りゅうのいかり', type: PokemonElementType.dragon, power: null, description: '怒りの 衝撃波を 相手に ぶつけて 攻撃する。 ４０の ダメージを 決まって 与える。' },
      { name: 'えんまく', type: PokemonElementType.normal, power: null, description: '煙や 墨などを 吹きかけて 相手の 命中率を さげる。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'メタルクロー', type: PokemonElementType.steel, power: 50, description: '鋼鉄の ツメで 相手を 切り裂いて 攻撃する。 自分の 攻撃が あがることが ある。' },
    ],
  },
  charizard: {
    flavorText: '口から 灼熱の 炎を 吐き出すとき 尻尾の 先は より 赤く 激しく 燃え上がる。',
    stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    moves: [
      { name: 'りゅうのいかり', type: PokemonElementType.dragon, power: null, description: '怒りの 衝撃波を 相手に ぶつけて 攻撃する。 ４０の ダメージを 決まって 与える。' },
      { name: 'えんまく', type: PokemonElementType.normal, power: null, description: '煙や 墨などを 吹きかけて 相手の 命中率を さげる。' },
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
    ],
  },
  squirtle: {
    flavorText: '甲羅に 閉じこもり 身を 守る。 相手の すきを 見逃さず 水を 噴き出して 反撃する。',
    stats: { hp: 44, attack: 48, defense: 65, specialAttack: 50, specialDefense: 64, speed: 43 },
    moves: [
      { name: 'からにこもる', type: PokemonElementType.water, power: null, description: '殻に 潜りこんで 身を守り 自分の 防御を あげる。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'こうそくスピン', type: PokemonElementType.normal, power: 50, description: '回転して 相手を 攻撃する。 しめつける まきつく やどりぎのタネ まきびし なども 吹きとばせる。' },
      { name: 'ロケットずつき', type: PokemonElementType.normal, power: 130, description: '１ターン目に 頭を ひっこめて 防御を あげる。 ２ターン目に 相手を 攻撃する。' },
    ],
  },
  wartortle: {
    flavorText: 'ポカンと 頭を たたかれるとき 甲羅に 引っこんで 避ける。でも ちょっとだけ 尻尾が 出ているよ。',
    stats: { hp: 59, attack: 63, defense: 80, specialAttack: 65, specialDefense: 80, speed: 58 },
    moves: [
      { name: 'からにこもる', type: PokemonElementType.water, power: null, description: '殻に 潜りこんで 身を守り 自分の 防御を あげる。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'こうそくスピン', type: PokemonElementType.normal, power: 50, description: '回転して 相手を 攻撃する。 しめつける まきつく やどりぎのタネ まきびし なども 吹きとばせる。' },
      { name: 'ロケットずつき', type: PokemonElementType.normal, power: 130, description: '１ターン目に 頭を ひっこめて 防御を あげる。 ２ターン目に 相手を 攻撃する。' },
    ],
  },
  blastoise: {
    flavorText: '体が 重たく のしかかって 相手を 気絶させる。 ピンチのときは 殻に 隠れる。',
    stats: { hp: 79, attack: 83, defense: 100, specialAttack: 85, specialDefense: 105, speed: 78 },
    moves: [
      { name: 'からにこもる', type: PokemonElementType.water, power: null, description: '殻に 潜りこんで 身を守り 自分の 防御を あげる。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'こうそくスピン', type: PokemonElementType.normal, power: 50, description: '回転して 相手を 攻撃する。 しめつける まきつく やどりぎのタネ まきびし なども 吹きとばせる。' },
      { name: 'ロケットずつき', type: PokemonElementType.normal, power: 130, description: '１ターン目に 頭を ひっこめて 防御を あげる。 ２ターン目に 相手を 攻撃する。' },
    ],
  },
  caterpie: {
    flavorText: '頭の 触覚から 強烈な においを 出して 敵を 追い払い 身を守る。',
    stats: { hp: 45, attack: 30, defense: 35, specialAttack: 20, specialDefense: 20, speed: 45 },
    moves: [
      { name: 'いとをはく', type: PokemonElementType.bug, power: null, description: '口から 吹きだした 糸を まきつけて 相手の 素早さを がくっと さげる。' },
      { name: 'たいあたり', type: PokemonElementType.normal, power: 40, description: '相手に むかって 全身で ぶつかっていき 攻撃する。' },
    ],
  },
  metapod: {
    flavorText: '鋼鉄のように 硬い 殻で やわらかい 中身を 守っている。 進化するまで じっと 耐えている。',
    stats: { hp: 50, attack: 20, defense: 55, specialAttack: 25, specialDefense: 25, speed: 30 },
    moves: [
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
    ],
  },
  butterfree: {
    flavorText: '花の ミツが 大好物。 わずかな 花粉で 花畑の 場所を 探し出すことが できる。',
    stats: { hp: 60, attack: 45, defense: 50, specialAttack: 90, specialDefense: 80, speed: 70 },
    moves: [
      { name: 'ねむりごな', type: PokemonElementType.grass, power: null, description: '眠くなる 粉を たくさん ふりまいて 相手を 眠り状態に する。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
      { name: 'ぎんいろのかぜ', type: PokemonElementType.bug, power: 60, description: '風に りんぷんを のせて 相手を 攻撃する。自分の すべての 能力が あがることが ある。' },
      { name: 'しびれごな', type: PokemonElementType.grass, power: null, description: 'しびれる 粉を たくさん ふりまいて 相手を まひ状態に する。' },
    ],
  },
  kakuna: {
    flavorText: '自分では ほとんど 動けないが 危ないときは 硬くなって 身を守っているようだ。',
    stats: { hp: 45, attack: 25, defense: 50, specialAttack: 25, specialDefense: 25, speed: 35 },
    moves: [
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
    ],
  },
  weedle: {
    flavorText: '森や 草地に 多く 生息。 頭の 先に ５センチぐらいの 小さく 鋭い 毒針を持つ。',
    stats: { hp: 40, attack: 35, defense: 30, specialAttack: 20, specialDefense: 20, speed: 50 },
    moves: [
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'いとをはく', type: PokemonElementType.bug, power: null, description: '口から 吹きだした 糸を まきつけて 相手の 素早さを がくっと さげる。' },
    ],
  },
  beedrill: {
    flavorText: '両手と お尻にある ３本の 毒針で 相手を 刺して 刺して 刺しまくって 攻撃する。',
    stats: { hp: 65, attack: 90, defense: 40, specialAttack: 45, specialDefense: 80, speed: 75 },
    moves: [
      { name: 'ダブルニードル', type: PokemonElementType.bug, power: 25, description: '２本の ハリを 相手に 突き刺し ２回連続で ダメージ。 毒状態に することが ある。' },
      { name: 'ミサイルばり', type: PokemonElementType.bug, power: 25, description: '鋭い ハリを 相手に 発射して 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'おいうち', type: PokemonElementType.dark, power: 40, description: '相手 ポケモンが 入れ替わるときに 技を だしていると 倍の 威力で 攻撃できる。' },
    ],
  },
  pidgey: {
    flavorText: '森や 林に 多く 分布。 地上でも 激しく はばたいて 砂を かけたりする。',
    stats: { hp: 40, attack: 45, defense: 40, specialAttack: 35, specialDefense: 35, speed: 56 },
    moves: [
      { name: 'オウムがえし', type: PokemonElementType.flying, power: null, description: '相手の 使った 技を まねして 自分も 同じ技を 使う。' },
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'かぜおこし', type: PokemonElementType.flying, power: 40, description: '翼で おこした 激しい 風を 相手に ぶつけて 攻撃する。' },
      { name: 'ふきとばし', type: PokemonElementType.normal, power: null, description: '相手を 吹きとばして 控えの ポケモンを ひきずりだす。 野生の 場合は 戦闘が 終わる。' },
    ],
  },
  pidgeotto: {
    flavorText: '足の ツメが 発達している。 エサの タマタマを つかんで １００キロ先の 巣まで 運ぶ。',
    stats: { hp: 63, attack: 60, defense: 55, specialAttack: 50, specialDefense: 50, speed: 71 },
    moves: [
      { name: 'オウムがえし', type: PokemonElementType.flying, power: null, description: '相手の 使った 技を まねして 自分も 同じ技を 使う。' },
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'かぜおこし', type: PokemonElementType.flying, power: 40, description: '翼で おこした 激しい 風を 相手に ぶつけて 攻撃する。' },
      { name: 'ふきとばし', type: PokemonElementType.normal, power: null, description: '相手を 吹きとばして 控えの ポケモンを ひきずりだす。 野生の 場合は 戦闘が 終わる。' },
    ],
  },
  pidgeot: {
    flavorText: 'エサを 探すとき 水面 すれすれを 滑るように 飛んで コイキングなどを わしづかみにする。',
    stats: { hp: 83, attack: 80, defense: 75, specialAttack: 70, specialDefense: 70, speed: 101 },
    moves: [
      { name: 'オウムがえし', type: PokemonElementType.flying, power: null, description: '相手の 使った 技を まねして 自分も 同じ技を 使う。' },
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'かぜおこし', type: PokemonElementType.flying, power: 40, description: '翼で おこした 激しい 風を 相手に ぶつけて 攻撃する。' },
      { name: 'ふきとばし', type: PokemonElementType.normal, power: null, description: '相手を 吹きとばして 控えの ポケモンを ひきずりだす。 野生の 場合は 戦闘が 終わる。' },
    ],
  },
  rattata: {
    flavorText: '食べるものが あるところなら どこにだって 生息する。 １日中 エサを 探している。',
    stats: { hp: 30, attack: 56, defense: 35, specialAttack: 25, specialDefense: 35, speed: 72 },
    moves: [
      { name: 'ひっさつまえば', type: PokemonElementType.normal, power: 80, description: '鋭い 前歯で 強く かみついて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'いかりのまえば', type: PokemonElementType.normal, power: null, description: '鋭い 前歯で 激しく かみついて 攻撃する。 相手の ＨＰは 半分に なる。' },
      { name: 'おいうち', type: PokemonElementType.dark, power: 40, description: '相手 ポケモンが 入れ替わるときに 技を だしていると 倍の 威力で 攻撃できる。' },
      { name: 'しっぽをふる', type: PokemonElementType.normal, power: null, description: 'しっぽを 左右に かわいく ふって 油断を 誘う。 相手の 防御を さげる。' },
    ],
  },
  raticate: {
    flavorText: '伸び続ける 前歯を 削るため 硬い ものを かじる 習性。 ブロック塀も かじって 壊す。',
    stats: { hp: 55, attack: 81, defense: 60, specialAttack: 50, specialDefense: 70, speed: 97 },
    moves: [
      { name: 'ひっさつまえば', type: PokemonElementType.normal, power: 80, description: '鋭い 前歯で 強く かみついて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'いかりのまえば', type: PokemonElementType.normal, power: null, description: '鋭い 前歯で 激しく かみついて 攻撃する。 相手の ＨＰは 半分に なる。' },
      { name: 'おいうち', type: PokemonElementType.dark, power: 40, description: '相手 ポケモンが 入れ替わるときに 技を だしていると 倍の 威力で 攻撃できる。' },
      { name: 'しっぽをふる', type: PokemonElementType.normal, power: null, description: 'しっぽを 左右に かわいく ふって 油断を 誘う。 相手の 防御を さげる。' },
    ],
  },
  spearow: {
    flavorText: '自分の テリトリーを 守るため 短い 羽を はばたかせて 忙しく 飛び回っている。',
    stats: { hp: 40, attack: 60, defense: 30, specialAttack: 31, specialDefense: 31, speed: 70 },
    moves: [
      { name: 'ドリルくちばし', type: PokemonElementType.flying, power: 80, description: '回転しながら とがった くちばしを 相手に 突き刺して 攻撃する。' },
      { name: 'オウムがえし', type: PokemonElementType.flying, power: null, description: '相手の 使った 技を まねして 自分も 同じ技を 使う。' },
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'つつく', type: PokemonElementType.flying, power: 35, description: '鋭く とがった くちばしや つので 相手を 突いて 攻撃する。' },
    ],
  },
  fearow: {
    flavorText: '大きな 翼で 大空を 飛び続けることが できる。 １回も 降りなくても 平気だ。',
    stats: { hp: 65, attack: 90, defense: 65, specialAttack: 61, specialDefense: 61, speed: 100 },
    moves: [
      { name: 'ドリルくちばし', type: PokemonElementType.flying, power: 80, description: '回転しながら とがった くちばしを 相手に 突き刺して 攻撃する。' },
      { name: 'オウムがえし', type: PokemonElementType.flying, power: null, description: '相手の 使った 技を まねして 自分も 同じ技を 使う。' },
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'つつく', type: PokemonElementType.flying, power: 35, description: '鋭く とがった くちばしや つので 相手を 突いて 攻撃する。' },
    ],
  },
  ekans: {
    flavorText: '育つほどに どんどん 長くなる。 そして 夜中は 木の枝に グルグルと 絡まって 休む。',
    stats: { hp: 35, attack: 60, defense: 44, specialAttack: 40, specialDefense: 54, speed: 55 },
    moves: [
      { name: 'へびにらみ', type: PokemonElementType.normal, power: null, description: 'おなかの 模様で おびえさせて 相手を まひの 状態に する。' },
      { name: 'ようかいえき', type: PokemonElementType.poison, power: 40, description: '強い 酸を 相手に かけて 攻撃する。相手の 特防を さげることが ある。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'まきつく', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを つかって ４ー５ターンの あいだ 相手に まきついて 攻撃する。' },
    ],
  },
  arbok: {
    flavorText: 'お腹の 模様が 怖い 顔に 見える。 弱い 敵は その模様を 見ただけで 逃げ出してしまう。',
    stats: { hp: 60, attack: 95, defense: 69, specialAttack: 65, specialDefense: 79, speed: 80 },
    moves: [
      { name: 'へびにらみ', type: PokemonElementType.normal, power: null, description: 'おなかの 模様で おびえさせて 相手を まひの 状態に する。' },
      { name: 'ようかいえき', type: PokemonElementType.poison, power: 40, description: '強い 酸を 相手に かけて 攻撃する。相手の 特防を さげることが ある。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'まきつく', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを つかって ４ー５ターンの あいだ 相手に まきついて 攻撃する。' },
    ],
  },
  pikachu: {
    flavorText: '尻尾を 立てて まわりの 様子を 探っていると ときどき 雷が 尻尾に 落ちてくる。',
    stats: { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
    moves: [
      { name: 'でんきショック', type: PokemonElementType.electric, power: 40, description: '電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
      { name: 'たたきつける', type: PokemonElementType.normal, power: 80, description: '長い しっぽや つるなどを 使い 相手を たたきつけて 攻撃する。' },
      { name: 'しっぽをふる', type: PokemonElementType.normal, power: null, description: 'しっぽを 左右に かわいく ふって 油断を 誘う。 相手の 防御を さげる。' },
      { name: 'でんこうせっか', type: PokemonElementType.normal, power: 40, description: '目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。' },
    ],
  },
  raichu: {
    flavorText: '電気が たまってくると 筋肉が 刺激され いつもより 攻撃的に なってしまう。',
    stats: { hp: 60, attack: 90, defense: 55, specialAttack: 90, specialDefense: 80, speed: 110 },
    moves: [
      { name: 'でんきショック', type: PokemonElementType.electric, power: 40, description: '電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
      { name: 'しっぽをふる', type: PokemonElementType.normal, power: null, description: 'しっぽを 左右に かわいく ふって 油断を 誘う。 相手の 防御を さげる。' },
      { name: 'でんこうせっか', type: PokemonElementType.normal, power: 40, description: '目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。' },
      { name: '１０まんボルト', type: PokemonElementType.electric, power: 90, description: '強い 電撃を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  sandshrew: {
    flavorText: '地面に 穴を 掘って 住む。 自分に 危険が 迫ると まるくなって 身を 守る。',
    stats: { hp: 50, attack: 75, defense: 85, specialAttack: 20, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'すなじごく', type: PokemonElementType.ground, power: 35, description: '激しく 吹きあれる 砂あらしの 中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
    ],
  },
  sandslash: {
    flavorText: 'すごい 勢いで 地面を掘ると トゲや ツメが 折れてしまうが 次の日には 生えそろっている。',
    stats: { hp: 75, attack: 100, defense: 110, specialAttack: 45, specialDefense: 55, speed: 65 },
    moves: [
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'すなじごく', type: PokemonElementType.ground, power: 35, description: '激しく 吹きあれる 砂あらしの 中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
    ],
  },
  nidoran_female: {
    flavorText: '体は 小さくても 毒針を 持つため 注意が 必要だ。 メスのほうが ツノが 小さい。',
    stats: { hp: 55, attack: 47, defense: 52, specialAttack: 40, specialDefense: 40, speed: 41 },
    moves: [
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'おだてる', type: PokemonElementType.dark, power: null, description: '相手を おだてて 混乱させる。 同時に 相手の 特攻も あげてしまう。' },
      { name: 'にどげり', type: PokemonElementType.fighting, power: 30, description: '２本の 足で 相手を けとばして 攻撃する。２回連続で ダメージを 与える。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  nidorina: {
    flavorText: 'メスなので 性格は 温厚。 口から 出す 超音波は 相手を まどわす 力がある。',
    stats: { hp: 70, attack: 62, defense: 67, specialAttack: 55, specialDefense: 55, speed: 56 },
    moves: [
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'おだてる', type: PokemonElementType.dark, power: null, description: '相手を おだてて 混乱させる。 同時に 相手の 特攻も あげてしまう。' },
      { name: 'にどげり', type: PokemonElementType.fighting, power: 30, description: '２本の 足で 相手を けとばして 攻撃する。２回連続で ダメージを 与える。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  nidoqueen: {
    flavorText: 'ウロコで 覆われた 頑丈な 体で 巣穴の 入り口を ふさぎ 敵から 子供たちを 守る。',
    stats: { hp: 90, attack: 92, defense: 87, specialAttack: 75, specialDefense: 85, speed: 76 },
    moves: [
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'にどげり', type: PokemonElementType.fighting, power: 30, description: '２本の 足で 相手を けとばして 攻撃する。２回連続で ダメージを 与える。' },
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
      { name: 'しっぽをふる', type: PokemonElementType.normal, power: null, description: 'しっぽを 左右に かわいく ふって 油断を 誘う。 相手の 防御を さげる。' },
    ],
  },
  nidoran_male: {
    flavorText: '草むらの 上に 耳だけ 出して まわりの 気配を 探る。 猛毒の ツノで 身を 守る。',
    stats: { hp: 46, attack: 57, defense: 40, specialAttack: 40, specialDefense: 40, speed: 50 },
    moves: [
      { name: 'つのでつく', type: PokemonElementType.normal, power: 65, description: '鋭く とがった つので 相手を 攻撃する。' },
      { name: 'つのドリル', type: PokemonElementType.normal, power: null, description: '回転する つのを 相手に 突き刺して 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'おだてる', type: PokemonElementType.dark, power: null, description: '相手を おだてて 混乱させる。 同時に 相手の 特攻も あげてしまう。' },
    ],
  },
  nidorino: {
    flavorText: '発達した 耳を 立てて まわりの 気配を 探る。 なにかあると すぐに 飛びかかる。',
    stats: { hp: 61, attack: 72, defense: 57, specialAttack: 55, specialDefense: 55, speed: 65 },
    moves: [
      { name: 'つのでつく', type: PokemonElementType.normal, power: 65, description: '鋭く とがった つので 相手を 攻撃する。' },
      { name: 'つのドリル', type: PokemonElementType.normal, power: null, description: '回転する つのを 相手に 突き刺して 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'おだてる', type: PokemonElementType.dark, power: null, description: '相手を おだてて 混乱させる。 同時に 相手の 特攻も あげてしまう。' },
    ],
  },
  nidoking: {
    flavorText: '石のように 硬い 皮膚と 長く 伸びた ツノが 特徴。 ツノには 毒も あるので 注意。',
    stats: { hp: 81, attack: 102, defense: 77, specialAttack: 85, specialDefense: 75, speed: 85 },
    moves: [
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'メガホーン', type: PokemonElementType.bug, power: 120, description: '硬くて りっぱな つので おもいっきり 相手を 突き刺して 攻撃する。' },
      { name: 'にどげり', type: PokemonElementType.fighting, power: 30, description: '２本の 足で 相手を けとばして 攻撃する。２回連続で ダメージを 与える。' },
      { name: 'つつく', type: PokemonElementType.flying, power: 35, description: '鋭く とがった くちばしや つので 相手を 突いて 攻撃する。' },
    ],
  },
  clefairy: {
    flavorText: '満月の夜 ピッピが 集まって ダンスを 踊る様子を 見ると 幸せに なれると 言われている。',
    stats: { hp: 70, attack: 45, defense: 48, specialAttack: 60, specialDefense: 65, speed: 35 },
    moves: [
      { name: 'コメットパンチ', type: PokemonElementType.steel, power: 90, description: 'すい星の ごとく パンチを くりだして 相手を 攻撃する。自分の 攻撃が あがることが ある。' },
      { name: 'ちいさくなる', type: PokemonElementType.normal, power: null, description: '体を ちぢめて 小さく みせて 自分の 回避率を ぐーんと あげる。' },
      { name: 'このゆびとまれ', type: PokemonElementType.normal, power: null, description: '自分に 注目させて 相手からの 攻撃を すべて 自分に むけさせる。' },
      { name: 'つきのひかり', type: PokemonElementType.normal, power: null, description: '自分の ＨＰを 回復する。 天気に よって 回復の 量が 変化する。' },
    ],
  },
  clefable: {
    flavorText: '１キロ先で 落ちた 針の 音も 聞き分ける 優れた 耳を 持つ。 静かな 山奥に 住んでいる。',
    stats: { hp: 95, attack: 70, defense: 73, specialAttack: 95, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'ちいさくなる', type: PokemonElementType.normal, power: null, description: '体を ちぢめて 小さく みせて 自分の 回避率を ぐーんと あげる。' },
      { name: 'おうふくビンタ', type: PokemonElementType.normal, power: 15, description: 'おうふく ビンタで 相手を たたいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'うたう', type: PokemonElementType.normal, power: null, description: '心地好い きれいな 歌声を 聞かせて 相手を 眠り状態に する。' },
      { name: 'ゆびをふる', type: PokemonElementType.normal, power: null, description: '指をふり 自分の 脳を 刺激して すべての 技の なかから どれか １つを くりだす。' },
    ],
  },
  vulpix: {
    flavorText: '生まれたとき 尻尾は 真っ白で １本しかない。育つと やがて 先が 分かれて 尻尾が 増える。',
    stats: { hp: 38, attack: 41, defense: 40, specialAttack: 50, specialDefense: 65, speed: 65 },
    moves: [
      { name: 'おんねん', type: PokemonElementType.ghost, power: null, description: '相手の 技で ひんしに されたとき おんねんを かけて その技の ＰＰを ０に する。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'ほのおのうず', type: PokemonElementType.fire, power: 35, description: '激しく 渦をまく 炎の中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'しっぽをふる', type: PokemonElementType.normal, power: null, description: 'しっぽを 左右に かわいく ふって 油断を 誘う。 相手の 防御を さげる。' },
    ],
  },
  ninetales: {
    flavorText: '黄金に 輝く 体毛と ９本の 長い 尻尾を 持つ。 １０００年は 生きると 言われる。',
    stats: { hp: 73, attack: 76, defense: 75, specialAttack: 81, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'ほのおのうず', type: PokemonElementType.fire, power: 35, description: '激しく 渦をまく 炎の中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'でんこうせっか', type: PokemonElementType.normal, power: 40, description: '目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。' },
      { name: 'あやしいひかり', type: PokemonElementType.ghost, power: null, description: '怪しい 光を 相手に みせて まどわせる。 相手を 混乱させる。' },
    ],
  },
  jigglypuff: {
    flavorText: 'まるくて 大きい 瞳で 誘いこみ 心地よい 歌を 歌い 相手を 眠らせる。',
    stats: { hp: 115, attack: 45, defense: 20, specialAttack: 45, specialDefense: 25, speed: 20 },
    moves: [
      { name: 'おうふくビンタ', type: PokemonElementType.normal, power: 15, description: 'おうふく ビンタで 相手を たたいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'うたう', type: PokemonElementType.normal, power: null, description: '心地好い きれいな 歌声を 聞かせて 相手を 眠り状態に する。' },
      { name: 'はたく', type: PokemonElementType.normal, power: 40, description: '長い しっぽや 手などを 使って 相手を はたいて 攻撃する。' },
      { name: 'かなしばり', type: PokemonElementType.normal, power: null, description: '相手の 動きを とめて 直前に だしていた 技を ４ターンの あいだ 使えなくする。' },
    ],
  },
  wigglytuff: {
    flavorText: '２匹 寄り添いあうと お互いの 毛皮が 気持ち良すぎて 離れられなく なってしまう。',
    stats: { hp: 140, attack: 70, defense: 45, specialAttack: 85, specialDefense: 50, speed: 45 },
    moves: [
      { name: 'おうふくビンタ', type: PokemonElementType.normal, power: 15, description: 'おうふく ビンタで 相手を たたいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'うたう', type: PokemonElementType.normal, power: null, description: '心地好い きれいな 歌声を 聞かせて 相手を 眠り状態に する。' },
      { name: 'かなしばり', type: PokemonElementType.normal, power: null, description: '相手の 動きを とめて 直前に だしていた 技を ４ターンの あいだ 使えなくする。' },
      { name: 'まるくなる', type: PokemonElementType.normal, power: null, description: '体を まるめて ちぢこまり 自分の 防御を あげる。' },
    ],
  },
  zubat: {
    flavorText: '口から 出す 超音波で 両目が なくても まわりの 障害物を 察知できる。',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 30, specialDefense: 40, speed: 55 },
    moves: [
      { name: 'どくどくのキバ', type: PokemonElementType.poison, power: 50, description: '毒の ある キバで 相手に かみついて 攻撃する。 猛毒を おわせる ことが ある。' },
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'くろいまなざし', type: PokemonElementType.normal, power: null, description: '吸いこまれるような 黒い まなざしで じっと みつめて 相手を 戦闘から 逃げられなくする。' },
      { name: 'ちょうおんぱ', type: PokemonElementType.normal, power: null, description: '特殊な 音波を 体から 発して 相手を 混乱させる。' },
    ],
  },
  golbat: {
    flavorText: 'かみついたら 最後。死ぬほど 血を 吸いまくるので 重たくなって 自分で 飛べなくなることもある。',
    stats: { hp: 75, attack: 80, defense: 70, specialAttack: 65, specialDefense: 75, speed: 90 },
    moves: [
      { name: 'どくどくのキバ', type: PokemonElementType.poison, power: 50, description: '毒の ある キバで 相手に かみついて 攻撃する。 猛毒を おわせる ことが ある。' },
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'くろいまなざし', type: PokemonElementType.normal, power: null, description: '吸いこまれるような 黒い まなざしで じっと みつめて 相手を 戦闘から 逃げられなくする。' },
      { name: 'ちょうおんぱ', type: PokemonElementType.normal, power: null, description: '特殊な 音波を 体から 発して 相手を 混乱させる。' },
    ],
  },
  oddish: {
    flavorText: '昼間は 太陽を 避けるため 冷たい 地面に 潜っている。 月の 光を 浴びて 育つ。',
    stats: { hp: 45, attack: 50, defense: 55, specialAttack: 75, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'はなびらのまい', type: PokemonElementType.grass, power: 120, description: '２ー３ターンの あいだ 花を まきちらして 相手を 攻撃する。 まきちらした あとは 混乱する。' },
      { name: 'つきのひかり', type: PokemonElementType.normal, power: null, description: '自分の ＨＰを 回復する。 天気に よって 回復の 量が 変化する。' },
      { name: 'ようかいえき', type: PokemonElementType.poison, power: 40, description: '強い 酸を 相手に かけて 攻撃する。相手の 特防を さげることが ある。' },
      { name: 'ねむりごな', type: PokemonElementType.grass, power: null, description: '眠くなる 粉を たくさん ふりまいて 相手を 眠り状態に する。' },
    ],
  },
  gloom: {
    flavorText: '猛烈な クサさ！ それなのに １０００人に １人ぐらい これを 好んで かぐ 人がいる。',
    stats: { hp: 60, attack: 65, defense: 70, specialAttack: 85, specialDefense: 75, speed: 40 },
    moves: [
      { name: 'はなびらのまい', type: PokemonElementType.grass, power: 120, description: '２ー３ターンの あいだ 花を まきちらして 相手を 攻撃する。 まきちらした あとは 混乱する。' },
      { name: 'つきのひかり', type: PokemonElementType.normal, power: null, description: '自分の ＨＰを 回復する。 天気に よって 回復の 量が 変化する。' },
      { name: 'ようかいえき', type: PokemonElementType.poison, power: 40, description: '強い 酸を 相手に かけて 攻撃する。相手の 特防を さげることが ある。' },
      { name: 'ねむりごな', type: PokemonElementType.grass, power: null, description: '眠くなる 粉を たくさん ふりまいて 相手を 眠り状態に する。' },
    ],
  },
  vileplume: {
    flavorText: '花びらが 大きいほど たくさん 花粉を 出すが 頭が 重たくて 疲れてしまうという。',
    stats: { hp: 75, attack: 80, defense: 85, specialAttack: 110, specialDefense: 90, speed: 50 },
    moves: [
      { name: 'はなびらのまい', type: PokemonElementType.grass, power: 120, description: '２ー３ターンの あいだ 花を まきちらして 相手を 攻撃する。 まきちらした あとは 混乱する。' },
      { name: 'アロマセラピー', type: PokemonElementType.grass, power: null, description: '心地好い やすらぐ 香りを かがせて 味方全員の 状態異常を 回復する。' },
      { name: 'しびれごな', type: PokemonElementType.grass, power: null, description: 'しびれる 粉を たくさん ふりまいて 相手を まひ状態に する。' },
      { name: 'すいとる', type: PokemonElementType.grass, power: 20, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
    ],
  },
  paras: {
    flavorText: '虫の 背中に 生えているのは 冬虫夏草 という キノコ。 育つと キノコも 大きくなる。',
    stats: { hp: 35, attack: 70, defense: 55, specialAttack: 45, specialDefense: 55, speed: 25 },
    moves: [
      { name: 'キノコのほうし', type: PokemonElementType.grass, power: null, description: '催眠効果の ある 胞子を パラパラと ふりまき 相手を 眠り状態に する。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
      { name: 'アロマセラピー', type: PokemonElementType.grass, power: null, description: '心地好い やすらぐ 香りを かがせて 味方全員の 状態異常を 回復する。' },
      { name: 'しびれごな', type: PokemonElementType.grass, power: null, description: 'しびれる 粉を たくさん ふりまいて 相手を まひ状態に する。' },
    ],
  },
  parasect: {
    flavorText: '体よりも 大きな キノコが パラセクトを 操っている。 毒の 胞子を ばらまく。',
    stats: { hp: 60, attack: 95, defense: 80, specialAttack: 60, specialDefense: 80, speed: 30 },
    moves: [
      { name: 'キノコのほうし', type: PokemonElementType.grass, power: null, description: '催眠効果の ある 胞子を パラパラと ふりまき 相手を 眠り状態に する。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
      { name: 'アロマセラピー', type: PokemonElementType.grass, power: null, description: '心地好い やすらぐ 香りを かがせて 味方全員の 状態異常を 回復する。' },
      { name: 'しびれごな', type: PokemonElementType.grass, power: null, description: 'しびれる 粉を たくさん ふりまいて 相手を まひ状態に する。' },
    ],
  },
  venonat: {
    flavorText: '小さな 目が たくさん 集まって 大きな 目に なっている。 夜になると 明かりに 集まる。',
    stats: { hp: 60, attack: 55, defense: 50, specialAttack: 40, specialDefense: 55, speed: 45 },
    moves: [
      { name: 'ねむりごな', type: PokemonElementType.grass, power: null, description: '眠くなる 粉を たくさん ふりまいて 相手を 眠り状態に する。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
      { name: 'しびれごな', type: PokemonElementType.grass, power: null, description: 'しびれる 粉を たくさん ふりまいて 相手を まひ状態に する。' },
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
    ],
  },
  venomoth: {
    flavorText: 'ばらまかれた りんぷんに 触れると 体の 感覚が おかしくなって まっすぐ 立っていられなくなる。',
    stats: { hp: 70, attack: 65, defense: 60, specialAttack: 90, specialDefense: 75, speed: 90 },
    moves: [
      { name: 'ねむりごな', type: PokemonElementType.grass, power: null, description: '眠くなる 粉を たくさん ふりまいて 相手を 眠り状態に する。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
      { name: 'ぎんいろのかぜ', type: PokemonElementType.bug, power: 60, description: '風に りんぷんを のせて 相手を 攻撃する。自分の すべての 能力が あがることが ある。' },
      { name: 'しびれごな', type: PokemonElementType.grass, power: null, description: 'しびれる 粉を たくさん ふりまいて 相手を まひ状態に する。' },
    ],
  },
  diglett: {
    flavorText: '地下１メートルくらいを 掘りすすみ 木の根っこなどを かじって 生きる。 たまに 地上に 顔を出す。',
    stats: { hp: 10, attack: 55, defense: 25, specialAttack: 35, specialDefense: 45, speed: 95 },
    moves: [
      { name: 'マグニチュード', type: PokemonElementType.ground, power: null, description: '地面を 揺らして 自分の 周りに いるものを 攻撃する。 技の 威力は いろいろ 変わる。' },
      { name: 'じわれ', type: PokemonElementType.ground, power: null, description: '地割れの 裂け目に 相手を 落として 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
    ],
  },
  dugtrio: {
    flavorText: '地中を 掘りすすんで 相手が 油断しているところを 別の 場所から 攻撃する。',
    stats: { hp: 35, attack: 100, defense: 50, specialAttack: 50, specialDefense: 70, speed: 120 },
    moves: [
      { name: 'マグニチュード', type: PokemonElementType.ground, power: null, description: '地面を 揺らして 自分の 周りに いるものを 攻撃する。 技の 威力は いろいろ 変わる。' },
      { name: 'トライアタック', type: PokemonElementType.normal, power: 80, description: '３つの 光線で 攻撃する。 まひか やけどか こおり状態の どれかに することが ある。' },
      { name: 'じわれ', type: PokemonElementType.ground, power: null, description: '地割れの 裂け目に 相手を 落として 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'すなじごく', type: PokemonElementType.ground, power: 35, description: '激しく 吹きあれる 砂あらしの 中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
    ],
  },
  meowth: {
    flavorText: '夜中に 行動する 習性。 キラキラ 光るものを 見つけると 負けないくらい 瞳が 輝く。',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 40, specialDefense: 40, speed: 90 },
    moves: [
      { name: 'ネコにこばん', type: PokemonElementType.normal, power: 40, description: '相手の 体に 小判を 投げつけて 攻撃する。 戦闘の あとで お金が もらえる。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'ねこだまし', type: PokemonElementType.normal, power: 40, description: '先制攻撃で 相手を ひるませる。 戦闘に でたら すぐに ださないと 成功しない。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
    ],
  },
  persian: {
    flavorText: '毛並みが 美しく ペットにしたがる 人も 多いが すぐ ひっかいたり するので 手強いぞ。',
    stats: { hp: 65, attack: 70, defense: 60, specialAttack: 65, specialDefense: 65, speed: 115 },
    moves: [
      { name: 'ネコにこばん', type: PokemonElementType.normal, power: 40, description: '相手の 体に 小判を 投げつけて 攻撃する。 戦闘の あとで お金が もらえる。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'ねこだまし', type: PokemonElementType.normal, power: 40, description: '先制攻撃で 相手を ひるませる。 戦闘に でたら すぐに ださないと 成功しない。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
    ],
  },
  psyduck: {
    flavorText: 'いつも 頭痛に 悩まされている。 この 頭痛が 激しくなると 不思議な 力を 使いはじめる。',
    stats: { hp: 50, attack: 52, defense: 48, specialAttack: 65, specialDefense: 50, speed: 55 },
    moves: [
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
      { name: 'かなしばり', type: PokemonElementType.normal, power: null, description: '相手の 動きを とめて 直前に だしていた 技を ４ターンの あいだ 使えなくする。' },
    ],
  },
  golduck: {
    flavorText: '夕暮れ 水辺に 姿をみせる。 額が あやしく 光るとき 神通力を 使いこなすという。',
    stats: { hp: 80, attack: 82, defense: 78, specialAttack: 95, specialDefense: 80, speed: 85 },
    moves: [
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
      { name: 'かなしばり', type: PokemonElementType.normal, power: null, description: '相手の 動きを とめて 直前に だしていた 技を ４ターンの あいだ 使えなくする。' },
    ],
  },
  mankey: {
    flavorText: '意味もなく 怒って 暴れ出すと 仲間の 区別も つかなくなるので 近寄るのは 非常に 危険だ。',
    stats: { hp: 40, attack: 80, defense: 35, specialAttack: 35, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'からてチョップ', type: PokemonElementType.fighting, power: 50, description: '鋭い チョップで 相手を たたいて 攻撃する。 急所に 当たりやすい。' },
      { name: 'クロスチョップ', type: PokemonElementType.fighting, power: 100, description: '両手チョップを 相手に たたきつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
    ],
  },
  primeape: {
    flavorText: 'まわりに だれも いないときだけは 怒るのを やめている。しかし それを 見るのは 難しい。',
    stats: { hp: 65, attack: 105, defense: 60, specialAttack: 60, specialDefense: 70, speed: 95 },
    moves: [
      { name: 'からてチョップ', type: PokemonElementType.fighting, power: 50, description: '鋭い チョップで 相手を たたいて 攻撃する。 急所に 当たりやすい。' },
      { name: 'クロスチョップ', type: PokemonElementType.fighting, power: 100, description: '両手チョップを 相手に たたきつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
    ],
  },
  growlithe: {
    flavorText: '人懐こく 誠実な 性格。 敵には ほえて かみつき 追い払おうとする。',
    stats: { hp: 55, attack: 70, defense: 45, specialAttack: 70, specialDefense: 50, speed: 60 },
    moves: [
      { name: 'かえんぐるま', type: PokemonElementType.fire, power: 60, description: '炎を まとい 相手に 突進して 攻撃する。 やけど状態に することが ある。' },
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'かえんほうしゃ', type: PokemonElementType.fire, power: 90, description: '激しい 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
    ],
  },
  arcanine: {
    flavorText: '昔から 多くの 人を 虜にした 美しい ポケモン。 飛ぶように 軽やかに 走る。',
    stats: { hp: 90, attack: 110, defense: 80, specialAttack: 100, specialDefense: 80, speed: 95 },
    moves: [
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'かみつく', type: PokemonElementType.dark, power: 60, description: '鋭く とがった 歯で かみついて 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  poliwag: {
    flavorText: 'スベスベした 黒い皮膚は 薄く 湿っている。内臓の 一部が 透けて 渦巻状に 見える。',
    stats: { hp: 40, attack: 50, defense: 40, specialAttack: 40, specialDefense: 40, speed: 90 },
    moves: [
      { name: 'おうふくビンタ', type: PokemonElementType.normal, power: 15, description: 'おうふく ビンタで 相手を たたいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'はらだいこ', type: PokemonElementType.normal, power: null, description: '自分の ＨＰを 最大ＨＰの 半分 減らして 自分の 攻撃を 最大に あげる。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
    ],
  },
  poliwhirl: {
    flavorText: '陸でも 水中でも 暮らせる。 地上では いつも 汗をかき 皮膚を ぬめぬめ させている。',
    stats: { hp: 65, attack: 65, defense: 65, specialAttack: 50, specialDefense: 50, speed: 90 },
    moves: [
      { name: 'おうふくビンタ', type: PokemonElementType.normal, power: 15, description: 'おうふく ビンタで 相手を たたいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'はらだいこ', type: PokemonElementType.normal, power: null, description: '自分の ＨＰを 最大ＨＰの 半分 減らして 自分の 攻撃を 最大に あげる。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
    ],
  },
  poliwrath: {
    flavorText: '強靭な 筋肉を 持つ。 太平洋を 休むことなく 泳ぎ続けることが できるのだ。',
    stats: { hp: 90, attack: 95, defense: 95, specialAttack: 70, specialDefense: 90, speed: 70 },
    moves: [
      { name: 'こころのめ', type: PokemonElementType.normal, power: null, description: '相手の 動きを 心で 感じて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'おうふくビンタ', type: PokemonElementType.normal, power: 15, description: 'おうふく ビンタで 相手を たたいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'じごくぐるま', type: PokemonElementType.fighting, power: 80, description: '地面に 自分ごと 相手を 投げつけて 攻撃する。 自分も 少し ダメージを 受ける。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
    ],
  },
  abra: {
    flavorText: '１日 １８時間は 寝ている。 眠ってる あいだでも さまざまな 超能力を 使う。',
    stats: { hp: 25, attack: 20, defense: 15, specialAttack: 105, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'テレポート', type: PokemonElementType.psychic, power: null, description: '野生ポケモンとの 戦闘を やめる。 最後に はいった ポケセンの ある 街にも 行ける。' },
    ],
  },
  kadabra: {
    flavorText: '超能力を 発揮すると 強い アルファ波を 出して 精密機械を 壊してしまう。',
    stats: { hp: 40, attack: 35, defense: 30, specialAttack: 120, specialDefense: 70, speed: 105 },
    moves: [
      { name: 'スプーンまげ', type: PokemonElementType.psychic, power: null, description: 'スプーンを まげて 注意を ひき 相手の 命中率を さげる。' },
      { name: 'テレポート', type: PokemonElementType.psychic, power: null, description: '野生ポケモンとの 戦闘を やめる。 最後に はいった ポケセンの ある 街にも 行ける。' },
      { name: 'じこさいせい', type: PokemonElementType.normal, power: null, description: '細胞を 再生させて 自分の 最大ＨＰの 半分の ＨＰを 回復する。' },
      { name: 'かなしばり', type: PokemonElementType.normal, power: null, description: '相手の 動きを とめて 直前に だしていた 技を ４ターンの あいだ 使えなくする。' },
    ],
  },
  alakazam: {
    flavorText: '脳細胞は いつも 分裂して 死ぬまで 増え続けるので あらゆることを 覚えておける。',
    stats: { hp: 55, attack: 50, defense: 45, specialAttack: 135, specialDefense: 95, speed: 120 },
    moves: [
      { name: 'スプーンまげ', type: PokemonElementType.psychic, power: null, description: 'スプーンを まげて 注意を ひき 相手の 命中率を さげる。' },
      { name: 'テレポート', type: PokemonElementType.psychic, power: null, description: '野生ポケモンとの 戦闘を やめる。 最後に はいった ポケセンの ある 街にも 行ける。' },
      { name: 'じこさいせい', type: PokemonElementType.normal, power: null, description: '細胞を 再生させて 自分の 最大ＨＰの 半分の ＨＰを 回復する。' },
      { name: 'かなしばり', type: PokemonElementType.normal, power: null, description: '相手の 動きを とめて 直前に だしていた 技を ４ターンの あいだ 使えなくする。' },
    ],
  },
  machop: {
    flavorText: 'ゴローンを 何度も 上げ下ろしして 全身の 筋肉を 鍛える。 あらゆる 格闘技を 使う。',
    stats: { hp: 70, attack: 80, defense: 50, specialAttack: 35, specialDefense: 35, speed: 35 },
    moves: [
      { name: 'からてチョップ', type: PokemonElementType.fighting, power: 50, description: '鋭い チョップで 相手を たたいて 攻撃する。 急所に 当たりやすい。' },
      { name: 'あてみなげ', type: PokemonElementType.fighting, power: 70, description: '相手より あとに 攻撃する。 そのかわり 自分の 攻撃は 必ず 命中する。' },
      { name: 'クロスチョップ', type: PokemonElementType.fighting, power: 100, description: '両手チョップを 相手に たたきつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
    ],
  },
  machoke: {
    flavorText: 'すごく 強靭な 肉体なので パワーセーブ ベルトを つけて 強さを 制御している。',
    stats: { hp: 80, attack: 100, defense: 70, specialAttack: 50, specialDefense: 60, speed: 45 },
    moves: [
      { name: 'からてチョップ', type: PokemonElementType.fighting, power: 50, description: '鋭い チョップで 相手を たたいて 攻撃する。 急所に 当たりやすい。' },
      { name: 'あてみなげ', type: PokemonElementType.fighting, power: 70, description: '相手より あとに 攻撃する。 そのかわり 自分の 攻撃は 必ず 命中する。' },
      { name: 'クロスチョップ', type: PokemonElementType.fighting, power: 100, description: '両手チョップを 相手に たたきつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
    ],
  },
  machamp: {
    flavorText: '発達した ４本の 腕は ２秒間に １０００発の パンチを 繰り出すことができる。',
    stats: { hp: 90, attack: 130, defense: 80, specialAttack: 65, specialDefense: 85, speed: 55 },
    moves: [
      { name: 'からてチョップ', type: PokemonElementType.fighting, power: 50, description: '鋭い チョップで 相手を たたいて 攻撃する。 急所に 当たりやすい。' },
      { name: 'あてみなげ', type: PokemonElementType.fighting, power: 70, description: '相手より あとに 攻撃する。 そのかわり 自分の 攻撃は 必ず 命中する。' },
      { name: 'クロスチョップ', type: PokemonElementType.fighting, power: 100, description: '両手チョップを 相手に たたきつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
    ],
  },
  bellsprout: {
    flavorText: 'ひょろっとした 体つきだが 獲物を 捕らえるときの 動きは 目にも とまらないほど 素早い。',
    stats: { hp: 50, attack: 75, defense: 35, specialAttack: 70, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'つるのムチ', type: PokemonElementType.grass, power: 45, description: 'ムチのように しなる 細長い つるで 相手を たたきつけて 攻撃する。' },
      { name: 'ようかいえき', type: PokemonElementType.poison, power: 40, description: '強い 酸を 相手に かけて 攻撃する。相手の 特防を さげることが ある。' },
      { name: 'ねむりごな', type: PokemonElementType.grass, power: null, description: '眠くなる 粉を たくさん ふりまいて 相手を 眠り状態に する。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
    ],
  },
  weepinbell: {
    flavorText: '葉っぱの 部分は カッターになって 相手を 切り裂く。口からは なんでも 溶かす 液体を 吐く。',
    stats: { hp: 65, attack: 90, defense: 50, specialAttack: 85, specialDefense: 45, speed: 55 },
    moves: [
      { name: 'つるのムチ', type: PokemonElementType.grass, power: 45, description: 'ムチのように しなる 細長い つるで 相手を たたきつけて 攻撃する。' },
      { name: 'ようかいえき', type: PokemonElementType.poison, power: 40, description: '強い 酸を 相手に かけて 攻撃する。相手の 特防を さげることが ある。' },
      { name: 'ねむりごな', type: PokemonElementType.grass, power: null, description: '眠くなる 粉を たくさん ふりまいて 相手を 眠り状態に する。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
    ],
  },
  victreebel: {
    flavorText: 'ジャングルの 奥地に ウツボット ばかり いる 地帯が あって 行ったら ２度と 帰ってこれない。',
    stats: { hp: 80, attack: 105, defense: 65, specialAttack: 100, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'つるのムチ', type: PokemonElementType.grass, power: 45, description: 'ムチのように しなる 細長い つるで 相手を たたきつけて 攻撃する。' },
      { name: 'ねむりごな', type: PokemonElementType.grass, power: null, description: '眠くなる 粉を たくさん ふりまいて 相手を 眠り状態に する。' },
      { name: 'はきだす', type: PokemonElementType.normal, power: null, description: '蓄えた 力を 相手に ぶつけて 攻撃する。 蓄えているほど 威力が あがる。' },
      { name: 'のみこむ', type: PokemonElementType.normal, power: null, description: '蓄えた 力を のみこんで 自分の ＨＰを 回復する。 蓄えているほど 回復する。' },
    ],
  },
  tentacool: {
    flavorText: '体の ほとんどが 水分。 水晶のような 目玉から 不思議な ビームを 発射する。',
    stats: { hp: 40, attack: 40, defense: 35, specialAttack: 50, specialDefense: 100, speed: 70 },
    moves: [
      { name: 'からみつく', type: PokemonElementType.normal, power: 10, description: '触手や ツタなどを からみつけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'バリアー', type: PokemonElementType.psychic, power: null, description: '頑丈な 壁を つくって 自分の 防御を ぐーんと あげる。' },
      { name: 'ようかいえき', type: PokemonElementType.poison, power: 40, description: '強い 酸を 相手に かけて 攻撃する。相手の 特防を さげることが ある。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
    ],
  },
  tentacruel: {
    flavorText: '８０本の 触手が 自由に 動く。 刺されると 毒に 侵され 鋭い 痛みが 走る。',
    stats: { hp: 80, attack: 70, defense: 65, specialAttack: 80, specialDefense: 120, speed: 100 },
    moves: [
      { name: 'からみつく', type: PokemonElementType.normal, power: 10, description: '触手や ツタなどを からみつけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'バリアー', type: PokemonElementType.psychic, power: null, description: '頑丈な 壁を つくって 自分の 防御を ぐーんと あげる。' },
      { name: 'ようかいえき', type: PokemonElementType.poison, power: 40, description: '強い 酸を 相手に かけて 攻撃する。相手の 特防を さげることが ある。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
    ],
  },
  geodude: {
    flavorText: '草原や 山に 生息する。 石ころに 似ていて 気がつかず 踏んだり つまずいたりしてしまう。',
    stats: { hp: 40, attack: 80, defense: 100, specialAttack: 30, specialDefense: 30, speed: 20 },
    moves: [
      { name: 'マグニチュード', type: PokemonElementType.ground, power: null, description: '地面を 揺らして 自分の 周りに いるものを 攻撃する。 技の 威力は いろいろ 変わる。' },
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'いわおとし', type: PokemonElementType.rock, power: 50, description: '小さな 岩を 持ちあげて 相手に 投げつけて 攻撃する。' },
      { name: 'だいばくはつ', type: PokemonElementType.normal, power: 250, description: '大きな 爆発で 自分の 周りに いるものを 攻撃する。 使ったあとに ひんしに なる。' },
    ],
  },
  graveler: {
    flavorText: '山から 転がり 落ちるとき 体の あちこちが 取れても 気にしない 豪快な 性格。',
    stats: { hp: 55, attack: 95, defense: 115, specialAttack: 45, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'マグニチュード', type: PokemonElementType.ground, power: null, description: '地面を 揺らして 自分の 周りに いるものを 攻撃する。 技の 威力は いろいろ 変わる。' },
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'いわおとし', type: PokemonElementType.rock, power: 50, description: '小さな 岩を 持ちあげて 相手に 投げつけて 攻撃する。' },
      { name: 'だいばくはつ', type: PokemonElementType.normal, power: 250, description: '大きな 爆発で 自分の 周りに いるものを 攻撃する。 使ったあとに ひんしに なる。' },
    ],
  },
  golem: {
    flavorText: '山頂から ふもとまで 続く 溝は ゴローニャが 転がり落ちる 通り道なので 要注意。',
    stats: { hp: 80, attack: 120, defense: 130, specialAttack: 55, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'マグニチュード', type: PokemonElementType.ground, power: null, description: '地面を 揺らして 自分の 周りに いるものを 攻撃する。 技の 威力は いろいろ 変わる。' },
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'いわおとし', type: PokemonElementType.rock, power: 50, description: '小さな 岩を 持ちあげて 相手に 投げつけて 攻撃する。' },
      { name: 'だいばくはつ', type: PokemonElementType.normal, power: 250, description: '大きな 爆発で 自分の 周りに いるものを 攻撃する。 使ったあとに ひんしに なる。' },
    ],
  },
  ponyta: {
    flavorText: '生まれたばかりでは 立つのがやっと。 だが 走るほどに 足腰は 鍛えられて 速度が 増していく。',
    stats: { hp: 50, attack: 85, defense: 55, specialAttack: 65, specialDefense: 65, speed: 90 },
    moves: [
      { name: 'ふみつけ', type: PokemonElementType.normal, power: 65, description: '大きな 足で 相手を 踏みつけて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'ほのおのうず', type: PokemonElementType.fire, power: 35, description: '激しく 渦をまく 炎の中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'とびはねる', type: PokemonElementType.flying, power: 85, description: '空高く 飛び跳ねて ２ターン目に 相手を 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  rapidash: {
    flavorText: '速く 動く 物体を 見ると 競争したくなり 猛烈な スピードで 追いかけはじめる。',
    stats: { hp: 65, attack: 100, defense: 70, specialAttack: 80, specialDefense: 80, speed: 105 },
    moves: [
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'ふみつけ', type: PokemonElementType.normal, power: 65, description: '大きな 足で 相手を 踏みつけて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'ほのおのうず', type: PokemonElementType.fire, power: 35, description: '激しく 渦をまく 炎の中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
    ],
  },
  slowpoke: {
    flavorText: 'いつも ボーッとしていて なにを 考えているか わからない。 尻尾で エサを 釣るのが 得意。',
    stats: { hp: 90, attack: 65, defense: 65, specialAttack: 40, specialDefense: 40, speed: 15 },
    moves: [
      { name: 'あくび', type: PokemonElementType.normal, power: null, description: '大きな あくびで 眠気を 誘う。 次の ターンに 相手を 眠り状態に する。' },
      { name: 'かなしばり', type: PokemonElementType.normal, power: null, description: '相手の 動きを とめて 直前に だしていた 技を ４ターンの あいだ 使えなくする。' },
      { name: 'ねんりき', type: PokemonElementType.psychic, power: 50, description: '弱い 念力を 相手に 送って 攻撃する。 相手を 混乱させることが ある。' },
      { name: 'ドわすれ', type: PokemonElementType.psychic, power: null, description: '頭を からにして 一瞬 なにかを 忘れることで 自分の 特防を ぐーんと あげる。' },
    ],
  },
  slowbro: {
    flavorText: 'くっついている シェルダーは 尻尾から にじみ出る うま味が 欲しくて ずっと 離れない。',
    stats: { hp: 95, attack: 75, defense: 110, specialAttack: 100, specialDefense: 80, speed: 30 },
    moves: [
      { name: 'からにこもる', type: PokemonElementType.water, power: null, description: '殻に 潜りこんで 身を守り 自分の 防御を あげる。' },
      { name: 'あくび', type: PokemonElementType.normal, power: null, description: '大きな あくびで 眠気を 誘う。 次の ターンに 相手を 眠り状態に する。' },
      { name: 'かなしばり', type: PokemonElementType.normal, power: null, description: '相手の 動きを とめて 直前に だしていた 技を ４ターンの あいだ 使えなくする。' },
      { name: 'ねんりき', type: PokemonElementType.psychic, power: 50, description: '弱い 念力を 相手に 送って 攻撃する。 相手を 混乱させることが ある。' },
    ],
  },
  magnemite: {
    flavorText: '左右の ユニットから 重力を さえぎる 力を 出すので 空中に 浮かべる。',
    stats: { hp: 25, attack: 35, defense: 70, specialAttack: 95, specialDefense: 55, speed: 45 },
    moves: [
      { name: 'ソニックブーム', type: PokemonElementType.normal, power: null, description: '衝撃波を 相手に ぶつけて 攻撃する。 ２０の ダメージを 決まって 与える。' },
      { name: 'ロックオン', type: PokemonElementType.normal, power: null, description: '照準を しっかり あわせて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'スパーク', type: PokemonElementType.electric, power: 65, description: '電気を まとい 相手に 突進して 攻撃する。 まひ状態に することが ある。' },
      { name: 'ちょうおんぱ', type: PokemonElementType.normal, power: null, description: '特殊な 音波を 体から 発して 相手を 混乱させる。' },
    ],
  },
  magneton: {
    flavorText: '複数の コイルが 連結して 強力な 磁力線と 高電圧を 放射する。',
    stats: { hp: 50, attack: 60, defense: 95, specialAttack: 120, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'ソニックブーム', type: PokemonElementType.normal, power: null, description: '衝撃波を 相手に ぶつけて 攻撃する。 ２０の ダメージを 決まって 与える。' },
      { name: 'ロックオン', type: PokemonElementType.normal, power: null, description: '照準を しっかり あわせて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'トライアタック', type: PokemonElementType.normal, power: 80, description: '３つの 光線で 攻撃する。 まひか やけどか こおり状態の どれかに することが ある。' },
      { name: 'スパーク', type: PokemonElementType.electric, power: 65, description: '電気を まとい 相手に 突進して 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  farfetchd: {
    flavorText: '持っている 茎は 大切な 武器でもあり 刀を 振るように いろんな ものを 切ることができる。',
    stats: { hp: 52, attack: 90, defense: 55, specialAttack: 58, specialDefense: 62, speed: 60 },
    moves: [
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'つつく', type: PokemonElementType.flying, power: 35, description: '鋭く とがった くちばしや つので 相手を 突いて 攻撃する。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
      { name: 'みねうち', type: PokemonElementType.normal, power: 40, description: '相手の ＨＰが 必ず １だけ 残るように 手加減して 攻撃する。' },
    ],
  },
  doduo: {
    flavorText: '突然変異で 見つかった ２つの 頭を 持つ ポケモン。 時速１００キロで 走る。',
    stats: { hp: 35, attack: 85, defense: 45, specialAttack: 35, specialDefense: 35, speed: 75 },
    moves: [
      { name: 'ドリルくちばし', type: PokemonElementType.flying, power: 80, description: '回転しながら とがった くちばしを 相手に 突き刺して 攻撃する。' },
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'トライアタック', type: PokemonElementType.normal, power: 80, description: '３つの 光線で 攻撃する。 まひか やけどか こおり状態の どれかに することが ある。' },
      { name: 'つつく', type: PokemonElementType.flying, power: 35, description: '鋭く とがった くちばしや つので 相手を 突いて 攻撃する。' },
    ],
  },
  dodrio: {
    flavorText: '３つの 頭が 見ている前で わずかでも すきを 見せると クチバシで 激しく つつかれる。',
    stats: { hp: 60, attack: 110, defense: 70, specialAttack: 60, specialDefense: 60, speed: 110 },
    moves: [
      { name: 'ドリルくちばし', type: PokemonElementType.flying, power: 80, description: '回転しながら とがった くちばしを 相手に 突き刺して 攻撃する。' },
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'トライアタック', type: PokemonElementType.normal, power: 80, description: '３つの 光線で 攻撃する。 まひか やけどか こおり状態の どれかに することが ある。' },
      { name: 'つつく', type: PokemonElementType.flying, power: 35, description: '鋭く とがった くちばしや つので 相手を 突いて 攻撃する。' },
    ],
  },
  seel: {
    flavorText: '氷山で 暮らす ポケモン。 頭の とがった でっぱりで 氷を 割って 海を 泳ぐ。',
    stats: { hp: 65, attack: 45, defense: 55, specialAttack: 45, specialDefense: 70, speed: 45 },
    moves: [
      { name: 'オーロラビーム', type: PokemonElementType.ice, power: 65, description: 'にじいろの ビームを 相手に 発射して 攻撃する。 攻撃を さげる ことが ある。' },
      { name: 'なきごえ', type: PokemonElementType.normal, power: null, description: 'かわいい なきごえを 聞かせて 気を ひき 油断を させて 相手の 攻撃を さげる。' },
      { name: 'れいとうビーム', type: PokemonElementType.ice, power: 90, description: '凍える ビームを 相手に 発射して 攻撃する。 こおり状態に することが ある。' },
      { name: 'しんぴのまもり', type: PokemonElementType.normal, power: null, description: '５ターンの あいだ 不思議な 力に 守られて 状態異常に ならなくなる。' },
    ],
  },
  dewgong: {
    flavorText: '全身が 真っ白な 毛で 覆われている。寒さに 強く むしろ 寒いほど 元気になる。',
    stats: { hp: 90, attack: 70, defense: 80, specialAttack: 70, specialDefense: 95, speed: 70 },
    moves: [
      { name: 'ぜったいれいど', type: PokemonElementType.ice, power: null, description: '絶対零度の 冷たさで 相手を 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'オーロラビーム', type: PokemonElementType.ice, power: 65, description: 'にじいろの ビームを 相手に 発射して 攻撃する。 攻撃を さげる ことが ある。' },
      { name: 'なきごえ', type: PokemonElementType.normal, power: null, description: 'かわいい なきごえを 聞かせて 気を ひき 油断を させて 相手の 攻撃を さげる。' },
      { name: 'シグナルビーム', type: PokemonElementType.bug, power: 75, description: '不思議な 光を 発射して 攻撃する。 相手を 混乱させることが ある。' },
    ],
  },
  grimer: {
    flavorText: '月からの エックス線を 浴びた ヘドロが ベトベターに 変化した。 汚いものが 大好物。',
    stats: { hp: 80, attack: 80, defense: 50, specialAttack: 40, specialDefense: 50, speed: 25 },
    moves: [
      { name: 'ヘドロこうげき', type: PokemonElementType.poison, power: 65, description: '汚い ヘドロを 相手に 投げつけて 攻撃する。 毒状態に することが ある。' },
      { name: 'ちいさくなる', type: PokemonElementType.normal, power: null, description: '体を ちぢめて 小さく みせて 自分の 回避率を ぐーんと あげる。' },
      { name: 'どくガス', type: PokemonElementType.poison, power: null, description: '毒ガスを 相手の 顔に 吹きかけて 毒の 状態に する。' },
      { name: 'とける', type: PokemonElementType.poison, power: null, description: '細胞の 変化で 液状に なり 自分の 防御を ぐーんと あげる。' },
    ],
  },
  muk: {
    flavorText: 'ヘドロが たまる くさい 場所を 好んで 集まってくるので あたりは いっそう くさくなる。',
    stats: { hp: 105, attack: 105, defense: 75, specialAttack: 65, specialDefense: 100, speed: 50 },
    moves: [
      { name: 'ヘドロこうげき', type: PokemonElementType.poison, power: 65, description: '汚い ヘドロを 相手に 投げつけて 攻撃する。 毒状態に することが ある。' },
      { name: 'ちいさくなる', type: PokemonElementType.normal, power: null, description: '体を ちぢめて 小さく みせて 自分の 回避率を ぐーんと あげる。' },
      { name: 'どくガス', type: PokemonElementType.poison, power: null, description: '毒ガスを 相手の 顔に 吹きかけて 毒の 状態に する。' },
      { name: 'とける', type: PokemonElementType.poison, power: null, description: '細胞の 変化で 液状に なり 自分の 防御を ぐーんと あげる。' },
    ],
  },
  shellder: {
    flavorText: '硬い 殻は どんな 攻撃も 跳ね返す。開いたときに 中を 攻撃されると 弱い。',
    stats: { hp: 30, attack: 65, defense: 100, specialAttack: 45, specialDefense: 25, speed: 40 },
    moves: [
      { name: 'からではさむ', type: PokemonElementType.water, power: 35, description: 'とても 頑丈な ぶあつい 殻に ４ー５ターンの あいだ 相手を はさんで 攻撃する。' },
      { name: 'オーロラビーム', type: PokemonElementType.ice, power: 65, description: 'にじいろの ビームを 相手に 発射して 攻撃する。 攻撃を さげる ことが ある。' },
      { name: 'からにこもる', type: PokemonElementType.water, power: null, description: '殻に 潜りこんで 身を守り 自分の 防御を あげる。' },
      { name: 'つららばり', type: PokemonElementType.ice, power: 25, description: '鋭い 氷柱を 相手に 発射して 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  cloyster: {
    flavorText: '潮の 流れが 激しい 海に 生息している パルシェンの 殻の トゲは 大きく 鋭い。',
    stats: { hp: 50, attack: 95, defense: 180, specialAttack: 85, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'とげキャノン', type: PokemonElementType.normal, power: 20, description: '鋭い ハリを 相手に 発射して 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'オーロラビーム', type: PokemonElementType.ice, power: 65, description: 'にじいろの ビームを 相手に 発射して 攻撃する。 攻撃を さげる ことが ある。' },
      { name: 'からにこもる', type: PokemonElementType.water, power: null, description: '殻に 潜りこんで 身を守り 自分の 防御を あげる。' },
      { name: 'ちょうおんぱ', type: PokemonElementType.normal, power: null, description: '特殊な 音波を 体から 発して 相手を 混乱させる。' },
    ],
  },
  gastly: {
    flavorText: 'ガスでできた 薄い 体は どんな 大きさの 相手も 包みこみ 息の根を 止める。',
    stats: { hp: 30, attack: 35, defense: 30, specialAttack: 100, specialDefense: 35, speed: 80 },
    moves: [
      { name: 'したでなめる', type: PokemonElementType.ghost, power: 30, description: '長い 舌で 相手を なめまわして 攻撃する。 まひ状態に することが ある。' },
      { name: 'くろいまなざし', type: PokemonElementType.normal, power: null, description: '吸いこまれるような 黒い まなざしで じっと みつめて 相手を 戦闘から 逃げられなくする。' },
      { name: 'あくむ', type: PokemonElementType.ghost, power: null, description: '眠り状態の 相手に 悪夢を みせて 毎ターン 少しずつ ＨＰを 減らしていく。' },
      { name: 'みちづれ', type: PokemonElementType.ghost, power: null, description: '技を だしたあと 攻撃を 受けて ひんしに なったとき 攻撃 相手も ひんしに する。' },
    ],
  },
  haunter: {
    flavorText: '暗闇で だれもいないのに 見られているような 気がしたら そこに ゴーストが いるのだ。',
    stats: { hp: 45, attack: 50, defense: 45, specialAttack: 115, specialDefense: 55, speed: 95 },
    moves: [
      { name: 'シャドーパンチ', type: PokemonElementType.ghost, power: 60, description: '影に まぎれて パンチを くりだす。 攻撃は 必ず 命中する。' },
      { name: 'したでなめる', type: PokemonElementType.ghost, power: 30, description: '長い 舌で 相手を なめまわして 攻撃する。 まひ状態に することが ある。' },
      { name: 'くろいまなざし', type: PokemonElementType.normal, power: null, description: '吸いこまれるような 黒い まなざしで じっと みつめて 相手を 戦闘から 逃げられなくする。' },
      { name: 'あくむ', type: PokemonElementType.ghost, power: null, description: '眠り状態の 相手に 悪夢を みせて 毎ターン 少しずつ ＨＰを 減らしていく。' },
    ],
  },
  gengar: {
    flavorText: '物陰に 姿を 隠す。 ゲンガーの 潜んでいる 部屋は 温度が ５度 下がるといわれる。',
    stats: { hp: 60, attack: 65, defense: 60, specialAttack: 130, specialDefense: 75, speed: 110 },
    moves: [
      { name: 'シャドーパンチ', type: PokemonElementType.ghost, power: 60, description: '影に まぎれて パンチを くりだす。 攻撃は 必ず 命中する。' },
      { name: 'したでなめる', type: PokemonElementType.ghost, power: 30, description: '長い 舌で 相手を なめまわして 攻撃する。 まひ状態に することが ある。' },
      { name: 'くろいまなざし', type: PokemonElementType.normal, power: null, description: '吸いこまれるような 黒い まなざしで じっと みつめて 相手を 戦闘から 逃げられなくする。' },
      { name: 'あくむ', type: PokemonElementType.ghost, power: null, description: '眠り状態の 相手に 悪夢を みせて 毎ターン 少しずつ ＨＰを 減らしていく。' },
    ],
  },
  onix: {
    flavorText: '地中を ものすごい 勢いで 掘りすすみ エサを 探す。通った 跡は ディグダの 住処になる。',
    stats: { hp: 35, attack: 45, defense: 160, specialAttack: 30, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'いわおとし', type: PokemonElementType.rock, power: 50, description: '小さな 岩を 持ちあげて 相手に 投げつけて 攻撃する。' },
      { name: 'しめつける', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを 使い ４ー５ターンの あいだ 相手を 締めつけて 攻撃する。' },
      { name: 'りゅうのいぶき', type: PokemonElementType.dragon, power: 60, description: 'ものすごい 息を 相手に 吹きつけて 攻撃する。 まひ状態に することが ある。' },
      { name: 'すなじごく', type: PokemonElementType.ground, power: 35, description: '激しく 吹きあれる 砂あらしの 中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
    ],
  },
  drowzee: {
    flavorText: '眠らせては 夢を 食べるが 悪い 夢ばかり 食べてると お腹を 壊すことが あるらしい。',
    stats: { hp: 60, attack: 48, defense: 45, specialAttack: 43, specialDefense: 90, speed: 42 },
    moves: [
      { name: 'ヨガのポーズ', type: PokemonElementType.psychic, power: null, description: '眠っている 力を 体の 奥から ひきだして 自分の 攻撃を あげる。' },
      { name: 'どくガス', type: PokemonElementType.poison, power: null, description: '毒ガスを 相手の 顔に 吹きかけて 毒の 状態に する。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
      { name: 'はたく', type: PokemonElementType.normal, power: 40, description: '長い しっぽや 手などを 使って 相手を はたいて 攻撃する。' },
    ],
  },
  hypno: {
    flavorText: '振り子のようなものを 持ち歩く。 子供に 催眠術を かけて どこかへ 連れ去る 事件があった。',
    stats: { hp: 85, attack: 73, defense: 70, specialAttack: 73, specialDefense: 115, speed: 67 },
    moves: [
      { name: 'ヨガのポーズ', type: PokemonElementType.psychic, power: null, description: '眠っている 力を 体の 奥から ひきだして 自分の 攻撃を あげる。' },
      { name: 'どくガス', type: PokemonElementType.poison, power: null, description: '毒ガスを 相手の 顔に 吹きかけて 毒の 状態に する。' },
      { name: 'あくむ', type: PokemonElementType.ghost, power: null, description: '眠り状態の 相手に 悪夢を みせて 毎ターン 少しずつ ＨＰを 減らしていく。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
    ],
  },
  krabby: {
    flavorText: '危険が 迫ると 口から 吐き出す 泡で 全身を 包んで 体を 大きく みせようとする。',
    stats: { hp: 30, attack: 105, defense: 90, specialAttack: 25, specialDefense: 25, speed: 50 },
    moves: [
      { name: 'クラブハンマー', type: PokemonElementType.water, power: 100, description: '大きな ハサミを 相手に たたきつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'ハサミギロチン', type: PokemonElementType.normal, power: null, description: '大きな ハサミで 相手を 切り裂いて 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'はさむ', type: PokemonElementType.normal, power: 55, description: '相手を 両側から はさんで ダメージを あたえる。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
    ],
  },
  kingler: {
    flavorText: '硬い ハサミは １万馬力の パワーを 持っているが 大きすぎて 動きが 鈍い。',
    stats: { hp: 55, attack: 130, defense: 115, specialAttack: 50, specialDefense: 50, speed: 75 },
    moves: [
      { name: 'クラブハンマー', type: PokemonElementType.water, power: 100, description: '大きな ハサミを 相手に たたきつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'ハサミギロチン', type: PokemonElementType.normal, power: null, description: '大きな ハサミで 相手を 切り裂いて 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'はさむ', type: PokemonElementType.normal, power: 55, description: '相手を 両側から はさんで ダメージを あたえる。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
    ],
  },
  voltorb: {
    flavorText: 'モンスターボールが 売り出されたのと 同じ 時期に 発見された。 なにか 関係があると いわれる。',
    stats: { hp: 40, attack: 30, defense: 50, specialAttack: 55, specialDefense: 55, speed: 100 },
    moves: [
      { name: 'ソニックブーム', type: PokemonElementType.normal, power: null, description: '衝撃波を 相手に ぶつけて 攻撃する。 ２０の ダメージを 決まって 与える。' },
      { name: 'ミラーコート', type: PokemonElementType.psychic, power: null, description: '相手から 受けた 特殊攻撃の ダメージを ２倍に して その相手に 返す。' },
      { name: 'スパーク', type: PokemonElementType.electric, power: 65, description: '電気を まとい 相手に 突進して 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
    ],
  },
  electrode: {
    flavorText: '少しの 刺激に 反応して 爆発する。バクダンボールという あだ名で 怖がられている。',
    stats: { hp: 60, attack: 50, defense: 70, specialAttack: 80, specialDefense: 80, speed: 150 },
    moves: [
      { name: 'ソニックブーム', type: PokemonElementType.normal, power: null, description: '衝撃波を 相手に ぶつけて 攻撃する。 ２０の ダメージを 決まって 与える。' },
      { name: 'ミラーコート', type: PokemonElementType.psychic, power: null, description: '相手から 受けた 特殊攻撃の ダメージを ２倍に して その相手に 返す。' },
      { name: 'スパーク', type: PokemonElementType.electric, power: 65, description: '電気を まとい 相手に 突進して 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
    ],
  },
  exeggcute: {
    flavorText: 'テレパシーで 会話をしているため タマタマを 引き離そうとしても すぐに 集まって ６匹になる。',
    stats: { hp: 60, attack: 40, defense: 80, specialAttack: 60, specialDefense: 45, speed: 40 },
    moves: [
      { name: 'たまなげ', type: PokemonElementType.normal, power: 15, description: 'まるい ものを 相手に 投げつけて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'ねむりごな', type: PokemonElementType.grass, power: null, description: '眠くなる 粉を たくさん ふりまいて 相手を 眠り状態に する。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
      { name: 'しびれごな', type: PokemonElementType.grass, power: null, description: 'しびれる 粉を たくさん ふりまいて 相手を まひ状態に する。' },
    ],
  },
  exeggutor: {
    flavorText: '３つの 頭は 考えることは 別々でも 仲良しなので ケンカしたり しないらしい。',
    stats: { hp: 95, attack: 95, defense: 85, specialAttack: 125, specialDefense: 75, speed: 55 },
    moves: [
      { name: 'たまなげ', type: PokemonElementType.normal, power: 15, description: 'まるい ものを 相手に 投げつけて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'タマゴばくだん', type: PokemonElementType.normal, power: 100, description: '大きな タマゴを 力いっぱい 相手に 投げつけて 攻撃する。' },
      { name: 'ふみつけ', type: PokemonElementType.normal, power: 65, description: '大きな 足で 相手を 踏みつけて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
    ],
  },
  cubone: {
    flavorText: '死に別れた 母親の 骨を 頭に 覆っている。寂しいとき 大声で 泣くという。',
    stats: { hp: 50, attack: 50, defense: 95, specialAttack: 40, specialDefense: 50, speed: 35 },
    moves: [
      { name: 'ホネブーメラン', type: PokemonElementType.ground, power: 50, description: '手に 持った ホネを 相手に 投げつけ 行きと 帰りの ２回連続で ダメージを 与える。' },
      { name: 'ホネこんぼう', type: PokemonElementType.ground, power: 65, description: '手に 持った ホネで 相手を なぐりつけて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'ボーンラッシュ', type: PokemonElementType.ground, power: 25, description: '硬い ホネで 相手を なぐりつけて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'あばれる', type: PokemonElementType.normal, power: 120, description: '２ー３ターンの あいだ 暴れまくって 相手を 攻撃する。 暴れたあとは 混乱する。' },
    ],
  },
  marowak: {
    flavorText: '体も 小さく もともと 弱かった。 骨を 使うようになり 性格が 凶暴化した。',
    stats: { hp: 60, attack: 80, defense: 110, specialAttack: 50, specialDefense: 80, speed: 45 },
    moves: [
      { name: 'ホネブーメラン', type: PokemonElementType.ground, power: 50, description: '手に 持った ホネを 相手に 投げつけ 行きと 帰りの ２回連続で ダメージを 与える。' },
      { name: 'ホネこんぼう', type: PokemonElementType.ground, power: 65, description: '手に 持った ホネで 相手を なぐりつけて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'ボーンラッシュ', type: PokemonElementType.ground, power: 25, description: '硬い ホネで 相手を なぐりつけて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'あばれる', type: PokemonElementType.normal, power: 120, description: '２ー３ターンの あいだ 暴れまくって 相手を 攻撃する。 暴れたあとは 混乱する。' },
    ],
  },
  hitmonlee: {
    flavorText: '脚が 自由に 伸び縮みして 遠く 離れている 場合でも 相手を 蹴り上げることができる。',
    stats: { hp: 50, attack: 120, defense: 53, specialAttack: 35, specialDefense: 110, speed: 87 },
    moves: [
      { name: 'まわしげり', type: PokemonElementType.fighting, power: 60, description: '体を 素早く 回転させながら けとばして 攻撃する。 相手を ひるませる ことが ある。' },
      { name: 'とびげり', type: PokemonElementType.fighting, power: 100, description: '高い ジャンプからの キックで 相手を 攻撃する。 はずすと 自分が ダメージを 受ける。' },
      { name: 'ヨガのポーズ', type: PokemonElementType.psychic, power: null, description: '眠っている 力を 体の 奥から ひきだして 自分の 攻撃を あげる。' },
      { name: 'こころのめ', type: PokemonElementType.normal, power: null, description: '相手の 動きを 心で 感じて 次の 攻撃が 必ず 相手に 当たるように する。' },
    ],
  },
  hitmonchan: {
    flavorText: '腕を ねじりながら 繰り出す パンチは コンクリートも 粉砕。 ３分 戦うと ひとやすみする。',
    stats: { hp: 50, attack: 105, defense: 79, specialAttack: 35, specialDefense: 110, speed: 76 },
    moves: [
      { name: 'れんぞくパンチ', type: PokemonElementType.normal, power: 18, description: 'どとうの パンチで 相手を なぐりつけて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'スカイアッパー', type: PokemonElementType.fighting, power: 85, description: '空に むかうような 高い アッパーで 相手を 突きあげて 攻撃する。' },
      { name: 'マッハパンチ', type: PokemonElementType.fighting, power: 40, description: '目にも 留まらぬ ものすごい 速さで パンチを くりだす。 必ず 先制攻撃 できる。' },
      { name: 'おいうち', type: PokemonElementType.dark, power: 40, description: '相手 ポケモンが 入れ替わるときに 技を だしていると 倍の 威力で 攻撃できる。' },
    ],
  },
  lickitung: {
    flavorText: '長い 舌は ねばねばした だえきで べっとり。どんなものでも くっついて とても 便利。',
    stats: { hp: 90, attack: 55, defense: 75, specialAttack: 60, specialDefense: 75, speed: 30 },
    moves: [
      { name: 'まきつく', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを つかって ４ー５ターンの あいだ 相手に まきついて 攻撃する。' },
      { name: 'したでなめる', type: PokemonElementType.ghost, power: 30, description: '長い 舌で 相手を なめまわして 攻撃する。 まひ状態に することが ある。' },
      { name: 'リフレッシュ', type: PokemonElementType.normal, power: null, description: '体を やすめて 自分が おっている 毒 まひ やけどの 状態異常を 治す。' },
      { name: 'ふみつけ', type: PokemonElementType.normal, power: 65, description: '大きな 足で 相手を 踏みつけて 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  koffing: {
    flavorText: '薄い バルーン状の 体に 猛毒の ガスが つまっている。 近くに 来ると くさい。',
    stats: { hp: 40, attack: 65, defense: 95, specialAttack: 60, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'ヘドロこうげき', type: PokemonElementType.poison, power: 65, description: '汚い ヘドロを 相手に 投げつけて 攻撃する。 毒状態に することが ある。' },
      { name: 'どくガス', type: PokemonElementType.poison, power: null, description: '毒ガスを 相手の 顔に 吹きかけて 毒の 状態に する。' },
      { name: 'スモッグ', type: PokemonElementType.poison, power: 30, description: '汚れた ガスを 相手に 吹きつけて 攻撃する。 毒状態に することが ある。' },
      { name: 'えんまく', type: PokemonElementType.normal, power: null, description: '煙や 墨などを 吹きかけて 相手の 命中率を さげる。' },
    ],
  },
  weezing: {
    flavorText: 'どちらかが ふくらむと 片方は しぼむ 双子の ドガース。いつも 体内の 毒ガスを 混ぜている。',
    stats: { hp: 65, attack: 90, defense: 120, specialAttack: 85, specialDefense: 70, speed: 60 },
    moves: [
      { name: 'ヘドロこうげき', type: PokemonElementType.poison, power: 65, description: '汚い ヘドロを 相手に 投げつけて 攻撃する。 毒状態に することが ある。' },
      { name: 'どくガス', type: PokemonElementType.poison, power: null, description: '毒ガスを 相手の 顔に 吹きかけて 毒の 状態に する。' },
      { name: 'スモッグ', type: PokemonElementType.poison, power: 30, description: '汚れた ガスを 相手に 吹きつけて 攻撃する。 毒状態に することが ある。' },
      { name: 'えんまく', type: PokemonElementType.normal, power: null, description: '煙や 墨などを 吹きかけて 相手の 命中率を さげる。' },
    ],
  },
  rhyhorn: {
    flavorText: '頭は 悪いが 力が 強く 高層ビルも 体当たりで コナゴナに 粉砕する。',
    stats: { hp: 80, attack: 85, defense: 95, specialAttack: 30, specialDefense: 30, speed: 25 },
    moves: [
      { name: 'つのでつく', type: PokemonElementType.normal, power: 65, description: '鋭く とがった つので 相手を 攻撃する。' },
      { name: 'つのドリル', type: PokemonElementType.normal, power: null, description: '回転する つのを 相手に 突き刺して 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'メガホーン', type: PokemonElementType.bug, power: 120, description: '硬くて りっぱな つので おもいっきり 相手を 突き刺して 攻撃する。' },
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  rhydon: {
    flavorText: '全身を よろいのような 皮膚で 守っている。２０００度の マグマの 中でも 生きられる。',
    stats: { hp: 105, attack: 130, defense: 120, specialAttack: 45, specialDefense: 45, speed: 40 },
    moves: [
      { name: 'つのでつく', type: PokemonElementType.normal, power: 65, description: '鋭く とがった つので 相手を 攻撃する。' },
      { name: 'つのドリル', type: PokemonElementType.normal, power: null, description: '回転する つのを 相手に 突き刺して 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'メガホーン', type: PokemonElementType.bug, power: 120, description: '硬くて りっぱな つので おもいっきり 相手を 突き刺して 攻撃する。' },
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  chansey: {
    flavorText: '幸せを 運ぶと いわれている。 傷ついた 人に タマゴを 分けてあげる 優しい ポケモン。',
    stats: { hp: 250, attack: 5, defense: 5, specialAttack: 35, specialDefense: 105, speed: 50 },
    moves: [
      { name: 'タマゴばくだん', type: PokemonElementType.normal, power: 100, description: '大きな タマゴを 力いっぱい 相手に 投げつけて 攻撃する。' },
      { name: 'タマゴうみ', type: PokemonElementType.normal, power: null, description: '最大ＨＰの 半分 自分の ＨＰを 回復する。 仲間に ＨＰを わけることも できる。' },
      { name: 'ちいさくなる', type: PokemonElementType.normal, power: null, description: '体を ちぢめて 小さく みせて 自分の 回避率を ぐーんと あげる。' },
      { name: 'うたう', type: PokemonElementType.normal, power: null, description: '心地好い きれいな 歌声を 聞かせて 相手を 眠り状態に する。' },
    ],
  },
  tangela: {
    flavorText: 'たくさんの うごめく ツルに 覆われて 正体不明。 青いツルは 一生 伸びる。',
    stats: { hp: 65, attack: 55, defense: 115, specialAttack: 100, specialDefense: 40, speed: 60 },
    moves: [
      { name: 'からみつく', type: PokemonElementType.normal, power: 10, description: '触手や ツタなどを からみつけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'つるのムチ', type: PokemonElementType.grass, power: 45, description: 'ムチのように しなる 細長い つるで 相手を たたきつけて 攻撃する。' },
      { name: 'ねむりごな', type: PokemonElementType.grass, power: null, description: '眠くなる 粉を たくさん ふりまいて 相手を 眠り状態に する。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
    ],
  },
  kangaskhan: {
    flavorText: 'お腹の 袋で 子育てをする。 安全な ときだけ 子供を 袋から 出して 遊ばせる。',
    stats: { hp: 105, attack: 95, defense: 80, specialAttack: 40, specialDefense: 80, speed: 90 },
    moves: [
      { name: 'れんぞくパンチ', type: PokemonElementType.normal, power: 18, description: 'どとうの パンチで 相手を なぐりつけて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'ピヨピヨパンチ', type: PokemonElementType.normal, power: 70, description: 'リズミカルに パンチを くりだして 相手を 攻撃する。 混乱させることが ある。' },
      { name: 'ねこだまし', type: PokemonElementType.normal, power: 40, description: '先制攻撃で 相手を ひるませる。 戦闘に でたら すぐに ださないと 成功しない。' },
      { name: 'しっぽをふる', type: PokemonElementType.normal, power: null, description: 'しっぽを 左右に かわいく ふって 油断を 誘う。 相手の 防御を さげる。' },
    ],
  },
  horsea: {
    flavorText: '水面から 勢いよく 墨を 発射して 飛んでいる 虫を 撃ち落とすことがあるという。',
    stats: { hp: 30, attack: 40, defense: 70, specialAttack: 70, specialDefense: 25, speed: 60 },
    moves: [
      { name: 'えんまく', type: PokemonElementType.normal, power: null, description: '煙や 墨などを 吹きかけて 相手の 命中率を さげる。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'りゅうのまい', type: PokemonElementType.dragon, power: null, description: '神秘的で 力強い 舞を 激しく おどる。自分の 攻撃と 素早さを あげる。' },
      { name: 'たつまき', type: PokemonElementType.dragon, power: 40, description: '竜巻を おこして 相手を まきこみ 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  seadra: {
    flavorText: 'うかつに 触ろうとすると 体中に 生える トゲに 刺されて 気絶することもある。',
    stats: { hp: 55, attack: 65, defense: 95, specialAttack: 95, specialDefense: 45, speed: 85 },
    moves: [
      { name: 'えんまく', type: PokemonElementType.normal, power: null, description: '煙や 墨などを 吹きかけて 相手の 命中率を さげる。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'りゅうのまい', type: PokemonElementType.dragon, power: null, description: '神秘的で 力強い 舞を 激しく おどる。自分の 攻撃と 素早さを あげる。' },
      { name: 'たつまき', type: PokemonElementType.dragon, power: 40, description: '竜巻を おこして 相手を まきこみ 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  goldeen: {
    flavorText: '５ノットの スピードで 泳ぐ。 身の 危険を 感じると 鋭い ツノで 反撃する。',
    stats: { hp: 45, attack: 67, defense: 60, specialAttack: 35, specialDefense: 50, speed: 63 },
    moves: [
      { name: 'つのでつく', type: PokemonElementType.normal, power: 65, description: '鋭く とがった つので 相手を 攻撃する。' },
      { name: 'つのドリル', type: PokemonElementType.normal, power: null, description: '回転する つのを 相手に 突き刺して 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'メガホーン', type: PokemonElementType.bug, power: 120, description: '硬くて りっぱな つので おもいっきり 相手を 突き刺して 攻撃する。' },
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
    ],
  },
  seaking: {
    flavorText: '秋が くると 産卵のために 流れに 逆らって 力強く 川を 泳ぐ 姿が みられる。',
    stats: { hp: 80, attack: 92, defense: 65, specialAttack: 65, specialDefense: 80, speed: 68 },
    moves: [
      { name: 'つのでつく', type: PokemonElementType.normal, power: 65, description: '鋭く とがった つので 相手を 攻撃する。' },
      { name: 'つのドリル', type: PokemonElementType.normal, power: null, description: '回転する つのを 相手に 突き刺して 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'メガホーン', type: PokemonElementType.bug, power: 120, description: '硬くて りっぱな つので おもいっきり 相手を 突き刺して 攻撃する。' },
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
    ],
  },
  staryu: {
    flavorText: '体の 中心で 光る コアが ある限り 体が ちぎれても 再生できる。',
    stats: { hp: 30, attack: 45, defense: 55, specialAttack: 70, specialDefense: 55, speed: 85 },
    moves: [
      { name: 'ほごしょく', type: PokemonElementType.normal, power: null, description: '水辺や 草むら どうくつなど いる 場所に あわせて 自分の タイプを 変える。' },
      { name: 'ちいさくなる', type: PokemonElementType.normal, power: null, description: '体を ちぢめて 小さく みせて 自分の 回避率を ぐーんと あげる。' },
      { name: 'コスモパワー', type: PokemonElementType.psychic, power: null, description: '宇宙から 神秘の 力を とりこむ ことで 自分の 防御と 特防を あげる。' },
      { name: 'こうそくスピン', type: PokemonElementType.normal, power: 50, description: '回転して 相手を 攻撃する。 しめつける まきつく やどりぎのタネ まきびし なども 吹きとばせる。' },
    ],
  },
  starmie: {
    flavorText: '真ん中の コアと呼ばれる 部分は 七色に 輝く。これを 宝石にする 人も いるという。',
    stats: { hp: 60, attack: 75, defense: 85, specialAttack: 100, specialDefense: 85, speed: 115 },
    moves: [
      { name: 'こうそくスピン', type: PokemonElementType.normal, power: 50, description: '回転して 相手を 攻撃する。 しめつける まきつく やどりぎのタネ まきびし なども 吹きとばせる。' },
      { name: 'じこさいせい', type: PokemonElementType.normal, power: null, description: '細胞を 再生させて 自分の 最大ＨＰの 半分の ＨＰを 回復する。' },
      { name: 'みずでっぽう', type: PokemonElementType.water, power: 40, description: '水を 勢いよく 相手に 発射して 攻撃する。' },
      { name: 'あやしいひかり', type: PokemonElementType.ghost, power: null, description: '怪しい 光を 相手に みせて まどわせる。 相手を 混乱させる。' },
    ],
  },
  scyther: {
    flavorText: '鋭い カマで 獲物を 切り裂き 息の根を 止める。ごくまれに 羽を 使って 飛ぶ。',
    stats: { hp: 70, attack: 110, defense: 80, specialAttack: 55, specialDefense: 80, speed: 105 },
    moves: [
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'おいうち', type: PokemonElementType.dark, power: 40, description: '相手 ポケモンが 入れ替わるときに 技を だしていると 倍の 威力で 攻撃できる。' },
      { name: 'みねうち', type: PokemonElementType.normal, power: 40, description: '相手の ＨＰが 必ず １だけ 残るように 手加減して 攻撃する。' },
      { name: 'きりさく', type: PokemonElementType.normal, power: 70, description: 'ツメや カマなどで 相手を 切り裂いて 攻撃する。 急所に 当たりやすい。' },
    ],
  },
  mrmime: {
    flavorText: '指先から 出す 波動が 空気を 固めて 壁を 作る。 激しい 攻撃も 跳ね返す。',
    stats: { hp: 40, attack: 45, defense: 65, specialAttack: 100, specialDefense: 120, speed: 90 },
    moves: [
      { name: 'ヨガのポーズ', type: PokemonElementType.psychic, power: null, description: '眠っている 力を 体の 奥から ひきだして 自分の 攻撃を あげる。' },
      { name: 'バリアー', type: PokemonElementType.psychic, power: null, description: '頑丈な 壁を つくって 自分の 防御を ぐーんと あげる。' },
      { name: 'おうふくビンタ', type: PokemonElementType.normal, power: 15, description: 'おうふく ビンタで 相手を たたいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'ねんりき', type: PokemonElementType.psychic, power: 50, description: '弱い 念力を 相手に 送って 攻撃する。 相手を 混乱させることが ある。' },
    ],
  },
  electabuzz: {
    flavorText: '体の 表面には 電気が 流れている。あたりが 暗いと 全身が 青白く 光るのだ。',
    stats: { hp: 65, attack: 83, defense: 57, specialAttack: 95, specialDefense: 85, speed: 105 },
    moves: [
      { name: 'でんこうせっか', type: PokemonElementType.normal, power: 40, description: '目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。' },
      { name: 'いやなおと', type: PokemonElementType.normal, power: null, description: 'おもわず 耳を ふさぎたくなる いやなおとを だして 相手の 防御を がくっと さげる。' },
      { name: 'かみなりパンチ', type: PokemonElementType.electric, power: 75, description: '電撃を こめた パンチで 相手を 攻撃する。 まひ状態に することが ある。' },
      { name: 'にらみつける', type: PokemonElementType.normal, power: null, description: '鋭い 目つきで おびえさせて 相手の 防御を さげる。' },
    ],
  },
  jynx: {
    flavorText: '腰を 振るように 歩いている。 油断をすると 思わず 釣られて 踊ってしまうという。',
    stats: { hp: 65, attack: 50, defense: 35, specialAttack: 115, specialDefense: 95, speed: 95 },
    moves: [
      { name: 'あくまのキッス', type: PokemonElementType.normal, power: null, description: '恐ろしい 顔で キスを せまる。 相手を 眠り状態に する。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
      { name: 'おうふくビンタ', type: PokemonElementType.normal, power: 15, description: 'おうふく ビンタで 相手を たたいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'こなゆき', type: PokemonElementType.ice, power: 40, description: '冷たい 粉雪を 相手に 吹きつけて 攻撃する。 こおり状態に することが ある。' },
    ],
  },
  pinsir: {
    flavorText: '２本の ツノで 獲物を 挟んで ちぎれるまで 放さない。ちぎれない ときは かなたまで 投げ飛ばすのだ。',
    stats: { hp: 65, attack: 125, defense: 100, specialAttack: 55, specialDefense: 70, speed: 85 },
    moves: [
      { name: 'ハサミギロチン', type: PokemonElementType.normal, power: null, description: '大きな ハサミで 相手を 切り裂いて 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'はさむ', type: PokemonElementType.normal, power: 55, description: '相手を 両側から はさんで ダメージを あたえる。' },
      { name: 'じごくぐるま', type: PokemonElementType.fighting, power: 80, description: '地面に 自分ごと 相手を 投げつけて 攻撃する。 自分も 少し ダメージを 受ける。' },
      { name: 'しめつける', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを 使い ４ー５ターンの あいだ 相手を 締めつけて 攻撃する。' },
    ],
  },
  magmar: {
    flavorText: '火山の 火口近くで 見つかった。 口から 炎を 吐く。 体温は １２００度もある。',
    stats: { hp: 65, attack: 95, defense: 57, specialAttack: 100, specialDefense: 85, speed: 93 },
    moves: [
      { name: 'スモッグ', type: PokemonElementType.poison, power: 30, description: '汚れた ガスを 相手に 吹きつけて 攻撃する。 毒状態に することが ある。' },
      { name: 'えんまく', type: PokemonElementType.normal, power: null, description: '煙や 墨などを 吹きかけて 相手の 命中率を さげる。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'ほのおのパンチ', type: PokemonElementType.fire, power: 75, description: '炎を こめた パンチで 相手を 攻撃する。 やけど状態に することが ある。' },
    ],
  },
  tauros: {
    flavorText: '３本の 尻尾で 自分を たたき 戦う 気持ちを 高めると 全速力で 突っこんでくる。',
    stats: { hp: 75, attack: 100, defense: 95, specialAttack: 40, specialDefense: 70, speed: 110 },
    moves: [
      { name: 'つのでつく', type: PokemonElementType.normal, power: 65, description: '鋭く とがった つので 相手を 攻撃する。' },
      { name: 'おいうち', type: PokemonElementType.dark, power: 40, description: '相手 ポケモンが 入れ替わるときに 技を だしていると 倍の 威力で 攻撃できる。' },
      { name: 'あばれる', type: PokemonElementType.normal, power: 120, description: '２ー３ターンの あいだ 暴れまくって 相手を 攻撃する。 暴れたあとは 混乱する。' },
      { name: 'しっぽをふる', type: PokemonElementType.normal, power: null, description: 'しっぽを 左右に かわいく ふって 油断を 誘う。 相手の 防御を さげる。' },
    ],
  },
  magikarp: {
    flavorText: '力も スピードも ほとんど ダメ。 世界で 一番 弱くて 情けない ポケモンだ。',
    stats: { hp: 20, attack: 10, defense: 55, specialAttack: 15, specialDefense: 20, speed: 80 },
    moves: [
      { name: 'はねる', type: PokemonElementType.normal, power: null, description: '攻撃もせずに ピョン ピョンと 跳ねるだけで なにも おこらない……。' },
      { name: 'じたばた', type: PokemonElementType.normal, power: null, description: 'じたばた 暴れて 攻撃する。 自分の ＨＰが 少ないほど 技の 威力は あがる。' },
      { name: 'たいあたり', type: PokemonElementType.normal, power: 40, description: '相手に むかって 全身で ぶつかっていき 攻撃する。' },
    ],
  },
  gyarados: {
    flavorText: '争いの 起こった 村を 焼きつくしたという 記録が 古文書に 残されている。',
    stats: { hp: 95, attack: 125, defense: 79, specialAttack: 60, specialDefense: 100, speed: 81 },
    moves: [
      { name: 'りゅうのいかり', type: PokemonElementType.dragon, power: null, description: '怒りの 衝撃波を 相手に ぶつけて 攻撃する。 ４０の ダメージを 決まって 与える。' },
      { name: 'りゅうのまい', type: PokemonElementType.dragon, power: null, description: '神秘的で 力強い 舞を 激しく おどる。自分の 攻撃と 素早さを あげる。' },
      { name: 'たつまき', type: PokemonElementType.dragon, power: 40, description: '竜巻を おこして 相手を まきこみ 攻撃する。 相手を ひるませることが ある。' },
      { name: 'あばれる', type: PokemonElementType.normal, power: 120, description: '２ー３ターンの あいだ 暴れまくって 相手を 攻撃する。 暴れたあとは 混乱する。' },
    ],
  },
  lapras: {
    flavorText: '優しい 心の 持ち主。 めったに 争わないため たくさん 捕まえられ 数が 減った。',
    stats: { hp: 130, attack: 85, defense: 80, specialAttack: 85, specialDefense: 95, speed: 60 },
    moves: [
      { name: 'ぜったいれいど', type: PokemonElementType.ice, power: null, description: '絶対零度の 冷たさで 相手を 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
      { name: 'うたう', type: PokemonElementType.normal, power: null, description: '心地好い きれいな 歌声を 聞かせて 相手を 眠り状態に する。' },
      { name: 'しろいきり', type: PokemonElementType.ice, power: null, description: '白い霧で 体を おおう。 ５ターンの あいだ 相手に 能力を さげられなく なる。' },
    ],
  },
  eevee: {
    flavorText: '進化のとき 姿と 能力が 変わることで きびしい 環境に 対応する 珍しい ポケモン。',
    stats: { hp: 55, attack: 55, defense: 50, specialAttack: 45, specialDefense: 65, speed: 55 },
    moves: [
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
      { name: 'しっぽをふる', type: PokemonElementType.normal, power: null, description: 'しっぽを 左右に かわいく ふって 油断を 誘う。 相手の 防御を さげる。' },
      { name: 'でんこうせっか', type: PokemonElementType.normal, power: 40, description: '目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。' },
      { name: 'バトンタッチ', type: PokemonElementType.normal, power: null, description: '控えの ポケモンと 入れ替わる。 能力変化は 替わった ポケモンが そのまま 受けつぐ。' },
    ],
  },
  ditto: {
    flavorText: '全身の 細胞を 組み替えて 見たものの 形 そっくりに 変身する 能力を 持つ。',
    stats: { hp: 48, attack: 48, defense: 48, specialAttack: 48, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'へんしん', type: PokemonElementType.normal, power: null, description: '相手の ポケモンに 変身することで 相手と まったく 同じ 技が 使える。' },
    ],
  },
  vaporeon: {
    flavorText: 'きれいな 水辺を 好んでいる。 細胞が 水の 分子に 似ており 水に 溶けることもできる。',
    stats: { hp: 130, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 65 },
    moves: [
      { name: 'オーロラビーム', type: PokemonElementType.ice, power: 65, description: 'にじいろの ビームを 相手に 発射して 攻撃する。 攻撃を さげる ことが ある。' },
      { name: 'とける', type: PokemonElementType.poison, power: null, description: '細胞の 変化で 液状に なり 自分の 防御を ぐーんと あげる。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
      { name: 'くろいきり', type: PokemonElementType.ice, power: null, description: '黒い霧を だして 戦闘に でている ポケモン 全員の 能力変化を もとに もどす。' },
    ],
  },
  jolteon: {
    flavorText: '体内に 電気が たまると 全身の 体毛が 全部 鋭く とがりはじめる。',
    stats: { hp: 65, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 130 },
    moves: [
      { name: 'ミサイルばり', type: PokemonElementType.bug, power: 25, description: '鋭い ハリを 相手に 発射して 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'にどげり', type: PokemonElementType.fighting, power: 30, description: '２本の 足で 相手を けとばして 攻撃する。２回連続で ダメージを 与える。' },
      { name: 'でんきショック', type: PokemonElementType.electric, power: 40, description: '電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
    ],
  },
  flareon: {
    flavorText: '体内に 炎袋を 持つ。 戦いが はじまる 直前には 体温が ９００度まで 上がる。',
    stats: { hp: 65, attack: 130, defense: 60, specialAttack: 95, specialDefense: 110, speed: 65 },
    moves: [
      { name: 'スモッグ', type: PokemonElementType.poison, power: 30, description: '汚れた ガスを 相手に 吹きつけて 攻撃する。 毒状態に することが ある。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'ほのおのうず', type: PokemonElementType.fire, power: 35, description: '激しく 渦をまく 炎の中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
    ],
  },
  porygon: {
    flavorText: '研究の末 生み出された 人工の ポケモン。基本的な 動作しか プログラムされていない。',
    stats: { hp: 65, attack: 60, defense: 70, specialAttack: 85, specialDefense: 75, speed: 40 },
    moves: [
      { name: 'テクスチャー', type: PokemonElementType.normal, power: null, description: '自分の タイプを おぼえている 技で 一番 上の 技と 同じ タイプに する。' },
      { name: 'テクスチャー２', type: PokemonElementType.normal, power: null, description: '相手が 最後に 使った技に 抵抗できる ように 自分の タイプを 変化させる。' },
      { name: 'かくばる', type: PokemonElementType.normal, power: null, description: '体の かどを 増やして カクカクに なることで 自分の 攻撃を あげる。' },
      { name: 'ロックオン', type: PokemonElementType.normal, power: null, description: '照準を しっかり あわせて 次の 攻撃が 必ず 相手に 当たるように する。' },
    ],
  },
  omanyte: {
    flavorText: '大昔 海に 住んでいた 古代ポケモン。１０本の 脚を くねらせて 泳ぐ。',
    stats: { hp: 35, attack: 40, defense: 100, specialAttack: 90, specialDefense: 55, speed: 35 },
    moves: [
      { name: 'からみつく', type: PokemonElementType.normal, power: 10, description: '触手や ツタなどを からみつけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'からにこもる', type: PokemonElementType.water, power: null, description: '殻に 潜りこんで 身を守り 自分の 防御を あげる。' },
      { name: 'くすぐる', type: PokemonElementType.normal, power: null, description: '体を くすぐり 笑わせる ことで 相手の 攻撃と 防御を さげる。' },
      { name: 'みずでっぽう', type: PokemonElementType.water, power: 40, description: '水を 勢いよく 相手に 発射して 攻撃する。' },
    ],
  },
  omastar: {
    flavorText: '触手が 手足のように 発達している。しがみつくと 同時に かみついてくる。',
    stats: { hp: 70, attack: 60, defense: 125, specialAttack: 115, specialDefense: 70, speed: 55 },
    moves: [
      { name: 'とげキャノン', type: PokemonElementType.normal, power: 20, description: '鋭い ハリを 相手に 発射して 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'からみつく', type: PokemonElementType.normal, power: 10, description: '触手や ツタなどを からみつけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'からにこもる', type: PokemonElementType.water, power: null, description: '殻に 潜りこんで 身を守り 自分の 防御を あげる。' },
      { name: 'くすぐる', type: PokemonElementType.normal, power: null, description: '体を くすぐり 笑わせる ことで 相手の 攻撃と 防御を さげる。' },
    ],
  },
  kabuto: {
    flavorText: '３億年前の 砂浜で 暮らしていたと 考えられている。 硬い 殻が 身を 守る。',
    stats: { hp: 30, attack: 80, defense: 90, specialAttack: 55, specialDefense: 45, speed: 55 },
    moves: [
      { name: 'きんぞくおん', type: PokemonElementType.steel, power: null, description: '金属を こすって でるような いやな 音を 聞かせる。 相手の 特防を がくっと さげる。' },
      { name: 'すいとる', type: PokemonElementType.grass, power: 20, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'メガドレイン', type: PokemonElementType.grass, power: 40, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
    ],
  },
  kabutops: {
    flavorText: '獲物を 切り裂き 体液を すする。 残った 体は ほかのポケモンの エサになる。',
    stats: { hp: 60, attack: 115, defense: 105, specialAttack: 65, specialDefense: 70, speed: 80 },
    moves: [
      { name: 'きんぞくおん', type: PokemonElementType.steel, power: null, description: '金属を こすって でるような いやな 音を 聞かせる。 相手の 特防を がくっと さげる。' },
      { name: 'すいとる', type: PokemonElementType.grass, power: 20, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'メガドレイン', type: PokemonElementType.grass, power: 40, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
    ],
  },
  aerodactyl: {
    flavorText: 'こはくに 残された 恐竜の 遺伝子から 復活させた。 高い 声で 鳴きながら 飛ぶ。',
    stats: { hp: 80, attack: 105, defense: 65, specialAttack: 60, specialDefense: 75, speed: 130 },
    moves: [
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'ちょうおんぱ', type: PokemonElementType.normal, power: null, description: '特殊な 音波を 体から 発して 相手を 混乱させる。' },
      { name: 'げんしのちから', type: PokemonElementType.rock, power: 60, description: '原始の 力で 攻撃する。 自分の すべての 能力が あがることが ある。' },
      { name: 'かみつく', type: PokemonElementType.dark, power: 60, description: '鋭く とがった 歯で かみついて 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  articuno: {
    flavorText: '伝説の とりポケモン。 空気中の 水分を 凍らせ 吹雪を 作り出すことが できる。',
    stats: { hp: 90, attack: 85, defense: 100, specialAttack: 95, specialDefense: 125, speed: 85 },
    moves: [
      { name: 'こころのめ', type: PokemonElementType.normal, power: null, description: '相手の 動きを 心で 感じて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'ぜったいれいど', type: PokemonElementType.ice, power: null, description: '絶対零度の 冷たさで 相手を 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'こなゆき', type: PokemonElementType.ice, power: 40, description: '冷たい 粉雪を 相手に 吹きつけて 攻撃する。 こおり状態に することが ある。' },
      { name: 'かぜおこし', type: PokemonElementType.flying, power: 40, description: '翼で おこした 激しい 風を 相手に ぶつけて 攻撃する。' },
    ],
  },
  zapdos: {
    flavorText: '雲の 上から 巨大な 稲妻を 落としながら 現れる 伝説の とりポケモンである。',
    stats: { hp: 90, attack: 90, defense: 85, specialAttack: 125, specialDefense: 90, speed: 100 },
    moves: [
      { name: 'ドリルくちばし', type: PokemonElementType.flying, power: 80, description: '回転しながら とがった くちばしを 相手に 突き刺して 攻撃する。' },
      { name: 'つつく', type: PokemonElementType.flying, power: 35, description: '鋭く とがった くちばしや つので 相手を 突いて 攻撃する。' },
      { name: 'でんきショック', type: PokemonElementType.electric, power: 40, description: '電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
    ],
  },
  snorlax: {
    flavorText: '１日に 食べ物を ４００キロ 食べないと 気がすまない。 食べ終わると 眠ってしまう。',
    stats: { hp: 160, attack: 110, defense: 65, specialAttack: 65, specialDefense: 110, speed: 30 },
    moves: [
      { name: 'はらだいこ', type: PokemonElementType.normal, power: null, description: '自分の ＨＰを 最大ＨＰの 半分 減らして 自分の 攻撃を 最大に あげる。' },
      { name: 'あくび', type: PokemonElementType.normal, power: null, description: '大きな あくびで 眠気を 誘う。 次の ターンに 相手を 眠り状態に する。' },
      { name: 'とおせんぼう', type: PokemonElementType.normal, power: null, description: '両手を ひろげて たちはだかり 相手の 逃げ道を ふさいで 逃げられなくする。' },
      { name: 'ドわすれ', type: PokemonElementType.psychic, power: null, description: '頭を からにして 一瞬 なにかを 忘れることで 自分の 特防を ぐーんと あげる。' },
    ],
  },
  moltres: {
    flavorText: '昔から 火の鳥伝説として 知られる。羽ばたくたびに 羽が 明るく 燃え上がり 美しい。',
    stats: { hp: 90, attack: 100, defense: 90, specialAttack: 125, specialDefense: 85, speed: 90 },
    moves: [
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'ゴッドバード', type: PokemonElementType.flying, power: 140, description: '２ターン目に 相手を 攻撃する。 たまに ひるませる。 急所にも 当たりやすい。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'ほのおのうず', type: PokemonElementType.fire, power: 35, description: '激しく 渦をまく 炎の中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
    ],
  },
  dratini: {
    flavorText: '目撃者が 少ないために 幻のポケモンと 呼ばれていた。 脱皮した 皮が 見つかっている。',
    stats: { hp: 41, attack: 64, defense: 45, specialAttack: 50, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'りゅうのいかり', type: PokemonElementType.dragon, power: null, description: '怒りの 衝撃波を 相手に ぶつけて 攻撃する。 ４０の ダメージを 決まって 与える。' },
      { name: 'まきつく', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを つかって ４ー５ターンの あいだ 相手に まきついて 攻撃する。' },
      { name: 'たつまき', type: PokemonElementType.dragon, power: 40, description: '竜巻を おこして 相手を まきこみ 攻撃する。 相手を ひるませることが ある。' },
      { name: 'たたきつける', type: PokemonElementType.normal, power: 80, description: '長い しっぽや つるなどを 使い 相手を たたきつけて 攻撃する。' },
    ],
  },
  dragonair: {
    flavorText: '水晶のような 玉には 天候を 自由に 操る 能力が 秘められているらしい。',
    stats: { hp: 61, attack: 84, defense: 65, specialAttack: 70, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'りゅうのいかり', type: PokemonElementType.dragon, power: null, description: '怒りの 衝撃波を 相手に ぶつけて 攻撃する。 ４０の ダメージを 決まって 与える。' },
      { name: 'まきつく', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを つかって ４ー５ターンの あいだ 相手に まきついて 攻撃する。' },
      { name: 'たつまき', type: PokemonElementType.dragon, power: 40, description: '竜巻を おこして 相手を まきこみ 攻撃する。 相手を ひるませることが ある。' },
      { name: 'たたきつける', type: PokemonElementType.normal, power: 80, description: '長い しっぽや つるなどを 使い 相手を たたきつけて 攻撃する。' },
    ],
  },
  dragonite: {
    flavorText: '大きな 体格で 空を 飛ぶ。 地球を 約１６時間で １周してしまう。',
    stats: { hp: 91, attack: 134, defense: 95, specialAttack: 100, specialDefense: 100, speed: 80 },
    moves: [
      { name: 'りゅうのいかり', type: PokemonElementType.dragon, power: null, description: '怒りの 衝撃波を 相手に ぶつけて 攻撃する。 ４０の ダメージを 決まって 与える。' },
      { name: 'まきつく', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを つかって ４ー５ターンの あいだ 相手に まきついて 攻撃する。' },
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'たつまき', type: PokemonElementType.dragon, power: 40, description: '竜巻を おこして 相手を まきこみ 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  mewtwo: {
    flavorText: '１人の 科学者が 何年も 恐ろしい 遺伝子 研究を 続けた 結果 誕生した。',
    stats: { hp: 106, attack: 110, defense: 90, specialAttack: 154, specialDefense: 90, speed: 130 },
    moves: [
      { name: 'バリアー', type: PokemonElementType.psychic, power: null, description: '頑丈な 壁を つくって 自分の 防御を ぐーんと あげる。' },
      { name: 'しろいきり', type: PokemonElementType.ice, power: null, description: '白い霧で 体を おおう。 ５ターンの あいだ 相手に 能力を さげられなく なる。' },
      { name: 'じこさいせい', type: PokemonElementType.normal, power: null, description: '細胞を 再生させて 自分の 最大ＨＰの 半分の ＨＰを 回復する。' },
      { name: 'かなしばり', type: PokemonElementType.normal, power: null, description: '相手の 動きを とめて 直前に だしていた 技を ４ターンの あいだ 使えなくする。' },
    ],
  },
  mew: {
    flavorText: 'あらゆる 技を 使うため ポケモンの 先祖と 考える 学者が たくさん いる。',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'へんしん', type: PokemonElementType.normal, power: null, description: '相手の ポケモンに 変身することで 相手と まったく 同じ 技が 使える。' },
      { name: 'はたく', type: PokemonElementType.normal, power: 40, description: '長い しっぽや 手などを 使って 相手を はたいて 攻撃する。' },
      { name: 'ゆびをふる', type: PokemonElementType.normal, power: null, description: '指をふり 自分の 脳を 刺激して すべての 技の なかから どれか １つを くりだす。' },
      { name: 'げんしのちから', type: PokemonElementType.rock, power: 60, description: '原始の 力で 攻撃する。 自分の すべての 能力が あがることが ある。' },
    ],
  },
  chikorita: {
    flavorText: '頭の 葉っぱから ほのかに 甘い 香りが 漂う。おとなしくて 日差しを 浴びるのが 大好き。',
    stats: { hp: 45, attack: 49, defense: 65, specialAttack: 49, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
      { name: 'アロマセラピー', type: PokemonElementType.grass, power: null, description: '心地好い やすらぐ 香りを かがせて 味方全員の 状態異常を 回復する。' },
      { name: 'はっぱカッター', type: PokemonElementType.grass, power: 55, description: 'はっぱを とばして 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'あまいかおり', type: PokemonElementType.normal, power: null, description: '香りで 相手の 回避率を がくっと さげる。草むら などで 使うと ポケモンが よってくる。' },
    ],
  },
  bayleef: {
    flavorText: '首の まわりから 発散する スパイスのような 香りには 元気を 出させる 効果がある。',
    stats: { hp: 60, attack: 62, defense: 80, specialAttack: 63, specialDefense: 80, speed: 60 },
    moves: [
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
      { name: 'アロマセラピー', type: PokemonElementType.grass, power: null, description: '心地好い やすらぐ 香りを かがせて 味方全員の 状態異常を 回復する。' },
      { name: 'はっぱカッター', type: PokemonElementType.grass, power: 55, description: 'はっぱを とばして 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'あまいかおり', type: PokemonElementType.normal, power: null, description: '香りで 相手の 回避率を がくっと さげる。草むら などで 使うと ポケモンが よってくる。' },
    ],
  },
  meganium: {
    flavorText: '花びらから 発散される においには 争う 気持ちを 静める 成分が 含まれる。',
    stats: { hp: 80, attack: 82, defense: 100, specialAttack: 83, specialDefense: 100, speed: 80 },
    moves: [
      { name: 'はなびらのまい', type: PokemonElementType.grass, power: 120, description: '２ー３ターンの あいだ 花を まきちらして 相手を 攻撃する。 まきちらした あとは 混乱する。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
      { name: 'アロマセラピー', type: PokemonElementType.grass, power: null, description: '心地好い やすらぐ 香りを かがせて 味方全員の 状態異常を 回復する。' },
      { name: 'はっぱカッター', type: PokemonElementType.grass, power: 55, description: 'はっぱを とばして 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
    ],
  },
  cyndaquil: {
    flavorText: '臆病で いつも 体を まるめている。 襲われると 背中の 炎を 燃え上がらせて 身を守る。',
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'ふんか', type: PokemonElementType.fire, power: 150, description: '怒りを 爆発させて 相手を 攻撃する。自分の ＨＰが 少ないほど 技の 威力は さがる。' },
      { name: 'ふんえん', type: PokemonElementType.fire, power: 80, description: '真っ赤な 炎で 自分の 周りに いるものを 攻撃する。 やけど状態に することが ある。' },
      { name: 'かえんぐるま', type: PokemonElementType.fire, power: 60, description: '炎を まとい 相手に 突進して 攻撃する。 やけど状態に することが ある。' },
      { name: 'えんまく', type: PokemonElementType.normal, power: null, description: '煙や 墨などを 吹きかけて 相手の 命中率を さげる。' },
    ],
  },
  quilava: {
    flavorText: '戦いの前 背中を 向けて 自分の 炎が どれくらい すごいかを 相手に 見せつける。',
    stats: { hp: 58, attack: 64, defense: 58, specialAttack: 80, specialDefense: 65, speed: 80 },
    moves: [
      { name: 'ふんか', type: PokemonElementType.fire, power: 150, description: '怒りを 爆発させて 相手を 攻撃する。自分の ＨＰが 少ないほど 技の 威力は さがる。' },
      { name: 'ふんえん', type: PokemonElementType.fire, power: 80, description: '真っ赤な 炎で 自分の 周りに いるものを 攻撃する。 やけど状態に することが ある。' },
      { name: 'かえんぐるま', type: PokemonElementType.fire, power: 60, description: '炎を まとい 相手に 突進して 攻撃する。 やけど状態に することが ある。' },
      { name: 'えんまく', type: PokemonElementType.normal, power: null, description: '煙や 墨などを 吹きかけて 相手の 命中率を さげる。' },
    ],
  },
  typhlosion: {
    flavorText: '怒りが 最高潮のとき 触ったもの すべて 一瞬で 燃え上がらせるほどに 熱い。',
    stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    moves: [
      { name: 'ふんか', type: PokemonElementType.fire, power: 150, description: '怒りを 爆発させて 相手を 攻撃する。自分の ＨＰが 少ないほど 技の 威力は さがる。' },
      { name: 'ふんえん', type: PokemonElementType.fire, power: 80, description: '真っ赤な 炎で 自分の 周りに いるものを 攻撃する。 やけど状態に することが ある。' },
      { name: 'かえんぐるま', type: PokemonElementType.fire, power: 60, description: '炎を まとい 相手に 突進して 攻撃する。 やけど状態に することが ある。' },
      { name: 'えんまく', type: PokemonElementType.normal, power: null, description: '煙や 墨などを 吹きかけて 相手の 命中率を さげる。' },
    ],
  },
  totodile: {
    flavorText: '小さいながらも 暴れん坊。 目の前で 動くものが あれば とにかく かみついてくる。',
    stats: { hp: 50, attack: 65, defense: 64, specialAttack: 44, specialDefense: 48, speed: 43 },
    moves: [
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
      { name: 'こおりのキバ', type: PokemonElementType.ice, power: 65, description: '冷気を ひめた キバで かみつく。 相手を ひるませたり こおり状態に することが ある。' },
      { name: 'あばれる', type: PokemonElementType.normal, power: 120, description: '２ー３ターンの あいだ 暴れまくって 相手を 攻撃する。 暴れたあとは 混乱する。' },
      { name: 'アクアテール', type: PokemonElementType.water, power: 90, description: '激しく あれくるう 荒波の ように 大きな しっぽを ふって 相手を 攻撃する。' },
    ],
  },
  feraligatr: {
    flavorText: '普段は ゆっくりとした 動きだが 獲物に かみつくときは 目にも 止まらない スピードだ。',
    stats: { hp: 85, attack: 105, defense: 100, specialAttack: 79, specialDefense: 83, speed: 78 },
    moves: [
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
      { name: 'こおりのキバ', type: PokemonElementType.ice, power: 65, description: '冷気を ひめた キバで かみつく。 相手を ひるませたり こおり状態に することが ある。' },
      { name: 'あばれる', type: PokemonElementType.normal, power: 120, description: '２ー３ターンの あいだ 暴れまくって 相手を 攻撃する。 暴れたあとは 混乱する。' },
      { name: 'アクアテール', type: PokemonElementType.water, power: 90, description: '激しく あれくるう 荒波の ように 大きな しっぽを ふって 相手を 攻撃する。' },
    ],
  },
  croconaw: {
    flavorText: '一度 かみつくと キバが 抜けるまで 絶対に 離さない。 抜けた キバは すぐに 生えてくる。',
    stats: { hp: 65, attack: 80, defense: 80, specialAttack: 59, specialDefense: 63, speed: 58 },
    moves: [
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
      { name: 'こおりのキバ', type: PokemonElementType.ice, power: 65, description: '冷気を ひめた キバで かみつく。 相手を ひるませたり こおり状態に することが ある。' },
      { name: 'あばれる', type: PokemonElementType.normal, power: 120, description: '２ー３ターンの あいだ 暴れまくって 相手を 攻撃する。 暴れたあとは 混乱する。' },
      { name: 'アクアテール', type: PokemonElementType.water, power: 90, description: '激しく あれくるう 荒波の ように 大きな しっぽを ふって 相手を 攻撃する。' },
    ],
  },
  sentret: {
    flavorText: '見張り役は 鋭く 鳴いたり 尻尾で 地面を たたいたりして 仲間に 危険を 知らせる。',
    stats: { hp: 35, attack: 46, defense: 34, specialAttack: 35, specialDefense: 45, speed: 20 },
    moves: [
      { name: 'このゆびとまれ', type: PokemonElementType.normal, power: null, description: '自分に 注目させて 相手からの 攻撃を すべて 自分に むけさせる。' },
      { name: 'さきどり', type: PokemonElementType.normal, power: null, description: '威力を あげて 相手が だそうとする 技を 先にだす。 先に だせないと 失敗する。' },
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  furret: {
    flavorText: '母親は 細長い 体で 子供を 包みこみ 眠らせる。 速い 動きで 敵を 追いこむ。',
    stats: { hp: 85, attack: 76, defense: 64, specialAttack: 45, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'このゆびとまれ', type: PokemonElementType.normal, power: null, description: '自分に 注目させて 相手からの 攻撃を すべて 自分に むけさせる。' },
      { name: 'さきどり', type: PokemonElementType.normal, power: null, description: '威力を あげて 相手が だそうとする 技を 先にだす。 先に だせないと 失敗する。' },
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  hoothoot: {
    flavorText: '体内の 時間の 間隔は どんなときでも 正確で 決まった リズムで 首をかしげる。',
    stats: { hp: 60, attack: 30, defense: 30, specialAttack: 36, specialDefense: 56, speed: 50 },
    moves: [
      { name: 'サイコシフト', type: PokemonElementType.psychic, power: null, description: '超能力で 暗示を かけて 自分の 受けている 状態異常を 相手に うつす。' },
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'じんつうりき', type: PokemonElementType.psychic, power: 80, description: 'みえない 不思議な 力を 送って 攻撃する。 相手を ひるませることが ある。' },
      { name: 'つつく', type: PokemonElementType.flying, power: 35, description: '鋭く とがった くちばしや つので 相手を 突いて 攻撃する。' },
    ],
  },
  noctowl: {
    flavorText: '両目は 特殊な つくり。 わずかな 光を 集めては 暗闇でも まわりを 見分ける。',
    stats: { hp: 100, attack: 50, defense: 50, specialAttack: 86, specialDefense: 96, speed: 70 },
    moves: [
      { name: 'サイコシフト', type: PokemonElementType.psychic, power: null, description: '超能力で 暗示を かけて 自分の 受けている 状態異常を 相手に うつす。' },
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'じんつうりき', type: PokemonElementType.psychic, power: 80, description: 'みえない 不思議な 力を 送って 攻撃する。 相手を ひるませることが ある。' },
      { name: 'ゴッドバード', type: PokemonElementType.flying, power: 140, description: '２ターン目に 相手を 攻撃する。 たまに ひるませる。 急所にも 当たりやすい。' },
    ],
  },
  ledyba: {
    flavorText: '寒くなると あちこちから レディバが たくさん 集まって 寄り添いあい 温め合う。',
    stats: { hp: 40, attack: 20, defense: 30, specialAttack: 40, specialDefense: 80, speed: 55 },
    moves: [
      { name: 'れんぞくパンチ', type: PokemonElementType.normal, power: 18, description: 'どとうの パンチで 相手を なぐりつけて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'マッハパンチ', type: PokemonElementType.fighting, power: 40, description: '目にも 留まらぬ ものすごい 速さで パンチを くりだす。 必ず 先制攻撃 できる。' },
      { name: 'ぎんいろのかぜ', type: PokemonElementType.bug, power: 60, description: '風に りんぷんを のせて 相手を 攻撃する。自分の すべての 能力が あがることが ある。' },
      { name: 'むしのさざめき', type: PokemonElementType.bug, power: 90, description: 'はねの 振動で 音波を おこして 攻撃する。相手の 特防を さげることが ある。' },
    ],
  },
  ledian: {
    flavorText: '夜空に 星が 瞬くとき 輝く 粉を 振りまきながら ひらひらと 飛んでいく。',
    stats: { hp: 55, attack: 35, defense: 50, specialAttack: 55, specialDefense: 110, speed: 85 },
    moves: [
      { name: 'れんぞくパンチ', type: PokemonElementType.normal, power: 18, description: 'どとうの パンチで 相手を なぐりつけて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'マッハパンチ', type: PokemonElementType.fighting, power: 40, description: '目にも 留まらぬ ものすごい 速さで パンチを くりだす。 必ず 先制攻撃 できる。' },
      { name: 'ぎんいろのかぜ', type: PokemonElementType.bug, power: 60, description: '風に りんぷんを のせて 相手を 攻撃する。自分の すべての 能力が あがることが ある。' },
      { name: 'むしのさざめき', type: PokemonElementType.bug, power: 90, description: 'はねの 振動で 音波を おこして 攻撃する。相手の 特防を さげることが ある。' },
    ],
  },
  spinarak: {
    flavorText: '細くて 丈夫な 糸を 張り巡らして わなを 仕掛けると 獲物が かかるのを ひたすら待つ。',
    stats: { hp: 40, attack: 60, defense: 40, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: 'クモのす', type: PokemonElementType.bug, power: null, description: 'ネバネバした 細い 糸を グルグルと からませて 相手を 戦闘から 逃げられなくする。' },
      { name: 'からみつく', type: PokemonElementType.normal, power: 10, description: '触手や ツタなどを からみつけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'ミサイルばり', type: PokemonElementType.bug, power: 25, description: '鋭い ハリを 相手に 発射して 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  ariados: {
    flavorText: 'お尻からだけでなく 口からも 糸を 出すので 見ただけでは どっちが 頭か わからない。',
    stats: { hp: 70, attack: 90, defense: 70, specialAttack: 60, specialDefense: 70, speed: 40 },
    moves: [
      { name: 'クモのす', type: PokemonElementType.bug, power: null, description: 'ネバネバした 細い 糸を グルグルと からませて 相手を 戦闘から 逃げられなくする。' },
      { name: 'からみつく', type: PokemonElementType.normal, power: 10, description: '触手や ツタなどを からみつけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'ミサイルばり', type: PokemonElementType.bug, power: 25, description: '鋭い ハリを 相手に 発射して 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  crobat: {
    flavorText: '４枚に 増えた 翼で 暗闇を 静かに 飛んでいく。 となりを 通られても 気づかない。',
    stats: { hp: 85, attack: 90, defense: 80, specialAttack: 70, specialDefense: 80, speed: 130 },
    moves: [
      { name: 'どくどくのキバ', type: PokemonElementType.poison, power: 50, description: '毒の ある キバで 相手に かみついて 攻撃する。 猛毒を おわせる ことが ある。' },
      { name: 'クロスポイズン', type: PokemonElementType.poison, power: 70, description: '毒の 刃で 相手を 切り裂く。 毒状態に することが あり 急所にも 当たりやすい。' },
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'くろいまなざし', type: PokemonElementType.normal, power: null, description: '吸いこまれるような 黒い まなざしで じっと みつめて 相手を 戦闘から 逃げられなくする。' },
    ],
  },
  chinchou: {
    flavorText: '暗い 海底では いつも 点滅している 触手の 明かり だけが 通信手段。',
    stats: { hp: 75, attack: 38, defense: 38, specialAttack: 56, specialDefense: 56, speed: 67 },
    moves: [
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'アクアリング', type: PokemonElementType.water, power: null, description: '自分の 体の 周りを 水で つくった ベールで おおう。 毎ターン ＨＰを 回復する。' },
      { name: 'スパーク', type: PokemonElementType.electric, power: 65, description: '電気を まとい 相手に 突進して 攻撃する。 まひ状態に することが ある。' },
      { name: 'ちょうおんぱ', type: PokemonElementType.normal, power: null, description: '特殊な 音波を 体から 発して 相手を 混乱させる。' },
    ],
  },
  lanturn: {
    flavorText: '深海を 泳ぐ ランターンの 明かりは 水面まで 届く。 深海の星 と 呼ばれている。',
    stats: { hp: 125, attack: 58, defense: 58, specialAttack: 76, specialDefense: 76, speed: 67 },
    moves: [
      { name: 'はきだす', type: PokemonElementType.normal, power: null, description: '蓄えた 力を 相手に ぶつけて 攻撃する。 蓄えているほど 威力が あがる。' },
      { name: 'のみこむ', type: PokemonElementType.normal, power: null, description: '蓄えた 力を のみこんで 自分の ＨＰを 回復する。 蓄えているほど 回復する。' },
      { name: 'たくわえる', type: PokemonElementType.normal, power: null, description: '力を 蓄えて 自分の 防御と 特防を あげる。 最大 ３回まで 蓄えられる。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
    ],
  },
  pichu: {
    flavorText: '仲間と 尻尾の 先を あわせて 火花を 飛ばす 遊びをする。 度胸試しを しているらしい。',
    stats: { hp: 20, attack: 40, defense: 15, specialAttack: 35, specialDefense: 35, speed: 60 },
    moves: [
      { name: 'てんしのキッス', type: PokemonElementType.normal, power: null, description: '天使のように かわいく キスして 相手を 混乱させる。' },
      { name: 'でんきショック', type: PokemonElementType.electric, power: 40, description: '電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
      { name: 'しっぽをふる', type: PokemonElementType.normal, power: null, description: 'しっぽを 左右に かわいく ふって 油断を 誘う。 相手の 防御を さげる。' },
      { name: 'わるだくみ', type: PokemonElementType.dark, power: null, description: '悪いことを 考えて 頭を 活性化させる。 自分の 特攻を ぐーんと あげる。' },
    ],
  },
  cleffa: {
    flavorText: 'お星さまのような シルエット。 その姿から 流れ星に乗って やって来ると 信じられている。',
    stats: { hp: 50, attack: 25, defense: 28, specialAttack: 45, specialDefense: 55, speed: 15 },
    moves: [
      { name: 'うたう', type: PokemonElementType.normal, power: null, description: '心地好い きれいな 歌声を 聞かせて 相手を 眠り状態に する。' },
      { name: 'てんしのキッス', type: PokemonElementType.normal, power: null, description: '天使のように かわいく キスして 相手を 混乱させる。' },
      { name: 'まねっこ', type: PokemonElementType.normal, power: null, description: '直前に でた 技を まねして 同じ 技を だす。 技が でていないと 失敗する。' },
      { name: 'はたく', type: PokemonElementType.normal, power: 40, description: '長い しっぽや 手などを 使って 相手を はたいて 攻撃する。' },
    ],
  },
  igglybuff: {
    flavorText: '短い 脚で 歩くより やわらかい 体を 使って 飛び跳ねながら 動き回る。',
    stats: { hp: 90, attack: 30, defense: 15, specialAttack: 40, specialDefense: 20, speed: 15 },
    moves: [
      { name: 'うたう', type: PokemonElementType.normal, power: null, description: '心地好い きれいな 歌声を 聞かせて 相手を 眠り状態に する。' },
      { name: 'てんしのキッス', type: PokemonElementType.normal, power: null, description: '天使のように かわいく キスして 相手を 混乱させる。' },
      { name: 'まねっこ', type: PokemonElementType.normal, power: null, description: '直前に でた 技を まねして 同じ 技を だす。 技が でていないと 失敗する。' },
      { name: 'はたく', type: PokemonElementType.normal, power: 40, description: '長い しっぽや 手などを 使って 相手を はたいて 攻撃する。' },
    ],
  },
  togepi: {
    flavorText: '殻の中に 幸せが たくさん つまっているらしく 優しくされると 幸運を 分け与える という。',
    stats: { hp: 35, attack: 20, defense: 65, specialAttack: 40, specialDefense: 65, speed: 20 },
    moves: [
      { name: 'このゆびとまれ', type: PokemonElementType.normal, power: null, description: '自分に 注目させて 相手からの 攻撃を すべて 自分に むけさせる。' },
      { name: 'てんしのキッス', type: PokemonElementType.normal, power: null, description: '天使のように かわいく キスして 相手を 混乱させる。' },
      { name: 'ねがいごと', type: PokemonElementType.normal, power: null, description: '次の ターンに 自分の ＨＰを 最大ＨＰの 半分 回復する。' },
      { name: 'あくび', type: PokemonElementType.normal, power: null, description: '大きな あくびで 眠気を 誘う。 次の ターンに 相手を 眠り状態に する。' },
    ],
  },
  togetic: {
    flavorText: '優しい人の そばに いないと 元気が 出なくなってしまう。 羽を動かさずに 空に浮かべる。',
    stats: { hp: 55, attack: 40, defense: 85, specialAttack: 80, specialDefense: 105, speed: 40 },
    moves: [
      { name: 'このゆびとまれ', type: PokemonElementType.normal, power: null, description: '自分に 注目させて 相手からの 攻撃を すべて 自分に むけさせる。' },
      { name: 'てんしのキッス', type: PokemonElementType.normal, power: null, description: '天使のように かわいく キスして 相手を 混乱させる。' },
      { name: 'ねがいごと', type: PokemonElementType.normal, power: null, description: '次の ターンに 自分の ＨＰを 最大ＨＰの 半分 回復する。' },
      { name: 'あくび', type: PokemonElementType.normal, power: null, description: '大きな あくびで 眠気を 誘う。 次の ターンに 相手を 眠り状態に する。' },
    ],
  },
  natu: {
    flavorText: '羽が 育ちきって おらず 飛び跳ねるようにして 移動する。 いつも なにかを 見つめている。',
    stats: { hp: 40, attack: 50, defense: 45, specialAttack: 70, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'ミラクルアイ', type: PokemonElementType.psychic, power: null, description: 'あくタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'サイコシフト', type: PokemonElementType.psychic, power: null, description: '超能力で 暗示を かけて 自分の 受けている 状態異常を 相手に うつす。' },
      { name: 'さきどり', type: PokemonElementType.normal, power: null, description: '威力を あげて 相手が だそうとする 技を 先にだす。 先に だせないと 失敗する。' },
      { name: 'おまじない', type: PokemonElementType.normal, power: null, description: '天に むかって おいのりを ささげ 相手の 攻撃を 急所に 当たらなくする。' },
    ],
  },
  xatu: {
    flavorText: '朝方 昇る 太陽を じっと 見つめ 祈りを ささげると ほとんど 動かず １日を終える。',
    stats: { hp: 65, attack: 75, defense: 70, specialAttack: 95, specialDefense: 70, speed: 95 },
    moves: [
      { name: 'ミラクルアイ', type: PokemonElementType.psychic, power: null, description: 'あくタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'サイコシフト', type: PokemonElementType.psychic, power: null, description: '超能力で 暗示を かけて 自分の 受けている 状態異常を 相手に うつす。' },
      { name: 'さきどり', type: PokemonElementType.normal, power: null, description: '威力を あげて 相手が だそうとする 技を 先にだす。 先に だせないと 失敗する。' },
      { name: 'おまじない', type: PokemonElementType.normal, power: null, description: '天に むかって おいのりを ささげ 相手の 攻撃を 急所に 当たらなくする。' },
    ],
  },
  mareep: {
    flavorText: 'ふわふわの 体毛は 静電気が たまると ２倍に ふくらむ。 触ると 感電してしまう。',
    stats: { hp: 55, attack: 40, defense: 40, specialAttack: 65, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'わたほうし', type: PokemonElementType.grass, power: null, description: '綿のような フワフワの 胞子を まとわり つかせて 相手の 素早さを がくっと さげる。' },
      { name: 'でんきショック', type: PokemonElementType.electric, power: 40, description: '電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
      { name: 'パワージェム', type: PokemonElementType.rock, power: 80, description: '宝石のように きらめく 光を 発射して 相手を 攻撃する。' },
    ],
  },
  flaaffy: {
    flavorText: 'ふかふかの 体毛は 電気を ためやすいが ゴムのような 皮膚の おかげで 自分は しびれない。',
    stats: { hp: 70, attack: 55, defense: 55, specialAttack: 80, specialDefense: 60, speed: 45 },
    moves: [
      { name: 'わたほうし', type: PokemonElementType.grass, power: null, description: '綿のような フワフワの 胞子を まとわり つかせて 相手の 素早さを がくっと さげる。' },
      { name: 'でんきショック', type: PokemonElementType.electric, power: 40, description: '電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
      { name: 'パワージェム', type: PokemonElementType.rock, power: 80, description: '宝石のように きらめく 光を 発射して 相手を 攻撃する。' },
    ],
  },
  ampharos: {
    flavorText: '尻尾の先が 光り輝く。 光は はるか 遠くまで 届き 迷った者の 道標となる。',
    stats: { hp: 90, attack: 75, defense: 85, specialAttack: 115, specialDefense: 90, speed: 55 },
    moves: [
      { name: 'わたほうし', type: PokemonElementType.grass, power: null, description: '綿のような フワフワの 胞子を まとわり つかせて 相手の 素早さを がくっと さげる。' },
      { name: 'でんきショック', type: PokemonElementType.electric, power: 40, description: '電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
      { name: 'パワージェム', type: PokemonElementType.rock, power: 80, description: '宝石のように きらめく 光を 発射して 相手を 攻撃する。' },
    ],
  },
  bellossom: {
    flavorText: 'ときおり キレイハナが 集まって 踊るような 仕草を みせる。 太陽を呼ぶ 儀式と いわれる。',
    stats: { hp: 75, attack: 80, defense: 95, specialAttack: 90, specialDefense: 100, speed: 50 },
    moves: [
      { name: 'リーフブレード', type: PokemonElementType.grass, power: 90, description: 'はっぱを 剣のように あやつり 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'しびれごな', type: PokemonElementType.grass, power: null, description: 'しびれる 粉を たくさん ふりまいて 相手を まひ状態に する。' },
      { name: 'あまいかおり', type: PokemonElementType.normal, power: null, description: '香りで 相手の 回避率を がくっと さげる。草むら などで 使うと ポケモンが よってくる。' },
      { name: 'メガドレイン', type: PokemonElementType.grass, power: 40, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
    ],
  },
  marill: {
    flavorText: '全身の 体毛は 水を 弾く 性質を 持ち 水浴び しても 乾いている。',
    stats: { hp: 70, attack: 20, defense: 50, specialAttack: 20, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'アクアリング', type: PokemonElementType.water, power: null, description: '自分の 体の 周りを 水で つくった ベールで おおう。 毎ターン ＨＰを 回復する。' },
      { name: 'バブルこうせん', type: PokemonElementType.water, power: 65, description: '泡を 勢いよく 相手に 発射して 攻撃する。 素早さを さげる ことが ある。' },
      { name: 'しっぽをふる', type: PokemonElementType.normal, power: null, description: 'しっぽを 左右に かわいく ふって 油断を 誘う。 相手の 防御を さげる。' },
      { name: 'アクアテール', type: PokemonElementType.water, power: 90, description: '激しく あれくるう 荒波の ように 大きな しっぽを ふって 相手を 攻撃する。' },
    ],
  },
  azumarill: {
    flavorText: '長い 耳は 優れた センサー。 川底で 動く 生き物の 音を 聞き分ける ことが できる。',
    stats: { hp: 100, attack: 50, defense: 80, specialAttack: 60, specialDefense: 80, speed: 50 },
    moves: [
      { name: 'アクアリング', type: PokemonElementType.water, power: null, description: '自分の 体の 周りを 水で つくった ベールで おおう。 毎ターン ＨＰを 回復する。' },
      { name: 'バブルこうせん', type: PokemonElementType.water, power: 65, description: '泡を 勢いよく 相手に 発射して 攻撃する。 素早さを さげる ことが ある。' },
      { name: 'しっぽをふる', type: PokemonElementType.normal, power: null, description: 'しっぽを 左右に かわいく ふって 油断を 誘う。 相手の 防御を さげる。' },
      { name: 'アクアテール', type: PokemonElementType.water, power: 90, description: '激しく あれくるう 荒波の ように 大きな しっぽを ふって 相手を 攻撃する。' },
    ],
  },
  politoed: {
    flavorText: '３匹以上 ニョロトノが 集まると かならず 怒鳴るような 鳴き声で 合唱を はじめる。',
    stats: { hp: 90, attack: 75, defense: 75, specialAttack: 90, specialDefense: 100, speed: 70 },
    moves: [
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
      { name: 'おうふくビンタ', type: PokemonElementType.normal, power: 15, description: 'おうふく ビンタで 相手を たたいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
      { name: 'バブルこうせん', type: PokemonElementType.water, power: 65, description: '泡を 勢いよく 相手に 発射して 攻撃する。 素早さを さげる ことが ある。' },
    ],
  },
  sudowoodo: {
    flavorText: 'いつも 木のふりを している。 体の つくりは 植物より 石や 岩などに 近いようだ。',
    stats: { hp: 70, attack: 100, defense: 115, specialAttack: 30, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'ウッドハンマー', type: PokemonElementType.grass, power: 120, description: '硬い 胴体を 相手に たたきつけて 攻撃する。 自分も かなり ダメージを 受ける。' },
      { name: 'いわおとし', type: PokemonElementType.rock, power: 50, description: '小さな 岩を 持ちあげて 相手に 投げつけて 攻撃する。' },
      { name: 'アームハンマー', type: PokemonElementType.fighting, power: 100, description: '強くて 重い こぶしを ふるって ダメージを 与える。 自分の 素早さが さがる。' },
      { name: 'まねっこ', type: PokemonElementType.normal, power: null, description: '直前に でた 技を まねして 同じ 技を だす。 技が でていないと 失敗する。' },
    ],
  },
  hoppip: {
    flavorText: 'とても 軽い 体。 吹き飛ばされないよう しっかり 地面を 踏みしめている。',
    stats: { hp: 35, attack: 35, defense: 40, specialAttack: 35, specialDefense: 55, speed: 50 },
    moves: [
      { name: 'わたほうし', type: PokemonElementType.grass, power: null, description: '綿のような フワフワの 胞子を まとわり つかせて 相手の 素早さを がくっと さげる。' },
      { name: 'ねむりごな', type: PokemonElementType.grass, power: null, description: '眠くなる 粉を たくさん ふりまいて 相手を 眠り状態に する。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
      { name: 'はねる', type: PokemonElementType.normal, power: null, description: '攻撃もせずに ピョン ピョンと 跳ねるだけで なにも おこらない……。' },
    ],
  },
  skiploom: {
    flavorText: '頭の上に 咲いた 花は 気温に よって 開いたり 閉じたりする 性質を 持つ。',
    stats: { hp: 55, attack: 45, defense: 50, specialAttack: 45, specialDefense: 65, speed: 80 },
    moves: [
      { name: 'わたほうし', type: PokemonElementType.grass, power: null, description: '綿のような フワフワの 胞子を まとわり つかせて 相手の 素早さを がくっと さげる。' },
      { name: 'ねむりごな', type: PokemonElementType.grass, power: null, description: '眠くなる 粉を たくさん ふりまいて 相手を 眠り状態に する。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
      { name: 'はねる', type: PokemonElementType.normal, power: null, description: '攻撃もせずに ピョン ピョンと 跳ねるだけで なにも おこらない……。' },
    ],
  },
  jumpluff: {
    flavorText: '季節風に 流されて 世界を １周してしまう。 途中で 綿胞子を ばらまく。',
    stats: { hp: 75, attack: 55, defense: 70, specialAttack: 55, specialDefense: 95, speed: 110 },
    moves: [
      { name: 'わたほうし', type: PokemonElementType.grass, power: null, description: '綿のような フワフワの 胞子を まとわり つかせて 相手の 素早さを がくっと さげる。' },
      { name: 'ねむりごな', type: PokemonElementType.grass, power: null, description: '眠くなる 粉を たくさん ふりまいて 相手を 眠り状態に する。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
      { name: 'はねる', type: PokemonElementType.normal, power: null, description: '攻撃もせずに ピョン ピョンと 跳ねるだけで なにも おこらない……。' },
    ],
  },
  aipom: {
    flavorText: '高い 木の上で 暮らしている。 枝から 枝へ 飛び移るとき 尻尾で 巧みに バランスをとる。',
    stats: { hp: 55, attack: 70, defense: 55, specialAttack: 40, specialDefense: 55, speed: 85 },
    moves: [
      { name: 'ダブルアタック', type: PokemonElementType.normal, power: 35, description: 'しっぽなどを 使い 相手を たたいて 攻撃する。 ２回連続で ダメージを 与える。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'くすぐる', type: PokemonElementType.normal, power: null, description: '体を くすぐり 笑わせる ことで 相手の 攻撃と 防御を さげる。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
    ],
  },
  sunkern: {
    flavorText: 'ある朝 突然 降ってくる。 オニスズメに 襲われると 葉っぱを 激しく 振って 追い払う。',
    stats: { hp: 30, attack: 30, defense: 30, specialAttack: 30, specialDefense: 30, speed: 30 },
    moves: [
      { name: 'くさぶえ', type: PokemonElementType.grass, power: null, description: '心地好い 笛の 音色を 聞かせて 相手を 眠りの 状態に する。' },
      { name: 'ねをはる', type: PokemonElementType.grass, power: null, description: '大地に 根を 張り 毎ターン 自分の ＨＰを 回復する。 根を 張っているので 入れ替えられない。' },
      { name: 'はっぱカッター', type: PokemonElementType.grass, power: 55, description: 'はっぱを とばして 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'せいちょう', type: PokemonElementType.normal, power: null, description: '体を 一気に 大きく 生長させて 攻撃と 特攻を あげる。' },
    ],
  },
  yanma: {
    flavorText: '顔を 動かさずに ３６０度 すべてを 見渡す 目を 持つので 真後ろの 獲物も 見逃さない。',
    stats: { hp: 65, attack: 65, defense: 45, specialAttack: 75, specialDefense: 45, speed: 95 },
    moves: [
      { name: 'ソニックブーム', type: PokemonElementType.normal, power: null, description: '衝撃波を 相手に ぶつけて 攻撃する。 ２０の ダメージを 決まって 与える。' },
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'むしのさざめき', type: PokemonElementType.bug, power: 90, description: 'はねの 振動で 音波を おこして 攻撃する。相手の 特防を さげることが ある。' },
    ],
  },
  sunflora: {
    flavorText: '暑い 季節が 近づくと 顔の 花びらは 鮮やかになり 活発に 動くようになる。',
    stats: { hp: 75, attack: 75, defense: 55, specialAttack: 105, specialDefense: 85, speed: 30 },
    moves: [
      { name: 'くさぶえ', type: PokemonElementType.grass, power: null, description: '心地好い 笛の 音色を 聞かせて 相手を 眠りの 状態に する。' },
      { name: 'はなびらのまい', type: PokemonElementType.grass, power: 120, description: '２ー３ターンの あいだ 花を まきちらして 相手を 攻撃する。 まきちらした あとは 混乱する。' },
      { name: 'ねをはる', type: PokemonElementType.grass, power: null, description: '大地に 根を 張り 毎ターン 自分の ＨＰを 回復する。 根を 張っているので 入れ替えられない。' },
      { name: 'はっぱカッター', type: PokemonElementType.grass, power: 55, description: 'はっぱを とばして 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
    ],
  },
  wooper: {
    flavorText: '冷たい 水の中で 生活。 あたりが 涼しくなると エサを 探しに 地上にも 現れる。',
    stats: { hp: 55, attack: 45, defense: 45, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: 'どろばくだん', type: PokemonElementType.ground, power: 65, description: '硬い 泥の 弾を 相手に 発射して 攻撃する。 命中率を さげることが ある。' },
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'しろいきり', type: PokemonElementType.ice, power: null, description: '白い霧で 体を おおう。 ５ターンの あいだ 相手に 能力を さげられなく なる。' },
      { name: 'たたきつける', type: PokemonElementType.normal, power: 80, description: '長い しっぽや つるなどを 使い 相手を たたきつけて 攻撃する。' },
    ],
  },
  quagsire: {
    flavorText: 'のんびりとした 性格。 川底で 口を 開けて エサが 飛びこんでくるのを ひたすら 待つ。',
    stats: { hp: 95, attack: 85, defense: 85, specialAttack: 65, specialDefense: 65, speed: 35 },
    moves: [
      { name: 'どろばくだん', type: PokemonElementType.ground, power: 65, description: '硬い 泥の 弾を 相手に 発射して 攻撃する。 命中率を さげることが ある。' },
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'しろいきり', type: PokemonElementType.ice, power: null, description: '白い霧で 体を おおう。 ５ターンの あいだ 相手に 能力を さげられなく なる。' },
      { name: 'たたきつける', type: PokemonElementType.normal, power: 80, description: '長い しっぽや つるなどを 使い 相手を たたきつけて 攻撃する。' },
    ],
  },
  espeon: {
    flavorText: '相手の 動きを 予知するとき ふたまたに なっている 尻尾の 先は 微妙に 揺れている。',
    stats: { hp: 65, attack: 65, defense: 60, specialAttack: 130, specialDefense: 95, speed: 110 },
    moves: [
      { name: 'あさのひざし', type: PokemonElementType.normal, power: null, description: '自分の ＨＰを 回復する。 天気に よって 回復の 量が 変化する。' },
      { name: 'パワースワップ', type: PokemonElementType.psychic, power: null, description: '超能力で 自分と 相手の 攻撃と 特攻の 能力変化を 入れ替える。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
      { name: 'ねんりき', type: PokemonElementType.psychic, power: 50, description: '弱い 念力を 相手に 送って 攻撃する。 相手を 混乱させることが ある。' },
    ],
  },
  umbreon: {
    flavorText: '月の 光が イーブイの 遺伝子を 変化させた。 闇に 潜み 獲物を 待つ。',
    stats: { hp: 95, attack: 65, defense: 110, specialAttack: 60, specialDefense: 130, speed: 65 },
    moves: [
      { name: 'つきのひかり', type: PokemonElementType.normal, power: null, description: '自分の ＨＰを 回復する。 天気に よって 回復の 量が 変化する。' },
      { name: 'くろいまなざし', type: PokemonElementType.normal, power: null, description: '吸いこまれるような 黒い まなざしで じっと みつめて 相手を 戦闘から 逃げられなくする。' },
      { name: 'ガードスワップ', type: PokemonElementType.psychic, power: null, description: '超能力で 自分と 相手の 防御と 特防の 能力変化を 入れ替える。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
    ],
  },
  murkrow: {
    flavorText: '輝く 物を 拾っては 秘密の 場所に 隠しておく。 よく ニャースと 奪い合いになる。',
    stats: { hp: 60, attack: 85, defense: 42, specialAttack: 85, specialDefense: 42, speed: 91 },
    moves: [
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'くろいまなざし', type: PokemonElementType.normal, power: null, description: '吸いこまれるような 黒い まなざしで じっと みつめて 相手を 戦闘から 逃げられなくする。' },
      { name: 'つつく', type: PokemonElementType.flying, power: 35, description: '鋭く とがった くちばしや つので 相手を 突いて 攻撃する。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
    ],
  },
  slowking: {
    flavorText: 'すごい 知性と ひらめきを 持っている。どんなときでも あわてず 騒がず のんびりとしている。',
    stats: { hp: 95, attack: 75, defense: 80, specialAttack: 100, specialDefense: 110, speed: 30 },
    moves: [
      { name: 'きりふだ', type: PokemonElementType.normal, power: null, description: 'きりふだの 残り ＰＰが 少なければ 少ないほど 技の 威力が あがる。' },
      { name: 'パワージェム', type: PokemonElementType.rock, power: 80, description: '宝石のように きらめく 光を 発射して 相手を 攻撃する。' },
      { name: 'あくび', type: PokemonElementType.normal, power: null, description: '大きな あくびで 眠気を 誘う。 次の ターンに 相手を 眠り状態に する。' },
      { name: 'かなしばり', type: PokemonElementType.normal, power: null, description: '相手の 動きを とめて 直前に だしていた 技を ４ターンの あいだ 使えなくする。' },
    ],
  },
  unown_a: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_b: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_c: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_d: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_e: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_f: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_g: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_h: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_i: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_j: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_k: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_l: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_m: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_n: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_o: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_p: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_q: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_r: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_s: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_t: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_u: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_v: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_w: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_x: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_y: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_z: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_exclamation: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  unown_question: {
    flavorText: '体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
    ],
  },
  misdreavus: {
    flavorText: '怖がる 心を 赤い 玉で 吸収して 栄養にする。 昼間は 暗がりで 眠っている。',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 85, specialDefense: 85, speed: 85 },
    moves: [
      { name: 'おんねん', type: PokemonElementType.ghost, power: null, description: '相手の 技で ひんしに されたとき おんねんを かけて その技の ＰＰを ０に する。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
      { name: 'くろいまなざし', type: PokemonElementType.normal, power: null, description: '吸いこまれるような 黒い まなざしで じっと みつめて 相手を 戦闘から 逃げられなくする。' },
      { name: 'サイコウェーブ', type: PokemonElementType.psychic, power: null, description: '不思議な 念波を 相手に 発射して 攻撃する。 使うたびに ダメージが 変わる。' },
    ],
  },
  wobbuffet: {
    flavorText: '光や ショックを 嫌う。 攻撃されると 体が ふくらみ 反撃が 強力に なる。',
    stats: { hp: 190, attack: 33, defense: 58, specialAttack: 33, specialDefense: 58, speed: 33 },
    moves: [
      { name: 'ミラーコート', type: PokemonElementType.psychic, power: null, description: '相手から 受けた 特殊攻撃の ダメージを ２倍に して その相手に 返す。' },
      { name: 'みちづれ', type: PokemonElementType.ghost, power: null, description: '技を だしたあと 攻撃を 受けて ひんしに なったとき 攻撃 相手も ひんしに する。' },
      { name: 'カウンター', type: PokemonElementType.fighting, power: null, description: '相手から 受けた 物理攻撃の ダメージを ２倍に して 同じ 相手に 返す。' },
      { name: 'しんぴのまもり', type: PokemonElementType.normal, power: null, description: '５ターンの あいだ 不思議な 力に 守られて 状態異常に ならなくなる。' },
    ],
  },
  girafarig: {
    flavorText: '眠っている あいだ 尻尾の 頭が あたりを 見張っている。 尻尾は 眠らなくても 平気。',
    stats: { hp: 70, attack: 80, defense: 65, specialAttack: 90, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'ふみつけ', type: PokemonElementType.normal, power: 65, description: '大きな 足で 相手を 踏みつけて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'ダブルアタック', type: PokemonElementType.normal, power: 35, description: 'しっぽなどを 使い 相手を たたいて 攻撃する。 ２回連続で ダメージを 与える。' },
      { name: 'パワースワップ', type: PokemonElementType.psychic, power: null, description: '超能力で 自分と 相手の 攻撃と 特攻の 能力変化を 入れ替える。' },
    ],
  },
  pineco: {
    flavorText: '木の 皮を 重ね合わせて 殻を 分厚くするのが 大好き。 重くなっても 気にしない。',
    stats: { hp: 50, attack: 65, defense: 90, specialAttack: 35, specialDefense: 35, speed: 15 },
    moves: [
      { name: 'こうそくスピン', type: PokemonElementType.normal, power: 50, description: '回転して 相手を 攻撃する。 しめつける まきつく やどりぎのタネ まきびし なども 吹きとばせる。' },
      { name: 'まきびし', type: PokemonElementType.ground, power: null, description: '相手の 足下に まきびしを しかける。交代で でてきた 相手の ポケモンに ダメージを 与える。' },
      { name: 'むしくい', type: PokemonElementType.bug, power: 60, description: 'かみついて 攻撃する。 相手が きのみを 持っているとき 食べて きのみの 効果を 受けられる。' },
      { name: 'だいばくはつ', type: PokemonElementType.normal, power: 250, description: '大きな 爆発で 自分の 周りに いるものを 攻撃する。 使ったあとに ひんしに なる。' },
    ],
  },
  forretress: {
    flavorText: '鋼鉄の 殻で 守られている。 すきまから 目玉が のぞいているが 中身の 正体は ナゾのまま。',
    stats: { hp: 75, attack: 90, defense: 140, specialAttack: 60, specialDefense: 60, speed: 40 },
    moves: [
      { name: 'ミラーショット', type: PokemonElementType.steel, power: 65, description: '磨きあげられた 体から せん光の 力を 相手に 放つ。 命中率を さげることが ある。' },
      { name: 'こうそくスピン', type: PokemonElementType.normal, power: 50, description: '回転して 相手を 攻撃する。 しめつける まきつく やどりぎのタネ まきびし なども 吹きとばせる。' },
      { name: 'まきびし', type: PokemonElementType.ground, power: null, description: '相手の 足下に まきびしを しかける。交代で でてきた 相手の ポケモンに ダメージを 与える。' },
      { name: 'どくびし', type: PokemonElementType.poison, power: null, description: '相手の 足下に どくびしを しかける。交代で でてきた 相手の ポケモンに 毒を おわせる。' },
    ],
  },
  dunsparce: {
    flavorText: 'だれかに 見られると 尻尾で 地面を 掘って 後ろ向きに 逃げ出すのだ。',
    stats: { hp: 100, attack: 70, defense: 70, specialAttack: 65, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'へびにらみ', type: PokemonElementType.normal, power: null, description: 'おなかの 模様で おびえさせて 相手を まひの 状態に する。' },
      { name: 'あくび', type: PokemonElementType.normal, power: null, description: '大きな あくびで 眠気を 誘う。 次の ターンに 相手を 眠り状態に する。' },
      { name: 'おいうち', type: PokemonElementType.dark, power: 40, description: '相手 ポケモンが 入れ替わるときに 技を だしていると 倍の 威力で 攻撃できる。' },
      { name: 'はねやすめ', type: PokemonElementType.flying, power: null, description: '地面に 降りて 体を やすめる。 最大ＨＰの 半分の ＨＰを 回復する。' },
    ],
  },
  gligar: {
    flavorText: 'いつもは 崖に 張りついている。 獲物を見つけると 羽を広げ 風に乗り 襲いかかってくる。',
    stats: { hp: 65, attack: 75, defense: 105, specialAttack: 35, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'ハサミギロチン', type: PokemonElementType.normal, power: null, description: '大きな ハサミで 相手を 切り裂いて 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
    ],
  },
  steelix: {
    flavorText: '地中の 高い 圧力と 熱で 鍛えられた 体は あらゆる 金属よりも 硬い。',
    stats: { hp: 75, attack: 85, defense: 200, specialAttack: 55, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'いわおとし', type: PokemonElementType.rock, power: 50, description: '小さな 岩を 持ちあげて 相手に 投げつけて 攻撃する。' },
      { name: 'しめつける', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを 使い ４ー５ターンの あいだ 相手を 締めつけて 攻撃する。' },
      { name: 'りゅうのいぶき', type: PokemonElementType.dragon, power: 60, description: 'ものすごい 息を 相手に 吹きつけて 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  snubbull: {
    flavorText: '活発で 遊び好きな 性格。 懐いてくれるので 一緒に 遊びたがる 女性も 多い。',
    stats: { hp: 60, attack: 80, defense: 50, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: 'したでなめる', type: PokemonElementType.ghost, power: 30, description: '長い 舌で 相手を なめまわして 攻撃する。 まひ状態に することが ある。' },
      { name: 'かみなりのキバ', type: PokemonElementType.electric, power: 65, description: '電気を ためた キバで かみつく。 相手を ひるませたり まひ状態に することが ある。' },
      { name: 'こおりのキバ', type: PokemonElementType.ice, power: 65, description: '冷気を ひめた キバで かみつく。 相手を ひるませたり こおり状態に することが ある。' },
      { name: 'ほのおのキバ', type: PokemonElementType.fire, power: 65, description: '炎を まとった キバで かみつく。 相手を ひるませたり やけど状態に することが ある。' },
    ],
  },
  granbull: {
    flavorText: '顔に 似合わず 臆病。 しかし ひとたび 怒りはじめると 大きな キバで 反撃する。',
    stats: { hp: 90, attack: 120, defense: 75, specialAttack: 60, specialDefense: 60, speed: 45 },
    moves: [
      { name: 'したでなめる', type: PokemonElementType.ghost, power: 30, description: '長い 舌で 相手を なめまわして 攻撃する。 まひ状態に することが ある。' },
      { name: 'かみなりのキバ', type: PokemonElementType.electric, power: 65, description: '電気を ためた キバで かみつく。 相手を ひるませたり まひ状態に することが ある。' },
      { name: 'こおりのキバ', type: PokemonElementType.ice, power: 65, description: '冷気を ひめた キバで かみつく。 相手を ひるませたり こおり状態に することが ある。' },
      { name: 'ほのおのキバ', type: PokemonElementType.fire, power: 65, description: '炎を まとった キバで かみつく。 相手を ひるませたり やけど状態に することが ある。' },
    ],
  },
  qwilfish: {
    flavorText: '全身の 毒針を 飛ばすため １０リットルの 水を 一気に 飲みこみ 体を ふくらませる。',
    stats: { hp: 65, attack: 95, defense: 85, specialAttack: 55, specialDefense: 55, speed: 85 },
    moves: [
      { name: 'ちいさくなる', type: PokemonElementType.normal, power: null, description: '体を ちぢめて 小さく みせて 自分の 回避率を ぐーんと あげる。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'はきだす', type: PokemonElementType.normal, power: null, description: '蓄えた 力を 相手に ぶつけて 攻撃する。 蓄えているほど 威力が あがる。' },
      { name: 'ミサイルばり', type: PokemonElementType.bug, power: 25, description: '鋭い ハリを 相手に 発射して 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  scizor: {
    flavorText: '鋼鉄を 含んでいる ハサミで 捕らえたものは どんなに 硬くても コナゴナに 砕く。',
    stats: { hp: 70, attack: 130, defense: 100, specialAttack: 55, specialDefense: 80, speed: 65 },
    moves: [
      { name: 'バレットパンチ', type: PokemonElementType.steel, power: 40, description: '弾丸の ような 速くて 硬い パンチを 相手に くりだす。 必ず 先制攻撃 できる。' },
      { name: 'かまいたち', type: PokemonElementType.normal, power: 80, description: '風の 刃を つくり ２ターン目に 相手を 攻撃する。 急所に 当たりやすい。' },
      { name: 'ダブルアタック', type: PokemonElementType.normal, power: 35, description: 'しっぽなどを 使い 相手を たたいて 攻撃する。 ２回連続で ダメージを 与える。' },
      { name: 'フェイント', type: PokemonElementType.normal, power: 30, description: 'まもるや みきりを している 相手に 攻撃が できる。 守りの 効果を 解除させる。' },
    ],
  },
  shuckle: {
    flavorText: 'ツボのような 甲羅の 中に ためこんだ 木の実は いつの間にか ドロドロの ジュースに 変わる。',
    stats: { hp: 20, attack: 10, defense: 230, specialAttack: 10, specialDefense: 230, speed: 5 },
    moves: [
      { name: 'パワートリック', type: PokemonElementType.psychic, power: null, description: '超能力で 自分の 攻撃と 防御の 力を 交換する。' },
      { name: 'からみつく', type: PokemonElementType.normal, power: 10, description: '触手や ツタなどを からみつけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'からにこもる', type: PokemonElementType.water, power: null, description: '殻に 潜りこんで 身を守り 自分の 防御を あげる。' },
      { name: 'まきつく', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを つかって ４ー５ターンの あいだ 相手に まきついて 攻撃する。' },
    ],
  },
  heracross: {
    flavorText: '自慢のツノを 相手の お腹の 下に ねじこみ 一気に 持ち上げ ぶん投げてしまう 力持ち。',
    stats: { hp: 80, attack: 125, defense: 75, specialAttack: 40, specialDefense: 95, speed: 85 },
    moves: [
      { name: 'つのでつく', type: PokemonElementType.normal, power: 65, description: '鋭く とがった つので 相手を 攻撃する。' },
      { name: 'メガホーン', type: PokemonElementType.bug, power: 120, description: '硬くて りっぱな つので おもいっきり 相手を 突き刺して 攻撃する。' },
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'フェイント', type: PokemonElementType.normal, power: 30, description: 'まもるや みきりを している 相手に 攻撃が できる。 守りの 効果を 解除させる。' },
    ],
  },
  sneasel: {
    flavorText: '住処から タマゴを かすめ取り 食べてしまう。鋭い カギヅメが 相手の 急所を 切り裂く。',
    stats: { hp: 55, attack: 95, defense: 55, specialAttack: 35, specialDefense: 75, speed: 115 },
    moves: [
      { name: 'こおりのつぶて', type: PokemonElementType.ice, power: 40, description: '氷の塊を 一瞬で つくり 相手に 素早く 放つ。 必ず 先制攻撃 できる。' },
      { name: 'ふくろだたき', type: PokemonElementType.dark, power: null, description: '味方 全員で 攻撃する。 仲間の ポケモンが 多いほど 技の 攻撃回数が 増える。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
    ],
  },
  teddiursa: {
    flavorText: 'ミツを見つけると 三日月模様が 輝く。甘いミツが 染みこんだ 手のひらを いつも なめている。',
    stats: { hp: 60, attack: 80, defense: 50, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'したでなめる', type: PokemonElementType.ghost, power: 30, description: '長い 舌で 相手を なめまわして 攻撃する。 まひ状態に することが ある。' },
      { name: 'あまいかおり', type: PokemonElementType.normal, power: null, description: '香りで 相手の 回避率を がくっと さげる。草むら などで 使うと ポケモンが よってくる。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
    ],
  },
  ursaring: {
    flavorText: 'どんな においも かぎわける。 地面深くに 埋まっている 食べ物も 残らず 見つけ出す。',
    stats: { hp: 90, attack: 130, defense: 75, specialAttack: 75, specialDefense: 75, speed: 55 },
    moves: [
      { name: 'したでなめる', type: PokemonElementType.ghost, power: 30, description: '長い 舌で 相手を なめまわして 攻撃する。 まひ状態に することが ある。' },
      { name: 'アームハンマー', type: PokemonElementType.fighting, power: 100, description: '強くて 重い こぶしを ふるって ダメージを 与える。 自分の 素早さが さがる。' },
      { name: 'あまいかおり', type: PokemonElementType.normal, power: null, description: '香りで 相手の 回避率を がくっと さげる。草むら などで 使うと ポケモンが よってくる。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  slugma: {
    flavorText: '火山地帯に 多く 発生。 暖かい ところを 探して のろのろ はいずり回っている。',
    stats: { hp: 40, attack: 40, defense: 40, specialAttack: 70, specialDefense: 40, speed: 20 },
    moves: [
      { name: 'ふんえん', type: PokemonElementType.fire, power: 80, description: '真っ赤な 炎で 自分の 周りに いるものを 攻撃する。 やけど状態に することが ある。' },
      { name: 'スモッグ', type: PokemonElementType.poison, power: 30, description: '汚れた ガスを 相手に 吹きつけて 攻撃する。 毒状態に することが ある。' },
      { name: 'いわおとし', type: PokemonElementType.rock, power: 50, description: '小さな 岩を 持ちあげて 相手に 投げつけて 攻撃する。' },
      { name: 'じこさいせい', type: PokemonElementType.normal, power: null, description: '細胞を 再生させて 自分の 最大ＨＰの 半分の ＨＰを 回復する。' },
    ],
  },
  magcargo: {
    flavorText: '背中の 殻は 崩れやすいが ときどき 体内を 巡っている 高熱の 炎が 噴き出す。',
    stats: { hp: 60, attack: 50, defense: 120, specialAttack: 90, specialDefense: 80, speed: 30 },
    moves: [
      { name: 'ふんえん', type: PokemonElementType.fire, power: 80, description: '真っ赤な 炎で 自分の 周りに いるものを 攻撃する。 やけど状態に することが ある。' },
      { name: 'スモッグ', type: PokemonElementType.poison, power: 30, description: '汚れた ガスを 相手に 吹きつけて 攻撃する。 毒状態に することが ある。' },
      { name: 'いわおとし', type: PokemonElementType.rock, power: 50, description: '小さな 岩を 持ちあげて 相手に 投げつけて 攻撃する。' },
      { name: 'じこさいせい', type: PokemonElementType.normal, power: null, description: '細胞を 再生させて 自分の 最大ＨＰの 半分の ＨＰを 回復する。' },
    ],
  },
  swinub: {
    flavorText: 'エサを 探すため 鼻を こすり合わせ 地面を 掘っている。 たまに 温泉を 掘り当てる。',
    stats: { hp: 50, attack: 50, defense: 40, specialAttack: 30, specialDefense: 30, speed: 50 },
    moves: [
      { name: 'どろばくだん', type: PokemonElementType.ground, power: 65, description: '硬い 泥の 弾を 相手に 発射して 攻撃する。 命中率を さげることが ある。' },
      { name: 'こおりのつぶて', type: PokemonElementType.ice, power: 40, description: '氷の塊を 一瞬で つくり 相手に 素早く 放つ。 必ず 先制攻撃 できる。' },
      { name: 'こなゆき', type: PokemonElementType.ice, power: 40, description: '冷たい 粉雪を 相手に 吹きつけて 攻撃する。 こおり状態に することが ある。' },
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
    ],
  },
  piloswine: {
    flavorText: '４本の 脚は 短いが ひづめは 広く ギザギザ なので 雪の上でも 滑らず 歩ける。',
    stats: { hp: 100, attack: 100, defense: 80, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'どろばくだん', type: PokemonElementType.ground, power: 65, description: '硬い 泥の 弾を 相手に 発射して 攻撃する。 命中率を さげることが ある。' },
      { name: 'こなゆき', type: PokemonElementType.ice, power: 40, description: '冷たい 粉雪を 相手に 吹きつけて 攻撃する。 こおり状態に することが ある。' },
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
    ],
  },
  corsola: {
    flavorText: 'どんどん 育っては 生えかわる 頭の 先は きれいなので 宝物として 人気が高い。',
    stats: { hp: 65, attack: 55, defense: 95, specialAttack: 65, specialDefense: 95, speed: 35 },
    moves: [
      { name: 'とげキャノン', type: PokemonElementType.normal, power: 20, description: '鋭い ハリを 相手に 発射して 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'おまじない', type: PokemonElementType.normal, power: null, description: '天に むかって おいのりを ささげ 相手の 攻撃を 急所に 当たらなくする。' },
      { name: 'リフレッシュ', type: PokemonElementType.normal, power: null, description: '体を やすめて 自分が おっている 毒 まひ やけどの 状態異常を 治す。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
    ],
  },
  remoraid: {
    flavorText: 'ねらいは 正確。噴き出す 水は １００メートル先で 動く 獲物に かならず 命中する。',
    stats: { hp: 35, attack: 65, defense: 35, specialAttack: 65, specialDefense: 35, speed: 65 },
    moves: [
      { name: 'ロックオン', type: PokemonElementType.normal, power: null, description: '照準を しっかり あわせて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'オーロラビーム', type: PokemonElementType.ice, power: 65, description: 'にじいろの ビームを 相手に 発射して 攻撃する。 攻撃を さげる ことが ある。' },
      { name: 'バブルこうせん', type: PokemonElementType.water, power: 65, description: '泡を 勢いよく 相手に 発射して 攻撃する。 素早さを さげる ことが ある。' },
      { name: 'サイケこうせん', type: PokemonElementType.psychic, power: 65, description: '不思議な 光線を 相手に 発射して 攻撃する。 混乱させることが ある。' },
    ],
  },
  octillery: {
    flavorText: '穴に 入りたがる 性質で 岩穴や ツボを 好み そこから 墨を 噴き出して 攻撃する。',
    stats: { hp: 75, attack: 105, defense: 75, specialAttack: 105, specialDefense: 75, speed: 45 },
    moves: [
      { name: 'オクタンほう', type: PokemonElementType.water, power: 65, description: '相手の 顔などに 墨を 吹きかけて 攻撃する。 命中率を さげることが ある。' },
      { name: 'からみつく', type: PokemonElementType.normal, power: 10, description: '触手や ツタなどを からみつけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'しぼりとる', type: PokemonElementType.normal, power: null, description: '強く 締めあげて 攻撃を する。 相手の ＨＰが 残っているほど 威力は あがる。' },
      { name: 'オーロラビーム', type: PokemonElementType.ice, power: 65, description: 'にじいろの ビームを 相手に 発射して 攻撃する。 攻撃を さげる ことが ある。' },
    ],
  },
  delibird: {
    flavorText: '尻尾で エサを 包んで 運ぶ。 山で 遭難した 人に エサを 分け与える 習性。',
    stats: { hp: 45, attack: 55, defense: 45, specialAttack: 65, specialDefense: 45, speed: 75 },
    moves: [
      { name: 'プレゼント', type: PokemonElementType.normal, power: null, description: 'わなを しかけた 箱を 相手に わたして 攻撃する。ＨＰが 回復して しまうことも ある。' },
    ],
  },
  mantine: {
    flavorText: '泳いで スピードが のってくると 波の上に 飛びだし そのまま １００メートルも 滑空 する。',
    stats: { hp: 85, attack: 40, defense: 70, specialAttack: 80, specialDefense: 140, speed: 70 },
    moves: [
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'アクアリング', type: PokemonElementType.water, power: null, description: '自分の 体の 周りを 水で つくった ベールで おおう。 毎ターン ＨＰを 回復する。' },
      { name: 'ちょうおんぱ', type: PokemonElementType.normal, power: null, description: '特殊な 音波を 体から 発して 相手を 混乱させる。' },
    ],
  },
  skarmory: {
    flavorText: 'いばらの 中に 巣を作る。 トゲで 傷つきながら 育てられた ヒナの 羽は 硬くなる。',
    stats: { hp: 65, attack: 80, defense: 140, specialAttack: 40, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'きんぞくおん', type: PokemonElementType.steel, power: null, description: '金属を こすって でるような いやな 音を 聞かせる。 相手の 特防を がくっと さげる。' },
      { name: 'つつく', type: PokemonElementType.flying, power: 35, description: '鋭く とがった くちばしや つので 相手を 突いて 攻撃する。' },
      { name: 'まきびし', type: PokemonElementType.ground, power: null, description: '相手の 足下に まきびしを しかける。交代で でてきた 相手の ポケモンに ダメージを 与える。' },
    ],
  },
  houndour: {
    flavorText: '夜明けごろ あたり一帯に 響きわたる 不気味な 遠ぼえで 自分たちの 縄張りを アピール。',
    stats: { hp: 45, attack: 60, defense: 30, specialAttack: 80, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'スモッグ', type: PokemonElementType.poison, power: 30, description: '汚れた ガスを 相手に 吹きつけて 攻撃する。 毒状態に することが ある。' },
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'とおぼえ', type: PokemonElementType.normal, power: null, description: '大声で ほえて 気合を 高め 自分の 攻撃を あげる。' },
      { name: 'ふくろだたき', type: PokemonElementType.dark, power: null, description: '味方 全員で 攻撃する。 仲間の ポケモンが 多いほど 技の 攻撃回数が 増える。' },
    ],
  },
  houndoom: {
    flavorText: 'ヘルガーの 不気味な 遠ぼえは 地獄から 死神が 呼ぶ 声と 昔の 人は 想像していた。',
    stats: { hp: 75, attack: 90, defense: 50, specialAttack: 110, specialDefense: 80, speed: 95 },
    moves: [
      { name: 'スモッグ', type: PokemonElementType.poison, power: 30, description: '汚れた ガスを 相手に 吹きつけて 攻撃する。 毒状態に することが ある。' },
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'とおぼえ', type: PokemonElementType.normal, power: null, description: '大声で ほえて 気合を 高め 自分の 攻撃を あげる。' },
      { name: 'ふくろだたき', type: PokemonElementType.dark, power: null, description: '味方 全員で 攻撃する。 仲間の ポケモンが 多いほど 技の 攻撃回数が 増える。' },
    ],
  },
  phanpy: {
    flavorText: '愛情表現で 鼻を ぶつけてくるが 力が あるので 気をつけないと 吹っ飛ばされる。',
    stats: { hp: 90, attack: 60, defense: 60, specialAttack: 40, specialDefense: 40, speed: 40 },
    moves: [
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'たたきつける', type: PokemonElementType.normal, power: 80, description: '長い しっぽや つるなどを 使い 相手を たたきつけて 攻撃する。' },
      { name: 'とっておき', type: PokemonElementType.normal, power: 140, description: '戦闘中に おぼえている 技を すべて 使うと はじめて だせる とっておきの 技。' },
      { name: 'じたばた', type: PokemonElementType.normal, power: null, description: 'じたばた 暴れて 攻撃する。 自分の ＨＰが 少ないほど 技の 威力は あがる。' },
    ],
  },
  kingdra: {
    flavorText: '普段は 海底洞窟に 身を 潜めているらしい。 あくびで 渦潮を 発生させる。',
    stats: { hp: 75, attack: 95, defense: 95, specialAttack: 95, specialDefense: 95, speed: 85 },
    moves: [
      { name: 'えんまく', type: PokemonElementType.normal, power: null, description: '煙や 墨などを 吹きかけて 相手の 命中率を さげる。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'りゅうのまい', type: PokemonElementType.dragon, power: null, description: '神秘的で 力強い 舞を 激しく おどる。自分の 攻撃と 素早さを あげる。' },
      { name: 'たつまき', type: PokemonElementType.dragon, power: 40, description: '竜巻を おこして 相手を まきこみ 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  donphan: {
    flavorText: '鋭く 硬い キバと さらに 頑丈な 皮膚で 体当たりは 家をも 壊すほど。',
    stats: { hp: 90, attack: 120, defense: 120, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'つのでつく', type: PokemonElementType.normal, power: 65, description: '鋭く とがった つので 相手を 攻撃する。' },
      { name: 'マグニチュード', type: PokemonElementType.ground, power: null, description: '地面を 揺らして 自分の 周りに いるものを 攻撃する。 技の 威力は いろいろ 変わる。' },
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'こうそくスピン', type: PokemonElementType.normal, power: 50, description: '回転して 相手を 攻撃する。 しめつける まきつく やどりぎのタネ まきびし なども 吹きとばせる。' },
    ],
  },
  porygon2: {
    flavorText: 'さらに 研究が 進められ 能力が 高まった。ときどき プログラムにない 仕草を 見せる。',
    stats: { hp: 85, attack: 80, defense: 90, specialAttack: 105, specialDefense: 95, speed: 60 },
    moves: [
      { name: 'テクスチャー', type: PokemonElementType.normal, power: null, description: '自分の タイプを おぼえている 技で 一番 上の 技と 同じ タイプに する。' },
      { name: 'テクスチャー２', type: PokemonElementType.normal, power: null, description: '相手が 最後に 使った技に 抵抗できる ように 自分の タイプを 変化させる。' },
      { name: 'ロックオン', type: PokemonElementType.normal, power: null, description: '照準を しっかり あわせて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'トライアタック', type: PokemonElementType.normal, power: 80, description: '３つの 光線で 攻撃する。 まひか やけどか こおり状態の どれかに することが ある。' },
    ],
  },
  stantler: {
    flavorText: 'ツノを 見つめていると 輪っかの 中心に 吸いこまれそうな 不思議な 気分に なってしまう。',
    stats: { hp: 73, attack: 95, defense: 62, specialAttack: 85, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'さきどり', type: PokemonElementType.normal, power: null, description: '威力を あげて 相手が だそうとする 技を 先にだす。 先に だせないと 失敗する。' },
      { name: 'ふみつけ', type: PokemonElementType.normal, power: 65, description: '大きな 足で 相手を 踏みつけて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
    ],
  },
  smeargle: {
    flavorText: '尻尾を 筆のように 使って 縄張りを マークで 描く。 その 種類は ５０００以上。',
    stats: { hp: 55, attack: 20, defense: 35, specialAttack: 20, specialDefense: 45, speed: 75 },
    moves: [
      { name: 'スケッチ', type: PokemonElementType.normal, power: null, description: '相手が 使った 技を 自分の ものに する。 １回 使うと スケッチは 消える。' },
    ],
  },
  tyrogue: {
    flavorText: 'いつでも 元気いっぱい。 強くなるため 負けても 負けても 相手に 立ち向かっていく。',
    stats: { hp: 35, attack: 35, defense: 35, specialAttack: 35, specialDefense: 35, speed: 35 },
    moves: [
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'ねこだまし', type: PokemonElementType.normal, power: 40, description: '先制攻撃で 相手を ひるませる。 戦闘に でたら すぐに ださないと 成功しない。' },
      { name: 'たいあたり', type: PokemonElementType.normal, power: 40, description: '相手に むかって 全身で ぶつかっていき 攻撃する。' },
      { name: 'てだすけ', type: PokemonElementType.normal, power: null, description: '仲間を 助ける。 てだすけ された ポケモンの 技の 威力は いつもより 大きくなる。' },
    ],
  },
  hitmontop: {
    flavorText: 'コマのように 回転しながら 戦う。 遠心力の パワーで 破壊力は １０倍だ。',
    stats: { hp: 50, attack: 95, defense: 95, specialAttack: 35, specialDefense: 110, speed: 70 },
    moves: [
      { name: 'トリプルキック', type: PokemonElementType.fighting, power: 10, description: '３回連続で キックを くりだして 攻撃する。技が 当たるたびに 威力は あがる。' },
      { name: 'まわしげり', type: PokemonElementType.fighting, power: 60, description: '体を 素早く 回転させながら けとばして 攻撃する。 相手を ひるませる ことが ある。' },
      { name: 'こうそくスピン', type: PokemonElementType.normal, power: 50, description: '回転して 相手を 攻撃する。 しめつける まきつく やどりぎのタネ まきびし なども 吹きとばせる。' },
      { name: 'フェイント', type: PokemonElementType.normal, power: 30, description: 'まもるや みきりを している 相手に 攻撃が できる。 守りの 効果を 解除させる。' },
    ],
  },
  smoochum: {
    flavorText: '唇が 一番 敏感。 なんでも まず 唇で 触れて どんなものか 確認する。',
    stats: { hp: 45, attack: 30, defense: 15, specialAttack: 85, specialDefense: 65, speed: 65 },
    moves: [
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
      { name: 'おまじない', type: PokemonElementType.normal, power: null, description: '天に むかって おいのりを ささげ 相手の 攻撃を 急所に 当たらなくする。' },
      { name: 'うたう', type: PokemonElementType.normal, power: null, description: '心地好い きれいな 歌声を 聞かせて 相手を 眠り状態に する。' },
      { name: 'こなゆき', type: PokemonElementType.ice, power: 40, description: '冷たい 粉雪を 相手に 吹きつけて 攻撃する。 こおり状態に することが ある。' },
    ],
  },
  magby: {
    flavorText: '小柄だが 体温は ６００度。 息を 吸ったり 吐いたりするたび 口と 鼻から 火の粉が 漏れる。',
    stats: { hp: 45, attack: 75, defense: 37, specialAttack: 70, specialDefense: 55, speed: 83 },
    moves: [
      { name: 'ふんえん', type: PokemonElementType.fire, power: 80, description: '真っ赤な 炎で 自分の 周りに いるものを 攻撃する。 やけど状態に することが ある。' },
      { name: 'スモッグ', type: PokemonElementType.poison, power: 30, description: '汚れた ガスを 相手に 吹きつけて 攻撃する。 毒状態に することが ある。' },
      { name: 'えんまく', type: PokemonElementType.normal, power: null, description: '煙や 墨などを 吹きかけて 相手の 命中率を さげる。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
    ],
  },
  elekid: {
    flavorText: '両腕を ぐるぐる 振り回して 電気を 発生させる。しかし 作った 電気は ためておけない。',
    stats: { hp: 45, attack: 63, defense: 37, specialAttack: 65, specialDefense: 55, speed: 95 },
    moves: [
      { name: 'でんきショック', type: PokemonElementType.electric, power: 40, description: '電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
      { name: 'ほうでん', type: PokemonElementType.electric, power: 80, description: 'まばゆい 電撃で 自分の 周りに いるものを 攻撃する。 まひ状態に することが ある。' },
      { name: 'でんこうせっか', type: PokemonElementType.normal, power: 40, description: '目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。' },
      { name: 'いやなおと', type: PokemonElementType.normal, power: null, description: 'おもわず 耳を ふさぎたくなる いやなおとを だして 相手の 防御を がくっと さげる。' },
    ],
  },
  miltank: {
    flavorText: '子供が 生まれたときに しぼられた ミルクには いつもより 栄養が たっぷり つまっている。',
    stats: { hp: 95, attack: 80, defense: 105, specialAttack: 40, specialDefense: 70, speed: 100 },
    moves: [
      { name: 'ミルクのみ', type: PokemonElementType.normal, power: null, description: '最大ＨＰの 半分 自分の ＨＰを 回復する。 仲間に ＨＰを わけることも できる。' },
      { name: 'めざましビンタ', type: PokemonElementType.fighting, power: 70, description: '眠り状態の 相手に 大きな ダメージを 与える。 かわりに 相手は 眠りから さめる。' },
      { name: 'ふみつけ', type: PokemonElementType.normal, power: 65, description: '大きな 足で 相手を 踏みつけて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'いやしのすず', type: PokemonElementType.normal, power: null, description: '心地好い 鈴の 音色を 聞かせて 味方 全員の 状態異常を 回復 する。' },
    ],
  },
  blissey: {
    flavorText: 'ハピナスの 産む タマゴには 幸せが つまっていて ひとくち 食べると だれでも 笑顔になれる。',
    stats: { hp: 255, attack: 10, defense: 10, specialAttack: 75, specialDefense: 135, speed: 55 },
    moves: [
      { name: 'タマゴばくだん', type: PokemonElementType.normal, power: 100, description: '大きな タマゴを 力いっぱい 相手に 投げつけて 攻撃する。' },
      { name: 'タマゴうみ', type: PokemonElementType.normal, power: null, description: '最大ＨＰの 半分 自分の ＨＰを 回復する。 仲間に ＨＰを わけることも できる。' },
      { name: 'ちいさくなる', type: PokemonElementType.normal, power: null, description: '体を ちぢめて 小さく みせて 自分の 回避率を ぐーんと あげる。' },
      { name: 'いやしのねがい', type: PokemonElementType.psychic, power: null, description: '自分は ひんしに なるが 控えから でてくる ポケモンの 状態異常と ＨＰを 回復する。' },
    ],
  },
  raikou: {
    flavorText: '雨雲を 背負っているので どんなときでも 雷を 出せる。 雷とともに 落ちてきたという。',
    stats: { hp: 90, attack: 85, defense: 75, specialAttack: 115, specialDefense: 100, speed: 115 },
    moves: [
      { name: 'じんつうりき', type: PokemonElementType.psychic, power: 80, description: 'みえない 不思議な 力を 送って 攻撃する。 相手を ひるませることが ある。' },
      { name: 'スパーク', type: PokemonElementType.electric, power: 65, description: '電気を まとい 相手に 突進して 攻撃する。 まひ状態に することが ある。' },
      { name: 'でんきショック', type: PokemonElementType.electric, power: 40, description: '電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
      { name: 'ほうでん', type: PokemonElementType.electric, power: 80, description: 'まばゆい 電撃で 自分の 周りに いるものを 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  entei: {
    flavorText: '新しい 火山が できるたび 生まれてくると 伝えられる 大地を 駆け巡る ポケモン。',
    stats: { hp: 115, attack: 115, defense: 85, specialAttack: 90, specialDefense: 75, speed: 100 },
    moves: [
      { name: 'ふんか', type: PokemonElementType.fire, power: 150, description: '怒りを 爆発させて 相手を 攻撃する。自分の ＨＰが 少ないほど 技の 威力は さがる。' },
      { name: 'ふんえん', type: PokemonElementType.fire, power: 80, description: '真っ赤な 炎で 自分の 周りに いるものを 攻撃する。 やけど状態に することが ある。' },
      { name: 'ふみつけ', type: PokemonElementType.normal, power: 65, description: '大きな 足で 相手を 踏みつけて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'じんつうりき', type: PokemonElementType.psychic, power: 80, description: 'みえない 不思議な 力を 送って 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  suicune: {
    flavorText: '世界中を 駆け巡り 汚れた 水を 清めている。 北風と ともに 走り去る。',
    stats: { hp: 100, attack: 75, defense: 115, specialAttack: 90, specialDefense: 115, speed: 85 },
    moves: [
      { name: 'オーロラビーム', type: PokemonElementType.ice, power: 65, description: 'にじいろの ビームを 相手に 発射して 攻撃する。 攻撃を さげる ことが ある。' },
      { name: 'かぜおこし', type: PokemonElementType.flying, power: 40, description: '翼で おこした 激しい 風を 相手に ぶつけて 攻撃する。' },
      { name: 'ミラーコート', type: PokemonElementType.psychic, power: null, description: '相手から 受けた 特殊攻撃の ダメージを ２倍に して その相手に 返す。' },
      { name: 'じんつうりき', type: PokemonElementType.psychic, power: 80, description: 'みえない 不思議な 力を 送って 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  larvitar: {
    flavorText: '土を 食べて 生きている。 大きな 山ひとつ 食べ終わると 成長のため 眠りはじめる。',
    stats: { hp: 50, attack: 64, defense: 50, specialAttack: 45, specialDefense: 50, speed: 41 },
    moves: [
      { name: 'あばれる', type: PokemonElementType.normal, power: 120, description: '２ー３ターンの あいだ 暴れまくって 相手を 攻撃する。 暴れたあとは 混乱する。' },
      { name: 'あくのはどう', type: PokemonElementType.dark, power: 80, description: '体から 悪意に みちた 恐ろしい オーラを 発する。 相手を ひるませることが ある。' },
      { name: 'いやなおと', type: PokemonElementType.normal, power: null, description: 'おもわず 耳を ふさぎたくなる いやなおとを だして 相手の 防御を がくっと さげる。' },
      { name: 'かみつく', type: PokemonElementType.dark, power: 60, description: '鋭く とがった 歯で かみついて 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  pupitar: {
    flavorText: '岩盤のような 硬い 体。 圧縮した ガスを 噴射して まるで ロケットのように 飛び出す。',
    stats: { hp: 70, attack: 84, defense: 70, specialAttack: 65, specialDefense: 70, speed: 51 },
    moves: [
      { name: 'あばれる', type: PokemonElementType.normal, power: 120, description: '２ー３ターンの あいだ 暴れまくって 相手を 攻撃する。 暴れたあとは 混乱する。' },
      { name: 'あくのはどう', type: PokemonElementType.dark, power: 80, description: '体から 悪意に みちた 恐ろしい オーラを 発する。 相手を ひるませることが ある。' },
      { name: 'いやなおと', type: PokemonElementType.normal, power: null, description: 'おもわず 耳を ふさぎたくなる いやなおとを だして 相手の 防御を がくっと さげる。' },
      { name: 'かみつく', type: PokemonElementType.dark, power: 60, description: '鋭く とがった 歯で かみついて 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  tyranitar: {
    flavorText: '片腕を 動かしただけで 山を崩し 地響きを 起こす とてつもない パワーを 秘める。',
    stats: { hp: 100, attack: 134, defense: 110, specialAttack: 95, specialDefense: 100, speed: 61 },
    moves: [
      { name: 'かみなりのキバ', type: PokemonElementType.electric, power: 65, description: '電気を ためた キバで かみつく。 相手を ひるませたり まひ状態に することが ある。' },
      { name: 'こおりのキバ', type: PokemonElementType.ice, power: 65, description: '冷気を ひめた キバで かみつく。 相手を ひるませたり こおり状態に することが ある。' },
      { name: 'あばれる', type: PokemonElementType.normal, power: 120, description: '２ー３ターンの あいだ 暴れまくって 相手を 攻撃する。 暴れたあとは 混乱する。' },
      { name: 'ほのおのキバ', type: PokemonElementType.fire, power: 65, description: '炎を まとった キバで かみつく。 相手を ひるませたり やけど状態に することが ある。' },
    ],
  },
  lugia: {
    flavorText: '深い 海溝の 底で 眠る。 ルギアが 羽ばたくと ４０日 嵐が 続くと 言われている。',
    stats: { hp: 106, attack: 90, defense: 130, specialAttack: 90, specialDefense: 154, speed: 110 },
    moves: [
      { name: 'エアロブラスト', type: PokemonElementType.flying, power: 100, description: '空気の 渦を 発射して 攻撃する。 急所に 当たりやすい。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ドラゴンダイブ', type: PokemonElementType.dragon, power: 100, description: 'すさまじい 殺気で 威圧しながら 体当たりする。 相手を ひるませることが ある。' },
      { name: 'かぜおこし', type: PokemonElementType.flying, power: 40, description: '翼で おこした 激しい 風を 相手に ぶつけて 攻撃する。' },
    ],
  },
  hooh: {
    flavorText: '体は 七色に 輝き 飛んだあとは 虹が できると 神話に 残されている ポケモン。',
    stats: { hp: 106, attack: 130, defense: 90, specialAttack: 110, specialDefense: 154, speed: 90 },
    moves: [
      { name: 'せいなるほのお', type: PokemonElementType.fire, power: 100, description: '神秘の 炎で 相手を 焼きつくして 攻撃する。 やけど状態に することが ある。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'かぜおこし', type: PokemonElementType.flying, power: 40, description: '翼で おこした 激しい 風を 相手に ぶつけて 攻撃する。' },
      { name: 'ふきとばし', type: PokemonElementType.normal, power: null, description: '相手を 吹きとばして 控えの ポケモンを ひきずりだす。 野生の 場合は 戦闘が 終わる。' },
    ],
  },
  celebi: {
    flavorText: '時間を超えて あちこち さまよう。 セレビィが 姿を 現した 森は 草木が 生い茂るという。',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'かいふくふうじ', type: PokemonElementType.psychic, power: null, description: '５ターンの あいだ 技や 特性や 持っている 道具によって ＨＰを 回復 できなくする。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
      { name: 'いやしのねがい', type: PokemonElementType.psychic, power: null, description: '自分は ひんしに なるが 控えから でてくる ポケモンの 状態異常と ＨＰを 回復する。' },
      { name: 'じこさいせい', type: PokemonElementType.normal, power: null, description: '細胞を 再生させて 自分の 最大ＨＰの 半分の ＨＰを 回復する。' },
    ],
  },
  treecko: {
    flavorText: '垂直の 壁も すいすい 登る。 尻尾で 空気の 湿度を 感じ 明日の 天気を 当てる。',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 65, specialDefense: 55, speed: 70 },
    moves: [
      { name: 'すいとる', type: PokemonElementType.grass, power: 20, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'メガドレイン', type: PokemonElementType.grass, power: 40, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'はたく', type: PokemonElementType.normal, power: 40, description: '長い しっぽや 手などを 使って 相手を はたいて 攻撃する。' },
      { name: 'たたきつける', type: PokemonElementType.normal, power: 80, description: '長い しっぽや つるなどを 使い 相手を たたきつけて 攻撃する。' },
    ],
  },
  grovyle: {
    flavorText: '発達した 太ももの 筋肉が 驚異的な 瞬発力と 跳躍力を 生み出すぞ。',
    stats: { hp: 50, attack: 65, defense: 45, specialAttack: 85, specialDefense: 65, speed: 95 },
    moves: [
      { name: 'リーフブレード', type: PokemonElementType.grass, power: 90, description: 'はっぱを 剣のように あやつり 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'すいとる', type: PokemonElementType.grass, power: 20, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'はたく', type: PokemonElementType.normal, power: 40, description: '長い しっぽや 手などを 使って 相手を はたいて 攻撃する。' },
      { name: 'たたきつける', type: PokemonElementType.normal, power: 80, description: '長い しっぽや つるなどを 使い 相手を たたきつけて 攻撃する。' },
    ],
  },
  sceptile: {
    flavorText: '腕に 生えた 葉っぱは 大木も スッパリ 切り倒す 切れ味。 密林の 戦いでは 無敵。',
    stats: { hp: 70, attack: 85, defense: 65, specialAttack: 105, specialDefense: 85, speed: 120 },
    moves: [
      { name: 'リーフブレード', type: PokemonElementType.grass, power: 90, description: 'はっぱを 剣のように あやつり 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'すいとる', type: PokemonElementType.grass, power: 20, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'はたく', type: PokemonElementType.normal, power: 40, description: '長い しっぽや 手などを 使って 相手を はたいて 攻撃する。' },
      { name: 'たたきつける', type: PokemonElementType.normal, power: 80, description: '長い しっぽや つるなどを 使い 相手を たたきつけて 攻撃する。' },
    ],
  },
  torchic: {
    flavorText: 'お腹に 炎袋を 持つ。 抱きしめると ぽかぽか 温かい。 命ある 限り 燃え続ける。',
    stats: { hp: 45, attack: 60, defense: 40, specialAttack: 70, specialDefense: 50, speed: 45 },
    moves: [
      { name: 'オウムがえし', type: PokemonElementType.flying, power: null, description: '相手の 使った 技を まねして 自分も 同じ技を 使う。' },
      { name: 'つつく', type: PokemonElementType.flying, power: 35, description: '鋭く とがった くちばしや つので 相手を 突いて 攻撃する。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'ほのおのうず', type: PokemonElementType.fire, power: 35, description: '激しく 渦をまく 炎の中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
    ],
  },
  combusken: {
    flavorText: '１秒間に キックを １０発 繰り出す 足技の 持ち主。 鋭い 鳴き声で 威嚇する。',
    stats: { hp: 60, attack: 85, defense: 60, specialAttack: 85, specialDefense: 60, speed: 55 },
    moves: [
      { name: 'スカイアッパー', type: PokemonElementType.fighting, power: 85, description: '空に むかうような 高い アッパーで 相手を 突きあげて 攻撃する。' },
      { name: 'オウムがえし', type: PokemonElementType.flying, power: null, description: '相手の 使った 技を まねして 自分も 同じ技を 使う。' },
      { name: 'にどげり', type: PokemonElementType.fighting, power: 30, description: '２本の 足で 相手を けとばして 攻撃する。２回連続で ダメージを 与える。' },
      { name: 'つつく', type: PokemonElementType.flying, power: 35, description: '鋭く とがった くちばしや つので 相手を 突いて 攻撃する。' },
    ],
  },
  blaziken: {
    flavorText: '３０階建ての ビルを ジャンプで 跳び越す 跳躍力。炎の パンチが 相手を 焼きつくす。',
    stats: { hp: 80, attack: 120, defense: 70, specialAttack: 110, specialDefense: 70, speed: 80 },
    moves: [
      { name: 'スカイアッパー', type: PokemonElementType.fighting, power: 85, description: '空に むかうような 高い アッパーで 相手を 突きあげて 攻撃する。' },
      { name: 'ブレイズキック', type: PokemonElementType.fire, power: 85, description: '攻撃した 相手を やけど状態に することが ある。 急所にも 当たりやすい。' },
      { name: 'オウムがえし', type: PokemonElementType.flying, power: null, description: '相手の 使った 技を まねして 自分も 同じ技を 使う。' },
      { name: 'にどげり', type: PokemonElementType.fighting, power: 30, description: '２本の 足で 相手を けとばして 攻撃する。２回連続で ダメージを 与える。' },
    ],
  },
  marshtomp: {
    flavorText: '地上でも 生活できる ように 体の 表面を 薄い 粘膜が 包んでいる。 潮の 引いた 海岸で 泥遊びを する。',
    stats: { hp: 70, attack: 85, defense: 70, specialAttack: 60, specialDefense: 70, speed: 50 },
    moves: [
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'だくりゅう', type: PokemonElementType.water, power: 90, description: '濁った 水を 相手に 発射して 攻撃する。 命中率を さげることが ある。' },
      { name: 'みずでっぽう', type: PokemonElementType.water, power: 40, description: '水を 勢いよく 相手に 発射して 攻撃する。' },
    ],
  },
  mudkip: {
    flavorText: '大きな 尾びれで 水を かけば ぐんぐん スピードが 上がる。 小さい 体でも 力持ち。',
    stats: { hp: 50, attack: 70, defense: 50, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'みずでっぽう', type: PokemonElementType.water, power: 40, description: '水を 勢いよく 相手に 発射して 攻撃する。' },
      { name: 'うずしお', type: PokemonElementType.water, power: 35, description: '激しく 渦をまく 水の中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
    ],
  },
  swampert: {
    flavorText: '岩の ように 硬い 腕を 一振り するだけで 巨大な 岩を コナゴナに 砕くぞ。',
    stats: { hp: 100, attack: 110, defense: 90, specialAttack: 85, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'だくりゅう', type: PokemonElementType.water, power: 90, description: '濁った 水を 相手に 発射して 攻撃する。 命中率を さげることが ある。' },
      { name: 'みずでっぽう', type: PokemonElementType.water, power: 40, description: '水を 勢いよく 相手に 発射して 攻撃する。' },
    ],
  },
  poochyena: {
    flavorText: 'しつこい 性格の ポケモン。 目をつけた 獲物が ヘトヘトに 疲れるまで 追いかけ回す。',
    stats: { hp: 35, attack: 55, defense: 35, specialAttack: 30, specialDefense: 30, speed: 35 },
    moves: [
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'とおぼえ', type: PokemonElementType.normal, power: null, description: '大声で ほえて 気合を 高め 自分の 攻撃を あげる。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
      { name: 'かみつく', type: PokemonElementType.dark, power: 60, description: '鋭く とがった 歯で かみついて 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  mightyena: {
    flavorText: '優れた トレーナーの 命令には 絶対に 服従。大昔に 群れで 行動していた 名残り。',
    stats: { hp: 70, attack: 90, defense: 70, specialAttack: 60, specialDefense: 60, speed: 70 },
    moves: [
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'とおぼえ', type: PokemonElementType.normal, power: null, description: '大声で ほえて 気合を 高め 自分の 攻撃を あげる。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
      { name: 'かみつく', type: PokemonElementType.dark, power: 60, description: '鋭く とがった 歯で かみついて 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  zigzagoon: {
    flavorText: 'ジグザグに 歩いて 草陰や 地面に 埋まっている 宝物を 見つけるのが 得意な ポケモン。',
    stats: { hp: 38, attack: 30, defense: 41, specialAttack: 30, specialDefense: 41, speed: 60 },
    moves: [
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'はらだいこ', type: PokemonElementType.normal, power: null, description: '自分の ＨＰを 最大ＨＰの 半分 減らして 自分の 攻撃を 最大に あげる。' },
      { name: 'ミサイルばり', type: PokemonElementType.bug, power: 25, description: '鋭い ハリを 相手に 発射して 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  linoone: {
    flavorText: 'まっすぐ 走る スピードは 時速１００キロを 軽く 超える。 曲がった 道は とても 苦手。',
    stats: { hp: 78, attack: 70, defense: 61, specialAttack: 50, specialDefense: 61, speed: 100 },
    moves: [
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'はらだいこ', type: PokemonElementType.normal, power: null, description: '自分の ＨＰを 最大ＨＰの 半分 減らして 自分の 攻撃を 最大に あげる。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  wurmple: {
    flavorText: '葉っぱが 大好物。 ムックルに 襲われたときは お尻の トゲで 撃退する。',
    stats: { hp: 45, attack: 45, defense: 35, specialAttack: 20, specialDefense: 30, speed: 20 },
    moves: [
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'いとをはく', type: PokemonElementType.bug, power: null, description: '口から 吹きだした 糸を まきつけて 相手の 素早さを がくっと さげる。' },
      { name: 'たいあたり', type: PokemonElementType.normal, power: 40, description: '相手に むかって 全身で ぶつかっていき 攻撃する。' },
    ],
  },
  silcoon: {
    flavorText: '糸を 木の枝に 巻きつけている。 糸についた 雨水を 飲みながら 進化の ときを 待っている。',
    stats: { hp: 50, attack: 35, defense: 55, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
    ],
  },
  beautifly: {
    flavorText: '色 鮮やかな 羽の 模様が 特徴。 細い 口を 伸ばして 花の 甘い ミツを 吸い取る。',
    stats: { hp: 60, attack: 70, defense: 50, specialAttack: 100, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'あさのひざし', type: PokemonElementType.normal, power: null, description: '自分の ＨＰを 回復する。 天気に よって 回復の 量が 変化する。' },
      { name: 'ぎんいろのかぜ', type: PokemonElementType.bug, power: 60, description: '風に りんぷんを のせて 相手を 攻撃する。自分の すべての 能力が あがることが ある。' },
      { name: 'しびれごな', type: PokemonElementType.grass, power: null, description: 'しびれる 粉を たくさん ふりまいて 相手を まひ状態に する。' },
      { name: 'かぜおこし', type: PokemonElementType.flying, power: 40, description: '翼で おこした 激しい 風を 相手に ぶつけて 攻撃する。' },
    ],
  },
  cascoon: {
    flavorText: 'やわらかい 糸で できた 体は 時間と ともに 硬くなっていく。 ひび割れると 進化は 間近だ。',
    stats: { hp: 50, attack: 35, defense: 55, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
    ],
  },
  dustox: {
    flavorText: '夜行性の ポケモン。 明かりに 誘われた ドクケイルが 街路樹の 葉を 食い散らかす。',
    stats: { hp: 60, attack: 50, defense: 70, specialAttack: 50, specialDefense: 90, speed: 65 },
    moves: [
      { name: 'つきのひかり', type: PokemonElementType.normal, power: null, description: '自分の ＨＰを 回復する。 天気に よって 回復の 量が 変化する。' },
      { name: 'ぎんいろのかぜ', type: PokemonElementType.bug, power: 60, description: '風に りんぷんを のせて 相手を 攻撃する。自分の すべての 能力が あがることが ある。' },
      { name: 'かぜおこし', type: PokemonElementType.flying, power: 40, description: '翼で おこした 激しい 風を 相手に ぶつけて 攻撃する。' },
      { name: 'ふきとばし', type: PokemonElementType.normal, power: null, description: '相手を 吹きとばして 控えの ポケモンを ひきずりだす。 野生の 場合は 戦闘が 終わる。' },
    ],
  },
  lotad: {
    flavorText: '水草に そっくりな ポケモン。 泳げない ポケモンを 葉っぱに 乗せて 向こう岸まで 運ぶ。',
    stats: { hp: 40, attack: 30, defense: 30, specialAttack: 40, specialDefense: 50, speed: 30 },
    moves: [
      { name: 'しろいきり', type: PokemonElementType.ice, power: null, description: '白い霧で 体を おおう。 ５ターンの あいだ 相手に 能力を さげられなく なる。' },
      { name: 'すいとる', type: PokemonElementType.grass, power: 20, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'メガドレイン', type: PokemonElementType.grass, power: 40, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'しぜんのちから', type: PokemonElementType.normal, power: null, description: '自然の 力で 攻撃する。 使う 場所で でてくる 技が 変化する。' },
    ],
  },
  lombre: {
    flavorText: '日当たりの 良い 水辺に 住む。 昼間は 水草の ベッドで 眠り 日が 暮れると 動き出す。',
    stats: { hp: 60, attack: 50, defense: 50, specialAttack: 60, specialDefense: 70, speed: 50 },
    moves: [
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
      { name: 'すいとる', type: PokemonElementType.grass, power: 20, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'ねこだまし', type: PokemonElementType.normal, power: 40, description: '先制攻撃で 相手を ひるませる。 戦闘に でたら すぐに ださないと 成功しない。' },
    ],
  },
  ludicolo: {
    flavorText: '陽気な 音楽を 聴くと 体中に 力が みなぎり 踊らずには いられなくなるのだ。',
    stats: { hp: 80, attack: 70, defense: 70, specialAttack: 90, specialDefense: 100, speed: 70 },
    moves: [
      { name: 'すいとる', type: PokemonElementType.grass, power: 20, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'しぜんのちから', type: PokemonElementType.normal, power: null, description: '自然の 力で 攻撃する。 使う 場所で でてくる 技が 変化する。' },
      { name: 'おどろかす', type: PokemonElementType.ghost, power: 30, description: '大きな 声などで 不意に 驚かして 攻撃する。 相手を ひるませることが ある。' },
      { name: 'なきごえ', type: PokemonElementType.normal, power: null, description: 'かわいい なきごえを 聞かせて 気を ひき 油断を させて 相手の 攻撃を さげる。' },
    ],
  },
  seedot: {
    flavorText: '頭の 先を 枝に くっつけて ぶら下がる。強風に あおられ 落ちてしまう ことも あるのだ。',
    stats: { hp: 40, attack: 40, defense: 50, specialAttack: 30, specialDefense: 30, speed: 30 },
    moves: [
      { name: 'せいちょう', type: PokemonElementType.normal, power: null, description: '体を 一気に 大きく 生長させて 攻撃と 特攻を あげる。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
      { name: 'こうごうせい', type: PokemonElementType.grass, power: null, description: '自分の ＨＰを 回復する。 天気に よって 回復の 量が 変化する。' },
      { name: 'だいばくはつ', type: PokemonElementType.normal, power: 250, description: '大きな 爆発で 自分の 周りに いるものを 攻撃する。 使ったあとに ひんしに なる。' },
    ],
  },
  nuzleaf: {
    flavorText: 'コノハナが 奏でる 草笛の 音色は 人を 不安にさせる。 森の 奥に 住んでいる。',
    stats: { hp: 70, attack: 70, defense: 40, specialAttack: 60, specialDefense: 40, speed: 60 },
    moves: [
      { name: 'かまいたち', type: PokemonElementType.normal, power: 80, description: '風の 刃を つくり ２ターン目に 相手を 攻撃する。 急所に 当たりやすい。' },
      { name: 'じんつうりき', type: PokemonElementType.psychic, power: 80, description: 'みえない 不思議な 力を 送って 攻撃する。 相手を ひるませることが ある。' },
      { name: 'せいちょう', type: PokemonElementType.normal, power: null, description: '体を 一気に 大きく 生長させて 攻撃と 特攻を あげる。' },
      { name: 'ねこだまし', type: PokemonElementType.normal, power: 40, description: '先制攻撃で 相手を ひるませる。 戦闘に でたら すぐに ださないと 成功しない。' },
    ],
  },
  shiftry: {
    flavorText: '森の 神様と 恐れられていた ポケモン。相手の 考えを 読み 先回りする 能力を 持つ。',
    stats: { hp: 90, attack: 100, defense: 60, specialAttack: 90, specialDefense: 60, speed: 80 },
    moves: [
      { name: 'せいちょう', type: PokemonElementType.normal, power: null, description: '体を 一気に 大きく 生長させて 攻撃と 特攻を あげる。' },
      { name: 'はたく', type: PokemonElementType.normal, power: 40, description: '長い しっぽや 手などを 使って 相手を はたいて 攻撃する。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
      { name: 'しぜんのちから', type: PokemonElementType.normal, power: null, description: '自然の 力で 攻撃する。 使う 場所で でてくる 技が 変化する。' },
    ],
  },
  taillow: {
    flavorText: '強い 相手にも 勇敢に 立ち向かう 根性の 持ち主。 暖かい 土地を 目指して 飛ぶ。',
    stats: { hp: 40, attack: 55, defense: 30, specialAttack: 30, specialDefense: 30, speed: 85 },
    moves: [
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'つつく', type: PokemonElementType.flying, power: 35, description: '鋭く とがった くちばしや つので 相手を 突いて 攻撃する。' },
      { name: 'きあいだめ', type: PokemonElementType.normal, power: null, description: '深く 息を 吸い 気合を こめる。 自分の 攻撃が 急所に 当たりやすくなる。' },
      { name: 'でんこうせっか', type: PokemonElementType.normal, power: 40, description: '目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。' },
    ],
  },
  swellow: {
    flavorText: '２本の 尾羽が ピンと 立って いれば 健康な 証拠。 優雅に 大空を 飛び回る。',
    stats: { hp: 60, attack: 85, defense: 60, specialAttack: 75, specialDefense: 50, speed: 125 },
    moves: [
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'つつく', type: PokemonElementType.flying, power: 35, description: '鋭く とがった くちばしや つので 相手を 突いて 攻撃する。' },
      { name: 'きあいだめ', type: PokemonElementType.normal, power: null, description: '深く 息を 吸い 気合を こめる。 自分の 攻撃が 急所に 当たりやすくなる。' },
      { name: 'でんこうせっか', type: PokemonElementType.normal, power: 40, description: '目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。' },
    ],
  },
  wingull: {
    flavorText: '長い 翼で 海風を 受けて グライダーのように 滑空する。 休むときは 翼を 折り畳む。',
    stats: { hp: 40, attack: 30, defense: 30, specialAttack: 55, specialDefense: 30, speed: 85 },
    moves: [
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'しろいきり', type: PokemonElementType.ice, power: null, description: '白い霧で 体を おおう。 ５ターンの あいだ 相手に 能力を さげられなく なる。' },
      { name: 'ちょうおんぱ', type: PokemonElementType.normal, power: null, description: '特殊な 音波を 体から 発して 相手を 混乱させる。' },
      { name: 'おいうち', type: PokemonElementType.dark, power: 40, description: '相手 ポケモンが 入れ替わるときに 技を だしていると 倍の 威力で 攻撃できる。' },
    ],
  },
  pelipper: {
    flavorText: '大きな クチバシを 海に 入れて ひとすくいすると エサが たくさん 入っているという 寸法だ。',
    stats: { hp: 60, attack: 50, defense: 100, specialAttack: 95, specialDefense: 70, speed: 65 },
    moves: [
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
      { name: 'はきだす', type: PokemonElementType.normal, power: null, description: '蓄えた 力を 相手に ぶつけて 攻撃する。 蓄えているほど 威力が あがる。' },
      { name: 'のみこむ', type: PokemonElementType.normal, power: null, description: '蓄えた 力を のみこんで 自分の ＨＰを 回復する。 蓄えているほど 回復する。' },
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
    ],
  },
  ralts: {
    flavorText: '赤いツノで 人や ポケモンの 温かな 気持ちを キャッチすると 全身が ほのかに 熱くなる。',
    stats: { hp: 28, attack: 25, defense: 25, specialAttack: 45, specialDefense: 35, speed: 40 },
    moves: [
      { name: 'テレポート', type: PokemonElementType.psychic, power: null, description: '野生ポケモンとの 戦闘を やめる。 最後に はいった ポケセンの ある 街にも 行ける。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
      { name: 'ねんりき', type: PokemonElementType.psychic, power: 50, description: '弱い 念力を 相手に 送って 攻撃する。 相手を 混乱させることが ある。' },
      { name: 'みらいよち', type: PokemonElementType.psychic, power: 120, description: '技を 使った ２ターン後に 相手に 念力の 塊を 送って 攻撃する。' },
    ],
  },
  kirlia: {
    flavorText: 'トレーナーの 明るい 気持ちが サイコパワーの 源。楽しい 気分に なると クルクル 踊る。',
    stats: { hp: 38, attack: 35, defense: 35, specialAttack: 65, specialDefense: 55, speed: 50 },
    moves: [
      { name: 'テレポート', type: PokemonElementType.psychic, power: null, description: '野生ポケモンとの 戦闘を やめる。 最後に はいった ポケセンの ある 街にも 行ける。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
      { name: 'ねんりき', type: PokemonElementType.psychic, power: 50, description: '弱い 念力を 相手に 送って 攻撃する。 相手を 混乱させることが ある。' },
      { name: 'みらいよち', type: PokemonElementType.psychic, power: 120, description: '技を 使った ２ターン後に 相手に 念力の 塊を 送って 攻撃する。' },
    ],
  },
  gardevoir: {
    flavorText: 'トレーナーを 守るためなら サイコパワーを 使いきり 小さな ブラックホールを 作り出す。',
    stats: { hp: 68, attack: 65, defense: 65, specialAttack: 125, specialDefense: 115, speed: 80 },
    moves: [
      { name: 'テレポート', type: PokemonElementType.psychic, power: null, description: '野生ポケモンとの 戦闘を やめる。 最後に はいった ポケセンの ある 街にも 行ける。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
      { name: 'ねんりき', type: PokemonElementType.psychic, power: 50, description: '弱い 念力を 相手に 送って 攻撃する。 相手を 混乱させることが ある。' },
      { name: 'みらいよち', type: PokemonElementType.psychic, power: 120, description: '技を 使った ２ターン後に 相手に 念力の 塊を 送って 攻撃する。' },
    ],
  },
  surskit: {
    flavorText: '普段は 池に 住んでいるが 夕立の 後には 街中の 水たまりに 姿を 現す。',
    stats: { hp: 40, attack: 30, defense: 32, specialAttack: 50, specialDefense: 52, speed: 65 },
    moves: [
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'しろいきり', type: PokemonElementType.ice, power: null, description: '白い霧で 体を おおう。 ５ターンの あいだ 相手に 能力を さげられなく なる。' },
      { name: 'あまいかおり', type: PokemonElementType.normal, power: null, description: '香りで 相手の 回避率を がくっと さげる。草むら などで 使うと ポケモンが よってくる。' },
    ],
  },
  masquerain: {
    flavorText: '目玉模様の 触角を 持つ。 ４枚の 羽で 浮かび上がり 前後左右に 動くことができる。',
    stats: { hp: 70, attack: 60, defense: 62, specialAttack: 100, specialDefense: 82, speed: 80 },
    moves: [
      { name: 'ぎんいろのかぜ', type: PokemonElementType.bug, power: 60, description: '風に りんぷんを のせて 相手を 攻撃する。自分の すべての 能力が あがることが ある。' },
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
      { name: 'しびれごな', type: PokemonElementType.grass, power: null, description: 'しびれる 粉を たくさん ふりまいて 相手を まひ状態に する。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
    ],
  },
  shroomish: {
    flavorText: '湿った 場所を 好み 昼間は 森の 木陰で じっと している。 頭から 毒の 粉を 出す。',
    stats: { hp: 60, attack: 40, defense: 60, specialAttack: 40, specialDefense: 60, speed: 35 },
    moves: [
      { name: 'キノコのほうし', type: PokemonElementType.grass, power: null, description: '催眠効果の ある 胞子を パラパラと ふりまき 相手を 眠り状態に する。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
      { name: 'しびれごな', type: PokemonElementType.grass, power: null, description: 'しびれる 粉を たくさん ふりまいて 相手を まひ状態に する。' },
      { name: 'せいちょう', type: PokemonElementType.normal, power: null, description: '体を 一気に 大きく 生長させて 攻撃と 特攻を あげる。' },
    ],
  },
  breloom: {
    flavorText: '短い 腕は パンチを 出すとき グーンと 伸びる。プロボクサー 顔負けの テクニックを 持つ。',
    stats: { hp: 60, attack: 130, defense: 80, specialAttack: 60, specialDefense: 60, speed: 70 },
    moves: [
      { name: 'スカイアッパー', type: PokemonElementType.fighting, power: 85, description: '空に むかうような 高い アッパーで 相手を 突きあげて 攻撃する。' },
      { name: 'マッハパンチ', type: PokemonElementType.fighting, power: 40, description: '目にも 留まらぬ ものすごい 速さで パンチを くりだす。 必ず 先制攻撃 できる。' },
      { name: 'こころのめ', type: PokemonElementType.normal, power: null, description: '相手の 動きを 心で 感じて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'しびれごな', type: PokemonElementType.grass, power: null, description: 'しびれる 粉を たくさん ふりまいて 相手を まひ状態に する。' },
    ],
  },
  nincada: {
    flavorText: '長い あいだ 地中で 暮らして いたため 目は ほとんど 見えない。 触覚で 様子を 探る。',
    stats: { hp: 31, attack: 45, defense: 90, specialAttack: 30, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'こころのめ', type: PokemonElementType.normal, power: null, description: '相手の 動きを 心で 感じて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'きゅうけつ', type: PokemonElementType.bug, power: 80, description: '血を 吸い取って 相手を 攻撃する。与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
    ],
  },
  slakoth: {
    flavorText: 'ナマケロの 怠けた 様子は 見ている 人の 怠け心を 存分に 刺激するのだ。',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 35, specialDefense: 35, speed: 30 },
    moves: [
      { name: 'なまける', type: PokemonElementType.normal, power: null, description: '怠けて やすむ。 自分の ＨＰを 最大ＨＰの 半分 回復する。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
      { name: 'あくび', type: PokemonElementType.normal, power: null, description: '大きな あくびで 眠気を 誘う。 次の ターンに 相手を 眠り状態に する。' },
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
    ],
  },
  vigoroth: {
    flavorText: '心臓の 鼓動が 速く 全身の 血が たぎっているため １秒も じっと していられない。',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 55, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
      { name: 'きりさく', type: PokemonElementType.normal, power: 70, description: 'ツメや カマなどで 相手を 切り裂いて 攻撃する。 急所に 当たりやすい。' },
      { name: 'きあいだめ', type: PokemonElementType.normal, power: null, description: '深く 息を 吸い 気合を こめる。 自分の 攻撃が 急所に 当たりやすくなる。' },
    ],
  },
  slaking: {
    flavorText: '世界一 ぐうたらな ポケモン。 手が 届く 範囲の エサを 食べつくすと 居場所を 替える。',
    stats: { hp: 150, attack: 160, defense: 100, specialAttack: 95, specialDefense: 65, speed: 100 },
    moves: [
      { name: 'なまける', type: PokemonElementType.normal, power: null, description: '怠けて やすむ。 自分の ＨＰを 最大ＨＰの 半分 回復する。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
      { name: 'あくび', type: PokemonElementType.normal, power: null, description: '大きな あくびで 眠気を 誘う。 次の ターンに 相手を 眠り状態に する。' },
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
    ],
  },
  ninjask: {
    flavorText: '鳴き声を 聞き続けると 頭痛が 治まらなくなる。 見えない ほどの 速さで 動く。',
    stats: { hp: 61, attack: 90, defense: 45, specialAttack: 50, specialDefense: 50, speed: 160 },
    moves: [
      { name: 'こころのめ', type: PokemonElementType.normal, power: null, description: '相手の 動きを 心で 感じて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'きゅうけつ', type: PokemonElementType.bug, power: 80, description: '血を 吸い取って 相手を 攻撃する。与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
    ],
  },
  shedinja: {
    flavorText: '抜け殻が 魂を 宿した。 背中の すきまから のぞきこむと 魂を 吸われてしまうらしい。',
    stats: { hp: 1, attack: 90, defense: 45, specialAttack: 30, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'おんねん', type: PokemonElementType.ghost, power: null, description: '相手の 技で ひんしに されたとき おんねんを かけて その技の ＰＰを ０に する。' },
      { name: 'こころのめ', type: PokemonElementType.normal, power: null, description: '相手の 動きを 心で 感じて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'きゅうけつ', type: PokemonElementType.bug, power: 80, description: '血を 吸い取って 相手を 攻撃する。与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  whismur: {
    flavorText: '普段は ささやき 声。危険を 察知すると 大声で 泣き出す。 耳の 蓋を 閉じると 泣きやむ。',
    stats: { hp: 64, attack: 51, defense: 23, specialAttack: 51, specialDefense: 23, speed: 28 },
    moves: [
      { name: 'とおぼえ', type: PokemonElementType.normal, power: null, description: '大声で ほえて 気合を 高め 自分の 攻撃を あげる。' },
      { name: 'ふみつけ', type: PokemonElementType.normal, power: 65, description: '大きな 足で 相手を 踏みつけて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'ちょうおんぱ', type: PokemonElementType.normal, power: null, description: '特殊な 音波を 体から 発して 相手を 混乱させる。' },
      { name: 'はたく', type: PokemonElementType.normal, power: 40, description: '長い しっぽや 手などを 使って 相手を はたいて 攻撃する。' },
    ],
  },
  loudred: {
    flavorText: '思い切り 吸いこんだ 空気を 発達した 腹筋を 使って 吐き出すことで 大声を 出す。',
    stats: { hp: 84, attack: 71, defense: 43, specialAttack: 71, specialDefense: 43, speed: 48 },
    moves: [
      { name: 'とおぼえ', type: PokemonElementType.normal, power: null, description: '大声で ほえて 気合を 高め 自分の 攻撃を あげる。' },
      { name: 'ふみつけ', type: PokemonElementType.normal, power: 65, description: '大きな 足で 相手を 踏みつけて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'ちょうおんぱ', type: PokemonElementType.normal, power: null, description: '特殊な 音波を 体から 発して 相手を 混乱させる。' },
      { name: 'はたく', type: PokemonElementType.normal, power: 40, description: '長い しっぽや 手などを 使って 相手を はたいて 攻撃する。' },
    ],
  },
  exploud: {
    flavorText: 'バクオングの 遠ぼえは １０キロ 先まで 届く。体中の 穴から さまざまな 音を 出す。',
    stats: { hp: 104, attack: 91, defense: 63, specialAttack: 91, specialDefense: 73, speed: 68 },
    moves: [
      { name: 'とおぼえ', type: PokemonElementType.normal, power: null, description: '大声で ほえて 気合を 高め 自分の 攻撃を あげる。' },
      { name: 'ふみつけ', type: PokemonElementType.normal, power: 65, description: '大きな 足で 相手を 踏みつけて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'ちょうおんぱ', type: PokemonElementType.normal, power: null, description: '特殊な 音波を 体から 発して 相手を 混乱させる。' },
      { name: 'はたく', type: PokemonElementType.normal, power: 40, description: '長い しっぽや 手などを 使って 相手を はたいて 攻撃する。' },
    ],
  },
  makuhita: {
    flavorText: '大木に 何度も 体当たりして 強靭な 体と くじけない 心を 鍛え上げるのだ。',
    stats: { hp: 72, attack: 60, defense: 30, specialAttack: 20, specialDefense: 30, speed: 25 },
    moves: [
      { name: 'つっぱり', type: PokemonElementType.fighting, power: 15, description: 'ひらいた 両手で 相手を つっぱって 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'あてみなげ', type: PokemonElementType.fighting, power: 70, description: '相手より あとに 攻撃する。 そのかわり 自分の 攻撃は 必ず 命中する。' },
      { name: 'きつけ', type: PokemonElementType.normal, power: 70, description: 'まひ状態の 相手には 威力が ２倍に なるが かわりに 相手の まひが 治る。' },
      { name: 'はらだいこ', type: PokemonElementType.normal, power: null, description: '自分の ＨＰを 最大ＨＰの 半分 減らして 自分の 攻撃を 最大に あげる。' },
    ],
  },
  hariyama: {
    flavorText: '両足で 地面を 踏み鳴らして パワーを ためる。張り手 １発で １０トン トラックを 吹っ飛ばす。',
    stats: { hp: 144, attack: 120, defense: 60, specialAttack: 40, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'つっぱり', type: PokemonElementType.fighting, power: 15, description: 'ひらいた 両手で 相手を つっぱって 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'あてみなげ', type: PokemonElementType.fighting, power: 70, description: '相手より あとに 攻撃する。 そのかわり 自分の 攻撃は 必ず 命中する。' },
      { name: 'きつけ', type: PokemonElementType.normal, power: 70, description: 'まひ状態の 相手には 威力が ２倍に なるが かわりに 相手の まひが 治る。' },
      { name: 'はらだいこ', type: PokemonElementType.normal, power: null, description: '自分の ＨＰを 最大ＨＰの 半分 減らして 自分の 攻撃を 最大に あげる。' },
    ],
  },
  azurill: {
    flavorText: '大きな 尻尾に 乗って 弾むと 地上では 速く 移動できる。 水辺で 暮らす ポケモン。',
    stats: { hp: 50, attack: 20, defense: 40, specialAttack: 20, specialDefense: 40, speed: 20 },
    moves: [
      { name: 'はねる', type: PokemonElementType.normal, power: null, description: '攻撃もせずに ピョン ピョンと 跳ねるだけで なにも おこらない……。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'たたきつける', type: PokemonElementType.normal, power: 80, description: '長い しっぽや つるなどを 使い 相手を たたきつけて 攻撃する。' },
      { name: 'しっぽをふる', type: PokemonElementType.normal, power: null, description: 'しっぽを 左右に かわいく ふって 油断を 誘う。 相手の 防御を さげる。' },
    ],
  },
  nosepass: {
    flavorText: 'いつも 北を 向いている 磁石の 鼻で まわりの 鉄を 引き寄せて 守りを 固めるのだ。',
    stats: { hp: 30, attack: 45, defense: 135, specialAttack: 45, specialDefense: 90, speed: 30 },
    moves: [
      { name: 'ロックオン', type: PokemonElementType.normal, power: null, description: '照準を しっかり あわせて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'いわおとし', type: PokemonElementType.rock, power: 50, description: '小さな 岩を 持ちあげて 相手に 投げつけて 攻撃する。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
      { name: 'でんじほう', type: PokemonElementType.electric, power: 120, description: '大砲の ような 電気を 発射して 攻撃する。 相手を まひの 状態に する。' },
    ],
  },
  delcatty: {
    flavorText: '汚い 場所が 大嫌い。 居心地の 良い 場所で いつも 毛並みを 手入れしている。',
    stats: { hp: 70, attack: 65, defense: 65, specialAttack: 55, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'おうふくビンタ', type: PokemonElementType.normal, power: 15, description: 'おうふく ビンタで 相手を たたいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'うたう', type: PokemonElementType.normal, power: null, description: '心地好い きれいな 歌声を 聞かせて 相手を 眠り状態に する。' },
      { name: 'なきごえ', type: PokemonElementType.normal, power: null, description: 'かわいい なきごえを 聞かせて 気を ひき 油断を させて 相手の 攻撃を さげる。' },
      { name: 'メロメロ', type: PokemonElementType.normal, power: null, description: '♂なら♀を ♀なら♂を 誘惑して メロメロに する。 相手は 技が だしにくくなる。' },
    ],
  },
  skitty: {
    flavorText: '動くものを つい 追ってしまう。 自分の 尻尾を 追いかけて 同じ 場所を グルグル 回る。',
    stats: { hp: 50, attack: 45, defense: 45, specialAttack: 35, specialDefense: 35, speed: 50 },
    moves: [
      { name: 'ねこのて', type: PokemonElementType.normal, power: null, description: '大急ぎで 味方の 助けを かりて 控えの ポケモンが おぼえている 技を どれか １つ 使う。' },
      { name: 'おうふくビンタ', type: PokemonElementType.normal, power: 15, description: 'おうふく ビンタで 相手を たたいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'うたう', type: PokemonElementType.normal, power: null, description: '心地好い きれいな 歌声を 聞かせて 相手を 眠り状態に する。' },
      { name: 'いやしのすず', type: PokemonElementType.normal, power: null, description: '心地好い 鈴の 音色を 聞かせて 味方 全員の 状態異常を 回復 する。' },
    ],
  },
  sableye: {
    flavorText: '洞窟の 暗闇に 潜む。 宝石を 食べているうちに 目が 宝石に なってしまった。',
    stats: { hp: 50, attack: 75, defense: 75, specialAttack: 65, specialDefense: 65, speed: 50 },
    moves: [
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'くろいまなざし', type: PokemonElementType.normal, power: null, description: '吸いこまれるような 黒い まなざしで じっと みつめて 相手を 戦闘から 逃げられなくする。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'ねこだまし', type: PokemonElementType.normal, power: 40, description: '先制攻撃で 相手を ひるませる。 戦闘に でたら すぐに ださないと 成功しない。' },
    ],
  },
  mawile: {
    flavorText: 'おとなしい 顔で 相手を 油断 させてから おおあごで がぶり。 かみつくと 絶対に 放さない。',
    stats: { hp: 50, attack: 85, defense: 85, specialAttack: 55, specialDefense: 55, speed: 50 },
    moves: [
      { name: 'はさむ', type: PokemonElementType.normal, power: 55, description: '相手を 両側から はさんで ダメージを あたえる。' },
      { name: 'はきだす', type: PokemonElementType.normal, power: null, description: '蓄えた 力を 相手に ぶつけて 攻撃する。 蓄えているほど 威力が あがる。' },
      { name: 'のみこむ', type: PokemonElementType.normal, power: null, description: '蓄えた 力を のみこんで 自分の ＨＰを 回復する。 蓄えているほど 回復する。' },
      { name: 'たくわえる', type: PokemonElementType.normal, power: null, description: '力を 蓄えて 自分の 防御と 特防を あげる。 最大 ３回まで 蓄えられる。' },
    ],
  },
  aron: {
    flavorText: '普段は 山奥で 暮らしているが お腹が すくと ふもとに 現われ 線路や 車を 食べてしまう。',
    stats: { hp: 50, attack: 70, defense: 100, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: 'きんぞくおん', type: PokemonElementType.steel, power: null, description: '金属を こすって でるような いやな 音を 聞かせる。 相手の 特防を がくっと さげる。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
      { name: 'メタルクロー', type: PokemonElementType.steel, power: 50, description: '鋼鉄の ツメで 相手を 切り裂いて 攻撃する。 自分の 攻撃が あがることが ある。' },
      { name: 'ほえる', type: PokemonElementType.normal, power: null, description: '相手を 逃がして 控えの ポケモンを ひきずりだす。 野生の 場合は 戦闘が 終わる。' },
    ],
  },
  lairon: {
    flavorText: '鉄鉱石が 大好物。 鋼の 体を ぶつけ合って 縄張り 争いを する。',
    stats: { hp: 60, attack: 90, defense: 140, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'きんぞくおん', type: PokemonElementType.steel, power: null, description: '金属を こすって でるような いやな 音を 聞かせる。 相手の 特防を がくっと さげる。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
      { name: 'メタルクロー', type: PokemonElementType.steel, power: 50, description: '鋼鉄の ツメで 相手を 切り裂いて 攻撃する。 自分の 攻撃が あがることが ある。' },
      { name: 'ほえる', type: PokemonElementType.normal, power: null, description: '相手を 逃がして 控えの ポケモンを ひきずりだす。 野生の 場合は 戦闘が 終わる。' },
    ],
  },
  aggron: {
    flavorText: '山を まるごと 縄張りに する。 傷が 多い ボスゴドラほど 戦っているので 侮れない。',
    stats: { hp: 70, attack: 110, defense: 180, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'きんぞくおん', type: PokemonElementType.steel, power: null, description: '金属を こすって でるような いやな 音を 聞かせる。 相手の 特防を がくっと さげる。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
      { name: 'メタルクロー', type: PokemonElementType.steel, power: 50, description: '鋼鉄の ツメで 相手を 切り裂いて 攻撃する。 自分の 攻撃が あがることが ある。' },
      { name: 'ほえる', type: PokemonElementType.normal, power: null, description: '相手を 逃がして 控えの ポケモンを ひきずりだす。 野生の 場合は 戦闘が 終わる。' },
    ],
  },
  meditite: {
    flavorText: 'いつもは 山奥で 修行。 めいそうをして 精神力を 高めると 体が 浮かび上がる。',
    stats: { hp: 30, attack: 40, defense: 55, specialAttack: 40, specialDefense: 55, speed: 60 },
    moves: [
      { name: 'ヨガのポーズ', type: PokemonElementType.psychic, power: null, description: '眠っている 力を 体の 奥から ひきだして 自分の 攻撃を あげる。' },
      { name: 'こころのめ', type: PokemonElementType.normal, power: null, description: '相手の 動きを 心で 感じて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'とびひざげり', type: PokemonElementType.fighting, power: 130, description: 'ジャンプからの ひざげりで 相手を 攻撃する。 はずすと 自分が ダメージを 受ける。' },
      { name: 'じこさいせい', type: PokemonElementType.normal, power: null, description: '細胞を 再生させて 自分の 最大ＨＰの 半分の ＨＰを 回復する。' },
    ],
  },
  medicham: {
    flavorText: 'ダンスの ような 優雅な 動きで 攻撃を 交わして 強烈な 一撃を 相手に お見舞いする。',
    stats: { hp: 60, attack: 60, defense: 75, specialAttack: 60, specialDefense: 75, speed: 80 },
    moves: [
      { name: 'ヨガのポーズ', type: PokemonElementType.psychic, power: null, description: '眠っている 力を 体の 奥から ひきだして 自分の 攻撃を あげる。' },
      { name: 'こころのめ', type: PokemonElementType.normal, power: null, description: '相手の 動きを 心で 感じて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'とびひざげり', type: PokemonElementType.fighting, power: 130, description: 'ジャンプからの ひざげりで 相手を 攻撃する。 はずすと 自分が ダメージを 受ける。' },
      { name: 'じこさいせい', type: PokemonElementType.normal, power: null, description: '細胞を 再生させて 自分の 最大ＨＰの 半分の ＨＰを 回復する。' },
    ],
  },
  electrike: {
    flavorText: '体毛に ためた 電気を 使い 筋肉を 刺激することで 瞬発力を 高める。',
    stats: { hp: 40, attack: 45, defense: 40, specialAttack: 65, specialDefense: 40, speed: 65 },
    moves: [
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'とおぼえ', type: PokemonElementType.normal, power: null, description: '大声で ほえて 気合を 高め 自分の 攻撃を あげる。' },
      { name: 'スパーク', type: PokemonElementType.electric, power: 65, description: '電気を まとい 相手に 突進して 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
    ],
  },
  manectric: {
    flavorText: '人前には めったに 姿を 見せない。 雷の 落ちた 場所に 住処が あると いう。',
    stats: { hp: 70, attack: 75, defense: 60, specialAttack: 105, specialDefense: 60, speed: 105 },
    moves: [
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'とおぼえ', type: PokemonElementType.normal, power: null, description: '大声で ほえて 気合を 高め 自分の 攻撃を あげる。' },
      { name: 'スパーク', type: PokemonElementType.electric, power: 65, description: '電気を まとい 相手に 突進して 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
    ],
  },
  plusle: {
    flavorText: '火花の ボンボンを 作って 仲間を 応援する。 電柱から 電気を 吸い取る。',
    stats: { hp: 60, attack: 50, defense: 40, specialAttack: 85, specialDefense: 75, speed: 95 },
    moves: [
      { name: 'スパーク', type: PokemonElementType.electric, power: 65, description: '電気を まとい 相手に 突進して 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
      { name: 'うそなき', type: PokemonElementType.dark, power: null, description: 'ないた ふりをして 涙を 流す。 こまらせる ことで 相手の 特防を がくっと さげる。' },
      { name: 'でんこうせっか', type: PokemonElementType.normal, power: 40, description: '目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。' },
    ],
  },
  minun: {
    flavorText: 'マイナンと プラスルの 電気は 血液の 流れを 良くして こりを ほぐす 効果が ある。',
    stats: { hp: 60, attack: 40, defense: 50, specialAttack: 75, specialDefense: 85, speed: 95 },
    moves: [
      { name: 'スパーク', type: PokemonElementType.electric, power: 65, description: '電気を まとい 相手に 突進して 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
      { name: 'でんこうせっか', type: PokemonElementType.normal, power: 40, description: '目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。' },
      { name: 'バトンタッチ', type: PokemonElementType.normal, power: null, description: '控えの ポケモンと 入れ替わる。 能力変化は 替わった ポケモンが そのまま 受けつぐ。' },
    ],
  },
  illumise: {
    flavorText: '甘い 香りで バルビートを 誘導して ２００ 以上の 模様を 夜空に 描く。',
    stats: { hp: 65, attack: 47, defense: 75, specialAttack: 73, specialDefense: 85, speed: 85 },
    moves: [
      { name: 'つきのひかり', type: PokemonElementType.normal, power: null, description: '自分の ＨＰを 回復する。 天気に よって 回復の 量が 変化する。' },
      { name: 'おだてる', type: PokemonElementType.dark, power: null, description: '相手を おだてて 混乱させる。 同時に 相手の 特攻も あげてしまう。' },
      { name: 'ねがいごと', type: PokemonElementType.normal, power: null, description: '次の ターンに 自分の ＨＰを 最大ＨＰの 半分 回復する。' },
      { name: 'あまいかおり', type: PokemonElementType.normal, power: null, description: '香りで 相手の 回避率を がくっと さげる。草むら などで 使うと ポケモンが よってくる。' },
    ],
  },
  volbeat: {
    flavorText: '夜になると お尻を 光らせ 仲間と 会話する。イルミーゼの 出す 甘い 香りが 大好き。',
    stats: { hp: 65, attack: 73, defense: 75, specialAttack: 47, specialDefense: 85, speed: 85 },
    moves: [
      { name: 'ほたるび', type: PokemonElementType.bug, power: null, description: '点滅する 光を 眺めて 自分の 精神を 統一し 特攻を ぐぐーんと あげる。' },
      { name: 'つきのひかり', type: PokemonElementType.normal, power: null, description: '自分の ＨＰを 回復する。 天気に よって 回復の 量が 変化する。' },
      { name: 'でんこうせっか', type: PokemonElementType.normal, power: 40, description: '目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。' },
      { name: 'あやしいひかり', type: PokemonElementType.ghost, power: null, description: '怪しい 光を 相手に みせて まどわせる。 相手を 混乱させる。' },
    ],
  },
  roselia: {
    flavorText: '右手と 左手で ２種類の 毒を 使いわけて 攻撃する。 香りが 強いほど 元気だ。',
    stats: { hp: 50, attack: 60, defense: 45, specialAttack: 100, specialDefense: 80, speed: 65 },
    moves: [
      { name: 'くさぶえ', type: PokemonElementType.grass, power: null, description: '心地好い 笛の 音色を 聞かせて 相手を 眠りの 状態に する。' },
      { name: 'はなびらのまい', type: PokemonElementType.grass, power: 120, description: '２ー３ターンの あいだ 花を まきちらして 相手を 攻撃する。 まきちらした あとは 混乱する。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'ねをはる', type: PokemonElementType.grass, power: null, description: '大地に 根を 張り 毎ターン 自分の ＨＰを 回復する。 根を 張っているので 入れ替えられない。' },
    ],
  },
  gulpin: {
    flavorText: '心臓や 脳みそは 小さく 体の 大部分が 胃袋。 なんでも 溶かす 胃液を 出す。',
    stats: { hp: 70, attack: 43, defense: 53, specialAttack: 43, specialDefense: 53, speed: 40 },
    moves: [
      { name: 'ヘドロこうげき', type: PokemonElementType.poison, power: 65, description: '汚い ヘドロを 相手に 投げつけて 攻撃する。 毒状態に することが ある。' },
      { name: 'どくガス', type: PokemonElementType.poison, power: null, description: '毒ガスを 相手の 顔に 吹きかけて 毒の 状態に する。' },
      { name: 'はきだす', type: PokemonElementType.normal, power: null, description: '蓄えた 力を 相手に ぶつけて 攻撃する。 蓄えているほど 威力が あがる。' },
      { name: 'のみこむ', type: PokemonElementType.normal, power: null, description: '蓄えた 力を のみこんで 自分の ＨＰを 回復する。 蓄えているほど 回復する。' },
    ],
  },
  swalot: {
    flavorText: 'なんでも まるのみしてしまう。 毛穴から 猛毒の 体液を 分泌して 敵に 浴びせかける。',
    stats: { hp: 100, attack: 73, defense: 83, specialAttack: 73, specialDefense: 83, speed: 55 },
    moves: [
      { name: 'ヘドロこうげき', type: PokemonElementType.poison, power: 65, description: '汚い ヘドロを 相手に 投げつけて 攻撃する。 毒状態に することが ある。' },
      { name: 'どくガス', type: PokemonElementType.poison, power: null, description: '毒ガスを 相手の 顔に 吹きかけて 毒の 状態に する。' },
      { name: 'はきだす', type: PokemonElementType.normal, power: null, description: '蓄えた 力を 相手に ぶつけて 攻撃する。 蓄えているほど 威力が あがる。' },
      { name: 'のみこむ', type: PokemonElementType.normal, power: null, description: '蓄えた 力を のみこんで 自分の ＨＰを 回復する。 蓄えているほど 回復する。' },
    ],
  },
  carvanha: {
    flavorText: '集団で 船に 襲いかかり 船底を 食いちぎり 沈める。 ジャングルの 川に 生息する。',
    stats: { hp: 45, attack: 90, defense: 20, specialAttack: 65, specialDefense: 20, speed: 65 },
    moves: [
      { name: 'いかり', type: PokemonElementType.normal, power: 20, description: '技を だしたときに 攻撃を 受けると 怒りの 力で 攻撃が あがる。' },
      { name: 'きあいだめ', type: PokemonElementType.normal, power: null, description: '深く 息を 吸い 気合を こめる。 自分の 攻撃が 急所に 当たりやすくなる。' },
      { name: 'いやなおと', type: PokemonElementType.normal, power: null, description: 'おもわず 耳を ふさぎたくなる いやなおとを だして 相手の 防御を がくっと さげる。' },
      { name: 'かみつく', type: PokemonElementType.dark, power: 60, description: '鋭く とがった 歯で かみついて 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  sharpedo: {
    flavorText: '鉄板も かみちぎる キバを 持ち 泳ぐ 速度は 時速１２０キロ。 別名は 海のギャング。',
    stats: { hp: 70, attack: 120, defense: 40, specialAttack: 95, specialDefense: 40, speed: 95 },
    moves: [
      { name: 'ロケットずつき', type: PokemonElementType.normal, power: 130, description: '１ターン目に 頭を ひっこめて 防御を あげる。 ２ターン目に 相手を 攻撃する。' },
      { name: 'きりさく', type: PokemonElementType.normal, power: 70, description: 'ツメや カマなどで 相手を 切り裂いて 攻撃する。 急所に 当たりやすい。' },
      { name: 'いかり', type: PokemonElementType.normal, power: 20, description: '技を だしたときに 攻撃を 受けると 怒りの 力で 攻撃が あがる。' },
      { name: 'きあいだめ', type: PokemonElementType.normal, power: null, description: '深く 息を 吸い 気合を こめる。 自分の 攻撃が 急所に 当たりやすくなる。' },
    ],
  },
  wailmer: {
    flavorText: 'ボールの ように 弾んで 遊ぶ。 たくさんの 海水を 飲みこむほど 高く 弾むように なるのだ。',
    stats: { hp: 130, attack: 70, defense: 35, specialAttack: 70, specialDefense: 35, speed: 60 },
    moves: [
      { name: 'しおふき', type: PokemonElementType.water, power: 150, description: '潮を 吹きつけて 攻撃する。 自分の ＨＰが 少ないほど 技の 威力は さがる。' },
      { name: 'はねる', type: PokemonElementType.normal, power: null, description: '攻撃もせずに ピョン ピョンと 跳ねるだけで なにも おこらない……。' },
      { name: 'しろいきり', type: PokemonElementType.ice, power: null, description: '白い霧で 体を おおう。 ５ターンの あいだ 相手に 能力を さげられなく なる。' },
      { name: 'おどろかす', type: PokemonElementType.ghost, power: 30, description: '大きな 声などで 不意に 驚かして 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  wailord: {
    flavorText: '大きな 体を 波の上で ジャンプさせ 衝撃を 生みだし 相手を 気絶 させることがある。',
    stats: { hp: 170, attack: 90, defense: 45, specialAttack: 90, specialDefense: 45, speed: 60 },
    moves: [
      { name: 'しおふき', type: PokemonElementType.water, power: 150, description: '潮を 吹きつけて 攻撃する。 自分の ＨＰが 少ないほど 技の 威力は さがる。' },
      { name: 'はねる', type: PokemonElementType.normal, power: null, description: '攻撃もせずに ピョン ピョンと 跳ねるだけで なにも おこらない……。' },
      { name: 'しろいきり', type: PokemonElementType.ice, power: null, description: '白い霧で 体を おおう。 ５ターンの あいだ 相手に 能力を さげられなく なる。' },
      { name: 'おどろかす', type: PokemonElementType.ghost, power: 30, description: '大きな 声などで 不意に 驚かして 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  numel: {
    flavorText: '灼熱の マグマを 背中の コブに ためている。雨に 当たると マグマが 冷えて 動きが 鈍る。',
    stats: { hp: 60, attack: 60, defense: 40, specialAttack: 65, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'マグニチュード', type: PokemonElementType.ground, power: null, description: '地面を 揺らして 自分の 周りに いるものを 攻撃する。 技の 威力は いろいろ 変わる。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'ドわすれ', type: PokemonElementType.psychic, power: null, description: '頭を からにして 一瞬 なにかを 忘れることで 自分の 特防を ぐーんと あげる。' },
      { name: 'きあいだめ', type: PokemonElementType.normal, power: null, description: '深く 息を 吸い 気合を こめる。 自分の 攻撃が 急所に 当たりやすくなる。' },
    ],
  },
  camerupt: {
    flavorText: '背中の コブの 火山は １０年ごとに 大噴火 するが 激しく 怒っても 噴火する。',
    stats: { hp: 70, attack: 100, defense: 70, specialAttack: 105, specialDefense: 75, speed: 40 },
    moves: [
      { name: 'ふんか', type: PokemonElementType.fire, power: 150, description: '怒りを 爆発させて 相手を 攻撃する。自分の ＨＰが 少ないほど 技の 威力は さがる。' },
      { name: 'マグニチュード', type: PokemonElementType.ground, power: null, description: '地面を 揺らして 自分の 周りに いるものを 攻撃する。 技の 威力は いろいろ 変わる。' },
      { name: 'じわれ', type: PokemonElementType.ground, power: null, description: '地割れの 裂け目に 相手を 落として 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
    ],
  },
  torkoal: {
    flavorText: '使われなくなった 炭鉱には たくさんの コータスが 住みついて 石炭を せっせと 掘っている。',
    stats: { hp: 70, attack: 85, defense: 140, specialAttack: 85, specialDefense: 70, speed: 20 },
    moves: [
      { name: 'スモッグ', type: PokemonElementType.poison, power: 30, description: '汚れた ガスを 相手に 吹きつけて 攻撃する。 毒状態に することが ある。' },
      { name: 'えんまく', type: PokemonElementType.normal, power: null, description: '煙や 墨などを 吹きかけて 相手の 命中率を さげる。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'ほのおのうず', type: PokemonElementType.fire, power: 35, description: '激しく 渦をまく 炎の中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
    ],
  },
  spoink: {
    flavorText: '尻尾を バネのかわりに いつも 飛び跳ねている。跳ねる 振動で 心臓を 鼓動 させているのだ。',
    stats: { hp: 60, attack: 25, defense: 35, specialAttack: 70, specialDefense: 80, speed: 60 },
    moves: [
      { name: 'はねる', type: PokemonElementType.normal, power: null, description: '攻撃もせずに ピョン ピョンと 跳ねるだけで なにも おこらない……。' },
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'サイコウェーブ', type: PokemonElementType.psychic, power: null, description: '不思議な 念波を 相手に 発射して 攻撃する。 使うたびに ダメージが 変わる。' },
      { name: 'とびはねる', type: PokemonElementType.flying, power: 85, description: '空高く 飛び跳ねて ２ターン目に 相手を 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  grumpig: {
    flavorText: '黒真珠で サイコパワーを 強め 奇妙な ステップで 相手の 心を 操るぞ。',
    stats: { hp: 80, attack: 45, defense: 65, specialAttack: 90, specialDefense: 110, speed: 80 },
    moves: [
      { name: 'はねる', type: PokemonElementType.normal, power: null, description: '攻撃もせずに ピョン ピョンと 跳ねるだけで なにも おこらない……。' },
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'サイコウェーブ', type: PokemonElementType.psychic, power: null, description: '不思議な 念波を 相手に 発射して 攻撃する。 使うたびに ダメージが 変わる。' },
      { name: 'とびはねる', type: PokemonElementType.flying, power: 85, description: '空高く 飛び跳ねて ２ターン目に 相手を 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  spinda: {
    flavorText: '同じ ブチ模様の パッチールは いない。フラフラした 足取りで 相手の ねらいを 外す。',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 60, specialDefense: 60, speed: 60 },
    moves: [
      { name: 'ピヨピヨパンチ', type: PokemonElementType.normal, power: 70, description: 'リズミカルに パンチを くりだして 相手を 攻撃する。 混乱させることが ある。' },
      { name: 'フラフラダンス', type: PokemonElementType.normal, power: null, description: 'フラフラと ダンスを おどって 自分の 周りに いるものを 混乱状態に させる。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
    ],
  },
  trapinch: {
    flavorText: '乾燥した 砂漠に 生息。 すり鉢状の 巣穴の 中で 獲物を じっと 待ち続ける。',
    stats: { hp: 45, attack: 100, defense: 45, specialAttack: 45, specialDefense: 45, speed: 10 },
    moves: [
      { name: 'すなじごく', type: PokemonElementType.ground, power: 35, description: '激しく 吹きあれる 砂あらしの 中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
      { name: 'かみつく', type: PokemonElementType.dark, power: 60, description: '鋭く とがった 歯で かみついて 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  vibrava: {
    flavorText: '２枚の 羽を 高速で 振動させて 出す 超音波は 激しい 頭痛を ひきおこす。',
    stats: { hp: 50, attack: 70, defense: 50, specialAttack: 50, specialDefense: 50, speed: 70 },
    moves: [
      { name: 'りゅうのいぶき', type: PokemonElementType.dragon, power: 60, description: 'ものすごい 息を 相手に 吹きつけて 攻撃する。 まひ状態に することが ある。' },
      { name: 'すなじごく', type: PokemonElementType.ground, power: 35, description: '激しく 吹きあれる 砂あらしの 中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
    ],
  },
  flygon: {
    flavorText: '羽の 羽ばたきで 砂漠の 砂を 巻き上げて 姿を 隠す。 赤い カバーが 砂から 目を 守る。',
    stats: { hp: 80, attack: 100, defense: 80, specialAttack: 80, specialDefense: 80, speed: 100 },
    moves: [
      { name: 'りゅうのいぶき', type: PokemonElementType.dragon, power: 60, description: 'ものすごい 息を 相手に 吹きつけて 攻撃する。 まひ状態に することが ある。' },
      { name: 'すなじごく', type: PokemonElementType.ground, power: 35, description: '激しく 吹きあれる 砂あらしの 中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
    ],
  },
  cacnea: {
    flavorText: '雨が 少ない 乾燥した 地域に 生息。１年に １回 黄色の 花を 咲かせる。',
    stats: { hp: 50, attack: 85, defense: 40, specialAttack: 85, specialDefense: 40, speed: 35 },
    moves: [
      { name: 'ニードルアーム', type: PokemonElementType.grass, power: 60, description: 'トゲの 腕を 激しく ふるって 攻撃する。 相手を ひるませることが ある。' },
      { name: 'わたほうし', type: PokemonElementType.grass, power: null, description: '綿のような フワフワの 胞子を まとわり つかせて 相手の 素早さを がくっと さげる。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'ねをはる', type: PokemonElementType.grass, power: null, description: '大地に 根を 張り 毎ターン 自分の ＨＰを 回復する。 根を 張っているので 入れ替えられない。' },
    ],
  },
  cacturne: {
    flavorText: '夜になると 活動を はじめる。 砂漠の 暑さに 疲れ果てた 獲物を 見つけ出し 捕らえるのだ。',
    stats: { hp: 70, attack: 115, defense: 60, specialAttack: 115, specialDefense: 60, speed: 55 },
    moves: [
      { name: 'ニードルアーム', type: PokemonElementType.grass, power: 60, description: 'トゲの 腕を 激しく ふるって 攻撃する。 相手を ひるませることが ある。' },
      { name: 'わたほうし', type: PokemonElementType.grass, power: null, description: '綿のような フワフワの 胞子を まとわり つかせて 相手の 素早さを がくっと さげる。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'ねをはる', type: PokemonElementType.grass, power: null, description: '大地に 根を 張り 毎ターン 自分の ＨＰを 回復する。 根を 張っているので 入れ替えられない。' },
    ],
  },
  swablu: {
    flavorText: '人の 頭の 上に ちょこんと 乗って 帽子のように ふるまうのが なぜか 大好き。',
    stats: { hp: 45, attack: 40, defense: 60, specialAttack: 40, specialDefense: 75, speed: 50 },
    moves: [
      { name: 'オウムがえし', type: PokemonElementType.flying, power: null, description: '相手の 使った 技を まねして 自分も 同じ技を 使う。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
      { name: 'うたう', type: PokemonElementType.normal, power: null, description: '心地好い きれいな 歌声を 聞かせて 相手を 眠り状態に する。' },
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  altaria: {
    flavorText: '大空を ゆったりと 飛ぶ。 チルタリスの 美しい ハミングを 聴くと うっとり 夢心地だ。',
    stats: { hp: 75, attack: 70, defense: 90, specialAttack: 70, specialDefense: 105, speed: 80 },
    moves: [
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
      { name: 'うたう', type: PokemonElementType.normal, power: null, description: '心地好い きれいな 歌声を 聞かせて 相手を 眠り状態に する。' },
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'リフレッシュ', type: PokemonElementType.normal, power: null, description: '体を やすめて 自分が おっている 毒 まひ やけどの 状態異常を 治す。' },
    ],
  },
  zangoose: {
    flavorText: '何世代にも 渡って ハブネークと 戦ってきた。 鋭い ツメが 最大の 武器。',
    stats: { hp: 73, attack: 115, defense: 60, specialAttack: 60, specialDefense: 60, speed: 90 },
    moves: [
      { name: 'ブレイククロー', type: PokemonElementType.normal, power: 75, description: '硬く 鋭い ツメで 切り裂いて 攻撃する。 相手の 防御を さげることが ある。' },
      { name: 'おいうち', type: PokemonElementType.dark, power: 40, description: '相手 ポケモンが 入れ替わるときに 技を だしていると 倍の 威力で 攻撃できる。' },
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
      { name: 'みねうち', type: PokemonElementType.normal, power: 40, description: '相手の ＨＰが 必ず １だけ 残るように 手加減して 攻撃する。' },
    ],
  },
  seviper: {
    flavorText: '猛毒が 染み出している 鋭い 切れ味の 尻尾で 素早い ザングースに 立ち向かう。',
    stats: { hp: 73, attack: 100, defense: 60, specialAttack: 100, specialDefense: 60, speed: 65 },
    moves: [
      { name: 'へびにらみ', type: PokemonElementType.normal, power: null, description: 'おなかの 模様で おびえさせて 相手を まひの 状態に する。' },
      { name: 'どくどくのキバ', type: PokemonElementType.poison, power: 50, description: '毒の ある キバで 相手に かみついて 攻撃する。 猛毒を おわせる ことが ある。' },
      { name: 'ポイズンテール', type: PokemonElementType.poison, power: 50, description: 'しっぽで たたく。 毒状態に することが あり 急所にも 当たりやすい。' },
      { name: 'まきつく', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを つかって ４ー５ターンの あいだ 相手に まきついて 攻撃する。' },
    ],
  },
  lunatone: {
    flavorText: '満月の 夜になると 活発に 活動するため 月の 満ち欠けと 関係していると 言われている。',
    stats: { hp: 90, attack: 55, defense: 65, specialAttack: 95, specialDefense: 85, speed: 70 },
    moves: [
      { name: 'コスモパワー', type: PokemonElementType.psychic, power: null, description: '宇宙から 神秘の 力を とりこむ ことで 自分の 防御と 特防を あげる。' },
      { name: 'サイコウェーブ', type: PokemonElementType.psychic, power: null, description: '不思議な 念波を 相手に 発射して 攻撃する。 使うたびに ダメージが 変わる。' },
      { name: 'いわおとし', type: PokemonElementType.rock, power: 50, description: '小さな 岩を 持ちあげて 相手に 投げつけて 攻撃する。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
    ],
  },
  solrock: {
    flavorText: '太陽エネルギーが パワーの 源 なので 昼間は 強い。 回転すると 体が 光る。',
    stats: { hp: 90, attack: 95, defense: 85, specialAttack: 55, specialDefense: 65, speed: 70 },
    moves: [
      { name: 'コスモパワー', type: PokemonElementType.psychic, power: null, description: '宇宙から 神秘の 力を とりこむ ことで 自分の 防御と 特防を あげる。' },
      { name: 'サイコウェーブ', type: PokemonElementType.psychic, power: null, description: '不思議な 念波を 相手に 発射して 攻撃する。 使うたびに ダメージが 変わる。' },
      { name: 'いわおとし', type: PokemonElementType.rock, power: 50, description: '小さな 岩を 持ちあげて 相手に 投げつけて 攻撃する。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
    ],
  },
  barboach: {
    flavorText: '全身が ヌルヌルの 体液で 覆われているため 捕まっても ぬるりと 抜け出すことが できる。',
    stats: { hp: 50, attack: 48, defense: 43, specialAttack: 46, specialDefense: 41, speed: 60 },
    moves: [
      { name: 'マグニチュード', type: PokemonElementType.ground, power: null, description: '地面を 揺らして 自分の 周りに いるものを 攻撃する。 技の 威力は いろいろ 変わる。' },
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
      { name: 'じわれ', type: PokemonElementType.ground, power: null, description: '地割れの 裂け目に 相手を 落として 攻撃する。 当たれば 一撃で ひんしに する。' },
    ],
  },
  whiscash: {
    flavorText: '大きな 沼を 縄張りにする。 敵が 近づくと 大暴れして 大きな 地震を 起こすのだ。',
    stats: { hp: 110, attack: 78, defense: 73, specialAttack: 76, specialDefense: 71, speed: 60 },
    moves: [
      { name: 'マグニチュード', type: PokemonElementType.ground, power: null, description: '地面を 揺らして 自分の 周りに いるものを 攻撃する。 技の 威力は いろいろ 変わる。' },
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
      { name: 'じわれ', type: PokemonElementType.ground, power: null, description: '地割れの 裂け目に 相手を 落として 攻撃する。 当たれば 一撃で ひんしに する。' },
    ],
  },
  corphish: {
    flavorText: 'どんなに 水が 汚れた 川でも 適応して 増えていく タフな 生命力の 持ち主。',
    stats: { hp: 43, attack: 80, defense: 65, specialAttack: 50, specialDefense: 35, speed: 35 },
    moves: [
      { name: 'クラブハンマー', type: PokemonElementType.water, power: 100, description: '大きな ハサミを 相手に たたきつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'ハサミギロチン', type: PokemonElementType.normal, power: null, description: '大きな ハサミで 相手を 切り裂いて 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'はさむ', type: PokemonElementType.normal, power: 55, description: '相手を 両側から はさんで ダメージを あたえる。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
    ],
  },
  crawdaunt: {
    flavorText: '池に 住む ほかの ポケモンを ハサミで つまみ上げ 池の 外へ 放り出してしまう 暴れん坊。',
    stats: { hp: 63, attack: 120, defense: 85, specialAttack: 90, specialDefense: 55, speed: 55 },
    moves: [
      { name: 'クラブハンマー', type: PokemonElementType.water, power: 100, description: '大きな ハサミを 相手に たたきつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'ハサミギロチン', type: PokemonElementType.normal, power: null, description: '大きな ハサミで 相手を 切り裂いて 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'はさむ', type: PokemonElementType.normal, power: 55, description: '相手を 両側から はさんで ダメージを あたえる。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
    ],
  },
  baltoy: {
    flavorText: '一本足で 回転しながら 移動する。 逆さまに なって 回転する ヤジロンも 見かける。',
    stats: { hp: 40, attack: 40, defense: 55, specialAttack: 40, specialDefense: 70, speed: 55 },
    moves: [
      { name: 'コスモパワー', type: PokemonElementType.psychic, power: null, description: '宇宙から 神秘の 力を とりこむ ことで 自分の 防御と 特防を あげる。' },
      { name: 'こうそくスピン', type: PokemonElementType.normal, power: 50, description: '回転して 相手を 攻撃する。 しめつける まきつく やどりぎのタネ まきびし なども 吹きとばせる。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
      { name: 'だいばくはつ', type: PokemonElementType.normal, power: 250, description: '大きな 爆発で 自分の 周りに いるものを 攻撃する。 使ったあとに ひんしに なる。' },
    ],
  },
  claydol: {
    flavorText: '古代の 泥人形が 怪光線を 浴びたことで 命が 宿り ポケモンとなった。',
    stats: { hp: 60, attack: 70, defense: 105, specialAttack: 70, specialDefense: 120, speed: 75 },
    moves: [
      { name: 'テレポート', type: PokemonElementType.psychic, power: null, description: '野生ポケモンとの 戦闘を やめる。 最後に はいった ポケセンの ある 街にも 行ける。' },
      { name: 'コスモパワー', type: PokemonElementType.psychic, power: null, description: '宇宙から 神秘の 力を とりこむ ことで 自分の 防御と 特防を あげる。' },
      { name: 'こうそくスピン', type: PokemonElementType.normal, power: 50, description: '回転して 相手を 攻撃する。 しめつける まきつく やどりぎのタネ まきびし なども 吹きとばせる。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
    ],
  },
  lileep: {
    flavorText: '触手を 花びらに 見せかけて 近寄ってきた 獲物を 捕らえる。 １億年前に 絶滅した。',
    stats: { hp: 66, attack: 41, defense: 77, specialAttack: 61, specialDefense: 87, speed: 23 },
    moves: [
      { name: 'からみつく', type: PokemonElementType.normal, power: 10, description: '触手や ツタなどを からみつけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'ようかいえき', type: PokemonElementType.poison, power: 40, description: '強い 酸を 相手に かけて 攻撃する。相手の 特防を さげることが ある。' },
      { name: 'はきだす', type: PokemonElementType.normal, power: null, description: '蓄えた 力を 相手に ぶつけて 攻撃する。 蓄えているほど 威力が あがる。' },
      { name: 'ねをはる', type: PokemonElementType.grass, power: null, description: '大地に 根を 張り 毎ターン 自分の ＨＰを 回復する。 根を 張っているので 入れ替えられない。' },
    ],
  },
  cradily: {
    flavorText: '暖かい 海の 浅瀬に いる。 潮が 引くと 砂浜に 潜った 獲物を 掘り出して 食べる。',
    stats: { hp: 86, attack: 81, defense: 97, specialAttack: 81, specialDefense: 107, speed: 43 },
    moves: [
      { name: 'からみつく', type: PokemonElementType.normal, power: 10, description: '触手や ツタなどを からみつけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'ようかいえき', type: PokemonElementType.poison, power: 40, description: '強い 酸を 相手に かけて 攻撃する。相手の 特防を さげることが ある。' },
      { name: 'はきだす', type: PokemonElementType.normal, power: null, description: '蓄えた 力を 相手に ぶつけて 攻撃する。 蓄えているほど 威力が あがる。' },
      { name: 'ねをはる', type: PokemonElementType.grass, power: null, description: '大地に 根を 張り 毎ターン 自分の ＨＰを 回復する。 根を 張っているので 入れ替えられない。' },
    ],
  },
  anorith: {
    flavorText: 'ポケモンの 先祖の 一種。 海底の 岩場に 隠れた 獲物を 伸びる ツノで 捕らえる。',
    stats: { hp: 45, attack: 95, defense: 50, specialAttack: 40, specialDefense: 50, speed: 75 },
    moves: [
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
      { name: 'メタルクロー', type: PokemonElementType.steel, power: 50, description: '鋼鉄の ツメで 相手を 切り裂いて 攻撃する。 自分の 攻撃が あがることが ある。' },
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
    ],
  },
  armaldo: {
    flavorText: '伸び縮みする 巨大な ツメで 獲物を くし刺しにして 捕らえる。 丈夫な よろいを 身に まとう。',
    stats: { hp: 75, attack: 125, defense: 100, specialAttack: 70, specialDefense: 80, speed: 45 },
    moves: [
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
      { name: 'メタルクロー', type: PokemonElementType.steel, power: 50, description: '鋼鉄の ツメで 相手を 切り裂いて 攻撃する。 自分の 攻撃が あがることが ある。' },
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
    ],
  },
  feebas: {
    flavorText: 'なんでも 食べるので 汚い 川や 湖でも 生きていける。 だれも 注目しない ポケモン。',
    stats: { hp: 20, attack: 15, defense: 20, specialAttack: 10, specialDefense: 55, speed: 80 },
    moves: [
      { name: 'はねる', type: PokemonElementType.normal, power: null, description: '攻撃もせずに ピョン ピョンと 跳ねるだけで なにも おこらない……。' },
      { name: 'じたばた', type: PokemonElementType.normal, power: null, description: 'じたばた 暴れて 攻撃する。 自分の ＨＰが 少ないほど 技の 威力は あがる。' },
      { name: 'たいあたり', type: PokemonElementType.normal, power: 40, description: '相手に むかって 全身で ぶつかっていき 攻撃する。' },
    ],
  },
  milotic: {
    flavorText: 'ミロカロスの 美しい 姿を 見た者は 争いの 気持ちを 忘れてしまうと 言われている。',
    stats: { hp: 95, attack: 60, defense: 79, specialAttack: 100, specialDefense: 125, speed: 81 },
    moves: [
      { name: 'まきつく', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを つかって ４ー５ターンの あいだ 相手に まきついて 攻撃する。' },
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
      { name: 'リフレッシュ', type: PokemonElementType.normal, power: null, description: '体を やすめて 自分が おっている 毒 まひ やけどの 状態異常を 治す。' },
      { name: 'じこさいせい', type: PokemonElementType.normal, power: null, description: '細胞を 再生させて 自分の 最大ＨＰの 半分の ＨＰを 回復する。' },
    ],
  },
  kecleon: {
    flavorText: '体の 色を 自由に 変える 能力を 持つ。お腹にある ギザギザ模様 だけは 変わらない。',
    stats: { hp: 60, attack: 90, defense: 70, specialAttack: 60, specialDefense: 120, speed: 40 },
    moves: [
      { name: 'したでなめる', type: PokemonElementType.ghost, power: 30, description: '長い 舌で 相手を なめまわして 攻撃する。 まひ状態に することが ある。' },
      { name: 'しめつける', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを 使い ４ー５ターンの あいだ 相手を 締めつけて 攻撃する。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
    ],
  },
  castform: {
    flavorText: '気温や 湿度の 変化が 体の 細胞に 影響して 姿を 変える ポケモン。',
    stats: { hp: 70, attack: 70, defense: 70, specialAttack: 70, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'こなゆき', type: PokemonElementType.ice, power: 40, description: '冷たい 粉雪を 相手に 吹きつけて 攻撃する。 こおり状態に することが ある。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'ウェザーボール', type: PokemonElementType.normal, power: 50, description: '使ったときの 天気に よって 技の タイプと 威力が 変わる。' },
      { name: 'みずでっぽう', type: PokemonElementType.water, power: 40, description: '水を 勢いよく 相手に 発射して 攻撃する。' },
    ],
  },
  shuppet: {
    flavorText: '頭の ツノで 恨みや ねたみの 感情を 食べると 言われる。 真夜中 活発に 活動する。',
    stats: { hp: 44, attack: 75, defense: 35, specialAttack: 63, specialDefense: 33, speed: 45 },
    moves: [
      { name: 'おんねん', type: PokemonElementType.ghost, power: null, description: '相手の 技で ひんしに されたとき おんねんを かけて その技の ＰＰを ０に する。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
      { name: 'ナイトヘッド', type: PokemonElementType.ghost, power: null, description: '恐ろしい 幻を みせて 自分の レベルと 同じだけの ダメージを 相手に 与える。' },
      { name: 'よこどり', type: PokemonElementType.dark, power: null, description: '相手が 使おうと した 回復技や 能力変化の 技を うばって 自分に 使う。' },
    ],
  },
  banette: {
    flavorText: '捨てられた ぬいぐるみに おんねんが 宿り ポケモンになった。自分を 捨てた 子供を 捜している。',
    stats: { hp: 64, attack: 115, defense: 65, specialAttack: 83, specialDefense: 63, speed: 65 },
    moves: [
      { name: 'おんねん', type: PokemonElementType.ghost, power: null, description: '相手の 技で ひんしに されたとき おんねんを かけて その技の ＰＰを ０に する。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
      { name: 'ナイトヘッド', type: PokemonElementType.ghost, power: null, description: '恐ろしい 幻を みせて 自分の レベルと 同じだけの ダメージを 相手に 与える。' },
      { name: 'よこどり', type: PokemonElementType.dark, power: null, description: '相手が 使おうと した 回復技や 能力変化の 技を うばって 自分に 使う。' },
    ],
  },
  duskull: {
    flavorText: 'どこまでも 獲物を 追い続ける。 執念深い 性格だが 朝日が 昇ると あきらめる。',
    stats: { hp: 20, attack: 40, defense: 90, specialAttack: 30, specialDefense: 90, speed: 25 },
    moves: [
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'くろいまなざし', type: PokemonElementType.normal, power: null, description: '吸いこまれるような 黒い まなざしで じっと みつめて 相手を 戦闘から 逃げられなくする。' },
      { name: 'おいうち', type: PokemonElementType.dark, power: 40, description: '相手 ポケモンが 入れ替わるときに 技を だしていると 倍の 威力で 攻撃できる。' },
      { name: 'かなしばり', type: PokemonElementType.normal, power: null, description: '相手の 動きを とめて 直前に だしていた 技を ４ターンの あいだ 使えなくする。' },
    ],
  },
  dusclops: {
    flavorText: '体の 中で 燃えている 人魂を のぞきこむと 魂を 吸い取られてしまう。',
    stats: { hp: 40, attack: 70, defense: 130, specialAttack: 60, specialDefense: 130, speed: 25 },
    moves: [
      { name: 'シャドーパンチ', type: PokemonElementType.ghost, power: 60, description: '影に まぎれて パンチを くりだす。 攻撃は 必ず 命中する。' },
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'くろいまなざし', type: PokemonElementType.normal, power: null, description: '吸いこまれるような 黒い まなざしで じっと みつめて 相手を 戦闘から 逃げられなくする。' },
      { name: 'しめつける', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを 使い ４ー５ターンの あいだ 相手を 締めつけて 攻撃する。' },
    ],
  },
  tropius: {
    flavorText: '大きな 葉っぱで 空を飛んで 子供たちに 大人気の 首に できる 甘い くだものを 配る。',
    stats: { hp: 99, attack: 68, defense: 83, specialAttack: 72, specialDefense: 87, speed: 51 },
    moves: [
      { name: 'かぜおこし', type: PokemonElementType.flying, power: 40, description: '翼で おこした 激しい 風を 相手に ぶつけて 攻撃する。' },
      { name: 'ふきとばし', type: PokemonElementType.normal, power: null, description: '相手を 吹きとばして 控えの ポケモンを ひきずりだす。 野生の 場合は 戦闘が 終わる。' },
      { name: 'ふみつけ', type: PokemonElementType.normal, power: 65, description: '大きな 足で 相手を 踏みつけて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'はっぱカッター', type: PokemonElementType.grass, power: 55, description: 'はっぱを とばして 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
    ],
  },
  chimecho: {
    flavorText: '頭の 吸盤で 木の 枝や 家の 軒下に ぶら下がる。 ７種類 音色を 使い分ける。',
    stats: { hp: 75, attack: 50, defense: 80, specialAttack: 95, specialDefense: 90, speed: 65 },
    moves: [
      { name: 'まきつく', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを つかって ４ー５ターンの あいだ 相手に まきついて 攻撃する。' },
      { name: 'サイコウェーブ', type: PokemonElementType.psychic, power: null, description: '不思議な 念波を 相手に 発射して 攻撃する。 使うたびに ダメージが 変わる。' },
      { name: 'いやしのすず', type: PokemonElementType.normal, power: null, description: '心地好い 鈴の 音色を 聞かせて 味方 全員の 状態異常を 回復 する。' },
      { name: 'あくび', type: PokemonElementType.normal, power: null, description: '大きな あくびで 眠気を 誘う。 次の ターンに 相手を 眠り状態に する。' },
    ],
  },
  absol: {
    flavorText: '災害を 予感する。 危険を 知らせる ときだけ 人前に 現れるという。',
    stats: { hp: 65, attack: 130, defense: 60, specialAttack: 75, specialDefense: 60, speed: 75 },
    moves: [
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
      { name: 'かまいたち', type: PokemonElementType.normal, power: 80, description: '風の 刃を つくり ２ターン目に 相手を 攻撃する。 急所に 当たりやすい。' },
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
      { name: 'みらいよち', type: PokemonElementType.psychic, power: 120, description: '技を 使った ２ターン後に 相手に 念力の 塊を 送って 攻撃する。' },
    ],
  },
  wynaut: {
    flavorText: '群れで 行動する 習性。 眠る ときは 洞窟の 中で 仲間たちと 体を 寄せ合う。',
    stats: { hp: 95, attack: 23, defense: 48, specialAttack: 23, specialDefense: 48, speed: 23 },
    moves: [
      { name: 'はねる', type: PokemonElementType.normal, power: null, description: '攻撃もせずに ピョン ピョンと 跳ねるだけで なにも おこらない……。' },
      { name: 'ミラーコート', type: PokemonElementType.psychic, power: null, description: '相手から 受けた 特殊攻撃の ダメージを ２倍に して その相手に 返す。' },
      { name: 'みちづれ', type: PokemonElementType.ghost, power: null, description: '技を だしたあと 攻撃を 受けて ひんしに なったとき 攻撃 相手も ひんしに する。' },
      { name: 'アンコール', type: PokemonElementType.normal, power: null, description: '相手が 最後に 使った技を ３ターンの あいだ ずっと ださせる。' },
    ],
  },
  snorunt: {
    flavorText: '大きな 葉っぱの 下に 数匹の ユキワラシが 集まり 仲良く 暮らしているという。',
    stats: { hp: 50, attack: 50, defense: 50, specialAttack: 50, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'こなゆき', type: PokemonElementType.ice, power: 40, description: '冷たい 粉雪を 相手に 吹きつけて 攻撃する。 こおり状態に することが ある。' },
      { name: 'あられ', type: PokemonElementType.ice, power: null, description: '５ターンの あいだ あられを 降らして こおりタイプで ない ポケモン 全員に ダメージを 与える。' },
      { name: 'かみつく', type: PokemonElementType.dark, power: 60, description: '鋭く とがった 歯で かみついて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'にらみつける', type: PokemonElementType.normal, power: null, description: '鋭い 目つきで おびえさせて 相手の 防御を さげる。' },
    ],
  },
  glalie: {
    flavorText: '空気中の 水分を 凍らせ 氷の 装甲で 体を 包みこみ 身を 守っている。',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80 },
    moves: [
      { name: 'ぜったいれいど', type: PokemonElementType.ice, power: null, description: '絶対零度の 冷たさで 相手を 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'こなゆき', type: PokemonElementType.ice, power: 40, description: '冷たい 粉雪を 相手に 吹きつけて 攻撃する。 こおり状態に することが ある。' },
      { name: 'あられ', type: PokemonElementType.ice, power: null, description: '５ターンの あいだ あられを 降らして こおりタイプで ない ポケモン 全員に ダメージを 与える。' },
      { name: 'かみつく', type: PokemonElementType.dark, power: 60, description: '鋭く とがった 歯で かみついて 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  spheal: {
    flavorText: 'まだ 上手に 泳げず 転がったほうが 速く 動ける。 うれしいと みんなで 手をたたく。',
    stats: { hp: 70, attack: 40, defense: 50, specialAttack: 55, specialDefense: 50, speed: 25 },
    moves: [
      { name: 'アイスボール', type: PokemonElementType.ice, power: 30, description: '５ターンの あいだ 転がり続けて 相手を 攻撃する。技が 当たるたび 威力が あがる。' },
      { name: 'ぜったいれいど', type: PokemonElementType.ice, power: null, description: '絶対零度の 冷たさで 相手を 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'オーロラビーム', type: PokemonElementType.ice, power: 65, description: 'にじいろの ビームを 相手に 発射して 攻撃する。 攻撃を さげる ことが ある。' },
      { name: 'こなゆき', type: PokemonElementType.ice, power: 40, description: '冷たい 粉雪を 相手に 吹きつけて 攻撃する。 こおり状態に することが ある。' },
    ],
  },
  sealeo: {
    flavorText: '鼻の 神経が 敏感。 はじめて 目に する 物は 鼻で 触って 覚えるのだ。',
    stats: { hp: 90, attack: 60, defense: 70, specialAttack: 75, specialDefense: 70, speed: 45 },
    moves: [
      { name: 'アイスボール', type: PokemonElementType.ice, power: 30, description: '５ターンの あいだ 転がり続けて 相手を 攻撃する。技が 当たるたび 威力が あがる。' },
      { name: 'ぜったいれいど', type: PokemonElementType.ice, power: null, description: '絶対零度の 冷たさで 相手を 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'オーロラビーム', type: PokemonElementType.ice, power: 65, description: 'にじいろの ビームを 相手に 発射して 攻撃する。 攻撃を さげる ことが ある。' },
      { name: 'こなゆき', type: PokemonElementType.ice, power: 40, description: '冷たい 粉雪を 相手に 吹きつけて 攻撃する。 こおり状態に することが ある。' },
    ],
  },
  walrein: {
    flavorText: '大きな 氷を キバで 砕く。 厚い 脂肪は 寒さだけでなく 敵の 攻撃も はね返す。',
    stats: { hp: 110, attack: 80, defense: 90, specialAttack: 95, specialDefense: 90, speed: 65 },
    moves: [
      { name: 'アイスボール', type: PokemonElementType.ice, power: 30, description: '５ターンの あいだ 転がり続けて 相手を 攻撃する。技が 当たるたび 威力が あがる。' },
      { name: 'ぜったいれいど', type: PokemonElementType.ice, power: null, description: '絶対零度の 冷たさで 相手を 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'オーロラビーム', type: PokemonElementType.ice, power: 65, description: 'にじいろの ビームを 相手に 発射して 攻撃する。 攻撃を さげる ことが ある。' },
      { name: 'こなゆき', type: PokemonElementType.ice, power: 40, description: '冷たい 粉雪を 相手に 吹きつけて 攻撃する。 こおり状態に することが ある。' },
    ],
  },
  clamperl: {
    flavorText: '一生に １回 進化の とき サイコパワーを 増幅する 不思議な 真珠を 作るのだ。',
    stats: { hp: 35, attack: 64, defense: 85, specialAttack: 74, specialDefense: 55, speed: 32 },
    moves: [
      { name: 'からではさむ', type: PokemonElementType.water, power: 35, description: 'とても 頑丈な ぶあつい 殻に ４ー５ターンの あいだ 相手を はさんで 攻撃する。' },
      { name: 'みずでっぽう', type: PokemonElementType.water, power: 40, description: '水を 勢いよく 相手に 発射して 攻撃する。' },
      { name: 'うずしお', type: PokemonElementType.water, power: 35, description: '激しく 渦をまく 水の中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'てっぺき', type: PokemonElementType.steel, power: null, description: '皮膚を 鉄のように 硬くする ことで 自分の 防御を ぐーんと あげる。' },
    ],
  },
  huntail: {
    flavorText: '光の 届かない 深海に 生息。 小魚に 似た 尻尾を 光らせて 獲物を 誘い出す。',
    stats: { hp: 55, attack: 104, defense: 105, specialAttack: 94, specialDefense: 75, speed: 52 },
    moves: [
      { name: 'うずしお', type: PokemonElementType.water, power: 35, description: '激しく 渦をまく 水の中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'ハイドロポンプ', type: PokemonElementType.water, power: 110, description: '大量の 水を 激しい 勢いで 相手に 発射して 攻撃する。' },
      { name: 'バトンタッチ', type: PokemonElementType.normal, power: null, description: '控えの ポケモンと 入れ替わる。 能力変化は 替わった ポケモンが そのまま 受けつぐ。' },
      { name: 'いやなおと', type: PokemonElementType.normal, power: null, description: 'おもわず 耳を ふさぎたくなる いやなおとを だして 相手の 防御を がくっと さげる。' },
    ],
  },
  gorebyss: {
    flavorText: '海の 底で 暮らしているが 春になると 体の ピンク色が なぜか 鮮やかに 色づく。',
    stats: { hp: 55, attack: 84, defense: 105, specialAttack: 114, specialDefense: 75, speed: 52 },
    moves: [
      { name: 'ねんりき', type: PokemonElementType.psychic, power: 50, description: '弱い 念力を 相手に 送って 攻撃する。 相手を 混乱させることが ある。' },
      { name: 'ドわすれ', type: PokemonElementType.psychic, power: null, description: '頭を からにして 一瞬 なにかを 忘れることで 自分の 特防を ぐーんと あげる。' },
      { name: 'うずしお', type: PokemonElementType.water, power: 35, description: '激しく 渦をまく 水の中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'ハイドロポンプ', type: PokemonElementType.water, power: 110, description: '大量の 水を 激しい 勢いで 相手に 発射して 攻撃する。' },
    ],
  },
  relicanth: {
    flavorText: '１億年前から 姿が 変わらない ポケモン。 深海を 調査中に 発見された。',
    stats: { hp: 100, attack: 90, defense: 130, specialAttack: 45, specialDefense: 65, speed: 55 },
    moves: [
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
      { name: 'あくび', type: PokemonElementType.normal, power: null, description: '大きな あくびで 眠気を 誘う。 次の ターンに 相手を 眠り状態に する。' },
      { name: 'みずでっぽう', type: PokemonElementType.water, power: 40, description: '水を 勢いよく 相手に 発射して 攻撃する。' },
    ],
  },
  luvdisc: {
    flavorText: '暖かい 海に 生息する。 ラブカスを 見つけた カップルは 永遠の 愛が 続くという。',
    stats: { hp: 43, attack: 30, defense: 55, specialAttack: 40, specialDefense: 65, speed: 97 },
    moves: [
      { name: 'てんしのキッス', type: PokemonElementType.normal, power: null, description: '天使のように かわいく キスして 相手を 混乱させる。' },
      { name: 'じたばた', type: PokemonElementType.normal, power: null, description: 'じたばた 暴れて 攻撃する。 自分の ＨＰが 少ないほど 技の 威力は あがる。' },
      { name: 'みずでっぽう', type: PokemonElementType.water, power: 40, description: '水を 勢いよく 相手に 発射して 攻撃する。' },
      { name: 'あまえる', type: PokemonElementType.normal, power: null, description: 'かわいく みつめて 油断を 誘い 相手の 攻撃を がくっと さげる。' },
    ],
  },
  bagon: {
    flavorText: '鍛えられた 首の 筋肉と 鉄の ように 硬い 頭で 大岩を コナゴナに 砕く。',
    stats: { hp: 45, attack: 75, defense: 60, specialAttack: 40, specialDefense: 30, speed: 50 },
    moves: [
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'りゅうのいぶき', type: PokemonElementType.dragon, power: 60, description: 'ものすごい 息を 相手に 吹きつけて 攻撃する。 まひ状態に することが ある。' },
      { name: 'ドラゴンクロー', type: PokemonElementType.dragon, power: 80, description: '鋭く とがった 巨大な ツメで 相手を 切り裂いて 攻撃する。' },
      { name: 'いかり', type: PokemonElementType.normal, power: 20, description: '技を だしたときに 攻撃を 受けると 怒りの 力で 攻撃が あがる。' },
    ],
  },
  beldum: {
    flavorText: '体から 出ている 磁力と 地上の 磁力を 反発させて 空に 浮かぶのだ。',
    stats: { hp: 40, attack: 55, defense: 80, specialAttack: 35, specialDefense: 60, speed: 30 },
    moves: [
      { name: 'とっしん', type: PokemonElementType.normal, power: 90, description: 'すごい 勢いで 相手に ぶつかって 攻撃する。 自分も 少し ダメージを 受ける。' },
    ],
  },
  shelgon: {
    flavorText: '硬い 殻の 中では 細胞が 変化を はじめている。進化する 瞬間に 殻が はがれ落ちる。',
    stats: { hp: 65, attack: 95, defense: 100, specialAttack: 60, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'りゅうのいぶき', type: PokemonElementType.dragon, power: 60, description: 'ものすごい 息を 相手に 吹きつけて 攻撃する。 まひ状態に することが ある。' },
      { name: 'ドラゴンクロー', type: PokemonElementType.dragon, power: 80, description: '鋭く とがった 巨大な ツメで 相手を 切り裂いて 攻撃する。' },
      { name: 'いかり', type: PokemonElementType.normal, power: 20, description: '技を だしたときに 攻撃を 受けると 怒りの 力で 攻撃が あがる。' },
    ],
  },
  salamence: {
    flavorText: '怒らせると 手が つけられない。 すべての ものを ツメで 切り裂き 炎で 燃やして 破壊する。',
    stats: { hp: 95, attack: 135, defense: 80, specialAttack: 110, specialDefense: 80, speed: 100 },
    moves: [
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'りゅうのいぶき', type: PokemonElementType.dragon, power: 60, description: 'ものすごい 息を 相手に 吹きつけて 攻撃する。 まひ状態に することが ある。' },
      { name: 'ドラゴンクロー', type: PokemonElementType.dragon, power: 80, description: '鋭く とがった 巨大な ツメで 相手を 切り裂いて 攻撃する。' },
      { name: 'そらをとぶ', type: PokemonElementType.flying, power: 90, description: '１ターン目で 空へ 飛び ２ターン目に 相手を 攻撃する。 知っている 街に 飛ぶことも できる。' },
    ],
  },
  metang: {
    flavorText: '２匹の ダンバルが 合体した。 鋼の ボディは ジェット機と 衝突しても 傷つかない。',
    stats: { hp: 60, attack: 75, defense: 100, specialAttack: 55, specialDefense: 80, speed: 50 },
    moves: [
      { name: 'コメットパンチ', type: PokemonElementType.steel, power: 90, description: 'すい星の ごとく パンチを くりだして 相手を 攻撃する。自分の 攻撃が あがることが ある。' },
      { name: 'おいうち', type: PokemonElementType.dark, power: 40, description: '相手 ポケモンが 入れ替わるときに 技を だしていると 倍の 威力で 攻撃できる。' },
      { name: 'メタルクロー', type: PokemonElementType.steel, power: 50, description: '鋼鉄の ツメで 相手を 切り裂いて 攻撃する。 自分の 攻撃が あがることが ある。' },
      { name: 'ねんりき', type: PokemonElementType.psychic, power: 50, description: '弱い 念力を 相手に 送って 攻撃する。 相手を 混乱させることが ある。' },
    ],
  },
  metagross: {
    flavorText: '４つの 脳みそが 連なり スーパーコンピュータより すごい 計算で 相手を 分析する。',
    stats: { hp: 80, attack: 135, defense: 130, specialAttack: 95, specialDefense: 90, speed: 70 },
    moves: [
      { name: 'コメットパンチ', type: PokemonElementType.steel, power: 90, description: 'すい星の ごとく パンチを くりだして 相手を 攻撃する。自分の 攻撃が あがることが ある。' },
      { name: 'おいうち', type: PokemonElementType.dark, power: 40, description: '相手 ポケモンが 入れ替わるときに 技を だしていると 倍の 威力で 攻撃できる。' },
      { name: 'メタルクロー', type: PokemonElementType.steel, power: 50, description: '鋼鉄の ツメで 相手を 切り裂いて 攻撃する。 自分の 攻撃が あがることが ある。' },
      { name: 'ねんりき', type: PokemonElementType.psychic, power: 50, description: '弱い 念力を 相手に 送って 攻撃する。 相手を 混乱させることが ある。' },
    ],
  },
  regirock: {
    flavorText: '全身が 岩で できている。 戦いで 体が 欠けても 岩を くっつけて 治してしまう。',
    stats: { hp: 80, attack: 100, defense: 200, specialAttack: 50, specialDefense: 100, speed: 50 },
    moves: [
      { name: 'ロックオン', type: PokemonElementType.normal, power: null, description: '照準を しっかり あわせて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'いわおとし', type: PokemonElementType.rock, power: 50, description: '小さな 岩を 持ちあげて 相手に 投げつけて 攻撃する。' },
      { name: 'でんじほう', type: PokemonElementType.electric, power: 120, description: '大砲の ような 電気を 発射して 攻撃する。 相手を まひの 状態に する。' },
      { name: 'だいばくはつ', type: PokemonElementType.normal, power: 250, description: '大きな 爆発で 自分の 周りに いるものを 攻撃する。 使ったあとに ひんしに なる。' },
    ],
  },
  regice: {
    flavorText: '氷河の 中で 数千年 眠っていたと 言われている。 マグマでも 体は 溶けない。',
    stats: { hp: 80, attack: 50, defense: 100, specialAttack: 100, specialDefense: 200, speed: 50 },
    moves: [
      { name: 'ロックオン', type: PokemonElementType.normal, power: null, description: '照準を しっかり あわせて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'でんじほう', type: PokemonElementType.electric, power: 120, description: '大砲の ような 電気を 発射して 攻撃する。 相手を まひの 状態に する。' },
      { name: 'だいばくはつ', type: PokemonElementType.normal, power: 250, description: '大きな 爆発で 自分の 周りに いるものを 攻撃する。 使ったあとに ひんしに なる。' },
      { name: 'ドわすれ', type: PokemonElementType.psychic, power: null, description: '頭を からにして 一瞬 なにかを 忘れることで 自分の 特防を ぐーんと あげる。' },
    ],
  },
  registeel: {
    flavorText: '何万年も 地下の 圧力で 鍛えられた 金属の ボディは 傷ひとつ つかない。',
    stats: { hp: 80, attack: 75, defense: 150, specialAttack: 75, specialDefense: 150, speed: 50 },
    moves: [
      { name: 'ロックオン', type: PokemonElementType.normal, power: null, description: '照準を しっかり あわせて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'でんじほう', type: PokemonElementType.electric, power: 120, description: '大砲の ような 電気を 発射して 攻撃する。 相手を まひの 状態に する。' },
      { name: 'メタルクロー', type: PokemonElementType.steel, power: 50, description: '鋼鉄の ツメで 相手を 切り裂いて 攻撃する。 自分の 攻撃が あがることが ある。' },
      { name: 'だいばくはつ', type: PokemonElementType.normal, power: 250, description: '大きな 爆発で 自分の 周りに いるものを 攻撃する。 使ったあとに ひんしに なる。' },
    ],
  },
  latias: {
    flavorText: 'テレパシーで 気持ちを 通わせる。 光を 屈折させる 羽毛で 体を 包み 姿を 消す。',
    stats: { hp: 80, attack: 80, defense: 90, specialAttack: 110, specialDefense: 130, speed: 110 },
    moves: [
      { name: 'ミストボール', type: PokemonElementType.psychic, power: 95, description: '霧状の 羽毛で 包みこみ 攻撃する。 相手の 特攻を さげることが ある。' },
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
      { name: 'サイコウェーブ', type: PokemonElementType.psychic, power: null, description: '不思議な 念波を 相手に 発射して 攻撃する。 使うたびに ダメージが 変わる。' },
      { name: 'リフレッシュ', type: PokemonElementType.normal, power: null, description: '体を やすめて 自分が おっている 毒 まひ やけどの 状態異常を 治す。' },
    ],
  },
  kyogre: {
    flavorText: '大雨と 大津波で 海を 広げた 神話の ポケモン。 グラードンと 激しく 戦った。',
    stats: { hp: 100, attack: 100, defense: 90, specialAttack: 150, specialDefense: 140, speed: 90 },
    moves: [
      { name: 'しおふき', type: PokemonElementType.water, power: 150, description: '潮を 吹きつけて 攻撃する。 自分の ＨＰが 少ないほど 技の 威力は さがる。' },
      { name: 'ぜったいれいど', type: PokemonElementType.ice, power: null, description: '絶対零度の 冷たさで 相手を 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'げんしのちから', type: PokemonElementType.rock, power: 60, description: '原始の 力で 攻撃する。 自分の すべての 能力が あがることが ある。' },
      { name: 'ハイドロポンプ', type: PokemonElementType.water, power: 110, description: '大量の 水を 激しい 勢いで 相手に 発射して 攻撃する。' },
    ],
  },
  latios: {
    flavorText: '高い 知能を 持つ ポケモン。 腕を 折りたたんで 飛べば ジェット機を 追い越す スピードだ。',
    stats: { hp: 80, attack: 90, defense: 80, specialAttack: 130, specialDefense: 110, speed: 110 },
    moves: [
      { name: 'ラスターパージ', type: PokemonElementType.psychic, power: 95, description: 'まばゆい 光を 解放して 攻撃する。 相手の 特防を さげることが ある。' },
      { name: 'サイコウェーブ', type: PokemonElementType.psychic, power: null, description: '不思議な 念波を 相手に 発射して 攻撃する。 使うたびに ダメージが 変わる。' },
      { name: 'リフレッシュ', type: PokemonElementType.normal, power: null, description: '体を やすめて 自分が おっている 毒 まひ やけどの 状態異常を 治す。' },
      { name: 'おきみやげ', type: PokemonElementType.dark, power: null, description: '自分は ひんしに なるが そのかわりに 相手の 攻撃と 特攻を がくっと さげる。' },
    ],
  },
  groudon: {
    flavorText: '高熱で 水を 蒸発させて 大地を 広げたと 言われている。 カイオーガと 激しく 戦った。',
    stats: { hp: 100, attack: 150, defense: 140, specialAttack: 100, specialDefense: 90, speed: 90 },
    moves: [
      { name: 'ふんか', type: PokemonElementType.fire, power: 150, description: '怒りを 爆発させて 相手を 攻撃する。自分の ＨＰが 少ないほど 技の 威力は さがる。' },
      { name: 'じわれ', type: PokemonElementType.ground, power: null, description: '地割れの 裂け目に 相手を 落として 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'きりさく', type: PokemonElementType.normal, power: 70, description: 'ツメや カマなどで 相手を 切り裂いて 攻撃する。 急所に 当たりやすい。' },
      { name: 'ビルドアップ', type: PokemonElementType.fighting, power: null, description: '体に 力を こめて 筋肉を ぶあつく することで 自分の 攻撃と 防御を あげる。' },
    ],
  },
  rayquaza: {
    flavorText: '雲より はるか上の オゾン層に 生息しているため 地上から 姿を 見ることは できない。',
    stats: { hp: 105, attack: 150, defense: 90, specialAttack: 150, specialDefense: 90, speed: 95 },
    moves: [
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'りゅうのまい', type: PokemonElementType.dragon, power: null, description: '神秘的で 力強い 舞を 激しく おどる。自分の 攻撃と 素早さを あげる。' },
      { name: 'たつまき', type: PokemonElementType.dragon, power: 40, description: '竜巻を おこして 相手を まきこみ 攻撃する。 相手を ひるませることが ある。' },
      { name: 'ドラゴンクロー', type: PokemonElementType.dragon, power: 80, description: '鋭く とがった 巨大な ツメで 相手を 切り裂いて 攻撃する。' },
    ],
  },
  jirachi: {
    flavorText: '目覚めた とき 頭の 短冊に 書かれた 願い事を かなえると 大昔から 語り継がれてきた。',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'はめつのねがい', type: PokemonElementType.steel, power: 140, description: '技を 使った ２ターン後に 無数の 光の 束で 相手を 攻撃する。' },
      { name: 'コスモパワー', type: PokemonElementType.psychic, power: null, description: '宇宙から 神秘の 力を とりこむ ことで 自分の 防御と 特防を あげる。' },
      { name: 'リフレッシュ', type: PokemonElementType.normal, power: null, description: '体を やすめて 自分が おっている 毒 まひ やけどの 状態異常を 治す。' },
      { name: 'ねがいごと', type: PokemonElementType.normal, power: null, description: '次の ターンに 自分の ＨＰを 最大ＨＰの 半分 回復する。' },
    ],
  },
  deoxys: {
    flavorText: '隕石に 付着していた 宇宙ウイルスの ＤＮＡが 変異して 生まれた ポケモン。',
    stats: { hp: 50, attack: 150, defense: 50, specialAttack: 150, specialDefense: 50, speed: 150 },
    moves: [
      { name: 'サイコブースト', type: PokemonElementType.psychic, power: 140, description: 'フルパワーで 相手を 攻撃する。 使うと 反動で 自分の 特攻が がくっと さがる。' },
      { name: 'まきつく', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを つかって ４ー５ターンの あいだ 相手に まきついて 攻撃する。' },
      { name: 'テレポート', type: PokemonElementType.psychic, power: null, description: '野生ポケモンとの 戦闘を やめる。 最後に はいった ポケセンの ある 街にも 行ける。' },
      { name: 'コスモパワー', type: PokemonElementType.psychic, power: null, description: '宇宙から 神秘の 力を とりこむ ことで 自分の 防御と 特防を あげる。' },
    ],
  },
  deoxys_speed: {
    flavorText: '隕石に 付着していた 宇宙ウイルスの ＤＮＡが 変異して 生まれた ポケモン。',
    stats: { hp: 50, attack: 95, defense: 90, specialAttack: 95, specialDefense: 90, speed: 180 },
    moves: [
      { name: 'サイコブースト', type: PokemonElementType.psychic, power: 140, description: 'フルパワーで 相手を 攻撃する。 使うと 反動で 自分の 特攻が がくっと さがる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'まきつく', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを つかって ４ー５ターンの あいだ 相手に まきついて 攻撃する。' },
      { name: 'じこさいせい', type: PokemonElementType.normal, power: null, description: '細胞を 再生させて 自分の 最大ＨＰの 半分の ＨＰを 回復する。' },
    ],
  },
  deoxys_attack: {
    flavorText: '隕石に 付着していた 宇宙ウイルスの ＤＮＡが 変異して 生まれた ポケモン。',
    stats: { hp: 50, attack: 180, defense: 20, specialAttack: 180, specialDefense: 20, speed: 150 },
    moves: [
      { name: 'サイコブースト', type: PokemonElementType.psychic, power: 140, description: 'フルパワーで 相手を 攻撃する。 使うと 反動で 自分の 特攻が がくっと さがる。' },
      { name: 'まきつく', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを つかって ４ー５ターンの あいだ 相手に まきついて 攻撃する。' },
      { name: 'テレポート', type: PokemonElementType.psychic, power: null, description: '野生ポケモンとの 戦闘を やめる。 最後に はいった ポケセンの ある 街にも 行ける。' },
      { name: 'コスモパワー', type: PokemonElementType.psychic, power: null, description: '宇宙から 神秘の 力を とりこむ ことで 自分の 防御と 特防を あげる。' },
    ],
  },
  deoxys_defense: {
    flavorText: '隕石に 付着していた 宇宙ウイルスの ＤＮＡが 変異して 生まれた ポケモン。',
    stats: { hp: 50, attack: 70, defense: 160, specialAttack: 70, specialDefense: 160, speed: 90 },
    moves: [
      { name: 'サイコブースト', type: PokemonElementType.psychic, power: 140, description: 'フルパワーで 相手を 攻撃する。 使うと 反動で 自分の 特攻が がくっと さがる。' },
      { name: 'まきつく', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを つかって ４ー５ターンの あいだ 相手に まきついて 攻撃する。' },
      { name: 'テレポート', type: PokemonElementType.psychic, power: null, description: '野生ポケモンとの 戦闘を やめる。 最後に はいった ポケセンの ある 街にも 行ける。' },
      { name: 'ミラーコート', type: PokemonElementType.psychic, power: null, description: '相手から 受けた 特殊攻撃の ダメージを ２倍に して その相手に 返す。' },
    ],
  },
  turtwig: {
    flavorText: '太陽の 光を 浴びて 全身で 光合成を する。 甲羅は 土が 硬くなったもの。',
    stats: { hp: 55, attack: 68, defense: 64, specialAttack: 45, specialDefense: 55, speed: 31 },
    moves: [
      { name: 'からにこもる', type: PokemonElementType.water, power: null, description: '殻に 潜りこんで 身を守り 自分の 防御を あげる。' },
      { name: 'はっぱカッター', type: PokemonElementType.grass, power: 55, description: 'はっぱを とばして 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'すいとる', type: PokemonElementType.grass, power: 20, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'メガドレイン', type: PokemonElementType.grass, power: 40, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
    ],
  },
  grotle: {
    flavorText: '森の 中の 水辺で 暮らす。 昼間は 森の 外に 出て 甲羅の 木に 光を 当てる。',
    stats: { hp: 75, attack: 89, defense: 85, specialAttack: 55, specialDefense: 65, speed: 36 },
    moves: [
      { name: 'からにこもる', type: PokemonElementType.water, power: null, description: '殻に 潜りこんで 身を守り 自分の 防御を あげる。' },
      { name: 'はっぱカッター', type: PokemonElementType.grass, power: 55, description: 'はっぱを とばして 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'すいとる', type: PokemonElementType.grass, power: 20, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'メガドレイン', type: PokemonElementType.grass, power: 40, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
    ],
  },
  torterra: {
    flavorText: '大昔の 人々は 大地の 下には 巨大な ドダイトスが いると 空想していた。',
    stats: { hp: 95, attack: 109, defense: 105, specialAttack: 75, specialDefense: 85, speed: 56 },
    moves: [
      { name: 'ウッドハンマー', type: PokemonElementType.grass, power: 120, description: '硬い 胴体を 相手に たたきつけて 攻撃する。 自分も かなり ダメージを 受ける。' },
      { name: 'からにこもる', type: PokemonElementType.water, power: null, description: '殻に 潜りこんで 身を守り 自分の 防御を あげる。' },
      { name: 'はっぱカッター', type: PokemonElementType.grass, power: 55, description: 'はっぱを とばして 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'すいとる', type: PokemonElementType.grass, power: 20, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
    ],
  },
  chimchar: {
    flavorText: 'お尻の 炎は お腹で 作られた ガスが 燃料。 雨に ぬれても 消えない。',
    stats: { hp: 44, attack: 58, defense: 44, specialAttack: 58, specialDefense: 44, speed: 61 },
    moves: [
      { name: 'なまける', type: PokemonElementType.normal, power: null, description: '怠けて やすむ。 自分の ＨＰを 最大ＨＰの 半分 回復する。' },
      { name: 'かえんぐるま', type: PokemonElementType.fire, power: 60, description: '炎を まとい 相手に 突進して 攻撃する。 やけど状態に することが ある。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  monferno: {
    flavorText: '尻尾の 炎の 勢いを うまく コントロールして 自分の 得意な 間合いで 戦うのだ。',
    stats: { hp: 64, attack: 78, defense: 52, specialAttack: 78, specialDefense: 52, speed: 81 },
    moves: [
      { name: 'なまける', type: PokemonElementType.normal, power: null, description: '怠けて やすむ。 自分の ＨＰを 最大ＨＰの 半分 回復する。' },
      { name: 'マッハパンチ', type: PokemonElementType.fighting, power: 40, description: '目にも 留まらぬ ものすごい 速さで パンチを くりだす。 必ず 先制攻撃 できる。' },
      { name: 'かえんぐるま', type: PokemonElementType.fire, power: 60, description: '炎を まとい 相手に 突進して 攻撃する。 やけど状態に することが ある。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
    ],
  },
  infernape: {
    flavorText: '頭で 燃える 炎の ように 激しい 性格の ポケモン。 素早さでは だれにも 負けない。',
    stats: { hp: 76, attack: 104, defense: 71, specialAttack: 104, specialDefense: 71, speed: 108 },
    moves: [
      { name: 'マッハパンチ', type: PokemonElementType.fighting, power: 40, description: '目にも 留まらぬ ものすごい 速さで パンチを くりだす。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'かえんぐるま', type: PokemonElementType.fire, power: 60, description: '炎を まとい 相手に 突進して 攻撃する。 やけど状態に することが ある。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
    ],
  },
  piplup: {
    flavorText: '世話を 焼かれる ことが 大嫌い。 トレーナーの 指示を 聞かないので 仲良く なるのが 難しい。',
    stats: { hp: 53, attack: 51, defense: 53, specialAttack: 61, specialDefense: 56, speed: 40 },
    moves: [
      { name: 'ドリルくちばし', type: PokemonElementType.flying, power: 80, description: '回転しながら とがった くちばしを 相手に 突き刺して 攻撃する。' },
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
    ],
  },
  prinplup: {
    flavorText: '群れを 作らずに １匹で いる。 自分が 一番 偉いと どの ポッタイシも 考えているようだ。',
    stats: { hp: 64, attack: 66, defense: 68, specialAttack: 81, specialDefense: 76, speed: 50 },
    moves: [
      { name: 'ドリルくちばし', type: PokemonElementType.flying, power: 80, description: '回転しながら とがった くちばしを 相手に 突き刺して 攻撃する。' },
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
    ],
  },
  empoleon: {
    flavorText: 'ジェットスキーに 負けない 速度で 泳ぐ。翼の 縁は 鋭く 流氷を 切断する。',
    stats: { hp: 84, attack: 86, defense: 88, specialAttack: 111, specialDefense: 101, speed: 60 },
    moves: [
      { name: 'ドリルくちばし', type: PokemonElementType.flying, power: 80, description: '回転しながら とがった くちばしを 相手に 突き刺して 攻撃する。' },
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'アクアジェット', type: PokemonElementType.water, power: 40, description: '目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。' },
    ],
  },
  starly: {
    flavorText: 'たくさんの 群れで 行動する。 体は 小さいが 羽ばたく 力は 非常に 強い。',
    stats: { hp: 40, attack: 55, defense: 30, specialAttack: 30, specialDefense: 30, speed: 60 },
    moves: [
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'ふきとばし', type: PokemonElementType.normal, power: null, description: '相手を 吹きとばして 控えの ポケモンを ひきずりだす。 野生の 場合は 戦闘が 終わる。' },
      { name: 'ブレイブバード', type: PokemonElementType.flying, power: 120, description: 'はねを おりたたみ 低空飛行で 突撃する。 自分も かなり ダメージを 受ける。' },
      { name: 'でんこうせっか', type: PokemonElementType.normal, power: 40, description: '目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。' },
    ],
  },
  staravia: {
    flavorText: '大きな グループを 作って 行動する 習性。 グループ同士の 争いは 激しい。',
    stats: { hp: 55, attack: 75, defense: 50, specialAttack: 40, specialDefense: 40, speed: 80 },
    moves: [
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'ふきとばし', type: PokemonElementType.normal, power: null, description: '相手を 吹きとばして 控えの ポケモンを ひきずりだす。 野生の 場合は 戦闘が 終わる。' },
      { name: 'ブレイブバード', type: PokemonElementType.flying, power: 120, description: 'はねを おりたたみ 低空飛行で 突撃する。 自分も かなり ダメージを 受ける。' },
      { name: 'でんこうせっか', type: PokemonElementType.normal, power: 40, description: '目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。' },
    ],
  },
  staraptor: {
    flavorText: '翼と 脚の 筋肉が 強く 小さな ポケモンを つかんだまま らくらくと 飛ぶことが できる。',
    stats: { hp: 85, attack: 120, defense: 70, specialAttack: 50, specialDefense: 60, speed: 100 },
    moves: [
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'ふきとばし', type: PokemonElementType.normal, power: null, description: '相手を 吹きとばして 控えの ポケモンを ひきずりだす。 野生の 場合は 戦闘が 終わる。' },
      { name: 'ブレイブバード', type: PokemonElementType.flying, power: 120, description: 'はねを おりたたみ 低空飛行で 突撃する。 自分も かなり ダメージを 受ける。' },
      { name: 'インファイト', type: PokemonElementType.fighting, power: 120, description: '守りを 捨てて 相手の ふところに 突撃する。自分の 防御と 特防が さがる。' },
    ],
  },
  bidoof: {
    flavorText: 'なにごとにも 動じない 図太い 神経の 持ち主。 見かけの 割には 機敏に 活動する。',
    stats: { hp: 59, attack: 45, defense: 40, specialAttack: 35, specialDefense: 40, speed: 31 },
    moves: [
      { name: 'ひっさつまえば', type: PokemonElementType.normal, power: 80, description: '鋭い 前歯で 強く かみついて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'いかりのまえば', type: PokemonElementType.normal, power: null, description: '鋭い 前歯で 激しく かみついて 攻撃する。 相手の ＨＰは 半分に なる。' },
      { name: 'あくび', type: PokemonElementType.normal, power: null, description: '大きな あくびで 眠気を 誘う。 次の ターンに 相手を 眠り状態に する。' },
      { name: 'ドわすれ', type: PokemonElementType.psychic, power: null, description: '頭を からにして 一瞬 なにかを 忘れることで 自分の 特防を ぐーんと あげる。' },
    ],
  },
  bibarel: {
    flavorText: '鋭い 前歯で 削り取った 木の枝や 根っこを 積み上げて 水辺に せっせと 巣を 作る。',
    stats: { hp: 79, attack: 85, defense: 60, specialAttack: 55, specialDefense: 60, speed: 71 },
    moves: [
      { name: 'ひっさつまえば', type: PokemonElementType.normal, power: 80, description: '鋭い 前歯で 強く かみついて 攻撃する。 相手を ひるませることが ある。' },
      { name: 'いかりのまえば', type: PokemonElementType.normal, power: null, description: '鋭い 前歯で 激しく かみついて 攻撃する。 相手の ＨＰは 半分に なる。' },
      { name: 'あくび', type: PokemonElementType.normal, power: null, description: '大きな あくびで 眠気を 誘う。 次の ターンに 相手を 眠り状態に する。' },
      { name: 'ドわすれ', type: PokemonElementType.psychic, power: null, description: '頭を からにして 一瞬 なにかを 忘れることで 自分の 特防を ぐーんと あげる。' },
    ],
  },
  kricketot: {
    flavorText: '触覚を ぶつけ合って 鳴らす 音で 仲間と 会話をする。 音色は 秋の 夜の 風物詩。',
    stats: { hp: 37, attack: 25, defense: 41, specialAttack: 25, specialDefense: 41, speed: 25 },
    moves: [
      { name: 'むしくい', type: PokemonElementType.bug, power: 60, description: 'かみついて 攻撃する。 相手が きのみを 持っているとき 食べて きのみの 効果を 受けられる。' },
      { name: 'がまん', type: PokemonElementType.normal, power: null, description: '２ターンの あいだ 攻撃に たえて 受けた ダメージを ２倍にして 相手に 返す。' },
      { name: 'なきごえ', type: PokemonElementType.normal, power: null, description: 'かわいい なきごえを 聞かせて 気を ひき 油断を させて 相手の 攻撃を さげる。' },
    ],
  },
  kricketune: {
    flavorText: '鳴くときは ナイフのような 腕を 胸の 前で 交差させる。 即興で メロディを 作る。',
    stats: { hp: 77, attack: 85, defense: 51, specialAttack: 55, specialDefense: 51, speed: 65 },
    moves: [
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
      { name: 'うたう', type: PokemonElementType.normal, power: null, description: '心地好い きれいな 歌声を 聞かせて 相手を 眠り状態に する。' },
      { name: 'むしのさざめき', type: PokemonElementType.bug, power: 90, description: 'はねの 振動で 音波を おこして 攻撃する。相手の 特防を さげることが ある。' },
      { name: 'きゅうけつ', type: PokemonElementType.bug, power: 80, description: '血を 吸い取って 相手を 攻撃する。与えた ダメージの 半分の ＨＰを 回復できる。' },
    ],
  },
  shinx: {
    flavorText: '体を 動かすたびに 筋肉が 伸び縮みして 電気が 生まれる。 ピンチになると 体が 輝く。',
    stats: { hp: 45, attack: 65, defense: 34, specialAttack: 40, specialDefense: 34, speed: 45 },
    moves: [
      { name: 'スパーク', type: PokemonElementType.electric, power: 65, description: '電気を まとい 相手に 突進して 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
      { name: 'ほうでん', type: PokemonElementType.electric, power: 80, description: 'まばゆい 電撃で 自分の 周りに いるものを 攻撃する。 まひ状態に することが ある。' },
      { name: 'かみなりのキバ', type: PokemonElementType.electric, power: 65, description: '電気を ためた キバで かみつく。 相手を ひるませたり まひ状態に することが ある。' },
    ],
  },
  luxio: {
    flavorText: '１発で 気絶させるほどの 電流を ツメから 流す。 数匹の グループで 暮らす。',
    stats: { hp: 60, attack: 85, defense: 49, specialAttack: 60, specialDefense: 49, speed: 60 },
    moves: [
      { name: 'スパーク', type: PokemonElementType.electric, power: 65, description: '電気を まとい 相手に 突進して 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
      { name: 'ほうでん', type: PokemonElementType.electric, power: 80, description: 'まばゆい 電撃で 自分の 周りに いるものを 攻撃する。 まひ状態に することが ある。' },
      { name: 'かみなりのキバ', type: PokemonElementType.electric, power: 65, description: '電気を ためた キバで かみつく。 相手を ひるませたり まひ状態に することが ある。' },
    ],
  },
  luxray: {
    flavorText: '瞳が 金色に 光るとき 壁の 向こうに 隠れている 獲物を 見つけることが できる。',
    stats: { hp: 80, attack: 120, defense: 79, specialAttack: 95, specialDefense: 79, speed: 70 },
    moves: [
      { name: 'スパーク', type: PokemonElementType.electric, power: 65, description: '電気を まとい 相手に 突進して 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
      { name: 'ほうでん', type: PokemonElementType.electric, power: 80, description: 'まばゆい 電撃で 自分の 周りに いるものを 攻撃する。 まひ状態に することが ある。' },
      { name: 'かみなりのキバ', type: PokemonElementType.electric, power: 65, description: '電気を ためた キバで かみつく。 相手を ひるませたり まひ状態に することが ある。' },
    ],
  },
  budew: {
    flavorText: '暖かい 日差しを 浴びると つぼみが 開き 花粉を 飛ばす。 きれいな 水の 近くが 住処。',
    stats: { hp: 40, attack: 30, defense: 35, specialAttack: 50, specialDefense: 70, speed: 55 },
    moves: [
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
      { name: 'しびれごな', type: PokemonElementType.grass, power: null, description: 'しびれる 粉を たくさん ふりまいて 相手を まひ状態に する。' },
      { name: 'せいちょう', type: PokemonElementType.normal, power: null, description: '体を 一気に 大きく 生長させて 攻撃と 特攻を あげる。' },
      { name: 'すいとる', type: PokemonElementType.grass, power: 20, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
    ],
  },
  roserade: {
    flavorText: '甘い 香りで 獲物を 誘い 両腕の 毒のムチを 使って 刺したり 締めたりして しとめる。',
    stats: { hp: 60, attack: 70, defense: 65, specialAttack: 125, specialDefense: 105, speed: 90 },
    moves: [
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'あまいかおり', type: PokemonElementType.normal, power: null, description: '香りで 相手の 回避率を がくっと さげる。草むら などで 使うと ポケモンが よってくる。' },
      { name: 'メガドレイン', type: PokemonElementType.grass, power: 40, description: '養分を 吸い取り 攻撃する。 相手に 与えた ダメージの 半分の ＨＰを 回復できる。' },
      { name: 'マジカルリーフ', type: PokemonElementType.grass, power: 60, description: '相手を 追跡する 不思議な はっぱを まきちらす。 攻撃は 必ず 命中する。' },
    ],
  },
  cranidos: {
    flavorText: '鉄球の ような 化石から 復活した 古代の ポケモン。 頭突きで 獲物を しとめた。',
    stats: { hp: 67, attack: 125, defense: 40, specialAttack: 30, specialDefense: 30, speed: 58 },
    moves: [
      { name: 'もろはのずつき', type: PokemonElementType.rock, power: 150, description: '命を 懸けて こん身の 力で 相手に ずつきを する。自分も ものすごい ダメージを 受ける。' },
      { name: 'おいうち', type: PokemonElementType.dark, power: 40, description: '相手 ポケモンが 入れ替わるときに 技を だしていると 倍の 威力で 攻撃できる。' },
      { name: 'きあいだめ', type: PokemonElementType.normal, power: null, description: '深く 息を 吸い 気合を こめる。 自分の 攻撃が 急所に 当たりやすくなる。' },
      { name: 'げんしのちから', type: PokemonElementType.rock, power: 60, description: '原始の 力で 攻撃する。 自分の すべての 能力が あがることが ある。' },
    ],
  },
  rampardos: {
    flavorText: 'どんな 衝撃にも 耐えられる 分厚い 頭蓋骨に 押さえられて 脳みそは 大きく ならなかった。',
    stats: { hp: 97, attack: 165, defense: 60, specialAttack: 65, specialDefense: 50, speed: 58 },
    moves: [
      { name: 'もろはのずつき', type: PokemonElementType.rock, power: 150, description: '命を 懸けて こん身の 力で 相手に ずつきを する。自分も ものすごい ダメージを 受ける。' },
      { name: 'おいうち', type: PokemonElementType.dark, power: 40, description: '相手 ポケモンが 入れ替わるときに 技を だしていると 倍の 威力で 攻撃できる。' },
      { name: 'きあいだめ', type: PokemonElementType.normal, power: null, description: '深く 息を 吸い 気合を こめる。 自分の 攻撃が 急所に 当たりやすくなる。' },
      { name: 'げんしのちから', type: PokemonElementType.rock, power: 60, description: '原始の 力で 攻撃する。 自分の すべての 能力が あがることが ある。' },
    ],
  },
  shieldon: {
    flavorText: '大木の 幹に こすりつけて 硬い 顔を 磨く 習性。 後ろからの 攻撃に 弱い。',
    stats: { hp: 30, attack: 42, defense: 118, specialAttack: 42, specialDefense: 88, speed: 30 },
    moves: [
      { name: 'メタルバースト', type: PokemonElementType.steel, power: null, description: '技を だす前に 最後に 受けた 技の ダメージを 大きくして だした 相手に 返す。' },
      { name: 'きんぞくおん', type: PokemonElementType.steel, power: null, description: '金属を こすって でるような いやな 音を 聞かせる。 相手の 特防を がくっと さげる。' },
      { name: 'げんしのちから', type: PokemonElementType.rock, power: 60, description: '原始の 力で 攻撃する。 自分の すべての 能力が あがることが ある。' },
      { name: 'アイアンヘッド', type: PokemonElementType.steel, power: 80, description: '鋼の ような 硬い 頭で 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  bastiodon: {
    flavorText: '横一列に 並ぶと どんな ポケモンでも 突破 できない。 そうやって 子供を 守っていた。',
    stats: { hp: 60, attack: 52, defense: 168, specialAttack: 47, specialDefense: 138, speed: 30 },
    moves: [
      { name: 'メタルバースト', type: PokemonElementType.steel, power: null, description: '技を だす前に 最後に 受けた 技の ダメージを 大きくして だした 相手に 返す。' },
      { name: 'きんぞくおん', type: PokemonElementType.steel, power: null, description: '金属を こすって でるような いやな 音を 聞かせる。 相手の 特防を がくっと さげる。' },
      { name: 'とおせんぼう', type: PokemonElementType.normal, power: null, description: '両手を ひろげて たちはだかり 相手の 逃げ道を ふさいで 逃げられなくする。' },
      { name: 'げんしのちから', type: PokemonElementType.rock, power: 60, description: '原始の 力で 攻撃する。 自分の すべての 能力が あがることが ある。' },
    ],
  },
  burmy_plant: {
    flavorText: '冷たい 木枯らしを 防ぐため 小枝や 落ち葉を 材料に ミノを 作り 体を 覆う。',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: 'むしくい', type: PokemonElementType.bug, power: 60, description: 'かみついて 攻撃する。 相手が きのみを 持っているとき 食べて きのみの 効果を 受けられる。' },
      { name: 'たいあたり', type: PokemonElementType.normal, power: 40, description: '相手に むかって 全身で ぶつかっていき 攻撃する。' },
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
      { name: 'まもる', type: PokemonElementType.normal, power: null, description: '相手の 攻撃を まったく 受けない。 連続で だすと 失敗しやすい。' },
    ],
  },
  burmy_sandy: {
    flavorText: '冷たい 木枯らしを 防ぐため 小枝や 落ち葉を 材料に ミノを 作り 体を 覆う。',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: 'むしくい', type: PokemonElementType.bug, power: 60, description: 'かみついて 攻撃する。 相手が きのみを 持っているとき 食べて きのみの 効果を 受けられる。' },
      { name: 'たいあたり', type: PokemonElementType.normal, power: 40, description: '相手に むかって 全身で ぶつかっていき 攻撃する。' },
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
      { name: 'まもる', type: PokemonElementType.normal, power: null, description: '相手の 攻撃を まったく 受けない。 連続で だすと 失敗しやすい。' },
    ],
  },
  burmy_trash: {
    flavorText: '冷たい 木枯らしを 防ぐため 小枝や 落ち葉を 材料に ミノを 作り 体を 覆う。',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: 'むしくい', type: PokemonElementType.bug, power: 60, description: 'かみついて 攻撃する。 相手が きのみを 持っているとき 食べて きのみの 効果を 受けられる。' },
      { name: 'たいあたり', type: PokemonElementType.normal, power: 40, description: '相手に むかって 全身で ぶつかっていき 攻撃する。' },
      { name: 'めざめるパワー', type: PokemonElementType.normal, power: 60, description: '技を 使った ポケモンに よって 技の タイプが 変わる。' },
      { name: 'まもる', type: PokemonElementType.normal, power: null, description: '相手の 攻撃を まったく 受けない。 連続で だすと 失敗しやすい。' },
    ],
  },
  wormadam_plant: {
    flavorText: '進化した 場所によって 姿が 変わる。身近にある 材料が 体の 一部に なるのだ。',
    stats: { hp: 60, attack: 59, defense: 85, specialAttack: 79, specialDefense: 105, speed: 36 },
    moves: [
      { name: 'はっぱカッター', type: PokemonElementType.grass, power: 55, description: 'はっぱを とばして 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'せいちょう', type: PokemonElementType.normal, power: null, description: '体を 一気に 大きく 生長させて 攻撃と 特攻を あげる。' },
      { name: 'むしくい', type: PokemonElementType.bug, power: 60, description: 'かみついて 攻撃する。 相手が きのみを 持っているとき 食べて きのみの 効果を 受けられる。' },
      { name: 'リーフストーム', type: PokemonElementType.grass, power: 130, description: 'とがった はっぱで 相手に あらしを おこす。使うと 反動で 自分の 特攻が がくっと さがる。' },
    ],
  },
  wormadam_sandy: {
    flavorText: '進化した 場所によって 姿が 変わる。身近にある 材料が 体の 一部に なるのだ。',
    stats: { hp: 60, attack: 79, defense: 105, specialAttack: 59, specialDefense: 85, speed: 36 },
    moves: [
      { name: 'じわれ', type: PokemonElementType.ground, power: null, description: '地割れの 裂け目に 相手を 落として 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
      { name: 'むしくい', type: PokemonElementType.bug, power: 60, description: 'かみついて 攻撃する。 相手が きのみを 持っているとき 食べて きのみの 効果を 受けられる。' },
      { name: 'ねんりき', type: PokemonElementType.psychic, power: 50, description: '弱い 念力を 相手に 送って 攻撃する。 相手を 混乱させることが ある。' },
    ],
  },
  wormadam_trash: {
    flavorText: '進化した 場所によって 姿が 変わる。身近にある 材料が 体の 一部に なるのだ。',
    stats: { hp: 60, attack: 69, defense: 95, specialAttack: 69, specialDefense: 95, speed: 36 },
    moves: [
      { name: 'ミラーショット', type: PokemonElementType.steel, power: 65, description: '磨きあげられた 体から せん光の 力を 相手に 放つ。 命中率を さげることが ある。' },
      { name: 'きんぞくおん', type: PokemonElementType.steel, power: null, description: '金属を こすって でるような いやな 音を 聞かせる。 相手の 特防を がくっと さげる。' },
      { name: 'むしくい', type: PokemonElementType.bug, power: 60, description: 'かみついて 攻撃する。 相手が きのみを 持っているとき 食べて きのみの 効果を 受けられる。' },
      { name: 'ねんりき', type: PokemonElementType.psychic, power: 50, description: '弱い 念力を 相手に 送って 攻撃する。 相手を 混乱させることが ある。' },
    ],
  },
  mothim: {
    flavorText: '花の ミツが 大好き。 ミツハニーの 集めた ミツを 横取りして 食べてしまう。',
    stats: { hp: 70, attack: 94, defense: 50, specialAttack: 94, specialDefense: 50, speed: 66 },
    moves: [
      { name: 'ほごしょく', type: PokemonElementType.normal, power: null, description: '水辺や 草むら どうくつなど いる 場所に あわせて 自分の タイプを 変える。' },
      { name: 'どくのこな', type: PokemonElementType.poison, power: null, description: '毒の ある 粉を たくさん ふりまいて 相手を 毒状態に する。' },
      { name: 'ぎんいろのかぜ', type: PokemonElementType.bug, power: 60, description: '風に りんぷんを のせて 相手を 攻撃する。自分の すべての 能力が あがることが ある。' },
      { name: 'かぜおこし', type: PokemonElementType.flying, power: 40, description: '翼で おこした 激しい 風を 相手に ぶつけて 攻撃する。' },
    ],
  },
  combee_female: {
    flavorText: '生まれたときから ３匹 一緒。 ビークインに 喜んでもらうため いつも 花のミツを 集めている。',
    stats: { hp: 30, attack: 30, defense: 42, specialAttack: 30, specialDefense: 42, speed: 70 },
    moves: [
      { name: 'かぜおこし', type: PokemonElementType.flying, power: 40, description: '翼で おこした 激しい 風を 相手に ぶつけて 攻撃する。' },
      { name: 'あまいかおり', type: PokemonElementType.normal, power: null, description: '香りで 相手の 回避率を がくっと さげる。草むら などで 使うと ポケモンが よってくる。' },
      { name: 'むしくい', type: PokemonElementType.bug, power: 60, description: 'かみついて 攻撃する。 相手が きのみを 持っているとき 食べて きのみの 効果を 受けられる。' },
    ],
  },
  combee_male: {
    flavorText: '生まれたときから ３匹 一緒。 ビークインに 喜んでもらうため いつも 花のミツを 集めている。',
    stats: { hp: 30, attack: 30, defense: 42, specialAttack: 30, specialDefense: 42, speed: 70 },
    moves: [
      { name: 'かぜおこし', type: PokemonElementType.flying, power: 40, description: '翼で おこした 激しい 風を 相手に ぶつけて 攻撃する。' },
      { name: 'あまいかおり', type: PokemonElementType.normal, power: null, description: '香りで 相手の 回避率を がくっと さげる。草むら などで 使うと ポケモンが よってくる。' },
      { name: 'むしくい', type: PokemonElementType.bug, power: 60, description: 'かみついて 攻撃する。 相手が きのみを 持っているとき 食べて きのみの 効果を 受けられる。' },
    ],
  },
  vespiquen: {
    flavorText: '胴体は 子供たちの 巣穴。 いろんな フェロモンを だして 子供たちを 自由に 操る。',
    stats: { hp: 70, attack: 80, defense: 102, specialAttack: 80, specialDefense: 102, speed: 40 },
    moves: [
      { name: 'こうげきしれい', type: PokemonElementType.bug, power: 90, description: 'しもべを 呼びだして 相手に むかって 攻撃させる。 急所に 当たりやすい。' },
      { name: 'かいふくしれい', type: PokemonElementType.bug, power: null, description: 'しもべを 呼びだして きずを 治す。 最大ＨＰの 半分 自分の ＨＰを 回復する。' },
      { name: 'ぼうぎょしれい', type: PokemonElementType.bug, power: null, description: 'しもべを 呼びだして 自分の 体に おおい つかせる。防御と 特防を あげることが できる。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
    ],
  },
  pachirisu: {
    flavorText: '静電気が たまって パチパチする 毛玉を 大好物の 木の実と 一緒に 幹の 穴に 隠す。',
    stats: { hp: 60, attack: 45, defense: 70, specialAttack: 45, specialDefense: 90, speed: 95 },
    moves: [
      { name: 'てんしのキッス', type: PokemonElementType.normal, power: null, description: '天使のように かわいく キスして 相手を 混乱させる。' },
      { name: 'スパーク', type: PokemonElementType.electric, power: 65, description: '電気を まとい 相手に 突進して 攻撃する。 まひ状態に することが ある。' },
      { name: 'いかりのまえば', type: PokemonElementType.normal, power: null, description: '鋭い 前歯で 激しく かみついて 攻撃する。 相手の ＨＰは 半分に なる。' },
      { name: 'ほうでん', type: PokemonElementType.electric, power: 80, description: 'まばゆい 電撃で 自分の 周りに いるものを 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  buizel: {
    flavorText: '２本の 尻尾を スクリューの ように 回して 泳ぐ。 潜る ときは 浮き袋が しぼむ。',
    stats: { hp: 55, attack: 65, defense: 35, specialAttack: 60, specialDefense: 30, speed: 85 },
    moves: [
      { name: 'ソニックブーム', type: PokemonElementType.normal, power: null, description: '衝撃波を 相手に ぶつけて 攻撃する。 ２０の ダメージを 決まって 与える。' },
      { name: 'かまいたち', type: PokemonElementType.normal, power: 80, description: '風の 刃を つくり ２ターン目に 相手を 攻撃する。 急所に 当たりやすい。' },
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
      { name: 'アクアジェット', type: PokemonElementType.water, power: 40, description: '目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。' },
    ],
  },
  floatzel: {
    flavorText: '発達した 浮き袋で 浮かぶ。 おぼれた 人を 救助する 手伝いを している ポケモンだ。',
    stats: { hp: 85, attack: 105, defense: 55, specialAttack: 85, specialDefense: 50, speed: 115 },
    moves: [
      { name: 'ソニックブーム', type: PokemonElementType.normal, power: null, description: '衝撃波を 相手に ぶつけて 攻撃する。 ２０の ダメージを 決まって 与える。' },
      { name: 'かまいたち', type: PokemonElementType.normal, power: 80, description: '風の 刃を つくり ２ターン目に 相手を 攻撃する。 急所に 当たりやすい。' },
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
      { name: 'アクアジェット', type: PokemonElementType.water, power: 40, description: '目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。' },
    ],
  },
  cherubi: {
    flavorText: '日の光で 赤く 色づく。 栄養分が 吸われて 小さい 玉が しぼむと 進化が 近い。',
    stats: { hp: 45, attack: 35, defense: 45, specialAttack: 62, specialDefense: 53, speed: 35 },
    moves: [
      { name: 'おまじない', type: PokemonElementType.normal, power: null, description: '天に むかって おいのりを ささげ 相手の 攻撃を 急所に 当たらなくする。' },
      { name: 'せいちょう', type: PokemonElementType.normal, power: null, description: '体を 一気に 大きく 生長させて 攻撃と 特攻を あげる。' },
      { name: 'やどりぎのタネ', type: PokemonElementType.grass, power: null, description: '植えつけた 相手の ＨＰを 毎ターン 少しだけ 吸い取り 自分の ＨＰを 回復する。' },
      { name: 'なやみのタネ', type: PokemonElementType.grass, power: null, description: '心を なやませる タネを 植えつける。相手を 眠れなくして 特性を ふみんに する。' },
    ],
  },
  cherrim: {
    flavorText: 'つぼみが 太陽の 光を 浴びて 花びらを 広げると 活発に 動くように なる。',
    stats: { hp: 70, attack: 60, defense: 70, specialAttack: 87, specialDefense: 78, speed: 85 },
    moves: [
      { name: 'はなびらのまい', type: PokemonElementType.grass, power: 120, description: '２ー３ターンの あいだ 花を まきちらして 相手を 攻撃する。 まきちらした あとは 混乱する。' },
      { name: 'おまじない', type: PokemonElementType.normal, power: null, description: '天に むかって おいのりを ささげ 相手の 攻撃を 急所に 当たらなくする。' },
      { name: 'せいちょう', type: PokemonElementType.normal, power: null, description: '体を 一気に 大きく 生長させて 攻撃と 特攻を あげる。' },
      { name: 'やどりぎのタネ', type: PokemonElementType.grass, power: null, description: '植えつけた 相手の ＨＰを 毎ターン 少しだけ 吸い取り 自分の ＨＰを 回復する。' },
    ],
  },
  shellos_east: {
    flavorText: 'やわらかい 体を 強く押すと 紫色の ナゾの 液体が にじみ出るので 要注意。',
    stats: { hp: 76, attack: 48, defense: 48, specialAttack: 57, specialDefense: 62, speed: 34 },
    moves: [
      { name: 'どろばくだん', type: PokemonElementType.ground, power: 65, description: '硬い 泥の 弾を 相手に 発射して 攻撃する。 命中率を さげることが ある。' },
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'じこさいせい', type: PokemonElementType.normal, power: null, description: '細胞を 再生させて 自分の 最大ＨＰの 半分の ＨＰを 回復する。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
    ],
  },
  shellos_west: {
    flavorText: 'やわらかい 体を 強く押すと 紫色の ナゾの 液体が にじみ出るので 要注意。',
    stats: { hp: 76, attack: 48, defense: 48, specialAttack: 57, specialDefense: 62, speed: 34 },
    moves: [
      { name: 'どろばくだん', type: PokemonElementType.ground, power: 65, description: '硬い 泥の 弾を 相手に 発射して 攻撃する。 命中率を さげることが ある。' },
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'じこさいせい', type: PokemonElementType.normal, power: null, description: '細胞を 再生させて 自分の 最大ＨＰの 半分の ＨＰを 回復する。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
    ],
  },
  gastrodon_east: {
    flavorText: '天敵に 襲われたときは 紫色の 液体を 体から 出して 逃げる。',
    stats: { hp: 111, attack: 83, defense: 68, specialAttack: 92, specialDefense: 82, speed: 39 },
    moves: [
      { name: 'どろばくだん', type: PokemonElementType.ground, power: 65, description: '硬い 泥の 弾を 相手に 発射して 攻撃する。 命中率を さげることが ある。' },
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'じこさいせい', type: PokemonElementType.normal, power: null, description: '細胞を 再生させて 自分の 最大ＨＰの 半分の ＨＰを 回復する。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
    ],
  },
  gastrodon_west: {
    flavorText: '天敵に 襲われたときは 紫色の 液体を 体から 出して 逃げる。',
    stats: { hp: 111, attack: 83, defense: 68, specialAttack: 92, specialDefense: 82, speed: 39 },
    moves: [
      { name: 'どろばくだん', type: PokemonElementType.ground, power: 65, description: '硬い 泥の 弾を 相手に 発射して 攻撃する。 命中率を さげることが ある。' },
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
      { name: 'じこさいせい', type: PokemonElementType.normal, power: null, description: '細胞を 再生させて 自分の 最大ＨＰの 半分の ＨＰを 回復する。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
    ],
  },
  ambipom: {
    flavorText: '大勢の 群れで 行動する。 尻尾を つなぎ合わせて 輪っかを 作る。友情の 印らしい。',
    stats: { hp: 75, attack: 100, defense: 66, specialAttack: 60, specialDefense: 66, speed: 115 },
    moves: [
      { name: 'ダブルアタック', type: PokemonElementType.normal, power: 35, description: 'しっぽなどを 使い 相手を たたいて 攻撃する。 ２回連続で ダメージを 与える。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'くすぐる', type: PokemonElementType.normal, power: null, description: '体を くすぐり 笑わせる ことで 相手の 攻撃と 防御を さげる。' },
      { name: 'ひっかく', type: PokemonElementType.normal, power: 40, description: '硬く とがった 鋭い ツメで 相手を ひっかいて 攻撃する。' },
    ],
  },
  drifloon: {
    flavorText: '人や ポケモンの 魂が 固まって 生まれた ポケモン。 ジメジメした 季節が 大好き。',
    stats: { hp: 90, attack: 50, defense: 34, specialAttack: 60, specialDefense: 44, speed: 70 },
    moves: [
      { name: 'からみつく', type: PokemonElementType.normal, power: 10, description: '触手や ツタなどを からみつけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'ちいさくなる', type: PokemonElementType.normal, power: null, description: '体を ちぢめて 小さく みせて 自分の 回避率を ぐーんと あげる。' },
      { name: 'はきだす', type: PokemonElementType.normal, power: null, description: '蓄えた 力を 相手に ぶつけて 攻撃する。 蓄えているほど 威力が あがる。' },
      { name: 'のみこむ', type: PokemonElementType.normal, power: null, description: '蓄えた 力を のみこんで 自分の ＨＰを 回復する。 蓄えているほど 回復する。' },
    ],
  },
  drifblim: {
    flavorText: '人や ポケモンを 乗せて 飛ぶが 風に 流されているだけなので どこへ 飛んでいくか わからない。',
    stats: { hp: 150, attack: 80, defense: 44, specialAttack: 90, specialDefense: 54, speed: 80 },
    moves: [
      { name: 'からみつく', type: PokemonElementType.normal, power: 10, description: '触手や ツタなどを からみつけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'ちいさくなる', type: PokemonElementType.normal, power: null, description: '体を ちぢめて 小さく みせて 自分の 回避率を ぐーんと あげる。' },
      { name: 'はきだす', type: PokemonElementType.normal, power: null, description: '蓄えた 力を 相手に ぶつけて 攻撃する。 蓄えているほど 威力が あがる。' },
      { name: 'のみこむ', type: PokemonElementType.normal, power: null, description: '蓄えた 力を のみこんで 自分の ＨＰを 回復する。 蓄えているほど 回復する。' },
    ],
  },
  buneary: {
    flavorText: 'いつも まるめている 耳を 勢いよく 伸ばすと 大きな 岩も 簡単に 壊せる。',
    stats: { hp: 55, attack: 66, defense: 44, specialAttack: 44, specialDefense: 56, speed: 85 },
    moves: [
      { name: 'とびげり', type: PokemonElementType.fighting, power: 100, description: '高い ジャンプからの キックで 相手を 攻撃する。 はずすと 自分が ダメージを 受ける。' },
      { name: 'ピヨピヨパンチ', type: PokemonElementType.normal, power: 70, description: 'リズミカルに パンチを くりだして 相手を 攻撃する。 混乱させることが ある。' },
      { name: 'いやしのねがい', type: PokemonElementType.psychic, power: null, description: '自分は ひんしに なるが 控えから でてくる ポケモンの 状態異常と ＨＰを 回復する。' },
      { name: 'はねる', type: PokemonElementType.normal, power: null, description: '攻撃もせずに ピョン ピョンと 跳ねるだけで なにも おこらない……。' },
    ],
  },
  lopunny: {
    flavorText: '警戒心が とても 強い。 危険を 感じると 軽やかに 飛び跳ねて 走り去ってしまう。',
    stats: { hp: 65, attack: 76, defense: 84, specialAttack: 54, specialDefense: 96, speed: 105 },
    moves: [
      { name: 'とびげり', type: PokemonElementType.fighting, power: 100, description: '高い ジャンプからの キックで 相手を 攻撃する。 はずすと 自分が ダメージを 受ける。' },
      { name: 'ピヨピヨパンチ', type: PokemonElementType.normal, power: 70, description: 'リズミカルに パンチを くりだして 相手を 攻撃する。 混乱させることが ある。' },
      { name: 'いやしのねがい', type: PokemonElementType.psychic, power: null, description: '自分は ひんしに なるが 控えから でてくる ポケモンの 状態異常と ＨＰを 回復する。' },
      { name: 'はねる', type: PokemonElementType.normal, power: null, description: '攻撃もせずに ピョン ピョンと 跳ねるだけで なにも おこらない……。' },
    ],
  },
  mismagius: {
    flavorText: 'じゅもんを 唱える ポケモン。 相手を 苦しめるもの だけでなく 幸せにする じゅもんも ある。',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 105, specialDefense: 105, speed: 105 },
    moves: [
      { name: 'おまじない', type: PokemonElementType.normal, power: null, description: '天に むかって おいのりを ささげ 相手の 攻撃を 急所に 当たらなくする。' },
      { name: 'サイコウェーブ', type: PokemonElementType.psychic, power: null, description: '不思議な 念波を 相手に 発射して 攻撃する。 使うたびに ダメージが 変わる。' },
      { name: 'マジカルリーフ', type: PokemonElementType.grass, power: 60, description: '相手を 追跡する 不思議な はっぱを まきちらす。 攻撃は 必ず 命中する。' },
      { name: 'おどろかす', type: PokemonElementType.ghost, power: 30, description: '大きな 声などで 不意に 驚かして 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  honchkrow: {
    flavorText: 'ドンカラスが 低い声で 鳴くと すぐさま ヤミカラスが 集まるため 夜を招くもの とも 言われる。',
    stats: { hp: 100, attack: 125, defense: 52, specialAttack: 105, specialDefense: 52, speed: 71 },
    moves: [
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'おいうち', type: PokemonElementType.dark, power: 40, description: '相手 ポケモンが 入れ替わるときに 技を だしていると 倍の 威力で 攻撃できる。' },
      { name: 'つじぎり', type: PokemonElementType.dark, power: 70, description: '一瞬の すきを ついて 相手を 切りはらう。 急所に 当たりやすい。' },
      { name: 'くろいきり', type: PokemonElementType.ice, power: null, description: '黒い霧を だして 戦闘に でている ポケモン 全員の 能力変化を もとに もどす。' },
    ],
  },
  glameow: {
    flavorText: '気に入らないと ツメを 立てるが たまに のどを 鳴らして 甘える 性格が 一部に 大人気だ。',
    stats: { hp: 49, attack: 55, defense: 42, specialAttack: 42, specialDefense: 37, speed: 85 },
    moves: [
      { name: 'ねこのて', type: PokemonElementType.normal, power: null, description: '大急ぎで 味方の 助けを かりて 控えの ポケモンが おぼえている 技を どれか １つ 使う。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'ねこだまし', type: PokemonElementType.normal, power: 40, description: '先制攻撃で 相手を ひるませる。 戦闘に でたら すぐに ださないと 成功しない。' },
    ],
  },
  purugly: {
    flavorText: 'ほかの ポケモンの 住処でも 居心地が 良ければ 居座って 自分の 住処に してしまう。',
    stats: { hp: 71, attack: 82, defense: 64, specialAttack: 64, specialDefense: 59, speed: 112 },
    moves: [
      { name: 'ねこのて', type: PokemonElementType.normal, power: null, description: '大急ぎで 味方の 助けを かりて 控えの ポケモンが おぼえている 技を どれか １つ 使う。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'ねこだまし', type: PokemonElementType.normal, power: 40, description: '先制攻撃で 相手を ひるませる。 戦闘に でたら すぐに ださないと 成功しない。' },
    ],
  },
  chingling: {
    flavorText: '跳ねるたびに リリンと 音を 出す。 高い 周波数の 鳴き声で 相手の 耳を 聞こえなくする。',
    stats: { hp: 45, attack: 30, defense: 50, specialAttack: 65, specialDefense: 50, speed: 45 },
    moves: [
      { name: 'まきつく', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを つかって ４ー５ターンの あいだ 相手に まきついて 攻撃する。' },
      { name: 'ねんりき', type: PokemonElementType.psychic, power: 50, description: '弱い 念力を 相手に 送って 攻撃する。 相手を 混乱させることが ある。' },
      { name: 'おどろかす', type: PokemonElementType.ghost, power: 30, description: '大きな 声などで 不意に 驚かして 攻撃する。 相手を ひるませることが ある。' },
      { name: 'とっておき', type: PokemonElementType.normal, power: 140, description: '戦闘中に おぼえている 技を すべて 使うと はじめて だせる とっておきの 技。' },
    ],
  },
  stunky: {
    flavorText: 'お尻から飛ばす くさい 汁の においは 半径２キロに 広がり まわりの ポケモンは いなくなる。',
    stats: { hp: 63, attack: 63, defense: 47, specialAttack: 41, specialDefense: 41, speed: 74 },
    moves: [
      { name: 'どくガス', type: PokemonElementType.poison, power: null, description: '毒ガスを 相手の 顔に 吹きかけて 毒の 状態に する。' },
      { name: 'えんまく', type: PokemonElementType.normal, power: null, description: '煙や 墨などを 吹きかけて 相手の 命中率を さげる。' },
      { name: 'おきみやげ', type: PokemonElementType.dark, power: null, description: '自分は ひんしに なるが そのかわりに 相手の 攻撃と 特攻を がくっと さげる。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  skuntank: {
    flavorText: '尻尾の 先から ひどい においの 液体を 飛ばして 攻撃する。 飛距離は ５０メートル以上。',
    stats: { hp: 103, attack: 93, defense: 67, specialAttack: 71, specialDefense: 61, speed: 84 },
    moves: [
      { name: 'どくガス', type: PokemonElementType.poison, power: null, description: '毒ガスを 相手の 顔に 吹きかけて 毒の 状態に する。' },
      { name: 'えんまく', type: PokemonElementType.normal, power: null, description: '煙や 墨などを 吹きかけて 相手の 命中率を さげる。' },
      { name: 'おきみやげ', type: PokemonElementType.dark, power: null, description: '自分は ひんしに なるが そのかわりに 相手の 攻撃と 特攻を がくっと さげる。' },
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  bronzor: {
    flavorText: 'ドーミラーの 背中の 模様には 神秘的な 力が 宿ると 昔の 人たちは 信じていた。',
    stats: { hp: 57, attack: 24, defense: 86, specialAttack: 24, specialDefense: 86, speed: 23 },
    moves: [
      { name: 'かいふくふうじ', type: PokemonElementType.psychic, power: null, description: '５ターンの あいだ 技や 特性や 持っている 道具によって ＨＰを 回復 できなくする。' },
      { name: 'じんつうりき', type: PokemonElementType.psychic, power: 80, description: 'みえない 不思議な 力を 送って 攻撃する。 相手を ひるませることが ある。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
    ],
  },
  bronzong: {
    flavorText: '雨雲を 呼べる ポケモンとして 大昔から まつられていた。 ときどき 地面に 埋められている。',
    stats: { hp: 67, attack: 89, defense: 116, specialAttack: 79, specialDefense: 116, speed: 33 },
    moves: [
      { name: 'かいふくふうじ', type: PokemonElementType.psychic, power: null, description: '５ターンの あいだ 技や 特性や 持っている 道具によって ＨＰを 回復 できなくする。' },
      { name: 'じんつうりき', type: PokemonElementType.psychic, power: 80, description: 'みえない 不思議な 力を 送って 攻撃する。 相手を ひるませることが ある。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
    ],
  },
  bonsly: {
    flavorText: '乾燥した 場所を 好む。 目から 水を 出して 体の 水分を 調節する。',
    stats: { hp: 50, attack: 80, defense: 95, specialAttack: 10, specialDefense: 45, speed: 10 },
    moves: [
      { name: 'いわおとし', type: PokemonElementType.rock, power: 50, description: '小さな 岩を 持ちあげて 相手に 投げつけて 攻撃する。' },
      { name: 'まねっこ', type: PokemonElementType.normal, power: null, description: '直前に でた 技を まねして 同じ 技を だす。 技が でていないと 失敗する。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
      { name: 'たたきつける', type: PokemonElementType.normal, power: 80, description: '長い しっぽや つるなどを 使い 相手を たたきつけて 攻撃する。' },
    ],
  },
  mimeJr: {
    flavorText: '相手の 動きを そっくりに 真似を して 戸惑わせている あいだに さっさと 逃げるのだ。',
    stats: { hp: 20, attack: 25, defense: 45, specialAttack: 70, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'ヨガのポーズ', type: PokemonElementType.psychic, power: null, description: '眠っている 力を 体の 奥から ひきだして 自分の 攻撃を あげる。' },
      { name: 'バリアー', type: PokemonElementType.psychic, power: null, description: '頑丈な 壁を つくって 自分の 防御を ぐーんと あげる。' },
      { name: 'おうふくビンタ', type: PokemonElementType.normal, power: 15, description: 'おうふく ビンタで 相手を たたいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'まねっこ', type: PokemonElementType.normal, power: null, description: '直前に でた 技を まねして 同じ 技を だす。 技が でていないと 失敗する。' },
    ],
  },
  happiny: {
    flavorText: 'タマゴに 似た 真んまるい 石を お腹の 袋に 入れている。 好きな 相手に 石を 渡す。',
    stats: { hp: 100, attack: 5, defense: 5, specialAttack: 15, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'てんしのキッス', type: PokemonElementType.normal, power: null, description: '天使のように かわいく キスして 相手を 混乱させる。' },
      { name: 'リフレッシュ', type: PokemonElementType.normal, power: null, description: '体を やすめて 自分が おっている 毒 まひ やけどの 状態異常を 治す。' },
      { name: 'まねっこ', type: PokemonElementType.normal, power: null, description: '直前に でた 技を まねして 同じ 技を だす。 技が でていないと 失敗する。' },
      { name: 'はたく', type: PokemonElementType.normal, power: 40, description: '長い しっぽや 手などを 使って 相手を はたいて 攻撃する。' },
    ],
  },
  chatot: {
    flavorText: '相手と 同じ 鳴き声を 出す ことで 仲間と 思いこませて 襲われないように しているのだ。',
    stats: { hp: 76, attack: 65, defense: 45, specialAttack: 92, specialDefense: 42, speed: 91 },
    moves: [
      { name: 'おしゃべり', type: PokemonElementType.flying, power: 65, description: 'おぼえた 言葉で 音波を おこして 攻撃する。 相手を 混乱させる。' },
      { name: 'オウムがえし', type: PokemonElementType.flying, power: null, description: '相手の 使った 技を まねして 自分も 同じ技を 使う。' },
      { name: 'うたう', type: PokemonElementType.normal, power: null, description: '心地好い きれいな 歌声を 聞かせて 相手を 眠り状態に する。' },
      { name: 'みだれづき', type: PokemonElementType.normal, power: 15, description: 'つのや くちばしで 相手を つついて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
    ],
  },
  spiritomb: {
    flavorText: '１０８個の 魂が 集まって 生まれた ポケモン。 要石の ひび割れに つながれている。',
    stats: { hp: 50, attack: 92, defense: 108, specialAttack: 92, specialDefense: 108, speed: 35 },
    moves: [
      { name: 'かげうち', type: PokemonElementType.ghost, power: 40, description: '影を のばして 相手の 背後から 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おきみやげ', type: PokemonElementType.dark, power: null, description: '自分は ひんしに なるが そのかわりに 相手の 攻撃と 特攻を がくっと さげる。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
      { name: 'あやしいかぜ', type: PokemonElementType.ghost, power: 60, description: 'みのけも よだつ 突風で 相手を 攻撃する。自分の すべての 能力が あがることが ある。' },
    ],
  },
  gible: {
    flavorText: '地熱で 温められた 横穴で 暮らす。 敵が 近づくと 穴から 飛び出して 大口で かみつく。',
    stats: { hp: 58, attack: 70, defense: 45, specialAttack: 40, specialDefense: 45, speed: 42 },
    moves: [
      { name: 'りゅうのいかり', type: PokemonElementType.dragon, power: null, description: '怒りの 衝撃波を 相手に ぶつけて 攻撃する。 ４０の ダメージを 決まって 与える。' },
      { name: 'ドラゴンダイブ', type: PokemonElementType.dragon, power: 100, description: 'すさまじい 殺気で 威圧しながら 体当たりする。 相手を ひるませることが ある。' },
      { name: 'すなじごく', type: PokemonElementType.ground, power: 35, description: '激しく 吹きあれる 砂あらしの 中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'ドラゴンクロー', type: PokemonElementType.dragon, power: 80, description: '鋭く とがった 巨大な ツメで 相手を 切り裂いて 攻撃する。' },
    ],
  },
  gabite: {
    flavorText: '光り輝く ものが 大好きで 洞窟の 中で 見つけた 宝を 自分の巣に ためこむ。',
    stats: { hp: 68, attack: 90, defense: 65, specialAttack: 50, specialDefense: 55, speed: 82 },
    moves: [
      { name: 'りゅうのいかり', type: PokemonElementType.dragon, power: null, description: '怒りの 衝撃波を 相手に ぶつけて 攻撃する。 ４０の ダメージを 決まって 与える。' },
      { name: 'ドラゴンダイブ', type: PokemonElementType.dragon, power: 100, description: 'すさまじい 殺気で 威圧しながら 体当たりする。 相手を ひるませることが ある。' },
      { name: 'すなじごく', type: PokemonElementType.ground, power: 35, description: '激しく 吹きあれる 砂あらしの 中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'ドラゴンクロー', type: PokemonElementType.dragon, power: 80, description: '鋭く とがった 巨大な ツメで 相手を 切り裂いて 攻撃する。' },
    ],
  },
  garchomp: {
    flavorText: '体を 折り畳み 翼を 伸ばすと まるで ジェット機。 音速で 飛ぶことが できる。',
    stats: { hp: 108, attack: 130, defense: 95, specialAttack: 80, specialDefense: 85, speed: 102 },
    moves: [
      { name: 'りゅうのいかり', type: PokemonElementType.dragon, power: null, description: '怒りの 衝撃波を 相手に ぶつけて 攻撃する。 ４０の ダメージを 決まって 与える。' },
      { name: 'ドラゴンダイブ', type: PokemonElementType.dragon, power: 100, description: 'すさまじい 殺気で 威圧しながら 体当たりする。 相手を ひるませることが ある。' },
      { name: 'すなじごく', type: PokemonElementType.ground, power: 35, description: '激しく 吹きあれる 砂あらしの 中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'ドラゴンクロー', type: PokemonElementType.dragon, power: 80, description: '鋭く とがった 巨大な ツメで 相手を 切り裂いて 攻撃する。' },
    ],
  },
  munchlax: {
    flavorText: '長い 体の 毛の 下に 食べ物を 隠す 習性。 隠したことを 忘れてしまう。',
    stats: { hp: 135, attack: 85, defense: 40, specialAttack: 40, specialDefense: 85, speed: 5 },
    moves: [
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'したでなめる', type: PokemonElementType.ghost, power: 30, description: '長い 舌で 相手を なめまわして 攻撃する。 まひ状態に することが ある。' },
      { name: 'のみこむ', type: PokemonElementType.normal, power: null, description: '蓄えた 力を のみこんで 自分の ＨＰを 回復する。 蓄えているほど 回復する。' },
      { name: 'たくわえる', type: PokemonElementType.normal, power: null, description: '力を 蓄えて 自分の 防御と 特防を あげる。 最大 ３回まで 蓄えられる。' },
    ],
  },
  hippopotas: {
    flavorText: '乾燥した 土地で 暮らす。 汗の かわりに 砂粒を 体から 分泌する ポケモン。',
    stats: { hp: 68, attack: 72, defense: 78, specialAttack: 38, specialDefense: 42, speed: 32 },
    moves: [
      { name: 'じわれ', type: PokemonElementType.ground, power: null, description: '地割れの 裂け目に 相手を 落として 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'すなじごく', type: PokemonElementType.ground, power: 35, description: '激しく 吹きあれる 砂あらしの 中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'あくび', type: PokemonElementType.normal, power: null, description: '大きな あくびで 眠気を 誘う。 次の ターンに 相手を 眠り状態に する。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
    ],
  },
  riolu: {
    flavorText: '感情で 形が 変わる 波動を だしあって 仲間同士 コミュニケーションを とっている。',
    stats: { hp: 40, attack: 70, defense: 40, specialAttack: 35, specialDefense: 40, speed: 60 },
    moves: [
      { name: 'はっけい', type: PokemonElementType.fighting, power: 60, description: '相手の 体に 衝撃波を 当てて 攻撃する。 まひ状態に することが ある。' },
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'まねっこ', type: PokemonElementType.normal, power: null, description: '直前に でた 技を まねして 同じ 技を だす。 技が でていないと 失敗する。' },
      { name: 'フェイント', type: PokemonElementType.normal, power: 30, description: 'まもるや みきりを している 相手に 攻撃が できる。 守りの 効果を 解除させる。' },
    ],
  },
  lucario: {
    flavorText: '相手の 発する 波動を キャッチすることで 考えや 動きを 読み取ることが できる。',
    stats: { hp: 70, attack: 110, defense: 70, specialAttack: 115, specialDefense: 70, speed: 90 },
    moves: [
      { name: 'ボーンラッシュ', type: PokemonElementType.ground, power: 25, description: '硬い ホネで 相手を なぐりつけて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'はっけい', type: PokemonElementType.fighting, power: 60, description: '相手の 体に 衝撃波を 当てて 攻撃する。 まひ状態に することが ある。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'さきどり', type: PokemonElementType.normal, power: null, description: '威力を あげて 相手が だそうとする 技を 先にだす。 先に だせないと 失敗する。' },
    ],
  },
  hippowdon: {
    flavorText: '大きく 口を 開けて 自分の 強さを アピール。 大量の 砂を 巻き上げて 攻撃する。',
    stats: { hp: 108, attack: 112, defense: 118, specialAttack: 68, specialDefense: 72, speed: 47 },
    moves: [
      { name: 'じわれ', type: PokemonElementType.ground, power: null, description: '地割れの 裂け目に 相手を 落として 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'すなじごく', type: PokemonElementType.ground, power: 35, description: '激しく 吹きあれる 砂あらしの 中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'あくび', type: PokemonElementType.normal, power: null, description: '大きな あくびで 眠気を 誘う。 次の ターンに 相手を 眠り状態に する。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
    ],
  },
  skorupi: {
    flavorText: '尻尾の ツメで 獲物を 挟み 毒を 送りこむ。毒が 効くまで 絶対に 放さない 執念。',
    stats: { hp: 40, attack: 50, defense: 90, specialAttack: 30, specialDefense: 55, speed: 65 },
    moves: [
      { name: 'つぼをつく', type: PokemonElementType.normal, power: null, description: 'つぼおしで 体を 活性化させる。 能力の どれか １つを ぐーんと あげる。' },
      { name: 'どくどくのキバ', type: PokemonElementType.poison, power: 50, description: '毒の ある キバで 相手に かみついて 攻撃する。 猛毒を おわせる ことが ある。' },
      { name: 'クロスポイズン', type: PokemonElementType.poison, power: 70, description: '毒の 刃で 相手を 切り裂く。 毒状態に することが あり 急所にも 当たりやすい。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
    ],
  },
  drapion: {
    flavorText: '自慢の パワーで 相手を ばらばらに できるのに さらに 猛毒で とどめを 刺すのだ。',
    stats: { hp: 70, attack: 90, defense: 110, specialAttack: 60, specialDefense: 75, speed: 95 },
    moves: [
      { name: 'つぼをつく', type: PokemonElementType.normal, power: null, description: 'つぼおしで 体を 活性化させる。 能力の どれか １つを ぐーんと あげる。' },
      { name: 'どくどくのキバ', type: PokemonElementType.poison, power: 50, description: '毒の ある キバで 相手に かみついて 攻撃する。 猛毒を おわせる ことが ある。' },
      { name: 'クロスポイズン', type: PokemonElementType.poison, power: 70, description: '毒の 刃で 相手を 切り裂く。 毒状態に することが あり 急所にも 当たりやすい。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
    ],
  },
  croagunk: {
    flavorText: 'ほっぺたに 毒袋を 持つ。 相手の すきを ついて 猛毒を にじませている 指を 突き刺す。',
    stats: { hp: 48, attack: 61, defense: 40, specialAttack: 61, specialDefense: 40, speed: 50 },
    moves: [
      { name: 'どろばくだん', type: PokemonElementType.ground, power: 65, description: '硬い 泥の 弾を 相手に 発射して 攻撃する。 命中率を さげることが ある。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'おだてる', type: PokemonElementType.dark, power: null, description: '相手を おだてて 混乱させる。 同時に 相手の 特攻も あげてしまう。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
    ],
  },
  toxicroak: {
    flavorText: 'のど元に 毒袋を 持つ。 のどを 鳴らすと たまった 毒は 練りこまれ 強力になる。',
    stats: { hp: 83, attack: 106, defense: 65, specialAttack: 86, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'どろばくだん', type: PokemonElementType.ground, power: 65, description: '硬い 泥の 弾を 相手に 発射して 攻撃する。 命中率を さげることが ある。' },
      { name: 'どくばり', type: PokemonElementType.poison, power: 15, description: '毒の ある ハリを 相手に 突き刺して 攻撃する。 毒状態に することが ある。' },
      { name: 'おだてる', type: PokemonElementType.dark, power: null, description: '相手を おだてて 混乱させる。 同時に 相手の 特攻も あげてしまう。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
    ],
  },
  carnivine: {
    flavorText: '甘い においの だえきで 獲物を おびき寄せ おおあごで がぶり。 １日 かけて 獲物を 食べる。',
    stats: { hp: 74, attack: 100, defense: 72, specialAttack: 90, specialDefense: 72, speed: 46 },
    moves: [
      { name: 'しぼりとる', type: PokemonElementType.normal, power: null, description: '強く 締めあげて 攻撃を する。 相手の ＨＰが 残っているほど 威力は あがる。' },
      { name: 'つるのムチ', type: PokemonElementType.grass, power: 45, description: 'ムチのように しなる 細長い つるで 相手を たたきつけて 攻撃する。' },
      { name: 'パワーウィップ', type: PokemonElementType.grass, power: 120, description: 'ツタや 触手を 激しく ふるって 相手を たたきつけ 攻撃する。' },
      { name: 'はきだす', type: PokemonElementType.normal, power: null, description: '蓄えた 力を 相手に ぶつけて 攻撃する。 蓄えているほど 威力が あがる。' },
    ],
  },
  finneon: {
    flavorText: '体の 横側にある ラインは 太陽の光を ためておける。 夜になると 鮮やかに 輝く。',
    stats: { hp: 49, attack: 49, defense: 56, specialAttack: 49, specialDefense: 61, speed: 66 },
    moves: [
      { name: 'ぎんいろのかぜ', type: PokemonElementType.bug, power: 60, description: '風に りんぷんを のせて 相手を 攻撃する。自分の すべての 能力が あがることが ある。' },
      { name: 'アクアリング', type: PokemonElementType.water, power: null, description: '自分の 体の 周りを 水で つくった ベールで おおう。 毎ターン ＨＰを 回復する。' },
      { name: 'かぜおこし', type: PokemonElementType.flying, power: 40, description: '翼で おこした 激しい 風を 相手に ぶつけて 攻撃する。' },
      { name: 'はたく', type: PokemonElementType.normal, power: 40, description: '長い しっぽや 手などを 使って 相手を はたいて 攻撃する。' },
    ],
  },
  lumineon: {
    flavorText: '深い 海の 底で 暮らす。 ４枚の ヒレの 模様を 光らせて 獲物を おびき寄せる。',
    stats: { hp: 69, attack: 69, defense: 76, specialAttack: 69, specialDefense: 86, speed: 91 },
    moves: [
      { name: 'ぎんいろのかぜ', type: PokemonElementType.bug, power: 60, description: '風に りんぷんを のせて 相手を 攻撃する。自分の すべての 能力が あがることが ある。' },
      { name: 'アクアリング', type: PokemonElementType.water, power: null, description: '自分の 体の 周りを 水で つくった ベールで おおう。 毎ターン ＨＰを 回復する。' },
      { name: 'かぜおこし', type: PokemonElementType.flying, power: 40, description: '翼で おこした 激しい 風を 相手に ぶつけて 攻撃する。' },
      { name: 'はたく', type: PokemonElementType.normal, power: 40, description: '長い しっぽや 手などを 使って 相手を はたいて 攻撃する。' },
    ],
  },
  mantyke: {
    flavorText: '背中の 模様は 地域によって 異なっている。テッポウオの 群れに 混ざって 泳ぐことが 多い。',
    stats: { hp: 45, attack: 20, defense: 50, specialAttack: 60, specialDefense: 120, speed: 50 },
    moves: [
      { name: 'つばさでうつ', type: PokemonElementType.flying, power: 60, description: '大きく ひろげた りっぱな 翼を 相手に ぶつけて 攻撃する。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'アクアリング', type: PokemonElementType.water, power: null, description: '自分の 体の 周りを 水で つくった ベールで おおう。 毎ターン ＨＰを 回復する。' },
      { name: 'ちょうおんぱ', type: PokemonElementType.normal, power: null, description: '特殊な 音波を 体から 発して 相手を 混乱させる。' },
    ],
  },
  snover: {
    flavorText: '寒い 季節は 山の ふもとまで 降りてくるが 春に なると 雪が 残る 山頂に 戻っていく。',
    stats: { hp: 60, attack: 62, defense: 50, specialAttack: 62, specialDefense: 60, speed: 40 },
    moves: [
      { name: 'くさぶえ', type: PokemonElementType.grass, power: null, description: '心地好い 笛の 音色を 聞かせて 相手を 眠りの 状態に する。' },
      { name: 'ぜったいれいど', type: PokemonElementType.ice, power: null, description: '絶対零度の 冷たさで 相手を 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'ウッドハンマー', type: PokemonElementType.grass, power: 120, description: '硬い 胴体を 相手に たたきつけて 攻撃する。 自分も かなり ダメージを 受ける。' },
      { name: 'こおりのつぶて', type: PokemonElementType.ice, power: 40, description: '氷の塊を 一瞬で つくり 相手に 素早く 放つ。 必ず 先制攻撃 できる。' },
    ],
  },
  abomasnow: {
    flavorText: 'ブリザードを 発生させて あたり 一面を 真っ白に してしまう。 別名 アイスモンスター。',
    stats: { hp: 90, attack: 92, defense: 75, specialAttack: 92, specialDefense: 85, speed: 60 },
    moves: [
      { name: 'くさぶえ', type: PokemonElementType.grass, power: null, description: '心地好い 笛の 音色を 聞かせて 相手を 眠りの 状態に する。' },
      { name: 'ぜったいれいど', type: PokemonElementType.ice, power: null, description: '絶対零度の 冷たさで 相手を 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'ウッドハンマー', type: PokemonElementType.grass, power: 120, description: '硬い 胴体を 相手に たたきつけて 攻撃する。 自分も かなり ダメージを 受ける。' },
      { name: 'こおりのつぶて', type: PokemonElementType.ice, power: 40, description: '氷の塊を 一瞬で つくり 相手に 素早く 放つ。 必ず 先制攻撃 できる。' },
    ],
  },
  weavile: {
    flavorText: '雪の 多い 地方に 生息。 樹木に ツメで サインを 描き 仲間に 合図を 送る。',
    stats: { hp: 70, attack: 120, defense: 65, specialAttack: 45, specialDefense: 85, speed: 125 },
    moves: [
      { name: 'みだれひっかき', type: PokemonElementType.normal, power: 18, description: 'ツメや カマなどで 相手を ひっかいて 攻撃する。 ２ー５回の あいだ 連続で だす。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
      { name: 'メタルクロー', type: PokemonElementType.steel, power: 50, description: '鋼鉄の ツメで 相手を 切り裂いて 攻撃する。 自分の 攻撃が あがることが ある。' },
      { name: 'さしおさえ', type: PokemonElementType.dark, power: null, description: '持たせた 道具を 使えなくする。 トレーナーも その ポケモンには 道具を 使えない。' },
    ],
  },
  magnezone: {
    flavorText: '強すぎる 磁力を だして ジバコイル同士 引き寄せあって まったく 動けなくなったりする。',
    stats: { hp: 70, attack: 70, defense: 115, specialAttack: 130, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'マグネットボム', type: PokemonElementType.steel, power: 60, description: '相手に 吸いつく 鋼の 爆弾を 発射する。 攻撃は 必ず 命中 する。' },
      { name: 'ソニックブーム', type: PokemonElementType.normal, power: null, description: '衝撃波を 相手に ぶつけて 攻撃する。 ２０の ダメージを 決まって 与える。' },
      { name: 'ミラーショット', type: PokemonElementType.steel, power: 65, description: '磨きあげられた 体から せん光の 力を 相手に 放つ。 命中率を さげることが ある。' },
      { name: 'ロックオン', type: PokemonElementType.normal, power: null, description: '照準を しっかり あわせて 次の 攻撃が 必ず 相手に 当たるように する。' },
    ],
  },
  lickilicky: {
    flavorText: 'ぐんぐん 伸びる ベロを なんにでも 巻きつける。うかつに 近寄ると だえきで べとべとに されてしまう。',
    stats: { hp: 110, attack: 85, defense: 95, specialAttack: 80, specialDefense: 95, speed: 50 },
    moves: [
      { name: 'しぼりとる', type: PokemonElementType.normal, power: null, description: '強く 締めあげて 攻撃を する。 相手の ＨＰが 残っているほど 威力は あがる。' },
      { name: 'さきどり', type: PokemonElementType.normal, power: null, description: '威力を あげて 相手が だそうとする 技を 先にだす。 先に だせないと 失敗する。' },
      { name: 'まきつく', type: PokemonElementType.normal, power: 15, description: '長い 体や つるなどを つかって ４ー５ターンの あいだ 相手に まきついて 攻撃する。' },
      { name: 'したでなめる', type: PokemonElementType.ghost, power: 30, description: '長い 舌で 相手を なめまわして 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  rhyperior: {
    flavorText: '手のひらの 穴から イシツブテを 発射。全身の プロテクターは 火山の 噴火にも 耐えられる。',
    stats: { hp: 115, attack: 140, defense: 130, specialAttack: 55, specialDefense: 55, speed: 40 },
    moves: [
      { name: 'がんせきほう', type: PokemonElementType.rock, power: 150, description: '巨大な 岩を 相手に 発射して 攻撃する。 次の ターンは 動けなくなる。' },
      { name: 'つのでつく', type: PokemonElementType.normal, power: 65, description: '鋭く とがった つので 相手を 攻撃する。' },
      { name: 'つのドリル', type: PokemonElementType.normal, power: null, description: '回転する つのを 相手に 突き刺して 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'メガホーン', type: PokemonElementType.bug, power: 120, description: '硬くて りっぱな つので おもいっきり 相手を 突き刺して 攻撃する。' },
    ],
  },
  tangrowth: {
    flavorText: '植物の ツルで できた 腕を 伸ばして 獲物を 絡め取る。 腕を 食べられても へっちゃら。',
    stats: { hp: 100, attack: 100, defense: 125, specialAttack: 110, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'からみつく', type: PokemonElementType.normal, power: 10, description: '触手や ツタなどを からみつけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'しぼりとる', type: PokemonElementType.normal, power: null, description: '強く 締めあげて 攻撃を する。 相手の ＨＰが 残っているほど 威力は あがる。' },
      { name: 'つるのムチ', type: PokemonElementType.grass, power: 45, description: 'ムチのように しなる 細長い つるで 相手を たたきつけて 攻撃する。' },
      { name: 'ねむりごな', type: PokemonElementType.grass, power: null, description: '眠くなる 粉を たくさん ふりまいて 相手を 眠り状態に する。' },
    ],
  },
  electivire: {
    flavorText: '電気を いっぱいに ためると ２本の ツノの あいだで 激しく 青白い 火花を 散らす。',
    stats: { hp: 75, attack: 123, defense: 67, specialAttack: 95, specialDefense: 85, speed: 95 },
    moves: [
      { name: 'でんきショック', type: PokemonElementType.electric, power: 40, description: '電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
      { name: 'ほうでん', type: PokemonElementType.electric, power: 80, description: 'まばゆい 電撃で 自分の 周りに いるものを 攻撃する。 まひ状態に することが ある。' },
      { name: 'でんこうせっか', type: PokemonElementType.normal, power: 40, description: '目にも 留まらぬ ものすごい 速さで 相手に つっこむ。 必ず 先制攻撃 できる。' },
      { name: 'ほのおのパンチ', type: PokemonElementType.fire, power: 75, description: '炎を こめた パンチで 相手を 攻撃する。 やけど状態に することが ある。' },
    ],
  },
  magmortar: {
    flavorText: '腕の 先から 摂氏２０００度の 火の玉を 発射する。 火山の 火口を 住処にする。',
    stats: { hp: 75, attack: 95, defense: 67, specialAttack: 125, specialDefense: 95, speed: 83 },
    moves: [
      { name: 'ふんえん', type: PokemonElementType.fire, power: 80, description: '真っ赤な 炎で 自分の 周りに いるものを 攻撃する。 やけど状態に することが ある。' },
      { name: 'スモッグ', type: PokemonElementType.poison, power: 30, description: '汚れた ガスを 相手に 吹きつけて 攻撃する。 毒状態に することが ある。' },
      { name: 'えんまく', type: PokemonElementType.normal, power: null, description: '煙や 墨などを 吹きかけて 相手の 命中率を さげる。' },
      { name: 'ひのこ', type: PokemonElementType.fire, power: 40, description: '小さな 炎を 相手に 発射して 攻撃する。 やけど状態に することが ある。' },
    ],
  },
  togekiss: {
    flavorText: '争いのない 平和な 土地に トゲキッスは 訪れ さまざまな 恵みを 分け与えると 言われる。',
    stats: { hp: 85, attack: 50, defense: 95, specialAttack: 120, specialDefense: 115, speed: 80 },
    moves: [
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'はどうだん', type: PokemonElementType.fighting, power: 80, description: '体の 奥から 波導の 力を 相手に うち放つ。 攻撃は 必ず 命中する。' },
      { name: 'ゴッドバード', type: PokemonElementType.flying, power: 140, description: '２ターン目に 相手を 攻撃する。 たまに ひるませる。 急所にも 当たりやすい。' },
      { name: 'エアスラッシュ', type: PokemonElementType.flying, power: 75, description: '空をも 切り裂く 空気の 刃で 攻撃する。 相手を ひるませることが ある。' },
    ],
  },
  yanmega: {
    flavorText: '高速で 飛んで すれ違った 相手の 首を 一瞬で かみちぎる 戦い方を 好む。',
    stats: { hp: 86, attack: 76, defense: 86, specialAttack: 116, specialDefense: 56, speed: 95 },
    moves: [
      { name: 'ソニックブーム', type: PokemonElementType.normal, power: null, description: '衝撃波を 相手に ぶつけて 攻撃する。 ２０の ダメージを 決まって 与える。' },
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'むしのさざめき', type: PokemonElementType.bug, power: 90, description: 'はねの 振動で 音波を おこして 攻撃する。相手の 特防を さげることが ある。' },
      { name: 'ちょうおんぱ', type: PokemonElementType.normal, power: null, description: '特殊な 音波を 体から 発して 相手を 混乱させる。' },
    ],
  },
  leafeon: {
    flavorText: '晴れた 日に 寝ている リーフィアは 光合成を して きれいな 空気を 作り出しているのだ。',
    stats: { hp: 65, attack: 110, defense: 130, specialAttack: 60, specialDefense: 65, speed: 95 },
    moves: [
      { name: 'くさぶえ', type: PokemonElementType.grass, power: null, description: '心地好い 笛の 音色を 聞かせて 相手を 眠りの 状態に する。' },
      { name: 'リーフブレード', type: PokemonElementType.grass, power: 90, description: 'はっぱを 剣のように あやつり 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'はっぱカッター', type: PokemonElementType.grass, power: 55, description: 'はっぱを とばして 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
    ],
  },
  glaceon: {
    flavorText: '体温を コントロールすることで 周囲の 空気を 凍らせて ダイヤモンドダストを 降らせる。',
    stats: { hp: 65, attack: 60, defense: 110, specialAttack: 130, specialDefense: 95, speed: 65 },
    moves: [
      { name: 'バリアー', type: PokemonElementType.psychic, power: null, description: '頑丈な 壁を つくって 自分の 防御を ぐーんと あげる。' },
      { name: 'こおりのつぶて', type: PokemonElementType.ice, power: 40, description: '氷の塊を 一瞬で つくり 相手に 素早く 放つ。 必ず 先制攻撃 できる。' },
      { name: 'ミラーコート', type: PokemonElementType.psychic, power: null, description: '相手から 受けた 特殊攻撃の ダメージを ２倍に して その相手に 返す。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
    ],
  },
  gliscor: {
    flavorText: '尻尾で 木の枝に ぶら下がり 獲物を 観察する。すきを 見て 上空から 襲いかかる。',
    stats: { hp: 75, attack: 95, defense: 125, specialAttack: 45, specialDefense: 75, speed: 95 },
    moves: [
      { name: 'ハサミギロチン', type: PokemonElementType.normal, power: null, description: '大きな ハサミで 相手を 切り裂いて 攻撃する。 当たれば 一撃で ひんしに する。' },
      { name: 'かたくなる', type: PokemonElementType.normal, power: null, description: '全身に 力を こめて 体を 硬くして 自分の 防御を あげる。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
      { name: 'すなかけ', type: PokemonElementType.ground, power: null, description: '相手の 顔に 砂を かけて 命中率を さげる。' },
    ],
  },
  mamoswine: {
    flavorText: '１万年前の 氷の 下から 発見された ことも あるほど 大昔から いた ポケモン。',
    stats: { hp: 110, attack: 130, defense: 80, specialAttack: 70, specialDefense: 60, speed: 80 },
    moves: [
      { name: 'どろばくだん', type: PokemonElementType.ground, power: 65, description: '硬い 泥の 弾を 相手に 発射して 攻撃する。 命中率を さげることが ある。' },
      { name: 'こなゆき', type: PokemonElementType.ice, power: 40, description: '冷たい 粉雪を 相手に 吹きつけて 攻撃する。 こおり状態に することが ある。' },
      { name: 'かぎわける', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'どろあそび', type: PokemonElementType.ground, power: null, description: 'あたりを 泥まみれにする。 ５ターンの あいだ でんきタイプの 技を 弱める。' },
    ],
  },
  porygonZ: {
    flavorText: 'より 優れた ポケモンに するため プログラムを 追加したが なぜか おかしな 行動を はじめた。',
    stats: { hp: 85, attack: 80, defense: 70, specialAttack: 135, specialDefense: 75, speed: 90 },
    moves: [
      { name: 'テクスチャー', type: PokemonElementType.normal, power: null, description: '自分の タイプを おぼえている 技で 一番 上の 技と 同じ タイプに する。' },
      { name: 'テクスチャー２', type: PokemonElementType.normal, power: null, description: '相手が 最後に 使った技に 抵抗できる ように 自分の タイプを 変化させる。' },
      { name: 'ロックオン', type: PokemonElementType.normal, power: null, description: '照準を しっかり あわせて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'トライアタック', type: PokemonElementType.normal, power: 80, description: '３つの 光線で 攻撃する。 まひか やけどか こおり状態の どれかに することが ある。' },
    ],
  },
  gallade: {
    flavorText: '相手の 考えを 敏感に キャッチする 能力を 持つため 先に 攻撃が できるのだ。',
    stats: { hp: 68, attack: 125, defense: 65, specialAttack: 65, specialDefense: 115, speed: 80 },
    moves: [
      { name: 'リーフブレード', type: PokemonElementType.grass, power: 90, description: 'はっぱを 剣のように あやつり 相手を 切りつけて 攻撃する。 急所に 当たりやすい。' },
      { name: 'テレポート', type: PokemonElementType.psychic, power: null, description: '野生ポケモンとの 戦闘を やめる。 最後に はいった ポケセンの ある 街にも 行ける。' },
      { name: 'サイコカッター', type: PokemonElementType.psychic, power: 70, description: '実体化させた 心の 刃で 相手を 切り裂く。 急所に 当たりやすい。' },
      { name: 'フェイント', type: PokemonElementType.normal, power: 30, description: 'まもるや みきりを している 相手に 攻撃が できる。 守りの 効果を 解除させる。' },
    ],
  },
  probopass: {
    flavorText: '全身から 強い 磁力を 出している。 ３個の チビノーズと 呼ばれる ユニットを 操る。',
    stats: { hp: 60, attack: 55, defense: 145, specialAttack: 75, specialDefense: 150, speed: 40 },
    moves: [
      { name: 'マグネットボム', type: PokemonElementType.steel, power: 60, description: '相手に 吸いつく 鋼の 爆弾を 発射する。 攻撃は 必ず 命中 する。' },
      { name: 'ロックオン', type: PokemonElementType.normal, power: null, description: '照準を しっかり あわせて 次の 攻撃が 必ず 相手に 当たるように する。' },
      { name: 'でんじほう', type: PokemonElementType.electric, power: 120, description: '大砲の ような 電気を 発射して 攻撃する。 相手を まひの 状態に する。' },
      { name: 'ほうでん', type: PokemonElementType.electric, power: 80, description: 'まばゆい 電撃で 自分の 周りに いるものを 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  dusknoir: {
    flavorText: '弾力のある 体の 中に 行き場のない 魂を 取りこんで あの世に 連れていくと 言われる。',
    stats: { hp: 45, attack: 100, defense: 135, specialAttack: 65, specialDefense: 135, speed: 45 },
    moves: [
      { name: 'シャドーパンチ', type: PokemonElementType.ghost, power: 60, description: '影に まぎれて パンチを くりだす。 攻撃は 必ず 命中する。' },
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'くろいまなざし', type: PokemonElementType.normal, power: null, description: '吸いこまれるような 黒い まなざしで じっと みつめて 相手を 戦闘から 逃げられなくする。' },
      { name: 'かげうち', type: PokemonElementType.ghost, power: 40, description: '影を のばして 相手の 背後から 攻撃する。 必ず 先制攻撃 できる。' },
    ],
  },
  froslass: {
    flavorText: 'マイナス５０度の 冷気を 吐いて 相手を 凍らせる。胴体に 見える 部分は じつは 空洞。',
    stats: { hp: 70, attack: 80, defense: 70, specialAttack: 80, specialDefense: 70, speed: 110 },
    moves: [
      { name: 'めざましビンタ', type: PokemonElementType.fighting, power: 70, description: '眠り状態の 相手に 大きな ダメージを 与える。 かわりに 相手は 眠りから さめる。' },
      { name: 'こおりのつぶて', type: PokemonElementType.ice, power: 40, description: '氷の塊を 一瞬で つくり 相手に 素早く 放つ。 必ず 先制攻撃 できる。' },
      { name: 'こなゆき', type: PokemonElementType.ice, power: 40, description: '冷たい 粉雪を 相手に 吹きつけて 攻撃する。 こおり状態に することが ある。' },
      { name: 'みちづれ', type: PokemonElementType.ghost, power: null, description: '技を だしたあと 攻撃を 受けて ひんしに なったとき 攻撃 相手も ひんしに する。' },
    ],
  },
  rotom: {
    flavorText: '特殊な モーターを 動かす 動力源として 長い あいだ 研究されていた ポケモン。',
    stats: { hp: 50, attack: 50, defense: 77, specialAttack: 95, specialDefense: 77, speed: 91 },
    moves: [
      { name: 'でんきショック', type: PokemonElementType.electric, power: 40, description: '電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
      { name: 'あやしいかぜ', type: PokemonElementType.ghost, power: 60, description: 'みのけも よだつ 突風で 相手を 攻撃する。自分の すべての 能力が あがることが ある。' },
      { name: 'ほうでん', type: PokemonElementType.electric, power: 80, description: 'まばゆい 電撃で 自分の 周りに いるものを 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  rotom_fan: {
    flavorText: '特殊な モーターを 動かす 動力源として 長い あいだ 研究されていた ポケモン。',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'でんきショック', type: PokemonElementType.electric, power: 40, description: '電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
      { name: 'あやしいかぜ', type: PokemonElementType.ghost, power: 60, description: 'みのけも よだつ 突風で 相手を 攻撃する。自分の すべての 能力が あがることが ある。' },
      { name: 'ほうでん', type: PokemonElementType.electric, power: 80, description: 'まばゆい 電撃で 自分の 周りに いるものを 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  rotom_frost: {
    flavorText: '特殊な モーターを 動かす 動力源として 長い あいだ 研究されていた ポケモン。',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'でんきショック', type: PokemonElementType.electric, power: 40, description: '電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
      { name: 'あやしいかぜ', type: PokemonElementType.ghost, power: 60, description: 'みのけも よだつ 突風で 相手を 攻撃する。自分の すべての 能力が あがることが ある。' },
      { name: 'ほうでん', type: PokemonElementType.electric, power: 80, description: 'まばゆい 電撃で 自分の 周りに いるものを 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  rotom_heat: {
    flavorText: '特殊な モーターを 動かす 動力源として 長い あいだ 研究されていた ポケモン。',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'でんきショック', type: PokemonElementType.electric, power: 40, description: '電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
      { name: 'あやしいかぜ', type: PokemonElementType.ghost, power: 60, description: 'みのけも よだつ 突風で 相手を 攻撃する。自分の すべての 能力が あがることが ある。' },
      { name: 'ほうでん', type: PokemonElementType.electric, power: 80, description: 'まばゆい 電撃で 自分の 周りに いるものを 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  rotom_mow: {
    flavorText: '特殊な モーターを 動かす 動力源として 長い あいだ 研究されていた ポケモン。',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'でんきショック', type: PokemonElementType.electric, power: 40, description: '電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
      { name: 'あやしいかぜ', type: PokemonElementType.ghost, power: 60, description: 'みのけも よだつ 突風で 相手を 攻撃する。自分の すべての 能力が あがることが ある。' },
      { name: 'ほうでん', type: PokemonElementType.electric, power: 80, description: 'まばゆい 電撃で 自分の 周りに いるものを 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  rotom_wash: {
    flavorText: '特殊な モーターを 動かす 動力源として 長い あいだ 研究されていた ポケモン。',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'でんきショック', type: PokemonElementType.electric, power: 40, description: '電気の 刺激を 相手に 浴びせて 攻撃する。 まひ状態に することが ある。' },
      { name: 'じゅうでん', type: PokemonElementType.electric, power: null, description: '次の ターンに だす でんきタイプの 技の 威力を あげる。 自分の 特防も あがる。' },
      { name: 'あやしいかぜ', type: PokemonElementType.ghost, power: 60, description: 'みのけも よだつ 突風で 相手を 攻撃する。自分の すべての 能力が あがることが ある。' },
      { name: 'ほうでん', type: PokemonElementType.electric, power: 80, description: 'まばゆい 電撃で 自分の 周りに いるものを 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  uxie: {
    flavorText: '知識の神と 呼ばれている。 目を 合わせた 者の 記憶を 消してしまう 力を 持つという。',
    stats: { hp: 75, attack: 75, defense: 130, specialAttack: 75, specialDefense: 130, speed: 95 },
    moves: [
      { name: 'おきみやげ', type: PokemonElementType.dark, power: null, description: '自分は ひんしに なるが そのかわりに 相手の 攻撃と 特攻を がくっと さげる。' },
      { name: 'じんつうりき', type: PokemonElementType.psychic, power: 80, description: 'みえない 不思議な 力を 送って 攻撃する。 相手を ひるませることが ある。' },
      { name: 'あくび', type: PokemonElementType.normal, power: null, description: '大きな あくびで 眠気を 誘う。 次の ターンに 相手を 眠り状態に する。' },
      { name: 'ねんりき', type: PokemonElementType.psychic, power: 50, description: '弱い 念力を 相手に 送って 攻撃する。 相手を 混乱させることが ある。' },
    ],
  },
  mesprit: {
    flavorText: '悲しみの 苦しさと 喜びの 尊さを 人々に 教えた。 感情の神と 呼ばれている。',
    stats: { hp: 80, attack: 105, defense: 105, specialAttack: 105, specialDefense: 105, speed: 80 },
    moves: [
      { name: 'いやしのねがい', type: PokemonElementType.psychic, power: null, description: '自分は ひんしに なるが 控えから でてくる ポケモンの 状態異常と ＨＰを 回復する。' },
      { name: 'おまじない', type: PokemonElementType.normal, power: null, description: '天に むかって おいのりを ささげ 相手の 攻撃を 急所に 当たらなくする。' },
      { name: 'じんつうりき', type: PokemonElementType.psychic, power: 80, description: 'みえない 不思議な 力を 送って 攻撃する。 相手を ひるませることが ある。' },
      { name: 'まねっこ', type: PokemonElementType.normal, power: null, description: '直前に でた 技を まねして 同じ 技を だす。 技が でていないと 失敗する。' },
    ],
  },
  azelf: {
    flavorText: '意思の神と 呼ばれている。 湖の 底で 眠り続け 世界の バランスを とっている。',
    stats: { hp: 75, attack: 125, defense: 70, specialAttack: 125, specialDefense: 70, speed: 115 },
    moves: [
      { name: 'じんつうりき', type: PokemonElementType.psychic, power: 80, description: 'みえない 不思議な 力を 送って 攻撃する。 相手を ひるませることが ある。' },
      { name: 'だいばくはつ', type: PokemonElementType.normal, power: 250, description: '大きな 爆発で 自分の 周りに いるものを 攻撃する。 使ったあとに ひんしに なる。' },
      { name: 'ねんりき', type: PokemonElementType.psychic, power: 50, description: '弱い 念力を 相手に 送って 攻撃する。 相手を 混乱させることが ある。' },
      { name: 'みらいよち', type: PokemonElementType.psychic, power: 120, description: '技を 使った ２ターン後に 相手に 念力の 塊を 送って 攻撃する。' },
    ],
  },
  dialga: {
    flavorText: 'ディアルガが 生まれたことで 時間が 動き出したという 伝説を 持つ ポケモン。',
    stats: { hp: 100, attack: 120, defense: 120, specialAttack: 150, specialDefense: 100, speed: 90 },
    moves: [
      { name: 'ときのほうこう', type: PokemonElementType.dragon, power: 150, description: '時間が ゆがむほどの 力を うちだして 相手を 攻撃する。 次の ターンは 動けなくなる。' },
      { name: 'かいふくふうじ', type: PokemonElementType.psychic, power: null, description: '５ターンの あいだ 技や 特性や 持っている 道具によって ＨＰを 回復 できなくする。' },
      { name: 'はどうだん', type: PokemonElementType.fighting, power: 80, description: '体の 奥から 波導の 力を 相手に うち放つ。 攻撃は 必ず 命中する。' },
      { name: 'りゅうのいぶき', type: PokemonElementType.dragon, power: 60, description: 'ものすごい 息を 相手に 吹きつけて 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  palkia: {
    flavorText: '並行して 並ぶ 空間の 狭間に 住むと 言われている。 神話に 登場する ポケモン。',
    stats: { hp: 90, attack: 120, defense: 100, specialAttack: 150, specialDefense: 120, speed: 100 },
    moves: [
      { name: 'あくうせつだん', type: PokemonElementType.dragon, power: 100, description: '周りの 空間ごと 相手を 引き裂き ダメージを 与える。 急所に 当たりやすい。' },
      { name: 'かいふくふうじ', type: PokemonElementType.psychic, power: null, description: '５ターンの あいだ 技や 特性や 持っている 道具によって ＨＰを 回復 できなくする。' },
      { name: 'はどうだん', type: PokemonElementType.fighting, power: 80, description: '体の 奥から 波導の 力を 相手に うち放つ。 攻撃は 必ず 命中する。' },
      { name: 'りゅうのいぶき', type: PokemonElementType.dragon, power: 60, description: 'ものすごい 息を 相手に 吹きつけて 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  heatran: {
    flavorText: '火山の 洞穴に 生息。 十字の ツメを 食いこませて 壁や 天井を はい回る。',
    stats: { hp: 91, attack: 90, defense: 106, specialAttack: 130, specialDefense: 106, speed: 77 },
    moves: [
      { name: 'マグマストーム', type: PokemonElementType.fire, power: 100, description: '激しく 燃えたぎる 炎の なかに ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
      { name: 'ふんえん', type: PokemonElementType.fire, power: 80, description: '真っ赤な 炎で 自分の 周りに いるものを 攻撃する。 やけど状態に することが ある。' },
      { name: 'きんぞくおん', type: PokemonElementType.steel, power: null, description: '金属を こすって でるような いやな 音を 聞かせる。 相手の 特防を がくっと さげる。' },
      { name: 'ほのおのうず', type: PokemonElementType.fire, power: 35, description: '激しく 渦をまく 炎の中に ４ー５ターンの あいだ 相手を 閉じこめて 攻撃する。' },
    ],
  },
  regigigas: {
    flavorText: '特殊な 氷山や 岩石 マグマから 自分の 姿に 似た ポケモンを つくったと 言われる。',
    stats: { hp: 110, attack: 160, defense: 110, specialAttack: 80, specialDefense: 110, speed: 100 },
    moves: [
      { name: 'にぎりつぶす', type: PokemonElementType.normal, power: null, description: 'すさまじい 力で 相手を にぎりつぶす。 相手の ＨＰが 残っているほど 威力が あがる。' },
      { name: 'ピヨピヨパンチ', type: PokemonElementType.normal, power: 70, description: 'リズミカルに パンチを くりだして 相手を 攻撃する。 混乱させることが ある。' },
      { name: 'みやぶる', type: PokemonElementType.normal, power: null, description: 'ゴーストタイプに 効果がない 技や 回避率の 高い 相手に 攻撃が 当たるように なる。' },
      { name: 'リベンジ', type: PokemonElementType.fighting, power: 60, description: '相手から 技を 受けていると その相手に 対して 与える ダメージが ２倍に なる。' },
    ],
  },
  giratina: {
    flavorText: '常識の 通用しない この世の 裏側にあると 言われる 破れた世界に 生息する。',
    stats: { hp: 150, attack: 100, defense: 120, specialAttack: 100, specialDefense: 120, speed: 90 },
    moves: [
      { name: 'シャドーダイブ', type: PokemonElementType.ghost, power: 120, description: '１ターン目で 姿を 消して ２ターン目に 相手を 攻撃する。 守っていても 攻撃は 当たる。' },
      { name: 'かいふくふうじ', type: PokemonElementType.psychic, power: null, description: '５ターンの あいだ 技や 特性や 持っている 道具によって ＨＰを 回復 できなくする。' },
      { name: 'はどうだん', type: PokemonElementType.fighting, power: 80, description: '体の 奥から 波導の 力を 相手に うち放つ。 攻撃は 必ず 命中する。' },
      { name: 'りゅうのいぶき', type: PokemonElementType.dragon, power: 60, description: 'ものすごい 息を 相手に 吹きつけて 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  giratina_origin: {
    flavorText: '常識の 通用しない この世の 裏側にあると 言われる 破れた世界に 生息する。',
    stats: { hp: 150, attack: 120, defense: 100, specialAttack: 120, specialDefense: 100, speed: 90 },
    moves: [
      { name: 'シャドーダイブ', type: PokemonElementType.ghost, power: 120, description: '１ターン目で 姿を 消して ２ターン目に 相手を 攻撃する。 守っていても 攻撃は 当たる。' },
      { name: 'かいふくふうじ', type: PokemonElementType.psychic, power: null, description: '５ターンの あいだ 技や 特性や 持っている 道具によって ＨＰを 回復 できなくする。' },
      { name: 'はどうだん', type: PokemonElementType.fighting, power: 80, description: '体の 奥から 波導の 力を 相手に うち放つ。 攻撃は 必ず 命中する。' },
      { name: 'りゅうのいぶき', type: PokemonElementType.dragon, power: 60, description: 'ものすごい 息を 相手に 吹きつけて 攻撃する。 まひ状態に することが ある。' },
    ],
  },
  cresselia: {
    flavorText: '飛行するときは ベールのような 羽から 光る 粒子を 出す。 三日月の化身と 呼ばれている。',
    stats: { hp: 120, attack: 70, defense: 110, specialAttack: 75, specialDefense: 120, speed: 85 },
    moves: [
      { name: 'みかづきのまい', type: PokemonElementType.psychic, power: null, description: '自分は ひんしに なるが 控えから でてくる ポケモンの すべての 状態を 回復する。' },
      { name: 'サイコシフト', type: PokemonElementType.psychic, power: null, description: '超能力で 暗示を かけて 自分の 受けている 状態異常を 相手に うつす。' },
      { name: 'つきのひかり', type: PokemonElementType.normal, power: null, description: '自分の ＨＰを 回復する。 天気に よって 回復の 量が 変化する。' },
      { name: 'オーロラビーム', type: PokemonElementType.ice, power: 65, description: 'にじいろの ビームを 相手に 発射して 攻撃する。 攻撃を さげる ことが ある。' },
    ],
  },
  phione: {
    flavorText: '海の 温度が 高くなると 頭の 浮き袋を ふくらませて 海面を 集団で 漂う。',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80 },
    moves: [
      { name: 'とける', type: PokemonElementType.poison, power: null, description: '細胞の 変化で 液状に なり 自分の 防御を ぐーんと あげる。' },
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
      { name: 'あわ', type: PokemonElementType.water, power: 40, description: '無数の 泡を 相手に 吹きかけて 攻撃する。相手の 素早さを さげることが ある。' },
      { name: 'アクアリング', type: PokemonElementType.water, power: null, description: '自分の 体の 周りを 水で つくった ベールで おおう。 毎ターン ＨＰを 回復する。' },
    ],
  },
  manaphy: {
    flavorText: '生まれたときから 備わっている 不思議な 力を 使うと どんな ポケモンとも 心が 通い合う。',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'ハートスワップ', type: PokemonElementType.psychic, power: null, description: '超能力で 自分と 相手に かかっている 能力変化を 入れ替える。' },
      { name: 'ほたるび', type: PokemonElementType.bug, power: null, description: '点滅する 光を 眺めて 自分の 精神を 統一し 特攻を ぐぐーんと あげる。' },
      { name: 'とける', type: PokemonElementType.poison, power: null, description: '細胞の 変化で 液状に なり 自分の 防御を ぐーんと あげる。' },
      { name: 'みずあそび', type: PokemonElementType.water, power: null, description: 'あたりを 水で びしょびしょにする。 ５ターンの あいだ ほのおタイプの 技を 弱める。' },
    ],
  },
  darkrai: {
    flavorText: '深い 眠りに 誘う 力で 人や ポケモンに 悪夢を 見せて 自分の 縄張りから 追い出す。',
    stats: { hp: 70, attack: 90, defense: 90, specialAttack: 135, specialDefense: 90, speed: 125 },
    moves: [
      { name: 'ダークホール', type: PokemonElementType.dark, power: null, description: '暗黒の 世界に ひきずり 落として 相手を 眠り状態に する。' },
      { name: 'あくむ', type: PokemonElementType.ghost, power: null, description: '眠り状態の 相手に 悪夢を みせて 毎ターン 少しずつ ＨＰを 減らしていく。' },
      { name: 'さいみんじゅつ', type: PokemonElementType.psychic, power: null, description: '眠気を 誘う 暗示を かけて 相手を 眠り状態に する。' },
      { name: 'だましうち', type: PokemonElementType.dark, power: 60, description: 'さりげなく 相手に ちかづき 油断した すきを みて なぐりつける。 攻撃は 必ず 命中する。' },
    ],
  },
  shaymin: {
    flavorText: '大気の 毒素を 分解して 荒れた 大地を 一瞬のうちに 花畑にする 力を 持つ。',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'シードフレア', type: PokemonElementType.grass, power: 120, description: '体の 中から 衝撃波を 発生させる。相手の 特防を がくっと さげることが ある。' },
      { name: 'いやしのねがい', type: PokemonElementType.psychic, power: null, description: '自分は ひんしに なるが 控えから でてくる ポケモンの 状態異常と ＨＰを 回復する。' },
      { name: 'てんしのキッス', type: PokemonElementType.normal, power: null, description: '天使のように かわいく キスして 相手を 混乱させる。' },
      { name: 'アロマセラピー', type: PokemonElementType.grass, power: null, description: '心地好い やすらぐ 香りを かがせて 味方全員の 状態異常を 回復する。' },
    ],
  },
  shaymin_sky: {
    flavorText: '大気の 毒素を 分解して 荒れた 大地を 一瞬のうちに 花畑にする 力を 持つ。',
    stats: { hp: 100, attack: 103, defense: 75, specialAttack: 120, specialDefense: 75, speed: 127 },
    moves: [
      { name: 'シードフレア', type: PokemonElementType.grass, power: 120, description: '体の 中から 衝撃波を 発生させる。相手の 特防を がくっと さげることが ある。' },
      { name: 'てんしのキッス', type: PokemonElementType.normal, power: null, description: '天使のように かわいく キスして 相手を 混乱させる。' },
      { name: 'せいちょう', type: PokemonElementType.normal, power: null, description: '体を 一気に 大きく 生長させて 攻撃と 特攻を あげる。' },
      { name: 'あまいかおり', type: PokemonElementType.normal, power: null, description: '香りで 相手の 回避率を がくっと さげる。草むら などで 使うと ポケモンが よってくる。' },
    ],
  },
  arceus: {
    flavorText: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'さばきのつぶて', type: PokemonElementType.normal, power: 100, description: '無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
    ],
  },
  arceus_bug: {
    flavorText: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'さばきのつぶて', type: PokemonElementType.normal, power: 100, description: '無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
    ],
  },
  arceus_dark: {
    flavorText: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'さばきのつぶて', type: PokemonElementType.normal, power: 100, description: '無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
    ],
  },
  arceus_dragon: {
    flavorText: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'さばきのつぶて', type: PokemonElementType.normal, power: 100, description: '無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
    ],
  },
  arceus_electric: {
    flavorText: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'さばきのつぶて', type: PokemonElementType.normal, power: 100, description: '無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
    ],
  },
  arceus_fighting: {
    flavorText: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'さばきのつぶて', type: PokemonElementType.normal, power: 100, description: '無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
    ],
  },
  arceus_fire: {
    flavorText: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'さばきのつぶて', type: PokemonElementType.normal, power: 100, description: '無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
    ],
  },
  arceus_flying: {
    flavorText: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'さばきのつぶて', type: PokemonElementType.normal, power: 100, description: '無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
    ],
  },
  arceus_ghost: {
    flavorText: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'さばきのつぶて', type: PokemonElementType.normal, power: 100, description: '無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
    ],
  },
  arceus_grass: {
    flavorText: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'さばきのつぶて', type: PokemonElementType.normal, power: 100, description: '無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
    ],
  },
  arceus_ground: {
    flavorText: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'さばきのつぶて', type: PokemonElementType.normal, power: 100, description: '無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
    ],
  },
  arceus_ice: {
    flavorText: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'さばきのつぶて', type: PokemonElementType.normal, power: 100, description: '無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
    ],
  },
  arceus_poison: {
    flavorText: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'さばきのつぶて', type: PokemonElementType.normal, power: 100, description: '無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
    ],
  },
  arceus_psychic: {
    flavorText: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'さばきのつぶて', type: PokemonElementType.normal, power: 100, description: '無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
    ],
  },
  arceus_rock: {
    flavorText: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'さばきのつぶて', type: PokemonElementType.normal, power: 100, description: '無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
    ],
  },
  arceus_steel: {
    flavorText: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'さばきのつぶて', type: PokemonElementType.normal, power: 100, description: '無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
    ],
  },
  arceus_water: {
    flavorText: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'さばきのつぶて', type: PokemonElementType.normal, power: 100, description: '無数の 光弾を 相手に 放出する。 自分の 持つ プレートに より タイプが 変わる。' },
      { name: 'しんそく', type: PokemonElementType.normal, power: 80, description: '目にも 留まらぬ ものすごい 速さで 相手に 突進して 攻撃する。 必ず 先制攻撃 できる。' },
      { name: 'おしおき', type: PokemonElementType.dark, power: null, description: '能力変化で 相手が パワーアップ しているほど 技の 威力が あがる。' },
      { name: 'ほろびのうた', type: PokemonElementType.normal, power: null, description: '歌を 聴いた ポケモンは ３ターン たつと ひんしに なる。 交代すると 効果は なくなる。' },
    ],
  },
}
