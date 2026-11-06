import { motion } from "motion/react";
import { ease } from "../lib/motion";
import { labels, profile } from "../content";
import type { Theme } from "../hooks/useTheme";
import { ThemeToggle } from "./ThemeToggle";

type Props = { theme: Theme; onToggleTheme: () => void };

export function Header({ theme, onToggleTheme }: Props) {
  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease }}
      className="sticky top-0 z-40 border-b border-border/60 bg-bg/80 backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#inicio"
          className="font-display text-2xl font-bold tracking-wide"
        >
          {profile.shortName}
          <span className="text-accent"></span>
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-7 md:flex">
            {labels.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted transition hover:text-fg"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            className="text-sm font-medium text-accent md:hidden"
          >
            Contacto
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </motion.header>
  );
}
