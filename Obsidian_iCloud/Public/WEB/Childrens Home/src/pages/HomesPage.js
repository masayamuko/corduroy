import React from 'react';
import { Link } from 'react-router-dom';

const HomesPage = () => {
  const homes = [
    {
      id: 'kanransya',
      name: 'かんらん舎',
      description: '福岡市として初めての自立援助ホーム。2008年の開設以来、青少年の自立を支援しています。',
      established: '2008年',
      location: '福岡市南区',
      capacity: '[定員数確認中]',
      features: ['福岡市初の自立援助ホーム', '豊富な支援実績', '地域密着型支援'],
      status: '運営中',
      image: '/自立援助ホーム かんらん舎.jpg',
      logo: '/自立援助ホーム かんらん舎 ロゴ.jpg',
      website: 'https://kanransya-fukuoka.jimdofree.com/'
    },
    {
      id: 'yui',
      name: '結ホーム',
      description: '絆を大切にする支援方針で、青少年一人ひとりの成長を丁寧にサポートします。',
      established: '2015年',
      location: '福岡市南区',
      capacity: '[定員数確認中]',
      features: ['絆を重視した支援', '女性専用ホーム', 'きめ細かなケア'],
      status: '運営中',
      image: '/自立援助ホーム 結ホーム.jpg',
      logo: '/自立援助ホーム 結ホーム.png',
      website: 'https://yuihome.jimdofree.com/'
    },
    {
      id: 'leap',
      name: 'LEAP',
      description: '「飛び越える、上昇する」という意味を持つホーム。青少年の可能性を信じて支援します。',
      established: '2019年',
      location: '筑紫野市',
      capacity: '[定員数確認中]',
      features: ['可能性重視の支援', '新しい支援モデル', '個性を活かす環境'],
      status: '運営中',
      image: '/自立援助ホーム LEAP.jpg',
      logo: '/LEAPLOGO.jpg',
      website: 'https://leap-chikushino.jimdofree.com/',
      interview: 'https://smileyflowers.site/leap/'
    },
    {
      id: 'switch',
      name: 'スイッチ',
      description: '心の変化と選択をサポート。HIGH SCHOOL DIPLOMA（高校卒業資格取得）を目指す青年の就学支援に積極的です。',
      established: '2023年',
      location: '太宰府市',
      capacity: '[定員数確認中]',
      features: ['進学支援特化', '学習環境充実', '選択肢の拡大'],
      status: '運営中',
      image: '/自立援助ホーム スイッチ.jpg',
      website: 'https://switch05.jimdofree.com/'
    },
    {
      id: 'ties',
      name: 'TIES',
      description: '新しいつながりを創造するホーム。2025年2月開設予定です。最新の支援理論を取り入れた次世代型ホームとして期待されています。',
      established: '2025年2月予定',
      location: '福岡市南区',
      capacity: '男子6名（予定）',
      features: ['最新の支援理論', '地域連携強化', '新しいつながり創造'],
      status: '開設準備中'
    }
  ];

  return (
    <div className="homes-page">
      {/* ページヘッダー */}
      <section className="page-header">
        <div className="container">
          <h1>自立援助ホーム</h1>
          <p>家庭の事情により家族と暮らせない、児童養護施設等を退所した、<br />そんな15歳から20歳までのユースが生活し、自立に向けた支援を受ける施設です。</p>
        </div>
      </section>


      {/* 自立援助ホームの背景 */}
      <section className="section" style={{ background: '#FFF9F5' }}>
        <div className="container">
          <div className="social-care-background" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title">小規模ホームで育む、若者の「生きる力」</h2>
            
            <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                現在、日本の社会的養護は、大規模施設から<strong>「家庭に近い小規模な環境」</strong>へと大きく転換してます。 一人ひとりの子どもが安定した環境で育ち、きめ細やかな支援を受けることの重要性が認識されてきたためです。
              </p>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                地域に根差した<strong>「もう一つの家庭」</strong>として、若者の自立を支える役割を担うのが私たち自立援助ホームです。
              </p>
            </div>

            <div className="small-scale-features" style={{ marginBottom: '3rem' }}>
              <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div className="feature-card" style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💝</div>
                  <h4>安心できる心理的な居場所</h4>
                  <p>温かい雰囲気の中で、心の安定を図り、未来への土台を築く</p>
                </div>
                <div className="feature-card" style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👥</div>
                  <h4>一人ひとりに寄り添う個別支援</h4>
                  <p>それぞれの若者の個性と夢に合わせた、オーダーメイドの支援計画</p>
                </div>
                <div className="feature-card" style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏠</div>
                  <h4>生活スキルの実践的な習得</h4>
                  <p>料理、掃除、金銭管理など、自立に必要なスキルを日常の中で学び、地域に溶け込んだ生活を通じて社会との接点を自然に増やします</p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                若者の多様なニーズへの対応など、現代の課題に挑戦しながら、子どもたちが未来に希望を持って羽ばたけるよう、温かい支援を提供し続けます。
              </p>
              <Link to="/social-care-evolution" className="btn btn-large">
                詳しく見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ホーム一覧 */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">各ホーム紹介</h2>
          <div className="homes-grid">
            {homes.map((home) => (
              <div key={home.id} className="home-card-detailed">
                <div className="home-status">
                  <span className={`status-badge ${home.status === '運営中' ? 'active' : 'pending'}`}>
                    {home.status}
                  </span>
                </div>
                
                {home.image && (
                  <div className="home-card-image">
                    <img src={home.image} alt={home.name} />
                  </div>
                )}
                
                <div className="home-card-header">
                  {home.logo && <img src={home.logo} alt={`${home.name}ロゴ`} className="home-logo" />}
                  <h3>{home.name}</h3>
                </div>
                
                <p className="home-description">{home.description}</p>
                
                <div className="home-info">
                  <div className="info-item">
                    <strong>設立:</strong> {home.established}
                  </div>
                  <div className="info-item">
                    <strong>所在地:</strong> {home.location}
                  </div>
                  <div className="info-item">
                    <strong>定員:</strong> {home.capacity}
                  </div>
                </div>

                <div className="home-features">
                  <h4>特徴</h4>
                  <ul>
                    {home.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="home-actions">
                  {home.website && (
                    <a href={home.website} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      公式サイト
                    </a>
                  )}
                  {home.interview && (
                    <a href={home.interview} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      インタビュー記事
                    </a>
                  )}
                  <Link to={`/homes/${home.id}`} className="btn">詳細を見る</Link>
                </div>
                
                {!home.image && (
                  <div className="no-image-notice">
                    <p>※写真素材の提供が必要です</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="section-notice">
            <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#666' }}>
              ※定員数等の詳細情報は各法人に確認が必要です。参考サイト: 
              <a href="https://www.npo-homepage.go.jp/npoportal/detail/119300364" target="_blank" rel="noopener noreferrer">
                NPO法人ポータルサイト
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 入居について */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">入居について</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>対象者</h3>
              <ul>
                <li>15歳から20歳までの青少年</li>
                <li>児童養護施設等を退所した方</li>
                <li>家庭の事情により家族と暮らすことができない方</li>
                <li>自立に向けた意欲がある方</li>
                <li>就労または就学している方、またはその意思がある方</li>
              </ul>
            </div>
            <div className="card">
              <h3>入居までの流れ</h3>
              <ol>
                <li>児童相談所等への相談</li>
                <li>状況把握・アセスメント</li>
                <li>ホーム見学・面接</li>
                <li>入居意思の確認</li>
                <li>措置決定</li>
                <li>入居開始</li>
              </ol>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/admission-flow" className="btn">詳しい流れを見る</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomesPage;