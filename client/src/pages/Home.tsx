import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Heart, Sparkles, Users, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-accent/20 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                あたたかみのある<br />
                <span className="text-primary">AI活用</span>を！
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                ストーリーを大事にしたサポート
              </p>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                株式会社コールテンは、中小企業の皆様に寄り添い、<br />
                AI導入・IT活用を温かくサポートする企業です。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/service">
                  <Button size="lg" className="text-lg px-8">
                    サービス詳細を見る
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    お問い合わせ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  OUR STORY
                </h2>
                <p className="text-lg text-muted-foreground">
                  コールテンくんの物語から生まれた企業理念
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Heart className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">失ったボタンを探す冒険</h3>
                    </div>
                    <p className="text-muted-foreground">
                      絵本「くまのコールテンくん」は、失ったボタンを探して冒険する物語です。
                      完璧でなくても、挑戦することに価値がある。
                      この想いが、私たちの企業理念の核となっています。
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Users className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold">家族のような温かさ</h3>
                    </div>
                    <p className="text-muted-foreground">
                      代表の妹・りさが、父の代わりにコールテンくんのぬいぐるみを食卓に座らせていた温かい思い出。
                      その家族的な愛情を、企業文化として大切にしています。
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center p-8 bg-primary/5 rounded-lg">
                <p className="text-lg text-foreground/90 italic">
                  「挑戦の結果に関わらず、そのプロセス自体が価値となり、<br />
                  ストーリーとして人を惹きつける魅力になっている」
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  - 株式会社コールテン 企業理念より
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  WHAT WE DO
                </h2>
                <p className="text-lg text-muted-foreground">
                  私たちが大切にしていること
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">AI導入への不安、ありませんか？</h3>
                    <p className="text-muted-foreground">
                      「AIって難しそう」「何から始めればいいかわからない」「導入したけど使いこなせない」
                      そんな中小企業の皆様の声をたくさん聞いてきました。
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Sparkles className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold">コールテンのアプローチ</h3>
                        <p className="text-muted-foreground">
                          技術導入よりも、まず「人」に寄り添います。
                          お客様の事業や課題を深く理解し、一緒に最適な解決策を見つけていきます。
                          完璧を求めず、小さな一歩から始めることを大切にしています。
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="text-center">
                    <CardContent className="p-6 space-y-3">
                      <div className="text-4xl font-bold text-primary">01</div>
                      <h4 className="font-semibold">寄り添う姿勢</h4>
                      <p className="text-sm text-muted-foreground">
                        お客様のペースに合わせた丁寧なサポート
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="p-6 space-y-3">
                      <div className="text-4xl font-bold text-primary">02</div>
                      <h4 className="font-semibold">プロセス重視</h4>
                      <p className="text-sm text-muted-foreground">
                        結果よりも成長の過程を大切に
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="p-6 space-y-3">
                      <div className="text-4xl font-bold text-primary">03</div>
                      <h4 className="font-semibold">長期的関係</h4>
                      <p className="text-sm text-muted-foreground">
                        一時的な導入ではなく継続的なパートナーシップ
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  SERVICES
                </h2>
                <p className="text-lg text-muted-foreground">
                  お客様に合わせた3つのサービス
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-primary">AI活用コーチング</h3>
                    <p className="text-sm text-muted-foreground">
                      月1〜2回の定期的な打ち合わせで、AI活用を着実に進めていきます。
                    </p>
                    <div className="pt-4 border-t">
                      <p className="text-2xl font-bold text-foreground">¥30,000〜</p>
                      <p className="text-sm text-muted-foreground">月額</p>
                    </div>
                    <Link href="/service">
                      <Button variant="outline" className="w-full">
                        詳細を見る
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border-2 border-primary/30">
                  <CardContent className="p-6 space-y-4">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      おすすめ
                    </div>
                    <h3 className="text-xl font-bold text-primary">AI導入パッケージ</h3>
                    <p className="text-sm text-muted-foreground">
                      6ヶ月間の伴走支援で、AI導入から自走までをサポートします。
                    </p>
                    <div className="pt-4 border-t">
                      <p className="text-2xl font-bold text-foreground">¥1,500,000</p>
                      <p className="text-sm text-muted-foreground">6ヶ月パッケージ</p>
                    </div>
                    <Link href="/service">
                      <Button className="w-full">
                        詳細を見る
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-primary">単発サービス</h3>
                    <p className="text-sm text-muted-foreground">
                      WEBサイト制作やAI講座など、必要なサービスを単発でご利用いただけます。
                    </p>
                    <div className="pt-4 border-t">
                      <p className="text-2xl font-bold text-foreground">¥50,000〜</p>
                      <p className="text-sm text-muted-foreground">都度払い</p>
                    </div>
                    <Link href="/service">
                      <Button variant="outline" className="w-full">
                        詳細を見る
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                まずはお気軽にご相談ください
              </h2>
              <p className="text-lg text-muted-foreground">
                AI導入の第一歩を、私たちと一緒に踏み出しませんか？<br />
                お客様のストーリーをお聞かせください。
              </p>
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8">
                  お問い合わせはこちら
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

