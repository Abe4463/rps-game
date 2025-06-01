let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const compChoices = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * compChoices.length);
  return compChoices[choice];
}

function getHumanChoice() {
  const humanChoice = prompt("What is your choice of weapon?");
  return humanChoice.toLowerCase();
}

function playRound(human, computer) {
  if (human === computer) {
    console.log(`It's a tie!`);
  } else if (human === "rock" && computer === "scissors") {
    console.log(
      `human chooses ${human} and computer chooses ${computer}. The human wins!`
    );
  } else if (human === "paper" && computer === "rock") {
    console.log(
      `human chooses ${human} and computer chooses ${computer}. The human wins!`
    );
  } else if (human === "scissors" && computer === "paper") {
    console.log(
      `human chooses ${human} and computer chooses ${computer}. The human wins!`
    );
  } else {
    console.log(`computer wins! ${computer} beats ${human}`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
}

playGame();
