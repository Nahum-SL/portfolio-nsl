import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { ease, inView } from '../lib/motion'

export const btnPrimary =
  'inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

export const btnGhost =
  'inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-fg transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inView}
        transition={{ duration: 0.6, ease }}
        className="font-display text-5xl font-bold uppercase leading-none tracking-tight sm:text-6xl"
      >
        {children}
      </motion.h2>
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={inView}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        className="mt-4 block h-1 w-16 origin-left rounded-full bg-accent"
      />
    </div>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{children}</p>
  )
}
