"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function EnergyAssessmentSection(){

const [step,setStep]=useState(1)
const [dieselSpend,setDieselSpend]=useState(2000)

const savings=Math.round(dieselSpend*0.35)
const yearly=savings*12

return(

<section className="relative py-32 px-6 overflow-hidden bg-white">

{/* GREEN GRADIENT BACKGROUND */}

<div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white"/>

{/* ENERGY ORBITS */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-[900px] h-[900px] border border-emerald-200/40 rounded-full animate-[spin_120s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-3 h-3 bg-emerald-500 rounded-full shadow"/>
</div>

<div className="absolute w-[600px] h-[600px] border border-green-200/40 rounded-full animate-[spin_90s_linear_infinite_reverse]">
<div className="absolute -top-2 left-1/2 w-2.5 h-2.5 bg-green-500 rounded-full"/>
</div>

<div className="absolute w-[350px] h-[350px] border border-emerald-200/40 rounded-full animate-[spin_60s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-2 bg-emerald-600 h-2 rounded-full"/>
</div>

</div>


<div className="max-w-5xl mx-auto relative">

{/* HEADER */}

<div className="text-center mb-14">

<h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-emerald-500 to-green-700 bg-clip-text text-transparent">
Energy Savings Calculator
</h2>

<p className="mt-4 text-gray-600 max-w-xl mx-auto">
Estimate how much your business could save by switching from diesel generators
to solar hybrid energy systems.
</p>

</div>


{/* CARD */}

<div className="relative bg-white/80 backdrop-blur-xl border border-emerald-100 shadow-[0_30px_80px_rgba(0,0,0,0.08)] rounded-3xl p-8 md:p-12">

{/* STEPPER */}

<div className="flex items-center gap-3 mb-10">

<div className={`h-2 flex-1 rounded-full ${step>=1?"bg-emerald-500":"bg-gray-200"}`}/>

<div className={`h-2 flex-1 rounded-full ${step>=2?"bg-emerald-500":"bg-gray-200"}`}/>

</div>


{/* STEP 1 */}

{step===1 &&(

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
>

{/* slider */}

<div className="mb-10">

<label className="text-sm text-gray-600">
Monthly Diesel Spend
</label>

<input
type="range"
min="500"
max="20000"
step="100"
value={dieselSpend}
onChange={(e)=>setDieselSpend(Number(e.target.value))}
className="w-full mt-4 accent-emerald-600"
/>

<div className="flex justify-between text-xs text-gray-500 mt-1">

<span>$500</span>
<span>$20,000</span>

</div>

</div>

{/* RESULTS */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

<div className="bg-emerald-50 p-6 rounded-xl">

<p className="text-xs text-gray-500">
Current Diesel Spend
</p>

<p className="text-2xl font-bold text-gray-900 mt-1">
${dieselSpend.toLocaleString()}
</p>

</div>

<div className="bg-emerald-600 text-white p-6 rounded-xl">

<p className="text-xs text-white/70">
Estimated Monthly Savings
</p>

<p className="text-2xl font-bold mt-1">
${savings.toLocaleString()}
</p>

</div>

<div className="bg-green-50 p-6 rounded-xl">

<p className="text-xs text-gray-500">
Estimated Annual Savings
</p>

<p className="text-2xl font-bold text-gray-900 mt-1">
${yearly.toLocaleString()}
</p>

</div>

</div>

<button
onClick={()=>setStep(2)}
className="w-full md:w-auto px-10 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition"
>

Continue

</button>

</motion.div>

)}


{/* STEP 2 */}

{step===2 &&(

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
>

<form className="space-y-5">

<input
type="text"
placeholder="Company Name"
className="w-full border rounded-lg px-4 py-3"
/>

<input
type="email"
placeholder="Email Address"
className="w-full border rounded-lg px-4 py-3"
/>

<input
type="tel"
placeholder="Phone Number"
className="w-full border rounded-lg px-4 py-3"
/>

<textarea
placeholder="Tell us about your energy needs"
className="w-full border rounded-lg px-4 py-3"
rows={3}
/>

<div className="flex flex-col md:flex-row gap-4 pt-3">

<button
type="button"
onClick={()=>setStep(1)}
className="flex-1 border border-gray-300 py-3 rounded-lg"
>
Previous
</button>

<button
type="submit"
className="flex-1 bg-emerald-700 text-white py-3 rounded-lg hover:bg-emerald-800"
>
Submit Assessment Request
</button>

</div>

</form>

</motion.div>

)}

</div>

</div>

</section>

)

}