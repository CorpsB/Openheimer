<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Styling Example</title>
    <link rel="stylesheet" href="../modules/interuptors/i_style.css">
</head>

<div class="module-3-container">
    <div class="i-button-container">
        <button class="i-btn" id="btn1">Button 1</button>
        <button class="i-btn" id="btn2">Button 2</button>
        <button class="i-btn" id="btn3">Button 3</button>
        <button class="i-btn" id="btn4">Button 4</button>
        <button class="i-btn" id="btn5">Button 5</button>
        <button class="i-btn" id="btn6">Button 6</button>
    </div>
</div>
<script>
    document.querySelector('.button-container').addEventListener('click', function(event) {
        if (event.target.className === 'btn') {
            const buttonNumber = event.target.textContent.match(/\d+/)[0];
            alert(`You clicked Button ${buttonNumber}`);
        }
    });
</script>

</html>