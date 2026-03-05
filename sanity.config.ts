import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'
import { myStructure } from './sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Ven Arrakkha CMS',

  projectId: '9z23zqnb',
  dataset: 'production',
  basePath: '/admin',

  // Use the custom structure we built for better UX
  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
