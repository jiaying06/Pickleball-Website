//gallery.js

const images = [
    "court(g).jpeg",
    "training.jpeg",
    "tournament.jpeg"
];

let index = 0;
let slideImage;

window.onload = function() {
    slideImage = document.getElementById("slideImage");

    setInterval(() => {
        index = (index + 1) % images.length;
        slideImage.src = images[index];
    }, 3000);
};

function openSlide(i) {
    index = i;
    if (slideImage) slideImage.src = images[index];
}

function nextSlide() {
    if (!slideImage) slideImage = document.getElementById("slideImage");
    index = (index + 1) % images.length;
    slideImage.src = images[index];
}

function prevSlide() {
    if (!slideImage) slideImage = document.getElementById("slideImage");
    index = (index - 1 + images.length) % images.length;
    slideImage.src = images[index];
}
