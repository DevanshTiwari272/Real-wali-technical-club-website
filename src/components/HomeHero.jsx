import { motion } from 'framer-motion';
import { sm } from '../lib/motion';
import { HOME } from '../data/home';
import Window from './Window';
import Pixelated from './Pixelated';

export default function HomeHero() {
  const { title, image, alt, chips } = HOME;
  return (
    <section className="home-hero" id="about">
      <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={sm(0.7)}>
        {title}
        <span className="cur" />
      </motion.h1>

      <motion.div className="hero-stage" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={sm(0.9, 0.2)}>
        <Window title="lab_cam.exe">
          <div className="inner">
            <img src={image} alt={alt} />
            <Pixelated src={image} />
            <div className="scan" />
          </div>
        </Window>
        {chips.map((c) => (
          <div key={c.text} className={`chip ${c.cls}`}>
            {c.text}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
