"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: "🧠",
    title: "Yapay Zeka Entegrasyonu",
    description: "Mevcut sistemlerinize yapay zeka gücü ekleyin.",
    link: "/hizmetler/yapay-zeka-entegrasyonu",
  },
  {
    id: 2,
    icon: "🧭",
    title: "AI Dönüşüm Danışmanlığı",
    description: "Dijital dönüşüm yolculuğunuzda AI stratejisi belirleyin.",
    link: "/hizmetler/ai-donusum-danismanlik",
  },
  {
    id: 3,
    icon: "💻",
    title: "Özel Yazılım Geliştirme",
    description: "İş gereksinimlerinize uygun ölçeklenebilir yazılım çözümleri.",
    link: "/hizmetler/ozel-yazilim-gelistirme",
  },
];

export function TrainAnimation() {
  const [trainPosition, setTrainPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("train-section");
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Section'a gelene kadar tren hareket etmesin
      if (scrollPosition + windowHeight < sectionTop) {
        setTrainPosition(-10);
        return;
      }

      // Tren pozisyonunu hesapla (0 - 100%)
      const relativeScroll = scrollPosition - sectionTop;
      const position = Math.min(Math.max((relativeScroll / sectionHeight) * 100, 0), 100);
      setTrainPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="train-section"
      className="relative px-4 py-32 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 via-cyan-900/20 to-slate-900/50 border-y border-cyan-500/20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 rounded-full">
            <span className="text-cyan-400 text-sm font-semibold">🚂 Hizmetlerimiz</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Neleri Sunuyoruz?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Veri güdümlü çözümlerle işletmeniz için en uygun AI stratejisini belirleyoruz.
          </p>
        </div>

        {/* Vertical Train Track */}
        <div className="relative">
          {/* Track line - vertical (left side) */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/30 via-emerald-500/30 to-cyan-500/30"></div>

          {/* Train - vertical movement */}
          <div
            className="absolute left-2 z-10 transition-all duration-300 ease-out"
            style={{ top: `${trainPosition}%`, marginTop: "-2rem" }}
          >
            <div className="text-5xl animate-bounce">🚂</div>
          </div>

          {/* Services as stations */}
          <div className="space-y-12 ml-20">
            {services.map((service, idx) => (
              <div key={service.id} className="relative">
                {/* Station marker */}
                <div className="absolute -left-20 top-8 w-6 h-6 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full border-4 border-slate-900 shadow-lg z-20">
                  <div className="absolute inset-0 rounded-full animate-pulse bg-cyan-500/50"></div>
                </div>

                {/* Service card */}
                <Link href={service.link}>
                    <Card className="p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group cursor-pointer">
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-emerald-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <span className="text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                        Detayları Gör →
                      </span>
                    </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/hizmetler">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:from-cyan-600 hover:to-emerald-600 font-semibold px-8 py-6 hover:scale-105 transition-all shadow-lg"
            >
              Tüm Hizmetleri Gör
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
