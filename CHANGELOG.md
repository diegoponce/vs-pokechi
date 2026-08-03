# Change Log

All notable changes to the Pokechi extension are documented here.

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
