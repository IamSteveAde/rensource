"use client"

import { ArrowDown, FileText } from "lucide-react"

export default function BrochureCTA(){

return(

<section className="relative py-32 px-6 overflow-hidden bg-white">

{/* BACKGROUND GRADIENT */}

<div className="absolute inset-0 bg-gradient-to-b from-emerald-100/60 via-white to-white"/>


{/* ORBIT BACKGROUND */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-[900px] h-[900px] rounded-full border border-emerald-300/30 animate-[spin_90s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-400"/>
</div>

<div className="absolute w-[650px] h-[650px] rounded-full border border-green-300/30 animate-[spin_70s_linear_infinite_reverse]">
<div className="absolute -top-2 left-1/2 w-2.5 h-2.5 bg-green-500 rounded-full shadow-md shadow-green-400"/>
</div>

<div className="absolute w-[420px] h-[420px] rounded-full border border-emerald-200/40 animate-[spin_50s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-2 h-2 bg-emerald-600 rounded-full shadow shadow-emerald-500"/>
</div>

</div>


<div className="relative max-w-6xl mx-auto">

{/* GLASS CARD */}

<div className="relative rounded-3xl border border-emerald-100 bg-white/80 backdrop-blur-xl shadow-2xl p-10 md:p-16">

{/* subtle gradient glow */}

<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-green-400/5 to-transparent pointer-events-none"/>


<div className="relative grid md:grid-cols-2 gap-10 items-center">


{/* TEXT SIDE */}

<div>

<h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-emerald-500 to-green-700 bg-clip-text text-transparent">
Download Our Company Brochure
</h2>

<p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
Discover our vision, projects, and the innovative solutions driving decentralized energy infrastructure across Africa.
</p>

<p className="mt-4 text-gray-600 leading-relaxed max-w-lg">
Our brochure provides an overview of our company, capabilities, strategic focus, and the impact we are creating in emerging energy markets.
</p>


{/* CTA BUTTON */}

<div className="mt-10">

<a
href="/data/Rensource Brochure.pdf"
download
className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300"
>

Download Brochure

<ArrowDown className="w-5 h-5"/>

</a>

</div>

</div>


{/* DOCUMENT PREVIEW */}

<div className="relative">

<div className="rounded-2xl border border-emerald-100 bg-white shadow-lg p-8 flex flex-col items-center justify-center text-center">

<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 mb-5">
<FileText size={32}/>
</div>

<h3 className="font-semibold text-gray-900 text-lg">
Company Brochure
</h3>

<p className="text-sm text-gray-500 mt-2">
PDF Document
</p>

<div className="mt-6 w-full h-[6px] rounded-full bg-emerald-100 overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-emerald-500 to-green-600"/>
</div>

<p className="text-xs text-gray-400 mt-3">
Company Overview & Capabilities
</p>

</div>

</div>


</div>

</div>

</div>

</section>

)

}