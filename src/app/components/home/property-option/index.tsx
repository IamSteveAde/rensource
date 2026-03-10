"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const projects = [
{
id:"id1",
title:"Baze University Solar Deployment",
description:"Large-scale solar infrastructure delivering reliable power across Baze University’s campus while reducing diesel dependence.",
button:"View Case Study",
image:"/images/hero/baze.jpg",
link:"/projects/baze-university"
},

{
id:"id2",
title:"Valentine Chickens Solar System",
description:"A 717kWp solar installation supporting poultry operations with stable energy generation and lower operating costs.",
button:"View Project",
image:"/images/hero/val.jpg",
link:"/projects/valentine-chickens"
},

{
id:"id3",
title:"Premium Poultry Solar Plant",
description:"A 700kWp solar installation powering one of Nigeria’s largest egg producers with reliable renewable energy.",
button:"View Project",
image:"/images/hero/kuje.png",
link:"/projects/premium-poultry"
}
]

export default function FeaturedProjects(){

const [active,setActive]=useState(0)
const [open,setOpen]=useState(false)

const nextProject=()=>{
setActive((active+1)%projects.length)
setOpen(false)
}

const prevProject=()=>{
setActive((active-1+projects.length)%projects.length)
setOpen(false)
}

const project=projects[active]

return(

<section className="relative py-32 px-6 overflow-hidden">

{/* background gradient */}
<div className="absolute inset-0 bg-gradient-to-b from-[#fffdf7] via-white to-white"/>

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative">

{/* LEFT SIDE */}

<div>

<h2 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-[#D4A13E] to-[#1A2B4C] text-transparent bg-clip-text">
Our Energy Projects
</h2>

<p className="mt-5 text-gray-600 max-w-md">
Reliable solar infrastructure powering universities,
agriculture and industry across Africa.
</p>

<Link
href="/projects"
className="inline-block mt-8 bg-[#D4A13E] hover:bg-[#e6b65a] text-white px-6 py-3 rounded-full font-medium transition"
>
Explore All Projects
</Link>

</div>



{/* RIGHT SIDE PROJECT */}

<div className="relative">

<div className="relative rounded-3xl overflow-hidden shadow-2xl">

<Image
src={project.image}
alt={project.title}
width={1200}
height={800}
className="w-full h-[460px] object-cover"
/>

{/* dark overlay */}
<div className="absolute inset-0 bg-[#1A2B4C]/65"/>

<div className="absolute bottom-0 p-10 text-white w-full">

{/* title + plus */}
<div className="flex items-center justify-between">

<h3 className="text-2xl font-semibold">
{project.title}
</h3>

<button
onClick={()=>setOpen(!open)}
className="w-10 h-10 rounded-full bg-[#D4A13E] flex items-center justify-center text-xl"
>
{open?"−":"+"}
</button>

</div>


{/* expandable */}
<div className={`transition-all duration-500 ${open?"mt-4 opacity-100 max-h-40":"opacity-0 max-h-0 overflow-hidden"}`}>

<p className="text-white/90 mt-3 mb-6 max-w-md">
{project.description}
</p>

<Link
href={project.link}
className="inline-block bg-[#D4A13E] hover:bg-[#e6b65a] text-white px-6 py-3 rounded-full font-medium transition"
>
{project.button}
</Link>

</div>

</div>

</div>



{/* navigation */}

<div className="flex items-center justify-between mt-6">

{/* arrows */}

<div className="flex gap-4">

<button
onClick={prevProject}
className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#D4A13E] hover:text-white transition"
>
←
</button>

<button
onClick={nextProject}
className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#D4A13E] hover:text-white transition"
>
→
</button>

</div>


{/* indicators */}

<div className="flex gap-2">

{projects.map((_,index)=>(
<div
key={index}
className={`h-2 rounded-full transition-all ${
index===active
? "w-8 bg-[#D4A13E]"
: "w-2 bg-gray-300"
}`}
/>
))}

</div>

</div>

</div>

</div>

</section>

)

}