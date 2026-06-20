import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacybeleid")({
  head: () => ({
    meta: [
      { title: "Privacybeleid — Heaven Effects" },
      { name: "description", content: "Lees hoe Heaven Effects omgaat met uw persoonsgegevens." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://heaveneffects.nl/privacybeleid" }],
  }),
  component: Privacybeleid,
});

function Privacybeleid() {
  return (
    <article className="px-6 pb-32 pt-32 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-5xl text-[var(--foreground)] md:text-6xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Privacybeleid</h1>
        <p className="mt-4 text-sm text-[var(--muted-foreground)]">Laatst bijgewerkt: juni 2026</p>

        <div className="mt-12 space-y-10 text-[var(--muted-foreground)] leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-[var(--foreground)] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>1. Wie zijn wij?</h2>
            <p>Heaven Effects is gespecialiseerd in sierfontijnen, sterren en luxe effecten voor bijzondere momenten — bruiloften, evenementen en feesten in Nederland.</p>
            <p className="mt-2">Contact: <a href="mailto:info@heaveneffects.nl" className="text-[var(--gold-deep)] underline underline-offset-2">info@heaveneffects.nl</a></p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[var(--foreground)] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>2. Welke gegevens verzamelen wij?</h2>
            <p>Via ons afspraakformulier en contactformulier verzamelen wij:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Naam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer</li>
              <li>Datum, locatie en type evenement</li>
              <li>Eventuele aanvullende wensen</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[var(--foreground)] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>3. Waarvoor gebruiken wij uw gegevens?</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Contact opnemen naar aanleiding van uw aanvraag</li>
              <li>Een passende offerte op te stellen</li>
              <li>Het evenement professioneel voor te bereiden en uit te voeren</li>
            </ul>
            <p className="mt-3">Wij verkopen uw gegevens nooit aan derden.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[var(--foreground)] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>4. Cookies</h2>
            <p>Wij maken gebruik van functionele cookies (noodzakelijk voor de werking van de site) en — met uw toestemming — analytische cookies. U kunt uw toestemming altijd intrekken via de cookiebanner.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[var(--foreground)] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>5. Bewaartermijn</h2>
            <p>Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk. Contactverzoeken worden maximaal 2 jaar bewaard.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[var(--foreground)] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>6. Uw rechten</h2>
            <p>U heeft het recht op inzage, correctie of verwijdering van uw persoonsgegevens. Mail hiervoor naar <a href="mailto:info@heaveneffects.nl" className="text-[var(--gold-deep)] underline underline-offset-2">info@heaveneffects.nl</a>.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[var(--foreground)] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>7. Contact</h2>
            <p>Vragen? Mail naar <a href="mailto:info@heaveneffects.nl" className="text-[var(--gold-deep)] underline underline-offset-2">info@heaveneffects.nl</a>.</p>
          </section>
        </div>
      </div>
    </article>
  );
}
