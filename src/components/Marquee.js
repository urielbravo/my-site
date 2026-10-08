// Clicking the ticker pretends you have mail.
const marquee = document.querySelector(".marquee-text");

if (marquee) {
    marquee.addEventListener("click", () => {
        alert("📧 You've got mail! (but not really, this is a demo)");
    });
}