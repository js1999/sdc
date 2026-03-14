"use client";

import { motion } from "framer-motion";
import { PRACTICE } from "@/lib/constants";

export default function MapSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-navy-100/60 shadow-sm h-80 lg:h-full min-h-[320px]"
          >
            <iframe
              src={PRACTICE.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Saltz Dental Center location"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
              Visit Us in Chester
            </h2>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-navy-900">Address</h3>
                  <p className="text-navy-600 mt-0.5">{PRACTICE.address.full}</p>
                  <a
                    href={PRACTICE.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-teal-600 font-medium hover:underline mt-1 inline-block"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-navy-900">Phone</h3>
                  <a href={PRACTICE.phoneHref} className="text-navy-600 hover:text-teal-600 transition-colors mt-0.5 block">
                    {PRACTICE.phone}
                  </a>
                  <p className="text-sm text-navy-500 mt-0.5">Toll-free: {PRACTICE.phoneTollFree}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-navy-900">Hours</h3>
                  <div className="mt-1 space-y-0.5">
                    <p className="text-navy-600 text-sm">
                      <span className="font-medium">Mon – Sat:</span> 8:00 AM – 3:00 PM
                    </p>
                    <p className="text-navy-600 text-sm">
                      <span className="font-medium">Sunday:</span> Closed
                    </p>
                  </div>
                  <p className="text-sm text-teal-600 font-medium mt-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                    Walk-ins welcome — no appointment needed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
