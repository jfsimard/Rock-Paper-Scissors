// David (user) will play aginst HAL 5 games of RPS
// The one who wins the most games is the big Winner

const toolBox = ['ROCK','PAPER','SCISSORS'];
let halScore = 0;
let davidScore = 0;
let round = 0;
const maxRounds = 5;
let btns = document.querySelectorAll('.sel');


function getHalChoice() {
    let index = Math.floor(Math.random() * toolBox.length);
    return toolBox[(index)];
}
function playRound(david) {
    let davidSelection = david; 
    if(davidSelection === null || davidSelection === "") {
        resetValues();
        return;
    }
        
    let halSelection = getHalChoice();
    let winner = 0;
    let roundResults = {"davidSelection": davidSelection, "halSelection": halSelection, "winner": winner};
    
    if(davidSelection == "ROCK") {
        if(halSelection == "SCISSORS") {
            roundResults.winner = 1;
        } else if(halSelection == "PAPER") {
            roundResults.winner = 2;
        } else {
            roundResults.winner = 0;
        }       
    } else if(davidSelection == "PAPER") {
        if(halSelection == "ROCK") {
            roundResults.winner = 1;
        } else if(halSelection == "SCISSORS") {
            roundResults.winner = 2;
        } else {
            roundResults.winner = 0;
        }   
    } else if(davidSelection == "SCISSORS") {
        if(halSelection === "PAPER") {
            roundResults.winner = 1;
        } else if(halSelection == "ROCK") {
            roundResults.winner = 2;
        } else {
            roundResults.winner = 0;
        }
    } else {
        console.log("Invalid Selection, click again");
    }
    updateScoreBoard(roundResults); 
}


function updateScoreBoard(results) {
    let res = results;
    let msg = "";
    if(res.winner === 1) {
        davidScore += 1;
        round += 1;
        msg = `${res.davidSelection} beats ${res.halSelection} Dave wins round ${round}
        Dave: ${davidScore} vs HAL: ${halScore}`;
        console.log(msg);
        if( (davidScore > halScore) && (davidScore + halScore === 5) ) {
            resetValues();
            console.log("Congratulations Dave, you beat me!!!");
        }
    } else if(res.winner === 2) {
        halScore += 1;
        round += 1;
        msg = `${res.halSelection} beats ${res.davidSelection} Hal wins round ${round}
        Dave: ${davidScore} vs HAL: ${halScore}`;
        console.log(msg);
        if( (halScore > davidScore) && (halScore + davidScore === 5) ) {
            resetValues();
            console.log("Me HAL the computer am the winner!!! Dave, try again.");
        }
    } else {
        msg = `${res.davidSelection} and ${res.halSelection} we have a tie, make another selection 
        Dave: ${davidScore} vs HAL: ${halScore}`;
        console.log(msg);
    }
}

function resetValues() {
    round = 0;
    halScore = 0;
    davidScore = 0;
}

btns.forEach(function(elem) {
    elem.addEventListener('click', (e) => {
        playRound(e.target.textContent);
    });
});