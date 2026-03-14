"use client";

import { motion } from "framer-motion";
import { PRACTICE } from "@/lib/constants";
import AppointmentForm from "@/components/forms/AppointmentForm";

export default function ContactContent() {
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
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-navy-200 leading-relaxed">
              Request an appointment below, give us a call, or just walk in.
              We&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-3 bg-white rounded-2xl border border-navy-100/60 shadow-lg shadow-navy-900/5 p-6 sm:p-8"
            >
              <h2 className="text-2xl font-heading font-bold text-navy-900 mb-2">
                Request an Appointment
              </h2>
              <p className="text-navy-600 mb-6">
                Fill out the form below and we&apos;ll call you within 1 business hour to confirm.
              </p>
              <AppointmentForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Phone */}
              <div className="bg-white rounded-2xl border border-navy-100/60 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-navy-900">Phone</h3>
                </div>
                <a
                  href={PRACTICE.phoneHref}
                  className="text-xl font-heading font-bold text-navy-900 hover:text-teal-600 transition-colors"
                >
                  {PRACTICE.phone}
                </a>
                <p className="text-sm text-navy-500 mt-1">
                  Toll-free: {PRACTICE.phoneTollFree}
                </p>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl border border-navy-100/60 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-navy-900">Address</h3>
                </div>
                <p className="text-navy-700">{PRACTICE.address.full}</p>
                <a
                  href={PRACTICE.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-teal-600 font-medium hover:underline mt-2 inline-block"
                >
                  Get Directions &rarr;
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl border border-navy-100/60 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-navy-900">Hours</h3>
                </div>
                <div className="space-y-1">
                  {PRACTICE.hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-navy-600">{h.day}</span>
                      <span className={`font-medium ${h.hours === "Closed" ? "text-red-500" : "text-navy-800"}`}>
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-teal-600 font-medium mt-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                  Walk-ins welcome — no appointment needed
                </p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl border border-navy-100/60 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-navy-900">Email</h3>
                </div>
                <a
                  href={`mailto:${PRACTICE.email}`}
                  className="text-navy-700 hover:text-teal-600 transition-colors"
                >
                  {PRACTICE.email}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          <div className="rounded-2xl overflow-hidden border border-navy-100/60 shadow-sm h-80 lg:h-[400px]">
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
          </div>
        </div>
      </section>
    </>
  );
}
