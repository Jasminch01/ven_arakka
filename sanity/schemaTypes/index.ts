import post from './post'
import author from './author'
import category from './category'
import blockContent from './blockContent'
import about from './about'
import contact from './contact'
import gallery from './gallery'
import siteSettings from './siteSettings'
import video from './video'

export const schemaTypes = [
    siteSettings, // Global config
    about,       // Pages
    contact,
    post,         // Collections
    video,
    gallery,
    author,      // References
    category,
    blockContent,
]
