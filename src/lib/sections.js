// The main site is a stack of full pages: Home -> Domains -> Members -> Events.
// Each page has its own route. Scroll a page all the way down and the next one opens;
// scroll up from the top and the previous one opens (at its bottom).
export const SECTIONS = [
  { id: 'home', path: '/', label: 'HOME' },
  { id: 'domains', path: '/domains', label: 'DOMAINS' },
  { id: 'members', path: '/members', label: 'MEMBERS' },
  { id: 'events', path: '/events', label: 'EVENTS' }
];
export const SECTION_PATHS = SECTIONS.map((s) => s.path);

// Clicking the nav item of the page you are already on scrolls back to its top
export function scrollToSection() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
