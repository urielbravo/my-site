/** Static site copy. Posts live in src/content/blog as markdown. */

/** @type {Array<{ label: string, href: string }>} */
export const navLinks = [
    { label: "🏠 HOME", href: "/" },
    { label: "★ ABOUT", href: "/about/" },
    { label: "★ LINKS", href: "/links/" },
];

/**
 * Curated outside links for the /links/ page.
 *
 * @type {Array<{ title: string, href: string, description: string }>}
 */
export const resourceLinks = [
    {
        title: "gifcities.org",
        href: "https://gifcities.org/",
        description: "A bunch of GIFs",
    },
    {
        title: "compressor.io",
        href: "https://compressor.io/",
        description: "Compress your images",
    },
    {
        title: "cameronsworld.net",
        href: "https://www.cameronsworld.net/",
        description: "A pretty cool site with lots of resources",
    },
    {
        title: "photopea.com",
        href: "https://www.photopea.com/",
        description:
            "An online Photoshop — pretty basic, but it does simple jobs very well",
    },
    {
        title: "neocities.org/browse",
        href: "https://neocities.org/browse",
        description: "A bunch of GeoCities-style sites",
    },
    {
        title: "happyhues.co",
        href: "https://www.happyhues.co/",
        description:
            "A place where you can pick a palette of colours for your site",
    },
];

export const site = {
    name: "uriel's blog",
    title: "Retro Theme · a modern grid tribute",
    bio: "Hey, I'm Uriel — the webmaster behind this site. These days I work as an automation engineer at a software company.",
    profileAlt: "Portrait of Uriel",
    marquee:
        "★ WELCOME TO THE RETRO THEME ★ BEST VIEWED IN NETSCAPE NAVIGATOR ★ 800x600 ★ SIGN MY GUESTBOOK! ★",
};