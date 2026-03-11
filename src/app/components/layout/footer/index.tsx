"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#1A2B4C] text-white overflow-hidden">

      {/* GLOW EFFECTS */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] bg-[#D4A13E]/10 blur-[120px] rounded-full"/>
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] bg-[#D4A13E]/10 blur-[120px] rounded-full"/>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-24">

        {/* ================= TOP CTA ================= */}

        <div className="border-b border-white/10 pb-16 mb-16">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#D4A13E] leading-tight">
                Power Your Business <br /> Without Diesel.
              </h2>

              <p className="mt-4 text-white/70 max-w-md">
                Rensource enables commercial and industrial businesses transition to reliable energy through solar and battery solutions, providing upfront financing that converts capital expenditure into operating expenses via a predictable monthly energy charge, improving cash flow management and overall profitability.
              </p>
            </div>

            <div className="md:text-right">
              <Link
                href="/contact"
                className="
                inline-flex
                items-center
                gap-2
                px-8
                py-4
                bg-[#D4A13E]
                text-black
                rounded-full
                text-sm
                tracking-[0.28em]
                uppercase
                hover:bg-[#c89435]
                transition
                "
              >
                Start Your Energy Transition
                <ArrowRight size={16}/>
              </Link>
            </div>

          </div>
        </div>

        {/* ================= MAIN FOOTER ================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-14">

          {/* BRAND */}

          <div className="space-y-6 lg:col-span-2">

            <Image
              src="/images/logo/ren-whites.png"
              alt="RenSource Energy"
              width={160}
              height={40}
            />

            <p className="text-white/70 text-sm max-w-sm leading-relaxed">
              RenSource Energy is Africa’s commercial and industrial energy
              partner delivering solar, hybrid and fully financed power
              solutions to businesses across the continent.
            </p>

            <p className="text-white/40 text-xs">
              Proven in Nigeria. Expanding across Africa.
            </p>

          </div>

          {/* COMPANY */}

          <div>
            <h4 className="text-xs tracking-[0.35em] uppercase text-white/40 mb-6">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-white/70">

              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Rensource
                </Link>
              </li>

              <li>
                <Link href="/partners" className="hover:text-white transition">
                  Partners
                </Link>
              </li>

              <li>
                <Link href="/impact" className="hover:text-white transition">
                  Impact
                </Link>
              </li>

              <li>
                <Link href="/insights" className="hover:text-white transition">
                  Insights
                </Link>
              </li>

            </ul>
          </div>

          {/* SOLUTIONS */}

          <div>
            <h4 className="text-xs tracking-[0.35em] uppercase text-white/40 mb-6">
              Solutions
            </h4>

            <ul className="space-y-3 text-sm text-white/70">

              <li>
                <Link href="/solutions/solar" className="hover:text-white transition">
                  Solar Systems
                </Link>
              </li>

              <li>
                <Link href="/solutions/hybrid" className="hover:text-white transition">
                  Hybrid Power
                </Link>
              </li>

              <li>
                <Link href="/solutions/bess" className="hover:text-white transition">
                  Solar + BESS
                </Link>
              </li>

              <li>
                <Link href="/solutions/ppa" className="hover:text-white transition">
                  Power Purchase Agreements
                </Link>
              </li>

            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h4 className="text-xs tracking-[0.35em] uppercase text-white/40 mb-6">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-white/70">

              <div className="flex gap-3">
                <MapPin size={16} className="mt-1 text-[#D4A13E]" />
                <span>
                  Lagos, Nigeria
                </span>
              </div>

              <div className="flex gap-3">
                <Phone size={16} className="mt-1 text-[#D4A13E]" />
                <span>+234 XXX XXX XXXX</span>
              </div>

              <div className="flex gap-3">
                <Mail size={16} className="mt-1 text-[#D4A13E]" />
                <span>info@rensource.energy</span>
              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">

          <span>
            © {new Date().getFullYear()} RenSource Energy
          </span>

          <span className="mt-3 md:mt-0">
            Powering African Industry
          </span>

        </div>

      </div>
    </footer>
  );
}