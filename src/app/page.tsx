import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import InsuranceBadges from "@/components/sections/InsuranceBadges";
import CTASection from "@/components/sections/CTASection";
import HomeFormSection from "./HomeFormSection";
import MapSection from "./MapSection";
import { PRACTICE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${PRACTICE.name} | Affordable Dentist in Chester, PA | Same-Day Dentures`,
  description: `Affordable dental care in Chester, PA. Same-day dentures from our on-site lab, walk-ins welcome 6 days a week. 10 dentists, prices up to 50% less. Call ${PRACTICE.phone}.`,
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <InsuranceBadges />
      <HomeFormSection />
      <MapSection />
      <CTASection />
    </>
  );
}
