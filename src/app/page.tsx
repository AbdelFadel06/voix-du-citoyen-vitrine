import { Suspense } from "react";
import { Faq } from "@/components/faq";
import {
  DernieresRealisations,
  RealisationsChargement,
  RealisationsSection,
} from "@/components/realisations";
import { Atouts, CommentCaMarche, Hero, PourLesMairies, PourLesOng, Volets } from "@/components/sections";
import { Telecharger } from "@/components/telecharger";

export default function Accueil() {
  return (
    <>
      <Hero />
      <CommentCaMarche />
      <Volets />
      <Atouts />
      <PourLesMairies />
      <PourLesOng />
      <RealisationsSection>
        <Suspense fallback={<RealisationsChargement />}>
          <DernieresRealisations />
        </Suspense>
      </RealisationsSection>
      <Telecharger />
      <Faq />
    </>
  );
}
