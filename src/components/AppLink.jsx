import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Internal paths ("/register") use the router (no page reload); anything else is a normal link.
export default function AppLink({ href, children, ...props }) {
  return /^\//.test(href) ? <Link to={href} {...props}>{children}</Link> : <a href={href} {...props}>{children}</a>;
}
export const MotionLink = motion.create(Link);
