/**
 * Canonical site config. Set NEXT_PUBLIC_SITE_URL in Vercel once a custom
 * domain (e.g. wer2go.ng / ng.gower2.com) is attached — everything below
 * (canonicals, sitemap, OG tags, JSON-LD) follows automatically.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://wer2go-nigeria.vercel.app"
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
