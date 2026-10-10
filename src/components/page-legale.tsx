import { Container } from "./ui";

export function PageLegale({
  titre,
  majLe,
  children,
}: {
  titre: string;
  majLe: string;
  children: React.ReactNode;
}) {
  return (
    <Container className="py-16 md:py-24">
      <article className="mx-auto max-w-[70ch]">
        <h1 className="text-[2rem] font-extrabold text-ink md:text-[2.75rem]">{titre}</h1>
        <p className="mt-3 text-sm text-muted">Dernière mise à jour : {majLe}</p>
        <div className="mt-10 space-y-5 text-muted [&_a]:font-semibold [&_a]:text-brand-600 [&_a]:underline [&_h2]:mt-14 [&_h2]:scroll-mt-24 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-ink [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          {children}
        </div>
      </article>
    </Container>
  );
}

/** Encadré « En bref » en tête des pages légales. */
export function EnBref({ points }: { points: string[] }) {
  return (
    <div className="rounded bg-brand-50 p-6 ring-1 ring-brand-100 md:p-8">
      <p className="font-display text-lg font-bold text-ink">En bref</p>
      <ul className="mt-4 list-none! space-y-3 pl-0!">
        {points.map((p) => (
          <li key={p} className="flex gap-3 text-ink">
            <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded bg-brand-500" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Tableau lisible sur mobile : une carte par ligne. */
export function TableauDonnees({
  lignes,
}: {
  lignes: { categorie: string; donnees: string; pourquoi: string; obligatoire: string }[];
}) {
  return (
    <div className="space-y-4">
      {lignes.map((l) => (
        <div key={l.categorie} className="rounded bg-white p-5 ring-1 ring-line">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="mt-0! text-base!">{l.categorie}</h3>
            <span className="rounded bg-surface px-3 py-0.5 text-xs font-semibold text-muted">
              {l.obligatoire}
            </span>
          </div>
          <p className="mt-2 text-ink">{l.donnees}</p>
          <p className="mt-2 text-sm">
            <span className="font-semibold text-ink">Pourquoi : </span>
            {l.pourquoi}
          </p>
        </div>
      ))}
    </div>
  );
}
