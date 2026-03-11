"use client"

import Image from "next/image"

function PartnerLogo({ src }: { src: string }) {
  return (
    <div className="relative h-10 w-[120px] flex items-center justify-center">
      <Image
        src={src}
        alt="partner logo"
        fill
        className="object-contain opacity-80 hover:opacity-100 transition"
      />
    </div>
  )
}

export default function FuturePage() {

  return (

<main className="bg-white text-gray-800 overflow-hidden">


{/* ================= HERO ================= */}

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

<Image
src="/images/hero/hydro.png"
alt="Future Energy"
fill
priority
className="object-cover"
/>

<div className="absolute inset-0 bg-emerald-950/80"/>

{/* ORBIT ENERGY ELEMENT */}

<div className="absolute w-[700px] h-[700px] border border-emerald-400/20 rounded-full animate-spin-slow"/>

<div className="absolute w-[900px] h-[900px] border border-emerald-400/10 rounded-full animate-spin-reverse"/>


<div className="relative z-10 max-w-5xl px-6 text-center text-white">

<p className="uppercase tracking-[0.4em] text-green-300 text-xs mb-6">
Africa's Clean Energy Future
</p>

<h1 className="
text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
font-semibold
leading-tight
bg-gradient-to-r
from-green-300
via-emerald-400
to-green-300
bg-clip-text
text-transparent
">

Powering Africa’s
<span className="block">
Next Energy Era
</span>

</h1>

<p className="mt-8 text-lg text-white/80 max-w-2xl mx-auto">

Africa's future will not be powered by diesel generators.  
It will be powered by **renewable energy ecosystems** — clean,
reliable infrastructure that enables businesses, industries
and cities to grow sustainably.

</p>

</div>


{/* PARTNERS */}

<div className="absolute bottom-6 w-full flex justify-center px-4">

<div className="w-full max-w-7xl overflow-hidden bg-white rounded-xl shadow-lg py-3">

<div className="flex w-max items-center gap-10 animate-partners">

<PartnerLogo src="/images/logo/p1.png"/>
<PartnerLogo src="/images/logo/p2.png"/>
<PartnerLogo src="/images/logo/p3.png"/>
<PartnerLogo src="/images/logo/p4.png"/>
<PartnerLogo src="/images/logo/p5.png"/>
<PartnerLogo src="/images/logo/p6.png"/>
<PartnerLogo src="/images/logo/p7.png"/>
<PartnerLogo src="/images/logo/p8.png"/>
<PartnerLogo src="/images/logo/p9.png"/>
<PartnerLogo src="/images/logo/p10.png"/>

<PartnerLogo src="/images/logo/p1.png"/>
<PartnerLogo src="/images/logo/p2.png"/>
<PartnerLogo src="/images/logo/p3.png"/>
<PartnerLogo src="/images/logo/p4.png"/>
<PartnerLogo src="/images/logo/p5.png"/>
<PartnerLogo src="/images/logo/p6.png"/>
<PartnerLogo src="/images/logo/p7.png"/>
<PartnerLogo src="/images/logo/p8.png"/>
<PartnerLogo src="/images/logo/p9.png"/>
<PartnerLogo src="/images/logo/p10.png"/>

</div>

</div>

</div>

</section>


{/* ================= WHERE WE ARE ================= */}

<section className="py-28 bg-gradient-to-b from-green-50 to-white">

<div className="max-w-5xl mx-auto text-center px-6">

<p className="uppercase text-green-600 tracking-[0.3em] text-xs mb-4">
Where We Are Today
</p>

<h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
Building Africa’s Solar Infrastructure
</h2>

<p className="mt-8 text-gray-600 text-lg leading-relaxed">

Across Nigeria and emerging African markets, RenSource is deploying
**commercial-scale solar and hybrid power systems** that enable
businesses to operate with **predictable, affordable energy**.

This infrastructure reduces diesel dependence, lowers operational
costs and unlocks long-term economic productivity for African industries.

</p>

</div>

</section>


{/* ================= HORIZONTAL TIMELINE ================= */}

<section className="py-28 bg-white">

<div className="max-w-6xl mx-auto px-6">

<h3 className="text-center text-4xl font-semibold text-green-700 mb-20">
Our Energy Evolution
</h3>

<div className="relative">

<div className="absolute top-10 left-0 right-0 h-[2px] bg-green-200"/>

<div className="grid md:grid-cols-4 gap-10 text-center">

{[
["Solar Infrastructure","Deploying commercial solar energy for businesses"],
["Energy Storage","Stabilizing power with advanced battery storage"],
["Hybrid Energy","Combining solar, storage and smart grids"],
["Multi-Source Grid","Integrating hydro, geothermal and biomass"]
].map(([title,desc],i)=>(
<div key={i} className="relative">

<div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 border border-green-200">

<span className="text-green-700 font-bold">{i+1}</span>

</div>

<h4 className="font-semibold text-lg">{title}</h4>

<p className="text-gray-600 text-sm mt-3">{desc}</p>

</div>
))}

</div>

</div>

</div>

</section>



{/* ================= SOLUTION SECTIONS ================= */}



{/* HYDRO */}

<section className="py-28">

<div className="grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto px-6 items-center">

<Image
src="/images/hero/hydro.png"
width={900}
height={600}
alt="Hydropower"
/>

<div>

<p className="text-green-600 uppercase tracking-[0.3em] text-xs mb-4">
Future Energy Source
</p>

<h3 className="text-3xl text-black md:text-4xl font-semibold mb-6">
Hydropower Infrastructure
</h3>

<p className="text-gray-600 leading-relaxed text-lg">

Africa possesses enormous hydroelectric potential.  
RenSource is exploring scalable hydropower systems capable
of delivering **stable, continuous renewable electricity**
for industrial zones and growing urban centers.

</p>

</div>

</div>

</section>



{/* GEOTHERMAL */}

<section className="py-28 bg-green-50">

<div className="grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto px-6 items-center">

<div>

<p className="text-green-600 uppercase tracking-[0.3em] text-xs mb-4">
Future Energy Source
</p>

<h3 className="text-3xl text-black md:text-4xl font-semibold mb-6">
Geothermal Energy
</h3>

<p className="text-gray-700 text-lg leading-relaxed">

Deep beneath the earth lies a powerful renewable resource.
Geothermal systems offer **stable, continuous power**
independent of weather conditions.

RenSource envisions geothermal playing a critical role
in Africa’s future energy stability.

</p>

</div>

<Image
src="/images/hero/geo.png"
width={900}
height={600}
alt="Geothermal"
/>

</div>

</section>



{/* BIOMASS */}

<section className="py-28">

<div className="grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto px-6 items-center">

<Image
src="/images/hero/bio.png"
width={900}
height={600}
alt="Biomass"
/>

<div>

<p className="text-green-600 uppercase tracking-[0.3em] text-xs mb-4">
Future Energy Source
</p>

<h3 className="text-3xl text-black md:text-4xl font-semibold mb-6">
Biomass Energy
</h3>

<p className="text-gray-600 text-lg leading-relaxed">

Biomass transforms agricultural and organic waste into
valuable energy. By leveraging this resource,
RenSource can enable **circular energy ecosystems**
where waste becomes fuel for sustainable growth.

</p>

</div>

</div>

</section>



{/* ================= VISION ================= */}

<section className="relative py-36 overflow-hidden bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 text-white text-center">

{/* ORBIT ENERGY ELEMENTS */}

<div className="absolute w-[700px] h-[700px] border border-white/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow"/>

<div className="absolute w-[900px] h-[900px] border border-white/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-reverse"/>

{/* SOFT GLOW */}

<div className="absolute w-[500px] h-[500px] bg-white/10 blur-[140px] rounded-full left-1/2 -translate-x-1/2 top-20"/>


<div className="relative z-10 max-w-4xl mx-auto px-6">

<p className="uppercase tracking-[0.35em] text-white/80 text-xs mb-6">
The Future of Energy
</p>

<h2 className="text-4xl md:text-6xl font-semibold leading-tight">
A New Energy Future for Africa
</h2>

<p className="mt-10 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">

Africa’s future will not depend on a single technology.  
It will be powered by interconnected renewable systems working together  
solar, hydro, geothermal, biomass and energy storage.

</p>

<p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg">

RenSource is building the infrastructure that enables this transformation  
creating reliable clean power for businesses, industries and communities
across the continent.

</p>

</div>

</section>


</main>

)
}