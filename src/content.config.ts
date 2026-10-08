import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    // Defining the schema as a function is what gets `image` injected by Astro,
    // which resolves image paths relative to each markdown file.
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            /** Shown on the card and as the excerpt; the post page renders the body. */
            description: z.string(),
            date: z.coerce.date(),
            /** Listing order — the demo posts all share one date, so sort by hand. */
            order: z.number(),
            /** Single category; drives the sidebar list and /category/<slug>/. */
            category: z.string(),
            /** Cover art, centred under the title on the post page. */
            image: image(),
            /** Required for accessibility; describe what is in the picture. */
            imageAlt: z.string(),
            /** Gold double border on the card. */
            featured: z.boolean().default(false),
            /** Shorter label used in the "Recent Posts" sidebar list. */
            shortTitle: z.string().optional(),
            /** Hidden from listings and gets no page of its own. */
            draft: z.boolean().default(false),
        }),
});

export const collections = { blog };