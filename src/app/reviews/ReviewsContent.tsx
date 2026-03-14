"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import Button from "@/components/ui/Button";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? "text-amber-500" : "text-navy-200"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      ))}
    </div>
  );
}

const additionalReviews = [
  {
    text: "The best dental office I've ever been to. Quick service, friendly staff, and the prices are incredibly fair. I've recommended Saltz to all my friends and family.",
    author: "Diana S.",
    rating: 5,
    service: "General",
  },
  {
    text: "Had my dentures repaired while I waited — it took less than an hour. Other places wanted me to wait a week. This on-site lab is a game-changer.",
    author: "Frank M.",
    rating: 5,
    service: "Denture Repair",
  },
  {
    text: "As a senior on a fixed income, finding affordable dental care is tough. Saltz Dental made it possible for me to get the treatment I needed without breaking the bank.",
    author: "Helen W.",
    rating: 5,
    service: "General",
  },
  {
    text: "Came in as an emergency walk-in with a terrible toothache. They saw me right away, the dentist was compassionate and skilled. Highly recommend.",
    author: "Carlos R.",
    rating: 5,
    service: "Emergency",
  },
];

const allReviews = [...TESTIMONIALS, ...additionalReviews];

export default function ReviewsContent() {
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
              Patient Reviews
            </h1>
            <p className="mt-4 text-lg text-navy-200 leading-relaxed">
              Don&apos;t just take our word for it. See what thousands of patients
              have to say about their experience at Saltz Dental Center.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 bg-cream border-b border-navy-100/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-5">
              <div className="text-5xl font-heading font-bold text-navy-900">4.0</div>
              <div>
                <StarRating count={4} />
                <p className="text-sm text-navy-500 mt-1">Based on 170+ verified reviews</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.google.com/search?q=saltz+dental+center+chester+pa+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-navy-200 rounded-xl text-sm font-semibold text-navy-700 hover:bg-navy-50 transition-colors"
              >
                Google Reviews
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/the-saltz-dental-center-chester"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-navy-200 rounded-xl text-sm font-semibold text-navy-700 hover:bg-navy-50 transition-colors"
              >
                Yelp Reviews
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allReviews.map((review, i) => (
              <motion.div
                key={review.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-navy-100/60 p-7 shadow-sm"
              >
                <StarRating count={review.rating} />
                <blockquote className="mt-4 text-navy-700 text-[0.975rem] leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center text-teal-700 font-heading font-bold text-sm">
                      {review.author[0]}
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-navy-900 text-sm">
                        {review.author}
                      </div>
                      <div className="text-xs text-navy-500">Verified Patient</div>
                    </div>
                  </div>
                  <span className="text-xs text-navy-400 font-medium bg-navy-50 px-2.5 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Leave a Review CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-12 bg-white rounded-2xl border border-navy-100/60 p-8 text-center"
          >
            <h3 className="text-2xl font-heading font-bold text-navy-900 mb-2">
              Been a Patient? We&apos;d Love Your Feedback!
            </h3>
            <p className="text-navy-600 mb-6 max-w-lg mx-auto">
              Your review helps other families find quality, affordable dental care.
              It only takes a minute.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                href="https://www.google.com/search?q=saltz+dental+center+chester+pa+reviews"
                variant="primary"
                size="md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave a Google Review
              </Button>
              <Button
                href="https://www.yelp.com/biz/the-saltz-dental-center-chester"
                variant="outline"
                size="md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave a Yelp Review
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
