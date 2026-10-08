/** Posts shown per page on the blog index. */
export const POSTS_PER_PAGE = 10;

/** Splits a list into pages of at most `perPage` items. */
export function splitIntoPages(items, perPage = POSTS_PER_PAGE) {
    const pages = [];

    for (let index = 0; index < items.length; index += perPage) {
        pages.push(items.slice(index, index + perPage));
    }

    return pages;
}

/**
 * URL for a given page. Page 1 of a listing lives at its base path; later
 * pages nest under it, e.g. "/page/2/" or "/category/games/page/2/".
 */
export function pageHref(pageNumber, basePath = "/") {
    if (pageNumber <= 1) return basePath;

    const base = basePath.endsWith("/") ? basePath : `${basePath}/`;
    return `${base}page/${pageNumber}/`;
}

/** 1, 2, … lastPage, for rendering the pagination control. */
export function pageNumbers(lastPage) {
    return Array.from({ length: lastPage }, (_, index) => index + 1);
}