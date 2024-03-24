document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner les éléments après le chargement du DOM
    const progressBar = document.querySelector('.progress');
    const btn = document.querySelector('.t-btn');
    const randomChar = document.querySelector('.random-char');
    const btnRect = document.querySelector('.t-btn-rect');
    const characters = "လူခပ်သိမ်ဂဈဏနထ";

    function getRandomCharacter() {
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }
    randomChar.textContent = getRandomCharacter();

    btn.addEventListener('click', function() {
        fillProgressBar();
    });
    btnRect.addEventListener('click', function() {
        const progress = parseInt(progressBar.style.width) || 0;
        const charIndex = characters.indexOf(randomChar.textContent);
        const expectedProgress = (charIndex + 1) * 10;
        const isCorrect = progress === expectedProgress;
        console.log(isCorrect);
        if (isCorrect)
            document.dispatchEvent(new CustomEvent('data_fillbar', {detail: "ok"}));
        else
            document.dispatchEvent(new CustomEvent('data_fillbar', {detail: "fail"}));
    });

    function fillProgressBar() {
        let width = parseInt(progressBar.style.width) || 0;
        width += 10;
        if (width <= 100) {
            progressBar.style.width = width + '%';
        }
    }
});
