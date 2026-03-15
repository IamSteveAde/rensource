"use client"

import Image from "next/image"
import {
Mail,
Phone,
MapPin,
Handshake,
Send
} from "lucide-react"

export default function ContactPage(){

return(

<main className="overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">


{/* HERO */}

<section className="relative h-screen flex items-center justify-center overflow-hidden">

<Image
src="/images/hero/h1.webp"
fill
alt="Rensource Energy"
className="object-cover"
/>

<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/80 to-green-700/80"/>


{/* ORBIT BACKGROUND */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-[900px] h-[900px] border border-emerald-300/20 rounded-full animate-[spin_120s_linear_infinite]">
<div className="absolute -top-2 left-1/2 w-3 h-3 bg-emerald-400 rounded-full"/>
</div>

<div className="absolute w-[650px] h-[650px] border border-green-300/20 rounded-full animate-[spin_90s_linear_infinite_reverse]">
<div className="absolute -top-2 left-1/2 w-2.5 h-2.5 bg-green-400 rounded-full"/>
</div>

</div>


<div className="relative text-center text-white px-6 max-w-4xl">

<h1 className="text-5xl md:text-6xl font-semibold leading-tight bg-gradient-to-r from-emerald-300 to-green-200 bg-clip-text text-transparent">
Power Your Energy Future
</h1>

<p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
Speak with our renewable energy specialists about solar, hybrid power,
and PPA financing solutions designed for African businesses.
</p>

</div>



{/* PARTNER LOGOS */}

<div className="absolute bottom-6 w-full flex justify-center px-4">

<div className="w-full max-w-7xl overflow-hidden bg-white rounded-xl shadow-lg py-3">

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

<section className="relative py-28 overflow-hidden">

{/* ORBIT ELEMENT */}

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-[700px] h-[700px] border border-emerald-200/40 rounded-full animate-[spin_120s_linear_infinite]"/>

</div>


<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-semibold text-emerald-800 text-center mb-20">
Connect With Our Team
</h2>

<div className="grid md:grid-cols-3 gap-10">


<ContactCard
icon={<Phone size={26}/>}
title="Speak With Sales"
desc="Discuss solar deployment, hybrid energy solutions and energy financing options."
email="sales@rensource.energy"
/>

<ContactCard
icon={<Handshake size={26}/>}
title="Partnerships"
desc="OEMs, investors and developers can collaborate with Rensource on clean energy projects."
email="partners@rensource.energy"
/>

<ContactCard
icon={<Mail size={26}/>}
title="Careers"
desc="Join a team accelerating Africa’s energy transition through solar innovation."
email="careers@rensource.energy"
/>

</div>

</div>

</section>



{/* CONTACT FORM */}

<section className="relative py-28 overflow-hidden">

<div className="max-w-5xl mx-auto px-6">

<div className="rounded-3xl p-[1px] bg-gradient-to-br from-emerald-300/40 to-green-400/40">

<div className="bg-white rounded-3xl p-12 shadow-xl">

<h2 className="text-3xl font-semibold text-emerald-800 text-center mb-12">
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
className="p-4 border border-emerald-200 rounded-lg md:col-span-2 focus:ring-2 focus:ring-emerald-500 outline-none"
/>

<button
className="md:col-span-2 bg-gradient-to-r from-emerald-600 to-green-500 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition shadow-lg"
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

<section className="py-28 bg-gradient-to-b from-emerald-50 to-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-semibold text-emerald-800 text-center mb-20">
Our Global Offices
</h2>

<div className="grid md:grid-cols-3 gap-10 justify-center max-w-6xl mx-auto">

<LocationCard
city="Lagos"
address="Zulikat Wuraola House , fifth floor, 362 Herbert Macaulay way, Yaba"
/>

<LocationCard
city="Abuja"
address="No.5 Ellicott citi Street, 
FCDA Extension III, F 01 Abuja"
/>

<LocationCard
city="Abeokuta"
address="No. 10, Ishola Abudu Close, Ibara Housing Estate, Abeokuta, Ogun State"
/>

</div>

</div>

</section>


{/* FINAL CTA */}

<section className="py-24 bg-gradient-to-r from-emerald-700 to-green-600">

<div className="max-w-4xl mx-auto text-center text-white px-6">

<h2 className="text-4xl font-semibold text-emerald-100">
Ready to Start Your Energy Transition?
</h2>

<p className="mt-4 text-white/80">
Rensource delivers reliable renewable energy infrastructure for
commercial and industrial businesses across Africa.
</p>

<a
href="mailto:sales@rensource.energy"
className="inline-block mt-8 bg-white text-emerald-700 px-8 py-3 rounded-full font-medium hover:scale-105 transition shadow-lg"
>

Contact Energy Advisors

</a>

</div>

</section>

</main>

)
}



function ContactCard({icon,title,desc,email}:any){

return(

<div className="rounded-3xl bg-white p-10 shadow-xl hover:-translate-y-2 transition border border-emerald-100">

<div className="w-12 h-12 bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-xl mb-6">
{icon}
</div>

<h3 className="text-xl font-semibold text-emerald-800">
{title}
</h3>

<p className="text-gray-600 mt-4">
{desc}
</p>

<p className="mt-6 text-sm text-emerald-600 font-medium">
{email}
</p>

</div>

)

}



function LocationCard({city,address}:any){

return(

<div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition border border-emerald-100">

<MapPin className="text-emerald-600" size={28}/>

<h3 className="text-lg font-semibold text-emerald-800 mt-4">
{city}
</h3>

<p className="text-gray-600 mt-2">
{address}
</p>

</div>

)

}



function Input({placeholder,type="text"}:any){

return(

<input
type={type}
placeholder={placeholder}
className="p-4 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
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
className="opacity-70 hover:opacity-100 transition"
/>

)

}