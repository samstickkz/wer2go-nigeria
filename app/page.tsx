import CulturalBanner from "@/components/CulturalBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReferralCallout from "@/components/ReferralCallout";
import FindCities from "@/components/FindCities";
import DriveWithUs from "@/components/DriveWithUs";
import FleetShowcase from "@/components/FleetShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CulturalBanner />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <ReferralCallout />
        <FindCities />
        <DriveWithUs />
        <FleetShowcase />
      </main>
      <Footer />
    </>
  );
}
