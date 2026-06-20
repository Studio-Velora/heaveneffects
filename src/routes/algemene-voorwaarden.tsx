import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/algemene-voorwaarden")({
  head: () => ({
    meta: [
      { title: "Algemene Voorwaarden — Heaven Effects" },
      { name: "description", content: "De algemene voorwaarden van Heaven Effects voor het leveren van sierfontijnen, effecten en evenementdiensten." },
    ],
    links: [{ rel: "canonical", href: "https://heaveneffects.nl/algemene-voorwaarden" }],
  }),
  component: AlgemeneVoorwaarden,
});

function AlgemeneVoorwaarden() {
  const H = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-serif text-2xl text-[var(--foreground)] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{children}</h2>
  );

  return (
    <article className="px-6 pb-32 pt-32 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-5xl text-[var(--foreground)] md:text-6xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Algemene Voorwaarden</h1>
        <p className="mt-4 text-sm text-[var(--muted-foreground)]">Laatst bijgewerkt: juni 2026 · Heaven Effects</p>

        <div className="mt-12 space-y-10 text-[var(--muted-foreground)] leading-relaxed">
          <section>
            <H>1. Definities</H>
            <p><strong>Heaven Effects:</strong> de opdrachtnemer.</p>
            <p><strong>Opdrachtgever:</strong> de natuurlijke of rechtspersoon die een opdracht verstrekt.</p>
          </section>

          <section>
            <H>2. Toepasselijkheid</H>
            <p>Deze voorwaarden zijn van toepassing op alle offertes, overeenkomsten en leveringen van Heaven Effects, tenzij schriftelijk anders overeengekomen.</p>
          </section>

          <section>
            <H>3. Offertes en boekingen</H>
            <p>Offertes zijn 30 dagen geldig. Een boeking is definitief na schriftelijke bevestiging en ontvangst van de aanbetaling van 30%. Het restant dient uiterlijk 14 dagen vóór het evenement te zijn voldaan.</p>
          </section>

          <section>
            <H>4. Annulering</H>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Tot 30 dagen vóór evenement: aanbetaling vervalt</li>
              <li>Tussen 30 en 14 dagen vóór evenement: 50% van het totaalbedrag verschuldigd</li>
              <li>Binnen 14 dagen vóór evenement: 100% van het totaalbedrag verschuldigd</li>
            </ul>
          </section>

          <section>
            <H>5. Uitvoering</H>
            <p>Heaven Effects voert de opdracht naar beste vermogen uit. Locatie en omstandigheden moeten geschikt zijn voor pyrotechnische effecten. Veiligheidsafstanden en lokale regelgeving worden altijd nageleefd.</p>
          </section>

          <section>
            <H>6. Overmacht</H>
            <p>Bij overmacht (extreem weer, brandgevaar, overheidsbesluit) kan Heaven Effects de uitvoering opschorten of in overleg verplaatsen. De opdrachtgever heeft in geval van overmacht geen recht op schadevergoeding.</p>
          </section>

          <section>
            <H>7. Aansprakelijkheid</H>
            <p>Heaven Effects is verzekerd voor bedrijfsaansprakelijkheid. Aansprakelijkheid is beperkt tot het factuurbedrag van de betreffende opdracht. Heaven Effects is niet aansprakelijk voor indirecte schade of gederfde winst.</p>
          </section>

          <section>
            <H>8. Vergunningen</H>
            <p>De opdrachtgever is verantwoordelijk voor het regelen van eventuele lokale vergunningen, tenzij anders schriftelijk overeengekomen. Heaven Effects adviseert hier graag bij.</p>
          </section>

          <section>
            <H>9. Foto- en videorechten</H>
            <p>Heaven Effects mag foto's en video's van het evenement gebruiken voor eigen marketing en portfolio, tenzij anders afgesproken.</p>
          </section>

          <section>
            <H>10. Toepasselijk recht</H>
            <p>Op alle overeenkomsten is Nederlands recht van toepassing.</p>
          </section>

          <section>
            <H>11. Contact</H>
            <p>Vragen? Mail naar <a href="mailto:info@heaveneffects.nl" className="text-[var(--gold-deep)] underline underline-offset-2">info@heaveneffects.nl</a>.</p>
          </section>
        </div>
      </div>
    </article>
  );
}
