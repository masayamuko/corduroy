# 🚀 安全プッシュ クイックガイド

## 今すぐ使える！安全プッシュ方法

### 方法1: 安全スクリプト使用（推奨）

```bash
# プロジェクトディレクトリで実行
bash "../../../00_system/safe_push.sh"
```

### 方法2: 手動チェック

```bash
# 1. 今いる場所を確認
pwd

# 2. どのリポジトリに繋がってる？
git remote -v

# 3. 正しいリポジトリか確認してからプッシュ
git push origin main
```

## 🆘 トラブル時の対処

### 「間違ったリポジトリにプッシュしちゃった！」

```bash
# 1. あわてない
# 2. プッシュ取り消し（マージ前なら可能）
git push origin +HEAD^:main

# 3. 正しいリポジトリに設定し直し
git remote set-url origin https://github.com/masayamuko/正しいリポジトリ.git

# 4. 再プッシュ
git push origin main
```

## 📋 チートシート

| プロジェクト | 正しいリポジトリ |
|-------------|-----------------|
| masaya | `masayamuko/masaya.git` |
| banjoTeto | `masayamuko/banjoTeto.git` |
| courses | `masayamuko/courses.git` |
| portfolio | `masayamuko/portfolio.git` |
| Obsidianルート | `masayamuko/obsidian.git` |

**覚え方:** フォルダ名 = リポジトリ名（ほぼ同じ）