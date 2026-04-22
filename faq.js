// faq.js

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        question.classList.toggle("active");

        const answer = question.nextElementSibling;
        answer.classList.toggle("open");
    });
});
