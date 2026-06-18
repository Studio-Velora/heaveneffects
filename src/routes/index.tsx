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
  Layers,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Building2,
  Menu,
  X,
  Flame,
  Cloud,
  PartyPopper,
  Zap,
  Droplets,
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
          "Heaven Effects realiseert spectaculaire, innovatieve en luxe bruiloften en evenementen in Nederland, België & Duitsland. Dream · Believe · Experience · Heaven.",
      },
      { property: "og:title", content: "Heaven Effects — Wedding & Event Design" },
      {
        property: "og:description",
        content:
          "Dream · Believe · Experience · Heaven. Luxe event design op maat — stages, decoratie, lichten en special effects.",
      },
    ],
  }),
  component: Home,
});

const CDN = "https://images.squarespace-cdn.com/content/v1/5db729e666d5206f322b3c21";

const services = [
  {
    icon: Crown,
    title: "Stages",
    text: "Imposante podia die het hart van uw event vormen.",
    img: `${CDN}/1574807593099-BAIQR92RSA8DA0HADBIA/CAM14497.JPG`,
  },
  {
    icon: Utensils,
    title: "Tables",
    text: "Tafels van eik, marmer en spiegel — voor elke setting.",
    img: `${CDN}/59337342-d089-4c6b-a419-c4a1086b7a40/IMG_6670.jpg`,
  },
  {
    icon: Layers,
    title: "Table Setup",
    text: "Tot in de millimeter verzorgde dekking en styling.",
    img: `${CDN}/22049ff6-1d68-452b-833d-6d6a9caf05af/IMG_8881.JPG`,
  },
  {
    icon: Armchair,
    title: "Seating",
    text: "Stoelen die comfort en stijl naadloos verenigen.",
    img: `${CDN}/1574876791074-DKGV24NGR198K3XXWA18/dcc-gold-rim-chairs-1.jpg`,
  },
  {
    icon: Flower2,
    title: "Decoration",
    text: "Sfeervolle decors, florale composities en kaarslicht.",
    img: `${CDN}/6a43dcf1-faf3-48da-b4bb-27e5a936ec8b/d8b442ab-9b9f-4ea0-95f8-519c29b6a85d.JPG`,
  },
  {
    icon: Lightbulb,
    title: "Lights",
    text: "Lichtontwerp dat ruimtes laat ademen en glanzen.",
    img: `${CDN}/1575728892091-3JP9F7KGVW4CAR0NF4QH/1.+Sfeerverlichting+%2810%29.jpg`,
  },
  {
    icon: Wand2,
    title: "Special Effects",
    text: "Vuurwerk, laser, rook, confetti — magische momenten.",
    img: `${CDN}/1574985674547-OA6L50MZ55T0Q2Z84AQG/IMG_1888.JPG`,
  },
  {
    icon: Gem,
    title: "Accessoires",
    text: "De finishing touch die alles samenbrengt.",
    img: `${CDN}/b9e290c2-6d15-4363-9666-c4a4819d3593/IMG_3577.JPG`,
  },
];

const effects = [
  {
    icon: Flame,
    title: "Indoor Firework",
    text:
      "Een ware vuurwerkspektakel voor ieder gelegenheid — een taartsnijmoment, een bijzondere opkomst of een romantische dans.",
    img: `${CDN}/1574986767985-EL4TRY2UWRA5ZTG0QCW5/fireworks+%289%29.jpg`,
  },
  {
    icon: Zap,
    title: "Laser Show",
    text: "Een ware lasershow — voor ieder gelegenheid de ultieme eyecatcher.",
    img: `${CDN}/5c14a3a5-3532-4c4b-942d-94fe442e5ea2/image00001+Groot.jpeg`,
  },
  {
    icon: Cloud,
    title: "Laaghangende Rook",
    text:
      "Dikke pluimen rook waarmee u zich waant in een magisch moment — perfect voor een romantische dans of bijzondere opkomst.",
    img: `${CDN}/1574986886717-6SHQB0W4WWIFV5DQVLHO/Laaghangende+rook+%2826%29.jpg`,
  },
  {
    icon: Sparkles,
    title: "Special FX Catwalk",
    text:
      "Rook gecombineerd met kaarsstukken en bloemwerk op een verhoogd spiegelpad — dé eye-catcher van uw avond.",
    img: `${CDN}/36f0fe81-04a7-47ec-887d-e2e3ad7e5e81/9199c61c-7389-4c4e-8dde-de947382bc16.JPG`,
  },
  {
    icon: PartyPopper,
    title: "Confetti",
    text:
      "Onze Confetti Blaster blaast 1 kilo brandveilige, waterproof confetti de lucht in — in goud, zilver, wit of een combinatie.",
    img: `${CDN}/1574987067335-RDDPITWFPPKJ70MME5OG/WeddingConfetti2.jpg`,
  },
  {
    icon: Droplets,
    title: "Bellenblaas",
    text: "Een wolk van zeepbellen die elk moment doet sprankelen — sprookjesachtig en onvergetelijk.",
    img: `${CDN}/1574987091444-6SRLMU99Y5B8WIVG9MI9/bellen.jpg`,
  },
];

const stats = [
  { n: "NL · BE · DE", l: "Werkgebied" },
  { n: "8+", l: "Categorieën" },
  { n: "100%", l: "Op maat" },
  { n: "24/7", l: "Beschikbaar" },
];

const navLinks = [
  { label: "Diensten", href: "#diensten" },
  { label: "Special FX", href: "#effects" },
  { label: "Over ons", href: "#ervaring" },
  { label: "Contact", href: "#contact" },
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
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="relative text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90"
          >
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
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-muted-foreground hover:text-foreground"
              >
                {l.label}
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
            Wedding &amp; Event Design
          </div>

          <h1 className="font-display text-5xl leading-[1.05] sm:text-7xl md:text-8xl animate-fade-up">
            <span className="block">Dream · Believe</span>
            <span className="block text-gradient-gold">Experience · Heaven</span>
          </h1>

          <p
            className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            Welkom bij Heaven Effects. Uw droom begint hier — wij ontwerpen
            spectaculaire, innovatieve en luxe bruiloften en evenementen in
            Nederland, België &amp; Duitsland.
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
              <a href="https://www.heaveneffects.nl/appointments" target="_blank" rel="noreferrer">
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

      {/* INTRO */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="mx-auto mb-6 h-px w-16 gold-line" />
          <h2 className="font-display text-3xl sm:text-4xl">
            Welkom bij <span className="text-gradient-gold">Heaven Effects</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Het assortiment van Heaven Effects is zeer gevarieerd en snel wisselend, zodat het
            assortiment van vandaag volgende week alweer anders kan zijn. Om trendsetter te
            blijven, is Heaven Effects voortdurend op zoek naar het volgende niveau. Vanuit de
            hele wereld combineren wij verschillende elementen tot een assortiment dat precies
            de stijl vormt die bij u past.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-2xl text-gradient-gold sm:text-3xl">
                  {s.n}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — Catalogus */}
      <section id="diensten" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 h-px w-16 gold-line" />
          <h2 className="font-display text-4xl sm:text-5xl">
            Catalogus <span className="text-gradient-gold">overzicht</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Acht categorieën — één visie. Van stages tot accessoires, alles in eigen huis
            ontworpen en samengebracht.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text, img }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-luxe animate-fade-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-background/70 text-primary ring-1 ring-primary/30 backdrop-blur">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
              <div className="absolute inset-x-0 -top-px h-px gold-line opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </section>

      {/* SPECIAL EFFECTS */}
      <section id="effects" className="relative overflow-hidden bg-gradient-emerald py-28">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-4 h-px w-16 gold-line" />
            <h2 className="font-display text-4xl sm:text-5xl">
              <span className="text-gradient-gold">"This is proof enough</span>
              <br /> to believe in Heaven."
            </h2>
            <p className="mt-6 text-muted-foreground">
              Heaven Effects is gespecialiseerd op het gebied van verschillende effecten.
              Alle goedgekeurde effecten zijn zowel voor binnen- als buitengebruik. Elk
              gelegenheid verdient een daadwerkelijk speciaal moment.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {effects.map(({ icon: Icon, title, text, img }, i) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OVER ONS */}
      <section id="ervaring" className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="animate-fade-up">
            <div className="mb-4 h-px w-16 gold-line" />
            <h2 className="font-display text-4xl sm:text-5xl">
              Uw droom <br />
              <span className="text-gradient-gold">begint hier.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Heaven Effects gaat verder dan alleen decoratie. Met een volledig overzicht
              van het evenement en jarenlange ervaring in deze branche, kunt u erop
              vertrouwen dat uw evenement een succes wordt. Breng een vleugje inspiratie
              mee — en wij brengen onze creativiteit, ervaring en passie naar uw speciale
              gebeurtenis.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Spectaculair, innovatief en luxe — op maat",
                "Werkgebied: Nederland, België & Duitsland",
                "Eigen team van designers & technici",
                "Volledige begeleiding van eerste idee tot laatste vonk",
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
              src={`${CDN}/1572896326841-CFS0XSN285Z3WTCI5IGB/telefoonachtergrond2.jpg?format=2500w`}
              alt="Heaven Effects sfeerbeeld"
              className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="font-display text-2xl">Couture events</p>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Wedding &amp; Event Design
                </p>
              </div>
              <Crown className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-border bg-card/40 py-28"
      >
        <div className="absolute inset-0 -z-10 opacity-30">
          <ShaderAnimation />
        </div>
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-4 h-px w-16 gold-line" />
            <h2 className="font-display text-4xl sm:text-6xl">
              Laten we iets <span className="text-gradient-gold">magisch</span> maken.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Wilt u een prijsopgaaf aanvragen of heeft u een speciaal verzoek? Wij staan
              voor u klaar en kunnen niet wachten om uw droomgelegenheid te realiseren.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-background/60 p-8 backdrop-blur">
              <MapPin className="mb-4 h-6 w-6 text-primary" />
              <h3 className="font-display text-xl">Bezoekersadres</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Heaven Effects<br />
                Californiedreef 16<br />
                3565 BL Utrecht
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background/60 p-8 backdrop-blur">
              <Phone className="mb-4 h-6 w-6 text-primary" />
              <h3 className="font-display text-xl">Klantenservice</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <a href="tel:+31652227124" className="hover:text-foreground">
                  +31 (0)6 5222 71 24
                </a>
                <br />
                <a href="mailto:info@heaveneffects.nl" className="hover:text-foreground">
                  info@heaveneffects.nl
                </a>
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background/60 p-8 backdrop-blur">
              <Clock className="mb-4 h-6 w-6 text-primary" />
              <h3 className="font-display text-xl">Openingstijden</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Ma t/m Do: 12:00 – 20:00<br />
                Vrij t/m Zo: gesloten
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
            >
              <a href="mailto:info@heaveneffects.nl">
                <Mail className="mr-2 h-4 w-4" /> Stuur een mail
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/40 hover:bg-primary/10"
            >
              <a href="tel:+31652227124">
                <Phone className="mr-2 h-4 w-4" /> Bel ons
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" /> KvK 83081925
            </span>
            <span>BTW NL862719057B01</span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> NL · BE · DE
            </span>
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
          <p>© {new Date().getFullYear()} Heaven Effects — Wedding &amp; Event Design</p>
        </div>
      </footer>
    </div>
  );
}
