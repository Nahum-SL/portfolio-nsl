import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { certificates, labels } from "../content";
import { fadeUp, inView, stagger } from "../lib/motion";
import type { Shot } from "../types";
import { ExternalIcon } from "./icons";
import { Lightbox } from "./LightBox";
import { Eyebrow, SectionTitle } from "./ui";

export function Certificates() {
  const [zoomed, setZoomed] = useState<Shot | null>(null);
  const closeZoom = useCallback(() => setZoomed(null), []);
  const t = labels.certificates;

  if (certificates.length === 0) return null;

  return (
    <section id="certificados" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle>{labels.certificatesTitle}</SectionTitle>

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {certificates.map((cert) => (
          <motion.article
            key={cert.id}
            variants={fadeUp}
            whileHover={{
              y: -6,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-accent/60"
          >
            <button
              type="button"
              onClick={() => setZoomed({ src: cert.image, alt: cert.title })}
              aria-label={`${t.zoom}: ${cert.title}`}
              className="cursor-zoom-in overflow-hidden bg-bg focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
            >
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </button>

            <div className="flex flex-1 flex-col p-5">
              <Eyebrow>
                {cert.issuer} · {cert.year}
              </Eyebrow>
              <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">
                {cert.title}
              </h3>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <AnimatePresence>
        {zoomed && <Lightbox shot={zoomed} onClose={closeZoom} />}
      </AnimatePresence>
    </section>
  );
}
