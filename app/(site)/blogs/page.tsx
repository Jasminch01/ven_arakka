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
    "excerpt": pt::text(body),
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

            <div className="flex flex-col gap-16">
                {posts.map((post: any, index: number) => (
                    <Link
                        key={post.slug.current}
                        href={`/blogs/${post.slug.current}`}
                        className={`group block space-y-8 md:col-span-2 lg:col-span-2 md:flex md:gap-16`}
                    >
                        {/* Image Container (Right Side) */}
                        <div className={`relative w-full md:w-2/5 aspect-[4/3] overflow-hidden rounded-3xl shadow-xl transition-all duration-700 group-hover:shadow-[#4a2c1d]/15 shrink-0`}>
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

                        {/* Content Container (Left Side) */}
                        <div className="flex-1 space-y-6 flex flex-col justify-center py-6">
                            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-bold text-[#8b4513]">
                                <Calendar size={14} />
                                <span>{new Date(post.publishedAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#4a2c1d] leading-tight group-hover:text-[#8b4513] transition-colors">
                                {post.title}
                            </h2>

                            {post.excerpt && (
                                <p className="text-lg text-[#6b5b52] leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>
                            )}
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
