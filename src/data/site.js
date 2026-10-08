/**
 * Content for the retro tribute page.
 *
 * @typedef {object} Post
 * @property {string} slug
 * @property {string} title
 * @property {string} date
 * @property {string[]} paragraphs
 * @property {boolean} [featured] Renders with the "double border" highlight.
 * @property {string} [lead] Optional bolded lead-in prepended to the first paragraph.
 */

/** @type {Post[]} */
export const posts = [
    {
        slug: "theme-from-the-past",
        title: "A Theme From The Past",
        date: "March 25, 2015",
        featured: true,
        paragraphs: [
            "Ever wished your fancy new WordPress blog looked like an old Geocities site from the Nineties? Probably not!",
            "Nevertheless, that’s what you get with the Retro Theme from Organic Themes. The theme features the latest in web technology — background music, animated gifs, blinding colors, etc. In fact, we’re pretty sure if you traveled back in time using a Delorean with a Flux Capacitor and brought this website to the people of the past, you would no doubt be the new Mayor of Hill Valley.",
            "Despite the putrid appearance, the code for the Retro Theme is actually quite solid. It’s a fully functional WordPress blog, and it’s FREE. Maybe you can use it as a practical joke.",
        ],
    },
    {
        slug: "best-games-you-never-played",
        title: "The Best Games You Never Played",
        date: "March 25, 2015",
        paragraphs: [
            "This is an example of a WordPress post. You can add content, images, video and more to WordPress posts and pages. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec feugiat libero.",
        ],
    },
    {
        slug: "netscape-releases-navigator",
        title: "Netscape Releases Navigator!",
        date: "March 25, 2015",
        lead: "Oh my God! This is the future!",
        paragraphs: [
            "This is an example of a WordPress post. You can add content, images, video and more to WordPress posts and pages. Inmensae subtilitatis, obscuris et malesuada fames.",
        ],
    },
    {
        slug: "king-of-pop-is-back",
        title: "The King Of Pop Is Back With Another Hit!",
        date: "March 25, 2015",
        paragraphs: [
            "This is an example of a WordPress post. You can add content, images, video and more to WordPress posts and pages. Praesent ultricies arcu scelerisque lacus bibendum sit amet lacinia sapien iaculis.",
        ],
    },
    {
        slug: "scientific-calculator-games",
        title: "Scientific Calculator Games!",
        date: "March 25, 2015",
        paragraphs: [
            "This is an example of a WordPress post. You can add content, images, video and more. Sed nec feugiat libero. Aenean ligula justo, mollis in accumsan eu, dapibus sed nunc.",
        ],
    },
    {
        slug: "marc-summers-retires",
        title: "Marc Summers Retires Off Double Dare Millions",
        date: "March 25, 2015",
        paragraphs: [
            "Praesent ultricies arcu scelerisque lacus bibendum sit amet lacinia sapien iaculis. Duis viverra orci vitae lacus faucibus pretium. Suspendisse potenti.",
        ],
    },
];

/**
 * Sidebar list of recent posts, newest first. `title` overrides the post title
 * when the list needs a shorter label.
 *
 * @type {Array<{ slug: string, title?: string }>}
 */
const recentPostRefs = [
    { slug: "theme-from-the-past" },
    { slug: "best-games-you-never-played" },
    { slug: "netscape-releases-navigator" },
    { slug: "king-of-pop-is-back", title: "The King Of Pop Is Back" },
];

/** @type {Array<{ title: string, href: string }>} */
export const recentPosts = recentPostRefs.map(({ slug, title }) => {
    const post = posts.find((entry) => entry.slug === slug);
    return { title: title ?? post?.title ?? slug, href: `#${slug}` };
});

/** @type {Array<{ title: string, href: string }>} */
export const blogroll = [
    { title: "Organic Themes", href: "#" },
    { title: "WordPress.org", href: "#" },
    { title: "Geocities Archive", href: "#" },
];

export const navLinks = [
    { label: "★ ABOUT", href: "#about" },
    { label: "★ PROJECTS", href: "#projects" },
    { label: "★ LINKS", href: "#links" },
];

export const site = {
    title: "Retro Theme · a modern grid tribute",
    tagline: "a theme from the past",
    marquee:
        "★ WELCOME TO THE RETRO THEME ★ BEST VIEWED IN NETSCAPE NAVIGATOR ★ 800x600 ★ SIGN MY GUESTBOOK! ★",
};