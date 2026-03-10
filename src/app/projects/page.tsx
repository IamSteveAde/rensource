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

<main className="bg-white overflow-hidden">


{/* HERO */}

<section className="relative h-screen flex items-center justify-center">

<Image
src="/images/hero/ui.jpg"
fill
alt="Energy Projects"
className="object-cover"
/>

<div className="absolute inset-0 bg-[#1A2B4C]/75"/>

<div className="relative text-center text-white px-6 max-w-4xl">

<h1 className="text-4xl md:text-5xl font-bold text-[#D4A13E]">
Energy Projects Across Africa
</h1>

<p className="mt-6 text-white/80 text-lg">
Discover how Rensource delivers reliable solar infrastructure
for businesses and institutions across the continent.
</p>

</div>

</section>



{/* SEARCH + FILTER */}

<section className="py-16 bg-gradient-to-b from-[#F5F0E8] to-white">

<div className="max-w-7xl mx-auto px-6">

<div className="relative max-w-xl mx-auto mb-10">

<Search className="absolute left-4 top-3 text-gray-400"/>

<input
type="text"
placeholder="Search projects or locations..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-[#D4A13E]"
/>

</div>

<div className="flex flex-wrap justify-center gap-3">

{["All","Agriculture","Education","Commercial"].map(cat =>(

<button
key={cat}
onClick={()=>setCategory(cat)}
className={`px-5 py-2 rounded-full text-sm transition ${
category===cat
? "bg-[#1A2B4C] text-white"
: "bg-white border border-gray-200 hover:border-[#D4A13E]"
}`}
>

{cat}

</button>

))}

</div>

</div>

</section>



{/* PROJECT GRID */}

<section className="py-24">

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{filteredProjects.map((project)=>(

<Link
href={`/projects/${project.slug}`}
key={project.slug}
className="group"
>

<div className="rounded-3xl overflow-hidden shadow-xl bg-white transition hover:-translate-y-2">

<div className="relative h-[240px]">

<Image
src={project.image}
fill
alt={project.title}
className="object-cover group-hover:scale-110 transition duration-700"
/>

</div>

<div className="p-6">

<span className="text-xs px-3 py-1 bg-[#F5F0E8] text-[#1A2B4C] rounded-full">
{project.capacity}
</span>

<h3 className="mt-3 text-lg font-semibold text-[#1A2B4C] group-hover:text-[#D4A13E] transition">
{project.title}
</h3>

<p className="text-sm text-gray-500 mt-1">
{project.location}
</p>

<p className="text-sm text-gray-600 mt-4 leading-relaxed">
{project.description}
</p>

<span className="mt-5 inline-block text-[#D4A13E] font-medium text-sm">
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