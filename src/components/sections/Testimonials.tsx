"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-amber-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Patient Reviews"
          title="Hear from Our Patients"
          subtitle="Thousands of patients trust Saltz Dental for quality, affordable care. Here's what some of them have to say."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-navy-100/60 p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <StarRating count={testimonial.rating} />
              <blockquote className="mt-4 text-navy-700 text-[0.975rem] leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center text-teal-700 font-heading font-bold text-sm">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-navy-900 text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-navy-500">Verified Patient</div>
                  </div>
                </div>
                <span className="text-xs text-navy-400 font-medium bg-navy-50 px-2.5 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 bg-navy-900 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="text-4xl font-heading font-bold text-white">4.0</div>
            <div>
              <StarRating count={4} />
              <p className="text-sm text-navy-300 mt-1">Based on 170+ patient reviews</p>
            </div>
          </div>
          <a
            href="https://www.google.com/search?q=saltz+dental+center+chester+pa+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-900 font-heading font-semibold rounded-xl hover:bg-cream transition-colors text-sm"
          >
            Read All Reviews
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
