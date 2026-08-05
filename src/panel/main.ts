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

function updatePokemonDisplay(pokemon: UserPokemon | null): void {
  const pokemonImg = document.getElementById('pokemon') as HTMLImageElement
  const transitionImg = document.getElementById('transition') as HTMLImageElement
  const pokemonContainer = document.getElementById('pokemon-container')
  const transitionContainer = document.getElementById('transition-container')

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
    if (transitionImg) {
      transitionImg.style.display = 'none'
    }
    return
  }

  const isIdle = pokemon.state === 'idle' || pokemon.isHovered
  const spritePath = getPokemonSpritePath(pokemon, isIdle)
  pokemonImg.src = `${state.basePokemonUri}/${spritePath}`
  pokemonImg.width = POKEMON_BASE_SIZE * pokemon.scale
  pokemonImg.height = POKEMON_BASE_SIZE * pokemon.scale
  pokemonImg.style.display = 'block'
  pokemonImg.style.imageRendering = 'pixelated'
  pokemonImg.style.transform = `scale(${pokemon.scale})`

  if (pokemon.isTransitionIn && transitionImg && transitionContainer) {
    transitionImg.src = `${state.basePokemonUri}/${spritePath}`
    transitionImg.width = POKEMON_BASE_SIZE * pokemon.scale
    transitionImg.height = POKEMON_BASE_SIZE * pokemon.scale
    transitionImg.style.display = 'block'
    transitionImg.style.imageRendering = 'pixelated'
    transitionImg.style.transform = `scale(${pokemon.scale})`
    transitionContainer.style.display = 'block'

    if (pokemon.color === PokemonColor.shiny) {
      playSparkleBurst(pokemon.scale)
    }

    setTimeout(() => {
      if (transitionImg) {
        transitionImg.style.display = 'none'
      }
      if (transitionContainer) {
        transitionContainer.style.display = 'none'
      }
      pokemon.isTransitionIn = false
    }, 1000)
  } else {
    if (transitionImg) {
      transitionImg.style.display = 'none'
    }
    if (transitionContainer) {
      transitionContainer.style.display = 'none'
    }
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

