// Phase 1: the native VS Code notification/confirmation popups (extension.ts,
// xp-tracker.ts) - not yet the Pokechidex webview's own UI (its header,
// counters, toolbar, tooltips, card labels), which is its own follow-up
// given how much of it there is, and not yet per-species names/descriptions/
// moves, a separate PokeAPI re-extraction per language.
//
// Every language dictionary (i18n/*.ts) has to fill this in completely -
// adding a key here without adding it to every dictionary is a type error,
// which is what keeps a language from silently falling back to English one
// string at a time as this grows.
export interface Strings {
  // Item id (src/common/items.ts) -> its display name in this language.
  // Translated here rather than in that registry, which stays the single
  // English/canonical source for ids and sprite paths - what to call an
  // item in a sentence is a UI-facing concern like everything else in this
  // dictionary. A new item only needs an entry here, same as it only needs
  // one in ITEMS - nothing else in this file has to change shape for it.
  itemNames: { [itemId: string]: string }
  // Same idea as itemNames, for the sentence shown as an item card's
  // description / a usable candy counter's tooltip.
  itemDescriptions: { [itemId: string]: string }
  // Elemental type -> its 3-letter badge abbreviation in this language
  // (PokemonElementType, src/common/types.ts). Colors stay the same
  // regardless of language - see getLocalizedTypeBadges in type-badges.ts.
  typeAbbreviations: { [type: string]: string }

  hatchMessage: (name: string, cry: string, dropNote: string) => string
  hatchMessageShiny: (name: string, cry: string, dropNote: string) => string
  itemDroppedNote: (itemNames: string[]) => string
  evolveMessage: (name: string, cry: string) => string
  evolveMessageShiny: (name: string, cry: string) => string
  badgeEarned: (badgeName: string) => string
  retroactiveBadgeEarned: (badgeNames: string, plural: boolean) => string

  couldNotBringOut: (pokemonType: string) => string
  pokedexSnapshotMessage: (name: string) => string
  pokedexSnapshotCatchAgain: string
  pokedexSnapshotCatchShiny: string

  catchNewPokemonConfirm: string
  catchNewPokemonButton: string
  yourPokemonTitle: string

  useRareCandyConfirm: (pokemonName: string, itemName: string) => string
  useItemButton: (itemName: string) => string
  rareCandyEvolvedMessage: (previousName: string, newName: string, cry: string) => string
  rareCandyEvolvedMessageShiny: (previousName: string, newName: string, cry: string) => string

  useMasterBallConfirm: (itemName: string) => string
  masterBallRevealedMessage: (itemName: string, pokemonName: string) => string
  masterBallRevealedMessageShiny: (itemName: string, pokemonName: string) => string

  usePremierBallConfirm: (itemName: string) => string
  premierBallRevealedMessage: (itemName: string, pokemonName: string) => string

  explorerModeChanged: string
  explorerModeShowButton: string

  // --- Pokechidex webview -------------------------------------------------
  pokechidexTitle: string
  pokechidexSubtitle: string
  pokedexPanelTitle: (discoveredCount: number, totalCount: number) => string

  counterDiscovered: string
  counterShiny: string
  counterBadges: string
  counterTotalXP: string
  candyCounterNoneYet: (itemName: string) => string
  candyCounterNotUsableNow: (itemName: string) => string

  bagLabel: string
  bagTabItems: string
  bagTabBadges: string
  itemUseButton: string
  badgeStatusObtained: string
  badgeStatusLocked: string
  badgeGenerationLabel: (generation: number) => string

  requirementSpeciesDiscovered: string
  requirementShinyDiscovered: string
  requirementFossilsDiscovered: string
  requirementSubLegendariesDiscovered: string
  requirementLegendariesDiscovered: string
  requirementMythicalsDiscovered: string
  requirementRareCandiesUsed: string

  searchPlaceholder: string
  searchAriaLabel: string
  filtersAriaLabel: string
  filterAll: string
  typeFilterLabel: string
  typeFilterAriaLabel: string
  typeFilterClear: string
  filterDiscoveredOnly: string
  filterShinyUnlocked: string
  emptyState: string
  gridAriaLabel: string

  cardShowLabel: (name: string) => string
  cardShowLabelActive: (name: string) => string
  cardUndiscoveredLabel: string
  toggleShinyLabel: (name: string) => string
  toggleShinyTitle: string
  playCryLabel: (name: string) => string
  playCryTitle: string
  showInfoLabel: (name: string) => string
  showMovesLabel: (name: string) => string
  infoTitle: string
  movesTitle: string
  activeBadge: string
}
