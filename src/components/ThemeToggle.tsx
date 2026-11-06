import type { Theme } from '../hooks/useTheme'
import { MoonIcon, SunIcon } from './icons'

type Props = { theme: Theme; onToggle: () => void }

export function ThemeToggle({ theme, onToggle }: Props) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className="grid h-10 w-10 place-items-center rounded-full border border-border text-fg transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
