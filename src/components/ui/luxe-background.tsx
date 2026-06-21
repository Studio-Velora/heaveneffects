/**
 * LuxeBackground — 20 gouden waves die via CSS transforms (GPU)
 * horizontaal driften. Veel sneller dan SVG `d` morphen.
 */

type Wave = {
  y: number;          // verticale positie in viewBox (0-900)
  amp: number;        // amplitude van de golf
  width: number;      // strokeWidth
  stroke: "goldLine" | "goldLineSoft" | "goldLineHair";
  duration: number;   // seconden voor 1 volledige loop
  delay: number;
  opacity: number;
  glow?: boolean;
  reverse?: boolean;  // andere kant op driften
};

// 20 waves, dubbel zoveel — laagje voor laagje
const WAVES: Wave[] = [
  // Top — heel subtiel
  { y: 80,  amp: 30, width: 0.5, stroke: "goldLineHair", duration: 38, delay: 0,   opacity: 0.30 },
  { y: 120, amp: 45, width: 0.6, stroke: "goldLineHair", duration: 32, delay: 2,   opacity: 0.40, reverse: true },
  { y: 170, amp: 40, width: 0.7, stroke: "goldLineSoft", duration: 28, delay: 1,   opacity: 0.55 },
  { y: 220, amp: 55, width: 0.8, stroke: "goldLineSoft", duration: 36, delay: 4,   opacity: 0.50, reverse: true },

  // Boven midden
  { y: 280, amp: 50, width: 0.9, stroke: "goldLineSoft", duration: 26, delay: 0.5, opacity: 0.65 },
  { y: 330, amp: 65, width: 1.0, stroke: "goldLine",     duration: 22, delay: 2.5, opacity: 0.70, reverse: true },
  { y: 380, amp: 55, width: 0.8, stroke: "goldLineHair", duration: 34, delay: 1.5, opacity: 0.45 },
  { y: 420, amp: 70, width: 1.1, stroke: "goldLine",     duration: 20, delay: 0,   opacity: 0.80 },

  // Midden — meest prominent
  { y: 470, amp: 80, width: 1.4, stroke: "goldLine",     duration: 18, delay: 3,   opacity: 1.00, glow: true },
  { y: 510, amp: 60, width: 0.9, stroke: "goldLineSoft", duration: 24, delay: 1,   opacity: 0.75, reverse: true },
  { y: 555, amp: 75, width: 1.2, stroke: "goldLine",     duration: 21, delay: 4.5, opacity: 0.85, glow: true },
  { y: 600, amp: 65, width: 1.0, stroke: "goldLineSoft", duration: 27, delay: 2,   opacity: 0.70, reverse: true },

  // Onder midden
  { y: 650, amp: 70, width: 1.1, stroke: "goldLine",     duration: 25, delay: 3.5, opacity: 0.75, glow: true },
  { y: 700, amp: 55, width: 0.9, stroke: "goldLineSoft", duration: 30, delay: 1.5, opacity: 0.60 },
  { y: 745, amp: 60, width: 0.8, stroke: "goldLineHair", duration: 33, delay: 5,   opacity: 0.50, reverse: true },
  { y: 790, amp: 45, width: 0.7, stroke: "goldLineSoft", duration: 28, delay: 2,   opacity: 0.55 },

  // Bottom
  { y: 830, amp: 50, width: 0.7, stroke: "goldLineHair", duration: 36, delay: 0,   opacity: 0.45, reverse: true },
  { y: 870, amp: 35, width: 0.6, stroke: "goldLineHair", duration: 40, delay: 3.5, opacity: 0.35 },
  { y: 905, amp: 30, width: 0.5, stroke: "goldLineHair", duration: 42, delay: 1,   opacity: 0.30, reverse: true },
  { y: 935, amp: 25, width: 0.4, stroke: "goldLineHair", duration: 45, delay: 4,   opacity: 0.25 },
];

/** Bouw een lange wave-path die 3× zo breed is als de viewport (1440).
 *  Door deze daarna -33.33% te translaten loopt hij seamless. */
function buildWavePath(y: number, amp: number): string {
  const W = 1440;
  const segments = 6; // 6 toppen per viewport-breedte
  const dx = W / segments / 2;
  let d = `M ${-W} ${y}`;
  for (let i = 0; i < 3 * segments; i++) {
    const cx1 = -W + i * dx * 2 + dx / 2;
    const cx2 = -W + i * dx * 2 + (dx * 3) / 2;
    const sign = i % 2 === 0 ? -1 : 1;
    const ny = y + sign * amp;
    const xEnd = -W + (i + 1) * dx * 2;
    d += ` C ${cx1} ${ny} ${cx2} ${ny} ${xEnd} ${y}`;
  }
  return d;
}

export function LuxeBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden bg-[var(--background)]"
    >
      {/* Soft radial wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(212,184,118,0.13), transparent 55%), radial-gradient(ellipse at bottom left, rgba(232,200,120,0.08), transparent 55%)",
        }}
      />

      {/* Floating gold dust */}
      <div className="absolute inset-0">
        {Array.from({ length: 36 }).map((_, i) => {
          const left = (i * 37.3) % 100;
          const top = (i * 53.7) % 100;
          const size = 1 + ((i * 7) % 4);
          const dur = 6 + (i % 6);
          const delay = (i % 5) * 0.7;
          const opacity = 0.15 + ((i * 11) % 35) / 100;
          return (
            <span
              key={i}
              className="absolute rounded-full bg-[var(--gold)]"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                opacity,
                animation: `goldDust ${dur}s ease-in-out ${delay}s infinite`,
                filter: "blur(0.3px)",
                willChange: "transform, opacity",
              }}
            />
          );
        })}
      </div>

      {/* SVG waves */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(168,136,74,0)" />
            <stop offset="20%" stopColor="rgba(168,136,74,0.4)" />
            <stop offset="50%" stopColor="rgba(232,200,120,0.75)" />
            <stop offset="80%" stopColor="rgba(168,136,74,0.4)" />
            <stop offset="100%" stopColor="rgba(168,136,74,0)" />
          </linearGradient>
          <linearGradient id="goldLineSoft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(212,184,118,0)" />
            <stop offset="50%" stopColor="rgba(212,184,118,0.6)" />
            <stop offset="100%" stopColor="rgba(212,184,118,0)" />
          </linearGradient>
          <linearGradient id="goldLineHair" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(232,200,120,0)" />
            <stop offset="50%" stopColor="rgba(232,200,120,0.4)" />
            <stop offset="100%" stopColor="rgba(232,200,120,0)" />
          </linearGradient>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        {WAVES.map((w, i) => {
          const d = buildWavePath(w.y, w.amp);
          return (
            <g
              key={i}
              style={{
                animation: `waveDrift${w.reverse ? "Rev" : ""} ${w.duration}s linear ${w.delay}s infinite`,
                opacity: w.opacity,
                willChange: "transform",
              }}
            >
              <path
                d={d}
                stroke={`url(#${w.stroke})`}
                strokeWidth={w.width}
                fill="none"
                filter={w.glow ? "url(#goldGlow)" : undefined}
              />
            </g>
          );
        })}
      </svg>

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <style>{`
        @keyframes goldDust {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(18px, -28px, 0) scale(1.3); }
        }
        @keyframes waveDrift {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(480px, 0, 0); }
        }
        @keyframes waveDriftRev {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-480px, 0, 0); }
        }
      `}</style>
    </div>
  );
}
