// For DataStructures
export default {
    name: 'titleBlock3',
    type: 'object',
    fields: [
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'codes',
            title: 'Different Languages',
            type: 'array',
            of: [{type: 'codeBlockScala'}]
        }
    ],
};