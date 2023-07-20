import { DOMNode } from "@/typings";

export default [
    {
        tag: 'h1',
        style: 't32 tb6',
        content: ['Rendering'],
    },
    {
        tag: 'div',
        content: [
            {
                tag: 'p',
                content: [
                    "Before React 18/Next 13, apps are entirely rendered on client's browser by sending JS (",
                    {
                        tag: 'b',
                        content: ['C'],
                    }, "lient ",
                    {
                        tag: 'b',
                        content: ['S'],
                    }, "ide ",
                    {
                        tag: 'b',
                        content: ['R'],
                    }, "endering/",
                    {
                        tag: 'b',
                        content: ['S'],
                    }, "ingle ",
                    {
                        tag: 'b',
                        content: ['P'],
                    }, "age ",
                    {
                        tag: 'b',
                        content: ['A'],
                    }, "pplication).",
                    {
                        tag: 'br',
                    },
                    "Now with Next 13 AppRouter, both ",
                    {
                        tag: 'a',
                        style: 'tudl titalic',
                        content: ['RSC and RCC'],
                        href: '/',
                    },
                    " are prerendered on server (correct HTML & JSON cached on server), but cached result for RCC \
                    is sent to client for React ",
                    {
                        tag: 'br',
                    },
                    "hydration (attaching event listeners and rebuilding DOM by JS).",
                ],
            },
            {
                tag: 'p',
                content: [
                    'Here are some of the good mental models about ',
                    {
                        tag: 'a',
                        style: 'tudl titalic',
                        content: ['NextJS'],
                        href: 'https://www.youtube.com/watch?v=d2yNsZd5PMs',
                        target: '_blank',
                    },
                    ' and ',
                    {
                        tag: 'a',
                        style: 'tudl titalic',
                        content: ['SSR'],
                        href: 'https://www.youtube.com/watch?v=kUs-fH1k-aM',
                        target: '_blank',
                    },
                    '.'
                ],
            },
        ],
    },
    {
        tag: 'br',
    },
    {
        tag: 'div',
        style: 'f t16',
        content: [
            {
                tag: 'div',
                style: 'basis-1/2 pr45',
                content: [
                    {
                        tag: 'span',
                        content: [
                            {
                                tag: 'h3',
                                style: 'il t17 tb5',
                                content: ['Static Rendering'],
                            },
                            " (Default): HTML generated on server ",
                            {
                                tag: 'strong',
                                content: ['at build time'],
                            },
                            ", which the output ",
                            {
                                tag: 'strong',
                                content: ['is cached'],
                            },
                            " and can be revalidated (able to serve to CDN)",
                        ],
                    },
                    {
                        tag: 'ul',
                        style: 't15 list-disc ps-[16px] pt7',
                        content: [
                            {
                                tag: 'li',
                                content: [
                                    "Route is Statically Rendered only when ",
                                    {
                                        tag: 'a',
                                        style: 'tudl titalic',
                                        content: ['data fetching is cached(static)'],
                                        href: '/',
                                    },
                                    " and there is NO ",
                                    {
                                        tag: 'a',
                                        style: 'tudl titalic',
                                        content: ['Dynamic Functions'],
                                        href: '/',
                                    },
                                ],
                            },
                            {
                                tag: 'li',
                                content: [
                                    "Examples: ",
                                    {
                                        tag: 'a',
                                        style: 'tudl titalic',
                                        content: ['Static Site Generation'],
                                        href: '/AllofNextjs/Rendering/e0fb3efea5a8',
                                    },
                                    ", ",
                                    {
                                        tag: 'a',
                                        style: 'tudl titalic',
                                        content: ['Incremental Static Regeneration'],
                                        href: '/AllofNextjs/Rendering/5bd59ccd5d4f',
                                    },
                                ],
                            },
                        ]
                    },
                ],
            },
            {
                tag: 'div',
                style: 'basis-1/2 pr45',
                content: [
                    {
                        tag: 'span',
                        content: [
                            {
                                tag: 'h3',
                                style: 'il t17 tb5',
                                content: ['Dynamic Rendering'],
                            },
                            ": HTML generated on server ",
                            {
                                tag: 'strong',
                                content: ['at request time'],
                            },
                            ", which the output ",
                            {
                                tag: 'strong',
                                content: ["isn't cached"],
                            },
                        ],
                    },
                    {
                        tag: 'ul',
                        style: 't15 list-disc ps-[16px] pt7',
                        content: [
                            {
                                tag: 'li',
                                content: [
                                    {
                                        tag: 'a',
                                        style: 'tudl titalic',
                                        content: ['Dynamic Functions'],
                                        href: '/',
                                    },
                                    " always force the route to be Dynamically Rendered even with ",
                                    {
                                        tag: 'a',
                                        style: 'tudl titalic',
                                        content: ['cached data fetching'],
                                        href: '/',
                                    },
                                ],
                            },
                            {
                                tag: 'li',
                                content: [
                                    "Examples: ",
                                    {
                                        tag: 'a',
                                        style: 'tudl titalic',
                                        content: ['Server Side Rendering'],
                                        href: '/AllofNextjs/Rendering/b208f31661da',
                                    },
                                ],
                            },
                        ]
                    },
                ],
            },
        ],
    },
] as DOMNode[];