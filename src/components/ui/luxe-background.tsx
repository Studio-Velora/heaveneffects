/**
 * LuxeBackground — bewegende gouden lijnen (wave).
 * Site-wide achtergrond, fixed positioned, z-index -10.
 */
export function LuxeBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden bg-[var(--background)]"
    >
      {/* Soft radial wash voor diepte */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(212,184,118,0.10), transparent 55%), radial-gradient(ellipse at bottom left, rgba(232,200,120,0.06), transparent 55%)",
        }}
      />

      {/* Bewegende gouden waves */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(168,136,74,0)" />
            <stop offset="20%" stopColor="rgba(168,136,74,0.35)" />
            <stop offset="50%" stopColor="rgba(232,200,120,0.65)" />
            <stop offset="80%" stopColor="rgba(168,136,74,0.35)" />
            <stop offset="100%" stopColor="rgba(168,136,74,0)" />
          </linearGradient>
          <linearGradient id="goldLineSoft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(212,184,118,0)" />
            <stop offset="50%" stopColor="rgba(212,184,118,0.45)" />
            <stop offset="100%" stopColor="rgba(212,184,118,0)" />
          </linearGradient>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Wave 1 — traag, breed */}
        <path
          d="M -200 450 Q 220 350 540 460 T 1240 470 T 1900 440"
          stroke="url(#goldLine)"
          strokeWidth="1.2"
          fill="none"
        >
          <animate
            attributeName="d"
            dur="14s"
            repeatCount="indefinite"
            values="
              M -200 450 Q 220 350 540 460 T 1240 470 T 1900 440;
              M -200 470 Q 220 560 540 440 T 1240 510 T 1900 470;
              M -200 450 Q 220 350 540 460 T 1240 470 T 1900 440"
          />
        </path>

        {/* Wave 2 — sneller, hoger */}
        <path
          d="M -200 320 Q 260 260 600 360 T 1280 340 T 1900 320"
          stroke="url(#goldLineSoft)"
          strokeWidth="0.9"
          fill="none"
        >
          <animate
            attributeName="d"
            dur="11s"
            repeatCount="indefinite"
            values="
              M -200 320 Q 260 260 600 360 T 1280 340 T 1900 320;
              M -200 350 Q 260 420 600 280 T 1280 380 T 1900 340;
              M -200 320 Q 260 260 600 360 T 1280 340 T 1900 320"
          />
        </path>

        {/* Wave 3 — onder, met glow */}
        <path
          d="M -200 600 Q 300 700 660 580 T 1300 640 T 1900 600"
          stroke="url(#goldLine)"
          strokeWidth="1.4"
          fill="none"
          filter="url(#goldGlow)"
        >
          <animate
            attributeName="d"
            dur="17s"
            repeatCount="indefinite"
            values="
              M -200 600 Q 300 700 660 580 T 1300 640 T 1900 600;
              M -200 580 Q 300 500 660 660 T 1300 600 T 1900 640;
              M -200 600 Q 300 700 660 580 T 1300 640 T 1900 600"
          />
        </path>

        {/* Wave 4 — heel subtiel, helemaal onder */}
        <path
          d="M -200 780 Q 240 730 580 790 T 1240 780 T 1900 760"
          stroke="url(#goldLineSoft)"
          strokeWidth="0.7"
          fill="none"
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
              M -200 780 Q 240 730 580 790 T 1240 780 T 1900 760;
              M -200 770 Q 240 830 580 730 T 1240 800 T 1900 780;
              M -200 780 Q 240 730 580 790 T 1240 780 T 1900 760"
          />
        </path>
      </svg>

      {/* Subtle grain bovenop */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
