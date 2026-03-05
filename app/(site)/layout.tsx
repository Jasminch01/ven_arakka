"use client";

import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Note: 'Lotus' does not exist in standard Lucide, removed it as it was unused.
import { useState, useEffect } from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
});

const navLinks = [
    { href: "/about-me", label: "About" },
    { href: "/blogs", label: "Reflections" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact-with-me", label: "Contact" },
    { href: "/videos", label: "Videos" },
];

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={cn(
                geistSans.variable,
                geistMono.variable,
                playfair.variable,
                "antialiased bg-[#fdfaf5] text-[#2c1810] min-h-screen font-sans"
            )}
        >
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-[60] transition-all duration-300 px-4 md:px-8",
                    isScrolled
                        ? "py-3 bg-white/80 backdrop-blur-xl border-b border-[#e9e2d5] shadow-sm"
                        : "py-6 bg-transparent"
                )}
            >
                <nav className="max-w-6xl mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 group transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <div className="w-10 h-10 bg-[#8b4513] rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                            {/* Simple lotus-like visual placeholder */}
                            <span className="text-xl font-serif">A</span>
                        </div>
                        <span className="text-2xl font-playfair font-semibold tracking-tight text-[#4a2c1d]">
                            Ven. Arrakkha
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "relative text-sm font-medium tracking-wide uppercase transition-colors group py-2",
                                    pathname === link.href ? "text-[#8b4513]" : "text-[#6b5b52] hover:text-[#8b4513]"
                                )}
                            >
                                {link.label}
                                <span className={cn(
                                    "absolute bottom-0 left-0 w-full h-[1.5px] bg-[#8b4513] origin-right transition-transform duration-300 scale-x-0 group-hover:scale-x-100 group-hover:origin-left",
                                    pathname === link.href && "scale-x-100"
                                )} />
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-[#4a2c1d]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-b border-[#e9e2d5] p-8 flex flex-col gap-6 text-center md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "text-xl font-medium tracking-wide",
                                        pathname === link.href ? "text-[#8b4513]" : "text-[#6b5b52]"
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <main className="pt-24 md:pt-32 min-h-[calc(100vh-100px)]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="bg-[#2c1810] text-[#fdfaf5] py-20 px-8 mt-24">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-center md:text-left space-y-4 max-w-sm">
                        <div className="text-3xl font-playfair font-bold text-[#e9e2d5]">
                            Ven. Arrakkha
                        </div>
                        <p className="text-[#a89085] leading-relaxed">
                            Sharing the dharma and walking the path toward inner tranquility and universal peace.
                        </p>
                    </div>

                    <div className="flex gap-10 text-[#e9e2d5]">
                        <Link href="/blogs" className="hover:text-white transition-colors">Reflections</Link>
                        <Link href="/about-me" className="hover:text-white transition-colors">Biography</Link>
                        <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
                    </div>

                    <div className="text-center md:text-right space-y-2">
                        <p className="text-[#a89085] text-sm uppercase tracking-widest">Connect</p>
                        <p className="text-lg">Peace to all beings.</p>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto border-t border-white/10 mt-16 pt-8 text-center text-[#6b5b52] text-xs lowercase">
                    © {new Date().getFullYear()} Ven. Arrakkha Portfolio — Crafted for mindfulness.
                </div>
            </footer>
        </div>
    );
}
