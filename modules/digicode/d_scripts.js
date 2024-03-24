document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.square-digicode');
    let count = 0;
    const correctButtons = [1, 3, 5, 7];
    let pressedButtons = [];

    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            if (!button.classList.contains('clicked')) { 
                button.style.backgroundColor = 'yellow';
                button.classList.add('clicked');
                count++;
                pressedButtons.push(index);
                
                
                if (count === 4) {
                    if (pressedButtons.every(val => correctButtons.includes(val))) {
                        finish(true);
                    } else {
                        finish(false);
                    }
                }
            }
        });
    });
});

function finish(something) {
    if (something === true) {
        console.log("Succes");
        return true;
    } else {
        console.log("Echec");
        return false;
    }
}