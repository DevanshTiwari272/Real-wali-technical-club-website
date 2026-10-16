import { HOME } from '../data/home';
import Nav from '../components/Nav';
import HomeHero from '../components/HomeHero';
import HomeAbout from '../components/HomeAbout';
import Strip from '../components/Strip';
import Section from '../components/Section';
import Rows from '../components/Rows';
import PixelIcon from '../components/PixelIcon';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const LINKS = [['About', '#about'], ['What we do', '#do'], ['Web Dev', 'webdev.html'], ['Graphics', 'graphics.html'], ['Electronics', 'electronics.html'], ['Events', 'events.html'], ['Members', 'members.html']];

export default function HomePage() {
  const rows = HOME.pillars.map((p) => ({ lead: <PixelIcon name={p.name} />, title: p.name, text: p.text }));
  return (
    <>
      <div className="wrap">
        <Nav links={LINKS} cta={{ label: 'JOIN', href: '#join' }} />
        <HomeHero />
        <HomeAbout />
      </div>
      <Strip items={HOME.strip} />
      <div className="wrap">
        <Section id="do" title="What we do">
          <Rows items={rows} />
        </Section>
        <Banner title="Ready for launch?" text="Meet us at the lab. First project is on us." cta={{ label: 'JOIN THE CLUB', href: 'register.html' }} />
      </div>
      <Footer text="Technical Club. Build, learn, share." />
    </>
  );
}
