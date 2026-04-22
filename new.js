// news.js 

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".news-slide");
    const dots = document.querySelectorAll(".slider-dot");
    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");

    let currentIndex = 0;

    function showSlide(index) {
        if (!slides.length) return;

        currentIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === currentIndex);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
            showSlide(currentIndex - 1);
        });

        nextBtn.addEventListener("click", () => {
            showSlide(currentIndex + 1);
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            showSlide(i);
        });
    });

    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 8000);

    showSlide(0);

    const revealSections = document.querySelectorAll(".news-section");

    revealSections.forEach(sec => sec.classList.add("reveal"));

    function handleScrollReveal() {
        const winH = window.innerHeight || document.documentElement.clientHeight;

        revealSections.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            const triggerPoint = winH * 0.85;
            if (rect.top < triggerPoint) {
                sec.classList.add("show");
            }
        });
    }

    handleScrollReveal();
    window.addEventListener("scroll", handleScrollReveal);

    const figures = document.querySelectorAll(".photo-grid figure");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const lightboxClose = document.getElementById("lightboxClose");

    function openLightbox(src, altText, captionText) {
        if (!lightbox || !lightboxImg || !lightboxCaption) return;

        lightboxImg.src = src;
        lightboxImg.alt = altText || "";
        lightboxCaption.textContent = captionText || "";
        lightbox.classList.add("show");
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove("show");
    }

    figures.forEach(fig => {
        const img = fig.querySelector("img");
        const cap = fig.querySelector("figcaption");

        if (!img) return;

        fig.addEventListener("click", () => {
            const src = img.getAttribute("src");
            const alt = img.getAttribute("alt") || "";
            const captionText = cap ? cap.textContent : "";
            openLightbox(src, alt, captionText);
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeLightbox();
        }
    });

});