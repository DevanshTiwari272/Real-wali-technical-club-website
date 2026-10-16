import Px from '../graphics/Px';

// End-of-page cue: keep scrolling (or click) to open the next page
export default function NextHint({ label, onClick }) {
  return (
    <div className="wrap">
      <button type="button" className="next-hint" onClick={onClick}>
        <span>KEEP SCROLLING // NEXT: {label}</span>
        <Px name="arrow" className="next-arrow" />
      </button>
    </div>
  );
}
