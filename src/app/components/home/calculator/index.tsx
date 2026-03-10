"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowUpRight, X } from "lucide-react"

type Member = {
name: string
role: string
image: string
bio: string
}

const members: Member[] = [
{
name: "Mr. Chikezie Nwosu",
role: "Board Chairman",
image: "/images/board/nwosu.jpg",
bio: "Mr. Chikezie Nwosu is a distinguished executive with over 34 years of experience across the global energy sector. His expertise spans upstream oil & gas development, midstream infrastructure and downstream operations, with increasing focus on renewable energy transition. He has held leadership roles at Shell Nigeria, SINOPEC-Addax Petroleum and Waltersmith Petroman Oil where he led the development of Nigeria’s first modular refinery."
},

{
name: "Dayo Omolokun",
role: "Vice Chairman",
image: "/images/board/dele.jpg",
bio: "Dayo Omolokun is an international finance executive with over 30 years of experience across Africa, the Middle East and the United Kingdom. He served as Managing Director and Regional CFO for Standard Chartered Bank West Africa overseeing operations across six countries with a combined balance sheet exceeding USD 12 billion."
},

{
name: "Solabomi Adedeji",
role: "Investment Partner",
image: "/images/board/sala.jpg",
bio: "Solabomi Adedeji is a Partner at Platform Capital Investment Partners with over 28 years of experience in strategic transformation, investment banking and project development. He played a leadership role in the development of the Duport Midstream Energy Park — Africa’s first integrated energy park."
},

{
name: "Nojeem Jimoh",
role: "Strategic Advisor",
image: "/images/board/musmen.jpeg",
bio: "Nojeem Jimoh is a senior executive with experience spanning the UK public housing sector and Nigeria’s downstream oil and gas industry. He is a Fellow of the Chartered Institute of Housing UK and previously served as Strategic Commissioning Manager at the City of London Corporation."
},

{
name: "Dele Olawuyi",
role: "Strategic Advisor",
image: "/images/board/dele.png",
bio: "Dele Olawuyi is a technology entrepreneur and strategic advisor with over 25 years of experience building and scaling ventures across banking, aviation, public sector and consumer markets. He holds engineering education from the University of Ibadan and MIT executive programs."
},

{
name: "Suleiman Amina Ka’oje",
role: "Senior Legal Advisor",
image: "/images/board/nasi.png",
bio: "Suleiman Amina Ka’oje is a senior legal professional with over 15 years of experience in litigation, public prosecution and legal advisory. She served within the Kebbi State Ministry of Justice rising to Director and holds leadership roles within the Nigerian Bar Association."
},

{
name: "Uche Chiwetalu",
role: "Legal Advisor",
image: "/images/board/uche.png",
bio: "Uche Chiwetalu is a Nigerian legal practitioner specializing in corporate law, regulatory advisory and commercial legal compliance. Her work focuses on supporting organizations operating in regulated sectors such as energy and infrastructure."
},

{
name: "Eng. Andreas Svoor",
role: "Founder & Technical Lead – Munja Group",
image: "/images/board/svoor.png",
bio: "Andreas Svoor is an electrical engineer and renewable energy entrepreneur dedicated to transforming Africa’s energy landscape through sustainable investments. He brings over a decade of experience in power systems, renewable energy installations and project execution."
},

{
name: "Femi Adesanya",
role: "Chief Executive Officer",
image: "/images/board/femi.png",
bio: "Femi Adesanya is the Chief Executive Officer of Rensource Energy with over 15 years of experience across energy and infrastructure sectors. His leadership focuses on advancing decentralized energy infrastructure across Africa."
}
]

const gradients = [
"from-[#D4A13E]/30",
"from-[#1A2B4C]/30",
"from-emerald-500/30",
"from-purple-500/30",
"from-rose-500/30"
]

export default function Leadership(){

const [active,setActive] = useState<Member | null>(null)
const [index,setIndex] = useState(0)

const next = () => {
if(index < members.length -1) setIndex(index+1)
}

const prev = () => {
if(index > 0) setIndex(index-1)
}

return(

<section className="relative py-32 px-6">

<div className="absolute inset-0 bg-gradient-to-b from-white via-[#faf7f0] to-white"/>

<div className="max-w-7xl mx-auto relative">

{/* header */}

<div className="text-center">

<h2 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-[#D4A13E] to-[#1A2B4C] bg-clip-text text-transparent">
Leadership
</h2>

<p className="mt-5 text-gray-600 max-w-xl mx-auto">
Experienced leadership guiding the future of energy infrastructure across Africa.
</p>

</div>

{/* desktop grid */}

<div className="hidden md:grid md:grid-cols-3 gap-8 mt-20">

{members.map((member,i)=>{

const gradient = gradients[i % gradients.length]

return(

<div
key={i}
className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
onClick={()=>setActive(member)}
>

<div className={`absolute inset-0 bg-gradient-to-br ${gradient} via-transparent to-transparent`} />

<Image
src={member.image}
alt={member.name}
width={500}
height={600}
className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-105"
/>

<div className="absolute inset-0 bg-gradient-to-t from-[#1A2B4C] via-transparent to-transparent opacity-80"/>

<div className="absolute inset-0 bg-[#1A2B4C]/80 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center">

<div className="flex items-center gap-2 text-white text-sm font-medium">

<span>Click to View Profile</span>

<ArrowUpRight size={18} className="text-[#D4A13E]" />

</div>

</div>

<div className="absolute bottom-6 left-6 text-white">

<p className="font-semibold">
{member.name}
</p>

<p className="text-sm text-gray-300">
{member.role}
</p>

</div>

</div>

)

})}

</div>

{/* mobile slider */}

<div className="md:hidden mt-16 relative">

<div className="flex justify-center gap-4 mb-6">

<button
onClick={prev}
className="w-11 h-11 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg"
>
<ChevronLeft size={20}/>
</button>

<button
onClick={next}
className="w-11 h-11 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg"
>
<ChevronRight size={20}/>
</button>

</div>

<div className="overflow-hidden">

<div
className="flex transition-transform duration-500"
style={{ transform:`translateX(-${index*100}%)`}}
>

{members.map((member,i)=>{

const gradient = gradients[i % gradients.length]

return(

<div key={i} className="min-w-full px-3">

<div
className="relative rounded-2xl overflow-hidden shadow-xl"
onClick={()=>setActive(member)}
>

<div className={`absolute inset-0 bg-gradient-to-br ${gradient} via-transparent to-transparent`} />

<Image
src={member.image}
alt={member.name}
width={500}
height={600}
className="w-full h-[420px] object-cover"
/>

<div className="absolute inset-0 bg-gradient-to-t from-[#1A2B4C] via-transparent to-transparent opacity-80"/>

<div className="absolute bottom-6 left-6 text-white">

<p className="font-semibold">
{member.name}
</p>

<p className="text-sm text-gray-300">
{member.role}
</p>

</div>

</div>

</div>

)

})}

</div>

</div>

</div>

</div>

{/* modal */}

{active && (

<div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6">

<div className="bg-white max-w-xl rounded-2xl p-8 relative">

<button
onClick={()=>setActive(null)}
className="absolute top-4 right-4 text-gray-500"
>
<X/>
</button>

<Image
src={active.image}
alt={active.name}
width={200}
height={200}
className="rounded-xl mb-6"
/>

<h3 className="text-2xl font-semibold">
{active.name}
</h3>

<p className="text-sm text-gray-500 mb-4">
{active.role}
</p>

<p className="text-gray-700 leading-relaxed">
{active.bio}
</p>

</div>

</div>

)}

</section>

)
}