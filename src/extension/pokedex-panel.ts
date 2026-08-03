import * as vscode from 'vscode'
import { PokemonState } from './pokemon-state'
import { generateNonce } from './nonce'
import { PokemonGeneration, PokemonType } from '../common/types'
import { POKEMON_DATA } from '../common/pokemon-data'

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

function getSpritePath(type: PokemonType): string {
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

  return `${generation}/${type}/default_idle_8fps.gif`
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
  activeType: PokemonType | undefined
}

export class PokedexPanel {
  panel: vscode.WebviewPanel | undefined
  private disposables: vscode.Disposable[] = []
  private lastSnapshot: string | undefined

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
                { pokemonType: message.pokemonType }
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
    this.disposables.forEach((disposable) => disposable.dispose())
    this.disposables = []
  }

  private getSnapshot(): PokedexSnapshot {
    const activePokemon = PokemonState.getPokemon(this.context)

    return {
      discovered: PokemonState.getPokedex(this.context),
      // A pokemon still inside its Pokeball has not been revealed yet, so it
      // must not light up its card in the grid.
      activeType:
        activePokemon && activePokemon.level > 0 ? activePokemon.type : undefined,
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
    this.setTitle(snapshot.discovered.length)
    this.panel.webview.html = this.getWebviewContent(this.panel.webview, snapshot)
  }

  // Cheap update used while the user codes. Sends only what changed, so typing
  // does not rebuild a grid of several hundred animated sprites.
  refresh(): void {
    if (!this.panel) {
      return
    }

    const snapshot = this.getSnapshot()
    const serialized = JSON.stringify(snapshot)
    if (serialized === this.lastSnapshot) {
      return
    }
    this.lastSnapshot = serialized

    const webview = this.panel.webview
    this.setTitle(snapshot.discovered.length)

    this.panel.webview.postMessage({
      command: 'pokedex-update',
      data: {
        activeType: snapshot.activeType,
        discoveredCount: snapshot.discovered.length,
        discovered: snapshot.discovered
          .filter((type) => POKEDEX_INDEX_BY_TYPE[type] !== undefined)
          .map((type) => ({
            index: POKEDEX_INDEX_BY_TYPE[type],
            type,
            name: POKEMON_DATA[type] ? POKEMON_DATA[type].name : type,
            spriteUri: this.getSpriteUri(webview, getSpritePath(type)),
          })),
      },
    })
  }

  private getWebviewContent(
    webview: vscode.Webview,
    snapshot: PokedexSnapshot
  ): string {
    const nonce = generateNonce()
    const pokedex = new Set(snapshot.discovered)
    const lockedSpriteUri = this.getSpriteUri(webview, 'pokeball.gif')
    const discoveredCount = pokedex.size
    const totalCount = POKEDEX_ENTRIES.length

    const cards = POKEDEX_ENTRIES.map((entry, index) => {
      const discovered = pokedex.has(entry.type)
      const isActive = snapshot.activeType === entry.type
      // Locked cards carry no name, sprite or species id, so the grid never
      // spoils something the user has not met yet, not even in the DOM.
      const spriteUri = discovered
        ? this.getSpriteUri(webview, getSpritePath(entry.type))
        : lockedSpriteUri
      const name = discovered ? escapeHtml(entry.name) : '???'
      const label = discovered
        ? `Show ${escapeHtml(entry.name)}${isActive ? ', currently active' : ''}`
        : 'Undiscovered pokemon'
      const cry = POKEMON_DATA[entry.type] ? POKEMON_DATA[entry.type].cry : ''
      const tooltip = discovered && cry ? ` title="${escapeHtml(cry)}"` : ''

      return `
        <button
          type="button"
          class="pokemon-card ${discovered ? 'discovered' : 'locked'}${isActive ? ' active' : ''}"
          data-index="${index}"
          data-generation="${entry.generation}"
          data-name="${discovered ? escapeHtml(entry.name.toLowerCase()) : ''}"
          data-number="${padPokemonId(entry.id)}"
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
            <img class="sprite" src="${spriteUri}" alt="" loading="lazy" />
          </div>
          <div class="pokemon-name">${name}</div>
        </button>
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

    .pokemon-card[hidden] {
      display: none;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));
      gap: 10px;
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
      <div class="counter">
        <span class="counter-value" id="counter-value">${discoveredCount}/${totalCount}</span>
        <span class="counter-label">Discovered</span>
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
      var search = document.getElementById('search');
      var emptyState = document.getElementById('empty-state');
      var onlyDiscovered = document.getElementById('only-discovered');
      var generation = 'all';

      function applyFilters() {
        if (!grid) {
          return;
        }

        var term = (search && search.value ? search.value : '').trim().toLowerCase();
        var cards = grid.querySelectorAll('.pokemon-card');
        var visible = 0;

        Array.prototype.forEach.call(cards, function (card) {
          var matchesGeneration =
            generation === 'all' || card.dataset.generation === generation;
          var matchesDiscovered =
            !onlyDiscovered || !onlyDiscovered.checked || card.classList.contains('discovered');
          // Undiscovered cards have no name to match on, so a search only ever
          // narrows down to what the user has already met.
          var matchesTerm =
            !term ||
            (card.dataset.name && card.dataset.name.indexOf(term) >= 0) ||
            (card.dataset.number && card.dataset.number.indexOf(term) >= 0);

          var show = matchesGeneration && matchesDiscovered && matchesTerm;
          card.hidden = !show;
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
          var card = event.target.closest('.pokemon-card');
          if (!card || card.disabled) {
            return;
          }

          vscode.postMessage({
            command: 'show-pokemon',
            pokemonType: card.dataset.pokemonType
          });
        });
      }

      function unlock(card, entry) {
        card.classList.remove('locked');
        card.classList.add('discovered');
        card.disabled = false;
        card.dataset.pokemonType = entry.type;
        card.setAttribute('aria-label', 'Show ' + entry.name);

        var sprite = card.querySelector('.sprite');
        if (sprite && entry.spriteUri && sprite.src !== entry.spriteUri) {
          sprite.src = entry.spriteUri;
        }

        card.dataset.name = entry.name.toLowerCase();

        var name = card.querySelector('.pokemon-name');
        if (name) {
          name.textContent = entry.name;
        }
      }

      window.addEventListener('message', function (event) {
        var message = event.data;
        if (!message || message.command !== 'pokedex-update') {
          return;
        }

        var data = message.data;

        (data.discovered || []).forEach(function (entry) {
          var card = grid && grid.querySelector('[data-index="' + entry.index + '"]');
          if (card && card.classList.contains('locked')) {
            unlock(card, entry);
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
        });

        if (counter && typeof data.discoveredCount === 'number') {
          counter.textContent = data.discoveredCount + '/${totalCount}';
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
