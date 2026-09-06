import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Google-Extended",
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "anthropic-ai",
          "Claude-Web",
          "PerplexityBot",
          "Applebot",
          "Applebot-Extended",
          "cohere-ai",
          "Meta-ExternalAgent",
          "FacebookBot",
          "Diffbot",
          "Bytespider",
          "CCBot",
          "Amazonbot",
          "DuckAssistBot",
          "YouBot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://wildansilki.xyz/sitemap.xml",
    host: "https://wildansilki.xyz",
  };
}
