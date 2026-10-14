import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      year: z.number(),
      role: z.string(),
      status: z.enum(['live', 'released', 'in-dev', 'backend']),
      platform: z.string(),
      featured: z.boolean().default(false),
      order: z.number().default(99),
      tags: z.array(z.string()),
      video: z.string().optional(),
      github: z.string().optional(),
      play: z.string().optional(),
      cover: z.string().optional(),
      accent: z.string().optional(),
    }),
});

export const collections = { projects };