import CulturalBanner from "@/components/CulturalBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import CitiesServed from "@/components/CitiesServed";
import FindCities from "@/components/FindCities";
import DriveWithUs from "@/components/DriveWithUs";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { HOMEPAGE_FAQS } from "@/lib/faqs";

export default function Home() {
  // FAQPage schema: ride-hailing queries are heavily question-shaped, and
  // this was the site's only page with no FAQ section or FAQ rich-result
  // eligibility at all (see components/Faq.tsx for the rendered version).
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOMEPAGE_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <CulturalBanner />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <CitiesServed />
        <FindCities />
        <DriveWithUs />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
