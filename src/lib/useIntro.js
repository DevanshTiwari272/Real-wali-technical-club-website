import { useEffect, useRef, useState } from 'react';

// Opening animation state for a domain page. Plays once per browser session, then is skipped.
// stage: 'intro' -> 'reveal' (animation hands over) -> 'gone'. Call done() when the animation ends.
export default function useIntro(key, revealMs = 900) {
  const storeKey = `intro:${key}`;
  let seen = false;
  try { seen = sessionStorage.getItem(storeKey) === '1'; } catch { /* storage blocked: just play it */ }
  const [stage, setStage] = useState(seen ? 'gone' : 'intro');
  const ran = useRef(seen);

  const done = () => {
    if (ran.current) return;
    ran.current = true;
    try { sessionStorage.setItem(storeKey, '1'); } catch { /* ignore */ }
    setStage('reveal');
    setTimeout(() => setStage('gone'), revealMs);
  };

  useEffect(() => { // no scrolling while the animation covers the screen
    document.body.style.overflow = stage === 'gone' ? '' : 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [stage]);

  return [stage, done];
}
