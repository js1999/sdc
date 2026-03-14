import { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import NewPatientsContent from "./NewPatientsContent";

export const metadata: Metadata = {
  title: "New Patients | What to Expect at Your First Visit",
  description:
    "New to Saltz Dental? Learn what to expect, what to bring, accepted insurance, and financing options. Walk-ins welcome in Chester, PA.",
};

export default function NewPatientsPage() {
  return (
    <>
      <NewPatientsContent />
      <CTASection
        title="Ready to Visit?"
        subtitle="Walk in any time Mon–Sat or request an appointment. We look forward to meeting you."
      />
    </>
  );
}
