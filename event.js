// event.js

document.addEventListener("DOMContentLoaded", function() {
    const eventRows = document.querySelectorAll('#eventsTable tbody tr');

    eventRows.forEach(row => {
        const eventName = row.cells[1].textContent.trim(); // 获取 Event 列文字
        const statusCell = row.querySelector('.event-status');
        const registerBtn = row.querySelector('a.cta-button-small');

        if (!statusCell || !registerBtn) return;

        if (eventName === "Friendly Match") {
            statusCell.textContent = "Registration Full";
            statusCell.style.color = "#FF0000"; // 红色
            registerBtn.style.pointerEvents = "none"; // 禁用按钮
            registerBtn.style.opacity = "0.5";
        } else {
            statusCell.textContent = "Registration Open";
            statusCell.style.color = "#0d47a1"; // 蓝色
            registerBtn.style.pointerEvents = "auto"; // 可点击
            registerBtn.style.opacity = "1";
        }
    });
});
