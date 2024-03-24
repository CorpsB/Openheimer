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
});
