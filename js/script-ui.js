// David (user) will play aginst HAL 5 games of RPS
// The one who wins the most games is the big Winner

const toolBox = ['ROCK','PAPER','SCISSORS'];
let halScore = 0;
let davidScore = 0;
let round = 0;
const maxRounds = 5;
const container = document.querySelector('.container');

const btnDiv = document.createElement('div');
btnDiv.classList.add('buttons');
container.appendChild(btnDiv);

const scoreBoard = document.createElement('div');
scoreBoard.classList.add('scoreboard');
container.appendChild(scoreBoard);

let selections = document.createElement('p');
selections.classList.add('selections');
selections.textContent = "";
scoreBoard.appendChild(selections);


let score = document.createElement('p');
score.classList.add('score');
score.textContent = `Dave: ${davidScore} HAL: ${halScore}`;
scoreBoard.appendChild(score);

let game = document.createElement('p');
game.classList.add('game');
game.textContent = "Let\'s play!";
scoreBoard.appendChild(game);


toolBox.forEach((tool) => {
    const btn = document.createElement('button');
    btn.classList.add('btn', 'sel');
    btn.textContent = tool;
    btnDiv.appendChild(btn);
});


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
    if(res.winner === 1) {
        davidScore += 1;
        round += 1;
        selections.textContent = `${res.davidSelection} beats ${res.halSelection}`;
        score.textContent = `Dave: ${davidScore} vs HAL: ${halScore}`;
        game.textContent = `Dave wins round ${round}`
        
        if( (davidScore > halScore) && (davidScore === 5) ) {
            resetValues();
            game.textContent = "Congratulations Dave, you beat me!!!";
        }
    } else if(res.winner === 2) {
        halScore += 1;
        round += 1;
        selections.textContent = `${res.halSelection} beats ${res.davidSelection}`;
        game.textContent =  `Hal wins round ${round}`;
        score.textContent = `${davidScore} vs HAL: ${halScore}`;

        if( (halScore > davidScore) && (halScore === 5) ) {
            resetValues();
            game.textContent = "HAL is the winner!!! Dave, try again.";
        }
    } else {
        selections.textContent = `${res.davidSelection} and ${res.halSelection}`
        game.textContent = `We have a tie, click another`;
        score.textContent = `${davidScore} vs HAL: ${halScore}`;
    }
}

function resetValues() {
    round = 0;
    halScore = 0;
    davidScore = 0;
}

btns = btnDiv.querySelectorAll('.sel');

btns.forEach(function(elem) {
    elem.addEventListener('click', (e) => {
        playRound(e.target.textContent);
    });
});