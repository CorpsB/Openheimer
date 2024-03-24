function Timer(duration, clock) {
    let timer = duration;
    let minutes;
    let seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        if (seconds < 10)
            seconds = "0" + seconds;
        if (minutes < 10)
            minutes = "0" + minutes;

        clock.textContent = minutes + ":" + seconds;

        if (--timer <= 0) {
            timer = duration; // TODO remplacer par la fin du jeu
        }
    }, 1000);
}

window.addEventListener("load", (event) => {
    Timer(120, document.querySelector('#clock'));
});
