import { motion } from 'framer-motion';
import { sm } from '../../lib/motion';
import { UPCOMING, registerLink } from '../../data/events';
import SecHead from '../graphics/SecHead';
import Px from '../graphics/Px';
import AppLink from '../AppLink';

export default function UpcomingEvents() {
  return (
    <section className="gsec" id="upcoming">
      <SecHead title="UPCOMING EVENTS" />
      <div className="cards3">
        {UPCOMING.map((e, i) => (
          <motion.article key={e.title} className="br ev" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={sm(0.6, i * 0.1)}>
            <div className="ev-top">
              <div className="svc-ic"><Px name={e.icon} /></div>
              <span className="tag">{e.tag}</span>
            </div>
            <h3>{e.title}</h3>
            <p>{e.text}</p>
            <ul className="ev-meta"><li>SLOTS: {e.slots}</li><li>STATUS: OPEN</li></ul>
            <AppLink className="btn go ev-btn" href={registerLink(e.title)}>REGISTER <Px name="arrow" className="inl" /></AppLink>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
