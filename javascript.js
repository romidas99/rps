function getComputerChoice() {
    outcome = ["Rock", "Paper", "Scissors"]
    return outcome[Math.floor(Math.random() * 3)];
}

const playerSelection = "rock";
let computerSelection;
let myScore = 0;
let comScore = 0;

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Rock, Paper, Scissors")
    playerSelection = playerSelection.toLowerCase()
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1)
    if (playerSelection != "Rock" || playerSelection != "Paper" || playerSelection != "Scissors") {
        console.log("Please input either Rock, Paper, Scissors") 
    } 
    if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock") {
        myScore++
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if (playerSelection === computerSelection) {
        return "Its a Draw!"
    }
    else {
        comScore++
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}
  
function game() {
    
    for (let i=0; i<5; i++) {
        playRound()
    }
    if (myScore>comScore) {
        console.log("You won the game")
    }
    else if (myScore === comScore) {
        console.log("It's a draw")
    }
    else {
        console.log("You lost the game")
    }
}