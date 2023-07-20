import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'
import {StreamLanguage} from '@codemirror/language'

export default defineConfig({
  name: 'default',
  title: 'encycodia',

  projectId: 'u9c1gb07',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    deskTool(),
    visionTool(),
    codeInput({
      codeModes: [
        {
          name: 'cpp',
          loader: () => import('@codemirror/lang-cpp').then(({cpp}) => cpp()),
        },
        {
          name: 'rust',
          loader: () => import('@codemirror/lang-rust').then(({rust}) => rust()),
        },
        {
          name: 'go',
          loader: () => import('@codemirror/legacy-modes/mode/go').then(({go}) => StreamLanguage.define(go)),
        },
      ],
    })
  ],

  schema: {
    types: schemaTypes,
  },
})
