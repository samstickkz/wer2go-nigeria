import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Plane,
  ShieldCheck,
  BadgeCheck,
  Headphones,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CITIES, CITY_SLUGS, getCity } from "@/lib/cities";
import { SITE_URL, SITE_NAME, APPS_URL, CONTACT_EMAIL } from "@/lib/site";

// Only the cities we actually list render; any other path 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return CITY_SLUGS.map((city) => ({ city }));
}

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const city = getCity(params.city);
  if (!city) return {};
  const url = `${SITE_URL}/${city.slug}`;
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `/${city.slug}` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url,
      type: "website",
      images: [{ url: city.heroImage, alt: city.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: city.metaTitle,
      description: city.metaDescription,
      images: [city.heroImage],
    },
  };
}

const perks = [
  {
    Icon: BadgeCheck,
    title: "Upfront fare estimates",
    body: "See an estimated fare before you book — no surprise at the end of the trip.",
  },
  {
    Icon: ShieldCheck,
    title: "NIN + BVN verified drivers",
    body: "Every driver vetted and onboarded in person. See them before they arrive.",
  },
  {
    Icon: Headphones,
    title: "24/7 support",
    body: "Real people on call in English, Hausa, Igbo and Yoruba.",
  },
];

export default function CityPage({ params }: { params: { city: string } }) {
  const city = getCity(params.city);
  if (!city) notFound();

  const url = `${SITE_URL}/${city.slug}`;
  const otherCities = CITIES.filter((c) => c.slug !== city.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        serviceType: "Ride-hailing",
        name: `wer2 GO — ride-hailing in ${city.name}`,
        description: city.metaDescription,
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: { "@type": "Country", name: "Nigeria" },
        },
        provider: { "@type": "Organization", name: "wer2 GO", url: SITE_URL },
        url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: city.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: city.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="bg-cream">
        {/* Hero */}
        <section className="relative bg-teal text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={city.heroImage}
              alt={city.heroAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal via-teal/85 to-teal/60" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-xs text-white/60">
              <ol className="flex items-center gap-1.5">
                <li>
                  <Link href="/" className="hover:text-brand">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li className="text-white/90">{city.name}</li>
              </ol>
            </nav>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium ring-1 ring-white/15">
              <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {city.name}, {city.state}
            </p>
            <h1 className="mt-5 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
              Book a ride in {city.name}.
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
              {city.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={APPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-charcoal hover:bg-brand-dark transition-colors active:scale-[0.98]"
              >
                Download the app
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#faq"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/25 px-6 py-3 text-sm font-medium text-white hover:bg-white/20 transition-colors"
              >
                Common questions
              </a>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
          <Reveal>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-charcoal">
              Where wer2 GO rides in {city.name}
            </h2>
            <p className="mt-3 max-w-2xl text-charcoal/65 leading-relaxed">
              Pick-ups and drop-offs across {city.name} and its neighbourhoods —
              from a quick hop across town to a longer run out to the airport.
            </p>
          </Reveal>
          <Reveal className="mt-7">
            <ul className="flex flex-wrap gap-2.5">
              {city.areas.map((a) => (
                <li
                  key={a}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm text-charcoal ring-1 ring-charcoal/10"
                >
                  <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Airport + routes */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Reveal>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft">
                <Plane className="h-5 w-5 text-brand-dark" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-display font-bold text-2xl sm:text-3xl text-charcoal">
                {city.name} airport runs
              </h2>
              <p className="mt-3 text-charcoal/70 leading-relaxed">
                <span className="font-semibold text-charcoal">
                  {city.airport.name} ({city.airport.code}).
                </span>{" "}
                {city.airport.note}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-charcoal">
                Popular routes
              </h2>
              <ul className="mt-4 space-y-2.5">
                {city.routes.map(([from, to]) => (
                  <li
                    key={`${from}-${to}`}
                    className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3 text-sm text-charcoal ring-1 ring-charcoal/5"
                  >
                    <span className="font-medium">{from}</span>
                    <ArrowRight
                      className="h-4 w-4 text-brand-dark flex-none"
                      aria-hidden="true"
                    />
                    <span className="font-medium">{to}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Why */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
          <Reveal>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-charcoal">
              Why ride with wer2 GO in {city.name}
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-white p-6 ring-1 ring-charcoal/10">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft">
                    <p.Icon className="h-5 w-5 text-brand-dark" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-charcoal">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/65 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white scroll-mt-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
            <Reveal>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-charcoal">
                {city.name} — common questions
              </h2>
            </Reveal>
            <div className="mt-8 divide-y divide-charcoal/10">
              {city.faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display font-semibold text-charcoal list-none">
                    {f.q}
                    <ChevronRight className="h-5 w-5 flex-none text-brand-dark transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-charcoal/70 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + other cities */}
        <section className="bg-teal-deep text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
            <Reveal>
              <h2 className="font-display font-bold text-2xl sm:text-3xl">
                Ready to ride in {city.name}?
              </h2>
              <p className="mt-3 max-w-xl text-white/70 leading-relaxed">
                Download wer2 GO, sign up with your Nigerian phone number, verify
                with NIN, and book your first ride.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={APPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-charcoal hover:bg-brand-dark transition-colors active:scale-[0.98]"
                >
                  Download the app
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Contact us
                </a>
              </div>
            </Reveal>

            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-xs uppercase tracking-wider text-white/45">
                {SITE_NAME} — other cities
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {otherCities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/${c.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/20 transition-colors"
                    >
                      <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
