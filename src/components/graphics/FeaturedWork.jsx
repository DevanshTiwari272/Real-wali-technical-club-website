import { useState } from 'react';
import { motion } from 'framer-motion';
import { sm } from '../../lib/motion';
import { GFX } from '../../data/graphics';
import SecHead from './SecHead';
import WorkArt from './WorkArt';
import Px from './Px';

export default function FeaturedWork({ items = GFX.work, Art = WorkArt, title = '// FEATURED WORK' }) {
  const [i, setI] = useState(0); // current card on phones (desktop shows all three)
  const n = items.length;
  const go = (d) => setI((v) => (v + d + n) % n);
  return (
    <section className="gsec" id="work">
      <SecHead title={title} right={<a className="viewall" href="#">VIEW ALL <Px name="arrow" className="inl" /></a>} />
      <div className="work">
        {items.map((w, k) => (
          <motion.figure key={w.label} className={'wcard' + (k === i ? ' cur' : '')} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={sm(0.6, k * 0.1)}>
            <div className="br wthumb"><Art art={w.art} /></div>
            <figcaption><span>{w.label}</span><a href={w.href} aria-label={`Open ${w.label}`}><Px name="arrow" className="ext" /></a></figcaption>
          </motion.figure>
        ))}
        <button className="wnav prev" aria-label="Previous work" onClick={() => go(-1)}><Px name="arrow" className="flip" /></button>
        <button className="wnav next" aria-label="Next work" onClick={() => go(1)}><Px name="arrow" /></button>
      </div>
      <div className="dots" aria-hidden="true">{items.map((w, k) => <i key={w.label} className={k === i ? 'on' : undefined} />)}</div>
    </section>
  );
}
