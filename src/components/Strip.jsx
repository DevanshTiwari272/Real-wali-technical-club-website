// The row is rendered twice so the CSS scroll loops seamlessly.
export default function Strip({ items }) {
  return (
    <div className="strip" aria-hidden="true">
      <div className="track">
        {[0, 1].flatMap((copy) =>
          items.map((t) => (
            <span key={`${copy}-${t}`}>
              <b>+ </b>
              {t}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
