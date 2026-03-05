import { CogIcon } from '@sanity/icons'

export default {
    name: 'siteSettings',
    title: 'Site Settings (Home Page Content)',
    type: 'document',
    icon: CogIcon,
    fields: [
        {
            name: 'siteTitle',
            title: 'Site Overarching Brand / Title',
            type: 'string',
        },
        {
            name: 'heroHeadline',
            title: 'Main Hero Headline',
            type: 'string',
        },
        {
            name: 'heroItalicText',
            title: 'Hero Italic Word / Subtitle',
            description: 'The word in italics in the hero section.',
            type: 'string',
        },
        {
            name: 'heroQuote',
            title: 'The Central Quote',
            type: 'string',
        },
        {
            name: 'footerQuote',
            title: 'Footer Ending Sentence',
            type: 'string',
            initialValue: 'Peace to all beings.',
        }
    ],
}
