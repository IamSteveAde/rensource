"use client";

const solutions = [
  {
    title: "Solar Power Systems",
    image: "/images/hero/solarfarm.png",
    description:
      "Commercial-scale solar infrastructure designed to reduce energy costs and provide clean, reliable power for industrial operations.",
    gradient: "from-emerald-500/30 via-green-400/10 to-transparent",
  },
  {
    title: "Hybrid Energy Infrastructure",
    image: "/images/hero/hybrid.png",
    description:
      "Integrated systems combining solar generation, battery storage and grid or generator power for uninterrupted operations.",
    gradient: "from-green-500/30 via-lime-400/10 to-transparent",
  },
  {
    title: "Energy Financing",
    image: "/images/hero/ef.png",
    description:
      "Flexible financing models enabling businesses to deploy energy infrastructure without large upfront capital investment.",
    gradient: "from-teal-500/30 via-emerald-400/10 to-transparent",
  },
  {
    title: "Operations & Asset Management",
    image: "/images/hero/oam.png",
    description:
      "Continuous monitoring and lifecycle management of energy infrastructure ensuring optimal performance and reliability.",
    gradient: "from-green-600/30 via-emerald-400/10 to-transparent",
  },
];

export default function Solutions() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* ENERGY BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ecfff3] via-white to-white" />

      {/* ENERGY GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-400/20 blur-[140px] rounded-full" />

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="text-xs tracking-[0.4em] uppercase text-emerald-600 mb-4">
            Our Solutions
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-[#0e1f3d] leading-tight">
            Clean Energy Infrastructure
            <span className="block bg-gradient-to-r from-emerald-600 to-green-400 bg-clip-text text-transparent">
              For African Businesses
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            RenSource develops, finances and manages renewable energy systems
            enabling commercial and industrial businesses to operate with
            reliable and cost-efficient power.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {solutions.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient}
              border border-emerald-100 backdrop-blur-md
              hover:shadow-[0_25px_60px_rgba(16,185,129,0.25)]
              transition duration-500`}
            >

              {/* IMAGE */}
              <div className="h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-7">

                <h3 className="text-lg font-semibold text-[#0e1f3d] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

              </div>

              {/* ENERGY LINE */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-emerald-500 to-lime-400 group-hover:w-full transition-all duration-500" />

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">

          <button className="
          px-10 py-4
          rounded-full
          bg-gradient-to-r
          from-emerald-600
          to-green-400
          text-white
          text-xs
          tracking-[0.35em]
          uppercase
          shadow-xl
          hover:shadow-emerald-300/40
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