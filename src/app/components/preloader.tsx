"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Preloader() {

const [loading,setLoading] = useState(true)

useEffect(()=>{

const timer = setTimeout(()=>{
setLoading(false)
},1800)

return ()=>clearTimeout(timer)

},[])

if(!loading) return null

return(

<div className="
fixed
inset-0
z-[9999]
flex
items-center
justify-center
bg-[#D4A13E]
transition-opacity
duration-700
">

{/* LOADER CONTAINER */}

<div className="relative flex items-center justify-center">

{/* SPINNER RING */}

<div className="
absolute
w-[120px]
h-[120px]
border-[4px]
border-white/30
border-t-white
rounded-full
animate-spin
"/>

{/* LOGO */}

<div className="animate-pulse">

<Image
src="/images/hero/icc.png"
alt="Rensource"
width={90}
height={90}
/>

</div>

</div>

</div>

)

}