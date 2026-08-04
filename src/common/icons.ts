// A simple 4-point sparkle, shared by every place in the UI that marks or
// toggles something shiny (the Pokedex card toggle, the active pokemon name).
export const SPARKLE_ICON =
  '<svg viewBox="0 0 16 16" width="11" height="11" fill="currentColor" aria-hidden="true"><path d="M8 0c.3 2.7 1 4.7 2 6s3.3 1.7 6 2c-2.7.3-4.7 1-6 2s-1.7 3.3-2 6c-.3-2.7-1-4.7-2-6s-3.3-1.7-6-2c2.7-.3 4.7-1 6-2s1.7-3.3 2-6z"/></svg>'

// A target/reticle, used by the "locate in Pokechidex" button on the active
// pokemon's XP row.
export const LOCATE_ICON =
  '<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="8" cy="8" r="5.25"/><circle cx="8" cy="8" r="1.4" fill="currentColor" stroke="none"/><path d="M8 0.5v2.5M8 13v2.5M0.5 8h2.5M13 8h2.5"/></svg>'

// Scattered around a center point, roughly in a ring - not a perfect circle,
// so the burst reads as a scatter of sparkles rather than a mechanical spin.
const SPARKLE_BURST_OFFSETS: Array<[number, number]> = [
  [0, -30],
  [25, -17],
  [27, 15],
  [0, 32],
  [-27, 15],
  [-25, -17],
]

// A ring of SPARKLE_ICON instances that twinkle around whatever they are
// layered over - the shiny reveal effect, built from the same icon as the
// shiny toggle button instead of a pre-rendered animation, so it composes
// with any background (a rendered gif brought its own, usually non-
// transparent, background along with it).
//
// Every particle is an identical, class-only <span>: the offset and delay
// that make each one land somewhere different come from :nth-child rules in
// getSparkleBurstCssRules, not a style="" attribute. This extension's webview
// CSPs have no 'unsafe-inline' for style-src and a nonce only covers
// <style>/<script> elements, so a style="" attribute is dropped in its
// entirety - every particle would silently collapse onto the same
// undefined-offset spot otherwise.
export function getSparkleBurstMarkup(): string {
  return SPARKLE_BURST_OFFSETS.map(() => `<span class="sparkle-particle">${SPARKLE_ICON}</span>`).join('')
}

// Meant to be embedded inside a <style nonce="..."> block. .sparkle-burst is
// the positioned container (absolute, covering its relatively-positioned
// parent) and starts the animation on every .sparkle-particle the moment
// .is-active is added to it.
export function getSparkleBurstCssRules(): string {
  const particlePlacementRules = SPARKLE_BURST_OFFSETS.map(
    ([x, y], index) => `
    .sparkle-particle:nth-child(${index + 1}) {
      --sx: ${x}px;
      --sy: ${y}px;
      animation-delay: ${index * 70}ms;
    }`
  ).join('')

  return `
    .sparkle-burst {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 5;
    }
    .sparkle-particle {
      position: absolute;
      top: 50%;
      left: 50%;
      color: #FFD700;
      opacity: 0;
    }
    ${particlePlacementRules}
    .sparkle-burst.is-active .sparkle-particle {
      animation: sparkle-twinkle 1s ease-in-out;
    }
    @keyframes sparkle-twinkle {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) translate(calc(var(--sx) * 0.3), calc(var(--sy) * 0.3)) scale(0.3);
      }
      15% {
        opacity: 1;
        transform: translate(-50%, -50%) translate(var(--sx), var(--sy)) scale(1);
      }
      35% {
        opacity: 0.2;
        transform: translate(-50%, -50%) translate(var(--sx), var(--sy)) scale(0.7);
      }
      55% {
        opacity: 1;
        transform: translate(-50%, -50%) translate(var(--sx), var(--sy)) scale(1);
      }
      75% {
        opacity: 0.2;
        transform: translate(-50%, -50%) translate(var(--sx), var(--sy)) scale(0.7);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) translate(calc(var(--sx) * 1.15), calc(var(--sy) * 1.15)) scale(0);
      }
    }
  `
}
