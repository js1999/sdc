"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const serviceIcons: Record<string, React.ReactNode> = {
  dentures: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
    </svg>
  ),
  extraction: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 0 1-3.18-.04L12 15.58l-1.35 1.35a2.25 2.25 0 0 1-3.18.04L5 14.5" />
    </svg>
  ),
  crown: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  ),
  rootcanal: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  ),
  cosmetic: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  ),
};

interface ServicesGridProps {
  hideHeading?: boolean;
}

export default function ServicesGrid({ hideHeading = false }: ServicesGridProps) {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeading && (
          <SectionHeading
            badge="Our Services"
            title="Comprehensive Dental Care at Affordable Prices"
            subtitle="From same-day dentures to cosmetic bonding, we provide a full range of dental services — all at up to 50% less than the average dental office."
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link href={`/services/${service.slug}`} className="group block h-full">
                <div className="relative h-full bg-white rounded-2xl border border-navy-100/60 p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-navy-900/5 hover:-translate-y-1 hover:border-teal-200 overflow-hidden">
                  {/* Hover accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="w-14 h-14 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors">
                    {serviceIcons[service.icon]}
                  </div>

                  <h3 className="text-xl font-heading font-bold text-navy-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-navy-600 text-[0.935rem] leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal-600 group-hover:text-teal-700 transition-colors">
                    Learn more
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>

                  {service.slug === "dentures" && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                        Same-Day
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}

          {/* General/Walk-in card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: SERVICES.length * 0.08 }}
          >
            <Link href="/contact" className="group block h-full">
              <div className="relative h-full bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="w-14 h-14 rounded-xl bg-white/10 text-amber-400 flex items-center justify-center mb-5">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  Walk-In Care
                </h3>

                <p className="text-navy-200 text-[0.935rem] leading-relaxed mb-4">
                  No appointment? No problem. Walk in Mon–Sat and see one of our 10 dentists with minimal wait time.
                </p>

                <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">
                  Visit us today
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
