"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const style = `
  @keyframes slideUnderline {
    from {
      width: 0;
      left: 0;
    }
    to {
      width: 100%;
      left: 0;
    }
  }

  @keyframes glow {
    0%, 100% {
      text-shadow: 0 0 5px rgba(6, 217, 255, 0.3), 0 0 10px rgba(6, 217, 255, 0.1);
    }
    50% {
      text-shadow: 0 0 10px rgba(6, 217, 255, 0.6), 0 0 20px rgba(6, 217, 255, 0.3), 0 0 30px rgba(6, 217, 255, 0.2);
    }
  }

  @keyframes logoGlow {
    0%, 100% {
      text-shadow: 0 0 8px rgba(6, 217, 255, 0.4);
    }
    50% {
      text-shadow: 0 0 16px rgba(6, 217, 255, 0.8), 0 0 24px rgba(0, 255, 136, 0.6);
    }
  }

  @keyframes dropdownSlide {
    from {
      opacity: 0;
      transform: translateY(-8px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes itemStagger {
    from {
      opacity: 0;
      transform: translateX(-12px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes buttonPulse {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(6, 217, 255, 0.4);
    }
    50% {
      box-shadow: 0 0 0 8px rgba(6, 217, 255, 0);
    }
  }

  @keyframes borderGlow {
    0%, 100% {
      border-color: rgba(6, 217, 255, 0.3);
      box-shadow: 0 0 10px rgba(6, 217, 255, 0.1);
    }
    50% {
      border-color: rgba(6, 217, 255, 0.8);
      box-shadow: 0 0 20px rgba(6, 217, 255, 0.4);
    }
  }

  .logo-glow {
    animation: logoGlow 3s ease-in-out infinite;
  }

  .nav-link {
    position: relative;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0.5px;
    background: linear-gradient(90deg, #06D9FF, #00FF88);
    animation: slideUnderline 0.3s ease-out forwards;
  }

  .dropdown-menu {
    animation: dropdownSlide 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  .dropdown-item {
    animation: itemStagger 0.3s ease-out forwards;
  }

  .dropdown-item:nth-child(1) { animation-delay: 0.05s; }
  .dropdown-item:nth-child(2) { animation-delay: 0.1s; }
  .dropdown-item:nth-child(3) { animation-delay: 0.15s; }

  .cta-button {
    animation: buttonPulse 2s ease-in-out infinite;
    transition: all 0.3s ease;
  }

  .cta-button:hover {
    transform: scale(1.05);
    animation: none;
    box-shadow: 0 0 20px rgba(6, 217, 255, 0.6);
  }

  .header-border {
    animation: borderGlow 2s ease-in-out infinite;
  }
`;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <style>{style}</style>
      <header className="sticky top-0 z-50 border-b header-border bg-slate-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold text-cyan-400 logo-glow hover:scale-110 transition-transform duration-300">
          Velo<span className="text-emerald-400">DX</span>
        </Link>

        <div className="hidden md:flex md:gap-8">
          <div className="relative group">
            <Link href="/urunler" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1">
              Ürünler
              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">▼</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="absolute left-0 mt-0 w-56 bg-slate-900/95 border border-cyan-500/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50 dropdown-menu">
              <Link href="/urunler" className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-t-lg dropdown-item">
                Tüm Ürünler
              </Link>
              <Link href="/urunler/ai-voice-agents" className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors dropdown-item">
                🤖 AI Voice Agents
              </Link>
              <Link href="/urunler/crm" className="block px-4 py-2 text-sm text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors dropdown-item">
                💼 CRM
              </Link>
              <Link href="/urunler/erp" className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors dropdown-item">
                📦 ERP
              </Link>
              <Link href="/urunler/hrflow" className="block px-4 py-2 text-sm text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors dropdown-item">
                👥 HRFlow
              </Link>
              <Link href="/urunler/kurye-takip" className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors dropdown-item">
                📍 Kurye Takip
              </Link>
              <Link href="/urunler/wms" className="block px-4 py-2 text-sm text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors rounded-b-lg dropdown-item">
                🏭 WMS
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link href="/hizmetler" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1">
              Hizmetler
              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">▼</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="absolute left-0 mt-0 w-56 bg-slate-900/95 border border-cyan-500/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50 dropdown-menu">
              <Link href="/hizmetler" className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-t-lg dropdown-item">
                Tüm Hizmetler
              </Link>
              <Link href="/hizmetler/ai-transformation" className="block px-4 py-2 text-sm text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors dropdown-item">
                🚀 Kurumsal AI Dönüşümü
              </Link>
              <Link href="/hizmetler/field-discovery" className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-b-lg dropdown-item">
                🔍 Saha Ziyareti İle Keşif
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link href="/hakkimizda" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1">
              Hakkımızda
              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">▼</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="absolute left-0 mt-0 w-48 bg-slate-900/95 border border-cyan-500/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50 dropdown-menu">
              <Link href="/hakkimizda" className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-t-lg dropdown-item">
                Genel Bilgiler
              </Link>
              <Link href="/hakkimizda/misyon" className="block px-4 py-2 text-sm text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors dropdown-item">
                🎯 Misyonumuz
              </Link>
              <Link href="/hakkimizda/vizyon" className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors rounded-b-lg dropdown-item">
                🚀 Vizyonumuz
              </Link>
            </div>
          </div>
          <Link href="/blog" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group nav-link">
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/mesajlasma" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group nav-link">
            Entegrasyonlar
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/neden-velora" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group nav-link">
            Neden VeloraDX
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        <Link href="/iletisim" className="hidden md:block">
          <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-950 font-semibold cta-button">İletişim</Button>
        </Link>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-cyan-500/20 bg-slate-900/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <div>
              <Link href="/urunler" className="text-sm font-medium text-slate-300 hover:text-cyan-400 hover:pl-2 transition-all block">Ürünler</Link>
              <div className="pl-4 flex flex-col gap-2 mt-2 border-l border-cyan-500/20">
                <Link href="/urunler" className="text-xs text-cyan-400 hover:text-cyan-300">📋 Tüm Ürünler</Link>
                <Link href="/urunler/ai-voice-agents" className="text-xs text-cyan-400 hover:text-cyan-300">🤖 AI Voice Agents</Link>
                <Link href="/urunler/crm" className="text-xs text-cyan-400 hover:text-cyan-300">💼 CRM</Link>
                <Link href="/urunler/erp" className="text-xs text-cyan-400 hover:text-cyan-300">📦 ERP</Link>
                <Link href="/urunler/hrflow" className="text-xs text-cyan-400 hover:text-cyan-300">👥 HRFlow</Link>
                <Link href="/urunler/kurye-takip" className="text-xs text-cyan-400 hover:text-cyan-300">📍 Kurye Takip</Link>
                <Link href="/urunler/wms" className="text-xs text-cyan-400 hover:text-cyan-300">🏭 WMS</Link>
              </div>
            </div>
            <div>
              <Link href="/hizmetler" className="text-sm font-medium text-slate-300 hover:text-cyan-400 hover:pl-2 transition-all block">Hizmetler</Link>
              <div className="pl-4 flex flex-col gap-2 mt-2 border-l border-cyan-500/20">
                <Link href="/hizmetler/ai-transformation" className="text-xs text-emerald-400 hover:text-emerald-300">🚀 Kurumsal AI Dönüşümü</Link>
                <Link href="/hizmetler/field-discovery" className="text-xs text-cyan-400 hover:text-cyan-300">🔍 Saha Ziyareti İle Keşif</Link>
              </div>
            </div>
            <div>
              <Link href="/hakkimizda" className="text-sm font-medium text-slate-300 hover:text-cyan-400 hover:pl-2 transition-all block">Hakkımızda</Link>
              <div className="pl-4 flex flex-col gap-2 mt-2 border-l border-cyan-500/20">
                <Link href="/hakkimizda/misyon" className="text-xs text-emerald-400 hover:text-emerald-300">🎯 Misyonumuz</Link>
                <Link href="/hakkimizda/vizyon" className="text-xs text-cyan-400 hover:text-cyan-300">🚀 Vizyonumuz</Link>
              </div>
            </div>
            <Link href="/blog" className="text-sm font-medium text-slate-300 hover:text-cyan-400 hover:pl-2 transition-all">Blog</Link>
            <Link href="/mesajlasma" className="text-sm font-medium text-slate-300 hover:text-cyan-400 hover:pl-2 transition-all">Entegrasyonlar</Link>
            <Link href="/neden-velora" className="text-sm font-medium text-slate-300 hover:text-cyan-400 hover:pl-2 transition-all">Neden VeloraDX</Link>
            <Link href="/iletisim" className="w-full mt-2">
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-950 font-semibold">İletişim</Button>
            </Link>
          </div>
        </div>
      )}
      </header>
    </>
  );
}
