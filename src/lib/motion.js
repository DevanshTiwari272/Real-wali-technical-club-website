// Easing helpers shared by components
export const step = (t) => Math.floor(t * 6) / 6; // choppy, pixel-style easing

// pixel steps (hovers, the mouse pointer)
export const tr = (duration = 0.5, delay = 0) => ({ duration, delay, ease: step });

// smooth entrances
export const sm = (duration = 0.6, delay = 0) => ({ duration, delay, ease: [0.22, 1, 0.36, 1] });
