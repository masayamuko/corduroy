// Vercel Edge Middleware — パスワード保護（IDなし・共通パスワード方式）
// 対象グループ:
//   preview … 公開前ドラフト記事（/blog/aym-... と /preview/*）… env: PREVIEW_PASS
//   client  … 商談済みクライアント向け 料金ページ（/clients/pricing/*） … env: CLIENT_PASS（必須・fail closed）
// POSTでパスワード検証→SHA-256署名値をCookieに保存して30日有効（固定値Cookieによるバイパス対策）。

export const config = {
  matcher: [
    '/blog/aym-interview-self-built-site/:path*',
    '/preview/:path*',
    '/clients/pricing/:path*',
  ],
};

const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30日

type Group = {
  cookieName: string;
  getPass: () => string;
  login: (errorMsg?: string) => string;
};

// Cookie値はパスワード由来のSHA-256ダイジェスト（パスワードを変えると既存Cookieは自動失効する）
async function cookieValueFor(group: Group, pass: string): Promise<string> {
  const data = new TextEncoder().encode(`${group.cookieName}|${pass}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// 共通のログイン画面ビルダー
const loginHtml = (
  opts: { badge: string; heading: string; lead: string; button: string; hint: string },
  errorMsg = ''
) => `<!DOCTYPE html>
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
    <span class="logo">${opts.badge}</span>
    <h1>${opts.heading}</h1>
    <p class="lead">${opts.lead}</p>
    ${errorMsg ? `<div class="err">${errorMsg}</div>` : ''}
    <form method="post">
      <input type="password" name="password" placeholder="パスワード" autocomplete="current-password" autofocus required>
      <button type="submit">${opts.button}</button>
    </form>
    <p class="small">${opts.hint}</p>
  </div>
</body>
</html>`;

// 環境変数の読み取り（Vercel Edge Runtime では process.env が利用可能）
function readEnv(name: string): string {
  // @ts-ignore
  return (typeof process !== 'undefined' && process.env && process.env[name]) || '';
}

const GROUPS: Record<'preview' | 'client', Group> = {
  preview: {
    cookieName: 'cdry_preview',
    getPass: () => readEnv('PREVIEW_PASS'),
    login: (errorMsg = '') =>
      loginHtml(
        {
          badge: 'PREVIEW',
          heading: '記事プレビュー',
          lead: '株式会社コールテンの<br>公開前ドラフト記事です。<br>パスワードを入力してご覧ください。',
          button: '記事を見る',
          hint: 'パスワードがわからない場合は<br>ご担当者までお問い合わせください。',
        },
        errorMsg
      ),
  },
  client: {
    cookieName: 'cdry_client',
    // 専用パスワード必須（fail closed。PREVIEW_PASSへはフォールバックしない）
    getPass: () => readEnv('CLIENT_PASS'),
    login: (errorMsg = '') =>
      loginHtml(
        {
          badge: 'CLIENT ONLY',
          heading: '料金のご案内',
          lead: '株式会社コールテンの<br>クライアント向け料金ページです。<br>お渡ししたパスワードを入力してください。',
          button: '料金を見る',
          hint: 'パスワードがわからない場合は<br>担当までお問い合わせください。',
        },
        errorMsg
      ),
  },
};

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
  const group: Group = url.pathname.startsWith('/clients/pricing') ? GROUPS.client : GROUPS.preview;
  const expectedPass = group.getPass();

  if (!expectedPass) {
    return htmlResponse('<!DOCTYPE html><html><body><p>サーバー設定エラー: パスワードが未設定です。</p></body></html>', 500);
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
      const cookieValue = await cookieValueFor(group, expectedPass);
      return new Response(null, {
        status: 303,
        headers: {
          'Location': url.pathname,
          'Set-Cookie': `${group.cookieName}=${cookieValue}; Path=/; Max-Age=${COOKIE_MAX_AGE}; HttpOnly; SameSite=Lax; Secure`,
          'Cache-Control': 'no-store',
        },
      });
    }
    return htmlResponse(group.login('パスワードが違います'), 401);
  }

  // GET: Cookie 検証（パスワード由来の署名値と照合）
  const expectedCookie = await cookieValueFor(group, expectedPass);
  const cookieHeader = request.headers.get('cookie') ?? '';
  const hasCookie = cookieHeader
    .split(/;\s*/)
    .some(part => part === `${group.cookieName}=${expectedCookie}`);

  if (hasCookie) {
    return; // 通過
  }

  return htmlResponse(group.login(), 401);
}
