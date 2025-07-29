import React, { useState } from 'react';

const DonationPage = () => {
  const [donationType, setDonationType] = useState('single');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const presetAmounts = [1000, 3000, 5000, 10000, 30000, 50000];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = amount === 'custom' ? customAmount : amount;
    alert(`寄付のお申し込みありがとうございます。金額: ${finalAmount}円`);
  };

  return (
    <div className="donation-page">
      {/* ヒーローセクション */}
      <section style={{
        background: 'linear-gradient(135deg, #E67E50 0%, #F4A460 50%, #FFDAB9 100%)',
        color: 'white',
        padding: '120px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.1)',
          zIndex: 1
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🤝</div>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: '700', 
              marginBottom: '2rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.2'
            }}>
              あなたの想いが<br />青少年の未来を変える
            </h1>
            <p style={{ 
              fontSize: '1.3rem', 
              marginBottom: '3rem',
              opacity: '0.95',
              lineHeight: '1.7',
              fontWeight: '400'
            }}>
              家庭で暮らせない青少年が、希望を持って自立できるよう<br />
              あなたの温かいご支援をお待ちしています
            </p>
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="#donation-form" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '1.2rem 2.5rem',
                background: 'white',
                color: 'var(--primary-color)',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1.1rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <span style={{ fontSize: '1.3rem' }}>💝</span>
                今すぐ寄付する
              </a>
              <a href="#usage" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '1.2rem 2.5rem',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: '2px solid rgba(255,255,255,0.5)',
                backdropFilter: 'blur(10px)',
                transition: 'background 0.3s ease'
              }}>
                <span style={{ fontSize: '1.3rem' }}>📊</span>
                使い道を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 寄付の必要性 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">なぜ寄付が必要なのか</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>青少年への支援</h3>
              <p>
                自立援助ホームで生活する青少年が安心して成長し、将来への希望を持てるよう、
                様々な支援が必要です。生活用品の提供や教育機会の確保、
                就労支援など、多岐にわたるサポートを行っています。
              </p>
            </div>
            <div className="card">
              <h3>施設の運営</h3>
              <p>
                5つの自立援助ホームを24時間体制で運営するためには、
                職員の人件費や施設の維持費、光熱費など多くの費用が必要です。
                皆様のご支援により、安定した運営を続けることができます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 寄付の使途 */}
      <section id="usage" style={{ 
        background: 'linear-gradient(135deg, #f8fafb 0%, #e8f2f5 100%)', 
        padding: '100px 0' 
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: 'var(--primary-color)', 
              marginBottom: '1rem' 
            }}>
              寄付金の使途
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#666', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
              皆様からの大切なご寄付は、青少年の支援に直接活用されています
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem', 
            maxWidth: '1000px', 
            margin: '0 auto' 
          }}>
            <div style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0',
              position: 'relative'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2rem', 
                margin: '0 auto 1.5rem',
                color: 'white'
              }}>👥</div>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                color: 'var(--primary-color)', 
                marginBottom: '0.5rem' 
              }}>40%</div>
              <h4 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '700', 
                marginBottom: '1rem', 
                color: 'var(--primary-color)' 
              }}>職員人件費</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                専門職員の配置と研修費用<br />
                24時間体制での支援提供
              </p>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2rem', 
                margin: '0 auto 1.5rem',
                color: 'white'
              }}>🏠</div>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                color: '#22c55e', 
                marginBottom: '0.5rem' 
              }}>25%</div>
              <h4 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '700', 
                marginBottom: '1rem', 
                color: '#22c55e' 
              }}>施設運営費</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                光熱費、通信費、設備維持費<br />
                安心安全な生活環境の維持
              </p>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2rem', 
                margin: '0 auto 1.5rem',
                color: 'white'
              }}>🎓</div>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                color: '#d97706', 
                marginBottom: '0.5rem' 
              }}>20%</div>
              <h4 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '700', 
                marginBottom: '1rem', 
                color: '#d97706' 
              }}>青少年支援費</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                生活用品、教育費、就労支援費<br />
                一人ひとりの自立に向けた支援
              </p>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2rem', 
                margin: '0 auto 1.5rem',
                color: 'white'
              }}>📋</div>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                color: '#7c3aed', 
                marginBottom: '0.5rem' 
              }}>15%</div>
              <h4 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '700', 
                marginBottom: '1rem', 
                color: '#7c3aed' 
              }}>管理費</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                法人運営、広報、その他管理費<br />
                透明性の高い運営のために
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 寄付フォーム */}
      <section id="donation-form" style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: 'var(--primary-color)', 
              marginBottom: '1rem' 
            }}>
              寄付のお申し込み
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#666', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
              あなたの温かいご支援が、青少年の未来を支えます
            </p>
          </div>
          
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto', 
            background: 'white', 
            padding: '3rem', 
            borderRadius: '20px', 
            boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
            border: '1px solid #f0f0f0'
          }}>
            <form onSubmit={handleSubmit}>
              {/* 寄付タイプ選択 */}
              <div style={{ marginBottom: '3rem' }}>
                <label style={{ 
                  display: 'block', 
                  fontSize: '1.3rem', 
                  fontWeight: '600', 
                  color: 'var(--primary-color)', 
                  marginBottom: '1.5rem' 
                }}>
                  寄付タイプ
                </label>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <label style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.8rem',
                    padding: '1.2rem 2rem',
                    background: donationType === 'single' ? 'var(--primary-color)' : '#f8f9fa',
                    color: donationType === 'single' ? 'white' : '#333',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: donationType === 'single' ? '2px solid var(--primary-color)' : '2px solid #e9ecef',
                    flex: '1',
                    minWidth: '200px',
                    justifyContent: 'center',
                    fontWeight: '600'
                  }}>
                    <input
                      type="radio"
                      name="donationType"
                      value="single"
                      checked={donationType === 'single'}
                      onChange={(e) => setDonationType(e.target.value)}
                      style={{ margin: 0 }}
                    />
                    <span style={{ fontSize: '1.2rem' }}>💝</span>
                    単発寄付
                  </label>
                  <label style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.8rem',
                    padding: '1.2rem 2rem',
                    background: donationType === 'monthly' ? 'var(--primary-color)' : '#f8f9fa',
                    color: donationType === 'monthly' ? 'white' : '#333',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: donationType === 'monthly' ? '2px solid var(--primary-color)' : '2px solid #e9ecef',
                    flex: '1',
                    minWidth: '200px',
                    justifyContent: 'center',
                    fontWeight: '600'
                  }}>
                    <input
                      type="radio"
                      name="donationType"
                      value="monthly"
                      checked={donationType === 'monthly'}
                      onChange={(e) => setDonationType(e.target.value)}
                      style={{ margin: 0 }}
                    />
                    <span style={{ fontSize: '1.2rem' }}>🔄</span>
                    継続寄付（月額）
                  </label>
                </div>
              </div>

              {/* 金額選択 */}
              <div style={{ marginBottom: '3rem' }}>
                <label style={{ 
                  display: 'block', 
                  fontSize: '1.3rem', 
                  fontWeight: '600', 
                  color: 'var(--primary-color)', 
                  marginBottom: '1.5rem' 
                }}>
                  寄付金額
                </label>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
                  gap: '1rem', 
                  marginBottom: '1.5rem' 
                }}>
                  {presetAmounts.map((presetAmount) => (
                    <div
                      key={presetAmount}
                      style={{
                        padding: '1.5rem 1rem',
                        background: amount === presetAmount ? 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)' : 'white',
                        color: amount === presetAmount ? 'white' : 'var(--primary-color)',
                        border: amount === presetAmount ? '2px solid var(--primary-color)' : '2px solid #e9ecef',
                        borderRadius: '12px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontWeight: '700',
                        fontSize: '1.1rem',
                        boxShadow: amount === presetAmount ? '0 4px 15px rgba(230, 126, 80, 0.3)' : '0 2px 8px rgba(0,0,0,0.05)'
                      }}
                      onClick={() => setAmount(presetAmount)}
                    >
                      ¥{presetAmount.toLocaleString()}
                    </div>
                  ))}
                  <div
                    style={{
                      padding: '1.5rem 1rem',
                      background: amount === 'custom' ? 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)' : 'white',
                      color: amount === 'custom' ? 'white' : 'var(--primary-color)',
                      border: amount === 'custom' ? '2px solid var(--primary-color)' : '2px solid #e9ecef',
                      borderRadius: '12px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      boxShadow: amount === 'custom' ? '0 4px 15px rgba(230, 126, 80, 0.3)' : '0 2px 8px rgba(0,0,0,0.05)'
                    }}
                    onClick={() => setAmount('custom')}
                  >
                    その他
                  </div>
                </div>
                {amount === 'custom' && (
                  <input
                    type="number"
                    placeholder="金額を入力してください"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    style={{ 
                      width: '100%',
                      padding: '1.2rem',
                      border: '2px solid #e9ecef',
                      borderRadius: '12px',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      textAlign: 'center'
                    }}
                  />
                )}
              </div>

              {/* 寄付者情報 */}
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: '600', 
                  color: 'var(--primary-color)', 
                  marginBottom: '1.5rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '2px solid #f0f0f0'
                }}>
                  寄付者情報
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label htmlFor="name" style={{ 
                      display: 'block', 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      color: '#333', 
                      marginBottom: '0.5rem' 
                    }}>
                      お名前 <span style={{ color: '#e74c3c' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={donorInfo.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ 
                      display: 'block', 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      color: '#333', 
                      marginBottom: '0.5rem' 
                    }}>
                      メールアドレス <span style={{ color: '#e74c3c' }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={donorInfo.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label htmlFor="phone" style={{ 
                      display: 'block', 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      color: '#333', 
                      marginBottom: '0.5rem' 
                    }}>
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={donorInfo.phone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="address" style={{ 
                      display: 'block', 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      color: '#333', 
                      marginBottom: '0.5rem' 
                    }}>
                      住所（領収書送付先）
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={donorInfo.address}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" style={{ 
                    display: 'block', 
                    fontSize: '1rem', 
                    fontWeight: '600', 
                    color: '#333', 
                    marginBottom: '0.5rem' 
                  }}>
                    応援メッセージ（任意）
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={donorInfo.message}
                    onChange={handleInputChange}
                    placeholder="青少年への応援メッセージをお聞かせください"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e9ecef',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none',
                      minHeight: '120px',
                      resize: 'vertical'
                    }}
                  />
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <button 
                  type="submit" 
                  style={{
                    padding: '1.5rem 3rem',
                    background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: '0 8px 25px rgba(230, 126, 80, 0.3)',
                    minWidth: '200px'
                  }}
                >
                  🤝 寄付を申し込む
                </button>
                <p style={{ 
                  marginTop: '1rem', 
                  fontSize: '0.9rem', 
                  color: '#666',
                  textAlign: 'center'
                }}>
                  ※ 送信後、担当者よりご連絡いたします
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>


      {/* 支援者の声 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">支援者の声</h2>
          <div className="grid grid-2">
            <div className="card">
              <h4>企業支援者様</h4>
              <p>
                「社会貢献活動の一環として継続的に支援させていただいています。
                青少年の自立支援という大切な活動に参加できることを嬉しく思います。
                定期的に活動報告をいただけるので、支援の効果を実感できます。」
              </p>
            </div>
            <div className="card">
              <h4>個人支援者様</h4>
              <p>
                「月額寄付で支援しています。少額でも継続することで、
                青少年の未来に貢献できていると感じています。
                職員の皆さんの熱意が伝わってくる活動報告がとても励みになります。」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* その他の支援方法 */}
      <section style={{ 
        background: 'linear-gradient(135deg, #f8fafb 0%, #e8f2f5 100%)', 
        padding: '100px 0' 
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: 'var(--primary-color)', 
              marginBottom: '1rem' 
            }}>
              その他の支援方法
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#666', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
              寄付以外にも、様々な形で青少年の支援にご参加いただけます
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem', 
            maxWidth: '1200px', 
            margin: '0 auto' 
          }}>
            <div style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2.5rem', 
                margin: '0 auto 1.5rem',
                color: 'white'
              }}>🙋‍♀️</div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                marginBottom: '1rem', 
                color: 'var(--primary-color)' 
              }}>ボランティア</h3>
              <p style={{ 
                color: '#666', 
                lineHeight: '1.7', 
                marginBottom: '1.5rem' 
              }}>
                イベントのお手伝いや専門スキルを活かしたボランティア活動にご参加いただけます。
              </p>
              <div style={{ 
                padding: '1rem', 
                background: '#f8f9fa', 
                borderRadius: '8px', 
                fontSize: '0.9rem', 
                color: '#666' 
              }}>
                <strong>例：</strong> イベント運営、学習支援、専門技術指導
              </div>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2.5rem', 
                margin: '0 auto 1.5rem',
                color: 'white'
              }}>📦</div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                marginBottom: '1rem', 
                color: 'var(--primary-color)' 
              }}>現物寄付</h3>
              <p style={{ 
                color: '#666', 
                lineHeight: '1.7', 
                marginBottom: '1.5rem' 
              }}>
                生活用品や学習用品など、青少年の生活に必要な物品のご寄付もお受けしています。
              </p>
              <div style={{ 
                padding: '1rem', 
                background: '#f8f9fa', 
                borderRadius: '8px', 
                fontSize: '0.9rem', 
                color: '#666' 
              }}>
                <strong>例：</strong> 文房具、衣類、家電製品、図書
              </div>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2.5rem', 
                margin: '0 auto 1.5rem',
                color: 'white'
              }}>🏢</div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                marginBottom: '1rem', 
                color: 'var(--primary-color)' 
              }}>企業連携</h3>
              <p style={{ 
                color: '#666', 
                lineHeight: '1.7', 
                marginBottom: '1.5rem' 
              }}>
                就労支援や職業体験の機会提供など、企業の皆様との連携も大歓迎です。
              </p>
              <div style={{ 
                padding: '1rem', 
                background: '#f8f9fa', 
                borderRadius: '8px', 
                fontSize: '0.9rem', 
                color: '#666' 
              }}>
                <strong>例：</strong> インターンシップ、職場体験、研修機会提供
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#666', 
              marginBottom: '2rem' 
            }}>
              詳しくはお気軽にお問い合わせください
            </p>
            <a href="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '1.2rem 2.5rem',
              background: 'white',
              color: 'var(--primary-color)',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: '1.1rem',
              border: '2px solid var(--primary-color)',
              boxShadow: '0 6px 20px rgba(230, 126, 80, 0.15)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <span style={{ fontSize: '1.3rem' }}>📞</span>
              お問い合わせ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;