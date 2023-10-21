// David (user) will play aginst HAL 5 games of RPS
// The one who wins the most games is the big Winner
/* Algorithm - Pseudocode

- David Initiates the game's first round by making a selection
- In real time HAL produces a random choice between [rock,paper,scissors] in the toolbox array
- stores it in memory; 
- HAL compares the two selections and evaluate who's the winner of that(1,2,3,4,5) round

- HAL Updates the game scoreBoard accordingly;
- Updates the round counter;
- Displays a message:
--> showing the selections; 
--> saying who won the round;
--> showing the scoreBoard; 
--> prompts David to enter another selection;

The above are repeated in a loop until it gets to round 5 after which HAL displays a message except:

--> Showing final score
--> Declares the winner
--> a choice to start a new game OR say BYE!
*/

function getHalChoice() {
    const toolBox = ['rock','paper','scissors'];
    let index = Math.floor(Math.random() * toolBox.length);
    return toolBox[(index)];
}
function playRound(davidSelection, halSelection) {
    let lcDavidSelection = davidSelection.toLowerCase();
    let winner;
    // David is 1 HAL is 2
    console.log(halSelection);
    if(lcDavidSelection == "rock") {
        if(halSelection == "scissors") {
            winner = 1;
        } else if(halSelection == "paper") {
            winner = 2;
        } else {
            winner = 0;
        }       
    } else if(lcDavidSelection == "paper") {
        if(halSelection == "rock") {
            winner = 1;
        } else if(halSelection == "scissors") {
            winner = 2;
        } else {
            winner = 0;
        }   
    } else if(lcDavidSelection == "scissors") {
        if(halSelection === "rock") {
            winner = 1;
        } else if(halSelection == "paper") {
            winner = 2;
        } else {
            winner = 0;
        }
    } else {
        return `${lcDavidSelection} is not a correct choice`;
    }
    return winner;
}
function game() {
    const selections = ['rock','paper','scissors'];
    for (let i = 0; i < selections.length; i++) {
        const el = selections[i];
        //console.log(selections[i]);
    }
}

const davidSelection = "scissors";
const halSelection = getHalChoice();

//console.log(game());
//console.log(davidSelection);
//console.log(getHalChoice());
console.log(playRound(davidSelection, halSelection));

