"use client";

import { motion } from "framer-motion";
import { PRACTICE, INSURANCE_PROVIDERS } from "@/lib/constants";
import Button from "@/components/ui/Button";

const checklist = [
  "A valid photo ID (driver's license, state ID, or passport)",
  "Your insurance card (if applicable)",
  "A list of current medications",
  "Any relevant dental records or X-rays",
  "Payment method (cash, card, or CareCredit)",
];

const firstVisitSteps = [
  {
    title: "Check In",
    description: "Arrive at our office and let the front desk know you're here. Walk-ins welcome — no prior appointment needed.",
  },
  {
    title: "Paperwork",
    description: "Fill out a brief new patient form. This takes about 5 minutes and covers your medical history and dental concerns.",
  },
  {
    title: "Exam & Consultation",
    description: "One of our 10 dentists will examine your teeth, discuss any concerns, and take X-rays if needed.",
  },
  {
    title: "Treatment Plan",
    description: "We'll explain your options clearly, including costs upfront. No surprises, no pressure. You decide what's right for you.",
  },
  {
    title: "Treatment (if ready)",
    description: "Many procedures can begin the same day — including dentures from our on-site lab. Or schedule a follow-up that works for you.",
  },
];

export default function NewPatientsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-navy-900 noise-overlay overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-600/10 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight">
              Welcome to {PRACTICE.shortName}
            </h1>
            <p className="mt-4 text-lg text-navy-200 leading-relaxed">
              Your first visit should be easy, comfortable, and stress-free. Here&apos;s
              everything you need to know before you walk through our doors.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Request Appointment
              </Button>
              <Button href={PRACTICE.phoneHref} variant="white" size="lg">
                Call {PRACTICE.phone}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-bold font-heading rounded-full border border-teal-200 mb-4">
                Checklist
              </span>
              <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
                What to Bring
              </h2>
              <div className="space-y-3">
                {checklist.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 border border-navy-100/60"
                  >
                    <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-navy-700">{item}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 text-sm text-navy-500">
                Don&apos;t have everything on this list? Come anyway! We can work with what you have.
              </p>
            </motion.div>

            {/* First Visit Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-sm font-bold font-heading rounded-full border border-amber-200 mb-4">
                Your First Visit
              </span>
              <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
                What to Expect
              </h2>
              <div className="space-y-4">
                {firstVisitSteps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center font-heading font-bold text-xs flex-shrink-0">
                        {i + 1}
                      </div>
                      {i < firstVisitSteps.length - 1 && (
                        <div className="w-px flex-1 bg-navy-200 mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-heading font-semibold text-navy-900">
                        {step.title}
                      </h3>
                      <p className="text-navy-600 text-[0.935rem] mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance & Financing */}
      <section className="py-16 lg:py-24 bg-white noise-overlay">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-bold font-heading rounded-full border border-teal-200 mb-4">
                Affordable Care
              </span>
              <h2 className="text-3xl font-heading font-bold text-navy-900 mb-4">
                Insurance & Financing
              </h2>
              <p className="text-lg text-navy-600 leading-relaxed mb-8">
                We accept most major insurance plans and offer flexible financing to
                make dental care accessible to everyone.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {INSURANCE_PROVIDERS.map((provider) => (
                  <div
                    key={provider}
                    className="px-8 py-4 bg-navy-50 rounded-xl border border-navy-100 text-navy-800 font-heading font-semibold"
                  >
                    {provider}
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 lg:p-8 text-left">
                <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                  No Insurance? No Problem.
                </h3>
                <p className="text-navy-700 leading-relaxed mb-4">
                  Our prices are already up to 50% less than the average dental office.
                  We also offer budget payment plans and accept CareCredit for even more
                  flexibility. Don&apos;t let cost keep you from getting the dental care
                  you need.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button href="/contact" size="sm">
                    Ask About Payment Plans
                  </Button>
                  <Button href={PRACTICE.phoneHref} variant="outline" size="sm">
                    Call to Discuss Options
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
