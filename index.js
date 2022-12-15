// Assign
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
// Declare variables
let player;
let computer;
let result;

// When clicked the button then ...
choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    // Display the choice
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    // Display the result
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    // Get random choice 1 to 3
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    }
    document.getElementById("myAudio").play();
}

// Different cases
function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "ROCK"){
      return (player == " PAPER") ? "You Win!" : "You Lose!"
    }
    else if(computer == "PAPER"){
      return (player == " SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SCISSORS"){
      return (player == " ROCK") ? "You Win!" : "You Lose!"
    }
}