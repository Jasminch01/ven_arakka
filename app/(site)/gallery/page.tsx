import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import { Camera, Maximize2 } from "lucide-react";

async function getPhotos() {
    const query = `*[_type == "gallery"] | order(order asc) {
        _id,
        title,
        category,
        image
    }`;
    return await client.fetch(query);
}

export default async function GalleryPage() {
    const photos = await getPhotos();

    return (
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
            <header className="text-center space-y-8 max-w-2xl mx-auto mb-16 animate-fade-in">
                <div className="flex justify-center mb-6 text-[#8b4513]">
                    <Camera size={48} className="opacity-30" />
                </div>
                <h1 className="text-5xl md:text-7xl font-playfair font-bold text-[#4a2c1d]">
                    Visual <br /> <span className="text-[#8b4513] italic font-normal">Stillness</span>
                </h1>
                <p className="text-xl text-[#6b5b52] font-light leading-relaxed">
                    A collection of moments captured on the journey—reminders of the beauty that lies in simplicity and silence.
                </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {photos.map((photo: any) => (
                    <div
                        key={photo._id}
                        className="group relative h-[450px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 bg-[#e9e2d5]"
                    >
                        {photo.image ? (
                            <Image
                                src={urlFor(photo.image).width(600).height(800).url()}
                                alt={photo.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 text-[#8b4513]/20">
                                <Maximize2 size={64} className="group-hover:scale-110 transition-transform" />
                                <span className="text-xs tracking-[0.3em] uppercase">{photo.category}</span>
                            </div>
                        )}

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/80 via-[#2c1810]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#e9e2d5] mb-2 block">{photo.category}</span>
                            <h3 className="text-2xl font-playfair font-bold text-white">{photo.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {photos.length === 0 && (
                <div className="text-center py-40">
                    <p className="text-[#6b5b52] italic font-light">The gallery is currently being curated with mindful moments.</p>
                </div>
            )}

            {photos.length > 0 && (
                <div className="text-center pt-20">
                    <p className="text-[#6b5b52] italic font-light">More glimpses of mindfulness to follow.</p>
                </div>
            )}
        </div>
    );
}
