import Image from "next/image";
import Link from "next/link";
import {
  ADRESSE,
  CONTACT_EMAIL,
  CONTACT_TELEPHONE,
  CONTACT_TELEPHONE_LIEN,
  ESPACE_MAIRIE_URL,
  NAV_LINKS,
} from "@/lib/site";
import { Logo } from "./logo";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-brand-100">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-brand-100/80">
            L&apos;application qui relie les habitants à leur mairie. Signalez, proposez, suivez.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded bg-white/5 p-3 ring-1 ring-white/10">
            <span className="text-xs uppercase tracking-wider text-brand-200">Un service de</span>
            <span className="overflow-hidden rounded bg-[#f4f4f4]">
              <Image src="/logo-le-barometre.jpg" alt="LE BAROMETRE" width={120} height={47} />
            </span>
          </div>
        </div>

        <FooterCol titre="Découvrir">
          {NAV_LINKS.slice(1).map((l) => (
            <FooterLink key={l.href} href={l.href}>
              {l.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol titre="Mairies et partenaires">
          <FooterLink href={ESPACE_MAIRIE_URL}>Espace mairie / organisation</FooterLink>
          <FooterLink href={`mailto:${CONTACT_EMAIL}?subject=Demande%20de%20d%C3%A9monstration`}>
            Demander une démonstration
          </FooterLink>
          <FooterLink href={`mailto:${CONTACT_EMAIL}?subject=Partenariat`}>Devenir partenaire</FooterLink>
        </FooterCol>

        <FooterCol titre="Contact">
          <li className="text-brand-100/85">{ADRESSE}</li>
          <FooterLink href={CONTACT_TELEPHONE_LIEN}>{CONTACT_TELEPHONE}</FooterLink>
          <FooterLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</FooterLink>
          <FooterLink href="/mentions-legales">Mentions légales</FooterLink>
          <FooterLink href="/confidentialite">Politique de confidentialité</FooterLink>
        </FooterCol>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-sm text-brand-200/80 md:flex-row md:justify-between">
          <p>© 2026 LE BAROMETRE · Voix du Citoyen</p>
          <p>Fait au Bénin, pour les habitants de nos communes.</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white">{titre}</h2>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const classe = "text-brand-100/85 transition-colors hover:text-white";
  return (
    <li>
      {href.startsWith("/") ? (
        <Link href={href} className={classe}>
          {children}
        </Link>
      ) : (
        <a href={href} className={classe}>
          {children}
        </a>
      )}
    </li>
  );
}
