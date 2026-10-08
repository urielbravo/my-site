/**
 * Calendar helpers, shared by the server render and the browser enhancement so
 * both produce identical markup.
 */

/** Weekday initials, Sunday first. */
export const WEEKDAY_INITIALS = ["S", "M", "T", "W", "T", "F", "S"];

/**
 * Cells for the month `date` falls in, in display order: `null` for each
 * blank slot before the 1st, then the day numbers.
 *
 * The leading blanks come from the weekday the month actually starts on, which
 * is what lines the dates up under the right initials.
 */
export function buildMonthCells(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    // getDay() returns 0 for Sunday, matching WEEKDAY_INITIALS.
    const leadingBlanks = new Date(year, month, 1).getDay();

    const cells = Array.from({ length: leadingBlanks }, () => null);
    for (let day = 1; day <= daysInMonth; day++) cells.push(day);

    return cells;
}

/** "October 2026" */
export function monthLabel(date) {
    return date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });
}

export function isSameMonth(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

export function isSameDay(a, b) {
    return isSameMonth(a, b) && a.getDate() === b.getDate();
}

/** Whole months away from `date`, normalised to the 1st to avoid rollover. */
export function addMonths(date, count) {
    return new Date(date.getFullYear(), date.getMonth() + count, 1);
}