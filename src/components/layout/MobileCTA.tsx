"use client";

import { PRACTICE } from "@/lib/constants";
import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-white/95 backdrop-blur-md border-t border-navy-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3 safe-area-bottom">
        <div className="flex gap-3 max-w-lg mx-auto">
          <a
            href={PRACTICE.phoneHref}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-navy-900 text-white font-heading font-semibold rounded-xl text-sm transition-all active:scale-[0.98]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            Call Now
          </a>
          <Link
            href="/contact"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-amber-600 text-white font-heading font-semibold rounded-xl text-sm shadow-lg shadow-amber-600/20 transition-all active:scale-[0.98]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
