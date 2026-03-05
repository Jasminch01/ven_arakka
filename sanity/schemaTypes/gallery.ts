import { ImageIcon } from '@sanity/icons'

export default {
    name: 'gallery',
    title: 'Photo Gallery',
    type: 'document',
    icon: ImageIcon,
    fields: [
        {
            name: 'title',
            title: 'Photo Title',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Category / Tag',
            type: 'string',
            initialValue: 'Spirituality',
        },
        {
            name: 'image',
            title: 'Actual Photo',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'order',
            title: 'Display Order (Lesser first)',
            type: 'number',
            initialValue: 0,
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'image',
        }
    }
}
