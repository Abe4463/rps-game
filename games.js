function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const compChoice = Math.floor(Math.random() * choices.length);
    return choices[compChoice];
}

function getHumanChoice() {
    const playerChoice = prompt('Choose between rock, paper, or scissors');
    return playerChoice;
}

let playerScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

/*function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('its a tie');
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        playerScore++;
        console.log(`Player Wins. ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        playerScore++;
        console.log(`Player Wins. ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        playerScore++;
        console.log(`Player Wins. ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`Computer wins. ${computerChoice} beats ${humanChoice}.`);
    }
}*/

function playGame(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('its a tie');
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        playerScore++;
        console.log(`Player Wins. ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        playerScore++;
        console.log(`Player Wins. ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        playerScore++;
        console.log(`Player Wins. ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`Computer wins. ${computerChoice} beats ${humanChoice}.`);
    }
}

playGame()
playGame()
playGame()
playGame()
playGame()