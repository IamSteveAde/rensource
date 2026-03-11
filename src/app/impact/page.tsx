"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { Leaf, Cloud, DollarSign, ZapIcon } from "lucide-react"



export default function ImpactPage(){

const [tab,setTab]=useState("emissions")

return(

<div className="relative overflow-hidden bg-white">

{/* ================= HERO ================= */}

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

{/* BACKGROUND IMAGE */}

<Image
src="/images/hero/h2.webp"
alt="solar infrastructure"
fill
priority
className="object-cover"
/>

{/* OVERLAY */}

<div className="absolute inset-0 bg-emerald-950/70"/>

{/* HERO CONTENT */}

<div className="relative z-10 max-w-5xl px-6 text-center text-white">

<h1 className="
text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
font-semibold
leading-tight
bg-gradient-to-r
from-emerald-400
via-green-300
to-emerald-400
bg-clip-text
text-transparent
">

The Impact of Going Solar

</h1>

<p className="mt-6 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto">

Switching from diesel generators to solar energy reduces emissions,
lowers operating costs and accelerates Africa’s transition to a
sustainable energy future.

</p>

</div>

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

{/* DUPLICATE FOR LOOP */}

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

{/* ================= MAIN SECTION ================= */}

<section className="relative py-24 px-6 overflow-hidden">

{/* BACKGROUND */}

<div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white"/>

{/* ORBIT BACKGROUND */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-[900px] h-[900px] border border-emerald-200/40 rounded-full animate-[spin_120s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-3 h-3 bg-emerald-500 rounded-full"/>
</div>

<div className="absolute w-[650px] h-[650px] border border-green-200/40 rounded-full animate-[spin_90s_linear_infinite_reverse]">
<div className="absolute -top-2 left-1/2 w-2.5 h-2.5 bg-green-500 rounded-full"/>
</div>

<div className="absolute w-[400px] h-[400px] border border-emerald-200/40 rounded-full animate-[spin_60s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-2 h-2 bg-emerald-600 rounded-full"/>
</div>

</div>

<div className="max-w-7xl mx-auto relative">

{/* ================= TABS ================= */}

<div className="flex justify-center mb-16">

<div className="bg-gray-100 rounded-full p-1 flex gap-1">

<button
onClick={()=>setTab("emissions")}
className={`px-6 py-2 rounded-full text-sm font-medium transition
${tab==="emissions"?"bg-emerald-600 text-white":"text-gray-600"}`}
>
Emissions
</button>

<button
onClick={()=>setTab("climate")}
className={`px-6 py-2 rounded-full text-sm font-medium transition
${tab==="climate"?"bg-emerald-600 text-white":"text-gray-600"}`}
>
Climate Impact
</button>

<button
onClick={()=>setTab("economic")}
className={`px-6 py-2 rounded-full text-sm font-medium transition
${tab==="economic"?"bg-emerald-600 text-white":"text-gray-600"}`}
>
Economic Savings
</button>

</div>

</div>

{/* ================= CONTENT ================= */}

<div className="grid md:grid-cols-2 gap-14 items-center">

{/* TEXT */}

<motion.div
key={tab}
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.4}}
>

{tab==="emissions" &&(

<ContentBlock
icon={<Cloud className="text-emerald-600"/>}
title="Diesel Emissions Impact"
text="Diesel generators produce large amounts of carbon dioxide and pollutants contributing to climate change and poor air quality."
points={[
"High carbon emissions from diesel combustion",
"Air pollution affecting communities",
"Inefficient energy production"
]}
/>

)}

{tab==="climate" &&(

<ContentBlock
icon={<Leaf className="text-emerald-600"/>}
title="Climate Impact of Solar"
text="Solar energy dramatically reduces greenhouse gas emissions while providing reliable electricity."
points={[
"Up to 70% reduction in carbon emissions",
"Reduced fossil fuel dependence",
"Supports global climate targets"
]}
/>

)}

{tab==="economic" &&(

<ContentBlock
icon={<DollarSign className="text-emerald-600"/>}
title="Economic Benefits"
text="Solar hybrid systems stabilize energy costs and reduce exposure to volatile diesel prices."
points={[
"30–60% reduction in energy costs",
"Predictable electricity pricing",
"Lower operational risk"
]}
/>

)}

</motion.div>

{/* IMAGE */}

<motion.div
key={`${tab}-image`}
initial={{opacity:0,scale:0.95}}
animate={{opacity:1,scale:1}}
transition={{duration:0.4}}
className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl"
>

<Image
src={
tab==="emissions"
? "/images/hero/dy.png"
: tab==="climate"
? "/images/hero/cis.png"
: "/images/hero/ecs.png"
}
fill
alt="impact"
className="object-cover"
/>

</motion.div>

</div>

{/* ================= STATS ================= */}

<div className="grid md:grid-cols-3 gap-8 mt-24 text-center">

<Stat
value="70%"
label="Lower Carbon Emissions"
icon={<Leaf size={22}/>}
/>

<Stat
value="60%"
label="Energy Cost Reduction"
icon={<DollarSign size={22}/>}
/>

<Stat
value="20+"
label="Years System Lifespan"
icon={<ZapIcon size={22}/>}
/>

</div>

{/* ================= CTA ================= */}

<div className="mt-24 text-center">

<h3 className="text-3xl font-semibold">
Start Your Solar Transition Today
</h3>

<p className="text-gray-600 mt-4 max-w-xl mx-auto">
Discover how your business can reduce emissions, lower energy costs and transition to sustainable power.
</p>

<Link
href="/contact"
className="inline-flex items-center justify-center mt-8 bg-emerald-600 text-white px-10 py-4 rounded-full hover:bg-emerald-700 transition font-medium"
>
Reach Out to Our Energy Team
</Link>

</div>

</div>

</section>

</div>

)
}

function PartnerLogo({ src }: { src: string }) {
return(
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

function ContentBlock({icon,title,text,points}:{icon:any,title:string,text:string,points:string[]}){

return(

<div>

<div className="flex items-center gap-3 mb-6">
{icon}
<h2 className="text-2xl font-semibold">{title}</h2>
</div>

<p className="text-gray-600 leading-relaxed mb-6">
{text}
</p>

<ul className="space-y-3 text-gray-700">
{points.map((p,i)=>(<li key={i}>• {p}</li>))}
</ul>

</div>

)

}

function Stat({
value,
label,
icon
}:{
value:string
label:string
icon:React.ReactNode
}){

return(

<motion.div
whileHover={{ y:-6 }}
transition={{ type:"spring", stiffness:200, damping:20 }}
className="
relative
p-8
rounded-2xl
bg-white/80
backdrop-blur-lg
border border-emerald-100
shadow-[0_10px_40px_rgba(16,185,129,0.15)]
overflow-hidden
group
"
>

{/* subtle glow */}

<div className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 via-transparent to-green-200/10 opacity-0 group-hover:opacity-100 transition"/>

{/* icon */}

<div className="
w-12 h-12
flex items-center justify-center
rounded-xl
bg-gradient-to-br
from-emerald-500
to-green-600
text-white
shadow-lg
mb-5
">

{icon}

</div>

{/* stat number */}

<h3 className="text-3xl md:text-4xl font-semibold text-emerald-700 tracking-tight">
{value}
</h3>

{/* label */}

<p className="mt-2 text-gray-600 text-sm md:text-base">
{label}
</p>

</motion.div>

)

}