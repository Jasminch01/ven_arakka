import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'
import { ArrowUpRight, BookOpen, Calendar, User } from 'lucide-react'

export const revalidate = 60

async function getPosts() {
    const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    mainImage,
    publishedAt,
    "authorName": author->name,
    "authorImage": author->image
  }`
    const posts = await client.fetch(query)
    return posts
}

export default async function BlogPage() {
    const posts = await getPosts()

    return (
        <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
            <header className="max-w-3xl space-y-8">
                <div className="w-16 h-1 bg-[#8b4513] mb-12 shadow-[0_0_15px_rgba(139,69,19,0.3)]" />
                <h1 className="text-6xl md:text-8xl font-playfair font-bold text-[#4a2c1d] tracking-tighter leading-none">
                    Dharma <br />
                    <span className="text-[#8b4513] italic font-normal">Reflections</span>
                </h1>
                <p className="text-2xl text-[#6b5b52] font-light leading-relaxed italic border-l-4 border-[#8b4513]/20 pl-8">
                    "A single word that brings peace is better than a thousand hollow words." — The Dhammapada
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {posts.map((post: any, index: number) => (
                    <Link
                        key={post.slug.current}
                        href={`/blogs/${post.slug.current}`}
                        className={`group block space-y-8 ${index === 0 ? "md:col-span-2 lg:col-span-2 md:flex md:gap-16 md:items-center" : ""}`}
                    >
                        <div className={`relative overflow-hidden rounded-3xl shadow-xl transition-all duration-700 group-hover:shadow-[#4a2c1d]/15 ${index === 0 ? "md:w-3/5 aspect-[16/10]" : "aspect-[4/3]"}`}>
                            {post.mainImage ? (
                                <Image
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out grayscale-[0.2] group-hover:grayscale-0"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-[#e9e2d5] flex items-center justify-center">
                                    <span className="text-4xl text-[#8b4513]/20 font-serif">Reflect</span>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute top-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                <ArrowUpRight className="text-[#8b4513]" size={24} />
                            </div>
                        </div>

                        <div className={`space-y-6 flex-1 ${index === 0 ? "" : "pt-4"}`}>
                            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-bold text-[#8b4513]">
                                <Calendar size={14} />
                                <span>{new Date(post.publishedAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            </div>

                            <h2 className={`font-playfair font-bold text-[#4a2c1d] leading-tight group-hover:text-[#8b4513] transition-colors ${index === 0 ? "text-4xl lg:text-5xl" : "text-3xl"}`}>
                                {post.title}
                            </h2>

                            <p className="text-[#6b5b52] leading-relaxed line-clamp-2 italic text-lg opacity-80">
                                Discovering deep peace in a busy digital age. Reflections on meditation and the nature of mindfulness.
                            </p>

                            <div className="flex items-center gap-3 border-t border-[#e9e2d5] pt-6 group-hover:border-[#8b4513]/30 transition-colors">
                                {post.authorImage && (
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#e9e2d5]">
                                        <Image
                                            src={urlFor(post.authorImage).width(40).height(40).url()}
                                            alt={post.authorName}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <span className="text-sm font-medium tracking-wide text-[#2c1810] uppercase">{post.authorName}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {!posts.length && (
                <div className="text-center py-40 space-y-6">
                    <div className="mx-auto w-20 h-20 bg-[#e9e2d5] rounded-full flex items-center justify-center text-[#8b4513]/30">
                        <BookOpen size={40} />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-[#4a2c1d]">No reflections yet.</h3>
                    <p className="text-[#6b5b52]">Check back soon as the path unfolds.</p>
                </div>
            )}
        </div>
    )
}
