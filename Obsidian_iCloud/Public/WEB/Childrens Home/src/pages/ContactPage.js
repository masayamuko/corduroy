import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。担当者より後日ご連絡いたします。');
  };

  const homes = [
    {
      name: 'かんらん舎',
      address: '福岡市南区○○○○○○',
      phone: '092-XXX-XXXX',
      manager: '施設長 山田 花子'
    },
    {
      name: '結ホーム',
      address: '福岡市南区○○○○○○',
      phone: '092-XXX-XXXX',
      manager: '施設長 佐藤 太郎'
    },
    {
      name: 'LEAP',
      address: '筑紫野市○○○○○○',
      phone: '092-XXX-XXXX',
      manager: '施設長 田中 次郎'
    },
    {
      name: 'スイッチ',
      address: '太宰府市○○○○○○',
      phone: '092-XXX-XXXX',
      manager: '施設長 鈴木 一郎'
    }
  ];

  return (
    <div className="contact-page">
      {/* ページヘッダー */}
      <section className="page-header">
        <div className="container">
          <h1>お問い合わせ</h1>
          <p>ご質問やご相談がございましたら、お気軽にお問い合わせください</p>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>お問い合わせフォーム</h2>
              <div className="card">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="category">お問い合わせ種別 *</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">選択してください</option>
                      <option value="入居相談">入居相談</option>
                      <option value="寄付について">寄付について</option>
                      <option value="求人について">求人について</option>
                      <option value="ボランティア">ボランティア</option>
                      <option value="取材・見学">取材・見学</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>

                  <div className="grid grid-2">
                    <div className="form-group">
                      <label htmlFor="name">お名前 *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
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
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-2">
                    <div className="form-group">
                      <label htmlFor="phone">電話番号</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">件名 *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">お問い合わせ内容 *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="お問い合わせの詳細をお書きください"
                      required
                    ></textarea>
                  </div>

                  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <button type="submit" className="btn">送信する</button>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <h2>法人情報</h2>
              <div className="card">
                <h3>特定非営利活動法人<br />青少年の自立を支える福岡の会</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <strong>📍 所在地</strong>
                    <p>〒815-0000<br />福岡市南区○○○○○○</p>
                  </div>
                  <div className="contact-item">
                    <strong>📞 電話番号</strong>
                    <p>092-XXX-XXXX</p>
                  </div>
                  <div className="contact-item">
                    <strong>📧 メールアドレス</strong>
                    <p>info@fukuoka-youth.org</p>
                  </div>
                  <div className="contact-item">
                    <strong>🕒 受付時間</strong>
                    <p>平日 9:00〜18:00<br />（土日祝日を除く）</p>
                  </div>
                </div>
              </div>

              <div className="card" style={{ marginTop: '2rem' }}>
                <h3>緊急時連絡先</h3>
                <p>
                  緊急時（夜間・休日）は、各自立援助ホームまで直接お電話ください。
                  緊急事態以外は平日の受付時間内にお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 各ホーム連絡先 */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">各自立援助ホーム連絡先</h2>
          <div className="grid grid-2">
            {homes.map((home, index) => (
              <div key={index} className="card">
                <h3>{home.name}</h3>
                <div className="home-contact-info">
                  <p><strong>所在地:</strong> {home.address}</p>
                  <p><strong>電話番号:</strong> {home.phone}</p>
                  <p><strong>担当者:</strong> {home.manager}</p>
                </div>
                <p className="note">
                  直接のご相談は事前にお電話でご連絡ください。
                  見学をご希望の場合は、事前予約が必要です。
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">よくある質問</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Q. 入居の条件を教えてください</h3>
              <p>
                A. 15歳から20歳までの青少年で、就労または就学している方、もしくはその意思がある方が対象です。
                詳しくは入居相談にてご説明いたします。
              </p>
            </div>
            <div className="faq-item">
              <h3>Q. 費用はどのくらいかかりますか？</h3>
              <p>
                A. 食費や光熱費など実費相当分をご負担いただきます。
                詳細は個別にご相談させていただきます。
              </p>
            </div>
            <div className="faq-item">
              <h3>Q. 見学はできますか？</h3>
              <p>
                A. はい、事前予約制で見学を受け付けています。
                プライバシー保護のため、利用者の同意を得た上で実施しています。
              </p>
            </div>
            <div className="faq-item">
              <h3>Q. 寄付の方法を教えてください</h3>
              <p>
                A. 銀行振込、クレジットカード決済、現金書留で受け付けています。
                継続寄付（月額）も可能です。詳しくは寄付ページをご覧ください。
              </p>
            </div>
            <div className="faq-item">
              <h3>Q. ボランティアに参加したいのですが</h3>
              <p>
                A. ボランティアも大歓迎です。イベントのお手伝いや専門スキルを活かした支援など、
                様々な形でご参加いただけます。まずはお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* アクセスマップ */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">アクセス</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>公共交通機関でお越しの場合</h3>
              <ul>
                <li>西鉄○○線「○○駅」から徒歩10分</li>
                <li>地下鉄○○線「○○駅」から徒歩15分</li>
                <li>西鉄バス「○○バス停」から徒歩5分</li>
              </ul>
            </div>
            <div className="card">
              <h3>お車でお越しの場合</h3>
              <ul>
                <li>福岡都市高速「○○IC」から約15分</li>
                <li>駐車場：2台分あり（事前にお知らせください）</li>
                <li>周辺にコインパーキングもございます</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <div className="map-placeholder">
              <p>地図を表示（Google Maps等を埋め込み）</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;