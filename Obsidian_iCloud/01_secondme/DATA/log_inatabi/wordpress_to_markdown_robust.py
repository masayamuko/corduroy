#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
WordPressエクスポートファイルからMarkdownファイルを生成するスクリプト（堅牢版）
不正なXMLを修正して処理する
"""

import re
import html
import os
from datetime import datetime
import json

def clean_filename(filename):
    """ファイル名として安全な文字列に変換"""
    filename = html.unescape(filename)
    filename = re.sub(r'[<>:"/\\|?*]', '', filename)
    filename = re.sub(r'\s+', ' ', filename)
    filename = filename.strip()
    if len(filename) > 100:
        filename = filename[:100]
    return filename

def html_to_markdown(html_content):
    """HTMLをMarkdownに変換（改良版）"""
    if not html_content:
        return ""
    
    content = html.unescape(html_content)
    
    # より詳細なHTMLからMarkdownの変換
    conversions = [
        # WordPress特有のタグ
        (r'\[caption[^\]]*\](.*?)\[/caption\]', r'\1'),
        (r'\[gallery[^\]]*\]', ''),
        
        # 見出し
        (r'<h1[^>]*>(.*?)</h1>', r'# \1'),
        (r'<h2[^>]*>(.*?)</h2>', r'## \1'),
        (r'<h3[^>]*>(.*?)</h3>', r'### \1'),
        (r'<h4[^>]*>(.*?)</h4>', r'#### \1'),
        (r'<h5[^>]*>(.*?)</h5>', r'##### \1'),
        (r'<h6[^>]*>(.*?)</h6>', r'###### \1'),
        
        # 強調
        (r'<strong[^>]*>(.*?)</strong>', r'**\1**'),
        (r'<b[^>]*>(.*?)</b>', r'**\1**'),
        (r'<em[^>]*>(.*?)</em>', r'*\1*'),
        (r'<i[^>]*>(.*?)</i>', r'*\1*'),
        
        # リンク
        (r'<a\s+(?:[^>]*?\s+)?href=(["\'])(.*?)\1[^>]*>(.*?)</a>', r'[\3](\2)'),
        
        # 画像
        (r'<img\s+(?:[^>]*?\s+)?src=(["\'])(.*?)\1[^>]*?/?>', r'![](\2)'),
        
        # リスト
        (r'<ul[^>]*>', ''),
        (r'</ul>', '\n'),
        (r'<ol[^>]*>', ''),
        (r'</ol>', '\n'),
        (r'<li[^>]*>(.*?)</li>', r'- \1\n'),
        
        # 段落と改行
        (r'<p[^>]*>(.*?)</p>', r'\1\n\n'),
        (r'<br\s*/?>', '\n'),
        
        # コードとプリフォーマット
        (r'<code[^>]*>(.*?)</code>', r'`\1`'),
        (r'<pre[^>]*>(.*?)</pre>', r'```\n\1\n```'),
        
        # 引用
        (r'<blockquote[^>]*>(.*?)</blockquote>', r'> \1'),
        
        # テーブル（簡易）
        (r'<table[^>]*>', '\n'),
        (r'</table>', '\n'),
        (r'<tr[^>]*>', ''),
        (r'</tr>', '\n'),
        (r'<t[hd][^>]*>(.*?)</t[hd]>', r'| \1 '),
        
        # その他のHTMLタグを除去
        (r'<[^>]+>', ''),
    ]
    
    for pattern, replacement in conversions:
        content = re.sub(pattern, replacement, content, flags=re.DOTALL | re.IGNORECASE)
    
    # 連続する改行を整理
    content = re.sub(r'\n{3,}', '\n\n', content)
    content = content.strip()
    
    return content

def extract_posts_with_regex(xml_content):
    """正規表現を使ってWordPressの投稿を抽出"""
    print("正規表現を使用してWordPress投稿を抽出中...")
    
    posts = []
    
    # itemタグの内容を抽出
    item_pattern = r'<item>(.*?)</item>'
    items = re.findall(item_pattern, xml_content, re.DOTALL)
    
    print(f"見つかったアイテム数: {len(items)}")
    
    for item_content in items:
        try:
            # 投稿タイプをチェック
            post_type_match = re.search(r'<wp:post_type><!\[CDATA\[(.*?)\]\]></wp:post_type>', item_content)
            if post_type_match and post_type_match.group(1) != 'post':
                continue
            
            # 投稿ステータスをチェック
            status_match = re.search(r'<wp:status><!\[CDATA\[(.*?)\]\]></wp:status>', item_content)
            if status_match and status_match.group(1) != 'publish':
                continue
            
            # タイトルを抽出
            title_match = re.search(r'<title><!\[CDATA\[(.*?)\]\]></title>', item_content)
            title = title_match.group(1) if title_match else "無題"
            
            # コンテンツを抽出
            content_match = re.search(r'<content:encoded><!\[CDATA\[(.*?)\]\]></content:encoded>', item_content, re.DOTALL)
            content = content_match.group(1) if content_match else ""
            
            # 日付を抽出
            date_match = re.search(r'<wp:post_date><!\[CDATA\[(.*?)\]\]></wp:post_date>', item_content)
            post_date = date_match.group(1) if date_match else ""
            
            # 抜粋を抽出
            excerpt_match = re.search(r'<excerpt:encoded><!\[CDATA\[(.*?)\]\]></excerpt:encoded>', item_content, re.DOTALL)
            excerpt = excerpt_match.group(1) if excerpt_match else ""
            
            # カテゴリーとタグを抽出
            categories = []
            tags = []
            
            category_pattern = r'<category domain="([^"]*)"[^>]*><!\[CDATA\[(.*?)\]\]></category>'
            category_matches = re.findall(category_pattern, item_content)
            
            for domain, cat_name in category_matches:
                if domain == 'category':
                    categories.append(cat_name)
                elif domain == 'post_tag':
                    tags.append(cat_name)
            
            post_data = {
                'title': title,
                'content': content,
                'date': post_date,
                'excerpt': excerpt,
                'categories': categories,
                'tags': tags
            }
            
            posts.append(post_data)
            
        except Exception as e:
            print(f"投稿の処理中にエラー: {e}")
            continue
    
    print(f"抽出した公開済み投稿数: {len(posts)}")
    return posts

def create_markdown_files(posts, output_dir):
    """記事データからMarkdownファイルを作成"""
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    print(f"Markdownファイルを作成中: {output_dir}")
    
    created_files = []
    metadata = []
    
    for i, post in enumerate(posts, 1):
        try:
            # 日付処理
            date_str = "no-date"
            date_formatted = ""
            if post['date']:
                try:
                    date_obj = datetime.strptime(post['date'][:19], '%Y-%m-%d %H:%M:%S')
                    date_str = date_obj.strftime('%Y-%m-%d')
                    date_formatted = date_obj.strftime('%Y-%m-%d %H:%M:%S')
                except:
                    date_str = "no-date"
            
            # ファイル名生成
            clean_title = clean_filename(post['title'])
            filename = f"{date_str}_{clean_title}.md"
            
            # 重複回避
            counter = 1
            original_filename = filename
            while os.path.exists(os.path.join(output_dir, filename)):
                name, ext = os.path.splitext(original_filename)
                filename = f"{name}_{counter}{ext}"
                counter += 1
            
            filepath = os.path.join(output_dir, filename)
            
            # Markdownコンテンツ生成
            markdown_content = html_to_markdown(post['content'])
            
            # フロントマター作成
            frontmatter = "---\n"
            frontmatter += f"title: \"{post['title'].replace('\"', '\\\"')}\"\n"
            if date_formatted:
                frontmatter += f"date: \"{date_formatted}\"\n"
            if post['excerpt']:
                excerpt_clean = post['excerpt'].replace('\n', ' ').replace('"', '\\"')[:200]
                frontmatter += f"excerpt: \"{excerpt_clean}\"\n"
            if post['categories']:
                frontmatter += f"categories:\n"
                for cat in post['categories']:
                    frontmatter += f"  - \"{cat}\"\n"
            if post['tags']:
                frontmatter += f"tags:\n"
                for tag in post['tags']:
                    frontmatter += f"  - \"{tag}\"\n"
            frontmatter += "source: \"WordPress (イナタビ)\"\n"
            frontmatter += "---\n\n"
            
            # ファイル書き込み
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(frontmatter)
                f.write(markdown_content)
            
            created_files.append(filename)
            
            # メタデータ記録
            metadata.append({
                'filename': filename,
                'title': post['title'],
                'date': date_formatted,
                'categories': post['categories'],
                'tags': post['tags'],
                'content_length': len(markdown_content)
            })
            
            print(f"[{i}/{len(posts)}] 作成: {filename}")
            
        except Exception as e:
            print(f"記事作成エラー ({post.get('title', 'Unknown')}): {e}")
    
    # メタデータをJSONファイルで保存
    metadata_file = os.path.join(output_dir, '_metadata.json')
    with open(metadata_file, 'w', encoding='utf-8') as f:
        json.dump(metadata, f, ensure_ascii=False, indent=2)
    
    return created_files, metadata

def main():
    """メイン処理"""
    script_dir = os.path.dirname(os.path.abspath(__file__))
    xml_file = os.path.join(script_dir, "イナタビ WordPress エクスポート 2025年7月4日.xml")
    output_dir = os.path.join(script_dir, "markdown_posts")
    
    print("=== WordPressからMarkdown変換ツール（堅牢版）===")
    print(f"入力ファイル: {xml_file}")
    print(f"出力ディレクトリ: {output_dir}")
    print()
    
    if not os.path.exists(xml_file):
        print(f"エラー: XMLファイルが見つかりません: {xml_file}")
        return
    
    # XMLファイルを読み込み
    print("XMLファイルを読み込み中...")
    try:
        with open(xml_file, 'r', encoding='utf-8') as f:
            xml_content = f.read()
        print(f"ファイルサイズ: {len(xml_content) / 1024 / 1024:.1f} MB")
    except Exception as e:
        print(f"ファイル読み込みエラー: {e}")
        return
    
    # 正規表現で投稿を抽出
    posts = extract_posts_with_regex(xml_content)
    
    if not posts:
        print("投稿が見つかりませんでした。")
        return
    
    # Markdownファイル作成
    created_files, metadata = create_markdown_files(posts, output_dir)
    
    print()
    print("=== 変換完了 ===")
    print(f"作成されたファイル数: {len(created_files)}")
    print(f"出力ディレクトリ: {output_dir}")
    
    # 統計情報
    total_categories = set()
    total_tags = set()
    for meta in metadata:
        total_categories.update(meta['categories'])
        total_tags.update(meta['tags'])
    
    print(f"カテゴリー数: {len(total_categories)}")
    print(f"タグ数: {len(total_tags)}")
    
    if created_files:
        print("\n作成されたファイル（最初の10件）:")
        for filename in created_files[:10]:
            print(f"  - {filename}")
        if len(created_files) > 10:
            print(f"  ... 他 {len(created_files) - 10} 件")
    
    print(f"\n詳細情報は {output_dir}/_metadata.json を確認してください。")

if __name__ == "__main__":
    main() 