"use client";

import { useEffect } from "react";

/**
 * Fait apparaître en douceur, au défilement, les éléments marqués `data-reveal` et les
 * enfants des conteneurs `data-reveal-groupe` (en cascade). Le masquage initial n'a lieu
 * que si JavaScript tourne (classe `js-anim` posée dans le <head>) : sans JS, tout reste visible.
 */
export function Apparition() {
  useEffect(() => {
    const racine = document.documentElement;
    racine.classList.add("anim-pret");

    const groupes = document.querySelectorAll<HTMLElement>("[data-reveal-groupe]");
    groupes.forEach((groupe) =>
      Array.from(groupe.children).forEach((enfant, i) =>
        (enfant as HTMLElement).style.setProperty("--reveal-delay", `${Math.min(i, 5) * 90}ms`),
      ),
    );
    const cibles = document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-groupe] > *");

    const mouvementReduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (mouvementReduit || !("IntersectionObserver" in window)) {
      cibles.forEach((el) => el.classList.add("est-visible"));
      return;
    }

    const observateur = new IntersectionObserver(
      (entrees) =>
        entrees.forEach((entree) => {
          if (entree.isIntersecting) {
            entree.target.classList.add("est-visible");
            observateur.unobserve(entree.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    cibles.forEach((el) => observateur.observe(el));
    return () => observateur.disconnect();
  }, []);

  return null;
}
