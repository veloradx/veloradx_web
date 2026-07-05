import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "İletişim - VeloraDX",
  description: "VeloraDX ile iletişime geçin. AI danışmanlığı ve yazılım geliştirme için bize ulaşın.",
};

export default function ContactPage() {
  return (
    <>

        <section className="bg-gradient-to-b from-cyan-900/40 via-slate-900 to-slate-900 border-b border-cyan-500/20 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent sm:text-6xl">
                Bize Ulaşın
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Sorularınız, önerileriniz ve işbirliği talepleriniz için aşağıdaki formu doldurun.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/30 hover:border-cyan-500/60 transition">
                  <h3 className="font-bold text-cyan-400 mb-3">📧 Email</h3>
                  <p className="text-sm text-slate-300">
                    <a href="mailto:info@veloradx.com" className="text-emerald-400 hover:text-emerald-300">
                      info@veloradx.com
                    </a>
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/30 hover:border-cyan-500/60 transition">
                  <h3 className="font-bold text-cyan-400 mb-3">📞 Telefon</h3>
                  <p className="text-sm text-slate-300">
                    <a href="tel:+905326625782" className="text-emerald-400 hover:text-emerald-300">
                      +90 532 662 57 82
                    </a>
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/30 hover:border-cyan-500/60 transition">
                  <h3 className="font-bold text-cyan-400 mb-3">📍 Adres</h3>
                  <p className="text-sm text-slate-300">
                    Esentepe, Büyükdere Cd. No: 195<br />
                    34394 Şişli/İstanbul<br />
                    Türkiye
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/30 hover:border-cyan-500/60 transition">
                  <h3 className="font-bold text-cyan-400 mb-3">🕐 Çalışma Saatleri</h3>
                  <p className="text-sm text-slate-300">
                    Pazartesi - Cuma<br />
                    09:00 - 18:00 <br/>
                    (GMT+3)
                  </p>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/30">
                  <ContactForm />
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="border-t border-cyan-500/20 bg-gradient-to-b from-slate-900/50 to-slate-900 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">Bize Ulaşmanın Diğer Yolları</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* WhatsApp */}
              <a href="https://wa.me/905326625782" target="_blank" rel="noopener noreferrer">
                <Card className="p-8 text-center bg-gradient-to-br from-slate-900 to-slate-800 border border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-lg hover:shadow-emerald-500/20 transition cursor-pointer h-full group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💬</div>
                  <h3 className="font-bold text-emerald-400 mb-2">WhatsApp</h3>
                  <p className="text-sm text-slate-300">Anında mesaj gönderin</p>
                  <p className="mt-4 text-sm font-medium text-emerald-400">+90 532 662 57 82</p>
                </Card>
              </a>

              {/* Telefon */}
              <a href="tel:+905326625782">
                <Card className="p-8 text-center bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition cursor-pointer h-full group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">☎️</div>
                  <h3 className="font-bold text-cyan-400 mb-2">Telefon Arayın</h3>
                  <p className="text-sm text-slate-300">Doğrudan konuşun</p>
                  <p className="mt-4 text-sm font-medium text-cyan-400">+90 532 662 57 82</p>
                </Card>
              </a>

              {/* Email */}
              <a href="mailto:info@veloradx.com">
                <Card className="p-8 text-center bg-gradient-to-br from-slate-900 to-slate-800 border border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-lg hover:shadow-emerald-500/20 transition cursor-pointer h-full group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">✉️</div>
                  <h3 className="font-bold text-emerald-400 mb-2">Email Gönderin</h3>
                  <p className="text-sm text-slate-300">Detaylı yazın</p>
                  <p className="mt-4 text-sm font-medium text-emerald-400">info@veloradx.com</p>
                </Card>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-cyan-400 text-center mb-8">Sosyal Medyada Bizi Takip Edin</h3>
              <div className="flex justify-center gap-6 flex-wrap">
                <a href="https://wa.me/905326625782" target="_blank" rel="noopener noreferrer"
                   className="w-14 h-14 rounded-full border-2 border-emerald-500 text-emerald-400 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition text-2xl">
                  💬
                </a>
                <a href="tel:+905326625782"
                   className="w-14 h-14 rounded-full border-2 border-cyan-500 text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-950 transition text-2xl">
                  ☎️
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                   className="w-14 h-14 rounded-full border-2 border-emerald-500 text-emerald-400 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition text-2xl">
                  📸
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="w-14 h-14 rounded-full border-2 border-cyan-500 text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-950 transition text-2xl">
                  💼
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Response Info */}
        <section className="border-t border-cyan-500/20 bg-gradient-to-b from-slate-900/50 to-slate-900 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-cyan-400 mb-12">Sık Sorulan Sorular</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-lg">
                <h3 className="font-bold text-emerald-400 mb-3">Ne kadar sürede geri dönüş alırım?</h3>
                <p className="text-sm text-slate-300">
                  İletişim formunuzu gönderdikten sonra 24 saat içinde ekibimiz sizinle iletişime geçecektir.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-lg">
                <h3 className="font-bold text-cyan-400 mb-3">Danışmanlık ücretsiz mi?</h3>
                <p className="text-sm text-slate-300">
                  Evet! İlk danışmanlık seansı tamamen ücretsizdir. Projenizi değerlendirip size en uygun çözümü önerecek.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-lg">
                <h3 className="font-bold text-emerald-400 mb-3">Hangi hizmetler sunuyor?</h3>
                <p className="text-sm text-slate-300">
                  AI entegrasyonu, dönüşüm danışmanlığı ve özel yazılım geliştirme hizmetleri sunuyoruz. Detaylar için hizmetler sayfasını ziyaret edin.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-lg">
                <h3 className="font-bold text-cyan-400 mb-3">Uluslararası projeler alıyor musunuz?</h3>
                <p className="text-sm text-slate-300">
                  Evet! Dünyanın herhangi bir yerinden uzaktan çalışabiliriz. Lütfen iletişim formunda bölgenizi belirtin.
                </p>
              </div>
            </div>
          </div>
        </section>

    </>
  );
}
