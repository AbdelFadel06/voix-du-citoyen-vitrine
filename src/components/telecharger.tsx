import QRCode from "qrcode";
import { cacheLife } from "next/cache";
import { Check } from "lucide-react";
import { APP_SIZE, PLAY_STORE_URL } from "@/lib/site";
import { LogoMark } from "./logo";
import { Container, PlayStoreBadge } from "./ui";

async function qrSvg() {
  "use cache";
  cacheLife("max");
  return QRCode.toString(PLAY_STORE_URL, {
    type: "svg",
    margin: 0,
    errorCorrectionLevel: "H",
    color: { dark: "#0b1b3a", light: "#ffffff" },
  });
}

export async function Telecharger() {
  const svg = await qrSvg();

  return (
    <section id="telecharger" className="bg-brand-500 py-16 md:py-24 lg:py-28">
      <Container>
        <div>
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_auto]">
            <div>
              <h2 className="text-[1.75rem] font-extrabold text-white md:text-[2.5rem]">
                Téléchargez Voix du Citoyen.
                <br />
                <span className="text-navy-900">C&apos;est gratuit.</span>
              </h2>
              <ul className="mt-6 space-y-2 text-lg text-white">
                {[
                  "Android, dès maintenant",
                  `Application légère : ${APP_SIZE}`,
                  "Connexion avec un code reçu par SMS",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-white/20">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PlayStoreBadge />
              </div>
            </div>

            <div className="hidden flex-col items-center gap-3 rounded bg-white p-5 md:flex md:w-60">
              <div className="relative w-full">
                <div className="w-full [&_svg]:h-auto [&_svg]:w-full" dangerouslySetInnerHTML={{ __html: svg }} />
                <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded bg-white">
                  <LogoMark className="h-9 w-9" />
                </span>
              </div>
              <p className="text-center text-sm font-medium text-muted">Scannez avec votre téléphone</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
