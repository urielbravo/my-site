import { getCollection } from "astro:content";

/** URL for a post entry. */
export function postHref(post) {
    return `/blog/${post.id}/`;
}

/** Published posts, in editorial order. */
export async function getSortedPosts() {
    const posts = await getCollection("blog", ({ data }) => !data.draft);
    return posts.sort((a, b) => a.data.order - b.data.order);
}

/** The sidebar list, newest first. */
export function toRecentPosts(posts, count = 4) {
    return posts.slice(0, count).map((post) => ({
        title: post.data.shortTitle ?? post.data.title,
        href: postHref(post),
    }));
}