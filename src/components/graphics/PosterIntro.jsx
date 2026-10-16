import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { POSTERS } from '../../data/posters';

// timings (seconds)
const FIRST = 0.1; // pause before the first poster
const STEP = 0.4; // gap between posters
const LAND = 0.45; // time one poster takes to fly in
const HOLD = 0.25; // pause after the last poster, then the page zooms in

// Posters fly in one after another and pile up, each tilted the opposite way to the one below.
// The last one lands straight. Then the stack zooms toward the screen and the page appears.
export default function PosterIntro({ onDone, leaving }) {
  const n = POSTERS.length;
  const [loaded, setLoaded] = useState(0);
  const [go, setGo] = useState(false);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  // start once every image has loaded (or after 3s so a slow image can't block the page)
  useEffect(() => { if (loaded >= n) setGo(true); }, [loaded, n]);
  useEffect(() => {
    const t = setTimeout(() => setGo(true), 3000);
    return () => clearTimeout(t);
  }, []);

  // after the last poster lands, load the page
  useEffect(() => {
    if (!go) return;
    const t = setTimeout(() => doneRef.current(), (FIRST + (n - 1) * STEP + LAND + HOLD) * 1000);
    return () => clearTimeout(t);
  }, [go, n]);

  return (
    <motion.div className={'pi' + (leaving ? ' out' : '')} initial={{ opacity: 1 }} animate={{ opacity: leaving ? 0 : 1 }} transition={{ duration: 0.45, delay: leaving ? 0.3 : 0, ease: 'easeIn' }}>
      <button className="btn skip" onClick={() => doneRef.current()}>SKIP</button>
      <motion.div className="pi-stack" animate={{ scale: leaving ? 4 : 1 }} transition={{ duration: 0.75, ease: [0.7, 0, 0.84, 0] }}>
        {POSTERS.map((p, i) => {
          const last = i === n - 1;
          const dir = last ? 0 : i % 2 ? 1 : -1; // alternate sides and tilt; the last one is straight
          return (
            <motion.img
              key={p.src}
              className="pi-card"
              src={p.src}
              alt={p.alt}
              draggable="false"
              style={{ objectPosition: p.pos }}
              onLoad={() => setLoaded((v) => v + 1)}
              initial={{ opacity: 0, x: `${dir * 60}vw`, y: last ? '30vh' : '12vh', rotate: dir * 28, scale: 1.08 }}
              animate={go ? { opacity: 1, x: dir * 10, y: 0, rotate: dir * (3 + (i % 3)), scale: 1 } : undefined}
              transition={{ duration: LAND, delay: FIRST + i * STEP, ease: [0.22, 1, 0.36, 1] }}
            />
          );
        })}
      </motion.div>
      <div className="pi-load">
        <span>LOADING GRAPHICS</span>
        <div className={'pi-blocks' + (go ? ' go' : '')}>
          {POSTERS.map((p, i) => <i key={p.src} style={{ '--d': `${FIRST + i * STEP + LAND * 0.6}s` }} />)}
        </div>
      </div>
    </motion.div>
  );
}
