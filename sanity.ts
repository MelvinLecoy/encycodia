import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-10-21",
    useCdn: true,
};

export const sanityClient = createClient(config);
// export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);


// import sanityClient from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

// export const client = sanityClient