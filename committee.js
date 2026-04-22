//committee.js

function showInfo(role) {
    const title = document.getElementById("roleTitle");
    const desc = document.getElementById("roleDesc");
    const infoBox = document.getElementById("roleInfo");

    let responsibilities = [];

    if (role === "President") {
        responsibilities = [
            "Lead the club",
            "Chair meetings",
            "Represent the club officially"
        ];
    } else if (role === "Vice President") {
        responsibilities = [
            "Assist the President",
            "Take over when President is absent",
            "Coordinate activities"
        ];
    } else if (role === "Secretary") {
        responsibilities = [
            "Record meeting minutes",
            "Manage documents",
            "Handle communication"
        ];
    } else if (role === "Treasurer") {
        responsibilities = [
            "Manage club finances",
            "Record income and expenses",
            "Prepare financial reports"
        ];
    }

    title.textContent = role;
    desc.innerHTML = responsibilities.map(item => `<li>${item}</li>`).join("");
    infoBox.style.display = "block";
}

function closeRoleInfo() {
    document.getElementById("roleInfo").style.display = "none";
}
