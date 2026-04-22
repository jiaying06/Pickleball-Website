// rules.js

document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll(".content-section");

    sections.forEach(function (section) {
        const heading = section.querySelector("h3");
        const list = section.querySelector(".rules-list");

        if (!heading || !list) return;

        section.classList.remove("collapsed");

        function toggleSection() {
            section.classList.toggle("collapsed");
        }

        heading.addEventListener("click", toggleSection);

        heading.setAttribute("tabindex", "0");
        heading.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleSection();
            }
        });
    });

    const revealSections = document.querySelectorAll(".content-section");

    revealSections.forEach(function (sec) {
        sec.classList.add("reveal");
    });

    function handleScrollReveal() {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        revealSections.forEach(function (sec) {
            const rect = sec.getBoundingClientRect();
            const triggerPoint = windowHeight * 0.85;

            if (rect.top < triggerPoint) {
                sec.classList.add("show");
            }
        });
    }

    handleScrollReveal();
    window.addEventListener("scroll", handleScrollReveal);
});
