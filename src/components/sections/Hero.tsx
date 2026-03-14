"use client";

import { motion } from "framer-motion";
import { PRACTICE } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract tooth/dental motif - subtle geometric shapes */}
        <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full border border-white/5 -translate-y-1/2" />
        <div className="absolute top-1/3 right-[15%] w-40 h-40 rounded-full border border-teal-500/10" />
        <div className="absolute bottom-1/4 left-[5%] w-32 h-32 rounded-full bg-teal-500/5" />
        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-600/5 to-transparent skew-x-[-12deg] translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-teal-300 font-medium border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Walk-ins welcome &mdash; Open today until 3 PM
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight"
          >
            Affordable Dental Care.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-400">
              Same-Day Dentures.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-navy-200 leading-relaxed max-w-2xl"
          >
            Serving Chester &amp; the Delaware Valley for over 34 years. 10 experienced
            dentists, an on-site denture lab, and prices up to{" "}
            <span className="text-amber-400 font-semibold">50% less</span> than the average dental office.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button href="/contact" size="lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              Request Appointment
            </Button>
            <Button href={PRACTICE.phoneHref} variant="white" size="lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              Call {PRACTICE.phone}
            </Button>
          </motion.div>

          {/* Trust Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-14 flex flex-wrap gap-x-8 gap-y-4"
          >
            {[
              { value: "34+", label: "Years in Business" },
              { value: "10", label: "Dentists on Staff" },
              { value: "50%", label: "Less Than Average" },
              { value: "6", label: "Days a Week" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-sm text-navy-300">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
