import { motion } from 'framer-motion';
import { ELEC } from '../data/electronics';
import useIntro from '../lib/useIntro';
import DomainCards from '../components/graphics/DomainCards';
import FeaturedWork from '../components/graphics/FeaturedWork';
import Team from '../components/graphics/Team';
import JoinCta from '../components/graphics/JoinCta';
import EHero from '../components/electronics/EHero';
import BuildArt from '../components/electronics/BuildArt';
import ArduinoIntro from '../components/electronics/ArduinoIntro';

export default function ElectronicsPage() {
  const [stage, done] = useIntro('electronics', 900); // Arduino boots and winks -> zoom out of the display
  const start = stage === 'intro' ? 0.92 : 1;
  return (
    <>
      <motion.div style={{ transformOrigin: '50% 0' }} initial={{ scale: start }} animate={{ scale: start }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
        <div className="wrap">
          <EHero ready={stage !== 'intro'} />
          <DomainCards services={ELEC.services} />
          <FeaturedWork items={ELEC.work} Art={BuildArt} title="// FEATURED BUILDS" />
          <Team members={ELEC.team} />
          <JoinCta label="JOIN ELECTRONICS" />
        </div>
      </motion.div>
      {stage !== 'gone' && <ArduinoIntro onDone={done} leaving={stage === 'reveal'} />}
    </>
  );
}
