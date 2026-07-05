"use client";

interface TestimonialCardProps {
  name: string;
  company: string;
  position: string;
  quote: string;
  avatar: string;
  rating: number;
}

export function TestimonialCard({
  name,
  company,
  position,
  quote,
  avatar,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-cyan-500/20 rounded-lg hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-cyan-400 text-lg">
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-300 mb-6 leading-relaxed italic">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-cyan-500/10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {avatar}
        </div>
        <div>
          <p className="font-bold text-white text-sm">{name}</p>
          <p className="text-cyan-400 text-xs">{position}</p>
          <p className="text-slate-500 text-xs">{company}</p>
        </div>
      </div>
    </div>
  );
}
