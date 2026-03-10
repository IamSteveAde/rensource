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
"from-[#1A2B4C]/15",
"from-[#D4A13E]/20",
"from-[#2f4f4f]/15",
"from-[#0f1d36]/15",
"from-[#CBA135]/20",
"from-[#1A2B4C]/10"
]

return(

<main>

{/* HERO */}

<section className="relative h-screen flex items-center justify-center">

<Image
src="/images/hero/h1.webp"
fill
alt="Insights"
className="object-cover"
/>

<div className="absolute inset-0 bg-[#1A2B4C]/90"/>

<div className="relative text-center text-white max-w-4xl px-6">

<h1 className="text-5xl md:text-6xl font-bold text-[#D4A13E]">
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

<section className="py-16 bg-gradient-to-b from-[#F5F0E8] to-white">

<div className="max-w-6xl mx-auto px-6">

<div className="relative max-w-xl mx-auto">

<Search className="absolute left-4 top-3 text-gray-400"/>

<input
value={search}
onChange={(e)=>setSearch(e.target.value)}
placeholder="Search insights..."
className="w-full pl-12 pr-4 py-3 border rounded-full"
/>

</div>

</div>

</section>



{/* GRID */}

<section className="py-24">

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{paginated.map((post,index)=>(

<Link
href={`/insights/${post.slug}`}
key={post.slug}
className="group"
>

<div className={`rounded-3xl p-[1px] bg-gradient-to-br ${gradients[index%6]} to-transparent`}>

<div className="bg-white rounded-3xl overflow-hidden h-[420px] flex flex-col">

<div className="relative h-[180px]">

<Image
src={post.image}
fill
alt={post.title}
className="object-cover"
/>

</div>

<div className="p-6 flex flex-col flex-grow">

<p className="text-sm text-gray-500">
{post.date}
</p>

<h3 className="mt-2 text-lg font-semibold text-[#1A2B4C] group-hover:text-[#D4A13E]">
{post.title}
</h3>

<p className="text-sm text-gray-600 mt-3 line-clamp-3">
{post.description}
</p>

<span className="mt-auto text-[#D4A13E] font-medium">
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
className="px-4 py-2 border rounded"
>
Previous
</button>

<button
onClick={()=>setPage(page+1)}
disabled={start+perPage >= filtered.length}
className="px-4 py-2 border rounded"
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
className="opacity-70"
/>

)

}