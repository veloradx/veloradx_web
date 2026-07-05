"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AnimatedHero() {
  const [displayedText, setDisplayedText] = useState("Yapay Zeka ile İşletmenizi Güçlendirin");
  const [showNewContent, setShowNewContent] = useState(false);
  const fullText = "Yapay Zeka ile İşletmenizi Güçlendirin";

  useEffect(() => {
    const startDeletingTimer = setTimeout(() => {
      let currentIndex = fullText.length;
      const deletingInterval = setInterval(() => {
        currentIndex--;
        if (currentIndex >= 0) {
          setDisplayedText(fullText.substring(0, currentIndex));
        } else {
          clearInterval(deletingInterval);
          setTimeout(() => {
            setShowNewContent(true);
          }, 300);
        }
      }, 80);

      return () => clearInterval(deletingInterval);
    }, 3000);

    return () => clearTimeout(startDeletingTimer);
  }, [fullText]);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center -mt-20">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-slate-950/70 z-10"></div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 opacity-20 z-10">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{animationDuration: '8s', animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl text-center relative z-20 px-6 sm:px-8 py-16">
        {/* Main Heading */}
        <div className="min-h-24 mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-2xl">
            {displayedText && (
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                {displayedText}
              </span>
            )}
            {displayedText.length > 0 && <span className="text-cyan-400 ml-1 animate-pulse">|</span>}
          </h1>

          {/* New Content - Replaces deleted text */}
          <div
            className={`transition-all duration-500 ${
              showNewContent ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Şirketinize Özel Uçtan Uca Yapay Zeka Çözümleri
              </span>
            </h2>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto drop-shadow-lg">
          Veri güdümlü çözümlerle dijital dönüşüm yolculuğunuzda yanınızdayız.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/iletisim">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-950 font-bold px-8 py-5 shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              Başlayalım
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </Link>
          <Link href="/hakkimizda">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-300 font-semibold px-8 py-5 backdrop-blur-sm transition-all duration-300"
            >
              Daha Fazla Bilgi
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
