import { getCollection } from "astro:content";

/** URL-friendly form of a category name: "Video Games" -> "video-games". */
export function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/** URL for a post entry. */
export function postHref(post) {
    return `/blog/${post.id}/`;
}

/** URL for a category listing. */
export function categoryHref(category) {
    return `/category/${slugify(category)}/`;
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

/** Every category in use, alphabetical. */
export function toCategories(posts) {
    const names = new Set(posts.map((post) => post.data.category));

    return [...names]
        .sort((a, b) => a.localeCompare(b))
        .map((name) => ({ name, href: categoryHref(name) }));
}

/** Posts filed under one category. */
export function postsInCategory(posts, category) {
    return posts.filter((post) => post.data.category === category);
}