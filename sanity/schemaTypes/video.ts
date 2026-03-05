import { PlayIcon } from '@sanity/icons'

export default {
    name: 'video',
    title: 'Dharma Videos',
    type: 'document',
    icon: PlayIcon,
    fields: [
        {
            name: 'title',
            title: 'Video Title',
            type: 'string',
        },
        {
            name: 'duration',
            title: 'Duration (e.g. 12:45)',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'youtubeUrl',
            title: 'YouTube URL',
            type: 'url',
        },
        {
            name: 'thumbnail',
            title: 'Custom Thumbnail (Optional)',
            type: 'image',
            options: { hotspot: true },
        }
    ],
}
