"use client"

import { useEffect, useState } from "react"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
  image: string
}

const testimonials: Testimonial[] = [
{
name: "Chief Financial Officer",
role: "CFO",
company: "Baze University",
quote:
"Rensource delivered reliable solar infrastructure that significantly reduced our energy costs while ensuring stable power for our campus operations.",
image: "/images/hero/baze.jpg"
},
{
name: "Operations Director",
role: "Operations Director",
company: "Valentine Chickens",
quote:
"The solar deployment improved operational reliability across our facilities while reducing diesel consumption and operating expenses.",
image: "/images/hero/val.jpg"
},
{
name: "Energy Manager",
role: "Energy Manager",
company: "Rubis Kenya",
quote:
"Rensource implemented a seamless solar solution that enhanced energy efficiency while supporting our sustainability goals.",
image: "/images/hero/rubis.jpg"
}
]

export default function Testimonials(){

const [active,setActive] = useState(1)

useEffect(()=>{

const interval = setInterval(()=>{
setActive((prev)=>(prev+1)%testimonials.length)
},6000)

return ()=>clearInterval(interval)

},[])

const total = testimonials.length

const getIndex = (index:number)=>{
return (index + total) % total
}

return(

<section className="relative py-24 px-6 overflow-hidden">

{/* Energy Gradient Background */}

<div
className="absolute inset-0 bg-cover bg-center transition-all duration-[1400ms] scale-105"
style={{
backgroundImage:`url(${testimonials[active].image})`
}}
/>

{/* Strong Energy Overlay */}

<div className="absolute inset-0 bg-gradient-to-b from-emerald-900/90 via-emerald-950/90 to-black/90"/>

{/* Solar Glow */}

<div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-emerald-500/30 blur-[160px] rounded-full"/>

{/* Energy Orbits */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<motion.div
animate={{ rotate:360 }}
transition={{ repeat:Infinity, duration:140, ease:"linear" }}
className="absolute w-[900px] h-[900px] border border-emerald-400/20 rounded-full"
/>

<motion.div
animate={{ rotate:-360 }}
transition={{ repeat:Infinity, duration:200, ease:"linear" }}
className="absolute w-[650px] h-[650px] border border-emerald-400/20 rounded-full"
/>

</div>

<div className="max-w-7xl mx-auto relative">

{/* Header */}

<div className="text-center">

<motion.h2
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-emerald-300 via-green-200 to-lime-200 text-transparent bg-clip-text"
>
Trusted Energy Infrastructure
</motion.h2>

<motion.p
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
transition={{delay:0.2}}
className="text-emerald-100/80 mt-4 max-w-xl mx-auto text-sm md:text-base"
>
Organizations across Africa trust RenSource to deliver reliable,
cost-efficient renewable energy infrastructure for mission-critical operations.
</motion.p>

</div>


{/* Cards */}

<div className="flex items-center justify-center gap-6 md:gap-10 mt-16">

{[-1,0,1].map((offset)=>{

const index = getIndex(active + offset)
const testimonial = testimonials[index]

const isActive = offset === 0

return(

<motion.div
key={index}
layout
className={`

rounded-3xl backdrop-blur-xl border border-emerald-300/10
p-6 md:p-10 flex flex-col justify-between

transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)]

${isActive
? "w-full sm:w-[420px] md:w-[520px] bg-white/10 shadow-[0_0_60px_rgba(16,185,129,0.25)] scale-100"
: "hidden sm:flex sm:w-[320px] md:w-[360px] bg-white/5 scale-90 opacity-70"
}

`}
>

{/* Quote Icon */}

<div className="w-12 h-12 rounded-xl bg-emerald-400/20 flex items-center justify-center text-emerald-300">

<Quote size={22}/>

</div>

{/* Quote */}

<p className={`leading-relaxed mt-5 ${isActive ? "text-white text-base md:text-lg" : "text-emerald-100 text-sm"}`}>
"{testimonial.quote}"
</p>

{/* Client */}

<div className="mt-7">

<p className="font-semibold text-white">
{testimonial.name}
</p>

<p className="text-emerald-200/80 text-sm">
{testimonial.role}, {testimonial.company}
</p>

</div>

</motion.div>

)

})}

</div>


{/* Indicators */}

<div className="flex justify-center gap-3 mt-12">

{testimonials.map((_,i)=>(

<div
key={i}
className={`h-2 rounded-full transition-all duration-400 ${
i===active
? "w-8 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
: "w-2 bg-emerald-200/40"
}`}
/>

))}

</div>

</div>

</section>

)
}