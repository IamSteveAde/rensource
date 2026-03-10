"use client"

import { useEffect, useState } from "react"
import { Quote } from "lucide-react"

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

<section className="relative py-24 md:py-36 px-6 overflow-hidden">

{/* Background */}

<div
className="absolute inset-0 bg-cover bg-center transition-all duration-[1200ms]"
style={{
backgroundImage:`url(${testimonials[active].image})`
}}
/>

{/* Overlay */}

<div className="absolute inset-0 bg-[#0f1d34]/85 backdrop-blur-sm"/>

<div className="max-w-7xl mx-auto relative">

{/* Header */}

<div className="text-center">

<h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-[#D4A13E] to-white text-transparent bg-clip-text">
Client Trust
</h2>

<p className="text-gray-300 mt-4 max-w-xl mx-auto text-sm md:text-base">
Energy infrastructure trusted by leading African organizations.
</p>

</div>


{/* Cards */}

<div className="flex items-center justify-center gap-6 md:gap-10 mt-14 md:mt-24">

{[-1,0,1].map((offset)=>{

const index = getIndex(active + offset)
const testimonial = testimonials[index]

const isActive = offset === 0

return(

<div
key={index}
className={`
transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)]
rounded-3xl backdrop-blur-lg border border-white/10
p-6 md:p-10 flex flex-col justify-between

${isActive
? "w-full sm:w-[420px] md:w-[520px] bg-white/10 shadow-2xl scale-100"
: "hidden sm:flex sm:w-[320px] md:w-[360px] bg-white/5 scale-90"
}
`}
>

{/* Quote Icon */}

<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#D4A13E]/20 flex items-center justify-center text-[#D4A13E]">

<Quote size={20}/>

</div>

{/* Quote */}

<p className={`leading-relaxed mt-4 ${isActive ? "text-white text-base md:text-lg" : "text-gray-300 text-sm"}`}>
"{testimonial.quote}"
</p>

{/* Client */}

<div className="mt-6">

<p className="font-semibold text-white">
{testimonial.name}
</p>

<p className="text-gray-400 text-sm">
{testimonial.role}, {testimonial.company}
</p>

</div>

</div>

)

})}

</div>


{/* Indicators */}

<div className="flex justify-center gap-2 mt-10 md:mt-14">

{testimonials.map((_,i)=>(
<div
key={i}
className={`h-2 rounded-full transition-all duration-300 ${
i===active
? "w-8 bg-[#D4A13E]"
: "w-2 bg-gray-500"
}`}
/>
))}

</div>

</div>

</section>

)
}