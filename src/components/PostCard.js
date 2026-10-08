// Every card's "Read More" link is a demo link.
const readMoreLinks = document.querySelectorAll(".read-more");

readMoreLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        alert(
            "🚧 This is a demo. Imagine you are being transported to a 90s blog post...",
        );
    });
});