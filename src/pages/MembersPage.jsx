import Nav from '../components/Nav';
import OrbitShowcase from '../components/OrbitShowcase';
import Footer from '../components/Footer';

export default function MembersPage() {
  return (
    <>
      <div className="wrap">
        <Nav links={[['Home', 'index.html'], ['Web Dev', 'webdev.html'], ['Events', 'events.html']]} cta={{ label: 'JOIN', href: '#' }} />
      </div>
      <OrbitShowcase />
      <Footer text="Technical Club. Meet the crew." />
    </>
  );
}
