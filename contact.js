// contact.js

const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;

    contactMessage.textContent = `Thank you, ${name || ""}! We will contact you as soon as possible.`;
    contactMessage.style.display = "block";

    contactForm.reset();
});
