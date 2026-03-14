import { Metadata } from "next";
import { PRACTICE } from "@/lib/constants";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Request an Appointment",
  description: `Contact ${PRACTICE.name} in Chester, PA. Request an appointment, get directions, or call ${PRACTICE.phone}. Walk-ins welcome Mon–Sat 8 AM – 3 PM.`,
};

export default function ContactPage() {
  return <ContactContent />;
}
