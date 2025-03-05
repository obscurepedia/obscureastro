import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string().optional(), // 🔹 Now image is optional
    date: z.string(),
    excerpt: z.string().optional(), // ✅ Added excerpt
    categories: z.array(z.string()).optional(),
    subcategories: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
