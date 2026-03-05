import { EnvelopeIcon } from '@sanity/icons'

export default {
    name: 'contact',
    title: 'Contact Information',
    type: 'document',
    icon: EnvelopeIcon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Contact & Connect',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            initialValue: 'Keep in Touch',
        },
        {
            name: 'email',
            title: 'Email Address',
            type: 'string',
        },
        {
            name: 'socialHandle',
            title: 'Social Handle / Username',
            type: 'string',
        },
        {
            name: 'mailingAddress',
            title: 'Mailing Address Display',
            type: 'text',
        },
        {
            name: 'contactQuote',
            title: 'Quote on Contact Page',
            type: 'string',
            initialValue: '"A kind word can warm three winter months."',
        }
    ],
}
