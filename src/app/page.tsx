import { Metadata } from "next";

// Home sections
import Hero from "./components/home/hero";
import About from "./components/home/about";
import DiscoverProperties from "./components/home/property-option"; // mentor / platform section
import Listing from "./components/home/property-list";
import Testimonials from "./components/home/testimonial";
import History from "./components/home/history";
import Calculator from "./components/home/calculator";
import Info from "./components/home/info";



// Global components


/* -------------------------------------
   METADATA — EUROPE DENTAL CLINIC
------------------------------------- */


export const metadata: Metadata = {
  metadataBase: new URL("https://rensource.energy"),

  title: {
    default: "RenSource Energy",
    template: "%s | RenSource Energy",
  },

  description:
    "RenSource Energy is Africa’s commercial and industrial energy partner delivering solar, hybrid, and fully financed power solutions to businesses. Proven in Nigeria and expanding across Africa.",

  keywords: [
    "RenSource Energy",
    "solar energy Nigeria",
    "commercial solar Nigeria",
    "industrial solar Africa",
    "solar PPA Africa",
    "hybrid power systems Africa",
    "solar + BESS Nigeria",
    "energy solutions for businesses",
    "renewable energy Africa",
    "diesel replacement energy Nigeria",
    "commercial energy solutions Africa",
  ],

  openGraph: {
    title: "RenSource Energy",
    description:
      "Powering African industry with reliable solar, hybrid, and fully financed energy solutions. Proven in Nigeria. Ready for Africa.",
    url: "https://rensource.energy",
    siteName: "RenSource Energy",
    type: "website",
    images: [
      {
        url: "https://rensource.energy/og/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "RenSource Energy — Powering African Industry",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RenSource Energy",
    description:
      "Reliable solar, hybrid, and financed power solutions for African businesses.",
    images: ["https://rensource.energy/og/og-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://rensource.energy",
  },
};
/* -------------------------------------
   HOME PAGE
------------------------------------- */
export default function Home() {
  return (
    <main>
      {/* Audio welcome — brief, professional, plays once per visit */}
      

      {/* Core hero & positioning */}
      <Hero />
      <About />

      {/* Platform / WhatsApp / AI section */}
      <DiscoverProperties />

      {/* Workforce scope / industries / roles */}
      <Listing />

      {/* Trust & social proof */}
      <Testimonials />

      {/* Company journey, capability & infrastructure */}
      <History />
      <Calculator />
      <Info />
      
    </main>
  );
}
