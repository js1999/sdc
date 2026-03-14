"use client";

import { motion } from "framer-motion";
import { PRACTICE, DIFFERENTIATORS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const teamMembers = Array.from({ length: 10 }, (_, i) => ({
  name: `Dr. ${["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"][i]}`,
  role: i === 0 ? "Lead Dentist" : "General Dentist",
  initials: ["SM", "JO", "WI", "BR", "JN", "GA", "MI", "DA", "RO", "MA"][i],
}));

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-navy-900 noise-overlay overflow-hidden">
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
            <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-sm font-bold font-heading rounded-full mb-4">
              Since 1991
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight">
              34 Years of Smiles in Chester
            </h1>
            <p className="mt-4 text-lg text-navy-200 leading-relaxed">
              What started as a simple mission — make dental care affordable and
              accessible — has grown into one of the Delaware Valley&apos;s most trusted
              dental practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="prose prose-lg"
            >
              <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-navy-700 text-[1.05rem] leading-relaxed">
                <p>
                  Founded in {PRACTICE.founded}, {PRACTICE.name} was built on a belief
                  that everyone deserves access to quality dental care — regardless of
                  their budget or insurance status.
                </p>
                <p>
                  Over three decades later, that mission hasn&apos;t changed. We&apos;ve
                  grown from a small practice into a full-service dental center with{" "}
                  {PRACTICE.dentistCount} experienced dentists and our own on-site denture
                  lab. But we&apos;ve never lost sight of what matters most: treating
                  every patient with respect, honesty, and genuine care.
                </p>
                <p>
                  Our on-site denture lab sets us apart from virtually every dental office
                  in the region. By keeping everything in-house, we can offer same-day
                  dentures and repairs — and pass significant savings on to our patients.
                  It&apos;s one of the reasons our prices are up to 50% less than the
                  average dental office.
                </p>
                <p>
                  We&apos;re proud to serve Chester and the surrounding Delaware Valley
                  communities. Many of our patients have been with us for decades, and
                  we&apos;ve cared for multiple generations of the same families. That kind
                  of trust isn&apos;t built overnight — it&apos;s earned, one patient at a
                  time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white noise-overlay">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What Sets Us Apart"
            title="Built on Trust, Driven by Value"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFFERENTIATORS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-cream rounded-2xl p-6 border border-navy-100/40"
              >
                <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-navy-600 text-[0.935rem] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Team"
            title="10 Experienced Dentists Ready to Help"
            subtitle="Our team brings decades of combined experience across all areas of general and restorative dentistry."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center text-white font-heading font-bold text-lg mb-3">
                  {member.initials}
                </div>
                <h3 className="font-heading font-semibold text-navy-900 text-sm">
                  {member.name}
                </h3>
                <p className="text-xs text-navy-500 mt-0.5">{member.role}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-navy-500 mt-8">
            Team photos coming soon. Visit us to meet our friendly team in person!
          </p>
        </div>
      </section>
    </>
  );
}
