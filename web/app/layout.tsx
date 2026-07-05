import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { ChatBot } from "@/components/ChatBot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VeloraDX - Yapay Zeka & Yazılım Çözümleri",
  description: "VeloraDX, AI entegrasyonu ve yapay zeka dönüşümü ile işletmenizi geleceğe taşıyor.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://veloradx.com",
    title: "VeloraDX - Yapay Zeka & Yazılım Çözümleri",
    description: "AI entegrasyonu ve dijital dönüşümde uzman danışmanlık ve yazılım geliştirme.",
    siteName: "VeloraDX",
  },
  twitter: {
    card: "summary_large_image",
    title: "VeloraDX - Yapay Zeka & Yazılım Çözümleri",
    description: "AI entegrasyonu ve dijital dönüşümde uzman danışmanlık.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VeloraDX",
              url: "https://veloradx.com",
              logo: "https://veloradx.com/logo.png",
              description: "Yapay Zeka Entegrasyonu ve Yazılım Geliştirme Şirketi",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingContact />
        <ChatBot />
      </body>
    </html>
  );
}
