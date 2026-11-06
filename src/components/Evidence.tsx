import { useCallback, useState } from "react";
import type { EvidenceSection, Shot } from "../types";
import { Lightbox } from "./LightBox";

export function Evidence({ sections }: { sections: EvidenceSection[] }) {
  const [activeId, setActiveId] = useState<string | undefined>(sections[0]?.id);
  const [zoomed, setZoomed] = useState<Shot | null>(null);
  const closeZoom = useCallback(() => setZoomed(null), []);

  const active = sections.find((s) => s.id === activeId) ?? sections[0];
  if (!active) return null;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Secciones del proyecto"
        className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
      >
        {sections.map((s) => {
          const selected = s.id === active.id;
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={selected}
              aria-controls={`panel-${s.id}`}
              onClick={() => setActiveId(s.id)}
              className={`shrink-0 rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                selected
                  ? "border-accent bg-accent text-on-accent"
                  : "border-border text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="mt-4"
      >
        <p className="text-muted">{active.caption}</p>
        <div
          className={`mt-4 grid gap-3 ${active.shots.length > 1 ? "sm:grid-cols-2" : ""}`}
        >
          {active.shots.map((shot, i) => (
            <button
              key={`${shot.src}-${i}`}
              type="button"
              onClick={() => setZoomed(shot)}
              aria-label={`Ampliar: ${shot.alt}`}
              className="group cursor-zoom-in overflow-hidden rounded-xl border border-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
              />
            </button>
          ))}
        </div>
      </div>

      {zoomed && <Lightbox shot={zoomed} onClose={closeZoom} />}
    </div>
  );
}
