/**
 * Shared state for the fake music player in the sidebar widget.
 *
 * @typedef {"idle" | "playing" | "paused" | "stopped"} PlayerStatus
 */

const PLAYING_TRACK = "retro_anthem.mid";
const IDLE_TRACK = "futuristic.mid";

/** @type {PlayerStatus} */
let status = "idle";

/** @type {Set<(status: PlayerStatus) => void>} */
const listeners = new Set();

/**
 * Subscribe to status changes. The listener runs once immediately with the
 * current status so markup rendered by SSR and the DOM stay identical.
 *
 * @param {(status: PlayerStatus) => void} listener
 * @returns {() => void} unsubscribe
 */
export function onStatusChange(listener) {
    listeners.add(listener);
    listener(status);
    return () => listeners.delete(listener);
}

/** Text shown in the sidebar "Background Music" widget. */
export function widgetTrackLabel(state = status) {
    // Before any button is pressed the player showed a different title than the
    // one the header used to, so keep that quirk.
    if (state === "idle") return "retro_theme.mid";
    const track = state === "playing" ? PLAYING_TRACK : IDLE_TRACK;
    return `${track} (${state})`;
}

/** Short square-wave beep, in case the player ever makes real noise. */
function beep() {
    try {
        const AudioContextCtor =
            window.AudioContext ?? /** @type {any} */ (window).webkitAudioContext;
        if (!AudioContextCtor) return;
        const audioCtx = new AudioContextCtor();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.type = "square";
        osc.frequency.value = 440;
        gainNode.gain.value = 0.05;
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
    } catch {
        /* ignore audio errors */
    }
}

/** @param {PlayerStatus} next */
function setStatus(next) {
    status = next;
    for (const listener of listeners) listener(status);
}

export function play() {
    setStatus("playing");
    beep();
}

export function pause() {
    setStatus("paused");
}

export function stop() {
    setStatus("stopped");
}