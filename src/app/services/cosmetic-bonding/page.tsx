import { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Cosmetic Bonding Chester PA | Fix Chips, Gaps & Stains Affordably",
  description:
    "Affordable cosmetic dental bonding in Chester, PA. Fix chips, gaps, and discoloration in one visit. Walk-ins welcome. Up to 50% less than average.",
};

export default function CosmeticBondingPage() {
  return (
    <>
      <ServicePageTemplate
        title="Cosmetic Bonding"
        subtitle="Fix chips, gaps, and discoloration quickly and affordably. A simple procedure that can dramatically improve your smile in a single visit."
        description="Cosmetic bonding uses tooth-colored composite resin to repair imperfections in your teeth. It's one of the fastest, most affordable cosmetic dental procedures available — and the results can be dramatic. No lab work needed, no multiple visits. In most cases, we can transform your smile in under an hour."
        priceNote="Cosmetic bonding is one of the most affordable ways to improve your smile. At Saltz Dental, you'll pay up to 50% less than the average dental office."
        features={[
          "Repair chipped or cracked teeth",
          "Close gaps between teeth",
          "Cover discoloration and stains",
          "Reshape uneven teeth",
          "Protect exposed tooth roots",
          "Color-matched to your natural teeth",
          "Completed in a single visit",
          "No drilling required in most cases",
        ]}
        process={[
          {
            title: "Color Matching",
            description: "We select a composite resin shade that perfectly matches your natural teeth for seamless results.",
          },
          {
            title: "Preparation",
            description: "Minimal prep is needed — usually no anesthesia required. We lightly texture the tooth surface for better bonding.",
          },
          {
            title: "Application",
            description: "The composite resin is applied, shaped, and molded to achieve the perfect look. This is where the artistry happens.",
          },
          {
            title: "Curing & Polish",
            description: "A special light hardens the resin, then we polish it to a natural-looking shine. Walk out with a better smile.",
          },
        ]}
        faqs={[
          {
            question: "How long does cosmetic bonding last?",
            answer: "With proper care, cosmetic bonding typically lasts 5-10 years. Avoid biting hard objects and maintain good oral hygiene to maximize longevity.",
          },
          {
            question: "Does bonding look natural?",
            answer: "Yes! We carefully match the composite resin to your natural tooth color. When done well, bonding is virtually indistinguishable from your natural teeth.",
          },
          {
            question: "Is cosmetic bonding painful?",
            answer: "In most cases, bonding requires no anesthesia at all. The procedure is gentle and minimally invasive. It's one of the most comfortable cosmetic dental procedures.",
          },
          {
            question: "How long does the procedure take?",
            answer: "Bonding one tooth typically takes 30-60 minutes. Multiple teeth can often be done in a single appointment, usually within a couple of hours.",
          },
        ]}
        relatedServices={[
          { name: "Crowns & Bridges", slug: "crowns-bridges" },
          { name: "Dentures", slug: "dentures" },
          { name: "Root Canal Therapy", slug: "root-canals" },
        ]}
      />
      <CTASection />
    </>
  );
}
