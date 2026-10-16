// Built-in pixel artworks for the featured work cards. Replace with your own images later.
const R = (list) => list.map(([x, y, w, h, c], i) => <rect key={i} x={x} y={y} width={w} height={h} fill={c} />);
const bands = (colors, h) => colors.map((c, i) => [0, i * h, 40, h, c]);

function Poster() {
  return (
    <>
      {R(bands(['#0f1347', '#161a5e', '#21227a', '#2d2a96', '#3b2fa8', '#4d37b8', '#6a44c6', '#8450cf'], 5))}
      {R([[5, 3, 1, 1, '#fff'], [33, 6, 1, 1, '#9ab8ff'], [27, 2, 1, 1, '#fff'], [8, 16, 1, 1, '#fff'], [34, 18, 1, 1, '#fff'], [18, 17, 4, 4, '#ffd9ec'], [0, 33, 40, 7, '#0b0f33'], [0, 31, 12, 3, '#0b0f33'], [29, 30, 11, 4, '#0b0f33'], [18, 26, 4, 4, '#05071a'], [15, 30, 10, 10, '#05071a'], [24, 31, 3, 6, '#05071a']])}
      <g fill="#fff" fontFamily="'Press Start 2P',monospace" textAnchor="middle"><text x="20" y="10" fontSize="4.2">TECHFEST</text><text x="20" y="15.5" fontSize="3.6">2025</text></g>
    </>
  );
}
function Ui() {
  return (
    <>
      {R([[0, 0, 40, 40, '#0d1235'], [0, 0, 40, 4, '#141a4a'], [2, 1.5, 1, 1, '#4f6fe0'], [4, 1.5, 1, 1, '#4f6fe0'], [4, 29, 11, 4, '#4f6fe0'], [22, 12, 14, 24, '#161c55'], [26, 16, 6, 6, '#8fb0ff'], [24, 25, 10, 1, '#4f6fe0'], [24, 28, 8, 1, '#2b3a8f'], [24, 31, 9, 1, '#2b3a8f']])}
      <g fill="#fff" fontFamily="'VT323',monospace" fontSize="5.4"><text x="4" y="14">Build</text><text x="4" y="20">Create</text><text x="4" y="26">Innovate</text></g>
    </>
  );
}
function Illustration() {
  return (
    <>
      {R(bands(['#1c1a63', '#3a2a96', '#5e3bb0', '#8a4fc4', '#b866c4', '#e48cbf', '#f6b4b8'], 4))}
      {R([[26, 8, 5, 5, '#ffe3ee'], [0, 25, 40, 3, '#2f2f88'], [8, 22, 24, 6, '#2a2a7a'], [11, 19, 18, 3, '#2a2a7a'], [14, 16, 12, 3, '#2a2a7a'], [17, 13, 6, 3, '#2a2a7a'],
          [17, 13, 6, 1, '#e8eaff'], [14, 16, 3, 1, '#e8eaff'], [23, 16, 3, 1, '#e8eaff'], [0, 28, 40, 12, '#2b2a7a'], [6, 31, 10, 1, '#6d44c4'], [22, 34, 12, 1, '#8a52d6'],
          [2, 20, 2, 10, '#10163a'], [1, 22, 4, 2, '#10163a'], [0, 24, 6, 2, '#10163a'], [0, 26, 6, 2, '#10163a'],
          [24, 24, 1, 6, '#e8505b'], [30, 24, 1, 6, '#e8505b'], [22, 23, 11, 1, '#e8505b'], [23, 25, 9, 1, '#e8505b']])}
    </>
  );
}

const ART = { poster: Poster, ui: Ui, illustration: Illustration };

export default function WorkArt({ art }) {
  const Piece = ART[art];
  return (
    <svg className="work-art" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${art} artwork`}>
      <Piece />
    </svg>
  );
}
