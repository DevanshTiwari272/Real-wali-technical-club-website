import { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ORBITS, MEMBERS } from '../data/members';
import { sm } from '../lib/motion';
import Avatar from './Avatar';
import MemberInfo from './MemberInfo';

export default function OrbitShowcase() {
  const [active, setActive] = useState(0); // member shown in the centre
  const [paused, setPaused] = useState(false); // rings stop while a member is hovered / tapped
  const [line, setLine] = useState(null); // connector from member to centre
  const stage = useRef(null);
  const nodes = useRef([]);

  // while paused, rings are frozen, so measure the member's spot and draw the connector
  useLayoutEffect(() => {
    if (!paused) return setLine(null);
    const s = stage.current.getBoundingClientRect();
    const n = nodes.current[active] && nodes.current[active].getBoundingClientRect();
    if (!n) return;
    const x = n.left + n.width / 2 - s.left;
    const y = n.top + n.height / 2 - s.top;
    const cx = s.width / 2, cy = s.height / 2;
    const d = Math.hypot(cx - x, cy - y) || 1;
    const ux = (cx - x) / d, uy = (cy - y) / d;
    const a = n.width * 0.68, b = s.width * 0.1;
    setLine({ x1: x + ux * a, y1: y + uy * a, x2: cx - ux * b, y2: cy - uy * b });
  }, [paused, active]);

  const select = (id) => { setActive(id); setPaused(true); };
  const member = MEMBERS[active];

  return (
    <div className="orbit-page">
      <motion.div ref={stage} className={'orbit-stage' + (paused ? ' paused' : '')} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={sm(0.9)}>
        {ORBITS.map((r, ri) => (
          <div
            key={r.label}
            className="ring"
            style={{ '--d': r.radius * 2, '--t': `${r.seconds}s`, '--dir': r.dir === 'cw' ? 'normal' : 'reverse', '--cdir': r.dir === 'cw' ? 'reverse' : 'normal' }}
          >
            {r.members.map((m, j) => {
              const a = (j / r.members.length) * 2 * Math.PI + ri * 0.5;
              return (
                <div key={m.id} className={'slot' + (active === m.id ? ' on' : '')} style={{ left: `${50 + 50 * Math.sin(a)}%`, top: `${50 - 50 * Math.cos(a)}%` }}>
                  <div className="counter">
                    <button
                      ref={(el) => (nodes.current[m.id] = el)}
                      className="node"
                      aria-label={`${m.name}, ${m.role}`}
                      onPointerEnter={(e) => e.pointerType === 'mouse' && select(m.id)}
                      onPointerLeave={(e) => e.pointerType === 'mouse' && setPaused(false)}
                      onPointerUp={(e) => e.pointerType !== 'mouse' && (active === m.id && paused ? setPaused(false) : select(m.id))}
                      onFocus={() => select(m.id)}
                      onBlur={() => setPaused(false)}
                    >
                      <Avatar member={m} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {line && (
          <svg className="link" aria-hidden="true">
            <line {...line} />
          </svg>
        )}

        <div className="core">
          <motion.div key={active} className="core-in" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={sm(0.3)}>
            <div className="core-av"><Avatar member={member} /></div>
            <div className="core-text"><MemberInfo member={member} /></div>
          </motion.div>
        </div>
      </motion.div>

      <div className="info-m" aria-live="polite"><MemberInfo member={member} /></div>

      <div className="foot2">
        <span className="hint"><i />HOVER / TAP A MEMBER</span>
        <span className="legend">{ORBITS.map((r) => <span key={r.label}>{r.label} ({r.dir.toUpperCase()})</span>)}</span>
      </div>
    </div>
  );
}
