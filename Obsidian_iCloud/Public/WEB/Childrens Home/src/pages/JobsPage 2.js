import React, { useState } from 'react';

const JobsPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: '生活支援員',
      type: '正職員',
      location: '福岡市南区・筑紫野市・太宰府市',
      salary: '月給 200,000円〜280,000円',
      description: '自立援助ホームで生活する青少年の日常生活をサポートする職員を募集しています。',
      requirements: [
        '社会福祉士、精神保健福祉士、保育士のいずれかの資格（取得見込み可）',
        '青少年支援に興味・関心がある方',
        '夜勤対応可能な方',
        '普通自動車運転免許'
      ],
      benefits: [
        '昇給年1回',
        '賞与年2回（計3.5ヶ月分）',
        '各種社会保険完備',
        '退職金制度',
        '研修制度充実',
        '車通勤可'
      ]
    },
    {
      id: 2,
      title: '相談支援員',
      type: '正職員',
      location: '福岡市南区',
      salary: '月給 220,000円〜300,000円',
      description: '青少年やその家族からの相談に応じ、適切な支援計画を立案・実行する職員を募集しています。',
      requirements: [
        '社会福祉士または精神保健福祉士の資格必須',
        '相談支援業務経験3年以上',
        '青少年支援の経験があることが望ましい',
        '普通自動車運転免許'
      ],
      benefits: [
        '昇給年1回',
        '賞与年2回（計4.0ヶ月分）',
        '各種社会保険完備',
        '退職金制度',
        '専門研修参加支援',
        '資格取得支援'
      ]
    },
    {
      id: 3,
      title: '事務職員',
      type: '正職員',
      location: '福岡市南区',
      salary: '月給 180,000円〜240,000円',
      description: '法人運営に関わる事務全般を担当していただく職員を募集しています。',
      requirements: [
        '高校卒業以上',
        'PC操作（Word、Excel）ができる方',
        '事務経験があることが望ましい',
        '普通自動車運転免許'
      ],
      benefits: [
        '昇給年1回',
        '賞与年2回（計3.0ヶ月分）',
        '各種社会保険完備',
        '退職金制度',
        '土日祝休み',
        'スキルアップ支援'
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
      <section className="page-header">
        <div className="container">
          <h1>求人情報</h1>
          <p>青少年の未来を一緒に支える仲間を募集しています</p>
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
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span>{job.type}</span>
                    <span>{job.location}</span>
                    <span>{job.salary}</span>
                  </div>
                </div>
                <p>{job.description}</p>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                >
                  {selectedJob === job.id ? '詳細を閉じる' : '詳細を見る'}
                </button>
                
                {selectedJob === job.id && (
                  <div className="job-details">
                    <div className="job-detail-section">
                      <h4>応募要件</h4>
                      <ul>
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="job-detail-section">
                      <h4>待遇・福利厚生</h4>
                      <ul>
                        {job.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 職員の声 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">職員の声</h2>
          <div className="grid grid-2">
            <div className="card">
              <h4>生活支援員 佐藤さん（入職3年目）</h4>
              <p>
                「最初は不安もありましたが、先輩職員の丁寧な指導と充実した研修制度のおかげで、
                安心して業務に取り組むことができています。青少年の成長を見守ることができる
                この仕事にとてもやりがいを感じています。」
              </p>
            </div>
            <div className="card">
              <h4>相談支援員 田中さん（入職5年目）</h4>
              <p>
                「一人ひとりの青少年と向き合い、その子の将来を一緒に考えることができる仕事です。
                時には困難な場面もありますが、チーム一丸となってサポートし合える職場環境があるので、
                とても働きやすいです。」
              </p>
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
                    <option value="生活支援員">生活支援員</option>
                    <option value="相談支援員">相談支援員</option>
                    <option value="事務職員">事務職員</option>
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