import { DOMNode } from "@/typings";

export default [
    {
        tag: 'span',
        content: [
            {
                tag: 'h1',
                style: 't32 tb6 il',
                content: ['Routing'],
            },
            {
                tag: 'p',
                style: 't17 tb5 il ml15 tudl',
                content: ['domain.com/segment1/segment2/[param]?searchParam1=val1&sP2=val2'],
            },
        ],
    },
    {
        tag: 'p',
        content: [
            "Segment wouldn't be publicly accessible if ",
            {
                tag: 'i',
                content: ['page.tsx'],
            },
            " is absent from a folder. (",
            {
                tag: 'strong',
                content: ['layout'],
            }, ", ",
            {
                tag: 'strong',
                content: ['page'],
            }, ", ",
            {
                tag: 'strong',
                content: ['route'],
            }, ", ",
            {
                tag: 'strong',
                content: ['loading'],
            }, ", ",
            {
                tag: 'strong',
                content: ['not-found'],
            }, ", ",
            {
                tag: 'strong',
                content: ['error'],
            }, ", ",
            {
                tag: 'strong',
                content: ['global-error'],
            }, ", ",
            {
                tag: 'strong',
                content: ['template'],
            }, ", ",
            {
                tag: 'strong',
                content: ['default'],
            }, ")",
            {tag: 'br'},
            "Private folders are named by prefixing with an underscore or %5F. They are not publicly accessible even with page.tsx present.",
            {tag: 'br'},
            "Route groups are named with parenthesis. The folder will get omitted in URL path and allow multiple layout.tsx on the same route segment level.",
            {tag: 'br'},
            "Those AppRouter reserved files follows the component hierarchy below:",
        ],
    },
    {
        tag: 'div',
        style: 'f sbcx12',
        content: [
            {
                tag: 'CODE',
                codeDesc: 'normalCH',
            },
            {
                tag: 'CODE',
                codeDesc: 'nestedCH',
            },
        ],
    },
    {
        tag: 'table',
        style: 'mt20 table-fixed',
        content: [
            {
                tag: 'caption',
                style: 'caption-bottom t12 tb6',
                content: ['AppRouter vs PagesRouter'],
            },
            {
                tag: 'thead',
                content: [
                    {
                        tag: 'tr',
                        content: [
                            {
                                tag: 'th',
                                style: 'b1 border-black px10 py4',
                                content: ['Routes or Misc.'],
                            },
                            {
                                tag: 'th',
                                style: 'b1 border-black px40',
                                content: ['AppRouter'],
                            },
                            {
                                tag: 'th',
                                style: 'b1 border-black px40',
                                content: ['PagesRouter'],
                            },
                        ],
                    },
                ],
            },
            {
                tag: 'tbody',
                content: [
                    {
                        tag: 'tr',
                        content: [
                            {
                                tag: 'td',
                                style: 'b1 border-black px10 py2',
                                content: ['/'],
                            },
                            {
                                tag: 'td',
                                style: 'b1 border-black px15',
                                content: ['app/page.tsx'],
                            },
                            {
                                tag: 'td',
                                style: 'b1 border-black px15',
                                content: ['pages/index.tsx'],
                            },
                        ],
                    },
                    {
                        tag: 'tr',
                        content: [
                            {
                                tag: 'td',
                                style: 'b1 border-black px10',
                                content: ['/cat'],
                            },
                            {
                                tag: 'td',
                                style: 'b1 border-black px15',
                                content: [
                                    {
                                        tag: 'p',
                                        style: 'il',
                                        content: ['app/cat/page.tsx'],
                                    },
                                    {
                                        tag: 'i',
                                        style: 'il ml11',
                                        content: [' OR'],
                                    },
                                    {tag: 'br'},
                                    'app/cat/route.ts',
                                ],
                            },
                            {
                                tag: 'td',
                                style: 'b1 border-black px15',
                                content: [
                                    'pages/cat.tsx',
                                    {tag: 'br'},
                                    'pages/cat/index.tsx',
                                ],
                            },
                        ],
                    },
                    {
                        tag: 'tr',
                        content: [
                            {
                                tag: 'td',
                                style: 'b1 border-black px10 py2',
                                content: ['/post/[id]'],
                            },
                            {
                                tag: 'td',
                                style: 'b1 border-black px15',
                                content: ['app/post/[id]/page.tsx'],
                            },
                            {
                                tag: 'td',
                                style: 'b1 border-black px15',
                                content: ['pages/post/[id].tsx'],
                            },
                        ],
                    },
                    {
                        tag: 'tr',
                        content: [
                            {
                                tag: 'td',
                                style: 'b1 border-black px10 p2',
                                content: ['/api/blog'],
                            },
                            {
                                tag: 'td',
                                style: 'b1 border-black px15',
                                content: ['app/api/blog/route.ts'],
                            },
                            {
                                tag: 'td',
                                style: 'b1 border-black px15',
                                content: ['pages/api/blog.ts'],
                            },
                        ],
                    },
                    {
                        tag: 'tr',
                        content: [
                            {
                                tag: 'td',
                                style: 'b1 border-black px10',
                                content: ['Root Layout'],
                            },
                            {
                                tag: 'td',
                                style: 'b1 border-black px15',
                                content: ['app/layout.tsx'],
                            },
                            {
                                tag: 'td',
                                style: 'b1 border-black px15',
                                content: [
                                    'pages/_app.tsx +',
                                    {tag: 'br'},
                                    'pages/_document.tsx'
                                ],
                            },
                        ],
                    },
                    {
                        tag: 'tr',
                        content: [
                            {
                                tag: 'td',
                                style: 'b1 border-black px10 py2',
                                content: ['useRouter()'],
                            },
                            {
                                tag: 'td',
                                style: 'b1 border-black px15',
                                content: ['next/navigation'],
                            },
                            {
                                tag: 'td',
                                style: 'b1 border-black px15',
                                content: ['next/router'],
                            },
                        ],
                    },
                ],
            },
        ],
    },
] as DOMNode[];