import { sanityClient } from "@/sanity";
import { CodeRows, DSs, Titles3 } from "@/typings";
import { groq } from "next-sanity";
import { cache } from 'react'

export const validifyURLparams: (str: string) => string = str => str.replace(/[\\/\s]/g, '');

// SanityFetch
export default cache(async (filter: string) => {
    const query = groq`*[${filter}]`
    const data = await sanityClient.fetch(query);
    return data;
})

async function SanityFetchAPI(endpoint: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`);
    const data = await res.json();
    return data;
};

export const reshapeResponse = (response: DSs[]) => (
    response[0].titleBlock3?.reduce((agg:CodeRows, { category, codes }) => {
        codes?.forEach(({ code: {code}, language: [lang] }) => {
            agg[category] ||= {};
            agg[category][lang] ||= [];
            agg[category][lang].push(code);
        });
        return agg;
    }, {})
);
// For /DataStructures and /Syntax
export const reshapeRows = (rows: Titles3[], selectedLangs: string[]) => (
    rows.reduce((agg:CodeRows, { category, codes }) => {
        selectedLangs.forEach(sLang => {
            agg[category] ||= {};
            agg[category][sLang] = codes?.filter(({ language: [lang] }) => lang === sLang)?.map(({ code: {code} }) => code);
            // codes?.filter(({ language: [lang] }) => lang === sLang)?.forEach(({ code: {code} }) => agg[category][sLang].push(code));
        });
        return agg;
    }, {})
);