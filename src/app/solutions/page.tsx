"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
Sun,
BatteryCharging,
Factory,
Zap,
Settings,
ShieldCheck
} from "lucide-react"



export default function ServicesPage() {

return (

<main className="overflow-hidden">


{/* HERO */}

<section className="relative h-screen flex items-center justify-center">

<Image
src="/images/hero/h4.webp"
fill
alt="Energy Infrastructure"
className="object-cover"
/>

<div className="absolute inset-0 bg-[#1A2B4C]/65" />

<div className="relative text-center max-w-5xl px-6 text-white">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="text-4xl md:text-6xl font-bold leading-tight text-white"
>

Energy Infrastructure
<span className="block text-[#D4A13E]">
Solutions for Modern Businesses
</span>

</motion.h1>

<p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
Reliable solar and hybrid energy systems engineered to deliver
stable electricity for commercial and industrial operations.
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



{/* OFFERINGS INTRO */}

<section className="py-28 bg-gradient-to-b from-[#F5F0E8] via-white to-white">

<div className="max-w-6xl mx-auto text-center px-6">

<h2 className="text-4xl font-bold text-[#1A2B4C] mb-6">
Our Offerings
</h2>

<p className="text-gray-700 max-w-3xl mx-auto">
Rensource delivers scalable solar and hybrid energy solutions that
enable organizations to operate reliably while reducing energy costs
and transitioning to sustainable power infrastructure.
</p>

</div>

</section>



{/* SERVICES */}

<section className="py-32 bg-gradient-to-br from-[#1A2B4C] via-[#1A2B4C] to-[#0F1A32] text-white">

<div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-3 gap-10">


{/* OFF GRID */}

<motion.div
whileHover={{y:-10}}
className="p-10 rounded-3xl border border-white/10 backdrop-blur bg-gradient-to-br from-yellow-500/20 to-transparent"
>

<Sun className="text-[#D4A13E] mb-6" size={40}/>

<h3 className="text-xl font-semibold mb-4">
Off-grid Solution
</h3>

<p className="text-white/70 mb-4">
PV (+ batteries)
</p>

<p className="text-white/70">
Provides solar power from photovoltaic panels while excess energy
charges the batteries. The stored power supplies electricity when
solar generation is low or unavailable.
</p>

</motion.div>



{/* SOLAR HYBRID */}

<motion.div
whileHover={{y:-10}}
className="p-10 rounded-3xl border border-white/10 backdrop-blur bg-gradient-to-br from-blue-400/20 to-transparent"
>

<Factory className="text-[#D4A13E] mb-6" size={40}/>

<h3 className="text-xl font-semibold mb-4">
On-grid Solar Hybrid
</h3>

<p className="text-white/70 mb-4">
Solar PV + Diesel / Gas
</p>

<p className="text-white/70">
PV hybrid systems combine solar generation with backup generators.
Power demand is satisfied by both solar energy and generator power
ensuring uninterrupted supply.
</p>

</motion.div>



{/* SOLAR + BATTERY */}

<motion.div
whileHover={{y:-10}}
className="p-10 rounded-3xl border border-white/10 backdrop-blur bg-gradient-to-br from-green-400/20 to-transparent"
>

<BatteryCharging className="text-[#D4A13E] mb-6" size={40}/>

<h3 className="text-xl font-semibold mb-4">
Solar + Battery Hybrid
</h3>

<p className="text-white/70 mb-4">
Solar PV + Batteries + Diesel/Gas
</p>

<p className="text-white/70">
Power is primarily supplied by solar panels while batteries store
excess energy. When solar output is insufficient, stored battery
energy or generators provide backup electricity.
</p>

</motion.div>

</div>

</div>

</section>



{/* ENERGY IMAGE STRIP */}

<section className="grid md:grid-cols-3">

<div className="relative h-[320px]">

<Image
src="/images/hero/ui.jpg"
fill
alt="Solar panels"
className="object-cover"
/>

</div>

<div className="relative h-[320px]">

<Image
src="/images/hero/baze.jpg"
fill
alt="Battery storage"
className="object-cover"
/>

</div>

<div className="relative h-[320px]">

<Image
src="/images/hero/val.jpg"
fill
alt="Energy infrastructure"
className="object-cover"
/>

</div>

</section>



{/* PROCESS TIMELINE */}

<section className="py-32 bg-gradient-to-b from-[#F5F0E8] via-white to-white">

<div className="max-w-6xl mx-auto px-6">

<div className="text-center mb-20">

<h2 className="text-4xl font-bold text-[#1A2B4C]">
Our Offering Selection Process
</h2>

</div>



<div className="relative border-l-2 border-[#D4A13E] ml-4">

{[
{
title:"Energy Assessment",
desc:"We evaluate your facility’s energy consumption, infrastructure and operational requirements."
},
{
title:"Solution Design",
desc:"Our engineers design a custom hybrid energy system tailored to deliver reliable and affordable power."
},
{
title:"Lifecycle Planning",
desc:"Every solution is designed with long-term sustainability, cost efficiency and system reliability in mind."
},
{
title:"Power Purchase Agreement",
desc:"Clients enter a Power Purchase Agreement (PPA) and pay a monthly fee governed by a Service Level Agreement."
}
].map((step,index)=>(

<div key={index} className="mb-14 ml-6">

<span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#D4A13E] rounded-full ring-8 ring-white"/>

<h3 className="font-semibold text-xl text-[#1A2B4C] mb-2">
{step.title}
</h3>

<p className="text-gray-600">
{step.desc}
</p>

</div>

))}

</div>

</div>

</section>






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