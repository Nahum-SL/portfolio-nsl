import { TechId } from "./types/tech";

export interface Shot {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  /** Una línea, se ve en la tarjeta */
  tagline: string;
  /** Etiqueta pequeña de la tarjeta, ej. "PROYECTO · REACT" */
  category: string;
  cover: string;
  /** El problema */
  problem: string;
  /** Mi rol */
  role: string;
  /** La solución */
  solution: string;
  /** Impacto, en puntos cortos */
  impact: string[];
  /** El stack tecnológico */
  stack: TechId[];
  /** Capturas de la UI */
  gallery: Shot[];
  /** Opcional: imagen de arquitectura. Si no existe, no se muestra. */
  architecture?: Shot;
  /** Opcional: enlaces. Si el repo es privado, déjalo sin definir. */
  links?: { demo?: string; repo?: string };
  evidence: EvidenceSection[];
}

export interface StackGroup {
  title: string;
  items: TechId[];
}

export interface Highlight {
  value: string;
  label: string;
}

export interface EvidenceSection {
  id: string;
  /** Texto de la pestaña, ej. "Home", "Blog", "Servicios" */
  label: string;
  /** Una línea: qué hiciste y qué le aporta al cliente */
  caption: string;
  shots: Shot[];
}

export interface Project {
  // ...todo igual, pero cambia esta línea:
  // gallery: Shot[]
  evidence: EvidenceSection[];
  // ...
}

export interface Certificate {
  id: string
  title: string
  /** Quién lo emite, ej. "Udemy", "Platzi" */
  issuer: string
  year: string
  /** Imagen del certificado (.webp) */
  image: string
  /** Opcional: enlace para verificarlo */
  url?: string
}