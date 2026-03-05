import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/client'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import SocialShare from '@/components/SocialShare'
import { Calendar, User, ArrowLeft, Sun } from 'lucide-react'
import Link from 'next/link'

export const revalidate = 60

async function getPost(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    body,
    publishedAt,
    "author": author-> { name, image }
  }`
    const post = await client.fetch(query, { slug })
    return post
}

// Custom components for PortableText to enhance styling
const ptComponents = {
    types: {
        image: ({ value }: any) => (
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden my-12 border border-[#e9e2d5] shadow-lg">
                <Image
                    src={urlFor(value).url()}
                    alt="Reflective Image"
                    fill
                    className="object-cover"
                />
            </div>
        ),
    },
    block: {
        h1: ({ children }: any) => <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#4a2c1d] mt-16 mb-8">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#4a2c1d] mt-12 mb-6">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-2xl md:text-3xl font-playfair font-bold text-[#4a2c1d] mt-10 mb-5">{children}</h3>,
        normal: ({ children }: any) => <p className="text-xl leading-relaxed text-[#2c1810]/90 mb-8 font-light">{children}</p>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-[#8b4513] pl-8 my-12 italic text-2xl text-[#8b4513] font-light leading-relaxed">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc pl-8 mb-8 space-y-4 text-xl text-[#2c1810]/80">{children}</ul>,
    },
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug)

    if (!post) return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
            <Sun size={64} className="text-[#8b4513]/20 animate-pulse" />
            <h2 className="text-4xl font-playfair font-bold text-[#4a2c1d]">Reflection not found</h2>
            <Link href="/blogs" className="text-[#8b4513] hover:underline">Return to reflections</Link>
        </div>
    )

    return (
        <article className="max-w-4xl mx-auto px-6 py-20 animate-fade-in lg:pt-32">
            <Link href="/blogs" className="inline-flex items-center gap-2 text-[#8b4513] font-medium mb-12 group hover:-translate-x-2 transition-transform">
                <ArrowLeft size={18} />
                Back to reflections
            </Link>

            <header className="mb-16 space-y-12">
                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold text-[#8b4513]">
                        <Calendar size={14} />
                        <span>{new Date(post.publishedAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-playfair font-bold text-[#4a2c1d] leading-none tracking-tight">
                        {post.title}
                    </h1>
                </div>

                <div className="flex items-center gap-5 border-y border-[#e9e2d5] py-8">
                    {post.author?.image && (
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                            <Image
                                src={urlFor(post.author.image).width(56).height(56).url()}
                                alt={post.author.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                    <div>
                        <p className="text-sm uppercase tracking-widest text-[#8b4513] font-bold mb-1">Author</p>
                        <p className="text-xl font-playfair font-semibold text-[#4a2c1d]">{post.author?.name}</p>
                    </div>
                </div>
            </header>

            {post.mainImage && (
                <div className="relative aspect-video w-full mb-16 rounded-[40px] overflow-hidden shadow-2xl shadow-[#4a2c1d]/10">
                    <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <div className="max-w-3xl mx-auto">
                <div className="prose prose-stone prose-xl prose-invert-none mb-24">
                    <PortableText value={post.body} components={ptComponents} />
                </div>

                <div className="border-t border-[#e9e2d5] pt-12 mt-20 space-y-8 bg-[#fffcf8]/50 p-12 rounded-[40px] border">
                    <h3 className="text-2xl font-playfair font-bold text-[#4a2c1d] text-center mb-4">Share this wisdom</h3>
                    <div className="flex justify-center">
                        <SocialShare title={post.title} />
                    </div>
                </div>
            </div>
        </article>
    )
}
