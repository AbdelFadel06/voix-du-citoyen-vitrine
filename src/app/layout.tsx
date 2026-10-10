import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const description =
  "Signalez un problème, proposez une idée et suivez ce que fait votre mairie. Gratuit, anonyme, et vous pouvez parler au lieu d'écrire.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Voix du Citoyen — Votre quartier, votre voix",
    template: "%s · Voix du Citoyen",
  },
  description,
  applicationName: "Voix du Citoyen",
  openGraph: {
    type: "website",
    locale: "fr_BJ",
    url: SITE_URL,
    siteName: "Voix du Citoyen",
    title: "Voix du Citoyen — Votre quartier, votre voix",
    description,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#1e73d8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#contenu"
          className="sr-only z-[60] rounded bg-white px-4 py-2 font-semibold text-ink shadow focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
