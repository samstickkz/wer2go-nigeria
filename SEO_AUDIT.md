# SEO Audit — wer2 GO Nigeria (2026-08-10)

Scope: a full-repo technical/on-page SEO health pass, prompted by a broad
"master prompt" SEO brief. Explicitly **out of scope** for this pass (see
rationale below): URL architecture changes, a blog CMS, multi-language
content, LocalBusiness/NAP schema, hreflang, split sitemaps, programmatic
page generation. The site is 8 URLs serving 5 real cities — those items
would add risk or fabricated content without a proportional gain at this
size, and several conflict directly with the anti-spam rules in the brief
itself (no fabricated addresses, no machine-translated filler).

## What was already solid (no changes needed)
- Single canonical domain (`ng.gower2.com`), HTTPS enforced, vercel.app
  deployments 301 to it.
- `app/sitemap.ts` / `app/robots.ts` — every URL in the sitemap is real,
  indexable, and 200s. No noindex leaks anywhere.
- Zero raw `<img>` tags — everything uses `next/image` with correct
  `priority`/`sizes`; alt text on every live image is descriptive, not
  generic.
- Exactly one H1 per page, no heading-level skips (one depth gap fixed —
  see below).
- JSON-LD coverage: Organization/WebSite/Service/MobileApplication
  (sitewide), plus WebPage/Service/BreadcrumbList/FAQPage on `/drive` and
  every city page. All FAQ schema text matches visible FAQ copy exactly.
- No keyword stuffing, no fabricated stats/prices/reviews, consistent
  "wer2 GO" brand spelling throughout.
- No orphaned pages — all 8 sitemap URLs are reachable via on-site links.

## Problems found and fixed

**Broken navigation (real, user-facing bugs):**
- `Navbar.tsx` — the Home/How-it-works/Why-wer2-GO links were bare `#home`
  `#how` `#why` anchors. Those section ids only exist on the homepage, so
  the links were dead on `/drive`, all 5 city pages, and `/privacy-policy`
  (7 of 8 pages). Fixed by routing them to `/#home` etc. — this still
  same-document-scrolls when already on `/`, and correctly
  navigates-then-scrolls from every other page.
- The FAQ nav link was left route-aware (`#faq` on `/`, `/drive`, and city
  pages, which each have their own FAQ section; `/#faq` only on
  `/privacy-policy`, which has none) so it keeps showing the *relevant*
  FAQ instead of always redirecting to the homepage's.
- Footer's "Press & news" link (`#press`) pointed at an id that has never
  existed on any live page (the only component that ever defined it,
  `PressLogos.tsx`, was unwired) — permanently dead on every page. Removed
  the link rather than fabricate a press section.
- `CulturalBanner.tsx`'s Independence Day promo CTA pointed at `#promo`,
  which doesn't exist anywhere — repointed to the existing WhatsApp support
  link rather than inventing a promo-entry mechanism I can't verify.

**Metadata gaps (Next.js doesn't merge `openGraph`/`twitter` objects
across layout→page — a page-level object fully replaces the root's):**
- `/drive`, all 5 city pages, and `/privacy-policy` were each missing
  `og:site_name` / `og:locale` because they defined their own `openGraph`
  block without restating those fields. Added to all three.
- City-page social titles (`og:title`/`twitter:title`) were the bare city
  title with no brand suffix, unlike `/drive`, which does this correctly.
  Brought city pages in line: `"{title} | wer2 GO Nigeria"`.
- `/privacy-policy` had no `twitter` card block at all. Added one.
- Port Harcourt's rendered `<title>` (metaTitle + the layout's `" | wer2 GO
  Nigeria"` suffix) was 66 characters — over Google's ~60-char SERP
  truncation point. Shortened `metaTitle` from "...— Ride-Hailing App" to
  "...— Ride App" → now 57 chars.
- 4 of 5 city meta descriptions exceeded 160 characters (Abuja 178, Port
  Harcourt 163, Kano 179, Lagos 181) — all trimmed to ≤160 while keeping
  the real local detail (neighbourhoods, verification, the Kano-only Sannu
  women-only option).

**Structured data:**
- City-page `Service.provider` emitted a second, unlinked, anonymous
  `Organization` node instead of referencing the canonical
  `{"@id": ".../#organization"}` already defined once in the root layout
  (which `/drive` already does correctly). Fixed so every page's `Service`
  now points at the single sitewide Organization entity — consolidates the
  entity graph instead of fragmenting it across 5 near-duplicate nodes.

**Hardcoded values instead of the existing `lib/site.ts` constants:**
- `Footer.tsx` hardcoded `https://driver.gower2.com` even though the file
  already imports from `lib/site.ts` — now uses `DRIVER_URL`.
- `Footer.tsx` and `privacy-policy/page.tsx` hardcoded the support email
  string in two places (one `mailto:`, one display text) instead of
  `CONTACT_EMAIL`; `privacy-policy/page.tsx` didn't import `lib/site.ts` at
  all — now it does, and both hardcoded occurrences use the constant.
- `DriveWithUs.tsx`'s QR caption hardcoded `driver.gower2.com` as display
  text instead of deriving it from `DRIVER_URL`.

**Heading hierarchy:**
- `privacy-policy/page.tsx` rendered "2.1.1 Personal Data" and "2.1.2 Usage
  Data" as H3 siblings of their own parent "2.1 Types of Data Collected"
  instead of nesting one level deeper. Added an `H4` helper and corrected
  the nesting.

**Dead weight removed:**
- `app/robots.ts` disallowed `/api/`, a path that doesn't exist anywhere
  in this project (no `app/api/` directory) — removed the pointless rule.
- 8 fully-unused components deleted (confirmed via repo-wide grep — zero
  imports in `app/`): `FareEstimator.tsx`, `EarningsCalculator.tsx`,
  `ReferralCallout.tsx`, `TopRides.tsx`, `Testimonials.tsx`,
  `PressLogos.tsx`, `BlogPosts.tsx`, `WhatsAppFab.tsx`. This had been
  flagged as a cleanup candidate in the 2026-08-05 SEO run and grew by one
  (`WhatsAppFab`) on this pass. ~1,160 lines removed.
- `next.config.mjs`'s `images.remotePatterns` allowlisted `ui-avatars.com`,
  `picsum.photos`, `images.unsplash.com` — all three were only referenced
  by the now-deleted components. Removed the dead config.

## Deliberately not done, and why
- **URL restructuring** (`/lagos` → `/cities/lagos/`, adding
  `/ride-hailing/`, `/airport-rides/lagos/`, etc.) — every current URL is
  already indexed in Search Console. A rename needs careful 301s and risks
  a ranking dip for no real gain at 5 cities / 8 pages.
- **LocalBusiness/NAP schema** — no public office address exists to
  publish; fabricating one would violate the brief's own anti-fabrication
  rule.
- **Hausa/Yoruba/Igbo page content** — no vetted (non-machine) translations
  exist yet; the brief itself warns against publishing poor translations
  just to create pages.
- **Blog CMS, split sitemaps, programmatic city-page generation,
  hreflang** — over-engineering for the site's current size; each is a
  real multi-week content or infra project, not a code change, and thin
  programmatic pages are explicitly what the brief warns against.

## Validation
- `npm run build` — clean (0 errors; 1 pre-existing, unrelated ESLint
  warning in `Hero.tsx`).
- Verified in the built static HTML output: Abuja `<title>` 57 chars with
  brand suffix; `og:site_name`/`og:locale` present on `/abuja`,
  `/privacy-policy`; both JSON-LD blocks on `/abuja` (`Organization` graph
  + page graph) `JSON.parse` cleanly; city-page `Service.provider` now
  references the shared `@id`; Port Harcourt title 57 chars; Lagos
  description 156 chars.
- Verified live in a running dev server: on `/privacy-policy` and `/lagos`,
  read the rendered Navbar's actual `href` attributes via
  `document.querySelectorAll` — Home/How/Why/FAQ resolve to `/#...` on
  `/privacy-policy` (no local section) and FAQ correctly stays `#faq` on
  `/lagos` (has its own section). No console/server errors on either page.

## Before → after (measurable)
| | Before | After |
|---|---|---|
| Dead nav anchors (`#home`/`#how`/`#why` broken pages) | 7 of 8 | 0 |
| Permanently dead links (`#press`, `#promo`) | 2 | 0 |
| Pages missing `og:site_name`/`og:locale` | 3 (`/drive`, 5 city pages, `/privacy-policy`) | 0 |
| Pages missing a `twitter` card block | 1 | 0 |
| Rendered `<title>` over ~60 chars | 1 (Port Harcourt, 66) | 0 |
| Meta descriptions over 160 chars | 4 | 0 |
| Duplicate/unlinked `Organization` JSON-LD nodes | 5 (one per city page) | 0 |
| Hardcoded URL/email values bypassing `lib/site.ts` | 4 occurrences | 0 |
| Heading-depth violations | 1 | 0 |
| Unused components in the bundle | 8 | 0 |
| robots.txt rules for nonexistent routes | 1 | 0 |

## Recommended next SEO runs (backlog, unchanged priority order)
1. Google Business Profile for the Maps pack (off-page, not a code change).
2. If/when a real Hausa/Yoruba/Igbo translation is available, add
   `hreflang`-backed language variants — not before.
3. If a blog becomes a real content commitment (not just an SEO checkbox),
   scaffold `/blog/[slug]` with Article JSON-LD at that point.
