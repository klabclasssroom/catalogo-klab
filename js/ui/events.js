import { dom } from '../dom.js';
import { currentFilteredCourses, setActiveFilter } from '../state.js';
import { renderFilters, renderSummary, renderCourses } from './render.js';
import { openCourseModal, closeCourseModal } from './modal.js';

const {
  categoryGrid,
  categorySummary,
  catalogStatus,
  courseGrid,
  filterButtons,
  courseModal,
  courseModalClose,
  modalBackdrop
} = dom;

// Eventos del modal
courseModalClose.addEventListener('click', closeCourseModal);
modalBackdrop.addEventListener('click', closeCourseModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && courseModal.getAttribute('aria-hidden') === 'false') {
    closeCourseModal();
  }
});

// Delegación de evento para el botón "Más información"
courseGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-more-info');
  if (!btn) return;
  const index = parseInt(btn.dataset.courseIndex, 10);
  const course = currentFilteredCourses[index];
  if (course) openCourseModal(course);
});


function applyFilter(filter) {
  setActiveFilter(filter);
  renderFilters();
  renderSummary();
  renderCourses();
}

// Evento de filtros
filterButtons.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  applyFilter(btn.dataset.filter);
});

// Acceso directo desde "Explorá por categoría": filtra y lleva al catálogo
categoryGrid.addEventListener('click', (e) => {
  const card = e.target.closest('.category-card');
  if (!card) return;
  applyFilter(card.dataset.category);
});

// Acceso directo desde el resumen "Distribución de cursos": filtra y lleva a los cursos
categorySummary.addEventListener('click', (e) => {
  const item = e.target.closest('.summary-item');
  if (!item) return;
  applyFilter(item.dataset.category);
  catalogStatus.scrollIntoView();
});
