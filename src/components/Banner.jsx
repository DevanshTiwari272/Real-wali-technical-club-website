import AppLink from './AppLink';

export default function Banner({ title, text, cta }) {
  return (
    <section className="banner" id="join">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <AppLink className="btn go" href={cta.href}>
        {cta.label}
      </AppLink>
    </section>
  );
}
