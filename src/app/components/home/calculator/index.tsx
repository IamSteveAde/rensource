"use client"

import Image from "next/image"
import { Linkedin } from "lucide-react"

type Member = {
name: string
role: string
image: string
}

const members: Member[] = [
{
name: "Board Member",
role: "Chairman",
image: "/images/board/member1.jpg"
},
{
name: "Board Member",
role: "Director",
image: "/images/board/member2.jpg"
},
{
name: "Board Member",
role: "Director",
image: "/images/board/member3.jpg"
},
{
name: "Board Member",
role: "Director",
image: "/images/board/member4.jpg"
},
{
name: "Board Member",
role: "Director",
image: "/images/board/member5.jpg"
},
{
name: "Board Member",
role: "Director",
image: "/images/board/member6.jpg"
}
]

export default function Leadership(){

return(

<section className="relative py-32 px-6">

{/* background */}

<div className="absolute inset-0 bg-gradient-to-b from-white via-[#faf7f0] to-white"/>

<div className="max-w-7xl mx-auto relative">

{/* header */}

<div className="text-center">

<h2 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-[#D4A13E] to-[#1A2B4C] bg-clip-text text-transparent">
Leadership
</h2>

<p className="mt-5 text-gray-600 max-w-xl mx-auto">
Experienced leadership guiding the future of
energy infrastructure across Africa.
</p>

</div>


{/* grid */}

<div className="grid md:grid-cols-3 gap-8 mt-20">

{members.map((member,index)=>(

<div
key={index}
className="group relative rounded-2xl overflow-hidden shadow-lg"
>

<Image
src={member.image}
alt={member.name}
width={500}
height={600}
className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-105"
/>

{/* overlay */}

<div className="absolute inset-0 bg-gradient-to-t from-[#1A2B4C] via-transparent to-transparent opacity-80"/>

{/* hover overlay */}

<div className="absolute inset-0 bg-[#1A2B4C]/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

<div className="text-center text-white">

<div className="flex justify-center mb-4">

<div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#D4A13E]/20 text-[#D4A13E]">

<Linkedin size={18}/>

</div>

</div>

<p className="text-sm text-gray-300">
View Profile
</p>

</div>

</div>

{/* info */}

<div className="absolute bottom-6 left-6 text-white">

<p className="font-semibold">
{member.name}
</p>

<p className="text-sm text-gray-300">
{member.role}
</p>

</div>

</div>

))}

</div>

</div>

</section>

)

}