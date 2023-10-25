// David (user) will play aginst HAL 5 games of RPS
// The one who wins the most games is the big Winner

const toolBox = ['ROCK','PAPER','SCISSORS'];
let halScore = 0;
let davidScore = 0;
let round = 0;
const maxRounds = 5;


function getHalChoice() {
    let index = Math.floor(Math.random() * toolBox.length);
    return toolBox[(index)];
}
function playRound() {
    let davidSelection;
    davidSelection = prompt('What is your selection?'); 
    if(davidSelection === null || davidSelection === "") {
        resetValues();
        return;
    }
    let ucDavidSelection = davidSelection.toUpperCase();
        
    let halSelection = getHalChoice();
    let winner = 0;
    let roundResults = {"davidSelection": ucDavidSelection, "halSelection": halSelection, "winner": winner};
    
    if(ucDavidSelection == "ROCK") {
        if(halSelection == "SCISSORS") {
            roundResults.winner = 1;
        } else if(halSelection == "PAPER") {
            roundResults.winner = 2;
        } else {
            roundResults.winner = 0;
        }       
    } else if(ucDavidSelection == "PAPER") {
        if(halSelection == "ROCK") {
            roundResults.winner = 1;
        } else if(halSelection == "SCISSORS") {
            roundResults.winner = 2;
        } else {
            roundResults.winner = 0;
        }   
    } else if(ucDavidSelection == "SCISSORS") {
        if(halSelection === "PAPER") {
            roundResults.winner = 1;
        } else if(halSelection == "ROCK") {
            roundResults.winner = 2;
        } else {
            roundResults.winner = 0;
        }
    } else {
        davidSelection = prompt(ucDavidSelection + " is not a valid selection, please try again:");
    }
    updateScoreBoard(roundResults); 
}


function updateScoreBoard(results) {
    let res = results;
    let msg = "";
    if(res.winner === 1) {
        davidScore += 1;
        round += 1;
        msg = `${res.davidSelection} beats ${res.halSelection} David wins round ${round}
        David: ${davidScore} vs HAL: ${halScore}`;
        console.log(msg);
        if( (davidScore > halScore) && (davidScore + halScore === 5) ) {
            resetValues();
            console.log("Congratulations David, you beat HAL the not so nice computer!!!");
        }
    } else if(res.winner === 2) {
        halScore += 1;
        round += 1;
        msg = `${res.halSelection} beats ${res.davidSelection} Hal wins round ${round}
        David: ${davidScore} vs HAL: ${halScore}`;
        console.log(msg);
        if( (halScore > davidScore) && (halScore + davidScore === 5) ) {
            resetValues();
            console.log("Congratulations to HAL the computer!!! David, try again.");
        }
    } else {
        msg = `${res.davidSelection} and ${res.halSelection} we have a tie, let's start over
        David: ${davidScore} vs HAL: ${halScore}`;
        console.log(msg);
        playRound();
    }
}

function resetValues() {
    round = 0;
    halScore = 0;
    davidScore = 0;
}

const playButton = document.querySelector('.play-btn');

playButton.addEventListener('click', () => {
        for (let round = 1; round <= maxRounds; round++) {
            playRound();
        }
    }
);