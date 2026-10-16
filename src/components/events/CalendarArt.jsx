// Pixel calendar for the hero. Lit days = events.
const LIT = { '4-1': '#5b8cff', '5-2': '#5b8cff', '1-3': '#5b8cff', '3-1': '#eef2ff' }; // 3-1 = today

export default function CalendarArt() {
  const days = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 7; c++) days.push(<rect key={`${c}-${r}`} x={6 + c * 7.6} y={15 + r * 7.6} width="6" height="6" fill={LIT[`${c}-${r}`] || '#16204a'} />);
  return (
    <svg className="cal" viewBox="0 0 64 48" role="img" aria-label="Pixel calendar with event days highlighted">
      <rect x="2" y="4" width="60" height="42" fill="#5b8cff" />
      <rect x="4" y="12" width="56" height="32" fill="#0f1526" />
      <rect x="14" y="0" width="3" height="8" fill="#eef2ff" /><rect x="47" y="0" width="3" height="8" fill="#eef2ff" />
      <text x="32" y="10" fontSize="4" fontFamily="'Press Start 2P',monospace" fill="#080b16" textAnchor="middle">EVENTS</text>
      {days}
    </svg>
  );
}
