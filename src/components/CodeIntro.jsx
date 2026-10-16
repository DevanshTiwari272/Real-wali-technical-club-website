import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { tr } from '../lib/motion';
import { CODE } from '../data/webdev';
import Window from './Window';

const MOUSE = ['X.......', 'XX......', 'XXX.....', 'XXXX....', 'XXXXX...', 'XXXXXX..', 'XXXX....', 'XX.XX...', 'X..XX...', '....XX..'];
const AWAY = { x: -280, y: -190, opacity: 0 };

function Mouse() {
  return (
    <svg viewBox="0 0 8 10" aria-hidden="true">
      {MOUSE.flatMap((row, y) =>
        [...row].map((c, x) => (c === 'X' ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" /> : null))
      )}
    </svg>
  );
}

// Opening animation: code types itself, a pixel mouse clicks RUN, then onRun() reveals the page.
export default function CodeIntro({ onRun }) {
  const [n, setN] = useState(0); // characters typed so far
  const [phase, setPhase] = useState('type'); // 'type' -> 'click'
  const [pressed, setPressed] = useState(false);
  const runRef = useRef(onRun);
  runRef.current = onRun;

  // typing
  useEffect(() => {
    const id = setInterval(() => setN((v) => Math.min(v + 1, CODE.length)), 38);
    return () => clearInterval(id);
  }, []);

  // finished typing -> short pause -> mouse appears
  useEffect(() => {
    if (n < CODE.length) return;
    const t = setTimeout(() => setPhase('click'), 500);
    return () => clearTimeout(t);
  }, [n]);

  // mouse moves, button presses, page reveals
  useEffect(() => {
    if (phase !== 'click') return;
    const a = setTimeout(() => setPressed(true), 1300);
    const b = setTimeout(() => runRef.current(), 1650);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [phase]);

  const parts = CODE.slice(0, n).split(/(<[^>]*>?)/); // tags get the accent colour

  return (
    <div>
      <button className="btn skip" onClick={onRun}>
        SKIP
      </button>
      <Window title="index.html">
        <pre className="code">
          {parts.map((p, i) => (
            <span key={i} className={p[0] === '<' ? 'tok' : undefined}>
              {p}
            </span>
          ))}
          <span className="cur" />
        </pre>
        <div className="foot">
          <span>{phase === 'type' ? 'writing code...' : 'ready. press run'}</span>
          <div className="runwrap">
            <button className={'btn go' + (pressed ? ' pressed' : '')} style={{ fontSize: '.6rem', padding: '12px 16px' }} tabIndex={-1}>
              RUN
            </button>
            <motion.div
              className="mouse"
              initial={AWAY}
              animate={phase === 'click' ? { x: 0, y: 0, opacity: 1 } : AWAY}
              transition={tr(1.1)}
            >
              <Mouse />
            </motion.div>
          </div>
        </div>
      </Window>
    </div>
  );
}
