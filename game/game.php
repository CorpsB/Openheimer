<?php

$modules = array(
    "1" => "../modules/button/button.php",
    "2" => "../modules/fillbar/fillb.php",
    "3" => "../modules/interruptors/interruptors.php",
    "4" => "../modules/button_picto/b_p.php",
    "5" => "",
    "6" => "",
    "7" => "",
    "8" => ""
);

$seed = $_GET["id"];


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
    <link rel="stylesheet" href="../css/game.css">
    <script src="../js/timer.js"></script>
    <script src="../js/game.js"></script>
    <title>Open-heimer</title>
</head>
<body>
    <div class="content">
        <div class="title">
            <h1><i class="fas fa-clock"></i></h1>
            <h1 id="clock">02:00</h1>
            <a href="../index.php" id="return_to_home"><i class="fas fa-home"></i></a>
        </div>
    </div>
    <div class="picture_bombe">
        <div class="bombe">
            <div class="one"><?php require_once($modules[substr($seed, 0, 1)]);?></div>
            <div class="two"><?php require_once($modules[substr($seed, 1, 1)]);?></div>
            <div class="three"><?php require_once($modules[substr($seed, 2, 1)]);?></div>
            <div class="four"><?php require_once($modules[substr($seed, 3, 1)]);?></div>
            <div class="five"><?php require_once($modules[substr($seed, 4, 1)]);?></div>
            <div class="six"><?php require_once($modules[substr($seed, 5, 1)]);?></div>
        </div>
    </div>
</body>
</html>
