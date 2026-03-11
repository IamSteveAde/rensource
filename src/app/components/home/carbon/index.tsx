"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CarbonFootprintCalculator(){

const [dieselLiters,setDieselLiters]=useState(1000)

/* CONSTANTS */

const co2PerLiter=2.68

/* CALCULATIONS */

const monthlyCO2=dieselLiters*co2PerLiter
const yearlyCO2=monthlyCO2*12

const trees=Math.round(yearlyCO2/21)
const cars=Math.round(yearlyCO2/4600)
const flights=Math.round(yearlyCO2/250)

return(

<main className="bg-white overflow-hidden">

<section className="relative py-20 px-6 overflow-hidden">

{/* GRADIENT BACKGROUND */}

<div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white"/>

{/* ORBIT ANIMATION */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

{/* ORBIT 1 */}

<div className="absolute w-[900px] h-[900px] border-2 border-emerald-300/30 rounded-full animate-[spin_120s_linear_infinite] shadow-[0_0_40px_rgba(16,185,129,0.15)]">

<div className="absolute -top-2 left-1/2 w-4 h-4 bg-emerald-500 rounded-full shadow-lg"/>

</div>


{/* ORBIT 2 */}

<div className="absolute w-[650px] h-[650px] border-2 border-green-300/30 rounded-full animate-[spin_90s_linear_infinite_reverse] shadow-[0_0_30px_rgba(34,197,94,0.15)]">

<div className="absolute -top-2 left-1/2 w-3 h-3 bg-green-500 rounded-full shadow-md"/>

</div>


{/* ORBIT 3 */}

<div className="absolute w-[420px] h-[420px] border-2 border-emerald-300/30 rounded-full animate-[spin_60s_linear_infinite] shadow-[0_0_20px_rgba(16,185,129,0.15)]">

<div className="absolute -top-2 left-1/2 w-3 h-3 bg-emerald-600 rounded-full shadow-md"/>

</div>

</div>
<div className="max-w-5xl mx-auto relative">

{/* HEADER */}

<div className="text-center mb-12">

<h1 className="text-5xl md:text-6xl font-semibold leading-tight">

<span className="text-gray-900">
The Hidden Cost
</span>

<br/>

<span className="bg-gradient-to-r from-emerald-500 to-green-700 bg-clip-text text-transparent">
Of Every Liter of Diesel
</span>

</h1>

<p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">

Every liter of diesel burned releases carbon dioxide into the atmosphere.
Multiply that by months, years, and thousands of generators, and the impact becomes enormous.

Use the calculator below to reveal the real carbon footprint
of your diesel consumption.

</p>

</div>


{/* CALCULATOR */}

<div className="bg-white/80 backdrop-blur-xl border border-emerald-100 shadow-[0_30px_80px_rgba(0,0,0,0.08)] rounded-3xl p-8 md:p-12">

{/* INPUT */}

<div className="mb-10">

<label className="text-sm text-gray-600">
Monthly Diesel Consumption
</label>

<div className="text-4xl font-semibold text-emerald-600 mt-2 mb-4">
{dieselLiters.toLocaleString()} Liters
</div>

<input
type="range"
min="100"
max="20000"
step="50"
value={dieselLiters}
onChange={(e)=>setDieselLiters(Number(e.target.value))}
className="w-full accent-emerald-600"
/>

<div className="flex justify-between text-xs text-gray-500 mt-2">
<span>100L</span>
<span>20,000L</span>
</div>

</div>


{/* RESULTS */}

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
className="grid md:grid-cols-4 gap-6"
>

<div className="bg-emerald-50 p-6 rounded-xl">

<p className="text-xs text-gray-500">
Monthly CO₂ Emissions
</p>

<p className="text-2xl font-bold text-gray-900 mt-1">
{Math.round(monthlyCO2).toLocaleString()} kg
</p>

</div>


<div className="bg-emerald-600 text-white p-6 rounded-xl">

<p className="text-xs text-white/70">
Yearly CO₂ Emissions
</p>

<p className="text-2xl font-bold mt-1">
{Math.round(yearlyCO2/1000)} tons
</p>

</div>


<div className="bg-green-50 p-6 rounded-xl">

<p className="text-xs text-gray-500">
Trees Needed to Offset
</p>

<p className="text-2xl font-bold text-green-700 mt-1">
{trees}
</p>

</div>


<div className="bg-green-50 p-6 rounded-xl">

<p className="text-xs text-gray-500">
Cars Equivalent
</p>

<p className="text-2xl font-bold text-green-700 mt-1">
{cars}
</p>

</div>

</motion.div>


{/* IMPACT MESSAGE */}

<div className="mt-14 text-center max-w-2xl mx-auto">

<h3 className="text-3xl font-semibold text-gray-900">

That’s a Serious Carbon Footprint

</h3>

<p className="mt-4 text-gray-600 leading-relaxed">

Burning <strong>{dieselLiters.toLocaleString()} liters of diesel every month</strong> produces the same emissions as <strong>{cars} car(s) running for a year</strong>.

Over time, this carbon accumulates in the atmosphere,
contributing to climate change and air pollution.

</p>

</div>


{/* CTA */}

<div className="mt-10 text-center">

<Link href="/contact">

<button
className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-xl shadow-emerald-500/30 transition"
>

Reduce Your Carbon Footprint with Solar

</button>

</Link>

<p className="text-sm text-gray-500 mt-3">
Discover how clean energy can eliminate most of these emissions.
</p>

</div>

</div>

</div>

</section>

</main>

)
}