"use client"

import { insights } from "@/data/insights"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomeInsights(){

const posts = insights.slice(0,5)

const gradients = [
"bg-gradient-to-br from-[#D4A13E]/20 via-[#D4A13E]/10 to-transparent",
"bg-gradient-to-br from-[#1A2B4C]/20 via-[#1A2B4C]/10 to-transparent",
"bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent",
"bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent",
"bg-gradient-to-br from-rose-500/20 via-rose-500/10 to-transparent"
]

return(

<section className="relative py-32 px-6 overflow-hidden">

{/* SECTION BACKGROUND */}

<div className="absolute inset-0 bg-gradient-to-b from-[#D4A13E]/25 via-white to-white"/>

<div className="relative max-w-7xl mx-auto">

{/* HEADER */}

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

<div>

<h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#D4A13E] to-[#1A2B4C] bg-clip-text text-transparent">
Insights & Perspectives
</h2>

<p className="mt-4 text-gray-600 max-w-xl">
Industry perspectives, project milestones and strategic insights shaping the future of decentralized energy infrastructure across Africa.
</p>

</div>

<Link
href="/insights"
className="flex items-center gap-2 text-[#D4A13E] font-medium group"
>

View All Insights

<ArrowRight className="group-hover:translate-x-1 transition"/>

</Link>

</div>


{/* SCROLLER */}

<div className="mt-16 overflow-x-scroll no-scrollbar">

<div className="flex gap-8 snap-x snap-mandatory">

{posts.map((post,index)=>{

const gradient = gradients[index]

return(

<Link
href={`/insights/${post.slug}`}
key={post.slug}
className="group snap-start min-w-[85%] md:min-w-[calc(33.333%-1rem)]"
>

{/* CARD */}

<div className={`relative rounded-3xl my-6 p-7 ${gradient} backdrop-blur-sm shadow-lg hover:shadow-2xl transition duration-500 h-[430px] flex flex-col`}>

{/* IMAGE */}

<div className="relative h-[180px]  rounded-xl overflow-hidden">

<Image
src={post.image}
fill
alt={post.title}
className="object-cover transition duration-700 group-hover:scale-105"
/>

</div>

{/* CONTENT */}

<div className="mt-6 flex flex-col flex-grow">

<p className="text-sm text-gray-500">
{post.date}
</p>

<h3 className="mt-2 text-lg font-semibold text-[#1A2B4C] group-hover:text-[#D4A13E] transition">
{post.title}
</h3>

<p className="text-sm text-gray-600 mt-3 line-clamp-3">
{post.description}
</p>

<span className="mt-auto flex items-center gap-2 text-[#D4A13E] font-medium">

Read Insight

<ArrowRight size={16}/>

</span>

</div>

</div>

</Link>

)

})}

</div>

</div>


{/* CTA */}

<div className="mt-20 flex justify-center">

<Link
href="/insights"
className="flex items-center gap-3 bg-[#1A2B4C] text-white px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-[#14223c] transition"
>

Explore All Insights

<ArrowRight/>

</Link>

</div>

</div>

</section>

)
}