import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
    projectId: '9z23zqnb',
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn: false,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}
