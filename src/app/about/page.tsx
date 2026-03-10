"use client"

import Image from "next/image"
import Board from "../components/home/calculator"
import { motion } from "framer-motion"
import {
  Sun,
  BatteryCharging,
  HandCoins,
  Settings,
  Leaf,
  Zap,
} from "lucide-react"

export default function AboutPage() {
  return (
    <main className="overflow-hidden">

      {/* HERO */}

      <section className="relative h-screen flex items-center justify-center">

        <Image
          src="/images/hero/h3.webp"
          fill
          alt="Rensource energy"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#1A2B4C]/70" />

        <div className="relative text-center max-w-5xl px-6 text-white">

          <motion.h1
            initial={{opacity:0,y:30}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.8}}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Powering Africa’s Businesses
            <span className="block text-[#D4A13E]">
              with Clean Energy
            </span>
          </motion.h1>

          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
            Rensource develops renewable energy infrastructure that enables
            businesses across Africa to access reliable, affordable and
            sustainable electricity.
          </p>

        </div>

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

              <PartnerLogo src="/images/logo/p1.png"/>
              <PartnerLogo src="/images/logo/p2.png"/>
              <PartnerLogo src="/images/logo/p3.png"/>
              <PartnerLogo src="/images/logo/p4.png"/>
              <PartnerLogo src="/images/logo/p5.png"/>
              <PartnerLogo src="/images/logo/p6.png"/>
              <PartnerLogo src="/images/logo/p7.png"/>
              <PartnerLogo src="/images/logo/p8.png"/>
              <PartnerLogo src="/images/logo/p9.png"/>
              <PartnerLogo src="/images/logo/p10.png"/>

              <PartnerLogo src="/images/logo/p1.png"/>
              <PartnerLogo src="/images/logo/p2.png"/>
              <PartnerLogo src="/images/logo/p3.png"/>
              <PartnerLogo src="/images/logo/p4.png"/>
              <PartnerLogo src="/images/logo/p5.png"/>
              <PartnerLogo src="/images/logo/p6.png"/>
              <PartnerLogo src="/images/logo/p7.png"/>
              <PartnerLogo src="/images/logo/p8.png"/>
              <PartnerLogo src="/images/logo/p9.png"/>
              <PartnerLogo src="/images/logo/p10.png"/>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT RENSOURCE */}

<section className="py-32 bg-gradient-to-b from-[#F5F0E8] via-white to-white">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

{/* IMAGE */}

<div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">

<Image
src="/images/hero/i13.jpg"
fill
alt="Solar farm infrastructure"
className="object-cover"
/>

</div>


{/* CONTENT */}

<div>

<h2 className="text-3xl font-bold text-[#1A2B4C] mb-6">
About Rensource Energy
</h2>

<h3 className="text-xl text-[#D4A13E] font-semibold mb-4">
Powering Africa’s C&I Sector with Clean Energy
</h3>

<p className="text-gray-700 leading-relaxed mb-6">
Rensource is a leading West African provider of renewable energy-related services,
specializing in the development and financing of solar-hybrid captive power
provision for commercial, industrial and utility customers.
</p>

<p className="text-gray-700 leading-relaxed">
Our solutions bridge the gap between desired and available power by deploying
any combination of solar power and fossil-fired generation — primarily gas and
diesel — including natural gas with integrated battery storage solutions.
</p>

</div>

</div>

</section>


      
      {/* SERVICES */}

      <section className="py-32 bg-gradient-to-br from-[#1A2B4C] via-[#1A2B4C] to-[#0F1A32] text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <h2 className="text-4xl text-[#D4A13E] font-bold">
              What We Do
            </h2>

            <p className="mt-4 text-white/70">
              Integrated renewable energy solutions for modern businesses.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {[
              {
                icon: Sun,
                title:"Solar Infrastructure",
                desc:"High performance solar PV systems engineered for commercial facilities.",
                color:"from-yellow-500/20"
              },
              {
                icon:BatteryCharging,
                title:"Hybrid Systems",
                desc:"Combining solar, batteries and backup generation.",
                color:"from-green-400/20"
              },
              {
                icon:HandCoins,
                title:"Energy Financing",
                desc:"Flexible financing models for clean energy adoption.",
                color:"from-blue-400/20"
              },
              {
                icon:Settings,
                title:"Asset Management",
                desc:"Long term monitoring and system optimization.",
                color:"from-purple-400/20"
              }
            ].map((item,index)=>{

              const Icon = item.icon

              return(

                <motion.div
                key={index}
                whileHover={{y:-8}}
                className={`p-8 rounded-2xl backdrop-blur border border-white/10 bg-gradient-to-br ${item.color} to-transparent`}
                >

                  <Icon className="text-[#D4A13E] mb-4" size={34}/>

                  <h3 className="font-semibold text-lg mb-3">
                    {item.title}
                  </h3>

                  <p className="text-white/70 text-sm">
                    {item.desc}
                  </p>

                </motion.div>

              )

            })}

          </div>

        </div>

      </section>
      {/* WHO WE ARE */}

      <section className="py-32 bg-gradient-to-b from-[#F5F0E8] via-white to-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-bold mb-6 text-[#1A2B4C]">
              Who We Are
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Rensource Energy is a renewable energy developer delivering
              reliable solar and hybrid energy infrastructure for commercial
              and industrial organizations across Africa.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Through solar generation, battery storage and hybrid energy
              systems, we enable businesses to overcome power shortages
              while significantly reducing energy costs.
            </p>

          </div>

          <div className="p-10 rounded-3xl shadow-xl bg-gradient-to-br from-[#D4A13E]/20 to-white">

            <Zap className="text-[#D4A13E] mb-4" size={40}/>

            <h3 className="text-xl font-semibold mb-3 text-black">
              Our Vision
            </h3>

            <p className="text-gray-600">
              Accelerating Africa’s transition to sustainable energy by
              building scalable clean power infrastructure for businesses
              across the continent.
            </p>

          </div>

        </div>

      </section>



      {/* WHY CHOOSE US */}

<section className="py-32 bg-gradient-to-br from-[#1A2B4C] via-[#1A2B4C] to-[#0F1A32] text-white">

<div className="max-w-7xl mx-auto px-6">

{/* HEADER */}

<div className="text-center mb-20">

<h2 className="text-4xl font-bold text-[#D4A13E]">
Why Choose Us
</h2>

<p className="mt-4 text-white/70 max-w-2xl mx-auto">
Rensource has proven itself with a track record of reliability
and consistency across the region.
</p>

</div>


{/* CARDS */}

<div className="grid md:grid-cols-3 gap-10">

{[
{
icon:Zap,
title:"Energy Cost Savings",
desc:"Our solutions guarantee significant reductions in electricity costs compared to traditional fossil-fuel alternatives.",
gradient:"from-yellow-500/20"
},
{
icon:HandCoins,
title:"Payment Flexibility",
desc:"Choose between fixed or variable pricing or a per kWh tariff, eliminating budget and forecasting uncertainties.",
gradient:"from-blue-500/20"
},
{
icon:Settings,
title:"24/7 Technical Support",
desc:"Remote and on-site operations teams provide continuous monitoring, maintenance and technical assistance.",
gradient:"from-green-500/20"
}
].map((item,index)=>{

const Icon = item.icon

return(

<motion.div
key={index}
whileHover={{y:-10}}
className={`p-10 rounded-2xl border border-white/10 backdrop-blur bg-gradient-to-br ${item.gradient} to-transparent`}
>

<Icon className="text-[#D4A13E] mb-5" size={36}/>

<h3 className="text-xl font-semibold mb-3">
{item.title}
</h3>

<p className="text-white/70">
{item.desc}
</p>

</motion.div>

)

})}

</div>

</div>

</section>




      {/* LEADERSHIP */}
<Board/>      
    </main>
  )
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

  )

}