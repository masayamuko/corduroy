import React from 'react';
import { useParams, Link } from 'react-router-dom';

const HomeDetailPage = () => {
  const { homeId } = useParams();

  const homesData = {
    kanransya: {
      name: 'かんらん舎',
      subtitle: '福岡市初の自立援助ホーム',
      established: '2008年',
      location: '福岡市南区',
      capacity: '男性6名',
      manager: '施設長 山田 花子',
      phone: '092-XXX-XXXX',
      address: '福岡市南区○○○○○○',
      description: '2008年に福岡市として初めて開設された自立援助ホーム。長年の実績と経験を活かし、青少年一人ひとりの個性と状況に応じた丁寧な支援を行っています。',
      philosophy: '「自立への道のりを共に歩む」をモットーに、青少年が安心して成長できる環境を提供し、社会で自立して生活していくための基盤づくりをサポートします。',
      features: [
        '福岡市初の自立援助ホームとしての豊富な経験',
        '一人ひとりに合わせたオーダーメイドの支援計画',
        '地域との強いネットワークによる包括的支援',
        '卒業生との継続的なつながりとアフターケア'
      ],
      dailySchedule: {
        weekday: [
          { time: '6:30', activity: '起床・洗面' },
          { time: '7:00', activity: '朝食' },
          { time: '8:00', activity: '出勤・通学' },
          { time: '18:00', activity: '帰宅' },
          { time: '19:00', activity: '夕食' },
          { time: '21:00', activity: '入浴・自由時間' },
          { time: '23:00', activity: '消灯' }
        ],
        holiday: [
          { time: '8:00', activity: '起床・洗面' },
          { time: '8:30', activity: '朝食' },
          { time: '10:00', activity: '清掃・洗濯' },
          { time: '12:00', activity: '昼食' },
          { time: '13:00', activity: '自由時間・外出' },
          { time: '18:00', activity: '帰宅' },
          { time: '19:00', activity: '夕食' },
          { time: '21:00', activity: '入浴・自由時間' },
          { time: '23:00', activity: '消灯' }
        ]
      },
      support: [
        {
          title: '生活支援',
          content: '基本的な生活習慣の確立、金銭管理、健康管理など、自立した生活に必要なスキルを身につけるサポート'
        },
        {
          title: '就労支援',
          content: '就職活動の支援、職場との連携、仕事上の悩み相談など、安定した就労継続のためのサポート'
        },
        {
          title: '精神的支援',
          content: '日常的な相談から将来への不安まで、心の健康を保つためのカウンセリングやメンタルケア'
        },
        {
          title: 'アフターケア',
          content: '退所後も継続的な相談支援を行い、地域での自立生活を長期的にサポート'
        }
      ]
    },
    yui: {
      name: '結ホーム',
      subtitle: '絆を大切にする女性専用ホーム',
      established: '2015年',
      location: '福岡市南区',
      capacity: '女性6名',
      manager: '施設長 佐藤 太郎',
      phone: '092-XXX-XXXX',
      address: '福岡市南区○○○○○○',
      description: '「結」は絆やつながりを意味します。女性の特性に配慮した支援環境で、一人ひとりの成長を丁寧にサポートしています。',
      philosophy: '女性としての自立と社会参加を支援し、それぞれの夢や目標に向かって歩む力を育みます。お互いを支え合う温かい家庭的な環境を大切にしています。',
      features: [
        '女性専用ホームとしてのきめ細やかな配慮',
        'プライバシーを重視した個室環境',
        '女性職員によるサポート体制',
        '美容や健康管理に関する支援の充実'
      ],
      dailySchedule: {
        weekday: [
          { time: '6:30', activity: '起床・洗面' },
          { time: '7:00', activity: '朝食・身支度' },
          { time: '8:00', activity: '出勤・通学' },
          { time: '18:00', activity: '帰宅' },
          { time: '19:00', activity: '夕食' },
          { time: '20:00', activity: '自由時間・勉強' },
          { time: '22:00', activity: '入浴' },
          { time: '23:00', activity: '消灯' }
        ],
        holiday: [
          { time: '8:00', activity: '起床・洗面' },
          { time: '8:30', activity: '朝食' },
          { time: '10:00', activity: '清掃・洗濯' },
          { time: '12:00', activity: '昼食' },
          { time: '13:00', activity: '自由時間・買い物' },
          { time: '18:00', activity: '帰宅' },
          { time: '19:00', activity: '夕食' },
          { time: '21:00', activity: '入浴・自由時間' },
          { time: '23:00', activity: '消灯' }
        ]
      },
      support: [
        {
          title: '生活支援',
          content: '女性特有の健康管理、美容ケア、家事スキルなど、女性としての自立に必要な支援'
        },
        {
          title: '就労・就学支援',
          content: '女性のキャリア形成を考慮した就職支援、進学相談、資格取得支援'
        },
        {
          title: '人間関係支援',
          content: 'コミュニケーション能力の向上、対人関係の悩み相談、ソーシャルスキルの習得'
        },
        {
          title: '将来設計支援',
          content: '結婚、出産、子育てなど女性のライフステージを考慮した将来設計のサポート'
        }
      ]
    },
    leap: {
      name: 'LEAP',
      subtitle: '飛躍と成長をテーマとしたホーム',
      established: '2019年',
      location: '筑紫野市',
      capacity: '男性6名',
      manager: '施設長 田中 次郎',
      phone: '092-XXX-XXXX',
      address: '筑紫野市○○○○○○',
      description: 'LEAPは「飛び越える、上昇する」という意味を持ちます。青少年の可能性を信じ、それぞれの夢や目標に向かって大きく飛躍できるよう支援します。',
      philosophy: '一人ひとりの可能性を最大限に引き出し、自分らしい人生を歩むための力を育てます。挑戦する気持ちを大切にし、失敗を恐れずに成長できる環境を提供します。',
      features: [
        '個性を活かした支援プログラム',
        '新しい支援理論の積極的な導入',
        '豊かな自然環境での生活',
        'スポーツや文化活動を通じた成長支援'
      ],
      dailySchedule: {
        weekday: [
          { time: '6:30', activity: '起床・朝の運動' },
          { time: '7:00', activity: '朝食' },
          { time: '8:00', activity: '出勤・通学' },
          { time: '18:00', activity: '帰宅' },
          { time: '19:00', activity: '夕食' },
          { time: '20:00', activity: '学習・技能習得時間' },
          { time: '22:00', activity: '入浴・自由時間' },
          { time: '23:00', activity: '消灯' }
        ],
        holiday: [
          { time: '7:00', activity: '起床・朝の運動' },
          { time: '8:00', activity: '朝食' },
          { time: '10:00', activity: '清掃・洗濯' },
          { time: '12:00', activity: '昼食' },
          { time: '13:00', activity: 'スポーツ・レクリエーション' },
          { time: '18:00', activity: '帰宅' },
          { time: '19:00', activity: '夕食' },
          { time: '21:00', activity: '入浴・自由時間' },
          { time: '23:00', activity: '消灯' }
        ]
      },
      support: [
        {
          title: 'チャレンジ支援',
          content: '新しいことへの挑戦を奨励し、失敗を成長の機会として捉える支援体制'
        },
        {
          title: 'スキル開発',
          content: 'IT技術、手工芸、スポーツなど多様な分野でのスキル習得機会の提供'
        },
        {
          title: '目標設定支援',
          content: '短期・長期の目標設定と達成に向けた計画的なサポート'
        },
        {
          title: '自己表現支援',
          content: '芸術活動や発表の場を通じた自己表現力の向上支援'
        }
      ]
    },
    switch: {
      name: 'スイッチ',
      subtitle: '進学・学習支援に特化したホーム',
      established: '2023年',
      location: '太宰府市',
      capacity: '男性6名',
      manager: '施設長 鈴木 一郎',
      phone: '092-XXX-XXXX',
      address: '太宰府市○○○○○○',
      description: '心の変化と選択をサポート。高卒資格取得や進学を目指す青年の就学支援に積極的に取り組む新しいホームです。',
      philosophy: '教育の力を信じ、学習を通じた自己実現を支援します。一人ひとりの学習ペースに合わせた環境で、将来への可能性を広げるお手伝いをします。',
      features: [
        '進学・学習支援に特化した環境',
        '充実した学習設備と教材',
        '個別学習計画の作成と実行',
        '大学・専門学校との連携プログラム'
      ],
      dailySchedule: {
        weekday: [
          { time: '6:30', activity: '起床・洗面' },
          { time: '7:00', activity: '朝食' },
          { time: '8:00', activity: '通学・学習' },
          { time: '17:00', activity: '帰宅' },
          { time: '18:00', activity: '夕食' },
          { time: '19:00', activity: '学習時間' },
          { time: '21:00', activity: '入浴・自由時間' },
          { time: '23:00', activity: '消灯' }
        ],
        holiday: [
          { time: '8:00', activity: '起床・洗面' },
          { time: '8:30', activity: '朝食' },
          { time: '10:00', activity: '学習・課題時間' },
          { time: '12:00', activity: '昼食' },
          { time: '13:00', activity: '自由時間・図書館' },
          { time: '18:00', activity: '帰宅' },
          { time: '19:00', activity: '夕食' },
          { time: '20:00', activity: '復習・予習時間' },
          { time: '22:00', activity: '入浴・自由時間' },
          { time: '23:00', activity: '消灯' }
        ]
      },
      support: [
        {
          title: '学習支援',
          content: '個別学習計画の作成、学習環境の整備、学習方法の指導、定期的な進捗確認'
        },
        {
          title: '進路指導',
          content: '進学先の選択相談、受験対策、奨学金の申請支援、将来設計の相談'
        },
        {
          title: '学習環境整備',
          content: '静かな学習スペースの確保、教材や参考書の提供、インターネット環境の整備'
        },
        {
          title: '学校連携',
          content: '学校との連絡調整、進路相談、学校行事への参加支援'
        }
      ]
    },
    ties: {
      name: 'TIES',
      subtitle: '新しいつながりを創造するホーム',
      established: '2025年開設予定',
      location: '福岡市南区',
      capacity: '女性6名',
      manager: '施設長 未定',
      phone: '092-XXX-XXXX（法人代表）',
      address: '福岡市南区○○○○○○（開設予定地）',
      description: '2025年2月開設予定の新しい自立援助ホーム。「TIES」は「つながり」を意味し、青少年と地域、青少年同士、そして過去・現在・未来をつなぐ支援を目指します。',
      philosophy: '最新の支援理論と豊富な経験を融合させ、一人ひとりの青少年が新しい人生のステージへと歩み出せるよう、革新的で温かい支援を提供します。',
      features: [
        '最新の支援理論を取り入れた新しいアプローチ',
        '地域との連携を重視したコミュニティ支援',
        'デジタル技術を活用した支援プログラム',
        '卒業生ネットワークとの強いつながり'
      ],
      dailySchedule: {
        weekday: [
          { time: '6:30', activity: '起床・洗面（予定）' },
          { time: '7:00', activity: '朝食（予定）' },
          { time: '8:00', activity: '出勤・通学（予定）' },
          { time: '18:00', activity: '帰宅（予定）' },
          { time: '19:00', activity: '夕食（予定）' },
          { time: '20:00', activity: '自由時間・学習（予定）' },
          { time: '22:00', activity: '入浴（予定）' },
          { time: '23:00', activity: '消灯（予定）' }
        ],
        holiday: [
          { time: '8:00', activity: '起床・洗面（予定）' },
          { time: '8:30', activity: '朝食（予定）' },
          { time: '10:00', activity: '清掃・洗濯（予定）' },
          { time: '12:00', activity: '昼食（予定）' },
          { time: '13:00', activity: '地域活動・自由時間（予定）' },
          { time: '18:00', activity: '帰宅（予定）' },
          { time: '19:00', activity: '夕食（予定）' },
          { time: '21:00', activity: '入浴・自由時間（予定）' },
          { time: '23:00', activity: '消灯（予定）' }
        ]
      },
      support: [
        {
          title: '次世代型支援',
          content: 'AI技術やデジタルツールを活用した個別最適化された支援プログラム（予定）'
        },
        {
          title: '地域連携支援',
          content: '地域住民、企業、行政との密接な連携による包括的な支援体制（予定）'
        },
        {
          title: 'ネットワーク支援',
          content: '卒業生ネットワークとの連携による先輩からの指導とサポート（予定）'
        },
        {
          title: '未来志向支援',
          content: '社会の変化に対応した新しいスキルの習得とキャリア形成支援（予定）'
        }
      ]
    }
  };

  const home = homesData[homeId];

  if (!home) {
    return (
      <div className="container" style={{ padding: '2rem 0' }}>
        <h1>ホームが見つかりません</h1>
        <Link to="/homes" className="btn">ホーム一覧に戻る</Link>
      </div>
    );
  }

  return (
    <div className="home-detail-page">
      {/* パンくずナビ */}
      <nav className="breadcrumb">
        <div className="container">
          <ul className="breadcrumb-list">
            <li><Link to="/">ホーム</Link></li>
            <li><Link to="/homes">自立援助ホーム</Link></li>
            <li>{home.name}</li>
          </ul>
        </div>
      </nav>

      {/* ページヘッダー */}
      <section className="page-header">
        <div className="container">
          <h1>{home.name}</h1>
          <p>{home.subtitle}</p>
        </div>
      </section>

      {/* ホーム概要 */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>ホーム概要</h2>
              <div className="card">
                <p>{home.description}</p>
                <div className="home-info-grid">
                  <div className="info-item">
                    <strong>設立年:</strong> {home.established}
                  </div>
                  <div className="info-item">
                    <strong>所在地:</strong> {home.location}
                  </div>
                  <div className="info-item">
                    <strong>定員:</strong> {home.capacity}
                  </div>
                  <div className="info-item">
                    <strong>施設長:</strong> {home.manager}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2>理念・方針</h2>
              <div className="card">
                <p>{home.philosophy}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">特徴</h2>
          <div className="grid grid-2">
            {home.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <h4>✓ {feature}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 一日の流れ */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">一日の流れ</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>平日のスケジュール</h3>
              <div className="schedule-list">
                {home.dailySchedule.weekday.map((item, index) => (
                  <div key={index} className="schedule-item">
                    <span className="schedule-time">{item.time}</span>
                    <span className="schedule-activity">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h3>休日のスケジュール</h3>
              <div className="schedule-list">
                {home.dailySchedule.holiday.map((item, index) => (
                  <div key={index} className="schedule-item">
                    <span className="schedule-time">{item.time}</span>
                    <span className="schedule-activity">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 支援内容 */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">支援内容</h2>
          <div className="grid grid-2">
            {home.support.map((item, index) => (
              <div key={index} className="card">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 連絡先・アクセス */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">連絡先・アクセス</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>連絡先</h3>
              <div className="contact-info">
                <p><strong>住所:</strong> {home.address}</p>
                <p><strong>電話:</strong> {home.phone}</p>
                <p><strong>担当者:</strong> {home.manager}</p>
              </div>
              <p className="note">
                見学をご希望の場合は、事前にお電話でご連絡ください。
                プライバシー保護のため、利用者の同意を得た上で実施しています。
              </p>
            </div>
            <div className="card">
              <h3>アクセス</h3>
              <div className="access-info">
                <p>詳細なアクセス方法については、お問い合わせ時にご案内いたします。</p>
                <p>公共交通機関をご利用の場合は、最寄りの駅やバス停からの経路をお教えします。</p>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/contact" className="btn">お問い合わせ</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDetailPage;