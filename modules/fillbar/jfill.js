document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner les éléments après le chargement du DOM
    const progressBar = document.querySelector('.progress');
    const btn = document.querySelector('.btn');
    const randomChar = document.querySelector('.random-char');
    const btnRect = document.querySelector('.btn-rect');
    const characters = "လူခပ်သိမ်";

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
    });

    function fillProgressBar() {
        let width = parseInt(progressBar.style.width) || 0;
        width += 10;
        if (width <= 100) {
            progressBar.style.width = width + '%';
        }
    }
});