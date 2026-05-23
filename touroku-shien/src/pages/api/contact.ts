import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { COMPANY } from '../../lib/constants';

export const prerender = false;

const requiredFields = ['company', 'name', 'email', 'message', 'agree'];

function env(name: string) {
  return import.meta.env[name] || process.env[name] || '';
}

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

function clean(value: FormDataEntryValue | null) {
  return typeof value === 'string' ? value.trim() : '';
}

async function verifyTurnstile(token: string, ip: string | null) {
  const secret = env('TURNSTILE_SECRET_KEY');
  if (!secret) return { success: false, error: 'turnstile_secret_missing' };

  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set('remoteip', ip);

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });
  return response.json() as Promise<{ success: boolean; 'error-codes'?: string[] }>;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const form = await request.formData();
  const missing = requiredFields.filter((field) => !clean(form.get(field)));
  if (missing.length > 0) return json(400, { ok: false, error: '入力内容を確認してください。' });

  const token = clean(form.get('cf-turnstile-response')) || clean(form.get('turnstileToken'));
  if (!token) return json(400, { ok: false, error: '認証を完了してください。' });

  const turnstile = await verifyTurnstile(token, request.headers.get('CF-Connecting-IP') || clientAddress || null);
  if (!turnstile.success) return json(400, { ok: false, error: '認証に失敗しました。時間を置いて再度お試しください。' });

  const resendKey = env('RESEND_API_KEY');
  const to = env('CONTACT_TO_EMAIL') || COMPANY.email;
  const from = env('CONTACT_FROM_EMAIL') || `${COMPANY.tradeName} <onboarding@resend.dev>`;
  if (!resendKey) return json(500, { ok: false, error: 'メール送信設定が未設定です。' });

  const company = clean(form.get('company'));
  const name = clean(form.get('name'));
  const email = clean(form.get('email'));
  const phone = clean(form.get('phone'));
  const industry = clean(form.get('industry'));
  const people = clean(form.get('people'));
  const message = clean(form.get('message'));

  const resend = new Resend(resendKey);
  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `【問い合わせ】${company} ${name}様`,
      text: [
        '登録支援機関サイトからお問い合わせがありました。',
        '',
        `会社名: ${company}`,
        `お名前: ${name}`,
        `メール: ${email}`,
        `電話番号: ${phone || '未入力'}`,
        `業種: ${industry || '未選択'}`,
        `受け入れ予定人数: ${people || '未入力'}`,
        '',
        '相談内容:',
        message,
      ].join('\n'),
    });
  } catch {
    return json(500, { ok: false, error: 'メール送信に失敗しました。' });
  }

  return json(200, { ok: true });
};

export const GET: APIRoute = async () => json(405, { ok: false, error: 'Method Not Allowed' });
