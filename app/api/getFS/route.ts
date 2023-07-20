import { NextResponse } from 'next/server';
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import { FS } from "@/typings";

// export const dynamic = 'force-dynamic';

export async function GET() {
    const query = groq`
        *[_type == "fundamentalSyntax"]
    `
    const fs: FS[] = await sanityClient.fetch(query);
    return NextResponse.json(fs);
}


// type Data = {
//     exm: FS[]
// }
// import { NextApiRequest, NextApiResponse } from "next";
// export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//     const exm = await sanityClient.fetch(query);
//     res.status(200).json({exm});
// }