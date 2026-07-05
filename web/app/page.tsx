import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedHero } from "@/components/AnimatedHero";
import { StatCounter } from "@/components/StatCounter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CaseStudyPreview } from "@/components/CaseStudyPreview";
import { TestimonialCard } from "@/components/TestimonialCard";
import { BeforeAfterComparison } from "@/components/BeforeAfterComparison";
import { apiClient } from "@/lib/api";

async function HomePage() {
  let services = [];
  let stats = [];
  let caseStudies = [];

  try {
    services = await apiClient.services.getAll();
    stats = await apiClient.company.getStats();
    caseStudies = await apiClient.caseStudies.getAll();
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  // Default example case study if no data
  if (!caseStudies || caseStudies.length === 0) {
    caseStudies = [
      {
        id: 1,
        slug: "example-case-study",
        title: "Örnek Proje",
        clientName: "Örnek Müşteri A.Ş.",
        summary: "Yazılım geliştirme ve AI integrasyon projesi",
        content: "Müşteri için dijital dönüşüm yapıldı.",
        industry: "Teknoloji",
        publishedAt: new Date().toISOString(),
      },
    ];
  }

  return (
    <>
        <AnimatedHero />

        {/* Stats Section with Counter Animation */}
        {stats.length > 0 && (
          <section className="border-y border-cyan-500/20 bg-gradient-to-r from-cyan-900/20 via-emerald-900/20 to-cyan-900/20 px-4 py-16 sm:px-6 lg:px-8 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                {stats.map((stat: any) => (
                  <StatCounter
                    key={stat.id}
                    end={parseInt(stat.value) || 0}
                    label={stat.label}
                    color={parseInt(stat.id) % 2 === 0 ? "cyan" : "emerald"}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services Section */}
        {services.length > 0 && (
          <ScrollReveal>
            <section className="bg-gradient-to-b from-slate-900/50 via-cyan-900/20 to-slate-900/50 px-4 py-16 sm:px-6 lg:px-8 border-y border-cyan-500/20">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <Badge className="bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-400 border border-cyan-500/50 mb-4">Hizmetlerimiz</Badge>
                <h2 className="text-3xl font-bold text-cyan-400 sm:text-4xl">
                  Neleri Sunuyoruz?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                  Veri güdümlü çözümlerle işletmeniz için en uygun AI stratejisini belirleyoruz.
                </p>
              </div>

              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.slice(0, 3).map((service: any) => (
                  <Card key={service.id} className="p-6 hover:shadow-lg hover:shadow-cyan-500/20 transition border border-cyan-500/20 bg-slate-900/50">
                    <div className="text-3xl mb-4">{getIconEmoji(service.iconName)}</div>
                    <h3 className="text-xl font-bold text-cyan-400">{service.title}</h3>
                    <p className="mt-2 text-slate-300">{service.shortDescription}</p>
                    <Link href={`/hizmetler/${service.slug}`} className="mt-4 inline-block">
                      <Button variant="ghost" className="text-emerald-400 hover:text-emerald-300">
                        Detayları Gör →
                      </Button>
                    </Link>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link href="/hizmetler">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:from-cyan-600 hover:to-emerald-600 font-semibold">
                    Tüm Hizmetleri Gör
                  </Button>
                </Link>
              </div>
            </div>
            </section>
          </ScrollReveal>
        )}

        {/* CTA Section */}
        <ScrollReveal>
          <section className="bg-gradient-to-r from-cyan-900/40 via-emerald-900/40 to-cyan-900/40 border-y border-cyan-500/20 px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold text-cyan-400 sm:text-4xl">
                İşletmenizi Dijitalleştirmeye Hazır mısınız?
              </h2>
              <p className="mt-4 text-lg text-emerald-300">
                Danışmanlığımız tamamen ücretsizdir. Hemen başlayalım.
              </p>
              <Link href="/iletisim" className="mt-8 inline-block">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:from-cyan-600 hover:to-emerald-600 font-semibold">
                  Ücretsiz Danışmanlık Al
                </Button>
              </Link>
            </div>
          </section>
        </ScrollReveal>

        {/* Case Study Section */}
        <ScrollReveal>
            <section className="bg-gradient-to-b from-slate-900/50 to-slate-950 px-4 py-20 sm:px-6 lg:px-8 border-y border-cyan-500/20">
              <CaseStudyPreview
                clientName={caseStudies[0].clientName || "Örnek Müşteri"}
                industry={caseStudies[0].industry || "Teknoloji"}
                problem={caseStudies[0].summary || "Operasyonel zorluklar yaşıyorlardı"}
                solution="VeloraDX'in AI çözümleri ile işlemlerini otomatize ettik ve verimliliği %300 artırdık."
                result={caseStudies[0].content || "Sonuçlar beklentileri aştı ve müşteri maliyet tasarrufu sağladı."}
                resultMetrics={[
                  { label: "Verimlilik Artışı", value: "300%" },
                  { label: "Maliyet Tasarrufu", value: "60%" },
                  { label: "Zaman Tasarrufu", value: "80%" },
                  { label: "ROI", value: "4x" },
                ]}
                slug={caseStudies[0].slug || ""}
              />
            </section>
          </ScrollReveal>

        {/* Testimonials Section */}
        <ScrollReveal>
          <section className="bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-20 sm:px-6 lg:px-8 border-y border-cyan-500/20">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  Müşterilerimiz <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Neler Söylüyor?</span>
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                  Başarılı projelerden sonra müşterilerimizin görüşleri
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <TestimonialCard
                  name="Ahmet Yılmaz"
                  company="TurboShop A.Ş."
                  position="CEO"
                  quote="VeloraDX ile AI entegrasyonumuz satışlarımızı %35 artırdı. Gerçekten transformatif bir deneyim yaşadık."
                  avatar="A"
                  rating={5}
                />
                <TestimonialCard
                  name="Zeynep Kara"
                  company="Acibadem Sağlık"
                  position="IT Direktörü"
                  quote="NLP çözümleri sayesinde idari işlemlerimiz %40 hızlandı. Profesyonel ve destekleyici bir ekip."
                  avatar="Z"
                  rating={5}
                />
                <TestimonialCard
                  name="Murat Çetin"
                  company="LogistiX Türkiye"
                  position="Operasyon Müdürü"
                  quote="Yazılım kalitesi ve müşteri desteği harika. Projemiz zamanında ve bütçe içinde tamamlandı."
                  avatar="M"
                  rating={5}
                />
                <TestimonialCard
                  name="Elif Demir"
                  company="Fintech Solutions"
                  position="Ürün Müdürü"
                  quote="AI destekli otomasyon ile işletme maliyetlerimiz %60 düştü. En iyi yatırımlarımızdan biri."
                  avatar="E"
                  rating={5}
                />
                <TestimonialCard
                  name="Başar Kılıç"
                  company="E-Commerce Plus"
                  position="Kurucu"
                  quote="VeloraDX ekibi sadece kod yazmadı, iş süreçlerimizi de optimize etti. Çok profesyonellerdi."
                  avatar="B"
                  rating={5}
                />
                <TestimonialCard
                  name="Nuriye Aslan"
                  company="Healthcare Innovations"
                  position="Teknoloji Şefi"
                  quote="Danışmanlık hizmetleri çok değerliydi. AI stratejimiz tamamen değişti, sonuçlar umut vaatettici."
                  avatar="N"
                  rating={5}
                />
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Before/After Comparison Section */}
        <ScrollReveal>
          <BeforeAfterComparison />
        </ScrollReveal>
    </>
  );
}

function getIconEmoji(iconName: string): string {
  const icons: Record<string, string> = {
    Brain: "🧠",
    Compass: "🧭",
    Code: "💻",
    Zap: "⚡",
    Rocket: "🚀",
  };
  return icons[iconName] || "✨";
}

export default HomePage;
