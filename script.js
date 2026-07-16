const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// Opens the Calendly popup if the widget has loaded; otherwise falls back
// to a normal link click, which opens the Calendly page in a new tab.
// Replace the URL below with your real Calendly link.
const CALENDLY_URL = 'https://calendly.com/kingstoneit';
function openCalendly(e) {
  if (window.Calendly) {
    e.preventDefault();
    Calendly.initPopupWidget({ url: CALENDLY_URL });
  }
  return true;
}
