import { Strings } from "./strings";

// Item and type names are the official Korean localization used in the
// games themselves (verified via PokeAPI's item.names/type.names). "Shiny"
// is rendered as 이로치 throughout - the long-standing Korean community term
// (borrowed from the Japanese 色違い before an official localized term
// existed), the closest equivalent to how Spanish/French/Portuguese keep
// "shiny" itself as a loanword.
export const ko: Strings = {
  itemNames: {
    "rare-candy": "이상한사탕",
    "master-ball": "마스터볼",
    "premier-ball": "프리미어볼",
  },
  itemDescriptions: {
    "rare-candy":
      "지금 포켓몬이 아직 완전히 진화하지 않았다면 즉시 진화시켜요.",
    "master-ball":
      "모든 세대 중에서 무작위 준전설, 전설 또는 환상의 포켓몬을 보여줘요.",
    "premier-ball":
      "모든 세대와 희귀도 중에서 무작위 포켓몬을 이로치로 보여줘요.",
  },
  // Korean type names are already short enough on their own that a further
  // 3-letter abbreviation would not save any space, unlike English/Spanish/
  // French/Italian's longer names - so the badge just uses the full,
  // official in-game name for each type.
  typeAbbreviations: {
    normal: "노말",
    fire: "불꽃",
    water: "물",
    electric: "전기",
    grass: "풀",
    ice: "얼음",
    fighting: "격투",
    poison: "독",
    ground: "땅",
    flying: "비행",
    psychic: "에스퍼",
    bug: "벌레",
    rock: "바위",
    ghost: "고스트",
    dragon: "드래곤",
    dark: "악",
    steel: "강철",
  },

  hatchMessage: (name, cry, dropNote) =>
    `${name}이(가) 포켓볼에서 부화했어요! ${cry}${dropNote}`,
  hatchMessageShiny: (name, cry, dropNote) =>
    `✨ 이로치 ${name}이(가) 포켓볼에서 부화했어요! ${cry}${dropNote}`,
  itemDroppedNote: (itemNames) =>
    itemNames.length
      ? " 🎁 " + itemNames.map((name) => `${name}을(를) 얻었어요!`).join(" ")
      : "",
  evolveMessage: (name, cry) => `${name}이(가) 진화했어요! ${cry}`,
  evolveMessageShiny: (name, cry) =>
    `✨ 이로치 ${name}이(가) 진화했어요! ${cry}`,
  badgeEarned: (badgeName) => `🏅 ${badgeName}을(를) 획득했어요!`,
  retroactiveBadgeEarned: (badgeNames, plural) =>
    `🏅 지금까지의 진행 상황으로 이미 ${plural ? "이 배지들을" : "이 배지를"} 획득했어요: ${badgeNames}!`,

  couldNotBringOut: (pokemonType) => `${pokemonType}을(를) 꺼낼 수 없었어요.`,
  pokedexSnapshotMessage: (name) => `여기서는 ${name}이(가) 최대치로 표시돼요.`,
  pokedexSnapshotCatchAgain: " 그 계보를 계속 키우려면 다시 잡아 주세요.",
  pokedexSnapshotCatchShiny:
    " 그 계보를 계속 키우려면 이로치로 다시 잡아 주세요.",

  catchNewPokemonConfirm:
    "새로운 포켓몬을 잡을까요? 지금 밖에 있는 포켓몬은 안전하게 보관돼요 - 진행 상황이 저장되며 Pokechidex에서 다시 꺼낼 수 있어요.",
  catchNewPokemonButton: "새로운 포켓몬 잡기",
  yourPokemonTitle: "내 포켓몬",

  useRareCandyConfirm: (pokemonName, itemName) =>
    `${itemName}을(를) 사용해서 ${pokemonName}을(를) 즉시 진화시킬까요? ${itemName} 1개를 소모해요.`,
  useItemButton: (itemName) => `${itemName} 사용`,
  rareCandyEvolvedMessage: (previousName, newName, cry) =>
    `${previousName}이(가) ${newName}(으)로 진화했어요! ${cry}`,
  rareCandyEvolvedMessageShiny: (previousName, newName, cry) =>
    `✨ 이로치 ${previousName}이(가) ${newName}(으)로 진화했어요! ${cry}`,

  useMasterBallConfirm: (itemName) =>
    `${itemName}을(를) 사용할까요? 모든 세대 중에서 무작위 준전설, 전설 또는 환상의 포켓몬을 보여줘요. ${itemName} 1개를 소모해요.`,
  masterBallUsedMessage: (itemName) =>
    ` ${itemName}을(를) 사용했어요! 계속 코딩해서 부화시켜 보세요.`,
  masterBallRevealedMessage: (itemName, pokemonName) =>
    `🎉 ${itemName}이(가) ${pokemonName}을(를) 보여줬어요!`,
  masterBallRevealedMessageShiny: (itemName, pokemonName) =>
    `🎉✨ ${itemName}이(가) 이로치 ${pokemonName}을(를) 보여줬어요!`,

  usePremierBallConfirm: (itemName) =>
    `${itemName}을(를) 사용할까요? 모든 세대와 희귀도 중에서 무작위 포켓몬을 이로치로 보여줘요. ${itemName} 1개를 소모해요.`,
  premierBallUsedMessage: (itemName) =>
    ` ${itemName}을(를) 사용했어요! 계속 코딩해서 부화시켜 보세요.`,
  premierBallRevealedMessage: (itemName, pokemonName) =>
    `🎉✨ ${itemName}이(가) 이로치 ${pokemonName}을(를) 보여줬어요!`,

  explorerModeChanged:
    "Pokechi 모드가 탐색기로 바뀌었어요. 탐색기 보기에서 Pokechi를 찾아보세요!",
  explorerModeShowButton: "탐색기 보기",

  pokechidexTitle: "Pokechidex",
  pokechidexSubtitle:
    "포켓볼이나 진화로 만난 종들이에요. 하나를 선택해서 꺼내 보세요 — 각 계보는 자신만의 XP를 유지하므로 바꿔도 잃는 것이 없어요. 선택하면 울음소리가 재생되며, <code>pokechi.playCrySounds</code> 옵션으로 끌 수 있어요. 아래의 가방을 열어 아이템과 배지를 확인하세요.",
  pokedexPanelTitle: (discoveredCount, totalCount) =>
    `Pokechidex (${discoveredCount}/${totalCount})`,

  counterDiscovered: "발견",
  counterShiny: "이로치",
  counterBadges: "배지",
  counterTotalXP: "총 XP",
  candyCounterNoneYet: (itemName) =>
    `아직 ${itemName}이(가) 없어요 - 포켓볼 부화 시 낮은 확률로 얻을 수 있어요`,
  candyCounterNotUsableNow: (itemName) =>
    `지금은 현재 포켓몬이 ${itemName}을(를) 사용할 수 없어요`,

  bagLabel: "가방",
  bagTabItems: "아이템",
  bagTabBadges: "배지",
  itemUseButton: "사용",
  badgeStatusObtained: "획득",
  badgeStatusLocked: "잠김",
  badgeGenerationLabel: (generation) => `${generation}세대`,

  requirementSpeciesDiscovered: "발견한 종",
  requirementShinyDiscovered: "발견한 이로치",
  requirementFossilsDiscovered: "발견한 화석",
  requirementSubLegendariesDiscovered: "발견한 준전설",
  requirementLegendariesDiscovered: "발견한 전설",
  requirementMythicalsDiscovered: "발견한 환상",
  requirementRareCandiesUsed: "사용한 이상한사탕",

  searchPlaceholder: "이름이나 번호로 검색",
  searchAriaLabel: "Pokechidex 검색",
  filtersAriaLabel: "Pokedex 필터",
  filterAll: "전체",
  typeFilterLabel: "타입",
  typeFilterAriaLabel: "타입으로 필터링",
  typeFilterClear: "지우기",
  filterDiscoveredOnly: "발견한 것만",
  filterShinyUnlocked: "이로치 해금됨",
  emptyState: "검색 결과가 없어요.",
  gridAriaLabel: "Pokechidex 그리드",

  cardShowLabel: (name) => `${name} 보기`,
  cardShowLabelActive: (name) => `${name} 보기, 현재 활성 상태`,
  cardUndiscoveredLabel: "발견하지 못한 포켓몬",
  toggleShinyLabel: (name) => `${name}의 이로치 스프라이트 전환`,
  toggleShinyTitle: "이로치 스프라이트 전환",
  playCryLabel: (name) => `${name}의 울음소리 재생`,
  playCryTitle: "울음소리 재생",
  showInfoLabel: (name) => `${name}의 정보 보기`,
  showMovesLabel: (name) => `${name}의 기술 보기`,
  infoTitle: "정보",
  movesTitle: "기술",
  activeBadge: "활성",
};
