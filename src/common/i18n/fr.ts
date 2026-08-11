import { Strings } from "./strings";

// Item and type names are the official French localization used in the
// games themselves (verified via PokeAPI's item.names/type.names) - Master
// Ball stays "Master Ball", Rare Candy is "Super Bonbon", and Premier Ball
// is actually "Honor Ball" here too, same as in Spanish.
export const fr: Strings = {
  itemNames: {
    "rare-candy": "Super Bonbon",
    "master-ball": "Master Ball",
    "premier-ball": "Honor Ball",
  },
  itemDescriptions: {
    "rare-candy":
      "Fait évoluer instantanément ton pokémon actuel, tant qu'il n'est pas déjà totalement évolué.",
    "master-ball":
      "Révèle un Pokémon sous-légendaire, légendaire ou mythique aléatoire, toutes générations confondues.",
    "premier-ball":
      "Révèle un Pokémon aléatoire en shiny, toutes générations et raretés confondues.",
  },
  // The official in-game French abbreviations, matching the full type names
  // verified via PokeAPI's type.names (Feu, Eau, Électrik, Plante, Combat,
  // Insecte, Roche, Spectre, Ténèbres, Acier...).
  typeAbbreviations: {
    normal: "NOR",
    fire: "FEU",
    water: "EAU",
    electric: "ELE",
    grass: "PLA",
    ice: "GLA",
    fighting: "COM",
    poison: "POI",
    ground: "SOL",
    flying: "VOL",
    psychic: "PSY",
    bug: "INS",
    rock: "ROC",
    ghost: "SPE",
    dragon: "DRA",
    dark: "TEN",
    steel: "ACI",
  },

  hatchMessage: (name, cry, dropNote) =>
    `${name} est sorti de la Poké Ball ! ${cry}${dropNote}`,
  hatchMessageShiny: (name, cry, dropNote) =>
    `✨ Un ${name} shiny est sorti de la Poké Ball ! ${cry}${dropNote}`,
  itemDroppedNote: (itemNames) =>
    itemNames.length
      ? " 🎁 " + itemNames.map((name) => `${name} obtenu !`).join(" ")
      : "",
  evolveMessage: (name, cry) => `${name} a évolué ! ${cry}`,
  evolveMessageShiny: (name, cry) => `✨ Ton ${name} shiny a évolué ! ${cry}`,
  badgeEarned: (badgeName) => `🏅 Tu as obtenu le badge ${badgeName} !`,
  retroactiveBadgeEarned: (badgeNames, plural) =>
    `🏅 Ta progression t'a déjà valu ${plural ? "ces badges" : "ce badge"} : ${badgeNames} !`,

  couldNotBringOut: (pokemonType) =>
    `Impossible de faire sortir ${pokemonType}.`,
  pokedexSnapshotMessage: (name) => `${name} est affiché ici au maximum.`,
  pokedexSnapshotCatchAgain:
    " Capture-le à nouveau pour continuer à élever cette lignée.",
  pokedexSnapshotCatchShiny:
    " Capture-le en shiny pour continuer à élever cette lignée.",

  catchNewPokemonConfirm:
    "Capturer un nouveau Pokémon ? Celui que tu as actuellement sera mis de côté - sa progression est sauvegardée et tu peux le ressortir depuis le Pokechidex.",
  catchNewPokemonButton: "Capturer un Nouveau Pokémon",
  yourPokemonTitle: "Ton Pokémon",

  useRareCandyConfirm: (pokemonName, itemName) =>
    `Utiliser un ${itemName} pour faire évoluer ${pokemonName} instantanément ? Cela consomme un ${itemName}.`,
  useItemButton: (itemName) => `Utiliser ${itemName}`,
  rareCandyEvolvedMessage: (previousName, newName, cry) =>
    `${previousName} a évolué en ${newName} ! ${cry}`,
  rareCandyEvolvedMessageShiny: (previousName, newName, cry) =>
    `✨ Ton ${previousName} shiny a évolué en ${newName} ! ${cry}`,

  useMasterBallConfirm: (itemName) =>
    `Utiliser une ${itemName} ? Elle révélera un Pokémon sous-légendaire, légendaire ou mythique aléatoire, toutes générations confondues. Cela consomme une ${itemName}.`,
  masterBallUsedMessage: (itemName) =>
    ` Tu as utilisé une ${itemName} ! Continue à coder pour le faire éclore.`,
  masterBallRevealedMessage: (itemName, pokemonName) =>
    `🎉 Ta ${itemName} a révélé ${pokemonName} !`,
  masterBallRevealedMessageShiny: (itemName, pokemonName) =>
    `🎉✨ Ta ${itemName} a révélé un ${pokemonName} shiny !`,

  usePremierBallConfirm: (itemName) =>
    `Utiliser une ${itemName} ? Elle révélera un Pokémon aléatoire en shiny, toutes générations et raretés confondues. Cela consomme une ${itemName}.`,
  premierBallUsedMessage: (itemName) =>
    ` Tu as utilisé une ${itemName} ! Continue à coder pour le faire éclore.`,
  premierBallRevealedMessage: (itemName, pokemonName) =>
    `🎉✨ Ta ${itemName} a révélé un ${pokemonName} shiny !`,

  explorerModeChanged:
    "Le mode de Pokechi est passé en explorateur. Cherche Pokechi dans la vue Explorateur !",
  explorerModeShowButton: "Afficher l'Explorateur",

  pokechidexTitle: "Pokechidex",
  pokechidexSubtitle:
    "Espèces que tu as rencontrées via une Poké Ball ou une évolution. Choisis-en une pour la faire sortir — chaque lignée garde son propre XP, donc rien n'est perdu en changeant. En choisir une joue son cri, que tu peux désactiver avec l'option <code>pokechi.playCrySounds</code>. Ouvre le Sac ci-dessous pour voir tes objets et tes badges.",
  pokedexPanelTitle: (discoveredCount, totalCount) =>
    `Pokechidex (${discoveredCount}/${totalCount})`,

  counterDiscovered: "Découverts",
  counterShiny: "Shiny",
  counterBadges: "Badges",
  counterTotalXP: "XP Total",
  candyCounterNoneYet: (itemName) =>
    `Pas encore de ${itemName} - faire éclore une Poké Ball a une petite chance d'en donner un`,
  candyCounterNotUsableNow: (itemName) =>
    `Ton pokémon actuel ne peut pas utiliser de ${itemName} pour le moment`,

  bagLabel: "Sac",
  bagTabItems: "Objets",
  bagTabBadges: "Badges",
  itemUseButton: "Utiliser",
  badgeStatusObtained: "Obtenu",
  badgeStatusLocked: "Verrouillé",
  badgeGenerationLabel: (generation) => `Gén ${generation}`,

  requirementSpeciesDiscovered: "Espèces découvertes",
  requirementShinyDiscovered: "Shiny découverts",
  requirementFossilsDiscovered: "Fossiles découverts",
  requirementSubLegendariesDiscovered: "Sous-légendaires découverts",
  requirementLegendariesDiscovered: "Légendaires découverts",
  requirementMythicalsDiscovered: "Mythiques découverts",
  requirementRareCandiesUsed: "Super Bonbons utilisés",

  searchPlaceholder: "Rechercher par nom ou numéro",
  searchAriaLabel: "Rechercher dans le Pokechidex",
  filtersAriaLabel: "Filtres du Pokédex",
  filterAll: "Tous",
  typeFilterLabel: "Type",
  typeFilterAriaLabel: "Filtrer par type",
  typeFilterClear: "Effacer",
  filterDiscoveredOnly: "Découverts uniquement",
  filterShinyUnlocked: "Shiny débloqué",
  emptyState: "Rien ne correspond à cette recherche.",
  gridAriaLabel: "Grille du Pokechidex",

  cardShowLabel: (name) => `Afficher ${name}`,
  cardShowLabelActive: (name) => `Afficher ${name}, actuellement actif`,
  cardUndiscoveredLabel: "Pokémon non découvert",
  toggleShinyLabel: (name) => `Basculer le sprite shiny de ${name}`,
  toggleShinyTitle: "Basculer le sprite shiny",
  playCryLabel: (name) => `Jouer le cri de ${name}`,
  playCryTitle: "Jouer le cri",
  showInfoLabel: (name) => `Afficher les infos de ${name}`,
  showMovesLabel: (name) => `Afficher les capacités de ${name}`,
  infoTitle: "Infos",
  movesTitle: "Capacités",
  activeBadge: "Actif",
};
