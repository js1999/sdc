"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PRACTICE, NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Pages that have a dark hero section — header starts transparent with white text.
  // All other pages start in scrolled (white bg) mode immediately.
  const hasDarkHero = pathname === "/" || pathname.startsWith("/services/") || pathname === "/about" || pathname === "/new-patients" || pathname === "/contact" || pathname === "/reviews";
  const showScrolled = scrolled || !hasDarkHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-navy-900/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-heading font-bold text-lg transition-colors ${showScrolled ? "bg-navy-900 text-white" : "bg-white text-navy-900"}`}>
              S
            </div>
            <div>
              <div className={`font-heading font-bold text-lg leading-tight transition-colors ${showScrolled ? "text-navy-900" : "text-white"}`}>
                Saltz Dental
              </div>
              <div className={`text-xs font-medium transition-colors ${showScrolled ? "text-navy-500" : "text-navy-200"}`}>
                Chester, PA
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-[0.935rem] font-medium transition-colors ${
                  showScrolled
                    ? "text-navy-700 hover:text-navy-900 hover:bg-navy-50"
                    : "text-navy-100 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={PRACTICE.phoneHref}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                showScrolled ? "text-navy-700 hover:text-navy-900" : "text-navy-200 hover:text-white"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              {PRACTICE.phone}
            </a>
            <Button href="/contact" size="sm">
              Request Appointment
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
              showScrolled ? "text-navy-900 hover:bg-navy-50" : "text-white hover:bg-white/10"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${showScrolled ? "bg-navy-900" : "bg-white"} ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${showScrolled ? "bg-navy-900" : "bg-white"} ${
                  isOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${showScrolled ? "bg-navy-900" : "bg-white"} ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-20 px-6 pb-8 h-full flex flex-col">
                <nav className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-lg font-heading font-medium text-navy-800 hover:text-navy-900 hover:bg-navy-50 rounded-xl transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-navy-100 space-y-4">
                  <Button href="/contact" size="lg" className="w-full" onClick={() => setIsOpen(false)}>
                    Request Appointment
                  </Button>
                  <a
                    href={PRACTICE.phoneHref}
                    className="flex items-center justify-center gap-2 py-3 text-navy-700 font-semibold hover:text-navy-900 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    Call {PRACTICE.phone}
                  </a>
                </div>

                <div className="mt-auto pt-6 border-t border-navy-100">
                  <p className="text-sm text-navy-500">
                    {PRACTICE.address.full}
                  </p>
                  <p className="text-sm text-navy-500 mt-1">
                    Mon–Sat: 8:00 AM – 3:00 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
