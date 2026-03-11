"use client"

import Image from "next/image"
import Board from "../components/home/calculator"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"


import {
  Sun,
  BatteryCharging,
  HandCoins,
  Settings,
  Leaf,
  Zap,
} from "lucide-react"

const aboutImages = [
  "/images/hero/i6.jpg",
  "/images/hero/ui.jpg",
  "/images/hero/kuje.png"
]

export default function AboutPage() {
  const [slide,setSlide] = useState(0)

useEffect(()=>{

const interval = setInterval(()=>{

setSlide((prev)=>(prev+1)%aboutImages.length)

},4000)

return ()=>clearInterval(interval)

},[])
  return (
    <main className="overflow-hidden">

      {/* HERO */}

<section className="relative h-screen flex items-center justify-center overflow-hidden">

  {/* BACKGROUND IMAGE */}

  <Image
    src="/images/hero/h3.webp"
    fill
    alt="Rensource energy"
    className="object-cover"
    priority
  />

  {/* GREEN OVERLAY */}

  <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/80 to-green-800/70" />

  {/* ENERGY GLOW */}

  <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/20 blur-[160px] rounded-full" />

  {/* CONTENT */}

  <div className="relative text-center max-w-5xl px-6 text-white">

    <motion.h1
      initial={{opacity:0,y:30}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.8}}
      className="
      text-4xl
      md:text-6xl
      font-semibold
      leading-tight
      tracking-tight
      text-white
      "
    >

      Powering Africa’s Businesses

      <span className="
      block
      bg-gradient-to-r
      from-emerald-300
      via-green-200
      to-emerald-400
      bg-clip-text
      text-transparent
      ">

        with Clean Energy

      </span>

    </motion.h1>

    <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">

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

        {/* DUPLICATE FOR INFINITE SCROLL */}

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

{/* ABOUT RENSOURCE */}

<section className="relative py-32 overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">

{/* ORBIT BACKGROUND */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-[900px] h-[900px] border border-emerald-200/40 rounded-full animate-[spin_120s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-3 h-3 bg-emerald-500 rounded-full shadow-lg"/>
</div>

<div className="absolute w-[650px] h-[650px] border border-green-200/40 rounded-full animate-[spin_90s_linear_infinite_reverse]">
<div className="absolute -top-2 left-1/2 w-2.5 h-2.5 bg-green-500 rounded-full"/>
</div>

<div className="absolute w-[420px] h-[420px] border border-emerald-200/40 rounded-full animate-[spin_70s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-2 h-2 bg-emerald-600 rounded-full"/>
</div>

</div>

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative">

{/* CONTENT */}

<div>

<h2 className="text-3xl md:text-4xl font-semibold text-emerald-700 mb-6">
About Rensource Energy
</h2>

<h3 className="text-xl text-emerald-500 font-semibold mb-4">
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


{/* SLIDESHOW */}

<div className="relative h-[420px] rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.2)]">

{aboutImages.map((img,i)=>(

<motion.div
key={i}
className="absolute inset-0"
initial={{opacity:0}}
animate={{opacity: slide === i ? 1 : 0}}
transition={{duration:0.8}}
>

<Image
src={img}
fill
alt="Rensource solar infrastructure"
className="object-cover"
/>

</motion.div>

))}

{/* gradient overlay */}

<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"/>

</div>

</div>

</section>

      
      {/* WHAT WE DO — TIMELINE */}

<section className="relative py-32 overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">

{/* ORBIT ENERGY BACKGROUND */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-[900px] h-[900px] border border-emerald-200/40 rounded-full animate-[spin_120s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-3 h-3 bg-emerald-500 rounded-full"/>
</div>

<div className="absolute w-[650px] h-[650px] border border-green-200/40 rounded-full animate-[spin_90s_linear_infinite_reverse]">
<div className="absolute -top-2 left-1/2 w-2.5 h-2.5 bg-green-500 rounded-full"/>
</div>

<div className="absolute w-[420px] h-[420px] border border-emerald-200/40 rounded-full animate-[spin_60s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-2 h-2 bg-emerald-600 rounded-full"/>
</div>

</div>


<div className="relative max-w-6xl mx-auto px-6">

{/* HEADER */}

<div className="text-center mb-24">

<h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
What We Do
</h2>

<p className="mt-4 text-gray-600 max-w-xl mx-auto">
Integrated renewable energy solutions designed to power modern
businesses across Africa.
</p>

</div>


{/* TIMELINE CONTAINER */}

<div className="relative">

{/* CENTER LINE */}

<div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-emerald-200 transform -translate-x-1/2"/>


{/* ITEMS */}

{[
{
icon: Sun,
title:"Solar Infrastructure",
desc:"High performance solar PV systems engineered for commercial facilities."
},

{
icon: BatteryCharging,
title:"Hybrid Energy Systems",
desc:"Combining solar, battery storage and backup generation for uninterrupted power."
},

{
icon: HandCoins,
title:"Energy Financing",
desc:"Flexible financing models enabling businesses to adopt solar with minimal upfront cost."
},

{
icon: Settings,
title:"Asset Management",
desc:"Continuous monitoring, maintenance and optimization for long-term system performance."
}

].map((item,index)=>{

const Icon = item.icon

const isRight = index % 2 === 0

return(

<div
key={index}
className="relative mb-20 md:mb-28"
>

{/* TIMELINE DOT */}

<div className="absolute left-1/2 top-6 w-6 h-6 bg-emerald-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2"/>


{/* CARD */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}

className={`
relative
w-full
md:w-[46%]
p-8
rounded-2xl
shadow-xl
border
border-emerald-100
bg-white
${isRight ? "ml-auto md:pl-12" : "mr-auto md:pr-12"}
`}
>

<div className="flex items-start gap-4">

<div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">

<Icon className="text-emerald-600" size={24}/>

</div>

<div>

<h3 className="text-lg font-semibold text-gray-900 mb-2">
{item.title}
</h3>

<p className="text-gray-600 text-sm leading-relaxed">
{item.desc}
</p>

</div>

</div>

</motion.div>

</div>

)

})}

</div>

</div>

</section>
{/* WHO WE ARE */}

<section className="relative py-32 overflow-hidden">

{/* BACKGROUND IMAGE */}

<Image
src="/images/hero/h4.webp"
fill
alt="solar infrastructure"
className="object-cover object-center"
/>

{/* GREEN OVERLAY */}

<div className="absolute inset-0 bg-gradient-to-br from-emerald-950/50 via-emerald-900/85 to-green-800/80"/>

{/* ENERGY GLOW */}

<div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/20 blur-[160px] rounded-full"/>

{/* ORBIT ENERGY ELEMENTS */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-[800px] h-[800px] border border-emerald-400/20 rounded-full animate-[spin_120s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-3 h-3 bg-emerald-400 rounded-full"/>
</div>

<div className="absolute w-[520px] h-[520px] border border-emerald-300/20 rounded-full animate-[spin_90s_linear_infinite_reverse]">
<div className="absolute -top-2 left-1/2 w-2.5 h-2.5 bg-green-400 rounded-full"/>
</div>

</div>


<div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center text-white">

{/* TEXT CONTENT */}

<div>

<h2 className="text-4xl md:text-5xl text-white font-semibold mb-6">
Who We Are
</h2>

<p className="text-white/80 leading-relaxed mb-6">
Rensource Energy is a renewable energy developer delivering
reliable solar and hybrid energy infrastructure for commercial
and industrial organizations across Africa.
</p>

<p className="text-white/80 leading-relaxed">
Through solar generation, battery storage and hybrid energy
systems, we enable businesses to overcome power shortages
while significantly reducing energy costs.
</p>

</div>


{/* VISION CARD */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="p-10 rounded-3xl backdrop-blur-xl border border-white/10 bg-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
>

<Zap className="text-emerald-300 mb-5" size={42}/>

<h3 className="text-2xl font-semibold mb-3">
Our Vision
</h3>

<p className="text-white/80 leading-relaxed">
Accelerating Africa’s transition to sustainable energy by
building scalable clean power infrastructure for businesses
across the continent.
</p>

</motion.div>

</div>

</section>


      {/* WHY CHOOSE US */}

<section className="relative py-32 overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">

{/* ORBIT BACKGROUND */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-[850px] h-[850px] border border-emerald-200/40 rounded-full animate-[spin_120s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-3 h-3 bg-emerald-500 rounded-full"/>
</div>

<div className="absolute w-[520px] h-[520px] border border-green-200/40 rounded-full animate-[spin_90s_linear_infinite_reverse]">
<div className="absolute -top-2 left-1/2 w-2.5 h-2.5 bg-green-500 rounded-full"/>
</div>

</div>


<div className="relative max-w-7xl mx-auto px-6">

{/* HEADER */}

<div className="text-center mb-24">

<h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
Why Choose Us
</h2>

<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
Rensource has proven itself with a track record of reliability
and consistency across the region.
</p>

</div>


{/* TIMELINE */}

<div className="relative">

{/* HORIZONTAL LINE */}

<div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-emerald-200"/>


<div className="grid md:grid-cols-3 gap-16 relative">

{[
{
icon: Zap,
title:"Energy Cost Savings",
desc:"Our solutions guarantee significant reductions in electricity costs compared to traditional fossil-fuel alternatives."
},

{
icon: HandCoins,
title:"Payment Flexibility",
desc:"Choose between fixed or variable pricing or a per kWh tariff, eliminating budget and forecasting uncertainties."
},

{
icon: Settings,
title:"24/7 Technical Support",
desc:"Remote and on-site operations teams provide continuous monitoring, maintenance and technical assistance."
}

].map((item,index)=>{

const Icon = item.icon
const isTop = index % 2 === 0

return(

<div key={index} className="relative flex flex-col items-center">

{/* CARD */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}

className={`
p-8
rounded-2xl
bg-white
border
border-emerald-100
shadow-xl
w-full
${isTop ? "md:-translate-y-20" : "md:translate-y-20"}
`}
>

<div className="flex items-start gap-4">

<div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">

<Icon className="text-emerald-600" size={24}/>

</div>

<div>

<h3 className="text-lg font-semibold text-gray-900 mb-2">
{item.title}
</h3>

<p className="text-gray-600 text-sm leading-relaxed">
{item.desc}
</p>

</div>

</div>

</motion.div>


{/* TIMELINE DOT */}

<div className="hidden md:block absolute top-1/2 w-5 h-5 bg-emerald-600 rounded-full border-4 border-white shadow-md"/>

</div>

)

})}

</div>

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