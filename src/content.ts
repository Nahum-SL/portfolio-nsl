import type { Certificate, Highlight, Project, StackGroup } from "./types";

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
  linkedin: "https://www.linkedin.com/in/nahumsl667/",
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
    { href: "#certificados", text: "Certificados" },
  ],
  certificatesTitle: "Certificados",
  certificates: {
    verify: "Verificar",
    zoom: "Ampliar",
    more: "Ver más",
    less: "Ver menos",
  },
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
    tagline: "Rediseño de pagina web con panel administrativo",
    category: "Proyecto · Next.js - Nest.JS",
    cover: "/projects/asescon/home-hero-asescon.webp",
    problem:
      "La interfaz de la pagina web oficial, no capta a un cliente potencial que necesite asesorarse.",
    role: "Desarrollador full stack: diseño de la base de datos, API, interfaz y despliegue.",
    solution:
      "Rediseñar la pagina web con más interaccion para el usuario y retenerlo, ademas de ofrecer herramientas gratuitas conforme a su RUC. Además de elaborar un panel administrativo que permita gestionar su web.",
    impact: [
      "Gestion de las paginas web en tiempo real",
      "Rapidez de la web bajo 2 segundos",
      "Mayor interacción con el usuario navegador",
    ],
    stack: [
      "nextjs",
      "typescript",
      "react",
      "tailwind",
      "prisma",
      "postgresql",
      "nestjs",
    ],
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
    id: "systemInventoryQr",
    title: "Sistema de Inventario con QRs",
    tagline:
      "Tienda online completa con catálogo, carrito y panel de administración.",
    category: "Proyecto · Express - Vite",
    cover: "/projects/sysqr/dashboard-admin.webp",
    problem: `
        Actualmente, la empresa presenta dificultades para administrar y controlar sus activos, 
        entre ellos computadoras, laptops, impresoras, equipos tecnológicos, máquinas y mobiliario. 
        La ausencia de un registro centralizado dificulta conocer con precisión su cantidad, ubicación, 
        condición y responsable asignado
      `,
    role: "Desarrollador full stack: diseño de la base de datos, API, interfaz y despliegue.",
    solution: `Actualmente, la empresa presenta dificultades para administrar y 
    controlar sus activos, entre ellos computadoras, laptops, impresoras, 
    equipos tecnológicos, máquinas y mobiliario. La ausencia de un registro 
    centralizado dificulta conocer con precisión su cantidad, ubicación, condición y 
    responsable asignado`,
    impact: [
      "Inventario actualizado en tiempo real",
      "Exportar lista del inventario y hoja de vida del activo en PDF",
      "Rapidez de la pagina web",
    ],
    stack: [
      "express",
      "knex",
      "typescript",
      "mysql",
      "vite",
      "react",
      "tailwind",
    ],
    gallery: [
      { src: "/projects/placeholder.svg", alt: "Catálogo de productos" },
      { src: "/projects/placeholder.svg", alt: "Panel de administración" },
    ],
    evidence: [
      {
        id: "dashboard",
        label: "Dashboard",
        caption:
          "Panel administrativo con graficas del estado de los activos actuales.",
        shots: [
          {
            src: "/projects/sysqr/dashboard-admin.webp",
            alt: "Dashboard admin",
          },
          {
            src: "/projects/sysqr/dashboard-barras.webp",
            alt: "Dashboard grafico de barras con selector",
          },
          {
            src: "/projects/sysqr/dashboard-barras-filtro.webp",
            alt: "Dashboard grafico de barras con selector",
          },
          {
            src: "/projects/sysqr/dashboard-traslados.webp",
            alt: "Dahboard ultimos traslados",
          },
        ],
      },
      {
        id: "activos",
        label: "Activos",
        caption: "Panel para filtrar y listar los activos.",
        shots: [
          {
            src: "/projects/sysqr/activos/activos-lista.webp",
            alt: "Panel de listar los activos",
          },
          {
            src: "/projects/sysqr/activos/activos-filtro.webp",
            alt: "Panel de listar activos con filtro ",
          },
          {
            src: "/projects/sysqr/activos/activo-gestion.webp",
            alt: "Panel del activo para gestionar ",
          },
          {
            src: "/projects/sysqr/activos/hoja-de-vida.webp",
            alt: "Hoja de vida del activo",
          },
          {
            src: "/projects/sysqr/activos/activos-history.webp",
            alt: "Historial del activo",
          },
          {
            src: "/projects/sysqr/activos/crear-activo.webp",
            alt: "Crear nuevo activo",
          },
        ],
      },
      {
        id: "reportes",
        label: "Reportes",
        caption:
          "Panel para exportar los activos y su responsable actual | PDF de activos con datos simulados",
        shots: [
          {
            src: "/projects/sysqr/reportes/report-image.webp",
            alt: "Panel para exportar el inventario",
          },
          {
            src: "/projects/sysqr/reportes/reporte-pdf.webp",
            alt: "PDF de los activos del inventario",
          },
        ],
      },
      {
        id: "etiquetas",
        label: "Etiquetas QR",
        caption:
          "Panel para listar y exportar los QR de los activos en el inventario.",
        shots: [
          {
            src: "/projects/sysqr/etiquetas/etiquetas-image.webp",
            alt: "Lista de los codigos de los activos",
          },
          {
            src: "/projects/sysqr/etiquetas/etiquetas-filtro.webp",
            alt: "Seleccionar codigo de los activos del inventario",
          },
          {
            src: "/projects/sysqr/etiquetas/etiquetas-imprimir.webp",
            alt: "Sección para exportar los QRs del inventario",
          },
        ],
      },
      {
        id: "scanner",
        label: "Usuario Normal",
        caption:
          "Panel del scanner para listar y los activos del el inventario.",
        shots: [
          {
            src: "/projects/sysqr/scanner/panel-scanner.webp",
            alt: "Lista de los codigos de los activos para el usuario",
          },
          {
            src: "/projects/sysqr/scanner/scanner-activo.webp",
            alt: "Vista del activo 1",
          },
          {
            src: "/projects/sysqr/scanner/scanner-historial.webp",
            alt: "Vista del activo 2",
          },
        ],
      },
    ],
  },
];

export const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    items: ["react", "nextjs", "typescript", "vite", "tailwind"],
  },
  { title: "Backend", items: ["express", "nestjs", "python", "go"] },
  { title: "Datos", items: ["postgresql", "prisma", "knex", "mysql"] },
  {
    title: "Herramientas",
    items: ["git", "github", "docker", "nodejs", "android"],
  },
];

export const about = {
  text: "Soy desarrollador full stack. Me importa escribir código claro y entregar productos que resuelvan un problema de verdad.",
  status: "Disponible para nuevos proyectos",
  highlights: [
    { value: "2", label: "Proyectos terminados" },
    { value: "Full Stack", label: "Del diseño a producción" },
    { value: "Dev Ops", label: "En trayectoria" },
    { value: "TypeScript", label: "En la mayor parte del stack" },
  ] satisfies Highlight[],
};

export const certificates: Certificate[] = [
  {
    id: "aws",
    title: "AWS Cloud Practitioner Essentials",
    text: "Fundamentos de computación en la nube con AWS, incluyendo servicios de almacenamiento, bases de datos, redes, seguridad y gestión de infraestructura. Conocimientos sobre los principales servicios de AWS y sus aplicaciones en soluciones cloud.",
    issuer: "Skill Builder AWS",
    year: "2026",
    image: "/certificado-aws.webp",
  },
];
