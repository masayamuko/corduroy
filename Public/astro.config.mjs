// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import preact from '@astrojs/preact';



// https://astro.build/config
export default defineConfig({
  site: 'https://www.corduroy.co.jp',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // lastmod は「実態と一致」がGoogleの推奨。今回のリニューアルで実際に
      // 大きく変更したページだけに、その更新日を固定値で付ける。
      // 参照: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
      serialize(item) {
        const renewed = [
          'https://www.corduroy.co.jp/',
          'https://www.corduroy.co.jp/story/',
          'https://www.corduroy.co.jp/ai/',
          'https://www.corduroy.co.jp/ai/blog/',
          'https://www.corduroy.co.jp/blog/',
          'https://www.corduroy.co.jp/ai/voices/',
        ];
        if (renewed.includes(item.url)) {
          item.lastmod = '2026-08-21T00:00:00+09:00';
        }
        return item;
      },
      // noindex 記事は sitemap から除外
      // Google公式ガイダンス: noindex な URL を sitemap に入れると矛盾シグナルになり SEO 評価を下げる
      // お知らせ系（時限的・noindex運用）の記事を追加する時は、ここの配列にも URL を追加すること
      filter: (page) =>
        ![
          'https://www.corduroy.co.jp/ai/blog/ai-advisory-new-applications-paused-2026-05/',
          'https://www.corduroy.co.jp/ai/blog/aym-interview-self-built-site/',
          'https://www.corduroy.co.jp/clients/pricing/',
          'https://www.corduroy.co.jp/preview/founder-story/',
          // 未公開・限定公開（noindex）のためsitemapからも除外
          'https://www.corduroy.co.jp/ai/blog/agent-loop-minimal-intro/',
          'https://www.corduroy.co.jp/ai/blog/pro-coach-ai-coaching/',
          'https://www.corduroy.co.jp/blog/ohra-partner-pride/',
          'https://www.corduroy.co.jp/blog/ume-partner-pride/',
          'https://www.corduroy.co.jp/courses/ai-comm-3parts/',
        ].includes(page),
    }),
    preact(),
  ],
});
