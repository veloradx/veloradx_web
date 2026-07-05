import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { apiClient } from "@/lib/api";

export const metadata: Metadata = {
  title: "Hizmetler - VeloraDX",
  description: "VeloraDX hizmetleri: AI entegrasyonu, danışmanlık, yazılım geliştirme",
};

export default async function ServicesPage() {
  let services = [];

  try {
    services = await apiClient.services.getAll();
  } catch (error) {
    console.error("Failed to fetch services:", error);
  }

  return (
    <>

        {/* Hero */}
        <section className="bg-gradient-to-b from-cyan-900/40 via-slate-900 to-slate-900 border-b border-cyan-500/20 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent sm:text-6xl">
              Hizmetlerimiz
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Dijital dönüşümü hızlandıracak kapsamlı AI ve yazılım çözümleri.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        {services.length > 0 && (
          <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-900/50">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service: any) => (
                  <Card
                    key={service.id}
                    className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition flex flex-col group"
                  >
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{getIconEmoji(service.iconName)}</div>
                    <h2 className="text-2xl font-bold text-cyan-400 mb-4">{service.title}</h2>
                    <p className="text-slate-300 mb-8 flex-1">{service.shortDescription}</p>
                    <Link href={`/hizmetler/${service.slug}`}>
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-950 font-semibold">
                        Detayları Gör
                      </Button>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Process Section */}
        <section className="border-t border-cyan-500/20 bg-gradient-to-b from-slate-900/50 to-slate-900 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">Çalışma Süreci</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { num: 1, title: "Danışma", desc: "Ihtiyaçlarınızı dinleriz", icon: "💬" },
                { num: 2, title: "Analiz", desc: "Mevcut sistemi değerlendiririz", icon: "📊" },
                { num: 3, title: "Geliştirme", desc: "Özel çözüm geliştiririz", icon: "🔨" },
                { num: 4, title: "Destekleme", desc: "Sürekli destek sağlarız", icon: "🛠️" }
              ].map((step) => (
                <div key={step.num} className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-lg hover:border-cyan-500/60 transition">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 text-white font-bold text-2xl mb-4 shadow-lg shadow-cyan-500/50">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-cyan-400 text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-300 mb-3">{step.desc}</p>
                  <div className="text-3xl">{step.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-cyan-500/20 border-t border-cyan-500/20 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">
              Hangi hizmet sizin için uygun?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Ekibimiz sizinle birlikte en iyi çözümü belirlemek için konsültasyon verecektir.
            </p>
            <Link href="/iletisim" className="inline-block">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-950 font-semibold px-8 py-6">
                Ücretsiz Danışmanlık Al
              </Button>
            </Link>
          </div>
        </section>

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
