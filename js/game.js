$(document).ready(function() {
    document.addEventListener('data_button', function(event) {
        var data = event.detail;
        console.log("module button : " + data_button);
        if (data_button > 5)
            document.location.href="../index.php";
    });
    document.addEventListener('data_button_picto', function(event) {
        var data = event.detail;
        console.log("module button_picto : " + data);
        if (data === "fail")
            document.location.href="../index.php";
    });
    document.addEventListener('data_interruptors', function(event) {
        var data = event.detail;
        console.log("module interruptors : " + data);
        if (data === "fail")
            document.location.href="../index.php";
    });
});
