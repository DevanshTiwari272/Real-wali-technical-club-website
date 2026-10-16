import { motion } from 'framer-motion';
import useIntro from '../lib/useIntro';
import GHero from '../components/graphics/GHero';
import DomainCards from '../components/graphics/DomainCards';
import FeaturedWork from '../components/graphics/FeaturedWork';
import Team from '../components/graphics/Team';
import JoinCta from '../components/graphics/JoinCta';
import PosterIntro from '../components/graphics/PosterIntro';

export default function GraphicsPage() {
  const [stage, done] = useIntro('graphics', 900); // posters stack up -> zoom into the page
  const start = stage === 'intro' ? 0.92 : 1;
  return (
    <>
      <motion.div style={{ transformOrigin: '50% 0' }} initial={{ scale: start }} animate={{ scale: start }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
        <div className="wrap">
          <GHero ready={stage !== 'intro'} />
          <DomainCards />
          <FeaturedWork />
          <Team />
          <JoinCta />
        </div>
      </motion.div>
      {stage !== 'gone' && <PosterIntro onDone={done} leaving={stage === 'reveal'} />}
    </>
  );
}
