import { Suspense, type ReactNode } from "react";
import { Plus } from "lucide-react";
import { getCommunes } from "@/lib/api";
import { CONTACT_EMAIL } from "@/lib/site";
import { Container, Section, SectionTitle } from "./ui";

async function Communes() {
  const communes = await getCommunes();
  if (!communes?.length) return null;
  const noms = communes.map((c) => c.nom);
  const liste =
    noms.length === 1 ? noms[0] : `${noms.slice(0, -1).join(", ")} et ${noms[noms.length - 1]}`;
  return (
    <>
      {" "}Elle est déjà ouverte à <strong className="text-ink">{liste}</strong>.
    </>
  );
}

const QUESTIONS: { q: string; r: ReactNode }[] = [
  {
    q: "L'application est-elle gratuite ?",
    r: "Oui, entièrement. Pas d'abonnement, pas de frais cachés. Vous n'avez besoin que d'un téléphone Android et d'un numéro de téléphone.",
  },
  {
    q: "La mairie voit-elle mon nom ?",
    r: "Non. Votre nom n'est jamais affiché : ni aux autres habitants, ni à la mairie. La mairie voit le problème, la photo et l'endroit, pas qui l'a envoyé.",
  },
  {
    q: "L'application consomme-t-elle beaucoup de données ?",
    r: "Très peu. Les photos, vidéos et messages vocaux sont allégés avant l'envoi. Un signalement avec photo pèse généralement moins qu'un message vocal WhatsApp.",
  },
  {
    q: "Ma commune est-elle concernée ?",
    r: (
      <>
        Voix du Citoyen est conçu pour toutes les communes du Bénin.
        <Suspense fallback={null}>
          <Communes />
        </Suspense>{" "}
        Votre commune n&apos;y est pas encore ? Parlez-en à votre mairie, ou{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand-600 underline underline-offset-4">
          écrivez-nous
        </a>
        .
      </>
    ),
  },
  {
    q: "Que se passe-t-il après mon signalement ?",
    r: "Il est envoyé au service concerné de la mairie. Vous suivez chaque étape dans l'application : reçu, pris en charge, résolu. Vous êtes prévenu quand ça avance.",
  },
];

export function Faq() {
  return (
    <Section id="faq" className="bg-white">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionTitle
          eyebrow="Questions fréquentes"
          title="Vous vous demandez peut-être…"
          intro={
            <>
              Une autre question ?{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand-600 underline underline-offset-4">
                Écrivez-nous
              </a>
              .
            </>
          }
        />
        <div className="divide-y divide-line rounded bg-white px-6 ring-1 ring-line md:px-8">
          {QUESTIONS.map(({ q, r }) => (
            <details key={q} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
                {q}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-brand-50 text-brand-600 transition-transform duration-200 group-open:rotate-45">
                  <Plus className="h-5 w-5" aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-[65ch] pb-5 text-muted">{r}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
