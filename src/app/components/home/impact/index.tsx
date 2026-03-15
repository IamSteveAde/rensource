"use client"

import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { Zap, Leaf, DollarSign } from "lucide-react"
import { motion } from "framer-motion"

export default function ImpactDashboard() {

const { ref, inView } = useInView({
triggerOnce: true,
threshold: 0.4
})

const stats = [
{
icon: Zap,
value: 10,
suffix: " MW",
label: "Total MW Deployed",
gradient: "from-emerald-500/20 via-white/5 to-transparent"
},
{
icon: Leaf,
value: 5588,
suffix: " MT",
label: "Cumulative CO₂ Saved",
gradient: "from-green-500/20 via-white/5 to-transparent"
},
{
icon: DollarSign,
value: 14.2,
suffix: "M",
label: "Total Client Savings ($)",
gradient: "from-lime-400/20 via-white/5 to-transparent"
}
]

return (

<section
ref={ref}
className="relative py-28 md:py-36 px-6 overflow-hidden"
>

{/* BACKGROUND IMAGE */}

<div
className="absolute inset-0 bg-cover bg-center"
style={{ backgroundImage: "url('/images/hero/h1.webp')" }}
/>

{/* GREEN OVERLAY */}

<div className="absolute inset-0 bg-gradient-to-b from-emerald-900/85 via-emerald-900/80 to-black/80" />

{/* ENERGY GLOW */}

<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-400/20 blur-[140px] rounded-full" />

{/* ENERGY GRID */}

<div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#22c55e_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)] bg-[size:80px_80px]" />

{/* FLOATING ENERGY PARTICLES */}

<motion.div
className="absolute top-20 left-20 w-3 h-3 bg-emerald-400 rounded-full"
animate={{ y: [0, -40, 0], opacity: [0.3, 1, 0.3] }}
transition={{ duration: 6, repeat: Infinity }}
/>

<motion.div
className="absolute bottom-24 right-32 w-2 h-2 bg-green-400 rounded-full"
animate={{ y: [0, -50, 0], opacity: [0.3, 1, 0.3] }}
transition={{ duration: 7, repeat: Infinity }}
/>

<div className="max-w-6xl mx-auto relative">

{/* HEADER */}

<div className="text-center mb-20">

<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">

Our Impact

<span className="block bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">

Across Africa

</span>

</h2>

<p className="text-gray-200 mt-6 max-w-2xl mx-auto text-sm md:text-lg">
A real-time snapshot of RenSource’s growing renewable
energy footprint powering businesses while reducing
carbon emissions across the continent.
</p>

</div>

{/* STATS */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

{stats.map((stat,index)=>{

const Icon = stat.icon

return(

<motion.div
key={index}
initial={{opacity:0, y:40}}
animate={inView ? {opacity:1, y:0} : {}}
transition={{duration:0.6, delay:index*0.2}}
className={`relative rounded-2xl p-10 text-center border border-white/10 bg-gradient-to-br ${stat.gradient} backdrop-blur-md hover:scale-[1.05] transition-all duration-300 shadow-[0_25px_60px_rgba(16,185,129,0.25)]`}
>

{/* ICON */}

<div className="flex justify-center mb-6">

<div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 text-emerald-400">

<Icon size={28} />

</div>

</div>

{/* NUMBER */}

<h3 className="text-4xl md:text-5xl font-semibold text-white">

{inView && (

<CountUp
end={stat.value}
duration={2}
separator=","
decimals={stat.value % 1 !== 0 ? 1 : 0}
/>

)}

{stat.suffix}

</h3>

{/* LABEL */}

<p className="text-gray-200 mt-3 text-sm md:text-base">
{stat.label}
</p>

</motion.div>

)

})}

</div>

</div>

</section>

)
}