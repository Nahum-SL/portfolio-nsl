import type { MouseEvent } from "react";
import { motion } from "motion/react";
import { about, labels } from "../content";
import { fadeUp, inView, Reveal, stagger } from "../lib/motion";
import { SectionTitle } from "./ui";

/** Guarda la posición del mouse para el destello de la tarjeta */
function spotlight(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
}

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div>
          <SectionTitle>{labels.aboutTitle}</SectionTitle>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {about.text}
            </p>
            {about.status && (
              <p className="mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-2 text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                {about.status}
              </p>
            )}
          </Reveal>
        </div>

        <motion.ul
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="grid grid-cols-2 gap-4"
        >
          {about.highlights.map((item) => (
            <motion.li
              key={item.label}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              onMouseMove={spotlight}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent/60"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(220px_circle_at_var(--x,50%)_var(--y,50%),color-mix(in_oklab,var(--accent)_22%,transparent),transparent)]"
              />
              <p className="relative font-display text-2xl font-semibold text-accent sm:text-3xl">
                {item.value}
              </p>
              <p className="relative mt-1 text-sm text-muted">{item.label}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
