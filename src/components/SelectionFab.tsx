import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { useSelection } from "@/lib/selection";

export function SelectionFab() {
  const { count } = useSelection();
  if (count === 0) return null;

  return (
    <Link
      to="/afspraak"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-[#1a1815] py-3 pl-4 pr-5 text-sm text-[var(--ivory)] shadow-2xl shadow-black/30 ring-1 ring-[var(--gold)]/40 transition-all hover:ring-[var(--gold)] hover:scale-[1.02]"
    >
      <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[var(--gold)]/20">
        <Sparkles className="h-4 w-4 text-[var(--gold)]" />
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--gold)] text-[10px] font-semibold text-[#1a1815]">
          {count}
        </span>
      </span>
      <span className="hidden sm:inline">
        {count === 1 ? "1 item in offerte" : `${count} items in offerte`}
      </span>
      <span className="sm:hidden">Offerte</span>
      <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
    </Link>
  );
}
