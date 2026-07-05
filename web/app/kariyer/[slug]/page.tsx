import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { apiClient } from "@/lib/api";

export const revalidate = 3600; // ISR

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const job = await apiClient.careers.getBySlug(params.slug);
    return {
      title: `${job.title} - Kariyer - VeloraDX`,
      description: `${job.title} pozisyonu için başvuru yap.`,
    };
  } catch {
    return { title: "Pozisyon - VeloraDX" };
  }
}

export default async function JobDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  let job = null;

  try {
    job = await apiClient.careers.getBySlug(params.slug);
  } catch (error) {
    console.error("Failed to fetch job:", error);
  }

  if (!job) {
    return (
      <>
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900">Pozisyon Bulunamadı</h1>
            <Link href="/kariyer" className="mt-4 inline-block text-blue-600 hover:underline">
              Kariyer Sayfasına Dön
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">{job.title}</h1>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge>{job.department}</Badge>
              <Badge>📍 {job.location}</Badge>
              <Badge>{job.employmentType}</Badge>
            </div>
            <Link href="/iletisim">
              <Button size="lg" className="mt-8 bg-blue-600 hover:bg-blue-700">
                Başvuru Yap
              </Button>
            </Link>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Pozisyon Açıklaması</h2>
              <div className="text-slate-700 whitespace-pre-wrap leading-7">
                {job.description}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Gereksinimler</h2>
              <div className="text-slate-700 whitespace-pre-wrap leading-7">
                {job.requirements}
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Başvurmaya Hazır mısın?</h2>
              <p className="text-slate-600 mb-6">
                Bu pozisyon seni heyecanlandırdıysa, bize ulaş ve başvur. CV'ni ve ön yazını gönder.
              </p>
              <Link href="/iletisim">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Başvur
                </Button>
              </Link>
            </div>
          </div>
        </section>

    </>
  );
}
