import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Saha Ziyareti İle Keşif - VeloraDX",
  description: "VeloraDX saha danışmanları işletmenizi yerinde analiz eder, sorunları bulur ve AI fırsatlarını keşfeder.",
};

const DISCOVERY_PHASES = [
  {
    phase: "Hazırlık",
    title: "Önceden Veri Toplama",
    items: [
      "Şirket geçmişi ve iş modeli incelemesi",
      "Temel metrikler ve KPI'lar ile tanışma",
      "Önceden mülakatlar ve anketler",
    ],
    icon: "📋",
  },
  {
    phase: "Saha",
    title: "Yerinde Gözlemler",
    items: [
      "Operasyon alanlarında doğrudan gözlem (1-2 gün)",
      "Çalışanlarla informal sohbetler",
      "İş akışlarının video kaydı ve analizi",
      "Darboğazları ve verimsizlikleri tespit",
    ],
    icon: "👁️",
  },
  {
    phase: "Analiz",
    title: "Veri & İçgörü",
    items: [
      "Toplanan tüm verileri yapılandırıyoruz",
      "Gizli sorunları ve fırsatları buluyoruz",
      "AI ile çözülebilecek use case'leri sıralıyoruz",
      "Potansiyel ROI hesaplayıyoruz",
    ],
    icon: "🔬",
  },
  {
    phase: "Sunum",
    title: "Sonuçlar & Yol Haritası",
    items: [
      "Detaylı keşif raporunu sunuyoruz",
      "Önceliklendirilen AI fırsatlarını açıklıyoruz",
      "Kişiye özel 12 aylık yol haritası oluşturuyoruz",
      "Sorulara canlı cevap veriyoruz",
    ],
    icon: "🎯",
  },
];

const DISCOVERY_CHECKLIST = [
  "İnsan gücü: El ile yapılan işlerin otomasyonu",
  "Dokümantasyon: Kağıt veya Excel tabanlı işlerin dijitalleştirilmesi",
  "Müşteri İlişkileri: CRM'e aktarılabilecek veriler ve iş akışları",
  "Kalite Kontrol: Hataları erken yakalayan AI sistemleri",
  "Tedarik Zinciri: Tahmin ve optimizasyon fırsatları",
  "Müşteri Desteği: Chatbot ve otomasyonla cevap verilebilecek sorunlar",
  "İnsan Kaynakları: İşe alım ve performans değerlendirme otomasyonları",
  "Finansal: Ödeme tahminleri ve dolandırıcılık tespiti",
];

export default function FieldDiscoveryPage() {
  return (
    <>

        {/* Hero */}
        <section className="bg-gradient-to-br from-cyan-900/40 via-slate-800/30 to-slate-900 border-b border-cyan-500/20 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-6xl mb-6">🔍</div>
            <h1 className="text-5xl font-bold text-cyan-400 sm:text-6xl">Saha Ziyareti İle Keşif</h1>
            <p className="mt-8 text-xl text-slate-200">
              AI fırsatları masada değil, sahada bulunur. Biz geliyoruz, görüyoruz, çözüyoruz.
            </p>
          </div>
        </section>

        {/* Neden Saha Ziyareti? */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-cyan-500/20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-cyan-400 mb-12 text-center">❓ Neden Saha Ziyareti?</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card className="p-6 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30">
                <h3 className="text-lg font-bold text-cyan-400 mb-3">📊 Masadaki Veriler Yalan Söyler</h3>
                <p className="text-slate-300">
                  "3 gün içinde sipariş işlenir" diyor sistem. Ama gerçekte 1 kişi haftasını harcıyor manuel işler yaparak.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border border-emerald-500/30">
                <h3 className="text-lg font-bold text-emerald-400 mb-3">👥 Çalışanlar Gerçeği Bilir</h3>
                <p className="text-slate-300">
                  Ekip her gün problemlerle boğuşuyor. Ama raporlarda bunlar gözükmeyen yeraltı sorunları.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30">
                <h3 className="text-lg font-bold text-purple-400 mb-3">🎯 AI Fırsatları Ortada</h3>
                <p className="text-slate-300">
                  Sahada çalışan danışman, "buraya bir chatbot, buraya bir tahmin modeli" diye fırsatları hemen görüyor.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30">
                <h3 className="text-lg font-bold text-orange-400 mb-3">💪 Ekip Güveni Kazanır</h3>
                <p className="text-slate-300">
                  Masada olanlar "bu işlemsizleştirilmez" der. Ama danışman masaya çıkıp gösteriyor — mümkün ve ucuz.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Metodoloji */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-cyan-500/20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-cyan-400 mb-12 text-center">🔄 Keşif Metodolojisi</h2>

            <div className="space-y-6">
              {DISCOVERY_PHASES.map((phase, idx) => (
                <div key={phase.phase}>
                  <Card className="p-6 bg-gradient-to-r from-slate-900/50 to-cyan-900/30 border border-cyan-500/30">
                    <div className="flex gap-4 items-start mb-4">
                      <div className="text-4xl">{phase.icon}</div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">{phase.phase}</p>
                        <h3 className="text-xl font-bold text-cyan-400">{phase.title}</h3>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-12">
                      {phase.items.map((item, i) => (
                        <li key={i} className="text-sm text-slate-300 flex gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  {idx < DISCOVERY_PHASES.length - 1 && (
                    <div className="flex justify-center py-3">
                      <div className="text-cyan-500/50 text-2xl">↓</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Keşif Kontrol Listesi */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-cyan-500/20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">📋 Saha Ziyaretinde Neler Arıyoruz?</h2>
            <p className="text-slate-300 text-center mb-8">
              Bu alanlar, tipik olarak en yüksek AI fırsat taşıyan yerlerdir:
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {DISCOVERY_CHECKLIST.map((item, idx) => (
                <Card key={idx} className="p-4 bg-slate-900/50 border border-cyan-500/20 hover:border-cyan-400/50 transition-all">
                  <div className="flex gap-3">
                    <span className="text-emerald-400 font-bold flex-shrink-0">✓</span>
                    <p className="text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-8 p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30">
              <p className="text-slate-300">
                <span className="text-purple-400 font-semibold">💡 Not:</span> Her işletme farklı olduğu için, keşif sürecinde önceden bilmediğimiz fırsatlar da buluyoruz.
                Saha danışmanı, "bu kullanım alanında da AI işe yarayabilir" diye bazen overline şeyler keşfeder.
              </p>
            </Card>
          </div>
        </section>

        {/* Sonuç */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-cyan-500/20">
          <div className="mx-auto max-w-4xl">
            <Card className="p-8 bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 border border-cyan-500/30">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">🎯 Sonuç</h2>
              <p className="text-slate-300 mb-4">
                Saha Ziyareti İle Keşif, soyut danışmanlık değildir. Biz:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-2">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Görüyoruz:</strong> Masada görünmeyeni sahada buluruz</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Söylüyoruz:</strong> Net, ölçülebilir, uygulanabilir öneriler sunuyoruz</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Yol gösteriyoruz:</strong> Tam AI dönüşüm yol haritası oluşturuyoruz</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Keşif Başlasın mı?</h2>
            <p className="text-slate-300 mb-8">
              2-3 saatlik bir saha ziyareti sonrası, gizli AI fırsatlarınız ortaya çıkacak.
            </p>
            <Link href="/iletisim">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:from-cyan-600 hover:to-emerald-600 font-semibold">
                📍 Saha Ziyareti Talep Et
              </Button>
            </Link>
            <p className="mt-8">
              <Link href="/hizmetler" className="text-emerald-400 hover:text-emerald-300 transition">
                ← Tüm Hizmetlere Dön
              </Link>
            </p>
          </div>
        </section>

    </>
  );
}
