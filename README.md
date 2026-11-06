# Portafolio — Vite + React + TypeScript + Tailwind

## Empezar

```bash
npm install
npm run dev      # desarrollo
npm run build    # compila y revisa tipos
npm run preview  # prueba el build
```

## Qué editar

| Quiero cambiar…            | Archivo                         |
| -------------------------- | ------------------------------- |
| Mi nombre, contacto, links | `src/content.ts` → `profile`    |
| Proyectos (los 3)          | `src/content.ts` → `projects`   |
| Stack técnico              | `src/content.ts` → `stackGroups`|
| Sobre mí                   | `src/content.ts` → `about`      |
| Textos de la interfaz      | `src/content.ts` → `labels`     |
| Colores y fuentes          | `src/theme.css`                 |
| Tema por defecto           | `index.html` → `data-theme`     |
| Mi CV                      | `public/cv.pdf`                 |
| Capturas de proyectos      | `public/projects/`              |

Los componentes (`src/components/`) no necesitan tocarse.

## Agregar un proyecto

Copia un objeto de `projects` en `src/content.ts`, cambia los textos y apunta
`cover` y `gallery` a tus imágenes en `public/projects/`.
`architecture` y `links` son opcionales: si no los defines, no se muestran.

## Reutilizar para otra persona

1. Duplica el proyecto.
2. Cambia `src/content.ts` con sus datos.
3. Ajusta los valores de `src/theme.css` (colores y fuentes).
4. Pon `data-theme="light"` en `index.html` si quieres que arranque en claro.
