const FULL_GALLERY_INITIAL_AMOUNT = 12;
const FULL_GALLERY_LOAD_MORE_AMOUNT = 12;

let fullGalleryImages = [];
let fullGalleryVisibleCount = FULL_GALLERY_INITIAL_AMOUNT;

function getGalleryConfig() {
  return window.KLAB_GALLERY_CONFIG || {};
}

function createFullGalleryItem(image) {
  const figure = document.createElement('figure');
  figure.className = 'full-gallery-item';

  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt || 'Foto de la galería';
  img.loading = 'lazy';
  img.decoding = 'async';

  img.onerror = () => {
    console.error('No se pudo cargar la imagen:', image.src);
    figure.innerHTML = '<p class="gallery-empty">No se pudo cargar esta imagen.</p>';
  };

  figure.appendChild(img);

  return figure;
}

function renderFullGallery() {
  const galleryGrid = document.getElementById('fullGalleryGrid');
  const loadMoreButton = document.getElementById('loadMoreFullGallery');

  if (!galleryGrid) {
    console.error('No existe el contenedor #fullGalleryGrid en el HTML.');
    return;
  }

  galleryGrid.innerHTML = '';

  if (!fullGalleryImages.length) {
    galleryGrid.innerHTML = '<p class="gallery-empty">No hay fotos disponibles en este momento.</p>';

    if (loadMoreButton) {
      loadMoreButton.style.display = 'none';
    }

    return;
  }

  const visibleImages = fullGalleryImages.slice(0, fullGalleryVisibleCount);

  visibleImages.forEach((image) => {
    galleryGrid.appendChild(createFullGalleryItem(image));
  });

  if (loadMoreButton) {
    loadMoreButton.style.display =
      fullGalleryVisibleCount >= fullGalleryImages.length ? 'none' : 'inline-flex';
  }
}

async function loadFullGalleryFromGoogleDriveAppsScript() {
  const config = getGalleryConfig();

  return new Promise((resolve, reject) => {
    if (!config || !config.sourceUrl) {
      reject(new Error('No se configuró sourceUrl para la galería.'));
      return;
    }

    const callbackName = `klabFullGalleryCallback_${Date.now()}`;
    const script = document.createElement('script');

    const separator = config.sourceUrl.includes('?') ? '&' : '?';

    script.src = `${config.sourceUrl}${separator}callback=${callbackName}`;

    const timeoutId = setTimeout(() => {
      cleanup();
      reject(new Error('La galería tardó demasiado en responder.'));
    }, 10000);

    window[callbackName] = (data) => {
      cleanup();

      const images = Array.isArray(data?.images) ? data.images : [];

      if (!images.length) {
        reject(new Error(data?.error || 'Apps Script respondió correctamente, pero no devolvió imágenes.'));
        return;
      }

      resolve(images);
    };

    script.onerror = () => {
      cleanup();
      reject(new Error('No se pudo cargar el script JSONP de la galería completa.'));
    };

    function cleanup() {
      clearTimeout(timeoutId);
      delete window[callbackName];
      script.remove();
    }

    document.body.appendChild(script);
  });
}

function setupFullGalleryLoadMoreButton() {
  const loadMoreButton = document.getElementById('loadMoreFullGallery');

  if (!loadMoreButton) return;

  loadMoreButton.addEventListener('click', () => {
    fullGalleryVisibleCount += FULL_GALLERY_LOAD_MORE_AMOUNT;
    renderFullGallery();
  });
}

async function initFullGallery() {
  try {
    setupFullGalleryLoadMoreButton();

    const images = await loadFullGalleryFromGoogleDriveAppsScript();

    fullGalleryImages = images;
    fullGalleryVisibleCount = FULL_GALLERY_INITIAL_AMOUNT;

    renderFullGallery();
  } catch (error) {
    console.error('Error cargando la galería completa:', error);

    fullGalleryImages = [];
    renderFullGallery();
  }
}

initFullGallery();