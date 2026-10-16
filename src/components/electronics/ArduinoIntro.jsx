import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ArduinoBoard from './ArduinoBoard';

// step: 0 board appears -> 1 power on -> 2 display boots -> 3 face -> 4 face winks -> page loads
const FRAMES = ['off', 'off', 'boot', 'open', 'wink'];
const MESSAGES = ['', '> POWER ON', '> LOADING DISPLAY...', '> HELLO, WORLD!', '> ;)'];
const TIMES = [0, 600, 1100, 2100, 2750]; // ms when each step starts
const DONE_AT = 3750; // after the wink, hand over to the page

export default function ArduinoIntro({ onDone, leaving }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    const timers = TIMES.slice(1).map((t, i) => setTimeout(() => setStep(i + 1), t));
    timers.push(setTimeout(() => doneRef.current(), DONE_AT));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => { // loading bar on the display
    if (step !== 2) return;
    const t0 = Date.now();
    const id = setInterval(() => setProgress(Math.min(1, (Date.now() - t0) / 900)), 50);
    return () => clearInterval(id);
  }, [step]);

  return (
    <motion.div className={'ai' + (leaving ? ' out' : '')} initial={{ opacity: 1 }} animate={{ opacity: leaving ? 0 : 1 }} transition={{ duration: 0.45, delay: leaving ? 0.3 : 0, ease: 'easeIn' }}>
      <button className="btn skip" onClick={() => doneRef.current()}>SKIP</button>
      <motion.div
        className="ai-board"
        style={{ transformOrigin: '48% 42%' }} /* the display: the page zooms out of it */
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={leaving ? { opacity: 1, y: 0, scale: 9 } : { opacity: 1, y: 0, scale: 1 }}
        transition={leaving ? { duration: 0.75, ease: [0.7, 0, 0.84, 0] } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <ArduinoBoard frame={FRAMES[step]} progress={progress} power={step >= 1} />
      </motion.div>
      <p className="ai-msg" aria-live="polite">{MESSAGES[step]}<span className="cur" /></p>
    </motion.div>
  );
}
