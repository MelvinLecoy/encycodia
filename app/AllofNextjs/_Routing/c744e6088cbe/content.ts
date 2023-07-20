//Dynamic Routing
import { DOMNode } from "@/typings";

export default [
    {
        tag: 'h1',
        style: 't32 tb6',
        content: ['Dynamic Routing'],
    },
    {
        tag: 'p',
        content: [
            "Dynamic segments are passed as prop ",
            {
                tag: 'i',
                content: ['params'],
            },
            " to ",
            {
                tag: 'strong',
                content: ['layout'],
            },', ',
            {
                tag: 'strong',
                content: ['page'],
            },', ',
            {
                tag: 'strong',
                content: ['route'],
            },', and ',
            {
                tag: 'strong',
                content: ['generateMetadata()'],
            }, '.',
        ],
    },
    {
        tag: 'div',
        style: 'f mt10 sbcx12',
        content: [
            {
                tag: 'CODE',
                codeDesc: '1DynSeg',
            },
            {
                tag: 'CODE',
                codeDesc: 'MulDynSeg',
            },
            {
                tag: 'CODE',
                codeDesc: 'CatchallSeg',
            },
        ],
    },
] as DOMNode[];