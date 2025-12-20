import { UserPokemon } from '../extension/types'
import { POKEMON_DATA } from '../common/pokemon-data'
import { PokemonGeneration } from '../common/types'

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
}

const state: State = {
  userPokemon: null,
  basePokemonUri: '',
  intervalId: undefined,
  isHovered: false,
}

const TICK_INTERVAL_MS = 100
const POKEBALL_SIZE = 32
const POKEMON_BASE_SIZE = 50 // Aumentado 20% (32 * 1.2 = 38.4)

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
  }
  
  const animation = isIdle ? 'default_idle_8fps.gif' : 'default_walk_8fps.gif'
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

function tick(): void {
  const pokemon = state.userPokemon
  if (!pokemon || pokemon.level === 0) {
    return
  }

  // Si está en hover, no mover
  if (state.isHovered) {
    if (pokemon.state !== 'idle') {
      pokemon.state = 'idle'
      updatePokemonDisplay(pokemon)
    }
    return
  }

  // Si estaba en idle por hover, cambiar a walking
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

  // Agregar event listeners para hover
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
          updatePokemonDisplay(data.userPokemon)
        }
        break

      case 'update-pokemon': {
        if (data.userPokemon) {
          const updatedPokemon = {
            ...data.userPokemon,
            leftPosition: state.userPokemon?.leftPosition || 0,
            direction: state.userPokemon?.direction || 'right',
            isHovered: state.isHovered,
          }
          state.userPokemon = updatedPokemon
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

