"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HomeClientProps {
    headline: string;
    italicText: string;
    quote: string;
}

export default function HomeClient({ headline, italicText, quote }: HomeClientProps) {
    return (
        <>
            {/* Abstract Zen Background elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-[#8b4513]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.05, 0.1, 0.05],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-[#d2691e]/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"
            />

            <div className="max-w-4xl mx-auto z-10 space-y-10 group">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="mx-auto w-24 h-[1px] bg-[#8b4513]/40 mb-12 shadow-[0_0_15px_rgba(139,69,19,0.3)]"
                />

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-6xl md:text-8xl font-playfair font-bold text-[#4a2c1d] tracking-tighter leading-[0.9]"
                >
                    {headline} <br />
                    <span className="text-[#8b4513] italic">{italicText}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="text-xl md:text-2xl text-[#6b5b52] leading-relaxed italic max-w-2xl mx-auto font-light"
                >
                    "{quote}"
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
                >
                    <Link
                        href="/blogs"
                        className="px-10 py-5 bg-[#4a2c1d] text-[#fdfaf5] rounded-full text-lg font-medium hover:bg-[#2c1810] transition-all transform hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#4a2c1d]/30"
                    >
                        Discover Reflections
                    </Link>
                    <Link
                        href="/about-me"
                        className="px-10 py-5 bg-transparent border border-[#4a2c1d]/30 text-[#4a2c1d] rounded-full text-lg font-medium hover:bg-[#8b4513]/5 transition-all"
                    >
                        My Spiritual Journey
                    </Link>
                </motion.div>
            </div>
        </>
    );
}
