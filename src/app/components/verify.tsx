"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function HumanVerificationGate(){

const [verified,setVerified]=useState(false)

return(

<AnimatePresence>

{!verified &&(

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/60 backdrop-blur-md px-6"
>

<motion.div
initial={{scale:.9,opacity:0}}
animate={{scale:1,opacity:1}}
exit={{scale:.9,opacity:0}}
transition={{duration:.4}}
className="relative w-full max-w-xl rounded-3xl overflow-hidden
bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-700
text-white shadow-[0_40px_120px_rgba(0,0,0,0.35)] p-10"
>

{/* ORBIT BACKGROUND */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">

<div className="absolute w-[700px] h-[700px] border border-emerald-300/60 rounded-full animate-[spin_120s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-3 h-3 bg-emerald-400 rounded-full"/>
</div>

<div className="absolute w-[500px] h-[500px] border border-green-300/60 rounded-full animate-[spin_90s_linear_infinite_reverse]">
<div className="absolute -top-2 left-1/2 w-3 h-3 bg-green-400 rounded-full"/>
</div>

<div className="absolute w-[320px] h-[320px] border border-emerald-200/60 rounded-full animate-[spin_60s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-2.5 h-2.5 bg-emerald-300 rounded-full"/>
</div>

</div>


{/* CONTENT */}

<div className="relative text-center">

<h2 className="text-4xl font-semibold mb-4">

Security Verification

</h2>

<p className="text-emerald-200 mb-10 max-w-md mx-auto">

To protect our platform from automated abuse,
please confirm that you are a real visitor.

</p>


{/* CHECKBOX */}

<label className="flex items-center justify-center gap-4 bg-white/10 border border-white/20 rounded-xl px-6 py-4 cursor-pointer hover:bg-white/20 transition">

<input
type="checkbox"
onChange={()=>setVerified(true)}
className="w-5 h-5 accent-emerald-400"
/>

<span className="text-lg">

I am not a robot

</span>

</label>


<p className="text-sm text-emerald-200 mt-6">

This quick verification keeps the experience safe for everyone.

</p>

</div>

</motion.div>

</motion.div>

)}

</AnimatePresence>

)
}