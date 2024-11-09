function getComputerChoice() {
    const option = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random() * option.length);

    return option[choice];
}

console.log(getComputerChoice());

function getHumanChoice() {
    const answer = prompt('Please choose between rock paper or scissors');
    return answer.toLowerCase();
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound() {
    
}