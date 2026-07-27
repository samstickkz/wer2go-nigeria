/**
 * Canonical site config. ng.gower2.com is the live custom domain (SSL active
 * 2026-07-27) and the ONLY URL Google should index — canonicals, sitemap, OG
 * tags and JSON-LD all follow this constant. The wer2go-nigeria.vercel.app
 * deployment 301s here (see next.config.mjs) so the two never compete.
 * NEXT_PUBLIC_SITE_URL still overrides it if the domain ever changes.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://ng.gower2.com"
).replace(/\/$/, "");

export const SITE_NAME = "wer2 GO Nigeria";

export const SITE_DESCRIPTION =
  "Book a ride in Nigeria with wer2 GO — verified drivers, upfront fare estimates and in-app SOS. Drivers keep more with a 10% commission. Live in Abuja, Port Harcourt, Uyo and Kano.";

/** Cities we actively serve — used for sitemap, JSON-LD areaServed and copy. */
export const CITIES = [
  "Abuja",
  "Port Harcourt",
  "Uyo",
  "Kano",
  "Lagos",
] as const;

export const APPS_URL = "https://apps.wer2.com/";
export const CONTACT_EMAIL = "contact@gower2.com";
