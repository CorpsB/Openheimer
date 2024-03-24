<?php

$modules = array(
    "1" => "../modules/cables/lignes.php",
    "2" => "../modules/button/button.php",
    // "2" => "",
    // "4" => "",
    // "5" => "",
    // "6" => "",
    // "7" => "",
    // "8" => ""
);

$seed = "214683";


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <script src="../js/game.js"></script>
    <link rel="stylesheet" href="../css/game.css">
    <script src="../js/timer.js"></script>
    <title>Open-heimer</title>
</head>
<body>
    <div class="content">
        <div class="title">
            <h1><i class="fas fa-clock"></i></h1>
            <h1 id="clock">02:00</h1>
            <!-- <div> -->
                <!-- <h1><i class="fas fa-xmark"></i><p>0/2</p></h1> -->
                <!-- <p>0/2</p> -->
            <!-- </div> -->
            <a href="../index.php" id="return_to_home"><i class="fas fa-home"></i></a>
        </div>
    </div>
    <!-- <div class="popup win defeate">
    </div> -->
    <div class="picture_bombe">
        <div class="bombe">
            <div class="one"><?php require_once($modules[substr($seed, 0, 1)]);?></div>
            <div class="two"><?php require_once($modules[substr($seed, 1, 1)]);?></div>
            <div class="three"><?php // require_once($modules[substr($seed, 2, 1)]);?></div>
            <div class="four"><?php // require_once($modules[substr($seed, 3, 1)]);?></div>
            <div class="five"><?php // require_once($modules[substr($seed, 4, 1)]);?></div>
            <div class="six"><?php // require_once($modules[substr($seed, 5, 1)]);?></div>
        </div>
    </div>
</body>
</html>
