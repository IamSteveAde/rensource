"use client"

import { useState } from "react"
import {
ComposableMap,
Geographies,
Geography,
Marker
} from "react-simple-maps"
import { Sun, Factory, Zap } from "lucide-react"

const geoUrl =
"https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

type CountryKey = "Nigeria" | "Kenya" | "Other"

type ModalData = {
title: string
description: string
projects: string[]
}

const projectData: Record<CountryKey, ModalData> = {

Nigeria:{
title:"Nigeria Solar Projects",
description:
"Large scale solar infrastructure powering universities and industrial facilities across Nigeria.",
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
title:"Kenya Solar Projects",
description:
"Solar installations supporting Rubis infrastructure across Kenya.",
projects:[
"Rubis Kenya – 20kWp Installation",
"Rubis Kenya – 20kWp Expansion"
]
},

Other:{
title:"Coming Soon",
description:
"We are expanding our solar infrastructure across Africa.",
projects:[]
}

}

const importantLabels = [
{ name:"Nigeria", coordinates:[8.7,9] },
{ name:"Kenya", coordinates:[37.9,-0.2] },
{ name:"Egypt", coordinates:[30,26] },
{ name:"Ghana", coordinates:[-1.2,7.8] },
{ name:"South Africa", coordinates:[22,-30] },
{ name:"Morocco", coordinates:[-6,31] }
]

export default function PanAfricaMap(){

const [modal,setModal] = useState<CountryKey | null>(null)

const closeModal = () => setModal(null)

const activeData = modal ? projectData[modal] : null

return(

<section className="relative py-32 px-6 overflow-hidden">

{/* Gold + Blue background */}

<div className="absolute inset-0 bg-gradient-to-br from-[#fff3d9] via-white to-[#e9eef9]" />

<div className="max-w-7xl mx-auto text-center relative">

<h2 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-[#D4A13E] to-[#1A2B4C] bg-clip-text text-transparent">
Powering Industry Across Africa
</h2>

<p className="mt-6 text-gray-600 max-w-2xl mx-auto">
Proven solar infrastructure in Nigeria with expansion across Africa.
</p>

{/* MAP */}

<div className="mt-20 flex justify-center">

<div className="w-[80%] drop-shadow-2xl">

<ComposableMap
projection="geoMercator"
projectionConfig={{
scale:400,
center:[20,5]
}}
style={{width:"100%",height:"520px"}}
>

<Geographies geography={geoUrl}>
{({ geographies }:{ geographies:any[] }) =>
geographies.map((geo:any)=>{

const country = geo.properties?.name

return(

<Geography
key={geo.rsmKey}
geography={geo}
onClick={()=>{

if(country==="Nigeria") setModal("Nigeria")
else if(country==="Kenya") setModal("Kenya")
else setModal("Other")

}}
style={{
default:{
fill:"url(#mapGradient)",
outline:"none",
cursor:"pointer"
},
hover:{
fill:"#D4A13E",
outline:"none"
},
pressed:{
fill:"#c89433",
outline:"none"
}
}}
/>

)

})
}
</Geographies>

{/* Gradient definition */}

<defs>

<linearGradient id="mapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" stopColor="#1A2B4C"/>
<stop offset="100%" stopColor="#0f1d34"/>
</linearGradient>

</defs>

{/* Labels */}

{importantLabels.map((label,index)=>(
<Marker key={index} coordinates={label.coordinates as [number,number]}>

<circle r={5} fill="#D4A13E"/>

<text
y={-12}
textAnchor="middle"
style={{
fontSize:"12px",
fill:"#ffffff",
fontWeight:600
}}
>
{label.name}
</text>

</Marker>
))}

</ComposableMap>

</div>

</div>

</div>


{/* MODAL */}

{modal && (

<div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

<div className="bg-gradient-to-br from-[#fff6e5] via-white to-white rounded-3xl p-10 max-w-lg w-full shadow-2xl border border-[#D4A13E]/20">

<h3 className="text-2xl font-semibold text-[#1A2B4C] mb-3">
{activeData?.title}
</h3>

<p className="text-gray-600 mb-6">
{activeData?.description}
</p>

{activeData?.projects.length ? (

<ul className="space-y-3 mb-6">

{activeData.projects.map((project,i)=>{

const Icon = i % 2 ? Factory : Sun

return(

<li key={i} className="flex items-center gap-3 text-gray-700">

<Icon size={18} className="text-[#D4A13E]" />

<span>{project}</span>

</li>

)

})}

</ul>

) : (

<div className="flex items-center gap-3 text-gray-600 mb-6">

<Zap size={18} className="text-[#D4A13E]" />

<span>Projects launching soon in this region.</span>

</div>

)}

<button
onClick={closeModal}
className="mt-2 bg-[#D4A13E] hover:bg-[#e6b65a] text-white px-6 py-3 rounded-full font-medium transition"
>
Close
</button>

</div>

</div>

)}

</section>

)

}