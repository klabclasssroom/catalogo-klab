import { dom } from '../dom.js';
import { levelLabel, getCategoryById } from '../utils/course-utils.js';

const CERTIFICATE_TEXT = 'Certificado oficial de K-Lab al cumplir con la asistencia y los requisitos';
const FREE_TEXT = 'Curso totalmente gratuito';

// Datos clave del curso, en el orden en que se muestran.
const DETAIL_FIELDS = [
  { key: 'modality', icon: '📍', label: 'Modalidad' },
  { key: 'instructor', icon: '👤', label: 'Imparte' },
  { key: 'requirements', icon: '📚', label: 'Requisitos' },
  { key: 'needs', icon: '💻', label: 'Qué necesitas' }
];

function renderDetails(course) {
  const rows = DETAIL_FIELDS
    .filter(field => course[field.key])
    .map(field => `<p>${field.icon} <strong>${field.label}:</strong> ${course[field.key]}</p>`);

  return rows.length ? `<div class="modal-section">${rows.join('')}</div>` : '';
}

function renderTopic(topic) {
  if (typeof topic === 'string') return `<li>${topic}</li>`;
  return `<li><strong>${topic.label}:</strong> ${topic.text}</li>`;
}

function renderTopics(topics = []) {
  if (!topics.length) return '';
  return `
    <div class="modal-section">
      <h4>🔍 ¿Qué aprenderás?</h4>
      <ul>${topics.map(renderTopic).join('')}</ul>
    </div>
  `;
}

function renderHighlights(course) {
  const items = (course.includes || []).map(item => `✅ ${item}`);
  if (course.free) items.push(`🎉 ${FREE_TEXT}`);
  if (course.certificate) items.push(`📄 ${CERTIFICATE_TEXT}`);
  if (!items.length) return '';

  return `
    <div class="modal-section">
      <ul class="modal-highlights">${items.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>
  `;
}

/* ===== Modal ===== */
export function openCourseModal(course) {
  const cat = getCategoryById(course.category);
  const content = dom.courseModalContent;

  content.innerHTML = `
    <div class="course-card-head" style="margin-bottom:1rem;">
      <span class="badge" style="background:linear-gradient(135deg, var(--primary), #3B5FC0);">${cat.short}</span>
      <span class="mini-pill level-${course.level}">${levelLabel[course.level]}</span>
    </div>
    <h2 id="courseModalTitle">${course.title}</h2>
    <p class="modal-description">${course.description}</p>
    <div class="modal-meta">
      <div><strong>⏱ Duración:</strong> ${course.duration} horas</div>
      ${course.weeks ? `<div><strong>📅 Extensión:</strong> ${course.weeks}</div>` : ''}
      <div><strong>📂 Categoría:</strong> ${cat.name}</div>
    </div>
    ${course.intro ? `<p class="modal-extra">${course.intro}</p>` : ''}
    ${renderDetails(course)}
    ${renderTopics(course.topics)}
    ${renderHighlights(course)}
    <a href="#contacto" class="btn btn-primary" style="margin-top:1.5rem;" onclick="closeCourseModal()">Solicitar información</a>
  `;

  const modal = dom.courseModal;
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  dom.courseModalClose.focus();
}

export function closeCourseModal() {
  const modal = dom.courseModal;
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

window.closeCourseModal = closeCourseModal;
