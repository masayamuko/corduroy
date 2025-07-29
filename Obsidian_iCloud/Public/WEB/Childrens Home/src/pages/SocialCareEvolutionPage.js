import React from 'react';

const SocialCareEvolutionPage = () => {
  return (
    <div className="social-care-evolution-page">
      <section className="page-header">
        <div className="container">
          <h1>時代が求める、もう一つの「家庭」のカタチ</h1>
          <p>〜小規模で温かい自立援助ホームの役割〜</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="evolution-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            <div className="intro-section" style={{ marginBottom: '3rem' }}>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                近年、日本における社会的養護のあり方は、大きな転換期を迎えています。
                かつて主流であった大規模な施設での養育から、より家庭に近い環境でのきめ細やかな支援へと、
                その重心は大きくシフトしています。
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                これは、子どもたちが愛着形成の安定した環境で育ち、一人ひとりの個性と発達段階に応じた支援を受けることの重要性が、
                社会全体で認識されてきたためです。
              </p>
            </div>

            <div className="current-state" style={{ marginBottom: '4rem' }}>
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>社会的養護の現状と国の方向性</h2>
              <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1.5rem' }}>新しい社会的養育ビジョン（2017年）</h3>
                <ul style={{ lineHeight: '1.8' }}>
                  <li>2029年までに原則として未就学児を施設養護から家庭的養護へ移行</li>
                  <li>学齢期の子どもたちもグループホームのような小規模環境での養育を推進</li>
                  <li>子どもの権利を中心に据えた支援体制の構築</li>
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>大規模施設の課題</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                  これまでの大規模施設では、以下のような課題が指摘されてきました：
                </p>
                <ul style={{ lineHeight: '1.8' }}>
                  <li>画一的な支援になりがちで、個別のニーズに応えきれない</li>
                  <li>職員配置基準が十分とは言えず、きめ細やかな対応が困難</li>
                  <li>集団生活による心理的負担と、個人のプライバシー確保の難しさ</li>
                  <li>退所後の社会生活への移行時に、孤立感や生活能力の不足が生じやすい</li>
                </ul>
              </div>
            </div>

            <div className="our-role" style={{ marginBottom: '4rem' }}>
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>
                自立援助ホームが果たす「小規模・家庭的」な役割
              </h2>
              
              <div style={{ background: '#FFF9F5', padding: '2.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  このような国の方向性の中で、私たち自立援助ホームは、
                  まさに<strong>「地域の中で育む、もう一つの家庭」</strong>としての役割を強く認識しています。
                </p>
                <p style={{ lineHeight: '1.8' }}>
                  児童養護施設や里親家庭を退所する子どもたち、あるいは様々な事情で家庭での生活が困難になった
                  15歳から原則20歳までの若者たちにとって、社会へ踏み出す最終段階を支える重要な居場所です。
                </p>
              </div>

              <h3 style={{ marginBottom: '2rem' }}>小規模な環境だからこそできること</h3>
              
              <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>個別支援の充実</h4>
                  <p style={{ lineHeight: '1.7' }}>
                    スタッフが一人ひとりの若者と深く関わり、それぞれの個性、悩み、夢に寄り添い、
                    オーダーメイドの支援計画を立てることができます。
                  </p>
                </div>
                
                <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>生活能力の向上</h4>
                  <p style={{ lineHeight: '1.7' }}>
                    家庭的な雰囲気の中で、日々の料理、掃除、金銭管理など、
                    生活に不可欠なスキルを実践的に学び、自立に向けた自信を育みます。
                  </p>
                </div>
                
                <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>社会とのつながり</h4>
                  <p style={{ lineHeight: '1.7' }}>
                    地域の中に溶け込んだ生活を通して、近隣住民との交流、アルバイトや就職活動、
                    学校生活など、社会との自然な接点を増やすことができます。
                  </p>
                </div>
                
                <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>安心できる居場所</h4>
                  <p style={{ lineHeight: '1.7' }}>
                    大規模施設にはない温かい雰囲気の中で、心理的な安定を図り、
                    過去の経験からくる心の傷を癒し、安心して未来へ進むための土台を築きます。
                  </p>
                </div>
              </div>
            </div>

            <div className="challenges" style={{ marginBottom: '4rem' }}>
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>現代の課題と私たちの挑戦</h2>
              
              <p style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
                しかしながら、社会的養護を取り巻く課題は依然として山積しています。
                特に、自立援助ホームにおいては、以下のような課題に直面しながらも、
                より良い支援を目指し日々挑戦しています。
              </p>

              <div className="challenge-list">
                <div style={{ marginBottom: '2rem', padding: '1.5rem', borderLeft: '4px solid var(--primary-color)' }}>
                  <h3 style={{ marginBottom: '1rem' }}>地域資源との連携強化</h3>
                  <p style={{ lineHeight: '1.7' }}>
                    若者の就労先や学習機会、医療機関など、地域社会との連携をさらに深め、
                    多角的なサポート体制を築く必要があります。
                  </p>
                </div>

                <div style={{ marginBottom: '2rem', padding: '1.5rem', borderLeft: '4px solid var(--primary-color)' }}>
                  <h3 style={{ marginBottom: '1rem' }}>専門性の向上</h3>
                  <p style={{ lineHeight: '1.7' }}>
                    多様化する若者のニーズ（発達障がい、精神疾患、複雑なトラウマなど）に対応するため、
                    職員の専門性の向上と研修機会の拡充が不可欠です。
                  </p>
                </div>

                <div style={{ marginBottom: '2rem', padding: '1.5rem', borderLeft: '4px solid var(--primary-color)' }}>
                  <h3 style={{ marginBottom: '1rem' }}>退所後支援の継続</h3>
                  <p style={{ lineHeight: '1.7' }}>
                    自立援助ホームを退所した後も、若者たちが孤立することなく社会生活を継続できるよう、
                    アフターケアや伴走支援の体制を強化していくことが求められています。
                  </p>
                </div>

                <div style={{ marginBottom: '2rem', padding: '1.5rem', borderLeft: '4px solid var(--primary-color)' }}>
                  <h3 style={{ marginBottom: '1rem' }}>資金確保と広報活動</h3>
                  <p style={{ lineHeight: '1.7' }}>
                    小規模運営であるがゆえの資金面の課題や、自立援助ホームの存在や役割が
                    まだ十分に認知されていないという課題に対し、積極的な広報と安定した運営基盤の確保が必要です。
                  </p>
                </div>
              </div>
            </div>

            <div className="conclusion" style={{ background: 'var(--primary-color)', color: 'white', padding: '3rem', borderRadius: '12px', textAlign: 'center' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>私たちの決意</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                私たちは、これらの課題に真摯に向き合いながら、<br />
                子どもたちが心身ともに健やかに成長し、<br />
                社会の中で自分らしく輝けるよう、<br />
                これからも温かい「家庭」の場を提供し続けてまいります。
              </p>
              <a href="/contact" className="btn btn-secondary" style={{ background: 'white', color: 'var(--primary-color)' }}>
                私たちの活動を支援する
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialCareEvolutionPage;