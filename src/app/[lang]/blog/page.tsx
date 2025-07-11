import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const postsDirectory = path.join(process.cwd(), 'src/posts');

// 記事別の魅力的な導入文を定義
const customExcerpts = {
  'why-create-second-self': '「なんで毎回同じ説明をしなきゃいけないんだろう？」そんな疑問から始まった「第二の自分」プロジェクト。3ヶ月使い続けた結果、僕の人生を大きく変える最高のパートナーが誕生しました。',
  'friends-eigo': '留学経験者が語る、海外ドラマ「フレンズ」を使った効果的な英語学習法。日常会話レベルの英語力を身につけた具体的な方法と、全シーズン5回視聴した筆者だからこそ伝えられる実践的なコツを詳しく解説。',
  'security': 'ゲストハウスやバックパッカーに泊まる筆者が、旅先での貴重品管理とセキュリティについて詳しく解説。南京錠の選び方から実践的な防犯対策まで、実際の体験談を交えて紹介。',
  'asus-zenbeame1': 'ASUSのプロジェクターとFire TV Stickの組み合わせで実現した、最高のホームシアター体験。コストパフォーマンス抜群の映画鑑賞環境を構築した方法を詳しく紹介。',
  'let-stay-travelers': '旅人たちの居場所を作るゲストハウスでの体験談。世界中の旅人との出会いと交流を通じて学んだ、人と人との繋がりの大切さについて。',
  'fukuoka-warabimochi': '福岡の隠れた名店で見つけた絶品わらび餅。地元民だからこそ知る、本当においしい福岡グルメの魅力を紹介。',
  'display-design': 'ディスプレイデザインの基本から応用まで。ユーザビリティを重視した効果的な画面設計のコツと実践例を解説。',
  'gr2-hokori': 'GR2の魅力と使いこなし方。コンパクトなボディに詰まった高性能カメラの真価を引き出す撮影テクニックを紹介。',
  'display-demelit': 'ディスプレイの選び方とデメリットについて。用途に応じた最適な画面サイズと解像度の選び方を詳しく解説。',
  'meisou-zabuton': '瞑想用の座布団選びと効果的な瞑想環境の作り方。心身のリラックスを促進する正しい姿勢と道具の選び方を紹介。',
  'kukou-omukae': '空港での出迎えサービスを活用した快適な旅行体験。初海外の方でも安心して使える空港送迎サービスの魅力と利用方法。',
  'bookscan-premium-tips': 'BookScan Premiumを使った効率的な書籍デジタル化のコツ。高品質なスキャン結果を得るための設定とテクニックを紹介。',
  'bookscan-tips': 'BookScanを使った書籍のデジタル化方法。手軽に本を電子化して持ち運びやすくする実践的なテクニックを解説。',
  'languageexchange-fukuoka': '福岡での言語交換イベント体験談。地元で開催される国際交流イベントを通じて、楽しく語学力を向上させる方法を紹介。',
  'zuca-prokurolux-travel': 'ZUCA ProとKroluxを使った快適な旅行体験。機能的でスタイリッシュな旅行用品の組み合わせで実現する理想の旅スタイル。',
  'guesthouse-nihonjin': 'ゲストハウスで働く日本人スタッフの視点から見た、外国人ゲストとの交流と文化の違いについて。',
  'westernliquor': '洋酒の選び方と楽しみ方。初心者でも安心して始められる、おいしい洋酒の世界への入門ガイド。',
  'kaigai-tomodachi-nimotsu': '海外の友達への荷物の送り方と注意点。国際郵便を活用した安全で確実な荷物配送の方法を詳しく解説。',
  'international-friends': '国際的な友達作りと文化交流の楽しさ。言語の壁を越えて築く深い友情と、異文化理解の重要性について。',
  'magnet_ubag': 'マグネット付きバッグの便利な使い方と活用法。日常生活をより快適にする、機能的でスタイリッシュなバッグの魅力を紹介。',
  'hide_uberlogo': 'Uberロゴを隠す方法とプライバシー保護の重要性。個人情報を守りながら、便利なサービスを安全に利用するためのテクニック。',
  'nihon-igai': '日本以外の国での生活体験談。海外での暮らしを通じて学んだ、文化の違いと適応のコツについて。',
  'esperanto-well-known': 'エスペラント語の魅力と学習方法。国際共通語として設計された人工言語の特徴と、世界平和への貢献について。'
};

function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // カスタム導入文があれば使用、なければデフォルト
    const excerpt = customExcerpts[slug as keyof typeof customExcerpts] || 
                   (content.substr(0, 120) + (content.length > 120 ? '...' : ''));
    
    return {
      slug,
      title: data.title || slug,
      category: data.category || 'Blog',
      date: data.date || '',
      excerpt,
      image: data.image || '', // frontmatterにimageがあれば追加
    };
  });
  // 日付で降順ソート（新しい順）
  return posts.sort((a, b) => (b.date > a.date ? 1 : -1));
}

export default function BlogPage() {
  const posts = getPosts();
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat w-full flex items-center justify-center"
        style={{
          height: "320px", // 必要に応じて調整
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)), url('https://res.cloudinary.com/dg3mdcuju/image/upload/v1752078463/masan_dayo_AI_--ar_21_--profile_njfaa7d_--v_7_1091e879-2178-4ba6-b54e-c9254483d644_2_spq5e3.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center center",
        }}
      >
        <div className="text-center w-full">
          <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-balance text-black drop-shadow-lg">
            BLOG
          </h1>
          <div className="w-32 h-1 bg-black mx-auto drop-shadow-sm"></div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 bg-orange-50">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="block bg-orange-100/80 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-orange-200 h-full"
              >
                {/* サムネイル画像（frontmatterにimageがあれば） */}
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block bg-orange-300 text-orange-900 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <time className="text-xs text-orange-700">{post.date}</time>
                  </div>
                  <h2 className="text-lg font-bold text-orange-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-orange-800 text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                  <div className="inline-flex items-center text-orange-700 hover:text-white font-semibold bg-orange-200 hover:bg-orange-500 transition-colors rounded px-4 py-2">
                    続きを読む
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 