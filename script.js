let humanScore = 0;
let computerScore = 0;

while (humanScore < 3 && computerScore < 3){
    let computerChoice = getComputerChoice();

    let humanChoice = getHumanChoice();
    
    playRound(humanChoice, computerChoice)
    console.log(`Score - Player: ${humanScore}, Computer: ${computerScore}`)
}

if(humanScore === 3){
    console.log("You win! :3");
}
else if (computerScore === 3){
    console.log("You lose ;(");
}

function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        console.log("tie");
        return;
    }
    else if(humanChoice === "rock"){
        if(computerChoice === "scissors"){
            humanScore++;
            console.log("You win!");
            return;
        }
        else{
            computerScore++
            console.log("You lose!");
            return;
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            humanScore++;
            console.log("You win!");
            return;
        }
        else{
            computerScore++
            console.log("You lose!");
            return;
        }
    }
    else{
        if(computerChoice === "paper"){
            humanScore++;
            console.log("You win!");
            return;
        }
        else{
            computerScore++
            console.log("You lose!");
            return;
        }
    }

}

function getHumanChoice(){
    let humanPrompt = prompt("Rock, Paper, or Scissors?");
    humanPrompt = humanPrompt.toLowerCase();
    return humanPrompt;
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