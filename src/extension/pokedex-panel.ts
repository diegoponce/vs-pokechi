import path = require('node:path')
import * as crypto from 'node:crypto'
import * as vscode from 'vscode'
import { PokemonState } from './pokemon-state'
import { PokemonGeneration, PokemonType } from '../common/types'
import { POKEMON_DATA } from '../common/pokemon-data'

interface PokedexEntry {
  type: PokemonType
  id: number
  name: string
  generation: PokemonGeneration
}

const POKEDEX_ENTRIES: PokedexEntry[] = Object.entries(POKEMON_DATA)
  .map(([type, data]) => ({
    type: type as PokemonType,
    id: data.id,
    name: data.name,
    generation: data.generation,
  }))
  .sort((left, right) => left.id - right.id)

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

export class PokedexPanel {
  panel: vscode.WebviewPanel | undefined

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
          enableScripts: false,
          localResourceRoots: [mediaUri],
        }
      )

    this.panel.onDidDispose(
      () => {
        this.panel = undefined
      },
      null,
      this.context.subscriptions
    )

    this.updateContent()
    return this.panel
  }

  updateContent(): void {
    if (!this.panel) {
      return
    }

    const webview = this.panel.webview
    this.panel.title = `Pokechidex (${PokemonState.getPokedex(this.context).length}/${POKEDEX_ENTRIES.length})`
    this.panel.webview.html = this.getWebviewContent(webview)
  }

  private getWebviewContent(webview: vscode.Webview): string {
    const nonce = crypto.randomBytes(16).toString('base64')
    const pokedex = new Set(PokemonState.getPokedex(this.context))
    const discoveredCount = pokedex.size
    const totalCount = POKEDEX_ENTRIES.length
    const cards = POKEDEX_ENTRIES.map((entry) => {
      const discovered = pokedex.has(entry.type)
      const spritePath = discovered ? getSpritePath(entry.type) : 'pokeball.gif'
      const spriteUri = webview.asWebviewUri(
        vscode.Uri.file(path.join(this.context.extensionPath, 'media', spritePath))
      )

      return `
        <article class="pokemon-card ${discovered ? 'discovered' : 'locked'}">
          <div class="card-top">
            <span class="pokemon-id">#${String(entry.id).padStart(3, '0')}</span>
            <span class="generation-chip">${getGenerationLabel(entry.generation)}</span>
          </div>
          <div class="sprite-frame">
            <img class="sprite" src="${spriteUri}" alt="${discovered ? entry.name : 'Locked pokemon'}" />
          </div>
          <div class="pokemon-name">${discovered ? entry.name : '???'}</div>
        </article>
      `
    }).join('')

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'nonce-${nonce}'; img-src ${webview.cspSource} https:; font-src ${webview.cspSource};">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokechidex</title>
  <style nonce="${nonce}">
    :root {
      color-scheme: dark;
      --bg: #0f172a;
      --bg-2: #111827;
      --card: rgba(15, 23, 42, 0.88);
      --card-border: rgba(148, 163, 184, 0.2);
      --text: #e2e8f0;
      --muted: #94a3b8;
      --accent: #f59e0b;
      --accent-soft: rgba(245, 158, 11, 0.18);
      --lock: rgba(148, 163, 184, 0.14);
    }

    html, body {
      margin: 0;
      padding: 0;
      min-height: 100%;
      background:
        radial-gradient(circle at top left, rgba(59, 130, 246, 0.18), transparent 28%),
        radial-gradient(circle at top right, rgba(245, 158, 11, 0.18), transparent 24%),
        linear-gradient(180deg, #0b1020 0%, #111827 100%);
      color: var(--text);
      font-family: 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    }

    body {
      padding: 20px;
      box-sizing: border-box;
    }

    .pokedex-shell {
      display: flex;
      flex-direction: column;
      gap: 16px;
      min-height: calc(100vh - 40px);
    }

    .header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 16px;
      padding: 20px 22px;
      border: 1px solid var(--card-border);
      border-radius: 20px;
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(30, 41, 59, 0.86));
      box-shadow: 0 24px 60px rgba(2, 6, 23, 0.42);
    }

    .title-block {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .eyebrow {
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.18em;
      font-size: 11px;
      font-weight: 700;
    }

    h1 {
      margin: 0;
      font-size: 28px;
      line-height: 1;
    }

    .subtitle {
      color: var(--muted);
      font-size: 13px;
      margin: 0;
      max-width: 62ch;
    }

    .counter {
      min-width: 120px;
      padding: 12px 16px;
      border-radius: 14px;
      background: var(--accent-soft);
      border: 1px solid rgba(245, 158, 11, 0.28);
      text-align: right;
    }

    .counter-value {
      display: block;
      font-size: 24px;
      font-weight: 800;
      color: white;
      line-height: 1;
    }

    .counter-label {
      display: block;
      margin-top: 4px;
      color: var(--muted);
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 14px;
      align-items: stretch;
    }

    .pokemon-card {
      position: relative;
      overflow: hidden;
      min-height: 178px;
      padding: 14px 14px 12px;
      border-radius: 18px;
      border: 1px solid var(--card-border);
      background: linear-gradient(180deg, rgba(30, 41, 59, 0.94), rgba(15, 23, 42, 0.98));
      box-shadow: 0 18px 40px rgba(2, 6, 23, 0.24);
      display: flex;
      flex-direction: column;
      gap: 10px;
      transition: transform 140ms ease, border-color 140ms ease, box-shadow 140ms ease;
    }

    .pokemon-card:hover {
      transform: translateY(-2px);
      border-color: rgba(245, 158, 11, 0.42);
      box-shadow: 0 22px 44px rgba(2, 6, 23, 0.34);
    }

    .pokemon-card.locked {
      background: linear-gradient(180deg, rgba(15, 23, 42, 0.86), rgba(15, 23, 42, 0.98));
    }

    .pokemon-card.locked::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at top, rgba(148, 163, 184, 0.08), transparent 50%);
      pointer-events: none;
    }

    .card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .pokemon-id {
      color: var(--muted);
      font-weight: 700;
    }

    .generation-chip {
      padding: 4px 8px;
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid rgba(148, 163, 184, 0.14);
      color: var(--muted);
      font-size: 10px;
      white-space: nowrap;
    }

    .sprite-frame {
      display: grid;
      place-items: center;
      flex: 1;
      min-height: 96px;
      border-radius: 14px;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0));
    }

    .sprite {
      width: 76px;
      height: 76px;
      object-fit: contain;
      image-rendering: pixelated;
      filter: drop-shadow(0 12px 18px rgba(15, 23, 42, 0.45));
    }

    .pokemon-card.locked .sprite {
      opacity: 0.92;
      transform: scale(1.05);
    }

    .pokemon-card.locked .pokemon-name {
      color: var(--muted);
      letter-spacing: 0.16em;
    }

    .pokemon-name {
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      text-transform: capitalize;
    }

    .hint {
      color: var(--muted);
      font-size: 12px;
      margin-top: -4px;
    }

    .empty-state {
      padding: 24px;
      border: 1px dashed rgba(148, 163, 184, 0.32);
      border-radius: 18px;
      color: var(--muted);
      text-align: center;
      background: rgba(15, 23, 42, 0.32);
    }

    @media (max-width: 640px) {
      body {
        padding: 12px;
      }

      .header {
        flex-direction: column;
        align-items: flex-start;
      }

      .counter {
        text-align: left;
        width: 100%;
        box-sizing: border-box;
      }

      h1 {
        font-size: 24px;
      }
    }
  </style>
</head>
<body>
  <main class="pokedex-shell">
    <section class="header">
      <div class="title-block">
        <span class="eyebrow">Pokechi collection</span>
        <h1>Pokechidex</h1>
        <p class="subtitle">Each unlocked species displays its name and sprite. Undiscovered species remain hidden until you obtain them from a Pokechi Ball or through evolution.</p>
      </div>
      <div class="counter">
        <span class="counter-value">${discoveredCount}/${totalCount}</span>
        <span class="counter-label">Discovered</span>
      </div>
    </section>

    <section class="grid" aria-label="Pokechidex grid">
      ${cards}
    </section>
  </main>
</body>
</html>`
  }
}
