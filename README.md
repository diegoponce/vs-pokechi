<div align="center">

<img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/icon.png" width="120" alt="Pokechi" />

# Pokechi

**Your Pokémon lives in your editor. Write code, it grows.**

[![Installs](https://vsmarketplacebadges.dev/installs-short/d9once.pokechi.svg)](https://marketplace.visualstudio.com/items?itemName=d9once.pokechi)
[![Open VSX](https://img.shields.io/open-vsx/v/d9once/pokechi?label=open%20vsx)](https://open-vsx.org/extension/d9once/pokechi)
[![Open VSX downloads](https://img.shields.io/open-vsx/dt/d9once/pokechi?label=downloads)](https://open-vsx.org/extension/d9once/pokechi)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

<img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/bulbasaur/default_walk_8fps.gif" width="56" />
<img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/charmander/default_walk_8fps.gif" width="56" />
<img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/squirtle/default_walk_8fps.gif" width="56" />
<img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/pikachu/default_walk_8fps.gif" width="56" />
<img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen2/cyndaquil/default_walk_8fps.gif" width="56" />
<img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen2/totodile/default_walk_8fps.gif" width="56" />
<img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen3/treecko/default_walk_8fps.gif" width="56" />
<img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen3/mudkip/default_walk_8fps.gif" width="56" />
<img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/eevee/default_walk_8fps.gif" width="56" />
<img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/gengar/default_walk_8fps.gif" width="56" />
<img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/dragonite/default_walk_8fps.gif" width="56" />
<img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/snorlax/default_walk_8fps.gif" width="56" />

</div>

---

Install it and a Pokéball shows up in your editor. Keep coding and it hatches, walks around while you work, and evolves as it earns XP. Everything you meet is recorded in the **Pokechidex** — 416 species across Gen 1 to 3, shinies included.

<div align="center">
  <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/docs/panel.gif" width="800" alt="Pokechi in panel mode" />
</div>

## Features

|  | |
| --- | --- |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/charmander/default_walk_8fps.gif" width="48" /> | **It grows while you work.** 1 XP per edit, 2 per save. Enough XP and it hatches, then evolves through its line. |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/charizard/shiny_walk_8fps.gif" width="48" /> | **Shinies.** A 5% chance on every new Pokémon. The colour sticks through every evolution, and the Pokechidex counts them separately. |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen3/rayquaza/default_walk_8fps.gif" width="48" /> | **Legendaries are actually rare.** Mythical ~0.5%, legendary ~1%, sub-legendary ~2%, on their own odds instead of the common pool. |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen2/unown_a/default_walk_8fps.gif" width="48" /> | **All 416 species**, every Unown form included, each tagged with its real Generation III typing. |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/eevee/default_walk_8fps.gif" width="48" /> | **Every line keeps its own XP.** Switch Pokémon from the Pokechidex whenever you like — nothing you have raised is lost. |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/snorlax/default_walk_8fps.gif" width="48" /> | **Follows you between windows.** Your progress is shared, so a second window picks up where the first left off. |

## The Pokechidex

Every species you have met, in one grid. Search by name or number, filter by generation, or narrow it to what you have already caught. Locked species stay hidden behind a Pokéball — the grid never gives away what you have not met yet.

<div align="center">
  <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/docs/pokechidex.png" width="800" alt="The Pokechidex" />
</div>

Click any species you have discovered to bring it out. Caught it shiny? Its card gets a sparkle toggle, and it comes out in whichever colour is showing.

## Getting started

Install, and that is it — your first Pokémon is created for you. Start typing and it hatches.

| Command | What it does |
| --- | --- |
| `Pokechi: Show Panel` | Open your Pokémon in a panel |
| `Pokechi: Show Pokechidex` | Open the Pokechidex |
| `Pokechi: New Pokemon` | Trade it in for a new random one |
| `Pokechi: Open Explorer View` | Move it into the Explorer sidebar |

### Panel or Explorer

Pokechi lives in a panel by default, or docked in the Explorer sidebar if you would rather keep it out of the way. `Pokechi: Open Explorer View` switches, or set `pokechi.position` yourself.

<div align="center">
  <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/docs/explorer.png" width="420" alt="Pokechi in the Explorer sidebar" />
</div>

## Settings

| Setting | Default | What it does |
| --- | --- | --- |
| `pokechi.position` | `panel` | Where your Pokémon lives: `panel` or `explorer` |
| `pokechi.scaleFactor` | `1.0` | How big it is, from `0.5` to `1.5` |

## How XP works

| Action | XP |
| --- | --- |
| Editing a file | 1 |
| Saving a file | 2 |

Only real files count — output channels, logs and diff views do not feed your Pokémon.

| Stage | XP to advance |
| --- | --- |
| Pokéball | 500 to hatch |
| First stage | 1000 to evolve |
| Second stage | 2000 to evolve |

Species that do not evolve show `MAX` on the bar instead of a target they can never reach.

## Building it yourself

```bash
git clone https://github.com/diegoponce/vs-pokechi
cd vs-pokechi
npm install
npm run compile
```

Press `F5` to launch it in an Extension Development Host. `npm test` runs the state tests, `npm run package` builds a `.vsix`.

## Credits

Pokémon sprites are © The Pokémon Company / Nintendo / Game Freak, used here for a non-commercial fan project. This extension is not affiliated with Nintendo, The Pokémon Company or Game Freak, and all sprite artwork belongs to its original creators.

Built on top of:

- [codachi](https://github.com/blairjordan/codachi) by [blairjordan](https://github.com/blairjordan), MIT licensed. Pokechi is a derivative work of Codachi and retains its copyright notice, as the MIT License requires. See [LICENSE](LICENSE).
- [vscode-pokemon](https://github.com/jakobhoeg/vscode-pokemon) by [jakobhoeg](https://github.com/jakobhoeg)

The Pokechidex, and the shiny, rarity and typing systems, were contributed by [@ApuTHC](https://github.com/ApuTHC).
