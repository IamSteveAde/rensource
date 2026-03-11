"use client"

import { insights } from "@/data/insights"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Search } from "lucide-react"

export default function InsightsPage(){

const [search,setSearch] = useState("")
const [page,setPage] = useState(1)

const perPage = 6

const filtered = insights.filter(post =>
post.title.toLowerCase().includes(search.toLowerCase())
)

const start = (page-1)*perPage
const paginated = filtered.slice(start,start+perPage)

const gradients = [
"from-emerald-200/40",
"from-green-200/40",
"from-teal-200/40",
"from-emerald-300/40",
"from-green-300/40",
"from-teal-300/40"
]

return(

<main className="overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">

{/* HERO */}

<section className="relative h-screen flex items-center justify-center overflow-hidden">

<Image
src="/images/hero/h1.webp"
fill
alt="Insights"
className="object-cover"
/>

<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/80 to-green-700/80"/>


{/* ORBIT ENERGY BACKGROUND */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-[900px] h-[900px] border border-emerald-300/20 rounded-full animate-[spin_120s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-3 h-3 bg-emerald-400 rounded-full"/>
</div>

<div className="absolute w-[650px] h-[650px] border border-green-300/20 rounded-full animate-[spin_90s_linear_infinite_reverse]">
<div className="absolute -top-2 left-1/2 w-2.5 h-2.5 bg-green-400 rounded-full"/>
</div>

</div>


<div className="relative text-center text-white max-w-4xl px-6">

<h1 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-emerald-300 to-green-200 bg-clip-text text-transparent">
Insights & News
</h1>

<p className="mt-6 text-white/80">
Explore the latest renewable energy insights,
projects and partnerships from Rensource.
</p>

</div>


{/* PARTNER LOGOS */}

<div className="absolute bottom-6 w-full flex justify-center px-4">

<div className="w-full max-w-7xl overflow-hidden bg-white rounded-xl py-3 shadow-lg">

<div className="flex w-max items-center gap-10 animate-partners">

<PartnerLogo src="/images/logo/p1.png"/>
<PartnerLogo src="/images/logo/p2.png"/>
<PartnerLogo src="/images/logo/p3.png"/>
<PartnerLogo src="/images/logo/p4.png"/>
<PartnerLogo src="/images/logo/p5.png"/>
<PartnerLogo src="/images/logo/p6.png"/>

<PartnerLogo src="/images/logo/p1.png"/>
<PartnerLogo src="/images/logo/p2.png"/>
<PartnerLogo src="/images/logo/p3.png"/>
<PartnerLogo src="/images/logo/p4.png"/>
<PartnerLogo src="/images/logo/p5.png"/>
<PartnerLogo src="/images/logo/p6.png"/>

</div>

</div>

</div>

</section>



{/* SEARCH */}

<section className="py-16 relative">

<div className="max-w-6xl mx-auto px-6">

<div className="relative max-w-xl mx-auto">

<Search className="absolute left-4 top-3 text-gray-400"/>

<input
value={search}
onChange={(e)=>setSearch(e.target.value)}
placeholder="Search insights..."
className="w-full pl-12 pr-4 py-3 border border-emerald-200 rounded-full focus:ring-2 focus:ring-emerald-500"
/>

</div>

</div>

</section>



{/* INSIGHTS GRID */}

<section className="relative py-24 overflow-hidden">


{/* ORBIT BACKGROUND */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-[900px] h-[900px] border border-emerald-200/40 rounded-full animate-[spin_120s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-3 h-3 bg-emerald-500 rounded-full"/>
</div>

<div className="absolute w-[600px] h-[600px] border border-green-200/40 rounded-full animate-[spin_90s_linear_infinite_reverse]">
<div className="absolute -top-2 left-1/2 w-2.5 h-2.5 bg-green-500 rounded-full"/>
</div>

</div>


<div className="relative max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{paginated.map((post,index)=>(

<Link
href={`/insights/${post.slug}`}
key={post.slug}
className="group"
>

<div className={`rounded-3xl p-[1px] bg-gradient-to-br ${gradients[index%6]} to-transparent`}>

<div className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition h-[430px] flex flex-col">

<div className="relative h-[200px] overflow-hidden">

<Image
src={post.image}
fill
alt={post.title}
className="object-cover group-hover:scale-110 transition duration-700"
/>

</div>

<div className="p-6 flex flex-col flex-grow">

<p className="text-sm text-emerald-600 font-medium">
{post.date}
</p>

<h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition">
{post.title}
</h3>

<p className="text-sm text-gray-600 mt-3 line-clamp-3">
{post.description}
</p>

<span className="mt-auto text-emerald-600 font-medium text-sm">
Read More →
</span>

</div>

</div>

</div>

</Link>

))}

</div>



{/* PAGINATION */}

<div className="flex justify-center gap-6 mt-16">

<button
onClick={()=>setPage(page-1)}
disabled={page===1}
className="px-6 py-2 rounded-full border border-emerald-200 hover:border-emerald-600 transition"
>
Previous
</button>

<button
onClick={()=>setPage(page+1)}
disabled={start+perPage >= filtered.length}
className="px-6 py-2 rounded-full border border-emerald-200 hover:border-emerald-600 transition"
>
Next
</button>

</div>

</div>

</section>

</main>

)
}



function PartnerLogo({src}:{src:string}){

return(

<Image
src={src}
alt="partner"
width={70}
height={24}
className="opacity-70 hover:opacity-100 transition"
/>

)

}