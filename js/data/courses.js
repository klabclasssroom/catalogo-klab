// Catálogo de cursos. El modal de cada curso se arma con estos campos (ver js/ui/modal.js):
//   intro         Párrafo de presentación
//   modality      Modalidad, lugar y horario
//   instructor    Quién lo imparte
//   requirements  Requisitos previos
//   needs         Qué hay que traer o tener
//   topics        Temario: textos, o { label, text } para "Semana 1", "Día 2", etc.
//   includes      Otros detalles (interpretación, materiales, cupos…)
//   free          true si es gratuito
//   certificate   true si entrega certificado de K-Lab
// Todos son opcionales: lo que no se indique no se muestra.
export const courses = [
  {
    title: 'Crea tu propia red social',
    category: 'web',
    duration: 24,
    weeks: '4 semanas',
    complexity: 'high',
    description: 'Desarrollo práctico de una red social desde cero.',
    intro: 'Aprende desarrollo full-stack construyendo una red social completa desde cero.',
    instructor: 'Equipo de K-Lab',
    requirements: 'Haber cursado "Fundamentos de Servicios Web" o tener conocimientos equivalentes.',
    includes: ['Interpretación coreano-español'],
    free: true,
    certificate: true
  },
  {
    title: 'Fundamentos del desarrollo web moderno',
    category: 'web',
    duration: 24,
    weeks: null,
    complexity: 'medium',
    description: 'Buenas prácticas y tecnologías actuales.',
    intro: 'Aprende las bases del desarrollo web actual con estándares modernos y buenas prácticas.',
    needs: 'Computadora portátil personal (si no tienes, puedes usar la computadora de la escuela).',
    free: true,
    certificate: true
  },
  {
    title: 'Fundamentos de Servicios Web',
    category: 'web',
    duration: 12,
    weeks: '4 semanas',
    complexity: 'low',
    description: 'Conceptos base de APIs y servicios web.',
    intro: 'Crea tu propia mini red social desde cero en 4 semanas. No solo aprenderás la teoría: terminarás con tu propia plataforma funcionando, lista para tu portafolio.',
    requirements: 'Conocimientos básicos de programación.',
    topics: [
      { label: 'Semana 1', text: 'Frontend y HTML/CSS' },
      { label: 'Semana 2', text: 'JavaScript básico' },
      { label: 'Semana 3', text: 'Node.js y Express' },
      { label: 'Semana 4', text: 'MongoDB y Bootstrap' }
    ],
    free: true,
    certificate: true
  },
  {
    title: 'Fundamentos de Servicios Web – Frontend',
    category: 'web',
    duration: 24,
    weeks: '4 semanas',
    complexity: 'medium',
    description: 'Interfaces frontend conectadas a servicios.',
    intro: 'La misma base de "Fundamentos de Servicios Web: Crea tu mini red social", enfocada únicamente en el frontend (el backend se ve en "Desarrollo web con K-Lab – Backend"). Al finalizar tendrás tu propia plataforma digital para tu portafolio.',
    requirements: 'Conocimientos básicos de programación.',
    topics: [
      { label: 'Frontend y HTML/CSS', text: 'principios web, entorno de desarrollo, fundamentos de HTML y CSS, creación de una mini interfaz tipo red social' },
      { label: 'JavaScript básico', text: 'variables, funciones, DOM, eventos, simulación de comentarios en la plataforma' }
    ],
    free: true,
    certificate: true
  },
  {
    title: 'Desarrollo web con K-Lab – Backend',
    category: 'web',
    duration: 20,
    weeks: null,
    complexity: 'medium',
    description: 'Aprende Node.js, Express, MongoDB y Bootstrap con prácticas reales.',
    intro: 'Aprende backend con prácticas reales y termina con una plataforma digital propia para sumar a tu portafolio.',
    requirements: 'Conocimientos básicos de programación.',
    topics: [
      { label: 'Node.js y Express', text: 'módulos, rutas, login, plantillas EJS' },
      { label: 'MongoDB', text: 'CRUD, modelo de datos' },
      { label: 'Bootstrap', text: 'mejora visual para tu mini red social' }
    ],
    includes: ['Interpretación consecutiva coreano-español durante todas las clases'],
    free: true,
    certificate: true
  },

  {
    title: 'Procesamiento de Imágenes Médicas con Deep Learning',
    category: 'ia',
    duration: 12,
    weeks: '4 semanas',
    complexity: 'high',
    description: 'Aplicación de deep learning a imágenes médicas.',
    intro: 'Curso intensivo que te guía paso a paso desde el procesamiento de imágenes médicas hasta modelos avanzados de segmentación y detección, con proyectos enfocados en casos reales.',
    requirements: 'Nivel intermedio: se recomiendan conocimientos de Python, PyTorch y fundamentos de Deep Learning. Si te interesa la IA aplicada a la medicina, puedes participar aunque no puedas realizar todas las prácticas.',
    topics: [
      'Manejo de formatos médicos y adquisición de datos',
      'Clasificación de imágenes médicas',
      'Segmentación y detección avanzada'
    ],
    includes: ['Prácticas en Google Colab'],
    free: true,
    certificate: true
  },
  {
    title: 'Prompts y LLM (ChatGPT)',
    category: 'ia',
    duration: 12,
    weeks: null,
    complexity: 'medium',
    description: 'Diseño de prompts efectivos y servicios de IA.',
    intro: 'Aprende a diseñar prompts efectivos y a integrar servicios de IA generativa basados en LLM (como ChatGPT) en tus proyectos.',
    requirements: 'Abierto a estudiantes de cualquier año en carreras de ingeniería. Se recomienda experiencia previa en Python, aunque no es obligatoria.',
    needs: 'Computadora portátil personal.',
    free: true,
    certificate: true
  },
  {
    title: 'La IA para todos',
    category: 'ia',
    duration: 12,
    weeks: null,
    complexity: 'low',
    description: 'Introducción accesible a la inteligencia artificial.',
    intro: 'Curso introductorio y práctico, ideal para principiantes y para quienes quieren crear su propio modelo.',
    topics: [
      'Aplicaciones prácticas de IA',
      'Programación con Python',
      'Modelos de deep learning'
    ],
    includes: ['Interpretación consecutiva coreano-español durante todas las clases'],
    free: true,
    certificate: true
  },
  {
    title: 'Programación Agéntica',
    category: 'ia',
    duration: 24,
    weeks: '5 semanas',
    complexity: 'medium',
    description: 'Planificar, controlar y verificar código generado por agentes de IA.',
    intro: 'Aprende a planificar, controlar y verificar el código generado por agentes de inteligencia artificial.',
    modality: 'Virtual por Zoom, martes y viernes de 5:00 p.m. a 8:00 p.m. (8 sesiones).',
    includes: [
      'Los estudiantes regulares (30 cupos) reciben una cuenta de ChatGPT Codex por 30 días; la asistencia es obligatoria para mantenerla activa.',
      'También se puede participar como oyente.'
    ],
    free: true,
    certificate: true
  },
  {
    title: 'Introducción a la IA para la Agricultura',
    category: 'ia',
    duration: 12,
    weeks: '2 semanas',
    complexity: 'low',
    description: 'Herramientas de IA aplicadas al agro, sin necesidad de programar.',
    intro: 'Conoce herramientas de inteligencia artificial aplicadas a la agricultura.',
    modality: 'Virtual por Zoom, viernes y sábados de 5:00 p.m. a 8:00 p.m. (4 sesiones).',
    requirements: 'No se necesita saber programar.',
    includes: ['Cupo limitado'],
    free: true
  },

  {
    title: 'Curso básico de Arduino',
    category: 'arduino',
    duration: 15,
    weeks: null,
    complexity: 'low',
    description: 'Primeros pasos en electrónica y programación.',
    intro: 'Aprende los fundamentos de la electrónica y la programación con Arduino de forma práctica.',
    needs: 'Computadora portátil personal (si no tienes, puedes usar la computadora de la escuela).',
    free: true,
    certificate: true
  },
  {
    title: 'ESP32 con WiFi',
    category: 'arduino',
    duration: 15,
    weeks: null,
    complexity: 'medium',
    description: 'Soluciones conectadas con ESP32.',
    intro: 'Curso intermedio para crear soluciones conectadas usando el ESP32 y su WiFi.',
    requirements: 'Conocimientos mínimos de Arduino.',
    needs: 'Computadora portátil personal (si no tienes, puedes usar la computadora de la escuela).',
    free: true,
    certificate: true
  },
  {
    title: 'Simulación Arduino en Tinkercad',
    category: 'arduino',
    duration: 12,
    weeks: null,
    complexity: 'low',
    description: 'Simulación de circuitos y programación básica.',
    intro: 'Ideal para empezar sin hardware: diseña y programa circuitos virtuales paso a paso.',
    requirements: 'Ninguno, solo ganas de aprender electrónica.',
    needs: 'Laptop y conexión a internet.',
    free: true,
    certificate: true
  },
  {
    title: 'Sensores y Actuadores con Arduino',
    category: 'arduino',
    duration: 32,
    weeks: null,
    complexity: 'high',
    description: 'Integración avanzada de sensores y actuadores.',
    intro: 'Aprende a leer sensores, controlar motores y construir sistemas interactivos.',
    requirements: 'Haber llevado el curso básico de Arduino.',
    needs: 'Laptop y, opcionalmente, un kit de sensores y actuadores.',
    free: true,
    certificate: true
  },

  {
    title: 'Fundamentos de AWS Cloud',
    category: 'aws',
    duration: 15,
    weeks: null,
    complexity: 'low',
    description: 'Conceptos esenciales de AWS.',
    intro: 'Descubre tu futuro en la tecnología de la nube y aprende los contenidos necesarios para obtener la certificación de AWS.',
    instructor: 'K-Lab con Bespin Global (proveedor líder de servicios gestionados en la nube en Corea del Sur)',
    needs: 'Computadora portátil personal.',
    includes: ['K-Lab cubre los costos del uso individual de cuentas en la nube'],
    free: true
  },
  {
    title: 'AWS Introductorio (Nivel 1)',
    category: 'aws',
    duration: 15,
    weeks: null,
    complexity: 'low',
    description: 'Primer acercamiento a la nube de AWS.',
    intro: 'Da tu primer paso en la nube con K-Lab. Ideal para quienes quieren iniciarse en el mundo de la tecnología, la nube y AWS.',
    needs: 'Laptop personal.',
    includes: [
      'Cuenta gratuita de AWS y acceso a laboratorios prácticos',
      'AWS Esencial (Nivel 2) comienza justo después de este curso; te recomendamos inscribirte en ambos'
    ]
  },
  {
    title: 'AWS Esencial (Nivel 2)',
    category: 'aws',
    duration: 11,
    weeks: null,
    complexity: 'medium',
    description: 'Profundización en servicios y arquitectura.',
    intro: 'Lleva tu aprendizaje en la nube al siguiente nivel aplicando lo aprendido con prácticas reales y arquitectura de alta disponibilidad.',
    requirements: 'Se recomienda haber tomado AWS Introductorio (Nivel 1); tienen prioridad quienes también tomen ese curso.',
    needs: 'Laptop personal.',
    includes: ['Cuenta gratuita de AWS y acceso a laboratorios prácticos']
  },

  {
    title: 'Introducción a la Seguridad Informática',
    category: 'seguridad',
    duration: 12,
    weeks: null,
    complexity: 'medium',
    description: 'Amenazas, conceptos y prácticas básicas.',
    intro: 'Parte 1: aprende los fundamentos de la seguridad digital, la identificación de amenazas y buenas prácticas de protección.',
    requirements: 'Estudiantes de tercer año o superior en carreras de ingeniería, o con conocimientos básicos de informática.',
    needs: 'Computadora portátil personal.',
    free: true,
    certificate: true
  },
  {
    title: 'Introducción a la Ciberseguridad',
    category: 'seguridad',
    duration: 6,
    weeks: null,
    complexity: 'low',
    description: 'Riesgos y protección en entornos digitales.',
    intro: 'Empieza tu camino en la ciberseguridad junto a un experto internacional.',
    requirements: 'Solo interés en aprender sobre ciberseguridad; abierto a todos.',
    topics: [
      'Fundamentos de la ciberseguridad',
      'Principales tipos y casos de ataques cibernéticos',
      'Métodos para detectar, defenderse y responder ante ciberataques',
      'Estrategias prácticas y casos reales'
    ],
    includes: ['Interpretación consecutiva coreano-español durante toda la clase'],
    free: true,
    certificate: true
  },

  {
    title: 'Modelo básico para impresión 3D',
    category: 'modelado',
    duration: 9,
    weeks: null,
    complexity: 'low',
    description: 'Diseño de piezas simples para impresión.',
    intro: 'Diseña tus primeras piezas en 3D listas para imprimir.',
    requirements: 'Manejo básico de computadora.',
    needs: 'Laptop con software gratuito (te guiamos en la instalación).',
    free: true,
    certificate: true
  },
  {
    title: 'Conceptos básicos del Modelado 3D',
    category: 'modelado',
    duration: 7,
    weeks: null,
    complexity: 'low',
    description: 'Formas, herramientas y flujo de trabajo.',
    intro: 'Aprende las bases del modelado tridimensional para dar vida a tus ideas.',
    needs: 'Laptop personal.',
    free: true,
    certificate: true
  },
  {
    title: 'Operación de Equipos de Impresión 3D',
    category: 'modelado',
    duration: 3,
    weeks: null,
    complexity: 'low',
    description: 'Configuración y operación segura.',
    intro: 'Aprende a calibrar, operar y mantener impresoras 3D de forma segura.',
    requirements: 'Ninguno, empezamos desde cero.',
    needs: 'Laptop. Las impresoras las pone K-Lab.',
    includes: ['Materiales de práctica incluidos'],
    free: true,
    certificate: true
  },
  {
    title: 'Modelado e impresión 3D completo',
    category: 'modelado',
    duration: 14,
    weeks: null,
    complexity: 'medium',
    description: 'Ruta integral desde diseño hasta impresión.',
    intro: 'Una ruta integral que te lleva desde los fundamentos del diseño en 3D hasta la impresión de tus propias piezas. Ideal para quienes quieren dominar todo el proceso.',
    needs: 'Laptop personal.',
    free: true,
    certificate: true
  },
  {
    title: 'Modelado 3D con IA (Meshy AI)',
    category: 'modelado',
    duration: 9,
    weeks: null,
    complexity: 'low',
    description: 'Creación de objetos cotidianos en 3D usando inteligencia artificial.',
    intro: 'Crea objetos cotidianos en 3D con ayuda de la inteligencia artificial de Meshy AI.',
    modality: 'Virtual por Zoom, de 5:00 p.m. a 8:00 p.m. (3 sesiones).',
    topics: [
      'Fundamentos de la impresión 3D',
      'Generación de modelos 3D con Meshy AI',
      'Preparación de archivos para impresión'
    ],
    includes: ['Cupo limitado'],
    free: true
  },
  {
    title: 'Corte y Grabado Láser Básico',
    category: 'modelado',
    duration: 6,
    weeks: null,
    complexity: 'low',
    description: 'Introducción práctica al corte y grabado láser.',
    intro: 'Aprende de forma práctica a utilizar la cortadora y grabadora láser.',
    modality: 'Presencial en K-Lab, PROTEC, TEC Campus San Carlos, de 4:30 p.m. a 7:30 p.m. (2 sesiones).',
    instructor: 'José Segales',
    includes: ['Cupo limitado, por orden de llegada']
  },

  {
    title: 'Introducción al Emprendimiento Digital',
    category: 'emprendimiento',
    duration: 12,
    weeks: '4 semanas',
    complexity: 'low',
    description: 'Fundamentos para negocios digitales.',
    intro: 'Convierte tus ideas en proyectos digitales innovadores y escalables.',
    requirements: 'Ninguno, todos pueden participar.',
    topics: [
      { label: 'Semana 1', text: 'Introducción a modelos de negocio digitales y casos de éxito' },
      { label: 'Semanas 2-3', text: 'Creación de Canvas, propuesta de valor y desarrollo de un MVP' },
      { label: 'Semana 4', text: 'Presentación de startups y estrategias de crecimiento' }
    ],
    free: true,
    certificate: true
  },
  {
    title: 'Casos prácticos en Startups',
    category: 'emprendimiento',
    duration: 12,
    weeks: null,
    complexity: 'medium',
    description: 'Análisis de casos reales.',
    intro: 'Curso especial "Insight de Emprendimiento Digital: Casos prácticos en Startups". Convierte tus ideas en negocios globales y suma experiencia real de la mano de grandes expertos.',
    requirements: 'Solo interés en el emprendimiento digital; abierto a todos.',
    topics: [
      'Casos reales de éxito y fracaso de startups en Corea y el mundo',
      'Espíritu emprendedor y lecciones aprendidas del fracaso',
      'Mentoría e ideas prácticas para inversión, expansión y estrategias de salida global',
      'Tips para quienes quieren iniciar o escalar su startup'
    ],
    includes: ['Interpretación coreano-español'],
    free: true,
    certificate: true
  },

  {
    title: 'Operación Básica de Raspberry Pi',
    category: 'iot',
    duration: 16,
    weeks: null,
    complexity: 'medium',
    description: 'Configuración y aplicaciones iniciales.',
    intro: 'Aprende a configurar y sacar el máximo provecho a esta potente placa. Ideal para proyectos IoT y computación física.',
    requirements: 'Haber completado un curso de Arduino o poseer conocimientos equivalentes.',
    free: true,
    certificate: true
  },

  {
    title: 'Introducción a MODI Master Kit + IA',
    category: 'iot',
    duration: 15,
    weeks: '2 semanas',
    complexity: 'low',
    description: 'Robótica educativa, automatización e IA con programación en bloques.',
    intro: 'Desarrolla competencias en robótica educativa, automatización e inteligencia artificial mediante programación en bloques con la plataforma MODI Planet.',
    modality: 'Híbrida, 5 días de 3 horas (teoría y práctica), en el Aula K-Lab, PROTEC, TEC Campus San Carlos.',
    instructor: 'Equipo docente de K-Lab Bolivia',
    requirements: 'Estudiantes de cualquier carrera con manejo básico de computadoras y acceso a internet. No se requieren conocimientos previos de programación o electrónica.',
    topics: [
      { label: 'Día 1', text: 'MODI Master Kit y electrónica básica: módulos de entrada, salida y comunicación (linterna automática, ventilador inteligente, automóvil básico)' },
      { label: 'Día 2', text: 'Programación en bloques con MODI Planet: condiciones, bucles y eventos (semáforo inteligente, casa domótica básica)' },
      { label: 'Día 3', text: 'Visualización de datos y automatización con sensores e IMU (detector de terremotos, detector de inundaciones)' },
      { label: 'Día 4', text: 'Introducción a la IA: entrenamiento de modelos con imágenes, sonidos y datos (detector de incendios, clasificación de sonidos)' },
      { label: 'Día 5', text: 'Entrenamiento de datos con sensores y proyecto final integrador' }
    ],
    includes: [
      'Se presta el MODI Master Kit durante las actividades',
      'Metodología STEAM y aprendizaje basado en proyectos'
    ],
    free: true,
    certificate: true
  }
];
