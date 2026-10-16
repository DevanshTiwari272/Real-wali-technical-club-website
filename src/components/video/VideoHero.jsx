import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { sm, tr } from '../../lib/motion';
import { VIDEO } from '../../data/video';
import EditorUI, { TIMELINE_END } from './EditorUI';
import Px from '../graphics/Px';

// `ready` turns true when the editor intro hands over to the page.
// The editor on the right keeps playing: the playhead loops over the finished edit.
export default function VideoHero({ ready = true }) {
  const [p, setP] = useState(4);
  useEffect(() => {
    const id = setInterval(() => setP((v) => (v >= TIMELINE_END ? 2 : v + 0.8)), 90);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="ghero ehero vhero">
      <motion.div className="g-text" initial={{ opacity: 0, y: 24 }} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={sm(0.7, 0.25)}>
        <div className="g-label">{VIDEO.label}</div>
        <h1>{VIDEO.title}<span className="cur" /></h1>
        <p>{VIDEO.intro}</p>
      </motion.div>
      <motion.div className="g-art" initial={{ opacity: 0, x: 40 }} animate={ready ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }} transition={sm(0.9, 0.35)}>
        <EditorUI ui={3} play={p} fast />
      </motion.div>
      <motion.div className="g-btns" initial={{ opacity: 0, y: 16 }} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={sm(0.7, 0.55)}>
        <motion.a className="btn go" href="#join" whileHover={{ y: -4, transition: tr(0.2) }}>JOIN VIDEO EDITING</motion.a>
        <motion.a className="btn" href="#work" whileHover={{ y: -4, transition: tr(0.2) }}>SEE OUR EDITS <Px name="arrow" className="inl" /></motion.a>
      </motion.div>
    </section>
  );
}
