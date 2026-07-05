import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Misyonumuz - VeloraDX",
  description: "VeloraDX'in misyonu: Yapay zeka ile işletmelerin dijital dönüşümünü hızlandırmak.",
};

export default function MissionPage() {
  return (
    <>

        {/* Hero */}
        <section className="bg-gradient-to-br from-cyan-900/40 via-cyan-800/30 to-slate-900 border-b border-cyan-500/20 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-6xl mb-6">🎯</div>
            <h1 className="text-5xl font-bold text-cyan-400 sm:text-6xl">Misyonumuz</h1>
            <p className="mt-8 text-xl text-slate-200 leading-relaxed">
              Yapay zeka ve modern teknolojileri kullanarak işletmelerin dijital dönüşüm yolculuğunu hızlandırmak,
              verimliliğini artırmak ve rekabetçi avantaj sağlamak.
            </p>
          </div>
        </section>

        {/* Mission Details */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-cyan-500/20">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              <Card className="p-8 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">💡 Temel Prensiplerimiz</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    VeloraDX olarak, her işletmenin yapay zeka teknolojisinden faydalanması gerektiğine inanıyoruz.
                    Misyonumuz, bu teknolojiyi erişilebilir, uygulanabilir ve etkin bir şekilde sunmaktır.
                  </p>
                  <p>
                    Dijital dönüşüm sadece teknoloji değildir — bu, işletmelerin nasıl çalıştığını, kararlar aldığını
                    ve müşterilerine hizmet ettiğini yeniden tasarlamaktır.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border border-emerald-500/30">
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">🚀 Hedeflerimiz</h2>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span><strong>Hızlı Dönüşüm:</strong> İşletmelerin AI'ye geçişini 3 ay içinde tamamlamak</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span><strong>Ölçülebilir Sonuçlar:</strong> En az %40 verimlilik artışı garantisi</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span><strong>Uzun Dönem İlişkiler:</strong> Danışmanlıktan sonra da destek ve geliştirme</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span><strong>Etik AI:</strong> Sorumlu ve şeffaf yapay zeka uygulamaları</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30">
                <h2 className="text-2xl font-bold text-purple-400 mb-4">🎯 Müşteri Odaklılık</h2>
                <p className="text-slate-300 mb-4">
                  Misyonumuzun merkezinde müşteri başarısı yer alır. Her projede:
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <span>→</span>
                    <span>Müşterinin iş amaçlarını tam olarak anlıyoruz</span>
                  </li>
                  <li className="flex gap-3">
                    <span>→</span>
                    <span>Özel çözümler tasarlıyoruz, standart çözümler değil</span>
                  </li>
                  <li className="flex gap-3">
                    <span>→</span>
                    <span>Sürekli iyileştirme ve optimizasyon sağlıyoruz</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision Link */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Sonra Ne?</h2>
            <p className="text-slate-300 mb-8">
              Misyonumuz bize rehberlik ederken, vizyonumuz bizi ileriye taşır.
            </p>
            <Link href="/hakkimizda/vizyon">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:from-cyan-600 hover:to-emerald-600 font-semibold">
                🚀 Vizyonumuzu Keşfet
              </Button>
            </Link>
            <p className="mt-8">
              <Link href="/hakkimizda" className="text-emerald-400 hover:text-emerald-300 transition">
                ← Hakkımıza Dön
              </Link>
            </p>
          </div>
        </section>

    </>
  );
}
