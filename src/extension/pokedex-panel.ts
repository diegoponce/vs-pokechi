import * as vscode from 'vscode'
import { PokemonState } from './pokemon-state'
import { generateNonce } from './nonce'
import { PokemonColor, PokemonGeneration, PokemonType } from '../common/types'
import { POKEMON_DATA } from '../common/pokemon-data'
import { SPARKLE_ICON } from '../common/icons'

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
  }

  const colorPrefix = color === PokemonColor.shiny ? 'shiny' : 'default'
  return `${generation}/${type}/${colorPrefix}_idle_8fps.gif`
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
              isShiny,
              shinySpriteUri: isShiny
                ? this.getSpriteUri(webview, getSpritePath(type, PokemonColor.shiny))
                : undefined,
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

      // The shiny toggle lives outside the card button: interactive elements
      // cannot nest, and it must not trigger selecting the pokemon.
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

      return `
        <div class="pokemon-card-wrapper">
          <button
            type="button"
            class="pokemon-card ${discovered ? 'discovered' : 'locked'}${isActive ? ' active' : ''}"
            data-index="${index}"
            data-generation="${entry.generation}"
            data-name="${discovered ? escapeHtml(entry.name.toLowerCase()) : ''}"
            data-number="${padPokemonId(entry.id)}"
            data-has-shiny="${isShiny ? '1' : '0'}"
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
            </div>
            <div class="pokemon-name">${name}</div>
          </button>
          ${shinyToggle}
        </div>
      `
    }).join('')

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'nonce-${nonce}'; img-src ${webview.cspSource}; font-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
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
      max-width: 62ch;
      /* Clamped rather than left to wrap freely, so a narrow panel cannot
         grow the header past a couple of lines. */
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
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
      grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));
      gap: 10px;
    }

    .pokemon-card-wrapper {
      position: relative;
    }

    .pokemon-card {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-height: 160px;
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
      transition: background-color 120ms ease, border-color 120ms ease;
    }

    .shiny-toggle {
      position: absolute;
      top: 6px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
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

    .shiny-toggle:hover {
      background: var(--vscode-button-background);
      color: var(--vscode-button-foreground);
    }

    .shiny-toggle:focus-visible {
      outline: 1px solid var(--accent);
      outline-offset: 2px;
    }

    .shiny-toggle.is-shiny-active {
      background: var(--vscode-button-background);
      color: var(--vscode-button-foreground);
    }

    .pokemon-card.discovered:hover {
      background: var(--vscode-list-hoverBackground);
      border-color: var(--vscode-contrastActiveBorder, var(--accent));
    }

    .pokemon-card:focus-visible {
      outline: 1px solid var(--accent);
      outline-offset: 2px;
    }

    .pokemon-card.active {
      border-color: var(--accent);
      box-shadow: inset 0 0 0 1px var(--accent);
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
        <p class="subtitle">Species you have met from a Pok&eacute;ball or an evolution. Pick one to bring it out &mdash; each line keeps its own XP, so nothing is lost when you switch.</p>
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
      <div class="filters" role="group" aria-label="Filter by generation">
        <button type="button" class="filter-chip is-selected" data-generation="all">All</button>
        <button type="button" class="filter-chip" data-generation="1">Gen 1</button>
        <button type="button" class="filter-chip" data-generation="2">Gen 2</button>
        <button type="button" class="filter-chip" data-generation="3">Gen 3</button>
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

      var grid = document.querySelector('.grid');
      var counter = document.getElementById('counter-value');
      var shinyCounter = document.getElementById('shiny-counter-value');
      var totalXPEl = document.getElementById('total-xp-value');
      var search = document.getElementById('search');
      var emptyState = document.getElementById('empty-state');
      var onlyDiscovered = document.getElementById('only-discovered');
      var onlyShiny = document.getElementById('only-shiny');
      var generation = 'all';

      function applyFilters() {
        if (!grid) {
          return;
        }

        var term = (search && search.value ? search.value : '').trim().toLowerCase();
        var wrappers = grid.querySelectorAll('.pokemon-card-wrapper');
        var visible = 0;

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

          var show = matchesGeneration && matchesDiscovered && matchesShiny && matchesTerm;
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
        document.querySelectorAll('.filter-chip'),
        function (chip) {
          chip.addEventListener('click', function () {
            generation = chip.dataset.generation;
            Array.prototype.forEach.call(
              document.querySelectorAll('.filter-chip'),
              function (other) {
                other.classList.toggle('is-selected', other === chip);
              }
            );
            applyFilters();
          });
        }
      );

      if (grid) {
        grid.addEventListener('click', function (event) {
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

          vscode.postMessage({
            command: 'show-pokemon',
            pokemonType: card.dataset.pokemonType,
            isShiny: !!sprite && sprite.dataset.showingShiny === '1'
          });
        });
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

        var toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'shiny-toggle';
        toggle.setAttribute('data-shiny-toggle', '');
        toggle.setAttribute('aria-label', 'Toggle shiny sprite for ' + entry.name);
        toggle.setAttribute('aria-pressed', 'false');
        toggle.title = 'Toggle shiny sprite';
        toggle.innerHTML = '${SPARKLE_ICON}';
        wrapper.appendChild(toggle);
      }

      function unlock(card, entry) {
        card.classList.remove('locked');
        card.classList.add('discovered');
        card.disabled = false;
        card.dataset.pokemonType = entry.type;
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

        ensureShinyToggle(card, entry);
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
            ensureShinyToggle(card, entry);
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
