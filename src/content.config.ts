import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stations' }),
  schema: z.object({
    id: z.string(),
    course: z.string().default('cfm'),
    number: z.number(),
    title: z.string(),
    titleEn: z.string(),
    description: z.string(),
    descriptionEn: z.string(),
    badge: z.string(),
    badgeEn: z.string(),
    icon: z.string(),
    examWeight: z.number(),
    domain: z.string().optional(),
    status: z.enum(['live', 'planned']).default('planned'),
  }),
});

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/lessons' }),
  schema: z.object({
    id: z.string(),
    course: z.string().default('cfm'),
    station: z.string(),
    number: z.string(),
    title: z.string(),
    titleEn: z.string(),
    minutes: z.number(),
    order: z.number(),
    objectives: z.array(z.string()),
    objectivesEn: z.array(z.string()),
    hasTool: z.boolean().default(false),
    toolName: z.string().optional(),
    toolNameEn: z.string().optional(),
    quizId: z.string().optional(),
    sources: z.array(z.string()).optional(),
  }),
});

export const collections = { stations, lessons };