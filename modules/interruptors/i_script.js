document.querySelectorAll('.i-btn')[0].addEventListener('click', function(event) {
    document.dispatchEvent(new CustomEvent('data_interruptors', {detail: "fail"}));
    return false;
});
document.querySelectorAll('.i-btn')[1].addEventListener('click', function(event) {
    document.dispatchEvent(new CustomEvent('data_interruptors', {detail: "ok"}));
    $('#btn2').css("background-color", "limegreen");
    return true;
});
document.querySelectorAll('.i-btn')[2].addEventListener('click', function(event) {
    document.dispatchEvent(new CustomEvent('data_interruptors', {detail: "fail"}));
    return false;
});
document.querySelectorAll('.i-btn')[3].addEventListener('click', function(event) {
    document.dispatchEvent(new CustomEvent('data_interruptors', {detail: "fail"}));
    return false;
});
document.querySelectorAll('.i-btn')[4].addEventListener('click', function(event) {
    document.dispatchEvent(new CustomEvent('data_interruptors', {detail: "fail"}));
    return false;
});
document.querySelectorAll('.i-btn')[5].addEventListener('click', function(event) {
    document.dispatchEvent(new CustomEvent('data_interruptors', {detail: "fail"}));
    return false;
});
