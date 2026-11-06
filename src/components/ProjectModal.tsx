import { useEffect, useRef, type ReactNode } from "react";
import { labels } from "../content";
import type { Project } from "../types";
// ATOMIC COMPONENTS
import { CloseIcon, ExternalIcon } from "./icons";
import { btnGhost, btnPrimary } from "./ui";
// COMPONENTES UI
import { Evidence } from "./Evidence";
import { TechIcon } from "./icons/TechIcon";

type Props = { project: Project; onClose: () => void };

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {title}
      </h4>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function ProjectModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = `project-title-${project.id}`;
  const t = labels.project;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-border bg-surface sm:rounded-3xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-surface/95 p-6 backdrop-blur">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {project.category}
            </p>
            <h3
              id={titleId}
              className="mt-2 font-display text-3xl font-semibold sm:text-4xl"
            >
              {project.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="space-y-8 p-6">
          <Block title={t.problem}>
            <p className="text-fg/90">{project.problem}</p>
          </Block>

          <Block title={t.role}>
            <p className="text-fg/90">{project.role}</p>
          </Block>

          <Block title={t.solution}>
            <p className="text-fg/90">{project.solution}</p>
            <ul className="mt-4 space-y-2">
              {project.impact.map((item) => (
                <li key={item} className="flex gap-3 text-muted">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Block>

          <Block title={t.stack}>
            <ul className="flex flex-wrap gap-3">
              {project.stack.map((id) => (
                <li key={id}>
                  <TechIcon id={id} />
                </li>
              ))}
            </ul>
          </Block>

          <Block title={t.evidence}>
            <Evidence sections={project.evidence} />
          </Block>

          {project.architecture && (
            <Block title={t.architecture}>
              <img
                src={project.architecture.src}
                alt={project.architecture.alt}
                loading="lazy"
                className="w-full rounded-xl border border-border"
              />
            </Block>
          )}

          {(project.links?.demo || project.links?.repo) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className={btnPrimary}
                >
                  {t.demo}
                  <ExternalIcon className="h-4 w-4" />
                </a>
              )}
              {project.links.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className={btnGhost}
                >
                  {t.repo}
                  <ExternalIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
