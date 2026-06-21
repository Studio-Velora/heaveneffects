/**
 * LuxeBackground — 24 gouden waves op canvas.
 * Eén requestAnimationFrame loop, 1 layer, geen 24 GPU-layers
 * en geen feTurbulence filter die elke frame de boel resampled.
 * Daardoor echt smooth — geen 0.5s stutter meer.
 */
import { useEffect, useRef } from "react";

type Wave = {
  y: number;        // 0–1 (verticale fractie van canvas)
  amp: number;      // pixels
  width: number;    // stroke width
  speed: number;    // px/s
  phase: number;    // start fase
  opacity: number;
  hue: "gold" | "soft" | "hair";
  glow: boolean;
};

function buildWaves(): Wave[] {
  // 24 waves verspreid over de hele hoogte, allemaal uitgerekt (lange golflengte)
  return [
    { y: 0.05, amp: 22, width: 0.5, speed:  18, phase: 0.0, opacity: 0.25, hue: "hair", glow: false },
    { y: 0.09, amp: 28, width: 0.6, speed: -22, phase: 0.3, opacity: 0.35, hue: "hair", glow: false },
    { y: 0.13, amp: 30, width: 0.6, speed:  16, phase: 0.7, opacity: 0.40, hue: "soft", glow: false },
    { y: 0.18, amp: 35, width: 0.7, speed: -20, phase: 1.1, opacity: 0.50, hue: "soft", glow: false },
    { y: 0.23, amp: 40, width: 0.7, speed:  24, phase: 0.5, opacity: 0.55, hue: "soft", glow: false },
    { y: 0.28, amp: 45, width: 0.8, speed: -18, phase: 1.8, opacity: 0.60, hue: "gold", glow: false },
    { y: 0.33, amp: 50, width: 0.9, speed:  28, phase: 0.2, opacity: 0.65, hue: "soft", glow: false },
    { y: 0.38, amp: 55, width: 0.9, speed: -26, phase: 2.4, opacity: 0.70, hue: "gold", glow: false },
    { y: 0.43, amp: 60, width: 1.0, speed:  22, phase: 1.5, opacity: 0.80, hue: "gold", glow: true  },
    { y: 0.47, amp: 65, width: 1.2, speed: -20, phase: 0.0, opacity: 0.90, hue: "gold", glow: true  },
    { y: 0.51, amp: 70, width: 1.4, speed:  24, phase: 3.0, opacity: 1.00, hue: "gold", glow: true  },
    { y: 0.55, amp: 60, width: 1.0, speed: -28, phase: 0.8, opacity: 0.85, hue: "gold", glow: true  },
    { y: 0.59, amp: 55, width: 0.9, speed:  20, phase: 2.1, opacity: 0.75, hue: "soft", glow: false },
    { y: 0.64, amp: 50, width: 1.0, speed: -22, phase: 1.0, opacity: 0.70, hue: "gold", glow: false },
    { y: 0.68, amp: 45, width: 0.8, speed:  18, phase: 2.7, opacity: 0.60, hue: "soft", glow: false },
    { y: 0.72, amp: 40, width: 0.8, speed: -24, phase: 0.4, opacity: 0.55, hue: "soft", glow: false },
    { y: 0.77, amp: 35, width: 0.7, speed:  20, phase: 1.9, opacity: 0.50, hue: "hair", glow: false },
    { y: 0.81, amp: 30, width: 0.7, speed: -18, phase: 0.6, opacity: 0.45, hue: "soft", glow: false },
    { y: 0.85, amp: 28, width: 0.6, speed:  22, phase: 1.3, opacity: 0.40, hue: "hair", glow: false },
    { y: 0.89, amp: 25, width: 0.5, speed: -20, phase: 2.5, opacity: 0.35, hue: "hair", glow: false },
    { y: 0.92, amp: 22, width: 0.5, speed:  16, phase: 0.9, opacity: 0.30, hue: "hair", glow: false },
    { y: 0.95, amp: 20, width: 0.4, speed: -18, phase: 1.7, opacity: 0.28, hue: "hair", glow: false },
    { y: 0.97, amp: 18, width: 0.4, speed:  14, phase: 0.2, opacity: 0.25, hue: "hair", glow: false },
    { y: 0.99, amp: 15, width: 0.3, speed: -16, phase: 1.5, opacity: 0.22, hue: "hair", glow: false },
  ];
}

const HUE_STOPS: Record<Wave["hue"], { strong: string; mid: string; weak: string }> = {
  gold: { strong: "rgba(232,200,120,0.85)", mid: "rgba(168,136,74,0.45)", weak: "rgba(168,136,74,0)" },
  soft: { strong: "rgba(212,184,118,0.65)", mid: "rgba(212,184,118,0.35)", weak: "rgba(212,184,118,0)" },
  hair: { strong: "rgba(232,200,120,0.45)", mid: "rgba(232,200,120,0.20)", weak: "rgba(232,200,120,0)" },
};

export function LuxeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    const waves = buildWaves();

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // pre-compute gradients per hue per render — cheap
    const drawWave = (w: Wave, t: number) => {
      const y = height * w.y;
      const offset = ((t * w.speed) % width + width) % width;
      const wavelength = width * 1.2;

      const grad = ctx.createLinearGradient(0, 0, width, 0);
      const stops = HUE_STOPS[w.hue];
      grad.addColorStop(0, stops.weak);
      grad.addColorStop(0.15, stops.mid);
      grad.addColorStop(0.5, stops.strong);
      grad.addColorStop(0.85, stops.mid);
      grad.addColorStop(1, stops.weak);

      ctx.globalAlpha = w.opacity;
      ctx.lineWidth = w.width;
      ctx.strokeStyle = grad;

      if (w.glow) {
        ctx.shadowColor = "rgba(232,200,120,0.6)";
        ctx.shadowBlur = 6;
      } else {
        ctx.shadowBlur = 0;
      }

      ctx.beginPath();
      // teken een lange sinus — uitgerekt
      const step = Math.max(8, width / 80);
      for (let x = -wavelength; x <= width + wavelength; x += step) {
        const phase = ((x + offset + w.phase * wavelength) / wavelength) * Math.PI * 2;
        const yy = y + Math.sin(phase) * w.amp;
        if (x === -wavelength) ctx.moveTo(x, yy);
        else ctx.lineTo(x, yy);
      }
      ctx.stroke();
    };

    let last = performance.now();
    let elapsed = 0;
    const tick = (now: number) => {
      const dt = Math.min(50, now - last) / 1000;
      last = now;
      elapsed += dt;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < waves.length; i++) drawWave(waves[i], elapsed);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    let resizeRaf = 0;
    const onResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(resize);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(resizeRaf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

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

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ display: "block" }}
      />

      {/* Floating gold dust */}
      <div className="absolute inset-0">
        {Array.from({ length: 32 }).map((_, i) => {
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

      <style>{`
        @keyframes goldDust {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50%      { transform: translate3d(18px, -28px, 0) scale(1.3); }
        }
      `}</style>
    </div>
  );
}
