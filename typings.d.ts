interface SanityDefault {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
};

interface codeSnippet {
    _key: string;
    code: {
        _type: 'code';
        code: string;
        language?: string;
    };
};

interface CodeBlock extends codeSnippet {
    _type: 'codeBlock';
    language: string[];
};

export interface Titles {
    _type: 'titleBlock';
    numberList: boolean;
    codes: CodeBlock[];
    _key: string;
    title: string;
};

export interface FS extends SanityDefault {
    _type: 'fundamentalSyntax';
    topic: string;
    titleBlock: Titles[];
};

// For /FundamentalSyntax/[[...topic]]/page.tsx
export interface tC {
    language: string[];
    codeSnippet: codeSnippet[];
};

// For /AllofNextjs/
export interface DOMNode {
    tag: keyof JSX.IntrinsicElements;
    style?: string;
    content?: Array<DOMNode | string>;
    href?: string;
    target?: string;
    codeDesc?: string;
};

export interface CodeBlock2 extends codeSnippet {
    _type: 'codeBlock2';
    description: string;
};

export interface Titles2 {
    _type: 'titleBlock2';
    codes: CodeBlock2[];
    _key: string;
    title: string;
};

export interface AoN extends SanityDefault {
    _type: 'allofNextjs';
    topic: string;
    titleBlock2: Titles2[];
};

// For /DataStructures/
interface CodeBlockScala extends codeSnippet {
    _type: 'codeBlockScala';
    language: string[];
};

interface Titles3 {
    _type: 'titleBlock3';
    codes: CodeBlockScala[];
    category: string;
    _key: string;
};

export interface DSs extends SanityDefault {
    _type: 'dataStructures';
    container: string;
    titleBlock3: Titles3[];
};

// For reshapeRows in /lib/util.ts
export type CodeRows = Record<string, Record<string, string[]>>;
//                            categ          lang    codes[]