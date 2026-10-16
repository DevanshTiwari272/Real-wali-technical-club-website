import { img } from "framer-motion/client";
import mainpost from "../../assets/pst2.webp"
// Pixel-art scene: designer at a desk with posters. Drawn as SVG rects on a 64x42 grid.
const R = (list) => list.map(([x, y, w, h, c], i) => <rect key={i} x={x} y={y} width={w} height={h} fill={c} />);
const SKY = ['#2b2a7e', '#4a37a8', '#6d44c4', '#9a55d0', '#c76fcb', '#f09ac0'];

export default function HeroArt() {
  return (
   <img src={mainpost} style={{width:"100%",height:"100%",opacity:"70%"}} />
  );
}
