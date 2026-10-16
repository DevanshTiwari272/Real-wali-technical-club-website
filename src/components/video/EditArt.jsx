// Built-in pixel pictures for the featured edits. Replace with stills from your own videos later.
const R = (list) => list.map(([x, y, w, h, c], i) => <rect key={i} x={x} y={y} width={w} height={h} fill={c} />);

function Reel() { // clapperboard
  return (
    <>
      {R([[0, 0, 40, 40, '#0d1235'], [6, 16, 28, 18, '#2a4aa8'], [6, 16, 28, 2, '#3d62c8'], [10, 23, 20, 2, '#5b8cff'], [10, 28, 13, 2, '#5b8cff']])}
      {Array.from({ length: 7 }, (_, i) => <rect key={i} x={6 + i * 4} y="9" width="4" height="6" fill={i % 2 ? '#5b8cff' : '#eef2ff'} />)}
      {R([[6, 6, 28, 3, '#080b16']])}
    </>
  );
}
function Grade() { // before / after split
  return R([[0, 0, 20, 40, '#4b5068'], [0, 26, 20, 14, '#2f3347'], [8, 12, 6, 6, '#9a9db0'], [20, 0, 20, 40, '#c25a8a'], [20, 26, 20, 14, '#1a1240'], [28, 12, 6, 6, '#ffd27a'], [19, 0, 2, 40, '#eef2ff'], [4, 4, 6, 2, '#080b16'], [30, 4, 6, 2, '#eef2ff']]);
}
function Titles() { // title text over a timeline
  return R([[0, 0, 40, 40, '#0d1235'], [6, 10, 28, 6, '#eef2ff'], [6, 19, 18, 3, '#5b8cff'], [0, 28, 40, 12, '#0f1526'], [3, 30, 14, 4, '#2a4aa8'], [18, 30, 12, 4, '#3d62c8'], [31, 30, 7, 4, '#5b8cff'], [22, 27, 1, 11, '#eef2ff']]);
}
const ART = { reel: Reel, grade: Grade, titles: Titles };

export default function EditArt({ art }) {
  const Piece = ART[art];
  return (
    <svg className="work-art" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${art} video project picture`}>
      <Piece />
    </svg>
  );
}
