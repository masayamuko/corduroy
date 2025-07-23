#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
WordPressエクスポートファイルからMarkdownファイルを生成するスクリプト
"""

import xml.etree.ElementTree as ET
import html
import re
import os
from datetime import datetime
import unicodedata

def clean_filename(filename):
    """ファイル名として安全な文字列に変換"""
    # HTMLエンティティをデコード
    filename = html.unescape(filename)
    # 不正な文字を除去
    filename = re.sub(r'[<>:"/\\|?*]', '', filename)
    # 連続する空白を単一の空白に
    filename = re.sub(r'\s+', ' ', filename)
    # 先頭末尾の空白を除去
    filename = filename.strip()
    # 長すぎる場合は切り詰め
    if len(filename) > 100:
        filename = filename[:100]
    return filename

def html_to_markdown(html_content):
    """HTMLをMarkdownに変換（簡易版）"""
    if not html_content:
        return ""
    
    # HTMLエンティティをデコード
    content = html.unescape(html_content)
    
    # 基本的なHTMLタグをMarkdownに変換
    conversions = [
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
        (r'<a\s+(?:[^>]*?\s+)?href=(["\'](.*?)["\'])[^>]*>(.*?)</a>', r'[\3](\2)'),
        
        # 画像
        (r'<img\s+(?:[^>]*?\s+)?src=(["\'](.*?)["\'])[^>]*?/?>', r'![](\2)'),
        
        # リスト
        (r'<ul[^>]*>', ''),
        (r'</ul>', ''),
        (r'<ol[^>]*>', ''),
        (r'</ol>', ''),
        (r'<li[^>]*>(.*?)</li>', r'- \1'),
        
        # 段落と改行
        (r'<p[^>]*>', ''),
        (r'</p>', '\n\n'),
        (r'<br[^>]*/?>', '\n'),
        
        # コード
        (r'<code[^>]*>(.*?)</code>', r'`\1`'),
        (r'<pre[^>]*>(.*?)</pre>', r'```\n\1\n```'),
        
        # 引用
        (r'<blockquote[^>]*>(.*?)</blockquote>', r'> \1'),
        
        # その他のHTMLタグを除去
        (r'<[^>]+>', ''),
    ]
    
    for pattern, replacement in conversions:
        content = re.sub(pattern, replacement, content, flags=re.DOTALL | re.IGNORECASE)
    
    # 連続する改行を整理
    content = re.sub(r'\n{3,}', '\n\n', content)
    content = content.strip()
    
    return content

def extract_posts_from_wordpress_xml(xml_file_path):
    """WordPressエクスポートXMLから記事を抽出"""
    print(f"WordPressエクスポートファイルを解析中: {xml_file_path}")
    
    try:
        tree = ET.parse(xml_file_path)
        root = tree.getroot()
        
        # 名前空間を定義
        namespaces = {
            'content': 'http://purl.org/rss/1.0/modules/content/',
            'excerpt': 'http://wordpress.org/export/1.2/excerpt/',
            'wp': 'http://wordpress.org/export/1.2/'
        }
        
        posts = []
        
        # channelの下のitemを探す
        for item in root.findall('.//item'):
            # 投稿タイプを確認（投稿のみ抽出）
            post_type = item.find('wp:post_type', namespaces)
            if post_type is not None and post_type.text != 'post':
                continue
            
            # 投稿ステータスを確認（公開済みのみ）
            status = item.find('wp:status', namespaces)
            if status is not None and status.text != 'publish':
                continue
            
            # 記事データを抽出
            title_elem = item.find('title')
            title = title_elem.text if title_elem is not None else "無題"
            
            content_elem = item.find('content:encoded', namespaces)
            content = content_elem.text if content_elem is not None else ""
            
            date_elem = item.find('wp:post_date', namespaces)
            post_date = date_elem.text if date_elem is not None else ""
            
            excerpt_elem = item.find('excerpt:encoded', namespaces)
            excerpt = excerpt_elem.text if excerpt_elem is not None else ""
            
            # カテゴリーとタグを抽出
            categories = []
            tags = []
            
            for category in item.findall('category'):
                domain = category.get('domain', '')
                nicename = category.get('nicename', '')
                cat_text = category.text or ''
                
                if domain == 'category':
                    categories.append(cat_text)
                elif domain == 'post_tag':
                    tags.append(cat_text)
            
            post_data = {
                'title': title,
                'content': content,
                'date': post_date,
                'excerpt': excerpt,
                'categories': categories,
                'tags': tags
            }
            
            posts.append(post_data)
        
        print(f"抽出した記事数: {len(posts)}")
        return posts
        
    except ET.ParseError as e:
        print(f"XMLの解析中にエラーが発生しました: {e}")
        return []
    except Exception as e:
        print(f"予期しないエラーが発生しました: {e}")
        return []

def create_markdown_files(posts, output_dir):
    """記事データからMarkdownファイルを作成"""
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    print(f"Markdownファイルを作成中: {output_dir}")
    
    created_files = []
    
    for i, post in enumerate(posts, 1):
        try:
            # ファイル名を生成
            date_str = ""
            if post['date']:
                try:
                    date_obj = datetime.strptime(post['date'][:19], '%Y-%m-%d %H:%M:%S')
                    date_str = date_obj.strftime('%Y-%m-%d')
                except:
                    date_str = "no-date"
            else:
                date_str = "no-date"
            
            clean_title = clean_filename(post['title'])
            filename = f"{date_str}_{clean_title}.md"
            
            # 重複ファイル名を避ける
            counter = 1
            original_filename = filename
            while os.path.exists(os.path.join(output_dir, filename)):
                name, ext = os.path.splitext(original_filename)
                filename = f"{name}_{counter}{ext}"
                counter += 1
            
            filepath = os.path.join(output_dir, filename)
            
            # Markdownコンテンツを生成
            markdown_content = html_to_markdown(post['content'])
            
            # フロントマターを作成
            frontmatter = "---\n"
            frontmatter += f"title: \"{post['title']}\"\n"
            if post['date']:
                frontmatter += f"date: {post['date']}\n"
            if post['excerpt']:
                excerpt_clean = post['excerpt'].replace('\n', ' ').replace('"', '\\"')
                frontmatter += f"excerpt: \"{excerpt_clean}\"\n"
            if post['categories']:
                frontmatter += f"categories: {post['categories']}\n"
            if post['tags']:
                frontmatter += f"tags: {post['tags']}\n"
            frontmatter += "---\n\n"
            
            # ファイルに書き出し
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(frontmatter)
                f.write(markdown_content)
            
            created_files.append(filename)
            print(f"[{i}/{len(posts)}] 作成: {filename}")
            
        except Exception as e:
            print(f"記事の処理中にエラーが発生しました: {post.get('title', 'Unknown')}: {e}")
    
    return created_files

def main():
    """メイン処理"""
    script_dir = os.path.dirname(os.path.abspath(__file__))
    xml_file = os.path.join(script_dir, "イナタビ WordPress エクスポート 2025年7月4日.xml")
    output_dir = os.path.join(script_dir, "markdown_posts")
    
    print("=== WordPressからMarkdown変換ツール ===")
    print(f"入力ファイル: {xml_file}")
    print(f"出力ディレクトリ: {output_dir}")
    print()
    
    if not os.path.exists(xml_file):
        print(f"エラー: XMLファイルが見つかりません: {xml_file}")
        return
    
    # 記事を抽出
    posts = extract_posts_from_wordpress_xml(xml_file)
    
    if not posts:
        print("記事が見つかりませんでした。")
        return
    
    # Markdownファイルを作成
    created_files = create_markdown_files(posts, output_dir)
    
    print()
    print("=== 変換完了 ===")
    print(f"作成されたファイル数: {len(created_files)}")
    print(f"出力ディレクトリ: {output_dir}")
    
    if created_files:
        print("\n作成されたファイル（最初の10件）:")
        for filename in created_files[:10]:
            print(f"  - {filename}")
        if len(created_files) > 10:
            print(f"  ... 他 {len(created_files) - 10} 件")

if __name__ == "__main__":
    main() 