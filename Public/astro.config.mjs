// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import preact from '@astrojs/preact';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://corduroy.co.jp',
  integrations: [sitemap(), preact()],
  adapter: vercel(),
  output: 'server'
});