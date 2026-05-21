import { defineCollection, z } from 'astro:content';

const mediaItem = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('image'),
    src: z.string(),
    alt: z.string(),
    caption: z.string().optional(),
  }),
  z.object({
    type: z.literal('video'),
    src: z.string(),
    provider: z.enum(['local', 'youtube', 'vimeo']).default('local'),
    poster: z.string().optional(),
    alt: z.string(),
    caption: z.string().optional(),
  }),
]);

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string(),
    tools: z.array(z.string()),
    year: z.number().int(),
    cover: z.string(),
    coverAlt: z.string(),
    media: z.array(mediaItem).default([]),
    summary: z.string().max(240),
    order: z.number().int().default(999),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
