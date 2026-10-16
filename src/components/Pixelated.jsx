import { useEffect, useRef } from 'react';

// Draws the image tiny on a canvas; CSS scales it up with image-rendering: pixelated.
export default function Pixelated({ src }) {
  const ref = useRef(null);
  useEffect(() => {
    const im = new Image();
    im.onload = () => {
      const c = ref.current;
      if (!c) return;
      const w = 140;
      const ht = Math.round((w * im.height) / im.width);
      c.width = w;
      c.height = ht;
      c.getContext('2d').drawImage(im, 0, 0, w, ht);
    };
    im.src = src;
  }, [src]);
  return <canvas ref={ref} className="pix" aria-hidden="true" />;
}
