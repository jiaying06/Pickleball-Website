const images = [
    "court(g).jpeg",
    "training.jpeg",
    "tournament.jpeg"
];

let index = 0;
let slideImage;

// 使用 DOMContentLoaded 确保 HTML 元素加载完毕后再运行脚本
document.addEventListener("DOMContentLoaded", function() {
    slideImage = document.getElementById("slideImage");

    // 检查元素是否存在，防止报错
    if (slideImage) {
        setInterval(() => {
            index = (index + 1) % images.length;
            slideImage.src = images[index];
        }, 3000);
    }
});

function openSlide(i) {
    index = i;
    if (slideImage) {
        slideImage.src = images[index];
    }
}

function nextSlide() {
    index = (index + 1) % images.length;
    if (slideImage) slideImage.src = images[index];
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    if (slideImage) slideImage.src = images[index];
}
