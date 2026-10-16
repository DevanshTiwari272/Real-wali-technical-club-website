import { useState } from 'react';
import { motion } from 'framer-motion';
import { sm } from '../../lib/motion';
import { COMPLETED } from '../../data/events';
import SecHead from '../graphics/SecHead';
import Lightbox from './Lightbox';

export default function CompletedEvents() {
  const [open, setOpen] = useState(null);
  return (
    <section className="gsec" id="past">
      <SecHead title="COMPLETED EVENTS" />
      <div className="cards3">
        {COMPLETED.map((e, i) => (
          <motion.article key={e.title} className="done" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={sm(0.6, i * 0.1)}>
            <button className="br thumb" onClick={() => setOpen(e)} aria-label={`View poster: ${e.title}`}>
              <img src={e.poster} alt={e.alt} loading="lazy" />
              <span className="stamp">COMPLETED</span>
              <span className="view">VIEW POSTER</span>
            </button>
            <span className="tag">{e.kind}</span>
            <h3>{e.title}</h3>
            <ul className="facts">{e.facts.map((f) => <li key={f}>{f}</li>)}</ul>
          </motion.article>
        ))}
      </div>
      {open && <Lightbox item={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
