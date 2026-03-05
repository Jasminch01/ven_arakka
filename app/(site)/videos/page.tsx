import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";
import { PlayCircle, Youtube, Tv, Sparkles } from "lucide-react";
import Image from "next/image";

async function getVideos() {
    const query = `*[_type == "video"] | order(_createdAt desc) {
        _id,
        title,
        duration,
        category,
        youtubeUrl,
        thumbnail
    }`;
    return await client.fetch(query);
}

export default async function VideosPage() {
    const videos = await getVideos();

    return (
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
            <header className="text-center space-y-8 max-w-2xl mx-auto mb-16 animate-fade-in">
                <div className="flex justify-center mb-6 text-[#8b4513]">
                    <Tv size={48} className="opacity-30" />
                </div>
                <h1 className="text-5xl md:text-7xl font-playfair font-bold text-[#4a2c1d]">
                    Dharma <br /> <span className="text-[#8b4513] italic font-normal">Teachings</span>
                </h1>
                <p className="text-xl text-[#6b5b52] font-light leading-relaxed">
                    Sharing the voice of wisdom through modern digital windows. Explore talks, meditation guides, and glimpses into the monastic path.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {videos.map((video: any) => (
                    <div
                        key={video._id}
                        className="group relative bg-[#fffcf8] rounded-[40px] border border-[#e9e2d5] p-6 lg:p-10 shadow-sm hover:shadow-2xl hover:shadow-[#4a2c1d]/10 transition-all duration-700 h-full flex flex-col"
                    >
                        <div className="relative aspect-video rounded-[30px] overflow-hidden bg-[#e9e2d5] mb-8 group-hover:scale-[1.02] transition-transform duration-500 shadow-md">
                            {video.thumbnail ? (
                                <Image
                                    src={urlFor(video.thumbnail).width(800).height(450).url()}
                                    alt={video.title}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#8b4513]/5 to-[#4a2c1d]/10">
                                    <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#8b4513] shadow-lg group-hover:scale-125 transition-transform duration-500 group-hover:bg-[#8b4513] group-hover:text-white">
                                        <PlayCircle size={40} className="fill-current" />
                                    </div>
                                </div>
                            )}

                            {video.duration && (
                                <div className="absolute top-6 left-6 px-4 py-2 bg-white/80 backdrop-blur-md text-[#4a2c1d] rounded-full text-xs font-bold uppercase tracking-widest border border-[#e9e2d5]">
                                    {video.duration}
                                </div>
                            )}
                        </div>

                        <div className="space-y-4 flex-grow">
                            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-[#8b4513]">
                                <Sparkles size={14} />
                                <span>{video.category}</span>
                            </div>
                            <h3 className="text-3xl font-playfair font-bold text-[#4a2c1d] leading-tight group-hover:text-[#8b4513] transition-colors">
                                {video.title}
                            </h3>
                            <p className="text-[#6b5b52] leading-relaxed font-light line-clamp-2 italic">
                                Join Ven. Arrakkha in this deep reflection on how to apply ancient wisdom to the challenges of modern life.
                            </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-[#e9e2d5] flex items-center justify-between">
                            <a
                                href={video.youtubeUrl || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-medium text-[#4a2c1d] hover:text-[#8b4513] transition-colors group/btn"
                            >
                                Watch on YouTube
                                <Youtube className="group-hover/btn:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {videos.length === 0 && (
                <div className="text-center py-40">
                    <p className="text-[#6b5b52] italic font-light">The archive of teachings is being prepared for the journey ahead.</p>
                </div>
            )}

            <div className="bg-[#2c1810] rounded-[48px] p-12 md:p-20 text-center space-y-10 text-[#fdfaf5]">
                <div className="space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#e9e2d5]">Never miss a talk.</h2>
                    <p className="text-[#a89085] text-lg font-light leading-relaxed">
                        Subscribe to the YouTube channel to receive notifications whenever a new reflection or guided meditation is shared.
                    </p>
                </div>
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 px-12 py-6 bg-[#8b4513] text-white rounded-full text-xl font-medium hover:bg-[#a0522d] transition-all transform hover:scale-105 shadow-2xl shadow-black/40"
                >
                    Subscribe to Channel
                    <Youtube size={28} />
                </a>
            </div>
        </div>
    );
}
