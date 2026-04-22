// feedback.js

const stars = document.querySelectorAll(".rating span");
const ratingInput = document.getElementById("rating");

stars.forEach(star => {
    star.addEventListener("click", () => {
        ratingInput.value = star.dataset.value;

        stars.forEach(s => s.classList.remove("active"));
        star.classList.add("active");

        updateProgress();
    });
});

const inputs = document.querySelectorAll("input, select, textarea");
const progress = document.getElementById("progress");

inputs.forEach(input => {
    input.addEventListener("input", updateProgress);
});

function updateProgress() {
    let filled = 0;

    inputs.forEach(input => {
        if (input.value.trim() !== "") {
            filled++;
        }
    });

    const percentage = (filled / inputs.length) * 100;
    progress.style.width = percentage + "%";
}

document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const role = document.getElementById("role").value;
    const rating = document.getElementById("rating").value;

    if (name === "" || email === "" || role === "" || rating === "") {
        alert("⚠ Please complete all required fields.");
        return;
    }

    this.style.display = "none";

    document.getElementById("thankYou").style.display = "block";
});