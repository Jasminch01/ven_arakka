import {
    HomeIcon,
    UserIcon,
    DocumentIcon,
    ImageIcon,
    PlayIcon,
    EnvelopeIcon,
    CogIcon,
    BookIcon
} from '@sanity/icons'

export const myStructure = (S: any) =>
    S.list()
        .title('Ven. Arrakkha CMS')
        .items([
            // Primary Configuration (Singleton logic effectively through structure)
            S.listItem()
                .title('Site Branding & Home')
                .icon(CogIcon)
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                ),

            S.divider(),

            // Dedicated Page Editors
            S.listItem()
                .title('About Page')
                .icon(UserIcon)
                .child(
                    S.document()
                        .schemaType('about')
                        .documentId('about')
                ),

            S.listItem()
                .title('Contact Page')
                .icon(EnvelopeIcon)
                .child(
                    S.document()
                        .schemaType('contact')
                        .documentId('contact')
                ),

            S.divider(),

            // Regular Collections
            S.listItem()
                .title('Dharma Reflections')
                .icon(BookIcon)
                .child(S.documentTypeList('post').title('All Blog Posts')),

            S.listItem()
                .title('Video Teachings')
                .icon(PlayIcon)
                .child(S.documentTypeList('video').title('All Videos')),

            S.listItem()
                .title('Photo Gallery')
                .icon(ImageIcon)
                .child(S.documentTypeList('gallery').title('Manage Photos')),

            S.divider(),

            // Administrative
            S.listItem()
                .title('Authors & Teachers')
                .icon(UserIcon)
                .child(S.documentTypeList('author').title('Authors')),

            S.listItem()
                .title('Blog Categories')
                .icon(DocumentIcon)
                .child(S.documentTypeList('category').title('Categories')),
        ])
