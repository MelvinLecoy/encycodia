// For FundamentalSyntax
import { defineField } from 'sanity'
import { langList } from './Language'

export default {
    name: 'codeBlockScala',
    type: 'object',
    fields: [
        {
            name: 'language',
            title: 'Languages',
            type: 'languageScala',
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
};