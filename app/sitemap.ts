import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { CITY_SLUGS } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/drive`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...CITY_SLUGS.map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
