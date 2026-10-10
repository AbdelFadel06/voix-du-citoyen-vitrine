/** Marque « Voix du Citoyen » : la bulle et les barres du logo LE BAROMETRE. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M20 3a17 17 0 0 0-14.7 25.5L3 37l8.7-2.2A17 17 0 1 0 20 3Z"
        fill="#fff"
        stroke="#1e73d8"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <rect x="12" y="20" width="4" height="9" rx="1" fill="#12264d" />
      <rect x="18" y="16" width="4" height="13" rx="1" fill="#12264d" />
      <rect x="24" y="12" width="4" height="17" rx="1" fill="#e11d2a" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2 sm:gap-2.5">
      <LogoMark className="h-8 w-8 sm:h-9 sm:w-9" />
      <span className="flex flex-col whitespace-nowrap leading-none">
        <span
          className={`font-display text-[0.95rem] font-extrabold sm:text-[1.05rem] tracking-tight ${light ? "text-white" : "text-ink"}`}
        >
          Voix du Citoyen
        </span>
        <span
          className={`mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] ${light ? "text-brand-200" : "text-muted"}`}
        >
          par <span className={light ? "text-white" : "text-action-500"}>Le Barometre</span>
        </span>
      </span>
    </span>
  );
}
