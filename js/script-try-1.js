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
    davidSelection = prompt('What is your selection?'); 
    if(!davidSelection)
        prompt('Please enter a value');
    let lcDavidSelection = davidSelection.toLowerCase();
    halSelection = getHalChoice();
    let winner;
    let WinName;
    //let round = [lcDavidSelection, halSelection, winner];
    // David is 1 HAL is 2
    //console.log(lcDavidSelection);
    //console.log(halSelection);
    if(lcDavidSelection == "rock") {
        if(halSelection == "scissors") {
            winner = "David";
        } else if(halSelection == "paper") {
            winner = "Hal";
        } else {
            winner = "Tie";
        }       
    } else if(lcDavidSelection == "paper") {
        if(halSelection == "rock") {
            winner = "David";
        } else if(halSelection == "scissors") {
            winner = "Hal";
        } else {
            winner = "Tie";
        }   
    } else if(lcDavidSelection == "scissors") {
        if(halSelection === "paper") {
            winner = "David";
        } else if(halSelection == "rock") {
            winner = "Hal";
        } else {
            winner = "Tie";
        }
    } else {
        return `${lcDavidSelection} is not a correct choice`;
    }
    //console.log(winner);
    return winner;
}
function playGame() {
    const selections = ['rock','paper','scissors'];
    const maxRounds = 5; 
    msg = "Welcome to our game";
    //alert(msg);
    for (let counter = 1; counter <= maxRounds; counter++) {
        let winner = playRound();
        console.log(winner);
        //console.log(halSelection);
        //console.log(selections[i]);
    }
}
//let letsPlay = confirm("Do you want to play?");


//console.log(game());
//console.log(davidSelection);
//console.log(getHalChoice());
    //const davidSelection = prompt('What is your selection?');
    //const halSelection = getHalChoice();
    playGame();
//console.log(playRound(davidSelection, halSelection));

