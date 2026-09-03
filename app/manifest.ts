import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wildan Silki | Software Engineer & Web3 Specialist",
    short_name: "Wildan Silki",
    description:
      "Official portfolio of Wildan Silki Sawabiqil Abroor - Professional Software Engineer & Web3 Specialist.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
