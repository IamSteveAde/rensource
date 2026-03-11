"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { projects } from "@/data/projects"

export default function ProjectsPage(){

const [search,setSearch] = useState("")
const [category,setCategory] = useState("All")

const filteredProjects = projects.filter(project =>{

const matchesSearch =
project.title.toLowerCase().includes(search.toLowerCase()) ||
project.location.toLowerCase().includes(search.toLowerCase())

const matchesCategory =
category === "All" || project.category === category

return matchesSearch && matchesCategory

})

return(

<main className="overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">


{/* HERO */}

<section className="relative h-screen flex items-center justify-center overflow-hidden">

<Image
src="/images/hero/ui.jpg"
fill
alt="Energy Projects"
className="object-cover"
/>

<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/80 to-green-700/80"/>


{/* ORBIT BACKGROUND */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-[900px] h-[900px] border border-emerald-300/20 rounded-full animate-[spin_120s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-3 h-3 bg-emerald-400 rounded-full"/>
</div>

<div className="absolute w-[600px] h-[600px] border border-green-200/20 rounded-full animate-[spin_90s_linear_infinite_reverse]">
<div className="absolute -top-2 left-1/2 w-2.5 h-2.5 bg-green-400 rounded-full"/>
</div>

</div>


<div className="relative text-center text-white px-6 max-w-4xl">

<h1 className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-emerald-300 to-green-200 bg-clip-text text-transparent">
Energy Projects Across Africa
</h1>

<p className="mt-6 text-white/80 text-lg">
Discover how Rensource delivers reliable solar infrastructure
for businesses and institutions across the continent.
</p>

</div>

</section>



{/* SEARCH + FILTER */}

<section className="py-16 relative">

<div className="max-w-7xl mx-auto px-6">

<div className="relative max-w-xl mx-auto mb-10">

<Search className="absolute left-4 top-3 text-gray-400"/>

<input
type="text"
placeholder="Search projects or locations..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="w-full pl-12 pr-4 py-3 rounded-full border border-emerald-200 focus:ring-2 focus:ring-emerald-500"
/>

</div>


<div className="flex flex-wrap justify-center gap-3">

{["All","Agriculture","Education","Commercial"].map(cat =>(

<button
key={cat}
onClick={()=>setCategory(cat)}
className={`px-5 py-2 rounded-full text-sm transition ${
category===cat
? "bg-emerald-600 text-white shadow-lg"
: "bg-white border border-emerald-200 hover:border-emerald-500"
}`}
>

{cat}

</button>

))}

</div>

</div>

</section>



{/* PROJECT GRID */}

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

{filteredProjects.map((project,i)=>(

<Link
href={`/projects/${project.slug}`}
key={project.slug}
className="group"
>

<div className={`rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,0,0,0.2)]

${i % 3 === 0 ? "bg-gradient-to-br from-emerald-100 to-white" : ""}
${i % 3 === 1 ? "bg-gradient-to-br from-green-100 to-white" : ""}
${i % 3 === 2 ? "bg-gradient-to-br from-teal-100 to-white" : ""}

`}>


<div className="relative h-[240px] overflow-hidden">

<Image
src={project.image}
fill
alt={project.title}
className="object-cover group-hover:scale-110 transition duration-700"
/>

</div>


<div className="p-6">

<span className="text-xs px-3 py-1 bg-emerald-200 text-emerald-800 rounded-full">
{project.capacity}
</span>

<h3 className="mt-3 text-lg font-semibold text-emerald-900 group-hover:text-emerald-600 transition">
{project.title}
</h3>

<p className="text-sm text-gray-500 mt-1">
{project.location}
</p>

<p className="text-sm text-gray-600 mt-4 leading-relaxed">
{project.description}
</p>

<span className="mt-5 inline-block text-emerald-600 font-medium text-sm">
Read More →
</span>

</div>

</div>

</Link>

))}

</div>

</div>

</section>

</main>

)

}