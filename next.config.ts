import type { NextConfig } from "next";
import { APK_URL } from "./src/lib/site";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // piecitizenvoice.com/apk → dernière version de l'APK (temporaire, non permanent :
  // la destination changera quand l'app sera sur le Play Store).
  async redirects() {
    return [{ source: "/apk", destination: APK_URL, permanent: false }];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "api.piecitizenvoice.com" }],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
