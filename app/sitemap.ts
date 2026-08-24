import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { CITY_SLUGS } from "@/lib/cities";

/**
 * Real last-content-change dates, keyed by path (ISO yyyy-mm-dd, UTC).
 *
 * Every entry here used to be `new Date()`, so each deploy stamped all eight
 * URLs with the build timestamp: a one-line copy fix on the homepage told
 * Google that the privacy policy had changed too. Google's guidance is that
 * <lastmod> is only used while it is consistently accurate — inaccurate values
 * get the whole site's lastmod ignored — and we lean on lastmod to get
 * link-only changes recrawled without spending Request-Indexing quota.
 *
 * HOW TO UPDATE: when you change what a page renders — including through a
 * shared component such as the Navbar or Footer, which changes every page —
 * set that page's date to the date of the change. Leave the dates of pages you
 * did not change alone; that is the entire point. A path with no entry falls
 * back to the build date, which is the honest answer for a brand-new page, so
 * adding a city still needs no edit here until its content is next changed.
 */
const LAST_CONTENT_CHANGE: Record<string, string> = {
  // 2026-08-19: FAQ answers gained contextual /drive and /kano links.
  "/": "2026-08-19",
  // 2026-08-16: shared Footer city strip + derived five-city phrasing.
  "/drive": "2026-08-16",
  "/abuja": "2026-08-16",
  "/port-harcourt": "2026-08-16",
  "/uyo": "2026-08-16",
  "/kano": "2026-08-16",
  "/lagos": "2026-08-16",
  "/privacy-policy": "2026-08-16",
};

const BUILD_DATE = new Date();

function lastModified(path: string): Date {
  const day = LAST_CONTENT_CHANGE[path];
  return day ? new Date(`${day}T00:00:00Z`) : BUILD_DATE;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: lastModified("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/drive`,
      lastModified: lastModified("/drive"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...CITY_SLUGS.map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: lastModified(`/${slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: lastModified("/privacy-policy"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
