import React from 'react';

const AdmissionFlowPage = () => {
  return (
    <div className="admission-flow-page">
      <section className="page-header">
        <div className="container">
          <h1>入居までの流れ</h1>
          <p>自立援助ホームへの入居は、児童相談所等の公的機関を通じて行われます</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="admission-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="admission-intro" style={{ marginBottom: '3rem', padding: '2rem', background: '#FFF9F5', borderRadius: '12px' }}>
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>自立援助ホームとは</h2>
              <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                自立援助ホームは、児童福祉法に基づく「児童自立生活援助事業」として運営されています。
                15歳から20歳までの、何らかの理由で家庭での生活が困難な青少年に、
                安心して暮らせる場所と自立に向けた支援を提供しています。
              </p>
              <p style={{ lineHeight: '1.8' }}>
                入居は「措置」という行政処分により決定されるため、
                必ず児童相談所などの公的機関を通じて手続きを行います。
              </p>
            </div>

            <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--primary-color)' }}>入居までの流れ</h2>

            <div className="flow-steps">
              <div className="flow-step" style={{ marginBottom: '3rem', position: 'relative', paddingLeft: '60px' }}>
                <div style={{ position: 'absolute', left: '0', top: '0', width: '40px', height: '40px', background: 'var(--primary-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>相談・問い合わせ</h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                  <h4 style={{ marginBottom: '1rem' }}>相談先</h4>
                  <ul style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                    <li><strong>児童相談所</strong>：最も一般的な相談窓口です</li>
                    <li><strong>市役所・区役所の家庭児童相談室</strong>：お住まいの地域の窓口</li>
                    <li><strong>自立援助ホーム</strong>：直接のご相談も可能です（最終的には児童相談所との連携が必要）</li>
                  </ul>
                  <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', marginTop: '1rem' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>福岡市の方は</p>
                    <p>福岡市こども総合相談センター<br />
                    （児童相談所機能を持つ機関です）</p>
                  </div>
                </div>
              </div>

              <div className="flow-step" style={{ marginBottom: '3rem', position: 'relative', paddingLeft: '60px' }}>
                <div style={{ position: 'absolute', left: '0', top: '0', width: '40px', height: '40px', background: 'var(--primary-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>状況把握・アセスメント</h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                  <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                    児童相談所の担当者が、ご本人と面談を行います。
                  </p>
                  <h4 style={{ marginBottom: '0.5rem' }}>確認する内容</h4>
                  <ul style={{ lineHeight: '1.8' }}>
                    <li>現在の生活状況、困りごと</li>
                    <li>これまでの経緯</li>
                    <li>健康状態</li>
                    <li>就労・就学の意欲</li>
                    <li>自立への希望</li>
                  </ul>
                </div>
              </div>

              <div className="flow-step" style={{ marginBottom: '3rem', position: 'relative', paddingLeft: '60px' }}>
                <div style={{ position: 'absolute', left: '0', top: '0', width: '40px', height: '40px', background: 'var(--primary-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>ホームとの調整</h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                  <h4 style={{ marginBottom: '1rem' }}>ホーム見学・面接</h4>
                  <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                    児童相談所が受け入れ可能なホームを探し、ご本人の希望も聞きながら調整します。
                    実際にホームを訪問し、以下を確認します：
                  </p>
                  <ul style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                    <li>ホームの雰囲気</li>
                    <li>生活のルール</li>
                    <li>支援内容</li>
                    <li>他の入居者の様子</li>
                  </ul>
                  <div style={{ background: '#FFF9F5', padding: '1rem', borderRadius: '4px' }}>
                    <p style={{ fontWeight: 'bold' }}>体験入居について</p>
                    <p>ケースによっては、数日〜数週間の体験入居を行うことがあります。
                    実際の生活を体験し、ホームが自分に合うか確認できます。</p>
                  </div>
                </div>
              </div>

              <div className="flow-step" style={{ marginBottom: '3rem', position: 'relative', paddingLeft: '60px' }}>
                <div style={{ position: 'absolute', left: '0', top: '0', width: '40px', height: '40px', background: 'var(--primary-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>4</div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>入居意思の確認</h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                  <p style={{ lineHeight: '1.8' }}>
                    見学や体験入居を経て、ご本人とホーム双方で入居の意思を確認します。
                    ホームでの生活ルールや、自立に向けた目標などについて話し合い、
                    お互いに納得した上で入居を決定します。
                  </p>
                </div>
              </div>

              <div className="flow-step" style={{ marginBottom: '3rem', position: 'relative', paddingLeft: '60px' }}>
                <div style={{ position: 'absolute', left: '0', top: '0', width: '40px', height: '40px', background: 'var(--primary-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>5</div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>措置決定</h3>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                  <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                    児童相談所長が、児童福祉法に基づいて「措置決定」を行います。
                    これにより、公的な支援として自立援助ホームへの入居が正式に決定されます。
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>
                    ※ご本人および保護者（親権者がいる場合）の同意書が必要です
                  </p>
                </div>
              </div>

              <div className="flow-step" style={{ position: 'relative', paddingLeft: '60px' }}>
                <div style={{ position: 'absolute', left: '0', top: '0', width: '40px', height: '40px', background: 'var(--accent-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>6</div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>入居開始</h3>
                <div style={{ background: '#FFF9F5', padding: '1.5rem', borderRadius: '8px', border: '2px solid var(--accent-color)' }}>
                  <p style={{ lineHeight: '1.8', fontWeight: 'bold', marginBottom: '1rem' }}>
                    新しい生活のスタート！
                  </p>
                  <p style={{ lineHeight: '1.8' }}>
                    措置決定後、正式に入居となります。
                    ホームでの生活費用は、措置費として公費で賄われるため、
                    ご本人の負担は最小限に抑えられます。
                    職員一同、あなたの自立を全力でサポートします。
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--primary-color)', color: 'white', borderRadius: '12px', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem' }}>まずはご相談ください</h3>
              <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
                「自分も入居できるかな？」「どんな支援が受けられるの？」<br />
                少しでも興味を持たれた方は、お気軽にご相談ください。
              </p>
              <a href="/contact" className="btn btn-secondary" style={{ background: 'white', color: 'var(--primary-color)' }}>
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionFlowPage;