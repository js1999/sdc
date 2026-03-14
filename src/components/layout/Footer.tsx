import Link from "next/link";
import { PRACTICE, NAV_LINKS, SERVICES, INSURANCE_PROVIDERS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-200 noise-overlay">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center font-heading font-bold text-lg text-white">
                S
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-white">Saltz Dental</div>
                <div className="text-xs text-navy-400">Chester, PA</div>
              </div>
            </div>
            <p className="text-sm text-navy-300 leading-relaxed mb-6">
              Affordable, quality dental care for the Delaware Valley since 1991.
              10 dentists on staff. Walk-ins welcome.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={PRACTICE.phoneHref}
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-amber-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                {PRACTICE.phone}
              </a>
              <a
                href={`mailto:${PRACTICE.email}`}
                className="inline-flex items-center gap-2 text-sm text-navy-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                {PRACTICE.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Location */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Hours & Location
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-white font-medium">Monday – Saturday</p>
                <p className="text-navy-300">8:00 AM – 3:00 PM</p>
              </div>
              <div>
                <p className="text-white font-medium">Sunday</p>
                <p className="text-navy-300">Closed</p>
              </div>
              <div className="pt-2">
                <p className="text-navy-300 leading-relaxed">
                  {PRACTICE.address.street}<br />
                  {PRACTICE.address.city}, {PRACTICE.address.state} {PRACTICE.address.zip}
                </p>
              </div>
              <a
                href={PRACTICE.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 font-medium transition-colors"
              >
                Get Directions
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Insurance */}
        <div className="mt-12 pt-8 border-t border-navy-800/50">
          <div className="flex flex-wrap items-center gap-3 text-sm text-navy-400">
            <span className="font-medium text-navy-300">Accepted Insurance:</span>
            {INSURANCE_PROVIDERS.map((provider) => (
              <span
                key={provider}
                className="px-3 py-1 bg-navy-900/50 rounded-full text-navy-300 text-xs font-medium"
              >
                {provider}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-navy-500">
            &copy; {currentYear} {PRACTICE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-navy-500">
            <span className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Walk-ins welcome today
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
