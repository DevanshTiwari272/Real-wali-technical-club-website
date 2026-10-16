import { motion } from 'framer-motion';
import { sm, tr } from '../lib/motion';
import { HOME } from '../data/home';
import { MotionLink } from './AppLink';

export default function HomeAbout() {
  return (
    <motion.div className="about-row" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={sm(0.7)}>
      <p className="lead">{HOME.intro}</p>
      <div className="cta">
        <MotionLink className="btn go" to="/register" whileHover={{ x: 6, transition: tr(0.2) }}>
          JOIN THE CREW
        </MotionLink>
        <MotionLink className="btn" to="/domains" whileHover={{ x: 6, transition: tr(0.2) }}>
          WHAT WE BUILD
        </MotionLink>
      </div>
    </motion.div>
  );
}
