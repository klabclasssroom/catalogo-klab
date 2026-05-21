import { dom } from '../dom.js';
import { levelLabel, getCategoryById } from '../utils/course-utils.js';

/* ===== Modal ===== */
export function openCourseModal(course) {
  const cat = getCategoryById(course.category);
  const content = dom.courseModalContent;

  // Contenido específico o genérico
  const customContent = course.modalContent || '';

  let html = `
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
    <p class="modal-extra">Este curso está diseñado para brindarte una experiencia práctica y conocimientos aplicables en el área de ${cat.name.toLowerCase()}.</p>
  `;

  if (customContent) {
    // Contenido personalizado (ej. Ciberseguridad)
    html += customContent;
  } else {
    // Formato genérico para todos los cursos
    html += `
      <div style="margin-top:1.5rem; padding-top:1.5rem; border-top:1px solid var(--border);">
        <p><strong>🎯 Requisitos:</strong> Interés en el tema y ganas de aprender.</p>
        <p>📄 Certificado oficial de K-Lab al cumplir con la asistencia.</p>
        <h4 style="margin-top:1.5rem;">🔎 ¿Qué aprenderás?</h4>
        <ul style="padding-left:1.5rem;">
          <li>Fundamentos de ${cat.name.toLowerCase()}</li>
          <li>Conceptos clave y herramientas actuales</li>
          <li>Aplicaciones prácticas y casos reales</li>
        </ul>
        <p style="margin-top:1rem;">¡Da el primer paso para dominar ${cat.name.toLowerCase()}!</p>
      </div>
    `;
  }

  html += `<a href="#contacto" class="btn btn-primary" style="margin-top:1.5rem;" onclick="closeCourseModal()">Solicitar información</a>`;
  content.innerHTML = html;

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
