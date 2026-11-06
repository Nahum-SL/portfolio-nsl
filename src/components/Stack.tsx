import { labels, stackGroups } from '../content'
import { TechIcon } from './icons/TechIcon'
import { Eyebrow, SectionTitle } from './ui'

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle>{labels.stackTitle}</SectionTitle>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-border bg-surface p-6">
            <Eyebrow>{group.title}</Eyebrow>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-5">
              {group.items.map((id) => (
                <li key={id}>
                  <TechIcon id={id} withName />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}