import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { apiClient } from "@/lib/api";

export const metadata: Metadata = {
  title: "Projeler - VeloraDX",
  description: "VeloraDX tarafından gerçekleştirilen başarılı projeler ve case studies",
};

export const revalidate = 3600; // ISR

export default async function CaseStudiesPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || "1");
  let studies = [];

  try {
    studies = await apiClient.caseStudies.getAll(page, 10);
  } catch (error) {
    console.error("Failed to fetch case studies:", error);
  }

  return (
    <>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Projeler</h1>
            <p className="mt-6 text-lg text-slate-600">
              Gerçek müşteri başarı öyküleri ve vaka analizleri.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {studies.length > 0 ? (
              <div className="space-y-12">
                {studies.map((study: any) => (
                  <Link key={study.id} href={`/projeler/${study.slug}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition cursor-pointer">
                      <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* Image */}
                        <div className="aspect-video sm:aspect-auto overflow-hidden bg-slate-200">
                          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl text-white">
                            💼
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                          <div className="flex gap-2 mb-4">
                            <Badge>{study.industry}</Badge>
                          </div>
                          <h2 className="text-2xl font-bold text-slate-900 mb-3">{study.title}</h2>
                          <p className="text-slate-600 mb-6 line-clamp-3">{study.summary}</p>
                          <div className="text-sm text-slate-500">
                            {new Date(study.publishedAt).toLocaleDateString("tr-TR")}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <p className="text-slate-600">Proje bulunamadı.</p>
              </Card>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-200 bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white">Siz de başarılı olmak istiyor musunuz?</h2>
            <p className="mt-4 text-lg text-blue-100">
              Benzer sonuçlar için bize ulaşın.
            </p>
            <Link href="/iletisim" className="mt-8 inline-block">
              <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded hover:bg-slate-100">
                İnceleme Talebinde Bulun
              </button>
            </Link>
          </div>
        </section>

    </>
  );
}
