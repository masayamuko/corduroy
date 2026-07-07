// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import preact from '@astrojs/preact';



// https://astro.build/config
export default defineConfig({
  site: 'https://www.corduroy.co.jp',
  trailingSlash: 'always',
  redirects: {
    '/clients/takaro/': '/voices/takaro/',
    '/voices/takaro-showcase/': '/voices/takaro/',
    '/blog/npo-tools-2026/': '/blog/npo-tools/',
    '/blog/students-tools-2026/': '/blog/students-tools/',
  },
  integrations: [
    sitemap({
      // noindex 記事は sitemap から除外
      // Google公式ガイダンス: noindex な URL を sitemap に入れると矛盾シグナルになり SEO 評価を下げる
      // お知らせ系（時限的・noindex運用）の記事を追加する時は、ここの配列にも URL を追加すること
      filter: (page) =>
        ![
          'https://www.corduroy.co.jp/blog/ai-advisory-new-applications-paused-2026-05/',
          'https://www.corduroy.co.jp/clients/pricing/',
        ].includes(page),
    }),
    preact(),
  ],
});