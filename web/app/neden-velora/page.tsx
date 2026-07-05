import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Neden VeloraDX - VeloraDX",
  description: "VeloraDX'i seçmenin avantajları. Sürekli öğrenme, uzaktan çalışma, güçlü ekip ve gerçek etki.",
};

export default function NiçinVeloraDX() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cyan-900/30 to-slate-900 border-b border-cyan-500/20 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-white sm:text-6xl">
            Neden <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">VeloraDX?</span>
          </h1>
          <p className="mt-8 text-xl text-slate-300 leading-relaxed">
            Yaratıcılık ve yenilikle dolu bir ortamda, sektörün en iyileriyle birlikte çalışın.
            <br />
            Teknoloji ve insanı bir araya getiren bir iş ortağı olarak biz, sizi en iyi çalışma deneyimini sunmak için buradayız.
          </p>
        </div>
      </section>

      {/* Main Why Section */}
      <ScrollReveal>
        <section className="border-y border-cyan-500/20 bg-gradient-to-b from-slate-900/50 to-slate-950 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-16">
              VeloraDX Fark Nedir?
            </h2>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  emoji: "🧠",
                  title: "Sürekli Öğrenme",
                  desc: "AI ve teknoloji alanında kendini geliştir. Şirket olarak biz de bu yolculukta seninle birlikte büyüyoruz.",
                  points: [
                    "Düzenli eğitim ve workshop",
                    "Mentorship programları",
                    "Yeni teknolojilere ilk erişim"
                  ]
                },
                {
                  emoji: "🌍",
                  title: "Uzaktan Çalışma Özgürlüğü",
                  desc: "Konumundan bağımsız olarak çalış. Dünyanın neresinde olursan ol, VeloraDX ailesinin parçası ol.",
                  points: [
                    "100% esnek çalışma",
                    "Saat dilimi bağımsız",
                    "Yüksek internet sağlanan ortam"
                  ]
                },
                {
                  emoji: "💪",
                  title: "Güçlü ve Deneyimli Takım",
                  desc: "Endüstri deneyimli profesyonellerle birlikte çalış. Her biri kendi alanında uzman.",
                  points: [
                    "20+ yıl endüstri tecrübesi",
                    "AI ve ML uzmanları",
                    "Mentorlu büyüme ortamı"
                  ]
                },
                {
                  emoji: "🚀",
                  title: "Gerçek Etki & İmpakt",
                  desc: "Gerçek sorunları çöz ve fark yarat. Sadece kod yazmıyoruz, işletmeleri dönüştürüyoruz.",
                  points: [
                    "50+ başarılı proje",
                    "Fortune 500 şirketlerle çalış",
                    "Ürünlerin canlı halini gör"
                  ]
                }
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="p-8 border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-slate-800/50 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-3 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.points.map((point, pidx) => (
                      <li key={pidx} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Values Section */}
      <ScrollReveal>
        <section className="border-y border-cyan-500/20 px-4 py-20 sm:px-6 lg:px-8 bg-slate-950">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-16">
              VeloraDX Değerleri
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "🎯 Hedeflere Odaklanmış",
                  desc: "Belirlediğimiz hedefleri başarıya ulaştırmaya adanmışız. Her adımımızda ölçülebilir sonuç hedefleriz."
                },
                {
                  title: "🤝 İşbirliği ve Saygı",
                  desc: "Farklı bakış açılarını değer veriyoruz. Birlikte çalışmak, birlikte büyümek ve birlikte başarmak."
                },
                {
                  title: "🔮 Yaratıcılık ve İnovasyon",
                  desc: "Geleneksel düşünceyi sorgulamaktan korkmaşız. Her gün yeni çözümler üretmek ve sınırları genişletmek."
                },
                {
                  title: "🛡️ Dürüstlük ve Şeffaflık",
                  desc: "Müşterilerimize ve birbirimize karşı tamamen dürüst ve şeffafız. Söz verdiğimiz her şeyi yapıyoruz."
                },
                {
                  title: "♻️ Sürdürülebilirlik",
                  desc: "Sadece kısa dönem değil, uzun dönem başarıyı hedefleriz. Çevremize ve topluma sorumlu bir şekilde."
                },
                {
                  title: "🌟 Müşteri Odaklılık",
                  desc: "Müşterinin problemi bizim problemimiz. Onların başarısı bizin başarımız, başarısızlığı da bizim başarısızlığımız."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-gradient-to-r from-cyan-900/20 to-emerald-900/20 border border-cyan-500/20 rounded-lg hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-cyan-400 mb-3">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Statistics Section */}
      <ScrollReveal>
        <section className="border-y border-cyan-500/20 bg-gradient-to-b from-slate-900/50 to-slate-950 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "50+", label: "Başarılı Proje" },
                { value: "100%", label: "Müşteri Memnuniyeti" },
                { value: "20+", label: "Yıl Tecrübe" },
                { value: "30+", label: "Takım Üyesi" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-8 bg-gradient-to-br from-cyan-900/20 to-emerald-900/20 border border-cyan-500/30 rounded-lg">
                  <p className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-slate-300 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="bg-gradient-to-r from-cyan-900/40 via-emerald-900/40 to-cyan-900/40 border-y border-cyan-500/20 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              VeloraDX'in Parçası Olmak İster misin?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Biz sadece bir şirket değil, bir aileyiz. Sen de bu ailenin parçası olmak için bize katıl.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
              >
                Bize Ulaş
              </a>
              <a
                href="/blog"
                className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-bold rounded-lg hover:border-cyan-400 hover:bg-cyan-900/20 transition-all"
              >
                Blog'u Oku
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
