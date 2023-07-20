// For AllofNextjs
export default {
    name: 'titleBlock2',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        // {
        //     name: 'numberList',
        //     title: 'Number List?',
        //     type: 'boolean',
        //     initialValue: false,
        // },
        {
            name: 'codes',
            title: 'Codes',
            type: 'array',
            of: [{type: 'codeBlock2'}]
        }
    ],
};