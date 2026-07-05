"use client";

import { useState, useEffect, useRef } from "react";

interface StatCounterProps {
  end: number;
  label: string;
  color: "cyan" | "emerald";
}

export function StatCounter({ end, label, color }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const increment = Math.ceil(end / 50);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  const colorClass = color === "cyan" ? "text-cyan-400" : "text-emerald-400";

  return (
    <div ref={ref} className="text-center">
      <p className={`text-4xl sm:text-5xl font-black ${colorClass} tabular-nums`}>
        {count}+
      </p>
      <p className="text-sm sm:text-base text-slate-400 mt-2">{label}</p>
    </div>
  );
}
