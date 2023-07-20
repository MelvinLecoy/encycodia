// For FundamentalSyntax
import { defineField } from 'sanity'
import { langList } from './Language'

export default {
    name: 'codeBlock',
    type: 'object',
    fields: [
        {
            name: 'language',
            title: 'Languages',
            type: 'language',
        },
        defineField({
            name: 'code',
            title: 'Code Block',
            type: 'code',
            options: {
                language: 'python',
                languageAlternatives: langList
            },
        }),
    ],
    // preview: {
    //     select: {
    //         language: 'language',
    //     },
    //     prepare({ language }: { language: string[] }) {
    //         return {
    //             title: `${language.join(', ')}`
    //         };
    //     }
    // },
};