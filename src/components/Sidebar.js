import {
    onStatusChange,
    pause,
    play,
    stop,
    widgetTrackLabel,
} from "../scripts/player.js";

// The widget's transport buttons share state with the header music player.
const musicWidget = document.querySelector(".widget-music-text")?.closest(
    ".widget",
);

if (musicWidget) {
    const label = musicWidget.querySelector("[data-track-label]");

    onStatusChange((status) => {
        if (label) label.textContent = widgetTrackLabel(status);
    });

    musicWidget
        .querySelector('[data-action="play"]')
        ?.addEventListener("click", play);
    musicWidget
        .querySelector('[data-action="pause"]')
        ?.addEventListener("click", pause);
    musicWidget
        .querySelector('[data-action="stop"]')
        ?.addEventListener("click", stop);
}

// Clicking a day moves the "today" highlight there.
const days = document.querySelectorAll(
    ".calendar-grid span:not(.day-name)",
);

days.forEach((day) => {
    if (day.textContent.trim() === "") return;

    day.addEventListener("click", function () {
        days.forEach((other) => other.classList.remove("today"));
        this.classList.add("today");
        this.style.backgroundColor = "#ffff00";
        setTimeout(() => {
            if (!this.classList.contains("today")) this.style.backgroundColor = "";
        }, 300);
        console.log("📅 Date selected: " + this.textContent);
    });
});

// Placeholder sidebar links (href="#") are demo links; real ones navigate.
const placeholderLinks = document.querySelectorAll('.widget a[href="#"]');

placeholderLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        alert(
            "🔗 In the real retro theme, this would go somewhere... maybe a GeoCities page?",
        );
    });
});