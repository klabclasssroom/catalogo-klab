// Noticias y próximos cursos (se usan cuando KLAB_NEWS_CONFIG.sourceType es 'local').
// Mismas columnas que la hoja de Google: titulo, fecha (AAAA-MM-DD), categoria, estado, resumen, etc.
// inicio y cierre (AAAA-MM-DD) son opcionales: desde el inicio, "Inscripción abierta" pasa a "En curso";
// después del cierre, la noticia queda "Finalizado" y deja de mostrarse en la página principal.
export const news = [
  {
    titulo: 'Introducción a MODI Kit',
    fecha: '2026-10-20',
    inicio: '2026-10-31',
    cierre: '2026-10-31',
    categoria: 'Curso',
    estado: 'Inscripción abierta',
    resumen: 'Robótica, sensores y programación en bloques con MODI Master Kit. Lo imparte en forma virtual el equipo docente de K-Lab Bolivia, con estudiantes presenciales en el aula de K-Lab, TEC San Carlos.',
    duracion: '31 de octubre, 8:00 a.m. a 4:00 p.m. (1 día)',
    modalidad: 'Híbrida',
    requisitos: 'Cupo limitado: inscribite con el código QR del afiche',
    gratuito: false,
    certificado: false,
    link: 'https://www.instagram.com/p/DeuDBmjpldF/',
    imagen: 'Fotos/noticias/modi-kit.jpg'
  },
  {
    titulo: 'Modelado e Impresión 3D Básico',
    fecha: '2026-10-02',
    inicio: '2026-10-07',
    cierre: '2026-10-15',
    categoria: 'Curso',
    estado: 'Inscripción abierta',
    resumen: 'Introducción al modelado 3D, preparación de archivos para impresión y conceptos básicos de impresión 3D. Imparte José Segales. Organizan K-Lab, NIPA, Myongji y TEC.',
    duracion: '7, 8, 14 y 15 de octubre, 4:30 p.m. a 7:30 p.m.',
    modalidad: 'Presencial',
    requisitos: 'Cupo limitado: inscribite con el código QR del afiche',
    gratuito: true,
    certificado: false,
    link: 'https://www.instagram.com/p/DeAZgqmBcMV/',
    imagen: 'Fotos/noticias/modelado-impresion-3d-basico.jpg'
  }
];
