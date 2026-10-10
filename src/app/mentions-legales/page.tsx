import type { Metadata } from "next";
import Link from "next/link";
import { PageLegale } from "@/components/page-legale";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <PageLegale titre="Mentions légales" majLe="octobre 2026">
      <h2>Éditeur</h2>
      <p>
        Le site <strong>{SITE_URL.replace("https://", "")}</strong> et l&apos;application Voix du Citoyen
        sont édités par <strong>LE BAROMETRE</strong>.
      </p>
      <ul>
        <li>Siège : [adresse à compléter], Bénin</li>
        <li>RCCM / IFU : [à compléter]</li>
        <li>Directeur de la publication : [à compléter]</li>
        <li>
          Contact : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </li>
      </ul>

      <h2>Hébergement</h2>
      <p>Le site et ses données sont hébergés sur les serveurs de LE BAROMETRE. [Hébergeur à compléter.]</p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes, logos et éléments graphiques de ce site appartiennent à LE BAROMETRE. Toute
        reproduction sans autorisation est interdite.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Pour savoir quelles données sont collectées et comment elles sont protégées, consultez notre{" "}
        <Link href="/confidentialite">politique de confidentialité</Link>.
      </p>
    </PageLegale>
  );
}
