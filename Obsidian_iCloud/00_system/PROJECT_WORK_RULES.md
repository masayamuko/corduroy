# プロジェクト作業ルール

## 🚨 TOP階層汚染防止ルール

### ❌ 絶対にやってはいけないこと
- TOP階層（`/Users/masaya/Library/Mobile Documents/iCloud~md~obsidian/Documents/`）でプロジェクト作業
- TOP階層で`npm init`, `npm install`, `git init`等の実行
- TOP階層にプロジェクトファイルのコピー・移動

### ✅ 正しい作業方法

#### プロジェクト開始時：
```bash
# 正しい場所に移動
cd "/Users/masaya/Library/Mobile Documents/iCloud~md~obsidian/Documents/Obsidian_iCloud/Public/WEB/プロジェクト名"

# Cursorでプロジェクトを開く
cursor .
```

#### 新プロジェクト作成時：
```bash
# 1. 正しい場所に移動
cd "/Users/masaya/Library/Mobile Documents/iCloud~md~obsidian/Documents/Obsidian_iCloud/Public/WEB/"

# 2. プロジェクト作成
mkdir 新プロジェクト名
cd 新プロジェクト名

# 3. 初期化
npm init -y
```

### 🔍 問題発生時の対処

#### TOP階層にファイルが散らかった場合：
1. `.gitignore`の`TOP_LEVEL_PROTECTION`設定を確認
2. 重複ファイルを各プロジェクト内と比較
3. 重複なら削除、独自なら適切な場所に移動

#### .gitignoreで正当なファイルが無視される場合：
```bash
# 設定箇所を検索
grep -n "TOP_LEVEL_PROTECTION" .gitignore

# 特定ファイルを許可
echo "!/正当なファイル名" >> .gitignore
```

## 📁 ディレクトリ構造ルール

```
Documents/
├── Obsidian_iCloud/           # Obsidianメインボルト
│   ├── 00_system/            # システム設定・ドキュメント
│   ├── 01_secondme/          # 個人データ
│   ├── 02_team/              # チームプロジェクト
│   ├── 03_others/            # その他
│   ├── Public/               # 公開プロジェクト
│   │   ├── WEB/             # ウェブプロジェクト
│   │   │   ├── masaya/      # 個人サイト
│   │   │   ├── courses/     # コースサイト
│   │   │   ├── banjoTeto/   # VTuberサイト
│   │   │   └── portfolio/   # ポートフォリオ
│   │   └── LP/              # ランディングページ
│   │       ├── デジタル飲み/    # デジタル飲み会LP
│   │       ├── BootCAMP/      # AI学習ブートキャンプLP
│   │       ├── AI活用シェア会/   # AI活用シェア会LP
│   │       └── ボドゲつくらNight/ # ボドゲ制作イベントLP
│   └── Material/            # 素材・リソース
└── .gitignore               # TOP階層汚染防止設定

# ❌ TOP階層に作ってはいけないもの
# - プロジェクトフォルダ
# - package.json, node_modules等
# - src/, public/, scripts/等
```

## 🚀 安全なGitプッシュルール

### ❌ 危険な操作
- 確認なしでの`git push`実行
- リモートURL未確認でのプッシュ
- 異なるプロジェクトディレクトリでの作業継続

### ✅ 安全なプッシュ手順

#### 方法1: 安全プッシュスクリプト使用（推奨）
```bash
# プロジェクトディレクトリで実行
bash "/path/to/Obsidian_iCloud/00_system/safe_push.sh"
```

#### 方法2: 手動確認
```bash
# 1. 現在位置確認
pwd

# 2. リモートリポジトリ確認
git remote -v

# 3. ブランチ確認
git branch --show-current

# 4. ステータス確認
git status

# 5. 確認後プッシュ
git push origin main
```

### 📋 プロジェクト別の正しいリポジトリ

| プロジェクト | ディレクトリ | 正しいリポジトリ |
|-------------|------------|-----------------|
| メインサイト | `/masaya/` | `masayamuko/masaya.git` |
| VTuber | `/banjoTeto/` | `masayamuko/banjoTeto.git` |
| コース | `/courses/` | `masayamuko/courses.git` |
| ポートフォリオ | `/portfolio/` | `masayamuko/portfolio.git` |
| Obsidianルート | `/Documents/` | `masayamuko/obsidian.git` |

### 🆘 間違ってプッシュした場合の対処

```bash
# 1. プッシュを取り消す（まだマージされていない場合）
git push origin +HEAD^:main

# 2. 正しいリポジトリを確認
git remote set-url origin https://github.com/masayamuko/正しいリポジトリ.git

# 3. 再プッシュ
git push origin main
```

## 🛡️ 予防策チェックリスト

### 日常作業前：
- [ ] 作業ディレクトリが正しいか確認
- [ ] TOP階層でないことを確認
- [ ] プロジェクト固有のファイルがTOP階層にないか確認

### 新プロジェクト開始時：
- [ ] 適切な場所（Public/WEB/またはPublic/LP/）に作成
- [ ] PROJECT_INFO.mdを作成
- [ ] GitHubリポジトリとの連携確認

### 定期メンテナンス（週1回）：
- [ ] TOP階層の汚染チェック
- [ ] .gitignore設定の確認
- [ ] プロジェクトフォルダの整理

最終更新: 2025-07-23