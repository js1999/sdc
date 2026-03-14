import { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Root Canal Therapy Chester PA | Gentle & Affordable Treatment",
  description:
    "Gentle, affordable root canal therapy in Chester, PA. Save your natural tooth. Walk-ins welcome. Prices up to 50% less than average dental offices.",
};

export default function RootCanalsPage() {
  return (
    <>
      <ServicePageTemplate
        title="Root Canal Therapy"
        subtitle="Save your natural tooth with gentle, modern root canal treatment. Less painful than you think — and far more affordable."
        description="A root canal treats infection deep inside a tooth, saving it from extraction. Modern root canal therapy is nothing like the old days — it's comparable to getting a filling. Our experienced dentists use effective anesthesia and gentle techniques to ensure your comfort throughout the procedure."
        priceNote="Root canal treatment at Saltz Dental is priced at up to 50% less than the average dental office. Don't let cost prevent you from saving your tooth."
        features={[
          "Anterior root canal therapy",
          "Posterior root canal therapy",
          "Retreatment of failed root canals",
          "Effective local anesthesia",
          "Modern rotary instruments",
          "Same-day emergency treatment available",
          "Crown placement after root canal",
          "Follow-up care included",
        ]}
        process={[
          {
            title: "Diagnosis",
            description: "We take X-rays and examine the tooth to confirm infection and determine the best treatment approach.",
          },
          {
            title: "Numbing",
            description: "Thorough local anesthesia ensures you're completely comfortable. Most patients say it feels just like getting a filling.",
          },
          {
            title: "Treatment",
            description: "We remove the infected tissue from inside the tooth, clean and shape the canals, then seal them to prevent reinfection.",
          },
          {
            title: "Restoration",
            description: "The tooth is restored with a filling and typically a crown for long-term protection and strength.",
          },
        ]}
        faqs={[
          {
            question: "Are root canals painful?",
            answer: "Modern root canals are much gentler than their reputation suggests. With effective anesthesia, most patients say the procedure feels similar to getting a filling. The infection causing your toothache is usually far more painful than the treatment itself.",
          },
          {
            question: "How long does a root canal take?",
            answer: "Most root canals can be completed in a single visit of about 60-90 minutes. Some complex cases may require a second visit.",
          },
          {
            question: "Is it better to extract the tooth instead?",
            answer: "When possible, saving your natural tooth is almost always the better option. Natural teeth function better, maintain your jawbone, and a root canal plus crown is often more cost-effective than extraction plus replacement.",
          },
          {
            question: "Will I need a crown after a root canal?",
            answer: "In most cases, yes. A crown protects the treated tooth and restores its full strength. We'll discuss this with you and can often start the crown process right away.",
          },
        ]}
        relatedServices={[
          { name: "Crowns & Bridges", slug: "crowns-bridges" },
          { name: "Tooth Extractions", slug: "extractions" },
          { name: "Cosmetic Bonding", slug: "cosmetic-bonding" },
        ]}
      />
      <CTASection />
    </>
  );
}
