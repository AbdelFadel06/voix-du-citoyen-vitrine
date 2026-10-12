import {
  ArrowRight,
  BarChart3,
  Camera,
  CheckCircle2,
  Clock,
  Eye,
  HandHeart,
  Lightbulb,
  MapPin,
  Megaphone,
  Mic,
  MousePointerClick,
  ShieldCheck,
  Signal,
  Trophy,
  Users,
} from "lucide-react";
import { CONTACT_EMAIL, ESPACE_MAIRIE_URL } from "@/lib/site";
import { Carrousel } from "./carrousel";
import { PhoneMockup } from "./phone-mockup";
import { ButtonAction, ButtonGhost, Container, Eyebrow, Section, SectionTitle } from "./ui";

/* 1. Hero ---------------------------------------------------------------- */

export function Hero() {
  return (
    <section id="accueil" className="overflow-hidden bg-white">
      <Container className="grid items-center gap-14 pb-16 pt-10 md:pb-24 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div className="max-w-xl animate-entree">
          <Eyebrow>
            <span className="h-2 w-2 rounded bg-action-500" />
            Pour nos communes
          </Eyebrow>
          <h1 className="mt-6 text-[2.25rem] font-extrabold text-ink md:text-[3.5rem]">
            Votre commune, <span className="text-brand-500">votre voix.</span>
          </h1>
          {/* Mobile et tablette : la capture vient juste après le titre. */}
          <div className="mt-10 flex justify-center lg:hidden">
            <PhoneMockup />
          </div>
          <p className="mt-6 text-lg text-muted md:text-xl">
            Signalez un problème, proposez une idée et suivez ce que fait votre mairie. Avec une
            photo, ou simplement en parlant.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonAction href="#telecharger">Télécharger l&apos;application</ButtonAction>
            <ButtonGhost href="#comment-ca-marche">
              Comment ça marche <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonGhost>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted">
            {["100 % gratuit", "Votre nom reste caché", "Parlez en bariba, dendi, fon…"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-500" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        {/* Grand écran : la capture est dans la colonne de droite. */}
        <div className="hidden animate-entree justify-center [animation-delay:150ms] lg:flex lg:justify-end lg:pr-24">
          <PhoneMockup />
        </div>
      </Container>
    </section>
  );
}

/* 2. Comment ça marche ---------------------------------------------------- */

const ETAPES = [
  {
    icon: Camera,
    titre: "Prenez une photo",
    texte: "Un tas d'ordures, un lampadaire éteint, une route abîmée : une photo ou une courte vidéo suffit.",
  },
  {
    icon: Mic,
    titre: "Dites où c'est",
    texte: "Votre position est ajoutée toute seule. Ou dites-le à voix haute : « derrière le grand marché ».",
  },
  {
    icon: Clock,
    titre: "Suivez la réponse",
    texte: "Vous voyez quand la mairie reçoit votre signalement, le prend en charge et le règle.",
  },
];

export function CommentCaMarche() {
  return (
    <Section id="comment-ca-marche" className="bg-brand-500">
      <Container>
        <SectionTitle
          center
          tone="light"
          eyebrow="Comment ça marche"
          title="Trois gestes, moins d'une minute."
          intro="Pas de formulaire compliqué. Pas besoin de savoir écrire. Pas besoin d'adresse."
        />
        <ol data-reveal-groupe className="relative mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-white/50 md:block"
          />
          {ETAPES.map((e, i) => (
            <li key={e.titre} className="relative flex flex-col items-center text-center">
              <span className="relative flex h-20 w-20 items-center justify-center rounded bg-white text-brand-500">
                <e.icon className="h-9 w-9" aria-hidden="true" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded bg-navy-900 font-display text-sm font-bold text-white">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-6 text-xl font-bold text-white">{e.titre}</h3>
              <p className="mt-2 max-w-xs text-white">{e.texte}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

/* 3. Les trois volets ------------------------------------------------------ */

const VOLETS = [
  {
    icon: Megaphone,
    titre: "Signaler",
    texte: "Voirie, ordures, éclairage, inondation, eau… Envoyez le problème directement au bon service de la mairie.",
    exemple: "« Le caniveau déborde dans notre rue depuis la pluie. »",
    couleur: "bg-brand-500",
  },
  {
    icon: Lightbulb,
    titre: "Proposer",
    texte: "Une idée pour votre quartier ? Proposez-la. Vos voisins peuvent la soutenir pour lui donner du poids.",
    exemple: "« Des lampadaires sur la route du marché. »",
    couleur: "bg-navy-800",
  },
  {
    icon: Trophy,
    titre: "Voir les réalisations",
    texte: "Suivez les travaux de la mairie : photos avant, pendant et après, et avancement en pourcentage.",
    exemple: "« Pavage de la rue de l'école : 70 % terminé. »",
    couleur: "bg-action-500",
  },
];

export function Volets() {
  return (
    <Section id="fonctionnalites" className="bg-white">
      <Container>
        <SectionTitle
          eyebrow="Fonctionnalités"
          title="Une seule application pour parler à votre mairie."
          intro="Trois espaces simples, pensés pour tout le monde."
        />
        <Carrousel
          data-reveal-groupe
          etiquette="Fonctionnalités"
          className="mt-10 md:mx-0 md:mt-16 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:py-0 md:[&>*]:w-auto"
        >
          {VOLETS.map((v) => (
            <article
              key={v.titre}
              className="group flex flex-col rounded bg-white p-7 ring-1 ring-line transition-shadow duration-300 hover:shadow-xl hover:shadow-navy-900/5 md:p-8"
            >
              <span className={`flex h-14 w-14 items-center justify-center rounded text-white ${v.couleur}`}>
                <v.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-bold text-ink">{v.titre}</h3>
              <p className="mt-3 flex-1 text-muted">{v.texte}</p>
              <p className="mt-6 border-t border-line pt-5 text-sm italic text-ink/80">
                {v.exemple}
              </p>
            </article>
          ))}
        </Carrousel>
      </Container>
    </Section>
  );
}

/* 4. Ce qui change tout ----------------------------------------------------- */

const ATOUTS = [
  {
    icon: Mic,
    titre: "Parlez au lieu d'écrire",
    texte: "Enregistrez un message vocal en fon, bariba, dendi, yoruba, français ou dans votre langue.",
  },
  {
    icon: ShieldCheck,
    titre: "Votre nom reste caché",
    texte: "Il n'est jamais affiché. Ni aux autres habitants, ni même à la mairie.",
  },
  {
    icon: Signal,
    titre: "Peu de données",
    texte: "Photos et sons sont allégés avant l'envoi. Votre forfait est préservé.",
  },
  {
    icon: MapPin,
    titre: "Pas besoin d'adresse",
    texte: "Votre position ou un simple repère suffit : « près de la mosquée », « face à la pharmacie ».",
  },
];

export function Atouts() {
  return (
    <Section className="bg-navy-900">
      <Container>
        <SectionTitle
          tone="light"
          eyebrow="Ce qui change tout"
          title="Fait pour nos communes, pas pour un bureau."
          intro="Chacun peut se faire entendre, quel que soit son téléphone ou sa langue."
        />
        <Carrousel
          data-reveal-groupe
          etiquette="Ce qui change tout"
          ton="clair"
          className="mt-10 md:mx-0 md:mt-16 md:grid md:grid-cols-2 md:gap-px md:overflow-hidden md:rounded md:bg-white/10 md:px-0 md:py-0 lg:grid-cols-4 md:[&>*]:w-auto"
        >
          {ATOUTS.map((a) => (
            <div key={a.titre} className="rounded bg-navy-900 p-7 ring-1 ring-white/15 md:rounded-none md:p-8 md:ring-0">
              <a.icon className="h-8 w-8 text-brand-300" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-bold text-white">{a.titre}</h3>
              <p className="mt-2 text-brand-100">{a.texte}</p>
            </div>
          ))}
        </Carrousel>
      </Container>
    </Section>
  );
}

/* 5. Pour les mairies ----------------------------------------------------- */

const MAIRIE_POINTS = [
  { icon: BarChart3, texte: "Des tableaux de bord clairs, par quartier et par secteur." },
  { icon: Clock, texte: "Les délais de traitement suivis, pour savoir où ça coince." },
  { icon: MousePointerClick, texte: "Chaque dossier envoyé au bon service, en un clic." },
  { icon: Trophy, texte: "Vos réalisations publiées et visibles par tous les habitants." },
];

export function PourLesMairies() {
  return (
    <Section id="mairies">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionTitle
            eyebrow="Pour les mairies"
            title="Voyez ce qui compte pour vos habitants, quartier par quartier."
            intro="Les signalements arrivent triés, localisés et avec photo. Vous décidez plus vite et vous montrez ce qui avance. Toutes nos communes peuvent rejoindre Voix du Citoyen."
          />
          <ul data-reveal-groupe className="mt-8 space-y-4">
            {MAIRIE_POINTS.map((p) => (
              <li key={p.texte} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand-50 text-brand-600">
                  <p.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="pt-2 text-ink">{p.texte}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonAction href={`mailto:${CONTACT_EMAIL}?subject=Demande%20de%20d%C3%A9monstration%20%E2%80%94%20Voix%20du%20Citoyen`}>
              Demander une démonstration
            </ButtonAction>
            <ButtonGhost href={ESPACE_MAIRIE_URL}>Espace mairie / organisation</ButtonGhost>
          </div>
        </div>

        <div data-reveal>
          <MairieApercu />
        </div>
      </Container>
    </Section>
  );
}

const QUARTIERS = [
  { nom: "Quartier A", valeur: 42, resolus: 31 },
  { nom: "Quartier B", valeur: 35, resolus: 22 },
  { nom: "Quartier C", valeur: 28, resolus: 20 },
  { nom: "Quartier D", valeur: 19, resolus: 15 },
  { nom: "Quartier E", valeur: 14, resolus: 12 },
];

/** Illustration d'un tableau de bord (données fictives, à titre d'exemple). */
function MairieApercu() {
  const max = Math.max(...QUARTIERS.map((q) => q.valeur));
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded bg-brand-500 md:translate-x-5 md:translate-y-5"
      />
      <figure className="rounded bg-white p-6 ring-1 ring-line md:p-8">
        <figcaption className="flex items-center justify-between">
          <span className="font-display text-lg font-bold text-ink">Signalements du mois</span>
          <span className="rounded bg-surface px-3 py-1 text-xs font-semibold text-muted">Exemple</span>
        </figcaption>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { v: "138", l: "reçus" },
            { v: "100", l: "résolus" },
            { v: "4 j", l: "délai moyen" },
          ].map((k) => (
            <div key={k.l} className="rounded bg-surface p-3 md:p-4">
              <p className="font-display text-2xl font-extrabold text-ink md:text-3xl">{k.v}</p>
              <p className="text-xs text-muted md:text-sm">{k.l}</p>
            </div>
          ))}
        </div>
        <ul className="mt-6 space-y-3">
          {QUARTIERS.map((q) => (
            <li key={q.nom} className="grid grid-cols-[6.5rem_1fr_2rem] items-center gap-3 text-sm">
              <span className="font-medium text-ink">{q.nom}</span>
              <span className="relative h-3 overflow-hidden rounded bg-brand-50">
                <span
                  className="absolute inset-y-0 left-0 rounded bg-brand-200"
                  style={{ width: `${(q.valeur / max) * 100}%` }}
                />
                <span
                  className="absolute inset-y-0 left-0 rounded bg-brand-500"
                  style={{ width: `${(q.resolus / max) * 100}%` }}
                />
              </span>
              <span className="text-right tabular-nums text-muted">{q.valeur}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex gap-5 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded bg-brand-500" /> Résolus
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded bg-brand-200" /> Reçus
          </span>
        </div>
      </figure>
    </div>
  );
}

/* 6. ONG et partenaires ----------------------------------------------------- */

const ONG_POINTS = [
  {
    icon: Eye,
    titre: "Transparence",
    texte: "Suivez les signalements de vos secteurs, en lecture seule, sans intermédiaire.",
  },
  {
    icon: HandHeart,
    titre: "Impact mesurable",
    texte: "Voyez ce qui est résolu, où et en combien de temps, pour orienter vos actions.",
  },
  {
    icon: Users,
    titre: "Au plus près des habitants",
    texte: "Les besoins remontent directement du terrain, dans la langue de chacun.",
  },
];

export function PourLesOng() {
  return (
    <Section className="bg-brand-500">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionTitle
            tone="light"
            eyebrow="ONG et partenaires"
            title="Agir là où les besoins sont réels."
            intro="Eau, assainissement, santé, éducation : accédez aux signalements qui concernent votre domaine."
          />
          <div data-reveal-groupe className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {ONG_POINTS.map((p) => (
              <div key={p.titre} className="flex flex-col gap-4 rounded bg-white p-6 lg:flex-row lg:items-start">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-brand-50 text-brand-600">
                  <p.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{p.titre}</h3>
                  <p className="mt-1 text-muted">{p.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

