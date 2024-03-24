$(document).ready(function() {
    var score = 0;
    document.addEventListener('data_button', function(event) {
        var data = event.detail;
        console.log("module button : " + data);
        if (data > 5)
        document.location.href="../index.php";
        else if (data === 5)
            score++;
        console.log("score: " + score);
        if (score === 5)
            document.location.href="../game/victory.php";
    });
    document.addEventListener('data_button_picto', function(event) {
        var data = event.detail;
        console.log("module button_picto : " + data);
        score++;
        console.log("score: " + score);
        if (data === "fail")
            document.location.href="../index.php";
        if (score === 5)
            document.location.href="../game/victory.php";
    });
    document.addEventListener('data_interruptors', function(event) {
        var data = event.detail;
        console.log("module interruptors : " + data);
        score++;
        console.log("score: " + score);
        if (data === "fail")
            document.location.href="../index.php";
        if (score === 5)
            document.location.href="../game/victory.php";
    });
    document.addEventListener('data_fillbar', function(event) {
        var data = event.detail;
        console.log("module fillbar : " + data);
        score++;
        console.log("score: " + score);
        if (data === "fail")
            document.location.href="../index.php";
        if (score === 5)
            document.location.href="../game/victory.php";
    });
    document.addEventListener('data_digicode', function(event) {
        var data = event.detail;
        console.log("module fillbar : " + data);
        score++;
        console.log("score: " + score);
        if (data === "fail")
            document.location.href="../index.php";
        if (score === 5)
            document.location.href="../game/victory.php";
    });
});
