import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Vizyonumuz - VeloraDX",
  description: "VeloraDX'in vizyonu: Türkiye'deki tüm işletmelerin AI teknolojisinden yararlanması.",
};

export default function VisionPage() {
  return (
    <>

        {/* Hero */}
        <section className="bg-gradient-to-br from-emerald-900/40 via-emerald-800/30 to-slate-900 border-b border-emerald-500/20 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-6xl mb-6">🚀</div>
            <h1 className="text-5xl font-bold text-emerald-400 sm:text-6xl">Vizyonumuz</h1>
            <p className="mt-8 text-xl text-slate-200 leading-relaxed">
              Türkiye'deki tüm işletmelerin yapay zeka teknolojisinden yararlanabildiği,
              erişilebilir, ekonomik ve etkili AI çözümleri sunmak.
            </p>
          </div>
        </section>

        {/* Vision Details */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-emerald-500/20">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              <Card className="p-8 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border border-emerald-500/30">
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">🌟 Büyük Resim</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Gelecek, yapay zekanın işletme karar almada merkezi rol oynadığı bir dünyada başlıyor.
                    VeloraDX olarak, bu geleceğin Türkiye'de herkes için erişilebilir olmasını istiyoruz.
                  </p>
                  <p>
                    Vizyonumuz, büyük kurumlardan startup'lara, şehir merkezlerinden kırsal alanlara kadar
                    her yerdeki işletmenin AI'nin gücünden yararlanması.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">📈 2030 Hedefleri</h2>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-cyan-400">→</span>
                    <span><strong>1000+ İşletmeye Hizmet:</strong> Küçük, orta ve büyük ölçekli şirketlerin hepsi</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">→</span>
                    <span><strong>500+ İş Yaratma:</strong> Yeni teknoloji mühendisleri ve AI uzmanları</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">→</span>
                    <span><strong>Türkiye'nin İhracat Rakamlarını %10 Artırmak:</strong> AI ile verimliliğe</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400">→</span>
                    <span><strong>Bölgesel Lider Olmak:</strong> Orta Doğu ve Balkanlara Genişlemek</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">💚 Sosyal Sorumluluk</h2>
                <p className="text-slate-300 mb-4">
                  AI teknolojisi güçlüdür — biz bunu sorumlu şekilde kullanmaya inanıyoruz:
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <span>✓</span>
                    <span><strong>Etik AI:</strong> Önyargısız, şeffaf ve denetlenebilir sistemler</span>
                  </li>
                  <li className="flex gap-3">
                    <span>✓</span>
                    <span><strong>Çalışan Güçlendirmesi:</strong> İnsan iş gücünü değiştirmek değil, geliştirmek</span>
                  </li>
                  <li className="flex gap-3">
                    <span>✓</span>
                    <span><strong>Eğitim & Öğretim:</strong> Türkiye'de AI yetenek havuzunu geliştirmek</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30">
                <h2 className="text-2xl font-bold text-purple-400 mb-4">🎓 Yolculuğumuz</h2>
                <p className="text-slate-300 mb-6">
                  Vizyona ulaşmak için bugünün misyonunu yapıyoruz:
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">1️⃣</div>
                    <p className="text-sm text-slate-300">Öğren</p>
                  </div>
                  <div className="text-purple-400">→</div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">2️⃣</div>
                    <p className="text-sm text-slate-300">Uygula</p>
                  </div>
                  <div className="text-purple-400">→</div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">3️⃣</div>
                    <p className="text-sm text-slate-300">Ölçeklendir</p>
                  </div>
                  <div className="text-purple-400">→</div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">4️⃣</div>
                    <p className="text-sm text-slate-300">Etki Yarat</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission Link */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-emerald-400 mb-8">Nasıl Yardımcı Olabiliriz?</h2>
            <p className="text-slate-300 mb-8">
              Vizyonumuz büyük ama misyonumuz somut. Bugün işletmenizi AI ile dönüştürmeye başlayın.
            </p>
            <Link href="/iletisim">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:from-cyan-600 hover:to-emerald-600 font-semibold">
                💬 Bize Ulaşın
              </Button>
            </Link>
            <p className="mt-8">
              <Link href="/hakkimizda" className="text-cyan-400 hover:text-cyan-300 transition">
                ← Hakkımıza Dön
              </Link>
            </p>
          </div>
        </section>

    </>
  );
}
