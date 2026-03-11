"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2 } from "lucide-react"

export default function IntroAudio() {

const audioRef = useRef<HTMLAudioElement>(null)
const [showPrompt,setShowPrompt] = useState(false)

useEffect(()=>{

// check storage
const hasPlayed = sessionStorage.getItem("introPlayed")

// show popup if not played
if(hasPlayed !== "true"){
setShowPrompt(true)
}

},[])

const handlePlay = async () => {

try{
await audioRef.current?.play()
}catch(err){
console.log("Audio blocked by browser")
}

sessionStorage.setItem("introPlayed","true")
setShowPrompt(false)

}

const handleSkip = () => {

sessionStorage.setItem("introPlayed","true")
setShowPrompt(false)

}

return(

<>

{/* AUDIO */}

<audio
ref={audioRef}
src="/audio/power.mp3"
preload="auto"
/>

{/* POPUP */}

<AnimatePresence>

{showPrompt && (

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-6"
>

<motion.div
initial={{scale:0.9,y:40}}
animate={{scale:1,y:0}}
exit={{scale:0.9}}
className="bg-white max-w-md w-full rounded-2xl shadow-2xl p-8 text-center"
>

<div className="flex justify-center mb-4">

<div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">

<Volume2 className="text-emerald-600"/>

</div>

</div>

<h3 className="text-lg font-semibold text-gray-900">
Enable Audio Experience
</h3>

<p className="text-gray-600 mt-2 text-sm">
Would you like to hear a short introduction about RenSource and our vision for powering Africa with clean energy?
</p>

<div className="flex gap-3 mt-6">

<button
onClick={handleSkip}
className="flex-1 border border-gray-300 py-3 rounded-lg text-sm"
>
No Thanks
</button>

<button
onClick={handlePlay}
className="flex-1 bg-emerald-600 text-white py-3 rounded-lg text-sm hover:bg-emerald-700"
>
Play Audio
</button>

</div>

</motion.div>

</motion.div>

)}

</AnimatePresence>

</>

)

}