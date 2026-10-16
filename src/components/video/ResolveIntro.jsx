import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import EditorUI, { TIMELINE_END } from './EditorUI';

// The opening animation: an editor opens, a clip is cut, trimmed, given a transition and a title,
// color graded, rendered, and then the page zooms out of the viewer.
// phase = what the mouse is doing, ui = what the interface shows (it follows the mouse by CLICK_LAG).
const MESSAGES = ['> IMPORT CLIPS', '> BLADE: CUT CLIP', '> RIPPLE DELETE', '> ADD TRANSITION + TITLE', '> OPEN COLOR PAGE', '> COLOR GRADE', '> DELIVER: RENDER', '> EXPORT COMPLETE'];
const TIMES = [0, 550, 1100, 1700, 2250, 2700, 3300, 4400]; // ms when the mouse starts each phase
const CLICK_LAG = 350; // the click lands when the mouse arrives
const RENDER_MS = 750;
const DONE_AT = 5200;
// mouse targets (in cqw of the editor) and playhead positions per phase
const MOUSE = [[20, 16], [50.9, 49.2], [60.6, 49.2], [32, 49.2], [62, 60.3], [14.5, 21], [74, 60.3], [74, 60.3]];
const PLAY = [12, 48.8, 30, 18, 36, 36, 0, TIMELINE_END];

export default function ResolveIntro({ onDone, leaving }) {
  const [phase, setPhase] = useState(0);
  const [ui, setUi] = useState(0);
  const [progress, setProgress] = useState(0);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    const timers = [];
    TIMES.forEach((t, i) => {
      if (i === 0) return;
      timers.push(setTimeout(() => setPhase(i), t));
      timers.push(setTimeout(() => setUi(i), t + (i === 7 ? 0 : CLICK_LAG)));
    });
    timers.push(setTimeout(() => doneRef.current(), DONE_AT));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => { // render bar
    if (ui !== 6) return;
    const t0 = Date.now();
    const id = setInterval(() => setProgress(Math.min(1, (Date.now() - t0) / RENDER_MS)), 40);
    return () => clearInterval(id);
  }, [ui]);

  const play = ui === 7 ? TIMELINE_END : ui === 6 ? progress * TIMELINE_END : PLAY[ui];
  const [x, y] = MOUSE[phase];

  return (
    <motion.div className={'ai' + (leaving ? ' out' : '')} initial={{ opacity: 1 }} animate={{ opacity: leaving ? 0 : 1 }} transition={{ duration: 0.45, delay: leaving ? 0.3 : 0, ease: 'easeIn' }}>
      <button className="btn skip" onClick={() => doneRef.current()}>SKIP</button>
      <motion.div
        className="ai-board wide"
        style={{ transformOrigin: '54% 32%' }} /* the viewer: the page zooms out of it */
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={leaving ? { opacity: 1, y: 0, scale: 9 } : { opacity: 1, y: 0, scale: 1 }}
        transition={leaving ? { duration: 0.75, ease: [0.7, 0, 0.84, 0] } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <EditorUI ui={ui} play={play} progress={progress} cursor={{ x, y, k: phase }} />
      </motion.div>
      <p className="ai-msg" aria-live="polite">{MESSAGES[phase]}<span className="cur" /></p>
    </motion.div>
  );
}
