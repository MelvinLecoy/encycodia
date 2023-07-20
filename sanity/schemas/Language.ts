// For FundamentalSyntax
export const langList = [
    { title: 'Python', value: 'python' },
    { title: 'Javascript / TS', value: 'js' },
    { title: 'C++ / C', value: 'cpp' },
    { title: 'C#', value: 'csharp' },
    { title: 'Java', value: 'java' },
    { title: 'Rust', value: 'rust' },
    { title: 'Go', value: 'go' },
];

export default {
    name: 'language',
    // title: 'Language',
    type: 'array',
    of: [{ type: 'string' }],
    options: {
        layout: 'grid',
        list: langList
    }
};