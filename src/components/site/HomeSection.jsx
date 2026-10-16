import { HOME } from '../../data/home';
import HomeHero from '../HomeHero';
import HomeAbout from '../HomeAbout';
import Strip from '../Strip';
import Section from '../Section';
import Rows from '../Rows';
import PixelIcon from '../PixelIcon';
import Banner from '../Banner';

export default function HomeSection() {
  const rows = HOME.pillars.map((p) => ({ lead: <PixelIcon name={p.name} />, title: p.name, text: p.text }));
  return (
    <>
      <div className="wrap">
        <HomeHero />
        <HomeAbout />
      </div>
      <Strip items={HOME.strip} />
      <div className="wrap">
        <Section id="do" title="What we do"><Rows items={rows} /></Section>
        <Banner title="Ready for launch?" text="Meet us at the lab. First project is on us." cta={{ label: 'JOIN THE CLUB', href: '/register' }} />
      </div>
    </>
  );
}
