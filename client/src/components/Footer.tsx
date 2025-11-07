import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">株式会社コールテン</h3>
            <p className="text-sm text-muted-foreground">
              あたたかみのあるAI活用を！<br />
              ストーリーを大事にしたサポート
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">ナビゲーション</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    HOME
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/company">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    COMPANY
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/service">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    SERVICE
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">サービス</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">AI活用コーチング</li>
              <li className="text-sm text-muted-foreground">AI導入パッケージ</li>
              <li className="text-sm text-muted-foreground">ブランディング支援</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">お問い合わせ</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://masayamuko.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  ウェブサイト
                </a>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    お問い合わせフォーム
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} 株式会社コールテン (Corduroy Corporation). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

