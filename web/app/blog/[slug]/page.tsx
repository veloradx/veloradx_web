import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { apiClient } from "@/lib/api";
import type { BlogPostDetail } from "@/types/api";

export const revalidate = 3600; // ISR

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const post = (await apiClient.blog.getPostBySlug(params.slug)) as BlogPostDetail;
    return {
      title: `${post.metaTitle || post.title} - VeloraDX`,
      description: post.metaDescription || post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        publishedTime: post.publishedAt,
      },
    };
  } catch {
    return {
      title: "Blog Yazısı - VeloraDX",
      description: "VeloraDX blog yazısı",
    };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  let post: BlogPostDetail | null = null;

  try {
    post = (await apiClient.blog.getPostBySlug(params.slug)) as BlogPostDetail;
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
  }

  if (!post) {
    return (
      <>
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900">Yazı Bulunamadı</h1>
            <p className="mt-2 text-slate-600">Aradığınız blog yazısı mevcut değil.</p>
            <Link href="/blog" className="mt-4 inline-block text-blue-600 hover:underline">
              Blog'a Dön
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex gap-2 mb-4">
              <Badge>{post.categoryName}</Badge>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">{post.title}</h1>
            <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
              <span>Yazar: {post.authorName}</span>
              <span>{new Date(post.publishedAt).toLocaleDateString("tr-TR")}</span>
            </div>
          </div>
        </section>

        {/* Image */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="aspect-video overflow-hidden rounded-lg bg-slate-200 mb-12">
              {/* Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl text-white">
                📰
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-slate max-w-none">
              <div className="text-slate-700 whitespace-pre-wrap leading-7 mb-8">
                {post.content}
              </div>
            </div>

            {/* Author Card */}
            <Card className="mt-12 p-6 bg-slate-50">
              <h3 className="font-bold text-slate-900 mb-2">Yazar Hakkında</h3>
              <p className="text-slate-600">
                {post.authorName} VeloraDX'de {post.categoryName.toLowerCase()} alanında uzman danışmandır.
              </p>
            </Card>

            {/* Back Link */}
            <div className="mt-12">
              <Link href="/blog" className="text-blue-600 hover:underline">
                ← Blog'a Dön
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles CTA */}
        <section className="border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-slate-900">Daha Fazla İçerik</h2>
            <p className="mt-4 text-slate-600">
              Blog sayfamızda daha birçok makale bulabilirsiniz.
            </p>
            <Link href="/blog">
              <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Blog'u Gez
              </button>
            </Link>
          </div>
        </section>
    </>
  );
}
