#!/bin/bash
# 安全なGitプッシュスクリプト - 誤リポジトリへのプッシュを防ぐ

# 色付きメッセージ関数
red() { echo -e "\033[31m$1\033[0m"; }
green() { echo -e "\033[32m$1\033[0m"; }
yellow() { echo -e "\033[33m$1\033[0m"; }
blue() { echo -e "\033[34m$1\033[0m"; }

echo "🛡️  安全プッシュチェック開始"
echo "================================"

# 現在のディレクトリを確認
CURRENT_DIR=$(pwd)
echo "📁 現在のディレクトリ: $CURRENT_DIR"

# Gitリポジトリかチェック
if [ ! -d ".git" ]; then
    red "❌ Gitリポジトリではありません"
    exit 1
fi

# リモートリポジトリ情報を取得
REMOTE_URL=$(git remote get-url origin 2>/dev/null)
if [ -z "$REMOTE_URL" ]; then
    red "❌ リモートリポジトリが設定されていません"
    exit 1
fi

echo "🔗 リモートURL: $REMOTE_URL"

# プロジェクト判定とリポジトリ確認
case "$CURRENT_DIR" in
    *"/masaya")
        EXPECTED_REPO="masaya"
        EXPECTED_URL="https://github.com/masayamuko/masaya.git"
        ;;
    *"/banjoTeto")
        EXPECTED_REPO="banjoTeto"
        EXPECTED_URL="https://github.com/masayamuko/banjoTeto.git"
        ;;
    *"/courses")
        EXPECTED_REPO="courses"
        EXPECTED_URL="https://github.com/masayamuko/courses.git"
        ;;
    *"/portfolio")
        EXPECTED_REPO="portfolio"
        EXPECTED_URL="https://github.com/masayamuko/portfolio.git"
        ;;
    *"/Documents")
        EXPECTED_REPO="obsidian"
        EXPECTED_URL="https://github.com/masayamuko/obsidian.git"
        ;;
    *"/LP/"*)
        # LPプロジェクトの場合は個別確認
        LP_NAME=$(basename "$CURRENT_DIR")
        EXPECTED_REPO="LP-$LP_NAME"
        echo "💡 LPプロジェクト検出: $LP_NAME"
        ;;
    *)
        yellow "⚠️  未知のプロジェクトディレクトリです"
        echo "手動でリポジトリを確認してください"
        ;;
esac

# リポジトリ一致確認
if [ -n "$EXPECTED_URL" ]; then
    if [[ "$REMOTE_URL" == *"$EXPECTED_REPO"* ]]; then
        green "✅ 正しいリポジトリです: $EXPECTED_REPO"
    else
        red "❌ 間違ったリポジトリです！"
        echo "期待: $EXPECTED_URL"
        echo "実際: $REMOTE_URL"
        echo ""
        red "プッシュを中止します"
        exit 1
    fi
fi

# ブランチ確認
CURRENT_BRANCH=$(git branch --show-current)
echo "🌿 現在のブランチ: $CURRENT_BRANCH"

# ステータス確認
echo ""
echo "📊 Gitステータス:"
git status --short

# 最終確認
echo ""
yellow "⚠️  以下の情報で間違いありませんか？"
echo "プロジェクト: $EXPECTED_REPO"
echo "リポジトリ: $REMOTE_URL"
echo "ブランチ: $CURRENT_BRANCH"
echo ""

read -p "プッシュを実行しますか？ (y/N): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    green "🚀 プッシュを実行します..."
    git push origin "$CURRENT_BRANCH"
    
    if [ $? -eq 0 ]; then
        green "✅ プッシュ完了"
    else
        red "❌ プッシュ失敗"
        exit 1
    fi
else
    yellow "⏹️  プッシュをキャンセルしました"
    exit 0
fi