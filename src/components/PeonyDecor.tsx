import { useEffect, useRef } from "react";

type Peony = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: number;      // px
  opacity: number;
  blur: number;      // px
  rotate: number;    // deg
  depth: number;     // parallax factor (0 = vast, 1 = veel beweging)
  floatDur: number;  // s
};

/**
 * PeonyDecor — zwevende pioenrozen met diepte (parallax + float).
 * Geeft een 3D-gevoel rond de hero en bij sectie-overgangen.
 */
export function PeonyDecor({
  peonies,
  className = "",
}: {
  peonies: Peony[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mx = 0;
    let my = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;
    let running = false;

    const tick = () => {
      cx += (mx - cx) * 0.07;
      cy += (my - cy) * 0.07;
      const items = el.querySelectorAll<HTMLElement>("[data-depth]");
      items.forEach((it) => {
        const d = parseFloat(it.dataset.depth || "0");
        it.style.setProperty("--px", `${cx * d * 40}px`);
        it.style.setProperty("--py", `${cy * d * 40}px`);
      });
      if (Math.abs(mx - cx) > 0.001 || Math.abs(my - cy) > 0.001) {
        raf = requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    const onMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {peonies.map((p, i) => (
        <div
          key={i}
          data-depth={p.depth}
          className="absolute"
          style={{
            top: p.top,
            bottom: p.bottom,
            left: p.left,
            right: p.right,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            transform: "translate3d(var(--px,0), var(--py,0), 0)",
            willChange: "transform",
          }}
        >
          <img
            src="/peony.png"
            alt=""
            className="h-full w-full object-contain"
            style={{
              filter: `blur(${p.blur}px) drop-shadow(0 20px 40px rgba(168,136,74,0.15))`,
              animation: `peonyFloat ${p.floatDur}s ease-in-out ${i * 0.6}s infinite`,
              ["--peony-rot" as string]: `${p.rotate}deg`,
            }}
          />
        </div>
      ))}
      <style>{`
        @keyframes peonyFloat {
          0%, 100% { transform: rotate(var(--peony-rot,0deg)) translateY(0) scale(1); }
          50%      { transform: rotate(calc(var(--peony-rot,0deg) + 3deg)) translateY(-18px) scale(1.03); }
        }
      `}</style>
    </div>
  );
}
