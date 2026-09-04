import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, ChevronRight, Home, Car } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CITIES } from "@/lib/cities";
import { CITIES_PHRASE, APPS_URL, CONTACT_EMAIL } from "@/lib/site";

/**
 * Branded 404.
 *
 * Next's default not-found is a bare "404 | This page could not be found."
 * with no navigation at all, so every mistyped or stale URL — including the
 * cities we do NOT serve, which show up in Search Console as real queries —
 * was a hard dead-end for readers and a zero-outlink dead-end for the crawler.
 * This renders inside the root layout, keeps the real Navbar and Footer, and
 * routes people to the cities we actually run in.
 *
 * Still returns HTTP 404 (Next sets the status for this file), so it is not a
 * soft 404. Next emits its own `noindex` for this route, but the root layout's
 * `index, follow` is inherited on top of it, so the robots override below is
 * required — without it the page ships two CONTRADICTORY meta robots tags
 * (`noindex` and `index, follow`). Deliberately NOT in app/sitemap.ts — a 404
 * must never be listed.
 */
export const metadata: Metadata = {
  title: "Page not found",
  description: `That page doesn't exist. wer2 GO is live in ${CITIES_PHRASE} — pick a city to book a ride.`,
  // Must agree with the `noindex` Next already emits for this route; the links
  // out of here are still worth following.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="bg-cream">
        <section className="relative bg-teal text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
            <p className="font-display font-bold text-sm tracking-[0.2em] text-brand">
              404
            </p>
            <h1 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
              We can&apos;t find that page.
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
              The link may be old, or the address slightly off. wer2 GO is live
              in {CITIES_PHRASE} — pick your city below, or head back to the
              home page.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-charcoal hover:bg-brand-dark transition-colors active:scale-[0.98]"
              >
                <Home className="h-4 w-4" aria-hidden="true" />
                Back to home
              </Link>
              <a
                href={APPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/25 px-6 py-3 text-sm font-medium text-white hover:bg-white/20 transition-colors"
              >
                Download the app
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
          <Reveal>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-charcoal">
              Book a ride in your city
            </h2>
            <p className="mt-3 max-w-2xl text-charcoal/65 leading-relaxed">
              These are the cities wer2 GO runs in today. Each page has the
              areas we cover, the airport run and answers to the usual
              questions.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {CITIES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.06}>
                <Link
                  href={`/${c.slug}`}
                  className="group flex h-full items-start gap-4 rounded-3xl bg-white p-6 ring-1 ring-charcoal/10 hover:ring-brand transition-colors"
                >
                  <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-brand-soft">
                    <MapPin
                      className="h-5 w-5 text-brand-dark"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display font-semibold text-charcoal">
                      Book a ride in {c.name}
                    </span>
                    <span className="mt-1 block text-sm text-charcoal/65">
                      {c.state}
                    </span>
                  </span>
                  <ChevronRight
                    className="ml-auto h-5 w-5 flex-none text-charcoal/30 group-hover:text-brand-dark transition-colors"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            ))}
            <Reveal delay={CITIES.length * 0.06}>
              <Link
                href="/drive"
                className="group flex h-full items-start gap-4 rounded-3xl bg-white p-6 ring-1 ring-charcoal/10 hover:ring-brand transition-colors"
              >
                <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-brand-soft">
                  <Car className="h-5 w-5 text-brand-dark" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display font-semibold text-charcoal">
                    Drive with wer2 GO
                  </span>
                  <span className="mt-1 block text-sm text-charcoal/65">
                    Keep 90% of every fare
                  </span>
                </span>
                <ChevronRight
                  className="ml-auto h-5 w-5 flex-none text-charcoal/30 group-hover:text-brand-dark transition-colors"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>

          <Reveal className="mt-10">
            <p className="text-sm text-charcoal/60">
              Still stuck? Email us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-teal underline underline-offset-4 hover:text-brand-dark"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
