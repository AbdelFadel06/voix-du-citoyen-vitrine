import type { ComponentProps, ReactNode } from "react";
import { PLAY_STORE_URL } from "@/lib/site";

export function Container({ className = "", ...props }: ComponentProps<"div">) {
  return <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 ${className}`} {...props} />;
}

export function Section({ className = "", ...props }: ComponentProps<"section">) {
  return <section className={`py-16 md:py-24 lg:py-28 ${className}`} {...props} />;
}

export function Eyebrow({ children, tone = "brand" }: { children: ReactNode; tone?: "brand" | "light" }) {
  const styles =
    tone === "light"
      ? "bg-white/15 text-white ring-white/30"
      : "bg-brand-50 text-brand-700 ring-brand-100";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded px-3 py-1 text-sm font-semibold ring-1 ${styles}`}
    >
      {children}
    </span>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  intro,
  center = false,
  tone = "brand",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
  tone?: "brand" | "light";
}) {
  const light = tone === "light";
  return (
    <div data-reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 text-[1.75rem] font-extrabold md:text-[2.5rem] ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg ${light ? "text-white" : "text-muted"}`}>{intro}</p>
      )}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded font-semibold transition-[color,background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 min-h-12 px-6 text-base";

export function ButtonAction({ className = "", ...props }: ComponentProps<"a">) {
  return (
    <a
      className={`${buttonBase} bg-action-500 text-white shadow-lg shadow-action-500/25 hover:bg-action-600 ${className}`}
      {...props}
    />
  );
}

export function ButtonGhost({ className = "", ...props }: ComponentProps<"a">) {
  return (
    <a
      className={`${buttonBase} bg-white text-ink ring-1 ring-line hover:bg-brand-50 hover:ring-brand-200 ${className}`}
      {...props}
    />
  );
}

export function AppStoreBientot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex min-h-14 cursor-default items-center gap-2.5 rounded bg-black px-3 py-2.5 text-white sm:gap-3 sm:px-5 ${className}`}
      aria-label="Bientôt sur iPhone, dans l'App Store"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 fill-white max-[359px]:hidden" aria-hidden="true">
        <path d="M16.4 12.6c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.3.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9 0 0-2.8-1.1-2.8-4.1ZM13.9 5.1c.7-.8 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4Z" />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="whitespace-nowrap text-[11px] text-white/80 sm:text-xs">Bientôt sur iPhone</span>
        <span className="whitespace-nowrap font-display text-base font-bold sm:text-lg">App Store</span>
      </span>
    </span>
  );
}

export function PlayStoreBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener"
      className={`inline-flex min-h-14 items-center gap-2.5 rounded bg-black px-3 py-2.5 text-white transition-transform hover:-translate-y-0.5 sm:gap-3 sm:px-5 ${className}`}
      aria-label="Déjà disponible sur Android : télécharger sur Google Play"
    >
      <svg viewBox="0 0 24 26" className="h-7 w-7 shrink-0 max-[359px]:hidden" aria-hidden="true">
        <path d="M1 1.2 13.6 13 1 24.8c-.4-.3-.6-.8-.6-1.4V2.6c0-.6.2-1.1.6-1.4Z" fill="#00d7fe" />
        <path d="m17.8 9-4.2 4L1 1.2c.3-.2.8-.3 1.3-.1L17.8 9Z" fill="#00f076" />
        <path d="M17.8 17 2.3 24.9c-.5.2-1 .1-1.3-.1L13.6 13l4.2 4Z" fill="#ff3a44" />
        <path d="m22.6 14.6-4.8 2.4-4.2-4 4.2-4 4.8 2.4c1.2.6 1.2 2.6 0 3.2Z" fill="#ffd400" />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="whitespace-nowrap text-[11px] text-white/80 sm:text-xs">Déjà sur Android</span>
        <span className="whitespace-nowrap font-display text-base font-bold sm:text-lg">Google Play</span>
      </span>
    </a>
  );
}
