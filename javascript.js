const playerRock = document.querySelector("#rock");
const playerPaper = document.querySelector("#paper");
const playerScissors = document.querySelector("#scissors");
const buttonElement = document.querySelectorAll("button");
const scoreKeeper = document.querySelector(".scoreKeeper");
const humanScoreElement = document.querySelector(".humanScore");
const computerScoreElement = document.querySelector(".computerScore");

let humanScore = 0;
let computerScore = 0;


buttonElement.forEach(element => {
    element.onclick = function () {
        playGame(this.id);
    };
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1) {
        return 'rock';
    } else if (choice == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
function getHumanChoice() {
    let humanChoice = prompt(`New round! input rock, paper or scissors`)
    return humanChoice.toLowerCase();
}
function playRound(humanChoice, computerChoice) {
    if ( // Human win conditions
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'rock')

    ) {
        scoreKeeper.textContent = `You won the round! ${humanChoice} beats ${computerChoice}.`
        humanScoreElement.textContent = `Human score: ${humanScore += 1}`
    }
    else if ( // Computer win condtion
        (computerChoice == 'rock' && humanChoice == 'scissors') ||
        (computerChoice == 'scissors' && humanChoice == 'paper') ||
        (computerChoice == 'paper' && humanChoice == 'rock')

    ) {
        scoreKeeper.textContent = `You lost the round! ${computerChoice} beats ${humanChoice}`
        computerScoreElement.textContent = `Computer Score: ${computerScore += 1}`
    }
    else if (humanChoice == computerChoice) {
        scoreKeeper.textContent = `Draw! You both chose ${humanChoice}`
    }


}

function playGame(humanSelection) {

    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)

    if (humanScore == 5) {
        const gameOverText = document.createTextNode(' VICTORY! GAME OVER')
        scoreKeeper.appendChild(gameOverText)
    } else if (computerScore == 5) {
        const gameOverText = document.createTextNode(' DEFEAT! GAME OVER')
        scoreKeeper.appendChild(gameOverText)
    }
}