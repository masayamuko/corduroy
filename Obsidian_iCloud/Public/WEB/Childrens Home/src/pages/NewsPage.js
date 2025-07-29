import React from 'react';

const NewsPage = () => {
  const news = [
    {
      id: 1,
      date: '2024-12-15',
      category: 'お知らせ',
      title: 'TIES開設準備進行中',
      summary: '2025年2月開設予定の新しい自立援助ホーム「TIES」の準備が順調に進んでいます。',
      content: `
        福岡市南区に開設予定の自立援助ホーム「TIES」の準備が順調に進んでいます。
        「TIES」は「つながり」を意味し、青少年と地域、青少年同士、そして過去・現在・未来を
        つなぐ新しい形の支援を目指しています。

        現在、施設の改修工事と職員の採用・研修を並行して進めており、
        2025年2月の開設に向けて着実に準備を進めています。
        
        TIESでは最新の支援理論を取り入れつつ、一人ひとりの青少年に寄り添った
        丁寧な支援を提供していく予定です。
      `
    },
    {
      id: 2,
      date: '2024-11-20',
      category: '活動報告',
      title: '秋の職員研修を実施しました',
      summary: '全職員を対象とした研修会を開催し、支援技術の向上を図りました。',
      content: `
        11月20日に全職員を対象とした秋の研修会を実施しました。
        今回のテーマは「青少年の心理的支援とコミュニケーション技術」で、
        外部講師をお招きして専門的な研修を行いました。

        研修では、青少年期の心理的特徴や効果的なコミュニケーション方法について
        学び、実際のケースを用いたロールプレイングも実施しました。

        参加した職員からは「日々の支援に活かせる具体的な技術を学べた」
        「他の職員との情報交換も有意義だった」といった感想が寄せられました。
      `
    },
    {
      id: 3,
      date: '2024-10-05',
      title: '令和6年度上半期活動報告書を公開',
      category: '報告書',
      summary: '今年度上半期の活動実績と成果をまとめた報告書を公開いたします。',
      content: `
        令和6年度上半期（4月〜9月）の活動報告書を公開いたします。

        主な実績：
        - 支援青少年数：延べ45名
        - 就労達成者：12名
        - 進学達成者：3名
        - 退所者（自立）：8名

        この半年間も多くの青少年が自立に向けて着実に歩みを進めています。
        皆様のご支援により、充実した支援を提供することができました。
        心より感謝申し上げます。

        詳細な報告書は当法人までお問い合わせください。
      `
    },
    {
      id: 4,
      date: '2024-09-12',
      category: 'イベント',
      title: '地域交流バーベキュー大会を開催',
      summary: '地域の皆様との交流を深めるバーベキュー大会を開催し、多くの方にご参加いただきました。',
      content: `
        9月12日に年次恒例の地域交流バーベキュー大会を開催しました。
        今年も多くの地域の皆様にご参加いただき、青少年たちと楽しい時間を過ごしました。

        青少年たちは準備から片付けまで積極的に参加し、
        地域の方々との自然な交流を通じて、コミュニケーション能力を
        向上させることができました。

        参加者からは「青少年たちの成長を感じることができた」
        「来年もぜひ参加したい」といった温かいお声をいただきました。

        このような地域との連携こそが、青少年の健全な成長につながると
        改めて実感した一日でした。
      `
    },
    {
      id: 5,
      date: '2024-08-01',
      category: 'お知らせ',
      title: '夏季休業のお知らせ',
      summary: '事務局の夏季休業期間についてお知らせいたします。',
      content: `
        平素より当法人の活動にご理解とご協力をいただき、ありがとうございます。

        事務局の夏季休業期間は以下の通りです：
        
        休業期間：2024年8月13日（火）〜 8月16日（金）
        
        なお、各自立援助ホームは通常通り運営しており、
        緊急時の対応は可能です。
        
        ご不便をおかけいたしますが、何卒ご理解のほどよろしくお願いいたします。
        8月19日（月）より通常業務を再開いたします。
      `
    }
  ];

  return (
    <div className="news-page">
      {/* ページヘッダー */}
      <section className="page-header">
        <div className="container">
          <h1>活動報告・お知らせ</h1>
          <p>私たちの活動や最新情報をお伝えします</p>
        </div>
      </section>

      {/* ニュース一覧 */}
      <section className="section">
        <div className="container">
          <div className="news-list">
            {news.map((item) => (
              <article key={item.id} className="news-item">
                <div className="news-header">
                  <div className="news-meta">
                    <span className="news-date">{item.date}</span>
                    <span className={`news-category category-${item.category}`}>
                      {item.category}
                    </span>
                  </div>
                  <h2 className="news-title">{item.title}</h2>
                  <p className="news-summary">{item.summary}</p>
                </div>
                <div className="news-content">
                  {item.content.split('\n').map((paragraph, index) => (
                    paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 年次報告書 */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">年次報告書</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>令和5年度 年次報告書</h3>
              <p>2023年度の活動実績と財務状況をまとめた報告書です。</p>
              <button className="btn btn-secondary">PDFダウンロード</button>
            </div>
            <div className="card">
              <h3>令和4年度 年次報告書</h3>
              <p>2022年度の活動実績と財務状況をまとめた報告書です。</p>
              <button className="btn btn-secondary">PDFダウンロード</button>
            </div>
            <div className="card">
              <h3>令和3年度 年次報告書</h3>
              <p>2021年度の活動実績と財務状況をまとめた報告書です。</p>
              <button className="btn btn-secondary">PDFダウンロード</button>
            </div>
          </div>
        </div>
      </section>

      {/* メディア掲載 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">メディア掲載情報</h2>
          <div className="media-list">
            <div className="media-item">
              <div className="media-date">2024.11.15</div>
              <div className="media-content">
                <h4>西日本新聞</h4>
                <p>「自立援助ホームの役割と現状」特集記事にて当法人の取り組みが紹介されました。</p>
              </div>
            </div>
            <div className="media-item">
              <div className="media-date">2024.09.30</div>
              <div className="media-content">
                <h4>NHK福岡</h4>
                <p>夕方のニュース番組で青少年支援の現場として取材を受けました。</p>
              </div>
            </div>
            <div className="media-item">
              <div className="media-date">2024.07.10</div>
              <div className="media-content">
                <h4>福岡市政だより</h4>
                <p>「地域で支える青少年の自立」をテーマに活動内容が紹介されました。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;