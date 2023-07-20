//API Routing
import { DOMNode } from "@/typings";

export default [
    {
        tag: 'h1',
        style: 't32 tb6',
        content: ['API Routing'],
    },
    {
        tag: 'p',
        content: [
            "API Routes must be put inside of ",
            {
                tag: 'i',
                content: ["/pages/api"],
            },
            " in PagesRouter. But in AppRouter, Route Handlers can be put in anywhere and has the same effect on routing like ",
            {
                tag: 'i',
                content: ["page.tsx"],
            },
            " (so they couldn't coexist in the same directory that'd resolve to the same route).",
            {tag: 'br'},
            "HTTP methods supported include ",
            {
                tag: 'strong',
                content: ["GET"],
            }, ", ",
            {
                tag: 'strong',
                content: ["POST"],
            }, ", ",
            {
                tag: 'strong',
                content: ["PUT"],
            }, ", ",
            {
                tag: 'strong',
                content: ["PATCH"],
            }, ", ",
            {
                tag: 'strong',
                content: ["DELETE"],
            }, ", ",
            {
                tag: 'strong',
                content: ["HEAD"],
            }, ", and ",
            {
                tag: 'strong',
                content: ["OPTIONS"],
            }, ".",
            {tag: 'br'},
            "API Routes are dynamically evaluated if any of the following is met:",
            {tag: 'br'},
            {
                tag: 'strong',
                content: ["1. "],
            },
            "any non-GET HTTP methods ",
            {
                tag: 'strong',
                content: ["2. "],
            },
            {
                tag: 'i',
                content: ["Request"],
            },
            " object is used as an argument to GET ",
            {
                tag: 'strong',
                content: ["3. "],
            },
            "Dynamic Functions is used (cookies(), headers()) ",
            {
                tag: 'strong',
                content: ["4. "],
            },
            "Route Segment Config options specifies",
        ],
    },
    {
        tag: 'div',
        style: 'mt15 sbcy20',
        content: [
            {
                tag: 'div',
                style: 'wfit b1 border-red-500',
                content: [
                    {
                        tag: 'h3',
                        style: 't15 pl7',
                        content: ['Typical use case'],
                    },
                    {
                        tag: 'div',
                        style: 'f sbcx131',
                        content: [
                            {
                                tag: 'CODE',
                                codeDesc: 'typicalApp',
                            },
                            {
                                tag: 'CODE',
                                codeDesc: 'typicalPages',
                            },
                        ],
                    },
                ],
            },
            {
                tag: 'div',
                style: 'wfit b1 border-red-500',
                content: [
                    {
                        tag: 'h3',
                        style: 't15 pl7',
                        content: ['Dynamic API Routes'],
                    },
                    {
                        tag: 'div',
                        style: 'f sbcx12',
                        content: [
                            {
                                tag: 'CODE',
                                codeDesc: 'dynamicApp',
                            },
                            {
                                tag: 'CODE',
                                codeDesc: 'dynamicPages',
                            },
                        ],
                    },
                ],
            },
            {
                tag: 'div',
                style: 'wfit b1 border-red-500',
                content: [
                    {
                        tag: 'h3',
                        style: 't15 pl7',
                        content: ['Frontend Backend Integration in AppRouter (Fetching & Revalidation involved)'],
                    },
                    {
                        tag: 'div',
                        style: 'f sbcx106',
                        content: [
                            {
                                tag: 'CODE',
                                codeDesc: 'backend',
                            },
                            {
                                tag: 'CODE',
                                codeDesc: 'frontend',
                            },
                        ],
                    },
                ],
            },
            {
                tag: 'div',
                style: 'wfit b1 border-red-500',
                content: [
                    {
                        tag: 'h3',
                        style: 't15 pl7',
                        content: ['Setting cookies & headers (verbose)'],
                    },
                    {
                        tag: 'div',
                        style: 'f sbcx163',
                        content: [
                            {
                                tag: 'CODE',
                                codeDesc: 'verboseCHApp',
                            },
                            {
                                tag: 'CODE',
                                codeDesc: 'verboseCHPages',
                            },
                        ],
                    },
                ],
            },
        ],
    },
] as DOMNode[];