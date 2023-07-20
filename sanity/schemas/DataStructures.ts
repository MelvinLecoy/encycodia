// For DataStructures
export default {
    name: 'dataStructures',
    title: 'Data Structures',
    type: 'document',
    fields: [
        {
            name: 'container',
            title: 'Container',
            type: 'string',
        },
        {
            name: 'titleBlock3',
            title: 'Table Rows',
            type: 'array',
            of: [{ type: 'titleBlock3' }]
            // of: [{ type: 'reference', to: { type: 'codeBlock' } }],
        },
    ],
};