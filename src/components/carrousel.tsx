"use client";

import { Children, useCallback, useEffect, useRef, useState, type ComponentProps } from "react";

const INTERVALLE_MS = 3000;
const PAUSE_APRES_GESTE_MS = 8000;

/**
 * Sur mobile : une seule carte à l'écran, centrée, qui défile horizontalement (au doigt, et
 * toute seule toutes les 3 s), avec des points pour se repérer. À partir de `md`, `className` reprend la
 * main (grille habituelle) et le défilement automatique s'arrête de lui-même, puisqu'il n'y a
 * plus rien à faire défiler.
 *
 * Pas de blocage aux extrémités : un geste vers la gauche sur la dernière carte ramène à la
 * première, et un geste vers la droite sur la première mène à la dernière.
 *
 * Le défilement automatique se met en pause quand la personne touche ou survole le carrousel,
 * quand il n'est pas à l'écran, et ne démarre jamais si « réduire les animations » est activé.
 */
export function Carrousel({
  children,
  className = "",
  etiquette,
  ton = "sombre",
  ...props
}: ComponentProps<"div"> & { etiquette: string; ton?: "sombre" | "clair" }) {
  const piste = useRef<HTMLDivElement>(null);
  const [actif, setActifEtat] = useState(0);
  const actifRef = useRef(0);
  const setActif = useCallback((i: number) => {
    actifRef.current = i;
    setActifEtat(i);
  }, []);
  const nombre = Children.count(children);

  const elements = () => Array.from(piste.current?.children ?? []) as HTMLElement[];

  const allerA = useCallback((index: number) => {
    const conteneur = piste.current;
    const cible = conteneur?.children[index] as HTMLElement | undefined;
    if (!conteneur || !cible) return;
    const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    conteneur.scrollTo({
      left: cible.offsetLeft - (conteneur.clientWidth - cible.offsetWidth) / 2,
      behavior: reduit ? "auto" : "smooth",
    });
  }, []);

  // Point actif : la carte dont le centre est le plus proche du centre du carrousel.
  useEffect(() => {
    const conteneur = piste.current;
    if (!conteneur) return;
    const surDefilement = () => {
      const centre = conteneur.scrollLeft + conteneur.clientWidth / 2;
      const ecart = (el: HTMLElement) => Math.abs(el.offsetLeft + el.offsetWidth / 2 - centre);
      const cartes = elements();
      let meilleur = 0;
      cartes.forEach((el, i) => {
        if (ecart(el) < ecart(cartes[meilleur])) meilleur = i;
      });
      setActif(meilleur);
    };
    conteneur.addEventListener("scroll", surDefilement, { passive: true });
    return () => conteneur.removeEventListener("scroll", surDefilement);
  }, [nombre, setActif]);

  // Boucle : au bout de la piste, un geste de plus repart de l'autre côté.
  useEffect(() => {
    const conteneur = piste.current;
    if (!conteneur) return;
    const SEUIL = 30;
    let departX = 0;
    let departY = 0;
    let debutPiste = false;
    let finPiste = false;
    let derniereBoucle = 0;

    const auBord = () => {
      const fin = conteneur.scrollWidth - conteneur.clientWidth;
      return { debut: conteneur.scrollLeft <= 2, fin: conteneur.scrollLeft >= fin - 2 };
    };
    const boucler = (versLaFin: boolean) => {
      if (Date.now() - derniereBoucle < 600 || conteneur.scrollWidth <= conteneur.clientWidth + 1) return;
      derniereBoucle = Date.now();
      allerA(versLaFin ? nombre - 1 : 0);
    };

    const toucher = (e: TouchEvent) => {
      departX = e.touches[0].clientX;
      departY = e.touches[0].clientY;
      ({ debut: debutPiste, fin: finPiste } = auBord());
    };
    const lacher = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - departX;
      const dy = e.changedTouches[0].clientY - departY;
      if (Math.abs(dx) < SEUIL || Math.abs(dx) < Math.abs(dy)) return; // geste vertical : on fait défiler la page
      if (dx < 0 && finPiste) boucler(false);
      else if (dx > 0 && debutPiste) boucler(true);
    };
    // Pavé tactile / molette horizontale.
    const molette = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY) || Math.abs(e.deltaX) < 10) return;
      const bord = auBord();
      if (e.deltaX > 0 && bord.fin) boucler(false);
      else if (e.deltaX < 0 && bord.debut) boucler(true);
    };

    conteneur.addEventListener("touchstart", toucher, { passive: true });
    conteneur.addEventListener("touchend", lacher, { passive: true });
    conteneur.addEventListener("wheel", molette, { passive: true });
    return () => {
      conteneur.removeEventListener("touchstart", toucher);
      conteneur.removeEventListener("touchend", lacher);
      conteneur.removeEventListener("wheel", molette);
    };
  }, [allerA, nombre]);

  // Défilement automatique.
  useEffect(() => {
    const conteneur = piste.current;
    if (!conteneur || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pauseJusqua = 0;
    let survole = false;
    let aLEcran = false;
    const suspendre = () => (pauseJusqua = Date.now() + PAUSE_APRES_GESTE_MS);
    const entrer = () => (survole = true);
    const sortir = () => (survole = false);

    const observateur = new IntersectionObserver(([e]) => (aLEcran = e.isIntersecting), { threshold: 0.5 });
    observateur.observe(conteneur);
    const evenements = ["pointerdown", "touchstart", "wheel", "focusin"] as const;
    evenements.forEach((nom) => conteneur.addEventListener(nom, suspendre, { passive: true }));
    conteneur.addEventListener("mouseenter", entrer);
    conteneur.addEventListener("mouseleave", sortir);

    const minuterie = window.setInterval(() => {
      const defilable = conteneur.scrollWidth > conteneur.clientWidth + 1;
      if (!defilable || !aLEcran || survole || document.hidden || Date.now() < pauseJusqua) return;
      allerA((actifRef.current + 1) % nombre);
    }, INTERVALLE_MS);

    return () => {
      window.clearInterval(minuterie);
      observateur.disconnect();
      evenements.forEach((nom) => conteneur.removeEventListener(nom, suspendre));
      conteneur.removeEventListener("mouseenter", entrer);
      conteneur.removeEventListener("mouseleave", sortir);
    };
  }, [allerA, nombre]);

  const points =
    ton === "clair"
      ? { actif: "bg-white", inactif: "bg-white/35" }
      : { actif: "bg-brand-500", inactif: "bg-brand-200" };

  return (
    <div>
      <div
        ref={piste}
        role="region"
        aria-roledescription="carrousel"
        aria-label={etiquette}
        className={`relative -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 py-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 [&::-webkit-scrollbar]:hidden [&>*]:w-full [&>*]:shrink-0 [&>*]:snap-center ${className}`}
        {...props}
      >
        {children}
      </div>
      <div className="mt-4 flex justify-center gap-2 md:hidden">
        {Array.from({ length: nombre }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => allerA(i)}
            aria-label={`Afficher l'élément ${i + 1} sur ${nombre}`}
            aria-current={i === actif}
            className="flex h-6 w-6 items-center justify-center"
          >
            <span
              className={`h-2 rounded transition-all duration-300 ${i === actif ? `w-6 ${points.actif}` : `w-2 ${points.inactif}`}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
