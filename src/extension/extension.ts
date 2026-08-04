import * as vscode from 'vscode'
import { PokemonState, getRequiredXPForLevel } from './pokemon-state'
import { PokedexPanel } from './pokedex-panel'
import { generateNonce } from './nonce'
import { UserPokemon, Position } from './types'
import { PokemonColor, PokemonElementType, PokemonType } from '../common/types'
import { SPARKLE_ICON, getSparkleBurstMarkup, getSparkleBurstCssRules } from '../common/icons'
import { TYPE_BADGES, getTypeBadgeCssRules } from '../common/type-badges'
import { XPTracker, setUpdateCallbacks } from './xp-tracker'

interface PokemonSelectionFromPokedex {
  pokemonType: PokemonType
  color?: PokemonColor
}

let _isViewSwitching = false

function renderTypeBadgesMarkup(types: PokemonElementType[] | undefined): string {
  if (!types || types.length === 0) {
    return ''
  }
  return types
    .map((type) => {
      const badge = TYPE_BADGES[type]
      return badge ? `<span class="type-badge type-${type}">${badge.abbr}</span>` : ''
    })
    .join('')
}

function getConfigurationPosition(): Position {
  return vscode.workspace
    .getConfiguration('pokechi')
    .get<Position>('position', 'panel')
}

async function updateExtensionPositionContext() {
  await vscode.commands.executeCommand(
    'setContext',
    'pokechi.position',
    getConfigurationPosition()
  )
}

class PokechiContentProvider {
  protected _extensionUri: vscode.Uri
  protected _mediaUri: vscode.Uri
  protected _context: vscode.ExtensionContext

  constructor(context: vscode.ExtensionContext) {
    this._extensionUri = context.extensionUri
    this._mediaUri = vscode.Uri.joinPath(context.extensionUri, 'media')
    this._context = context
  }

  public updateViews(pokemon: UserPokemon, isXPUpdate = true) {
    if (PokechiState.panel?.panel && getConfigurationPosition() === 'panel') {
      PokechiState.panel.panel.webview.postMessage({
        command: 'update-pokemon',
        data: { userPokemon: pokemon, isXPUpdate },
      })
    }

    if (
      PokechiState.explorerView?._view &&
      getConfigurationPosition() === 'explorer'
    ) {
      PokechiState.explorerView._view.webview.postMessage({
        command: 'update-pokemon',
        data: { userPokemon: pokemon, isXPUpdate },
      })
    }
  }

  protected getWebviewContent(webview: vscode.Webview) {
    const scriptPathOnDisk = vscode.Uri.joinPath(
      this._extensionUri,
      'media',
      'main-bundle.js'
    )
    const stylesUriOnDisk = vscode.Uri.joinPath(
      this._extensionUri,
      'media',
      'main.css'
    )

    const scriptUri = webview.asWebviewUri(scriptPathOnDisk)
    const stylesUri = webview.asWebviewUri(stylesUriOnDisk)

    const basePokemonUri = webview.asWebviewUri(this._mediaUri)

    const nonce = generateNonce()
    const pokemon = PokemonState.getPokemon(this._context)

    const isExplorerView =
      getConfigurationPosition() === 'explorer' &&
      this instanceof PokechiViewProvider

    const extraStyles = isExplorerView
      ? `
      <style>
        body, html {
          padding: 0 !important;
          margin: 0 !important;
          overflow: hidden !important;
          width: 100% !important;
          height: 100% !important;
        }
        #container {
          width: 100% !important;
          height: 100% !important;
          padding: 0 !important;
          margin: 0 !important;
          overflow: hidden !important;
          position: relative !important;
        }
        #movement-container {
          padding: 0 !important;
          margin: 0 !important;
          width: calc(100% + 100px) !important;
          position: absolute !important;
          bottom: 0 !important;
          left: -15px !important;
        }
        #pokemon-container {
          position: relative !important;
          bottom: 0 !important;
        }
        img {
          image-rendering: pixelated !important;
        }
      </style>
    `
      : `
      <style>
        body {
          padding: 0;
          margin: 0;
        }
      </style>
    `

    const pokemonData = pokemon ? JSON.stringify(pokemon) : 'null'
    const requiredXP = pokemon
      ? PokemonState.getRequiredXP(pokemon)
      : getRequiredXPForLevel(0)
    // Levels 0 to 3 cover every line in the game; anything beyond is
    // extrapolated in the webview with the same formula as the host.
    const xpThresholds = JSON.stringify([0, 1, 2, 3].map(getRequiredXPForLevel))

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <script nonce="${nonce}">var exports = {};</script>
      <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${
        webview.cspSource
      } 'nonce-${nonce}'; img-src ${
      webview.cspSource
    } https:; script-src 'nonce-${nonce}';">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="${stylesUri}" rel="stylesheet">
      <title>pokechi</title>
      ${extraStyles}
      <style nonce="${nonce}">
        .xp-container {
          position: fixed;
          top: 10px;
          left: 10px;
          right: 10px;
          z-index: 9999;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 8px;
          border-radius: 5px;
          display: block;
        }
        .xp-text {
          color: white;
          font-size: 12px;
          margin-bottom: 4px;
          font-weight: bold;
        }
        .xp-progress-bg {
          width: 100%;
          height: 10px;
          background-color: rgba(100, 100, 100, 0.3);
          border-radius: 3px;
          overflow: hidden;
        }
        .xp-progress-fill {
          width: 0%;
          height: 100%;
          background-color: #0078D7;
          transition: width 0.3s ease;
        }
        .xp-progress-fill.is-max {
          background-color: #E3A008;
        }
        .xp-max {
          display: none;
          margin-left: 6px;
          letter-spacing: 0.08em;
        }
        .type-badges {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-shrink: 0;
        }
        .type-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1px 5px;
          border-radius: 3px;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.03em;
          line-height: 1.3;
        }
        /* This webview's CSP has no 'unsafe-inline' for style-src, and a nonce
           only covers <style>/<script> elements - a style="" attribute is
           dropped in its entirety, silently. Everything static lives here as
           real rules instead; only the show/hide toggles stay script-driven
           (element.style.x from JS is not affected by style-src at all). */
        .pokemon-name {
          display: none;
          align-items: center;
          justify-content: space-between;
          gap: 4px;
          color: white;
          font-size: 14px;
          margin-bottom: 4px;
          font-weight: bold;
        }
        .pokemon-name-group {
          display: flex;
          align-items: center;
          gap: 4px;
          min-width: 0;
          overflow: hidden;
        }
        #pokemon-name-text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        #pokemon-shiny-star {
          display: none;
          color: #FFD700;
          margin-left: 4px;
          flex-shrink: 0;
        }
        ${getTypeBadgeCssRules()}
        ${getSparkleBurstCssRules()}
      </style>
    </head>
    <body>
      <div class="xp-container">
        <div class="pokemon-name" id="pokemon-name">
          <span class="pokemon-name-group">
            <span id="pokemon-name-text">${pokemon && pokemon.level > 0 ? pokemon.name : ''}</span>
            <span id="pokemon-shiny-star">${SPARKLE_ICON}</span>
          </span>
          <span class="type-badges" id="pokemon-type-badges">${pokemon && pokemon.level > 0 ? renderTypeBadgesMarkup(pokemon.types) : ''}</span>
        </div>
        <div class="xp-text">XP: <span id="current-xp">0</span><span id="xp-required-wrap"> / <span id="required-xp">${requiredXP}</span></span><span class="xp-max" id="xp-max">MAX</span></div>
        <div class="xp-progress-bg">
          <div class="xp-progress-fill" id="xp-progress"></div>
        </div>
      </div>

      <script nonce="${nonce}">
        if (typeof navigator !== 'undefined' && navigator.serviceWorker) {
          navigator.serviceWorker.register = function() {
            return Promise.reject(new Error('Service workers are not supported in VS Code webviews'));
          };
        }
      </script>

      <div id="container">
        <div id="movement-container">
          <div id="transition-container">
            <img id="transition" nonce="${nonce}" />
          </div>
          <div id="pokemon-container">
            <img id="pokemon" nonce="${nonce}" />
            <div class="sparkle-burst" id="shiny-burst">${getSparkleBurstMarkup()}</div>
          </div>
        </div>
      </div>
      
      <script nonce="${nonce}" src="${scriptUri}"></script>
      <script nonce="${nonce}">
        window.isExplorerView = ${isExplorerView};
        pokechiApp.app({ basePokemonUri: '${basePokemonUri}', userPokemon: ${pokemonData} });
        
        function formatNumber(number) {
          if (number < 1000) {
            return number.toString();
          } else if (number < 10000) {
            return number.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
          } else {
            return (number / 1000).toFixed(1).replace(/\\.0$/, "") + "K";
          }
        }
        
        // Thresholds come from the extension host so this stays in step with
        // getRequiredXPForLevel in pokemon-state.ts.
        const XP_THRESHOLDS = ${xpThresholds};

        const TYPE_BADGES = ${JSON.stringify(TYPE_BADGES)};

        function getRequiredXPForLevel(level) {
          if (XP_THRESHOLDS[level] !== undefined) {
            return XP_THRESHOLDS[level];
          }
          const highest = Object.keys(XP_THRESHOLDS).length - 1;
          return XP_THRESHOLDS[highest] + (level - highest) * 50;
        }
        
        function updateXP(userPokemon) {
          const xpContainer = document.querySelector('.xp-container');
          const xpText = document.querySelector('.xp-text');
          const currentXPEl = document.getElementById('current-xp');
          const requiredXPEl = document.getElementById('required-xp');
          const xpProgressFill = document.getElementById('xp-progress');
          
          const requiredWrapEl = document.getElementById('xp-required-wrap');
          const maxEl = document.getElementById('xp-max');

          if (xpContainer && xpText && currentXPEl && requiredXPEl && xpProgressFill && userPokemon) {
            const requiredXP = getRequiredXPForLevel(userPokemon.level || 0);
            const currentXP = userPokemon.xp || 0;
            const percentage = Math.min(100, Math.max(0, (currentXP / requiredXP) * 100));

            currentXPEl.textContent = formatNumber(currentXP);
            requiredXPEl.textContent = formatNumber(requiredXP);

            // evolutionLine holds every stage, so the last level equals its
            // length. Species that never evolve reach it as soon as they hatch.
            // A Pokedex snapshot of an earlier stage always reads as MAX too,
            // since it is read-only and cannot gain any more XP.
            const line = userPokemon.evolutionLine;
            const isFinalStage = userPokemon.canGainXP === false || (Array.isArray(line) && (userPokemon.level || 0) >= line.length);

            if (requiredWrapEl && maxEl) {
              requiredWrapEl.style.display = isFinalStage ? 'none' : 'inline';
              maxEl.style.display = isFinalStage ? 'inline' : 'none';
            }

            xpProgressFill.classList.toggle('is-max', isFinalStage);
            xpProgressFill.style.width = isFinalStage ? "100%" : percentage + "%";
          }
        }
        
        function updatePokemonName(userPokemon) {
          const nameEl = document.getElementById('pokemon-name');
          const nameTextEl = document.getElementById('pokemon-name-text');
          const starEl = document.getElementById('pokemon-shiny-star');
          const typeBadgesEl = document.getElementById('pokemon-type-badges');
          if (nameEl && userPokemon) {
            if (userPokemon.level > 0) {
              if (nameTextEl) {
                nameTextEl.textContent = userPokemon.name;
              }
              if (starEl) {
                starEl.style.display = userPokemon.color === 'shiny' ? 'inline-flex' : 'none';
              }
              if (typeBadgesEl) {
                const types = userPokemon.types || [];
                typeBadgesEl.innerHTML = types.map(function (t) {
                  const badge = TYPE_BADGES[t];
                  return badge ? '<span class="type-badge type-' + t + '">' + badge.abbr + '</span>' : '';
                }).join('');
              }
              nameEl.style.display = 'flex';
            } else {
              nameEl.style.display = 'none';
            }
          }
        }
        
        if (${pokemonData}) {
          updateXP(${pokemonData});
          updatePokemonName(${pokemonData});
        }
        
        window.addEventListener('message', (event) => {
          const { command, data } = event.data;
          if (command === 'update-pokemon' && data && data.userPokemon) {
            updateXP(data.userPokemon);
            updatePokemonName(data.userPokemon);
          }
        });
      </script>
    </body>
    </html>`
  }

  protected getUnavailableContent(
    webview: vscode.Webview,
    currentPosition: Position
  ) {
    const nonce = generateNonce()

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'nonce-${nonce}'; img-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>pokechi</title>
      <style nonce="${nonce}">
        body {
          font-family: var(--vscode-font-family);
          color: var(--vscode-foreground);
          padding: 20px;
          text-align: center;
        }
        h2 {
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 15px;
        }
      </style>
    </head>
    <body>
      <h2>Pokechi is currently in ${currentPosition} mode</h2>
      <p>Your Pokechi pokemon is currently displayed in the ${currentPosition}.</p>
      <p>You can change this setting by clicking <a href="#" id="settings-link">here</a>.</p>
      
      <script nonce="${nonce}">
        if (typeof navigator !== 'undefined' && navigator.serviceWorker) {
          navigator.serviceWorker.register = function() {
            return Promise.reject(new Error('Service workers are not supported in VS Code webviews'));
          };
        }
      </script>
      
      <script nonce="${nonce}">
        document.getElementById('settings-link').addEventListener('click', () => {
          const vscode = acquireVsCodeApi();
          vscode.postMessage({ command: 'open-settings' });
        });
      </script>
    </body>
    </html>`
  }
}

class PokemonPanel extends PokechiContentProvider {
  panel: vscode.WebviewPanel | undefined

  createPanel(panel?: vscode.WebviewPanel): vscode.WebviewPanel {
    const baseMediaUri = vscode.Uri.joinPath(
      this._context.extensionUri,
      'media'
    )
    const position = getConfigurationPosition()

    this.panel =
      panel ??
      vscode.window.createWebviewPanel(
        'pokemonPanel',
        PokemonState.getPokemon(this._context)?.name || 'Pokechi',
        vscode.ViewColumn.Two,
        {
          enableScripts: true,
          localResourceRoots: [baseMediaUri],
        }
      )

    // Closing the panel clears this, and everything that pushes updates goes
    // through PokechiState, so reopening has to claim the slot back or the new
    // panel never hears about XP again.
    PokechiState.panel = this

    const pokemon = PokemonState.getPokemon(this._context)
    if (pokemon) {
      this.panel.title = pokemon.level === 0 ? 'Your Pokemon' : pokemon.name
    }

    this.panel.onDidDispose(
      () => {
        this.panel = undefined
        PokechiState.panel = undefined
      },
      null,
      this._context.subscriptions
    )

    this.panel.onDidChangeViewState(
      (e) => {
        if (this.panel?.visible && position === 'panel') {
          this.updateContent()
        }
      },
      null,
      this._context.subscriptions
    )

    this.panel.webview.onDidReceiveMessage(
      (message) => {
        switch (message.command) {
          case 'open-settings':
            vscode.commands.executeCommand(
              'workbench.action.openSettings',
              'pokechi.position'
            )
            break
        }
      },
      undefined,
      this._context.subscriptions
    )

    this.updateContent()

    return this.panel
  }

  updateContent() {
    if (!this.panel) {
      return
    }

    const position = getConfigurationPosition()

    if (position === 'explorer') {
      this.panel.webview.html = this.getUnavailableContent(
        this.panel.webview,
        'explorer'
      )
    } else {
      this.panel.webview.html = this.getWebviewContent(this.panel.webview)

      const pokemon = PokemonState.getPokemon(this._context)
      if (pokemon) {
        if (_isViewSwitching) {
          pokemon.isTransitionIn = false
        }

        const isXPUpdate = !pokemon.isTransitionIn

        // Update the panel title
        if (this.panel) {
          this.panel.title = pokemon.level === 0 ? 'Your Pokemon' : pokemon.name
        }

        this.panel.webview.postMessage({
          command: 'update-pokemon',
          data: { userPokemon: pokemon, isXPUpdate },
        })
      }
    }
  }
}

class PokechiViewProvider
  extends PokechiContentProvider
  implements vscode.WebviewViewProvider
{
  public static readonly viewType = 'pokechiView'
  _view?: vscode.WebviewView

  resolveWebviewView(
    webviewView: vscode.WebviewView,
    context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ) {
    this._view = webviewView

    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [
        this._extensionUri,
        this._mediaUri,
      ],
    }

    this.updateContent(true)

    webviewView.webview.onDidReceiveMessage((data) => {
      switch (data.command) {
        case 'alert':
          vscode.window.showInformationMessage(data.text)
          break
      }
    })

    webviewView.onDidChangeVisibility(() => {
      if (webviewView.visible) {
        this.updateContent(true)
      }
    })
  }

  // isRoutineRedraw covers rebuilds that are not a genuine reveal - the
  // webview being resolved for the first time or regaining visibility -
  // where any already-hatched pokemon (level > 0, which after a Pokedex
  // selection now includes a fresh shiny sparkle) must not replay its
  // transition just because the sidebar was hidden and shown again.
  updateContent(isRoutineRedraw = false) {
    if (!this._view) {
      return
    }

    const position = getConfigurationPosition()

    if (position === 'panel') {
      this._view.webview.html = this.getUnavailableContent(
        this._view.webview,
        'panel'
      )
    } else {
      this._view.webview.html = this.getWebviewContent(this._view.webview)

      const pokemon = PokemonState.getPokemon(this._context)
      if (pokemon) {
        if (_isViewSwitching || isRoutineRedraw) {
          pokemon.isTransitionIn = false
        }

        const isXPUpdate = !pokemon.isTransitionIn

        this._view.webview.postMessage({
          command: 'update-pokemon',
          data: { userPokemon: pokemon, isXPUpdate },
        })
      }
    }
  }
}

const PokechiState = {
  panel: undefined as PokemonPanel | undefined,
  explorerView: undefined as PokechiViewProvider | undefined,
  pokedex: undefined as PokedexPanel | undefined,
}

let xpTracker: XPTracker | undefined

// The Pokedex panel is created on demand, so this only reaches it when it is
// already open.
function refreshPokedex() {
  PokechiState.pokedex?.refresh()
}

// The scale lives on the pokemon rather than being read from settings on every
// render, so it has to be pushed to whichever view is showing.
function applyScaleFactor(context: vscode.ExtensionContext, scale: number) {
  const pokemon = PokemonState.getPokemon(context)
  if (!pokemon) {
    return
  }

  pokemon.scale = scale
  pokemon.isTransitionIn = false
  PokemonState.savePokemon(context)

  if (getConfigurationPosition() === 'panel') {
    PokechiState.panel?.updateViews(pokemon)
  } else {
    PokechiState.explorerView?.updateViews(pokemon)
  }
}

// Another window changed the shared state, so the views have to catch up.
function adoptSharedState(context: vscode.ExtensionContext) {
  const pokemon = PokemonState.getPokemon(context)

  // Pushed as a message rather than rebuilt. Reassigning the webview HTML
  // reloads the whole thing, which restarts the walk from the left edge and
  // replays the XP bar from empty - visible as the view resetting itself
  // every time the other window saves.
  if (pokemon) {
    if (getConfigurationPosition() === 'panel') {
      PokechiState.panel?.updateViews(pokemon, true)
    } else {
      PokechiState.explorerView?.updateViews(pokemon, true)
    }
  }

  if (pokemon && PokechiState.panel?.panel) {
    PokechiState.panel.panel.title =
      pokemon.level === 0 ? 'Your Pokemon' : pokemon.name
  }

  refreshPokedex()
}

export function activate(context: vscode.ExtensionContext) {
  PokemonState.initialize(context, () => adoptSharedState(context))

  let currentPokemon = PokemonState.getPokemon(context)

  if (!currentPokemon) {
    // Without this a fresh install has no state at all: the view falls back to
    // a placeholder and the XP tracker drops every event, so the extension
    // looks broken until the user finds the New Pokemon command.
    currentPokemon = PokemonState.createNewPokemon(context)
  }

  if (currentPokemon.level > 0) {
    // Anyone upgrading from an earlier version already has a pokemon out, and
    // it would otherwise be missing from an empty Pokedex.
    PokemonState.discoverPokemon(context, currentPokemon.type)
    PokemonState.rememberActivePokemon(context)
  }

  const pokemonPanel = new PokemonPanel(context)
  PokechiState.panel = pokemonPanel

  const pokechiViewProvider = new PokechiViewProvider(context)
  PokechiState.explorerView = pokechiViewProvider

  updateExtensionPositionContext()

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      PokechiViewProvider.viewType,
      pokechiViewProvider,
      {
        webviewOptions: {
          retainContextWhenHidden: true,
        },
      }
    )
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('pokechi.showPanel', async () => {
      // Asking for the panel is a clear enough request to switch to it.
      // Sending the user to the settings page instead just looked broken.
      if (getConfigurationPosition() !== 'panel') {
        _isViewSwitching = true
        await vscode.workspace
          .getConfiguration()
          .update('pokechi.position', 'panel', vscode.ConfigurationTarget.Global)
        _isViewSwitching = false
      }

      if (PokechiState.panel?.panel) {
        PokechiState.panel.panel.reveal(vscode.ViewColumn.Two)
        return
      }

      pokemonPanel.createPanel()

      // Callers post to the webview as soon as this resolves, and a webview
      // that has not finished loading drops what it is sent.
      await new Promise<void>((resolve) => setTimeout(resolve, 100))
    })
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('pokechi.showPokedex', () => {
      if (PokechiState.pokedex?.panel) {
        PokechiState.pokedex.panel.reveal(vscode.ViewColumn.Two)
        PokechiState.pokedex.refresh()
        return
      }

      PokechiState.pokedex = new PokedexPanel(context)
      PokechiState.pokedex.createPanel()
    })
  )

  context.subscriptions.push(
    vscode.commands.registerCommand(
      'pokechi.selectPokemonFromPokedex',
      async (selection: PokemonSelectionFromPokedex) => {
        const pokemon = PokemonState.selectPokemonFromPokedex(
          context,
          selection.pokemonType,
          selection.color
        )

        if (!pokemon) {
          vscode.window.showWarningMessage(
            `Could not bring out ${selection.pokemonType}.`
          )
          return
        }

        if (!pokemon.canGainXP) {
          // Not the stage the line has actually reached: a read-only
          // snapshot, so typing/saving will not grow it further. What to
          // suggest next depends on what is left to discover on this line.
          const stages = pokemon.evolutionLine as PokemonType[]
          const lineFullyDiscovered = stages.every((stage) =>
            PokemonState.isPokemonDiscovered(context, stage)
          )
          const lineFullyShiny = stages.every((stage) =>
            PokemonState.isPokemonShinyDiscovered(context, stage)
          )

          let message = `${pokemon.name} is shown at max here.`
          if (!lineFullyDiscovered) {
            message += ' Catch it again to keep raising that line.'
          } else if (!lineFullyShiny) {
            message += ' Catch it shiny to keep raising that line.'
          }

          vscode.window.showInformationMessage(message)
        }

        const position = getConfigurationPosition()

        if (position === 'panel') {
          if (!PokechiState.panel?.panel) {
            await vscode.commands.executeCommand('pokechi.showPanel')
          }
          PokechiState.panel?.panel?.reveal(vscode.ViewColumn.Two)
          PokechiState.panel?.updateContent()
        } else {
          if (!PokechiState.explorerView?._view) {
            await vscode.commands.executeCommand('workbench.view.explorer')
          }
          PokechiState.explorerView?.updateContent()
        }

        refreshPokedex()
      }
    )
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('pokechi.spawnNewPokemon', () => {
      const position = getConfigurationPosition()

      if (position === 'panel' && !PokechiState.panel?.panel) {
        vscode.commands.executeCommand('pokechi.showPanel').then(() => {
          createNewPokemon()
        })
        return
      }

      createNewPokemon()

      function createNewPokemon() {
        const pokemon = PokemonState.createNewPokemon(context)

        let activeProvider: PokechiContentProvider | undefined
        if (position === 'panel' && PokechiState.panel) {
          activeProvider = PokechiState.panel
        } else if (position === 'explorer' && PokechiState.explorerView) {
          activeProvider = PokechiState.explorerView
        }

        if (activeProvider) {
          // Refresh the whole webview so the required XP is reset
          if (position === 'panel' && PokechiState.panel?.panel) {
            PokechiState.panel.updateContent()
          } else if (position === 'explorer' && PokechiState.explorerView?._view) {
            PokechiState.explorerView.updateContent()
          }
        }

        refreshPokedex()

        if (position === 'panel' && PokechiState.panel?.panel) {
          PokechiState.panel.panel.title = 'Your Pokemon'
          PokechiState.panel.panel.webview.postMessage({
            command: 'spawn-pokemon',
            data: { userPokemon: pokemon },
          })
        } else if (
          position === 'explorer' &&
          PokechiState.explorerView?._view
        ) {
          PokechiState.explorerView._view.webview.postMessage({
            command: 'spawn-pokemon',
            data: { userPokemon: pokemon },
          })
        }
      }
    })
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('pokechi.openExplorer', async () => {
      const position = getConfigurationPosition()

      if (position !== 'explorer') {
        _isViewSwitching = true

        await vscode.workspace
          .getConfiguration()
          .update(
            'pokechi.position',
            'explorer',
            vscode.ConfigurationTarget.Global
          )

        _isViewSwitching = false

        vscode.window
          .showInformationMessage(
            'Pokechi mode changed to explorer. Look for Pokechi in the Explorer view!',
            'Show Explorer'
          )
          .then((selection) => {
            if (selection === 'Show Explorer') {
              vscode.commands.executeCommand('workbench.view.explorer')
            }
          })
      } else {
        vscode.commands.executeCommand('workbench.view.explorer')
      }
    })
  )

  if (vscode.window.registerWebviewPanelSerializer) {
    vscode.window.registerWebviewPanelSerializer('pokemonPanel', {
      async deserializeWebviewPanel(
        panel: vscode.WebviewPanel,
        _state: unknown
      ) {
        PokechiState.panel = new PokemonPanel(context)
        PokechiState.panel.createPanel(panel)
      },
    })

    vscode.window.registerWebviewPanelSerializer('pokedexPanel', {
      async deserializeWebviewPanel(
        panel: vscode.WebviewPanel,
        _state: unknown
      ) {
        PokechiState.pokedex = new PokedexPanel(context)
        PokechiState.pokedex.createPanel(panel)
      },
    })
  }

  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(
      (e: vscode.ConfigurationChangeEvent): void => {
        if (e.affectsConfiguration('pokechi.scaleFactor')) {
          const scaleFactor = vscode.workspace
            .getConfiguration()
            .get('pokechi.scaleFactor', 1.0)

          applyScaleFactor(context, scaleFactor)
        }

        if (e.affectsConfiguration('pokechi.position')) {
          _isViewSwitching = true

          updateExtensionPositionContext()

          if (PokechiState.panel?.panel) {
            PokechiState.panel.updateContent()
          }

          if (PokechiState.explorerView) {
            PokechiState.explorerView.updateContent()
          }

          const position = getConfigurationPosition()
          if (position === 'explorer') {
            vscode.commands.executeCommand('workbench.view.explorer')
          }

          _isViewSwitching = false
        }
      }
    )
  )

  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor(updateExtensionPositionContext)
  )

  context.subscriptions.push(
    vscode.window.onDidChangeWindowState((windowState) => {
      // Hand the pending XP over as soon as the user leaves, so the window they
      // switch to picks it up instead of starting from stale progress.
      if (!windowState.focused) {
        PokemonState.flush(context)
      }
    })
  )

  xpTracker = new XPTracker(context)
  
  // Configure callbacks to refresh views when a pokemon evolves
  setUpdateCallbacks(
    (pokemon: UserPokemon, isXPUpdate: boolean) => {
      if (PokechiState.panel && getConfigurationPosition() === 'panel') {
        PokechiState.panel.updateViews(pokemon, isXPUpdate)
      }
      if (PokechiState.explorerView && getConfigurationPosition() === 'explorer') {
        PokechiState.explorerView.updateViews(pokemon, isXPUpdate)
      }
      // Runs on every XP tick, so this has to stay cheap: refresh() sends a
      // small message and bails out when nothing the grid shows has changed.
      refreshPokedex()
    },
    (title: string) => {
      if (PokechiState.panel?.panel) {
        PokechiState.panel.panel.title = title
      }
    }
  )
  
  xpTracker.start()
  context.subscriptions.push({
    dispose: () => {
      if (xpTracker) {
        xpTracker.dispose()
      }
    },
  })
}

export function deactivate() {
  if (xpTracker) {
    xpTracker.dispose()
  }
}

