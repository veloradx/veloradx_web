"use client";

export function OrbAnimation() {
  return (
    <div className="relative w-80 h-80 mx-auto mb-12">
      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(80px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(80px) rotate(-360deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.3;
            box-shadow: 0 0 10px rgba(6, 217, 255, 0.6);
          }
          50% {
            opacity: 0.8;
            box-shadow: 0 0 20px rgba(6, 217, 255, 0.9);
          }
        }

        @keyframes connection-pulse {
          0%, 100% {
            stroke-opacity: 0.2;
            stroke-width: 1;
          }
          50% {
            stroke-opacity: 0.8;
            stroke-width: 2;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .orb {
          animation: orbit 20s linear infinite;
        }

        .orb-inner {
          animation: pulse-glow 3s ease-in-out infinite;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
        }

        .connection-line {
          animation: connection-pulse 4s ease-in-out infinite;
        }

        .center-orb {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 320 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection lines */}
        <line
          x1="160"
          y1="160"
          x2="240"
          y2="80"
          stroke="rgb(6, 217, 255)"
          strokeWidth="2"
          className="connection-line"
          opacity="0.6"
        />
        <line
          x1="160"
          y1="160"
          x2="240"
          y2="240"
          stroke="rgb(0, 255, 136)"
          strokeWidth="2"
          className="connection-line"
          opacity="0.6"
        />
        <line
          x1="160"
          y1="160"
          x2="80"
          y2="240"
          stroke="rgb(6, 217, 255)"
          strokeWidth="2"
          className="connection-line"
          opacity="0.6"
        />
        <line
          x1="160"
          y1="160"
          x2="80"
          y2="80"
          stroke="rgb(0, 255, 136)"
          strokeWidth="2"
          className="connection-line"
          opacity="0.6"
        />

        {/* Circular orbit paths */}
        <circle
          cx="160"
          cy="160"
          r="80"
          fill="none"
          stroke="rgba(6, 217, 255, 0.1)"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
      </svg>

      {/* Center Orb */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="center-orb w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 border-2 border-cyan-400/50">
          <span className="text-2xl">🤖</span>
        </div>
      </div>

      {/* Top Orb - CRM */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 orb">
        <div className="orb-inner w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 border-2 border-cyan-400/50">
          💼
        </div>
      </div>

      {/* Right Orb - ERP */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 orb" style={{ animation: "orbit 20s linear infinite 5s" }}>
        <div className="orb-inner w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 border-2 border-emerald-400/50">
          📦
        </div>
      </div>

      {/* Bottom Orb - HRFlow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 orb" style={{ animation: "orbit 20s linear infinite 10s" }}>
        <div className="orb-inner w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 border-2 border-cyan-400/50">
          👥
        </div>
      </div>

      {/* Left Orb - Voice Agents */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 orb" style={{ animation: "orbit 20s linear infinite 15s" }}>
        <div className="orb-inner w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 border-2 border-emerald-400/50">
          🤖
        </div>
      </div>
    </div>
  );
}
