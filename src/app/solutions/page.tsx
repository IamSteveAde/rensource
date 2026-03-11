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

<section className="relative h-screen flex items-center justify-center overflow-hidden">

<Image
src="/images/hero/h4.webp"
fill
alt="Energy Infrastructure"
className="object-cover"
/>

{/* GREEN OVERLAY */}

<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/85 to-green-700/80" />

{/* ENERGY GLOW */}

<div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/20 blur-[160px] rounded-full" />


<div className="relative text-center max-w-5xl px-6 text-white">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="text-4xl md:text-6xl font-semibold text-white leading-tight"
>

Energy Infrastructure
<span className="block bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent">
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

<div className="w-full max-w-7xl overflow-hidden bg-white rounded-xl shadow-lg py-2 sm:py-3">

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

<section className="relative py-28 overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">

{/* ORBIT BACKGROUND */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-[700px] h-[700px] border border-emerald-200/40 rounded-full animate-[spin_120s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-3 h-3 bg-emerald-500 rounded-full"/>
</div>

<div className="absolute w-[450px] h-[450px] border border-green-200/40 rounded-full animate-[spin_90s_linear_infinite_reverse]">
<div className="absolute -top-2 left-1/2 w-2.5 h-2.5 bg-green-500 rounded-full"/>
</div>

</div>

<div className="relative max-w-6xl mx-auto text-center px-6">

<h2 className="text-4xl font-semibold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent mb-6">
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

<section className="relative py-32 overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">

{/* ORBIT BACKGROUND */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-[900px] h-[900px] border border-emerald-200/40 rounded-full animate-[spin_120s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-3 h-3 bg-emerald-500 rounded-full"/>
</div>

<div className="absolute w-[650px] h-[650px] border border-green-200/40 rounded-full animate-[spin_90s_linear_infinite_reverse]">
<div className="absolute -top-2 left-1/2 w-2.5 h-2.5 bg-green-500 rounded-full"/>
</div>

</div>


<div className="relative max-w-7xl mx-auto px-6">

{/* SECTION HEADER */}

<div className="text-center mb-24">

<h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
Energy Infrastructure Solutions
</h2>

<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
Rensource provides scalable solar and hybrid energy systems designed
to power commercial and industrial operations with reliability,
efficiency and sustainability.
</p>

</div>



{/* SERVICE 1 */}

<div className="grid md:grid-cols-2 gap-14 items-center mb-28">

{/* TEXT */}

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="space-y-6"
>

<Sun className="text-emerald-600" size={36}/>

<h3 className="text-2xl font-semibold text-gray-900">
Off-grid Solution
</h3>

<p className="text-gray-600 font-medium">
PV (+ batteries)
</p>

<p className="text-gray-600 leading-relaxed">
Provides solar power from photovoltaic panels while excess energy
charges the batteries. The stored power supplies electricity when
solar generation is low or unavailable.
</p>

<a
href="/contact"
className="inline-block mt-4 px-8 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-lg hover:shadow-xl"
>
Contact Us
</a>

</motion.div>


{/* IMAGE */}

<motion.div
whileHover={{scale:1.03}}
className="relative h-[360px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
>

<Image
src="/images/hero/offgrid.png"
fill
alt="Off-grid solar"
className="object-cover"
/>

</motion.div>

</div>



{/* SERVICE 2 */}

<div className="grid md:grid-cols-2 gap-14 items-center mb-28">

{/* IMAGE */}

<motion.div
whileHover={{scale:1.03}}
className="relative h-[360px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] order-2 md:order-1"
>

<Image
src="/images/hero/hybrr.png"
fill
alt="Solar hybrid"
className="object-cover"
/>

</motion.div>


{/* TEXT */}

<motion.div
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="space-y-6 order-1 md:order-2"
>

<Factory className="text-emerald-600" size={36}/>

<h3 className="text-2xl font-semibold text-gray-900">
On-grid Solar Hybrid
</h3>

<p className="text-gray-600 font-medium">
Solar PV + Diesel / Gas
</p>

<p className="text-gray-600 leading-relaxed">
PV hybrid systems combine solar generation with backup generators.
Power demand is satisfied by both solar energy and generator power
ensuring uninterrupted supply.
</p>

<a
href="/contact"
className="inline-block mt-4 px-8 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-lg hover:shadow-xl"
>
Contact Us
</a>

</motion.div>

</div>



{/* SERVICE 3 */}

<div className="grid md:grid-cols-2 gap-14 items-center">

{/* TEXT */}

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="space-y-6"
>

<BatteryCharging className="text-emerald-600" size={36}/>

<h3 className="text-2xl font-semibold text-gray-900">
Solar + Battery Hybrid
</h3>

<p className="text-gray-600 font-medium">
Solar PV + Batteries + Diesel/Gas
</p>

<p className="text-gray-600 leading-relaxed">
Power is primarily supplied by solar panels while batteries store
excess energy. When solar output is insufficient, stored battery
energy or generators provide backup electricity.
</p>

<a
href="/contact"
className="inline-block mt-4 px-8 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-lg hover:shadow-xl"
>
Contact Us
</a>

</motion.div>


{/* IMAGE */}

<motion.div
whileHover={{scale:1.03}}
className="relative h-[360px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
>

<Image
src="/images/hero/solplus.png"
fill
alt="Solar battery hybrid"
className="object-cover"
/>

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

<section className="relative py-32 overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">

<div className="max-w-6xl mx-auto px-6">

<div className="text-center mb-20">

<h2 className="text-4xl font-semibold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
Our Offering Selection Process
</h2>

</div>


<div className="relative border-l-2 border-emerald-500 ml-4">

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

<span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-emerald-600 rounded-full ring-8 ring-white"/>

<h3 className="font-semibold text-xl text-emerald-700 mb-2">
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