// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
// create our questions
let questions = [
    {
        question : "1. Krosom mempunyai sentromer terletak di tengah sehingga membagi kromosom menjadi dua lengan yang sama panjang disebut…",
        choiceA : "A.Metasentrik",
        choiceB : "B.Monosentrik",
        choiceC : "C.Akrosentrik",
        correct : "A"
    },{
        question : "2. Hasil perkalian dari 27^1/3 x 4^3/2 adalah...",
        choiceA : "A.25",
        choiceB : "B.24",
        choiceC : "C.23",
        correct : "B"
    },{
        question : "3. Berapakah turunan dari 12X^2 + 5X + 60...",
        choiceA : "24X + 5X",
        choiceB : "24X + 25x",
        choiceC : "24X + 5",
        correct : "C"

    },{
        question : "4. Di antara serambi dan bilik jantung ada semacam pintu yang dinamakan dengan...",
        choiceA : "A.Pembuluh nadi",
        choiceB : "B.Serambi kanan",
        choiceC : "C.Katup jantung",
        correct : "C"
    },{
        question : "5. Molekul XCl3 mempunyai momen dipol sama dengan nol. Bentuk molekul itu adalah...",
        choiceA : "A.Segitiga planar",
        choiceB : "B.Linear",
        choiceC : "C.Tetrahedral",
        correct : "A"
    },{
        question : "6. Yang bukan merupakan sumber energi alternatif adalah...",
        choiceA : "A.Matahari",
        choiceB : "B.Air",
        choiceC : "C.Angin",
        correct : "B"

    },{
        question : "7. Benda yang beratnya 58,8 N pada suatu tempat yang memiliki percepatan gravitasi bumi sebesar 9,8 N/kg memiliki massa sebesar...",
        choiceA : "A.8kg",
        choiceB : "B.7kg",
        choiceC : "C.6kg",
        correct : "C"
    },{
        question : "8. Partikel bermuatan positif yang terdapat dalam inti atom adalah...",
        choiceA : "A.Elektron",
        choiceB : "B.Proton",
        choiceC : "C.Neutron",
        correct : "B"
    },{
        question : "9. Berapakah hasil dari 2.469 X 5...",
        choiceA : "A.12.345",
        choiceB : "B.23.456",
        choiceC : "C.34.567",
        correct : "A"

    },{
        question : "10. Fotolisis air pada reaksi cahaya waktu fotosintesis menghasilkan …",
        choiceA : "A.O2 dan NADPH2",
        choiceB : "B.Hanya ATP",
        choiceC : "C.O2 , NADPH2, dan ATP",
        correct : "C"
    },{
        question : "11. Rumus beda potensial yang benar adalah...",
        choiceA : "A.V = I x R",
        choiceB : "B.V = I / R",
        choiceC : "C.V = I + R",
        correct : "A"

    },{
        question : "12. Rumus kimia untuk senyawa asam fluorida, asam fosfat dan asam perklorat berturut-turut adalah…",
        choiceA : "A.HF2, H3PO3, HClO3",
        choiceB : "B.HF, H3PO4, HClO4",
        choiceC : "C.HF, H3PO3, HClO3",
        correct : "C"
    }

];
// create some variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;
// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
start.addEventListener("click",startQuiz);
// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}
// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}
// counter render
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}
// checkAnwer
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}
// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}
// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}
// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "emot.png" :
              (scorePerCent >= 60) ? "emot1.jpg" :
              (scorePerCent >= 40) ? "emot1.jpg" :
              (scorePerCent >= 20) ? "emot2.jpg" :
              "emot.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}