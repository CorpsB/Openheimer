const cercleRouge = document.getElementsByClassName("cercle-rouge")[0];

cercleRouge.addEventListener('mousedown', function() {
    this.style.backgroundColor = "blue";
});
cercleRouge.addEventListener('mouseup', function() {
    this.style.backgroundColor = "red";
});
cercleRouge.addEventListener('mouseout', function() {
    cercleRouge.style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, 0.5)';
});
cercleRouge.addEventListener('mouseover', function() {
    cercleRouge.style.boxShadow = 'none';
});
