"use client"

import { insights } from "@/data/insights"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomeInsights(){

const posts = insights.slice(0,5)

const gradients = [
"bg-gradient-to-br from-emerald-500/20 via-green-400/10 to-transparent",
"bg-gradient-to-br from-green-500/20 via-emerald-400/10 to-transparent",
"bg-gradient-to-br from-emerald-400/20 via-green-500/10 to-transparent",
"bg-gradient-to-br from-green-400/20 via-emerald-300/10 to-transparent",
"bg-gradient-to-br from-emerald-500/20 via-green-300/10 to-transparent"
]

return(

<section className="relative py-32 px-6 overflow-hidden bg-white">

{/* GREEN GRADIENT BACKGROUND */}

<div className="absolute inset-0 bg-gradient-to-b from-emerald-100/60 via-white to-white"/>


{/* ORBIT BACKGROUND */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

{/* orbit 1 */}

<div className="absolute w-[900px] h-[900px] rounded-full border border-emerald-300/30 animate-[spin_90s_linear_infinite]">

<div className="absolute -top-2 left-1/2 w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-400"/>

</div>

{/* orbit 2 */}

<div className="absolute w-[650px] h-[650px] rounded-full border border-green-300/30 animate-[spin_70s_linear_infinite_reverse]">

<div className="absolute -top-2 left-1/2 w-2.5 h-2.5 bg-green-500 rounded-full shadow-md shadow-green-400"/>

</div>

{/* orbit 3 */}

<div className="absolute w-[420px] h-[420px] rounded-full border border-emerald-200/40 animate-[spin_50s_linear_infinite]">

<div className="absolute -top-2 left-1/2 w-2 h-2 bg-emerald-600 rounded-full shadow shadow-emerald-500"/>

</div>

</div>


<div className="relative max-w-7xl mx-auto">

{/* HEADER */}

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

<div>

<h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-emerald-500 to-green-700 bg-clip-text text-transparent">
Insights & Perspectives
</h2>

<p className="mt-4 text-gray-600 max-w-xl">
Industry perspectives, project milestones and strategic insights shaping the future of decentralized energy infrastructure across Africa.
</p>

</div>

<Link
href="/insights"
className="flex items-center gap-2 text-emerald-600 font-medium group"
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

<div className={`relative rounded-3xl my-6 p-7 ${gradient} backdrop-blur-md border border-emerald-100 shadow-lg hover:shadow-2xl transition duration-500 h-[430px] flex flex-col`}>

{/* IMAGE */}

<div className="relative h-[180px] rounded-xl overflow-hidden">

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

<h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition">
{post.title}
</h3>

<p className="text-sm text-gray-600 mt-3 line-clamp-3">
{post.description}
</p>

<span className="mt-auto flex items-center gap-2 text-emerald-600 font-medium">

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
className="flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition"
>

Explore All Insights

<ArrowRight/>

</Link>

</div>

</div>

</section>

)
}