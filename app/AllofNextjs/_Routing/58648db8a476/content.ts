//Layout
import { DOMNode } from "@/typings";

export default [
    {
        tag: 'h1',
        style: 't32 tb6',
        content: ['Layout'],
    },
    {
        tag: 'p',
        content: [
            "Layout is the (background)UIs that are shared between pages. On navigation, layouts preserve state(while template doesn't), \
            remain interactive, and don't rerender.",
            {tag: 'br'},
            "All layouts can fetch data, but they don't have access to the current route segment. To access them, ",
            {
                tag: 'a',
                style: 'tudl titalic',
                content: ['useSelectedLayoutSegment'],
                href: '/',
            }, " and ",
            {
                tag: 'a',
                style: 'tudl titalic',
                content: ['useSelectedLayoutSegments'],
                href: '/',
            },
            " can be used in RCC.",
        ],
    },
    {
        tag: 'div',
        style: 'f mt10 sbcx12',
        content: [
            {
                tag: 'CODE',
                codeDesc: 'layout',
            },
            {
                tag: 'div',
                content: [
                    {
                        tag: 'CODE',
                        codeDesc: '_document',
                    },
                    {
                        tag: 'CODE',
                        codeDesc: '_app',
                    },
                ],
            },
            {
                tag: 'div',
                style: 'fie sbcx12',
                content: [
                    {
                        tag: 'CODE',
                        codeDesc: 'indexA',
                    },
                    {
                        tag: 'CODE',
                        codeDesc: 'indexB',
                    },
                ],
            },
        ],
    },
] as DOMNode[];