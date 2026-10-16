import { motion } from 'framer-motion';
import { VIDEO } from '../data/video';
import useIntro from '../lib/useIntro';
import DomainCards from '../components/graphics/DomainCards';
import FeaturedWork from '../components/graphics/FeaturedWork';
import Team from '../components/graphics/Team';
import JoinCta from '../components/graphics/JoinCta';
import VideoHero from '../components/video/VideoHero';
import EditArt from '../components/video/EditArt';
import ResolveIntro from '../components/video/ResolveIntro';

export default function VideoPage() {
  const [stage, done] = useIntro('video-editing', 900); // editor cuts, grades and renders -> zoom out of the viewer
  const start = stage === 'intro' ? 0.92 : 1;
  return (
    <>
      <motion.div style={{ transformOrigin: '50% 0' }} initial={{ scale: start }} animate={{ scale: start }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
        <div className="wrap">
          <VideoHero ready={stage !== 'intro'} />
          <DomainCards services={VIDEO.services} />
          <FeaturedWork items={VIDEO.work} Art={EditArt} title="// FEATURED EDITS" />
          <Team members={VIDEO.team} />
          <JoinCta label="JOIN VIDEO EDITING" kicker="// TELL STORIES IN MOTION" />
        </div>
      </motion.div>
      {stage !== 'gone' && <ResolveIntro onDone={done} leaving={stage === 'reveal'} />}
    </>
  );
}
