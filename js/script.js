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
    console.log("I am in playRound");
    //let davidSelection;
    let davidSelection = david; 
    console.log(davidSelection);
    if(davidSelection === null || davidSelection === "") {
        resetValues();
        return;
    }
    //let ucDavidSelection = davidSelection.toUpperCase();
        
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
        //playRound();
    }
}

function resetValues() {
    round = 0;
    halScore = 0;
    davidScore = 0;
}

const playButton = document.querySelector('.play-btn');

// playButton.addEventListener('click', () => {
//         for (let round = 1; round <= maxRounds; round++) {
//             playRound();
//         }
//     }
// );
//getDavidsChoice();
btns.forEach(function(elem) {
    elem.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        playRound(e.target.textContent);
    });
});