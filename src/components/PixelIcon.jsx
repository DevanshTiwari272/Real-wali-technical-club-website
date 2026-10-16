// 8x8 pixel icons drawn as SVG rects (single colour, crisp edges).
const ICONS = {
  Build: ['...XX...', '.X.XX.X.', '..XXXX..', 'XXX..XXX', 'XXX..XXX', '..XXXX..', '.X.XX.X.', '...XX...'],
  Learn: ['..XXXX..', '.XXXXXX.', 'XXXXXXXX', 'XXXXXXXX', '.XXXXXX.', '..XXXX..', '...XX...', '...XX...'],
  Share: ['...XX...', '..XXXX..', '.X.XX.X.', 'X..XX..X', '...XX...', '...XX...', '..XXXX..', '.XXXXXX.']
};

export default function PixelIcon({ name }) {
  return (
    <svg viewBox="0 0 8 8" aria-hidden="true">
      {ICONS[name].flatMap((row, y) =>
        [...row].map((c, x) => (c === 'X' ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" /> : null))
      )}
    </svg>
  );
}
