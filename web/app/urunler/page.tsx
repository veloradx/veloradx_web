import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OrbAnimation } from "@/components/OrbAnimation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ürünler - VeloraDX",
  description: "VeloraDX yapay zeka ürünleri: AI Voice Agents, CRM, ERP, HRFlow ve daha fazlası.",
};

const PRODUCTS = [
  {
    id: 1,
    slug: "ai-voice-agents",
    title: "AI Voice Agents",
    category: "AI Agents",
    shortDescription: "Telefonda konuşan, anlayan ve işi bitiren sesli yapay zeka ajanları.",
    icon: "📞",
  },
  {
    id: 2,
    slug: "veloradx-crm",
    title: "VeloraDX CRM",
    category: "ERP/CRM",
    shortDescription: "Satış sürecinizi yöneten değil, ileriye taşıyan yapay zeka destekli CRM.",
    icon: "👥",
  },
  {
    id: 3,
    slug: "veloradx-erp",
    title: "VeloraDX ERP",
    category: "ERP/CRM",
    shortDescription: "Operasyonun tamamını tek omurgada toplayan, agent'larla düşünen ERP.",
    icon: "⚙️",
  },
  {
    id: 4,
    slug: "hrflow",
    title: "HRFlow",
    category: "İK",
    shortDescription: "İK'nın operasyonel yükünü otonom ajanlara devreden ATS/İK platformu.",
    icon: "👔",
  },
  {
    id: 5,
    slug: "kurye-takip",
    title: "Kurye Takip",
    category: "Lojistik",
    shortDescription: "Saha operasyonunu gerçek zamanlı gören, rotayı kendisi optimize eden teslimat platformu.",
    icon: "🚚",
  },
  {
    id: 6,
    slug: "lbs-location-services",
    title: "LBS – Lokasyon Bazlı Servisler",
    category: "Lojistik",
    shortDescription: "Konum verisini işletme kararına çeviren altyapı.",
    icon: "📍",
  },
  {
    id: 7,
    slug: "depo-yonetim-sistemi",
    title: "Depo Yönetim Sistemi (WMS)",
    category: "Lojistik",
    shortDescription: "Deponun her hareketini bilen, darboğazı oluşmadan gören WMS.",
    icon: "📦",
  },
  {
    id: 8,
    slug: "agv-forklift-otomasyonu",
    title: "AGV Forklift Otomasyonu",
    category: "Lojistik",
    shortDescription: "Forkliftin direksiyonuna oturan endüstriyel yapay zeka.",
    icon: "🤖",
  },
  {
    id: 9,
    slug: "rfid-cozumleri",
    title: "RFID Çözümleri",
    category: "Lojistik",
    shortDescription: "Saymayı bırakın; envanteriniz kendini bildirsin.",
    icon: "📡",
  },
  {
    id: 10,
    slug: "piyasa-urun-analiz",
    title: "Piyasa Ürün Analiz Agent",
    category: "AI Agents",
    shortDescription: "Rakiplerinizi sizin yerinize her gün izleyen analiz ajanı.",
    icon: "📊",
  },
  {
    id: 11,
    slug: "mesajlasma-orkestrasyonu",
    title: "Mesajlaşma Orkestrasyonu",
    category: "AI Agents",
    shortDescription: "Mail, WhatsApp, Telegram ve Instagram'ı tek beyinden yöneten iletişim katmanı.",
    icon: "💬",
  },
  {
    id: 12,
    slug: "kurumsal-hafiza-agents",
    title: "Kurumsal Hafıza Agents",
    category: "AI Agents",
    shortDescription: "Şirketinizin bildiği her şeyi, soran herkese, yetkisi kadar anlatan ajanlar.",
    icon: "🧠",
  },
  {
    id: 13,
    slug: "helpme-agent-app",
    title: "Helpme Agent App (Persona)",
    category: "AI Agents",
    shortDescription: "Markanızın kişiliğini taşıyan, kullanıcıya eşlik eden asistan uygulaması.",
    icon: "🤝",
  },
  {
    id: 14,
    slug: "guzel-gulup-ai",
    title: "Güzel Gülüş AI",
    category: "Sağlık",
    shortDescription: "Diş kliniklerine özel: tedavi sonrası gülüşü, tedavi başlamadan gösterin.",
    icon: "😁",
  },
];

const CATEGORIES = [
  { name: "AI Agents", color: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50", icon: "🤖" },
  { name: "ERP/CRM", color: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50", icon: "💼" },
  { name: "Lojistik", color: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50", icon: "🚚" },
  { name: "İK", color: "bg-purple-500/20 text-purple-400 border border-purple-500/50", icon: "👔" },
  { name: "Sağlık", color: "bg-pink-500/20 text-pink-400 border border-pink-500/50", icon: "⚕️" },
];

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const selectedCategory = params.category ? decodeURIComponent(params.category).trim() : null;
  const filteredProducts = selectedCategory
    ? PRODUCTS.filter((p) => p.category === selectedCategory)
    : PRODUCTS;

  return (
    <>

        {/* Hero */}
        <section className="bg-gradient-to-b from-cyan-900/30 to-slate-900 border-b border-cyan-500/20 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <OrbAnimation />
            <h1 className="text-4xl font-bold text-cyan-400 sm:text-5xl">
              VeloraDX Ürünleri
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Agentic AI ile kurumlara özel çözümler: CRM'den lojistiğe, İK'dan sağlığa.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="border-b border-cyan-500/20 bg-slate-900/50 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/urunler">
                <Badge
                  className={`cursor-pointer ${
                    !selectedCategory ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950" : "bg-slate-800 text-slate-300 border border-cyan-500/30"
                  }`}
                >
                  Tümü
                </Badge>
              </Link>
              {CATEGORIES.map((cat) => (
                <Link key={cat.name} href={`/urunler?category=${encodeURIComponent(cat.name)}`}>
                  <Badge
                    className={`cursor-pointer ${
                      selectedCategory === cat.name ? cat.color : "bg-slate-800 text-slate-300 border border-cyan-500/30"
                    }`}
                  >
                    {cat.icon} {cat.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="border-b border-cyan-500/20 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/urunler/${product.slug}`}>
                  <Card className="p-6 hover:shadow-lg hover:shadow-cyan-500/20 transition cursor-pointer h-full flex flex-col border border-cyan-500/20 bg-slate-900/50">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{product.title}</h3>
                    <Badge className="w-fit mb-4 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-emerald-400 border border-emerald-500/50">{product.category}</Badge>
                    <p className="text-slate-300 flex-1">{product.shortDescription}</p>
                    <button className="mt-4 text-emerald-400 font-medium hover:text-emerald-300">
                      Detayları Gör →
                    </button>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-cyan-500/20 bg-gradient-to-r from-cyan-900/40 via-emerald-900/40 to-cyan-900/40 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-cyan-400 sm:text-4xl">
              Canlı Demo Talep Edin
            </h2>
            <p className="mt-4 text-lg text-emerald-300 mb-8">
              VeloraDX ürünlerini işiniz için nasıl kullanabileceğinizi görmek istiyorsanız, bize ulaşın.
            </p>
            <Link href="/iletisim">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-medium rounded hover:from-cyan-600 hover:to-emerald-600">
                İletişime Geç
              </button>
            </Link>
          </div>
        </section>

    </>
  );
}
