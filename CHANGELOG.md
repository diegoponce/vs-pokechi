# Change Log

All notable changes to the Pokechi extension are documented here.

## [1.2.1]

### Fixed

- The panel and the Explorer view no longer reset themselves every couple of seconds when more than one VS Code window is open. An update from another window rebuilt the whole webview, which restarted the walk from the left edge and replayed the XP bar from empty; it is pushed as a message now.
- Two windows running different versions of the extension no longer overwrite each other in a loop. Reading the shared state kept only the fields the running version knew about, so an older build stripped anything newer and the newer one restored it, forever. Unknown fields are now preserved as they are found.

## [1.2.0]

### Added

- **Shiny Pokémon**: every species can hatch shiny, at a 5% chance. The colour sticks through evolution, and the Pokechidex counts your shinies separately. Cards for a species you have caught shiny get a sparkle toggle to switch the preview, and bring it out in whichever colour is showing.
- **Unown**: all 28 forms (A-Z, `!` and `?`), which were missing from the dex entirely. The Pokechidex now covers 416 species.
- **Rarity tiers**: 24 legendary-class species are pulled out of the ordinary pool and given their own much longer odds — mythical ~0.5%, legendary ~1%, sub-legendary ~2%. Their Pokechidex cards get a rarity-coloured border, never shown while locked so it cannot give away how rare something you have not met is.
- **Elemental types**: every species is tagged with its real typing as of Generation III, so no Fairy — Clefairy, Marill and Togepi keep their original types. Coloured type badges show on discovered cards and next to your Pokémon's name.
- **Lifetime XP counter** in the Pokechidex header, alongside the discovered and shiny counts.

### Changed

- Picking a Pokémon in the Pokechidex now brings out **exactly the stage you clicked**. If it is not the stage that line has reached, it comes out as a read-only snapshot: it will not gain XP and it does not touch the progress you have already made on that line, so you can keep a Charmander on screen without losing your Charizard.

### Fixed

- Inline `style` attributes were being dropped by the webview content security policy, which a nonce does not cover, so your Pokémon's name rendered unstyled. All of them are real CSS rules now.
- The build output is cleared before compiling. `tsc` never cleaned it, so files left over from older versions of the source were being shipped inside the package.

## [1.1.0]

### Added

- **Pokechidex**: a Pokédex-style grid of every Gen 1-3 species, opened with `Pokechi: Show Pokechidex`. Species you have not met stay hidden behind a Pokéball, and one is discovered when it hatches or when a Pokémon evolves into it.
- Pick any discovered Pokémon from the Pokechidex to bring it out. Every evolution line keeps its own XP, so switching lines and coming back loses nothing.
- Search and generation filter in the Pokechidex.
- `MAX` state on the XP bar once a Pokémon reaches the final stage of its line.
- Every Gen 1-3 species can now be obtained. The 128 species that belong to no evolution line hatch directly from a Pokéball.

### Fixed

- Your first Pokémon is created when the extension activates. Until now a fresh install showed a placeholder and ignored XP until you ran `Pokechi: New Pokemon` by hand ([#2](https://github.com/diegoponce/vs-pokechi/issues/2)).
- Progress is shared between VS Code windows instead of each window keeping its own copy and the last one to save overwriting the rest ([#1](https://github.com/diegoponce/vs-pokechi/issues/1)).
- `pokechi.scaleFactor` now applies in Explorer mode. It only ever reached the panel.
- XP is only granted for edits to real files. Output channels, logs and diff views no longer count.
- Progress is written to disk on a timer rather than on every keystroke.
- `corphish` was misspelled in the species data, so it came out with no sprite and a lowercase name.
- The extension no longer activates on every VS Code startup regardless of use.

## [1.0.1]

- Initial release.
