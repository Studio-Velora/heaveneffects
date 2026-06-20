import { useState, useEffect } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("he_cookie_consent")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("he_cookie_consent", "all");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("he_cookie_consent", "functional");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[999] w-[calc(100%-3rem)] max-w-xl -translate-x-1/2 rounded-2xl border border-[var(--gold)]/30 bg-[var(--card)] shadow-2xl shadow-black/10 p-5 md:p-6">
      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
        <span className="block font-serif text-base text-[var(--foreground)] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Cookies</span>
        We gebruiken functionele cookies en — met uw toestemming — verbetercookies.{" "}
        <a href="/privacybeleid" className="underline underline-offset-2 text-[var(--gold-deep)] hover:text-[var(--gold)] transition-colors">
          Privacyverklaring
        </a>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <button
          onClick={accept}
          className="flex-1 rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-[var(--primary-foreground)] transition-opacity hover:opacity-90"
        >
          Accepteren
        </button>
        <button
          onClick={decline}
          className="flex-1 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
        >
          Alleen functioneel
        </button>
      </div>
    </div>
  );
}
