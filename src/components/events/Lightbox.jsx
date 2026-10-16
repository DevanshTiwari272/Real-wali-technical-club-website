import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Full-size poster viewer. Esc, the CLOSE button or a click outside closes it.
export default function Lightbox({ item, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);
  return (
    <motion.div className="lb" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
      <motion.img className="lb-img" src={item.poster} alt={item.alt} onClick={(e) => e.stopPropagation()} initial={{ scale: 0.92 }} animate={{ scale: 1 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} />
      <button ref={closeRef} className="btn lb-x" onClick={onClose}>CLOSE</button>
    </motion.div>
  );
}
