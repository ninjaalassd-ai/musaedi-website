import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Musaedi",
    short_name: "Musaedi",
    description: "Premium medical app experience for clinicians and healthcare teams.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fbff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/musaedi-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
