<div align="center">

<img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/icon.png" width="120" alt="Pokechi" />

# Pokechi

**Your Pokémon lives in your editor. Write code, it grows.**

[![Installs](https://vsmarketplacebadges.dev/installs-short/d9once.pokechi.svg)](https://marketplace.visualstudio.com/items?itemName=d9once.pokechi)
[![Open VSX](https://img.shields.io/open-vsx/v/d9once/pokechi?label=open%20vsx)](https://open-vsx.org/extension/d9once/pokechi)
[![Open VSX downloads](https://img.shields.io/open-vsx/dt/d9once/pokechi?label=downloads)](https://open-vsx.org/extension/d9once/pokechi)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

<!-- Same twelve, each captioned in a different one of the 8 languages Pokechi now speaks - a small preview of the i18n feature further down. -->
<table><tr>
<td align="center"><img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/bulbasaur/default_walk_8fps.gif" width="56" /><br><sub>Bulbasaur</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/charmander/default_walk_8fps.gif" width="56" /><br><sub>Salamèche</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/squirtle/default_walk_8fps.gif" width="56" /><br><sub>꼬부기</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/pikachu/default_walk_8fps.gif" width="56" /><br><sub>皮卡丘</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen2/cyndaquil/default_walk_8fps.gif" width="56" /><br><sub>ヒノアラシ</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen2/totodile/default_walk_8fps.gif" width="56" /><br><sub>Totodile</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen3/treecko/default_walk_8fps.gif" width="56" /><br><sub>Arcko</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen3/mudkip/default_walk_8fps.gif" width="56" /><br><sub>물짱이</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/eevee/default_walk_8fps.gif" width="56" /><br><sub>伊布</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/gengar/default_walk_8fps.gif" width="56" /><br><sub>ゲンガー</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/dragonite/default_walk_8fps.gif" width="56" /><br><sub>Dragonite</sub></td>
<td align="center"><img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/snorlax/default_walk_8fps.gif" width="56" /><br><sub>Ronflex</sub></td>
</tr></table>

</div>

---

Install it and a Pokéball shows up in your editor. Keep coding and it hatches, walks around while you work, and evolves as it earns XP. Everything you meet is recorded in the **Pokechidex** — 553 species across Gen 1 to 4, shinies included.

<div align="center">
  <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/docs/panel.gif" width="800" alt="Pokechi in panel mode" />
</div>

## Features

|  | |
| --- | --- |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/charmander/default_walk_8fps.gif" width="48" /> | **It grows while you work.** 1 XP per edit, 2 per save. Enough XP and it hatches, then evolves through its line. |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/charizard/shiny_walk_8fps.gif" width="48" /> | **Shinies.** A 5% chance on every new Pokémon. The colour sticks through every evolution, and the Pokechidex counts them separately. |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen3/rayquaza/default_walk_8fps.gif" width="48" /> | **Legendaries are actually rare.** Mythical ~0.5%, legendary ~1%, sub-legendary ~2%, fossils ~5%, each on their own odds instead of the common pool. |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen2/unown_a/default_walk_8fps.gif" width="48" /> | **All 553 species**, across four generations, every Unown form included, each tagged with its classic (pre-Fairy) typing. |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen4/leafeon/default_walk_8fps.gif" width="48" /> | **Branching evolutions.** Eevee, Oddish, Tyrogue and more can grow into any of several lines. Catch a path you already have and it comes out at max, no re-grinding — a new one hatches and grows as usual. |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/eevee/default_walk_8fps.gif" width="48" /> | **Every line keeps its own XP.** Switch Pokémon from the Pokechidex whenever you like — nothing you have raised is lost. |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen4/chatot/default_walk_8fps.gif" width="48" /> | **Every species has a cry.** Click yours to hear it, or a card in the Pokechidex. Picking one from the Pokechidex plays it too — turn that off with `pokechi.playCrySounds` if you would rather it stay quiet. |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/alakazam/default_walk_8fps.gif" width="48" /> | **Every card flips over.** An info button shows its Pokédex description and base stats; an attacks button shows four representative moves, ranked so a species' real signature moves surface first. |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/objects/rare-candy.png" width="48" /> | **Rare Candy and badges.** Hatching has a small chance to drop a candy — spend it to instantly evolve your current Pokémon. 32 badges track your progress through each generation, both in the Pokechidex's new Bag section. |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/objects/master-ball.png" width="48" /> | **Master Ball and Premier Ball.** A Master Ball, also a small chance on hatch, reveals which sub-legendary, legendary or mythical you will get from any generation — Premier Ball does the same but guaranteed shiny, from any species. Either way it still opens as a fresh Pokéball you have to hatch and raise, same as any other catch. |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/pikachu/default_walk_8fps.gif" width="48" /> | **8 languages.** Set `pokechi.language` to English, Español, Português, Français, Italiano, 한국어, 中文 or 日本語. Covers every notification, the whole Pokechidex, and each species' info and attacks text — sourced from the game's own localized data, not machine-translated. Anything not yet translated for a language falls back to English. |
| <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/gen1/snorlax/default_walk_8fps.gif" width="48" /> | **Follows you between windows.** Your progress is shared, so a second window picks up where the first left off. |

## The Pokechidex

Every species you have met, in one grid. Search by name or number, filter by generation or by type, or narrow it to what you have already caught. Locked species stay hidden behind a Pokéball — the grid never gives away what you have not met yet.

<div align="center">
  <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/docs/pokechidex_1.gif" width="800" alt="The Pokechidex" />
</div>

Click any species you have discovered to bring it out. Caught it shiny? Its card gets a sparkle toggle, and it comes out in whichever colour is showing. Every card also has a play button for its cry, and picking one plays it too. Lost track of your current Pokémon in the grid? The locate button on its XP bar jumps straight to its card and highlights it.

### Info and attacks

Every discovered card flips over. An info button on one corner shows its Pokédex description and base stats; an attacks button on the other shows four representative moves — each with its type, power and a short description, pulled from the game matching its generation and ranked so a species' real signature moves come first.

<div align="center">
  <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/docs/pokechidex_info.gif" width="800" alt="Flipping a Pokechidex card to see its info and attacks" />
</div>

### The Bag

A collapsible section below the header, with two tabs. **Items** holds:

| Item | How you get it | What it does |
| --- | --- | --- |
| Rare Candy | Small chance on every hatch | Instantly evolves your current Pokémon, skipping the XP grind for that stage — only works on one that has already hatched and is not already fully evolved |
| Master Ball | Small, independent chance on every hatch | Reveals a random sub-legendary, legendary or mythical Pokémon from any generation (60/30/10 odds across the three), with the usual 5% shiny chance |
| Premier Ball | Automatically every 10th Pokéball you hatch | Reveals a random Pokémon, from any generation or rarity, guaranteed shiny |

**Badges** tracks 32 achievement medals, 8 per generation, for milestones like discovering a share of that generation's species, catching your first shiny or fossil, and meeting its rarer Pokémon — each card shows what is left to earn it, grouped into a tab per generation.

## Getting started

Install, and that is it — your first Pokémon, always one of the 12 starters, is created for you. Start typing and it hatches.

| Command | What it does |
| --- | --- |
| `Pokechi: Show Panel` | Open your Pokémon in a panel |
| `Pokechi: Show Pokechidex` | Open the Pokechidex |
| `Pokechi: New Pokemon` | Trade it in for a new random one (also a button in the Explorer view's title bar) |
| `Pokechi: Open Explorer View` | Move it into the Explorer sidebar |

### Panel or Explorer

Pokechi lives in a panel by default, or docked in the Explorer sidebar if you would rather keep it out of the way. `Pokechi: Open Explorer View` switches, or set `pokechi.position` yourself.

<div align="center">
  <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/docs/explorer_1.gif" width="260" alt="Pokechi in the Explorer sidebar" />
  <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/docs/explorer_2.gif" width="260" alt="Pokechi in the Explorer sidebar" />
  <img src="https://raw.githubusercontent.com/diegoponce/vs-pokechi/master/media/docs/explorer_3.gif" width="260" alt="Pokechi in the Explorer sidebar" />
</div>

## Settings

| Setting | Default | What it does |
| --- | --- | --- |
| `pokechi.position` | `panel` | Where your Pokémon lives: `panel` or `explorer` |
| `pokechi.scaleFactor` | `1.0` | How big it is, from `0.5` to `1.5` |
| `pokechi.playCrySounds` | `true` | Play a cry automatically when you pick a Pokémon from the Pokechidex |
| `pokechi.language` | `en` | Language for notifications and the Pokechidex: `en`, `es`, `pt`, `fr`, `it`, `ko`, `zh` or `ja` |

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
