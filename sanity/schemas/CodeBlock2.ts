// For AllofNextjs
import { defineField } from 'sanity'

export default {
    name: 'codeBlock2',
    type: 'object',
    fields: [
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        defineField({
            name: 'code',
            title: 'Code Block',
            type: 'code',
            options: {
                language: 'tsx',
                languageAlternatives: [{ title: 'tsx', value: 'tsx' },]
            },
        }),
    ],
};