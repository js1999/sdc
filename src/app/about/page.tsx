import { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import { PRACTICE } from "@/lib/constants";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | 34+ Years Serving Chester & Delaware Valley",
  description: `Learn about ${PRACTICE.name} — 34+ years of affordable dental care in Chester, PA. 10 experienced dentists, on-site denture lab, and a commitment to our community.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <CTASection
        title="Join Our Family of Patients"
        subtitle="Walk in or request an appointment. We've been welcoming new patients for over 34 years."
      />
    </>
  );
}
