import { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Tooth Extractions Chester PA | Affordable & Gentle | Walk-Ins Welcome",
  description:
    "Gentle, affordable tooth extractions in Chester, PA. Walk-ins welcome. 10 experienced dentists. Prices up to 50% less. Same-day appointments available.",
};

export default function ExtractionsPage() {
  return (
    <>
      <ServicePageTemplate
        title="Gentle Tooth Extractions"
        subtitle="Affordable, stress-free tooth extractions by experienced dentists. Walk in or schedule ahead — we'll take care of you."
        description="Whether you need a simple extraction or a more complex surgical removal, our team of 10 experienced dentists ensures a comfortable experience. We use modern techniques and effective anesthesia so you feel minimal discomfort. Plus, if you need dentures afterward, our on-site lab means you won't be left without teeth."
        priceNote="Extractions at Saltz Dental are priced at up to 50% less than the average dental office. We accept insurance and offer payment plans through CareCredit."
        features={[
          "Simple tooth extractions",
          "Surgical extractions",
          "Wisdom tooth removal",
          "Emergency extractions (walk-in)",
          "Same-day denture options after extraction",
          "Effective local anesthesia",
          "Post-extraction care instructions",
          "Follow-up visits included",
        ]}
        process={[
          {
            title: "Assessment",
            description: "We'll examine the tooth, take any necessary X-rays, and explain your options clearly.",
          },
          {
            title: "Numbing & Comfort",
            description: "We apply effective local anesthesia so you feel comfortable throughout the procedure.",
          },
          {
            title: "Extraction",
            description: "The tooth is gently removed using modern techniques. Most simple extractions take just minutes.",
          },
          {
            title: "Aftercare",
            description: "We provide clear aftercare instructions and gauze. Need dentures? Our on-site lab can help the same day.",
          },
        ]}
        faqs={[
          {
            question: "Does a tooth extraction hurt?",
            answer: "We use effective local anesthesia to numb the area completely. You may feel pressure, but you should not feel pain. After the procedure, some soreness is normal and can be managed with over-the-counter pain relievers.",
          },
          {
            question: "How long does an extraction take?",
            answer: "A simple extraction typically takes just 15-30 minutes. Surgical extractions may take a bit longer. We work efficiently while prioritizing your comfort.",
          },
          {
            question: "Can I walk in for an extraction?",
            answer: "Yes! We accept walk-ins Monday through Saturday, 8 AM to 3 PM. If you're in pain, don't wait — come see us.",
          },
          {
            question: "What about replacing the tooth afterward?",
            answer: "We offer several replacement options including dentures (from our on-site lab), bridges, and more. We'll discuss your options before the extraction so you can plan ahead.",
          },
        ]}
        relatedServices={[
          { name: "Dentures", slug: "dentures" },
          { name: "Crowns & Bridges", slug: "crowns-bridges" },
          { name: "Root Canal Therapy", slug: "root-canals" },
        ]}
      />
      <CTASection />
    </>
  );
}
