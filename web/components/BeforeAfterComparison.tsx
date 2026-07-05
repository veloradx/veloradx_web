"use client";

import { useState } from "react";

interface ComparisonItem {
  label: string;
  before: string;
  after: string;
  icon: string;
}

const comparisons: ComparisonItem[] = [
  {
    label: "Verimlilik",
    before: "%40 Manuel İşlem",
    after: "%95 Otomasyonlu",
    icon: "⚙️",
  },
  {
    label: "İşlem Süresi",
    before: "4 Saat",
    after: "15 Dakika",
    icon: "⏱️",
  },
  {
    label: "Operasyon Maliyeti",
    before: "$100K/Yıl",
    after: "$40K/Yıl",
    icon: "💰",
  },
  {
    label: "Müşteri Memnuniyeti",
    before: "%65",
    after: "%95",
    icon: "😊",
  },
];

export function BeforeAfterComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const current = comparisons[currentIndex];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 border-y border-cyan-500/20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Transformation <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Before & After</span>
          </h2>
          <p className="text-lg text-slate-300">
            Müşterilerimizin dijital dönüşümü sonrası elde ettikleri sonuçlar
          </p>
        </div>

        {/* Comparison Slider */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual Slider */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl border border-cyan-500/30 h-96">
              {/* Before Section */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-slate-900/60 flex flex-col items-center justify-center">
                <p className="text-sm text-slate-400 mb-2">ÖNCESI</p>
                <p className="text-6xl mb-4">❌</p>
                <p className="text-white font-bold text-center px-4">{current.before}</p>
              </div>

              {/* After Section (Overlay) */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-slate-900/60 flex flex-col items-center justify-center transition-all duration-200"
                style={{ width: `${100 - sliderPosition}%` }}
              >
                <p className="text-sm text-slate-400 mb-2">SONRASI</p>
                <p className="text-6xl mb-4">✅</p>
                <p className="text-white font-bold text-center px-4">{current.after}</p>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-emerald-400 transition-all duration-200"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full shadow-lg shadow-cyan-500/50 flex items-center justify-center cursor-grab active:cursor-grabbing">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14M16 5v14" />
                  </svg>
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize"
              />
            </div>

            {/* Instructions */}
            <p className="text-center text-slate-400 text-sm mt-4">
              Slider'ı kaydırarak karşılaştır ←→
            </p>
          </div>

          {/* Comparison List */}
          <div className="space-y-4">
            {comparisons.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setSliderPosition(50);
                }}
                className={`w-full p-6 rounded-lg border-2 transition-all duration-300 text-left group ${
                  idx === currentIndex
                    ? "border-cyan-500 bg-cyan-900/20 shadow-lg shadow-cyan-500/20"
                    : "border-cyan-500/20 bg-slate-900/30 hover:border-cyan-500/60"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{item.icon}</span>
                  <div className="flex-1">
                    <p className="font-bold text-white mb-2 group-hover:text-cyan-400 transition">
                      {item.label}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-slate-500">Öncesi</p>
                        <p className="text-red-400 font-semibold">{item.before}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Sonrası</p>
                        <p className="text-emerald-400 font-semibold">{item.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: "2.4x", label: "Verimlilik Artışı" },
            { value: "94%", label: "Maliyet Tasarrufu" },
            { value: "16x", label: "Hız İyileştirme" },
            { value: "30%", label: "Memnuniyet Artış" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-cyan-900/10 border border-cyan-500/20 rounded-lg hover:border-cyan-500/60 transition">
              <p className="text-3xl font-black text-cyan-400 mb-2">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
