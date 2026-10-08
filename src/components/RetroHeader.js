// Spin the star faster while the pointer is over it.
const star = document.querySelector(".star-gif");

if (star) {
    star.addEventListener("mouseenter", () => {
        star.style.animationDuration = "0.6s";
    });
    star.addEventListener("mouseleave", () => {
        star.style.animationDuration = "2s";
    });
}