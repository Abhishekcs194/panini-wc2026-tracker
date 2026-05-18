import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Panini WC 2026 Tracker",
    short_name: "Panini 2026",
    description: "Track your FIFA World Cup 2026 Panini stickers — missing & duplicates",
    start_url: "/",
    display: "standalone",
    background_color: "#2A398D",
    theme_color: "#2A398D",
    orientation: "portrait",
    categories: ["sports", "lifestyle"],
    icons: [
      { src: "/icons/icon-72.png",  sizes: "72x72",   type: "image/png" },
      { src: "/icons/icon-96.png",  sizes: "96x96",   type: "image/png" },
      { src: "/icons/icon-128.png", sizes: "128x128", type: "image/png" },
      { src: "/icons/icon-144.png", sizes: "144x144", type: "image/png" },
      { src: "/icons/icon-152.png", sizes: "152x152", type: "image/png" },
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-384.png", sizes: "384x384", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
