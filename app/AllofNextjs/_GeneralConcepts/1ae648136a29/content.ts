//Client-side Data Fetching
import { DOMNode } from "@/typings";

export default [
    {
        tag: 'h1',
        style: 't32 tb6',
        content: ['Client-side Data Fetching'],
    },
    {
        tag: 'p',
        content: [
            "Traditional client-side data fetching (OG React) is useEffect, but it doesn't handle caching, revalidation, deduping etc. \
            External React libraries made these possible.",
            {tag: 'br'},
            "Most popular one is ",
            {
                tag: 'strong',
                content: ['React Query'],
            },
            ", followed by SWR by Vercel",
        ],
    },
    {
        tag: 'div',
        style: 'f mt10 sbcx12',
        content: [
            {
                tag: 'CODE',
                codeDesc: 'useEffect',
            },
            {
                tag: 'CODE',
                codeDesc: 'useSWR',
            },
        ],
    },
] as DOMNode[];