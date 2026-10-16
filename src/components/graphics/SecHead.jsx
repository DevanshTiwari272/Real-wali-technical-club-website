export default function SecHead({ title, right }) {
  return (
    <div className="shead">
      <i />
      <h2>{title}</h2>
      <span className="line" />
      {right}
    </div>
  );
}
