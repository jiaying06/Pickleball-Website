// enquiry.js

const enquiryForm = document.getElementById("enquiryForm");
const successBox = document.getElementById("successBox");
const phoneRow = document.getElementById("phoneRow");

document.querySelectorAll("input[name='contact']").forEach(radio => {
    radio.addEventListener("change", () => {
        phoneRow.classList.toggle("hidden", radio.value !== "phone");
    });
});

enquiryForm.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;

    enquiryForm.querySelectorAll(".error-message").forEach(el=>{
        el.textContent = "";
    });


    function check(id,msg){
        let input = document.getElementById(id);
        if(input.value.trim()===""){
            input.nextElementSibling.textContent = msg;
            valid = false;
        }
    }

    check("fullName","Required");
    check("studentId","Required");
    check("email","Required");
    check("enquiryType","Required");
    check("message","Required");

    let selected = document.querySelector("input[name='contact']:checked");
    if(!selected){
        valid=false;
    }
    else if(selected.value==="phone" && document.getElementById("phone").value===""){
        document.getElementById("phone").nextElementSibling.textContent = "Phone number required";
        valid=false;
    }


    if(!valid) return;

    enquiryForm.reset();
    phoneRow.classList.add("hidden");

    successBox.style.display="block";

});
