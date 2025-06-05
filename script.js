const playScore = document.querySelector('.playerscore');
const compScore = document.querySelector('.computerscore');
const playChoice = document.querySelector('.playerchoice');
const compChoice = document.querySelector('.computerchoice');
const buttons = document.querySelectorAll('button');
const results = document.querySelector('.result');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(btns => {
    btns.addEventListener('click', function () {
        const human = btns.textContent.toLowerCase();
        const computer = getComputerChoice();

        playChoice.textContent = `Player: ${human}`;
        compChoice.textContent = `Computer: ${computer}`;

        playGame(human, computer);
    })
})

function getComputerChoice () {
    const weapon = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random() * weapon.length);
    return weapon[choice];
}

function playGame (human, computer) {
    if (human === computer) {
        results.textContent = `Human: ${human} ties Computer: ${computer}`;
    } else if (human === 'rock' && computer === 'scissors' || human === 'paper' && computer === 'rock' || human === 'scissors' && computer === 'paper') {
        results.textContent = `Player Wins! ${human} beats ${computer}`;
        playerScore++;
        playScore.textContent = `Player: ${playerScore}`;
    } else {
        results.textContent = `Computers Wins! ${computer} beats ${human}`;
        computerScore++;
        compScore.textContent = `Computer: ${computerScore}`;
    }

    if (playerScore === 5 || computerScore ===5) {
        disableBtns();
    }
}

function disableBtns () {
    buttons.forEach(btns => {
        btns.disabled = true;
    })
}

function resetGame() {
    playScore.textContent = `Player: 0`;
    compScore.textContent = `Computer: 0`;
    playChoice.textContent = `Player choice: `;
    compChoice.textContent = `Computer choice: `;
    results.textContent = `Results: `;
}