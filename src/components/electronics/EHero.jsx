import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { sm, tr } from '../../lib/motion';
import { ELEC } from '../../data/electronics';
import ArduinoBoard from './ArduinoBoard';
import Px from '../graphics/Px';

// `ready` turns true when the Arduino intro hands over to the page.
export default function EHero({ ready = true }) {
  const [wink, setWink] = useState(false); // the board keeps winking at visitors
  useEffect(() => {
    let t;
    const loop = () => { setWink(true); t = setTimeout(() => { setWink(false); t = setTimeout(loop, 2000); }, 500); };
    t = setTimeout(loop, 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="ghero ehero">
      <motion.div className="g-text" initial={{ opacity: 0, y: 24 }} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={sm(0.7, 0.25)}>
        <div className="g-label">{ELEC.label}</div>
        <h1>{ELEC.title}<span className="cur" /></h1>
        <p>{ELEC.intro}</p>
      </motion.div>
      <motion.div className="g-art" initial={{ opacity: 0, x: 40 }} animate={ready ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }} transition={sm(0.9, 0.35)}>
        <ArduinoBoard frame={wink ? 'wink' : 'open'} />
      </motion.div>
      <motion.div className="g-btns" initial={{ opacity: 0, y: 16 }} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={sm(0.7, 0.55)}>
        <motion.a className="btn go" href="#join" whileHover={{ y: -4, transition: tr(0.2) }}>JOIN ELECTRONICS</motion.a>
        <motion.a className="btn" href="#work" whileHover={{ y: -4, transition: tr(0.2) }}>SEE OUR BUILDS <Px name="arrow" className="inl" /></motion.a>
      </motion.div>
    </section>
  );
}
