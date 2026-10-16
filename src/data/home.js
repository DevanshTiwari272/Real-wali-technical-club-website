// Home page content: edit text here.
import heroImg from '../assets/hero.jpg';

export const HOME = {
  title: 'Build weird things. Learn out loud.',
  image: heroImg,
  alt: 'Club members building a robot car, coding and filming in the club lab',
  chips: [
    { text: 'Robots that roll', cls: 'c2' },
    { text: 'Arduino + AI workshops', cls: 'c3' }
  ],
  intro:
    'Technical Club is a student tech club where we build robots, run hackathons and host Arduino and AI workshops. Beginners and tinkerers welcome. Bring curiosity, we have the soldering irons.',
  strip: ['HACKATHON', 'WORKSHOP', 'TECH TALK', 'CLUB FEST', 'COLLABS', 'BUILD PROJECTS', 'COMMUNITY MEETUP'],
  pillars: [
    { name: 'Build', text: 'Ship real projects: robots, apps and gadgets. Progress over perfection.' },
    { name: 'Learn', text: 'Hands-on workshops and tech talks that start from zero.' },
    { name: 'Share', text: 'Demos, content and meetups so every project finds its audience.' }
  ]
};
