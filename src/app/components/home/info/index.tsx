"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA(){

return(

<section className="relative py-28 px-6 overflow-hidden">

{/* gradient background */}

<div className="absolute inset-0 bg-gradient-to-br from-[#D4A13E] via-[#1A2B4C] to-[#0f1d34]" />

{/* glow effects */}

<div className="absolute -top-20 -left-20 w-80 h-80 bg-[#D4A13E]/20 blur-3xl rounded-full"/>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A13E]/10 blur-3xl rounded-full"/>

<div className="max-w-4xl mx-auto text-center relative">

{/* headline */}

<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
Ready to Power Your Operations with Solar?
</h2>

{/* description */}

<p className="mt-6 text-gray-200 max-w-2xl mx-auto text-lg">
Reduce energy costs, eliminate diesel dependence,
and secure reliable power for your operations.
</p>

{/* buttons */}

<div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

<Link
href="/contact"
className="inline-flex items-center justify-center gap-2 bg-white text-[#1A2B4C] px-7 py-4 rounded-full font-medium hover:scale-[1.03] transition"
>

Start a Project

<ArrowRight size={18}/>

</Link>

<Link
href="/book-demo"
className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-7 py-4 rounded-full font-medium hover:bg-white/10 transition"
>

Book Consultation

</Link>

</div>

</div>

</section>

)

}