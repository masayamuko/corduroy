import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://touroku-shien.example.com',
  adapter: vercel({}),
  integrations: [
    sitemap({
      filter: () => false,
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
