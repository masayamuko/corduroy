/**
 * サイト全体用 OGP画像生成スクリプト
 * satori + resvg-js で 1200x630px の OGP画像を生成
 *
 * 使い方: node scripts/generate-ogp.mjs
 */
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WIDTH = 1200;
const HEIGHT = 630;

// ブランドカラー
const COLORS = {
  sea: '#16614e',
  cream: '#fbf9f5',
  accent: '#d4a04d',
  mint: '#eef7f3',
  seaLight: '#1a7a60',
};

// Noto Sans JP フォントを Google Fonts からダウンロード
async function loadFont() {
  const url = 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap';

  // フォントURLを取得
  const cssRes = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' }
  });
  const css = await cssRes.text();

  // woff2 URLを抽出（700 weight）
  const boldMatch = css.match(/font-weight: 700;[^}]*src: url\(([^)]+)\)/s);
  const regularMatch = css.match(/font-weight: 400;[^}]*src: url\(([^)]+)\)/s);

  const fonts = [];

  if (boldMatch) {
    const boldRes = await fetch(boldMatch[1]);
    fonts.push({
      name: 'Noto Sans JP',
      data: Buffer.from(await boldRes.arrayBuffer()),
      weight: 700,
      style: 'normal',
    });
  }

  if (regularMatch) {
    const regularRes = await fetch(regularMatch[1]);
    fonts.push({
      name: 'Noto Sans JP',
      data: Buffer.from(await regularRes.arrayBuffer()),
      weight: 400,
      style: 'normal',
    });
  }

  return fonts;
}

// サイト全体用 OGP
function siteOgpLayout() {
  return {
    type: 'div',
    props: {
      style: {
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${COLORS.sea} 0%, ${COLORS.seaLight} 50%, ${COLORS.sea} 100%)`,
        fontFamily: '"Noto Sans JP"',
        position: 'relative',
      },
      children: [
        // 装飾: 左上の円
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: '-60px',
              left: '-60px',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)',
            },
          },
        },
        // 装飾: 右下の円
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              bottom: '-80px',
              right: '-40px',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.04)',
            },
          },
        },
        // メインコンテンツ
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
            },
            children: [
              // 会社名
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '72px',
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '0.08em',
                  },
                  children: 'コールテン',
                },
              },
              // 英語名
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '18px',
                    fontWeight: 400,
                    color: COLORS.accent,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                  },
                  children: 'CORDUROY INC.',
                },
              },
              // 区切り線
              {
                type: 'div',
                props: {
                  style: {
                    width: '60px',
                    height: '2px',
                    background: COLORS.accent,
                    margin: '8px 0',
                  },
                },
              },
              // キャッチコピー
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '28px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.9)',
                    letterSpacing: '0.1em',
                  },
                  children: 'AIとの関係性を育てる。',
                },
              },
            ],
          },
        },
        // フッターライン
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              bottom: '30px',
              fontSize: '14px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.15em',
            },
            children: 'AI顧問 ・ AI講座 ・ AIシステム開発',
          },
        },
      ],
    },
  };
}

// ブログ記事用 OGP テンプレート
function blogOgpLayout(title) {
  return {
    type: 'div',
    props: {
      style: {
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '60px 80px',
        background: COLORS.cream,
        fontFamily: '"Noto Sans JP"',
        position: 'relative',
      },
      children: [
        // 左サイドのアクセントバー
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: '0',
              left: '0',
              width: '8px',
              height: '100%',
              background: COLORS.sea,
            },
          },
        },
        // 記事タイトル
        {
          type: 'div',
          props: {
            style: {
              fontSize: title.length > 30 ? '40px' : '48px',
              fontWeight: 700,
              color: '#1a1a1a',
              lineHeight: 1.4,
              maxWidth: '1000px',
            },
            children: title,
          },
        },
        // フッター
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  },
                  children: [
                    // ドット（ロゴ代わり）
                    {
                      type: 'div',
                      props: {
                        style: {
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: COLORS.sea,
                        },
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontSize: '22px',
                          fontWeight: 700,
                          color: COLORS.sea,
                        },
                        children: 'コールテン',
                      },
                    },
                  ],
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '16px',
                    color: '#999',
                  },
                  children: 'corduroy.co.jp',
                },
              },
            ],
          },
        },
      ],
    },
  };
}

async function generate() {
  console.log('フォントを読み込み中...');
  const fonts = await loadFont();

  if (fonts.length === 0) {
    console.error('フォントの読み込みに失敗しました');
    process.exit(1);
  }

  // サイト全体用 OGP
  console.log('サイト全体用 OGP を生成中...');
  const siteSvg = await satori(siteOgpLayout(), {
    width: WIDTH,
    height: HEIGHT,
    fonts,
  });

  const siteResvg = new Resvg(siteSvg, { fitTo: { mode: 'width', value: WIDTH } });
  const sitePng = siteResvg.render().asPng();

  const sitePath = join(__dirname, '..', 'public', 'assets', 'images', 'ogp.png');
  writeFileSync(sitePath, sitePng);
  console.log(`✓ サイト用 OGP: ${sitePath} (${(sitePng.length / 1024).toFixed(0)}KB)`);

  // ブログ記事用 OGP 一括生成
  const blogArticles = [
    { slug: 'what-is-ai-advisory', title: 'AI顧問とは？中小企業・個人事業主のためのAI活用伴走サービス' },
    { slug: 'how-to-choose-ai-course', title: 'AI講座の選び方ガイド — 初心者が失敗しない5つのポイント' },
    { slug: 'smf-partner-pride', title: 'スマイリーフラワーズが語る、留学エージェントとしての誇り' },
    { slug: 'nks-kashiko-instructor', title: 'NKS日本語学校のかしこインストラクター導入レポート' },
    { slug: 'itoshima-110km-walk', title: '糸島110kmウォーク完歩レポート' },
    { slug: 'shu-ai-advisory', title: 'SHU行政書士事務所のAI顧問が始まりました' },
    { slug: 'asiz-partnership', title: '株式会社ASIZとの業務提携' },
    { slug: 'ohara-partnership', title: '大原学園グループとの業務提携' },
    { slug: 'tkr-ai-advisory', title: '中野たかろーさんのAI顧問が始まりました' },
    { slug: 'smf-partnership', title: 'スマイリーフラワーズとの業務提携' },
    { slug: 'san-partnership', title: 'サンフラワーとの業務提携' },
    { slug: 'incorporation', title: '株式会社コールテンを設立しました' },
  ];

  console.log(`ブログ記事用 OGP を ${blogArticles.length} 件生成中...`);

  for (const { slug, title } of blogArticles) {
    const blogSvg = await satori(blogOgpLayout(title), {
      width: WIDTH,
      height: HEIGHT,
      fonts,
    });

    const blogResvg = new Resvg(blogSvg, { fitTo: { mode: 'width', value: WIDTH } });
    const blogPng = blogResvg.render().asPng();

    const blogPath = join(__dirname, '..', 'public', 'assets', 'images', `ogp-${slug}.png`);
    writeFileSync(blogPath, blogPng);
    console.log(`✓ ogp-${slug}.png (${(blogPng.length / 1024).toFixed(0)}KB)`);
  }

  console.log(`\n全 ${blogArticles.length} 件のブログ用 OGP 画像を生成しました。`);
}

generate().catch(console.error);
