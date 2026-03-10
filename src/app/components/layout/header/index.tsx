"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import EnergyAssessmentModal from "../../../components/EnergyAssessmentModal";

/* -----------------------------
REN SOURCE BRAND COLORS
------------------------------*/

const BRAND = {
  indigo: "#1A2B4C",
  gold: "#D4A13E",
  sand: "#F5F0E8",
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
          <div className="flex items-center justify-between h-[90px]">

            {/* LOGO */}

            <Link href="/" className="flex items-center">
              <Image
                src={
                  scrolled
                    ? "/images/logo/ren-dark.png"
                    : "/images/logo/ren-whites.png"
                }
                alt="RenSource Energy"
                width={150}
                height={40}
                priority
              />
            </Link>

            {/* DESKTOP NAV */}

            <nav
              className={`hidden lg:flex items-center gap-12 px-8 py-3 rounded-full transition ${
                scrolled
                  ? ""
                  : "bg-black/10 backdrop-blur-md border border-white/10"
              }`}
            >
              <NavItem href="/" scrolled={scrolled}>
                Home
              </NavItem>

              <NavItem href="/about" scrolled={scrolled}>
                About
              </NavItem>

              <NavItem href="/solutions" scrolled={scrolled}>
                Solutions
              </NavItem>

              <NavItem href="/projects" scrolled={scrolled}>
                Project
              </NavItem>

              <NavItem href="/insights" scrolled={scrolled}>
                Insights
              </NavItem>

              

              <NavItem href="/contact" scrolled={scrolled}>
                Contact
              </NavItem>
            </nav>

            {/* CTA + MOBILE */}

            <div className="flex items-center gap-4">

              {/* CTA */}

              <button
 onClick={() => setModalOpen(true)}
 className={`
 hidden md:inline-flex
 items-center
 px-7 py-3
 text-[11px]
 tracking-[0.28em]
 uppercase
 rounded-full
 transition-all
 duration-300
 font-medium
 ${
   scrolled
     ? "bg-[#1A2B4C] text-white hover:bg-[#0f1d36]"
     : "bg-[#D4A13E] text-black hover:bg-[#c89435]"
 }
 shadow-lg
 hover:shadow-xl
 `}
>
 Energy Assessment
</button>

              {/* MOBILE MENU BUTTON */}

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`
                lg:hidden
                h-11 w-11
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
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
        <EnergyAssessmentModal
 open={modalOpen}
 onClose={() => setModalOpen(false)}
/>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
  <div className="fixed inset-0 z-40 bg-[#1A2B4C] text-white flex flex-col justify-center items-center space-y-10 text-lg tracking-[0.25em] uppercase">

    <Link href="/" onClick={() => setMenuOpen(false)}>
      Home
    </Link>

    <Link href="/about" onClick={() => setMenuOpen(false)}>
      About
    </Link>

    <Link href="/solutions" onClick={() => setMenuOpen(false)}>
      Solutions
    </Link>

    <Link href="/projects" onClick={() => setMenuOpen(false)}>
      Project
    </Link>

    <Link href="/contact" onClick={() => setMenuOpen(false)}>
      Contact
    </Link>

    {/* ENERGY ASSESSMENT BUTTON */}

    <button
      onClick={() => {
        setMenuOpen(false);
        setModalOpen(true);
      }}
      className="
        mt-6
        px-8
        py-4
        rounded-full
        bg-[#D4A13E]
        text-black
        text-[11px]
        tracking-[0.3em]
        font-medium
        hover:bg-[#c89435]
        transition
        shadow-xl
      "
    >
      Energy Assessment
    </button>

  </div>
)}
      {/* MOBILE APP STYLE NAV */}
      
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
      text-[11px]
      tracking-[0.32em]
      uppercase
      font-medium
      transition
      ${
        scrolled
          ? "text-[#1A2B4C] hover:text-[#D4A13E]"
          : "text-[#D4A13E] hover:text-white"
      }
      group
      `}
    >
      {children}

      <span
        className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#D4A13E] transition-all duration-300 group-hover:w-full"
      />
    </Link>
  );
}

/* MOBILE NAV */

function MobileNav({
  href,
  children,
  setMenuOpen,
}: {
  href: string;
  children: React.ReactNode;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <Link
      href={href}
      onClick={() => setMenuOpen(false)}
      className="text-lg py-6 tracking-[0.35em] uppercase hover:text-[#D4A13E]"
    >
      {children}
    </Link>
  );
}