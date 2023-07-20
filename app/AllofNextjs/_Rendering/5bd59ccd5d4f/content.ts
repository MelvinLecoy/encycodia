//ISR
import { DOMNode } from "@/typings";

export default [
    {
        tag: 'h1',
        style: 't32 tb6',
        content: ['Incremental Static Regeneration'],
    },
    {
        tag: 'p',
        content: [
            "ISR allows building static sites on a per-page basis that updates content without having to rebuild or redeploy the entire site.",
            {tag: 'br'},
            "When a prerendered page(at build time) is requested, a cached page is shown. The cached version is displayed instantaneously \
            anytime during the revalidation window even requests come in. After the window, the first request will still get dealt with the \
            cached/stale page, but it triggers the revalidation. Next will invalidate the cache and show the updated version upon successful \
            page generation on the second request. If background regeneration fails, the old page is unaltered.",
            {tag: 'br'},
            'Notice not every runtime or cloud platform supports ISR (natively).'
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
                tag: 'CODE',
                codeDesc: '1pages',
            },
        ],
    },
] as DOMNode[];