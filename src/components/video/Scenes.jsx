// The "footage" in the editor: the club's event posters. They fill the viewer, the media pool and the timeline clips.
// Images live in src/assets/. `pos` = which part of the poster stays visible when it is cropped to widescreen.
import p1 from '../../assets/pst1.webp';
import p2 from '../../assets/pst2.webp';
import p3 from '../../assets/pst3.webp';
import p4 from '../../assets/pst4.webp';

export const CLIPS = {
  a: { src: p4, name: 'SHINOBI.MOV', pos: '50% 56%' }, // Shinobi Showdown
  b: { src: p2, name: 'JEOPARDY.MOV', pos: '50% 62%' }, // Marvel Assemble Jeopardy
  c: { src: p3, name: 'ROBOMANIA.MOV', pos: '50% 48%' }, // Robo Mania
  d: { src: p1, name: 'RAMNAVAMI.MOV', pos: '50% 40%' } // Shri Ram Navami
};

export default function Scene({ id }) {
  const c = CLIPS[id];
  return <img className="rs-scene" src={c.src} alt="" draggable="false" style={{ objectPosition: c.pos }} />;
}
