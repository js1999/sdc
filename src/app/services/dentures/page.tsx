import { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Affordable Dentures Chester PA | Same-Day Service | On-Site Lab",
  description:
    "Same-day dentures from our on-site lab. Full, partial & immediate dentures at up to 50% less than average. Walk-ins welcome. The Delaware Valley's premiere denture experts.",
};

export default function DenturesPage() {
  return (
    <>
      <ServicePageTemplate
        badge="Same-Day Available"
        title="Dentures — Crafted On-Site, Ready Same Day"
        subtitle="The Delaware Valley's premiere denture experts. Our on-site lab means you can walk in and walk out with a brand-new smile — often in the same visit."
        description="At Saltz Dental Center, we've been crafting quality dentures for over 34 years. Unlike most dental offices that send your work to an outside lab (adding weeks of waiting), we have a full denture lab right here in our Chester office. That means faster turnaround, better quality control, and lower costs passed directly to you."
        priceNote="Our dentures are priced at up to 50% less than the average dental office. We accept Blue Shield, Delta Dental, and offer CareCredit financing. No insurance? Ask about our budget payment plans."
        features={[
          "Full dentures (upper and lower)",
          "Partial dentures",
          "Immediate dentures (same-day)",
          "Implant-supported dentures",
          "Denture repairs while you wait",
          "Denture relines and adjustments",
          "On-site lab for fast turnaround",
          "Custom fit for natural appearance",
        ]}
        process={[
          {
            title: "Consultation & Exam",
            description:
              "We'll examine your mouth, discuss your options, and take impressions. Walk-ins welcome or schedule ahead.",
          },
          {
            title: "Custom Fabrication",
            description:
              "Your dentures are crafted right here in our on-site lab — no sending work away and waiting weeks.",
          },
          {
            title: "Fitting & Adjustment",
            description:
              "We ensure your dentures fit perfectly and look natural. Adjustments are made on the spot.",
          },
          {
            title: "Walk Out Smiling",
            description:
              "Many patients leave with their new dentures the same day. We're here for any follow-up adjustments.",
          },
        ]}
        faqs={[
          {
            question: "Can I really get dentures the same day?",
            answer:
              "In many cases, yes. Because we have an on-site denture lab, we can fabricate and fit dentures much faster than offices that rely on outside labs. Immediate dentures are placed the same day as extractions. For other denture types, we'll give you a realistic timeline at your consultation.",
          },
          {
            question: "How much do dentures cost at Saltz Dental?",
            answer:
              "Our prices are up to 50% less than the average dental office. The exact cost depends on the type of dentures you need (full, partial, implant-supported, etc.). We accept Blue Shield, Delta Dental, and CareCredit financing. Call us for a free cost estimate.",
          },
          {
            question: "Do you repair dentures?",
            answer:
              "Yes! Our on-site lab handles denture repairs, relines, and adjustments — often while you wait. Don't suffer with broken or ill-fitting dentures. Come in any time Mon–Sat.",
          },
          {
            question: "How long do dentures last?",
            answer:
              "With proper care, quality dentures typically last 5-8 years. However, your mouth changes over time, so periodic relines and adjustments help maintain a good fit. We're always here for follow-up care.",
          },
          {
            question: "Will my dentures look natural?",
            answer:
              "Absolutely. Our experienced lab technicians craft dentures that match your natural appearance. We work with you to choose the right shade, size, and shape of teeth for a smile that looks and feels like your own.",
          },
        ]}
        relatedServices={[
          { name: "Tooth Extractions", slug: "extractions" },
          { name: "Crowns & Bridges", slug: "crowns-bridges" },
          { name: "Cosmetic Bonding", slug: "cosmetic-bonding" },
        ]}
      />
      <CTASection
        title="Ready for Your New Smile?"
        subtitle="Walk in or request an appointment. Same-day dentures available from our on-site lab."
      />
    </>
  );
}
