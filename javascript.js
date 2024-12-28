let humanScore = 0
let computerScore = 0


playGame();



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

function getHumanChoice(round) {
    let humanChoice = prompt(`Round ${round}! input rock, paper or scissors`)
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        return `You win! Rock beats scissors, your score is ${humanScore += 1}`
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
        return `You win! paper beats rock, your score is ${humanScore += 1}`
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        return `You win! scissors beats paper, your score is ${humanScore += 1}`
    }
    else if (computerChoice == 'rock' && humanChoice == 'scissors') {
        return `You lose! Rock beats scissors, computer score is ${computerScore += 1}`
    }
    else if (computerChoice == 'paper' && humanChoice == 'rock') {
        return `You lose! paper beats rock, computer score is ${computerScore += 1}`
    }
    else if (computerChoice == 'scissors' && humanChoice == 'paper') {
        return `You lose! scissors beats paper, computer score is ${computerScore += 1}`
    }
    else if (humanChoice == computerChoice) {
        return 'Draw! Play again.'
    }
}

function playGame() {

    for (let i = 0; i < 5; i++) {

        let humanSelection = getHumanChoice(i + 1);
        let computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection))
    }
}