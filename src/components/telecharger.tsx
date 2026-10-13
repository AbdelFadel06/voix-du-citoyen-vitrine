import QRCode from "qrcode";
import { cacheLife } from "next/cache";
import { Check, Download } from "lucide-react";
import { APK_URL, APP_SIZE } from "@/lib/site";
import { LogoMark } from "./logo";
import { Container, StoreBientot } from "./ui";

async function qrSvg() {
  "use cache";
  cacheLife("max");
  // Lien direct vers l'APK : fonctionne même si le domaine du site est indisponible.
  return QRCode.toString(APK_URL, {
    type: "svg",
    margin: 0,
    errorCorrectionLevel: "H",
    color: { dark: "#0b1b3a", light: "#ffffff" },
  });
}

const ETAPES_INSTALLATION = [
  "Appuyez sur « Télécharger l'application ».",
  "Si votre téléphone vous prévient, choisissez « Télécharger quand même », puis autorisez l'installation depuis votre navigateur.",
  "Ouvrez le fichier téléchargé et appuyez sur « Installer ».",
];

export async function Telecharger() {
  const svg = await qrSvg();

  return (
    <section id="telecharger" className="bg-brand-500 py-16 md:py-24 lg:py-28">
      <Container>
        <div data-reveal className="grid items-center gap-10 lg:grid-cols-[1.3fr_auto]">
          <div>
            <h2 className="text-[1.75rem] font-extrabold text-white md:text-[2.5rem]">
              Téléchargez Voix du Citoyen.
              <br />
              <span className="text-navy-900">C&apos;est gratuit.</span>
            </h2>
            <ul className="mt-6 space-y-2 text-lg text-white">
              {[
                "Disponible sur Android dès maintenant",
                `Taille de l'application : ${APP_SIZE}`,
                "Connexion avec un code reçu par SMS",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white/20">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <a
              href={APK_URL}
              className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded bg-action-500 px-6 font-semibold text-white shadow-lg shadow-navy-900/20 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-action-600 sm:w-auto"
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              <span className="flex flex-col text-left leading-tight">
                <span className="text-base">Télécharger l&apos;application</span>
                <span className="text-xs font-medium text-white/90">Android · fichier APK · {APP_SIZE}</span>
              </span>
            </a>

            <div className="mt-4 flex flex-wrap gap-3">
              <StoreBientot store="play" />
              <StoreBientot store="apple" />
            </div>

            <details className="group mt-8 max-w-xl rounded bg-white/10 px-5 py-1 text-white ring-1 ring-white/25">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 font-semibold [&::-webkit-details-marker]:hidden">
                Comment installer l&apos;application ?
                <span aria-hidden="true" className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <ol className="space-y-3 pb-4">
                {ETAPES_INSTALLATION.map((e, i) => (
                  <li key={e} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white font-display text-sm font-bold text-brand-600">
                      {i + 1}
                    </span>
                    <span>{e}</span>
                  </li>
                ))}
              </ol>
              <p className="pb-4 text-sm text-white/90">
                Cet avertissement est normal pour une application installée hors du Play Store.
              </p>
            </details>
          </div>

          <div className="hidden flex-col items-center gap-3 rounded bg-white p-5 md:flex md:w-60">
            <div className="relative w-full">
              <div className="w-full [&_svg]:h-auto [&_svg]:w-full" dangerouslySetInnerHTML={{ __html: svg }} />
              <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded bg-white">
                <LogoMark className="h-9 w-9" />
              </span>
            </div>
            <p className="text-center text-sm font-medium text-muted">
              Scannez avec votre téléphone Android pour télécharger
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
