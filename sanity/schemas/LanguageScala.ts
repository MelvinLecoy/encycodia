// For DataStructures
export const langListScala = [
    { title: 'Python', value: 'python' },
    { title: 'Typescript', value: 'ts' },
    { title: 'C++', value: 'cpp' },
    { title: 'C#', value: 'csharp' },
    { title: 'Java', value: 'java' },
    { title: 'Go', value: 'go' },
    { title: 'Rust', value: 'rust' },
    { title: 'Scala', value: 'scala' },
];

export default {
    name: 'languageScala',
    // title: 'Language',
    type: 'array',
    of: [{ type: 'string' }],
    options: {
        layout: 'grid',
        list: langListScala
    }
};