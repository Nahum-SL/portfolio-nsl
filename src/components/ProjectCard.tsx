import { labels } from '../content'
import type { Project } from '../types'
import { ArrowIcon } from './icons'

type Props = { project: Project; onOpen: () => void }

export function ProjectCard({ project, onOpen }: Props) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${labels.project.open}: ${project.title}`}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-surface text-left transition duration-300 hover:-translate-y-1 hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="aspect-video overflow-hidden bg-bg">
        <img
          src={project.cover}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {project.category}
        </p>
        <h3 className="mt-3 font-display text-3xl font-semibold leading-tight">{project.title}</h3>
        <p className="mt-3 flex-1 text-muted">{project.tagline}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
          {labels.project.open}
          <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  )
}
