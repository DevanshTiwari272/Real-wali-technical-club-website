import { frameCells } from './faces';

// Pixel-art Arduino-style board with a small display on it. Drawn as SVG rects on a 120 x 76 grid.
const R = (list, tag) => list.map(([x, y, w, h, c], i) => <rect key={`${tag}${i}`} x={x} y={y} width={w} height={h} fill={c} />);
const range = (n) => Array.from({ length: n }, (_, i) => i);

// frame: 'off' | 'boot' | 'open' | 'wink'; power turns the LED on
export default function ArduinoBoard({ frame = 'off', progress = 0, power = true, className = '' }) {
  const cells = frameCells(frame, progress);
  return (
    <svg className={`ard ${className}`} viewBox="0 0 120 76" role="img" aria-label="Arduino board with a display showing a face">
      {R([[4, 6, 112, 64, '#2a4aa8'], [4, 6, 112, 2, '#3d62c8'], [4, 68, 112, 2, '#1b3a8a'],
          [7, 9, 4, 4, '#080b16'], [109, 9, 4, 4, '#080b16'], [7, 61, 4, 4, '#080b16'], [109, 61, 4, 4, '#080b16'],
          [0, 18, 20, 16, '#c3cbe6'], [2, 20, 16, 12, '#8d98bf'], [4, 24, 12, 4, '#080b16'], [0, 44, 18, 16, '#0f1526'], [2, 47, 8, 10, '#26345c'],
          [24, 12, 7, 7, '#eef2ff'], [25, 13, 5, 5, '#c3cbe6'], [22, 46, 6, 10, '#0f1526'], [22, 46, 6, 2, '#5b8cff'],
          [34, 7, 76, 4, '#080b16'], [34, 65, 76, 4, '#080b16'], [88, 30, 6, 1, '#3d62c8'], [88, 38, 6, 1, '#3d62c8'],
          [94, 24, 18, 22, '#080b16'], [96, 26, 2, 2, '#26345c'], [92, 50, 10, 5, '#c3cbe6'], [93, 51, 8, 3, '#8d98bf']], 'b')}
      {range(19).map((i) => <g key={`p${i}`}><rect x={35 + i * 4} y="8" width="2" height="2" fill="#c3cbe6" /><rect x={35 + i * 4} y="66" width="2" height="2" fill="#c3cbe6" /></g>)}
      {range(6).map((i) => <g key={`l${i}`}><rect x="92" y={25 + i * 3.5} width="2" height="1.5" fill="#c3cbe6" /><rect x="112" y={25 + i * 3.5} width="2" height="1.5" fill="#c3cbe6" /></g>)}
      {/* display module */}
      {R([[28, 14, 60, 38, '#0f1526'], [28, 14, 60, 2, '#26345c'], [32, 18, 52, 28, '#080b16'], [34, 20, 48, 24, '#02030a']], 'd')}
      {range(4).map((i) => <rect key={`dp${i}`} x={48 + i * 5} y="52" width="2" height="3" fill="#c3cbe6" />)}
      <g className="oled" transform="translate(34 20)" key={frame}>
        {cells.map(([x, y], i) => <rect key={i} x={x * 1.5} y={y * 1.5} width="1.4" height="1.4" />)}
      </g>
      {/* LEDs + label */}
      {R([[92, 58, 3, 3, '#26345c'], [97, 58, 3, 3, '#26345c']], 'e')}
      <rect className={power ? 'led-on' : ''} x="106" y="58" width="3" height="3" fill={power ? '#5b8cff' : '#26345c'} />
      <text x="60" y="63" fontSize="3.2" fontFamily="'Press Start 2P',monospace" fill="#c3d2ff" textAnchor="middle" opacity=".85">ARDUINO</text>
    </svg>
  );
}
