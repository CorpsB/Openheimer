document.addEventListener("DOMContentLoaded", function() {
    var but = document.querySelectorAll('.module-5-button')
    but.forEach(function(button) {
        button.addEventListener("click", function() {
            if (button.classList.contains('module-5-active'))
                button.classList.remove('module-5-active');
            else
                button.classList.add('module-5-active');
        });
    });
    // var score = 0;
    // document.getElementById('module-5-btn1').addEventListener("click", function() {
    //     score = score + 1;
    // });
    // document.getElementById('module-5-btn2').addEventListener("click", function() {
    //     score = score + 10;
    // });
    // document.getElementById('module-5-btn3').addEventListener("click", function() {
    //     score = score + 100;
    // });
    // document.getElementById('module-5-btn4').addEventListener("click", function() {
    //     score = score + 1000;
    // });
    // document.getElementById('module-5-btn5').addEventListener("click", function() {
    //     score = score + 10000;
    // });
    // if (score === 10100)
    //     document.dispatchEvent(new CustomEvent('data_fusebox', {detail: "ok"}));
    // else
    //     document.dispatchEvent(new CustomEvent('data_fusebox', {detail: "fail"}));
});
