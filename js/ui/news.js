import { news as localNews } from '../data/news.js';

function getNewsConfig() {
  return window.KLAB_NEWS_CONFIG || {};
}

function formatDate(dateString) {
  if (!dateString) return 'Fecha por confirmar';
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat('es-CR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
}

function normalizeBoolean(value) {
  if (typeof value === 'boolean') return value;
  if (value === undefined || value === null) return false;
  return ['true', 'sí', 'si', '1', 'x', 'yes'].includes(String(value).trim().toLowerCase());
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let insideQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && insideQuotes && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      row.push(cell.trim());
      cell = '';
    } else if ((char === '\n' || char === '\r') && !insideQuotes) {
      if (char === '\r' && next === '\n') i += 1;
      row.push(cell.trim());
      if (row.some(value => value !== '')) rows.push(row);
      row = [];
      cell = '';
    } else {
      cell += char;
    }
  }

  row.push(cell.trim());
  if (row.some(value => value !== '')) rows.push(row);

  if (rows.length < 2) return [];

  const headers = rows[0].map(header => header.trim().toLowerCase());
  return rows.slice(1).map(values => headers.reduce((item, header, index) => {
    item[header] = values[index] || '';
    return item;
  }, {}));
}

function normalizeNewsItem(item, index = 0) {
  return {
    id: item.id || `noticia-${index + 1}`,
    titulo: item.titulo || item.title || 'Publicación sin título',
    fecha: item.fecha || item.date || '',
    categoria: item.categoria || item.category || 'Noticia',
    estado: item.estado || item.status || 'Publicado',
    resumen: item.resumen || item.summary || '',
    descripcion: item.descripcion || item.description || '',
    requisitos: item.requisitos || item.requirements || '',
    duracion: item.duracion || item.duration || '',
    modalidad: item.modalidad || item.modality || '',
    gratuito: normalizeBoolean(item.gratuito ?? item.free),
    certificado: normalizeBoolean(item.certificado ?? item.certificate),
    link: item.link || item.url || '#contacto',
    imagen: item.imagen || item.image || '',
    inicio: item.inicio || item.start || '',
    cierre: item.cierre || item.end || ''
  };
}

const STATUS_FINISHED = 'Finalizado';
const STATUS_IN_PROGRESS = 'En curso';

// Fecha local de hoy en formato AAAA-MM-DD, comparable con las fechas de las noticias.
function todayIso() {
  const now = new Date();
  const pad = value => String(value).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

// Ajusta el estado según las fechas: después del cierre queda "Finalizado" y,
// si la inscripción estaba abierta y el curso ya empezó, pasa a "En curso".
function withComputedStatus(item, today = todayIso()) {
  if (item.cierre && item.cierre < today) {
    return { ...item, estado: STATUS_FINISHED, finalizado: true };
  }

  const started = item.inicio && item.inicio <= today;
  if (started && statusClassFor(item.estado) === 'is-open') {
    return { ...item, estado: STATUS_IN_PROGRESS, finalizado: false };
  }

  return { ...item, finalizado: false };
}

function sortNews(news) {
  return [...news].sort((a, b) => new Date(b.fecha || 0) - new Date(a.fecha || 0));
}

function statusClassFor(status = '') {
  const normalized = status.toLowerCase();
  if (normalized.includes('abierta')) return 'is-open';
  if (normalized === STATUS_FINISHED.toLowerCase()) return 'is-closed';
  if (normalized === STATUS_IN_PROGRESS.toLowerCase()) return 'is-soon';
  return '';
}

function renderNewsImage(item) {
  if (!item.imagen) return '';
  return `
    <a class="news-image-link" href="${item.imagen}" target="_blank" rel="noopener">
      <img class="news-image" src="${item.imagen}" alt="Afiche: ${item.titulo}" loading="lazy">
    </a>
  `;
}

function renderNewsCard(item) {
  const statusClass = statusClassFor(item.estado);
  const link = item.link || '#contacto';

  return `
    <article class="news-card reveal visible">
      ${renderNewsImage(item)}
      <div class="news-card-topline">
        <span class="news-category">${item.categoria || 'Noticia'}</span>
        <span class="news-status ${statusClass}">${item.estado || 'Publicado'}</span>
      </div>
      <time datetime="${item.fecha || ''}">${formatDate(item.fecha)}</time>
      <h3>${item.titulo}</h3>
      <p>${item.resumen || item.descripcion || ''}</p>
      <dl class="news-meta">
        ${item.duracion ? `<div><dt>Duración</dt><dd>${item.duracion}</dd></div>` : ''}
        ${item.modalidad ? `<div><dt>Modalidad</dt><dd>${item.modalidad}</dd></div>` : ''}
        ${item.requisitos ? `<div><dt>Requisito</dt><dd>${item.requisitos}</dd></div>` : ''}
      </dl>
      <div class="news-flags">
        ${item.gratuito ? '<span>Gratuito</span>' : ''}
        ${item.certificado ? '<span>Certificado K-Lab</span>' : ''}
      </div>
      <a class="btn btn-secondary" href="${link}">Más información</a>
    </article>
  `;
}

function prepareNews(items) {
  const today = todayIso();
  return sortNews(items.map((item, index) => withComputedStatus(normalizeNewsItem(item, index), today)));
}

export async function getNews() {
  const { sourceType, sourceUrl } = getNewsConfig();

  if (sourceType === 'local') {
    return prepareNews(localNews);
  }

  const url = `${sourceUrl}${sourceUrl.includes('?') ? '&' : '?'}t=${Date.now()}`;

  const response = await fetch(url, {
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(`No se pudo cargar Google Sheets: ${sourceUrl}`);
  }

  const csvText = await response.text();
  const rows = parseCsv(csvText);

  return prepareNews(rows);
}

export async function renderLatestNews(limit = 3) {
  const grid = document.getElementById('newsGrid');
  const empty = document.getElementById('newsEmpty');
  if (!grid) return;

  try {
    const news = await getNews();
    const visibleNews = news.filter(item => !item.finalizado).slice(0, limit);
    grid.innerHTML = visibleNews.map(renderNewsCard).join('');
    if (empty) empty.hidden = visibleNews.length > 0;
  } catch (error) {
    console.error(error);
    grid.innerHTML = '';
    if (empty) {
      empty.hidden = false;
      empty.textContent = 'No se pudieron cargar las noticias.';
    }
  }
}

export async function renderAllNews() {
  const grid = document.getElementById('allNewsGrid');
  const empty = document.getElementById('allNewsEmpty');
  if (!grid) return;

  try {
    const news = await getNews();
    grid.innerHTML = news.map(renderNewsCard).join('');
    if (empty) empty.hidden = news.length > 0;
  } catch (error) {
    console.error(error);
    grid.innerHTML = '';
    if (empty) {
      empty.hidden = false;
      empty.textContent = 'No se pudieron cargar las noticias.';
    }
  }
}
