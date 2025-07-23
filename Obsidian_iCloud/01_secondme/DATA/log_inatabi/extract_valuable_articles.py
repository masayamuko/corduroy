#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
イナタビの記事から現在でも活用できるオピニオン系・経歴系記事を抽出
"""

import json
import os
import shutil
from datetime import datetime

def analyze_articles():
    """記事を分析して有用なものを特定"""
    
    # メタデータを読み込み
    with open('markdown_posts/_metadata.json', 'r', encoding='utf-8') as f:
        metadata = json.load(f)
    
    # 価値のあるカテゴリーを定義
    valuable_categories = {
        'career_lifestyle': [
            'どこでも働ける仕事',
            'ブログ',
            'ライフハック',
            '旅する人生',
            'ノマドの持ち物',
            '断捨離・ミニマリスト関連'
        ],
        'community_opinion': [
            'コミュニティー',
            '福岡ブロガー会',
            '田舎でのゲストハウス開業への道'
        ],
        'travel_experience': [
            '旅・留学',
            '外国語学習',
            '国際交流の楽しさ'
        ],
        'business_skills': [
            'PC関連',
            'カメラ',
            '旅道具・仕事道具'
        ]
    }
    
    # 除外するカテゴリー（古い情報が多いもの）
    exclude_categories = [
        '福岡の飲食店',
        '福岡のゲストハウス巡り',
        'その他'  # フードデリバリーなど時事性の高いもの
    ]
    
    valuable_articles = {}
    
    for category_type, categories in valuable_categories.items():
        valuable_articles[category_type] = []
        
        for post in metadata:
            # 除外カテゴリーをチェック
            has_exclude = any(exc in post['categories'] for exc in exclude_categories)
            if has_exclude:
                continue
            
            # 価値あるカテゴリーをチェック
            has_valuable = any(cat in post['categories'] for cat in categories)
            if has_valuable:
                # 長文記事を優先（5000文字以上）
                if post['content_length'] >= 5000:
                    post['priority'] = 'high'
                elif post['content_length'] >= 3000:
                    post['priority'] = 'medium'
                else:
                    post['priority'] = 'low'
                
                valuable_articles[category_type].append(post)
    
    # 優先度とコンテンツ長でソート
    for category_type in valuable_articles:
        valuable_articles[category_type].sort(
            key=lambda x: (x['priority'] == 'high', x['content_length']), 
            reverse=True
        )
    
    return valuable_articles

def create_summary_report(valuable_articles):
    """分析結果のサマリーレポートを作成"""
    
    report = "# 有用記事抽出レポート\n\n"
    report += f"**生成日時**: {datetime.now().strftime('%Y年%m月%d日 %H:%M')}\n\n"
    
    total_articles = sum(len(articles) for articles in valuable_articles.values())
    report += f"**抽出記事総数**: {total_articles}件\n\n"
    
    for category_type, articles in valuable_articles.items():
        category_names = {
            'career_lifestyle': 'キャリア・ライフスタイル',
            'community_opinion': 'コミュニティ・オピニオン',
            'travel_experience': '旅行・留学体験',
            'business_skills': 'ビジネススキル・ツール'
        }
        
        report += f"## {category_names[category_type]} ({len(articles)}件)\n\n"
        
        high_priority = [a for a in articles if a['priority'] == 'high']
        medium_priority = [a for a in articles if a['priority'] == 'medium']
        low_priority = [a for a in articles if a['priority'] == 'low']
        
        report += f"- **高優先度** (5000文字以上): {len(high_priority)}件\n"
        report += f"- **中優先度** (3000-4999文字): {len(medium_priority)}件\n"
        report += f"- **低優先度** (3000文字未満): {len(low_priority)}件\n\n"
        
        # トップ5記事を表示
        report += "### 主要記事（長文順）\n"
        for i, article in enumerate(articles[:5], 1):
            date_str = article['date'][:10] if article['date'] else 'no-date'
            report += f"{i}. **{article['filename']}** ({article['content_length']}文字)\n"
            report += f"   - 日付: {date_str}\n"
            report += f"   - カテゴリー: {', '.join(article['categories'])}\n"
            report += f"   - 優先度: {article['priority']}\n\n"
    
    return report

def copy_valuable_articles(valuable_articles, base_dir="valuable_articles"):
    """価値ある記事を新しいフォルダ構造にコピー"""
    
    if os.path.exists(base_dir):
        shutil.rmtree(base_dir)
    
    copied_files = {}
    
    category_names = {
        'career_lifestyle': '01_キャリア・ライフスタイル',
        'community_opinion': '02_コミュニティ・オピニオン', 
        'travel_experience': '03_旅行・留学体験',
        'business_skills': '04_ビジネススキル・ツール'
    }
    
    for category_type, articles in valuable_articles.items():
        category_dir = os.path.join(base_dir, category_names[category_type])
        os.makedirs(category_dir, exist_ok=True)
        
        copied_files[category_type] = []
        
        # 優先度別にサブフォルダ作成
        priority_dirs = {
            'high': os.path.join(category_dir, 'A_高優先度_5000文字以上'),
            'medium': os.path.join(category_dir, 'B_中優先度_3000-4999文字'),
            'low': os.path.join(category_dir, 'C_低優先度_3000文字未満')
        }
        
        for priority, priority_dir in priority_dirs.items():
            os.makedirs(priority_dir, exist_ok=True)
        
        # 記事をコピー
        for article in articles:
            src_file = os.path.join('markdown_posts', article['filename'])
            dst_file = os.path.join(priority_dirs[article['priority']], article['filename'])
            
            if os.path.exists(src_file):
                shutil.copy2(src_file, dst_file)
                copied_files[category_type].append({
                    'filename': article['filename'],
                    'priority': article['priority'],
                    'content_length': article['content_length'],
                    'categories': article['categories']
                })
    
    return copied_files

def create_index_files(valuable_articles, base_dir="valuable_articles"):
    """各カテゴリーにインデックスファイルを作成"""
    
    category_names = {
        'career_lifestyle': '01_キャリア・ライフスタイル',
        'community_opinion': '02_コミュニティ・オピニオン',
        'travel_experience': '03_旅行・留学体験', 
        'business_skills': '04_ビジネススキル・ツール'
    }
    
    category_descriptions = {
        'career_lifestyle': 'Masayaのキャリア観、ライフスタイル、ワークスタイルに関する記事。ノマドワーク、ブログ運営、ライフハックなど。',
        'community_opinion': 'コミュニティ運営、福岡での活動、ゲストハウス開業計画など、Masayaの社会活動とオピニオン。',
        'travel_experience': '留学・旅行体験、国際交流、外国語学習など、Masayaの国際的な経験と価値観。',
        'business_skills': 'PC、カメラ、旅道具など、仕事や旅に使用するツールのレビューとノウハウ。'
    }
    
    for category_type, articles in valuable_articles.items():
        category_dir = os.path.join(base_dir, category_names[category_type])
        index_file = os.path.join(category_dir, 'README.md')
        
        with open(index_file, 'w', encoding='utf-8') as f:
            f.write(f"# {category_names[category_type]}\n\n")
            f.write(f"{category_descriptions[category_type]}\n\n")
            f.write(f"**記事数**: {len(articles)}件\n\n")
            
            # 優先度別統計
            high_count = len([a for a in articles if a['priority'] == 'high'])
            medium_count = len([a for a in articles if a['priority'] == 'medium'])
            low_count = len([a for a in articles if a['priority'] == 'low'])
            
            f.write("## 優先度別統計\n\n")
            f.write(f"- **A_高優先度** (5000文字以上): {high_count}件\n")
            f.write(f"- **B_中優先度** (3000-4999文字): {medium_count}件\n") 
            f.write(f"- **C_低優先度** (3000文字未満): {low_count}件\n\n")
            
            f.write("## 記事一覧\n\n")
            
            current_priority = None
            for article in articles:
                if article['priority'] != current_priority:
                    priority_names = {
                        'high': '### A_高優先度 (5000文字以上)',
                        'medium': '### B_中優先度 (3000-4999文字)',
                        'low': '### C_低優先度 (3000文字未満)'
                    }
                    f.write(f"{priority_names[article['priority']]}\n\n")
                    current_priority = article['priority']
                
                date_str = article['date'][:10] if article['date'] else 'no-date'
                f.write(f"- **{article['filename']}** ({article['content_length']}文字)\n")
                f.write(f"  - 日付: {date_str}\n")
                f.write(f"  - カテゴリー: {', '.join(article['categories'])}\n\n")

def main():
    """メイン処理"""
    print("=== イナタビ記事価値抽出ツール ===")
    print()
    
    # 記事を分析
    print("📊 記事を分析中...")
    valuable_articles = analyze_articles()
    
    # サマリーレポート作成
    print("📝 サマリーレポートを作成中...")
    report = create_summary_report(valuable_articles)
    
    with open('valuable_articles_report.md', 'w', encoding='utf-8') as f:
        f.write(report)
    
    # 価値ある記事をコピー
    print("📁 価値ある記事をコピー中...")
    copied_files = copy_valuable_articles(valuable_articles)
    
    # インデックスファイル作成
    print("📋 インデックスファイルを作成中...")
    create_index_files(valuable_articles)
    
    # メインREADME作成
    with open('valuable_articles/README.md', 'w', encoding='utf-8') as f:
        f.write("# イナタビ - 価値ある記事コレクション\n\n")
        f.write("WordPressブログ「イナタビ」から抽出した、現在でも活用できるオピニオン系・経歴系記事のコレクションです。\n\n")
        f.write("## フォルダ構成\n\n")
        f.write("- **01_キャリア・ライフスタイル**: ワークスタイル、ライフハック、ノマド関連\n")
        f.write("- **02_コミュニティ・オピニオン**: 社会活動、コミュニティ運営、価値観\n")
        f.write("- **03_旅行・留学体験**: 国際経験、外国語学習、文化交流\n")
        f.write("- **04_ビジネススキル・ツール**: PC、カメラ、仕事道具のレビュー\n\n")
        f.write("各フォルダ内は優先度別（A_高、B_中、C_低）に分類されています。\n\n")
        f.write(f"**抽出日**: {datetime.now().strftime('%Y年%m月%d日')}\n")
        f.write("**元ブログ**: イナタビ (2016-2021年)\n")
    
    print()
    print("=== 抽出完了 ===")
    
    total_articles = sum(len(articles) for articles in valuable_articles.values())
    print(f"✅ 総抽出記事数: {total_articles}件")
    
    for category_type, articles in valuable_articles.items():
        category_names = {
            'career_lifestyle': 'キャリア・ライフスタイル',
            'community_opinion': 'コミュニティ・オピニオン',
            'travel_experience': '旅行・留学体験',
            'business_skills': 'ビジネススキル・ツール'
        }
        print(f"   - {category_names[category_type]}: {len(articles)}件")
    
    print()
    print("📁 出力ディレクトリ: ./valuable_articles/")
    print("📄 詳細レポート: ./valuable_articles_report.md")

if __name__ == "__main__":
    main() 