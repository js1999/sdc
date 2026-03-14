"use client";

import { motion } from "framer-motion";
import { PRACTICE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import AppointmentForm from "@/components/forms/AppointmentForm";

interface FAQ {
  question: string;
  answer: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  process: ProcessStep[];
  faqs: FAQ[];
  priceNote?: string;
  badge?: string;
  relatedServices?: { name: string; slug: string }[];
}

function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <details
          key={i}
          className="group bg-white rounded-xl border border-navy-100/60 overflow-hidden"
        >
          <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-heading font-semibold text-navy-900 hover:bg-navy-50 transition-colors">
            {faq.question}
            <svg
              className="w-5 h-5 text-navy-400 transition-transform group-open:rotate-180 flex-shrink-0 ml-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </summary>
          <div className="px-5 pb-5 text-navy-600 text-[0.935rem] leading-relaxed">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  features,
  process,
  faqs,
  priceNote,
  badge,
  relatedServices,
}: ServicePageTemplateProps) {
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
            {badge && (
              <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-sm font-bold font-heading rounded-full mb-4">
                {badge}
              </span>
            )}
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-lg text-navy-200 leading-relaxed">
              {subtitle}
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

      {/* Content */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg text-navy-700 leading-relaxed">{description}</p>

                {priceNote && (
                  <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <p className="text-amber-800 font-medium text-sm flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      {priceNote}
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-heading font-bold text-navy-900 mb-5">
                  What&apos;s Included
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-navy-100/60">
                      <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-navy-700 text-[0.935rem]">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-heading font-bold text-navy-900 mb-5">
                  What to Expect
                </h2>
                <div className="space-y-4">
                  {process.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center font-heading font-bold text-sm flex-shrink-0">
                        {i + 1}
                      </div>
                      <div className="pt-1">
                        <h3 className="font-heading font-semibold text-navy-900">{step.title}</h3>
                        <p className="text-navy-600 text-[0.935rem] mt-0.5">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* FAQs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-heading font-bold text-navy-900 mb-5">
                  Frequently Asked Questions
                </h2>
                <FAQAccordion faqs={faqs} />
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Form card */}
                <div className="bg-white rounded-2xl border border-navy-100/60 shadow-lg shadow-navy-900/5 p-6">
                  <h3 className="text-lg font-heading font-bold text-navy-900 mb-4">
                    Request an Appointment
                  </h3>
                  <AppointmentForm compact />
                </div>

                {/* Quick contact */}
                <div className="bg-navy-900 rounded-2xl p-6 text-center">
                  <p className="text-white font-heading font-semibold mb-2">
                    Prefer to call?
                  </p>
                  <a
                    href={PRACTICE.phoneHref}
                    className="text-2xl font-heading font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    {PRACTICE.phone}
                  </a>
                  <p className="text-navy-300 text-sm mt-2">
                    Mon–Sat, 8 AM – 3 PM
                  </p>
                  <p className="text-navy-400 text-xs mt-1">
                    Walk-ins always welcome
                  </p>
                </div>

                {/* Related services */}
                {relatedServices && relatedServices.length > 0 && (
                  <div className="bg-white rounded-2xl border border-navy-100/60 p-6">
                    <h3 className="text-sm font-heading font-semibold text-navy-500 uppercase tracking-wider mb-3">
                      Related Services
                    </h3>
                    <div className="space-y-2">
                      {relatedServices.map((s) => (
                        <a
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="block px-4 py-2.5 rounded-xl text-sm font-medium text-navy-700 hover:bg-navy-50 hover:text-navy-900 transition-colors"
                        >
                          {s.name} &rarr;
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
