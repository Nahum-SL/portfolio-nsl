import { useCallback, useState } from "react";
import { AnimatePresence } from "motion/react";
import type { EvidenceSection } from "../types";
import { Lightbox } from "./LightBox";

export function Evidence({ sections }: { sections: EvidenceSection[] }) {
  const [activeId, setActiveId] = useState<string | undefined>(sections[0]?.id);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const active = sections.find((s) => s.id === activeId) ?? sections[0];
  const total = active?.shots.length ?? 0;

  const closeZoom = useCallback(() => setZoomedIndex(null), []);
  const next = useCallback(
    () => setZoomedIndex((i) => (i === null ? i : (i + 1) % total)),
    [total],
  );
  const prev = useCallback(
    () => setZoomedIndex((i) => (i === null ? i : (i - 1 + total) % total)),
    [total],
  );

  if (!active) return null;

  const zoomed = zoomedIndex !== null ? active.shots[zoomedIndex] : undefined;

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
        <div className={`mt-4 grid gap-3 ${total > 1 ? "sm:grid-cols-2" : ""}`}>
          {active.shots.map((shot, i) => (
            <button
              key={`${shot.src}-${i}`}
              type="button"
              onClick={() => setZoomedIndex(i)}
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

      <AnimatePresence>
        {zoomed && (
          <Lightbox
            shot={zoomed}
            onClose={closeZoom}
            onPrev={total > 1 ? prev : undefined}
            onNext={total > 1 ? next : undefined}
            counter={
              total > 1 ? `${(zoomedIndex ?? 0) + 1} / ${total}` : undefined
            }
          />
        )}
      </AnimatePresence>
    </div>
  );
}
