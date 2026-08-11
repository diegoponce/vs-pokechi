import { Strings } from "./strings";

// Item and type names are the official Simplified Chinese localization used
// in the games themselves (verified via PokeAPI's item.names/type.names).
// "Shiny" is rendered as 闪光 throughout, the standard term in Chinese
// Pokémon communities (the strict in-game term is 异色, "different color",
// but 闪光 is what players actually say and reads naturally as an
// adjective before a name).
export const zh: Strings = {
  itemNames: {
    "rare-candy": "神奇糖果",
    "master-ball": "大师球",
    "premier-ball": "纪念球",
  },
  itemDescriptions: {
    "rare-candy": "让你当前的宝可梦立即进化，前提是它还没有完全进化。",
    "master-ball": "揭示任意世代的随机准传说、传说或幻之宝可梦。",
    "premier-ball": "揭示任意世代或稀有度的随机闪光宝可梦。",
  },
  // Chinese type names are already short enough on their own (mostly one or
  // two characters) that a further abbreviation would not save any space,
  // unlike English/Spanish/French/Italian's longer names - so the badge
  // just uses the full, official in-game name for each type (属性).
  typeAbbreviations: {
    normal: "一般",
    fire: "火",
    water: "水",
    electric: "电",
    grass: "草",
    ice: "冰",
    fighting: "格斗",
    poison: "毒",
    ground: "地面",
    flying: "飞行",
    psychic: "超能力",
    bug: "虫",
    rock: "岩石",
    ghost: "幽灵",
    dragon: "龙",
    dark: "恶",
    steel: "钢",
  },

  hatchMessage: (name, cry, dropNote) =>
    `${name}从精灵球中孵化了！${cry}${dropNote}`,
  hatchMessageShiny: (name, cry, dropNote) =>
    `✨ 闪光${name}从精灵球中孵化了！${cry}${dropNote}`,
  itemDroppedNote: (itemNames) =>
    itemNames.length
      ? " 🎁 " + itemNames.map((name) => `获得了${name}！`).join(" ")
      : "",
  evolveMessage: (name, cry) => `${name}进化了！${cry}`,
  evolveMessageShiny: (name, cry) => `✨ 你的闪光${name}进化了！${cry}`,
  badgeEarned: (badgeName) => `🏅 获得了${badgeName}！`,
  retroactiveBadgeEarned: (badgeNames, plural) =>
    `🏅 你现有的进度已经让你获得了${plural ? "这些徽章" : "这枚徽章"}：${badgeNames}！`,

  couldNotBringOut: (pokemonType) => `无法放出${pokemonType}。`,
  pokedexSnapshotMessage: (name) => `这里显示的是${name}的最高形态。`,
  pokedexSnapshotCatchAgain: " 再次捕捉它以继续培养这个系列。",
  pokedexSnapshotCatchShiny: " 捕捉它的闪光版本以继续培养这个系列。",

  catchNewPokemonConfirm:
    "要捕捉一只新的宝可梦吗？当前放出的宝可梦会被收起来 - 它的进度会被保存，你可以随时从Pokechidex中把它放出来。",
  catchNewPokemonButton: "捕捉新宝可梦",
  yourPokemonTitle: "你的宝可梦",

  useRareCandyConfirm: (pokemonName, itemName) =>
    `使用一个${itemName}让${pokemonName}立即进化吗？这会消耗一个${itemName}。`,
  useItemButton: (itemName) => `使用${itemName}`,
  rareCandyEvolvedMessage: (previousName, newName, cry) =>
    `${previousName}进化成了${newName}！${cry}`,
  rareCandyEvolvedMessageShiny: (previousName, newName, cry) =>
    `✨ 你的闪光${previousName}进化成了${newName}！${cry}`,

  useMasterBallConfirm: (itemName) =>
    `使用一个${itemName}吗？它会揭示任意世代的随机准传说、传说或幻之宝可梦。这会消耗一个${itemName}。`,
  masterBallUsedMessage: (itemName) =>
    ` 你使用了一个${itemName}！继续写代码来孵化它吧。`,
  masterBallRevealedMessage: (itemName, pokemonName) =>
    `🎉 你的${itemName}揭示了${pokemonName}！`,
  masterBallRevealedMessageShiny: (itemName, pokemonName) =>
    `🎉✨ 你的${itemName}揭示了闪光${pokemonName}！`,

  usePremierBallConfirm: (itemName) =>
    `使用一个${itemName}吗？它会揭示任意世代或稀有度的随机闪光宝可梦。这会消耗一个${itemName}。`,
  premierBallUsedMessage: (itemName) =>
    ` 你使用了一个${itemName}！继续写代码来孵化它吧。`,
  premierBallRevealedMessage: (itemName, pokemonName) =>
    `🎉✨ 你的${itemName}揭示了闪光${pokemonName}！`,

  explorerModeChanged:
    "Pokechi 的模式已切换为资源管理器。请在资源管理器视图中寻找 Pokechi！",
  explorerModeShowButton: "显示资源管理器",

  pokechidexTitle: "Pokechidex",
  pokechidexSubtitle:
    "你从精灵球或进化中认识的物种。选择一个将其放出来 —— 每个系列都保留各自的经验值，切换时不会丢失任何进度。选择一个会播放它的叫声，你可以通过 <code>pokechi.playCrySounds</code> 选项关闭。打开下方的背包以查看你的道具和徽章。",
  pokedexPanelTitle: (discoveredCount, totalCount) =>
    `Pokechidex (${discoveredCount}/${totalCount})`,

  counterDiscovered: "已发现",
  counterShiny: "闪光",
  counterBadges: "徽章",
  counterTotalXP: "总经验值",
  candyCounterNoneYet: (itemName) =>
    `还没有${itemName} - 孵化精灵球有小概率获得一个`,
  candyCounterNotUsableNow: (itemName) =>
    `你当前的宝可梦现在无法使用${itemName}`,

  bagLabel: "背包",
  bagTabItems: "道具",
  bagTabBadges: "徽章",
  itemUseButton: "使用",
  badgeStatusObtained: "已获得",
  badgeStatusLocked: "未解锁",
  badgeGenerationLabel: (generation) => `第${generation}世代`,

  requirementSpeciesDiscovered: "已发现的物种",
  requirementShinyDiscovered: "已发现的闪光",
  requirementFossilsDiscovered: "已发现的化石",
  requirementSubLegendariesDiscovered: "已发现的准传说",
  requirementLegendariesDiscovered: "已发现的传说",
  requirementMythicalsDiscovered: "已发现的幻之",
  requirementRareCandiesUsed: "已使用的神奇糖果",

  searchPlaceholder: "按名称或编号搜索",
  searchAriaLabel: "搜索 Pokechidex",
  filtersAriaLabel: "Pokedex 筛选",
  filterAll: "全部",
  typeFilterLabel: "属性",
  typeFilterAriaLabel: "按属性筛选",
  typeFilterClear: "清除",
  filterDiscoveredOnly: "仅显示已发现",
  filterShinyUnlocked: "闪光已解锁",
  emptyState: "没有符合搜索条件的结果。",
  gridAriaLabel: "Pokechidex 网格",

  cardShowLabel: (name) => `显示${name}`,
  cardShowLabelActive: (name) => `显示${name}，当前已放出`,
  cardUndiscoveredLabel: "未发现的宝可梦",
  toggleShinyLabel: (name) => `切换${name}的闪光形态`,
  toggleShinyTitle: "切换闪光形态",
  playCryLabel: (name) => `播放${name}的叫声`,
  playCryTitle: "播放叫声",
  showInfoLabel: (name) => `显示${name}的信息`,
  showMovesLabel: (name) => `显示${name}的招式`,
  infoTitle: "信息",
  movesTitle: "招式",
  activeBadge: "已放出",
};
