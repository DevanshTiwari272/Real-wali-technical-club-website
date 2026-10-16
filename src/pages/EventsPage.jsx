import { NAV, REGISTER_URL } from '../data/events';
import GNav from '../components/graphics/GNav';
import JoinCta from '../components/graphics/JoinCta';
import Footer from '../components/Footer';
import EventsHero from '../components/events/EventsHero';
import UpcomingEvents from '../components/events/UpcomingEvents';
import CompletedEvents from '../components/events/CompletedEvents';

export default function EventsPage() {
  return (
    <>
      <GNav links={NAV} />
      <div className="wrap">
        <EventsHero />
        <UpcomingEvents />
        <CompletedEvents />
        <JoinCta label="REGISTER NOW" kicker="// DON'T MISS THE NEXT ONE" href={REGISTER_URL} />
      </div>
      <Footer text="Technical Club. Events." />
    </>
  );
}
