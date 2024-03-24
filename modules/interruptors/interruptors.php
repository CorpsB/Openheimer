<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Styling Example</title>
    <link rel="stylesheet" href="../modules/interuptors/i_style.css">
</head>

<p class="mytitle">Turtle</p>
<div class="module-3-container">
    <div class="i-button-container">
        <button class="i-btn" id="btn1">Pineapple</button>
        <button class="i-btn" id="btn2">Plank</button>
        <button class="i-btn" id="btn3">Hello :)</button>
        <button class="i-btn" id="btn4">Mice</button>
        <button class="i-btn" id="btn5">Segmentation</button>
        <button class="i-btn" id="btn6">Button 6</button>
    </div>
</div>
<script>
    document.querySelectorAll('.i-btn')[0].addEventListener('click', function(event) {
        return false;
    });
    document.querySelectorAll('.i-btn')[1].addEventListener('click', function(event) {
        return true;
    });
    document.querySelectorAll('.i-btn')[2].addEventListener('click', function(event) {
        return false;
    });
    document.querySelectorAll('.i-btn')[3].addEventListener('click', function(event) {
        return false;
    });
    document.querySelectorAll('.i-btn')[4].addEventListener('click', function(event) {
        return false;
    });
    document.querySelectorAll('.i-btn')[5].addEventListener('click', function(event) {
        return false;
    });
</script>

</html>