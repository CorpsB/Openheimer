<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Old+South+Arabian&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./d_style.css">
</head>

<body>
    <div class="digicode-container">
        <?php
            for ($i = 0; $i < 9; $i++) {
                echo "<button class=\"square-digicode\"></button>";
            }
        ?>
    </div>
    <script src="./d_scripts.js"></script>
</body>

</html>