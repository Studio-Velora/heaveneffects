import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { GlowLink } from "@/components/ui/hover-glow-button";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles, X, Check, Plus } from "lucide-react";
import { SiteLayout, useReveal } from "@/components/site-layout";
import { categories, type CatalogItem } from "@/lib/catalog";
import { useSelection } from "@/lib/selection";

export const Route = createFileRoute("/catalogus/$slug")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.category;
    if (!c) return { meta: [{ title: "Catalogus — Heaven Effects" }] };
    return {
      meta: [
        { title: `${c.title} — Heaven Effects` },
        { name: "description", content: c.blurb },
        { property: "og:title", content: `${c.title} — Heaven Effects` },
        { property: "og:description", content: c.blurb },
        { property: "og:image", content: c.cover },
        { name: "twitter:image", content: c.cover },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-6 pt-48 pb-24 text-center">
        <h1 className="font-display text-5xl">Niet gevonden</h1>
        <p className="mt-4 text-muted-foreground">Deze categorie bestaat niet.</p>
        <GlowLink
          to="/catalogus"
          className="mt-8 rounded-full border border-foreground/15 px-6 py-3"
          backgroundColor="transparent"
          textColor="var(--foreground)"
        >
          <ArrowLeft className="h-4 w-4" /> Terug naar catalogus
        </GlowLink>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error, reset }) => (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-6 pt-48 pb-24 text-center">
        <h1 className="font-display text-4xl">Oeps</h1>
        <p className="mt-4 text-muted-foreground">{error.message}</p>
        <button onClick={() => reset()} className="mt-8 underline">Opnieuw</button>
      </div>
    </SiteLayout>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  useReveal();
  const { category } = Route.useLoaderData();
  const [active, setActive] = useState<CatalogItem | null>(null);

  // current index in categories for prev/next nav
  const idx = categories.findIndex((c) => c.slug === category.slug);
  const prev = categories[(idx - 1 + categories.length) % categories.length];
  const next = categories[(idx + 1) % categories.length];

  return (
    <SiteLayout>
      <Hero category={category} />
      <Items items={category.items} categorySlug={category.slug} categoryTitle={category.title} onOpen={setActive} />
      <PrevNext prev={prev} next={next} />
      {active && <Lightbox item={active} categorySlug={category.slug} categoryTitle={category.title} onClose={() => setActive(null)} />}
    </SiteLayout>
  );
}

function Hero({ category }: { category: (typeof categories)[number] }) {
  return (
    <section className="relative pt-36 pb-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-end">
        <div className="animate-fade-up">
          <Link
            to="/catalogus"
            className="link-luxe inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Catalogus
          </Link>
          <h1 className="mt-6 font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95]">
            {category.title}
            <span className="block italic text-gradient-gold">{category.tagline}</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            {category.blurb}
          </p>
        </div>
        <div className="reveal aspect-[4/3] overflow-hidden rounded-3xl shadow-luxe">
          <img
            src={category.cover}
            alt={category.title}
            className="img-luxe h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Items({
  items,
  categorySlug,
  categoryTitle,
  onOpen,
}: {
  items: CatalogItem[];
  categorySlug: string;
  categoryTitle: string;
  onOpen: (i: CatalogItem) => void;
}) {
  const { add, has, remove } = useSelection();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const selected = has(item.slug);
          return (
            <article
              key={item.slug}
              className="group reveal relative"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => onOpen(item)}
                className="block w-full text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary shadow-soft transition-shadow group-hover:shadow-luxe">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="img-luxe h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-background/95 px-3 py-1 text-xs uppercase tracking-[0.18em] text-foreground backdrop-blur">
                      <Sparkles className="h-3 w-3 text-accent" /> Bekijk
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-2xl transition-colors group-hover:text-gradient-gold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </button>
              <button
                onClick={() =>
                  selected
                    ? remove(item.slug)
                    : add({ slug: item.slug, title: item.title, img: item.img, category: categoryTitle })
                }
                aria-label={selected ? "Verwijderen uit offerte" : "Voeg toe aan offerte"}
                className={`mt-3 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all ${
                  selected
                    ? "border-[var(--gold)] bg-[var(--gold)]/15 text-[var(--gold-deep)]"
                    : "border-foreground/15 text-muted-foreground hover:border-[var(--gold)]/50 hover:text-foreground"
                }`}
              >
                {selected ? (
                  <>
                    <Check className="h-3.5 w-3.5" /> Toegevoegd
                  </>
                ) : (
                  <>
                    <Plus className="h-3.5 w-3.5" /> Voeg toe aan offerte
                  </>
                )}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function PrevNext({
  prev,
  next,
}: {
  prev: (typeof categories)[number];
  next: (typeof categories)[number];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-2">
        {[
          { c: prev, label: "Vorige", icon: ArrowLeft, align: "left" as const },
          { c: next, label: "Volgende", icon: ArrowRight, align: "right" as const },
        ].map(({ c, label, icon: Icon, align }) => (
          <Link
            key={c.slug}
            to="/catalogus/$slug"
            params={{ slug: c.slug }}
            className={`group relative overflow-hidden rounded-3xl bg-card shadow-soft transition-all hover:shadow-luxe ${
              align === "right" ? "text-right" : ""
            }`}
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img src={c.cover} alt={c.title} loading="lazy" className="img-luxe h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
            <div className={`absolute inset-x-0 bottom-0 p-6 ${align === "right" ? "text-right" : ""}`}>
              <p className="text-xs uppercase tracking-[0.3em] text-background/80">{label}</p>
              <h3 className={`mt-1 inline-flex items-center gap-3 font-display text-3xl text-background ${align === "right" ? "flex-row-reverse" : ""}`}>
                <Icon className="h-5 w-5" /> {c.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Lightbox({ item, categorySlug, categoryTitle, onClose }: { item: CatalogItem; categorySlug: string; categoryTitle: string; onClose: () => void }) {
  const { add, has, remove } = useSelection();
  const selected = has(item.slug);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Sluiten"
        className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/15 text-background transition-colors hover:bg-background/25"
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className="relative grid max-h-[88vh] w-full max-w-5xl grid-cols-1 overflow-hidden rounded-3xl bg-background shadow-luxe md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-[4/5] md:aspect-auto">
          <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center gap-6 p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Design</p>
          <h3 className="font-display text-5xl leading-[1.05]">{item.title}</h3>
          <p className="text-muted-foreground">{item.text}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <button
              onClick={() =>
                selected
                  ? remove(item.slug)
                  : add({ slug: item.slug, title: item.title, img: item.img, category: categoryTitle })
              }
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all ${
                selected
                  ? "border-[var(--gold)] bg-[var(--gold)]/15 text-[var(--gold-deep)]"
                  : "border-foreground/15 text-foreground hover:border-[var(--gold)] hover:bg-[var(--gold)]/10"
              }`}
            >
              {selected ? (
                <>
                  <Check className="h-4 w-4" /> Toegevoegd aan offerte
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" /> Voeg toe aan offerte
                </>
              )}
            </button>
            <GlowLink
              to="/afspraak"
              className="rounded-full bg-foreground px-6 py-3"
            >
              Vraag offerte aan <ArrowRight className="h-4 w-4" />
            </GlowLink>
          </div>
        </div>
      </div>
    </div>
  );
}
