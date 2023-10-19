
function getComputerChoice() {
    return "paper";
}
function playRound(playerSelection, computerSelection) {
    let lcPlayerSelection = playerSelection.toLowerCase();
    
    return `You loose! ${computerSelection} beats ${lcPlayerSelection}`;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

