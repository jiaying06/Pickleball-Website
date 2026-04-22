// schedules.js

document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll("#main-schedule tbody tr");
    const today = new Date().toLocaleString('en-us', { weekday: 'long' });

    rows.forEach(row => {
        const rowDay = row.children[0].innerText.trim();
        if (rowDay === today) {
            row.classList.add("today");
        }
    });
});

