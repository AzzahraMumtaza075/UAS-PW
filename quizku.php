<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Kuis dengan JavaScript</title>
    <link rel="stylesheet" href="quizku.css">
</head>
<body>
    <div id="container">
        <div id="start" style="position: inherit;">Kuis dimulai!</div>
        <div id="quiz" style="display: none">
            <div id="question"></div>
            <div id="qImg"></div>
            <div id="choices">
                <div class="choice" id="A" onclick="checkAnswer('A')"></div>
                <div class="choice" id="B" onclick="checkAnswer('B')"></div>
                <div class="choice" id="C" onclick="checkAnswer('C')"></div>
            </div>
            <div id="timer">
                <div id="counter"></div>
                <div id="btimeGauge"></div>
                <div id="timeGauge"></div>
            </div>
            <div id="progress"></div>
        </div>
        <div id="scoreContainer" style="display: none"></div>
    </div>
    <script src="uts.js"></script>
<br></br>
<br></br>
<br></br>

  <marquee style="color: ivory;" direction="right">==============================Jangan Sampai Salah Menjawab==============================</marquee>
  <marquee style="color: ivory;" direction="left">==============================Semangat Yok semangat!!!==============================</marquee>
  
</body>
</html>