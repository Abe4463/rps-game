function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const compChoice = Math.floor(Math.random() * choices.length);
    return choices[compChoice];
}

function getHumanChoice() {
    const playerChocie = prompt('Choose between rock, paper, or scissors');
    return playerChocie;
}

