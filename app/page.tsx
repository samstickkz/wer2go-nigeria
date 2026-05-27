import CulturalBanner from "@/components/CulturalBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TopRides from "@/components/TopRides";
import FareEstimator from "@/components/FareEstimator";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReferralCallout from "@/components/ReferralCallout";
import FindCities from "@/components/FindCities";
import Testimonials from "@/components/Testimonials";
import PressLogos from "@/components/PressLogos";
import DriveWithUs from "@/components/DriveWithUs";
import EarningsCalculator from "@/components/EarningsCalculator";
import FleetShowcase from "@/components/FleetShowcase";
import BlogPosts from "@/components/BlogPosts";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <CulturalBanner />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <TopRides />
        <FareEstimator />
        <WhyChooseUs />
        <ReferralCallout />
        <FindCities />
        <Testimonials />
        <PressLogos />
        <DriveWithUs />
        <EarningsCalculator />
        <FleetShowcase />
        <BlogPosts />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
