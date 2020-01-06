// make prompt repeat until correct input is given. 
let condition = false; 
do {
    userChoice = prompt("Rock, Paper or Scissors?"); 
    if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
        condition = true
    } else {
        condition = false;
    }
} while (condition === false); 


const options = ["rock", "paper", "scissors"]; 
const aiChoice = options[Math.floor(Math.random() * 3)]; 
const userScore = 0; //haven't used this yet;
const aiScore = 0; //haven't used this yet;

// update page to display user's choice and the ai's choice. 
var user = document.getElementById("user").querySelector("h1").innerHTML = "You choose: " + userChoice;
var ai = document.getElementById("ai").querySelector("h1").innerHTML = "AI choose: " + aiChoice;

var aiWin = function() {
    setTimeout(() => { alert("you lose") }, 300); 
    aiScore += 1 //haven't used this yet;
}
var userWin = function() {
    setTimeout(() => { alert("you win") }, 300); 
    userScore += 1 //haven't used this yet;;
}
var draw = function() {
    setTimeout(() => { alert("draw") }, 300); 
}


if (userChoice == "rock" && aiChoice == "rock" 
  || userChoice == "paper" && aiChoice == "paper"
  || userChoice == "scissors" && aiChoice == "scissors") {
    draw();
} else if (userChoice == "rock" && aiChoice == "paper"
         || userChoice == "paper" && aiChoice == "scissors"
         || userChoice == "scissors" && aiChoice == "rock") {
    aiWin();
} else if (userChoice == "rock" && aiChoice == "scissors"
         || userChoice == "paper" && aiChoice == "rock"
         || userChoice == "scissors" && aiChoice == "paper") {
    userWin();
} 

/* 1- add scores to display on the page
    2- make a restart button that automatically restarts the game (i think i have to turn the game a function then call the function, 
        then on the html button onclick I need to execute the function)
    3- save it & rename the folder as rock paper scissors on alert, then 
        copy the folder (& rename it back to orig) and make the game into a proper visual game. no alert- actual buttons that ppl press. */