document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    startButton.addEventListener('click', function() {
        const input = document.getElementById('datetime').value;
        const countDownDate = new Date(input).getTime();

        const interval = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            daysElement.innerText = days.toString().padStart(2, '0');
            hoursElement.innerText = hours.toString().padStart(2, '0');
            minutesElement.innerText = minutes.toString().padStart(2, '0');
            secondsElement.innerText = seconds.toString().padStart(2, '0');

            if (distance < 0) {
                clearInterval(interval);
                document.getElementById('timer').innerHTML = "<h2>Time's up!</h2>";
            }
        }, 1000);
    });
});