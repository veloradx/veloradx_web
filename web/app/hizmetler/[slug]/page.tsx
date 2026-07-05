import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { apiClient } from "@/lib/api";

export const revalidate = 3600; // ISR

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const service = await apiClient.services.getBySlug(params.slug);
    return {
      title: `${service.title} - VeloraDX`,
      description: service.shortDescription,
    };
  } catch {
    return { title: "Hizmet - VeloraDX" };
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  let service = null;

  try {
    service = await apiClient.services.getBySlug(params.slug);
  } catch (error) {
    console.error("Failed to fetch service:", error);
  }

  if (!service) {
    return (
      <>
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900">Hizmet Bulunamadı</h1>
            <Link href="/hizmetler" className="mt-4 inline-block text-blue-600 hover:underline">
              Hizmetlere Dön
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-5xl mb-6">{getIconEmoji(service.iconName)}</div>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">{service.title}</h1>
            <p className="mt-6 text-lg text-slate-600">{service.shortDescription}</p>
            <Link href="/iletisim" className="mt-8 inline-block">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                İnceleme Talebinde Bulun
              </Button>
            </Link>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-slate max-w-none">
              <div className="text-slate-700 whitespace-pre-wrap leading-7 mb-12">
                {service.content}
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {[
                "Veri güdümlü sonuçlar",
                "Uzman ekip",
                "Uygun fiyat",
                "Sürekli destek",
              ].map((benefit) => (
                <Card key={benefit} className="p-6">
                  <p className="text-lg font-medium text-slate-900">✓ {benefit}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-200 bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white">Bu hizmetle ilginiz mi?</h2>
            <p className="mt-4 text-lg text-blue-100 mb-8">
              Hemen iletişime geçin ve konsültasyon alın.
            </p>
            <Link href="/iletisim">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
                Bize Ulaşın
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
