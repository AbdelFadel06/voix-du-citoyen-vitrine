import { cacheLife } from "next/cache";
import { API_URL } from "./site";

export type StatutRealisation = "PLANIFIEE" | "EN_COURS" | "TERMINEE" | "SUSPENDUE";

export type Realisation = {
  id: number;
  reference: string;
  titre: string;
  commune: { id: number; nom: string };
  secteur: { id: number; nom: string; code: string; icone: string; couleur: string } | null;
  statut: StatutRealisation;
  taux_avancement: number;
  quartiers: Array<{ id: number; nom: string }>;
  date_debut_prevue: string | null;
  date_fin_prevue: string | null;
  couverture: {
    id: number;
    type: string;
    miniature: string | null;
    duree_secondes: number | null;
  } | null;
  nb_medias: number;
};

export type Commune = {
  id: number;
  nom: string;
  departement?: string;
};

type Reponse<T> = { succes: true; donnees: T } | { succes: false };

/** `null` = l'API n'a pas répondu (on affiche alors un repli). */
async function lire<T>(chemin: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}${chemin}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as Reponse<T>;
    return json.succes ? json.donnees : null;
  } catch {
    return null;
  }
}

export async function getDernieresRealisations(): Promise<Realisation[] | null> {
  "use cache";
  cacheLife("hours");
  return lire<Realisation[]>("/api/v1/realisations/?taille=3&tri=-cree_le");
}

export async function getCommunes(): Promise<Commune[] | null> {
  "use cache";
  cacheLife("hours");
  return lire<Commune[]>("/api/v1/communes/");
}
