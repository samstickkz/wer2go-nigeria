import CulturalBanner from "@/components/CulturalBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import FindCities from "@/components/FindCities";
import DriveWithUs from "@/components/DriveWithUs";
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
        <FindCities />
        <DriveWithUs />
      </main>
      <Footer />
    </>
  );
}
