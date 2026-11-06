import { labels, profile } from '../content'
import { TypedCode } from './animation/TypeCode'
import { ArrowIcon, DownloadIcon } from './icons'
import { btnGhost, btnPrimary, Eyebrow } from './ui'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-120 w-225 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 sm:pb-28 sm:pt-28">
        <Eyebrow>{profile.role}</Eyebrow>
        <h1 className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-8xl md:text-9xl">
          {profile.name}
          <TypedCode />
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">{profile.headline}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#proyectos" className={btnPrimary}>
            {labels.heroPrimary}
            <ArrowIcon className="h-4 w-4" />
          </a>
          <a href={profile.cvUrl} download={profile.cvFileName} className={btnGhost}>
            {labels.heroCv}
            <DownloadIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
