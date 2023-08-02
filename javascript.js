function getComputerChoice() {
    outcome = ["Rock", "Paper", "Scissors"]
    return outcome[Math.floor(Math.random() * 3)];
}

const buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', () => {
        playRound(button.value, getComputerChoice());
    })
})

const playerSelection = "rock";
let computerSelection;
let myScore = 0;
let comScore = 0;
const result = document.querySelector('#result')
const score = document.querySelector('#score')
const end = document.querySelector('#end')

function gameEnd() {
    
    buttons.forEach(function (button) {
        button.setAttribute("disabled", "true");
    })
    if (myScore>comScore) end.append("You won the game! Reload the page to play again");
    else end.append("You lost the game. Reload the page to play again");
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)
    if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock") {
        myScore++
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
        document.getElementById('menum').textContent = myScore
    }
    else if (playerSelection === computerSelection) {
        result.textContent = `Its a Draw! You both chose ${playerSelection}.` 
    }
    else {
        comScore++
        result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        document.getElementById('cs').textContent = comScore
    }
    if (myScore === 5 || comScore === 5) gameEnd();
}
  
