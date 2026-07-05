import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { apiClient } from "@/lib/api";

export const metadata: Metadata = {
  title: "Blog - VeloraDX",
  description: "VeloraDX blog: AI, yazılım geliştirme ve dijital dönüşüm üzerine makaleler",
};

export const revalidate = 3600; // ISR: 1 saat

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");
  const category = params.category || "";

  let posts = [];
  let categories = [];

  try {
    posts = await apiClient.blog.getPosts(page, 10, category || undefined);
    categories = await apiClient.blog.getCategories();
  } catch (error) {
    console.error("Failed to fetch blog data:", error);
  }

  return (
    <>
        {/* Hero */}
        <section className="bg-gradient-to-b from-cyan-900/30 to-slate-900 border-b border-cyan-500/20 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-cyan-400 sm:text-5xl">Blog</h1>
            <p className="mt-6 text-lg text-slate-300">
              AI, yazılım geliştirme ve dijital dönüşüm üzerine güncel içerik ve insights.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="border-b border-cyan-500/20 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
              {/* Posts */}
              <div className="lg:col-span-3">
                {posts.length > 0 ? (
                  <div className="space-y-8">
                    {posts.map((post: any) => (
                      <Link key={post.id} href={`/blog/${post.slug}`}>
                        <Card className="overflow-hidden hover:shadow-lg hover:shadow-cyan-500/20 transition cursor-pointer border border-cyan-500/20 bg-slate-900/50">
                          <div className="grid grid-cols-1 sm:grid-cols-3">
                            <div className="sm:col-span-1 aspect-video sm:aspect-auto overflow-hidden">
                              {/* Placeholder for image */}
                              <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-4xl">
                                📰
                              </div>
                            </div>
                            <div className="sm:col-span-2 p-6">
                              <div className="flex gap-2 mb-3">
                                <Badge className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/50">{post.categoryName}</Badge>
                              </div>
                              <h2 className="text-xl font-bold text-cyan-400 mb-2">{post.title}</h2>
                              <p className="text-slate-300 mb-4 line-clamp-2">{post.excerpt}</p>
                              <div className="flex items-center justify-between text-sm text-slate-400">
                                <span>Yazar: {post.authorName}</span>
                                <span>
                                  {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Card className="p-12 text-center border border-cyan-500/20 bg-slate-900/50">
                    <p className="text-slate-300">Blog yazısı bulunamadı.</p>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                {/* Categories */}
                {categories.length > 0 && (
                  <Card className="p-6 border border-cyan-500/20 bg-slate-900/50">
                    <h3 className="font-bold text-cyan-400 mb-4">Kategoriler</h3>
                    <div className="space-y-2">
                      <Link href="/blog">
                        <div className={`text-sm px-3 py-2 rounded cursor-pointer transition ${!category ? "bg-cyan-500/30 text-cyan-400 font-medium border border-cyan-500/50" : "text-slate-300 hover:text-cyan-400"}`}>
                          Tüm Yazılar
                        </div>
                      </Link>
                      {categories.map((cat: any) => (
                        <Link key={cat.id} href={`/blog?category=${cat.slug}`}>
                          <div className={`text-sm px-3 py-2 rounded cursor-pointer transition ${category === cat.slug ? "bg-emerald-500/30 text-emerald-400 font-medium border border-emerald-500/50" : "text-slate-300 hover:text-emerald-400"}`}>
                            {cat.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </Card>
                )}

                {/* Newsletter CTA */}
                <Card className="p-6 bg-gradient-to-br from-cyan-900/30 to-emerald-900/30 border border-cyan-500/30">
                  <h3 className="font-bold text-cyan-400 mb-4">Haberdar Kalın</h3>
                  <p className="text-sm text-slate-300">
                    En son AI insights'ları almak için bize ulaşın.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
