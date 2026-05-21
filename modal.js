import { dom } from '../dom.js';
import { currentFilteredCourses, setActiveFilter } from '../state.js';
import { renderFilters, renderCourses } from './render.js';
import { openCourseModal, closeCourseModal } from './modal.js';

const {
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


// Evento de filtros
filterButtons.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  setActiveFilter(btn.dataset.filter);
  renderFilters();
  renderCourses();
});
