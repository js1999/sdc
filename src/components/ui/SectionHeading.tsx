"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} mb-12`}
    >
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold font-heading tracking-wide uppercase mb-4 ${
            light
              ? "bg-white/10 text-teal-300"
              : "bg-teal-50 text-teal-700 border border-teal-200"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold leading-tight tracking-tight ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-navy-200" : "text-navy-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
