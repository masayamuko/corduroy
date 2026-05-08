#!/bin/bash
# 記事公開ワンコマンド: W→P 遷移9ステップを実行
# Usage: ./scripts/publish-blog.sh <slug>
# 前提: 当該記事は単体ファイルとして整備済（mek/aym のように JSON-LD・内部リンクが整備されている状態）

set -e
SLUG="${1}"
if [ -z "$SLUG" ]; then
  echo "Usage: $0 <slug>"
  exit 2
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
FILE="$ROOT/src/pages/blog/$SLUG.astro"
INDEX="$ROOT/src/pages/blog/index.astro"
LLMS="$ROOT/public/llms.txt"

echo "═══════════════════════════════════════════════"
echo "  公開フロー実行: $SLUG"
echo "  公開タイミングでサイト全体整合性をメンテします"
echo "═══════════════════════════════════════════════"

if [ ! -f "$FILE" ]; then
  echo "❌ ファイル不存在: $FILE"
  exit 1
fi

# Step 1: 事前 readiness（noindex/posts未登録は許容）
echo ""
echo "▶ Step 1/9: 事前 readiness 確認（W状態前提でJSON-LD等を確認）"
"$ROOT/scripts/check-publish-readiness.sh" "$SLUG" || {
  echo "⚠ readiness fail。意図的なfail（noindex/posts未登録）以外はある？ y で続行 / n で中止"
  read -r ans
  [ "$ans" != "y" ] && exit 1
}

# Step 2: noindex 削除
echo ""
echo "▶ Step 2/9: noindex,nofollow を削除"
if grep -q 'name="robots" content="noindex' "$FILE"; then
  sed -i '' '/<meta slot="head" name="robots" content="noindex/d' "$FILE"
  echo "  ✓ noindex 削除"
else
  echo "  - 既に noindex 無し"
fi

# Step 3: index.astro posts 配列に追加（既にあればskip）
echo ""
echo "▶ Step 3/9: index.astro posts 配列に追加"
if grep -q "slug: '$SLUG'" "$INDEX"; then
  echo "  - 既に登録済"
else
  echo "  ⚠ 自動追加できません。手動で先頭に追加してください："
  TITLE=$(grep -m1 'const title = ' "$FILE" | sed -E 's/.*"([^"]+)".*/\1/' | sed 's|｜株式会社コールテン||')
  DESC=$(grep -m1 'const description = ' "$FILE" | sed -E 's/.*"([^"]+)".*/\1/')
  DATE_PUB=$(grep -oE '"datePublished":\s*"[0-9-]+"' "$FILE" | grep -oE '[0-9]{4}-[0-9]{2}-[0-9]{2}' | head -1)
  cat <<HINT

  以下を $INDEX の posts 配列の **先頭** に追加:

  {
    slug: '$SLUG',
    date: '$DATE_PUB',
    category: 'AI活用',  // ← 適切なカテゴリに変更
    title: '$TITLE',
    excerpt: '$DESC',
    thumbnail: 'https://res.cloudinary.com/dg3mdcuju/image/upload/c_pad,w_400,h_400,b_white/v1776924003/corduroy/brand/logo-square.png',
    external: false,
    featured: false,
  },

  追加完了したら Enter
HINT
  read -r
fi

# Step 4: llms.txt 確認
echo ""
echo "▶ Step 4/9: llms.txt 登録確認"
if grep -q "/blog/$SLUG/" "$LLMS"; then
  echo "  ✓ llms.txt に登録済"
else
  echo "  ⚠ llms.txt に未登録。適切なセクション（## 主なブログ記事 配下）に追加してください"
  echo "  追加完了したら Enter"
  read -r
fi

# Step 5: 既存記事から逆方向リンク（手動・指示のみ）
echo ""
echo "▶ Step 5/9: 既存記事から $SLUG への逆方向リンク追加"
echo "  関連が深い既存公開記事3-5本に「関連記事」ブロックで $SLUG へのリンク追加を推奨。"
echo "  内部リンク双方向化により orphan 化を回避。"
echo "  完了したら Enter（後でも可なら s でskip）"
read -r reverse_ans
[ "$reverse_ans" = "s" ] && echo "  ⚠ skip（後で追加すること）"

# Step 6: astro check
echo ""
echo "▶ Step 6/9: astro check"
cd "$ROOT"
if npx astro check 2>&1 | tail -3 | grep -q "0 errors"; then
  echo "  ✓ 0 errors"
else
  echo "  ❌ エラーあり。修正後に再実行してください"
  npx astro check 2>&1 | tail -10
  exit 1
fi

# Step 7: 最終 readiness check（pass=10 / fail=0 を期待）
echo ""
echo "▶ Step 7/9: 最終 readiness check"
"$ROOT/scripts/check-publish-readiness.sh" "$SLUG"

# Step 8: git commit & push
echo ""
echo "▶ Step 8/9: git commit & push"
echo "  対象: $SLUG"
echo "  続行する? y/n"
read -r push_ans
if [ "$push_ans" = "y" ]; then
  git add "$FILE" "$INDEX" "$LLMS"
  git commit -m "公開: $SLUG

D→P 状態遷移（公開時9ステップ実行）
- noindex 削除
- index.astro posts 配列に追加
- llms.txt に登録
- 関連記事から逆方向リンク追加

🤖 publish-blog.sh による公開処理"
  git push origin main
  echo "  ✓ push完了"
else
  echo "  ⚠ push スキップ（手動で commit & push してください）"
fi

# Step 9: Vercel deploy 確認 + Search Console 案内
echo ""
echo "▶ Step 9/9: Vercel deploy 反映 + Search Console URL検査"
echo "  Vercel deploy（30秒待ち）..."
sleep 30
status=$(curl -sI "https://www.corduroy.co.jp/blog/$SLUG/" | head -1)
echo "  本番URL状態: $status"
echo ""
echo "  Search Console URL検査:"
echo "    cd $ROOT/scripts/sc-indexer && node index.js"
echo "  （初回はGoogleログインが必要、以後はCookie継続）"

echo ""
echo "═══════════════════════════════════════════════"
echo "  ✅ 公開フロー完了: $SLUG"
echo "═══════════════════════════════════════════════"
