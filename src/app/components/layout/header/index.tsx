"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import EnergyAssessmentModal from "../../../components/EnergyAssessmentModal";

/* -----------------------------
GREEN BRAND COLORS
------------------------------*/

const BRAND = {
  emerald: "#059669",
  green: "#10b981",
  light: "#ecfdf5",
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  /* Detect Scroll */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock Scroll on Mobile */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6">

          <div className="flex items-center justify-between h-[78px]">

            {/* LOGO */}

            <Link href="/" className="flex items-center">
              <Image
                src={
                  scrolled
                    ? "/images/logo/ren-dark.png"
                    : "/images/logo/ren-whites.png"
                }
                alt="RenSource Energy"
                width={140}
                height={36}
                priority
              />
            </Link>

            {/* DESKTOP NAV */}

            <nav
              className={`hidden lg:flex items-center gap-8 px-6 py-2 rounded-full transition ${
                scrolled
                  ? ""
                  : "bg-white/10 backdrop-blur-md border border-white/20"
              }`}
            >
              <NavItem href="/" scrolled={scrolled}>Home</NavItem>
              <NavItem href="/about" scrolled={scrolled}>About</NavItem>
              <NavItem href="/solutions" scrolled={scrolled}>Solutions</NavItem>
              <NavItem href="/projects" scrolled={scrolled}>Projects</NavItem>
              <NavItem href="/impact" scrolled={scrolled}>Impact</NavItem>
              <NavItem href="/future" scrolled={scrolled}>Our Future</NavItem>
              <NavItem href="/insights" scrolled={scrolled}>Insights</NavItem>
              <NavItem href="/contact" scrolled={scrolled}>Contact</NavItem>
            </nav>

            {/* CTA + MOBILE */}

            <div className="flex items-center gap-3">

              {/* CTA */}

              <button
                onClick={() => setModalOpen(true)}
                className={`
                hidden md:inline-flex
                items-center
                px-6 py-2.5
                text-[10px]
                tracking-[0.26em]
                uppercase
                rounded-full
                transition-all
                duration-300
                font-medium
                ${
                  scrolled
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-green-500 text-white hover:bg-green-600"
                }
                shadow-lg hover:shadow-xl
                `}
              >
                Energy Assessment
              </button>

              {/* MOBILE MENU BUTTON */}

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`
                lg:hidden
                h-10 w-10
                rounded-full
                flex items-center justify-center
                transition
                ${
                  scrolled
                    ? "bg-black/5 hover:bg-black/10"
                    : "bg-white/20 backdrop-blur"
                }
                `}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>

            </div>

          </div>
        </div>

        <EnergyAssessmentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />

      </header>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-emerald-900 text-white flex flex-col justify-center items-center space-y-8 text-base tracking-[0.22em] uppercase">

          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>

          <Link href="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link>

          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>

          <Link href="/impact" onClick={() => setMenuOpen(false)}>Impact</Link>

          <Link href="/future" onClick={() => setMenuOpen(false)}>Our Future</Link>

          <Link href="/insights" onClick={() => setMenuOpen(false)}>Insights</Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          {/* CTA */}

          <button
            onClick={() => {
              setMenuOpen(false);
              setModalOpen(true);
            }}
            className="
            mt-6
            px-7
            py-3
            rounded-full
            bg-green-500
            text-white
            text-[10px]
            tracking-[0.28em]
            font-medium
            hover:bg-green-600
            transition
            shadow-xl
            "
          >
            Energy Assessment
          </button>

        </div>
      )}

    </>
  );
}

/* NAV ITEM */

function NavItem({
  href,
  children,
  scrolled,
}: {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}) {

  return (
    <Link
      href={href}
      className={`
      relative
      text-[10px]
      tracking-[0.28em]
      uppercase
      font-medium
      transition
      ${
        scrolled
          ? "text-gray-700 hover:text-emerald-600"
          : "text-emerald-200 hover:text-white"
      }
      group
      `}
    >
      {children}

      <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full"/>

    </Link>
  );
}