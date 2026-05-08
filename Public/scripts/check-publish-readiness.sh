#!/bin/bash
# 記事公開前 readiness チェック
# Usage: ./check-publish-readiness.sh <slug>
# Exit 0: 公開可 / Exit 1: NG項目あり

SLUG="${1}"
if [ -z "$SLUG" ]; then
  echo "Usage: $0 <slug>"
  echo "  例: $0 mek-interview-name-character"
  exit 2
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
FILE="$ROOT/src/pages/blog/$SLUG.astro"
INDEX="$ROOT/src/pages/blog/index.astro"
LLMS="$ROOT/public/llms.txt"

if [ ! -f "$FILE" ]; then
  echo "❌ ファイル不存在: $FILE"
  exit 1
fi

NG=0
PASS=0

check_ok() { echo "  ✅ $1"; PASS=$((PASS+1)); }
check_ng() { echo "  ❌ $1"; NG=$((NG+1)); }
check_warn() { echo "  ⚠️  $1"; }

echo "═══════════════════════════════════════════════"
echo "  公開 readiness チェック: $SLUG"
echo "═══════════════════════════════════════════════"

echo ""
echo "[1/8] noindex 残置チェック"
if grep -q 'name="robots" content="noindex' "$FILE"; then
  check_ng "noindex,nofollow が残っている"
else
  check_ok "noindex 無し（公開可状態）"
fi

echo ""
echo "[2/8] index.astro posts 配列登録"
if grep -q "slug: '$SLUG'" "$INDEX"; then
  check_ok "posts 配列に登録済"
else
  check_ng "posts 配列に未登録（一覧表示されない・orphan page化）"
fi

echo ""
echo "[3/8] JSON-LD（BlogPosting / BreadcrumbList 必須・FAQPageは本文FAQ有時のみ）"
for schema in BlogPosting BreadcrumbList; do
  if grep -q "\"@type\": \"$schema\"\|'@type': '$schema'\|\"@type\":\"$schema\"" "$FILE"; then
    check_ok "$schema 完備"
  else
    check_ng "$schema 不足"
  fi
done
# FAQPage は本文に <details> がある場合のみ必須
if grep -q '<details' "$FILE"; then
  if grep -q "\"@type\": \"FAQPage\"\|'@type': 'FAQPage'\|\"@type\":\"FAQPage\"" "$FILE"; then
    check_ok "FAQPage 完備（本文FAQあり）"
  else
    check_ng "FAQPage 不足（本文に <details> あるのにJSON-LD無し）"
  fi
else
  check_warn "FAQPage 無し（本文に FAQ section 無し・許容）"
fi

echo ""
echo "[4/8] author Person @id 参照"
if grep -q '#person' "$FILE"; then
  check_ok "author @id 参照あり"
else
  check_warn "Person @id 参照なし（Layout.astro 経由なら問題なしの可能性）"
fi

echo ""
echo "[5/8] canonical URL"
EXPECTED_CANONICAL="https://www.corduroy.co.jp/blog/$SLUG/"
if grep -q "$EXPECTED_CANONICAL" "$FILE"; then
  check_ok "canonical = $EXPECTED_CANONICAL"
else
  check_warn "canonical 未指定 or 異なる（Layout デフォルトで OK の可能性）"
fi

echo ""
echo "[6/8] 内部リンク本数（target: 3+）"
INTERNAL_LINKS=$(grep -oE 'href="/blog/[^"]+"' "$FILE" | grep -v "blog/$SLUG" | sort -u | wc -l | tr -d ' ')
if [ "$INTERNAL_LINKS" -ge 3 ]; then
  check_ok "$INTERNAL_LINKS 本（orphan回避OK）"
else
  check_ng "$INTERNAL_LINKS 本（3本以上推奨・orphan page化リスク）"
fi

echo ""
echo "[7/8] llms.txt 登録"
if grep -q "/blog/$SLUG/" "$LLMS"; then
  check_ok "llms.txt に登録済"
else
  check_ng "llms.txt に未登録（LLMO観点で機会損失）"
fi

echo ""
echo "[8/8] datePublished が将来日付でない"
TODAY=$(date +%Y-%m-%d)
DATE_PUBLISHED=$(grep -oE '"datePublished":\s*"\d{4}-\d{2}-\d{2}"|publishedAt\s*=\s*"\d{4}-\d{2}-\d{2}"' "$FILE" | grep -oE '\d{4}-\d{2}-\d{2}' | head -1)
if [ -z "$DATE_PUBLISHED" ]; then
  check_ng "datePublished が見つからない"
elif [[ "$DATE_PUBLISHED" > "$TODAY" ]]; then
  check_warn "datePublished=$DATE_PUBLISHED が今日より未来（公開予定日）"
else
  check_ok "datePublished=$DATE_PUBLISHED"
fi

echo ""
echo "═══════════════════════════════════════════════"
echo "  結果: ✅ $PASS pass / ❌ $NG fail"
echo "═══════════════════════════════════════════════"

if [ $NG -gt 0 ]; then
  echo ""
  echo "⚠️  公開不可（NG項目を解消してください）"
  exit 1
else
  echo ""
  echo "✅ 公開可！次のステップ:"
  echo "   1. git add + commit + push"
  echo "   2. Vercel deploy 確認"
  echo "   3. cd $ROOT/scripts/sc-indexer && node index.js でSearch Console URL検査"
  exit 0
fi
