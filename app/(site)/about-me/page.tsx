import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { MapPin, Milestone, Sun } from "lucide-react";

async function getAboutData() {
    const query = `*[_type == "about"][0] {
        title,
        subtitle,
        authorImage,
        content,
        missionTitle,
        missionContent
    }`;
    return await client.fetch(query);
}

export default async function AboutPage() {
    const data = await getAboutData();

    if (!data) {
        return (
            <div className="max-w-4xl mx-auto px-8 py-40 text-center">
                <h1 className="text-2xl font-playfair transition-all">Setting the stage for a spiritual journey...</h1>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-8 py-20 space-y-32">
            {/* Introduction */}
            <section className="text-center space-y-12 animate-fade-in relative z-10">
                <div
                    className="w-40 h-40 bg-[#8b4513]/10 text-[#8b4513] rounded-full mx-auto flex items-center justify-center border-4 border-[#fffcf8] shadow-2xl overflow-hidden relative"
                >
                    {data.authorImage ? (
                        <Image
                            src={urlFor(data.authorImage).width(200).height(200).url()}
                            alt={data.title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <Sun size={60} />
                    )}
                </div>

                <h1 className="text-5xl md:text-7xl font-playfair font-bold text-[#4a2c1d] leading-tight">
                    {data.title.split(' ')[0]} <br />
                    <span className="text-[#8b4513] italic font-normal">
                        {data.title.split(' ').slice(1).join(' ')}
                    </span>
                </h1>

                {data.subtitle && (
                    <p className="text-xl md:text-2xl text-[#6b5b52] font-light leading-relaxed max-w-2xl mx-auto italic">
                        "{data.subtitle}"
                    </p>
                )}
            </section>

            {/* Main Content */}
            <section className="">
                <article className="space-y-12 text-[#2c1810] text-lg leading-[1.8] font-light">
                    <div className="prose prose-stone max-w-none prose-headings:font-playfair prose-headings:text-[#4a2c1d]">
                        <PortableText value={data.content} />
                    </div>

                    {data.missionTitle && (
                        <div className="bg-[#fffcf8] p-10 rounded-3xl border border-[#e9e2d5] my-16 shadow-sm">
                            <h4 className="text-2xl font-playfair font-bold text-[#4a2c1d] mb-6 flex items-center gap-3">
                                <Milestone size={32} className="text-[#8b4513]" />
                                {data.missionTitle}
                            </h4>
                            <p className="text-[#6b5b52] font-normal leading-[1.7]">
                                {data.missionContent}
                            </p>
                        </div>
                    )}
                </article>
            </section>
        </div>
    );
}
