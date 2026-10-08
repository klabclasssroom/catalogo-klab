# Catálogo de cursos K-Lab Costa Rica

Sitio del catálogo de cursos de K-Lab Costa Rica (TEC Campus San Carlos), publicado con GitHub Pages en
https://klabclasssroom.github.io/catalogo-klab/

Es un sitio estático (HTML, CSS y JavaScript sin dependencias): no hay que compilar nada. Cada cambio que se sube a `main` se publica solo en uno o dos minutos.

## Tareas comunes

### Agregar o editar un curso del catálogo

Editar `js/data/courses.js`. Cada curso tiene esta forma:

```js
{
  title: 'Nombre del curso',
  category: 'ia',            // id de una categoría de js/data/categories.js
  duration: 12,              // horas totales (número)
  weeks: '4 semanas',        // o null
  complexity: 'low',         // 'low' | 'medium' | 'high'
  description: 'Resumen corto para la tarjeta.',

  // Detalle del modal (todo opcional: lo que no se ponga no se muestra)
  intro: 'Párrafo de presentación del curso.',
  modality: 'Virtual por Zoom, martes y jueves de 5:00 p.m. a 8:00 p.m.',
  instructor: 'Nombre de quien lo imparte',
  requirements: 'Conocimientos básicos de programación.',
  needs: 'Laptop personal.',
  topics: [
    { label: 'Semana 1', text: 'Tema de la semana' },  // o solo un texto: 'Tema'
  ],
  includes: ['Interpretación coreano-español', 'Cupo limitado'],
  free: true,          // muestra "Curso totalmente gratuito"
  certificate: true    // muestra el texto del certificado de K-Lab
}
```

El modal se arma solo con esos campos en `js/ui/modal.js`, así todos los cursos se ven con el mismo formato.

El nivel (Básico, Intermedio, Avanzado) se calcula a partir de `complexity` y `duration` en `js/utils/course-utils.js`.

### Publicar una noticia o un próximo curso

Editar `js/data/news.js`:

| Campo | Para qué sirve |
|---|---|
| `titulo`, `resumen` | Texto de la tarjeta |
| `fecha` | Fecha de publicación (`AAAA-MM-DD`); ordena las noticias, la más reciente primero |
| `inicio`, `cierre` | Opcionales (`AAAA-MM-DD`). Desde `inicio`, "Inscripción abierta" pasa a "En curso"; después de `cierre` la noticia queda "Finalizado" y deja de verse en la página principal (sigue en `noticias.html`) |
| `estado` | Texto de la etiqueta, por ejemplo "Inscripción abierta" (se resalta en verde) |
| `duracion`, `modalidad`, `requisitos` | Datos que se muestran en la tarjeta |
| `gratuito`, `certificado` | `true` para mostrar las etiquetas "Gratuito" y "Certificado K-Lab" |
| `link` | Destino del botón "Más información" |
| `imagen` | Afiche (guardarlo en `Fotos/noticias/`). Al tocarlo se abre en tamaño completo |

Las noticias también pueden venir de una hoja de Google publicada como CSV, con esas mismas columnas: en `js/config.js` poner `sourceType: 'csv'` y el enlace en `sourceUrl`.

### Galería

Las fotos se cargan desde Google Drive mediante un Apps Script; el enlace está en `KLAB_GALLERY_CONFIG` dentro de `js/config.js`.

## Estructura

```
index.html          Página principal (arma sus secciones con partials/)
noticias.html       Todas las noticias
galeria.html        Galería completa
styles.css          Importa los estilos de css/
partials/           Secciones HTML de la página principal
css/                Estilos por sección
js/config.js        Fuentes de datos de noticias y galería
js/data/            Cursos, categorías y noticias
js/ui/              Renderizado e interacción (catálogo, modal, noticias, galería, menú)
js/utils/           Funciones auxiliares del catálogo
Fotos/, logos/      Imágenes del sitio
```

## Probar en local

Como el sitio carga módulos y partes HTML con `fetch`, hay que abrirlo con un servidor y no con doble clic sobre el archivo. Por ejemplo:

```
npx serve .
```
