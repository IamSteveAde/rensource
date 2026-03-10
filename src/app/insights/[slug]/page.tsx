import { insights } from "@/data/insights"
import Image from "next/image"
import Link from "next/link"

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

const { slug } = await params

const post = insights.find((p) => p.slug === slug)

if (!post) {
  return (
    <div className="h-screen flex items-center justify-center text-2xl font-semibold">
      Post not found
    </div>
  )
}

return (

<main className="bg-white overflow-hidden">

{/* HERO */}

<section className="relative h-[70vh] flex items-center justify-center">

<Image
src={post.image}
fill
alt={post.title}
className="object-cover"
/>

<div className="absolute inset-0 bg-[#1A2B4C]/85" />

<div className="relative text-center text-white px-6 max-w-4xl">

<p className="text-sm text-[#D4A13E] mb-4">
{post.date}
</p>

<h1 className="text-4xl md:text-4xl text-[#D4A13E] font-bold leading-tight">
{post.title}
</h1>

</div>

</section>



{/* ARTICLE */}

<section className="py-24">

<div className="max-w-4xl mx-auto px-6">

<article
className="prose prose-lg max-w-none text-gray-700"
dangerouslySetInnerHTML={{
__html: post.content ? post.content : `<p>${post.description}</p>`
}}
/>

</div>

</section>



{/* RELATED INSIGHTS */}

<section className="py-28 bg-gradient-to-b from-[#F5F0E8] to-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-[#1A2B4C] text-center mb-16">
More Insights
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{insights
.filter((i) => i.slug !== post.slug)
.slice(0,3)
.map((i) => (

<Link
href={`/insights/${i.slug}`}
key={i.slug}
className="group"
>

<div className="rounded-3xl overflow-hidden shadow-lg bg-white">

<div className="relative h-[200px]">

<Image
src={i.image}
fill
alt={i.title}
className="object-cover group-hover:scale-110 transition duration-700"
/>

</div>

<div className="p-6">

<p className="text-xs text-gray-500">
{i.date}
</p>

<h3 className="mt-2 text-lg font-semibold text-[#1A2B4C] group-hover:text-[#D4A13E]">
{i.title}
</h3>

<p className="text-sm text-gray-600 mt-3 line-clamp-3">
{i.description}
</p>

<span className="inline-block mt-4 text-[#D4A13E] font-medium text-sm">
Read More →
</span>

</div>

</div>

</Link>

))}

</div>

</div>

</section>




</main>

)
}