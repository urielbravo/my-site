/** Formats a post date as "March 25, 2015". */
export function formatDate(date) {
    // z.coerce.date() gives a Date, but stay tolerant of raw strings.
    const value = date instanceof Date ? date : new Date(date);
    return value.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        // Frontmatter dates are date-only (parsed as UTC midnight). Format them
        // in UTC too, otherwise anyone west of Greenwich sees the day before.
        timeZone: "UTC",
    });
}