export const PRACTICE = {
  name: "The Saltz Dental Center",
  shortName: "Saltz Dental",
  tagline: "Affordable Dental Care. Walk-Ins Welcome. Same-Day Dentures.",
  description:
    "Serving Chester & the Delaware Valley for over 34 years. 10 experienced dentists, on-site denture lab, and prices up to 50% less than the average dental office.",
  phone: "(610) 874-4316",
  phoneTollFree: "(800) 523-7230",
  phoneHref: "tel:+16108744316",
  email: "saltzdentalcenter@gmail.com",
  address: {
    street: "616 Avenue of the States",
    city: "Chester",
    state: "PA",
    zip: "19013",
    full: "616 Avenue of the States, Chester, PA 19013",
  },
  googleMapsUrl:
    "https://www.google.com/maps/place/The+Saltz+Dental+Center/@39.8497,-75.3596,17z",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.5!2d-75.362!3d39.8497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6e7c0d0a8e2e7%3A0x9b0d2f2e2e2e2e2e!2sThe%20Saltz%20Dental%20Center!5e0!3m2!1sen!2sus!4v1234567890",
  hours: [
    { day: "Monday", hours: "8:00 AM – 3:00 PM" },
    { day: "Tuesday", hours: "8:00 AM – 3:00 PM" },
    { day: "Wednesday", hours: "8:00 AM – 3:00 PM" },
    { day: "Thursday", hours: "8:00 AM – 3:00 PM" },
    { day: "Friday", hours: "8:00 AM – 3:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 3:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  yearsInBusiness: 34,
  dentistCount: 10,
  founded: 1991,
  url: "https://www.saltzdentalcenter.com",
} as const;

export const SERVICES = [
  {
    name: "Dentures",
    slug: "dentures",
    shortDescription: "Full, partial & immediate dentures crafted in our on-site lab. Same-day service available.",
    icon: "dentures",
    featured: true,
  },
  {
    name: "Tooth Extractions",
    slug: "extractions",
    shortDescription: "Gentle, affordable tooth extractions with options for same-day treatment.",
    icon: "extraction",
    featured: true,
  },
  {
    name: "Crowns & Bridges",
    slug: "crowns-bridges",
    shortDescription: "Restore damaged or missing teeth with durable, natural-looking crowns and bridges.",
    icon: "crown",
    featured: true,
  },
  {
    name: "Root Canal Therapy",
    slug: "root-canals",
    shortDescription: "Save your natural tooth with gentle, modern root canal treatment.",
    icon: "rootcanal",
    featured: true,
  },
  {
    name: "Cosmetic Bonding",
    slug: "cosmetic-bonding",
    shortDescription: "Fix chips, gaps, and discoloration with quick, affordable cosmetic bonding.",
    icon: "cosmetic",
    featured: true,
  },
] as const;

export const DIFFERENTIATORS = [
  {
    title: "34+ Years of Experience",
    description: "Trusted by the Chester community since 1991. Thousands of happy patients served.",
    icon: "experience",
  },
  {
    title: "On-Site Denture Lab",
    description: "Same-day dentures, repairs, and relines. No waiting weeks — get your smile today.",
    icon: "lab",
  },
  {
    title: "Up to 50% Less",
    description: "Quality dental care at roughly half the cost of typical dental offices.",
    icon: "savings",
  },
  {
    title: "Walk-Ins Welcome",
    description: "No appointment needed. Open 6 days a week. 10 dentists on staff for minimal wait times.",
    icon: "walkin",
  },
] as const;

export const TESTIMONIALS = [
  {
    text: "I was nervous about getting dentures but the staff made me feel so comfortable. Had my new dentures the same day! Can't beat the price either.",
    author: "Maria G.",
    rating: 5,
    service: "Dentures",
  },
  {
    text: "Walk-in friendly and affordable. I had a tooth extracted and was out in under an hour. The dentist was gentle and explained everything clearly.",
    author: "James T.",
    rating: 5,
    service: "Extraction",
  },
  {
    text: "Been coming here for years. The prices are unbeatable and the quality is excellent. My whole family comes to Saltz Dental.",
    author: "Patricia L.",
    rating: 5,
    service: "General",
  },
  {
    text: "Needed emergency dental work and they took me right away as a walk-in. Professional, fast, and way more affordable than I expected.",
    author: "Robert K.",
    rating: 5,
    service: "Emergency",
  },
] as const;

export const INSURANCE_PROVIDERS = [
  "Blue Shield",
  "Delta Dental",
  "CareCredit",
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "New Patients", href: "/new-patients" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;
