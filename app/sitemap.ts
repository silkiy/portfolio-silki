import { MetadataRoute } from "next";
import { projectsData } from "@/data/projectsData";
import { experienceData } from "@/data/experienceData";
import { achievementsData } from "@/data/achievementsData";
import { blogData } from "@/data/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://wildansilki.xyz";
  const now = new Date();

  const projectUrls: MetadataRoute.Sitemap = Object.keys(projectsData).map((slug) => ({
    url: `${siteUrl}/projects/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
    images: [`${siteUrl}${projectsData[slug].heroImage}`],
  }));

  const experienceUrls: MetadataRoute.Sitemap = Object.keys(experienceData).map((slug) => ({
    url: `${siteUrl}/experience/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    images: [`${siteUrl}/images/wildan-silki-profile.jpeg`],
  }));

  const achievementUrls: MetadataRoute.Sitemap = Object.keys(achievementsData).map((slug) => ({
    url: `${siteUrl}/achievements/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
    images: [`${siteUrl}${achievementsData[slug].image}`],
  }));

  const blogUrls: MetadataRoute.Sitemap = Object.keys(blogData).map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
    images: [
      `${siteUrl}/logo/wildan-silki-software-engineer-logo.png`,
      `${siteUrl}/images/wildan-silki-profile.jpeg`,
    ],
  }));

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${siteUrl}/images/wildan-silki-profile.jpeg`,
        `${siteUrl}/logo/wildan-silki-software-engineer-logo.png`,
      ],
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${siteUrl}/logo/wildan-silki-software-engineer-logo.png`,
      ],
    },
    {
      url: `${siteUrl}/llms.txt`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/llms-full.txt`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...projectUrls,
    ...experienceUrls,
    ...achievementUrls,
    ...blogUrls,
  ];
}
