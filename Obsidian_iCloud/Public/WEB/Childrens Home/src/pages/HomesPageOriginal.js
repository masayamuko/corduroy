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
      capacity: '男性6名',
      features: ['福岡市初の自立援助ホーム', '豊富な支援実績', '地域密着型支援'],
      status: '運営中'
    },
    {
      id: 'yui',
      name: '結ホーム',
      description: '絆を大切にする支援方針で、青少年一人ひとりの成長を丁寧にサポートします。',
      established: '2015年',
      location: '福岡市南区',
      capacity: '女性6名',
      features: ['絆を重視した支援', '女性専用ホーム', 'きめ細やかなケア'],
      status: '運営中'
    },
    {
      id: 'leap',
      name: 'LEAP',
      description: '「飛び越える、上昇する」という意味を持つホーム。青少年の可能性を信じて支援します。',
      established: '2019年',
      location: '筑紫野市',
      capacity: '男性6名',
      features: ['可能性重視の支援', '新しい支援モデル', '個性を活かす環境'],
      status: '運営中'
    },
    {
      id: 'switch',
      name: 'スイッチ',
      description: '心の変化と選択をサポート。高卒資格取得や進学を目指す青年の就学支援に積極的です。',
      established: '2023年',
      location: '太宰府市',
      capacity: '男性6名',
      features: ['進学支援特化', '学習環境充実', '選択肢の拡大'],
      status: '運営中'
    },
    {
      id: 'ties',
      name: 'TIES',
      description: '新しいつながりを創造するホーム。2025年2月開設予定です。',
      established: '2025年予定',
      location: '福岡市南区',
      capacity: '女性6名',
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
          <p>青少年の自立を支援する5つのホームをご紹介します</p>
        </div>
      </section>

      {/* 自立援助ホームとは */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">自立援助ホームとは</h2>
          <div className="card">
            <p>
              自立援助ホームは、児童養護施設等を退所した青少年や、家庭の事情により家族と暮らすことができない
              15歳から20歳までの青少年が生活し、自立に向けた支援を受けることができる施設です。
            </p>
            <p>
              青少年が安心して生活できる環境を提供し、就労や就学を通じて社会で自立して生活していくための
              力を身につけられるよう、職員が24時間体制でサポートしています。
            </p>
            <div className="features-grid">
              <div className="feature-item">
                <h4>🏠 生活支援</h4>
                <p>安心できる住まいと日常生活のサポート</p>
              </div>
              <div className="feature-item">
                <h4>💼 就労支援</h4>
                <p>就職活動から職場定着まで総合的な支援</p>
              </div>
              <div className="feature-item">
                <h4>📚 就学支援</h4>
                <p>高校や大学等への進学と学習のサポート</p>
              </div>
              <div className="feature-item">
                <h4>🤝 相談支援</h4>
                <p>日常的な相談から将来設計まで幅広い相談</p>
              </div>
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
                <h3>{home.name}</h3>
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
                  <Link to={`/homes/${home.id}`} className="btn">詳細を見る</Link>
                </div>
              </div>
            ))}
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
                <li>お問い合わせ・相談</li>
                <li>面談・ホーム見学</li>
                <li>入居判定会議</li>
                <li>入居手続き</li>
                <li>入居開始</li>
              </ol>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/contact" className="btn">入居相談はこちら</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomesPage;