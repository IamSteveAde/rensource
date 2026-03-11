"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

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

{/* ENERGY BACKGROUND */}
<div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white"/>

{/* ENERGY GLOW */}
<div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-400/20 blur-[140px] rounded-full"/>

{/* GRID ENERGY LINES */}
<div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#16a34a_1px,transparent_1px),linear-gradient(to_bottom,#16a34a_1px,transparent_1px)] bg-[size:80px_80px]"/>

{/* FLOATING ENERGY PARTICLES */}

<motion.div
className="absolute top-20 left-20 w-3 h-3 bg-emerald-400 rounded-full"
animate={{y:[0,-40,0],opacity:[0.2,1,0.2]}}
transition={{duration:6,repeat:Infinity}}
/>

<motion.div
className="absolute bottom-32 right-20 w-2 h-2 bg-green-400 rounded-full"
animate={{y:[0,-50,0],opacity:[0.2,1,0.2]}}
transition={{duration:7,repeat:Infinity}}
/>

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative">

{/* LEFT SIDE */}

<div>

<h2 className="text-5xl md:text-5xl font-semibold bg-gradient-to-r from-emerald-600 to-lime-400 text-transparent bg-clip-text">
Our Energy Projects
</h2>

<p className="mt-5 text-gray-600 max-w-md">
Reliable solar infrastructure powering universities,
agriculture and industry across Africa.
</p>

<Link
href="/projects"
className="inline-block mt-8 bg-gradient-to-r from-emerald-600 to-green-400 text-white px-7 py-3 rounded-full font-medium shadow-lg hover:scale-[1.03] transition"
>
Explore All Projects
</Link>

</div>

{/* RIGHT SIDE PROJECT */}

<div className="relative">

<motion.div
key={project.id}
initial={{opacity:0,scale:0.95}}
animate={{opacity:1,scale:1}}
transition={{duration:0.5}}
className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(16,185,129,0.25)]"
>

<Image
src={project.image}
alt={project.title}
width={1200}
height={800}
className="w-full h-[460px] object-cover"
/>

{/* green overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/40 to-transparent"/>

<div className="absolute bottom-0 p-10 text-white w-full">

{/* title + plus */}

<div className="flex items-center justify-between">

<h3 className="text-2xl font-semibold">
{project.title}
</h3>

<button
onClick={()=>setOpen(!open)}
className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-xl hover:bg-emerald-600 transition"
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
className="inline-block bg-gradient-to-r from-emerald-500 to-green-400 text-white px-6 py-3 rounded-full font-medium hover:scale-[1.03] transition"
>
{project.button}
</Link>

</div>

</div>

</motion.div>

{/* navigation */}

<div className="flex items-center justify-between mt-6">

{/* arrows */}

<div className="flex gap-4">

<button
onClick={prevProject}
className="w-10 h-10 rounded-full border border-emerald-200 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition"
>
←
</button>

<button
onClick={nextProject}
className="w-10 h-10 rounded-full border border-emerald-200 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition"
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
? "w-8 bg-emerald-500"
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