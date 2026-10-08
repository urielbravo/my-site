import {
    WEEKDAY_INITIALS,
    addMonths,
    buildMonthCells,
    isSameDay,
    monthLabel,
} from "../utils/calendar.js";

// A real calendar: correct day count, correct weekday alignment, the actual
// today, and month navigation. The grid is also rendered at build time;
// re-rendering on load keeps it honest once the build goes stale.
const calendar = document.querySelector("[data-calendar]");

if (calendar) {
    const grid = calendar.querySelector("[data-calendar-grid]");
    const label = calendar.querySelector("[data-calendar-label]");
    const prev = calendar.querySelector("[data-calendar-prev]");
    const next = calendar.querySelector("[data-calendar-next]");

    /** The month currently on screen. */
    let viewDate = new Date();
    let selectedDay = null;

    function render() {
        const today = new Date();

        label.textContent = monthLabel(viewDate);
        grid.replaceChildren();

        for (const initial of WEEKDAY_INITIALS) {
            const name = document.createElement("span");
            name.className = "day-name";
            name.textContent = initial;
            grid.append(name);
        }

        for (const cell of buildMonthCells(viewDate)) {
            if (cell === null) {
                // Keeps the dates lined up without drawing an empty box.
                const blank = document.createElement("span");
                blank.className = "is-blank";
                blank.setAttribute("aria-hidden", "true");
                grid.append(blank);
                continue;
            }

            const day = document.createElement("span");
            day.className = "day";
            day.dataset.day = String(cell);
            day.textContent = String(cell);

            if (
                isSameDay(
                    new Date(viewDate.getFullYear(), viewDate.getMonth(), cell),
                    today,
                )
            ) {
                day.classList.add("is-today");
            }
            if (cell === selectedDay) day.classList.add("is-selected");

            grid.append(day);
        }
    }

    grid.addEventListener("click", (event) => {
        const day = event.target.closest(".day");
        if (!day) return;

        selectedDay = Number(day.dataset.day);
        console.log(`📅 Date selected: ${selectedDay}`);
        render();
    });

    function step(count) {
        viewDate = addMonths(viewDate, count);
        selectedDay = null;
        render();
    }

    prev.addEventListener("click", () => step(-1));
    next.addEventListener("click", () => step(1));

    // Clicking the month name takes you back to the current month.
    label.addEventListener("click", () => {
        viewDate = new Date();
        selectedDay = null;
        render();
    });

    render();
}