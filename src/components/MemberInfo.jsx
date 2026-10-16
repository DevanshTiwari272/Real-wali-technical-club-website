const SOCIAL = [['github', 'GH'], ['linkedin', 'IN'], ['email', '@'], ['site', 'WWW']];

export default function MemberInfo({ member }) {
  return (
    <>
      <h2 className="name">{member.name}</h2>
      <div className="role">{member.role}</div>
      <div className="bar2" />
      <p className="bio">{member.bio}</p>
      <div className="soc">
        {SOCIAL.map(([key, label]) => {
          const v = member.links && member.links[key];
          const href = v ? (key === 'email' ? `mailto:${v}` : v) : undefined;
          return (
            <a key={key} href={href} aria-label={key} aria-disabled={!v} target={key === 'email' ? undefined : '_blank'} rel="noreferrer">
              {label}
            </a>
          );
        })}
      </div>
    </>
  );
}
