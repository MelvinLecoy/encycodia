//SSR
import { DOMNode } from "@/typings";

export default [
    {
        tag: 'h1',
        style: 't32 tb6',
        content: ['Server Side Rendering'],
    },
    {
        tag: 'p',
        content: [
            "Function runs on server to obtain data/resources ",
            {
                tag: 'strong',
                content: ['per request'],
            },
            " (whenever user hits up the corresponding URL). Next will prerender the page on request using data returned.",
            {tag: 'br'},
            "As getServerSideProps(",
            {
                tag: 'b',
                content: ['gSSP'],
            },
            ") only runs on server but never on client's browsers, we can write server-side code inside ",
            {
                tag: 'b',
                content: ['gSSP'],
            },
            ," exactly as that in AppRouter(directly fetch data from DB).",
            {tag: 'br'},
            "In fact, it's suggested that we should avoid calling the API route who does the fetching work. Instead, import all the related work directly into ",
            {
                tag: 'b',
                content: ['gSSP'],
            },
            ,".",
        ],
    },
    {
        tag: 'div',
        style: 'f mt10 sbcx12',
        content: [
            {
                tag: 'CODE',
                codeDesc: '1app',
            },
            {
                tag: 'div',
                content: [
                    {
                        tag: 'CODE',
                        codeDesc: '1pagesA',
                    },
                    {
                        tag: 'CODE',
                        codeDesc: '1pagesB',
                    },
                ],
            },
        ],
    },
] as DOMNode[];