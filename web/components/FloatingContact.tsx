"use client";

import { useState } from "react";
import Link from "next/link";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Menu */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-2xl border border-slate-200 p-4 w-72 animate-in fade-in slide-in-from-bottom-2">
          <h3 className="font-bold text-slate-900 mb-4">Bize Ulaşın</h3>
          <div className="space-y-3">
            {/* WhatsApp */}
            <a href="https://wa.me/905326625782" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition">
              <span className="text-2xl">💬</span>
              <div>
                <p className="font-medium text-sm text-slate-900">WhatsApp</p>
                <p className="text-xs text-slate-500">Anında mesaj gönderin</p>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+905326625782"
               className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition">
              <span className="text-2xl">☎️</span>
              <div>
                <p className="font-medium text-sm text-slate-900">Telefon</p>
                <p className="text-xs text-slate-500">+90 532 662 57 82</p>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:info@veloradx.com"
               className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 transition">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="font-medium text-sm text-slate-900">Email</p>
                <p className="text-xs text-slate-500">info@veloradx.com</p>
              </div>
            </a>

            {/* Contact Form */}
            <Link href="/iletisim"
               className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition">
              <span className="text-2xl">📋</span>
              <div>
                <p className="font-medium text-sm text-slate-900">Form</p>
                <p className="text-xs text-slate-500">Detaylı mesaj gönderin</p>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-white text-2xl hover:scale-110 transform hover:shadow-emerald-500/50 border-2 border-emerald-300/30 group"
        title={isOpen ? "Kapat" : "Bize Ulaşın"}
      >
        <span className="group-hover:scale-125 transition-transform duration-300">💬</span>
        {isOpen ? "✕" : ""}

        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold animate-pulse border border-white">
            !</div>
        )}
      </button>
    </div>
  );
}
