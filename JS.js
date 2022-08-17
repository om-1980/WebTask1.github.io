console.log("Code Starts")
console.time();

//Toss The Game
let turn = document.getElementById('turn');
let tossBtn = document.getElementById('tossbtn');
let tossFirst = document.getElementById('tossfirst');
var generateBtn = document.getElementById('generatebtn');
generateBtn.disabled = true;
let toss =0;
let playerTurnCounter = 0; //1 for player 1 ; 2 for player 2
tossBtn.addEventListener('click',function(){
tossFirst.innerText = " ";
toss = Math.floor(Math.random()*2)+1;
if(toss === 1){
    turn.innerText = "1st Turn : Player 1";
    generateBtn.disabled = false;
    playerTurnCounter=1;
}
if(toss === 2){
    turn.innerText = "1st Turn : Player 2";
    generateBtn.disabled = false;
    playerTurnCounter = 2;
}
});

//Random number generator
var count = 0 ;
function randNumGen(){
    const random = Math.floor(Math.random() * 5) + 1;
    count = random;
    return random;
}

/*Scoring System
Score on generating face  = box number * 1
Score on generating eyes  = box number * 3
Score on generating smile  = box number * 5
Score on generating body  = box number * 7
Score on generating arms  = box number * 9
Score on generating legs  = box number * 11
*/

//Score Counter
let player1Score=0;
let player2Score=0;

//Functions For Human Generator

//Face
function faceGen(){
context.beginPath();
context.fillStyle ="rgb(209, 169, 169)" //"bisque"; // #ffe4c4
context.arc(170, 50, 15, 0, Math.PI * 2, true); // draw circle for head
context.fill();
}

//Smile 
function smileGen(){
context.beginPath();
context.strokeStyle = "red"; // color
context.lineWidth = 1.5;
context.arc(170, 50, 10, Math.PI / 6, 5 * Math.PI /6, false); // draw semicircle for smiling
context.stroke();
}

// eyes
function eyesGen(){
context.beginPath();
context.fillStyle = "black"; // color
context.arc(165, 45, 1.5, 0, Math.PI * 2, true); // draw left eye
context.fill();
context.arc(175, 45, 1.5, 0, Math.PI * 2, true); // draw right eye
context.fill();
}

// body
function bodyGen(){
context.beginPath();
context.moveTo(170, 65);
context.lineTo(170, 115);
context.strokeStyle = "brown";
context.stroke();
}

// arms
function armsGen(){
context.beginPath();
context.strokeStyle = "green"; 
context.moveTo(170, 65);
context.lineTo(150, 95);
context.moveTo(170, 65);
context.lineTo(190, 95);
context.stroke();
}
// legs
function legsGen(){
context.beginPath();
context.strokeStyle = "black";
context.moveTo(170, 115);
context.lineTo(160, 160);
context.moveTo(170, 115);
context.lineTo(180, 160);
context.stroke();
}

//Gaming For Player 1 turn
let temp10 = 0; //for Box 1
let temp11 = 0; //for Box 2
let temp12 = 0; //for Box 3
let temp13 = 0; //for Box 4
let temp14 = 0; //for Box 5
function player1Gaming(){
    switch (count){
        case 1:{
            let canvas = document.getElementById('11');
            context = canvas.getContext("2d");
            switch (temp10){
                case 0:
                    faceGen();
                    temp10+=1;
                    player1Score+=(1*1); //See Scoring System at line 29
                    break;
                case 1:
                    eyesGen();
                    temp10+=1;
                    player1Score+=(1*3); //See Scoring System at line 29
                    break;
                case 2 :
                    smileGen();
                    temp10+=1;
                    player1Score+=(1*5); //See Scoring System at line 29
                    break;
                case 3:
                    bodyGen();
                    temp10+=1;
                    player1Score+=(1*7); //See Scoring System at line 29
                    break;
                case 4:
                    armsGen();
                    temp10+=1;
                    player1Score+=(1*9); //See Scoring System at line 29
                    break;
                case 5:
                    legsGen();
                    temp10+=1;
                    player1Score+=(1*11); //See Scoring System at line 29
                    break;
            }
            break;
    }
        case 2:{
            let canvas = document.getElementById('21');
            context = canvas.getContext("2d");
            switch (temp11){
                case 0:
                    faceGen();
                    temp11+=1;
                    player1Score+=(2*1); //See Scoring System at line 29
                    break;
                case 1:
                    eyesGen();
                    temp11+=1;
                    player1Score+=(2*3); //See Scoring System at line 29
                    break;
                case 2 :
                    smileGen();
                    temp11+=1;
                    player1Score+=(2*5); //See Scoring System at line 29
                    break;
                case 3:
                    bodyGen();
                    temp11+=1;
                    player1Score+=(2*7); //See Scoring System at line 29
                    break;
                case 4:
                    armsGen();
                    temp11+=1;
                    player1Score+=(2*9); //See Scoring System at line 29
                    break;
                case 5:
                    legsGen();
                    temp11+=1;
                    player1Score+=(2*11); //See Scoring System at line 29
                    break;
            }
            break;
    }
        case 3:{
            let canvas = document.getElementById('31');
            context = canvas.getContext("2d");
            switch (temp12){
                case 0:
                    faceGen();
                    temp12+=1;
                    player1Score+=(3*1); //See Scoring System at line 29
                    break;
                case 1:
                    eyesGen();
                    temp12+=1;
                    player1Score+=(3*3); //See Scoring System at line 29
                    break;
                case 2 :
                    smileGen();
                    temp12+=1;
                    player1Score+=(3*5); //See Scoring System at line 29
                    break;
                case 3:
                    bodyGen();
                    temp12+=1;
                    player1Score+=(3*7); //See Scoring System at line 29
                    break;
                case 4:
                    armsGen();
                    temp12+=1;
                    player1Score+=(3*9); //See Scoring System at line 29
                    break;
                case 5:
                    legsGen();
                    temp12+=1;
                    player1Score+=(3*11); //See Scoring System at line 29
                    break;
            }
            break;
    }
        case 4:{
            let canvas = document.getElementById('41');
            context = canvas.getContext("2d");
            switch (temp13){
                case 0:
                    faceGen();
                    temp13+=1;
                    player1Score+=(4*1); //See Scoring System at line 29
                    break;
                case 1:
                    eyesGen();
                    temp13+=1;
                    player1Score+=(4*3); //See Scoring System at line 29
                    break;
                case 2 :
                    smileGen();
                    temp13+=1;
                    player1Score+=(4*5); //See Scoring System at line 29
                    break;
                case 3:
                    bodyGen();
                    temp13+=1;
                    player1Score+=(4*7); //See Scoring System at line 29
                    break;
                case 4:
                    armsGen();
                    temp13+=1;
                    player1Score+=(4*9); //See Scoring System at line 29
                    break;
                case 5:
                    legsGen();
                    temp13+=1;
                    player1Score+=(4*11); //See Scoring System at line 29
                    break;
            }
            break;
    }
        case 5:{
            let canvas = document.getElementById('51');
            context = canvas.getContext("2d");
            switch (temp14){
                case 0:
                    faceGen();
                    temp14+=1;
                    player1Score+=(5*1); //See Scoring System at line 29
                    break;
                case 1:
                    eyesGen();
                    temp14+=1;
                    player1Score+=(5*3); //See Scoring System at line 29
                    break;
                case 2 :
                    smileGen();
                    temp14+=1;
                    player1Score+=(5*5); //See Scoring System at line 29
                    break;
                case 3:
                    bodyGen();
                    temp14+=1;
                    player1Score+=(5*7); //See Scoring System at line 29
                    break;
                case 4:
                    armsGen();
                    temp14+=1;
                    player1Score+=(5*9); //See Scoring System at line 29
                    break;
                case 5:
                    legsGen();
                    temp14+=1;
                    player1Score+=(5*11); //See Scoring System at line 29
                    break;
            }
            break;
    }

}
}

//Gaming for Player 2 turn
let temp20 = 0;//for Box 1
let temp21 = 0;//for Box 2
let temp22 = 0;//for Box 3
let temp23 = 0;//for Box 4
let temp24 = 0;//for Box 5
function player2Gaming(){
    switch (count){
        case 1:{
            let canvas = document.getElementById('12');
            context = canvas.getContext("2d");
            switch (temp20){
                case 0:
                    faceGen();
                    temp20+=1;
                    player2Score+=(1*1); //See Scoring System at line 29
                    break;
                case 1:
                    eyesGen();
                    temp20+=1;
                    player2Score+=(1*3); //See Scoring System at line 29
                    break;
                case 2 :
                    smileGen();
                    temp20+=1;
                    player2Score+=(1*5); //See Scoring System at line 29
                    break;
                case 3:
                    bodyGen();
                    temp20+=1;
                    player2Score+=(1*7); //See Scoring System at line 29
                    break;
                case 4:
                    armsGen();
                    temp20+=1;
                    player2Score+=(1*9); //See Scoring System at line 29
                    break;
                case 5:
                    legsGen();
                    temp20+=1;
                    player2Score+=(1*11); //See Scoring System at line 29
                    break;
            }
            break;
    }
        case 2:{
            let canvas = document.getElementById('22');
            context = canvas.getContext("2d");
            switch (temp21){
                case 0:
                    faceGen();
                    temp21+=1;
                    player2Score+=(2*1); //See Scoring System at line 29
                    break;
                case 1:
                    eyesGen();
                    temp21+=1;
                    player2Score+=(2*3); //See Scoring System at line 29
                    break;
                case 2 :
                    smileGen();
                    temp21+=1;
                    player2Score+=(2*5); //See Scoring System at line 29
                    break;
                case 3:
                    bodyGen();
                    temp21+=1;
                    player2Score+=(2*7); //See Scoring System at line 29
                    break;
                case 4:
                    armsGen();
                    temp21+=1;
                    player2Score+=(2*9); //See Scoring System at line 29
                    break;
                case 5:
                    legsGen();
                    temp21+=1;
                    player2Score+=(2*11); //See Scoring System at line 29
                    break;
            }
            break;
    }
        case 3:{
            let canvas = document.getElementById('32');
            context = canvas.getContext("2d");
            switch (temp22){
                case 0:
                    faceGen();
                    temp22+=1;
                    player2Score+=(3*1); //See Scoring System at line 29
                    break;
                case 1:
                    eyesGen();
                    temp22+=1;
                    player2Score+=(3*3); //See Scoring System at line 29
                    break;
                case 2 :
                    smileGen();
                    temp22+=1;
                    player2Score+=(3*5); //See Scoring System at line 29
                    break;
                case 3:
                    bodyGen();
                    temp22+=1;
                    player2Score+=(3*7); //See Scoring System at line 29
                    break;
                case 4:
                    armsGen();
                    temp22+=1;
                    player2Score+=(3*9); //See Scoring System at line 29
                    break;
                case 5:
                    legsGen();
                    temp22+=1;
                    player2Score+=(3*11); //See Scoring System at line 29
                    break;
            }
            break;
    }
        case 4:{
            let canvas = document.getElementById('42');
            context = canvas.getContext("2d");
            switch (temp23){
                case 0:
                    faceGen();
                    temp23+=1;
                    player2Score+=(4*1); //See Scoring System at line 29
                    break;
                case 1:
                    eyesGen();
                    temp23+=1;
                    player2Score+=(4*3); //See Scoring System at line 29
                    break;
                case 2 :
                    smileGen();
                    temp23+=1;
                    player2Score+=(4*5); //See Scoring System at line 29
                    break;
                case 3:
                    bodyGen();
                    temp23+=1;
                    player2Score+=(4*7); //See Scoring System at line 29
                    break;
                case 4:
                    armsGen();
                    temp23+=1;
                    player2Score+=(4*9); //See Scoring System at line 29
                    break;
                case 5:
                    legsGen();
                    temp23+=1;
                    player2Score+=(4*11); //See Scoring System at line 29
                    break;
            }
            break;
    }
        case 5:{
            let canvas = document.getElementById('52');
            context = canvas.getContext("2d");
            switch (temp24){
                case 0:
                    faceGen();
                    temp24+=1;
                    player2Score+=(5*1); //See Scoring System at line 29
                    break;
                case 1:
                    eyesGen();
                    temp24+=1;
                    player2Score+=(5*3); //See Scoring System at line 29
                    break;
                case 2 :
                    smileGen();
                    temp24+=1;
                    player2Score+=(5*5); //See Scoring System at line 29
                    break;
                case 3:
                    bodyGen();
                    temp24+=1;
                    player2Score+=(5*7); //See Scoring System at line 29
                    break;
                case 4:
                    armsGen();
                    temp24+=1;
                    player2Score+=(5*9); //See Scoring System at line 29
                    break;
                case 5:
                    legsGen();
                    temp24+=1;
                    player2Score+=(5*11); //See Scoring System at line 29
                    break;
            }
            break;
    }
}
}
//Checking Win
let Win = "DRAW!"
function whoWin(){
    if(player1Score > player2Score){
        Win = `Player 1 Wins 
               Player 1 score : ${player1Score}
               Player 2 score : ${player2Score}`;
        alert(Win);
    }
    if(player2Score > player1Score){
        Win = `Player 2 Wins 
               Player 2 score : ${player2Score}
               Player 1 score : ${player1Score}`;
        alert(Win);
    }
    if(player1Score===player2Score){
        Win = "Game Draw!!"
        alert(Win);
    }
}

//Playing Game
let turnsLeft = document.getElementById('turnsLeft');
var totalturns = 50;
let player1TotalScore = document.getElementById('player1score')
let player2TotalScore = document.getElementById('player2score')


generateBtn.addEventListener('click',function(){
    let randNum = document.getElementById('randomNum');
    randNum.innerText = randNumGen();
    totalturns--;
    turnsLeft.innerText =`Turns Left : ${totalturns}`
    if(playerTurnCounter===1){
        player1Gaming();
        turn.innerText = "Turn : Player 2";
        playerTurnCounter = 2;
    }
    else{
        player2Gaming();
        turn.innerText = "Turn : Player 1";
        playerTurnCounter = 1;
    }
    player1TotalScore.innerText = `Player 1 Score : ${player1Score}`;
    player2TotalScore.innerText = `Player 2 Score : ${player2Score}`;
    if(totalturns===0){
        endTheGame();
        console.log(player1Score);
        console.log(player2Score);
    }
})

//Ending the game when turns are Over
function endTheGame(){
    if(totalturns===0){
        generateBtn.disabled= true;
        whoWin();
    }
}

//Reseting The Game Using Reset button
let resetBtn = document.getElementById('resetbtn');
function reset(){
    location.reload();
} 