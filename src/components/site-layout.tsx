import { Link } from "@tanstack/react-router";
import { GlowLink } from "@/components/ui/hover-glow-button";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Sparkles, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { LuxeBackground } from "@/components/ui/luxe-background";

const links = [
  { to: "/", label: "Home" },
  { to: "/catalogus", label: "Catalogus" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/faq", label: "FAQ" },
  { to: "/afspraak", label: "Afspraak" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      {/* Site-wide animated luxe background */}
      <LuxeBackground
        containerClassName="fixed inset-0 -z-10 pointer-events-none"
        interactive={false}
      />
      <Nav />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight">Heaven</span>
          <span className="font-display text-2xl italic text-gradient-gold">Effects</span>
        </Link>

        <ul className="hidden items-center gap-10 text-sm md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="link-luxe text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "link-luxe is-active text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <GlowLink
          to="/afspraak"
          className="hidden md:inline-flex rounded-full border border-foreground/15 bg-foreground px-5 py-2.5"
        >
          Maak een afspraak
        </GlowLink>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 py-6 animate-fade-up">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-lg font-display text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-gradient-blush">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-display text-3xl">Heaven</span>
            <span className="font-display text-3xl italic text-gradient-gold">Effects</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Wedding &amp; Event Design. Spectaculaire, innovatieve en luxe bruiloften en
            evenementen in Nederland, België &amp; Duitsland.
          </p>
          <p className="mt-6 font-display text-xl italic text-foreground/70">
            "Dream · Believe · Experience · Heaven"
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <span>
                Californiedreef 16<br />
                3565 BL Utrecht
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a href="tel:+31652227124" className="link-luxe">+31 (0)6 5222 71 24</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <a href="mailto:info@heaveneffects.nl" className="link-luxe">
                info@heaveneffects.nl
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Openingstijden
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Ma t/m Do · 12:00 – 20:00</li>
            <li>Vrij t/m Zo · gesloten</li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-all hover:border-accent hover:text-accent"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <Sparkles className="h-4 w-4 text-accent animate-pulse-ring rounded-full" />
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Heaven Effects</p>
          <p>KvK 83081925 · BTW NL862719057B01</p>
        </div>
      </div>
    </footer>
  );
}

/** Hook: reveal-on-scroll for any element with .reveal */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
