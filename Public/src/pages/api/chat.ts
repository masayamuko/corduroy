import type { APIRoute } from 'astro';
import OpenAI from 'openai';
import { SITE_CONTEXT } from '../../lib/site-context';

export const POST: APIRoute = async ({ request }) => {
    const apiKey = import.meta.env.OPENAI_API_KEY;

    try {
        const body = await request.json();
        const userMessage = body.message;

        if (!userMessage) {
            return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400 });
        }

        // Checking specifically for OPENAI_API_KEY
        if (!apiKey) {
            console.warn("OPENAI_API_KEY is missing via import.meta.env");
            // Fallback Mock Response for Testing when Key is missing
            return new Response(JSON.stringify({
                reply: "申し訳ありません。現在、AIシステムの接続設定中です（APIキー未設定）。\n\nシステム管理者の方へ: Vercelの環境変数に `OPENAI_API_KEY` を設定してください。\n\nそれまでの間、このボットはモックモードで動作しています。ご質問：「" + userMessage + "」を受け付けました。"
            }), { status: 200 });
        }

        const openai = new OpenAI({
            apiKey: apiKey,
        });

        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: SITE_CONTEXT },
                { role: "user", content: userMessage }
            ],
            model: "gpt-4o-mini", // Cost efficient and fast
        });

        const reply = completion.choices[0].message.content;

        return new Response(JSON.stringify({ reply }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });

    } catch (error) {
        console.error('Chat API Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
