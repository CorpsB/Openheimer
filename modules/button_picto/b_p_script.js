let userSequence = [];
const desiredSequence = ['▥', '╘', '⌲', '⌸', '⌱', '▧'];

function set_result(something) {
    if (something === true) {
        document.dispatchEvent(new CustomEvent('data_button_picto', {detail: "ok"}));
        return true
    } else {
        document.dispatchEvent(new CustomEvent('data_button_picto', {detail: "fail"}));
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
