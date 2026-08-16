/**
 * Canonical site config. ng.gower2.com is the live custom domain (SSL active
 * 2026-07-27) and the ONLY URL Google should index — canonicals, sitemap, OG
 * tags and JSON-LD all follow this constant. The wer2go-nigeria.vercel.app
 * deployment 301s here (see next.config.mjs) so the two never compete.
 * NEXT_PUBLIC_SITE_URL still overrides it if the domain ever changes.
 */
import { CITIES as CITY_DATA } from "./cities";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://ng.gower2.com"
).replace(/\/$/, "");

export const SITE_NAME = "wer2 GO Nigeria";

/**
 * Cities we actively serve — names only, for JSON-LD areaServed and copy.
 *
 * DERIVED from lib/cities.ts, which is the one true list: it generates the
 * city pages, the sitemap entries and the homepage links. This used to be a
 * second hand-maintained array, so a city added in one place and not the
 * other would silently desync the structured data from the real pages.
 * Add a city in lib/cities.ts and everything here follows.
 */
export const CITIES: readonly string[] = CITY_DATA.map((c) => c.name);

/** "Abuja, Port Harcourt, Uyo, Kano and Lagos" — one formatter, used sitewide. */
export function joinWithAnd(items: readonly string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

/** The serving-cities phrase, ready to drop into a sentence. */
export const CITIES_PHRASE = joinWithAnd(CITIES);

export const SITE_DESCRIPTION = `Book a ride with wer2 GO — verified drivers, upfront fare estimates and in-app SOS. Live in ${CITIES_PHRASE}. Drivers keep 90%.`;

// This one string is the sitewide meta description, the OG/Twitter description
// and the Organization + WebSite JSON-LD description. Google truncates the SERP
// snippet around 160 chars, and the string grows with every city added, so fail
// the build loudly rather than silently shipping a cut-off snippet. If this ever
// throws, shorten the fixed wording above — do not drop a city from the list.
if (SITE_DESCRIPTION.length > 160) {
  throw new Error(
    `SITE_DESCRIPTION is ${SITE_DESCRIPTION.length} chars (max 160). Shorten it — see lib/site.ts.`,
  );
}

/** Rider ("client") app — smart link that routes to the right store. */
export const APPS_URL = "https://get.gower2.com";

/** Driver app — separate download for people who drive with wer2 GO. */
export const DRIVER_URL = "https://driver.gower2.com";
export const CONTACT_EMAIL = "contact@gower2.com";
