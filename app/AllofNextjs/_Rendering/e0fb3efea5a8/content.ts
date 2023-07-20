//SSG
import { DOMNode } from "@/typings";

export default [
    {
        tag: 'h1',
        style: 't32 tb6',
        content: ['Static Site Generation'],
    },
    {
        tag: 'p',
        content: [
            "Page HTML is generated at build time(npm run build), which can be reused on each request and cached by CDN.",
            {tag: 'br'},
            "As getStaticProps(",
            {
                tag: 'b',
                content: ['gSProps'],
            },
            ") only runs on server but never on client's browsers, we can write server-side code inside ",
            {
                tag: 'b',
                content: ['gSProps'],
            },
            " exactly as that in AppRouter(directly fetch data from DB).",
            {tag: 'br'},
            "In fact, it's suggested that we should avoid calling the API route who does the fetching work. Instead, wrap the work in a util function and import that directly into ",
            {
                tag: 'b',
                content: ['gSProps'],
            },
            ".",
            {tag: 'br'},
            "There're two forms of SSG depending on if external data is involved.",
            {tag: 'br'},
            "- SSG without data: Next will treat it as a plain HTML file (as it should).",
            {tag: 'br'},
            "- SSG with data: Below are two variances depending on if dynamic routes are involved.",
        ],
    },
    {
        tag: 'div',
        style: 'f mt10 sbcx20',
        content: [
            {
                tag: 'div',
                style: 'f fc jb b1 border-red-500',
                content: [
                    {
                        tag: 'p',
                        style: 't15 pl5',
                        content: ['1. Normal SSG for particular page: RSC direct fetch vs getStaticProps'],
                    },
                    {
                        tag: 'div',
                        style: 'f sbcx12',
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
                                ]
                            },
                        ],
                    },
                ],
            },
            {
                tag: 'div',
                style: 'b1 border-red-500',
                content: [
                    {
                        tag: 'p',
                        style: 't15 pl5',
                        content: ['2. SSG for EVERY dynamic route: generateStaticParams vs (getStaticPaths + getStaticProps)'],
                    },
                    {
                        tag: 'ul',
                        style: 't15 list-disc ps-[37px]',
                        content: [
                            {
                                tag: 'li',
                                content: [
                                    {
                                        tag: 'b',
                                        content: ['gSParams'],
                                    },
                                    '/',
                                    {
                                        tag: 'b',
                                        content: ['gSPaths'],
                                    },
                                    ,' runs at build time to give a list of dynamic paths to be statically generated'],
                            },
                            {
                                tag: 'li',
                                content: [
                                    {
                                        tag: 'b',
                                        content: ['gSParams'],
                                    },
                                    '/',
                                    {
                                        tag: 'b',
                                        content: ['gSPaths'],
                                    },
                                    " only runs during the build in production. But in npm run dev, it gets called on ",
                                    {tag: 'br'},
                                    "every request. (gSParams won't be called again during ISR)",
                                ],
                            },
                        ]
                    },
                    {
                        tag: 'div',
                        style: 'f sbcx12',
                        content: [
                            {
                                tag: 'CODE',
                                codeDesc: '2app',
                            },
                            {
                                tag: 'div',
                                content: [
                                    {
                                        tag: 'CODE',
                                        codeDesc: '2pagesA',
                                    },
                                    {
                                        tag: 'CODE',
                                        codeDesc: '2pagesB',
                                    },
                                ]
                            },
                        ],
                    },
                ],
            },
        ],
    },
] as DOMNode[];