// Runs the compiled extension state against a stubbed VS Code API, so the
// evolution and roster rules can be checked without launching an editor.
// Run with: npm test
const Module = require('module')
const path = require('path')
const fs = require('fs')
const os = require('os')
const assert = require('assert')

const OUT = path.join(__dirname, '..', 'out')
const storageDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pokechi-test-'))

const watchers = []

const vscodeStub = {
  Uri: {
    file: (fsPath) => ({ fsPath }),
    joinPath: (base, ...parts) => ({ fsPath: path.join(base.fsPath, ...parts) }),
  },
  RelativePattern: class {
    constructor(base, pattern) {
      this.base = base
      this.pattern = pattern
    }
  },
  workspace: {
    getConfiguration: () => ({ get: (_key, fallback) => fallback }),
    createFileSystemWatcher: () => {
      const watcher = {
        handlers: [],
        onDidChange(handler) {
          watcher.handlers.push(handler)
        },
        onDidCreate(handler) {
          watcher.handlers.push(handler)
        },
        dispose() {},
      }
      watchers.push(watcher)
      return watcher
    },
  },
}

const originalLoad = Module._load
Module._load = function (request) {
  if (request === 'vscode') {
    return vscodeStub
  }
  return originalLoad.apply(this, arguments)
}

const { PokemonState } = require(path.join(OUT, 'extension/pokemon-state.js'))
const { mergeStates } = require(path.join(OUT, 'extension/state-store.js'))

function makeContext(dir) {
  const memory = new Map()
  return {
    subscriptions: [],
    globalStorageUri: { fsPath: dir },
    globalState: {
      get: (key) => memory.get(key),
      update: (key, value) => {
        memory.set(key, value)
        return Promise.resolve()
      },
    },
  }
}

const context = makeContext(storageDir)
PokemonState.initialize(context, () => {})

let passed = 0
let failed = 0

function test(name, fn) {
  try {
    fn()
    passed++
    console.log(`  ok  ${name}`)
  } catch (error) {
    failed++
    console.log(`  FAIL  ${name}`)
    console.log(`        ${error.message}`)
  }
}

// --- evolution and roster ---------------------------------------------------
console.log('\nevolution and roster')

const pokemon = PokemonState.createNewPokemon(context)
Object.assign(pokemon, {
  type: 'charmander',
  name: 'Charmander',
  id: 4,
  evolutionLine: ['charmander', 'charmeleon', 'charizard'],
})

test('a new pokemon starts as a pokeball at level 0', () => {
  assert.strictEqual(pokemon.level, 0)
  assert.strictEqual(pokemon.state, 'pokeball')
})

// Thresholds are read rather than hardcoded, so tuning the XP curve does not
// break these tests over a rule that still holds.
test('it does not hatch before reaching the required XP', () => {
  PokemonState.addXP(pokemon, PokemonState.getRequiredXP(pokemon) - 1)
  assert.strictEqual(PokemonState.canEvolve(pokemon), false)
})

test('it hatches once the XP is there', () => {
  PokemonState.addXP(pokemon, 1)
  assert.strictEqual(PokemonState.evolvePokemon(context, pokemon), true)
  assert.strictEqual(pokemon.level, 1)
  assert.strictEqual(pokemon.name, 'Charmander')
})

test('hatching records the species in the pokedex', () => {
  assert.strictEqual(PokemonState.isPokemonDiscovered(context, 'charmander'), true)
})

test('evolving moves to the next stage and resets XP', () => {
  PokemonState.addXP(pokemon, PokemonState.getRequiredXP(pokemon))
  assert.strictEqual(PokemonState.evolvePokemon(context, pokemon), true)
  assert.strictEqual(pokemon.type, 'charmeleon')
  assert.strictEqual(pokemon.level, 2)
  assert.strictEqual(pokemon.xp, 0)
})

// --- switching species ------------------------------------------------------
console.log('\nswitching species')

PokemonState.addXP(pokemon, 777)
PokemonState.savePokemon(context)

test('picking another species starts it at zero XP', () => {
  PokemonState.discoverPokemon(context, 'pikachu')
  const pikachu = PokemonState.selectPokemonFromPokedex(context, 'pikachu')
  assert.strictEqual(pikachu.type, 'pikachu')
  assert.strictEqual(pikachu.xp, 0)
})

test('coming back to a line restores its XP', () => {
  const back = PokemonState.selectPokemonFromPokedex(context, 'charmander')
  assert.strictEqual(back.xp, 777)
  assert.strictEqual(back.level, 2)
})

test('it comes back at the stage it had reached, not the one clicked', () => {
  const back = PokemonState.selectPokemonFromPokedex(context, 'charmander')
  assert.strictEqual(back.type, 'charmeleon')
})

// --- species that never evolve ----------------------------------------------
console.log('\nspecies that never evolve')

test('a single stage species reports no further evolution', () => {
  PokemonState.discoverPokemon(context, 'tauros')
  const tauros = PokemonState.selectPokemonFromPokedex(context, 'tauros')
  assert.strictEqual(PokemonState.hasFurtherEvolution(tauros), false)
})

test('it never evolves no matter how much XP it gains', () => {
  const tauros = PokemonState.selectPokemonFromPokedex(context, 'tauros')
  PokemonState.addXP(tauros, 99999)
  assert.strictEqual(PokemonState.evolvePokemon(context, tauros), false)
})

test('a mid stage pokemon still has an evolution left', () => {
  const back = PokemonState.selectPokemonFromPokedex(context, 'charmander')
  assert.strictEqual(PokemonState.hasFurtherEvolution(back), true)
})

// --- persistence ------------------------------------------------------------
console.log('\npersistence')

test('state reaches disk on flush', () => {
  PokemonState.flush(context)
  const stored = JSON.parse(
    fs.readFileSync(path.join(storageDir, 'state.json'), 'utf8')
  )
  assert.deepStrictEqual(stored.roster.charmander, {
    type: 'charmeleon',
    level: 2,
    xp: 777,
  })
  assert.ok(stored.pokedex.indexOf('pikachu') >= 0)
})

// --- merging between windows ------------------------------------------------
console.log('\nmerging between windows')

test('the pokedex is a union of both windows', () => {
  const merged = mergeStates(
    { pokemon: undefined, pokedex: ['bulbasaur'], roster: {} },
    { pokemon: undefined, pokedex: ['squirtle'], roster: {} }
  )
  assert.deepStrictEqual(merged.pokedex.sort(), ['bulbasaur', 'squirtle'])
})

test('the higher XP wins for the same species', () => {
  const merged = mergeStates(
    { pokemon: { type: 'pikachu', level: 1, xp: 10 }, pokedex: [], roster: {} },
    { pokemon: { type: 'pikachu', level: 1, xp: 40 }, pokedex: [], roster: {} }
  )
  assert.strictEqual(merged.pokemon.xp, 40)
})

test('local progress is not lost to a window that is behind', () => {
  const merged = mergeStates(
    { pokemon: { type: 'pikachu', level: 1, xp: 90 }, pokedex: [], roster: {} },
    { pokemon: { type: 'pikachu', level: 1, xp: 20 }, pokedex: [], roster: {} }
  )
  assert.strictEqual(merged.pokemon.xp, 90)
})

test('a later stage beats a higher XP at an earlier stage', () => {
  const merged = mergeStates(
    { pokemon: { type: 'pikachu', level: 1, xp: 999 }, pokedex: [], roster: {} },
    { pokemon: { type: 'pikachu', level: 2, xp: 5 }, pokedex: [], roster: {} }
  )
  assert.strictEqual(merged.pokemon.level, 2)
})

test('switching species in another window is respected', () => {
  const merged = mergeStates(
    { pokemon: { type: 'pikachu', level: 1, xp: 999 }, pokedex: [], roster: {} },
    { pokemon: { type: 'eevee', level: 1, xp: 0 }, pokedex: [], roster: {} }
  )
  assert.strictEqual(merged.pokemon.type, 'eevee')
})

test('roster entries keep whichever side is further along', () => {
  const merged = mergeStates(
    {
      pokemon: undefined,
      pokedex: [],
      roster: { charmander: { type: 'charmeleon', level: 2, xp: 10 } },
    },
    {
      pokemon: undefined,
      pokedex: [],
      roster: {
        charmander: { type: 'charizard', level: 3, xp: 0 },
        pikachu: { type: 'pikachu', level: 1, xp: 5 },
      },
    }
  )
  assert.strictEqual(merged.roster.charmander.level, 3)
  assert.strictEqual(merged.roster.pikachu.xp, 5)
})

fs.rmSync(storageDir, { recursive: true, force: true })

console.log(`\n${passed} passed, ${failed} failed\n`)
process.exit(failed === 0 ? 0 : 1)
