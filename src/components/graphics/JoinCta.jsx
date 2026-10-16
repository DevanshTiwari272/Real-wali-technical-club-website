import { motion } from 'framer-motion';
import { sm, tr } from '../../lib/motion';
import Px from './Px';
import AppLink from '../AppLink';

export default function JoinCta({ label = 'JOIN GRAPHICS', kicker = '// BE A PART OF OUR CREATIVE TEAM', href = '/register' }) {
  return (
    <motion.section className="gsec joincta" id="join" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={sm(0.7)}>
      <AppLink className="br cta-box" href={href}>
        <div>
          <div className="g-label">{kicker}</div>
          <strong>{label}</strong>
        </div>
        <motion.span className="cta-arrow" whileHover={{ x: 6, transition: tr(0.2) }}><Px name="arrow" /></motion.span>
      </AppLink>
    </motion.section>
  );
}
