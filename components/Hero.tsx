"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Waves, Sun } from "lucide-react";
import { urlFor } from "@/sanity/lib/client";

const Feature = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        className="bg-white/40 backdrop-blur-md p-10 rounded-2xl md:rounded-3xl border border-[#e9e2d5] shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all"
    >
        <div className="w-14 h-14 bg-[#8b4513]/10 text-[#8b4513] rounded-full flex items-center justify-center mb-6">
            <Icon size={28} />
        </div>
        <h3 className="text-2xl font-playfair font-bold text-[#4a2c1d] mb-4">{title}</h3>
        <p className="text-[#6b5b52] leading-relaxed">
            {desc}
        </p>
    </motion.div>
);

const Hero = ({ aboutImage }: { aboutImage?: any }) => {
    return (
        <div className="space-y-32 mb-32">
            {/* Features Section */}
            <section className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <Feature
                        icon={Leaf}
                        title="Mindfulness"
                        desc="Discover the art of living in the present moment through daily meditation and focused awareness."
                        delay={0.1}
                    />
                    <Feature
                        icon={Waves}
                        title="Tranquility"
                        desc="Cultivate an inner calm that remains unshaken by the external storms of the modern world."
                        delay={0.2}
                    />
                    <Feature
                        icon={Sun}
                        title="Enlightenment"
                        desc="Seek wisdom through reflections and ancient teachings adapted for our contemporary lives."
                        delay={0.3}
                    />
                </div>
            </section>

            {/* About Preview Section */}
            <section className="relative w-full py-24 bg-[#fffcf8] overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group rounded-3xl overflow-hidden shadow-2xl h-[450px] lg:h-[600px] bg-[#e9e2d5]"
                    >
                        {/* Dynamic image from Sanity */}
                        {aboutImage ? (
                            <Image
                                src={urlFor(aboutImage).url()}
                                alt="Ven. Arrakkha"
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="absolute inset-0 bg-[#e9e2d5] flex items-center justify-center">
                                <Sun className="text-[#8b4513]/20" size={120} />
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>

                    <div className="space-y-8">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-xs uppercase tracking-[0.2em] font-bold text-[#8b4513] block"
                        >
                            The Messenger of Peace
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl lg:text-5xl font-playfair font-bold text-[#4a2c1d] leading-tight"
                        >
                            A dedicated life in search of truth and universal harmony.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-xl text-[#6b5b52] leading-[1.8] font-light italic"
                        >
                            "Born with a deep curiosity for the nature of existence, I chose the path of monkhood to explore the depths of human consciousness and to share the message of compassion with the world."
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            <Link
                                href="/about-me"
                                className="inline-flex items-center gap-2 text-lg font-medium text-[#8b4513] hover:translate-x-2 transition-all group"
                            >
                                Learn more about my journey
                                <ArrowRight size={20} className="group-hover:text-[#8b4513]" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;