// Posters shown in the intro animation, in order (first lands first, last lands on top).
// Images live in src/assets/. Add, remove or reorder entries freely.
import p1 from '../assets/pst1.webp';
import p2 from '../assets/pst2.webp';
import p3 from '../assets/pst3.webp';
import p4 from '../assets/pst4.webp';
import p5 from '../assets/pst5.png';

// pos = which part of the picture stays visible when it is cropped to the card
export const POSTERS = [
  { src: p1, alt: 'Shri Ram Navami poster', pos: 'center' },
  { src: p2, alt: 'Marvel Assemble Jeopardy event poster', pos: 'center' },
  { src: p3, alt: 'Robo Mania event poster', pos: 'center' },
  { src: p4, alt: 'Shinobi Showdown coding contest poster', pos: 'center' },
  { src: p5, alt: 'Preview of the graphics page', pos: 'top' }
];
