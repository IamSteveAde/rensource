"use client"

import { useRef, useState, useEffect } from "react"
import dynamic from "next/dynamic"

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false
})
import { motion } from "framer-motion"
import { Sun, Factory } from "lucide-react"

type CountryKey =
  | "Nigeria"
  | "Kenya"
  | "Ghana"
  | "South Africa"
  | "Egypt"

type Point = {
  name: CountryKey
  lat: number
  lng: number
  labelLat: number
  labelLng: number
  size: number
  color: string
}

const points: Point[] = [
{
name:"Nigeria",
lat:9.082,
lng:8.675,
labelLat:13,
labelLng:13,
size:0.7,
color:"#22c55e"
},
{
name:"Ghana",
lat:6.8,
lng:-3.5,
labelLat:9,
labelLng:-8,
size:0.55,
color:"#4ade80"
},
{
name:"Kenya",
lat:-0.0236,
lng:37.9062,
labelLat:-2,
labelLng:41,
size:0.7,
color:"#22c55e"
},
{
name:"Egypt",
lat:26.8206,
lng:30.8025,
labelLat:29,
labelLng:34,
size:0.6,
color:"#4ade80"
},
{
name:"South Africa",
lat:-30.5595,
lng:22.9375,
labelLat:-34,
labelLng:26,
size:0.6,
color:"#4ade80"
}
]

const projectData:any = {

Nigeria:{
title:"Nigeria Solar Infrastructure",
description:"RenSource has deployed large-scale solar infrastructure across Nigeria powering universities, healthcare institutions, and industrial facilities.",
projects:[
"Baze University – 763kWp",
"Valentine Chickens – 717kWp",
"IHVN – 300kWp",
"Kablemetal – 266kWp",
"Feccox – 113kWp + BESS",
"Premium Poultry – 700kWp"
]
},

Kenya:{
title:"Kenya Renewable Energy Projects",
description:"Our projects in Kenya support energy resilience for commercial infrastructure through solar deployments.",
projects:[
"Rubis Kenya – 20kWp Installation",
"Rubis Kenya – 20kWp Expansion"
]
}

}

const expansionContent = (country:CountryKey)=>({
title:`${country} Expansion`,
description:`RenSource is actively expanding its renewable energy infrastructure across Africa. ${country} represents a strategic market in our long-term vision to deliver reliable, clean and cost-efficient power solutions.`,
projects:[
"Market assessment and feasibility studies underway",
"Partnerships with local energy stakeholders",
"Commercial solar deployments planned",
"Industrial energy solutions for large power consumers"
]
})

export default function GlobalEnergyGlobe(){

const globeRef = useRef<any>()
const [modal,setModal] = useState<CountryKey | null>(null)

useEffect(()=>{

if(globeRef.current){

const controls = globeRef.current.controls()

controls.enableZoom = false
controls.enablePan = false
controls.enableRotate = false

globeRef.current.pointOfView(
{ lat:10, lng:20, altitude:1.3 },
0
)

}

},[])

const activeData =
modal && projectData[modal]
? projectData[modal]
: modal
? expansionContent(modal)
: null

return(

<section className="relative py-24 overflow-hidden">

{/* background */}

<div className="absolute inset-0 bg-gradient-to-b from-emerald-100 via-white to-white"/>

<div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-emerald-500/25 blur-[160px] rounded-full"/>

{/* orbit rings */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<motion.div
animate={{ rotate: 360 }}
transition={{ repeat: Infinity, duration: 120, ease:"linear" }}
className="absolute w-[1100px] h-[1100px] border border-emerald-400/40 rounded-full"
/>

<motion.div
animate={{ rotate: -360 }}
transition={{ repeat: Infinity, duration: 160, ease:"linear" }}
className="absolute w-[850px] h-[850px] border border-emerald-400/40 rounded-full"
/>

<motion.div
animate={{ rotate: 360 }}
transition={{ repeat: Infinity, duration: 200, ease:"linear" }}
className="absolute w-[650px] h-[650px] border border-emerald-300/40 rounded-full"
/>

</div>

<div className="max-w-[1500px] mx-auto px-6 relative">

{/* header */}

<div className="text-center max-w-3xl mx-auto">

<h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
Powering Industry Across Africa
</h2>

<p className="mt-4 text-gray-700 text-base leading-relaxed">
RenSource is deploying renewable energy infrastructure across Africa,
powering universities, healthcare institutions and industries with
reliable clean electricity.
</p>

</div>

{/* globe */}

<div className="mt-12 flex justify-center">

<div className="w-full max-w-[1000px]">

<Globe
ref={globeRef}

width={1000}
height={600}

globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

backgroundColor="rgba(0,0,0,0)"

pointsData={points}
pointAltitude="size"
pointColor="color"
pointRadius={0.18}

labelsData={points}
labelLat="labelLat"
labelLng="labelLng"
labelText="name"
labelColor={() => "#ffffff"}
labelSize={2.0}

ringsData={points}
ringColor={() => "#22c55e"}
ringMaxRadius={6}
ringPropagationSpeed={2}
ringRepeatPeriod={1800}

onPointClick={(p:any)=>setModal(p.name)}
/>

</div>

</div>

</div>

{/* modal */}

{modal && activeData && (

<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6">

<motion.div
initial={{scale:0.9,opacity:0}}
animate={{scale:1,opacity:1}}
className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl"
>

<h3 className="text-xl font-semibold text-emerald-700 mb-3">
{activeData.title}
</h3>

<p className="text-gray-600 mb-5">
{activeData.description}
</p>

<ul className="space-y-2 mb-5">

{activeData.projects.map((project:string,i:number)=>{

const Icon = i % 2 ? Factory : Sun

return(

<li key={i} className="flex items-center gap-3 text-gray-700">

<Icon size={17} className="text-emerald-500"/>

<span>{project}</span>

</li>

)

})}

</ul>

<button
onClick={()=>setModal(null)}
className="bg-gradient-to-r from-emerald-600 to-green-500 text-white px-5 py-2.5 rounded-full"
>
Close
</button>

</motion.div>

</div>

)}

</section>

)
}