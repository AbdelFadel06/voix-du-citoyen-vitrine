import { CheckCircle2, ChevronLeft, Heart, MapPin, Mic, ShieldCheck } from "lucide-react";

const ONDES = [0.5, 0.8, 0.4, 1, 0.6, 0.9, 0.3, 0.7, 1, 0.5, 0.8, 0.4, 0.6, 0.9, 0.5, 0.7, 0.3, 0.8];

/** Aperçu de l'application dessiné en HTML (remplacer par une vraie capture dès que possible). */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      <div
        role="img"
        aria-label="Écran de l'application : un signalement de nid-de-poule, avec un message vocal en fon, reçu par la mairie."
        className="relative rounded-[2.75rem] bg-navy-900 p-2.5 shadow-2xl shadow-navy-900/30 ring-1 ring-navy-700"
      >
        <div className="overflow-hidden rounded-[2.2rem] bg-surface">
          {/* Barre d'état */}
          <div className="flex items-center justify-between bg-white px-6 pb-1 pt-3 text-[10px] font-semibold text-ink">
            <span>9:41</span>
            <span className="h-5 w-20 rounded bg-navy-900" />
            <span>4G</span>
          </div>

          {/* En-tête */}
          <div className="flex items-center gap-2 bg-white px-4 pb-3 pt-2">
            <ChevronLeft className="h-4 w-4 text-muted" />
            <span className="font-display text-sm font-bold text-ink">Mon signalement</span>
            <span className="ml-auto rounded bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">
              Voirie
            </span>
          </div>

          <div className="space-y-3 p-3">
            {/* Photo */}
            <div className="relative h-32 overflow-hidden rounded bg-[#b08460]">
              <div className="absolute left-1/2 top-1/2 h-12 w-24 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#5a3e2b] shadow-[inset_0_6px_10px_rgba(0,0,0,.45)]" />
              <div className="absolute left-[30%] top-[62%] h-4 w-10 rounded-[50%] bg-[#6b4a33]/80" />
              <span className="absolute bottom-2 left-2 rounded bg-navy-900/80 px-2 py-0.5 text-[11px] font-semibold text-white">
                Nid-de-poule, voie pavée
              </span>
            </div>

            {/* Message vocal */}
            <div className="flex items-center gap-2.5 rounded bg-white p-2.5 ring-1 ring-line">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-brand-500 text-white">
                <Mic className="h-4 w-4" />
              </span>
              <div className="flex h-7 flex-1 items-center gap-[3px]" aria-hidden="true">
                {ONDES.map((h, i) => (
                  <span
                    key={i}
                    className="animate-wave w-[3px] rounded bg-brand-300"
                    style={{ height: `${h * 100}%`, animationDelay: `${i * 70}ms` }}
                  />
                ))}
              </div>
              <span className="text-[10px] font-semibold text-muted">0:18 · fon</span>
            </div>

            {/* Repère */}
            <div className="flex items-start gap-2 rounded bg-white p-2.5 ring-1 ring-line">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-action-500" />
              <div className="text-[11px] leading-snug">
                <p className="font-semibold text-ink">Mon quartier</p>
                <p className="text-muted">Derrière le marché, à côté de l&apos;école</p>
              </div>
            </div>

            {/* Suivi */}
            <div className="rounded bg-white p-2.5 ring-1 ring-line">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-semibold text-ink">Suivi</span>
                <span className="rounded bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-700">
                  Pris en charge
                </span>
              </div>
              <div className="mt-2 flex items-center gap-1">
                <span className="h-1.5 flex-1 rounded bg-brand-500" />
                <span className="h-1.5 flex-1 rounded bg-brand-500" />
                <span className="h-1.5 flex-1 rounded bg-brand-100" />
              </div>
              <div className="mt-1.5 flex justify-between text-[9px] text-muted">
                <span>Envoyé</span>
                <span>Pris en charge</span>
                <span>Résolu</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bulles flottantes */}
      <div className="animate-float absolute -left-8 top-20 hidden items-center gap-2 rounded bg-white px-3 py-2.5 shadow-xl shadow-navy-900/10 ring-1 ring-line sm:flex lg:-left-28">
        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
        <div className="text-xs leading-tight">
          <p className="font-semibold text-ink">Reçu par la mairie</p>
          <p className="text-muted">il y a 2 h</p>
        </div>
      </div>
      <div
        className="animate-float absolute -right-8 top-36 hidden items-center gap-2 rounded bg-white px-3 py-2.5 shadow-xl shadow-navy-900/10 ring-1 ring-line sm:flex lg:-right-28"
        style={{ animationDelay: "1.5s" }}
      >
        <Heart className="h-5 w-5 fill-action-500 text-action-500" />
        <div className="text-xs leading-tight">
          <p className="font-semibold text-ink">48 voisins</p>
          <p className="text-muted">soutiennent cette idée</p>
        </div>
      </div>
      <div
        className="animate-float absolute -left-8 bottom-8 hidden items-center gap-2 rounded bg-navy-900 px-3 py-2.5 text-white shadow-xl sm:flex lg:-left-24"
        style={{ animationDelay: "3s" }}
      >
        <ShieldCheck className="h-5 w-5 text-brand-300" />
        <p className="text-xs font-semibold">Votre nom n&apos;est jamais affiché</p>
      </div>
    </div>
  );
}
