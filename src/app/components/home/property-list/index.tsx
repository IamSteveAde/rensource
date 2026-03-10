"use client"

import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { Zap, Leaf, DollarSign } from "lucide-react"

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
gradient: "from-[#3B82F6]/30 via-white/5 to-transparent"
},
{
icon: Leaf,
value: 5588,
suffix: " MT",
label: "Cumulative CO₂ Saved",
gradient: "from-[#22C55E]/30 via-white/5 to-transparent"
},
{
icon: DollarSign,
value: 14.2,
suffix: "M",
label: "Total Client Savings ($)",
gradient: "from-[#D4A13E]/30 via-white/5 to-transparent"
}
]

return (

<section
ref={ref}
className="relative py-24 md:py-32 px-6 overflow-hidden"
>

{/* Background */}

<div className="absolute inset-0 bg-gradient-to-br from-[#D4A13E] via-[#1A2B4C] to-[#0f1d34]" />

<div className="max-w-6xl mx-auto relative">

{/* Header */}

<div className="text-center mb-16">

<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
Impact Dashboard
</h2>

<p className="text-gray-200 mt-4 max-w-2xl mx-auto text-sm md:text-base">
A dynamic view of RenSource’s operational footprint across Africa,
tracking deployed capacity, environmental impact, and financial
savings delivered to businesses.
</p>

</div>

{/* Stats */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

{stats.map((stat,index)=>{

const Icon = stat.icon

return(

<div
key={index}
className={`relative rounded-xl p-8 text-center border border-white/10 bg-gradient-to-br ${stat.gradient} backdrop-blur-md hover:scale-[1.03] transition-all duration-300`}
>

{/* Icon */}

<div className="flex justify-center mb-4">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 text-[#D4A13E]">

<Icon size={24} />

</div>

</div>

{/* Number */}

<h3 className="text-3xl md:text-4xl font-semibold text-white">

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

{/* Label */}

<p className="text-gray-200 mt-2 text-sm md:text-base">
{stat.label}
</p>

</div>

)

})}

</div>

</div>

</section>

)
}