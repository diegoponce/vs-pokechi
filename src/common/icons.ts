// A simple 4-point sparkle, shared by every place in the UI that marks or
// toggles something shiny (the Pokedex card toggle, the active pokemon name).
export const SPARKLE_ICON =
  '<svg viewBox="0 0 16 16" width="11" height="11" fill="currentColor" aria-hidden="true"><path d="M8 0c.3 2.7 1 4.7 2 6s3.3 1.7 6 2c-2.7.3-4.7 1-6 2s-1.7 3.3-2 6c-.3-2.7-1-4.7-2-6s-3.3-1.7-6-2c2.7-.3 4.7-1 6-2s1.7-3.3 2-6z"/></svg>'

// A target/reticle, used by the "locate in Pokechidex" button on the active
// pokemon's XP row.
export const LOCATE_ICON =
  '<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="8" cy="8" r="5.25"/><circle cx="8" cy="8" r="1.4" fill="currentColor" stroke="none"/><path d="M8 0.5v2.5M8 13v2.5M0.5 8h2.5M13 8h2.5"/></svg>'

// A speaker with a sound wave, used by the "play cry" button on a Pokedex card.
export const SOUND_ICON =
  '<svg viewBox="0 0 16 16" width="11" height="11" fill="currentColor" aria-hidden="true"><path d="M9 2.4v11.2a.5.5 0 0 1-.82.38L4.6 10.8H2a1 1 0 0 1-1-1V6.2a1 1 0 0 1 1-1h2.6l3.58-3.18A.5.5 0 0 1 9 2.4z"/><path d="M11.3 5.3a3.5 3.5 0 0 1 0 5.4.6.6 0 1 1-.76-.92 2.3 2.3 0 0 0 0-3.56.6.6 0 1 1 .76-.92z"/></svg>'

// A lowercase "i" in a circle, used by the "show info" button that flips a
// Pokedex card to its description/stats side.
export const INFO_ICON =
  '<svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="8" cy="8" r="6.3"/><circle cx="8" cy="5.1" r="0.9" fill="currentColor" stroke="none"/><path d="M8 7.6v4.5" stroke-linecap="round"/></svg>'

// Crossed swords, used by the "show moves" button that flips a Pokedex card
// to its representative-attacks side.
export const ATTACK_ICON = '<span aria-hidden="true">&#9876;</span>'

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

// [diameter px, border width px, delay ms] - the main outer ring plus two
// thinner ones nested inside it, all rippling outward together rather than
// three identical copies of the same ring just offset in time.
const SOUND_WAVE_RINGS: Array<[number, number, number]> = [
  [24, 2, 0],
  [16, 1.5, 120],
  [10, 1, 240],
]

// A concentric "sonar ping" of expanding, fading rings centered on whatever
// they are layered over - the cue that a cry just played, alongside the
// shiny sparkle burst rather than replacing it (a shiny reveal gets both).
export function getSoundWaveMarkup(): string {
  return SOUND_WAVE_RINGS.map(() => '<span class="sound-wave-ring"></span>').join('')
}

// Same reasoning as getSparkleBurstCssRules: every ring is an identical,
// class-only <span>, and its size/thickness/delay come from :nth-child
// rules rather than a style="" attribute this extension's webview CSPs
// would silently drop.
export function getSoundWaveCssRules(): string {
  const ringRules = SOUND_WAVE_RINGS.map(
    ([size, borderWidth, delay], index) => `
    .sound-wave-ring:nth-child(${index + 1}) {
      width: ${size}px;
      height: ${size}px;
      border-width: ${borderWidth}px;
      animation-delay: ${delay}ms;
    }`
  ).join('')

  return `
    .sound-wave-burst {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .sound-wave-ring {
      position: absolute;
      border-style: solid;
      border-color: #7FD8FF;
      border-radius: 999px;
      opacity: 0;
    }
    ${ringRules}
    .sound-wave-burst.is-active .sound-wave-ring {
      animation: sound-wave-ripple 0.9s ease-out;
    }
    @keyframes sound-wave-ripple {
      0% {
        opacity: 0.8;
        transform: scale(0.4);
      }
      70% {
        opacity: 0.35;
      }
      100% {
        opacity: 0;
        transform: scale(2.6);
      }
    }
  `
}
