// Korean counterpart of pokemon-info-data.ts - same species keys, same
// shape (PokemonInfoEntry), sourced the same way but with PokeAPI's
// Korean flavor text/move data instead of English. Stats are numbers,
// not translated text, and are identical to the English file.
import { PokemonElementType } from './types'
import { PokemonInfoEntry } from './pokemon-info-data'

export const POKEMON_INFO_DATA_KO: { [key: string]: PokemonInfoEntry } = {
  bulbasaur: {
    flavorText: '태어났을 때부터 등에 이상한 씨앗이 심어져 있으며 몸과 함께 자란다고 한다.',
    stats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 },
    moves: [
      { name: '덩굴채찍', type: PokemonElementType.grass, power: 45, description: '채찍처럼 휘어지는 가늘고 긴 덩굴로 상대를 힘껏 쳐서 공격한다.' },
      { name: '수면가루', type: PokemonElementType.grass, power: null, description: '잠이 오는 가루를 많이 흩뿌려서 상대를 잠듦 상태로 만든다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
      { name: '잎날가르기', type: PokemonElementType.grass, power: 55, description: '잎사귀를 날려 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
    ],
  },
  ivysaur: {
    flavorText: '꽃봉오리가 등에 붙어 있으며 양분을 흡수해가면 커다란 꽃이 핀다고 한다.',
    stats: { hp: 60, attack: 62, defense: 63, specialAttack: 80, specialDefense: 80, speed: 60 },
    moves: [
      { name: '덩굴채찍', type: PokemonElementType.grass, power: 45, description: '채찍처럼 휘어지는 가늘고 긴 덩굴로 상대를 힘껏 쳐서 공격한다.' },
      { name: '수면가루', type: PokemonElementType.grass, power: null, description: '잠이 오는 가루를 많이 흩뿌려서 상대를 잠듦 상태로 만든다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
      { name: '잎날가르기', type: PokemonElementType.grass, power: 55, description: '잎사귀를 날려 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
    ],
  },
  venusaur: {
    flavorText: '큰 꽃잎을 펼쳐 햇빛을 받고 있으면 몸에 힘이 넘쳐흐른다.',
    stats: { hp: 80, attack: 82, defense: 83, specialAttack: 100, specialDefense: 100, speed: 80 },
    moves: [
      { name: '덩굴채찍', type: PokemonElementType.grass, power: 45, description: '채찍처럼 휘어지는 가늘고 긴 덩굴로 상대를 힘껏 쳐서 공격한다.' },
      { name: '수면가루', type: PokemonElementType.grass, power: null, description: '잠이 오는 가루를 많이 흩뿌려서 상대를 잠듦 상태로 만든다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
      { name: '잎날가르기', type: PokemonElementType.grass, power: 55, description: '잎사귀를 날려 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
    ],
  },
  charmander: {
    flavorText: '꼬리의 불꽃은 파이리의 생명력의 상징이다. 건강할 때 왕성하게 불타오른다.',
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    moves: [
      { name: '용의분노', type: PokemonElementType.dragon, power: null, description: '분노의 충격파를 상대에게 부딪쳐서 공격한다. 언제나 40의 데미지를 준다.' },
      { name: '연막', type: PokemonElementType.normal, power: null, description: '연기나 먹물을 내뿜어 상대의 명중률을 떨어뜨린다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '메탈클로', type: PokemonElementType.steel, power: 50, description: '강철의 발톱으로 상대를 베어 갈라 공격한다. 자신의 공격이 올라갈 때도 있다.' },
    ],
  },
  charmeleon: {
    flavorText: '꼬리를 휘둘러 상대를 쓰러트리고 날카로운 발톱으로 갈기갈기 찢어버린다.',
    stats: { hp: 58, attack: 64, defense: 58, specialAttack: 80, specialDefense: 65, speed: 80 },
    moves: [
      { name: '용의분노', type: PokemonElementType.dragon, power: null, description: '분노의 충격파를 상대에게 부딪쳐서 공격한다. 언제나 40의 데미지를 준다.' },
      { name: '연막', type: PokemonElementType.normal, power: null, description: '연기나 먹물을 내뿜어 상대의 명중률을 떨어뜨린다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '메탈클로', type: PokemonElementType.steel, power: 50, description: '강철의 발톱으로 상대를 베어 갈라 공격한다. 자신의 공격이 올라갈 때도 있다.' },
    ],
  },
  charizard: {
    flavorText: '입에서 작렬하는 불꽃을 토해낼 때 꼬리의 끝이 더욱 붉고 격렬하게 타오른다.',
    stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    moves: [
      { name: '용의분노', type: PokemonElementType.dragon, power: null, description: '분노의 충격파를 상대에게 부딪쳐서 공격한다. 언제나 40의 데미지를 준다.' },
      { name: '연막', type: PokemonElementType.normal, power: null, description: '연기나 먹물을 내뿜어 상대의 명중률을 떨어뜨린다.' },
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
    ],
  },
  squirtle: {
    flavorText: '등껍질에 숨어 몸을 보호한다. 상대의 빈틈을 놓치지 않고 물을 뿜어내어 반격한다.',
    stats: { hp: 44, attack: 48, defense: 65, specialAttack: 50, specialDefense: 64, speed: 43 },
    moves: [
      { name: '껍질에숨기', type: PokemonElementType.water, power: null, description: '껍질에 숨어 몸을 보호하여 자신의 방어를 올린다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '고속스핀', type: PokemonElementType.normal, power: 50, description: '회전해서 상대를 공격한다. 조이기, 김밥말이, 씨뿌리기, 압정뿌리기 등도 날려버린다.' },
      { name: '로켓박치기', type: PokemonElementType.normal, power: 130, description: '1턴째에 머리를 움츠려 방어를 올린다. 2턴째에 상대를 공격한다.' },
    ],
  },
  wartortle: {
    flavorText: '딱 하고 머리를 맞을 때 등껍질로 숨어서 피한다. 하지만 꼬리가 살짝 삐져나와 있다.',
    stats: { hp: 59, attack: 63, defense: 80, specialAttack: 65, specialDefense: 80, speed: 58 },
    moves: [
      { name: '껍질에숨기', type: PokemonElementType.water, power: null, description: '껍질에 숨어 몸을 보호하여 자신의 방어를 올린다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '고속스핀', type: PokemonElementType.normal, power: 50, description: '회전해서 상대를 공격한다. 조이기, 김밥말이, 씨뿌리기, 압정뿌리기 등도 날려버린다.' },
      { name: '로켓박치기', type: PokemonElementType.normal, power: 130, description: '1턴째에 머리를 움츠려 방어를 올린다. 2턴째에 상대를 공격한다.' },
    ],
  },
  blastoise: {
    flavorText: '무거운 몸으로 상대를 덮쳐서 기절시킨다. 위기에 처하면 등껍질에 숨는다.',
    stats: { hp: 79, attack: 83, defense: 100, specialAttack: 85, specialDefense: 105, speed: 78 },
    moves: [
      { name: '껍질에숨기', type: PokemonElementType.water, power: null, description: '껍질에 숨어 몸을 보호하여 자신의 방어를 올린다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '고속스핀', type: PokemonElementType.normal, power: 50, description: '회전해서 상대를 공격한다. 조이기, 김밥말이, 씨뿌리기, 압정뿌리기 등도 날려버린다.' },
      { name: '로켓박치기', type: PokemonElementType.normal, power: 130, description: '1턴째에 머리를 움츠려 방어를 올린다. 2턴째에 상대를 공격한다.' },
    ],
  },
  caterpie: {
    flavorText: '머리의 더듬이로부터 강렬한 냄새를 내어 적을 물리치고 몸을 보호한다.',
    stats: { hp: 45, attack: 30, defense: 35, specialAttack: 20, specialDefense: 20, speed: 45 },
    moves: [
      { name: '실뿜기', type: PokemonElementType.bug, power: null, description: '입에서 뿜어낸 실을 휘감아서 상대의 스피드를 크게 떨어뜨린다.' },
      { name: '몸통박치기', type: PokemonElementType.normal, power: 40, description: '상대를 향해서 몸 전체를 부딪쳐가며 공격한다.' },
    ],
  },
  metapod: {
    flavorText: '강철같이 단단한 껍질로 부드러운 몸을 보호하고 있다. 진화할 때까지 가만히 참고 있다.',
    stats: { hp: 50, attack: 20, defense: 55, specialAttack: 25, specialDefense: 25, speed: 30 },
    moves: [
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
    ],
  },
  butterfree: {
    flavorText: '꽃의 꿀을 매우 좋아한다. 약간의 꽃가루만으로 꽃밭이 있는 장소를 찾아낼 수 있다.',
    stats: { hp: 60, attack: 45, defense: 50, specialAttack: 90, specialDefense: 80, speed: 70 },
    moves: [
      { name: '수면가루', type: PokemonElementType.grass, power: null, description: '잠이 오는 가루를 많이 흩뿌려서 상대를 잠듦 상태로 만든다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
      { name: '은빛바람', type: PokemonElementType.bug, power: 60, description: '바람에 날개 가루를 날려서 상대를 공격한다. 자신의 모든 능력이 올라갈 때가 있다.' },
      { name: '저리가루', type: PokemonElementType.grass, power: null, description: '저리 가루를 많이 흩뿌려서 상대를 마비 상태로 만든다.' },
    ],
  },
  kakuna: {
    flavorText: '스스로는 거의 움직일 수 없지만 위험할 때는 단단해져서 몸을 보호하고 있는 것 같다.',
    stats: { hp: 45, attack: 25, defense: 50, specialAttack: 25, specialDefense: 25, speed: 35 },
    moves: [
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
    ],
  },
  weedle: {
    flavorText: '숲이나 풀밭에 많이 서식한다. 머리끝에 5cm 정도의 작고 날카로운 독침을 지니고 있다.',
    stats: { hp: 40, attack: 35, defense: 30, specialAttack: 20, specialDefense: 20, speed: 50 },
    moves: [
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '실뿜기', type: PokemonElementType.bug, power: null, description: '입에서 뿜어낸 실을 휘감아서 상대의 스피드를 크게 떨어뜨린다.' },
    ],
  },
  beedrill: {
    flavorText: '양손과 엉덩이에 있는 3개의 독침으로 상대를 찌르고 찌르고 또 찌르며 공격한다.',
    stats: { hp: 65, attack: 90, defense: 40, specialAttack: 45, specialDefense: 80, speed: 75 },
    moves: [
      { name: '더블니들', type: PokemonElementType.bug, power: 25, description: '2개의 침을 상대에게 꿰찔러 2회 연속으로 데미지를 준다. 독 상태로 만들 때가 있다.' },
      { name: '바늘미사일', type: PokemonElementType.bug, power: 25, description: '날카로운 침을 상대에게 발사해서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '따라가때리기', type: PokemonElementType.dark, power: 40, description: '상대 포켓몬이 교체될 때 기술을 쓰면 2배의 위력으로 공격할 수 있다.' },
    ],
  },
  pidgey: {
    flavorText: '숲이나 수풀에 많이 분포해 있다. 땅에서도 격렬한 날갯짓으로 모래를 뿌리기도 한다.',
    stats: { hp: 40, attack: 45, defense: 40, specialAttack: 35, specialDefense: 35, speed: 56 },
    moves: [
      { name: '따라하기', type: PokemonElementType.flying, power: null, description: '상대가 사용한 기술을 흉내 내어 자신도 똑같은 기술을 쓴다.' },
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '바람일으키기', type: PokemonElementType.flying, power: 40, description: '날개로 일으킨 격한 바람을 상대에게 부딪쳐서 공격한다.' },
      { name: '날려버리기', type: PokemonElementType.normal, power: null, description: '상대를 날려버려서 교대할 포켓몬을 끌어낸다. 야생의 경우에는 배틀이 끝난다.' },
    ],
  },
  pidgeotto: {
    flavorText: '발톱이 발달해 있다. 먹이인 아라리를 잡아 100km 떨어져 있는 둥지까지 나른다.',
    stats: { hp: 63, attack: 60, defense: 55, specialAttack: 50, specialDefense: 50, speed: 71 },
    moves: [
      { name: '따라하기', type: PokemonElementType.flying, power: null, description: '상대가 사용한 기술을 흉내 내어 자신도 똑같은 기술을 쓴다.' },
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '바람일으키기', type: PokemonElementType.flying, power: 40, description: '날개로 일으킨 격한 바람을 상대에게 부딪쳐서 공격한다.' },
      { name: '날려버리기', type: PokemonElementType.normal, power: null, description: '상대를 날려버려서 교대할 포켓몬을 끌어낸다. 야생의 경우에는 배틀이 끝난다.' },
    ],
  },
  pidgeot: {
    flavorText: '먹이를 찾을 때 수면을 아슬아슬하게 미끄러지듯 날아 잉어킹 등을 움켜잡는다.',
    stats: { hp: 83, attack: 80, defense: 75, specialAttack: 70, specialDefense: 70, speed: 101 },
    moves: [
      { name: '따라하기', type: PokemonElementType.flying, power: null, description: '상대가 사용한 기술을 흉내 내어 자신도 똑같은 기술을 쓴다.' },
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '바람일으키기', type: PokemonElementType.flying, power: 40, description: '날개로 일으킨 격한 바람을 상대에게 부딪쳐서 공격한다.' },
      { name: '날려버리기', type: PokemonElementType.normal, power: null, description: '상대를 날려버려서 교대할 포켓몬을 끌어낸다. 야생의 경우에는 배틀이 끝난다.' },
    ],
  },
  rattata: {
    flavorText: '먹을 것이 있는 곳이라면 어디서든 서식한다. 온종일 먹이를 찾아다닌다.',
    stats: { hp: 30, attack: 56, defense: 35, specialAttack: 25, specialDefense: 35, speed: 72 },
    moves: [
      { name: '필살앞니', type: PokemonElementType.normal, power: 80, description: '날카로운 앞니로 강하게 물어서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '분노의앞니', type: PokemonElementType.normal, power: null, description: '날카로운 앞니로 강하게 물어서 공격한다. 상대의 HP는 절반이 된다.' },
      { name: '따라가때리기', type: PokemonElementType.dark, power: 40, description: '상대 포켓몬이 교체될 때 기술을 쓰면 2배의 위력으로 공격할 수 있다.' },
      { name: '꼬리흔들기', type: PokemonElementType.normal, power: null, description: '꼬리를 좌우로 귀엽게 흔들어 방심을 유도한다. 상대의 방어를 떨어뜨린다.' },
    ],
  },
  raticate: {
    flavorText: '계속 자라는 앞니를 갈아내려고 딱딱한 것을 갉는 습성이 있다. 벽돌로 된 벽도 갉아서 부순다.',
    stats: { hp: 55, attack: 81, defense: 60, specialAttack: 50, specialDefense: 70, speed: 97 },
    moves: [
      { name: '필살앞니', type: PokemonElementType.normal, power: 80, description: '날카로운 앞니로 강하게 물어서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '분노의앞니', type: PokemonElementType.normal, power: null, description: '날카로운 앞니로 강하게 물어서 공격한다. 상대의 HP는 절반이 된다.' },
      { name: '따라가때리기', type: PokemonElementType.dark, power: 40, description: '상대 포켓몬이 교체될 때 기술을 쓰면 2배의 위력으로 공격할 수 있다.' },
      { name: '꼬리흔들기', type: PokemonElementType.normal, power: null, description: '꼬리를 좌우로 귀엽게 흔들어 방심을 유도한다. 상대의 방어를 떨어뜨린다.' },
    ],
  },
  spearow: {
    flavorText: '자신의 영역을 지키기 위해 작은 날개를 쳐서 바쁘게 주위를 날아 맴돈다.',
    stats: { hp: 40, attack: 60, defense: 30, specialAttack: 31, specialDefense: 31, speed: 70 },
    moves: [
      { name: '회전부리', type: PokemonElementType.flying, power: 80, description: '회전하면서 뾰족한 부리를 상대에게 꿰찔러 공격한다.' },
      { name: '따라하기', type: PokemonElementType.flying, power: null, description: '상대가 사용한 기술을 흉내 내어 자신도 똑같은 기술을 쓴다.' },
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '쪼기', type: PokemonElementType.flying, power: 35, description: '날카롭고 뾰족한 부리나 뿔로 상대를 쪼아서 공격한다.' },
    ],
  },
  fearow: {
    flavorText: '커다란 날개로 넓은 하늘을 계속 날 수 있다. 한 번도 내려앉지 않아도 괜찮다.',
    stats: { hp: 65, attack: 90, defense: 65, specialAttack: 61, specialDefense: 61, speed: 100 },
    moves: [
      { name: '회전부리', type: PokemonElementType.flying, power: 80, description: '회전하면서 뾰족한 부리를 상대에게 꿰찔러 공격한다.' },
      { name: '따라하기', type: PokemonElementType.flying, power: null, description: '상대가 사용한 기술을 흉내 내어 자신도 똑같은 기술을 쓴다.' },
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '쪼기', type: PokemonElementType.flying, power: 35, description: '날카롭고 뾰족한 부리나 뿔로 상대를 쪼아서 공격한다.' },
    ],
  },
  ekans: {
    flavorText: '성장할수록 점점 길어진다. 밤에는 나뭇가지에 몸을 돌돌 말고 쉰다.',
    stats: { hp: 35, attack: 60, defense: 44, specialAttack: 40, specialDefense: 54, speed: 55 },
    moves: [
      { name: '뱀눈초리', type: PokemonElementType.normal, power: null, description: '배의 무늬로 겁을 주어 상대를 마비 상태로 만든다.' },
      { name: '용해액', type: PokemonElementType.poison, power: 40, description: '강한 산을 상대에게 끼얹어 공격한다. 상대의 특수방어를 떨어뜨릴 때가 있다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '김밥말이', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 사용해 4-5턴 동안 상대를 휘감아 공격한다.' },
    ],
  },
  arbok: {
    flavorText: '배의 무늬가 무서운 얼굴로 보인다. 약한 적은 그 무늬만 보고도 도망치고 만다.',
    stats: { hp: 60, attack: 95, defense: 69, specialAttack: 65, specialDefense: 79, speed: 80 },
    moves: [
      { name: '뱀눈초리', type: PokemonElementType.normal, power: null, description: '배의 무늬로 겁을 주어 상대를 마비 상태로 만든다.' },
      { name: '용해액', type: PokemonElementType.poison, power: 40, description: '강한 산을 상대에게 끼얹어 공격한다. 상대의 특수방어를 떨어뜨릴 때가 있다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '김밥말이', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 사용해 4-5턴 동안 상대를 휘감아 공격한다.' },
    ],
  },
  pikachu: {
    flavorText: '꼬리를 세우고 주변의 상황을 살피다 보면 가끔 꼬리에 번개가 친다.',
    stats: { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
    moves: [
      { name: '전기쇼크', type: PokemonElementType.electric, power: 40, description: '전기 자극을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '힘껏치기', type: PokemonElementType.normal, power: 80, description: '긴 꼬리나 덩굴 등을 사용해 상대를 힘껏 쳐서 공격한다.' },
      { name: '꼬리흔들기', type: PokemonElementType.normal, power: null, description: '꼬리를 좌우로 귀엽게 흔들어 방심을 유도한다. 상대의 방어를 떨어뜨린다.' },
      { name: '전광석화', type: PokemonElementType.normal, power: 40, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진한다. 반드시 선제공격할 수 있다.' },
    ],
  },
  raichu: {
    flavorText: '전기가 모이면 근육이 자극되어 여느 때보다 공격적이 된다.',
    stats: { hp: 60, attack: 90, defense: 55, specialAttack: 90, specialDefense: 80, speed: 110 },
    moves: [
      { name: '전기쇼크', type: PokemonElementType.electric, power: 40, description: '전기 자극을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '꼬리흔들기', type: PokemonElementType.normal, power: null, description: '꼬리를 좌우로 귀엽게 흔들어 방심을 유도한다. 상대의 방어를 떨어뜨린다.' },
      { name: '전광석화', type: PokemonElementType.normal, power: 40, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진한다. 반드시 선제공격할 수 있다.' },
      { name: '10만볼트', type: PokemonElementType.electric, power: 90, description: '강한 전격을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  sandshrew: {
    flavorText: '지면에 구멍을 파고 산다. 자신에게 위험이 닥쳐오면 둥글게 말아서 몸을 보호한다.',
    stats: { hp: 50, attack: 75, defense: 85, specialAttack: 20, specialDefense: 30, speed: 40 },
    moves: [
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '모래지옥', type: PokemonElementType.ground, power: 35, description: '세차게 불어대는 모래바람 속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
    ],
  },
  sandslash: {
    flavorText: '굉장한 기세로 지면을 파면 가시와 발톱이 부러져 버리지만 다음 날에는 바로 돋아나 있다.',
    stats: { hp: 75, attack: 100, defense: 110, specialAttack: 45, specialDefense: 55, speed: 65 },
    moves: [
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '모래지옥', type: PokemonElementType.ground, power: 35, description: '세차게 불어대는 모래바람 속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
    ],
  },
  nidoran_female: {
    flavorText: '몸은 작지만 독침을 지니고 있기 때문에 주의가 필요하다. 암컷의 뿔이 더 작다.',
    stats: { hp: 55, attack: 47, defense: 52, specialAttack: 40, specialDefense: 40, speed: 41 },
    moves: [
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '부추기기', type: PokemonElementType.dark, power: null, description: '상대를 부추겨서 혼란시킨다. 동시에 상대의 특수공격도 올라가 버린다.' },
      { name: '두번차기', type: PokemonElementType.fighting, power: 30, description: '2개의 다리로 상대를 걷어차서 공격한다. 2회 연속으로 데미지를 준다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  nidorina: {
    flavorText: '암컷으로 성격은 온화하다. 입에서 내보내는 초음파는 상대를 혼란시키는 힘이 있다.',
    stats: { hp: 70, attack: 62, defense: 67, specialAttack: 55, specialDefense: 55, speed: 56 },
    moves: [
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '부추기기', type: PokemonElementType.dark, power: null, description: '상대를 부추겨서 혼란시킨다. 동시에 상대의 특수공격도 올라가 버린다.' },
      { name: '두번차기', type: PokemonElementType.fighting, power: 30, description: '2개의 다리로 상대를 걷어차서 공격한다. 2회 연속으로 데미지를 준다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  nidoqueen: {
    flavorText: '비늘로 뒤덮인 튼튼한 몸으로 둥지의 입구를 막아 상대로부터 새끼들을 지킨다.',
    stats: { hp: 90, attack: 92, defense: 87, specialAttack: 75, specialDefense: 85, speed: 76 },
    moves: [
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '두번차기', type: PokemonElementType.fighting, power: 30, description: '2개의 다리로 상대를 걷어차서 공격한다. 2회 연속으로 데미지를 준다.' },
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
      { name: '꼬리흔들기', type: PokemonElementType.normal, power: null, description: '꼬리를 좌우로 귀엽게 흔들어 방심을 유도한다. 상대의 방어를 떨어뜨린다.' },
    ],
  },
  nidoran_male: {
    flavorText: '풀밭 위로 귀만 내어 주위의 낌새를 살핀다. 맹독의 뿔로 몸을 보호한다.',
    stats: { hp: 46, attack: 57, defense: 40, specialAttack: 40, specialDefense: 40, speed: 50 },
    moves: [
      { name: '뿔찌르기', type: PokemonElementType.normal, power: 65, description: '날카롭고 뾰족한 뿔로 상대를 공격한다.' },
      { name: '뿔드릴', type: PokemonElementType.normal, power: null, description: '회전하는 뿔을 상대에게 꿰찔러서 공격한다. 맞으면 일격에 기절한다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '부추기기', type: PokemonElementType.dark, power: null, description: '상대를 부추겨서 혼란시킨다. 동시에 상대의 특수공격도 올라가 버린다.' },
    ],
  },
  nidorino: {
    flavorText: '발달한 귀를 세워 주위의 낌새를 살핀다. 무슨 일이 생기면 바로 덤벼든다.',
    stats: { hp: 61, attack: 72, defense: 57, specialAttack: 55, specialDefense: 55, speed: 65 },
    moves: [
      { name: '뿔찌르기', type: PokemonElementType.normal, power: 65, description: '날카롭고 뾰족한 뿔로 상대를 공격한다.' },
      { name: '뿔드릴', type: PokemonElementType.normal, power: null, description: '회전하는 뿔을 상대에게 꿰찔러서 공격한다. 맞으면 일격에 기절한다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '부추기기', type: PokemonElementType.dark, power: null, description: '상대를 부추겨서 혼란시킨다. 동시에 상대의 특수공격도 올라가 버린다.' },
    ],
  },
  nidoking: {
    flavorText: '돌처럼 딱딱한 피부와 길게 뻗은 뿔이 특징이다. 뿔에는 독이 있으니 주의해야 한다.',
    stats: { hp: 81, attack: 102, defense: 77, specialAttack: 85, specialDefense: 75, speed: 85 },
    moves: [
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '메가혼', type: PokemonElementType.bug, power: 120, description: '단단하고 훌륭한 뿔로 마음껏 상대를 꿰찔러서 공격한다.' },
      { name: '두번차기', type: PokemonElementType.fighting, power: 30, description: '2개의 다리로 상대를 걷어차서 공격한다. 2회 연속으로 데미지를 준다.' },
      { name: '쪼기', type: PokemonElementType.flying, power: 35, description: '날카롭고 뾰족한 부리나 뿔로 상대를 쪼아서 공격한다.' },
    ],
  },
  clefairy: {
    flavorText: '보름달 밤에 삐삐가 모여 춤을 추는 모습을 보면 행복해진다고 전해진다.',
    stats: { hp: 70, attack: 45, defense: 48, specialAttack: 60, specialDefense: 65, speed: 35 },
    moves: [
      { name: '코멧펀치', type: PokemonElementType.steel, power: 90, description: '혜성과 같은 펀치를 날려서 상대를 공격한다. 자신의 공격이 올라갈 때가 있다.' },
      { name: '작아지기', type: PokemonElementType.normal, power: null, description: '몸을 축소하여 작게 보임으로써 자신의 회피율을 크게 올린다.' },
      { name: '날따름', type: PokemonElementType.normal, power: null, description: '자신에게 주목시켜 상대로부터의 공격을 모두 자신에게 향하게 한다.' },
      { name: '달빛', type: PokemonElementType.normal, power: null, description: '자신의 HP를 회복한다. 날씨에 따라 회복량이 변한다.' },
    ],
  },
  clefable: {
    flavorText: '1km 전방에 떨어진 바늘 소리도 분간할 수 있는 우수한 귀를 가지고 있다. 조용한 산속에 살고 있다.',
    stats: { hp: 95, attack: 70, defense: 73, specialAttack: 95, specialDefense: 90, speed: 60 },
    moves: [
      { name: '작아지기', type: PokemonElementType.normal, power: null, description: '몸을 축소하여 작게 보임으로써 자신의 회피율을 크게 올린다.' },
      { name: '연속뺨치기', type: PokemonElementType.normal, power: 15, description: '연속 뺨치기로 상대를 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '노래하기', type: PokemonElementType.normal, power: null, description: '기분 좋은 예쁜 노랫소리를 들려주고 상대를 잠듦 상태로 만든다.' },
      { name: '손가락흔들기', type: PokemonElementType.normal, power: null, description: '손가락을 흔들어 자신의 뇌를 자극해서 모든 기술 중 어느 하나를 날린다.' },
    ],
  },
  vulpix: {
    flavorText: '태어났을 때는 꼬리가 새하얗고 하나밖에 없다. 성장하면 끝이 갈라지며 꼬리 수가 늘어난다.',
    stats: { hp: 38, attack: 41, defense: 40, specialAttack: 50, specialDefense: 65, speed: 65 },
    moves: [
      { name: '원념', type: PokemonElementType.ghost, power: null, description: '상대의 기술로 기절하면 원념을 담아 그 기술의 PP를 0으로 만든다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '회오리불꽃', type: PokemonElementType.fire, power: 35, description: '세차게 소용돌이치는 불꽃 속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '꼬리흔들기', type: PokemonElementType.normal, power: null, description: '꼬리를 좌우로 귀엽게 흔들어 방심을 유도한다. 상대의 방어를 떨어뜨린다.' },
    ],
  },
  ninetales: {
    flavorText: '황금빛으로 빛나는 털과 9개의 긴 꼬리를 지녔다. 1000년을 산다고 한다.',
    stats: { hp: 73, attack: 76, defense: 75, specialAttack: 81, specialDefense: 100, speed: 100 },
    moves: [
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '회오리불꽃', type: PokemonElementType.fire, power: 35, description: '세차게 소용돌이치는 불꽃 속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '전광석화', type: PokemonElementType.normal, power: 40, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진한다. 반드시 선제공격할 수 있다.' },
      { name: '이상한빛', type: PokemonElementType.ghost, power: null, description: '이상한 빛을 상대에게 비춰 당황하게 한다. 상대를 혼란시킨다.' },
    ],
  },
  jigglypuff: {
    flavorText: '동그랗고 커다란 눈동자로 유인하고 기분 좋은 노래를 불러 상대방을 잠들게 한다.',
    stats: { hp: 115, attack: 45, defense: 20, specialAttack: 45, specialDefense: 25, speed: 20 },
    moves: [
      { name: '연속뺨치기', type: PokemonElementType.normal, power: 15, description: '연속 뺨치기로 상대를 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '노래하기', type: PokemonElementType.normal, power: null, description: '기분 좋은 예쁜 노랫소리를 들려주고 상대를 잠듦 상태로 만든다.' },
      { name: '막치기', type: PokemonElementType.normal, power: 40, description: '긴 꼬리나 손 등을 사용하여 상대를 때려서 공격한다.' },
      { name: '사슬묶기', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 막아 바로 전에 쓴 기술을 4턴 동안 사용할 수 없게 만든다.' },
    ],
  },
  wigglytuff: {
    flavorText: '2마리가 바싹 붙어 있으면 서로의 털이 너무 기분 좋아서 떨어지지 않게 되어버린다.',
    stats: { hp: 140, attack: 70, defense: 45, specialAttack: 85, specialDefense: 50, speed: 45 },
    moves: [
      { name: '연속뺨치기', type: PokemonElementType.normal, power: 15, description: '연속 뺨치기로 상대를 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '노래하기', type: PokemonElementType.normal, power: null, description: '기분 좋은 예쁜 노랫소리를 들려주고 상대를 잠듦 상태로 만든다.' },
      { name: '사슬묶기', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 막아 바로 전에 쓴 기술을 4턴 동안 사용할 수 없게 만든다.' },
      { name: '웅크리기', type: PokemonElementType.normal, power: null, description: '몸을 둥글게 웅크려서 자신의 방어를 올린다.' },
    ],
  },
  zubat: {
    flavorText: '입에서 내는 초음파로 두 눈이 없어도 주위의 장애물을 탐색할 수 있다.',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 30, specialDefense: 40, speed: 55 },
    moves: [
      { name: '맹독엄니', type: PokemonElementType.poison, power: 50, description: '독이 있는 이빨로 상대를 물어서 공격한다. 맹독을 주입할 때가 있다.' },
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '검은눈빛', type: PokemonElementType.normal, power: null, description: '빨려 들어갈 것 같은 까만 눈빛으로 가만히 응시하여 상대를 배틀에서 도망갈 수 없게 한다.' },
      { name: '초음파', type: PokemonElementType.normal, power: null, description: '특수한 음파를 몸에서 발산하여 상대를 혼란시킨다.' },
    ],
  },
  golbat: {
    flavorText: '물리면 끝이다. 죽을 정도로 피를 빨아들이기 때문에 무거워져서 날 수 없게 될 때도 있다.',
    stats: { hp: 75, attack: 80, defense: 70, specialAttack: 65, specialDefense: 75, speed: 90 },
    moves: [
      { name: '맹독엄니', type: PokemonElementType.poison, power: 50, description: '독이 있는 이빨로 상대를 물어서 공격한다. 맹독을 주입할 때가 있다.' },
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '검은눈빛', type: PokemonElementType.normal, power: null, description: '빨려 들어갈 것 같은 까만 눈빛으로 가만히 응시하여 상대를 배틀에서 도망갈 수 없게 한다.' },
      { name: '초음파', type: PokemonElementType.normal, power: null, description: '특수한 음파를 몸에서 발산하여 상대를 혼란시킨다.' },
    ],
  },
  oddish: {
    flavorText: '낮에는 태양을 피하려고 차가운 땅속에 들어가 있다. 달빛을 쬐어 성장한다.',
    stats: { hp: 45, attack: 50, defense: 55, specialAttack: 75, specialDefense: 65, speed: 30 },
    moves: [
      { name: '꽃잎댄스', type: PokemonElementType.grass, power: 120, description: '2-3턴 동안 꽃을 흩뿌려서 상대를 공격한다. 흩뿌린 뒤에는 혼란에 빠진다.' },
      { name: '달빛', type: PokemonElementType.normal, power: null, description: '자신의 HP를 회복한다. 날씨에 따라 회복량이 변한다.' },
      { name: '용해액', type: PokemonElementType.poison, power: 40, description: '강한 산을 상대에게 끼얹어 공격한다. 상대의 특수방어를 떨어뜨릴 때가 있다.' },
      { name: '수면가루', type: PokemonElementType.grass, power: null, description: '잠이 오는 가루를 많이 흩뿌려서 상대를 잠듦 상태로 만든다.' },
    ],
  },
  gloom: {
    flavorText: '강렬한 악취가 난다! 그럼에도 불구하고 1000명에 한 명 정도 이 냄새를 즐겨 맡는 사람이 있다.',
    stats: { hp: 60, attack: 65, defense: 70, specialAttack: 85, specialDefense: 75, speed: 40 },
    moves: [
      { name: '꽃잎댄스', type: PokemonElementType.grass, power: 120, description: '2-3턴 동안 꽃을 흩뿌려서 상대를 공격한다. 흩뿌린 뒤에는 혼란에 빠진다.' },
      { name: '달빛', type: PokemonElementType.normal, power: null, description: '자신의 HP를 회복한다. 날씨에 따라 회복량이 변한다.' },
      { name: '용해액', type: PokemonElementType.poison, power: 40, description: '강한 산을 상대에게 끼얹어 공격한다. 상대의 특수방어를 떨어뜨릴 때가 있다.' },
      { name: '수면가루', type: PokemonElementType.grass, power: null, description: '잠이 오는 가루를 많이 흩뿌려서 상대를 잠듦 상태로 만든다.' },
    ],
  },
  vileplume: {
    flavorText: '꽃잎이 클수록 많은 꽃가루를 만들어 내지만 머리가 무거워서 지쳐버린다고 한다.',
    stats: { hp: 75, attack: 80, defense: 85, specialAttack: 110, specialDefense: 90, speed: 50 },
    moves: [
      { name: '꽃잎댄스', type: PokemonElementType.grass, power: 120, description: '2-3턴 동안 꽃을 흩뿌려서 상대를 공격한다. 흩뿌린 뒤에는 혼란에 빠진다.' },
      { name: '아로마테라피', type: PokemonElementType.grass, power: null, description: '기분 좋은 평온한 향기를 맡게 하여 같은 편 모두의 상태 이상을 회복한다.' },
      { name: '저리가루', type: PokemonElementType.grass, power: null, description: '저리 가루를 많이 흩뿌려서 상대를 마비 상태로 만든다.' },
      { name: '흡수', type: PokemonElementType.grass, power: 20, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
    ],
  },
  paras: {
    flavorText: '벌레의 등에 돋아나 있는 것은 동충하초라는 버섯이다. 성장하면 버섯도 커진다.',
    stats: { hp: 35, attack: 70, defense: 55, specialAttack: 45, specialDefense: 55, speed: 25 },
    moves: [
      { name: '버섯포자', type: PokemonElementType.grass, power: null, description: '최면 효과가 있는 포자를 훌훌 흩뿌려서 상대를 잠듦 상태로 만든다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
      { name: '아로마테라피', type: PokemonElementType.grass, power: null, description: '기분 좋은 평온한 향기를 맡게 하여 같은 편 모두의 상태 이상을 회복한다.' },
      { name: '저리가루', type: PokemonElementType.grass, power: null, description: '저리 가루를 많이 흩뿌려서 상대를 마비 상태로 만든다.' },
    ],
  },
  parasect: {
    flavorText: '몸보다 큰 버섯이 파라섹트를 조종하고 있다. 독 포자를 여기저기 뿌린다.',
    stats: { hp: 60, attack: 95, defense: 80, specialAttack: 60, specialDefense: 80, speed: 30 },
    moves: [
      { name: '버섯포자', type: PokemonElementType.grass, power: null, description: '최면 효과가 있는 포자를 훌훌 흩뿌려서 상대를 잠듦 상태로 만든다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
      { name: '아로마테라피', type: PokemonElementType.grass, power: null, description: '기분 좋은 평온한 향기를 맡게 하여 같은 편 모두의 상태 이상을 회복한다.' },
      { name: '저리가루', type: PokemonElementType.grass, power: null, description: '저리 가루를 많이 흩뿌려서 상대를 마비 상태로 만든다.' },
    ],
  },
  venonat: {
    flavorText: '작은 눈이 많이 모여 큰 눈을 이루고 있다. 밤이 되면 불빛을 향해 모여든다.',
    stats: { hp: 60, attack: 55, defense: 50, specialAttack: 40, specialDefense: 55, speed: 45 },
    moves: [
      { name: '수면가루', type: PokemonElementType.grass, power: null, description: '잠이 오는 가루를 많이 흩뿌려서 상대를 잠듦 상태로 만든다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
      { name: '저리가루', type: PokemonElementType.grass, power: null, description: '저리 가루를 많이 흩뿌려서 상대를 마비 상태로 만든다.' },
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
    ],
  },
  venomoth: {
    flavorText: '흩뿌려진 날개 가루에 닿으면 몸의 감각이 이상해져서 똑바로 서 있을 수 없게 된다.',
    stats: { hp: 70, attack: 65, defense: 60, specialAttack: 90, specialDefense: 75, speed: 90 },
    moves: [
      { name: '수면가루', type: PokemonElementType.grass, power: null, description: '잠이 오는 가루를 많이 흩뿌려서 상대를 잠듦 상태로 만든다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
      { name: '은빛바람', type: PokemonElementType.bug, power: 60, description: '바람에 날개 가루를 날려서 상대를 공격한다. 자신의 모든 능력이 올라갈 때가 있다.' },
      { name: '저리가루', type: PokemonElementType.grass, power: null, description: '저리 가루를 많이 흩뿌려서 상대를 마비 상태로 만든다.' },
    ],
  },
  diglett: {
    flavorText: '지하 1m 정도를 파고들어 가서 나무뿌리 등을 씹어 먹고 산다. 가끔 지상으로 얼굴을 내민다.',
    stats: { hp: 10, attack: 55, defense: 25, specialAttack: 35, specialDefense: 45, speed: 95 },
    moves: [
      { name: '매그니튜드', type: PokemonElementType.ground, power: null, description: '땅을 흔들어서 자신의 주위에 있는 포켓몬을 공격한다. 기술의 위력이 여러모로 바뀐다.' },
      { name: '땅가르기', type: PokemonElementType.ground, power: null, description: '땅이 갈라진 곳에 상대를 떨어뜨려 공격한다. 맞으면 일격에 기절한다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
    ],
  },
  dugtrio: {
    flavorText: '땅속을 파고들어 가 상대가 방심하고 있을 때 다른 곳에서 공격한다.',
    stats: { hp: 35, attack: 100, defense: 50, specialAttack: 50, specialDefense: 70, speed: 120 },
    moves: [
      { name: '매그니튜드', type: PokemonElementType.ground, power: null, description: '땅을 흔들어서 자신의 주위에 있는 포켓몬을 공격한다. 기술의 위력이 여러모로 바뀐다.' },
      { name: '트라이어택', type: PokemonElementType.normal, power: 80, description: '3개의 광선으로 공격한다. 마비, 화상 또는 얼음 상태 중 어느 하나로 만들 때가 있다.' },
      { name: '땅가르기', type: PokemonElementType.ground, power: null, description: '땅이 갈라진 곳에 상대를 떨어뜨려 공격한다. 맞으면 일격에 기절한다.' },
      { name: '모래지옥', type: PokemonElementType.ground, power: 35, description: '세차게 불어대는 모래바람 속에 4-5턴 동안 상대를 가두어 공격한다.' },
    ],
  },
  meowth: {
    flavorText: '한밤중에 움직이는 습성이 있다. 반짝반짝 빛나는 것을 발견하면 그에 못지않게 눈동자가 반짝인다.',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 40, specialDefense: 40, speed: 90 },
    moves: [
      { name: '고양이돈받기', type: PokemonElementType.normal, power: 40, description: '상대의 몸에 돈을 세게 던져서 공격한다. 배틀 후에 돈을 받을 수 있다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '속이기', type: PokemonElementType.normal, power: 40, description: '선제공격으로 상대를 풀죽게 한다. 배틀에 나가서 바로 쓰지 않으면 성공할 수 없다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
    ],
  },
  persian: {
    flavorText: '털의 결이 아름다워 애완용으로 기르려는 사람이 많지만, 곧잘 할퀴려 들기 때문에 쉽지 않다.',
    stats: { hp: 65, attack: 70, defense: 60, specialAttack: 65, specialDefense: 65, speed: 115 },
    moves: [
      { name: '고양이돈받기', type: PokemonElementType.normal, power: 40, description: '상대의 몸에 돈을 세게 던져서 공격한다. 배틀 후에 돈을 받을 수 있다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '속이기', type: PokemonElementType.normal, power: 40, description: '선제공격으로 상대를 풀죽게 한다. 배틀에 나가서 바로 쓰지 않으면 성공할 수 없다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
    ],
  },
  psyduck: {
    flavorText: '항상 두통에 시달리고 있다. 이 두통이 심해지면 이상한 힘을 쓰기 시작한다.',
    stats: { hp: 50, attack: 52, defense: 48, specialAttack: 65, specialDefense: 50, speed: 55 },
    moves: [
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
      { name: '사슬묶기', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 막아 바로 전에 쓴 기술을 4턴 동안 사용할 수 없게 만든다.' },
    ],
  },
  golduck: {
    flavorText: '해 질 무렵 강가에 모습을 나타낸다. 이마가 이상하게 빛날 때 신통력을 발휘한다고 전해진다.',
    stats: { hp: 80, attack: 82, defense: 78, specialAttack: 95, specialDefense: 80, speed: 85 },
    moves: [
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
      { name: '사슬묶기', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 막아 바로 전에 쓴 기술을 4턴 동안 사용할 수 없게 만든다.' },
    ],
  },
  mankey: {
    flavorText: '이유 없이 화내고 날뛰기 시작하면 동료도 구별하지 못하기 때문에 가까이 가는 것은 매우 위험하다.',
    stats: { hp: 40, attack: 80, defense: 35, specialAttack: 35, specialDefense: 45, speed: 70 },
    moves: [
      { name: '태권당수', type: PokemonElementType.fighting, power: 50, description: '날카로운 당수로 상대를 때려서 공격한다. 급소에 맞기 쉽다.' },
      { name: '크로스촙', type: PokemonElementType.fighting, power: 100, description: '양손으로 당수를 상대에게 힘껏 쳐서 공격한다. 급소에 맞기 쉽다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
    ],
  },
  primeape: {
    flavorText: '주위에 아무도 없을 때만은 화를 내지 않고 있다. 그러나 그 모습을 보기가 어렵다.',
    stats: { hp: 65, attack: 105, defense: 60, specialAttack: 60, specialDefense: 70, speed: 95 },
    moves: [
      { name: '태권당수', type: PokemonElementType.fighting, power: 50, description: '날카로운 당수로 상대를 때려서 공격한다. 급소에 맞기 쉽다.' },
      { name: '크로스촙', type: PokemonElementType.fighting, power: 100, description: '양손으로 당수를 상대에게 힘껏 쳐서 공격한다. 급소에 맞기 쉽다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
    ],
  },
  growlithe: {
    flavorText: '사람을 잘 따르는 충실한 성격이다. 적에게는 짖거나 물며 쫓아내려고 한다.',
    stats: { hp: 55, attack: 70, defense: 45, specialAttack: 70, specialDefense: 50, speed: 60 },
    moves: [
      { name: '화염바퀴', type: PokemonElementType.fire, power: 60, description: '불꽃을 둘러 상대에게 돌진하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '화염방사', type: PokemonElementType.fire, power: 90, description: '세찬 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
    ],
  },
  arcanine: {
    flavorText: '옛날부터 많은 사람의 마음을 사로잡은 아름다운 포켓몬이다. 날듯이 경쾌하게 달린다.',
    stats: { hp: 90, attack: 110, defense: 80, specialAttack: 100, specialDefense: 80, speed: 95 },
    moves: [
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '물기', type: PokemonElementType.dark, power: 60, description: '날카롭고 뾰족한 이빨로 물어서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  poliwag: {
    flavorText: '매끄럽고 검은 피부는 얇고 축축하다. 내장 일부가 비쳐서 소용돌이 모양으로 보인다.',
    stats: { hp: 40, attack: 50, defense: 40, specialAttack: 40, specialDefense: 40, speed: 90 },
    moves: [
      { name: '연속뺨치기', type: PokemonElementType.normal, power: 15, description: '연속 뺨치기로 상대를 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '배북', type: PokemonElementType.normal, power: null, description: '자신의 HP를 최대 HP의 절반만큼 감소시켜 자신의 공격을 최대로 올린다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
    ],
  },
  poliwhirl: {
    flavorText: '육지에서도 수중에서도 살 수 있다. 지상에서는 항상 땀을 흘려서 피부를 미끌미끌하게 하고 있다.',
    stats: { hp: 65, attack: 65, defense: 65, specialAttack: 50, specialDefense: 50, speed: 90 },
    moves: [
      { name: '연속뺨치기', type: PokemonElementType.normal, power: 15, description: '연속 뺨치기로 상대를 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '배북', type: PokemonElementType.normal, power: null, description: '자신의 HP를 최대 HP의 절반만큼 감소시켜 자신의 공격을 최대로 올린다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
    ],
  },
  poliwrath: {
    flavorText: '강인한 근육을 가지고 있다. 태평양을 쉬지 않고 계속 헤엄칠 수 있다.',
    stats: { hp: 90, attack: 95, defense: 95, specialAttack: 70, specialDefense: 90, speed: 70 },
    moves: [
      { name: '마음의눈', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 마음으로 읽고 다음 공격이 반드시 상대에게 명중되게 한다.' },
      { name: '연속뺨치기', type: PokemonElementType.normal, power: 15, description: '연속 뺨치기로 상대를 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '지옥의바퀴', type: PokemonElementType.fighting, power: 80, description: '땅에 자신과 함께 상대를 내던져 공격한다. 자신도 조금 데미지를 입는다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
    ],
  },
  abra: {
    flavorText: '하루에 18시간은 자고 있다. 자는 동안에도 다양한 초능력을 사용한다.',
    stats: { hp: 25, attack: 20, defense: 15, specialAttack: 105, specialDefense: 55, speed: 90 },
    moves: [
      { name: '순간이동', type: PokemonElementType.psychic, power: null, description: '야생 포켓몬과 배틀을 그만둔다. 마지막에 들어갔던 포켓몬센터가 있는 도시에도 갈 수 있다.' },
    ],
  },
  kadabra: {
    flavorText: '초능력을 발휘하면 강한 알파파를 내어 정밀 기계를 고장 내 버린다.',
    stats: { hp: 40, attack: 35, defense: 30, specialAttack: 120, specialDefense: 70, speed: 105 },
    moves: [
      { name: '숟가락휘기', type: PokemonElementType.psychic, power: null, description: '숟가락을 휘어서 주의를 끌어 상대의 명중률을 낮춘다.' },
      { name: '순간이동', type: PokemonElementType.psychic, power: null, description: '야생 포켓몬과 배틀을 그만둔다. 마지막에 들어갔던 포켓몬센터가 있는 도시에도 갈 수 있다.' },
      { name: 'HP회복', type: PokemonElementType.normal, power: null, description: '세포를 재생시켜 자신의 최대 HP의 절반만큼 HP를 회복한다.' },
      { name: '사슬묶기', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 막아 바로 전에 쓴 기술을 4턴 동안 사용할 수 없게 만든다.' },
    ],
  },
  alakazam: {
    flavorText: '뇌세포는 항상 분열해서 죽을 때까지 늘어나기 때문에 모든 것을 기억해 놓을 수 있다.',
    stats: { hp: 55, attack: 50, defense: 45, specialAttack: 135, specialDefense: 95, speed: 120 },
    moves: [
      { name: '숟가락휘기', type: PokemonElementType.psychic, power: null, description: '숟가락을 휘어서 주의를 끌어 상대의 명중률을 낮춘다.' },
      { name: '순간이동', type: PokemonElementType.psychic, power: null, description: '야생 포켓몬과 배틀을 그만둔다. 마지막에 들어갔던 포켓몬센터가 있는 도시에도 갈 수 있다.' },
      { name: 'HP회복', type: PokemonElementType.normal, power: null, description: '세포를 재생시켜 자신의 최대 HP의 절반만큼 HP를 회복한다.' },
      { name: '사슬묶기', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 막아 바로 전에 쓴 기술을 4턴 동안 사용할 수 없게 만든다.' },
    ],
  },
  machop: {
    flavorText: '데구리를 수없이 들었다 놨다 하며 전신의 근육을 단련한다. 모든 격투기를 사용한다.',
    stats: { hp: 70, attack: 80, defense: 50, specialAttack: 35, specialDefense: 35, speed: 35 },
    moves: [
      { name: '태권당수', type: PokemonElementType.fighting, power: 50, description: '날카로운 당수로 상대를 때려서 공격한다. 급소에 맞기 쉽다.' },
      { name: '받아던지기', type: PokemonElementType.fighting, power: 70, description: '상대보다 나중에 공격한다. 그 대신 자신의 공격은 반드시 명중한다.' },
      { name: '크로스촙', type: PokemonElementType.fighting, power: 100, description: '양손으로 당수를 상대에게 힘껏 쳐서 공격한다. 급소에 맞기 쉽다.' },
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
    ],
  },
  machoke: {
    flavorText: '엄청나게 강한 육체를 지녔기 때문에 파워 세이브 벨트를 차서 힘을 제어하고 있다.',
    stats: { hp: 80, attack: 100, defense: 70, specialAttack: 50, specialDefense: 60, speed: 45 },
    moves: [
      { name: '태권당수', type: PokemonElementType.fighting, power: 50, description: '날카로운 당수로 상대를 때려서 공격한다. 급소에 맞기 쉽다.' },
      { name: '받아던지기', type: PokemonElementType.fighting, power: 70, description: '상대보다 나중에 공격한다. 그 대신 자신의 공격은 반드시 명중한다.' },
      { name: '크로스촙', type: PokemonElementType.fighting, power: 100, description: '양손으로 당수를 상대에게 힘껏 쳐서 공격한다. 급소에 맞기 쉽다.' },
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
    ],
  },
  machamp: {
    flavorText: '발달한 4개의 팔은 2초 동안 1000번의 펀치를 날릴 수 있다.',
    stats: { hp: 90, attack: 130, defense: 80, specialAttack: 65, specialDefense: 85, speed: 55 },
    moves: [
      { name: '태권당수', type: PokemonElementType.fighting, power: 50, description: '날카로운 당수로 상대를 때려서 공격한다. 급소에 맞기 쉽다.' },
      { name: '받아던지기', type: PokemonElementType.fighting, power: 70, description: '상대보다 나중에 공격한다. 그 대신 자신의 공격은 반드시 명중한다.' },
      { name: '크로스촙', type: PokemonElementType.fighting, power: 100, description: '양손으로 당수를 상대에게 힘껏 쳐서 공격한다. 급소에 맞기 쉽다.' },
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
    ],
  },
  bellsprout: {
    flavorText: '홀쭉한 체격이지만 먹이를 잡을 때의 움직임은 눈에 보이지 않을 정도로 빠르다.',
    stats: { hp: 50, attack: 75, defense: 35, specialAttack: 70, specialDefense: 30, speed: 40 },
    moves: [
      { name: '덩굴채찍', type: PokemonElementType.grass, power: 45, description: '채찍처럼 휘어지는 가늘고 긴 덩굴로 상대를 힘껏 쳐서 공격한다.' },
      { name: '용해액', type: PokemonElementType.poison, power: 40, description: '강한 산을 상대에게 끼얹어 공격한다. 상대의 특수방어를 떨어뜨릴 때가 있다.' },
      { name: '수면가루', type: PokemonElementType.grass, power: null, description: '잠이 오는 가루를 많이 흩뿌려서 상대를 잠듦 상태로 만든다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
    ],
  },
  weepinbell: {
    flavorText: '잎사귀 부분은 칼날이 되어 상대를 베어버린다. 입에서는 무엇이든 녹이는 액체를 뿜어낸다.',
    stats: { hp: 65, attack: 90, defense: 50, specialAttack: 85, specialDefense: 45, speed: 55 },
    moves: [
      { name: '덩굴채찍', type: PokemonElementType.grass, power: 45, description: '채찍처럼 휘어지는 가늘고 긴 덩굴로 상대를 힘껏 쳐서 공격한다.' },
      { name: '용해액', type: PokemonElementType.poison, power: 40, description: '강한 산을 상대에게 끼얹어 공격한다. 상대의 특수방어를 떨어뜨릴 때가 있다.' },
      { name: '수면가루', type: PokemonElementType.grass, power: null, description: '잠이 오는 가루를 많이 흩뿌려서 상대를 잠듦 상태로 만든다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
    ],
  },
  victreebel: {
    flavorText: '정글의 안쪽에 우츠보트만 있는 지대가 있어서 한 번 가면 두 번 다시 돌아올 수 없다.',
    stats: { hp: 80, attack: 105, defense: 65, specialAttack: 100, specialDefense: 70, speed: 70 },
    moves: [
      { name: '덩굴채찍', type: PokemonElementType.grass, power: 45, description: '채찍처럼 휘어지는 가늘고 긴 덩굴로 상대를 힘껏 쳐서 공격한다.' },
      { name: '수면가루', type: PokemonElementType.grass, power: null, description: '잠이 오는 가루를 많이 흩뿌려서 상대를 잠듦 상태로 만든다.' },
      { name: '토해내기', type: PokemonElementType.normal, power: null, description: '비축된 힘을 상대에게 부딪쳐서 공격한다. 비축된 만큼 위력이 올라간다.' },
      { name: '꿀꺽', type: PokemonElementType.normal, power: null, description: '비축된 힘을 꿀꺽해서 자신의 HP를 회복한다. 비축된 만큼 회복한다.' },
    ],
  },
  tentacool: {
    flavorText: '몸 대부분이 수분이다. 수정 같은 눈에서 이상한 빔을 발사한다.',
    stats: { hp: 40, attack: 40, defense: 35, specialAttack: 50, specialDefense: 100, speed: 70 },
    moves: [
      { name: '휘감기', type: PokemonElementType.normal, power: 10, description: '촉수나 덩굴 등을 휘감아서 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '배리어', type: PokemonElementType.psychic, power: null, description: '튼튼한 장막을 만들어 자신의 방어를 크게 올린다.' },
      { name: '용해액', type: PokemonElementType.poison, power: 40, description: '강한 산을 상대에게 끼얹어 공격한다. 상대의 특수방어를 떨어뜨릴 때가 있다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
    ],
  },
  tentacruel: {
    flavorText: '촉수는 평소에는 짧고 먹이를 찌를 때 길게 늘어나 휘감는다.',
    stats: { hp: 80, attack: 70, defense: 65, specialAttack: 80, specialDefense: 120, speed: 100 },
    moves: [
      { name: '휘감기', type: PokemonElementType.normal, power: 10, description: '촉수나 덩굴 등을 휘감아서 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '배리어', type: PokemonElementType.psychic, power: null, description: '튼튼한 장막을 만들어 자신의 방어를 크게 올린다.' },
      { name: '용해액', type: PokemonElementType.poison, power: 40, description: '강한 산을 상대에게 끼얹어 공격한다. 상대의 특수방어를 떨어뜨릴 때가 있다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
    ],
  },
  geodude: {
    flavorText: '초원이나 산에 서식한다. 돌멩이와 닮은 탓에 알아채지 못하고 밟거나 발이 걸려 넘어지기도 한다.',
    stats: { hp: 40, attack: 80, defense: 100, specialAttack: 30, specialDefense: 30, speed: 20 },
    moves: [
      { name: '매그니튜드', type: PokemonElementType.ground, power: null, description: '땅을 흔들어서 자신의 주위에 있는 포켓몬을 공격한다. 기술의 위력이 여러모로 바뀐다.' },
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: '돌떨구기', type: PokemonElementType.rock, power: 50, description: '작은 바위를 들어올려 상대에게 내던져서 공격한다.' },
      { name: '대폭발', type: PokemonElementType.normal, power: 250, description: '큰 폭발로 자신의 주위에 있는 포켓몬을 공격한다. 쓰고 나서는 기절한다.' },
    ],
  },
  graveler: {
    flavorText: '산에서 굴러 떨어질 때 몸의 여기저기가 부서져도 신경 쓰지 않는 호쾌한 성격이다.',
    stats: { hp: 55, attack: 95, defense: 115, specialAttack: 45, specialDefense: 45, speed: 35 },
    moves: [
      { name: '매그니튜드', type: PokemonElementType.ground, power: null, description: '땅을 흔들어서 자신의 주위에 있는 포켓몬을 공격한다. 기술의 위력이 여러모로 바뀐다.' },
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: '돌떨구기', type: PokemonElementType.rock, power: 50, description: '작은 바위를 들어올려 상대에게 내던져서 공격한다.' },
      { name: '대폭발', type: PokemonElementType.normal, power: 250, description: '큰 폭발로 자신의 주위에 있는 포켓몬을 공격한다. 쓰고 나서는 기절한다.' },
    ],
  },
  golem: {
    flavorText: '산 정상에서 산기슭까지 이어지는 움푹 패인 홈은 딱구리가 굴러 다니는 길이므로 주의가 필요하다.',
    stats: { hp: 80, attack: 120, defense: 130, specialAttack: 55, specialDefense: 65, speed: 45 },
    moves: [
      { name: '매그니튜드', type: PokemonElementType.ground, power: null, description: '땅을 흔들어서 자신의 주위에 있는 포켓몬을 공격한다. 기술의 위력이 여러모로 바뀐다.' },
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: '돌떨구기', type: PokemonElementType.rock, power: 50, description: '작은 바위를 들어올려 상대에게 내던져서 공격한다.' },
      { name: '대폭발', type: PokemonElementType.normal, power: 250, description: '큰 폭발로 자신의 주위에 있는 포켓몬을 공격한다. 쓰고 나서는 기절한다.' },
    ],
  },
  ponyta: {
    flavorText: '막 태어나서는 겨우 일어설 수 있을 정도이지만 많이 달리면 하반신이 단련되어 달리는 속도가 빨라진다.',
    stats: { hp: 50, attack: 85, defense: 55, specialAttack: 65, specialDefense: 65, speed: 90 },
    moves: [
      { name: '짓밟기', type: PokemonElementType.normal, power: 65, description: '큰 발로 상대를 짓밟아서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '회오리불꽃', type: PokemonElementType.fire, power: 35, description: '세차게 소용돌이치는 불꽃 속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '뛰어오르기', type: PokemonElementType.flying, power: 85, description: '하늘 높이 뛰어올라 2턴째에 상대를 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  rapidash: {
    flavorText: '빠르게 움직이는 물체를 보면 경주를 하고 싶어져서 맹렬한 스피드로 쫓아가기 시작한다.',
    stats: { hp: 65, attack: 100, defense: 70, specialAttack: 80, specialDefense: 80, speed: 105 },
    moves: [
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '짓밟기', type: PokemonElementType.normal, power: 65, description: '큰 발로 상대를 짓밟아서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '회오리불꽃', type: PokemonElementType.fire, power: 35, description: '세차게 소용돌이치는 불꽃 속에 4-5턴 동안 상대를 가두어 공격한다.' },
    ],
  },
  slowpoke: {
    flavorText: '항상 멍하니 있으므로 무슨 생각을 하고 있는지 알 수 없다. 꼬리로 먹이를 낚는 것이 특기다.',
    stats: { hp: 90, attack: 65, defense: 65, specialAttack: 40, specialDefense: 40, speed: 15 },
    moves: [
      { name: '하품', type: PokemonElementType.normal, power: null, description: '큰 하품으로 졸음을 유도한다. 다음 턴에 상대를 잠듦 상태로 만든다.' },
      { name: '사슬묶기', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 막아 바로 전에 쓴 기술을 4턴 동안 사용할 수 없게 만든다.' },
      { name: '염동력', type: PokemonElementType.psychic, power: 50, description: '약한 염동력을 상대에게 보내어 공격한다. 상대를 혼란시킬 때가 있다.' },
      { name: '망각술', type: PokemonElementType.psychic, power: null, description: '머리를 비워서 순간적으로 무언가를 잊어버림으로써 자신의 특수방어를 크게 올린다.' },
    ],
  },
  slowbro: {
    flavorText: '붙어 있는 셀러는 꼬리에서 배어 나오는 맛을 좋아해서 계속 떨어지지 않는다.',
    stats: { hp: 95, attack: 75, defense: 110, specialAttack: 100, specialDefense: 80, speed: 30 },
    moves: [
      { name: '껍질에숨기', type: PokemonElementType.water, power: null, description: '껍질에 숨어 몸을 보호하여 자신의 방어를 올린다.' },
      { name: '하품', type: PokemonElementType.normal, power: null, description: '큰 하품으로 졸음을 유도한다. 다음 턴에 상대를 잠듦 상태로 만든다.' },
      { name: '사슬묶기', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 막아 바로 전에 쓴 기술을 4턴 동안 사용할 수 없게 만든다.' },
      { name: '염동력', type: PokemonElementType.psychic, power: 50, description: '약한 염동력을 상대에게 보내어 공격한다. 상대를 혼란시킬 때가 있다.' },
    ],
  },
  magnemite: {
    flavorText: '좌우의 유닛에서 중력을 차단하는 힘을 발휘하기에 공중에 뜰 수 있다.',
    stats: { hp: 25, attack: 35, defense: 70, specialAttack: 95, specialDefense: 55, speed: 45 },
    moves: [
      { name: '소닉붐', type: PokemonElementType.normal, power: null, description: '충격파를 상대에 부딪쳐서 공격한다. 언제나 20의 데미지를 준다.' },
      { name: '록온', type: PokemonElementType.normal, power: null, description: '조준을 잘 맞춰 다음 공격이 반드시 상대에게 명중하도록 한다.' },
      { name: '스파크', type: PokemonElementType.electric, power: 65, description: '전기를 둘러 상대에게 돌진하여 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '초음파', type: PokemonElementType.normal, power: null, description: '특수한 음파를 몸에서 발산하여 상대를 혼란시킨다.' },
    ],
  },
  magneton: {
    flavorText: '다수의 코일이 연결되어 강력한 자기장과 높은 전압을 방사한다.',
    stats: { hp: 50, attack: 60, defense: 95, specialAttack: 120, specialDefense: 70, speed: 70 },
    moves: [
      { name: '소닉붐', type: PokemonElementType.normal, power: null, description: '충격파를 상대에 부딪쳐서 공격한다. 언제나 20의 데미지를 준다.' },
      { name: '록온', type: PokemonElementType.normal, power: null, description: '조준을 잘 맞춰 다음 공격이 반드시 상대에게 명중하도록 한다.' },
      { name: '트라이어택', type: PokemonElementType.normal, power: 80, description: '3개의 광선으로 공격한다. 마비, 화상 또는 얼음 상태 중 어느 하나로 만들 때가 있다.' },
      { name: '스파크', type: PokemonElementType.electric, power: 65, description: '전기를 둘러 상대에게 돌진하여 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  farfetchd: {
    flavorText: '가지고 있는 파 줄기는 소중한 무기이기도 하며 칼을 휘두르듯 다양한 것을 자를 수 있다.',
    stats: { hp: 52, attack: 90, defense: 55, specialAttack: 58, specialDefense: 62, speed: 60 },
    moves: [
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '쪼기', type: PokemonElementType.flying, power: 35, description: '날카롭고 뾰족한 부리나 뿔로 상대를 쪼아서 공격한다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
      { name: '칼등치기', type: PokemonElementType.normal, power: 40, description: '상대의 HP가 반드시 1만큼 남도록 조절하여 공격한다.' },
    ],
  },
  doduo: {
    flavorText: '돌연변이로 발견된 두 개의 머리를 지닌 포켓몬이다. 시속 100km로 달린다.',
    stats: { hp: 35, attack: 85, defense: 45, specialAttack: 35, specialDefense: 35, speed: 75 },
    moves: [
      { name: '회전부리', type: PokemonElementType.flying, power: 80, description: '회전하면서 뾰족한 부리를 상대에게 꿰찔러 공격한다.' },
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '트라이어택', type: PokemonElementType.normal, power: 80, description: '3개의 광선으로 공격한다. 마비, 화상 또는 얼음 상태 중 어느 하나로 만들 때가 있다.' },
      { name: '쪼기', type: PokemonElementType.flying, power: 35, description: '날카롭고 뾰족한 부리나 뿔로 상대를 쪼아서 공격한다.' },
    ],
  },
  dodrio: {
    flavorText: '3개의 머리가 보고 있는 앞에서 조금이라도 빈틈을 보이면 부리로 격렬하게 쪼아댄다.',
    stats: { hp: 60, attack: 110, defense: 70, specialAttack: 60, specialDefense: 60, speed: 110 },
    moves: [
      { name: '회전부리', type: PokemonElementType.flying, power: 80, description: '회전하면서 뾰족한 부리를 상대에게 꿰찔러 공격한다.' },
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '트라이어택', type: PokemonElementType.normal, power: 80, description: '3개의 광선으로 공격한다. 마비, 화상 또는 얼음 상태 중 어느 하나로 만들 때가 있다.' },
      { name: '쪼기', type: PokemonElementType.flying, power: 35, description: '날카롭고 뾰족한 부리나 뿔로 상대를 쪼아서 공격한다.' },
    ],
  },
  seel: {
    flavorText: '빙산에 사는 포켓몬이다. 머리의 뾰족하게 돌출된 부분으로 얼음을 깨고 바다를 헤엄친다.',
    stats: { hp: 65, attack: 45, defense: 55, specialAttack: 45, specialDefense: 70, speed: 45 },
    moves: [
      { name: '오로라빔', type: PokemonElementType.ice, power: 65, description: '무지개색의 빔을 상대에게 발사하여 공격한다. 공격을 떨어뜨릴 때가 있다.' },
      { name: '울음소리', type: PokemonElementType.normal, power: null, description: '귀여운 울음소리를 들려주고 관심을 끌어 방심한 사이에 상대의 공격을 떨어뜨린다.' },
      { name: '냉동빔', type: PokemonElementType.ice, power: 90, description: '냉동빔을 상대에게 발사하여 공격한다. 얼음 상태로 만들 때가 있다.' },
      { name: '신비의부적', type: PokemonElementType.normal, power: null, description: '5턴 동안 이상한 힘으로 보호받아 상태 이상이 되지 않는다.' },
    ],
  },
  dewgong: {
    flavorText: '전신이 새하얀 털로 뒤덮여 있다. 추위에 강해서 오히려 추울수록 힘이 넘쳐 난다.',
    stats: { hp: 90, attack: 70, defense: 80, specialAttack: 70, specialDefense: 95, speed: 70 },
    moves: [
      { name: '절대영도', type: PokemonElementType.ice, power: null, description: '절대영도의 추위로 상대를 공격한다. 맞으면 일격에 기절한다.' },
      { name: '오로라빔', type: PokemonElementType.ice, power: 65, description: '무지개색의 빔을 상대에게 발사하여 공격한다. 공격을 떨어뜨릴 때가 있다.' },
      { name: '울음소리', type: PokemonElementType.normal, power: null, description: '귀여운 울음소리를 들려주고 관심을 끌어 방심한 사이에 상대의 공격을 떨어뜨린다.' },
      { name: '시그널빔', type: PokemonElementType.bug, power: 75, description: '이상한 빛을 발사해서 공격한다. 상대를 혼란시킬 때가 있다.' },
    ],
  },
  grimer: {
    flavorText: '달로부터의 X선을 쬔 오물이 질퍽이로 변화했다. 더러운 것을 좋아한다.',
    stats: { hp: 80, attack: 80, defense: 50, specialAttack: 40, specialDefense: 50, speed: 25 },
    moves: [
      { name: '오물공격', type: PokemonElementType.poison, power: 65, description: '더러운 오물을 상대에게 내던져서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '작아지기', type: PokemonElementType.normal, power: null, description: '몸을 축소하여 작게 보임으로써 자신의 회피율을 크게 올린다.' },
      { name: '독가스', type: PokemonElementType.poison, power: null, description: '독가스를 상대의 얼굴에 내뿜어 독 상태로 만든다.' },
      { name: '녹기', type: PokemonElementType.poison, power: null, description: '세포의 변화로 액체가 되어 자신의 방어를 크게 올린다.' },
    ],
  },
  muk: {
    flavorText: '진흙이 쌓여 악취가 나는 장소를 좋아해서 모여들기 때문에 주변은 더욱 악취가 난다.',
    stats: { hp: 105, attack: 105, defense: 75, specialAttack: 65, specialDefense: 100, speed: 50 },
    moves: [
      { name: '오물공격', type: PokemonElementType.poison, power: 65, description: '더러운 오물을 상대에게 내던져서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '작아지기', type: PokemonElementType.normal, power: null, description: '몸을 축소하여 작게 보임으로써 자신의 회피율을 크게 올린다.' },
      { name: '독가스', type: PokemonElementType.poison, power: null, description: '독가스를 상대의 얼굴에 내뿜어 독 상태로 만든다.' },
      { name: '녹기', type: PokemonElementType.poison, power: null, description: '세포의 변화로 액체가 되어 자신의 방어를 크게 올린다.' },
    ],
  },
  shellder: {
    flavorText: '단단한 껍데기는 어떤 공격도 튕겨낸다. 껍데기를 벌리고 있을 때 안쪽을 공격당하는 것에는 약하다.',
    stats: { hp: 30, attack: 65, defense: 100, specialAttack: 45, specialDefense: 25, speed: 40 },
    moves: [
      { name: '껍질끼우기', type: PokemonElementType.water, power: 35, description: '매우 튼튼하고 두꺼운 껍질에 4-5턴 동안 상대를 끼워서 공격한다.' },
      { name: '오로라빔', type: PokemonElementType.ice, power: 65, description: '무지개색의 빔을 상대에게 발사하여 공격한다. 공격을 떨어뜨릴 때가 있다.' },
      { name: '껍질에숨기', type: PokemonElementType.water, power: null, description: '껍질에 숨어 몸을 보호하여 자신의 방어를 올린다.' },
      { name: '고드름침', type: PokemonElementType.ice, power: 25, description: '날카로운 고드름을 상대에게 발사하여 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  cloyster: {
    flavorText: '조수의 흐름이 격한 바다에 서식하고 있는 파르셀의 껍질의 가시는 크고 날카롭다.',
    stats: { hp: 50, attack: 95, defense: 180, specialAttack: 85, specialDefense: 45, speed: 70 },
    moves: [
      { name: '가시대포', type: PokemonElementType.normal, power: 20, description: '날카로운 침을 상대에게 발사해서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '오로라빔', type: PokemonElementType.ice, power: 65, description: '무지개색의 빔을 상대에게 발사하여 공격한다. 공격을 떨어뜨릴 때가 있다.' },
      { name: '껍질에숨기', type: PokemonElementType.water, power: null, description: '껍질에 숨어 몸을 보호하여 자신의 방어를 올린다.' },
      { name: '초음파', type: PokemonElementType.normal, power: null, description: '특수한 음파를 몸에서 발산하여 상대를 혼란시킨다.' },
    ],
  },
  gastly: {
    flavorText: '가스로 만들어진 몸은 어떠한 크기의 상대라도 둘러싸서 숨을 못 쉬게 한다.',
    stats: { hp: 30, attack: 35, defense: 30, specialAttack: 100, specialDefense: 35, speed: 80 },
    moves: [
      { name: '핥기', type: PokemonElementType.ghost, power: 30, description: '긴 혀로 상대를 핥아서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '검은눈빛', type: PokemonElementType.normal, power: null, description: '빨려 들어갈 것 같은 까만 눈빛으로 가만히 응시하여 상대를 배틀에서 도망갈 수 없게 한다.' },
      { name: '악몽', type: PokemonElementType.ghost, power: null, description: '잠듦 상태의 상대에게 악몽을 꾸게 하여 매 턴 조금씩 HP를 떨어뜨려 간다.' },
      { name: '길동무', type: PokemonElementType.ghost, power: null, description: '기술을 쓴 뒤 공격을 받아 기절했을 때 길동무의 대상도 기절하게 한다.' },
    ],
  },
  haunter: {
    flavorText: '어둠 속에서 아무도 없는데도 누군가가 보고 있다는 느낌이 들면 그곳에 고우스트가 있는 것이다.',
    stats: { hp: 45, attack: 50, defense: 45, specialAttack: 115, specialDefense: 55, speed: 95 },
    moves: [
      { name: '섀도펀치', type: PokemonElementType.ghost, power: 60, description: '그림자에 섞여 펀치를 날린다. 공격은 반드시 명중한다.' },
      { name: '핥기', type: PokemonElementType.ghost, power: 30, description: '긴 혀로 상대를 핥아서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '검은눈빛', type: PokemonElementType.normal, power: null, description: '빨려 들어갈 것 같은 까만 눈빛으로 가만히 응시하여 상대를 배틀에서 도망갈 수 없게 한다.' },
      { name: '악몽', type: PokemonElementType.ghost, power: null, description: '잠듦 상태의 상대에게 악몽을 꾸게 하여 매 턴 조금씩 HP를 떨어뜨려 간다.' },
    ],
  },
  gengar: {
    flavorText: '그림자에 모습을 숨긴다. 팬텀이 숨어 있는 방은 온도가 5도 내려간다고 전해진다.',
    stats: { hp: 60, attack: 65, defense: 60, specialAttack: 130, specialDefense: 75, speed: 110 },
    moves: [
      { name: '섀도펀치', type: PokemonElementType.ghost, power: 60, description: '그림자에 섞여 펀치를 날린다. 공격은 반드시 명중한다.' },
      { name: '핥기', type: PokemonElementType.ghost, power: 30, description: '긴 혀로 상대를 핥아서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '검은눈빛', type: PokemonElementType.normal, power: null, description: '빨려 들어갈 것 같은 까만 눈빛으로 가만히 응시하여 상대를 배틀에서 도망갈 수 없게 한다.' },
      { name: '악몽', type: PokemonElementType.ghost, power: null, description: '잠듦 상태의 상대에게 악몽을 꾸게 하여 매 턴 조금씩 HP를 떨어뜨려 간다.' },
    ],
  },
  onix: {
    flavorText: '땅속을 엄청난 기세로 뚫고 나아가며 먹이를 찾는다. 지나간 곳은 디그다의 보금자리가 된다.',
    stats: { hp: 35, attack: 45, defense: 160, specialAttack: 30, specialDefense: 45, speed: 70 },
    moves: [
      { name: '돌떨구기', type: PokemonElementType.rock, power: 50, description: '작은 바위를 들어올려 상대에게 내던져서 공격한다.' },
      { name: '조이기', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 써서 4-5턴 동안 상대를 조여 공격한다.' },
      { name: '용의숨결', type: PokemonElementType.dragon, power: 60, description: '굉장한 숨결을 상대에게 내뿜어 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '모래지옥', type: PokemonElementType.ground, power: 35, description: '세차게 불어대는 모래바람 속에 4-5턴 동안 상대를 가두어 공격한다.' },
    ],
  },
  drowzee: {
    flavorText: '잠들게 한 뒤 꿈을 먹지만 나쁜 꿈만 먹고 있으면 배탈이 날 때도 있는 것 같다.',
    stats: { hp: 60, attack: 48, defense: 45, specialAttack: 43, specialDefense: 90, speed: 42 },
    moves: [
      { name: '요가포즈', type: PokemonElementType.psychic, power: null, description: '잠들어 있는 힘을 몸속에서 끌어내어 자신의 공격을 올린다.' },
      { name: '독가스', type: PokemonElementType.poison, power: null, description: '독가스를 상대의 얼굴에 내뿜어 독 상태로 만든다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
      { name: '막치기', type: PokemonElementType.normal, power: 40, description: '긴 꼬리나 손 등을 사용하여 상대를 때려서 공격한다.' },
    ],
  },
  hypno: {
    flavorText: '추 같은 것을 들고 다닌다. 어린아이에게 최면술을 걸어 어딘가로 데려가 버린 사건이 있었다.',
    stats: { hp: 85, attack: 73, defense: 70, specialAttack: 73, specialDefense: 115, speed: 67 },
    moves: [
      { name: '요가포즈', type: PokemonElementType.psychic, power: null, description: '잠들어 있는 힘을 몸속에서 끌어내어 자신의 공격을 올린다.' },
      { name: '독가스', type: PokemonElementType.poison, power: null, description: '독가스를 상대의 얼굴에 내뿜어 독 상태로 만든다.' },
      { name: '악몽', type: PokemonElementType.ghost, power: null, description: '잠듦 상태의 상대에게 악몽을 꾸게 하여 매 턴 조금씩 HP를 떨어뜨려 간다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
    ],
  },
  krabby: {
    flavorText: '위험이 닥치면 입에서 뿜어내는 거품으로 전신을 감싸서 몸을 크게 보이려고 한다.',
    stats: { hp: 30, attack: 105, defense: 90, specialAttack: 25, specialDefense: 25, speed: 50 },
    moves: [
      { name: '집게해머', type: PokemonElementType.water, power: 100, description: '큰 집게를 상대에게 내리쳐서 공격한다. 급소에 맞기 쉽다.' },
      { name: '가위자르기', type: PokemonElementType.normal, power: null, description: '큰 집게로 상대를 베어 갈라 공격한다. 맞으면 일격에 기절한다.' },
      { name: '찝기', type: PokemonElementType.normal, power: 55, description: '상대를 양쪽에서 집어서 데미지를 준다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
    ],
  },
  kingler: {
    flavorText: '단단한 집게는 1만 마력의 파워를 지녔지만 너무 커서 움직임이 둔하다.',
    stats: { hp: 55, attack: 130, defense: 115, specialAttack: 50, specialDefense: 50, speed: 75 },
    moves: [
      { name: '집게해머', type: PokemonElementType.water, power: 100, description: '큰 집게를 상대에게 내리쳐서 공격한다. 급소에 맞기 쉽다.' },
      { name: '가위자르기', type: PokemonElementType.normal, power: null, description: '큰 집게로 상대를 베어 갈라 공격한다. 맞으면 일격에 기절한다.' },
      { name: '찝기', type: PokemonElementType.normal, power: 55, description: '상대를 양쪽에서 집어서 데미지를 준다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
    ],
  },
  voltorb: {
    flavorText: '몬스터볼이 팔리기 시작했을 때와 같은 시기에 발견되었다. 뭔가 관계가 있다고 전해진다.',
    stats: { hp: 40, attack: 30, defense: 50, specialAttack: 55, specialDefense: 55, speed: 100 },
    moves: [
      { name: '소닉붐', type: PokemonElementType.normal, power: null, description: '충격파를 상대에 부딪쳐서 공격한다. 언제나 20의 데미지를 준다.' },
      { name: '미러코트', type: PokemonElementType.psychic, power: null, description: '상대에게 받은 특수공격의 데미지를 2배로 만들어 그 상대에게 돌려준다.' },
      { name: '스파크', type: PokemonElementType.electric, power: 65, description: '전기를 둘러 상대에게 돌진하여 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
    ],
  },
  electrode: {
    flavorText: '작은 자극에도 반응해서 폭발한다. 폭탄볼이라 불리며 두려움의 대상이 되고 있다.',
    stats: { hp: 60, attack: 50, defense: 70, specialAttack: 80, specialDefense: 80, speed: 150 },
    moves: [
      { name: '소닉붐', type: PokemonElementType.normal, power: null, description: '충격파를 상대에 부딪쳐서 공격한다. 언제나 20의 데미지를 준다.' },
      { name: '미러코트', type: PokemonElementType.psychic, power: null, description: '상대에게 받은 특수공격의 데미지를 2배로 만들어 그 상대에게 돌려준다.' },
      { name: '스파크', type: PokemonElementType.electric, power: 65, description: '전기를 둘러 상대에게 돌진하여 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
    ],
  },
  exeggcute: {
    flavorText: '텔레파시로 대화를 하기 때문에 아라리를 갈라놓으려 해도 바로 모여들어 6마리가 된다.',
    stats: { hp: 60, attack: 40, defense: 80, specialAttack: 60, specialDefense: 45, speed: 40 },
    moves: [
      { name: '구슬던지기', type: PokemonElementType.normal, power: 15, description: '둥근 것을 상대에게 내던져서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '수면가루', type: PokemonElementType.grass, power: null, description: '잠이 오는 가루를 많이 흩뿌려서 상대를 잠듦 상태로 만든다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
      { name: '저리가루', type: PokemonElementType.grass, power: null, description: '저리 가루를 많이 흩뿌려서 상대를 마비 상태로 만든다.' },
    ],
  },
  exeggutor: {
    flavorText: '3개의 머리는 생각하는 것이 각각 다르지만 사이가 좋아서 싸우지 않는 것 같다.',
    stats: { hp: 95, attack: 95, defense: 85, specialAttack: 125, specialDefense: 75, speed: 55 },
    moves: [
      { name: '구슬던지기', type: PokemonElementType.normal, power: 15, description: '둥근 것을 상대에게 내던져서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '알폭탄', type: PokemonElementType.normal, power: 100, description: '큰 알을 온 힘을 다해 상대에게 내던져서 공격한다.' },
      { name: '짓밟기', type: PokemonElementType.normal, power: 65, description: '큰 발로 상대를 짓밟아서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
    ],
  },
  cubone: {
    flavorText: '죽은 어미의 해골을 머리에 쓰고 있다. 외로울 때는 큰 소리로 운다고 한다.',
    stats: { hp: 50, attack: 50, defense: 95, specialAttack: 40, specialDefense: 50, speed: 35 },
    moves: [
      { name: '뼈다귀부메랑', type: PokemonElementType.ground, power: 50, description: '손에 들고 있는 뼈를 상대에게 날려서 날아갈 때와 돌아올 때 2회 연속 데미지를 준다.' },
      { name: '뼈다귀치기', type: PokemonElementType.ground, power: 65, description: '손에 들고 있는 뼈로 상대를 세게 때려서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '본러시', type: PokemonElementType.ground, power: 25, description: '단단한 뼈로 상대를 세게 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '난동부리기', type: PokemonElementType.normal, power: 120, description: '2-3턴 동안 마구 난동 부려서 상대를 공격한다. 난동 부린 뒤에는 혼란에 빠진다.' },
    ],
  },
  marowak: {
    flavorText: '몸집도 작으며 원래는 약했다. 뼈를 쓰기 시작하면서 성격이 흉포해졌다.',
    stats: { hp: 60, attack: 80, defense: 110, specialAttack: 50, specialDefense: 80, speed: 45 },
    moves: [
      { name: '뼈다귀부메랑', type: PokemonElementType.ground, power: 50, description: '손에 들고 있는 뼈를 상대에게 날려서 날아갈 때와 돌아올 때 2회 연속 데미지를 준다.' },
      { name: '뼈다귀치기', type: PokemonElementType.ground, power: 65, description: '손에 들고 있는 뼈로 상대를 세게 때려서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '본러시', type: PokemonElementType.ground, power: 25, description: '단단한 뼈로 상대를 세게 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '난동부리기', type: PokemonElementType.normal, power: 120, description: '2-3턴 동안 마구 난동 부려서 상대를 공격한다. 난동 부린 뒤에는 혼란에 빠진다.' },
    ],
  },
  hitmonlee: {
    flavorText: '다리를 자유자재로 늘였다 줄였다 한다. 멀리 떨어져 있을 때도 상대를 차올릴 수 있다.',
    stats: { hp: 50, attack: 120, defense: 53, specialAttack: 35, specialDefense: 110, speed: 87 },
    moves: [
      { name: '돌려차기', type: PokemonElementType.fighting, power: 60, description: '몸을 재빨리 회전시키며 걷어차서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '점프킥', type: PokemonElementType.fighting, power: 100, description: '높이 점프해서 킥으로 상대를 공격한다. 빗나가면 자신이 데미지를 입는다.' },
      { name: '요가포즈', type: PokemonElementType.psychic, power: null, description: '잠들어 있는 힘을 몸속에서 끌어내어 자신의 공격을 올린다.' },
      { name: '마음의눈', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 마음으로 읽고 다음 공격이 반드시 상대에게 명중되게 한다.' },
    ],
  },
  hitmonchan: {
    flavorText: '팔을 비틀며 날리는 펀치는 콘크리트도 부스러뜨린다. 3분 싸우면 잠시 쉰다.',
    stats: { hp: 50, attack: 105, defense: 79, specialAttack: 35, specialDefense: 110, speed: 76 },
    moves: [
      { name: '연속펀치', type: PokemonElementType.normal, power: 18, description: '노도 같은 펀치로 상대를 세게 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '스카이어퍼', type: PokemonElementType.fighting, power: 85, description: '하늘을 향하는 듯한 높은 업퍼로 상대를 밀어올려 공격한다.' },
      { name: '마하펀치', type: PokemonElementType.fighting, power: 40, description: '눈에 보이지 않는 굉장한 속도로 펀치를 날린다. 반드시 선제공격을 할 수 있다.' },
      { name: '따라가때리기', type: PokemonElementType.dark, power: 40, description: '상대 포켓몬이 교체될 때 기술을 쓰면 2배의 위력으로 공격할 수 있다.' },
    ],
  },
  lickitung: {
    flavorText: '긴 혀는 끈적끈적한 침으로 덮여 있다. 어떤 것이든 달라붙어서 매우 편리하다.',
    stats: { hp: 90, attack: 55, defense: 75, specialAttack: 60, specialDefense: 75, speed: 30 },
    moves: [
      { name: '김밥말이', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 사용해 4-5턴 동안 상대를 휘감아 공격한다.' },
      { name: '핥기', type: PokemonElementType.ghost, power: 30, description: '긴 혀로 상대를 핥아서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '리프레시', type: PokemonElementType.normal, power: null, description: '몸을 쉬게 하여 자신이 입은 독, 마비, 화상의 상태 이상을 치료한다.' },
      { name: '짓밟기', type: PokemonElementType.normal, power: 65, description: '큰 발로 상대를 짓밟아서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  koffing: {
    flavorText: '얇고 풍선 같은 몸에 맹독 가스가 차있다. 가까이 오면 역겨운 냄새가 난다.',
    stats: { hp: 40, attack: 65, defense: 95, specialAttack: 60, specialDefense: 45, speed: 35 },
    moves: [
      { name: '오물공격', type: PokemonElementType.poison, power: 65, description: '더러운 오물을 상대에게 내던져서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '독가스', type: PokemonElementType.poison, power: null, description: '독가스를 상대의 얼굴에 내뿜어 독 상태로 만든다.' },
      { name: '스모그', type: PokemonElementType.poison, power: 30, description: '더러운 가스를 상대에게 내뿜어 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '연막', type: PokemonElementType.normal, power: null, description: '연기나 먹물을 내뿜어 상대의 명중률을 떨어뜨린다.' },
    ],
  },
  weezing: {
    flavorText: '한쪽이 부풀어 오르면 다른 한쪽은 오그라드는 쌍둥이 또가스. 항상 체내의 독가스를 섞고 있다.',
    stats: { hp: 65, attack: 90, defense: 120, specialAttack: 85, specialDefense: 70, speed: 60 },
    moves: [
      { name: '오물공격', type: PokemonElementType.poison, power: 65, description: '더러운 오물을 상대에게 내던져서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '독가스', type: PokemonElementType.poison, power: null, description: '독가스를 상대의 얼굴에 내뿜어 독 상태로 만든다.' },
      { name: '스모그', type: PokemonElementType.poison, power: 30, description: '더러운 가스를 상대에게 내뿜어 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '연막', type: PokemonElementType.normal, power: null, description: '연기나 먹물을 내뿜어 상대의 명중률을 떨어뜨린다.' },
    ],
  },
  rhyhorn: {
    flavorText: '머리는 나쁘지만 힘이 세서 고층 빌딩도 몸통박치기로 산산조각 낸다.',
    stats: { hp: 80, attack: 85, defense: 95, specialAttack: 30, specialDefense: 30, speed: 25 },
    moves: [
      { name: '뿔찌르기', type: PokemonElementType.normal, power: 65, description: '날카롭고 뾰족한 뿔로 상대를 공격한다.' },
      { name: '뿔드릴', type: PokemonElementType.normal, power: null, description: '회전하는 뿔을 상대에게 꿰찔러서 공격한다. 맞으면 일격에 기절한다.' },
      { name: '메가혼', type: PokemonElementType.bug, power: 120, description: '단단하고 훌륭한 뿔로 마음껏 상대를 꿰찔러서 공격한다.' },
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  rhydon: {
    flavorText: '진화하여 뒷다리만으로 서게 되었다. 뿔에 찔리면 암석에도 구멍이 뚫리고 만다.',
    stats: { hp: 105, attack: 130, defense: 120, specialAttack: 45, specialDefense: 45, speed: 40 },
    moves: [
      { name: '뿔찌르기', type: PokemonElementType.normal, power: 65, description: '날카롭고 뾰족한 뿔로 상대를 공격한다.' },
      { name: '뿔드릴', type: PokemonElementType.normal, power: null, description: '회전하는 뿔을 상대에게 꿰찔러서 공격한다. 맞으면 일격에 기절한다.' },
      { name: '메가혼', type: PokemonElementType.bug, power: 120, description: '단단하고 훌륭한 뿔로 마음껏 상대를 꿰찔러서 공격한다.' },
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  chansey: {
    flavorText: '행복을 가져다준다고 전해진다. 상처 입은 사람에게 알을 나눠주는 상냥한 포켓몬이다.',
    stats: { hp: 250, attack: 5, defense: 5, specialAttack: 35, specialDefense: 105, speed: 50 },
    moves: [
      { name: '알폭탄', type: PokemonElementType.normal, power: 100, description: '큰 알을 온 힘을 다해 상대에게 내던져서 공격한다.' },
      { name: '알낳기', type: PokemonElementType.normal, power: null, description: '자신의 최대 HP 절반을 회복한다. 동료에게 HP를 나누어 줄 수도 있다.' },
      { name: '작아지기', type: PokemonElementType.normal, power: null, description: '몸을 축소하여 작게 보임으로써 자신의 회피율을 크게 올린다.' },
      { name: '노래하기', type: PokemonElementType.normal, power: null, description: '기분 좋은 예쁜 노랫소리를 들려주고 상대를 잠듦 상태로 만든다.' },
    ],
  },
  tangela: {
    flavorText: '수많은 움직이는 덩굴에 둘러싸여 정체불명이다. 파란 덩굴은 평생 자란다.',
    stats: { hp: 65, attack: 55, defense: 115, specialAttack: 100, specialDefense: 40, speed: 60 },
    moves: [
      { name: '휘감기', type: PokemonElementType.normal, power: 10, description: '촉수나 덩굴 등을 휘감아서 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '덩굴채찍', type: PokemonElementType.grass, power: 45, description: '채찍처럼 휘어지는 가늘고 긴 덩굴로 상대를 힘껏 쳐서 공격한다.' },
      { name: '수면가루', type: PokemonElementType.grass, power: null, description: '잠이 오는 가루를 많이 흩뿌려서 상대를 잠듦 상태로 만든다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
    ],
  },
  kangaskhan: {
    flavorText: '배의 주머니에서 새끼를 키운다. 안전할 때만 새끼를 주머니에서 꺼내어 놀게 한다.',
    stats: { hp: 105, attack: 95, defense: 80, specialAttack: 40, specialDefense: 80, speed: 90 },
    moves: [
      { name: '연속펀치', type: PokemonElementType.normal, power: 18, description: '노도 같은 펀치로 상대를 세게 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '잼잼펀치', type: PokemonElementType.normal, power: 70, description: '리드미컬한 펀치를 날려 상대를 공격한다. 혼란시킬 때가 있다.' },
      { name: '속이기', type: PokemonElementType.normal, power: 40, description: '선제공격으로 상대를 풀죽게 한다. 배틀에 나가서 바로 쓰지 않으면 성공할 수 없다.' },
      { name: '꼬리흔들기', type: PokemonElementType.normal, power: null, description: '꼬리를 좌우로 귀엽게 흔들어 방심을 유도한다. 상대의 방어를 떨어뜨린다.' },
    ],
  },
  horsea: {
    flavorText: '수면에서 힘차게 먹물을 발사해서 날고 있는 벌레를 맞춰서 떨어뜨릴 때가 있다고 한다.',
    stats: { hp: 30, attack: 40, defense: 70, specialAttack: 70, specialDefense: 25, speed: 60 },
    moves: [
      { name: '연막', type: PokemonElementType.normal, power: null, description: '연기나 먹물을 내뿜어 상대의 명중률을 떨어뜨린다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '용의춤', type: PokemonElementType.dragon, power: null, description: '신비롭고 힘센 춤을 격렬하게 춘다. 자신의 공격과 스피드를 올린다.' },
      { name: '회오리', type: PokemonElementType.dragon, power: 40, description: '회오리를 일으켜 상대를 끌어들여 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  seadra: {
    flavorText: '섣불리 만지려고 하면 몸 전체에서 돋아나는 가시에 찔려 기절할 수도 있다.',
    stats: { hp: 55, attack: 65, defense: 95, specialAttack: 95, specialDefense: 45, speed: 85 },
    moves: [
      { name: '연막', type: PokemonElementType.normal, power: null, description: '연기나 먹물을 내뿜어 상대의 명중률을 떨어뜨린다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '용의춤', type: PokemonElementType.dragon, power: null, description: '신비롭고 힘센 춤을 격렬하게 춘다. 자신의 공격과 스피드를 올린다.' },
      { name: '회오리', type: PokemonElementType.dragon, power: 40, description: '회오리를 일으켜 상대를 끌어들여 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  goldeen: {
    flavorText: '5노트의 스피드로 헤엄친다. 몸에 위험을 느끼면 날카로운 뿔로 반격한다.',
    stats: { hp: 45, attack: 67, defense: 60, specialAttack: 35, specialDefense: 50, speed: 63 },
    moves: [
      { name: '뿔찌르기', type: PokemonElementType.normal, power: 65, description: '날카롭고 뾰족한 뿔로 상대를 공격한다.' },
      { name: '뿔드릴', type: PokemonElementType.normal, power: null, description: '회전하는 뿔을 상대에게 꿰찔러서 공격한다. 맞으면 일격에 기절한다.' },
      { name: '메가혼', type: PokemonElementType.bug, power: 120, description: '단단하고 훌륭한 뿔로 마음껏 상대를 꿰찔러서 공격한다.' },
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
    ],
  },
  seaking: {
    flavorText: '가을이 오면 산란을 위해 힘차게 강물을 거슬러 올라가며 헤엄치는 모습을 볼 수 있다.',
    stats: { hp: 80, attack: 92, defense: 65, specialAttack: 65, specialDefense: 80, speed: 68 },
    moves: [
      { name: '뿔찌르기', type: PokemonElementType.normal, power: 65, description: '날카롭고 뾰족한 뿔로 상대를 공격한다.' },
      { name: '뿔드릴', type: PokemonElementType.normal, power: null, description: '회전하는 뿔을 상대에게 꿰찔러서 공격한다. 맞으면 일격에 기절한다.' },
      { name: '메가혼', type: PokemonElementType.bug, power: 120, description: '단단하고 훌륭한 뿔로 마음껏 상대를 꿰찔러서 공격한다.' },
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
    ],
  },
  staryu: {
    flavorText: '몸의 중심에서 빛나는 핵이 있는 한 몸이 찢겨나가도 재생할 수 있다.',
    stats: { hp: 30, attack: 45, defense: 55, specialAttack: 70, specialDefense: 55, speed: 85 },
    moves: [
      { name: '보호색', type: PokemonElementType.normal, power: null, description: '물가나 풀밭, 동굴 등 있는 장소에 맞춰서 자신의 타입을 바꾼다.' },
      { name: '작아지기', type: PokemonElementType.normal, power: null, description: '몸을 축소하여 작게 보임으로써 자신의 회피율을 크게 올린다.' },
      { name: '코스믹파워', type: PokemonElementType.psychic, power: null, description: '우주로부터 신비한 힘을 손에 넣음으로써 자신의 방어와 특수방어를 올린다.' },
      { name: '고속스핀', type: PokemonElementType.normal, power: 50, description: '회전해서 상대를 공격한다. 조이기, 김밥말이, 씨뿌리기, 압정뿌리기 등도 날려버린다.' },
    ],
  },
  starmie: {
    flavorText: '코어라고 불리는 중심 부분은 일곱 빛깔로 빛난다. 이것을 보석으로 삼는 사람도 있다고 한다.',
    stats: { hp: 60, attack: 75, defense: 85, specialAttack: 100, specialDefense: 85, speed: 115 },
    moves: [
      { name: '고속스핀', type: PokemonElementType.normal, power: 50, description: '회전해서 상대를 공격한다. 조이기, 김밥말이, 씨뿌리기, 압정뿌리기 등도 날려버린다.' },
      { name: 'HP회복', type: PokemonElementType.normal, power: null, description: '세포를 재생시켜 자신의 최대 HP의 절반만큼 HP를 회복한다.' },
      { name: '물대포', type: PokemonElementType.water, power: 40, description: '물을 기세 좋게 상대에게 발사하여 공격한다.' },
      { name: '이상한빛', type: PokemonElementType.ghost, power: null, description: '이상한 빛을 상대에게 비춰 당황하게 한다. 상대를 혼란시킨다.' },
    ],
  },
  scyther: {
    flavorText: '날카로운 낫으로 먹이를 베고 숨통을 끊는다. 매우 드물게 날개를 사용해서 난다.',
    stats: { hp: 70, attack: 110, defense: 80, specialAttack: 55, specialDefense: 80, speed: 105 },
    moves: [
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '따라가때리기', type: PokemonElementType.dark, power: 40, description: '상대 포켓몬이 교체될 때 기술을 쓰면 2배의 위력으로 공격할 수 있다.' },
      { name: '칼등치기', type: PokemonElementType.normal, power: 40, description: '상대의 HP가 반드시 1만큼 남도록 조절하여 공격한다.' },
      { name: '베어가르기', type: PokemonElementType.normal, power: 70, description: '발톱이나 낫 등으로 상대를 베어 갈라서 공격한다. 급소에 맞기 쉽다.' },
    ],
  },
  mrmime: {
    flavorText: '손가락 끝에서 내는 파동이 공기를 굳혀서 벽을 만든다. 격렬한 공격도 튕겨 낸다.',
    stats: { hp: 40, attack: 45, defense: 65, specialAttack: 100, specialDefense: 120, speed: 90 },
    moves: [
      { name: '요가포즈', type: PokemonElementType.psychic, power: null, description: '잠들어 있는 힘을 몸속에서 끌어내어 자신의 공격을 올린다.' },
      { name: '배리어', type: PokemonElementType.psychic, power: null, description: '튼튼한 장막을 만들어 자신의 방어를 크게 올린다.' },
      { name: '연속뺨치기', type: PokemonElementType.normal, power: 15, description: '연속 뺨치기로 상대를 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '염동력', type: PokemonElementType.psychic, power: 50, description: '약한 염동력을 상대에게 보내어 공격한다. 상대를 혼란시킬 때가 있다.' },
    ],
  },
  electabuzz: {
    flavorText: '몸의 표면에는 전기가 흐르고 있다. 주변이 어두우면 전신이 푸르스름하게 빛난다.',
    stats: { hp: 65, attack: 83, defense: 57, specialAttack: 95, specialDefense: 85, speed: 105 },
    moves: [
      { name: '전광석화', type: PokemonElementType.normal, power: 40, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진한다. 반드시 선제공격할 수 있다.' },
      { name: '싫은소리', type: PokemonElementType.normal, power: null, description: '그만 귀를 막아버리고 싶은 싫은 소리를 내어 상대의 방어를 크게 떨어뜨린다.' },
      { name: '번개펀치', type: PokemonElementType.electric, power: 75, description: '전격을 담은 펀치로 상대를 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '째려보기', type: PokemonElementType.normal, power: null, description: '날카로운 눈초리로 겁을 주어 상대의 방어를 떨어뜨린다.' },
    ],
  },
  jynx: {
    flavorText: '허리를 흔드는 듯이 걷고 있다. 방심하면 엉겁결에 따라서 춤춰버린다고 한다.',
    stats: { hp: 65, attack: 50, defense: 35, specialAttack: 115, specialDefense: 95, speed: 95 },
    moves: [
      { name: '악마의키스', type: PokemonElementType.normal, power: null, description: '무서운 얼굴로 키스한다. 상대를 잠듦 상태로 만든다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
      { name: '연속뺨치기', type: PokemonElementType.normal, power: 15, description: '연속 뺨치기로 상대를 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '눈싸라기', type: PokemonElementType.ice, power: 40, description: '차가운 가랑눈을 상대에게 내뿜어 공격한다. 얼음 상태로 만들 때가 있다.' },
    ],
  },
  pinsir: {
    flavorText: '2개의 뿔 사이에 먹이를 끼우고 조각날 때까지 놓지 않는다. 조각나지 않으면 저편으로 세게 내던진다.',
    stats: { hp: 65, attack: 125, defense: 100, specialAttack: 55, specialDefense: 70, speed: 85 },
    moves: [
      { name: '가위자르기', type: PokemonElementType.normal, power: null, description: '큰 집게로 상대를 베어 갈라 공격한다. 맞으면 일격에 기절한다.' },
      { name: '찝기', type: PokemonElementType.normal, power: 55, description: '상대를 양쪽에서 집어서 데미지를 준다.' },
      { name: '지옥의바퀴', type: PokemonElementType.fighting, power: 80, description: '땅에 자신과 함께 상대를 내던져 공격한다. 자신도 조금 데미지를 입는다.' },
      { name: '조이기', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 써서 4-5턴 동안 상대를 조여 공격한다.' },
    ],
  },
  magmar: {
    flavorText: '화산의 분화구 근처에서 발견되었다. 입에서 불꽃을 뿜어낸다. 체온은 1200도나 된다.',
    stats: { hp: 65, attack: 95, defense: 57, specialAttack: 100, specialDefense: 85, speed: 93 },
    moves: [
      { name: '스모그', type: PokemonElementType.poison, power: 30, description: '더러운 가스를 상대에게 내뿜어 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '연막', type: PokemonElementType.normal, power: null, description: '연기나 먹물을 내뿜어 상대의 명중률을 떨어뜨린다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '불꽃펀치', type: PokemonElementType.fire, power: 75, description: '불꽃을 담은 펀치로 상대를 공격한다. 화상 상태로 만들 때가 있다.' },
    ],
  },
  tauros: {
    flavorText: '3개의 꼬리로 자신을 때려서 투지가 끓어오르면 전속력으로 돌진해온다.',
    stats: { hp: 75, attack: 100, defense: 95, specialAttack: 40, specialDefense: 70, speed: 110 },
    moves: [
      { name: '뿔찌르기', type: PokemonElementType.normal, power: 65, description: '날카롭고 뾰족한 뿔로 상대를 공격한다.' },
      { name: '따라가때리기', type: PokemonElementType.dark, power: 40, description: '상대 포켓몬이 교체될 때 기술을 쓰면 2배의 위력으로 공격할 수 있다.' },
      { name: '난동부리기', type: PokemonElementType.normal, power: 120, description: '2-3턴 동안 마구 난동 부려서 상대를 공격한다. 난동 부린 뒤에는 혼란에 빠진다.' },
      { name: '꼬리흔들기', type: PokemonElementType.normal, power: null, description: '꼬리를 좌우로 귀엽게 흔들어 방심을 유도한다. 상대의 방어를 떨어뜨린다.' },
    ],
  },
  magikarp: {
    flavorText: '힘도 스피드도 거의 없다. 세상에서 가장 약하고 한심한 포켓몬이다.',
    stats: { hp: 20, attack: 10, defense: 55, specialAttack: 15, specialDefense: 20, speed: 80 },
    moves: [
      { name: '튀어오르기', type: PokemonElementType.normal, power: null, description: '공격도 하지 않고 팔딱팔딱 튈 뿐 아무 일도 일어나지 않는다...' },
      { name: '바둥바둥', type: PokemonElementType.normal, power: null, description: '바둥바둥 난동 부려서 공격한다. 자신의 HP가 적을수록 기술의 위력이 올라간다.' },
      { name: '몸통박치기', type: PokemonElementType.normal, power: 40, description: '상대를 향해서 몸 전체를 부딪쳐가며 공격한다.' },
    ],
  },
  gyarados: {
    flavorText: '분쟁이 일어난 마을을 다 태워버렸다는 기록이 고문서에 남아 있다.',
    stats: { hp: 95, attack: 125, defense: 79, specialAttack: 60, specialDefense: 100, speed: 81 },
    moves: [
      { name: '용의분노', type: PokemonElementType.dragon, power: null, description: '분노의 충격파를 상대에게 부딪쳐서 공격한다. 언제나 40의 데미지를 준다.' },
      { name: '용의춤', type: PokemonElementType.dragon, power: null, description: '신비롭고 힘센 춤을 격렬하게 춘다. 자신의 공격과 스피드를 올린다.' },
      { name: '회오리', type: PokemonElementType.dragon, power: 40, description: '회오리를 일으켜 상대를 끌어들여 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '난동부리기', type: PokemonElementType.normal, power: 120, description: '2-3턴 동안 마구 난동 부려서 상대를 공격한다. 난동 부린 뒤에는 혼란에 빠진다.' },
    ],
  },
  lapras: {
    flavorText: '부드러운 마음의 소유자다. 좀처럼 다투지 않아 많이 잡혔기 때문에 수가 줄었다.',
    stats: { hp: 130, attack: 85, defense: 80, specialAttack: 85, specialDefense: 95, speed: 60 },
    moves: [
      { name: '절대영도', type: PokemonElementType.ice, power: null, description: '절대영도의 추위로 상대를 공격한다. 맞으면 일격에 기절한다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
      { name: '노래하기', type: PokemonElementType.normal, power: null, description: '기분 좋은 예쁜 노랫소리를 들려주고 상대를 잠듦 상태로 만든다.' },
      { name: '흰안개', type: PokemonElementType.ice, power: null, description: '하얀 안개로 몸을 덮는다. 5턴 동안 상대에 의해 능력이 떨어지지 않게 된다.' },
    ],
  },
  eevee: {
    flavorText: '진화할 때 모습과 능력이 바뀜으로써 혹독한 환경에 적응하는 희귀한 포켓몬이다.',
    stats: { hp: 55, attack: 55, defense: 50, specialAttack: 45, specialDefense: 65, speed: 55 },
    moves: [
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
      { name: '꼬리흔들기', type: PokemonElementType.normal, power: null, description: '꼬리를 좌우로 귀엽게 흔들어 방심을 유도한다. 상대의 방어를 떨어뜨린다.' },
      { name: '전광석화', type: PokemonElementType.normal, power: 40, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진한다. 반드시 선제공격할 수 있다.' },
      { name: '배턴터치', type: PokemonElementType.normal, power: null, description: '교대 포켓몬과 바뀐다. 능력 변화는 바뀐 포켓몬이 그대로 이어받는다.' },
    ],
  },
  ditto: {
    flavorText: '전신의 세포를 재구성해서 본 것의 모양과 똑 닮게 변신하는 능력을 가지고 있다.',
    stats: { hp: 48, attack: 48, defense: 48, specialAttack: 48, specialDefense: 48, speed: 48 },
    moves: [
      { name: '변신', type: PokemonElementType.normal, power: null, description: '상대 포켓몬으로 변신하여 상대와 완전히 똑같은 기술을 사용할 수 있다.' },
    ],
  },
  vaporeon: {
    flavorText: '아름다운 물가를 좋아한다. 세포가 물의 분자구조와 닮아서 물에 녹는 것도 가능하다.',
    stats: { hp: 130, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 65 },
    moves: [
      { name: '오로라빔', type: PokemonElementType.ice, power: 65, description: '무지개색의 빔을 상대에게 발사하여 공격한다. 공격을 떨어뜨릴 때가 있다.' },
      { name: '녹기', type: PokemonElementType.poison, power: null, description: '세포의 변화로 액체가 되어 자신의 방어를 크게 올린다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
      { name: '흑안개', type: PokemonElementType.ice, power: null, description: '흑안개를 뿜어 배틀에 참가 중인 포켓몬 전원의 능력 변화를 원래대로 돌린다.' },
    ],
  },
  jolteon: {
    flavorText: '체내에 전기가 모이면 전신의 털이 모두 날카롭게 곤두서기 시작한다.',
    stats: { hp: 65, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 130 },
    moves: [
      { name: '바늘미사일', type: PokemonElementType.bug, power: 25, description: '날카로운 침을 상대에게 발사해서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '두번차기', type: PokemonElementType.fighting, power: 30, description: '2개의 다리로 상대를 걷어차서 공격한다. 2회 연속으로 데미지를 준다.' },
      { name: '전기쇼크', type: PokemonElementType.electric, power: 40, description: '전기 자극을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
    ],
  },
  flareon: {
    flavorText: '체내에 불꽃 주머니를 가지고 있다. 싸움이 시작되기 직전에는 체온이 900도까지 올라간다.',
    stats: { hp: 65, attack: 130, defense: 60, specialAttack: 95, specialDefense: 110, speed: 65 },
    moves: [
      { name: '스모그', type: PokemonElementType.poison, power: 30, description: '더러운 가스를 상대에게 내뿜어 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '회오리불꽃', type: PokemonElementType.fire, power: 35, description: '세차게 소용돌이치는 불꽃 속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
    ],
  },
  porygon: {
    flavorText: '연구 끝에 태어난 인공 포켓몬이다. 기본적인 동작만 프로그램되어 있다.',
    stats: { hp: 65, attack: 60, defense: 70, specialAttack: 85, specialDefense: 75, speed: 40 },
    moves: [
      { name: '텍스처', type: PokemonElementType.normal, power: null, description: '자신의 타입을 배운 기술 중 가장 위에 있는 기술과 같은 타입으로 바꾼다.' },
      { name: '텍스처2', type: PokemonElementType.normal, power: null, description: '상대가 마지막으로 쓴 기술에 저항할 수 있도록 자신의 타입을 변화시킨다.' },
      { name: '각지기', type: PokemonElementType.normal, power: null, description: '몸의 각을 늘려서 더욱 각지게 하여 자신의 공격을 올린다.' },
      { name: '록온', type: PokemonElementType.normal, power: null, description: '조준을 잘 맞춰 다음 공격이 반드시 상대에게 명중하도록 한다.' },
    ],
  },
  omanyte: {
    flavorText: '먼 옛날 바다에서 살고 있던 고대 포켓몬. 10개의 다리를 구불거리며 헤엄친다.',
    stats: { hp: 35, attack: 40, defense: 100, specialAttack: 90, specialDefense: 55, speed: 35 },
    moves: [
      { name: '휘감기', type: PokemonElementType.normal, power: 10, description: '촉수나 덩굴 등을 휘감아서 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '껍질에숨기', type: PokemonElementType.water, power: null, description: '껍질에 숨어 몸을 보호하여 자신의 방어를 올린다.' },
      { name: '간지르기', type: PokemonElementType.normal, power: null, description: '몸을 간질여 웃게 만들어서 상대의 공격과 방어를 떨어뜨린다.' },
      { name: '물대포', type: PokemonElementType.water, power: 40, description: '물을 기세 좋게 상대에게 발사하여 공격한다.' },
    ],
  },
  omastar: {
    flavorText: '촉수가 팔다리처럼 발달해 있다. 달라붙자마자 문다.',
    stats: { hp: 70, attack: 60, defense: 125, specialAttack: 115, specialDefense: 70, speed: 55 },
    moves: [
      { name: '가시대포', type: PokemonElementType.normal, power: 20, description: '날카로운 침을 상대에게 발사해서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '휘감기', type: PokemonElementType.normal, power: 10, description: '촉수나 덩굴 등을 휘감아서 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '껍질에숨기', type: PokemonElementType.water, power: null, description: '껍질에 숨어 몸을 보호하여 자신의 방어를 올린다.' },
      { name: '간지르기', type: PokemonElementType.normal, power: null, description: '몸을 간질여 웃게 만들어서 상대의 공격과 방어를 떨어뜨린다.' },
    ],
  },
  kabuto: {
    flavorText: '3억 년 전에 모래 해변에서 살고 있었던 것으로 추측된다. 단단한 껍질이 몸을 보호한다.',
    stats: { hp: 30, attack: 80, defense: 90, specialAttack: 55, specialDefense: 45, speed: 55 },
    moves: [
      { name: '금속음', type: PokemonElementType.steel, power: null, description: '금속을 긁을 때 나는 듯한 싫은 소리를 들려준다. 상대의 특수방어를 크게 떨어뜨린다.' },
      { name: '흡수', type: PokemonElementType.grass, power: 20, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
      { name: '메가드레인', type: PokemonElementType.grass, power: 40, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
    ],
  },
  kabutops: {
    flavorText: '수중을 이동할 때 손발을 작게 접고 등껍질을 구부려 빠르게 헤엄친다.',
    stats: { hp: 60, attack: 115, defense: 105, specialAttack: 65, specialDefense: 70, speed: 80 },
    moves: [
      { name: '금속음', type: PokemonElementType.steel, power: null, description: '금속을 긁을 때 나는 듯한 싫은 소리를 들려준다. 상대의 특수방어를 크게 떨어뜨린다.' },
      { name: '흡수', type: PokemonElementType.grass, power: 20, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
      { name: '메가드레인', type: PokemonElementType.grass, power: 40, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
    ],
  },
  aerodactyl: {
    flavorText: '호박에 남아 있던 공룡의 유전자에서 부활시켰다. 높은 소리로 울며 난다.',
    stats: { hp: 80, attack: 105, defense: 65, specialAttack: 60, specialDefense: 75, speed: 130 },
    moves: [
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '초음파', type: PokemonElementType.normal, power: null, description: '특수한 음파를 몸에서 발산하여 상대를 혼란시킨다.' },
      { name: '원시의힘', type: PokemonElementType.rock, power: 60, description: '원시의 힘으로 공격한다. 자신의 모든 능력이 오를 때가 있다.' },
      { name: '물기', type: PokemonElementType.dark, power: 60, description: '날카롭고 뾰족한 이빨로 물어서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  articuno: {
    flavorText: '전설의 새포켓몬이다. 공기 중의 수분을 얼려 눈보라를 만들어 낼 수 있다.',
    stats: { hp: 90, attack: 85, defense: 100, specialAttack: 95, specialDefense: 125, speed: 85 },
    moves: [
      { name: '마음의눈', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 마음으로 읽고 다음 공격이 반드시 상대에게 명중되게 한다.' },
      { name: '절대영도', type: PokemonElementType.ice, power: null, description: '절대영도의 추위로 상대를 공격한다. 맞으면 일격에 기절한다.' },
      { name: '눈싸라기', type: PokemonElementType.ice, power: 40, description: '차가운 가랑눈을 상대에게 내뿜어 공격한다. 얼음 상태로 만들 때가 있다.' },
      { name: '바람일으키기', type: PokemonElementType.flying, power: 40, description: '날개로 일으킨 격한 바람을 상대에게 부딪쳐서 공격한다.' },
    ],
  },
  zapdos: {
    flavorText: '구름 위에서 거대한 번개를 내리치며 나타난다. 전설의 새포켓몬이다.',
    stats: { hp: 90, attack: 90, defense: 85, specialAttack: 125, specialDefense: 90, speed: 100 },
    moves: [
      { name: '회전부리', type: PokemonElementType.flying, power: 80, description: '회전하면서 뾰족한 부리를 상대에게 꿰찔러 공격한다.' },
      { name: '쪼기', type: PokemonElementType.flying, power: 35, description: '날카롭고 뾰족한 부리나 뿔로 상대를 쪼아서 공격한다.' },
      { name: '전기쇼크', type: PokemonElementType.electric, power: 40, description: '전기 자극을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
    ],
  },
  snorlax: {
    flavorText: '하루에 먹을 것을 400kg 먹지 않으면 성에 차지 않는다. 다 먹으면 잠이 들어 버린다.',
    stats: { hp: 160, attack: 110, defense: 65, specialAttack: 65, specialDefense: 110, speed: 30 },
    moves: [
      { name: '배북', type: PokemonElementType.normal, power: null, description: '자신의 HP를 최대 HP의 절반만큼 감소시켜 자신의 공격을 최대로 올린다.' },
      { name: '하품', type: PokemonElementType.normal, power: null, description: '큰 하품으로 졸음을 유도한다. 다음 턴에 상대를 잠듦 상태로 만든다.' },
      { name: '블록', type: PokemonElementType.normal, power: null, description: '양팔을 벌려 막아서서 상대의 도주로를 가로막아 도망칠 수 없게 한다.' },
      { name: '망각술', type: PokemonElementType.psychic, power: null, description: '머리를 비워서 순간적으로 무언가를 잊어버림으로써 자신의 특수방어를 크게 올린다.' },
    ],
  },
  moltres: {
    flavorText: '오래전부터 불새의 전설로 알려져 있다. 날갯짓할 때마다 날개가 눈부시게 불타올라서 아름답다.',
    stats: { hp: 90, attack: 100, defense: 90, specialAttack: 125, specialDefense: 85, speed: 90 },
    moves: [
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '불새', type: PokemonElementType.flying, power: 140, description: '2턴째에 상대를 공격한다. 가끔 풀죽게 만든다. 급소에도 맞기 쉽다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '회오리불꽃', type: PokemonElementType.fire, power: 35, description: '세차게 소용돌이치는 불꽃 속에 4-5턴 동안 상대를 가두어 공격한다.' },
    ],
  },
  dratini: {
    flavorText: '목격자가 적기 때문에 환상의 포켓몬이라고 불리고 있다. 탈피한 껍질이 발견되고 있다.',
    stats: { hp: 41, attack: 64, defense: 45, specialAttack: 50, specialDefense: 50, speed: 50 },
    moves: [
      { name: '용의분노', type: PokemonElementType.dragon, power: null, description: '분노의 충격파를 상대에게 부딪쳐서 공격한다. 언제나 40의 데미지를 준다.' },
      { name: '김밥말이', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 사용해 4-5턴 동안 상대를 휘감아 공격한다.' },
      { name: '회오리', type: PokemonElementType.dragon, power: 40, description: '회오리를 일으켜 상대를 끌어들여 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '힘껏치기', type: PokemonElementType.normal, power: 80, description: '긴 꼬리나 덩굴 등을 사용해 상대를 힘껏 쳐서 공격한다.' },
    ],
  },
  dragonair: {
    flavorText: '새해에 몸을 구부리며 하늘을 나는 모습을 보면 1년 동안 건강하다고 전해진다.',
    stats: { hp: 61, attack: 84, defense: 65, specialAttack: 70, specialDefense: 70, speed: 70 },
    moves: [
      { name: '용의분노', type: PokemonElementType.dragon, power: null, description: '분노의 충격파를 상대에게 부딪쳐서 공격한다. 언제나 40의 데미지를 준다.' },
      { name: '김밥말이', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 사용해 4-5턴 동안 상대를 휘감아 공격한다.' },
      { name: '회오리', type: PokemonElementType.dragon, power: 40, description: '회오리를 일으켜 상대를 끌어들여 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '힘껏치기', type: PokemonElementType.normal, power: 80, description: '긴 꼬리나 덩굴 등을 사용해 상대를 힘껏 쳐서 공격한다.' },
    ],
  },
  dragonite: {
    flavorText: '커다란 몸집으로 하늘을 난다. 지구를 약 16시간 만에 일주한다.',
    stats: { hp: 91, attack: 134, defense: 95, specialAttack: 100, specialDefense: 100, speed: 80 },
    moves: [
      { name: '용의분노', type: PokemonElementType.dragon, power: null, description: '분노의 충격파를 상대에게 부딪쳐서 공격한다. 언제나 40의 데미지를 준다.' },
      { name: '김밥말이', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 사용해 4-5턴 동안 상대를 휘감아 공격한다.' },
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '회오리', type: PokemonElementType.dragon, power: 40, description: '회오리를 일으켜 상대를 끌어들여 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  mewtwo: {
    flavorText: '한 과학자가 몇 년에 걸쳐 무서운 유전자의 연구를 계속한 결과 탄생했다.',
    stats: { hp: 106, attack: 110, defense: 90, specialAttack: 154, specialDefense: 90, speed: 130 },
    moves: [
      { name: '배리어', type: PokemonElementType.psychic, power: null, description: '튼튼한 장막을 만들어 자신의 방어를 크게 올린다.' },
      { name: '흰안개', type: PokemonElementType.ice, power: null, description: '하얀 안개로 몸을 덮는다. 5턴 동안 상대에 의해 능력이 떨어지지 않게 된다.' },
      { name: 'HP회복', type: PokemonElementType.normal, power: null, description: '세포를 재생시켜 자신의 최대 HP의 절반만큼 HP를 회복한다.' },
      { name: '사슬묶기', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 막아 바로 전에 쓴 기술을 4턴 동안 사용할 수 없게 만든다.' },
    ],
  },
  mew: {
    flavorText: '모든 기술을 사용하기 때문에 포켓몬의 조상이라고 생각하는 학자가 많다.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: '변신', type: PokemonElementType.normal, power: null, description: '상대 포켓몬으로 변신하여 상대와 완전히 똑같은 기술을 사용할 수 있다.' },
      { name: '막치기', type: PokemonElementType.normal, power: 40, description: '긴 꼬리나 손 등을 사용하여 상대를 때려서 공격한다.' },
      { name: '손가락흔들기', type: PokemonElementType.normal, power: null, description: '손가락을 흔들어 자신의 뇌를 자극해서 모든 기술 중 어느 하나를 날린다.' },
      { name: '원시의힘', type: PokemonElementType.rock, power: 60, description: '원시의 힘으로 공격한다. 자신의 모든 능력이 오를 때가 있다.' },
    ],
  },
  chikorita: {
    flavorText: '머리의 잎사귀에서 살짝 달콤한 향기가 감돈다. 얌전하며 햇볕을 쬐는 것을 매우 좋아한다.',
    stats: { hp: 45, attack: 49, defense: 65, specialAttack: 49, specialDefense: 65, speed: 45 },
    moves: [
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
      { name: '아로마테라피', type: PokemonElementType.grass, power: null, description: '기분 좋은 평온한 향기를 맡게 하여 같은 편 모두의 상태 이상을 회복한다.' },
      { name: '잎날가르기', type: PokemonElementType.grass, power: 55, description: '잎사귀를 날려 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
      { name: '달콤한향기', type: PokemonElementType.normal, power: null, description: '향기로 상대의 회피율을 크게 떨어뜨린다. 풀밭 등에서 쓰면 포켓몬이 다가온다.' },
    ],
  },
  bayleef: {
    flavorText: '목 주변에서 발산하는 향신료 같은 향기에는 힘을 내도록 하는 효과가 있다.',
    stats: { hp: 60, attack: 62, defense: 80, specialAttack: 63, specialDefense: 80, speed: 60 },
    moves: [
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
      { name: '아로마테라피', type: PokemonElementType.grass, power: null, description: '기분 좋은 평온한 향기를 맡게 하여 같은 편 모두의 상태 이상을 회복한다.' },
      { name: '잎날가르기', type: PokemonElementType.grass, power: 55, description: '잎사귀를 날려 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
      { name: '달콤한향기', type: PokemonElementType.normal, power: null, description: '향기로 상대의 회피율을 크게 떨어뜨린다. 풀밭 등에서 쓰면 포켓몬이 다가온다.' },
    ],
  },
  meganium: {
    flavorText: '꽃잎에서 발산되는 향기에는 다투는 마음을 가라앉게 하는 성분이 담겨 있다.',
    stats: { hp: 80, attack: 82, defense: 100, specialAttack: 83, specialDefense: 100, speed: 80 },
    moves: [
      { name: '꽃잎댄스', type: PokemonElementType.grass, power: 120, description: '2-3턴 동안 꽃을 흩뿌려서 상대를 공격한다. 흩뿌린 뒤에는 혼란에 빠진다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
      { name: '아로마테라피', type: PokemonElementType.grass, power: null, description: '기분 좋은 평온한 향기를 맡게 하여 같은 편 모두의 상태 이상을 회복한다.' },
      { name: '잎날가르기', type: PokemonElementType.grass, power: 55, description: '잎사귀를 날려 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
    ],
  },
  cyndaquil: {
    flavorText: '겁이 많아서 늘 몸을 웅크리고 있다. 습격당하면 등의 불꽃을 타오르게 해서 몸을 보호한다.',
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    moves: [
      { name: '분화', type: PokemonElementType.fire, power: 150, description: '분노를 폭발시켜 상대를 공격한다. 자신의 HP가 적을수록 기술의 위력이 떨어진다.' },
      { name: '분연', type: PokemonElementType.fire, power: 80, description: '새빨간 불꽃으로 자신의 주위에 있는 포켓몬을 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '화염바퀴', type: PokemonElementType.fire, power: 60, description: '불꽃을 둘러 상대에게 돌진하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '연막', type: PokemonElementType.normal, power: null, description: '연기나 먹물을 내뿜어 상대의 명중률을 떨어뜨린다.' },
    ],
  },
  quilava: {
    flavorText: '싸우기 전에 등을 보이며 자신의 불꽃이 얼마나 대단한지 상대에게 일부러 보여준다.',
    stats: { hp: 58, attack: 64, defense: 58, specialAttack: 80, specialDefense: 65, speed: 80 },
    moves: [
      { name: '분화', type: PokemonElementType.fire, power: 150, description: '분노를 폭발시켜 상대를 공격한다. 자신의 HP가 적을수록 기술의 위력이 떨어진다.' },
      { name: '분연', type: PokemonElementType.fire, power: 80, description: '새빨간 불꽃으로 자신의 주위에 있는 포켓몬을 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '화염바퀴', type: PokemonElementType.fire, power: 60, description: '불꽃을 둘러 상대에게 돌진하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '연막', type: PokemonElementType.normal, power: null, description: '연기나 먹물을 내뿜어 상대의 명중률을 떨어뜨린다.' },
    ],
  },
  typhlosion: {
    flavorText: '분노가 정점에 달했을 때 건드린 자를 모두 순식간에 불태워버릴 정도로 뜨겁다.',
    stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    moves: [
      { name: '분화', type: PokemonElementType.fire, power: 150, description: '분노를 폭발시켜 상대를 공격한다. 자신의 HP가 적을수록 기술의 위력이 떨어진다.' },
      { name: '분연', type: PokemonElementType.fire, power: 80, description: '새빨간 불꽃으로 자신의 주위에 있는 포켓몬을 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '화염바퀴', type: PokemonElementType.fire, power: 60, description: '불꽃을 둘러 상대에게 돌진하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '연막', type: PokemonElementType.normal, power: null, description: '연기나 먹물을 내뿜어 상대의 명중률을 떨어뜨린다.' },
    ],
  },
  totodile: {
    flavorText: '작아도 성격은 아주 거칠다. 눈앞에서 움직이는 것이 있으면 무조건 물어버린다.',
    stats: { hp: 50, attack: 65, defense: 64, specialAttack: 44, specialDefense: 48, speed: 43 },
    moves: [
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
      { name: '얼음엄니', type: PokemonElementType.ice, power: 65, description: '냉기를 품은 이빨로 문다. 상대를 풀죽게 하거나 얼음 상태로 만들 때가 있다.' },
      { name: '난동부리기', type: PokemonElementType.normal, power: 120, description: '2-3턴 동안 마구 난동 부려서 상대를 공격한다. 난동 부린 뒤에는 혼란에 빠진다.' },
      { name: '아쿠아테일', type: PokemonElementType.water, power: 90, description: '세차게 날뛰는 거친 파도와 같이 큰 꼬리를 흔들어서 상대를 공격한다.' },
    ],
  },
  feraligatr: {
    flavorText: '평소에는 느긋하게 움직이지만 먹이를 물 때에는 눈에 보이지 않는 엄청난 스피드를 낸다.',
    stats: { hp: 85, attack: 105, defense: 100, specialAttack: 79, specialDefense: 83, speed: 78 },
    moves: [
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
      { name: '얼음엄니', type: PokemonElementType.ice, power: 65, description: '냉기를 품은 이빨로 문다. 상대를 풀죽게 하거나 얼음 상태로 만들 때가 있다.' },
      { name: '난동부리기', type: PokemonElementType.normal, power: 120, description: '2-3턴 동안 마구 난동 부려서 상대를 공격한다. 난동 부린 뒤에는 혼란에 빠진다.' },
      { name: '아쿠아테일', type: PokemonElementType.water, power: 90, description: '세차게 날뛰는 거친 파도와 같이 큰 꼬리를 흔들어서 상대를 공격한다.' },
    ],
  },
  croconaw: {
    flavorText: '이빨이 빠져도 계속해서 자란다. 항상 입안에는 48개의 이빨이 나 있다.',
    stats: { hp: 65, attack: 80, defense: 80, specialAttack: 59, specialDefense: 63, speed: 58 },
    moves: [
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
      { name: '얼음엄니', type: PokemonElementType.ice, power: 65, description: '냉기를 품은 이빨로 문다. 상대를 풀죽게 하거나 얼음 상태로 만들 때가 있다.' },
      { name: '난동부리기', type: PokemonElementType.normal, power: 120, description: '2-3턴 동안 마구 난동 부려서 상대를 공격한다. 난동 부린 뒤에는 혼란에 빠진다.' },
      { name: '아쿠아테일', type: PokemonElementType.water, power: 90, description: '세차게 날뛰는 거친 파도와 같이 큰 꼬리를 흔들어서 상대를 공격한다.' },
    ],
  },
  sentret: {
    flavorText: '망보기 역은 날카롭게 울거나 꼬리로 땅을 쳐서 동료에게 위험을 알린다.',
    stats: { hp: 35, attack: 46, defense: 34, specialAttack: 35, specialDefense: 45, speed: 20 },
    moves: [
      { name: '날따름', type: PokemonElementType.normal, power: null, description: '자신에게 주목시켜 상대로부터의 공격을 모두 자신에게 향하게 한다.' },
      { name: '선취', type: PokemonElementType.normal, power: null, description: '위력을 올려 상대가 쓰려고 하는 기술을 먼저 쓴다. 먼저 쓰지 않으면 실패한다.' },
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  furret: {
    flavorText: '엄마 포켓몬이 가늘고 긴 몸으로 새끼를 감싸 안아 재운다. 빠른 움직임으로 상대를 몰아붙인다.',
    stats: { hp: 85, attack: 76, defense: 64, specialAttack: 45, specialDefense: 55, speed: 90 },
    moves: [
      { name: '날따름', type: PokemonElementType.normal, power: null, description: '자신에게 주목시켜 상대로부터의 공격을 모두 자신에게 향하게 한다.' },
      { name: '선취', type: PokemonElementType.normal, power: null, description: '위력을 올려 상대가 쓰려고 하는 기술을 먼저 쓴다. 먼저 쓰지 않으면 실패한다.' },
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  hoothoot: {
    flavorText: '체내의 시간 감각은 어느 때든 정확해서 규칙적인 리듬으로 목을 기울인다.',
    stats: { hp: 60, attack: 30, defense: 30, specialAttack: 36, specialDefense: 56, speed: 50 },
    moves: [
      { name: '사이코시프트', type: PokemonElementType.psychic, power: null, description: '초능력으로 암시를 걸어서 자신에게 걸려 있는 상태 이상을 상대에게 옮긴다.' },
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '신통력', type: PokemonElementType.psychic, power: 80, description: '보이지 않는 이상한 힘을 보내어 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '쪼기', type: PokemonElementType.flying, power: 35, description: '날카롭고 뾰족한 부리나 뿔로 상대를 쪼아서 공격한다.' },
    ],
  },
  noctowl: {
    flavorText: '양쪽 눈이 특수한 구조다. 적은 양의 빛이라도 잘 모아 어둠 속에서도 주위를 분별한다.',
    stats: { hp: 100, attack: 50, defense: 50, specialAttack: 86, specialDefense: 96, speed: 70 },
    moves: [
      { name: '사이코시프트', type: PokemonElementType.psychic, power: null, description: '초능력으로 암시를 걸어서 자신에게 걸려 있는 상태 이상을 상대에게 옮긴다.' },
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '신통력', type: PokemonElementType.psychic, power: 80, description: '보이지 않는 이상한 힘을 보내어 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '불새', type: PokemonElementType.flying, power: 140, description: '2턴째에 상대를 공격한다. 가끔 풀죽게 만든다. 급소에도 맞기 쉽다.' },
    ],
  },
  ledyba: {
    flavorText: '추워지면 여기저기로부터 레디바가 많이 모여들어 바싹 붙어 서로 따뜻하게 해준다.',
    stats: { hp: 40, attack: 20, defense: 30, specialAttack: 40, specialDefense: 80, speed: 55 },
    moves: [
      { name: '연속펀치', type: PokemonElementType.normal, power: 18, description: '노도 같은 펀치로 상대를 세게 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '마하펀치', type: PokemonElementType.fighting, power: 40, description: '눈에 보이지 않는 굉장한 속도로 펀치를 날린다. 반드시 선제공격을 할 수 있다.' },
      { name: '은빛바람', type: PokemonElementType.bug, power: 60, description: '바람에 날개 가루를 날려서 상대를 공격한다. 자신의 모든 능력이 올라갈 때가 있다.' },
      { name: '벌레의야단법석', type: PokemonElementType.bug, power: 90, description: '날개의 진동으로 음파를 일으켜서 공격한다. 상대의 특수방어를 떨어뜨릴 때가 있다.' },
    ],
  },
  ledian: {
    flavorText: '밤하늘의 별이 깜빡일 때 반짝이는 가루를 흩뿌리며 훨훨 날아간다.',
    stats: { hp: 55, attack: 35, defense: 50, specialAttack: 55, specialDefense: 110, speed: 85 },
    moves: [
      { name: '연속펀치', type: PokemonElementType.normal, power: 18, description: '노도 같은 펀치로 상대를 세게 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '마하펀치', type: PokemonElementType.fighting, power: 40, description: '눈에 보이지 않는 굉장한 속도로 펀치를 날린다. 반드시 선제공격을 할 수 있다.' },
      { name: '은빛바람', type: PokemonElementType.bug, power: 60, description: '바람에 날개 가루를 날려서 상대를 공격한다. 자신의 모든 능력이 올라갈 때가 있다.' },
      { name: '벌레의야단법석', type: PokemonElementType.bug, power: 90, description: '날개의 진동으로 음파를 일으켜서 공격한다. 상대의 특수방어를 떨어뜨릴 때가 있다.' },
    ],
  },
  spinarak: {
    flavorText: '가늘고 튼튼한 실을 뿜어 엮어서 덫을 만들고 먹이가 걸리기만을 기다린다.',
    stats: { hp: 40, attack: 60, defense: 40, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: '거미집', type: PokemonElementType.bug, power: null, description: '끈적끈적하고 가는 실을 칭칭 휘감아 상대를 배틀에서 도망칠 수 없게 한다.' },
      { name: '휘감기', type: PokemonElementType.normal, power: 10, description: '촉수나 덩굴 등을 휘감아서 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '바늘미사일', type: PokemonElementType.bug, power: 25, description: '날카로운 침을 상대에게 발사해서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  ariados: {
    flavorText: '엉덩이뿐 아니라 입에서도 실을 내기 때문에 봐서는 어느 쪽이 머리인지 모른다.',
    stats: { hp: 70, attack: 90, defense: 70, specialAttack: 60, specialDefense: 70, speed: 40 },
    moves: [
      { name: '거미집', type: PokemonElementType.bug, power: null, description: '끈적끈적하고 가는 실을 칭칭 휘감아 상대를 배틀에서 도망칠 수 없게 한다.' },
      { name: '휘감기', type: PokemonElementType.normal, power: 10, description: '촉수나 덩굴 등을 휘감아서 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '바늘미사일', type: PokemonElementType.bug, power: 25, description: '날카로운 침을 상대에게 발사해서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  crobat: {
    flavorText: '4장으로 수가 늘어난 날개로 어둠 속을 조용히 날아간다. 주위를 지나쳐도 눈치채지 못한다.',
    stats: { hp: 85, attack: 90, defense: 80, specialAttack: 70, specialDefense: 80, speed: 130 },
    moves: [
      { name: '맹독엄니', type: PokemonElementType.poison, power: 50, description: '독이 있는 이빨로 상대를 물어서 공격한다. 맹독을 주입할 때가 있다.' },
      { name: '크로스포이즌', type: PokemonElementType.poison, power: 70, description: '독 칼날로 상대를 베어 가른다. 독 상태로 만들 때가 있고 급소에도 맞기 쉽다.' },
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '검은눈빛', type: PokemonElementType.normal, power: null, description: '빨려 들어갈 것 같은 까만 눈빛으로 가만히 응시하여 상대를 배틀에서 도망갈 수 없게 한다.' },
    ],
  },
  chinchou: {
    flavorText: '어두운 해저에서는 항상 깜빡거리고 있는 촉수의 빛만이 통신수단이다.',
    stats: { hp: 75, attack: 38, defense: 38, specialAttack: 56, specialDefense: 56, speed: 67 },
    moves: [
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '아쿠아링', type: PokemonElementType.water, power: null, description: '자신의 몸 주변을 물로 만든 베일로 덮는다. 매 턴 HP를 회복한다.' },
      { name: '스파크', type: PokemonElementType.electric, power: 65, description: '전기를 둘러 상대에게 돌진하여 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '초음파', type: PokemonElementType.normal, power: null, description: '특수한 음파를 몸에서 발산하여 상대를 혼란시킨다.' },
    ],
  },
  lanturn: {
    flavorText: '심해를 헤엄치는 랜턴의 불빛은 수면까지 다다른다. 심해의 별이라고 불리고 있다.',
    stats: { hp: 125, attack: 58, defense: 58, specialAttack: 76, specialDefense: 76, speed: 67 },
    moves: [
      { name: '토해내기', type: PokemonElementType.normal, power: null, description: '비축된 힘을 상대에게 부딪쳐서 공격한다. 비축된 만큼 위력이 올라간다.' },
      { name: '꿀꺽', type: PokemonElementType.normal, power: null, description: '비축된 힘을 꿀꺽해서 자신의 HP를 회복한다. 비축된 만큼 회복한다.' },
      { name: '비축하기', type: PokemonElementType.normal, power: null, description: '힘을 비축해서 자신의 방어와 특수방어를 올린다. 최대 3회까지 비축할 수 있다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
    ],
  },
  pichu: {
    flavorText: '동료와 꼬리의 끝을 맞추면서 불티를 튀기는 놀이를 한다. 담력 시험을 하고 있는 듯하다.',
    stats: { hp: 20, attack: 40, defense: 15, specialAttack: 35, specialDefense: 35, speed: 60 },
    moves: [
      { name: '천사의키스', type: PokemonElementType.normal, power: null, description: '천사처럼 귀엽게 키스하여 상대를 혼란시킨다.' },
      { name: '전기쇼크', type: PokemonElementType.electric, power: 40, description: '전기 자극을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '꼬리흔들기', type: PokemonElementType.normal, power: null, description: '꼬리를 좌우로 귀엽게 흔들어 방심을 유도한다. 상대의 방어를 떨어뜨린다.' },
      { name: '나쁜음모', type: PokemonElementType.dark, power: null, description: '나쁜 일을 생각해서 머리를 활성화시킨다. 자신의 특수공격을 크게 올린다.' },
    ],
  },
  cleffa: {
    flavorText: '별님 같은 실루엣이다. 그 모습 때문에 별똥별을 타고 온다고 여겨진다.',
    stats: { hp: 50, attack: 25, defense: 28, specialAttack: 45, specialDefense: 55, speed: 15 },
    moves: [
      { name: '노래하기', type: PokemonElementType.normal, power: null, description: '기분 좋은 예쁜 노랫소리를 들려주고 상대를 잠듦 상태로 만든다.' },
      { name: '천사의키스', type: PokemonElementType.normal, power: null, description: '천사처럼 귀엽게 키스하여 상대를 혼란시킨다.' },
      { name: '흉내쟁이', type: PokemonElementType.normal, power: null, description: '직전에 나온 기술을 흉내 내어 같은 기술을 쓴다. 기술이 나오지 않았으면 실패한다.' },
      { name: '막치기', type: PokemonElementType.normal, power: 40, description: '긴 꼬리나 손 등을 사용하여 상대를 때려서 공격한다.' },
    ],
  },
  igglybuff: {
    flavorText: '짧은 다리로 걷는 것보다는 부드러운 몸으로 튀어 오르며 돌아다닌다.',
    stats: { hp: 90, attack: 30, defense: 15, specialAttack: 40, specialDefense: 20, speed: 15 },
    moves: [
      { name: '노래하기', type: PokemonElementType.normal, power: null, description: '기분 좋은 예쁜 노랫소리를 들려주고 상대를 잠듦 상태로 만든다.' },
      { name: '천사의키스', type: PokemonElementType.normal, power: null, description: '천사처럼 귀엽게 키스하여 상대를 혼란시킨다.' },
      { name: '흉내쟁이', type: PokemonElementType.normal, power: null, description: '직전에 나온 기술을 흉내 내어 같은 기술을 쓴다. 기술이 나오지 않았으면 실패한다.' },
      { name: '막치기', type: PokemonElementType.normal, power: 40, description: '긴 꼬리나 손 등을 사용하여 상대를 때려서 공격한다.' },
    ],
  },
  togepi: {
    flavorText: '껍질 안에 행복이 가득 차 있어서 상냥하게 대하면 행운을 나누어 준다고 한다.',
    stats: { hp: 35, attack: 20, defense: 65, specialAttack: 40, specialDefense: 65, speed: 20 },
    moves: [
      { name: '날따름', type: PokemonElementType.normal, power: null, description: '자신에게 주목시켜 상대로부터의 공격을 모두 자신에게 향하게 한다.' },
      { name: '천사의키스', type: PokemonElementType.normal, power: null, description: '천사처럼 귀엽게 키스하여 상대를 혼란시킨다.' },
      { name: '희망사항', type: PokemonElementType.normal, power: null, description: '다음 턴에 자신의 HP를 최대 HP의 절반만큼 회복한다.' },
      { name: '하품', type: PokemonElementType.normal, power: null, description: '큰 하품으로 졸음을 유도한다. 다음 턴에 상대를 잠듦 상태로 만든다.' },
    ],
  },
  togetic: {
    flavorText: '상냥한 사람 곁에 있지 않으면 기운이 나지 않게 되어버린다. 날개를 움직이지 않고 뜰 수 있다.',
    stats: { hp: 55, attack: 40, defense: 85, specialAttack: 80, specialDefense: 105, speed: 40 },
    moves: [
      { name: '날따름', type: PokemonElementType.normal, power: null, description: '자신에게 주목시켜 상대로부터의 공격을 모두 자신에게 향하게 한다.' },
      { name: '천사의키스', type: PokemonElementType.normal, power: null, description: '천사처럼 귀엽게 키스하여 상대를 혼란시킨다.' },
      { name: '희망사항', type: PokemonElementType.normal, power: null, description: '다음 턴에 자신의 HP를 최대 HP의 절반만큼 회복한다.' },
      { name: '하품', type: PokemonElementType.normal, power: null, description: '큰 하품으로 졸음을 유도한다. 다음 턴에 상대를 잠듦 상태로 만든다.' },
    ],
  },
  natu: {
    flavorText: '날개가 아직 잘 발달하지 못해서 뛰어오르는 것처럼 이동한다. 항상 뭔가를 바라보고 있다.',
    stats: { hp: 40, attack: 50, defense: 45, specialAttack: 70, specialDefense: 45, speed: 70 },
    moves: [
      { name: '미라클아이', type: PokemonElementType.psychic, power: null, description: '악타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '사이코시프트', type: PokemonElementType.psychic, power: null, description: '초능력으로 암시를 걸어서 자신에게 걸려 있는 상태 이상을 상대에게 옮긴다.' },
      { name: '선취', type: PokemonElementType.normal, power: null, description: '위력을 올려 상대가 쓰려고 하는 기술을 먼저 쓴다. 먼저 쓰지 않으면 실패한다.' },
      { name: '주술', type: PokemonElementType.normal, power: null, description: '하늘을 향해 기도를 올려 상대의 공격을 급소에 맞지 않게 한다.' },
    ],
  },
  xatu: {
    flavorText: '선명하게 떠오르는 태양을 조용히 바라보며 기도를 올리면 거의 움직이지 않고 하루가 간다.',
    stats: { hp: 65, attack: 75, defense: 70, specialAttack: 95, specialDefense: 70, speed: 95 },
    moves: [
      { name: '미라클아이', type: PokemonElementType.psychic, power: null, description: '악타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '사이코시프트', type: PokemonElementType.psychic, power: null, description: '초능력으로 암시를 걸어서 자신에게 걸려 있는 상태 이상을 상대에게 옮긴다.' },
      { name: '선취', type: PokemonElementType.normal, power: null, description: '위력을 올려 상대가 쓰려고 하는 기술을 먼저 쓴다. 먼저 쓰지 않으면 실패한다.' },
      { name: '주술', type: PokemonElementType.normal, power: null, description: '하늘을 향해 기도를 올려 상대의 공격을 급소에 맞지 않게 한다.' },
    ],
  },
  mareep: {
    flavorText: '푹신푹신한 털은 정전기가 쌓이면 2배로 부풀어 오른다. 만지면 감전되어 버린다.',
    stats: { hp: 55, attack: 40, defense: 40, specialAttack: 65, specialDefense: 45, speed: 35 },
    moves: [
      { name: '목화포자', type: PokemonElementType.grass, power: null, description: '솜처럼 폭신폭신한 포자를 착 달라붙게 해서 상대의 스피드를 크게 떨어뜨린다.' },
      { name: '전기쇼크', type: PokemonElementType.electric, power: 40, description: '전기 자극을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
      { name: '파워젬', type: PokemonElementType.rock, power: 80, description: '보석처럼 반짝이는 빛을 발사하여 상대를 공격한다.' },
    ],
  },
  flaaffy: {
    flavorText: '푹신푹신한 털은 전기를 모으기 쉽지만 고무 같은 피부 덕분에 자신은 마비되지 않는다.',
    stats: { hp: 70, attack: 55, defense: 55, specialAttack: 80, specialDefense: 60, speed: 45 },
    moves: [
      { name: '목화포자', type: PokemonElementType.grass, power: null, description: '솜처럼 폭신폭신한 포자를 착 달라붙게 해서 상대의 스피드를 크게 떨어뜨린다.' },
      { name: '전기쇼크', type: PokemonElementType.electric, power: 40, description: '전기 자극을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
      { name: '파워젬', type: PokemonElementType.rock, power: 80, description: '보석처럼 반짝이는 빛을 발사하여 상대를 공격한다.' },
    ],
  },
  ampharos: {
    flavorText: '꼬리 끝이 빛나며 반짝인다. 빛이 아득히 먼 곳까지 닿아서 길 잃은 자들의 이정표가 된다.',
    stats: { hp: 90, attack: 75, defense: 85, specialAttack: 115, specialDefense: 90, speed: 55 },
    moves: [
      { name: '목화포자', type: PokemonElementType.grass, power: null, description: '솜처럼 폭신폭신한 포자를 착 달라붙게 해서 상대의 스피드를 크게 떨어뜨린다.' },
      { name: '전기쇼크', type: PokemonElementType.electric, power: 40, description: '전기 자극을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
      { name: '파워젬', type: PokemonElementType.rock, power: 80, description: '보석처럼 반짝이는 빛을 발사하여 상대를 공격한다.' },
    ],
  },
  bellossom: {
    flavorText: '가끔 아르코가 모여서 춤을 추는 듯한 동작을 보인다. 태양을 부르는 의식이라 전해진다.',
    stats: { hp: 75, attack: 80, defense: 95, specialAttack: 90, specialDefense: 100, speed: 50 },
    moves: [
      { name: '리프블레이드', type: PokemonElementType.grass, power: 90, description: '잎사귀를 칼처럼 이용해 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
      { name: '저리가루', type: PokemonElementType.grass, power: null, description: '저리 가루를 많이 흩뿌려서 상대를 마비 상태로 만든다.' },
      { name: '달콤한향기', type: PokemonElementType.normal, power: null, description: '향기로 상대의 회피율을 크게 떨어뜨린다. 풀밭 등에서 쓰면 포켓몬이 다가온다.' },
      { name: '메가드레인', type: PokemonElementType.grass, power: 40, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
    ],
  },
  marill: {
    flavorText: '꼬리의 끝에는 물보다 가벼운 기름이 가득 차 있어서 부낭 대신 쓸 수 있다.',
    stats: { hp: 70, attack: 20, defense: 50, specialAttack: 20, specialDefense: 50, speed: 40 },
    moves: [
      { name: '아쿠아링', type: PokemonElementType.water, power: null, description: '자신의 몸 주변을 물로 만든 베일로 덮는다. 매 턴 HP를 회복한다.' },
      { name: '거품광선', type: PokemonElementType.water, power: 65, description: '거품을 기세 좋게 상대에게 발사하여 공격한다. 스피드를 떨어뜨릴 때가 있다.' },
      { name: '꼬리흔들기', type: PokemonElementType.normal, power: null, description: '꼬리를 좌우로 귀엽게 흔들어 방심을 유도한다. 상대의 방어를 떨어뜨린다.' },
      { name: '아쿠아테일', type: PokemonElementType.water, power: 90, description: '세차게 날뛰는 거친 파도와 같이 큰 꼬리를 흔들어서 상대를 공격한다.' },
    ],
  },
  azumarill: {
    flavorText: '긴 귀는 우수한 센서다. 강바닥에서 움직이는 생명체의 소리를 분간할 수 있다.',
    stats: { hp: 100, attack: 50, defense: 80, specialAttack: 60, specialDefense: 80, speed: 50 },
    moves: [
      { name: '아쿠아링', type: PokemonElementType.water, power: null, description: '자신의 몸 주변을 물로 만든 베일로 덮는다. 매 턴 HP를 회복한다.' },
      { name: '거품광선', type: PokemonElementType.water, power: 65, description: '거품을 기세 좋게 상대에게 발사하여 공격한다. 스피드를 떨어뜨릴 때가 있다.' },
      { name: '꼬리흔들기', type: PokemonElementType.normal, power: null, description: '꼬리를 좌우로 귀엽게 흔들어 방심을 유도한다. 상대의 방어를 떨어뜨린다.' },
      { name: '아쿠아테일', type: PokemonElementType.water, power: 90, description: '세차게 날뛰는 거친 파도와 같이 큰 꼬리를 흔들어서 상대를 공격한다.' },
    ],
  },
  politoed: {
    flavorText: '3마리 이상 왕구리가 모이면 반드시 고함치는 듯한 울음소리로 합창하기 시작한다.',
    stats: { hp: 90, attack: 75, defense: 75, specialAttack: 90, specialDefense: 100, speed: 70 },
    moves: [
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
      { name: '연속뺨치기', type: PokemonElementType.normal, power: 15, description: '연속 뺨치기로 상대를 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
      { name: '거품광선', type: PokemonElementType.water, power: 65, description: '거품을 기세 좋게 상대에게 발사하여 공격한다. 스피드를 떨어뜨릴 때가 있다.' },
    ],
  },
  sudowoodo: {
    flavorText: '항상 나무인 척하고 있다. 몸의 구조는 식물보다 돌이나 바위에 가까운 듯하다.',
    stats: { hp: 70, attack: 100, defense: 115, specialAttack: 30, specialDefense: 65, speed: 30 },
    moves: [
      { name: '우드해머', type: PokemonElementType.grass, power: 120, description: '단단한 몸통을 상대에게 부딪쳐서 공격한다. 자신도 상당한 데미지를 입는다.' },
      { name: '돌떨구기', type: PokemonElementType.rock, power: 50, description: '작은 바위를 들어올려 상대에게 내던져서 공격한다.' },
      { name: '암해머', type: PokemonElementType.fighting, power: 100, description: '강하고 무거운 주먹을 휘둘러 데미지를 준다. 자신의 스피드가 떨어진다.' },
      { name: '흉내쟁이', type: PokemonElementType.normal, power: null, description: '직전에 나온 기술을 흉내 내어 같은 기술을 쓴다. 기술이 나오지 않았으면 실패한다.' },
    ],
  },
  hoppip: {
    flavorText: '매우 가벼운 몸을 가졌다. 바람에 날아가지 않도록 단단히 지면을 밟아 지탱하고 있다.',
    stats: { hp: 35, attack: 35, defense: 40, specialAttack: 35, specialDefense: 55, speed: 50 },
    moves: [
      { name: '목화포자', type: PokemonElementType.grass, power: null, description: '솜처럼 폭신폭신한 포자를 착 달라붙게 해서 상대의 스피드를 크게 떨어뜨린다.' },
      { name: '수면가루', type: PokemonElementType.grass, power: null, description: '잠이 오는 가루를 많이 흩뿌려서 상대를 잠듦 상태로 만든다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
      { name: '튀어오르기', type: PokemonElementType.normal, power: null, description: '공격도 하지 않고 팔딱팔딱 튈 뿐 아무 일도 일어나지 않는다...' },
    ],
  },
  skiploom: {
    flavorText: '머리 위에 핀 꽃은 기온에 따라 펴지거나 오므라드는 성질을 가졌다.',
    stats: { hp: 55, attack: 45, defense: 50, specialAttack: 45, specialDefense: 65, speed: 80 },
    moves: [
      { name: '목화포자', type: PokemonElementType.grass, power: null, description: '솜처럼 폭신폭신한 포자를 착 달라붙게 해서 상대의 스피드를 크게 떨어뜨린다.' },
      { name: '수면가루', type: PokemonElementType.grass, power: null, description: '잠이 오는 가루를 많이 흩뿌려서 상대를 잠듦 상태로 만든다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
      { name: '튀어오르기', type: PokemonElementType.normal, power: null, description: '공격도 하지 않고 팔딱팔딱 튈 뿐 아무 일도 일어나지 않는다...' },
    ],
  },
  jumpluff: {
    flavorText: '계절풍에 날려서 세계 일주를 해 버린다. 도중에 솜 포자를 흩뿌린다.',
    stats: { hp: 75, attack: 55, defense: 70, specialAttack: 55, specialDefense: 95, speed: 110 },
    moves: [
      { name: '목화포자', type: PokemonElementType.grass, power: null, description: '솜처럼 폭신폭신한 포자를 착 달라붙게 해서 상대의 스피드를 크게 떨어뜨린다.' },
      { name: '수면가루', type: PokemonElementType.grass, power: null, description: '잠이 오는 가루를 많이 흩뿌려서 상대를 잠듦 상태로 만든다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
      { name: '튀어오르기', type: PokemonElementType.normal, power: null, description: '공격도 하지 않고 팔딱팔딱 튈 뿐 아무 일도 일어나지 않는다...' },
    ],
  },
  aipom: {
    flavorText: '높은 나무 위에서 살고 있다. 나뭇가지에서 가지로 건너뛸 때 꼬리로 능숙하게 밸런스를 잡는다.',
    stats: { hp: 55, attack: 70, defense: 55, specialAttack: 40, specialDefense: 55, speed: 85 },
    moves: [
      { name: '더블어택', type: PokemonElementType.normal, power: 35, description: '꼬리 등을 써서 상대를 때려 공격한다. 2회 연속으로 데미지를 준다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '간지르기', type: PokemonElementType.normal, power: null, description: '몸을 간질여 웃게 만들어서 상대의 공격과 방어를 떨어뜨린다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
    ],
  },
  sunkern: {
    flavorText: '어느 날 아침 갑자기 떨어진다. 깨비참에게 습격당하면 잎사귀를 세차게 흔들어서 쫓아 버린다.',
    stats: { hp: 30, attack: 30, defense: 30, specialAttack: 30, specialDefense: 30, speed: 30 },
    moves: [
      { name: '풀피리', type: PokemonElementType.grass, power: null, description: '기분 좋은 피리 소리를 들려주어 상대를 잠듦 상태로 만든다.' },
      { name: '뿌리박기', type: PokemonElementType.grass, power: null, description: '대지에 뿌리를 박아 매 턴마다 자신의 HP를 회복한다. 뿌리 박고 있으므로 교체할 수 없다.' },
      { name: '잎날가르기', type: PokemonElementType.grass, power: 55, description: '잎사귀를 날려 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
      { name: '성장', type: PokemonElementType.normal, power: null, description: '몸을 일시에 크게 성장시켜 공격과 특수공격을 올린다.' },
    ],
  },
  yanma: {
    flavorText: '얼굴을 움직이지 않고 360도 전부 볼 수 있는 눈을 가지고 있어서 바로 뒤의 먹이도 놓치지 않는다.',
    stats: { hp: 65, attack: 65, defense: 45, specialAttack: 75, specialDefense: 45, speed: 95 },
    moves: [
      { name: '소닉붐', type: PokemonElementType.normal, power: null, description: '충격파를 상대에 부딪쳐서 공격한다. 언제나 20의 데미지를 준다.' },
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '벌레의야단법석', type: PokemonElementType.bug, power: 90, description: '날개의 진동으로 음파를 일으켜서 공격한다. 상대의 특수방어를 떨어뜨릴 때가 있다.' },
    ],
  },
  sunflora: {
    flavorText: '더운 계절이 다가오면 얼굴의 꽃잎이 선명해지고 활발하게 움직이게 된다.',
    stats: { hp: 75, attack: 75, defense: 55, specialAttack: 105, specialDefense: 85, speed: 30 },
    moves: [
      { name: '풀피리', type: PokemonElementType.grass, power: null, description: '기분 좋은 피리 소리를 들려주어 상대를 잠듦 상태로 만든다.' },
      { name: '꽃잎댄스', type: PokemonElementType.grass, power: 120, description: '2-3턴 동안 꽃을 흩뿌려서 상대를 공격한다. 흩뿌린 뒤에는 혼란에 빠진다.' },
      { name: '뿌리박기', type: PokemonElementType.grass, power: null, description: '대지에 뿌리를 박아 매 턴마다 자신의 HP를 회복한다. 뿌리 박고 있으므로 교체할 수 없다.' },
      { name: '잎날가르기', type: PokemonElementType.grass, power: 55, description: '잎사귀를 날려 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
    ],
  },
  wooper: {
    flavorText: '해질녘 시원해지면 물에서 올라온 우파들은 먹이를 찾으러 물가를 걷는다.',
    stats: { hp: 55, attack: 45, defense: 45, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: '진흙폭탄', type: PokemonElementType.ground, power: 65, description: '단단한 진흙구슬을 상대에게 발사하여 공격한다. 명중률을 떨어뜨릴 때가 있다.' },
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: '흰안개', type: PokemonElementType.ice, power: null, description: '하얀 안개로 몸을 덮는다. 5턴 동안 상대에 의해 능력이 떨어지지 않게 된다.' },
      { name: '힘껏치기', type: PokemonElementType.normal, power: 80, description: '긴 꼬리나 덩굴 등을 사용해 상대를 힘껏 쳐서 공격한다.' },
    ],
  },
  quagsire: {
    flavorText: '느긋한 성격이다. 강바닥에서 입을 벌려 먹이가 들어오는 것을 한결같이 기다린다.',
    stats: { hp: 95, attack: 85, defense: 85, specialAttack: 65, specialDefense: 65, speed: 35 },
    moves: [
      { name: '진흙폭탄', type: PokemonElementType.ground, power: 65, description: '단단한 진흙구슬을 상대에게 발사하여 공격한다. 명중률을 떨어뜨릴 때가 있다.' },
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: '흰안개', type: PokemonElementType.ice, power: null, description: '하얀 안개로 몸을 덮는다. 5턴 동안 상대에 의해 능력이 떨어지지 않게 된다.' },
      { name: '힘껏치기', type: PokemonElementType.normal, power: 80, description: '긴 꼬리나 덩굴 등을 사용해 상대를 힘껏 쳐서 공격한다.' },
    ],
  },
  espeon: {
    flavorText: '상대의 움직임을 예지할 때 두 갈래로 갈라져 있는 꼬리의 끝이 미세하게 떨리고 있다.',
    stats: { hp: 65, attack: 65, defense: 60, specialAttack: 130, specialDefense: 95, speed: 110 },
    moves: [
      { name: '아침햇살', type: PokemonElementType.normal, power: null, description: '자신의 HP를 회복한다. 날씨에 따라 회복량이 변한다.' },
      { name: '파워스왑', type: PokemonElementType.psychic, power: null, description: '초능력으로 자신과 상대의 공격과 특수공격의 능력 변화를 교체한다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
      { name: '염동력', type: PokemonElementType.psychic, power: 50, description: '약한 염동력을 상대에게 보내어 공격한다. 상대를 혼란시킬 때가 있다.' },
    ],
  },
  umbreon: {
    flavorText: '달빛이 이브이의 유전자를 변화시켰다. 어둠에 숨어 먹이를 기다린다.',
    stats: { hp: 95, attack: 65, defense: 110, specialAttack: 60, specialDefense: 130, speed: 65 },
    moves: [
      { name: '달빛', type: PokemonElementType.normal, power: null, description: '자신의 HP를 회복한다. 날씨에 따라 회복량이 변한다.' },
      { name: '검은눈빛', type: PokemonElementType.normal, power: null, description: '빨려 들어갈 것 같은 까만 눈빛으로 가만히 응시하여 상대를 배틀에서 도망갈 수 없게 한다.' },
      { name: '가드스왑', type: PokemonElementType.psychic, power: null, description: '초능력으로 자신과 상대의 방어와 특수방어의 능력 변화를 교체한다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
    ],
  },
  murkrow: {
    flavorText: '반짝이는 물건을 주워 비밀 장소에 숨겨 둔다. 나옹과 자주 쟁탈전을 벌인다.',
    stats: { hp: 60, attack: 85, defense: 42, specialAttack: 85, specialDefense: 42, speed: 91 },
    moves: [
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '검은눈빛', type: PokemonElementType.normal, power: null, description: '빨려 들어갈 것 같은 까만 눈빛으로 가만히 응시하여 상대를 배틀에서 도망갈 수 없게 한다.' },
      { name: '쪼기', type: PokemonElementType.flying, power: 35, description: '날카롭고 뾰족한 부리나 뿔로 상대를 쪼아서 공격한다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
    ],
  },
  slowking: {
    flavorText: '대단한 지성과 번뜩이는 재치를 가지고 있다. 어떤 때라도 당황하거나 소란 피우지 않고 느긋하게 있다.',
    stats: { hp: 95, attack: 75, defense: 80, specialAttack: 100, specialDefense: 110, speed: 30 },
    moves: [
      { name: '마지막수단', type: PokemonElementType.normal, power: null, description: '마지막수단의 남은 PP가 적으면 적을수록 기술의 위력이 올라간다.' },
      { name: '파워젬', type: PokemonElementType.rock, power: 80, description: '보석처럼 반짝이는 빛을 발사하여 상대를 공격한다.' },
      { name: '하품', type: PokemonElementType.normal, power: null, description: '큰 하품으로 졸음을 유도한다. 다음 턴에 상대를 잠듦 상태로 만든다.' },
      { name: '사슬묶기', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 막아 바로 전에 쓴 기술을 4턴 동안 사용할 수 없게 만든다.' },
    ],
  },
  unown_a: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_b: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_c: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_d: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_e: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_f: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_g: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_h: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_i: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_j: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_k: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_l: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_m: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_n: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_o: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_p: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_q: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_r: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_s: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_t: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_u: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_v: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_w: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_x: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_y: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_z: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_exclamation: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  unown_question: {
    flavorText: '몸 자체는 굉장히 얇고 항상 벽에 들러붙어 있다. 모습에는 뭔가 의미가 있는 듯하다.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
    ],
  },
  misdreavus: {
    flavorText: '무서워하는 마음을 빨간 구슬로 흡수해 영양분으로 만든다. 낮에는 어두운 곳에서 잠자고 있다.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 85, specialDefense: 85, speed: 85 },
    moves: [
      { name: '원념', type: PokemonElementType.ghost, power: null, description: '상대의 기술로 기절하면 원념을 담아 그 기술의 PP를 0으로 만든다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
      { name: '검은눈빛', type: PokemonElementType.normal, power: null, description: '빨려 들어갈 것 같은 까만 눈빛으로 가만히 응시하여 상대를 배틀에서 도망갈 수 없게 한다.' },
      { name: '사이코웨이브', type: PokemonElementType.psychic, power: null, description: '이상한 염력파를 상대에게 발사하여 공격한다. 사용할 때마다 데미지가 바뀐다.' },
    ],
  },
  wobbuffet: {
    flavorText: '빛과 쇼크를 싫어한다. 공격받으면 몸이 부풀어 올라 반격이 강력해진다.',
    stats: { hp: 190, attack: 33, defense: 58, specialAttack: 33, specialDefense: 58, speed: 33 },
    moves: [
      { name: '미러코트', type: PokemonElementType.psychic, power: null, description: '상대에게 받은 특수공격의 데미지를 2배로 만들어 그 상대에게 돌려준다.' },
      { name: '길동무', type: PokemonElementType.ghost, power: null, description: '기술을 쓴 뒤 공격을 받아 기절했을 때 길동무의 대상도 기절하게 한다.' },
      { name: '카운터', type: PokemonElementType.fighting, power: null, description: '상대로부터 받은 물리공격의 데미지를 2배로 만들어 같은 상대에게 돌려준다.' },
      { name: '신비의부적', type: PokemonElementType.normal, power: null, description: '5턴 동안 이상한 힘으로 보호받아 상태 이상이 되지 않는다.' },
    ],
  },
  girafarig: {
    flavorText: '잠자는 동안 꼬리의 머리가 주위를 망보고 있다. 꼬리는 잠을 잘 필요가 없다.',
    stats: { hp: 70, attack: 80, defense: 65, specialAttack: 90, specialDefense: 65, speed: 85 },
    moves: [
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '짓밟기', type: PokemonElementType.normal, power: 65, description: '큰 발로 상대를 짓밟아서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '더블어택', type: PokemonElementType.normal, power: 35, description: '꼬리 등을 써서 상대를 때려 공격한다. 2회 연속으로 데미지를 준다.' },
      { name: '파워스왑', type: PokemonElementType.psychic, power: null, description: '초능력으로 자신과 상대의 공격과 특수공격의 능력 변화를 교체한다.' },
    ],
  },
  pineco: {
    flavorText: '나무껍질을 짜 맞춰서 껍질을 두껍게 하는 것을 좋아한다. 무거워져도 신경 쓰지 않는다.',
    stats: { hp: 50, attack: 65, defense: 90, specialAttack: 35, specialDefense: 35, speed: 15 },
    moves: [
      { name: '고속스핀', type: PokemonElementType.normal, power: 50, description: '회전해서 상대를 공격한다. 조이기, 김밥말이, 씨뿌리기, 압정뿌리기 등도 날려버린다.' },
      { name: '압정뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 발밑에 압정을 뿌린다. 교체된 상대 포켓몬에게 데미지를 준다.' },
      { name: '벌레먹기', type: PokemonElementType.bug, power: 60, description: '물어서 공격한다. 상대가 나무열매를 지니고 있을 때 먹어서 나무열매의 효과를 받을 수 있다.' },
      { name: '대폭발', type: PokemonElementType.normal, power: 250, description: '큰 폭발로 자신의 주위에 있는 포켓몬을 공격한다. 쓰고 나서는 기절한다.' },
    ],
  },
  forretress: {
    flavorText: '강철 껍질이 몸을 보호하고 있다. 틈새에서 엿보고 있는 눈이 있지만 내용물의 정체는 수수께끼다.',
    stats: { hp: 75, attack: 90, defense: 140, specialAttack: 60, specialDefense: 60, speed: 40 },
    moves: [
      { name: '미러샷', type: PokemonElementType.steel, power: 65, description: '갈고 닦은 몸에서 섬광의 힘을 상대에게 쏜다. 명중률을 떨어뜨릴 때가 있다.' },
      { name: '고속스핀', type: PokemonElementType.normal, power: 50, description: '회전해서 상대를 공격한다. 조이기, 김밥말이, 씨뿌리기, 압정뿌리기 등도 날려버린다.' },
      { name: '압정뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 발밑에 압정을 뿌린다. 교체된 상대 포켓몬에게 데미지를 준다.' },
      { name: '독압정', type: PokemonElementType.poison, power: null, description: '상대의 발밑에 독압정을 뿌린다. 교체로 나온 상대 포켓몬에 독을 덮어씌운다.' },
    ],
  },
  dunsparce: {
    flavorText: '누군가에게 들키면 꼬리로 땅을 파서 뒤쪽으로 도망친다.',
    stats: { hp: 100, attack: 70, defense: 70, specialAttack: 65, specialDefense: 65, speed: 45 },
    moves: [
      { name: '뱀눈초리', type: PokemonElementType.normal, power: null, description: '배의 무늬로 겁을 주어 상대를 마비 상태로 만든다.' },
      { name: '하품', type: PokemonElementType.normal, power: null, description: '큰 하품으로 졸음을 유도한다. 다음 턴에 상대를 잠듦 상태로 만든다.' },
      { name: '따라가때리기', type: PokemonElementType.dark, power: 40, description: '상대 포켓몬이 교체될 때 기술을 쓰면 2배의 위력으로 공격할 수 있다.' },
      { name: '날개쉬기', type: PokemonElementType.flying, power: null, description: '땅에 내려와 몸을 쉬게 한다. 최대 HP의 절반만큼 HP를 회복한다.' },
    ],
  },
  gligar: {
    flavorText: '보통은 벼랑에 붙어 있다. 먹이를 발견하면 날개를 펼쳐 바람을 타고 날아 덮친다.',
    stats: { hp: 65, attack: 75, defense: 105, specialAttack: 35, specialDefense: 65, speed: 85 },
    moves: [
      { name: '가위자르기', type: PokemonElementType.normal, power: null, description: '큰 집게로 상대를 베어 갈라 공격한다. 맞으면 일격에 기절한다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
    ],
  },
  steelix: {
    flavorText: '땅속의 높은 압력과 열로 단련된 몸은 어떠한 금속보다도 단단하다.',
    stats: { hp: 75, attack: 85, defense: 200, specialAttack: 55, specialDefense: 65, speed: 30 },
    moves: [
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: '돌떨구기', type: PokemonElementType.rock, power: 50, description: '작은 바위를 들어올려 상대에게 내던져서 공격한다.' },
      { name: '조이기', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 써서 4-5턴 동안 상대를 조여 공격한다.' },
      { name: '용의숨결', type: PokemonElementType.dragon, power: 60, description: '굉장한 숨결을 상대에게 내뿜어 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  snubbull: {
    flavorText: '활발하고 노는 것을 좋아하는 성격. 잘 따르기 때문에 함께 놀고 싶어 하는 여성들이 많다.',
    stats: { hp: 60, attack: 80, defense: 50, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: '핥기', type: PokemonElementType.ghost, power: 30, description: '긴 혀로 상대를 핥아서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '번개엄니', type: PokemonElementType.electric, power: 65, description: '전기를 모은 이빨로 문다. 상대를 풀죽게 하거나 마비 상태로 만들 때가 있다.' },
      { name: '얼음엄니', type: PokemonElementType.ice, power: 65, description: '냉기를 품은 이빨로 문다. 상대를 풀죽게 하거나 얼음 상태로 만들 때가 있다.' },
      { name: '불꽃엄니', type: PokemonElementType.fire, power: 65, description: '불꽃을 두른 이빨로 문다. 상대를 풀죽게 하거나 화상 상태로 만들 때가 있다.' },
    ],
  },
  granbull: {
    flavorText: '얼굴에 어울리지 않게 겁이 많다. 그러나 한번 화내기 시작하면 큰 이빨로 반격한다.',
    stats: { hp: 90, attack: 120, defense: 75, specialAttack: 60, specialDefense: 60, speed: 45 },
    moves: [
      { name: '핥기', type: PokemonElementType.ghost, power: 30, description: '긴 혀로 상대를 핥아서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '번개엄니', type: PokemonElementType.electric, power: 65, description: '전기를 모은 이빨로 문다. 상대를 풀죽게 하거나 마비 상태로 만들 때가 있다.' },
      { name: '얼음엄니', type: PokemonElementType.ice, power: 65, description: '냉기를 품은 이빨로 문다. 상대를 풀죽게 하거나 얼음 상태로 만들 때가 있다.' },
      { name: '불꽃엄니', type: PokemonElementType.fire, power: 65, description: '불꽃을 두른 이빨로 문다. 상대를 풀죽게 하거나 화상 상태로 만들 때가 있다.' },
    ],
  },
  qwilfish: {
    flavorText: '전신의 독침을 날리기 위해 10리터의 물을 단번에 마시고 몸을 부풀린다.',
    stats: { hp: 65, attack: 95, defense: 85, specialAttack: 55, specialDefense: 55, speed: 85 },
    moves: [
      { name: '작아지기', type: PokemonElementType.normal, power: null, description: '몸을 축소하여 작게 보임으로써 자신의 회피율을 크게 올린다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '토해내기', type: PokemonElementType.normal, power: null, description: '비축된 힘을 상대에게 부딪쳐서 공격한다. 비축된 만큼 위력이 올라간다.' },
      { name: '바늘미사일', type: PokemonElementType.bug, power: 25, description: '날카로운 침을 상대에게 발사해서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  scizor: {
    flavorText: '강철이 함유된 집게로 잡은 것은 아무리 딱딱해도 산산조각이 난다.',
    stats: { hp: 70, attack: 130, defense: 100, specialAttack: 55, specialDefense: 80, speed: 65 },
    moves: [
      { name: '불릿펀치', type: PokemonElementType.steel, power: 40, description: '탄환처럼 빠르고 단단한 펀치를 상대에게 날린다. 반드시 선제공격을 할 수 있다.' },
      { name: '칼바람', type: PokemonElementType.normal, power: 80, description: '바람의 칼날을 만들어 2턴째에 상대를 공격한다. 급소에 맞기 쉽다.' },
      { name: '더블어택', type: PokemonElementType.normal, power: 35, description: '꼬리 등을 써서 상대를 때려 공격한다. 2회 연속으로 데미지를 준다.' },
      { name: '페인트', type: PokemonElementType.normal, power: 30, description: '방어나 판별을 하고 있는 상대에게 공격할 수 있다. 방어 효과를 해제시킨다.' },
    ],
  },
  shuckle: {
    flavorText: '항아리 같은 등껍질 속에 모은 나무열매는 어느샌가 걸쭉한 주스로 변한다.',
    stats: { hp: 20, attack: 10, defense: 230, specialAttack: 10, specialDefense: 230, speed: 5 },
    moves: [
      { name: '파워트릭', type: PokemonElementType.psychic, power: null, description: '초능력으로 자신의 공격과 방어의 힘을 교환한다.' },
      { name: '휘감기', type: PokemonElementType.normal, power: 10, description: '촉수나 덩굴 등을 휘감아서 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '껍질에숨기', type: PokemonElementType.water, power: null, description: '껍질에 숨어 몸을 보호하여 자신의 방어를 올린다.' },
      { name: '김밥말이', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 사용해 4-5턴 동안 상대를 휘감아 공격한다.' },
    ],
  },
  heracross: {
    flavorText: '자랑스러운 뿔을 상대의 배 밑에 틀어박고 단번에 들어 올려 집어 던지는 천하장사다.',
    stats: { hp: 80, attack: 125, defense: 75, specialAttack: 40, specialDefense: 95, speed: 85 },
    moves: [
      { name: '뿔찌르기', type: PokemonElementType.normal, power: 65, description: '날카롭고 뾰족한 뿔로 상대를 공격한다.' },
      { name: '메가혼', type: PokemonElementType.bug, power: 120, description: '단단하고 훌륭한 뿔로 마음껏 상대를 꿰찔러서 공격한다.' },
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '페인트', type: PokemonElementType.normal, power: 30, description: '방어나 판별을 하고 있는 상대에게 공격할 수 있다. 방어 효과를 해제시킨다.' },
    ],
  },
  sneasel: {
    flavorText: '거처에서 알을 가로채어 먹어 버린다. 날카로운 갈고리 손톱이 상대의 급소를 베어 가른다.',
    stats: { hp: 55, attack: 95, defense: 55, specialAttack: 35, specialDefense: 75, speed: 115 },
    moves: [
      { name: '얼음뭉치', type: PokemonElementType.ice, power: 40, description: '얼음 덩어리를 순식간에 만들어 상대에게 빠르게 쏜다. 반드시 선제공격을 할 수 있다.' },
      { name: '집단구타', type: PokemonElementType.dark, power: null, description: '같은 편 전원이 공격한다. 동료 포켓몬이 많을수록 기술의 공격 횟수가 증가한다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
    ],
  },
  teddiursa: {
    flavorText: '꿀을 발견하면 초승달 모양이 빛난다. 달콤한꿀이 배어든 손바닥을 항상 핥고 있다.',
    stats: { hp: 60, attack: 80, defense: 50, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: '핥기', type: PokemonElementType.ghost, power: 30, description: '긴 혀로 상대를 핥아서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '달콤한향기', type: PokemonElementType.normal, power: null, description: '향기로 상대의 회피율을 크게 떨어뜨린다. 풀밭 등에서 쓰면 포켓몬이 다가온다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
    ],
  },
  ursaring: {
    flavorText: '어떠한 냄새라도 구별할 수 있다. 땅속 깊이 파묻혀 있는 먹이도 남김없이 찾아낸다.',
    stats: { hp: 90, attack: 130, defense: 75, specialAttack: 75, specialDefense: 75, speed: 55 },
    moves: [
      { name: '핥기', type: PokemonElementType.ghost, power: 30, description: '긴 혀로 상대를 핥아서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '암해머', type: PokemonElementType.fighting, power: 100, description: '강하고 무거운 주먹을 휘둘러 데미지를 준다. 자신의 스피드가 떨어진다.' },
      { name: '달콤한향기', type: PokemonElementType.normal, power: null, description: '향기로 상대의 회피율을 크게 떨어뜨린다. 풀밭 등에서 쓰면 포켓몬이 다가온다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  slugma: {
    flavorText: '화산 지대에 많이 나타난다. 따뜻한 곳을 찾아서 느릿느릿 기어 다니고 있다.',
    stats: { hp: 40, attack: 40, defense: 40, specialAttack: 70, specialDefense: 40, speed: 20 },
    moves: [
      { name: '분연', type: PokemonElementType.fire, power: 80, description: '새빨간 불꽃으로 자신의 주위에 있는 포켓몬을 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '스모그', type: PokemonElementType.poison, power: 30, description: '더러운 가스를 상대에게 내뿜어 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '돌떨구기', type: PokemonElementType.rock, power: 50, description: '작은 바위를 들어올려 상대에게 내던져서 공격한다.' },
      { name: 'HP회복', type: PokemonElementType.normal, power: null, description: '세포를 재생시켜 자신의 최대 HP의 절반만큼 HP를 회복한다.' },
    ],
  },
  magcargo: {
    flavorText: '등껍질은 깨어지기 쉬우며 가끔 체내를 순환하고 있는 고열의 불꽃을 뿜어낸다.',
    stats: { hp: 60, attack: 50, defense: 120, specialAttack: 90, specialDefense: 80, speed: 30 },
    moves: [
      { name: '분연', type: PokemonElementType.fire, power: 80, description: '새빨간 불꽃으로 자신의 주위에 있는 포켓몬을 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '스모그', type: PokemonElementType.poison, power: 30, description: '더러운 가스를 상대에게 내뿜어 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '돌떨구기', type: PokemonElementType.rock, power: 50, description: '작은 바위를 들어올려 상대에게 내던져서 공격한다.' },
      { name: 'HP회복', type: PokemonElementType.normal, power: null, description: '세포를 재생시켜 자신의 최대 HP의 절반만큼 HP를 회복한다.' },
    ],
  },
  swinub: {
    flavorText: '먹이를 찾기 위해 코를 바닥에 비벼 땅을 파고 있다. 가끔 온천을 찾아낸다.',
    stats: { hp: 50, attack: 50, defense: 40, specialAttack: 30, specialDefense: 30, speed: 50 },
    moves: [
      { name: '진흙폭탄', type: PokemonElementType.ground, power: 65, description: '단단한 진흙구슬을 상대에게 발사하여 공격한다. 명중률을 떨어뜨릴 때가 있다.' },
      { name: '얼음뭉치', type: PokemonElementType.ice, power: 40, description: '얼음 덩어리를 순식간에 만들어 상대에게 빠르게 쏜다. 반드시 선제공격을 할 수 있다.' },
      { name: '눈싸라기', type: PokemonElementType.ice, power: 40, description: '차가운 가랑눈을 상대에게 내뿜어 공격한다. 얼음 상태로 만들 때가 있다.' },
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
    ],
  },
  piloswine: {
    flavorText: '4개의 다리는 짧지만 발굽이 넓고 거칠거칠하므로 눈 위도 미끄러지지 않고 걸을 수 있다.',
    stats: { hp: 100, attack: 100, defense: 80, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: '진흙폭탄', type: PokemonElementType.ground, power: 65, description: '단단한 진흙구슬을 상대에게 발사하여 공격한다. 명중률을 떨어뜨릴 때가 있다.' },
      { name: '눈싸라기', type: PokemonElementType.ice, power: 40, description: '차가운 가랑눈을 상대에게 내뿜어 공격한다. 얼음 상태로 만들 때가 있다.' },
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
    ],
  },
  corsola: {
    flavorText: '점점 자라면서 다시 돋아나는 머리의 끝이 아름다워 보물로서 인기가 많다.',
    stats: { hp: 65, attack: 55, defense: 95, specialAttack: 65, specialDefense: 95, speed: 35 },
    moves: [
      { name: '가시대포', type: PokemonElementType.normal, power: 20, description: '날카로운 침을 상대에게 발사해서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '주술', type: PokemonElementType.normal, power: null, description: '하늘을 향해 기도를 올려 상대의 공격을 급소에 맞지 않게 한다.' },
      { name: '리프레시', type: PokemonElementType.normal, power: null, description: '몸을 쉬게 하여 자신이 입은 독, 마비, 화상의 상태 이상을 치료한다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
    ],
  },
  remoraid: {
    flavorText: '조준이 정확하다. 뿜어낸 물은 100m 앞에서 움직이는 먹이를 반드시 명중시킨다.',
    stats: { hp: 35, attack: 65, defense: 35, specialAttack: 65, specialDefense: 35, speed: 65 },
    moves: [
      { name: '록온', type: PokemonElementType.normal, power: null, description: '조준을 잘 맞춰 다음 공격이 반드시 상대에게 명중하도록 한다.' },
      { name: '오로라빔', type: PokemonElementType.ice, power: 65, description: '무지개색의 빔을 상대에게 발사하여 공격한다. 공격을 떨어뜨릴 때가 있다.' },
      { name: '거품광선', type: PokemonElementType.water, power: 65, description: '거품을 기세 좋게 상대에게 발사하여 공격한다. 스피드를 떨어뜨릴 때가 있다.' },
      { name: '환상빔', type: PokemonElementType.psychic, power: 65, description: '이상한 광선을 상대에게 발사하여 공격한다. 혼란시킬 때가 있다.' },
    ],
  },
  octillery: {
    flavorText: '구멍에 들어가고 싶어 하는 성질로 바위굴이나 항아리를 좋아해 거기서 먹물을 뿜어내 공격한다.',
    stats: { hp: 75, attack: 105, defense: 75, specialAttack: 105, specialDefense: 75, speed: 45 },
    moves: [
      { name: '대포무노포', type: PokemonElementType.water, power: 65, description: '상대의 얼굴 등에 먹물을 내뿜어 공격한다. 명중률을 떨어뜨릴 때가 있다.' },
      { name: '휘감기', type: PokemonElementType.normal, power: 10, description: '촉수나 덩굴 등을 휘감아서 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '쥐어짜기', type: PokemonElementType.normal, power: null, description: '강하게 조여 공격을 한다. 상대의 HP가 많이 남아 있을수록 위력이 올라간다.' },
      { name: '오로라빔', type: PokemonElementType.ice, power: 65, description: '무지개색의 빔을 상대에게 발사하여 공격한다. 공격을 떨어뜨릴 때가 있다.' },
    ],
  },
  delibird: {
    flavorText: '꼬리로 먹이를 싸서 운반한다. 산에서 조난당한 사람에게 먹이를 나눠주는 습성이 있다.',
    stats: { hp: 45, attack: 55, defense: 45, specialAttack: 65, specialDefense: 45, speed: 75 },
    moves: [
      { name: '프레젠트', type: PokemonElementType.normal, power: null, description: '덫을 설치한 상자를 상대에게 건네어 공격한다. HP가 회복돼버릴 때도 있다.' },
    ],
  },
  mantine: {
    flavorText: '헤엄쳐서 스피드가 빨라지면 파도 위에 뛰어올라 그대로 100m나 활공한다.',
    stats: { hp: 85, attack: 40, defense: 70, specialAttack: 80, specialDefense: 140, speed: 70 },
    moves: [
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '아쿠아링', type: PokemonElementType.water, power: null, description: '자신의 몸 주변을 물로 만든 베일로 덮는다. 매 턴 HP를 회복한다.' },
      { name: '초음파', type: PokemonElementType.normal, power: null, description: '특수한 음파를 몸에서 발산하여 상대를 혼란시킨다.' },
    ],
  },
  skarmory: {
    flavorText: '가시나무 안에 둥지를 만든다. 가시에 상처를 입어가며 자라난 새끼들의 날개는 단단해진다.',
    stats: { hp: 65, attack: 80, defense: 140, specialAttack: 40, specialDefense: 70, speed: 70 },
    moves: [
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '금속음', type: PokemonElementType.steel, power: null, description: '금속을 긁을 때 나는 듯한 싫은 소리를 들려준다. 상대의 특수방어를 크게 떨어뜨린다.' },
      { name: '쪼기', type: PokemonElementType.flying, power: 35, description: '날카롭고 뾰족한 부리나 뿔로 상대를 쪼아서 공격한다.' },
      { name: '압정뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 발밑에 압정을 뿌린다. 교체된 상대 포켓몬에게 데미지를 준다.' },
    ],
  },
  houndour: {
    flavorText: '새벽녘에 주변 일대에 울려 퍼지는 기분 나쁜 울음소리로 자신들의 영역을 어필한다.',
    stats: { hp: 45, attack: 60, defense: 30, specialAttack: 80, specialDefense: 50, speed: 65 },
    moves: [
      { name: '스모그', type: PokemonElementType.poison, power: 30, description: '더러운 가스를 상대에게 내뿜어 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '멀리짖기', type: PokemonElementType.normal, power: null, description: '큰 소리로 짖고 기합을 높여 자신의 공격을 올린다.' },
      { name: '집단구타', type: PokemonElementType.dark, power: null, description: '같은 편 전원이 공격한다. 동료 포켓몬이 많을수록 기술의 공격 횟수가 증가한다.' },
    ],
  },
  houndoom: {
    flavorText: '헬가가 으스스하게 멀리서 짖으면 지옥에서 사신이 부르는 소리라고 옛날 사람들은 상상하고 있었다.',
    stats: { hp: 75, attack: 90, defense: 50, specialAttack: 110, specialDefense: 80, speed: 95 },
    moves: [
      { name: '스모그', type: PokemonElementType.poison, power: 30, description: '더러운 가스를 상대에게 내뿜어 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '멀리짖기', type: PokemonElementType.normal, power: null, description: '큰 소리로 짖고 기합을 높여 자신의 공격을 올린다.' },
      { name: '집단구타', type: PokemonElementType.dark, power: null, description: '같은 편 전원이 공격한다. 동료 포켓몬이 많을수록 기술의 공격 횟수가 증가한다.' },
    ],
  },
  phanpy: {
    flavorText: '애정 표현으로 코를 부딪쳐 오지만 힘이 있기 때문에 조심하지 않으면 날아가 버린다.',
    stats: { hp: 90, attack: 60, defense: 60, specialAttack: 40, specialDefense: 40, speed: 40 },
    moves: [
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '힘껏치기', type: PokemonElementType.normal, power: 80, description: '긴 꼬리나 덩굴 등을 사용해 상대를 힘껏 쳐서 공격한다.' },
      { name: '비장의무기', type: PokemonElementType.normal, power: 140, description: '배틀 중에 기억하고 있는 기술을 모두 사용하면 그때부터 쓸 수 있는 필살기이다.' },
      { name: '바둥바둥', type: PokemonElementType.normal, power: null, description: '바둥바둥 난동 부려서 공격한다. 자신의 HP가 적을수록 기술의 위력이 올라간다.' },
    ],
  },
  kingdra: {
    flavorText: '평소에는 해저동굴에 몸을 숨기고 있는 것 같다. 하품으로 소용돌이를 발생시킨다.',
    stats: { hp: 75, attack: 95, defense: 95, specialAttack: 95, specialDefense: 95, speed: 85 },
    moves: [
      { name: '연막', type: PokemonElementType.normal, power: null, description: '연기나 먹물을 내뿜어 상대의 명중률을 떨어뜨린다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '용의춤', type: PokemonElementType.dragon, power: null, description: '신비롭고 힘센 춤을 격렬하게 춘다. 자신의 공격과 스피드를 올린다.' },
      { name: '회오리', type: PokemonElementType.dragon, power: 40, description: '회오리를 일으켜 상대를 끌어들여 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  donphan: {
    flavorText: '예리하고 단단한 이빨과 더욱 튼튼한 피부의 몸통박치기는 집도 부술 정도다.',
    stats: { hp: 90, attack: 120, defense: 120, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: '뿔찌르기', type: PokemonElementType.normal, power: 65, description: '날카롭고 뾰족한 뿔로 상대를 공격한다.' },
      { name: '매그니튜드', type: PokemonElementType.ground, power: null, description: '땅을 흔들어서 자신의 주위에 있는 포켓몬을 공격한다. 기술의 위력이 여러모로 바뀐다.' },
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '고속스핀', type: PokemonElementType.normal, power: 50, description: '회전해서 상대를 공격한다. 조이기, 김밥말이, 씨뿌리기, 압정뿌리기 등도 날려버린다.' },
    ],
  },
  porygon2: {
    flavorText: '더욱 연구가 진행되어 능력이 올라갔다. 가끔 프로그램에 없는 행동을 보인다.',
    stats: { hp: 85, attack: 80, defense: 90, specialAttack: 105, specialDefense: 95, speed: 60 },
    moves: [
      { name: '텍스처', type: PokemonElementType.normal, power: null, description: '자신의 타입을 배운 기술 중 가장 위에 있는 기술과 같은 타입으로 바꾼다.' },
      { name: '텍스처2', type: PokemonElementType.normal, power: null, description: '상대가 마지막으로 쓴 기술에 저항할 수 있도록 자신의 타입을 변화시킨다.' },
      { name: '록온', type: PokemonElementType.normal, power: null, description: '조준을 잘 맞춰 다음 공격이 반드시 상대에게 명중하도록 한다.' },
      { name: '트라이어택', type: PokemonElementType.normal, power: 80, description: '3개의 광선으로 공격한다. 마비, 화상 또는 얼음 상태 중 어느 하나로 만들 때가 있다.' },
    ],
  },
  stantler: {
    flavorText: '뿔을 응시하고 있으면 원의 중심에 빨려 들어가는 것 같은 이상한 기분이 든다.',
    stats: { hp: 73, attack: 95, defense: 62, specialAttack: 85, specialDefense: 65, speed: 85 },
    moves: [
      { name: '선취', type: PokemonElementType.normal, power: null, description: '위력을 올려 상대가 쓰려고 하는 기술을 먼저 쓴다. 먼저 쓰지 않으면 실패한다.' },
      { name: '짓밟기', type: PokemonElementType.normal, power: 65, description: '큰 발로 상대를 짓밟아서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
    ],
  },
  smeargle: {
    flavorText: '꼬리를 붓처럼 써서 영역에 마크를 그린다. 그 종류는 5000개 이상이다.',
    stats: { hp: 55, attack: 20, defense: 35, specialAttack: 20, specialDefense: 45, speed: 75 },
    moves: [
      { name: '스케치', type: PokemonElementType.normal, power: null, description: '상대가 쓴 기술을 자신의 것으로 만든다. 한 번 사용하면 스케치는 사라진다.' },
    ],
  },
  tyrogue: {
    flavorText: '항상 기운이 넘친다. 강해지기 위해 계속 져도 상대에게 맞선다.',
    stats: { hp: 35, attack: 35, defense: 35, specialAttack: 35, specialDefense: 35, speed: 35 },
    moves: [
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '속이기', type: PokemonElementType.normal, power: 40, description: '선제공격으로 상대를 풀죽게 한다. 배틀에 나가서 바로 쓰지 않으면 성공할 수 없다.' },
      { name: '몸통박치기', type: PokemonElementType.normal, power: 40, description: '상대를 향해서 몸 전체를 부딪쳐가며 공격한다.' },
      { name: '도우미', type: PokemonElementType.normal, power: null, description: '동료를 돕는다. 도움받은 포켓몬이 쓰는 기술의 위력은 여느 때보다 커진다.' },
    ],
  },
  hitmontop: {
    flavorText: '팽이처럼 회전하면서 싸운다. 원심력의 파워로 파괴력은 10배다.',
    stats: { hp: 50, attack: 95, defense: 95, specialAttack: 35, specialDefense: 110, speed: 70 },
    moves: [
      { name: '트리플킥', type: PokemonElementType.fighting, power: 10, description: '3회 연속으로 킥을 날려 공격한다. 기술이 맞을 때마다 위력이 올라간다.' },
      { name: '돌려차기', type: PokemonElementType.fighting, power: 60, description: '몸을 재빨리 회전시키며 걷어차서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '고속스핀', type: PokemonElementType.normal, power: 50, description: '회전해서 상대를 공격한다. 조이기, 김밥말이, 씨뿌리기, 압정뿌리기 등도 날려버린다.' },
      { name: '페인트', type: PokemonElementType.normal, power: 30, description: '방어나 판별을 하고 있는 상대에게 공격할 수 있다. 방어 효과를 해제시킨다.' },
    ],
  },
  smoochum: {
    flavorText: '입술이 제일 민감하다. 뭐든지 먼저 입술로 건드려서 어떤 것인지 확인한다.',
    stats: { hp: 45, attack: 30, defense: 15, specialAttack: 85, specialDefense: 65, speed: 65 },
    moves: [
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
      { name: '주술', type: PokemonElementType.normal, power: null, description: '하늘을 향해 기도를 올려 상대의 공격을 급소에 맞지 않게 한다.' },
      { name: '노래하기', type: PokemonElementType.normal, power: null, description: '기분 좋은 예쁜 노랫소리를 들려주고 상대를 잠듦 상태로 만든다.' },
      { name: '눈싸라기', type: PokemonElementType.ice, power: 40, description: '차가운 가랑눈을 상대에게 내뿜어 공격한다. 얼음 상태로 만들 때가 있다.' },
    ],
  },
  magby: {
    flavorText: '작은 몸이지만 체온은 600도다. 숨을 들이쉬고 내쉴 때마다 입과 코에서 불꽃이 샌다.',
    stats: { hp: 45, attack: 75, defense: 37, specialAttack: 70, specialDefense: 55, speed: 83 },
    moves: [
      { name: '분연', type: PokemonElementType.fire, power: 80, description: '새빨간 불꽃으로 자신의 주위에 있는 포켓몬을 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '스모그', type: PokemonElementType.poison, power: 30, description: '더러운 가스를 상대에게 내뿜어 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '연막', type: PokemonElementType.normal, power: null, description: '연기나 먹물을 내뿜어 상대의 명중률을 떨어뜨린다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
    ],
  },
  elekid: {
    flavorText: '양팔을 빙글빙글 휘둘러서 전기를 발생시킨다. 그러나 만들어낸 전기는 모아둘 수 없다.',
    stats: { hp: 45, attack: 63, defense: 37, specialAttack: 65, specialDefense: 55, speed: 95 },
    moves: [
      { name: '전기쇼크', type: PokemonElementType.electric, power: 40, description: '전기 자극을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '방전', type: PokemonElementType.electric, power: 80, description: '눈부신 전격으로 자신의 주위에 있는 포켓몬을 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '전광석화', type: PokemonElementType.normal, power: 40, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진한다. 반드시 선제공격할 수 있다.' },
      { name: '싫은소리', type: PokemonElementType.normal, power: null, description: '그만 귀를 막아버리고 싶은 싫은 소리를 내어 상대의 방어를 크게 떨어뜨린다.' },
    ],
  },
  miltank: {
    flavorText: '새끼가 태어났을 때에 짜낸 우유는 평상시보다 영양이 듬뿍 담겨 있다.',
    stats: { hp: 95, attack: 80, defense: 105, specialAttack: 40, specialDefense: 70, speed: 100 },
    moves: [
      { name: '우유마시기', type: PokemonElementType.normal, power: null, description: '자신의 최대 HP 절반을 회복한다. 동료에게 HP를 나누어 줄 수도 있다.' },
      { name: '잠깨움뺨치기', type: PokemonElementType.fighting, power: 70, description: '잠듦 상태의 상대에게 큰 데미지를 준다. 대신 상대는 잠에서 깬다.' },
      { name: '짓밟기', type: PokemonElementType.normal, power: 65, description: '큰 발로 상대를 짓밟아서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '치료방울', type: PokemonElementType.normal, power: null, description: '기분 좋은 방울소리를 들려주어 같은 편 전원의 상태 이상을 회복한다.' },
    ],
  },
  blissey: {
    flavorText: '해피너스가 낳은 알에는 행복이 담겨 있어서 한 입 먹으면 누구든지 웃음 띤 얼굴이 된다.',
    stats: { hp: 255, attack: 10, defense: 10, specialAttack: 75, specialDefense: 135, speed: 55 },
    moves: [
      { name: '알폭탄', type: PokemonElementType.normal, power: 100, description: '큰 알을 온 힘을 다해 상대에게 내던져서 공격한다.' },
      { name: '알낳기', type: PokemonElementType.normal, power: null, description: '자신의 최대 HP 절반을 회복한다. 동료에게 HP를 나누어 줄 수도 있다.' },
      { name: '작아지기', type: PokemonElementType.normal, power: null, description: '몸을 축소하여 작게 보임으로써 자신의 회피율을 크게 올린다.' },
      { name: '치유소원', type: PokemonElementType.psychic, power: null, description: '자신은 기절하지만 교대하여 나오는 포켓몬의 상태 이상과 HP를 회복한다.' },
    ],
  },
  raikou: {
    flavorText: '비구름을 짊어지고 있어서 어떤 때라도 번개를 칠 수 있다. 번개와 함께 떨어졌다고 한다.',
    stats: { hp: 90, attack: 85, defense: 75, specialAttack: 115, specialDefense: 100, speed: 115 },
    moves: [
      { name: '신통력', type: PokemonElementType.psychic, power: 80, description: '보이지 않는 이상한 힘을 보내어 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '스파크', type: PokemonElementType.electric, power: 65, description: '전기를 둘러 상대에게 돌진하여 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '전기쇼크', type: PokemonElementType.electric, power: 40, description: '전기 자극을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '방전', type: PokemonElementType.electric, power: 80, description: '눈부신 전격으로 자신의 주위에 있는 포켓몬을 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  entei: {
    flavorText: '새로운 화산이 생길 때마다 태어난다고 전해지는 대지를 달리는 포켓몬이다.',
    stats: { hp: 115, attack: 115, defense: 85, specialAttack: 90, specialDefense: 75, speed: 100 },
    moves: [
      { name: '분화', type: PokemonElementType.fire, power: 150, description: '분노를 폭발시켜 상대를 공격한다. 자신의 HP가 적을수록 기술의 위력이 떨어진다.' },
      { name: '분연', type: PokemonElementType.fire, power: 80, description: '새빨간 불꽃으로 자신의 주위에 있는 포켓몬을 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '짓밟기', type: PokemonElementType.normal, power: 65, description: '큰 발로 상대를 짓밟아서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '신통력', type: PokemonElementType.psychic, power: 80, description: '보이지 않는 이상한 힘을 보내어 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  suicune: {
    flavorText: '세계 곳곳을 뛰어다니며 오염된 물을 정화시킨다. 북풍과 함께 달려나간다.',
    stats: { hp: 100, attack: 75, defense: 115, specialAttack: 90, specialDefense: 115, speed: 85 },
    moves: [
      { name: '오로라빔', type: PokemonElementType.ice, power: 65, description: '무지개색의 빔을 상대에게 발사하여 공격한다. 공격을 떨어뜨릴 때가 있다.' },
      { name: '바람일으키기', type: PokemonElementType.flying, power: 40, description: '날개로 일으킨 격한 바람을 상대에게 부딪쳐서 공격한다.' },
      { name: '미러코트', type: PokemonElementType.psychic, power: null, description: '상대에게 받은 특수공격의 데미지를 2배로 만들어 그 상대에게 돌려준다.' },
      { name: '신통력', type: PokemonElementType.psychic, power: 80, description: '보이지 않는 이상한 힘을 보내어 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  larvitar: {
    flavorText: '흙을 먹으며 살고 있다. 큰 산을 하나 다 먹으면 성장을 위해 잠자기 시작한다.',
    stats: { hp: 50, attack: 64, defense: 50, specialAttack: 45, specialDefense: 50, speed: 41 },
    moves: [
      { name: '난동부리기', type: PokemonElementType.normal, power: 120, description: '2-3턴 동안 마구 난동 부려서 상대를 공격한다. 난동 부린 뒤에는 혼란에 빠진다.' },
      { name: '악의파동', type: PokemonElementType.dark, power: 80, description: '몸에서 악의로 가득한 무서운 오라를 발한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '싫은소리', type: PokemonElementType.normal, power: null, description: '그만 귀를 막아버리고 싶은 싫은 소리를 내어 상대의 방어를 크게 떨어뜨린다.' },
      { name: '물기', type: PokemonElementType.dark, power: 60, description: '날카롭고 뾰족한 이빨로 물어서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  pupitar: {
    flavorText: '암반 같은 단단한 몸이다. 압축한 가스를 분사해서 마치 로켓같이 날아간다.',
    stats: { hp: 70, attack: 84, defense: 70, specialAttack: 65, specialDefense: 70, speed: 51 },
    moves: [
      { name: '난동부리기', type: PokemonElementType.normal, power: 120, description: '2-3턴 동안 마구 난동 부려서 상대를 공격한다. 난동 부린 뒤에는 혼란에 빠진다.' },
      { name: '악의파동', type: PokemonElementType.dark, power: 80, description: '몸에서 악의로 가득한 무서운 오라를 발한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '싫은소리', type: PokemonElementType.normal, power: null, description: '그만 귀를 막아버리고 싶은 싫은 소리를 내어 상대의 방어를 크게 떨어뜨린다.' },
      { name: '물기', type: PokemonElementType.dark, power: 60, description: '날카롭고 뾰족한 이빨로 물어서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  tyranitar: {
    flavorText: '한쪽 팔을 움직이는 것만으로도 산을 무너뜨리고 땅을 울리게 하는 엄청난 힘을 감추고 있다.',
    stats: { hp: 100, attack: 134, defense: 110, specialAttack: 95, specialDefense: 100, speed: 61 },
    moves: [
      { name: '번개엄니', type: PokemonElementType.electric, power: 65, description: '전기를 모은 이빨로 문다. 상대를 풀죽게 하거나 마비 상태로 만들 때가 있다.' },
      { name: '얼음엄니', type: PokemonElementType.ice, power: 65, description: '냉기를 품은 이빨로 문다. 상대를 풀죽게 하거나 얼음 상태로 만들 때가 있다.' },
      { name: '난동부리기', type: PokemonElementType.normal, power: 120, description: '2-3턴 동안 마구 난동 부려서 상대를 공격한다. 난동 부린 뒤에는 혼란에 빠진다.' },
      { name: '불꽃엄니', type: PokemonElementType.fire, power: 65, description: '불꽃을 두른 이빨로 문다. 상대를 풀죽게 하거나 화상 상태로 만들 때가 있다.' },
    ],
  },
  lugia: {
    flavorText: '깊은 해구의 밑바닥에서 잠잔다. 루기아가 날개를 치면 40일 동안 폭풍우가 계속된다고 전해진다.',
    stats: { hp: 106, attack: 90, defense: 130, specialAttack: 90, specialDefense: 154, speed: 110 },
    moves: [
      { name: '에어로블라스트', type: PokemonElementType.flying, power: 100, description: '공기의 소용돌이를 발사하여 공격한다. 급소에 맞기 쉽다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '드래곤다이브', type: PokemonElementType.dragon, power: 100, description: '굉장한 살기로 위압하면서 몸통박치기한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '바람일으키기', type: PokemonElementType.flying, power: 40, description: '날개로 일으킨 격한 바람을 상대에게 부딪쳐서 공격한다.' },
    ],
  },
  hooh: {
    flavorText: '몸은 일곱 빛으로 빛나고 날아간 자리에는 무지개가 생긴다는 신화 속에 남아 있는 포켓몬이다.',
    stats: { hp: 106, attack: 130, defense: 90, specialAttack: 110, specialDefense: 154, speed: 90 },
    moves: [
      { name: '성스러운불꽃', type: PokemonElementType.fire, power: 100, description: '신비한 불꽃으로 상대를 태워서 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '바람일으키기', type: PokemonElementType.flying, power: 40, description: '날개로 일으킨 격한 바람을 상대에게 부딪쳐서 공격한다.' },
      { name: '날려버리기', type: PokemonElementType.normal, power: null, description: '상대를 날려버려서 교대할 포켓몬을 끌어낸다. 야생의 경우에는 배틀이 끝난다.' },
    ],
  },
  celebi: {
    flavorText: '시간을 넘어 여기저기를 방황한다. 세레비가 모습을 나타낸 숲은 초목이 무성해진다고 한다.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: '회복봉인', type: PokemonElementType.psychic, power: null, description: '5턴 동안 기술이나 특성, 지니고 있는 도구에 의한 HP 회복을 할 수 없게 한다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
      { name: '치유소원', type: PokemonElementType.psychic, power: null, description: '자신은 기절하지만 교대하여 나오는 포켓몬의 상태 이상과 HP를 회복한다.' },
      { name: 'HP회복', type: PokemonElementType.normal, power: null, description: '세포를 재생시켜 자신의 최대 HP의 절반만큼 HP를 회복한다.' },
    ],
  },
  treecko: {
    flavorText: '수직으로 된 벽도 쭉쭉 타고 올라간다. 꼬리로 공기 중의 습도를 감지해서 내일 날씨를 맞힌다.',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 65, specialDefense: 55, speed: 70 },
    moves: [
      { name: '흡수', type: PokemonElementType.grass, power: 20, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
      { name: '메가드레인', type: PokemonElementType.grass, power: 40, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
      { name: '막치기', type: PokemonElementType.normal, power: 40, description: '긴 꼬리나 손 등을 사용하여 상대를 때려서 공격한다.' },
      { name: '힘껏치기', type: PokemonElementType.normal, power: 80, description: '긴 꼬리나 덩굴 등을 사용해 상대를 힘껏 쳐서 공격한다.' },
    ],
  },
  grovyle: {
    flavorText: '발달한 넓적다리의 근육이 경이로운 순발력과 도약력을 만들어 낸다.',
    stats: { hp: 50, attack: 65, defense: 45, specialAttack: 85, specialDefense: 65, speed: 95 },
    moves: [
      { name: '리프블레이드', type: PokemonElementType.grass, power: 90, description: '잎사귀를 칼처럼 이용해 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
      { name: '흡수', type: PokemonElementType.grass, power: 20, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
      { name: '막치기', type: PokemonElementType.normal, power: 40, description: '긴 꼬리나 손 등을 사용하여 상대를 때려서 공격한다.' },
      { name: '힘껏치기', type: PokemonElementType.normal, power: 80, description: '긴 꼬리나 덩굴 등을 사용해 상대를 힘껏 쳐서 공격한다.' },
    ],
  },
  sceptile: {
    flavorText: '팔에 자란 잎사귀는 큰 나무도 싹둑 베어 넘어뜨리는 정도다. 밀림의 싸움에서는 무적이다.',
    stats: { hp: 70, attack: 85, defense: 65, specialAttack: 105, specialDefense: 85, speed: 120 },
    moves: [
      { name: '리프블레이드', type: PokemonElementType.grass, power: 90, description: '잎사귀를 칼처럼 이용해 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
      { name: '흡수', type: PokemonElementType.grass, power: 20, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
      { name: '막치기', type: PokemonElementType.normal, power: 40, description: '긴 꼬리나 손 등을 사용하여 상대를 때려서 공격한다.' },
      { name: '힘껏치기', type: PokemonElementType.normal, power: 80, description: '긴 꼬리나 덩굴 등을 사용해 상대를 힘껏 쳐서 공격한다.' },
    ],
  },
  torchic: {
    flavorText: '몸속에 불꽃 주머니를 지니고 있어서 껴안으면 따끈따끈하다. 살아 있는 한 계속 불타오른다.',
    stats: { hp: 45, attack: 60, defense: 40, specialAttack: 70, specialDefense: 50, speed: 45 },
    moves: [
      { name: '따라하기', type: PokemonElementType.flying, power: null, description: '상대가 사용한 기술을 흉내 내어 자신도 똑같은 기술을 쓴다.' },
      { name: '쪼기', type: PokemonElementType.flying, power: 35, description: '날카롭고 뾰족한 부리나 뿔로 상대를 쪼아서 공격한다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '회오리불꽃', type: PokemonElementType.fire, power: 35, description: '세차게 소용돌이치는 불꽃 속에 4-5턴 동안 상대를 가두어 공격한다.' },
    ],
  },
  combusken: {
    flavorText: '1초에 킥을 10번 날릴 정도로 발을 사용하는 기술에 능하다. 날카로운 울음소리로 위협한다.',
    stats: { hp: 60, attack: 85, defense: 60, specialAttack: 85, specialDefense: 60, speed: 55 },
    moves: [
      { name: '스카이어퍼', type: PokemonElementType.fighting, power: 85, description: '하늘을 향하는 듯한 높은 업퍼로 상대를 밀어올려 공격한다.' },
      { name: '따라하기', type: PokemonElementType.flying, power: null, description: '상대가 사용한 기술을 흉내 내어 자신도 똑같은 기술을 쓴다.' },
      { name: '두번차기', type: PokemonElementType.fighting, power: 30, description: '2개의 다리로 상대를 걷어차서 공격한다. 2회 연속으로 데미지를 준다.' },
      { name: '쪼기', type: PokemonElementType.flying, power: 35, description: '날카롭고 뾰족한 부리나 뿔로 상대를 쪼아서 공격한다.' },
    ],
  },
  blaziken: {
    flavorText: '30층 빌딩을 점프로 넘는 점프력을 가졌다. 불꽃펀치가 상대를 태운다.',
    stats: { hp: 80, attack: 120, defense: 70, specialAttack: 110, specialDefense: 70, speed: 80 },
    moves: [
      { name: '스카이어퍼', type: PokemonElementType.fighting, power: 85, description: '하늘을 향하는 듯한 높은 업퍼로 상대를 밀어올려 공격한다.' },
      { name: '블레이즈킥', type: PokemonElementType.fire, power: 85, description: '공격한 상대를 화상 상태로 만들 때가 있다. 급소에도 맞기 쉽다.' },
      { name: '따라하기', type: PokemonElementType.flying, power: null, description: '상대가 사용한 기술을 흉내 내어 자신도 똑같은 기술을 쓴다.' },
      { name: '두번차기', type: PokemonElementType.fighting, power: 30, description: '2개의 다리로 상대를 걷어차서 공격한다. 2회 연속으로 데미지를 준다.' },
    ],
  },
  marshtomp: {
    flavorText: '발밑이 질퍽거려도 잘 걸을 수 있는 튼튼한 다리를 가졌다. 진흙에 몸을 묻고 잠잔다.',
    stats: { hp: 70, attack: 85, defense: 70, specialAttack: 60, specialDefense: 70, speed: 50 },
    moves: [
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '탁류', type: PokemonElementType.water, power: 90, description: '탁해진 물을 상대에게 발사하여 공격한다. 명중률을 떨어뜨릴 때가 있다.' },
      { name: '물대포', type: PokemonElementType.water, power: 40, description: '물을 기세 좋게 상대에게 발사하여 공격한다.' },
    ],
  },
  mudkip: {
    flavorText: '커다란 꼬리지느러미로 물을 헤치면 스피드가 쑥쑥 오른다. 작은 몸이지만 힘이 장사다.',
    stats: { hp: 50, attack: 70, defense: 50, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '물대포', type: PokemonElementType.water, power: 40, description: '물을 기세 좋게 상대에게 발사하여 공격한다.' },
      { name: '바다회오리', type: PokemonElementType.water, power: 35, description: '세차게 소용돌이치는 물속에 4-5턴 동안 상대를 가두어 공격한다.' },
    ],
  },
  swampert: {
    flavorText: '돌처럼 딱딱한 팔을 한 번 휘두르는 것만으로 거대한 돌을 조각조각으로 부순다.',
    stats: { hp: 100, attack: 110, defense: 90, specialAttack: 85, specialDefense: 90, speed: 60 },
    moves: [
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '탁류', type: PokemonElementType.water, power: 90, description: '탁해진 물을 상대에게 발사하여 공격한다. 명중률을 떨어뜨릴 때가 있다.' },
      { name: '물대포', type: PokemonElementType.water, power: 40, description: '물을 기세 좋게 상대에게 발사하여 공격한다.' },
    ],
  },
  poochyena: {
    flavorText: '집요한 성격의 포켓몬이다. 점찍은 먹이가 기진맥진 지칠 때까지 뒤쫓아간다.',
    stats: { hp: 35, attack: 55, defense: 35, specialAttack: 30, specialDefense: 30, speed: 35 },
    moves: [
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '멀리짖기', type: PokemonElementType.normal, power: null, description: '큰 소리로 짖고 기합을 높여 자신의 공격을 올린다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
      { name: '물기', type: PokemonElementType.dark, power: 60, description: '날카롭고 뾰족한 이빨로 물어서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  mightyena: {
    flavorText: '우수한 트레이너의 명령에는 절대복종한다. 먼 옛날 무리를 지어 행동했던 영향이다.',
    stats: { hp: 70, attack: 90, defense: 70, specialAttack: 60, specialDefense: 60, speed: 70 },
    moves: [
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '멀리짖기', type: PokemonElementType.normal, power: null, description: '큰 소리로 짖고 기합을 높여 자신의 공격을 올린다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
      { name: '물기', type: PokemonElementType.dark, power: 60, description: '날카롭고 뾰족한 이빨로 물어서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  zigzagoon: {
    flavorText: '지그재그로 걸어서 풀숲이나 땅에 묻혀 있는 보물을 찾아내는 것이 특기인 포켓몬이다.',
    stats: { hp: 38, attack: 30, defense: 41, specialAttack: 30, specialDefense: 41, speed: 60 },
    moves: [
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: '배북', type: PokemonElementType.normal, power: null, description: '자신의 HP를 최대 HP의 절반만큼 감소시켜 자신의 공격을 최대로 올린다.' },
      { name: '바늘미사일', type: PokemonElementType.bug, power: 25, description: '날카로운 침을 상대에게 발사해서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  linoone: {
    flavorText: '똑바로 달리는 스피드는 시속 100km를 가볍게 넘는다. 휘어진 길은 매우 서툴다.',
    stats: { hp: 78, attack: 70, defense: 61, specialAttack: 50, specialDefense: 61, speed: 100 },
    moves: [
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: '배북', type: PokemonElementType.normal, power: null, description: '자신의 HP를 최대 HP의 절반만큼 감소시켜 자신의 공격을 최대로 올린다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  wurmple: {
    flavorText: '잎사귀를 매우 좋아한다. 찌르꼬에게 습격당했을 때는 엉덩이의 가시로 물리친다.',
    stats: { hp: 45, attack: 45, defense: 35, specialAttack: 20, specialDefense: 30, speed: 20 },
    moves: [
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '실뿜기', type: PokemonElementType.bug, power: null, description: '입에서 뿜어낸 실을 휘감아서 상대의 스피드를 크게 떨어뜨린다.' },
      { name: '몸통박치기', type: PokemonElementType.normal, power: 40, description: '상대를 향해서 몸 전체를 부딪쳐가며 공격한다.' },
    ],
  },
  silcoon: {
    flavorText: '실을 나뭇가지에 휘감고 있다. 실에 묻은 빗물을 마시며 진화할 때를 기다리고 있다.',
    stats: { hp: 50, attack: 35, defense: 55, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
    ],
  },
  beautifly: {
    flavorText: '색이 선명한 날개의 무늬가 특징이다. 가는 입을 뻗어 꽃의 달콤한 꿀을 흡수한다.',
    stats: { hp: 60, attack: 70, defense: 50, specialAttack: 100, specialDefense: 50, speed: 65 },
    moves: [
      { name: '아침햇살', type: PokemonElementType.normal, power: null, description: '자신의 HP를 회복한다. 날씨에 따라 회복량이 변한다.' },
      { name: '은빛바람', type: PokemonElementType.bug, power: 60, description: '바람에 날개 가루를 날려서 상대를 공격한다. 자신의 모든 능력이 올라갈 때가 있다.' },
      { name: '저리가루', type: PokemonElementType.grass, power: null, description: '저리 가루를 많이 흩뿌려서 상대를 마비 상태로 만든다.' },
      { name: '바람일으키기', type: PokemonElementType.flying, power: 40, description: '날개로 일으킨 격한 바람을 상대에게 부딪쳐서 공격한다.' },
    ],
  },
  cascoon: {
    flavorText: '부드러운 실로 된 몸은 시간이 지나면서 단단해진다. 진화가 임박하면 갈라지기 시작한다.',
    stats: { hp: 50, attack: 35, defense: 55, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
    ],
  },
  dustox: {
    flavorText: '야행성 포켓몬이다. 불빛에 이끌려나온 독케일이 가로수의 잎을 헤적거리며 먹어댄다.',
    stats: { hp: 60, attack: 50, defense: 70, specialAttack: 50, specialDefense: 90, speed: 65 },
    moves: [
      { name: '달빛', type: PokemonElementType.normal, power: null, description: '자신의 HP를 회복한다. 날씨에 따라 회복량이 변한다.' },
      { name: '은빛바람', type: PokemonElementType.bug, power: 60, description: '바람에 날개 가루를 날려서 상대를 공격한다. 자신의 모든 능력이 올라갈 때가 있다.' },
      { name: '바람일으키기', type: PokemonElementType.flying, power: 40, description: '날개로 일으킨 격한 바람을 상대에게 부딪쳐서 공격한다.' },
      { name: '날려버리기', type: PokemonElementType.normal, power: null, description: '상대를 날려버려서 교대할 포켓몬을 끌어낸다. 야생의 경우에는 배틀이 끝난다.' },
    ],
  },
  lotad: {
    flavorText: '깨끗한 물을 찾아 걷는다. 오랫동안 물을 마시지 않으면 머리의 잎이 시들어 버린다.',
    stats: { hp: 40, attack: 30, defense: 30, specialAttack: 40, specialDefense: 50, speed: 30 },
    moves: [
      { name: '흰안개', type: PokemonElementType.ice, power: null, description: '하얀 안개로 몸을 덮는다. 5턴 동안 상대에 의해 능력이 떨어지지 않게 된다.' },
      { name: '흡수', type: PokemonElementType.grass, power: 20, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
      { name: '메가드레인', type: PokemonElementType.grass, power: 40, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
      { name: '자연의힘', type: PokemonElementType.normal, power: null, description: '자연의 힘으로 공격한다. 사용하는 장소에 따라 나오는 기술이 변화한다.' },
    ],
  },
  lombre: {
    flavorText: '햇볕이 잘 드는 물가에 산다. 낮에는 수초로 된 침대에서 자고 해가 지면 활동하기 시작한다.',
    stats: { hp: 60, attack: 50, defense: 50, specialAttack: 60, specialDefense: 70, speed: 50 },
    moves: [
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
      { name: '흡수', type: PokemonElementType.grass, power: 20, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '속이기', type: PokemonElementType.normal, power: 40, description: '선제공격으로 상대를 풀죽게 한다. 배틀에 나가서 바로 쓰지 않으면 성공할 수 없다.' },
    ],
  },
  ludicolo: {
    flavorText: '경쾌한 음악을 들으면 몸속의 힘이 넘쳐흘러 춤추지 않고는 견딜 수 없게 된다.',
    stats: { hp: 80, attack: 70, defense: 70, specialAttack: 90, specialDefense: 100, speed: 70 },
    moves: [
      { name: '흡수', type: PokemonElementType.grass, power: 20, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
      { name: '자연의힘', type: PokemonElementType.normal, power: null, description: '자연의 힘으로 공격한다. 사용하는 장소에 따라 나오는 기술이 변화한다.' },
      { name: '놀래키기', type: PokemonElementType.ghost, power: 30, description: '큰 소리 등으로 불시에 놀래켜서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '울음소리', type: PokemonElementType.normal, power: null, description: '귀여운 울음소리를 들려주고 관심을 끌어 방심한 사이에 상대의 공격을 떨어뜨린다.' },
    ],
  },
  seedot: {
    flavorText: '머리끝을 가지에 붙여 매달린다. 강풍이 불어 떨어지기도 한다.',
    stats: { hp: 40, attack: 40, defense: 50, specialAttack: 30, specialDefense: 30, speed: 30 },
    moves: [
      { name: '성장', type: PokemonElementType.normal, power: null, description: '몸을 일시에 크게 성장시켜 공격과 특수공격을 올린다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
      { name: '광합성', type: PokemonElementType.grass, power: null, description: '자신의 HP를 회복한다. 날씨에 따라 회복량이 변한다.' },
      { name: '대폭발', type: PokemonElementType.normal, power: 250, description: '큰 폭발로 자신의 주위에 있는 포켓몬을 공격한다. 쓰고 나서는 기절한다.' },
    ],
  },
  nuzleaf: {
    flavorText: '잎새코가 연주하는 풀피리의 음색은 사람을 불안하게 만든다. 숲 속에서 살고 있다.',
    stats: { hp: 70, attack: 70, defense: 40, specialAttack: 60, specialDefense: 40, speed: 60 },
    moves: [
      { name: '칼바람', type: PokemonElementType.normal, power: 80, description: '바람의 칼날을 만들어 2턴째에 상대를 공격한다. 급소에 맞기 쉽다.' },
      { name: '신통력', type: PokemonElementType.psychic, power: 80, description: '보이지 않는 이상한 힘을 보내어 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '성장', type: PokemonElementType.normal, power: null, description: '몸을 일시에 크게 성장시켜 공격과 특수공격을 올린다.' },
      { name: '속이기', type: PokemonElementType.normal, power: 40, description: '선제공격으로 상대를 풀죽게 한다. 배틀에 나가서 바로 쓰지 않으면 성공할 수 없다.' },
    ],
  },
  shiftry: {
    flavorText: '숲의 신이라고 여겨져 두려움의 대상이 되고 있던 포켓몬. 상대의 생각을 읽고 앞지르는 능력을 지녔다.',
    stats: { hp: 90, attack: 100, defense: 60, specialAttack: 90, specialDefense: 60, speed: 80 },
    moves: [
      { name: '성장', type: PokemonElementType.normal, power: null, description: '몸을 일시에 크게 성장시켜 공격과 특수공격을 올린다.' },
      { name: '막치기', type: PokemonElementType.normal, power: 40, description: '긴 꼬리나 손 등을 사용하여 상대를 때려서 공격한다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
      { name: '자연의힘', type: PokemonElementType.normal, power: null, description: '자연의 힘으로 공격한다. 사용하는 장소에 따라 나오는 기술이 변화한다.' },
    ],
  },
  taillow: {
    flavorText: '강한 상대에게도 용감히 맞서는 근성의 소유자다. 따뜻한 땅을 찾아서 난다.',
    stats: { hp: 40, attack: 55, defense: 30, specialAttack: 30, specialDefense: 30, speed: 85 },
    moves: [
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '쪼기', type: PokemonElementType.flying, power: 35, description: '날카롭고 뾰족한 부리나 뿔로 상대를 쪼아서 공격한다.' },
      { name: '기충전', type: PokemonElementType.normal, power: null, description: '깊게 숨을 들이마셔 기합을 넣는다. 자신의 공격이 급소에 맞기 쉬워진다.' },
      { name: '전광석화', type: PokemonElementType.normal, power: 40, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진한다. 반드시 선제공격할 수 있다.' },
    ],
  },
  swellow: {
    flavorText: '2개의 꼬리날개가 꼿꼿하게 서 있으면 건강하다는 증거다. 우아하게 넓은 하늘을 날아다닌다.',
    stats: { hp: 60, attack: 85, defense: 60, specialAttack: 75, specialDefense: 50, speed: 125 },
    moves: [
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '쪼기', type: PokemonElementType.flying, power: 35, description: '날카롭고 뾰족한 부리나 뿔로 상대를 쪼아서 공격한다.' },
      { name: '기충전', type: PokemonElementType.normal, power: null, description: '깊게 숨을 들이마셔 기합을 넣는다. 자신의 공격이 급소에 맞기 쉬워진다.' },
      { name: '전광석화', type: PokemonElementType.normal, power: 40, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진한다. 반드시 선제공격할 수 있다.' },
    ],
  },
  wingull: {
    flavorText: '긴 날개로 바닷바람을 받아서 글라이더처럼 활공한다. 쉴 때는 날개를 접는다.',
    stats: { hp: 40, attack: 30, defense: 30, specialAttack: 55, specialDefense: 30, speed: 85 },
    moves: [
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '흰안개', type: PokemonElementType.ice, power: null, description: '하얀 안개로 몸을 덮는다. 5턴 동안 상대에 의해 능력이 떨어지지 않게 된다.' },
      { name: '초음파', type: PokemonElementType.normal, power: null, description: '특수한 음파를 몸에서 발산하여 상대를 혼란시킨다.' },
      { name: '따라가때리기', type: PokemonElementType.dark, power: 40, description: '상대 포켓몬이 교체될 때 기술을 쓰면 2배의 위력으로 공격할 수 있다.' },
    ],
  },
  pelipper: {
    flavorText: '큰 부리를 바다에 넣고 먹이를 한 번에 많이 건져 올리려는 속셈이다.',
    stats: { hp: 60, attack: 50, defense: 100, specialAttack: 95, specialDefense: 70, speed: 65 },
    moves: [
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
      { name: '토해내기', type: PokemonElementType.normal, power: null, description: '비축된 힘을 상대에게 부딪쳐서 공격한다. 비축된 만큼 위력이 올라간다.' },
      { name: '꿀꺽', type: PokemonElementType.normal, power: null, description: '비축된 힘을 꿀꺽해서 자신의 HP를 회복한다. 비축된 만큼 회복한다.' },
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
    ],
  },
  ralts: {
    flavorText: '빨간 뿔로 사람이나 포켓몬의 따뜻한 마음을 캐치하면 전신이 미약하게 뜨거워진다.',
    stats: { hp: 28, attack: 25, defense: 25, specialAttack: 45, specialDefense: 35, speed: 40 },
    moves: [
      { name: '순간이동', type: PokemonElementType.psychic, power: null, description: '야생 포켓몬과 배틀을 그만둔다. 마지막에 들어갔던 포켓몬센터가 있는 도시에도 갈 수 있다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
      { name: '염동력', type: PokemonElementType.psychic, power: 50, description: '약한 염동력을 상대에게 보내어 공격한다. 상대를 혼란시킬 때가 있다.' },
      { name: '미래예지', type: PokemonElementType.psychic, power: 120, description: '기술을 사용한 2턴 뒤에 상대에게 염동력의 덩어리를 보내어 공격한다.' },
    ],
  },
  kirlia: {
    flavorText: '트레이너의 밝은 마음이 사이코 파워의 근원이다. 즐거워지면 빙글빙글 춤춘다.',
    stats: { hp: 38, attack: 35, defense: 35, specialAttack: 65, specialDefense: 55, speed: 50 },
    moves: [
      { name: '순간이동', type: PokemonElementType.psychic, power: null, description: '야생 포켓몬과 배틀을 그만둔다. 마지막에 들어갔던 포켓몬센터가 있는 도시에도 갈 수 있다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
      { name: '염동력', type: PokemonElementType.psychic, power: 50, description: '약한 염동력을 상대에게 보내어 공격한다. 상대를 혼란시킬 때가 있다.' },
      { name: '미래예지', type: PokemonElementType.psychic, power: 120, description: '기술을 사용한 2턴 뒤에 상대에게 염동력의 덩어리를 보내어 공격한다.' },
    ],
  },
  gardevoir: {
    flavorText: '트레이너를 지키기 위해서라면 사이코 파워를 모두 써서 작은 블랙홀을 만들어 낸다.',
    stats: { hp: 68, attack: 65, defense: 65, specialAttack: 125, specialDefense: 115, speed: 80 },
    moves: [
      { name: '순간이동', type: PokemonElementType.psychic, power: null, description: '야생 포켓몬과 배틀을 그만둔다. 마지막에 들어갔던 포켓몬센터가 있는 도시에도 갈 수 있다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
      { name: '염동력', type: PokemonElementType.psychic, power: 50, description: '약한 염동력을 상대에게 보내어 공격한다. 상대를 혼란시킬 때가 있다.' },
      { name: '미래예지', type: PokemonElementType.psychic, power: 120, description: '기술을 사용한 2턴 뒤에 상대에게 염동력의 덩어리를 보내어 공격한다.' },
    ],
  },
  surskit: {
    flavorText: '보통은 연못에서 살고 있지만 소나기가 온 뒤에는 마을 안의 물웅덩이에 모습을 드러낸다.',
    stats: { hp: 40, attack: 30, defense: 32, specialAttack: 50, specialDefense: 52, speed: 65 },
    moves: [
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '흰안개', type: PokemonElementType.ice, power: null, description: '하얀 안개로 몸을 덮는다. 5턴 동안 상대에 의해 능력이 떨어지지 않게 된다.' },
      { name: '달콤한향기', type: PokemonElementType.normal, power: null, description: '향기로 상대의 회피율을 크게 떨어뜨린다. 풀밭 등에서 쓰면 포켓몬이 다가온다.' },
    ],
  },
  masquerain: {
    flavorText: '눈알 모양의 더듬이를 가지고 있다. 4장의 날개로 떠올라 전후좌우로 움직일 수 있다.',
    stats: { hp: 70, attack: 60, defense: 62, specialAttack: 100, specialDefense: 82, speed: 80 },
    moves: [
      { name: '은빛바람', type: PokemonElementType.bug, power: 60, description: '바람에 날개 가루를 날려서 상대를 공격한다. 자신의 모든 능력이 올라갈 때가 있다.' },
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
      { name: '저리가루', type: PokemonElementType.grass, power: null, description: '저리 가루를 많이 흩뿌려서 상대를 마비 상태로 만든다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
    ],
  },
  shroomish: {
    flavorText: '습한 장소를 좋아해서 낮에는 숲의 그늘에서 가만히 있다. 머리에서 독가루를 뿌린다.',
    stats: { hp: 60, attack: 40, defense: 60, specialAttack: 40, specialDefense: 60, speed: 35 },
    moves: [
      { name: '버섯포자', type: PokemonElementType.grass, power: null, description: '최면 효과가 있는 포자를 훌훌 흩뿌려서 상대를 잠듦 상태로 만든다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
      { name: '저리가루', type: PokemonElementType.grass, power: null, description: '저리 가루를 많이 흩뿌려서 상대를 마비 상태로 만든다.' },
      { name: '성장', type: PokemonElementType.normal, power: null, description: '몸을 일시에 크게 성장시켜 공격과 특수공격을 올린다.' },
    ],
  },
  breloom: {
    flavorText: '짧은 팔은 펀치를 날릴 때 쑤-욱 늘어난다. 프로 복서를 압도하는 기술을 가지고 있다.',
    stats: { hp: 60, attack: 130, defense: 80, specialAttack: 60, specialDefense: 60, speed: 70 },
    moves: [
      { name: '스카이어퍼', type: PokemonElementType.fighting, power: 85, description: '하늘을 향하는 듯한 높은 업퍼로 상대를 밀어올려 공격한다.' },
      { name: '마하펀치', type: PokemonElementType.fighting, power: 40, description: '눈에 보이지 않는 굉장한 속도로 펀치를 날린다. 반드시 선제공격을 할 수 있다.' },
      { name: '마음의눈', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 마음으로 읽고 다음 공격이 반드시 상대에게 명중되게 한다.' },
      { name: '저리가루', type: PokemonElementType.grass, power: null, description: '저리 가루를 많이 흩뿌려서 상대를 마비 상태로 만든다.' },
    ],
  },
  nincada: {
    flavorText: '긴 시간 동안 땅속에서 살고 있었기 때문에 눈은 거의 보이지 않는다. 더듬이로 주변 상황을 살핀다.',
    stats: { hp: 31, attack: 45, defense: 90, specialAttack: 30, specialDefense: 30, speed: 40 },
    moves: [
      { name: '마음의눈', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 마음으로 읽고 다음 공격이 반드시 상대에게 명중되게 한다.' },
      { name: '흡혈', type: PokemonElementType.bug, power: 80, description: '피를 빨아서 상대를 공격한다. 준 데미지의 절반을 HP로 회복한다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
    ],
  },
  slakoth: {
    flavorText: '게을로의 게으른 모습은 보고 있는 사람의 게으른 마음을 충분히 자극한다.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 35, specialDefense: 35, speed: 30 },
    moves: [
      { name: '게으름피우기', type: PokemonElementType.normal, power: null, description: '게으름 피우며 쉰다. 자신의 HP를 최대 HP의 절반만큼 회복한다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
      { name: '하품', type: PokemonElementType.normal, power: null, description: '큰 하품으로 졸음을 유도한다. 다음 턴에 상대를 잠듦 상태로 만든다.' },
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
    ],
  },
  vigoroth: {
    flavorText: '심장 박동이 빨라 전신의 피가 끓어오르고 있기 때문에 1초도 가만히 있지 못한다.',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 55, specialDefense: 55, speed: 90 },
    moves: [
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
      { name: '베어가르기', type: PokemonElementType.normal, power: 70, description: '발톱이나 낫 등으로 상대를 베어 갈라서 공격한다. 급소에 맞기 쉽다.' },
      { name: '기충전', type: PokemonElementType.normal, power: null, description: '깊게 숨을 들이마셔 기합을 넣는다. 자신의 공격이 급소에 맞기 쉬워진다.' },
    ],
  },
  slaking: {
    flavorText: '세계에서 제일 게으른 포켓몬이다. 손이 닿는 범위의 먹이를 다 먹으면 있는 거처를 바꾼다.',
    stats: { hp: 150, attack: 160, defense: 100, specialAttack: 95, specialDefense: 65, speed: 100 },
    moves: [
      { name: '게으름피우기', type: PokemonElementType.normal, power: null, description: '게으름 피우며 쉰다. 자신의 HP를 최대 HP의 절반만큼 회복한다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
      { name: '하품', type: PokemonElementType.normal, power: null, description: '큰 하품으로 졸음을 유도한다. 다음 턴에 상대를 잠듦 상태로 만든다.' },
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
    ],
  },
  ninjask: {
    flavorText: '울음소리를 계속 들으면 두통이 낫지 않게 된다. 안 보일 정도의 스피드로 움직인다.',
    stats: { hp: 61, attack: 90, defense: 45, specialAttack: 50, specialDefense: 50, speed: 160 },
    moves: [
      { name: '마음의눈', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 마음으로 읽고 다음 공격이 반드시 상대에게 명중되게 한다.' },
      { name: '흡혈', type: PokemonElementType.bug, power: 80, description: '피를 빨아서 상대를 공격한다. 준 데미지의 절반을 HP로 회복한다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
    ],
  },
  shedinja: {
    flavorText: '허물 속으로 영혼이 들어갔다. 등에 난 틈새로 들여다보면 영혼을 빼앗겨버린다고 한다.',
    stats: { hp: 1, attack: 90, defense: 45, specialAttack: 30, specialDefense: 30, speed: 40 },
    moves: [
      { name: '원념', type: PokemonElementType.ghost, power: null, description: '상대의 기술로 기절하면 원념을 담아 그 기술의 PP를 0으로 만든다.' },
      { name: '마음의눈', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 마음으로 읽고 다음 공격이 반드시 상대에게 명중되게 한다.' },
      { name: '흡혈', type: PokemonElementType.bug, power: 80, description: '피를 빨아서 상대를 공격한다. 준 데미지의 절반을 HP로 회복한다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  whismur: {
    flavorText: '평소에는 속삭이는 듯한 목소리다. 위험을 감지하면 큰 소리로 울기 시작한다. 귀의 덮개를 닫으면 울음을 멈춘다.',
    stats: { hp: 64, attack: 51, defense: 23, specialAttack: 51, specialDefense: 23, speed: 28 },
    moves: [
      { name: '멀리짖기', type: PokemonElementType.normal, power: null, description: '큰 소리로 짖고 기합을 높여 자신의 공격을 올린다.' },
      { name: '짓밟기', type: PokemonElementType.normal, power: 65, description: '큰 발로 상대를 짓밟아서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '초음파', type: PokemonElementType.normal, power: null, description: '특수한 음파를 몸에서 발산하여 상대를 혼란시킨다.' },
      { name: '막치기', type: PokemonElementType.normal, power: 40, description: '긴 꼬리나 손 등을 사용하여 상대를 때려서 공격한다.' },
    ],
  },
  loudred: {
    flavorText: '마음껏 들이마신 공기를 발달한 복근을 써서 토해내 큰 소리를 낸다.',
    stats: { hp: 84, attack: 71, defense: 43, specialAttack: 71, specialDefense: 43, speed: 48 },
    moves: [
      { name: '멀리짖기', type: PokemonElementType.normal, power: null, description: '큰 소리로 짖고 기합을 높여 자신의 공격을 올린다.' },
      { name: '짓밟기', type: PokemonElementType.normal, power: 65, description: '큰 발로 상대를 짓밟아서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '초음파', type: PokemonElementType.normal, power: null, description: '특수한 음파를 몸에서 발산하여 상대를 혼란시킨다.' },
      { name: '막치기', type: PokemonElementType.normal, power: 40, description: '긴 꼬리나 손 등을 사용하여 상대를 때려서 공격한다.' },
    ],
  },
  exploud: {
    flavorText: '폭음룡이 짖는 소리는 10km 전방까지 닿는다. 몸 곳곳의 구멍에서 갖가지 소리를 낸다.',
    stats: { hp: 104, attack: 91, defense: 63, specialAttack: 91, specialDefense: 73, speed: 68 },
    moves: [
      { name: '멀리짖기', type: PokemonElementType.normal, power: null, description: '큰 소리로 짖고 기합을 높여 자신의 공격을 올린다.' },
      { name: '짓밟기', type: PokemonElementType.normal, power: 65, description: '큰 발로 상대를 짓밟아서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '초음파', type: PokemonElementType.normal, power: null, description: '특수한 음파를 몸에서 발산하여 상대를 혼란시킨다.' },
      { name: '막치기', type: PokemonElementType.normal, power: 40, description: '긴 꼬리나 손 등을 사용하여 상대를 때려서 공격한다.' },
    ],
  },
  makuhita: {
    flavorText: '큰 나무에 몇 번이나 몸통박치기를 하며 강인한 몸과 굴하지 않는 마음을 단련한다.',
    stats: { hp: 72, attack: 60, defense: 30, specialAttack: 20, specialDefense: 30, speed: 25 },
    moves: [
      { name: '손바닥치기', type: PokemonElementType.fighting, power: 15, description: '펼친 양손으로 상대를 번갈아 쳐서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '받아던지기', type: PokemonElementType.fighting, power: 70, description: '상대보다 나중에 공격한다. 그 대신 자신의 공격은 반드시 명중한다.' },
      { name: '정신차리기', type: PokemonElementType.normal, power: 70, description: '마비 상태의 상대에게는 위력이 2배가 되지만 대신 상대의 마비가 풀린다.' },
      { name: '배북', type: PokemonElementType.normal, power: null, description: '자신의 HP를 최대 HP의 절반만큼 감소시켜 자신의 공격을 최대로 올린다.' },
    ],
  },
  hariyama: {
    flavorText: '두 다리로 땅을 힘껏 밟아서 파워를 모은다. 손바닥 치기 한 방으로 10톤 트럭을 날려버린다.',
    stats: { hp: 144, attack: 120, defense: 60, specialAttack: 40, specialDefense: 60, speed: 50 },
    moves: [
      { name: '손바닥치기', type: PokemonElementType.fighting, power: 15, description: '펼친 양손으로 상대를 번갈아 쳐서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '받아던지기', type: PokemonElementType.fighting, power: 70, description: '상대보다 나중에 공격한다. 그 대신 자신의 공격은 반드시 명중한다.' },
      { name: '정신차리기', type: PokemonElementType.normal, power: 70, description: '마비 상태의 상대에게는 위력이 2배가 되지만 대신 상대의 마비가 풀린다.' },
      { name: '배북', type: PokemonElementType.normal, power: null, description: '자신의 HP를 최대 HP의 절반만큼 감소시켜 자신의 공격을 최대로 올린다.' },
    ],
  },
  azurill: {
    flavorText: '큰 꼬리에 타고 튀면 지상에서 빨리 이동할 수 있다. 물가에서 사는 포켓몬이다.',
    stats: { hp: 50, attack: 20, defense: 40, specialAttack: 20, specialDefense: 40, speed: 20 },
    moves: [
      { name: '튀어오르기', type: PokemonElementType.normal, power: null, description: '공격도 하지 않고 팔딱팔딱 튈 뿐 아무 일도 일어나지 않는다...' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '힘껏치기', type: PokemonElementType.normal, power: 80, description: '긴 꼬리나 덩굴 등을 사용해 상대를 힘껏 쳐서 공격한다.' },
      { name: '꼬리흔들기', type: PokemonElementType.normal, power: null, description: '꼬리를 좌우로 귀엽게 흔들어 방심을 유도한다. 상대의 방어를 떨어뜨린다.' },
    ],
  },
  nosepass: {
    flavorText: '항상 북쪽을 향한다. 자석의 코로 주변의 철을 끌어당겨 방어를 굳힌다.',
    stats: { hp: 30, attack: 45, defense: 135, specialAttack: 45, specialDefense: 90, speed: 30 },
    moves: [
      { name: '록온', type: PokemonElementType.normal, power: null, description: '조준을 잘 맞춰 다음 공격이 반드시 상대에게 명중하도록 한다.' },
      { name: '돌떨구기', type: PokemonElementType.rock, power: 50, description: '작은 바위를 들어올려 상대에게 내던져서 공격한다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
      { name: '전자포', type: PokemonElementType.electric, power: 120, description: '대포처럼 전기를 발사해서 공격한다. 상대를 마비 상태로 만든다.' },
    ],
  },
  delcatty: {
    flavorText: '더러운 곳을 아주 싫어한다. 편안한 곳에서 늘 털을 다듬고 있다.',
    stats: { hp: 70, attack: 65, defense: 65, specialAttack: 55, specialDefense: 55, speed: 90 },
    moves: [
      { name: '연속뺨치기', type: PokemonElementType.normal, power: 15, description: '연속 뺨치기로 상대를 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '노래하기', type: PokemonElementType.normal, power: null, description: '기분 좋은 예쁜 노랫소리를 들려주고 상대를 잠듦 상태로 만든다.' },
      { name: '울음소리', type: PokemonElementType.normal, power: null, description: '귀여운 울음소리를 들려주고 관심을 끌어 방심한 사이에 상대의 공격을 떨어뜨린다.' },
      { name: '헤롱헤롱', type: PokemonElementType.normal, power: null, description: '수컷은 암컷을 암컷은 수컷을 유혹하여 헤롱헤롱하게 만든다. 상대가 기술을 쓰기 어려워진다.' },
    ],
  },
  skitty: {
    flavorText: '움직이는 것을 무심코 쫓아간다. 자신의 꼬리를 쫓아서 똑같은 장소를 빙글빙글 돈다.',
    stats: { hp: 50, attack: 45, defense: 45, specialAttack: 35, specialDefense: 35, speed: 50 },
    moves: [
      { name: '조수', type: PokemonElementType.normal, power: null, description: '서둘러서 같은 편의 도움을 받아 교대 포켓몬이 기억하고 있는 기술 중 하나를 쓴다.' },
      { name: '연속뺨치기', type: PokemonElementType.normal, power: 15, description: '연속 뺨치기로 상대를 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '노래하기', type: PokemonElementType.normal, power: null, description: '기분 좋은 예쁜 노랫소리를 들려주고 상대를 잠듦 상태로 만든다.' },
      { name: '치료방울', type: PokemonElementType.normal, power: null, description: '기분 좋은 방울소리를 들려주어 같은 편 전원의 상태 이상을 회복한다.' },
    ],
  },
  sableye: {
    flavorText: '날카로운 발톱으로 땅을 파고 돌을 먹는다. 돌에 포함된 성분은 결정이 되어 몸의 표면에 나타난다.',
    stats: { hp: 50, attack: 75, defense: 75, specialAttack: 65, specialDefense: 65, speed: 50 },
    moves: [
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '검은눈빛', type: PokemonElementType.normal, power: null, description: '빨려 들어갈 것 같은 까만 눈빛으로 가만히 응시하여 상대를 배틀에서 도망갈 수 없게 한다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '속이기', type: PokemonElementType.normal, power: 40, description: '선제공격으로 상대를 풀죽게 한다. 배틀에 나가서 바로 쓰지 않으면 성공할 수 없다.' },
    ],
  },
  mawile: {
    flavorText: '얌전한 얼굴로 상대를 방심하게 만들고 큰 턱으로 덥석 문다. 한번 물면 절대로 놓지 않는다.',
    stats: { hp: 50, attack: 85, defense: 85, specialAttack: 55, specialDefense: 55, speed: 50 },
    moves: [
      { name: '찝기', type: PokemonElementType.normal, power: 55, description: '상대를 양쪽에서 집어서 데미지를 준다.' },
      { name: '토해내기', type: PokemonElementType.normal, power: null, description: '비축된 힘을 상대에게 부딪쳐서 공격한다. 비축된 만큼 위력이 올라간다.' },
      { name: '꿀꺽', type: PokemonElementType.normal, power: null, description: '비축된 힘을 꿀꺽해서 자신의 HP를 회복한다. 비축된 만큼 회복한다.' },
      { name: '비축하기', type: PokemonElementType.normal, power: null, description: '힘을 비축해서 자신의 방어와 특수방어를 올린다. 최대 3회까지 비축할 수 있다.' },
    ],
  },
  aron: {
    flavorText: '평소에는 산속에서 살고 있지만 배가 고프면 산기슭에 나타나 선로나 차를 먹어 버린다.',
    stats: { hp: 50, attack: 70, defense: 100, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: '금속음', type: PokemonElementType.steel, power: null, description: '금속을 긁을 때 나는 듯한 싫은 소리를 들려준다. 상대의 특수방어를 크게 떨어뜨린다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
      { name: '메탈클로', type: PokemonElementType.steel, power: 50, description: '강철의 발톱으로 상대를 베어 갈라 공격한다. 자신의 공격이 올라갈 때도 있다.' },
      { name: '울부짖기', type: PokemonElementType.normal, power: null, description: '상대를 도망가게 해서 교대할 포켓몬을 끌어낸다. 야생의 경우에는 배틀이 끝난다.' },
    ],
  },
  lairon: {
    flavorText: '철광석을 매우 좋아한다. 강철의 몸을 서로 부딪치며 영역 싸움을 한다.',
    stats: { hp: 60, attack: 90, defense: 140, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: '금속음', type: PokemonElementType.steel, power: null, description: '금속을 긁을 때 나는 듯한 싫은 소리를 들려준다. 상대의 특수방어를 크게 떨어뜨린다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
      { name: '메탈클로', type: PokemonElementType.steel, power: 50, description: '강철의 발톱으로 상대를 베어 갈라 공격한다. 자신의 공격이 올라갈 때도 있다.' },
      { name: '울부짖기', type: PokemonElementType.normal, power: null, description: '상대를 도망가게 해서 교대할 포켓몬을 끌어낸다. 야생의 경우에는 배틀이 끝난다.' },
    ],
  },
  aggron: {
    flavorText: '산을 통째로 영역으로 한다. 상처가 많은 보스로라일수록 많이 싸웠다는 것이므로 얕볼 수 없다.',
    stats: { hp: 70, attack: 110, defense: 180, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: '금속음', type: PokemonElementType.steel, power: null, description: '금속을 긁을 때 나는 듯한 싫은 소리를 들려준다. 상대의 특수방어를 크게 떨어뜨린다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
      { name: '메탈클로', type: PokemonElementType.steel, power: 50, description: '강철의 발톱으로 상대를 베어 갈라 공격한다. 자신의 공격이 올라갈 때도 있다.' },
      { name: '울부짖기', type: PokemonElementType.normal, power: null, description: '상대를 도망가게 해서 교대할 포켓몬을 끌어낸다. 야생의 경우에는 배틀이 끝난다.' },
    ],
  },
  meditite: {
    flavorText: '평상시는 깊은 산속에서 수행한다. 명상을 하고 정신력을 높이면 몸이 떠오른다.',
    stats: { hp: 30, attack: 40, defense: 55, specialAttack: 40, specialDefense: 55, speed: 60 },
    moves: [
      { name: '요가포즈', type: PokemonElementType.psychic, power: null, description: '잠들어 있는 힘을 몸속에서 끌어내어 자신의 공격을 올린다.' },
      { name: '마음의눈', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 마음으로 읽고 다음 공격이 반드시 상대에게 명중되게 한다.' },
      { name: '무릎차기', type: PokemonElementType.fighting, power: 130, description: '점프해서 무릎차기로 상대를 공격한다. 빗나가면 자신이 데미지를 입는다.' },
      { name: 'HP회복', type: PokemonElementType.normal, power: null, description: '세포를 재생시켜 자신의 최대 HP의 절반만큼 HP를 회복한다.' },
    ],
  },
  medicham: {
    flavorText: '춤추는 듯한 우아한 움직임으로 공격을 피하며 상대에게 강력한 일격을 선사한다.',
    stats: { hp: 60, attack: 60, defense: 75, specialAttack: 60, specialDefense: 75, speed: 80 },
    moves: [
      { name: '요가포즈', type: PokemonElementType.psychic, power: null, description: '잠들어 있는 힘을 몸속에서 끌어내어 자신의 공격을 올린다.' },
      { name: '마음의눈', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 마음으로 읽고 다음 공격이 반드시 상대에게 명중되게 한다.' },
      { name: '무릎차기', type: PokemonElementType.fighting, power: 130, description: '점프해서 무릎차기로 상대를 공격한다. 빗나가면 자신이 데미지를 입는다.' },
      { name: 'HP회복', type: PokemonElementType.normal, power: null, description: '세포를 재생시켜 자신의 최대 HP의 절반만큼 HP를 회복한다.' },
    ],
  },
  electrike: {
    flavorText: '털에 모은 전기를 써서 근육을 자극함으로써 순발력을 높인다.',
    stats: { hp: 40, attack: 45, defense: 40, specialAttack: 65, specialDefense: 40, speed: 65 },
    moves: [
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '멀리짖기', type: PokemonElementType.normal, power: null, description: '큰 소리로 짖고 기합을 높여 자신의 공격을 올린다.' },
      { name: '스파크', type: PokemonElementType.electric, power: 65, description: '전기를 둘러 상대에게 돌진하여 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
    ],
  },
  manectric: {
    flavorText: '좀처럼 사람 앞에 모습을 드러내지 않는다. 번개가 떨어진 곳에 보금자리가 있다고 한다.',
    stats: { hp: 70, attack: 75, defense: 60, specialAttack: 105, specialDefense: 60, speed: 105 },
    moves: [
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '멀리짖기', type: PokemonElementType.normal, power: null, description: '큰 소리로 짖고 기합을 높여 자신의 공격을 올린다.' },
      { name: '스파크', type: PokemonElementType.electric, power: 65, description: '전기를 둘러 상대에게 돌진하여 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
    ],
  },
  plusle: {
    flavorText: '스파크를 톡톡 만들어 동료를 응원한다. 전신주에서 전기를 흡수한다.',
    stats: { hp: 60, attack: 50, defense: 40, specialAttack: 85, specialDefense: 75, speed: 95 },
    moves: [
      { name: '스파크', type: PokemonElementType.electric, power: 65, description: '전기를 둘러 상대에게 돌진하여 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
      { name: '거짓울음', type: PokemonElementType.dark, power: null, description: '우는 척을 하며 눈물을 흘린다. 난처하게 만들어 상대의 특수방어를 크게 떨어뜨린다.' },
      { name: '전광석화', type: PokemonElementType.normal, power: 40, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진한다. 반드시 선제공격할 수 있다.' },
    ],
  },
  minun: {
    flavorText: '마이농과 플러시의 전기는 혈액의 흐름을 좋게 하여 근육 결림을 푸는 효과가 있다.',
    stats: { hp: 60, attack: 40, defense: 50, specialAttack: 75, specialDefense: 85, speed: 95 },
    moves: [
      { name: '스파크', type: PokemonElementType.electric, power: 65, description: '전기를 둘러 상대에게 돌진하여 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
      { name: '전광석화', type: PokemonElementType.normal, power: 40, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진한다. 반드시 선제공격할 수 있다.' },
      { name: '배턴터치', type: PokemonElementType.normal, power: null, description: '교대 포켓몬과 바뀐다. 능력 변화는 바뀐 포켓몬이 그대로 이어받는다.' },
    ],
  },
  illumise: {
    flavorText: '달콤한 향기로 볼비트를 유도해서 200개 이상의 모양을 밤하늘에 그린다.',
    stats: { hp: 65, attack: 47, defense: 75, specialAttack: 73, specialDefense: 85, speed: 85 },
    moves: [
      { name: '달빛', type: PokemonElementType.normal, power: null, description: '자신의 HP를 회복한다. 날씨에 따라 회복량이 변한다.' },
      { name: '부추기기', type: PokemonElementType.dark, power: null, description: '상대를 부추겨서 혼란시킨다. 동시에 상대의 특수공격도 올라가 버린다.' },
      { name: '희망사항', type: PokemonElementType.normal, power: null, description: '다음 턴에 자신의 HP를 최대 HP의 절반만큼 회복한다.' },
      { name: '달콤한향기', type: PokemonElementType.normal, power: null, description: '향기로 상대의 회피율을 크게 떨어뜨린다. 풀밭 등에서 쓰면 포켓몬이 다가온다.' },
    ],
  },
  volbeat: {
    flavorText: '밤이 되면 엉덩이를 빛나게 해 동료와 대화한다. 네오비트가 내는 달콤한 향기를 매우 좋아한다.',
    stats: { hp: 65, attack: 73, defense: 75, specialAttack: 47, specialDefense: 85, speed: 85 },
    moves: [
      { name: '반딧불', type: PokemonElementType.bug, power: null, description: '깜빡거리는 빛을 바라보고 자신의 정신을 통일하여 특수공격을 매우 크게 올린다.' },
      { name: '달빛', type: PokemonElementType.normal, power: null, description: '자신의 HP를 회복한다. 날씨에 따라 회복량이 변한다.' },
      { name: '전광석화', type: PokemonElementType.normal, power: 40, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진한다. 반드시 선제공격할 수 있다.' },
      { name: '이상한빛', type: PokemonElementType.ghost, power: null, description: '이상한 빛을 상대에게 비춰 당황하게 한다. 상대를 혼란시킨다.' },
    ],
  },
  roselia: {
    flavorText: '오른손과 왼손으로 2종류의 독을 구별하여 공격한다. 향기가 강할수록 기운이 넘친다.',
    stats: { hp: 50, attack: 60, defense: 45, specialAttack: 100, specialDefense: 80, speed: 65 },
    moves: [
      { name: '풀피리', type: PokemonElementType.grass, power: null, description: '기분 좋은 피리 소리를 들려주어 상대를 잠듦 상태로 만든다.' },
      { name: '꽃잎댄스', type: PokemonElementType.grass, power: 120, description: '2-3턴 동안 꽃을 흩뿌려서 상대를 공격한다. 흩뿌린 뒤에는 혼란에 빠진다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '뿌리박기', type: PokemonElementType.grass, power: null, description: '대지에 뿌리를 박아 매 턴마다 자신의 HP를 회복한다. 뿌리 박고 있으므로 교체할 수 없다.' },
    ],
  },
  gulpin: {
    flavorText: '심장과 뇌가 작고 몸 대부분이 위다. 무엇이든 녹이는 위액을 낸다.',
    stats: { hp: 70, attack: 43, defense: 53, specialAttack: 43, specialDefense: 53, speed: 40 },
    moves: [
      { name: '오물공격', type: PokemonElementType.poison, power: 65, description: '더러운 오물을 상대에게 내던져서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '독가스', type: PokemonElementType.poison, power: null, description: '독가스를 상대의 얼굴에 내뿜어 독 상태로 만든다.' },
      { name: '토해내기', type: PokemonElementType.normal, power: null, description: '비축된 힘을 상대에게 부딪쳐서 공격한다. 비축된 만큼 위력이 올라간다.' },
      { name: '꿀꺽', type: PokemonElementType.normal, power: null, description: '비축된 힘을 꿀꺽해서 자신의 HP를 회복한다. 비축된 만큼 회복한다.' },
    ],
  },
  swalot: {
    flavorText: '이빨이 하나도 없어서 무엇이든 통째로 삼킨다. 최대한 벌린 입은 정말 커서 자동차 타이어마저도 쑥 들어간다.',
    stats: { hp: 100, attack: 73, defense: 83, specialAttack: 73, specialDefense: 83, speed: 55 },
    moves: [
      { name: '오물공격', type: PokemonElementType.poison, power: 65, description: '더러운 오물을 상대에게 내던져서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '독가스', type: PokemonElementType.poison, power: null, description: '독가스를 상대의 얼굴에 내뿜어 독 상태로 만든다.' },
      { name: '토해내기', type: PokemonElementType.normal, power: null, description: '비축된 힘을 상대에게 부딪쳐서 공격한다. 비축된 만큼 위력이 올라간다.' },
      { name: '꿀꺽', type: PokemonElementType.normal, power: null, description: '비축된 힘을 꿀꺽해서 자신의 HP를 회복한다. 비축된 만큼 회복한다.' },
    ],
  },
  carvanha: {
    flavorText: '집단으로 배를 공격해 배의 밑바닥도 물어뜯어 가라앉힌다. 정글의 강에 서식한다.',
    stats: { hp: 45, attack: 90, defense: 20, specialAttack: 65, specialDefense: 20, speed: 65 },
    moves: [
      { name: '분노', type: PokemonElementType.normal, power: 20, description: '기술을 썼을 때 공격을 받으면 분노의 힘으로 공격이 올라간다.' },
      { name: '기충전', type: PokemonElementType.normal, power: null, description: '깊게 숨을 들이마셔 기합을 넣는다. 자신의 공격이 급소에 맞기 쉬워진다.' },
      { name: '싫은소리', type: PokemonElementType.normal, power: null, description: '그만 귀를 막아버리고 싶은 싫은 소리를 내어 상대의 방어를 크게 떨어뜨린다.' },
      { name: '물기', type: PokemonElementType.dark, power: 60, description: '날카롭고 뾰족한 이빨로 물어서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  sharpedo: {
    flavorText: '철판도 물어 찢는 이빨을 가지며 헤엄치는 속도는 시속 120km다. 별명은 바다의 건달이다.',
    stats: { hp: 70, attack: 120, defense: 40, specialAttack: 95, specialDefense: 40, speed: 95 },
    moves: [
      { name: '로켓박치기', type: PokemonElementType.normal, power: 130, description: '1턴째에 머리를 움츠려 방어를 올린다. 2턴째에 상대를 공격한다.' },
      { name: '베어가르기', type: PokemonElementType.normal, power: 70, description: '발톱이나 낫 등으로 상대를 베어 갈라서 공격한다. 급소에 맞기 쉽다.' },
      { name: '분노', type: PokemonElementType.normal, power: 20, description: '기술을 썼을 때 공격을 받으면 분노의 힘으로 공격이 올라간다.' },
      { name: '기충전', type: PokemonElementType.normal, power: null, description: '깊게 숨을 들이마셔 기합을 넣는다. 자신의 공격이 급소에 맞기 쉬워진다.' },
    ],
  },
  wailmer: {
    flavorText: '공처럼 튀면서 논다. 해수를 많이 마실수록 높이 튀게 된다.',
    stats: { hp: 130, attack: 70, defense: 35, specialAttack: 70, specialDefense: 35, speed: 60 },
    moves: [
      { name: '해수스파우팅', type: PokemonElementType.water, power: 150, description: '바닷물을 내뿜어 공격한다. 자신의 HP가 적을수록 기술의 위력이 떨어진다.' },
      { name: '튀어오르기', type: PokemonElementType.normal, power: null, description: '공격도 하지 않고 팔딱팔딱 튈 뿐 아무 일도 일어나지 않는다...' },
      { name: '흰안개', type: PokemonElementType.ice, power: null, description: '하얀 안개로 몸을 덮는다. 5턴 동안 상대에 의해 능력이 떨어지지 않게 된다.' },
      { name: '놀래키기', type: PokemonElementType.ghost, power: 30, description: '큰 소리 등으로 불시에 놀래켜서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  wailord: {
    flavorText: '커다란 몸을 파도 위에서 점프시켜 충격을 만들어 상대를 기절시킬 때가 있다.',
    stats: { hp: 170, attack: 90, defense: 45, specialAttack: 90, specialDefense: 45, speed: 60 },
    moves: [
      { name: '해수스파우팅', type: PokemonElementType.water, power: 150, description: '바닷물을 내뿜어 공격한다. 자신의 HP가 적을수록 기술의 위력이 떨어진다.' },
      { name: '튀어오르기', type: PokemonElementType.normal, power: null, description: '공격도 하지 않고 팔딱팔딱 튈 뿐 아무 일도 일어나지 않는다...' },
      { name: '흰안개', type: PokemonElementType.ice, power: null, description: '하얀 안개로 몸을 덮는다. 5턴 동안 상대에 의해 능력이 떨어지지 않게 된다.' },
      { name: '놀래키기', type: PokemonElementType.ghost, power: 30, description: '큰 소리 등으로 불시에 놀래켜서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  numel: {
    flavorText: '이글거리는 마그마를 등의 혹에 모으고 있다. 비를 맞으면 마그마가 식어 움직임이 둔해진다.',
    stats: { hp: 60, attack: 60, defense: 40, specialAttack: 65, specialDefense: 45, speed: 35 },
    moves: [
      { name: '매그니튜드', type: PokemonElementType.ground, power: null, description: '땅을 흔들어서 자신의 주위에 있는 포켓몬을 공격한다. 기술의 위력이 여러모로 바뀐다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '망각술', type: PokemonElementType.psychic, power: null, description: '머리를 비워서 순간적으로 무언가를 잊어버림으로써 자신의 특수방어를 크게 올린다.' },
      { name: '기충전', type: PokemonElementType.normal, power: null, description: '깊게 숨을 들이마셔 기합을 넣는다. 자신의 공격이 급소에 맞기 쉬워진다.' },
    ],
  },
  camerupt: {
    flavorText: '등의 혹 모양 화산은 10년마다 대분화하나 심하게 화가 나도 분화한다.',
    stats: { hp: 70, attack: 100, defense: 70, specialAttack: 105, specialDefense: 75, speed: 40 },
    moves: [
      { name: '분화', type: PokemonElementType.fire, power: 150, description: '분노를 폭발시켜 상대를 공격한다. 자신의 HP가 적을수록 기술의 위력이 떨어진다.' },
      { name: '매그니튜드', type: PokemonElementType.ground, power: null, description: '땅을 흔들어서 자신의 주위에 있는 포켓몬을 공격한다. 기술의 위력이 여러모로 바뀐다.' },
      { name: '땅가르기', type: PokemonElementType.ground, power: null, description: '땅이 갈라진 곳에 상대를 떨어뜨려 공격한다. 맞으면 일격에 기절한다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
    ],
  },
  torkoal: {
    flavorText: '사용할 수 없게 된 탄광에는 많은 코터스가 살며 석탄을 부지런히 캐고 있다.',
    stats: { hp: 70, attack: 85, defense: 140, specialAttack: 85, specialDefense: 70, speed: 20 },
    moves: [
      { name: '스모그', type: PokemonElementType.poison, power: 30, description: '더러운 가스를 상대에게 내뿜어 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '연막', type: PokemonElementType.normal, power: null, description: '연기나 먹물을 내뿜어 상대의 명중률을 떨어뜨린다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '회오리불꽃', type: PokemonElementType.fire, power: 35, description: '세차게 소용돌이치는 불꽃 속에 4-5턴 동안 상대를 가두어 공격한다.' },
    ],
  },
  spoink: {
    flavorText: '꼬리를 용수철 대용으로 써서 항상 뛰어오르고 있다. 뛰는 반동으로 심장을 고동시키고 있는 것이다.',
    stats: { hp: 60, attack: 25, defense: 35, specialAttack: 70, specialDefense: 80, speed: 60 },
    moves: [
      { name: '튀어오르기', type: PokemonElementType.normal, power: null, description: '공격도 하지 않고 팔딱팔딱 튈 뿐 아무 일도 일어나지 않는다...' },
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '사이코웨이브', type: PokemonElementType.psychic, power: null, description: '이상한 염력파를 상대에게 발사하여 공격한다. 사용할 때마다 데미지가 바뀐다.' },
      { name: '뛰어오르기', type: PokemonElementType.flying, power: 85, description: '하늘 높이 뛰어올라 2턴째에 상대를 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  grumpig: {
    flavorText: '흑진주로 사이코 파워를 강하게 하여 기묘한 스텝으로 상대의 마음을 조종한다.',
    stats: { hp: 80, attack: 45, defense: 65, specialAttack: 90, specialDefense: 110, speed: 80 },
    moves: [
      { name: '튀어오르기', type: PokemonElementType.normal, power: null, description: '공격도 하지 않고 팔딱팔딱 튈 뿐 아무 일도 일어나지 않는다...' },
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '사이코웨이브', type: PokemonElementType.psychic, power: null, description: '이상한 염력파를 상대에게 발사하여 공격한다. 사용할 때마다 데미지가 바뀐다.' },
      { name: '뛰어오르기', type: PokemonElementType.flying, power: 85, description: '하늘 높이 뛰어올라 2턴째에 상대를 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  spinda: {
    flavorText: '똑같은 얼룩무늬의 얼루기는 없다. 휘청휘청거리는 걸음걸이로 상대의 노림수를 피한다.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 60, specialDefense: 60, speed: 60 },
    moves: [
      { name: '잼잼펀치', type: PokemonElementType.normal, power: 70, description: '리드미컬한 펀치를 날려 상대를 공격한다. 혼란시킬 때가 있다.' },
      { name: '흔들흔들댄스', type: PokemonElementType.normal, power: null, description: '흔들흔들 댄스를 춰서 주위에 있는 포켓몬을 혼란 상태로 만든다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
    ],
  },
  trapinch: {
    flavorText: '건조한 사막에 서식한다. 원뿔형의 보금자리 속에서 조용히 먹잇감을 계속 기다린다.',
    stats: { hp: 45, attack: 100, defense: 45, specialAttack: 45, specialDefense: 45, speed: 10 },
    moves: [
      { name: '모래지옥', type: PokemonElementType.ground, power: 35, description: '세차게 불어대는 모래바람 속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
      { name: '물기', type: PokemonElementType.dark, power: 60, description: '날카롭고 뾰족한 이빨로 물어서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  vibrava: {
    flavorText: '2장의 날개를 고속으로 진동시켜서 내는 초음파는 격렬한 두통을 불러일으킨다.',
    stats: { hp: 50, attack: 70, defense: 50, specialAttack: 50, specialDefense: 50, speed: 70 },
    moves: [
      { name: '용의숨결', type: PokemonElementType.dragon, power: 60, description: '굉장한 숨결을 상대에게 내뿜어 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '모래지옥', type: PokemonElementType.ground, power: 35, description: '세차게 불어대는 모래바람 속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
    ],
  },
  flygon: {
    flavorText: '날갯짓으로 모래 폭풍을 일으켜 모습을 감춘다. 빨간 덮개가 모래로부터 눈을 보호한다.',
    stats: { hp: 80, attack: 100, defense: 80, specialAttack: 80, specialDefense: 80, speed: 100 },
    moves: [
      { name: '용의숨결', type: PokemonElementType.dragon, power: 60, description: '굉장한 숨결을 상대에게 내뿜어 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '모래지옥', type: PokemonElementType.ground, power: 35, description: '세차게 불어대는 모래바람 속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
    ],
  },
  cacnea: {
    flavorText: '비가 적은 건조한 지역에 서식한다. 1년에 1번 노랑 꽃을 피운다.',
    stats: { hp: 50, attack: 85, defense: 40, specialAttack: 85, specialDefense: 40, speed: 35 },
    moves: [
      { name: '바늘팔', type: PokemonElementType.grass, power: 60, description: '바늘팔을 세차게 흔들어 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '목화포자', type: PokemonElementType.grass, power: null, description: '솜처럼 폭신폭신한 포자를 착 달라붙게 해서 상대의 스피드를 크게 떨어뜨린다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '뿌리박기', type: PokemonElementType.grass, power: null, description: '대지에 뿌리를 박아 매 턴마다 자신의 HP를 회복한다. 뿌리 박고 있으므로 교체할 수 없다.' },
    ],
  },
  cacturne: {
    flavorText: '밤이 되면 활동을 시작한다. 사막의 뜨거움에 몹시 지친 먹이를 찾아내어 붙잡는다.',
    stats: { hp: 70, attack: 115, defense: 60, specialAttack: 115, specialDefense: 60, speed: 55 },
    moves: [
      { name: '바늘팔', type: PokemonElementType.grass, power: 60, description: '바늘팔을 세차게 흔들어 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '목화포자', type: PokemonElementType.grass, power: null, description: '솜처럼 폭신폭신한 포자를 착 달라붙게 해서 상대의 스피드를 크게 떨어뜨린다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '뿌리박기', type: PokemonElementType.grass, power: null, description: '대지에 뿌리를 박아 매 턴마다 자신의 HP를 회복한다. 뿌리 박고 있으므로 교체할 수 없다.' },
    ],
  },
  swablu: {
    flavorText: '사람의 머리 위에 살짝 앉아 모자처럼 구는 것을 왠지 좋아한다.',
    stats: { hp: 45, attack: 40, defense: 60, specialAttack: 40, specialDefense: 75, speed: 50 },
    moves: [
      { name: '따라하기', type: PokemonElementType.flying, power: null, description: '상대가 사용한 기술을 흉내 내어 자신도 똑같은 기술을 쓴다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
      { name: '노래하기', type: PokemonElementType.normal, power: null, description: '기분 좋은 예쁜 노랫소리를 들려주고 상대를 잠듦 상태로 만든다.' },
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  altaria: {
    flavorText: '넓은 하늘을 느긋하게 난다. 파비코리의 아름다운 콧노래를 들으면 황홀한 꿈을 꾸는 기분이다.',
    stats: { hp: 75, attack: 70, defense: 90, specialAttack: 70, specialDefense: 105, speed: 80 },
    moves: [
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
      { name: '노래하기', type: PokemonElementType.normal, power: null, description: '기분 좋은 예쁜 노랫소리를 들려주고 상대를 잠듦 상태로 만든다.' },
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '리프레시', type: PokemonElementType.normal, power: null, description: '몸을 쉬게 하여 자신이 입은 독, 마비, 화상의 상태 이상을 치료한다.' },
    ],
  },
  zangoose: {
    flavorText: '몇 대에 걸쳐서 세비퍼와 싸워왔다. 날카로운 발톱이 최대의 무기다.',
    stats: { hp: 73, attack: 115, defense: 60, specialAttack: 60, specialDefense: 60, speed: 90 },
    moves: [
      { name: '브레이크클로', type: PokemonElementType.normal, power: 75, description: '단단하고 날카로운 손톱으로 베어 갈라서 공격한다. 상대의 방어를 떨어뜨릴 때가 있다.' },
      { name: '따라가때리기', type: PokemonElementType.dark, power: 40, description: '상대 포켓몬이 교체될 때 기술을 쓰면 2배의 위력으로 공격할 수 있다.' },
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
      { name: '칼등치기', type: PokemonElementType.normal, power: 40, description: '상대의 HP가 반드시 1만큼 남도록 조절하여 공격한다.' },
    ],
  },
  seviper: {
    flavorText: '맹독이 배어 나오는 예리하고 잘 드는 꼬리로 재빠른 쟝고에게 맞선다.',
    stats: { hp: 73, attack: 100, defense: 60, specialAttack: 100, specialDefense: 60, speed: 65 },
    moves: [
      { name: '뱀눈초리', type: PokemonElementType.normal, power: null, description: '배의 무늬로 겁을 주어 상대를 마비 상태로 만든다.' },
      { name: '맹독엄니', type: PokemonElementType.poison, power: 50, description: '독이 있는 이빨로 상대를 물어서 공격한다. 맹독을 주입할 때가 있다.' },
      { name: '포이즌테일', type: PokemonElementType.poison, power: 50, description: '꼬리로 때린다. 독 상태로 만들 때가 있고 급소에도 맞기 쉽다.' },
      { name: '김밥말이', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 사용해 4-5턴 동안 상대를 휘감아 공격한다.' },
    ],
  },
  lunatone: {
    flavorText: '보름달의 밤이 되면 활발하게 활동하기 때문에 달의 변화와 관계 있다고 전해진다.',
    stats: { hp: 90, attack: 55, defense: 65, specialAttack: 95, specialDefense: 85, speed: 70 },
    moves: [
      { name: '코스믹파워', type: PokemonElementType.psychic, power: null, description: '우주로부터 신비한 힘을 손에 넣음으로써 자신의 방어와 특수방어를 올린다.' },
      { name: '사이코웨이브', type: PokemonElementType.psychic, power: null, description: '이상한 염력파를 상대에게 발사하여 공격한다. 사용할 때마다 데미지가 바뀐다.' },
      { name: '돌떨구기', type: PokemonElementType.rock, power: 50, description: '작은 바위를 들어올려 상대에게 내던져서 공격한다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
    ],
  },
  solrock: {
    flavorText: '태양 에너지가 파워의 근원이라서 낮에는 강하다. 회전하면 몸이 빛난다.',
    stats: { hp: 90, attack: 95, defense: 85, specialAttack: 55, specialDefense: 65, speed: 70 },
    moves: [
      { name: '코스믹파워', type: PokemonElementType.psychic, power: null, description: '우주로부터 신비한 힘을 손에 넣음으로써 자신의 방어와 특수방어를 올린다.' },
      { name: '사이코웨이브', type: PokemonElementType.psychic, power: null, description: '이상한 염력파를 상대에게 발사하여 공격한다. 사용할 때마다 데미지가 바뀐다.' },
      { name: '돌떨구기', type: PokemonElementType.rock, power: 50, description: '작은 바위를 들어올려 상대에게 내던져서 공격한다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
    ],
  },
  barboach: {
    flavorText: '전신이 미끈미끈한 체액으로 덮여있기 때문에 잡아도 미끈하게 빠져나갈 수 있다.',
    stats: { hp: 50, attack: 48, defense: 43, specialAttack: 46, specialDefense: 41, speed: 60 },
    moves: [
      { name: '매그니튜드', type: PokemonElementType.ground, power: null, description: '땅을 흔들어서 자신의 주위에 있는 포켓몬을 공격한다. 기술의 위력이 여러모로 바뀐다.' },
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
      { name: '땅가르기', type: PokemonElementType.ground, power: null, description: '땅이 갈라진 곳에 상대를 떨어뜨려 공격한다. 맞으면 일격에 기절한다.' },
    ],
  },
  whiscash: {
    flavorText: '큰 늪을 영역으로 한다. 적이 가까이 오면 크게 난동 부려서 큰 지진을 일으킨다.',
    stats: { hp: 110, attack: 78, defense: 73, specialAttack: 76, specialDefense: 71, speed: 60 },
    moves: [
      { name: '매그니튜드', type: PokemonElementType.ground, power: null, description: '땅을 흔들어서 자신의 주위에 있는 포켓몬을 공격한다. 기술의 위력이 여러모로 바뀐다.' },
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
      { name: '땅가르기', type: PokemonElementType.ground, power: null, description: '땅이 갈라진 곳에 상대를 떨어뜨려 공격한다. 맞으면 일격에 기절한다.' },
    ],
  },
  corphish: {
    flavorText: '아무리 물이 더러운 강이라도 적응해서 번식하는 터프한 생명력의 소유자.',
    stats: { hp: 43, attack: 80, defense: 65, specialAttack: 50, specialDefense: 35, speed: 35 },
    moves: [
      { name: '집게해머', type: PokemonElementType.water, power: 100, description: '큰 집게를 상대에게 내리쳐서 공격한다. 급소에 맞기 쉽다.' },
      { name: '가위자르기', type: PokemonElementType.normal, power: null, description: '큰 집게로 상대를 베어 갈라 공격한다. 맞으면 일격에 기절한다.' },
      { name: '찝기', type: PokemonElementType.normal, power: 55, description: '상대를 양쪽에서 집어서 데미지를 준다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
    ],
  },
  crawdaunt: {
    flavorText: '연못에 사는 다른 포켓몬을 집게로 집어들어 연못 밖으로 내던져버리는 난동꾼이다.',
    stats: { hp: 63, attack: 120, defense: 85, specialAttack: 90, specialDefense: 55, speed: 55 },
    moves: [
      { name: '집게해머', type: PokemonElementType.water, power: 100, description: '큰 집게를 상대에게 내리쳐서 공격한다. 급소에 맞기 쉽다.' },
      { name: '가위자르기', type: PokemonElementType.normal, power: null, description: '큰 집게로 상대를 베어 갈라 공격한다. 맞으면 일격에 기절한다.' },
      { name: '찝기', type: PokemonElementType.normal, power: 55, description: '상대를 양쪽에서 집어서 데미지를 준다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
    ],
  },
  baltoy: {
    flavorText: '한 다리로 회전하면서 이동한다. 거꾸로 회전하는 오뚝군도 발견된다.',
    stats: { hp: 40, attack: 40, defense: 55, specialAttack: 40, specialDefense: 70, speed: 55 },
    moves: [
      { name: '코스믹파워', type: PokemonElementType.psychic, power: null, description: '우주로부터 신비한 힘을 손에 넣음으로써 자신의 방어와 특수방어를 올린다.' },
      { name: '고속스핀', type: PokemonElementType.normal, power: 50, description: '회전해서 상대를 공격한다. 조이기, 김밥말이, 씨뿌리기, 압정뿌리기 등도 날려버린다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
      { name: '대폭발', type: PokemonElementType.normal, power: 250, description: '큰 폭발로 자신의 주위에 있는 포켓몬을 공격한다. 쓰고 나서는 기절한다.' },
    ],
  },
  claydol: {
    flavorText: '고대의 진흙인형이 괴이한 광선을 쬐어 생명이 깃들면서 포켓몬이 되었다.',
    stats: { hp: 60, attack: 70, defense: 105, specialAttack: 70, specialDefense: 120, speed: 75 },
    moves: [
      { name: '순간이동', type: PokemonElementType.psychic, power: null, description: '야생 포켓몬과 배틀을 그만둔다. 마지막에 들어갔던 포켓몬센터가 있는 도시에도 갈 수 있다.' },
      { name: '코스믹파워', type: PokemonElementType.psychic, power: null, description: '우주로부터 신비한 힘을 손에 넣음으로써 자신의 방어와 특수방어를 올린다.' },
      { name: '고속스핀', type: PokemonElementType.normal, power: 50, description: '회전해서 상대를 공격한다. 조이기, 김밥말이, 씨뿌리기, 압정뿌리기 등도 날려버린다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
    ],
  },
  lileep: {
    flavorText: '촉수를 꽃잎으로 보이게 하여 가까이 온 먹이를 잡는다. 1억 년 전에 멸종했다.',
    stats: { hp: 66, attack: 41, defense: 77, specialAttack: 61, specialDefense: 87, speed: 23 },
    moves: [
      { name: '휘감기', type: PokemonElementType.normal, power: 10, description: '촉수나 덩굴 등을 휘감아서 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '용해액', type: PokemonElementType.poison, power: 40, description: '강한 산을 상대에게 끼얹어 공격한다. 상대의 특수방어를 떨어뜨릴 때가 있다.' },
      { name: '토해내기', type: PokemonElementType.normal, power: null, description: '비축된 힘을 상대에게 부딪쳐서 공격한다. 비축된 만큼 위력이 올라간다.' },
      { name: '뿌리박기', type: PokemonElementType.grass, power: null, description: '대지에 뿌리를 박아 매 턴마다 자신의 HP를 회복한다. 뿌리 박고 있으므로 교체할 수 없다.' },
    ],
  },
  cradily: {
    flavorText: '따뜻한 바다의 얕은 곳에 있다. 바닷물이 빠지면 모래 해변에 숨어 있는 먹이를 파내어 먹는다.',
    stats: { hp: 86, attack: 81, defense: 97, specialAttack: 81, specialDefense: 107, speed: 43 },
    moves: [
      { name: '휘감기', type: PokemonElementType.normal, power: 10, description: '촉수나 덩굴 등을 휘감아서 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '용해액', type: PokemonElementType.poison, power: 40, description: '강한 산을 상대에게 끼얹어 공격한다. 상대의 특수방어를 떨어뜨릴 때가 있다.' },
      { name: '토해내기', type: PokemonElementType.normal, power: null, description: '비축된 힘을 상대에게 부딪쳐서 공격한다. 비축된 만큼 위력이 올라간다.' },
      { name: '뿌리박기', type: PokemonElementType.grass, power: null, description: '대지에 뿌리를 박아 매 턴마다 자신의 HP를 회복한다. 뿌리 박고 있으므로 교체할 수 없다.' },
    ],
  },
  anorith: {
    flavorText: '포켓몬의 조상 중 하나다. 해저의 바위 지대에 숨어 있는 먹잇감을 늘어나는 발톱으로 잡는다.',
    stats: { hp: 45, attack: 95, defense: 50, specialAttack: 40, specialDefense: 50, speed: 75 },
    moves: [
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
      { name: '메탈클로', type: PokemonElementType.steel, power: 50, description: '강철의 발톱으로 상대를 베어 갈라 공격한다. 자신의 공격이 올라갈 때도 있다.' },
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
    ],
  },
  armaldo: {
    flavorText: '늘었다 줄었다 하는 거대한 손톱으로 먹이를 찔러서 잡는다. 튼튼한 갑옷을 몸에 두르고 있다.',
    stats: { hp: 75, attack: 125, defense: 100, specialAttack: 70, specialDefense: 80, speed: 45 },
    moves: [
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
      { name: '메탈클로', type: PokemonElementType.steel, power: 50, description: '강철의 발톱으로 상대를 베어 갈라 공격한다. 자신의 공격이 올라갈 때도 있다.' },
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
    ],
  },
  feebas: {
    flavorText: '무엇이든 먹기 때문에 더러운 강이나 호수에서도 살 수 있다. 누구도 주목하지 않는 포켓몬이다.',
    stats: { hp: 20, attack: 15, defense: 20, specialAttack: 10, specialDefense: 55, speed: 80 },
    moves: [
      { name: '튀어오르기', type: PokemonElementType.normal, power: null, description: '공격도 하지 않고 팔딱팔딱 튈 뿐 아무 일도 일어나지 않는다...' },
      { name: '바둥바둥', type: PokemonElementType.normal, power: null, description: '바둥바둥 난동 부려서 공격한다. 자신의 HP가 적을수록 기술의 위력이 올라간다.' },
      { name: '몸통박치기', type: PokemonElementType.normal, power: 40, description: '상대를 향해서 몸 전체를 부딪쳐가며 공격한다.' },
    ],
  },
  milotic: {
    flavorText: '밀로틱의 아름다운 모습을 본 이는 싸우려던 마음가짐을 잊어버린다고 한다.',
    stats: { hp: 95, attack: 60, defense: 79, specialAttack: 100, specialDefense: 125, speed: 81 },
    moves: [
      { name: '김밥말이', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 사용해 4-5턴 동안 상대를 휘감아 공격한다.' },
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
      { name: '리프레시', type: PokemonElementType.normal, power: null, description: '몸을 쉬게 하여 자신이 입은 독, 마비, 화상의 상태 이상을 치료한다.' },
      { name: 'HP회복', type: PokemonElementType.normal, power: null, description: '세포를 재생시켜 자신의 최대 HP의 절반만큼 HP를 회복한다.' },
    ],
  },
  kecleon: {
    flavorText: '몸의 색을 자유롭게 바꾸는 능력을 가지고 있다. 배에 있는 톱니무늬만은 바뀌지 않는다.',
    stats: { hp: 60, attack: 90, defense: 70, specialAttack: 60, specialDefense: 120, speed: 40 },
    moves: [
      { name: '핥기', type: PokemonElementType.ghost, power: 30, description: '긴 혀로 상대를 핥아서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '조이기', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 써서 4-5턴 동안 상대를 조여 공격한다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
    ],
  },
  castform: {
    flavorText: '기온이나 습도의 변화가 몸의 세포에 영향을 주어 모습을 바꾸는 포켓몬이다.',
    stats: { hp: 70, attack: 70, defense: 70, specialAttack: 70, specialDefense: 70, speed: 70 },
    moves: [
      { name: '눈싸라기', type: PokemonElementType.ice, power: 40, description: '차가운 가랑눈을 상대에게 내뿜어 공격한다. 얼음 상태로 만들 때가 있다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '웨더볼', type: PokemonElementType.normal, power: 50, description: '사용했을 때의 날씨에 따라서 기술 타입과 위력이 바뀐다.' },
      { name: '물대포', type: PokemonElementType.water, power: 40, description: '물을 기세 좋게 상대에게 발사하여 공격한다.' },
    ],
  },
  shuppet: {
    flavorText: '머리의 뿔로 원한과 질투의 감정을 먹는다고 전해진다. 한밤중에 활발하게 활동한다.',
    stats: { hp: 44, attack: 75, defense: 35, specialAttack: 63, specialDefense: 33, speed: 45 },
    moves: [
      { name: '원념', type: PokemonElementType.ghost, power: null, description: '상대의 기술로 기절하면 원념을 담아 그 기술의 PP를 0으로 만든다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
      { name: '나이트헤드', type: PokemonElementType.ghost, power: null, description: '무시무시한 환상을 보게 해서 자신의 레벨과 똑같은 만큼의 데미지를 상대에게 준다.' },
      { name: '가로채기', type: PokemonElementType.dark, power: null, description: '상대가 사용하려고 한 회복 기술이나 능력 변화의 기술을 빼앗아 자신에게 쓴다.' },
    ],
  },
  banette: {
    flavorText: '버려진 인형에 원념이 깃들어 포켓몬이 되었다. 자신을 버린 아이를 찾고 있다.',
    stats: { hp: 64, attack: 115, defense: 65, specialAttack: 83, specialDefense: 63, speed: 65 },
    moves: [
      { name: '원념', type: PokemonElementType.ghost, power: null, description: '상대의 기술로 기절하면 원념을 담아 그 기술의 PP를 0으로 만든다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
      { name: '나이트헤드', type: PokemonElementType.ghost, power: null, description: '무시무시한 환상을 보게 해서 자신의 레벨과 똑같은 만큼의 데미지를 상대에게 준다.' },
      { name: '가로채기', type: PokemonElementType.dark, power: null, description: '상대가 사용하려고 한 회복 기술이나 능력 변화의 기술을 빼앗아 자신에게 쓴다.' },
    ],
  },
  duskull: {
    flavorText: '어디까지라도 먹이를 쫓아가는 집념이 강한 성격이지만 아침 해가 떠오르면 포기한다.',
    stats: { hp: 20, attack: 40, defense: 90, specialAttack: 30, specialDefense: 90, speed: 25 },
    moves: [
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '검은눈빛', type: PokemonElementType.normal, power: null, description: '빨려 들어갈 것 같은 까만 눈빛으로 가만히 응시하여 상대를 배틀에서 도망갈 수 없게 한다.' },
      { name: '따라가때리기', type: PokemonElementType.dark, power: 40, description: '상대 포켓몬이 교체될 때 기술을 쓰면 2배의 위력으로 공격할 수 있다.' },
      { name: '사슬묶기', type: PokemonElementType.normal, power: null, description: '상대의 움직임을 막아 바로 전에 쓴 기술을 4턴 동안 사용할 수 없게 만든다.' },
    ],
  },
  dusclops: {
    flavorText: '몸 안에서 불타고 있는 도깨비불을 들여다보면 영혼을 빼앗겨버린다.',
    stats: { hp: 40, attack: 70, defense: 130, specialAttack: 60, specialDefense: 130, speed: 25 },
    moves: [
      { name: '섀도펀치', type: PokemonElementType.ghost, power: 60, description: '그림자에 섞여 펀치를 날린다. 공격은 반드시 명중한다.' },
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '검은눈빛', type: PokemonElementType.normal, power: null, description: '빨려 들어갈 것 같은 까만 눈빛으로 가만히 응시하여 상대를 배틀에서 도망갈 수 없게 한다.' },
      { name: '조이기', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 써서 4-5턴 동안 상대를 조여 공격한다.' },
    ],
  },
  tropius: {
    flavorText: '커다란 잎으로 하늘을 날며 아이들에게 인기가 많은 목에 생기는 달콤한 과일을 나눠준다.',
    stats: { hp: 99, attack: 68, defense: 83, specialAttack: 72, specialDefense: 87, speed: 51 },
    moves: [
      { name: '바람일으키기', type: PokemonElementType.flying, power: 40, description: '날개로 일으킨 격한 바람을 상대에게 부딪쳐서 공격한다.' },
      { name: '날려버리기', type: PokemonElementType.normal, power: null, description: '상대를 날려버려서 교대할 포켓몬을 끌어낸다. 야생의 경우에는 배틀이 끝난다.' },
      { name: '짓밟기', type: PokemonElementType.normal, power: 65, description: '큰 발로 상대를 짓밟아서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '잎날가르기', type: PokemonElementType.grass, power: 55, description: '잎사귀를 날려 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
    ],
  },
  chimecho: {
    flavorText: '머리의 빨판으로 나뭇가지나 집의 처마 밑에 매달린다. 7종류의 음색을 나누어 쓴다.',
    stats: { hp: 75, attack: 50, defense: 80, specialAttack: 95, specialDefense: 90, speed: 65 },
    moves: [
      { name: '김밥말이', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 사용해 4-5턴 동안 상대를 휘감아 공격한다.' },
      { name: '사이코웨이브', type: PokemonElementType.psychic, power: null, description: '이상한 염력파를 상대에게 발사하여 공격한다. 사용할 때마다 데미지가 바뀐다.' },
      { name: '치료방울', type: PokemonElementType.normal, power: null, description: '기분 좋은 방울소리를 들려주어 같은 편 전원의 상태 이상을 회복한다.' },
      { name: '하품', type: PokemonElementType.normal, power: null, description: '큰 하품으로 졸음을 유도한다. 다음 턴에 상대를 잠듦 상태로 만든다.' },
    ],
  },
  absol: {
    flavorText: '재해의 위험을 감지한다. 위험을 알리는 때에만 사람 앞에 나타난다고 한다.',
    stats: { hp: 65, attack: 130, defense: 60, specialAttack: 75, specialDefense: 60, speed: 75 },
    moves: [
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
      { name: '칼바람', type: PokemonElementType.normal, power: 80, description: '바람의 칼날을 만들어 2턴째에 상대를 공격한다. 급소에 맞기 쉽다.' },
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
      { name: '미래예지', type: PokemonElementType.psychic, power: 120, description: '기술을 사용한 2턴 뒤에 상대에게 염동력의 덩어리를 보내어 공격한다.' },
    ],
  },
  wynaut: {
    flavorText: '무리를 지어 행동하는 습성이 있다. 잠들 때는 동굴 안에서 동료들과 서로 몸을 붙인다.',
    stats: { hp: 95, attack: 23, defense: 48, specialAttack: 23, specialDefense: 48, speed: 23 },
    moves: [
      { name: '튀어오르기', type: PokemonElementType.normal, power: null, description: '공격도 하지 않고 팔딱팔딱 튈 뿐 아무 일도 일어나지 않는다...' },
      { name: '미러코트', type: PokemonElementType.psychic, power: null, description: '상대에게 받은 특수공격의 데미지를 2배로 만들어 그 상대에게 돌려준다.' },
      { name: '길동무', type: PokemonElementType.ghost, power: null, description: '기술을 쓴 뒤 공격을 받아 기절했을 때 길동무의 대상도 기절하게 한다.' },
      { name: '앙코르', type: PokemonElementType.normal, power: null, description: '상대가 마지막으로 사용한 기술을 3턴 동안 계속 쓰게 한다.' },
    ],
  },
  snorunt: {
    flavorText: '커다란 잎사귀 아래서 여러 마리의 눈꼬마가 모여 사이좋게 살고 있다고 한다.',
    stats: { hp: 50, attack: 50, defense: 50, specialAttack: 50, specialDefense: 50, speed: 50 },
    moves: [
      { name: '눈싸라기', type: PokemonElementType.ice, power: 40, description: '차가운 가랑눈을 상대에게 내뿜어 공격한다. 얼음 상태로 만들 때가 있다.' },
      { name: '싸라기눈', type: PokemonElementType.ice, power: null, description: '5턴 동안 싸라기눈을 내리게 해 얼음타입이 아닌 포켓몬 모두에게 데미지를 준다.' },
      { name: '물기', type: PokemonElementType.dark, power: 60, description: '날카롭고 뾰족한 이빨로 물어서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '째려보기', type: PokemonElementType.normal, power: null, description: '날카로운 눈초리로 겁을 주어 상대의 방어를 떨어뜨린다.' },
    ],
  },
  glalie: {
    flavorText: '공기 중의 수분을 얼려서 얼음 갑옷으로 몸을 둘러싸 몸을 보호한다.',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80 },
    moves: [
      { name: '절대영도', type: PokemonElementType.ice, power: null, description: '절대영도의 추위로 상대를 공격한다. 맞으면 일격에 기절한다.' },
      { name: '눈싸라기', type: PokemonElementType.ice, power: 40, description: '차가운 가랑눈을 상대에게 내뿜어 공격한다. 얼음 상태로 만들 때가 있다.' },
      { name: '싸라기눈', type: PokemonElementType.ice, power: null, description: '5턴 동안 싸라기눈을 내리게 해 얼음타입이 아닌 포켓몬 모두에게 데미지를 준다.' },
      { name: '물기', type: PokemonElementType.dark, power: 60, description: '날카롭고 뾰족한 이빨로 물어서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  spheal: {
    flavorText: '아직 능숙하게 헤엄치지 못하고 구르는 쪽이 빨리 움직일 수 있다. 기쁘면 다 같이 손뼉을 친다.',
    stats: { hp: 70, attack: 40, defense: 50, specialAttack: 55, specialDefense: 50, speed: 25 },
    moves: [
      { name: '아이스볼', type: PokemonElementType.ice, power: 30, description: '5턴 동안 상대를 공격한다. 기술이 맞을 때마다 위력이 올라간다.' },
      { name: '절대영도', type: PokemonElementType.ice, power: null, description: '절대영도의 추위로 상대를 공격한다. 맞으면 일격에 기절한다.' },
      { name: '오로라빔', type: PokemonElementType.ice, power: 65, description: '무지개색의 빔을 상대에게 발사하여 공격한다. 공격을 떨어뜨릴 때가 있다.' },
      { name: '눈싸라기', type: PokemonElementType.ice, power: 40, description: '차가운 가랑눈을 상대에게 내뿜어 공격한다. 얼음 상태로 만들 때가 있다.' },
    ],
  },
  sealeo: {
    flavorText: '코의 신경이 민감하다. 처음 보는 것은 코로 문질러서 기억한다.',
    stats: { hp: 90, attack: 60, defense: 70, specialAttack: 75, specialDefense: 70, speed: 45 },
    moves: [
      { name: '아이스볼', type: PokemonElementType.ice, power: 30, description: '5턴 동안 상대를 공격한다. 기술이 맞을 때마다 위력이 올라간다.' },
      { name: '절대영도', type: PokemonElementType.ice, power: null, description: '절대영도의 추위로 상대를 공격한다. 맞으면 일격에 기절한다.' },
      { name: '오로라빔', type: PokemonElementType.ice, power: 65, description: '무지개색의 빔을 상대에게 발사하여 공격한다. 공격을 떨어뜨릴 때가 있다.' },
      { name: '눈싸라기', type: PokemonElementType.ice, power: 40, description: '차가운 가랑눈을 상대에게 내뿜어 공격한다. 얼음 상태로 만들 때가 있다.' },
    ],
  },
  walrein: {
    flavorText: '큰 얼음을 이빨로 부순다. 두꺼운 지방은 추위뿐만 아니라 상대의 공격도 이겨낸다.',
    stats: { hp: 110, attack: 80, defense: 90, specialAttack: 95, specialDefense: 90, speed: 65 },
    moves: [
      { name: '아이스볼', type: PokemonElementType.ice, power: 30, description: '5턴 동안 상대를 공격한다. 기술이 맞을 때마다 위력이 올라간다.' },
      { name: '절대영도', type: PokemonElementType.ice, power: null, description: '절대영도의 추위로 상대를 공격한다. 맞으면 일격에 기절한다.' },
      { name: '오로라빔', type: PokemonElementType.ice, power: 65, description: '무지개색의 빔을 상대에게 발사하여 공격한다. 공격을 떨어뜨릴 때가 있다.' },
      { name: '눈싸라기', type: PokemonElementType.ice, power: 40, description: '차가운 가랑눈을 상대에게 내뿜어 공격한다. 얼음 상태로 만들 때가 있다.' },
    ],
  },
  clamperl: {
    flavorText: '일생에 한 번 진화할 때 사이코 파워를 증폭시키는 이상한 진주를 만든다.',
    stats: { hp: 35, attack: 64, defense: 85, specialAttack: 74, specialDefense: 55, speed: 32 },
    moves: [
      { name: '껍질끼우기', type: PokemonElementType.water, power: 35, description: '매우 튼튼하고 두꺼운 껍질에 4-5턴 동안 상대를 끼워서 공격한다.' },
      { name: '물대포', type: PokemonElementType.water, power: 40, description: '물을 기세 좋게 상대에게 발사하여 공격한다.' },
      { name: '바다회오리', type: PokemonElementType.water, power: 35, description: '세차게 소용돌이치는 물속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '철벽', type: PokemonElementType.steel, power: null, description: '피부를 쇠처럼 단단하게 함으로써 자신의 방어를 크게 올린다.' },
    ],
  },
  huntail: {
    flavorText: '빛이 닿지 않는 심해에 서식한다. 작은 생선처럼 생긴 꼬리를 빛내어 먹잇감을 유인한다.',
    stats: { hp: 55, attack: 104, defense: 105, specialAttack: 94, specialDefense: 75, speed: 52 },
    moves: [
      { name: '바다회오리', type: PokemonElementType.water, power: 35, description: '세차게 소용돌이치는 물속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '하이드로펌프', type: PokemonElementType.water, power: 110, description: '대량의 물을 세찬 기세로 상대에게 발사하여 공격한다.' },
      { name: '배턴터치', type: PokemonElementType.normal, power: null, description: '교대 포켓몬과 바뀐다. 능력 변화는 바뀐 포켓몬이 그대로 이어받는다.' },
      { name: '싫은소리', type: PokemonElementType.normal, power: null, description: '그만 귀를 막아버리고 싶은 싫은 소리를 내어 상대의 방어를 크게 떨어뜨린다.' },
    ],
  },
  gorebyss: {
    flavorText: '바다의 밑바닥에 살고 있지만 봄이 되면 몸의 분홍색이 웬일인지 선명하게 물든다.',
    stats: { hp: 55, attack: 84, defense: 105, specialAttack: 114, specialDefense: 75, speed: 52 },
    moves: [
      { name: '염동력', type: PokemonElementType.psychic, power: 50, description: '약한 염동력을 상대에게 보내어 공격한다. 상대를 혼란시킬 때가 있다.' },
      { name: '망각술', type: PokemonElementType.psychic, power: null, description: '머리를 비워서 순간적으로 무언가를 잊어버림으로써 자신의 특수방어를 크게 올린다.' },
      { name: '바다회오리', type: PokemonElementType.water, power: 35, description: '세차게 소용돌이치는 물속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '하이드로펌프', type: PokemonElementType.water, power: 110, description: '대량의 물을 세찬 기세로 상대에게 발사하여 공격한다.' },
    ],
  },
  relicanth: {
    flavorText: '1억 년 전부터 모습이 바뀌지 않은 포켓몬이다. 심해를 조사하던 중 발견되었다.',
    stats: { hp: 100, attack: 90, defense: 130, specialAttack: 45, specialDefense: 65, speed: 55 },
    moves: [
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
      { name: '하품', type: PokemonElementType.normal, power: null, description: '큰 하품으로 졸음을 유도한다. 다음 턴에 상대를 잠듦 상태로 만든다.' },
      { name: '물대포', type: PokemonElementType.water, power: 40, description: '물을 기세 좋게 상대에게 발사하여 공격한다.' },
    ],
  },
  luvdisc: {
    flavorText: '따뜻한 바다에서 서식한다. 사랑동이를 발견한 커플은 영원한 사랑이 지속된다고 한다.',
    stats: { hp: 43, attack: 30, defense: 55, specialAttack: 40, specialDefense: 65, speed: 97 },
    moves: [
      { name: '천사의키스', type: PokemonElementType.normal, power: null, description: '천사처럼 귀엽게 키스하여 상대를 혼란시킨다.' },
      { name: '바둥바둥', type: PokemonElementType.normal, power: null, description: '바둥바둥 난동 부려서 공격한다. 자신의 HP가 적을수록 기술의 위력이 올라간다.' },
      { name: '물대포', type: PokemonElementType.water, power: 40, description: '물을 기세 좋게 상대에게 발사하여 공격한다.' },
      { name: '애교부리기', type: PokemonElementType.normal, power: null, description: '귀엽게 바라보고 방심을 유도하여 상대의 공격을 크게 떨어뜨린다.' },
    ],
  },
  bagon: {
    flavorText: '단련된 목 근육과 철과 같이 단단한 머리로 커다란 바위를 조각조각으로 부순다.',
    stats: { hp: 45, attack: 75, defense: 60, specialAttack: 40, specialDefense: 30, speed: 50 },
    moves: [
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '용의숨결', type: PokemonElementType.dragon, power: 60, description: '굉장한 숨결을 상대에게 내뿜어 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '드래곤클로', type: PokemonElementType.dragon, power: 80, description: '날카롭고 뾰족한 거대한 발톱으로 상대를 베어 갈라서 공격한다.' },
      { name: '분노', type: PokemonElementType.normal, power: 20, description: '기술을 썼을 때 공격을 받으면 분노의 힘으로 공격이 올라간다.' },
    ],
  },
  beldum: {
    flavorText: '몸에서 나오는 자력과 지상의 자력을 충돌시켜 하늘에 떠오른다.',
    stats: { hp: 40, attack: 55, defense: 80, specialAttack: 35, specialDefense: 60, speed: 30 },
    moves: [
      { name: '돌진', type: PokemonElementType.normal, power: 90, description: '굉장한 기세로 상대에게 부딪쳐 공격한다. 자신도 조금 데미지를 입는다.' },
    ],
  },
  shelgon: {
    flavorText: '단단한 껍질 안은 세포가 변화를 시작하고 있다. 진화하는 순간에 껍질이 벗겨져 떨어진다.',
    stats: { hp: 65, attack: 95, defense: 100, specialAttack: 60, specialDefense: 50, speed: 50 },
    moves: [
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '용의숨결', type: PokemonElementType.dragon, power: 60, description: '굉장한 숨결을 상대에게 내뿜어 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '드래곤클로', type: PokemonElementType.dragon, power: 80, description: '날카롭고 뾰족한 거대한 발톱으로 상대를 베어 갈라서 공격한다.' },
      { name: '분노', type: PokemonElementType.normal, power: 20, description: '기술을 썼을 때 공격을 받으면 분노의 힘으로 공격이 올라간다.' },
    ],
  },
  salamence: {
    flavorText: '화나게 하면 어쩔 도리가 없다. 모든 것을 발톱으로 갈기갈기 찢고 불꽃으로 태워서 파괴한다.',
    stats: { hp: 95, attack: 135, defense: 80, specialAttack: 110, specialDefense: 80, speed: 100 },
    moves: [
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '용의숨결', type: PokemonElementType.dragon, power: 60, description: '굉장한 숨결을 상대에게 내뿜어 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '드래곤클로', type: PokemonElementType.dragon, power: 80, description: '날카롭고 뾰족한 거대한 발톱으로 상대를 베어 갈라서 공격한다.' },
      { name: '공중날기', type: PokemonElementType.flying, power: 90, description: '1턴째에 하늘을 날아 2턴째에 상대를 공격한다. 알고 있는 도시로 날아갈 수 있다.' },
    ],
  },
  metang: {
    flavorText: '2마리의 메탕이 합체했다. 강철의 몸은 제트기와 충돌해도 상처 입지 않는다.',
    stats: { hp: 60, attack: 75, defense: 100, specialAttack: 55, specialDefense: 80, speed: 50 },
    moves: [
      { name: '코멧펀치', type: PokemonElementType.steel, power: 90, description: '혜성과 같은 펀치를 날려서 상대를 공격한다. 자신의 공격이 올라갈 때가 있다.' },
      { name: '따라가때리기', type: PokemonElementType.dark, power: 40, description: '상대 포켓몬이 교체될 때 기술을 쓰면 2배의 위력으로 공격할 수 있다.' },
      { name: '메탈클로', type: PokemonElementType.steel, power: 50, description: '강철의 발톱으로 상대를 베어 갈라 공격한다. 자신의 공격이 올라갈 때도 있다.' },
      { name: '염동력', type: PokemonElementType.psychic, power: 50, description: '약한 염동력을 상대에게 보내어 공격한다. 상대를 혼란시킬 때가 있다.' },
    ],
  },
  metagross: {
    flavorText: '4개의 뇌가 연결되어 슈퍼컴퓨터보다 대단한 계산으로 상대를 분석한다.',
    stats: { hp: 80, attack: 135, defense: 130, specialAttack: 95, specialDefense: 90, speed: 70 },
    moves: [
      { name: '코멧펀치', type: PokemonElementType.steel, power: 90, description: '혜성과 같은 펀치를 날려서 상대를 공격한다. 자신의 공격이 올라갈 때가 있다.' },
      { name: '따라가때리기', type: PokemonElementType.dark, power: 40, description: '상대 포켓몬이 교체될 때 기술을 쓰면 2배의 위력으로 공격할 수 있다.' },
      { name: '메탈클로', type: PokemonElementType.steel, power: 50, description: '강철의 발톱으로 상대를 베어 갈라 공격한다. 자신의 공격이 올라갈 때도 있다.' },
      { name: '염동력', type: PokemonElementType.psychic, power: 50, description: '약한 염동력을 상대에게 보내어 공격한다. 상대를 혼란시킬 때가 있다.' },
    ],
  },
  regirock: {
    flavorText: '전신이 바위로 되어 있다. 싸움으로 몸이 깨어져도 바위를 붙여서 치료해 버린다.',
    stats: { hp: 80, attack: 100, defense: 200, specialAttack: 50, specialDefense: 100, speed: 50 },
    moves: [
      { name: '록온', type: PokemonElementType.normal, power: null, description: '조준을 잘 맞춰 다음 공격이 반드시 상대에게 명중하도록 한다.' },
      { name: '돌떨구기', type: PokemonElementType.rock, power: 50, description: '작은 바위를 들어올려 상대에게 내던져서 공격한다.' },
      { name: '전자포', type: PokemonElementType.electric, power: 120, description: '대포처럼 전기를 발사해서 공격한다. 상대를 마비 상태로 만든다.' },
      { name: '대폭발', type: PokemonElementType.normal, power: 250, description: '큰 폭발로 자신의 주위에 있는 포켓몬을 공격한다. 쓰고 나서는 기절한다.' },
    ],
  },
  regice: {
    flavorText: '빙하 안에서 몇천 년이나 잠들어 있었다고 전해진다. 마그마로도 몸이 녹지 않는다.',
    stats: { hp: 80, attack: 50, defense: 100, specialAttack: 100, specialDefense: 200, speed: 50 },
    moves: [
      { name: '록온', type: PokemonElementType.normal, power: null, description: '조준을 잘 맞춰 다음 공격이 반드시 상대에게 명중하도록 한다.' },
      { name: '전자포', type: PokemonElementType.electric, power: 120, description: '대포처럼 전기를 발사해서 공격한다. 상대를 마비 상태로 만든다.' },
      { name: '대폭발', type: PokemonElementType.normal, power: 250, description: '큰 폭발로 자신의 주위에 있는 포켓몬을 공격한다. 쓰고 나서는 기절한다.' },
      { name: '망각술', type: PokemonElementType.psychic, power: null, description: '머리를 비워서 순간적으로 무언가를 잊어버림으로써 자신의 특수방어를 크게 올린다.' },
    ],
  },
  registeel: {
    flavorText: '몇만 년 동안 지하의 압력에 의해서 단련된 금속의 몸은 상처 하나 입지 않는다.',
    stats: { hp: 80, attack: 75, defense: 150, specialAttack: 75, specialDefense: 150, speed: 50 },
    moves: [
      { name: '록온', type: PokemonElementType.normal, power: null, description: '조준을 잘 맞춰 다음 공격이 반드시 상대에게 명중하도록 한다.' },
      { name: '전자포', type: PokemonElementType.electric, power: 120, description: '대포처럼 전기를 발사해서 공격한다. 상대를 마비 상태로 만든다.' },
      { name: '메탈클로', type: PokemonElementType.steel, power: 50, description: '강철의 발톱으로 상대를 베어 갈라 공격한다. 자신의 공격이 올라갈 때도 있다.' },
      { name: '대폭발', type: PokemonElementType.normal, power: 250, description: '큰 폭발로 자신의 주위에 있는 포켓몬을 공격한다. 쓰고 나서는 기절한다.' },
    ],
  },
  latias: {
    flavorText: '텔레파시로 마음이 통한다. 빛을 굴절시키는 깃털로 몸을 둘러싸 모습을 지운다.',
    stats: { hp: 80, attack: 80, defense: 90, specialAttack: 110, specialDefense: 130, speed: 110 },
    moves: [
      { name: '미스트볼', type: PokemonElementType.psychic, power: 95, description: '안개의 깃털로 둘러싸 공격한다. 상대의 특수공격을 떨어뜨릴 때가 있다.' },
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
      { name: '사이코웨이브', type: PokemonElementType.psychic, power: null, description: '이상한 염력파를 상대에게 발사하여 공격한다. 사용할 때마다 데미지가 바뀐다.' },
      { name: '리프레시', type: PokemonElementType.normal, power: null, description: '몸을 쉬게 하여 자신이 입은 독, 마비, 화상의 상태 이상을 치료한다.' },
    ],
  },
  kyogre: {
    flavorText: '많은 비와 큰 해일로 바다를 넓힌 신화의 포켓몬이다. 그란돈과 격하게 싸웠다.',
    stats: { hp: 100, attack: 100, defense: 90, specialAttack: 150, specialDefense: 140, speed: 90 },
    moves: [
      { name: '해수스파우팅', type: PokemonElementType.water, power: 150, description: '바닷물을 내뿜어 공격한다. 자신의 HP가 적을수록 기술의 위력이 떨어진다.' },
      { name: '절대영도', type: PokemonElementType.ice, power: null, description: '절대영도의 추위로 상대를 공격한다. 맞으면 일격에 기절한다.' },
      { name: '원시의힘', type: PokemonElementType.rock, power: 60, description: '원시의 힘으로 공격한다. 자신의 모든 능력이 오를 때가 있다.' },
      { name: '하이드로펌프', type: PokemonElementType.water, power: 110, description: '대량의 물을 세찬 기세로 상대에게 발사하여 공격한다.' },
    ],
  },
  latios: {
    flavorText: '높은 지능을 가진 포켓몬이다. 팔을 접어 날면 제트기를 추월할 만큼 빠르다.',
    stats: { hp: 80, attack: 90, defense: 80, specialAttack: 130, specialDefense: 110, speed: 110 },
    moves: [
      { name: '러스터퍼지', type: PokemonElementType.psychic, power: 95, description: '눈부신 빛을 발산하여 공격한다. 상대의 특수방어를 떨어뜨릴 때가 있다.' },
      { name: '사이코웨이브', type: PokemonElementType.psychic, power: null, description: '이상한 염력파를 상대에게 발사하여 공격한다. 사용할 때마다 데미지가 바뀐다.' },
      { name: '리프레시', type: PokemonElementType.normal, power: null, description: '몸을 쉬게 하여 자신이 입은 독, 마비, 화상의 상태 이상을 치료한다.' },
      { name: '추억의선물', type: PokemonElementType.dark, power: null, description: '자신은 기절하게 되지만 그 대신 상대의 공격과 특수공격을 크게 떨어뜨린다.' },
    ],
  },
  groudon: {
    flavorText: '고열로 물을 증발시켜 대지를 넓혔다고 전해진다. 가이오가와 격하게 싸웠다.',
    stats: { hp: 100, attack: 150, defense: 140, specialAttack: 100, specialDefense: 90, speed: 90 },
    moves: [
      { name: '분화', type: PokemonElementType.fire, power: 150, description: '분노를 폭발시켜 상대를 공격한다. 자신의 HP가 적을수록 기술의 위력이 떨어진다.' },
      { name: '땅가르기', type: PokemonElementType.ground, power: null, description: '땅이 갈라진 곳에 상대를 떨어뜨려 공격한다. 맞으면 일격에 기절한다.' },
      { name: '베어가르기', type: PokemonElementType.normal, power: 70, description: '발톱이나 낫 등으로 상대를 베어 갈라서 공격한다. 급소에 맞기 쉽다.' },
      { name: '벌크업', type: PokemonElementType.fighting, power: null, description: '몸에 힘을 담아 근육을 두껍게 해서 자신의 공격과 방어를 올린다.' },
    ],
  },
  rayquaza: {
    flavorText: '오존층을 날아다니며 먹이인 운석을 먹는다. 체내에 모인 운석의 에너지로 메가진화한다.',
    stats: { hp: 105, attack: 150, defense: 90, specialAttack: 150, specialDefense: 90, speed: 95 },
    moves: [
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '용의춤', type: PokemonElementType.dragon, power: null, description: '신비롭고 힘센 춤을 격렬하게 춘다. 자신의 공격과 스피드를 올린다.' },
      { name: '회오리', type: PokemonElementType.dragon, power: 40, description: '회오리를 일으켜 상대를 끌어들여 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '드래곤클로', type: PokemonElementType.dragon, power: 80, description: '날카롭고 뾰족한 거대한 발톱으로 상대를 베어 갈라서 공격한다.' },
    ],
  },
  jirachi: {
    flavorText: '깨어났을 때 머리의 종이에 쓴 소원을 이루어준다고 먼 옛날부터 구전되었다.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: '파멸의소원', type: PokemonElementType.steel, power: 140, description: '기술을 사용한 2턴 뒤에 무수한 빛의 다발이 상대를 공격한다.' },
      { name: '코스믹파워', type: PokemonElementType.psychic, power: null, description: '우주로부터 신비한 힘을 손에 넣음으로써 자신의 방어와 특수방어를 올린다.' },
      { name: '리프레시', type: PokemonElementType.normal, power: null, description: '몸을 쉬게 하여 자신이 입은 독, 마비, 화상의 상태 이상을 치료한다.' },
      { name: '희망사항', type: PokemonElementType.normal, power: null, description: '다음 턴에 자신의 HP를 최대 HP의 절반만큼 회복한다.' },
    ],
  },
  deoxys: {
    flavorText: '운석에 붙어 있던 우주 바이러스의 DNA가 변이하여 생겨난 포켓몬이다.',
    stats: { hp: 50, attack: 150, defense: 50, specialAttack: 150, specialDefense: 50, speed: 150 },
    moves: [
      { name: '사이코부스트', type: PokemonElementType.psychic, power: 140, description: '풀 파워로 상대를 공격한다. 쓰면 반동으로 자신의 특수공격이 크게 떨어진다.' },
      { name: '김밥말이', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 사용해 4-5턴 동안 상대를 휘감아 공격한다.' },
      { name: '순간이동', type: PokemonElementType.psychic, power: null, description: '야생 포켓몬과 배틀을 그만둔다. 마지막에 들어갔던 포켓몬센터가 있는 도시에도 갈 수 있다.' },
      { name: '코스믹파워', type: PokemonElementType.psychic, power: null, description: '우주로부터 신비한 힘을 손에 넣음으로써 자신의 방어와 특수방어를 올린다.' },
    ],
  },
  deoxys_speed: {
    flavorText: '운석에 붙어 있던 우주 바이러스의 DNA가 변이하여 생겨난 포켓몬이다.',
    stats: { hp: 50, attack: 95, defense: 90, specialAttack: 95, specialDefense: 90, speed: 180 },
    moves: [
      { name: '사이코부스트', type: PokemonElementType.psychic, power: 140, description: '풀 파워로 상대를 공격한다. 쓰면 반동으로 자신의 특수공격이 크게 떨어진다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '김밥말이', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 사용해 4-5턴 동안 상대를 휘감아 공격한다.' },
      { name: 'HP회복', type: PokemonElementType.normal, power: null, description: '세포를 재생시켜 자신의 최대 HP의 절반만큼 HP를 회복한다.' },
    ],
  },
  deoxys_attack: {
    flavorText: '운석에 붙어 있던 우주 바이러스의 DNA가 변이하여 생겨난 포켓몬이다.',
    stats: { hp: 50, attack: 180, defense: 20, specialAttack: 180, specialDefense: 20, speed: 150 },
    moves: [
      { name: '사이코부스트', type: PokemonElementType.psychic, power: 140, description: '풀 파워로 상대를 공격한다. 쓰면 반동으로 자신의 특수공격이 크게 떨어진다.' },
      { name: '김밥말이', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 사용해 4-5턴 동안 상대를 휘감아 공격한다.' },
      { name: '순간이동', type: PokemonElementType.psychic, power: null, description: '야생 포켓몬과 배틀을 그만둔다. 마지막에 들어갔던 포켓몬센터가 있는 도시에도 갈 수 있다.' },
      { name: '코스믹파워', type: PokemonElementType.psychic, power: null, description: '우주로부터 신비한 힘을 손에 넣음으로써 자신의 방어와 특수방어를 올린다.' },
    ],
  },
  deoxys_defense: {
    flavorText: '운석에 붙어 있던 우주 바이러스의 DNA가 변이하여 생겨난 포켓몬이다.',
    stats: { hp: 50, attack: 70, defense: 160, specialAttack: 70, specialDefense: 160, speed: 90 },
    moves: [
      { name: '사이코부스트', type: PokemonElementType.psychic, power: 140, description: '풀 파워로 상대를 공격한다. 쓰면 반동으로 자신의 특수공격이 크게 떨어진다.' },
      { name: '김밥말이', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 사용해 4-5턴 동안 상대를 휘감아 공격한다.' },
      { name: '순간이동', type: PokemonElementType.psychic, power: null, description: '야생 포켓몬과 배틀을 그만둔다. 마지막에 들어갔던 포켓몬센터가 있는 도시에도 갈 수 있다.' },
      { name: '미러코트', type: PokemonElementType.psychic, power: null, description: '상대에게 받은 특수공격의 데미지를 2배로 만들어 그 상대에게 돌려준다.' },
    ],
  },
  turtwig: {
    flavorText: '태양의 빛을 쬐어 전신으로 광합성을 한다. 등껍질은 흙이 딱딱해진 것이다.',
    stats: { hp: 55, attack: 68, defense: 64, specialAttack: 45, specialDefense: 55, speed: 31 },
    moves: [
      { name: '껍질에숨기', type: PokemonElementType.water, power: null, description: '껍질에 숨어 몸을 보호하여 자신의 방어를 올린다.' },
      { name: '잎날가르기', type: PokemonElementType.grass, power: 55, description: '잎사귀를 날려 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
      { name: '흡수', type: PokemonElementType.grass, power: 20, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
      { name: '메가드레인', type: PokemonElementType.grass, power: 40, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
    ],
  },
  grotle: {
    flavorText: '숲 속의 물가에서 산다. 낮에는 숲 밖으로 나와서 등껍질의 나무에 빛을 쬔다.',
    stats: { hp: 75, attack: 89, defense: 85, specialAttack: 55, specialDefense: 65, speed: 36 },
    moves: [
      { name: '껍질에숨기', type: PokemonElementType.water, power: null, description: '껍질에 숨어 몸을 보호하여 자신의 방어를 올린다.' },
      { name: '잎날가르기', type: PokemonElementType.grass, power: 55, description: '잎사귀를 날려 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
      { name: '흡수', type: PokemonElementType.grass, power: 20, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
      { name: '메가드레인', type: PokemonElementType.grass, power: 40, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
    ],
  },
  torterra: {
    flavorText: '오랜 옛날 사람들은 대지 밑에 거대한 토대부기가 있다고 공상했었다.',
    stats: { hp: 95, attack: 109, defense: 105, specialAttack: 75, specialDefense: 85, speed: 56 },
    moves: [
      { name: '우드해머', type: PokemonElementType.grass, power: 120, description: '단단한 몸통을 상대에게 부딪쳐서 공격한다. 자신도 상당한 데미지를 입는다.' },
      { name: '껍질에숨기', type: PokemonElementType.water, power: null, description: '껍질에 숨어 몸을 보호하여 자신의 방어를 올린다.' },
      { name: '잎날가르기', type: PokemonElementType.grass, power: 55, description: '잎사귀를 날려 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
      { name: '흡수', type: PokemonElementType.grass, power: 20, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
    ],
  },
  chimchar: {
    flavorText: '엉덩이의 불꽃은 배에서 만들어진 가스가 연료다. 비에 젖어도 꺼지지 않는다.',
    stats: { hp: 44, attack: 58, defense: 44, specialAttack: 58, specialDefense: 44, speed: 61 },
    moves: [
      { name: '게으름피우기', type: PokemonElementType.normal, power: null, description: '게으름 피우며 쉰다. 자신의 HP를 최대 HP의 절반만큼 회복한다.' },
      { name: '화염바퀴', type: PokemonElementType.fire, power: 60, description: '불꽃을 둘러 상대에게 돌진하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  monferno: {
    flavorText: '꼬리의 불꽃 세기를 잘 컨트롤하여 자신에게 맞는 거리를 두고 싸운다.',
    stats: { hp: 64, attack: 78, defense: 52, specialAttack: 78, specialDefense: 52, speed: 81 },
    moves: [
      { name: '게으름피우기', type: PokemonElementType.normal, power: null, description: '게으름 피우며 쉰다. 자신의 HP를 최대 HP의 절반만큼 회복한다.' },
      { name: '마하펀치', type: PokemonElementType.fighting, power: 40, description: '눈에 보이지 않는 굉장한 속도로 펀치를 날린다. 반드시 선제공격을 할 수 있다.' },
      { name: '화염바퀴', type: PokemonElementType.fire, power: 60, description: '불꽃을 둘러 상대에게 돌진하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
    ],
  },
  infernape: {
    flavorText: '머리에서 타오르는 불꽃처럼 과격한 성격의 포켓몬이다. 스피드는 누구에게도 지지 않는다.',
    stats: { hp: 76, attack: 104, defense: 71, specialAttack: 104, specialDefense: 71, speed: 108 },
    moves: [
      { name: '마하펀치', type: PokemonElementType.fighting, power: 40, description: '눈에 보이지 않는 굉장한 속도로 펀치를 날린다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '화염바퀴', type: PokemonElementType.fire, power: 60, description: '불꽃을 둘러 상대에게 돌진하여 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
    ],
  },
  piplup: {
    flavorText: '신세를 지는 것을 싫어한다. 트레이너의 지시를 듣지 않아 친해지기 어렵다.',
    stats: { hp: 53, attack: 51, defense: 53, specialAttack: 61, specialDefense: 56, speed: 40 },
    moves: [
      { name: '회전부리', type: PokemonElementType.flying, power: 80, description: '회전하면서 뾰족한 부리를 상대에게 꿰찔러 공격한다.' },
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
    ],
  },
  prinplup: {
    flavorText: '무리를 만들지 않고 혼자 생활한다. 어떤 팽태자라도 자신이 제일 훌륭하다고 생각하는 듯하다.',
    stats: { hp: 64, attack: 66, defense: 68, specialAttack: 81, specialDefense: 76, speed: 50 },
    moves: [
      { name: '회전부리', type: PokemonElementType.flying, power: 80, description: '회전하면서 뾰족한 부리를 상대에게 꿰찔러 공격한다.' },
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
    ],
  },
  empoleon: {
    flavorText: '제트스키와 맞먹는 속도로 헤엄친다. 날개 가장자리는 날카롭게 유빙을 절단한다.',
    stats: { hp: 84, attack: 86, defense: 88, specialAttack: 111, specialDefense: 101, speed: 60 },
    moves: [
      { name: '회전부리', type: PokemonElementType.flying, power: 80, description: '회전하면서 뾰족한 부리를 상대에게 꿰찔러 공격한다.' },
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '아쿠아제트', type: PokemonElementType.water, power: 40, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진한다. 반드시 선제공격할 수 있다.' },
    ],
  },
  starly: {
    flavorText: '많은 수가 무리를 이루어 행동한다. 몸은 작지만 날개 치는 힘은 매우 강하다.',
    stats: { hp: 40, attack: 55, defense: 30, specialAttack: 30, specialDefense: 30, speed: 60 },
    moves: [
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '날려버리기', type: PokemonElementType.normal, power: null, description: '상대를 날려버려서 교대할 포켓몬을 끌어낸다. 야생의 경우에는 배틀이 끝난다.' },
      { name: '브레이브버드', type: PokemonElementType.flying, power: 120, description: '날개를 접어 저공비행으로 돌격한다. 자신도 상당한 데미지를 입는다.' },
      { name: '전광석화', type: PokemonElementType.normal, power: 40, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진한다. 반드시 선제공격할 수 있다.' },
    ],
  },
  staravia: {
    flavorText: '큰 그룹을 만들어 행동하는 습성이 있다. 그룹 간의 분쟁이 격하다.',
    stats: { hp: 55, attack: 75, defense: 50, specialAttack: 40, specialDefense: 40, speed: 80 },
    moves: [
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '날려버리기', type: PokemonElementType.normal, power: null, description: '상대를 날려버려서 교대할 포켓몬을 끌어낸다. 야생의 경우에는 배틀이 끝난다.' },
      { name: '브레이브버드', type: PokemonElementType.flying, power: 120, description: '날개를 접어 저공비행으로 돌격한다. 자신도 상당한 데미지를 입는다.' },
      { name: '전광석화', type: PokemonElementType.normal, power: 40, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진한다. 반드시 선제공격할 수 있다.' },
    ],
  },
  staraptor: {
    flavorText: '날개와 발의 근육이 강해 작은 포켓몬을 붙잡은 채로 너끈히 날 수 있다.',
    stats: { hp: 85, attack: 120, defense: 70, specialAttack: 50, specialDefense: 60, speed: 100 },
    moves: [
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '날려버리기', type: PokemonElementType.normal, power: null, description: '상대를 날려버려서 교대할 포켓몬을 끌어낸다. 야생의 경우에는 배틀이 끝난다.' },
      { name: '브레이브버드', type: PokemonElementType.flying, power: 120, description: '날개를 접어 저공비행으로 돌격한다. 자신도 상당한 데미지를 입는다.' },
      { name: '인파이트', type: PokemonElementType.fighting, power: 120, description: '방어를 포기하고 상대 깊숙이 돌격한다. 자신의 방어와 특수방어가 떨어진다.' },
    ],
  },
  bidoof: {
    flavorText: '어떤 것에도 동요하지 않는 대담한 신경의 소유자다. 보기보다는 기민하게 활동한다.',
    stats: { hp: 59, attack: 45, defense: 40, specialAttack: 35, specialDefense: 40, speed: 31 },
    moves: [
      { name: '필살앞니', type: PokemonElementType.normal, power: 80, description: '날카로운 앞니로 강하게 물어서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '분노의앞니', type: PokemonElementType.normal, power: null, description: '날카로운 앞니로 강하게 물어서 공격한다. 상대의 HP는 절반이 된다.' },
      { name: '하품', type: PokemonElementType.normal, power: null, description: '큰 하품으로 졸음을 유도한다. 다음 턴에 상대를 잠듦 상태로 만든다.' },
      { name: '망각술', type: PokemonElementType.psychic, power: null, description: '머리를 비워서 순간적으로 무언가를 잊어버림으로써 자신의 특수방어를 크게 올린다.' },
    ],
  },
  bibarel: {
    flavorText: '예리한 앞니로 갉아 얻은 나뭇가지나 뿌리를 쌓아 물가에 부지런히 보금자리를 만든다.',
    stats: { hp: 79, attack: 85, defense: 60, specialAttack: 55, specialDefense: 60, speed: 71 },
    moves: [
      { name: '필살앞니', type: PokemonElementType.normal, power: 80, description: '날카로운 앞니로 강하게 물어서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '분노의앞니', type: PokemonElementType.normal, power: null, description: '날카로운 앞니로 강하게 물어서 공격한다. 상대의 HP는 절반이 된다.' },
      { name: '하품', type: PokemonElementType.normal, power: null, description: '큰 하품으로 졸음을 유도한다. 다음 턴에 상대를 잠듦 상태로 만든다.' },
      { name: '망각술', type: PokemonElementType.psychic, power: null, description: '머리를 비워서 순간적으로 무언가를 잊어버림으로써 자신의 특수방어를 크게 올린다.' },
    ],
  },
  kricketot: {
    flavorText: '더듬이를 서로 부딪쳐 내는 소리로 동료와 대화한다. 음색은 가을밤의 정취를 잘 나타낸다.',
    stats: { hp: 37, attack: 25, defense: 41, specialAttack: 25, specialDefense: 41, speed: 25 },
    moves: [
      { name: '벌레먹기', type: PokemonElementType.bug, power: 60, description: '물어서 공격한다. 상대가 나무열매를 지니고 있을 때 먹어서 나무열매의 효과를 받을 수 있다.' },
      { name: '참기', type: PokemonElementType.normal, power: null, description: '2턴 동안 공격을 견뎌 입은 데미지를 2배로 만들어 상대에게 돌려준다.' },
      { name: '울음소리', type: PokemonElementType.normal, power: null, description: '귀여운 울음소리를 들려주고 관심을 끌어 방심한 사이에 상대의 공격을 떨어뜨린다.' },
    ],
  },
  kricketune: {
    flavorText: '울 때는 나이프 같은 팔을 가슴 앞에서 교차시킨다. 즉흥으로 멜로디를 만든다.',
    stats: { hp: 77, attack: 85, defense: 51, specialAttack: 55, specialDefense: 51, speed: 65 },
    moves: [
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
      { name: '노래하기', type: PokemonElementType.normal, power: null, description: '기분 좋은 예쁜 노랫소리를 들려주고 상대를 잠듦 상태로 만든다.' },
      { name: '벌레의야단법석', type: PokemonElementType.bug, power: 90, description: '날개의 진동으로 음파를 일으켜서 공격한다. 상대의 특수방어를 떨어뜨릴 때가 있다.' },
      { name: '흡혈', type: PokemonElementType.bug, power: 80, description: '피를 빨아서 상대를 공격한다. 준 데미지의 절반을 HP로 회복한다.' },
    ],
  },
  shinx: {
    flavorText: '몸을 움직일 때마다 근육이 늘어났다 줄어들었다 하여 전기가 발생한다. 궁지에 몰리면 몸이 빛난다.',
    stats: { hp: 45, attack: 65, defense: 34, specialAttack: 40, specialDefense: 34, speed: 45 },
    moves: [
      { name: '스파크', type: PokemonElementType.electric, power: 65, description: '전기를 둘러 상대에게 돌진하여 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
      { name: '방전', type: PokemonElementType.electric, power: 80, description: '눈부신 전격으로 자신의 주위에 있는 포켓몬을 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '번개엄니', type: PokemonElementType.electric, power: 65, description: '전기를 모은 이빨로 문다. 상대를 풀죽게 하거나 마비 상태로 만들 때가 있다.' },
    ],
  },
  luxio: {
    flavorText: '발톱에서는 한 방에 적을 기절시킬 정도로 강한 전류가 흐른다. 여러 마리가 그룹을 이루어 산다.',
    stats: { hp: 60, attack: 85, defense: 49, specialAttack: 60, specialDefense: 49, speed: 60 },
    moves: [
      { name: '스파크', type: PokemonElementType.electric, power: 65, description: '전기를 둘러 상대에게 돌진하여 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
      { name: '방전', type: PokemonElementType.electric, power: 80, description: '눈부신 전격으로 자신의 주위에 있는 포켓몬을 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '번개엄니', type: PokemonElementType.electric, power: 65, description: '전기를 모은 이빨로 문다. 상대를 풀죽게 하거나 마비 상태로 만들 때가 있다.' },
    ],
  },
  luxray: {
    flavorText: '렌트라의 투시 능력은 위험한 것을 발견할 때 매우 도움이 된다.',
    stats: { hp: 80, attack: 120, defense: 79, specialAttack: 95, specialDefense: 79, speed: 70 },
    moves: [
      { name: '스파크', type: PokemonElementType.electric, power: 65, description: '전기를 둘러 상대에게 돌진하여 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
      { name: '방전', type: PokemonElementType.electric, power: 80, description: '눈부신 전격으로 자신의 주위에 있는 포켓몬을 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '번개엄니', type: PokemonElementType.electric, power: 65, description: '전기를 모은 이빨로 문다. 상대를 풀죽게 하거나 마비 상태로 만들 때가 있다.' },
    ],
  },
  budew: {
    flavorText: '따뜻한 햇볕을 쬐면 봉오리를 펴서 꽃가루를 날린다. 깨끗한 물 가까이에 거처가 있다.',
    stats: { hp: 40, attack: 30, defense: 35, specialAttack: 50, specialDefense: 70, speed: 55 },
    moves: [
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
      { name: '저리가루', type: PokemonElementType.grass, power: null, description: '저리 가루를 많이 흩뿌려서 상대를 마비 상태로 만든다.' },
      { name: '성장', type: PokemonElementType.normal, power: null, description: '몸을 일시에 크게 성장시켜 공격과 특수공격을 올린다.' },
      { name: '흡수', type: PokemonElementType.grass, power: 20, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
    ],
  },
  roserade: {
    flavorText: '달콤한 향기로 먹이를 유인해 양팔의 독 채찍을 사용하여 찌르거나 조여서 꼼짝 못하게 한다.',
    stats: { hp: 60, attack: 70, defense: 65, specialAttack: 125, specialDefense: 105, speed: 90 },
    moves: [
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '달콤한향기', type: PokemonElementType.normal, power: null, description: '향기로 상대의 회피율을 크게 떨어뜨린다. 풀밭 등에서 쓰면 포켓몬이 다가온다.' },
      { name: '메가드레인', type: PokemonElementType.grass, power: 40, description: '양분을 흡수하여 공격한다. 상대에게 입힌 데미지의 절반에 해당하는 HP를 회복할 수 있다.' },
      { name: '매지컬리프', type: PokemonElementType.grass, power: 60, description: '상대를 추적하는 이상한 잎사귀를 흩뿌린다. 공격은 반드시 명중한다.' },
    ],
  },
  cranidos: {
    flavorText: '철구 같은 화석에서 부활한 고대 포켓몬이다. 박치기로 먹이를 꼼짝 못하게 한다.',
    stats: { hp: 67, attack: 125, defense: 40, specialAttack: 30, specialDefense: 30, speed: 58 },
    moves: [
      { name: '양날박치기', type: PokemonElementType.rock, power: 150, description: '목숨을 걸고 혼신의 힘으로 상대에게 박치기를 한다. 자신도 굉장한 데미지를 입는다.' },
      { name: '따라가때리기', type: PokemonElementType.dark, power: 40, description: '상대 포켓몬이 교체될 때 기술을 쓰면 2배의 위력으로 공격할 수 있다.' },
      { name: '기충전', type: PokemonElementType.normal, power: null, description: '깊게 숨을 들이마셔 기합을 넣는다. 자신의 공격이 급소에 맞기 쉬워진다.' },
      { name: '원시의힘', type: PokemonElementType.rock, power: 60, description: '원시의 힘으로 공격한다. 자신의 모든 능력이 오를 때가 있다.' },
    ],
  },
  rampardos: {
    flavorText: '어떤 충격에도 견딜 수 있는 두꺼운 두개골에 눌려 뇌가 자라지 않았다.',
    stats: { hp: 97, attack: 165, defense: 60, specialAttack: 65, specialDefense: 50, speed: 58 },
    moves: [
      { name: '양날박치기', type: PokemonElementType.rock, power: 150, description: '목숨을 걸고 혼신의 힘으로 상대에게 박치기를 한다. 자신도 굉장한 데미지를 입는다.' },
      { name: '따라가때리기', type: PokemonElementType.dark, power: 40, description: '상대 포켓몬이 교체될 때 기술을 쓰면 2배의 위력으로 공격할 수 있다.' },
      { name: '기충전', type: PokemonElementType.normal, power: null, description: '깊게 숨을 들이마셔 기합을 넣는다. 자신의 공격이 급소에 맞기 쉬워진다.' },
      { name: '원시의힘', type: PokemonElementType.rock, power: 60, description: '원시의 힘으로 공격한다. 자신의 모든 능력이 오를 때가 있다.' },
    ],
  },
  shieldon: {
    flavorText: '큰 나무의 줄기에 비벼서 단단한 얼굴을 닦는 습성이 있다. 뒤로부터의 공격에 약하다.',
    stats: { hp: 30, attack: 42, defense: 118, specialAttack: 42, specialDefense: 88, speed: 30 },
    moves: [
      { name: '메탈버스트', type: PokemonElementType.steel, power: null, description: '기술을 쓰기 전에 마지막으로 받은 기술의 데미지를 늘려서 기술을 쓴 상대에게 돌려준다.' },
      { name: '금속음', type: PokemonElementType.steel, power: null, description: '금속을 긁을 때 나는 듯한 싫은 소리를 들려준다. 상대의 특수방어를 크게 떨어뜨린다.' },
      { name: '원시의힘', type: PokemonElementType.rock, power: 60, description: '원시의 힘으로 공격한다. 자신의 모든 능력이 오를 때가 있다.' },
      { name: '아이언헤드', type: PokemonElementType.steel, power: 80, description: '강철과 같은 단단한 머리로 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  bastiodon: {
    flavorText: '옆에 한 줄로 세우면 어떤 포켓몬이라도 돌파하지 못한다. 그렇게 하여 아기를 지켜냈다.',
    stats: { hp: 60, attack: 52, defense: 168, specialAttack: 47, specialDefense: 138, speed: 30 },
    moves: [
      { name: '메탈버스트', type: PokemonElementType.steel, power: null, description: '기술을 쓰기 전에 마지막으로 받은 기술의 데미지를 늘려서 기술을 쓴 상대에게 돌려준다.' },
      { name: '금속음', type: PokemonElementType.steel, power: null, description: '금속을 긁을 때 나는 듯한 싫은 소리를 들려준다. 상대의 특수방어를 크게 떨어뜨린다.' },
      { name: '블록', type: PokemonElementType.normal, power: null, description: '양팔을 벌려 막아서서 상대의 도주로를 가로막아 도망칠 수 없게 한다.' },
      { name: '원시의힘', type: PokemonElementType.rock, power: 60, description: '원시의 힘으로 공격한다. 자신의 모든 능력이 오를 때가 있다.' },
    ],
  },
  burmy_plant: {
    flavorText: '차가운 초겨울 바람을 막으려고 작은 가지나 낙엽을 재료로 도롱이를 만들어 몸을 감싼다.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: '벌레먹기', type: PokemonElementType.bug, power: 60, description: '물어서 공격한다. 상대가 나무열매를 지니고 있을 때 먹어서 나무열매의 효과를 받을 수 있다.' },
      { name: '몸통박치기', type: PokemonElementType.normal, power: 40, description: '상대를 향해서 몸 전체를 부딪쳐가며 공격한다.' },
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
      { name: '방어', type: PokemonElementType.normal, power: null, description: '상대의 공격을 전혀 받지 않는다. 연속으로 쓰면 실패하기 쉽다.' },
    ],
  },
  burmy_sandy: {
    flavorText: '차가운 초겨울 바람을 막으려고 작은 가지나 낙엽을 재료로 도롱이를 만들어 몸을 감싼다.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: '벌레먹기', type: PokemonElementType.bug, power: 60, description: '물어서 공격한다. 상대가 나무열매를 지니고 있을 때 먹어서 나무열매의 효과를 받을 수 있다.' },
      { name: '몸통박치기', type: PokemonElementType.normal, power: 40, description: '상대를 향해서 몸 전체를 부딪쳐가며 공격한다.' },
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
      { name: '방어', type: PokemonElementType.normal, power: null, description: '상대의 공격을 전혀 받지 않는다. 연속으로 쓰면 실패하기 쉽다.' },
    ],
  },
  burmy_trash: {
    flavorText: '차가운 초겨울 바람을 막으려고 작은 가지나 낙엽을 재료로 도롱이를 만들어 몸을 감싼다.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: '벌레먹기', type: PokemonElementType.bug, power: 60, description: '물어서 공격한다. 상대가 나무열매를 지니고 있을 때 먹어서 나무열매의 효과를 받을 수 있다.' },
      { name: '몸통박치기', type: PokemonElementType.normal, power: 40, description: '상대를 향해서 몸 전체를 부딪쳐가며 공격한다.' },
      { name: '잠재파워', type: PokemonElementType.normal, power: 60, description: '기술을 쓴 포켓몬에 따라 기술의 타입이 바뀐다.' },
      { name: '방어', type: PokemonElementType.normal, power: null, description: '상대의 공격을 전혀 받지 않는다. 연속으로 쓰면 실패하기 쉽다.' },
    ],
  },
  wormadam_plant: {
    flavorText: '진화한 장소에 따라 모습이 바뀐다. 가까이 있는 재료가 몸의 일부가 된다.',
    stats: { hp: 60, attack: 59, defense: 85, specialAttack: 79, specialDefense: 105, speed: 36 },
    moves: [
      { name: '잎날가르기', type: PokemonElementType.grass, power: 55, description: '잎사귀를 날려 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
      { name: '성장', type: PokemonElementType.normal, power: null, description: '몸을 일시에 크게 성장시켜 공격과 특수공격을 올린다.' },
      { name: '벌레먹기', type: PokemonElementType.bug, power: 60, description: '물어서 공격한다. 상대가 나무열매를 지니고 있을 때 먹어서 나무열매의 효과를 받을 수 있다.' },
      { name: '리프스톰', type: PokemonElementType.grass, power: 130, description: '뾰족한 잎사귀로 상대에게 바람을 일으킨다. 사용하면 반동으로 자신의 특수공격이 크게 떨어진다.' },
    ],
  },
  wormadam_sandy: {
    flavorText: '진화한 장소에 따라 모습이 바뀐다. 가까이 있는 재료가 몸의 일부가 된다.',
    stats: { hp: 60, attack: 79, defense: 105, specialAttack: 59, specialDefense: 85, speed: 36 },
    moves: [
      { name: '땅가르기', type: PokemonElementType.ground, power: null, description: '땅이 갈라진 곳에 상대를 떨어뜨려 공격한다. 맞으면 일격에 기절한다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
      { name: '벌레먹기', type: PokemonElementType.bug, power: 60, description: '물어서 공격한다. 상대가 나무열매를 지니고 있을 때 먹어서 나무열매의 효과를 받을 수 있다.' },
      { name: '염동력', type: PokemonElementType.psychic, power: 50, description: '약한 염동력을 상대에게 보내어 공격한다. 상대를 혼란시킬 때가 있다.' },
    ],
  },
  wormadam_trash: {
    flavorText: '진화한 장소에 따라 모습이 바뀐다. 가까이 있는 재료가 몸의 일부가 된다.',
    stats: { hp: 60, attack: 69, defense: 95, specialAttack: 69, specialDefense: 95, speed: 36 },
    moves: [
      { name: '미러샷', type: PokemonElementType.steel, power: 65, description: '갈고 닦은 몸에서 섬광의 힘을 상대에게 쏜다. 명중률을 떨어뜨릴 때가 있다.' },
      { name: '금속음', type: PokemonElementType.steel, power: null, description: '금속을 긁을 때 나는 듯한 싫은 소리를 들려준다. 상대의 특수방어를 크게 떨어뜨린다.' },
      { name: '벌레먹기', type: PokemonElementType.bug, power: 60, description: '물어서 공격한다. 상대가 나무열매를 지니고 있을 때 먹어서 나무열매의 효과를 받을 수 있다.' },
      { name: '염동력', type: PokemonElementType.psychic, power: 50, description: '약한 염동력을 상대에게 보내어 공격한다. 상대를 혼란시킬 때가 있다.' },
    ],
  },
  mothim: {
    flavorText: '꽃의 꿀을 매우 좋아한다. 세꿀버리가 모아둔 꿀을 가로채어 먹어 버린다.',
    stats: { hp: 70, attack: 94, defense: 50, specialAttack: 94, specialDefense: 50, speed: 66 },
    moves: [
      { name: '보호색', type: PokemonElementType.normal, power: null, description: '물가나 풀밭, 동굴 등 있는 장소에 맞춰서 자신의 타입을 바꾼다.' },
      { name: '독가루', type: PokemonElementType.poison, power: null, description: '독이 있는 가루를 많이 흩뿌려서 상대를 독 상태로 만든다.' },
      { name: '은빛바람', type: PokemonElementType.bug, power: 60, description: '바람에 날개 가루를 날려서 상대를 공격한다. 자신의 모든 능력이 올라갈 때가 있다.' },
      { name: '바람일으키기', type: PokemonElementType.flying, power: 40, description: '날개로 일으킨 격한 바람을 상대에게 부딪쳐서 공격한다.' },
    ],
  },
  combee_female: {
    flavorText: '태어났을 때부터 3마리가 함께한다. 비퀸을 기쁘게 하기 위해 항상 꽃의 꿀을 모으고 있다.',
    stats: { hp: 30, attack: 30, defense: 42, specialAttack: 30, specialDefense: 42, speed: 70 },
    moves: [
      { name: '바람일으키기', type: PokemonElementType.flying, power: 40, description: '날개로 일으킨 격한 바람을 상대에게 부딪쳐서 공격한다.' },
      { name: '달콤한향기', type: PokemonElementType.normal, power: null, description: '향기로 상대의 회피율을 크게 떨어뜨린다. 풀밭 등에서 쓰면 포켓몬이 다가온다.' },
      { name: '벌레먹기', type: PokemonElementType.bug, power: 60, description: '물어서 공격한다. 상대가 나무열매를 지니고 있을 때 먹어서 나무열매의 효과를 받을 수 있다.' },
    ],
  },
  combee_male: {
    flavorText: '태어났을 때부터 3마리가 함께한다. 비퀸을 기쁘게 하기 위해 항상 꽃의 꿀을 모으고 있다.',
    stats: { hp: 30, attack: 30, defense: 42, specialAttack: 30, specialDefense: 42, speed: 70 },
    moves: [
      { name: '바람일으키기', type: PokemonElementType.flying, power: 40, description: '날개로 일으킨 격한 바람을 상대에게 부딪쳐서 공격한다.' },
      { name: '달콤한향기', type: PokemonElementType.normal, power: null, description: '향기로 상대의 회피율을 크게 떨어뜨린다. 풀밭 등에서 쓰면 포켓몬이 다가온다.' },
      { name: '벌레먹기', type: PokemonElementType.bug, power: 60, description: '물어서 공격한다. 상대가 나무열매를 지니고 있을 때 먹어서 나무열매의 효과를 받을 수 있다.' },
    ],
  },
  vespiquen: {
    flavorText: '몸통은 아기들의 둥지다. 여러 페로몬을 내어 새끼들을 자유롭게 조종한다.',
    stats: { hp: 70, attack: 80, defense: 102, specialAttack: 80, specialDefense: 102, speed: 40 },
    moves: [
      { name: '공격지령', type: PokemonElementType.bug, power: 90, description: '부하를 불러내어 상대를 향해서 공격시킨다. 급소에 맞기 쉽다.' },
      { name: '회복지령', type: PokemonElementType.bug, power: null, description: '부하를 불러내어 상처를 회복한다. 최대 HP의 절반만큼 자신의 HP를 회복한다.' },
      { name: '방어지령', type: PokemonElementType.bug, power: null, description: '부하를 불러내어 자신의 몸을 뒤덮게 한다. 방어와 특수방어를 올릴 수 있다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
    ],
  },
  pachirisu: {
    flavorText: '정전기가 모여 톡톡 튀는 솜털을 자신이 좋아하는 나무열매와 함께 나무줄기의 구멍에 숨긴다.',
    stats: { hp: 60, attack: 45, defense: 70, specialAttack: 45, specialDefense: 90, speed: 95 },
    moves: [
      { name: '천사의키스', type: PokemonElementType.normal, power: null, description: '천사처럼 귀엽게 키스하여 상대를 혼란시킨다.' },
      { name: '스파크', type: PokemonElementType.electric, power: 65, description: '전기를 둘러 상대에게 돌진하여 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '분노의앞니', type: PokemonElementType.normal, power: null, description: '날카로운 앞니로 강하게 물어서 공격한다. 상대의 HP는 절반이 된다.' },
      { name: '방전', type: PokemonElementType.electric, power: 80, description: '눈부신 전격으로 자신의 주위에 있는 포켓몬을 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  buizel: {
    flavorText: '2개의 꼬리를 스크루처럼 돌려서 헤엄친다. 잠수할 때는 공기주머니가 오그라든다.',
    stats: { hp: 55, attack: 65, defense: 35, specialAttack: 60, specialDefense: 30, speed: 85 },
    moves: [
      { name: '소닉붐', type: PokemonElementType.normal, power: null, description: '충격파를 상대에 부딪쳐서 공격한다. 언제나 20의 데미지를 준다.' },
      { name: '칼바람', type: PokemonElementType.normal, power: 80, description: '바람의 칼날을 만들어 2턴째에 상대를 공격한다. 급소에 맞기 쉽다.' },
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
      { name: '아쿠아제트', type: PokemonElementType.water, power: 40, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진한다. 반드시 선제공격할 수 있다.' },
    ],
  },
  floatzel: {
    flavorText: '발달한 부낭으로 뜬다. 물에 빠진 사람을 구조하는 것을 돕는 포켓몬이다.',
    stats: { hp: 85, attack: 105, defense: 55, specialAttack: 85, specialDefense: 50, speed: 115 },
    moves: [
      { name: '소닉붐', type: PokemonElementType.normal, power: null, description: '충격파를 상대에 부딪쳐서 공격한다. 언제나 20의 데미지를 준다.' },
      { name: '칼바람', type: PokemonElementType.normal, power: 80, description: '바람의 칼날을 만들어 2턴째에 상대를 공격한다. 급소에 맞기 쉽다.' },
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
      { name: '아쿠아제트', type: PokemonElementType.water, power: 40, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진한다. 반드시 선제공격할 수 있다.' },
    ],
  },
  cherubi: {
    flavorText: '햇빛으로 빨갛게 물들었다. 영양분이 흡수되어 작은 구슬이 시들면 곧 진화한다는 뜻이다.',
    stats: { hp: 45, attack: 35, defense: 45, specialAttack: 62, specialDefense: 53, speed: 35 },
    moves: [
      { name: '주술', type: PokemonElementType.normal, power: null, description: '하늘을 향해 기도를 올려 상대의 공격을 급소에 맞지 않게 한다.' },
      { name: '성장', type: PokemonElementType.normal, power: null, description: '몸을 일시에 크게 성장시켜 공격과 특수공격을 올린다.' },
      { name: '씨뿌리기', type: PokemonElementType.grass, power: null, description: '씨가 뿌려진 상대의 HP를 매 턴 조금씩 흡수하여 자신의 HP를 회복한다.' },
      { name: '고민씨', type: PokemonElementType.grass, power: null, description: '마음을 괴롭히는 씨앗을 심는다. 상대를 잠잘 수 없게 해서 특성을 불면으로 만든다.' },
    ],
  },
  cherrim: {
    flavorText: '봉오리가 태양의 빛을 쬐어 꽃잎이 피면 활발하게 움직일 수 있게 된다.',
    stats: { hp: 70, attack: 60, defense: 70, specialAttack: 87, specialDefense: 78, speed: 85 },
    moves: [
      { name: '꽃잎댄스', type: PokemonElementType.grass, power: 120, description: '2-3턴 동안 꽃을 흩뿌려서 상대를 공격한다. 흩뿌린 뒤에는 혼란에 빠진다.' },
      { name: '주술', type: PokemonElementType.normal, power: null, description: '하늘을 향해 기도를 올려 상대의 공격을 급소에 맞지 않게 한다.' },
      { name: '성장', type: PokemonElementType.normal, power: null, description: '몸을 일시에 크게 성장시켜 공격과 특수공격을 올린다.' },
      { name: '씨뿌리기', type: PokemonElementType.grass, power: null, description: '씨가 뿌려진 상대의 HP를 매 턴 조금씩 흡수하여 자신의 HP를 회복한다.' },
    ],
  },
  shellos_east: {
    flavorText: '부드러운 몸을 강하게 누르면 보랏빛이 나는 정체불명의 액체가 배어 나오므로 주의가 필요하다.',
    stats: { hp: 76, attack: 48, defense: 48, specialAttack: 57, specialDefense: 62, speed: 34 },
    moves: [
      { name: '진흙폭탄', type: PokemonElementType.ground, power: 65, description: '단단한 진흙구슬을 상대에게 발사하여 공격한다. 명중률을 떨어뜨릴 때가 있다.' },
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: 'HP회복', type: PokemonElementType.normal, power: null, description: '세포를 재생시켜 자신의 최대 HP의 절반만큼 HP를 회복한다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
    ],
  },
  shellos_west: {
    flavorText: '부드러운 몸을 강하게 누르면 보랏빛이 나는 정체불명의 액체가 배어 나오므로 주의가 필요하다.',
    stats: { hp: 76, attack: 48, defense: 48, specialAttack: 57, specialDefense: 62, speed: 34 },
    moves: [
      { name: '진흙폭탄', type: PokemonElementType.ground, power: 65, description: '단단한 진흙구슬을 상대에게 발사하여 공격한다. 명중률을 떨어뜨릴 때가 있다.' },
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: 'HP회복', type: PokemonElementType.normal, power: null, description: '세포를 재생시켜 자신의 최대 HP의 절반만큼 HP를 회복한다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
    ],
  },
  gastrodon_east: {
    flavorText: '천적에게 습격당했을 때는 보라색 액체를 몸에서 내어 도망간다.',
    stats: { hp: 111, attack: 83, defense: 68, specialAttack: 92, specialDefense: 82, speed: 39 },
    moves: [
      { name: '진흙폭탄', type: PokemonElementType.ground, power: 65, description: '단단한 진흙구슬을 상대에게 발사하여 공격한다. 명중률을 떨어뜨릴 때가 있다.' },
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: 'HP회복', type: PokemonElementType.normal, power: null, description: '세포를 재생시켜 자신의 최대 HP의 절반만큼 HP를 회복한다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
    ],
  },
  gastrodon_west: {
    flavorText: '천적에게 습격당했을 때는 보라색 액체를 몸에서 내어 도망간다.',
    stats: { hp: 111, attack: 83, defense: 68, specialAttack: 92, specialDefense: 82, speed: 39 },
    moves: [
      { name: '진흙폭탄', type: PokemonElementType.ground, power: 65, description: '단단한 진흙구슬을 상대에게 발사하여 공격한다. 명중률을 떨어뜨릴 때가 있다.' },
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
      { name: 'HP회복', type: PokemonElementType.normal, power: null, description: '세포를 재생시켜 자신의 최대 HP의 절반만큼 HP를 회복한다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
    ],
  },
  ambipom: {
    flavorText: '많은 무리로 행동한다. 꼬리를 맞잡아 원을 만든다. 우정의 표시인 듯하다.',
    stats: { hp: 75, attack: 100, defense: 66, specialAttack: 60, specialDefense: 66, speed: 115 },
    moves: [
      { name: '더블어택', type: PokemonElementType.normal, power: 35, description: '꼬리 등을 써서 상대를 때려 공격한다. 2회 연속으로 데미지를 준다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '간지르기', type: PokemonElementType.normal, power: null, description: '몸을 간질여 웃게 만들어서 상대의 공격과 방어를 떨어뜨린다.' },
      { name: '할퀴기', type: PokemonElementType.normal, power: 40, description: '단단하고 뾰족한 날카로운 손톱으로 상대를 할퀴어서 공격한다.' },
    ],
  },
  drifloon: {
    flavorText: '사람이나 포켓몬의 영혼이 한데 모여 태어난 포켓몬이다. 습기 많은 계절을 매우 좋아한다.',
    stats: { hp: 90, attack: 50, defense: 34, specialAttack: 60, specialDefense: 44, speed: 70 },
    moves: [
      { name: '휘감기', type: PokemonElementType.normal, power: 10, description: '촉수나 덩굴 등을 휘감아서 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '작아지기', type: PokemonElementType.normal, power: null, description: '몸을 축소하여 작게 보임으로써 자신의 회피율을 크게 올린다.' },
      { name: '토해내기', type: PokemonElementType.normal, power: null, description: '비축된 힘을 상대에게 부딪쳐서 공격한다. 비축된 만큼 위력이 올라간다.' },
      { name: '꿀꺽', type: PokemonElementType.normal, power: null, description: '비축된 힘을 꿀꺽해서 자신의 HP를 회복한다. 비축된 만큼 회복한다.' },
    ],
  },
  drifblim: {
    flavorText: '사람이나 포켓몬을 태우고 날지만 바람에 떠밀려 다닐 뿐이므로 어디로 날아갈지 모른다.',
    stats: { hp: 150, attack: 80, defense: 44, specialAttack: 90, specialDefense: 54, speed: 80 },
    moves: [
      { name: '휘감기', type: PokemonElementType.normal, power: 10, description: '촉수나 덩굴 등을 휘감아서 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '작아지기', type: PokemonElementType.normal, power: null, description: '몸을 축소하여 작게 보임으로써 자신의 회피율을 크게 올린다.' },
      { name: '토해내기', type: PokemonElementType.normal, power: null, description: '비축된 힘을 상대에게 부딪쳐서 공격한다. 비축된 만큼 위력이 올라간다.' },
      { name: '꿀꺽', type: PokemonElementType.normal, power: null, description: '비축된 힘을 꿀꺽해서 자신의 HP를 회복한다. 비축된 만큼 회복한다.' },
    ],
  },
  buneary: {
    flavorText: '항상 말고 있는 귀를 힘껏 늘리면 커다란 바위도 간단히 부순다.',
    stats: { hp: 55, attack: 66, defense: 44, specialAttack: 44, specialDefense: 56, speed: 85 },
    moves: [
      { name: '점프킥', type: PokemonElementType.fighting, power: 100, description: '높이 점프해서 킥으로 상대를 공격한다. 빗나가면 자신이 데미지를 입는다.' },
      { name: '잼잼펀치', type: PokemonElementType.normal, power: 70, description: '리드미컬한 펀치를 날려 상대를 공격한다. 혼란시킬 때가 있다.' },
      { name: '치유소원', type: PokemonElementType.psychic, power: null, description: '자신은 기절하지만 교대하여 나오는 포켓몬의 상태 이상과 HP를 회복한다.' },
      { name: '튀어오르기', type: PokemonElementType.normal, power: null, description: '공격도 하지 않고 팔딱팔딱 튈 뿐 아무 일도 일어나지 않는다...' },
    ],
  },
  lopunny: {
    flavorText: '경계심이 아주 강하다. 위험을 감지하면 가뿐하게 뛰어올라 달아난다.',
    stats: { hp: 65, attack: 76, defense: 84, specialAttack: 54, specialDefense: 96, speed: 105 },
    moves: [
      { name: '점프킥', type: PokemonElementType.fighting, power: 100, description: '높이 점프해서 킥으로 상대를 공격한다. 빗나가면 자신이 데미지를 입는다.' },
      { name: '잼잼펀치', type: PokemonElementType.normal, power: 70, description: '리드미컬한 펀치를 날려 상대를 공격한다. 혼란시킬 때가 있다.' },
      { name: '치유소원', type: PokemonElementType.psychic, power: null, description: '자신은 기절하지만 교대하여 나오는 포켓몬의 상태 이상과 HP를 회복한다.' },
      { name: '튀어오르기', type: PokemonElementType.normal, power: null, description: '공격도 하지 않고 팔딱팔딱 튈 뿐 아무 일도 일어나지 않는다...' },
    ],
  },
  mismagius: {
    flavorText: '주문을 외는 포켓몬이다. 상대를 고통스럽게 하는 것뿐만 아니라 행복하게 하는 주문도 있다.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 105, specialDefense: 105, speed: 105 },
    moves: [
      { name: '주술', type: PokemonElementType.normal, power: null, description: '하늘을 향해 기도를 올려 상대의 공격을 급소에 맞지 않게 한다.' },
      { name: '사이코웨이브', type: PokemonElementType.psychic, power: null, description: '이상한 염력파를 상대에게 발사하여 공격한다. 사용할 때마다 데미지가 바뀐다.' },
      { name: '매지컬리프', type: PokemonElementType.grass, power: 60, description: '상대를 추적하는 이상한 잎사귀를 흩뿌린다. 공격은 반드시 명중한다.' },
      { name: '놀래키기', type: PokemonElementType.ghost, power: 30, description: '큰 소리 등으로 불시에 놀래켜서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  honchkrow: {
    flavorText: '돈크로우가 낮은 목소리로 울면 즉시 니로우가 모여들기에 밤을 부르는 자라고도 전해진다.',
    stats: { hp: 100, attack: 125, defense: 52, specialAttack: 105, specialDefense: 52, speed: 71 },
    moves: [
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '따라가때리기', type: PokemonElementType.dark, power: 40, description: '상대 포켓몬이 교체될 때 기술을 쓰면 2배의 위력으로 공격할 수 있다.' },
      { name: '깜짝베기', type: PokemonElementType.dark, power: 70, description: '순간적으로 틈을 노려 상대를 베어 버린다. 급소에 맞기 쉽다.' },
      { name: '흑안개', type: PokemonElementType.ice, power: null, description: '흑안개를 뿜어 배틀에 참가 중인 포켓몬 전원의 능력 변화를 원래대로 돌린다.' },
    ],
  },
  glameow: {
    flavorText: '마음에 안 들면 발톱을 세우지만 가끔 울음소리로 응석을 부리는 성격이 일부에게 매우 인기가 있다.',
    stats: { hp: 49, attack: 55, defense: 42, specialAttack: 42, specialDefense: 37, speed: 85 },
    moves: [
      { name: '조수', type: PokemonElementType.normal, power: null, description: '서둘러서 같은 편의 도움을 받아 교대 포켓몬이 기억하고 있는 기술 중 하나를 쓴다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '속이기', type: PokemonElementType.normal, power: 40, description: '선제공격으로 상대를 풀죽게 한다. 배틀에 나가서 바로 쓰지 않으면 성공할 수 없다.' },
    ],
  },
  purugly: {
    flavorText: '다른 포켓몬의 거처라 할지라도 편안하면 눌러앉아 자신의 거처로 삼아버린다.',
    stats: { hp: 71, attack: 82, defense: 64, specialAttack: 64, specialDefense: 59, speed: 112 },
    moves: [
      { name: '조수', type: PokemonElementType.normal, power: null, description: '서둘러서 같은 편의 도움을 받아 교대 포켓몬이 기억하고 있는 기술 중 하나를 쓴다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '속이기', type: PokemonElementType.normal, power: 40, description: '선제공격으로 상대를 풀죽게 한다. 배틀에 나가서 바로 쓰지 않으면 성공할 수 없다.' },
    ],
  },
  chingling: {
    flavorText: '뛸 때마다 딸랑딸랑 소리를 낸다. 높은 주파수의 울음소리로 상대의 귀를 들리지 않게 한다.',
    stats: { hp: 45, attack: 30, defense: 50, specialAttack: 65, specialDefense: 50, speed: 45 },
    moves: [
      { name: '김밥말이', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 사용해 4-5턴 동안 상대를 휘감아 공격한다.' },
      { name: '염동력', type: PokemonElementType.psychic, power: 50, description: '약한 염동력을 상대에게 보내어 공격한다. 상대를 혼란시킬 때가 있다.' },
      { name: '놀래키기', type: PokemonElementType.ghost, power: 30, description: '큰 소리 등으로 불시에 놀래켜서 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '비장의무기', type: PokemonElementType.normal, power: 140, description: '배틀 중에 기억하고 있는 기술을 모두 사용하면 그때부터 쓸 수 있는 필살기이다.' },
    ],
  },
  stunky: {
    flavorText: '엉덩이에서 뿜어지는 역한 분비액의 냄새는 범위 2km까지 멀리 퍼져 주변의 포켓몬이 자리를 뜨게 한다.',
    stats: { hp: 63, attack: 63, defense: 47, specialAttack: 41, specialDefense: 41, speed: 74 },
    moves: [
      { name: '독가스', type: PokemonElementType.poison, power: null, description: '독가스를 상대의 얼굴에 내뿜어 독 상태로 만든다.' },
      { name: '연막', type: PokemonElementType.normal, power: null, description: '연기나 먹물을 내뿜어 상대의 명중률을 떨어뜨린다.' },
      { name: '추억의선물', type: PokemonElementType.dark, power: null, description: '자신은 기절하게 되지만 그 대신 상대의 공격과 특수공격을 크게 떨어뜨린다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  skuntank: {
    flavorText: '꼬리 끝에서 심한 냄새가 나는 액체를 뿌려 공격한다. 사정거리는 50m 이상이다.',
    stats: { hp: 103, attack: 93, defense: 67, specialAttack: 71, specialDefense: 61, speed: 84 },
    moves: [
      { name: '독가스', type: PokemonElementType.poison, power: null, description: '독가스를 상대의 얼굴에 내뿜어 독 상태로 만든다.' },
      { name: '연막', type: PokemonElementType.normal, power: null, description: '연기나 먹물을 내뿜어 상대의 명중률을 떨어뜨린다.' },
      { name: '추억의선물', type: PokemonElementType.dark, power: null, description: '자신은 기절하게 되지만 그 대신 상대의 공격과 특수공격을 크게 떨어뜨린다.' },
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  bronzor: {
    flavorText: '동미러의 등 모양에는 신비한 힘이 깃들어 있다고 옛날 사람들은 믿고 있었다.',
    stats: { hp: 57, attack: 24, defense: 86, specialAttack: 24, specialDefense: 86, speed: 23 },
    moves: [
      { name: '회복봉인', type: PokemonElementType.psychic, power: null, description: '5턴 동안 기술이나 특성, 지니고 있는 도구에 의한 HP 회복을 할 수 없게 한다.' },
      { name: '신통력', type: PokemonElementType.psychic, power: 80, description: '보이지 않는 이상한 힘을 보내어 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
    ],
  },
  bronzong: {
    flavorText: '비구름을 부르는 포켓몬으로 아주 옛날부터 떠받들어졌다. 가끔 땅에 묻혀 있다.',
    stats: { hp: 67, attack: 89, defense: 116, specialAttack: 79, specialDefense: 116, speed: 33 },
    moves: [
      { name: '회복봉인', type: PokemonElementType.psychic, power: null, description: '5턴 동안 기술이나 특성, 지니고 있는 도구에 의한 HP 회복을 할 수 없게 한다.' },
      { name: '신통력', type: PokemonElementType.psychic, power: 80, description: '보이지 않는 이상한 힘을 보내어 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
    ],
  },
  bonsly: {
    flavorText: '건조한 장소를 좋아한다. 눈에서 물을 내어 몸의 수분을 조절한다.',
    stats: { hp: 50, attack: 80, defense: 95, specialAttack: 10, specialDefense: 45, speed: 10 },
    moves: [
      { name: '돌떨구기', type: PokemonElementType.rock, power: 50, description: '작은 바위를 들어올려 상대에게 내던져서 공격한다.' },
      { name: '흉내쟁이', type: PokemonElementType.normal, power: null, description: '직전에 나온 기술을 흉내 내어 같은 기술을 쓴다. 기술이 나오지 않았으면 실패한다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
      { name: '힘껏치기', type: PokemonElementType.normal, power: 80, description: '긴 꼬리나 덩굴 등을 사용해 상대를 힘껏 쳐서 공격한다.' },
    ],
  },
  mimeJr: {
    flavorText: '상대의 움직임을 똑같이 흉내 내어 당황한 사이에 재빨리 도망친다.',
    stats: { hp: 20, attack: 25, defense: 45, specialAttack: 70, specialDefense: 90, speed: 60 },
    moves: [
      { name: '요가포즈', type: PokemonElementType.psychic, power: null, description: '잠들어 있는 힘을 몸속에서 끌어내어 자신의 공격을 올린다.' },
      { name: '배리어', type: PokemonElementType.psychic, power: null, description: '튼튼한 장막을 만들어 자신의 방어를 크게 올린다.' },
      { name: '연속뺨치기', type: PokemonElementType.normal, power: 15, description: '연속 뺨치기로 상대를 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '흉내쟁이', type: PokemonElementType.normal, power: null, description: '직전에 나온 기술을 흉내 내어 같은 기술을 쓴다. 기술이 나오지 않았으면 실패한다.' },
    ],
  },
  happiny: {
    flavorText: '알을 닮은 둥근 돌을 배의 주머니에 넣고 있다. 좋아하는 상대에게 돌을 준다.',
    stats: { hp: 100, attack: 5, defense: 5, specialAttack: 15, specialDefense: 65, speed: 30 },
    moves: [
      { name: '천사의키스', type: PokemonElementType.normal, power: null, description: '천사처럼 귀엽게 키스하여 상대를 혼란시킨다.' },
      { name: '리프레시', type: PokemonElementType.normal, power: null, description: '몸을 쉬게 하여 자신이 입은 독, 마비, 화상의 상태 이상을 치료한다.' },
      { name: '흉내쟁이', type: PokemonElementType.normal, power: null, description: '직전에 나온 기술을 흉내 내어 같은 기술을 쓴다. 기술이 나오지 않았으면 실패한다.' },
      { name: '막치기', type: PokemonElementType.normal, power: 40, description: '긴 꼬리나 손 등을 사용하여 상대를 때려서 공격한다.' },
    ],
  },
  chatot: {
    flavorText: '상대와 같은 울음소리를 내서 동료라고 굳게 믿게 하여 습격당하지 않도록 하고 있다.',
    stats: { hp: 76, attack: 65, defense: 45, specialAttack: 92, specialDefense: 42, speed: 91 },
    moves: [
      { name: '수다', type: PokemonElementType.flying, power: 65, description: '기억한 말로 음파를 일으켜서 공격한다. 상대를 혼란시킨다.' },
      { name: '따라하기', type: PokemonElementType.flying, power: null, description: '상대가 사용한 기술을 흉내 내어 자신도 똑같은 기술을 쓴다.' },
      { name: '노래하기', type: PokemonElementType.normal, power: null, description: '기분 좋은 예쁜 노랫소리를 들려주고 상대를 잠듦 상태로 만든다.' },
      { name: '마구찌르기', type: PokemonElementType.normal, power: 15, description: '뿔이나 부리로 상대를 찔러서 공격한다. 2-5회 동안 연속으로 쓴다.' },
    ],
  },
  spiritomb: {
    flavorText: '108개의 영혼이 모여서 태어난 포켓몬이다. 쐐기돌의 균열과 연결되어 있다.',
    stats: { hp: 50, attack: 92, defense: 108, specialAttack: 92, specialDefense: 108, speed: 35 },
    moves: [
      { name: '야습', type: PokemonElementType.ghost, power: 40, description: '그림자를 늘려 상대의 배후에서 공격한다. 반드시 선제공격할 수 있다.' },
      { name: '추억의선물', type: PokemonElementType.dark, power: null, description: '자신은 기절하게 되지만 그 대신 상대의 공격과 특수공격을 크게 떨어뜨린다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
      { name: '괴상한바람', type: PokemonElementType.ghost, power: 60, description: '소름이 끼칠 만한 돌풍으로 상대를 공격한다. 자신의 모든 능력이 올라갈 때가 있다.' },
    ],
  },
  gible: {
    flavorText: '지열로 데워진 구멍에서 지낸다. 적이 가까이 오면 구멍에서 뛰쳐나와 커다란 입으로 물어버린다.',
    stats: { hp: 58, attack: 70, defense: 45, specialAttack: 40, specialDefense: 45, speed: 42 },
    moves: [
      { name: '용의분노', type: PokemonElementType.dragon, power: null, description: '분노의 충격파를 상대에게 부딪쳐서 공격한다. 언제나 40의 데미지를 준다.' },
      { name: '드래곤다이브', type: PokemonElementType.dragon, power: 100, description: '굉장한 살기로 위압하면서 몸통박치기한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '모래지옥', type: PokemonElementType.ground, power: 35, description: '세차게 불어대는 모래바람 속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '드래곤클로', type: PokemonElementType.dragon, power: 80, description: '날카롭고 뾰족한 거대한 발톱으로 상대를 베어 갈라서 공격한다.' },
    ],
  },
  gabite: {
    flavorText: '반짝반짝 빛나는 것을 아주 좋아하기에 동굴 안에서 발견한 보물을 자신의 둥지에 모아둔다.',
    stats: { hp: 68, attack: 90, defense: 65, specialAttack: 50, specialDefense: 55, speed: 82 },
    moves: [
      { name: '용의분노', type: PokemonElementType.dragon, power: null, description: '분노의 충격파를 상대에게 부딪쳐서 공격한다. 언제나 40의 데미지를 준다.' },
      { name: '드래곤다이브', type: PokemonElementType.dragon, power: 100, description: '굉장한 살기로 위압하면서 몸통박치기한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '모래지옥', type: PokemonElementType.ground, power: 35, description: '세차게 불어대는 모래바람 속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '드래곤클로', type: PokemonElementType.dragon, power: 80, description: '날카롭고 뾰족한 거대한 발톱으로 상대를 베어 갈라서 공격한다.' },
    ],
  },
  garchomp: {
    flavorText: '몸을 접고 날개를 펼치면 마치 제트기 같다. 음속으로 날 수 있다.',
    stats: { hp: 108, attack: 130, defense: 95, specialAttack: 80, specialDefense: 85, speed: 102 },
    moves: [
      { name: '용의분노', type: PokemonElementType.dragon, power: null, description: '분노의 충격파를 상대에게 부딪쳐서 공격한다. 언제나 40의 데미지를 준다.' },
      { name: '드래곤다이브', type: PokemonElementType.dragon, power: 100, description: '굉장한 살기로 위압하면서 몸통박치기한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '모래지옥', type: PokemonElementType.ground, power: 35, description: '세차게 불어대는 모래바람 속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '드래곤클로', type: PokemonElementType.dragon, power: 80, description: '날카롭고 뾰족한 거대한 발톱으로 상대를 베어 갈라서 공격한다.' },
    ],
  },
  munchlax: {
    flavorText: '몸의 긴 털 안쪽에 먹이를 숨기는 습성이 있다. 숨긴 것을 잊어버린다.',
    stats: { hp: 135, attack: 85, defense: 40, specialAttack: 40, specialDefense: 85, speed: 5 },
    moves: [
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '핥기', type: PokemonElementType.ghost, power: 30, description: '긴 혀로 상대를 핥아서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '꿀꺽', type: PokemonElementType.normal, power: null, description: '비축된 힘을 꿀꺽해서 자신의 HP를 회복한다. 비축된 만큼 회복한다.' },
      { name: '비축하기', type: PokemonElementType.normal, power: null, description: '힘을 비축해서 자신의 방어와 특수방어를 올린다. 최대 3회까지 비축할 수 있다.' },
    ],
  },
  hippopotas: {
    flavorText: '건조한 땅에서 산다. 땀 대신 모래알을 몸에서 분비하는 포켓몬이다.',
    stats: { hp: 68, attack: 72, defense: 78, specialAttack: 38, specialDefense: 42, speed: 32 },
    moves: [
      { name: '땅가르기', type: PokemonElementType.ground, power: null, description: '땅이 갈라진 곳에 상대를 떨어뜨려 공격한다. 맞으면 일격에 기절한다.' },
      { name: '모래지옥', type: PokemonElementType.ground, power: 35, description: '세차게 불어대는 모래바람 속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '하품', type: PokemonElementType.normal, power: null, description: '큰 하품으로 졸음을 유도한다. 다음 턴에 상대를 잠듦 상태로 만든다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
    ],
  },
  riolu: {
    flavorText: '감정에 따라 모양이 변하는 파동을 서로 내어 동료끼리 커뮤니케이션을 취하고 있다.',
    stats: { hp: 40, attack: 70, defense: 40, specialAttack: 35, specialDefense: 40, speed: 60 },
    moves: [
      { name: '발경', type: PokemonElementType.fighting, power: 60, description: '상대의 몸에 충격파를 부딪쳐 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '흉내쟁이', type: PokemonElementType.normal, power: null, description: '직전에 나온 기술을 흉내 내어 같은 기술을 쓴다. 기술이 나오지 않았으면 실패한다.' },
      { name: '페인트', type: PokemonElementType.normal, power: 30, description: '방어나 판별을 하고 있는 상대에게 공격할 수 있다. 방어 효과를 해제시킨다.' },
    ],
  },
  lucario: {
    flavorText: '상대가 발하는 파동을 감지하여 생각이나 움직임을 간파할 수 있다.',
    stats: { hp: 70, attack: 110, defense: 70, specialAttack: 115, specialDefense: 70, speed: 90 },
    moves: [
      { name: '본러시', type: PokemonElementType.ground, power: 25, description: '단단한 뼈로 상대를 세게 때려서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '발경', type: PokemonElementType.fighting, power: 60, description: '상대의 몸에 충격파를 부딪쳐 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '선취', type: PokemonElementType.normal, power: null, description: '위력을 올려 상대가 쓰려고 하는 기술을 먼저 쓴다. 먼저 쓰지 않으면 실패한다.' },
    ],
  },
  hippowdon: {
    flavorText: '크게 입을 벌려 자신의 강함을 어필한다. 대량의 모래를 일으켜 공격한다.',
    stats: { hp: 108, attack: 112, defense: 118, specialAttack: 68, specialDefense: 72, speed: 47 },
    moves: [
      { name: '땅가르기', type: PokemonElementType.ground, power: null, description: '땅이 갈라진 곳에 상대를 떨어뜨려 공격한다. 맞으면 일격에 기절한다.' },
      { name: '모래지옥', type: PokemonElementType.ground, power: 35, description: '세차게 불어대는 모래바람 속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '하품', type: PokemonElementType.normal, power: null, description: '큰 하품으로 졸음을 유도한다. 다음 턴에 상대를 잠듦 상태로 만든다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
    ],
  },
  skorupi: {
    flavorText: '꼬리의 발톱으로 먹이를 집어 독을 주입한다. 독이 퍼질 때까지 절대 놓치지 않는 집념이 있다.',
    stats: { hp: 40, attack: 50, defense: 90, specialAttack: 30, specialDefense: 55, speed: 65 },
    moves: [
      { name: '경혈찌르기', type: PokemonElementType.normal, power: null, description: '경혈을 눌러 몸을 활성화시킨다. 능력 중 하나를 크게 올린다.' },
      { name: '맹독엄니', type: PokemonElementType.poison, power: 50, description: '독이 있는 이빨로 상대를 물어서 공격한다. 맹독을 주입할 때가 있다.' },
      { name: '크로스포이즌', type: PokemonElementType.poison, power: 70, description: '독 칼날로 상대를 베어 가른다. 독 상태로 만들 때가 있고 급소에도 맞기 쉽다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
    ],
  },
  drapion: {
    flavorText: '자랑거리인 파워로 상대를 조각조각 낼 수 있으며 게다가 맹독으로 마무리한다.',
    stats: { hp: 70, attack: 90, defense: 110, specialAttack: 60, specialDefense: 75, speed: 95 },
    moves: [
      { name: '경혈찌르기', type: PokemonElementType.normal, power: null, description: '경혈을 눌러 몸을 활성화시킨다. 능력 중 하나를 크게 올린다.' },
      { name: '맹독엄니', type: PokemonElementType.poison, power: 50, description: '독이 있는 이빨로 상대를 물어서 공격한다. 맹독을 주입할 때가 있다.' },
      { name: '크로스포이즌', type: PokemonElementType.poison, power: 70, description: '독 칼날로 상대를 베어 가른다. 독 상태로 만들 때가 있고 급소에도 맞기 쉽다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
    ],
  },
  croagunk: {
    flavorText: '볼에 독주머니를 가지고 있다. 상대의 틈을 노려 맹독이 배인 손가락을 꿰찌른다.',
    stats: { hp: 48, attack: 61, defense: 40, specialAttack: 61, specialDefense: 40, speed: 50 },
    moves: [
      { name: '진흙폭탄', type: PokemonElementType.ground, power: 65, description: '단단한 진흙구슬을 상대에게 발사하여 공격한다. 명중률을 떨어뜨릴 때가 있다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '부추기기', type: PokemonElementType.dark, power: null, description: '상대를 부추겨서 혼란시킨다. 동시에 상대의 특수공격도 올라가 버린다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
    ],
  },
  toxicroak: {
    flavorText: '목 주변에 독주머니를 지녔다. 목을 울리면 모여진 독이 잘 섞여져서 강력해진다.',
    stats: { hp: 83, attack: 106, defense: 65, specialAttack: 86, specialDefense: 65, speed: 85 },
    moves: [
      { name: '진흙폭탄', type: PokemonElementType.ground, power: 65, description: '단단한 진흙구슬을 상대에게 발사하여 공격한다. 명중률을 떨어뜨릴 때가 있다.' },
      { name: '독침', type: PokemonElementType.poison, power: 15, description: '독이 있는 침을 상대에게 꿰찔러서 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '부추기기', type: PokemonElementType.dark, power: null, description: '상대를 부추겨서 혼란시킨다. 동시에 상대의 특수공격도 올라가 버린다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
    ],
  },
  carnivine: {
    flavorText: '달콤한 냄새의 타액으로 먹이를 끌어들여 큰 턱으로 꿀꺽한다. 하루에 걸쳐 먹이를 먹는다.',
    stats: { hp: 74, attack: 100, defense: 72, specialAttack: 90, specialDefense: 72, speed: 46 },
    moves: [
      { name: '쥐어짜기', type: PokemonElementType.normal, power: null, description: '강하게 조여 공격을 한다. 상대의 HP가 많이 남아 있을수록 위력이 올라간다.' },
      { name: '덩굴채찍', type: PokemonElementType.grass, power: 45, description: '채찍처럼 휘어지는 가늘고 긴 덩굴로 상대를 힘껏 쳐서 공격한다.' },
      { name: '파워휩', type: PokemonElementType.grass, power: 120, description: '덩굴이나 촉수를 세차게 흔들어 상대를 힘껏 쳐서 공격한다.' },
      { name: '토해내기', type: PokemonElementType.normal, power: null, description: '비축된 힘을 상대에게 부딪쳐서 공격한다. 비축된 만큼 위력이 올라간다.' },
    ],
  },
  finneon: {
    flavorText: '몸의 옆쪽에 있는 줄에 태양의 빛을 모아둘 수 있다. 밤이 되면 아름답게 빛난다.',
    stats: { hp: 49, attack: 49, defense: 56, specialAttack: 49, specialDefense: 61, speed: 66 },
    moves: [
      { name: '은빛바람', type: PokemonElementType.bug, power: 60, description: '바람에 날개 가루를 날려서 상대를 공격한다. 자신의 모든 능력이 올라갈 때가 있다.' },
      { name: '아쿠아링', type: PokemonElementType.water, power: null, description: '자신의 몸 주변을 물로 만든 베일로 덮는다. 매 턴 HP를 회복한다.' },
      { name: '바람일으키기', type: PokemonElementType.flying, power: 40, description: '날개로 일으킨 격한 바람을 상대에게 부딪쳐서 공격한다.' },
      { name: '막치기', type: PokemonElementType.normal, power: 40, description: '긴 꼬리나 손 등을 사용하여 상대를 때려서 공격한다.' },
    ],
  },
  lumineon: {
    flavorText: '깊은 바다의 밑바닥에서 산다. 4개의 지느러미 무늬를 반짝거려 먹이를 끌어들인다.',
    stats: { hp: 69, attack: 69, defense: 76, specialAttack: 69, specialDefense: 86, speed: 91 },
    moves: [
      { name: '은빛바람', type: PokemonElementType.bug, power: 60, description: '바람에 날개 가루를 날려서 상대를 공격한다. 자신의 모든 능력이 올라갈 때가 있다.' },
      { name: '아쿠아링', type: PokemonElementType.water, power: null, description: '자신의 몸 주변을 물로 만든 베일로 덮는다. 매 턴 HP를 회복한다.' },
      { name: '바람일으키기', type: PokemonElementType.flying, power: 40, description: '날개로 일으킨 격한 바람을 상대에게 부딪쳐서 공격한다.' },
      { name: '막치기', type: PokemonElementType.normal, power: 40, description: '긴 꼬리나 손 등을 사용하여 상대를 때려서 공격한다.' },
    ],
  },
  mantyke: {
    flavorText: '등의 무늬는 지역에 따라 달라진다. 총어 무리에 섞여 헤엄치는 일이 많다.',
    stats: { hp: 45, attack: 20, defense: 50, specialAttack: 60, specialDefense: 120, speed: 50 },
    moves: [
      { name: '날개치기', type: PokemonElementType.flying, power: 60, description: '크게 펼친 훌륭한 날개를 상대에게 부딪쳐서 공격한다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '아쿠아링', type: PokemonElementType.water, power: null, description: '자신의 몸 주변을 물로 만든 베일로 덮는다. 매 턴 HP를 회복한다.' },
      { name: '초음파', type: PokemonElementType.normal, power: null, description: '특수한 음파를 몸에서 발산하여 상대를 혼란시킨다.' },
    ],
  },
  snover: {
    flavorText: '추운 계절에는 산기슭까지 내려오지만 봄이 되면 눈이 남아 있는 산 정상으로 돌아간다.',
    stats: { hp: 60, attack: 62, defense: 50, specialAttack: 62, specialDefense: 60, speed: 40 },
    moves: [
      { name: '풀피리', type: PokemonElementType.grass, power: null, description: '기분 좋은 피리 소리를 들려주어 상대를 잠듦 상태로 만든다.' },
      { name: '절대영도', type: PokemonElementType.ice, power: null, description: '절대영도의 추위로 상대를 공격한다. 맞으면 일격에 기절한다.' },
      { name: '우드해머', type: PokemonElementType.grass, power: 120, description: '단단한 몸통을 상대에게 부딪쳐서 공격한다. 자신도 상당한 데미지를 입는다.' },
      { name: '얼음뭉치', type: PokemonElementType.ice, power: 40, description: '얼음 덩어리를 순식간에 만들어 상대에게 빠르게 쏜다. 반드시 선제공격을 할 수 있다.' },
    ],
  },
  abomasnow: {
    flavorText: '블리자드를 발생시켜 주변 일대를 새하얗게 만든다. 별명은 아이스 몬스터다.',
    stats: { hp: 90, attack: 92, defense: 75, specialAttack: 92, specialDefense: 85, speed: 60 },
    moves: [
      { name: '풀피리', type: PokemonElementType.grass, power: null, description: '기분 좋은 피리 소리를 들려주어 상대를 잠듦 상태로 만든다.' },
      { name: '절대영도', type: PokemonElementType.ice, power: null, description: '절대영도의 추위로 상대를 공격한다. 맞으면 일격에 기절한다.' },
      { name: '우드해머', type: PokemonElementType.grass, power: 120, description: '단단한 몸통을 상대에게 부딪쳐서 공격한다. 자신도 상당한 데미지를 입는다.' },
      { name: '얼음뭉치', type: PokemonElementType.ice, power: 40, description: '얼음 덩어리를 순식간에 만들어 상대에게 빠르게 쏜다. 반드시 선제공격을 할 수 있다.' },
    ],
  },
  weavile: {
    flavorText: '눈이 많은 지방에 서식한다. 수목에 발톱으로 사인을 그려 동료에게 신호를 보낸다.',
    stats: { hp: 70, attack: 120, defense: 65, specialAttack: 45, specialDefense: 85, speed: 125 },
    moves: [
      { name: '마구할퀴기', type: PokemonElementType.normal, power: 18, description: '손톱이나 낫 등으로 상대를 할퀴어서 공격한다. 2-5회 동안 연속으로 쓴다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
      { name: '메탈클로', type: PokemonElementType.steel, power: 50, description: '강철의 발톱으로 상대를 베어 갈라 공격한다. 자신의 공격이 올라갈 때도 있다.' },
      { name: '금제', type: PokemonElementType.dark, power: null, description: '지니게 한 도구를 쓸 수 없게 한다. 트레이너도 그 포켓몬에게는 도구를 쓸 수 없다.' },
    ],
  },
  magnezone: {
    flavorText: '너무 강한 자력을 내어 자포코일끼리 끌어당겨 전혀 못 움직이기도 한다.',
    stats: { hp: 70, attack: 70, defense: 115, specialAttack: 130, specialDefense: 90, speed: 60 },
    moves: [
      { name: '마그넷봄', type: PokemonElementType.steel, power: 60, description: '상대에게 달라붙는 강철의 폭탄을 발사한다. 공격은 반드시 명중한다.' },
      { name: '소닉붐', type: PokemonElementType.normal, power: null, description: '충격파를 상대에 부딪쳐서 공격한다. 언제나 20의 데미지를 준다.' },
      { name: '미러샷', type: PokemonElementType.steel, power: 65, description: '갈고 닦은 몸에서 섬광의 힘을 상대에게 쏜다. 명중률을 떨어뜨릴 때가 있다.' },
      { name: '록온', type: PokemonElementType.normal, power: null, description: '조준을 잘 맞춰 다음 공격이 반드시 상대에게 명중하도록 한다.' },
    ],
  },
  lickilicky: {
    flavorText: '쭉쭉 늘어나는 혓바닥으로 무엇이든 휘감는다. 함부로 다가가면 타액으로 끈적끈적거리게 된다.',
    stats: { hp: 110, attack: 85, defense: 95, specialAttack: 80, specialDefense: 95, speed: 50 },
    moves: [
      { name: '쥐어짜기', type: PokemonElementType.normal, power: null, description: '강하게 조여 공격을 한다. 상대의 HP가 많이 남아 있을수록 위력이 올라간다.' },
      { name: '선취', type: PokemonElementType.normal, power: null, description: '위력을 올려 상대가 쓰려고 하는 기술을 먼저 쓴다. 먼저 쓰지 않으면 실패한다.' },
      { name: '김밥말이', type: PokemonElementType.normal, power: 15, description: '긴 몸이나 덩굴 등을 사용해 4-5턴 동안 상대를 휘감아 공격한다.' },
      { name: '핥기', type: PokemonElementType.ghost, power: 30, description: '긴 혀로 상대를 핥아서 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  rhyperior: {
    flavorText: '손바닥의 구멍에서 꼬마돌을 발사한다. 전신의 프로텍터는 화산의 분화도 견뎌낸다.',
    stats: { hp: 115, attack: 140, defense: 130, specialAttack: 55, specialDefense: 55, speed: 40 },
    moves: [
      { name: '암석포', type: PokemonElementType.rock, power: 150, description: '거대한 바위를 상대에게 발사하여 공격한다. 다음 턴은 움직일 수 없게 된다.' },
      { name: '뿔찌르기', type: PokemonElementType.normal, power: 65, description: '날카롭고 뾰족한 뿔로 상대를 공격한다.' },
      { name: '뿔드릴', type: PokemonElementType.normal, power: null, description: '회전하는 뿔을 상대에게 꿰찔러서 공격한다. 맞으면 일격에 기절한다.' },
      { name: '메가혼', type: PokemonElementType.bug, power: 120, description: '단단하고 훌륭한 뿔로 마음껏 상대를 꿰찔러서 공격한다.' },
    ],
  },
  tangrowth: {
    flavorText: '식물의 덩굴로 이루어진 팔을 늘여서 먹이를 포박한다. 팔을 먹혀도 아무렇지도 않다.',
    stats: { hp: 100, attack: 100, defense: 125, specialAttack: 110, specialDefense: 50, speed: 50 },
    moves: [
      { name: '휘감기', type: PokemonElementType.normal, power: 10, description: '촉수나 덩굴 등을 휘감아서 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '쥐어짜기', type: PokemonElementType.normal, power: null, description: '강하게 조여 공격을 한다. 상대의 HP가 많이 남아 있을수록 위력이 올라간다.' },
      { name: '덩굴채찍', type: PokemonElementType.grass, power: 45, description: '채찍처럼 휘어지는 가늘고 긴 덩굴로 상대를 힘껏 쳐서 공격한다.' },
      { name: '수면가루', type: PokemonElementType.grass, power: null, description: '잠이 오는 가루를 많이 흩뿌려서 상대를 잠듦 상태로 만든다.' },
    ],
  },
  electivire: {
    flavorText: '전기를 가득 모으면 2개의 뿔 사이에서 세차게 푸르스름한 불티를 뿌린다.',
    stats: { hp: 75, attack: 123, defense: 67, specialAttack: 95, specialDefense: 85, speed: 95 },
    moves: [
      { name: '전기쇼크', type: PokemonElementType.electric, power: 40, description: '전기 자극을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '방전', type: PokemonElementType.electric, power: 80, description: '눈부신 전격으로 자신의 주위에 있는 포켓몬을 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '전광석화', type: PokemonElementType.normal, power: 40, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진한다. 반드시 선제공격할 수 있다.' },
      { name: '불꽃펀치', type: PokemonElementType.fire, power: 75, description: '불꽃을 담은 펀치로 상대를 공격한다. 화상 상태로 만들 때가 있다.' },
    ],
  },
  magmortar: {
    flavorText: '팔 끝에서 섭씨 2000도의 불구슬을 발사한다. 화산의 분화구를 거처로 삼는다.',
    stats: { hp: 75, attack: 95, defense: 67, specialAttack: 125, specialDefense: 95, speed: 83 },
    moves: [
      { name: '분연', type: PokemonElementType.fire, power: 80, description: '새빨간 불꽃으로 자신의 주위에 있는 포켓몬을 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '스모그', type: PokemonElementType.poison, power: 30, description: '더러운 가스를 상대에게 내뿜어 공격한다. 독 상태로 만들 때가 있다.' },
      { name: '연막', type: PokemonElementType.normal, power: null, description: '연기나 먹물을 내뿜어 상대의 명중률을 떨어뜨린다.' },
      { name: '불꽃세례', type: PokemonElementType.fire, power: 40, description: '작은 불꽃을 상대에게 발사하여 공격한다. 화상 상태로 만들 때가 있다.' },
    ],
  },
  togekiss: {
    flavorText: '다툼이 없는 평화로운 땅에 토게키스가 나타나 여러 가지 은총을 나눠줬다고 전해진다.',
    stats: { hp: 85, attack: 50, defense: 95, specialAttack: 120, specialDefense: 115, speed: 80 },
    moves: [
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '파동탄', type: PokemonElementType.fighting, power: 80, description: '몸속에서 파동의 힘을 끌어내 쏜다. 공격은 반드시 명중한다.' },
      { name: '불새', type: PokemonElementType.flying, power: 140, description: '2턴째에 상대를 공격한다. 가끔 풀죽게 만든다. 급소에도 맞기 쉽다.' },
      { name: '에어슬래시', type: PokemonElementType.flying, power: 75, description: '하늘까지 베어 가르는 공기의 칼날로 공격한다. 상대를 풀죽게 만들 때가 있다.' },
    ],
  },
  yanmega: {
    flavorText: '고속으로 날아서 스친 상대의 목을 한순간에 물어뜯는 싸움법을 선호한다.',
    stats: { hp: 86, attack: 76, defense: 86, specialAttack: 116, specialDefense: 56, speed: 95 },
    moves: [
      { name: '소닉붐', type: PokemonElementType.normal, power: null, description: '충격파를 상대에 부딪쳐서 공격한다. 언제나 20의 데미지를 준다.' },
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '벌레의야단법석', type: PokemonElementType.bug, power: 90, description: '날개의 진동으로 음파를 일으켜서 공격한다. 상대의 특수방어를 떨어뜨릴 때가 있다.' },
      { name: '초음파', type: PokemonElementType.normal, power: null, description: '특수한 음파를 몸에서 발산하여 상대를 혼란시킨다.' },
    ],
  },
  leafeon: {
    flavorText: '맑은 날에 잠든 리피아는 광합성을 해서 깨끗한 공기를 만들고 있다.',
    stats: { hp: 65, attack: 110, defense: 130, specialAttack: 60, specialDefense: 65, speed: 95 },
    moves: [
      { name: '풀피리', type: PokemonElementType.grass, power: null, description: '기분 좋은 피리 소리를 들려주어 상대를 잠듦 상태로 만든다.' },
      { name: '리프블레이드', type: PokemonElementType.grass, power: 90, description: '잎사귀를 칼처럼 이용해 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
      { name: '잎날가르기', type: PokemonElementType.grass, power: 55, description: '잎사귀를 날려 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
    ],
  },
  glaceon: {
    flavorText: '체온을 컨트롤하는 것으로 주위의 공기를 얼려서 다이아몬드 더스트를 날린다.',
    stats: { hp: 65, attack: 60, defense: 110, specialAttack: 130, specialDefense: 95, speed: 65 },
    moves: [
      { name: '배리어', type: PokemonElementType.psychic, power: null, description: '튼튼한 장막을 만들어 자신의 방어를 크게 올린다.' },
      { name: '얼음뭉치', type: PokemonElementType.ice, power: 40, description: '얼음 덩어리를 순식간에 만들어 상대에게 빠르게 쏜다. 반드시 선제공격을 할 수 있다.' },
      { name: '미러코트', type: PokemonElementType.psychic, power: null, description: '상대에게 받은 특수공격의 데미지를 2배로 만들어 그 상대에게 돌려준다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
    ],
  },
  gliscor: {
    flavorText: '꼬리로 나뭇가지에 매달려 먹이를 관찰한다. 틈을 봐서 상공에서 덮친다.',
    stats: { hp: 75, attack: 95, defense: 125, specialAttack: 45, specialDefense: 75, speed: 95 },
    moves: [
      { name: '가위자르기', type: PokemonElementType.normal, power: null, description: '큰 집게로 상대를 베어 갈라 공격한다. 맞으면 일격에 기절한다.' },
      { name: '단단해지기', type: PokemonElementType.normal, power: null, description: '전신에 힘을 담아 몸을 단단하게 해서 자신의 방어를 올린다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
      { name: '모래뿌리기', type: PokemonElementType.ground, power: null, description: '상대의 얼굴에 모래를 뿌려서 명중률을 떨어뜨린다.' },
    ],
  },
  mamoswine: {
    flavorText: '1만 년 전의 얼음 밑에서 발견된 적이 있을 정도로 오랜 옛날부터 있었던 포켓몬이다.',
    stats: { hp: 110, attack: 130, defense: 80, specialAttack: 70, specialDefense: 60, speed: 80 },
    moves: [
      { name: '진흙폭탄', type: PokemonElementType.ground, power: 65, description: '단단한 진흙구슬을 상대에게 발사하여 공격한다. 명중률을 떨어뜨릴 때가 있다.' },
      { name: '눈싸라기', type: PokemonElementType.ice, power: 40, description: '차가운 가랑눈을 상대에게 내뿜어 공격한다. 얼음 상태로 만들 때가 있다.' },
      { name: '냄새구별', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '흙놀이', type: PokemonElementType.ground, power: null, description: '주위를 진흙투성이로 만든다. 5턴 동안 전기타입의 기술을 약하게 한다.' },
    ],
  },
  porygonZ: {
    flavorText: '더욱 우수한 포켓몬으로 만들고자 프로그램을 추가했지만 어쩐지 괴상하게 행동하기 시작했다.',
    stats: { hp: 85, attack: 80, defense: 70, specialAttack: 135, specialDefense: 75, speed: 90 },
    moves: [
      { name: '텍스처', type: PokemonElementType.normal, power: null, description: '자신의 타입을 배운 기술 중 가장 위에 있는 기술과 같은 타입으로 바꾼다.' },
      { name: '텍스처2', type: PokemonElementType.normal, power: null, description: '상대가 마지막으로 쓴 기술에 저항할 수 있도록 자신의 타입을 변화시킨다.' },
      { name: '록온', type: PokemonElementType.normal, power: null, description: '조준을 잘 맞춰 다음 공격이 반드시 상대에게 명중하도록 한다.' },
      { name: '트라이어택', type: PokemonElementType.normal, power: 80, description: '3개의 광선으로 공격한다. 마비, 화상 또는 얼음 상태 중 어느 하나로 만들 때가 있다.' },
    ],
  },
  gallade: {
    flavorText: '상대의 생각을 민감하게 포착하는 능력을 가졌기 때문에 먼저 공격할 수 있다.',
    stats: { hp: 68, attack: 125, defense: 65, specialAttack: 65, specialDefense: 115, speed: 80 },
    moves: [
      { name: '리프블레이드', type: PokemonElementType.grass, power: 90, description: '잎사귀를 칼처럼 이용해 상대를 베어 공격한다. 급소에 맞기 쉽다.' },
      { name: '순간이동', type: PokemonElementType.psychic, power: null, description: '야생 포켓몬과 배틀을 그만둔다. 마지막에 들어갔던 포켓몬센터가 있는 도시에도 갈 수 있다.' },
      { name: '사이코커터', type: PokemonElementType.psychic, power: 70, description: '실체화시킨 마음의 칼날로 상대를 베어 가른다. 급소에 맞기 쉽다.' },
      { name: '페인트', type: PokemonElementType.normal, power: 30, description: '방어나 판별을 하고 있는 상대에게 공격할 수 있다. 방어 효과를 해제시킨다.' },
    ],
  },
  probopass: {
    flavorText: '전신에서 강한 자력을 발산하고 있다. 꼬마코파스라고 불리는 3개의 유닛을 조종한다.',
    stats: { hp: 60, attack: 55, defense: 145, specialAttack: 75, specialDefense: 150, speed: 40 },
    moves: [
      { name: '마그넷봄', type: PokemonElementType.steel, power: 60, description: '상대에게 달라붙는 강철의 폭탄을 발사한다. 공격은 반드시 명중한다.' },
      { name: '록온', type: PokemonElementType.normal, power: null, description: '조준을 잘 맞춰 다음 공격이 반드시 상대에게 명중하도록 한다.' },
      { name: '전자포', type: PokemonElementType.electric, power: 120, description: '대포처럼 전기를 발사해서 공격한다. 상대를 마비 상태로 만든다.' },
      { name: '방전', type: PokemonElementType.electric, power: 80, description: '눈부신 전격으로 자신의 주위에 있는 포켓몬을 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  dusknoir: {
    flavorText: '탄력 있는 몸 안에 갈 곳 없는 영혼을 가두어 저승으로 데려간다고 전해진다.',
    stats: { hp: 45, attack: 100, defense: 135, specialAttack: 65, specialDefense: 135, speed: 45 },
    moves: [
      { name: '섀도펀치', type: PokemonElementType.ghost, power: 60, description: '그림자에 섞여 펀치를 날린다. 공격은 반드시 명중한다.' },
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '검은눈빛', type: PokemonElementType.normal, power: null, description: '빨려 들어갈 것 같은 까만 눈빛으로 가만히 응시하여 상대를 배틀에서 도망갈 수 없게 한다.' },
      { name: '야습', type: PokemonElementType.ghost, power: 40, description: '그림자를 늘려 상대의 배후에서 공격한다. 반드시 선제공격할 수 있다.' },
    ],
  },
  froslass: {
    flavorText: '마이너스 50도의 냉기를 뿜어 상대를 얼려 버린다. 몸통 같은 부분은 실제로는 빈 공간이다.',
    stats: { hp: 70, attack: 80, defense: 70, specialAttack: 80, specialDefense: 70, speed: 110 },
    moves: [
      { name: '잠깨움뺨치기', type: PokemonElementType.fighting, power: 70, description: '잠듦 상태의 상대에게 큰 데미지를 준다. 대신 상대는 잠에서 깬다.' },
      { name: '얼음뭉치', type: PokemonElementType.ice, power: 40, description: '얼음 덩어리를 순식간에 만들어 상대에게 빠르게 쏜다. 반드시 선제공격을 할 수 있다.' },
      { name: '눈싸라기', type: PokemonElementType.ice, power: 40, description: '차가운 가랑눈을 상대에게 내뿜어 공격한다. 얼음 상태로 만들 때가 있다.' },
      { name: '길동무', type: PokemonElementType.ghost, power: null, description: '기술을 쓴 뒤 공격을 받아 기절했을 때 길동무의 대상도 기절하게 한다.' },
    ],
  },
  rotom: {
    flavorText: '특수한 모터를 움직이는 동력원으로서 긴 시간 동안 연구되었던 포켓몬이다.',
    stats: { hp: 50, attack: 50, defense: 77, specialAttack: 95, specialDefense: 77, speed: 91 },
    moves: [
      { name: '전기쇼크', type: PokemonElementType.electric, power: 40, description: '전기 자극을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
      { name: '괴상한바람', type: PokemonElementType.ghost, power: 60, description: '소름이 끼칠 만한 돌풍으로 상대를 공격한다. 자신의 모든 능력이 올라갈 때가 있다.' },
      { name: '방전', type: PokemonElementType.electric, power: 80, description: '눈부신 전격으로 자신의 주위에 있는 포켓몬을 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  rotom_fan: {
    flavorText: '특수한 모터를 움직이는 동력원으로서 긴 시간 동안 연구되었던 포켓몬이다.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: '전기쇼크', type: PokemonElementType.electric, power: 40, description: '전기 자극을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
      { name: '괴상한바람', type: PokemonElementType.ghost, power: 60, description: '소름이 끼칠 만한 돌풍으로 상대를 공격한다. 자신의 모든 능력이 올라갈 때가 있다.' },
      { name: '방전', type: PokemonElementType.electric, power: 80, description: '눈부신 전격으로 자신의 주위에 있는 포켓몬을 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  rotom_frost: {
    flavorText: '특수한 모터를 움직이는 동력원으로서 긴 시간 동안 연구되었던 포켓몬이다.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: '전기쇼크', type: PokemonElementType.electric, power: 40, description: '전기 자극을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
      { name: '괴상한바람', type: PokemonElementType.ghost, power: 60, description: '소름이 끼칠 만한 돌풍으로 상대를 공격한다. 자신의 모든 능력이 올라갈 때가 있다.' },
      { name: '방전', type: PokemonElementType.electric, power: 80, description: '눈부신 전격으로 자신의 주위에 있는 포켓몬을 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  rotom_heat: {
    flavorText: '특수한 모터를 움직이는 동력원으로서 긴 시간 동안 연구되었던 포켓몬이다.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: '전기쇼크', type: PokemonElementType.electric, power: 40, description: '전기 자극을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
      { name: '괴상한바람', type: PokemonElementType.ghost, power: 60, description: '소름이 끼칠 만한 돌풍으로 상대를 공격한다. 자신의 모든 능력이 올라갈 때가 있다.' },
      { name: '방전', type: PokemonElementType.electric, power: 80, description: '눈부신 전격으로 자신의 주위에 있는 포켓몬을 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  rotom_mow: {
    flavorText: '특수한 모터를 움직이는 동력원으로서 긴 시간 동안 연구되었던 포켓몬이다.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: '전기쇼크', type: PokemonElementType.electric, power: 40, description: '전기 자극을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
      { name: '괴상한바람', type: PokemonElementType.ghost, power: 60, description: '소름이 끼칠 만한 돌풍으로 상대를 공격한다. 자신의 모든 능력이 올라갈 때가 있다.' },
      { name: '방전', type: PokemonElementType.electric, power: 80, description: '눈부신 전격으로 자신의 주위에 있는 포켓몬을 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  rotom_wash: {
    flavorText: '특수한 모터를 움직이는 동력원으로서 긴 시간 동안 연구되었던 포켓몬이다.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: '전기쇼크', type: PokemonElementType.electric, power: 40, description: '전기 자극을 상대에게 날려서 공격한다. 마비 상태로 만들 때가 있다.' },
      { name: '충전', type: PokemonElementType.electric, power: null, description: '다음 턴에 쓸 전기타입 기술의 위력을 올린다. 자신의 특수방어도 올라간다.' },
      { name: '괴상한바람', type: PokemonElementType.ghost, power: 60, description: '소름이 끼칠 만한 돌풍으로 상대를 공격한다. 자신의 모든 능력이 올라갈 때가 있다.' },
      { name: '방전', type: PokemonElementType.electric, power: 80, description: '눈부신 전격으로 자신의 주위에 있는 포켓몬을 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  uxie: {
    flavorText: '지식의 신이라 불리고 있다. 눈을 마주친 사람의 기억을 지워 버리는 힘을 가지고 있다고 한다.',
    stats: { hp: 75, attack: 75, defense: 130, specialAttack: 75, specialDefense: 130, speed: 95 },
    moves: [
      { name: '추억의선물', type: PokemonElementType.dark, power: null, description: '자신은 기절하게 되지만 그 대신 상대의 공격과 특수공격을 크게 떨어뜨린다.' },
      { name: '신통력', type: PokemonElementType.psychic, power: 80, description: '보이지 않는 이상한 힘을 보내어 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '하품', type: PokemonElementType.normal, power: null, description: '큰 하품으로 졸음을 유도한다. 다음 턴에 상대를 잠듦 상태로 만든다.' },
      { name: '염동력', type: PokemonElementType.psychic, power: 50, description: '약한 염동력을 상대에게 보내어 공격한다. 상대를 혼란시킬 때가 있다.' },
    ],
  },
  mesprit: {
    flavorText: '슬픔의 괴로움과 즐거움의 소중함을 사람들에게 가르쳐 주었다. 감정의 신이라 불리고 있다.',
    stats: { hp: 80, attack: 105, defense: 105, specialAttack: 105, specialDefense: 105, speed: 80 },
    moves: [
      { name: '치유소원', type: PokemonElementType.psychic, power: null, description: '자신은 기절하지만 교대하여 나오는 포켓몬의 상태 이상과 HP를 회복한다.' },
      { name: '주술', type: PokemonElementType.normal, power: null, description: '하늘을 향해 기도를 올려 상대의 공격을 급소에 맞지 않게 한다.' },
      { name: '신통력', type: PokemonElementType.psychic, power: 80, description: '보이지 않는 이상한 힘을 보내어 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '흉내쟁이', type: PokemonElementType.normal, power: null, description: '직전에 나온 기술을 흉내 내어 같은 기술을 쓴다. 기술이 나오지 않았으면 실패한다.' },
    ],
  },
  azelf: {
    flavorText: '의지의 신이라 불리고 있다. 호수의 밑바닥에서 계속 잠을 자며 세계의 균형을 지키고 있다.',
    stats: { hp: 75, attack: 125, defense: 70, specialAttack: 125, specialDefense: 70, speed: 115 },
    moves: [
      { name: '신통력', type: PokemonElementType.psychic, power: 80, description: '보이지 않는 이상한 힘을 보내어 공격한다. 상대를 풀죽게 만들 때가 있다.' },
      { name: '대폭발', type: PokemonElementType.normal, power: 250, description: '큰 폭발로 자신의 주위에 있는 포켓몬을 공격한다. 쓰고 나서는 기절한다.' },
      { name: '염동력', type: PokemonElementType.psychic, power: 50, description: '약한 염동력을 상대에게 보내어 공격한다. 상대를 혼란시킬 때가 있다.' },
      { name: '미래예지', type: PokemonElementType.psychic, power: 120, description: '기술을 사용한 2턴 뒤에 상대에게 염동력의 덩어리를 보내어 공격한다.' },
    ],
  },
  dialga: {
    flavorText: '디아루가가 태어남으로써 시간이 움직이기 시작했다는 전설이 내려오는 포켓몬이다.',
    stats: { hp: 100, attack: 120, defense: 120, specialAttack: 150, specialDefense: 100, speed: 90 },
    moves: [
      { name: '시간의포효', type: PokemonElementType.dragon, power: 150, description: '시간이 뒤틀릴 정도의 힘을 사용해서 상대를 공격한다. 다음 턴은 움직일 수 없다.' },
      { name: '회복봉인', type: PokemonElementType.psychic, power: null, description: '5턴 동안 기술이나 특성, 지니고 있는 도구에 의한 HP 회복을 할 수 없게 한다.' },
      { name: '파동탄', type: PokemonElementType.fighting, power: 80, description: '몸속에서 파동의 힘을 끌어내 쏜다. 공격은 반드시 명중한다.' },
      { name: '용의숨결', type: PokemonElementType.dragon, power: 60, description: '굉장한 숨결을 상대에게 내뿜어 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  palkia: {
    flavorText: '평행으로 늘어선 공간의 틈새에 산다고 전해진다. 신화에 등장하는 포켓몬이다.',
    stats: { hp: 90, attack: 120, defense: 100, specialAttack: 150, specialDefense: 120, speed: 100 },
    moves: [
      { name: '공간절단', type: PokemonElementType.dragon, power: 100, description: '주위의 공간과 더불어 상대를 찢어서 데미지를 준다. 급소에 맞기 쉽다.' },
      { name: '회복봉인', type: PokemonElementType.psychic, power: null, description: '5턴 동안 기술이나 특성, 지니고 있는 도구에 의한 HP 회복을 할 수 없게 한다.' },
      { name: '파동탄', type: PokemonElementType.fighting, power: 80, description: '몸속에서 파동의 힘을 끌어내 쏜다. 공격은 반드시 명중한다.' },
      { name: '용의숨결', type: PokemonElementType.dragon, power: 60, description: '굉장한 숨결을 상대에게 내뿜어 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  heatran: {
    flavorText: '화산의 동굴에서 서식한다. 십자형의 발톱을 박아서 벽이나 천장을 돌아다닌다.',
    stats: { hp: 91, attack: 90, defense: 106, specialAttack: 130, specialDefense: 106, speed: 77 },
    moves: [
      { name: '마그마스톰', type: PokemonElementType.fire, power: 100, description: '세차게 타오르는 불꽃 속에 4-5턴 동안 상대를 가두어 공격한다.' },
      { name: '분연', type: PokemonElementType.fire, power: 80, description: '새빨간 불꽃으로 자신의 주위에 있는 포켓몬을 공격한다. 화상 상태로 만들 때가 있다.' },
      { name: '금속음', type: PokemonElementType.steel, power: null, description: '금속을 긁을 때 나는 듯한 싫은 소리를 들려준다. 상대의 특수방어를 크게 떨어뜨린다.' },
      { name: '회오리불꽃', type: PokemonElementType.fire, power: 35, description: '세차게 소용돌이치는 불꽃 속에 4-5턴 동안 상대를 가두어 공격한다.' },
    ],
  },
  regigigas: {
    flavorText: '특수한 빙산이나 암석, 마그마에서 자신의 모습과 닮은 포켓몬을 만들었다고 전해진다.',
    stats: { hp: 110, attack: 160, defense: 110, specialAttack: 80, specialDefense: 110, speed: 100 },
    moves: [
      { name: '묵사발', type: PokemonElementType.normal, power: null, description: '굉장한 힘으로 상대를 묵사발로 만든다. 상대의 HP가 남아 있을수록 위력이 올라간다.' },
      { name: '잼잼펀치', type: PokemonElementType.normal, power: 70, description: '리드미컬한 펀치를 날려 상대를 공격한다. 혼란시킬 때가 있다.' },
      { name: '꿰뚫어보기', type: PokemonElementType.normal, power: null, description: '고스트타입에 효과가 없는 기술이나 회피율이 높은 상대라 할지라도 공격이 맞게 된다.' },
      { name: '리벤지', type: PokemonElementType.fighting, power: 60, description: '상대에게 기술을 받으면 그 상대에게 주는 데미지가 2배가 된다.' },
    ],
  },
  giratina: {
    flavorText: '상식이 통하지 않는 이 세상의 이면에 있다고 불리는 깨어진 세계에 서식한다.',
    stats: { hp: 150, attack: 100, defense: 120, specialAttack: 100, specialDefense: 120, speed: 90 },
    moves: [
      { name: '섀도다이브', type: PokemonElementType.ghost, power: 120, description: '1턴째에 모습을 감춰 2턴째에 상대를 공격한다. 방어하고 있어도 공격은 맞는다.' },
      { name: '회복봉인', type: PokemonElementType.psychic, power: null, description: '5턴 동안 기술이나 특성, 지니고 있는 도구에 의한 HP 회복을 할 수 없게 한다.' },
      { name: '파동탄', type: PokemonElementType.fighting, power: 80, description: '몸속에서 파동의 힘을 끌어내 쏜다. 공격은 반드시 명중한다.' },
      { name: '용의숨결', type: PokemonElementType.dragon, power: 60, description: '굉장한 숨결을 상대에게 내뿜어 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  giratina_origin: {
    flavorText: '상식이 통하지 않는 이 세상의 이면에 있다고 불리는 깨어진 세계에 서식한다.',
    stats: { hp: 150, attack: 120, defense: 100, specialAttack: 120, specialDefense: 100, speed: 90 },
    moves: [
      { name: '섀도다이브', type: PokemonElementType.ghost, power: 120, description: '1턴째에 모습을 감춰 2턴째에 상대를 공격한다. 방어하고 있어도 공격은 맞는다.' },
      { name: '회복봉인', type: PokemonElementType.psychic, power: null, description: '5턴 동안 기술이나 특성, 지니고 있는 도구에 의한 HP 회복을 할 수 없게 한다.' },
      { name: '파동탄', type: PokemonElementType.fighting, power: 80, description: '몸속에서 파동의 힘을 끌어내 쏜다. 공격은 반드시 명중한다.' },
      { name: '용의숨결', type: PokemonElementType.dragon, power: 60, description: '굉장한 숨결을 상대에게 내뿜어 공격한다. 마비 상태로 만들 때가 있다.' },
    ],
  },
  cresselia: {
    flavorText: '비행할 때는 베일 같은 날개에서 빛나는 입자를 낸다. 초승달의 화신으로 불리고 있다.',
    stats: { hp: 120, attack: 70, defense: 110, specialAttack: 75, specialDefense: 120, speed: 85 },
    moves: [
      { name: '초승달춤', type: PokemonElementType.psychic, power: null, description: '자신은 기절하지만 교대하여 나오는 포켓몬의 모든 상태를 회복한다.' },
      { name: '사이코시프트', type: PokemonElementType.psychic, power: null, description: '초능력으로 암시를 걸어서 자신에게 걸려 있는 상태 이상을 상대에게 옮긴다.' },
      { name: '달빛', type: PokemonElementType.normal, power: null, description: '자신의 HP를 회복한다. 날씨에 따라 회복량이 변한다.' },
      { name: '오로라빔', type: PokemonElementType.ice, power: 65, description: '무지개색의 빔을 상대에게 발사하여 공격한다. 공격을 떨어뜨릴 때가 있다.' },
    ],
  },
  phione: {
    flavorText: '바다 온도가 높아지면 머리의 부낭을 부풀려서 해수면을 집단으로 떠돈다.',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80 },
    moves: [
      { name: '녹기', type: PokemonElementType.poison, power: null, description: '세포의 변화로 액체가 되어 자신의 방어를 크게 올린다.' },
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
      { name: '거품', type: PokemonElementType.water, power: 40, description: '매우 많은 거품을 상대에게 내뿜어 공격한다. 상대의 스피드를 떨어뜨릴 때가 있다.' },
      { name: '아쿠아링', type: PokemonElementType.water, power: null, description: '자신의 몸 주변을 물로 만든 베일로 덮는다. 매 턴 HP를 회복한다.' },
    ],
  },
  manaphy: {
    flavorText: '태어났을 때부터 가지고 있는 이상한 힘을 쓰면 어떤 포켓몬과도 마음이 서로 통하게 된다.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: '하트스왑', type: PokemonElementType.psychic, power: null, description: '초능력으로 자신과 상대에 걸려있는 능력 변화를 교체한다.' },
      { name: '반딧불', type: PokemonElementType.bug, power: null, description: '깜빡거리는 빛을 바라보고 자신의 정신을 통일하여 특수공격을 매우 크게 올린다.' },
      { name: '녹기', type: PokemonElementType.poison, power: null, description: '세포의 변화로 액체가 되어 자신의 방어를 크게 올린다.' },
      { name: '물놀이', type: PokemonElementType.water, power: null, description: '주위를 물로 흠뻑 젖게 만든다. 5턴 동안 불꽃타입의 기술을 약하게 한다.' },
    ],
  },
  darkrai: {
    flavorText: '깊은 잠으로 끌어들이는 힘으로 사람과 포켓몬에게 악몽을 꾸게 해 자신의 영역에서 쫓아낸다.',
    stats: { hp: 70, attack: 90, defense: 90, specialAttack: 135, specialDefense: 90, speed: 125 },
    moves: [
      { name: '다크홀', type: PokemonElementType.dark, power: null, description: '암흑의 세계로 끌고 가서 떨어뜨려 상대를 잠듦 상태로 만든다.' },
      { name: '악몽', type: PokemonElementType.ghost, power: null, description: '잠듦 상태의 상대에게 악몽을 꾸게 하여 매 턴 조금씩 HP를 떨어뜨려 간다.' },
      { name: '최면술', type: PokemonElementType.psychic, power: null, description: '졸음을 유도하는 암시를 걸어서 상대를 잠듦 상태로 만든다.' },
      { name: '속여때리기', type: PokemonElementType.dark, power: 60, description: '슬금슬금 상대에게 다가가 방심한 틈을 타서 세게 때린다. 공격은 반드시 명중한다.' },
    ],
  },
  shaymin: {
    flavorText: '대기의 독소를 분해해서 거칠어진 대지를 일순간에 꽃밭으로 만드는 힘을 가지고 있다.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: '시드플레어', type: PokemonElementType.grass, power: 120, description: '몸속에서 충격파를 발생시킨다. 상대의 특수방어를 크게 떨어뜨릴 때가 있다.' },
      { name: '치유소원', type: PokemonElementType.psychic, power: null, description: '자신은 기절하지만 교대하여 나오는 포켓몬의 상태 이상과 HP를 회복한다.' },
      { name: '천사의키스', type: PokemonElementType.normal, power: null, description: '천사처럼 귀엽게 키스하여 상대를 혼란시킨다.' },
      { name: '아로마테라피', type: PokemonElementType.grass, power: null, description: '기분 좋은 평온한 향기를 맡게 하여 같은 편 모두의 상태 이상을 회복한다.' },
    ],
  },
  shaymin_sky: {
    flavorText: '대기의 독소를 분해해서 거칠어진 대지를 일순간에 꽃밭으로 만드는 힘을 가지고 있다.',
    stats: { hp: 100, attack: 103, defense: 75, specialAttack: 120, specialDefense: 75, speed: 127 },
    moves: [
      { name: '시드플레어', type: PokemonElementType.grass, power: 120, description: '몸속에서 충격파를 발생시킨다. 상대의 특수방어를 크게 떨어뜨릴 때가 있다.' },
      { name: '천사의키스', type: PokemonElementType.normal, power: null, description: '천사처럼 귀엽게 키스하여 상대를 혼란시킨다.' },
      { name: '성장', type: PokemonElementType.normal, power: null, description: '몸을 일시에 크게 성장시켜 공격과 특수공격을 올린다.' },
      { name: '달콤한향기', type: PokemonElementType.normal, power: null, description: '향기로 상대의 회피율을 크게 떨어뜨린다. 풀밭 등에서 쓰면 포켓몬이 다가온다.' },
    ],
  },
  arceus: {
    flavorText: '알에서 모습을 나타내 모든 세계를 창조했다고 신오신화에서 묘사된다.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '심판의뭉치', type: PokemonElementType.normal, power: 100, description: '무수한 광탄을 상대에게 방출한다. 자신이 가지고 있는 플레이트에 따라 타입이 바뀐다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
    ],
  },
  arceus_bug: {
    flavorText: '알에서 모습을 나타내 모든 세계를 창조했다고 신오신화에서 묘사된다.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '심판의뭉치', type: PokemonElementType.normal, power: 100, description: '무수한 광탄을 상대에게 방출한다. 자신이 가지고 있는 플레이트에 따라 타입이 바뀐다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
    ],
  },
  arceus_dark: {
    flavorText: '알에서 모습을 나타내 모든 세계를 창조했다고 신오신화에서 묘사된다.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '심판의뭉치', type: PokemonElementType.normal, power: 100, description: '무수한 광탄을 상대에게 방출한다. 자신이 가지고 있는 플레이트에 따라 타입이 바뀐다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
    ],
  },
  arceus_dragon: {
    flavorText: '알에서 모습을 나타내 모든 세계를 창조했다고 신오신화에서 묘사된다.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '심판의뭉치', type: PokemonElementType.normal, power: 100, description: '무수한 광탄을 상대에게 방출한다. 자신이 가지고 있는 플레이트에 따라 타입이 바뀐다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
    ],
  },
  arceus_electric: {
    flavorText: '알에서 모습을 나타내 모든 세계를 창조했다고 신오신화에서 묘사된다.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '심판의뭉치', type: PokemonElementType.normal, power: 100, description: '무수한 광탄을 상대에게 방출한다. 자신이 가지고 있는 플레이트에 따라 타입이 바뀐다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
    ],
  },
  arceus_fighting: {
    flavorText: '알에서 모습을 나타내 모든 세계를 창조했다고 신오신화에서 묘사된다.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '심판의뭉치', type: PokemonElementType.normal, power: 100, description: '무수한 광탄을 상대에게 방출한다. 자신이 가지고 있는 플레이트에 따라 타입이 바뀐다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
    ],
  },
  arceus_fire: {
    flavorText: '알에서 모습을 나타내 모든 세계를 창조했다고 신오신화에서 묘사된다.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '심판의뭉치', type: PokemonElementType.normal, power: 100, description: '무수한 광탄을 상대에게 방출한다. 자신이 가지고 있는 플레이트에 따라 타입이 바뀐다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
    ],
  },
  arceus_flying: {
    flavorText: '알에서 모습을 나타내 모든 세계를 창조했다고 신오신화에서 묘사된다.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '심판의뭉치', type: PokemonElementType.normal, power: 100, description: '무수한 광탄을 상대에게 방출한다. 자신이 가지고 있는 플레이트에 따라 타입이 바뀐다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
    ],
  },
  arceus_ghost: {
    flavorText: '알에서 모습을 나타내 모든 세계를 창조했다고 신오신화에서 묘사된다.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '심판의뭉치', type: PokemonElementType.normal, power: 100, description: '무수한 광탄을 상대에게 방출한다. 자신이 가지고 있는 플레이트에 따라 타입이 바뀐다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
    ],
  },
  arceus_grass: {
    flavorText: '알에서 모습을 나타내 모든 세계를 창조했다고 신오신화에서 묘사된다.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '심판의뭉치', type: PokemonElementType.normal, power: 100, description: '무수한 광탄을 상대에게 방출한다. 자신이 가지고 있는 플레이트에 따라 타입이 바뀐다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
    ],
  },
  arceus_ground: {
    flavorText: '알에서 모습을 나타내 모든 세계를 창조했다고 신오신화에서 묘사된다.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '심판의뭉치', type: PokemonElementType.normal, power: 100, description: '무수한 광탄을 상대에게 방출한다. 자신이 가지고 있는 플레이트에 따라 타입이 바뀐다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
    ],
  },
  arceus_ice: {
    flavorText: '알에서 모습을 나타내 모든 세계를 창조했다고 신오신화에서 묘사된다.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '심판의뭉치', type: PokemonElementType.normal, power: 100, description: '무수한 광탄을 상대에게 방출한다. 자신이 가지고 있는 플레이트에 따라 타입이 바뀐다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
    ],
  },
  arceus_poison: {
    flavorText: '알에서 모습을 나타내 모든 세계를 창조했다고 신오신화에서 묘사된다.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '심판의뭉치', type: PokemonElementType.normal, power: 100, description: '무수한 광탄을 상대에게 방출한다. 자신이 가지고 있는 플레이트에 따라 타입이 바뀐다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
    ],
  },
  arceus_psychic: {
    flavorText: '알에서 모습을 나타내 모든 세계를 창조했다고 신오신화에서 묘사된다.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '심판의뭉치', type: PokemonElementType.normal, power: 100, description: '무수한 광탄을 상대에게 방출한다. 자신이 가지고 있는 플레이트에 따라 타입이 바뀐다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
    ],
  },
  arceus_rock: {
    flavorText: '알에서 모습을 나타내 모든 세계를 창조했다고 신오신화에서 묘사된다.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '심판의뭉치', type: PokemonElementType.normal, power: 100, description: '무수한 광탄을 상대에게 방출한다. 자신이 가지고 있는 플레이트에 따라 타입이 바뀐다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
    ],
  },
  arceus_steel: {
    flavorText: '알에서 모습을 나타내 모든 세계를 창조했다고 신오신화에서 묘사된다.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '심판의뭉치', type: PokemonElementType.normal, power: 100, description: '무수한 광탄을 상대에게 방출한다. 자신이 가지고 있는 플레이트에 따라 타입이 바뀐다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
    ],
  },
  arceus_water: {
    flavorText: '알에서 모습을 나타내 모든 세계를 창조했다고 신오신화에서 묘사된다.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: '심판의뭉치', type: PokemonElementType.normal, power: 100, description: '무수한 광탄을 상대에게 방출한다. 자신이 가지고 있는 플레이트에 따라 타입이 바뀐다.' },
      { name: '신속', type: PokemonElementType.normal, power: 80, description: '눈에 보이지 않는 굉장한 속도로 상대에게 돌진하여 공격한다. 반드시 선제공격을 할 수 있다.' },
      { name: '혼내기', type: PokemonElementType.dark, power: null, description: '능력 변화로 상대가 파워업한 만큼 기술의 위력이 올라간다.' },
      { name: '멸망의노래', type: PokemonElementType.normal, power: null, description: '노래를 들은 포켓몬은 3턴이 지나면 기절한다. 교체되면 효과가 없어진다.' },
    ],
  },
}
