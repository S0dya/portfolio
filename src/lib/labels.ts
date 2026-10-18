export type Status = 'live' | 'released' | 'in-dev' | 'backend' | 'app' | 'tool' | 'closed';
export type Category = 'mobile' | 'tools' | 'web' | 'freelance';

export const STATUS: Record<Status, { label: string; color: string }> = {
  live: { label: 'Live', color: 'var(--color-green)' },
  released: { label: 'Released', color: 'var(--color-green)' },
  'in-dev': { label: 'In dev', color: 'var(--color-yellow)' },
  backend: { label: 'Backend', color: 'var(--color-cyan)' },
  app: { label: 'App + backend', color: 'var(--color-cyan)' },
  tool: { label: 'Tool', color: 'var(--color-purple)' },
  closed: { label: 'Closed project', color: 'var(--color-ink-400)' },
};

export const CATEGORY: Record<
  Category,
  { label: string; short: string; blurb: string; color: string }
> = {
  mobile: {
    label: 'Mobile games',
    short: 'mobile',
    blurb: 'Android and iOS titles.',
    color: 'var(--color-accent-500)',
  },
  tools: {
    label: 'Tools & backend',
    short: 'tools',
    blurb: 'Servers, clients and the tooling behind them.',
    color: 'var(--color-purple)',
  },
  web: {
    label: 'Web games',
    short: 'web',
    blurb: 'Browser builds on itch.io and Yandex.',
    color: 'var(--color-cyan)',
  },
  freelance: {
    label: 'Freelance',
    short: 'client',
    blurb: 'Paid work made for other people.',
    color: 'var(--color-orange)',
  },
};

/** Render order on the home page and the projects page. All peers. */
export const CATEGORY_ORDER: Category[] = ['mobile', 'tools', 'web', 'freelance'];
