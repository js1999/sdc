import { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Crowns & Bridges Chester PA | Affordable Dental Restorations",
  description:
    "Affordable dental crowns and bridges in Chester, PA. Restore damaged or missing teeth. Walk-ins welcome. Prices up to 50% less than average.",
};

export default function CrownsBridgesPage() {
  return (
    <>
      <ServicePageTemplate
        title="Crowns & Bridges"
        subtitle="Restore damaged or missing teeth with durable, natural-looking crowns and bridges — at prices that won't break the bank."
        description="Dental crowns cap and protect damaged teeth, while bridges replace one or more missing teeth by anchoring to neighboring teeth. At Saltz Dental, we provide quality restorations that look natural and last for years — all at up to 50% less than the average dental office."
        priceNote="Crown and bridge work at Saltz Dental costs up to 50% less than the average dental office. We accept Blue Shield, Delta Dental, and CareCredit financing."
        features={[
          "Porcelain crowns for a natural look",
          "Full metal crowns for durability",
          "Porcelain-fused-to-metal crowns",
          "Fixed dental bridges (3+ units)",
          "Temporary crowns while you wait",
          "Crown repair and re-cementing",
          "Color-matched to your natural teeth",
          "Durable materials built to last",
        ]}
        process={[
          {
            title: "Consultation",
            description: "We examine the tooth, discuss your options, and take impressions for a perfect fit.",
          },
          {
            title: "Preparation",
            description: "The tooth is shaped to receive the crown. We place a temporary crown while yours is being made.",
          },
          {
            title: "Fabrication",
            description: "Your permanent crown or bridge is crafted to match your natural teeth in shape and color.",
          },
          {
            title: "Placement",
            description: "We bond your permanent restoration in place, check your bite, and make any final adjustments.",
          },
        ]}
        faqs={[
          {
            question: "How long does a dental crown last?",
            answer: "With proper care, dental crowns typically last 10-15 years or more. Regular brushing, flossing, and dental check-ups help maximize the lifespan of your crown.",
          },
          {
            question: "Does getting a crown hurt?",
            answer: "No. We use local anesthesia to keep you comfortable throughout the procedure. You may have some mild sensitivity afterward, but it typically resolves within a few days.",
          },
          {
            question: "What's the difference between a crown and a bridge?",
            answer: "A crown covers a single damaged tooth. A bridge replaces one or more missing teeth by anchoring artificial teeth to the natural teeth on either side of the gap.",
          },
          {
            question: "How many visits does a crown require?",
            answer: "Typically two visits — one to prepare the tooth and take impressions, and a second to place the permanent crown. We provide a temporary crown between visits.",
          },
        ]}
        relatedServices={[
          { name: "Dentures", slug: "dentures" },
          { name: "Root Canal Therapy", slug: "root-canals" },
          { name: "Cosmetic Bonding", slug: "cosmetic-bonding" },
        ]}
      />
      <CTASection />
    </>
  );
}
