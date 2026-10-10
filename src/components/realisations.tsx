import Image from "next/image";
import { CalendarDays, Hammer, MapPin } from "lucide-react";
import { getDernieresRealisations, type Realisation, type StatutRealisation } from "@/lib/api";
import { API_URL } from "@/lib/site";
import { Container, Section, SectionTitle } from "./ui";

const STATUTS: Record<StatutRealisation, { label: string; classe: string }> = {
  PLANIFIEE: { label: "Prévue", classe: "bg-brand-50 text-brand-700" },
  EN_COURS: { label: "En cours", classe: "bg-amber-50 text-amber-800" },
  TERMINEE: { label: "Terminée", classe: "bg-emerald-50 text-emerald-700" },
  SUSPENDUE: { label: "Suspendue", classe: "bg-slate-100 text-slate-700" },
};

const dateCourte = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" });

function urlMedia(url: string) {
  return url.startsWith("http") ? url : `${API_URL}${url}`;
}

export function RealisationsSection({ children }: { children: React.ReactNode }) {
  return (
    <Section id="realisations">
      <Container>
        <SectionTitle
          eyebrow="Dernières réalisations"
          title="Ce que fait votre mairie, en images."
          intro="Les travaux publiés par la mairie, avec leur avancement. Mis à jour régulièrement."
        />
        <div className="mt-12 md:mt-16">{children}</div>
      </Container>
    </Section>
  );
}

export async function DernieresRealisations() {
  const realisations = await getDernieresRealisations();

  if (!realisations || realisations.length === 0) {
    return <EtatVide horsLigne={realisations === null} />;
  }

  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {realisations.map((r) => (
        <li key={r.id}>
          <CarteRealisation r={r} />
        </li>
      ))}
    </ul>
  );
}

function CarteRealisation({ r }: { r: Realisation }) {
  const statut = STATUTS[r.statut] ?? STATUTS.PLANIFIEE;
  const taux = Math.max(0, Math.min(100, Math.round(r.taux_avancement ?? 0)));
  const fin = r.date_fin_prevue ? dateCourte.format(new Date(r.date_fin_prevue)) : null;
  const quartiers = r.quartiers.map((q) => q.nom).join(", ");

  return (
    <article className="flex h-full flex-col overflow-hidden rounded bg-white ring-1 ring-line transition-shadow duration-300 hover:shadow-xl hover:shadow-navy-900/5">
      <div className="relative aspect-[4/3] bg-brand-50">
        {r.couverture?.miniature ? (
          <Image
            src={urlMedia(r.couverture.miniature)}
            alt=""
            fill
            sizes="(min-width: 768px) 380px, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-brand-300">
            <Hammer className="h-12 w-12" aria-hidden="true" />
          </div>
        )}
        <span className={`absolute left-4 top-4 rounded px-3 py-1 text-xs font-semibold ${statut.classe}`}>
          {statut.label}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        {r.secteur && <p className="text-sm font-semibold text-brand-600">{r.secteur.nom}</p>}
        <h3 className="mt-1 text-lg font-bold text-ink">{r.titre}</h3>
        <div className="mt-3 space-y-1.5 text-sm text-muted">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            {quartiers ? `${quartiers} · ${r.commune.nom}` : r.commune.nom}
          </p>
          {fin && (
            <p className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
              Fin prévue : {fin}
            </p>
          )}
        </div>
        <div className="mt-auto pt-6">
          <div className="flex justify-between text-sm">
            <span className="text-muted">Avancement</span>
            <span className="font-semibold tabular-nums text-ink">{taux} %</span>
          </div>
          <div
            className="mt-2 h-2 overflow-hidden rounded bg-brand-50"
            role="progressbar"
            aria-valuenow={taux}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Avancement des travaux"
          >
            <div className="h-full rounded bg-brand-500" style={{ width: `${taux}%` }} />
          </div>
        </div>
      </div>
    </article>
  );
}

function EtatVide({ horsLigne }: { horsLigne: boolean }) {
  return (
    <div className="grid items-center gap-8 rounded bg-surface p-8 ring-1 ring-line md:grid-cols-[auto_1fr] md:p-12">
      <div className="flex -space-x-4" aria-hidden="true">
        {["bg-brand-500", "bg-navy-800", "bg-action-500"].map((c, i) => (
          <span
            key={c}
            className={`flex h-16 w-16 items-center justify-center rounded text-white ring-4 ring-surface ${c}`}
            style={{ transform: `rotate(${(i - 1) * 6}deg)` }}
          >
            <Hammer className="h-7 w-7" />
          </span>
        ))}
      </div>
      <div>
        <h3 className="text-xl font-bold text-ink md:text-2xl">
          {horsLigne ? "Les réalisations sont momentanément indisponibles." : "Les premières réalisations arrivent bientôt."}
        </h3>
        <p className="mt-2 max-w-[65ch] text-muted">
          {horsLigne
            ? "Revenez dans quelques instants, ou retrouvez-les directement dans l'application."
            : "Dès que la mairie publie ses travaux, vous les verrez ici et dans l'application : photos avant, pendant et après, et avancement."}
        </p>
      </div>
    </div>
  );
}

export function RealisationsChargement() {
  return (
    <ul className="grid gap-6 md:grid-cols-3" aria-busy="true" aria-label="Chargement des réalisations">
      {[0, 1, 2].map((i) => (
        <li key={i} className="h-[380px] animate-pulse rounded bg-surface ring-1 ring-line" />
      ))}
    </ul>
  );
}
