import { Strings } from "./strings";

// Item names are the official Spanish localization used in the games
// themselves (verified via PokeAPI's item.names, not guessed) - Master
// Ball stays "Master Ball" in Spanish too, and Premier Ball is actually
// "Honor Ball".
export const es: Strings = {
  itemNames: {
    "rare-candy": "Caramelo Raro",
    "master-ball": "Master Ball",
    "premier-ball": "Honor Ball",
  },
  itemDescriptions: {
    "rare-candy":
      "Evoluciona al instante a tu pokémon actual, siempre que no esté ya completamente evolucionado.",
    "master-ball":
      "Revela un Pokémon sub-legendario, legendario o mítico al azar de cualquier generación.",
    "premier-ball":
      "Revela un Pokémon al azar como shiny, de cualquier generación o rareza.",
  },
  // The official in-game Spanish abbreviations, matching the full type
  // names verified via PokeAPI's type.names (Fuego, Agua, Eléctrico,
  // Planta, Lucha, Volador, Psíquico, Bicho, Fantasma, Siniestro, Acero...).
  typeAbbreviations: {
    normal: "NOR",
    fire: "FUE",
    water: "AGU",
    electric: "ELE",
    grass: "PLA",
    ice: "HIE",
    fighting: "LUC",
    poison: "VEN",
    ground: "TIE",
    flying: "VOL",
    psychic: "PSI",
    bug: "BIC",
    rock: "ROC",
    ghost: "FAN",
    dragon: "DRA",
    dark: "SIN",
    steel: "ACE",
  },

  hatchMessage: (name, cry, dropNote) =>
    `¡${name} eclosionó de la Poké Ball! ${cry}${dropNote}`,
  hatchMessageShiny: (name, cry, dropNote) =>
    `✨ ¡Un ${name} shiny eclosionó de la Poké Ball! ${cry}${dropNote}`,
  itemDroppedNote: (itemNames) =>
    itemNames.length
      ? " 🎁 " + itemNames.map((name) => `¡Consiguió ${name}!`).join(" ")
      : "",
  evolveMessage: (name, cry) => `¡${name} evolucionó! ${cry}`,
  evolveMessageShiny: (name, cry) => `✨ ¡Tu ${name} shiny evolucionó! ${cry}`,
  badgeEarned: (badgeName) => `🏅 ¡Conseguiste la ${badgeName}!`,
  retroactiveBadgeEarned: (badgeNames, plural) =>
    `🏅 ¡Tu progreso ya te ganó ${plural ? "estas medallas" : "esta medalla"}: ${badgeNames}!`,

  couldNotBringOut: (pokemonType) => `No se pudo sacar a ${pokemonType}.`,
  pokedexSnapshotMessage: (name) => `${name} se muestra al máximo aquí.`,
  pokedexSnapshotCatchAgain:
    " Atrápalo de nuevo para seguir criando esa línea.",
  pokedexSnapshotCatchShiny: " Atrápalo shiny para seguir criando esa línea.",

  catchNewPokemonConfirm:
    "¿Atrapar un nuevo Pokémon? El que tienes afuera se guardará - su progreso se conserva y puedes volver a sacarlo desde el Pokechidex.",
  catchNewPokemonButton: "Atrapar un nuevo Pokémon",
  yourPokemonTitle: "Tu Pokémon",

  useRareCandyConfirm: (pokemonName, itemName) =>
    `¿Usar un ${itemName} para evolucionar a ${pokemonName} al instante? Esto gasta un ${itemName}.`,
  useItemButton: (itemName) => `Usar ${itemName}`,
  rareCandyEvolvedMessage: (previousName, newName, cry) =>
    `¡${previousName} evolucionó a ${newName}! ${cry}`,
  rareCandyEvolvedMessageShiny: (previousName, newName, cry) =>
    `✨ ¡Tu ${previousName} shiny evolucionó a ${newName}! ${cry}`,

  useMasterBallConfirm: (itemName) =>
    `¿Usar una ${itemName}? Revelará un Pokémon sub-legendario, legendario o mítico al azar de cualquier generación. Esto gasta una ${itemName}.`,
  masterBallUsedMessage: (itemName) =>
    ` ¡Usaste una ${itemName}! Sigue programando para eclosionar lo que hay dentro.`,
  masterBallRevealedMessage: (itemName, pokemonName) =>
    `🎉 ¡Tu ${itemName} reveló a ${pokemonName}!`,
  masterBallRevealedMessageShiny: (itemName, pokemonName) =>
    `🎉✨ ¡Tu ${itemName} reveló a un ${pokemonName} shiny!`,

  usePremierBallConfirm: (itemName) =>
    `¿Usar una ${itemName}? Revelará un Pokémon al azar como shiny, de cualquier generación o rareza. Esto gasta una ${itemName}.`,
  premierBallUsedMessage: (itemName) =>
    ` ¡Usaste una ${itemName}! Sigue programando para eclosionar lo que hay dentro.`,
  premierBallRevealedMessage: (itemName, pokemonName) =>
    `🎉✨ ¡Tu ${itemName} reveló a un ${pokemonName} shiny!`,

  explorerModeChanged:
    "El modo de Pokechi cambió a explorador. ¡Busca a Pokechi en la vista del Explorador!",
  explorerModeShowButton: "Mostrar Explorador",

  pokechidexTitle: "Pokechidex",
  pokechidexSubtitle:
    "Especies que has conocido desde una Poké Ball o una evolución. Elige una para sacarla — cada línea conserva su propia XP, así que no pierdes nada al cambiar. Elegir una reproduce su grito, que puedes desactivar con la opción <code>pokechi.playCrySounds</code>. Abre la Mochila de abajo para ver tus objetos y medallas.",
  pokedexPanelTitle: (discoveredCount, totalCount) =>
    `Pokechidex (${discoveredCount}/${totalCount})`,

  counterDiscovered: "Descubiertos",
  counterShiny: "Shiny",
  counterBadges: "Medallas",
  counterTotalXP: "XP Total",
  candyCounterNoneYet: (itemName) =>
    `Todavía no tienes ${itemName} - eclosionar una Poké Ball tiene una pequeña probabilidad de darte uno`,
  candyCounterNotUsableNow: (itemName) =>
    `Tu pokémon actual no puede usar un ${itemName} ahora mismo`,

  bagLabel: "Mochila",
  bagTabItems: "Objetos",
  bagTabBadges: "Medallas",
  itemUseButton: "Usar",
  badgeStatusObtained: "Obtenida",
  badgeStatusLocked: "Bloqueada",
  badgeGenerationLabel: (generation) => `Gen ${generation}`,

  requirementSpeciesDiscovered: "Especies descubiertas",
  requirementShinyDiscovered: "Shiny descubiertos",
  requirementFossilsDiscovered: "Fósiles descubiertos",
  requirementSubLegendariesDiscovered: "Sublegendarios descubiertos",
  requirementLegendariesDiscovered: "Legendarios descubiertos",
  requirementMythicalsDiscovered: "Míticos descubiertos",
  requirementRareCandiesUsed: "Caramelos Raros usados",

  searchPlaceholder: "Buscar por nombre o número",
  searchAriaLabel: "Buscar en el Pokechidex",
  filtersAriaLabel: "Filtros del Pokedex",
  filterAll: "Todos",
  typeFilterLabel: "Tipo",
  typeFilterAriaLabel: "Filtrar por tipo",
  typeFilterClear: "Limpiar",
  filterDiscoveredOnly: "Solo descubiertos",
  filterShinyUnlocked: "Shiny desbloqueado",
  emptyState: "Nada coincide con esa búsqueda.",
  gridAriaLabel: "Cuadrícula del Pokechidex",

  cardShowLabel: (name) => `Mostrar a ${name}`,
  cardShowLabelActive: (name) => `Mostrar a ${name}, actualmente activo`,
  cardUndiscoveredLabel: "Pokémon sin descubrir",
  toggleShinyLabel: (name) => `Alternar sprite shiny de ${name}`,
  toggleShinyTitle: "Alternar sprite shiny",
  playCryLabel: (name) => `Reproducir el grito de ${name}`,
  playCryTitle: "Reproducir grito",
  showInfoLabel: (name) => `Mostrar información de ${name}`,
  showMovesLabel: (name) => `Mostrar movimientos de ${name}`,
  infoTitle: "Info",
  movesTitle: "Movimientos",
  activeBadge: "Activo",
};
