import { createFileRoute, Link } from "@tanstack/react-router";
import { GlowLink } from "@/components/ui/hover-glow-button";
import React, { useState } from "react";
import { Sparkles, Plus, Minus, Mail } from "lucide-react";
import { SiteLayout, useReveal } from "@/components/site-layout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Veelgestelde vragen — Heaven Effects" },
      {
        name: "description",
        content:
          "Antwoorden op de meest gestelde vragen over afspraken, designs, beschikbaarheid en service van Heaven Effects.",
      },
      { property: "og:title", content: "Veelgestelde vragen — Heaven Effects" },
      {
        property: "og:description",
        content: "Alles wat u wilt weten over onze designs, werkwijze en service.",
      },
    ],
  }),
  component: FaqPage,
});

type Faq = { q: string; a: React.ReactNode };

const faqs: Faq[] = [
  {
    q: "Hoe kan ik een afspraak maken?",
    a: (
      <>
        Een afspraak maakt u helemaal zelf, op het moment dat het u uitkomt. Plan via{" "}
        <Link to="/afspraak" className="link-luxe text-foreground">de afspraakmodule</Link>{" "}
        direct een gesprek met een van onze designers. Na het maken van uw afspraak ontvangt u
        een bevestiging. Wij adviseren u om 10 minuten van tevoren aanwezig te zijn; voor een
        intakegesprek reserveren wij één uur om al uw wensen rustig te bespreken.
      </>
    ),
  },
  {
    q: "Zijn de stages te leveren in variabele breedtes?",
    a: "Ja. Met het oog op aanpassingen aan de ruimte kunnen onze stages zowel smaller als breder geleverd worden dan in de catalogus vermeld staat. Dit gebeurt altijd in overleg met uw designer.",
  },
  {
    q: "Biedt Heaven Effects standaardpakketten aan?",
    a: "Nee. Wij vinden dat niet elke gelegenheid in een standaardpakket past. We nodigen u graag uit om samen een persoonlijk design te ontwerpen, precies passend bij u en uw dromen — geen standaardpakket, maar een ‘speciaal-voor-u-pakket’.",
  },
  {
    q: "Kan ik mijn boeking annuleren of wijzigen?",
    a: "Dat kan, met inachtneming van onze algemene voorwaarden. Neem contact met ons op zodra u wijzigingen wenst, zodat wij samen met u de mogelijkheden kunnen bekijken.",
  },
  {
    q: "Hoe weet ik of jullie producten beschikbaar zijn?",
    a: (
      <>
        Maak in onze{" "}
        <Link to="/catalogus" className="link-luxe text-foreground">catalogus</Link>{" "}
        een keuze uit onze producten en laat ons per e-mail weten welke items u wenst, inclusief
        de naam van het product, de datum en de locatie van uw gelegenheid. Wij informeren u
        vervolgens over de beschikbaarheid op de door u gekozen datum.
      </>
    ),
  },
  {
    q: "Werkt Heaven Effects ook in het buitenland?",
    a: "Wij bieden onze diensten aan in Nederland, België en Duitsland. Wenst u onze designs in een ander land te ervaren? Dan bespreken we de mogelijkheden graag op afspraak.",
  },
  {
    q: "Ik wil jullie designs graag in het echt zien.",
    a: "Op onze Instagram delen wij dagelijks nieuwe impressies. Daarnaast bent u van harte welkom om voorafgaand aan een evenement een kijkje te komen nemen. Neem contact op met onze klantenservice om dit in te plannen.",
  },
  {
    q: "Wat zijn de kosten van jullie designs?",
    a: "Wij werken met een algemene prijzenlijst, die u kunt opvragen via info@heaveneffects.nl. Wenst u een offerte op maat? Plan dan een afspraak met een van onze designers.",
  },
  {
    q: "Wat zijn jullie voorwaarden?",
    a: "Onze algemene voorwaarden zijn op aanvraag beschikbaar. Wij sturen ze u graag toe, zodat u alles rustig kunt nalezen voor uw boeking.",
  },
];

function FaqPage() {
  useReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SiteLayout>
      <section className="relative pt-40 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 left-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blush opacity-60 blur-3xl animate-drift" />
          <div
            className="absolute top-40 right-0 h-[24rem] w-[24rem] rounded-full bg-champagne opacity-50 blur-3xl animate-drift"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Sparkles className="mx-auto h-6 w-6 text-accent animate-fade-up" />
          <p
            className="mt-6 text-xs uppercase tracking-[0.4em] text-muted-foreground animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Heaven Effects
          </p>
          <h1
            className="mt-4 font-display text-[clamp(2.75rem,7vw,5.25rem)] leading-[0.95] animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Veelgestelde <span className="italic text-gradient-gold">vragen</span>
          </h1>
          <p
            className="mt-6 text-lg leading-relaxed text-muted-foreground animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            Alles wat u wilt weten over onze designs, werkwijze en service — overzichtelijk op
            een rij.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <ul className="divide-y divide-border/70 border-y border-border/70">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="reveal">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-start justify-between gap-6 py-7 text-left transition-colors hover:text-foreground"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="font-display text-sm text-accent tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-xl md:text-2xl leading-snug text-foreground">
                        {item.q}
                      </span>
                    </span>
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground/70 transition-all group-hover:border-accent group-hover:text-accent">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="max-w-2xl pl-12 pr-12 text-base leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="reveal mt-20 rounded-3xl border border-border bg-gradient-blush p-10 text-center">
            <Sparkles className="mx-auto h-5 w-5 text-accent" />
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Heeft u nog <span className="italic text-gradient-gold">andere vragen?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Wij staan u graag persoonlijk te woord. Neem contact op of plan direct een
              vrijblijvend gesprek met een van onze designers.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:info@heaveneffects.nl"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm transition-all hover:border-accent hover:text-accent"
              >
                <Mail className="h-4 w-4" /> info@heaveneffects.nl
              </a>
              <GlowLink
                to="/afspraak"
                className="rounded-full bg-foreground px-6 py-3"
              >
                Plan een afspraak
              </GlowLink>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
