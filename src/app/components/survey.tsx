"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function WebsiteSurvey(){

const [open,setOpen]=useState(false)
const [step,setStep]=useState(0)
const [completed,setCompleted]=useState(false)
const [answers,setAnswers]=useState<any>({})
const [feedback,setFeedback]=useState("")

/* SHOW AFTER 10 SECONDS */

useEffect(()=>{
const timer=setTimeout(()=>{
setOpen(true)
},10000)

return()=>clearTimeout(timer)
},[])

/* QUESTIONS */

const questions=[
{
question:"What best describes you?",
options:["Business Owner","Facility Manager","Engineer","Architect","Home Owner"]
},
{
question:"What is your biggest energy challenge?",
options:["High diesel costs","Power outages","Maintenance issues","Carbon emissions","All of the above"]
},
{
question:"How often do you run generators?",
options:["Daily","Several hours a day","A few times a week","Occasionally","Rarely"]
},
{
question:"What matters most to you when choosing energy solutions?",
options:["Cost savings","Reliability","Sustainability","Technology","Ease of installation"]
}
]

function selectOption(option:string){
setAnswers({
...answers,
[step]:option
})
}

function next(){

if(step<questions.length){
setStep(step+1)
}

}

function prev(){
if(step>0){
setStep(step-1)
}
}

function submitSurvey(){

setCompleted(true)

setTimeout(()=>{
setOpen(false)
},2500)

}

return(

<AnimatePresence>

{open &&(

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
>

<motion.div
initial={{scale:.9,opacity:0}}
animate={{scale:1,opacity:1}}
exit={{scale:.9,opacity:0}}
transition={{duration:.35}}
className="relative w-full max-w-lg rounded-3xl shadow-2xl p-6 md:p-8 text-white
bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-700"
>

{/* CLOSE */}

<button
onClick={()=>setOpen(false)}
className="absolute top-4 right-4 text-white/70 hover:text-white"
>
✕
</button>


{/* THANK YOU SCREEN */}

{completed ?(

<div className="text-center py-10">

<h3 className="text-3xl font-semibold mb-3">

Thank You 💚

</h3>

<p className="text-emerald-200">

Your feedback helps us build better energy solutions.

</p>

</div>

):(

<>

{/* PROGRESS */}

<div className="text-sm text-emerald-200 mb-4">

Question {Math.min(step+1,5)} of 5

</div>


{/* QUESTIONS 1-4 */}

{step < questions.length &&(

<>

<h3 className="text-2xl font-semibold mb-6">

{questions[step].question}

</h3>

<div className="space-y-3">

{questions[step].options.map((option,index)=>(

<button
key={index}
onClick={()=>selectOption(option)}
className={`w-full text-left px-4 py-3 rounded-xl transition
${
answers[step]===option
?"bg-emerald-400 text-emerald-900"
:"bg-white/10 hover:bg-white/20"
}
`}
>

{option}

</button>

))}

</div>

</>

)}


{/* FINAL QUESTION */}

{step===questions.length &&(

<>

<h3 className="text-2xl font-semibold mb-4">

How can we serve you better?

</h3>

<textarea
value={feedback}
onChange={(e)=>setFeedback(e.target.value)}
placeholder="Tell us how we can improve your experience..."
className="w-full h-28 p-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/50 focus:outline-none"
/>

</>

)}


{/* NAVIGATION */}

<div className="flex justify-between mt-8">

<button
onClick={prev}
disabled={step===0}
className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30"
>

Previous

</button>


{step<questions.length ?(

<button
onClick={next}
className="px-6 py-2 rounded-lg bg-emerald-400 text-emerald-900 font-semibold hover:bg-emerald-300"
>

Next

</button>

):(

<button
onClick={submitSurvey}
className="px-6 py-2 rounded-lg bg-emerald-400 text-emerald-900 font-semibold hover:bg-emerald-300"
>

Submit

</button>

)}

</div>

</>

)}

</motion.div>

</motion.div>

)}

</AnimatePresence>

)
}