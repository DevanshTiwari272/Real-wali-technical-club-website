import { useEffect } from 'react';
import SigninPage from './SigninPage';

// The registration form (SigninPage.jsx, left exactly as written). The site nav is above it.
export default function RegisterPage() {
  // Events link here as /register?event=Hack%20Night: pick that event in the form.
  // Done through the form's own <select> so SigninPage.jsx needs no changes.
  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get('event');
    const select = document.getElementById('event');
    if (!wanted || !select || ![...select.options].some((o) => o.value === wanted)) return;
    Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set.call(select, wanted);
    select.dispatchEvent(new Event('change', { bubbles: true }));
  }, []);

  return <div className="reg"><SigninPage /></div>;
}
