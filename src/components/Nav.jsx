export default function Nav({ links, cta }) {
  return (
    <nav>
      <a className="logo px" href="index.html">
        <i />
        TECHNICAL CLUB
      </a>
      <ul>
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
      <a className="btn" href={cta.href}>
        {cta.label}
      </a>
    </nav>
  );
}
