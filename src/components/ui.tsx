import type { ComponentProps, ReactNode } from "react";

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

const PLAY_ICONE = (
  <svg viewBox="0 0 24 26" className="h-6 w-6 shrink-0 opacity-80" aria-hidden="true">
    <path d="M1 1.2 13.6 13 1 24.8c-.4-.3-.6-.8-.6-1.4V2.6c0-.6.2-1.1.6-1.4Z" fill="#00d7fe" />
    <path d="m17.8 9-4.2 4L1 1.2c.3-.2.8-.3 1.3-.1L17.8 9Z" fill="#00f076" />
    <path d="M17.8 17 2.3 24.9c-.5.2-1 .1-1.3-.1L13.6 13l4.2 4Z" fill="#ff3a44" />
    <path d="m22.6 14.6-4.8 2.4-4.2-4 4.2-4 4.8 2.4c1.2.6 1.2 2.6 0 3.2Z" fill="#ffd400" />
  </svg>
);

const APPLE_ICONE = (
  <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-white/80" aria-hidden="true">
    <path d="M16.4 12.6c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.3.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9 0 0-2.8-1.1-2.8-4.1ZM13.9 5.1c.7-.8 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4Z" />
  </svg>
);

/** Boutique pas encore ouverte : badge non cliquable « Bientôt ». */
export function StoreBientot({ store, className = "" }: { store: "play" | "apple"; className?: string }) {
  const nom = store === "play" ? "Google Play" : "App Store";
  return (
    <span
      className={`inline-flex min-h-12 cursor-default items-center gap-2.5 rounded bg-navy-900/40 px-3 py-2 text-white ring-1 ring-white/25 ${className}`}
      aria-label={`${nom} : bientôt disponible`}
    >
      {store === "play" ? PLAY_ICONE : APPLE_ICONE}
      <span className="flex flex-col leading-tight">
        <span className="whitespace-nowrap text-[11px] text-white/85">Bientôt sur</span>
        <span className="whitespace-nowrap font-display text-sm font-bold">{nom}</span>
      </span>
    </span>
  );
}
