// Vercel Edge Middleware — 公開前ドラフト記事のパスワード保護
// 対象: /blog/aym-interview-self-built-site/ と /blog/mek-interview-name-character/
// 共通パスワード方式（IDなし）。POSTでパスワード検証→Cookieに保存して30日有効。

export const config = {
  matcher: [
    '/blog/aym-interview-self-built-site/:path*',
    '/blog/mek-interview-name-character/:path*',
  ],
};

const COOKIE_NAME = 'cdry_preview';
const COOKIE_VALUE = 'ok-2026-04';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30日

const LOGIN_HTML = (errorMsg = '') => `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="robots" content="noindex,nofollow">
  <title>パスワードが必要です — コールテン</title>
  <style>
    *,*::before,*::after { box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", "Yu Gothic", "Helvetica Neue", Arial, sans-serif; background: #fbf9f5; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; color: #2c1810; }
    .box { background: #fff; padding: 40px 32px; border-radius: 16px; box-shadow: 0 12px 32px rgba(0,0,0,.08); max-width: 420px; width: 100%; text-align: center; border: 1px solid #e6e0d6; }
    .logo { display: inline-block; padding: 6px 14px; border-radius: 100px; background: #ccfbf1; color: #16614e; font-weight: 700; font-size: 12px; letter-spacing: 0.05em; margin-bottom: 20px; }
    h1 { font-size: 19px; color: #16614e; margin: 0 0 14px; font-weight: 700; line-height: 1.6; }
    .lead { font-size: 14px; color: #555; line-height: 1.85; margin: 0 0 24px; }
    input { width: 100%; padding: 14px 16px; border: 1px solid #d6e8df; border-radius: 10px; font-size: 16px; margin-bottom: 14px; outline: none; transition: border-color .2s ease; }
    input:focus { border-color: #16614e; box-shadow: 0 0 0 3px rgba(22,97,78,.1); }
    button { width: 100%; padding: 14px; background: #16614e; color: #fff; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; font-size: 15px; transition: background .2s ease; }
    button:hover { background: #0d5b56; }
    .err { background: #fef0ea; color: #c44; font-size: 13px; padding: 10px 12px; border-radius: 8px; margin: 0 0 14px; }
    .small { font-size: 12px; color: #999; margin-top: 22px; line-height: 1.7; }
    .small a { color: #16614e; text-decoration: none; }
  </style>
</head>
<body>
  <div class="box">
    <span class="logo">PREVIEW</span>
    <h1>記事プレビュー</h1>
    <p class="lead">株式会社コールテンの<br>公開前ドラフト記事です。<br>パスワードを入力してご覧ください。</p>
    ${errorMsg ? `<div class="err">${errorMsg}</div>` : ''}
    <form method="post">
      <input type="password" name="password" placeholder="パスワード" autocomplete="current-password" autofocus required>
      <button type="submit">記事を見る</button>
    </form>
    <p class="small">パスワードがわからない場合は<br>ご担当者までお問い合わせください。</p>
  </div>
</body>
</html>`;

function htmlResponse(html: string, status = 200): Response {
  return new Response(html, {
    status,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'X-Robots-Tag': 'noindex, nofollow, noarchive',
      'Referrer-Policy': 'no-referrer',
    },
  });
}

export default async function middleware(request: Request): Promise<Response | undefined> {
  const url = new URL(request.url);
  // Vercel Edge Runtime では process.env が利用可能
  // @ts-ignore
  const expectedPass: string = (typeof process !== 'undefined' && process.env && process.env.PREVIEW_PASS) || '';

  if (!expectedPass) {
    return htmlResponse('<!DOCTYPE html><html><body><p>サーバー設定エラー: PREVIEW_PASS が未設定です。</p></body></html>', 500);
  }

  // POST: パスワード送信
  if (request.method === 'POST') {
    let submitted = '';
    try {
      const formData = await request.formData();
      const value = formData.get('password');
      if (typeof value === 'string') submitted = value;
    } catch {
      // ignore
    }

    if (submitted && submitted === expectedPass) {
      return new Response(null, {
        status: 303,
        headers: {
          'Location': url.pathname,
          'Set-Cookie': `${COOKIE_NAME}=${COOKIE_VALUE}; Path=/; Max-Age=${COOKIE_MAX_AGE}; HttpOnly; SameSite=Lax; Secure`,
          'Cache-Control': 'no-store',
        },
      });
    }
    return htmlResponse(LOGIN_HTML('パスワードが違います'), 401);
  }

  // GET: Cookie 検証
  const cookieHeader = request.headers.get('cookie') ?? '';
  const hasCookie = cookieHeader
    .split(/;\s*/)
    .some(part => part === `${COOKIE_NAME}=${COOKIE_VALUE}`);

  if (hasCookie) {
    return; // 通過
  }

  return htmlResponse(LOGIN_HTML(), 401);
}
