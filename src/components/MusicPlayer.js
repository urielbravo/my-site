import {
    mainTrackLabel,
    onStatusChange,
    pause,
    play,
    stop,
} from "../scripts/player.js";

const root = document.querySelector(".music-player");

if (root) {
    const label = root.querySelector("[data-track-label]");
    const blink = root.querySelector(".blink");

    onStatusChange((status) => {
        if (label) label.textContent = mainTrackLabel(status);
        if (blink)
            blink.style.color = status === "playing" ? "#ffff00" : "#00ffff";
    });

    root
        .querySelector('[data-action="play"]')
        ?.addEventListener("click", play);
    root
        .querySelector('[data-action="pause"]')
        ?.addEventListener("click", pause);
    root.querySelector('[data-action="stop"]')?.addEventListener("click", stop);
}