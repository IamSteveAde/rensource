"use client"

import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { Zap, Factory, Leaf, Fuel } from "lucide-react"

export default function ImpactNumbers() {

const { ref, inView } = useInView({
triggerOnce: true,
threshold: 0.4
})

const stats = [
{
icon: Factory,
value: 12,
suffix: "+",
label: "Projects Delivered",
gradient: "from-[#D4A13E]/30 via-white/5 to-transparent"
},
{
icon: Zap,
value: 10,
suffix: "MW",
label: "Installed & Projected Capacity",
gradient: "from-[#3B82F6]/30 via-white/5 to-transparent"
},
{
icon: Leaf,
value: 5588,
suffix: " MT",
label: "CO₂ Emissions Saved",
gradient: "from-[#22C55E]/30 via-white/5 to-transparent"
},
{
icon: Fuel,
value: 2,
suffix: "M Liters",
label: "Fuel Saved",
gradient: "from-[#F97316]/30 via-white/5 to-transparent"
}
]

return (

<section
ref={ref}
className="relative py-20 md:py-28 px-6 overflow-hidden"
>

{/* Gold → Blue background */}

<div className="absolute inset-0 bg-gradient-to-br from-[#D4A13E] via-[#1A2B4C] to-[#0f1d34]" />

<div className="max-w-6xl mx-auto relative">

{/* Header */}

<div className="text-center mb-14">

<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
Our Impact
</h2>

<p className="text-gray-200 mt-4 max-w-xl mx-auto text-sm md:text-base">
Delivering measurable energy infrastructure across Africa.
</p>

</div>


{/* Stats Grid */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">

{stats.map((stat,index)=>{

const Icon = stat.icon

return(

<div
key={index}
className={`relative rounded-xl p-6 text-center border border-white/10 bg-gradient-to-br ${stat.gradient} backdrop-blur-md hover:scale-[1.03] transition-all duration-300`}
>

{/* icon */}

<div className="flex justify-center mb-3">

<div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-[#D4A13E]">

<Icon size={20} />

</div>

</div>

{/* number */}

<h3 className="text-2xl md:text-3xl font-semibold text-white">

{inView && (

<CountUp
end={stat.value}
duration={2}
separator=","
/>

)}

{stat.suffix}

</h3>

{/* label */}

<p className="text-gray-200 mt-1 text-xs md:text-sm">
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