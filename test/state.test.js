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
const { mergeStates, normalizeState } = require(path.join(OUT, 'extension/state-store.js'))
const {
  getEvolutionLinesForBase,
  pickEvolutionLineForBase,
  resolveEvolutionLine,
} = require(path.join(OUT, 'common/pokemon-evolutions.js'))

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
  // Fixed rather than left to the 5% shiny roll, so the roster snapshot
  // asserted later in this file is deterministic.
  color: 'default',
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

test('picking the stage a line had reached resumes its real XP', () => {
  const back = PokemonState.selectPokemonFromPokedex(context, 'charmeleon')
  assert.strictEqual(back.type, 'charmeleon')
  assert.strictEqual(back.xp, 777)
  assert.strictEqual(back.level, 2)
  assert.strictEqual(back.canGainXP, true)
})

test('picking an earlier stage of that line shows exactly that stage, at max, read-only', () => {
  const back = PokemonState.selectPokemonFromPokedex(context, 'charmander')
  assert.strictEqual(back.type, 'charmander')
  assert.strictEqual(back.level, 1)
  assert.strictEqual(back.canGainXP, false)
  assert.strictEqual(back.xp, PokemonState.getRequiredXP(back))
})

test('viewing an earlier stage does not overwrite the line real progress', () => {
  PokemonState.rememberActivePokemon(context)
  const roster = PokemonState.getRoster(context)
  assert.strictEqual(roster.charmander.type, 'charmeleon')
  assert.strictEqual(roster.charmander.xp, 777)
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

// --- shiny pokemon -----------------------------------------------------------
console.log('\nshiny pokemon')

test('a new pokemon carries a color and can gain XP', () => {
  const fresh = PokemonState.createNewPokemon(context)
  assert.ok(fresh.color === 'default' || fresh.color === 'shiny')
  assert.strictEqual(fresh.canGainXP, true)
})

test('picking a card asks for a color, honored only if that color is unlocked', () => {
  PokemonState.discoverPokemon(context, 'meowth', 'shiny')

  const shiny = PokemonState.selectPokemonFromPokedex(context, 'meowth', 'shiny')
  assert.strictEqual(shiny.color, 'shiny')

  const backToDefault = PokemonState.selectPokemonFromPokedex(context, 'meowth', 'default')
  assert.strictEqual(backToDefault.color, 'default')
})

test('requesting shiny for a species never caught shiny falls back to default', () => {
  PokemonState.discoverPokemon(context, 'rattata', 'default')
  const rattata = PokemonState.selectPokemonFromPokedex(context, 'rattata', 'shiny')
  assert.strictEqual(rattata.color, 'default')
})

test('discovering a pokemon as shiny unlocks both its default and shiny sprite', () => {
  PokemonState.discoverPokemon(context, 'eevee', 'shiny')
  assert.strictEqual(PokemonState.isPokemonDiscovered(context, 'eevee'), true)
  assert.strictEqual(PokemonState.isPokemonShinyDiscovered(context, 'eevee'), true)
})

test('discovering a pokemon as default does not unlock its shiny sprite', () => {
  PokemonState.discoverPokemon(context, 'growlithe', 'default')
  assert.strictEqual(PokemonState.isPokemonDiscovered(context, 'growlithe'), true)
  assert.strictEqual(PokemonState.isPokemonShinyDiscovered(context, 'growlithe'), false)
})

test('evolving a shiny pokemon discovers its next stage as shiny too', () => {
  const shinyVulpix = PokemonState.createNewPokemon(context)
  Object.assign(shinyVulpix, {
    type: 'vulpix',
    name: 'Vulpix',
    id: 37,
    evolutionLine: ['vulpix', 'ninetales'],
    color: 'shiny',
  })
  PokemonState.addXP(shinyVulpix, PokemonState.getRequiredXP(shinyVulpix))
  PokemonState.evolvePokemon(context, shinyVulpix)
  PokemonState.addXP(shinyVulpix, PokemonState.getRequiredXP(shinyVulpix))
  PokemonState.evolvePokemon(context, shinyVulpix)

  assert.strictEqual(shinyVulpix.type, 'ninetales')
  assert.strictEqual(PokemonState.isPokemonShinyDiscovered(context, 'ninetales'), true)
})

// --- evolution data restructuring -------------------------------------------
console.log('\nevolution data restructuring')

test('an active pokemon on a line that gained a later stage picks it up, not stuck at max', () => {
  const golbat = PokemonState.getPokemon(context)
  Object.assign(golbat, {
    type: 'golbat',
    name: 'Golbat',
    id: 42,
    level: 2,
    xp: 0,
    canGainXP: true,
    // Stale: what this pokemon's evolutionLine looked like before crobat was
    // added as a third stage. Simulates a save from before that change.
    evolutionLine: ['zubat', 'golbat'],
  })
  PokemonState.savePokemon(context)

  const refreshed = PokemonState.getPokemon(context)
  assert.deepStrictEqual(refreshed.evolutionLine, ['zubat', 'golbat', 'crobat'])
  assert.strictEqual(refreshed.level, 2)
  assert.strictEqual(PokemonState.hasFurtherEvolution(refreshed), true)
})

test('roster progress moves over when a pre-evolution becomes the line new base', () => {
  const roster = PokemonState.getRoster(context)
  // Stale: pikachu used to be the base before pichu was added ahead of it.
  delete roster.pichu
  roster.pikachu = { type: 'raichu', level: 2, xp: 500, color: 'default' }
  PokemonState.saveRoster(context)
  PokemonState.flush(context)

  const migrated = PokemonState.getRoster(context)
  assert.strictEqual(migrated.pikachu, undefined)
  assert.deepStrictEqual(migrated.pichu, {
    type: 'raichu',
    level: 3,
    xp: 500,
    color: 'default',
    evolutionLine: ['pichu', 'pikachu', 'raichu'],
  })
})

test('progress from two species that used to be independent lines keeps whichever is further along', () => {
  const roster = PokemonState.getRoster(context)
  // Stale: houndoom used to be catchable as its own single-stage line, before
  // houndour -> houndoom became one line. This one is further along.
  roster.houndour = { type: 'houndour', level: 1, xp: 100, color: 'default' }
  roster.houndoom = { type: 'houndoom', level: 1, xp: 50, color: 'default' }
  PokemonState.saveRoster(context)
  PokemonState.flush(context)

  const migrated = PokemonState.getRoster(context)
  assert.strictEqual(migrated.houndoom, undefined)
  assert.deepStrictEqual(migrated.houndour, {
    type: 'houndoom',
    level: 2,
    xp: 50,
    color: 'default',
    evolutionLine: ['houndour', 'houndoom'],
  })
})

// --- branching evolutions ----------------------------------------------
console.log('\nbranching evolutions')

test('a branching base has one line per possible path', () => {
  const lines = getEvolutionLinesForBase('eevee')
  assert.deepStrictEqual(
    lines.map(line => line.evolutions[0]).sort(),
    ['espeon', 'flareon', 'glaceon', 'jolteon', 'leafeon', 'umbreon', 'vaporeon']
  )
})

test('nincada branches into ninjask or shedinja', () => {
  const lines = getEvolutionLinesForBase('nincada')
  assert.deepStrictEqual(
    lines.map(line => line.evolutions[0]).sort(),
    ['ninjask', 'shedinja']
  )
})

test('omanyte and kabuto are two-stage lines, not standalone species', () => {
  assert.deepStrictEqual(resolveEvolutionLine(['omanyte', 'omastar']), {
    base: 'omanyte',
    evolutions: ['omastar'],
  })
  assert.deepStrictEqual(resolveEvolutionLine(['kabuto', 'kabutops']), {
    base: 'kabuto',
    evolutions: ['kabutops'],
  })
})

test('a non-branching base still has exactly one line', () => {
  assert.strictEqual(getEvolutionLinesForBase('charmander').length, 1)
})

test('picking a line for a branching base always returns a valid path', () => {
  for (let i = 0; i < 50; i++) {
    const line = pickEvolutionLineForBase('eevee')
    assert.strictEqual(line.base, 'eevee')
    assert.ok(
      ['vaporeon', 'jolteon', 'flareon', 'espeon', 'umbreon', 'leafeon', 'glaceon'].includes(
        line.evolutions[0]
      )
    )
  }
})

test('resolving a committed path finds the exact branch, not just any line sharing the base', () => {
  const jolteonLine = resolveEvolutionLine(['eevee', 'jolteon'])
  assert.deepStrictEqual(jolteonLine, { base: 'eevee', evolutions: ['jolteon'] })

  const vaporeonLine = resolveEvolutionLine(['eevee', 'vaporeon'])
  assert.deepStrictEqual(vaporeonLine, { base: 'eevee', evolutions: ['vaporeon'] })
})

test('an unrecognized path does not resolve to some other branch by accident', () => {
  assert.strictEqual(resolveEvolutionLine(['eevee', 'sylveon']), undefined)
})

test('evolving commits to the specific branch on the pokemon, not the first one found', () => {
  const jolteonEevee = PokemonState.createNewPokemon(context)
  Object.assign(jolteonEevee, {
    type: 'eevee',
    name: 'Eevee',
    id: 133,
    level: 1,
    xp: 0,
    canGainXP: true,
    evolutionLine: ['eevee', 'jolteon'],
  })
  PokemonState.addXP(jolteonEevee, PokemonState.getRequiredXP(jolteonEevee))
  assert.strictEqual(PokemonState.evolvePokemon(context, jolteonEevee), true)
  assert.strictEqual(jolteonEevee.type, 'jolteon')
})

test('resuming a not-yet-branched eevee from the roster keeps its committed branch', () => {
  const umbreonEevee = PokemonState.createNewPokemon(context)
  Object.assign(umbreonEevee, {
    type: 'eevee',
    name: 'Eevee',
    id: 133,
    level: 1,
    xp: 50,
    canGainXP: true,
    evolutionLine: ['eevee', 'umbreon'],
  })
  PokemonState.savePokemon(context)
  PokemonState.rememberActivePokemon(context)

  // Bring out something unrelated, then come back to eevee through the
  // Pokedex - the exact resume path a player takes when switching lines.
  PokemonState.discoverPokemon(context, 'rattata')
  PokemonState.selectPokemonFromPokedex(context, 'rattata')

  const resumed = PokemonState.selectPokemonFromPokedex(context, 'eevee')
  assert.strictEqual(resumed.type, 'eevee')
  assert.strictEqual(resumed.xp, 50)
  assert.deepStrictEqual(resumed.evolutionLine, ['eevee', 'umbreon'])

  PokemonState.addXP(resumed, PokemonState.getRequiredXP(resumed) - resumed.xp)
  assert.strictEqual(PokemonState.evolvePokemon(context, resumed), true)
  assert.strictEqual(resumed.type, 'umbreon')
})

// --- total XP -----------------------------------------------------------
console.log('\ntotal XP')

test('total XP is a running lifetime counter', () => {
  const before = PokemonState.getTotalXP(context)
  PokemonState.addTotalXP(context, 42)
  PokemonState.addTotalXP(context, 8)
  assert.strictEqual(PokemonState.getTotalXP(context), before + 50)
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
    color: 'default',
    evolutionLine: ['charmander', 'charmeleon', 'charizard'],
  })
  assert.ok(stored.pokedex.indexOf('pikachu') >= 0)
  assert.strictEqual(stored.totalXP, PokemonState.getTotalXP(context))
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

test('the shiny pokedex is a union of both windows', () => {
  const merged = mergeStates(
    { pokemon: undefined, pokedex: [], shinyPokedex: ['bulbasaur'], roster: {} },
    { pokemon: undefined, pokedex: [], shinyPokedex: ['squirtle'], roster: {} }
  )
  assert.deepStrictEqual(merged.shinyPokedex.sort(), ['bulbasaur', 'squirtle'])
})

test('total XP takes the higher of the two windows rather than summing', () => {
  const merged = mergeStates(
    { pokemon: undefined, pokedex: [], roster: {}, totalXP: 100 },
    { pokemon: undefined, pokedex: [], roster: {}, totalXP: 30 }
  )
  assert.strictEqual(merged.totalXP, 100)
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

// --- sharing a machine with another version ---------------------------------
console.log('\nsharing a machine with another version')

test('reading keeps fields this version does not know about', () => {
  const kept = normalizeState({ pokedex: ['pikachu'], somethingNewer: [1, 2] })
  assert.deepStrictEqual(kept.somethingNewer, [1, 2])
})

test('merging keeps fields this version does not know about', () => {
  const merged = mergeStates(
    normalizeState({ pokedex: [], futureField: 'mine' }),
    normalizeState({ pokedex: [] })
  )
  assert.strictEqual(merged.futureField, 'mine')
})

test('defaults are still applied to the fields it does know', () => {
  const fixed = normalizeState({ pokedex: 'not an array', totalXP: 'nope' })
  assert.deepStrictEqual(fixed.pokedex, [])
  assert.strictEqual(fixed.totalXP, 0)
})

test('an older build stripping a field does not cost the data', () => {
  const mine = normalizeState({
    pokedex: ['vulpix'],
    shinyPokedex: ['vulpix'],
    totalXP: 5000,
  })
  // What an older version writes back once it has dropped what it cannot read.
  const stripped = normalizeState({ pokedex: ['vulpix'] })
  const merged = mergeStates(mine, stripped)
  assert.deepStrictEqual(merged.shinyPokedex, ['vulpix'])
  assert.strictEqual(merged.totalXP, 5000)
})

fs.rmSync(storageDir, { recursive: true, force: true })

console.log(`\n${passed} passed, ${failed} failed\n`)
process.exit(failed === 0 ? 0 : 1)
