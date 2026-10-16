export default function Section({ id, title, children }) {
  return (
    <section className="sec" id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
