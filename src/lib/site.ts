export const SITE_URL = "https://piecitizenvoice.com";

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.piecitizenvoice.com";

// APK Android en attendant le Play Store : publié en « release » GitHub sous le nom exact
// `voix-du-citoyen.apk`. Le lien `latest` pointe toujours vers la dernière release publiée.
export const APK_URL =
  process.env.NEXT_PUBLIC_APK_URL ??
  "https://github.com/AbdelFadel06/voix-du-citoyen-vitrine/releases/latest/download/voix-du-citoyen.apk";

// Lien court à partager (WhatsApp, affiches) : redirige vers APK_URL (voir next.config.ts).
export const APK_LIEN_COURT = "/apk";

// Taille affichée dans la section Téléchargement (à mettre à jour à chaque version).
export const APP_SIZE = "55,9 Mo";

// Espace web des mairies et organisations partenaires.
export const ESPACE_MAIRIE_URL =
  process.env.NEXT_PUBLIC_ESPACE_MAIRIE_URL ?? "https://api.piecitizenvoice.com/";

export const CONTACT_EMAIL = "info@piebarometre.com";

export const CONTACT_TELEPHONE = "+229 01 69 49 40 72";
export const CONTACT_TELEPHONE_LIEN = "tel:+2290169494072";

export const ADRESSE = "Fidjrossè-Centre, Cotonou, Bénin";

export const NAV_LINKS = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#comment-ca-marche", label: "Comment ça marche" },
  { href: "/#fonctionnalites", label: "Fonctionnalités" },
  { href: "/#mairies", label: "Pour les mairies" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#faq", label: "FAQ" },
] as const;
