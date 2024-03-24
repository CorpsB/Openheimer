<?php
$seed = $_GET['seed'];
$modules = array(
    "1" => 1,
    "2" => 2,
    "3" => 3,
    "4" => 4,
    "5" => 5,
    "6" => 6,
    "8" => 8
);

$len = strlen($seed);
$sequence = array();

while ($len !== 0) {
    $randindex = rand(0, $len - 1);
    $RAM = $seed[$randindex];
    array_push($sequence, $modules[$RAM]);
    $seed = substr($seed, 0, $randindex) . substr($seed, $randindex + 1);
    $len--;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <link rel="icon" href="../assets/favico.ico">
    <link rel="stylesheet" href="../css/doc.css">
    <title>Open-Heimer | documentation</title>
</head>

<body>
    <header class="content">
        <div class="empty"></div>
        <div class="doc-header">
            <h1 class="title">Open-Heimer manual</h1>
        </div>
        <a href="../index.php" id="return_to_home" class="home"><i class="fas fa-home"></i></a>
    </header>
    <div class="doc-body">
        <div class="text-body">
            <?php
            for ($i = 0; $i != count($sequence); $i++) {
                include_once("modules_doc/module" . $sequence[$i] . ".html");
            }
            ?>
            <div class="doc-last-elem"></div>
        </div>
    </div>

</body>

</html>