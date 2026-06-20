import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function PromoBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("he_promo_summer26_dismissed") === "1") {
      setVisible(false);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem("he_promo_summer26_dismissed", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative z-[60] overflow-hidden border-b border-[var(--gold)]/30 bg-gradient-to-r from-[#1a1815] via-[#2a221a] to-[#1a1815] text-[var(--ivory)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(232,200,120,0.25) 50%, transparent 100%)",
          animation: "promoShine 6s linear infinite",
        }}
      />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2.5 text-sm">
        <div className="flex flex-1 items-center justify-center gap-2 text-center">
          <Sparkles className="h-4 w-4 shrink-0 text-[var(--gold)]" aria-hidden />
          <span className="text-[var(--ivory)]/95">
            <strong className="font-medium text-[var(--gold)]">Zomeractie:</strong>{" "}
            Boek je bruiloft tussen 1 juli – 31 augustus en ontvang{" "}
            <strong className="text-[var(--gold)]">20% korting</strong>.{" "}
            <Link
              to="/afspraak"
              className="underline-offset-2 hover:underline"
            >
              Plan je afspraak →
            </Link>
          </span>
        </div>
        <button
          onClick={dismiss}
          className="shrink-0 text-lg leading-none text-[var(--ivory)]/60 hover:text-[var(--ivory)]"
          aria-label="Sluiten"
        >
          ×
        </button>
      </div>
      <style>{`
        @keyframes promoShine {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
