import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',  // Explicitly define this
  schema: z.object({
    title: z.string(),
    image: z.string().optional(), // 🔹 Now image is optional
    featured_image: z.string().optional(), // ✅ Explicitly define `featured_image`
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
