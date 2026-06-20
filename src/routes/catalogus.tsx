import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { SiteLayout, useReveal } from "@/components/site-layout";
import { categories } from "@/lib/catalog";

export const Route = createFileRoute("/catalogus")({
  head: () => ({
    meta: [
      { title: "Catalogus — Heaven Effects" },
      {
        name: "description",
        content:
          "Bekijk de volledige catalogus van Heaven Effects: stages, tables, seating, decoratie, lichten, special effects en accessoires.",
      },
      { property: "og:title", content: "Catalogus — Heaven Effects" },
      {
        property: "og:description",
        content:
          "Acht categorieën, één visie. Ontdek alles wat Heaven Effects voor uw event ontwerpt.",
      },
    ],
    links: [{ rel: "canonical", href: "https://heaveneffects.nl/catalogus" }],
  }),
  component: CatalogusPage,
});

function CatalogusPage() {
  useReveal();
  const location = useLocation();
  const onChild =
    location.pathname !== "/catalogus" &&
    location.pathname.startsWith("/catalogus/");

  if (onChild) return <Outlet />;

  return (
    <SiteLayout>
      <Header />
      <Grid />
    </SiteLayout>
  );
}

function Header() {
  return (
    <section className="relative pt-40 pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 right-0 h-[30rem] w-[30rem] rounded-full bg-blush opacity-70 blur-3xl animate-drift" />
      </div>
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Sparkles className="mx-auto h-6 w-6 text-accent animate-fade-up" />
        <h1 className="mt-6 font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] animate-fade-up">
          De <span className="italic text-gradient-gold">catalogus</span>
        </h1>
        <p
          className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          Acht categorieën, een wereld aan mogelijkheden. Blader door onze designs en
          klik door voor de details.
        </p>
      </div>
    </section>
  );
}

function Grid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        {categories.map((c, i) => (
          <Link
            key={c.slug}
            to="/catalogus/$slug"
            params={{ slug: c.slug }}
            className={`group reveal card-tilt glow-ring relative overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-700 hover:shadow-luxe ${
              i % 3 === 0 ? "md:row-span-2" : ""
            }`}
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className={`overflow-hidden ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-[16/10]"}`}>
              <img
                src={c.cover}
                alt={c.title}
                loading="lazy"
                className="img-luxe h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-background/80">
                {c.tagline}
              </p>
              <div className="mt-2 flex items-end justify-between">
                <h2 className="font-display text-4xl text-background">{c.title}</h2>
                <ArrowRight className="h-6 w-6 text-background transition-transform duration-500 group-hover:translate-x-1" />
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-background/85">
                {c.blurb}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
