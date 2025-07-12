# Vercelビルドエラー対策ガイド

## 概要
このドキュメントは、Vercelでのデプロイ時に発生したTypeScriptエラーとその解決方法をまとめたものです。同様のエラーを未然に防ぐための参考資料として使用してください。

## 発生したエラーと対策

### 1. usePathname() のnullエラー

#### 発生したエラー
```
Type error: 'pathname' is possibly 'null'.
```

#### 原因
- Next.js 13.5.6環境でのSSR（Server-Side Rendering）時に、`usePathname()`がnullを返す可能性がある
- TypeScriptの厳密な型チェックにより、nullチェックなしでの使用がエラーとなる
- 特に本番ビルド時（`npm run build`）でより厳密にチェックされる

#### 影響を受けたファイル
1. `src/app/[lang]/components/GoogleAnalytics.tsx`
2. `src/app/[lang]/components/LanguageSwitcher.tsx`

#### 解決方法

**パターン1: 条件付きでtoString()を呼び出す**
```typescript
// ❌ エラーが出るコード
const url = pathname + searchParams.toString()

// ✅ 修正後
const url = pathname + (searchParams ? searchParams.toString() : '')
```

**パターン2: 早期リターンでnullをハンドリング**
```typescript
// ❌ エラーが出るコード
export default function LanguageSwitcher() {
  const pathname = usePathname()
  const currentLang = pathname.split('/')[1] || 'ja'
  // ...
}

// ✅ 修正後
export default function LanguageSwitcher() {
  const pathname = usePathname()
  
  // pathnameがnullの場合のフォールバック
  if (!pathname) {
    return null
  }
  
  const currentLang = pathname.split('/')[1] || 'ja'
  // ...
}
```

**パターン3: try-catchでハンドリング（既に実装済み）**
```typescript
// ✅ 既に適切に実装されている例
let pathname: string | null = null

try {
  pathname = usePathname()
} catch (error) {
  // Server side rendering時やエラー時は無視
  pathname = `/${lang}`
}
```

## 予防策

### 1. usePathname()使用時のベストプラクティス

#### 必須チェック項目
- [ ] `usePathname()`の戻り値に対してnullチェックを実装
- [ ] SSR環境での動作を考慮したフォールバック処理
- [ ] TypeScript strict modeでのビルドテスト

#### 推奨実装パターン
```typescript
"use client"

import { usePathname } from 'next/navigation'

export default function MyComponent() {
  const pathname = usePathname()
  
  // パターンA: 早期リターン
  if (!pathname) {
    return null // または適切なフォールバックUI
  }
  
  // パターンB: デフォルト値
  const safePath = pathname || '/'
  
  // パターンC: 条件付き処理
  const processedPath = pathname ? pathname.split('/') : ['/']
  
  return (
    // コンポーネントの実装
  )
}
```

### 2. useSearchParams()使用時のベストプラクティス

```typescript
import { useSearchParams } from 'next/navigation'

export default function MyComponent() {
  const searchParams = useSearchParams()
  
  // 安全な使用方法
  const queryString = searchParams ? searchParams.toString() : ''
  const paramValue = searchParams ? searchParams.get('key') : null
  
  return (
    // コンポーネントの実装
  )
}
```

### 3. ビルド前のチェック手順

#### ローカル環境での確認
```bash
# TypeScriptエラーチェック
npm run build

# 型チェックのみ実行
npx tsc --noEmit

# Lintチェック
npm run lint
```

#### CI/CD前の必須チェックリスト
- [ ] `npm run build`がエラーなく完了する
- [ ] TypeScript strict modeでエラーなし
- [ ] SSRモードでのページ表示確認
- [ ] 全ページのナビゲーション動作確認

## 関連する設定ファイル

### tsconfig.json
```json
{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true
  }
}
```

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 本番ビルド時のTypeScriptエラーを無視しない
    ignoreBuildErrors: false
  }
}
```

## トラブルシューティング

### よくある質問

**Q: 開発環境では動くのに本番ビルドでエラーが出るのはなぜ？**
A: 開発環境（`npm run dev`）と本番ビルド（`npm run build`）ではTypeScriptの型チェックの厳密さが異なります。本番ビルドでは最適化とともにより厳密なチェックが実行されます。

**Q: usePathname()が必ずしもnullを返すわけではないのに、なぜチェックが必要？**
A: TypeScriptの型定義上、戻り値にnullが含まれているため、型安全性を保つためにnullチェックが必須となります。実際にnullが返される場面は稀ですが、SSR環境や特定の条件下で発生する可能性があります。

**Q: 他にも同様のエラーが起きやすいNext.jsフックは？**
A: 以下のフックも同様の注意が必要です：
- `useSearchParams()`
- `useRouter()`
- `useParams()`

### エラー解決の手順
1. エラーメッセージから該当ファイルと行数を特定
2. 該当箇所でNext.jsフックの戻り値を使用しているか確認
3. 適切なnullチェックまたはフォールバック処理を追加
4. `npm run build`でビルドが成功することを確認
5. 機能に影響がないことをテスト

## 更新履歴
- 2025-01-12: 初版作成（GoogleAnalytics、LanguageSwitcherエラー対応）

---

**注意**: このガイドはNext.js 13.5.6での経験に基づいています。Next.jsのバージョンアップデートにより動作が変わる可能性があるため、公式ドキュメントも併せて確認してください。