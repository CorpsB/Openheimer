const cercleRouge = document.getElementsByClassName("cercle-rouge")[0];

cercleRouge.addEventListener('mousedown', function() {
    cercleRouge.style.boxShadow = '0 0 5px 0 rgba(0, 0, 0, 0.5)';
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
