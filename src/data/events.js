// Events content: edit here. Images live in src/assets/.
import posterJeopardy from '../assets/pst2.webp';
import posterRobo from '../assets/pst3.webp';
import posterShinobi from '../assets/pst4.webp';

// Register buttons go here (a route of this app). The page reads ?event=<title> and preselects it, so the title of an
// upcoming event must match one of the EVENTS in src/pages/SigninPage.jsx.
export const REGISTER_URL = '/register';
export const registerLink = (title) => `${REGISTER_URL}?event=${encodeURIComponent(title)}`;

export const HERO = {
  label: '// CLUB EVENTS',
  title: 'EVENTS',
  intro: "Workshops, contests and build nights. Join what's coming up and see what we have already done."
};

// icon: any name from components/graphics/Px.jsx (image, ui, play, chip, signal, bot)
export const UPCOMING = [
  { title: 'Web Dev Workshop', icon: 'ui', tag: 'WORKSHOP', text: 'Learn HTML, CSS, JavaScript and React by building a real website with the crew.', slots: '10 AM - 6 PM' },
  { title: 'Hack Night', icon: 'chip', tag: 'HACKATHON', text: 'Team up and build something in one night. Bring an idea and a laptop.', slots: '10 AM - 6 PM' },
  { title: 'Project Demo Day', icon: 'play', tag: 'SHOWCASE', text: 'Show what you built and get feedback from the club.', slots: '10 AM - 6 PM' }
];

export const COMPLETED = [
  { title: "Marvel Assemble: GrandMaster's Jeopardy", kind: 'QUIZ', poster: posterJeopardy, alt: "Marvel Assemble GrandMaster's Jeopardy poster",
    facts: ['Fri, 7th Feb', '11am onwards, DT-702', 'Prize pool Rs. 3000'] },
  { title: 'Robo Mania', kind: 'ROBOTICS', poster: posterRobo, alt: 'Robo Mania poster',
    facts: ['3 rounds: Kaun Banega Robopati, Rush Hour, Robo Soccer', 'Powered by Sunshine Engineering'] },
  { title: 'Shinobi Showdown', kind: 'CODING CONTEST', poster: posterShinobi, alt: 'Shinobi Showdown online coding contest poster',
    facts: ['23 April, 1PM to 4PM', 'Online coding contest', 'With Coding Ninjas'] }
];
