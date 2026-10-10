import { ImageResponse } from "next/og";

export const alt = "Voix du Citoyen — Votre quartier, votre voix.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0b1b3a",
          borderBottom: "16px solid #1e73d8",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="76" height="76" viewBox="0 0 40 40">
            <path
              d="M20 3a17 17 0 0 0-14.7 25.5L3 37l8.7-2.2A17 17 0 1 0 20 3Z"
              fill="#fff"
              stroke="#5aa0f0"
              strokeWidth="3.2"
              strokeLinejoin="round"
            />
            <rect x="12" y="20" width="4" height="9" rx="1" fill="#12264d" />
            <rect x="18" y="16" width="4" height="13" rx="1" fill="#12264d" />
            <rect x="24" y="12" width="4" height="17" rx="1" fill="#e11d2a" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 40, fontWeight: 800 }}>Voix du Citoyen</span>
            <span style={{ fontSize: 22, color: "#b6d2f8", letterSpacing: 3 }}>PAR LE BAROMETRE</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>Votre quartier,</span>
          <span style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, color: "#85b3f1" }}>votre voix.</span>
          <span style={{ fontSize: 32, marginTop: 28, color: "#d9e8fc" }}>
            Signalez, proposez, suivez ce que fait votre mairie.
          </span>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {["Gratuit", "Anonyme", "Message vocal", "Communes du Bénin"].map((t) => (
            <span
              key={t}
              style={{
                fontSize: 24,
                padding: "10px 24px",
                borderRadius: 999,
                background: t === "Gratuit" ? "#e11d2a" : "rgba(255,255,255,0.12)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
