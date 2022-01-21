let ballSize = 100;
let score = 0;
let ballMiss = 0;
let allMiss = 0;
let highScore = 0;
let h = window.innerHeight - ballSize;
let w = window.innerWidth - ballSize;
let ball = document.querySelector(".ball");
let scoreI = document.querySelector(".score");
let scoreH = document.querySelector(".hScore")
let startB = document.querySelector(".start");
let resetB = document.querySelector(".reset");
let dHScore = document.querySelector(".dHScore")
let body = document.querySelector("body");
let header = document.querySelector("header")
let headerB = document.getElementsByClassName("gTitle");
let clock;
let gameStarted = false;
let ms = 1000;
let gOver = document.getElementById("gOver");
resetB.addEventListener("click", reset);
startB.addEventListener("click", start);
ball.addEventListener("click", hit);
body.addEventListener("click", miss);
clock = setInterval(randomPosition, ms);
var randomColor;
randomColorHeader();
let timerColorHeader = setInterval(randomColorHeader, 500);
let boraVer = "quero ver";
document.getElementsByTagName("body")[0].style.backgroundColor = "#000";


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
}

function start(){
    ball.style.display = "block";
    scoreI.style.display = "block";
    startB.style.display = "none";
    gOver.style.display = "none";
    resetB.style.display = "none";
    dHScore.style.display = "none";
    header.style.display = "none";
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
            dHScore.style.display = "block";
            gameStarted = false;
            score = 0;
            scoreH.innerHTML = highScore;
        }
        
    }
}

