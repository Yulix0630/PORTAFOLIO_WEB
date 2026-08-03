// ============================================================================
// ARCHIVO DE DATOS DEL PORTAFOLIO
// ============================================================================
// Este es el ÚNICO archivo que necesitas editar para personalizar tu portafolio
// con tu propia información. Los componentes en src/components/ solo leen estos
// datos, así que puedes cambiar todo aquí sin tocar ningún componente.
//
// Ver README.md -> "Cómo editar tu portafolio" para ejemplos guiados.
// ============================================================================

import profilePlaceholder from '../assets/images/perfil.jpg'
import projectPlaceholder from '../assets/images/project-placeholder.svg'

// ----------------------------------------------------------------------------
// PERFIL: información principal que aparece en la sección Hero
// ----------------------------------------------------------------------------
export const profileData = {
  name: 'Carlos Molina',
  title: 'Ingeniero de Software',
  tagline: 'Estoy comenzando en esto de la ingeniería, pero tengo muchas ganas de aprender y crecer profesionalmente.',
  location: 'Baranoa, Atlántico, Colombia',
  // Para usar tu propia foto: reemplaza el archivo en src/assets/images/profile-placeholder.svg
  // (o agrega tu foto, ej. profile.jpg, e impórtala arriba y úsala aquí).
  photo: profilePlaceholder,
}

// ----------------------------------------------------------------------------
// REDES SOCIALES Y CONTACTO: se usan en el Hero, la sección Contacto y el Footer
// ----------------------------------------------------------------------------
export const socialLinks = {
  linkedin: 'https://linkedin.com/in/carlos-arturo-molina-tomases-a8856a124/',
  github: 'https://github.com/Yulix0630',
  email: 'Carlosmt67@gmail.com',
}

// ----------------------------------------------------------------------------
// SOBRE MÍ: párrafo de presentación
// ----------------------------------------------------------------------------
export const aboutData = {
  paragraph:
    'Estudiante de Ingeniería de Sistemas apasionado por el desarrollo de software y la gestión de bases de datos. ' +
    'Cuento con experiencia práctica en soporte técnico de TICs, infraestructura y gestión administrativa. ' +
    'Enfocado en crear aplicaciones web funcionales y optimizar procesos mediante Python, React y bases de datos SQL.',
}

// ----------------------------------------------------------------------------
// HABILIDADES: lista simple de objetos {name, icon}.
// El icono es un emoji para no depender de imágenes externas ni librerías.
// Agrega o quita objetos de este array para actualizar la sección.
// ----------------------------------------------------------------------------
export const skillsData = [
  { name: 'Gestión Contable / Excel', icon: '🟨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'Sistemas Operativos (Win/Linux)', icon: '🧱' },
  { name: 'Mesa de Ayuda (Help Desk)', icon: '🎨' },
  { name: 'Git y GitHub', icon: '🔧' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Java', icon: '☕' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Soporte TIC & Redes', icon: '🐧' },
  { name: 'Trabajo en equipo', icon: '🤝' },
]

// ----------------------------------------------------------------------------
// PROYECTOS: cada objeto es una tarjeta en la sección Proyectos.
// Para agregar un proyecto nuevo, copia un objeto del array y edita sus valores.
// Para quitar uno, simplemente elimina su objeto del array.
// ----------------------------------------------------------------------------
export const projectsData = [
  {
    id: 1,
    title: 'Gestor de Tareas Colaborativo',
    description:
      'Aplicación web para crear y organizar tareas en equipo, con tableros estilo Kanban, ' +
      'arrastrar y soltar, y notificaciones en tiempo real.',
    image: projectPlaceholder,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    repoUrl: 'https://github.com/tu-usuario/gestor-tareas',
    demoUrl: 'https://gestor-tareas-demo.vercel.app',
  },
  {
    id: 2,
    title: 'API REST de E-commerce',
    description:
      'Backend para una tienda en línea con autenticación de usuarios, catálogo de productos, ' +
      'carrito de compras y procesamiento de pedidos.',
    image: projectPlaceholder,
    technologies: ['Python', 'Django REST', 'PostgreSQL', 'Docker'],
    repoUrl: 'https://github.com/tu-usuario/ecommerce-api',
    demoUrl: '',
  },
  {
    id: 3,
    title: 'Dashboard del Clima',
    description:
      'Panel interactivo que consume una API pública de clima y muestra pronósticos por ciudad ' +
      'con gráficas de temperatura y humedad.',
    image: projectPlaceholder,
    technologies: ['React', 'Tailwind CSS', 'Chart.js'],
    repoUrl: 'https://github.com/tu-usuario/dashboard-clima',
    demoUrl: 'https://dashboard-clima-demo.vercel.app',
  },
]

// ----------------------------------------------------------------------------
// EXPERIENCIA Y EDUCACIÓN: timeline unificado, ordenado del más reciente al más
// antiguo. El campo "type" ('work' | 'education') controla el color del badge.
// ----------------------------------------------------------------------------
export const experienceData = [
  {
    id: 1,
    type: 'work',
    role: 'Auxiliar de Sistemas',
    place: 'Education HUB.',
    period: '16 de Marzo de 2015 - 8 de Octubre de 2015 ; 16 de Marzo de 2016 - 15 de Agosto de 2017',
    description:
      'Mantenimiento y reparacion de equipos de cómputo. ' +
      'Puesta a punto de equipos audiovisuales y de computo.',
  },
  {
    id: 2,
    type: 'education',
    role: 'Técnico en Documentación y registro de operaciones contables.',
    place: 'Servicio Nacional de Aprendizaje SENA.',
    period: '2016',
    description:
      'Formación en auxiliar de registro de operaciones contables. ' +
      'Conocimientos en excel.',
  },
  {
    id: 3,
    type: 'work',
    role: 'Auxiliar de TIC´s (Practicas)',
    place: 'SuperBrix S.A.',
    period: '9 de Enero del 2018 - 16 de Julio de 2018',
    description:'Registro de información en el sistema de la empresa, mantenimiento de equipos de cómputo y soporte técnico a los usuarios.',
  },
  {
    id: 4,
    type: 'work',
    role: 'Auxiliar contable y Técnico en sistemas',
    place: 'Todo electrico Tavo',
    period: '2019 - Actualidad',
    description: 'Registro de información contable y financiera, mantenimiento de equipos de cómputo y soporte técnico a los usuarios.',
  },
]

// ----------------------------------------------------------------------------
// CONTACTO: se usa en la sección Contacto (formulario -> mailto) y el Footer.
// ----------------------------------------------------------------------------
export const contactData = {
  email: 'carlosmt67@gmail.com',
  phone: '+57 323 331 8962',
  availability: 'Disponible para prácticas profesionales y proyectos freelance',
}
