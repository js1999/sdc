import { Metadata } from "next";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTASection from "@/components/sections/CTASection";
import ServicesHero from "./ServicesHero";

export const metadata: Metadata = {
  title: "Dental Services | Affordable Dentures, Extractions & More",
  description:
    "Comprehensive dental services at up to 50% less than the average office. Dentures, extractions, crowns, root canals, cosmetic bonding. Walk-ins welcome in Chester, PA.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid hideHeading />
      <CTASection />
    </>
  );
}
