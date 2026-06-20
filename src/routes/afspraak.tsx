import { createFileRoute } from "@tanstack/react-router";
import { HoverButton, GlowLink } from "@/components/ui/hover-glow-button";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
  Heart,
  PartyPopper,
  Building2,
  Crown,
  Cake,
  Star,
  Calendar as CalendarIcon,
  MapPin,
  Users,
  Mail,
  Phone,
  Wand2,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { categories } from "@/lib/catalog";

export const Route = createFileRoute("/afspraak")({
  head: () => ({
    meta: [
      { title: "Maak een afspraak — Heaven Effects" },
      {
        name: "description",
        content:
          "Plan een vrijblijvend gesprek met Heaven Effects. Vertel ons over uw event en wij komen met een voorstel op maat.",
      },
      { property: "og:title", content: "Maak een afspraak — Heaven Effects" },
      {
        property: "og:description",
        content:
          "Vertel ons over uw event in een paar stappen — wij nemen binnen 24 uur contact op.",
      },
    ],
  }),
  component: AfspraakPage,
});

type EventType =
  | "Bruiloft"
  | "Verloving"
  | "Verjaardag"
  | "Bedrijfsevent"
  | "Gala"
  | "Anders";

type FormState = {
  eventType: EventType | "";
  date: string;
  flexibleDate: boolean;
  location: string;
  venue: string;
  guests: string;
  interests: string[];
  budget: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  contactPreference: "Email" | "Telefoon" | "WhatsApp" | "";
};

const initial: FormState = {
  eventType: "",
  date: "",
  flexibleDate: false,
  location: "",
  venue: "",
  guests: "",
  interests: [],
  budget: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  contactPreference: "",
};

const eventTypes: { value: EventType; icon: typeof Heart; desc: string }[] = [
  { value: "Bruiloft", icon: Heart, desc: "Een dag om nooit te vergeten" },
  { value: "Verloving", icon: Sparkles, desc: "Een intiem en sierlijk moment" },
  { value: "Verjaardag", icon: Cake, desc: "Mijlpaal in stijl gevierd" },
  { value: "Bedrijfsevent", icon: Building2, desc: "Indruk maken op gasten" },
  { value: "Gala", icon: Crown, desc: "Couture op grote schaal" },
  { value: "Anders", icon: Star, desc: "Vertel ons uw idee" },
];

const guestRanges = ["< 50", "50 – 100", "100 – 200", "200 – 500", "500+"];
const budgetRanges = [
  "< € 2.500",
  "€ 2.500 – € 10.000",
  "€ 10.000 – € 25.000",
  "€ 25.000 – € 50.000",
  "€ 50.000+",
  "Nog onbekend",
];
const contactOptions: FormState["contactPreference"][] = [
  "Email",
  "Telefoon",
  "WhatsApp",
];

const totalSteps = 4;

function AfspraakPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const progress = useMemo(() => (step / totalSteps) * 100, [step]);

  const canNext = useMemo(() => {
    if (step === 1) return data.eventType !== "";
    if (step === 2) return (data.flexibleDate || data.date !== "") && data.location.trim() !== "" && data.guests !== "";
    if (step === 3) return true;
    if (step === 4)
      return (
        data.firstName.trim() !== "" &&
        data.lastName.trim() !== "" &&
        /\S+@\S+\.\S+/.test(data.email) &&
        data.contactPreference !== ""
      );
    return false;
  }, [step, data]);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const toggleInterest = (slug: string) =>
    setData((d) => ({
      ...d,
      interests: d.interests.includes(slug)
        ? d.interests.filter((i) => i !== slug)
        : [...d.interests, slug],
    }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canNext) return;
    // For now: open a prefilled email. Easy to swap to a backend later.
    const body = [
      `Type event: ${data.eventType}`,
      `Datum: ${data.flexibleDate ? "Flexibel" : data.date}`,
      `Locatie: ${data.location}${data.venue ? ` (${data.venue})` : ""}`,
      `Aantal gasten: ${data.guests}`,
      `Interesses: ${data.interests.join(", ") || "—"}`,
      `Budget: ${data.budget || "—"}`,
      `Naam: ${data.firstName} ${data.lastName}`,
      `E-mail: ${data.email}`,
      `Telefoon: ${data.phone || "—"}`,
      `Contact via: ${data.contactPreference}`,
      ``,
      `Bericht:`,
      data.message || "—",
    ].join("\n");
    const url = `mailto:info@heaveneffects.nl?subject=${encodeURIComponent(
      `Afspraak — ${data.eventType} (${data.firstName} ${data.lastName})`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <section className="relative pt-36 pb-12">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 -right-20 h-[35rem] w-[35rem] rounded-full bg-blush opacity-70 blur-3xl animate-drift" />
          <div
            className="absolute -bottom-32 -left-20 h-[30rem] w-[30rem] rounded-full bg-accent/25 blur-3xl animate-drift"
            style={{ animationDelay: "3s" }}
          />
        </div>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Sparkles className="mx-auto h-6 w-6 text-accent animate-fade-up" />
          <h1 className="mt-6 font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] animate-fade-up">
            Maak een <span className="italic text-gradient-gold">afspraak</span>
          </h1>
          <p
            className="mt-6 max-w-xl mx-auto text-base text-muted-foreground sm:text-lg animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            Vertel ons in een paar stappen over uw event. Wij nemen binnen 24 uur contact
            op met een persoonlijk voorstel.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-32">
        {submitted ? (
          <SuccessCard data={data} />
        ) : (
          <form
            onSubmit={submit}
            className="rounded-3xl border border-border bg-card p-8 shadow-luxe sm:p-12 animate-fade-up"
          >
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span>Stap {step} van {totalSteps}</span>
                <span>
                  {step === 1 && "Type event"}
                  {step === 2 && "Datum & locatie"}
                  {step === 3 && "Wensen"}
                  {step === 4 && "Uw gegevens"}
                </span>
              </div>
              <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full bg-foreground transition-all duration-700 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div key={step} className="animate-fade-up">
              {step === 1 && (
                <Step1 value={data.eventType} onPick={(v) => update("eventType", v)} />
              )}
              {step === 2 && (
                <Step2
                  data={data}
                  onChange={(p) => setData((d) => ({ ...d, ...p }))}
                />
              )}
              {step === 3 && (
                <Step3
                  selected={data.interests}
                  budget={data.budget}
                  onToggle={toggleInterest}
                  onBudget={(b) => update("budget", b)}
                />
              )}
              {step === 4 && (
                <Step4 data={data} onChange={(p) => setData((d) => ({ ...d, ...p }))} />
              )}
            </div>

            <div className="mt-10 flex items-center justify-between gap-4">
              <HoverButton
                type="button"
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                className={`border border-foreground/15 px-5 py-2.5 hover:border-foreground/40 ${
                  step === 1 ? "invisible" : ""
                }`}
                backgroundColor="transparent"
                textColor="var(--foreground)"
              >
                <ArrowLeft className="h-4 w-4" /> Vorige
              </HoverButton>

              {step < totalSteps ? (
                <HoverButton
                  type="button"
                  disabled={!canNext}
                  onClick={() => setStep((s) => Math.min(totalSteps, s + 1))}
                  className="px-7 py-3 disabled:opacity-40"
                >
                  Volgende <ArrowRight className="h-4 w-4" />
                </HoverButton>
              ) : (
                <HoverButton
                  type="submit"
                  disabled={!canNext}
                  className="px-7 py-3 disabled:opacity-40"
                >
                  Verstuur aanvraag <Sparkles className="h-4 w-4" />
                </HoverButton>
              )}
            </div>
          </form>
        )}

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Liever direct contact?{" "}
          <a href="mailto:info@heaveneffects.nl" className="link-luxe">info@heaveneffects.nl</a>{" "}
          ·{" "}
          <a href="tel:+31652227124" className="link-luxe">+31 (0)6 5222 71 24</a>
        </p>
      </section>
    </SiteLayout>
  );
}

/* ---------- Steps ---------- */

function Step1({
  value,
  onPick,
}: {
  value: FormState["eventType"];
  onPick: (v: EventType) => void;
}) {
  return (
    <div>
      <h2 className="font-display text-3xl leading-[1.1]">
        Wat voor <span className="italic text-gradient-gold">event</span> mogen we
        ontwerpen?
      </h2>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {eventTypes.map(({ value: v, icon: Icon, desc }) => {
          const active = value === v;
          return (
            <button
              key={v}
              type="button"
              onClick={() => onPick(v)}
              className={`group relative flex items-start gap-4 rounded-2xl border p-5 text-left transition-all ${
                active
                  ? "border-foreground bg-secondary shadow-soft"
                  : "border-border bg-background hover:border-foreground/40"
              }`}
            >
              <span
                className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors ${
                  active ? "bg-foreground text-background" : "bg-secondary text-primary"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-xl">{v}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{desc}</p>
              </div>
              {active && (
                <Check className="absolute right-4 top-4 h-4 w-4 text-foreground" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Step2({
  data,
  onChange,
}: {
  data: FormState;
  onChange: (p: Partial<FormState>) => void;
}) {
  return (
    <div>
      <h2 className="font-display text-3xl leading-[1.1]">
        Wanneer en <span className="italic text-gradient-gold">waar</span>?
      </h2>
      <div className="mt-8 space-y-6">
        <Field label="Datum van het event" icon={CalendarIcon}>
          <input
            type="date"
            value={data.date}
            disabled={data.flexibleDate}
            onChange={(e) => onChange({ date: e.target.value })}
            className="luxe-input"
          />
        </Field>
        <label className="flex items-center gap-3 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={data.flexibleDate}
            onChange={(e) =>
              onChange({ flexibleDate: e.target.checked, date: e.target.checked ? "" : data.date })
            }
            className="h-4 w-4 rounded border-border accent-foreground"
          />
          Datum is nog flexibel
        </label>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Stad / regio" icon={MapPin}>
            <input
              type="text"
              required
              value={data.location}
              onChange={(e) => onChange({ location: e.target.value })}
              placeholder="Bijv. Utrecht"
              className="luxe-input"
            />
          </Field>
          <Field label="Locatie / venue (optioneel)" icon={Building2}>
            <input
              type="text"
              value={data.venue}
              onChange={(e) => onChange({ venue: e.target.value })}
              placeholder="Naam locatie"
              className="luxe-input"
            />
          </Field>
        </div>

        <div>
          <p className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4 text-accent" /> Aantal gasten
          </p>
          <div className="flex flex-wrap gap-2">
            {guestRanges.map((g) => (
              <Chip key={g} active={data.guests === g} onClick={() => onChange({ guests: g })}>
                {g}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .luxe-input {
          width: 100%;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: var(--foreground);
          transition: border-color .2s ease, box-shadow .2s ease;
        }
        .luxe-input:focus { outline: none; border-color: var(--foreground); box-shadow: 0 0 0 3px oklch(0.78 0.08 80 / 0.25); }
      `}</style>
    </div>
  );
}

function Step3({
  selected,
  budget,
  onToggle,
  onBudget,
}: {
  selected: string[];
  budget: string;
  onToggle: (slug: string) => void;
  onBudget: (b: string) => void;
}) {
  return (
    <div>
      <h2 className="font-display text-3xl leading-[1.1]">
        Welke <span className="italic text-gradient-gold">elementen</span> spreken u aan?
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Selecteer alles wat u interessant vindt — we vertalen het naar een voorstel.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {categories.map((c) => {
          const active = selected.includes(c.slug);
          return (
            <button
              key={c.slug}
              type="button"
              onClick={() => onToggle(c.slug)}
              className={`group relative overflow-hidden rounded-2xl border text-left transition-all ${
                active
                  ? "border-foreground shadow-soft"
                  : "border-border hover:border-foreground/40"
              }`}
            >
              <div className="flex items-stretch gap-4">
                <div className="aspect-square w-24 shrink-0 overflow-hidden">
                  <img
                    src={c.cover}
                    alt={c.title}
                    className="img-luxe h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 py-4 pr-4">
                  <p className="font-display text-xl">{c.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">{c.tagline}</p>
                </div>
              </div>
              {active && (
                <span className="absolute right-3 top-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background">
                  <Check className="h-3.5 w-3.5" />
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-10">
        <p className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Wand2 className="h-4 w-4 text-accent" /> Indicatief budget
        </p>
        <div className="flex flex-wrap gap-2">
          {budgetRanges.map((b) => (
            <Chip key={b} active={budget === b} onClick={() => onBudget(b)}>
              {b}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
}

function Step4({
  data,
  onChange,
}: {
  data: FormState;
  onChange: (p: Partial<FormState>) => void;
}) {
  return (
    <div>
      <h2 className="font-display text-3xl leading-[1.1]">
        Hoe kunnen we u <span className="italic text-gradient-gold">bereiken</span>?
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field label="Voornaam">
          <input
            required
            type="text"
            value={data.firstName}
            onChange={(e) => onChange({ firstName: e.target.value })}
            className="luxe-input"
          />
        </Field>
        <Field label="Achternaam">
          <input
            required
            type="text"
            value={data.lastName}
            onChange={(e) => onChange({ lastName: e.target.value })}
            className="luxe-input"
          />
        </Field>
        <Field label="E-mailadres" icon={Mail}>
          <input
            required
            type="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            className="luxe-input"
          />
        </Field>
        <Field label="Telefoon (optioneel)" icon={Phone}>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            className="luxe-input"
          />
        </Field>
      </div>

      <div className="mt-8">
        <p className="mb-3 text-sm text-muted-foreground">Voorkeur voor contact</p>
        <div className="flex flex-wrap gap-2">
          {contactOptions.map((c) => (
            <Chip key={c} active={data.contactPreference === c} onClick={() => onChange({ contactPreference: c })}>
              {c}
            </Chip>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Field label="Vertel ons meer (optioneel)" icon={PartyPopper}>
          <textarea
            rows={4}
            value={data.message}
            onChange={(e) => onChange({ message: e.target.value })}
            placeholder="Sfeer, kleuren, inspiratie, bijzonderheden…"
            className="luxe-input resize-none"
          />
        </Field>
      </div>

      <style>{`
        .luxe-input {
          width: 100%;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: var(--foreground);
          transition: border-color .2s ease, box-shadow .2s ease;
          font-family: inherit;
        }
        .luxe-input:focus { outline: none; border-color: var(--foreground); box-shadow: 0 0 0 3px oklch(0.78 0.08 80 / 0.25); }
      `}</style>
    </div>
  );
}

/* ---------- helpers ---------- */

function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon?: typeof Mail;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
        {Icon && <Icon className="h-4 w-4 text-accent" />} {label}
      </span>
      {children}
    </label>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition-all ${
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-background text-foreground hover:border-foreground/40"
      }`}
    >
      {children}
    </button>
  );
}

function SuccessCard({ data }: { data: FormState }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-12 text-center shadow-luxe animate-fade-up">
      <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent">
        <Check className="h-7 w-7" />
      </div>
      <h2 className="mt-6 font-display text-4xl leading-[1.05]">
        Bedankt, {data.firstName} <span className="italic text-gradient-gold">·</span>
      </h2>
      <p className="mx-auto mt-4 max-w-md text-muted-foreground">
        Uw aanvraag voor een {data.eventType.toLowerCase()} is geopend in uw mailprogramma.
        Verstuur de mail en wij nemen binnen 24 uur contact op.
      </p>
      <GlowLink
        to="/"
        className="mt-8 rounded-full border border-foreground/15 px-6 py-3"
        backgroundColor="transparent"
        textColor="var(--foreground)"
      >
        Terug naar home
      </GlowLink>
    </div>
  );
}
