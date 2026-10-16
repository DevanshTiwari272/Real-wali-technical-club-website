// Built-in pixel pictures for the featured builds. Replace with photos of your own projects later.
const R = (list) => list.map(([x, y, w, h, c], i) => <rect key={i} x={x} y={y} width={w} height={h} fill={c} />);

function Board() {
  return R([[0, 0, 40, 40, '#0d1235'], [4, 8, 32, 24, '#2a4aa8'], [4, 8, 32, 1, '#3d62c8'], [8, 14, 10, 1, '#3d62c8'], [8, 14, 1, 9, '#3d62c8'], [8, 22, 8, 1, '#3d62c8'],
    [16, 16, 8, 8, '#080b16'], [14, 17, 2, 1, '#c3cbe6'], [14, 20, 2, 1, '#c3cbe6'], [24, 17, 2, 1, '#c3cbe6'], [24, 20, 2, 1, '#c3cbe6'],
    [28, 12, 2, 2, '#eef2ff'], [28, 16, 2, 2, '#5b8cff'], [27, 22, 7, 6, '#0f1526'], [28, 23, 5, 4, '#5b8cff'], [6, 28, 22, 2, '#080b16']]);
}
function Robot() {
  return R([[0, 0, 40, 40, '#0d1235'], [0, 32, 40, 3, '#eef2ff'], [20, 26, 3, 6, '#eef2ff'], [10, 10, 3, 6, '#05070f'], [27, 10, 3, 6, '#05070f'], [10, 22, 3, 6, '#05070f'], [27, 22, 3, 6, '#05070f'],
    [12, 12, 16, 14, '#0f1526'], [12, 12, 16, 1, '#5b8cff'], [15, 15, 10, 8, '#2a4aa8'], [16, 17, 4, 3, '#080b16'], [14, 8, 2, 3, '#5b8cff'], [19, 8, 2, 3, '#5b8cff'], [24, 8, 2, 3, '#5b8cff']]);
}
const HEART = ['.XX..XX.', 'XXXXXXXX', 'XXXXXXXX', 'XXXXXXXX', '.XXXXXX.', '..XXXX..', '...XX...', '........'];
function Matrix() {
  return (
    <>
      {R([[0, 0, 40, 40, '#0d1235'], [2, 2, 36, 36, '#080b16']])}
      {HEART.flatMap((row, y) => [...row].map((c, x) => <rect key={`${x}-${y}`} x={5 + x * 4} y={5 + y * 4} width="3" height="3" fill={c === 'X' ? '#5b8cff' : '#101a3a'} />))}
    </>
  );
}

const ART = { board: Board, robot: Robot, matrix: Matrix };

export default function BuildArt({ art }) {
  const Piece = ART[art];
  return (
    <svg className="work-art" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${art} project picture`}>
      <Piece />
    </svg>
  );
}
