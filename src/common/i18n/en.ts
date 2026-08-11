import { Strings } from "./strings";

export const en: Strings = {
  itemNames: {
    "rare-candy": "Rare Candy",
    "master-ball": "Master Ball",
    "premier-ball": "Premier Ball",
  },
  itemDescriptions: {
    "rare-candy":
      "Instantly evolves your current pokemon, as long as it is not already fully evolved.",
    "master-ball":
      "Reveals a random sub-legendary, legendary or mythical Pokémon from any generation.",
    "premier-ball":
      "Reveals a random Pokémon as shiny, from any generation or rarity.",
  },
  typeAbbreviations: {
    normal: "NOR",
    fire: "FIR",
    water: "WAT",
    electric: "ELE",
    grass: "GRA",
    ice: "ICE",
    fighting: "FIG",
    poison: "POI",
    ground: "GRD",
    flying: "FLY",
    psychic: "PSY",
    bug: "BUG",
    rock: "ROC",
    ghost: "GHO",
    dragon: "DRA",
    dark: "DAK",
    steel: "STE",
  },

  hatchMessage: (name, cry, dropNote) =>
    `${name} hatched from the Pokéball! ${cry}${dropNote}`,
  hatchMessageShiny: (name, cry, dropNote) =>
    `✨ A shiny ${name} hatched from the Pokéball! ${cry}${dropNote}`,
  itemDroppedNote: (itemNames) =>
    itemNames.length
      ? " 🎁 " + itemNames.map((name) => `${name} dropped!`).join(" ")
      : "",
  evolveMessage: (name, cry) => `${name} evolved! ${cry}`,
  evolveMessageShiny: (name, cry) => `✨ Your shiny ${name} evolved! ${cry}`,
  badgeEarned: (badgeName) => `🏅 ${badgeName} earned!`,
  retroactiveBadgeEarned: (badgeNames, plural) =>
    `🏅 Your existing progress already earned you ${plural ? "badges" : "a badge"}: ${badgeNames}!`,

  couldNotBringOut: (pokemonType) => `Could not bring out ${pokemonType}.`,
  pokedexSnapshotMessage: (name) => `${name} is shown at max here.`,
  pokedexSnapshotCatchAgain: " Catch it again to keep raising that line.",
  pokedexSnapshotCatchShiny: " Catch it shiny to keep raising that line.",

  catchNewPokemonConfirm:
    "Catch a new Pokemon? The one currently out will be tucked away - its progress is saved and you can bring it back from the Pokechidex.",
  catchNewPokemonButton: "Catch a New Pokemon",
  yourPokemonTitle: "Your Pokemon",

  useRareCandyConfirm: (pokemonName, itemName) =>
    `Use a ${itemName} to instantly evolve ${pokemonName}? This uses up one ${itemName}.`,
  useItemButton: (itemName) => `Use ${itemName}`,
  rareCandyEvolvedMessage: (previousName, newName, cry) =>
    `${previousName} evolved into ${newName}! ${cry}`,
  rareCandyEvolvedMessageShiny: (previousName, newName, cry) =>
    `✨ Your shiny ${previousName} evolved into ${newName}! ${cry}`,

  useMasterBallConfirm: (itemName) =>
    `Use a ${itemName}? It will reveal a random sub-legendary, legendary or mythical Pokémon from any generation. This uses up one ${itemName}.`,
  masterBallUsedMessage: (itemName) =>
    ` You used a ${itemName}! Keep working to hatch what's inside.`,
  masterBallRevealedMessage: (itemName, pokemonName) =>
    `🎉 Your ${itemName} revealed ${pokemonName}!`,
  masterBallRevealedMessageShiny: (itemName, pokemonName) =>
    `🎉✨ Your ${itemName} revealed a shiny ${pokemonName}!`,

  usePremierBallConfirm: (itemName) =>
    `Use a ${itemName}? It will reveal a random Pokémon as shiny, from any generation or rarity. This uses up one ${itemName}.`,
  premierBallUsedMessage: (itemName) =>
    ` You used a ${itemName}! Keep working to hatch what's inside.`,
  premierBallRevealedMessage: (itemName, pokemonName) =>
    `🎉✨ Your ${itemName} revealed a shiny ${pokemonName}!`,

  explorerModeChanged:
    "Pokechi mode changed to explorer. Look for Pokechi in the Explorer view!",
  explorerModeShowButton: "Show Explorer",

  pokechidexTitle: "Pokechidex",
  pokechidexSubtitle:
    "Species you have met from a Pokéball or an evolution. Pick one to bring it out — each line keeps its own XP, so nothing is lost when you switch. Picking one plays its cry, which you can turn off with the <code>pokechi.playCrySounds</code> setting. Open the Bag below to track your items and badges.",
  pokedexPanelTitle: (discoveredCount, totalCount) =>
    `Pokechidex (${discoveredCount}/${totalCount})`,

  counterDiscovered: "Discovered",
  counterShiny: "Shiny",
  counterBadges: "Badges",
  counterTotalXP: "Total XP",
  candyCounterNoneYet: (itemName) =>
    `No ${itemName} yet - hatching a Pokeball has a small chance to drop one`,
  candyCounterNotUsableNow: (itemName) =>
    `Your current pokemon cannot use a ${itemName} right now`,

  bagLabel: "Bag",
  bagTabItems: "Items",
  bagTabBadges: "Badges",
  itemUseButton: "Use",
  badgeStatusObtained: "Obtained",
  badgeStatusLocked: "Locked",
  badgeGenerationLabel: (generation) => `Gen ${generation}`,

  requirementSpeciesDiscovered: "Species discovered",
  requirementShinyDiscovered: "Shiny discovered",
  requirementFossilsDiscovered: "Fossils discovered",
  requirementSubLegendariesDiscovered: "Sub-legendaries discovered",
  requirementLegendariesDiscovered: "Legendaries discovered",
  requirementMythicalsDiscovered: "Mythicals discovered",
  requirementRareCandiesUsed: "Rare Candies used",

  searchPlaceholder: "Search by name or number",
  searchAriaLabel: "Search the Pokechidex",
  filtersAriaLabel: "Pokedex filters",
  filterAll: "All",
  typeFilterLabel: "Type",
  typeFilterAriaLabel: "Filter by type",
  typeFilterClear: "Clear",
  filterDiscoveredOnly: "Discovered only",
  filterShinyUnlocked: "Shiny unlocked",
  emptyState: "Nothing matches that search.",
  gridAriaLabel: "Pokechidex grid",

  cardShowLabel: (name) => `Show ${name}`,
  cardShowLabelActive: (name) => `Show ${name}, currently active`,
  cardUndiscoveredLabel: "Undiscovered pokemon",
  toggleShinyLabel: (name) => `Toggle shiny sprite for ${name}`,
  toggleShinyTitle: "Toggle shiny sprite",
  playCryLabel: (name) => `Play ${name}'s cry`,
  playCryTitle: "Play cry",
  showInfoLabel: (name) => `Show info for ${name}`,
  showMovesLabel: (name) => `Show moves for ${name}`,
  infoTitle: "Info",
  movesTitle: "Moves",
  activeBadge: "Active",
};
