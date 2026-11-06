import { labels, profile } from '../content'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { DownloadIcon, ExternalIcon, MailIcon } from './icons'
import { btnGhost, btnPrimary, SectionTitle } from './ui'

export function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-5 py-20">
      <div className="rounded-3xl border border-border bg-surface px-6 py-14 sm:px-12">
        <SectionTitle>{labels.contactTitle}</SectionTitle>
        <p className="mt-4 max-w-md text-lg text-muted">{labels.contactLead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className={btnPrimary}>
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>
          <a href={profile.cvUrl} download={profile.cvFileName} className={btnGhost}>
            CV
            <DownloadIcon className="h-4 w-4" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className={btnGhost}>
            GitHub
            <FaGithub className="h-7 w-7" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={btnGhost}>
            LinkedIn
            <FaLinkedin className="h-7 w-7" />
          </a>
        </div>
      </div>
    </section>
  )
}
