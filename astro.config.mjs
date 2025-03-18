import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import node from '@astrojs/node';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkGfm], // GitHub-style Markdown (Bold, Lists, etc.)
  },
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});
