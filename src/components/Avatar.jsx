// Real photo if member.photo is set, otherwise a symmetric pixel avatar made from the name.
function hash(str) {
  let h = 2166136261;
  for (const c of str) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return h >>> 0;
}

export default function Avatar({ member }) {
  if (member.photo) {
    // relative paths (e.g. members/a.jpg) are served from public/, whatever route we are on
    const src = /^(https?:|data:|\/)/.test(member.photo) ? member.photo : import.meta.env.BASE_URL + member.photo;
    return <img className="av-img" src={src} alt="" draggable="false" />;
  }
  let s = hash(member.name);
  const rects = [];
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 4; x++) {
      s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
      if ((s >>> 16) & 3) {
        rects.push(<rect key={`a${x}-${y}`} x={x} y={y} width="1" height="1" />);
        rects.push(<rect key={`b${x}-${y}`} x={7 - x} y={y} width="1" height="1" />);
      }
    }
  }
  return (
    <svg className="av-svg" viewBox="0 0 8 8" aria-hidden="true">
      {rects}
    </svg>
  );
}
