<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap">
    <link rel="stylesheet" href="../css/join.css">
    <link rel="icon" href="../assets/favico.ico">
    <title>Open-Heimer | join game</title>
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
        <div class="container">
            <form action="doc.php" method="GET">
                <label for="seedInput">Enter ID:</label>
                <input type="text" seed="idInput" name="seed" required>
                <button type="submit">Join</button>
            </form>
        </div>
    </div>
</body>

</html>