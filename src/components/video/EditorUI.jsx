import Scene, { CLIPS } from './Scenes';

// A pixel take on a DaVinci Resolve-style editor: media pool, viewer, inspector, timeline and page tabs.
// Everything is sized in cqw (a % of the editor's own width) so it scales as one picture.
// ui phases: 0 clips loaded | 1 razor cut | 2 ripple delete | 3 transition + title | 4 color page | 5 graded | 6 deliver render | 7 done

const TABS = ['MEDIA', 'CUT', 'EDIT', 'COLOR', 'DELIVER'];
const WAVE = Array.from({ length: 46 }, (_, i) => 18 + Math.round(70 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.45))));

// where each V1 clip sits (% of the timeline) at each phase
export function layout(ui) {
  const cut = ui >= 1;
  const rip = ui >= 2;
  return {
    a: { l: 0, w: 28 },
    b1: { l: rip ? 28.6 : 30, w: 18 },
    b2: { l: cut ? 48.8 : 48, w: cut ? 21.2 : 22, gone: rip },
    c: { l: rip ? 47.2 : 76, w: 24 },
    end: rip ? 71.2 : 100
  };
}
export function sceneAt(ui, p) {
  const L = layout(ui);
  if (p < L.a.l + L.a.w) return 'a';
  if (p >= L.c.l) return 'c';
  return 'b';
}
export const TIMELINE_END = 71.2;

const fmt = (p) => { // timecode from playhead %
  const f = Math.round((p / 100) * 30 * 12);
  return `00:00:${String(Math.floor(f / 30)).padStart(2, '0')}:${String(f % 30).padStart(2, '0')}`;
};

// a clip on the timeline shows a strip of its poster, like thumbnails in a real editor
const bg = (id, second) => ({ backgroundImage: `linear-gradient(rgba(8,11,22,.4),rgba(8,11,22,.4)), url(${CLIPS[id].src})`, backgroundSize: 'auto 100%', backgroundPosition: second ? 'right center' : 'left center' });

function Wheel({ x, y, label }) {
  return (
    <div className="re-wheel">
      <i style={{ left: `${50 + x}%`, top: `${50 + y}%` }} />
      <span>{label}</span>
    </div>
  );
}
function Slider({ label, value }) {
  return (
    <div className="re-sl">
      <span>{label}</span>
      <div><b style={{ width: `${value}%` }} /></div>
    </div>
  );
}

// ui = what the interface shows; play = playhead (% of timeline); cursor = {x, y, k} in cqw; progress = render 0..1
export default function EditorUI({ ui = 0, play = 12, cursor = null, progress = 0, fast = false, className = '' }) {
  const L = layout(ui);
  const scene = sceneAt(ui, play);
  const graded = ui >= 5;
  const tab = ui >= 6 ? 'DELIVER' : ui >= 4 ? 'COLOR' : 'EDIT';
  const panel = ui >= 6 ? 'deliver' : ui >= 4 ? 'color' : 'media';
  const inTitle = ui >= 3 && play >= 3 && play <= 25;
  const tool = ui === 1 ? 'BLADE' : 'SELECT';
  const blocks = Math.round(progress * 20);

  return (
    <div className={`re ${fast ? 'fast' : ''} ${className}`} role="img" aria-label="Video editing software with a timeline, viewer and color tools">
      <div className="re-top">
        <i /><i /><i />
        <b>TECHNICAL_CLUB.DRP</b>
        <span>{ui >= 7 ? 'EXPORTED' : ui >= 6 ? 'RENDERING' : ui >= 4 ? 'GRADING' : 'EDITING'}</span>
      </div>

      <div className="re-mid">
        <aside className="re-left">
          {panel === 'media' && (
            <>
              <h4>MEDIA POOL</h4>
              <div className="re-pool">
                {['a', 'b', 'c', 'd'].map((s, i) => (
                  <div key={i} className="re-thumb">
                    <div><Scene id={s} /></div>
                    <span>{CLIPS[s].name}</span>
                  </div>
                ))}
              </div>
            </>
          )}
          {panel === 'color' && (
            <>
              <h4>COLOR WHEELS</h4>
              <div className="re-wheels">
                <Wheel label="LIFT" x={graded ? -16 : 0} y={graded ? 12 : 0} />
                <Wheel label="GAMMA" x={graded ? 6 : 0} y={graded ? -14 : 0} />
                <Wheel label="GAIN" x={graded ? 18 : 0} y={graded ? -6 : 0} />
              </div>
              <div className="re-scope">{Array.from({ length: 24 }, (_, i) => <i key={i} style={{ height: `${(graded ? 30 : 16) + ((i * 37) % 50)}%` }} />)}</div>
            </>
          )}
          {panel === 'deliver' && (
            <>
              <h4>RENDER QUEUE</h4>
              <div className="re-job">
                <b>TECHCLUB_INTRO.MP4</b>
                <span>H.264 / 1080P / 30FPS</span>
                <div className="re-blocks">{Array.from({ length: 20 }, (_, i) => <i key={i} className={i < blocks ? 'on' : ''} />)}</div>
                <em>{ui >= 7 ? 'DONE 100%' : `${Math.round(progress * 100)}%`}</em>
              </div>
            </>
          )}
        </aside>

        <div className="re-view">
          <div className="re-screen" style={{ filter: graded ? 'saturate(1.3) contrast(1.12) brightness(1.02)' : 'saturate(.28) contrast(.82) brightness(1.15)' }}>
            <Scene id={scene} />
          </div>
          {inTitle && <div className="re-title">TECH CLUB</div>}
          <div className="re-tc">{fmt(play)}</div>
          <div className="re-tag">{graded ? 'GRADED' : 'LOG'}</div>
        </div>

        <aside className="re-right">
          <h4>INSPECTOR</h4>
          <Slider label="ZOOM" value={50} />
          <Slider label="OPACITY" value={100} />
          <Slider label="SATURATION" value={graded ? 72 : 30} />
          <Slider label="CONTRAST" value={graded ? 64 : 38} />
        </aside>
      </div>

      <div className="re-tl">
        <div className="re-tools">
          {['SELECT', 'BLADE', 'TRIM'].map((t) => <span key={t} className={t === tool ? 'on' : ''}>{t}</span>)}
          <em>{fmt(play)}</em>
        </div>
        <div className="re-tracks">
          <div className="re-labels"><b>V2</b><b>V1</b><b>A1</b></div>
          <div className="re-area">
            <div className="re-ruler">{Array.from({ length: 11 }, (_, i) => <span key={i} style={{ left: `${i * 10}%` }}>{i * 5}</span>)}</div>
            <div className="re-row r2">
              <div className={'re-clip title' + (ui >= 3 ? ' in' : '')} style={{ left: '3%', width: '22%' }}>TITLE</div>
            </div>
            <div className="re-row r1">
              <div className="re-clip" style={{ ...bg('a'), left: `${L.a.l}%`, width: `${L.a.w}%` }}><span>{CLIPS.a.name}</span></div>
              <div className={'re-clip' + (ui >= 1 ? ' cut' : '')} style={{ ...bg('b'), left: `${L.b1.l}%`, width: `${L.b1.w}%` }}><span>{CLIPS.b.name}</span></div>
              <div className={'re-clip' + (ui >= 1 ? ' cut' : '') + (L.b2.gone ? ' gone' : '')} style={{ ...bg('b', true), left: `${L.b2.l}%`, width: `${L.b2.w}%` }}><span>{CLIPS.b.name}</span></div>
              <div className="re-clip" style={{ ...bg('c'), left: `${L.c.l}%`, width: `${L.c.w}%` }}><span>{CLIPS.c.name}</span></div>
              <div className={'re-xfade' + (ui >= 3 ? ' in' : '')} style={{ left: '26.2%' }}><i /></div>
              {ui === 1 && <div className="re-flash" style={{ left: '48.4%' }} />}
            </div>
            <div className="re-row ra">
              <div className="re-audio" style={{ width: `${L.end}%` }}>
                <div>{WAVE.map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
              </div>
            </div>
            <div className="re-head" style={{ left: `${play}%`, transition: ui >= 6 ? 'left 80ms linear' : undefined }}><i /></div>
          </div>
        </div>
      </div>

      <div className="re-tabs">
        {TABS.map((t) => <span key={t} className={t === tab ? 'on' : ''}>{t}</span>)}
      </div>

      {cursor && (
        <div className="re-cursor" style={{ left: `${cursor.x}cqw`, top: `${cursor.y}cqw` }}>
          <svg viewBox="0 0 7 10" aria-hidden="true"><path d="M.3 .3V8.2L2.3 6.4L3.6 9.5L5 8.9L3.7 5.9H6.3Z" fill="#eef2ff" stroke="#080b16" strokeWidth=".6" strokeLinejoin="round" /></svg>
          <i key={cursor.k} />
        </div>
      )}
    </div>
  );
}
