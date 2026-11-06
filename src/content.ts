import type { Highlight, Project, StackGroup } from "./types";

/*
  CONTENIDO: todo el texto del portafolio vive aquí (datos de ejemplo).
  Para reutilizarlo con otra persona, cambia este archivo y src/theme.css.
  Los componentes no se tocan.
*/

export const profile = {
  name: "Nahum SL",
  shortName: "NL",
  role: "Desarrollador Full Stack",
  headline:
    "Construyo aplicaciones web de punta a punta, del diseño a producción.",
  email: "nahum2006sl@gmail.com",
  github: "https://github.com/Nahum-SL",
  linkedin: "https://www.linkedin.com/in/tu-usuario",
  /** Pon tu PDF en public/cv.pdf */
  cvUrl: "/cv.pdf",
  cvFileName: "CV-Nahum-SL.pdf",
};

/** Textos de la interfaz (editables / traducibles) */
export const labels = {
  nav: [
    { href: "#proyectos", text: "Proyectos" },
    { href: "#stack", text: "Stack" },
    { href: "#sobre-mi", text: "Sobre mí" },
    { href: "#contacto", text: "Contacto" },
  ],
  heroPrimary: "Ver proyectos",
  heroCv: "Descargar CV",
  projectsTitle: "Proyectos",
  stackTitle: "Stack técnico",
  aboutTitle: "Sobre mí",
  contactTitle: "Hablemos",
  contactLead: "Abierto a nuevas oportunidades y proyectos.",
  project: {
    problem: "El problema",
    role: "Mi rol",
    solution: "La solución y el impacto",
    stack: "El stack tecnológico",
    evidence: "Evidencia visual",
    architecture: "Arquitectura",
    demo: "Ver demo",
    repo: "Ver código",
    close: "Cerrar",
    open: "Ver detalle",
  },
  footer: "Hecho con React + Tailwind",
};

export const projects: Project[] = [
  {
    id: "asescon",
    title: "Asescon",
    tagline:
      "Tienda online completa con catálogo, carrito y panel de administración.",
    category: "Proyecto · Next.js - Nest.JS",
    cover: "/projects/asescon/home-hero-asescon.webp",
    problem:
      "Un negocio pequeño vendía por mensajería y perdía pedidos por no tener un catálogo ni inventario centralizado.",
    role: "Desarrollador full stack: diseño de la base de datos, API, interfaz y despliegue.",
    solution:
      "Una tienda con catálogo, carrito, checkout y un panel para gestionar productos, stock y pedidos.",
    impact: [
      "Pedidos centralizados en un solo panel",
      "Inventario actualizado en tiempo real",
      "Carga de página bajo 2 segundos",
    ],
    stack: ["nextjs", "typescript", "tailwind", "prisma", "postgresql", "nestjs"],
    gallery: [
      {
        src: "/projects/asescon/placeholder.svg",
        alt: "Catálogo de productos",
      },
      {
        src: "/projects/asescon/placeholder.svg",
        alt: "Panel de administración",
      },
    ],
    evidence: [
      {
        id: "home",
        label: "Home",
        caption:
          "Nueva portada con mensaje claro y llamada a la acción visible.",
        shots: [
          {
            src: "/projects/asescon/home-hero-asescon.webp",
            alt: "Página de inicio rediseñada",
          },
          {
            src: "/projects/asescon/home-servicios-asescon.webp",
            alt: "Página de inicio - servicios",
          },
          {
            src: "/projects/asescon/home-blog-asescon.webp",
            alt: "Página de inicio - blog",
          },
          {
            src: "/projects/asescon/home-contacto-asescon.webp",
            alt: "Página de inicio - contacto",
          },
        ],
      },
      {
        id: "blog",
        label: "Blog",
        caption:
          "Rediseño visual y herramientas gratuitas para que el cliente las use.",
        shots: [
          {
            src: "/projects/asescon/blog/blog-hero.webp",
            alt: "Hero del blog",
          },
          {
            src: "/projects/asescon/blog/blog-reciente.webp",
            alt: "Reciente blog",
          },
          {
            src: "/projects/asescon/blog/blog-herramientas.webp",
            alt: "Herramientas del blog",
          },
          {
            src: "/projects/asescon/blog/blog-info.webp",
            alt: "Info del blog",
          },
          {
            src: "/projects/asescon/blog/blog-info-lectura.webp",
            alt: "Info del blog - lectura",
          },
        ],
      },
      {
        id: "servicios",
        label: "Servicios",
        caption:
          "Filtra por dolor del cliente, tipo de negocio y búsqueda, y muestra el porcentaje de conveniencia al tocar un selector.",
        shots: [
          {
            src: "/projects/asescon/servicios/servicio-hero.webp",
            alt: "Hero del Servicio",
          },
          {
            src: "/projects/asescon/servicios/servicio-sinfiltrar.webp",
            alt: "Servicios sin filtros",
          },
          {
            src: "/projects/asescon/servicios/servicio-confiltros.webp",
            alt: "Servicios con filtros",
          },
          {
            src: "/projects/asescon/servicios/servicio-confiltros-2.webp",
            alt: "Match de servicios con filtro",
          },
          {
            src: "/projects/asescon/servicios/servicio-comparado.webp",
            alt: "Servicios comparados",
          },
          {
            src: "/projects/asescon/servicios/servicio-info.webp",
            alt: "Servicios comparados",
          },
        ],
      },
      {
        id: "nosotros",
        label: "Nosotros",
        caption:
          "Página de información de la empresa rediseñada, con historia, misión y visión.",
        shots: [
          {
            src: "/projects/asescon/nosotros/nosotros-hero.webp",
            alt: "Hero de Nosotros",
          },
          {
            src: "/projects/asescon/nosotros/nosotros-header.webp",
            alt: "Header de Nosotros",
          },
          {
            src: "/projects/asescon/nosotros/nosotros-filosofia.webp",
            alt: "Filosofía de Nosotros",
          },
          {
            src: "/projects/asescon/nosotros/nosotros-footer.webp",
            alt: "Experiencia de Nosotros",
          },
        ],
      },
      {
        id: "intranet",
        label: "Intranet",
        caption: "Página de la intranet de la empresa rediseñada",
        shots: [
          {
            src: "/projects/asescon/intranet/intranet-hero.webp",
            alt: "Hero de Intranet",
          },
        ],
      },
      {
        id: "administracion",
        label: "Admin",
        caption:
          "Página de la administración de la empresa rediseñada, con metricas de vistas y usuarios, y un panel de control para gestionar el contenido.",
        shots: [
          {
            src: "/projects/asescon/admin/dashboard-admin.webp",
            alt: "Dashboard de Administración",
          },
          {
            src: "/projects/asescon/admin/auditoria-admin.webp",
            alt: "Auditoría de Administración",
          },
        ],
      },
    ],
  },
  {
    id: "nextstore",
    title: "NextStore — E-commerce",
    tagline:
      "Tienda online completa con catálogo, carrito y panel de administración.",
    category: "Proyecto · Next.js",
    cover: "/projects/nextstore.svg",
    problem:
      "Un negocio pequeño vendía por mensajería y perdía pedidos por no tener un catálogo ni inventario centralizado.",
    role: "Desarrollador full stack: diseño de la base de datos, API, interfaz y despliegue.",
    solution:
      "Una tienda con catálogo, carrito, checkout y un panel para gestionar productos, stock y pedidos.",
    impact: [
      "Pedidos centralizados en un solo panel",
      "Inventario actualizado en tiempo real",
      "Carga de página bajo 2 segundos",
    ],
    stack: ["nextjs", "typescript", "prisma", "postgresql", "tailwind"],
    gallery: [
      { src: "/projects/placeholder.svg", alt: "Catálogo de productos" },
      { src: "/projects/placeholder.svg", alt: "Panel de administración" },
    ],
    evidence: [],
  },
];

export const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    items: ["react", "nextjs", "typescript", "vite", "tailwind"],
  },
  { title: "Backend", items: ["express", "nestjs", "python", "go"] },
  { title: "Datos", items: ["postgresql", "prisma", "knex", "mysql"] },
  { title: "Herramientas", items: ["git", "github", "docker","nodejs", "android"] },
];

export const about = {
  text: "Soy desarrollador full stack. Me importa escribir código claro y entregar productos que funcionan de verdad.",
  highlights: [
    { value: "3", label: "Proyectos terminados" },
    { value: "Full Stack", label: "Del diseño a producción" },
    { value: "TypeScript", label: "En todo el stack" },
  ] satisfies Highlight[],
};
