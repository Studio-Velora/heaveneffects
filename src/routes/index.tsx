import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles,
  Crown,
  Utensils,
  Armchair,
  Flower2,
  Lightbulb,
  Wand2,
  Gem,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heaven Effects — Wedding & Event Design" },
      {
        name: "description",
        content:
          "Heaven Effects ontwerpt onvergetelijke bruiloften en events. Stages, decoratie, lichten en special effects — uw droom begint hier.",
      },
      { property: "og:title", content: "Heaven Effects — Wedding & Event Design" },
      {
        property: "og:description",
        content: "Dream • Believe • Experience • Heaven. Luxe event design op maat.",
      },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Crown, title: "Stages", text: "Imposante podia die het hart van uw event vormen." },
  { icon: Utensils, title: "Tables & Setup", text: "Tafels en dekking tot in elk detail verzorgd." },
  { icon: Armchair, title: "Seating", text: "Comfort en stijl voor elke gast." },
  { icon: Flower2, title: "Decoration", text: "Sfeervolle decors, bloemen en florale composities." },
  { icon: Lightbulb, title: "Lights", text: "Lichtontwerp dat ruimtes laat ademen." },
  { icon: Wand2, title: "Special Effects", text: "Confetti, rook, vuurwerk — magische momenten." },
  { icon: Gem, title: "Accessoires", text: "De finishing touch die alles samenbrengt." },
];

const stats = [
  { n: "500+", l: "Events" },
  { n: "12", l: "Jaar ervaring" },
  { n: "98%", l: "Tevreden klanten" },
  { n: "24/7", l: "Support" },
];

function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-display text-xl tracking-wide">
              Heaven <span className="text-gradient-gold">Effects</span>
            </span>
          </a>
          <ul className="hidden items-center gap-8 text-sm md:flex">
            {["Diensten", "Ervaring", "Portfolio", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="relative text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="default" className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#contact">Maak een afspraak</a>
          </Button>
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
            {["Diensten", "Ervaring", "Portfolio", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-muted-foreground hover:text-foreground"
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <ShaderAnimation />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary backdrop-blur-md animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-ring" />
            Wedding & Event Design
          </div>

          <h1 className="font-display text-5xl leading-[1.05] sm:text-7xl md:text-8xl animate-fade-up">
            <span className="block">Dream · Believe</span>
            <span className="block text-gradient-gold">Experience · Heaven</span>
          </h1>

          <p
            className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            Welkom bij Heaven Effects. Wij ontwerpen events die voelen als een droom —
            van het eerste idee tot de laatste vonk confetti.
          </p>

          <div
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Button
              asChild
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
            >
              <a href="#contact">
                Maak een afspraak
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/40 bg-transparent text-foreground hover:bg-primary/10"
            >
              <a href="#contact">Prijzenlijst opvragen</a>
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-muted-foreground animate-float">
            Scroll
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-4xl text-gradient-gold sm:text-5xl">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="diensten" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 h-px w-16 gold-line" />
          <h2 className="font-display text-4xl sm:text-5xl">
            Onze <span className="text-gradient-gold">diensten</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Een complete wereld van event design — alles onder één dak, samengebracht door
            één visie.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-luxe animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-x-0 -top-px h-px gold-line opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 text-primary opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1" />
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="ervaring" className="relative overflow-hidden bg-gradient-emerald py-28">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
          <div className="animate-fade-up">
            <div className="mb-4 h-px w-16 gold-line" />
            <h2 className="font-display text-4xl sm:text-5xl">
              Uw droom <br />
              <span className="text-gradient-gold">begint hier.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Bij Heaven Effects geloven wij dat een event meer is dan een moment.
              Het is een herinnering die blijft schitteren. Met aandacht voor elk detail,
              vakmanschap en passie creëren wij events die uw verhaal vertellen.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Persoonlijke begeleiding van A tot Z",
                "Volledig op maat ontworpen concepten",
                "Eigen team van designers & technici",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-luxe animate-float">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
              alt="Elegant wedding tablescape met kaarsen en bloemen"
              className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="font-display text-2xl">Couture events</p>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Sinds 2012
                </p>
              </div>
              <Crown className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <div className="mb-4 h-px w-16 gold-line" />
            <h2 className="font-display text-4xl sm:text-5xl">
              <span className="text-gradient-gold">Selected</span> work
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline-flex items-center gap-2"
          >
            Bekijk meer <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80", t: "Stage Design" },
            { src: "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1200&q=80", t: "Floral Decoration" },
            { src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80", t: "Light Show" },
            { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80", t: "Table Couture" },
            { src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=80", t: "Special Effects" },
            { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80", t: "Ceremony" },
          ].map((img, i) => (
            <figure
              key={img.t}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.t}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                style={{ aspectRatio: i === 0 ? "1/1" : "4/5" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              <figcaption className="absolute bottom-5 left-5 font-display text-xl text-foreground">
                {img.t}
              </figcaption>
              <div className="absolute inset-0 ring-0 ring-primary/0 transition-all duration-500 group-hover:ring-2 group-hover:ring-primary/40 rounded-2xl" />
            </figure>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden border-t border-border bg-card/40 py-28">
        <div className="absolute inset-0 -z-10 opacity-30">
          <ShaderAnimation />
        </div>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto mb-4 h-px w-16 gold-line" />
          <h2 className="font-display text-4xl sm:text-6xl">
            Laten we iets <span className="text-gradient-gold">magisch</span> maken.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Vertel ons over uw event. Wij vertalen uw visie naar een onvergetelijke ervaring.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
              <a href="mailto:info@heaveneffects.nl">
                <Mail className="mr-2 h-4 w-4" /> info@heaveneffects.nl
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10">
              <a href="tel:+31600000000">
                <Phone className="mr-2 h-4 w-4" /> Bel ons
              </a>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" /> Nederland — beschikbaar wereldwijd
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-display">Heaven Effects</span>
          </div>
          <p>© {new Date().getFullYear()} Heaven Effects — Wedding & Event Design</p>
        </div>
      </footer>
    </div>
  );
}
