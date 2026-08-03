import type { Metadata } from "next";
import Link from "next/link";
import {
  Wallet,
  ShieldCheck,
  Clock,
  MapPin,
  LineChart,
  Headphones,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CITIES } from "@/lib/cities";
import { SITE_URL, SITE_NAME, DRIVER_URL, CONTACT_EMAIL } from "@/lib/site";

const PAGE_PATH = "/drive";
const url = `${SITE_URL}${PAGE_PATH}`;

const metaTitle = "Become a Driver — 10% Commission";
const metaDescription =
  "Drive with wer2 GO in Nigeria and keep 90% of every fare — a 10% commission, earnings you track from day one, and payouts on request. Onboard with NIN + BVN.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: `${metaTitle} | ${SITE_NAME}`,
    description: metaDescription,
    url,
    type: "website",
    images: [
      { url: "/brand/car-comfort.jpg", alt: "Drive with wer2 GO in Nigeria" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${metaTitle} | ${SITE_NAME}`,
    description: metaDescription,
    images: ["/brand/car-comfort.jpg"],
  },
};

const perks = [
  {
    Icon: Wallet,
    title: "10% commission",
    body: "One of the lowest in Nigeria. wer2 GO keeps 10% of each completed fare — the other 90% stays in your account.",
  },
  {
    Icon: LineChart,
    title: "Earnings you can track",
    body: "See what you make from your very first ride. Every fare and every trip is in the app, so there are no surprises.",
  },
  {
    Icon: Wallet,
    title: "Payouts on request",
    body: "Your balance is yours. Request a withdrawal whenever you want to move your earnings out — no waiting on a fixed cycle.",
  },
  {
    Icon: Clock,
    title: "Your own hours",
    body: "No fixed shifts and no targets. Go online when you want to drive and stop whenever you're done.",
  },
  {
    Icon: ShieldCheck,
    title: "NIN + BVN onboarding",
    body: "Full verification in one visit to a wer2 GO hub, so every driver on the platform is a real, vetted person.",
  },
  {
    Icon: Headphones,
    title: "Support in your language",
    body: "Real people on call in English, Hausa, Igbo and Yoruba when you need a hand on the road.",
  },
];

const steps = [
  {
    n: "1",
    title: "Download the driver app",
    body: "Get the wer2 GO driver app for Android or iOS and start your application in a few minutes.",
  },
  {
    n: "2",
    title: "Verify with NIN + BVN",
    body: "Visit a wer2 GO hub to complete onboarding — your NIN and BVN are verified in a single visit.",
  },
  {
    n: "3",
    title: "Go online and earn",
    body: "Once you're approved, go online, accept ride requests, and keep 90% of every fare you complete.",
  },
];

const faqs = [
  {
    q: "How much commission does wer2 GO take?",
    a: "wer2 GO charges a 10% commission on each completed fare — one of the lowest in Nigeria. The remaining 90% stays in your account.",
  },
  {
    q: "How do I sign up to drive with wer2 GO?",
    a: "Download the wer2 GO driver app at driver.gower2.com and start your application. You then complete onboarding at a wer2 GO hub, where your NIN and BVN are verified in a single visit.",
  },
  {
    q: "When do I get paid?",
    a: "Your earnings are tracked in the app from your very first ride, and you request a payout whenever you want to withdraw your balance. There is no fixed payout cycle to wait on.",
  },
  {
    q: "Which cities can I drive in?",
    a: `wer2 GO is live in ${CITIES.map((c) => c.name).join(", ")}, with more Nigerian cities being added over time.`,
  },
  {
    q: "Can I choose my own hours?",
    a: "Yes. There are no fixed shifts and no daily targets — go online in the app when you want to take rides and stop whenever you're done.",
  },
  {
    q: "What do I need to start driving?",
    a: `You'll need a smartphone, a valid Nigerian phone number, and your NIN and BVN for verification. To confirm the full vehicle and document requirements for your city, contact ${CONTACT_EMAIL}.`,
  },
];

export default function DrivePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${metaTitle} | ${SITE_NAME}`,
        description: metaDescription,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        inLanguage: "en-NG",
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        serviceType: "Ride-hailing driver platform",
        name: "Drive with wer2 GO",
        description:
          "Earn as a wer2 GO driver in Nigeria with a 10% commission, earnings you track from day one, payouts on request and flexible hours.",
        areaServed: CITIES.map((c) => ({
          "@type": "City",
          name: c.name,
          containedInPlace: { "@type": "Country", name: "Nigeria" },
        })),
        provider: { "@id": `${SITE_URL}/#organization` },
        url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Drive", item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
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
        <section className="relative bg-charcoal text-white overflow-hidden">
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute -bottom-12 -left-4 font-display font-extrabold text-white/[0.06] text-[200px] sm:text-[300px] lg:text-[360px] leading-none tracking-tighter"
          >
            DRIVE
          </span>
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
                <li className="text-white/90">Drive</li>
              </ol>
            </nav>

            <p className="mt-6 text-xs uppercase tracking-wider text-brand font-semibold">
              Drive with wer2 GO
            </p>
            <h1 className="mt-3 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
              Drive your own hours. Keep 90% of every fare.
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
              wer2 GO charges a 10% commission — one of the lowest in Nigeria —
              so more of what you earn stays with you. Track your earnings from
              day one and request your payout whenever you want.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={DRIVER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-charcoal hover:bg-brand-dark transition-colors active:scale-[0.98]"
              >
                Become a driver
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#faq"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/25 px-6 py-3 text-sm font-medium text-white hover:bg-white/20 transition-colors"
              >
                Driver questions
              </a>
            </div>
          </div>
        </section>

        {/* Perks */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
          <Reveal>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-charcoal">
              Why drivers choose wer2 GO
            </h2>
            <p className="mt-3 max-w-2xl text-charcoal/65 leading-relaxed">
              A fairer deal on the road: a low commission, earnings you can see,
              and the freedom to drive on your own terms.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
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

        {/* How to start */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
            <Reveal>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-charcoal">
                How to start driving
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <div className="h-full rounded-3xl bg-cream p-6 ring-1 ring-charcoal/5">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand font-display font-bold text-charcoal">
                      {s.n}
                    </span>
                    <h3 className="mt-4 font-display font-semibold text-charcoal">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal/65 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Cities */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
          <Reveal>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-charcoal">
              Where you can drive
            </h2>
            <p className="mt-3 max-w-2xl text-charcoal/65 leading-relaxed">
              wer2 GO is live across Nigeria and growing. Tap a city to see how
              rides work there.
            </p>
          </Reveal>
          <Reveal className="mt-7">
            <ul className="flex flex-wrap gap-2.5">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm text-charcoal ring-1 ring-charcoal/10 hover:ring-brand transition-colors"
                  >
                    <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white scroll-mt-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
            <Reveal>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-charcoal">
                Driver questions
              </h2>
            </Reveal>
            <div className="mt-8 divide-y divide-charcoal/10">
              {faqs.map((f) => (
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

        {/* CTA */}
        <section className="bg-teal-deep text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
            <Reveal>
              <h2 className="font-display font-bold text-2xl sm:text-3xl">
                Ready to earn on your own terms?
              </h2>
              <p className="mt-3 max-w-xl text-white/70 leading-relaxed">
                Download the wer2 GO driver app, verify with your NIN and BVN at
                a hub, and start keeping 90% of every fare.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={DRIVER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-charcoal hover:bg-brand-dark transition-colors active:scale-[0.98]"
                >
                  Become a driver
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
