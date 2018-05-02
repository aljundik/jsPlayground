const timeLeft = document.querySelector('.display__time-left')
const timeEnd = document.querySelector('.display__end-time');
const timeButtons = document.querySelectorAll('[data-time]');
let countdow;
function timer(seconds) {
    clearInterval(countdow);

    const now = Date.now();
    const then = now + seconds * 1000; // 60 seconds 
    displayTime(seconds);
    displayEndTime(then);

    countdow = setInterval(function () {
        let secondsLeft = Math.floor((then - Date.now()) / 1000); // 
        if (secondsLeft < 1) {
            clearInterval(countdow);
            return;
        }
        displayTime(secondsLeft);

    }, 1000);


}


function displayTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const scs = Math.floor(seconds % 60);
    timeLeft.textContent = `${mins}:${scs < 10 ? '0' : ''}${scs}`;
    document.title = `${mins}:${scs < 10 ? '0' : ''}${scs}`;
}

function displayEndTime(timestamp) {
    const time = new Date(timestamp);
    const hours = time.getHours();

    const scs = time.getSeconds();
    const mins = time.getMinutes();


    timeEnd.textContent = `${hours}:${scs < 10 ? '0' : ''}${mins}`;

}

function startTimer() {
    timer(parseInt(this.dataset.time));
}


timeButtons.forEach(function (button) { button.addEventListener('click', startTimer) });