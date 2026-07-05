import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "VeloraDX Ürün",
  description: "VeloraDX yapay zeka ürünü detayları",
};

const PRODUCT_DATA: Record<string, any> = {
  "ai-voice-agents": {
    title: "AI Voice Agents",
    category: "AI Agents",
    icon: "📞",
    shortDesc: "Telefonda konuşan, anlayan ve işi bitiren sesli yapay zeka ajanları.",
    fullDesc: "Gelen ve giden çağrıları insan akıcılığında yöneten, gerçek zamanlı konuşma tanıma (STT), doğal dil anlama ve ses sentezi (TTS) katmanlarını tek pipeline'da birleştiren sesli agent platformu.",
    features: [
      "Randevu alma, sipariş takibi, borç hatırlatma, anket ve ön eleme mülakatı gibi senaryo bazlı çağrı akışları",
      "Konuşma sırasında CRM/ERP verisine gerçek zamanlı erişim",
      "Türkçe dahil çok dilli, kesintiye (barge-in) toleranslı doğal diyalog",
      "Duygu/niyet analizi ile kritik çağrıları canlı temsilciye sıcak devir (warm transfer)",
    ],
    targetAudience: "Çağrı merkezleri, klinikler, e-ticaret operasyonları, tahsilat ve randevu yoğun tüm işletmeler.",
  },
  "veloradx-crm": {
    title: "VeloraDX CRM",
    category: "ERP/CRM",
    icon: "👥",
    shortDesc: "Satış sürecinizi yöneten değil, ileriye taşıyan yapay zeka destekli CRM.",
    fullDesc: "Kanban tabanlı fırsat yönetimi, müşteri 360° görünümü ve yüksek veri güvenliği üzerine kurulu kurumsal CRM platformu. Farkı, içine gömülü agent katmanıdır.",
    features: [
      "Kanban pipeline, görev ve aktivite yönetimi, rol bazlı yetkilendirme",
      "AI lead skorlama ve kazanma olasılığı tahmini",
      "E-posta/WhatsApp yazışmalarından otomatik aktivite kaydı ve özet",
      "Mesajlaşma Orkestrasyonu ve AI Voice Agents ile yerleşik entegrasyon",
    ],
    targetAudience: "B2B satış ekipleri, ajanslar, bayi ağı yöneten üreticiler.",
  },
  "veloradx-erp": {
    title: "VeloraDX ERP",
    category: "ERP/CRM",
    icon: "⚙️",
    shortDesc: "Operasyonun tamamını tek omurgada toplayan, agent'larla düşünen ERP.",
    fullDesc: "Stok, satın alma, üretim, finans ve raporlamayı modüler mimaride birleştirir. Klasik ERP'lerden farkı: rutin kararları agent'lara devredebilmenizdir.",
    features: [
      "Modüler yapı – yalnızca ihtiyaç duyulan modüllerle başlanır, kademeli genişler",
      "Talep tahmini ve otomatik tedarik önerileri",
      "Doğal dilde raporlama",
      "Mevcut sistemlerle (SAP, Logo, Netsis vb.) çift yönlü veri köprüleri",
    ],
    targetAudience: "Büyüyen KOBİ'ler ve mevcut ERP'sini değiştirmeden zeka katmanı eklemek isteyen kurumlar.",
  },
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = PRODUCT_DATA[params.slug];

  if (!product) {
    return (
      <>
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900">Ürün Bulunamadı</h1>
            <Link href="/urunler" className="mt-4 inline-block text-blue-600 hover:underline">
              Ürünlere Dön
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>

        {/* Hero */}
        <section className="bg-gradient-to-b from-cyan-900/30 to-slate-900 border-b border-cyan-500/20 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-5xl mb-6">{product.icon}</div>
            <h1 className="text-4xl font-bold text-cyan-400 sm:text-5xl mb-4">{product.title}</h1>
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-emerald-400 border border-emerald-500/50">{product.category}</Badge>
            <p className="text-xl text-slate-300 mb-8">{product.shortDesc}</p>
            <Link href="/iletisim">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:from-cyan-600 hover:to-emerald-600 font-semibold">
                Canlı Demo Talep Et
              </Button>
            </Link>
          </div>
        </section>

        {/* Description */}
        <section className="border-b border-cyan-500/20 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Genel Bakış</h2>
            <p className="text-slate-300 leading-7 mb-12">{product.fullDesc}</p>

            {/* Features */}
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Öne Çıkan Yetenekler</h2>
            <div className="space-y-4 mb-12">
              {product.features.map((feature: string, idx: number) => (
                <Card key={idx} className="p-4 border-l-4 border-l-emerald-500 bg-slate-900/50 border border-cyan-500/20">
                  <p className="text-slate-300">✓ {feature}</p>
                </Card>
              ))}
            </div>

            {/* Target Audience */}
            <Card className="p-8 bg-gradient-to-r from-cyan-900/30 to-emerald-900/30 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Kimler İçin?</h3>
              <p className="text-slate-300">{product.targetAudience}</p>
            </Card>
          </div>
        </section>

        {/* Related Products */}
        <section className="border-t border-cyan-500/20 bg-slate-900/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-cyan-400 mb-8">Diğer Ürünlerimiz</h2>
            <Link href="/urunler">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:from-cyan-600 hover:to-emerald-600 font-semibold">
                Tüm Ürünleri Gözden Geçir
              </Button>
            </Link>
          </div>
        </section>

    </>
  );
}
