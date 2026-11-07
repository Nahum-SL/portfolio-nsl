import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { certificates, labels } from "../content";
import { fadeUp, inView, stagger } from "../lib/motion";
import type { Certificate, Shot } from "../types";
import { ExternalIcon } from "./icons";
import { Lightbox } from "./LightBox";
import { Eyebrow, SectionTitle } from "./ui";

function CertificateCard({
  cert,
  onZoom,
}: {
  cert: Certificate;
  onZoom: (shot: Shot) => void;
}) {
  const [open, setOpen] = useState(false);
  const t = labels.certificates;
  const isLong = (cert.text?.length ?? 0) > 110;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-accent/60"
    >
      <button
        type="button"
        onClick={() => onZoom({ src: cert.image, alt: cert.title })}
        aria-label={`${t.zoom}: ${cert.title}`}
        className="cursor-zoom-in overflow-hidden bg-bg focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
      >
        <img
          src="/certificado-aws.webp"
          alt={cert.title}
          loading="lazy"
          className="aspect-3/2 w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </button>

      <div className="flex flex-1 flex-col p-5">
        <Eyebrow>
          {cert.issuer} · {cert.year}
        </Eyebrow>
        <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">
          {cert.title}
        </h3>

        {cert.text && (
          <p
            className={`mt-3 text-sm text-muted ${open ? "" : "line-clamp-3"}`}
          >
            {cert.text}
          </p>
        )}

        <div className="mt-4 flex items-center gap-5">
          {isLong && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="text-sm font-medium text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {open ? t.less : t.more}
            </button>
          )}
          {cert.url && (
            <a
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {t.verify}
              <ExternalIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Certificates() {
  const [zoomed, setZoomed] = useState<Shot | null>(null);
  const closeZoom = useCallback(() => setZoomed(null), []);

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
          <CertificateCard key={cert.id} cert={cert} onZoom={setZoomed} />
        ))}
      </motion.div>

      <AnimatePresence>
        {zoomed && <Lightbox shot={zoomed} onClose={closeZoom} />}
      </AnimatePresence>
    </section>
  );
}
