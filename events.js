async function loadPartials() {
  const includes = document.querySelectorAll('[data-include]');

  await Promise.all([...includes].map(async include => {
    const file = include.getAttribute('data-include');
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`No se pudo cargar el parcial: ${file}`);
    }

    include.outerHTML = await response.text();
  }));

  await import('./app.js');
}

loadPartials();
