# wer2 GO Nigeria — SEO change log

One line per autonomous SEO run (Mon/Wed/Fri). Newest at the bottom. This log
plus git history are the only memory between runs — read both before acting.

- 2026-08-03: Built `/drive` driver-recruitment page (backlog #1) — targets driver-intent queries ("drive for ride-hailing Nigeria", "driver app earnings") around the 10%-commission differentiator. Server-rendered with own metadata (title 50 chars, canonical /drive), JSON-LD WebPage + Service + BreadcrumbList + FAQPage (6 Q&A), 6 perks, 3-step how-to, city cross-links. Added to `app/sitemap.ts` (now 8 URLs). Repointed the Navbar "Drive" link from the external driver.gower2.com to internal `/drive`, and added a "How driving works" link from the homepage DriveWithUs section. Truth-checked: 10% commission / keep 90%, payouts ON REQUEST (no cadence), NIN+BVN onboarding, own hours, live cities from lib/cities — no invented earnings figures. `npm run build` clean; both JSON-LD blocks json-parse. Follow-up: homepage FAQ + FAQPage (backlog #2) is the next high-value gap; consider a Google Business Profile for the Maps pack.
