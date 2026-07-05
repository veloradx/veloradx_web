import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { apiClient } from "@/lib/api";

export const metadata: Metadata = {
  title: "Kariyer - VeloraDX",
  description: "VeloraDX'e katılın. Açık pozisyonlar ve kariyer fırsatları.",
};

export const revalidate = 3600; // ISR

export default async function CareersPage() {
  let jobs = [];

  try {
    jobs = await apiClient.careers.getAll();
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
  }

  return (
    <>

        {/* Hero */}
        <section className="bg-gradient-to-b from-cyan-900/30 to-slate-900 border-b border-cyan-500/20 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-cyan-400 sm:text-5xl">Kariyer</h1>
            <p className="mt-6 text-lg text-slate-300">
              VeloraDX'in yükselen yıldız ekibine katılın. Yaratıcılık ve yenilikle dolu bir ortamda çalışın.
            </p>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="border-y border-cyan-500/20 bg-slate-900/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-cyan-400 text-center mb-12">Neden VeloraDX?</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { emoji: "🧠", title: "Sürekli Öğrenme", desc: "AI ve teknoloji alanında kendini geliştir" },
                { emoji: "🌍", title: "Uzaktan Çalışma", desc: "Konumundan bağımsız olarak çalış" },
                { emoji: "💪", title: "Güçlü Takım", desc: "Endüstri deneyimli profesyonellerle birlikte çalış" },
                { emoji: "🚀", title: "İmpakt", desc: "Gerçek sorunları çöz ve fark yarat" }
              ].map((item, idx) => (
                <Card key={idx} className="p-6 text-center border border-cyan-500/20 bg-slate-900/50">
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3 className="font-bold text-emerald-400 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="border-b border-cyan-500/20 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-cyan-400 mb-12">Açık Pozisyonlar</h2>

            {jobs.length > 0 ? (
              <div className="space-y-6">
                {jobs.map((job: any) => (
                  <Link key={job.id} href={`/kariyer/${job.slug}`}>
                    <Card className="p-8 hover:shadow-lg hover:shadow-cyan-500/20 transition cursor-pointer border border-cyan-500/20 bg-slate-900/50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-cyan-400 mb-2">{job.title}</h3>
                          <div className="flex gap-3 mb-4 flex-wrap">
                            <Badge className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/50">{job.department}</Badge>
                            <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/50">📍 {job.location}</Badge>
                            <Badge className="bg-purple-500/20 text-purple-400 border border-purple-500/50">{job.employmentType}</Badge>
                          </div>
                        </div>
                        <Button className="ml-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:from-cyan-600 hover:to-emerald-600 font-semibold">
                          Başvur
                        </Button>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center border border-cyan-500/20 bg-slate-900/50">
                <p className="text-slate-300">Şu an açık pozisyon yok. Lütfen daha sonra kontrol edin.</p>
              </Card>
            )}

            {/* Not Hiring CTA */}
            {jobs.length === 0 && (
              <Card className="mt-12 p-12 bg-gradient-to-r from-cyan-900/30 to-emerald-900/30 text-center border border-cyan-500/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Şu an uygun pozisyon yok mu?</h3>
                <p className="text-slate-300 mb-6">
                  CV'nizi gönderin ve gelecekteki fırsatlardan haberdar olun.
                </p>
                <Link href="/iletisim">
                  <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:from-cyan-600 hover:to-emerald-600 font-semibold">
                    CV Gönder
                  </Button>
                </Link>
              </Card>
            )}
          </div>
        </section>

    </>
  );
}
