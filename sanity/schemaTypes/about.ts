import { InfoOutlineIcon } from '@sanity/icons'

export default {
    name: 'about',
    title: 'About Page',
    type: 'document',
    icon: InfoOutlineIcon,
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            type: 'string',
            initialValue: 'About Me',
        },
        {
            name: 'subtitle',
            title: 'Subtitle / Quote',
            description: 'The short vertical quote shown in the about page header.',
            type: 'string',
        },
        {
            name: 'authorImage',
            title: 'Main Portrait',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'content',
            title: 'Biography Content',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'missionTitle',
            title: 'Mission Section Title',
            type: 'string',
        },
        {
            name: 'missionContent',
            title: 'Mission Section Content',
            type: 'text',
        }
    ],
}
