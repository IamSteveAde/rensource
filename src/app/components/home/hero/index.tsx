"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EnergyAssessmentModal from "../../../components/EnergyAssessmentModal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Powering African Industry",
    subtitle:
      "Reliable solar, hybrid and fully financed energy solutions for commercial and industrial businesses.",
  },
  {
    title: "Proven Energy Infrastructure",
    subtitle:
      "From Nigeria to the rest of Africa, RenSource delivers reliable power solutions for modern industry.",
  },
  {
    title: "Replace Diesel. Reduce Costs.",
    subtitle:
      "Transition to solar and hybrid energy while improving reliability and reducing operating costs.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [openAssessment, setOpenAssessment] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

      {/* VIDEO */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/images/hero/energys.mp4" type="video/mp4" />
      </video>

      {/* GREEN OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 via-emerald-800/70 to-emerald-900/80" />

      {/* CONTENT */}

      <div className="relative z-10 max-w-[1200px] px-6 md:px-10 text-center text-white">

        {/* LABEL */}

        <p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-emerald-300 mb-6">
          Proven in Nigeria • Ready for Africa
        </p>

        {/* SLIDES */}

        <div className="relative min-h-[140px] sm:min-h-[120px] md:min-h-[120px]">

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                current === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 pointer-events-none"
              }`}
            >

              {/* TITLE */}

              <h1
                className="
                text-3xl
                sm:text-4xl
                md:text-4xl
                lg:text-4xl
                xl:text-4xl
                font-semibold
                leading-tight
                lg:whitespace-nowrap
                bg-gradient-to-r
                from-emerald-300
                via-green-200
                to-emerald-300
                bg-clip-text
                text-transparent
                "
              >
                {slide.title}
              </h1>

              {/* SUBTITLE */}

              <p className="mt-6 text-sm sm:text-base md:text-lg text-white/80 max-w-xl md:max-w-2xl mx-auto">
                {slide.subtitle}
              </p>

            </div>
          ))}

        </div>

        {/* BUTTONS */}

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/solutions"
            className="
            px-7 py-3 sm:px-8 sm:py-4
            bg-emerald-500
            text-white
            text-[11px] sm:text-xs
            tracking-[0.3em]
            uppercase
            rounded-full
            hover:bg-emerald-600
            transition
            shadow-xl
            "
          >
            Explore Solutions
          </Link>

          <button
            onClick={() => setOpenAssessment(true)}
            className="
            px-7 py-3 sm:px-8 sm:py-4
            border border-white/40
            text-white
            text-[11px] sm:text-xs
            tracking-[0.3em]
            uppercase
            rounded-full
            hover:bg-emerald-500
            hover:border-emerald-500
            transition
            "
          >
            Energy Assessment
          </button>

        </div>

        {/* SLIDE INDICATORS */}

        <div className="flex justify-center gap-2 sm:gap-3 mt-10">

          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                h-[3px]
                sm:h-[4px]
                rounded-full
                transition-all duration-500
                ${
                  current === index
                    ? "w-8 sm:w-10 bg-emerald-400"
                    : "w-3 sm:w-4 bg-white/40 hover:bg-white/70"
                }
              `}
            />
          ))}

        </div>

      </div>

      {/* ARROWS */}

      <button
        onClick={prevSlide}
        className="
        hidden md:flex
        absolute left-6 lg:left-10
        top-1/2 -translate-y-1/2
        group
        h-12 w-12 lg:h-16 lg:w-16
        rounded-full
        backdrop-blur-xl
        bg-white/10
        border border-white/20
        items-center justify-center
        transition
        hover:bg-emerald-500
        hover:scale-110
        shadow-xl
        "
      >
        <ChevronLeft size={26} className="group-hover:text-white transition" />
      </button>

      <button
        onClick={nextSlide}
        className="
        hidden md:flex
        absolute right-6 lg:right-10
        top-1/2 -translate-y-1/2
        group
        h-12 w-12 lg:h-16 lg:w-16
        rounded-full
        backdrop-blur-xl
        bg-white/10
        border border-white/20
        items-center justify-center
        transition
        hover:bg-emerald-500
        hover:scale-110
        shadow-xl
        "
      >
        <ChevronRight size={26} className="group-hover:text-white transition" />
      </button>

      {/* PARTNERS */}

      <div className="absolute bottom-6 w-full flex justify-center px-4">

        <div className="
          w-full max-w-7xl
          overflow-hidden
          bg-white
          rounded-xl
          shadow-[0_10px_30px_rgba(0,0,0,0.1)]
          py-2 sm:py-3
        ">

          <div className="flex w-max items-center gap-8 sm:gap-12 animate-partners">

            {[...Array(2)].map((_, i) => (
              <>
                <PartnerLogo src="/images/logo/p1.png" key={`p1-${i}`} />
                <PartnerLogo src="/images/logo/p2.png" key={`p2-${i}`} />
                <PartnerLogo src="/images/logo/p3.png" key={`p3-${i}`} />
                <PartnerLogo src="/images/logo/p4.png" key={`p4-${i}`} />
                <PartnerLogo src="/images/logo/p5.png" key={`p5-${i}`} />
                <PartnerLogo src="/images/logo/p6.png" key={`p6-${i}`} />
                <PartnerLogo src="/images/logo/p7.png" key={`p7-${i}`} />
                <PartnerLogo src="/images/logo/p8.png" key={`p8-${i}`} />
                <PartnerLogo src="/images/logo/p9.png" key={`p9-${i}`} />
                <PartnerLogo src="/images/logo/p10.png" key={`p10-${i}`} />
              </>
            ))}

          </div>

        </div>

      </div>

      <EnergyAssessmentModal
        open={openAssessment}
        onClose={() => setOpenAssessment(false)}
      />

    </section>
  );
}

function PartnerLogo({ src }: { src: string }) {
  return (
    <div className="flex items-center justify-center min-w-[80px] sm:min-w-[100px]">
      <Image
        src={src}
        alt="partner"
        width={70}
        height={24}
        className="object-contain opacity-70 hover:opacity-100 transition duration-300"
      />
    </div>
  );
}