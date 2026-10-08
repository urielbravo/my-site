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