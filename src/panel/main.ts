import { UserPokemon } from '../extension/types'
import { POKEMON_DATA } from '../common/pokemon-data'
import { PokemonColor, PokemonGeneration } from '../common/types'

declare global {
  interface Window {
    pokechiApp: {
      app: (config: { basePokemonUri: string; userPokemon: UserPokemon | null }) => void
    }
  }
}

interface State {
  userPokemon: UserPokemon | null
  basePokemonUri: string
  intervalId: number | undefined
  isHovered: boolean
  idleUntil: number
}

const state: State = {
  userPokemon: null,
  basePokemonUri: '',
  intervalId: undefined,
  isHovered: false,
  idleUntil: 0,
}

const TICK_INTERVAL_MS = 100

// How long a pokemon stands still after hatching or evolving. Without it the
// first tick would send it walking before the idle animation is ever seen.
const IDLE_AFTER_CHANGE_MS = 1500

// Everything that decides how the sprite looks. XP updates arrive several times
// a second and change none of it, so the DOM work can be skipped.
function visualSignature(pokemon: UserPokemon | null): string {
  if (!pokemon) {
    return 'none'
  }
  return [
    pokemon.type,
    pokemon.level,
    pokemon.state,
    pokemon.scale,
    pokemon.isHovered ? 1 : 0,
    pokemon.isTransitionIn ? 1 : 0,
    pokemon.color,
  ].join('|')
}

let lastRenderedSignature = ''
// Identifies which reveal has already played its flash/sparkle/cry, so a
// hover-driven re-render within the same reveal's 1s window is recognized
// as the same reveal instead of replaying it. See updatePokemonDisplay.
let lastRevealKey = ''
const POKEBALL_SIZE = 32
const POKEMON_BASE_SIZE = 50 // Increased by 20% (32 * 1.2 = 38.4)

function getPokemonSpritePath(pokemon: UserPokemon, isIdle = false): string {
  if (pokemon.level === 0) {
    return 'pokeball.gif'
  }
  const pokemonType = pokemon.type
  const pokemonData = POKEMON_DATA[pokemonType]
  
  if (!pokemonData) {
    return 'pokeball.gif'
  }
  
  let generation = 'gen1'
  if (pokemonData.generation === PokemonGeneration.Gen2) {
    generation = 'gen2'
  } else if (pokemonData.generation === PokemonGeneration.Gen3) {
    generation = 'gen3'
  } else if (pokemonData.generation === PokemonGeneration.Gen4) {
    generation = 'gen4'
  }

  const colorPrefix = pokemon.color === PokemonColor.shiny ? 'shiny' : 'default'
  const animation = isIdle ? `${colorPrefix}_idle_8fps.gif` : `${colorPrefix}_walk_8fps.gif`
  return `${generation}/${pokemonType}/${animation}`
}

function getGenerationFolder(pokemonType: string): string {
  const pokemonData = POKEMON_DATA[pokemonType]
  if (pokemonData?.generation === PokemonGeneration.Gen2) {
    return 'gen2'
  } else if (pokemonData?.generation === PokemonGeneration.Gen3) {
    return 'gen3'
  } else if (pokemonData?.generation === PokemonGeneration.Gen4) {
    return 'gen4'
  }
  return 'gen1'
}

// A fresh HTMLAudioElement re-checks the browser's autoplay gesture policy
// on every single .play() call, which is what made hatch/evolve/Pokedex-pick
// cries (never triggered from a direct click) unreliable even after a real
// click had already played one successfully. A Web Audio AudioContext only
// needs that gesture once, to move out of "suspended": once running, playing
// a buffer through it from anywhere - a message handler, a timer - works
// the same as if a click had triggered it. Created lazily (constructing one
// needs no gesture) and reused for every cry from here on.
let audioContext: AudioContext | undefined
const cryBufferCache: Record<string, AudioBuffer> = {}

async function loadCryBuffer(pokemonType: string, ctx: AudioContext): Promise<AudioBuffer> {
  const cached = cryBufferCache[pokemonType]
  if (cached) {
    return cached
  }
  const cryPath = `${getGenerationFolder(pokemonType)}/${pokemonType}/cry.mp3`
  const response = await fetch(`${state.basePokemonUri}/${cryPath}`)
  const arrayBuffer = await response.arrayBuffer()
  const buffer = await ctx.decodeAudioData(arrayBuffer)
  cryBufferCache[pokemonType] = buffer
  return buffer
}

// Plays a cry for whichever species is clicked. Logged rather than silently
// swallowed - a context that has never been resumed by a genuine user
// gesture anywhere in this frame still cannot produce sound, and this is
// the only way to tell that apart from a real bug.
async function playCry(pokemonType: string): Promise<void> {
  try {
    if (!audioContext) {
      audioContext = new AudioContext()
    }
    const ctx = audioContext
    if (ctx.state === 'suspended') {
      await ctx.resume()
    }
    const buffer = await loadCryBuffer(pokemonType, ctx)
    const source = ctx.createBufferSource()
    source.buffer = buffer
    source.connect(ctx.destination)
    source.start(0)
  } catch (err) {
    console.warn('[pokechi] could not play cry for ' + pokemonType + ':', err)
  }
}

// Holding the mouse down and clicking repeatedly would otherwise stack up
// one overlapping cry per click - this caps it to one every 500ms.
const CRY_CLICK_THROTTLE_MS = 1500
let lastCryClickTime = 0

// Not a Pokeball with nothing hatched yet, and not a snapshot brought out
// read-only from the Pokedex mid-transition - a plain click while the walk
// loop is running is the only time this fires. Always plays regardless of
// pokechi.playCrySounds: that setting only covers the automatic Pokedex-pick
// reveal, not a click the user asked for directly.
function playCryOnClick(pokemon: UserPokemon | null): void {
  if (!pokemon || pokemon.level === 0) {
    return
  }
  const now = Date.now()
  if (now - lastCryClickTime < CRY_CLICK_THROTTLE_MS) {
    return
  }
  lastCryClickTime = now
  playCry(pokemon.type)
  playSoundWaveBurst(pokemon.scale)
}

function updatePokemonDisplay(pokemon: UserPokemon | null): void {
  const pokemonImg = document.getElementById('pokemon') as HTMLImageElement
  const pokemonContainer = document.getElementById('pokemon-container')

  if (!pokemonImg || !pokemonContainer) {
    return
  }

  const signature = visualSignature(pokemon)
  if (signature === lastRenderedSignature) {
    return
  }
  lastRenderedSignature = signature

  if (!pokemon || pokemon.level === 0) {
    pokemonImg.src = `${state.basePokemonUri}/pokeball.gif`
    pokemonImg.width = POKEBALL_SIZE
    pokemonImg.height = POKEBALL_SIZE
    pokemonImg.style.display = 'block'
    return
  }

  const isIdle = pokemon.state === 'idle' || pokemon.isHovered
  const spritePath = getPokemonSpritePath(pokemon, isIdle)
  pokemonImg.src = `${state.basePokemonUri}/${spritePath}`
  pokemonImg.width = POKEMON_BASE_SIZE * pokemon.scale
  pokemonImg.height = POKEMON_BASE_SIZE * pokemon.scale
  pokemonImg.style.display = 'block'
  pokemonImg.style.imageRendering = 'pixelated'
  // tick() re-applies this same flip on its own 100ms cadence, but setting
  // it here too means a re-render never has even a brief unflipped frame
  // before the next tick catches up.
  pokemonImg.style.transform = `scaleX(${pokemon.direction === 'right' ? 1 : -1}) scale(${pokemon.scale})`

  // isTransitionIn stays true for a full second after a reveal (matching the
  // sparkle animation length) so a shiny has time to show it, but hovering
  // during that window changes the signature above too (it is part of
  // visualSignature) and would otherwise re-enter this branch and replay the
  // sparkle on every mouse in/out. revealKey identifies the specific reveal
  // instead of just the flag, so a hover-driven re-render within the same
  // window is recognized as the same reveal and skipped, while a genuinely
  // new one (even of the same species, once the window has actually elapsed
  // and reset it below) still plays.
  //
  // There used to be a second sprite layered on top here for a brief flash,
  // plus a cry and a sound-wave ripple, on every reveal (hatch, evolve, a
  // Pokedex pick). Both turned out to not be worth keeping: two independently
  // animated <img> copies of the same walking GIF drift out of frame-sync
  // with each other and visibly double up for as long as the reveal lasted,
  // and the cry needed a direct click on this exact frame to survive the
  // browser's autoplay policy, which a hatch or evolve triggered from typing
  // in the editor never has. Picking a pokemon from the Pokedex now plays its
  // cry directly from that click instead (see pokedex-panel.ts), which has
  // neither problem.
  const revealKey = pokemon.isTransitionIn
    ? [pokemon.type, pokemon.level, pokemon.color].join('|')
    : ''
  const isNewReveal = pokemon.isTransitionIn && revealKey !== lastRevealKey

  if (isNewReveal) {
    lastRevealKey = revealKey

    if (pokemon.color === PokemonColor.shiny) {
      playSparkleBurst(pokemon.scale)
    }

    setTimeout(() => {
      pokemon.isTransitionIn = false
      lastRevealKey = ''
    }, 1000)
  }
}

// Twinkles a ring of sparkles around the pokemon for a shiny reveal (hatching,
// evolving, or being brought out of the Pokedex already shiny).
function playSparkleBurst(scale: number): void {
  const burst = document.getElementById('shiny-burst')
  if (!burst) {
    return
  }

  burst.style.transform = `scale(${scale})`
  // A restart needs a fresh animation, not just the class re-added: removing
  // and re-adding it in the same tick would be a no-op, so the reflow in
  // between forces the browser to actually notice the class was ever gone.
  burst.classList.remove('is-active')
  void burst.offsetWidth
  burst.classList.add('is-active')

  setTimeout(() => {
    burst.classList.remove('is-active')
  }, 1000)
}

// Ripples a few rings out from the pokemon whenever a click plays its cry.
function playSoundWaveBurst(scale: number): void {
  const burst = document.getElementById('sound-wave-burst')
  if (!burst) {
    return
  }

  burst.style.transform = `scale(${scale})`
  burst.classList.remove('is-active')
  void burst.offsetWidth
  burst.classList.add('is-active')

  setTimeout(() => {
    burst.classList.remove('is-active')
  }, 1000)
}

function tick(): void {
  const pokemon = state.userPokemon
  if (!pokemon || pokemon.level === 0) {
    return
  }

  // Let the idle animation play after a hatch or an evolution.
  if (Date.now() < state.idleUntil) {
    return
  }

  // If hovered, do not move
  if (state.isHovered) {
    if (pokemon.state !== 'idle') {
      pokemon.state = 'idle'
      updatePokemonDisplay(pokemon)
    }
    return
  }

  // If it was idle because of hover, switch back to walking
  if (pokemon.state === 'idle' && !state.isHovered) {
    pokemon.state = 'walking'
    updatePokemonDisplay(pokemon)
  }

  const containerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  const speed = 1
  const direction = pokemon.direction || 'right'
  let leftPosition = pokemon.leftPosition || 0

  if (direction === 'right') {
    leftPosition += speed
    if (leftPosition > containerWidth - POKEMON_BASE_SIZE * pokemon.scale) {
      pokemon.direction = 'left'
    }
  } else {
    leftPosition -= speed
    if (leftPosition < 0) {
      pokemon.direction = 'right'
    }
  }

  pokemon.leftPosition = leftPosition

  const movementContainer = document.getElementById('movement-container')
  if (movementContainer) {
    movementContainer.style.marginLeft = `${leftPosition}px`
  }

  const pokemonImg = document.getElementById('pokemon') as HTMLImageElement
  if (pokemonImg) {
    pokemonImg.style.transform = `scaleX(${direction === 'right' ? 1 : -1}) scale(${pokemon.scale})`
  }
}

function startAnimation(): void {
  if (state.intervalId) {
    clearInterval(state.intervalId)
  }
  state.intervalId = window.setInterval(() => {
    tick()
  }, TICK_INTERVAL_MS)
}

function stopAnimation(): void {
  if (state.intervalId) {
    clearInterval(state.intervalId)
    state.intervalId = undefined
  }
}

// The explorer view keeps its context when hidden, so without this the walking
// loop would keep running against a panel nobody is looking at.
function handleVisibilityChange(): void {
  if (document.hidden) {
    stopAnimation()
  } else if (!state.intervalId) {
    startAnimation()
  }
}

export const app = ({
  userPokemon,
  basePokemonUri,
}: {
  userPokemon: UserPokemon | null
  basePokemonUri: string
}): void => {
  state.basePokemonUri = basePokemonUri
  state.userPokemon = userPokemon

  updatePokemonDisplay(userPokemon)
  startAnimation()

  document.addEventListener('visibilitychange', handleVisibilityChange)

  // Add hover event listeners
  const container = document.getElementById('container')
  if (container) {
    container.addEventListener('mouseenter', () => {
      state.isHovered = true
      if (state.userPokemon && state.userPokemon.level > 0) {
        state.userPokemon.isHovered = true
        updatePokemonDisplay(state.userPokemon)
      }
    })
    container.addEventListener('mouseleave', () => {
      state.isHovered = false
      if (state.userPokemon && state.userPokemon.level > 0) {
        state.userPokemon.isHovered = false
        state.userPokemon.state = 'walking'
        updatePokemonDisplay(state.userPokemon)
      }
    })
    container.addEventListener('click', () => {
      playCryOnClick(state.userPokemon)
    })
  }

  window.addEventListener('message', (event): void => {
    const { command, data } = event.data
    switch (command) {
      case 'spawn-pokemon':
        if (data.userPokemon) {
          state.userPokemon = data.userPokemon
          state.idleUntil = 0
          updatePokemonDisplay(data.userPokemon)
        }
        break

      case 'update-pokemon': {
        if (data.userPokemon) {
          const previousLevel = state.userPokemon?.level ?? 0
          const updatedPokemon = {
            ...data.userPokemon,
            leftPosition: state.userPokemon?.leftPosition || 0,
            direction: state.userPokemon?.direction || 'right',
            isHovered: state.isHovered,
          }
          state.userPokemon = updatedPokemon

          if (updatedPokemon.level > previousLevel) {
            state.idleUntil = Date.now() + IDLE_AFTER_CHANGE_MS
          }

          updatePokemonDisplay(updatedPokemon)
        }
        break
      }
    }
  })
}

window.pokechiApp = {
  app,
}

