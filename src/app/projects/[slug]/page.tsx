import { projects } from "@/data/projects"
import Image from "next/image"
import Link from "next/link"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

const { slug } = await params

const project = projects.find((p) => p.slug === slug)

if (!project) {
  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-2xl font-semibold">Project not found</p>
    </div>
  )
}

return (

<main className="bg-white overflow-hidden">

{/* HERO */}

<section className="relative h-screen flex items-center justify-center">

<Image
src={project.image}
fill
alt={project.title}
className="object-cover"
/>

<div className="absolute inset-0 bg-[#1A2B4C]/85"/>

<div className="relative text-center text-white px-6 max-w-4xl">

<h1 className="text-4xl text-[#D4A13E] md:text-5xl font-bold leading-tight">
{project.title}
</h1>

<p className="mt-6 text-white/80 text-lg">
{project.location}
</p>

</div>

</section>



{/* PROJECT OVERVIEW */}

<section className="py-28">

<div className="max-w-4xl mx-auto px-6">

<h2 className="text-3xl font-bold text-[#1A2B4C] mb-10">
Project Overview
</h2>

<p className="text-gray-700 leading-relaxed mb-6 text-lg">
Valentine Chickens Solar PV project, situated in Shonga, Kwara, Nigeria
represents a state-of-the-art renewable energy project integrated into
the infrastructure of the Valentine Chickens Poultry Farm.
</p>

<p className="text-gray-700 leading-relaxed mb-6 text-lg">
The facility includes an abattoir, feed mill, and eight poultry houses,
each housing up to 25,000 birds.
</p>

<p className="text-gray-700 leading-relaxed mb-6 text-lg">
Building on the success of the 120kWp Proof of Concept system installed
in 2022/23, Rensource partnered with Valentine Chickens to implement a
717kWp photovoltaic solution as Phase 1 of the main project.
</p>

<p className="text-gray-700 leading-relaxed text-lg">
The installation offsets approximately <b>580MWh of energy annually</b>
while mitigating nearly <b>250 metric tons of CO₂ emissions</b>.
</p>

</div>

</section>



{/* PROJECT METRICS */}

<section className="py-20 bg-gradient-to-b from-[#F5F0E8] to-white">

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

<div>

<p className="text-sm text-gray-500">
Solar Capacity
</p>

<p className="text-3xl font-bold text-[#D4A13E] mt-2">
717kWp
</p>

</div>


<div>

<p className="text-sm text-gray-500">
Energy Offset
</p>

<p className="text-3xl font-bold text-[#D4A13E] mt-2">
580MWh / year
</p>

</div>


<div>

<p className="text-sm text-gray-500">
CO₂ Reduction
</p>

<p className="text-3xl font-bold text-[#D4A13E] mt-2">
250 mtCO₂ / year
</p>

</div>

</div>

</section>



{/* PROJECT IMAGE */}

<section className="relative h-[500px]">

<Image
src={project.image}
fill
alt="Project Image"
className="object-cover"
/>

</section>



{/* RELATED PROJECTS */}

<section className="py-28 bg-gradient-to-b from-[#F5F0E8] to-white">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-3xl font-bold text-[#1A2B4C] mb-14">
Related Projects
</h2>

<div className="grid md:grid-cols-3 gap-10">

{projects
.filter((p) => p.slug !== project.slug)
.slice(0,3)
.map((p) => (

<Link
href={`/projects/${p.slug}`}
key={p.slug}
className="group"
>

<div className="rounded-3xl overflow-hidden shadow-xl">

<div className="relative h-[220px]">

<Image
src={p.image}
fill
alt={p.title}
className="object-cover group-hover:scale-110 transition duration-700"
/>

</div>

<div className="p-6 bg-white">

<h3 className="font-semibold text-[#1A2B4C] group-hover:text-[#D4A13E]">
{p.title}
</h3>

<p className="text-sm text-gray-500 mt-2">
{p.location}
</p>

</div>

</div>

</Link>

))}

</div>

</div>

</section>



{/* CTA */}


</main>

)
}