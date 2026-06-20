import { createFileRoute, Link } from "@tanstack/react-router";
import { GlowLink } from "@/components/ui/hover-glow-button";
import { useEffect, useRef } from "react";

import { ArrowRight, Sparkles, Heart, Crown, Wand2 } from "lucide-react";
import { SiteLayout, useReveal } from "@/components/site-layout";
import { categories, CDN } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heaven Effects — Wedding & Event Design" },
      {
        name: "description",
        content:
          "Sierlijk wedding & event design. Stages, decoratie, lichten en special effects voor bruiloften en evenementen in NL, BE & DE.",
      },
      { property: "og:title", content: "Heaven Effects — Wedding & Event Design" },
      {
        property: "og:description",
        content: "Dream · Believe · Experience · Heaven — luxe events op maat.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  useReveal();
  // Section snap alleen voor homepage
  useEffect(() => {
    document.body.classList.add("snap-home");
    return () => document.body.classList.remove("snap-home");
  }, []);

  return (
    <SiteLayout>
      <Hero />
      <Marquee />
      <Intro />
      <Highlights />
      <Quote />
      <CTA />
    </SiteLayout>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <HeroParallax>
      <section className="snap-section relative isolate flex min-h-screen items-center justify-center overflow-hidden pt-32 pb-16 md:pt-0 md:pb-0">
        {/* Mouse-parallax gold orbs */}
        <div className="pointer-events-none absolute inset-0 -z-[5]">
          <div
            className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl float-soft"
            style={{
              background:
                "radial-gradient(circle, rgba(232,200,120,0.55), transparent 65%)",
            }}
          />
          <div
            className="absolute -bottom-20 -right-20 h-[28rem] w-[28rem] rounded-full bg-[var(--gold)]/15 blur-3xl animate-drift"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute -top-20 -left-20 h-[24rem] w-[24rem] rounded-full bg-[var(--blush)]/30 blur-3xl animate-drift"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          {/* Ornament */}
          <div className="mx-auto mb-10 flex items-center justify-center gap-4 animate-fade-up">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <Sparkles className="h-4 w-4 text-[var(--gold)] float-soft" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--gold)]" />
          </div>

          {/* Hoofdtekst — word-by-word reveal */}
          <h1 className="font-display text-[clamp(3.5rem,11vw,10rem)] leading-[0.92] tracking-tight">
            <SplitReveal text="Dream · Believe" className="block italic font-light text-foreground/80" />
            <SplitReveal text="Experience · Heaven" className="block text-shimmer-gold" startDelay={0.5} />
          </h1>

          <p
            className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground animate-fade-up"
            style={{ animationDelay: "1.2s" }}
          >
            Sierfontijnen, sterren en luxe effecten voor jouw bijzondere moment —
            waarin elk detail klopt en elk moment blijft glanzen.
          </p>

          <div
            className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: "1.4s" }}
          >
            <GlowLink to="/afspraak" className="group rounded-full bg-foreground px-7 py-3.5">
              Maak een afspraak
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </GlowLink>
            <GlowLink
              to="/catalogus"
              className="rounded-full border border-foreground/15 px-7 py-3.5"
              backgroundColor="transparent"
              textColor="var(--foreground)"
            >
              Bekijk catalogus
            </GlowLink>
          </div>

          {/* Scroll cue */}
          <div
            className="mt-24 flex flex-col items-center gap-3 animate-fade-up"
            style={{ animationDelay: "1.8s" }}
          >
            <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground/70">
              Scroll
            </span>
            <div className="h-12 w-px overflow-hidden">
              <div className="h-full w-px animate-scrollCue bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent" />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scrollCue {
            0%   { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
          .animate-scrollCue { animation: scrollCue 2.5s ease-in-out infinite; }
        `}</style>
      </section>
    </HeroParallax>
  );
}

/* ---- HeroParallax: subtiele mouse-follow op kinderen ---- */
function HeroParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      el.style.setProperty("--mx", `${x * 14}px`);
      el.style.setProperty("--my", `${y * 14}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div ref={ref} className="hero-parallax" style={{ transform: "translate(var(--mx,0), var(--my,0))", transition: "transform 0.7s var(--ease-luxe)" }}>
      {children}
    </div>
  );
}

/* ---- SplitReveal: word-for-word stagger ---- */
function SplitReveal({
  text,
  className,
  startDelay = 0,
}: {
  text: string;
  className?: string;
  startDelay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block opacity-0"
          style={{
            animation: `wordRise 0.9s var(--ease-luxe) ${startDelay + i * 0.08}s forwards`,
            paddingRight: "0.25em",
          }}
        >
          {w}
        </span>
      ))}
    </span>
  );
}

/* ---------------- Marquee ---------------- */

function Marquee() {
  const items = [
    "Stages",
    "Tables",
    "Table Setup",
    "Seating",
    "Decoration",
    "Lights",
    "Special Effects",
    "Accessoires",
  ];
  const row = [...items, ...items];
  return (
    <section className="border-y border-border bg-gradient-ivory py-8 overflow-hidden">
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="font-display text-3xl italic text-foreground/40"
          >
            {t} <span className="not-italic text-accent">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Intro ---------------- */

function Intro() {
  return (
    <section className="snap-section relative mx-auto flex min-h-screen max-w-6xl items-center px-6 py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="reveal">
          <div className="mb-4 h-px w-16 gold-line" />
          <h2 className="font-display text-5xl leading-[1.05]">
            Uw droom <span className="italic text-gradient-gold">begint hier.</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Het assortiment van Heaven Effects is zeer gevarieerd en snel wisselend. Om
            trendsetter te blijven, zijn wij voortdurend op zoek naar het volgende niveau.
            Vanuit de hele wereld combineren wij elementen tot een geheel dat precies bij
            ú past.
          </p>
          <ul className="mt-10 space-y-5">
            {[
              { icon: Heart, t: "Persoonlijke begeleiding van A tot Z" },
              { icon: Crown, t: "Op maat ontworpen concepten" },
              { icon: Wand2, t: "Eigen team van designers en technici" },
              { icon: Sparkles, t: "Werkgebied: NL, België & Duitsland" },
            ].map(({ icon: Icon, t }) => (
              <li key={t} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="pt-1 text-base">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal relative aspect-[4/5] overflow-hidden rounded-3xl shadow-luxe">
          <img
            src={`${CDN}/1572896326841-CFS0XSN285Z3WTCI5IGB/telefoonachtergrond2.jpg?format=2500w`}
            alt="Heaven Effects sfeerbeeld"
            className="img-luxe h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/40 to-transparent p-8">
            <p className="font-display text-3xl italic text-background">Couture events</p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-background/80">
              Op maat · sinds 2012
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Highlights ---------------- */

function Highlights() {
  const featured = categories.slice(0, 4);
  return (
    <section className="snap-section relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24">
      <div className="mb-16 flex items-end justify-between gap-6 reveal">
        <div>
          <div className="mb-4 h-px w-16 gold-line" />
          <h2 className="font-display text-5xl leading-[1.05]">
            Een wereld van <span className="italic text-gradient-gold">details</span>
          </h2>
        </div>
        <Link to="/catalogus" className="link-luxe hidden text-sm text-muted-foreground sm:inline-flex items-center gap-2">
          Volledige catalogus <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {featured.map((c, i) => (
          <Link
            key={c.slug}
            to="/catalogus/$slug"
            params={{ slug: c.slug }}
            className="group reveal relative overflow-hidden rounded-2xl bg-card shadow-soft transition-all hover:shadow-luxe"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={c.cover}
                alt={c.title}
                loading="lazy"
                className="img-luxe h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-background/80">
                {c.tagline}
              </p>
              <h3 className="font-display text-2xl text-background">{c.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Quote ---------------- */

function Quote() {
  return (
    <section className="snap-section relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-32 text-center reveal">
      <Sparkles className="mx-auto h-6 w-6 text-accent" />
      <p className="mt-8 font-display text-3xl italic leading-snug text-foreground/85 sm:text-5xl">
        "This is proof enough <br /> to believe in Heaven."
      </p>
      <div className="mx-auto mt-8 h-px w-24 gold-line" />
    </section>
  );
}

/* ---------------- CTA ---------------- */

function CTA() {
  return (
    <section className="snap-section relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-32">
      <div className="reveal relative overflow-hidden rounded-3xl bg-foreground p-12 text-background shadow-luxe sm:p-20">
        <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-drift" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-5xl leading-[1.05]">
            Laten we iets <span className="italic text-gradient-gold">magisch</span> maken.
          </h2>
          <p className="mt-6 max-w-lg text-base text-background/75">
            Vertel ons over uw event — wij vertalen uw visie naar een onvergetelijke
            ervaring. Plan een vrijblijvend gesprek of vraag een prijsopgaaf aan.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <GlowLink
              to="/afspraak"
              className="rounded-full bg-background px-7 py-3.5"
              backgroundColor="var(--background)"
              textColor="var(--foreground)"
            >
              Maak een afspraak <ArrowRight className="h-4 w-4" />
            </GlowLink>
            <a
              href="mailto:info@heaveneffects.nl"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-7 py-3.5 text-sm text-background transition-all hover:border-accent hover:text-accent"
            >
              info@heaveneffects.nl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
