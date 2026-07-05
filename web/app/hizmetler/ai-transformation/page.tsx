import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Kurumsal AI Dönüşümü - VeloraDX",
  description: "VeloraDX ile işletmenizin AI dönüşüm yolculuğuna başlayın. 7 adımlı metodoloji ile başarı garantili.",
};

const TRANSFORMATION_STEPS = [
  {
    number: 1,
    title: "Danışmanlık & Değerlendirme",
    description: "Şirketinizi tanıyoruz, mevcut durumu analiz ediyoruz",
    icon: "🔍",
  },
  {
    number: 2,
    title: "Stratejik Plan",
    description: "AI yatırımı için kişiye özel roadmap oluşturuyoruz",
    icon: "📋",
  },
  {
    number: 3,
    title: "Pilot Proje",
    description: "Düşük riskle ilk başarıyı kanıtlıyoruz",
    icon: "🧪",
  },
  {
    number: 4,
    title: "Tam İmplementasyon",
    description: "Sistemleri kurumsal ölçekte dağıtıyoruz",
    icon: "⚙️",
  },
  {
    number: 5,
    title: "Eğitim & Adaptasyon",
    description: "Ekibiniz yeni sistemleri öğreniyor ve uyuyor",
    icon: "📚",
  },
  {
    number: 6,
    title: "Optimizasyon",
    description: "Performansı tuning yaparak maksimize ediyoruz",
    icon: "⚡",
  },
  {
    number: 7,
    title: "Sürekli İyileştirme",
    description: "AI sistemleri evrim geçiriyor, başarı artıyor",
    icon: "🚀",
  },
];

export default function AITransformationPage() {
  return (
    <>

        {/* Hero */}
        <section className="bg-gradient-to-br from-emerald-900/40 via-cyan-800/30 to-slate-900 border-b border-emerald-500/20 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-6xl mb-6">🚀</div>
            <h1 className="text-5xl font-bold text-emerald-400 sm:text-6xl">Kurumsal AI Dönüşümü</h1>
            <p className="mt-8 text-xl text-slate-200">
              Yapay zeka artık seçmeli değil, zorunlu. Rakipleriniz dönüşüyor — sıra sizde.
            </p>
          </div>
        </section>

        {/* NEDEN ŞİMDİ? */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-emerald-500/20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-emerald-400 mb-12 text-center">⏰ NEDEN ŞİMDİ?</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card className="p-6 bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/30">
                <h3 className="text-lg font-bold text-red-400 mb-3">🏃 Rakipleriniz Zaten Dönüşüyor</h3>
                <p className="text-slate-300">
                  Sektörünüzdeki her büyük oyuncu AI'ye yatırım yapıyor. Siz geride kalırken, onlar verimliliği %40+ artırıyor.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30">
                <h3 className="text-lg font-bold text-orange-400 mb-3">⚠️ Hayatta Kalma Meselesi</h3>
                <p className="text-slate-300">
                  Yapay zeka artık bir "avantaj" değil, "hayatta kalma şartı". AI kullanmayan şirketler 5 yıl içinde piyasadan çekilebilir.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30">
                <h3 className="text-lg font-bold text-yellow-400 mb-3">📉 Her Gün Geride Kalıyorsunuz</h3>
                <p className="text-slate-300">
                  AI kullanmayan şirketler, kullananlar karşısında her geçen ay daha fazla geride kalıyor. Maliyet artıyor, hız düşüyor.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30">
                <h3 className="text-lg font-bold text-cyan-400 mb-3">💰 Yatırım Zamanı Şimdi</h3>
                <p className="text-slate-300">
                  AI teknolojileri ucuzlaştı, erişilebilir hale geldi. Şimdi başlamazsanız, 2-3 yıl sonra 3x maliyetle başlamak zorunda kalırsınız.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Metodoloji */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-emerald-500/20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-emerald-400 mb-12 text-center">🎯 Metodolojimiz</h2>

            <Card className="p-8 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border border-emerald-500/30 mb-8">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Her Şirketin İhtiyacı Farklıdır</h3>
              <p className="text-slate-300 mb-6">
                Bazı şirketler müşteri hizmetlerini otomatikleştirmek istiyor. Bazıları operasyonel verimliliği artırmak istiyor.
                Bazıları yeni iş modelleri yaratmak istiyor. Hepsi farklı, hepsinin farklı çözümleri gerekli.
              </p>
              <p className="text-slate-300">
                Biz, "vanilla" çözümlere inanmıyoruz. Her müşteriye özgü, ölçülebilir, gerçek sonuç veren AI dönüşüm programı tasarlarız.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30">
              <h3 className="text-xl font-bold text-purple-400 mb-6">🔧 Ne Yapıyoruz?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">1.</span>
                  <div>
                    <p className="font-semibold text-slate-200">Derinlemesine Analiz</p>
                    <p className="text-sm text-slate-400">İşletmenizi, verilerinizi, iş akışlarınızı pixel-pixel inceliyoruz.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">2.</span>
                  <div>
                    <p className="font-semibold text-slate-200">AI Fırsatları Tanımla</p>
                    <p className="text-sm text-slate-400">En yüksek ROI'ye sahip 3-5 use case belirleyip önceliklendir.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">3.</span>
                  <div>
                    <p className="font-semibold text-slate-200">Özel Çözüm Tasarla</p>
                    <p className="text-sm text-slate-400">Alışılmış araçlar değil, senin ihtiyacına tam oturan AI sistemi kur.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">4.</span>
                  <div>
                    <p className="font-semibold text-slate-200">Ölçülebilir Sonuçlar</p>
                    <p className="text-sm text-slate-400">Maliyet tasarrufu, zaman kazanç, kalite artışı — hepsi ölçülür, izlenir.</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* 7-Step Flowchart */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-emerald-500/20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-emerald-400 mb-12 text-center">🔄 7 Adımlı Dönüşüm Yolculuğu</h2>

            <div className="space-y-6">
              {TRANSFORMATION_STEPS.map((step, idx) => (
                <div key={step.number}>
                  <Card className="p-6 bg-gradient-to-r from-cyan-900/30 to-emerald-900/30 border border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500">
                          <span className="text-2xl">{step.icon}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-emerald-400 mb-2">
                          Adım {step.number}: {step.title}
                        </h3>
                        <p className="text-slate-300">{step.description}</p>
                      </div>
                    </div>
                  </Card>

                  {idx < TRANSFORMATION_STEPS.length - 1 && (
                    <div className="flex justify-center py-3">
                      <div className="text-emerald-500/50 text-2xl animate-bounce">↓</div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Card className="mt-12 p-8 bg-gradient-to-br from-emerald-900/40 to-cyan-900/40 border border-emerald-500/30">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">🎯 Sonuç</h3>
              <p className="text-slate-300 text-lg">
                7 adım sonunda, AI artık sizin iş modellirizi ileriye taşıyan, her gün değer üretilen bir sistem haline geliyor.
                Devam eden destek ve optimizasyonla, bu değer her geçen ay büyüyor.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-emerald-400 mb-8">Hazır mısınız?</h2>
            <p className="text-slate-300 mb-8">
              Dönüşüm yolculuğunuz bugün başlasın. İlk danışmanlık tamamen ücretsiz.
            </p>
            <Link href="/iletisim">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:from-cyan-600 hover:to-emerald-600 font-semibold">
                💬 Bize Ulaşın - Ücretsiz Danışmanlık
              </Button>
            </Link>
            <p className="mt-8">
              <Link href="/hizmetler" className="text-cyan-400 hover:text-cyan-300 transition">
                ← Tüm Hizmetlere Dön
              </Link>
            </p>
          </div>
        </section>

    </>
  );
}
