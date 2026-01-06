# 画像URL更新作業履歴

## 2026年1月6日 - Cloudinary画像URL一斉更新

### 背景
- HTMLからAstroへのリニューアル時に、日本語エンコード付きのCloudinary URLが残っていた
- 特定の環境・ブラウザで画像が表示されない問題が発生（400 Bad Request）

### 問題の原因
日本語ファイル名がNFD（分解形式）でエンコードされており、例えば「デ」が「テ」+「゛」として表現されていた。

**問題のあったURL例：**
```
https://res.cloudinary.com/dg3mdcuju/image/upload/v1764647437/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%82%B9%E3%83%86%E3%82%99%E3%83%8B%E3%82%A2%E3%83%AB_%E4%BD%90%E9%87%8E%E3%81%95%E3%82%93_pbyfhl.png
```

### 解決策
英数字のみのシンプルなファイル名に変更し、Cloudinaryに再アップロード。

**新しいURL例：**
```
https://res.cloudinary.com/dg3mdcuju/image/upload/v1764647437/sano_sudeniaru.png
```

### 更新対象ファイル一覧

#### TOPページ
- ✅ `/src/pages/index.astro` - 5箇所更新

#### Voicesページ
- ✅ `/src/pages/voices/index.astro` - 4箇所更新
- ✅ `/src/pages/voices/takaro.astro` - 3箇所更新
- ✅ `/src/pages/voices/sano.astro` - 1箇所更新
- ✅ `/src/pages/voices/kubota.astro` - 1箇所更新
- ✅ `/src/pages/voices/numazawa.astro` - 1箇所更新
- ✅ `/src/pages/voices/takaro-showcase.astro` - 1箇所更新

#### Servicesページ
- ✅ `/src/pages/services/study/index.astro` - 1箇所更新

### 確認方法

1. 開発サーバー起動
```bash
cd /Users/masaya/Desktop/Github/Corduroy/WEBSITE/Public
npm run dev
```

2. ブラウザで各ページを確認
- http://localhost:4321/
- http://localhost:4321/voices/
- http://localhost:4321/voices/takaro
- http://localhost:4321/services/study/

### 今後の注意点

- **新規画像は必ず英数字ファイル名で**: 日本語が含まれると問題が発生する可能性がある
- **Cloudinary のPublic IDを確認**: アップロード後は必ず正しいURLを取得して使用
- **全ページでの一括検索**: 画像URLを変更する際は、`grep -r "古いURL" src/` で全ページを確認
