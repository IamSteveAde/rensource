"use client"

import { useRef, useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Sun, Factory } from "lucide-react"

const Globe = dynamic(() => import("react-globe.gl"), { ssr:false })

type CountryKey =
  | "Nigeria"
  | "Kenya"
  | "Ghana"
  | "South Africa"
  | "Egypt"

type Point = {
  name: CountryKey
  lat:number
  lng:number
  size:number
  color:string
}

const points:Point[] = [
{ name:"Nigeria", lat:9.082, lng:8.675, size:0.75, color:"#22c55e"},
{ name:"Ghana", lat:7.9465, lng:-1.0232, size:0.7, color:"#4ade80"},
{ name:"Kenya", lat:-0.0236, lng:37.9062, size:0.75, color:"#22c55e"},
{ name:"Egypt", lat:26.8206, lng:30.8025, size:0.7, color:"#4ade80"},
{ name:"South Africa", lat:-30.5595, lng:22.9375, size:0.7, color:"#4ade80"}
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
},

Ghana:{
title:"Ghana Energy Expansion",
description:"RenSource is exploring renewable energy deployment opportunities across Ghana’s commercial and industrial sectors.",
projects:[
"Solar feasibility assessments",
"Industrial solar partnerships",
"Commercial solar projects pipeline"
]
},

Egypt:{
title:"Egypt Market Entry",
description:"Egypt represents a strategic North African market for renewable infrastructure expansion.",
projects:[
"Energy market partnerships",
"Industrial solar feasibility",
"Clean power infrastructure planning"
]
},

"South Africa":{
title:"South Africa Expansion",
description:"South Africa remains a key renewable energy market in Southern Africa with strong commercial demand.",
projects:[
"Industrial solar energy systems",
"Energy resilience infrastructure",
"Commercial solar hybrid solutions"
]
}

}

export default function GlobalEnergyGlobe(){

const globeRef = useRef<any>()
const containerRef = useRef<HTMLDivElement>(null)

const [width,setWidth] = useState(1000)
const [modal,setModal] = useState<CountryKey | null>(null)
const [isMobile,setIsMobile] = useState(false)

useEffect(()=>{

const checkMobile = () => setIsMobile(window.innerWidth < 768)

checkMobile()

window.addEventListener("resize",checkMobile)

return ()=>window.removeEventListener("resize",checkMobile)

},[])

useEffect(()=>{

const resize = () => {

if(containerRef.current){
setWidth(containerRef.current.offsetWidth)
}

}

resize()

window.addEventListener("resize",resize)

return ()=>window.removeEventListener("resize",resize)

},[])

useEffect(()=>{

if(globeRef.current){

const controls = globeRef.current.controls()

controls.enableZoom = true
controls.enableRotate = true
controls.enablePan = false

globeRef.current.pointOfView(
{ lat:10, lng:20, altitude:isMobile ? 1.7 : 1.3 },
0
)

}

},[isMobile])

const activeData = modal ? projectData[modal] : null

return(

<section className="relative py-16 md:py-24 overflow-hidden">

{/* Background */}

<div className="absolute inset-0 bg-gradient-to-b from-emerald-100 via-white to-white"/>

{/* Orbit System */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<motion.div
animate={{ rotate:360 }}
transition={{ repeat:Infinity, duration:120, ease:"linear" }}
className="absolute w-[1100px] h-[1100px] border border-emerald-400/30 rounded-full"
/>

<motion.div
animate={{ rotate:-360 }}
transition={{ repeat:Infinity, duration:160, ease:"linear" }}
className="absolute w-[800px] h-[800px] border border-emerald-400/30 rounded-full"
/>

<motion.div
animate={{ rotate:360 }}
transition={{ repeat:Infinity, duration:200, ease:"linear" }}
className="absolute w-[550px] h-[550px] border border-emerald-300/30 rounded-full"
/>

{/* Orbit Dot */}

<motion.div
animate={{ rotate:360 }}
transition={{ repeat:Infinity, duration:18, ease:"linear" }}
className="absolute w-[550px] h-[550px]"
>
<div className="absolute top-0 left-1/2 w-3 h-3 bg-emerald-500 rounded-full"/>
</motion.div>

</div>

<div className="max-w-[1500px] mx-auto px-4 md:px-6 relative">

{/* Header */}

<div className="text-center max-w-3xl mx-auto">

<h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
Powering Industry Across Africa
</h2>

<p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
RenSource is deploying renewable energy infrastructure across Africa,
powering universities, healthcare institutions and industries with reliable clean electricity.
</p>

</div>

{/* Globe */}

<div className="mt-12 flex justify-center">

<div ref={containerRef} className="w-full max-w-[1100px]">

<Globe
ref={globeRef}

width={width}
height={isMobile ? width*1.15 : width*0.65}

globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

backgroundColor="rgba(0,0,0,0)"

pointsData={points}
pointAltitude="size"
pointColor="color"
pointRadius={isMobile ? 0.45 : 0.22}

onPointClick={(p:any)=>setModal(p.name)}

labelsData={points}
labelLat="lat"
labelLng="lng"
labelText="name"
labelColor={()=>"#ffffff"}
labelSize={isMobile ? 2.2 : 2.8}
labelDotRadius={isMobile ? 0.45 : 0.25}

onLabelClick={(p:any)=>setModal(p.name)}

ringsData={points}
ringColor={()=>"#22c55e"}
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

const Icon = i%2 ? Factory : Sun

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