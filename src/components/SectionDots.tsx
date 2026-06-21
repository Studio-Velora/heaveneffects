import { useEffect, useState, useRef } from "react";

type Props = {
  /** Labels per snap-section, in volgorde */
  labels: string[];
};

/**
 * SectionDots — verticale dots rechts in beeld.
 * Verschijnen kort wanneer de actieve sectie verandert, faden daarna weer weg.
 */
export function SectionDots({ labels }: Props) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef<number | null>(null);
  const lastActive = useRef(0);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".snap-section"),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pak de meest zichtbare snap-section
        let best: { idx: number; ratio: number } | null = null;
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const idx = sections.indexOf(e.target as HTMLElement);
          if (idx < 0) continue;
          if (!best || e.intersectionRatio > best.ratio) {
            best = { idx, ratio: e.intersectionRatio };
          }
        }
        if (best && best.idx !== lastActive.current) {
          lastActive.current = best.idx;
          setActive(best.idx);
          setVisible(true);
          if (hideTimer.current) window.clearTimeout(hideTimer.current);
          hideTimer.current = window.setTimeout(() => setVisible(false), 1600);
        }
      },
      { threshold: [0.4, 0.6, 0.8] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => {
      observer.disconnect();
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
  }, []);

  const goTo = (idx: number) => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".snap-section"),
    );
    sections[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setVisible(true);
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setVisible(false), 1600);
  };

  return (
    <nav
      aria-label="Sectie navigatie"
      className={`pointer-events-none fixed right-6 top-1/2 z-40 -translate-y-1/2 transition-all duration-700 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      }`}
      onMouseEnter={() => {
        if (hideTimer.current) window.clearTimeout(hideTimer.current);
        setVisible(true);
      }}
      onMouseLeave={() => {
        if (hideTimer.current) window.clearTimeout(hideTimer.current);
        hideTimer.current = window.setTimeout(() => setVisible(false), 1600);
      }}
    >
      <ul className="pointer-events-auto flex flex-col gap-3.5">
        {labels.map((label, i) => {
          const isActive = i === active;
          return (
            <li key={label}>
              <button
                onClick={() => goTo(i)}
                aria-label={`Naar sectie ${label}`}
                aria-current={isActive ? "true" : undefined}
                className="group relative flex items-center gap-3"
              >
                <span
                  className={`block rounded-full border transition-all duration-500 ${
                    isActive
                      ? "h-3 w-3 border-[var(--gold)] bg-[var(--gold)] shadow-[0_0_10px_rgba(232,200,120,0.6)]"
                      : "h-2 w-2 border-[var(--gold)]/40 bg-transparent hover:border-[var(--gold)] hover:bg-[var(--gold)]/50"
                  }`}
                />
                <span
                  className={`pointer-events-none whitespace-nowrap text-[10px] uppercase tracking-[0.3em] transition-all duration-500 ${
                    isActive
                      ? "text-[var(--gold-deep)] opacity-100"
                      : "text-muted-foreground/0 opacity-0 group-hover:opacity-80"
                  }`}
                >
                  {label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
