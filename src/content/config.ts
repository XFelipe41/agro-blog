import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string(),
    description: z.string(),
    category: z.union([z.string(), z.array(z.string())]),
    tags: z.array(z.string()),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'pages': pagesCollection,
}; 