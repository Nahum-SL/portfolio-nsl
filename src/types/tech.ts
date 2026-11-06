export interface Tech {
  name: string
  icon?: string
  /** Logo de un solo color oscuro: se invierte en modo oscuro */
  mono?: boolean
}

const t = (name: string, file?: string, mono = false): Tech => ({
  name,
  icon: file ? `/tech/${file}.svg` : undefined,
  mono,
})

export const tech = {
  react: t('React', 'react'),
  nextjs: t('Next.js', 'nextjs', true),
  typescript: t('TypeScript', 'typescript'),
  tailwind: t('Tailwind CSS', 'tailwind'),
  nodejs: t('Node.js', 'nodejs'),
  express: t('Express', 'express', true),
  nestjs: t('NestJS', 'nestjs'),
  rest: t('REST'),
  postgresql: t('PostgreSQL', 'postgresql'),
  prisma: t('Prisma', 'prisma', true),
  turborepo: t('Turborepo', 'turborepo'),
  git: t('Git', 'git'),
  github: t('GitHub', 'github', true),
  docker: t('Docker', 'docker'),
  vite: t('Vite', 'vite'),
  knex: t('Knex.js', 'knex', true),
  mysql: t('MySQL', 'mysql', true),
  python: t('Python', 'python'),
  go: t('Go', 'go', true),
  android: t('Android', 'android', true),
} satisfies Record<string, Tech>

export type TechId = keyof typeof tech