import * as vscode from 'vscode'
import { PokemonState } from './pokemon-state'
import { generateNonce } from './nonce'
import { PokemonColor, PokemonElementType, PokemonGeneration, PokemonType } from '../common/types'
import { POKEMON_DATA } from '../common/pokemon-data'
import { POKEMON_INFO_DATA, PokemonInfoEntry } from '../common/pokemon-info-data'
import {
  SPARKLE_ICON,
  SOUND_ICON,
  INFO_ICON,
  ATTACK_ICON,
  getSparkleBurstMarkup,
  getSparkleBurstCssRules,
  getSoundWaveMarkup,
  getSoundWaveCssRules,
} from '../common/icons'
import { TYPE_BADGES, getTypeBadgeCssRules } from '../common/type-badges'

function renderTypeBadges(types: PokemonElementType[] | undefined): string {
  if (!types || types.length === 0) {
    return ''
  }
  return types
    .map((type) => {
      const badge = TYPE_BADGES[type]
      if (!badge) {
        return ''
      }
      return `<span class="type-badge type-${type}">${badge.abbr}</span>`
    })
    .join('')
}

// One row per type in the type-filter dropdown - a badge on the left (same
// markup as everywhere else a type shows up) and its own checkbox on the
// right, rather than a native <select>, which cannot render anything but
// plain text per option.
function renderTypeFilterOptions(): string {
  return Object.keys(TYPE_BADGES)
    .map((type) => {
      const badge = TYPE_BADGES[type as PokemonElementType]
      return `
        <label class="type-filter-option">
          <span class="type-badge type-${type}">${badge.abbr}</span>
          <input type="checkbox" data-type-option value="${type}" />
        </label>
      `
    })
    .join('')
}

interface PokedexEntry {
  type: PokemonType
  id: number
  name: string
  generation: PokemonGeneration
}

const POKEDEX_ENTRIES: PokedexEntry[] = Object.keys(POKEMON_DATA)
  .map((type) => {
    const pokemonData = POKEMON_DATA[type as PokemonType]

    return {
      type: type as PokemonType,
      id: pokemonData.id,
      name: pokemonData.name,
      generation: pokemonData.generation,
    }
  })
  .sort((left, right) => left.id - right.id)

// Cards are addressed by their position in the grid rather than by species, so
// the markup of a locked card gives nothing away.
const POKEDEX_INDEX_BY_TYPE: { [type: string]: number } = {}
POKEDEX_ENTRIES.forEach((entry, index) => {
  POKEDEX_INDEX_BY_TYPE[entry.type] = index
})

function padPokemonId(id: number): string {
  const text = String(id)
  return text.length >= 3 ? text : `000${text}`.slice(-3)
}

function getGenerationLabel(generation: PokemonGeneration): string {
  return `Gen ${generation}`
}

function getSpritePath(
  type: PokemonType,
  color: PokemonColor = PokemonColor.default
): string {
  const pokemonData = POKEMON_DATA[type]
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

  const colorPrefix = color === PokemonColor.shiny ? 'shiny' : 'default'
  return `${generation}/${type}/${colorPrefix}_idle_8fps.gif`
}

function getCryPath(type: PokemonType): string {
  const pokemonData = POKEMON_DATA[type]
  if (!pokemonData) {
    return ''
  }

  let generation = 'gen1'
  if (pokemonData.generation === PokemonGeneration.Gen2) {
    generation = 'gen2'
  } else if (pokemonData.generation === PokemonGeneration.Gen3) {
    generation = 'gen3'
  } else if (pokemonData.generation === PokemonGeneration.Gen4) {
    generation = 'gen4'
  }

  return `${generation}/${type}/cry.mp3`
}

const STAT_LABELS: Array<[keyof PokemonInfoEntry['stats'], string]> = [
  ['hp', 'HP'],
  ['attack', 'ATK'],
  ['defense', 'DEF'],
  ['specialAttack', 'SPA'],
  ['specialDefense', 'SPD'],
  ['speed', 'SPE'],
]

// The info side of a flipped card: flavor text plus a compact base-stats grid.
function renderInfoPanelHtml(info: PokemonInfoEntry): string {
  const statsHtml = STAT_LABELS.map(
    ([key, label]) =>
      `<li><span class="back-stat-label">${label}</span><span class="back-stat-value">${info.stats[key]}</span></li>`
  ).join('')

  return `
    <div class="back-panel back-panel-info" data-back-panel="info">
      <p class="back-flavor">${escapeHtml(info.flavorText)}</p>
      <ul class="back-stats">${statsHtml}</ul>
    </div>
  `
}

// The moves side of a flipped card: up to 4 representative attacks, each with
// its power (or "-" for a status move with none) and a one-line description.
function renderMovesPanelHtml(info: PokemonInfoEntry): string {
  const movesHtml = info.moves
    .map(
      (move) => `
        <li class="back-move">
          <div class="back-move-header">
            <span class="back-move-name-group">
              ${renderTypeBadges([move.type])}
              <span class="back-move-name">${escapeHtml(move.name)}</span>
            </span>
            <span class="back-move-power">${move.power === null ? '-' : move.power}</span>
          </div>
          <p class="back-move-description">${escapeHtml(move.description)}</p>
        </li>
      `
    )
    .join('')

  return `
    <div class="back-panel back-panel-moves" data-back-panel="moves" hidden>
      <ul class="back-moves">${movesHtml}</ul>
    </div>
  `
}

// Both faces are rendered up front rather than fetched on flip: this is
// static per species, the same as every other card fact, and keeping it out
// of a locked card's DOM entirely is what keeps a locked card from spoiling
// anything about a species the user has not met yet.
//
// back-footer-name reserves the same bottom strip the two toggle buttons sit
// over (they are positioned outside this element, at the wrapper level, so
// they land visually on top of it) - only the flipped side needs this, since
// the front already keeps its own name clear of that corner.
function renderCardBackHtml(type: PokemonType, name: string): string {
  const info = POKEMON_INFO_DATA[type]
  if (!info) {
    return ''
  }
  return `
    <div class="card-face card-face-back">
      ${renderInfoPanelHtml(info)}
      ${renderMovesPanelHtml(info)}
      <div class="back-footer-name">${escapeHtml(name)}</div>
    </div>
  `
}

function renderFaceToggleButton(target: 'info' | 'moves', name: string): string {
  const icon = target === 'info' ? INFO_ICON : ATTACK_ICON
  const label = target === 'info' ? 'Info' : 'Moves'
  return `
    <button
      type="button"
      class="face-toggle face-toggle-${target}"
      data-flip-target="${target}"
      aria-label="Show ${label.toLowerCase()} for ${escapeHtml(name)}"
      aria-pressed="false"
      title="${label}"
    >${icon}</button>
  `
}

// Sit outside card-flip (so neither rotates with the card) and stay at the
// same bottom corners in both the front and flipped states - the front never
// had anything at that edge for them to cover, so only the flipped side
// (renderCardBackHtml below) needs to make room for them.
function renderFaceTogglesHtml(name: string): string {
  return renderFaceToggleButton('info', name) + renderFaceToggleButton('moves', name)
}

const ABBREVIATION_UNITS = ['', 'K', 'M', 'G', 'T', 'P']

// Scientific-style abbreviation (1,200 -> 1.2K, 4,500,000 -> 4.5M, ...), used
// for the lifetime XP counter so it stays readable at any size.
function formatAbbreviatedNumber(value: number): string {
  let scaled = value
  let unitIndex = 0
  while (Math.abs(scaled) >= 1000 && unitIndex < ABBREVIATION_UNITS.length - 1) {
    scaled /= 1000
    unitIndex++
  }

  if (unitIndex === 0) {
    return String(Math.round(scaled))
  }

  const decimals = Math.abs(scaled) < 10 ? 2 : Math.abs(scaled) < 100 ? 1 : 0
  return scaled.toFixed(decimals) + ABBREVIATION_UNITS[unitIndex]
}

// Names come from POKEMON_DATA, which contains apostrophes (Farfetch'd), so
// anything interpolated into the markup gets escaped.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

interface PokedexSnapshot {
  discovered: PokemonType[]
  shinyDiscovered: PokemonType[]
  activeType: PokemonType | undefined
  activeColor: PokemonColor | undefined
}

export class PokedexPanel {
  panel: vscode.WebviewPanel | undefined
  private disposables: vscode.Disposable[] = []
  private lastSnapshot: string | undefined
  // Tracked apart from lastSnapshot: XP changes on almost every keystroke,
  // and diffing it together with the rest would force a full grid message
  // that often, defeating the point of the cheap refresh path.
  private lastTotalXP: number | undefined

  constructor(private readonly context: vscode.ExtensionContext) {}

  createPanel(panel?: vscode.WebviewPanel): vscode.WebviewPanel {
    const mediaUri = vscode.Uri.joinPath(this.context.extensionUri, 'media')

    this.panel =
      panel ??
      vscode.window.createWebviewPanel(
        'pokedexPanel',
        'Pokechidex',
        vscode.ViewColumn.Two,
        {
          enableScripts: true,
          localResourceRoots: [mediaUri],
          // Search text, the generation chip, and the two checkboxes only
          // ever live in this webview's own DOM - without this, hiding the
          // panel (switching tabs/windows) and coming back tears the webview
          // down and rebuilds it from the static HTML, silently resetting
          // every filter.
          retainContextWhenHidden: true,
        }
      )

    this.panel.onDidDispose(
      () => {
        this.dispose()
      },
      null,
      this.context.subscriptions
    )

    this.disposables.push(
      this.panel.webview.onDidReceiveMessage((message) => {
        switch (message.command) {
          case 'show-pokemon':
            if (message.pokemonType) {
              void vscode.commands.executeCommand(
                'pokechi.selectPokemonFromPokedex',
                {
                  pokemonType: message.pokemonType,
                  color: message.isShiny ? PokemonColor.shiny : PokemonColor.default,
                }
              )
            }
            break
        }
      })
    )

    this.updateContent()
    return this.panel
  }

  dispose(): void {
    this.panel = undefined
    this.lastSnapshot = undefined
    this.lastTotalXP = undefined
    this.disposables.forEach((disposable) => disposable.dispose())
    this.disposables = []
  }

  private getSnapshot(): PokedexSnapshot {
    const activePokemon = PokemonState.getPokemon(this.context)

    return {
      discovered: PokemonState.getPokedex(this.context),
      shinyDiscovered: PokemonState.getShinyPokedex(this.context),
      // A pokemon still inside its Pokeball has not been revealed yet, so it
      // must not light up its card in the grid.
      activeType:
        activePokemon && activePokemon.level > 0 ? activePokemon.type : undefined,
      activeColor:
        activePokemon && activePokemon.level > 0 ? activePokemon.color : undefined,
    }
  }

  private getSpriteUri(webview: vscode.Webview, spritePath: string): string {
    return webview
      .asWebviewUri(
        vscode.Uri.joinPath(this.context.extensionUri, 'media', spritePath)
      )
      .toString()
  }

  private setTitle(discoveredCount: number): void {
    if (this.panel) {
      this.panel.title = `Pokechidex (${discoveredCount}/${POKEDEX_ENTRIES.length})`
    }
  }

  // Scrolls to and briefly highlights a card, clearing whatever filters
  // would otherwise hide it - used by the "locate in Pokechidex" button on
  // the active pokemon's XP row.
  locatePokemon(pokemonType: PokemonType, color: PokemonColor): void {
    if (!this.panel) {
      return
    }
    this.panel.webview.postMessage({
      command: 'locate-pokemon',
      data: { pokemonType, isShiny: color === PokemonColor.shiny },
    })
  }

  // Full rebuild of the webview. Only worth doing when the panel is created or
  // restored: it emits every card and restarts all the sprite animations.
  updateContent(): void {
    if (!this.panel) {
      return
    }

    const snapshot = this.getSnapshot()
    this.lastSnapshot = JSON.stringify(snapshot)
    this.lastTotalXP = PokemonState.getTotalXP(this.context)
    this.setTitle(snapshot.discovered.length)
    this.panel.webview.html = this.getWebviewContent(this.panel.webview, snapshot)
  }

  // Cheap update used while the user codes. Sends only what changed, so typing
  // does not rebuild a grid of several hundred animated sprites.
  refresh(): void {
    if (!this.panel) {
      return
    }

    const totalXP = PokemonState.getTotalXP(this.context)
    if (totalXP !== this.lastTotalXP) {
      this.lastTotalXP = totalXP
      this.panel.webview.postMessage({
        command: 'pokedex-xp-update',
        data: { totalXPText: formatAbbreviatedNumber(totalXP) },
      })
    }

    const snapshot = this.getSnapshot()
    const serialized = JSON.stringify(snapshot)
    if (serialized === this.lastSnapshot) {
      return
    }
    this.lastSnapshot = serialized

    const webview = this.panel.webview
    this.setTitle(snapshot.discovered.length)
    const shinySet = new Set(snapshot.shinyDiscovered)

    this.panel.webview.postMessage({
      command: 'pokedex-update',
      data: {
        activeType: snapshot.activeType,
        activeColor: snapshot.activeColor,
        discoveredCount: snapshot.discovered.length,
        shinyDiscoveredCount: snapshot.shinyDiscovered.length,
        discovered: snapshot.discovered
          .filter((type) => POKEDEX_INDEX_BY_TYPE[type] !== undefined)
          .map((type) => {
            const isShiny = shinySet.has(type)
            return {
              index: POKEDEX_INDEX_BY_TYPE[type],
              type,
              name: POKEMON_DATA[type] ? POKEMON_DATA[type].name : type,
              spriteUri: this.getSpriteUri(
                webview,
                getSpritePath(type, PokemonColor.default)
              ),
              cryUri: this.getSpriteUri(webview, getCryPath(type)),
              isShiny,
              shinySpriteUri: isShiny
                ? this.getSpriteUri(webview, getSpritePath(type, PokemonColor.shiny))
                : undefined,
              rarity: POKEMON_DATA[type]?.rarity,
              types: POKEMON_DATA[type]?.types,
              info: POKEMON_INFO_DATA[type],
            }
          }),
      },
    })
  }

  private getWebviewContent(
    webview: vscode.Webview,
    snapshot: PokedexSnapshot
  ): string {
    const nonce = generateNonce()
    const pokedex = new Set(snapshot.discovered)
    const shinyPokedex = new Set(snapshot.shinyDiscovered)
    const lockedSpriteUri = this.getSpriteUri(webview, 'pokeball.gif')
    const discoveredCount = pokedex.size
    const shinyDiscoveredCount = shinyPokedex.size
    const totalCount = POKEDEX_ENTRIES.length
    const totalXPText = formatAbbreviatedNumber(PokemonState.getTotalXP(this.context))
    // Picking a card counts as "picked from the Pokechidex" for this
    // setting, same as the automatic reveal it triggers elsewhere - unlike
    // the dedicated play button, which is an explicit "let me hear it" click
    // and always plays regardless.
    const playCrySoundsEnabled = vscode.workspace
      .getConfiguration()
      .get('pokechi.playCrySounds', true)

    const cards = POKEDEX_ENTRIES.map((entry, index) => {
      const discovered = pokedex.has(entry.type)
      const isShiny = discovered && shinyPokedex.has(entry.type)
      const isActive = snapshot.activeType === entry.type
      // The card for whatever is currently out opens already showing the
      // sprite it is actually displayed as, shiny or not.
      const showsShinyByDefault = isActive && isShiny && snapshot.activeColor === PokemonColor.shiny
      // Locked cards carry no name, sprite or species id, so the grid never
      // spoils something the user has not met yet, not even in the DOM.
      const defaultSpriteUri = discovered
        ? this.getSpriteUri(webview, getSpritePath(entry.type, PokemonColor.default))
        : lockedSpriteUri
      const shinySpriteUri = isShiny
        ? this.getSpriteUri(webview, getSpritePath(entry.type, PokemonColor.shiny))
        : ''
      const initialSpriteUri = showsShinyByDefault ? shinySpriteUri : defaultSpriteUri
      const name = discovered ? escapeHtml(entry.name) : '???'
      const label = discovered
        ? `Show ${escapeHtml(entry.name)}${isActive ? ', currently active' : ''}`
        : 'Undiscovered pokemon'
      const cry = POKEMON_DATA[entry.type] ? POKEMON_DATA[entry.type].cry : ''
      const tooltip = discovered && cry ? ` title="${escapeHtml(cry)}"` : ''
      // Never set for a locked card: the border must not spoil how rare an
      // undiscovered species is.
      const rarity = discovered ? POKEMON_DATA[entry.type]?.rarity : undefined
      const rarityClass = rarity ? ` rarity-${rarity}` : ''
      // Same "never for a locked card" rule as rarity: the container is
      // always rendered, empty, so a locked card keeps the same card height
      // without leaking what types the species is.
      const typeBadgesHtml = discovered
        ? renderTypeBadges(POKEMON_DATA[entry.type]?.types)
        : ''
      // Same "never for a locked card" rule: the type filter treats a blank
      // data-types as "always matches" rather than "matches nothing", so
      // this never has to hide a card the search/generation filters would
      // otherwise still show.
      const typesAttr = discovered ? (POKEMON_DATA[entry.type]?.types ?? []).join(' ') : ''
      const cryUri = discovered ? this.getSpriteUri(webview, getCryPath(entry.type)) : ''

      // Both live outside the card button: interactive elements cannot nest,
      // and neither must trigger selecting the pokemon.
      const shinyToggle = isShiny
        ? `
          <button
            type="button"
            class="shiny-toggle${showsShinyByDefault ? ' is-shiny-active' : ''}"
            data-shiny-toggle
            data-default-sprite="${defaultSpriteUri}"
            data-shiny-sprite="${shinySpriteUri}"
            aria-label="Toggle shiny sprite for ${escapeHtml(entry.name)}"
            aria-pressed="${showsShinyByDefault ? 'true' : 'false'}"
            title="Toggle shiny sprite"
          >${SPARKLE_ICON}</button>
        `
        : ''
      const playCryButton = discovered
        ? `
          <button
            type="button"
            class="play-cry-button"
            data-play-cry
            data-cry-src="${cryUri}"
            aria-label="Play ${escapeHtml(entry.name)}'s cry"
            title="Play cry"
          >${SOUND_ICON}</button>
        `
        : ''
      const cardControls =
        shinyToggle || playCryButton
          ? `<div class="card-controls">${playCryButton}${shinyToggle}</div>`
          : ''
      const cardBack = discovered ? renderCardBackHtml(entry.type, entry.name) : ''
      const faceToggles = discovered ? renderFaceTogglesHtml(entry.name) : ''

      return `
        <div class="pokemon-card-wrapper">
          <div class="card-flip">
            <div class="card-flip-inner">
              <button
                type="button"
                class="pokemon-card ${discovered ? 'discovered' : 'locked'}${isActive ? ' active' : ''}${rarityClass}"
                data-index="${index}"
                data-generation="${entry.generation}"
                data-name="${discovered ? escapeHtml(entry.name.toLowerCase()) : ''}"
                data-number="${padPokemonId(entry.id)}"
                data-has-shiny="${isShiny ? '1' : '0'}"
                data-types="${typesAttr}"
                ${discovered ? `data-pokemon-type="${entry.type}"` : 'disabled'}
                aria-pressed="${isActive ? 'true' : 'false'}"
                aria-label="${label}"${tooltip}
              >
                <div class="card-top">
                  <span class="pokemon-id">#${padPokemonId(entry.id)}</span>
                  <span class="generation-chip">${getGenerationLabel(entry.generation)}</span>
                  <span class="active-badge">Active</span>
                </div>
                <div class="sprite-frame">
                  <img
                    class="sprite"
                    src="${initialSpriteUri}"
                    data-default-sprite="${defaultSpriteUri}"
                    data-shiny-sprite="${shinySpriteUri}"
                    data-showing-shiny="${showsShinyByDefault ? '1' : '0'}"
                    alt=""
                    loading="lazy"
                  />
                  <div class="sparkle-burst">${getSparkleBurstMarkup()}</div>
                  <div class="sound-wave-burst">${getSoundWaveMarkup()}</div>
                </div>
                <div class="pokemon-name">${name}</div>
                <div class="type-badges">${typeBadgesHtml}</div>
              </button>
              ${cardBack}
            </div>
          </div>
          ${cardControls}
          ${faceToggles}
        </div>
      `
    }).join('')

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'nonce-${nonce}'; img-src ${webview.cspSource}; font-src ${webview.cspSource}; media-src ${webview.cspSource}; connect-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokechidex</title>
  <style nonce="${nonce}">
    :root {
      --card-bg: var(--vscode-editorWidget-background, var(--vscode-editor-background));
      --card-border: var(--vscode-widget-border, transparent);
      --muted: var(--vscode-descriptionForeground);
      --accent: var(--vscode-focusBorder);
    }

    html, body {
      margin: 0;
      padding: 0;
      background: var(--vscode-editor-background);
      color: var(--vscode-foreground);
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
    }

    body {
      padding: 16px;
      box-sizing: border-box;
    }

    .pokedex-shell {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--vscode-widget-border, var(--vscode-editorWidget-border, rgba(128, 128, 128, 0.35)));
    }

    .title-block {
      display: flex;
      flex-direction: column;
      gap: 4px;
      /* Flex items do not shrink past their content by default, which let the
         subtitle run underneath the counter. */
      min-width: 0;
      flex: 1 1 260px;
    }

    h1 {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.2;
    }

    .subtitle {
      color: var(--muted);
      font-size: 12px;
      margin: 0;
      max-width: 100%;
      /* Clamped rather than left to wrap freely, so a narrow panel cannot
         grow the header past a couple of lines. */
      // display: -webkit-box;
      // -webkit-line-clamp: 2;
      // -webkit-box-orient: vertical;
      // overflow: hidden;
    }

    .counters {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .counter {
      flex: 0 0 auto;
      display: flex;
      align-items: baseline;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 999px;
      background: var(--vscode-badge-background);
      color: var(--vscode-badge-foreground);
      white-space: nowrap;
    }

    .counter-value {
      font-size: 15px;
      font-weight: 700;
    }

    .counter-label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      opacity: 0.85;
    }

    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }

    .search {
      flex: 1 1 220px;
      min-width: 180px;
      padding: 5px 8px;
      border-radius: 4px;
      border: 1px solid var(--vscode-input-border, transparent);
      background: var(--vscode-input-background);
      color: var(--vscode-input-foreground);
      font: inherit;
    }

    .search:focus {
      outline: 1px solid var(--accent);
      outline-offset: -1px;
    }

    .filters {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }

    .filter-chip {
      padding: 4px 10px;
      border-radius: 999px;
      border: 1px solid var(--vscode-widget-border, transparent);
      background: var(--vscode-button-secondaryBackground, transparent);
      color: var(--vscode-button-secondaryForeground, var(--vscode-foreground));
      font: inherit;
      font-size: 11px;
      cursor: pointer;
    }

    .filter-chip:hover {
      background: var(--vscode-list-hoverBackground);
    }

    .filter-chip.is-selected {
      background: var(--vscode-button-background);
      color: var(--vscode-button-foreground);
      border-color: var(--vscode-button-background);
    }

    .filter-chip:focus-visible,
    .filter-toggle input:focus-visible {
      outline: 1px solid var(--accent);
      outline-offset: 2px;
    }

    .filter-toggle {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 11px;
      color: var(--muted);
      cursor: pointer;
      user-select: none;
    }

    .type-filter {
      position: relative;
    }

    .type-filter-count {
      margin-left: 4px;
      font-weight: 700;
    }

    /* A display value here would otherwise override the browser's default
       [hidden] { display: none } - same reason the card-flip back panels
       need the analogous :not([hidden]) split - so the menu stays visible
       and un-clickable-shut regardless of the hidden attribute JS toggles. */
    .type-filter-menu {
      display: none;
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 10;
      grid-template-columns: repeat(2, minmax(90px, 1fr));
      gap: 2px 10px;
      padding: 8px;
      border-radius: 6px;
      border: 1px solid var(--vscode-widget-border, var(--card-border));
      background: var(--vscode-editorWidget-background, var(--card-bg));
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }

    .type-filter-menu:not([hidden]) {
      display: grid;
    }

    .type-filter-option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 3px 2px;
      border-radius: 4px;
      cursor: pointer;
      user-select: none;
    }

    .type-filter-option:hover {
      background: var(--vscode-list-hoverBackground);
    }

    .type-filter-option input:focus-visible {
      outline: 1px solid var(--accent);
      outline-offset: 1px;
    }

    .type-filter-clear {
      grid-column: 1 / -1;
      margin-top: 4px;
      padding: 4px 0;
      border: none;
      border-top: 1px solid var(--vscode-widget-border, var(--card-border));
      border-radius: 0;
      background: transparent;
      color: var(--muted);
      font: inherit;
      font-size: 11px;
      cursor: pointer;
    }

    .type-filter-clear:hover {
      color: var(--vscode-foreground);
    }

    .empty-state {
      margin: 0;
      padding: 24px;
      text-align: center;
      color: var(--muted);
      border: 1px dashed var(--vscode-widget-border, currentColor);
      border-radius: 8px;
    }

    .pokemon-card-wrapper[hidden] {
      display: none;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 10px;
    }

    .pokemon-card-wrapper {
      position: relative;
    }

    /* perspective on the outer element rather than card-flip-inner is what
       gives the rotation actual depth instead of squashing flat sideways. */
    .card-flip {
      position: relative;
      perspective: 1200px;
    }

    .card-flip-inner {
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.5s ease;
    }

    .card-flip.is-flipped .card-flip-inner {
      transform: rotateY(180deg);
    }

    /* The play-cry/shiny-toggle row sits outside card-flip (so it never
       rotates with the card), which means it has to be hidden by hand once
       flipped instead of just disappearing along with the front face. */
    .card-flip.is-flipped ~ .card-controls {
      display: none;
    }

    /* padding-bottom reserves the strip the two toggle buttons sit over
       (they are positioned outside this element, at the wrapper level, and
       land on top of it) - that is what keeps the scrollable panels below
       from ever running text underneath them. */
    .card-face-back {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      transform: rotateY(180deg);
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      border: 1px solid var(--card-border);
      background: var(--card-bg);
      padding: 10px 10px 26px;
      box-sizing: border-box;
      overflow: hidden;
    }

    .back-footer-name {
      position: absolute;
      left: 30px;
      right: 30px;
      bottom: 6px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 600;
      text-align: center;
      text-transform: capitalize;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* An author display value on .back-panel would otherwise override the
       browser's default [hidden] { display: none }, which is what keeps
       both panels from showing stacked on top of each other at once. */
    .back-panel {
      display: none;
      flex-direction: column;
      gap: 6px;
      height: 100%;
      overflow-y: auto;
      /* Firefox; the ::-webkit-scrollbar rules below cover Chromium, which
         is what VS Code's webview actually renders on every platform. */
      scrollbar-width: thin;
    }

    .back-panel:not([hidden]) {
      display: flex;
    }

    .back-panel::-webkit-scrollbar {
      width: 4px;
    }

    .back-panel::-webkit-scrollbar-track {
      background: transparent;
    }

    .back-panel::-webkit-scrollbar-thumb {
      background: var(--vscode-scrollbarSlider-background, rgba(128, 128, 128, 0.4));
      border-radius: 999px;
    }

    .back-flavor {
      margin: 0;
      font-size: 11px;
      line-height: 1.4;
      color: var(--vscode-foreground);
    }

    .back-stats {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3px 10px;
    }

    .back-stats li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 10.5px;
    }

    .back-stat-label {
      color: var(--muted);
      letter-spacing: 0.04em;
    }

    .back-stat-value {
      font-weight: 600;
      font-family: var(--vscode-editor-font-family, monospace);
    }

    .back-moves {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .back-move-header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 6px;
      font-size: 11px;
      font-weight: 600;
    }

    .back-move-name-group {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      min-width: 0;
    }

    .back-move-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .back-move-power {
      font-size: 10px;
      font-weight: 400;
      color: var(--muted);
      font-family: var(--vscode-editor-font-family, monospace);
      flex: 0 0 auto;
    }

    .back-move-description {
      margin: 2px 0 0;
      font-size: 10px;
      line-height: 1.3;
      color: var(--muted);
    }

    /* Doubles as the flip's front face - card-flip-inner has no other
       in-flow child, so it takes this element's own height and inset: 0 on
       .card-face-back above sizes correctly against it. backface-visibility
       keeps it from showing through, mirrored, once rotated past 90deg. */
    .pokemon-card {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-height: 184px;
      padding: 10px;
      border-radius: 8px;
      border: 1px solid var(--card-border);
      background: var(--card-bg);
      color: inherit;
      font: inherit;
      text-align: inherit;
      width: 100%;
      appearance: none;
      cursor: pointer;
      backface-visibility: hidden;
      transition: background-color 120ms ease, border-color 120ms ease;
    }

    /* Holds the play button and, once unlocked, the shiny toggle - centered
       as a pair instead of each one separately claiming the card's midpoint,
       which is what let only one of them ever be centered at a time. */
    .card-controls {
      position: absolute;
      top: 6px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .play-cry-button,
    .shiny-toggle,
    .face-toggle {
      display: grid;
      place-items: center;
      width: 20px;
      height: 20px;
      padding: 0;
      border-radius: 999px;
      border: 1px solid var(--vscode-widget-border, transparent);
      background: var(--vscode-badge-background);
      color: var(--vscode-badge-foreground);
      cursor: pointer;
      appearance: none;
    }

    .play-cry-button:hover,
    .shiny-toggle:hover,
    .face-toggle:hover {
      background: var(--vscode-button-background);
      color: var(--vscode-button-foreground);
    }

    .play-cry-button:focus-visible,
    .shiny-toggle:focus-visible,
    .face-toggle:focus-visible {
      outline: 1px solid var(--accent);
      outline-offset: 2px;
    }

    .shiny-toggle.is-shiny-active {
      background: var(--vscode-button-background);
      color: var(--vscode-button-foreground);
    }

    .face-toggle[aria-pressed="true"] {
      background: var(--vscode-button-background);
      color: var(--vscode-button-foreground);
    }

    /* Sit outside card-flip, at the wrapper level, so they never rotate with
       the card and stay one on each bottom corner in both the front and
       flipped states - the flipped side reserves room for them via
       .card-face-back's padding-bottom and .back-footer-name above. */
    .face-toggle-info,
    .face-toggle-moves {
      position: absolute;
      bottom: 6px;
      z-index: 2;
    }

    .face-toggle-info {
      left: 6px;
    }

    .face-toggle-moves {
      right: 6px;
    }

    .pokemon-card.discovered:hover {
      background: var(--vscode-list-hoverBackground);
      border-color: var(--vscode-contrastActiveBorder, var(--accent));
    }

    /* More specific than the plain hover rule above (an extra rarity-*
       class), so these win on hover regardless of source order. */
    .pokemon-card.discovered.rarity-sub-legendary:hover {
      border-color: #5EC8F2;
    }

    .pokemon-card.discovered.rarity-legendary:hover {
      border-color: #E3A008;
    }

    .pokemon-card.discovered.rarity-mythical:hover {
      border-color: #C77DFF;
    }

    .pokemon-card.discovered.rarity-fossil:hover {
      border-color: #B08968;
    }

    .pokemon-card:focus-visible {
      outline: 1px solid var(--accent);
      outline-offset: 2px;
    }

    .pokemon-card.active {
      border-color: var(--accent);
      box-shadow: inset 0 0 0 1px var(--accent);
    }

    /* Outline rather than border/box-shadow, so it layers over the active
       and rarity states above instead of fighting them for the same
       property - the "locate in Pokechidex" button needs this to stand out
       no matter what the card already looks like. */
    @keyframes locate-pulse {
      0%, 100% {
        outline-color: rgba(255, 215, 0, 0.9);
        outline-offset: 2px;
      }
      50% {
        outline-color: rgba(255, 215, 0, 0.35);
        outline-offset: 5px;
      }
    }

    .pokemon-card.locate-highlight {
      outline: 3px solid rgba(255, 215, 0, 0.9);
      animation: locate-pulse 0.8s ease-in-out 3;
    }

    /* Locked cards never get a rarity-* class, so this never spoils how rare
       an undiscovered species is. Selectors here are more specific than the
       plain .active rule above regardless of source order, so a rare
       pokemon that is also the one currently out keeps its own color
       instead of being flattened to the generic accent highlight. */
    .pokemon-card.rarity-sub-legendary {
      border-color: #5EC8F2;
    }

    .pokemon-card.rarity-legendary {
      border-color: #E3A008;
    }

    .pokemon-card.rarity-mythical {
      border-color: #C77DFF;
    }

    .pokemon-card.rarity-fossil {
      border-color: #B08968;
    }

    .pokemon-card.active.rarity-sub-legendary {
      border-color: #5EC8F2;
      box-shadow: inset 0 0 0 1px #5EC8F2;
    }

    .pokemon-card.active.rarity-legendary {
      border-color: #E3A008;
      box-shadow: inset 0 0 0 1px #E3A008;
    }

    .pokemon-card.active.rarity-mythical {
      border-color: #C77DFF;
      box-shadow: inset 0 0 0 1px #C77DFF;
    }

    .pokemon-card.active.rarity-fossil {
      border-color: #B08968;
      box-shadow: inset 0 0 0 1px #B08968;
    }

    .pokemon-card.locked {
      cursor: default;
      opacity: 0.55;
    }

    .card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      font-size: 10px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .pokemon-id {
      font-weight: 600;
      font-family: var(--vscode-editor-font-family, monospace);
    }

    .generation-chip {
      padding: 2px 6px;
      border-radius: 999px;
      border: 1px solid var(--vscode-widget-border, currentColor);
      font-size: 9px;
      white-space: nowrap;
    }

    .sprite-frame {
      position: relative;
      display: grid;
      place-items: center;
      flex: 1;
      min-height: 84px;
    }

    .sprite {
      width: 72px;
      height: 72px;
      object-fit: contain;
      image-rendering: pixelated;
    }

    .pokemon-name {
      font-size: 12px;
      font-weight: 600;
      text-align: center;
      text-transform: capitalize;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .pokemon-card.locked .pokemon-name {
      color: var(--muted);
      letter-spacing: 0.14em;
    }

    /* Always reserves the row, even empty on a locked card, so every card in
       a row stays the same height instead of locked ones looking squashed
       next to discovered ones with badges. */
    .type-badges {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 4px;
      min-height: 16px;
    }

    .type-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.04em;
      line-height: 1.3;
    }

    ${getTypeBadgeCssRules()}
    ${getSparkleBurstCssRules()}
    ${getSoundWaveCssRules()}

    /* The badge takes the generation chip's slot rather than stacking under it:
       one chip per card, no overlap, and no reflow when a card becomes active.
       The generation is still available through the filter above. */
    .active-badge {
      display: none;
      padding: 2px 8px;
      border-radius: 999px;
      background: var(--vscode-badge-background);
      color: var(--vscode-badge-foreground);
      font-size: 9px;
      font-weight: 600;
      white-space: nowrap;
    }

    .pokemon-card.active .active-badge {
      display: inline-block;
    }

    .pokemon-card.active .generation-chip {
      display: none;
    }

    @media (max-width: 640px) {
      body {
        padding: 12px;
      }

      .header {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        padding-bottom: 8px;
      }

      /* flex-basis in a row layout reads as a minimum width, but once the
         header switches to a column layout that same 260px is read as a
         minimum HEIGHT instead, which is what was ballooning the header. */
      .title-block {
        flex: 1 1 auto;
      }
    }
  </style>
</head>
<body>
  <main class="pokedex-shell">
    <header class="header">
      <div class="title-block">
        <h1>Pokechidex</h1>
        <p class="subtitle">Species you have met from a Pok&eacute;ball or an evolution. Pick one to bring it out &mdash; each line keeps its own XP, so nothing is lost when you switch. Picking one plays its cry, which you can turn off with the <code>pokechi.playCrySounds</code> setting.</p>
      </div>
      <div class="counters">
        <div class="counter">
          <span class="counter-value" id="counter-value">${discoveredCount}/${totalCount}</span>
          <span class="counter-label">Discovered</span>
        </div>
        <div class="counter">
          <span class="counter-value" id="shiny-counter-value">${shinyDiscoveredCount}/${totalCount}</span>
          <span class="counter-label">Shiny</span>
        </div>
        <div class="counter">
          <span class="counter-value" id="total-xp-value">${totalXPText}</span>
          <span class="counter-label">Total XP</span>
        </div>
      </div>
    </header>

    <div class="toolbar">
      <input
        id="search"
        class="search"
        type="search"
        placeholder="Search by name or number"
        aria-label="Search the Pokechidex"
        autocomplete="off"
      />
      <div class="filters" role="group" aria-label="Pokedex filters">
        <button type="button" class="filter-chip is-selected" data-generation="all">All</button>
        <button type="button" class="filter-chip" data-generation="1">Gen 1</button>
        <button type="button" class="filter-chip" data-generation="2">Gen 2</button>
        <button type="button" class="filter-chip" data-generation="3">Gen 3</button>
        <button type="button" class="filter-chip" data-generation="4">Gen 4</button>
        <div class="type-filter">
          <button
            type="button"
            class="filter-chip type-filter-toggle"
            id="type-filter-toggle"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Type<span class="type-filter-count" id="type-filter-count" hidden></span>
          </button>
          <div class="type-filter-menu" id="type-filter-menu" role="group" aria-label="Filter by type" hidden>
            ${renderTypeFilterOptions()}
            <button type="button" class="type-filter-clear" id="type-filter-clear">Clear</button>
          </div>
        </div>
        <label class="filter-toggle">
          <input type="checkbox" id="only-discovered" />
          Discovered only
        </label>
        <label class="filter-toggle">
          <input type="checkbox" id="only-shiny" />
          Shiny unlocked
        </label>
      </div>
    </div>

    <p class="empty-state" id="empty-state" hidden>Nothing matches that search.</p>

    <section class="grid" aria-label="Pokechidex grid">
      ${cards}
    </section>
  </main>
  <script nonce="${nonce}">
    (function () {
      var vscode;
      try {
        vscode = acquireVsCodeApi();
      } catch (e) {
        return;
      }

      var TYPE_BADGES = ${JSON.stringify(TYPE_BADGES)};
      var playCrySoundsEnabled = ${JSON.stringify(playCrySoundsEnabled)};

      var grid = document.querySelector('.grid');
      var counter = document.getElementById('counter-value');
      var shinyCounter = document.getElementById('shiny-counter-value');
      var totalXPEl = document.getElementById('total-xp-value');
      var search = document.getElementById('search');
      var emptyState = document.getElementById('empty-state');
      var onlyDiscovered = document.getElementById('only-discovered');
      var onlyShiny = document.getElementById('only-shiny');
      var typeFilterToggle = document.getElementById('type-filter-toggle');
      var typeFilterMenu = document.getElementById('type-filter-menu');
      var typeFilterCount = document.getElementById('type-filter-count');
      var typeFilterClear = document.getElementById('type-filter-clear');
      var generation = 'all';
      var selectedTypes = {};

      function applyFilters() {
        if (!grid) {
          return;
        }

        var term = (search && search.value ? search.value : '').trim().toLowerCase();
        var wrappers = grid.querySelectorAll('.pokemon-card-wrapper');
        var visible = 0;
        var hasSelectedTypes = Object.keys(selectedTypes).some(function (t) { return selectedTypes[t]; });

        Array.prototype.forEach.call(wrappers, function (wrapper) {
          var card = wrapper.querySelector('.pokemon-card');
          if (!card) {
            return;
          }

          var matchesGeneration =
            generation === 'all' || card.dataset.generation === generation;
          var matchesDiscovered =
            !onlyDiscovered || !onlyDiscovered.checked || card.classList.contains('discovered');
          var matchesShiny =
            !onlyShiny || !onlyShiny.checked || card.dataset.hasShiny === '1';
          // Undiscovered cards have no name to match on, so a search only ever
          // narrows down to what the user has already met.
          var matchesTerm =
            !term ||
            (card.dataset.name && card.dataset.name.indexOf(term) >= 0) ||
            (card.dataset.number && card.dataset.number.indexOf(term) >= 0);
          // Same reasoning as the search term: an undiscovered card has no
          // data-types either, so the type filter only ever narrows down
          // what is already discovered instead of hiding a locked card and
          // giving away whether it happens to match.
          var cardTypes = card.dataset.types ? card.dataset.types.split(' ') : [];
          var matchesTypes =
            !hasSelectedTypes ||
            !cardTypes.length ||
            cardTypes.some(function (t) { return selectedTypes[t]; });

          var show = matchesGeneration && matchesDiscovered && matchesShiny && matchesTerm && matchesTypes;
          wrapper.hidden = !show;
          if (show) {
            visible++;
          }
        });

        if (emptyState) {
          emptyState.hidden = visible > 0;
        }
      }

      if (search) {
        search.addEventListener('input', applyFilters);
      }

      if (onlyDiscovered) {
        onlyDiscovered.addEventListener('change', applyFilters);
      }

      if (onlyShiny) {
        onlyShiny.addEventListener('change', applyFilters);
      }

      Array.prototype.forEach.call(
        document.querySelectorAll('.filter-chip[data-generation]'),
        function (chip) {
          chip.addEventListener('click', function () {
            generation = chip.dataset.generation;
            Array.prototype.forEach.call(
              document.querySelectorAll('.filter-chip[data-generation]'),
              function (other) {
                other.classList.toggle('is-selected', other === chip);
              }
            );
            applyFilters();
          });
        }
      );

      function updateTypeFilterButton() {
        var selected = Object.keys(selectedTypes).filter(function (t) { return selectedTypes[t]; });
        if (typeFilterToggle) {
          typeFilterToggle.classList.toggle('is-selected', selected.length > 0);
        }
        if (typeFilterCount) {
          typeFilterCount.hidden = selected.length === 0;
          typeFilterCount.textContent = selected.length ? ' (' + selected.length + ')' : '';
        }
      }

      function setTypeFilterOpen(open) {
        if (!typeFilterMenu || !typeFilterToggle) {
          return;
        }
        typeFilterMenu.hidden = !open;
        typeFilterToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      }

      if (typeFilterToggle) {
        typeFilterToggle.addEventListener('click', function (event) {
          event.stopPropagation();
          setTypeFilterOpen(typeFilterMenu && typeFilterMenu.hidden);
        });
      }

      if (typeFilterMenu) {
        // Each option is a <label> wrapping its own checkbox, so a click
        // anywhere in the row - not just the tiny checkbox itself - already
        // toggles it natively. This only needs to stop the click from
        // bubbling to the document listener below and closing the menu.
        typeFilterMenu.addEventListener('click', function (event) {
          event.stopPropagation();
        });

        Array.prototype.forEach.call(
          typeFilterMenu.querySelectorAll('[data-type-option]'),
          function (checkbox) {
            checkbox.addEventListener('change', function () {
              selectedTypes[checkbox.value] = checkbox.checked;
              updateTypeFilterButton();
              applyFilters();
            });
          }
        );
      }

      if (typeFilterClear) {
        typeFilterClear.addEventListener('click', function (event) {
          event.stopPropagation();
          selectedTypes = {};
          Array.prototype.forEach.call(
            typeFilterMenu.querySelectorAll('[data-type-option]'),
            function (checkbox) { checkbox.checked = false; }
          );
          updateTypeFilterButton();
          applyFilters();
        });
      }

      document.addEventListener('click', function (event) {
        if (typeFilterMenu && !typeFilterMenu.hidden && !event.target.closest('.type-filter')) {
          setTypeFilterOpen(false);
        }
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          setTypeFilterOpen(false);
        }
      });

      // Same reasoning as the main panel/Explorer view: a fresh
      // HTMLAudioElement re-checks the browser's autoplay gesture policy on
      // every play() call, while a Web Audio AudioContext only needs a
      // gesture once to start running, after which playing a buffer through
      // it works the same regardless of what triggered it.
      var audioContext;
      var cryBufferCache = {};

      function loadCryBuffer(crySrc, ctx) {
        if (cryBufferCache[crySrc]) {
          return Promise.resolve(cryBufferCache[crySrc]);
        }
        return fetch(crySrc)
          .then(function (response) { return response.arrayBuffer(); })
          .then(function (arrayBuffer) { return ctx.decodeAudioData(arrayBuffer); })
          .then(function (buffer) {
            cryBufferCache[crySrc] = buffer;
            return buffer;
          });
      }

      function playCrySrc(crySrc) {
        if (!audioContext) {
          audioContext = new AudioContext();
        }
        var ctx = audioContext;
        Promise.resolve(ctx.state === 'suspended' ? ctx.resume() : undefined)
          .then(function () { return loadCryBuffer(crySrc, ctx); })
          .then(function (buffer) {
            var source = ctx.createBufferSource();
            source.buffer = buffer;
            source.connect(ctx.destination);
            source.start(0);
          })
          .catch(function (err) {
            console.warn('[pokechi] could not play cry:', err);
          });
      }

      if (grid) {
        grid.addEventListener('click', function (event) {
          var playButton = event.target.closest('[data-play-cry]');
          if (playButton) {
            event.stopPropagation();
            var crySrc = playButton.dataset.crySrc;
            if (crySrc) {
              playCrySrc(crySrc);
            }
            playSoundWaveBurst(playButton.closest('.pokemon-card-wrapper'));
            return;
          }

          var faceToggle = event.target.closest('[data-flip-target]');
          if (faceToggle) {
            event.stopPropagation();
            toggleCardFace(faceToggle);
            return;
          }

          var toggle = event.target.closest('[data-shiny-toggle]');
          if (toggle) {
            // The toggle sits next to the card button, not inside it, but
            // stop here anyway so a future markup change cannot make a
            // shiny toggle click also select the pokemon.
            event.stopPropagation();
            toggleShinySprite(toggle);
            return;
          }

          var card = event.target.closest('.pokemon-card');
          if (!card || card.disabled) {
            return;
          }

          var sprite = card.querySelector('.sprite');

          // Picking a card counts as being "picked from the Pokechidex" for
          // pokechi.playCrySounds, unlike the dedicated play button (an
          // explicit "let me hear it" click, which always plays). Playing it
          // here rather than leaving it to whatever webview ends up showing
          // the pokemon also means it does not depend on that separate
          // frame's own, independent autoplay unlock state.
          var cardWrapper = card.closest('.pokemon-card-wrapper');
          var cardPlayButton = cardWrapper && cardWrapper.querySelector('[data-play-cry]');
          if (playCrySoundsEnabled && cardPlayButton && cardPlayButton.dataset.crySrc) {
            playCrySrc(cardPlayButton.dataset.crySrc);
            playSoundWaveBurst(cardWrapper);
          }

          vscode.postMessage({
            command: 'show-pokemon',
            pokemonType: card.dataset.pokemonType,
            isShiny: !!sprite && sprite.dataset.showingShiny === '1'
          });
        });
      }

      // Clicking the currently-showing side's own button flips the card back
      // to the front. Clicking the other one while already flipped just
      // swaps which back panel is visible, no second flip needed - the card
      // is already turned around.
      function toggleCardFace(button) {
        var wrapper = button.closest('.pokemon-card-wrapper');
        var flip = wrapper && wrapper.querySelector('.card-flip');
        if (!flip) {
          return;
        }

        var target = button.dataset.flipTarget;
        var isFlipped = flip.classList.contains('is-flipped');
        var currentPanel = flip.querySelector('.back-panel:not([hidden])');
        var currentTarget = currentPanel && currentPanel.dataset.backPanel;

        if (isFlipped && currentTarget === target) {
          flip.classList.remove('is-flipped');
        } else {
          var panels = flip.querySelectorAll('.back-panel');
          Array.prototype.forEach.call(panels, function (panel) {
            panel.hidden = panel.dataset.backPanel !== target;
          });
          flip.classList.add('is-flipped');
        }

        var stillFlipped = flip.classList.contains('is-flipped');
        var activePanel = stillFlipped && flip.querySelector('.back-panel:not([hidden])');
        var activeTarget = activePanel && activePanel.dataset.backPanel;
        Array.prototype.forEach.call(
          wrapper.querySelectorAll('[data-flip-target]'),
          function (toggleButton) {
            toggleButton.setAttribute('aria-pressed', toggleButton.dataset.flipTarget === activeTarget ? 'true' : 'false');
          }
        );
      }

      function toggleShinySprite(toggle) {
        var wrapper = toggle.closest('.pokemon-card-wrapper');
        var sprite = wrapper && wrapper.querySelector('.sprite');
        if (!sprite) {
          return;
        }

        var showingShiny = sprite.dataset.showingShiny === '1';
        var nextSrc = showingShiny ? sprite.dataset.defaultSprite : sprite.dataset.shinySprite;
        if (!nextSrc) {
          return;
        }

        sprite.src = nextSrc;
        sprite.dataset.showingShiny = showingShiny ? '0' : '1';
        toggle.classList.toggle('is-shiny-active', !showingShiny);
        toggle.setAttribute('aria-pressed', showingShiny ? 'false' : 'true');

        // Only switching into shiny is worth the sparkle - toggling back to
        // default is not a reveal.
        if (!showingShiny) {
          playShinyBurst(wrapper);
        }
      }

      function playShinyBurst(wrapper) {
        var burst = wrapper && wrapper.querySelector('.sparkle-burst');
        if (!burst) {
          return;
        }

        // Removing and immediately re-adding the class in the same tick
        // would be a no-op, so the reflow in between forces the browser to
        // notice it was ever gone and actually restart the animation.
        burst.classList.remove('is-active');
        void burst.offsetWidth;
        burst.classList.add('is-active');

        clearTimeout(burst._hideTimer);
        burst._hideTimer = setTimeout(function () {
          burst.classList.remove('is-active');
        }, 1000);
      }

      // Ripples a few rings out from the sprite whenever its cry plays.
      function playSoundWaveBurst(wrapper) {
        var burst = wrapper && wrapper.querySelector('.sound-wave-burst');
        if (!burst) {
          return;
        }

        burst.classList.remove('is-active');
        void burst.offsetWidth;
        burst.classList.add('is-active');

        clearTimeout(burst._hideTimer);
        burst._hideTimer = setTimeout(function () {
          burst.classList.remove('is-active');
        }, 1000);
      }

      // Keeps a card's sprite/toggle in step with whatever is actually shown
      // on screen. Only used for the active card: browsing other cards'
      // sprites is a free cosmetic choice and must not be overridden.
      function syncShinyState(card, isShiny) {
        var wrapper = card.closest('.pokemon-card-wrapper');
        var sprite = card.querySelector('.sprite');
        var toggle = wrapper && wrapper.querySelector('[data-shiny-toggle]');
        if (!sprite) {
          return;
        }

        var targetSrc = isShiny ? sprite.dataset.shinySprite : sprite.dataset.defaultSprite;
        if (targetSrc && sprite.src !== targetSrc) {
          sprite.src = targetSrc;
        }
        sprite.dataset.showingShiny = isShiny ? '1' : '0';

        if (toggle) {
          toggle.classList.toggle('is-shiny-active', isShiny);
          toggle.setAttribute('aria-pressed', isShiny ? 'true' : 'false');
        }
      }

      // Both card-controls helpers below share this: the row only exists on
      // a card once something (the play button, the shiny toggle) needs it.
      function ensureCardControls(wrapper) {
        var controls = wrapper.querySelector('.card-controls');
        if (!controls) {
          controls = document.createElement('div');
          controls.className = 'card-controls';
          wrapper.appendChild(controls);
        }
        return controls;
      }

      // Adds the play button the moment a card becomes discovered - every
      // discovered species has a cry, so unlike the shiny toggle this is
      // unconditional.
      function ensurePlayCryButton(card, entry) {
        if (!entry.cryUri) {
          return;
        }
        var wrapper = card.closest('.pokemon-card-wrapper');
        if (!wrapper) {
          return;
        }
        var controls = ensureCardControls(wrapper);
        if (controls.querySelector('[data-play-cry]')) {
          return;
        }
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'play-cry-button';
        button.setAttribute('data-play-cry', '');
        button.setAttribute('data-cry-src', entry.cryUri);
        button.setAttribute('aria-label', 'Play ' + entry.name + "'s cry");
        button.title = 'Play cry';
        button.innerHTML = '${SOUND_ICON}';
        controls.insertBefore(button, controls.firstChild);
      }

      // Adds the toggle next to a card that just became shiny-discovered.
      // Already-shiny cards (and non-shiny ones) are left untouched.
      function ensureShinyToggle(card, entry) {
        if (!entry.isShiny || !entry.shinySpriteUri) {
          return;
        }

        card.dataset.hasShiny = '1';

        var sprite = card.querySelector('.sprite');
        if (sprite) {
          sprite.dataset.shinySprite = entry.shinySpriteUri;
        }

        var wrapper = card.closest('.pokemon-card-wrapper');
        if (!wrapper || wrapper.querySelector('[data-shiny-toggle]')) {
          return;
        }

        var controls = ensureCardControls(wrapper);
        var toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'shiny-toggle';
        toggle.setAttribute('data-shiny-toggle', '');
        toggle.setAttribute('aria-label', 'Toggle shiny sprite for ' + entry.name);
        toggle.setAttribute('aria-pressed', 'false');
        toggle.title = 'Toggle shiny sprite';
        toggle.innerHTML = '${SPARKLE_ICON}';
        controls.appendChild(toggle);
      }

      var BACK_STAT_LABELS = [
        ['hp', 'HP'], ['attack', 'ATK'], ['defense', 'DEF'],
        ['specialAttack', 'SPA'], ['specialDefense', 'SPD'], ['speed', 'SPE']
      ];

      function escapeHtmlClient(value) {
        return String(value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      }

      // Mirrors the server-rendered back face in getWebviewContent - used
      // only for a card that reaches "discovered" mid-session, since a card
      // already in the initial HTML already has this from the server.
      function buildCardFaceHtml(info, name) {
        var statsHtml = BACK_STAT_LABELS.map(function (pair) {
          return '<li><span class="back-stat-label">' + pair[1] + '</span><span class="back-stat-value">' + info.stats[pair[0]] + '</span></li>';
        }).join('');
        var movesHtml = info.moves.map(function (move) {
          var badge = TYPE_BADGES[move.type];
          var badgeHtml = badge ? '<span class="type-badge type-' + move.type + '">' + badge.abbr + '</span>' : '';
          return (
            '<li class="back-move"><div class="back-move-header">' +
            '<span class="back-move-name-group">' + badgeHtml + '<span class="back-move-name">' + escapeHtmlClient(move.name) + '</span></span>' +
            '<span class="back-move-power">' + (move.power === null ? '-' : move.power) + '</span>' +
            '</div><p class="back-move-description">' + escapeHtmlClient(move.description) + '</p></li>'
          );
        }).join('');

        return (
          '<div class="card-face card-face-back">' +
          '<div class="back-panel back-panel-info" data-back-panel="info">' +
          '<p class="back-flavor">' + escapeHtmlClient(info.flavorText) + '</p>' +
          '<ul class="back-stats">' + statsHtml + '</ul>' +
          '</div>' +
          '<div class="back-panel back-panel-moves" data-back-panel="moves" hidden>' +
          '<ul class="back-moves">' + movesHtml + '</ul>' +
          '</div>' +
          '<div class="back-footer-name">' + escapeHtmlClient(name) + '</div>' +
          '</div>'
        );
      }

      // Adds the flipped-card back and its two corner toggle buttons the
      // moment a card becomes discovered - same "unconditional once
      // discovered" reasoning as the play-cry button, since every species
      // has info and (almost always) a moveset. Both buttons sit outside
      // card-flip, at the wrapper level, same as the server-rendered ones.
      function ensureCardFace(card, entry) {
        if (!entry.info) {
          return;
        }
        var wrapper = card.closest('.pokemon-card-wrapper');
        var inner = wrapper && wrapper.querySelector('.card-flip-inner');
        if (!wrapper || !inner) {
          return;
        }

        if (!inner.querySelector('.card-face-back')) {
          inner.insertAdjacentHTML('beforeend', buildCardFaceHtml(entry.info, entry.name));
        }

        if (wrapper.querySelector('[data-flip-target]')) {
          return;
        }

        var infoButton = document.createElement('button');
        infoButton.type = 'button';
        infoButton.className = 'face-toggle face-toggle-info';
        infoButton.setAttribute('data-flip-target', 'info');
        infoButton.setAttribute('aria-label', 'Show info for ' + entry.name);
        infoButton.setAttribute('aria-pressed', 'false');
        infoButton.title = 'Info';
        infoButton.innerHTML = '${INFO_ICON}';

        var movesButton = document.createElement('button');
        movesButton.type = 'button';
        movesButton.className = 'face-toggle face-toggle-moves';
        movesButton.setAttribute('data-flip-target', 'moves');
        movesButton.setAttribute('aria-label', 'Show moves for ' + entry.name);
        movesButton.setAttribute('aria-pressed', 'false');
        movesButton.title = 'Moves';
        movesButton.innerHTML = '${ATTACK_ICON}';

        wrapper.appendChild(infoButton);
        wrapper.appendChild(movesButton);
      }

      function unlock(card, entry) {
        card.classList.remove('locked');
        card.classList.add('discovered');
        card.disabled = false;
        card.dataset.pokemonType = entry.type;
        card.dataset.types = entry.types ? entry.types.join(' ') : '';
        card.setAttribute('aria-label', 'Show ' + entry.name);

        var sprite = card.querySelector('.sprite');
        if (sprite && entry.spriteUri) {
          sprite.dataset.defaultSprite = entry.spriteUri;
          if (sprite.dataset.showingShiny !== '1' && sprite.src !== entry.spriteUri) {
            sprite.src = entry.spriteUri;
          }
        }

        card.dataset.name = entry.name.toLowerCase();

        var name = card.querySelector('.pokemon-name');
        if (name) {
          name.textContent = entry.name;
        }

        if (entry.rarity) {
          card.classList.add('rarity-' + entry.rarity);
        }

        var typeBadgesEl = card.querySelector('.type-badges');
        if (typeBadgesEl && entry.types) {
          typeBadgesEl.innerHTML = entry.types.map(function (t) {
            var badge = TYPE_BADGES[t];
            if (!badge) {
              return '';
            }
            return '<span class="type-badge type-' + t + '">' + badge.abbr + '</span>';
          }).join('');
        }

        ensurePlayCryButton(card, entry);
        ensureShinyToggle(card, entry);
        ensureCardFace(card, entry);
      }

      window.addEventListener('message', function (event) {
        var message = event.data;
        if (!message) {
          return;
        }

        if (message.command === 'pokedex-xp-update') {
          if (totalXPEl && message.data && typeof message.data.totalXPText === 'string') {
            totalXPEl.textContent = message.data.totalXPText;
          }
          return;
        }

        if (message.command === 'locate-pokemon') {
          var locateData = message.data || {};
          var target = grid && grid.querySelector('[data-pokemon-type="' + locateData.pokemonType + '"]');
          if (!target) {
            return;
          }

          // Filters are only touched if they would actually hide the
          // target - whatever the user was already searching for is left
          // alone otherwise, rather than "locating" clearing it every time.
          var term = (search && search.value ? search.value : '').trim().toLowerCase();
          var matchesGeneration =
            generation === 'all' || target.dataset.generation === generation;
          var matchesDiscovered =
            !onlyDiscovered || !onlyDiscovered.checked || target.classList.contains('discovered');
          var matchesShiny =
            !onlyShiny || !onlyShiny.checked || target.dataset.hasShiny === '1';
          var matchesTerm =
            !term ||
            (target.dataset.name && target.dataset.name.indexOf(term) >= 0) ||
            (target.dataset.number && target.dataset.number.indexOf(term) >= 0);
          var targetHasSelectedTypes = Object.keys(selectedTypes).some(function (t) { return selectedTypes[t]; });
          var targetTypes = target.dataset.types ? target.dataset.types.split(' ') : [];
          var matchesTypes =
            !targetHasSelectedTypes ||
            !targetTypes.length ||
            targetTypes.some(function (t) { return selectedTypes[t]; });

          if (!(matchesGeneration && matchesDiscovered && matchesShiny && matchesTerm && matchesTypes)) {
            generation = 'all';
            Array.prototype.forEach.call(document.querySelectorAll('.filter-chip[data-generation]'), function (chip) {
              chip.classList.toggle('is-selected', chip.dataset.generation === 'all');
            });
            if (search) {
              search.value = '';
            }
            if (onlyDiscovered) {
              onlyDiscovered.checked = false;
            }
            if (onlyShiny) {
              onlyShiny.checked = false;
            }
            selectedTypes = {};
            if (typeFilterMenu) {
              Array.prototype.forEach.call(
                typeFilterMenu.querySelectorAll('[data-type-option]'),
                function (checkbox) { checkbox.checked = false; }
              );
            }
            updateTypeFilterButton();
            applyFilters();
          }

          syncShinyState(target, !!locateData.isShiny);

          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
          target.classList.add('locate-highlight');
          clearTimeout(target._locateHighlightTimer);
          target._locateHighlightTimer = setTimeout(function () {
            target.classList.remove('locate-highlight');
          }, 2500);
          return;
        }

        if (message.command !== 'pokedex-update') {
          return;
        }

        var data = message.data;

        (data.discovered || []).forEach(function (entry) {
          var card = grid && grid.querySelector('[data-index="' + entry.index + '"]');
          if (!card) {
            return;
          }
          if (card.classList.contains('locked')) {
            unlock(card, entry);
          } else {
            ensurePlayCryButton(card, entry);
            ensureShinyToggle(card, entry);
            ensureCardFace(card, entry);
          }
        });

        var cards = grid ? grid.querySelectorAll('.pokemon-card') : [];
        Array.prototype.forEach.call(cards, function (card) {
          // Without an active type nothing is out, and locked cards have no
          // type at all, so neither may match.
          var isActive =
            !!data.activeType && card.dataset.pokemonType === data.activeType;
          card.classList.toggle('active', isActive);
          card.setAttribute('aria-pressed', isActive ? 'true' : 'false');

          if (isActive) {
            syncShinyState(card, data.activeColor === 'shiny');
          }
        });

        if (counter && typeof data.discoveredCount === 'number') {
          counter.textContent = data.discoveredCount + '/${totalCount}';
        }

        if (shinyCounter && typeof data.shinyDiscoveredCount === 'number') {
          shinyCounter.textContent = data.shinyDiscoveredCount + '/${totalCount}';
        }

        // A newly discovered species may now match the active filters.
        applyFilters();
      });
    })();
  </script>
</body>
</html>`
  }
}
