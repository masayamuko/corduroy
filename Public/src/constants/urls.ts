/**
 * LINE CTA 共通 URL 定数
 *
 * Harness の `/auth/line?ref=xxx` 経由で友達追加 → entry_routes 設定により
 * tag付与 + tag_added trigger scenario 起動を一括処理する。
 *
 * ref値の対応する内部運用は Harness 側 entry_routes テーブルで定義:
 *   site-free-course   無料動画講座CTA
 *   site-ai-renewal    LLMO（AI検索時代のサイト整備）資料CTA
 *   site-program       AIサポートプログラム / 3ヶ月体験会CTA
 *   site-study-video   study/ 動画講座CTA
 *   site-community     糸口会コミュニティCTA
 *   site-contact       AI顧問・お問合せ・特商法等の汎用CTA
 *
 * 既存lin.ee短縮URL (tDuJPjc / aQqPH7S) は廃止し、すべてこの定数経由に置換。
 * lin.ee URLは将来的に削除予定（旧ブックマークからの流入は site-contact fallback）。
 */
const HARNESS_BASE = 'https://line-harness.wandering-dawn-c96c.workers.dev/auth/line';

export const LINE_URLS = {
  /** 無料動画講座（study/index, services/index の動画講座CTA） */
  freeCourse: `${HARNESS_BASE}?ref=site-free-course`,
  /** LLMO資料配信（AI検索時代のサイト整備ガイド・services/ai-renewal） */
  aiRenewal: `${HARNESS_BASE}?ref=site-ai-renewal`,
  /** AIサポートプログラム・体験会（services/study/trial, program） */
  program: `${HARNESS_BASE}?ref=site-program`,
  /** study/ 配下の動画講座CTA（basicAI / AIdeWEB / SecondME 等） */
  studyVideo: `${HARNESS_BASE}?ref=site-study-video`,
  /** 糸口会コミュニティCTA（services/study/community） */
  community: `${HARNESS_BASE}?ref=site-community`,
  /** AI顧問・お問合せ・特商法・footer汎用CTA */
  contact: `${HARNESS_BASE}?ref=site-contact`,
} as const;

export type LineUrlKey = keyof typeof LINE_URLS;
