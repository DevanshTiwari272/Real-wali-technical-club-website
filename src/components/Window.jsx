import { motion } from 'framer-motion';

// Retro window with a title bar. Extra props (initial, animate...) go to the motion wrapper.
export default function Window({ title, children, ...motionProps }) {
  return (
    <motion.div className="win" {...motionProps}>
      <div className="bar">
        <i />
        <i />
        <i />
        <span>{title}</span>
      </div>
      {children}
    </motion.div>
  );
}
