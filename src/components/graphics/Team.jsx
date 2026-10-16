import { useRef } from 'react';
import { motion } from 'framer-motion';
import { sm } from '../../lib/motion';
import { GFX } from '../../data/graphics';
import Avatar from '../Avatar';
import SecHead from './SecHead';
import Px from './Px';

export default function Team({ members = GFX.team, title = '// OUR TEAM' }) {
  const row = useRef(null);
  const scroll = (d) => row.current.scrollBy({ left: d * row.current.clientWidth * 0.8, behavior: 'smooth' });
  return (
    <section className="gsec" id="team">
      <SecHead title={title} />
      <div className="team">
        <button className="tnav" aria-label="Previous" onClick={() => scroll(-1)}><Px name="arrow" className="flip" /></button>
        <div className="trow" ref={row}>
          {members.map((m, k) => (
            <motion.div key={m.name} className="member" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={sm(0.5, k * 0.08)}>
              <div className="mav"><Avatar member={m} /></div>
              <b>{m.name}</b>
              <span>{m.role}</span>
            </motion.div>
          ))}
        </div>
        <button className="tnav" aria-label="Next" onClick={() => scroll(1)}><Px name="arrow" /></button>
      </div>
    </section>
  );
}
