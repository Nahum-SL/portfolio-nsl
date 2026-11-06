import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

function readInitial(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitial)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* almacenamiento no disponible: se ignora */
    }
  }, [theme])

  return { theme, toggle }
}
