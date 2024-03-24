let userSequence = [];
const desiredSequence = ['𐩤', '𐩺', '𐩥', '𐩷', '𐩱', '𐩵'];

function set_result(something) {
    if (something === true) {
        console.log("YOUPI");
        return true;
    } else {
        console.log("Oh nonnnnn ...");
        return false;
    }
}

function setupButtonListeners() {
    document.querySelectorAll('.square').forEach(button => {
        button.addEventListener('click', function() {
            const char = this.getAttribute('data-char');
            if (desiredSequence[userSequence.length] === char) {
                this.style.backgroundColor = 'lightgreen';
                userSequence.push(char);
                if (userSequence.length === desiredSequence.length) {
                    set_result(true);
                }
            } else {
                this.style.backgroundColor = 'red';
                set_result(false);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', setupButtonListeners);
