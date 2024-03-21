const choices = ["rock", "paper", "scissor"];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const resultD = document.getElementById("resultD");
const playerScoreD = document.getElementById("playerScoreD");
const computerScoreD = document.getElementById("computerScoreD");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if(playerChoice == computerChoice) {
        result = "! IT'S A TIE !";
    }
    else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice == "scissor") ? "! YOU WIN !" : "! YOU LOSE !";
                break;
            case "paper":
                result = (computerChoice == "rock") ? "! YOU WIN !" : "! YOU LOSE !";
                break;
            case "scissor":
                result = (computerChoice == "paper") ? "! YOU WIN !" : "! YOU LOSE !";
                break;
        }
    }

    player.textContent = `PLAYER: ${playerChoice}`;
    computer.textContent = `COMPUTER: ${computerChoice}`;
    resultD.textContent = result;

    resultD.classList.remove("greentext", "redtext");

    switch(result) {
        case "! YOU WIN !":
            resultD.classList.add("greentext");
            playerScore++;
            playerScoreD.textContent = playerScore;
            break;
        case "! YOU LOSE !":
            resultD.classList.add("redtext");
            computerScore++;
            computerScoreD.textContent = computerScore;
            break;
    }
}