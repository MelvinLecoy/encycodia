// For FundamentalSyntax
export default {
    name: 'titleBlock',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'numberList',
            title: 'Number List?',
            type: 'boolean',
            initialValue: false,
        },
        {
            name: 'codes',
            title: 'Different Languages',
            type: 'array',
            of: [{type: 'codeBlock'}]
        }
    ],
};