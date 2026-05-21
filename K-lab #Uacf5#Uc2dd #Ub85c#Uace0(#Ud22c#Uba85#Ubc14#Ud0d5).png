import { categories } from '../data/categories.js';
import { dom } from '../dom.js';
import { activeFilter, setCurrentFilteredCourses } from '../state.js';
import { levelLabel, getCategoryById, getCourseCount, normalizedCourses } from '../utils/course-utils.js';
import { observeRevealItems } from './animations.js';

const {
  categoryGrid,
  courseGrid,
  filterButtons,
  categorySummary,
  catalogStatus
} = dom;

export function renderCategories() {
  categoryGrid.innerHTML = categories.map(cat => `
    <article class="category-card reveal">
      <div class="category-topline">
        <div class="icon">${cat.icon}</div>
        <span class="count-pill">${getCourseCount(cat.id)} cursos</span>
      </div>
      <h3>${cat.name}</h3>
      <p>${cat.description}</p>
    </article>
  `).join('');
}

export function renderFilters() {
  const items = [{ id: 'all', short: 'Todos' }, ...categories];
  filterButtons.innerHTML = items.map(item => `
    <button class="filter-btn ${item.id === activeFilter ? 'active' : ''}" data-filter="${item.id}">
      ${item.short}
    </button>
  `).join('');
}

export function renderSummary() {
  categorySummary.innerHTML = categories.map(cat => `
    <li><span>${cat.name}</span> <strong>${getCourseCount(cat.id)}</strong></li>
  `).join('');
}

export function sortCourses(list) {
  return [...list].sort((a, b) => {
    const nameA = getCategoryById(a.category).name;
    const nameB = getCategoryById(b.category).name;
    if (nameA !== nameB) return nameA.localeCompare(nameB, 'es');
    const lvl = { basico:0, intermedio:1, avanzado:2 };
    return lvl[a.level] - lvl[b.level] || a.duration - b.duration || a.title.localeCompare(b.title, 'es');
  });
}

export function renderCourses() {
  const filtered = activeFilter === 'all'
    ? sortCourses(normalizedCourses)
    : sortCourses(normalizedCourses.filter(c => c.category === activeFilter));

  setCurrentFilteredCourses(filtered);

  const status = activeFilter === 'all'
    ? `Mostrando los ${filtered.length} cursos del catálogo`
    : `Mostrando ${filtered.length} curso(s) en ${getCategoryById(activeFilter).name}`;
  catalogStatus.textContent = status;

  courseGrid.innerHTML = filtered.map((course, index) => {
    const cat = getCategoryById(course.category);
    return `
      <article class="course-card reveal">
        <div class="course-card-head">
          <span class="badge">${cat.short}</span>
          <span class="mini-pill level-${course.level}">${levelLabel[course.level]}</span>
        </div>
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <div class="meta">
          <span>⏱ ${course.duration} hrs</span>
          ${course.weeks ? `<span>📅 ${course.weeks}</span>` : ''}
        </div>
        <button class="btn-more-info" data-course-index="${index}">Más información</button>
      </article>
    `;
  }).join('');

  observeRevealItems();
}
