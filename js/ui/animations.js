import { categories } from '../data/categories.js';
import { dom } from '../dom.js';
import { normalizedCourses } from '../utils/course-utils.js';

const { metricCourses, metricAreas } = dom;

// Animaciones
export const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
      
      if (entry.target.closest('.hero') && !document.body.classList.contains('hero-counted')) {
        document.body.classList.add('hero-counted');
        animateCount(metricCourses, normalizedCourses.length);
        animateCount(metricAreas, categories.length);
      }
    }
  });
}, { threshold: 0.15 });

export function observeRevealItems() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

export function animateCount(element, target) {
  let current = 0;
  const increment = Math.ceil(target / 20);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = current;
    }
  }, 50);
}
