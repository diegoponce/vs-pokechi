import { Strings } from "./strings";

// Item and type names are the official Japanese localization used in the
// games themselves (verified via PokeAPI's item.names/type.names). "Shiny"
// is rendered as 色違い throughout, the original official term the whole
// concept is named after in every other language's own community term.
export const ja: Strings = {
  itemNames: {
    "rare-candy": "ふしぎなアメ",
    "master-ball": "マスターボール",
    "premier-ball": "プレミアボール",
  },
  itemDescriptions: {
    "rare-candy":
      "手持ちのポケモンが完全に進化していなければ、即座に進化させる。",
    "master-ball":
      "全世代からランダムに準伝説・伝説・幻のポケモンを1匹表示する。",
    "premier-ball":
      "全世代・レア度からランダムなポケモンを色違いとして表示する。",
  },
  // Japanese type names are already short enough on their own that a
  // further abbreviation would not save any space, unlike English/Spanish/
  // French/Italian's longer names - so the badge just uses the full,
  // official in-game name for each type.
  typeAbbreviations: {
    normal: "ノーマル",
    fire: "ほのお",
    water: "みず",
    electric: "でんき",
    grass: "くさ",
    ice: "こおり",
    fighting: "かくとう",
    poison: "どく",
    ground: "じめん",
    flying: "ひこう",
    psychic: "エスパー",
    bug: "むし",
    rock: "いわ",
    ghost: "ゴースト",
    dragon: "ドラゴン",
    dark: "あく",
    steel: "はがね",
  },

  hatchMessage: (name, cry, dropNote) =>
    `${name}がモンスターボールから孵化した！${cry}${dropNote}`,
  hatchMessageShiny: (name, cry, dropNote) =>
    `✨ 色違いの${name}がモンスターボールから孵化した！${cry}${dropNote}`,
  itemDroppedNote: (itemNames) =>
    itemNames.length
      ? " 🎁 " + itemNames.map((name) => `${name}を手に入れた！`).join(" ")
      : "",
  evolveMessage: (name, cry) => `${name}が進化した！${cry}`,
  evolveMessageShiny: (name, cry) => `✨ 色違いの${name}が進化した！${cry}`,
  badgeEarned: (badgeName) => `🏅 ${badgeName}を獲得した！`,
  retroactiveBadgeEarned: (badgeNames, plural) =>
    `🏅 これまでの進行状況で、すでに${plural ? "これらのバッジ" : "このバッジ"}を獲得していました：${badgeNames}！`,

  couldNotBringOut: (pokemonType) => `${pokemonType}を出せませんでした。`,
  pokedexSnapshotMessage: (name) =>
    `ここに表示されているのは${name}の最大到達形態です。`,
  pokedexSnapshotCatchAgain:
    " このラインを育て続けるには、もう一度捕まえてください。",
  pokedexSnapshotCatchShiny:
    " このラインを育て続けるには、色違いで捕まえてください。",

  catchNewPokemonConfirm:
    "新しいポケモンを捕まえますか？今出しているポケモンはしまわれます - 進行状況は保存され、Pokechidexからいつでも呼び戻せます。",
  catchNewPokemonButton: "新しいポケモンを捕まえる",
  yourPokemonTitle: "あなたのポケモン",

  useRareCandyConfirm: (pokemonName, itemName) =>
    `${itemName}を使って${pokemonName}を即座に進化させますか？${itemName}を1つ消費します。`,
  useItemButton: (itemName) => `${itemName}を使う`,
  rareCandyEvolvedMessage: (previousName, newName, cry) =>
    `${previousName}が${newName}に進化した！${cry}`,
  rareCandyEvolvedMessageShiny: (previousName, newName, cry) =>
    `✨ 色違いの${previousName}が${newName}に進化した！${cry}`,

  useMasterBallConfirm: (itemName) =>
    `${itemName}を使いますか？全世代からランダムに準伝説・伝説・幻のポケモンを1匹表示します。${itemName}を1つ消費します。`,
  masterBallUsedMessage: (itemName) =>
    ` ${itemName}を使いました！コーディングを続けて孵化させましょう。`,
  masterBallRevealedMessage: (itemName, pokemonName) =>
    `🎉 ${itemName}が${pokemonName}を明らかにした！`,
  masterBallRevealedMessageShiny: (itemName, pokemonName) =>
    `🎉✨ ${itemName}が色違いの${pokemonName}を明らかにした！`,

  usePremierBallConfirm: (itemName) =>
    `${itemName}を使いますか？全世代・レア度からランダムなポケモンを色違いとして表示します。${itemName}を1つ消費します。`,
  premierBallUsedMessage: (itemName) =>
    ` ${itemName}を使いました！コーディングを続けて孵化させましょう。`,
  premierBallRevealedMessage: (itemName, pokemonName) =>
    `🎉✨ ${itemName}が色違いの${pokemonName}を明らかにした！`,

  explorerModeChanged:
    "Pokechiのモードがエクスプローラーに切り替わりました。エクスプローラービューでPokechiを探してください！",
  explorerModeShowButton: "エクスプローラーを表示",

  pokechidexTitle: "Pokechidex",
  pokechidexSubtitle:
    "モンスターボールや進化で出会った種族です。1匹選んで呼び出してみましょう — 各ラインは独自の経験値を保持するので、切り替えても何も失われません。選択すると鳴き声が再生されます。これは<code>pokechi.playCrySounds</code>設定でオフにできます。下のバッグを開いて、アイテムとバッジを確認しましょう。",
  pokedexPanelTitle: (discoveredCount, totalCount) =>
    `Pokechidex (${discoveredCount}/${totalCount})`,

  counterDiscovered: "発見数",
  counterShiny: "色違い",
  counterBadges: "バッジ",
  counterTotalXP: "合計XP",
  candyCounterNoneYet: (itemName) =>
    `まだ${itemName}を持っていません - モンスターボールが孵化すると、低確率で1つ手に入ります`,
  candyCounterNotUsableNow: (itemName) =>
    `今のポケモンは今は${itemName}を使えません`,

  bagLabel: "バッグ",
  bagTabItems: "アイテム",
  bagTabBadges: "バッジ",
  itemUseButton: "使う",
  badgeStatusObtained: "獲得済み",
  badgeStatusLocked: "未獲得",
  badgeGenerationLabel: (generation) => `第${generation}世代`,

  requirementSpeciesDiscovered: "発見した種族数",
  requirementShinyDiscovered: "発見した色違い数",
  requirementFossilsDiscovered: "発見した化石数",
  requirementSubLegendariesDiscovered: "発見した準伝説数",
  requirementLegendariesDiscovered: "発見した伝説数",
  requirementMythicalsDiscovered: "発見した幻数",
  requirementRareCandiesUsed: "使用したふしぎなアメ数",

  searchPlaceholder: "名前または番号で検索",
  searchAriaLabel: "Pokechidexを検索",
  filtersAriaLabel: "Pokedexのフィルター",
  filterAll: "すべて",
  typeFilterLabel: "タイプ",
  typeFilterAriaLabel: "タイプで絞り込む",
  typeFilterClear: "クリア",
  filterDiscoveredOnly: "発見済みのみ",
  filterShinyUnlocked: "色違い解放済み",
  emptyState: "検索条件に一致するものがありません。",
  gridAriaLabel: "Pokechidexグリッド",

  cardShowLabel: (name) => `${name}を表示`,
  cardShowLabelActive: (name) => `${name}を表示、現在アクティブ`,
  cardUndiscoveredLabel: "未発見のポケモン",
  toggleShinyLabel: (name) => `${name}の色違いスプライトを切り替え`,
  toggleShinyTitle: "色違いスプライトを切り替え",
  playCryLabel: (name) => `${name}の鳴き声を再生`,
  playCryTitle: "鳴き声を再生",
  showInfoLabel: (name) => `${name}の情報を表示`,
  showMovesLabel: (name) => `${name}の技を表示`,
  infoTitle: "情報",
  movesTitle: "技",
  activeBadge: "アクティブ",
};
