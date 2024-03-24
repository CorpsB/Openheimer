<?php
function getBombSeed()
{
    $numbers = "12345678";
    $res = "";
    for ($i = 0; $i < 6; $i++) {
        $testnb = $numbers[rand(0, 7)];
        while (str_contains($res, $testnb)) {
            $testnb = $numbers[rand(0, 7)];
        }
        $res .= $testnb;
    }
    return $res;
}

$seed = getBombSeed();
$_SESSION['BombSeed'] = $seed;


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap">
    <link rel="stylesheet" href="../css/create.css">
    <title>Open-Heimer | create game</title>
</head>

<body>
    <header class="header">
        <div class="header-infos">
            <img src="../assets/openheimer_logo.png" alt="logo">
            <div class="header-text">
                <h1>Open-Heimer</h1>
                <h3>keep talking and everybody explodes</h3>
            </div>
        </div>
    </header>

    <div class="body">
        <div class="text-container">
            <h2 class="seed-nb">GAME SEED: <?php echo $_SESSION['BombSeed'] ?></h2>
            <a href="game.php?id=<?php echo $seed ?>" class="start-game">START GAME</a>
        </div>
    </div>
</body>

</html>