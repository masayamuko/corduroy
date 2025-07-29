import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>特定非営利活動法人<br />青少年の自立を支える福岡の会</h3>
            <p>青少年の自立支援を通じて、希望ある未来を創造します。</p>
            <div className="contact-info">
              <p>📧 info@fukuoka-youth.org</p>
              <p>📞 092-XXX-XXXX</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>法人について</h4>
            <ul>
              <li><Link to="/about">理念・ビジョン</Link></li>
              <li><Link to="/about">組織概要</Link></li>
              <li><Link to="/news">活動報告</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>自立援助ホーム</h4>
            <ul>
              <li><Link to="/homes/kanransya">かんらん舎</Link></li>
              <li><Link to="/homes/yui">結ホーム</Link></li>
              <li><Link to="/homes/leap">LEAP</Link></li>
              <li><Link to="/homes/switch">スイッチ</Link></li>
              <li><Link to="/homes/ties">TIES</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>支援・参加</h4>
            <ul>
              <li><Link to="/donation">寄付について</Link></li>
              <li><Link to="/jobs">求人情報</Link></li>
              <li><Link to="/contact">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; 2024 特定非営利活動法人 青少年の自立を支える福岡の会. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <Link to="/privacy">プライバシーポリシー</Link>
            <Link to="/terms">利用規約</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;