"use client";

import { motion } from "framer-motion";
import { PRACTICE } from "@/lib/constants";
import Button from "@/components/ui/Button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function CTASection({
  title = "Ready to Get Started?",
  subtitle = "Request an appointment today or walk in any time Mon–Sat. Our team of 10 dentists is here to help.",
  dark = true,
}: CTASectionProps) {
  if (dark) {
    return (
      <section className="py-20 lg:py-24 bg-navy-900 noise-overlay relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-600/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-600/5 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
              {title}
            </h2>
            <p className="mt-4 text-lg text-navy-200 max-w-2xl mx-auto">
              {subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/contact" size="lg">
                Request Appointment
              </Button>
              <Button href={PRACTICE.phoneHref} variant="white" size="lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                Call {PRACTICE.phone}
              </Button>
            </div>
            <p className="mt-6 text-sm text-navy-400">
              Walk-ins welcome Mon–Sat, 8 AM – 3 PM &nbsp;|&nbsp; No insurance? No problem — budget plans available
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-teal-50 to-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900">
            {title}
          </h2>
          <p className="mt-4 text-lg text-navy-600 max-w-2xl mx-auto">{subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" size="lg">
              Request Appointment
            </Button>
            <Button href={PRACTICE.phoneHref} variant="outline" size="lg">
              Call {PRACTICE.phone}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
