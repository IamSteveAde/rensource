"use client"

import { useRef, useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Sun, Factory } from "lucide-react"

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false })

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
{ name:"Nigeria", lat:9.082, lng:8.675, labelLat:13, labelLng:13, size:0.7, color:"#22c55e" },
{ name:"Ghana", lat:6.8, lng:-3.5, labelLat:9, labelLng:-8, size:0.55, color:"#4ade80" },
{ name:"Kenya", lat:-0.0236, lng:37.9062, labelLat:-2, labelLng:41, size:0.7, color:"#22c55e" },
{ name:"Egypt", lat:26.8206, lng:30.8025, labelLat:29, labelLng:34, size:0.6, color:"#4ade80" },
{ name:"South Africa", lat:-30.5595, lng:22.9375, labelLat:-34, labelLng:26, size:0.6, color:"#4ade80" }
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
const containerRef = useRef<HTMLDivElement>(null)

const [width,setWidth] = useState(1000)
const [modal,setModal] = useState<CountryKey | null>(null)
const [isMobile,setIsMobile] = useState(false)

useEffect(()=>{

const checkMobile = () => {
setIsMobile(window.innerWidth < 768)
}

checkMobile()
window.addEventListener("resize",checkMobile)

return () => window.removeEventListener("resize",checkMobile)

},[])

useEffect(()=>{

const handleResize = () => {

if(containerRef.current){
setWidth(containerRef.current.offsetWidth)
}

}

handleResize()
window.addEventListener("resize",handleResize)

return ()=>window.removeEventListener("resize",handleResize)

},[])

useEffect(()=>{

if(globeRef.current){

const controls = globeRef.current.controls()

controls.enableZoom = true
controls.enableRotate = true
controls.enablePan = false

globeRef.current.pointOfView(
{ lat:10, lng:20, altitude:isMobile ? 1.6 : 1.3 },
0
)

}

},[isMobile])

const activeData =
modal && projectData[modal]
? projectData[modal]
: modal
? expansionContent(modal)
: null

return(

<section className="relative py-16 md:py-24 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-emerald-100 via-white to-white"/>

<div className="max-w-[1500px] mx-auto px-4 md:px-6 relative">

{/* Header */}

<div className="text-center max-w-3xl mx-auto">

<h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
Powering Industry Across Africa
</h2>

<p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
RenSource is deploying renewable energy infrastructure across Africa,
powering universities, healthcare institutions and industries with
reliable clean electricity.
</p>

</div>

{/* Globe */}

<div className="mt-10 md:mt-14 flex justify-center">

<div ref={containerRef} className="w-full max-w-[1100px]">

<Globe
ref={globeRef}

width={width}
height={isMobile ? width * 1.2 : width * 0.65}

globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

backgroundColor="rgba(0,0,0,0)"

/* BIGGER TOUCH TARGET */

pointsData={points}
pointAltitude="size"
pointColor="color"
pointRadius={isMobile ? 0.35 : 0.18}

/* CLICKABLE POINTS */

onPointClick={(p:any)=>setModal(p.name)}

/* CLICKABLE LABELS */

labelsData={points}
labelLat="labelLat"
labelLng="labelLng"
labelText="name"
labelColor={() => "#ffffff"}
labelSize={isMobile ? 1.8 : 2}
labelDotRadius={isMobile ? 0.35 : 0.2}
onLabelClick={(p:any)=>setModal(p.name)}

/* ENERGY RINGS */

ringsData={points}
ringColor={() => "#22c55e"}
ringMaxRadius={isMobile ? 5 : 6}
ringPropagationSpeed={2}
ringRepeatPeriod={1800}
/>

</div>

</div>

</div>

{/* Modal */}

{modal && activeData && (

<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">

<motion.div
initial={{scale:0.9,opacity:0}}
animate={{scale:1,opacity:1}}
className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl"
>

<h3 className="text-lg md:text-xl font-semibold text-emerald-700 mb-3">
{activeData.title}
</h3>

<p className="text-gray-600 text-sm md:text-base mb-5">
{activeData.description}
</p>

<ul className="space-y-2 mb-5">

{activeData.projects.map((project:string,i:number)=>{

const Icon = i % 2 ? Factory : Sun

return(

<li key={i} className="flex items-center gap-3 text-gray-700 text-sm md:text-base">

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