// Small screens collapse the nav behind a hamburger button.
const nav = document.querySelector("[data-nav]");
const toggle = nav?.querySelector("[data-nav-toggle]");

if (nav && toggle) {
    toggle.addEventListener("click", () => {
        const isOpen = nav.toggleAttribute("data-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });
}