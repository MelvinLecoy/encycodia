// For FundamentalSyntax
export default {
    name: 'fundamentalSyntax',
    title: 'Fundamental Syntax',
    type: 'document',
    fields: [
        {
            name: 'topic',
            title: 'Topic',
            type: 'string',
        },
        {
            name: 'titleBlock',
            title: 'Titles',
            type: 'array',
            of: [{ type: 'titleBlock' }]
            // of: [{ type: 'reference', to: { type: 'codeBlock' } }],
        },
    ],
};