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
  }));

  const experienceUrls: MetadataRoute.Sitemap = Object.keys(experienceData).map((slug) => ({
    url: `${siteUrl}/experience/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const achievementUrls: MetadataRoute.Sitemap = Object.keys(achievementsData).map((slug) => ({
    url: `${siteUrl}/achievements/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogUrls: MetadataRoute.Sitemap = Object.keys(blogData).map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectUrls,
    ...experienceUrls,
    ...achievementUrls,
    ...blogUrls,
  ];
}
