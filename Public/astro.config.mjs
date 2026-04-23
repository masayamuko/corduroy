// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import preact from '@astrojs/preact';



// https://astro.build/config
export default defineConfig({
  site: 'https://corduroy.co.jp',
  trailingSlash: 'always',
  redirects: {
    '/clients/takaro': '/voices/takaro/',
  },
  integrations: [sitemap(), preact()]
});