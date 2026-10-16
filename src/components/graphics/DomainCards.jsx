import { motion } from 'framer-motion';
import { sm } from '../../lib/motion';
import { GFX } from '../../data/graphics';
import SecHead from './SecHead';
import Px from './Px';

export default function DomainCards({ services = GFX.services, title = 'WHAT WE DO' }) {
  return (
    <section className="gsec" id="do">
      <SecHead title={title} />
      <div className="cards3">
        {services.map((s, i) => (
          <motion.div key={s.title} className="br svc" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={sm(0.6, i * 0.1)}>
            <div className="svc-ic"><Px name={s.icon} /></div>
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
