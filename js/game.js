$(document).ready(function() {
    document.addEventListener('data_button', function(event) {
        var data_button = event.detail;
        console.log("data_button : " + data_button);
        if (data_button > 5)
            document.location.href="../index.php";
    });

});
