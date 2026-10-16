// What the display shows. The screen is a 32 x 16 grid of pixels; a cell is [column, row].
const OUTLINE = [
  '.....XXXXXX.....', '...XXX....XXX...', '..XX........XX..', '.XX..........XX.', '.X............X.', 'XX............XX', 'X..............X', 'X..............X',
  'X..............X', 'X..............X', 'XX............XX', '.X............X.', '.XX..........XX.', '..XX........XX..', '...XXX....XXX...', '.....XXXXXX.....'
];
const toCells = (rows, ox = 0, oy = 0) => rows.flatMap((r, y) => [...r].flatMap((c, x) => (c === 'X' ? [[x + ox, y + oy]] : [])));
const EYE = (x) => [[x, 5], [x + 1, 5], [x, 6], [x + 1, 6], [x, 7], [x + 1, 7]];
const WINK = [[9, 5], [10, 6], [11, 6], [12, 5]]; // closed, smiling eye
const MOUTH = [[3, 10], [12, 10], [4, 11], [11, 11], [5, 12], [6, 12], [7, 12], [8, 12], [9, 12], [10, 12]];

export function face(wink) {
  const cells = [...toCells(OUTLINE), ...EYE(4), ...(wink ? WINK : EYE(10)), ...MOUTH];
  return cells.map(([x, y]) => [x + 8, y]); // centre on the 32-wide screen
}

export function bootBar(progress) {
  const out = [];
  for (let x = 3; x <= 28; x++) out.push([x, 6], [x, 9]);
  for (let y = 7; y <= 8; y++) out.push([3, y], [28, y]);
  for (let x = 4; x < 4 + Math.floor(progress * 24); x++) out.push([x, 7], [x, 8]);
  return out;
}

// frame: 'off' | 'boot' | 'open' | 'wink'
export function frameCells(frame, progress = 0) {
  if (frame === 'boot') return bootBar(progress);
  if (frame === 'open') return face(false);
  if (frame === 'wink') return face(true);
  return [];
}
