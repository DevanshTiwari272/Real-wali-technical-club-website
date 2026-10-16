import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DOMAINS, domainPath } from '../../data/domains';
import { scrollToSection } from '../../lib/sections';
import Px from '../graphics/Px';

// The one nav for the whole site. DOMAINS expands on click; the other items scroll the main page.
export default function SiteNav() {
  const { pathname } = useLocation();
  const [menu, setMenu] = useState(false); // phone menu
  const [dom, setDom] = useState(false); // domains dropdown
  const ddRef = useRef(null);

  useEffect(() => { setMenu(false); setDom(false); }, [pathname]);
  useEffect(() => {
    const away = (e) => { if (ddRef.current && !ddRef.current.contains(e.target)) setDom(false); };
    const esc = (e) => { if (e.key === 'Escape') { setDom(false); setMenu(false); } };
    document.addEventListener('pointerdown', away);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('pointerdown', away); document.removeEventListener('keydown', esc); };
  }, []);

  // Clicking the section you are already on just scrolls back to its top
  const same = (path) => (e) => { if (pathname === path) { e.preventDefault(); scrollToSection(path); } };
  const item = (path, label) => (
    <li>
      <Link className={'snav-link' + (pathname === path ? ' on' : '')} to={path} onClick={same(path)}>{label}</Link>
    </li>
  );
  const inDomains = pathname === '/domains' || pathname.startsWith('/domains/');

  return (
    <header className="snav">
      <div className="wrap snav-bar">
        <Link className="logo px" to="/" onClick={same('/')}><i />TECHNICAL CLUB</Link>
        <ul className={'slinks' + (menu ? ' open' : '')}>
          {item('/', 'HOME')}
          <li className="dd" ref={ddRef}>
            <button type="button" className={'snav-link' + (inDomains ? ' on' : '')} aria-expanded={dom} aria-haspopup="true" onClick={() => setDom((v) => !v)}>
              DOMAINS <Px name="arrow" className={'caret' + (dom ? ' up' : '')} />
            </button>
            {dom && (
              <motion.ul className="dd-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                {DOMAINS.map((d) => (
                  <li key={d.slug}>
                    <Link to={domainPath(d)} className={pathname === domainPath(d) ? 'cur-dom' : undefined}><Px name={d.icon} />{d.name}</Link>
                  </li>
                ))}
                <li><Link to="/domains" className="all" onClick={same('/domains')}>ALL DOMAINS</Link></li>
              </motion.ul>
            )}
          </li>
          {item('/members', 'MEMBERS')}
          {item('/events', 'EVENTS')}
          <li className="slinks-reg"><Link className="btn go snav-reg" to="/register">REGISTER</Link></li>
        </ul>
        <button type="button" className="sburger" aria-label="Menu" aria-expanded={menu} onClick={() => setMenu((v) => !v)}><Px name="menu" /></button>
      </div>
    </header>
  );
}
