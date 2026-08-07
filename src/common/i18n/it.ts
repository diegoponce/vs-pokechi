import { Strings } from './strings'

// Item and type names are the official Italian localization used in the
// games themselves (verified via PokeAPI's item.names/type.names) - Master
// Ball and Premier Ball both keep their English names here, unlike Spanish
// and French's "Honor Ball", and Rare Candy is "Caramella rara".
export const it: Strings = {
  itemNames: {
    'rare-candy': 'Caramella rara',
    'master-ball': 'Master Ball',
    'premier-ball': 'Premier Ball',
  },
  itemDescriptions: {
    'rare-candy': 'Fa evolvere istantaneamente il tuo pokémon attuale, purché non sia già completamente evoluto.',
    'master-ball': 'Rivela un Pokémon sub-leggendario, leggendario o mitico casuale di qualsiasi generazione.',
    'premier-ball': 'Rivela un Pokémon casuale come shiny, di qualsiasi generazione o rarità.',
  },
  // The official in-game Italian abbreviations, matching the full type
  // names verified via PokeAPI's type.names (Fuoco, Acqua, Elettro, Erba,
  // Lotta, Coleottero, Roccia, Spettro, Acciaio...).
  typeAbbreviations: {
    normal: 'NOR',
    fire: 'FUO',
    water: 'ACQ',
    electric: 'ELE',
    grass: 'ERB',
    ice: 'GHI',
    fighting: 'LOT',
    poison: 'VEL',
    ground: 'TER',
    flying: 'VOL',
    psychic: 'PSI',
    bug: 'COL',
    rock: 'ROC',
    ghost: 'SPE',
    dragon: 'DRA',
    dark: 'BUI',
    steel: 'ACC',
  },

  hatchMessage: (name, cry, dropNote) => `${name} è uscito dalla Poké Ball! ${cry}${dropNote}`,
  hatchMessageShiny: (name, cry, dropNote) =>
    `✨ Un ${name} shiny è uscito dalla Poké Ball! ${cry}${dropNote}`,
  itemDroppedNote: (itemNames) =>
    itemNames.length
      ? ' 🎁 ' + itemNames.map((name) => `Hai ottenuto ${name}!`).join(' ')
      : '',
  evolveMessage: (name, cry) => `${name} si è evoluto! ${cry}`,
  evolveMessageShiny: (name, cry) => `✨ Il tuo ${name} shiny si è evoluto! ${cry}`,
  badgeEarned: (badgeName) => `🏅 Hai ottenuto il badge ${badgeName}!`,
  retroactiveBadgeEarned: (badgeNames, plural) =>
    `🏅 I tuoi progressi ti hanno già fatto guadagnare ${plural ? 'questi badge' : 'questo badge'}: ${badgeNames}!`,

  couldNotBringOut: (pokemonType) => `Impossibile far uscire ${pokemonType}.`,
  pokedexSnapshotMessage: (name) => `${name} è mostrato qui al massimo.`,
  pokedexSnapshotCatchAgain: ' Catturalo di nuovo per continuare a crescere questa linea.',
  pokedexSnapshotCatchShiny: ' Catturalo shiny per continuare a crescere questa linea.',

  catchNewPokemonConfirm:
    'Catturare un nuovo Pokémon? Quello che hai attualmente verrà messo da parte - i suoi progressi vengono salvati e puoi farlo uscire di nuovo dal Pokechidex.',
  catchNewPokemonButton: 'Cattura un Nuovo Pokémon',
  yourPokemonTitle: 'Il Tuo Pokémon',

  useRareCandyConfirm: (pokemonName, itemName) =>
    `Usare una ${itemName} per far evolvere istantaneamente ${pokemonName}? Questo consuma una ${itemName}.`,
  useItemButton: (itemName) => `Usa ${itemName}`,
  rareCandyEvolvedMessage: (previousName, newName, cry) =>
    `${previousName} si è evoluto in ${newName}! ${cry}`,
  rareCandyEvolvedMessageShiny: (previousName, newName, cry) =>
    `✨ Il tuo ${previousName} shiny si è evoluto in ${newName}! ${cry}`,

  useMasterBallConfirm: (itemName) =>
    `Usare una ${itemName}? Rivelerà un Pokémon sub-leggendario, leggendario o mitico casuale di qualsiasi generazione. Questo consuma una ${itemName}.`,
  masterBallRevealedMessage: (itemName, pokemonName) =>
    `🎉 La tua ${itemName} ha rivelato ${pokemonName}!`,
  masterBallRevealedMessageShiny: (itemName, pokemonName) =>
    `🎉✨ La tua ${itemName} ha rivelato un ${pokemonName} shiny!`,

  usePremierBallConfirm: (itemName) =>
    `Usare una ${itemName}? Rivelerà un Pokémon casuale come shiny, di qualsiasi generazione o rarità. Questo consuma una ${itemName}.`,
  premierBallRevealedMessage: (itemName, pokemonName) =>
    `🎉✨ La tua ${itemName} ha rivelato un ${pokemonName} shiny!`,

  explorerModeChanged: 'La modalità di Pokechi è cambiata in esploratore. Cerca Pokechi nella vista Esplora!',
  explorerModeShowButton: 'Mostra Esplora',

  pokechidexTitle: 'Pokechidex',
  pokechidexSubtitle:
    "Specie che hai incontrato da una Poké Ball o da un'evoluzione. Scegline una per farla uscire — ogni linea mantiene il proprio XP, quindi non perdi nulla cambiando. Sceglierne una riproduce il suo verso, che puoi disattivare con l'opzione <code>pokechi.playCrySounds</code>. Apri la Borsa qui sotto per tenere traccia di oggetti e badge.",
  pokedexPanelTitle: (discoveredCount, totalCount) => `Pokechidex (${discoveredCount}/${totalCount})`,

  counterDiscovered: 'Scoperti',
  counterShiny: 'Shiny',
  counterBadges: 'Badge',
  counterTotalXP: 'XP Totale',
  candyCounterNoneYet: (itemName) =>
    `Non hai ancora ${itemName} - far schiudere una Poké Ball ha una piccola probabilità di darne una`,
  candyCounterNotUsableNow: (itemName) =>
    `Il tuo pokémon attuale non può usare una ${itemName} in questo momento`,

  bagLabel: 'Borsa',
  bagTabItems: 'Oggetti',
  bagTabBadges: 'Badge',
  itemUseButton: 'Usa',
  badgeStatusObtained: 'Ottenuto',
  badgeStatusLocked: 'Bloccato',
  badgeGenerationLabel: (generation) => `Gen ${generation}`,

  requirementSpeciesDiscovered: 'Specie scoperte',
  requirementShinyDiscovered: 'Shiny scoperti',
  requirementFossilsDiscovered: 'Fossili scoperti',
  requirementSubLegendariesDiscovered: 'Sub-leggendari scoperti',
  requirementLegendariesDiscovered: 'Leggendari scoperti',
  requirementMythicalsDiscovered: 'Mitici scoperti',
  requirementRareCandiesUsed: 'Caramelle rare usate',

  searchPlaceholder: 'Cerca per nome o numero',
  searchAriaLabel: 'Cerca nel Pokechidex',
  filtersAriaLabel: 'Filtri del Pokedex',
  filterAll: 'Tutti',
  typeFilterLabel: 'Tipo',
  typeFilterAriaLabel: 'Filtra per tipo',
  typeFilterClear: 'Cancella',
  filterDiscoveredOnly: 'Solo scoperti',
  filterShinyUnlocked: 'Shiny sbloccato',
  emptyState: 'Niente corrisponde a questa ricerca.',
  gridAriaLabel: 'Griglia del Pokechidex',

  cardShowLabel: (name) => `Mostra ${name}`,
  cardShowLabelActive: (name) => `Mostra ${name}, attualmente attivo`,
  cardUndiscoveredLabel: 'Pokémon non scoperto',
  toggleShinyLabel: (name) => `Alterna sprite shiny di ${name}`,
  toggleShinyTitle: 'Alterna sprite shiny',
  playCryLabel: (name) => `Riproduci il verso di ${name}`,
  playCryTitle: 'Riproduci verso',
  showInfoLabel: (name) => `Mostra info di ${name}`,
  showMovesLabel: (name) => `Mostra mosse di ${name}`,
  infoTitle: 'Info',
  movesTitle: 'Mosse',
  activeBadge: 'Attivo',
}
