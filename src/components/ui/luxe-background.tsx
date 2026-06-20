/**
 * LuxeBackground — dichte set bewegende gouden lijnen.
 * Verschillende opacities, snelheden, lijndiktes. Fixed achter alle content.
 */

type Wave = {
  d: string;
  d2: string;
  d3?: string;
  stroke: "goldLine" | "goldLineSoft" | "goldLineHair";
  width: number;
  dur: number;
  glow?: boolean;
  opacity: number;
};

const WAVES: Wave[] = [
  // Helemaal bovenin — heel subtiel
  {
    d:  "M -200 120 Q 260 80  600 160 T 1280 130 T 1900 100",
    d2: "M -200 140 Q 260 210 600 80  T 1280 180 T 1900 160",
    stroke: "goldLineHair", width: 0.6, dur: 22, opacity: 0.5,
  },
  {
    d:  "M -200 200 Q 220 240 540 180 T 1240 220 T 1900 200",
    d2: "M -200 220 Q 220 150 540 270 T 1240 170 T 1900 240",
    stroke: "goldLineSoft", width: 0.8, dur: 18, opacity: 0.7,
  },
  // Boven midden
  {
    d:  "M -200 320 Q 260 260 600 360 T 1280 340 T 1900 320",
    d2: "M -200 350 Q 260 420 600 280 T 1280 380 T 1900 340",
    stroke: "goldLineSoft", width: 0.9, dur: 11, opacity: 0.8,
  },
  {
    d:  "M -200 380 Q 320 320 660 410 T 1300 390 T 1900 380",
    d2: "M -200 400 Q 320 470 660 330 T 1300 440 T 1900 410",
    stroke: "goldLine", width: 1.0, dur: 15, opacity: 0.55,
  },
  // Midden — meest prominent
  {
    d:  "M -200 450 Q 220 350 540 460 T 1240 470 T 1900 440",
    d2: "M -200 470 Q 220 560 540 440 T 1240 510 T 1900 470",
    stroke: "goldLine", width: 1.4, dur: 14, opacity: 1, glow: true,
  },
  {
    d:  "M -200 510 Q 280 580 620 470 T 1280 530 T 1900 500",
    d2: "M -200 530 Q 280 460 620 600 T 1280 470 T 1900 540",
    stroke: "goldLineSoft", width: 1.0, dur: 13, opacity: 0.7,
  },
  // Onder midden
  {
    d:  "M -200 600 Q 300 700 660 580 T 1300 640 T 1900 600",
    d2: "M -200 580 Q 300 500 660 660 T 1300 600 T 1900 640",
    stroke: "goldLine", width: 1.3, dur: 17, opacity: 0.85, glow: true,
  },
  {
    d:  "M -200 670 Q 340 600 680 720 T 1320 680 T 1900 650",
    d2: "M -200 700 Q 340 780 680 600 T 1320 740 T 1900 690",
    stroke: "goldLineSoft", width: 0.9, dur: 19, opacity: 0.6,
  },
  // Onderaan
  {
    d:  "M -200 780 Q 240 730 580 790 T 1240 780 T 1900 760",
    d2: "M -200 770 Q 240 830 580 730 T 1240 800 T 1900 780",
    stroke: "goldLineSoft", width: 0.7, dur: 20, opacity: 0.55,
  },
  {
    d:  "M -200 840 Q 280 880 620 810 T 1280 850 T 1900 840",
    d2: "M -200 860 Q 280 790 620 900 T 1280 800 T 1900 820",
    stroke: "goldLineHair", width: 0.5, dur: 24, opacity: 0.4,
  },
];

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
            "radial-gradient(ellipse at top right, rgba(212,184,118,0.12), transparent 55%), radial-gradient(ellipse at bottom left, rgba(232,200,120,0.07), transparent 55%)",
        }}
      />

      {/* Floating gold dust spots */}
      <div className="absolute inset-0">
        {Array.from({ length: 28 }).map((_, i) => {
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
            <stop offset="50%" stopColor="rgba(212,184,118,0.55)" />
            <stop offset="100%" stopColor="rgba(212,184,118,0)" />
          </linearGradient>
          <linearGradient id="goldLineHair" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(232,200,120,0)" />
            <stop offset="50%" stopColor="rgba(232,200,120,0.35)" />
            <stop offset="100%" stopColor="rgba(232,200,120,0)" />
          </linearGradient>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        {WAVES.map((w, i) => (
          <path
            key={i}
            d={w.d}
            stroke={`url(#${w.stroke})`}
            strokeWidth={w.width}
            fill="none"
            opacity={w.opacity}
            filter={w.glow ? "url(#goldGlow)" : undefined}
          >
            <animate
              attributeName="d"
              dur={`${w.dur}s`}
              repeatCount="indefinite"
              values={`${w.d}; ${w.d2}; ${w.d}`}
            />
          </path>
        ))}
      </svg>

      {/* Subtle grain bovenop */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <style>{`
        @keyframes goldDust {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: var(--dust-base, 0.3); }
          50%      { transform: translate(20px, -30px) scale(1.4); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
