"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CaseStudyPreviewProps {
  clientName: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  resultMetrics: Array<{ label: string; value: string }>;
  slug: string;
}

export function CaseStudyPreview({
  clientName,
  industry,
  problem,
  solution,
  result,
  resultMetrics,
  slug,
}: CaseStudyPreviewProps) {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Başlık */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
          Bir Müşterimiz <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Neler Yaşıyordu?</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          {clientName} — {industry}
        </p>
      </div>

      {/* Problem → Solution Flow */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Problem Card */}
        <Card className="p-8 bg-gradient-to-br from-red-900/20 to-slate-900/40 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-4xl">❌</div>
            <h3 className="text-2xl font-bold text-red-400">Sorun</h3>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg">{problem}</p>
        </Card>

        {/* Solution Card */}
        <Card className="p-8 bg-gradient-to-br from-emerald-900/20 to-slate-900/40 border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-4xl">✅</div>
            <h3 className="text-2xl font-bold text-emerald-400">Çözüm</h3>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg">{solution}</p>
        </Card>
      </div>

      {/* Results Section */}
      <Card className="p-8 bg-gradient-to-r from-cyan-900/30 via-emerald-900/30 to-cyan-900/30 border border-cyan-500/30 mb-12">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">📈 Sonuç</h3>
          <p className="text-slate-300 leading-relaxed text-lg">{result}</p>
        </div>

        {/* Metrics Grid */}
        {resultMetrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-cyan-500/20">
            {resultMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl sm:text-3xl font-black text-emerald-400">
                  {metric.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* CTA */}
      <div className="text-center">
        <Link href={`/projeler/${slug}`}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-950 font-bold px-8 py-6 shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
          >
            Tam Çalışmayı İncele
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
}
