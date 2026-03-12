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
bio: "Mr. Chikezie Nwosu is a distinguished executive with over 34 years of experience across the global energy sector. His expertise spans upstream oil & gas development, midstream infrastructure and downstream operations, with increasing focus on renewable energy transition."
},
{
name: "Dayo Omolokun",
role: "Vice Chairman",
image: "/images/board/dele.jpg",
bio: "Dayo Omolokun is an international finance executive with over 30 years of experience across Africa, the Middle East and the United Kingdom."
},
{
name: "Solabomi Adedeji",
role: "Director",
image: "/images/board/sala.jpg",
bio: "Solabomi Adedeji is a Partner at Platform Capital Investment Partners with over 28 years of experience in strategic transformation and investment banking."
},
{
name: "Nojeem Jimoh",
role: "Director",
image: "/images/board/musmen.jpeg",
bio: "Nojeem Jimoh is a senior executive with experience spanning the UK public housing sector and Nigeria’s downstream oil and gas industry."
},
{
name: "Dele Olawuyi",
role: "Director",
image: "/images/board/dele.png",
bio: "Dele Olawuyi is a technology entrepreneur and strategic advisor with over 25 years of experience building and scaling ventures."
},
{
name: "Suleiman Amina Ka’oje",
role: "Director",
image: "/images/board/nasi.png",
bio: "Suleiman Amina Ka’oje is a senior legal professional with over 15 years of experience in litigation and public prosecution."
},
{
name: "Uche Chiwetalu",
role: "Director",
image: "/images/board/uche.png",
bio: "Uche Chiwetalu is a Nigerian legal practitioner specializing in corporate law and regulatory advisory."
},
{
name: "Eng. Andreas Svoor",
role: "Director",
image: "/images/board/svoor.png",
bio: "Andreas Svoor is an electrical engineer and renewable energy entrepreneur dedicated to transforming Africa’s energy landscape."
},
{
name: "Femi Adesanya",
role: "CEO",
image: "/images/board/femi.png",
bio: "Femi Adesanya is the Chief Executive Officer of Rensource Energy with over 15 years of experience across energy and infrastructure sectors."
},
{
name: "Mr. Emmanuel Pogoson",
role: "Director",
image: "/images/hero/manny.jpeg",
bio: "Mr. Manny Pogoson is a Director at Rensource Energy with over 15 years of experience across energy and infrastructure sectors."
}

]

export default function Leadership(){

const [active,setActive] = useState<Member | null>(null)
const [index,setIndex] = useState(0)

const next = () => {
if(index < members.length-1) setIndex(index+1)
}

const prev = () => {
if(index > 0) setIndex(index-1)
}

return(

<section className="relative py-32 px-6 overflow-hidden bg-white">

{/* animated gradient circles */}

<div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-green-400/30 to-emerald-500/20 rounded-full blur-3xl animate-pulse"/>

<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-r from-emerald-300/30 to-green-500/20 rounded-full blur-3xl animate-pulse"/>

<div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-gradient-to-r from-green-200/40 to-emerald-300/20 rounded-full blur-3xl animate-pulse"/>


<div className="max-w-7xl mx-auto relative">

{/* header */}

<div className="text-center">

<h2 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-emerald-500 to-green-700 bg-clip-text text-transparent">
Leadership
</h2>

<p className="mt-5 text-gray-600 max-w-xl mx-auto">
Experienced leadership guiding the future of sustainable energy infrastructure across Africa.
</p>

</div>

{/* desktop grid */}

<div className="hidden md:grid md:grid-cols-3 gap-10 mt-24">

{members.map((member,i)=>(

<div
key={i}
onClick={()=>setActive(member)}
className="group relative cursor-pointer"
>

{/* glow */}

<div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 opacity-0 group-hover:opacity-100 blur-xl transition duration-700"/>

{/* card */}

<div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">

{/* image */}

<div className="relative h-[360px] overflow-hidden">

<Image
src={member.image}
alt={member.name}
fill
className="object-cover group-hover:scale-110 transition duration-700"
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"/>

</div>

{/* content */}

<div className="p-6">

<h3 className="text-lg font-semibold text-gray-900">
{member.name}
</h3>

<p className="text-sm text-emerald-600 font-medium mt-1">
{member.role}
</p>

<div className="flex items-center gap-2 mt-4 text-sm text-gray-500 group-hover:text-emerald-600 transition">

<span>View Profile</span>

<ArrowUpRight size={16}/>

</div>

</div>

</div>

</div>

))}

</div>


{/* mobile slider */}

<div className="md:hidden mt-16">

<div className="flex justify-center gap-4 mb-6">

<button
onClick={prev}
className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow border"
>
<ChevronLeft size={20}/>
</button>

<button
onClick={next}
className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow border"
>
<ChevronRight size={20}/>
</button>

</div>

<div className="overflow-hidden">

<div
className="flex transition-transform duration-500"
style={{ transform:`translateX(-${index*100}%)`}}
>

{members.map((member,i)=>(

<div key={i} className="min-w-full px-3">

<div
onClick={()=>setActive(member)}
className="bg-white rounded-3xl overflow-hidden shadow-xl"
>

<div className="relative h-[360px]">

<Image
src={member.image}
alt={member.name}
fill
className="object-cover"
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"/>

</div>

<div className="p-6">

<h3 className="font-semibold text-gray-900">
{member.name}
</h3>

<p className="text-sm text-emerald-600">
{member.role}
</p>

</div>

</div>

</div>

))}

</div>

</div>

</div>

</div>


{/* modal */}

{active && (

<div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6">

<div className="bg-white max-w-xl w-full rounded-3xl p-8 relative shadow-2xl">

<button
onClick={()=>setActive(null)}
className="absolute top-5 right-5 text-gray-400 hover:text-gray-700"
>
<X/>
</button>

<Image
src={active.image}
alt={active.name}
width={220}
height={220}
className="rounded-xl mb-6"
/>

<h3 className="text-2xl font-semibold">
{active.name}
</h3>

<p className="text-emerald-600 text-sm font-medium mb-4">
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