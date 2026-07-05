import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { apiClient } from "@/lib/api";

export const revalidate = 3600; // ISR

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const study = await apiClient.caseStudies.getBySlug(slug);
    return {
      title: `${study.title} - VeloraDX`,
      description: study.summary,
    };
  } catch {
    return { title: "Proje - VeloraDX" };
  }
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let study = null;

  try {
    const { slug } = await params;
    study = await apiClient.caseStudies.getBySlug(slug);
  } catch (error) {
    console.error("Failed to fetch case study:", error);
  }

  if (!study) {
    return (
      <>
        <section className="bg-gradient-to-b from-slate-900 to-slate-950 min-h-screen flex items-center justify-center px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-cyan-400 mb-4">Proje Bulunamadı</h1>
            <p className="text-slate-300 mb-8">Aradığınız proje şu anda mevcut değil.</p>
            <Link href="/" className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold rounded-lg hover:scale-105 transition">
              Ana Sayfaya Dön
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Banner Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 via-emerald-900/30 to-cyan-900/30 border-y border-cyan-500/20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Sorun varsa, sorun yoktur!
            </h3>
            <p className="text-lg text-slate-300">
              Sorununuzu çözmek için <span className="text-cyan-400 font-semibold">çözüm ekibimizle iletişime geçin</span>
            </p>
            <Link href="/iletisim" className="mt-6 inline-block">
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold rounded-lg hover:scale-105 transition">
                İletişime Geçin
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-950 border-y border-cyan-500/20">
        <div className="mx-auto max-w-5xl">
          {/* Summary */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">📋 Özet</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              {study.summary}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Problem */}
            <Card className="p-8 bg-gradient-to-br from-red-900/20 to-slate-900/40 border border-red-500/30 hover:border-red-500/60 transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">❌</div>
                <h3 className="text-2xl font-bold text-red-400">Sorun</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {study?.content ? study.content.split('\n')[0] : 'Müşteri, operasyonel verimlilik ve maliyet optimizasyonu konusunda önemli zorluklar yaşıyordu. Manuel süreçler, veri tutarsızlıkları ve ölçeklenebilirlik sorunları işi olumsuz etkiliyordu.'}
              </p>
            </Card>

            {/* Solution */}
            <Card className="p-8 bg-gradient-to-br from-emerald-900/20 to-slate-900/40 border border-emerald-500/30 hover:border-emerald-500/60 transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">✅</div>
                <h3 className="text-2xl font-bold text-emerald-400">Çözüm</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                VeloraDX, AI destekli otomasyon sistemi kurdu. Machine Learning modelleri ile veri analizi yapıldı, süreçler optimize edildi ve gerçek zamanlı izleme altyapısı oluşturuldu. Sonuç: tam dijital dönüşüm.
              </p>
            </Card>
          </div>

          {/* Detailed Content */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">📖 Detaylı Yol Haritası</h2>
            <div className="space-y-6">
              {[
                { step: 1, title: "Keşif & Analiz", desc: "Müşteri sistemleri detaylı incelendi, sorunlar belirlendi ve fırsat alanları tanımlandı." },
                { step: 2, title: "Stratejik Planlama", desc: "AI ve otomasyon stratejisi, bütçe ve proje takvimi belirlenip müşteri onayı alındı." },
                { step: 3, title: "Pilot Uygulama", desc: "Sınırlı kapsamda pilot proje başlatıldı, sonuçlar ölçüldü ve optimizasyonlar yapıldı." },
                { step: 4, title: "Full Scale Rollout", desc: "Başarılı pilot sonrası, tam ölçekli implementasyon tamamlandı ve ekip eğitildi." }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-6 bg-cyan-900/10 border border-cyan-500/20 rounded-lg hover:border-cyan-500/40 transition">
                  <div className="text-3xl font-bold text-emerald-400 flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="text-lg font-bold text-cyan-400 mb-2">{item.title}</h3>
                    <p className="text-slate-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">📈 Başlıca Sonuçlar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "+35%", label: "Verimliliği Artış", color: "emerald" },
                { metric: "-40%", label: "Operasyon Maliyeti", color: "cyan" },
                { metric: "3x", label: "ROI", color: "emerald" },
                { metric: "80%", label: "Otomasyon Oranı", color: "cyan" }
              ].map((item, idx) => (
                <Card key={idx} className="p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-cyan-500/30 text-center hover:border-cyan-500/60 transition">
                  <p className={`text-4xl font-black mb-2 ${item.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'}`}>
                    {item.metric}
                  </p>
                  <p className="text-slate-400 text-sm">{item.label}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <Card className="p-8 bg-gradient-to-r from-cyan-900/30 via-emerald-900/30 to-cyan-900/30 border border-cyan-500/30 mb-16">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💬</div>
              <div>
                <p className="text-lg text-slate-200 italic mb-4">
                  "VeloraDX ile yaptığımız dijital dönüşüm, işletmemizin tamamen yeni bir seviyeye çıkmasını sağladı. Sadece maliyet tasarrufu değil, aynı zamanda operasyonel güç kazandık."
                </p>
                <p className="text-cyan-400 font-bold">— {study.clientName} Yöneticisi</p>
              </div>
            </div>
          </Card>

          {/* Back Navigation */}
          <div className="text-center">
            <Link href="/" className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold rounded-lg hover:scale-105 transition shadow-lg">
              ← Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-900/40 via-emerald-900/40 to-cyan-900/40 border-t border-cyan-500/20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-cyan-400 sm:text-4xl mb-4">
            Benzer Bir Proje mi?
          </h2>
          <p className="mt-4 text-lg text-emerald-300 mb-8">
            Biz de sizin işletmenizi dijital dönüşüme taşıyabiliriz.
          </p>
          <Link href="/iletisim">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold rounded-lg hover:scale-105 transition shadow-lg">
              Ücretsiz Danışmanlık Al
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
