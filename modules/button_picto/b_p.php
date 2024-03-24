<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Old+South+Arabian&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../modules/button_picto/b_p_style.css">
    </head>
    <body>
    <?php
        $characters = ['𐩺', '𐩱', '𐩵', '𐩷', '𐩢', '𐩣', '𐩨', '𐩤', '𐩥'];

        echo '<div class="grid-container">';
            foreach ($characters as $index => $char) {
            echo "<button class=\"square\" data-char=\"{$char}\">{$char}</button>";
            }
        echo '</div>';
        ?>
    <script src="../modules/button_picto/b_p_script.js"></script>
    </body>
</html>
