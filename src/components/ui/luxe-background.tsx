"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { PulsingBorder } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * LuxeBackground — mix of an animated multi-color gradient (mouse-reactive blobs)
 * with a soft Paper-shaders pulsing accent. Tuned to the Heaven Effects palette
 * (gold / blush / ivory). Use as a positioned background behind hero content.
 */
export function LuxeBackground({
  children,
  className,
  containerClassName,
  interactive = true,
  firstColor = "246, 220, 175",   // soft gold
  secondColor = "255, 228, 217",  // blush
  thirdColor = "232, 199, 156",   // champagne
  fourthColor = "212, 175, 124",  // deep gold
  fifthColor = "255, 245, 230",   // ivory
  pointerColor = "212, 175, 124",
  size = "55%",
  blendingValue = "soft-light",
}: {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  interactive?: boolean;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
}) {
  const interactiveRef = useRef<HTMLDivElement | null>(null);
  const curX = useRef(0);
  const curY = useRef(0);
  const tgX = useRef(0);
  const tgY = useRef(0);
  const raf = useRef<number | null>(null);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (!interactive) return;
    const tick = () => {
      if (interactiveRef.current) {
        curX.current += (tgX.current - curX.current) / 20;
        curY.current += (tgY.current - curY.current) / 20;
        interactiveRef.current.style.transform = `translate(${Math.round(
          curX.current,
        )}px, ${Math.round(curY.current)}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, [interactive]);

  const onMove = (e: React.MouseEvent) => {
    if (!interactiveRef.current) return;
    const rect = interactiveRef.current.getBoundingClientRect();
    tgX.current = e.clientX - rect.left - rect.width / 2;
    tgY.current = e.clientY - rect.top - rect.height / 2;
  };

  const blobBase =
    "absolute [mix-blend-mode:var(--lx-blend)] opacity-90 [filter:blur(60px)]";

  return (
    <div
      onMouseMove={interactive ? onMove : undefined}
      className={cn(
        "relative overflow-hidden",
        "bg-[linear-gradient(180deg,_var(--lx-bg-start),_var(--lx-bg-end))]",
        containerClassName,
      )}
      style={
        {
          ["--lx-bg-start" as string]: "hsl(var(--background))",
          ["--lx-bg-end" as string]: "hsl(var(--background))",
          ["--lx-first" as string]: firstColor,
          ["--lx-second" as string]: secondColor,
          ["--lx-third" as string]: thirdColor,
          ["--lx-fourth" as string]: fourthColor,
          ["--lx-fifth" as string]: fifthColor,
          ["--lx-pointer" as string]: pointerColor,
          ["--lx-size" as string]: size,
          ["--lx-blend" as string]: blendingValue,
        } as React.CSSProperties
      }
    >
      {/* SVG goo filter */}
      <svg className="hidden">
        <defs>
          <filter id="lx-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Pulsing shader accent */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-60">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute"
        >
          <PulsingBorder
            colors={["#D4AF7C", "#F6DCAF", "#FFE4D9", "#E8C79C", "#FFF5E6"]}
            colorBack="#00000000"
            speed={0.6}
            roundness={1}
            thickness={0.08}
            softness={0.9}
            intensity={0.6}
            spotSize={0.18}
            pulse={0.18}
            smoke={0.45}
            smokeSize={3}
            scale={0.62}
            rotation={0}
            frame={0}
            style={{ width: 560, height: 560 }}
          />
        </motion.div>
      </div>

      {/* Gradient goo blobs */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          isSafari ? "" : "[filter:url(#lx-goo)_blur(40px)]",
        )}
      >
        <div
          className={cn(
            blobBase,
            "top-[calc(50%-var(--lx-size)/2)] left-[calc(50%-var(--lx-size)/2)] w-[var(--lx-size)] h-[var(--lx-size)]",
            "bg-[radial-gradient(circle_at_center,_rgba(var(--lx-first),0.8)_0,_rgba(var(--lx-first),0)_50%)]",
            "[animation:lx-first_30s_ease_infinite] origin-[center_center]",
          )}
        />
        <div
          className={cn(
            blobBase,
            "top-[calc(50%-var(--lx-size)/2)] left-[calc(50%-var(--lx-size)/2)] w-[var(--lx-size)] h-[var(--lx-size)]",
            "bg-[radial-gradient(circle_at_center,_rgba(var(--lx-second),0.8)_0,_rgba(var(--lx-second),0)_50%)]",
            "[animation:lx-second_20s_reverse_infinite] origin-[calc(50%-400px)]",
          )}
        />
        <div
          className={cn(
            blobBase,
            "top-[calc(50%-var(--lx-size)/2)] left-[calc(50%-var(--lx-size)/2)] w-[var(--lx-size)] h-[var(--lx-size)]",
            "bg-[radial-gradient(circle_at_center,_rgba(var(--lx-third),0.8)_0,_rgba(var(--lx-third),0)_50%)]",
            "[animation:lx-third_40s_linear_infinite] origin-[calc(50%+400px)]",
          )}
        />
        <div
          className={cn(
            blobBase,
            "top-[calc(50%-var(--lx-size)/2)] left-[calc(50%-var(--lx-size)/2)] w-[var(--lx-size)] h-[var(--lx-size)] opacity-70",
            "bg-[radial-gradient(circle_at_center,_rgba(var(--lx-fourth),0.8)_0,_rgba(var(--lx-fourth),0)_50%)]",
            "[animation:lx-fourth_40s_ease_infinite] origin-[calc(50%-200px)]",
          )}
        />
        <div
          className={cn(
            blobBase,
            "top-[calc(50%-var(--lx-size))] left-[calc(50%-var(--lx-size))] w-[calc(var(--lx-size)*2)] h-[calc(var(--lx-size)*2)]",
            "bg-[radial-gradient(circle_at_center,_rgba(var(--lx-fifth),0.8)_0,_rgba(var(--lx-fifth),0)_50%)]",
            "[animation:lx-fifth_20s_ease_infinite] origin-[calc(50%-800px)_calc(50%+200px)]",
          )}
        />

        {interactive && (
          <div
            ref={interactiveRef}
            className={cn(
              "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-70",
              "bg-[radial-gradient(circle_at_center,_rgba(var(--lx-pointer),0.8)_0,_rgba(var(--lx-pointer),0)_50%)]",
              "[mix-blend-mode:var(--lx-blend)]",
            )}
          />
        )}
      </div>

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}
