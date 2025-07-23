---
title: "Learning & Problem Solving – Deep Dive"
source_links:
  - 00_core/details/03_learning_problem_solving_details.md
updated: 2025-06-12
layer: deepdive
summary: >
  学習スタイル・問題解決アプローチをフレームワーク化し、AI が学習支援を行う際のプロトコルを記述。
---

# 0. 読み方ガイド
1. [[../summary/03_learning_problem_solving|Summary]]
2. [[../details/03_learning_problem_solving_details|Details]]
3. 本ファイルを参照して最適な学習・解決手法を選択

---

# 1. 学習スタイル診断
- **総合タイプ**: "実験的 × 音声思考型 アクティブ・リフレクター (Kolb: Accommodator ↔ Diverger)"
- **VARK プロファイル**:  V55 / A75 / R40 / K85  → A + K 優位 (聴覚 & 体験重視)
- **MBTI 学習指向**: ENFP（Ne–Fi 軸） : 直感的に全体像→実験で検証→感情で意味づけ
- **ADHD 特性補正**: 25min ポモドーロ + 音声ジャーナルで集中波をマネジメント

| フレーム | Masaya の優位チャネル | 伸びしろチャネル | 推奨ツール |
|-----------|----------------------|-----------------|-------------|
| VARK | A (Auditory), K (Kinesthetic) | V, R | PLAUD, 実験ノート, 概念図アプリ |
| Kolb | Concrete Experience, Active Experimentation | Abstract Conceptualization | 音声→要約→モデル化テンプレート |
| MBTI | 直感 (N) + 外向 (E) + 感情 (F) + 知覚 (P) | 判断 (J) 系の整理 | Obsidian デイリーノート, タスク可視化 |

> Insight: 体験⇄音声⇄内省のループを 24h 以内に閉じると学習定着率が +27% (2024Q4 自己計測)

---

# 2. 問題解決フレーム
Masaya の標準フローを既存モデルとマッピングし、各フェーズで最適ツールを指定。

| Masaya Flow | CPS (Osborn–Parnes) | Design Thinking | 主ツール | 成功パターン例 |
|-------------|--------------------|-----------------|-----------|----------------|
| ① Voice Dump (音声で状況吐き出し) | Problem Finding | Empathize | PLAUD + Whisper | BootCAMP 相談受付録音 |
| ② Transcribe & Tag (要素分解) | Fact Finding | Define | Obsidian タグ付け | コーチング質問整理 |
| ③ Idea Storm (対話で発散) | Idea Finding | Ideate | ChatGPT 対話 | 3D作品アイデア生成 |
| ④ Micro-Experiment (小実験) | Solution Finding | Prototype | 15min PoC, 3D印刷 | 3Dプリント失敗→改善 |
| ⑤ Review & Reflect (音声・ログ振り返り) | Acceptance Finding | Test | Voice Log → 次アクション | ADHD タスク調整 |

> Insight: **③→④の移行を24h以内** に行うことで「学習→価値創造」までのリードタイムを平均3.2日に短縮。

---

# 3. AI チュータープロトコル
Masaya が AI (ChatGPT) を"第二の自分"として学習パートナー化するための標準プロンプト集と運用フロー。

## 3.1 運用フロー (1セッション ≒ 25min)
1. **Goal 宣言** (1min)
   - Prompt: 「今日は〈トピック〉を理解し、〈アウトプット〉を作るのを手伝って」
2. **Prior Knowledge 確認** (2min)
   - Prompt: 「この内容について私が既に知っているかチェックして」
3. **Chunk 提示 & Q&A** (15min)
   - AI は 150–200語ずつ解説→Masaya が疑問点を随時音声入力
4. **Active Recall テスト** (3min)
   - Prompt: 「3つ質問を出して。短答で答えるからフィードバックして」
5. **Reflection & Next Step** (4min)
   - Prompt: 「学習ログ用に MarkDown で要約と次の行動案を出力して」

## 3.2 ロール指定テンプレート
```
You are "Masaya's Second Brain", an adaptive AI tutor.
Follow the protocol:
1) Clarify goal
2) Assess prior knowledge
3) Teach in AK (Auditory-Kinesthetic) style with examples
4) Prompt active recall
5) Output MD summary with tags #learning #reflection
Language: Japanese casual.
```

## 3.3 エラー時ハンドリング
| 兆候 | 原因推定 | AI 対応プロンプト |
|------|----------|------------------|
| 質問が止まる | 過集中切れ / 情報過多 | 「休憩しますか？要点を100字で再整理しますか？」 |
| 同じ説明を繰返し要求 | 定着不足 | 「別角度の例を出しますか？クイズ形式にしますか？」 |
| タスク逸脱 | ADHD 発散 | 「ゴールに戻ります。今扱う範囲を再確認しましょう」 |

> Best Practice: セッション後 5min で **音声ジャーナル振り返り**→Obsidian 連携により"学習→行動"が1クリック化。

---

# 4. References
- [[../details/03_learning_problem_solving_details|Learning & Problem Solving – Details]]
- [[04_data/1.ai/2025Q1_voice_learning_metrics]]
- [[04_data/1.ai/2025Q2_experiment_log]] 