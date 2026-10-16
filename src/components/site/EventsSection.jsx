import { REGISTER_URL } from '../../data/events';
import EventsHero from '../events/EventsHero';
import UpcomingEvents from '../events/UpcomingEvents';
import CompletedEvents from '../events/CompletedEvents';
import JoinCta from '../graphics/JoinCta';

export default function EventsSection() {
  return (
    <div className="wrap">
      <EventsHero />
      <UpcomingEvents />
      <CompletedEvents />
      <JoinCta label="REGISTER NOW" kicker="// DON'T MISS THE NEXT ONE" href={REGISTER_URL} />
    </div>
  );
}
