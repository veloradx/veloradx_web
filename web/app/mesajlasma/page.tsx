import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessagingFlowDiagram } from "@/components/MessagingFlowDiagram";

export const metadata: Metadata = {
  title: "Mesajlaşma Orkestrasyonu | VeloraDX",
  description: "WhatsApp, Telegram, Instagram, Email entegrasyonu. Tüm kanalları tek platformdan yönetin.",
};

export default function MessagingPage() {
  const platforms = [
    {
      name: "WhatsApp",
      icon: "💬",
      color: "from-green-500 to-green-600",
      borderColor: "border-green-500/30",
      features: [
        "Unlimited mesaj gönder",
        "Template mesajlar",
        "Medya desteği (foto, video, doc)",
        "Markalaşmış profil",
        "Otomatik yanıtlar",
      ],
      useCases: ["Sipariş bildirimleri", "Müşteri desteği", "Pazarlama kampaniyaları", "Randevu hatırlatıcıları"],
      apiLevel: "Official Business API",
    },
    {
      name: "Telegram",
      icon: "📱",
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500/30",
      features: [
        "Bot entegrasyonu",
        "Inline buttons & callbacks",
        "Medya gönderimi",
        "Dosya & dokiman",
        "Grup yönetimi",
      ],
      useCases: ["Notifikasyon sistemi", "Bot uygulamaları", "Toplu bildirim", "İnteraktif araçlar"],
      apiLevel: "Bot API + Webhooks",
    },
    {
      name: "Instagram",
      icon: "📸",
      color: "from-pink-500 to-purple-600",
      borderColor: "border-pink-500/30",
      features: [
        "Direct messaging",
        "Story updates",
        "Comment responses",
        "Business profile",
        "Analytics",
      ],
      useCases: ["Influencer yönetimi", "Brand messaging", "Sosyal medya yönetimi", "Kampanya takibi"],
      apiLevel: "Instagram Business API",
    },
    {
      name: "Email",
      icon: "📧",
      color: "from-orange-500 to-red-600",
      borderColor: "border-orange-500/30",
      features: [
        "SMTP entegrasyonu",
        "HTML templates",
        "Otomatik yanıt",
        "Attachment desteği",
        "Scheduling",
      ],
      useCases: ["Transactional emails", "Newsletter", "Pazarlama maielleri", "Customer support"],
      apiLevel: "SMTP/API Integration",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-7xl mb-8 flex justify-center gap-4">
            <span>💬</span>
            <span>📱</span>
            <span>📸</span>
            <span>📧</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Mesajlaşma Orkestrasyonu
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            WhatsApp, Telegram, Instagram, Email — tüm kanalları tek beyinden yönetin. Müşterileriniz hangi kanal kullanırsa kullansın, yanıtlar otomatik ve tutarlı olur.
          </p>
          <Link href="/iletisim">
            <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-950 font-semibold px-8 py-6 text-lg">
              Demo Talep Et
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-slate-900/50 border-y border-cyan-500/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-cyan-400 mb-16 text-center">Nasıl Çalışır?</h2>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              { step: 1, title: "Müşteri Mesaj Gönder", desc: "Herhangi bir kanal" },
              { step: 2, title: "Ünifiye Sistemde Al", desc: "Tüm mesajlar merkezi" },
              { step: 3, title: "AI Yanıt Ver", desc: "Otomatik veya el ile" },
              { step: 4, title: "Orijinal Kanala Gönder", desc: "Müşteri orijinal kanalda alır" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-slate-950">
                  {item.step}
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <MessagingFlowDiagram />
        </div>
      </section>

      {/* Platforms */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-emerald-400 mb-16 text-center">Desteklenen Platformlar</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className={`bg-gradient-to-br ${platform.color} bg-opacity-5 border ${platform.borderColor} rounded-lg p-8`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{platform.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                    <p className="text-sm text-slate-400">{platform.apiLevel}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-cyan-400 mb-3">✨ Özellikler</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    {platform.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-emerald-400 mb-3">🎯 Kullanım Alanları</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    {platform.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-cyan-400">→</span> {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Flow */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-slate-900/50 border-y border-cyan-500/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-cyan-400 mb-16 text-center">Entegrasyon Akışı</h2>

          <div className="space-y-8">
            {[
              {
                title: "1. Gelen Mesajlar",
                items: [
                  "Müşteri WhatsApp/Telegram/Instagram/Email'den mesaj gönder",
                  "Sistem otomatik olarak algılar ve kaydeder",
                  "Müşteri bilgileri ve geçmiş otomatik yüklenir",
                ],
              },
              {
                title: "2. Akıllı Yönlendirme",
                items: [
                  "AI mesajı analiz eder (intent, öncelik, kategori)",
                  "Otonom cevapla (basit sorular)",
                  "Ya da doğru takıma yönlendir (karmaşık)",
                ],
              },
              {
                title: "3. Unified Inbox",
                items: [
                  "Tüm mesajlar tek dashboard'da",
                  "Kanal göstergesi (WhatsApp/Telegram/vb)",
                  "Çevrimiçi/çevrimdışı durumu",
                  "Yanıtlanmış/bekleyen filtreleri",
                ],
              },
              {
                title: "4. Orijinal Kanal Yanıtı",
                items: [
                  "İnsan veya AI yanıt yazıyor",
                  "Sistem otomatik olarak doğru kanala yönlendirir",
                  "Müşteri orijinal kanalında yanıtı görür",
                  "Konuşma tarihçesi korunur",
                ],
              },
              {
                title: "5. Analytics & Insights",
                items: [
                  "Her kanal için performans metrikleri",
                  "Yanıt süresi, memnuniyet puanı",
                  "En sık sorulan sorular",
                  "Trend analizi ve raporlama",
                ],
              },
            ].map((section, i) => (
              <div key={i} className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="text-slate-300 flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-emerald-400 mb-16 text-center">Gerçek Dünya Örnekleri</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-ticaret",
                emoji: "🛍️",
                scenario: "Müşteri WhatsApp'tan sipariş takibi soruyor → Sistem otomatik sipariş durumunu gönder → Telegram'dan hızlı cevap istiyor → Aynı sistem cevap ver",
                benefit: "24/7 destek, müşteri tercih ettiği kanal kullanabilir",
              },
              {
                title: "Müşteri Hizmetleri",
                emoji: "📞",
                scenario: "Şikayet email ile geliyor → Email cevabı hazırlanıyor → Müşteri WhatsApp'tan takip soruyor → Kontekst korunarak yanıtla",
                benefit: "Hiç bir mesaj kaybolmaz, tam kontekst her zaman var",
              },
              {
                title: "Satış Ekibi",
                emoji: "💼",
                scenario: "Potansiyel müşteri Instagram'dan bilgi istiyor → Telegram'dan follow up yapıyor → Email ile teklif alıyor → Tüm kanal koordineli",
                benefit: "Satış hızlanır, müşteri deneyimi iyileşir",
              },
              {
                title: "Resepsiyon",
                emoji: "🏢",
                scenario: "Randevu talebi Telegram → Onay Instagram → Hatırlatıcı WhatsApp → İptal Email",
                benefit: "Otonom randevu sistemi, insan müdahalesi minimal",
              },
              {
                title: "Teknhik Destek",
                emoji: "🛠️",
                scenario: "Sorun WhatsApp'tan → Teknik soru Telegram → Cihaz videasu Instagram DM → Çözüm Email",
                benefit: "Ekip koordineli çalışır, destek hızlanır",
              },
              {
                title: "HR & Kariyer",
                emoji: "👥",
                scenario: "CV WhatsApp'tan → Görüşme günü Email → Soru Telegram → Teklif Instagram",
                benefit: "Tüm adaylar aynı standart deneyim alır",
              },
            ].map((useCase, i) => (
              <div key={i} className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-lg p-6">
                <div className="text-4xl mb-4">{useCase.emoji}</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{useCase.title}</h3>
                <p className="text-sm text-slate-300 mb-4 font-mono bg-slate-900/50 p-3 rounded border border-cyan-500/20">
                  {useCase.scenario}
                </p>
                <p className="text-sm text-emerald-400 font-medium">✨ {useCase.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-slate-900/50 border-y border-cyan-500/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-cyan-400 mb-16 text-center">Neden Mesajlaşma Orkestrasyonu?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "🎯", title: "Tekil Gelen Kutusu", desc: "4 kanal, 1 inbox. Hiç mesaj kaçmaz." },
              { icon: "🤖", title: "AI Otomasyonu", desc: "Basit sorular otomatik yanıtlanır, insan oyuncu azalır." },
              { icon: "⚡", title: "Hız", desc: "Müşteri tercih ettiği kanal kullanır, yanıt anında." },
              { icon: "📊", title: "Analytics", desc: "Kanal bazlı performans, trend analizi, raporlama." },
              { icon: "🔄", title: "Kontekst Korunur", desc: "Müşteri hangi kanal değiştirse, sohbet tarihçesi korunur." },
              { icon: "💰", title: "Maliyet Azalması", desc: "Otomasyonla personel maliyeti 60% azalır." },
              { icon: "🌍", title: "Çok Kanal Desteği", desc: "Müşteri hangi kanalı seçerse seçsin, destek var." },
              { icon: "🔗", title: "Entegrasyonlar", desc: "CRM, ERP, ticketing sistem ile bağlı çalışır." },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4 p-6 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-lg">
                <div className="text-3xl flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="font-bold text-cyan-400 mb-2">{benefit.title}</h3>
                  <p className="text-slate-300 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border-y border-cyan-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Hazır mısınız?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Tüm müşteri mesajlarını tek platformdan yönetin. Destek ekibinizin verimliliğini 3x artırın.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/iletisim">
              <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-950 font-semibold px-8 py-6">
                Demo Talep Et
              </Button>
            </Link>
            <Link href="/urunler">
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6">
                Tüm Ürünlere Bak
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
