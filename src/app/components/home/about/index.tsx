"use client";

import { Sun, BatteryCharging, Wallet, Activity } from "lucide-react";

const solutions = [
  {
    icon: Sun,
    title: "Solar Power Systems",
    description:
      "Commercial-scale solar infrastructure designed to reduce energy costs and provide clean, reliable power for industrial operations.",
    gradient:
      "from-yellow-400/20 via-yellow-300/10 to-transparent",
  },
  {
    icon: BatteryCharging,
    title: "Hybrid Energy Infrastructure",
    description:
      "Integrated systems combining solar generation, battery storage and existing grid or generator power for uninterrupted operations.",
    gradient:
      "from-blue-400/20 via-blue-300/10 to-transparent",
  },
  {
    icon: Wallet,
    title: "Energy Financing",
    description:
      "Flexible financing models that allow businesses to deploy energy infrastructure without large upfront capital investment.",
    gradient:
      "from-emerald-400/20 via-emerald-300/10 to-transparent",
  },
  {
    icon: Activity,
    title: "Operations & Asset Management",
    description:
      "Continuous monitoring and lifecycle management of energy infrastructure to ensure optimal performance and reliability.",
    gradient:
      "from-purple-400/20 via-purple-300/10 to-transparent",
  },
];

export default function Solutions() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* GOLD GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6e7c3]/60 via-white to-white" />

      {/* SOFT LIGHT GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#D4A13E]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="text-xs tracking-[0.35em] uppercase text-[#D4A13E] mb-4">
            Our Solutions
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-[#0e1f3d] leading-tight">
            Reliable Energy Infrastructure
            <span className="block bg-gradient-to-r from-[#D4A13E] to-[#f5c567] bg-clip-text text-transparent">
              For African Businesses
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            RenSource develops, finances and manages clean energy systems that
            enable commercial and industrial businesses to operate with
            reliable and cost-efficient power.
          </p>

        </div>

        {/* SOLUTIONS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${item.gradient}
                border border-black/5 backdrop-blur-md
                hover:shadow-2xl transition duration-500`}
              >

                {/* ICON */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-md mb-6 group-hover:scale-110 transition">
                  <Icon className="text-[#D4A13E]" size={26} />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-[#0e1f3d] mb-4">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* HOVER LINE */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#D4A13E] to-[#f5c567] group-hover:w-full transition-all duration-500" />

              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">

          <button className="
            px-10 py-4
            rounded-full
            bg-gradient-to-r
            from-[#D4A13E]
            to-[#f5c567]
            text-black
            text-xs
            tracking-[0.35em]
            uppercase
            shadow-lg
            hover:shadow-xl
            hover:scale-[1.03]
            transition
          ">
            Explore Energy Solutions
          </button>

        </div>

      </div>
    </section>
  );
}