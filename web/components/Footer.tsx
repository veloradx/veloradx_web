import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-cyan-500/30 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-cyan-400">VeloraDX</h3>
            <p className="mt-2 text-sm text-slate-300">
              Yapay Zeka entegrasyonu ve dijital dönüşümde uzman çözüm ortağınız.
            </p>
            <div className="mt-4 text-sm text-slate-400 space-y-1">
              <p>📍 Esentepe, Büyükdere Cd. No: 195</p>
              <p>34394 Şişli/İstanbul</p>
              <p>📞 <a href="tel:+905326625782" className="text-cyan-400 hover:text-emerald-400 transition-colors">+90 532 662 57 82</a></p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-400">Hizmetler</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/hizmetler" className="text-slate-400 hover:text-emerald-400 transition">AI Entegrasyonu</Link></li>
              <li><Link href="/urunler" className="text-slate-400 hover:text-emerald-400 transition">Ürünlerimiz</Link></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-emerald-400 transition">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-400">Şirket</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/hakkimizda" className="text-slate-400 hover:text-emerald-400 transition">Hakkımızda</Link></li>
              <li><Link href="/neden-velora" className="text-slate-400 hover:text-emerald-400 transition">Neden VeloraDX</Link></li>
              <li><Link href="/iletisim" className="text-slate-400 hover:text-emerald-400 transition">İletişim</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-400">Sosyal Medya</h4>
            <div className="mt-4 flex gap-4">
              <a href="https://wa.me/905326625782" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-emerald-500/50 text-emerald-400 hover:border-emerald-400 hover:text-emerald-300 transition"
                 title="WhatsApp">
                💬
              </a>
              <a href="tel:+905326625782"
                 className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 hover:text-cyan-300 transition"
                 title="Telefon">
                ☎️
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-pink-500/50 text-pink-400 hover:border-pink-400 hover:text-pink-300 transition"
                 title="Instagram">
                📸
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500/50 text-blue-400 hover:border-blue-400 hover:text-blue-300 transition"
                 title="LinkedIn">
                💼
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-cyan-500/20 pt-8">
          <p className="text-center text-sm text-slate-500">
            © 2024 VeloraDX. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
