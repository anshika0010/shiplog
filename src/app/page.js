import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TestimonialSection from "@/components/TestimmonialSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <FeaturesSection />
      <WhyChooseUs />
      <TestimonialSection />
      <Footer />
    </>
  );
}
