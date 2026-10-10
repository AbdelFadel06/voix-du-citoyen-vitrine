export const SITE_URL = "https://piecitizenvoice.com";

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.piecitizenvoice.com";

// À compléter dès que l'application est publiée sur le Play Store.
export const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
  "https://play.google.com/store/apps/details?id=com.lebarometre.voixducitoyen";

// Taille affichée dans la section Téléchargement (à mettre à jour à chaque version).
export const APP_SIZE = "≈ 25 Mo";

// Espace web des mairies et organisations partenaires.
export const ESPACE_MAIRIE_URL =
  process.env.NEXT_PUBLIC_ESPACE_MAIRIE_URL ?? "https://api.piecitizenvoice.com/";

export const CONTACT_EMAIL = "contact@piecitizenvoice.com";

export const NAV_LINKS = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#comment-ca-marche", label: "Comment ça marche" },
  { href: "/#fonctionnalites", label: "Fonctionnalités" },
  { href: "/#mairies", label: "Pour les mairies" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#faq", label: "FAQ" },
] as const;
