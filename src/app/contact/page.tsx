"use client"

import Image from "next/image"
import {
Mail,
Phone,
MapPin,
Handshake,
Send,
Building2
} from "lucide-react"



export default function ContactPage(){

return(

<main className="bg-white overflow-hidden">


{/* HERO */}

<section className="relative h-screen flex items-center justify-center">

<Image
src="/images/hero/h2.webp"
fill
alt="Rensource Energy"
className="object-cover"
/>

<div className="absolute inset-0 bg-gradient-to-b from-[#1A2B4C]/10 via-[#1A2B4C]/90 to-[#1A2B4C]/85"/>

<div className="relative text-center text-white px-6 max-w-4xl">

<h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
Power Your <span className="text-[#D4A13E]">Energy Future</span>
</h1>

<p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
Speak with our renewable energy specialists about solar, hybrid power,
and PPA financing solutions designed for African businesses.
</p>

</div>



{/* PARTNER LOGOS */}

<div className="absolute bottom-6 w-full flex justify-center px-4">

<div className="
w-full max-w-7xl
overflow-hidden
bg-white
rounded-xl
shadow-[0_10px_30px_rgba(0,0,0,0.1)]
py-3
">

<div className="flex w-max items-center gap-10 animate-partners">

<PartnerLogo src="/images/logo/p1.png"/>
<PartnerLogo src="/images/logo/p2.png"/>
<PartnerLogo src="/images/logo/p3.png"/>
<PartnerLogo src="/images/logo/p4.png"/>
<PartnerLogo src="/images/logo/p5.png"/>
<PartnerLogo src="/images/logo/p6.png"/>

<PartnerLogo src="/images/logo/p1.png"/>
<PartnerLogo src="/images/logo/p2.png"/>
<PartnerLogo src="/images/logo/p3.png"/>
<PartnerLogo src="/images/logo/p4.png"/>
<PartnerLogo src="/images/logo/p5.png"/>
<PartnerLogo src="/images/logo/p6.png"/>

</div>

</div>

</div>

</section>



{/* CONTACT OPTIONS */}

<section className="py-28 bg-gradient-to-b from-[#F5F0E8] to-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-[#1A2B4C] text-center mb-20">
Connect With Our Team
</h2>

<div className="grid md:grid-cols-3 gap-10">


{/* SALES */}

<ContactCard
icon={<Phone size={26}/>}
title="Speak With Sales"
desc="Discuss solar deployment, hybrid energy solutions and energy financing options."
email="sales@rensource.energy"
gradient="from-[#1A2B4C]/10 to-transparent"
/>


{/* PARTNERS */}

<ContactCard
icon={<Handshake size={26}/>}
title="Partnerships"
desc="OEMs, investors and developers can collaborate with Rensource on clean energy projects."
email="partners@rensource.energy"
gradient="from-[#D4A13E]/20 to-transparent"
/>


{/* CAREERS */}

<ContactCard
icon={<Mail size={26}/>}
title="Careers"
desc="Join a team accelerating Africa’s energy transition through solar innovation."
email="careers@rensource.energy"
gradient="from-[#0f1d36]/10 to-transparent"
/>


</div>

</div>

</section>



{/* CONTACT FORM */}

<section className="py-28">

<div className="max-w-5xl mx-auto px-6">

<div className="
rounded-3xl
p-[1px]
bg-gradient-to-br
from-[#1A2B4C]/20
to-[#D4A13E]/30
">

<div className="bg-white rounded-3xl p-12 shadow-xl">

<h2 className="text-3xl font-bold text-[#1A2B4C] text-center mb-12">
Send Us a Message
</h2>

<form className="grid md:grid-cols-2 gap-6">

<Input placeholder="Full Name"/>
<Input placeholder="Email Address" type="email"/>
<Input placeholder="Company Name"/>
<Input placeholder="Phone Number"/>

<textarea
placeholder="Tell us about your energy needs"
rows={5}
className="p-4 border rounded-lg md:col-span-2 focus:ring-2 focus:ring-[#D4A13E] outline-none"
/>

<button
className="
md:col-span-2
bg-gradient-to-r
from-[#1A2B4C]
to-[#2e4375]
text-white
py-4
rounded-lg
font-semibold
flex
items-center
justify-center
gap-2
hover:scale-[1.02]
transition
"
>

<Send size={18}/>
Submit Inquiry

</button>

</form>

</div>

</div>

</div>

</section>



{/* LOCATIONS */}

<section className="py-28 bg-gradient-to-b from-[#F5F0E8] to-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-[#1A2B4C] text-center mb-20">
Our Global Offices
</h2>

<div className="grid md:grid-cols-3 gap-10">

<LocationCard
city="Lagos"
address="Victoria Island, Lagos Nigeria"
/>

<LocationCard
city="Abuja"
address="Central Business District Abuja"
/>

<LocationCard
city="Nairobi"
address="Westlands Nairobi, Kenya"
/>

</div>

</div>

</section>



{/* FINAL CTA */}

<section className="py-24 bg-gradient-to-r from-[#1A2B4C] to-[#2e4375]">

<div className="max-w-4xl mx-auto text-center text-white px-6">

<h2 className="text-4xl font-bold text-yellow-300">
Ready to Start Your Energy Transition?
</h2>

<p className="mt-4 text-white/80">
Rensource delivers reliable renewable energy infrastructure for
commercial and industrial businesses across Africa.
</p>

<a
href="mailto:sales@rensource.energy"
className="
inline-block
mt-8
bg-[#D4A13E]
px-8
py-3
rounded-full
font-medium
hover:scale-105
transition
"
>

Contact Energy Advisors

</a>

</div>

</section>


</main>

)
}



function ContactCard({icon,title,desc,email,gradient}:any){

return(

<div className={`p-[1px] rounded-3xl bg-gradient-to-br ${gradient}`}>

<div className="bg-white rounded-3xl p-10 shadow-lg h-full">

<div className="w-12 h-12 bg-[#D4A13E]/10 text-[#D4A13E] flex items-center justify-center rounded-xl mb-6">
{icon}
</div>

<h3 className="text-xl font-semibold text-[#1A2B4C]">
{title}
</h3>

<p className="text-gray-600 mt-4">
{desc}
</p>

<p className="mt-6 text-sm text-gray-500">
{email}
</p>

</div>

</div>

)

}



function LocationCard({city,address}:any){

return(

<div className="p-[1px] rounded-2xl bg-gradient-to-br from-[#D4A13E]/30 to-transparent">

<div className="bg-white p-8 rounded-2xl shadow-lg">

<MapPin className="text-[#D4A13E]" size={28}/>

<h3 className="text-lg font-semibold text-[#1A2B4C] mt-4">
{city}
</h3>

<p className="text-gray-600 mt-2">
{address}
</p>

</div>

</div>

)

}



function Input({placeholder,type="text"}:any){

return(

<input
type={type}
placeholder={placeholder}
className="p-4 border rounded-lg focus:ring-2 focus:ring-[#D4A13E] outline-none"
/>

)

}



function PartnerLogo({src}:{src:string}){

return(

<Image
src={src}
alt="partner"
width={70}
height={24}
className="opacity-70"
/>

)

}