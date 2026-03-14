import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";
import { PRACTICE } from "@/lib/constants";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${PRACTICE.name} | Affordable Dentist in Chester, PA`,
    template: `%s | ${PRACTICE.shortName}`,
  },
  description: PRACTICE.description,
  keywords: [
    "dentist chester pa",
    "affordable dentures chester pa",
    "walk-in dentist near me",
    "same-day dentures",
    "tooth extraction chester pa",
    "dental office delaware county",
    "cheap dentist near me",
    "denture repair same day",
    "saltz dental center",
  ],
  openGraph: {
    title: `${PRACTICE.name} | Affordable Dentist in Chester, PA`,
    description: PRACTICE.description,
    url: PRACTICE.url,
    siteName: PRACTICE.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "US-PA",
    "geo.placename": "Chester",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTA />
        {/* Bottom padding on mobile for sticky CTA */}
        <div className="h-20 lg:h-0" />
      </body>
    </html>
  );
}
