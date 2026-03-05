"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, BookOpen, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="max-w-6xl mx-auto px-8 py-20 min-h-screen">
            <div className="text-center space-y-8 mb-20 animate-fade-in">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-xs uppercase tracking-[0.3em] font-bold text-[#8b4513]"
                >
                    Keep in Touch
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-playfair font-bold text-[#4a2c1d]">
                    Contact & <br /> <span className="text-[#8b4513] italic font-normal">Connect</span>
                </h1>
                <p className="text-xl text-[#6b5b52] font-light max-w-xl mx-auto italic">
                    "A kind word can warm three winter months."
                </p>
            </div>

            <div className="flex justify-center items-center h-full">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#2c1810] p-12 rounded-3xl text-[#fdfaf5] shadow-2xl h-full shadow-[#2c1810]/20"
                >
                    <form className="space-y-10 flex flex-col h-full h-full">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-playfair font-bold text-[#e9e2d5]">Send a Message</h2>
                            <p className="text-[#a89085]">Please share your heart, and I will respond whenever the moment allows.</p>
                        </div>

                        <div className="space-y-8 flex-grow">
                            <div className="space-y-2 border-b border-white/10 pb-4 group focus-within:border-[#8b4513] transition-all">
                                <label className="text-xs uppercase tracking-widest text-white/30 font-bold">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Siddhartha Gautama"
                                    className="w-full bg-transparent border-none outline-none text-xl font-playfair placeholder:text-white/10"
                                />
                            </div>
                            <div className="space-y-2 border-b border-white/10 pb-4 group focus-within:border-[#8b4513] transition-all">
                                <label className="text-xs uppercase tracking-widest text-white/30 font-bold">Your Email</label>
                                <input
                                    type="email"
                                    placeholder="zen@mindfulness.com"
                                    className="w-full bg-transparent border-none outline-none text-xl font-playfair placeholder:text-white/10"
                                />
                            </div>
                            <div className="space-y-2 border-b border-white/10 pb-4 group focus-within:border-[#8b4513] transition-all">
                                <label className="text-xs uppercase tracking-widest text-white/30 font-bold">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="What is on your heart today?"
                                    className="w-full bg-transparent border-none outline-none text-xl font-playfair placeholder:text-white/10 resize-none h-40"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-6 bg-[#8b4513] rounded-2xl flex items-center justify-center gap-3 text-xl font-medium hover:bg-[#a0522d] transition-colors shadow-lg shadow-black/30 group active:scale-95"
                            onClick={(e) => { e.preventDefault(); alert('Message sent conceptually. Thank you.'); }}
                        >
                            Deliver Message
                            <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}