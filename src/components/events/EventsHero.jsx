import { motion } from 'framer-motion';
import { sm, tr } from '../../lib/motion';
import { HERO } from '../../data/events';
import CalendarArt from './CalendarArt';

export default function EventsHero() {
  return (
    <section className="ghero">
      <motion.div className="g-text" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={sm(0.7)}>
        <div className="g-label">{HERO.label}</div>
        <h1>{HERO.title}<span className="cur" /></h1>
        <p>{HERO.intro}</p>
      </motion.div>
      <motion.div className="g-art" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={sm(0.9, 0.2)}>
        <CalendarArt />
      </motion.div>
      <motion.div className="g-btns" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={sm(0.7, 0.4)}>
        <motion.a className="btn go" href="#upcoming" whileHover={{ y: -4, transition: tr(0.2) }}>SEE UPCOMING</motion.a>
        <motion.a className="btn" href="#past" whileHover={{ y: -4, transition: tr(0.2) }}>COMPLETED EVENTS</motion.a>
      </motion.div>
    </section>
  );
}
