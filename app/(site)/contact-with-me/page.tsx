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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch h-full">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#fffcf8] border border-[#e9e2d5] p-12 rounded-3xl space-y-12 h-full flex flex-col justify-between shadow-sm lg:shadow-xl lg:shadow-[#4a2c1d]/5"
                >
                    <div className="space-y-8">
                        <h2 className="text-3xl font-playfair font-bold text-[#4a2c1d]">How can I assist?</h2>
                        <p className="text-lg text-[#6b5b52] leading-relaxed">
                            I am open to invitations for dharma talks, retreat guidance, or simply a heartfelt conversation about life and the path.
                        </p>
                    </div>

                    <div className="space-y-10">
                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#8b4513] shadow-sm border border-[#e9e2d5] transition-all group-hover:bg-[#8b4513] group-hover:text-white group-hover:-translate-y-1">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-widest text-[#8b4513] font-bold mb-1">Email Reflection</h4>
                                <p className="text-xl text-[#4a2c1d] font-playfair">teachings@venarrakkha.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#8b4513] shadow-sm border border-[#e9e2d5] transition-all group-hover:bg-[#8b4513] group-hover:text-white group-hover:-translate-y-1">
                                <MessageSquare size={24} />
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-widest text-[#8b4513] font-bold mb-1">Dharma Inquiry</h4>
                                <p className="text-xl text-[#4a2c1d] font-playfair">@ven_arakka_reflections</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#8b4513] shadow-sm border border-[#e9e2d5] transition-all group-hover:bg-[#8b4513] group-hover:text-white group-hover:-translate-y-1">
                                <BookOpen size={24} />
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-widest text-[#8b4513] font-bold mb-1">Mailing Address</h4>
                                <p className="text-xl text-[#4a2c1d] font-playfair italic">Nomadic Presence across the globe.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

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