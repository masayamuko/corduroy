import React, { useState } from 'react';

const JobsPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: '青少年の生活支援相談員',
      type: '正職員',
      location: 'スイッチ（太宰府市通古賀3-13-6 2F）',
      salary: '月給 200,000円以上',
      annualSalary: '年収 300万円〜350万円',
      description: '15〜20歳の青少年が暮らす自立援助ホームで、彼らの日常生活をサポートし、自立に向けた支援を行います。宿題を一緒にしたり、料理を作ったり、仕事探しを手伝うなど、生活全般のサポートが主な仕事です。',
      features: ['未経験OK', '完全週休2日制', '残業なし', '賞与年2回'],
      image: '/自立援助ホーム スイッチ.jpg',
      requirements: [
        '以下のいずれかの資格をお持ちの方',
        '・社会福祉士、精神保健福祉士',
        '・保育士、幼稚園教諭',
        '・小学校・中学校・高等学校教員免許',
        'または社会福祉施設で2年以上の実務経験がある方',
        '普通自動車運転免許（AT限定可）をお持ちの方優遇'
      ],
      benefits: [
        '基本給 200,000円以上',
        '処遇改善手当 20,000円/月',
        '資格手当 5,000円/月（社会福祉士等の資格保有者）',
        '家族手当（配偶者9,000円、18歳未満の子11,500円）',
        '住宅手当 最大27,000円',
        '交通費全額支給',
        '賞与年2回',
        '各種社会保険完備',
        '退職金制度あり'
      ],
      workStyle: [
        '勤務時間: 7:30〜22:00の間でシフト制（実働8時間）',
        '早出: 7:30〜16:30',
        '日勤: 9:00〜18:00',
        '遅出: 13:00〜22:00',
        '宿直あり（シフトによる）',
        '休日: 完全週休2日制',
        '残業: なし',
        '車通勤可（無料駐車場あり）'
      ]
    },
    {
      id: 2,
      title: '青少年の生活支援相談員',
      type: '正職員',
      location: 'TIES（福岡市南区若久4丁目33番1）',
      salary: '月給 200,000円以上',
      annualSalary: '年収 300万円〜350万円',
      description: '2025年2月開設予定の新しい自立援助ホーム「TIES」での勤務です。15〜20歳の青少年の生活支援を通じて、彼らの自立をサポートします。新しい施設で一緒にホームを作り上げていく仲間を募集しています。',
      features: ['新規開設', '未経験OK', '完全週休2日制', '残業なし'],
      image: null,
      requirements: [
        '以下のいずれかの資格をお持ちの方',
        '・社会福祉士、精神保健福祉士',
        '・保育士、幼稚園教諭',
        '・小学校・中学校・高等学校教員免許',
        'または社会福祉施設で2年以上の実務経験がある方',
        '※試用期間2ヶ月（日給8,500円、契約社員）'
      ],
      benefits: [
        '基本給 200,000円以上',
        '処遇改善手当 20,000円/月',
        '資格手当 5,000円/月（社会福祉士等の資格保有者）',
        '家族手当（配偶者9,000円、18歳未満の子11,500円）',
        '住宅手当 最大27,000円',
        '交通費全額支給',
        '賞与年2回',
        '各種社会保険完備',
        '退職金制度あり'
      ],
      workStyle: [
        '勤務時間: 7:30〜22:00の間でシフト制（実働8時間）',
        '早出: 7:30〜16:30',
        '日勤: 9:00〜18:00',
        '遅出: 13:00〜22:00',
        '宿直あり（シフトによる）',
        '休日: 完全週休2日制',
        '残業: なし',
        '車通勤可'
      ]
    }
  ];

  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    motivation: '',
    file: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setApplicationData(prev => ({
      ...prev,
      file: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('応募ありがとうございます。担当者より後日ご連絡いたします。');
  };

  return (
    <div className="jobs-page">
      {/* ページヘッダー */}
      <section className="page-header job-hero">
        <div className="container">
          <h1>私たちと一緒に<br />青少年の未来を支えませんか</h1>
          <p>「子どもたちが自ら将来の夢や希望をもてるように」<br />何らかの事情で、家庭や学校での居場所をなくした青少年（15～20歳）に<br />安心して生活できる場を提供し、自立を支援するお仕事です。</p>
          <div className="job-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">✨</span>
              <span>未経験歓迎</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">📚</span>
              <span>研修制度充実</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🌟</span>
              <span>やりがいのある仕事</span>
            </div>
          </div>
        </div>
      </section>

      {/* 私たちの仕事について */}
      <section className="section" style={{ background: '#FFF9F5' }}>
        <div className="container">
          <h2 className="section-title">ある日の、私たちのストーリー</h2>
          
          <div className="about-work-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="work-intro" style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
                ＼5人の青少年と、8人のスタッフの日常／
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                朝7時。「おはよう」の声もあれば、気だるそうに起きてくる子も。<br />
                15歳から20歳まで、各ホームに平均5人の青少年たちが暮らしています。<br />
                学校へ急ぐ子、深夜逆転を少しずつ直そうとしている子、バイトの準備をする子。<br />
                4人の常勤職員と4人の宿直専門スタッフが、それぞれのペースを見守ります。
              </p>
            </div>

            <div className="work-details" style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
                ＜決まりはない。あるのは「見守る」こと＞
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                私たちの仕事に、完璧なマニュアルはありません。<br />
                15歳から20歳、思春期真っ只中。素直じゃない日もあります。<br />
                でも、大切なのは彼らの「やりたい」が生まれる瞬間を待つこと。<br />
                時に悩み、時に一緒に考えながら、<br />
                料理の作り方、お金の使い方、人との関わり方を、少しずつ伝えていきます。
              </p>

              <div className="support-examples" style={{ background: 'var(--white)', padding: '2.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '2rem', fontSize: '1.3rem', textAlign: 'center' }}>◇ ある日の出来事 ◇</h4>
                <div className="story-list" style={{ fontSize: '1.05rem', lineHeight: '2' }}>
                  <div className="story-item" style={{ marginBottom: '2.5rem' }}>
                    <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '0.5rem' }}>夕方5時「宿題、ちょっと見てくれる？」</p>
                    <p style={{ paddingLeft: '1rem' }}>
                      17歳のAくん、めずらしく自分から声をかけてきました。<br />
                      「この問題、マジでわからん...」イライラしながらプリントを見せてきます。<br />
                      一緒にテーブルに向かい、ゆっくりと解き方を確認。<br />
                      30分後、「あ、わかった」小さくつぶやく声が聞こえました。
                    </p>
                  </div>
                  
                  <div className="story-item" style={{ marginBottom: '2.5rem' }}>
                    <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '0.5rem' }}>週末の午後「カレー作るから、手伝って」</p>
                    <p style={{ paddingLeft: '1rem' }}>
                      19歳のBくん、最近料理にハマっています。<br />
                      一緒にスーパーへ。「この肉高くない？」「でも美味しそうだし...」<br />
                      予算と相談しながら買い物するのも、大切な学びの時間。<br />
                      失敗して焦げちゃったけど、「次はもっとうまく作る」と言ってました。
                    </p>
                  </div>
                  
                  <div className="story-item" style={{ marginBottom: '2.5rem' }}>
                    <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '0.5rem' }}>深夜2時「眠れないんだけど...」</p>
                    <p style={{ paddingLeft: '1rem' }}>
                      18歳のCくん、また昼夜逆転してしまいました。<br />
                      「朝起きるの無理...でもバイト行かなきゃ」葛藤している様子。<br />
                      一緒にお茶を飲みながら、少しずつ生活リズムを戻す計画を立てます。<br />
                      完璧じゃなくていい。一歩ずつ、彼のペースで。
                    </p>
                  </div>
                  
                  <div className="story-item">
                    <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '0.5rem' }}>月曜日の夜「バイト、もう辞めたい...」</p>
                    <p style={{ paddingLeft: '1rem' }}>
                      19歳のDくん、コンビニバイトから帰ってきて、ため息。<br />
                      「店長がめっちゃ怒るんよ...俺、向いてないのかな」<br />
                      話を聞くと、レジ打ちのミスで怒られたとのこと。<br />
                      「でも先月より早くなってるよね」と伝えると、「そうかな...」と少し表情が和らぎました。<br />
                      ほとんどの子がバイトしながら、社会との接点を少しずつ広げています。
                    </p>
                  </div>
                </div>
                <p style={{ marginTop: '2.5rem', fontSize: '1rem', color: '#666', textAlign: 'center', fontStyle: 'italic' }}>
                  各ホーム4人の常勤職員と4人の宿直専門スタッフが<br />
                  24時間365日、青少年たちの生活を支えています。
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 職場紹介 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">働きがいのある職場</h2>
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3>やりがいのある仕事</h3>
              <p>青少年の成長を間近で見守り、自立への道のりをサポートする、とてもやりがいのある仕事です。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>成長できる環境</h3>
              <p>充実した研修制度とサポート体制で、専門性を高めながら成長することができます。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>チームワーク</h3>
              <p>職員同士の連携を大切にし、みんなで支え合いながら働ける環境です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 募集職種 */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">募集職種</h2>
          <div className="jobs-list">
            {jobs.map((job) => (
              <div key={job.id} className="job-card-enhanced">
                <div className="job-card-image">
                  {job.image && <img src={job.image} alt={job.title} />}
                  <div className="job-features">
                    {job.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
                
                <div className="job-content">
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    <div className="job-salary">{job.salary}</div>
                  </div>
                  
                  {job.annualSalary && (
                    <div className="job-annual-salary" style={{ color: '#666', marginBottom: '0.5rem' }}>
                      {job.annualSalary}
                    </div>
                  )}
                  
                  <div className="job-location">
                    <span className="location-icon">📍</span>
                    {job.location}
                  </div>
                  
                  <p className="job-description">{job.description}</p>
                  
                  <div className="job-actions">
                    <button 
                      className="btn btn-outline"
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                    >
                      {selectedJob === job.id ? '詳細を閉じる' : '詳細を見る'}
                    </button>
                    <button className="btn btn-primary">応募する</button>
                  </div>
                  
                  {selectedJob === job.id && (
                    <div className="job-details-expanded">
                      <div className="job-detail-grid">
                        <div className="job-detail-section">
                          <h4>📋 応募要件</h4>
                          <ul>
                            {job.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="job-detail-section">
                          <h4>💰 待遇・福利厚生</h4>
                          <ul>
                            {job.benefits.map((benefit, index) => (
                              <li key={index}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="job-detail-section">
                          <h4>⏰ 働き方</h4>
                          <ul>
                            {job.workStyle.map((style, index) => (
                              <li key={index}>{style}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="job-apply-link" style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <a 
                          href="https://en-gage.net/nifty_saiyo428/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn"
                          style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
                        >
                          詳細を見る・応募する（外部サイト）
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* 仕事のポイント */}
          <div className="job-points" style={{ marginTop: '4rem' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '2rem', fontSize: '1.4rem', textAlign: 'center' }}>
              ＜仕事のポイント＞
            </h3>
            <div className="point-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              <div className="point-card" style={{ background: 'var(--white)', padding: '2rem', borderRadius: '12px', border: '2px solid var(--primary-color)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>👥</div>
                <p style={{ lineHeight: '1.7' }}>
                  子どもたちと深く関わる仕事です！子どもたちには無限の可能性があるので、
                  成長を間近で見ることができます。
                </p>
              </div>
              <div className="point-card" style={{ background: 'var(--white)', padding: '2rem', borderRadius: '12px', border: '2px solid var(--primary-color)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📚</div>
                <p style={{ lineHeight: '1.7' }}>
                  資格を取得するために、働きながら通信制大学に通う職員もいます。
                  その場合は、シフトを調整するなどサポートを行ないます。
                  また、残業は、ほとんどありませんので、プライベートも充実させることができます。
                </p>
              </div>
            </div>

            <div className="onboarding-flow" style={{ background: 'var(--white)', padding: '2.5rem', borderRadius: '12px' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
                ＜入社後の流れ＞
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                入社後は、実務に携わりながら仕事を覚えていきましょう。
                分からないことがあれば、周りの先輩に相談できる環境があるので、
                未経験の方もご安心くださいね。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 法人の特徴 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">私たちが大切にしていること</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h4>子どもたちと同じ目線に立つ</h4>
              <p>「施設」ではなく「ホーム」と呼び、温かい家庭的な環境で支援を行っています。</p>
            </div>
            <div className="feature-card">
              <h4>「やりたい」を尊重</h4>
              <p>子どもたちの「やりたい」という気持ちを大切にし、自主性を育む支援を心がけています。</p>
            </div>
            <div className="feature-card">
              <h4>卒業後も継続的な支援</h4>
              <p>ホームを出た後も継続的にサポートし、社会での自立を長期的に支えています。</p>
            </div>
            <div className="feature-card">
              <h4>チームで支える</h4>
              <p>職員同士の連携を大切にし、チーム全体で青少年を支える体制を整えています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 研修制度 */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">研修制度</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>新人研修</h3>
              <ul>
                <li>法人理念・支援方針の理解</li>
                <li>自立援助ホームの基礎知識</li>
                <li>支援技術の習得</li>
                <li>実践指導（OJT）</li>
                <li>定期的な振り返り面談</li>
              </ul>
            </div>
            <div className="card">
              <h3>継続研修</h3>
              <ul>
                <li>専門研修への参加支援</li>
                <li>外部研修・学会参加</li>
                <li>資格取得支援</li>
                <li>ケース検討会</li>
                <li>スーパービジョン</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 応募フォーム */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">応募フォーム</h2>
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-2">
                <div className="form-group">
                  <label htmlFor="name">お名前 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={applicationData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">メールアドレス *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={applicationData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-2">
                <div className="form-group">
                  <label htmlFor="phone">電話番号 *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="position">希望職種 *</label>
                  <select
                    id="position"
                    name="position"
                    value={applicationData.position}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="青少年の生活支援相談員（スイッチ）">青少年の生活支援相談員（スイッチ）</option>
                    <option value="青少年の生活支援相談員（TIES）">青少年の生活支援相談員（TIES）</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="experience">関連経験・資格</label>
                <textarea
                  id="experience"
                  name="experience"
                  value={applicationData.experience}
                  onChange={handleInputChange}
                  placeholder="関連する職歴や保有資格についてお書きください"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="motivation">志望動機 *</label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={applicationData.motivation}
                  onChange={handleInputChange}
                  placeholder="当法人を志望する理由をお書きください"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="file">履歴書・職務経歴書</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
                <small>PDF、Word形式でお送りください（任意）</small>
              </div>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button type="submit" className="btn">応募する</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobsPage;