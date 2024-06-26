<?php
function getBombSeed()
{
    // $numbers = "123456789AB";
    $numbers = "12345678";
    $res = "";
    for ($i = 0; $i < 6; $i++) {
        $testnb = $numbers[rand(0, 5)];
        while (str_contains($res, $testnb)) {
            $testnb = $numbers[rand(0, 5)];
        }
        $res .= $testnb;
    }
    return $res;
}

$seed = getBombSeed();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap">
    <link rel="stylesheet" href="../css/create.css">
    <link rel="icon" href="../assets/favico.ico">
    <title>Open-Heimer | create game</title>
</head>

<body>
    <header class="header">
        <div class="header-infos">
            <a href="/"><img src="../assets/openheimer_logo.png" alt="logo" href="/"></a>
            <div class="header-text">
                <h1>Open-Heimer</h1>
                <h3>keep talking and everybody explodes</h3>
            </div>
        </div>
    </header>

    <div class="body">
        <div class="text-container">
            <h2 class="seed-nb">GAME SEED: <?php echo $seed ?></h2>
            <a href="game.php?id=<?php echo $seed ?>" class="start-game">START GAME</a>
        </div>
    </div>
</body>

</html>