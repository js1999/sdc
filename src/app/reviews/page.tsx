import { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import ReviewsContent from "./ReviewsContent";

export const metadata: Metadata = {
  title: "Patient Reviews | See What Our Patients Say",
  description:
    "Read reviews from real patients at Saltz Dental Center in Chester, PA. 170+ reviews, 4-star rating. See why thousands trust us for affordable dental care.",
};

export default function ReviewsPage() {
  return (
    <>
      <ReviewsContent />
      <CTASection
        title="Ready to Experience the Difference?"
        subtitle="Join thousands of patients who trust Saltz Dental for quality, affordable care."
      />
    </>
  );
}
