---
title: "Hello World! Your New Blog Is Live"
description: "A dummy post wired up with Astro content collections, so clicking Read More lands you on a real post page."
date: 2015-03-24
order: 7
---

Welcome aboard! This is a **dummy post** wired up with Astro's content collections. If you clicked *Read More* on the last card back on the index, you're looking at a real page generated from the markdown file `src/content/blog/hello-world.md`.

## What this page proves

The whole loop now works end to end:

- Posts live in `src/content/blog/*.md`, not in a JavaScript array.
- Frontmatter is validated by the schema in `src/content.config.ts`.
- One route — `/blog/[slug]/` — builds a page for every post, no manual wiring.
- The header, navigation, marquee, sidebar and footer are shared with the index.

## Writing a post

Add a file to `src/content/blog/` with a few bits of frontmatter:

```yaml
---
title: "Your Title Here"
description: "One line shown on the card and in previews."
date: 2015-03-24
order: 8
---
```

Then write as much markdown as you like below the frontmatter. Headers, **bold**, *italics*, lists and code all come for free:

1. Frontmatter at the top
2. Body below it
3. Nothing else to configure

> A note for future me: the demo posts all share the same date, which is why
> `order` exists as a separate field.

### Things that work

- Ordered and unordered lists
- Block quotes and inline `code`
- Fenced code blocks
- Horizontal rules

---

Delete this file whenever you're ready to write something real.