let ballSize = 100;
let score = 0;
let ballMiss = 0;
let allMiss = 0;
let highScore; 
if(localStorage.highScore){
    highScore = localStorage.highScore;
} else{
    highScore = 0;
}
let h = window.innerHeight - ballSize;
let w = window.innerWidth - ballSize;
let ball = document.querySelector(".ball");
let scoreI = document.querySelector(".score");
let scoreH = document.querySelector(".hScore")
let startB = document.querySelector(".start");
let resetB = document.querySelector(".reset");
let resetScoreB = document.querySelector(".reset-score");
let dHScore = document.querySelector(".dHScore")
let body = document.querySelector("body");
let header = document.querySelector("header")
let headerB = document.getElementsByClassName("gTitle");
let clock;
let gameStarted = false;
let ms = 1000;
let gOver = document.getElementById("gOver");
let changeBgButton = document.getElementsByClassName("change-bg")[0];
let BgImage = document.getElementsByClassName("img");[0];

changeBgButton.addEventListener("click", changeBg);
resetB.addEventListener("click", reset);
resetScoreB.addEventListener("click", resetScore);
startB.addEventListener("click", start);
ball.addEventListener("click", hit);
body.addEventListener("click", miss);
clock = setInterval(randomPosition, ms);
var randomColor;
randomColorHeader();
let timerColorHeader = setInterval(randomColorHeader, 500);
let bG = true;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    changeBg(true);
}

function changeBg(){
    if(bG){
        body.style.backgroundColor = "#000";
        changeBgButton.style.backgroundColor = "rgba(255,255,255,.2)";
        document.getElementById("img").src="https://cdn.iconscout.com/icon/free/png-256/sun-3315768-2757568.png";
        scoreI.style.color = "rgb(50, 50, 50)"
        bG = false;
    } else{
        body.style.backgroundColor = "#fff";
        changeBgButton.style.backgroundColor = "rgba(0,0,0,.2)";
        scoreI.style.color = "rgb(210, 210, 210)";
        document.getElementById("img").src="https://cdn.iconscout.com/icon/free/png-256/night-mode-3-475104.png";
        bG = true;
    }
}

function randomColorHeader(){
    for(let i = 0; i < headerB.length; i++){
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        headerB[i].style.color = "#" + randomColor;
    }
}

function reset(){
    ball.style.display = "none";
    scoreI.style.display = "none";
    startB.style.display = "block";
    gOver.style.display = "none";
    resetB.style.display = "none";
    dHScore.style.display = "none";
    header.style.display = "block";
    gameStarted = false;
    changeBgButton.style.display = "block";
    resetScoreB.style.display = "none";
}

function resetScore(){
    highScore = 0;
    localStorage.highScore = highScore;
    scoreH.innerHTML = "0";
}

function start(){
    ball.style.display = "block";
    scoreI.style.display = "block";
    startB.style.display = "none";
    gOver.style.display = "none";
    resetScoreB.style.display = "none";
    dHScore.style.display = "none";
    header.style.display = "none";
    resetScoreB.style.display = "none";
    gameStarted = true;
    ballSize = 100;
    ms = 1000;
    score = 0;
    ballSize = 100;
    ms = 1000;
    scoreI.innerHTML = score;
    ball.style.height = ballSize + "px";
    ball.style.width = ballSize + "px";
    clearInterval(clock);
    clock = setInterval(randomPosition, ms);
    changeBgButton.style.display = "none";
}

function randomPosition(){
    ball.style.top = Math.floor(Math.random() * h) + "px";
    ball.style.left = Math.floor(Math.random() * w) + "px";
}

function hit(){
    randomPosition();
    score++;
    ballSize--;
    if (ballSize < 30) {
        ballSize = 30;
    }
    ball.style.height = ballSize + "px";
    ball.style.width = ballSize + "px";
    ms -= 20;
    clearInterval(clock);
    clock = setInterval(randomPosition, ms);
    scoreI.innerHTML = score;
    ballMiss = 0;
    allMiss = 0;
    if(highScore<score){
        highScore = score;
        localStorage.highScore = highScore;
    }
}

function miss(){
    if(gameStarted == true){
        ballMiss++;
        if (ballMiss >= 3){
            score--;
            scoreI.innerHTML = score;
            ballMiss = 0;
            allMiss ++;
        }
        if (allMiss == 3){
            ms += 20;
            clearInterval(clock);
            clock = setInterval(randomPosition, ms);
            allMiss = 0;
        }
        if (score<0 && gameStarted == true){
            ball.style.display = "none";
            scoreI.style.display = "none";
            gOver.style.display = "block";
            resetB.style.display = "block";
            resetScoreB.style.display = "block";
            dHScore.style.display = "block";
            gameStarted = false;
            score = 0;
            scoreH.innerHTML = highScore;
        }
        
    }
}

