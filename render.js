function getGalleryConfig() {
  return window.KLAB_GALLERY_CONFIG || {};
}

function createGalleryItem(image) {
  const figure = document.createElement('figure');
  figure.className = 'gallery-item';

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

function renderGallery(images) {
  const galleryGrid = document.getElementById('galleryGrid');

  if (!galleryGrid) {
    console.error('No existe el contenedor #galleryGrid en el HTML.');
    return;
  }

  galleryGrid.innerHTML = '';

  if (!images || images.length === 0) {
    galleryGrid.innerHTML = '<p class="gallery-empty">No hay fotos disponibles en este momento.</p>';
    return;
  }

  const randomImages = getRandomImages(images, 4);

  randomImages.forEach((image) => {
    galleryGrid.appendChild(createGalleryItem(image));
  });
}

function getRandomImages(images, amount = 4) {
  return [...images]
    .sort(() => Math.random() - 0.5)
    .slice(0, amount);
}

async function loadGalleryFromGoogleDriveAppsScript() {
  const config = getGalleryConfig();

  console.log('Configuración de galería:', config);

  return new Promise((resolve, reject) => {
    if (!config || !config.sourceUrl) {
      reject(new Error('No se configuró sourceUrl para la galería.'));
      return;
    }

    const callbackName = `klabGalleryCallback_${Date.now()}`;
    const script = document.createElement('script');

    const separator = config.sourceUrl.includes('?') ? '&' : '?';
    script.src = `${config.sourceUrl}${separator}callback=${callbackName}`;

    console.log('Cargando JSONP desde:', script.src);

    const timeoutId = setTimeout(() => {
      cleanup();
      reject(new Error('La galería tardó demasiado en responder.'));
    }, 10000);

    window[callbackName] = (data) => {
      cleanup();

      console.log('Datos recibidos de Drive:', data);

      const images = Array.isArray(data?.images) ? data.images : [];

      if (!images.length) {
        reject(new Error(data?.error || 'Apps Script respondió correctamente, pero no devolvió imágenes.'));
        return;
      }

      resolve(images);
    };

    script.onerror = () => {
      cleanup();
      reject(new Error('No se pudo cargar el script JSONP de la galería.'));
    };

    function cleanup() {
      clearTimeout(timeoutId);
      delete window[callbackName];
      script.remove();
    }

    document.body.appendChild(script);
  });
}

async function initGallery() {
  try {
    const images = await loadGalleryFromGoogleDriveAppsScript();
    renderGallery(images);
  } catch (error) {
    console.error('Error cargando la galería:', error);
    renderGallery([]);
  }
}

initGallery();