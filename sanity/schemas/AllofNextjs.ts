// For AllofNextjs
export default {
    name: 'allofNextjs',
    title: 'All of Nextjs',
    type: 'document',
    fields: [
        {
            name: 'topic',
            title: 'Topic',
            type: 'string',
        },
        {
            name: 'titleBlock2',
            title: 'Titles',
            type: 'array',
            of: [{ type: 'titleBlock2' }]
            // of: [{ type: 'reference', to: { type: 'codeBlock' } }],
        },
    ],
};