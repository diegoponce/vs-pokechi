import { Strings } from "./strings";

// Item and type names are the official Brazilian Portuguese localization
// (PokeAPI has no pt-br item/type data, so these are grounded against
// Bulbapedia's own "in other languages" tables instead) - Master Ball stays
// "Master Ball" like most languages, Rare Candy is "Doce Raro", and Premier
// Ball is "Bola Presenteada" (its own name here too, like Spanish's "Honor
// Ball" and French's "Honor Ball").
export const pt: Strings = {
  itemNames: {
    "rare-candy": "Doce Raro",
    "master-ball": "Master Ball",
    "premier-ball": "Bola Presenteada",
  },
  itemDescriptions: {
    "rare-candy":
      "Evolui instantaneamente seu pokémon atual, desde que ele ainda não esteja totalmente evoluído.",
    "master-ball":
      "Revela um Pokémon sub-lendário, lendário ou mítico aleatório de qualquer geração.",
    "premier-ball":
      "Revela um Pokémon aleatório como shiny, de qualquer geração ou raridade.",
  },
  typeAbbreviations: {
    normal: "NOR",
    fire: "FOG",
    water: "AGU",
    electric: "ELE",
    grass: "PLA",
    ice: "GEL",
    fighting: "LUT",
    poison: "VEN",
    ground: "TER",
    flying: "VOA",
    psychic: "PSI",
    bug: "INS",
    rock: "PED",
    ghost: "FAN",
    dragon: "DRA",
    dark: "SOM",
    steel: "ACO",
  },

  hatchMessage: (name, cry, dropNote) =>
    `${name} eclodiu da Poké Bola! ${cry}${dropNote}`,
  hatchMessageShiny: (name, cry, dropNote) =>
    `✨ Um ${name} shiny eclodiu da Poké Bola! ${cry}${dropNote}`,
  itemDroppedNote: (itemNames) =>
    itemNames.length
      ? " 🎁 " + itemNames.map((name) => `Ganhou ${name}!`).join(" ")
      : "",
  evolveMessage: (name, cry) => `${name} evoluiu! ${cry}`,
  evolveMessageShiny: (name, cry) => `✨ Seu ${name} shiny evoluiu! ${cry}`,
  badgeEarned: (badgeName) => `🏅 Você conquistou a ${badgeName}!`,
  retroactiveBadgeEarned: (badgeNames, plural) =>
    `🏅 Seu progresso já te deu ${plural ? "estas medalhas" : "esta medalha"}: ${badgeNames}!`,

  couldNotBringOut: (pokemonType) => `Não foi possível trazer ${pokemonType}.`,
  pokedexSnapshotMessage: (name) =>
    `${name} está sendo mostrado no máximo aqui.`,
  pokedexSnapshotCatchAgain:
    " Capture-o novamente para continuar criando essa linha.",
  pokedexSnapshotCatchShiny:
    " Capture-o shiny para continuar criando essa linha.",

  catchNewPokemonConfirm:
    "Capturar um novo Pokémon? O que você tem agora será guardado - seu progresso é salvo e você pode trazê-lo de volta pelo Pokechidex.",
  catchNewPokemonButton: "Capturar um Novo Pokémon",
  yourPokemonTitle: "Seu Pokémon",

  useRareCandyConfirm: (pokemonName, itemName) =>
    `Usar um ${itemName} para evoluir ${pokemonName} instantaneamente? Isso vai gastar um ${itemName}.`,
  useItemButton: (itemName) => `Usar ${itemName}`,
  rareCandyEvolvedMessage: (previousName, newName, cry) =>
    `${previousName} evoluiu para ${newName}! ${cry}`,
  rareCandyEvolvedMessageShiny: (previousName, newName, cry) =>
    `✨ Seu ${previousName} shiny evoluiu para ${newName}! ${cry}`,

  useMasterBallConfirm: (itemName) =>
    `Usar uma ${itemName}? Ela vai revelar um Pokémon sub-lendário, lendário ou mítico aleatório de qualquer geração. Isso vai gastar uma ${itemName}.`,
  masterBallUsedMessage: (itemName) =>
    ` Você usou uma ${itemName}! Continue codando para eclodir o que há dentro.`,
  masterBallRevealedMessage: (itemName, pokemonName) =>
    `🎉 Sua ${itemName} revelou ${pokemonName}!`,
  masterBallRevealedMessageShiny: (itemName, pokemonName) =>
    `🎉✨ Sua ${itemName} revelou um ${pokemonName} shiny!`,

  usePremierBallConfirm: (itemName) =>
    `Usar uma ${itemName}? Ela vai revelar um Pokémon aleatório como shiny, de qualquer geração ou raridade. Isso vai gastar uma ${itemName}.`,
  premierBallUsedMessage: (itemName) =>
    ` Você usou uma ${itemName}! Continue codando para eclodir o que há dentro.`,
  premierBallRevealedMessage: (itemName, pokemonName) =>
    `🎉✨ Sua ${itemName} revelou um ${pokemonName} shiny!`,

  explorerModeChanged:
    "O modo do Pokechi mudou para explorador. Procure o Pokechi na visão do Explorer!",
  explorerModeShowButton: "Mostrar Explorer",

  pokechidexTitle: "Pokechidex",
  pokechidexSubtitle:
    "Espécies que você já conheceu de uma Poké Bola ou de uma evolução. Escolha uma para trazê-la para fora — cada linha mantém seu próprio XP, então nada se perde ao trocar. Escolher uma reproduz seu grito, que você pode desativar na opção <code>pokechi.playCrySounds</code>. Abra a Mochila abaixo para ver seus itens e medalhas.",
  pokedexPanelTitle: (discoveredCount, totalCount) =>
    `Pokechidex (${discoveredCount}/${totalCount})`,

  counterDiscovered: "Descobertos",
  counterShiny: "Shiny",
  counterBadges: "Medalhas",
  counterTotalXP: "XP Total",
  candyCounterNoneYet: (itemName) =>
    `Você ainda não tem ${itemName} - eclodir uma Poké Bola tem uma pequena chance de dar um`,
  candyCounterNotUsableNow: (itemName) =>
    `Seu pokémon atual não pode usar um ${itemName} agora`,

  bagLabel: "Mochila",
  bagTabItems: "Itens",
  bagTabBadges: "Medalhas",
  itemUseButton: "Usar",
  badgeStatusObtained: "Obtida",
  badgeStatusLocked: "Bloqueada",
  badgeGenerationLabel: (generation) => `Ger ${generation}`,

  requirementSpeciesDiscovered: "Espécies descobertas",
  requirementShinyDiscovered: "Shiny descobertos",
  requirementFossilsDiscovered: "Fósseis descobertos",
  requirementSubLegendariesDiscovered: "Sub-lendários descobertos",
  requirementLegendariesDiscovered: "Lendários descobertos",
  requirementMythicalsDiscovered: "Míticos descobertos",
  requirementRareCandiesUsed: "Doces Raros usados",

  searchPlaceholder: "Buscar por nome ou número",
  searchAriaLabel: "Buscar no Pokechidex",
  filtersAriaLabel: "Filtros do Pokedex",
  filterAll: "Todos",
  typeFilterLabel: "Tipo",
  typeFilterAriaLabel: "Filtrar por tipo",
  typeFilterClear: "Limpar",
  filterDiscoveredOnly: "Somente descobertos",
  filterShinyUnlocked: "Shiny desbloqueado",
  emptyState: "Nada corresponde a essa busca.",
  gridAriaLabel: "Grade do Pokechidex",

  cardShowLabel: (name) => `Mostrar ${name}`,
  cardShowLabelActive: (name) => `Mostrar ${name}, atualmente ativo`,
  cardUndiscoveredLabel: "Pokémon não descoberto",
  toggleShinyLabel: (name) => `Alternar sprite shiny de ${name}`,
  toggleShinyTitle: "Alternar sprite shiny",
  playCryLabel: (name) => `Tocar o grito de ${name}`,
  playCryTitle: "Tocar grito",
  showInfoLabel: (name) => `Mostrar informações de ${name}`,
  showMovesLabel: (name) => `Mostrar golpes de ${name}`,
  infoTitle: "Info",
  movesTitle: "Golpes",
  activeBadge: "Ativo",
};
