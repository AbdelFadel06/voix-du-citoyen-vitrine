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
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
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
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded font-semibold transition-colors duration-200 min-h-12 px-6 text-base";

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

export function PlayStoreBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener"
      className={`inline-flex min-h-14 items-center gap-3 rounded bg-black px-5 py-2.5 text-white transition-transform hover:-translate-y-0.5 ${className}`}
      aria-label="Télécharger sur Google Play"
    >
      <svg viewBox="0 0 24 26" className="h-7 w-7" aria-hidden="true">
        <path d="M1 1.2 13.6 13 1 24.8c-.4-.3-.6-.8-.6-1.4V2.6c0-.6.2-1.1.6-1.4Z" fill="#00d7fe" />
        <path d="m17.8 9-4.2 4L1 1.2c.3-.2.8-.3 1.3-.1L17.8 9Z" fill="#00f076" />
        <path d="M17.8 17 2.3 24.9c-.5.2-1 .1-1.3-.1L13.6 13l4.2 4Z" fill="#ff3a44" />
        <path d="m22.6 14.6-4.8 2.4-4.2-4 4.2-4 4.8 2.4c1.2.6 1.2 2.6 0 3.2Z" fill="#ffd400" />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] uppercase tracking-wide text-white/80">Disponible sur</span>
        <span className="font-display text-lg font-bold">Google Play</span>
      </span>
    </a>
  );
}
