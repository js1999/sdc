"use client";

import { motion } from "framer-motion";
import { PRACTICE } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function ServicesHero() {
  return (
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
            Our Services
          </h1>
          <p className="mt-4 text-lg text-navy-200 leading-relaxed max-w-2xl">
            Quality dental care for the whole family at prices you can afford.
            Every service backed by 34+ years of experience and our team of 10 dentists — all at up to 50% less than the average dental office.
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
  );
}
