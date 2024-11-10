function getComputerChoice() {
    const option = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random() * option.length);

    return option[choice];
}

function getHumanChoice() {
    const answer = prompt('Please choose between rock paper or scissors');
    return answer.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (human === computer) {
        console.log(`Its a tie!`);
    }
    else if (human === 'rock' && computer === 'scissors') {
        humanScore++;
        console.log(`You win! ${human} beats ${computer}. Player: ${humanScore} Computer: ${computerScore}`);
    } else if (human === 'paper' && computer === 'rock') {
        humanScore++;
        console.log(`You win. ${human} beats ${computer}. Player: ${humanScore} Computer: ${computerScore}`);
    } else if (human === 'scissors' && computer === 'paper') {
        humanScore++;
        console.log(`You win. ${human} beats ${computer}. Player: ${humanScore} Computer: ${computerScore}`);
    } else {
        computerScore++;
        console.log(`Computer wins. ${computer} beats ${human}. Player: ${humanScore} Computer: ${computerScore}`);
    }
}

function playGame() {
    const player = getHumanChoice();
    const comp = getComputerChoice();

    playRound(player, comp)
}

for (let i = 0; i <= 5; i++) {
    console.log(playGame());
}