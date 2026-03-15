"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function EnergyImpactCalculators(){

const [tab,setTab]=useState("emissions")
const [dieselSpend,setDieselSpend]=useState(2000)

/* CONSTANTS */

const dieselPrice=1.2
const co2PerLiter=2.68

/* CALCULATIONS */

const dieselLiters=dieselSpend/dieselPrice
const monthlyCO2=dieselLiters*co2PerLiter
const yearlyCO2=monthlyCO2*12
const carbonReduction=yearlyCO2*0.7

const monthlySavings=dieselSpend*0.35
const yearlySavings=monthlySavings*12
const tenYearSavings=yearlySavings*10

const trees=Math.round(yearlyCO2/21)
const cars=Math.round(yearlyCO2/4600)

return(

<section className="relative py-32 px-6 overflow-hidden bg-white">

{/* BACKGROUND */}

<div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white"/>

{/* ORBITS */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-[900px] h-[900px] border border-emerald-200/40 rounded-full animate-[spin_120s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-3 h-3 bg-emerald-500 rounded-full"/>
</div>

<div className="absolute w-[600px] h-[600px] border border-green-200/40 rounded-full animate-[spin_90s_linear_infinite_reverse]">
<div className="absolute -top-2 left-1/2 w-2.5 h-2.5 bg-green-500 rounded-full"/>
</div>

<div className="absolute w-[350px] h-[350px] border border-emerald-200/40 rounded-full animate-[spin_60s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-2 h-2 bg-emerald-600 rounded-full"/>
</div>

</div>

<div className="max-w-5xl mx-auto relative">

{/* HEADER */}

<div className="text-center mb-14">

<h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-emerald-500 to-green-700 bg-clip-text text-transparent">
Energy Impact Calculator
</h2>

<p className="mt-4 text-gray-600 max-w-xl mx-auto">
Understand your diesel emissions and discover the financial and
environmental benefits of switching to solar energy.
</p>

</div>

{/* TABS */}

<div className="flex justify-center mb-10">

<div className="bg-gray-100 rounded-full p-1 flex">

<button
onClick={()=>setTab("emissions")}
className={`px-6 py-2 rounded-full text-sm font-medium transition
${tab==="emissions"?"bg-emerald-600 text-white":"text-gray-600"}`}
>
Emissions Calculator
</button>

<button
onClick={()=>setTab("savings")}
className={`px-6 py-2 rounded-full text-sm font-medium transition
${tab==="savings"?"bg-emerald-600 text-white":"text-gray-600"}`}
>
Carbon Savings
</button>

</div>

</div>

{/* CARD */}

<div className="bg-white/80 backdrop-blur-xl border border-emerald-100 shadow-[0_30px_80px_rgba(0,0,0,0.08)] rounded-3xl p-8 md:p-12">

{/* SLIDER */}

<div className="mb-10">

<label className="text-sm text-gray-600">
Monthly Diesel Spend
</label>

{/* VALUE DISPLAY */}

<div className="mt-2 mb-3 text-3xl font-semibold text-emerald-700">
${dieselSpend.toLocaleString()}
</div>

<input
type="range"
min="500"
max="20000"
step="100"
value={dieselSpend}
onChange={(e)=>setDieselSpend(Number(e.target.value))}
className="w-full accent-emerald-600"
/>

<div className="flex justify-between text-xs text-gray-500 mt-2">
<span>$500</span>
<span>$20,000</span>
</div>

</div>
{/* TAB CONTENT */}

{tab==="emissions" &&(

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
className="grid md:grid-cols-4 gap-6"
>

<div className="bg-emerald-50 p-6 rounded-xl">

<p className="text-xs text-gray-500">Monthly CO₂ Emissions</p>

<p className="text-2xl font-bold text-gray-900 mt-1">
{Math.round(monthlyCO2).toLocaleString()} kg
</p>

</div>

<div className="bg-emerald-600 text-white p-6 rounded-xl">

<p className="text-xs text-white/70">Yearly CO₂ Emissions</p>

<p className="text-2xl font-bold mt-1">
{Math.round(yearlyCO2/1000)} tons
</p>

</div>

<div className="bg-green-50 p-6 rounded-xl">

<p className="text-xs text-gray-500">Trees Equivalent</p>

<p className="text-2xl font-bold text-green-700 mt-1">
{trees}
</p>

</div>

<div className="bg-green-50 p-6 rounded-xl">

<p className="text-xs text-gray-500">Cars Removed</p>

<p className="text-2xl font-bold text-green-700 mt-1">
{cars}
</p>

</div>

</motion.div>

)}

{tab==="savings" &&(

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
className="grid md:grid-cols-3 gap-6"
>

<div className="bg-emerald-50 p-6 rounded-xl">

<p className="text-xs text-gray-500">Monthly Savings</p>

<p className="text-2xl font-bold text-gray-900 mt-1">
${Math.round(monthlySavings).toLocaleString()}
</p>

</div>

<div className="bg-emerald-600 text-white p-6 rounded-xl">

<p className="text-xs text-white/70">Annual Savings</p>

<p className="text-2xl font-bold mt-1">
${Math.round(yearlySavings).toLocaleString()}
</p>

</div>

<div className="bg-green-50 p-6 rounded-xl">

<p className="text-xs text-gray-500">10 Year Savings</p>

<p className="text-2xl font-bold text-green-700 mt-1">
${Math.round(tenYearSavings).toLocaleString()}
</p>

</div>

</motion.div>

)}

</div>

</div>

</section>

)
}