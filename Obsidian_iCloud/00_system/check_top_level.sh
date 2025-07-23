#!/bin/bash
# TOP階層汚染チェックスクリプト

echo "🔍 TOP階層汚染チェック開始..."
echo "=========================="

TOP_DIR="/Users/masaya/Library/Mobile Documents/iCloud~md~obsidian/Documents"
cd "$TOP_DIR"

echo "📁 TOP階層のファイル・フォルダ一覧："
ls -la | grep -v "^total" | grep -v "Obsidian_iCloud" | grep -v "\.$"

echo ""
echo "⚠️  要注意ファイル検出："

# プロジェクトファイルをチェック
if [ -f "package.json" ]; then echo "❌ package.json が存在"; fi
if [ -f "next.config.js" ]; then echo "❌ next.config.js が存在"; fi
if [ -d "src" ]; then echo "❌ src/ ディレクトリが存在"; fi
if [ -d "public" ]; then echo "❌ public/ ディレクトリが存在"; fi
if [ -d "node_modules" ]; then echo "❌ node_modules/ が存在"; fi

# プロジェクトディレクトリをチェック
if [ -d "masaya" ]; then echo "❌ masaya/ ディレクトリが存在"; fi
if [ -d "courses" ]; then echo "❌ courses/ ディレクトリが存在"; fi
if [ -d "banjoTeto" ]; then echo "❌ banjoTeto/ ディレクトリが存在"; fi
if [ -d "portfolio" ]; then echo "❌ portfolio/ ディレクトリが存在"; fi

echo ""
echo "✅ チェック完了"
echo "問題がある場合は PROJECT_WORK_RULES.md を参照してください"