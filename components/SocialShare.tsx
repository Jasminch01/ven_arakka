'use client'

import { Facebook, Twitter, Link as LinkIcon } from 'lucide-react'

export default function SocialShare({ title }: { title: string }) {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

    const shareToFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')
    }

    const shareToTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`, '_blank')
    }

    const copyLink = () => {
        navigator.clipboard.writeText(shareUrl)
        alert('Link copied to clipboard!')
    }

    return (
        <div className="flex gap-4">
            <button
                onClick={shareToFacebook}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Share on Facebook"
            >
                <Facebook size={20} />
            </button>
            <button
                onClick={shareToTwitter}
                className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
                aria-label="Share on Twitter"
            >
                <Twitter size={20} />
            </button>
            <button
                onClick={copyLink}
                className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Copy link"
            >
                <LinkIcon size={20} />
            </button>
        </div>
    )
}
