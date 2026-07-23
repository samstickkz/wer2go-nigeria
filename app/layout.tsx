import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  CITIES,
  APPS_URL,
  CONTACT_EMAIL,
} from "@/lib/site";

const interBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "wer2 GO Nigeria — Book a ride, or drive and keep more",
    template: "%s | wer2 GO Nigeria",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "wer2 GO",
    "ride hailing Nigeria",
    "book a ride Nigeria",
    "taxi app Nigeria",
    "cab app Nigeria",
    "drive with wer2 GO",
    "driver app Nigeria",
    "10% driver commission",
    "ride hailing Abuja",
    "ride hailing Port Harcourt",
    "ride hailing Uyo",
    "ride hailing Kano",
    "women only rides Nigeria",
    "safe rides Nigeria",
  ],
  authors: [{ name: "wer2 GO" }],
  creator: "wer2 GO",
  publisher: "wer2 GO",
  alternates: { canonical: "/" },
  category: "Transportation",
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_NG",
    url: SITE_URL,
    title: "wer2 GO Nigeria — Book a ride, or drive and keep more",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/brand/hero-car.png",
        width: 1920,
        height: 1080,
        alt: "wer2 GO — ride-hailing in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "wer2 GO Nigeria — Book a ride, or drive and keep more",
    description: SITE_DESCRIPTION,
    images: ["/brand/hero-car.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data: helps Google understand the brand, the app and where we
  // operate (rich results + knowledge panel eligibility).
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "wer2 GO",
        alternateName: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/brand/wer2-go-logo.svg`,
        image: `${SITE_URL}/brand/hero-car.png`,
        description: SITE_DESCRIPTION,
        email: CONTACT_EMAIL,
        areaServed: CITIES.map((c) => ({
          "@type": "City",
          name: c,
          containedInPlace: { "@type": "Country", name: "Nigeria" },
        })),
        sameAs: [
          "https://gower2.com",
          "https://www.instagram.com/wer2ride/",
          "https://www.facebook.com/wer2ride/",
          "https://t.me/wer2go_nigeria",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: CONTACT_EMAIL,
            areaServed: "NG",
            availableLanguage: ["English", "Hausa", "Igbo", "Yoruba"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-NG",
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service`,
        serviceType: "Ride-hailing",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: CITIES.map((c) => ({ "@type": "City", name: c })),
        description:
          "On-demand rides across Nigeria with verified drivers, upfront fare estimates and in-app SOS.",
      },
      {
        "@type": "MobileApplication",
        "@id": `${SITE_URL}/#app`,
        name: "wer2 GO",
        operatingSystem: "Android, iOS",
        applicationCategory: "TravelApplication",
        url: APPS_URL,
        publisher: { "@id": `${SITE_URL}/#organization` },
        offers: { "@type": "Offer", price: "0", priceCurrency: "NGN" },
      },
    ],
  };

  return (
    <html lang="en-NG">
      <body
        className={`${interBody.variable} ${display.variable} font-sans bg-white text-charcoal antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        {/* Replio AI support widget — "wer2 GO" tenant. Replies 24/7 in the
            visitor's own language (English, Pidgin, Yoruba, Igbo, Hausa). */}
        <Script
          src="https://replio.live/widget.js"
          data-replio="j5Kgypem3NXbRZJc"
          data-country="NG"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
