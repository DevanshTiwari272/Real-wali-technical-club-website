import { useEffect, useRef } from 'react';

const atBottom = () => window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
const atTop = () => window.scrollY <= 1;

// Calls next() when the person scrolls down while already at the very bottom of the page,
// and prev() when they scroll up while already at the very top. Works anywhere on the page.
// A flip needs a gesture that STARTED at the edge, so momentum from the scroll that just
// reached the edge never flips by accident: pause briefly, then scroll again.
export default function usePageFlip({ next, prev, resetKey }) {
  const fns = useRef({ next, prev });
  fns.current = { next, prev };

  useEffect(() => {
    let busy = true; // ignore input while the new page is settling
    let last = 0; // time of the previous wheel event
    let dir = 0; // direction of the current wheel gesture
    let edge = false; // did this gesture start at the edge it is pushing against?
    let acc = 0; // how far the gesture has pushed
    let touch = null;

    const flip = (d) => {
      const go = d > 0 ? fns.current.next : fns.current.prev;
      if (!go || busy) return;
      busy = true;
      go();
    };

    const ready = setTimeout(() => { busy = false; }, 900);

    const onWheel = (e) => {
      if (busy || e.ctrlKey || Math.abs(e.deltaY) < 1) return;
      const d = e.deltaY > 0 ? 1 : -1;
      const now = performance.now();
      if (now - last > 100 || d !== dir) { // a new gesture: check where it starts (before the page moves)
        dir = d;
        edge = d > 0 ? atBottom() : atTop();
        acc = 0;
      }
      last = now;
      if (!edge) return;
      acc += Math.abs(e.deltaY);
      if (acc >= 50) flip(d);
    };

    const onKey = (e) => {
      if (busy || e.repeat || e.altKey || e.ctrlKey || e.metaKey) return;
      const t = e.target;
      if (t && (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable)) return;
      const down = e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey);
      const up = e.key === 'ArrowUp' || e.key === 'PageUp' || (e.key === ' ' && e.shiftKey);
      if (down && atBottom()) flip(1);
      else if (up && atTop()) flip(-1);
    };

    const onTouchStart = (e) => {
      touch = e.touches.length === 1 ? { y: e.touches[0].clientY, bottom: atBottom(), top: atTop() } : null;
    };
    const onTouchEnd = (e) => {
      if (!touch || busy) return;
      const dy = touch.y - e.changedTouches[0].clientY; // positive: finger moved up (scrolling down)
      if (touch.bottom && atBottom() && dy > 60) flip(1);
      else if (touch.top && atTop() && dy < -60) flip(-1);
      touch = null;
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('keydown', onKey);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      clearTimeout(ready);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [resetKey]);
}
