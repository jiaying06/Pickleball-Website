// index.js

function updateClubStatus() {
    const now = new Date();
    const day = now.getDay(); 
    const hour = now.getHours();
    const minute = now.getMinutes();

    let openHour = (day === 0 || day === 6) ? 8 : 9;
    let closeHour = (day === 0 || day === 6) ? 23 : 22;

    let statusElement = document.getElementById('live-status');
    let timerElement = document.getElementById('timer-msg');

    if (hour >= openHour && hour < closeHour) {
        statusElement.innerHTML = `<span class="dot dot-open"></span>Club is OPEN`;
        
        let hLeft = (closeHour - 1) - hour;
        let mLeft = 60 - minute;
        timerElement.innerText = `Registration closes in ${hLeft}h ${mLeft}m`;
    } else {
        statusElement.innerHTML = `<span class="dot dot-closed"></span>Club is CLOSED`;
        timerElement.innerText = `We open again at ${openHour}:00 AM`;
    }
}

updateClubStatus();
setInterval(updateClubStatus, 60000);