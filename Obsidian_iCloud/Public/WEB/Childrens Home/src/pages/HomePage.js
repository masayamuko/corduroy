import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const homes = [
    {
      id: 'kanransya',
      name: 'かんらん舎',
      description: '福岡市として初めての自立援助ホーム。2008年の開設以来、青少年の自立を支援しています。',
      established: '2008年',
      location: '福岡市南区',
      image: '/自立援助ホーム かんらん舎.jpg',
      logo: '/自立援助ホーム かんらん舎 ロゴ.jpg',
      url: 'https://kanransya-fukuoka.jimdofree.com/',
      feature: '福岡市初のホーム'
    },
    {
      id: 'yui',
      name: '結ホーム',
      description: '絆を大切にする支援方針で、青少年一人ひとりの成長を丁寧にサポートします。',
      established: '2015年',
      location: '福岡市南区',
      image: '/自立援助ホーム 結ホーム.jpg',
      logo: '/自立援助ホーム 結ホーム.png',
      url: 'https://yuihome.jimdofree.com/',
      feature: '絆を大切にする'
    },
    {
      id: 'leap',
      name: 'LEAP',
      description: '「飛び越える、上昇する」という意味を持つホーム。青少年の可能性を信じて支援します。',
      established: '2019年',
      location: '筑紫野市',
      image: '/自立援助ホーム LEAP.jpg',
      logo: '/LEAPLOGO.jpg',
      url: 'https://leap-chikushino.jimdofree.com/',
      feature: '可能性を重視'
    },
    {
      id: 'switch',
      name: 'スイッチ',
      description: 'HIGH SCHOOL DIPLOMA（高校卒業資格取得）を目指す青年の就学支援に積極的に取り組みます。',
      established: '2023年',
      location: '太宰府市',
      image: '/自立援助ホーム スイッチ.jpg',
      logo: null,
      url: 'https://switch05.jimdofree.com/',
      feature: '進学支援特化'
    },
    {
      id: 'ties',
      name: 'TIES',
      description: '2025年2月開設予定の新しい自立援助ホーム。最新の支援理論を取り入れた次世代型ホームです。',
      established: '2025年（開設予定）',
      location: '福岡市南区',
      image: null,
      logo: null,
      url: null,
      feature: '2025年開設予定（次世代型ホーム）'
    }
  ];

  const stats = [
    { number: '16', unit: '年', label: '運営実績', description: '2008年設立以来の実績' },
    { number: '150', unit: '人', label: '支援実績', description: 'これまでに関わったユース総数' },
    { number: '5', unit: '施設', label: '自立援助ホーム', description: '福岡市及び福岡県より委託運営' },
    { number: '30', unit: '人', label: '定員数', description: '各ホーム合計定員数' }
  ];

  return (
    <div className="homepage">
      {/* ヒーローセクション */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <h1>青少年の自立支援を通じて<br />希望ある未来を創造します</h1>
          </div>
        </div>
      </section>

      {/* 法人概要セクション */}
      <section className="overview section">
        <div className="container">
          <div className="overview-content">
            <div className="overview-main">
              <p className="overview-description">
                2008年設立以来、様々な理由で家庭で暮らせない青少年の自立のために活動しています。
                現在、福岡県内で5つの自立援助ホームを運営。社会的養護を必要とする青少年の育ちと支援に尽力しています。
              </p>
              <div className="stats-horizontal">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item-horizontal">
                    <div className="stat-number-group">
                      <span className="stat-number">{stat.number}</span>
                      <span className="stat-unit">{stat.unit}</span>
                    </div>
                    <div className="stat-content">
                      <span className="stat-label">{stat.label}</span>
                      <span className="stat-description">{stat.description}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="overview-actions">
                <Link to="/contact" className="btn btn-outline">お問い合わせ</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 運営ホーム紹介 */}
      <section className="homes-visual section">
        <div className="container">
          <h2 className="section-title">運営ホーム</h2>
          <p className="section-subtitle">福岡県内で5つの自立援助ホームを運営しています</p>
          <div className="homes-visual-grid">
            {homes.map((home) => (
              <div key={home.id} className="home-visual-card">
                <div className="home-visual-content">
                  {home.image ? (
                    <div className="home-visual-image">
                      <img src={home.image} alt={home.name} />
                      <div className="home-visual-overlay">
                        <h3>{home.name}</h3>
                        <p>{home.location}</p>
                        <span className="home-feature-tag">{home.feature}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="home-visual-placeholder">
                      {home.logo ? (
                        <img src={home.logo} alt={`${home.name}ロゴ`} className="home-visual-logo-only" />
                      ) : (
                        <div className="home-visual-icon">🏠</div>
                      )}
                      <h3>{home.name}</h3>
                      <p>{home.location}</p>
                      <span className="home-feature-tag">{home.feature}</span>
                      <div className="placeholder-notice">※写真準備中</div>
                    </div>
                  )}
                  <div className="home-visual-actions">
                    {home.url && home.logo && (
                      <a href={home.url} target="_blank" rel="noopener noreferrer" className="home-logo-link">
                        <img src={home.logo} alt={`${home.name}ロゴ`} className="home-logo-button" />
                      </a>
                    )}
                    <Link to={`/homes/${home.id}`} className="btn btn-sm btn-outline">詳細</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="homes-action">
            <Link to="/homes" className="btn btn-large">すべてのホームを見る</Link>
          </div>
        </div>
      </section>

      {/* 沿革 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">沿革</h2>
          <div className="timeline" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="timeline-item">
              <div className="timeline-year">2008年</div>
              <div className="timeline-content">
                <h3>法人設立・かんらん舎開設</h3>
                <p>特定非営利活動法人として設立。福岡市初の自立援助ホーム「かんらん舎」を開設。</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2015年</div>
              <div className="timeline-content">
                <h3>結ホーム開設</h3>
                <p>福岡市2番目の自立援助ホーム「結ホーム」を開設。絆を大切にする支援を開始。</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2019年</div>
              <div className="timeline-content">
                <h3>LEAP開設</h3>
                <p>筑紫野市に「LEAP」を開設。飛躍をテーマとした新しい支援モデルを導入。</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2023年</div>
              <div className="timeline-content">
                <h3>スイッチ開設</h3>
                <p>太宰府市に「スイッチ」を開設。進学支援に特化した新たな取り組みを開始。</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2025年</div>
              <div className="timeline-content">
                <h3>TIES開設予定</h3>
                <p>福岡市南区に5つ目のホーム「TIES」開設予定。新しいつながりを創造。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 法人概要 */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #f8fafb 0%, #e8f2f5 100%)', padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary-color)', textAlign: 'center', marginBottom: '3rem', position: 'relative' }}>
            法人概要
            <div style={{ width: '60px', height: '4px', background: 'var(--accent-color)', margin: '1rem auto', borderRadius: '2px' }}></div>
          </h2>
          
          <div className="organization-summary" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* 基本情報カード */}
            <div className="basic-info-card" style={{ 
              background: 'white', 
              padding: '3rem', 
              borderRadius: '16px', 
              marginBottom: '2.5rem', 
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)', 
              border: '1px solid #f0f0f0',
              position: 'relative'
            }}>
              
              <div className="info-summary" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                <div className="info-main-card" style={{ 
                  padding: '2rem', 
                  borderRadius: '12px', 
                  background: 'linear-gradient(135deg, #fff9f5 0%, #fefefe 100%)', 
                  border: '1px solid #e0e0e0',
                  position: 'relative'
                }}>
                  <h4 style={{ color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 1.5rem 0', textAlign: 'center' }}>
                    基本情報
                  </h4>
                  <div style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                    <p style={{ margin: '0 0 0.8rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '6px', height: '6px', background: 'var(--primary-color)', borderRadius: '50%' }}></span>
                      <strong style={{ color: 'var(--primary-color)', minWidth: '80px' }}>法人名：</strong>
                      <span>特定非営利活動法人 青少年の自立を支える福岡の会</span>
                    </p>
                    <p style={{ margin: '0 0 0.8rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '6px', height: '6px', background: 'var(--primary-color)', borderRadius: '50%' }}></span>
                      <strong style={{ color: 'var(--primary-color)', minWidth: '80px' }}>設立：</strong>
                      <span>NPO法人（2008年設立・16年の運営実績）</span>
                    </p>
                    <p style={{ margin: '0 0 0.8rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '6px', height: '6px', background: 'var(--primary-color)', borderRadius: '50%' }}></span>
                      <strong style={{ color: 'var(--primary-color)', minWidth: '80px' }}>事務所：</strong>
                      <span>〒814-0142 福岡市城南区梅林1丁目1番21号</span>
                    </p>
                    <p style={{ margin: '0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '6px', height: '6px', background: 'var(--primary-color)', borderRadius: '50%' }}></span>
                      <strong style={{ color: 'var(--primary-color)', minWidth: '80px' }}>定員：</strong>
                      <span><span style={{ color: '#000', fontSize: '1.3rem', fontWeight: '700' }}>30名</span>（自立援助ホーム5施設計）</span>
                    </p>
                  </div>
                </div>

                <div className="info-sub-card" style={{ 
                  padding: '2rem', 
                  borderRadius: '12px', 
                  background: 'linear-gradient(135deg, #f0f8ff 0%, #fefefe 100%)', 
                  border: '1px solid #e0e0e0',
                  position: 'relative'
                }}>
                  <h4 style={{ color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 1.5rem 0', textAlign: 'center' }}>
                    認可・活動エリア
                  </h4>
                  <div style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                    <p style={{ margin: '0 0 0.8rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '6px', height: '6px', background: 'var(--accent-color)', borderRadius: '50%' }}></span>
                      <strong style={{ color: 'var(--primary-color)', minWidth: '80px' }}>活動エリア：</strong>
                      <span><span style={{ color: '#000', fontWeight: '600' }}>福岡県全域</span></span>
                    </p>
                    <p style={{ margin: '0 0 0.8rem 0', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ width: '6px', height: '6px', background: 'var(--accent-color)', borderRadius: '50%', marginTop: '0.5rem' }}></span>
                      <strong style={{ color: 'var(--primary-color)', minWidth: '80px' }}>施設設置：</strong>
                      <span>福岡市・筑紫野市・太宰府市</span>
                    </p>
                    <p style={{ margin: '0 0 0.8rem 0', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ width: '6px', height: '6px', background: 'var(--accent-color)', borderRadius: '50%', marginTop: '0.5rem' }}></span>
                      <strong style={{ color: 'var(--primary-color)', minWidth: '80px' }}>運営許可：</strong>
                      <span>福岡県・福岡市<br /><span style={{ color: '#000', fontWeight: '600' }}>第二種社会福祉事業認可</span></span>
                    </p>
                    <div style={{ 
                      marginTop: '1.5rem', 
                      padding: '1rem', 
                      background: '#f8f9fa', 
                      borderRadius: '8px', 
                      borderLeft: '4px solid var(--accent-color)',
                      fontSize: '0.9rem', 
                      lineHeight: '1.6'
                    }}>
                      <p style={{ margin: '0', color: '#555' }}>
                        <strong style={{ color: 'var(--primary-color)' }}>根拠法令：</strong>児童福祉法第6条の3第4項<br />
                        <strong style={{ color: 'var(--primary-color)' }}>対象年齢：</strong>15歳～20歳（措置延長により22歳まで可能）<br />
                        <strong style={{ color: 'var(--primary-color)' }}>措置権者：</strong>福岡県・福岡市
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 青少年自立支援サービス */}
            <div className="services-card" style={{ 
              background: 'white', 
              padding: '3rem', 
              borderRadius: '16px', 
              marginBottom: '2.5rem', 
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)', 
              border: '1px solid #f0f0f0',
              position: 'relative'
            }}>
              <div className="services-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h3 style={{ 
                  color: 'var(--primary-color)', 
                  margin: '0', 
                  fontSize: '1.8rem', 
                  fontWeight: '700', 
                  letterSpacing: '0.02em',
                  position: 'relative'
                }}>
                  青少年自立支援サービス
                  <span style={{ 
                    position: 'absolute', 
                    bottom: '-8px', 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    width: '40px', 
                    height: '3px', 
                    background: 'var(--accent-color)', 
                    borderRadius: '2px' 
                  }}></span>
                </h3>
              </div>
              
              <div className="service-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                <div className="service-item" style={{ 
                  padding: '2rem 1.5rem', 
                  background: 'white', 
                  borderRadius: '12px',
                  border: '1px solid #e0e0e0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  position: 'relative',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏠</div>
                  <h5 style={{ color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 1rem 0' }}>生活支援</h5>
                  <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.6', color: '#666' }}>
                    日常生活指導・金銭管理<br />
                    健康管理・居住環境整備
                  </p>
                </div>
                
                <div className="service-item" style={{ 
                  padding: '2rem 1.5rem', 
                  background: 'white', 
                  borderRadius: '12px',
                  border: '1px solid #e0e0e0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎓</div>
                  <h5 style={{ color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 1rem 0' }}>就学・就労支援</h5>
                  <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.6', color: '#666' }}>
                    高校進学・大学進学・通信制高校<br />
                    職業紹介・就労準備・職場定着・キャリア形成
                  </p>
                </div>
                
                <div className="service-item" style={{ 
                  padding: '2rem 1.5rem', 
                  background: 'white', 
                  borderRadius: '12px',
                  border: '1px solid #e0e0e0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
                  <h5 style={{ color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 1rem 0' }}>アフターケア</h5>
                  <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.6', color: '#666' }}>
                    退所後継続支援・緊急時対応<br />
                    相談支援・定期面談
                  </p>
                </div>
              </div>

              <div className="research-development">
                <div style={{ 
                  background: '#f8f9fa', 
                  padding: '1.5rem 2rem', 
                  borderRadius: '12px', 
                  marginBottom: '2rem',
                  textAlign: 'center',
                  border: '1px solid #e0e0e0'
                }}>
                  <h4 style={{ margin: '0', fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-color)', letterSpacing: '0.05em' }}>
                    社会的養護システム研究開発事業
                  </h4>
                </div>
                
                <div className="research-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                  <div style={{ 
                    padding: '2rem', 
                    background: 'white', 
                    borderRadius: '12px',
                    border: '1px solid #e0e0e0',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}>
                    <h5 style={{ color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>👥</span>
                      人材育成
                    </h5>
                    <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.7', color: '#666' }}>
                      職員研修体系構築・新人研修プログラム・継続研修・スーパービジョン体制・外部研修参加支援
                    </p>
                  </div>
                  
                  <div style={{ 
                    padding: '2rem', 
                    background: 'white', 
                    borderRadius: '12px',
                    border: '1px solid #e0e0e0',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}>
                    <h5 style={{ color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>🌐</span>
                      地域連携
                    </h5>
                    <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.7', color: '#666' }}>
                      児童相談所連携・学校連携・医療機関連携・ハローワーク連携・地域ボランティア活用・社会資源開発
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 認可・連携情報 */}
            <div className="certification-card" style={{ 
              background: 'linear-gradient(135deg, #e8f4f8 0%, #f0faff 100%)', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              border: '1px solid #b8daed',
              position: 'relative'
            }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                <div>
                  <h4 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem 0' }}>
                    認可・監督・連携機関
                  </h4>
                  <div style={{ fontSize: '1rem', fontWeight: '600', lineHeight: '2' }}>
                    <p style={{ margin: '0 0 0.8rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '6px', height: '6px', background: 'var(--primary-color)', borderRadius: '50%' }}></span>
                      <strong style={{ color: 'var(--primary-color)' }}>認可機関：</strong>
                      <span>福岡県知事・福岡市長認可</span>
                    </p>
                    <p style={{ margin: '0 0 0.8rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '6px', height: '6px', background: 'var(--primary-color)', borderRadius: '50%' }}></span>
                      <strong style={{ color: 'var(--primary-color)' }}>監督機関：</strong>
                      <span>福岡県・福岡市 子ども家庭支援課</span>
                    </p>
                    <p style={{ margin: '0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '6px', height: '6px', background: 'var(--primary-color)', borderRadius: '50%' }}></span>
                      <strong style={{ color: 'var(--primary-color)' }}>連携機関：</strong>
                      <span>中央児童相談所・福岡市こども総合相談センター</span>
                    </p>
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <a href="https://www.npo-homepage.go.jp/npoportal/detail/119300364" target="_blank" rel="noopener noreferrer" style={{ 
                    display: 'inline-block', 
                    padding: '1.2rem 2rem', 
                    background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)', 
                    color: 'white', 
                    textDecoration: 'none', 
                    borderRadius: '12px', 
                    fontWeight: '700', 
                    fontSize: '1rem',
                    boxShadow: '0 4px 15px rgba(230, 126, 80, 0.3)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📄</div>
                    NPO法人ポータルサイト<br />
                    <span style={{ fontSize: '0.9rem', opacity: '0.9' }}>詳細情報を確認</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section style={{ 
        background: 'linear-gradient(135deg, #fff 0%, #f8fafb 100%)', 
        padding: '100px 0',
        marginTop: '40px',
        position: 'relative'
      }}>
        
        <div className="container">
          <div style={{ 
            background: 'white', 
            padding: '4rem 3rem', 
            borderRadius: '20px', 
            boxShadow: '0 12px 40px rgba(0,0,0,0.1)', 
            border: '1px solid #f0f0f0',
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative'
          }}>
            
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🤝</div>
            
            <h2 style={{ 
              color: 'var(--primary-color)', 
              fontSize: '2.2rem', 
              fontWeight: '700', 
              margin: '0 0 2rem 0',
              lineHeight: '1.3'
            }}>
              私たちの活動を支援してください
            </h2>
            
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8', 
              color: '#555', 
              margin: '0 0 3rem 0',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              青少年の自立を支援するため、様々な形でのご支援をお待ちしています。<br />
              あなたのご支援が、青少年の未来を変える力になります。
            </p>
            
            <div style={{ 
              display: 'flex', 
              gap: '2rem', 
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <Link to="/donation" style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '1.2rem 2.5rem', 
                background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '12px', 
                fontWeight: '700', 
                fontSize: '1.1rem',
                boxShadow: '0 6px 20px rgba(230, 126, 80, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                minWidth: '200px',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.3rem' }}>💝</span>
                寄付で支援
              </Link>
              
              <Link to="/jobs" style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '1.2rem 2.5rem', 
                background: 'white', 
                color: 'var(--primary-color)', 
                textDecoration: 'none', 
                borderRadius: '12px', 
                fontWeight: '700', 
                fontSize: '1.1rem',
                border: '2px solid var(--primary-color)',
                boxShadow: '0 6px 20px rgba(230, 126, 80, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
                minWidth: '200px',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.3rem' }}>👥</span>
                職員として参加
              </Link>
            </div>
            
            <div style={{ 
              marginTop: '3rem', 
              padding: '1.5rem', 
              background: '#f8f9fa', 
              borderRadius: '12px',
              border: '1px solid #e9ecef'
            }}>
              <p style={{ 
                margin: '0', 
                fontSize: '0.95rem', 
                color: '#666',
                lineHeight: '1.6'
              }}>
                <strong style={{ color: 'var(--primary-color)' }}>お問い合わせ：</strong>
                その他のご支援方法についても、お気軽にお問い合わせください。<br />
                物品寄付・ボランティア・企業連携など、様々な形での支援を受け付けています。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;