import { motion } from 'framer-motion';
import { tr } from '../lib/motion';

// Scroll-in list rows. items: [{ lead, title, text }] where lead is a node (icon or label).
export default function Rows({ items }) {
  return items.map(({ lead, title, text }, i) => (
    <motion.div
      key={title}
      className="row"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={tr(0.5, i * 0.1)}
    >
      <div>{lead}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.div>
  ));
}
