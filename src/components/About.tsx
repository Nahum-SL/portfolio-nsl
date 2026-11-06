import { about, labels } from '../content'
import { SectionTitle } from './ui'

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <SectionTitle>{labels.aboutTitle}</SectionTitle>
          <p className="mt-6 max-w-xl text-lg text-muted">{about.text}</p>
        </div>
        <ul className="grid gap-4">
          {about.highlights.map((item) => (
            <li key={item.label} className="rounded-2xl border border-border bg-surface px-6 py-5">
              <p className="font-display text-3xl font-semibold text-accent">{item.value}</p>
              <p className="mt-1 text-sm text-muted">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
