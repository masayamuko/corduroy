# 週次メンテナンスチェックリスト

## 🗓️ 毎週月曜日に実行

### 1. TOP階層クリーンチェック（5分）
```bash
cd "/Users/masaya/Library/Mobile Documents/iCloud~md~obsidian/Documents"
ls -la | grep -v Obsidian_iCloud | grep -v "^\."
```
⚠️ Obsidian_iCloud以外のファイル・フォルダがあれば削除

### 2. プロジェクト別Gitステータス確認（10分）
```bash
# 各プロジェクトのステータスを確認
for project in masaya banjoTeto courses portfolio; do
  echo "=== $project ==="
  cd "Obsidian_iCloud/Public/WEB/$project"
  git status --short
  git remote -v | head -1
  echo ""
done
```

### 3. 環境変数バックアップ（5分）
```bash
# 環境変数ファイルのバックアップ
cd "Obsidian_iCloud/00_system"
mkdir -p env_backup/$(date +%Y%m%d)
find ../.. -name ".env*" -type f | while read f; do
  cp "$f" "env_backup/$(date +%Y%m%d)/"
done
```

### 4. 不要ファイル削除（5分）
- `*.log` ファイル
- `node_modules_corrupted_*` ディレクトリ
- `.DS_Store` ファイル

## 📊 月次タスク（月初に実行）

### 1. バックアップ整理
- 3ヶ月以上前のバックアップを削除
- courses_backup_* ディレクトリの整理

### 2. 依存関係更新
```bash
# 各プロジェクトで実行
npm update
npm audit fix
```

### 3. ドキュメント更新
- PROJECT_INFO.md の更新
- github_push_list.md の確認

## ⚡ クイックコマンド

### TOP階層汚染チェック
```bash
bash Obsidian_iCloud/00_system/check_top_level.sh
```

### 安全プッシュ
```bash
bash Obsidian_iCloud/00_system/safe_push.sh
```

最終更新: 2025-07-23