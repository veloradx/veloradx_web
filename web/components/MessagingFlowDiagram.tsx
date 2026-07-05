"use client";

export function MessagingFlowDiagram() {
  return (
    <div className="w-full">
      <style>{`
        @keyframes flowPulse {
          0%, 100% {
            opacity: 0.3;
            stroke-width: 2;
          }
          50% {
            opacity: 1;
            stroke-width: 3;
          }
        }

        @keyframes nodeGlow {
          0%, 100% {
            r: 28px;
            filter: drop-shadow(0 0 8px rgba(6, 217, 255, 0.4));
          }
          50% {
            r: 32px;
            filter: drop-shadow(0 0 16px rgba(6, 217, 255, 0.8));
          }
        }

        @keyframes nodeGlowEmerald {
          0%, 100% {
            r: 28px;
            filter: drop-shadow(0 0 8px rgba(0, 255, 136, 0.4));
          }
          50% {
            r: 32px;
            filter: drop-shadow(0 0 16px rgba(0, 255, 136, 0.8));
          }
        }

        @keyframes dash {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        .flow-arrow {
          animation: flowPulse 2s ease-in-out infinite;
        }

        .flow-dash {
          animation: dash 3s linear infinite;
          stroke-dasharray: 10,5;
        }

        .node-cyan {
          animation: nodeGlow 3s ease-in-out infinite;
        }

        .node-emerald {
          animation: nodeGlowEmerald 3s ease-in-out infinite;
        }

        .platform-icon {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>

      <svg viewBox="0 0 1200 400" className="w-full" xmlns="http://www.w3.org/2000/svg">
        {/* Title */}
        <text x="600" y="30" textAnchor="middle" className="fill-cyan-400 text-lg font-bold" fontSize="24">
          MESAJLAŞMA ORKESTRASİYONU
        </text>

        {/* Left Side - Input Channels */}
        <g>
          {/* WhatsApp */}
          <circle cx="80" cy="100" r="28" className="node-cyan fill-cyan-600/20 stroke-cyan-400" strokeWidth="2" />
          <text x="80" y="108" textAnchor="middle" className="platform-icon fill-white">
            💬
          </text>
          <text x="80" y="155" textAnchor="middle" className="fill-slate-300" fontSize="14">
            WhatsApp
          </text>

          {/* Telegram */}
          <circle cx="80" cy="200" r="28" className="node-cyan fill-cyan-600/20 stroke-cyan-400" strokeWidth="2" />
          <text x="80" y="208" textAnchor="middle" className="platform-icon fill-white">
            📱
          </text>
          <text x="80" y="255" textAnchor="middle" className="fill-slate-300" fontSize="14">
            Telegram
          </text>

          {/* Instagram */}
          <circle cx="80" cy="300" r="28" className="node-cyan fill-cyan-600/20 stroke-cyan-400" strokeWidth="2" />
          <text x="80" y="308" textAnchor="middle" className="platform-icon fill-white">
            📸
          </text>
          <text x="80" y="355" textAnchor="middle" className="fill-slate-300" fontSize="14">
            Instagram
          </text>

          {/* Email */}
          <circle cx="80" cy="100" cy="380" r="28" className="node-cyan fill-cyan-600/20 stroke-cyan-400" strokeWidth="2" />
        </g>

        {/* Middle - Unified Inbox & Processing */}
        <g>
          {/* Unified Inbox */}
          <rect x="280" y="80" width="140" height="240" rx="8" className="fill-emerald-600/20 stroke-emerald-400" strokeWidth="2" />
          <circle cx="350" cy="150" r="32" className="node-emerald fill-emerald-600/30 stroke-emerald-400" strokeWidth="2" />
          <text x="350" y="160" textAnchor="middle" fontSize="24" className="fill-white">
            📥
          </text>
          <text x="350" y="210" textAnchor="middle" className="fill-emerald-300 font-bold" fontSize="13">
            Unified
          </text>
          <text x="350" y="230" textAnchor="middle" className="fill-emerald-300 font-bold" fontSize="13">
            Inbox
          </text>
        </g>

        {/* Flow Lines - Input to Inbox */}
        <g className="flow-arrow">
          {/* WhatsApp to Inbox */}
          <line x1="108" y1="100" x2="280" y2="140" className="flow-dash stroke-cyan-400" strokeWidth="2" />
          {/* Telegram to Inbox */}
          <line x1="108" y1="200" x2="280" y2="180" className="flow-dash stroke-cyan-400" strokeWidth="2" />
          {/* Instagram to Inbox */}
          <line x1="108" y1="300" x2="280" y2="240" className="flow-dash stroke-cyan-400" strokeWidth="2" />
        </g>

        {/* Arrow heads */}
        <defs>
          <marker id="arrowCyan" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#06D9FF" />
          </marker>
          <marker id="arrowEmerald" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#00FF88" />
          </marker>
        </defs>

        {/* Center - AI Processing */}
        <g>
          <circle cx="600" cy="200" r="36" className="node-emerald fill-emerald-600/40 stroke-emerald-400" strokeWidth="3" />
          <text x="600" y="210" textAnchor="middle" fontSize="32" className="fill-white">
            🤖
          </text>
          <text x="600" y="260" textAnchor="middle" className="fill-emerald-400 font-bold" fontSize="14">
            AI Engine
          </text>
        </g>

        {/* Flow - Inbox to AI */}
        <line x1="420" y1="200" x2="564" y2="200" className="flow-dash stroke-emerald-400" strokeWidth="2" markerEnd="url(#arrowEmerald)" />
        <text x="492" y="185" textAnchor="middle" className="fill-emerald-400" fontSize="12">
          Analyze
        </text>

        {/* Right Side - Response Channels */}
        <g>
          {/* Response Path */}
          <circle cx="950" cy="100" r="28" className="node-cyan fill-cyan-600/20 stroke-cyan-400" strokeWidth="2" />
          <text x="950" y="108" textAnchor="middle" className="platform-icon fill-white">
            ✓
          </text>
          <text x="950" y="155" textAnchor="middle" className="fill-slate-300" fontSize="14">
            Yanıt
          </text>

          {/* Automatic Response */}
          <circle cx="950" cy="200" r="28" className="node-cyan fill-cyan-600/20 stroke-cyan-400" strokeWidth="2" />
          <text x="950" y="208" textAnchor="middle" className="platform-icon fill-white">
            ⚡
          </text>
          <text x="950" y="255" textAnchor="middle" className="fill-slate-300" fontSize="14">
            Otomatik
          </text>

          {/* Back to Channel */}
          <circle cx="950" cy="300" r="28" className="node-cyan fill-cyan-600/20 stroke-cyan-400" strokeWidth="2" />
          <text x="950" y="308" textAnchor="middle" className="platform-icon fill-white">
            📤
          </text>
          <text x="950" y="355" textAnchor="middle" className="fill-slate-300" fontSize="14">
            Kanal
          </text>
        </g>

        {/* Flow - AI to Response */}
        <line x1="636" y1="200" x2="922" y2="200" className="flow-dash stroke-emerald-400" strokeWidth="2" markerEnd="url(#arrowEmerald)" />
        <text x="779" y="185" textAnchor="middle" className="fill-emerald-400" fontSize="12">
          Route
        </text>

        {/* Bottom Info */}
        <g>
          <rect x="180" y="330" width="840" height="50" rx="6" className="fill-slate-900/50 stroke-cyan-500/30" strokeWidth="1" />

          <text x="200" y="350" className="fill-cyan-400 font-bold" fontSize="13">✓ Tüm mesajlar tek dashboard</text>
          <text x="200" y="367" className="fill-slate-400" fontSize="12">Müşteri konteksti korunur • AI ya da İnsan • Orijinal kanala geri</text>

          <text x="700" y="350" className="fill-emerald-400 font-bold" fontSize="13">⚡ Anlık & Otomatik</text>
          <text x="700" y="367" className="fill-slate-400" fontSize="12">24/7 • Çok kanal • 0 kayıp mesaj</text>
        </g>
      </svg>
    </div>
  );
}
