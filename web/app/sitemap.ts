import type { MetadataRoute } from "next";
import { apiClient } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://veloradx.com";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projeler`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kariyer`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  // Dynamic pages from API
  let dynamicPages: MetadataRoute.Sitemap = [];

  try {
    const [services, posts, studies, jobs] = await Promise.all([
      apiClient.services.getAll(),
      apiClient.blog.getPosts(1, 100),
      apiClient.caseStudies.getAll(1, 100),
      apiClient.careers.getAll(),
    ]);

    dynamicPages = [
      ...services.map((s: any) => ({
        url: `${baseUrl}/hizmetler/${s.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
      ...posts.map((p: any) => ({
        url: `${baseUrl}/blog/${p.slug}`,
        lastModified: new Date(p.publishedAt),
        changeFrequency: "never" as const,
        priority: 0.6,
      })),
      ...studies.map((cs: any) => ({
        url: `${baseUrl}/projeler/${cs.slug}`,
        lastModified: new Date(cs.publishedAt),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
      ...jobs.map((j: any) => ({
        url: `${baseUrl}/kariyer/${j.slug}`,
        lastModified: new Date(j.postedAt),
        changeFrequency: "weekly" as const,
        priority: 0.6,
      })),
    ];
  } catch (error) {
    console.error("Failed to fetch dynamic pages for sitemap:", error);
  }

  return [...staticPages, ...dynamicPages];
}
