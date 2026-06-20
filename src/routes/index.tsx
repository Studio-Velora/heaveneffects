import { createFileRoute, Link } from "@tanstack/react-router";
import { GlowLink } from "@/components/ui/hover-glow-button";

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
    <section className="relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      {/* site-wide luxe background lives in SiteLayout */}

      {/* soft drifting blobs on top for extra depth */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -bottom-32 -right-10 h-[35rem] w-[35rem] rounded-full bg-accent/20 blur-3xl animate-drift"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-tight animate-fade-up">
          <span className="block italic font-light text-foreground/80">Dream · Believe</span>
          <span className="block text-shimmer-gold">Experience · Heaven</span>
        </h1>

        <p
          className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground animate-fade-up"
          style={{ animationDelay: "180ms" }}
        >
          Welkom bij Heaven Effects. Wij ontwerpen spectaculaire, innovatieve en luxe
          bruiloften en evenementen — waarin elk detail klopt en elk moment blijft glanzen.
        </p>

        <div
          className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
          style={{ animationDelay: "320ms" }}
        >
          <GlowLink
            to="/afspraak"
            className="group rounded-full bg-foreground px-7 py-3.5"
          >
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

        {/* floating hero image cluster */}
        <div className="relative mx-auto mt-20 max-w-5xl animate-fade-in">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-5 aspect-[3/4] overflow-hidden rounded-2xl shadow-luxe animate-float">
              <img
                src={categories[0].cover}
                alt="Stage design"
                className="img-luxe h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="col-span-7 grid gap-4">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl shadow-luxe">
                <img
                  src={categories[4].cover}
                  alt="Decoratie"
                  className="img-luxe h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="aspect-square overflow-hidden rounded-2xl shadow-luxe animate-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  <img
                    src={categories[5].cover}
                    alt="Lights"
                    className="img-luxe h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl shadow-luxe">
                  <img
                    src={categories[6].cover}
                    alt="Special effects"
                    className="img-luxe h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    <section className="mx-auto max-w-6xl px-6 py-32">
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
    <section className="mx-auto max-w-7xl px-6 py-24">
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
    <section className="relative mx-auto max-w-4xl px-6 py-32 text-center reveal">
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
    <section className="relative mx-auto max-w-6xl px-6 pb-32">
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
