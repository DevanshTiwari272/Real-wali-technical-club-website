import { motion } from 'framer-motion';
import { sm, tr } from '../../lib/motion';
import { GFX } from '../../data/graphics';
import HeroArt from './HeroArt';
import Px from './Px';

// `ready` turns true when the poster intro hands over to the page, which starts these entrances.
export default function GHero({ ready = true }) {
  return (
    <section className="ghero">
      <motion.div className="g-text" initial={{ opacity: 0, y: 24 }} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={sm(0.7, 0.25)}>
        <div className="g-label">{GFX.label}</div>
        <h1>{GFX.title}<span className="cur" /></h1>
        <p>{GFX.intro}</p>
      </motion.div>
      <motion.div className="g-art" initial={{ opacity: 0, x: 40 }} animate={ready ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }} transition={sm(0.9, 0.35)}>
        <HeroArt />
      </motion.div>
      <motion.div className="g-btns" initial={{ opacity: 0, y: 16 }} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={sm(0.7, 0.55)}>
        <motion.a className="btn go" href="#join" whileHover={{ y: -4, transition: tr(0.2) }}>JOIN GRAPHICS</motion.a>
        <motion.a className="btn" href="#work" whileHover={{ y: -4, transition: tr(0.2) }}>SEE OUR WORK <Px name="arrow" className="inl" /></motion.a>
      </motion.div>
    </section>
  );
}
