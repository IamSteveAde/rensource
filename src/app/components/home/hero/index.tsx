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
        <source src="/images/hero/energy.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-[#1A2B4C]/85" />

      {/* CONTENT */}

      <div className="relative z-10 max-w-[1200px] px-6 md:px-10 text-center text-white">

        {/* LABEL */}

        <p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#D4A13E] mb-6">
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
                from-[#D4A13E]
                via-[#FFD978]
                to-[#D4A13E]
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
            bg-[#D4A13E]
            text-black
            text-[11px] sm:text-xs
            tracking-[0.3em]
            uppercase
            rounded-full
            hover:bg-[#c89435]
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
  hover:bg-white
  hover:text-black
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
                    ? "w-8 sm:w-10 bg-[#D4A13E]"
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
        hover:bg-[#D4A13E]
        hover:scale-110
        shadow-xl
        "
      >
        <ChevronLeft size={26} className="group-hover:text-black transition" />
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
        hover:bg-[#D4A13E]
        hover:scale-110
        shadow-xl
        "
      >
        <ChevronRight size={26} className="group-hover:text-black transition" />
      </button>

     {/* PARTNERS */}

{/* PARTNER LOGOS */}

{/* PARTNER LOGOS */}

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

      {/* FIRST SET */}

      <PartnerLogo src="/images/logo/p1.png" />
      <PartnerLogo src="/images/logo/p2.png" />
      <PartnerLogo src="/images/logo/p3.png" />
      <PartnerLogo src="/images/logo/p4.png" />
      <PartnerLogo src="/images/logo/p5.png" />
      <PartnerLogo src="/images/logo/p6.png" />
      <PartnerLogo src="/images/logo/p7.png" />
      <PartnerLogo src="/images/logo/p8.png" />
      <PartnerLogo src="/images/logo/p9.png" />
      <PartnerLogo src="/images/logo/p10.png" />

      {/* DUPLICATE FOR SEAMLESS SCROLL */}

      <PartnerLogo src="/images/logo/p1.png" />
      <PartnerLogo src="/images/logo/p2.png" />
      <PartnerLogo src="/images/logo/p3.png" />
      <PartnerLogo src="/images/logo/p4.png" />
      <PartnerLogo src="/images/logo/p5.png" />
      <PartnerLogo src="/images/logo/p6.png" />
      <PartnerLogo src="/images/logo/p7.png" />
      <PartnerLogo src="/images/logo/p8.png" />
      <PartnerLogo src="/images/logo/p9.png" />
      <PartnerLogo src="/images/logo/p10.png" />

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