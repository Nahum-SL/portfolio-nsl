import { useCallback, useState } from 'react'
import { labels, projects } from '../content'
import type { Project } from '../types'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import { SectionTitle } from './ui'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-5 py-20">
      <SectionTitle>{labels.projectsTitle}</SectionTitle>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={() => setActive(project)} />
        ))}
      </div>
      {active && <ProjectModal project={active} onClose={close} />}
    </section>
  )
}
