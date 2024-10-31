let humanScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const roundResultDisplay = document.querySelector("#round-result");
const resultDisplay = document.querySelector("#result")

function checkWinner(){
    if(humanScore === 5){
        resultDisplay.textContent = "Result: You win big dawg";
        setTimeout(resetGame, 1000);
    }
    else if (computerScore === 5){
        resultDisplay.textContent = "Result: You lose nerd";
        setTimeout(resetGame, 1000);
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    playerScoreDisplay.textContent = "Player Score: 0";
    computerScoreDisplay.textContent = "Computer Score: 0";
    roundResultDisplay.textContent = "Round Result:";
    resultDisplay.textContent = "Result:";

    alert("Game over! The board has been reset.");
}

function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        roundResultDisplay.textContent = "Round Result: Tie"
        return;
    }
    if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
        playerScoreDisplay.textContent = `Player Score: ${humanScore}`;
        roundResultDisplay.textContent = "Round Result: Win";
    }
    else{
        computerScore++
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        roundResultDisplay.textContent = "Round Result: Loss";
    }
    checkWinner();
}

function getComputerChoice(){
    let randomNum = getRandomInt(3);

    switch(randomNum) {
        case 0:
            return "rock";
            break;
        case 1:
            return "scissors";
            break;
        case 2:
            return "paper";
            break;
        default:
            break;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});