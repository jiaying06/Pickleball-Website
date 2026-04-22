// eventref.js

const registrationForm = document.getElementById("registrationForm");

let regMessage = document.createElement("p");
regMessage.id = "regMessage";
regMessage.style.textAlign = "center";
regMessage.style.marginTop = "15px";
regMessage.style.fontWeight = "bold";
regMessage.style.color = "#0d47a1";

registrationForm.appendChild(regMessage);

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("fullname").value;

    regMessage.textContent = `Thank you for registering${name ? ", " + name : ""}！We will have a very happy day `;
    regMessage.style.display = "block";

    registrationForm.reset();
});
