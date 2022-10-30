import createClient from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {

    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-03-25",

    useCdn: process.env.NODE_ENV === "production"
}

export const sanityClient = createClient(config)

// set up a helper function for generating Image URLS with only the asset reference data in your docs
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
 
// Helper function for using the current logged in yser account
// export const useCurrentUser =  createCurrentUserHook(config)