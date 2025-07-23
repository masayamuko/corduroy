# 00 Overview - 第二の自分システム

**現在のスコア: 92/100点** | 最終更新: 2024-06-13

## 🚀 クイックスタート

### AIとして動作する場合
1. **[起動プロンプト](summary/99_test_prompts.md#🚀-起動プロンプト第二の自分モード)** を実行
2. **[基本理解チェック](summary/99_test_prompts.md#レベル1基本理解チェック)** で動作確認
3. **[Core Identity](summary/01_core_identity.md)** から読み込み開始

### 人間として利用する場合
1. **[Core Identity](summary/01_core_identity.md)** で全体像把握
2. **必要な詳細情報** は`details/`フォルダで確認
3. **深い分析** が必要なら`deepdive/`フォルダを参照

---

## 📁 構造化された情報階層

### 🎯 **最優先（すぐに読むべき）**
| ファイル | 役割 | AI読み込み推奨度 |
|---------|------|-------------|
| **[01_core_identity](summary/01_core_identity.md)** | 基本プロフィール・価値観 | ⭐⭐⭐⭐⭐ |
| **[02_thinking_psychology](summary/02_thinking_psychology.md)** | 思考パターン・心理状態 | ⭐⭐⭐⭐⭐ |
| **[09_ai_instruction_manual](summary/09_ai_instruction_manual.md)** | AI活用手法・指示書 | ⭐⭐⭐⭐⭐ |

### 📋 **コンテキスト理解（必要に応じて）**
| ファイル | 役割 | 活用場面 |
|---------|------|---------|
| **[03_learning_problem_solving](summary/03_learning_problem_solving.md)** | 学習・解決手法 | 新しい課題・学習支援時 |
| **[04_daily_routines](summary/04_daily_routines.md)** | 日常・スケジュール | 時間管理・計画立案時 |
| **[05_skills_abilities](summary/05_skills_abilities.md)** | スキル・能力 | タスク割り当て・提案時 |
| **[07_goals_plans](summary/07_goals_plans.md)** | 目標・計画 | 将来計画・ビジョン議論時 |

### 🎨 **バックグラウンド（深い理解のため）**
| ファイル | 役割 | 活用場面 |
|---------|------|---------|
| **[06_interests_hobbies](summary/06_interests_hobbies.md)** | 興味・趣味 | 創造的提案・リラックス支援時 |
| **[08_memories_experiences](summary/08_memories_experiences.md)** | 重要な経験・記憶 | 価値観の背景理解時 |
| **[10_personal_story](summary/10_personal_story.md)** | 人生ストーリー | 深い対話・人生相談時 |

---

## 🔧 システム運用ガイド

### **情報の更新・メンテナンス**
- **Summary更新**: 月1回、Essenceセクション見直し
- **Details更新**: 重要な変化があった時点で実施
- **Deepdive更新**: 四半期ごとに深い分析を追加
- **Foundation連携**: `scripts/build_fundation.py`で自動化

### **品質管理指標**
- ✅ **完成度92/100点**: 大幅改善により+19点達成
- 🎯 **次回目標95点**: deepdive充実で+4点
- 🚀 **最終目標100点**: 完全システム化で+9点

### **ファイルサイズ監視**
```dataview
table length(file.text) as Chars, updated
from "00_core/summary"
where contains(tags, "core")
sort Chars desc
```

---

## 📊 システム評価（92/100点）

| 評価項目 | 現在 | 目標 | 状況 |
|---------|------|------|------|
| 情報の完全性 | 18/20 | 19/20 | ✅ 高品質 |
| 構造化・整理 | 15/15 | 15/15 | ✅ 完了 |
| AI活用しやすさ | 25/25 | 25/25 | ✅ 完了 |
| 実用性・機能性 | 18/20 | 20/20 | 🔄 ほぼ完成 |
| 一貫性・質 | 9/10 | 10/10 | ✅ 高水準 |
| メンテナンス性 | 9/10 | 10/10 | ✅ ほぼ完成 |

> **最新改善**: 2024-06-13に起動プロンプト・トラブルシューティング・実用ガイド・CHANGELOG改善により+19点向上
