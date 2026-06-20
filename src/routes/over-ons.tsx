import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Heart, Crown } from "lucide-react";
import { SiteLayout, useReveal } from "@/components/site-layout";
import { CDN } from "@/lib/catalog";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over ons — Heaven Effects" },
      {
        name: "description",
        content:
          "Heaven Effects realiseert spectaculaire, innovatieve en luxe bruiloften en evenementen in Nederland, België en Duitsland.",
      },
      { property: "og:title", content: "Over Heaven Effects" },
      {
        property: "og:description",
        content: "Wij brengen creativiteit, ervaring en passie naar uw bijzondere dag.",
      },
    ],
    links: [{ rel: "canonical", href: "https://heaveneffects.nl/over-ons" }],
  }),
  component: OverOns,
});

function OverOns() {
  useReveal();
  return (
    <SiteLayout>
      <section className="relative pt-40 pb-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-blush opacity-70 blur-3xl animate-drift" />
        </div>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Sparkles className="mx-auto h-6 w-6 text-accent animate-fade-up" />
          <h1 className="mt-6 font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] animate-fade-up">
            Over <span className="italic text-gradient-gold">Heaven Effects</span>
          </h1>
          <p
            className="mt-8 text-lg leading-relaxed text-muted-foreground animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            Heaven Effects realiseert spectaculaire, innovatieve en luxe bruiloften en
            evenementen in Nederland, België &amp; Duitsland. Breng een vleugje inspiratie
            mee — en wij brengen onze creativiteit, ervaring en passie naar uw speciale
            gebeurtenis.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal aspect-[4/5] overflow-hidden rounded-3xl shadow-luxe">
            <img
              src={`${CDN}/1572896326841-CFS0XSN285Z3WTCI5IGB/telefoonachtergrond2.jpg?format=2500w`}
              alt="Heaven Effects"
              className="img-luxe h-full w-full object-cover"
            />
          </div>
          <div className="reveal">
            <div className="mb-4 h-px w-16 gold-line" />
            <h2 className="font-display text-4xl leading-[1.05]">
              Meer dan <span className="italic text-gradient-gold">decoratie</span>.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Heaven Effects gaat verder dan alleen decoratie. Met een volledig overzicht
              van het evenement en jarenlange ervaring in deze branche, kunt u erop
              vertrouwen dat uw evenement een succes wordt.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { icon: Heart, t: "Persoonlijke begeleiding van A tot Z" },
                { icon: Crown, t: "Volledig op maat ontworpen concepten" },
                { icon: Sparkles, t: "Eigen team van designers en technici" },
              ].map(({ icon: Icon, t }) => (
                <li key={t} className="flex items-start gap-3">
                  <Icon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-base">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center reveal">
        <p className="font-display text-3xl italic leading-snug text-foreground/85 sm:text-5xl">
          "This is proof enough <br /> to believe in Heaven."
        </p>
        <div className="mx-auto mt-8 h-px w-24 gold-line" />
      </section>
    </SiteLayout>
  );
}
