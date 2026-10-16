import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sm } from '../../lib/motion';
import { DOMAINS, domainPath } from '../../data/domains';
import SecHead from '../graphics/SecHead';
import Px from '../graphics/Px';

export default function DomainsSection() {
  return (
    <div className="wrap dom-sec">
      <div className="gsec">
        <SecHead title="DOMAINS" />
        <p className="sec-intro">Pick a domain to see what we build, learn and ship.</p>
        <div className="cards3 cards4">
          {DOMAINS.map((d, i) => (
            <motion.div key={d.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={sm(0.6, i * 0.1)}>
              <Link className="br dom" to={domainPath(d)}>
                <div className="svc-ic"><Px name={d.icon} /></div>
                <h3>{d.name.toUpperCase()}</h3>
                <p>{d.text}</p>
                <span className="dom-go">ENTER <Px name="arrow" className="inl" /></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
