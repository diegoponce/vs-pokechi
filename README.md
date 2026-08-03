# Pokechi

Your Pokémon in VS Code. Evolve your Pokémon by coding!

Watch them hatch from Pokéballs, walk around while you code, and evolve as they gain experience from your coding activity.

## Features

- **Random Pokémon Assignment**: Get a random Pokémon from evolution lines with 2 or 3 stages
- **XP System**: Your Pokémon gains experience as you code:
  - Writing code: 1 XP
  - Saving files: 2 XP
- **Evolution System**: Your Pokémon evolves through multiple stages as it gains XP
- **Starts as Pokéball**: Your Pokémon begins as a Pokéball and hatches when you start coding
- **XP Bar**: Always visible XP progress bar showing your progress to the next evolution
- **Panel and Explorer Modes**: Choose where to display your Pokémon companion
- **Hover Interaction**: Hover over your Pokémon to make it stop and use idle animation
- **Pokechidex**: Open a Pokédex-style view of all Pokémon you have discovered
- **Pokechidex Selection**: Click any unlocked Pokémon to show it in the active view

## Installation

Install this extension from the VS Code marketplace or build it locally.

### Local Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm run compile`
4. Press `F5` to run the extension in a new Extension Development Host window

## Getting Started

### Panel Mode (Default)

Launch VS Code Quick Open (`Ctrl` + `Shift` + `P` on Windows/Linux or `Cmd` + `Shift` + `P` on macOS), paste the following command, and press Enter:

```
Pokechi: Show Panel
```

This will show the Pokechi panel. Your Pokémon will walk around here.

### Explorer Mode

To use Explorer mode instead, run:

```
Pokechi: Open Explorer View
```

Your Pokémon will now appear in the Explorer panel. This keeps your Pokémon visible while you work.

### Spawning a New Pokémon

To spawn a new Pokémon, hit `Ctrl` + `Shift` + `P` (or `Cmd` + `Shift` + `P` on macOS), paste the following command, and press Enter:

```
Pokechi: New Pokemon
```

Your Pokémon will appear (inside a Pokéball). Start typing to hatch your Pokémon.

Your Pokémon will gain XP as you code in either mode.

### Switching Between Modes

You can switch between Panel and Explorer modes in two ways:

1. **Via Settings**:
   - Open VS Code Settings (`Ctrl` + `,` on Windows/Linux or `Cmd` + `,` on macOS)
   - Search for "pokechi.position"
   - Select either "panel" or "explorer"

2. **Via Commands**:
   - Use `Pokechi: Show Panel` to switch to Panel mode
   - Use `Pokechi: Open Explorer View` to switch to Explorer mode

## Commands

- `Pokechi: Show Panel` - Show the Pokechi panel
- `Pokechi: Show Pokechidex` - Open the Pokechidex
- `Pokechi: New Pokemon` - Spawn a new random Pokémon
- `Pokechi: Open Explorer View` - Switch to explorer view mode

## Pokechidex

The Pokechidex shows all discovered Pokémon in a compact grid. Click any unlocked Pokémon to display it in the currently active view, either the panel or the Explorer view.

## Settings

Open the setting panel with `Ctrl` + `,` on Windows/Linux or `Cmd` + `,` on macOS. In the search bar, enter "pokechi" to see all available options.

- **`pokechi.position`**: Where to show your Pokémon (panel or explorer)
- **`pokechi.scaleFactor`**: Scale factor for Pokémon size (0.5 to 1.5, default: 1.0)

## XP System

Your Pokémon gains experience points (XP) through various coding activities:

- **Writing code**: 1 XP per keystroke (throttled to prevent spam)
- **Saving files**: 2 XP per save

### Evolution Requirements

- **Level 0 (Pokéball)**: Requires 500 XP to hatch
- **Level 1 (First evolution)**: Requires 1000 XP to evolve
- **Level 2 (Second evolution)**: Requires 2000 XP to evolve
- **Higher levels**: 2000 + (level - 2) × 50 XP per level

Your Pokémon will automatically evolve when it reaches the required XP for the next level.

## Interaction

- **Hover**: Hover your mouse over the Pokémon area to make it stop walking and use the idle animation
- **Movement**: When not hovering, your Pokémon will walk back and forth automatically

## Credits

### Sprite Sources
- Pokémon Sprites: © The Pokémon Company / Nintendo / Game Freak
- The sprites are used for non-commercial, fan project purposes only
- Original sprite artwork belongs to the respective copyright holders

### Acknowledgments
- All sprites are property of their original creators
- This repository is a fan project and is not affiliated with Nintendo, The Pokémon Company, or Game Freak

This repository is inspired by and based on:
- [codachi](https://github.com/blairjordan/codachi) by [blairjordan](https://github.com/blairjordan)
- [vscode-pokemon](https://github.com/jakobhoeg/vscode-pokemon) by [jakobhoeg](https://github.com/jakobhoeg)
