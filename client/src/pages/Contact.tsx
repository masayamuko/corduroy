import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-accent/20 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                お問い合わせ
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                お客様のストーリーをお聞かせください
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-8">
              
              {/* LINE Contact Card - Primary */}
              <Card className="border-2 border-primary/30 bg-primary/5">
                <CardContent className="p-8 md:p-10 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <MessageCircle className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-4 flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        公式LINEでお気軽にご相談ください
                      </h2>
                      <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                        お問い合わせは<span className="font-semibold text-primary">公式LINEアカウント</span>で承っております。<br />
                        ちょっとした質問から具体的なご相談まで、お気軽にメッセージをお送りください。
                      </p>
                      <div className="pt-4">
                        <a 
                          href="https://line.me/R/ti/p/@439yzwuq?oat__id=6162687" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Button size="lg" className="text-lg px-8 py-6">
                            <MessageCircle className="mr-2 h-5 w-5" />
                            公式LINEで問い合わせる
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone Notice Card - Secondary */}
              <Card className="border border-border">
                <CardContent className="p-8 md:p-10 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-muted rounded-lg flex-shrink-0">
                      <Phone className="h-7 w-7 text-muted-foreground" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                        お電話について
                      </h3>
                      <div className="space-y-3 text-base text-muted-foreground leading-relaxed">
                        <p>
                          申し訳ございませんが、現在<span className="font-medium text-foreground">お電話でのお問い合わせには対応しておりません</span>。
                        </p>
                        <p>
                          営業電話が大変多いため、お電話にはAI音声で自動応答させていただいております。<br />
                          お客様からのご相談は公式LINEでしっかりとお伺いいたしますので、ぜひLINEからお声がけください。お待ちしております。
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="text-center pt-8">
                <p className="text-sm text-muted-foreground">
                  ご返信には1〜2営業日いただく場合がございます。<br />
                  お急ぎの方も、まずは公式LINEからお問い合わせください。
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
