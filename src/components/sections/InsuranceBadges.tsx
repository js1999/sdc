"use client";

import { motion } from "framer-motion";
import { INSURANCE_PROVIDERS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function InsuranceBadges() {
  return (
    <section className="py-16 lg:py-20 bg-white border-y border-navy-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl font-heading font-bold text-navy-900 mb-2">
              Insurance & Financing Accepted
            </h3>
            <p className="text-navy-600">
              We work with major insurance providers and offer flexible payment plans through CareCredit.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {INSURANCE_PROVIDERS.map((provider) => (
              <div
                key={provider}
                className="px-6 py-3 bg-navy-50 rounded-xl border border-navy-100 text-navy-700 font-heading font-semibold text-sm"
              >
                {provider}
              </div>
            ))}
            <Button href="/new-patients" variant="ghost" size="sm">
              See all options &rarr;
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
