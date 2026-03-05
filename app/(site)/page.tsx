import { client } from "@/sanity/lib/client";
import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import HomeClient from "@/components/HomeClient";

async function getSiteSettings() {
  const query = `*[_type == "siteSettings"][0] {
        siteTitle,
        heroHeadline,
        heroItalicText,
        heroQuote,
        footerQuote
    }`;
  return await client.fetch(query);
}

async function getAboutImage() {
  const query = `*[_type == "about"][0] {
        authorImage
    }`;
  return await client.fetch(query);
}

export default async function Home() {
  const [settings, aboutData] = await Promise.all([
    getSiteSettings(),
    getAboutImage()
  ]);

  // Fallbacks if data isn't in Sanity yet
  const headline = settings?.heroHeadline || "Universal";
  const italicText = settings?.heroItalicText || "Tranquility";
  const quote = settings?.heroQuote || "The heart is like a mirror. Keep it clean from the dust of greed and delusion to reflect the light of truth.";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-8 text-center overflow-hidden">
        <HomeClient
          headline={headline}
          italicText={italicText}
          quote={quote}
        />

        {/* Static/Server-side Fallback Link for SEO */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-0">
          <h1>{headline} {italicText}</h1>
          <p>{quote}</p>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#8b4513] opacity-30 animate-bounce"
        >
          <ArrowDown size={32} />
        </div>
      </section>

      <Hero aboutImage={aboutData?.authorImage} />
    </div>
  );
}

