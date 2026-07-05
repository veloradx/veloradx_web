import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { apiClient } from "@/lib/api";

export const metadata: Metadata = {
  title: "Hakkımızda - VeloraDX",
  description: "VeloraDX hakkında bilgi. Ekip, misyon ve vizyonumuzı öğrenin.",
};

export default async function AboutPage() {
  let stats = [];

  try {
    stats = await apiClient.company.getStats();
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  return (
    <>

        {/* Hero */}
        <section className="bg-gradient-to-b from-cyan-900/30 to-slate-900 border-b border-cyan-500/20 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-cyan-400 sm:text-5xl">Hakkımızda</h1>
            <p className="mt-6 text-lg text-slate-300">
              20+ yıllık deneyim ile AI dönüşümünde Türkiye'nin öncü kurumlarından biriyiz.
            </p>
          </div>
        </section>

        {/* Mission & Vision - Link to separate pages */}
        <section className="border-b border-cyan-500/20 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <Link href="/hakkimizda/misyon">
                <Card className="p-6 bg-gradient-to-br from-cyan-900/40 to-slate-900/40 border border-cyan-500/40 hover:border-cyan-400/80 hover:shadow-lg hover:shadow-cyan-500/30 transition-all cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🎯</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-cyan-400 group-hover:text-cyan-300 transition mb-2">Misyonumuz</h3>
                      <p className="text-sm text-slate-300 mb-3 line-clamp-2">
                        Yapay zeka ve modern teknolojileri kullanarak işletmelerin dijital dönüşüm yolculuğunu hızlandırmak.
                      </p>
                      <p className="text-xs text-emerald-400 font-medium group-hover:text-emerald-300 transition">Devamını Oku →</p>
                    </div>
                  </div>
                </Card>
              </Link>

              <Link href="/hakkimizda/vizyon">
                <Card className="p-6 bg-gradient-to-br from-emerald-900/40 to-slate-900/40 border border-emerald-500/40 hover:border-emerald-400/80 hover:shadow-lg hover:shadow-emerald-500/30 transition-all cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🚀</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-emerald-400 group-hover:text-emerald-300 transition mb-2">Vizyonumuz</h3>
                      <p className="text-sm text-slate-300 mb-3 line-clamp-2">
                        Türkiye'deki tüm işletmelerin AI teknolojisinden yararlanabildiği, erişilebilir çözümler sunmak.
                      </p>
                      <p className="text-xs text-cyan-400 font-medium group-hover:text-cyan-300 transition">Devamını Oku →</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-y border-cyan-500/20 bg-slate-900/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12">Değerlerimiz</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Mühendislik Özellikleri", desc: "Teknik mükemmellik ve best practices" },
                { title: "İnovasyon", desc: "Sürekli yeni teknoloji ve yöntemler keşfetme" },
                { title: "Müşteri Odaklılık", desc: "Müşteri başarısı bizim başarımız" },
                { title: "Etik Rehberlik", desc: "Sorumlu AI ve veri kullanımı" }
              ].map((value, idx) => (
                <Card key={idx} className="p-6 bg-slate-900/50 border border-cyan-500/20">
                  <h3 className="font-bold text-emerald-400 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-300">{value.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* Stats */}
        {stats.length > 0 && (
          <section className="border-y border-cyan-500/20 bg-gradient-to-r from-cyan-900/30 via-emerald-900/30 to-cyan-900/30 px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12">Başarı Sayıları</h2>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                {stats.map((stat: any) => (
                  <div key={stat.id} className="text-center">
                    <p className="text-4xl font-bold text-emerald-400">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

    </>
  );
}
