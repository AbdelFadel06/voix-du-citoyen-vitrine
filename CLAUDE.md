# Voix du Citoyen — site vitrine (Next.js)

Site vitrine du module **Voix du Citoyen** de la plateforme **LE BAROMETRE**.
Domaine : **https://piecitizenvoice.com** (+ www). L'API est sur **https://api.piecitizenvoice.com**
(backend Django dans `../backend`, ne pas le modifier depuis ce projet).

## Le produit, en bref
Application mobile gratuite qui relie les habitants d'une commune béninoise (aujourd'hui
**Parakou**) à leur mairie :
1. **Signaler** un problème (voirie, ordures, éclairage, inondation…) avec photo, vidéo ou
   **message vocal** (fon, bariba, dendi, yoruba, français…), position GPS ou repère
   (« derrière le marché… »).
2. **Proposer** une idée à la mairie ; les autres habitants peuvent la **soutenir**.
3. **Voir les réalisations** de la mairie (avant / pendant / après, avancement en %).
Arguments forts : on peut parler au lieu d'écrire ; **le nom du citoyen n'est jamais
affiché, même à la mairie** ; peu de données consommées ; pas besoin d'adresse.
Côté web : la mairie traite les dossiers et suit des tableaux de bord ; les ONG partenaires
suivent les signalements de leurs secteurs (lecture seule).

## Publics (dans l'ordre)
1. Citoyens → comprendre en 5 s et **télécharger l'app** (Android d'abord, Google Play + QR code).
2. Mairies → bénéfices + « Demander une démonstration » + lien « Espace mairie / organisation ».
3. ONG / partenaires → transparence, impact.

## Navbar (5–6 entrées max)
Accueil · Comment ça marche · Fonctionnalités · Pour les mairies · Réalisations · FAQ
+ bouton mis en avant **« Télécharger l'application »** + lien discret « Espace mairie / organisation ».
Menu burger sur mobile, bouton « Télécharger » toujours visible.

## Sections de la page d'accueil
1. Hero : « Votre quartier, votre voix. Signalez, proposez, suivez ce que fait votre mairie. »
   + 2 boutons (Télécharger / Comment ça marche) + capture de l'app dans un cadre de téléphone.
2. Comment ça marche (3 étapes) : photo → position ou description vocale → suivi de la réponse.
3. Les 3 volets (cartes) : Signaler / Proposer / Réalisations.
4. Ce qui change tout : vocal, anonymat, peu de données, pas d'adresse.
5. Pour les mairies (tableaux de bord par quartier/secteur, délais, publication des réalisations).
6. Pour les ONG et partenaires.
7. **Dernières réalisations** (3 cartes, données réelles de l'API, voir plus bas).
8. Téléchargement (badge Play Store, QR code, taille de l'app ; App Store seulement s'il existe).
9. FAQ : gratuit ? la mairie voit-elle mon nom ? (non) consommation de données ? ma commune
   est-elle concernée ? que se passe-t-il après mon signalement ?
10. Footer : LE BAROMETRE, partenaires, contact, mentions légales, politique de confidentialité
    (données : téléphone, photos, position ; anonymat ; autorité : APDP Bénin).
    La politique (`/confidentialite`) suit le Livre V du Code du numérique (loi 2017-20 modifiée
    par la loi 2020-35) et reflète les modèles du backend : la mettre à jour s'ils changent.

## Ton et mots
Phrases courtes, « vous », verbes d'action (Signaler, Proposer, Suivre, Soutenir).
**Zéro jargon** : pas « OTP », « dashboard », « géolocalisation » → « code reçu par SMS »,
« votre position ». Mêmes mots que l'app : signalement, suggestion, réalisation, soutenir.
Positionnement **toutes communes du Bénin** : ne pas centrer le discours sur Parakou (seule
commune ouverte aujourd'hui) ; la liste réelle vient de `GET /communes/`. Exemples génériques
(« derrière le grand marché », « mon quartier »).

## Design
- Polices (via `next/font`) : titres **Plus Jakarta Sans** (ou Manrope), texte **Inter**.
- Tailles : H1 32–36 px mobile / 48–56 px desktop ; H2 26–28 / 36–40 ; texte 16–18 px ;
  interligne 1,6 (texte) / 1,2 (titres) ; 65 caractères max par ligne.
- Grille de 8 px ; sections 64 px (mobile) / 96–120 px (desktop) ; conteneur 1200 px max,
  marges 16 px mobile / 24–32 px desktop.
- Couleurs : reprises du logo **LE BAROMETRE** (tokens dans `src/app/globals.css`) :
  bleu `brand-500` #1E73D8 (principale), marine `navy-900` #0B1B3A (titres, sections sombres),
  rouge `action-500` #E11D2A **réservé aux boutons d'action**, beaucoup de blanc,
  contraste WCAG AA (lecture en plein soleil).
- Images : vraies photos de Parakou (avec accord des personnes), captures de l'app, icônes
  simples ; WebP/AVIF via `next/image` ; viser < 1 Mo au premier chargement (data mobile chère).
- Mobile d'abord. Soigner l'aperçu de partage (Open Graph) : le site sera surtout partagé sur WhatsApp.

## API utilisable sans compte
URL lue depuis `NEXT_PUBLIC_API_URL` (= `https://api.piecitizenvoice.com`). CORS déjà
autorisé pour `https://piecitizenvoice.com` et `https://www.piecitizenvoice.com`.
Toutes les réponses : `{"succes": true, "message": ..., "donnees": ...}` ; listes paginées avec
un bloc `pagination` (`total`, `page`, `pages`, `taille`, `suivant`, `precedent`) ;
erreurs `{"succes": false, "erreur": {"code", "message", "details"}}`.

| Endpoint | Usage |
|---|---|
| `GET /api/v1/realisations/?taille=3&tri=-cree_le` | dernières réalisations publiées : `id`, `reference`, `titre`, `commune{id,nom}`, `secteur{…}`, `statut` (`PLANIFIEE`, `EN_COURS`, `TERMINEE`, `SUSPENDUE`), `taux_avancement`, `quartiers[]`, `date_debut_prevue`, `date_fin_prevue`, `couverture{id,type,miniature,duree_secondes}` ou `null`, `nb_medias` |
| `GET /api/v1/realisations/{id}/` | détail (description, photos avant/pendant/après) |
| `GET /api/v1/communes/` | communes où le projet est déployé (« Ma commune est-elle concernée ? ») |
| `GET /api/v1/sante/` | état de l'API |
Doc complète : https://api.piecitizenvoice.com/api/docs/
Récupérer côté serveur avec `fetch(..., { next: { revalidate: 3600 } })` ; prévoir un état
vide (aucune réalisation publiée pour l'instant) et un repli si l'API ne répond pas.

## Contraintes du serveur de déploiement (LE BAROMETRE)
- Déploiement par le serveur : `npm ci` → `npm run build` (`next build`) → `next start` (PM2).
- `"build": "next build"` dans package.json ; **pas de serveur personnalisé, pas de port codé en dur**.
- `next` dans `dependencies` (pas devDependencies) ; **`package-lock.json` commité** (npm, pas pnpm/yarn).
- Pas d'export statique (`output: 'export'`) sans prévenir l'administration.
- Variables `NEXT_PUBLIC_…` intégrées au build : après modification, redéployer.
- Seule la branche `main` est déployée ; aucun `.env` commité.

## Stack conseillée
Next.js (App Router, TypeScript), Tailwind CSS, `next/font`, `next/image`, `metadata` +
image Open Graph, `sitemap.ts` / `robots.ts`. Vérifier avec Lighthouse en mobile 3G.
