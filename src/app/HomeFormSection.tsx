"use client";

import { motion } from "framer-motion";
import AppointmentForm from "@/components/forms/AppointmentForm";

export default function HomeFormSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold font-heading tracking-wide uppercase mb-4 bg-amber-100 text-amber-700 border border-amber-200">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 leading-tight">
              Request Your Appointment Today
            </h2>
            <p className="mt-4 text-lg text-navy-600 leading-relaxed">
              Fill out the quick form and our team will call you within 1 business
              hour to confirm your appointment. Prefer to walk in? We accept
              walk-ins Monday through Saturday.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: "clock", text: "We'll call you within 1 hour to confirm" },
                { icon: "shield", text: "Your information is private and secure" },
                { icon: "wallet", text: "Ask about our affordable payment plans" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-navy-700 text-[0.935rem]">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-navy-100/60 shadow-lg shadow-navy-900/5 p-6 sm:p-8"
          >
            <AppointmentForm compact />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
