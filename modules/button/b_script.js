$(document).ready(function() {
    var tmp = 0;
    const cercleRouge = document.getElementsByClassName("cercle-rouge")[0];

    cercleRouge.addEventListener('mousedown', function() {
        cercleRouge.style.boxShadow = '0 0 5px 0 rgba(0, 0, 0, 0.5)';
        tmp++;
        document.dispatchEvent(new CustomEvent('data_button', {detail: tmp}));
    });
    cercleRouge.addEventListener('mouseup', function() {
        cercleRouge.style.boxShadow = '0 0 20px 0 rgba(0, 0, 0, 0.5)';
    });
    // cercleRouge.addEventListener('mouseout', function() {
    //     cercleRouge.style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, 0.5)';
    // });
    cercleRouge.addEventListener('mouseover', function() {
        cercleRouge.style.cursor = "pointer";
    });
    document.dispatchEvent(new CustomEvent('nouvelleValeur', { detail: tmp }));
});
