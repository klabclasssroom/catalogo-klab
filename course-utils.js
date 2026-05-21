import { dom } from '../dom.js';

const { menuToggle, menu } = dom;

// Menú móvil
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !expanded);
  menu.classList.toggle('active');
});
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
