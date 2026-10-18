import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.string(),
    role: z.string(),
    status: z.enum(['live', 'released', 'in-dev', 'backend', 'app', 'tool', 'closed']),
    category: z.enum(['mobile', 'tools', 'web', 'freelance']),
    platform: z.string(),
cover: z.string().optional(),
  /** Smaller optimised copy, used ONLY on the profile card. Detail pages always use `cover`. */
  coverThumb: z.string().optional(),
  coverIsGif: z.boolean().default(false),
    /** Intrinsic pixel size of the cover, so the browser reserves space and nothing shifts. */
    coverWidth: z.number().optional(),
    coverHeight: z.number().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    tags: z.array(z.string()),
    github: z.string().optional(),
    /** Second repo, e.g. a separate backend for a Unity client. */
    githubBackend: z.string().optional(),
    githubLabel: z.string().optional(),
    githubBackendLabel: z.string().optional(),
play: z.string().optional(),
itch: z.string().optional(),
/** Google Play / Steam listing screenshots, shown as an ASO-style block. */
storeShots: z.array(z.string()).optional(),
    /** Shown on the card when the work was paid client work rather than your own. */
    client: z.string().optional(),
    accent: z.string().optional(),
  }),
});

export const collections = { projects };